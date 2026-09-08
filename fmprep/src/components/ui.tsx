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

/**
 * The units the library actually writes. Matching these rather than any digit
 * is what lets a dose be picked out while an ordinary number - "a grade 2 of 6
 * murmur" - is left as prose.
 */
const QUANTITY =
  /(\d[\d.,]*(?:\s*(?:-|to)\s*\d[\d.,]*)?\s*(?:micrograms?\/kg\/day|micrograms?\/kg\/min|micrograms?\/kg|mg\/kg\/day|mg\/kg\/dose|mcg\/kg\/min|mcg\/kg\/day|mL\/kg\/h|mg\/kg|mcg\/kg|mg\/dL|g\/dL|mmol\/L|mEq\/kg|mEq\/L|mL\/min|mg\/day|IU\b|units?\b|mg\b|mcg\b|micrograms?\b|mL\b|kg\b|mmHg|cmH2O|%|per 1000|per 100000|degrees C|weeks?\b|days?\b|hours?\b|minutes?\b|months?\b|years?\b))/g;

/**
 * A trailing source tag, "[NICE NG28 2022]". It has to be visible - a figure a
 * reader cannot trace is a figure they cannot trust - but it is not the point
 * of the line, so it is set quiet and small rather than in the reading colour.
 */
const CITE = /(\[[^\]]{2,60}\])/g;

/** Split a run of plain text so every quantity in it becomes its own chip. */
function withQuantities(text: string, keyBase: string): ReactNode[] {
  return text.split(CITE).flatMap((chunk, ci) => {
    if (ci % 2 === 1) {
      return [
        <cite key={`${keyBase}-c${ci}`} className="cite">
          {chunk.slice(1, -1)}
        </cite>,
      ];
    }
    return chunk.split(QUANTITY).map((piece, i) =>
      i % 2 === 1 ? (
        <b key={`${keyBase}-${ci}-q${i}`} className="num">
          {piece}
        </b>
      ) : (
        <span key={`${keyBase}-${ci}-t${i}`}>{piece}</span>
      ),
    );
  });
}

/**
 * A point that may contain **bold** runs.
 *
 * The authors used bold for the lines that decide management, so those are
 * marked with a highlighter rather than merely emboldened, and every dose,
 * cut-off and interval is set apart so the numbers can be found at a glance.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== "");
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <mark key={i} className="hl">
            {withQuantities(part.slice(2, -2), `b${i}`)}
          </mark>
        ) : (
          <span key={i}>{withQuantities(part, `p${i}`)}</span>
        ),
      )}
    </>
  );
}

export function SectionBlock({
  section,
  id,
  index,
}: {
  section: NoteSection;
  id?: string;
  /** Position in the topic, shown as a badge so the page has a spine to scan. */
  index?: number;
}) {
  return (
    <section id={id} className="mt-8 scroll-mt-20 first:mt-0">
      <h3
        className="flex items-baseline gap-2.5 pb-2 text-lg font-bold tracking-tight text-slate-900"
        style={{ borderBottom: "2px solid var(--acc-rule)" }}
      >
        {index !== undefined && (
          <span
            aria-hidden
            className="shrink-0 rounded px-1.5 py-1 font-mono text-[11px] leading-none text-white"
            style={{ background: "var(--acc)" }}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        {section.heading}
      </h3>
      <ul className="mt-3 space-y-2.5">
        {section.points.map((point, i) => (
          <li key={i} className="flex gap-2.5 leading-relaxed">
            <span
              aria-hidden
              className="mt-[0.5em] h-[7px] w-[7px] shrink-0 rounded-sm opacity-60"
              style={{ background: "var(--acc)" }}
            />
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
        <table className="w-full min-w-[34rem] overflow-hidden rounded-lg border-collapse text-left text-sm">
          <thead>
            <tr>
              {table.columns.map((c, i) => (
                <th
                  key={i}
                  className="px-3 py-2 text-left align-bottom font-mono text-[10.5px] font-semibold uppercase tracking-wider"
                  style={{
                    color: "var(--acc)",
                    background: "var(--wash)",
                    borderBottom: "1px solid var(--acc-rule)",
                  }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri} className={`align-top ${ri % 2 ? "bg-[var(--sunk)]" : ""}`}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`border-b border-slate-200 px-3 py-2 leading-snug ${ci === 0 ? "font-semibold" : ""}`}
                  >
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
