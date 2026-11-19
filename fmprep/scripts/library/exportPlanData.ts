/* Exports the previous-year questions and every topic already in the app, for
   planning which new library topics to write first. */
import { writeFileSync } from "node:fs";
import { PAPER_QUESTIONS, TOPICWISE_QUESTIONS } from "../../src/pyq";
import { ensureAll, subjects } from "../../src/content";

const out = "scripts/library/plan";
writeFileSync(`${out}/pyq.json`, JSON.stringify({
  papers: PAPER_QUESTIONS.map((q) => ({ id: q.id, year: q.year, paper: q.paper, marks: q.marks, q: q.question })),
  topicwise: TOPICWISE_QUESTIONS.map((q) => ({ id: q.id, year: q.year, heading: q.topicHeading, q: q.question })),
}, null, 0));
const rows: { subject: string; id: string; title: string }[] = [];
await ensureAll();
for (const sub of subjects()) for (const t of sub.topics) rows.push({ subject: sub.id, id: t.id, title: t.title });
writeFileSync(`${out}/existing.json`, JSON.stringify(rows, null, 0));
console.log(PAPER_QUESTIONS.length, "paper questions;", TOPICWISE_QUESTIONS.length, "topic-wise;", rows.length, "existing topics");
