/**
 * ICU / ward titration math — audited September 2026 against the sources in
 * ICU_SOURCES (every drug, range and formula names its source).
 *
 * Infusion: mL/h = dose × (weight) × (60 if per-minute) ÷ concentration.
 * Fluids: adults NICE CG174 (25–30 mL/kg/day); children Holliday–Segar with
 * NICE NG29 restriction; oligo-anuric insensible losses + urine output.
 * Electrolytes: UKKA hyperkalaemia 2023, European hyponatraemia 2014 / US
 * expert panel 2013, Adrogue–Madias, Katz / Hillier, Payne, SfE 2016.
 */

// ---------------- Sources ----------------

export const ICU_SOURCES = {
  SSC2021: { label: "Surviving Sepsis Campaign adult guidelines 2021 (Evans et al, Crit Care Med 2021)", url: "https://doi.org/10.1097/CCM.0000000000005337" },
  SSCPEDS2020: { label: "Surviving Sepsis Campaign paediatric guidelines 2020 (Weiss et al, Pediatr Crit Care Med 2020)", url: "https://doi.org/10.1097/PCC.0000000000002198" },
  PADIS2018: { label: "SCCM PADIS guideline 2018 (Devlin et al, Crit Care Med 2018)", url: "https://doi.org/10.1097/CCM.0000000000003299" },
  PAD2013: { label: "SCCM PAD guideline 2013 — sedative/analgesic dosing table (Barr et al, Crit Care Med 2013)", url: "https://doi.org/10.1097/CCM.0b013e3182783b72" },
  ESCHF2021: { label: "ESC Heart Failure guidelines 2021 — acute HF drug doses (McDonagh et al, Eur Heart J 2021)", url: "https://doi.org/10.1093/eurheartj/ehab368" },
  MILRINONE_LABEL: { label: "Milrinone lactate prescribing information (renal dose table) — DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=milrinone" },
  UKKA2023: { label: "UK Kidney Association — Treatment of acute hyperkalaemia in adults (2020, updated 2023)", url: "https://ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults" },
  EUHYPONA2014: { label: "European clinical practice guideline on hyponatraemia 2014 (Spasovski et al, Eur J Endocrinol)", url: "https://doi.org/10.1530/EJE-13-1020" },
  USHYPONA2013: { label: "US expert panel recommendations on hyponatremia 2013 (Verbalis et al, Am J Med)", url: "https://doi.org/10.1016/j.amjmed.2013.07.006" },
  ADROGUE2000: { label: "Adrogué & Madias, Hyponatremia / Hypernatremia (N Engl J Med 2000)", url: "https://doi.org/10.1056/NEJM200005253422107" },
  HILLIER1999: { label: "Hillier et al — sodium correction for hyperglycaemia (Am J Med 1999)", url: "https://doi.org/10.1016/S0002-9343(99)00055-8" },
  SFE_HYPOCA2016: { label: "Society for Endocrinology — emergency management of acute hypocalcaemia (Endocr Connect 2016)", url: "https://doi.org/10.1530/EC-16-0056" },
  SFE_HYPERCA2016: { label: "Society for Endocrinology — emergency management of acute hypercalcaemia (Endocr Connect 2016)", url: "https://doi.org/10.1530/EC-16-0055" },
  AHA2020: { label: "AHA 2020 Adult Advanced Life Support guidelines (Panchal et al, Circulation 2020)", url: "https://doi.org/10.1161/CIR.0000000000000916" },
  BNF_KCL: { label: "BNF — potassium chloride (infusion concentration and rate limits)", url: "https://bnf.nice.org.uk/drugs/potassium-chloride/" },
  NICE_CG174: { label: "NICE CG174 — IV fluid therapy in adults in hospital", url: "https://www.nice.org.uk/guidance/cg174" },
  NICE_NG29: { label: "NICE NG29 — IV fluid therapy in children and young people in hospital", url: "https://www.nice.org.uk/guidance/ng29" },
  ISPAD2022: { label: "ISPAD 2022 guideline — DKA and HHS (Glaser et al, Pediatr Diabetes 2022)", url: "https://doi.org/10.1111/pedi.13406" },
} as const;
export type SourceKey = keyof typeof ICU_SOURCES;

// ---------------- Infusions ----------------

export type DoseUnit = "mcg/kg/min" | "mcg/min" | "mcg/kg/h" | "mg/kg/h" | "U/min" | "mU/kg/min";
export type AmountUnit = "mg" | "mcg" | "U";

export type DoseRange = { min: number; max: number; unit: DoseUnit; start: string };

export type Infusion = {
  id: string;
  name: string;
  group: "Vasopressor" | "Inotrope" | "Vasodilator" | "Sedation / analgesia";
  /** Standard syringe: amount of drug in `volume` mL. */
  amount: number;
  amountUnit: AmountUnit;
  volume: number;
  diluent: string;
  adult: DoseRange;
  /** null = not recommended / not calculated in children (see childNote). */
  child: DoseRange | null;
  childNote?: string;
  titration: string;
  cautions: string[];
  renalNote?: string;
  sources: SourceKey[];
};

export const INFUSIONS: Infusion[] = [
  {
    id: "noradrenaline", name: "Noradrenaline (norepinephrine)", group: "Vasopressor",
    amount: 4, amountUnit: "mg", volume: 50, diluent: "5% dextrose or 0.9% NaCl",
    adult: { min: 0.05, max: 1, unit: "mcg/kg/min", start: "0.05–0.1 mcg/kg/min" },
    child: { min: 0.05, max: 1, unit: "mcg/kg/min", start: "0.05–0.1 mcg/kg/min" },
    titration: "Titrate by 0.02–0.05 mcg/kg/min every 5–10 min to MAP ≥ 65 mmHg (adults) or age-appropriate perfusion targets (children). First-line vasopressor in septic shock. Add vasopressin when noradrenaline reaches 0.25–0.5 mcg/kg/min rather than escalating further.",
    cautions: [
      "Doses are for noradrenaline BASE. Some ampoules state the bitartrate/tartrate salt (2 mg salt ≈ 1 mg base) — check the label before making the syringe.",
      "May be started through a well-functioning peripheral cannula in a large proximal vein rather than delaying (SSC 2021); move to a central line early.",
      "Extravasation: stop, aspirate, infiltrate phentolamine 5–10 mg in 10 mL 0.9% NaCl.",
    ],
    sources: ["SSC2021", "SSCPEDS2020"],
  },
  {
    id: "adrenaline", name: "Adrenaline (epinephrine)", group: "Vasopressor",
    amount: 4, amountUnit: "mg", volume: 50, diluent: "5% dextrose or 0.9% NaCl",
    adult: { min: 0.01, max: 1, unit: "mcg/kg/min", start: "0.02–0.05 mcg/kg/min" },
    child: { min: 0.05, max: 1, unit: "mcg/kg/min", start: "0.05–0.1 mcg/kg/min" },
    titration: "Adults: add to noradrenaline when MAP stays low, or use with cardiac dysfunction (SSC 2021). Children: adrenaline or noradrenaline first-line for septic shock (SSC 2020). Anaphylactic shock refractory to IM doses: infusion.",
    cautions: [
      "β2 effect raises lactate and glucose — a rising lactate on adrenaline is not always worsening perfusion.",
      "Tachyarrhythmias and myocardial ischaemia at higher doses.",
    ],
    sources: ["SSC2021", "SSCPEDS2020"],
  },
  {
    id: "vasopressin", name: "Vasopressin", group: "Vasopressor",
    amount: 20, amountUnit: "U", volume: 50, diluent: "0.9% NaCl or 5% dextrose",
    adult: { min: 0.01, max: 0.04, unit: "U/min", start: "0.03 U/min (fixed)" },
    child: { min: 0.3, max: 2, unit: "mU/kg/min", start: "0.3–0.5 mU/kg/min" },
    childNote: "Children: weight-based and specialist (PICU) use only; limited evidence in paediatric septic shock (SSC 2020 makes no recommendation for routine use).",
    titration: "Adults: add to noradrenaline at 0.25–0.5 mcg/kg/min (SSC 2021). Usually run at a fixed 0.03 U/min — not titrated like a catecholamine. When weaning, reduce noradrenaline first.",
    cautions: ["Above 0.04 U/min: digital, mesenteric and myocardial ischaemia.", "Hyponatraemia with prolonged use."],
    sources: ["SSC2021", "SSCPEDS2020"],
  },
  {
    id: "dopamine", name: "Dopamine", group: "Vasopressor",
    amount: 200, amountUnit: "mg", volume: 50, diluent: "5% dextrose or 0.9% NaCl",
    adult: { min: 5, max: 20, unit: "mcg/kg/min", start: "5 mcg/kg/min" },
    child: { min: 5, max: 20, unit: "mcg/kg/min", start: "5–10 mcg/kg/min" },
    titration: "Noradrenaline is recommended over dopamine in septic shock (SSC 2021, strong). Reserve dopamine for selected patients (e.g. bradycardia with low arrhythmia risk). Children: adrenaline or noradrenaline preferred over dopamine (SSC 2020).",
    cautions: ["Low-dose 'renal' dopamine does not protect the kidney — not recommended.", "More tachyarrhythmias than noradrenaline."],
    sources: ["SSC2021", "SSCPEDS2020"],
  },
  {
    id: "dobutamine", name: "Dobutamine", group: "Inotrope",
    amount: 250, amountUnit: "mg", volume: 50, diluent: "5% dextrose or 0.9% NaCl",
    adult: { min: 2.5, max: 20, unit: "mcg/kg/min", start: "2.5–5 mcg/kg/min" },
    child: { min: 2, max: 20, unit: "mcg/kg/min", start: "5 mcg/kg/min" },
    titration: "Septic shock with cardiac dysfunction and persistent hypoperfusion despite adequate MAP and volume: add dobutamine or switch to adrenaline (SSC 2021). Low-output acute heart failure / cardiogenic shock (ESC 2021: 2–20 mcg/kg/min).",
    cautions: ["Vasodilates — may drop BP; pair with a vasopressor if MAP is low.", "Tachycardia and arrhythmias."],
    sources: ["SSC2021", "ESCHF2021"],
  },
  {
    id: "milrinone", name: "Milrinone", group: "Inotrope",
    amount: 10, amountUnit: "mg", volume: 50, diluent: "0.9% NaCl or 5% dextrose",
    adult: { min: 0.125, max: 0.75, unit: "mcg/kg/min", start: "0.25–0.375 mcg/kg/min (omit the 50 mcg/kg load if hypotensive)" },
    child: { min: 0.25, max: 0.75, unit: "mcg/kg/min", start: "0.25–0.5 mcg/kg/min" },
    titration: "Inodilator for low-output states (post-cardiac surgery, acute HF on β-blockers). ESC 2021: 0.375–0.75 mcg/kg/min; bolus 25–75 mcg/kg over 10–20 min only if BP allows.",
    cautions: ["Hypotension and arrhythmias; long half-life — effects persist after stopping."],
    renalNote: "Renally cleared (label): CrCl 50 → 0.43, 40 → 0.38, 30 → 0.33, 20 → 0.28, 10 → 0.23, 5 → 0.20 mcg/kg/min maximum.",
    sources: ["ESCHF2021", "MILRINONE_LABEL"],
  },
  {
    id: "ntg", name: "Nitroglycerin (GTN)", group: "Vasodilator",
    amount: 25, amountUnit: "mg", volume: 50, diluent: "5% dextrose or 0.9% NaCl (glass/non-PVC set)",
    adult: { min: 5, max: 200, unit: "mcg/min", start: "10–20 mcg/min, ↑ by 5–10 mcg/min every 3–5 min" },
    child: { min: 0.25, max: 5, unit: "mcg/kg/min", start: "0.25–0.5 mcg/kg/min" },
    titration: "Acute HF with pulmonary oedema and SBP > 110 mmHg; hypertensive emergency; ongoing ischaemic chest pain (ESC 2021: start 10–20 mcg/min, up to 200 mcg/min).",
    cautions: [
      "Contraindicated within 24 h of sildenafil/vardenafil or 48 h of tadalafil; avoid in RV infarction, severe aortic stenosis, SBP < 90 mmHg.",
      "Tolerance after 24–48 h; headache.",
    ],
    sources: ["ESCHF2021"],
  },
  {
    id: "fentanyl-inf", name: "Fentanyl", group: "Sedation / analgesia",
    amount: 500, amountUnit: "mcg", volume: 50, diluent: "0.9% NaCl",
    adult: { min: 0.7, max: 10, unit: "mcg/kg/h", start: "0.7–1.5 mcg/kg/h (≈ 50–100 mcg/h for 70 kg)" },
    child: { min: 0.5, max: 5, unit: "mcg/kg/h", start: "1–2 mcg/kg/h" },
    titration: "Analgesia-first sedation: titrate to a validated pain score (CPOT or BPS) (PADIS 2018). PAD 2013 table: load 1–2 mcg/kg, infusion 0.7–10 mcg/kg/h.",
    cautions: [
      "Preferred opioid in renal failure (no active metabolites) but accumulates with prolonged infusion (lipophilic).",
      "Rapid large boluses: chest-wall rigidity.",
    ],
    sources: ["PADIS2018", "PAD2013"],
  },
  {
    id: "midazolam-inf", name: "Midazolam", group: "Sedation / analgesia",
    amount: 50, amountUnit: "mg", volume: 50, diluent: "0.9% NaCl or 5% dextrose",
    adult: { min: 0.02, max: 0.1, unit: "mg/kg/h", start: "0.02–0.05 mg/kg/h (load 0.01–0.05 mg/kg)" },
    child: { min: 0.03, max: 0.2, unit: "mg/kg/h", start: "0.05 mg/kg/h" },
    titration: "Target light sedation (RASS 0 to −2) with daily review (PADIS 2018). PAD 2013 table: 0.02–0.1 mg/kg/h.",
    cautions: [
      "PADIS 2018 suggests propofol or dexmedetomidine over benzodiazepines for ventilated adults (more delirium, longer ventilation).",
      "Active metabolite accumulates in renal failure; prolonged effect in liver failure and obesity.",
      "Refractory status epilepticus uses much higher doses — follow the seizure protocol, not this range.",
    ],
    renalNote: "Active metabolite (α-hydroxymidazolam glucuronide) accumulates — use the lowest effective dose and reassess daily.",
    sources: ["PADIS2018", "PAD2013"],
  },
  {
    id: "propofol", name: "Propofol 1%", group: "Sedation / analgesia",
    amount: 500, amountUnit: "mg", volume: 50, diluent: "Undiluted 1% (10 mg/mL)",
    adult: { min: 0.3, max: 3, unit: "mg/kg/h", start: "0.3–0.6 mg/kg/h (5–10 mcg/kg/min)" },
    child: null,
    childNote: "Not recommended for prolonged sedation of ventilated children (propofol infusion syndrome) — UK licence excludes ICU sedation under 16 years.",
    titration: "Preferred over benzodiazepines for ventilated adults (PADIS 2018). PAD 2013 table: 5–50 mcg/kg/min (0.3–3 mg/kg/h).",
    cautions: [
      "Propofol infusion syndrome risk above 4 mg/kg/h for > 48 h — watch lactate, CK, triglycerides, K⁺, ECG.",
      "Hypotension; lipid calories 1.1 kcal/mL; change syringe and line every 12 h (asepsis).",
    ],
    sources: ["PADIS2018", "PAD2013"],
  },
  {
    id: "dexmedetomidine", name: "Dexmedetomidine", group: "Sedation / analgesia",
    amount: 200, amountUnit: "mcg", volume: 50, diluent: "0.9% NaCl",
    adult: { min: 0.2, max: 1.5, unit: "mcg/kg/h", start: "0.2–0.7 mcg/kg/h, usually no loading dose" },
    child: { min: 0.2, max: 1, unit: "mcg/kg/h", start: "0.2–0.5 mcg/kg/h" },
    childNote: "Off-label in children — PICU specialist use.",
    titration: "Light sedation (RASS 0 to −2), rousable patient; preferred over benzodiazepines (PADIS 2018). PAD 2013: 0.2–0.7 mcg/kg/h, up to 1.5 mcg/kg/h has been used.",
    cautions: [
      "Bradycardia and hypotension (a loading dose makes both worse).",
      "Not suitable for deep sedation or with neuromuscular blockade.",
    ],
    sources: ["PADIS2018", "PAD2013"],
  },
];

const NUMERATOR: Record<DoseUnit, "mcg" | "mg" | "U" | "mU"> = {
  "mcg/kg/min": "mcg", "mcg/min": "mcg", "mcg/kg/h": "mcg", "mg/kg/h": "mg", "U/min": "U", "mU/kg/min": "mU",
};
const TO_BASE: Record<AmountUnit | "mU", number> = { mcg: 1e-3, mg: 1, U: 1, mU: 1e-3 };

export const isWeightBased = (u: DoseUnit) => u.includes("/kg");
const perMinute = (u: DoseUnit) => u.endsWith("/min");

/** Concentration in the dose unit's numerator per mL (e.g. mcg/mL for mcg/kg/min). */
export function concentration(amount: number, amountUnit: AmountUnit, volumeMl: number, unit: DoseUnit): number | null {
  if (!(amount > 0) || !(volumeMl > 0)) return null;
  const num = NUMERATOR[unit];
  const massMatch = (amountUnit === "U") === (num === "U" || num === "mU");
  if (!massMatch) return null;
  return (amount * TO_BASE[amountUnit]) / TO_BASE[num] / volumeMl;
}

/** Pump rate in mL/h for a dose, rounded to 0.01. */
export function rateFromDose(unit: DoseUnit, dose: number, weightKg: number, conc: number): number | null {
  if (!(dose > 0) || !(conc > 0)) return null;
  if (isWeightBased(unit) && !(weightKg > 0)) return null;
  const perH = dose * (isWeightBased(unit) ? weightKg : 1) * (perMinute(unit) ? 60 : 1);
  return Math.round((perH / conc) * 100) / 100;
}

/** Dose delivered by a pump rate (inverse of rateFromDose), rounded to 3 significant decimals. */
export function doseFromRate(unit: DoseUnit, rateMlH: number, weightKg: number, conc: number): number | null {
  if (!(rateMlH > 0) || !(conc > 0)) return null;
  if (isWeightBased(unit) && !(weightKg > 0)) return null;
  const d = (rateMlH * conc) / ((isWeightBased(unit) ? weightKg : 1) * (perMinute(unit) ? 60 : 1));
  return Math.round(d * 1000) / 1000;
}

/** Milrinone maximum by CrCl (label table), linear between rows. */
export function milrinoneRenalMax(crcl: number): number | null {
  if (!(crcl > 0) || crcl >= 50) return null;
  const rows: [number, number][] = [[5, 0.2], [10, 0.23], [20, 0.28], [30, 0.33], [40, 0.38], [50, 0.43]];
  if (crcl <= 5) return 0.2;
  for (let i = 1; i < rows.length; i++) {
    const [c0, d0] = rows[i - 1], [c1, d1] = rows[i];
    if (crcl <= c1) return Math.round((d0 + ((crcl - c0) / (c1 - c0)) * (d1 - d0)) * 100) / 100;
  }
  return null;
}

// ---------------- Fluids ----------------

/** Holliday–Segar daily maintenance (ml/day, capped at 2400) and hourly 4-2-1 (ml/h). */
export function pedMaintenanceFluids(weightKg: number): { daily: number; hourly: number } | null {
  if (!(weightKg > 0)) return null;
  let daily: number;
  let hourly: number;
  if (weightKg <= 10) { daily = 100 * weightKg; hourly = 4 * weightKg; }
  else if (weightKg <= 20) { daily = 1000 + 50 * (weightKg - 10); hourly = 40 + 2 * (weightKg - 10); }
  else { daily = 1500 + 20 * (weightKg - 20); hourly = 60 + 1 * (weightKg - 20); }
  return { daily: Math.min(Math.round(daily), 2400), hourly: Math.round(hourly * 10) / 10 };
}

/** NICE CG174: 25–30 mL/kg/day; 20–25 for the frail/elderly, cardiac or renal impairment, malnourished. */
export function adultMaintenanceFluids(weightKg: number, atRisk = false): { low: number; high: number } | null {
  if (!(weightKg > 0)) return null;
  return atRisk
    ? { low: Math.round(20 * weightKg), high: Math.round(25 * weightKg) }
    : { low: Math.round(25 * weightKg), high: Math.round(30 * weightKg) };
}

export type FluidPlan = { label: string; dailyMl: number | string; note: string };

/** Restricted plans from a maintenance figure. */
export function restrictedFluidPlans(maintenanceDaily: number): FluidPlan[] {
  return [
    {
      label: "Risk of water retention (SIADH, meningitis, HF, post-op)",
      dailyMl: Math.round(maintenanceDaily * (2 / 3)),
      note: `Restrict to 50–80% of maintenance (${Math.round(maintenanceDaily * 0.5)}–${Math.round(maintenanceDaily * 0.8)} ml/day; two-thirds shown). Isotonic fluid; daily weight and Na⁺ (NICE NG29).`,
    },
    {
      label: "Oligo-anuric renal failure (AKI/CKD)",
      dailyMl: `${Math.round(maintenanceDaily * 0.3)}–${Math.round(maintenanceDaily * 0.4)} + urine output`,
      note: "Insensible losses only (≈ 30–40% of maintenance, ≈ 400 ml/m²/day) PLUS ml-for-ml urine replacement; strict intake–output charting.",
    },
    {
      label: "DKA (children — ISPAD 2022)",
      dailyMl: "10–20 ml/kg 0.9% NaCl bolus first",
      note: "Bolus over 20–30 min (repeat if poorly perfused), then deficit (5–10%) + maintenance over 24–48 h. Insulin 0.05–0.1 U/kg/h from 1 h after fluids — never bolus. Cerebral oedema: mannitol 0.5–1 g/kg or 3% NaCl 2.5–5 ml/kg over 10–15 min.",
    },
  ];
}

// ---------------- Electrolytes ----------------

/** Total body water fraction (Adrogué–Madias): children 0.6; men 0.6 (elderly 0.5); women 0.5 (elderly 0.45). */
export function tbwFactor(sex: "male" | "female", pediatric: boolean, elderly = false): number {
  if (pediatric) return 0.6;
  if (sex === "male") return elderly ? 0.5 : 0.6;
  return elderly ? 0.45 : 0.5;
}

/** mEq needed to raise serum Na to target. */
export function sodiumDeficit(
  weightKg: number, currentNa: number, targetNa: number,
  sex: "male" | "female" = "male", pediatric = false, elderly = false,
): number | null {
  if (!(weightKg > 0) || !(currentNa > 80) || targetNa <= currentNa) return null;
  return Math.round(tbwFactor(sex, pediatric, elderly) * weightKg * (targetNa - currentNa));
}

/** Litres of free water to correct hypernatremia to 140. */
export function freeWaterDeficit(
  weightKg: number, currentNa: number,
  sex: "male" | "female" = "male", pediatric = false, elderly = false,
): number | null {
  if (!(weightKg > 0) || !(currentNa > 145)) return null;
  return Math.round(tbwFactor(sex, pediatric, elderly) * weightKg * (currentNa / 140 - 1) * 10) / 10;
}

/** Adrogué–Madias: change in serum Na (mEq/L) from 1 L of an infusate. */
export function naChangePerLitre(infusateNa: number, serumNa: number, tbwLitres: number): number {
  return Math.round(((infusateNa - serumNa) / (tbwLitres + 1)) * 10) / 10;
}

/** Sodium corrected for hyperglycemia: Katz 1.6, Hillier 2.4 per 100 mg/dL over 100. */
export function correctedNa(measuredNa: number, glucoseMgDl: number, factor = 1.6): number {
  return Math.round((measuredNa + (factor * Math.max(0, glucoseMgDl - 100)) / 100) * 10) / 10;
}

/** Calcium corrected for albumin (Payne). */
export function correctedCa(measuredCa: number, albuminGdl: number): number {
  return Math.round((measuredCa + 0.8 * (4 - albuminGdl)) * 10) / 10;
}

export type PotassiumAssessment = {
  band: "normal" | "caution" | "alert";
  classification: string;
  actions: string[];
};

/** Potassium bands: hypokalaemia < 3.5; hyperkalaemia per UKKA (mild 5.5–5.9, moderate 6.0–6.4, severe ≥ 6.5). */
export function assessPotassium(k: number, pediatric = false, renalImpairment = false): PotassiumAssessment | null {
  if (!(k > 0.5) || k > 12) return null;
  const ivRate = pediatric
    ? "IV KCl 0.5–1 mEq/kg (max 40 mEq) at ≤ 0.5 mEq/kg/h — i.e. over 1–2 h — on a monitor"
    : "IV KCl ≤ 10 mEq/h peripherally (≤ 40 mEq/L); up to 20 mEq/h only via a central line with continuous ECG (BNF)";
  const renalLine = renalImpairment ? "Renal impairment: halve replacement rates and recheck early — K⁺ clears slowly." : null;
  const mgLine = "Check and correct Mg²⁺ — hypokalaemia will not hold until magnesium is replaced.";
  const push = (arr: string[]) => (renalLine ? [...arr, renalLine] : arr);
  const insulin = pediatric
    ? "Insulin 0.1 U/kg (max 10 U) with glucose 0.5 g/kg (5 ml/kg of 10%) over 30 min; salbutamol nebulised 2.5 mg (< 25 kg) or 5 mg (≥ 25 kg)."
    : "Insulin–glucose: 10 U soluble insulin + 25 g glucose IV over 15 min (UKKA). If pre-treatment glucose < 126 mg/dL (7 mmol/L), follow with 10% glucose 50 ml/h for 5 h. Salbutamol 10–20 mg nebulised as an adjunct.";
  const glucoseWatch = "Capillary glucose at 0, 15, 30, 60, 90, 120 min and hourly to 6 h after insulin (hypoglycaemia risk).";

  if (k < 2.5)
    return {
      band: "alert", classification: `SEVERE hypokalemia (K⁺ ${k})`,
      actions: push([
        ivRate + ". Never IV push.",
        "ECG monitoring throughout; recheck K⁺ after every 40–60 mEq (each 10 mEq raises serum K⁺ roughly 0.1 mEq/L without ongoing losses).",
        mgLine,
        "Hold QT-prolonging drugs; digoxin toxicity risk until corrected.",
      ]),
    };
  if (k < 3.0)
    return {
      band: "alert", classification: `Moderate hypokalemia (K⁺ ${k})`,
      actions: push([
        pediatric ? "Oral KCl 1–2 mEq/kg/day in divided doses if able to take orally." : "Oral KCl 40–80 mEq/day in divided doses if able to take orally.",
        "Add IV replacement (" + ivRate + ") if symptomatic, arrhythmia, ECG changes, or on digoxin.",
        mgLine,
      ]),
    };
  if (k < 3.5)
    return {
      band: "caution", classification: `Mild hypokalemia (K⁺ ${k})`,
      actions: push([
        pediatric ? "Oral KCl 1–2 mEq/kg/day in divided doses; recheck in 24 h." : "Oral KCl 20–40 mEq once or twice daily; recheck in 24 h.",
        mgLine,
      ]),
    };
  if (k <= 5.0)
    return { band: "normal", classification: `Normal (K⁺ ${k}, reference 3.5–5.0)`, actions: ["No replacement needed."] };
  if (k < 5.5)
    return {
      band: "caution", classification: `Borderline high (K⁺ ${k}) — below the 5.5 hyperkalaemia threshold`,
      actions: push([
        "Repeat the sample if unexpected (haemolysis, delayed processing).",
        "Review K⁺ intake and K-raising drugs (ACEI/ARB, spironolactone, NSAIDs, trimethoprim); recheck.",
      ]),
    };
  if (k < 6.0)
    return {
      band: "caution", classification: `Mild hyperkalemia (K⁺ ${k})`,
      actions: push([
        "Repeat the sample (haemolysis is common) and record a 12-lead ECG.",
        "Stop K⁺ sources and K-raising drugs; treat the cause.",
        "Consider a K-binder (sodium zirconium cyclosilicate or patiromer) and furosemide if passing urine; recheck within 24 h (UKKA).",
      ]),
    };
  if (k < 6.5)
    return {
      band: "alert", classification: `Moderate hyperkalemia (K⁺ ${k})`,
      actions: push([
        "12-lead ECG now — any hyperkalaemic ECG change is treated as severe (IV calcium first).",
        insulin,
        glucoseWatch,
        "Stop K⁺ sources and K-raising drugs; remove K⁺ (K-binder, furosemide if urine flows); recheck K⁺ at 1, 2, 4, 6 and 24 h.",
      ]),
    };
  return {
    band: "alert", classification: `SEVERE hyperkalemia (K⁺ ${k}) — emergency`,
    actions: push([
      pediatric
        ? "Calcium gluconate 10% 0.5 ml/kg (max 20 ml) IV over 5–10 min — protects the heart, does not lower K⁺."
        : "Calcium gluconate 10% 30 ml IV over 10 min (or calcium chloride 10% 10 ml via a large/central vein) — protects the heart; repeat if ECG changes persist after 5–10 min (UKKA).",
      insulin,
      glucoseWatch,
      "Remove K⁺: K-binder, furosemide if urine flows; urgent renal referral for dialysis if refractory, anuric or AKI.",
    ]),
  };
}
