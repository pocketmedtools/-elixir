/**
 * Diagrams, drawn from typed data.
 *
 * Each of the five shapes has one deterministic layout, so a diagram written by
 * one author looks like a diagram written by another, reflows on a phone, and
 * takes the subject's colour from the --h set on the reader. Connectors are CSS
 * borders rather than SVG paths for the same reason: they wrap.
 */
import type { Diagram, DiagramStep, DiagramTone } from "../lib/types";
import { RichText } from "./ui";

const TONE: Record<DiagramTone, { border: string; bg: string; extra?: string }> = {
  neutral: { border: "var(--acc-rule)", bg: "var(--wash)" },
  decision: { border: "#e0c48f", bg: "#fdf6e6", extra: "border-dashed" },
  warn: { border: "#efc4bf", bg: "#fdeeec" },
  good: { border: "#b6dccd", bg: "#e9f4ef" },
};

function Node({ step }: { step: DiagramStep }) {
  const tone = TONE[step.tone ?? "neutral"];
  return (
    <div
      className={`rounded-md border-[1.5px] px-3.5 py-2.5 text-sm leading-snug ${tone.extra ?? ""}`}
      style={{ borderColor: tone.border, background: tone.bg }}
    >
      <span className="font-semibold">
        <RichText text={step.label} />
        {step.tone === "decision" && <span className="font-bold text-amber-700"> ?</span>}
      </span>
      {step.detail && (
        <span className="mt-1 block text-[12.5px] leading-snug text-slate-600">
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
      <div className="flex flex-col gap-2">
        {diagram.steps.map((s, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span
              className="mt-1 shrink-0 rounded px-2 py-1.5 font-mono text-[11px] leading-none text-white"
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
        <div className="flex flex-wrap gap-2.5">
          {diagram.steps.map((s, i) => (
            <div
              key={i}
              className="relative min-w-0 flex-1 basis-[150px] rounded-md border-[1.5px] py-2.5 pl-9 pr-3 text-[13.5px] leading-snug"
              style={{ borderColor: "var(--acc-rule)", background: "var(--wash)" }}
            >
              <span
                className="absolute left-2.5 top-2.5 h-[18px] w-[18px] rounded-full text-center font-mono text-[10.5px] leading-[18px] text-white"
                style={{ background: "var(--acc)" }}
              >
                {i + 1}
              </span>
              <span className="font-semibold">
                <RichText text={s.label} />
              </span>
              {s.detail && (
                <span className="mt-0.5 block text-[12px] text-slate-600">
                  <RichText text={s.detail} />
                </span>
              )}
            </div>
          ))}
        </div>
        <p
          className="mt-2.5 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-widest"
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
            className="rounded-md border-[1.5px] px-3.5 py-2.5 text-center text-sm font-bold text-white"
            style={{ borderColor: "var(--acc)", background: "var(--acc)" }}
          >
            <RichText text={diagram.root} />
          </div>
        </div>
        <div className="mx-auto h-[18px] w-0.5" style={{ background: "var(--acc-rule)" }} />
        <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
          {diagram.arms.map((arm, i) => {
            const tone = TONE[arm.tone ?? "neutral"];
            return (
              <div key={i} className="flex flex-col gap-2">
                <p
                  className="rounded-md border px-3 py-2 text-center text-[12.5px] font-semibold leading-snug"
                  style={{
                    borderColor: tone.border,
                    background: arm.tone && arm.tone !== "neutral" ? tone.bg : "var(--wash-2)",
                    color: arm.tone && arm.tone !== "neutral" ? "inherit" : "var(--acc)",
                  }}
                >
                  <RichText text={arm.label} />
                </p>
                <ul className="flex flex-col gap-1.5">
                  {arm.steps.map((step, si) => (
                    <li
                      key={si}
                      className="rounded bg-[var(--sunk)] px-2.5 py-1.5 text-[13px] leading-snug"
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
        <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              {diagram.columns.map((c, i) => (
                <th
                  key={i}
                  className="px-3 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-wider"
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
    );
  }

  return (
    <figure
      className="mt-3 rounded-xl border bg-white p-4 shadow-sm"
      style={{ borderColor: "var(--acc-rule)" }}
    >
      <figcaption className="mb-3">
        <p className="text-[15px] font-bold leading-snug" style={{ color: "var(--acc)" }}>
          {diagram.heading}
        </p>
        {diagram.caption && (
          <p className="mt-0.5 text-[12.5px] leading-snug text-slate-500">{diagram.caption}</p>
        )}
      </figcaption>
      {body}
    </figure>
  );
}
