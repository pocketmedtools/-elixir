/**
 * Shared reading primitives for the study module.
 *
 * The reader is the product here: notes have to be readable for an hour on a
 * phone, at night, one-handed. So the type is generous, the measure is capped,
 * and **bold** inside a point is honoured rather than shown as asterisks.
 */
import type { ReactNode } from "react";
import type { Frequency, NoteSection, NoteTable } from "../lib/types";
import { FREQUENCY_LABEL } from "../lib/types";

/** Render a point that may contain **bold** runs. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== "");
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-bold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function SectionBlock({ section, id }: { section: NoteSection; id?: string }) {
  return (
    <section id={id} className="mt-6 scroll-mt-20 first:mt-0">
      <h3 className="text-base font-bold tracking-tight text-slate-900">{section.heading}</h3>
      <ul className="mt-2 space-y-2">
        {section.points.map((point, i) => (
          <li key={i} className="flex gap-2 leading-relaxed">
            <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>
              <RichText text={point} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TableBlock({ table }: { table: NoteTable }) {
  return (
    <section className="mt-6">
      <h3 className="text-base font-bold tracking-tight text-slate-900">{table.heading}</h3>
      <div className="mt-2 -mx-3 overflow-x-auto px-3">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              {table.columns.map((c, i) => (
                <th
                  key={i}
                  className="border-b-2 border-slate-300 pb-1.5 pr-3 align-bottom font-bold text-slate-900"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri} className="align-top">
                {row.map((cell, ci) => (
                  <td key={ci} className="border-b border-slate-200 py-2 pr-3 leading-snug">
                    <RichText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Callout({
  tone,
  title,
  items,
}: {
  tone: "danger" | "pearl" | "note";
  title: string;
  items: string[];
}) {
  if (items.length === 0) return null;
  const styles = {
    danger: "border-red-200 bg-red-50 text-red-950",
    pearl: "border-amber-200 bg-amber-50 text-amber-950",
    note: "border-slate-200 bg-slate-50 text-slate-900",
  }[tone];
  return (
    <section className={`mt-6 rounded-xl border p-4 ${styles}`}>
      <h3 className="text-sm font-bold uppercase tracking-wide">{title}</h3>
      <ul className="mt-2 space-y-2 text-sm leading-relaxed">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const FREQ_CHIP: Record<Frequency, string> = {
  core: "bg-emerald-100 text-emerald-900",
  common: "bg-sky-100 text-sky-900",
  "less-common": "bg-violet-100 text-violet-900",
  uncommon: "bg-slate-200 text-slate-700",
};

const FREQ_SHORT: Record<Frequency, string> = {
  core: "Core",
  common: "Common",
  "less-common": "Less common",
  uncommon: "Uncommon",
};

export function FrequencyChip({ frequency }: { frequency: Frequency }) {
  return (
    <span
      title={FREQUENCY_LABEL[frequency]}
      className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${FREQ_CHIP[frequency]}`}
    >
      {FREQ_SHORT[frequency]}
    </span>
  );
}

export function Chip({ children, tone = "slate" }: { children: ReactNode; tone?: "slate" | "blue" | "teal" }) {
  const styles = {
    slate: "bg-slate-100 text-slate-700",
    blue: "bg-blue-100 text-blue-900",
    teal: "bg-teal-100 text-teal-900",
  }[tone];
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${styles}`}>{children}</span>;
}

export function BackBar({
  onBack,
  label,
  right,
}: {
  onBack: () => void;
  label: string;
  right?: ReactNode;
}) {
  return (
    <div className="sticky top-0 z-20 -mx-3 flex items-center gap-2 border-b border-slate-200 bg-white/95 px-3 py-2 backdrop-blur md:-mx-6 md:px-6">
      <button
        type="button"
        onClick={onBack}
        className="rounded-lg px-2 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100"
      >
        ← {label}
      </button>
      <div className="ml-auto flex items-center gap-2">{right}</div>
    </div>
  );
}

export function Empty({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
      <p className="font-bold text-slate-900">{title}</p>
      <p className="mx-auto mt-1 max-w-md text-sm text-slate-600">{body}</p>
    </div>
  );
}

/** A tappable row used throughout the lists. */
export function RowButton({
  onClick,
  title,
  subtitle,
  left,
  right,
}: {
  onClick: () => void;
  title: ReactNode;
  subtitle?: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 text-left shadow-sm transition hover:shadow"
    >
      {left}
      <span className="min-w-0 flex-1">
        <span className="block font-bold leading-snug text-slate-900">{title}</span>
        {subtitle && <span className="mt-0.5 block text-xs leading-snug text-slate-600">{subtitle}</span>}
      </span>
      {right}
    </button>
  );
}
