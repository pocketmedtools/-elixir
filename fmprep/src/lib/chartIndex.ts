/**
 * Every classification, score, flow chart and table in the library, in one
 * searchable list.
 *
 * The charts were always there - 770 of them - but reachable only by opening
 * the topic that happened to hold them. A reader who wants "the Glasgow coma
 * scale" or "every treatment algorithm in respiratory" had nowhere to ask.
 * This builds the index the search box needs, and labels each entry by what
 * it is, because "show me the scoring systems" and "show me the treatment
 * algorithms" are different questions and a single flat list answers neither.
 *
 * Kind is decided by the heading first and the shape second. A heading is a
 * better signal than a shape: a `compare` diagram called "Ranson criteria" is
 * a score, and a `flow` called "Choosing reperfusion" is an algorithm, whatever
 * boxes each is drawn with.
 */
import type { Diagram, NoteTable } from "./types";
import { alternates } from "./abbreviations";

export type ChartKind = "score" | "treatment" | "flow" | "table";

export type ChartEntry = {
  /** Stable across builds, so a notification can name one and find it again. */
  id: string;
  kind: ChartKind;
  heading: string;
  caption: string;
  subjectId: string;
  subjectTitle: string;
  topicId: string;
  topicTitle: string;
  /** Everything a reader might type, lowercased and space-joined. */
  haystack: string;
  diagram?: Diagram;
  table?: NoteTable;
};

/** A classification, a set of criteria, a score, a grade, a stage, a scale. */
const SCORE =
  /\b(classification|classif\w*|criteria|criterion|score|scoring|grading|grade|grades|stage|staging|scale|index|severity|class|typing|types?\b)\b/i;

/** Something that says what to give, in what order. */
const TREATMENT =
  /\b(treat\w*|therapy|management|managing|regimen|protocol|algorithm|step[- ]?up|ladder|first[- ]line|second[- ]line|dose|dosing|prescrib\w*|resuscitat\w*|antidote|when to|choosing|choice)\b/i;

function kindOf(heading: string, isTable: boolean, diagramKind?: string): ChartKind {
  if (SCORE.test(heading)) return "score";
  if (TREATMENT.test(heading)) return "treatment";
  if (isTable || diagramKind === "compare") return "table";
  return "flow";
}

/** Every word in a diagram, so a search for a drug name finds the chart. */
function diagramText(d: Diagram): string {
  const out: string[] = [d.heading, d.caption ?? ""];
  const any = d as unknown as Record<string, unknown>;
  const steps = any.steps as { label?: string; detail?: string }[] | undefined;
  if (steps) for (const s of steps) out.push(s.label ?? "", s.detail ?? "");
  const arms = any.arms as { label?: string; steps?: string[] }[] | undefined;
  if (arms) for (const a of arms) out.push(a.label ?? "", ...(a.steps ?? []));
  if (typeof any.root === "string") out.push(any.root);
  const columns = any.columns as string[] | undefined;
  if (columns) out.push(...columns);
  const rows = any.rows as string[][] | undefined;
  if (rows) for (const r of rows) out.push(...r);
  return out.join(" ");
}

const clean = (s: string) => s.replace(/\*\*/g, "").replace(/\s+/g, " ").trim();

export function buildChartIndex(
  subjects: { id: string; title: string; topics: { id: string; title: string; tables?: NoteTable[] }[] }[],
  diagramsByTopic: Record<string, Diagram[]>,
): ChartEntry[] {
  const out: ChartEntry[] = [];
  for (const s of subjects) {
    for (const t of s.topics) {
      const common = {
        subjectId: s.id, subjectTitle: s.title, topicId: t.id, topicTitle: t.title,
      };
      (diagramsByTopic[t.id] ?? []).forEach((d, i) => {
        const text = clean(diagramText(d));
        out.push({
          ...common,
          id: `${t.id}--d${i}`,
          kind: kindOf(d.heading, false, d.kind),
          heading: clean(d.heading),
          caption: clean(d.caption ?? ""),
          haystack: `${text} ${t.title} ${s.title}`.toLowerCase(),
          diagram: d,
        });
      });
      (t.tables ?? []).forEach((tb, i) => {
        const text = clean([tb.heading, ...tb.columns, ...tb.rows.flat()].join(" "));
        out.push({
          ...common,
          id: `${t.id}--t${i}`,
          kind: kindOf(tb.heading, true),
          heading: clean(tb.heading),
          caption: "",
          haystack: `${text} ${t.title} ${s.title}`.toLowerCase(),
          table: tb,
        });
      });
    }
  }
  return out;
}

/**
 * Every word typed has to appear somewhere in the entry, so "asthma step"
 * narrows rather than widening the way an any-word match would. An entry whose
 * heading carries the words is ranked above one that only mentions them in a
 * cell, and a whole-word hit above a prefix.
 *
 * A term matches on any of its spellings: "GCS" reaches a chart headed
 * "Glasgow Coma Scale" and the other way round. Without that the index only
 * held the literal words, and the same score was two different searches.
 */
export function searchCharts(index: ChartEntry[], query: string, kind?: ChartKind): ChartEntry[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const pool = kind ? index.filter((e) => e.kind === kind) : index;
  if (!terms.length) return pool;
  const esc = (x: string) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  /* A bare substring test makes a short term match inside longer words: "MI"
     hit 1,210 of 1,330 charts through "administration" and "milligram", and
     "SAM" hit 228 through "same". Three characters or fewer must be a whole
     word; anything longer may match from a word start, so typing "hypert"
     still reaches "hypertension" while the search is being typed. */
  const matcher = (form: string) =>
    new RegExp(form.length <= 3 ? `\\b${esc(form)}\\b` : `\\b${esc(form)}`);
  const expanded = terms.map((t) => alternates(t).map((f) => ({ f, re: matcher(f) })));
  const scored: { e: ChartEntry; score: number }[] = [];
  for (const e of pool) {
    const heading = e.heading.toLowerCase();
    let score = 0;
    let all = true;
    for (const forms of expanded) {
      const found = forms.find((x) => x.re.test(e.haystack));
      if (!found) { all = false; break; }
      const hit = found.f;
      // The spelling that actually matched decides the rank, so a heading hit
      // on the expansion scores like a heading hit on what was typed.
      if (new RegExp(`\\b${esc(hit)}\\b`).test(heading)) score += 10;
      else if (heading.includes(hit)) score += 6;
      else if (e.topicTitle.toLowerCase().includes(hit)) score += 3;
      else score += 1;
    }
    if (all) scored.push({ e, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.e.heading.localeCompare(b.e.heading)).map((x) => x.e);
}

export const KIND_LABEL: Record<ChartKind, string> = {
  score: "Classifications & Scores",
  treatment: "Treatment Algorithms",
  flow: "Flow Charts",
  table: "Tables",
};

/**
 * Which chart is today's? A stable rotation over the whole index, so every
 * classification comes round exactly once before any repeats, and the same day
 * always gives the same chart on every device.
 */
export function chartOfTheDay(index: ChartEntry[], dayNumber: number): ChartEntry | undefined {
  const pool = index.filter((e) => e.kind === "score" || e.kind === "treatment");
  if (!pool.length) return undefined;
  const ordered = [...pool].sort((a, b) => a.id.localeCompare(b.id));
  return ordered[dayNumber % ordered.length];
}

/** Whole days since the epoch, in local time, so the day flips at midnight. */
export const dayNumber = (at: number) => Math.floor((at - new Date(at).getTimezoneOffset() * 60_000) / 86_400_000);
