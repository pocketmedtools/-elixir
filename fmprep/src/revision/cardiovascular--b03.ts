import type { RevisionSet } from "./index";

const revision: RevisionSet = {};

revision["cardiovascular-stemi-reperfusion"] = {
  checked: "2026-10",
  updated: [
    "ESC 2023 ACS guideline: single ACS guideline, 120-minute PCI threshold, complete revascularisation Class I, lysis assessment at 60-90 min and angiography at 2-24 h",
    "ACC/AHA/ACEP/NAEMSP/SCAI 2025 ACS guideline: FMC-to-device 90/120 min, door-to-needle 30 min, complete revascularisation in STEMI, microaxial pump 2a in selected shock",
    "STREAM-2 (2024): half-dose tenecteplase pharmaco-invasive option in patients aged 60 or more",
    "DanGer Shock (2024) and ECLS-SHOCK (2023) reflected in shock adjuncts",
  ],
  master: {
    heading: "Master revision table - STEMI reperfusion",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Ischaemic symptoms with **persistent ST elevation in 2 contiguous leads** or an equivalent; working diagnosis made on ECG, reperfuse without waiting for troponin."],
      ["Epidemiology (India)", "CVD about 28% of deaths; **CREATE: about 61% of Indian ACS is STEMI**, median 5 h to hospital, 30-day mortality 8.6%; MI 5-10 years earlier in South Asians."],
      ["Pathophysiology", "Plaque rupture or erosion, **fibrin-rich occlusive thrombus**, wavefront necrosis over 3-6 h; old clot resists lysis, so lysis is time-critical."],
      ["ECG criteria", "**1 mm** in all leads except V2-V3 (**2 mm men 40+, 2.5 mm men under 40, 1.5 mm women**); V7-V9 and V3R-V4R **0.5 mm**."],
      ["STEMI equivalents", "Posterior MI, **LBBB/RBBB/paced with ischaemia (Sgarbossa)**, de Winter T waves, hyperacute T; aVR elevation with diffuse depression means left main - no lysis."],
      ["Choice of strategy", "Within 12 h: **primary PCI if wire crossing within 120 min**; otherwise **lysis within 10 min** of diagnosis; 12-48 h PCI if symptomatic; over 48 h stable, no routine PCI."],
      ["Fibrinolytic regimen", "**Tenecteplase 30-50 mg by weight**, half dose at 75+; or SK 1.5 MU over 30-60 min; with aspirin, **clopidogrel 300 mg** and **enoxaparin**."],
      ["Contraindications", "Absolute: prior ICH, **ischaemic stroke 6 months (ACC/AHA 3)**, CNS lesion, trauma or surgery 1 month, GI bleed 1 month, bleeding disorder, **dissection**."],
      ["Assessing lysis", "At **60-90 min**: ST resolution 50% or more, pain relief, AIVR; failure means **immediate rescue PCI**, success means angiography at **2-24 h**."],
      ["Primary PCI", "Radial, DES, prasugrel or ticagrelor, **UFH 70-100 IU/kg**; complete revascularisation index or within 45 days; culprit-only in shock."],
      ["Adjuncts", "Aspirin chewed, SL nitrate if SBP over 90 and no RV infarct, **oxygen only if SpO2 under 90%**, morphine titrated, atorvastatin 80 mg, beta-blocker if no failure."],
      ["Indian system", "**Hub-and-spoke**: TNK at taluk or district spoke, tele-ECG, 108 transfer to PCI hub; Tamil Nadu STEMI, Karnataka Hrudaya Jyothi, PM-JAY cover."],
      ["Prognosis", "ICH with lysis about 1%; **every 30 min delay adds 7.5% relative 1-year mortality**; in-hospital mortality 4-12%."],
      ["Latest updates", "ESC 2023 single ACS guideline; **ACC/AHA 2025** joint ACS guideline; STREAM-2 2024; DanGer Shock 2024 pump in selected shock."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "From chest pain to STEMI diagnosis",
      steps: [
        { label: "Chest pain over 20 min or equivalent symptoms", detail: "Note exact onset time" },
        { label: "12-lead ECG within 10 minutes", detail: "Aspirin 150-300 mg chewed" },
        { label: "ST elevation in 2 contiguous leads?", detail: "1 mm limb leads; V2-V3 2/2.5/1.5 mm", tone: "decision" },
        { label: "Look for equivalents", detail: "V7-V9 posterior, V3R-V4R RV, LBBB with Sgarbossa, de Winter" },
        { label: "Exclude dissection and pericarditis", detail: "Both-arm BP, pulses, PR depression, diffuse ST", tone: "warn" },
        { label: "STEMI confirmed - start the reperfusion clock", detail: "Do not wait for troponin", tone: "good" },
      ],
    },
    {
      kind: "flow",
      heading: "Reperfusion pathway (ESC 2023)",
      steps: [
        { label: "STEMI within 12 hours of onset", detail: "Reperfusion is Class I" },
        { label: "Wire crossing possible within 120 min?", detail: "Estimate from diagnosis, including transfer", tone: "decision" },
        { label: "Yes - primary PCI", detail: "60 min at PCI centre, 90 min if transferred; radial, DES", tone: "good" },
        { label: "No - fibrinolysis within 10 min", detail: "TNK 30-50 mg by weight, half at 75+; clopidogrel 300 mg, enoxaparin" },
        { label: "Assess at 60-90 minutes", detail: "ST resolution 50% or more, pain relief", tone: "decision" },
        { label: "Failed - immediate rescue PCI", detail: "Do not repeat lytic", tone: "warn" },
        { label: "Successful - angiography at 2-24 hours", detail: "Pharmaco-invasive strategy", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "Rescue, pharmaco-invasive and facilitated PCI",
      columns: ["Strategy", "When", "Status"],
      rows: [
        ["Primary PCI", "Instead of lysis, within 120 min of diagnosis", "Preferred"],
        ["Rescue PCI", "Immediately after failed lysis", "Class I"],
        ["Pharmaco-invasive PCI", "2-24 h after successful lysis", "Class I (ESC), 2a (ACC/AHA)"],
        ["Facilitated PCI", "Immediately after full-dose lysis in all", "Harmful (ASSENT-4 PCI)"],
        ["PCI of occluded artery after 48 h", "Stable, asymptomatic", "Not recommended (OAT)"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**STEMI** is ischaemic pain with persistent ST elevation, meaning acute total coronary occlusion.",
          "Diagnosis is on the **ECG**; never wait for troponin before reperfusion.",
          "In India about **6 in 10 ACS** patients have STEMI (CREATE registry).",
          "Indians get MI about **5-10 years earlier** than Western populations.",
          "Most delay in India is **before hospital**: symptoms called gas, transport and cost.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "Plaque rupture exposes tissue factor and forms a **fibrin-rich red thrombus** that occludes the artery.",
          "Necrosis spreads from subendocardium to epicardium over **3-6 hours**.",
          "Fresh clot lyses easily; old clot resists, so **lysis loses power with time**.",
          "Lysis activates platelets, so always add **aspirin, clopidogrel and an anticoagulant**.",
          "**Tenecteplase** is fibrin-specific and given as a single bolus.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "ST elevation **1 mm** in two contiguous leads, except V2-V3.",
          "V2-V3: **2 mm** men 40+, **2.5 mm** men under 40, **1.5 mm** women.",
          "Posterior MI: ST depression V1-V3; confirm **0.5 mm** elevation in V7-V9.",
          "RV infarction: **0.5 mm** elevation in V3R-V4R; record in every inferior MI.",
          "Equivalents: bundle branch block with Sgarbossa criteria, de Winter T waves, hyperacute T waves.",
          "**Killip** I-IV grades heart failure; class IV is cardiogenic shock.",
        ],
      },
      {
        title: "Clinical features and examination",
        points: [
          "Pain over **20 minutes** with sweating, nausea and breathlessness.",
          "Women, elderly and diabetics may have **breathlessness or epigastric pain** only.",
          "Inferior MI causes **bradycardia and hypotension** from vagal reflex.",
          "Hypotension, raised JVP and clear lungs suggest **RV infarction**.",
          "Check both-arm BP and pulses to exclude **aortic dissection** before lysis.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "ECG within **10 minutes**; repeat every 15-30 minutes if non-diagnostic.",
          "Baseline troponin, CBC, creatinine, potassium, glucose and lipids; do not delay reperfusion.",
          "Bedside echo for wall motion, LVEF and mechanical complications.",
          "Lysis success at **60-90 minutes**: ST falls 50% or more, pain eases.",
          "**AIVR** after lysis is a reperfusion sign, not a problem.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "Aspirin **150-300 mg chewed**, SL nitrate if SBP over 90, oxygen only if SpO2 under 90%.",
          "**Primary PCI** if wire crossing is possible within **120 minutes** of diagnosis.",
          "Otherwise **tenecteplase within 10 minutes**, door-to-needle 30 minutes or less.",
          "TNK by weight: **30, 35, 40, 45, 50 mg**; half dose at 75 years or more.",
          "With lysis give **clopidogrel 300 mg** and **enoxaparin**, not ticagrelor or prasugrel.",
          "Start **atorvastatin 80 mg** early.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "Failed lysis: **rescue PCI immediately**; never repeat the lytic.",
          "Successful lysis: **angiography at 2-24 hours** (pharmaco-invasive strategy).",
          "PCI immediately after full-dose lysis (**facilitated PCI**) is harmful.",
          "Primary PCI: radial access, drug-eluting stent, complete revascularisation within 45 days.",
          "12-48 hours: PCI if symptoms persist; over 48 hours stable, no routine PCI.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Age 75+**: half-dose TNK, clopidogrel 75 mg without loading, enoxaparin without IV bolus.",
          "**Pregnancy** and patients on anticoagulants: prefer primary PCI.",
          "**CKD**: TNK unchanged; enoxaparin once daily if eGFR under 30.",
          "**Cocaine** STEMI: avoid acute beta-blockers; use benzodiazepines and nitrates.",
          "District hospital: **hub-and-spoke** with TNK at spoke and transfer to hub.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Intracranial haemorrhage** in about 1% after lysis; more in elderly women of low weight.",
          "Streptokinase causes **hypotension**: slow the drip and raise the legs.",
          "Each **30-minute delay** raises 1-year mortality by about 7.5% relative.",
          "New murmur or collapse: think **mechanical complication**, urgent echo.",
          "Headache or falling GCS after lysis: stop anticoagulant and do **CT head**.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ESC 2023** merged STEMI and NSTE-ACS into one guideline.",
          "**ACC/AHA 2025** replaced the 2013 STEMI guideline; door-to-needle stays 30 minutes.",
          "Both make **complete revascularisation** standard in stable multivessel STEMI.",
          "**STREAM-2 2024** supports half-dose TNK in patients aged 60 or more.",
          "Microaxial pump is **2a** in selected STEMI shock after DanGer Shock.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs in STEMI reperfusion",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Aspirin", "150-300 mg chewed, then 75-100 mg oral daily", "Lifelong", "GI bleed; add PPI if high risk"],
          ["Clopidogrel", "300 mg with lysis (75 mg if over 75), then 75 mg daily", "12 months", "Bleeding; CYP2C19 variability"],
          ["Ticagrelor", "180 mg load, 90 mg twice daily", "12 months (with PCI)", "Dyspnoea, bleeding; not with lysis"],
          ["Tenecteplase", "30-50 mg IV bolus by weight; half at 75+", "Once", "ICH about 1%, bleeding"],
          ["Streptokinase", "1.5 million IU IV over 30-60 min", "Once only", "Hypotension, allergy; never repeat"],
          ["Enoxaparin", "30 mg IV then 1 mg/kg SC 12-hourly (no bolus at 75+)", "Up to 8 days", "Bleeding; once daily if eGFR under 30"],
          ["UFH", "70-100 IU/kg IV at PCI; 60 IU/kg then 12 IU/kg/h with lysis", "24-48 h with lysis", "Bleeding, HIT; aPTT 1.5-2 times"],
          ["Atorvastatin", "80 mg oral daily", "Lifelong", "Myalgia, raised enzymes"],
        ],
      },
      {
        heading: "Contraindications to fibrinolysis",
        columns: ["Absolute", "Relative"],
        rows: [
          ["Any prior intracranial haemorrhage", "TIA in last 6 months"],
          ["Ischaemic stroke in 6 months (ACC/AHA: 3 months)", "Oral anticoagulant therapy"],
          ["Brain tumour or AVM", "Pregnancy or within 1 week postpartum"],
          ["Major trauma, surgery or head injury in 1 month", "BP over 180/110 not controlled"],
          ["GI bleed in 1 month or bleeding disorder", "Active peptic ulcer, liver disease, endocarditis"],
          ["Suspected aortic dissection", "Prolonged or traumatic CPR"],
        ],
      },
      {
        heading: "ST elevation mimics",
        columns: ["Condition", "Key ECG clue", "Key clinical clue"],
        rows: [
          ["Pericarditis", "Diffuse concave ST, PR depression", "Pleuritic pain, rub"],
          ["Early repolarisation", "Notched J point, stable", "Young, no symptoms"],
          ["LV aneurysm", "Persistent ST with Q waves", "Old anterior MI"],
          ["Takotsubo", "Anterior ST, later deep T inversion", "Stressed older woman"],
          ["Aortic dissection", "Normal or inferior ST", "Tearing back pain, pulse deficit"],
        ],
      },
    ],
    remember: [
      "**120-10-90-24**: PCI if within 120 min, else lyse within 10 min, judge at 60-90 min, angiography by 24 h.",
      "**TNK ladder**: 30 under 60 kg, then add 5 mg per 10 kg up to 50 mg; halve at 75.",
      "Lysis treats **red clot** (STEMI), not white clot (NSTE-ACS).",
      "**Inferior MI: V4R first, nitrate later.**",
      "**Rescue is now, pharmaco-invasive is 2-24 h, facilitated is never.**",
      "Streptokinase: **once in a lifetime**, because antibodies neutralise it.",
      "Stroke exclusion: **ESC 6 months, ACC/AHA 3 months**.",
    ],
  },
};

revision["cardiovascular-nste-acs"] = {
  checked: "2026-10",
  updated: [
    "ESC 2023 ACS: early invasive within 24 h downgraded to IIa, 72-hour category removed, no routine P2Y12 pretreatment, prasugrel preferred for PCI, MINOCA pathway with CMR Class I",
    "ACC/AHA 2025 ACS: GRACE over 140 early invasive 2a, invasive in older adults reasonable, ticagrelor monotherapy after 1 month, non-statin at LDL 70 (1) or 55-69 (2a)",
    "SENIOR-RITA (2024): invasive strategy at 75+ reduces non-fatal MI, not cardiovascular death",
    "ESC 2023 0/1-hour and 0/2-hour hs-troponin algorithms with assay-specific cut-offs",
  ],
  master: {
    heading: "Master revision table - NSTE-ACS",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Acute ischaemia **without persistent ST elevation**; **NSTEMI** = dynamic troponin above 99th percentile; **unstable angina** = no troponin rise."],
      ["Epidemiology", "Outnumbers STEMI in the West; **CREATE India about 39% of ACS**, 30-day mortality 3.7%; older, diabetic, CKD; long-term mortality equals STEMI."],
      ["Pathophysiology", "Platelet-rich **non-occlusive white thrombus**, microembolisation, subendocardial ischaemia; **no role for fibrinolysis**."],
      ["MI types (UDMI-4)", "1 atherothrombotic, **2 supply-demand**, 3 sudden death, 4a PCI (5x URL), 4b stent thrombosis, 4c restenosis, 5 CABG (10x URL)."],
      ["ECG", "ST depression, T inversion, transient ST elevation, **Wellens** (critical LAD), aVR elevation with diffuse depression; may be normal - repeat."],
      ["hs-troponin 0/1 h", "Rule out: very low 0 h (pain over 3 h) or low with small delta; rule in: high 0 h or large delta; **hs-cTnT under 5 / 52 ng/L**; observe zone repeat at 3 h."],
      ["Risk scores", "**GRACE over 140 high**; TIMI 7 items; HEART 0-3 low; bleeding: ARC-HBR, PRECISE-DAPT, CRUSADE."],
      ["Timing of angiography", "**Very high: under 2 h** (shock, refractory pain, arrhythmia, mechanical, acute HF, intermittent STE); **high: under 24 h** (NSTEMI, dynamic ST, GRACE over 140); else selective."],
      ["Antiplatelets", "Aspirin 150-300 mg then 75-100; **ticagrelor 180/90 bd or prasugrel 60/10** (after anatomy); clopidogrel with OAC; no routine pretreatment."],
      ["Anticoagulants", "**Fondaparinux 2.5 mg SC** if no early angiography (UFH bolus at PCI), enoxaparin 1 mg/kg bd, UFH; stop after PCI."],
      ["Anti-ischaemic", "Nitrates (not with PDE5i, SBP under 90), oral beta-blocker within 24 h if no HF, **CCB for spasm**, oxygen if SpO2 under 90%."],
      ["MINOCA and type 2 MI", "MINOCA: **CMR Class I**, treat cause (CCB for spasm, conservative SCAD); type 2: **fix trigger, no routine DAPT**."],
      ["Special groups", "Elderly invasive reasonable with dose care; CKD adjust enoxaparin, fondaparinux off under 20; AF: short triple then DOAC + clopidogrel."],
      ["Latest updates", "ESC 2023 early invasive IIa; **ACC/AHA 2025** ticagrelor monotherapy after 1 month; SENIOR-RITA 2024."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "ESC 0/1-hour hs-troponin algorithm",
      steps: [
        { label: "Suspected NSTE-ACS, no ST elevation", detail: "ECG within 10 min; hs-troponin at 0 h" },
        { label: "Very high-risk features?", detail: "Shock, refractory pain, VT/VF, acute HF", tone: "warn" },
        { label: "0 h very low and pain over 3 h?", detail: "hs-cTnT under 5 ng/L", tone: "decision" },
        { label: "Repeat at 1 hour", detail: "Low 0 h with small delta rules out" },
        { label: "High 0 h or large delta - rule in NSTEMI", detail: "hs-cTnT 52 or more, or delta 5 or more", tone: "warn" },
        { label: "Neither - observe zone", detail: "Repeat at 3 h, echo, consider CTCA", tone: "decision" },
        { label: "Ruled out - outpatient evaluation", detail: "NPV over 99%", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Timing of invasive strategy by risk",
      steps: [
        { label: "Not high risk: selective invasive", detail: "Stress imaging or CTCA; angiography if ischaemia", tone: "good" },
        { label: "High risk: angiography within 24 hours", detail: "Confirmed NSTEMI, dynamic ST/T, transient STE, GRACE over 140" },
        { label: "Very high risk: angiography within 2 hours", detail: "Shock, refractory pain, arrhythmia, mechanical, acute HF, intermittent STE", tone: "warn" },
      ],
    },
    {
      kind: "branch",
      heading: "Troponin rise: what kind is it?",
      root: "Troponin above 99th percentile",
      arms: [
        { label: "Rise or fall plus ischaemia, thrombus", tone: "warn", steps: ["Type 1 MI", "DAPT, anticoagulant", "Angiography by risk"] },
        { label: "Rise or fall plus clear trigger", tone: "decision", steps: ["Type 2 MI", "Anaemia, tachycardia, hypotension, hypoxia", "Treat trigger, no routine DAPT"] },
        { label: "Rise without ischaemia", tone: "neutral", steps: ["Acute non-ischaemic injury", "Myocarditis, PE, sepsis"] },
        { label: "Stable raised value, no delta", tone: "good", steps: ["Chronic injury", "CKD, heart failure"] },
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**NSTE-ACS** is acute ischaemia without persistent ST elevation.",
          "**NSTEMI** has a rising or falling troponin; **unstable angina** has none.",
          "In India about **4 in 10 ACS** are NSTE-ACS (CREATE).",
          "Patients are older and more diabetic; long-term mortality equals STEMI.",
          "**Fibrinolysis is never given** in NSTE-ACS.",
        ],
      },
      {
        title: "Causes and pathophysiology",
        points: [
          "**Type 1**: plaque rupture with a platelet-rich, partly occlusive thrombus.",
          "**Type 2**: supply-demand mismatch from anaemia, fast AF, hypotension or hypoxia.",
          "Non-ischaemic injury: myocarditis, PE, sepsis, CKD, heart failure.",
          "About a quarter of NSTEMI have an **occluded artery**, often circumflex.",
          "SCAD causes ACS in **young women**, especially around pregnancy.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "Rest, **new-onset** or **crescendo** angina over 20 minutes.",
          "Atypical in elderly, women, diabetics and CKD: breathlessness or epigastric pain.",
          "Examination is often normal; look for heart failure, new murmur and precipitants.",
          "Ask about **sildenafil or tadalafil** before giving nitrates.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "ECG within **10 minutes**; repeat during pain; a normal ECG does not exclude ACS.",
          "**Wellens T waves** mean critical LAD stenosis; avoid stress testing.",
          "**0/1-hour hs-troponin**: rule out, rule in or observe; cut-offs are assay-specific.",
          "Roche hs-cTnT: under **5** rules out if pain over 3 hours; **52** or more rules in.",
          "Point-of-care troponin: repeat at **3-6 hours**; one early negative is not enough.",
          "Echo for all; CTCA when troponin and ECG are non-diagnostic.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**GRACE over 140** means high risk.",
          "**Very high risk**: shock, refractory pain, VT or VF, mechanical complication, acute HF, intermittent ST elevation.",
          "Very high risk: angiography **within 2 hours**.",
          "High risk (confirmed NSTEMI, dynamic ST, GRACE over 140): **within 24 hours**.",
          "Others: **selective** invasive after non-invasive testing.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "**Aspirin 150-300 mg** chewed, then 75-100 mg daily.",
          "**Ticagrelor 180 mg** then 90 mg twice daily, or **prasugrel 60 mg** after anatomy known.",
          "No routine P2Y12 **pretreatment** if angiography is within 24 hours.",
          "**Fondaparinux 2.5 mg SC** daily if angiography is delayed; add UFH bolus at PCI.",
          "Nitrates for pain, beta-blocker within 24 hours if no heart failure, **atorvastatin 80 mg**.",
          "Oxygen only if SpO2 is **under 90%**.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "PCI for most; **CABG** for left main or diabetic multivessel disease.",
          "Stop parenteral anticoagulant **after PCI** unless another indication exists.",
          "Default **DAPT 12 months**; ACC/AHA 2025 allows ticagrelor alone after 1 month.",
          "PPI for patients on DAPT with high GI bleeding risk.",
          "Discharge with statin, ACE inhibitor, rehab referral; review at **1-2 weeks**.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**MINOCA**: no 50% stenosis; cardiac MRI finds myocarditis, Takotsubo or true MI.",
          "Coronary spasm: use **calcium-channel blockers**, avoid beta-blockers.",
          "**Type 2 MI**: treat the trigger; no routine DAPT or heparin.",
          "**Elderly**: invasive care still helps; avoid prasugrel 10 mg, reduce enoxaparin.",
          "**CKD**: enoxaparin once daily under eGFR 30; avoid fondaparinux under 20.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "Refractory pain or shock means **immediate angiography**.",
          "**Bleeding** raises mortality; use radial access, right doses and PPI.",
          "Watch for arrhythmia, heart failure and contrast kidney injury.",
          "Refer every confirmed NSTEMI to a **PCI-capable centre**.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ESC 2023**: early invasive within 24 hours is now IIa, not I.",
          "ESC 2023 removed the **72-hour** intermediate-risk window.",
          "**ACC/AHA 2025**: ticagrelor monotherapy after 1 month of DAPT is Class 1.",
          "ACC/AHA 2025: add non-statin if LDL stays **70 mg/dL** or more.",
          "**SENIOR-RITA 2024**: invasive care at 75+ reduces non-fatal MI.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs in NSTE-ACS",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Aspirin", "150-300 mg chewed, then 75-100 mg daily", "Lifelong", "GI bleed"],
          ["Ticagrelor", "180 mg, then 90 mg twice daily", "12 months (or monotherapy after 1 month)", "Dyspnoea, bleeding"],
          ["Prasugrel", "60 mg, then 10 mg daily (5 mg if 75+ or under 60 kg)", "12 months", "Not after stroke or TIA"],
          ["Clopidogrel", "300-600 mg, then 75 mg daily", "12 months; choice with OAC", "Variable response"],
          ["Fondaparinux", "2.5 mg SC daily", "Up to 8 days", "UFH bolus at PCI; avoid eGFR under 20"],
          ["Enoxaparin", "1 mg/kg SC 12-hourly", "Up to 8 days or PCI", "Once daily if eGFR under 30"],
          ["Nitroglycerin", "0.4 mg SL x 3; IV 5-10 microgram/min", "Symptomatic", "Hypotension; no PDE5 inhibitors"],
          ["Atorvastatin", "80 mg daily", "Lifelong", "Myalgia"],
        ],
      },
      {
        heading: "Risk groups and timing of angiography (ESC 2023)",
        columns: ["Group", "Features", "Timing"],
        rows: [
          ["Very high", "Shock, refractory pain, VT/VF, mechanical complication, acute HF, intermittent STE", "Under 2 hours"],
          ["High", "Confirmed NSTEMI, dynamic ST/T, transient STE, GRACE over 140", "Under 24 hours"],
          ["Not high", "None of these", "Selective, after non-invasive test"],
        ],
      },
      {
        heading: "Type 1 versus type 2 MI",
        columns: ["Feature", "Type 1", "Type 2"],
        rows: [
          ["Mechanism", "Plaque rupture with thrombus", "Supply-demand mismatch"],
          ["Setting", "Typical ACS", "Sepsis, bleeding, fast AF, surgery"],
          ["Treatment", "DAPT, anticoagulant, angiography", "Correct the trigger"],
          ["Prognosis", "Depends on LV function", "Worse, due to comorbidity"],
        ],
      },
    ],
    remember: [
      "**Troponin is about the delta**, not the single number.",
      "**0/1-hour single-sample rule-out** needs pain onset over 3 hours earlier.",
      "**SHARP-E** very high risk: Shock, Heart failure, Arrhythmia, Refractory pain, Papillary or mechanical, Elevation that comes and goes.",
      "**GRACE over 140** means angiography within 24 hours.",
      "**Fondaparinux plus UFH at PCI** - the OASIS-5 lesson.",
      "**Type 2 MI: fix the trigger, not the platelets.**",
      "**No lysis for NSTE-ACS.**",
    ],
  },
};

revision["cardiovascular-mi-complications"] = {
  checked: "2026-10",
  updated: [
    "ESC 2023 ACS: culprit-only PCI in shock, no routine IABP, MCS bridge and individualised surgical timing for mechanical complications, OAC 3-6 months for LV thrombus",
    "DanGer Shock (2024) and ACC/AHA 2025 ACS: microaxial flow pump 2a in selected STEMI shock",
    "ECLS-SHOCK (2023): no benefit from routine VA-ECMO",
    "ESC 2025 Myocarditis and Pericarditis: Dressler grouped as post-cardiac injury syndrome, aspirin plus colchicine",
  ],
  master: {
    heading: "Master revision table - Complications of MI",
    columns: ["Heading", "What to write"],
    rows: [
      ["Classification", "**DARTH VADER**: Death, Arrhythmia, Rupture, Tamponade, Heart failure, Valve, Aneurysm, Dressler, Embolism, Recurrence."],
      ["Timing", "**Hours**: VF, VT, block; **days 1-3**: pericarditis, AF; **days 3-7**: ruptures; **2 weeks**: LV thrombus; **weeks**: Dressler; **months**: aneurysm, HF, scar VT."],
      ["Epidemiology", "Shock **5-10%** of STEMI (mortality 40-50%); VT/VF 6-8%; AF 5-20%; mechanical **under 1%** but 40-90% mortality; RV involved in up to half of inferior MI."],
      ["Arrhythmias", "Defibrillate VF; **amiodarone** and beta-blocker for recurrent VT; K 4-5, correct Mg; no prophylactic lidocaine; **AIVR benign**."],
      ["AV block", "**Inferior**: nodal, narrow escape, atropine, transient; **anterior**: infranodal, wide escape, pacing; permanent pacing only if block persists **5 days**."],
      ["RV infarction", "Hypotension, raised JVP, **clear lungs**, V4R elevation; **fluids, no nitrates or diuretics**, dobutamine, AV synchrony, reperfusion."],
      ["Cardiogenic shock", "SBP under 90 for 30 min with hypoperfusion; **immediate culprit-only PCI**, norepinephrine, dobutamine; no routine IABP or ECMO; Impella in selected."],
      ["VSR", "Days 3-5, **loud pansystolic murmur with thrill** at left sternal edge, O2 step-up; bridge with IABP/MCS, surgery or device; 40% surgical mortality."],
      ["Papillary muscle rupture", "**Posteromedial** (single PDA supply), small inferior MI, **soft murmur, flash pulmonary oedema**; emergency mitral surgery."],
      ["Free wall rupture", "First 24 h or days 3-7; tamponade, PEA; pericardiocentesis bridge to surgery; **pseudoaneurysm narrow neck - urgent surgery**."],
      ["LV thrombus", "Anterior apical akinesis, 5-15%; contrast echo or CMR; **OAC 3-6 months**, reimage; short triple therapy with clopidogrel."],
      ["Aneurysm", "Large anterior MI, **persistent ST elevation beyond 4-6 weeks**, HF, VT, embolism; aneurysmectomy if refractory."],
      ["Pericarditis and Dressler", "Early (days 1-3) and Dressler (1-6 weeks): **high-dose aspirin plus colchicine**; avoid other NSAIDs and steroids."],
      ["Latest updates", "ESC 2023; **DanGer Shock 2024** pump 2a (ACC/AHA 2025); ECLS-SHOCK 2023 neutral; ESC 2025 pericarditis."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Hypotension after MI: finding the cause",
      steps: [
        { label: "SBP under 90 mmHg after MI", detail: "Check rhythm, perfusion, lactate" },
        { label: "Brady- or tachyarrhythmia?", detail: "Atropine, pacing, cardioversion", tone: "decision" },
        { label: "Raised JVP with clear lungs?", detail: "RV infarct: V4R, fluids, no nitrates", tone: "decision" },
        { label: "New murmur or effusion on echo?", detail: "VSR, papillary rupture, free wall rupture", tone: "warn" },
        { label: "Crackles, low output - LV pump failure", detail: "Cardiogenic shock: immediate PCI, norepinephrine" },
        { label: "Dry, vomited, drug effect or bleeding", detail: "Fluids, stop nitrates, check Hb", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Cardiogenic shock escalation",
      steps: [
        { label: "Immediate culprit-only PCI", detail: "Regardless of time from onset", tone: "good" },
        { label: "Norepinephrine to MAP 65 mmHg", detail: "0.05-0.5 microgram/kg/min" },
        { label: "Add dobutamine for low output", detail: "2.5-10 microgram/kg/min" },
        { label: "Microaxial pump in selected patients", detail: "DanGer Shock; not comatose OHCA", tone: "decision" },
        { label: "No routine IABP or VA-ECMO", detail: "IABP-SHOCK II, ECLS-SHOCK", tone: "warn" },
      ],
    },
    {
      kind: "compare",
      heading: "VSR versus papillary muscle rupture",
      columns: ["Feature", "VSR", "Papillary muscle rupture"],
      rows: [
        ["Infarct", "Anterior or inferior, often large", "Small inferior or posterior"],
        ["Murmur", "Loud, harsh, left sternal edge, thrill", "Soft or absent, apex"],
        ["Picture", "Biventricular failure", "Flash pulmonary oedema"],
        ["Catheter", "O2 step-up RA to PA", "Giant v waves in wedge"],
        ["Treatment", "Bridge then surgery or device closure", "Emergency mitral surgery"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "Complications are **electrical, pump, mechanical, embolic and inflammatory**.",
          "**Cardiogenic shock** occurs in 5-10% of STEMI and kills 40-50%.",
          "Mechanical complications are now **under 1%** but very lethal.",
          "Late presentation in India keeps ruptures and aneurysms common.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "First hours: unstable ischaemic muscle causes **VF**.",
          "Days 3-7: the necrotic wall is **softest**, so ruptures peak.",
          "Weeks: scar forms and may bulge into an **aneurysm**.",
          "RV infarction underfills the LV, so the patient is **preload-dependent**.",
          "RCA supplies the AV node, so inferior MI block is **nodal and transient**.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**DARTH VADER** lists the complications.",
          "**Killip**: I none, II crackles, III pulmonary oedema, IV shock.",
          "**Forrester** uses cardiac index 2.2 and wedge pressure 18 mmHg.",
          "**SCAI stages** A to E grade shock severity.",
        ],
      },
      {
        title: "Clinical features and examination",
        points: [
          "**Loud murmur with thrill** at left sternal edge suggests VSR.",
          "**Soft murmur with flash pulmonary oedema** suggests papillary muscle rupture.",
          "**Sudden PEA** on day 3-5 suggests free wall rupture.",
          "Hypotension, raised JVP and **clear lungs** suggest RV infarction.",
          "Fever and rub at 1-6 weeks suggest **Dressler syndrome**.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**ECG monitoring** for at least 24 hours after STEMI.",
          "**Echo** diagnoses every mechanical complication and LV thrombus.",
          "Contrast echo or **cardiac MRI** finds thrombus best.",
          "V4R ST elevation of **0.5 mm** or more confirms RV infarction.",
          "Persistent ST elevation beyond **4-6 weeks** suggests aneurysm.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "VF: **defibrillate**; recurrent VT: amiodarone, beta-blocker, revascularise.",
          "Keep potassium **4-5 mmol/L**; no prophylactic lidocaine.",
          "Bradycardia: **atropine 0.5-1 mg IV**, then temporary pacing.",
          "RV infarct: **fluids**, no nitrates or diuretics, dobutamine if needed.",
          "Shock: **immediate culprit-only PCI** and norepinephrine.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "VSR: bridge with **IABP or pump**, then surgery or device closure.",
          "Papillary rupture: **emergency mitral surgery**.",
          "Free wall rupture: pericardiocentesis bridge to **emergency surgery**.",
          "LV thrombus: **anticoagulate 3-6 months** and reimage.",
          "Permanent pacing only if block lasts beyond **5 days**.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "Any **new murmur** after MI needs same-day echo.",
          "Anterior MI with Mobitz II or complete block needs **pacing**.",
          "Avoid **NSAIDs and steroids** early after MI; they promote rupture.",
          "Dressler: **aspirin 500-1000 mg** every 6-8 hours plus colchicine.",
          "Stroke after anterior MI: suspect **LV thrombus**.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**Routine IABP** is not recommended in shock.",
          "**DanGer Shock 2024**: microaxial pump lowered mortality in selected shock.",
          "**ECLS-SHOCK 2023**: routine VA-ECMO gave no benefit.",
          "**ESC 2025** calls Dressler a post-cardiac injury syndrome.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs for MI complications",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Amiodarone", "300 mg IV in arrest; 150 mg over 10 min for VT", "Short course", "Hypotension, bradycardia, QT"],
          ["Atropine", "0.5-1 mg IV, max 3 mg", "Bridge to pacing", "Useless in infranodal block"],
          ["Norepinephrine", "0.05-0.5 microgram/kg/min IV", "Titrate to MAP 65", "Arrhythmia, ischaemia"],
          ["Dobutamine", "2.5-10 microgram/kg/min IV", "Titrate to perfusion", "Tachycardia, arrhythmia"],
          ["Warfarin", "Dose to INR 2-3", "3-6 months for LV thrombus", "Bleeding with antiplatelets"],
          ["Aspirin (pericarditis)", "500-1000 mg every 6-8 h", "1-2 weeks then taper", "GI bleed; add PPI"],
          ["Colchicine", "0.5 mg twice daily (once if under 70 kg)", "About 3 months", "Diarrhoea; reduce in CKD"],
        ],
      },
      {
        heading: "Timing of complications",
        columns: ["Time", "Complication"],
        rows: [
          ["Hours to 48 h", "VF, VT, AIVR, bradycardia, AV block"],
          ["Days 1-3", "Shock, RV infarct, pericarditis, AF"],
          ["Days 3-7", "Free wall, septal and papillary muscle rupture"],
          ["Up to 2 weeks", "LV thrombus and embolism"],
          ["Weeks 1-6", "Dressler syndrome"],
          ["Months", "Aneurysm, heart failure, scar VT, depression"],
        ],
      },
      {
        heading: "AV block: inferior versus anterior MI",
        columns: ["Feature", "Inferior MI", "Anterior MI"],
        rows: [
          ["Level", "AV node", "Below the node"],
          ["Escape", "Narrow, 40-60/min", "Wide, under 40/min"],
          ["Atropine", "Often works", "Rarely works"],
          ["Course", "Transient", "Often permanent"],
          ["Prognosis", "Good", "Poor"],
        ],
      },
    ],
    remember: [
      "**DARTH VADER** for the list of complications.",
      "**Hours electrical, days 3-7 ruptures, weeks Dressler, months aneurysm.**",
      "**RV infarct**: fluids yes, nitrates no.",
      "**Posteromedial papillary muscle** has one artery, so it ruptures more.",
      "**Pseudoaneurysm**: narrow neck, pericardial wall, urgent surgery.",
      "**AIVR is good news**; never suppress it.",
      "**Aspirin, not ibuprofen or steroids**, for pericarditis after MI.",
    ],
  },
};

revision["cardiovascular-post-mi-rehab"] = {
  checked: "2026-10",
  updated: [
    "REDUCE-AMI (2024), REBOOT and BETAMI-DANBLOCK (2025): beta-blocker optional when LVEF is preserved; Class I stays at LVEF 40% or less",
    "ACC/AHA 2025 ACS: non-statin at LDL 70 mg/dL or more (1) or 55-69 (2a); routine colchicine uncertain; ticagrelor monotherapy after 1 month",
    "CLEAR SYNERGY (2025): routine colchicine and spironolactone after MI neutral",
    "EMPACT-MI (2024): SGLT2 inhibitor for HF, low LVEF, diabetes or CKD rather than every MI",
    "ESC/EAS 2025 lipid focused update and CSI 2024 dyslipidaemia guideline (LDL under 55, non-HDL under 85, Lp(a) once)",
  ],
  master: {
    heading: "Master revision table - After the MI",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Lifelong drug and lifestyle therapy plus **cardiac rehabilitation** to prevent recurrent MI, stroke, HF and death."],
      ["Burden", "1 in 5 have an event within a year; PURE: few Indians on statins; **rehab uptake under 10%** in India."],
      ["Antiplatelets", "**Aspirin 75-100 mg** lifelong plus ticagrelor, prasugrel or clopidogrel for **12 months**; shorten if high bleeding risk."],
      ["Lipids", "**Atorvastatin 40-80 or rosuvastatin 20-40**; LDL **under 55 mg/dL and 50% fall**; ezetimibe then PCSK9i; lipids at 4-6 weeks."],
      ["ACE inhibitor", "Class I if LVEF 40% or less, HF, diabetes, HT, CKD; reasonable for all; ARB if cough."],
      ["Beta-blocker", "**Class I at LVEF 40% or less**; benefit at 41-49%; **optional at 50%+** (REDUCE-AMI, REBOOT)."],
      ["MRA and SGLT2i", "**Eplerenone** if LVEF 40% or less with HF or diabetes; **SGLT2i** for HF, low LVEF, diabetes, CKD."],
      ["Other", "Colchicine 0.5 mg optional (CLEAR SYNERGY neutral); **influenza vaccine**; PPI with DAPT if GI risk; SL nitrate."],
      ["Rehab phases", "**I inpatient**, **II supervised 12 weeks (36 sessions)**, **III lifelong**; FITT 3-5 days, 40-60% HRR, 20-60 min."],
      ["Lifestyle", "Tobacco cessation (varenicline, quitline 1800-112-356), Indian heart-healthy diet, salt under 5 g, 150-300 min/week."],
      ["Return to life", "Sex at **1 week** (two flights of stairs); car 1-4 weeks (DVLA); desk work 2-4 weeks; no nitrate with PDE5i."],
      ["Depression", "1 in 5; **PHQ-2 then PHQ-9**; sertraline or escitalopram; avoid tricyclics."],
      ["Follow-up", "**1-2 weeks**, lipids 4-6 weeks, echo 6-12 weeks if LVEF low, 3-monthly year 1, then 6-12 monthly."],
      ["Latest updates", "**REBOOT 2025**, CLEAR SYNERGY 2025, EMPACT-MI 2024, ACC/AHA 2025 LDL thresholds, CSI 2024."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Discharge checklist after MI",
      steps: [
        { label: "Echo before discharge: LVEF", detail: "Decides beta-blocker, MRA, SGLT2i, ICD review" },
        { label: "Antiplatelets: aspirin plus P2Y12", detail: "12 months default; assess bleeding risk", tone: "decision" },
        { label: "High-intensity statin", detail: "Atorvastatin 80 mg; LDL under 55 mg/dL" },
        { label: "ACE inhibitor, beta-blocker as indicated", detail: "Beta-blocker Class I if LVEF 40% or less" },
        { label: "LVEF 40% or less, HF or diabetes?", detail: "Add eplerenone and SGLT2 inhibitor", tone: "decision" },
        { label: "Tobacco, diet, vaccine, depression screen", detail: "Varenicline, PHQ-2, influenza vaccine" },
        { label: "Rehab referral and review at 1-2 weeks", detail: "Lipids 4-6 weeks", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "LDL lowering ladder after MI",
      steps: [
        { label: "High-intensity statin", detail: "Atorvastatin 40-80 or rosuvastatin 20-40 mg", tone: "good" },
        { label: "Add ezetimibe 10 mg", detail: "If LDL 55 mg/dL or more at 4-6 weeks" },
        { label: "Add PCSK9 inhibitor or inclisiran", detail: "If still above target" },
        { label: "Bempedoic acid if statin intolerant", detail: "ESC/EAS 2025 update", tone: "decision" },
        { label: "Recurrent event within 2 years", detail: "Target under 40 mg/dL", tone: "warn" },
      ],
    },
    {
      kind: "compare",
      heading: "Cardiac rehabilitation phases",
      columns: ["Phase", "When", "What"],
      rows: [
        ["I", "In hospital", "Mobilise, educate, refer"],
        ["II", "1-3 weeks after discharge, 12 weeks", "Supervised exercise, risk factors, psychology"],
        ["III", "Lifelong", "Self-directed exercise and adherence"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**Secondary prevention** is lifelong therapy that stops a second MI.",
          "About **1 in 5** survivors have another event within a year.",
          "**Cardiac rehabilitation** is Class I, but under 10% in India get it.",
          "Up to half stop a drug within a year; **check adherence** every visit.",
        ],
      },
      {
        title: "Causes and risk factors",
        points: [
          "Continued **tobacco** use doubles the risk of reinfarction.",
          "Each 39 mg/dL fall in **LDL** cuts major events by about 22%.",
          "Diabetes, hypertension, CKD, depression and poverty raise recurrence.",
          "Measure **lipoprotein(a)** once; it is often high in South Asians.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**Echo** before discharge; repeat at 6-12 weeks if LVEF 40% or less.",
          "**Lipids at 4-6 weeks** after starting or changing therapy.",
          "Creatinine and potassium **1-2 weeks** after ACE inhibitor or MRA.",
          "HbA1c in all; exercise test before phase II or heavy work.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "**Aspirin 75-100 mg** lifelong plus a P2Y12 inhibitor for 12 months.",
          "**Atorvastatin 80 mg** or rosuvastatin 20-40 mg for everyone.",
          "LDL target **under 55 mg/dL** and at least 50% reduction.",
          "**ACE inhibitor** such as ramipril, titrated to 5 mg twice daily.",
          "**Beta-blocker** is essential when LVEF is 40% or less.",
          "Influenza vaccine, PPI if GI risk, sublingual nitrate to carry.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "LDL above target: add **ezetimibe**, then a PCSK9 inhibitor.",
          "LVEF 40% or less with HF or diabetes: add **eplerenone**.",
          "HF, low LVEF, diabetes or CKD: add an **SGLT2 inhibitor**.",
          "**Colchicine 0.5 mg** is optional; CLEAR SYNERGY was neutral.",
          "Preserved LVEF: beta-blocker is **optional** after REDUCE-AMI and REBOOT.",
        ],
      },
      {
        title: "Cardiac rehabilitation and lifestyle",
        points: [
          "**Phase I** in hospital, **phase II** supervised for 12 weeks, **phase III** lifelong.",
          "Exercise **3-5 days a week**, 20-60 minutes, moderate intensity, plus resistance work.",
          "On beta-blockers use **perceived exertion** (Borg 11-14) or the talk test.",
          "**Yoga-CaRe** improved quality of life in Indian patients.",
          "Stop tobacco with **varenicline** or NRT; quitline 1800-112-356.",
          "Salt **under 5 g**, avoid trans fats, more pulses, vegetables and whole grains.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Diabetes**: SGLT2 inhibitor or GLP-1 receptor agonist regardless of HbA1c.",
          "**CKD**: watch potassium and adjust statin and antithrombotic doses.",
          "**On anticoagulant**: OAC plus clopidogrel, then OAC alone after 12 months.",
          "**Young MI**: check for familial hypercholesterolaemia and Lp(a); screen relatives.",
          "Low-cost **Jan Aushadhi** generics improve adherence.",
        ],
      },
      {
        title: "Return to normal life",
        points: [
          "**Sex** after about 1 week if two flights of stairs cause no symptoms.",
          "No **nitrate** within 24 hours of sildenafil or 48 hours of tadalafil.",
          "**Car driving** after 1-4 weeks (DVLA); heavy vehicles after 6 weeks and testing.",
          "**Desk work** after 2-4 weeks; heavy work after an exercise test.",
          "Low-risk patients may **fly** after about 3 days.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "Screen for **depression** with PHQ-2; treat with sertraline or escitalopram.",
          "Review at **1-2 weeks**, then 3-monthly in year one.",
          "Rest pain, syncope or heart failure after discharge needs **urgent referral**.",
          "Never stop **DAPT** for dental work without cardiology advice.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**REBOOT 2025**: no benefit from beta-blockers when LVEF is over 40%.",
          "**ACC/AHA 2025**: add non-statin if LDL stays 70 mg/dL or more.",
          "**EMPACT-MI 2024**: SGLT2 inhibitors not routine for every MI.",
          "**CSI 2024**: LDL under 55 and non-HDL under 85 for very high risk.",
        ],
      },
    ],
    tables: [
      {
        heading: "Discharge drugs after MI",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Aspirin", "75-100 mg oral daily", "Lifelong", "GI bleed"],
          ["Ticagrelor", "90 mg oral twice daily", "12 months", "Dyspnoea, bleeding"],
          ["Atorvastatin", "40-80 mg oral daily", "Lifelong", "Myalgia, raised enzymes"],
          ["Ezetimibe", "10 mg oral daily", "If LDL above target", "Well tolerated"],
          ["Ramipril", "2.5 mg twice daily to 5 mg twice daily", "Lifelong", "Cough, hyperkalaemia, angioedema"],
          ["Metoprolol succinate", "25-200 mg oral daily", "Lifelong if LVEF 40% or less", "Bradycardia, fatigue"],
          ["Eplerenone", "25-50 mg oral daily", "If LVEF 40% or less with HF or diabetes", "Hyperkalaemia"],
          ["Dapagliflozin", "10 mg oral daily", "If HF, diabetes or CKD", "Genital infection, dehydration"],
          ["Varenicline", "Titrate to 1 mg twice daily", "12 weeks", "Nausea, vivid dreams"],
        ],
      },
      {
        heading: "Beta-blocker by LVEF",
        columns: ["LVEF", "Recommendation"],
        rows: [
          ["40% or less", "Class I, lifelong"],
          ["41-49%", "Recommended (2025 meta-analysis)"],
          ["50% or more", "Optional unless angina, arrhythmia or hypertension"],
        ],
      },
      {
        heading: "Targets after MI",
        columns: ["Parameter", "Target"],
        rows: [
          ["LDL", "Under 55 mg/dL and 50% fall (under 40 if recurrent in 2 years)"],
          ["Non-HDL", "Under 85 mg/dL"],
          ["BP", "Under 130/80 mmHg"],
          ["HbA1c", "About 7%"],
          ["Exercise", "150-300 minutes a week"],
          ["Tobacco", "Zero, including smokeless"],
        ],
      },
    ],
    remember: [
      "**ABCDE**: Antiplatelet and ACE inhibitor, Beta-blocker and BP, Cholesterol and Cigarettes, Diet and Diabetes, Education and Exercise.",
      "**LDL under 55 and halve it.**",
      "**Beta-blocker: must at 40% or less, maybe at 50% or more.**",
      "**Lipids at 4-6 weeks, echo at 6-12 weeks.**",
      "**36 sessions in 12 weeks** for phase II.",
      "**Two flights of stairs** means ready for sex.",
      "**Sertraline or escitalopram**, never tricyclics, after MI.",
    ],
  },
};

export default revision;
