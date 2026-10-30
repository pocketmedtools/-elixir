import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-hypoventilation-sleep": {
    checked: "2026-10",
    updated: [
      "ICSD-3-TR (2023) classification of sleep-related breathing disorders",
      "AASM Scoring Manual v3 (2023): Cheyne-Stokes cycle 40 s or more; sleep hypoventilation rule",
      "AASM 2025 guideline on treatment of central sleep apnoea in adults",
      "ADVENT-HF (2024): ASV neutral in HFrEF; SERVE-HF caution kept",
      "Tirzepatide approved for OSA with obesity (US FDA 2024, SURMOUNT-OSA)",
      "European Insomnia Guideline update (ESRS 2023): CBT-I first line",
    ],
    master: {
      heading: "OHS and central sleep apnoea on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "OHS: BMI 30 or more + awake PaCO2 45 mmHg or more + other causes excluded; CSA: 5/h or more central events, over 50% of events"],
        ["Epidemiology", "8-20% of obese sleep-clinic patients; 90% have OSA; CSB in 25-40% of HFrEF; NFHS-5 obesity rising"],
        ["Pathophysiology OHS", "Low chest-wall compliance, blunted drive, leptin resistance, overnight CO2 rise with bicarbonate retention"],
        ["Pathophysiology CSA", "High loop gain, PaCO2 near apnoeic threshold, long circulation time (45-90 s cycles)"],
        ["Classification", "ICSD-3-TR: OSA, CSA syndromes, sleep hypoventilation disorders, sleep hypoxaemia"],
        ["Clinical", "Snoring, sleepiness, morning headache, oedema; CSA: PND, insomnia, waxing-waning breathing"],
        ["Screen", "Serum bicarbonate under 27 mmol/L rules out OHS"],
        ["Confirm", "Awake ABG PaCO2 45 or more; polysomnography with CO2; echo, TSH, spirometry, CBC"],
        ["Stable OHS", "CPAP first if AHI 30 or more; BPAP-ST if pure hypoventilation or CPAP fails; weight loss 25-30%"],
        ["Acute", "Controlled O2 88-92%, NIV with EPAP 8 or more, discharge on NIV, titrate within 2-3 months"],
        ["CSA treatment", "Optimise HF; CPAP; no ASV if LVEF 45% or less (SERVE-HF); phrenic stimulation, O2, acetazolamide"],
        ["Complications", "Pulmonary hypertension (about 50%), cor pulmonale, polycythaemia, 23% 18-month mortality untreated"],
        ["Follow-up", "4-8 weeks: device download and ABG; then 6-12 monthly; driving advice"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing OHS in an obese patient",
        steps: [
          { label: "Obese (BMI 30+) with OSA symptoms or low awake SpO2", tone: "neutral" },
          { label: "Serum bicarbonate", detail: "Under 27 mmol/L: OHS unlikely, treat OSA", tone: "decision" },
          { label: "ABG if HCO3- 27+ or high suspicion", detail: "PaCO2 45 mmHg or more awake", tone: "decision" },
          { label: "Exclude COPD, neuromuscular, chest wall, thyroid, drugs", detail: "Spirometry, TSH, CXR, supine VC", tone: "warn" },
          { label: "Polysomnography with CO2", detail: "AHI and obstructive vs central split", tone: "neutral" },
          { label: "OHS confirmed: start PAP", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder in stable OHS",
        steps: [
          { label: "Weight loss, avoid sedatives and alcohol", detail: "Target 25-30% sustained loss", tone: "neutral" },
          { label: "CPAP if severe OSA (AHI 30+)", detail: "Use 4 h or more nightly; ABG at 4-8 weeks", tone: "good" },
          { label: "BPAP-ST or AVAPS", detail: "Pure hypoventilation or PaCO2 still 45+ on CPAP", tone: "decision" },
          { label: "Add oxygen to PAP", detail: "Only if SpO2 under 88-90% on optimal pressure", tone: "warn" },
          { label: "Bariatric surgery or GLP-1-based drugs", detail: "Tirzepatide 10-15 mg weekly", tone: "neutral" },
        ],
      },
      {
        kind: "compare",
        heading: "OSA vs OHS vs CSA with Cheyne-Stokes",
        columns: ["Feature", "OSA", "OHS", "CSA-CSB"],
        rows: [
          ["Awake PaCO2", "Normal", "45 mmHg or more", "Low-normal"],
          ["Bicarbonate", "Under 27", "27 or more", "Normal or low"],
          ["Effort in apnoea", "Present", "Mixed", "Absent"],
          ["Typical patient", "Obese snorer", "Morbid obesity, oedema", "HFrEF, AF, stroke"],
          ["Treatment", "CPAP", "CPAP or BPAP-ST", "Optimise HF, CPAP; no ASV if EF 45% or less"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**OHS** is BMI 30 or more plus awake PaCO2 45 mmHg or more, other causes excluded.",
            "About **90%** of OHS patients also have OSA, mostly severe.",
            "**Central sleep apnoea** means apnoea without breathing effort; 5 or more per hour and over half of events.",
            "**Cheyne-Stokes breathing** affects 25-40% of patients with HFrEF.",
            "OHS is often missed and mislabelled as **COPD**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Fat lowers **chest-wall compliance** and raises the work of breathing.",
            "CO2 builds up over the night and the kidney **retains bicarbonate**.",
            "Retained bicarbonate **blunts the CO2 drive**, so daytime hypercapnia sets in.",
            "In heart failure, **J-receptor hyperventilation** keeps PaCO2 near the apnoeic threshold.",
            "Long **circulation time** gives Cheyne-Stokes cycles of 45-90 seconds.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "OHS: snoring, **sleepiness**, morning headache, breathlessness and leg oedema.",
            "Low awake SpO2 and signs of **cor pulmonale** in an obese patient.",
            "CSA: **PND, insomnia** and waxing-waning breathing noticed by the partner.",
            "Ask about **opioids, benzodiazepines and alcohol**, and about driving.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Bicarbonate under 27 mmol/L** rules out OHS in moderate suspicion.",
            "**Awake ABG** confirms hypercapnia; oximetry alone cannot diagnose OHS.",
            "**Polysomnography with CO2** monitoring; home tests are not enough.",
            "Exclude mimics with **spirometry, TSH, CBC, CXR**; echo for pulmonary pressure and LVEF.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**CPAP first** in stable OHS with severe OSA (Pickwick trial).",
            "**BPAP-ST** for pure hypoventilation or persistent hypercapnia on CPAP.",
            "Aim for **25-30% weight loss**; tirzepatide or bariatric surgery help.",
            "Use PAP **4 hours or more** on 70% of nights.",
            "Never use **oxygen alone**; no medroxyprogesterone or acetazolamide in OHS.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Controlled oxygen to **SpO2 88-92%** via Venturi mask.",
            "**NIV** for acidosis, with EPAP 8 cmH2O or more to splint the airway.",
            "Nurse **semi-upright**; expect a difficult airway if intubation is needed.",
            "**Discharge on NIV** and titrate in a sleep lab within 2-3 months.",
          ],
        },
        {
          title: "Central sleep apnoea care",
          points: [
            "First **optimise heart failure** therapy and consider CRT.",
            "**CPAP** is the first device; CANPAP showed benefit only if AHI fell under 15.",
            "**No ASV** in HFrEF with LVEF 45% or less (SERVE-HF mortality).",
            "Phrenic nerve stimulation, low-flow oxygen and **acetazolamide** are specialist options.",
            "Altitude periodic breathing: **acetazolamide 125 mg twice daily** and slow ascent.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review at **4-8 weeks** with device download and repeat ABG or bicarbonate.",
            "Then every **6-12 months**: weight, BP, sugar, haematocrit, adherence.",
            "Advise **no driving** while sleepy; document advice for Form 1-A drivers.",
            "Persistent sleepiness on good PAP: consider **narcolepsy** and do MSLT.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AASM 2025** CSA treatment guideline keeps ASV off-limits when LVEF is 45% or less.",
            "**ADVENT-HF 2024** found ASV neutral, not harmful, with a different device.",
            "**Tirzepatide** became the first drug approved for OSA in obesity (FDA 2024).",
            "**ICSD-3-TR 2023** and AASM Scoring Manual v3 updated definitions.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs and devices",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["CPAP", "5-20 cmH2O via mask", "Nightly, lifelong", "Leak, dry nose; fails in pure hypoventilation"],
            ["BPAP-ST", "EPAP 8-10, PS 8-10, backup 12-16/min", "Nightly", "Asynchrony, leak"],
            ["Acetazolamide", "250 mg at night (CSA); 125 mg twice daily (altitude)", "Short courses", "Paraesthesia, acidosis; avoid in hypercapnic OHS"],
            ["Tirzepatide", "2.5 mg SC weekly up to 10-15 mg", "Long term", "Nausea, pancreatitis; not with MEN2"],
            ["Modafinil", "100-200 mg each morning", "Long term", "Insomnia, headache, reduces OCP effect"],
          ],
        },
        {
          heading: "Cut-offs to remember",
          columns: ["Item", "Cut-off"],
          rows: [
            ["OHS PaCO2", "45 mmHg or more awake"],
            ["Bicarbonate screen", "Under 27 mmol/L rules out"],
            ["Sleep hypoventilation", "Over 55 mmHg for 10 min"],
            ["CSA", "5/h or more, over 50% central"],
            ["Cheyne-Stokes", "Cycle 40 s or more, 3+ cycles"],
            ["ASV forbidden", "LVEF 45% or less with predominant CSA"],
          ],
        },
        {
          heading: "Differential of daytime hypercapnia",
          columns: ["Cause", "Clue", "Test"],
          rows: [
            ["OHS", "Morbid obesity, OSA", "ABG, polysomnography"],
            ["COPD", "Smoking, biomass", "FEV1/FVC under 0.70"],
            ["Neuromuscular", "Orthopnoea, weakness", "Supine VC fall over 20-25%"],
            ["Kyphoscoliosis or post-TB", "Deformity, old TB", "CXR, restriction"],
            ["Hypothyroidism", "Myxoedema", "TSH"],
          ],
        },
      ],
      remember: [
        "OHS = **Obesity + Hypercapnia awake + Sleep breathing disorder**, others excluded.",
        "**27 and 45**: bicarbonate screen and PaCO2 cut-off.",
        "**CPAP first** with severe OSA; BPAP for pure hypoventilation.",
        "**Oxygen alone harms** OHS; target 88-92%.",
        "**SERVE-HF**: no ASV when EF is 45% or less.",
        "Cheyne-Stokes cycle is long because **circulation is slow**.",
      ],
    },
  },
  "respiratory-pulmonary-rehab-home-oxygen": {
    checked: "2026-10",
    updated: [
      "ATS Clinical Practice Guideline on Pulmonary Rehabilitation (2023): COPD, post-hospitalisation, ILD, PH; telerehab acceptable",
      "GOLD 2025: PR for groups B and E and within 4 weeks after exacerbation",
      "ATS Home Oxygen guideline (2020) retained; ambulatory O2 conditional for severe exertional hypoxaemia",
      "BTS 2022 clinical statement on air travel",
      "NP-NCD operational guidelines (2023) include chronic respiratory diseases",
    ],
    master: {
      heading: "Pulmonary rehabilitation and LTOT on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["PR definition", "Assessment-based exercise, education and behaviour change programme (ATS/ERS 2013)"],
        ["PR indications", "COPD mMRC 2+, within 3-4 weeks after exacerbation, ILD, post-TB, bronchiectasis, PH, peri-surgery"],
        ["PR contraindications", "Unstable angina, recent MI, severe AS, uncontrolled arrhythmia, cannot participate"],
        ["PR prescription", "6-12 weeks, 2+ supervised sessions/week; endurance 60-80% peak or Borg 4-6; resistance 6-12 reps"],
        ["Other components", "Pursed-lip breathing, education, inhaler technique, action plan, nutrition, psychological support"],
        ["PR evidence", "6MWD gain about 44 m (MID 30 m), better QoL, fewer readmissions; no FEV1 or mortality change"],
        ["LTOT criteria", "PaO2 55 or less, or 56-59 with cor pulmonale, PH or haematocrit over 55%; two ABGs 3 weeks apart"],
        ["LTOT trials", "NOTT 1980 and MRC 1981 survival benefit; LOTT 2016 and INOX 2020 no benefit in moderate/nocturnal"],
        ["Prescription", "Concentrator, cannula 1-4 L/min, SpO2 90% or more, 15 h/day or more, +1 L/min in sleep/exertion"],
        ["Ambulatory O2", "LTOT users who go out; ILD with exertional desaturation; walk-test benefit needed"],
        ["Safety", "No smoking, no flame within 2 m, fire breaks, water-based gel, trip hazards, CO2 narcosis"],
        ["Follow-up", "LTOT review at 3 months then 6-12 monthly; repeat 6MWT and CAT after PR"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Assessing a patient for long-term oxygen",
        steps: [
          { label: "Stable chronic lung disease, 8+ weeks after exacerbation", tone: "neutral" },
          { label: "Resting SpO2 92% or less on air?", detail: "Or 94% or less with cor pulmonale or polycythaemia", tone: "decision" },
          { label: "Two room-air ABGs at least 3 weeks apart", tone: "neutral" },
          { label: "PaO2 55 or less, or 56-59 with end-organ effects", detail: "Oedema, PH, haematocrit over 55%", tone: "decision" },
          { label: "Smoking risk assessment", detail: "Generally withhold while smoking continues", tone: "warn" },
          { label: "Prescribe LTOT 15+ h/day to SpO2 90%+", detail: "Recheck ABG on oxygen; review at 3 months", tone: "good" },
        ],
      },
      {
        kind: "flow",
        heading: "Running a pulmonary rehabilitation programme",
        steps: [
          { label: "Referral: mMRC 2+, post-exacerbation, ILD, post-TB", tone: "neutral" },
          { label: "Assessment: 6MWT, CAT, ECG, SpO2, nutrition, mood", tone: "neutral" },
          { label: "Exclude unstable cardiac disease", tone: "warn" },
          { label: "6-12 weeks: endurance + resistance + education", detail: "Borg 4-6; 2 supervised sessions/week", tone: "neutral" },
          { label: "Reassess 6MWT and CAT", detail: "MID 30 m and 2 points", tone: "decision" },
          { label: "Home maintenance plan; repeat after decline", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Who gets which oxygen",
        root: "Chronic lung disease with low SpO2",
        arms: [
          { label: "Severe resting hypoxaemia", tone: "good", steps: ["PaO2 55 or less, or 56-59 with cor pulmonale", "LTOT 15+ h/day", "Ambulatory if mobile"] },
          { label: "Moderate resting desaturation", tone: "warn", steps: ["SpO2 89-93%", "No LTOT (LOTT)", "PR and optimise therapy"] },
          { label: "Nocturnal only", tone: "warn", steps: ["Exclude OSA/OHS", "No nocturnal O2 (INOX)"] },
          { label: "Exertional only", tone: "decision", steps: ["Walk test on air and oxygen", "Ambulatory O2 if benefit; stronger case in ILD"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Pulmonary rehabilitation** combines exercise training, education and behaviour change after assessment.",
            "**LTOT** means home oxygen for at least 15 hours a day.",
            "India has about **55 million COPD** patients and many post-TB survivors.",
            "Fewer than **5%** of eligible patients ever receive PR.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "PR for **mMRC 2 or more**, after exacerbation, ILD, post-TB and bronchiectasis.",
            "Start PR **within 3-4 weeks** after discharge, not during admission.",
            "Contraindications: **unstable angina**, recent MI, severe aortic stenosis, uncontrolled arrhythmia.",
            "Age, smoking and oxygen use are **not barriers** to PR.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Training builds **muscle mitochondria**, so less lactate and less ventilation at the same work.",
            "Slower breathing reduces **dynamic hyperinflation**; FEV1 does not change.",
            "Chronic hypoxia causes **pulmonary vasoconstriction** and cor pulmonale; oxygen slows this.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**6-12 weeks**, two supervised sessions a week plus home exercise.",
            "Endurance at **Borg 4-6** for 20-30 minutes; resistance 6-12 repetitions.",
            "Teach **pursed-lip breathing**, inhaler technique and an action plan.",
            "Add **nutrition** if BMI under 21 and screen for depression.",
            "Home programmes and **telerehab** work as well as centre-based PR.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Screen with **SpO2**; refer for ABG if 92% or less when stable.",
            "**Two ABGs** at least 3 weeks apart, 8 weeks after any exacerbation.",
            "**6MWT** before and after PR; MID about 30 m.",
            "Walk test on air and oxygen for **ambulatory oxygen**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "LTOT if **PaO2 55 or less**, or 56-59 with oedema, PH or haematocrit over 55%.",
            "Flow **1-4 L/min** by cannula to reach SpO2 90% or more.",
            "Add **1 L/min** during sleep and exertion if CO2 allows.",
            "**No LTOT** for moderate (LOTT) or nocturnal-only desaturation (INOX).",
            "Breathless but not hypoxaemic: **fan**, not oxygen.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Smoking** with oxygen causes facial burns and house fires.",
            "Keep oxygen **2 m from flames**: gas stove, diya, agarbatti.",
            "Drowsiness or morning headache suggests **CO2 retention**.",
            "Long tubing causes **falls** in the elderly.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review LTOT at **3 months**, then every 6-12 months.",
            "Check the **hour meter** for 15 h/day use.",
            "Stop oxygen started at discharge if criteria are **no longer met**.",
            "Link to **NP-NCD** clinics and NTEP post-TB follow-up.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ATS 2023** PR guideline backs PR in COPD, ILD and PH, and telerehab.",
            "**GOLD 2025** keeps PR for groups B and E and after exacerbation.",
            "ATS and BTS **differ** on ambulatory oxygen without resting hypoxaemia.",
          ],
        },
      ],
      tables: [
        {
          heading: "Oxygen and support prescriptions",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Oxygen (concentrator)", "Nasal cannula 1-4 L/min to SpO2 90%+", "15 h/day or more, lifelong", "CO2 retention, nasal dryness, fire"],
            ["Ambulatory oxygen", "Portable cylinder or pulse POC", "During activity", "Pulse setting not equal to L/min"],
            ["Nicotine patch", "21 mg/24 h plus gum 2-4 mg", "8-12 weeks", "Skin irritation, vivid dreams"],
            ["Varenicline", "0.5 mg daily, titrate to 1 mg twice daily", "12 weeks", "Nausea; halve if eGFR under 30"],
            ["Nutritional supplement", "500-1000 kcal/day extra", "Until BMI over 21", "Bloating; watch sugars"],
          ],
        },
        {
          heading: "LTOT criteria and trials",
          columns: ["Situation", "Decision", "Trial"],
          rows: [
            ["PaO2 55 or less", "LTOT 15+ h/day", "NOTT, MRC"],
            ["PaO2 56-59 with cor pulmonale or Hct over 55%", "LTOT", "GOLD 2025"],
            ["SpO2 89-93% at rest", "No LTOT", "LOTT 2016"],
            ["Nocturnal desaturation only", "No nocturnal oxygen", "INOX 2020"],
            ["Exertional desaturation in ILD", "Ambulatory oxygen", "AmbOx 2018"],
          ],
        },
        {
          heading: "PR outcome measures",
          columns: ["Measure", "Tests", "MID"],
          rows: [
            ["6MWT", "Functional capacity", "About 30 m"],
            ["ISWT", "Maximal capacity", "About 35-50 m"],
            ["CAT", "COPD health status", "2 points"],
            ["SGRQ", "Quality of life", "4 units"],
          ],
        },
      ],
      remember: [
        "LTOT = **55 / 59 / 15**.",
        "**Two ABGs, 3 weeks apart, 8 weeks stable** before LTOT.",
        "PR **within 4 weeks** of discharge, not during admission.",
        "PR fixes **muscles, not FEV1**.",
        "**LOTT and INOX** say no to moderate or nocturnal-only oxygen.",
        "**No smoking, no flame within 2 m**.",
        "Fan, not oxygen, for **breathlessness without hypoxaemia**.",
      ],
    },
  },
  "respiratory-preop-pulmonary": {
    checked: "2026-10",
    updated: [
      "AHA/ACC 2024 perioperative cardiovascular guideline for non-cardiac surgery (cardiac side of assessment)",
      "ESAIC 2023 neuromuscular block guideline: quantitative monitoring, TOF ratio 0.9 or more",
      "Multisociety GLP-1 RA perioperative guidance 2024: continue most, 24-hour clear liquids",
      "GINA 2025 and GOLD 2025 perioperative advice",
    ],
    master: {
      heading: "Pre-operative pulmonary evaluation on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "PPCs: atelectasis, pneumonia, respiratory failure, bronchospasm, aspiration, effusion, COPD exacerbation"],
        ["Burden", "About 5% overall, 20-40% upper abdominal/thoracic; mortality 19.5% with PPC vs 0.5% (ARISCAT)"],
        ["Patient risks", "Age over 60, ASA 2+, COPD, CHF, dependence, albumin under 3.5, low SpO2, recent infection, anaemia, smoking, OSA"],
        ["Procedure risks", "Upper abdominal/thoracic/AAA, over 2-3 h, emergency, GA, residual blockade"],
        ["Not major", "Obesity alone, controlled asthma"],
        ["Mechanism", "FRC falls 20% under GA, diaphragm dysfunction, pain splinting, poor cough, opioids"],
        ["Scores", "ARISCAT (under 26 / 26-44 / 45+); STOP-BANG (0-2 / 3-4 / 5-8)"],
        ["Tests", "No routine spirometry or CXR; spirometry for resection or unexplained dyspnoea; albumin, Hb"],
        ["Lung resection", "ppo = value x (1 - segments/19); 60% and 30%; stair 22 m, SWT 400 m; VO2max 20 and 10"],
        ["Optimise", "Stop smoking 4-8 weeks, inhalers continued, steroid if asthma FEV1 under 80% best, treat infection, prehab"],
        ["Intra-op", "6-8 mL/kg PBW, PEEP, low FiO2, TOF 0.9 or more, regional analgesia, laparoscopy"],
        ["Post-op", "I COUGH, early mobilisation, multimodal analgesia, CPAP for OSA, selective NG, VTE prophylaxis"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Pre-operative pulmonary assessment in OPD",
        steps: [
          { label: "History: exercise tolerance, lung disease, smoking, infection", tone: "neutral" },
          { label: "Examination and resting SpO2", tone: "neutral" },
          { label: "Score ARISCAT and STOP-BANG", tone: "decision" },
          { label: "Active infection or exacerbation?", detail: "Postpone elective surgery about 4 weeks", tone: "warn" },
          { label: "Selective tests only", detail: "Spirometry if unexplained dyspnoea; albumin; bicarbonate if obese", tone: "neutral" },
          { label: "Optimise and write risk with recommendations", detail: "Smoking, inhalers, prehab, CPAP plan", tone: "good" },
        ],
      },
      {
        kind: "flow",
        heading: "ACCP 2013 lung resection algorithm",
        steps: [
          { label: "Cardiac risk (ThRCRI)", detail: "Cardiology if over 1.5", tone: "neutral" },
          { label: "Measure FEV1 and DLCO; calculate ppo values", detail: "x (1 - segments/19)", tone: "neutral" },
          { label: "Both over 60%: proceed", tone: "good" },
          { label: "Either 30-60%: stair climb or shuttle walk", detail: "Over 22 m or over 400 m: proceed", tone: "decision" },
          { label: "Either under 30% or failed walk: CPET", tone: "decision" },
          { label: "VO2max under 10 mL/kg/min: high risk", detail: "Sublobar, SBRT or non-surgical", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "PPC prevention across the surgical journey",
        steps: [
          { label: "Weeks before: stop smoking, prehabilitation, nutrition", detail: "Cessation 4-8 weeks", tone: "neutral" },
          { label: "Days before: optimise COPD/asthma, treat infection", detail: "Prednisolone if FEV1 under 80% best", tone: "neutral" },
          { label: "In theatre: protective ventilation, full reversal", detail: "6-8 mL/kg PBW; TOF 0.9+", tone: "decision" },
          { label: "After: I COUGH, mobilise day 0-1, regional analgesia", tone: "good" },
          { label: "High risk: CPAP/NIV or HFNO after extubation", tone: "warn" },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**PPCs** include atelectasis, pneumonia, respiratory failure, bronchospasm and aspiration.",
            "About **5%** overall, up to **20-40%** after upper abdominal or thoracic surgery.",
            "PPCs are as common and as deadly as **cardiac complications**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Procedure** matters most: upper abdominal, thoracic, long, emergency surgery.",
            "Patient: **age over 60**, ASA 2+, COPD, heart failure, dependence, albumin under 3.5.",
            "Also low **SpO2**, recent chest infection, anaemia, smoking and OSA.",
            "**Obesity alone** and controlled asthma are not major independent risks.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "General anaesthesia drops **FRC by 20%** and causes basal atelectasis.",
            "Upper abdominal surgery causes **diaphragm dysfunction** for 1-2 weeks.",
            "Pain stops deep breaths and **coughing**, so secretions stay.",
            "**Residual blockade** and opioids weaken the airway and breathing drive.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**ARISCAT**: age, SpO2, infection, anaemia, incision, duration, emergency.",
            "ARISCAT bands: **under 26 low**, 26-44 intermediate, 45 or more high.",
            "**STOP-BANG** 5-8 means high risk of moderate-severe OSA.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**No routine spirometry** or CXR before non-thoracic surgery.",
            "Spirometry for **lung resection** or unexplained breathlessness.",
            "Check **albumin and haemoglobin**; bicarbonate in obese high STOP-BANG.",
            "Test sputum for **TB** if cough over 2 weeks.",
          ],
        },
        {
          title: "Lung resection evaluation",
          points: [
            "Measure **FEV1 and DLCO** in every candidate.",
            "**ppo value** equals preop value times (1 minus segments removed over 19).",
            "Both over **60%**: proceed; under **30%**: CPET.",
            "**Stair climb over 22 m** or shuttle walk over 400 m means low risk.",
            "**VO2max** over 20 safe; under 10 mL/kg/min high risk.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Stop smoking **4-8 weeks** before; any stop helps.",
            "Continue inhalers; **prednisolone 40-50 mg** for 5 days if asthma FEV1 under 80% best.",
            "**Prehabilitation**: exercise, nutrition and breathing training for 2-6 weeks.",
            "Postpone elective surgery for **active infection** or exacerbation.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Protective ventilation: **6-8 mL/kg** predicted body weight with PEEP.",
            "Full reversal to **TOF ratio 0.9** or more.",
            "**I COUGH** bundle and walking on day 0-1.",
            "Regional analgesia; continue **CPAP** in known OSA.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AHA/ACC 2024** perioperative guideline covers the cardiac half of assessment.",
            "**ESAIC 2023** requires quantitative neuromuscular monitoring.",
            "**GLP-1 RA 2024** guidance: continue most, clear liquids for 24 hours.",
          ],
        },
      ],
      tables: [
        {
          heading: "Perioperative drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Salbutamol", "2.5-5 mg nebulised before induction", "Pre-op and as needed", "Tremor, tachycardia, low potassium"],
            ["Prednisolone", "40-50 mg orally daily", "5 days pre-op if asthma FEV1 under 80% best", "High sugars"],
            ["Hydrocortisone", "100 mg IV at induction, then 200 mg/24 h", "1-3 days, taper", "Hyperglycaemia"],
            ["Varenicline", "Titrate to 1 mg twice daily", "12 weeks", "Nausea, dreams"],
            ["Sugammadex", "2-4 mg/kg IV", "End of surgery", "Rare anaphylaxis; contraception fails 7 days"],
            ["Enoxaparin", "40 mg SC daily", "Until mobile", "Bleeding; adjust in CKD"],
          ],
        },
        {
          heading: "ARISCAT points",
          columns: ["Factor", "Points"],
          rows: [
            ["Age 51-80 / over 80", "3 / 16"],
            ["SpO2 91-95% / 90% or less", "8 / 24"],
            ["Infection in last month", "17"],
            ["Hb 10 g/dL or less", "11"],
            ["Upper abdominal / intrathoracic", "15 / 24"],
            ["Duration 2-3 h / over 3 h", "16 / 23"],
            ["Emergency", "8"],
          ],
        },
        {
          heading: "Postoperative hypoxaemia: differential",
          columns: ["Cause", "Timing", "Clue"],
          rows: [
            ["Atelectasis", "Day 0-3", "Basal dullness, low fever"],
            ["Opioid or residual blockade", "Recovery", "Drowsy, shallow breathing"],
            ["Pneumonia", "Day 3-7", "Fever, sputum, infiltrate"],
            ["Pulmonary embolism", "Day 3-14", "Sudden breathlessness, clear CXR"],
            ["Pulmonary oedema", "Day 0-3", "Fluid overload, crackles"],
          ],
        },
      ],
      remember: [
        "**The operation predicts PPCs more than the patient.**",
        "**ARISCAT** = Age, SpO2, Infection, Anaemia, Incision, Duration, Emergency.",
        "**60 / 30** for ppo values; **20 / 10** for VO2max.",
        "**22 m stairs, 400 m shuttle** = low risk.",
        "**I COUGH**: Incentive spirometry, Cough, Oral care, Understanding, Get up, Head up.",
        "Smoking: stop **4-8 weeks** before - later is still better than never.",
        "Spirometry **never alone denies** non-thoracic surgery.",
      ],
    },
  },
};

export default revision;
