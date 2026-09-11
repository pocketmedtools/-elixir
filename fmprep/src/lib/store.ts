/**
 * Device-local study state.
 *
 * Everything the learner does — cards scheduled, questions answered, topics
 * read, exams sat — lives in this browser's localStorage. There is no account
 * and no server, so the app stays usable offline and nothing leaves the phone.
 * React subscribes through useSyncExternalStore(subscribe, getVersion).
 */

export type CardState = {
  /** SM-2 ease factor; 1.3 is the floor. */
  ease: number;
  /** Current interval in days. */
  interval: number;
  /** Epoch ms when the card is next due. */
  due: number;
  reps: number;
  lapses: number;
  lastAt: number;
};

export type McqState = {
  seen: number;
  correct: number;
  wrong: number;
  lastAt: number;
  /** Index the learner last chose, so a review screen can show it. */
  lastChoice: number;
};

export type TopicState = {
  readAt: number;
  /** Times the topic reader was opened. */
  opens: number;
};

export type ExamAttempt = {
  id: string;
  at: number;
  label: string;
  total: number;
  correct: number;
  durationMs: number;
  /** Subject ids the paper drew from. */
  subjects: string[];
  /** Per-subject correct/total, for the score breakdown. */
  bySubject: Record<string, { correct: number; total: number }>;
};

export type Settings = {
  theme: "system" | "light" | "dark";
  /** Questions per generated mock exam. */
  examSize: number;
  /** Minutes allowed for a mock exam. */
  examMinutes: number;
  /** New cards introduced per day. */
  newCardsPerDay: number;
  /** Reader body size multiplier, 0.9 to 1.5. */
  readerScale: number;
  /** Serif body text — easier for long reading for some people. */
  readerSerif: boolean;
};

type State = {
  cards: Record<string, CardState>;
  mcqs: Record<string, McqState>;
  topics: Record<string, TopicState>;
  bookmarks: string[];
  exams: ExamAttempt[];
  /** Day-stamps (YYYY-MM-DD) on which anything was studied. */
  days: string[];
  settings: Settings;
  lastTopicId: string | null;
  /** Last imported document opened, so "continue reading" can offer it. */
  lastDocId: string | null;
  /** Scroll position per document id, so a long file reopens where it was left. */
  docPositions: Record<string, number>;
};

const KEY = "FMPREP_STATE_V1";

const DEFAULT_SETTINGS: Settings = {
  theme: "system",
  examSize: 50,
  examMinutes: 60,
  newCardsPerDay: 20,
  readerScale: 1,
  readerSerif: true,
};

const EMPTY: State = {
  cards: {},
  mcqs: {},
  topics: {},
  bookmarks: [],
  exams: [],
  days: [],
  settings: DEFAULT_SETTINGS,
  lastTopicId: null,
  lastDocId: null,
  docPositions: {},
};

let state: State = load();
let version = 0;
const listeners = new Set<() => void>();

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as Partial<State>;
    return {
      ...EMPTY,
      ...parsed,
      settings: { ...DEFAULT_SETTINGS, ...(parsed.settings ?? {}) },
    };
  } catch {
    return { ...EMPTY };
  }
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* private mode or a full quota: the session still works, it just won't persist */
  }
}

function commit(next: State) {
  state = next;
  persist();
  version++;
  for (const l of listeners) l();
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getVersion(): number {
  return version;
}

export function getState(): State {
  return state;
}

export function dayStamp(at: number): string {
  const d = new Date(at);
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function withStudyDay(next: State, at: number): State {
  const stamp = dayStamp(at);
  if (next.days.includes(stamp)) return next;
  // Keep a year of stamps — enough for the streak and the activity strip.
  return { ...next, days: [...next.days, stamp].slice(-400) };
}

/** Consecutive days ending today (or yesterday, so an evening learner keeps it). */
export function currentStreak(now: number): number {
  const set = new Set(state.days);
  const dayMs = 86_400_000;
  let cursor = now;
  if (!set.has(dayStamp(cursor))) {
    cursor -= dayMs;
    if (!set.has(dayStamp(cursor))) return 0;
  }
  let streak = 0;
  while (set.has(dayStamp(cursor))) {
    streak++;
    cursor -= dayMs;
  }
  return streak;
}

export function recordCard(id: string, card: CardState, at: number) {
  commit(
    withStudyDay(
      { ...state, cards: { ...state.cards, [id]: card } },
      at,
    ),
  );
}

export function recordAnswer(id: string, choice: number, isCorrect: boolean, at: number) {
  const prev = state.mcqs[id];
  const next: McqState = {
    seen: (prev?.seen ?? 0) + 1,
    correct: (prev?.correct ?? 0) + (isCorrect ? 1 : 0),
    wrong: (prev?.wrong ?? 0) + (isCorrect ? 0 : 1),
    lastAt: at,
    lastChoice: choice,
  };
  commit(withStudyDay({ ...state, mcqs: { ...state.mcqs, [id]: next } }, at));
}

export function markTopicRead(id: string, at: number) {
  const prev = state.topics[id];
  commit(
    withStudyDay(
      {
        ...state,
        lastTopicId: id,
        topics: { ...state.topics, [id]: { readAt: at, opens: (prev?.opens ?? 0) + 1 } },
      },
      at,
    ),
  );
}

export function setLastTopic(id: string) {
  if (state.lastTopicId === id) return;
  commit({ ...state, lastTopicId: id });
}

/** Remember where a long document was left, to the nearest scroll offset. */
export function rememberDoc(id: string, scrollTop: number) {
  const rounded = Math.round(scrollTop);
  if (state.lastDocId === id && state.docPositions[id] === rounded) return;
  commit({
    ...state,
    lastDocId: id,
    docPositions: { ...state.docPositions, [id]: rounded },
  });
}

export function docPosition(id: string): number {
  return state.docPositions[id] ?? 0;
}

export function toggleBookmark(topicId: string) {
  const has = state.bookmarks.includes(topicId);
  commit({
    ...state,
    bookmarks: has
      ? state.bookmarks.filter((b) => b !== topicId)
      : [topicId, ...state.bookmarks],
  });
}

export function isBookmarked(topicId: string): boolean {
  return state.bookmarks.includes(topicId);
}

export function recordExam(attempt: ExamAttempt) {
  commit(
    withStudyDay({ ...state, exams: [attempt, ...state.exams].slice(0, 100) }, attempt.at),
  );
}

export function updateSettings(patch: Partial<Settings>) {
  commit({ ...state, settings: { ...state.settings, ...patch } });
}

/** Clear one slice of progress, or everything. */
export function resetProgress(what: "cards" | "mcqs" | "topics" | "exams" | "all") {
  if (what === "all") {
    commit({ ...EMPTY, settings: state.settings });
    return;
  }
  if (what === "cards") commit({ ...state, cards: {} });
  if (what === "mcqs") commit({ ...state, mcqs: {} });
  if (what === "topics") commit({ ...state, topics: {}, bookmarks: state.bookmarks });
  if (what === "exams") commit({ ...state, exams: [] });
}

/** Everything the learner has done, as a JSON string for backup. */
export function exportState(): string {
  return JSON.stringify(state, null, 2);
}

export function importState(json: string): { ok: true } | { ok: false; error: string } {
  try {
    const parsed = JSON.parse(json) as Partial<State>;
    if (typeof parsed !== "object" || parsed === null) throw new Error("not an object");
    commit({
      ...EMPTY,
      ...parsed,
      settings: { ...DEFAULT_SETTINGS, ...(parsed.settings ?? {}) },
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Could not read that file." };
  }
}
