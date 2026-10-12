/**
 * ANC scan interpretation: fetal biometry centiles, estimated fetal weight,
 * SGA / FGR / LGA classification, amniotic fluid, Doppler and a scan
 * schedule by gestation.
 *
 * Standards (coefficients as published; cross-checked against the LSHTM
 * "gigs" implementation of the INTERGROWTH-21st standards):
 *  - BPD, HC, AC, FL: INTERGROWTH-21st fetal growth standards
 *    (Papageorghiou et al., Lancet 2014;384:869-79), 14–40 wk.
 *  - EFW: Hadlock 1985 formulae (Am J Obstet Gynecol 1985;151:333-7);
 *    centile on the INTERGROWTH-21st standard for Hadlock EFW
 *    (Stirnemann et al., UOG 2020;56:946-8).
 *  - Umbilical artery PI / RI / S/D: INTERGROWTH-21st (Drukker et al.,
 *    AJOG 2020;222:602.e1-15), 24–40 wk.
 *  - MCA-PSV MoM: Mari et al., NEJM 2000;342:9-14.
 *  - FGR definitions: Delphi consensus (Gordijn et al., UOG 2016;48:333-9),
 *    adopted by ISUOG 2020 (Lees et al., UOG 2020;56:298-312).
 *  - Management: ISUOG 2020 FGR guideline; ACOG/SMFM (Consult #52, 2020;
 *    Committee Opinion 828, 2021); RCOG Green-top 31 (2024); WHO 2022
 *    antenatal corticosteroids; amniotic fluid per SMFM/ACOG.
 */

import { zToPercentile } from "./growthMath";

export type BiometryParam = "bpd" | "hc" | "ac" | "fl";

export interface Centile {
  z: number;
  centile: number;
  /** Expected (50th centile) value in the same unit as the input. */
  median: number;
}

const round = (n: number, dp = 1) => Math.round(n * 10 ** dp) / 10 ** dp;

/** Gestation (weeks, decimal) → completed weeks+days label, e.g. 32+4. */
export function gaLabel(gaWeeks: number): string {
  const w = Math.floor(gaWeeks + 1e-9);
  const d = Math.round((gaWeeks - w) * 7);
  return d === 7 ? `${w + 1}+0` : `${w}+${d}`;
}

// ---------- INTERGROWTH-21st biometry (mm, GA in weeks) ----------
export const BIOMETRY_RANGE = { min: 14, max: 40 };

export function igBiometryMuSigma(param: BiometryParam, ga: number): { mu: number; sigma: number } {
  const l = Math.log(ga);
  switch (param) {
    case "hc":
      return {
        mu: -28.2849 + 1.69267 * ga ** 2 - 0.397485 * ga ** 2 * l,
        sigma: 1.98735 + 0.0136772 * ga ** 3 - 0.00726264 * ga ** 3 * l + 0.000976253 * ga ** 3 * l ** 2,
      };
    case "bpd":
      return {
        mu: 5.60878 + 0.158369 * ga ** 2 - 0.00256379 * ga ** 3,
        sigma: Math.exp(0.101242 + 0.00150557 * ga ** 3 - 0.000771535 * ga ** 3 * l + 0.0000999638 * ga ** 3 * l ** 2),
      };
    case "ac":
      return {
        mu: -81.3243 + 11.6772 * ga - 0.000561865 * ga ** 3,
        sigma: -4.36302 + 0.121445 * ga ** 2 - 0.0130256 * ga ** 3 + 0.00282143 * ga ** 3 * l,
      };
    case "fl":
      return {
        mu: -39.9616 + 4.32298 * ga - 0.0380156 * ga ** 2,
        sigma: Math.exp(0.605843 - 42.0014 * ga ** -2 + 0.00000917972 * ga ** 3),
      };
  }
}

export function biometryCentile(param: BiometryParam, ga: number, mm: number): Centile | null {
  if (!(mm > 0) || ga < BIOMETRY_RANGE.min || ga > BIOMETRY_RANGE.max + 6 / 7) return null;
  const g = Math.min(ga, BIOMETRY_RANGE.max);
  const { mu, sigma } = igBiometryMuSigma(param, g);
  const z = (mm - mu) / sigma;
  return { z: round(z, 2), centile: round(zToPercentile(z), 1), median: round(mu, 1) };
}

/**
 * Size written on a report as a gestational age ("AC = 31w 2d"): convert to
 * the measurement that is the INTERGROWTH-21st median at that age. Reports
 * usually date sizes with Hadlock, so this is close but approximate — the mm
 * value gives the exact centile.
 */
export function mmFromGaEquivalent(param: BiometryParam, gaEq: number): number | null {
  if (gaEq < BIOMETRY_RANGE.min || gaEq > BIOMETRY_RANGE.max + 6 / 7) return null;
  return igBiometryMuSigma(param, Math.min(gaEq, BIOMETRY_RANGE.max)).mu;
}

/** "2 wk 3 d behind" / "1 wk 1 d ahead" / "matches" for size-age vs true GA. */
export function lagLabel(gaEq: number, ga: number): string {
  const diff = Math.round((gaEq - ga) * 7);
  if (diff === 0) return "matches gestation";
  const n = Math.abs(diff);
  const txt = `${Math.floor(n / 7) ? `${Math.floor(n / 7)} wk ` : ""}${n % 7 ? `${n % 7} d` : ""}`.trim();
  return `${txt} ${diff < 0 ? "behind" : "ahead of"} gestation`;
}

// ---------- Hadlock EFW ----------
export interface EfwResult {
  grams: number;
  formula: string;
}

/** Hadlock EFW from biometry in mm (uses the 4-parameter formula when possible). */
export function hadlockEfw(mm: { bpd?: number; hc?: number; ac?: number; fl?: number }): EfwResult | null {
  const cm = (v?: number) => (v && v > 0 ? v / 10 : undefined);
  const bpd = cm(mm.bpd), hc = cm(mm.hc), ac = cm(mm.ac), fl = cm(mm.fl);
  if (!ac || !fl) return null;
  let log10: number;
  let formula: string;
  if (bpd && hc) {
    log10 = 1.3596 - 0.00386 * ac * fl + 0.0064 * hc + 0.00061 * bpd * ac + 0.0424 * ac + 0.174 * fl;
    formula = "Hadlock (BPD, HC, AC, FL)";
  } else if (hc) {
    log10 = 1.326 - 0.00326 * ac * fl + 0.0107 * hc + 0.0438 * ac + 0.158 * fl;
    formula = "Hadlock (HC, AC, FL)";
  } else if (bpd) {
    log10 = 1.335 - 0.0034 * ac * fl + 0.0316 * bpd + 0.0457 * ac + 0.1623 * fl;
    formula = "Hadlock (BPD, AC, FL)";
  } else {
    log10 = 1.304 + 0.05281 * ac + 0.1938 * fl - 0.004 * ac * fl;
    formula = "Hadlock (AC, FL)";
  }
  return { grams: Math.round(10 ** log10), formula };
}

// INTERGROWTH-21st standard for Hadlock EFW (LMS on log EFW).
export const EFW_RANGE = { min: 18, max: 41 };

function hadlockLms(ga: number) {
  const g10 = ga / 10;
  const c = Math.log(g10) * g10 ** -2;
  return {
    l: 9.43643 + 9.41579 * g10 ** -2 - 83.5422 * c,
    m: -2.42272 + 1.86478 * Math.sqrt(ga) - 1.93299e-5 * ga ** 3,
    s: 0.0193557 + 0.0310716 * g10 ** -2 - 0.0657587 * c,
  };
}

export function efwFromZ(ga: number, z: number): number {
  const { l, m, s } = hadlockLms(ga);
  const logEfw = Math.abs(l) < 1e-8 ? m * Math.exp(s * z) : m * (z * s * l + 1) ** (1 / l);
  return Math.exp(logEfw);
}

export function efwCentile(ga: number, grams: number): Centile | null {
  if (!(grams > 0) || ga < EFW_RANGE.min || ga > EFW_RANGE.max + 6 / 7) return null;
  const g = Math.min(ga, EFW_RANGE.max);
  const { l, m, s } = hadlockLms(g);
  const y = Math.log(grams);
  const z = Math.abs(l) < 1e-8 ? Math.log(y / m) / s : ((y / m) ** l - 1) / (s * l);
  return { z: round(z, 2), centile: round(zToPercentile(z), 1), median: Math.round(efwFromZ(g, 0)) };
}

// ---------- Umbilical artery Doppler (INTERGROWTH-21st) ----------
export type UaIndex = "pi" | "ri" | "sd";
export const UA_RANGE = { min: 24, max: 40 };

const UA_G: Record<UaIndex, number> = { pi: -0.0768617, ri: 0.0172944, sd: -0.2752483 };
const UA_M: Record<UaIndex, (g: number) => number> = {
  pi: (g) => 1.02944 + 77.7456 * g ** -2 - 0.000004455 * g ** 3,
  ri: (g) => 0.674914 + 25.3909 * g ** -2 - 0.0000022523 * g ** 3,
  sd: (g) => 2.60358 + 445.991 * g ** -2 - 0.0000108754 * g ** 3,
};
const UA_S: Record<UaIndex, (g: number) => number> = {
  pi: (g) => -0.00645693 + 254.885 * Math.log(g) * g ** -2 - 715.949 * g ** -2,
  ri: (g) => 0.0375921 + 60.7614 * Math.log(g) * g ** -2 - 183.336 * g ** -2,
  sd: (g) => -0.503202 + 1268.37 * Math.log(g) * g ** -2 - 3417.37 * g ** -2,
};

/** Value at a given z (exponential-normal model, Royston & Wright 1998). */
export function uaValueAtZ(index: UaIndex, ga: number, z: number): number {
  const g = UA_G[index], m = UA_M[index](ga), s = UA_S[index](ga);
  return m + (s / g) * Math.log(1 + g * z);
}

export function uaCentile(index: UaIndex, ga: number, value: number): Centile | null {
  if (!(value > 0) || ga < UA_RANGE.min || ga > UA_RANGE.max + 6 / 7) return null;
  const gw = Math.min(ga, UA_RANGE.max);
  const g = UA_G[index], m = UA_M[index](gw), s = UA_S[index](gw);
  const z = (Math.exp(((value - m) * g) / s) - 1) / g;
  return { z: round(z, 2), centile: round(zToPercentile(z), 1), median: round(m, 2) };
}

// ---------- MCA peak systolic velocity (fetal anaemia) ----------
/** Median MCA-PSV (cm/s) for GA in weeks — Mari 2000. */
export const mcaPsvMedian = (ga: number) => Math.exp(2.31 + 0.046 * ga);

export function mcaPsvMoM(ga: number, psv: number): number | null {
  if (!(psv > 0) || ga < 16 || ga > 41) return null;
  return round(psv / mcaPsvMedian(ga), 2);
}

// ---------- Amniotic fluid ----------
export type Liquor = "oligo" | "normal" | "polyMild" | "polyModerate" | "polySevere";

export interface LiquorResult {
  kind: Liquor;
  label: string;
}

/** SDP (deepest vertical pocket) and/or AFI in cm. SDP is preferred when both given. */
export function assessLiquor(sdp?: number, afi?: number): LiquorResult | null {
  const has = (v?: number) => v != null && Number.isFinite(v) && v >= 0;
  if (has(sdp)) {
    const v = sdp!;
    if (v < 2) return { kind: "oligo", label: `Oligohydramnios (SDP ${v} cm < 2 cm)` };
    if (v >= 16) return { kind: "polySevere", label: `Severe polyhydramnios (SDP ${v} cm ≥ 16)` };
    if (v >= 12) return { kind: "polyModerate", label: `Moderate polyhydramnios (SDP ${v} cm, 12–15.9)` };
    if (v >= 8) return { kind: "polyMild", label: `Mild polyhydramnios (SDP ${v} cm, 8–11.9)` };
    return { kind: "normal", label: `Normal liquor (SDP ${v} cm)` };
  }
  if (has(afi)) {
    const v = afi!;
    if (v <= 5) return { kind: "oligo", label: `Oligohydramnios (AFI ${v} cm ≤ 5 cm)` };
    if (v >= 35) return { kind: "polySevere", label: `Severe polyhydramnios (AFI ${v} cm ≥ 35)` };
    if (v >= 30) return { kind: "polyModerate", label: `Moderate polyhydramnios (AFI ${v} cm, 30–34.9)` };
    if (v >= 24) return { kind: "polyMild", label: `Mild polyhydramnios (AFI ${v} cm, 24–29.9)` };
    return { kind: "normal", label: `Normal liquor (AFI ${v} cm)` };
  }
  return null;
}

// ---------- Classification and plan ----------
export type UaFlow = "normal" | "aedf" | "redf";
export type DvFlow = "normal" | "highPi" | "absentA";

export interface ScanInput {
  ga: number;
  acCentile: number | null;
  efwCentile: number | null;
  efwGrams: number | null;
  /** Previous AC or EFW centile (for "crossing centiles"). */
  prevCentile: number | null;
  uaPiCentile: number | null;
  uaFlow: UaFlow;
  cpr: number | null;
  /** Report states CPR (or MCA PI) below the 5th centile. */
  cprLow5: boolean;
  /** Report states mean uterine artery PI above the 95th centile. */
  utaHigh: boolean;
  dv: DvFlow;
  liquor: LiquorResult | null;
  mcaMoM: number | null;
  diabetes: boolean;
}

export type Growth = "fgrEarly" | "fgrLate" | "sga" | "aga" | "lga" | "unknown";
export type Tone = "ok" | "watch" | "check" | "treat" | "urgent" | "emergency";

export interface ScanPlan {
  growth: Growth;
  growthLabel: string;
  reasons: string[];
  tone: Tone;
  title: string;
  surveillance: string;
  delivery: string;
  actions: string[];
}

function smallest(a: number | null, b: number | null): number | null {
  if (a == null) return b;
  if (b == null) return a;
  return Math.min(a, b);
}

export function classifyGrowth(i: ScanInput): { growth: Growth; label: string; reasons: string[] } {
  const low = smallest(i.acCentile, i.efwCentile);
  const high = Math.max(i.acCentile ?? -1, i.efwCentile ?? -1);
  const reasons: string[] = [];
  if (low == null) return { growth: "unknown", label: "Enter AC and/or EFW", reasons };
  const uaHigh = i.uaPiCentile != null && i.uaPiCentile > 95;
  const endDiastolicLost = i.uaFlow !== "normal";
  const early = i.ga < 32;

  if (early) {
    if (low < 3) reasons.push("AC/EFW < 3rd centile");
    if (endDiastolicLost) reasons.push(i.uaFlow === "redf" ? "UA reversed end-diastolic flow" : "UA absent end-diastolic flow");
    if (low < 10 && (i.utaHigh || uaHigh)) {
      reasons.push(`AC/EFW < 10th with ${[uaHigh && "UA PI > 95th", i.utaHigh && "UtA PI > 95th"].filter(Boolean).join(" and ")}`);
    }
    if (reasons.length) return { growth: "fgrEarly", label: "Early-onset FGR (< 32 wk)", reasons };
  } else {
    if (low < 3) reasons.push("AC/EFW < 3rd centile");
    const minor: string[] = [];
    if (low < 10) minor.push("AC/EFW < 10th");
    if (i.prevCentile != null && i.prevCentile - low > 50) minor.push("AC/EFW crossed > 2 quartiles");
    if (i.cprLow5 || (i.cpr != null && i.cpr < 1) || uaHigh) minor.push(uaHigh ? "UA PI > 95th" : "CPR < 5th centile");
    if (endDiastolicLost) reasons.push(i.uaFlow === "redf" ? "UA reversed end-diastolic flow" : "UA absent end-diastolic flow");
    if (!reasons.length && minor.length >= 2) reasons.push(`${minor.join(" + ")} (≥ 2 of 3)`);
    if (reasons.length) return { growth: "fgrLate", label: "Late-onset FGR (≥ 32 wk)", reasons };
  }
  if (low < 10) return { growth: "sga", label: "SGA — small for gestational age (no FGR criteria)", reasons: ["AC/EFW < 10th centile"] };
  if (high > 90) {
    const r = ["AC/EFW > 90th centile"];
    if (i.efwGrams != null && i.efwGrams >= 4000) r.push(`EFW ${i.efwGrams} g ≥ 4000 g (macrosomia)`);
    return { growth: "lga", label: "LGA — large for gestational age", reasons: r };
  }
  return { growth: "aga", label: "Appropriate for gestational age (10th–90th)", reasons: ["AC and EFW 10th–90th centile"] };
}

const STEROIDS = "Antenatal corticosteroids if delivery is likely before 34+6 wk (WHO 2022).";
const MGSO4 = "Magnesium sulphate for fetal neuroprotection if delivering before 32 wk (WHO; NICE: offer 24+0–29+6, consider to 33+6).";

export function scanPlan(i: ScanInput): ScanPlan {
  const g = classifyGrowth(i);
  const actions: string[] = [];
  let tone: Tone = "ok";
  let title = "Growth and Doppler within normal limits";
  let surveillance = "Routine antenatal care; repeat scan only as per schedule or clinical indication.";
  let delivery = "Await spontaneous labour; routine care.";
  const low = smallest(i.acCentile, i.efwCentile);
  const uaHigh = i.uaPiCentile != null && i.uaPiCentile > 95;

  // Doppler / fetal compromise first — they drive urgency regardless of size.
  if (i.dv === "absentA") {
    tone = "emergency";
    title = "Ductus venosus a-wave absent/reversed — imminent fetal compromise";
    surveillance = "Admit to a unit with NICU; continuous senior review.";
    delivery = "Deliver once viable (from ~26 wk) after corticosteroids — usually by caesarean (ISUOG 2020).";
    actions.push(STEROIDS, MGSO4, "Senior obstetrician and neonatology team now.");
  } else if (i.uaFlow === "redf") {
    tone = "urgent";
    title = "UA reversed end-diastolic flow";
    surveillance = "Admit; daily CTG (computerised if available) and Doppler incl. ductus venosus.";
    delivery = "Deliver at 30+0–32+0 wk, earlier if DV or CTG abnormal (ACOG/SMFM; ISUOG ≥ 30 wk). Caesarean usually.";
    actions.push(STEROIDS, MGSO4);
  } else if (i.uaFlow === "aedf") {
    tone = "urgent";
    title = "UA absent end-diastolic flow";
    surveillance = "Admit or 2–3×/week (daily if < 32 wk) CTG and Doppler incl. ductus venosus.";
    delivery = "Deliver at 32+0–34+0 wk (ISUOG ≥ 32; ACOG/SMFM 33+0–34+0), earlier if DV or CTG abnormal. Caesarean usually.";
    actions.push(STEROIDS, MGSO4);
  } else if (i.dv === "highPi") {
    tone = "urgent";
    title = "Ductus venosus PI > 95th — fetal compromise developing";
    surveillance = "Admit; daily computerised CTG and Doppler.";
    delivery = "Plan delivery after corticosteroids; deliver if a-wave lost or CTG abnormal (ISUOG 2020).";
    actions.push(STEROIDS, MGSO4);
  }

  if (tone === "ok") {
    if (g.growth === "fgrEarly" || g.growth === "fgrLate") {
      tone = "treat";
      if (uaHigh) {
        title = "FGR with UA PI > 95th (end-diastolic flow present)";
        surveillance = "UA Doppler + CTG weekly (twice weekly if worsening); growth every 2 weeks.";
        delivery = "Deliver at 37+0 wk (ACOG/SMFM; ISUOG), earlier if Doppler deteriorates.";
      } else if (i.cprLow5 || (i.cpr != null && i.cpr < 1)) {
        title = "FGR with cerebral redistribution (CPR < 5th centile)";
        surveillance = "UA/MCA Doppler and CTG at least weekly; growth every 2 weeks.";
        delivery = "Deliver at 37+0–38+0 wk (ISUOG 2020).";
      } else if (low != null && low < 3) {
        title = "FGR — AC/EFW below the 3rd centile";
        surveillance = "UA Doppler weekly; growth every 2 weeks (not sooner).";
        delivery = "Deliver at 37+0 wk (ACOG/SMFM; RCOG 2024).";
      } else {
        title = g.label;
        surveillance = "UA Doppler and CTG weekly; growth every 2 weeks.";
        delivery = "Deliver at 37+0–38+0 wk, earlier if Doppler deteriorates.";
      }
      if (i.ga < 32) actions.push("Early FGR: detailed anomaly review; offer infection screen (CMV, toxoplasma) and genetic testing (microarray) — ISUOG 2020.");
      actions.push("Fetal movement awareness; low-dose aspirin does not treat established FGR.");
    } else if (g.growth === "sga") {
      tone = "watch";
      title = "SGA with normal Doppler";
      surveillance = "Growth every 2 weeks (not sooner) and UA Doppler every 2 weeks (ISUOG); weekly if UA PI rises.";
      delivery = "Deliver at 38+0–39+6 wk (ACOG/SMFM); RCOG 2024: offer delivery at 39+0 wk.";
      actions.push("Recheck dating (CRL) and maternal risk factors; review anomaly scan.");
    } else if (g.growth === "lga") {
      tone = "check";
      title = i.efwGrams != null && i.efwGrams >= 4000 ? "LGA — suspected macrosomia" : "LGA";
      surveillance = "Repeat growth scan in 2–3 weeks; check liquor.";
      delivery = i.diabetes
        ? "Diabetes: discuss elective caesarean if EFW ≥ 4500 g (ACOG); otherwise plan delivery 38+0–39+6 wk per glycaemic control."
        : "Discuss induction from 38+0–39+0 wk vs expectant care (NICE NG207); consider caesarean if EFW ≥ 5000 g (ACOG).";
      actions.push(i.diabetes ? "Review glycaemic control (SMBG, HbA1c)." : "Screen for gestational diabetes (75 g OGTT) if not done after 24 wk.");
      actions.push("Counsel about shoulder dystocia risk; senior presence at delivery.");
    } else if (g.growth === "aga" && uaHigh) {
      tone = "watch";
      title = "Normal size but UA PI > 95th";
      surveillance = "Repeat UA Doppler in 1 week with growth in 2 weeks.";
      delivery = "Deliver at 37+0 wk if UA PI stays > 95th (ACOG/SMFM).";
    }
  } else if (g.growth === "fgrEarly" && i.ga < 32) {
    actions.push("Early FGR: detailed anomaly review; infection screen and genetic testing — ISUOG 2020.");
  }

  // Liquor
  if (i.liquor) {
    if (i.liquor.kind === "oligo") {
      if (tone === "ok" || tone === "watch") tone = "check";
      actions.push("Oligohydramnios: exclude ruptured membranes, FGR and renal anomalies; Doppler; if isolated at ≥ 36 wk, deliver at 36+0–37+6 wk (ACOG/SMFM).");
    } else if (i.liquor.kind !== "normal") {
      if (tone === "ok") tone = "check";
      actions.push("Polyhydramnios: 75 g OGTT, detailed anomaly scan (GI atresia, neuromuscular), consider infection screen; severe → watch for preterm labour/cord prolapse (SMFM 2018).");
    }
  }
  // Anaemia
  if (i.mcaMoM != null && i.mcaMoM > 1.5) {
    tone = tone === "emergency" ? tone : "urgent";
    actions.unshift(`MCA-PSV ${i.mcaMoM} MoM (> 1.5): suspected moderate–severe fetal anaemia — refer the same day to fetal medicine for cordocentesis / intrauterine transfusion (less reliable after 35 wk).`);
  }
  if (i.utaHigh && i.ga < 24 && g.growth !== "fgrEarly") {
    actions.push("High uterine artery PI: increased risk of pre-eclampsia/FGR — growth scans every 4 weeks from 26–28 wk; aspirin 150 mg at night if started before 16 wk.");
  }

  return { growth: g.growth, growthLabel: g.label, reasons: g.reasons, tone, title, surveillance, delivery, actions };
}

// ---------- Scan schedule by gestation ----------
export interface ScanSlot {
  id: string;
  name: string;
  window: string;
  from: number; // weeks (inclusive)
  to: number; // weeks (exclusive)
  checks: string[];
}

export const SCAN_SCHEDULE: ScanSlot[] = [
  {
    id: "dating", name: "Dating & viability scan", window: "6+0 – 10+6 wk", from: 6, to: 11,
    checks: ["Intrauterine pregnancy, cardiac activity", "Number of fetuses; chorionicity/amnionicity in twins", "CRL for dating (adjust EDD if differs from LMP by > 5 days before 9 wk / > 7 days to 13+6)"],
  },
  {
    id: "nt", name: "NT scan (first-trimester screening)", window: "11+0 – 13+6 wk (CRL 45–84 mm)", from: 11, to: 14,
    checks: ["Nuchal translucency, nasal bone; combined test with PAPP-A and free β-hCG", "Early anatomy (skull, abdominal wall, limbs)", "Pre-eclampsia screening: MAP, mean uterine artery PI, PlGF → aspirin 150 mg at night before 16 wk if high risk (FIGO/FMF)", "Chorionicity in twins (lambda / T sign)"],
  },
  {
    id: "anomaly", name: "Anomaly scan (Level II / TIFFA)", window: "18+0 – 20+6 wk", from: 18, to: 21,
    checks: ["Detailed fetal anatomy (ISUOG mid-trimester guideline)", "Placental site — low-lying (< 20 mm from os) → repeat at 32 wk (RCOG GTG 27a)", "Cervical length (TVS) if history of preterm birth: < 25 mm → progesterone/cerclage", "Biometry, liquor; uterine artery Doppler if high risk"],
  },
  {
    id: "echo", name: "Fetal echocardiography (if indicated)", window: "20+0 – 24+0 wk", from: 20, to: 24,
    checks: ["Pre-gestational diabetes, NT ≥ 3.5 mm, family history of CHD, monochorionic twins, teratogen exposure, suspicious heart on anomaly scan"],
  },
  {
    id: "growth1", name: "Third-trimester growth scan", window: "28+0 – 32+0 wk", from: 28, to: 32,
    checks: ["Biometry (BPD, HC, AC, FL) and EFW centile", "Liquor (SDP/AFI)", "Umbilical artery Doppler (± MCA, CPR) in high-risk pregnancy", "Placental position follow-up"],
  },
  {
    id: "growth2", name: "Late growth & presentation scan", window: "34+0 – 37+0 wk", from: 34, to: 37,
    checks: ["Growth velocity vs previous scan (late FGR, LGA)", "Presentation (breech → ECV from 36–37 wk)", "Liquor; Doppler if growth falling or risk factors"],
  },
  {
    id: "term", name: "Post-dates wellbeing (if undelivered)", window: "≥ 40+0 wk", from: 40, to: 43,
    checks: ["Liquor (SDP) and CTG twice weekly from 40+0–41+0 wk", "Offer induction at 41+0 wk (WHO/NICE); earlier if oligohydramnios"],
  },
];

export const SERIAL_NOTES = [
  "High-risk pregnancies (previous SGA/stillbirth, hypertension, PE, diabetes, smoking, high UtA PI): serial growth scans every 2–4 weeks from 26–28 wk (RCOG GTG 31).",
  "Growth scans should be at least 2 weeks apart — shorter intervals give false 'growth failure' (ISUOG).",
  "Twins: dichorionic — every 4 weeks from 20 wk; monochorionic — every 2 weeks from 16 wk (TTTS/sIUGR surveillance) (NICE NG137).",
  "India: sex determination is prohibited under the PCPNDT Act; termination limits per MTP (Amendment) Act 2021.",
];

export function scheduleStatus(ga: number): { current: ScanSlot[]; next: ScanSlot | null; missedNote: string | null } {
  const current = SCAN_SCHEDULE.filter((s) => ga >= s.from && ga < s.to);
  const next = SCAN_SCHEDULE.find((s) => s.from > ga) ?? null;
  let missedNote: string | null = null;
  if (ga >= 14 && ga < 18) missedNote = "If no NT scan was done: offer the quadruple test (15–20 wk) and plan the anomaly scan at 18–20 wk.";
  if (ga >= 21 && ga < 24) missedNote = "Anomaly scan not done yet? Do it now — up to 24 wk is still useful for decisions under the MTP Act 2021.";
  return { current, next, missedNote };
}
