/**
 * A model answer for a written-paper question, laid out in the order it
 * should be written in the answer booklet: the opening lines that earn the
 * definition marks, the body, what must be drawn, and where the marks sit.
 */
import type { TheoryQuestion } from "../lib/types";
import { Callout, Chip, SectionBlock } from "./ui";

export default function TheoryAnswer({ question }: { question: TheoryQuestion }) {
  const total = question.markSplit?.reduce((sum, part) => sum + part.marks, 0) ?? 0;
  return (
    <div className="mt-3">
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
        <p className="text-xs font-bold uppercase tracking-wide text-emerald-900">Open with this</p>
        <ul className="mt-1.5 space-y-1.5 text-sm leading-relaxed text-emerald-950">
          {question.openingLines.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>

      {question.answer.map((section, i) => (
        <SectionBlock key={i} section={section} />
      ))}

      {question.mustDraw && question.mustDraw.length > 0 && (
        <Callout tone="note" title="Draw this" items={question.mustDraw} />
      )}

      {question.markSplit && question.markSplit.length > 0 && (
        <section className="mt-6">
          <h3 className="text-base font-bold tracking-tight text-slate-900">Where the marks are</h3>
          <ul className="mt-2 space-y-1.5 text-sm">
            {question.markSplit.map((part, i) => (
              <li key={i} className="flex items-baseline justify-between gap-3 border-b border-slate-100 pb-1.5">
                <span className="text-slate-800">{part.part}</span>
                <span className="shrink-0 font-bold text-slate-900">{part.marks}</span>
              </li>
            ))}
          </ul>
          {total > 0 && (
            <p className="mt-2 text-xs text-slate-600">
              {total} of {question.marks} marks accounted for; spend about {question.minutes} minutes on this answer.
            </p>
          )}
        </section>
      )}

      {question.keywords.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {question.keywords.map((k, i) => (
            <Chip key={i}>{k}</Chip>
          ))}
        </div>
      )}
    </div>
  );
}
