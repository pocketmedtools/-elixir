import {
  dosesPerDayFromFrequency,
  mgToMl,
  type DrugFormulation,
  type PediatricDrug,
} from "../data/pediatricDrugs";

export type PedDoseInput = {
  weightKg: number;
  doseMgPerKgDay: number;
  frequency: string;
  drug: PediatricDrug;
  formulation: DrugFormulation | null;
  /** Needed for drugs dosed by weight band from 1 year (infants differ). */
  ageMonths?: number | null;
};

export type PedDoseResult = {
  dailyMg: number;
  perDoseMg: number;
  volumeMl: number | null;
  capped: boolean;
  /** Set when the dose came from a fixed weight band, not mg/kg. */
  bandNote: string | null;
  valid: boolean;
  errors: string[];
};

/** Shared pediatric daily / per-dose math used by UI + stress tests. */
export function calculatePediatricDose(input: PedDoseInput): PedDoseResult {
  const errors: string[] = [];
  const weight = Number(input.weightKg);
  const dose = Number(input.doseMgPerKgDay);
  const divisions = dosesPerDayFromFrequency(input.frequency) || 1;

  if (!Number.isFinite(weight) || weight <= 0) errors.push("Weight must be > 0");
  if (!Number.isFinite(dose) || dose < 0) errors.push("Dose mg/kg/day invalid");
  if (weight > 200) errors.push("Weight unrealistically high for pediatric calculator");
  if (!input.drug) errors.push("No drug selected");

  let rawDaily = weight > 0 && dose > 0 ? weight * dose : 0;
  let bandNote: string | null = null;
  const bands = input.drug?.weightBands;
  if (bands && weight > 0) {
    // Bands apply from 1 year. Without an age, a child under 10 kg is treated
    // as an infant (the conservative mg/kg dose) rather than given 30 mg.
    const ageUnknownSmall = input.ageMonths == null && weight < 10;
    const infant = (ageUnknownSmall || (input.ageMonths != null && input.ageMonths < 12)) && input.drug.infantMgPerKgDose;
    if (infant) {
      rawDaily = input.drug.infantMgPerKgDose! * weight * divisions;
      bandNote = ageUnknownSmall
        ? `Under 10 kg with no age entered: infant dose ${input.drug.infantMgPerKgDose} mg/kg/dose. Enter age — from 1 year the dose is 30 mg.`
        : `Infant < 1 year: ${input.drug.infantMgPerKgDose} mg/kg/dose.`;
    } else {
      const band = bands.find((b) => weight <= b.maxKg)!;
      rawDaily = band.perDoseMg * divisions;
      const lower = bands[bands.indexOf(band) - 1]?.maxKg;
      bandNote = `Fixed weight-band dose: ${lower == null ? `≤ ${band.maxKg}` : band.maxKg === Infinity ? `> ${lower}` : `${lower}–${band.maxKg}`} kg → ${band.perDoseMg} mg per dose${input.ageMonths == null ? " (from 1 year; enter age for infants)" : ""}.`;
    }
  }
  const max = input.drug?.maxDosePerDayMg ?? 0;
  const cappedDaily = max > 0 ? Math.min(rawDaily, max) : rawDaily;
  const capped = max > 0 && rawDaily > max;
  const perDose = divisions > 0 ? cappedDaily / divisions : 0;

  let volumeMl: number | null = null;
  if (input.formulation && perDose > 0) {
    volumeMl = mgToMl(perDose, input.formulation);
    if (volumeMl != null && (!Number.isFinite(volumeMl) || volumeMl < 0)) {
      errors.push("Volume calculation failed");
      volumeMl = null;
    }
    if (volumeMl != null && volumeMl > 500) {
      errors.push("Volume > 500 ml/dose — check strength or dose");
    }
  }

  return {
    dailyMg: Math.round(cappedDaily * 100) / 100,
    perDoseMg: Math.round(perDose * 100) / 100,
    volumeMl:
      volumeMl == null ? null : Math.round(volumeMl * 1000) / 1000,
    capped,
    bandNote,
    valid: errors.length === 0,
    errors,
  };
}
