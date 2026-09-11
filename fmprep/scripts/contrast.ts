/**
 * Does every colour the page renders clear its contrast bar, in both themes?
 *
 * Two things are checked. The neutral tokens, which carry all the prose, are
 * literal values that must be kept in step with `src/index.css` and
 * `scripts/singlefile.template.html` - a checker measuring a palette the page
 * does not render is worse than no checker. The twenty subject colours are read
 * straight from `src/lib/hues.ts`, so a colour cannot be changed there without
 * this re-running over it.
 *
 * This is the palette-level check. `npm run readable` is the one that matters
 * more: it measures the rendered page, where a token that is right can still
 * land on a ground that is wrong.
 */
import { SUBJECT_COLOR } from "../src/lib/hues";

type Theme = { name: string; paper: string; card: string; sunk: string;
  ink: string; inkSoft: string; quiet: string;
  good: string; goodWash: string; danger: string; dangerWash: string; think: string; thinkWash: string };

const THEMES: Theme[] = [
  { name: "light", paper: "#f4f2ef", card: "#ffffff", sunk: "#f7f6f4",
    ink: "#151311", inkSoft: "#3d3831", quiet: "#5f5952",
    good: "#14622f", goodWash: "#eff6f0", danger: "#a8102a", dangerWash: "#fbedee",
    think: "#8a5200", thinkWash: "#f9f3ec" },
  { name: "dark", paper: "#0d0d0f", card: "#17171a", sunk: "#1e1e22",
    ink: "#f4f4f6", inkSoft: "#d5d5db", quiet: "#a8a8b2",
    good: "#6fbf85", goodWash: "#16241a", danger: "#e88d95", dangerWash: "#2a1a1d",
    think: "#d6a247", thinkWash: "#271f13" },
];

const hex = (s: string) => [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16) / 255);
const lum = ([r, g, b]: number[]) => {
  const c = (v: number) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
};
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(hex(a)), lum(hex(b))].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

const fails: string[] = [];
let worst = { r: 99, what: "" };
const check = (what: string, r: number, need = 4.5) => {
  if (r < worst.r) worst = { r, what };
  if (r < need) fails.push(`${r.toFixed(2)} (need ${need})  ${what}`);
};

for (const t of THEMES) {
  // Small meta text is held to the body bar, not the large-text 3:1.
  check(`[${t.name}] ink on page`, ratio(t.ink, t.paper));
  check(`[${t.name}] ink on card`, ratio(t.ink, t.card));
  check(`[${t.name}] ink on zebra row`, ratio(t.ink, t.sunk));
  check(`[${t.name}] soft ink on card`, ratio(t.inkSoft, t.card));
  check(`[${t.name}] quiet text on card`, ratio(t.quiet, t.card));
  check(`[${t.name}] quiet text on page`, ratio(t.quiet, t.paper));
  check(`[${t.name}] safe on its wash`, ratio(t.good, t.goodWash));
  check(`[${t.name}] danger on its wash`, ratio(t.danger, t.dangerWash));
  check(`[${t.name}] caution on its wash`, ratio(t.think, t.thinkWash));
  check(`[${t.name}] ink on danger wash`, ratio(t.ink, t.dangerWash));
  check(`[${t.name}] ink on caution wash`, ratio(t.ink, t.thinkWash));
  check(`[${t.name}] ink on safe wash`, ratio(t.ink, t.goodWash));

  for (const [id, c] of Object.entries(SUBJECT_COLOR)) {
    const acc = t.name === "light" ? c.accent : c.accentDark;
    const wash = t.name === "light" ? c.wash : c.washDark;
    check(`[${t.name}] ${id} accent on page`, ratio(acc, t.paper));
    check(`[${t.name}] ${id} accent on card`, ratio(acc, t.card));
    check(`[${t.name}] ${id} accent on its own chip`, ratio(acc, wash));
    check(`[${t.name}] ${id} ink on its own chip`, ratio(t.ink, wash));
    // Text printed on the accent itself, as a solid badge.
    check(`[${t.name}] ${id} card colour on accent`, ratio(t.card, acc));
  }
}

console.log(fails.length ? `${fails.length} pairs below their bar\n` + fails.join("\n") : "every pair clears its bar");
console.log(`\nchecked ${Object.keys(SUBJECT_COLOR).length} subjects in 2 themes`);
console.log(`worst overall: ${worst.r.toFixed(2)}  ${worst.what}`);
process.exitCode = fails.length ? 1 : 0;
