/**
 * Keeps every installed copy of FM Prep current, with no APK to download.
 *
 * The check runs when the app opens, whenever it comes back to the front, and
 * every half hour while open. A newer build is downloaded and switched to at
 * once (src/lib/liveUpdate.ts); the banner shows the progress. Only when the
 * native shell itself changed does it fall back to offering the APK.
 */
import { useEffect, useState, useSyncExternalStore } from "react";
import { checkForUpdate, subscribeUpdate, updateState, type UpdateState } from "../lib/liveUpdate";

/** This build's number, set by the Android workflow; "dev" anywhere else. */
export const APP_BUILD: string = (import.meta.env.VITE_BUILD as string | undefined) ?? "dev";

const APK_URL = "https://github.com/pocketmedtools/-elixir/releases/download/fmprep-apk-latest/FM-Prep.apk";
const EVERY_MS = 30 * 60 * 1000;

export function useUpdateState(): UpdateState {
  return useSyncExternalStore(subscribeUpdate, updateState);
}

/** One line for the footer: what the updater last did. */
export function updateLine(s: UpdateState): string {
  switch (s.step) {
    case "checking":
      return "Checking for updates…";
    case "latest":
      return "Up to date";
    case "downloading":
      return `Downloading version ${s.build}… ${s.percent}%`;
    case "applying":
      return `Installing version ${s.build}…`;
    case "needs-apk":
      return `Version ${s.build} needs the new APK`;
    case "failed":
      return `Update failed: ${s.message.slice(0, 120)}`;
    default:
      return "";
  }
}

export default function UpdateBanner({ native }: { native: boolean }) {
  const s = useUpdateState();
  const [hidden, setHidden] = useState(false);
  const current = Number(APP_BUILD);

  useEffect(() => {
    if (!native || !Number.isFinite(current)) return;
    const t = window.setTimeout(() => void checkForUpdate(current), 1500);
    const onVisible = () => {
      if (document.visibilityState === "visible") void checkForUpdate(current);
    };
    document.addEventListener("visibilitychange", onVisible);
    const timer = window.setInterval(() => void checkForUpdate(current), EVERY_MS);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("visibilitychange", onVisible);
      window.clearInterval(timer);
    };
  }, [native, current]);

  const show = s.step === "downloading" || s.step === "applying" || s.step === "needs-apk";
  if (!show || hidden) return null;
  return (
    <div className="px-3 pt-2 md:px-6" style={{ background: "var(--bg)" }}>
      <div
        className="mx-auto flex max-w-4xl items-center gap-3 rounded-xl px-3.5 py-3 text-white shadow-md"
        style={{ background: "#14532d" }}
        role="status"
      >
        <p className="min-w-0 flex-1 text-[14px] font-semibold leading-snug">
          {s.step === "needs-apk" ? "A new version of FM Prep is ready." : updateLine(s)}
          <span className="block text-[12px] font-normal opacity-90">
            {s.step === "needs-apk"
              ? "This one needs the new app file. Your documents and progress stay."
              : "Updating by itself - your place, documents and progress stay."}
          </span>
        </p>
        {s.step === "needs-apk" && (
          <>
            <button
              type="button"
              onClick={() => {
                const url = (s.step === "needs-apk" && s.apk) || APK_URL;
                const w = window.open(url, "_blank");
                if (!w) window.location.href = url;
              }}
              className="shrink-0 rounded-lg px-3 py-2 text-[13px] font-bold"
              style={{ background: "#fcf4e6", color: "#14532d" }}
            >
              Update now
            </button>
            <button
              type="button"
              onClick={() => setHidden(true)}
              aria-label="Later"
              className="shrink-0 text-[12px] font-semibold underline opacity-90"
            >
              Later
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/** "Version 228 · Up to date · Check now", for the home page and footer. */
export function UpdateStatusLine({ className = "" }: { className?: string }) {
  const s = useUpdateState();
  const native = Boolean(
    (globalThis as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.(),
  );
  if (!native) return null;
  const line = updateLine(s);
  return (
    <div className={`text-[12px] text-slate-500 ${className}`}>
      Version {APP_BUILD}
      {line ? ` · ${line}` : ""} ·{" "}
      <button
        type="button"
        onClick={() => void checkForUpdate(Number(APP_BUILD), true)}
        className="font-semibold underline"
      >
        Check now
      </button>
    </div>
  );
}
