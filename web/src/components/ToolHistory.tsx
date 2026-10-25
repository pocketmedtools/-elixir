import { useState, useSyncExternalStore } from "react";
import { clearHistory, getHistory, historyVersion, subscribeHistory } from "../lib/calcHistory";

function when(t: number): string {
  const d = new Date(t);
  const today = new Date();
  const time = d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
  return d.toDateString() === today.toDateString() ? `Today ${time}` : `${d.toLocaleDateString("en-IN", { day: "numeric", month: "short" })} ${time}`;
}

/** "🕘 Last 5" button at the top of a tool, opening its recent results. */
export default function ToolHistory({ tool }: { tool: string }) {
  useSyncExternalStore(subscribeHistory, historyVersion);
  const list = getHistory(tool);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open}
        className="rounded-lg border-2 border-slate-300 bg-white px-3 py-1.5 text-xs font-extrabold text-slate-800">
        🕘 Last 5{list.length ? ` (${list.length})` : ""}
      </button>
      {open && (
        <div className="absolute left-0 top-full z-40 mt-2 w-[min(22rem,calc(100vw-1.5rem))] rounded-xl border-2 border-slate-300 bg-white p-3 shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">Last 5 calculations</p>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-sm font-black text-slate-500">✕</button>
          </div>
          {list.length === 0 ? (
            <p className="mt-2 text-sm text-slate-600">No calculations yet — results are added here automatically once complete.</p>
          ) : (
            <ul className="mt-2 divide-y-2 divide-slate-100">
              {list.map((e, i) => (
                <li key={e.at + e.title}>
                  <button type="button" onClick={() => setExpanded(expanded === i ? null : i)} className="w-full py-2 text-left">
                    <p className="text-[11px] font-bold text-slate-500">{when(e.at)}</p>
                    <p className="text-sm font-extrabold leading-snug text-slate-900">{e.title}</p>
                    {expanded === i
                      ? <p className="mt-1 whitespace-pre-wrap text-xs font-semibold leading-snug text-slate-700">{e.detail}</p>
                      : <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">{e.detail}</p>}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {list.length > 0 && (
            <button type="button" onClick={() => clearHistory(tool)} className="mt-1 text-xs font-bold text-slate-500 underline">Clear history</button>
          )}
        </div>
      )}
    </div>
  );
}
