/**
 * A PDF shown as its real pages, exactly as printed: every page keeps its
 * layout, figures, tables and fonts. Pages are drawn as they come near the
 * screen and dropped again when far away, so a 300-page book stays light.
 * The page in view is reported back so the reader reopens on it.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { loadPdfjs } from "../lib/docs";

type Pdf = Awaited<ReturnType<Awaited<ReturnType<typeof loadPdfjs>>["getDocument"]>["promise"]>;

export default function PdfPages({
  blob,
  zoom,
  startPage,
  onPage,
  scrollRoot,
}: {
  blob: Blob;
  zoom: number;
  startPage: number;
  onPage: (page: number) => void;
  /** The element that scrolls (an overlay in full screen); the window otherwise. */
  scrollRoot?: HTMLElement | null;
}) {
  const [pdf, setPdf] = useState<Pdf | null>(null);
  const [ratios, setRatios] = useState<number[]>([]);
  const [error, setError] = useState("");
  const wrap = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(360);
  const jumped = useRef(false);
  // The page reported is the topmost one at least half on screen.
  const visible = useRef(new Set<number>());
  const report = useRef(onPage);
  report.current = onPage;
  const seen = useCallback((n: number, on: boolean) => {
    if (on) visible.current.add(n);
    else visible.current.delete(n);
    if (visible.current.size) report.current(Math.min(...visible.current));
  }, []);

  useEffect(() => {
    let live = true;
    let doc: Pdf | null = null;
    (async () => {
      try {
        const pdfjs = await loadPdfjs();
        doc = await pdfjs.getDocument({ data: new Uint8Array(await blob.arrayBuffer()) }).promise;
        if (!live) return;
        // Page shapes first, so the scroll height is right before any drawing.
        const r: number[] = [];
        for (let i = 1; i <= doc.numPages; i++) {
          const v = (await doc.getPage(i)).getViewport({ scale: 1 });
          r.push(v.height / v.width);
        }
        if (!live) return;
        setRatios(r);
        setPdf(doc);
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
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Back to the page last read, once the page boxes exist.
  useEffect(() => {
    if (!pdf || jumped.current || startPage <= 1) return;
    jumped.current = true;
    const t = window.setTimeout(() => {
      document.getElementById(`pdf-page-${startPage}`)?.scrollIntoView({ block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [pdf, startPage]);

  if (error) return <p className="mt-4 text-sm text-red-700">Could not show the pages: {error}. Use Text view.</p>;
  const pageWidth = Math.round(width * zoom);
  return (
    <div ref={wrap} className="mt-3 w-full overflow-x-auto">
      {!pdf && <p className="py-6 text-center text-sm text-slate-500">Opening the PDF pages…</p>}
      <div style={{ width: pageWidth }} className="mx-auto flex flex-col gap-3">
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
            />
          ))}
      </div>
      {pdf && <p className="py-4 text-center text-xs text-slate-500">End of document - {ratios.length} pages</p>}
    </div>
  );
}

function Page({
  pdf, n, width, height, root, onVisible,
}: { pdf: Pdf; n: number; width: number; height: number; root: HTMLElement | null; onVisible: (n: number, on: boolean) => void }) {
  const box = useRef<HTMLDivElement | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setNear(e.isIntersecting)),
      { root, rootMargin: "1500px 0px" },
    );
    const seen = new IntersectionObserver(
      (entries) => entries.forEach((e) => onVisible(n, e.isIntersecting)),
      { root, threshold: 0.3 },
    );
    io.observe(el);
    seen.observe(el);
    return () => {
      io.disconnect();
      seen.disconnect();
    };
  }, [root, n, onVisible]);

  useEffect(() => {
    if (!near || !canvas.current) return;
    let task: { cancel: () => void; promise: Promise<void> } | null = null;
    let live = true;
    (async () => {
      const page = await pdf.getPage(n);
      if (!live || !canvas.current) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const base = page.getViewport({ scale: 1 });
      const viewport = page.getViewport({ scale: (width / base.width) * dpr });
      const c = canvas.current;
      c.width = Math.floor(viewport.width);
      c.height = Math.floor(viewport.height);
      const ctx = c.getContext("2d");
      if (!ctx) return;
      task = page.render({ canvasContext: ctx, viewport, canvas: c } as Parameters<typeof page.render>[0]);
      await task.promise.catch(() => undefined);
    })();
    return () => {
      live = false;
      task?.cancel();
    };
  }, [near, pdf, n, width]);

  return (
    <div
      ref={box}
      id={`pdf-page-${n}`}
      className="relative overflow-hidden rounded-md bg-white shadow"
      style={{ width, height }}
    >
      {near ? (
        <canvas ref={canvas} style={{ width, height, display: "block" }} />
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-slate-400">Page {n}</div>
      )}
      <span className="absolute bottom-1 right-2 rounded bg-black/40 px-1.5 text-[11px] text-white">{n}</span>
    </div>
  );
}
