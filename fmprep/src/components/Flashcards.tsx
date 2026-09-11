/**
 * Spaced-repetition review.
 *
 * Due cards first, then new ones up to the daily limit. Four grades, each
 * showing where it would send the card, so the choice is informed.
 */
import { useMemo, useState } from "react";
import { allCards } from "../content/index";
import { getState, recordCard } from "../lib/store";
import { intervalPreview, isDue, newCard, schedule, type Grade } from "../lib/srs";
import { BackBar, Chip, Empty } from "./ui";

const GRADES: { grade: Grade; label: string; cls: string }[] = [
  { grade: "again", label: "Again", cls: "bg-rose-700" },
  { grade: "hard", label: "Hard", cls: "bg-amber-700" },
  { grade: "good", label: "Good", cls: "bg-teal-800" },
  { grade: "easy", label: "Easy", cls: "bg-emerald-700" },
];

export default function Flashcards({
  onBack,
  onOpenTopic,
  subjectId,
}: {
  onBack: () => void;
  onOpenTopic: (id: string) => void;
  subjectId?: string;
}) {
  const now = Date.now();
  const state = getState();
  const [reviewed, setReviewed] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionSeen, setSessionSeen] = useState<string[]>([]);

  const queue = useMemo(() => {
    const pool = allCards().filter((c) => !subjectId || c.subjectId === subjectId);
    const due = pool.filter((c) => state.cards[c.card.id] && isDue(state.cards[c.card.id], now));
    const fresh = pool.filter((c) => !state.cards[c.card.id]).slice(0, state.settings.newCardsPerDay);
    return [...due, ...fresh];
    // The queue is rebuilt whenever a card is graded, which is what `reviewed`
    // is doing in the dependency list.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewed, subjectId]);

  const remaining = queue.filter((c) => !sessionSeen.includes(c.card.id));
  const current = remaining[0];

  if (!current) {
    return (
      <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
        <BackBar onBack={onBack} label="Study" />
        <Empty
          title={reviewed > 0 ? `${reviewed} cards reviewed — nothing else is due` : "Nothing is due right now"}
          body="Cards come back on their own schedule. Read a topic or answer some questions, and check again later."
        />
      </div>
    );
  }

  const cardState = state.cards[current.card.id] ?? newCard(now);

  const grade = (g: Grade) => {
    recordCard(current.card.id, schedule(cardState, g, now), now);
    setSessionSeen((s) => (g === "again" ? s : [...s, current.card.id]));
    setReviewed((n) => n + 1);
    setFlipped(false);
  };

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar
        onBack={onBack}
        label="Study"
        right={
          <>
            <Chip>{remaining.length} left</Chip>
            <Chip tone="teal">{reviewed} done</Chip>
          </>
        }
      />

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {current.subjectTitle} · {current.topicTitle}
      </p>

      <button
        type="button"
        onClick={() => setFlipped(true)}
        className="mt-2 min-h-[11rem] w-full rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm"
      >
        <p className="text-[19.5px] font-semibold leading-[1.5] text-slate-900">{current.card.front}</p>
        {flipped ? (
          <p className="mt-5 border-t border-slate-200 pt-5 text-[17.5px] leading-[1.7] text-slate-800">{current.card.back}</p>
        ) : (
          <p className="mt-5 text-[15px] text-slate-500">Tap to see the answer</p>
        )}
      </button>

      {flipped && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {GRADES.map((g) => (
            <button
              key={g.grade}
              type="button"
              onClick={() => grade(g.grade)}
              className={`rounded-xl px-2 py-3 text-center text-white ${g.cls}`}
            >
              <span className="block text-sm font-bold">{g.label}</span>
              <span className="mt-1 block text-[13px] opacity-90">
                {intervalPreview(cardState, g.grade, now)}
              </span>
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => onOpenTopic(current.topicId)}
        className="mt-4 text-xs font-semibold text-slate-600 underline"
      >
        Read the topic this card came from
      </button>
    </div>
  );
}
