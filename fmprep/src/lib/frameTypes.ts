/**
 * Types for the two "frame" documents that sit around the subject content:
 * the examination blueprint (what the exam actually is) and the case
 * presentation guide (how a case is presented and marked).
 *
 * These are data, not app state. The screens that render them are dumb.
 */
import type { Frequency, NoteSection, NoteTable, PaperId } from "./types";

/** One theory paper of the final examination. */
export type PaperSpec = {
  id: PaperId;
  title: string;
  /** What the paper covers, in the examiner's own grouping. */
  covers: string[];
  marks: number;
  minutes: number;
  /** Typical question mix, e.g. "10 questions x 10 marks". */
  structure: string[];
  /** Themes that recur session after session, commonest first. */
  recurringThemes: { theme: string; frequency: Frequency; note: string }[];
};

/** A station or case in the practical examination. */
export type PracticalComponent = {
  name: string;
  minutes?: number;
  weight?: string;
  whatHappens: string[];
  howItIsMarked: string[];
};

export type ExamBlueprint = {
  /** e.g. "DNB Family Medicine (NBEMS) — final examination". */
  title: string;
  /** Plain-language summary of the whole exam in three or four lines. */
  overview: string[];
  /** When the source was last checked, and what to re-check. */
  sourceNote: string;
  papers: PaperSpec[];
  practical: PracticalComponent[];
  /** Passing rules, attempts, thesis and other eligibility mechanics. */
  rules: NoteSection[];
  /** How to actually write the paper: time per mark, structure, presentation. */
  answerCraft: NoteSection[];
  tables?: NoteTable[];
  /** Preparation timeline suggestions. */
  studyPlan: NoteSection[];
  references: { label: string; url?: string }[];
};

/** A reusable script for presenting a case, independent of the diagnosis. */
export type PresentationTemplate = {
  id: string;
  title: string;
  /** long case, short case, OSCE station, viva. */
  kind: "long" | "short" | "osce" | "viva";
  minutes: number;
  /** The running order, with the words to use. */
  steps: NoteSection[];
  /** Sentences to have ready, verbatim. */
  phrases: string[];
  /** What loses marks. */
  pitfalls: string[];
};

export type PresentationGuide = {
  title: string;
  overview: string[];
  templates: PresentationTemplate[];
  /** Family-medicine-specific assessment tools with how to draw/score them. */
  familyTools: NoteSection[];
  /** Examiner's marking scheme, as far as it is published or consistently reported. */
  marking: NoteSection[];
  tables?: NoteTable[];
  references: { label: string; url?: string }[];
};
