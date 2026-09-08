/**
 * Packs the whole library into one self-contained HTML page.
 *
 * The real app code-splits per subject and keeps documents in IndexedDB, which
 * needs a server and a browser cache. This is the same content in a single
 * file that can be opened from anywhere: every topic, every model answer, every
 * question with its explanation, every flashcard, and all 1055 past questions
 * already linked to the topics that answer them. What it cannot carry is the
 * document importer (it needs pdf.js and mammoth) and the offline service
 * worker.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { ensureAll, subjects } from "../src/content/index";
import { PAPER_QUESTIONS } from "../src/pyq/papers.generated";
import { TOPICWISE_QUESTIONS } from "../src/pyq/topicwise.generated";
import { linksFor } from "../src/pyq/link";

await ensureAll();
const S = subjects();

// Fields the page reads, with the optional ones defaulted so the renderer never
// has to guard. Nothing is dropped: this is the library, not a sample of it.
const packed = S.map((s) => ({
  id: s.id,
  title: s.title,
  blurb: s.blurb,
  papers: s.papers,
  group: (s as unknown as { group?: string }).group ?? "Subjects",
  cases: s.cases ?? [],
  topics: s.topics.map((t) => ({
    id: t.id,
    title: t.title,
    oneLiner: t.oneLiner,
    frequency: t.frequency,
    keywords: t.keywords,
    sections: t.sections,
    tables: t.tables ?? [],
    redFlags: t.redFlags,
    pearls: t.pearls,
    references: t.references,
    mcqs: t.mcqs,
    cards: t.cards,
    theory: (t.theory ?? []).map((q) => ({
      ...q,
      mustDraw: q.mustDraw ?? [],
      markSplit: q.markSplit ?? [],
    })),
  })),
}));

// Links are resolved here rather than in the page, so the page carries no
// matcher and no keyword index.
const links: Record<string, string[]> = {};
for (const q of [...PAPER_QUESTIONS, ...TOPICWISE_QUESTIONS]) {
  const hit = linksFor(q.id, q.question, 3).map((l) => l.topicId);
  if (hit.length) links[q.id] = hit;
}

const allCards = packed.flatMap((s) =>
  s.topics.flatMap((t) => t.cards.map((c) => ({ ...c, topicId: t.id, subjectId: s.id, subjectTitle: s.title }))),
);

const count = (f: (t: (typeof packed)[number]["topics"][number]) => number) =>
  packed.reduce((n, s) => n + s.topics.reduce((m, t) => m + f(t), 0), 0);

const data = {
  meta: {
    topics: count(() => 1),
    mcqs: count((t) => t.mcqs.length),
    cards: count((t) => t.cards.length),
    theory: count((t) => t.theory.length),
    cases: packed.reduce((n, s) => n + s.cases.length, 0),
    paperQuestions: PAPER_QUESTIONS.length,
    topicwiseQuestions: TOPICWISE_QUESTIONS.length,
    pastQuestions: PAPER_QUESTIONS.length + TOPICWISE_QUESTIONS.length,
  },
  subjects: packed,
  allCards,
  pyq: {
    papers: PAPER_QUESTIONS.map((q) => ({
      id: q.id, question: q.question, paper: q.paper, session: q.session, marks: q.marks,
    })),
    topicwise: TOPICWISE_QUESTIONS.map((q) => ({
      id: q.id, question: q.question, session: q.session, marks: q.marks, topicHeading: q.topicHeading,
    })),
    links,
  },
};

// The JSON sits in a <script type="application/json">, so the only sequence
// that could end it early is a literal </script.
const json = JSON.stringify(data).replace(/<\/script/gi, "<\\/script");
const template = readFileSync("scripts/singlefile.template.html", "utf8");
const html = template.replace("/*__DATA__*/", json);

writeFileSync("dist-single/fm-prep.html", html);
console.log(
  `fm-prep.html  ${(html.length / 1048576).toFixed(2)} MB  ` +
    `(${data.meta.topics} topics, ${data.meta.mcqs} mcqs, ${data.meta.cards} cards, ` +
    `${data.meta.pastQuestions} past questions, ${Object.keys(links).length} linked)`,
);
