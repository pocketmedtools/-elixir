/**
 * What a past question is worth, and how often it has actually been asked.
 *
 * The papers already carry the sitting and the total marks. Two things a
 * candidate wants were still missing.
 *
 * The mark split is written inside the question text, in the examiner's own
 * bracket notation - "[2+2+3+3]", or a "[3]" after each part. That is the most
 * useful line on the page, because it says how long to spend on each half of
 * an answer, and it was being read as ordinary prose.
 *
 * How often a question has been asked was not derivable at all. It matters
 * more than any of it: a question that has come up in four sittings is the one
 * to learn first. Questions are never repeated word for word, so they are
 * clustered on the significant words they share rather than matched exactly.
 */

export type MarkSplit = {
  /** The parts as the examiner wrote them, in order. */
  parts: number[];
  /** Their sum, which should equal the question's marks; it sometimes does not. */
  total: number;
  /** True when the parts do not add up to the stated total. */
  disagrees: boolean;
};

/**
 * Pulls "[2+2+3+3]" and the scattered "[3]" form out of a question.
 *
 * A single bracketed number is only a split if there are several of them: one
 * "[10]" at the end is the total restated, not a breakdown.
 */
export function markSplit(question: string, stated: number): MarkSplit | null {
  const plus = question.match(/\[\s*(\d+(?:\s*\+\s*\d+)+)\s*\]/);
  if (plus) {
    const parts = plus[1].split("+").map((n) => Number(n.trim())).filter((n) => n > 0);
    const total = parts.reduce((a, b) => a + b, 0);
    return { parts, total, disagrees: stated > 0 && total !== stated };
  }
  const singles = [...question.matchAll(/\[\s*(\d+)\s*\]/g)].map((m) => Number(m[1]));
  if (singles.length >= 2) {
    const total = singles.reduce((a, b) => a + b, 0);
    return { parts: singles, total, disagrees: stated > 0 && total !== stated };
  }
  return null;
}

/** Words worth comparing: the short ones are grammar, not subject matter. */
const STOP = new Set([
  "the", "and", "for", "with", "from", "that", "this", "what", "when", "how",
  "will", "you", "your", "are", "was", "were", "has", "have", "had", "his",
  "her", "she", "him", "they", "them", "its", "not", "but", "all", "any",
  "who", "can", "may", "would", "should", "could", "about", "write", "briefly",
  "describe", "discuss", "enumerate", "mention", "outline", "give", "explain",
  "short", "note", "notes", "following", "patient", "year", "years", "old",
  "man", "woman", "male", "female", "came", "come", "comes", "presents",
  "presented", "clinic", "opd", "history", "case",
]);

const signature = (q: string) =>
  new Set((q.toLowerCase().match(/[a-z]{4,}/g) ?? []).filter((w) => !STOP.has(w)));

const jaccard = (a: Set<string>, b: Set<string>) => {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const w of a) if (b.has(w)) shared++;
  return shared / (a.size + b.size - shared);
};

/** Two questions count as the same question above this much overlap. */
const SAME = 0.5;

export type Repeat = {
  /** How many sittings this question has appeared in, counting itself. */
  times: number;
  /** Those sittings, newest first. */
  sittings: string[];
};

type Askable = { id: string; question: string; session: string; year: number };

/**
 * Clusters near-identical questions and reports, per question id, how many
 * distinct sittings it has come up in.
 *
 * Comparing every question with every other is quadratic, so candidates are
 * first bucketed by their rarest word: two questions that share no word at all
 * cannot clear the threshold, and this skips almost all of the pairs.
 */
export function repeatIndex(questions: Askable[]): Record<string, Repeat> {
  const sigs = questions.map((q) => signature(q.question));

  const freq = new Map<string, number>();
  for (const s of sigs) for (const w of s) freq.set(w, (freq.get(w) ?? 0) + 1);

  const buckets = new Map<string, number[]>();
  sigs.forEach((s, i) => {
    let rarest = "";
    let best = Infinity;
    for (const w of s) {
      const f = freq.get(w) ?? 0;
      if (f < best) { best = f; rarest = w; }
    }
    if (rarest) (buckets.get(rarest) ?? buckets.set(rarest, []).get(rarest)!).push(i);
  });

  // Union-find over the candidate pairs.
  const parent = questions.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const union = (a: number, b: number) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[ra] = rb; };

  for (const idxs of buckets.values()) {
    if (idxs.length < 2 || idxs.length > 400) continue;
    for (let a = 0; a < idxs.length; a++)
      for (let b = a + 1; b < idxs.length; b++)
        if (jaccard(sigs[idxs[a]], sigs[idxs[b]]) >= SAME) union(idxs[a], idxs[b]);
  }

  const groups = new Map<number, number[]>();
  questions.forEach((_, i) => {
    const r = find(i);
    (groups.get(r) ?? groups.set(r, []).get(r)!).push(i);
  });

  const out: Record<string, Repeat> = {};
  for (const members of groups.values()) {
    const sittings = [...new Set(members.map((i) => questions[i].session))]
      .sort((a, b) => {
        const ya = questions.find((q) => q.session === a)?.year ?? 0;
        const yb = questions.find((q) => q.session === b)?.year ?? 0;
        return yb - ya || b.localeCompare(a);
      });
    for (const i of members) out[questions[i].id] = { times: sittings.length, sittings };
  }
  return out;
}
