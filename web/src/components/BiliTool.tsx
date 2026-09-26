import { useState } from "react";
import {
  assessBili,
  assessTcb,
  biliThresholds,
  toUmol,
  type BiliUnit,
} from "../lib/biliMath";
import { aapTcbNeedsTsb, aapThresholds, assessAap } from "../lib/aapBili";
import { aapPlan, nicePlan, type BiliPlan, type PlanTone } from "../lib/biliPlan";
import SaveButton from "./SaveButton";

/** Dark, high-contrast decision colours (white text on all). */
const TONE: Record<PlanTone, string> = {
  ok: "bg-emerald-800",
  watch: "bg-amber-700",
  check: "bg-sky-800",
  treat: "bg-red-700",
  urgent: "bg-purple-900",
  emergency: "bg-red-950",
};

const RISK_CHIPS = [
  { short: "Albumin < 3", full: "Albumin < 3.0 g/dL" },
  { short: "Haemolysis / DAT+ / G6PD", full: "Isoimmune haemolysis (DAT +), G6PD deficiency or other haemolysis" },
  { short: "Sepsis", full: "Sepsis" },
  { short: "Unstable (24 h)", full: "Significant clinical instability in the previous 24 h" },
];

const GA_WEEKS = [42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23];

const field =
  "w-full min-w-0 rounded-lg border-2 border-slate-300 bg-white px-3 py-2.5 text-base font-semibold text-slate-900 outline-none focus:border-slate-900";
const sel =
  "rounded-lg border-2 border-slate-300 bg-white px-2 py-2.5 text-sm font-semibold text-slate-900 outline-none focus:border-slate-900";
const chip = (on: boolean) =>
  `rounded-full border-2 px-3 py-1.5 text-xs font-bold transition ${
    on ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-700"
  }`;

function num(v: string): number | null {
  if (v.trim() === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

function nowLocal(): string {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

/** Threshold chart; all values in mg/dL or µmol/L as chosen. */
function Chart({
  lines,
  unit,
  point,
  prev,
  tcb,
}: {
  lines: (h: number) => { photo: number; mid: number | null; exchange: number };
  unit: BiliUnit;
  point: { h: number; v: number };
  prev: { h: number; v: number } | null;
  tcb: boolean;
}) {
  const W = 360, H = 230, L = 34, R = 60, T = 10, B = 28;
  const xMax = Math.min(336, Math.max(120, Math.ceil((point.h + 24) / 24) * 24));
  const hs: number[] = [];
  for (let h = 0; h <= xMax; h += 2) hs.push(h);
  const pts = hs.map((h) => ({ h, ...lines(h) }));
  const yTop = Math.max(...pts.map((p) => p.exchange), point.v, prev?.v ?? 0) * 1.08;
  const x = (h: number) => L + (h / xMax) * (W - L - R);
  const y = (v: number) => T + (1 - v / yTop) * (H - T - B);
  const path = (k: "photo" | "mid" | "exchange") =>
    pts
      .filter((p) => p[k] != null)
      .map((p, i) => `${i ? "L" : "M"}${x(p.h).toFixed(1)},${y(p[k]!).toFixed(1)}`)
      .join("");
  const last = pts[pts.length - 1];
  const step = unit === "umol" ? 50 : 5;
  const yT: number[] = [];
  for (let v = 0; v <= yTop; v += step) yT.push(v);
  const xT: number[] = [];
  for (let h = 0; h <= xMax; h += xMax > 168 ? 48 : 24) xT.push(h);
  const P = { x: x(point.h), y: y(point.v) };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Bilirubin chart">
      <rect x={L} y={T} width={W - L - R} height={H - T - B} fill="#ffffff" />
      {yT.map((v) => (
        <g key={`y${v}`}>
          <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="#e2e8f0" />
          <text x={L - 4} y={y(v) + 3} textAnchor="end" fontSize="8" fill="#334155">{v}</text>
        </g>
      ))}
      {xT.map((h) => (
        <text key={`x${h}`} x={x(h)} y={H - B + 11} textAnchor="middle" fontSize="8" fill="#334155">{h}h</text>
      ))}
      <path d={path("exchange")} fill="none" stroke="#7f1d1d" strokeWidth="2.5" />
      {last.mid != null && <path d={path("mid")} fill="none" stroke="#6b21a8" strokeWidth="1.8" strokeDasharray="5 3" />}
      <path d={path("photo")} fill="none" stroke="#c2410c" strokeWidth="2.5" />
      <text x={W - R + 3} y={y(last.exchange) + 3} fontSize="8" fontWeight="700" fill="#7f1d1d">Exchange</text>
      {last.mid != null && <text x={W - R + 3} y={y(last.mid) + 3} fontSize="8" fontWeight="700" fill="#6b21a8">Escalate</text>}
      <text x={W - R + 3} y={y(last.photo) + 3} fontSize="8" fontWeight="700" fill="#c2410c">Photo</text>
      {prev && (
        <>
          <line x1={x(prev.h)} y1={y(prev.v)} x2={P.x} y2={P.y} stroke="#0f172a" strokeDasharray="2 2" />
          <circle cx={x(prev.h)} cy={y(prev.v)} r="3.5" fill="#64748b" stroke="#fff" />
        </>
      )}
      {tcb ? (
        <path d={`M${P.x},${P.y - 6}L${P.x + 6},${P.y}L${P.x},${P.y + 6}L${P.x - 6},${P.y}Z`} fill="#0f172a" stroke="#fff" strokeWidth="1.5" />
      ) : (
        <circle cx={P.x} cy={P.y} r="5.5" fill="#0f172a" stroke="#fff" strokeWidth="2" />
      )}
    </svg>
  );
}

export default function BiliTool() {
  // Gestation as completed weeks + days (e.g. 38+4). Both AAP and NICE
  // thresholds are set by completed weeks, so days never change the table.
  const [ga, setGa] = useState(39);
  const [gaDays, setGaDays] = useState(0);
  // Risk status must be chosen explicitly (AAP): null until the user picks.
  const [riskMode, setRiskMode] = useState<"none" | "with" | null>(null);
  const [age, setAge] = useState("");
  const [ageUnit, setAgeUnit] = useState<"hours" | "days" | "birth">("hours");
  const [plusH, setPlusH] = useState("");
  const [birthAt, setBirthAt] = useState("");
  const [sampleAt, setSampleAt] = useState(nowLocal);
  const [bili, setBili] = useState("");
  const [unit, setUnit] = useState<BiliUnit>("mgdl");
  const [isTcb, setIsTcb] = useState(false);
  const [onPhoto, setOnPhoto] = useState(false);
  const [rf, setRf] = useState<boolean[]>([false, false, false, false]);
  const [albumin, setAlbumin] = useState("");
  const [prevBili, setPrevBili] = useState("");
  const [prevAge, setPrevAge] = useState("");

  const [guideline, setGuideline] = useState<"aap" | "nice">("aap");
  const isAap = guideline === "aap";
  // AAP 2022 covers ≥ 35 weeks only; NICE CG98 covers every gestation.
  const aapOutOfRange = isAap && ga < 35;
  const anyRf = riskMode === "with";
  const gaText = `${ga}+${gaDays} wk`;
  const tableGa = isAap ? (ga >= 40 ? "≥ 40" : `${ga}`) : ga >= 38 ? "≥ 38" : `${ga}`;
  const toggleRf = (i: number) => {
    const next = rf.map((v, j) => (j === i ? !v : v));
    setRf(next);
    if (next.some(Boolean)) setRiskMode("with");
  };

  // Age in hours
  let ageHours: number | null = null;
  let err: string | null = null;
  if (ageUnit === "birth") {
    if (birthAt && sampleAt) {
      const d = (new Date(sampleAt).getTime() - new Date(birthAt).getTime()) / 3_600_000;
      if (!Number.isFinite(d)) err = "Enter valid dates and times.";
      else if (d < 0) err = "Sample time is before birth time.";
      else ageHours = Math.round(d * 10) / 10;
    }
  } else {
    const a = num(age);
    ageHours = a == null ? null : ageUnit === "hours" ? a : a * 24 + (num(plusH) ?? 0);
  }
  if (ageHours != null && ageHours > 28 * 24) err = "Thresholds cover the first 28 days.";

  const b = num(bili);
  const umol = b == null ? null : toUmol(b, unit);
  if (umol != null && (umol <= 0 || umol > 1000))
    err = unit === "mgdl" ? "That looks like µmol/L — change the unit." : "Check the bilirubin value.";
  const ready = !err && ageHours != null && umol != null;

  const pB = num(prevBili), pA = num(prevAge);
  const prev = ready && pB != null && pA != null && pA < ageHours! ? { umol: toUmol(pB, unit), h: pA } : null;

  // Plan
  let plan: BiliPlan | null = null;
  let lines: ((h: number) => { photo: number; mid: number | null; exchange: number }) | null = null;
  let lineVals: { photo: number; mid: number | null; exchange: number } | null = null;
  let rate: string | null = null;
  const toU = (mgdl: number) => (unit === "mgdl" ? mgdl : mgdl * 17.1);
  const fromUmolU = (u: number) => (unit === "mgdl" ? u / 17.1 : u);
  const fmt = (v: number) => (unit === "mgdl" ? `${v.toFixed(1)}` : `${Math.round(v)}`);
  const unitTxt = unit === "mgdl" ? "mg/dL" : "µmol/L";
  let detail: string[] = [];

  const needRisk = isAap && riskMode === null;
  if (ready && isAap && !needRisk && !aapOutOfRange) {
    const mg = umol! / 17.1;
    const a = assessAap({
      gaWeeks: ga,
      ageHours: ageHours!,
      tsb: mg,
      riskFactor: anyRf,
      albumin: isTcb ? null : num(albumin),
      prev: prev ? { tsb: prev.umol / 17.1, ageHours: prev.h } : null,
    });
    const tcbInfo = isTcb ? { invalid: onPhoto, needsTsb: onPhoto || aapTcbNeedsTsb(mg, a.t.photo).length > 0 } : null;
    plan = aapPlan(a, ageHours!, tcbInfo);
    lines = (h) => {
      const t = aapThresholds(ga, Math.max(h, 1), anyRf);
      return { photo: toU(t.photo), mid: toU(t.escalation), exchange: toU(t.exchange) };
    };
    lineVals = { photo: toU(a.t.photo), mid: toU(a.t.escalation), exchange: toU(a.t.exchange) };
    if (a.ratePerHour != null) rate = `${a.ratePerHour.toFixed(2)} mg/dL/h${a.rapidRise ? " — fast" : ""}`;
    detail = [...a.followUp, ...a.actions];
    if (a.baRatio != null) detail.unshift(`B/A ratio ${a.baRatio.toFixed(1)}${a.baExceeded != null ? ` — at/above ${a.baExceeded}: exchange may be considered` : ""}.`);
  } else if (ready && !isAap) {
    const r = assessBili(ga, ageHours!, umol!, prev ? { umol: prev.umol, ageHours: prev.h } : null);
    const t = isTcb ? assessTcb(ga, ageHours!, umol!, onPhoto, prev ? { umol: prev.umol, ageHours: prev.h } : null) : null;
    plan = nicePlan(r, ageHours!, t);
    lines = (h) => {
      const n = biliThresholds(ga, h);
      return { photo: fromUmolU(n.photo), mid: null, exchange: fromUmolU(n.exchange) };
    };
    lineVals = { photo: fromUmolU(r.thresholds.photo), mid: null, exchange: fromUmolU(r.thresholds.exchange) };
    if (r.ratePerHour != null) rate = `${r.ratePerHour.toFixed(1)} µmol/L/h${r.ratePerHour > 8.5 ? " — fast" : ""}`;
    detail = [...(t?.reasons ?? []), ...r.actions];
  }

  const val = b ?? 0;
  const diff = lineVals ? val - lineVals.photo : 0;
  const mName = isTcb ? "TcB" : "TSB";

  return (
    <div className="mx-auto max-w-xl px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Neonatal Jaundice</h2>

      {/* ---------- Inputs ---------- */}
      <section className="mt-3 space-y-3 rounded-xl border-2 border-slate-300 bg-white p-4">
        <div>
          <span className="text-xs font-bold text-slate-700">Guideline</span>
          <div className="mt-1 grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Guideline">
            {(["aap", "nice"] as const).map((g) => (
              <button key={g} type="button" role="radio" aria-checked={guideline === g} onClick={() => setGuideline(g)}
                className={`rounded-lg border-2 px-2 py-2.5 text-sm font-extrabold ${guideline === g ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"}`}>
                {g === "aap" ? "AAP 2022" : "NICE (CG98, 2023)"}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <span className="text-xs font-bold text-slate-700">Gestation at birth</span>
            <div className="mt-1 flex items-center gap-1">
              <select value={ga} onChange={(e) => setGa(Number(e.target.value))} className={`${sel} flex-1`} aria-label="Gestation weeks">
                {GA_WEEKS.map((g) => (<option key={g} value={g}>{g} wk</option>))}
              </select>
              <span className="text-lg font-black text-slate-900">+</span>
              <select value={gaDays} onChange={(e) => setGaDays(Number(e.target.value))} className={`${sel} flex-1`} aria-label="Gestation days">
                {[0, 1, 2, 3, 4, 5, 6].map((d) => (<option key={d} value={d}>{d} d</option>))}
              </select>
            </div>
            <p className="mt-1 text-[11px] font-semibold text-slate-600">{gaText} → uses the {tableGa}-week table</p>
          </div>
          <label className="block">
            <span className="text-xs font-bold text-slate-700">Age</span>
            <div className="mt-1 flex gap-1">
              {ageUnit !== "birth" && (
                <input type="number" inputMode="decimal" min={0} value={age} onChange={(e) => setAge(e.target.value)}
                  className={`${field} flex-1`} placeholder="48" />
              )}
              <select value={ageUnit} onChange={(e) => setAgeUnit(e.target.value as typeof ageUnit)}
                className={`${sel} ${ageUnit === "birth" ? "w-full" : "w-[4.6rem] shrink-0 px-1"}`} aria-label="Age unit">
                <option value="hours">hrs</option>
                <option value="days">days</option>
                <option value="birth">birth time</option>
              </select>
            </div>
            {ageUnit === "days" && (
              <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-slate-700">
                +
                <input type="number" inputMode="numeric" min={0} max={23} value={plusH} onChange={(e) => setPlusH(e.target.value)}
                  className="w-14 rounded-md border-2 border-slate-300 px-2 py-1 text-sm" />
                h
              </div>
            )}
          </label>
        </div>

        {ageUnit === "birth" && (
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-xs font-bold text-slate-700">
              Born at
              <input type="datetime-local" value={birthAt} onChange={(e) => setBirthAt(e.target.value)} className={`mt-1 ${field} text-sm`} />
            </label>
            <label className="block text-xs font-bold text-slate-700">
              Sample at
              <input type="datetime-local" value={sampleAt} onChange={(e) => setSampleAt(e.target.value)} className={`mt-1 ${field} text-sm`} />
            </label>
            {ageHours != null && (
              <p className="col-span-2 text-sm font-bold text-slate-900">Age at sample: {ageHours} h</p>
            )}
          </div>
        )}

        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700">Bilirubin</span>
            <div className="flex gap-1">
              <button type="button" onClick={() => setIsTcb(false)} className={chip(!isTcb)}>Serum (TSB)</button>
              <button type="button" onClick={() => setIsTcb(true)} className={chip(isTcb)}>Skin (TcB)</button>
            </div>
          </div>
          <div className="mt-1 flex gap-1">
            <input type="number" inputMode="decimal" min={0} value={bili} onChange={(e) => setBili(e.target.value)}
              className={`${field} text-lg`} placeholder={isTcb ? "TcB" : "TSB"} />
            <select value={unit} onChange={(e) => setUnit(e.target.value as BiliUnit)} className={sel} aria-label="Unit">
              <option value="mgdl">mg/dL</option>
              <option value="umol">µmol/L</option>
            </select>
          </div>
          {isTcb && (
            <label className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-800">
              <input type="checkbox" checked={onPhoto} onChange={(e) => setOnPhoto(e.target.checked)} className="h-4 w-4 accent-slate-900" />
              On phototherapy or stopped &lt; 24 h ago
            </label>
          )}
        </div>

        {isAap && !aapOutOfRange && (
          <div>
            <span className="text-xs font-bold text-slate-700">
              Hyperbilirubinaemia neurotoxicity risk factors <span className="text-red-700">*</span>
            </span>
            <div className="mt-1 grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Risk factors">
              <button type="button" role="radio" aria-checked={riskMode === "none"}
                onClick={() => { setRiskMode("none"); setRf(rf.map(() => false)); }}
                className={`rounded-lg border-2 px-2 py-2.5 text-sm font-extrabold ${riskMode === "none" ? "border-emerald-900 bg-emerald-800 text-white" : "border-slate-300 bg-white text-slate-800"}`}>
                Without risk factors
              </button>
              <button type="button" role="radio" aria-checked={riskMode === "with"}
                onClick={() => setRiskMode("with")}
                className={`rounded-lg border-2 px-2 py-2.5 text-sm font-extrabold ${riskMode === "with" ? "border-red-950 bg-red-800 text-white" : "border-slate-300 bg-white text-slate-800"}`}>
                With risk factors
              </button>
            </div>
            {riskMode === null && (
              <p className="mt-1 text-xs font-bold text-red-700">Choose one — it changes the AAP threshold tables.</p>
            )}
            <p className="mt-2 text-[11px] font-semibold text-slate-600">
              Which ones? (optional — ticking any selects “With”). Gestation &lt; 38 wk is already built into the tables.
            </p>
            <div className="mt-1 grid gap-1">
              {RISK_CHIPS.map((c, i) => (
                <label key={c.short} className="flex items-start gap-2 text-sm font-semibold text-slate-800">
                  <input type="checkbox" checked={rf[i]} onChange={() => toggleRf(i)} className="mt-0.5 h-4 w-4 shrink-0 accent-red-800" />
                  {c.full}
                </label>
              ))}
            </div>
          </div>
        )}

        <details className="rounded-lg border border-slate-200 px-3 py-2">
          <summary className="cursor-pointer text-xs font-bold text-slate-700">More: previous reading{isAap ? ", albumin" : ""}</summary>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <label className="block text-xs font-bold text-slate-700">
              Previous bilirubin ({unitTxt})
              <input type="number" inputMode="decimal" min={0} value={prevBili} onChange={(e) => setPrevBili(e.target.value)} className={`mt-1 ${field}`} />
            </label>
            <label className="block text-xs font-bold text-slate-700">
              …taken at age (h)
              <input type="number" inputMode="decimal" min={0} value={prevAge} onChange={(e) => setPrevAge(e.target.value)} className={`mt-1 ${field}`} />
            </label>
            {isAap && !isTcb && (
              <label className="col-span-2 block text-xs font-bold text-slate-700">
                Serum albumin (g/dL) — for B/A ratio
                <input type="number" inputMode="decimal" min={0} value={albumin} onChange={(e) => setAlbumin(e.target.value)} className={`mt-1 ${field}`} />
              </label>
            )}
          </div>
        </details>

        {err && <p className="text-sm font-bold text-red-700">{err}</p>}
      </section>

      {/* ---------- Result ---------- */}
      {plan && lineVals && lines && (
        <section className="mt-4 overflow-hidden rounded-xl border-2 border-slate-900 bg-white">
          <div className={`${TONE[plan.tone]} px-4 py-3 text-white`}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">
              {gaText} · {ageHours} h · {mName} {fmt(val)} {unitTxt}{isAap ? (anyRf ? " · with risk factors" : " · no risk factors") : ""}
            </p>
            <p className="mt-0.5 text-2xl font-black leading-tight">{plan.title}</p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              {diff >= 0
                ? `${fmt(Math.abs(diff))} ${unitTxt} ABOVE the phototherapy line (${fmt(lineVals.photo)})`
                : `${fmt(Math.abs(diff))} ${unitTxt} below the phototherapy line (${fmt(lineVals.photo)})`}
            </p>
          </div>

          <div className="divide-y-2 divide-slate-200">
            <div className="flex items-center gap-3 px-4 py-3">
              <span className="w-28 shrink-0 text-xs font-bold uppercase tracking-wide text-slate-600">Phototherapy</span>
              <span className="text-base font-extrabold text-slate-900">{plan.phototherapy}</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3">
              <span className="w-28 shrink-0 text-xs font-bold uppercase tracking-wide text-slate-600">Repeat bilirubin</span>
              <span className="text-base font-extrabold text-slate-900">{plan.repeat}</span>
            </div>
            {plan.steps.length > 0 && (
              <ol className="list-decimal space-y-1 px-4 py-3 pl-8 text-sm font-semibold text-slate-800">
                {plan.steps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            )}
          </div>

          <div className="grid grid-cols-3 gap-px bg-slate-900 text-center text-white">
            <div className="bg-orange-700 px-2 py-2">
              <p className="text-[10px] font-bold uppercase">Phototherapy</p>
              <p className="text-base font-black">{fmt(lineVals.photo)}</p>
            </div>
            <div className={`${lineVals.mid != null ? "bg-purple-800" : "bg-slate-700"} px-2 py-2`}>
              <p className="text-[10px] font-bold uppercase">{lineVals.mid != null ? "Escalation" : "Recheck from"}</p>
              <p className="text-base font-black">{fmt(lineVals.mid ?? lineVals.photo - (unit === "mgdl" ? 50 / 17.1 : 50))}</p>
            </div>
            <div className="bg-red-900 px-2 py-2">
              <p className="text-[10px] font-bold uppercase">Exchange</p>
              <p className="text-base font-black">{fmt(lineVals.exchange)}</p>
            </div>
          </div>

          <div className="px-2 pt-2">
            <Chart lines={lines} unit={unit} point={{ h: ageHours!, v: val }}
              prev={prev ? { h: prev.h, v: fromUmolU(prev.umol) } : null} tcb={isTcb} />
            <p className="px-2 pb-2 text-[11px] font-semibold text-slate-600">
              ● this baby{prev ? " · grey = previous" : ""}{rate ? ` · rise ${rate}` : ""}
            </p>
          </div>

          <details className="border-t-2 border-slate-200 px-4 py-2">
            <summary className="cursor-pointer text-xs font-bold text-slate-700">Full guideline notes</summary>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-700">
              {detail.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </details>
        </section>
      )}

      {!plan && !err && (
        <p className="mt-3 text-sm font-semibold text-slate-600">
          {aapOutOfRange
            ? "AAP 2022 applies from 35 weeks. Choose NICE for babies under 35 weeks."
            : ready && needRisk
              ? "Choose “Without” or “With risk factors” to see the plan."
              : "Enter age and bilirubin — the plan appears instantly."}
        </p>
      )}

      <p className="mt-3 text-[10px] leading-snug text-slate-500">
        {isAap
          ? "AAP 2022 (Pediatrics 2022;150:e2022058859), ≥ 35 weeks. Escalation of care = exchange − 2 mg/dL."
          : "NICE CG98 Jaundice in newborn babies under 28 days (updated 2023), all gestations."}{" "}
        Use serum bilirubin for treatment decisions.
      </p>

      <SaveButton
        tool="Neonatal Jaundice"
        build={() =>
          plan && lineVals
            ? {
                title: `${mName} ${fmt(val)} ${unitTxt} at ${ageHours} h, ${gaText}${isAap ? (anyRf ? ", with risk factors" : ", no risk factors") : ""} — ${plan.title}`,
                detail: [
                  `Phototherapy: ${plan.phototherapy}`,
                  `Repeat: ${plan.repeat}`,
                  `Lines — photo ${fmt(lineVals.photo)}, exchange ${fmt(lineVals.exchange)} ${unitTxt}`,
                  ...plan.steps,
                ].join(" · "),
              }
            : null
        }
      />
    </div>
  );
}
