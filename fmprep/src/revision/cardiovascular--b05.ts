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
  "cardiovascular-chronic-hf-optimisation": {
    checked: "2026-10",
    updated: [
      "ESC 2026 HF: HFrEF under 50%, HFpEF 50% or more; HFmrEF abolished; stages A-D; 'foundational medical therapy'.",
      "ESC 2026: MRA Class I at any LVEF; semaglutide or tirzepatide IIa in obese HFpEF; SBP under 130 in stage B.",
      "ESC 2026: digoxin/digitoxin upgraded to IIa after DIGIT-HF.",
      "ESC 2023 focused update: SGLT2i Class I across LVEF; IV iron IIa to reduce HF admissions.",
      "FINEARTS-HF 2024 (finerenone in HFpEF) and SUMMIT 2024 (tirzepatide).",
      "2024 ACC Expert Consensus Decision Pathway: rapid sequencing of four drugs.",
    ],
    master: {
      heading: "Master revision table - Chronic HF optimisation",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition and goal", "All eligible patients on **four foundational drugs at target or maximum tolerated dose** plus indicated devices within 3-6 months; four drugs roughly halve CV death or HF admission."],
        ["Classification", "**ESC 2026**: HFrEF under 50%, HFpEF 50% or more, HFimpEF (rise 10 points to over 40%); stages A-D; NYHA I-IV; advanced HF - I NEED HELP."],
        ["Four pillars", "**Sacubitril-valsartan** 24/26-49/51 to 97/103 mg BD; **bisoprolol** 1.25 to 10 mg; **spironolactone** 12.5-25 to 50 mg; **dapagliflozin/empagliflozin 10 mg**."],
        ["Titration", "Start all four within 2-4 weeks at low dose; order by profile; one step every 1-2 weeks; target by 3-6 months; STRONG-HF after admission."],
        ["Monitoring", "K and creatinine 1-2 weeks after each change; creatinine up 50% acceptable, doubling stop; **K over 5.5 halve MRA, 6.0 stop**; SGLT2i eGFR dip expected."],
        ["Additional drugs", "Ivabradine (sinus, HR 70 or more, LVEF 35% or less); digoxin 0.5-0.9 ng/mL (IIa ESC 2026); vericiguat after worsening; hydralazine-ISDN; **IV iron** if ferritin under 100 or 100-299 with TSAT under 20%."],
        ["HFpEF", "**SGLT2i + MRA** (spironolactone or finerenone - FINEARTS-HF); semaglutide/tirzepatide if obese; BP under 130, AF, diuretic; LVEF 41-49% follows HFrEF."],
        ["Devices", "ICD: LVEF 35% or less after 3 months OMT (ischaemic recommended, non-ischaemic consider), not within 40 days of MI; **CRT: LBBB QRS 150 ms or more** (130-149 consider), never under 130."],
        ["Non-drug", "HF clinic Class I; daily weights; salt under 5 g; fluid limit only if severe; rehab Class I; influenza and pneumococcal vaccines; no NSAIDs."],
        ["Special groups", "Elderly: start low, standing BP; CKD: SGLT2i to eGFR 20; pregnancy: stop ACEi/ARNI/MRA/SGLT2i/ivabradine; COPD: cardioselective beta-blocker fine."],
        ["Palliative", "Advance care planning, ICD shock deactivation, low-dose morphine for breathlessness, deprescribe statins; NPPC and oral morphine access."],
        ["Exam traps", "36 h ACEi washout before ARNI; only four beta-blockers; don't stop drugs in HFimpEF (TRED-HF); oral iron fails (IRONOUT-HF)."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "HFrEF: from diagnosis to device decision",
        steps: [
          { label: "HFrEF confirmed (LVEF under 50%)", detail: "Treat cause; diuretic if congested" },
          { label: "Start four pillars at low dose within 2-4 weeks", detail: "ARNI/ACEi, beta-blocker, MRA, SGLT2i; order by HR, BP, K" },
          { label: "Titrate one step every 1-2 weeks", detail: "K and creatinine 1-2 weeks after each change", tone: "decision" },
          { label: "Add-ons as indicated", detail: "IV iron, ivabradine, digoxin, vericiguat, hydralazine-ISDN" },
          { label: "Echo after 3 months of optimal therapy", detail: "LVEF 35% or less?", tone: "decision" },
          { label: "ICD and/or CRT; refer stage D", detail: "CRT if LBBB QRS 150 ms or more", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Titration barriers and fixes",
        root: "Problem during titration",
        arms: [
          { label: "Low BP", tone: "warn", steps: ["Asymptomatic SBP 90-100: continue", "Stop nitrates/CCB", "Reduce diuretic if dry"] },
          { label: "High potassium", tone: "warn", steps: ["Up to 5.5 acceptable", "Over 5.5 halve MRA", "6.0 or more stop; consider binder"] },
          { label: "Rising creatinine", tone: "decision", steps: ["Up to 50% acceptable", "Over 50% halve RAASi", "Doubling: stop"] },
          { label: "Bradycardia", tone: "decision", steps: ["Stop digoxin/ivabradine first", "Halve beta-blocker if symptomatic under 50"] },
        ],
      },
      {
        kind: "compare",
        heading: "HFrEF vs HFpEF treatment (ESC 2026)",
        columns: ["Feature", "HFrEF (under 50%)", "HFpEF (50% or more)"],
        rows: [
          ["Foundational drugs", "ARNI/ACEi, beta-blocker, MRA, SGLT2i", "SGLT2i, MRA"],
          ["MRA choice", "Spironolactone or eplerenone", "Spironolactone or finerenone"],
          ["Obesity", "Weight loss", "Semaglutide or tirzepatide (IIa)"],
          ["Devices", "ICD, CRT", "None specific"],
          ["Diuretic", "For congestion", "For congestion"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Optimisation means **all four foundational drugs** at target dose plus indicated devices.",
            "ESC 2026: **HFrEF under 50%**, HFpEF 50% or more; HFmrEF abolished.",
            "**HFimpEF**: LVEF rises 10 points to over 40%; keep all therapy.",
            "Four drugs together roughly **halve** CV death or HF admission.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Chronic **RAAS and sympathetic** activation drives remodelling.",
            "ARNI adds **neprilysin inhibition**, raising natriuretic peptides.",
            "Beta-blockers cause **reverse remodelling** over months.",
            "SGLT2 inhibitors work within weeks, with or without diabetes.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Sacubitril-valsartan** 49/51 mg twice daily to 97/103 mg; 36 hours after ACE inhibitor.",
            "**Bisoprolol** 1.25 mg to 10 mg, or carvedilol 3.125 mg to 25 mg twice daily.",
            "**Spironolactone** 12.5-25 mg to 50 mg if potassium 5.0 or less.",
            "**Dapagliflozin or empagliflozin** 10 mg daily, no titration.",
            "Start all four within weeks; titrate every **1-2 weeks**.",
            "Diuretics relieve symptoms but **do not prolong life**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Check **potassium and creatinine** 1-2 weeks after every change.",
            "Iron deficiency: **ferritin under 100**, or 100-299 with TSAT under 20%.",
            "Repeat echo **3-6 months** after optimisation for device decisions.",
            "Not improving: check adherence, ischaemia, AF, valves, iron, alcohol, thyroid.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Creatinine rise **up to 50%** is acceptable; doubling means stop.",
            "Potassium over 5.5: **halve MRA**; 6.0 or more: stop.",
            "**Ivabradine** if sinus rhythm, HR 70 or more, LVEF 35% or less.",
            "**Digoxin** level 0.5-0.9 ng/mL; IIa in ESC 2026.",
            "**IV iron**, never oral, for iron deficiency.",
            "Hydralazine plus nitrate if RAAS blockers cannot be used.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**ICD**: LVEF 35% or less after 3 months of optimal therapy; not within 40 days of MI.",
            "**CRT**: LVEF 35% or less, LBBB, QRS 150 ms or more.",
            "Never CRT if **QRS under 130 ms** unless pacing is needed.",
            "Need for ventricular pacing in HFrEF: choose **CRT over RV pacing**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**HFpEF**: SGLT2 inhibitor plus MRA; finerenone from FINEARTS-HF.",
            "Obese HFpEF: **semaglutide or tirzepatide**.",
            "Pregnancy planning: stop ACE inhibitor, ARNI, MRA, SGLT2 inhibitor, ivabradine.",
            "COPD is not a reason to withhold **cardioselective beta-blockers**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "HF clinic and nurse-led titration are **Class I**.",
            "Daily weights; act on **2 kg gain in 3 days**.",
            "Salt **under 5 g a day**; fluid limit only for severe congestion.",
            "Annual **influenza** and pneumococcal vaccination.",
            "Review every 1-2 weeks while titrating, then **3-6 monthly**.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**I NEED HELP** flags advanced HF needing referral.",
            "Palliative care runs **alongside** GDMT in stage D.",
            "Discuss **ICD shock deactivation** at end of life.",
            "Low-dose oral **morphine** for refractory breathlessness.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "ESC 2026: **MRA Class I at any LVEF**.",
            "ESC 2026: GLP-1-based therapy **IIa** in obese HFpEF.",
            "ESC 2026: digoxin or digitoxin **IIa** after DIGIT-HF.",
            "ESC 2023: SGLT2 inhibitor **Class I** at every LVEF.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for chronic HF",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Sacubitril-valsartan", "24/26-49/51 to 97/103 mg oral BD", "Lifelong", "Hypotension, high K; 36 h ACEi washout"],
            ["Enalapril", "2.5 mg BD to 10-20 mg BD oral", "Lifelong", "Cough, angioedema, high K"],
            ["Bisoprolol", "1.25 to 10 mg oral daily", "Lifelong", "Bradycardia, fatigue"],
            ["Carvedilol", "3.125 to 25 mg oral BD", "Lifelong", "Hypotension, bradycardia"],
            ["Spironolactone", "12.5-25 to 50 mg oral daily", "Lifelong", "High K, gynaecomastia"],
            ["Dapagliflozin / empagliflozin", "10 mg oral daily", "Lifelong", "Genital infection, ketoacidosis"],
            ["Ivabradine", "2.5-5 to 7.5 mg oral BD", "Lifelong", "Phosphenes; sinus rhythm only"],
            ["Ferric carboxymaltose", "1000 mg IV over 15 min", "Repeat by iron indices", "Hypophosphataemia"],
          ],
        },
        {
          heading: "Monitoring thresholds",
          columns: ["Parameter", "Acceptable", "Halve", "Stop"],
          rows: [
            ["Creatinine", "Rise up to 50%", "Rise over 50%", "Doubled or over 3.5 mg/dL"],
            ["Potassium", "Up to 5.5", "Over 5.5", "6.0 or more"],
            ["Heart rate", "50-60", "Under 50 with symptoms", "High-grade block"],
          ],
        },
        {
          heading: "Device criteria",
          columns: ["Device", "Criteria", "Strength"],
          rows: [
            ["ICD primary, ischaemic", "LVEF 35% or less, NYHA II-III, 3 months OMT", "Recommended"],
            ["ICD primary, non-ischaemic", "Same criteria", "Should be considered"],
            ["CRT", "LBBB QRS 150 ms or more, LVEF 35% or less", "Recommended"],
            ["CRT", "LBBB 130-149 or non-LBBB 150 or more", "Should be considered"],
          ],
        },
      ],
      remember: [
        "**Four pillars, low and early, then titrate.**",
        "Potassium **5.0 start, 5.5 halve, 6.0 stop**.",
        "**36 hours** from ACE inhibitor to ARNI.",
        "Only **four beta-blockers** count in HFrEF.",
        "CRT = **35, LBBB, 150**.",
        "HFimpEF is **not cured** - keep treating.",
        "Iron: **ferritin under 100 or TSAT under 20%** - give IV.",
      ],
    },
  },
  "cardiovascular-dilated-cardiomyopathy": {
    checked: "2026-10",
    updated: [
      "ESC 2023 cardiomyopathy guideline: phenotype classification, NDLVC category, CMR and genetic testing Class I, family screening intervals.",
      "ESC 2025 pregnancy guideline: Pregnancy Heart Team; PPCM managed with BOARD, bromocriptine with anticoagulation.",
      "ESC 2022 cardio-oncology: CTRCD grading by LVEF, GLS and biomarkers.",
      "ESC 2022 VA guideline and LMNA risk score for ICD selection.",
      "ESC 2026 HF guideline: LVEF under 50% is HFrEF; ICD in non-ischaemic HFrEF should be considered.",
    ],
    master: {
      heading: "Master revision table - Dilated cardiomyopathy and peripartum cardiomyopathy",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "LV/biventricular **dilatation + systolic dysfunction not explained by loading conditions or CAD** (ESC 2023); NDLVC = scar or hypokinesia without dilatation."],
        ["Burden", "1 in 250-500; **30-40% familial**; second commonest HF cause in India (NHFR); commonest transplant indication."],
        ["Causes", "Genetic (**TTN** commonest, **LMNA** malignant); alcohol over 80 g/day for 5 years; tachycardia/PVC over 10%; peripartum; anthracycline; myocarditis; thiamine; thyroid; iron overload; dystrophies; Chagas (not India)."],
        ["Clinical", "HF in a young adult, AF, syncope, embolism; displaced apex, S3, functional MR; pedigree for sudden death; clues - weakness, bronze skin, neuropathy."],
        ["Investigations", "ECG (AV block - LMNA/sarcoid), echo, NT-proBNP, TSH, ferritin, CK; **exclude CAD**; **CMR** (mid-wall LGE, T2*); Holter; **genetic testing Class I**."],
        ["Treatment", "Four-pillar GDMT + cause: abstinence, ablation, thiamine, chelation; anticoagulate AF/LV thrombus; ICD after 3 months if LVEF 35% or less (consider), LMNA score 10% or more; CRT."],
        ["PPCM definition", "**LVEF under 45%**, end of pregnancy to months postpartum, no other cause; prolactin 16-kDa fragment, sFlt-1."],
        ["PPCM treatment", "**BOARD**: bromocriptine 2.5 mg daily 1 week (or BD 2 weeks then daily 6 weeks if severe) **with LMWH**; pregnancy: beta-blocker, hydralazine-nitrate, diuretic; postpartum: enalapril."],
        ["PPCM prognosis", "About half recover; avoid ICD early (wearable defibrillator); discourage pregnancy if LVEF not 50% or more."],
        ["Family screening", "Cascade genetics; ECG + echo every 1-3 years in children (from about 10), 3-5 years in adults; discharge genotype-negative relatives."],
        ["Exam traps", "Exclude CAD before 'idiopathic'; no early ICD in reversible DCM; bromocriptine never without LMWH; ARNI not while breastfeeding."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Work-up of a dilated, poorly contracting LV",
        steps: [
          { label: "Echo: dilated LV, reduced LVEF", detail: "Check valves, LV thrombus, RV" },
          { label: "Exclude loading conditions and CAD", detail: "BP history, valve disease, angiography or CT", tone: "decision" },
          { label: "Search secondary causes", detail: "Alcohol, tachycardia, pregnancy, chemo, thiamine, TSH, ferritin, CK" },
          { label: "CMR and Holter", detail: "LGE pattern, T2*, PVC burden, NSVT" },
          { label: "Genetic testing and pedigree", detail: "TTN, LMNA, FLNC; cascade testing", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Peripartum cardiomyopathy management (BOARD)",
        steps: [
          { label: "Diuretics and vasodilators for congestion", detail: "Furosemide; hydralazine-nitrate in pregnancy" },
          { label: "Oral HF therapy", detail: "Beta-blocker; enalapril after delivery; MRA postpartum" },
          { label: "Anticoagulation", detail: "LMWH prophylaxis; therapeutic for thrombus or AF", tone: "warn" },
          { label: "Bromocriptine", detail: "2.5 mg daily 1 week; BD 2 weeks then daily 6 weeks if severe" },
          { label: "Shock: levosimendan, MCS, delivery", detail: "Avoid catecholamines where possible", tone: "warn" },
        ],
      },
      {
        kind: "branch",
        heading: "Causes of DCM",
        root: "Dilated cardiomyopathy",
        arms: [
          { label: "Genetic", steps: ["TTN", "LMNA", "FLNC, DSP, RBM20", "Dystrophinopathies"] },
          { label: "Toxic", tone: "warn", steps: ["Alcohol", "Anthracyclines", "Cocaine", "Iron overload"] },
          { label: "Reversible states", tone: "good", steps: ["Tachycardia/PVC", "Peripartum", "Thiamine deficiency", "Thyroid disease"] },
          { label: "Inflammatory", steps: ["Post-myocarditis", "Sarcoidosis", "HIV"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "DCM is LV dilatation with systolic dysfunction **not due to loading or CAD**.",
            "ESC 2023 added **non-dilated LV cardiomyopathy** (NDLVC).",
            "About **30-40%** of DCM is familial.",
            "DCM is the second commonest cause of HF admission in India.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**TTN** truncation is the commonest gene; **LMNA** is the most arrhythmic.",
            "**Alcohol** over 80 g a day for over 5 years.",
            "**PVC burden** over 10% or persistent fast AF can cause cardiomyopathy.",
            "Others: anthracyclines, myocarditis, thiamine deficiency, thyroid disease, iron overload, dystrophies.",
            "Chagas disease is a global cause but **not seen in India**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Dilatation raises **wall stress** and oxygen demand.",
            "Annular stretch causes **functional mitral regurgitation**.",
            "**Mid-wall scar** on CMR is the substrate for VT.",
            "PPCM: cleaved **prolactin fragment** damages endothelium and myocytes.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Usually **heart failure** in a young or middle-aged adult.",
            "Syncope with AV block suggests **LMNA or sarcoid**.",
            "Ask about alcohol, pregnancy, chemotherapy and palpitations.",
            "Draw a **three-generation pedigree** for sudden death.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Always **exclude CAD** with angiography or CT before calling it idiopathic.",
            "**CMR** shows LGE pattern and T2* iron.",
            "**Genetic testing** is Class I in DCM.",
            "Holter for AF, NSVT and **PVC burden**.",
            "Check TSH, ferritin, CK and HIV.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Give full **four-pillar GDMT** for HFrEF.",
            "Treat the cause: **abstinence**, ablation, thiamine, chelation.",
            "Anticoagulate for AF or **LV thrombus**.",
            "ICD only after **3 months** of GDMT if LVEF stays 35% or less.",
            "LMNA: ICD if 5-year risk score is **10% or more**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "PPCM: **LVEF under 45%** late pregnancy to months after delivery.",
            "PPCM treatment is **BOARD**: bromocriptine, oral HF drugs, anticoagulation, vasodilators, diuretics.",
            "**Bromocriptine** always with LMWH.",
            "Enalapril is safe while **breastfeeding**; avoid ARNI and SGLT2 inhibitors.",
            "Discourage pregnancy if LVEF has **not recovered** to 50%.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer every new DCM for **CMR and genetics**.",
            "Relatives: ECG and echo every **1-3 years** in children, 3-5 years in adults.",
            "Genotype-negative relatives can be **discharged**.",
            "Echo at **3-6 months** after GDMT, then yearly.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ESC 2023**: first unified cardiomyopathy guideline with NDLVC.",
            "**ESC 2025**: pregnancy heart team and BOARD for PPCM.",
            "**ESC 2022**: cardio-oncology grading of cardiotoxicity.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in DCM and PPCM",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Sacubitril-valsartan", "24/26-49/51 to 97/103 mg oral BD", "Lifelong", "Not in pregnancy or breastfeeding"],
            ["Enalapril", "2.5 mg BD to 10-20 mg BD oral", "Lifelong", "Safe in breastfeeding; not in pregnancy"],
            ["Metoprolol succinate", "12.5-25 to 200 mg oral daily", "Lifelong", "Bradycardia; usable in pregnancy"],
            ["Spironolactone", "12.5-25 to 50 mg oral daily", "Lifelong", "High K; avoid in pregnancy"],
            ["Bromocriptine", "2.5 mg oral daily or BD", "1 week, or 8 weeks if severe", "Thrombosis; stops lactation"],
            ["Enoxaparin", "40 mg SC daily", "With bromocriptine", "Bleeding"],
            ["Thiamine", "100 mg IV/IM daily", "Until recovery", "Rare anaphylaxis"],
          ],
        },
        {
          heading: "Secondary causes and specific treatment",
          columns: ["Cause", "Clue", "Treatment"],
          rows: [
            ["Alcohol", "Heavy long-term use", "Total abstinence"],
            ["Tachycardia/PVC", "Fast AF, PVC over 10%", "Rate control or ablation"],
            ["Peripartum", "Late pregnancy to postpartum", "BOARD"],
            ["Anthracycline", "Chemotherapy history", "ACEi + beta-blocker"],
            ["Thiamine deficiency", "Alcohol, polished rice", "IV thiamine"],
            ["Iron overload", "Thalassaemia, T2* under 20 ms", "Intensive chelation"],
          ],
        },
        {
          heading: "DCM versus look-alikes",
          columns: ["Condition", "Key feature", "Test"],
          rows: [
            ["DCM", "Global hypokinesia, mid-wall LGE", "CMR"],
            ["Ischaemic cardiomyopathy", "Regional defects, subendocardial LGE", "Angiography"],
            ["Myocarditis", "Acute, troponin rise, subepicardial LGE", "CMR"],
            ["Athlete's heart", "Normal LVEF on exercise", "Stress echo"],
          ],
        },
      ],
      remember: [
        "DCM: **not loading, not CAD**.",
        "**TTN** commonest, **LMNA** deadliest.",
        "PPCM = **45%, late pregnancy to postpartum, no other cause**.",
        "**BOARD** for PPCM; bromocriptine plus LMWH.",
        "PVC burden **over 10%** - think ablation.",
        "Wait before ICD in **reversible** DCM.",
        "Genotype-negative relative - **discharge**.",
      ],
    },
  },
  "cardiovascular-hcm": {
    checked: "2026-10",
    updated: [
      "AHA/ACC 2024 HCM guideline: cardiac myosin inhibitor Class I for symptomatic obstructive HCM; liberalised sport; major SCD markers.",
      "ESC 2023 cardiomyopathy guideline: mavacamten IIa; LGE 15% or more, LVEF under 50%, apical aneurysm as ICD modifiers.",
      "Aficamten FDA approval December 2025 (SEQUOIA-HCM, MAPLE-HCM).",
      "ODYSSEY-HCM 2025: mavacamten no benefit in non-obstructive HCM.",
      "Mavacamten launched in India in 2025 (import licence).",
    ],
    master: {
      heading: "Master revision table - Hypertrophic cardiomyopathy",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "LV wall **15 mm or more (13 mm in a relative)** not explained by loading; about **1 in 500**; commonest inherited heart disease."],
        ["Genetics", "Autosomal dominant; **MYH7, MYBPC3** about 70% of positives; phenocopies Fabry, Danon, PRKAG2, amyloid, Noonan."],
        ["Pathophysiology", "Hypercontractility, disarray, fibrosis; **SAM** causes dynamic LVOT obstruction and posterior MR; diastolic dysfunction; ischaemia; VT substrate."],
        ["Classification", "Obstructive **30 mmHg or more** (50 significant), labile, non-obstructive; septal, apical (Yamaguchi), mid-ventricular; end-stage LVEF under 50%."],
        ["Clinical", "Dyspnoea, angina, exertional syncope, sudden death; bifid pulse, double apical impulse, S4; murmur **louder with Valsalva/standing, softer with squat/handgrip**."],
        ["Investigations", "ECG (LVH, dagger Q, giant T apical); echo with Valsalva and exercise gradient; **CMR LGE**; 48-h Holter; CPET; genetic testing."],
        ["Drugs", "**Beta-blocker** first, then verapamil/diltiazem, disopyramide, **mavacamten/aficamten**; avoid nitrates, vasodilators, digoxin, high-dose diuretics."],
        ["Invasive", "Gradient 50 or more + NYHA III-IV on drugs: **myectomy (LBBB)** or **alcohol ablation (RBBB, CHB 10-20%)**."],
        ["SCD and ICD", "HCM Risk-SCD (age, wall, LA, gradient, family SCD, NSVT, syncope): **under 4% no, 4-6% may, 6% or more should**; modifiers LGE 15%, LVEF under 50%, aneurysm, wall 30 mm."],
        ["AF and HF", "AF - **anticoagulate regardless of score**; end-stage - HFrEF GDMT; hypotension - fluids and phenylephrine."],
        ["Special", "Moderate exercise for all, competitive sport after shared decision; pregnancy usually tolerated, stop myosin inhibitors; 50% offspring risk."],
        ["Family screening", "Cascade genetics; relatives ECG + echo from 10-12 years every 1-2 years, adults 3-5 years; genotype-negative discharged."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected HCM: diagnostic pathway",
        steps: [
          { label: "Murmur, syncope, abnormal ECG or family history", detail: "Young patient or athlete" },
          { label: "Echo: wall 15 mm or more, SAM, gradient", detail: "Rest, Valsalva and standing; exercise echo if under 50 mmHg", tone: "decision" },
          { label: "Exclude loading and phenocopies", detail: "BP, AS, athlete's heart, amyloid, Fabry" },
          { label: "CMR, Holter, CPET, genetics", detail: "LGE extent, NSVT, AF, variant" },
          { label: "SCD risk and family cascade screening", detail: "HCM Risk-SCD; relatives", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder for symptomatic obstructive HCM",
        steps: [
          { label: "Avoid triggers and vasodilators", detail: "Hydration, small meals, no nitrates or PDE-5 inhibitors" },
          { label: "Non-vasodilating beta-blocker", detail: "Propranolol, metoprolol, bisoprolol to HR about 60" },
          { label: "Verapamil or diltiazem", detail: "If beta-blocker fails or intolerant" },
          { label: "Disopyramide or cardiac myosin inhibitor", detail: "Mavacamten 5 mg (echo-guided); aficamten" },
          { label: "Septal reduction therapy", detail: "Gradient 50 mmHg or more with NYHA III-IV", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Murmur dynamics: HCM vs aortic stenosis",
        columns: ["Manoeuvre", "HCM", "AS"],
        rows: [
          ["Valsalva / standing", "Louder", "Softer"],
          ["Squatting / leg raise", "Softer", "Louder"],
          ["Handgrip", "Softer", "Softer or same"],
          ["Carotid radiation", "No", "Yes"],
          ["Pulse", "Brisk, bifid", "Slow-rising"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "HCM is LV wall **15 mm or more**, or 13 mm in a relative, not due to loading.",
            "Prevalence about **1 in 500**; commonest inherited heart disease.",
            "Leading cause of **sudden death** in young athletes in many series.",
            "About **two-thirds** have LVOT obstruction at rest or on provocation.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Autosomal dominant **sarcomere** variants; MYH7 and MYBPC3 commonest.",
            "Phenocopies: **Fabry**, Danon, PRKAG2, amyloid, Noonan.",
            "Each child of an affected parent has a **50%** risk.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**SAM** of the mitral leaflet causes dynamic outflow obstruction.",
            "Obstruction worsens with **low preload**, low afterload and high contractility.",
            "SAM causes **posteriorly directed** mitral regurgitation.",
            "Disarray and fibrosis are the substrate for **VT and VF**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Exertional breathlessness, angina, **syncope** and palpitations.",
            "Brisk **bifid pulse** and double apical impulse.",
            "Murmur **louder with Valsalva** and standing.",
            "Murmur **softer with squatting** and handgrip.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "ECG: LVH, **dagger Q waves**, giant T inversion in apical HCM.",
            "Echo gradient at rest and with **Valsalva**; exercise echo if needed.",
            "**CMR** shows wall thickness and LGE extent.",
            "48-hour **Holter** for NSVT and AF.",
            "Genetic testing in the proband enables **cascade testing**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Non-vasodilating beta-blocker** first.",
            "Then **verapamil or diltiazem** if beta-blocker fails.",
            "Add **disopyramide** or a myosin inhibitor for persistent symptoms.",
            "**Mavacamten** needs echo checks; hold if LVEF falls under 50%.",
            "Avoid **nitrates, vasodilators, digoxin** and high-dose diuretics.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Septal reduction if gradient **50 mmHg or more** with NYHA III-IV.",
            "**Myectomy** causes LBBB; alcohol ablation causes RBBB and heart block.",
            "ICD after arrest or if HCM Risk-SCD is **6% or more**.",
            "AF: **anticoagulate** regardless of CHA2DS2-VA.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Regular **moderate exercise** suits everyone with HCM.",
            "Competitive sport only after **shared decision** with an expert.",
            "Pregnancy usually tolerated; **stop myosin inhibitors** before conception.",
            "Treat hypotension with **fluids and phenylephrine**, not inotropes.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review with ECG and echo every **1-2 years**.",
            "Repeat Holter and SCD risk every **1-2 years**.",
            "Screen relatives from **10-12 years**, then every 1-2 years in childhood.",
            "Genotype-negative relatives can be **discharged**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AHA/ACC 2024**: myosin inhibitor Class I for symptomatic obstruction.",
            "**ESC 2023**: LGE, low LVEF and aneurysm modify ICD decisions.",
            "**Aficamten** approved by FDA in December 2025.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in HCM",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Propranolol", "40-80 mg oral TDS", "Lifelong", "Bradycardia, fatigue"],
            ["Metoprolol succinate", "50-200 mg oral daily", "Lifelong", "Bradycardia"],
            ["Verapamil", "40-80 mg TDS; SR to 480 mg/day", "Lifelong", "AV block; avoid with high gradient and low BP"],
            ["Disopyramide", "100-200 mg oral TDS-QID", "Add-on", "Anticholinergic, QT prolongation"],
            ["Mavacamten", "5 mg oral daily (2.5-15 mg)", "Echo-guided", "Low LVEF, teratogenic, CYP interactions"],
            ["Aficamten", "5 mg oral daily to 20 mg", "Echo-guided", "Low LVEF"],
            ["Apixaban (AF)", "5 mg oral BD", "Lifelong", "Bleeding"],
          ],
        },
        {
          heading: "SCD risk and ICD",
          columns: ["Category", "Criterion", "ICD"],
          rows: [
            ["Secondary prevention", "Arrest, VF, sustained VT", "Recommended"],
            ["HCM Risk-SCD", "Under 4%", "Generally not"],
            ["HCM Risk-SCD", "4-6%", "May be considered"],
            ["HCM Risk-SCD", "6% or more", "Should be considered"],
            ["Major markers (AHA)", "Family SCD, wall 30 mm, syncope, aneurysm, LVEF under 50%", "Reasonable"],
          ],
        },
        {
          heading: "HCM versus athlete's heart",
          columns: ["Feature", "HCM", "Athlete's heart"],
          rows: [
            ["Wall thickness", "Over 15 mm, asymmetric", "13-15 mm or less, symmetric"],
            ["LV cavity", "Small", "Large, over 55 mm"],
            ["Diastolic function", "Abnormal", "Normal"],
            ["CMR LGE", "Often present", "Absent"],
            ["Detraining", "No regression", "Regresses"],
          ],
        },
      ],
      remember: [
        "**15 mm, or 13 mm in a relative**.",
        "**Valsalva up, squat down** - the HCM murmur.",
        "Obstruction: **30 defines, 50 treats**.",
        "Avoid **nitrates, digoxin, vasodilators, inotropes**.",
        "Risk-SCD: **4% and 6%** thresholds.",
        "**Myectomy LBBB, ablation RBBB**.",
        "AF in HCM: **anticoagulate all**.",
      ],
    },
  },
};

export default revision;
