/**
 * Browser smoke test for the standalone FM Prep app.
 * Drives it the way a candidate would: read a topic, open the past papers,
 * follow a question into the library, read the seeded source documents in
 * full, and search across everything.
 */
import { chromium } from "playwright";
import { writeFileSync, readdirSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = process.env.SMOKE_BASE ?? "http://127.0.0.1:4174/";

/**
 * The pre-installed Chromium, whose directory carries a build number that
 * changes with every Playwright release. Falls back to Playwright's own
 * resolution when the bundled browser is not where this environment puts it.
 */
function chromePath() {
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH ?? "/opt/pw-browsers";
  try {
    const dir = readdirSync(root).find((d) => d.startsWith("chromium-"));
    if (dir) {
      const exe = join(root, dir, "chrome-linux", "chrome");
      if (existsSync(exe)) return exe;
    }
    if (existsSync(join(root, "chromium"))) return join(root, "chromium");
  } catch {
    // Fall through to Playwright's own lookup.
  }
  return undefined;
}
const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
};

const NOTE = join(tmpdir(), "fmprep-smoke-note.txt");
const FIRST = "ZZSTARTSENTINEL";
const LAST = "ZZENDSENTINEL";
const body = [];
for (let i = 0; i < 600; i++) body.push(`Line ${i}: my own revision note on chronic kidney disease.`);
writeFileSync(NOTE, `${FIRST}\n\n${body.join("\n\n")}\n\n${LAST}`);

async function goHome(page) {
  for (let i = 0; i < 8; i++) {
    if ((await page.getByText(/Family Medicine exam preparation/i).count()) > 0) return true;
    const back = page.getByRole("button", { name: /^←/ }).first();
    if (!(await back.count())) return false;
    await back.click();
    await page.waitForTimeout(400);
  }
  return (await page.getByText(/Family Medicine exam preparation/i).count()) > 0;
}

const browser = await chromium.launch({ executablePath: chromePath() });
const page = await browser.newPage({ viewport: { width: 420, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});

await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

check("app opens straight into the study home", (await page.getByText(/Family Medicine exam preparation/i).count()) > 0);
check("header names the app", (await page.getByText(/FM Prep/).count()) > 0);

// Library -> subject -> topic
await page.getByRole("button", { name: /Subject library/i }).first().click();
await page.waitForTimeout(600);
await page.getByRole("button", { name: /Cardiovascular/i }).first().click();
await page.waitForTimeout(2500);
const topicRow = page.getByRole("button", { name: /Hypertension/i }).first();
check("subject chunk loads", (await topicRow.count()) > 0);
await topicRow.click();
await page.waitForTimeout(1200);
const readerText = await page.locator("article").first().innerText().catch(() => "");
check("topic reads", readerText.length > 2000, `${readerText.length} chars`);

// Previous-year questions
check("back to home", await goHome(page));
await page.getByRole("button", { name: /Previous-year questions/i }).first().click();
await page.waitForTimeout(12000); // whole library + the question bank chunk
const heading = await page.getByRole("heading", { name: /Previous-year questions/i }).count();
check("pyq screen opens", heading > 0);
const blurb = await page.getByText(/questions from .* sittings/i).first().innerText().catch(() => "");
check("pyq counts shown", /\d+ questions from \d+ sittings/i.test(blurb), blurb.slice(0, 80));

// A real question from the papers, and its link into the library.
const q1 = page.getByText(/Describe briefly on Vit\.D metabolism/i).first();
check("a real 2022 paper question is present", (await q1.count()) > 0);
if (await q1.count()) {
  await q1.click();
  await page.waitForTimeout(900);
  const link = page.getByRole("button", { name: /·/ }).first();
  const linked = (await page.getByText(/Answer it from/i).count()) > 0;
  check("question links into the library", linked);
  if (linked && (await link.count())) {
    await link.click();
    await page.waitForTimeout(2000);
    const t = await page.locator("article").first().innerText().catch(() => "");
    check("following the link opens a topic", t.length > 1500, `${t.length} chars`);
    await goHome(page);
    await page.getByRole("button", { name: /Previous-year questions/i }).first().click();
    await page.waitForTimeout(3000);
  }
}

// Topic-wise view
await page.getByRole("button", { name: /^By topic$/ }).first().click();
await page.waitForTimeout(800);
const topicsShown = await page.getByText(/^\d+ topics$/).first().innerText().catch(() => "");
check("topic-wise view lists topics", /\d+ topics/.test(topicsShown), topicsShown);
await page.locator('input[placeholder*="Find a topic"]').fill("Hypertension");
await page.waitForTimeout(700);
check("topic search filters", (await page.getByText(/Hypertension/).count()) > 0);

// Repeaters
await page.getByRole("button", { name: /Repeaters/i }).first().click();
await page.waitForTimeout(700);
const rep = await page.getByText(/asked in three or more different years/i).count();
check("repeating topics view works", rep > 0);

// The seeded source documents
await goHome(page);
await page.getByRole("button", { name: /My documents/i }).first().click();
await page.waitForTimeout(1500);
check(
  "source papers are already in the library",
  (await page.getByText(/question papers 2022 to 2025/i).count()) > 0 &&
    (await page.getByText(/topic-wise previous questions 2011 to 2022/i).count()) > 0,
);

await page.getByRole("button", { name: /question papers 2022 to 2025/i }).first().click();
await page.waitForTimeout(1500);
let sawEnd = false;
for (let i = 0; i < 60 && !sawEnd; i++) {
  await page.mouse.wheel(0, 25000);
  await page.waitForTimeout(200);
  sawEnd = (await page.getByText(/End of document/i).count()) > 0;
}
const docText = await page.locator("article").first().innerText().catch(() => "");
check("source paper reads to the end", sawEnd, `${docText.trim().split(/\s+/).length} words rendered`);
check("it contains a real paper heading", /2023 (April|October) Paper/i.test(docText));

// The learner's own file still imports
await page.getByRole("button", { name: /^←/ }).first().click();
await page.waitForTimeout(700);
await page.setInputFiles('input[type="file"]', NOTE);
await page.waitForTimeout(2000);
check("importing your own file still works", (await page.getByText(/fmprep-smoke-note/i).count()) > 0);

// Search spans library, papers and documents
await goHome(page);
await page.getByRole("button", { name: /Search notes/i }).first().click();
await page.waitForTimeout(800);
await page.locator('input[placeholder*="Search notes"]').fill("chronic kidney disease");
await page.waitForTimeout(1500);
check("search finds topics", (await page.getByText(/Topic/).count()) > 0);
check("search finds documents", (await page.getByText(/My document/i).count()) > 0);

check("no uncaught page errors", errors.length === 0, errors.slice(0, 3).join(" | "));

if (process.env.SMOKE_SCREENSHOT) await page.screenshot({ path: process.env.SMOKE_SCREENSHOT });
await browser.close();

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
process.exit(failed.length ? 1 : 0);
