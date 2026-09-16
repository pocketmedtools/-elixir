/**
 * Apply a batch of point rewrites to a content file, refusing anything that
 * would leave it worse.
 *
 *   npm run apply src/content/cardiovascular.ts rewrites.json
 *
 * rewrites.json is an array of {old, new}. Every `old` must occur exactly
 * once in the file as a JS string literal's contents. Each `new` must be
 * ASCII, keep `**` balanced with exactly one bold run, end in a bracketed
 * source, be 170 characters or under, and keep every numeric token the old
 * text had. The whole batch is applied only if every entry passes and the
 * file still imports afterwards; otherwise nothing is written and the reasons
 * are printed. The point is that an agent cannot half-apply a batch.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const [file, batch] = process.argv.slice(2);
if (!file || !batch) { console.error("usage: apply <content file> <rewrites.json>"); process.exit(2); }

type R = { old: string; new: string };
const rows: R[] = JSON.parse(readFileSync(batch, "utf8"));
let src = readFileSync(file, "utf8");
const before = src;

const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const nums = (s: string) => (s.match(/\d[\d.,]*/g) ?? []).map((n) => n.replace(/[.,]$/, ""));
const problems: string[] = [];

rows.forEach((r, i) => {
  const tag = `#${i} ${r.old.slice(0, 50)}...`;
  const oldLit = esc(r.old);
  const n = src.split(oldLit).length - 1;
  if (n !== 1) { problems.push(`${tag}: old text occurs ${n} times, need exactly 1`); return; }
  const t = r.new;
  if (/[^\x00-\x7F]/.test(t)) problems.push(`${tag}: non-ASCII in new text`);
  const bold = (t.match(/\*\*/g) ?? []).length;
  if (bold !== 2) problems.push(`${tag}: ${bold / 2} bold runs, need exactly 1`);
  if (!/\[[^\]]{2,60}\]\s*$/.test(t)) problems.push(`${tag}: does not end in [source]`);
  if (t.length > 170) problems.push(`${tag}: ${t.length} chars, limit 170`);
  const lost = nums(r.old).filter((x) => !t.includes(x));
  if (lost.length) problems.push(`${tag}: numbers lost: ${lost.join(", ")}`);
  src = src.replace(oldLit, esc(t));
});

if (problems.length) {
  console.error(`refused: ${problems.length} problem(s), nothing written\n` + problems.join("\n"));
  process.exit(1);
}
writeFileSync(file, src);
try {
  execFileSync("npx", ["tsx", "-e", "import('./src/content/index.ts').then(async m=>{await m.ensureAll()})"], { stdio: "pipe", timeout: 600_000 });
} catch (e) {
  writeFileSync(file, before);
  console.error("refused: file no longer imports after the batch; reverted\n" + String((e as any).stderr ?? e).slice(0, 1500));
  process.exit(1);
}
console.log(`applied ${rows.length} rewrites to ${file}; file imports`);
