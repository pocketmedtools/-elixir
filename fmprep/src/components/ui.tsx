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
 * A measured quantity, as this library writes them.
 *
 * Matching a listed unit rather than any digit is what lets a dose be picked
 * out while an ordinary number - "a grade 2 of 6 murmur" - is left as prose.
 *
 * Two shapes matter beyond a bare number and its unit, and both were splitting
 * values down the middle before they were added. A pair written over a slash is
 * ONE measurement, not two: a blood pressure, a combination tablet, a weight
 * band. Matching only its second half left "20/10 mmHg" rendered as loose text
 * "20/" followed by a coloured "10 mmHg", which reads as though the systolic
 * and the diastolic were different kinds of fact. Either side of that slash may
 * itself be a range - a staging row reads "130-139/85-89 mmHg" - so the range
 * is allowed twice, not once. And a Snellen acuity - 6/60, 6/9 - carries no
 * unit at all, so without a shape of its own the whole value went unmarked.
 */
const QUANTITY =
  /(\b[36]\s*\/\s*(?:5|6|9|12|18|24|36|60)\b|\d[\d.,]*(?:\s*(?:-|to)\s*\d[\d.,]*)?(?:\s*\/\s*\d[\d.,]*(?:\s*(?:-|to)\s*\d[\d.,]*)?)?\s*(?:micrograms?\/kg\/day|micrograms?\/kg\/min|micrograms?\/kg|mg\/kg\/day|mg\/kg\/dose|mcg\/kg\/min|mcg\/kg\/day|kcal\/kg\/day|g\/kg\/day|mL\/kg\/h|mg\/kg|mcg\/kg|g\/kg|mg\/dL|g\/dL|ng\/mL|pg\/mL|mmol\/mol|mmol\/L|mEq\/kg|mEq\/L|mIU\/L|IU\/L|U\/L|mL\/min\/1\.73\s*m2|mL\/min|L\/min|mg\/day|g\/day|IU\b|units?\b|mg\b|mcg\b|micrograms?\b|mL\b|kg\b|mmHg|cmH2O|kcal\b|cm\b|mm\b|dB\b|Hz\b|SD\b|%|per 1000|per 100000|percent\b|degrees C|degrees\b|weeks?\b|days?\b|hours?\b|minutes?\b|seconds?\b|months?\b|years?\b|min\b|h\b|litres?\b|lakh\b|million\b|crore\b))/g;

/**
 * A trailing source tag, "[NICE NG28 2022]". It has to be visible - a figure a
 * reader cannot trace is a figure they cannot trust - but it is not the point
 * of the line, so it is set quiet and small rather than in the reading colour.
 */
const CITE = /(\[[^\]]{2,60}\])/g;

/**
 * A bold run that names something rather than states something: an acronym
 * (WONCA, AAFP, NICE) or an eponym with its year (Leeuwenhorst 1974). These get
 * their own highlighter colour, because in an exam answer a name is recalled
 * differently from a rule - one is a label to attach, the other a line to
 * reproduce - and two colours let the eye sort them without reading.
 */
const NAME = /^(?:[A-Z][A-Za-z'’-]*(?:\s+[A-Z][A-Za-z'’-]*)*\s+\d{4}|[A-Z]{2,}(?:[ -][A-Z0-9]+)*)$/;

/**
 * What kind of thing a marked run is, which decides its one colour.
 *
 * One colour per marked run, always. Colouring a quantity inside a marked run
 * differently from the words around it chopped a single phrase into two
 * colours - "24 per cent" in one, "of men" in another - which reads as two
 * facts rather than one. An author who marked a run containing a figure marked
 * it because the figure is the point, so the whole run takes the value colour.
 */
function markKind(run: string): "value" | "name" | "key" {
  const t = run.trim();
  if (NAME.test(t)) return "name";
  QUANTITY.lastIndex = 0;
  return QUANTITY.test(t) ? "value" : "key";
}

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
 *
 * Three colours, each meaning one thing, and one colour per marked run: deep
 * green when the run carries a measured value, deep violet when it is a name or
 * an eponym to attach, deep carmine otherwise - a line that decides management.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== "");
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <mark key={i} className={`hl hl-${markKind(part.slice(2, -2))}`}>
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
    <section id={id} className="mt-10 scroll-mt-20 first:mt-0">
      <h3
        className="flex items-baseline gap-3 pb-2.5 text-[1.2em] font-bold leading-snug tracking-tight text-slate-900"
        style={{ borderBottom: "2px solid var(--acc-rule)" }}
      >
        {index !== undefined && (
          <span
            aria-hidden
            className="shrink-0 rounded px-2 py-1 font-mono text-[12px] leading-none text-white"
            style={{ background: "var(--acc)" }}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        {section.heading}
      </h3>
      <ul className="mt-4 space-y-4">
        {section.points.map((point, i) => (
          <li key={i} className="flex gap-3 leading-[1.7]">
            <span
              aria-hidden
              className="mt-[0.55em] h-[7px] w-[7px] shrink-0 rounded-sm opacity-60"
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
    <section className="mt-8">
      <h3 className="text-[1.08em] font-bold leading-snug tracking-tight text-slate-900">{table.heading}</h3>
      <div className="mt-3 -mx-3 overflow-x-auto px-3">
        <table className="stack-table w-full border-collapse overflow-hidden rounded-lg text-left text-[0.92em] leading-[1.55] sm:min-w-[34rem]">
          <thead>
            <tr>
              {table.columns.map((c, i) => (
                <th
                  key={i}
                  className="px-3.5 py-2.5 text-left align-bottom font-mono text-[12px] font-semibold uppercase tracking-wider"
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
                    data-col={table.columns[ci]}
                    className={`border-b border-slate-200 px-3 py-2.5 leading-[1.55] ${ci === 0 ? "font-semibold" : ""}`}
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
    <section className={`mt-8 rounded-xl border p-5 ${styles}`}>
      <h3 className="text-[15px] font-bold uppercase tracking-wide">{title}</h3>
      <ul className="mt-3 space-y-4 text-[0.95em] leading-[1.7]">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
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
      className={`rounded-full px-2.5 py-1 text-[13px] font-bold ${FREQ_CHIP[frequency]}`}
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
  return <span className={`rounded-full px-2.5 py-1 text-[13px] font-semibold ${styles}`}>{children}</span>;
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
    <div className="sticky top-0 z-20 -mx-3 flex items-center gap-2 border-b border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur md:-mx-6 md:px-6">
      <button
        type="button"
        onClick={onBack}
        className="min-w-0 truncate rounded-lg px-2 py-1.5 text-[15px] font-semibold text-slate-700 hover:bg-slate-100"
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
      <p className="text-[17px] font-bold text-slate-900">{title}</p>
      <p className="mx-auto mt-1.5 max-w-md text-[15px] leading-[1.6] text-slate-600">{body}</p>
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
      className="flex w-full items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow"
    >
      {left}
      <span className="min-w-0 flex-1">
        <span className="block text-[17px] font-bold leading-snug text-slate-900">{title}</span>
        {subtitle && <span className="mt-1 block text-[13.5px] leading-[1.55] text-slate-600">{subtitle}</span>}
      </span>
      {right}
    </button>
  );
}
