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
 * saturated colour at that hue inside a deliberately dark lightness band that
 * clears 4.6:1 against both grounds of its theme. The band is what keeps every
 * accent a deep tone rather than a bright one, and what stops a dark-theme teal
 * from resolving to fluorescent cyan. `wash` is a 7 per cent tint for a
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
    accent: "#5d0172", accentDark: "#c58bd7",
    wash: "#f4edf5", washDark: "#28232d",
    rule: "#d2b8d8", ruleDark: "#4f3c56",
  },
  "fm-principles": {
    // walnut
    accent: "#3f2810", accentDark: "#bb9f84",
    wash: "#f2f0ee", washDark: "#272525",
    rule: "#c9c3bc", ruleDark: "#4b433c",
  },
  cardiovascular: {
    // carmine
    accent: "#910127", accentDark: "#e88287",
    wash: "#f7edf0", washDark: "#2c2225",
    rule: "#e0b8c3", ruleDark: "#5a393d",
  },
  endocrine: {
    // amber
    accent: "#713e00", accentDark: "#dc914b",
    wash: "#f5f1ed", washDark: "#2b231f",
    rule: "#d7c9b8", ruleDark: "#563e2a",
  },
  respiratory: {
    // teal
    accent: "#015657", accentDark: "#01c1c3",
    wash: "#edf3f3", washDark: "#15282b",
    rule: "#b8d0d0", ruleDark: "#104d50",
  },
  "gastro-hepatology": {
    // rust
    accent: "#7e2f01", accentDark: "#e58961",
    wash: "#f6f0ed", washDark: "#2c2221",
    rule: "#dbc5b8", ruleDark: "#593b31",
  },
  "infectious-fever": {
    // vermilion
    accent: "#8f1500", accentDark: "#e88572",
    wash: "#f7efed", washDark: "#2c2223",
    rule: "#e0bdb8", ruleDark: "#5a3a36",
  },
  neurology: {
    // violet
    accent: "#460079", accentDark: "#b391e6",
    wash: "#f2edf6", washDark: "#27232e",
    rule: "#cbb8d9", ruleDark: "#493e5b",
  },
  "renal-urology": {
    // jade
    accent: "#00574b", accentDark: "#21bea8",
    wash: "#edf3f2", washDark: "#182828",
    rule: "#b8d0cd", ruleDark: "#1a4c47",
  },
  musculoskeletal: {
    // bronze
    accent: "#5e4700", accentDark: "#c59f3a",
    wash: "#f4f2ed", washDark: "#28251d",
    rule: "#d2cbb8", ruleDark: "#4f4324",
  },
  psychiatry: {
    // magenta
    accent: "#700168", accentDark: "#d286c7",
    wash: "#f5edf4", washDark: "#2a222b",
    rule: "#d7b8d5", ruleDark: "#533b51",
  },
  "surgery-office": {
    // lagoon
    accent: "#00545e", accentDark: "#01bcd0",
    wash: "#edf3f4", washDark: "#15282c",
    rule: "#b8cfd2", ruleDark: "#104c54",
  },
  dermatology: {
    // fuchsia
    accent: "#880154", accentDark: "#e082ad",
    wash: "#f7edf3", washDark: "#2b2229",
    rule: "#deb8cf", ruleDark: "#573949",
  },
  "eye-ent": {
    // emerald
    accent: "#015b3e", accentDark: "#4bbd8e",
    wash: "#edf4f1", washDark: "#1c2826",
    rule: "#b8d1c9", ruleDark: "#284c3f",
  },
  emergency: {
    // scarlet
    accent: "#920114", accentDark: "#e8847c",
    wash: "#f7edef", washDark: "#2c2224",
    rule: "#e0b8bd", ruleDark: "#5a3a39",
  },
  pediatrics: {
    // green
    accent: "#015c1a", accentDark: "#6eb974",
    wash: "#edf4ef", washDark: "#202723",
    rule: "#b8d1bf", ruleDark: "#334b37",
  },
  obstetrics: {
    // orchid
    accent: "#7d015f", accentDark: "#da84ba",
    wash: "#f6edf4", washDark: "#2a222a",
    rule: "#dbb8d2", ruleDark: "#553a4d",
  },
  gynaecology: {
    // indigo-violet
    accent: "#31027b", accentDark: "#a197ee",
    wash: "#f1edf6", washDark: "#25242f",
    rule: "#c5b8da", ruleDark: "#43405e",
  },
  preventive: {
    // olive
    accent: "#425300", accentDark: "#98b152",
    wash: "#f2f3ed", washDark: "#242620",
    rule: "#cacfb8", ruleDark: "#40482c",
  },
  "geriatrics-ethics": {
    // ochre
    accent: "#654300", accentDark: "#d1993e",
    wash: "#f4f2ed", washDark: "#2a241e",
    rule: "#d4cab8", ruleDark: "#534126",
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
