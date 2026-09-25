import { useState } from "react";
import {
  assessBili,
  assessTcb,
  biliThresholds,
  fmtBili,
  fromUmol,
  toUmol,
  type BiliUnit,
  type BiliZone,
} from "../lib/biliMath";
import SaveButton from "./SaveButton";

const ZONE_STYLES: Record<BiliZone, string> = {
  exchange: "border-red-600 bg-red-100 text-red-900",
  photo: "border-red-400 bg-red-50 text-red-800",
  consider: "border-amber-400 bg-amber-50 text-amber-900",
  repeat: "border-amber-300 bg-amber-50 text-amber-900",
  below: "border-emerald-300 bg-emerald-50 text-emerald-900",
};

const inputCls =
  "w-full min-w-0 rounded-lg border border-slate-200 px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-yellow-600";
const selectCls =
  "rounded-lg border border-slate-200 bg-slate-50 px-1.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-yellow-600";

const GA_OPTIONS = [38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23];

function num(v: string): number | null {
  if (v.trim() === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

/** BiliTool-style chart: threshold lines by hour with the baby's reading(s). */
function BiliChart({
  ga,
  unit,
  point,
  prev,
  tcb = false,
}: {
  ga: number;
  unit: BiliUnit;
  point: { h: number; umol: number };
  prev: { h: number; umol: number } | null;
  tcb?: boolean;
}) {
  const W = 360, H = 250, L = 38, R = 58, T = 12, B = 30;
  const xMax = Math.min(336, Math.max(120, Math.ceil((point.h + 24) / 24) * 24));
  const hours: number[] = [];
  for (let h = 0; h <= xMax; h += 2) hours.push(h);
  const lines = hours.map((h) => ({ h, t: biliThresholds(ga, h) }));
  const yTopUmol = Math.max(
    ...lines.map((l) => l.t.exchange),
    point.umol,
    prev?.umol ?? 0,
  ) * 1.08;
  const yTop = fromUmol(yTopUmol, unit);
  const x = (h: number) => L + (h / xMax) * (W - L - R);
  const y = (umol: number) => T + (1 - fromUmol(umol, unit) / yTop) * (H - T - B);
  const path = (pick: (t: ReturnType<typeof biliThresholds>) => number | null) => {
    let d = "";
    for (const l of lines) {
      const v = pick(l.t);
      if (v == null) continue;
      d += `${d ? "L" : "M"}${x(l.h).toFixed(1)},${y(v).toFixed(1)}`;
    }
    return d;
  };
  const last = lines[lines.length - 1].t;
  const yStep = unit === "umol" ? 50 : 5;
  const yTicks: number[] = [];
  for (let v = 0; v <= yTop; v += yStep) yTicks.push(v);
  const xTicks: number[] = [];
  for (let h = 0; h <= xMax; h += xMax > 168 ? 48 : 24) xTicks.push(h);
  const term = ga >= 38;

  const series: { d: string; color: string; dash?: string; w: number; label: string; end: number | null }[] = [
    { d: path((t) => t.exchange), color: "#b91c1c", w: 2.5, label: "Exchange", end: last.exchange },
    { d: path((t) => t.photo), color: "#ea580c", w: 2.5, label: "Photo", end: last.photo },
  ];
  if (term) {
    series.push({ d: path((t) => t.consider), color: "#d97706", dash: "5 3", w: 1.5, label: "Consider", end: last.consider });
    series.push({ d: path((t) => t.repeat), color: "#64748b", dash: "3 3", w: 1.5, label: "Repeat", end: null });
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full rounded-lg bg-white" role="img" aria-label="Bilirubin threshold chart">
      {yTicks.map((v) => (
        <g key={`y${v}`}>
          <line x1={L} x2={W - R} y1={y(toUmol(v, unit))} y2={y(toUmol(v, unit))} stroke="#e2e8f0" strokeWidth="0.7" />
          <text x={L - 4} y={y(toUmol(v, unit)) + 3} textAnchor="end" fontSize="8" fill="#475569">{v}</text>
        </g>
      ))}
      {xTicks.map((h) => (
        <g key={`x${h}`}>
          <line x1={x(h)} x2={x(h)} y1={T} y2={H - B} stroke="#e2e8f0" strokeWidth="0.7" />
          <text x={x(h)} y={H - B + 11} textAnchor="middle" fontSize="8" fill="#475569">{h}</text>
        </g>
      ))}
      <text x={(L + W - R) / 2} y={H - 4} textAnchor="middle" fontSize="8.5" fill="#334155" fontWeight="600">
        Age (hours)
      </text>
      <text x={9} y={(T + H - B) / 2} textAnchor="middle" fontSize="8.5" fill="#334155" fontWeight="600"
        transform={`rotate(-90 9 ${(T + H - B) / 2})`}>
        {unit === "umol" ? "Bilirubin (µmol/L)" : "Bilirubin (mg/dL)"}
      </text>
      {series.map((s) => (
        <g key={s.label}>
          <path d={s.d} fill="none" stroke={s.color} strokeWidth={s.w} strokeDasharray={s.dash} />
          {s.end != null && (
            <text x={W - R + 3} y={y(s.end) + 3} fontSize="8" fill={s.color} fontWeight="700">{s.label}</text>
          )}
        </g>
      ))}
      {prev && (
        <>
          <line x1={x(prev.h)} y1={y(prev.umol)} x2={x(point.h)} y2={y(point.umol)} stroke="#1e293b" strokeWidth="1.2" strokeDasharray="2 2" />
          <circle cx={x(prev.h)} cy={y(prev.umol)} r="3.5" fill="#64748b" stroke="#fff" strokeWidth="1" />
        </>
      )}
      <line x1={x(point.h)} x2={x(point.h)} y1={T} y2={H - B} stroke="#dc2626" strokeWidth="0.8" strokeDasharray="3 2" />
      <line x1={L} x2={W - R} y1={y(point.umol)} y2={y(point.umol)} stroke="#dc2626" strokeWidth="0.8" strokeDasharray="3 2" />
      {tcb ? (
        <path
          d={`M${x(point.h)},${y(point.umol) - 6}L${x(point.h) + 6},${y(point.umol)}L${x(point.h)},${y(point.umol) + 6}L${x(point.h) - 6},${y(point.umol)}Z`}
          fill="#dc2626" stroke="#fff" strokeWidth="1.5"
        />
      ) : (
        <circle cx={x(point.h)} cy={y(point.umol)} r="5" fill="#dc2626" stroke="#fff" strokeWidth="1.5" />
      )}
    </svg>
  );
}

type AgeMode = "hours" | "datetime";
type Measure = "tsb" | "tcb";

const tabCls = (on: boolean) =>
  `flex-1 rounded-md px-2 py-2 text-xs font-bold transition sm:text-sm ${
    on ? "bg-yellow-900 text-white shadow" : "text-slate-700 hover:bg-white/60"
  }`;

/** Local "YYYY-MM-DDTHH:MM" for datetime-local inputs. */
function nowLocal(): string {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

export default function BiliTool() {
  const [ga, setGa] = useState(38);
  const [ageMode, setAgeMode] = useState<AgeMode>("hours");
  const [measure, setMeasure] = useState<Measure>("tsb");
  const [age, setAge] = useState("");
  const [ageUnit, setAgeUnit] = useState<"hours" | "days">("hours");
  const [plusHours, setPlusHours] = useState("");
  const [birthAt, setBirthAt] = useState("");
  const [sampleAt, setSampleAt] = useState(nowLocal);
  const [bili, setBili] = useState("");
  const [unit, setUnit] = useState<BiliUnit>("mgdl");
  const [recentPhoto, setRecentPhoto] = useState(false);
  const [prevBili, setPrevBili] = useState("");
  const [prevAge, setPrevAge] = useState("");

  const ageN = num(age);
  let ageHours: number | null = null;
  let dtError: string | null = null;
  if (ageMode === "hours") {
    ageHours = ageN == null ? null : ageUnit === "hours" ? ageN : ageN * 24 + (num(plusHours) ?? 0);
  } else if (birthAt && sampleAt) {
    const diff = (new Date(sampleAt).getTime() - new Date(birthAt).getTime()) / 3_600_000;
    if (!Number.isFinite(diff)) dtError = "Enter valid dates and times.";
    else if (diff < 0) dtError = "Sample time is before the birth time — please check.";
    else ageHours = Math.round(diff * 10) / 10;
  }
  const sbr = num(bili);
  const sbrUmol = sbr == null ? null : toUmol(sbr, unit);
  const ageOk = ageHours != null && ageHours <= 28 * 24;
  const sbrOk = sbrUmol != null && sbrUmol > 0 && sbrUmol <= 1000;
  const pB = num(prevBili);
  const pA = num(prevAge);
  const prev =
    pB != null && pA != null && ageHours != null && pA < ageHours
      ? { umol: toUmol(pB, unit), ageHours: pA }
      : null;

  const isTcb = measure === "tcb";
  const tcb = isTcb && ageOk && sbrOk ? assessTcb(ga, ageHours!, sbrUmol!, recentPhoto, prev) : null;
  const r = ageOk && sbrOk ? (tcb ? tcb.estimate : assessBili(ga, ageHours!, sbrUmol!, prev)) : null;
  const red = r && !isTcb && (r.zone === "exchange" || r.zone === "photo");
  const mName = isTcb ? "TcB" : "TSB";
  const gaText = ga >= 38 ? "≥ 38 weeks" : `${ga} weeks`;
  const ageText =
    ageHours == null
      ? ""
      : ageMode === "datetime"
        ? `${ageHours} h of life`
        : ageUnit === "hours"
          ? `${ageN} h`
          : `day ${ageN}${num(plusHours) ? ` + ${num(plusHours)} h` : ""} (${Math.round(ageHours)} h)`;

  const hint =
    dtError ??
    (sbr != null && !sbrOk
      ? unit === "mgdl"
        ? "That value looks like µmol/L — switch the unit to µmol/L."
        : "Check the bilirubin value."
      : ageHours != null && !ageOk
        ? "Thresholds cover the first 28 days of life."
        : null);

  // Card colour: TcB results are screening — amber/red only as "get a serum level".
  const cardCls = tcb
    ? tcb.needsSerum
      ? r!.zone === "exchange" || r!.zone === "photo"
        ? ZONE_STYLES.photo
        : ZONE_STYLES.consider
      : ZONE_STYLES.below
    : r
      ? ZONE_STYLES[r.zone]
      : "";

  return (
    <div className="mx-auto max-w-2xl px-3 py-5 md:px-6">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">Neonatal Jaundice (Bili)</h2>
      <p className="mt-1 text-sm text-slate-700">
        Phototherapy and exchange thresholds by gestation and hour of life — NICE CG98.
      </p>

      <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex rounded-lg bg-yellow-100 p-1" role="tablist" aria-label="Age entry">
          <button type="button" role="tab" aria-selected={ageMode === "hours"}
            onClick={() => setAgeMode("hours")} className={tabCls(ageMode === "hours")}>
            Age in hours
          </button>
          <button type="button" role="tab" aria-selected={ageMode === "datetime"}
            onClick={() => setAgeMode("datetime")} className={tabCls(ageMode === "datetime")}>
            Birth &amp; sample time
          </button>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Gestation at birth</span>
            <select value={ga} onChange={(e) => setGa(Number(e.target.value))}
              className={`mt-1 w-full ${selectCls}`}>
              {GA_OPTIONS.map((g) => (
                <option key={g} value={g}>{g === 38 ? "≥ 38 wk (term)" : `${g} weeks`}</option>
              ))}
            </select>
          </label>
          {ageMode === "hours" ? (
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Age at sample</span>
              <div className="mt-1 flex gap-1">
                <input type="number" inputMode="decimal" min={0} value={age}
                  onChange={(e) => setAge(e.target.value)} className={inputCls} />
                <select value={ageUnit} onChange={(e) => setAgeUnit(e.target.value as "hours" | "days")}
                  className={selectCls} aria-label="Age unit">
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                </select>
              </div>
              {ageUnit === "days" && (
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="text-[11px] font-medium text-slate-600">+</span>
                  <input type="number" inputMode="numeric" min={0} max={23} value={plusHours}
                    onChange={(e) => setPlusHours(e.target.value)}
                    className="w-14 rounded-lg border border-slate-200 px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-yellow-600" />
                  <span className="text-[11px] font-medium text-slate-600">h</span>
                </div>
              )}
            </label>
          ) : (
            <div className="text-xs font-semibold text-slate-600">
              Age at sample
              <p className="mt-1 rounded-lg bg-slate-50 px-3 py-2.5 text-base font-bold text-slate-900">
                {ageHours != null ? `${ageHours} h` : "—"}
              </p>
            </div>
          )}
          {ageMode === "datetime" && (
            <>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Birth date &amp; time</span>
                <input type="datetime-local" value={birthAt} onChange={(e) => setBirthAt(e.target.value)}
                  className={`mt-1 ${inputCls} text-sm`} />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Sample date &amp; time</span>
                <input type="datetime-local" value={sampleAt} onChange={(e) => setSampleAt(e.target.value)}
                  className={`mt-1 ${inputCls} text-sm`} />
              </label>
            </>
          )}
          <div className="col-span-2">
            <span className="text-xs font-semibold text-slate-600">Bilirubin measured by</span>
            <div className="mt-1 flex rounded-lg bg-yellow-100 p-1" role="tablist" aria-label="Measurement">
              <button type="button" role="tab" aria-selected={!isTcb}
                onClick={() => setMeasure("tsb")} className={tabCls(!isTcb)}>
                Serum (TSB)
              </button>
              <button type="button" role="tab" aria-selected={isTcb}
                onClick={() => setMeasure("tcb")} className={tabCls(isTcb)}>
                Transcutaneous (TcB)
              </button>
            </div>
          </div>
          <label className="col-span-2 block">
            <span className="text-xs font-semibold text-slate-600">
              {isTcb ? "Transcutaneous bilirubin (TcB)" : "Total serum bilirubin (TSB)"}
            </span>
            <div className="mt-1 flex gap-1">
              <input type="number" inputMode="decimal" min={0} value={bili}
                onChange={(e) => setBili(e.target.value)} className={inputCls} />
              <select value={unit} onChange={(e) => setUnit(e.target.value as BiliUnit)}
                className={selectCls} aria-label="Bilirubin unit">
                <option value="mgdl">mg/dL</option>
                <option value="umol">µmol/L</option>
              </select>
            </div>
          </label>
          {isTcb && (
            <label className="col-span-2 flex items-center gap-2 text-sm font-medium text-slate-800">
              <input type="checkbox" checked={recentPhoto} onChange={(e) => setRecentPhoto(e.target.checked)}
                className="h-4 w-4 accent-yellow-800" />
              On phototherapy now, or stopped less than 24 h ago
            </label>
          )}
        </div>
        <details className="mt-3 rounded-lg bg-slate-50 px-3 py-2">
          <summary className="cursor-pointer text-xs font-semibold text-slate-700">
            Previous reading (optional — gives rate of rise)
          </summary>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Previous bilirubin ({unit === "mgdl" ? "mg/dL" : "µmol/L"})</span>
              <input type="number" inputMode="decimal" min={0} value={prevBili}
                onChange={(e) => setPrevBili(e.target.value)} className={`mt-1 ${inputCls}`} />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Taken at age (hours)</span>
              <input type="number" inputMode="decimal" min={0} value={prevAge}
                onChange={(e) => setPrevAge(e.target.value)} className={`mt-1 ${inputCls}`} />
            </label>
          </div>
        </details>
        {hint && <p className="mt-2 text-xs font-semibold text-amber-700">{hint}</p>}
        {!r && !hint && (
          <p className="mt-2 text-xs text-slate-600">
            Enter age and bilirubin — the result and chart appear automatically.
          </p>
        )}
      </section>

      {r && (
        <section className={`mt-4 rounded-lg border-2 p-4 shadow-sm ${cardCls}`}>
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">
            {gaText} · {ageText} · {mName}
          </p>
          {tcb ? (
            <>
              <p className={`mt-1 text-2xl font-extrabold ${tcb.needsSerum ? "text-red-700" : ""}`}>
                {tcb.invalid
                  ? "TcB NOT VALID — MEASURE SERUM BILIRUBIN"
                  : tcb.needsSerum
                    ? "MEASURE SERUM BILIRUBIN (TSB)"
                    : "TcB below serum-check level"}
              </p>
              {!tcb.invalid && (
                <p className="mt-1 text-sm font-semibold">
                  TcB estimate zone: {r.label.toLowerCase()}. Treatment decisions are made on serum bilirubin.
                </p>
              )}
            </>
          ) : (
            <p className={`mt-1 text-2xl font-extrabold ${red ? "text-red-700" : ""}`}>{r.label}</p>
          )}
          <p className="mt-1 text-sm font-semibold">
            {mName} {fmtBili(sbrUmol!, unit)}
            {unit === "mgdl" ? ` (${fmtBili(sbrUmol!, "umol")})` : ` (${fmtBili(sbrUmol!, "mgdl")})`}
          </p>

          {tcb && tcb.reasons.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 rounded-md bg-white/70 py-2 pl-7 pr-2 text-sm font-semibold">
              {tcb.reasons.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}

          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-md bg-white/70 px-2 py-1.5">
              <span className="font-semibold text-orange-700">Phototherapy at:</span>{" "}
              {fmtBili(r.thresholds.photo, unit)}
              <br />
              <span className={r.toPhoto > 0 ? "font-bold text-red-700" : ""}>
                {r.toPhoto > 0 ? "above by " : "below by "}
                {fmtBili(Math.abs(r.toPhoto), unit)}
              </span>
            </div>
            <div className="rounded-md bg-white/70 px-2 py-1.5">
              <span className="font-semibold text-red-700">Exchange at:</span>{" "}
              {fmtBili(r.thresholds.exchange, unit)}
              <br />
              <span className={r.toExchange > 0 ? "font-bold text-red-700" : ""}>
                {r.toExchange > 0 ? "above by " : "below by "}
                {fmtBili(Math.abs(r.toExchange), unit)}
              </span>
            </div>
            {r.ratePerHour != null && (
              <div className="col-span-2 rounded-md bg-white/70 px-2 py-1.5">
                <span className="font-semibold">Rate of rise:</span>{" "}
                <span className={r.ratePerHour > 8.5 ? "font-bold text-red-700" : ""}>
                  {unit === "umol"
                    ? `${r.ratePerHour.toFixed(1)} µmol/L/h`
                    : `${(r.ratePerHour / 17.1).toFixed(2)} mg/dL/h (${r.ratePerHour.toFixed(1)} µmol/L/h)`}
                </span>
                {r.ratePerHour > 8.5 ? " — rapid (> 8.5 µmol/L/h)" : ""}
              </div>
            )}
          </div>

          <BiliChart
            ga={ga}
            unit={unit}
            point={{ h: ageHours!, umol: sbrUmol! }}
            prev={prev ? { h: prev.ageHours, umol: prev.umol } : null}
            tcb={isTcb}
          />
          <p className="mt-1 text-[11px] opacity-80">
            Red {isTcb ? "diamond = this TcB" : "dot = this TSB"}{prev ? "; grey dot = previous reading" : ""}.
            {ga >= 38 ? " Dashed lines: consider phototherapy (amber) and repeat-bilirubin (grey)." : ""}
          </p>

          {(!tcb || !tcb.needsSerum) && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {(tcb
                ? [
                    "No serum level needed now. Repeat TcB or check clinically within 24 h if jaundice persists or deepens, and before discharge.",
                    ...r.actions.filter((a) => a.includes("Prolonged")),
                  ]
                : r.actions
              ).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      <p className="mt-3 text-[11px] leading-snug text-slate-600">
        Thresholds: NICE CG98 (≥ 38 wk consensus table; 23–37 wk threshold graphs —
        phototherapy 40 → GA×10−100 µmol/L and exchange 80 → GA×10 µmol/L by 72 h).
        TcB: confirm with serum if &gt; 250 µmol/L, ≥ 15 mg/dL or within 3 mg/dL of the
        phototherapy line; serum only under 24 h, under 35 weeks and around phototherapy.
        1 mg/dL = 17.1 µmol/L. Not a substitute for clinical judgment.
      </p>

      <SaveButton
        tool="Neonatal Jaundice"
        build={() =>
          r
            ? {
                title: `${mName} ${fmtBili(sbrUmol!, unit)} at ${Math.round(ageHours!)} h, ${gaText} — ${
                  tcb ? (tcb.needsSerum ? "measure serum bilirubin" : "below serum-check level") : r.label
                }`,
                detail: [
                  `Phototherapy threshold ${fmtBili(r.thresholds.photo, unit)}`,
                  `Exchange threshold ${fmtBili(r.thresholds.exchange, unit)}`,
                  ...(r.ratePerHour != null ? [`Rate of rise ${r.ratePerHour.toFixed(1)} µmol/L/h`] : []),
                  ...(tcb ? tcb.reasons : r.actions),
                ].join(" · "),
              }
            : null
        }
      />
    </div>
  );
}
