/**
 * Find in this document: a bar at the top with the count ("3 of 17") and
 * up/down arrows, for every kind of document. The reader passes an adapter
 * that knows how to search its own view (PDF pages, a Word file, an HTML page,
 * plain text) and how to bring match number i into view.
 */
import { useEffect, useRef, useState } from "react";

export type SearchAdapter = {
  /** Find every match; returns how many. */
  search: (q: string) => Promise<number>;
  /** Bring match i (0-based) into view and mark it as the current one. */
  go: (i: number) => Promise<void> | void;
  /** Remove all highlights. */
  clear: () => void;
};

export function SearchButton({ onClick, full }: { onClick: () => void; full: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Search in this document"
      className="start-fab"
      style={{ right: 112, ...(full ? { bottom: "calc(16px + env(safe-area-inset-bottom, 0px))", zIndex: 310 } : {}) }}
    >
      🔍 Search
    </button>
  );
}

export default function DocSearch({ adapter, onClose }: { adapter: SearchAdapter; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [count, setCount] = useState(0);
  const [at, setAt] = useState(0);
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement | null>(null);
  const run = useRef(0);

  useEffect(() => {
    input.current?.focus();
    return () => adapter.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Search as you type, a moment after the last key.
  useEffect(() => {
    const term = q.trim();
    const id = ++run.current;
    if (term.length < 2) {
      adapter.clear();
      setCount(0);
      return;
    }
    setBusy(true);
    const t = window.setTimeout(async () => {
      const n = await adapter.search(term).catch(() => 0);
      if (id !== run.current) return;
      setCount(n);
      setAt(0);
      setBusy(false);
      if (n) await adapter.go(0);
    }, 220);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const step = (d: number) => {
    if (!count) return;
    const next = (at + d + count) % count;
    setAt(next);
    void adapter.go(next);
  };

  return (
    <div
      className="fixed left-0 right-0 z-[330] flex items-center gap-1.5 px-2 py-2"
      style={{ top: "var(--sat, 0px)", background: "rgba(255,255,255,.97)", boxShadow: "0 2px 10px rgba(0,0,0,.18)" }}
    >
      <input
        ref={input}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") step(e.shiftKey ? -1 : 1);
          if (e.key === "Escape") onClose();
        }}
        placeholder="Search in this document"
        enterKeyHint="search"
        className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 outline-none focus:ring-2 focus:ring-emerald-700"
      />
      <span className="w-[64px] shrink-0 text-center text-xs font-semibold text-slate-600">
        {q.trim().length < 2 ? "" : busy ? "…" : count ? `${at + 1} of ${count}` : "None"}
      </span>
      <button type="button" aria-label="Previous match" onClick={() => step(-1)} className="h-9 w-9 shrink-0 rounded-lg border border-slate-300 bg-white text-base font-bold text-slate-800">
        ▲
      </button>
      <button type="button" aria-label="Next match" onClick={() => step(1)} className="h-9 w-9 shrink-0 rounded-lg border border-slate-300 bg-white text-base font-bold text-slate-800">
        ▼
      </button>
      <button type="button" aria-label="Close search" onClick={onClose} className="h-9 w-9 shrink-0 rounded-lg bg-slate-800 text-sm font-bold text-white">
        ✕
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Highlighting inside a DOM tree (Word, slides, sheets, plain text)   */
/* ------------------------------------------------------------------ */

const HIT = "fm-hit";

/** Wrap every match under `root` in a <mark>; returns the marks in order. */
export function markAll(root: ParentNode, q: string, limit = 2000): HTMLElement[] {
  unmarkAll(root);
  const needle = q.toLowerCase();
  const doc = (root as Node).ownerDocument ?? document;
  const walker = doc.createTreeWalker(root as Node, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => {
      const p = n.parentElement;
      if (!p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(p.tagName)) return NodeFilter.FILTER_REJECT;
      return n.nodeValue && n.nodeValue.toLowerCase().includes(needle) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    },
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  const marks: HTMLElement[] = [];
  for (const node of nodes) {
    let text = node;
    let idx = text.nodeValue!.toLowerCase().indexOf(needle);
    while (idx >= 0 && marks.length < limit) {
      const hit = text.splitText(idx);
      text = hit.splitText(needle.length);
      const m = doc.createElement("mark");
      m.className = HIT;
      m.style.cssText = "background:#fde047;color:inherit;padding:0;border-radius:2px";
      hit.parentNode!.replaceChild(m, hit);
      m.appendChild(hit);
      marks.push(m);
      idx = text.nodeValue!.toLowerCase().indexOf(needle);
    }
  }
  return marks;
}

export function unmarkAll(root: ParentNode) {
  root.querySelectorAll(`mark.${HIT}`).forEach((m) => {
    const parent = m.parentNode;
    if (!parent) return;
    while (m.firstChild) parent.insertBefore(m.firstChild, m);
    parent.removeChild(m);
    parent.normalize();
  });
}

export function focusMark(marks: HTMLElement[], i: number) {
  marks.forEach((m, k) => (m.style.background = k === i ? "#fb923c" : "#fde047"));
  marks[i]?.scrollIntoView({ block: "center", inline: "center" });
}
