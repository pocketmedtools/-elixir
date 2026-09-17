/**
 * Turning a scored or classified table into a figure.
 *
 * A comparison table is read across: two things, the same questions asked of
 * each. A classification is not that. It is a list of named classes in order,
 * and what a reader has to hold is the sequence and the name - Killip I to IV,
 * Wagner 0 to 5, GCS eye opening four down to one. Laid out as a grid on a
 * phone the class name eats the frozen column and the number ends up off the
 * right-hand edge, which is exactly the wrong half to lose.
 *
 * So these are drawn instead: one panel per class, the name on a coloured bar,
 * the rest of the row underneath it as labelled lines. Nothing is re-authored -
 * the shape is derived from the table that is already there, so a table that is
 * a classification becomes a figure and a table that is a comparison stays a
 * table.
 */
import type { NoteTable } from "./types";

export type FigureRow = { score: string; label: string };
export type FigureGroup = { name: string; max: string; rows: FigureRow[] };
export type FigurePanel = { key: string; fields: { label: string; value: string }[] };

export type Figure =
  /** A points ladder, in groups: the Glasgow Coma Scale's E, V and M. */
  | { layout: "ladder"; groups: FigureGroup[] }
  /** Named classes in order, each with its own attributes. */
  | { layout: "panels"; panels: FigurePanel[] };

/** A classification, a grading, a staging, a scale, a set of criteria. */
const NAMES_A_CLASS =
  /\b(classification|classif\w*|criteria|criterion|score|scoring|grading|grades?|stages?|staging|scale|index|severity|class|typing|types?)\b/i;

/** The column that holds the number you add up. */
const POINTS = /^(score|points?|marks?)$/i;

const isNumber = (v: string) => /^-?\d+(\.\d+)?$/.test(v.trim());

/** Runs of the same value in column 0 - what makes E, V and M three groups. */
function groupsOf(rows: string[][]): { name: string; rows: string[][] }[] {
  const out: { name: string; rows: string[][] }[] = [];
  for (const r of rows) {
    if (!out.length || out[out.length - 1].name !== r[0]) out.push({ name: r[0], rows: [] });
    out[out.length - 1].rows.push(r);
  }
  return out;
}

export function figureFromTable(t: NoteTable): Figure | null {
  const cols = t.columns;
  const rows = t.rows.filter((r) => r.length === cols.length);
  if (cols.length < 2 || rows.length < 2) return null;

  // A ladder: the last column is the points, and every cell in it is a number.
  // An interpretation row tacked on the bottom would fail that test, which is
  // the intended behaviour - a table carrying two shapes is not a figure.
  if (POINTS.test(cols[cols.length - 1].trim()) && rows.every((r) => isNumber(r[r.length - 1]))) {
    const grouped = cols.length >= 3 ? groupsOf(rows) : [{ name: "", rows }];
    // Only a real grouping is worth the panels; one row per group is a list.
    const useGroups = grouped.length >= 2 && grouped.some((g) => g.rows.length >= 2);
    const groups = (useGroups ? grouped : [{ name: "", rows }]).map((g) => {
      const scores = g.rows.map((r) => Number(r[r.length - 1])).filter((n) => Number.isFinite(n));
      return {
        name: g.name,
        max: scores.length ? String(Math.max(...scores)) : "",
        // Highest first: a ladder is read from the top down, and the best
        // response is the one a reader is checking for first.
        rows: g.rows
          .map((r) => ({ score: r[r.length - 1], label: r.slice(useGroups ? 1 : 0, -1).join(" - ") }))
          .sort((a, b) => Number(b.score) - Number(a.score)),
      };
    });
    return { layout: "ladder", groups };
  }

  // Named classes: the heading says it classifies something, column 0 names
  // each class exactly once, and the name is short enough to sit on a bar.
  if (!NAMES_A_CLASS.test(t.heading)) return null;
  if (cols.length > 5) return null;
  const keys = rows.map((r) => r[0]);
  if (new Set(keys).size !== keys.length) return null;
  if (keys.some((k) => k.length > 40)) return null;

  return {
    layout: "panels",
    panels: rows.map((r) => ({
      key: r[0],
      fields: cols.slice(1).map((c, i) => ({ label: c, value: r[i + 1] })),
    })),
  };
}
