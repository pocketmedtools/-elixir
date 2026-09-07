import { ensureAll, topicIndex } from "../src/content/index";
import { linkTopics } from "../src/pyq/link";
await ensureAll();
console.log("has topic:", topicIndex().has("surgery-office-procedural-sedation-ketamine"));
const q = "Describe the indications and use of ketamine anaesthesia. What are the common complication and how can they be prevented or managed?";
console.log(linkTopics(q, 3));
