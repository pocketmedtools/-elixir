/**
 * Reading an imported document.
 *
 * The whole text is present — this screen never truncates. Very long files are
 * painted in blocks as the reader scrolls, so a 300-page PDF opens instantly
 * instead of freezing the phone, and the last block is still the last word of
 * the file. Position is remembered per document.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getDoc, htmlToText, wordCount, type StudyDoc } from "../lib/docs";
import PdfPages from "./PdfPages";
import ZoomPane from "./ZoomPane";
import FastScroller from "./FastScroller";
import DocSearch, { SearchButton, focusMark, markAll, unmarkAll, type SearchAdapter } from "./DocSearch";
import type { Pdf, PdfHit } from "./PdfPages";
import { loadPdfjs } from "../lib/docs";
import OfficeView from "./OfficeView";
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
 * Pinch to zoom inside an HTML page, which runs in its own frame and so does
 * not get the app's zoom. Two fingers magnify the page with the point between
 * them held still, like a phone's photo viewer: the page is only scaled, never
 * laid out again, so lines do not re-wrap and the reader stays exactly on what
 * was zoomed. Double tap toggles 2.5x on that spot.
 */
const PINCH_JS = `(function(){var Z=1,s=null,last=0,tap={x:0,y:0},moved=false,off=null;
function b(){return document.body}
function d(t){return Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY)}
function cl(z){return Math.min(5,Math.max(1,z))}
function origin(){if(!off){var r=b().getBoundingClientRect();off={x:r.left+scrollX,y:r.top+scrollY}}return off}
function apply(z,c,m){var o=origin();var B=b();B.style.transformOrigin='0 0';B.style.transform=z===1?'':'scale('+z+')';
document.documentElement.style.overflow=z>1?'auto':'';scrollTo(o.x+c.x*z-m.x,o.y+c.y*z-m.y)}
addEventListener('touchstart',function(e){if(e.touches.length===2){var o=origin();var mx=(e.touches[0].clientX+e.touches[1].clientX)/2,my=(e.touches[0].clientY+e.touches[1].clientY)/2;
s={d:d(e.touches),z:Z,m:{x:mx,y:my},c:{x:(scrollX+mx-o.x)/Z,y:(scrollY+my-o.y)/Z}}}
else if(e.touches.length===1){moved=false;tap={x:e.touches[0].clientX,y:e.touches[0].clientY}}},{passive:true});
addEventListener('touchmove',function(e){if(s&&e.touches.length===2){e.preventDefault();Z=cl(s.z*d(e.touches)/s.d);apply(Z,s.c,s.m)}
else if(e.touches.length===1){var t=e.touches[0];if(Math.abs(t.clientX-tap.x)>10||Math.abs(t.clientY-tap.y)>10)moved=true}},{passive:false});
function end(e){if(s&&e.touches.length<2){s=null;last=0;return}
if(e.touches.length===0&&e.changedTouches.length===1&&!moved){var n=Date.now(),t=e.changedTouches[0];
if(n-last<300){var o=origin();var c={x:(scrollX+t.clientX-o.x)/Z,y:(scrollY+t.clientY-o.y)/Z};Z=Z>1.05?1:2.5;apply(Z,c,{x:t.clientX,y:t.clientY});last=0}else last=n}}
addEventListener('touchend',end,{passive:true});addEventListener('touchcancel',end,{passive:true});
addEventListener('message',function(e){if(!e.data)return;if(e.data.fmTop){Z=1;b().style.transform='';document.documentElement.style.overflow='';scrollTo(0,0)}
if(typeof e.data.fmScrollTo==='number'){var M=Math.max(0,document.documentElement.scrollHeight-innerHeight);scrollTo(scrollX,e.data.fmScrollTo*M)}});
var lr=0;addEventListener('scroll',function(){if(lr)return;lr=requestAnimationFrame(function(){lr=0;var M=Math.max(1,document.documentElement.scrollHeight-innerHeight);parent.postMessage({fmLive:scrollY/M},'*')})},{passive:true});
addEventListener('load',function(){var M=Math.max(1,document.documentElement.scrollHeight-innerHeight);parent.postMessage({fmLive:scrollY/M},'*')})})();`;

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

/* Find inside an HTML page (it runs in its own frame): mark every match,
   report the count, bring match i to view on request. */
const FIND_JS = `(function(){var M=[];function un(){for(var i=0;i<M.length;i++){var m=M[i],p=m.parentNode;if(!p)continue;while(m.firstChild)p.insertBefore(m.firstChild,m);p.removeChild(m);p.normalize()}M=[]}
function find(q){un();q=q.toLowerCase();var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentElement;if(!p||/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(p.tagName))return 2;return n.nodeValue.toLowerCase().indexOf(q)>=0?1:3}}),ns=[];while(w.nextNode())ns.push(w.currentNode);
for(var i=0;i<ns.length&&M.length<2000;i++){var t=ns[i],k=t.nodeValue.toLowerCase().indexOf(q);while(k>=0&&M.length<2000){var h=t.splitText(k);t=h.splitText(q.length);var m=document.createElement('mark');m.style.cssText='background:#fde047;color:inherit;padding:0';h.parentNode.replaceChild(m,h);m.appendChild(h);M.push(m);k=t.nodeValue.toLowerCase().indexOf(q)}}return M.length}
addEventListener('message',function(e){var d=e.data;if(!d)return;if(typeof d.fmFind==='string'){parent.postMessage({fmFindCount:find(d.fmFind)},'*')}
if(typeof d.fmFindGo==='number'){for(var i=0;i<M.length;i++)M[i].style.background=i===d.fmFindGo?'#fb923c':'#fde047';var m=M[d.fmFindGo];if(m){var r=m.getBoundingClientRect();scrollTo(scrollX+r.left-innerWidth/2,scrollY+r.top-innerHeight/3)}}
if(d.fmFindClear)un()})})();`;

function withPosition(html: string, y: number, f: number): string {
  const inject =
    "<script>" + positionJs(y, f) + "</scr" + "ipt><script>" + PINCH_JS + "</scr" + "ipt><script>" + FIND_JS + "</scr" + "ipt>";
  const head = html.match(/<head[^>]*>/i);
  if (head && head.index !== undefined) {
    const at = head.index + head[0].length;
    return html.slice(0, at) + inject + html.slice(at);
  }
  return inject + html;
}

/**
 * Full screen shows the page exactly as it was made - its own colours,
 * background, fonts and layout. Only a phone viewport is added (for pages
 * saved without one), so it is not drawn at desktop width.
 */
function forReading(html: string): string {
  if (/<meta[^>]+name=["']?viewport/i.test(html)) return html;
  const inject = '<meta name="viewport" content="width=device-width, initial-scale=1">';
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
  /* A PDF is shown as its real pages (layout, figures, tables as printed),
     with the extracted text one tap away for searching. */
  const pageKey = `FMPREP_PDFPAGE_${docId}`;
  const [pdfPage, setPdfPage] = useState(() => {
    try {
      return Number(localStorage.getItem(pageKey)) || 1;
    } catch {
      return 1;
    }
  });
  const startPdfPage = useRef(pdfPage);
  const [fullScrollEl, setFullScrollEl] = useState<HTMLDivElement | null>(null);
  const [pageScrollEl, setPageScrollEl] = useState<HTMLDivElement | null>(null);
  /* Bumped when an Office file has been laid out, so the zoom fits it. */
  const [officeReady, setOfficeReady] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [pdfHit, setPdfHit] = useState<PdfHit | null>(null);
  const pdfDocRef = useRef<Pdf | null>(null);
  const pdfHits = useRef<{ q: string; hits: { page: number; occ: number }[] }>({ q: "", hits: [] });
  const officeRoot = useRef<HTMLElement | null>(null);
  const officeMarks = useRef<HTMLElement[]>([]);
  const textMarks = useRef<HTMLElement[]>([]);
  const notePage = useCallback(
    (n: number) => {
      setPdfPage(n);
      try {
        localStorage.setItem(pageKey, String(n));
      } catch {
        /* storage blocked */
      }
    },
    [pageKey],
  );
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
  const [pageFrameEl, setPageFrameEl] = useState<HTMLIFrameElement | null>(null);
  const [fullFrameEl, setFullFrameEl] = useState<HTMLIFrameElement | null>(null);
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
    const ready = pageHtml !== null || (!!doc?.blob && ["pdf", "docx", "pptx", "xlsx"].includes(doc.kind));
    if (ready && autoFull.current) {
      autoFull.current = false;
      openFull();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageHtml, doc]);
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
  /* Plain text reflows, so a pinch changes the text size (like a phone's
     reader mode) instead of magnifying a fixed page. */
  const textRef = useRef<HTMLElement | null>(null);
  const scaleRef = useRef(readerScale);
  scaleRef.current = readerScale;
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    let d0 = 0;
    let k = 1;
    const dist = (t: TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const start = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        d0 = dist(e.touches);
        k = 1;
        const r = el.getBoundingClientRect();
        const my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
        el.style.transformOrigin = `50% ${my}px`;
      }
    };
    const move = (e: TouchEvent) => {
      if (!d0 || e.touches.length !== 2) return;
      e.preventDefault();
      k = dist(e.touches) / d0;
      el.style.transform = `scale(${Math.min(2.5, Math.max(0.6, k))})`;
    };
    const end = (e: TouchEvent) => {
      if (!d0 || e.touches.length >= 2) return;
      d0 = 0;
      el.style.transform = "";
      const next = Math.min(2.5, Math.max(0.8, Number((scaleRef.current * k).toFixed(2))));
      if (Math.abs(next - scaleRef.current) > 0.02) updateSettings({ readerScale: next });
    };
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: false });
    el.addEventListener("touchend", end, { passive: true });
    el.addEventListener("touchcancel", end, { passive: true });
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", end);
      el.removeEventListener("touchcancel", end);
    };
  });

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
      if (found.kind === "html" && found.blob)
        void found.blob.text().then((h) => {
          if (!alive) return;
          setPageHtml(h);
          // Text view from the page itself, never its CSS or scripts.
          setDoc({ ...found, text: htmlToText(h) });
        });
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

  const isPdf = doc.kind === "pdf" && !!doc.blob;
  const office = (doc.kind === "docx" || doc.kind === "pptx" || doc.kind === "xlsx") && doc.blob ? doc.kind : null;
  const hasPage = pageHtml !== null || isPdf || !!office;

  /* Back to the first page, from anywhere in the document. */
  const goStart = () => {
    if (full) {
      fullFrame.current?.contentWindow?.postMessage({ fmTop: 1 }, "*");
      fullScrollEl?.scrollTo({ top: 0, left: 0 });
      return;
    }
    pageFrame.current?.contentWindow?.postMessage({ fmTop: 1 }, "*");
    if (asPage) pageScrollEl?.scrollTo({ top: 0, left: 0 });
    window.scrollTo({ top: 0 });
  };

  /* ---- Find in this document ---- */
  const searchAdapter: SearchAdapter = (() => {
    const frame = full ? fullFrame.current : asPage ? pageFrame.current : null;
    if (isPdf && (full || asPage)) {
      return {
        search: async (q) => {
          const needle = q.toLowerCase();
          const hits: { page: number; occ: number }[] = [];
          const parts = doc.text.split(/\[Page (\d+)\]\n?/);
          for (let k = 1; k < parts.length; k += 2) {
            const page = Number(parts[k]);
            const body = (parts[k + 1] ?? "").toLowerCase();
            let from = 0;
            let occ = 0;
            while (hits.length < 5000) {
              const at = body.indexOf(needle, from);
              if (at < 0) break;
              hits.push({ page, occ: occ++ });
              from = at + needle.length;
            }
          }
          pdfHits.current = { q: needle, hits };
          return hits.length;
        },
        go: async (i) => {
          const pdfDoc = pdfDocRef.current;
          const h = pdfHits.current.hits[i];
          if (!pdfDoc || !h) return;
          const box = document.getElementById(`pdf-page-${h.page}`);
          const scroller = full ? fullScrollEl : pageScrollEl;
          box?.scrollIntoView({ block: "start" });
          const rects = await pdfHitRects(pdfDoc, h.page, pdfHits.current.q, h.occ);
          setPdfHit({ page: h.page, rects });
          if (box && scroller && rects[0]) scroller.scrollTop += rects[0].t * box.clientHeight - scroller.clientHeight / 3;
        },
        clear: () => setPdfHit(null),
      };
    }
    if (office && (full || asPage)) {
      return {
        search: async (q) => {
          if (!officeRoot.current) return 0;
          officeMarks.current = markAll(officeRoot.current, q);
          return officeMarks.current.length;
        },
        go: (i) => focusMark(officeMarks.current, i),
        clear: () => officeRoot.current && unmarkAll(officeRoot.current),
      };
    }
    if (pageHtml !== null && frame) {
      return {
        search: (q) =>
          new Promise<number>((resolve) => {
            const on = (e: MessageEvent) => {
              if (e.source !== frame.contentWindow || typeof (e.data as { fmFindCount?: number })?.fmFindCount !== "number") return;
              window.removeEventListener("message", on);
              resolve((e.data as { fmFindCount: number }).fmFindCount);
            };
            window.addEventListener("message", on);
            frame.contentWindow?.postMessage({ fmFind: q }, "*");
            window.setTimeout(() => {
              window.removeEventListener("message", on);
              resolve(0);
            }, 4000);
          }),
        go: (i) => frame.contentWindow?.postMessage({ fmFindGo: i }, "*"),
        clear: () => frame.contentWindow?.postMessage({ fmFindClear: 1 }, "*"),
      };
    }
    // Plain text view: the reader's own highlighting, painted in full.
    return {
      search: async (q) => {
        setQuery(q);
        setBlocks(Math.max(1, Math.ceil(doc.text.length / BLOCK)));
        await new Promise((r) => setTimeout(r, 120));
        textMarks.current = Array.from(document.querySelectorAll<HTMLElement>("article mark"));
        return textMarks.current.length;
      },
      go: (i) => focusMark(textMarks.current, i),
      clear: () => setQuery(""),
    };
  })();
  const searchButton = <SearchButton full={full} onClick={() => setSearchOpen(true)} />;
  /* In full screen the document is the browser's top layer, so the bar must
     live inside it to be seen. */
  const searchBar = searchOpen ? (
    <DocSearch key={`${full}-${asPage}`} adapter={searchAdapter} onClose={() => setSearchOpen(false)} />
  ) : null;

  const startButton = (
    <button
      type="button"
      onClick={goStart}
      aria-label="Go to the start of the document"
      className="start-fab"
      style={full ? { bottom: "calc(16px + env(safe-area-inset-bottom, 0px))" } : undefined}
    >
      ⇑ Start
    </button>
  );

  const download = async () => {
    if (!doc.blob) return;
    // In the app a web download goes nowhere: save into Documents › FM Prep.
    const { hasNativeBackup, saveToDevice } = await import("../lib/backup");
    if (hasNativeBackup()) {
      try {
        window.alert(`Saved to ${await saveToDevice(doc.fileName, doc.blob)}`);
      } catch (e) {
        window.alert(`Could not save the file: ${e instanceof Error ? e.message : String(e)}`);
      }
      return;
    }
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
              onClick={() => updateSettings({ readerScale: Math.max(0.8, Number((readerScale - 0.1).toFixed(2))) })}
              className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-bold text-slate-700"
            >
              A-
            </button>
            <button
              type="button"
              aria-label="Larger text"
              onClick={() => updateSettings({ readerScale: Math.min(2.5, Number((readerScale + 0.1).toFixed(2))) })}
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
          <button type="button" onClick={() => void download()} className="text-xs font-semibold text-slate-600 underline">
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

      {hasPage && (
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

      {isPdf && full && doc.blob && (
        <div ref={fullRef} className="fixed inset-0 z-[300] flex flex-col" style={{ background: "#3a3530", paddingTop: "var(--sat)" }}>
          <ZoomPane apply="none" className="flex-1" onScrollEl={setFullScrollEl} scrollLabel={(f) => `Page ${Math.min(doc.pages ?? 1, Math.max(1, Math.round(f * ((doc.pages ?? 1) - 1)) + 1))} of ${doc.pages ?? "?"}`}>
            {(z, w) => (
              <PdfPages blob={doc.blob!} zoom={z} viewWidth={w} startPage={pdfPage} onPage={notePage} scrollRoot={fullScrollEl} onDoc={(d) => (pdfDocRef.current = d)} hit={pdfHit} />
            )}
          </ZoomPane>
          <button type="button" onClick={closeFull} aria-label="Close full screen" className="absolute right-2 h-8 w-8 rounded-full text-sm font-bold text-white" style={{ background: "rgba(0,0,0,.45)", top: "calc(var(--sat) + 8px)" }}>✕</button>
          {startButton}
          {searchButton}
          {searchBar}
        </div>
      )}

      {isPdf && asPage && !full && doc.blob && (
        <>
          <div className="mt-3 flex items-center justify-between text-[13px] text-slate-600">
            <span>Page {pdfPage}{doc.pages ? ` of ${doc.pages}` : ""}</span>
            <span>Pinch to zoom · double-tap</span>
          </div>
          <ZoomPane
            apply="none"
            scrollLabel={(f) => `Page ${Math.min(doc.pages ?? 1, Math.max(1, Math.round(f * ((doc.pages ?? 1) - 1)) + 1))} of ${doc.pages ?? "?"}`}
            className="mt-2 rounded-xl border border-slate-200"
            style={{ height: "calc(100dvh - 190px)", minHeight: 460, background: "#3a3530" }}
            onScrollEl={setPageScrollEl}
          >
            {(z, w) => (
              <PdfPages blob={doc.blob!} zoom={z} viewWidth={w} startPage={startPdfPage.current} onPage={notePage} scrollRoot={pageScrollEl} onDoc={(d) => (pdfDocRef.current = d)} hit={pdfHit} />
            )}
          </ZoomPane>
        </>
      )}

      {office && full && doc.blob && (
        <div ref={fullRef} className="fixed inset-0 z-[300] flex flex-col" style={{ background: "#e5e7eb", paddingTop: "var(--sat)" }}>
          <ZoomPane fit className="flex-1" resetKey={officeReady} onScrollEl={setFullScrollEl}>
            {() => <OfficeView kind={office} blob={doc.blob!} onReady={() => setOfficeReady((n) => n + 1)} onRoot={(el) => (officeRoot.current = el)} />}
          </ZoomPane>
          <button type="button" onClick={closeFull} aria-label="Close full screen" className="absolute right-2 h-8 w-8 rounded-full text-sm font-bold text-white" style={{ background: "rgba(0,0,0,.45)", top: "calc(var(--sat) + 8px)" }}>✕</button>
          {startButton}
          {searchButton}
          {searchBar}
        </div>
      )}

      {office && asPage && !full && doc.blob && (
        <>
          <p className="mt-3 text-right text-[13px] text-slate-600">Pinch to zoom · double-tap</p>
          <ZoomPane
            fit
            resetKey={officeReady}
            onScrollEl={setPageScrollEl}
            className="mt-2 rounded-xl border border-slate-200"
            style={{ height: "calc(100dvh - 190px)", minHeight: 460, background: "#e5e7eb" }}
          >
            {() => <OfficeView kind={office} blob={doc.blob!} onReady={() => setOfficeReady((n) => n + 1)} onRoot={(el) => (officeRoot.current = el)} />}
          </ZoomPane>
        </>
      )}

      {pageHtml !== null && full && (
        <div
          ref={fullRef}
          className="fixed inset-0 z-[300] flex flex-col"
          style={{ background: "#111", paddingTop: "var(--sat)" }}
        >
          <iframe
            title={doc.title}
            ref={(el) => {
              fullFrame.current = el;
              setFullFrameEl(el);
            }}
            srcDoc={readingHtml ?? pageHtml}
            sandbox="allow-scripts allow-popups allow-forms allow-modals allow-downloads"
            className="block w-full flex-1 border-0"
            style={{ background: "#ffffff", colorScheme: "light" }}
          />
          <button
            type="button"
            onClick={closeFull}
            aria-label="Close full screen"
            className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ background: "rgba(0,0,0,.3)", top: "calc(var(--sat) + 8px)" }}
          >
            ✕
          </button>
          <FastScroller target={{ kind: "frame", frame: fullFrameEl }} top={48} bottom={72} label={(f) => `${Math.round(f * 100)}%`} />
          {startButton}
          {searchButton}
          {searchBar}
        </div>
      )}

      {pageHtml !== null && asPage && !full && (
        <div className="relative mt-3">
          <iframe
            ref={(el) => {
              pageFrame.current = el;
              setPageFrameEl(el);
            }}
            title={doc.title}
            srcDoc={pageSrc ?? pageHtml}
            sandbox="allow-scripts allow-popups allow-forms allow-modals allow-downloads"
            className="block w-full rounded-xl border border-slate-200"
            /* A page with no background of its own is white, as in any browser -
               not the app's cream. */
            style={{ height: "calc(100dvh - 170px)", minHeight: 480, background: "#ffffff", colorScheme: "light" }}
          />
          <FastScroller target={{ kind: "frame", frame: pageFrameEl }} top={8} bottom={8} label={(f) => `${Math.round(f * 100)}%`} />
        </div>
      )}

      {/* Back to the start, just above Home. Full screen has its own copy. */}
      {!full && startButton}
      {!full && (hasPage || doc.text) && searchButton}
      {!full && searchBar}

      {imageUrl && (
        <ZoomPane className="mt-4 rounded-xl border border-slate-200" style={{ height: "calc(100dvh - 160px)" }}>
          {(_z, w) => <img src={imageUrl} alt={doc.title} style={{ width: w - 2, display: "block" }} />}
        </ZoomPane>
      )}

      {doc.text && !(hasPage && asPage) && (
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

          <FastScroller target={{ kind: "window" }} fixed top={70} bottom={130} label={(f) => `${Math.round(f * 100)}%`} />
          <article ref={textRef} className="mt-4 leading-relaxed text-slate-900" style={{ touchAction: "pan-x pan-y" }}>
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

/** Boxes (fractions of the page) of the occ-th match of q on a PDF page. */
async function pdfHitRects(pdf: Pdf, pageNo: number, q: string, occ: number) {
  const pdfjs = await loadPdfjs();
  const page = await pdf.getPage(pageNo);
  const vp = page.getViewport({ scale: 1 });
  const content = await page.getTextContent();
  // The page's text built exactly as when it was imported, with each item's span.
  let str = "";
  const spans: { from: number; to: number; item: { str: string; transform: number[]; width: number } }[] = [];
  for (const it of content.items) {
    if (!("str" in it)) continue;
    spans.push({ from: str.length, to: str.length + it.str.length, item: it });
    str += it.str;
    if (it.hasEOL) str += "\n";
  }
  const low = str.toLowerCase();
  let at = -1;
  for (let k = 0, from = 0; k <= occ; k++) {
    at = low.indexOf(q, from);
    if (at < 0) return [];
    from = at + q.length;
  }
  const end = at + q.length;
  const rects: { l: number; t: number; w: number; h: number }[] = [];
  for (const sp of spans) {
    if (sp.to <= at || sp.from >= end || !sp.item.str.length) continue;
    const tx = pdfjs.Util.transform(vp.transform, sp.item.transform) as number[];
    const fh = Math.hypot(tx[2], tx[3]);
    const a = Math.max(0, at - sp.from);
    const b = Math.min(sp.item.str.length, end - sp.from);
    const len = sp.item.str.length;
    const w = sp.item.width * vp.scale;
    rects.push({
      l: (tx[4] + (w * a) / len) / vp.width,
      t: (tx[5] - fh) / vp.height,
      w: ((w * (b - a)) / len) / vp.width,
      h: (fh * 1.15) / vp.height,
    });
  }
  return rects;
}
