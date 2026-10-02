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
import {
  docModeOf,
  docPagePosition,
  docPosition,
  getState,
  isDocRead,
  rememberDoc,
  rememberDocPage,
  setDocMode,
  setDocRead,
  subscribe,
  updateSettings,
  type DocMode,
} from "../lib/store";
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

/**
 * Where the reader is inside the page. The page runs in a sandbox, so it
 * reports its own scroll to the app, and is told on load where to go back to:
 * the exact pixel when reopened in the same view, the same fraction of the
 * page when the view has changed (full screen lays the page out differently).
 * It stops trying the moment the reader touches the screen.
 */
function positionJs(y: number, f: number): string {
  return `(function(){var Y=${Math.max(0, Math.round(y))},F=${Math.max(0, Math.min(1, f))},moved=false;
function max(){return Math.max(1,document.documentElement.scrollHeight-innerHeight)}
function go(){if(moved)return;var t=Y>0?Y:(F>0?F*max():0);if(t>0)scrollTo(0,t)}
addEventListener('touchstart',function(){moved=true},{passive:true});addEventListener('wheel',function(){moved=true},{passive:true});
addEventListener('load',function(){go();setTimeout(go,300);setTimeout(go,900);setTimeout(go,1800)});
var tm;addEventListener('scroll',function(){clearTimeout(tm);tm=setTimeout(function(){parent.postMessage({fmScroll:Math.round(scrollY),fmFrac:scrollY/max()},'*')},250)},{passive:true});
document.addEventListener('visibilitychange',function(){parent.postMessage({fmScroll:Math.round(scrollY),fmFrac:scrollY/max()},'*')})})();`;
}

function withPosition(html: string, y: number, f: number): string {
  const inject = "<script>" + positionJs(y, f) + "</scr" + "ipt>";
  const head = html.match(/<head[^>]*>/i);
  if (head && head.index !== undefined) {
    const at = head.index + head[0].length;
    return html.slice(0, at) + inject + html.slice(at);
  }
  return inject + html;
}

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
  initialQuery,
  onBack,
  onSearchLibrary,
}: {
  docId: string;
  /** A phrase from the documents search: shown highlighted in the text view. */
  initialQuery?: string;
  onBack: () => void;
  /** Take a phrase from this document into the library search. */
  onSearchLibrary: (query: string) => void;
}) {
  const [doc, setDoc] = useState<Loaded | null>(null);
  const [missing, setMissing] = useState(false);
  const [blocks, setBlocks] = useState(1);
  const [query, setQuery] = useState(initialQuery ?? "");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  /* An HTML file - a page saved from Claude, a downloaded artifact - is read
     as the page it is, with its layout, colours and working buttons. It runs
     in a sandboxed frame with no access to the app's own storage. The text
     view stays one tap away for searching. */
  const [pageHtml, setPageHtml] = useState<string | null>(null);
  const savedMode = docModeOf(docId);
  // Arriving from a search lands in the text view, where the words are highlighted.
  const [asPage, setAsPageState] = useState(initialQuery ? false : savedMode !== "text");
  const setAsPage = (v: boolean) => {
    setAsPageState(v);
    setDocMode(docId, v ? "page" : "text");
  };
  /* Full screen: only the document, edge to edge, over the app's own bars.
     A small close button floats in the corner; the browser's fullscreen is
     asked for as well where the device allows it, to hide the status bar. */
  const [full, setFull] = useState(false);
  /* Each frame is built when it is shown, carrying the position to return to,
     so switching views or reopening the app lands on the same passage. */
  const startAt = (mode: DocMode) => {
    const p = docPagePosition(docId);
    if (!p) return { y: 0, f: 0 };
    return p.mode === mode ? { y: p.y, f: p.f } : { y: 0, f: p.f };
  };
  const readingHtml = useMemo(() => {
    if (pageHtml === null || !full) return null;
    const at = startAt("full");
    return forReading(withPosition(pageHtml, at.y, at.f));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageHtml, full]);
  const pageSrc = useMemo(() => {
    if (pageHtml === null || full || !asPage) return null;
    const at = startAt("page");
    return withPosition(pageHtml, at.y, at.f);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageHtml, full, asPage]);
  const pageFrame = useRef<HTMLIFrameElement | null>(null);
  const fullFrame = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const d = e.data as { fmScroll?: number; fmFrac?: number } | null;
      if (!d || typeof d.fmScroll !== "number") return;
      const mode: DocMode | null =
        e.source === fullFrame.current?.contentWindow ? "full" : e.source === pageFrame.current?.contentWindow ? "page" : null;
      if (!mode) return;
      rememberDocPage(docId, { y: d.fmScroll, f: Math.max(0, Math.min(1, d.fmFrac ?? 0)), mode });
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [docId]);
  // Read / unread, kept in step with the store.
  const [read, setRead] = useState(() => isDocRead(docId));
  useEffect(() => subscribe(() => setRead(isDocRead(docId))), [docId]);
  const fullRef = useRef<HTMLDivElement | null>(null);
  const openFull = () => {
    setFull(true);
    setDocMode(docId, "full");
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
    setDocMode(docId, "page");
    void setImmersive(false);
    try {
      if (document.fullscreenElement) void document.exitFullscreen().catch(() => undefined);
    } catch {
      /* nothing to undo */
    }
  };
  // Reopened in full screen if that is how it was left.
  const autoFull = useRef(savedMode === "full" && !initialQuery);
  useEffect(() => {
    if (pageHtml !== null && autoFull.current) {
      autoFull.current = false;
      openFull();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageHtml]);
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

  // Restore the last position. A long text is painted in blocks as it is
  // scrolled, so when the saved place lies deeper than what is painted, the
  // whole text is painted first and then scrolled to.
  useEffect(() => {
    if (!doc) return;
    if (initialQuery && initialQuery.trim().length >= 2) {
      // From a search: paint the whole text and bring the first match into view.
      setBlocks(Math.max(1, Math.ceil(doc.text.length / BLOCK)));
      const t = window.setTimeout(() => {
        document.querySelector("article mark")?.scrollIntoView({ block: "center" });
      }, 250);
      return () => window.clearTimeout(t);
    }
    const saved = docPosition(doc.id);
    if (saved <= 0) return;
    if (saved > document.documentElement.scrollHeight - window.innerHeight)
      setBlocks(Math.max(1, Math.ceil(doc.text.length / BLOCK)));
    let tries = 0;
    let timer = 0;
    const step = () => {
      window.scrollTo({ top: saved });
      if (Math.abs(window.scrollY - saved) > 4 && ++tries < 12) timer = window.setTimeout(step, 200);
    };
    timer = window.setTimeout(step, 60);
    return () => window.clearTimeout(timer);
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
    // A phrase is found as typed; failing that, each word on its own.
    const hay = doc.text.toLowerCase();
    const phrase = query.trim().toLowerCase();
    const terms = hay.includes(phrase) ? [phrase] : phrase.split(/\s+/).filter((w) => w.length >= 2);
    const out: number[] = [];
    for (const q of terms) {
      let from = 0;
      while (out.length < 200) {
        const at = hay.indexOf(q, from);
        if (at < 0) break;
        out.push(at);
        from = at + q.length;
      }
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
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setDocRead(docId, !read, Date.now())}
            className="w-full rounded-lg border px-3 py-2.5 text-sm font-bold"
            style={
              read
                ? { background: "#14532d", borderColor: "#14532d", color: "#fff" }
                : { background: "#fff", borderColor: "#cbd5e1", color: "#1e293b" }
            }
          >
            {read ? "✓ Read - tap to mark as not read" : "Mark as read"}
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
            ref={fullFrame}
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
          ref={pageFrame}
          title={doc.title}
          srcDoc={pageSrc ?? pageHtml}
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
  const phrase = query.trim();
  const words = phrase.split(/\s+/).filter((w) => w.length >= 2);
  const terms = text.toLowerCase().includes(phrase.toLowerCase()) || words.length < 2 ? [phrase] : words;
  const esc = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(esc.join("|"), "gi");
  let from = 0;
  for (const m of text.matchAll(re)) {
    const at = m.index ?? 0;
    if (at > from) parts.push(text.slice(from, at));
    parts.push({ hit: m[0] });
    from = at + m[0].length;
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
