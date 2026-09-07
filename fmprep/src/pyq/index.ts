/**
 * The previous-year question bank.
 *
 * Two sources, both the learner's own, imported verbatim by
 * scripts/importPyq.mjs and never rewritten:
 *
 *   - the DNB Family Medicine papers as sat, June 2022 to June 2025;
 *   - Dr Vishnu B S's topic-wise compilation, 2011 to 2022.
 *
 * This file only groups and counts them. The full text of both documents is
 * carried through as well, so they can be read inside the app exactly as
 * written, and the originals ship with the site for download.
 */
import type { PaperId } from "../lib/types";
import { PAPER_QUESTIONS, type SourceQuestion } from "./papers.generated";
import { TOPICWISE_QUESTIONS, type TopicwiseQuestion } from "./topicwise.generated";

export type { SourceQuestion, TopicwiseQuestion };
export { PAPER_QUESTIONS, TOPICWISE_QUESTIONS };
// The full text of both source documents lives in ./sourceText.generated and is
// imported only where it is needed, so it stays out of the first load.

export const PYQ_SOURCE_NOTE =
  "These are your own question papers, imported word for word: the sittings from June 2022 to June 2025, and Dr Vishnu B S's topic-wise compilation covering 2011 to 2022. Nothing has been reworded or summarised. Both source documents can be read in full inside the app and the originals can be downloaded.";

export type Sitting = { session: string; year: number; papers: PaperId[]; count: number };

/** The sittings in the paper set, newest first. */
export function sittings(): Sitting[] {
  const map = new Map<string, Sitting>();
  for (const q of PAPER_QUESTIONS) {
    const found = map.get(q.session);
    if (found) {
      found.count++;
      if (!found.papers.includes(q.paper)) found.papers.push(q.paper);
    } else {
      map.set(q.session, { session: q.session, year: q.year, papers: [q.paper], count: 1 });
    }
  }
  return [...map.values()]
    .map((s) => ({ ...s, papers: s.papers.sort() }))
    .sort((a, b) => b.year - a.year || b.session.localeCompare(a.session));
}

export function papersFor(session: string | "all", paper: PaperId | "all"): SourceQuestion[] {
  return PAPER_QUESTIONS.filter(
    (q) => (session === "all" || q.session === session) && (paper === "all" || q.paper === paper),
  ).sort((a, b) => b.year - a.year || a.paper.localeCompare(b.paper) || a.number - b.number);
}

export type TopicGroup = {
  topic: string;
  questions: TopicwiseQuestion[];
  /** Years it has been asked in, newest first. */
  years: number[];
};

/** The topic-wise compilation, grouped as it groups itself, most-asked first. */
export function topicGroups(): TopicGroup[] {
  const map = new Map<string, TopicwiseQuestion[]>();
  for (const q of TOPICWISE_QUESTIONS) {
    const key = q.topicHeading || "Unfiled";
    const list = map.get(key) ?? [];
    list.push(q);
    map.set(key, list);
  }
  return [...map.entries()]
    .map(([topic, questions]) => ({
      topic,
      questions: [...questions].sort((a, b) => b.year - a.year),
      years: [...new Set(questions.map((q) => q.year))].sort((a, b) => b - a),
    }))
    .sort((a, b) => b.questions.length - a.questions.length || a.topic.localeCompare(b.topic));
}

/** Topics asked in three or more different years — the ones that keep coming back. */
export function recurringTopics(minYears = 3): TopicGroup[] {
  return topicGroups().filter((g) => g.years.length >= minYears);
}

export function pyqCounts(): {
  paperQuestions: number;
  sittings: number;
  topicwiseQuestions: number;
  topics: number;
  years: number;
} {
  const years = new Set([
    ...PAPER_QUESTIONS.map((q) => q.year),
    ...TOPICWISE_QUESTIONS.map((q) => q.year),
  ]);
  return {
    paperQuestions: PAPER_QUESTIONS.length,
    sittings: sittings().length,
    topicwiseQuestions: TOPICWISE_QUESTIONS.length,
    topics: new Set(TOPICWISE_QUESTIONS.map((q) => q.topicHeading)).size,
    years: years.size,
  };
}
