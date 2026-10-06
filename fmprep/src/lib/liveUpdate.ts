/**
 * Live updates for the installed app, without a new APK.
 *
 * Every CI build publishes the web app as fmprep-web-<build>.zip next to
 * version.json on the fmprep-apk branch. On opening (and on coming back to
 * the front) the app reads version.json; when a newer build is out it
 * downloads that zip and switches to it as soon as it is in - the page
 * reloads once and comes back where it was, since navigation, reading
 * positions, documents and progress all live in the web view's storage.
 *
 * Only a change to the native shell (a new Capacitor plugin) still needs an
 * APK; version.json says which shell build is required ("minNative").
 * Every step reports into `updateState`, which the footer shows, so a failure
 * on a phone can be read off the screen.
 */
import { Capacitor } from "@capacitor/core";
import { CapacitorUpdater } from "@capgo/capacitor-updater";

const REPO = "pocketmedtools/-elixir";
/* version.json from three hosts, newest wins. Some networks in India block
   raw.githubusercontent.com outright, so it is never the only road. */
const VERSION_SOURCES: { url: string; api?: boolean }[] = [
  { url: `https://api.github.com/repos/${REPO}/contents/version.json?ref=fmprep-apk`, api: true },
  { url: `https://cdn.jsdelivr.net/gh/${REPO}@fmprep-apk/version.json` },
  { url: `https://raw.githubusercontent.com/${REPO}/fmprep-apk/version.json` },
];

export type RemoteVersion = { build?: number; minNative?: number; web?: string; webs?: string[]; apk?: string };

export type UpdateState =
  | { step: "idle" }
  | { step: "checking" }
  | { step: "latest"; build: number }
  | { step: "downloading"; build: number; percent: number }
  | { step: "applying"; build: number }
  | { step: "needs-apk"; build: number; apk?: string }
  | { step: "failed"; message: string };

let state: UpdateState = { step: "idle" };
const listeners = new Set<() => void>();
function setState(next: UpdateState) {
  state = next;
  listeners.forEach((l) => l());
}
export const updateState = () => state;
export function subscribeUpdate(l: () => void): () => void {
  listeners.add(l);
  return () => listeners.delete(l);
}

export const hasLiveUpdates = () =>
  Capacitor.isNativePlatform() && Capacitor.isPluginAvailable("CapacitorUpdater");

/** Must run early on every launch, or the plugin rolls back to the last good bundle. */
export function markAppReady(): void {
  if (!hasLiveUpdates()) return;
  void CapacitorUpdater.notifyAppReady().catch(() => {});
}

async function fetchOne(src: { url: string; api?: boolean }): Promise<RemoteVersion> {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 10_000);
  try {
    const sep = src.url.includes("?") ? "&" : "?";
    const res = await fetch(src.api ? src.url : `${src.url}${sep}t=${Date.now()}`, {
      cache: "no-store",
      signal: ctl.signal,
      headers: src.api ? { Accept: "application/vnd.github.raw+json" } : undefined,
    });
    if (!res.ok) throw new Error(`${new URL(src.url).host} ${res.status}`);
    return (await res.json()) as RemoteVersion;
  } finally {
    clearTimeout(t);
  }
}

async function fetchRemoteVersion(): Promise<RemoteVersion> {
  const got = await Promise.allSettled(VERSION_SOURCES.map(fetchOne));
  const ok = got.flatMap((g) => (g.status === "fulfilled" && Number.isFinite(Number(g.value.build)) ? [g.value] : []));
  if (!ok.length) {
    const why = got.map((g) => (g.status === "rejected" ? String((g.reason as Error)?.message ?? g.reason) : "bad file"));
    throw new Error(`could not reach the update server (${why.join("; ")})`);
  }
  return ok.reduce((a, b) => (Number(b.build) > Number(a.build) ? b : a));
}

/** Build number of the installed APK shell (its versionName); NaN if unknown. */
async function nativeBuild(): Promise<number> {
  try {
    return parseInt(String((await CapacitorUpdater.current()).native), 10);
  } catch {
    return NaN;
  }
}

let running = false;
let lastRun = 0;

/**
 * Check, download and apply. Safe to call often: one run at a time, and not
 * more than once a minute unless `force`.
 */
export async function checkForUpdate(current: number, force = false): Promise<void> {
  if (!Capacitor.isNativePlatform() || !Number.isFinite(current) || running) return;
  if (!force && Date.now() - lastRun < 60_000) return;
  running = true;
  lastRun = Date.now();
  try {
    setState({ step: "checking" });
    const remote = await fetchRemoteVersion();
    const build = Number(remote.build);
    if (!Number.isFinite(build) || build <= current) {
      setState({ step: "latest", build: current });
      return;
    }
    const webs = [...(remote.webs ?? []), ...(remote.web ? [remote.web] : [])];
    if (!hasLiveUpdates() || !webs.length) {
      setState({ step: "needs-apk", build, apk: remote.apk });
      return;
    }
    const shell = await nativeBuild();
    // An unreadable shell version is not a reason to stop: try the update.
    if (remote.minNative && Number.isFinite(shell) && shell < remote.minNative) {
      setState({ step: "needs-apk", build, apk: remote.apk });
      return;
    }

    const version = String(build);
    const { bundles } = await CapacitorUpdater.list();
    let bundle = bundles.find((b) => b.version === version && b.status !== "error");
    if (!bundle) {
      setState({ step: "downloading", build, percent: 0 });
      const sub = await CapacitorUpdater.addListener("download", (e) => {
        setState({ step: "downloading", build, percent: Math.round(e.percent ?? 0) });
      });
      try {
        // Each mirror in turn until one delivers.
        let lastErr: unknown = null;
        for (const url of webs) {
          try {
            bundle = await CapacitorUpdater.download({ url, version });
            break;
          } catch (e) {
            lastErr = e;
          }
        }
        if (!bundle) throw lastErr ?? new Error("download failed");
      } finally {
        void sub.remove();
      }
    }
    // Older downloads only take space.
    for (const b of bundles) {
      if (b.id !== bundle.id && b.id !== "builtin" && Number(b.version) < build) {
        await CapacitorUpdater.delete({ id: b.id }).catch(() => {});
      }
    }
    setState({ step: "applying", build });
    // A moment for the banner to be seen, then the switch (the page reloads).
    await new Promise((r) => setTimeout(r, 800));
    await CapacitorUpdater.set({ id: bundle.id });
  } catch (e) {
    setState({ step: "failed", message: e instanceof Error ? e.message : String(e) });
  } finally {
    running = false;
  }
}
