/**
 * Independent cross-check of every Pocket-Med calculator.
 *
 * Each section re-derives the expected answer from the published formula or
 * table (written fresh here, not imported from the app) and compares it with
 * the app's own function over hundreds of seeded random and edge-case
 * combinations. Run: npx tsx scripts/crosscheck.ts   (exit 1 on any mismatch)
 * Run under a DST time zone too: TZ=America/New_York npx tsx scripts/crosscheck.ts
 */
import { estimateCrCl, egfrCkdEpi2021, gfrCategory } from "../src/lib/creatinineClearanceMath";
import { bmiValue, classifyBmiIndian, feetInchesToCm, waistFlag } from "../src/lib/bmiMath";
import { assessNewbornWeight } from "../src/lib/newbornWeightMath";
import { hoursOfLife, localDateTime, to24h } from "../src/lib/holMath";
import { calculateGestation, acogRedatingThresholdDays } from "../src/lib/obMath";
import {
  basalTitration, bolusTitration, carbRatio, correctionDose, correctionFactor,
  dkaRate, regimenSplit, tddPerKgRange, vriiiRate, type Regimen,
} from "../src/lib/insulinMath";
import { calculatePediatricDose } from "../src/lib/pediatricDoseMath";
import { pediatricDrugsDB, dosesPerDayFromFrequency } from "../src/data/pediatricDrugs";
import { weightForAge, heightForAge, headCircForAge, zToPercentile } from "../src/lib/growthMath";
import { WHO_WFA_BOYS, WHO_WFA_GIRLS, WHO_HFA_BOYS, WHO_HFA_GIRLS } from "../src/data/whoGrowthStandards";
import { WHO_HC_BOYS, WHO_HC_GIRLS } from "../src/data/whoHeadCircumference";
import { bpCentiles, assessBp } from "../src/lib/bpMath";
import { WUEHL_SBP_DAY_BOYS, WUEHL_DBP_NIGHT_GIRLS } from "../src/data/wuehlBpReference";
import { aapThresholds, assessAap, aapTcbNeedsTsb } from "../src/lib/aapBili";
import { AAP2022 } from "../src/data/aap2022Bilirubin";
import { biliThresholds, assessBili } from "../src/lib/biliMath";
import { aapPlan } from "../src/lib/biliPlan";
import { orsPlan, zincDose } from "../src/lib/orsMath";
import { schwartzEgfr, gfrStage } from "../src/lib/pedRenal";
import { analyzeRegimen } from "../src/clinical/AnalysisEngine";
import { drugsDB, getDrugById, interactionsDB } from "../src/clinical/clinicalData";
import { naegeleEdd } from "../src/lib/obMath";
import {
  biometryCentile, igBiometryMuSigma, hadlockEfw, efwCentile, efwFromZ, uaCentile, uaValueAtZ,
  mcaPsvMoM, assessLiquor, classifyGrowth, scanPlan, scheduleStatus, mmFromGaEquivalent,
} from "../src/lib/ancScanMath";
import { IG_BIOMETRY_TABLES } from "./data/igBiometryTables";
import { BISHOP_ITEMS, bishopTotal, bishopPlan } from "../src/lib/bishopMath";
import { evaluate } from "../src/lib/calcMath";
import { isoFromParts } from "../src/components/DateDMY";
import { cdAdd, cdPause, cdRemaining, cdStart, cdTick, newCountdown, newStopwatch, swElapsed, swLap, swPause, swStart,
  newRunClock, runElapsed, runStart, runStop, segStart, segStop, segDuration, openSegment, formatDuration, formatPosition } from "../src/lib/timerMath";
import { fits } from "../src/lib/lastState";
import { addHistory, getHistory, clearHistory } from "../src/lib/calcHistory";

// ---------- harness ----------
let seed = 20261001;
const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const pick = <T,>(a: readonly T[]) => a[Math.floor(rnd() * a.length)];
const uni = (a: number, b: number) => a + rnd() * (b - a);
const r1 = (x: number) => Math.round(x * 10) / 10;
const results: { tool: string; cases: number; fails: string[] }[] = [];
function tool(name: string, fn: (check: (ok: boolean, msg: () => string) => void) => void) {
  const fails: string[] = [];
  let cases = 0;
  fn((ok, msg) => { cases++; if (!ok) fails.push(msg()); });
  results.push({ tool: name, cases, fails });
}
const near = (a: number | null | undefined, b: number, tol: number) => a != null && Math.abs(a - b) <= tol;

// ---------- 1. Creatinine clearance + eGFR ----------
tool("Creatinine clearance (Cockcroft–Gault, IBW/AjBW)", (check) => {
  for (let i = 0; i < 500; i++) {
    const female = rnd() < 0.5;
    const age = Math.round(uni(18, 99));
    const wt = r1(uni(30, 200));
    const ht = rnd() < 0.15 ? null : Math.round(uni(140, 205));
    const cr = Math.round(uni(0.3, 10) * 100) / 100;
    // Oracle: Devine IBW; AjBW = IBW + 0.4 (ABW − IBW) when ABW > 120% IBW.
    let used = wt;
    if (ht != null) {
      const inches = ht / 2.54;
      const ibw = (female ? 45.5 : 50) + 2.3 * Math.max(inches - 60, 0);
      if (wt > 1.2 * ibw) used = ibw + 0.4 * (wt - ibw);
    }
    const want = ((140 - age) * used) / (72 * cr) * (female ? 0.85 : 1);
    const got = estimateCrCl({ sex: female ? "Female" : "Male", ageYears: age, weightKg: wt, heightCm: ht, creatinine: cr, unit: "mg/dL" });
    check(got.valid && near(got.crCl, r1(want), 0.11), () => `CG ${female ? "F" : "M"} ${age}y ${wt}kg ${ht}cm Cr ${cr}: app ${got.crCl} vs ${r1(want)}`);
    // Same patient in µmol/L must agree within 1.5%.
    const si = estimateCrCl({ sex: female ? "Female" : "Male", ageYears: age, weightKg: wt, heightCm: ht, creatinine: cr * 88.4, unit: "µmol/L" });
    check(Math.abs(si.crCl - got.crCl) <= Math.max(0.2, got.crCl * 0.015), () => `CG units disagree: mg/dL ${got.crCl} vs µmol/L ${si.crCl}`);
  }
  // Impossible inputs must be refused, never a number.
  for (const bad of [{ a: 0, w: 70, c: 1 }, { a: 150, w: 70, c: 1 }, { a: 50, w: 0, c: 1 }, { a: 50, w: 70, c: 0 }, { a: 50, w: 70, c: -1 }])
    check(!estimateCrCl({ sex: "Male", ageYears: bad.a, weightKg: bad.w, heightCm: 170, creatinine: bad.c, unit: "mg/dL" }).valid, () => `CG accepted impossible input ${JSON.stringify(bad)}`);
});

tool("eGFR CKD-EPI 2021 + KDIGO stage", (check) => {
  for (let i = 0; i < 400; i++) {
    const female = rnd() < 0.5;
    const age = Math.round(uni(18, 95));
    const cr = Math.round(uni(0.3, 12) * 100) / 100;
    const k = female ? 0.7 : 0.9, a = female ? -0.241 : -0.302;
    const want = 142 * Math.min(cr / k, 1) ** a * Math.max(cr / k, 1) ** -1.2 * 0.9938 ** age * (female ? 1.012 : 1);
    const got = egfrCkdEpi2021(female ? "Female" : "Male", age, cr);
    check(near(got, r1(want), 0.11), () => `eGFR ${female ? "F" : "M"} ${age} Cr ${cr}: ${got} vs ${r1(want)}`);
    const st = got! >= 90 ? "G1" : got! >= 60 ? "G2" : got! >= 45 ? "G3a" : got! >= 30 ? "G3b" : got! >= 15 ? "G4" : "G5";
    check(gfrCategory(got!).stage === st, () => `KDIGO stage at ${got}: ${gfrCategory(got!).stage} vs ${st}`);
  }
  check(egfrCkdEpi2021("Male", 17, 1) === null, () => "eGFR must refuse age < 18");
});

// ---------- 2. BMI ----------
tool("BMI (Indian cut-offs, obesity classes, waist)", (check) => {
  const cls = (b: number) => b < 16 ? "Severe underweight" : b < 18.5 ? "Underweight" : b < 23 ? "Normal" : b < 25 ? "Overweight" : b < 30 ? "class I" : b < 35 ? "class II" : "class III";
  for (let i = 0; i < 500; i++) {
    const w = r1(uni(25, 220)), h = r1(uni(120, 210));
    const want = r1(w / (h / 100) ** 2);
    const got = bmiValue(w, h);
    check(got === want, () => `BMI ${w}kg ${h}cm: ${got} vs ${want}`);
    check(classifyBmiIndian(got!).label.includes(cls(got!)), () => `BMI ${got} class: "${classifyBmiIndian(got!).label}" expected ${cls(got!)}`);
  }
  for (const b of [15.9, 16, 18.4, 18.5, 22.9, 23, 24.9, 25, 29.9, 30, 34.9, 35])
    check(classifyBmiIndian(b).label.includes(cls(b)), () => `BMI boundary ${b}: "${classifyBmiIndian(b).label}"`);
  for (let i = 0; i < 60; i++) {
    const ft = Math.floor(uni(4, 7)), inch = Math.floor(uni(0, 12));
    check(near(feetInchesToCm(ft, inch), (ft * 12 + inch) * 2.54, 0.06), () => `${ft}'${inch}" conversion`);
  }
  for (const [w, s, ab] of [[89.9, "male", false], [90, "male", true], [79, "female", false], [80, "female", true]] as const)
    check(waistFlag(w, s).abnormal === ab, () => `waist ${w} ${s}`);
});

// ---------- 3. Newborn weight loss ----------
tool("Newborn weight loss %", (check) => {
  for (let i = 0; i < 500; i++) {
    const b = Math.round(uni(1200, 4800)), t = Math.round(b * uni(0.78, 1.08));
    const pct = Math.round(((b - t) / b) * 1000) / 10;
    const band = pct <= 0 ? "gain" : pct < 7 ? "normal" : pct < 10 ? "borderline" : pct < 12 ? "significant" : "severe";
    const r = assessNewbornWeight(b, t, rnd() < 0.5 ? null : uni(0, 400));
    check(r.percent === pct && r.band === band, () => `NB ${b}→${t}: ${r.percent}% ${r.band} vs ${pct}% ${band}`);
    check(r.mark10 === Math.round(b * 0.9) && r.mark7 === Math.round(b * 0.93), () => `NB marks ${b}`);
  }
});

// ---------- 4. Hours of life ----------
tool("Hours of life (12-hour AM/PM)", (check) => {
  for (let h = 1; h <= 12; h++) for (const p of ["AM", "PM"] as const) {
    const want = p === "AM" ? (h === 12 ? 0 : h) : h === 12 ? 12 : h + 12;
    check(to24h(h, p) === want, () => `${h} ${p} → ${to24h(h, p)} vs ${want}`);
  }
  for (let i = 0; i < 400; i++) {
    const y = 2025 + Math.floor(rnd() * 2), mo = 1 + Math.floor(rnd() * 12), d = 1 + Math.floor(rnd() * 28);
    const h12 = 1 + Math.floor(rnd() * 12), mi = Math.floor(rnd() * 60), p = pick(["AM", "PM"] as const);
    const ds = `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const birth = localDateTime(ds, h12, mi, p)!;
    const h24 = to24h(h12, p)!;
    check(birth.getHours() === h24 || birth.getHours() === (h24 + 1) % 24, () => `HOL birth hour ${ds} ${h12}:${mi} ${p} → ${birth.getHours()}`);
    const elapsedMin = Math.floor(uni(0, 720 * 60));
    const at = new Date(birth.getTime() + elapsedMin * 60000);
    const r = hoursOfLife(birth, at)!;
    check(r.hours === Math.floor(elapsedMin / 60) && r.dayOfLife === Math.floor(elapsedMin / 1440) + 1 && r.remMinutes === elapsedMin % 60,
      () => `HOL +${elapsedMin} min: ${r.hours} h day ${r.dayOfLife} vs ${Math.floor(elapsedMin / 60)} h`);
  }
  check(hoursOfLife(new Date(2026, 0, 2), new Date(2026, 0, 1)) === null, () => "HOL before birth must be null");
  check(localDateTime("2026-02-29", 1, 0, "AM") === null && localDateTime("2028-02-29", 1, 0, "AM") !== null, () => "HOL leap-day validation");
});

// ---------- 5. OB dating ----------
tool("OB dating (Naegele, cycle, IVF, scan, EDD)", (check) => {
  // Oracle uses pure calendar-day arithmetic in UTC (no clock hours).
  const utcDay = (d: Date) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000;
  const fromDay = (n: number) => { const x = new Date(n * 86400000); return new Date(x.getUTCFullYear(), x.getUTCMonth(), x.getUTCDate()); };
  const sameDate = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  for (let i = 0; i < 600; i++) {
    const base = utcDay(new Date(2025, 0, 1)) + Math.floor(rnd() * 900);
    const anchor = fromDay(base);
    const method = pick(["lmp", "ivf5", "ivf3", "ovulation", "scan", "edd"] as const);
    const cycle = method === "lmp" ? Math.round(uni(21, 40)) : 28;
    const scanGa = Math.round(uni(42, 280));
    let lmpDay: number;
    switch (method) {
      case "lmp": lmpDay = base + (cycle - 28); break;
      case "ivf5": lmpDay = base - 19; break;
      case "ivf3": lmpDay = base - 17; break;
      case "ovulation": lmpDay = base - 14; break;
      case "scan": lmpDay = base - scanGa; break;
      case "edd": lmpDay = base - 280; break;
    }
    const todayDay = lmpDay + Math.floor(uni(0, 300));
    const r = calculateGestation(method, anchor, fromDay(todayDay), cycle, scanGa);
    const ga = todayDay - lmpDay;
    check(!!r && r.gaWeeks === Math.floor(ga / 7) && r.gaDays === ga % 7, () => `OB ${method} GA: ${r?.gaWeeks}w${r?.gaDays}d vs ${Math.floor(ga / 7)}w${ga % 7}d`);
    check(!!r && sameDate(r.edd, fromDay(lmpDay + 280)), () => `OB ${method} anchor ${anchor.toDateString()} EDD ${r?.edd.toDateString()} vs ${fromDay(lmpDay + 280).toDateString()}`);
    check(!!r && sameDate(r.derivedLmp, fromDay(lmpDay)), () => `OB ${method} LMP ${r?.derivedLmp.toDateString()} vs ${fromDay(lmpDay).toDateString()}`);
    const tri = ga < 98 ? 1 : ga < 196 ? 2 : 3;
    check(!!r && r.trimester === tri, () => `OB trimester at ${ga} d`);
  }
  for (const [d, t] of [[62, 5], [63, 7], [111, 7], [112, 10], [153, 10], [154, 14], [195, 14], [196, 21]])
    check(acogRedatingThresholdDays(d).threshold === t, () => `ACOG redating at ${d} d`);
});

// ---------- 6. Insulin ----------
tool("Insulin (TDD, splits, ISF/ICR, titration, VRIII, DKA)", (check) => {
  const regs: Regimen[] = ["basal", "basalPlus", "basalBolus", "premix", "splitMixed"];
  for (let i = 0; i < 400; i++) {
    const tdd = Math.round(uni(6, 140));
    const reg = pick(regs), setting = pick(["adult", "child"] as const);
    const parts = regimenSplit(reg, tdd, setting);
    const sum = parts.reduce((s, p) => s + p.units, 0);
    check(Math.abs(sum - tdd) <= parts.length, () => `split ${reg} TDD ${tdd}: parts sum ${sum}`);
    check(correctionFactor(tdd) === Math.round(1800 / tdd) && correctionFactor(tdd, false) === Math.round(1500 / tdd), () => `ISF at ${tdd}`);
    check(carbRatio(tdd) === Math.round(500 / tdd) && carbRatio(tdd, false) === Math.round(450 / tdd), () => `ICR at ${tdd}`);
    const g = Math.round(uni(40, 600));
    const cd = correctionDose(g, tdd);
    const want = g > 150 ? Math.round(((g - 150) / Math.round(1800 / tdd)) * 2) / 2 : null;
    check(cd === want, () => `correction dose GRBS ${g} TDD ${tdd}: ${cd} vs ${want}`);
    const v = vriiiRate(g).rate;
    const vw = g < 70 ? 0 : g <= 140 ? 0.5 : g <= 180 ? 1 : g <= 250 ? 2 : g <= 300 ? 3 : g <= 350 ? 4 : 6;
    check(v === vw, () => `VRIII at ${g}: ${v} vs ${vw}`);
    const fb = basalTitration(g)!.band, fw = g < 70 ? "alert" : g <= 130 ? "normal" : g <= 180 ? "caution" : "alert";
    check(fb === fw, () => `basal titration at ${g}`);
    const pb = bolusTitration(g)!.band, pw = g < 70 ? "alert" : g <= 180 ? "normal" : g <= 250 ? "caution" : "alert";
    check(pb === pw, () => `bolus titration at ${g}`);
    const w = r1(uni(3, 150));
    const dk = dkaRate(w, setting)!;
    check(setting === "adult" ? near(dk.low, r1(0.1 * w), 0.05) && near(dk.high, r1(0.1 * w), 0.05) : near(dk.low, r1(0.05 * w), 0.05) && near(dk.high, r1(0.1 * w), 0.05), () => `DKA rate ${setting} ${w}`);
  }
  check(tddPerKgRange("adult", "t2", "basal").low === 0.1 && tddPerKgRange("adult", "t2", "basal").high === 0.2, () => "ADA basal 0.1–0.2 U/kg");
  check(tddPerKgRange("child", "t1", "basalBolus").low === 0.5, () => "ISPAD child 0.5–1 U/kg");
  const hypo = vriiiRate(55).text;
  // Every IV glucose option quoted must deliver 15–25 g (JBDS / ADA).
  for (const m of hypo.matchAll(/(\d+)–(\d+) ml(?: of)? (\d+)% dextrose|(\d+)% dextrose (\d+)–(\d+) ml/g)) {
    const [lo, hi, pct] = m[1] ? [m[1], m[2], m[3]] : [m[5], m[6], m[4]];
    check(Number(lo) * Number(pct) / 100 >= 14.9 && Number(hi) * Number(pct) / 100 <= 25.1, () => `Hypo rescue ${m[0]} = ${(Number(lo) * Number(pct) / 100).toFixed(1)}–${(Number(hi) * Number(pct) / 100).toFixed(1)} g glucose`);
  }
  check(/15–20 g/.test(hypo), () => `Hypoglycaemia rescue must state 15–20 g glucose: "${hypo}"`);
});

// ---------- 7. Pediatric doses ----------
tool("Pediatric dose calculator (all drugs × weights × frequencies)", (check) => {
  for (const d of pediatricDrugsDB) {
    if (!(d.defaultDoseMgPerKg > 0) || d.weightBands) continue;
    for (let i = 0; i < 6; i++) {
      const w = r1(uni(2, 70));
      const freq = pick(d.frequencyOptions.length ? d.frequencyOptions : [d.defaultFrequency]);
      const div = dosesPerDayFromFrequency(freq) || 1;
      const raw = w * d.defaultDoseMgPerKg;
      const daily = d.maxDosePerDayMg > 0 ? Math.min(raw, d.maxDosePerDayMg) : raw;
      const f = d.formulations.find((x) => x.strengthMg > 0 && x.strengthVolumeMl > 0) ?? null;
      const r = calculatePediatricDose({ weightKg: w, doseMgPerKgDay: d.defaultDoseMgPerKg, frequency: freq, drug: d, formulation: f });
      check(near(r.dailyMg, Math.round(daily * 100) / 100, 0.011) && near(r.perDoseMg, Math.round((daily / div) * 100) / 100, 0.011),
        () => `${d.id} ${w}kg ${freq}: daily ${r.dailyMg} per-dose ${r.perDoseMg} vs ${daily.toFixed(2)} / ${(daily / div).toFixed(2)}`);
      if (f) check(near(r.volumeMl, Math.round(((daily / div) * f.strengthVolumeMl / f.strengthMg) * 1000) / 1000, 0.002), () => `${d.id} volume`);
      check(r.capped === (d.maxDosePerDayMg > 0 && raw > d.maxDosePerDayMg), () => `${d.id} cap flag at ${w} kg`);
    }
  }
  // Oseltamivir: CDC/WHO bands from 1 year, 3 mg/kg/dose in infants.
  const osel = pediatricDrugsDB.find((d) => d.id === "oseltamivir_po")!;
  for (let i = 0; i < 160; i++) {
    const w = r1(uni(3, 80)), age = rnd() < 0.25 ? null : Math.floor(uni(1, 180));
    const infant = age == null ? w < 10 : age < 12;
    const want = infant ? 3 * w : w <= 15 ? 30 : w <= 23 ? 45 : w <= 40 ? 60 : 75;
    const r = calculatePediatricDose({ weightKg: w, doseMgPerKgDay: 4, frequency: "BD", drug: osel, formulation: null, ageMonths: age });
    check(near(r.perDoseMg, Math.round(Math.min(want, 75) * 100) / 100, 0.011), () => `oseltamivir ${w} kg ${age} m: ${r.perDoseMg} mg vs ${want}`);
  }
  // Rescue benzodiazepines never exceed a 10 mg single dose.
  for (const id of ["midazolam", "diazepam"]) {
    const d = pediatricDrugsDB.find((x) => x.id === id)!;
    const r = calculatePediatricDose({ weightKg: 70, doseMgPerKgDay: d.defaultDoseMgPerKg, frequency: "OD", drug: d, formulation: null });
    check(r.perDoseMg <= 10, () => `${id} single dose ${r.perDoseMg} mg at 70 kg exceeds 10 mg`);
  }
  // Clinical: default per-dose mg/kg must sit inside the per-dose range quoted in the drug's own text.
  for (const d of pediatricDrugsDB) {
    const m = /(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)\s*mg\/kg\/dose/.exec(d.recommendedDose);
    if (!m || !(d.defaultDoseMgPerKg > 0)) continue;
    const perDose = d.defaultDoseMgPerKg / (dosesPerDayFromFrequency(d.defaultFrequency) || 1);
    check(perDose >= Number(m[1]) - 1e-9 && perDose <= Number(m[2]) + 1e-9,
      () => `${d.id}: default ${d.defaultDoseMgPerKg} mg/kg/day ÷ ${d.defaultFrequency} = ${perDose.toFixed(3)} mg/kg/dose, outside its own "${m[0]}"`);
  }
});

// ---------- 8. Growth ----------
tool("Growth (WHO LMS z-scores, centiles, bands)", (check) => {
  const lmsZ = (x: number, l: number, m: number, s: number) => (l === 0 ? Math.log(x / m) / s : ((x / m) ** l - 1) / (l * s));
  // Independent normal CDF (erf via high-precision series) for percentiles.
  const cdf = (z: number) => { let s = 0, t = z; for (let n = 0; n < 200; n++) { s += t; t *= (-z * z / 2) / (n + 1) * (2 * n + 1) / (2 * n + 3); } return 0.5 + s / Math.sqrt(2 * Math.PI); };
  for (let i = 0; i < 300; i++) {
    const male = rnd() < 0.5, mo = Math.floor(uni(0, 61));
    const [, l, m, s] = (male ? WHO_HFA_BOYS : WHO_HFA_GIRLS)[mo];
    const h = r1(m * uni(0.85, 1.15));
    const r = heightForAge(h, mo, male ? "male" : "female")!;
    const z = lmsZ(h, l, m, s);
    check(near(r.z, Math.round(z * 100) / 100, 0.011), () => `HFA ${male ? "boy" : "girl"} ${mo}m ${h}cm: z ${r.z} vs ${z.toFixed(2)}`);
    check(near(r.percentile, r1(cdf(z) * 100), 0.15), () => `HFA percentile ${r.percentile} vs ${(cdf(z) * 100).toFixed(1)}`);
  }
  for (let i = 0; i < 300; i++) {
    const male = rnd() < 0.5, mo = Math.floor(uni(0, 61));
    const row = (male ? WHO_WFA_BOYS : WHO_WFA_GIRLS)[mo];
    const [, l, m, s, sd3n, sd2n, sd2p, sd3p] = row;
    const w = Math.round(m * uni(0.7, 1.35) * 100) / 100;
    let z = lmsZ(w, l, m, s);
    if (z > 3) z = 3 + (w - sd3p) / (sd3p - sd2p);           // WHO tail rule
    if (z < -3) z = -3 + (w - sd3n) / (sd2n - sd3n);
    const r = weightForAge(w, mo, male ? "male" : "female")!;
    check(near(r.z, Math.round(z * 100) / 100, 0.011), () => `WFA ${male ? "boy" : "girl"} ${mo}m ${w}kg: z ${r.z} vs ${z.toFixed(2)}`);
    const band = z < -3 ? "Severely underweight" : z < -2 ? "Underweight" : z <= 2 ? "Normal" : "Above";
    check(r.classification.startsWith(band), () => `WFA band at z ${z.toFixed(2)}: ${r.classification}`);
  }
  for (let i = 0; i < 300; i++) {
    const male = rnd() < 0.5, mo = Math.floor(uni(0, 61));
    const [, l, m, s] = (male ? WHO_HC_BOYS : WHO_HC_GIRLS)[mo];
    const hc = r1(m * uni(0.85, 1.15));
    const z = lmsZ(hc, l, m, s);
    const r = headCircForAge(hc, mo, male ? "male" : "female")!;
    check(near(r.z, Math.round(z * 100) / 100, 0.011), () => `HC ${mo}m ${hc}: z ${r.z} vs ${z.toFixed(2)}`);
    const want = z < -3 ? "Severe microcephaly" : z < -2 ? "Microcephaly" : z <= 2 ? "Normal" : "Macrocephaly";
    check(r.classification.startsWith(want), () => `HC band at z ${z.toFixed(2)}: ${r.classification}`);
  }
  for (const z of [-3, -2.5, -1.96, -1, 0, 0.5, 1.645, 2.33, 3]) check(near(zToPercentile(z), cdf(z) * 100, 0.001), () => `normal CDF at ${z}`);
  // WHO published anchors (boys): birth weight median 3.3464 kg, 12 m length median 75.7488 cm.
  check(WHO_WFA_BOYS[0][2] === 3.3464 && near(WHO_HFA_BOYS[12][2], 75.7488, 0.001), () => "WHO anchor values");
});

// ---------- 9. Pediatric BP ----------
tool("Ped-BP (Wühl ABPM LMS centiles + bands)", (check) => {
  const tbl = WUEHL_SBP_DAY_BOYS;
  for (let i = 0; i < 400; i++) {
    const x = uni(tbl[0][0], tbl[tbl.length - 1][0]);
    let lo = 0; while (lo < tbl.length - 2 && tbl[lo + 1][0] <= x) lo++;
    const f = (x - tbl[lo][0]) / (tbl[lo + 1][0] - tbl[lo][0]);
    const [l, m, s] = [1, 2, 3].map((k) => tbl[lo][k] + (tbl[lo + 1][k] - tbl[lo][k]) * f);
    const p95 = m * (1 + l * s * 1.6449) ** (1 / l);
    const c = bpCentiles("male", "day", "sbp", x, "height");
    check(near(c.p95, r1(p95), 0.11), () => `BP p95 at ${x.toFixed(1)} cm: ${c.p95} vs ${p95.toFixed(1)}`);
    const v = Math.round(uni(m * 0.75, m * 1.3));
    const z = ((v / m) ** l - 1) / (l * s);
    const pct = zToPercentile(z);
    const band = pct < 5 ? "alert" : pct < 10 ? "caution" : pct < 90 ? "normal" : pct < 95 ? "caution" : "alert";
    const a = assessBp("male", "day", "sbp", x, v, "height")!;
    check(a.band === band, () => `BP ${v} at ${x.toFixed(1)} cm: ${a.band} vs ${band} (pct ${pct.toFixed(1)})`);
  }
  const t2 = WUEHL_DBP_NIGHT_GIRLS;
  for (const row of t2) {
    const c = bpCentiles("female", "night", "dbp", row[0], "height");
    check(near(c.p50, r1(row[2]), 0.11), () => `night DBP girls median at ${row[0]} cm`);
  }
});

// ---------- 10. Neonatal jaundice ----------
tool("Bilirubin — AAP 2022 (tables, escalation, zones, Fig 7, TcB)", (check) => {
  const arrLookup = (key: string, h: number) => { const a = AAP2022[key]; return a[Math.min(Math.max(Math.floor(h), 1), a.length) - 1]; };
  for (let i = 0; i < 700; i++) {
    const ga = Math.floor(uni(35, 43)), rf = rnd() < 0.5, h = uni(0, 400);
    const g = Math.min(ga, 40), gx = Math.min(ga, 38);
    const photo = arrLookup(`photo_${rf ? "rf" : "none"}_${rf ? gx : g}`, h);
    const exch = arrLookup(`exchange_${rf ? "rf" : "none"}_${gx}`, h);
    const t = aapThresholds(ga, h, rf);
    check(t.photo === photo && t.exchange === exch && near(t.escalation, exch - 2, 0.051), () => `AAP ${ga}wk rf=${rf} ${h.toFixed(1)}h: ${JSON.stringify(t)} vs ${photo}/${exch}`);
    const tsb = Math.round(uni(2, 30) * 10) / 10;
    const zone = tsb >= exch ? "exchange" : tsb >= t.escalation ? "escalation" : tsb >= photo ? "photo" : "below";
    const a = assessAap({ gaWeeks: ga, ageHours: h, tsb, riskFactor: rf });
    check(a.zone === zone, () => `AAP zone ${ga}wk ${h.toFixed(1)}h TSB ${tsb}: ${a.zone} vs ${zone}`);
    if (zone === "below" && h >= 12) {
      const d = Math.round((photo - tsb) * 10) / 10;
      const rep = aapPlan(a, h, null).repeat;
      const want = d < 2 ? (h < 24 ? "4–8 h" : "4–24 h") : d < 3.5 ? "4–24 h" : d < 5.5 ? "1–2 days" : d < 7 ? (h < 72 ? "within 2 days" : "Clinical judgment") : h < 72 ? "within 3 days" : "Clinical judgment";
      check(rep.includes(want), () => `Fig 7 ${d} below at ${h.toFixed(1)} h: "${rep}" vs ${want}`);
    }
    const tcb = Math.round(uni(5, 22) * 10) / 10;
    const needs = tcb >= photo - 3 || tcb >= 15;
    check((aapTcbNeedsTsb(tcb, photo).length > 0) === needs, () => `TcB ${tcb} vs photo ${photo}`);
  }
});

tool("Bilirubin — NICE CG98 (≥ 38 wk table, preterm graphs)", (check) => {
  // Oracle: the printed NICE ≥ 38 wk table rows, linearly interpolated.
  const rows: [number, number, number][] = [[0, 100, 100], [6, 125, 150], [12, 150, 200], [18, 175, 250], [24, 200, 300], [30, 212.5, 350], [36, 225, 400], [42, 237.5, 450], [48, 250, 450], [54, 262.5, 450], [60, 275, 450], [66, 287.5, 450], [72, 300, 450], [78, 312.5, 450], [84, 325, 450], [90, 337.5, 450], [96, 350, 450]];
  const lerp = (h: number, k: 1 | 2) => { if (h >= 96) return rows[16][k]; let i = 0; while (rows[i + 1][0] < h) i++; const [a, b] = [rows[i], rows[i + 1]]; return a[k] + (b[k] - a[k]) * (h - a[0]) / (b[0] - a[0]); };
  for (let i = 0; i < 400; i++) {
    const h = uni(0, 400);
    const t = biliThresholds(39, h);
    check(near(t.photo, lerp(h, 1), 0.01) && near(t.exchange, lerp(h, 2), 0.01), () => `NICE term ${h.toFixed(1)} h: ${t.photo}/${t.exchange} vs ${lerp(h, 1).toFixed(1)}/${lerp(h, 2).toFixed(1)}`);
    const ga = Math.floor(uni(23, 38)), f = Math.min(h, 72) / 72;
    const p = biliThresholds(ga, h);
    check(near(p.photo, 40 + (ga * 10 - 140) * f, 0.01) && near(p.exchange, 80 + (ga * 10 - 80) * f, 0.01), () => `NICE ${ga} wk ${h.toFixed(1)} h`);
    const sbr = uni(20, 500);
    const z = assessBili(ga, h, sbr).zone;
    const zw = sbr > p.exchange ? "exchange" : sbr > p.photo ? "photo" : sbr > p.photo - 50 ? "repeat" : "below";
    check(z === zw, () => `NICE zone ${ga} wk ${h.toFixed(1)} h SBR ${sbr.toFixed(0)}: ${z} vs ${zw}`);
  }
});

// ---------- 11. ORS / renal ----------
tool("ORS plans (WHO A/B/C) + zinc", (check) => {
  const r25 = (n: number) => Math.round(n / 25) * 25;
  for (let i = 0; i < 300; i++) {
    const w = r1(uni(2.5, 40)), age = Math.floor(uni(1, 160));
    const b = orsPlan("some", w, age);
    check(b.plan === "B" && b.volumeText.includes(`${r25(75 * w)} ml`), () => `Plan B ${w} kg: ${b.volumeText}`);
    const c = orsPlan("severe", w, age);
    check(c.plan === "C" && c.volumeText.includes(`${r25(30 * w)} ml`) && c.volumeText.includes(`${r25(70 * w)} ml`) && c.volumeText.includes(age < 12 ? "5 hours" : "2.5 hours"), () => `Plan C ${w} kg ${age} m: ${c.volumeText}`);
    const a = orsPlan("none", w, age);
    check(a.volumeText.includes(age < 24 ? "50–100 ml" : age <= 120 ? "100–200 ml" : "as much as wanted"), () => `Plan A ${age} m`);
    check(zincDose(age).includes(age < 6 ? "10 mg" : "20 mg"), () => `zinc ${age} m`);
  }
});

tool("Pediatric eGFR (bedside Schwartz) + stage", (check) => {
  for (let i = 0; i < 300; i++) {
    const h = Math.round(uni(45, 190)), cr = Math.round(uni(0.1, 6) * 100) / 100;
    const want = r1((0.413 * h) / cr);
    const got = schwartzEgfr(h, cr)!;
    check(near(got, want, 0.051), () => `Schwartz ${h} cm Cr ${cr}: ${got} vs ${want}`);
    const band = got >= 60 ? "normal" : got >= 30 ? "caution" : "alert";
    check(gfrStage(got).band === band, () => `ped GFR band at ${got}`);
  }
});

// ---------- 12. Polypharmacy interactions ----------
tool("Polypharmacy — drug interactions (reference pairs + every stored pair)", (check) => {
  const rank: Record<string, number> = { Minor: 0, Moderate: 1, Major: 2, Contraindicated: 3 };
  // Independent reference list (Stockley / BNF / Lexicomp "major" or "avoid" level).
  const REF: [string, string, "Moderate" | "Major" | "Contraindicated", string][] = [
    ["warfarin", "aspirin", "Major", "bleeding"], ["warfarin", "fluconazole", "Major", "INR rise (CYP2C9)"],
    ["warfarin", "metronidazole", "Major", "INR rise"], ["warfarin", "cotrimoxazole", "Major", "INR rise"],
    ["warfarin", "amiodarone", "Major", "INR rise"], ["warfarin", "ibuprofen", "Major", "bleeding"],
    ["warfarin", "diclofenac", "Major", "bleeding"], ["clarithromycin", "atorvastatin", "Major", "myopathy (CYP3A4)"],
    ["clarithromycin", "colchicine", "Major", "colchicine toxicity"], ["clarithromycin", "digoxin", "Major", "digoxin toxicity"],
    ["clarithromycin", "carbamazepine", "Major", "CBZ toxicity"], ["spironolactone", "enalapril", "Major", "hyperkalaemia"],
    ["spironolactone", "ramipril", "Major", "hyperkalaemia"], ["spironolactone", "potassium-chloride", "Major", "hyperkalaemia"],
    ["enalapril", "losartan", "Major", "dual RAAS blockade"], ["sildenafil", "isosorbide-mononitrate", "Contraindicated", "hypotension"],
    ["linezolid", "sertraline", "Major", "serotonin syndrome"], ["linezolid", "fluoxetine", "Major", "serotonin syndrome"],
    ["linezolid", "escitalopram", "Major", "serotonin syndrome"], ["tramadol", "sertraline", "Major", "serotonin syndrome / seizures"],
    ["tramadol", "fluoxetine", "Major", "serotonin syndrome / seizures"], ["digoxin", "amiodarone", "Major", "digoxin toxicity"],
    ["digoxin", "verapamil", "Major", "digoxin toxicity, AV block"], ["lithium", "ibuprofen", "Major", "lithium toxicity"],
    ["lithium", "diclofenac", "Major", "lithium toxicity"], ["lithium", "enalapril", "Major", "lithium toxicity"],
    ["lithium", "ramipril", "Major", "lithium toxicity"], ["lithium", "losartan", "Major", "lithium toxicity"],
    ["allopurinol", "azathioprine", "Major", "marrow toxicity"], ["tizanidine", "ciprofloxacin", "Contraindicated", "CYP1A2 — hypotension/sedation"],
    ["methotrexate", "cotrimoxazole", "Contraindicated", "marrow toxicity"], ["levofloxacin", "amiodarone", "Major", "QT prolongation"],
    ["azithromycin", "amiodarone", "Major", "QT prolongation"], ["haloperidol", "ondansetron", "Moderate", "QT prolongation"],
    ["haloperidol", "azithromycin", "Moderate", "QT prolongation"], ["haloperidol", "levofloxacin", "Moderate", "QT prolongation"],
    ["verapamil", "metoprolol", "Major", "bradycardia / heart block"], ["verapamil", "atenolol", "Major", "bradycardia / heart block"],
    ["rifampicin", "apixaban", "Major", "loss of anticoagulation"], ["rifampicin", "rivaroxaban", "Major", "loss of anticoagulation"],
    ["rifampicin", "dabigatran", "Major", "loss of anticoagulation"], ["carbamazepine", "apixaban", "Major", "loss of anticoagulation"],
    ["carbamazepine", "rivaroxaban", "Major", "loss of anticoagulation"], ["ciprofloxacin", "theophylline", "Major", "theophylline toxicity"],
    ["clopidogrel", "omeprazole", "Moderate", "reduced clopidogrel activation"], ["glimepiride", "fluconazole", "Moderate", "hypoglycaemia"],
    ["phenytoin", "fluconazole", "Moderate", "phenytoin toxicity"], ["methotrexate", "ibuprofen", "Moderate", "MTX toxicity"],
    ["apixaban", "aspirin", "Moderate", "bleeding"], ["colchicine", "atorvastatin", "Moderate", "myopathy"],
    ["potassium-chloride", "enalapril", "Moderate", "hyperkalaemia"], ["theophylline", "clarithromycin", "Moderate", "theophylline toxicity"],
  ];
  const pt = { ageYears: 60, weightKg: 70, creatinineMgDl: 1.0, sex: "Male" as const, conditions: [] };
  const sev = (ids: string[]) => {
    const f = analyzeRegimen(pt, ids.map((x) => getDrugById(x)!));
    return f.interactions;
  };
  for (const [a, b, want, why] of REF) {
    const found = sev([a, b]).map((x) => x.interaction.severity);
    const best = found.length ? found.reduce((m, x) => (rank[x] > rank[m] ? x : m)) : "none";
    check(best !== "none" && rank[best] >= rank[want], () => `${a} + ${b} (${why}): app ${best}, expected ≥ ${want}`);
  }
  const ids = drugsDB.map((d) => d.id);
  const idSet = new Set(ids);
  const keys = new Set<string>();
  for (const x of interactionsDB) {
    const k = [x.drugAId, x.drugBId].sort().join("|");
    check(idSet.has(x.drugAId) && idSet.has(x.drugBId) && x.drugAId !== x.drugBId && !keys.has(k), () => `bad/duplicate interaction ${k}`);
    keys.add(k);
    const distract = Array.from({ length: 3 }, () => pick(ids)).filter((d) => d !== x.drugAId && d !== x.drugBId);
    for (const order of [[x.drugAId, ...distract, x.drugBId], [x.drugBId, x.drugAId, ...distract]]) {
      const hit = sev([...new Set(order)]).some((f) => f.interaction === x);
      check(hit, () => `stored pair ${x.drugAId} + ${x.drugBId} not detected (order ${order.join(",")})`);
    }
  }
});

// ---------- OB dating: every day over 5 years ----------
tool("OB dating — every LMP 2023–2027 × cycle, EDD/scan/IVF round trips, Naegele", (check) => {
  const utcDays = (y: number, m: number, d: number) => Date.UTC(y, m, d) / 86400000;
  const fromUtc = (n: number) => { const x = new Date(n * 86400000); return [x.getUTCFullYear(), x.getUTCMonth(), x.getUTCDate()]; };
  const same = (a: Date, ymd: number[]) => a.getFullYear() === ymd[0] && a.getMonth() === ymd[1] && a.getDate() === ymd[2];
  for (let n = utcDays(2023, 0, 1); n <= utcDays(2027, 11, 31); n++) {
    const [y, m, d] = fromUtc(n);
    const lmp = new Date(y, m, d);
    const cycle = 21 + Math.floor(rnd() * 25);
    const daysOn = Math.floor(rnd() * 300);
    const [ty, tm, td] = fromUtc(n + daysOn);
    const today = new Date(ty, tm, td, 15, 30);
    const r = calculateGestation("lmp", lmp, today, cycle);
    const eddWant = fromUtc(n + 280 + cycle - 28);
    const ga = daysOn - (cycle - 28);
    if (ga < 0 || ga > 315) { check(r === null, () => `LMP ${y}-${m + 1}-${d} c${cycle}: GA ${ga} should be refused`); continue; }
    check(!!r && same(r.edd, eddWant) && r.gaWeeks * 7 + r.gaDays === ga,
      () => `LMP ${y}-${m + 1}-${d} c${cycle} +${daysOn}d: EDD ${r?.edd.toDateString()} GA ${r?.gaLabel}, want ${eddWant.join("-")} / ${ga}d`);
    check(!!r && r.trimester === (ga < 98 ? 1 : ga < 196 ? 2 : 3), () => `trimester ${y}-${m + 1}-${d} ga ${ga}`);
    // EDD-anchored and scan-anchored dating must give the same pregnancy back.
    if (r) {
      const e = calculateGestation("edd", r.edd, today);
      check(!!e && e.gaWeeks * 7 + e.gaDays === ga && same(e.edd, eddWant), () => `EDD round trip ${y}-${m + 1}-${d}`);
      if (ga >= 35 && ga <= 294) {
        const s = calculateGestation("scan", today, today, 28, ga);
        check(!!s && same(s.edd, eddWant), () => `scan round trip ${y}-${m + 1}-${d} ga ${ga}`);
      }
      const ivf = calculateGestation("ivf5", new Date(...fromUtc(n + cycle - 14 + 5) as [number, number, number]), today);
      check(!!ivf && same(ivf.edd, eddWant), () => `IVF day-5 round trip ${y}-${m + 1}-${d}`);
    }
    // Naegele: +7 d, +9 months (−3 months +1 year), clamp to month end, + cycle shift.
    const p7 = fromUtc(n + 7);
    let ny = p7[0], nm = p7[1] + 9;
    if (nm > 11) { nm -= 12; ny += 1; }
    const last = new Date(Date.UTC(ny, nm + 1, 0)).getUTCDate();
    const nWant = fromUtc(utcDays(ny, nm, Math.min(p7[2], last)) + cycle - 28);
    const ng = naegeleEdd(lmp, cycle);
    check(same(ng, nWant), () => `Naegele ${y}-${m + 1}-${d} c${cycle}: ${ng.toDateString()} want ${nWant.join("-")}`);
    const gap = utcDays(ng.getFullYear(), ng.getMonth(), ng.getDate()) - (n + 280 + cycle - 28);
    check(Math.abs(gap) <= 3, () => `Naegele vs 280 days gap ${gap} for ${y}-${m + 1}-${d}`);
  }
});

// ---------- ANC scan ----------
tool("ANC scan — INTERGROWTH biometry tables, EFW/UA round trips, Hadlock, liquor, Delphi", (check) => {
  const Z = [-1.880794, -1.644854, -1.281552, 0, 1.281552, 1.644854, 1.880794];
  for (const p of ["hc", "bpd", "ac", "fl"] as const) {
    for (const row of IG_BIOMETRY_TABLES[p]) {
      const ga = row[0] / 7;
      const { mu, sigma } = igBiometryMuSigma(p, ga);
      Z.forEach((z, i) => check(Math.abs(mu + z * sigma - row[i + 1]) <= 0.15,
        () => `${p} ${ga} wk centile col ${i}: ${(mu + z * sigma).toFixed(2)} vs IG table ${row[i + 1]}`));
      // A table value must read back at its own centile.
      const c50 = biometryCentile(p, ga, row[4])!.centile, c3 = biometryCentile(p, ga, row[1])!.centile, c97 = biometryCentile(p, ga, row[7])!.centile;
      check(Math.abs(c50 - 50) < 2 && Math.abs(c3 - 3) < 0.6 && Math.abs(c97 - 97) < 0.6, () => `${p} ${ga} wk read-back ${c3}/${c50}/${c97}`);
      check(Math.abs(biometryCentile(p, ga, mmFromGaEquivalent(p, ga)!)!.centile - 50) < 0.01, () => `${p} size-age ${ga}`);
    }
  }
  const phi = (z: number) => { // independent normal CDF (Zelen & Severo 26.2.17)
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const q = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return 100 * (z > 0 ? 1 - q : q);
  };
  for (let i = 0; i < 400; i++) {
    const ga = uni(18, 41.8), z = uni(-3, 3);
    const g = efwFromZ(Math.min(ga, 41), z);
    const c = efwCentile(ga, g)!;
    check(Math.abs(c.z - z) < 0.011 && Math.abs(c.centile - phi(z)) < 0.15, () => `EFW round trip ga ${ga.toFixed(2)} z ${z.toFixed(2)} → ${c.z}`);
    const gu = uni(24, 40.8), zu = uni(-2.5, 2.5);
    const v = uaValueAtZ("pi", Math.min(gu, 40), zu);
    const u = uaCentile("pi", gu, v)!;
    check(Math.abs(u.z - zu) < 0.011, () => `UA PI round trip ${gu.toFixed(2)} ${zu.toFixed(2)} → ${u.z}`);
    for (const idx of ["ri", "sd"] as const) {
      const vv = uaValueAtZ(idx, Math.min(gu, 40), zu);
      check(Math.abs(uaCentile(idx, gu, vv)!.z - zu) < 0.011, () => `UA ${idx} round trip ${gu.toFixed(2)} ${zu.toFixed(2)}`);
    }
  }
  for (let i = 0; i < 400; i++) {
    const bpd = uni(40, 100), hc = uni(150, 360), ac = uni(130, 400), fl = uni(25, 80);
    const cm = { b: bpd / 10, h: hc / 10, a: ac / 10, f: fl / 10 };
    const want = Math.round(10 ** (1.3596 - 0.00386 * cm.a * cm.f + 0.0064 * cm.h + 0.00061 * cm.b * cm.a + 0.0424 * cm.a + 0.174 * cm.f));
    const got = hadlockEfw({ bpd, hc, ac, fl })!;
    check(got.grams === want, () => `Hadlock ${bpd},${hc},${ac},${fl}: ${got.grams} vs ${want}`);
    const want2 = Math.round(10 ** (1.304 + 0.05281 * cm.a + 0.1938 * cm.f - 0.004 * cm.a * cm.f));
    check(hadlockEfw({ ac, fl })!.grams === want2, () => `Hadlock AC/FL ${ac},${fl}`);
    const ga = uni(18, 40), psv = uni(10, 90);
    check(near(mcaPsvMoM(ga, psv), psv / Math.exp(2.31 + 0.046 * ga), 0.006), () => `MCA MoM ${ga} ${psv}`);
    const sdp = Math.round(uni(0, 20) * 10) / 10, afi = Math.round(uni(0, 40) * 10) / 10;
    const ks = sdp < 2 ? "oligo" : sdp >= 16 ? "polySevere" : sdp >= 12 ? "polyModerate" : sdp >= 8 ? "polyMild" : "normal";
    const ka = afi <= 5 ? "oligo" : afi >= 35 ? "polySevere" : afi >= 30 ? "polyModerate" : afi >= 24 ? "polyMild" : "normal";
    check(assessLiquor(sdp)?.kind === ks && assessLiquor(undefined, afi)?.kind === ka && assessLiquor(sdp, afi)?.kind === ks, () => `liquor sdp ${sdp} afi ${afi}`);
  }
  // Delphi consensus oracle (Gordijn 2016) written independently.
  for (let i = 0; i < 1500; i++) {
    const ga = uni(20, 41);
    const ac = rnd() < 0.15 ? null : uni(0.5, 99.5), efw = rnd() < 0.15 ? null : uni(0.5, 99.5);
    const prev = rnd() < 0.5 ? null : uni(1, 99);
    const ua = rnd() < 0.3 ? null : uni(1, 99.9);
    const flow = pick(["normal", "normal", "normal", "aedf", "redf"] as const);
    const cpr = rnd() < 0.4 ? null : uni(0.6, 2.5);
    const cprLow5 = rnd() < 0.2, utaHigh = rnd() < 0.2;
    const inp = { ga, acCentile: ac, efwCentile: efw, efwGrams: rnd() < 0.5 ? null : uni(500, 4800), prevCentile: prev, uaPiCentile: ua,
      uaFlow: flow, cpr, cprLow5, utaHigh, dv: "normal" as const, liquor: null, mcaMoM: null, diabetes: false };
    const low = ac == null ? efw : efw == null ? ac : Math.min(ac, efw);
    const high = Math.max(ac ?? -1, efw ?? -1);
    const uaHigh = ua != null && ua > 95;
    let want: string;
    if (low == null) want = "unknown";
    else if (ga < 32 && (low < 3 || flow !== "normal" || (low < 10 && (utaHigh || uaHigh)))) want = "fgrEarly";
    else if (ga >= 32 && (low < 3 || flow !== "normal" ||
      [low < 10, prev != null && prev - low > 50, cprLow5 || (cpr != null && cpr < 1) || uaHigh].filter(Boolean).length >= 2)) want = "fgrLate";
    else if (low < 10) want = "sga";
    else if (high > 90) want = "lga";
    else want = "aga";
    const got = classifyGrowth(inp).growth;
    check(got === want, () => `Delphi ga ${ga.toFixed(1)} ac ${ac?.toFixed(1)} efw ${efw?.toFixed(1)} prev ${prev?.toFixed(0)} ua ${ua?.toFixed(1)} ${flow} cpr ${cpr?.toFixed(2)} low5 ${cprLow5} uta ${utaHigh}: ${got} want ${want}`);
    const plan = scanPlan(inp);
    const wantTone = flow === "redf" || flow === "aedf" ? "urgent" : null;
    if (wantTone) check(plan.tone === wantTone && plan.delivery.includes(flow === "redf" ? "30+0" : "32+0"), () => `plan ${flow} tone ${plan.tone}`);
    if (want === "sga" && flow === "normal" && !uaHigh) check(plan.tone === "watch" && plan.delivery.includes("38+0"), () => `SGA plan ${plan.tone}`);
    if ((want === "fgrEarly" || want === "fgrLate") && flow === "normal") check(plan.tone === "treat" && plan.delivery.includes("37+0"), () => `FGR plan ${plan.tone} ${plan.delivery}`);
  }
  for (let w = 4; w <= 43; w += 0.5) {
    const s = scheduleStatus(w);
    for (const c of s.current) check(w >= c.from && w < c.to, () => `schedule ${w} in ${c.id}`);
    check(s.next == null || s.next.from > w, () => `schedule next ${w}`);
  }
});

// ---------- Modified Bishop: every combination ----------
tool("Modified Bishop — all 576 combinations", (check) => {
  const counts = BISHOP_ITEMS.map((it) => it.options.length);
  const pts: Record<string, number[]> = {
    dilation: [0, 1, 2, 3], length: [0, 1, 2, 3], station: [0, 1, 2, 3], consistency: [0, 1, 2], position: [0, 1, 2],
  };
  const total = counts.reduce((a, b) => a * b, 1);
  for (let n = 0; n < total; n++) {
    let k = n;
    const ans: Record<string, number> = {};
    let want = 0;
    BISHOP_ITEMS.forEach((it, i) => { const idx = k % counts[i]; k = Math.floor(k / counts[i]); ans[it.id] = idx; want += pts[it.id][idx]; });
    const got = bishopTotal(ans);
    check(got === want, () => `Bishop ${JSON.stringify(ans)}: ${got} want ${want}`);
    check(bishopPlan(want).band === (want <= 6 ? "unfavourable" : "favourable"), () => `Bishop band ${want}`);
  }
});

// ---------- Calculator ----------
tool("Calculator — 500 random expressions vs reference evaluation", (check) => {
  const num = () => String(rnd() < 0.3 ? Math.round(uni(0, 99) * 100) / 100 : Math.floor(uni(0, 999)));
  for (let i = 0; i < 500; i++) {
    const parts: string[] = [];
    const n = 2 + Math.floor(rnd() * 5);
    let js = "";
    let disp = "";
    for (let j = 0; j < n; j++) {
      let a = num();
      let aj = a;
      if (rnd() < 0.15) { aj = `(${a}/100)`; a = `${a}%`; }
      if (j && rnd() < 0.2) { const b = num(); a = `(${a}+${b})`; aj = `(${aj}+${b})`; }
      disp += a; js += aj;
      if (j < n - 1) { const op = pick(["+", "−", "×", "÷"]); disp += op; js += ({ "+": "+", "−": "-", "×": "*", "÷": "/" } as Record<string, string>)[op]; }
      parts.push(a);
    }
    const ref = Function(`"use strict"; return (${js});`)() as number;
    const got = evaluate(disp);
    if (!Number.isFinite(ref)) check(got === null, () => `calc ${disp} should be invalid`);
    else check(got != null && Math.abs(got - ref) <= Math.max(1e-9, Math.abs(ref) * 1e-11), () => `calc ${disp}: ${got} vs ${ref}`);
  }
});

// ---------- DD/MM/YYYY date entry ----------
tool("Date entry (DD/MM/YYYY) — every day 2000–2040 + invalid days", (check) => {
  for (let n = Date.UTC(2000, 0, 1) / 86400000; n <= Date.UTC(2040, 11, 31) / 86400000; n++) {
    const x = new Date(n * 86400000);
    const d = x.getUTCDate(), m = x.getUTCMonth() + 1, y = x.getUTCFullYear();
    const want = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    check(isoFromParts(String(d), String(m), String(y)) === want && isoFromParts(String(d).padStart(2, "0"), String(m).padStart(2, "0"), String(y)) === want,
      () => `date ${d}/${m}/${y}`);
  }
  for (let y = 2000; y <= 2040; y++) for (let m = 1; m <= 12; m++) {
    const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
    check(isoFromParts(String(days + 1), String(m), String(y)) === "", () => `invalid ${days + 1}/${m}/${y}`);
  }
});

// ---------- Timer / stopwatch ----------
tool("Timer & stopwatch — 300 random start/pause/+1 min sequences", (check) => {
  for (let i = 0; i < 300; i++) {
    const total = Math.floor(uni(1, 120)) * 60000;
    let c = newCountdown(total);
    let t = 1e9, left = total, running = false;
    let s = newStopwatch(), swT = 0, swRun = false;
    for (let step = 0; step < 12; step++) {
      const action = pick(["start", "pause", "wait", "add", "wait"]);
      if (action === "start") { c = cdStart(c, t); if (left > 0 && c.status !== "done") running = true; s = swStart(s, t); swRun = true; }
      if (action === "pause") { c = cdPause(c, t); running = false; s = swPause(s, t); swRun = false; }
      if (action === "add") { const was = c.status; c = cdAdd(c, 60000, t); if (was === "done") { left = 60000; running = true; } else left = Math.min(left + 60000, 1439 * 60000); }
      if (action === "wait") {
        const dt = Math.floor(uni(0, 30 * 60000));
        if (running) left = Math.max(0, left - dt);
        if (swRun) swT += dt;
        t += dt;
        c = cdTick(c, t);
        if (running && left === 0) running = false;
      }
      check(cdRemaining(c, t) === left, () => `timer seq ${i} step ${step} (${action}): ${cdRemaining(c, t)} vs ${left}`);
      check(swElapsed(s, t) === swT, () => `stopwatch seq ${i} step ${step}`);
    }
    s = swLap(swStart(s, t), t);
    check(s.laps[s.laps.length - 1] === swT, () => `lap ${i}`);
  }
});

// ---------- Sub-timers within a countdown ----------
tool("Sub-timers — 500 random runs (pauses, overlapping taps, formats)", (check) => {
  for (let i = 0; i < 500; i++) {
    let rc = newRunClock();
    let segs: { start: number; end: number | null }[] = [];
    let t = 5e8, run = 0, running = false;
    const want: { start: number; end: number | null }[] = [];
    for (let step = 0; step < 16; step++) {
      const a = pick(["go", "stop", "wait", "wait", "segS", "segE", "segS"]);
      if (a === "go") { rc = runStart(rc, t); running = true; }
      if (a === "stop") { rc = runStop(rc, t); running = false; }
      if (a === "wait") { const dt = Math.floor(uni(0, 90000)); t += dt; if (running) run += dt; }
      if (a === "segS") { segs = segStart(segs, runElapsed(rc, t)); if (!want.length || want[want.length - 1].end != null) want.push({ start: run, end: null }); }
      if (a === "segE") { segs = segStop(segs, runElapsed(rc, t)); const o = want[want.length - 1]; if (o && o.end == null) o.end = run; }
      check(runElapsed(rc, t) === run, () => `run clock seq ${i} step ${step}`);
      check(JSON.stringify(segs) === JSON.stringify(want), () => `segments seq ${i} step ${step}: ${JSON.stringify(segs)} vs ${JSON.stringify(want)}`);
    }
    const open = openSegment(segs);
    check((open == null) === (want.every((x) => x.end != null)), () => `open segment ${i}`);
    for (const x of segs) check(segDuration(x, run) === (x.end ?? run) - x.start && segDuration(x, run) >= 0, () => `duration ${i}`);
  }
  for (let k = 0; k < 300; k++) {
    const ms = Math.floor(uni(0, 3 * 3600000));
    const sec = Math.round(ms / 1000), h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s2 = sec % 60;
    const wantD = h ? `${h} h ${String(m).padStart(2, "0")} min ${String(s2).padStart(2, "0")} s` : m ? `${m} min ${String(s2).padStart(2, "0")} s` : `${s2} s`;
    check(formatDuration(ms) === wantD, () => `formatDuration ${ms}: ${formatDuration(ms)} want ${wantD}`);
    const fs = Math.floor(ms / 1000), fh = Math.floor(fs / 3600), fm = Math.floor((fs % 3600) / 60);
    const wantP = fh ? `${fh}:${String(fm).padStart(2, "0")}:${String(fs % 60).padStart(2, "0")}` : `${fm}:${String(fs % 60).padStart(2, "0")}`;
    check(formatPosition(ms) === wantP, () => `formatPosition ${ms}`);
  }
});

// ---------- Saved entries / Last 5 history ----------
tool("Remembered entries + Last 5 history — 800 random values and calculations", (check) => {
  const mem = new Map<string, string>();
  (globalThis as { localStorage?: unknown }).localStorage = {
    getItem: (k: string) => (mem.has(k) ? mem.get(k)! : null),
    setItem: (k: string, v: string) => { mem.set(k, String(v)); },
    removeItem: (k: string) => { mem.delete(k); },
  };
  const samples: [unknown, unknown, boolean][] = [];
  for (let i = 0; i < 300; i++) {
    const init = pick(["", 28, null, "hours", false, [] as unknown[]]);
    const raw = pick([undefined, "", 12, 2.5, Number.NaN, "x", null, true, [1], {}]);
    let want: boolean;
    if (raw === undefined) want = false;
    else if (Array.isArray(init)) want = Array.isArray(raw);
    else if (init === null || init === "") want = raw === null || ["string", "number", "boolean"].includes(typeof raw);
    else if (typeof init === "number") want = (typeof raw === "number" && Number.isFinite(raw)) || raw === "";
    else want = typeof raw === typeof init;
    samples.push([raw, init, want]);
  }
  for (const [raw, init, want] of samples) check(fits(raw, init) === want, () => `fits(${String(raw)}, ${JSON.stringify(init)})`);
  // History: newest first, max 5, identical result moves to top, per tool.
  const oracle: Record<string, { title: string; detail: string }[]> = {};
  for (let i = 0; i < 500; i++) {
    const toolId = pick(["bmi", "ob", "bili", "crCl"]);
    const title = `R${Math.floor(rnd() * 8)}`, detail = `d${Math.floor(rnd() * 2)}`;
    addHistory(toolId, title, detail, 1000 + i);
    const list = (oracle[toolId] ?? []).filter((e) => !(e.title === title && e.detail === detail));
    oracle[toolId] = [{ title, detail }, ...list].slice(0, 5);
    const got = getHistory(toolId).map((e) => ({ title: e.title, detail: e.detail }));
    check(JSON.stringify(got) === JSON.stringify(oracle[toolId]), () => `history ${toolId} step ${i}`);
    if (i % 97 === 96) { clearHistory(toolId); oracle[toolId] = []; check(getHistory(toolId).length === 0, () => "history clear"); }
  }
});

// ---------- report ----------
let total = 0, bad = 0;
console.log(`\nCross-check (TZ=${Intl.DateTimeFormat().resolvedOptions().timeZone})`);
for (const r of results) {
  total += r.cases; bad += r.fails.length;
  console.log(`${r.fails.length ? "✗" : "✓"} ${r.tool}: ${r.cases} cases${r.fails.length ? `, ${r.fails.length} FAILED` : ""}`);
  for (const f of [...new Set(r.fails)].slice(0, 6)) console.log("    -", f);
}
console.log(`\nTOTAL ${total} cases, ${bad} failures`);
process.exit(bad ? 1 : 0);
