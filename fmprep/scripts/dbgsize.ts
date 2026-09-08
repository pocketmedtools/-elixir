import { ensureAll, subjects } from "../src/content/index";
import { PAPER_QUESTIONS } from "../src/pyq/papers.generated";
import { TOPICWISE_QUESTIONS } from "../src/pyq/topicwise.generated";
await ensureAll();
const all = subjects();
const j = JSON.stringify(all);
console.log("subjects+topics JSON:", (j.length / 1048576).toFixed(2), "MB");
console.log("pyq JSON:", ((JSON.stringify(PAPER_QUESTIONS).length + JSON.stringify(TOPICWISE_QUESTIONS).length) / 1048576).toFixed(2), "MB");
