import { SUBJECT_COLOR } from "../src/lib/hues.ts";

/**
 * Does every subject hue actually pass contrast, in both themes?
 *
 * The palette derives an accent from one hue per subject at a fixed lightness.
 * That is convenient but not automatically legible: at the same HSL lightness a
 * yellow is far brighter than a blue, so a fixed L that works for indigo can
 * fail for gold. This computes the real WCAG ratio for every pair the page
 * actually renders, so the fix is measured rather than guessed.
 */

const hsl = (h, s, l) => {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)];
};
const hex = (s) => [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16) / 255);
const lum = ([r, g, b]) => {
  const c = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

// Light theme, then dark, exactly as index.css declares them.
const THEMES = [
  { name: "light", washL: 96.5, paper: "#F7F6F3", raised: "#FFFFFF", ink: "#11182A" },
  { name: "dark", washL: 14, paper: "#0D1220", raised: "#141B2B", ink: "#E9EBF0" },
];

let worst = { r: 99, what: "" };
const fails = [];
for (const t of THEMES) {
  const paper = hex(t.paper), raised = hex(t.raised), ink = hex(t.ink);
  const white = [1, 1, 1];
  for (const [id, c] of Object.entries(SUBJECT_COLOR)) {
    const h = c.h;
    // Saturation must match index.css exactly, or the check measures a
    // palette the page does not render.
    const acc = hsl(h, t.name === "light" ? 34 : 30, t.name === "light" ? c.l : c.d);
    const wash = hsl(h, t.name === "light" ? 20 : 36, t.washL);
    const checks = [
      [`accent text on page (${id})`, ratio(acc, paper), 4.5],
      [`accent text on card (${id})`, ratio(acc, raised), 4.5],
      [`accent chip on its wash (${id})`, ratio(acc, wash), 4.5],
      // Buttons and badges put the page ground on the accent.
      [`button label on accent (${id})`, ratio(t.name === "light" ? white : hex(t.raised === "#141B2B" ? "#0D1220" : t.raised), acc), 4.5],
    ];
    for (const [what, r, need] of checks) {
      if (r < worst.r) worst = { r, what: `${what} [${t.name}]` };
      if (r < need) fails.push(`${t.name.padEnd(5)} ${r.toFixed(2)}  ${what}`);
    }
  }
}
console.log(fails.length ? `${fails.length} pairs below 4.5:1\n` + fails.join("\n") : "every pair passes 4.5:1");
console.log(`\nworst overall: ${worst.r.toFixed(2)}  ${worst.what}`);
