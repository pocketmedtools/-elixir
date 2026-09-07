/**
 * Folds finished topics from `pending/` into their subject files.
 *
 * Topics are written by separate authors into standalone modules so that no
 * two of them ever edit the same 400 KB subject file at once. Each pending
 * module holds exactly one `topics.push({...});` block; this lifts that block
 * out verbatim and inserts it immediately before the subject's
 * `const cases: ClinicalCase[]` line, which is where the authoring protocol
 * says new topics go.
 *
 * Run with a topic id to merge one, or with no arguments to merge everything
 * that is ready. Merged files are deleted so the directory is also the queue.
 */
import { readdirSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const PENDING = join(ROOT, "pending");
const CONTENT = join(ROOT, "src", "content");

/** The subject a topic belongs to is the longest subject id its id starts with. */
const SUBJECT_IDS = readdirSync(CONTENT)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts" && !f.includes("_"))
  .map((f) => f.replace(/\.ts$/, ""))
  .sort((a, b) => b.length - a.length);

function subjectFor(topicId) {
  const hit = SUBJECT_IDS.find((s) => topicId.startsWith(`${s}-`));
  if (!hit) throw new Error(`${topicId}: no subject file matches this id`);
  return hit;
}

/**
 * A topic still being written must not be merged. An author writes the file in
 * one pass, but the write and the notification that it is finished are not the
 * same moment, so a merge run in between picks up a real, parseable, half-built
 * topic — one was merged at 20 KB with no references and had to be backed out
 * of its subject file by hand. These are the fields a finished topic always
 * has; a file missing any of them is left in place for the next run.
 */
function looksFinished(block) {
  const missing = [];
  for (const field of ["references:", "mcqs:", "cards:", "sections:", "pearls:", "redFlags:"]) {
    if (!block.includes(field)) missing.push(field.slice(0, -1));
  }
  // A topic is tens of kilobytes; anything much smaller is a fragment.
  if (block.length < 20000) missing.push(`only ${block.length} bytes`);
  return missing;
}

/** The push block, verbatim, from the first `topics.push({` to its closing `});`. */
function extractBlock(source, file) {
  const start = source.indexOf("\ntopics.push({");
  if (start < 0) throw new Error(`${file}: no top-level topics.push({ found`);
  const end = source.indexOf("\n});", start);
  if (end < 0) throw new Error(`${file}: the topics.push block is not closed at column 0`);
  const block = source.slice(start + 1, end + 4);
  if (source.indexOf("\ntopics.push({", end) >= 0) {
    throw new Error(`${file}: more than one topic in the file`);
  }
  return block;
}

const only = process.argv[2];
const files = readdirSync(PENDING)
  .filter((f) => f.endsWith(".ts"))
  .filter((f) => !only || f === `${only}.ts`);

if (files.length === 0) {
  console.log(only ? `nothing pending for ${only}` : "nothing pending");
  process.exit(0);
}

for (const file of files) {
  const topicId = file.replace(/\.ts$/, "");
  const source = readFileSync(join(PENDING, file), "utf8");
  const block = extractBlock(source, file);

  const declared = block.match(/^\s*id: "([^"]+)"/m)?.[1];
  if (declared !== topicId) {
    throw new Error(`${file}: declares id "${declared}" but is named for "${topicId}"`);
  }

  const unfinished = looksFinished(block);
  if (unfinished.length > 0) {
    console.log(`wait  ${topicId} — still being written (${unfinished.join(", ")})`);
    continue;
  }

  const subject = subjectFor(topicId);
  const target = join(CONTENT, `${subject}.ts`);
  const existing = readFileSync(target, "utf8");
  if (existing.includes(`\n  id: "${topicId}",`)) {
    console.log(`skip  ${topicId} — already in ${subject}.ts`);
    unlinkSync(join(PENDING, file));
    continue;
  }

  const anchor = existing.indexOf("\nconst cases: ClinicalCase[]");
  if (anchor < 0) throw new Error(`${subject}.ts: no "const cases: ClinicalCase[]" to insert before`);
  writeFileSync(target, `${existing.slice(0, anchor + 1)}${block}\n${existing.slice(anchor + 1)}`);
  unlinkSync(join(PENDING, file));
  console.log(`merge ${topicId} → ${subject}.ts (${block.length} bytes)`);
}
