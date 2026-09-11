/**
 * How big is the type actually rendered, and how much air is between the lines?
 *
 * A type scale written in Tailwind classes is spread across forty components,
 * so the only honest way to see it is to measure the rendered page. This walks
 * the topic reader at phone width and reports every distinct font size in use,
 * how much text sits at each, and the gaps between consecutive points in a
 * list - the number that decides whether a page of one-fact points reads as
 * separate facts or as a wall.
 *
 *   node scripts/typescale.mjs            # against the built app on :5174
 *   TYPE_BASE=file:///...html node scripts/typescale.mjs
 */
import { chromium } from "playwright";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.TYPE_BASE ?? "http://127.0.0.1:5174";
const root = process.env.PLAYWRIGHT_BROWSERS_PATH ?? "/opt/pw-browsers";
const d = readdirSync(root).find((x) => x.startsWith("chromium-"));
const exe = d && existsSync(join(root, d, "chrome-linux", "chrome")) ? join(root, d, "chrome-linux", "chrome") : undefined;

const MEASURE = () => {
  const out = { sizes: {}, gaps: [], measures: [] };
  for (const el of document.querySelectorAll("body *")) {
    const own = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join(" ").trim();
    if (!own) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") continue;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) continue;
    const px = Math.round(parseFloat(cs.fontSize) * 10) / 10;
    const lh = cs.lineHeight === "normal" ? null : Math.round((parseFloat(cs.lineHeight) / px) * 100) / 100;
    const k = `${px}px`;
    out.sizes[k] = out.sizes[k] || { chars: 0, nodes: 0, leading: {} };
    out.sizes[k].chars += own.length;
    out.sizes[k].nodes += 1;
    if (lh) out.sizes[k].leading[lh] = (out.sizes[k].leading[lh] || 0) + 1;
    // Line length in characters, for prose only.
    if (own.length > 80) out.measures.push(Math.round(own.length / Math.max(1, Math.round(r.height / (px * (lh || 1.5))))));
  }
  // Air between consecutive points in every bullet list on the page.
  for (const list of document.querySelectorAll("ul, ol")) {
    const items = [...list.children].filter((c) => c.getBoundingClientRect().height > 4);
    for (let i = 1; i < items.length; i++) {
      const a = items[i - 1].getBoundingClientRect(), b = items[i].getBoundingClientRect();
      const g = Math.round((b.top - a.bottom) * 10) / 10;
      if (g >= 0 && g < 80) out.gaps.push(g);
    }
  }
  return out;
};

const browser = await chromium.launch({ executablePath: exe });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(600);
const chip = page.getByRole("button", { name: /Obstetrics/i }).first();
if (await chip.count()) { await chip.click(); await page.waitForTimeout(700); }
const topic = page.locator("button,a").filter({ hasText: /Anaemia/i }).first();
if (await topic.count()) { await topic.click(); await page.waitForTimeout(900); }

const m = await page.evaluate(MEASURE);
const rows = Object.entries(m.sizes).sort((a, b) => b[1].chars - a[1].chars);
const total = rows.reduce((n, [, v]) => n + v.chars, 0);
console.log("size    share   nodes  leading");
for (const [size, v] of rows) {
  const lead = Object.entries(v.leading).sort((a, b) => b[1] - a[1])[0];
  console.log(
    `${size.padStart(7)}  ${String(Math.round((v.chars / total) * 100)).padStart(3)}%  ${String(v.nodes).padStart(5)}   ${lead ? lead[0] : "-"}`,
  );
}
const med = (xs) => (xs.length ? xs.slice().sort((a, b) => a - b)[Math.floor(xs.length / 2)] : null);
console.log(`\npoints on the page: ${m.gaps.length}`);
console.log(`median gap between points: ${med(m.gaps)}px`);
console.log(`median line length: ${med(m.measures)} characters`);
const small = rows.filter(([s]) => parseFloat(s) < 13).reduce((n, [, v]) => n + v.chars, 0);
const smallPct = Math.round((small / total) * 100);
console.log(`text set under 13px: ${smallPct}% of characters`);

// The bar. These are the numbers the reader complained about: text too small
// and points too tightly packed. Failing here is the regression, not a style
// opinion.
const body = rows[0];
const bodyPx = parseFloat(body[0]);
const bodyLead = Number(Object.entries(body[1].leading).sort((a, b) => b[1] - a[1])[0][0]);
const gap = med(m.gaps);
const fails = [];
if (bodyPx < 17) fails.push(`body text is ${bodyPx}px, wanted 17 or more`);
if (bodyLead < 1.62) fails.push(`body leading is ${bodyLead}, wanted 1.62 or more`);
if (gap < 14) fails.push(`points sit ${gap}px apart, wanted 14 or more`);
if (smallPct > 6) fails.push(`${smallPct}% of characters are under 13px, wanted 6 or less`);
console.log(fails.length ? `\n${fails.length} below the bar\n  ` + fails.join("\n  ") : "\nthe page clears the reading bar");
await browser.close();
process.exitCode = fails.length ? 1 : 0;
