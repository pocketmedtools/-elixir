/**
 * The questions the library cannot answer.
 *
 * A question is a gap when neither the hand-made map nor the keyword matcher
 * finds a topic for it. Printed as a to-do list for the library, not as a
 * failure: the honest answer to an unanswerable question is silence.
 */
import { ensureAll } from "../src/content/index";
import { PAPER_QUESTIONS } from "../src/pyq/papers.generated";
import { TOPICWISE_QUESTIONS } from "../src/pyq/topicwise.generated";
import { linksFor } from "../src/pyq/link";

await ensureAll();

const gaps: string[] = [];
let mapped = 0;
for (const q of PAPER_QUESTIONS) {
  if (linksFor(q.id, q.question).length > 0) mapped++;
  else gaps.push(`${q.id}  [${q.session} P${q.paper} Q${q.number}] ${q.question}`);
}
console.log(`papers ${mapped}/${PAPER_QUESTIONS.length}`);

let mapped2 = 0;
for (const q of TOPICWISE_QUESTIONS) {
  if (linksFor(q.id, q.question).length > 0) mapped2++;
  else gaps.push(`${q.id}  [${q.session}] ${q.topicHeading} — ${q.question}`);
}
console.log(`topic-wise ${mapped2}/${TOPICWISE_QUESTIONS.length}`);
console.log(`\n--- ${gaps.length} unanswered ---`);
for (const g of gaps) console.log(g);
