/**
 * Is every marked thing one colour, and is every measurement whole?
 *
 * Colour here is a claim about meaning: deep green says "this is a measured
 * value", violet "this is a name to attach", carmine "this line decides
 * management". Two faults break that claim, and neither shows up in a contrast
 * check because every individual colour is correct.
 *
 *   A split value. The quantity pattern once matched only the second half of a
 *   pair, so "20/10 mmHg" rendered as loose text "20/" beside a coloured
 *   "10 mmHg" - the systolic and the diastolic in different colours, as though
 *   they were different kinds of fact.
 *
 *   A split phrase. A marked run holding more than one colour reads as two
 *   facts rather than one.
 *
 * This walks real topics and fails on either.
 *
 *   node scripts/marks.mjs
 */
import { chromium } from "playwright";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.MARKS_BASE ?? "http://127.0.0.1:5174";
const root = process.env.PLAYWRIGHT_BROWSERS_PATH ?? "/opt/pw-browsers";
const d = readdirSync(root).find((x) => x.startsWith("chromium-"));
const exe = d && existsSync(join(root, d, "chrome-linux", "chrome")) ? join(root, d, "chrome-linux", "chrome") : undefined;

const AUDIT = () => {
  const bad = [];
  // A value cut in half: a quantity whose immediate neighbour is the rest of
  // the same number - a trailing "115/" before it, or a bare "/75" after.
  for (const n of document.querySelectorAll("b.num")) {
    const before = (n.previousSibling && n.previousSibling.textContent) || "";
    const after = (n.nextSibling && n.nextSibling.textContent) || "";
    if (/[\d.,]\s*\/\s*$/.test(before))
      bad.push({ kind: "split value", text: (before.slice(-12) + "|" + n.textContent).trim() });
    if (/^\s*\/\s*[\d.,]/.test(after))
      bad.push({ kind: "split value", text: (n.textContent + "|" + after.slice(0, 12)).trim() });
  }
  // A marked run holding more than one text colour.
  for (const m of document.querySelectorAll("mark.hl")) {
    const seen = new Set([getComputedStyle(m).color]);
    for (const c of m.querySelectorAll("*")) {
      const r = c.getBoundingClientRect();
      if (r.width > 0 && c.textContent.trim()) seen.add(getComputedStyle(c).color);
    }
    if (seen.size > 1) bad.push({ kind: "split phrase", text: m.textContent.trim().slice(0, 70) });
  }
  const counts = {
    value: document.querySelectorAll("mark.hl-value").length,
    name: document.querySelectorAll("mark.hl-name").length,
    key: document.querySelectorAll("mark.hl-key").length,
    num: document.querySelectorAll("b.num").length,
  };
  return { bad, counts };
};

const browser = await chromium.launch({ executablePath: exe });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const faults = [];
const totals = { value: 0, name: 0, key: 0, num: 0 };
// Subjects whose topics are thick with paired values and doses.
for (const subject of ["Cardiovascular", "Obstetrics", "Endocrine", "Pediatrics"]) {
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const chip = page.getByRole("button", { name: new RegExp(subject, "i") }).first();
  if (!(await chip.count())) continue;
  await chip.click();
  await page.waitForTimeout(600);
  // Topic rows carry their whole opening paragraph, so they are the long
  // buttons; the quiz shortcut at the top is short and must not be followed.
  const topics = page.locator("button").filter({ hasText: /.{80,}/ });
  const n = Math.min(4, await topics.count());
  for (let i = 0; i < n; i++) {
    await topics.nth(i).click().catch(() => {});
    await page.waitForTimeout(700);
    const r = await page.evaluate(AUDIT);
    for (const k of Object.keys(totals)) totals[k] += r.counts[k];
    for (const b of r.bad) faults.push({ ...b, where: `${subject} topic ${i + 1}` });
    await page.goBack().catch(() => {});
    await page.waitForTimeout(400);
  }
}
await browser.close();

console.log(`marked runs seen: ${totals.value} value, ${totals.name} name, ${totals.key} key; ${totals.num} quantities`);
if (faults.length) {
  const uniq = [...new Map(faults.map((f) => [f.kind + f.text, f])).values()];
  console.log(`\n${uniq.length} faults`);
  for (const f of uniq.slice(0, 25)) console.log(`  ${f.kind.padEnd(12)} ${f.where.padEnd(22)} ${JSON.stringify(f.text)}`);
} else {
  console.log("\nno value split across colours, no marked run holding two colours");
}
process.exitCode = faults.length ? 1 : 0;
