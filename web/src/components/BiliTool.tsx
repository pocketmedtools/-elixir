import { useState } from "react";
import {
  assessBili,
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
}: {
  ga: number;
  unit: BiliUnit;
  point: { h: number; umol: number };
  prev: { h: number; umol: number } | null;
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
      <circle cx={x(point.h)} cy={y(point.umol)} r="5" fill="#dc2626" stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
}

export default function BiliTool() {
  const [ga, setGa] = useState(38);
  const [age, setAge] = useState("");
  const [ageUnit, setAgeUnit] = useState<"hours" | "days">("hours");
  const [plusHours, setPlusHours] = useState("");
  const [bili, setBili] = useState("");
  const [unit, setUnit] = useState<BiliUnit>("mgdl");
  const [prevBili, setPrevBili] = useState("");
  const [prevAge, setPrevAge] = useState("");

  const ageN = num(age);
  const ageHours =
    ageN == null ? null : ageUnit === "hours" ? ageN : ageN * 24 + (num(plusHours) ?? 0);
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

  const r = ageOk && sbrOk ? assessBili(ga, ageHours!, sbrUmol!, prev) : null;
  const red = r && (r.zone === "exchange" || r.zone === "photo");
  const gaText = ga >= 38 ? "≥ 38 weeks" : `${ga} weeks`;
  const ageText =
    ageHours == null
      ? ""
      : ageUnit === "hours"
        ? `${ageN} h`
        : `day ${ageN}${num(plusHours) ? ` + ${num(plusHours)} h` : ""} (${Math.round(ageHours)} h)`;

  const hint =
    sbr != null && !sbrOk
      ? unit === "mgdl"
        ? "That value looks like µmol/L — switch the unit to µmol/L."
        : "Check the bilirubin value."
      : ageHours != null && !ageOk
        ? "Thresholds cover the first 28 days of life."
        : null;

  return (
    <div className="mx-auto max-w-2xl px-3 py-5 md:px-6">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">Neonatal Jaundice (Bili)</h2>
      <p className="mt-1 text-sm text-slate-700">
        Phototherapy and exchange thresholds by gestation and hour of life — NICE CG98.
      </p>

      <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Gestation at birth</span>
            <select value={ga} onChange={(e) => setGa(Number(e.target.value))}
              className={`mt-1 w-full ${selectCls}`}>
              {GA_OPTIONS.map((g) => (
                <option key={g} value={g}>{g === 38 ? "≥ 38 wk (term)" : `${g} weeks`}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Age</span>
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
          <label className="col-span-2 block">
            <span className="text-xs font-semibold text-slate-600">Total serum bilirubin</span>
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
        <section className={`mt-4 rounded-lg border-2 p-4 shadow-sm ${ZONE_STYLES[r.zone]}`}>
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">
            {gaText} · {ageText}
          </p>
          <p className={`mt-1 text-2xl font-extrabold ${red ? "text-red-700" : ""}`}>{r.label}</p>
          <p className="mt-1 text-sm font-semibold">
            Bilirubin {fmtBili(sbrUmol!, unit)}
            {unit === "mgdl" ? ` (${fmtBili(sbrUmol!, "umol")})` : ` (${fmtBili(sbrUmol!, "mgdl")})`}
          </p>

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
          />
          <p className="mt-1 text-[11px] opacity-80">
            Red dot = this baby{prev ? "; grey dot = previous reading" : ""}.
            {ga >= 38 ? " Dashed lines: consider phototherapy (amber) and repeat-bilirubin (grey)." : ""}
          </p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {r.actions.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      <p className="mt-3 text-[11px] leading-snug text-slate-600">
        Thresholds: NICE CG98 (≥ 38 wk consensus table; 23–37 wk threshold graphs —
        phototherapy 40 → GA×10−100 µmol/L and exchange 80 → GA×10 µmol/L by 72 h).
        1 mg/dL = 17.1 µmol/L. Use serum bilirubin under 24 h, under 35 weeks, and
        when treating. Not a substitute for clinical judgment.
      </p>

      <SaveButton
        tool="Neonatal Jaundice"
        build={() =>
          r
            ? {
                title: `Bilirubin ${fmtBili(sbrUmol!, unit)} at ${Math.round(ageHours!)} h, ${gaText} — ${r.label}`,
                detail: [
                  `Phototherapy threshold ${fmtBili(r.thresholds.photo, unit)}`,
                  `Exchange threshold ${fmtBili(r.thresholds.exchange, unit)}`,
                  ...(r.ratePerHour != null ? [`Rate of rise ${r.ratePerHour.toFixed(1)} µmol/L/h`] : []),
                  ...r.actions,
                ].join(" · "),
              }
            : null
        }
      />
    </div>
  );
}
