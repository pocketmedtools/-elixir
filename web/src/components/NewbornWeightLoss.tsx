import { useState } from "react";
import {
  assessNewbornWeight,
  plausibleNewbornGrams,
  type WeightBand,
} from "../lib/newbornWeightMath";
import SaveButton from "./SaveButton";

const BAND_STYLES: Record<WeightBand, string> = {
  gain: "border-emerald-300 bg-emerald-50 text-emerald-900",
  normal: "border-emerald-300 bg-emerald-50 text-emerald-900",
  borderline: "border-amber-300 bg-amber-50 text-amber-900",
  significant: "border-red-400 bg-red-50 text-red-800",
  severe: "border-red-500 bg-red-100 text-red-900",
};

const inputCls =
  "w-full min-w-0 rounded-lg border border-slate-200 px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-lime-600";
const selectCls =
  "rounded-lg border border-slate-200 bg-slate-50 px-1.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-lime-600";

type WtUnit = "kg" | "g";

function toGrams(v: string, unit: WtUnit): number | null {
  if (v.trim() === "") return null;
  const n = Number(v);
  if (!Number.isFinite(n) || n <= 0) return null;
  return unit === "kg" ? n * 1000 : n;
}

function fmtKg(g: number): string {
  return `${(g / 1000).toFixed(3)} kg (${Math.round(g)} g)`;
}

export default function NewbornWeightLoss() {
  const [birth, setBirth] = useState("");
  const [today, setToday] = useState("");
  const [unit, setUnit] = useState<WtUnit>("kg");
  const [age, setAge] = useState("");
  const [ageUnit, setAgeUnit] = useState<"hours" | "days">("hours");

  const bG = toGrams(birth, unit);
  const tG = toGrams(today, unit);
  const bOk = bG != null && plausibleNewbornGrams(bG);
  const tOk = tG != null && plausibleNewbornGrams(tG);
  const ageN = age.trim() === "" ? null : Number(age);
  const ageHours =
    ageN == null || !Number.isFinite(ageN) || ageN < 0
      ? null
      : ageUnit === "hours"
        ? ageN
        : ageN * 24;
  const ageText =
    ageHours == null ? null : ageUnit === "hours" ? `${ageN} h of life` : `day ${ageN} of life`;

  const r = bOk && tOk ? assessNewbornWeight(bG, tG, ageHours) : null;
  const red = r && (r.band === "significant" || r.band === "severe");

  const unitHint =
    (bG != null && !bOk) || (tG != null && !tOk)
      ? unit === "kg"
        ? "Weights look out of range for kg — did you mean grams? Switch the unit to g."
        : "Weights look out of range for grams — did you mean kg? Switch the unit to kg."
      : null;

  return (
    <div className="mx-auto max-w-2xl px-3 py-5 md:px-6">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">Newborn Weight Loss</h2>
      <p className="mt-1 text-sm text-slate-700">
        % weight loss = (birth weight − today's weight) ÷ birth weight × 100
      </p>

      <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Birth weight</span>
            <div className="mt-1 flex gap-1">
              <input type="number" inputMode="decimal" min={0} value={birth}
                onChange={(e) => setBirth(e.target.value)} className={inputCls} />
              <select value={unit} onChange={(e) => setUnit(e.target.value as WtUnit)} className={selectCls}
                aria-label="Weight unit">
                <option value="kg">kg</option>
                <option value="g">g</option>
              </select>
            </div>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Today's weight</span>
            <div className="mt-1 flex items-center gap-1">
              <input type="number" inputMode="decimal" min={0} value={today}
                onChange={(e) => setToday(e.target.value)} className={inputCls} />
              <span className="px-1 text-sm font-semibold text-slate-600">{unit}</span>
            </div>
          </label>
          <label className="col-span-2 block sm:col-span-1">
            <span className="text-xs font-semibold text-slate-600">
              Age <span className="font-medium text-slate-500">(optional — for advice)</span>
            </span>
            <div className="mt-1 flex gap-1">
              <input type="number" inputMode="numeric" min={0} value={age}
                onChange={(e) => setAge(e.target.value)} className={inputCls} />
              <select value={ageUnit} onChange={(e) => setAgeUnit(e.target.value as "hours" | "days")}
                className={selectCls} aria-label="Age unit">
                <option value="hours">Hours of life</option>
                <option value="days">Day of life</option>
              </select>
            </div>
          </label>
        </div>
        {unitHint && <p className="mt-2 text-xs font-semibold text-amber-700">{unitHint}</p>}
        {!r && !unitHint && (
          <p className="mt-2 text-xs text-slate-600">
            Enter birth weight and today's weight — the result appears automatically.
          </p>
        )}
      </section>

      {r && (
        <section className={`mt-4 rounded-lg border-2 p-4 shadow-sm ${BAND_STYLES[r.band]}`}>
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">
            {r.percent > 0 ? "Weight loss" : "Weight change"}
            {ageText ? ` · ${ageText}` : ""}
          </p>
          <p className={`mt-1 text-4xl font-extrabold ${red ? "text-red-700" : ""}`}>
            {r.percent > 0 ? `${r.percent.toFixed(1)} %` : `+${Math.abs(r.percent).toFixed(1)} %`}
          </p>
          <p className={`mt-1 text-base font-bold ${red ? "text-red-700" : ""}`}>{r.label}</p>
          <p className="mt-1 text-sm">
            {r.gramsLost > 0
              ? `${r.gramsLost} g lost from birth weight`
              : r.gramsLost < 0
                ? `${Math.abs(r.gramsLost)} g above birth weight`
                : "No change from birth weight"}
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-md bg-white/70 px-2 py-1.5">
              <span className="font-semibold">7 % loss at:</span> {fmtKg(r.mark7)}
            </div>
            <div className="rounded-md bg-white/70 px-2 py-1.5">
              <span className="font-semibold text-red-700">10 % loss at:</span> {fmtKg(r.mark10)}
            </div>
          </div>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {r.recommendations.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {ageHours == null && r.percent > 0 && (
            <p className="mt-2 text-xs italic opacity-80">
              Add hours/day of life for age-specific advice.
            </p>
          )}
        </section>
      )}

      <p className="mt-3 text-[11px] leading-snug text-slate-600">
        Bands: &lt; 7 % expected · 7–9.9 % borderline · ≥ 10 % significant · ≥ 12 % severe.
        Expected nadir day 3–4; weight regained by day 10–14. For healthy term and
        late-preterm babies (AAP / ABM / NICE) — preterm and NICU babies follow unit protocol.
      </p>

      <SaveButton
        tool="Newborn Weight Loss"
        build={() =>
          r
            ? {
                title: `Newborn weight loss ${r.percent > 0 ? r.percent.toFixed(1) : "+" + Math.abs(r.percent).toFixed(1)} % — ${r.label}`,
                detail: [
                  `Birth weight ${fmtKg(bG!)}`,
                  `Today ${fmtKg(tG!)}`,
                  ageText ?? "age not entered",
                  r.gramsLost >= 0 ? `${r.gramsLost} g lost` : `${-r.gramsLost} g gained`,
                  ...r.recommendations,
                ].join(" · "),
              }
            : null
        }
      />
    </div>
  );
}
