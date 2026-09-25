/**
 * Neonatal jaundice treatment thresholds — NICE CG98 (Jaundice in newborn
 * babies under 28 days, updated 2023). All values in µmol/L.
 *
 * ≥ 38 weeks: NICE consensus table (6-hourly rows, 0–96 h, flat after 96 h).
 *   Start phototherapy  = 100 at 0 h, +25 per 6 h → 200 at 24 h, then
 *                         +12.5 per 6 h → 350 at ≥ 96 h
 *   Consider photo + repeat in 6 h = 100 + 12.5 per 6 h (from 6 h) → 300 at 96 h
 *   Repeat bilirubin in 6–12 h     = 100 until 24 h, +12.5 per 6 h → 200 at 72 h
 *   Exchange transfusion           = 100 at 0 h, 150 at 6 h, +50 per 6 h → 450 from 42 h
 *   Between rows the table's steps are interpolated linearly (as on the
 *   NICE threshold graph).
 *
 * 23–37 weeks (NICE threshold graphs): straight lines from birth to 72 h,
 * flat afterwards.
 *   Phototherapy: 40 at birth → (GA × 10) − 100 at ≥ 72 h
 *   Exchange:     80 at birth → GA × 10 at ≥ 72 h
 */

export const UMOL_PER_MGDL = 17.1;

export type BiliUnit = "umol" | "mgdl";

export const toUmol = (v: number, u: BiliUnit) => (u === "umol" ? v : v * UMOL_PER_MGDL);
export const fromUmol = (v: number, u: BiliUnit) => (u === "umol" ? v : v / UMOL_PER_MGDL);

export function fmtBili(umol: number, u: BiliUnit): string {
  return u === "umol" ? `${Math.round(umol)} µmol/L` : `${(umol / UMOL_PER_MGDL).toFixed(1)} mg/dL`;
}

export interface BiliThresholds {
  /** Start phototherapy above this. */
  photo: number;
  /** Exchange transfusion above this. */
  exchange: number;
  /** ≥ 38 wk only: consider phototherapy and repeat in 6 h above this. */
  consider: number | null;
  /** ≥ 38 wk only: repeat bilirubin in 6–12 h above this. */
  repeat: number | null;
}

const clampH = (h: number, max: number) => Math.min(Math.max(h, 0), max);

export function biliThresholds(gaWeeks: number, ageHours: number): BiliThresholds {
  if (gaWeeks >= 38) {
    const h = clampH(ageHours, 96);
    const photo = h <= 24 ? 100 + (h / 6) * 25 : 200 + ((h - 24) / 6) * 12.5;
    const exchange = ageHours < 6
      ? 100 + (clampH(ageHours, 6) / 6) * 50
      : Math.min(150 + ((ageHours - 6) / 6) * 50, 450);
    // NICE lists no "consider" value at 0 h — the line begins at 6 h (112).
    const consider = ageHours < 6 ? null : 100 + (h / 6) * 12.5;
    const repeat = ageHours <= 24 ? 100 : 100 + ((clampH(ageHours, 72) - 24) / 6) * 12.5;
    return { photo, exchange, consider, repeat: ageHours > 72 ? null : repeat };
  }
  const ga = Math.max(23, Math.floor(gaWeeks));
  const f = clampH(ageHours, 72) / 72;
  return {
    photo: 40 + (ga * 10 - 100 - 40) * f,
    exchange: 80 + (ga * 10 - 80) * f,
    consider: null,
    repeat: null,
  };
}

export type BiliZone = "exchange" | "photo" | "consider" | "repeat" | "below";

export interface BiliAssessment {
  zone: BiliZone;
  thresholds: BiliThresholds;
  /** Bilirubin minus phototherapy threshold (µmol/L). */
  toPhoto: number;
  toExchange: number;
  label: string;
  actions: string[];
  /** Rate of rise in µmol/L per hour, when a previous value is supplied. */
  ratePerHour: number | null;
}

export function assessBili(
  gaWeeks: number,
  ageHours: number,
  sbrUmol: number,
  prev?: { umol: number; ageHours: number } | null,
): BiliAssessment {
  const t = biliThresholds(gaWeeks, ageHours);
  const term = gaWeeks >= 38;
  let zone: BiliZone;
  if (sbrUmol > t.exchange) zone = "exchange";
  else if (sbrUmol > t.photo) zone = "photo";
  else if (term && t.consider != null && sbrUmol > t.consider) zone = "consider";
  else if (term && t.repeat != null && sbrUmol > t.repeat) zone = "repeat";
  else if (!term && sbrUmol > t.photo - 50) zone = "repeat";
  else zone = "below";

  const ratePerHour =
    prev && ageHours > prev.ageHours
      ? (sbrUmol - prev.umol) / (ageHours - prev.ageHours)
      : null;

  const actions: string[] = [];
  let label = "";
  switch (zone) {
    case "exchange":
      label = "ABOVE EXCHANGE TRANSFUSION THRESHOLD";
      actions.push("Perform exchange transfusion unless the bilirubin falls below the threshold while it is being prepared.");
      actions.push("Start intensified (multiple) phototherapy immediately; repeat serum bilirubin every 4–6 h.");
      actions.push("Urgent: look for acute bilirubin encephalopathy (lethargy, hypotonia/hypertonia, arching, high-pitched cry) — treat as emergency.");
      break;
    case "photo":
      label = "START PHOTOTHERAPY";
      actions.push("Start phototherapy. Repeat serum bilirubin 4–6 h after starting, then every 6–12 h once stable or falling.");
      actions.push("Use intensified (multiple) phototherapy if the level is rising rapidly (> 8.5 µmol/L/h), is within 50 µmol/L of the exchange threshold after 72 h, or fails to fall within 6 h.");
      actions.push("Stop phototherapy once bilirubin is ≥ 50 µmol/L below the phototherapy threshold; check for rebound 12–18 h after stopping.");
      break;
    case "consider":
      label = "Consider phototherapy — repeat in 6 h";
      actions.push("Within 50 µmol/L of the phototherapy threshold: consider phototherapy and repeat serum bilirubin in 6 h.");
      break;
    case "repeat":
      label = "Repeat bilirubin in 6–12 h";
      actions.push(term
        ? "Below the phototherapy threshold but above the monitoring line — repeat serum bilirubin in 6–12 h."
        : "Approaching the phototherapy line (within 50 µmol/L) — repeat serum bilirubin in 6–12 h.");
      break;
    case "below":
      label = "Below treatment threshold";
      actions.push("No phototherapy needed now. Continue clinical observation of jaundice and feeding; re-check if jaundice deepens.");
      break;
  }

  if (ageHours < 24)
    actions.push("Jaundice in the first 24 h is always pathological until proven otherwise — serum bilirubin within 2 h, look for haemolysis (blood group, DAT, Hb, retics) and sepsis.");
  if (ratePerHour != null && ratePerHour > 8.5)
    actions.push(`Rising at ${ratePerHour.toFixed(1)} µmol/L/h (> 8.5): treat as significant hyperbilirubinaemia — intensified phototherapy; in Rh/ABO haemolytic disease add IVIG 500 mg/kg over 4 h.`);
  if (zone !== "below")
    actions.push("Work-up: SBR + conjugated bilirubin, blood group & DAT (mother and baby), Hb/PCV, peripheral smear, G6PD, and culture if sepsis suspected.");
  const prolongedAt = term || gaWeeks >= 37 ? 14 : 21;
  if (ageHours >= prolongedAt * 24)
    actions.push(`Prolonged jaundice (beyond ${prolongedAt} days): check conjugated bilirubin (> 25 µmol/L needs urgent referral), stool and urine colour, thyroid function and G6PD.`);
  if (gaWeeks < 35)
    actions.push("Preterm < 35 weeks: use serum bilirubin — transcutaneous readings are not reliable.");

  return {
    zone,
    thresholds: t,
    toPhoto: sbrUmol - t.photo,
    toExchange: sbrUmol - t.exchange,
    label,
    actions,
    ratePerHour,
  };
}
