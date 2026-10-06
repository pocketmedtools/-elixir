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

export const VERSION_URL =
  "https://raw.githubusercontent.com/pocketmedtools/-elixir/fmprep-apk/version.json";

export type RemoteVersion = { build?: number; minNative?: number; web?: string };

export type UpdateState =
  | { step: "idle" }
  | { step: "checking" }
  | { step: "latest"; build: number }
  | { step: "downloading"; build: number; percent: number }
  | { step: "applying"; build: number }
  | { step: "needs-apk"; build: number }
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

async function fetchRemoteVersion(): Promise<RemoteVersion> {
  const res = await fetch(`${VERSION_URL}?t=${Date.now()}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`version check answered ${res.status}`);
  return (await res.json()) as RemoteVersion;
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
    if (!hasLiveUpdates() || !remote.web) {
      setState({ step: "needs-apk", build });
      return;
    }
    const shell = await nativeBuild();
    // An unreadable shell version is not a reason to stop: try the update.
    if (remote.minNative && Number.isFinite(shell) && shell < remote.minNative) {
      setState({ step: "needs-apk", build });
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
        bundle = await CapacitorUpdater.download({ url: remote.web, version });
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
