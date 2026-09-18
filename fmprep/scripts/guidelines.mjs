/**
 * Which citations are due a re-check, and why "0 stale" is not "current".
 *
 * `npm run stale` reads the YEAR INSIDE a citation tag and compares it to a
 * ten-year bar. That is a rot check, and it passes 39,573 of 39,573 points. It
 * says nothing at all about whether the claim still matches what the cited
 * guideline says, because it never reads the guideline. A point tagged
 * [ADA 2025] passes whether or not ADA 2025 said it, and whether or not ADA
 * 2026 has since changed the number.
 *
 * This is the honest version of that question, and it is deliberately modest:
 * it cannot tell you what changed, only what CANNOT be assumed unchanged. A
 * body that reissues on a fixed cycle - ADA every January, GINA and GOLD every
 * year, the ESC portfolio annually - has by definition published since any tag
 * older than this year, so every one of those points is due a look. A textbook
 * edition is listed with its year so a human can check whether a later edition
 * exists.
 *
 *   npm run guidelines            # the whole surface, worst first
 *   npm run guidelines -- --body ADA
 *
 * Nothing here reaches the network. Establishing what actually changed needs
 * the primary document, and in this environment every guideline publisher and
 * every Indian government domain is unreachable, so that step cannot be done
 * here at all.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const THIS_YEAR = new Date().getFullYear();
const DIR = new URL("../src/content/", import.meta.url).pathname;

/** Bodies that reissue on a fixed cycle. */
const CYCLE =
  /^(ADA|GINA|GOLD|ESC|ESC\/ERS|ESC\/EACTS|ESC\/ESH|AHA|AHA\/ACC|AHA\/ASA|ACC\/AHA|KDIGO|NICE|IDSA|ATS|ERS|ERC|ILCOR|WHO|UNAIDS|IAP|NTEP|NACO|NCVBDC|NLEP|MoHFW|NHM|FOGSI|RSSDI|ICMR|RCOG|ACOG|NBEMS)\b/;
const EDITION = /\b(\d{1,2})e\b/;
const TAG = /\[([A-Za-z][^\][]{1,60}?\s(?:19|20)\d{2}[a-z]?)\]/g;

/** Editions checked against the publisher's own document, on disk, by hand.
 *  A tag on this list is still listed below as due a look when older than the
 *  current year, because the check covered the recommendations named, not
 *  every point; it is printed so the reader knows how far the audit reached. */
const VERIFIED = [
  "GOLD 2026  - Pocket Guide v1.1: figures 2.10-2.13, 3.8-3.10 read as pages (no text layer)",
  "GINA 2026  - Summary Guide: Track 1/2, Table 7 AIR/MART doses, exacerbation steroids",
  "ADA 2026   - Standards of Care: recs 2 (screening), 9.5-9.12, 10.3-10.4, 10.18-10.24, 12.5, 13 (older adults)",
];

const want = process.argv.includes("--body")
  ? process.argv[process.argv.indexOf("--body") + 1]?.toUpperCase()
  : null;

const uses = new Map();
for (const f of readdirSync(DIR).filter((n) => n.endsWith(".ts"))) {
  const text = readFileSync(join(DIR, f), "utf8");
  for (const m of text.matchAll(TAG)) {
    const tag = m[1].trim();
    const at = uses.get(tag) ?? { n: 0, files: new Set() };
    at.n += 1;
    at.files.add(f.replace(/\.ts$/, ""));
    uses.set(tag, at);
  }
}

const cycle = [];
const books = [];
for (const [tag, at] of uses) {
  const y = tag.match(/(19|20)\d{2}/);
  if (!y) continue;
  const year = Number(y[0]);
  const row = { tag, year, n: at.n, files: [...at.files].sort() };
  if (EDITION.test(tag)) books.push(row);
  else if (CYCLE.test(tag) && year < THIS_YEAR) cycle.push(row);
}
const pick = (rows) => (want ? rows.filter((r) => r.tag.toUpperCase().startsWith(want)) : rows);
const byUse = (a, b) => b.n - a.n || a.tag.localeCompare(b.tag);

const C = pick(cycle).sort(byUse);
const B = pick(books).sort(byUse);
const total = [...uses.values()].reduce((s, a) => s + a.n, 0);
const due = C.reduce((s, r) => s + r.n, 0);

console.log("\nChecked against the publisher's document (see scripts/guidelines.mjs):");
for (const v of VERIFIED) console.log("  " + v);
console.log(`\n${due.toLocaleString()} of ${total.toLocaleString()} cited points name a body that has`);
console.log(`reissued since the tag was written - ${((due / total) * 100).toFixed(1)} per cent of the library.`);
console.log(`${C.length} distinct editions, from ${Math.min(...C.map((r) => r.year))} to ${THIS_YEAR - 1}.\n`);

console.log("  points  edition                       subjects");
for (const r of C.slice(0, 30)) {
  const where = r.files.length > 3 ? `${r.files.length} subjects` : r.files.join(", ");
  console.log(`  ${String(r.n).padStart(6)}  ${r.tag.padEnd(28)}  ${where}`);
}
if (C.length > 30) console.log(`  ${String(C.length - 30).padStart(6)}  more editions not shown`);

console.log(`\n${B.reduce((s, r) => s + r.n, 0).toLocaleString()} points cite a textbook edition:\n`);
for (const r of B.slice(0, 12)) console.log(`  ${String(r.n).padStart(6)}  ${r.tag}`);

console.log(`
This is a list of what to CHECK, not a list of errors. It cannot tell you
whether a number changed - that needs the primary document, and no guideline
publisher is reachable from this environment. Do not treat an entry here as
wrong, and do not treat its absence as verified.
`);
