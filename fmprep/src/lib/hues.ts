/**
 * One colour per subject.
 *
 * Colour here is navigation, not decoration: a reader deep in a topic should be
 * able to tell Cardiovascular from Respiratory without reading the header.
 *
 * A subject is three numbers, not one, and the reason is contrast. At the same
 * HSL lightness a green is far brighter than an indigo, so a single accent
 * lightness that reads well for Geriatrics fails WCAG for Paediatrics. `l` and
 * `d` are the accent lightness in the light and dark themes, solved per hue as
 * the most vivid value that still clears 4.6:1 against the page, the card, its
 * own wash, and the ground used for text sitting on top of the accent.
 *
 * `npm run contrast` recomputes those ratios from this table, so a hue cannot be
 * changed here without the check being re-run.
 */
export type SubjectColor = {
  /** CSS hue angle. */
  h: number;
  /** Accent lightness, light theme. */
  l: number;
  /** Accent lightness, dark theme. */
  d: number;
};

export const SUBJECT_COLOR: Record<string, SubjectColor> = {
  "symptom-approach": { h: 265, l: 40, d: 65 },
  "fm-principles": { h: 212, l: 40, d: 58 },
  cardiovascular: { h: 350, l: 40, d: 61 },
  endocrine: { h: 32, l: 37, d: 58 },
  respiratory: { h: 194, l: 36, d: 58 },
  "gastro-hepatology": { h: 22, l: 40, d: 58 },
  "infectious-fever": { h: 8, l: 40, d: 59 },
  neurology: { h: 281, l: 40, d: 63 },
  "renal-urology": { h: 176, l: 30, d: 58 },
  musculoskeletal: { h: 45, l: 33, d: 58 },
  psychiatry: { h: 300, l: 40, d: 58 },
  "surgery-office": { h: 206, l: 40, d: 58 },
  dermatology: { h: 338, l: 40, d: 61 },
  "eye-ent": { h: 160, l: 31, d: 58 },
  emergency: { h: 2, l: 40, d: 61 },
  pediatrics: { h: 132, l: 31, d: 58 },
  obstetrics: { h: 322, l: 40, d: 60 },
  gynaecology: { h: 310, l: 40, d: 59 },
  preventive: { h: 100, l: 31, d: 58 },
  "geriatrics-ethics": { h: 232, l: 40, d: 65 },
};

export const DEFAULT_COLOR: SubjectColor = { h: 212, l: 40, d: 58 };

/** The custom properties a subject sets on the element it colours. */
export function colorVars(subjectId: string | undefined): Record<string, string> {
  const c = (subjectId && SUBJECT_COLOR[subjectId]) || DEFAULT_COLOR;
  return { "--h": String(c.h), "--al": String(c.l), "--ad": String(c.d) };
}
