/**
 * AAP 2022 hyperbilirubinemia guideline (≥ 35 weeks) — the model BiliTool uses.
 * All bilirubin values in mg/dL. Thresholds come from Supplemental Tables 1–4
 * (src/data/aap2022Bilirubin.ts); rules from the Key Action Statements (KAS).
 */
import { AAP2022 } from "../data/aap2022Bilirubin";

export const AAP_RISK_FACTORS = [
  "Albumin < 3.0 g/dL",
  "Isoimmune haemolytic disease (DAT +), G6PD deficiency or other haemolysis",
  "Sepsis",
  "Significant clinical instability in the previous 24 h",
] as const;

function lookup(arr: number[], ageHours: number): number {
  // Tables list "hour on completed day": use completed hours, from hour 1.
  const i = Math.min(Math.max(Math.floor(ageHours), 1), arr.length) - 1;
  return arr[i];
}

export interface AapThresholds {
  photo: number;
  escalation: number;
  exchange: number;
}

export function aapThresholds(gaWeeks: number, ageHours: number, riskFactor: boolean): AapThresholds {
  const ga = Math.min(Math.max(Math.floor(gaWeeks), 35), 40);
  const rf = riskFactor ? "rf" : "none";
  const photoGa = riskFactor ? Math.min(ga, 38) : ga;
  const photo = lookup(AAP2022[`photo_${rf}_${photoGa}`], ageHours);
  const exchange = lookup(AAP2022[`exchange_${rf}_${Math.min(ga, 38)}`], ageHours);
  return { photo, exchange, escalation: Math.round((exchange - 2) * 10) / 10 };
}

export type AapZone = "exchange" | "escalation" | "photo" | "below";

export interface AapAssessment {
  zone: AapZone;
  t: AapThresholds;
  label: string;
  /** Phototherapy threshold minus bilirubin (Fig 7 uses this); negative = above. */
  belowPhoto: number;
  actions: string[];
  followUp: string[];
  ratePerHour: number | null;
  rapidRise: boolean;
  baRatio: number | null;
  baExceeded: number | null;
}

export function assessAap(opts: {
  gaWeeks: number;
  ageHours: number;
  tsb: number;
  riskFactor: boolean;
  albumin?: number | null;
  prev?: { tsb: number; ageHours: number } | null;
}): AapAssessment {
  const { gaWeeks, ageHours, tsb, riskFactor } = opts;
  const t = aapThresholds(gaWeeks, ageHours, riskFactor);
  const belowPhoto = Math.round((t.photo - tsb) * 10) / 10;
  let zone: AapZone;
  if (tsb >= t.exchange) zone = "exchange";
  else if (tsb >= t.escalation) zone = "escalation";
  else if (tsb >= t.photo) zone = "photo";
  else zone = "below";

  const prev = opts.prev;
  const ratePerHour =
    prev && ageHours > prev.ageHours ? (tsb - prev.tsb) / (ageHours - prev.ageHours) : null;
  // KAS 7: ≥ 0.3 mg/dL/h in the first 24 h, ≥ 0.2 mg/dL/h thereafter.
  const rapidRise = ratePerHour != null && ratePerHour >= (ageHours <= 24 ? 0.3 : 0.2);

  // B/A ratio thresholds for considering exchange (guideline section III-F).
  const alb = opts.albumin ?? null;
  const baRatio = alb && alb > 0 ? tsb / alb : null;
  const baCut = gaWeeks >= 38 ? (riskFactor ? 7.2 : 8.0) : riskFactor ? 6.8 : 7.2;
  const baExceeded = baRatio != null && baRatio >= baCut ? baCut : null;

  const actions: string[] = [];
  const followUp: string[] = [];
  let label = "";
  switch (zone) {
    case "exchange":
      label = "AT / ABOVE EXCHANGE TRANSFUSION THRESHOLD";
      actions.push("Urgent exchange transfusion (KAS 23). If a repeat TSB before starting is below the exchange threshold and there are no signs of intermediate/advanced acute bilirubin encephalopathy, it may be deferred while continuing intensive phototherapy with TSB every 2 h.");
      actions.push("Meanwhile: escalation of care — intensive phototherapy, IV + oral hydration, NICU/neonatologist.");
      break;
    case "escalation":
      label = "ESCALATION OF CARE — MEDICAL EMERGENCY";
      actions.push("TSB is within 2 mg/dL of the exchange threshold (KAS 17). Manage in a NICU; consult a neonatologist about urgent transfer if exchange transfusion is not available here.");
      actions.push("STAT: total and direct bilirubin, CBC, serum albumin, serum chemistries, type and crossmatch; notify the blood bank (KAS 18).");
      actions.push("Emergent intensive phototherapy + IV hydration (KAS 19). Measure TSB at least every 2 h until below the escalation threshold (KAS 20).");
      actions.push("DAT-positive (isoimmune) haemolysis: IVIG 0.5–1 g/kg over 2 h, may repeat in 12 h (KAS 21).");
      actions.push("Urgent exchange transfusion if signs of intermediate/advanced acute bilirubin encephalopathy — hypertonia, arching, retrocollis, opisthotonos, high-pitched cry, recurrent apnoea (KAS 22).");
      break;
    case "photo":
      label = "START PHOTOTHERAPY";
      actions.push("Intensive phototherapy (irradiance ≥ 30 µW/cm²/nm, 460–490 nm) (KAS 10).");
      actions.push("Measure TSB within 12 h of starting; timing/frequency by age, risk factors, TSB level and trajectory (KAS 12).");
      actions.push("Check Hb/Hct or CBC. DAT if mother is group O, Rh(D)-negative or antibody-screen positive. G6PD if cause unclear, or TSB rises despite phototherapy (KAS 14).");
      actions.push("Stop phototherapy when TSB has fallen ≥ 2 mg/dL below the hour-specific threshold at initiation; longer if < 38 wk, started < 48 h or haemolysis (KAS 15).");
      actions.push("Rebound check: started < 48 h, DAT + or haemolysis → TSB 6–12 h after stopping and again the next day; others → next day (KAS 16).");
      if (tsb - t.photo >= 1)
        actions.push("TSB ≥ 1 mg/dL above the phototherapy threshold — inpatient, not home, phototherapy (KAS 13).");
      break;
    case "below": {
      label = "Below phototherapy threshold";
      const d = belowPhoto;
      if (ageHours < 12) {
        followUp.push("Before 12 h there is insufficient evidence for discharge follow-up guidance; any infant discharged before 12 h needs a bilirubin between 24 and 48 h of age.");
      } else if (d < 2) {
        if (ageHours < 24) followUp.push("0.1–1.9 mg/dL below threshold, < 24 h: delay discharge, consider phototherapy, measure TSB in 4–8 h.");
        else {
          followUp.push("0.1–1.9 mg/dL below threshold, ≥ 24 h: measure TSB in 4–24 h.");
          followUp.push("Options: delay discharge and consider phototherapy; discharge with home phototherapy if all criteria are met; or discharge without phototherapy with close follow-up.");
        }
      } else if (d < 3.5) followUp.push("2.0–3.4 mg/dL below threshold: TSB or TcB in 4–24 h.");
      else if (d < 5.5) followUp.push("3.5–5.4 mg/dL below threshold: TSB or TcB in 1–2 days.");
      else if (d < 7) followUp.push(ageHours < 72
        ? "5.5–6.9 mg/dL below threshold, discharging < 72 h: follow-up within 2 days; TcB or TSB by clinical judgment."
        : "5.5–6.9 mg/dL below threshold, discharging ≥ 72 h: follow-up by clinical judgment.");
      else followUp.push(ageHours < 72
        ? "≥ 7.0 mg/dL below threshold, discharging < 72 h: follow-up within 3 days; TcB or TSB by clinical judgment."
        : "≥ 7.0 mg/dL below threshold, discharging ≥ 72 h: follow-up by clinical judgment.");
      followUp.push("Fig 7 applies to infants ≥ 12 h old who have not received phototherapy; also weigh feeding, weight loss, risk factors and family support.");
      break;
    }
  }

  if (ageHours < 24)
    actions.push("Jaundice in the first 24 h: measure TSB/TcB as soon as possible and look for haemolysis (KAS 4).");
  if (rapidRise)
    actions.push(`Rapid rise ${ratePerHour!.toFixed(2)} mg/dL/h (≥ ${ageHours <= 24 ? "0.3" : "0.2"}) suggests haemolysis — perform a DAT if not already done (KAS 7).`);
  if (baExceeded != null)
    actions.push(`B/A ratio ${baRatio!.toFixed(1)} ≥ ${baExceeded} — exchange transfusion may be considered alongside the TSB threshold.`);
  if (ageHours >= 14 * 24)
    actions.push("Still jaundiced at 2 weeks (formula-fed) or 3–4 weeks (breastfed): measure total and direct/conjugated bilirubin for cholestasis (KAS 9).");
  actions.push("Use total bilirubin — do not subtract direct/conjugated; if direct > 50 % of TSB, consult an expert.");

  return { zone, t, label, belowPhoto, actions, followUp, ratePerHour, rapidRise, baRatio, baExceeded };
}

/** KAS 6: measure TSB if TcB is at/above or within 3 mg/dL of the phototherapy threshold, or ≥ 15 mg/dL. */
export function aapTcbNeedsTsb(tcb: number, photo: number): string[] {
  const r: string[] = [];
  if (tcb >= photo) r.push("TcB is at or above the phototherapy threshold — measure TSB; treatment decisions use TSB (KAS 3, 6).");
  else if (tcb >= photo - 3) r.push("TcB is within 3 mg/dL of the phototherapy threshold — measure TSB (KAS 6).");
  if (tcb >= 15) r.push("TcB ≥ 15 mg/dL — measure TSB (KAS 6).");
  return r;
}
