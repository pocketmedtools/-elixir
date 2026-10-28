import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "cardiovascular-adhf-cardiogenic-shock": {
    checked: "2026-10",
    updated: [
      "ESC 2026 HF guideline: 'decompensated HF' replaces 'acute HF'; initial, stabilisation and pre/post-discharge phases.",
      "ESC 2026: in-hospital SGLT2 inhibitor start after stabilisation; urinary sodium-guided diuresis may be considered.",
      "ESC 2026: HFmrEF abolished - LVEF under 50% is HFrEF for the discharge regimen.",
      "ESC 2023 focused update: rapid GDMT up-titration with visits over 6 weeks (STRONG-HF) is Class I.",
      "ADVOR 2022 and CLOROTIC 2023: acetazolamide or thiazide add-on for diuretic resistance.",
      "SCAI 2022 shock staging update; ECLS-SHOCK 2023 and DanGer Shock 2024; AHA/ACC 2025 ACS: Impella IIa in selected STEMI shock.",
    ],
    master: {
      heading: "Master revision table - Decompensated heart failure and cardiogenic shock",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Decompensated HF** (ESC 2026, replaces acute HF): new or worsening HF needing urgent IV therapy; ADHF 50-70%; **cardiogenic shock** = SBP under 90 for 30 min + hypoperfusion, CI under 2.2, PCWP over 15."],
        ["Burden", "In-hospital mortality 4-10%; **NHFR India**: mean age about 60, about 1 in 4 dead at 1 year, IHD about 70%, RHD worst prognosis; CS complicates 5-10% of MI, mortality 30-50%."],
        ["Precipitants", "**CHAMPIT** - ACS, hypertensive emergency, arrhythmia, mechanical, PE, infection, tamponade; non-adherence, salt, NSAIDs, pioglitazone, verapamil/diltiazem, anaemia; India: RHD, beriberi, peripartum, scorpion."],
        ["Pathophysiology", "Accumulation (diuretic) vs redistribution (vasodilator); venous congestion drives cardiorenal syndrome; diuretic resistance - threshold, braking, distal hypertrophy; shock spiral of low output and ischaemia."],
        ["Classification", "**Stevenson** warm/cold x wet/dry; Forrester CI 2.2 / PCWP 18; ESC four presentations; **SCAI A-E**; Killip in MI; ESC 2026 HFrEF under 50%, HFpEF 50% or more."],
        ["Clinical", "Orthopnoea, PND, weight up 2 kg in 3 days; raised JVP + abdominojugular test, S3, crackles; cold skin, **proportional pulse pressure under 25%**, oliguria, confusion; look for new murmur."],
        ["Investigations", "ECG 10 min; **NT-proBNP under 300 rules out** (rule in 450/900/1800 by age); CXR, lung US B-lines, echo now if unstable; lactate over 2; 2-h urine Na, 6-h urine output."],
        ["First hour", "Sit up, O2 only if SpO2 under 90%, CPAP/BiPAP if RR over 25; IV furosemide 20-40 mg or 1-2.5x oral dose; nitrate if SBP over 110; **no routine morphine**; continue GDMT."],
        ["Diuretic ladder", "Check **urine Na 50-70 mmol/L at 2 h, urine 100-150 mL/h at 6 h**; double dose (max 400-600 mg/day); add **acetazolamide 500 mg IV x3 days** (ADVOR) or HCTZ/metolazone (CLOROTIC); UF if refractory."],
        ["Shock", "Noradrenaline 0.2-1 mcg/kg/min to MAP 65 + dobutamine 2-20; levosimendan/milrinone if on beta-blocker; **culprit-only PCI**; no routine IABP or ECMO; Impella in selected STEMI shock."],
        ["Discharge", "Euvolaemic, oral diuretic 24 h, stable creatinine; start **SGLT2i (EMPULSE)**, ARNI, beta-blocker, MRA; iron studies; **STRONG-HF**: full doses in 2 weeks, visits 1, 2, 3, 6 weeks."],
        ["Special groups", "RV infarct: fluids, no nitrates; AS: cautious vasodilators, urgent TAVI/BAV; MS with AF: rate control, BMV; pregnancy: no ACEi/ARNI/MRA/SGLT2i; elderly: smaller steps."],
        ["Exam traps", "LMNOP outdated; don't stop beta-blocker routinely; don't stop diuretics for small creatinine rise; noradrenaline over dopamine (SOAP II); IABP-SHOCK II negative."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected decompensated HF: the first hour",
        caption: "Diagnose, profile, find the precipitant - in parallel.",
        steps: [
          { label: "Breathless patient with suspected HF", detail: "Monitor, SpO2, IV access, ECG within 10 minutes" },
          { label: "Life threat? Shock or respiratory failure", detail: "SBP under 90 with hypoperfusion; RR over 25, SpO2 under 90%", tone: "decision" },
          { label: "Support: NIV, oxygen if SpO2 under 90%, vasopressor", detail: "CPAP 5-10 cmH2O; noradrenaline to MAP 65", tone: "warn" },
          { label: "Confirm HF", detail: "NT-proBNP under 300 rules out; chest X-ray, lung ultrasound, echo" },
          { label: "Find CHAMPIT cause", detail: "ACS, hypertension, arrhythmia, mechanical, PE, infection, tamponade", tone: "decision" },
          { label: "Profile warm/cold, wet/dry and treat", detail: "Diuretic, nitrate, inotrope by box", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Diuretic ladder in decompensated HF",
        caption: "Reassess at 2 and 6 hours, then daily.",
        steps: [
          { label: "IV loop diuretic", detail: "Furosemide 20-40 mg naive, or 1-2.5x daily oral dose IV" },
          { label: "Check natriuresis", detail: "2-h urine Na 50-70 mmol/L or more; 6-h urine 100-150 mL/h or more", tone: "decision" },
          { label: "Double the loop dose", detail: "Up to 400-600 mg furosemide a day" },
          { label: "Add acetazolamide or thiazide", detail: "Acetazolamide 500 mg IV x3 days; HCTZ 25-100 mg or metolazone 2.5-5 mg" },
          { label: "Low output? Add inotrope", detail: "Dobutamine or levosimendan if cold", tone: "warn" },
          { label: "Ultrafiltration or dialysis", detail: "Refractory congestion, K over 6.5, pH under 7.2", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Stevenson clinical profiles",
        columns: ["Profile", "Signs", "First treatment"],
        rows: [
          ["Warm-wet", "Congested, well perfused", "IV diuretic, nitrate if SBP over 110"],
          ["Cold-wet", "Congested, cold, oliguric", "Noradrenaline + dobutamine, then diuretic"],
          ["Cold-dry", "Flat JVP, cold", "Cautious fluid, then inotrope"],
          ["Warm-dry", "Compensated", "Optimise oral GDMT"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Decompensated HF** is new or worsening HF needing urgent IV therapy; ESC 2026 dropped the term acute HF.",
            "Most cases are **worsening chronic HF**; de novo cases often follow ACS or myocarditis.",
            "**Cardiogenic shock**: SBP under 90 mmHg with hypoperfusion; cardiac index under 2.2, PCWP over 15.",
            "In-hospital mortality is **4-10%**; shock mortality is 30-50%.",
            "India's NHFR: mean age about 60, and about **1 in 4 dies within a year**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**CHAMPIT**: coronary syndrome, hypertension, arrhythmia, mechanical, PE, infection, tamponade.",
            "Commonest avoidable trigger is **non-adherence** to drugs or salt restriction.",
            "Culprit drugs: **NSAIDs**, pioglitazone, verapamil, diltiazem and steroids.",
            "Indian causes: rheumatic valve disease, anaemia, beriberi, peripartum cardiomyopathy, scorpion sting.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Fluid **accumulation** needs diuretics; fluid **redistribution** (flash oedema) needs vasodilators.",
            "**Venous congestion**, not low output, mainly drives worsening renal function.",
            "Diuretic resistance comes from threshold effect, short half-life and **distal tubular hypertrophy**.",
            "Shock spiral: low output lowers coronary perfusion, worsening ischaemia and pump failure.",
          ],
        },
        {
          title: "Clinical features and classification",
          points: [
            "**Orthopnoea and PND** are the most specific symptoms.",
            "**Raised JVP** is the best bedside sign; crackles may be absent in chronic HF.",
            "Cold signs: cool skin, oliguria, confusion, **proportional pulse pressure under 25%**.",
            "Profile every patient as **warm or cold, wet or dry**.",
            "SCAI stages: A at risk, B beginning, C classic, D deteriorating, E extremis.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**NT-proBNP under 300 pg/mL** or BNP under 100 rules out acute HF.",
            "Chest X-ray is normal in up to **1 in 5** patients.",
            "Lung ultrasound **B-lines** support pulmonary oedema where BNP is unavailable.",
            "Echo **immediately** if unstable; within 48 hours if de novo.",
            "**Lactate over 2 mmol/L** means hypoperfusion.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Oxygen only if **SpO2 under 90%**; CPAP or BiPAP if RR over 25.",
            "**IV furosemide** 20-40 mg if naive, or 1-2.5 times the oral dose.",
            "Check **2-hour urine sodium** 50-70 mmol/L and 6-hour urine 100-150 mL/h; else double.",
            "Add **acetazolamide 500 mg IV** for 3 days or a thiazide if resistant.",
            "IV nitrate if SBP over 110; **no routine morphine**.",
            "Continue GDMT unless shock, severe hyperkalaemia or symptomatic bradycardia.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Shock: **noradrenaline** to MAP 65 plus dobutamine; avoid dopamine.",
            "Use **levosimendan or milrinone** if the patient is on a beta-blocker.",
            "AMI shock: **culprit-only PCI**, whatever the delay.",
            "No routine **IABP** or VA-ECMO; Impella helps selected STEMI shock.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**RV infarct**: cautious fluids; no nitrates or diuretics.",
            "Severe **AS**: cautious vasodilators and urgent valve intervention.",
            "Pregnancy: avoid ACE inhibitors, ARNI, MRA and SGLT2 inhibitors.",
            "Elderly: smaller diuretic steps; watch delirium and hyponatraemia.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Discharge only when **euvolaemic** on oral diuretic for 24 hours.",
            "Start **SGLT2 inhibitor** before discharge once stable (EMPULSE).",
            "**STRONG-HF**: full GDMT doses within 2 weeks; visits at 1, 2, 3 and 6 weeks.",
            "Teach daily weights; act if weight rises **2 kg in 3 days**.",
            "Two admissions in a year means **advanced HF** review or palliative care.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ESC 2026**: decompensated HF term, three-phase care, HFmrEF abolished.",
            "ESC 2026: in-hospital SGLT2 inhibitor and **urine sodium-guided** diuresis.",
            "ESC 2023: rapid up-titration after admission is **Class I**.",
            "DanGer Shock 2024 favours Impella; **ECLS-SHOCK** 2023 showed no routine ECMO benefit.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in decompensated HF and shock",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Furosemide", "20-40 mg IV naive; 1-2.5x oral dose IV", "Until euvolaemic; max 400-600 mg/day", "Low K, Mg, Na; AKI; ototoxicity"],
            ["Acetazolamide", "500 mg IV once daily", "3 days", "Acidosis, low K"],
            ["Metolazone / HCTZ", "2.5-5 mg / 25-100 mg oral", "1-3 days", "Severe low K and Na"],
            ["Nitroglycerin", "10-20 up to 200 mcg/min IV", "Hours to 48 h", "Hypotension; avoid SBP under 90, RV infarct, PDE-5i"],
            ["Dobutamine", "2-20 mcg/kg/min IV", "Shortest possible", "Arrhythmia; blunted by beta-blocker"],
            ["Levosimendan", "0.05-0.2 mcg/kg/min IV", "24 h", "Hypotension, low K"],
            ["Noradrenaline", "0.2-1.0 mcg/kg/min IV", "Titrate to MAP 65", "Ischaemia, arrhythmia"],
            ["Empagliflozin / dapagliflozin", "10 mg oral daily", "Lifelong from stabilisation", "Genital infection, ketoacidosis"],
          ],
        },
        {
          heading: "SCAI shock stages",
          columns: ["Stage", "Features", "Action"],
          rows: [
            ["A - At risk", "Large MI or ADHF, normal perfusion", "Monitor, treat cause"],
            ["B - Beginning", "Hypotension or tachycardia, lactate under 2", "Echo, early transfer"],
            ["C - Classic", "Hypoperfusion, lactate 2 or more", "Vasopressor + inotrope, PCI, consider MCS"],
            ["D - Deteriorating", "Worse despite treatment", "Escalate drugs or MCS"],
            ["E - Extremis", "Arrest, CPR or ECMO", "ECMO at capable centre; goals of care"],
          ],
        },
        {
          heading: "Differential of acute breathlessness",
          columns: ["Condition", "Clue", "Test"],
          rows: [
            ["Decompensated HF", "Raised JVP, S3, oedema", "NT-proBNP, echo"],
            ["COPD exacerbation", "Hyperinflation, normal JVP", "NT-proBNP under 300"],
            ["Pneumonia", "Fever, focal signs", "Chest X-ray, procalcitonin"],
            ["Pulmonary embolism", "Sudden, clear lungs", "CT pulmonary angiography"],
            ["Tamponade", "Pulsus paradoxus, clear lungs", "Echo"],
          ],
        },
      ],
      remember: [
        "**Warm or cold, wet or dry** - the profile chooses the first drug.",
        "**CHAMPIT** - the precipitants to treat in the first hour.",
        "Diuretic check: **2 h urine Na 50-70, 6 h urine 100-150 mL/h**.",
        "LMNOP is outdated - **no routine morphine**, oxygen only if hypoxic.",
        "Shock trials: IABP no, ECMO not routine, Impella yes in selected STEMI, **culprit-only PCI**.",
        "**Noradrenaline** over dopamine (SOAP II).",
        "**Don't discharge wet**; review in 1-2 weeks.",
      ],
    },
  },
};

export default revision;
