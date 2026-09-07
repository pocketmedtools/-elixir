/**
 * Turn the source question papers into typed data.
 *
 *   node scripts/importPyq.mjs
 *
 * Inputs (in source-papers/, alongside the originals they came from):
 *   DNB_FM_PYQ_2022-2025.txt              the 2022-2025 papers, sitting by sitting
 *   DNB_FM_PYQ_topicwise_2011-2022.txt    Dr Vishnu B S's topic-wise compilation, 2011-2022
 *
 * Outputs (generated - do not hand-edit):
 *   src/pyq/papers.generated.ts           one entry per question, verbatim, per sitting
 *   src/pyq/topicwise.generated.ts        the topic-wise compilation, grouped as it groups itself
 *   src/pyq/sourceText.generated.ts       the full text of both documents, for the reader
 *
 * The question text is copied through unchanged: this script only finds the
 * boundaries between questions and reads the session, paper and marks off the
 * headings. Re-run it after dropping a newer paper into source-papers/.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "source-papers");
const OUT = join(ROOT, "src", "pyq");
mkdirSync(OUT, { recursive: true });

const PAPER_NUMERAL = { 1: "I", 2: "II", 3: "III", 4: "IV" };
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** TypeScript string literal from arbitrary text. */
function lit(text) {
  return JSON.stringify(String(text));
}

/** Total marks from the bracketed split at the end of a question, e.g. [4+3+3]. */
function marksOf(question) {
  const brackets = [...question.matchAll(/\[([0-9+\s]+)\]/g)];
  if (brackets.length === 0) return 0;
  let total = 0;
  for (const b of brackets) {
    for (const part of b[1].split("+")) {
      const n = Number(part.trim());
      if (Number.isFinite(n)) total += n;
    }
  }
  return total;
}

/** The shape the question asks for, read from its own opening words. */
function kindOf(question) {
  const q = question.toLowerCase();
  if (/\bshort note|write (a )?short|briefly on\b/.test(q)) return "short-note";
  if (/\benumerate|list |mention the\b/.test(q)) return "enumerate";
  if (/\bdifferentiate|difference between|how (is|do) .* different\b/.test(q)) return "differentiate";
  if (/\bdefine\b.*\bclassif|\bclassify\b/.test(q)) return "define-classify";
  if (/\bflow ?chart|algorithm|draw a chart\b/.test(q)) return "chart-flow";
  return "long";
}

/* ------------------------------------------------------------------ */
/* 1. The 2022-2025 papers, sitting by sitting                         */
/* ------------------------------------------------------------------ */

function parsePapers(text) {
  const lines = text.split("\n");
  const header = /^(\d{4})\s+([A-Za-z]+)\s+Paper\s+([1-4])\s*$/;

  // Collect the line ranges belonging to each sitting. A header repeats as a
  // running head on later pages, so consecutive ranges with the same key are
  // one section.
  const sections = [];
  let current = null;
  for (let i = 0; i < lines.length; i++) {
    const m = header.exec(lines[i].trim());
    if (m) {
      const key = `${m[2]} ${m[1]} Paper ${m[3]}`;
      if (!current || current.key !== key) {
        current = { key, year: Number(m[1]), month: m[2], paper: PAPER_NUMERAL[Number(m[3])], lines: [] };
        sections.push(current);
      }
      continue;
    }
    if (current) current.lines.push(lines[i]);
  }

  const questions = [];
  const seen = new Set();
  for (const section of sections) {
    // Drop page furniture: "[Page 7]", bare page numbers, and the running
    // section title that pdf.js emits between pages.
    const body = section.lines.filter((l) => {
      const t = l.trim();
      if (!t) return false;
      if (/^\[Page \d+\]$/.test(t)) return false;
      if (/^\d{1,3}$/.test(t)) return false;
      if (/^Paper [1-4] \(/.test(t)) return false;
      if (/\.{6,}\s*\d+\s*$/.test(t)) return false; // table-of-contents rows
      return true;
    });

    // Questions are numbered 1..n; a question runs until the next number.
    let buffer = null;
    const flush = () => {
      if (!buffer) return;
      const question = buffer.text.replace(/\s+/g, " ").trim();
      if (question.length > 25) {
        const id = `pyq-${section.year}-${section.month.toLowerCase()}-p${section.paper.toLowerCase()}-${String(buffer.number).padStart(2, "0")}`;
        if (!seen.has(id)) {
          seen.add(id);
          questions.push({
            id,
            session: `${section.month} ${section.year}`,
            year: section.year,
            paper: section.paper,
            number: buffer.number,
            marks: marksOf(question),
            kind: kindOf(question),
            question,
          });
        }
      }
      buffer = null;
    };

    for (const line of body) {
      const start = /^(\d{1,2})[.)]\s+(.*)$/.exec(line.trim());
      // A new question only if the number follows on from the last one, so a
      // numbered list inside an answer stem does not split the question.
      if (start && (!buffer || Number(start[1]) === buffer.number + 1 || Number(start[1]) === 1)) {
        flush();
        buffer = { number: Number(start[1]), text: start[2] };
      } else if (buffer) {
        buffer.text += ` ${line.trim()}`;
      }
    }
    flush();
  }
  return questions;
}

/* ------------------------------------------------------------------ */
/* 2. The topic-wise compilation, 2011-2022                            */
/* ------------------------------------------------------------------ */

const SUBJECT_HEADINGS = new Set([
  "MEDICINE", "SURGERY", "OBSTETRICS AND GYNAECOLOGY", "OBSTETRICS & GYNAECOLOGY",
  "PAEDIATRICS", "PEDIATRICS", "FAMILY MEDICINE AND COMMUNITY MEDICINE",
  "DERMATOLOGY", "PSYCHIATRY", "ORTHOPAEDICS", "OPHTHALMOLOGY", "ENT",
  "ANAESTHESIA", "RADIOLOGY", "EMERGENCY MEDICINE",
]);

/** Does this line read as a heading rather than part of a question? */
function looksLikeHeading(line) {
  if (!line || line.length > 60) return false;
  if (/[.?:;,]$/.test(line)) return false;
  if (/^\d/.test(line)) return false;
  if (/\[\d/.test(line)) return false;
  // Mark splits ("3+3+4") and tabbed mark columns mean this is a question tail,
  // not a heading.
  if (/\d\s*\+\s*\d/.test(line)) return false;
  if (/\t/.test(line)) return false;
  if (/\d\s*$/.test(line)) return false;
  // A question always contains a verb phrase; headings are noun phrases, so a
  // line opening with a question word or an instruction is not a heading.
  if (/^(what|how|why|when|which|write|describe|discuss|enumerate|mention|list|define|explain|a |an |the )/i.test(line))
    return false;
  return true;
}

function parseTopicwise(text) {
  const raw = text.split("\n").map((l) => l.trim());
  const session = new RegExp(`^(${MONTHS.join("|")})[ .]*((?:19|20)\\d{2})$`, "i");

  // The index at the top names every section ("A.Cardiology", "L. Toxicology"),
  // and those names reappear as bare headings in the body.
  const sectionNames = new Set();
  for (const line of raw) {
    const m = /^[A-Z][.)]\s*([A-Za-z][A-Za-z /&-]{2,39})$/.exec(line);
    if (m) sectionNames.add(m[1].trim().toLowerCase());
  }

  // The index also lists the subjects, as a row number, then the subject, then
  // its page range. Reading them from the document itself beats guessing, and
  // it is what makes a bare "Surgery" in the body recognisable as a heading.
  const subjectNames = new Set();
  {
    const head = raw.filter((l) => l.length > 0).slice(0, 200);
    for (let i = 0; i + 2 < head.length; i++) {
      if (!/^\d{1,2}$/.test(head[i])) continue;
      const name = head[i + 1];
      const pages = head[i + 2];
      if (/^[A-Za-z][A-Za-z &/-]{2,49}$/.test(name) && /^\d{1,3}(\s*-\s*\d{1,3})?$/.test(pages)) {
        subjectNames.add(name.trim().toLowerCase());
      }
    }
  }
  const isSubject = (line) =>
    SUBJECT_HEADINGS.has(line.toUpperCase()) || subjectNames.has(line.trim().toLowerCase());

  const lines = raw.filter((l) => l.length > 0);

  // Pass 1: where does each question start?
  const marks = [];
  for (let i = 0; i < lines.length; i++) {
    const s = session.exec(lines[i]);
    if (s) {
      const month = s[1][0].toUpperCase() + s[1].slice(1).toLowerCase();
      marks.push({ index: i, session: `${month} ${s[2]}`, year: Number(s[2]) });
    }
  }

  const entries = [];
  let counter = 0;

  for (let m = 0; m < marks.length; m++) {
    const start = marks[m].index + 1;
    const end = m + 1 < marks.length ? marks[m + 1].index : lines.length;

    // Trailing heading lines belong to the NEXT question, not this one.
    let stop = end;
    while (stop > start && looksLikeHeading(lines[stop - 1])) stop--;

    // The heading directly above a question is its topic. Anything further up
    // (the subject and organ-system headings) could not be recovered reliably
    // from the extracted text, so it is not recorded rather than guessed; the
    // app maps each question to its own subjects separately.
    let topicHeading = "";
    for (let i = marks[m].index - 1; i >= 0 && marks[m].index - i <= 6; i--) {
      const line = lines[i];
      if (!looksLikeHeading(line) && !isSubject(line)) break;
      if (isSubject(line)) continue;
      const bare = line.replace(/^[A-Z][.)]\s*/, "").trim();
      if (sectionNames.has(bare.toLowerCase())) continue;
      topicHeading = line;
      break;
    }
    // A run of questions under one topic only names it once.
    if (!topicHeading) topicHeading = entries[entries.length - 1]?.topicHeading ?? "";

    const question = lines.slice(start, stop).join(" ").replace(/\s+/g, " ").trim();
    if (question.length <= 25) continue;

    counter++;
    entries.push({
      id: `pyqtw-${String(counter).padStart(4, "0")}`,
      session: marks[m].session,
      year: marks[m].year,
      marks: marksOf(question),
      kind: kindOf(question),
      question,
      topicHeading,
    });
  }
  return entries;
}

/* ------------------------------------------------------------------ */
/* Write the generated modules                                         */
/* ------------------------------------------------------------------ */

const papersText = readFileSync(join(SRC, "DNB_FM_PYQ_2022-2025.txt"), "utf8");
const topicwiseText = readFileSync(join(SRC, "DNB_FM_PYQ_topicwise_2011-2022.txt"), "utf8");

const papers = parsePapers(papersText);
const topicwise = parseTopicwise(topicwiseText);

const banner = `/**
 * GENERATED by scripts/importPyq.mjs from the files in source-papers/.
 * Do not edit by hand: re-run the importer instead.
 */`;

writeFileSync(
  join(OUT, "papers.generated.ts"),
  `${banner}
import type { PaperId, TheoryQuestionKind } from "../lib/types";

export type SourceQuestion = {
  id: string;
  session: string;
  year: number;
  paper: PaperId;
  /** Its number in that paper. */
  number: number;
  marks: number;
  kind: TheoryQuestionKind;
  question: string;
};

export const PAPER_QUESTIONS: SourceQuestion[] = [
${papers
  .map(
    (q) =>
      `  { id: ${lit(q.id)}, session: ${lit(q.session)}, year: ${q.year}, paper: ${lit(q.paper)}, number: ${q.number}, marks: ${q.marks}, kind: ${lit(q.kind)}, question: ${lit(q.question)} },`,
  )
  .join("\n")}
];
`,
);

writeFileSync(
  join(OUT, "topicwise.generated.ts"),
  `${banner}
import type { TheoryQuestionKind } from "../lib/types";

export type TopicwiseQuestion = {
  id: string;
  session: string;
  year: number;
  marks: number;
  kind: TheoryQuestionKind;
  question: string;
  /** The heading the compilation filed it under, e.g. "Hypertension". */
  topicHeading: string;
};

export const TOPICWISE_QUESTIONS: TopicwiseQuestion[] = [
${topicwise
  .map(
    (q) =>
      `  { id: ${lit(q.id)}, session: ${lit(q.session)}, year: ${q.year}, marks: ${q.marks}, kind: ${lit(q.kind)}, question: ${lit(q.question)}, topicHeading: ${lit(q.topicHeading)} },`,
  )
  .join("\n")}
];
`,
);

// The full text of both documents, so they can be read inside the app exactly
// as they were written, without the learner having to import anything.
writeFileSync(
  join(OUT, "sourceText.generated.ts"),
  `${banner}
export const SOURCE_DOCUMENTS: {
  id: string;
  title: string;
  fileName: string;
  /** Where the original can be downloaded from, relative to the app. */
  originalPath: string;
  note: string;
  text: string;
}[] = [
  {
    id: "src-papers-2022-2025",
    title: "DNB Family Medicine — question papers 2022 to 2025",
    fileName: "DNB_FM_PYQ_2022-2025.pdf",
    originalPath: "source/DNB_FM_PYQ_2022-2025.pdf",
    note: "The papers as sat, June 2022 through June 2025, transcribed from the source PDF.",
    text: ${lit(papersText)},
  },
  {
    id: "src-topicwise-2011-2022",
    title: "DNB Family Medicine — topic-wise previous questions 2011 to 2022",
    fileName: "DNB_FM_PYQ_topicwise_2011-2022.docx",
    originalPath: "source/DNB_FM_PYQ_topicwise_2011-2022.docx",
    note: "Compiled by Dr Vishnu B S, Family Medicine Specialist, Trivandrum. Questions grouped by subject and topic.",
    text: ${lit(topicwiseText)},
  },
];
`,
);

const bySession = new Map();
for (const q of papers) bySession.set(q.session, (bySession.get(q.session) ?? 0) + 1);
const byYear = new Map();
for (const q of topicwise) byYear.set(q.year, (byYear.get(q.year) ?? 0) + 1);

console.log(`papers 2022-2025 : ${papers.length} questions across ${bySession.size} sittings`);
console.log(`topic-wise       : ${topicwise.length} questions across ${byYear.size} years`);
console.log(
  `topics named     : ${new Set(topicwise.map((q) => q.topicHeading).filter(Boolean)).size}`,
);
console.log(`source text      : ${papersText.length + topicwiseText.length} characters carried through`);
