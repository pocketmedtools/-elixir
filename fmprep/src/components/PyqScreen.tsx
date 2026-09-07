/**
 * Previous-year questions, session by session.
 *
 * Each question shows where its wording came from, which subjects it belongs
 * to, and a direct route into the library topic that answers it — so a
 * revision session can run straight from "this was asked" to "this is the
 * answer".
 */
import { useMemo, useState } from "react";
import { PYQ_BANK, questionsByPaper, sessions, themesByPaper } from "../pyq/index";
import { PROVENANCE_LABEL, type Provenance } from "../lib/pyqTypes";
import { getSubjectMeta } from "../content/index";
import type { PaperId } from "../lib/types";
import { BackBar, Callout, Chip, Empty, SectionBlock } from "./ui";

const PAPERS: PaperId[] = ["I", "II", "III", "IV"];

const PROVENANCE_TONE: Record<Provenance, string> = {
  "official-paper": "bg-emerald-100 text-emerald-900",
  "published-compilation": "bg-sky-100 text-sky-900",
  "candidate-recall": "bg-amber-100 text-amber-900",
};

export default function PyqScreen({
  onBack,
  onOpenTopic,
}: {
  onBack: () => void;
  onOpenTopic: (id: string) => void;
}) {
  const [paper, setPaper] = useState<PaperId | "all">("all");
  const [session, setSession] = useState<string | "all">("all");
  const [open, setOpen] = useState<string | null>(null);
  const [view, setView] = useState<"questions" | "themes">("questions");

  const all = questionsByPaper(paper);
  const list = useMemo(
    () => (session === "all" ? all : all.filter((q) => q.session === session)),
    [all, session],
  );
  const themes = themesByPaper(paper);
  const sittings = sessions();

  const btn = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-xs font-semibold transition ${
      active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Home" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
        Previous-year questions
      </h1>
      <p className="mt-1 leading-relaxed text-slate-700">
        {PYQ_BANK.questions.length} questions from {sittings.length} sittings, each linked to the
        topic that answers it.
      </p>

      <Callout tone="note" title="Where these come from" items={[PYQ_BANK.sourceNote]} />

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setView("questions")}
          className={`flex-1 rounded-xl border p-2.5 text-sm font-bold ${
            view === "questions"
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-white text-slate-800"
          }`}
        >
          Questions
        </button>
        <button
          type="button"
          onClick={() => setView("themes")}
          className={`flex-1 rounded-xl border p-2.5 text-sm font-bold ${
            view === "themes"
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-white text-slate-800"
          }`}
        >
          Repeating themes ({PYQ_BANK.themes.length})
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <button type="button" className={btn(paper === "all")} onClick={() => setPaper("all")}>
          All papers
        </button>
        {PAPERS.map((p) => (
          <button key={p} type="button" className={btn(paper === p)} onClick={() => setPaper(p)}>
            Paper {p}
          </button>
        ))}
      </div>

      {view === "questions" && sittings.length > 1 && (
        <select
          value={session}
          onChange={(e) => setSession(e.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
        >
          <option value="all">Every sitting</option>
          {sittings.map((s) => (
            <option key={s.session} value={s.session}>
              {s.session} ({s.count})
            </option>
          ))}
        </select>
      )}

      {view === "themes" ? (
        themes.length === 0 ? (
          <Empty title="No themes for that paper yet" body="Switch the paper filter back to All." />
        ) : (
          <div className="mt-4 space-y-2">
            {themes.map((t) => (
              <div key={t.id} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-slate-900">{t.theme}</span>
                  <Chip tone="blue">Paper {t.paper}</Chip>
                  <Chip>{t.sessions.length} sittings</Chip>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{t.note}</p>
                <p className="mt-1.5 text-xs text-slate-500">Seen in: {t.sessions.join(" · ")}</p>
                {t.topicIds.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {t.topicIds.map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => onOpenTopic(id)}
                        className="rounded-full border border-slate-300 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Read the topic
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )
      ) : list.length === 0 ? (
        <Empty title="Nothing matches those filters" body="Widen the paper or the sitting." />
      ) : (
        <>
          <p className="mt-3 text-xs text-slate-500">{list.length} questions</p>
          <div className="mt-2 space-y-2">
            {list.map((q) => {
              const isOpen = open === q.id;
              return (
                <div key={q.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : q.id)}
                    className="flex w-full items-start gap-2 p-3.5 text-left"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold leading-snug text-slate-900">
                        {q.question}
                      </span>
                      <span className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <Chip tone="blue">Paper {q.paper}</Chip>
                        <Chip>{q.session}</Chip>
                        {q.marks > 0 && <Chip>{q.marks} marks</Chip>}
                        <span
                          className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${PROVENANCE_TONE[q.provenance]}`}
                        >
                          {q.provenance === "official-paper"
                            ? "Official"
                            : q.provenance === "published-compilation"
                              ? "Compilation"
                              : "Recalled"}
                        </span>
                      </span>
                    </span>
                    <span aria-hidden className="text-slate-400">
                      {isOpen ? "▾" : "▸"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-3.5 pb-4 pt-3">
                      <p className="text-xs text-slate-600">{PROVENANCE_LABEL[q.provenance]}</p>
                      {q.note && <p className="mt-1 text-xs text-slate-600">{q.note}</p>}

                      {q.subjectIds.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {q.subjectIds.map((id) => (
                            <Chip key={id} tone="teal">
                              {getSubjectMeta(id)?.title ?? id}
                            </Chip>
                          ))}
                        </div>
                      )}

                      {q.topicIds.length > 0 ? (
                        <div className="mt-3">
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                            Answer it from
                          </p>
                          <div className="mt-1.5 flex flex-col gap-1.5">
                            {q.topicIds.map((id) => (
                              <button
                                key={id}
                                type="button"
                                onClick={() => onOpenTopic(id)}
                                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
                              >
                                Open the topic →
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {q.answerPlan && q.answerPlan.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                            How to build the answer
                          </p>
                          {q.answerPlan.map((s, i) => (
                            <SectionBlock key={i} section={s} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {PYQ_BANK.references.length > 0 && (
        <section className="mt-8 border-t border-slate-200 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Sources</h2>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-600">
            {PYQ_BANK.references.map((r, i) => (
              <li key={i}>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noreferrer" className="underline">
                    {r.label}
                  </a>
                ) : (
                  r.label
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
