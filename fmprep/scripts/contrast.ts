/**
 * Does every colour pair the page renders pass WCAG contrast, in both themes?
 *
 * The palette is fixed - neutral greys, black, and three semantic colours - so
 * this checks the literal token values that index.css and the single-file
 * template declare. The values here must be kept identical to those files, or
 * the check measures a palette the page does not render; that is the whole
 * reason it exists.
 */
type Theme = {
  name: string;
  paper: string; raised: string; sunk: string;
  ink: string; inkSoft: string; quiet: string;
  acc: string; wash: string;
  good: string; goodWash: string;
  danger: string; dangerWash: string;
  think: string; thinkWash: string;
};

const THEMES: Theme[] = [
  {
    name: "light",
    paper: "#f4f4f4", raised: "#ffffff", sunk: "#f7f7f7",
    ink: "#141414", inkSoft: "#3d3d3d", quiet: "#5f5f5f",
    acc: "#1a1a1a", wash: "#f4f4f4",
    good: "#166534", goodWash: "#f1faf3",
    danger: "#b91c1c", dangerWash: "#fdf2f2",
    think: "#a85a05", thinkWash: "#fff6ea",
  },
  {
    name: "dark",
    paper: "#0c0c0c", raised: "#181818", sunk: "#232323",
    ink: "#f2f2f2", inkSoft: "#cfcfcf", quiet: "#9e9e9e",
    acc: "#e6e6e6", wash: "#232323",
    good: "#8fe3a8", goodWash: "#102616",
    danger: "#f5a3a3", dangerWash: "#3a1212",
    think: "#f5cf6a", thinkWash: "#33220a",
  },
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

let worst = { r: 99, what: "" };
const fails: string[] = [];
for (const t of THEMES) {
  // Text sizes: body text needs 4.5:1; the quiet meta text is set at 11-13 px
  // so it is held to the same bar rather than the large-text 3:1.
  const checks: [string, number, number][] = [
    ["ink on page", ratio(t.ink, t.paper), 4.5],
    ["ink on card", ratio(t.ink, t.raised), 4.5],
    ["soft ink on card", ratio(t.inkSoft, t.raised), 4.5],
    ["quiet text on card", ratio(t.quiet, t.raised), 4.5],
    ["quiet text on page", ratio(t.quiet, t.paper), 4.5],
    ["accent text on page", ratio(t.acc, t.paper), 4.5],
    ["accent text on card", ratio(t.acc, t.raised), 4.5],
    ["accent chip on its wash", ratio(t.acc, t.wash), 4.5],
    ["card text on accent (badge/button)", ratio(t.raised, t.acc), 4.5],
    ["ink on sunk (zebra row)", ratio(t.ink, t.sunk), 4.5],
    ["good on its wash", ratio(t.good, t.goodWash), 4.5],
    ["danger on its wash", ratio(t.danger, t.dangerWash), 4.5],
    ["caution on its wash", ratio(t.think, t.thinkWash), 4.5],
  ];
  for (const [what, r, need] of checks) {
    if (r < worst.r) worst = { r, what: `${what} [${t.name}]` };
    if (r < need) fails.push(`${t.name.padEnd(5)} ${r.toFixed(2)}  ${what}`);
  }
}
console.log(fails.length ? `${fails.length} pairs below 4.5:1\n` + fails.join("\n") : "every pair passes 4.5:1");
console.log(`\nworst overall: ${worst.r.toFixed(2)}  ${worst.what}`);
process.exitCode = fails.length ? 1 : 0;
