/**
 * Pulls the checkable claims out of the library, one compact file per subject.
 *
 * A reviewer cannot read a 400 KB subject file — one read would spend most of
 * an agent's budget before it had checked anything. Almost none of that file is
 * reviewable in the sense that matters: what a doctor must verify is the
 * numbers (doses, cut-offs, intervals, thresholds) and whether each MCQ key
 * agrees with its own explanation. This writes exactly that, and nothing else,
 * to review/<subject>.md.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { ensureAll, subjects } from "../src/content/index";
import type { Topic } from "../src/lib/types";

/**
 * A line worth a reviewer's eye: it carries a dose, a threshold, an interval or
 * a percentage. Plain prose is skipped — this is a numbers review.
 */
const NUMERIC =
  /\b\d[\d.,]*\s*(mg|mcg|microgram|micrograms|g\b|gram|kg|mL|ml|litre|L\b|IU\b|units?|mmol|mEq|mmHg|cmH2O|kPa|mg\/kg|mg\/dL|mg\/dl|g\/dL|g\/dl|%|degrees|hours?|days?|weeks?|months?|years?|minutes?|per\s+1000|per\s+100000|per\s+cent)/i;
const RATIO = /\b\d+\s*[:/]\s*\d+\b|\b\d+\s*(?:to|-|–)\s*\d+\s*(mg|mcg|mL|ml|%|mmHg|days?|weeks?|hours?)/i;

function numericLines(topic: Topic): string[] {
  const out: string[] = [];
  const take = (where: string, line: string) => {
    if (NUMERIC.test(line) || RATIO.test(line)) out.push(`- [${where}] ${line}`);
  };
  for (const s of topic.sections) for (const p of s.points) take(s.heading, p);
  for (const t of topic.tables ?? []) {
    for (const row of t.rows) take(t.heading, row.join(" | "));
  }
  for (const f of topic.redFlags) take("red flag", f);
  for (const p of topic.pearls) take("pearl", p);
  for (const q of topic.theory ?? []) {
    for (const s of q.answer) for (const p of s.points) take(`theory ${q.id} / ${s.heading}`, p);
  }
  return out;
}

await ensureAll();
mkdirSync("review", { recursive: true });

let mcqTotal = 0;
let numericTotal = 0;

for (const subject of subjects()) {
  const parts: string[] = [
    `# ${subject.title} — claims to check`,
    "",
    "Extracted by `npm run digest`. Two kinds of claim only: every MCQ with its",
    "key and explanation, and every line carrying a number. Everything else in",
    "the subject file is prose a reviewer does not need to see.",
    "",
  ];

  parts.push("## MCQs — does the key agree with the explanation?", "");
  for (const topic of subject.topics) {
    if (topic.mcqs.length === 0) continue;
    parts.push(`### ${topic.title}  \`${topic.id}\``, "");
    for (const q of topic.mcqs) {
      mcqTotal++;
      parts.push(`**${q.id}** (${q.difficulty})`);
      parts.push(`Q: ${q.stem}`);
      q.options.forEach((o, i) => {
        parts.push(`  ${i === q.answer ? "KEY >" : "     "} ${i}. ${o}`);
      });
      parts.push(`Explanation: ${q.explanation}`, "");
    }
  }

  parts.push("## Numbers — doses, cut-offs, thresholds, intervals", "");
  for (const topic of subject.topics) {
    const lines = numericLines(topic);
    if (lines.length === 0) continue;
    numericTotal += lines.length;
    parts.push(`### ${topic.title}  \`${topic.id}\``, "", ...lines, "");
  }

  const path = `review/${subject.id}.md`;
  writeFileSync(path, `${parts.join("\n")}\n`);
  console.log(
    `${path}  ${subject.topics.length} topics, ${subject.topics.reduce((n, t) => n + t.mcqs.length, 0)} mcqs`,
  );
}

console.log(`\n${mcqTotal} MCQs and ${numericTotal} numeric claims written to review/`);
