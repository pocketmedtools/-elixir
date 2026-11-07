/**
 * A Word, PowerPoint or Excel file shown as it was made (see lib/office.ts).
 * Rendered once per file; zooming is done around it by ZoomPane.
 *
 * The file is drawn inside a shadow root, sealed off from the app's own
 * stylesheet: the app's cream theme, its striped table rows and its heading
 * colours never reach the document. A white page stays white and every colour
 * is the one the author chose.
 */
import { useEffect, useRef, useState } from "react";
import { renderDocx, renderPptx, sheetToTables } from "../lib/office";

/* Inside the seal: start from the browser's defaults, not the app's. */
const BASE_CSS = `:host{all:initial;display:block}
.fm-root{all:initial;display:block;font-family:Calibri,Carlito,Arial,sans-serif;color:#000;line-height:normal}
img{max-width:none}`;

/* pptx-preview puts the slides in a box of one slide's height that scrolls on
   its own; inside the zoom pane the slides should simply stack. */
const PPTX_CSS = `.pptx-preview-wrapper{height:auto!important;overflow:visible!important;background:transparent!important}
.pptx-preview-slide-wrapper{margin:0 auto 12px!important;box-shadow:0 1px 4px rgba(0,0,0,.25)}`;

/* A sheet as Excel shows it: white cells, thin grey grid lines. */
const SHEET_CSS = `.fm-sheet{background:#fff;display:inline-block}
.fm-sheet table{border-collapse:collapse;background:#fff;font:11pt/1.3 Calibri,Carlito,Arial,sans-serif;color:#000}
.fm-sheet td,.fm-sheet th{border:1px solid #d4d4d4;padding:2px 6px;white-space:nowrap;vertical-align:bottom;background:#fff}`;

export default function OfficeView({
  kind,
  blob,
  onReady,
}: {
  kind: "docx" | "pptx" | "xlsx";
  blob: Blob;
  /** Called when the file has been laid out, so the zoom can fit it. */
  onReady?: () => void;
}) {
  const hostEl = useRef<HTMLDivElement | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(true);
  const [sheets, setSheets] = useState<{ name: string; html: string }[]>([]);
  const [tab, setTab] = useState(0);
  const ready = useRef(onReady);
  useEffect(() => {
    ready.current = onReady;
  });

  // The sealed root, made once.
  useEffect(() => {
    const host = hostEl.current;
    if (!host || root.current) return;
    const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = BASE_CSS + PPTX_CSS + SHEET_CSS;
    const div = document.createElement("div");
    div.className = "fm-root";
    shadow.append(style, div);
    root.current = div;
  }, []);

  useEffect(() => {
    let live = true;
    let cleanup: (() => void) | undefined;
    (async () => {
      setBusy(true);
      setError("");
      try {
        const into = root.current;
        if (!into) return;
        if (kind === "xlsx") {
          const s = await sheetToTables(await blob.arrayBuffer());
          if (live) setSheets(s);
        } else if (kind === "docx") {
          await renderDocx(blob, into);
        } else {
          const box = document.createElement("div");
          box.style.padding = "8px";
          into.replaceChildren(box);
          cleanup = await renderPptx(await blob.arrayBuffer(), box);
        }
      } catch (e) {
        if (live) setError(e instanceof Error ? e.message : "This file could not be laid out.");
      } finally {
        if (live) {
          setBusy(false);
          window.setTimeout(() => ready.current?.(), 50);
        }
      }
    })();
    return () => {
      live = false;
      try {
        cleanup?.();
      } catch {
        /* already gone */
      }
    };
  }, [kind, blob]);

  // The chosen sheet, drawn inside the seal.
  useEffect(() => {
    if (kind !== "xlsx" || !root.current || !sheets[tab]) return;
    root.current.innerHTML = `<div class="fm-sheet">${sheets[tab].html}</div>`;
    window.setTimeout(() => ready.current?.(), 50);
  }, [kind, sheets, tab]);

  return (
    <div>
      {error && (
        <p className="p-4 text-sm text-red-700">
          Could not show this file as made: {error}. Use Text view, or export the original file.
        </p>
      )}
      {busy && !error && <p className="p-4 text-center text-sm text-slate-600">Laying out the file…</p>}
      {kind === "xlsx" && sheets.length > 1 && (
        <div className="flex gap-1 px-2 pt-2">
          {sheets.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setTab(i)}
              className={`rounded-t-md border px-3 py-1 text-xs font-semibold ${i === tab ? "border-slate-400 bg-white text-slate-900" : "border-transparent bg-slate-200 text-slate-600"}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      )}
      <div ref={hostEl} />
    </div>
  );
}
