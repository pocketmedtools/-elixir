import { usePersist } from "../lib/lastState";
import {
  BAND_LABEL,
  MMOL_TO_MGDL,
  RISK_ENHANCERS,
  STATIN_DOSES,
  formatPct,
  pceOptimalRisk,
  pceRisk,
  preventRisk,
  riskBand,
  statinPlan,
  type Race,
  type RiskBand,
  type Sex,
} from "../lib/ascvdMath";
import { egfrCkdEpi2021 } from "../lib/creatinineClearanceMath";
import SaveButton from "./SaveButton";

const input =
  "mt-1 w-full rounded-lg border-2 border-slate-300 px-3 py-2.5 text-base font-semibold text-slate-900 outline-none focus:border-slate-900";
const label = "text-xs font-bold text-slate-700";

function num(v: string): number | "" {
  if (v.trim() === "") return "";
  const n = Number(v);
  return Number.isFinite(n) ? n : "";
}

const BAND_STYLE: Record<RiskBand, string> = {
  low: "bg-emerald-800",
  borderline: "bg-amber-600",
  intermediate: "bg-orange-700",
  high: "bg-red-700",
};

function Choice<T extends string | boolean>({
  value,
  onChange,
  options,
  ariaLabel,
}: {
  value: T | null;
  onChange: (v: T) => void;
  options: { v: T; label: string }[];
  ariaLabel: string;
}) {
  return (
    <div className="mt-1 flex gap-1.5" role="group" aria-label={ariaLabel}>
      {options.map((o) => {
        const on = value === o.v;
        return (
          <button key={String(o.v)} type="button" aria-pressed={on} onClick={() => onChange(o.v)}
            className={`flex-1 rounded-lg border-2 px-2 py-2 text-sm font-extrabold ${on ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-800"}`}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

const YES_NO = [{ v: false, label: "No" }, { v: true, label: "Yes" }];

export default function AscvdTool() {
  const [known, setKnown] = usePersist<boolean>("ascvd", "known", false);
  const [age, setAge] = usePersist<number | "">("ascvd", "age", "");
  const [sex, setSex] = usePersist<Sex | "">("ascvd", "sex", "");
  const [race, setRace] = usePersist<Race | "">("ascvd", "race", "");
  const [unit, setUnit] = usePersist<"mg" | "mmol">("ascvd", "unit", "mg");
  const [tcIn, setTc] = usePersist<number | "">("ascvd", "tc", "");
  const [hdlIn, setHdl] = usePersist<number | "">("ascvd", "hdl", "");
  const [ldlIn, setLdl] = usePersist<number | "">("ascvd", "ldl", "");
  const [sbp, setSbp] = usePersist<number | "">("ascvd", "sbp", "");
  const [bpTx, setBpTx] = usePersist<boolean | "">("ascvd", "bpTx", "");
  const [dm, setDm] = usePersist<boolean | "">("ascvd", "dm", "");
  const [smoker, setSmoker] = usePersist<boolean | "">("ascvd", "smoker", "");
  const [statin, setStatin] = usePersist<boolean | "">("ascvd", "statin", "");
  const [kidney, setKidney] = usePersist<"creat" | "egfr">("ascvd", "kidney", "creat");
  const [creat, setCreat] = usePersist<number | "">("ascvd", "creat", "");
  const [egfrIn, setEgfr] = usePersist<number | "">("ascvd", "egfr", "");
  const [weight, setWeight] = usePersist<number | "">("ascvd", "weight", "");
  const [height, setHeight] = usePersist<number | "">("ascvd", "height", "");
  const [enh, setEnh] = usePersist<string[]>("ascvd", "enhancers", []);

  const toMg = (v: number | "") => (v === "" ? null : unit === "mmol" ? v * MMOL_TO_MGDL : v);
  const tc = toMg(tcIn);
  const hdl = toMg(hdlIn);
  const ldl = toMg(ldlIn);

  const egfr =
    kidney === "egfr"
      ? egfrIn === "" ? null : egfrIn
      : creat === "" || age === "" || sex === ""
        ? null
        : egfrCkdEpi2021(sex === "female" ? "Female" : "Male", age, creat);
  const bmi = weight !== "" && height !== "" && height > 0 ? weight / (height / 100) ** 2 : null;

  const core =
    age !== "" && sex !== "" && tc != null && hdl != null && sbp !== "" && bpTx !== "" && dm !== "" && smoker !== "";
  const pce = core && race !== "" ? pceRisk({ age, sex, race, tc, hdl, sbp, bpTx, dm, smoker }) : null;
  const optimal = pce?.ok && age !== "" && sex !== "" && race !== "" ? pceOptimalRisk(age, sex, race) : null;
  const preventReady = core && statin !== "" && egfr != null && bmi != null;
  const p10 = preventReady ? preventRisk({ age, sex, tc, hdl, sbp, bpTx, dm, smoker, statin, egfr, bmi }, 10) : null;
  const p30 = preventReady && age <= 59 ? preventRisk({ age, sex, tc, hdl, sbp, bpTx, dm, smoker, statin, egfr, bmi }, 30) : null;

  const plan =
    age !== "" && (known || (dm !== "" && (pce != null || ldl != null)))
      ? statinPlan({ age, dm: dm === true, ldl, pce: pce?.ok ? pce.risk : null, enhancers: enh.length, ascvd: known })
      : null;

  const unitLabel = unit === "mg" ? "mg/dL" : "mmol/L";
  const toggleEnh = (id: string) => setEnh((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]));

  return (
    <div className="mx-auto max-w-xl px-3 py-5">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">ASCVD Risk</h2>
      <p className="mt-0.5 text-xs font-semibold text-slate-600">
        10-year heart attack / stroke risk — 2013 Pooled Cohort Equations (as on MDCalc) plus the newer AHA PREVENT 2023.
      </p>

      <section className="mt-3 rounded-xl border-2 border-slate-300 bg-white p-3">
        <span className={label}>Already has clinical ASCVD? (MI, ACS, stable angina, revascularisation, stroke/TIA, PAD)</span>
        <Choice value={known} onChange={setKnown} options={YES_NO} ariaLabel="Known clinical ASCVD" />

        <div className="mt-3 grid grid-cols-2 gap-3">
          <label className="block">
            <span className={label}>Age (years)</span>
            <input type="number" inputMode="numeric" data-adv="2" value={age} onChange={(e) => setAge(num(e.target.value))} className={input} />
          </label>
          <div>
            <span className={label}>Sex</span>
            <Choice value={sex || null} onChange={setSex} ariaLabel="Sex"
              options={[{ v: "female" as Sex, label: "Female" }, { v: "male" as Sex, label: "Male" }]} />
          </div>
        </div>

        <div className="mt-3">
          <span className={label}>Race (Pooled Cohort Equations only)</span>
          <Choice value={race || null} onChange={setRace} ariaLabel="Race"
            options={[
              { v: "white" as Race, label: "White" },
              { v: "black" as Race, label: "African Am." },
              { v: "other" as Race, label: "Other / Indian" },
            ]} />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className={label}>Cholesterol units</span>
          <div className="w-40">
            <Choice value={unit} onChange={setUnit} ariaLabel="Cholesterol units"
              options={[{ v: "mg" as const, label: "mg/dL" }, { v: "mmol" as const, label: "mmol/L" }]} />
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <label className="block">
            <span className={label}>Total chol.</span>
            <input type="number" inputMode="decimal" value={tcIn} onChange={(e) => setTc(num(e.target.value))} className={input} aria-label={`Total cholesterol ${unitLabel}`} />
          </label>
          <label className="block">
            <span className={label}>HDL</span>
            <input type="number" inputMode="decimal" value={hdlIn} onChange={(e) => setHdl(num(e.target.value))} className={input} aria-label={`HDL cholesterol ${unitLabel}`} />
          </label>
          <label className="block">
            <span className={label}>LDL (optional)</span>
            <input type="number" inputMode="decimal" value={ldlIn} onChange={(e) => setLdl(num(e.target.value))} className={input} aria-label={`LDL cholesterol ${unitLabel}`} />
          </label>
        </div>

        <label className="mt-3 block">
          <span className={label}>Systolic BP (mmHg)</span>
          <input type="number" inputMode="numeric" value={sbp} onChange={(e) => setSbp(num(e.target.value))} className={input} />
        </label>

        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
          <div><span className={label}>On BP treatment</span><Choice value={bpTx === "" ? null : bpTx} onChange={setBpTx} options={YES_NO} ariaLabel="On BP treatment" /></div>
          <div><span className={label}>Diabetes</span><Choice value={dm === "" ? null : dm} onChange={setDm} options={YES_NO} ariaLabel="Diabetes" /></div>
          <div><span className={label}>Current smoker</span><Choice value={smoker === "" ? null : smoker} onChange={setSmoker} options={YES_NO} ariaLabel="Current smoker" /></div>
          <div><span className={label}>On statin (PREVENT)</span><Choice value={statin === "" ? null : statin} onChange={setStatin} options={YES_NO} ariaLabel="On statin" /></div>
        </div>

        <p className="mt-4 text-xs font-black uppercase tracking-wide text-slate-500">For PREVENT 2023</p>
        <div className="mt-1 flex items-center justify-between">
          <span className={label}>Kidney function</span>
          <div className="w-48">
            <Choice value={kidney} onChange={setKidney} ariaLabel="Kidney input"
              options={[{ v: "creat" as const, label: "Creatinine" }, { v: "egfr" as const, label: "eGFR" }]} />
          </div>
        </div>
        {kidney === "creat" ? (
          <label className="mt-2 block">
            <span className={label}>Serum creatinine (mg/dL)</span>
            <input type="number" inputMode="decimal" value={creat} onChange={(e) => setCreat(num(e.target.value))} className={input} />
            {egfr != null && <span className="mt-1 block text-xs font-bold text-slate-600">eGFR {egfr} mL/min/1.73 m² (CKD-EPI 2021)</span>}
          </label>
        ) : (
          <label className="mt-2 block">
            <span className={label}>eGFR (mL/min/1.73 m²)</span>
            <input type="number" inputMode="decimal" value={egfrIn} onChange={(e) => setEgfr(num(e.target.value))} className={input} />
          </label>
        )}
        <div className="mt-2 grid grid-cols-2 gap-3">
          <label className="block">
            <span className={label}>Weight (kg)</span>
            <input type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(num(e.target.value))} className={input} />
          </label>
          <label className="block">
            <span className={label}>Height (cm)</span>
            <input type="number" inputMode="decimal" value={height} onChange={(e) => setHeight(num(e.target.value))} className={input} />
          </label>
        </div>
        {bmi != null && <p className="mt-1 text-xs font-bold text-slate-600">BMI {bmi.toFixed(1)} kg/m²</p>}
      </section>

      {/* ---- Pooled Cohort Equations (MDCalc) ---- */}
      {known ? null : pce == null ? (
        <p className="mt-4 text-sm font-semibold text-slate-600">
          Enter age, sex, race, cholesterol, BP and the four Yes/No answers for the 10-year risk.
        </p>
      ) : !pce.ok ? (
        <section className="mt-4 rounded-xl border-2 border-red-300 bg-red-50 p-3 text-sm font-semibold text-red-900">
          <p className="font-black">10-year risk (Pooled Cohort Equations) not calculated</p>
          <ul className="mt-1 list-disc pl-5">{pce.errors.map((e) => <li key={e}>{e}</li>)}</ul>
        </section>
      ) : (
        <section className="mt-4 overflow-hidden rounded-xl border-2 border-slate-900 bg-white" data-testid="pce-card">
          <div className={`flex items-center justify-between gap-3 px-4 py-3 text-white ${BAND_STYLE[riskBand(pce.risk)]}`}>
            <div>
              <p className="text-xs font-bold text-white/85">10-year ASCVD risk · Pooled Cohort Equations</p>
              <p className="text-base font-black">{BAND_LABEL[riskBand(pce.risk)]}</p>
            </div>
            <p className="text-4xl font-black leading-none" data-testid="pce-risk">{formatPct(pce.risk)}</p>
          </div>
          <div className="px-4 py-2 text-xs font-semibold text-slate-700">
            {optimal?.ok && <p>Optimal risk for the same age, sex and race: <b>{formatPct(optimal.risk)}</b></p>}
            {race === "other" && (
              <p className="mt-1">“Other” uses the White equations. They can under-estimate risk in South Asians — tick South Asian ancestry below as a risk enhancer.</p>
            )}
          </div>
        </section>
      )}

      {/* ---- PREVENT ---- */}
      {!known && core && (
        <section className="mt-4 rounded-xl border-2 border-slate-300 bg-white p-3" data-testid="prevent-card">
          <p className="text-sm font-black text-slate-900">PREVENT 2023 (AHA) — newer, race-free</p>
          {!preventReady ? (
            <p className="mt-1 text-xs font-semibold text-slate-600">Add statin use, creatinine/eGFR and weight/height to see PREVENT.</p>
          ) : p10 && !p10.ok ? (
            <ul className="mt-1 list-disc pl-5 text-xs font-semibold text-red-800">{p10.errors.map((e) => <li key={e}>{e}</li>)}</ul>
          ) : p10 && p10.ok ? (
            <>
              <table className="mt-2 w-full text-sm">
                <thead>
                  <tr className="text-left text-[11px] font-black uppercase tracking-wide text-slate-500">
                    <th className="py-1">Risk of</th><th className="py-1 text-right">10-year</th><th className="py-1 text-right">30-year</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-slate-900">
                  {([["totalCvd", "Total CVD"], ["ascvd", "ASCVD"], ["heartFailure", "Heart failure"]] as const).map(([k, name]) => (
                    <tr key={k} className="border-t border-slate-200">
                      <td className="py-1.5">{name}</td>
                      <td className="py-1.5 text-right" data-testid={`prevent10-${k}`}>{formatPct(p10.risks[k])}</td>
                      <td className="py-1.5 text-right">{p30 && p30.ok ? formatPct(p30.risks[k]) : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-1 text-[11px] font-semibold text-slate-500">
                30-year risk is given for ages 30–59 only. PREVENT is better calibrated than the 2013 equations and usually gives lower numbers.
              </p>
              {Number(sbp) >= 130 && Number(sbp) < 140 && (
                <p className="mt-2 rounded-md bg-sky-50 px-2 py-1.5 text-xs font-semibold text-sky-950">
                  Stage 1 hypertension: the 2025 AHA/ACC BP guideline advises starting BP medicine when PREVENT 10-year total CVD risk is ≥7.5% (or with diabetes, CKD or clinical CVD) — here {formatPct(p10.risks.totalCvd)}.
                </p>
              )}
            </>
          ) : null}
        </section>
      )}

      {/* ---- Recommendation ---- */}
      {plan && (
        <section className="mt-4 rounded-xl border-2 border-slate-900 bg-white p-3" data-testid="plan">
          <p className="text-sm font-black text-slate-900">{plan.title}</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm font-semibold text-slate-800">
            {plan.points.map((pt) => <li key={pt}>{pt}</li>)}
          </ul>
          {plan.statin !== "none" && (
            <p className="mt-2 rounded-md bg-slate-100 px-2 py-1.5 text-xs font-semibold text-slate-800">
              {plan.statin === "high" ? STATIN_DOSES.high : plan.statin === "moderate-or-high" ? `${STATIN_DOSES.moderate} ${STATIN_DOSES.high}` : STATIN_DOSES.moderate}
            </p>
          )}
        </section>
      )}

      {!known && (
        <section className="mt-4 rounded-xl border-2 border-slate-300 bg-white p-3">
          <p className="text-sm font-black text-slate-900">Risk-enhancing factors {enh.length > 0 && `(${enh.length})`}</p>
          <p className="text-[11px] font-semibold text-slate-500">Tick any present — they favour a statin at borderline/intermediate risk.</p>
          <div className="mt-2 space-y-1">
            {RISK_ENHANCERS.map((r) => (
              <label key={r.id} className="flex items-start gap-2 text-sm font-semibold text-slate-800">
                <input type="checkbox" checked={enh.includes(r.id)} onChange={() => toggleEnh(r.id)} className="mt-1 h-4 w-4 shrink-0" />
                <span>{r.label}{r.id === "ckd" && egfr != null && egfr < 60 && egfr >= 15 ? <b className="text-amber-800"> — eGFR {egfr} fits</b> : null}</span>
              </label>
            ))}
          </div>
        </section>
      )}

      <p className="mt-3 text-[11px] leading-snug text-slate-500">
        Goff DC et al. 2013 ACC/AHA risk assessment guideline (Pooled Cohort Equations); Khan SS et al. Circulation 2024 (PREVENT, base model);
        2018 AHA/ACC multisociety cholesterol guideline; 2019 ACC/AHA primary prevention guideline. For adults without clinical ASCVD and LDL-C &lt;190 mg/dL.
      </p>

      <SaveButton
        tool="ASCVD Risk"
        build={() => {
          if (known && plan) return { title: `ASCVD: ${plan.title}`, detail: plan.points.join(" ") };
          if (!pce?.ok) return null;
          const prev = p10?.ok ? ` · PREVENT 10-y total CVD ${formatPct(p10.risks.totalCvd)}, ASCVD ${formatPct(p10.risks.ascvd)}, HF ${formatPct(p10.risks.heartFailure)}` : "";
          return {
            title: `ASCVD 10-y ${formatPct(pce.risk)} — ${BAND_LABEL[riskBand(pce.risk)]}`,
            detail: `${age} y ${sex} · TC ${tcIn} HDL ${hdlIn} ${unitLabel} · SBP ${sbp}${bpTx ? " treated" : ""}${dm ? " · diabetes" : ""}${smoker ? " · smoker" : ""}${prev}${plan ? ` · ${plan.title}` : ""}`,
          };
        }}
      />
    </div>
  );
}
