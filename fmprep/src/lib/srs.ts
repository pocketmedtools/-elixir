/**
 * Spaced repetition (SM-2, the SuperMemo-2 scheduler Anki's default is built on).
 *
 * Four grades are offered to the learner: Again, Hard, Good, Easy. A lapse
 * (Again) sends the card back to a same-session relearn step rather than
 * deleting its history, so a card that keeps failing keeps coming back today.
 */
import type { CardState } from "./store";

export type Grade = "again" | "hard" | "good" | "easy";

/** SM-2 quality values for the four buttons. */
const QUALITY: Record<Grade, number> = { again: 2, hard: 3, good: 4, easy: 5 };

export const MIN_EASE = 1.3;
const DAY_MS = 86_400_000;

export function newCard(now: number): CardState {
  return { ease: 2.5, interval: 0, due: now, reps: 0, lapses: 0, lastAt: 0 };
}

/** The next scheduling state for a card, given how the learner graded it. */
export function schedule(card: CardState, grade: Grade, now: number): CardState {
  const q = QUALITY[grade];

  if (grade === "again") {
    return {
      ease: Math.max(MIN_EASE, card.ease - 0.2),
      interval: 0,
      // Ten minutes: the card returns in this same session.
      due: now + 10 * 60_000,
      reps: 0,
      lapses: card.lapses + 1,
      lastAt: now,
    };
  }

  const ease = Math.max(
    MIN_EASE,
    card.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)),
  );
  const reps = card.reps + 1;

  let interval: number;
  if (reps === 1) interval = grade === "easy" ? 3 : 1;
  else if (reps === 2) interval = grade === "easy" ? 8 : 6;
  else {
    const factor = grade === "hard" ? 1.2 : ease;
    interval = Math.round(Math.max(1, card.interval) * factor);
    if (grade === "easy") interval = Math.round(interval * 1.3);
  }
  // A ten-year ceiling keeps a runaway ease from parking a card past a career.
  interval = Math.min(interval, 3650);

  return { ease, interval, due: now + interval * DAY_MS, reps, lapses: card.lapses, lastAt: now };
}

/** Human-readable preview of where each button would send the card. */
export function intervalPreview(card: CardState, grade: Grade, now: number): string {
  const next = schedule(card, grade, now);
  if (next.interval === 0) return "10 min";
  if (next.interval === 1) return "1 day";
  if (next.interval < 30) return `${next.interval} days`;
  if (next.interval < 365) return `${Math.round(next.interval / 30)} mo`;
  return `${(next.interval / 365).toFixed(1)} y`;
}

export function isDue(card: CardState | undefined, now: number): boolean {
  return card == null || card.due <= now;
}

/** A card is "learned" once it has survived to a week-plus interval. */
export function isLearned(card: CardState | undefined): boolean {
  return card != null && card.interval >= 7;
}
