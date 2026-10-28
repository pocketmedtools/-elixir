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

export default revision;
