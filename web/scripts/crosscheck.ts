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
