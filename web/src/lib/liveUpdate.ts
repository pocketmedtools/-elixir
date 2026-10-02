/**
 * Live updates.
 *
 * Website: a reopen already loads the newest deploy (service worker,
 * network-first). While the page stays open, checkForUpdate() notices a newer
 * deploy and offers a refresh.
 *
 * Installed Android app: the web code ships inside the APK, so on every open
 * the app compares its build with the published site's version.json, quietly
 * downloads a newer build into app storage and switches the WebView to it
 * (Capacitor's own WebView server path). The origin stays https://localhost,
 * so accounts and saved results are untouched.
 *
 * Safety: the new build is made permanent only after it has started
 * successfully (confirmBoot). A build that fails to start is never persisted:
 * the next open falls back to the previous one and that build is skipped.
 * Every file's byte size is checked before switching.
 */
import { Capacitor, CapacitorHttp, WebView } from "@capacitor/core";

export const LIVE_SITE = "https://pocketmedtools.github.io/-elixir/";
const DIR = "pm-live";
const READY = "pm-live-ready"; // { build, path } downloaded, not yet running
const PENDING = "pm-live-pending"; // build being switched to, awaiting a good start
const BAD = "pm-live-bad"; // build that failed to start; never retried
const UPDATED = "pm-live-updated"; // build just switched to (for the notice)

export interface Manifest {
  build: string;
  native: number;
  minNative: number;
  files: { p: string; s: number }[];
}

export type UpdateState =
  | { kind: "ready"; build: string }
  | { kind: "apk"; latest: number };

export const isNativeApp = (): boolean => Capacitor.isNativePlatform();

function read<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown): void {
  try {
    if (value == null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or blocked: updates simply wait */
  }
}

/** True when the published build differs from this one and can run here. */
export function isNewer(m: Manifest | null, current: string, installedNative: number): boolean {
  if (!m || typeof m.build !== "string" || !m.build || m.build === current) return false;
  if (!Array.isArray(m.files) || !m.files.some((f) => f.p === "index.html")) return false;
  return installedNative >= (Number(m.minNative) || 0);
}

async function fetchManifest(): Promise<Manifest | null> {
  const url = `${isNativeApp() ? LIVE_SITE : import.meta.env.BASE_URL}version.json?t=${Date.now()}`;
  if (isNativeApp()) {
    try {
      // Native HTTP: no CORS involved, no WebView cache.
      const res = await CapacitorHttp.get({ url, responseType: "json", connectTimeout: 8000, readTimeout: 8000 });
      if (res.status === 200) return (typeof res.data === "string" ? JSON.parse(res.data) : res.data) as Manifest;
    } catch {
      /* fall back to the WebView's fetch */
    }
  }
  try {
    const res = await fetch(url, { cache: "no-store" });
    return res.ok ? ((await res.json()) as Manifest) : null;
  } catch {
    return null;
  }
}

async function installedNativeVersion(): Promise<number> {
  try {
    const { App } = await import("@capacitor/app");
    return Number((await App.getInfo()).build) || 0;
  } catch {
    return __NATIVE_VERSION__;
  }
}

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).replace(/^data:[^,]*,/, ""));
    r.onerror = () => reject(r.error);
    r.readAsDataURL(blob);
  });
}

/** Download one published file into app storage and confirm its size. */
async function saveFile(file: { p: string; s: number }, dir: string): Promise<void> {
  const { Filesystem, Directory } = await import("@capacitor/filesystem");
  const path = `${dir}/${file.p}`;
  const url = `${LIVE_SITE}${file.p}`;
  const sizeOk = async () => {
    try {
      return (await Filesystem.stat({ path, directory: Directory.Data })).size === file.s;
    } catch {
      return false;
    }
  };
  try {
    await Filesystem.downloadFile({ url, path, directory: Directory.Data, recursive: true, connectTimeout: 15000, readTimeout: 15000 });
    if (await sizeOk()) return;
  } catch {
    /* fall through to the WebView download */
  }
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`download ${file.p}: ${res.status}`);
  await Filesystem.writeFile({ path, data: await blobToBase64(await res.blob()), directory: Directory.Data, recursive: true });
  if (!(await sizeOk())) throw new Error(`size mismatch ${file.p}`);
}

async function download(m: Manifest): Promise<string> {
  const { Filesystem, Directory } = await import("@capacitor/filesystem");
  const dir = `${DIR}/${m.build}`;
  try {
    await Filesystem.rmdir({ path: dir, directory: Directory.Data, recursive: true });
  } catch {
    /* nothing left over from an interrupted attempt */
  }
  for (const f of m.files) await saveFile(f, dir);
  const { uri } = await Filesystem.getUri({ path: dir, directory: Directory.Data });
  return decodeURIComponent(uri.replace(/^file:\/\//, ""));
}

let checking = false;

/**
 * Look for a newer published build. Native: downloads it and resolves
 * "ready" once it can be switched to. Website: resolves "ready" when a
 * refresh would load a newer deploy.
 */
export async function checkForUpdate(): Promise<UpdateState | null> {
  if (checking) return null;
  checking = true;
  try {
    const m = await fetchManifest();
    if (!isNativeApp()) {
      return m && m.build && m.build !== __BUILD_ID__ && !__BUILD_ID__.startsWith("dev-")
        ? { kind: "ready", build: m.build }
        : null;
    }
    const installed = await installedNativeVersion();
    if (!m) return null;
    if (!isNewer(m, __BUILD_ID__, installed)) {
      // A newer APK exists whose web code this install cannot run.
      return m.build !== __BUILD_ID__ && installed < (Number(m.minNative) || 0)
        ? { kind: "apk", latest: m.native }
        : null;
    }
    if (read<string>(BAD) === m.build) return null;
    const ready = read<{ build: string; path: string }>(READY);
    if (ready?.build !== m.build) {
      const path = await download(m);
      write(READY, { build: m.build, path });
    }
    return { kind: "ready", build: m.build };
  } catch {
    return null; // offline or interrupted: try again next open
  } finally {
    checking = false;
  }
}

/** Switch to the downloaded build now (the page reloads into it). */
export async function applyUpdate(): Promise<void> {
  if (!isNativeApp()) {
    window.location.reload();
    return;
  }
  const ready = read<{ build: string; path: string }>(READY);
  if (!ready || ready.build === __BUILD_ID__) return;
  write(READY, null);
  write(PENDING, ready.build);
  await WebView.setServerBasePath({ path: ready.path });
}

/**
 * Run once the app has rendered. Makes a just-switched build permanent,
 * remembers one that failed to start, and clears out old builds.
 * Returns the build id when this open is the first on a new build.
 */
export async function confirmBoot(): Promise<string | null> {
  if (!isNativeApp()) return null;
  const pending = read<string>(PENDING);
  let updated: string | null = null;
  if (pending) {
    write(PENDING, null);
    if (pending === __BUILD_ID__) {
      await WebView.persistServerBasePath();
      write(UPDATED, pending);
      updated = pending;
    } else {
      write(BAD, pending); // the switch did not come up; stay on this build
    }
  }
  // Remove builds that are neither running nor waiting to run.
  try {
    const { Filesystem, Directory } = await import("@capacitor/filesystem");
    const keep = new Set([__BUILD_ID__, read<{ build: string }>(READY)?.build]);
    const { files } = await Filesystem.readdir({ path: DIR, directory: Directory.Data });
    for (const f of files) {
      if (!keep.has(f.name)) await Filesystem.rmdir({ path: `${DIR}/${f.name}`, directory: Directory.Data, recursive: true });
    }
  } catch {
    /* no downloaded builds yet */
  }
  return updated;
}

/** Native app: unregister any service worker left by older versions. */
export function dropNativeServiceWorkers(): void {
  navigator.serviceWorker?.getRegistrations?.()
    .then((regs) => regs.forEach((r) => r.unregister()))
    .catch(() => {});
}
