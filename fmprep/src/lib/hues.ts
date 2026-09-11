/**
 * One colour per subject.
 *
 * Colour here is navigation, not decoration: a reader deep in a topic should be
 * able to tell Cardiovascular from Respiratory without reading the header. It
 * marks structure only - the section rule, the number badge, a diagram frame,
 * a chip - and never washes behind running text, because a line that decides
 * management is marked by the weight of its letters, not by paint.
 *
 * Each subject carries six values, not one, and the reason is contrast. The
 * same hue cannot serve both themes: a carmine that reads on white is invisible
 * on near-black. `accent` and `accentDark` were solved numerically as the most
 * saturated colour at that hue inside a lightness band that still clears 4.6:1
 * against both grounds of its theme - the band being what stops a dark-theme
 * teal from resolving to fluorescent cyan. `wash` is a 7 per cent tint for a
 * chip ground, `rule` a 28 per cent tint for a hairline.
 *
 * No hue sits in the blue range. `npm run contrast` recomputes every ratio from
 * this table, so a colour cannot be changed here without the check re-running.
 */
export type SubjectColor = {
  /** Accent, light theme. */
  accent: string;
  /** Accent, dark theme. */
  accentDark: string;
  /** Chip and panel ground, light theme. */
  wash: string;
  /** Chip and panel ground, dark theme. */
  washDark: string;
  /** Hairline and connector, light theme. */
  rule: string;
  /** Hairline and connector, dark theme. */
  ruleDark: string;
};

export const SUBJECT_COLOR: Record<string, SubjectColor> = {
  "symptom-approach": {
    // amethyst
    accent: "#5f0575", accentDark: "#c58bd7",
    wash: "#f4eef5", washDark: "#28232d",
    rule: "#d2b9d8", ruleDark: "#4f3c56",
  },
  "fm-principles": {
    // walnut
    accent: "#4f3720", accentDark: "#bb9f84",
    wash: "#f3f1ef", washDark: "#272525",
    rule: "#cec7c1", ruleDark: "#4b433c",
  },
  cardiovascular: {
    // carmine
    accent: "#950129", accentDark: "#e88287",
    wash: "#f8edf0", washDark: "#2c2225",
    rule: "#e1b8c3", ruleDark: "#5a393d",
  },
  endocrine: {
    // amber
    accent: "#965501", accentDark: "#dc914b",
    wash: "#f8f3ed", washDark: "#2b231f",
    rule: "#e2cfb8", ruleDark: "#563e2a",
  },
  respiratory: {
    // teal
    accent: "#017879", accentDark: "#01c1c3",
    wash: "#edf6f6", washDark: "#15282b",
    rule: "#b8d9d9", ruleDark: "#104d50",
  },
  "gastro-hepatology": {
    // rust
    accent: "#aa4300", accentDark: "#e58961",
    wash: "#f9f2ed", washDark: "#2c2221",
    rule: "#e7cab8", ruleDark: "#593b31",
  },
  "infectious-fever": {
    // vermilion
    accent: "#9e1901", accentDark: "#e88572",
    wash: "#f8efed", washDark: "#2c2223",
    rule: "#e4bfb8", ruleDark: "#5a3a36",
  },
  neurology: {
    // violet
    accent: "#501485", accentDark: "#b391e6",
    wash: "#f3eff6", washDark: "#27232e",
    rule: "#cebddd", ruleDark: "#493e5b",
  },
  "renal-urology": {
    // jade
    accent: "#007a6a", accentDark: "#21bea8",
    wash: "#edf6f5", washDark: "#182828",
    rule: "#b8dad5", ruleDark: "#1a4c47",
  },
  musculoskeletal: {
    // bronze
    accent: "#7f6201", accentDark: "#c59f3a",
    wash: "#f6f4ed", washDark: "#28251d",
    rule: "#dbd3b8", ruleDark: "#4f4324",
  },
  psychiatry: {
    // magenta
    accent: "#700168", accentDark: "#d286c7",
    wash: "#f5edf4", washDark: "#2a222b",
    rule: "#d7b8d5", ruleDark: "#533b51",
  },
  "surgery-office": {
    // lagoon
    accent: "#007481", accentDark: "#01bcd0",
    wash: "#edf5f6", washDark: "#15282c",
    rule: "#b8d8dc", ruleDark: "#104c54",
  },
  dermatology: {
    // fuchsia
    accent: "#880154", accentDark: "#e082ad",
    wash: "#f7edf3", washDark: "#2b2229",
    rule: "#deb8cf", ruleDark: "#573949",
  },
  "eye-ent": {
    // emerald
    accent: "#017953", accentDark: "#4bbd8e",
    wash: "#edf6f3", washDark: "#1c2826",
    rule: "#b8d9cf", ruleDark: "#284c3f",
  },
  emergency: {
    // scarlet
    accent: "#940015", accentDark: "#e8847c",
    wash: "#f8edef", washDark: "#2c2224",
    rule: "#e1b8bd", ruleDark: "#5a3a39",
  },
  pediatrics: {
    // green
    accent: "#017f26", accentDark: "#6eb974",
    wash: "#edf6f0", washDark: "#202723",
    rule: "#b8dbc2", ruleDark: "#334b37",
  },
  obstetrics: {
    // orchid
    accent: "#7d015f", accentDark: "#da84ba",
    wash: "#f6edf4", washDark: "#2a222a",
    rule: "#dbb8d2", ruleDark: "#553a4d",
  },
  gynaecology: {
    // indigo-violet
    accent: "#3f1e8e", accentDark: "#a197ee",
    wash: "#f2eff7", washDark: "#25242f",
    rule: "#c9c0df", ruleDark: "#43405e",
  },
  preventive: {
    // olive
    accent: "#5b7101", accentDark: "#98b152",
    wash: "#f4f5ed", washDark: "#242620",
    rule: "#d1d7b8", ruleDark: "#40482c",
  },
  "geriatrics-ethics": {
    // ochre
    accent: "#8a5d00", accentDark: "#d1993e",
    wash: "#f7f4ed", washDark: "#2a241e",
    rule: "#ded2b8", ruleDark: "#534126",
  },
};

export const DEFAULT_COLOR: SubjectColor = SUBJECT_COLOR["fm-principles"];

/**
 * The custom properties a subject sets on the element it colours.
 *
 * Both themes' values are set together, and `index.css` picks between them on
 * `.subject-theme`. They cannot be resolved at `:root` instead: a theme block
 * there would read the per-subject properties before any subject has set them.
 */
export function colorVars(subjectId: string | undefined): Record<string, string> {
  const c = (subjectId && SUBJECT_COLOR[subjectId]) || DEFAULT_COLOR;
  return {
    "--acc-l": c.accent, "--acc-d": c.accentDark,
    "--wash-l": c.wash, "--wash-d": c.washDark,
    "--rule-l": c.rule, "--rule-d": c.ruleDark,
  };
}
