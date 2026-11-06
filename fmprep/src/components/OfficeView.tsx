/**
 * A Word, PowerPoint or Excel file shown as it was made (see lib/office.ts).
 * Rendered once per file; zooming is done around it by ZoomPane.
 */
import { useEffect, useRef, useState } from "react";
import { renderDocx, renderPptx, sheetToTables } from "../lib/office";

/* pptx-preview puts the slides in a box of one slide's height that scrolls on
   its own; inside the zoom pane the slides should simply stack. */
const PPTX_CSS = `.pptx-preview-wrapper{height:auto!important;overflow:visible!important;background:transparent!important}
.pptx-preview-slide-wrapper{margin:0 auto 12px!important;box-shadow:0 1px 4px rgba(0,0,0,.25)}`;

const SHEET_CSS = `
.fm-sheet table{border-collapse:collapse;background:#fff;font:13px/1.35 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#111}
.fm-sheet td,.fm-sheet th{border:1px solid #d0d7de;padding:3px 6px;white-space:nowrap;vertical-align:top}
.fm-sheet tr:first-child td{background:#f3f4f6;font-weight:600}
`;

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
  const host = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(true);
  const [sheets, setSheets] = useState<{ name: string; html: string }[]>([]);
  const [tab, setTab] = useState(0);
  const ready = useRef(onReady);
  ready.current = onReady;

  useEffect(() => {
    let live = true;
    let cleanup: (() => void) | undefined;
    setBusy(true);
    setError("");
    (async () => {
      try {
        if (kind === "xlsx") {
          const s = await sheetToTables(await blob.arrayBuffer());
          if (live) setSheets(s);
        } else if (host.current) {
          if (kind === "docx") await renderDocx(blob, host.current);
          else cleanup = await renderPptx(await blob.arrayBuffer(), host.current);
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

  if (error)
    return (
      <p className="p-4 text-sm text-red-700">
        Could not show this file as made: {error}. Use Text view, or export the original file.
      </p>
    );

  return (
    <div className="fm-office" style={{ background: kind === "docx" ? undefined : "#e5e7eb" }}>
      {busy && <p className="p-4 text-center text-sm text-slate-600">Laying out the file…</p>}
      {kind === "xlsx" ? (
        <div className="fm-sheet p-2">
          <style>{SHEET_CSS}</style>
          {sheets.length > 1 && (
            <div className="mb-2 flex gap-1">
              {sheets.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => {
                    setTab(i);
                    window.setTimeout(() => ready.current?.(), 50);
                  }}
                  className={`rounded-t-md border px-3 py-1 text-xs font-semibold ${i === tab ? "border-slate-400 bg-white text-slate-900" : "border-transparent bg-slate-200 text-slate-600"}`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          )}
          {sheets[tab] && <div dangerouslySetInnerHTML={{ __html: sheets[tab].html }} />}
        </div>
      ) : (
        <>
          {kind === "pptx" && <style>{PPTX_CSS}</style>}
          <div ref={host} style={kind === "pptx" ? { padding: 8 } : undefined} />
        </>
      )}
    </div>
  );
}
