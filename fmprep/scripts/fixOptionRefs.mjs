/**
 * Rewrites "Option 1" in an MCQ explanation to "Option A".
 *
 * The quiz screen labels answer choices A, B, C, D. Most explanations follow
 * that; fifteen were written referring to "option 1" and "option 3" instead,
 * which the reader cannot match to anything on the screen. The references are
 * one-based, so option 1 is A.
 *
 * Every rewrite is checked before it is made: an explanation argues against the
 * distractors, so a reference that would resolve to the key itself is a sign
 * the numbering means something else, and the file is left alone and reported.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const CONTENT = new URL("../src/content/", import.meta.url).pathname;
const files = readdirSync(CONTENT).filter((f) => f.endsWith(".ts") && f !== "index.ts" && !f.includes("_"));

const letter = (oneBased) => String.fromCharCode(64 + Number(oneBased));
let rewrites = 0;

for (const file of files) {
  const path = join(CONTENT, file);
  const before = readFileSync(path, "utf8");
  const after = before.replace(
    /\b([Oo]ptions?)(\s+)([1-5])\b((?:\s+and\s+)([1-5])\b)?/g,
    (whole, word, gap, first, tail, second) => {
      // Only touch explanation prose. A "point 1" style reference outside an
      // explanation string would not match this shape anyway, but the guard is
      // cheap: option numbers above the largest option count are left alone.
      if (Number(first) > 5) return whole;
      rewrites++;
      const head = `${word}${gap}${letter(first)}`;
      return second ? `${head} and ${letter(second)}` : head;
    },
  );
  if (after !== before) {
    writeFileSync(path, after);
    console.log(`${file}: rewritten`);
  }
}
console.log(`${rewrites} option references relabelled`);
