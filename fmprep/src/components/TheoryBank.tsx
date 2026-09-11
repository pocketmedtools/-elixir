/**
 * The written-paper bank: every theory question in the module, filtered by
 * paper, by how often the theme recurs, and by subject — with the model
 * answer one tap away.
 */
import { useMemo, useState } from "react";
import { allTheory, subjects } from "../content/index";
import { FREQUENCY_ORDER, type Frequency, type PaperId } from "../lib/types";
import TheoryAnswer from "./TheoryAnswer";
import { BackBar, Chip, Empty, FrequencyChip } from "./ui";

const PAPERS: PaperId[] = ["I", "II", "III", "IV"];

export default function TheoryBank({
  onBack,
  onOpenTopic,
  initialId,
}: {
  onBack: () => void;
  onOpenTopic: (id: string) => void;
  initialId?: string;
}) {
  const [paper, setPaper] = useState<PaperId | "all">("all");
  const [band, setBand] = useState<Frequency | "all">("all");
  const [subjectId, setSubjectId] = useState<string | "all">("all");
  const [open, setOpen] = useState<string | null>(initialId ?? null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>(initialId ? { [initialId]: true } : {});

  const subjectList = subjects();
  const all = allTheory();
  const list = useMemo(() => {
    const filtered = all.filter(
      (t) =>
        (paper === "all" || t.question.paper === paper) &&
        (band === "all" || t.question.frequency === band) &&
        (subjectId === "all" || t.subjectId === subjectId),
    );
    return filtered.sort(
      (a, b) =>
        FREQUENCY_ORDER.indexOf(a.question.frequency) - FREQUENCY_ORDER.indexOf(b.question.frequency) ||
        b.question.marks - a.question.marks,
    );
  }, [all, paper, band, subjectId]);

  const filterBtn = (active: boolean) =>
    `rounded-full px-3.5 py-2 text-[13px] font-semibold transition ${
      active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />
      <h1 className="mt-5 text-[26px] font-bold leading-tight tracking-tight text-slate-900">Theory question bank</h1>
      <p className="mt-2 text-[17.5px] leading-[1.7] text-slate-700">
        {all.length} written-paper questions in the shapes the papers actually use — long answers, short notes,
        enumerations and differentiations — each with a model answer written in the order it should be put down.
      </p>

      <div className="mt-4 space-y-2">
        <div className="flex flex-wrap gap-1.5">
          <button type="button" className={filterBtn(paper === "all")} onClick={() => setPaper("all")}>
            All papers
          </button>
          {PAPERS.map((p) => (
            <button key={p} type="button" className={filterBtn(paper === p)} onClick={() => setPaper(p)}>
              Paper {p}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button type="button" className={filterBtn(band === "all")} onClick={() => setBand("all")}>
            Any frequency
          </button>
          {FREQUENCY_ORDER.map((f) => (
            <button key={f} type="button" className={filterBtn(band === f)} onClick={() => setBand(f)}>
              {f === "less-common" ? "Less common" : f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <select
          value={subjectId}
          onChange={(e) => setSubjectId(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base font-semibold text-slate-800"
        >
          <option value="all">Every subject</option>
          {subjectList.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-[13px] text-slate-500">{list.length} questions</p>

      {list.length === 0 ? (
        <Empty title="Nothing matches those filters" body="Widen the paper or frequency filter to see questions again." />
      ) : (
        <div className="mt-3 space-y-3">
          {list.map((t) => {
            const isOpen = open === t.question.id;
            return (
              <div key={t.question.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : t.question.id)}
                  className="flex w-full items-start gap-2 p-4 text-left"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[17.5px] font-semibold leading-[1.5] text-slate-900">{t.question.question}</span>
                    <span className="mt-2.5 flex flex-wrap items-center gap-2">
                      <Chip tone="blue">Paper {t.question.paper}</Chip>
                      <Chip>{t.question.marks} marks</Chip>
                      <Chip>{t.question.minutes} min</Chip>
                      <FrequencyChip frequency={t.question.frequency} />
                      <Chip tone="teal">{t.subjectTitle}</Chip>
                    </span>
                  </span>
                  <span aria-hidden className="text-slate-400">{isOpen ? "▾" : "▸"}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-4 pb-5">
                    {!revealed[t.question.id] ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setRevealed((r) => ({ ...r, [t.question.id]: true }))}
                          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
                        >
                          Show the model answer
                        </button>
                        <button
                          type="button"
                          onClick={() => onOpenTopic(t.topicId)}
                          className="rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] font-semibold text-slate-800"
                        >
                          Read the topic first
                        </button>
                      </div>
                    ) : (
                      <>
                        <TheoryAnswer question={t.question} />
                        <button
                          type="button"
                          onClick={() => onOpenTopic(t.topicId)}
                          className="mt-4 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
                        >
                          Open the full topic: {t.topicTitle}
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
