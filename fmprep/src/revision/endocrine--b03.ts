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
  "endocrine-diabetic-neuropathy": {
    checked: "2026-10",
    updated: [
      "ADA 2022 painful DPN compendium / ADA 2026: gabapentinoids, SNRIs, TCAs and sodium-channel blockers first-line; opioids including tapentadol not first or second line.",
      "OPTION-DM (Lancet 2022): amitriptyline, duloxetine and pregabalin equally effective; combine for partial response.",
      "IWGDF 2023: updated foot risk grades, Charcot diagnosis (temperature difference, MRI) and offloading.",
      "ACG 2022 gastroparesis: 4-hour scintigraphy; metoclopramide limited to 12 weeks.",
    ],
    master: {
      heading: "Master revision table - diabetic neuropathy",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Symptoms/signs of peripheral or autonomic nerve dysfunction in diabetes **after excluding other causes**; **DSPN is 75%**; half of long-standing diabetics, half asymptomatic."],
        ["India", "CURES: neuropathy in about **26%** of urban type 2 diabetics; leading driver of foot ulcers and amputations."],
        ["Risk factors", "Duration, **HbA1c**, height, obesity, triglycerides, hypertension, smoking, alcohol, **B12 deficiency on metformin**, rapid HbA1c fall."],
        ["Pathophysiology", "Polyol pathway, AGEs, PKC, oxidative stress, **vasa nervorum ischaemia**; length-dependent dying-back axonopathy gives **stocking-glove** loss."],
        ["Classification", "Diffuse (DSPN, autonomic); mononeuropathy (**pupil-sparing III**, median, peroneal); radiculo-plexopathy (**amyotrophy**); treatment-induced."],
        ["Clinical", "Burning night pain, allodynia, numbness, falls in dark; autonomic - dizziness, early satiety, nocturnal diarrhoea, ED, retention, dry feet."],
        ["Screening exam", "**10 g monofilament** at 4 sites plus 128 Hz fork, pinprick, temperature or ankle reflex; lying-standing BP; resting HR; feel nerves for leprosy."],
        ["Differential", "**B12 deficiency, leprosy**, hypothyroidism, CKD, alcohol, drugs (INH), CIDP, paraprotein, vasculitis, PAD, canal stenosis."],
        ["Investigations", "HbA1c, B12, TSH, eGFR, CBC; NCS only if atypical; Ewing tests; endoscopy then 4-h gastric scintigraphy; PVR; MRI for Charcot."],
        ["Painful DPN", "**Pregabalin 75 mg BD to 300 mg BD**, duloxetine 30 then 60 mg, amitriptyline 10-75 mg, gabapentin 900-3600 mg; capsaicin; opioids last."],
        ["Autonomic treatment", "OH: fluids, salt, stockings, **midodrine 2.5-10 mg TDS**, fludrocortisone; gastroparesis: small low-fat meals, **metoclopramide up to 12 weeks**; ED: PDE5i."],
        ["Special groups", "Elderly start low (amitriptyline 10 mg, pregabalin 25-50 mg); CKD reduce gabapentinoids; avoid duloxetine with liver disease or eGFR under 30."],
        ["Referral", "Atypical or rapid neuropathy to neurology; **hot swollen foot or ulcer same day** to foot clinic; refractory gastroparesis or pain."],
        ["Exam one-liners", "**Small fibres hurt, large fibres fall**; resting tachycardia is earliest CAN sign; check B12 and nerves in every Indian patient."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Yearly neuropathy screen in the OPD",
        caption: "From diagnosis of type 2 and 5 years after type 1.",
        steps: [
          { label: "Symptoms: MNSI questions, DN4 for pain", detail: "Ask autonomic symptoms too" },
          { label: "Monofilament at 4 sites plus 128 Hz fork", detail: "Add pinprick, temperature, ankle reflex" },
          { label: "Lying-standing BP and resting heart rate", detail: "SBP fall 20 or DBP 10; HR over 100", tone: "decision" },
          { label: "Exclude mimics", detail: "B12, TSH, eGFR, alcohol, drugs, leprosy" },
          { label: "Atypical: asymmetric, motor, rapid?", detail: "NCS and neurology referral", tone: "warn" },
          { label: "Assign IWGDF foot risk and review interval", detail: "Grade 0 yearly to grade 3 every 1-3 months", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Painful DPN treatment ladder",
        caption: "Each step a 4-6 week trial at therapeutic dose; aim for 30-50% pain relief.",
        steps: [
          { label: "Optimise glucose, foot care, sleep and mood", detail: "Screen PHQ-9" },
          { label: "First drug: pregabalin, duloxetine or amitriptyline", detail: "Pregabalin 75 mg BD; duloxetine 30-60 mg; amitriptyline 10-75 mg" },
          { label: "Switch class or combine", detail: "Duloxetine plus pregabalin (OPTION-DM)" },
          { label: "Topical capsaicin or lidocaine", detail: "8% capsaicin patch every 3 months" },
          { label: "Pain clinic, spinal cord stimulation", detail: "Opioids such as tapentadol only as last resort", tone: "warn" },
        ],
      },
      {
        kind: "branch",
        heading: "Types of diabetic neuropathy",
        root: "Diabetic neuropathies",
        arms: [
          { label: "Diffuse - DSPN", steps: ["Small fibre: burning pain", "Large fibre: vibration loss, ataxia", "Mixed: commonest"] },
          { label: "Diffuse - autonomic", tone: "warn", steps: ["Cardiovascular", "Gastrointestinal", "Genitourinary", "Sudomotor"] },
          { label: "Mononeuropathy", steps: ["Pupil-sparing III palsy", "Carpal tunnel", "Foot drop"] },
          { label: "Radiculo-plexopathy", steps: ["Diabetic amyotrophy", "Thoracic radiculopathy"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Nerve damage in diabetes after **excluding other causes**.",
            "**DSPN** is about 75% of all diabetic neuropathy.",
            "Half of long-standing diabetics have it; **half have no symptoms**.",
            "India: about **26%** of urban type 2 diabetics (CURES).",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**Polyol pathway**, AGEs and oxidative stress injure nerves.",
            "Blocked **vasa nervorum** cause ischaemic mononeuropathies.",
            "Longest nerves fail first, giving a **stocking-glove** pattern.",
            "**Small fibres** carry pain and temperature; large fibres carry vibration and position.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Diffuse**: DSPN and autonomic neuropathy.",
            "**Mononeuropathy**: pupil-sparing third nerve palsy, carpal tunnel, foot drop.",
            "**Radiculo-plexopathy**: diabetic amyotrophy with painful thigh weakness.",
            "**Treatment-induced** neuropathy after a rapid HbA1c fall.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Burning **night pain**, allodynia, pins and needles.",
            "Numbness, painless burns and **falls in the dark**.",
            "Autonomic: dizziness on standing, early satiety, **nocturnal diarrhoea**, ED, retention.",
            "Resting tachycardia is the **earliest CAN sign**.",
          ],
        },
        {
          title: "Examination",
          points: [
            "**10 g monofilament** at hallux and first, third and fifth metatarsal heads.",
            "**128 Hz tuning fork** on the hallux; ankle reflexes; pinprick.",
            "Lying and standing **BP**: fall of 20 systolic or 10 diastolic.",
            "Feel nerves for thickening to exclude **leprosy**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Diagnosis is **clinical**; NCS only if atypical.",
            "Check **B12**, TSH, eGFR and blood count.",
            "CAN: **Ewing tests** and QTc.",
            "Gastroparesis: endoscopy first, then **4-hour scintigraphy**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Control glucose, BP and lipids; teach **daily foot care**.",
            "Pain: **pregabalin**, duloxetine or amitriptyline, each tried for 4-6 weeks.",
            "Combine **duloxetine plus pregabalin** if partial response.",
            "Avoid opioids; **tapentadol** only as last resort.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Orthostatic hypotension: fluids, salt, stockings, **midodrine** by day.",
            "Gastroparesis: small low-fat meals, **metoclopramide** up to 12 weeks.",
            "ED: **sildenafil or tadalafil**, never with nitrates.",
            "Cystopathy: timed voiding and **self-catheterisation**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Elderly**: amitriptyline 10 mg, pregabalin 25-50 mg at night.",
            "**CKD**: reduce pregabalin and gabapentin; avoid duloxetine under eGFR 30.",
            "**Heart disease**: avoid tricyclics after MI or with arrhythmia.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Screen at diagnosis of type 2, 5 years after type 1, then **yearly**.",
            "**Hot swollen foot** or ulcer: same-day foot clinic.",
            "Atypical or rapid neuropathy: **neurology**.",
            "Foot review by **IWGDF grade**: yearly to every 1-3 months.",
          ],
        },
      ],
      tables: [
        {
          heading: "Painful neuropathy drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Pregabalin", "75 mg BD oral, up to 300 mg BD", "4-6 week trial, then long-term", "Dizziness, oedema, weight gain; reduce in CKD"],
            ["Duloxetine", "30 mg OD oral, then 60 mg", "4-6 week trial, then long-term", "Nausea, raised BP; avoid liver disease"],
            ["Amitriptyline", "10 mg at night oral, up to 75 mg", "4-6 week trial, then long-term", "Dry mouth, falls, arrhythmia; low dose in elderly"],
            ["Gabapentin", "300 mg at night, up to 3600 mg/day", "Titrate over 2-4 weeks", "Sedation, ataxia; reduce in CKD"],
            ["Capsaicin 8% patch", "30 minutes on the feet", "Every 3 months", "Burning; not on broken skin"],
            ["Tapentadol ER", "50 mg BD oral, max 500 mg/day", "Last resort only", "Dependence, constipation, seizures"],
          ],
        },
        {
          heading: "Neuropathy types",
          columns: ["Type", "Clue", "Course"],
          rows: [
            ["DSPN", "Stocking-glove loss", "Slowly progressive"],
            ["Autonomic", "Tachycardia, OH, gastroparesis", "Progressive; raises mortality"],
            ["Third nerve palsy", "Pupil spared", "Recovers in 3 months"],
            ["Diabetic amyotrophy", "Painful thigh weakness, weight loss", "Improves over 1-2 years"],
            ["Treatment-induced", "After fast HbA1c fall", "Usually reversible"],
          ],
        },
        {
          heading: "Mimics to exclude",
          columns: ["Condition", "Clue", "Test"],
          rows: [
            ["B12 deficiency", "Metformin, vegetarian, anaemia", "Serum B12"],
            ["Leprosy", "Thick nerves, anaesthetic patches", "Slit-skin smear"],
            ["CIDP", "Proximal weakness, global areflexia", "NCS, CSF protein"],
            ["Hypothyroidism", "Slow reflexes, carpal tunnel", "TSH"],
            ["Drugs or alcohol", "INH, vincristine, alcohol", "History"],
          ],
        },
      ],
      remember: [
        "**PDA**: Pregabalin, Duloxetine, Amitriptyline - equal first-line choices.",
        "**Small fibres hurt, large fibres fall.**",
        "**Monofilament plus one more test**, every year.",
        "**Pupil spared** means diabetic third nerve palsy.",
        "Resting **tachycardia** is the first sign of autonomic neuropathy.",
        "**Hot foot + neuropathy = Charcot** until proved otherwise.",
        "Check **B12** and feel the nerves in every Indian patient.",
      ],
    },
  },
  "endocrine-diabetic-retinopathy-eye": {
    checked: "2026-10",
    updated: [
      "ADA 2026: AI-based and telemedicine retinal screening endorsed; retinal exam before and during semaglutide in people with existing DR.",
      "AAO DR Preferred Practice Pattern 2024: anti-VEGF first-line for CI-DME with visual loss; observation for good-vision CI-DME.",
      "Faricimab and aflibercept 8 mg allow 12-16 weekly dosing; DRCR Protocol W 2023: anti-VEGF in severe NPDR gives no visual benefit.",
      "LENS 2024: fenofibrate slows progression to referable DR; EMA 2025: NAION a very rare semaglutide adverse effect.",
    ],
    master: {
      heading: "Master revision table - diabetic retinopathy and the diabetic eye",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Progressive **retinal microangiopathy**; **DME** at any stage is the commonest cause of visual loss; one-third of diabetics have DR, one in ten vision-threatening."],
        ["India", "**SMART India**: DR 12.5%, vision-threatening 4%; National DR survey (50 plus) about 17%; most unscreened."],
        ["Risk factors", "**Duration, HbA1c**, BP, lipids, nephropathy, pregnancy, puberty, **rapid HbA1c fall**, anaemia, smoking, cataract surgery."],
        ["Pathophysiology", "Pericyte loss and BM thickening give **microaneurysms** and leakage; capillary closure and ischaemia release **VEGF**, causing new vessels and DME."],
        ["Classification", "International scale: none, mild (MA only), moderate, **severe NPDR (4-2-1)**, PDR; DME centre-involving or not; high-risk PDR (DRS)."],
        ["Symptoms", "Silent; gradual central blur (DME); **sudden floaters or loss** (vitreous haemorrhage); curtain (detachment); painful red eye (NVG)."],
        ["Examination", "VA with pinhole, check rubeosis, **dilate with tropicamide plus phenylephrine**, fundus lesions, IOP, lens."],
        ["Investigations", "**Two-field retinal photos with AI or grader**, OCT for DME, FFA/OCTA for ischaemia and NV, B-scan if media hazy; HbA1c, BP, UACR."],
        ["Systemic treatment", "HbA1c around 7% lowered **gradually**, BP under 130/80, statin, **fenofibrate 145-160 mg** in NPDR; aspirin safe; caution with pioglitazone."],
        ["Eye treatment", "**CI-DME: anti-VEGF** (ranibizumab, aflibercept, faricimab, bevacizumab); steroid implant second-line; **PDR: PRP or anti-VEGF**; vitrectomy for haemorrhage or traction."],
        ["Special groups", "Pregestational diabetes: exam **each trimester and 1 year postpartum**; **GDM no screening**; type 1 from 5 years after diagnosis; treat DME before cataract surgery."],
        ["Rest of the eye", "Cataract (snowflake in type 1), refractive shifts, neovascular glaucoma, pupil-sparing III palsy, papillopathy, dry eye, NAION signal with semaglutide."],
        ["Follow-up (ICO)", "No DR or mild 1-2 years; moderate **6-12 months**; severe **within 3 months**; PDR **within 1 month**; sudden loss same day."],
        ["Exam one-liners", "**First sign microaneurysm**; 4-2-1; severe NPDR 50% to PDR in a year; aspirin safe; GDM needs no eye screen."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "DR screening from PHC to eye unit",
        caption: "NP-NCD and NPCBVI pathway for every registered diabetic.",
        steps: [
          { label: "Diabetic registered at Ayushman Arogya Mandir/PHC", detail: "T2D at diagnosis; T1D within 5 years" },
          { label: "Visual acuity plus two-field retinal photos", detail: "Non-mydriatic or smartphone camera" },
          { label: "AI or tele-grading", detail: "Ungradable image: dilate and repeat or refer", tone: "decision" },
          { label: "No DR or mild NPDR", detail: "Rescreen every 1-2 years; control risk factors", tone: "good" },
          { label: "Referable: moderate NPDR or worse, or any DME", detail: "District eye unit for OCT and treatment", tone: "warn" },
        ],
      },
      {
        kind: "branch",
        heading: "Treatment by lesion",
        root: "Diabetic retinopathy found",
        arms: [
          { label: "Mild-moderate NPDR", tone: "good", steps: ["Glucose, BP, lipids", "Fenofibrate in type 2", "Review 6-24 months"] },
          { label: "Severe NPDR", steps: ["Specialist within 3 months", "Close observation or early PRP"] },
          { label: "PDR", tone: "warn", steps: ["PRP or anti-VEGF", "PRP if follow-up doubtful", "Vitrectomy for non-clearing haemorrhage"] },
          { label: "Centre-involving DME", tone: "warn", steps: ["Anti-VEGF monthly then extend", "Steroid implant if non-responder", "Observe if vision 6/7.5 or better"] },
        ],
      },
      {
        kind: "compare",
        heading: "NPDR versus PDR",
        columns: ["Feature", "NPDR", "PDR"],
        rows: [
          ["Lesions", "Microaneurysms, haemorrhages, exudates, IRMA", "New vessels, vitreous haemorrhage"],
          ["Symptoms", "None unless DME", "Sudden floaters or loss"],
          ["Driver", "Leakage and capillary closure", "Ischaemia and VEGF"],
          ["Treatment", "Risk-factor control, follow-up", "PRP or anti-VEGF urgently"],
          ["Review", "6-24 months (severe within 3)", "Within 1 month"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**DR** is a progressive microangiopathy of the retina.",
            "One-third of diabetics have DR; **one in ten** has sight-threatening disease.",
            "India: **12.5%** DR and 4% sight-threatening (SMART India).",
            "**DME** is the commonest cause of visual loss.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Duration** is the strongest risk; HbA1c is the strongest modifiable one.",
            "BP, lipids, kidney disease, pregnancy and **puberty** speed it up.",
            "**Rapid HbA1c fall** can cause early worsening.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Pericyte loss causes **microaneurysms**, the first sign.",
            "Capillary closure causes **ischaemia** and VEGF release.",
            "**VEGF** drives new vessels and macular leakage.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "None, **mild** (microaneurysms only), moderate, severe NPDR, PDR.",
            "**4-2-1 rule**: haemorrhages 4 quadrants, beading 2, IRMA 1.",
            "Severe NPDR has a **50%** one-year risk of PDR.",
            "DME is **centre-involving** or not on OCT.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Usually **silent** until late.",
            "Gradual central blur suggests **DME**.",
            "Sudden floaters or loss suggests **vitreous haemorrhage**.",
            "Painful red eye with haloes suggests **neovascular glaucoma**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Two-field **retinal photos** graded by AI or a grader.",
            "**OCT** confirms macular oedema.",
            "FFA or OCTA shows ischaemia and new vessels.",
            "**B-scan** ultrasound when the view is blocked.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Control glucose, BP and lipids; **lower HbA1c gradually**.",
            "**Fenofibrate** slows NPDR in type 2.",
            "**Aspirin** is safe in DR.",
            "**Anti-VEGF** injections for centre-involving DME with poor vision.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "PDR: **panretinal laser** or anti-VEGF.",
            "Prefer laser when **follow-up is uncertain**.",
            "Steroid implant if anti-VEGF fails or in pseudophakic eyes.",
            "**Vitrectomy** for non-clearing haemorrhage or traction.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Pre-existing diabetes in pregnancy: exam **every trimester**.",
            "**Gestational diabetes** needs no retinal screening.",
            "Treat DME before **cataract surgery**.",
            "Check eyes before **semaglutide** if DR is present.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "No DR: every **1-2 years**; any DR: at least yearly.",
            "Moderate NPDR 6-12 months; severe **within 3 months**; PDR within 1 month.",
            "**Same day** for sudden loss, curtain or painful red eye.",
          ],
        },
      ],
      tables: [
        {
          heading: "Eye treatments",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Ranibizumab", "0.5 mg intravitreal", "Monthly, then treat-and-extend", "Endophthalmitis, raised IOP"],
            ["Aflibercept", "2 mg intravitreal", "5 monthly, then every 8 weeks", "Endophthalmitis; caution after stroke"],
            ["Bevacizumab", "1.25 mg intravitreal (off-label)", "Monthly, then as needed", "Low cost; contamination risk"],
            ["Faricimab", "6 mg intravitreal", "Up to every 16 weeks after loading", "Intraocular inflammation"],
            ["Dexamethasone implant", "0.7 mg intravitreal", "Every 3-6 months", "Cataract, raised IOP"],
            ["Fenofibrate", "145-160 mg OD oral", "Long-term", "Raised creatinine; avoid eGFR under 30"],
          ],
        },
        {
          heading: "International DR scale",
          columns: ["Stage", "Findings", "Next review"],
          rows: [
            ["No DR", "Normal", "1-2 years"],
            ["Mild NPDR", "Microaneurysms only", "1-2 years"],
            ["Moderate NPDR", "More than microaneurysms", "6-12 months"],
            ["Severe NPDR", "4-2-1 rule", "Within 3 months"],
            ["PDR", "New vessels or vitreous haemorrhage", "Within 1 month"],
          ],
        },
        {
          heading: "DR look-alikes",
          columns: ["Condition", "Clue", "Side"],
          rows: [
            ["Hypertensive retinopathy", "AV nicking, narrow arterioles", "Both"],
            ["Vein occlusion", "Haemorrhages along one vein", "One"],
            ["Eales disease", "Young man, periphlebitis", "Often both"],
            ["Ocular ischaemic syndrome", "Carotid stenosis, eye pain", "One"],
          ],
        },
      ],
      remember: [
        "**First sign microaneurysm; commonest visual loss DME; sudden loss vitreous haemorrhage.**",
        "**4-2-1** makes NPDR severe.",
        "**Severe NPDR = 50%** PDR in a year.",
        "**Aspirin is safe** in retinopathy.",
        "**GDM: no eye screen**; pre-existing diabetes in pregnancy: each trimester.",
        "**Laser if follow-up is doubtful**; anti-VEGF needs regular visits.",
        "**Snowflake cataract** in young poorly controlled type 1.",
      ],
    },
  },
};

export default revision;
