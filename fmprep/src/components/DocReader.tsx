/**
 * Reading an imported document.
 *
 * The whole text is present — this screen never truncates. Very long files are
 * painted in blocks as the reader scrolls, so a 300-page PDF opens instantly
 * instead of freezing the phone, and the last block is still the last word of
 * the file. Position is remembered per document.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { getDoc, wordCount, type StudyDoc } from "../lib/docs";
import { docPosition, getState, rememberDoc, updateSettings } from "../lib/store";
import { BackBar, Chip, Empty } from "./ui";
import { setImmersive } from "../lib/nativeShell";

type Loaded = StudyDoc & { blob?: Blob };

/**
 * Full screen is a reading mode, not just a bigger frame: the page's own
 * toolbars (anything pinned with position fixed or sticky) are hidden, and
 * tables, images and code are made to fit the phone's width so nothing runs
 * off the right-hand edge. The document's content itself is not changed.
 */
const READING_CSS = `html,body{max-width:100%!important;overflow-x:hidden!important}
*,*::before,*::after{box-sizing:border-box}
@media (max-width:700px){main,article,section,.container,.wrap,.wrapper,.page,.content{padding-left:12px!important;padding-right:12px!important;margin-left:0!important;margin-right:0!important;max-width:100%!important}}
.fm-scroll{overflow-x:auto!important;-webkit-overflow-scrolling:touch;max-width:100%!important;margin:0 0 1em}
table{width:auto!important;min-width:100%!important;max-width:none!important;table-layout:auto!important}
th,td{overflow-wrap:normal!important;word-break:normal!important;hyphens:manual!important;padding:6px 8px!important}
th{letter-spacing:0!important}
img,svg,video,canvas,iframe{max-width:100%!important;height:auto}
pre,code{white-space:pre-wrap!important;overflow-wrap:anywhere}`;

const READING_JS = `(function(){if(!document.documentElement.lang)document.documentElement.lang='en';function strip(){var H=innerHeight;var all=document.body?document.body.getElementsByTagName('*'):[];
for(var i=0;i<all.length;i++){var el=all[i];var cs=getComputedStyle(el);
if((cs.position==='fixed'||cs.position==='sticky')&&el.getBoundingClientRect().height<H*0.5){el.style.setProperty('display','none','important')}}}
function fit(){var ts=document.getElementsByTagName('table');for(var i=0;i<ts.length;i++){var t=ts[i],p=t.parentElement;if(!p)continue;if(!p.classList.contains('fm-scroll')){var w=document.createElement('div');w.className='fm-scroll';p.insertBefore(w,t);w.appendChild(t);p=w}var W=p.clientWidth,s=0.95;t.style.setProperty('font-size',s+'em','important');while(t.offsetWidth>W+1&&s>0.82){s-=0.03;t.style.setProperty('font-size',s.toFixed(2)+'em','important')}}}function run(){strip();fit()}document.addEventListener('DOMContentLoaded',run);addEventListener('load',function(){run();setTimeout(run,600);setTimeout(run,2000)});addEventListener('resize',fit)})();`;

function forReading(html: string): string {
  const inject =
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    "<style>" + READING_CSS + "</style><script>" + READING_JS + "</scr" + "ipt>";
  const head = html.match(/<head[^>]*>/i);
  if (head && head.index !== undefined) {
    const at = head.index + head[0].length;
    return html.slice(0, at) + inject + html.slice(at);
  }
  return inject + html;
}

/** Characters painted per block. Large enough that scrolling rarely waits. */
const BLOCK = 24_000;

export default function DocReader({
  docId,
  onBack,
  onSearchLibrary,
}: {
  docId: string;
  onBack: () => void;
  /** Take a phrase from this document into the library search. */
  onSearchLibrary: (query: string) => void;
}) {
  const [doc, setDoc] = useState<Loaded | null>(null);
  const [missing, setMissing] = useState(false);
  const [blocks, setBlocks] = useState(1);
  const [query, setQuery] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  /* An HTML file - a page saved from Claude, a downloaded artifact - is read
     as the page it is, with its layout, colours and working buttons. It runs
     in a sandboxed frame with no access to the app's own storage. The text
     view stays one tap away for searching. */
  const [pageHtml, setPageHtml] = useState<string | null>(null);
  const [asPage, setAsPage] = useState(true);
  /* Full screen: only the document, edge to edge, over the app's own bars.
     A small close button floats in the corner; the browser's fullscreen is
     asked for as well where the device allows it, to hide the status bar. */
  const [full, setFull] = useState(false);
  const readingHtml = useMemo(() => (pageHtml !== null ? forReading(pageHtml) : null), [pageHtml]);
  const fullRef = useRef<HTMLDivElement | null>(null);
  const openFull = () => {
    setFull(true);
    // In the app: hide the status bar. On the web: ask for browser fullscreen.
    void setImmersive(true).then((native) => {
      if (native) return;
      try {
        void fullRef.current?.requestFullscreen?.().catch(() => undefined);
      } catch {
        /* not supported here - the overlay alone still covers the page */
      }
    });
  };
  const closeFull = () => {
    setFull(false);
    void setImmersive(false);
    try {
      if (document.fullscreenElement) void document.exitFullscreen().catch(() => undefined);
    } catch {
      /* nothing to undo */
    }
  };
  // Leaving the reader while in full screen must still bring the bar back.
  useEffect(() => () => void setImmersive(false), []);
  useEffect(() => {
    // Leaving the device fullscreen (back gesture) also closes the overlay.
    const onChange = () => {
      if (!document.fullscreenElement) setFull(false);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);
  const sentinel = useRef<HTMLDivElement | null>(null);
  const { readerScale, readerSerif } = getState().settings;

  useEffect(() => {
    let alive = true;
    void getDoc(docId).then((found) => {
      if (!alive) return;
      if (!found) {
        setMissing(true);
        return;
      }
      setDoc(found);
      setBlocks(1);
      if (found.kind === "image" && found.blob) setImageUrl(URL.createObjectURL(found.blob));
      if (found.kind === "html" && found.blob) void found.blob.text().then((h) => alive && setPageHtml(h));
    });
    return () => {
      alive = false;
    };
  }, [docId]);

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  // Restore the last position once the first block is on screen.
  useEffect(() => {
    if (!doc) return;
    const saved = docPosition(doc.id);
    if (saved > 0) window.scrollTo({ top: saved });
  }, [doc]);

  // Remember the position, but not on every scroll event.
  useEffect(() => {
    if (!doc) return;
    let timer: number | undefined;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => rememberDoc(doc.id, window.scrollY), 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [doc]);

  const total = doc ? Math.max(1, Math.ceil(doc.text.length / BLOCK)) : 1;

  // Paint the next block when the sentinel at the bottom comes into view.
  useEffect(() => {
    const node = sentinel.current;
    if (!node || blocks >= total) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setBlocks((b) => Math.min(total, b + 1));
      },
      { rootMargin: "800px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [blocks, total]);

  const paragraphs = useMemo(() => {
    if (!doc) return [];
    const slice = doc.text.slice(0, blocks * BLOCK);
    return slice.split(/\n{2,}/);
  }, [doc, blocks]);

  const matches = useMemo(() => {
    if (!doc || query.trim().length < 2) return [];
    const q = query.trim().toLowerCase();
    const hay = doc.text.toLowerCase();
    const out: number[] = [];
    let from = 0;
    while (out.length < 200) {
      const at = hay.indexOf(q, from);
      if (at < 0) break;
      out.push(at);
      from = at + q.length;
    }
    return out;
  }, [doc, query]);

  if (missing) {
    return (
      <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
        <BackBar onBack={onBack} label="My documents" />
        <Empty title="Document not found" body="It may have been deleted from this device." />
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
        <BackBar onBack={onBack} label="My documents" />
        <p className="mt-6 text-sm text-slate-600">Opening…</p>
      </div>
    );
  }

  const download = () => {
    if (!doc.blob) return;
    const url = URL.createObjectURL(doc.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = doc.fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="mx-auto max-w-3xl px-3 py-5 md:px-6"
      style={{ fontSize: `${readerScale}rem`, fontFamily: readerSerif ? 'Georgia, "Times New Roman", serif' : undefined }}
    >
      <BackBar
        onBack={onBack}
        label="My documents"
        right={
          <>
            <button
              type="button"
              aria-label="Smaller text"
              onClick={() => updateSettings({ readerScale: Math.max(0.9, Number((readerScale - 0.1).toFixed(2))) })}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-bold text-slate-700"
            >
              A-
            </button>
            <button
              type="button"
              aria-label="Larger text"
              onClick={() => updateSettings({ readerScale: Math.min(1.5, Number((readerScale + 0.1).toFixed(2))) })}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-sm font-bold text-slate-700"
            >
              A+
            </button>
            <button
              type="button"
              onClick={() => updateSettings({ readerSerif: !readerSerif })}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-700"
            >
              {readerSerif ? "Sans" : "Serif"}
            </button>
          </>
        }
      />

      <header className="mt-5">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900">{doc.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <Chip tone="teal">{doc.collection}</Chip>
          <Chip>{doc.fileName}</Chip>
          {doc.pages ? <Chip>{doc.pages} pages</Chip> : null}
          {doc.text ? <Chip>{wordCount(doc.text).toLocaleString("en-IN")} words</Chip> : null}
          <button type="button" onClick={download} className="text-xs font-semibold text-slate-600 underline">
            Export the original file
          </button>
        </div>
      </header>

      {doc.extractNote && (
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-relaxed text-amber-950">
          {doc.extractNote}
        </p>
      )}

      {pageHtml !== null && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setAsPage(true)}
            className={`rounded-lg border px-3 py-2 text-sm font-bold ${asPage ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"}`}
          >
            Page view
          </button>
          <button
            type="button"
            onClick={() => setAsPage(false)}
            className={`rounded-lg border px-3 py-2 text-sm font-bold ${!asPage ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"}`}
          >
            Text view
          </button>
          <button
            type="button"
            onClick={openFull}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800"
          >
            Full screen
          </button>
        </div>
      )}

      {pageHtml !== null && full && (
        <div
          ref={fullRef}
          className="fixed inset-0 z-[300] flex flex-col"
          style={{ background: "#111", paddingTop: "env(safe-area-inset-top)" }}
        >
          <iframe
            title={doc.title}
            srcDoc={readingHtml ?? pageHtml}
            sandbox="allow-scripts allow-popups allow-forms allow-modals allow-downloads"
            className="block w-full flex-1 border-0 bg-white"
          />
          <button
            type="button"
            onClick={closeFull}
            aria-label="Close full screen"
            className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ background: "rgba(0,0,0,.3)", top: "calc(env(safe-area-inset-top) + 8px)" }}
          >
            ✕
          </button>
        </div>
      )}

      {pageHtml !== null && asPage && !full && (
        <iframe
          title={doc.title}
          srcDoc={pageHtml}
          sandbox="allow-scripts allow-popups allow-forms allow-modals allow-downloads"
          className="mt-3 w-full rounded-xl border border-slate-200 bg-white"
          style={{ height: "calc(100dvh - 170px)", minHeight: 480 }}
        />
      )}

      {imageUrl && (
        <img src={imageUrl} alt={doc.title} className="mt-4 w-full rounded-xl border border-slate-200" />
      )}

      {doc.text && !(pageHtml !== null && asPage) && (
        <>
          <div className="mt-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find in this document"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-500"
            />
            {query.trim().length >= 2 && (
              <button
                type="button"
                onClick={() => onSearchLibrary(query.trim())}
                className="mt-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800"
              >
                Look this up in the study library
              </button>
            )}
            {query.trim().length >= 2 && (
              <p className="mt-1 text-xs text-slate-600">
                {matches.length === 0
                  ? "No match in this document."
                  : `${matches.length} match${matches.length > 1 ? "es" : ""}${
                      matches.length >= 200 ? " (showing the first 200)" : ""
                    }. Matches are highlighted as you scroll through the text.`}
              </p>
            )}
          </div>

          <article className="mt-4 leading-relaxed text-slate-900">
            {paragraphs.map((para, i) => (
              <p key={i} className="mb-4 whitespace-pre-wrap break-words">
                {query.trim().length >= 2 ? highlight(para, query.trim()) : para}
              </p>
            ))}
          </article>

          {blocks < total && (
            <div ref={sentinel} className="py-8 text-center text-sm text-slate-500">
              Loading the rest of the document… ({blocks} of {total} parts shown)
            </div>
          )}
          {blocks >= total && (
            <p className="mt-6 border-t border-slate-200 pt-4 text-center text-xs text-slate-500">
              End of document — {doc.text.length.toLocaleString("en-IN")} characters, complete and unedited.
            </p>
          )}
        </>
      )}
    </div>
  );
}

function highlight(text: string, query: string) {
  const parts: (string | { hit: string })[] = [];
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  let from = 0;
  for (;;) {
    const at = lower.indexOf(q, from);
    if (at < 0) break;
    if (at > from) parts.push(text.slice(from, at));
    parts.push({ hit: text.slice(at, at + q.length) });
    from = at + q.length;
  }
  parts.push(text.slice(from));
  return parts.map((p, i) =>
    typeof p === "string" ? (
      <span key={i}>{p}</span>
    ) : (
      <mark key={i} className="rounded bg-amber-200 px-0.5">
        {p.hit}
      </mark>
    ),
  );
}
