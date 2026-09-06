/**
 * One search box across the whole module: notes, model answers, cases,
 * questions and the learner's own imported documents.
 */
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { KIND_LABEL, search, type SearchResult } from "../lib/search";
import { getVersion, isLoaded, load, subscribe } from "../lib/docs";
import { BackBar, Chip, Empty } from "./ui";

export default function SearchScreen({
  onBack,
  onOpen,
  initialQuery,
}: {
  onBack: () => void;
  onOpen: (result: SearchResult) => void;
  /** Prefilled when arriving from a phrase found in one of your documents. */
  initialQuery?: string;
}) {
  useSyncExternalStore(subscribe, getVersion);
  const [query, setQuery] = useState(initialQuery ?? "");

  useEffect(() => {
    if (!isLoaded()) void load();
  }, []);

  const results = useMemo(() => search(query), [query]);
  const grouped = useMemo(() => {
    const map = new Map<string, SearchResult[]>();
    for (const r of results) {
      const list = map.get(r.kind) ?? [];
      list.push(r);
      map.set(r.kind, list);
    }
    return [...map.entries()];
  }, [results]);

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />

      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search notes, answers, cases, questions, your documents"
        className="mt-5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:ring-2 focus:ring-slate-500"
      />

      {query.trim().length < 2 ? (
        <p className="mt-3 text-sm text-slate-600">
          Type at least two letters. Searching covers every word of the notes, every model answer, every case and
          every document you have imported.
        </p>
      ) : results.length === 0 ? (
        <Empty title="Nothing found" body="Try a drug name, an abbreviation, or a phrase from your own notes." />
      ) : (
        <>
          <p className="mt-3 text-xs text-slate-500">{results.length} results</p>
          {grouped.map(([kind, list]) => (
            <section key={kind} className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {KIND_LABEL[kind as SearchResult["kind"]]} · {list.length}
              </h2>
              <div className="mt-2 space-y-2">
                {list.slice(0, 25).map((r) => (
                  <button
                    key={`${r.kind}-${r.id}`}
                    type="button"
                    onClick={() => onOpen(r)}
                    className="block w-full rounded-xl border border-slate-200 bg-white p-3.5 text-left shadow-sm hover:shadow"
                  >
                    <span className="flex items-start justify-between gap-2">
                      <span className="font-bold leading-snug text-slate-900">
                        {r.title.length > 120 ? `${r.title.slice(0, 120)}…` : r.title}
                      </span>
                      <Chip>{r.context}</Chip>
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-600">{r.snippet}</span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
