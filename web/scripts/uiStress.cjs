/**
 * Screen-level stress test: opens every tool on a phone-sized screen and
 * fires random entries (normal, extreme, negative, decimal, zero, blank,
 * letters) and random taps at it. Fails if the app crashes, logs a page
 * error, or ever shows NaN / Infinity / undefined / [object Object].
 *
 *   npx vite build --base=./ && node scripts/uiStress.cjs [rounds-per-tool]
 *
 * Serves web/dist itself. Needs Playwright with Chromium.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..", "dist");
const ROUNDS = Number(process.argv[2] || 40);
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".json": "application/json", ".webmanifest": "application/manifest+json" };

const server = http.createServer((req, res) => {
  let f = path.join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!f.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  if (!fs.existsSync(f)) f = path.join(ROOT, "index.html");
  res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
});

// Deterministic randomness so a failure can be replayed.
let seed = Number(process.env.SEED || 20261107);
const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const pick = (a) => a[Math.floor(rnd() * a.length)];
const VALUES = () => pick([
  String(Math.round(rnd() * 100)), String(Math.round(rnd() * 400)), (rnd() * 50).toFixed(1), (rnd() * 5).toFixed(2),
  "0", "-5", "-0.5", "1", "999999", "1e9", "0.0001", "", "", "abc", "12abc", "3.5.2", " ", "2", "45", "120", "37", "28",
]);
const BAD_TEXT = /\bNaN\b|Infinity|undefined|\[object Object\]|Something went wrong/;

(async () => {
  await new Promise((r) => server.listen(0, r));
  const url = `http://localhost:${server.address().port}/`;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  page.on("dialog", (d) => d.accept().catch(() => {}));
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(url);
  await page.waitForTimeout(3500);

  // Tool ids from the home screen cards.
  const homeCards = await page.locator("main button").allInnerTexts();
  const tools = homeCards.map((t) => t.split("\n")[0].trim()).filter(Boolean);
  const report = [];
  let actions = 0;

  for (const name of tools) {
    const before = errors.length;
    const bad = [];
    await page.locator("main button", { hasText: name }).first().click();
    await page.waitForTimeout(150);
    let n = 0;
    for (let r = 0; r < ROUNDS; r++) {
      const inputs = page.locator('main input:not([type=checkbox]):not([type=file]):not([type=date]):not([type=time]):not([aria-hidden=true]):visible, main textarea:visible');
      const buttons = page.locator("main button:visible");
      const boxes = page.locator("main input[type=checkbox]:visible");
      const ni = await inputs.count(), nb = await buttons.count(), nc = await boxes.count();
      // Fill a few inputs, then tap a few buttons / checkboxes.
      for (let k = 0; k < Math.min(ni, 4); k++) {
        const el = inputs.nth(Math.floor(rnd() * ni));
        const v = VALUES();
        try {
          const type = await el.getAttribute("type", { timeout: 500 });
          await el.fill(type === "number" && !/^-?[\d.e]*$/.test(v) ? "" : v, { timeout: 500 });
          n++;
        } catch { /* gone or not editable now */ }
      }
      for (let k = 0; k < 3 && nb; k++) {
        const el = buttons.nth(Math.floor(rnd() * nb));
        let label = "";
        try { label = ((await el.getAttribute("aria-label", { timeout: 500 })) || (await el.innerText({ timeout: 500 }))).trim(); } catch { continue; }
        // Skip buttons that leave the tool, record from the mic or open the camera.
        // ("Last 5" opens a list over the tool; it is covered by its own test.)
        if (/\bclose\b|menu|\bback\b|all notes|record|voice|camera|video|gallery|download|\bsign|\bsave\b|last 5/i.test(label)) continue;
        try { await el.click({ timeout: 500 }); n++; } catch { /* covered or gone */ }
      }
      if (nc) { try { await boxes.nth(Math.floor(rnd() * nc)).click({ timeout: 500 }); n++; } catch { /* hidden */ } }
      const text = await page.locator("body").innerText();
      const m = text.match(BAD_TEXT);
      if (m) bad.push(`round ${r}: shows "${m[0]}" near "${text.slice(Math.max(0, m.index - 60), m.index + 20).replace(/\s+/g, " ")}"`);
      if (!(await page.locator("main").count())) { bad.push(`round ${r}: tool screen disappeared`); break; }
    }
    actions += n;
    report.push({ tool: name, actions: n, errors: errors.slice(before), bad: [...new Set(bad)].slice(0, 3) });
    // Reload (checks the tool reopens with its saved entries), then go Home.
    await page.goto(url);
    await page.waitForTimeout(400);
    const text = await page.locator("body").innerText();
    if (BAD_TEXT.test(text)) report[report.length - 1].bad.push(`after reopening: shows "${text.match(BAD_TEXT)[0]}"`);
    const home = page.getByRole("button", { name: "Back to Home" });
    if (await home.count()) await home.click();
    await page.waitForTimeout(200);
  }

  let failed = 0;
  for (const r of report) {
    const ok = !r.errors.length && !r.bad.length;
    if (!ok) failed++;
    console.log(`${ok ? "✓" : "✗"} ${r.tool}: ${r.actions} random entries/taps`);
    for (const e of [...r.errors.slice(0, 3), ...r.bad]) console.log("    -", e);
  }
  console.log(`\nUI STRESS: ${report.length} tools, ${actions} random entries/taps, ${failed} tools with problems`);
  await browser.close();
  server.close();
  process.exit(failed ? 1 : 0);
})();
