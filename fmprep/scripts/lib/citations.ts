/**
 * Is a citation out of date, or is its year part of its name?
 *
 * The naive test - does this tag name an edition, or a year inside the last
 * decade - flags two very different things as rot. `[KDIGO 2012]` is rot: the
 * 2024 guideline replaced it and the recommendation changed. `[Factories Act
 * 1948]` is not rot, and neither is `[Wilson and Jungner 1968]`: a statute and
 * a landmark paper are cited by their own year forever, the way a journal
 * cites them. A checker that cannot tell those apart sends an author chasing
 * 5,000 citations that are already correct, and hides the few hundred that are
 * not.
 *
 * So the year bar applies only to documents that have editions. `PROPER_NAME`
 * carries the tags whose year is part of a name, each one checked by hand
 * against what it is actually being cited for; `scripts/stale.ts` lists what
 * is left.
 */

/** Statutes, rules and constitutional instruments - named by enactment year. */
const STATUTE =
  /\b(Act|Rules|Bill|Ordinance|Amendment|Regulations|Code|Constitution|Schedule|Convention|Charter|Declaration|Framework|Judgment|vs?\.?\s)\b/i;

/** Tags whose year is part of a proper name: a paper, a score, a criterion, a
 *  definition, a court judgment, a census, a programme's launch year. */
export const PROPER_NAME = new Set<string>([]);

/** Tags confirmed as the latest edition of their document despite an old year. */
export const STILL_CURRENT = new Set<string>([]);

const YEAR = /\b(19|20)\d{2}\b/;
const EDITION = /\b\d{1,2}(?:e|th ed|nd ed|rd ed|st ed)\b/i;

export type Verdict = "edition" | "recent" | "proper" | "still-current" | "stale" | "undated";

/** Why this tag passes or fails the currency bar. */
export function classify(tag: string, thisYear = new Date().getFullYear()): Verdict {
  const t = tag.replace(/^\[|\]$/g, "").trim();
  if (PROPER_NAME.has(t)) return "proper";
  if (STILL_CURRENT.has(t)) return "still-current";
  if (STATUTE.test(t)) return "proper";
  if (EDITION.test(t)) return "edition";
  const y = t.match(YEAR);
  if (!y) return "undated";
  return thisYear - Number(y[0]) <= 10 ? "recent" : "stale";
}

export const isCurrent = (tag: string, thisYear?: number) =>
  !["stale", "undated"].includes(classify(tag, thisYear));
