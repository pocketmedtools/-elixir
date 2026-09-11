/**
 * The examination blueprint: what the papers are, what the practical is, how
 * the marks fall, and how to write an answer that collects them.
 */
import { useState } from "react";
import blueprint from "../examPattern";
import type { PaperId } from "../lib/types";
import { BackBar, Chip, FrequencyChip, SectionBlock, TableBlock } from "./ui";

export default function ExamPatternScreen({ onBack }: { onBack: () => void }) {
  const [openPaper, setOpenPaper] = useState<PaperId | null>(blueprint.papers[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />

      <header className="mt-5">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900">{blueprint.title}</h1>
        <div className="mt-3 space-y-2 leading-relaxed text-slate-800">
          {blueprint.overview.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[15.5px] leading-[1.65] text-amber-950">
          {blueprint.sourceNote}
        </p>
      </header>

      <section className="mt-7">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">The theory papers</h2>
        <div className="mt-2 space-y-2">
          {blueprint.papers.map((paper) => {
            const open = openPaper === paper.id;
            return (
              <div key={paper.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenPaper(open ? null : paper.id)}
                  className="flex w-full items-start gap-2 p-3.5 text-left"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-slate-900">
                      Paper {paper.id} — {paper.title}
                    </span>
                    <span className="mt-1 flex flex-wrap gap-1.5">
                      <Chip tone="blue">{paper.marks} marks</Chip>
                      <Chip>{paper.minutes} minutes</Chip>
                    </span>
                  </span>
                  <span aria-hidden className="text-slate-400">{open ? "▾" : "▸"}</span>
                </button>
                {open && (
                  <div className="border-t border-slate-100 px-3.5 pb-4 pt-3">
                    <h3 className="text-[18px] font-bold text-slate-900">What it covers</h3>
                    <ul className="mt-2.5 space-y-2.5 text-[16.5px] leading-[1.7] text-slate-800">
                      {paper.covers.map((c, i) => (
                        <li key={i} className="flex gap-2">
                          <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-4 text-[18px] font-bold text-slate-900">How the paper is built</h3>
                    <ul className="mt-2.5 space-y-2.5 text-[16.5px] leading-[1.7] text-slate-800">
                      {paper.structure.map((s, i) => (
                        <li key={i} className="flex gap-2">
                          <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>

                    {paper.recurringThemes.length > 0 && (
                      <>
                        <h3 className="mt-4 text-[18px] font-bold text-slate-900">Themes that keep coming back</h3>
                        <ul className="mt-2 space-y-2">
                          {paper.recurringThemes.map((t, i) => (
                            <li key={i} className="rounded-lg border border-slate-200 p-2.5">
                              <span className="flex flex-wrap items-center gap-2">
                                <span className="font-semibold text-slate-900">{t.theme}</span>
                                <FrequencyChip frequency={t.frequency} />
                              </span>
                              <span className="mt-1.5 block text-[16px] leading-[1.65] text-slate-700">{t.note}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">The practical examination</h2>
        <div className="mt-2 space-y-2">
          {blueprint.practical.map((component, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[17.5px] font-bold text-slate-900">{component.name}</span>
                {component.minutes ? <Chip>{component.minutes} min</Chip> : null}
                {component.weight ? <Chip tone="blue">{component.weight}</Chip> : null}
              </div>
              <ul className="mt-3 space-y-2.5 text-[16.5px] leading-[1.7] text-slate-800">
                {component.whatHappens.map((w, j) => (
                  <li key={j} className="flex gap-2">
                    <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              {component.howItIsMarked.length > 0 && (
                <div className="mt-2 rounded-lg bg-slate-50 p-2.5">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-600">How it is marked</p>
                  <ul className="mt-2 space-y-2 text-[15.5px] leading-[1.65] text-slate-800">
                    {component.howItIsMarked.map((m, j) => (
                      <li key={j}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">Rules that decide who passes</h2>
        {blueprint.rules.map((s, i) => (
          <SectionBlock key={i} section={s} />
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">Writing the answer</h2>
        {blueprint.answerCraft.map((s, i) => (
          <SectionBlock key={i} section={s} />
        ))}
      </section>

      {(blueprint.tables ?? []).map((t, i) => (
        <TableBlock key={i} table={t} />
      ))}

      <section className="mt-8">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">A plan that fits around duty hours</h2>
        {blueprint.studyPlan.map((s, i) => (
          <SectionBlock key={i} section={s} />
        ))}
      </section>

      {blueprint.references.length > 0 && (
        <section className="mt-8 border-t border-slate-200 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Sources</h2>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-600">
            {blueprint.references.map((r, i) => (
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
