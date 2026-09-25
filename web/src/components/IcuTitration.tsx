import { useMemo, useState } from "react";
import {
  ICU_SOURCES,
  INFUSIONS,
  adultMaintenanceFluids,
  assessPotassium,
  concentration,
  correctedCa,
  correctedNa,
  doseFromRate,
  freeWaterDeficit,
  isWeightBased,
  milrinoneRenalMax,
  naChangePerLitre,
  pedMaintenanceFluids,
  rateFromDose,
  restrictedFluidPlans,
  sodiumDeficit,
  tbwFactor,
  type SourceKey,
} from "../lib/icuMath";
import SaveButton from "./SaveButton";

function num(v: string): number | "" {
  if (v.trim() === "") return "";
  const n = Number(v);
  return Number.isFinite(n) ? n : "";
}

const card = "rounded-xl border-2 border-slate-300 bg-white p-4";
const label = "text-xs font-bold text-slate-700";
const input =
  "mt-1 w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-2.5 text-base font-semibold text-slate-900 outline-none focus:border-slate-900";
const chip = (on: boolean) =>
  `rounded-lg px-4 py-2 text-sm font-bold transition ${on ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-800 hover:bg-slate-200"}`;

const BAND_STYLES = {
  normal: "border-emerald-700 bg-emerald-50 text-emerald-950",
  caution: "border-amber-600 bg-amber-50 text-amber-950",
  alert: "border-red-700 bg-red-50 text-red-950",
} as const;

function Sources({ keys }: { keys: SourceKey[] }) {
  return (
    <p className="mt-2 text-[11px] leading-snug text-slate-600">
      Source:{" "}
      {keys.map((k, i) => (
        <span key={k}>
          {i > 0 && "; "}
          <a href={ICU_SOURCES[k].url} target="_blank" rel="noreferrer" className="font-semibold text-blue-800 underline">
            {ICU_SOURCES[k].label}
          </a>
        </span>
      ))}
    </p>
  );
}

type Topic = "drips" | "fluids" | "electrolytes";
const GROUPS = ["Vasopressor", "Inotrope", "Vasodilator", "Sedation / analgesia"] as const;

export default function IcuTitration() {
  const [mode, setMode] = useState<"adult" | "child">("adult");
  const [topic, setTopic] = useState<Topic>("drips");
  const [weight, setWeight] = useState<number | "">("");
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState<number | "">("");
  const [creatinine, setCreatinine] = useState<number | "">("");

  const [drugId, setDrugId] = useState(INFUSIONS[0].id);
  const [dose, setDose] = useState<number | "">("");
  const [pumpRate, setPumpRate] = useState<number | "">("");
  const [amount, setAmount] = useState<number | "">(INFUSIONS[0].amount);
  const [volume, setVolume] = useState<number | "">(INFUSIONS[0].volume);

  const [atRisk, setAtRisk] = useState(false);

  const [na, setNa] = useState<number | "">("");
  const [k, setK] = useState<number | "">("");
  const [mg, setMg] = useState<number | "">("");
  const [glucose, setGlucose] = useState<number | "">("");
  const [ca, setCa] = useState<number | "">("");
  const [albumin, setAlbumin] = useState<number | "">("");

  const child = mode === "child";
  const w = weight === "" ? null : Number(weight);
  const ageN = age === "" ? null : Number(age);
  const elderly = !child && ageN != null && ageN >= 65;

  // Cockcroft–Gault for adults when age, weight, creatinine and sex are known.
  const crcl =
    !child && ageN != null && w != null && creatinine !== "" && Number(creatinine) > 0
      ? Math.round((((140 - ageN) * w) / (72 * Number(creatinine))) * (sex === "female" ? 0.85 : 1))
      : null;
  const renalConcern = (crcl != null && crcl < 50) || (creatinine !== "" && Number(creatinine) >= 1.5);

  const drug = INFUSIONS.find((d) => d.id === drugId)!;
  const range = child ? drug.child : drug.adult;
  const conc =
    range && amount !== "" && volume !== ""
      ? concentration(Number(amount), drug.amountUnit, Number(volume), range.unit)
      : null;
  const concUnit = range ? (range.unit.startsWith("mU") ? "mU" : range.unit.split("/")[0]) : "";
  const rate = range && conc && dose !== "" ? rateFromDose(range.unit, Number(dose), w ?? 0, conc) : null;
  const doseBack = range && conc && pumpRate !== "" ? doseFromRate(range.unit, Number(pumpRate), w ?? 0, conc) : null;
  const needsWeight = range ? isWeightBased(range.unit) && w == null : false;
  const milMax = drug.id === "milrinone" && crcl != null ? milrinoneRenalMax(crcl) : null;
  const nonStandard = amount !== drug.amount || volume !== drug.volume;

  const pickDrug = (id: string) => {
    const d = INFUSIONS.find((x) => x.id === id)!;
    setDrugId(id); setDose(""); setPumpRate(""); setAmount(d.amount); setVolume(d.volume);
  };

  const fluids = useMemo(() => {
    if (w == null) return null;
    if (child) {
      const m = pedMaintenanceFluids(w);
      return m ? { label: `Holliday–Segar: ${m.daily} ml/day (${m.hourly} ml/h by 4-2-1)`, daily: m.daily } : null;
    }
    const a = adultMaintenanceFluids(w, atRisk);
    return a ? { label: `${a.low}–${a.high} ml/day (${atRisk ? "20–25" : "25–30"} ml/kg/day)`, daily: Math.round((a.low + a.high) / 2) } : null;
  }, [w, child, atRisk]);

  const naNum = na === "" ? null : Number(na);
  const tbw = w != null ? tbwFactor(sex, child, elderly) * w : null;
  const kAssessment = k === "" ? null : assessPotassium(Number(k), child, renalConcern);
  const mgNum = mg === "" ? null : Number(mg);
  const caCorr = ca !== "" && albumin !== "" ? correctedCa(Number(ca), Number(albumin)) : ca !== "" ? Number(ca) : null;

  return (
    <div className="mx-auto max-w-3xl px-3 py-5 md:px-6">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">ICU Titration</h2>
      <p className="text-xs font-semibold text-slate-600">
        Every dose and formula cites its guideline — audited September 2026. Tap a source to open it.
      </p>

      <section className={`mt-3 ${card}`}>
        <div className="flex flex-wrap gap-2">
          {(["adult", "child"] as const).map((m) => (
            <button key={m} type="button" onClick={() => setMode(m)} className={chip(mode === m)}>
              {m === "adult" ? "Adult" : "Child"}
            </button>
          ))}
          <span className="mx-1 self-center text-slate-300">|</span>
          {(["male", "female"] as const).map((s) => (
            <button key={s} type="button" onClick={() => setSex(s)} className={chip(sex === s)}>
              {s === "male" ? "Male" : "Female"}
            </button>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <label className="block"><span className={label}>Weight (kg)</span>
            <input type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(num(e.target.value))} className={input} /></label>
          {!child && (
            <label className="block"><span className={label}>Age (y)</span>
              <input type="number" inputMode="numeric" value={age} onChange={(e) => setAge(num(e.target.value))} className={input} /></label>
          )}
          <label className="block"><span className={label}>Creatinine (mg/dL)</span>
            <input type="number" inputMode="decimal" step="0.1" value={creatinine} onChange={(e) => setCreatinine(num(e.target.value))} className={input} /></label>
        </div>
        {crcl != null && (
          <p className="mt-2 text-xs font-bold text-slate-800">Cockcroft–Gault CrCl ≈ {crcl} ml/min{crcl < 50 ? " — renal dose notes apply" : ""}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {(["drips", "fluids", "electrolytes"] as const).map((t) => (
            <button key={t} type="button" onClick={() => setTopic(t)}
              className={`rounded-lg px-4 py-2 text-sm font-bold ${topic === t ? "bg-orange-900 text-white" : "bg-slate-100 text-slate-800"}`}>
              {t === "drips" ? "Drips" : t === "fluids" ? "Fluids" : "Electrolytes"}
            </button>
          ))}
        </div>
      </section>

      {topic === "drips" && (
        <section className={`mt-4 ${card}`}>
          <label className="block"><span className={label}>Drug</span>
            <select value={drugId} onChange={(e) => pickDrug(e.target.value)} className={input}>
              {GROUPS.map((g) => (
                <optgroup key={g} label={g}>
                  {INFUSIONS.filter((d) => d.group === g).map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
                </optgroup>
              ))}
            </select></label>

          {!range ? (
            <p className="mt-3 rounded-lg border-2 border-red-700 bg-red-50 p-3 text-sm font-bold text-red-950">{drug.childNote}</p>
          ) : (
            <>
              <div className="mt-3 rounded-lg bg-slate-900 px-3 py-2 text-white">
                <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">{child ? "Child" : "Adult"} range</p>
                <p className="text-lg font-black">{range.min}–{range.max} {range.unit}</p>
                <p className="text-xs font-semibold text-white/85">Start: {range.start}</p>
              </div>

              <div className="mt-3 flex flex-wrap items-end gap-2">
                <label className="block w-24"><span className={label}>Drug ({drug.amountUnit})</span>
                  <input type="number" inputMode="decimal" value={amount} onChange={(e) => setAmount(num(e.target.value))} className={input} /></label>
                <span className="pb-3 text-sm font-bold text-slate-700">in</span>
                <label className="block w-24"><span className={label}>Volume (ml)</span>
                  <input type="number" inputMode="decimal" value={volume} onChange={(e) => setVolume(num(e.target.value))} className={input} /></label>
                <p className="pb-3 text-sm font-bold text-slate-900">
                  = {conc != null ? `${Math.round(conc * 1000) / 1000} ${concUnit}/ml` : "—"}
                </p>
                {nonStandard && (
                  <button type="button" onClick={() => { setAmount(drug.amount); setVolume(drug.volume); }}
                    className="pb-3 text-xs font-bold text-blue-800 underline">standard</button>
                )}
              </div>
              <p className="mt-1 text-xs text-slate-600">Standard: {drug.amount} {drug.amountUnit} in {drug.volume} ml {drug.diluent}. Change it to match your syringe.</p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-lg border-2 border-slate-300 p-3">
                  <label className="block"><span className={label}>Dose ({range.unit}) → pump</span>
                    <input type="number" inputMode="decimal" step="0.01" value={dose} onChange={(e) => setDose(num(e.target.value))} className={input} placeholder={`${range.min}–${range.max}`} /></label>
                  <p className="mt-2 text-2xl font-black text-slate-900">{rate != null ? `${rate} ml/h` : "—"}</p>
                </div>
                <div className="rounded-lg border-2 border-slate-300 p-3">
                  <label className="block"><span className={label}>Pump (ml/h) → dose</span>
                    <input type="number" inputMode="decimal" step="0.1" value={pumpRate} onChange={(e) => setPumpRate(num(e.target.value))} className={input} /></label>
                  <p className="mt-2 text-2xl font-black text-slate-900">{doseBack != null ? `${doseBack}` : "—"}</p>
                  <p className="text-xs font-semibold text-slate-600">{range.unit}</p>
                </div>
              </div>
              {needsWeight && <p className="mt-2 text-sm font-bold text-amber-800">Enter weight — this dose is per kg.</p>}

              {[dose !== "" ? Number(dose) : null, doseBack].some((v) => v != null && (v > range.max || v < range.min)) && (
                <p className="mt-2 rounded-md border-2 border-red-700 bg-red-50 p-2 text-sm font-bold text-red-950">
                  Outside the usual {child ? "child" : "adult"} range ({range.min}–{range.max} {range.unit}) — double-check before running.
                </p>
              )}
              {milMax != null && (
                <p className="mt-2 rounded-md border-2 border-amber-600 bg-amber-50 p-2 text-sm font-bold text-amber-950">
                  CrCl {crcl} ml/min → milrinone maximum {milMax} mcg/kg/min (label renal table).
                </p>
              )}
              {renalConcern && drug.renalNote && (
                <p className="mt-2 rounded-md border-2 border-amber-600 bg-amber-50 p-2 text-sm text-amber-950">
                  <strong>Renal:</strong> {drug.renalNote}
                </p>
              )}
              {child && drug.childNote && (
                <p className="mt-2 rounded-md border-2 border-amber-600 bg-amber-50 p-2 text-sm font-semibold text-amber-950">{drug.childNote}</p>
              )}
            </>
          )}

          <p className="mt-3 text-sm text-slate-800"><strong>How to use:</strong> {drug.titration}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-800">
            {drug.cautions.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <Sources keys={drug.sources} />
        </section>
      )}

      {topic === "fluids" && (
        <section className={`mt-4 ${card}`}>
          <h3 className="text-base font-extrabold text-slate-900">IV fluids — maintenance &amp; restrictions</h3>
          {!child && (
            <label className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <input type="checkbox" checked={atRisk} onChange={(e) => setAtRisk(e.target.checked)} className="h-4 w-4 accent-slate-900" />
              Older / frail, cardiac or renal impairment, or malnourished (20–25 ml/kg/day)
            </label>
          )}
          {fluids ? (
            <>
              <p className="mt-2 rounded-lg bg-slate-900 px-3 py-2 text-base font-black text-white">{fluids.label}</p>
              {!child && (
                <p className="mt-2 text-sm text-slate-800">
                  Per day also give ≈ 1 mmol/kg each of Na⁺, K⁺ and Cl⁻ and 50–100 g glucose; use ideal body weight in obesity (NICE CG174).
                </p>
              )}
              {child && (
                <p className="mt-2 text-sm text-slate-800">
                  Use isotonic fluid (Na⁺ 131–154 mmol/L, e.g. 0.9% NaCl with 5% glucose); check electrolytes and glucose at least daily (NICE NG29).
                </p>
              )}
              <ul className="mt-2 space-y-2">
                {restrictedFluidPlans(fluids.daily).map((p) => (
                  <li key={p.label} className="rounded-lg border-2 border-slate-200 p-3 text-sm">
                    <p className="font-bold text-slate-900">{p.label}: <span className="text-slate-950">{p.dailyMl} ml/day</span></p>
                    <p className="mt-0.5 text-slate-700">{p.note}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-800">
                <strong>Resuscitation is separate from maintenance.</strong>{" "}
                {child
                  ? "Septic shock with ICU access: 10–20 ml/kg balanced crystalloid boluses, up to 40–60 ml/kg in the first hour, reassessing after each and stopping if fluid overload appears. Without ICU access and no hypotension: no bolus — maintenance only (SSC 2020)."
                  : "Sepsis-induced hypoperfusion: at least 30 ml/kg balanced crystalloid within the first 3 h, then guide further fluid by dynamic measures (SSC 2021)."}
              </p>
            </>
          ) : (
            <p className="mt-2 text-sm text-slate-600">Enter weight to compute fluid plans.</p>
          )}
          <Sources keys={child ? ["NICE_NG29", "SSCPEDS2020", "ISPAD2022"] : ["NICE_CG174", "SSC2021"]} />
        </section>
      )}

      {topic === "electrolytes" && (
        <section className={`mt-4 ${card}`}>
          <h3 className="text-base font-extrabold text-slate-900">Electrolytes — enter measured values</h3>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <label className="block"><span className={label}>K⁺ (mEq/L)</span>
              <input type="number" inputMode="decimal" step="0.1" value={k} onChange={(e) => setK(num(e.target.value))} className={input} /></label>
            <label className="block"><span className={label}>Na⁺ (mEq/L)</span>
              <input type="number" inputMode="decimal" value={na} onChange={(e) => setNa(num(e.target.value))} className={input} /></label>
            <label className="block"><span className={label}>Mg²⁺ (mg/dL)</span>
              <input type="number" inputMode="decimal" step="0.1" value={mg} onChange={(e) => setMg(num(e.target.value))} className={input} /></label>
            <label className="block"><span className={label}>Glucose (mg/dL)</span>
              <input type="number" inputMode="decimal" value={glucose} onChange={(e) => setGlucose(num(e.target.value))} className={input} /></label>
            <label className="block"><span className={label}>Ca²⁺ (mg/dL)</span>
              <input type="number" inputMode="decimal" step="0.1" value={ca} onChange={(e) => setCa(num(e.target.value))} className={input} /></label>
            <label className="block"><span className={label}>Albumin (g/dL)</span>
              <input type="number" inputMode="decimal" step="0.1" value={albumin} onChange={(e) => setAlbumin(num(e.target.value))} className={input} /></label>
          </div>

          <div className="mt-3 space-y-3 text-sm">
            {kAssessment && (
              <div className={`rounded-lg border-2 p-3 ${BAND_STYLES[kAssessment.band]}`}>
                <p className="font-extrabold">{kAssessment.classification}</p>
                {kAssessment.band !== "normal" ? (
                  <ol className="mt-1 list-decimal space-y-1 pl-5">{kAssessment.actions.map((a, i) => (<li key={i}>{a}</li>))}</ol>
                ) : (<p className="mt-1">{kAssessment.actions[0]}</p>)}
                <Sources keys={Number(k) > 5 ? ["UKKA2023"] : ["BNF_KCL"]} />
              </div>
            )}

            {naNum != null && glucose !== "" && Number(glucose) > 100 && (
              <div className="rounded-lg border-2 border-slate-300 p-3">
                <p><strong>Na⁺ corrected for glucose:</strong> {correctedNa(naNum, Number(glucose))} (Katz 1.6) · {correctedNa(naNum, Number(glucose), 2.4)} (Hillier 2.4 — more accurate above 400 mg/dL). Treat the corrected value.</p>
                <Sources keys={["HILLIER1999"]} />
              </div>
            )}

            {naNum != null && naNum < 135 && (
              <div className={`rounded-lg border-2 p-3 ${naNum < 125 ? BAND_STYLES.alert : BAND_STYLES.caution}`}>
                <p className="font-extrabold">Hyponatraemia (Na⁺ {naNum})</p>
                <ol className="mt-1 list-decimal space-y-1 pl-5">
                  <li>
                    <strong>Severe symptoms</strong> (seizure, coma, vomiting, somnolence):{" "}
                    {child
                      ? "3% NaCl 2 ml/kg (max 100 ml) over 10 min, repeat up to 2 more times until symptoms settle or Na⁺ rises 5."
                      : "3% NaCl 150 ml over 20 min; recheck Na⁺; repeat up to 2 more times until Na⁺ rises 5 mEq/L (European 2014; US panel 2013: 100 ml over 10 min ×3)."}
                  </li>
                  <li><strong>Limit: ≤ 10 mEq/L in the first 24 h and ≤ 8 mEq/L in each further 24 h</strong>; ≤ 8 in the first 24 h if high risk of osmotic demyelination (Na⁺ ≤ 105, hypokalaemia, alcohol use, malnutrition, liver disease). Recheck Na⁺ every 2–4 h.</li>
                  {tbw != null && (
                    <>
                      <li>
                        TBW {tbw.toFixed(1)} L ({tbwFactor(sex, child, elderly)} × weight{elderly ? ", age ≥ 65" : ""}).
                        1 L of 3% NaCl raises Na⁺ ≈ <strong>{naChangePerLitre(513, naNum, tbw)} mEq/L</strong>; 1 L of 0.9% NaCl ≈ {naChangePerLitre(154, naNum, tbw)} (Adrogué–Madias).
                      </li>
                      <li>Na⁺ deficit to raise by 5: ≈ {sodiumDeficit(w!, naNum, naNum + 5, sex, child, elderly)} mEq.</li>
                    </>
                  )}
                  {tbw == null && <li>Enter weight for TBW-based estimates.</li>}
                </ol>
                <Sources keys={["EUHYPONA2014", "USHYPONA2013", "ADROGUE2000"]} />
              </div>
            )}

            {naNum != null && naNum > 145 && (
              <div className={`rounded-lg border-2 p-3 ${naNum >= 160 ? BAND_STYLES.alert : BAND_STYLES.caution}`}>
                <p className="font-extrabold">Hypernatraemia (Na⁺ {naNum})</p>
                <ol className="mt-1 list-decimal space-y-1 pl-5">
                  {tbw != null ? (
                    <>
                      <li>Free-water deficit ≈ <strong>{freeWaterDeficit(w!, naNum, sex, child, elderly)} L</strong> (TBW {tbw.toFixed(1)} L), plus ongoing losses.</li>
                      <li>1 L of 5% dextrose lowers Na⁺ ≈ {Math.abs(naChangePerLitre(0, naNum, tbw))} mEq/L; 1 L of 0.45% NaCl ≈ {Math.abs(naChangePerLitre(77, naNum, tbw))} (Adrogué–Madias).</li>
                    </>
                  ) : (<li>Enter weight for the free-water deficit.</li>)}
                  <li><strong>Chronic (&gt; 48 h): lower by ≤ 10–12 mEq/L per 24 h (≈ 0.5 mEq/L/h)</strong>; acute (&lt; 48 h) may be corrected faster, ≈ 1 mEq/L/h. Recheck Na⁺ every 4–6 h.</li>
                </ol>
                <Sources keys={["ADROGUE2000"]} />
              </div>
            )}

            {naNum != null && naNum >= 135 && naNum <= 145 && (
              <p className={`rounded-lg border-2 p-3 ${BAND_STYLES.normal}`}>Na⁺ {naNum} is normal (135–145).</p>
            )}

            {mgNum != null && (
              mgNum < 1.7 ? (
                <div className={`rounded-lg border-2 p-3 ${mgNum < 1.2 ? BAND_STYLES.alert : BAND_STYLES.caution}`}>
                  <p className="font-extrabold">{mgNum < 1.2 ? "Severe" : "Mild–moderate"} hypomagnesaemia (Mg²⁺ {mgNum} mg/dL)</p>
                  <ol className="mt-1 list-decimal space-y-1 pl-5">
                    <li>{child
                      ? "MgSO₄ 25–50 mg/kg (max 2 g) IV over 20–30 min."
                      : mgNum < 1.2 ? "MgSO₄ 2 g IV over 15 min, then 4–6 g over the next 24 h if needed." : "MgSO₄ 1–2 g IV over 1–2 h (or oral if asymptomatic)."}</li>
                    <li>Torsades de pointes: MgSO₄ {child ? "25–50 mg/kg (max 2 g)" : "2 g"} IV — over 1–2 min if pulseless, over 10–15 min with a pulse (AHA ACLS/PALS).</li>
                    <li>Low Mg²⁺ keeps K⁺ and Ca²⁺ low — correct Mg²⁺ first.{renalConcern ? " Renal impairment: halve the dose, check reflexes and levels." : ""}</li>
                  </ol>
                  <Sources keys={["AHA2020"]} />
                </div>
              ) : mgNum > 2.4 ? (
                <p className={`rounded-lg border-2 p-3 ${BAND_STYLES.caution}`}><strong>High Mg²⁺ ({mgNum}):</strong> stop magnesium; if symptomatic (areflexia, hypotension, bradycardia) give calcium gluconate 10% {child ? "0.5 ml/kg (max 20 ml)" : "10–20 ml"} IV and consider dialysis in renal failure.</p>
              ) : (
                <p className={`rounded-lg border-2 p-3 ${BAND_STYLES.normal}`}>Mg²⁺ {mgNum} is normal (1.7–2.4 mg/dL).</p>
              )
            )}

            {caCorr != null && (
              <div className={`rounded-lg border-2 p-3 ${caCorr < 8.5 || caCorr > 10.5 ? (caCorr < 7.5 || caCorr > 12 ? BAND_STYLES.alert : BAND_STYLES.caution) : BAND_STYLES.normal}`}>
                <p className="font-extrabold">
                  {albumin !== "" ? "Albumin-corrected " : ""}Ca²⁺ {caCorr} mg/dL — {caCorr < 8.5 ? "low" : caCorr > 10.5 ? "high" : "normal (8.5–10.5)"}
                </p>
                {albumin !== "" && <p className="text-xs">Corrected = measured + 0.8 × (4 − albumin). In ICU prefer ionised calcium — albumin correction is unreliable in critical illness.</p>}
                {caCorr < 8.5 && (
                  <p className="mt-1">Symptomatic (tetany, seizures, prolonged QT): calcium gluconate 10% {child ? "0.5 ml/kg (max 20 ml)" : "10–20 ml in 50–100 ml 5% dextrose"} IV over 10 min on ECG monitor{child ? "" : ", then infusion 100 ml 10% in 1 L at 50 ml/h titrated"}. Check Mg²⁺, PTH and vitamin D.</p>
                )}
                {caCorr > 10.5 && (
                  <p className="mt-1">IV 0.9% NaCl rehydration first{child ? "" : " (often 4–6 L in 24 h if the heart allows)"}; stop calcium, vitamin D and thiazides; then IV bisphosphonate (e.g. zoledronic acid 4 mg, renally adjusted) for persistent or symptomatic hypercalcaemia.</p>
                )}
                <Sources keys={caCorr > 10.5 ? ["SFE_HYPERCA2016"] : ["SFE_HYPOCA2016"]} />
              </div>
            )}

            {k === "" && na === "" && mg === "" && ca === "" && (
              <p className="text-sm text-slate-600">Enter a value — only the advice relevant to that value is shown.</p>
            )}
          </div>
        </section>
      )}

      <SaveButton
        tool="ICU"
        build={() => {
          if (topic === "electrolytes" && kAssessment)
            return { title: kAssessment.classification, detail: kAssessment.actions.join(" · ") };
          if (topic === "drips" && range && rate != null)
            return {
              title: `${drug.name} — ${dose} ${range.unit}`,
              detail: `${w ?? "?"} kg · ${amount} ${drug.amountUnit} in ${volume} ml · ${rate} ml/h`,
            };
          return null;
        }}
      />

      <details className="mt-4 rounded-xl border-2 border-slate-300 bg-white p-3">
        <summary className="cursor-pointer text-sm font-extrabold text-slate-900">All references used in this tool</summary>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs">
          {(Object.keys(ICU_SOURCES) as SourceKey[]).map((key) => (
            <li key={key}>
              <a href={ICU_SOURCES[key].url} target="_blank" rel="noreferrer" className="font-semibold text-blue-800 underline">{ICU_SOURCES[key].label}</a>
            </li>
          ))}
        </ol>
      </details>

      <p className="mt-3 text-xs leading-relaxed text-slate-600">
        Insulin infusion and DKA rates are in the Insulin tool. Institutional protocols and senior review prevail — especially for
        hypertonic saline, concentrated potassium and vasoactive drugs.
      </p>
    </div>
  );
}
