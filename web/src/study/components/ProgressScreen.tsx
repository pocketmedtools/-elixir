/**
 * Progress: what has been read, what is due, where the weak subjects are, and
 * the mock papers already sat. Also the door out — export and reset.
 */
import { useSyncExternalStore } from "react";
import { allCards, allMcqs, contentCounts, getSubject, subjects } from "../content/index";
import {
  currentStreak,
  exportState,
  getState,
  getVersion,
  importState,
  resetProgress,
  subscribe,
  updateSettings,
} from "../lib/store";
import { isDue, isLearned } from "../lib/srs";
import { BackBar, Chip, Empty } from "./ui";

export default function ProgressScreen({ onBack }: { onBack: () => void }) {
  useSyncExternalStore(subscribe, getVersion);
  const now = Date.now();
  const state = getState();
  const counts = contentCounts();

  const cards = allCards();
  const due = cards.filter((c) => state.cards[c.card.id] && isDue(state.cards[c.card.id], now)).length;
  const learned = cards.filter((c) => isLearned(state.cards[c.card.id])).length;
  const answered = Object.values(state.mcqs).reduce((n, m) => n + m.seen, 0);
  const correct = Object.values(state.mcqs).reduce((n, m) => n + m.correct, 0);

  const bySubject = subjects().map((s) => {
    const ids = new Set(s.topics.flatMap((t) => t.mcqs.map((q) => q.id)));
    let seen = 0;
    let right = 0;
    for (const [id, m] of Object.entries(state.mcqs)) {
      if (!ids.has(id)) continue;
      seen += m.seen;
      right += m.correct;
    }
    const read = s.topics.filter((t) => state.topics[t.id]).length;
    return { subject: s, seen, right, read, total: s.topics.length };
  });

  const weak = bySubject
    .filter((r) => r.seen >= 5)
    .sort((a, b) => a.right / a.seen - b.right / b.seen)
    .slice(0, 5);

  const stat = (label: string, value: string) => (
    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
      <p className="text-xl font-bold text-slate-900">{value}</p>
      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  );

  const doExport = () => {
    const blob = new Blob([exportState()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fm-study-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Progress</h1>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stat("day streak", String(currentStreak(now)))}
        {stat("topics opened", `${Object.keys(state.topics).length}/${counts.topics}`)}
        {stat("questions answered", String(answered))}
        {stat("accuracy", answered ? `${Math.round((correct / answered) * 100)}%` : "—")}
        {stat("cards learned", `${learned}/${cards.length}`)}
        {stat("cards due now", String(due))}
        {stat("MCQs available", String(allMcqs().length))}
        {stat("mock papers", String(state.exams.length))}
      </div>

      {weak.length > 0 && (
        <section className="mt-7">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Weakest subjects so far</h2>
          <ul className="mt-2 space-y-1.5">
            {weak.map((r) => (
              <li
                key={r.subject.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm"
              >
                <span className="text-sm font-semibold text-slate-800">{r.subject.title}</span>
                <span className="text-sm font-bold text-slate-900">
                  {Math.round((r.right / r.seen) * 100)}% of {r.seen}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-7">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Coverage by subject</h2>
        <ul className="mt-2 space-y-1.5">
          {bySubject.map((r) => (
            <li key={r.subject.id} className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-800">{r.subject.title}</span>
                <span className="text-xs text-slate-500">
                  {r.read}/{r.total}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{ width: `${r.total ? (r.read / r.total) * 100 : 0}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-7">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Mock papers</h2>
        {state.exams.length === 0 ? (
          <Empty title="No mock papers yet" body="Sit one from the questions screen — it is scored and kept here." />
        ) : (
          <ul className="mt-2 space-y-1.5">
            {state.exams.map((e) => (
              <li key={e.id} className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-slate-900">
                    {e.correct}/{e.total} ({Math.round((e.correct / e.total) * 100)}%)
                  </span>
                  <span className="text-xs text-slate-500">
                    {new Date(e.at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-600">
                  {e.label} · {Math.round(e.durationMs / 60000)} min
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {Object.entries(e.bySubject).map(([id, s]) => (
                    <Chip key={id}>
                      {getSubject(id)?.title ?? id} {s.correct}/{s.total}
                    </Chip>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Settings</h2>
        <label className="mt-3 block text-sm font-semibold text-slate-800">
          Questions in a mock paper
          <input
            type="number"
            min={10}
            max={200}
            value={state.settings.examSize}
            onChange={(e) => updateSettings({ examSize: Math.max(10, Math.min(200, Number(e.target.value) || 50)) })}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
          />
        </label>
        <label className="mt-3 block text-sm font-semibold text-slate-800">
          Minutes for a mock paper
          <input
            type="number"
            min={10}
            max={240}
            value={state.settings.examMinutes}
            onChange={(e) =>
              updateSettings({ examMinutes: Math.max(10, Math.min(240, Number(e.target.value) || 60)) })
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
          />
        </label>
        <label className="mt-3 block text-sm font-semibold text-slate-800">
          New flashcards a day
          <input
            type="number"
            min={5}
            max={100}
            value={state.settings.newCardsPerDay}
            onChange={(e) =>
              updateSettings({ newCardsPerDay: Math.max(5, Math.min(100, Number(e.target.value) || 20)) })
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={doExport}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
          >
            Export progress
          </button>
          <label className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800">
            Import progress
            <input
              type="file"
              accept="application/json"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                if (!file) return;
                const result = importState(await file.text());
                if (!result.ok) window.alert(`Could not import that file: ${result.error}`);
              }}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Clear all study progress on this device? Your imported documents are not touched."))
                resetProgress("all");
            }}
            className="rounded-lg border border-rose-300 bg-white px-3 py-2 text-sm font-semibold text-rose-800"
          >
            Reset progress
          </button>
        </div>
      </section>
    </div>
  );
}
