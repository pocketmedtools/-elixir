import { ensureAll, topicIndex } from "./src/content/index";
import { linksFor } from "./src/pyq/link";
import { MANUAL_LINKS } from "./src/pyq/links";
import { PAPER_QUESTIONS } from "./src/pyq/papers.generated";
import { TOPICWISE_QUESTIONS } from "./src/pyq/topicwise.generated";
async function main() {
  await ensureAll();
  let a = 0; for (const q of PAPER_QUESTIONS) if (linksFor(q.id, q.question).length) a++;
  let b = 0; for (const q of TOPICWISE_QUESTIONS) if (linksFor(q.id, q.question).length) b++;
  const all = PAPER_QUESTIONS.length + TOPICWISE_QUESTIONS.length;
  console.log(`papers ${a}/${PAPER_QUESTIONS.length}, topic-wise ${b}/${TOPICWISE_QUESTIONS.length}, overall ${a + b}/${all} = ${Math.round(((a + b) / all) * 100)}%`);
  const real = topicIndex();
  const bad = Object.entries(MANUAL_LINKS).flatMap(([k, v]) => v.filter((x) => !real.has(x)).map((x) => `${k} -> ${x}`));
  console.log("hand-mapped questions:", Object.keys(MANUAL_LINKS).length, "| invalid ids:", bad.length, bad.slice(0, 5));
}
main();
