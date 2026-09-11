/**
 * Case presentations: the list, then one case read end to end the way it
 * would be presented at the table.
 */
import { useMemo, useState } from "react";
import { allCases, getCase } from "../content/index";
import type { CaseKind } from "../lib/types";
import { BackBar, Callout, Chip, Empty, FrequencyChip, RowButton, SectionBlock } from "./ui";

const KIND_LABEL: Record<CaseKind, string> = {
  long: "Long case",
  short: "Short case",
  osce: "OSCE station",
  viva: "Viva",
};

export function CaseList({
  onBack,
  onOpenCase,
  onHowTo,
}: {
  onBack: () => void;
  onOpenCase: (id: string) => void;
  onHowTo: () => void;
}) {
  const [kind, setKind] = useState<CaseKind | "all">("all");
  const cases = allCases();
  const list = useMemo(
    () => (kind === "all" ? cases : cases.filter((c) => c.clinicalCase.kind === kind)),
    [cases, kind],
  );

  const btn = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-xs font-semibold transition ${
      active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Case presentations</h1>
      <p className="mt-1 leading-relaxed text-slate-700">
        {cases.length} cases worked through as they are presented: the opening line, the history and examination
        in presentation order, the summary statement, the differential argued both ways, the investigations with
        a reason each, the plan, and the viva that follows.
      </p>
      <button
        type="button"
        onClick={onHowTo}
        className="mt-4 w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-left text-[15px] font-semibold text-amber-950"
      >
        New to the format? Read how a case is presented and marked →
      </button>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <button type="button" className={btn(kind === "all")} onClick={() => setKind("all")}>
          All
        </button>
        {(["long", "short", "osce", "viva"] as CaseKind[]).map((k) => (
          <button key={k} type="button" className={btn(kind === k)} onClick={() => setKind(k)}>
            {KIND_LABEL[k]}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <Empty title="No cases of that kind yet" body="Switch the filter back to All to see every case." />
      ) : (
        <div className="mt-3 space-y-2">
          {list.map((c) => (
            <RowButton
              key={c.clinicalCase.id}
              onClick={() => onOpenCase(c.clinicalCase.id)}
              title={c.clinicalCase.title}
              subtitle={c.clinicalCase.opening}
              right={<Chip>{KIND_LABEL[c.clinicalCase.kind]}</Chip>}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function CaseReader({ caseId, onBack }: { caseId: string; onBack: () => void }) {
  const found = getCase(caseId);
  const [showViva, setShowViva] = useState<Record<number, boolean>>({});

  if (!found) {
    return (
      <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
        <BackBar onBack={onBack} label="Cases" />
        <Empty title="Case not found" body="Go back to the list and open it again." />
      </div>
    );
  }

  const c = found.clinicalCase;

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Cases" />

      <header className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <Chip tone="blue">{KIND_LABEL[c.kind]}</Chip>
          <Chip>{c.minutes} min</Chip>
          <FrequencyChip frequency={c.frequency} />
          <Chip tone="teal">{found.subjectTitle}</Chip>
        </div>
        <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-900">{c.title}</h1>
        <p className="mt-3 rounded-xl border border-slate-200 bg-white p-4 text-[17.5px] leading-[1.7] text-slate-800 shadow-sm">
          {c.opening}
        </p>
      </header>

      <article className="mt-2">
        {c.sections.map((s, i) => (
          <SectionBlock key={i} section={s} />
        ))}
      </article>

      <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-900">Summary statement</h3>
        <p className="mt-2 text-[17.5px] leading-[1.7] text-emerald-950">{c.summaryStatement}</p>
      </section>

      {c.differential.length > 0 && (
        <section className="mt-6">
          <h3 className="text-[19px] font-bold tracking-tight text-slate-900">Differential, argued both ways</h3>
          <div className="mt-2 space-y-2">
            {c.differential.map((d, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[17.5px] font-bold text-slate-900">{d.diagnosis}</p>
                <p className="mt-2 text-[16px] leading-[1.65] text-emerald-900">
                  <span className="font-semibold">For: </span>
                  {d.forIt}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-rose-900">
                  <span className="font-semibold">Against: </span>
                  {d.againstIt}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {c.investigations.length > 0 && (
        <section className="mt-6">
          <h3 className="text-lg font-bold tracking-tight text-slate-900">Investigations, with a reason each</h3>
          <div className="mt-3 -mx-3 overflow-x-auto px-3">
            <table className="stack-table w-full border-collapse text-left text-[16.5px] leading-[1.5] sm:min-w-[38rem]">
              <thead>
                <tr>
                  {["Test", "Why", "What you expect"].map((h) => (
                    <th key={h} className="border-b-2 border-slate-300 pb-2 pr-3 font-bold text-slate-900">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.investigations.map((inv, i) => (
                  <tr key={i} className="align-top">
                    <td className="border-b border-slate-200 py-2.5 pr-3 leading-[1.6] font-semibold">{inv.test}</td>
                    <td data-col="Why" className="border-b border-slate-200 py-2.5 pr-3 leading-[1.6]">{inv.why}</td>
                    <td data-col="What you expect" className="border-b border-slate-200 py-2.5 pr-3 leading-[1.6]">{inv.expected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {c.management.map((s, i) => (
        <SectionBlock key={`m${i}`} section={s} />
      ))}

      {c.viva.length > 0 && (
        <section className="mt-8">
          <h3 className="text-[19px] font-bold tracking-tight text-slate-900">The viva that follows</h3>
          <p className="mt-2 text-[13.5px] text-slate-600">Answer it in your head first, then check.</p>
          <div className="mt-2 space-y-2">
            {c.viva.map((v, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[17.5px] font-semibold leading-[1.5] text-slate-900">{v.q}</p>
                {showViva[i] ? (
                  <p className="mt-2.5 text-[17.5px] leading-[1.7] text-slate-800">{v.a}</p>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowViva((s) => ({ ...s, [i]: true }))}
                    className="mt-3 rounded-lg border border-slate-300 px-3.5 py-2 text-[13.5px] font-semibold text-slate-700"
                  >
                    Show the answer
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <Callout tone="danger" title="What loses marks here" items={c.pitfalls} />

      {c.references.length > 0 && (
        <section className="mt-8 border-t border-slate-200 pt-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">References</h3>
          <ul className="mt-3 space-y-1.5 text-[13px] leading-[1.6] text-slate-600">
            {c.references.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
