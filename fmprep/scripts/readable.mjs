/**
 * Can every line actually be read, in both themes?
 *
 * Not a token check - a pixel check on the rendered page. For every element
 * holding visible text it resolves the real background (walking up through
 * transparent ancestors, the way the eye does) and measures the contrast of
 * the text against it. This exists because a token audit passes happily while
 * the page is unreadable: the theme variables can switch to dark while cards
 * painted by a literal utility class stay white, and nothing but the rendered
 * result shows it.
 *
 *   node scripts/readable.mjs            # against the built app on :5174
 *   READABLE_BASE=... node scripts/readable.mjs
 */
import { chromium } from "playwright";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.READABLE_BASE ?? "http://127.0.0.1:5174";
const root = process.env.PLAYWRIGHT_BROWSERS_PATH ?? "/opt/pw-browsers";
const d = readdirSync(root).find((x) => x.startsWith("chromium-"));
const exe = d && existsSync(join(root, d, "chrome-linux", "chrome")) ? join(root, d, "chrome-linux", "chrome") : undefined;

const AUDIT = () => {
  // Chrome reports a Tailwind colour as oklch(), not rgb(), so a naive
  // "pull the numbers out" parser reads 0.98 as a red channel and invents
  // failures everywhere. Both notations are converted to sRGB here.
  const srgb = (t) => (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
  const oklch = (L, C, h) => {
    const a = C * Math.cos((h * Math.PI) / 180), b = C * Math.sin((h * Math.PI) / 180);
    const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
    const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
    const s = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3;
    return [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    ].map((v) => Math.min(255, Math.max(0, srgb(v) * 255)));
  };
  // Returns [r, g, b, alpha].
  const parse = (str) => {
    if (!str) return null;
    const n = (str.match(/-?[\d.]+(?:e-?\d+)?/g) || []).map(Number);
    if (str.startsWith("oklch")) return [...oklch(n[0], n[1], n[2] || 0), n[3] === undefined ? 1 : n[3]];
    if (str.startsWith("rgb")) return [n[0], n[1], n[2], n[3] === undefined ? 1 : n[3]];
    if (str.startsWith("color(srgb")) return [n[0] * 255, n[1] * 255, n[2] * 255, n[3] === undefined ? 1 : n[3]];
    if (str === "transparent") return [0, 0, 0, 0];
    return null;
  };
  const lum = ([r, g, b]) => {
    const c = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
  };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const groundOf = (el) => {
    for (let n = el; n; n = n.parentElement) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c[3] > 0.92) return c.slice(0, 3);
    }
    const b = parse(getComputedStyle(document.body).backgroundColor);
    return b ? b.slice(0, 3) : [255, 255, 255];
  };
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const text = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join(" ").trim();
    if (!text) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none" || Number(cs.opacity) < 0.15) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) continue;
    const fgc = parse(cs.color);
    if (!fgc || fgc[3] < 0.5) continue;
    const fg = fgc.slice(0, 3);
    const cr = ratio(fg, groundOf(el));
    const px = parseFloat(cs.fontSize);
    const bold = Number(cs.fontWeight) >= 700;
    // An aria-hidden glyph is a graphical object, not prose - a disclosure
    // triangle is held to the 3:1 bar that applies to icons, not to 4.5:1.
    const decorative = el.closest("[aria-hidden='true']") !== null;
    const need = decorative || px >= 24 || (px >= 18.66 && bold) ? 3 : 4.5;
    if (cr < need) out.push({ cr: +cr.toFixed(2), need, px, tag: el.tagName.toLowerCase(),
      fg: cs.color, bg: groundOf(el).map(Math.round).join(","),
      cls: (el.className || "").toString().slice(0, 40), text: text.slice(0, 60) });
  }
  return out;
};

const browser = await chromium.launch({ executablePath: exe });
let bad = 0;
for (const scheme of ["light", "dark"]) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, colorScheme: scheme });
  const seen = new Map();
  const sweep = async (where) => {
    for (const f of await page.evaluate(AUDIT)) {
      const k = `${f.tag}.${f.cls}|${f.text}`;
      if (!seen.has(k)) seen.set(k, { ...f, where });
    }
  };
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await sweep("home");
  // A subject, then a topic: the reader is where the colour lives.
  const chip = page.getByRole("button", { name: /Obstetrics/i }).first();
  if (await chip.count()) { await chip.click(); await page.waitForTimeout(700); await sweep("subject"); }
  const topic = page.locator("button,a").filter({ hasText: /Anaemia|Antenatal|Labour/i }).first();
  if (await topic.count()) { await topic.click(); await page.waitForTimeout(900); await sweep("topic"); }
  for (const y of [1200, 2600, 4200, 6000]) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(250);
    await sweep("topic");
  }
  const fails = [...seen.values()];
  bad += fails.length;
  console.log(`\n== ${scheme} ==  ${fails.length ? fails.length + " unreadable" : "every line clears its bar"}`);
  for (const f of fails.slice(0, 25)) console.log(`  ${String(f.cr).padStart(5)} (need ${f.need})  ${f.where.padEnd(7)} ${f.tag}.${f.cls}  fg ${f.fg} on ${f.bg}  ${JSON.stringify(f.text)}`);
  if (fails.length > 25) console.log(`  ... and ${fails.length - 25} more`);
  await page.close();
}
await browser.close();
console.log(bad ? `\n${bad} unreadable elements` : "\nnothing unreadable in either theme");
process.exitCode = bad ? 1 : 0;
