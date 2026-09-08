/**
 * Did the rewrite drop anything?
 *
 * Splitting a paragraph into points should lose no fact, but "split" and
 * "summarise" look identical from the outside. Numbers are the part that cannot
 * be paraphrased away, so this extracts every quantity from a subject file
 * before and after and reports the ones that vanished. A dropped "50 mg/kg" is
 * a dropped fact.
 */
import { execSync } from "node:child_process";

const subject = process.argv[2];
const base = process.argv[3];
const QTY = /\b\d[\d.,]*\s*(?:mg\/kg\/day|mcg\/kg\/min|mg\/kg|mcg\/kg|mg\/dL|g\/dL|mmol\/L|mEq\/L|mL\/min|mg\/day|IU|units?|mg|mcg|micrograms?|mL|kg|mmHg|cmH2O|%|weeks?|days?|hours?|months?|years?)\b/gi;

const read = (rev) =>
  execSync(`git -C /home/user/-elixir show ${rev}:fmprep/src/content/${subject}.ts`, {
    encoding: "utf8", maxBuffer: 64 * 1024 * 1024,
  });

/**
 * Units the library spells more than one way. Without this the check reports a
 * fact as lost when the rewrite merely wrote "microgram" where the original
 * wrote "mcg" - which is a spelling change, not a dropped dose.
 */
const SAME = [
  [/\bmicrograms?\b/g, "mcg"],
  [/\bmilligrams?\b/g, "mg"],
  [/\bgrams?\b/g, "g"],
  [/\bmillilitres?\b/g, "ml"],
  [/\bper cent\b/g, "%"],
  [/\bpercent\b/g, "%"],
  [/\byrs?\b/g, "years"],
  [/\bhrs?\b/g, "hours"],
  [/\bmins?\b/g, "minutes"],
  [/\bwks?\b/g, "weeks"],
  [/\bmonth\b/g, "months"],
  [/\bweek\b/g, "weeks"],
  [/\bday\b/g, "days"],
  [/\byear\b/g, "years"],
  [/\bhour\b/g, "hours"],
  [/\bunit\b/g, "units"],
];

const bag = (src) => {
  const m = new Map();
  for (const q of src.match(QTY) ?? []) {
    let k = q.replace(/\s+/g, " ").toLowerCase().trim();
    for (const [re, to] of SAME) k = k.replace(re, to);
    k = k.replace(/\s+/g, "");
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  return m;
};

const before = bag(read(base));
const after = bag(read("HEAD"));
// A quantity that is gone entirely is a lost fact. A quantity that merely
// appears fewer times is usually a rephrasing - "aged 70 years" becoming
// "over 70" - so the two are reported apart rather than lumped together.
const gone = [];
const fewer = [];
for (const [k, n] of before) {
  const now = after.get(k) ?? 0;
  if (now === 0) gone.push(`${k}  (was x${n})`);
  else if (now < n) fewer.push(`${k}  x${n} -> x${now}`);
}
const gained = [...after].filter(([k]) => !before.has(k)).length;
console.log(`${subject}: ${before.size} distinct quantities before, ${after.size} after`);
console.log(`  added: ${gained}   thinned: ${fewer.length}   GONE: ${gone.length}`);
if (gone.length) console.log("  GONE ENTIRELY:\n    " + gone.join("\n    "));
process.exitCode = gone.length ? 1 : 0;
