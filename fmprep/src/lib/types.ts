/**
 * Content model for the Family Medicine study module.
 *
 * Every subject file under study/content default-exports one Subject built
 * from these types. Nothing here is app state — content is static, typed data
 * that the reader, question bank, theory-paper bank, case bank, flashcard
 * scheduler and search all read from.
 */

export type Difficulty = "easy" | "moderate" | "hard";

/**
 * How often the topic actually shows up — in the clinic and in the paper.
 * The library is ordered by this, so revision runs commonest-first and the
 * uncommon material is still there, one heading further down.
 */
export type Frequency = "core" | "common" | "less-common" | "uncommon";

export const FREQUENCY_ORDER: Frequency[] = ["core", "common", "less-common", "uncommon"];

export const FREQUENCY_LABEL: Record<Frequency, string> = {
  core: "Core — asked almost every session",
  common: "Common — expect one of these",
  "less-common": "Less common — worth a read-through",
  uncommon: "Uncommon — the tail that decides ranks",
};

export type Mcq = {
  /** Stable, globally unique id — progress and review history key off it. */
  id: string;
  stem: string;
  /** Four or five answer choices, written without "all of the above". */
  options: string[];
  /** Index into options of the single best answer. */
  answer: number;
  /** Why the key is right AND why the tempting distractors are wrong. */
  explanation: string;
  difficulty: Difficulty;
};

export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type NoteSection = {
  heading: string;
  /** Terse, exam-ready lines; may contain inline **bold** markers. */
  points: string[];
};

export type NoteTable = {
  heading: string;
  columns: string[];
  rows: string[][];
};

/** Which theory paper a written question belongs to. */
export type PaperId = "I" | "II" | "III" | "IV";

/** The shapes a DNB Family Medicine theory question actually takes. */
export type TheoryQuestionKind =
  | "long"
  | "short-note"
  | "enumerate"
  | "differentiate"
  | "define-classify"
  | "chart-flow";

/**
 * A written-paper question in the DNB Family Medicine style, with the model
 * answer laid out the way it should be written in the answer book.
 */
export type TheoryQuestion = {
  id: string;
  paper: PaperId;
  kind: TheoryQuestionKind;
  /** Marks it would carry in the paper. */
  marks: number;
  /** Minutes to spend on it if the whole paper is to be finished. */
  minutes: number;
  frequency: Frequency;
  question: string;
  /** How to open the answer — the first two lines that earn the definition marks. */
  openingLines: string[];
  /** The body of the model answer, in the order it should be written. */
  answer: NoteSection[];
  /** Diagram, table or flow chart the examiner expects to see drawn. */
  mustDraw?: string[];
  /** Marks split, so time goes where the marks are. */
  markSplit?: { part: string; marks: number }[];
  keywords: string[];
};

/** One step of a case as it is actually presented to the examiner. */
export type CaseSection = {
  heading: string;
  points: string[];
};

export type CaseKind = "long" | "short" | "osce" | "viva";

/**
 * A worked case presentation: what to say, in the order it is said, with the
 * viva that follows it.
 */
export type ClinicalCase = {
  id: string;
  title: string;
  kind: CaseKind;
  /** Subject id this case sits under. */
  subjectId: string;
  /** The one-line summary the candidate opens with. */
  opening: string;
  /** Minutes the case is allotted in the practical exam. */
  minutes: number;
  frequency: Frequency;
  sections: CaseSection[];
  /** The summary statement — the single most marked sentence of a long case. */
  summaryStatement: string;
  differential: { diagnosis: string; forIt: string; againstIt: string }[];
  investigations: { test: string; why: string; expected: string }[];
  management: NoteSection[];
  viva: { q: string; a: string }[];
  pitfalls: string[];
  references: string[];
};

export type Topic = {
  id: string;
  title: string;
  /** One sentence a candidate could give as the definition-level answer. */
  oneLiner: string;
  frequency: Frequency;
  /** Extra search terms: synonyms, drug names, abbreviations. */
  keywords: string[];
  sections: NoteSection[];
  tables?: NoteTable[];
  /** Symptoms/signs that force same-day referral or admission. */
  redFlags: string[];
  /** Points examiners reward; the lines worth memorising verbatim. */
  pearls: string[];
  /** Written-paper questions in the DNB style, with model answers. */
  theory?: TheoryQuestion[];
  mcqs: Mcq[];
  cards: Flashcard[];
  /** Guideline or textbook the content follows, with edition/year. */
  references: string[];
};

export type Subject = {
  id: string;
  title: string;
  blurb: string;
  /** Lucide icon name resolved by SubjectIcon; falls back to BookOpen. */
  icon: string;
  /** Which theory papers this subject is examined in. */
  papers: PaperId[];
  topics: Topic[];
  cases?: ClinicalCase[];
};

/**
 * Diagrams a reader can take in at a glance.
 *
 * Prose is where the detail lives, but a candidate revising the night before
 * needs the shape of a thing — the order of steps in a resuscitation, the two
 * arms of a classification, what separates two look-alike diagnoses. Rather
 * than hand-drawn SVG, which rots and cannot be checked, a diagram is written
 * as data in one of five shapes, each with a layout the page draws the same way
 * every time.
 */
export type DiagramTone =
  /** The ordinary case. */
  | "neutral"
  /** A branch point: something is being decided here. */
  | "decision"
  /** Danger, a contraindication, or the step people get wrong. */
  | "warn"
  /** The target state, or the right answer. */
  | "good";

export type DiagramStep = {
  label: string;
  /** A dose, a threshold, a caveat — the line under the box. */
  detail?: string;
  tone?: DiagramTone;
};

export type Diagram =
  /** One thing after another: an algorithm, a protocol, a work-up. */
  | { kind: "flow"; heading: string; caption?: string; steps: DiagramStep[] }
  /** One root splitting into arms: a classification, a differential. */
  | {
      kind: "branch";
      heading: string;
      caption?: string;
      root: string;
      arms: { label: string; tone?: DiagramTone; steps: string[] }[];
    }
  /** Escalation in order of increasing intensity: a treatment ladder. */
  | { kind: "ladder"; heading: string; caption?: string; steps: DiagramStep[] }
  /** A closed loop: the disaster cycle, the audit cycle, the planning cycle. */
  | { kind: "cycle"; heading: string; caption?: string; steps: DiagramStep[] }
  /** Side by side: what tells two similar things apart. */
  | { kind: "compare"; heading: string; caption?: string; columns: string[]; rows: string[][] };

/** Diagrams for a subject, keyed by the topic id they belong to. */
export type DiagramSet = Record<string, Diagram[]>;
