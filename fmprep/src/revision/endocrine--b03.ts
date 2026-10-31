import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-diabetic-kidney-disease": {
    checked: "2026-10",
    updated: [
      "KDIGO 2022 Diabetes in CKD: SGLT2 inhibitor from eGFR 20 (was 30), continue until dialysis; finerenone for residual albuminuria.",
      "KDIGO 2024 CKD: race-free CKD-EPI 2021, cystatin C, KFRE-based referral at 5-year risk 3-5%.",
      "FLOW 2024 / ADA 2026: semaglutide 1 mg weekly cuts major kidney events by 24% - GLP-1RA now a kidney pillar.",
      "CONFIDENCE 2025: finerenone plus empagliflozin started together lowers UACR more than either alone.",
    ],
    master: {
      heading: "Master revision table - diabetic kidney disease",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "CKD attributed to diabetes: **UACR 30 mg/g or more and/or eGFR under 60** for over 3 months; commonest cause of CKD in India (**about 31%, Indian CKD Registry**)."],
        ["Risk factors", "Duration, **HbA1c, hypertension**, smoking, obesity, South Asian ethnicity, low birth weight, NSAIDs/herbals, recurrent AKI; retinopathy marks susceptibility."],
        ["Pathophysiology", "SGLT2 up-regulation and less NaCl at macula densa cause **afferent dilation**; angiotensin II causes **efferent constriction**; AGEs and MR activation cause fibrosis and **Kimmelstiel-Wilson nodules**."],
        ["Staging", "**KDIGO CGA**: G1-G5 (90/60/45/30/15) and A1-A3 (30/300 mg/g); heat map sets monitoring 1-4 times a year; Mogensen 1-5; RPS class I-IV."],
        ["Clinical features", "Silent till G4; frothy urine, oedema, uraemic symptoms; **falling insulin needs and hypoglycaemia**; check retinopathy and neuropathy."],
        ["Differential", "Non-diabetic disease if **no retinopathy**, active sediment, sudden nephrotic syndrome, rapid fall, over 30% fall after ACEi; hypertensive and renovascular disease."],
        ["Investigations", "**Spot UACR (2 of 3 over 3-6 months)**, eGFR CKD-EPI 2021, cystatin C, urine microscopy, K, Hb, bone profile, ultrasound, **KFRE**; HbA1c unreliable in G4-5."],
        ["Four pillars", "**ACEi/ARB** maximum tolerated; **SGLT2i** 10 mg if eGFR 20 or more; **finerenone** 10-20 mg if UACR 30 or more and K 4.8 or less; **semaglutide** up to 1 mg weekly."],
        ["Targets", "HbA1c **6.5% to under 8%** individualised; BP under 130/80 (ADA) or SBP under 120 (KDIGO); statin for all; salt under 5 g, protein 0.8 g/kg."],
        ["Drug dosing", "**Metformin**: full above 45, 1 g max at 30-44, stop under 30; avoid glibenclamide; sitagliptin 50/25 mg; linagliptin no change; insulin reduce."],
        ["Emergencies", "Hyperkalaemia: **calcium gluconate 10 mL 10%**, insulin 10 U with 25 g glucose, salbutamol, binder; AEIOU dialysis indications; hold sick-day drugs in AKI."],
        ["Referral", "eGFR **under 30**, UACR **300 or more**, fall over 25% or 5 mL/min/year, unclear cause, K problems, resistant BP, **KFRE 5-year 3-5%**."],
        ["Programme", "NP-NCD screening at Ayushman Arogya Mandir; **PM National Dialysis Programme**; Jan Aushadhi generics."],
        ["Exam one-liners", "**eGFR dip up to 30% is protective**; never ACEi plus ARB; UACR not dipstick; no retinopathy in type 1 means biopsy."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Screening and confirming DKD",
        caption: "Yearly from T2D diagnosis and 5 years after T1D diagnosis.",
        steps: [
          { label: "Yearly spot UACR plus creatinine-eGFR", detail: "T2D at diagnosis; T1D after 5 years" },
          { label: "UACR 30 mg/g or more or eGFR under 60?", detail: "Exclude fever, UTI, exercise, menses", tone: "decision" },
          { label: "Repeat - 2 of 3 abnormal over 3-6 months", detail: "Confirms CKD; stage by KDIGO G and A" },
          { label: "Atypical features?", detail: "No retinopathy, RBC casts, rapid fall, sudden nephrotic", tone: "warn" },
          { label: "Refer for biopsy or other work-up", detail: "Otherwise label DKD and start pillars", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Four-pillar treatment ladder",
        caption: "Start as many pillars as tolerated, ideally together; check K and creatinine at 2-4 weeks.",
        steps: [
          { label: "Lifestyle, BP, statin, metformin if eGFR 30 or more", detail: "Salt under 5 g; protein 0.8 g/kg; atorvastatin 20-40 mg" },
          { label: "ACEi or ARB to maximum tolerated dose", detail: "Ramipril up to 10 mg or telmisartan 80 mg; accept 30% creatinine rise" },
          { label: "SGLT2 inhibitor if eGFR 20 or more", detail: "Dapagliflozin or empagliflozin 10 mg OD until dialysis", tone: "good" },
          { label: "Finerenone for residual albuminuria", detail: "UACR 30 or more, eGFR 25 or more, K 4.8 or less; 10 mg then 20 mg" },
          { label: "GLP-1RA with kidney benefit", detail: "Semaglutide 0.25 mg weekly, up to 1 mg (FLOW)" },
          { label: "Refer nephrology", detail: "eGFR under 30, A3, rapid decline, KFRE high", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "DKD versus non-diabetic kidney disease",
        columns: ["Feature", "DKD", "Non-diabetic disease"],
        rows: [
          ["Retinopathy", "Present", "Absent (type 1)"],
          ["Sediment", "Bland", "RBC casts, dysmorphic RBCs"],
          ["Onset", "Gradual albuminuria", "Sudden nephrotic syndrome"],
          ["eGFR course", "Slow decline", "Rapid fall"],
          ["Kidney size", "Normal or large", "Small or asymmetric"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**DKD** is CKD due to diabetes: UACR 30 mg/g or more and/or eGFR under 60 for over 3 months.",
            "About **30-40%** of diabetics develop it; commonest cause of CKD in India.",
            "Up to half of type 2 patients with low eGFR have **no albuminuria**, so test both.",
            "Most patients die of **heart disease** before needing dialysis.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Extra **SGLT2** activity means less salt at the macula densa, so the afferent arteriole dilates.",
            "**Angiotensin II** squeezes the efferent arteriole, raising glomerular pressure.",
            "Glycation and MR activation cause **mesangial expansion** and Kimmelstiel-Wilson nodules.",
            "ACEi and SGLT2i lower glomerular pressure, so an early **eGFR dip** is expected.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**KDIGO G stages**: 90, 60, 45, 30, 15 mL/min cut-offs.",
            "**KDIGO A stages**: A1 under 30, A2 30-300, A3 over 300 mg/g.",
            "The **heat map** sets monitoring from once to four times a year.",
            "RPS pathology class III is **nodular sclerosis** (Kimmelstiel-Wilson).",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Silent** until late; found only by screening.",
            "Frothy urine and **oedema** with heavy albuminuria.",
            "**Falling insulin needs** and new hypoglycaemia suggest falling eGFR.",
            "Look for **retinopathy**; its absence in type 1 suggests another disease.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Spot UACR**, confirmed in 2 of 3 samples over 3-6 months.",
            "eGFR by **CKD-EPI 2021**; add cystatin C if muscle mass is unusual.",
            "Urine microscopy, potassium, haemoglobin, bone profile and **ultrasound**.",
            "**HbA1c is unreliable** in G4-G5; use CGM or SMBG.",
            "Use **KFRE** to estimate risk of kidney failure.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Salt under 5 g, protein **0.8 g/kg/day**, exercise, stop smoking.",
            "**ACEi or ARB** to the maximum tolerated dose; never both together.",
            "**SGLT2i 10 mg** if eGFR 20 or more, continued until dialysis.",
            "**Statin** for everyone with diabetes and CKD.",
            "Metformin full dose above 45, **1 g maximum** at 30-44, stop under 30.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Finerenone** 10 mg (eGFR 25-59) or 20 mg (60 or more) if K is 4.8 or less.",
            "**Semaglutide** weekly up to 1 mg for extra kidney and heart protection.",
            "Recheck potassium and creatinine **2-4 weeks** after each change.",
            "HbA1c target **6.5% to under 8%**; BP under 130/80.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Hyperkalaemia: **calcium gluconate** if ECG changes, then insulin with glucose and salbutamol.",
            "Hold metformin, SGLT2i, ACEi/ARB and NSAIDs during **AKI**.",
            "Dialysis for refractory acidosis, potassium, overload or **uraemic** complications.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: stop ACEi/ARB, SGLT2i and finerenone; use labetalol or nifedipine.",
            "**Type 1**: ACEi/ARB yes; SGLT2i and finerenone not licensed.",
            "**Elderly**: looser HbA1c and BP targets; watch hyperkalaemia.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer if eGFR **under 30**, UACR 300 or more, or rapid decline.",
            "Refer if the cause is unclear or potassium is hard to control.",
            "Refer when **5-year KFRE risk** is 3-5% or more.",
            "Screen yearly; **PM National Dialysis Programme** for kidney failure.",
          ],
        },
      ],
      tables: [
        {
          heading: "Kidney-protective drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Ramipril", "2.5 mg OD oral, up to 10 mg", "Lifelong", "Cough, hyperkalaemia, AKI; not in pregnancy"],
            ["Telmisartan", "40-80 mg OD oral", "Lifelong", "Hyperkalaemia; never with ACEi"],
            ["Dapagliflozin / empagliflozin", "10 mg OD oral", "From eGFR 20 until dialysis", "Genital thrush, euglycaemic DKA, volume loss"],
            ["Finerenone", "10 mg OD (eGFR 25-59) or 20 mg OD", "Long-term; up-titrate at 4 weeks", "Hyperkalaemia; CYP3A4 inhibitors"],
            ["Semaglutide", "0.25 mg SC weekly, up to 1 mg", "Long-term", "Nausea, gallstones, retinopathy worsening"],
            ["Atorvastatin", "10-40 mg OD oral", "Lifelong", "Myalgia, raised ALT"],
          ],
        },
        {
          heading: "KDIGO staging",
          columns: ["Category", "Range", "Meaning"],
          rows: [
            ["G1 / G2", "90 or more / 60-89", "Normal or mild; CKD only with markers"],
            ["G3a / G3b", "45-59 / 30-44", "Moderate; metformin cap below 45"],
            ["G4", "15-29", "Severe; refer, stop metformin"],
            ["G5", "Under 15", "Kidney failure; plan dialysis"],
            ["A1 / A2 / A3", "Under 30 / 30-300 / over 300 mg/g", "Normal / moderate / severe albuminuria"],
          ],
        },
        {
          heading: "DKD or something else",
          columns: ["Feature", "DKD", "Other disease"],
          rows: [
            ["Retinopathy", "Present", "Absent"],
            ["Urine sediment", "Bland", "RBC casts"],
            ["Proteinuria onset", "Gradual", "Sudden nephrotic"],
            ["eGFR fall", "Slow", "Rapid or over 30% after ACEi"],
          ],
        },
      ],
      remember: [
        "**Four pillars**: RAS blocker, SGLT2i, finerenone, GLP-1RA.",
        "**UACR plus eGFR**, never dipstick alone; 2 of 3 to confirm.",
        "**eGFR dip up to 30%** after ACEi or SGLT2i is expected; keep going.",
        "SGLT2i: **start at 20, stop at dialysis**.",
        "Metformin: **45 full, 30 half, under 30 stop**.",
        "**No retinopathy in type 1** with proteinuria means think biopsy.",
        "Kidneys stay **normal-sized** in DKD.",
      ],
    },
  },
};

export default revision;
