/**
 * Keeps every installed copy of FM Prep current.
 *
 * Each build publishes version.json and the web app as a zip. When the app
 * opens (or comes back to the front) it reads version.json; a newer build is
 * downloaded in the background and switched to automatically the next time
 * the app is left, or at once from the banner - no new APK, nothing to
 * install. Documents, folders, reading positions and progress stay.
 *
 * Only when the native shell itself changed (or this APK predates live
 * updates) does the banner fall back to offering the APK download.
 */
import { useEffect, useState } from "react";
import {
  applyNow,
  fetchRemoteVersion,
  hasLiveUpdates,
  nativeBuild,
  prepareUpdate,
} from "../lib/liveUpdate";

/** This build's number, set by the Android workflow; "dev" anywhere else. */
export const APP_BUILD: string = (import.meta.env.VITE_BUILD as string | undefined) ?? "dev";

const APK_URL = "https://github.com/pocketmedtools/-elixir/releases/download/fmprep-apk-latest/FM-Prep.apk";
/** Checked at most this often while the app stays open. */
const EVERY_MS = 30 * 60 * 1000;

type Offer = { kind: "apk" } | { kind: "ready"; id: string };

export default function UpdateBanner({ native }: { native: boolean }) {
  const [offer, setOffer] = useState<Offer | null>(null);
  const [hidden, setHidden] = useState(false);
  const [applying, setApplying] = useState(false);
  const current = Number(APP_BUILD);

  useEffect(() => {
    if (!native || !Number.isFinite(current)) return;
    let last = 0;
    const check = async () => {
      if (Date.now() - last < 60_000) return;
      last = Date.now();
      const remote = await fetchRemoteVersion();
      if (!remote || typeof remote.build !== "number" || remote.build <= current) return;
      const shell = await nativeBuild();
      const shellOk =
        hasLiveUpdates() && !!remote.web && (!remote.minNative || (Number.isFinite(shell) && shell >= remote.minNative));
      if (!shellOk) {
        setOffer({ kind: "apk" });
        return;
      }
      const id = await prepareUpdate(remote);
      if (id) setOffer({ kind: "ready", id });
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

  if (!offer || hidden) return null;
  const ready = offer.kind === "ready";
  return (
    <div className="px-3 pt-2 md:px-6" style={{ background: "var(--bg)" }}>
      <div
        className="mx-auto flex max-w-4xl items-center gap-3 rounded-xl px-3.5 py-3 text-white shadow-md"
        style={{ background: "#14532d" }}
        role="status"
      >
        <p className="min-w-0 flex-1 text-[14px] font-semibold leading-snug">
          {ready ? "New version downloaded." : "A new version of FM Prep is ready."}
          <span className="block text-[12px] font-normal opacity-90">
            {ready
              ? "It switches on by itself when you leave the app. Your documents and progress stay."
              : "Your documents and progress stay as they are."}
          </span>
        </p>
        <button
          type="button"
          disabled={applying}
          onClick={() => {
            if (offer.kind === "ready") {
              setApplying(true);
              void applyNow(offer.id).catch(() => setApplying(false));
              return;
            }
            const w = window.open(APK_URL, "_blank");
            if (!w) window.location.href = APK_URL;
          }}
          className="shrink-0 rounded-lg px-3 py-2 text-[13px] font-bold"
          style={{ background: "#fcf4e6", color: "#14532d" }}
        >
          {ready ? (applying ? "Updating…" : "Update now") : "Update now"}
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
