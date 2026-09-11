/**
 * Diagrams, drawn from typed data.
 *
 * Each of the five shapes has one deterministic layout, so a diagram written by
 * one author looks like a diagram written by another, reflows on a phone, and
 * takes the subject's colour from the vars set on the reader. Connectors are CSS
 * borders rather than SVG paths for the same reason: they wrap.
 */
import type { Diagram, DiagramStep, DiagramTone } from "../lib/types";
import { RichText } from "./ui";

// Tone is semantic and therefore theme-aware: these were literal hex values
// once, which meant a pale caution ground stayed pale under the dark theme and
// took light type on top of it - the box went unreadable.
const TONE: Record<DiagramTone, { border: string; bg: string; ink?: string; extra?: string }> = {
  neutral: { border: "var(--acc-rule)", bg: "var(--wash)" },
  decision: { border: "var(--think-rule)", bg: "var(--think-wash)", ink: "var(--ink)", extra: "border-dashed" },
  warn: { border: "var(--danger-rule)", bg: "var(--danger-wash)", ink: "var(--ink)" },
  good: { border: "var(--good-rule)", bg: "var(--good-wash)", ink: "var(--ink)" },
};

function Node({ step }: { step: DiagramStep }) {
  const tone = TONE[step.tone ?? "neutral"];
  return (
    <div
      className={`rounded-md border-[1.5px] px-4 py-3 text-[16px] leading-[1.5] ${tone.extra ?? ""}`}
      style={{ borderColor: tone.border, background: tone.bg, color: tone.ink }}
    >
      <span className="font-semibold">
        <RichText text={step.label} />
        {step.tone === "decision" && <span className="font-bold text-amber-700"> ?</span>}
      </span>
      {step.detail && (
        <span className="mt-1.5 block text-[14px] leading-[1.55] text-slate-600">
          <RichText text={step.detail} />
        </span>
      )}
    </div>
  );
}

export default function DiagramBlock({ diagram }: { diagram: Diagram }) {
  let body = null;

  if (diagram.kind === "flow") {
    body = (
      <div className="flowchart flex flex-col">
        {diagram.steps.map((s, i) => (
          <Node key={i} step={s} />
        ))}
      </div>
    );
  } else if (diagram.kind === "ladder") {
    body = (
      <div className="flex flex-col gap-3">
        {diagram.steps.map((s, i) => (
          <div key={i} className="flex items-start gap-3">
            <span
              className="mt-3 shrink-0 rounded px-2 py-1.5 font-mono text-[12px] leading-none text-white"
              style={{ background: "var(--acc)" }}
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <Node step={s} />
            </div>
          </div>
        ))}
      </div>
    );
  } else if (diagram.kind === "cycle") {
    body = (
      <>
        <div className="flex flex-wrap gap-3">
          {diagram.steps.map((s, i) => (
            <div
              key={i}
              className="relative min-w-0 flex-1 basis-[210px] rounded-md border-[1.5px] py-3 pl-10 pr-3.5 text-[15px] leading-[1.5]"
              style={{ borderColor: "var(--acc-rule)", background: "var(--wash)" }}
            >
              <span
                className="absolute left-3 top-3 h-[20px] w-[20px] rounded-full text-center font-mono text-[12px] leading-[20px] text-white"
                style={{ background: "var(--acc)" }}
              >
                {i + 1}
              </span>
              <span className="font-semibold">
                <RichText text={s.label} />
              </span>
              {s.detail && (
                <span className="mt-1 block text-[13.5px] leading-[1.5] text-slate-600">
                  <RichText text={s.detail} />
                </span>
              )}
            </div>
          ))}
        </div>
        <p
          className="mt-3.5 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-widest"
          style={{ color: "var(--acc)" }}
        >
          <span aria-hidden className="h-px flex-1" style={{ background: "var(--acc-rule)" }} />
          back to {diagram.steps[0].label}
          <span aria-hidden className="h-px flex-1" style={{ background: "var(--acc-rule)" }} />
        </p>
      </>
    );
  } else if (diagram.kind === "branch") {
    body = (
      <div>
        <div className="flex justify-center">
          <div
            className="rounded-md border-[1.5px] px-4 py-3 text-center text-[16px] font-bold leading-[1.5] text-white"
            style={{ borderColor: "var(--acc)", background: "var(--acc)" }}
          >
            <RichText text={diagram.root} />
          </div>
        </div>
        <div className="mx-auto h-[26px] w-0.5" style={{ background: "var(--acc-rule)" }} />
        <div className="grid items-start gap-3 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {diagram.arms.map((arm, i) => {
            const tone = TONE[arm.tone ?? "neutral"];
            return (
              <div key={i} className="flex flex-col gap-2.5">
                <p
                  className="rounded-md border px-3.5 py-2.5 text-center text-[15px] font-semibold leading-[1.45]"
                  style={{
                    borderColor: tone.border,
                    background: arm.tone && arm.tone !== "neutral" ? tone.bg : "var(--wash-2)",
                    color: arm.tone && arm.tone !== "neutral" ? "inherit" : "var(--acc)",
                  }}
                >
                  <RichText text={arm.label} />
                </p>
                <ul className="flex flex-col gap-2.5">
                  {arm.steps.map((step, si) => (
                    <li
                      key={si}
                      className="rounded bg-[var(--sunk)] px-3 py-2 text-[14.5px] leading-[1.55]"
                      style={{ borderLeft: "2px solid var(--acc-rule)" }}
                    >
                      <RichText text={step} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    body = (
      <div className="-mx-1 overflow-x-auto px-1">
        <table className="stack-table w-full border-collapse text-left text-[15.5px] leading-[1.45] sm:min-w-[33rem]">
          <thead>
            <tr>
              {diagram.columns.map((c, i) => (
                <th
                  key={i}
                  className="px-3.5 py-2.5 font-mono text-[11.5px] font-semibold uppercase tracking-wider"
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
            {diagram.rows.map((row, ri) => (
              <tr key={ri} className={`align-top ${ri % 2 ? "bg-[var(--sunk)]" : ""}`}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    data-col={diagram.columns[ci]}
                    className={`border-b border-slate-200 px-3.5 py-2.5 leading-[1.55] ${ci === 0 ? "font-semibold" : ""}`}
                  >
                    <RichText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <figure
      className="mt-5 rounded-xl border bg-white p-4 shadow-sm"
      style={{ borderColor: "var(--acc-rule)" }}
    >
      <figcaption className="mb-4">
        <p className="text-[17.5px] font-bold leading-[1.3]" style={{ color: "var(--acc)" }}>
          {diagram.heading}
        </p>
        {diagram.caption && (
          <p className="mt-1 text-[14px] leading-[1.5] text-slate-500">{diagram.caption}</p>
        )}
      </figcaption>
      {body}
    </figure>
  );
}
