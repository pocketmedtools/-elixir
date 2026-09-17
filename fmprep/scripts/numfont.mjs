/**
 * Do measured quantities read in the same face as the prose around them?
 *
 * They used to be set in the monospace face. In a serif paragraph that reads
 * as a typewriter splice: the digits are too wide and sit off the baseline of
 * the words beside them. This walks into a real topic on both the app and the
 * single-file build, finds the rendered b.num elements, and compares their
 * computed font against the body's. Finding none is a failure, not a pass.
 */
import { chromium } from "playwright";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.env.PLAYWRIGHT_BROWSERS_PATH ?? "/opt/pw-browsers";
const d = readdirSync(root).find((x) => x.startsWith("chromium-"));
const exe = d && existsSync(join(root, d, "chrome-linux", "chrome")) ? join(root, d, "chrome-linux", "chrome") : undefined;

const browser = await chromium.launch({ executablePath: exe });
let bad = 0;

for (const [name, url] of [["app", process.env.APP_URL], ["single", process.env.ONE_URL]]) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  // Walk in until quantities appear. The app opens on a menu and the
  // single-file build on the subject grid, so try each step and keep going.
  const steps = [
    'button:has-text("Subject library"), .subj, [data-sub]',
    'button:has-text("Cardiovascular"), .subj, [data-sub]',
    '.row, [data-topic], button:has-text("Hypertension")',
  ];
  for (const sel of steps) {
    if (await page.locator("b.num").count()) break;
    const el = page.locator(sel).first();
    if (await el.count()) { await el.click().catch(() => {}); await page.waitForTimeout(1000); }
  }

  const r = await page.evaluate(() => {
    const nums = [...document.querySelectorAll("b.num")];
    if (!nums.length) return { n: 0 };
    const seen = {};
    for (const el of nums.slice(0, 60)) {
      const f = getComputedStyle(el).fontFamily;
      const parent = getComputedStyle(el.parentElement).fontFamily;
      seen[f] = seen[f] || { count: 0, parent };
      seen[f].count++;
    }
    return { n: nums.length, seen, sample: nums[0].textContent, where: location.href };
  });

  if (!r.n) {
    console.log(`${name}: FAIL - reached no screen with a quantity on it, so nothing was checked`);
    bad++;
  } else {
    console.log(`${name}: ${r.n} quantities on screen, sample "${r.sample}"`);
    let wrong = false;
    for (const [font, info] of Object.entries(r.seen)) {
      const isMono = /mono|courier|consolas|menlo/i.test(font);
      const matches = font === info.parent;
      console.log(`  ${isMono || !matches ? "FAIL" : "ok  "} ${font.slice(0, 52)}  x${info.count}`);
      if (isMono || !matches) { wrong = true; console.log(`       surrounding text: ${info.parent.slice(0, 52)}`); }
    }
    if (wrong) bad++;
  }
  await page.close();
}

await browser.close();
console.log(bad ? `\n${bad} page(s) still set quantities apart from their prose` : "\nquantities read in the face of the prose around them, on both pages");
process.exit(bad ? 1 : 0);
