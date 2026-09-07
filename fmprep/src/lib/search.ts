/**
 * One search box over everything: topics, their body text, theory questions,
 * cases, flashcards and the learner's own imported documents.
 *
 * The index is built once, lazily, from the static content and is a plain
 * array of records with a lowercased haystack. At a few thousand records this
 * outruns anything cleverer, needs no dependency and works offline.
 */
import {
  allCases,
  allMcqs,
  allTheory,
  allTopics,
  contentVersion,
  type IndexedCase,
  type IndexedMcq,
  type IndexedTheory,
  type IndexedTopic,
} from "../content/index";
import { getDocs, type StudyDoc } from "./docs";

export type SearchKind = "topic" | "theory" | "case" | "mcq" | "document";

export type SearchResult = {
  kind: SearchKind;
  /** Identifier the caller opens: topic id, theory id, case id, mcq id, doc id. */
  id: string;
  title: string;
  /** Subject or collection the hit sits in. */
  context: string;
  /** Text around the match. */
  snippet: string;
  /** Lower is better. */
  score: number;
};

type Record_ = {
  kind: SearchKind;
  id: string;
  title: string;
  context: string;
  /** Everything searchable, already lowercased. */
  hay: string;
  /** Original-case text, for snippets. */
  raw: string;
};

let memo: Record_[] | null = null;
/** The content version the memo was built from — subjects arrive lazily. */
let memoVersion = -1;

function topicRecord(t: IndexedTopic): Record_ {
  const parts = [
    t.topic.title,
    t.topic.oneLiner,
    t.topic.keywords.join(" "),
    ...t.topic.sections.flatMap((s) => [s.heading, ...s.points]),
    ...(t.topic.tables ?? []).flatMap((tab) => [tab.heading, ...tab.rows.flat()]),
    ...t.topic.redFlags,
    ...t.topic.pearls,
  ];
  const raw = parts.join(" · ");
  return {
    kind: "topic",
    id: t.topic.id,
    title: t.topic.title,
    context: t.subjectTitle,
    hay: raw.toLowerCase(),
    raw,
  };
}

function theoryRecord(t: IndexedTheory): Record_ {
  const raw = [
    t.question.question,
    ...t.question.openingLines,
    ...t.question.answer.flatMap((s) => [s.heading, ...s.points]),
    t.question.keywords.join(" "),
  ].join(" · ");
  return {
    kind: "theory",
    id: t.question.id,
    title: t.question.question,
    context: `Paper ${t.question.paper} · ${t.subjectTitle}`,
    hay: raw.toLowerCase(),
    raw,
  };
}

function caseRecord(c: IndexedCase): Record_ {
  const k = c.clinicalCase;
  const raw = [
    k.title,
    k.opening,
    k.summaryStatement,
    ...k.sections.flatMap((s) => [s.heading, ...s.points]),
    ...k.differential.map((d) => `${d.diagnosis} ${d.forIt} ${d.againstIt}`),
    ...k.viva.map((v) => `${v.q} ${v.a}`),
  ].join(" · ");
  return {
    kind: "case",
    id: k.id,
    title: k.title,
    context: `${k.kind === "long" ? "Long case" : k.kind === "short" ? "Short case" : k.kind === "osce" ? "OSCE" : "Viva"} · ${c.subjectTitle}`,
    hay: raw.toLowerCase(),
    raw,
  };
}

function mcqRecord(q: IndexedMcq): Record_ {
  const raw = [q.mcq.stem, ...q.mcq.options, q.mcq.explanation].join(" · ");
  return {
    kind: "mcq",
    id: q.mcq.id,
    title: q.mcq.stem,
    context: `${q.subjectTitle} · ${q.topicTitle}`,
    hay: raw.toLowerCase(),
    raw,
  };
}

function docRecord(d: StudyDoc): Record_ {
  const raw = `${d.title} · ${d.text}`;
  return {
    kind: "document",
    id: d.id,
    title: d.title,
    context: d.collection,
    hay: raw.toLowerCase(),
    raw,
  };
}

/**
 * Records for the subjects loaded so far. Rebuilt whenever another subject
 * chunk arrives; documents are appended per query because they change often.
 */
function staticIndex(): Record_[] {
  if (memo && memoVersion === contentVersion()) return memo;
  memoVersion = contentVersion();
  memo = [
    ...allTopics().map(topicRecord),
    ...allTheory().map(theoryRecord),
    ...allCases().map(caseRecord),
    ...allMcqs().map(mcqRecord),
  ];
  return memo;
}

function snippetAround(raw: string, at: number, term: number): string {
  const start = Math.max(0, at - 60);
  const end = Math.min(raw.length, at + term + 100);
  return `${start > 0 ? "…" : ""}${raw.slice(start, end).replace(/\s+/g, " ").trim()}${end < raw.length ? "…" : ""}`;
}

export function search(query: string, limit = 80): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const records = [...staticIndex(), ...getDocs().map(docRecord)];
  const out: SearchResult[] = [];

  for (const r of records) {
    const inTitle = r.title.toLowerCase().indexOf(q);
    const at = r.hay.indexOf(q);
    if (at < 0) continue;
    // A title hit beats a body hit; an early body hit beats a late one; and a
    // topic beats a question that merely mentions the same words.
    const kindWeight = r.kind === "topic" ? 0 : r.kind === "document" ? 1 : r.kind === "case" ? 2 : r.kind === "theory" ? 3 : 4;
    const score = (inTitle >= 0 ? 0 : 1000) + Math.min(at, 900) + kindWeight;
    out.push({
      kind: r.kind,
      id: r.id,
      title: r.title,
      context: r.context,
      snippet: snippetAround(r.raw, at, q.length),
      score,
    });
  }

  return out.sort((a, b) => a.score - b.score).slice(0, limit);
}

export const KIND_LABEL: Record<SearchKind, string> = {
  topic: "Topic",
  theory: "Theory question",
  case: "Case",
  mcq: "MCQ",
  document: "My document",
};
