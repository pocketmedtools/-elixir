/**
 * Practice sets and mock papers.
 *
 * Practice mode marks each question as it is answered and shows the
 * explanation immediately, because that is when it is read. Exam mode holds
 * the marking back, runs a clock, and reports a score broken down by subject.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { getSubject, subjects } from "../content/index";
import { buildQuiz, scoreBySubject, type Answered, type QuizItem, type QuizMode } from "../lib/quiz";
import { getState, recordAnswer, recordExam } from "../lib/store";
import { BackBar, Chip, Empty } from "./ui";

export type QuizConfig = {
  mode: QuizMode;
  subjectIds: string[];
  topicId?: string;
  count: number;
  wrongOnly: boolean;
  minutes: number;
};

export function QuizSetup({
  onBack,
  onStart,
}: {
  onBack: () => void;
  onStart: (config: QuizConfig) => void;
}) {
  const settings = getState().settings;
  const [mode, setMode] = useState<QuizMode>("practice");
  const [selected, setSelected] = useState<string[]>([]);
  const [count, setCount] = useState(20);
  const [wrongOnly, setWrongOnly] = useState(false);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  const all = subjects();
  const pool = useMemo(() => {
    const chosen = selected.length ? all.filter((s) => selected.includes(s.id)) : all;
    return chosen.reduce((n, s) => n + s.topics.reduce((m, t) => m + t.mcqs.length, 0), 0);
  }, [all, selected]);

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Questions</h1>

      <div className="mt-4 flex gap-2">
        {(["practice", "exam"] as QuizMode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`flex-1 rounded-xl border p-3 text-left ${
              mode === m ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-800"
            }`}
          >
            <span className="block font-bold">{m === "practice" ? "Practice" : "Mock paper"}</span>
            <span className="mt-0.5 block text-xs opacity-80">
              {m === "practice"
                ? "Marked as you go, with the explanation each time"
                : `${settings.examSize} questions, ${settings.examMinutes} minutes, scored at the end`}
            </span>
          </button>
        ))}
      </div>

      <section className="mt-5">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Subjects {selected.length === 0 && "(all)"}
        </h2>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {all.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => toggle(s.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                selected.includes(s.id) ? "bg-teal-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
        {selected.length > 0 && (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="mt-2 text-xs font-semibold text-slate-600 underline"
          >
            Clear and use every subject
          </button>
        )}
      </section>

      {mode === "practice" && (
        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">How many</h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[10, 20, 30, 50].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setCount(n)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  count === n ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <label className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
            <input
              type="checkbox"
              checked={wrongOnly}
              onChange={(e) => setWrongOnly(e.target.checked)}
              className="h-4 w-4"
            />
            Only questions I have got wrong before
          </label>
        </section>
      )}

      <p className="mt-4 text-xs text-slate-600">{pool} questions available in that selection.</p>

      <button
        type="button"
        disabled={pool === 0}
        onClick={() =>
          onStart({
            mode,
            subjectIds: selected,
            count: mode === "exam" ? settings.examSize : count,
            wrongOnly,
            minutes: settings.examMinutes,
          })
        }
        className="mt-3 w-full rounded-xl bg-teal-900 px-4 py-3 text-sm font-bold text-white shadow-sm disabled:opacity-50"
      >
        {mode === "exam" ? "Start the mock paper" : "Start practising"}
      </button>
    </div>
  );
}

export function QuizSession({
  config,
  onExit,
  onOpenTopic,
}: {
  config: QuizConfig;
  onExit: () => void;
  onOpenTopic: (id: string) => void;
}) {
  const startedAt = useRef(Date.now());
  const seed = useRef(Math.floor(Math.random() * 1_000_000));
  const items = useMemo<QuizItem[]>(
    () =>
      buildQuiz({
        subjectIds: config.subjectIds,
        topicId: config.topicId,
        count: config.count,
        mode: config.mode,
        seed: seed.current,
        mcqStates: getState().mcqs,
        now: Date.now(),
        wrongOnly: config.wrongOnly,
      }),
    [config],
  );

  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<(Answered | undefined)[]>([]);
  const [choice, setChoice] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [remaining, setRemaining] = useState(config.minutes * 60);

  useEffect(() => {
    if (config.mode !== "exam" || done) return;
    const t = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          setDone(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [config.mode, done]);

  const finish = (finalAnswers: (Answered | undefined)[]) => {
    const at = Date.now();
    const correct = finalAnswers.filter((a) => a?.correct).length;
    if (config.mode === "exam") {
      recordExam({
        id: `x${at.toString(36)}`,
        at,
        label: config.subjectIds.length
          ? config.subjectIds.map((s) => getSubject(s)?.title ?? s).join(", ")
          : "All subjects",
        total: items.length,
        correct,
        durationMs: at - startedAt.current,
        subjects: config.subjectIds.length ? config.subjectIds : subjects().map((s) => s.id),
        bySubject: scoreBySubject(items, finalAnswers),
      });
    }
    setDone(true);
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
        <BackBar onBack={onExit} label="Questions" />
        <Empty
          title="No questions match that selection"
          body="If you asked for questions you have got wrong before, answer some first — or clear that filter."
        />
      </div>
    );
  }

  if (done) {
    const correct = answers.filter((a) => a?.correct).length;
    const bySubject = scoreBySubject(items, answers);
    const pct = Math.round((correct / items.length) * 100);
    return (
      <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
        <BackBar onBack={onExit} label="Questions" />
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
          {correct} out of {items.length} ({pct}%)
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          {config.mode === "exam" ? "Mock paper recorded in Progress." : "Practice set finished."}
        </p>

        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">By subject</h2>
          <ul className="mt-2 space-y-1.5">
            {Object.entries(bySubject)
              .sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total)
              .map(([id, s]) => (
                <li key={id} className="flex items-center justify-between gap-3 rounded-lg bg-white p-2.5 shadow-sm">
                  <span className="text-sm font-semibold text-slate-800">{getSubject(id)?.title ?? id}</span>
                  <span className="text-sm font-bold text-slate-900">
                    {s.correct}/{s.total}
                  </span>
                </li>
              ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Review</h2>
          <div className="mt-2 space-y-2">
            {items.map((item, idx) => {
              const a = answers[idx];
              const ok = a?.correct;
              return (
                <div
                  key={item.mcq.id}
                  className={`rounded-xl border p-3.5 ${ok ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {idx + 1}. {item.mcq.stem}
                  </p>
                  <p className="mt-1.5 text-sm">
                    <span className="font-semibold">Correct: </span>
                    {item.mcq.options[item.mcq.answer]}
                  </p>
                  {a?.choice != null && a.choice !== item.mcq.answer && (
                    <p className="mt-0.5 text-sm">
                      <span className="font-semibold">You chose: </span>
                      {item.mcq.options[a.choice]}
                    </p>
                  )}
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-800">{item.mcq.explanation}</p>
                  <button
                    type="button"
                    onClick={() => onOpenTopic(item.topicId)}
                    className="mt-2 text-xs font-semibold text-slate-700 underline"
                  >
                    Read {item.topicTitle}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  const item = items[i];
  const answered = answers[i];
  const showFeedback = config.mode === "practice" && answered != null;

  const submit = () => {
    if (choice == null) return;
    const correct = choice === item.mcq.answer;
    const next = [...answers];
    next[i] = { choice, correct };
    setAnswers(next);
    recordAnswer(item.mcq.id, choice, correct, Date.now());
    if (config.mode === "exam") {
      if (i + 1 < items.length) {
        setI(i + 1);
        setChoice(null);
      } else {
        finish(next);
      }
    }
  };

  const advance = () => {
    if (i + 1 < items.length) {
      setI(i + 1);
      setChoice(null);
    } else {
      finish(answers);
    }
  };

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar
        onBack={onExit}
        label="Exit"
        right={
          <>
            <Chip>
              {i + 1} / {items.length}
            </Chip>
            {config.mode === "exam" && (
              <Chip tone={remaining < 300 ? "blue" : "slate"}>
                {mm}:{ss}
              </Chip>
            )}
          </>
        }
      />

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-teal-700 transition-all"
          style={{ width: `${((i + (answered ? 1 : 0)) / items.length) * 100}%` }}
        />
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.subjectTitle}</p>
      <p className="mt-1 text-lg font-semibold leading-relaxed text-slate-900">{item.mcq.stem}</p>

      <div className="mt-4 space-y-2">
        {item.mcq.options.map((option, oi) => {
          const isChosen = (answered?.choice ?? choice) === oi;
          const isKey = oi === item.mcq.answer;
          let cls = "border-slate-200 bg-white";
          if (showFeedback) {
            if (isKey) cls = "border-emerald-400 bg-emerald-50";
            else if (isChosen) cls = "border-rose-400 bg-rose-50";
          } else if (isChosen) {
            cls = "border-slate-900 bg-slate-900 text-white";
          }
          return (
            <button
              key={oi}
              type="button"
              disabled={showFeedback}
              onClick={() => setChoice(oi)}
              className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition ${cls}`}
            >
              <span className="mt-0.5 shrink-0 font-bold">{String.fromCharCode(65 + oi)}.</span>
              <span className="leading-relaxed">{option}</span>
            </button>
          );
        })}
      </div>

      {showFeedback ? (
        <>
          <div
            className={`mt-4 rounded-xl border p-4 ${
              answered.correct ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"
            }`}
          >
            <p className="font-bold text-slate-900">{answered.correct ? "Correct" : "Not this one"}</p>
            <p className="mt-1 leading-relaxed text-slate-800">{item.mcq.explanation}</p>
            <button
              type="button"
              onClick={() => onOpenTopic(item.topicId)}
              className="mt-2 text-xs font-semibold text-slate-700 underline"
            >
              Read the topic: {item.topicTitle}
            </button>
          </div>
          <button
            type="button"
            onClick={advance}
            className="mt-3 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white"
          >
            {i + 1 < items.length ? "Next question" : "Finish"}
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={submit}
          disabled={choice == null}
          className="mt-4 w-full rounded-xl bg-teal-900 px-4 py-3 text-sm font-bold text-white disabled:opacity-50"
        >
          {config.mode === "exam" ? (i + 1 < items.length ? "Save and next" : "Save and finish") : "Check"}
        </button>
      )}
    </div>
  );
}
