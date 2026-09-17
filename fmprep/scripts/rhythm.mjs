/**
 * How far does a reader scroll through unbroken prose before anything breaks it?
 *
 * A topic can carry plenty of charts and still read as a wall if they are all
 * emitted in one block at the top and one at the bottom. This walks topics and
 * reports the longest run of consecutive points with no chart or table in it.
 */
import { chromium } from "playwright";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
const root = "/opt/pw-browsers";
const d = readdirSync(root).find((x) => x.startsWith("chromium-"));
const exe = d && existsSync(join(root, d, "chrome-linux", "chrome")) ? join(root, d, "chrome-linux", "chrome") : undefined;
const b = await chromium.launch({ executablePath: exe });
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto(process.env.ONE_URL, { waitUntil: "networkidle" });
await p.waitForTimeout(1200);
const subjects = await p.locator(".subj").count();
let worst = 0, rows = [];
for (const name of ["Cardiovascular", "Preventive", "Neurology", "Surgery"]) {
  const s = p.locator(".subj").filter({ hasText: new RegExp(name, "i") }).first();
  if (!(await s.count())) continue;
  await s.click(); await p.waitForTimeout(700);
  await p.locator(".row").first().click(); await p.waitForTimeout(1100);
  const r = await p.evaluate(() => {
    // Model answers sit inside a closed <details>; a reader never scrolls
    // through them, so they are not part of the wall being measured.
    const visible = el => !el.closest("details") && el.offsetParent !== null;
    const nodes = [...document.querySelectorAll(".pts li, .dg, .tbl")].filter(visible);
    let run = 0, max = 0;
    for (const n of nodes) {
      if (n.matches(".pts li")) { run++; max = Math.max(max, run); } else run = 0;
    }
    return { max, points: nodes.filter(n => n.matches(".pts li")).length,
             vis: nodes.filter(n => !n.matches(".pts li")).length,
             inSection: document.querySelectorAll(".sec .vis").length,
             height: document.body.scrollHeight, title: document.querySelector("h2")?.textContent };
  });
  rows.push([name, r]);
  worst = Math.max(worst, r.max);
  await p.locator('[data-back]').first().click().catch(()=>{});
  await p.waitForTimeout(500);
  await p.locator('[data-back]').first().click().catch(()=>{});
  await p.waitForTimeout(500);
}
for (const [n, r] of rows)
  console.log(`${n.padEnd(14)} "${(r.title||"").slice(0,30)}"  points ${String(r.points).padStart(3)}  visuals ${String(r.vis).padStart(2)}  interleaved ${String(r.inSection).padStart(2)}  longest unbroken run ${String(r.max).padStart(3)}  height ${r.height}px`);
console.log(`\nworst unbroken run across the sample: ${worst} points`);
await b.close();
