/**
 * A diagram, chart or figure that opens full screen to be pinched and zoomed.
 *
 * In the topic it stays as laid out; the Zoom button (or a double tap on it)
 * opens it over the page at the phone's width, where two fingers zoom it up
 * to 5x around the pinched point and drag moves around it.
 */
import { useEffect, useState, type ReactNode } from "react";
import ZoomPane from "./ZoomPane";
import { setImmersive } from "../lib/nativeShell";

export default function ZoomableBlock({ children, label, className = "" }: { children: ReactNode; label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    void setImmersive(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    // The phone's back gesture closes the zoom instead of leaving the topic.
    history.pushState({ fmZoom: true }, "");
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => {
      void setImmersive(false);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPop);
      if ((history.state as { fmZoom?: boolean } | null)?.fmZoom) history.back();
    };
  }, [open]);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Zoom ${label ?? "diagram"}`}
        className="absolute right-2 top-2 z-[5] rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
        style={{ background: "rgba(20,83,45,.85)" }}
      >
        ⤢ Zoom
      </button>
      {children}
      {open && (
        <div className="fixed inset-0 z-[300] flex flex-col" style={{ background: "var(--bg, #f7ead5)", paddingTop: "var(--sat)" }}>
          <div className="flex items-center justify-between px-3 py-2 text-[13px] text-slate-600">
            <span>Pinch to zoom · double-tap · drag to move</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close zoom"
              className="h-8 w-8 rounded-full text-sm font-bold text-white"
              style={{ background: "rgba(0,0,0,.45)" }}
            >
              ✕
            </button>
          </div>
          <ZoomPane className="flex-1 pb-10">
            {(_z, w) => <div style={{ width: Math.max(320, w - 16), margin: "0 8px" }}>{children}</div>}
          </ZoomPane>
        </div>
      )}
    </div>
  );
}
