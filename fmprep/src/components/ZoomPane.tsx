/**
 * Pinch to zoom, as in any phone document viewer.
 *
 * The app's web view does not zoom the page itself (the app's own buttons and
 * bars would zoom with it), so documents get their own zoom: two fingers
 * spread or pinch, the point between the fingers stays put, and a double tap
 * toggles between fitted and 2x. While the fingers move the content is only
 * scaled on screen (cheap, smooth); when they lift it is laid out again at the
 * new size, so text and PDF pages are sharp at every zoom.
 *
 * `fit`: wide content (a Word page, a slide, a spreadsheet) starts scaled down
 * to the screen's width, like a phone opening a document. With `apply="css"`
 * the zoom is applied here with CSS zoom; with `apply="none"` the child is
 * given the zoom and sizes itself (PDF pages are drawn at the new width).
 */
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const MIN = 0.5;
const MAX = 5;
const clamp = (z: number) => Math.min(MAX, Math.max(MIN, z));

export default function ZoomPane({
  children,
  apply = "css",
  fit = false,
  className = "",
  style,
  onScrollEl,
  resetKey,
}: {
  children: (zoom: number, viewWidth: number) => ReactNode;
  apply?: "css" | "none";
  fit?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** The scrolling element, for children that watch their own visibility. */
  onScrollEl?: (el: HTMLDivElement | null) => void;
  /** Changing it re-measures the fit (content finished rendering). */
  resetKey?: unknown;
}) {
  const outer = useRef<HTMLDivElement | null>(null);
  const mid = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);
  const [user, setUser] = useState(1);
  const [base, setBase] = useState(1);
  const [viewWidth, setViewWidth] = useState(0);
  const zoom = base * user;
  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;
  /* Where to scroll after a zoom is laid out: keeps the pinched point still. */
  const anchor = useRef<{ x: number; y: number; mx: number; my: number; ratio: number } | null>(null);

  const setOuter = useCallback(
    (el: HTMLDivElement | null) => {
      outer.current = el;
      onScrollEl?.(el);
    },
    [onScrollEl],
  );

  // The visible width, for children that size themselves (PDF pages).
  useEffect(() => {
    const o = outer.current;
    if (!o) return;
    const ro = new ResizeObserver(() => setViewWidth(o.clientWidth));
    ro.observe(o);
    setViewWidth(o.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Fit wide content to the screen width.
  useEffect(() => {
    if (!fit) return;
    const measure = () => {
      const o = outer.current;
      const i = inner.current;
      if (!o || !i) return;
      // On-screen width divided by the zoom applied: the content's own width,
      // whichever way this web view reports sizes inside CSS zoom.
      const natural = i.getBoundingClientRect().width / (apply === "css" ? zoomRef.current : 1);
      if (natural > 0) setBase(Math.min(1, (o.clientWidth - 2) / natural));
    };
    const t = window.setTimeout(measure, 60);
    const t2 = window.setTimeout(measure, 900);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
      window.removeEventListener("resize", measure);
    };
  }, [fit, apply, resetKey]);

  useLayoutEffect(() => {
    const a = anchor.current;
    const o = outer.current;
    if (!a || !o) return;
    anchor.current = null;
    o.scrollLeft = a.x * a.ratio - a.mx;
    o.scrollTop = a.y * a.ratio - a.my;
  }, [zoom]);

  useEffect(() => {
    const o = outer.current;
    const m = mid.current;
    if (!o || !m) return;
    let start: { d: number; x: number; y: number; mx: number; my: number } | null = null;
    let k = 1;
    let lastTap = 0;
    let tapAt = { x: 0, y: 0 };
    let moved = false;

    const dist = (t: TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const commit = (factor: number, mx: number, my: number, x: number, y: number) => {
      const next = clamp(zoomRef.current * factor) / zoomRef.current;
      anchor.current = { x, y, mx, my, ratio: next };
      setUser((u) => u * next);
    };

    const onStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const r = o.getBoundingClientRect();
        const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left;
        const my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
        start = { d: dist(e.touches), mx, my, x: o.scrollLeft + mx, y: o.scrollTop + my };
        k = 1;
        m.style.transformOrigin = `${start.x}px ${start.y}px`;
        m.style.willChange = "transform";
      } else if (e.touches.length === 1) {
        moved = false;
        tapAt = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onMove = (e: TouchEvent) => {
      if (start && e.touches.length === 2) {
        e.preventDefault();
        k = dist(e.touches) / start.d;
        const z = zoomRef.current;
        k = clamp(z * k) / z;
        m.style.transform = `scale(${k})`;
      } else if (e.touches.length === 1) {
        const t = e.touches[0];
        if (Math.abs(t.clientX - tapAt.x) > 10 || Math.abs(t.clientY - tapAt.y) > 10) moved = true;
      }
    };
    const onEnd = (e: TouchEvent) => {
      if (start && e.touches.length < 2) {
        const s = start;
        start = null;
        m.style.transform = "";
        m.style.willChange = "";
        if (Math.abs(k - 1) > 0.02) commit(k, s.mx, s.my, s.x, s.y);
        lastTap = 0;
        return;
      }
      if (e.touches.length === 0 && e.changedTouches.length === 1 && !moved) {
        const now = Date.now();
        const t = e.changedTouches[0];
        if (now - lastTap < 300) {
          // Double tap: zoom in to 2x on that spot, or back to fitted.
          const r = o.getBoundingClientRect();
          const mx = t.clientX - r.left;
          const my = t.clientY - r.top;
          const target = user > 1.05 ? 1 / user : 2;
          commit(target, mx, my, o.scrollLeft + mx, o.scrollTop + my);
          lastTap = 0;
        } else lastTap = now;
      }
    };
    o.addEventListener("touchstart", onStart, { passive: true });
    o.addEventListener("touchmove", onMove, { passive: false });
    o.addEventListener("touchend", onEnd, { passive: true });
    o.addEventListener("touchcancel", onEnd, { passive: true });
    return () => {
      o.removeEventListener("touchstart", onStart);
      o.removeEventListener("touchmove", onMove);
      o.removeEventListener("touchend", onEnd);
      o.removeEventListener("touchcancel", onEnd);
    };
  }, [base, user]);

  return (
    <div
      ref={setOuter}
      className={`relative overflow-auto ${className}`}
      style={{ touchAction: "pan-x pan-y", WebkitOverflowScrolling: "touch", ...style }}
    >
      <div ref={mid} style={{ width: "max-content", minWidth: "100%" }}>
        <div ref={inner} style={apply === "css" ? ({ zoom, width: "max-content" } as React.CSSProperties) : undefined}>
          {viewWidth > 0 && children(zoom, viewWidth)}
        </div>
      </div>
      {Math.abs(user - 1) > 0.02 && (
        <button
          type="button"
          onClick={() => setUser(1)}
          className="sticky bottom-3 left-3 z-10 rounded-full px-3 py-1.5 text-xs font-bold text-white"
          style={{ background: "rgba(0,0,0,.55)" }}
        >
          {Math.round(zoom * 100)}% · Reset
        </button>
      )}
    </div>
  );
}
