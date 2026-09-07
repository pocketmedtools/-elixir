/**
 * How a case is presented and marked: the running order for each kind of
 * case, the sentences to have ready, and the family-medicine tools an
 * examiner expects to see used.
 */
import { useState } from "react";
import guide from "../casePresentation";
import { BackBar, Callout, Chip, SectionBlock, TableBlock } from "./ui";

const KIND_LABEL = {
  long: "Long case",
  short: "Short case",
  osce: "OSCE station",
  viva: "Viva",
} as const;

export default function PresentationScreen({ onBack }: { onBack: () => void }) {
  const [openId, setOpenId] = useState<string | null>(guide.templates[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <BackBar onBack={onBack} label="Study" />

      <header className="mt-5">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900">{guide.title}</h1>
        <div className="mt-3 space-y-2 leading-relaxed text-slate-800">
          {guide.overview.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </header>

      <section className="mt-7">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">The running orders</h2>
        <div className="mt-2 space-y-2">
          {guide.templates.map((template) => {
            const open = openId === template.id;
            return (
              <div key={template.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : template.id)}
                  className="flex w-full items-start gap-2 p-3.5 text-left"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-slate-900">{template.title}</span>
                    <span className="mt-1 flex flex-wrap gap-1.5">
                      <Chip tone="blue">{KIND_LABEL[template.kind]}</Chip>
                      <Chip>{template.minutes} min</Chip>
                    </span>
                  </span>
                  <span aria-hidden className="text-slate-400">{open ? "▾" : "▸"}</span>
                </button>
                {open && (
                  <div className="border-t border-slate-100 px-3.5 pb-4">
                    {template.steps.map((step, i) => (
                      <SectionBlock key={i} section={step} />
                    ))}
                    {template.phrases.length > 0 && (
                      <Callout tone="note" title="Sentences to have ready" items={template.phrases} />
                    )}
                    {template.pitfalls.length > 0 && (
                      <Callout tone="danger" title="What loses marks" items={template.pitfalls} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">The family medicine tools</h2>
        {guide.familyTools.map((s, i) => (
          <SectionBlock key={i} section={s} />
        ))}
      </section>

      {(guide.tables ?? []).map((t, i) => (
        <TableBlock key={i} table={t} />
      ))}

      <section className="mt-8">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">How it is marked</h2>
        {guide.marking.map((s, i) => (
          <SectionBlock key={i} section={s} />
        ))}
      </section>

      {guide.references.length > 0 && (
        <section className="mt-8 border-t border-slate-200 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Sources</h2>
          <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-600">
            {guide.references.map((r, i) => (
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
