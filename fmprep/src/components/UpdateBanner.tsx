/**
 * "A new version is ready" - for everyone who has the app installed.
 *
 * Each Android build carries its build number, and every build publishes a
 * small version.json next to the APK. When the installed app opens (or comes
 * back to the front) it reads that file; if a newer build is out, a banner
 * offers it. Android never lets an app replace itself silently outside the
 * Play Store, so the banner opens the download and the person taps Install -
 * the new version installs over the old one and keeps their documents,
 * folders, reading positions and progress.
 */
import { useEffect, useState } from "react";

/** This build's number, set by the Android workflow; "dev" anywhere else. */
export const APP_BUILD: string = (import.meta.env.VITE_BUILD as string | undefined) ?? "dev";

const VERSION_URL = "https://raw.githubusercontent.com/pocketmedtools/-elixir/fmprep-apk/version.json";
const APK_URL = "https://github.com/pocketmedtools/-elixir/releases/download/fmprep-apk-latest/FM-Prep.apk";
/** Checked at most this often while the app stays open. */
const EVERY_MS = 30 * 60 * 1000;

export default function UpdateBanner({ native }: { native: boolean }) {
  const [latest, setLatest] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);
  const current = Number(APP_BUILD);

  useEffect(() => {
    if (!native || !Number.isFinite(current)) return;
    let last = 0;
    const check = async () => {
      if (Date.now() - last < 60_000) return;
      last = Date.now();
      try {
        const res = await fetch(`${VERSION_URL}?t=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as { build?: number };
        if (typeof data.build === "number" && data.build > current) setLatest(data.build);
      } catch {
        /* offline: try again next time the app opens */
      }
    };
    void check();
    const onVisible = () => {
      if (document.visibilityState === "visible") void check();
    };
    document.addEventListener("visibilitychange", onVisible);
    const timer = window.setInterval(() => void check(), EVERY_MS);
    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      window.clearInterval(timer);
    };
  }, [native, current]);

  if (latest === null || hidden) return null;
  return (
    <div className="px-3 pt-2 md:px-6" style={{ background: "var(--bg)" }}>
      <div
        className="mx-auto flex max-w-4xl items-center gap-3 rounded-xl px-3.5 py-3 text-white shadow-md"
        style={{ background: "#14532d" }}
        role="status"
      >
        <p className="min-w-0 flex-1 text-[14px] font-semibold leading-snug">
          A new version of FM Prep is ready.
          <span className="block text-[12px] font-normal opacity-90">
            Your documents and progress stay as they are.
          </span>
        </p>
        <button
          type="button"
          onClick={() => {
            const w = window.open(APK_URL, "_blank");
            if (!w) window.location.href = APK_URL;
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
      </div>
    </div>
  );
}
