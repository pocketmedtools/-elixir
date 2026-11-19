/**
 * A PDF shown as its real pages, exactly as printed.
 *
 * Built to open instantly and scroll smoothly on a phone:
 * - Only page 1 is measured before anything shows; every page starts at
 *   page 1's shape and the true shapes are filled in quietly afterwards.
 * - Pages are drawn one at a time, the ones on screen first; pages scrolled
 *   past before their turn are skipped, so a fast fling never queues up
 *   fifty pages of work.
 * - A new drawing is made off screen and swapped in when finished, so a page
 *   never goes blank while zooming: the old picture is stretched until the
 *   sharp one is ready.
 * - Drawn pages are kept while near (a few screens either way) and freed
 *   only when far, so scrolling back does not redraw them.
 * The page in view is reported back so the reader reopens on it.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { openPdf } from "../lib/docs";

export type Pdf = Awaited<ReturnType<typeof openPdf>>;
/** A search match: its page and boxes as fractions of the page (0..1). */
export type PdfHit = { page: number; rects: { l: number; t: number; w: number; h: number }[] };

/* One-at-a-time drawing queue, nearest page first. */
type Job = { prio: () => number; run: () => Promise<void>; cancelled: boolean };
function makeQueue() {
  const jobs: Job[] = [];
  let busy = false;
  const pump = async () => {
    if (busy) return;
    busy = true;
    while (jobs.length) {
      jobs.sort((a, b) => a.prio() - b.prio());
      const job = jobs.shift()!;
      if (job.cancelled) continue;
      try {
        await job.run();
      } catch {
        /* a cancelled or failed page is drawn again when next needed */
      }
    }
    busy = false;
  };
  return {
    add(job: Job) {
      jobs.push(job);
      void pump();
      return () => {
        job.cancelled = true;
      };
    },
  };
}
type Queue = ReturnType<typeof makeQueue>;

export default function PdfPages({
  blob,
  zoom,
  startPage,
  onPage,
  scrollRoot,
  viewWidth,
  onDoc,
  hit,
}: {
  blob: Blob;
  zoom: number;
  startPage: number;
  onPage: (page: number) => void;
  /** The element that scrolls (the zoom pane); the window otherwise. */
  scrollRoot?: HTMLElement | null;
  /** Width of the visible area, when a zoom pane around the pages scrolls sideways. */
  viewWidth?: number;
  /** The opened document, for searching. */
  onDoc?: (pdf: Pdf | null) => void;
  /** The current search match, drawn over its page. */
  hit?: PdfHit | null;
}) {
  const docCb = useRef(onDoc);
  useEffect(() => {
    docCb.current = onDoc;
  });
  const [pdf, setPdf] = useState<Pdf | null>(null);
  const [ratios, setRatios] = useState<number[]>([]);
  const [error, setError] = useState("");
  const wrap = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(360);
  const jumped = useRef(false);
  const [queue] = useState(makeQueue);
  const visible = useRef(new Set<number>());
  const report = useRef(onPage);
  useEffect(() => {
    report.current = onPage;
  });
  const at = useRef(startPage);
  const seen = useCallback((n: number, on: boolean) => {
    if (on) visible.current.add(n);
    else visible.current.delete(n);
    if (visible.current.size) {
      at.current = Math.min(...visible.current);
      report.current(at.current);
    }
  }, []);
  /* Drawing priority: pages on screen first, then by distance. */
  const priority = useCallback((n: number) => (visible.current.has(n) ? -1 : Math.abs(n - at.current)), []);

  useEffect(() => {
    let live = true;
    let doc: Pdf | null = null;
    (async () => {
      try {
        doc = await openPdf(new Uint8Array(await blob.arrayBuffer()));
        if (!live) return;
        const v1 = (await doc.getPage(1)).getViewport({ scale: 1 });
        const r: number[] = new Array(doc.numPages).fill(v1.height / v1.width);
        setRatios([...r]);
        setPdf(doc);
        docCb.current?.(doc);
        // True shape of every other page, quietly in the background.
        let changed = false;
        for (let i = 2; i <= doc.numPages && live; i++) {
          const v = (await doc.getPage(i)).getViewport({ scale: 1 });
          const ri = v.height / v.width;
          if (Math.abs(ri - r[i - 1]) > 0.005) {
            r[i - 1] = ri;
            changed = true;
          }
          if (changed && (i % 25 === 0 || i === doc.numPages)) {
            if (live) setRatios([...r]);
            changed = false;
          }
          if (i % 10 === 0) await new Promise((res) => setTimeout(res, 16));
        }
      } catch (e) {
        if (live) setError(e instanceof Error ? e.message : "This PDF could not be opened.");
      }
    })();
    return () => {
      live = false;
      void (doc as unknown as { destroy?: () => Promise<void> } | null)?.destroy?.();
    };
  }, [blob]);

  useEffect(() => {
    const el = wrap.current;
    if (!el || viewWidth) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, [viewWidth]);

  // Back to the page last read, once the page boxes exist.
  useEffect(() => {
    if (!pdf || jumped.current || startPage <= 1) return;
    jumped.current = true;
    const t = window.setTimeout(() => {
      document.getElementById(`pdf-page-${startPage}`)?.scrollIntoView({ block: "start" });
    }, 30);
    return () => window.clearTimeout(t);
  }, [pdf, startPage]);

  if (error) return <p className="mt-4 text-sm text-red-700">Could not show the pages: {error}. Use Text view.</p>;
  const pageWidth = Math.round((viewWidth ? viewWidth - 8 : width) * zoom);
  return (
    <div
      ref={wrap}
      className={viewWidth ? "py-1" : "mt-3 w-full overflow-x-auto"}
      style={viewWidth ? { width: pageWidth + 8 } : undefined}
    >
      {!pdf && <p className="py-6 text-center text-sm text-slate-400">Opening the PDF…</p>}
      <div style={{ width: pageWidth }} className="mx-auto flex flex-col gap-2">
        {pdf &&
          ratios.map((r, i) => (
            <Page
              key={i}
              pdf={pdf}
              n={i + 1}
              width={pageWidth}
              height={Math.round(pageWidth * r)}
              root={scrollRoot ?? null}
              onVisible={seen}
              queue={queue}
              priority={priority}
              hit={hit && hit.page === i + 1 ? hit : null}
            />
          ))}
      </div>
      {pdf && <p className="py-4 text-center text-xs text-slate-400">End of document - {ratios.length} pages</p>}
    </div>
  );
}

function Page({
  pdf,
  n,
  width,
  height,
  root,
  onVisible,
  queue,
  priority,
  hit,
}: {
  pdf: Pdf;
  n: number;
  width: number;
  height: number;
  root: HTMLElement | null;
  onVisible: (n: number, on: boolean) => void;
  queue: Queue;
  priority: (n: number) => number;
  hit: PdfHit | null;
}) {
  const box = useRef<HTMLDivElement | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const [near, setNear] = useState(false);
  const [keep, setKeep] = useState(false);
  const drawnAt = useRef(0);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    // Draw within ~2 screens; free the picture only beyond ~6 screens.
    const nearIo = new IntersectionObserver((es) => es.forEach((e) => setNear(e.isIntersecting)), {
      root,
      rootMargin: "1200px 0px",
    });
    const keepIo = new IntersectionObserver((es) => es.forEach((e) => setKeep(e.isIntersecting)), {
      root,
      rootMargin: "5000px 0px",
    });
    const seenIo = new IntersectionObserver((es) => es.forEach((e) => onVisible(n, e.isIntersecting)), {
      root,
      threshold: 0.3,
    });
    nearIo.observe(el);
    keepIo.observe(el);
    seenIo.observe(el);
    return () => {
      nearIo.disconnect();
      keepIo.disconnect();
      seenIo.disconnect();
      onVisible(n, false);
    };
  }, [root, n, onVisible]);

  // Free the picture when far away.
  useEffect(() => {
    if (keep || !canvas.current) return;
    canvas.current.width = 0;
    canvas.current.height = 0;
    drawnAt.current = 0;
  }, [keep]);

  // Draw (or redraw sharper after a zoom) when near.
  useEffect(() => {
    if (!near) return;
    // Already drawn at about this size: the stretched picture is fine.
    if (drawnAt.current && Math.abs(drawnAt.current - width) / width < 0.08) return;
    let task: { cancel: () => void; promise: Promise<void> } | null = null;
    let stop = false;
    const cancel = queue.add({
      prio: () => priority(n),
      cancelled: false,
      run: async () => {
        if (stop || !canvas.current) return;
        const page = await pdf.getPage(n);
        if (stop || !canvas.current) return;
        // Sharp on a phone screen, but never a picture so large it stalls.
        const base = page.getViewport({ scale: 1 });
        const cssW = width;
        const cssH = (cssW * base.height) / base.width;
        const dpr = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(4_500_000 / (cssW * cssH)));
        const viewport = page.getViewport({ scale: (cssW / base.width) * dpr });
        const off = document.createElement("canvas");
        off.width = Math.floor(viewport.width);
        off.height = Math.floor(viewport.height);
        const ctx = off.getContext("2d", { alpha: false });
        if (!ctx) return;
        task = page.render({ canvasContext: ctx, viewport, canvas: off } as Parameters<typeof page.render>[0]);
        await task.promise;
        if (stop || !canvas.current) return;
        const c = canvas.current;
        c.width = off.width;
        c.height = off.height;
        c.getContext("2d")?.drawImage(off, 0, 0);
        off.width = 0;
        drawnAt.current = cssW;
      },
    });
    return () => {
      stop = true;
      cancel();
      task?.cancel();
    };
  }, [near, pdf, n, width, queue, priority]);

  return (
    <div
      ref={box}
      id={`pdf-page-${n}`}
      className="relative overflow-hidden rounded-md shadow"
      style={{ width, height, background: "#ffffff", contain: "strict" }}
    >
      {/* Always mounted: the last picture stays (stretched) while a sharper one is drawn. */}
      <canvas ref={canvas} style={{ width, height, display: "block" }} />
      {hit?.rects.map((r, k) => (
        <span
          key={k}
          className="pdf-hit pointer-events-none absolute"
          style={{
            left: `${r.l * 100}%`,
            top: `${r.t * 100}%`,
            width: `${r.w * 100}%`,
            height: `${r.h * 100}%`,
            background: "rgba(251,146,60,.45)",
            outline: "2px solid #ea580c",
            borderRadius: 2,
          }}
        />
      ))}
      <span className="absolute bottom-1 right-2 rounded bg-black/40 px-1.5 text-[11px] text-white">{n}</span>
    </div>
  );
}
