import { useEffect, useRef, useState } from "react";
import { applyUpdate, checkForUpdate, confirmBoot, LIVE_SITE, type UpdateState } from "../lib/liveUpdate";

const RECHECK_MS = 10 * 60 * 1000;

function autoTried(build: string): boolean {
  try {
    if (sessionStorage.getItem("pm-auto-update") === build) return true;
    sessionStorage.setItem("pm-auto-update", build);
  } catch {
    return true;
  }
  return false;
}

/**
 * Brings every device onto the newest version. On open the app checks for a
 * newer build; if the user has not started typing yet it switches at once,
 * otherwise a small bar offers "Update now" so no entry is lost.
 */
export default function UpdateNotice() {
  const [state, setState] = useState<UpdateState | null>(null);
  const [updated, setUpdated] = useState(false);
  const typed = useRef(false);
  const lastCheck = useRef(0);

  useEffect(() => {
    const onInput = () => { typed.current = true; };
    document.addEventListener("input", onInput, true);

    const run = async () => {
      lastCheck.current = Date.now();
      const s = await checkForUpdate();
      if (!s) return;
      // Switch by itself at most once per build per session, so a CDN that
      // still serves the old page can never cause a reload loop.
      if (s.kind === "ready" && !typed.current && !autoTried(s.build)) {
        await applyUpdate();
        return;
      }
      setState(s);
    };

    confirmBoot().then((build) => {
      if (build) {
        setUpdated(true);
        window.setTimeout(() => setUpdated(false), 7000);
      }
      run();
    });

    const onVisible = () => {
      if (document.visibilityState !== "visible") return;
      if (Date.now() - lastCheck.current < RECHECK_MS) return;
      typed.current = false; // a fresh look at the app counts as a new open
      run();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      document.removeEventListener("input", onInput, true);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  if (updated) {
    return (
      <div role="status" className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md rounded-xl bg-emerald-800 px-4 py-3 text-sm font-bold text-white shadow-lg">
        ✓ Updated to the latest version
      </div>
    );
  }
  if (!state) return null;

  return (
    <div role="status" className="fixed inset-x-3 bottom-3 z-[60] mx-auto flex max-w-md items-center justify-between gap-3 rounded-xl bg-slate-900 px-4 py-3 text-white shadow-lg">
      <p className="text-sm font-bold">
        {state.kind === "ready" ? "A new version is ready." : "A new app version is available."}
      </p>
      {state.kind === "ready" ? (
        <button type="button" onClick={() => applyUpdate()}
          className="shrink-0 rounded-lg bg-white px-3 py-2 text-sm font-black text-slate-900">
          Update now
        </button>
      ) : (
        <a href={`${LIVE_SITE}Pocket-Med.apk`} target="_blank" rel="noreferrer"
          className="shrink-0 rounded-lg bg-white px-3 py-2 text-sm font-black text-slate-900">
          Download
        </a>
      )}
      {state.kind === "apk" && (
        <button type="button" aria-label="Dismiss" onClick={() => setState(null)} className="text-lg font-black text-white/70">×</button>
      )}
    </div>
  );
}
