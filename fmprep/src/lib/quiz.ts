/**
 * Question-set construction and scoring.
 *
 * Practice sets favour what the learner has not seen and what they got wrong;
 * exam papers are drawn evenly across subjects so a mock score is comparable
 * between attempts. Order is deterministic per seed, so the same paper can be
 * rebuilt (and a session survives a reload) without storing every id.
 */
import type { Mcq } from "./types";
import type { McqState } from "./store";
import { allMcqs, mcqIndex, type IndexedMcq } from "../content/index";

export type QuizMode = "practice" | "exam";

export type QuizItem = {
  mcq: Mcq;
  subjectId: string;
  subjectTitle: string;
  topicId: string;
  topicTitle: string;
};

export type Answered = {
  /** Index chosen, or null when the question was skipped. */
  choice: number | null;
  correct: boolean;
};

/** Mulberry32 — small deterministic PRNG, so a seed reproduces a paper. */
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(items: T[], seed: number): T[] {
  const out = [...items];
  const rand = rng(seed);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Weight for practice selection: never-seen first, then previously wrong,
 * then long-untouched. Lower sorts earlier.
 */
function practiceRank(state: McqState | undefined, now: number): number {
  if (!state) return 0;
  const accuracy = state.seen > 0 ? state.correct / state.seen : 0;
  const daysSince = (now - state.lastAt) / 86_400_000;
  return 1 + accuracy * 10 - Math.min(daysSince, 30) / 10;
}

export type BuildOptions = {
  /** Restrict to these subject ids; empty means every subject. */
  subjectIds?: string[];
  topicId?: string;
  count: number;
  mode: QuizMode;
  seed: number;
  mcqStates: Record<string, McqState>;
  now: number;
  /** Practice only: draw solely from questions answered wrong before. */
  wrongOnly?: boolean;
};

export function buildQuiz(opts: BuildOptions): QuizItem[] {
  const { subjectIds, topicId, count, mode, seed, mcqStates, now, wrongOnly } = opts;

  let pool: IndexedMcq[] = allMcqs();
  if (topicId) pool = pool.filter((q) => q.topicId === topicId);
  else if (subjectIds && subjectIds.length > 0)
    pool = pool.filter((q) => subjectIds.includes(q.subjectId));
  if (wrongOnly) pool = pool.filter((q) => (mcqStates[q.mcq.id]?.wrong ?? 0) > 0);
  if (pool.length === 0) return [];

  if (mode === "exam") {
    // Even coverage: take round-robin from each subject's shuffled pile.
    const bySubject = new Map<string, IndexedMcq[]>();
    for (const q of pool) {
      const list = bySubject.get(q.subjectId) ?? [];
      list.push(q);
      bySubject.set(q.subjectId, list);
    }
    const piles = [...bySubject.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([, list], i) => shuffle(list, seed + i * 7919));
    const picked: IndexedMcq[] = [];
    for (let round = 0; picked.length < count; round++) {
      let addedThisRound = false;
      for (const pile of piles) {
        if (round < pile.length && picked.length < count) {
          picked.push(pile[round]);
          addedThisRound = true;
        }
      }
      if (!addedThisRound) break;
    }
    return shuffle(picked, seed).map(toItem);
  }

  const ranked = shuffle(pool, seed)
    .map((q) => ({ q, rank: practiceRank(mcqStates[q.mcq.id], now) }))
    .sort((a, b) => a.rank - b.rank)
    .slice(0, count)
    .map((r) => r.q);
  return shuffle(ranked, seed + 1).map(toItem);
}

function toItem(q: IndexedMcq): QuizItem {
  return {
    mcq: q.mcq,
    subjectId: q.subjectId,
    subjectTitle: q.subjectTitle,
    topicId: q.topicId,
    topicTitle: q.topicTitle,
  };
}

export function scoreBySubject(
  items: QuizItem[],
  answers: (Answered | undefined)[],
): Record<string, { correct: number; total: number }> {
  const out: Record<string, { correct: number; total: number }> = {};
  items.forEach((item, i) => {
    const bucket = out[item.subjectId] ?? { correct: 0, total: 0 };
    bucket.total++;
    if (answers[i]?.correct) bucket.correct++;
    out[item.subjectId] = bucket;
  });
  return out;
}

/** Look one question up by id — used by the "review a flagged question" links. */
export function findMcq(id: string): IndexedMcq | undefined {
  return mcqIndex().get(id);
}
