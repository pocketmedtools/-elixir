/**
 * Every classification, score, flow chart and table in the library, searchable.
 *
 * The flashcard drill this replaces asked the reader to recall a fact out of
 * context. What an exam actually rewards is holding the chart: the staging, the
 * score, the order of drugs. Those were all in the library already and reachable
 * only by remembering which topic held them.
 *
 * Typing narrows across every word in every chart - a heading, a step, a table
 * cell, the topic and the subject - so both "Glasgow coma" and "neurology"
 * find something useful, and the four kind filters answer "show me the scores"
 * and "show me the algorithms" separately.
 */
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { diagramsByTopic } from "../diagrams/index";
import { subjects } from "../content/index";
import {
  buildChartIndex, searchCharts, chartOfTheDay, dayNumber,
  KIND_LABEL, type ChartEntry, type ChartKind,
} from "../lib/chartIndex";
import { colorVars } from "../lib/hues";
import { armDailyChart } from "../lib/dailyChart";
import type { Diagram } from "../lib/types";
import DiagramBlock from "./DiagramBlock";
import { BackBar, TableBlock } from "./ui";

const KINDS: ChartKind[] = ["score", "treatment", "flow", "table"];

export default function ChartsScreen({
  onBack,
  onOpenTopic,
  initialQuery = "",
  initialChartId,
}: {
  onBack: () => void;
  onOpenTopic: (topicId: string) => void;
  initialQuery?: string;
  /** Set when a daily notification was tapped, so that chart opens unfolded. */
  initialChartId?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [kind, setKind] = useState<ChartKind | null>(null);
  const [open, setOpen] = useState<string | null>(initialChartId ?? null);
  const [byTopic, setByTopic] = useState<Record<string, Diagram[]> | null>(null);
  const ready = byTopic !== null;

  // Diagrams live in per-subject chunks; the index needs all of them.
  useEffect(() => {
    let live = true;
    diagramsByTopic().then((d) => live && setByTopic(d));
    return () => { live = false; };
  }, []);

  const index = useMemo(
    () => (byTopic ? buildChartIndex(subjects(), byTopic) : []),
    [byTopic],
  );
  const results = useMemo(() => searchCharts(index, query, kind ?? undefined), [index, query, kind]);
  const today = useMemo(() => chartOfTheDay(index, dayNumber(Date.now())), [index]);

  /* Re-arm the fortnight of daily notifications whenever this screen is
     opened with a full index. No-ops on the web, where a page cannot raise a
     notification once its tab is closed. */
  useEffect(() => {
    if (index.length) void armDailyChart(index);
  }, [index]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const e of index) c[e.kind] = (c[e.kind] ?? 0) + 1;
    return c;
  }, [index]);

  return (
    <div>
      <BackBar onBack={onBack} label="Study" />

      <div className="mx-auto max-w-3xl px-3 pb-16 md:px-6">
        <h2 className="mt-4 text-[1.45em] font-bold leading-tight tracking-tight">
          Charts, Scores &amp; Tables
        </h2>
        <p className="mt-1.5 text-[14.5px] leading-relaxed text-[var(--quiet)]">
          {ready
            ? `${index.length} charts across the whole library. Search a topic, a score, a drug or a subject.`
            : "Loading every chart in the library…"}
        </p>

        <label className="relative mt-4 block">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[var(--quiet)]"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Glasgow coma, Ranson, asthma step-up, dengue…"
            className="w-full rounded-xl border-[1.5px] border-[var(--rule)] bg-white py-3 pl-11 pr-10 text-[16px]"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear the search"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--quiet)]"
            >
              <X className="h-[18px] w-[18px]" />
            </button>
          )}
        </label>

        <div className="mt-3 flex flex-wrap gap-2">
          {KINDS.map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={kind === k}
              onClick={() => setKind(kind === k ? null : k)}
              className="rounded-full border-[1.5px] px-3.5 py-1.5 text-[13.5px] font-semibold"
              style={
                kind === k
                  ? { background: "var(--head)", color: "#fff", borderColor: "var(--head)" }
                  : { borderColor: "var(--rule)", color: "var(--quiet)" }
              }
            >
              {KIND_LABEL[k]} {counts[k] ? `(${counts[k]})` : ""}
            </button>
          ))}
        </div>

        {/* One a day, the same one on every device, and every score comes round
            before any repeats. The Android build also sends it as a notification. */}
        {!query && !kind && today && (
          <section className="mt-6 rounded-xl border-[1.5px] p-4" style={{ borderColor: "var(--rule)", background: "var(--cream)" }}>
            <p className="text-[12.5px] font-bold" style={{ color: "var(--label)" }}>
              Today&apos;s classification
            </p>
            <Row entry={today} open={open === today.id} onToggle={() => setOpen(open === today.id ? null : today.id)} onOpenTopic={onOpenTopic} />
          </section>
        )}

        {ready && (
          <p className="mt-6 text-[13.5px] text-[var(--quiet)]">
            {results.length} {results.length === 1 ? "chart" : "charts"}
            {query ? ` matching “${query}”` : ""}
          </p>
        )}

        <div className="mt-3 flex flex-col gap-3">
          {results.slice(0, 120).map((e) => (
            <div key={e.id} className="rounded-xl border border-[var(--rule)] bg-white p-4">
              <Row entry={e} open={open === e.id} onToggle={() => setOpen(open === e.id ? null : e.id)} onOpenTopic={onOpenTopic} />
            </div>
          ))}
          {ready && !results.length && (
            <p className="rounded-xl border border-dashed border-[var(--rule)] px-4 py-10 text-center text-[15px] text-[var(--quiet)]">
              Nothing matches that. Try a shorter word, or the name of the topic.
            </p>
          )}
          {results.length > 120 && (
            <p className="text-center text-[13.5px] text-[var(--quiet)]">
              Showing the first 120 of {results.length}. Narrow the search to see the rest.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({
  entry, open, onToggle, onOpenTopic,
}: {
  entry: ChartEntry;
  open: boolean;
  onToggle: () => void;
  onOpenTopic: (id: string) => void;
}) {
  return (
    <div style={colorVars(entry.subjectId)}>
      <button type="button" onClick={onToggle} className="w-full text-left">
        <p className="text-[12.5px] font-bold" style={{ color: "var(--label)" }}>
          {KIND_LABEL[entry.kind]} · {entry.subjectTitle}
        </p>
        <p className="mt-1 text-[17px] font-bold leading-snug" style={{ color: "var(--head)" }}>
          {entry.heading}
        </p>
        <p className="mt-1 text-[14px] leading-snug text-[var(--quiet)]">{entry.topicTitle}</p>
      </button>

      {open && (
        <div className="mt-4">
          {entry.diagram ? <DiagramBlock diagram={entry.diagram} /> : null}
          {entry.table ? <TableBlock table={entry.table} /> : null}
          <button
            type="button"
            onClick={() => onOpenTopic(entry.topicId)}
            className="mt-2 rounded-lg px-3.5 py-2 text-[14px] font-semibold text-white"
            style={{ background: "var(--head)" }}
          >
            Open the whole topic
          </button>
        </div>
      )}
    </div>
  );
}
