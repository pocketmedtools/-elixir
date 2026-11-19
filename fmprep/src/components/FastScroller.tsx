/**
 * A drag handle on the left edge for moving through a long document fast,
 * like the scroll thumb in a phone's PDF viewer: drag it and the document
 * follows; while dragging, a bubble shows where you are ("Page 12 of 80" or
 * a percentage). Tapping the track jumps there.
 *
 * Works on three kinds of scroller:
 * - an element that scrolls (the zoom pane around PDF/Word/slides),
 * - the page itself (text view),
 * - a sandboxed HTML page in a frame, which reports and takes its position
 *   by message (fmFrac out, fmScrollTo in).
 */
import { useEffect, useRef, useState } from "react";

type Target =
  | { kind: "element"; el: HTMLElement | null }
  | { kind: "window" }
  | { kind: "frame"; frame: HTMLIFrameElement | null };

const THUMB = 52;

export default function FastScroller({
  target,
  label,
  fixed = false,
  top = 0,
  bottom = 0,
}: {
  target: Target;
  /** Text in the bubble while dragging, from the position 0..1. */
  label?: (frac: number) => string;
  /** Position against the screen (window scrolling) instead of the parent box. */
  fixed?: boolean;
  /** Space kept clear at the top and bottom of the track, px. */
  top?: number;
  bottom?: number;
}) {
  const track = useRef<HTMLDivElement | null>(null);
  const [frac, setFrac] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [scrollable, setScrollable] = useState(target.kind === "frame");
  const [active, setActive] = useState(false);
  const hideTimer = useRef(0);
  const dragRef = useRef(false);

  const node = target.kind === "element" ? target.el : target.kind === "frame" ? target.frame : null;

  /* Follow the document's own scrolling. */
  useEffect(() => {
    let raf = 0;
    const show = () => {
      setActive(true);
      window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setActive(false), 1500);
    };
    if (target.kind === "frame") {
      const onMsg = (e: MessageEvent) => {
        if (!target.frame || e.source !== target.frame.contentWindow) return;
        const d = e.data as { fmFrac?: number; fmLive?: number } | null;
        const f = typeof d?.fmLive === "number" ? d.fmLive : d?.fmFrac;
        if (typeof f !== "number" || dragRef.current) return;
        setFrac(Math.max(0, Math.min(1, f)));
        show();
      };
      window.addEventListener("message", onMsg);
      return () => window.removeEventListener("message", onMsg);
    }
    const el = target.kind === "element" ? target.el : document.scrollingElement;
    const src: HTMLElement | Window | null = target.kind === "element" ? target.el : window;
    if (!el || !src) return;
    const read = () => {
      raf = 0;
      const max = el.scrollHeight - el.clientHeight;
      setScrollable(max > el.clientHeight * 0.5);
      if (!dragRef.current) setFrac(max > 0 ? el.scrollTop / max : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
      show();
    };
    src.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => onScroll());
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    read();
    return () => {
      src.removeEventListener("scroll", onScroll);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.kind, node]);

  const goTo = (f: number) => {
    const v = Math.max(0, Math.min(1, f));
    setFrac(v);
    if (target.kind === "frame") {
      target.frame?.contentWindow?.postMessage({ fmScrollTo: v }, "*");
      return;
    }
    const el = target.kind === "element" ? target.el : document.scrollingElement;
    if (!el) return;
    el.scrollTop = v * (el.scrollHeight - el.clientHeight);
  };

  const fracAt = (clientY: number) => {
    const t = track.current;
    if (!t) return 0;
    const r = t.getBoundingClientRect();
    return (clientY - r.top - THUMB / 2) / Math.max(1, r.height - THUMB);
  };

  if (!scrollable) return null;

  return (
    <div
      ref={track}
      className="z-[20] select-none"
      style={{
        position: fixed ? "fixed" : "absolute",
        left: 0,
        top: fixed ? `calc(var(--sat, 0px) + ${top}px)` : top,
        bottom,
        width: 30,
        touchAction: "none",
      }}
      onPointerDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
        dragRef.current = true;
        setDragging(true);
        setActive(true);
        goTo(fracAt(e.clientY));
      }}
      onPointerMove={(e) => {
        if (!dragRef.current) return;
        e.preventDefault();
        goTo(fracAt(e.clientY));
      }}
      onPointerUp={() => {
        dragRef.current = false;
        setDragging(false);
        window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setActive(false), 1500);
      }}
      onPointerCancel={() => {
        dragRef.current = false;
        setDragging(false);
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 3,
          top: `calc(${frac} * (100% - ${THUMB}px))`,
          width: dragging ? 14 : 10,
          height: THUMB,
          borderRadius: 8,
          background: dragging ? "#14532d" : "rgba(20,83,45,.75)",
          boxShadow: "0 1px 4px rgba(0,0,0,.35)",
          opacity: active || dragging ? 1 : 0.45,
          transition: "opacity .25s, width .15s",
        }}
      />
      {dragging && label && (
        <div
          style={{
            position: "absolute",
            left: 26,
            top: `calc(${frac} * (100% - ${THUMB}px) + ${THUMB / 2 - 16}px)`,
            background: "rgba(0,0,0,.78)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 700,
            padding: "6px 10px",
            borderRadius: 8,
            whiteSpace: "nowrap",
          }}
        >
          {label(frac)}
        </div>
      )}
    </div>
  );
}
