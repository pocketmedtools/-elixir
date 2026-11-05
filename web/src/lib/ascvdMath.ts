/**
 * ASCVD risk.
 *
 * 1. Pooled Cohort Equations (PCE) — 2013 ACC/AHA (Goff DC et al., Circulation
 *    2014;129:S49-73), the calculator on MDCalc and the AHA "ASCVD Risk
 *    Estimator Plus". 10-year risk of first hard ASCVD event (CHD death,
 *    non-fatal MI, fatal/non-fatal stroke). Ages 40–79.
 * 2. PREVENT — AHA 2023 (Khan SS et al., Circulation 2024;149:430-449), base
 *    model: race-free, adds eGFR, BMI and statin use; 10-year (ages 30–79) and
 *    30-year (ages 30–59) risk of total CVD, ASCVD and heart failure.
 *
 * Cholesterol is handled in mg/dL inside; 1 mmol/L = 1 / 0.02586 mg/dL.
 */
import { PREVENT_10YR, PREVENT_30YR, type PreventOutcome, type PreventTerm } from "./preventCoefficients";

export type Sex = "female" | "male";
export type Race = "white" | "black" | "other";

export const MMOL_TO_MGDL = 1 / 0.02586;

export interface PceInput {
  age: number;
  sex: Sex;
  race: Race;
  /** Total cholesterol, mg/dL */
  tc: number;
  /** HDL cholesterol, mg/dL */
  hdl: number;
  sbp: number;
  bpTx: boolean;
  dm: boolean;
  smoker: boolean;
}

export interface PreventInput {
  age: number;
  sex: Sex;
  tc: number;
  hdl: number;
  sbp: number;
  bpTx: boolean;
  dm: boolean;
  smoker: boolean;
  statin: boolean;
  /** mL/min/1.73 m² */
  egfr: number;
  /** kg/m² */
  bmi: number;
}

type Range = readonly [number, number];
/** Validated input ranges (AHA ASCVD Risk Estimator Plus / MDCalc). */
export const PCE_LIMITS: Record<"age" | "tc" | "hdl" | "sbp", Range> = {
  age: [40, 79],
  tc: [130, 320],
  hdl: [20, 100],
  sbp: [90, 200],
};
/** Validated input ranges of the PREVENT equations. */
export const PREVENT_LIMITS: Record<"age" | "tc" | "hdl" | "sbp" | "egfr" | "bmi", Range> = {
  age: [30, 79],
  tc: [130, 320],
  hdl: [20, 100],
  sbp: [90, 180],
  egfr: [15, 140],
  bmi: [18.5, 39.9],
};

const NAMES = {
  age: "Age (years)",
  tc: "Total cholesterol (mg/dL)",
  hdl: "HDL cholesterol (mg/dL)",
  sbp: "Systolic BP (mmHg)",
  egfr: "eGFR (mL/min/1.73 m²)",
  bmi: "BMI (kg/m²)",
} as const;

function rangeErrors<K extends keyof typeof NAMES>(
  values: Record<K, number>,
  limits: Record<K, Range>,
): string[] {
  const out: string[] = [];
  for (const k of Object.keys(limits) as K[]) {
    const v = values[k];
    const [lo, hi] = limits[k];
    if (!Number.isFinite(v) || v < lo || v > hi) out.push(`${NAMES[k]} must be ${lo}–${hi}`);
  }
  return out;
}

export type RiskResult = { ok: true; risk: number } | { ok: false; errors: string[] };

// ---------- Pooled Cohort Equations ----------
const PCE = {
  // [S10 baseline survival, mean of (coefficient × value)]
  whiteFemale: { s10: 0.9665, mean: -29.18 },
  blackFemale: { s10: 0.9533, mean: 86.61 },
  whiteMale: { s10: 0.9144, mean: 61.18 },
  blackMale: { s10: 0.8954, mean: 19.54 },
} as const;

/** Individual sum of coefficient × value (Goff 2013, Table A). */
export function pceSum(i: PceInput): number {
  const a = Math.log(i.age);
  const t = Math.log(i.tc);
  const h = Math.log(i.hdl);
  const s = Math.log(i.sbp);
  const smk = i.smoker ? 1 : 0;
  const dm = i.dm ? 1 : 0;
  const black = i.race === "black"; // "other" uses the white equations
  if (i.sex === "female" && !black)
    return -29.799 * a + 4.884 * a * a + 13.54 * t - 3.114 * a * t - 13.578 * h + 3.149 * a * h +
      (i.bpTx ? 2.019 * s : 1.957 * s) + 7.574 * smk - 1.665 * a * smk + 0.661 * dm;
  if (i.sex === "female")
    return 17.114 * a + 0.94 * t - 18.92 * h + 4.475 * a * h +
      (i.bpTx ? 29.291 * s - 6.432 * a * s : 27.82 * s - 6.087 * a * s) + 0.691 * smk + 0.874 * dm;
  if (!black)
    return 12.344 * a + 11.853 * t - 2.664 * a * t - 7.99 * h + 1.769 * a * h +
      (i.bpTx ? 1.797 * s : 1.764 * s) + 7.837 * smk - 1.795 * a * smk + 0.658 * dm;
  return 2.469 * a + 0.302 * t - 0.307 * h + (i.bpTx ? 1.916 * s : 1.809 * s) + 0.549 * smk + 0.645 * dm;
}

function pceGroup(i: Pick<PceInput, "sex" | "race">) {
  const black = i.race === "black";
  return i.sex === "female" ? (black ? PCE.blackFemale : PCE.whiteFemale) : black ? PCE.blackMale : PCE.whiteMale;
}

/** 10-year ASCVD risk (0–1) by the 2013 Pooled Cohort Equations. */
export function pceRisk(i: PceInput): RiskResult {
  const errors = rangeErrors({ age: i.age, tc: i.tc, hdl: i.hdl, sbp: i.sbp }, PCE_LIMITS);
  if (errors.length) return { ok: false, errors };
  const g = pceGroup(i);
  return { ok: true, risk: 1 - Math.pow(g.s10, Math.exp(pceSum(i) - g.mean)) };
}

/**
 * Risk of a person of the same age, sex and race with optimal risk factors:
 * TC 170, HDL 50, SBP 110 untreated, non-smoker, no diabetes.
 */
export function pceOptimalRisk(age: number, sex: Sex, race: Race): RiskResult {
  return pceRisk({ age, sex, race, tc: 170, hdl: 50, sbp: 110, bpTx: false, dm: false, smoker: false });
}

// ---------- PREVENT ----------
export type PreventResult =
  | { ok: true; risks: Record<PreventOutcome, number> }
  | { ok: false; errors: string[] };

/** PREVENT (base model) risks (0–1) over 10 or 30 years. */
export function preventRisk(i: PreventInput, years: 10 | 30): PreventResult {
  const errors = rangeErrors(
    { age: i.age, tc: i.tc, hdl: i.hdl, sbp: i.sbp, egfr: i.egfr, bmi: i.bmi },
    PREVENT_LIMITS,
  );
  if (years === 30 && Number.isFinite(i.age) && i.age > 59)
    errors.push("30-year risk is only estimated for ages 30–59");
  if (errors.length) return { ok: false, errors };

  const a = (i.age - 55) / 10;
  const nonHdl = (i.tc - i.hdl) * 0.02586 - 3.5;
  const hdl = (i.hdl * 0.02586 - 1.3) / 0.3;
  const sbpLow = (Math.min(i.sbp, 110) - 110) / 20;
  const sbpHigh = (Math.max(i.sbp, 110) - 130) / 20;
  const bmiLow = (Math.min(i.bmi, 30) - 25) / 5;
  const bmiHigh = (Math.max(i.bmi, 30) - 30) / 5;
  const egfrLow = (Math.min(i.egfr, 60) - 60) / -15;
  const egfrHigh = (Math.max(i.egfr, 60) - 90) / -15;
  const dm = i.dm ? 1 : 0;
  const smk = i.smoker ? 1 : 0;
  const tx = i.bpTx ? 1 : 0;
  const st = i.statin ? 1 : 0;
  const x: Record<PreventTerm, number> = {
    age: a,
    age2: years === 30 ? a * a : 0,
    nonHdl,
    hdl,
    sbpLow,
    sbpHigh,
    dm,
    smoker: smk,
    bmiLow,
    bmiHigh,
    egfrLow,
    egfrHigh,
    bpTx: tx,
    statin: st,
    bpTxSbp: tx * sbpHigh,
    statinNonHdl: st * nonHdl,
    ageNonHdl: a * nonHdl,
    ageHdl: a * hdl,
    ageSbp: a * sbpHigh,
    ageDm: a * dm,
    ageSmoker: a * smk,
    ageBmi: a * bmiHigh,
    ageEgfr: a * egfrLow,
    constant: 1,
  };
  const table = (years === 10 ? PREVENT_10YR : PREVENT_30YR)[i.sex];
  const risks = {} as Record<PreventOutcome, number>;
  for (const outcome of Object.keys(table) as PreventOutcome[]) {
    const coef = table[outcome];
    let logit = 0;
    for (const term of Object.keys(coef) as PreventTerm[]) logit += (coef[term] ?? 0) * x[term];
    risks[outcome] = Math.exp(logit) / (1 + Math.exp(logit));
  }
  return { ok: true, risks };
}

// ---------- Interpretation (2018 ACC/AHA cholesterol guideline) ----------
export type RiskBand = "low" | "borderline" | "intermediate" | "high";

/** 10-year risk bands: <5 %, 5–7.4 %, 7.5–19.9 %, ≥20 %. */
export function riskBand(risk: number): RiskBand {
  const p = risk * 100;
  if (p < 5) return "low";
  if (p < 7.5) return "borderline";
  if (p < 20) return "intermediate";
  return "high";
}

export const BAND_LABEL: Record<RiskBand, string> = {
  low: "Low risk (<5%)",
  borderline: "Borderline risk (5–7.4%)",
  intermediate: "Intermediate risk (7.5–19.9%)",
  high: "High risk (≥20%)",
};

/** Percent with one decimal, as MDCalc and the AHA estimator display it. */
export function formatPct(risk: number): string {
  const p = risk * 100;
  if (p < 0.1) return "<0.1%";
  return `${p.toFixed(1)}%`;
}

export interface PlanInput {
  age: number;
  dm: boolean;
  /** LDL-C mg/dL, if known. */
  ldl: number | null;
  /** PCE 10-year risk (0–1), if it could be calculated. */
  pce: number | null;
  /** Number of risk-enhancing factors ticked. */
  enhancers: number;
  /** Known clinical ASCVD (secondary prevention). */
  ascvd: boolean;
}

export interface Plan {
  title: string;
  statin: "none" | "consider-moderate" | "moderate" | "moderate-or-high" | "high";
  points: string[];
}

/** Statin decision per 2018 AHA/ACC multisociety cholesterol guideline. */
export function statinPlan(p: PlanInput): Plan {
  if (p.ascvd)
    return {
      title: "Clinical ASCVD — secondary prevention (risk calculators do not apply)",
      statin: "high",
      points: [
        p.age <= 75
          ? "High-intensity statin, aiming for ≥50% LDL-C reduction."
          : "Age >75: moderate- or high-intensity statin is reasonable after weighing benefit, adverse effects and patient preference.",
        "Very high risk and LDL-C still ≥70 mg/dL on maximal statin: add ezetimibe; then a PCSK9 inhibitor if still ≥70.",
      ],
    };
  if (p.ldl != null && p.ldl >= 190 && p.age >= 20 && p.age <= 75)
    return {
      title: "Severe hypercholesterolaemia (LDL-C ≥190 mg/dL)",
      statin: "high",
      points: [
        "High-intensity statin without needing a risk estimate.",
        "If LDL-C stays ≥100 mg/dL, adding ezetimibe is reasonable. Screen family members (possible familial hypercholesterolaemia).",
      ],
    };
  if (p.dm && p.age >= 40 && p.age <= 75)
    return {
      title: "Diabetes, age 40–75",
      statin: p.pce != null && p.pce >= 0.2 ? "high" : "moderate-or-high",
      points: [
        "Moderate-intensity statin regardless of the 10-year risk.",
        p.pce != null && p.pce >= 0.2
          ? "10-year risk ≥20%: high-intensity statin is reasonable; adding ezetimibe to reach ≥50% LDL-C reduction may be reasonable."
          : "High-intensity statin is reasonable with multiple ASCVD risk factors (especially age 50–75).",
        "Diabetes-specific enhancers: duration ≥10 y (type 2) / ≥20 y (type 1), albuminuria ≥30 mcg/mg, eGFR <60, retinopathy, neuropathy, ABI <0.9.",
      ],
    };
  if (p.age < 40)
    return {
      title: "Age under 40 — 10-year PCE risk not applicable",
      statin: "none",
      points: [
        "Emphasise lifestyle. Use the 30-year (PREVENT) estimate to discuss long-term risk.",
        "Statin may be reasonable if LDL-C ≥160 mg/dL with a family history of premature ASCVD.",
      ],
    };
  if (p.age > 75)
    return {
      title: "Age over 75 — individual assessment",
      statin: p.ldl != null && p.ldl >= 70 && p.ldl < 190 ? "consider-moderate" : "none",
      points: [
        "Clinical assessment and risk discussion before starting a statin.",
        "With LDL-C 70–189 mg/dL a moderate-intensity statin may be reasonable; age 76–80: a CAC score of 0 can help avoid one.",
      ],
    };
  if (p.ldl != null && p.ldl < 70)
    return {
      title: "LDL-C below 70 mg/dL",
      statin: "none",
      points: ["Primary-prevention statin is generally not indicated; continue a heart-healthy lifestyle and reassess every 4–6 years."],
    };
  if (p.pce == null)
    return { title: "Enter age 40–79 and the values above for a 10-year risk", statin: "none", points: [] };

  const band = riskBand(p.pce);
  const enh = p.enhancers > 0 ? ` (${p.enhancers} risk enhancer${p.enhancers === 1 ? "" : "s"} ticked)` : "";
  switch (band) {
    case "low":
      return {
        title: `Low risk${enh}`,
        statin: "none",
        points: ["Emphasise lifestyle to reduce risk factors. Reassess risk every 4–6 years."],
      };
    case "borderline":
      return {
        title: `Borderline risk${enh}`,
        statin: p.enhancers > 0 ? "consider-moderate" : "none",
        points: [
          p.enhancers > 0
            ? "Risk enhancers present: discuss a moderate-intensity statin."
            : "Lifestyle; a statin is not routinely needed. Look for risk enhancers.",
          "If unsure, a coronary artery calcium (CAC) score can guide the decision.",
        ],
      };
    case "intermediate":
      return {
        title: `Intermediate risk${enh}`,
        statin: "moderate",
        points: [
          "After a risk discussion, start a moderate-intensity statin (LDL-C reduction 30–49%).",
          p.enhancers > 0 ? "Risk enhancers favour starting a statin." : "Risk enhancers, if present, favour starting a statin.",
          "If the decision is uncertain: CAC score — 0: reasonable to defer statin (unless diabetes, current smoking or family history of premature ASCVD), recheck in 5–10 y; 1–99: favours statin, especially age ≥55; ≥100 or ≥75th percentile: start statin.",
        ],
      };
    case "high":
      return {
        title: `High risk${enh}`,
        statin: "high",
        points: ["High-intensity statin, aiming for ≥50% LDL-C reduction."],
      };
  }
}

export const RISK_ENHANCERS: { id: string; label: string }[] = [
  { id: "fhx", label: "Family history of premature ASCVD (male <55 y, female <65 y)" },
  { id: "ldl160", label: "LDL-C persistently 160–189 mg/dL (or non-HDL-C 190–219)" },
  { id: "metsyn", label: "Metabolic syndrome" },
  { id: "ckd", label: "Chronic kidney disease (eGFR 15–59, not on dialysis)" },
  { id: "obstetric", label: "History of pre-eclampsia or premature menopause (<40 y)" },
  { id: "inflam", label: "Chronic inflammatory disease (RA, psoriasis, HIV)" },
  { id: "southAsian", label: "South Asian ancestry (Indian subcontinent)" },
  { id: "tg", label: "Triglycerides persistently ≥175 mg/dL" },
  { id: "crp", label: "hs-CRP ≥2.0 mg/L" },
  { id: "lpa", label: "Lp(a) ≥50 mg/dL or ≥125 nmol/L" },
  { id: "apob", label: "apoB ≥130 mg/dL" },
  { id: "abi", label: "Ankle–brachial index <0.9" },
];

export const STATIN_DOSES = {
  high: "High intensity (LDL-C ↓ ≥50%): atorvastatin 40–80 mg, rosuvastatin 20–40 mg.",
  moderate:
    "Moderate intensity (LDL-C ↓ 30–49%): atorvastatin 10–20 mg, rosuvastatin 5–10 mg, simvastatin 20–40 mg, pravastatin 40–80 mg, pitavastatin 1–4 mg.",
};
