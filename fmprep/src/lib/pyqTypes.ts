/**
 * Previous-year questions.
 *
 * These are questions as they were actually set, recorded session by session.
 * NBEMS does not publish a complete public archive of Family Medicine papers,
 * so every entry carries its `provenance`: whether the wording comes from an
 * official paper, a published compilation, or candidates' recall. The screen
 * shows that label next to each question, because a recalled question is a
 * reliable guide to the theme and only a rough guide to the exact words.
 *
 * A learner's own uploaded question papers land in "My documents" and are
 * searched alongside these.
 */
import type { NoteSection, PaperId, TheoryQuestionKind } from "./types";

export type Provenance =
  /** Wording taken from an official NBEMS question paper. */
  | "official-paper"
  /** From a published question-bank or compilation that cites the session. */
  | "published-compilation"
  /** Reconstructed from candidates' recall after the exam. */
  | "candidate-recall";

export const PROVENANCE_LABEL: Record<Provenance, string> = {
  "official-paper": "From the official paper",
  "published-compilation": "Published compilation",
  "candidate-recall": "Candidate recall — theme reliable, wording approximate",
};

export type PastQuestion = {
  id: string;
  /** The sitting, e.g. "December 2023". Use the year alone if that is all that is known. */
  session: string;
  year: number;
  paper: PaperId;
  marks: number;
  kind: TheoryQuestionKind;
  /** The question as set, including its parts. */
  question: string;
  /** Subject ids it belongs to, most relevant first. */
  subjectIds: string[];
  /** Library topic ids that answer it, so the reader can jump straight there. */
  topicIds: string[];
  provenance: Provenance;
  /** Anything the reader should know: a doubtful year, a reworded part. */
  note?: string;
  /** How the answer should be built, when no single library topic covers it. */
  answerPlan?: NoteSection[];
};

/** A theme that recurs across sittings, with the years it has appeared in. */
export type RecurringTheme = {
  id: string;
  theme: string;
  paper: PaperId;
  subjectIds: string[];
  /** Sessions in which a question on this theme is recorded. */
  sessions: string[];
  /** Why it keeps coming back, and the angle each version took. */
  note: string;
  topicIds: string[];
};

export type PyqBank = {
  /** What was collected, from where, and when it was last checked. */
  sourceNote: string;
  questions: PastQuestion[];
  themes: RecurringTheme[];
  references: { label: string; url?: string }[];
};
