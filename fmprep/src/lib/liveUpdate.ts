/**
 * Live updates for the installed app, without a new APK.
 *
 * Every CI build publishes the web app as fmprep-web.zip next to version.json
 * on the fmprep-apk branch. On opening, the app reads version.json; when a
 * newer build is out it downloads that zip in the background and queues it,
 * and the app switches to it the next time it goes to the background (or at
 * once from the banner). Documents, folders and progress live in the web
 * view's storage, which a bundle switch leaves untouched.
 *
 * Only a change to the native shell (a new Capacitor plugin) still needs an
 * APK; version.json says which shell build is required ("minNative").
 */
import { Capacitor } from "@capacitor/core";
import { CapacitorUpdater } from "@capgo/capacitor-updater";

export const VERSION_URL =
  "https://raw.githubusercontent.com/pocketmedtools/-elixir/fmprep-apk/version.json";

export type RemoteVersion = { build?: number; minNative?: number; web?: string };

export const hasLiveUpdates = () =>
  Capacitor.isNativePlatform() && Capacitor.isPluginAvailable("CapacitorUpdater");

/** Must run early on every launch, or the plugin rolls back to the last good bundle. */
export function markAppReady(): void {
  if (!hasLiveUpdates()) return;
  void CapacitorUpdater.notifyAppReady().catch(() => {});
}

export async function fetchRemoteVersion(): Promise<RemoteVersion | null> {
  try {
    const res = await fetch(`${VERSION_URL}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as RemoteVersion;
  } catch {
    return null;
  }
}

/** Build number of the installed APK shell (its versionName), NaN if unknown. */
export async function nativeBuild(): Promise<number> {
  if (!hasLiveUpdates()) return NaN;
  try {
    return Number((await CapacitorUpdater.current()).native);
  } catch {
    return NaN;
  }
}

let pending: Promise<string | null> | null = null;

/**
 * Downloads build `remote.build` (once) and queues it for the next
 * background/restart. Resolves to the bundle id, or null on failure.
 */
export function prepareUpdate(remote: RemoteVersion): Promise<string | null> {
  if (pending) return pending;
  pending = (async () => {
    const version = String(remote.build);
    try {
      const { bundles } = await CapacitorUpdater.list();
      let bundle = bundles.find((b) => b.version === version && b.status !== "error");
      if (!bundle) bundle = await CapacitorUpdater.download({ url: remote.web!, version });
      await CapacitorUpdater.next({ id: bundle.id });
      // Old downloads only take space.
      for (const b of bundles) {
        if (b.id !== bundle.id && b.id !== "builtin" && Number(b.version) < Number(version)) {
          await CapacitorUpdater.delete({ id: b.id }).catch(() => {});
        }
      }
      return bundle.id;
    } catch {
      pending = null;
      return null;
    }
  })();
  return pending;
}

export async function applyNow(id: string): Promise<void> {
  await CapacitorUpdater.set({ id });
}
