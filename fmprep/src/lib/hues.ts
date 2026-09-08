/**
 * One hue per subject.
 *
 * Colour here is navigation, not decoration: a reader deep in a topic should be
 * able to tell Cardiovascular from Respiratory without reading the header. Each
 * value is a CSS hue angle, set as --h on the reader root, and the accent, wash,
 * rule and highlighter are all derived from it in index.css - so a subject is
 * one number, not a palette to keep in step.
 */
export const SUBJECT_HUE: Record<string, number> = {
  "symptom-approach": 265,
  "fm-principles": 212,
  cardiovascular: 350,
  endocrine: 32,
  respiratory: 194,
  "gastro-hepatology": 22,
  "infectious-fever": 8,
  neurology: 281,
  "renal-urology": 176,
  musculoskeletal: 45,
  psychiatry: 300,
  "surgery-office": 206,
  dermatology: 338,
  "eye-ent": 160,
  emergency: 2,
  pediatrics: 132,
  obstetrics: 322,
  gynaecology: 310,
  preventive: 100,
  "geriatrics-ethics": 232,
};
