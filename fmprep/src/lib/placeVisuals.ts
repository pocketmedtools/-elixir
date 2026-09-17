/**
 * Which prose section does a chart or a table belong beside?
 *
 * Every diagram used to be emitted in one block at the top of a topic and
 * every table in another at the bottom, which left the middle - well over a
 * hundred points in a big topic - as unbroken prose. A reader got a picture, a
 * wall, and then more pictures.
 *
 * Matching is by the words two headings share. That is crude, and it is still
 * far better than not trying: an unmatched visual has to be emitted somewhere,
 * and next to a section about the same subject beats nowhere near it. Anything
 * that matches nothing is given to whichever section is longest and has none,
 * because that is where a reader most needs the break; only what is left after
 * that opens the topic, the way everything used to.
 */

const STOP = new Set([
  "the", "and", "for", "with", "from", "that", "this", "what", "when", "how",
  "why", "its", "are", "was", "not", "but", "all", "any", "out", "who", "get",
  "use", "into", "than", "then", "them", "they", "been", "have", "has", "had",
  "his", "her", "she", "him", "you", "your", "our", "can", "may", "will",
  "would", "should", "could", "about", "after", "before", "during", "each",
  "more", "most", "other", "some", "such", "only", "own", "same", "very",
  "just", "also", "first", "second", "third",
]);

const words = (s: string) =>
  new Set((s.toLowerCase().match(/[a-z]{3,}/g) ?? []).filter((w) => !STOP.has(w)));

const overlap = (a: Set<string>, b: Set<string>) => {
  let n = 0;
  for (const w of a) if (b.has(w)) n++;
  return n;
};

/** At most this many visuals sit under one section, so none becomes a gallery. */
const CAP = 2;

export type Placed<V> = {
  /** Visuals to emit after the section at each index. */
  after: V[][];
  /** Visuals that matched nothing and had nowhere to go; these open the topic. */
  opener: V[];
};

export function placeVisuals<V extends { heading: string }>(
  sections: { heading: string; points: unknown[] }[],
  visuals: V[],
): Placed<V> {
  const secWords = sections.map((s) => words(s.heading));
  const after: V[][] = sections.map(() => []);
  const spare: V[] = [];

  for (const v of visuals) {
    const vw = words(v.heading);
    let best = -1;
    let bestScore = 0;
    for (let i = 0; i < secWords.length; i++) {
      const score = overlap(vw, secWords[i]);
      if (score > bestScore && after[i].length < CAP) {
        bestScore = score;
        best = i;
      }
    }
    if (best >= 0) after[best].push(v);
    else spare.push(v);
  }

  const empty = sections
    .map((_, i) => i)
    .filter((i) => after[i].length === 0)
    .sort((a, b) => sections[b].points.length - sections[a].points.length);

  const opener: V[] = [];
  for (const v of spare) {
    const i = empty.shift();
    if (i === undefined) opener.push(v);
    else after[i].push(v);
  }

  return { after, opener };
}
