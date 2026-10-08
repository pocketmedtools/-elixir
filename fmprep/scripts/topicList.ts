/** Print the topic ids and titles of one subject: npx tsx scripts/topicList.ts <subject-id> */
import { ensureSubject } from "../src/content/index";
const s = await ensureSubject(process.argv[2]);
if (!s) { console.error("no such subject"); process.exit(1); }
for (const t of s.topics) console.log(`${t.id}\t${t.title}`);
