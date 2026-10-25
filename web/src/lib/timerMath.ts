/**
 * Countdown timer and stopwatch, kept as plain timestamps so the time stays
 * right when the screen is switched, the app is backgrounded or reloaded:
 * nothing counts ticks, every reading is computed from Date.now().
 */

export type CountdownStatus = "idle" | "running" | "paused" | "done";

export interface Countdown {
  /** Length chosen by the user. */
  totalMs: number;
  status: CountdownStatus;
  /** Wall-clock end while running. */
  endAt: number | null;
  /** Time left while idle or paused. */
  remainingMs: number;
}

export interface Stopwatch {
  running: boolean;
  /** Wall-clock start of the current running stretch. */
  startAt: number | null;
  /** Time banked from earlier stretches (before pauses). */
  baseMs: number;
  /** Elapsed time at each lap press, oldest first. */
  laps: number[];
}

export const MAX_TIMER_MS = (23 * 60 + 59) * 60000;

export const newCountdown = (totalMs = 0): Countdown => ({
  totalMs, status: "idle", endAt: null, remainingMs: totalMs,
});

export const newStopwatch = (): Stopwatch => ({ running: false, startAt: null, baseMs: 0, laps: [] });

export function hmToMs(hours: number, minutes: number): number {
  const h = Number.isFinite(hours) ? Math.max(0, Math.floor(hours)) : 0;
  const m = Number.isFinite(minutes) ? Math.max(0, Math.floor(minutes)) : 0;
  return Math.min((h * 60 + m) * 60000, MAX_TIMER_MS);
}

export function cdRemaining(c: Countdown, now: number): number {
  if (c.status === "running" && c.endAt != null) return Math.max(0, c.endAt - now);
  if (c.status === "done") return 0;
  return c.remainingMs;
}

/** Share of the set time still left, 0–1 (drives the green dial). */
export function cdFraction(c: Countdown, now: number): number {
  return c.totalMs > 0 ? Math.min(1, cdRemaining(c, now) / c.totalMs) : 0;
}

export function cdStart(c: Countdown, now: number): Countdown {
  if (c.status === "running" || c.remainingMs <= 0) return c;
  return { ...c, status: "running", endAt: now + c.remainingMs };
}

export function cdPause(c: Countdown, now: number): Countdown {
  if (c.status !== "running") return c;
  return { ...c, status: "paused", endAt: null, remainingMs: cdRemaining(c, now) };
}

/** Marks a running countdown as finished once its end time has passed. */
export function cdTick(c: Countdown, now: number): Countdown {
  if (c.status === "running" && c.endAt != null && now >= c.endAt) {
    return { ...c, status: "done", endAt: null, remainingMs: 0 };
  }
  return c;
}

export const cdReset = (c: Countdown): Countdown => newCountdown(c.totalMs);

/** "+1 min": extends a running/paused timer, or restarts a finished one. */
export function cdAdd(c: Countdown, ms: number, now: number): Countdown {
  if (c.status === "running" && c.endAt != null) {
    const left = Math.min(cdRemaining(c, now) + ms, MAX_TIMER_MS);
    return { ...c, endAt: now + left, totalMs: Math.max(c.totalMs, left) };
  }
  if (c.status === "done") {
    return { totalMs: ms, status: "running", endAt: now + ms, remainingMs: ms };
  }
  const left = Math.min(c.remainingMs + ms, MAX_TIMER_MS);
  return { ...c, remainingMs: left, totalMs: Math.max(c.totalMs, left) };
}

export function swElapsed(s: Stopwatch, now: number): number {
  return s.baseMs + (s.running && s.startAt != null ? Math.max(0, now - s.startAt) : 0);
}

export function swStart(s: Stopwatch, now: number): Stopwatch {
  return s.running ? s : { ...s, running: true, startAt: now };
}

export function swPause(s: Stopwatch, now: number): Stopwatch {
  return s.running ? { ...s, running: false, startAt: null, baseMs: swElapsed(s, now) } : s;
}

export function swLap(s: Stopwatch, now: number): Stopwatch {
  return s.running ? { ...s, laps: [...s.laps, swElapsed(s, now)] } : s;
}

export const swReset = (): Stopwatch => newStopwatch();

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Countdown display: whole seconds rounded UP, so "00:00:01" shows until the
 * time is truly over and the start shows the full time chosen.
 */
export function formatCountdown(ms: number): string {
  const t = Math.ceil(Math.max(0, ms) / 1000);
  return `${pad(Math.floor(t / 3600))}:${pad(Math.floor((t % 3600) / 60))}:${pad(t % 60)}`;
}

/** Stopwatch display: mm:ss.t, with hours in front once past an hour. */
export function formatStopwatch(ms: number): string {
  const t = Math.floor(Math.max(0, ms) / 100); // tenths
  const tenths = t % 10;
  const s = Math.floor(t / 10);
  const h = Math.floor(s / 3600);
  const body = `${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}.${tenths}`;
  return h > 0 ? `${h}:${body}` : body;
}

// ---------- Sub-timers inside a running countdown ----------
/**
 * Running time of the main countdown (pauses excluded) — the clock that
 * sub-timers are measured against, e.g. "2:00 → 2:50 of a 5-minute timer".
 */
export interface RunClock {
  baseMs: number;
  since: number | null;
}

export const newRunClock = (): RunClock => ({ baseMs: 0, since: null });
export const runElapsed = (c: RunClock, now: number): number => c.baseMs + (c.since != null ? Math.max(0, now - c.since) : 0);
export const runStart = (c: RunClock, now: number): RunClock => (c.since != null ? c : { ...c, since: now });
export const runStop = (c: RunClock, now: number): RunClock => (c.since == null ? c : { baseMs: runElapsed(c, now), since: null });

/** One sub-timer: start and end on the main timer's running clock (ms). */
export interface Segment {
  start: number;
  end: number | null;
}

export const openSegment = (segs: Segment[]): Segment | null => {
  const last = segs[segs.length - 1];
  return last && last.end == null ? last : null;
};

export function segStart(segs: Segment[], at: number): Segment[] {
  return openSegment(segs) ? segs : [...segs, { start: at, end: null }];
}

export function segStop(segs: Segment[], at: number): Segment[] {
  const open = openSegment(segs);
  if (!open) return segs;
  return [...segs.slice(0, -1), { start: open.start, end: Math.max(at, open.start) }];
}

export const segDuration = (s: Segment, at: number): number => Math.max(0, (s.end ?? at) - s.start);

/** "2:50" style position on the main timer (minutes:seconds, hours if needed). */
export function formatPosition(ms: number): string {
  const t = Math.floor(Math.max(0, ms) / 1000);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = String(t % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

/** "50 s", "1 min 05 s", "1 h 02 min 05 s" (whole seconds). */
export function formatDuration(ms: number): string {
  const t = Math.round(Math.max(0, ms) / 1000);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  if (h) return `${h} h ${String(m).padStart(2, "0")} min ${String(s).padStart(2, "0")} s`;
  if (m) return `${m} min ${String(s).padStart(2, "0")} s`;
  return `${s} s`;
}
