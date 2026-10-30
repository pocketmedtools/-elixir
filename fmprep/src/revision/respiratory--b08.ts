import type { RevisionSet } from "./index";

const revision: RevisionSet = {};

revision["respiratory-mechanical-ventilation"] = {
  checked: "2026-10",
  updated: [
    "ESICM 2023 ARDS guideline: VT 4-8 mL/kg PBW, prone at least 16 h in moderate-severe ARDS, no routine prolonged recruitment manoeuvres.",
    "ATS 2024 ARDS update: corticosteroids, VV-ECMO in selected severe ARDS, early neuromuscular blockade in severe ARDS, higher PEEP.",
    "SCCM 2023 RSI guideline: no preferred induction agent; rocuronium and succinylcholine equivalent for first-pass success.",
    "DEVICE 2023 (video laryngoscopy), PREOXI 2024 (NIV pre-oxygenation) and REVISE 2024 (pantoprazole stress ulcer prophylaxis) trials.",
    "SHEA/IDSA/APIC 2022 VAE compendium: toothbrushing in, routine chlorhexidine oral care out; paired SAT-SBT essential.",
  ],
  master: {
    heading: "Master revision table - Mechanical ventilation basics",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Positive-pressure support via ETT or tracheostomy when the patient cannot **protect the airway, oxygenate or ventilate**."],
      ["Indications", "GCS 8 or less; SpO2 under 90% despite HFNO/NIV; pH under 7.25 with rising PaCO2; NIV failure at 1-2 h; VC under 20 mL/kg; shock."],
      ["RSI", "SOAP-ME, pre-oxygenate 3 min (NIV best), resuscitate, **ketamine 1-2 mg/kg** or etomidate 0.3 mg/kg, **succinylcholine 1.5 or rocuronium 1.2 mg/kg**, confirm by **waveform capnography**."],
      ["Modes", "VC-AC (watch pressure), PC-AC (watch volume), **PSV** (spontaneous, weaning), SIMV (slows weaning), CPAP, PRVC/APRV."],
      ["Initial settings", "VT **6-8 mL/kg PBW**, RR 14-20, PEEP 5, FiO2 1.0 then SpO2 92-96%, flow 60 L/min, I:E 1:2."],
      ["Pressures", "Plateau under **30**, driving pressure under **15**; peak-plateau gap over 10 = resistance."],
      ["ABG adjustment", "New RR = RR x PaCO2 / target; oxygenation by FiO2 and PEEP; permissive hypercapnia pH over 7.20."],
      ["Special settings", "Asthma/COPD: RR 10-12, I:E 1:4-1:5; metabolic acidosis: high RR; raised ICP: PaCO2 35-40; pregnancy: PaCO2 30-32."],
      ["Troubleshooting", "Hand-bag with 100% O2, then **DOPE** - Displacement, Obstruction, Pneumothorax, Equipment (+ Stacked breaths)."],
      ["Daily bundle", "ABCDEF, head-up 30-45, paired SAT-SBT, toothbrushing, subglottic drainage, cuff 20-30, DVT and stress ulcer prophylaxis."],
      ["Weaning", "Daily screen, SBT on PS 5-8/PEEP 5 for 30-120 min, RSBI under 105, cuff-leak test, high-risk to NIV/HFNO."],
      ["Complications", "VILI, barotrauma, VAP, hypotension, auto-PEEP, diaphragm dysfunction, ICU weakness, delirium, tracheal stenosis."],
      ["Indian angle", "OP poisoning, krait bite, GBS, tetanus; VAP by carbapenem-resistant Acinetobacter and Klebsiella (ICMR AMRSN)."],
      ["Latest updates", "ESICM 2023, ATS 2024 ARDS; SCCM RSI 2023; DEVICE, PREOXI, REVISE trials; SHEA 2022 bundle."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Ventilated patient desaturates: DOPE",
      steps: [
        { label: "SpO2 falls or high-pressure alarm", detail: "Look at capnography trace and pressures", tone: "warn" },
        { label: "Disconnect and hand-bag with 100% oxygen", detail: "Better = ventilator/circuit; hard to bag = tube or patient", tone: "decision" },
        { label: "Displacement", detail: "Tube length at teeth, ETCO2 trace, laryngoscopy if doubt" },
        { label: "Obstruction", detail: "Pass suction catheter; bite block; bronchodilator" },
        { label: "Pneumothorax", detail: "Unequal air entry, tracheal shift, hypotension: needle then chest drain", tone: "warn" },
        { label: "Equipment", detail: "Oxygen supply, circuit leaks, ventilator failure" },
        { label: "Stacked breaths", detail: "Expiratory hold for auto-PEEP; disconnect to let chest empty" },
        { label: "Stable, cause fixed, ABG repeated", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "From intubation to extubation",
      steps: [
        { label: "Intubate by RSI, confirm by capnography", detail: "Ketamine or etomidate; succinylcholine or rocuronium" },
        { label: "Full support VC-AC, lung-protective", detail: "VT 6-8 mL/kg PBW, plateau under 30, PEEP 5" },
        { label: "Daily bundle", detail: "Head-up, light sedation RASS -2 to 0, toothbrushing, prophylaxis" },
        { label: "Daily readiness screen", detail: "PaO2/FiO2 150-200, PEEP 8 or less, FiO2 0.5 or less, stable", tone: "decision" },
        { label: "SAT then SBT 30-120 min", detail: "PS 5-8 + PEEP 5 or T-piece; RSBI under 105", tone: "decision" },
        { label: "Extubate; high-risk to NIV or HFNO", detail: "Cuff-leak test; steroids 4 h before if failed", tone: "good" },
      ],
    },
    {
      kind: "branch",
      heading: "High airway pressure: what the plateau tells you",
      root: "Peak pressure high - do an inspiratory hold",
      arms: [
        { label: "Plateau normal (resistance)", steps: ["Kinked or bitten tube", "Secretions or mucus plug", "Bronchospasm", "Suction, bite block, bronchodilator"] },
        { label: "Plateau high (compliance)", tone: "warn", steps: ["Pneumothorax", "Main-bronchus intubation", "ARDS, oedema, atelectasis", "Abdominal distension, auto-PEEP"] },
        { label: "Pressures low (leak)", steps: ["Cuff leak or disconnection", "Accidental extubation", "Bronchopleural fistula"] },
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**Mechanical ventilation** gives positive-pressure breaths through a tube when the patient cannot protect the airway, oxygenate or ventilate.",
          "About **one-third of ICU patients** need it; hospital mortality is around **31%**.",
          "Indian causes: **OP poisoning, krait bite, GBS, tetanus**, sepsis, head injury, COPD and asthma.",
          "**Prolonged ventilation** means 21 days or more, at least 6 hours a day.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**Volume control**: set volume, so watch the pressure.",
          "**Pressure control**: set pressure, so watch the volume.",
          "**Pressure support**: patient triggers every breath; cycles off at 25% of peak flow.",
          "**SIMV** mixes mandatory and spontaneous breaths but slows weaning.",
          "**CPAP** is constant pressure with spontaneous breathing only.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "**Peak pressure** reflects resistance plus compliance; **plateau** reflects compliance only.",
          "**Driving pressure** is plateau minus PEEP; keep it under 15 cmH2O.",
          "**VILI**: volutrauma, barotrauma, atelectrauma and biotrauma.",
          "Positive pressure cuts **venous return**, so hypotension follows intubation in hypovolaemia.",
          "**Auto-PEEP** comes from incomplete expiration in asthma and COPD.",
        ],
      },
      {
        title: "Inpatient / emergency care",
        points: [
          "Intubate for **GCS 8 or less**, failed NIV at 1-2 hours, or exhaustion.",
          "**Pre-oxygenate** 3 minutes, ideally with NIV; resuscitate before induction.",
          "Confirm the tube with **waveform capnography**; no trace, wrong place.",
          "Start VT **6-8 mL/kg PBW**, RR 14-20, PEEP 5, FiO2 1.0 then down.",
          "Target **SpO2 92-96%**, plateau under 30, pH over 7.20.",
          "Change PaCO2 by rate: new RR equals RR times PaCO2 over target.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "Sudden desaturation: **hand-bag with 100% oxygen**, then work through DOPE.",
          "High peak, normal plateau: **airway resistance**; both high: **compliance** problem.",
          "Asthma and COPD: low rate, **long expiration**, accept high PaCO2.",
          "Metabolic acidosis: set a **high rate** to match the patient's own breathing.",
          "Raised ICP: keep **PaCO2 35-40**; hyperventilate only for herniation.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Pregnancy**: smaller tube, left tilt, target PaCO2 30-32 mmHg.",
          "**Obesity**: tidal volume by height, ramped position, higher PEEP.",
          "**OP poisoning**: watch for the intermediate syndrome at 24-96 hours.",
          "**Krait bite**: full recovery is expected with ventilation; never withhold it.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**VAP** after 48 hours; Indian ICUs see carbapenem-resistant Acinetobacter and Klebsiella.",
          "Barotrauma, **tension pneumothorax**, post-intubation arrest and auto-PEEP.",
          "**Delirium**, diaphragm dysfunction and ICU-acquired weakness prolong weaning.",
          "Late **tracheal stenosis** presents as stridor or effort dyspnoea after extubation.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "**Daily SBT** on PS 5-8 with PEEP 5 for 30-120 minutes.",
          "**RSBI under 105** predicts successful weaning.",
          "Failed cuff-leak: give **steroids at least 4 hours** before extubation.",
          "High-risk patients go **straight to NIV or HFNO** after extubation.",
          "Refer for prone or ECMO if **PaO2/FiO2 under 80** despite optimisation.",
          "Screen survivors for **post-intensive care syndrome**.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ESICM 2023**: low VT and prone at least 16 hours in moderate-severe ARDS.",
          "**ATS 2024**: steroids, selected ECMO, early paralysis in severe ARDS.",
          "**SCCM RSI 2023**: no preferred induction agent or paralytic.",
          "**DEVICE 2023** video laryngoscopy; **PREOXI 2024** NIV pre-oxygenation; **REVISE 2024** pantoprazole.",
          "**SHEA 2022**: toothbrushing replaces chlorhexidine mouthwash.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs for intubation and sedation",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Ketamine", "1-2 mg/kg IV", "Single dose; infusion 0.5-2 mg/kg/h", "Raises BP; emergence reactions"],
          ["Etomidate", "0.2-0.3 mg/kg IV", "Single dose", "Adrenal suppression, myoclonus"],
          ["Propofol", "1-2 mg/kg IV; 0.3-3 mg/kg/h", "Titrate to RASS -2 to 0", "Hypotension; infusion syndrome"],
          ["Succinylcholine", "1-1.5 mg/kg IV", "8-10 min", "Hyperkalaemia; avoid in burns, denervation, MH"],
          ["Rocuronium", "1.2 mg/kg IV", "45-70 min; sugammadex 16 mg/kg reverses", "Ensure sedation"],
          ["Fentanyl", "25-100 microgram/h IV", "Daily interruption", "Respiratory depression, ileus"],
          ["Dexmedetomidine", "0.2-1.4 microgram/kg/h IV", "Light sedation", "Bradycardia, hypotension"],
        ],
      },
      {
        heading: "Airway pressure patterns",
        columns: ["Pattern", "Meaning", "Causes"],
        rows: [
          ["High peak, normal plateau", "Resistance", "Kink, biting, secretions, bronchospasm"],
          ["High peak and plateau", "Low compliance", "Pneumothorax, main-bronchus tube, ARDS, auto-PEEP"],
          ["Low pressures, low volume", "Leak", "Cuff leak, disconnection, extubation"],
        ],
      },
      {
        heading: "Modes compared",
        columns: ["Mode", "Set by clinician", "Watch"],
        rows: [
          ["VC-AC", "Volume, rate, PEEP", "Peak and plateau pressure"],
          ["PC-AC", "Pressure, Ti, rate, PEEP", "Tidal and minute volume"],
          ["PSV", "Support pressure, PEEP", "Rate, volume, apnoea"],
          ["SIMV", "Mandatory breaths plus PS", "Slows weaning"],
        ],
      },
    ],
    remember: [
      "**DOPE**: Displacement, Obstruction, Pneumothorax, Equipment (+ Stacked breaths).",
      "Volume control - watch pressure; pressure control - watch volume.",
      "VT by **height**, never by weight.",
      "Plateau under 30, driving pressure under 15, pH over 7.20.",
      "No trace, wrong place.",
      "Ventilate the COPD retainer to **his own PaCO2**.",
      "RSBI under 105; SBT 30-120 min on PS 5-8.",
    ],
  },
};

revision["respiratory-alveolar-haemorrhage-vasculitis"] = {
  checked: "2026-10",
  updated: [
    "KDIGO 2024 ANCA vasculitis: reduced-dose steroid taper, rituximab or cyclophosphamide, avacopan option, plasma exchange for creatinine over 3.4 mg/dL.",
    "EULAR 2022 AAV: plasma exchange not routine in DAH; rituximab maintenance 24-48 months.",
    "ACR/EULAR 2022 classification criteria for GPA and MPA (weighted scores including ANCA type).",
    "PEXIVAS 2020 underpins both: no benefit of plasma exchange on death or ESKD.",
  ],
  master: {
    heading: "Master revision table - Diffuse alveolar haemorrhage and pulmonary vasculitis",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Bleeding into alveoli from the microcirculation: **haemoptysis, falling Hb, diffuse infiltrates**, hypoxaemia."],
      ["Causes", "Capillaritis (GPA, MPA, anti-GBM, SLE, APS, PTU); bland (coagulopathy, MS, LVF); DAD (ARDS, HSCT, drugs); **leptospirosis**."],
      ["Pathogenesis", "ANCA-activated neutrophils and C5a destroy capillaries; anti-GBM IgG against alpha-3 type IV collagen."],
      ["Classification", "Chapel Hill 2012; ACR/EULAR 2022 - **PR3/c-ANCA +5** for GPA, **MPO/p-ANCA +6** for MPA; threshold 5."],
      ["Clinical", "Haemoptysis absent in one-third; ENT crusting, saddle nose, purpura, mononeuritis, cola urine."],
      ["Investigations", "Serial Hb, urine microscopy, PR3/MPO ELISA, anti-GBM, ANA, C3/C4, leptospira IgM, HRCT."],
      ["Confirmation", "BAL **progressively bloodier**; haemosiderin macrophages over 20%; **DLCO raised**; renal biopsy."],
      ["Supportive", "Oxygen, PEEP, correct INR and platelets, transfuse, stop anticoagulants."],
      ["Induction", "**Methylprednisolone 500-1000 mg x 3**, reduced-dose taper; **rituximab** or **cyclophosphamide 15 mg/kg pulses**."],
      ["Plasma exchange", "Standard in **anti-GBM**; in AAV only creatinine over 3.4 mg/dL or rescue (PEXIVAS)."],
      ["Maintenance", "Rituximab 500 mg 6-monthly 18-24 months or azathioprine 2 mg/kg; cotrimoxazole prophylaxis."],
      ["Leptospirosis", "Penicillin 1.5 MU IV 6-hourly or ceftriaxone 7 days; doxycycline 200 mg weekly prophylaxis."],
      ["Prognosis", "Infection kills most in year one; ESKD 20-25%; GPA relapses up to 50%."],
      ["Latest updates", "KDIGO 2024, EULAR 2022, ACR/EULAR 2022 criteria, PEXIVAS."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Suspected DAH: diagnostic pathway",
      steps: [
        { label: "Haemoptysis, falling Hb, diffuse infiltrates", detail: "Haemoptysis absent in one-third", tone: "warn" },
        { label: "Urgent bloods and urine", detail: "CBC, INR, creatinine, urine microscopy for red cell casts" },
        { label: "Serology", detail: "PR3/MPO ELISA, anti-GBM, ANA, dsDNA, C3/C4, APLA; leptospira, dengue, malaria" },
        { label: "Echo and BNP", detail: "Exclude mitral stenosis and LV failure", tone: "decision" },
        { label: "Bronchoscopy with BAL", detail: "Progressively bloodier aliquots; cultures exclude infection" },
        { label: "Tissue diagnosis", detail: "Renal biopsy: pauci-immune or linear IgG" },
        { label: "Cause defined, treatment tailored", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Treating capillaritis DAH",
      steps: [
        { label: "Support", detail: "Oxygen, PEEP, correct coagulopathy, transfuse Hb over 7" },
        { label: "Pulse methylprednisolone", detail: "500-1000 mg IV daily x 3, then reduced-dose taper" },
        { label: "Rituximab or cyclophosphamide", detail: "375 mg/m2 x 4 or 15 mg/kg at weeks 0, 2, 4 then 3-weekly" },
        { label: "Plasma exchange", detail: "Anti-GBM always; AAV if creatinine over 3.4 or refractory", tone: "decision" },
        { label: "Maintenance", detail: "Rituximab 500 mg 6-monthly; cotrimoxazole; bone protection", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "GPA vs MPA vs anti-GBM",
      columns: ["Feature", "GPA", "MPA", "Anti-GBM"],
      rows: [
        ["Antibody", "PR3 / c-ANCA", "MPO / p-ANCA", "Anti-GBM IgG"],
        ["Granulomas", "Yes", "No", "No"],
        ["ENT", "Saddle nose, sinusitis", "Rare", "None"],
        ["Lung", "Cavitating nodules, DAH", "DAH, ILD", "DAH in smokers"],
        ["Biopsy", "Pauci-immune", "Pauci-immune", "Linear IgG"],
        ["Plasma exchange", "Selected", "Selected", "Standard"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**DAH** is bleeding into alveoli from the lung microcirculation.",
          "Triad: **haemoptysis, falling haemoglobin, diffuse infiltrates**; haemoptysis is absent in one-third.",
          "AAV incidence is about **10-20 per million** a year, peaking at 60-70 years.",
          "In India, **leptospirosis** is the key infective cause in the monsoon.",
        ],
      },
      {
        title: "Causes and risk factors",
        points: [
          "**Capillaritis**: GPA, MPA, anti-GBM, SLE, APS, propylthiouracil, hydralazine.",
          "**Bland**: anticoagulants, low platelets, mitral stenosis, LV failure.",
          "**Diffuse alveolar damage**: ARDS, stem cell transplant, amiodarone, cocaine.",
          "**Infection**: leptospirosis, dengue, falciparum malaria, hantavirus.",
          "**Smoking** unmasks lung bleeding in anti-GBM disease.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "**ANCA** activates primed neutrophils, which destroy capillary walls.",
          "**C5a** amplifies injury; avacopan blocks its receptor.",
          "**Anti-GBM IgG** targets the alpha-3 chain of type IV collagen.",
          "Alveolar blood binds CO, so **DLCO rises**.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**Chapel Hill 2012** places AAV and anti-GBM among small-vessel vasculitides.",
          "ACR/EULAR 2022 GPA: **PR3/c-ANCA scores +5**; total 5 or more classifies.",
          "ACR/EULAR 2022 MPA: **MPO/p-ANCA scores +6**; eosinophilia subtracts 4.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "Breathlessness, cough, haemoptysis and **anaemia** over days.",
          "GPA clues: **bloody nasal crusts, saddle nose**, otitis, subglottic stenosis.",
          "Kidney clues: cola urine, oedema, hypertension, **red cell casts**.",
          "Leptospirosis clues: **conjunctival suffusion**, calf pain, jaundice, oliguria.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "Serial **Hb**, INR, platelets, creatinine and urine microscopy first.",
          "**PR3 and MPO ELISA**, anti-GBM, ANA, dsDNA, complement.",
          "BAL: **progressively bloodier aliquots**; haemosiderin macrophages over 20%.",
          "**Renal biopsy** gives the diagnosis most often.",
          "Echo excludes **mitral stenosis**.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "Oxygen, **PEEP**, correct coagulopathy, stop anticoagulants.",
          "**Methylprednisolone 500-1000 mg** IV daily for 3 days.",
          "Then prednisolone with the **reduced-dose PEXIVAS taper**.",
          "Add **rituximab** or **IV cyclophosphamide** for induction.",
          "Leptospirosis: **penicillin or ceftriaxone** IV for 7 days.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "**Plasma exchange** is standard in anti-GBM disease.",
          "In AAV, plasma exchange only for **creatinine over 3.4 mg/dL** or rescue.",
          "Maintenance: **rituximab 500 mg every 6 months** for 18-24 months.",
          "Give **cotrimoxazole** PJP prophylaxis throughout induction.",
          "Screen for **latent TB and hepatitis B** before induction.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Infection** is the main cause of death in year one.",
          "ESKD in 20-25%; relapse in up to half of GPA.",
          "Cyclophosphamide: **haemorrhagic cystitis**, infertility, bladder cancer.",
          "Red flag: haemoptysis plus **haematuria** means pulmonary-renal syndrome.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**KDIGO 2024**: reduced-dose steroids, rituximab or cyclophosphamide, avacopan option.",
          "**EULAR 2022**: no routine plasma exchange for DAH.",
          "**ACR/EULAR 2022** criteria replaced the 1990 criteria.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs for DAH and vasculitis",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Methylprednisolone", "500-1000 mg IV daily", "3 days", "Hyperglycaemia, infection"],
          ["Prednisolone", "1 mg/kg/day oral (max 75 mg)", "Taper to 5 mg by 6 months", "Diabetes, bone loss"],
          ["Rituximab", "375 mg/m2 weekly x 4 or 1 g x 2", "Then 500 mg 6-monthly", "Low IgG, HBV reactivation"],
          ["Cyclophosphamide", "15 mg/kg IV pulses", "3-6 months", "Cytopenia, cystitis, infertility"],
          ["Azathioprine", "1.5-2 mg/kg/day oral", "24-48 months", "Cytopenia, hepatitis"],
          ["Cotrimoxazole", "400/80 mg daily oral", "During and after induction", "Rash, hyperkalaemia"],
          ["Benzylpenicillin", "1.5 MU IV 6-hourly", "7 days (leptospirosis)", "Jarisch-Herxheimer reaction"],
        ],
      },
      {
        heading: "Histological causes of DAH",
        columns: ["Pattern", "Causes", "Clue"],
        rows: [
          ["Capillaritis", "GPA, MPA, anti-GBM, SLE, APS", "Nephritis, ANCA"],
          ["Bland", "Coagulopathy, mitral stenosis, LVF", "INR high, abnormal echo"],
          ["Alveolar damage", "ARDS, HSCT, drugs", "Sepsis or drug history"],
          ["Infection", "Leptospirosis, dengue, malaria", "Monsoon fever, jaundice, AKI"],
        ],
      },
      {
        heading: "GPA vs MPA vs anti-GBM",
        columns: ["Feature", "GPA", "MPA", "Anti-GBM"],
        rows: [
          ["Antibody", "PR3", "MPO", "Anti-GBM IgG"],
          ["Granuloma", "Yes", "No", "No"],
          ["Biopsy", "Pauci-immune", "Pauci-immune", "Linear IgG"],
          ["Plasma exchange", "Selected", "Selected", "Standard"],
        ],
      },
    ],
    remember: [
      "Triad: haemoptysis, **falling Hb**, infiltrates.",
      "**High DLCO** with infiltrates = alveolar blood.",
      "BAL that gets **bloodier** with each aliquot.",
      "Always **dip the urine** in haemoptysis.",
      "c-ANCA/PR3 = GPA; p-ANCA/MPO = MPA; linear IgG = anti-GBM.",
      "PEXIVAS: no routine plasma exchange; **lower steroids**.",
      "Monsoon pulmonary-renal syndrome in India: **leptospirosis**.",
    ],
  },
};

revision["respiratory-eosinophilic-lung"] = {
  checked: "2026-10",
  updated: [
    "ACR/EULAR 2022 EGPA classification criteria: eosinophils 1000 or more +5, asthma +3, nasal polyps +3; threshold 6.",
    "EULAR 2022 AAV: mepolizumab for relapsing or refractory non-severe EGPA; CYC or RTX for severe.",
    "MANDARA 2024: benralizumab non-inferior to mepolizumab in EGPA.",
    "NCVBDC 2024: triple-drug IDA mass drug administration; LF elimination target 2027.",
  ],
  master: {
    heading: "Master revision table - Eosinophilic lung disease",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Lung infiltrates with **AEC over 500/microlitre** or **BAL eosinophils over 25%**."],
      ["Classification", "Known cause (parasites, drugs, ABPA); lung-only (AEP, CEP); systemic (EGPA, HES)."],
      ["TPE", "Filarial hypersensitivity; nocturnal cough, **AEC over 3000, IgE over 1000**, no microfilariae in blood."],
      ["TPE treatment", "**DEC 6 mg/kg/day in 3 doses for 21 days**; repeat for relapse; steroids if persistent."],
      ["Loeffler", "Transient migratory infiltrates from Ascaris larvae; stool ova only at 6-8 weeks; albendazole."],
      ["AEP", "Young new smoker, ARDS-like, BAL eosinophils over 25%, **blood eosinophils normal**; IV steroids 2 weeks."],
      ["CEP", "Middle-aged woman with asthma; **photographic negative of pulmonary oedema**; prednisolone taper 6 months; relapse 50%."],
      ["EGPA", "Asthma, polyps, eosinophilia, mononeuritis; MPO-ANCA 30-40%; heart is main killer."],
      ["EGPA treatment", "Severe: pulse steroids + CYC or RTX; non-severe/relapsing: steroids + **mepolizumab 300 mg 4-weekly**."],
      ["Drugs", "Nitrofurantoin, NSAIDs, sulfonamides, daptomycin, antiepileptics, DRESS - stop the drug."],
      ["Safety", "Exclude **Strongyloides** (ivermectin) before steroids or biologics."],
      ["Investigations", "AEC, stool x3, IgE, filarial antibody, X-ray/HRCT, PFT, BAL, ANCA, cardiac work-up in EGPA."],
      ["Prevention", "NCVBDC MDA (DA/IDA), vector control, National Deworming Day, stop smoking/vaping."],
      ["Latest updates", "ACR/EULAR 2022 EGPA criteria; EULAR 2022; MANDARA 2024; LF elimination 2027."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Infiltrates with eosinophilia: work-up",
      steps: [
        { label: "Infiltrates + AEC over 500 or BAL eos over 25%" },
        { label: "Drug history", detail: "Nitrofurantoin, NSAIDs, sulfonamides, antiepileptics: stop drug", tone: "decision" },
        { label: "Parasites", detail: "Stool x3, Strongyloides serology, filarial antibody, IgE" },
        { label: "Asthma with bronchiectasis?", detail: "Aspergillus IgE for ABPA", tone: "decision" },
        { label: "Systemic features?", detail: "Neuropathy, purpura, haematuria, cardiac: ANCA, troponin, echo for EGPA", tone: "warn" },
        { label: "Tempo", detail: "Under 1 month with hypoxaemia: AEP; weeks to months, peripheral: CEP" },
        { label: "Diagnosis made; treat cause", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "EGPA treatment ladder",
      steps: [
        { label: "Non-severe", detail: "Prednisolone 0.5-1 mg/kg tapered" },
        { label: "Relapsing or steroid-dependent", detail: "Add mepolizumab 300 mg SC 4-weekly or benralizumab 30 mg" },
        { label: "Severe (FFS 1 or more, organ-threatening)", detail: "Pulse methylprednisolone + cyclophosphamide or rituximab", tone: "warn" },
        { label: "Maintenance", detail: "Rituximab, azathioprine or methotrexate; mepolizumab; inhaled asthma therapy", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "AEP vs CEP vs TPE",
      columns: ["Feature", "AEP", "CEP", "TPE"],
      rows: [
        ["Patient", "Young new smoker", "Middle-aged woman, asthma", "Young man, filarial area"],
        ["Onset", "Under 1 month", "Weeks to months", "Weeks to months, nocturnal"],
        ["Blood AEC", "Normal at first", "Over 1000", "Over 3000"],
        ["Imaging", "Bilateral GGO, effusions", "Peripheral consolidation", "Miliary or reticulonodular"],
        ["Treatment", "IV steroids 2 weeks", "Prednisolone 6 months", "DEC 21 days"],
        ["Relapse", "Rare", "About 50%", "12-20%"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "Eosinophilic lung disease: infiltrates plus **AEC over 500** or **BAL eosinophils over 25%**.",
          "India carries about **40% of global filariasis**, the setting for TPE.",
          "TPE affects **under 1%** of infected people, mostly young men.",
          "EGPA is the rarest ANCA vasculitis, about **1-3 per million** a year.",
        ],
      },
      {
        title: "Causes and risk factors",
        points: [
          "**Parasites**: filaria (TPE), Ascaris and hookworm (Loeffler), Strongyloides, Toxocara.",
          "**Drugs**: nitrofurantoin, NSAIDs, sulfonamides, daptomycin, antiepileptics.",
          "**New smoking or vaping** triggers acute eosinophilic pneumonia.",
          "**Systemic**: EGPA, hypereosinophilic syndrome, lymphoma.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "**IL-5** drives eosinophil growth and survival.",
          "Eosinophil **major basic protein** damages lung, heart and nerves.",
          "TPE: microfilariae trapped in lung; **blood is clear** of microfilariae.",
          "Untreated TPE ends in **interstitial fibrosis**.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "TPE: **nocturnal paroxysmal cough** and wheeze, weight loss, misdiagnosed as asthma or TB.",
          "AEP: fever and **rapid respiratory failure** in a young new smoker.",
          "CEP: weeks of cough, weight loss, sweats in a **woman with asthma**.",
          "EGPA: adult-onset asthma, polyps, then **foot drop**, purpura, myocarditis.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**AEC**: TPE over 3000; CEP over 1000; AEP often normal at first.",
          "**IgE over 1000** and filarial antibodies in TPE.",
          "**Stool x3** and Strongyloides serology in every case.",
          "CEP X-ray: **photographic negative** of pulmonary oedema.",
          "BAL eosinophils **over 25%** confirm eosinophilic pneumonia.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "TPE: **DEC 6 mg/kg/day** in 3 doses for 21 days.",
          "Loeffler: self-limiting; **albendazole 400 mg** once.",
          "Drug-induced: **stop the drug**; steroids if hypoxaemic.",
          "CEP: **prednisolone 0.5 mg/kg** for 2 weeks, taper over 6 months.",
          "AEP: **methylprednisolone** IV, then oral taper over 2 weeks; stop smoking.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "Severe EGPA: **pulse steroids** plus cyclophosphamide or rituximab.",
          "Relapsing EGPA: **mepolizumab 300 mg** SC every 4 weeks.",
          "**Benralizumab 30 mg** is non-inferior to mepolizumab (MANDARA).",
          "Give **ivermectin** before steroids in endemic areas.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "Late TPE leaves **restrictive fibrosis**.",
          "EGPA **myocarditis** causes about half of deaths.",
          "Steroids can trigger **Strongyloides hyperinfection**.",
          "Red flags: hypoxaemia, neuropathy, chest pain, haematuria, **AEC over 5000**.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ACR/EULAR 2022**: eosinophils 1000 or more score +5 for EGPA.",
          "**EULAR 2022**: mepolizumab for relapsing or refractory EGPA.",
          "**NCVBDC**: IDA mass drug administration; filariasis elimination target **2027**.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs for eosinophilic lung disease",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["DEC", "6 mg/kg/day oral in 3 doses", "21 days", "Fever, myalgia; avoid in pregnancy"],
          ["Albendazole", "400 mg oral", "Single dose", "Avoid first trimester"],
          ["Ivermectin", "200 microgram/kg oral", "1-2 days", "Avoid in pregnancy"],
          ["Prednisolone", "0.5 mg/kg/day oral", "Taper over 6 months (CEP)", "Diabetes, bone loss, infection"],
          ["Methylprednisolone", "60-125 mg IV 6-hourly", "Until better, then 2-week taper", "Hyperglycaemia"],
          ["Mepolizumab", "300 mg SC every 4 weeks", "12 months or more", "Herpes zoster, injection reaction"],
          ["Cyclophosphamide", "15 mg/kg IV pulses", "3-6 months", "Cytopenia, cystitis, infertility"],
        ],
      },
      {
        heading: "Syndromes compared",
        columns: ["Syndrome", "Clue", "AEC", "Treatment"],
        rows: [
          ["TPE", "Endemic area, nocturnal cough", "Over 3000", "DEC 21 days"],
          ["Loeffler", "Transient, mild", "Moderate", "Albendazole"],
          ["AEP", "New smoker, ARDS-like", "Normal at first", "IV steroids"],
          ["CEP", "Woman with asthma, peripheral shadows", "Over 1000", "Prednisolone 6 months"],
          ["EGPA", "Asthma, polyps, neuropathy", "Over 1500", "Steroids + mepolizumab or CYC/RTX"],
        ],
      },
      {
        heading: "ACR/EULAR 2022 EGPA criteria",
        columns: ["Item", "Score"],
        rows: [
          ["Obstructive airway disease", "+3"],
          ["Nasal polyps", "+3"],
          ["Mononeuritis multiplex", "+1"],
          ["Eosinophils 1000/microlitre or more", "+5"],
          ["Eosinophilic inflammation on biopsy", "+2"],
          ["c-ANCA or PR3 positive", "-3"],
          ["Haematuria", "-1"],
        ],
      },
    ],
    remember: [
      "TPE: **3000 eosinophils, 1000 IgE, 21 days of DEC**.",
      "CEP: **photographic negative** of pulmonary oedema.",
      "AEP: BAL full of eosinophils, **blood normal**.",
      "Loeffler: stool ova appear only at **6-8 weeks**.",
      "EGPA: the **heart kills**; ANCA in only one-third.",
      "**Ivermectin before steroids** in Indian eosinophilia.",
      "Causes mnemonic **PLATE-D**: Parasites, Lymphoma/HES, ABPA, Toxic smoke, EGPA, Drugs.",
    ],
  },
};

revision["respiratory-opportunistic-lung"] = {
  checked: "2026-10",
  updated: [
    "NIH/CDC/IDSA OI guidelines (updated 2024): cotrimoxazole 15-20 mg/kg/day x 21 days; steroids if PaO2 under 70; ART within 2 weeks.",
    "WHO 2022 cryptococcal guideline: single-dose liposomal amphotericin 10 mg/kg + flucytosine + fluconazole; CrAg screening at CD4 under 200.",
    "Letermovir 2023: extended to day 200 in high-risk HSCT and approved for D+/R- kidney transplant prophylaxis.",
    "IDSA 2023 febrile neutropenia update: risk-stratified empirical therapy and early CT for moulds.",
  ],
  master: {
    heading: "Master revision table - Lung infections in the immunocompromised",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Lung infection in a host with impaired immunity; organism predicted by the **immune defect**."],
      ["Neutropenia", "Pseudomonas, Enterobacterales, S. aureus; after 7-10 days **Aspergillus, Mucorales**."],
      ["T-cell defect", "HIV, transplant, steroids: **PJP, CMV, TB, Nocardia, Cryptococcus, Histoplasma, Talaromyces**."],
      ["Humoral / asplenia", "Encapsulated bacteria: pneumococcus, H. influenzae, meningococcus."],
      ["HIV CD4", "Any: TB, bacteria; under 200 PJP; under 100 Crypto, Toxo; under 50 CMV, MAC."],
      ["SOT timeline", "Month 1 hospital bugs; **1-6 months opportunists**; after 6 months community."],
      ["PJP clinical", "Subacute dry cough, **exertional desaturation**, normal chest, LDH and beta-D-glucan raised, HRCT GGO."],
      ["PJP treatment", "**Cotrimoxazole 15-20 mg/kg/day TMP x 21 days**; prednisolone if PaO2 under 70 (40 BD x5, 40 OD x5, 20 OD x11)."],
      ["PJP alternatives", "Clindamycin + primaquine (**G6PD first**), IV pentamidine 4 mg/kg, atovaquone."],
      ["CMV", "Plasma PCR, BAL PCR, owl's-eye inclusions; **ganciclovir 5 mg/kg 12-hourly**; valganciclovir or letermovir prophylaxis."],
      ["Nocardia", "Branching, beaded, **weakly acid-fast**; image the brain; cotrimoxazole +/- imipenem 6-12 months."],
      ["Fungi", "Crypto: CrAg + **LP**, L-AmB 10 mg/kg single dose + 5FC + fluconazole; Histo/Talaromyces: L-AmB then itraconazole 12 months."],
      ["Prophylaxis", "Cotrimoxazole (HIV CD4 under 350 NACO; transplant; steroids 20 mg x 4 weeks + another drug); CrAg screen; TPT; vaccines."],
      ["Latest updates", "NIH OI 2024; WHO 2022 crypto; letermovir 2023; IDSA 2023 neutropenia."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Immunocompromised patient with a new infiltrate",
      steps: [
        { label: "Fever, cough or hypoxaemia + infiltrate", tone: "warn" },
        { label: "Define the immune defect", detail: "ANC, CD4, transplant date, steroid dose, biologics", tone: "decision" },
        { label: "First-line tests", detail: "CBC, LDH, blood cultures, sputum CBNAAT, urine LF-LAM, exertional SpO2" },
        { label: "HRCT early", detail: "GGO: PJP/CMV/virus; nodules: moulds, Nocardia, Crypto; miliary: TB, histo" },
        { label: "Biomarkers", detail: "Beta-D-glucan, galactomannan, CrAg, CMV PCR, Histoplasma antigen" },
        { label: "Bronchoscopy with BAL", detail: "PCR, IF, cultures, cytology; biopsy if non-diagnostic", tone: "decision" },
        { label: "Targeted therapy and reduce immunosuppression", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "PJP treatment by severity",
      steps: [
        { label: "Mild (PaO2 70 or more)", detail: "Oral cotrimoxazole 2 DS 8-hourly x 21 days" },
        { label: "Moderate-severe (PaO2 under 70)", detail: "IV cotrimoxazole 15-20 mg/kg/day TMP + prednisolone 40 BD", tone: "warn" },
        { label: "Intolerant or failing", detail: "Clindamycin + primaquine (G6PD) or IV pentamidine 4 mg/kg" },
        { label: "Respiratory failure", detail: "HFNO, NIV or ventilation; watch for pneumothorax", tone: "warn" },
        { label: "Secondary prophylaxis", detail: "Cotrimoxazole until immune recovery; ART within 2 weeks", tone: "good" },
      ],
    },
    {
      kind: "branch",
      heading: "Immune defect predicts the organism",
      root: "Type of immune defect",
      arms: [
        { label: "Neutropenia", tone: "warn", steps: ["Pseudomonas, Enterobacterales", "S. aureus", "Aspergillus, Mucorales"] },
        { label: "T-cell defect", steps: ["PJP, CMV", "TB, Nocardia", "Cryptococcus, Histoplasma, Talaromyces"] },
        { label: "Humoral or asplenia", steps: ["S. pneumoniae", "H. influenzae", "N. meningitidis"] },
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "The **type of immune defect** predicts the organism better than the X-ray.",
          "India has about **25 lakh** people living with HIV; **TB** is their commonest lung OI.",
          "Non-HIV PJP has **30-60% mortality**, far higher than in HIV.",
          "Steroids of **20 mg or more for 4 weeks** carry PJP risk.",
        ],
      },
      {
        title: "Causes and risk factors",
        points: [
          "**Neutropenia**: gram-negatives, S. aureus, Aspergillus, Mucorales.",
          "**T-cell defect**: PJP, CMV, TB, Nocardia, Cryptococcus, Histoplasma.",
          "**Humoral or asplenia**: encapsulated bacteria.",
          "Transplant **1-6 months**: peak opportunist window.",
          "India: **Histoplasma** in Gangetic plains; **Talaromyces** in Manipur.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "PJP: **subacute dry cough**, exertional breathlessness, oral thrush.",
          "Desaturation of **4% or more on exertion** with a normal chest suggests PJP.",
          "Nocardia: cavitating pneumonia plus **brain abscess**; mimics TB.",
          "Cryptococcus: lung nodule with silent **meningitis**.",
          "Talaromyces: **umbilicated facial papules** in advanced HIV.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "CBC, **CD4**, LDH, blood cultures, CBNAAT, urine LF-LAM.",
          "**HRCT early**; normal HRCT makes PJP unlikely.",
          "**Beta-D-glucan** for PJP; galactomannan for Aspergillus.",
          "**Serum CrAg** positive means lumbar puncture.",
          "**BAL** with PCR is the key tertiary test.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "PJP: **cotrimoxazole 15-20 mg/kg/day** trimethoprim for 21 days.",
          "**Prednisolone** if PaO2 under 70: 40 BD x5, 40 OD x5, 20 OD x11.",
          "CMV: **ganciclovir 5 mg/kg** IV 12-hourly, then valganciclovir.",
          "Nocardia: **cotrimoxazole** for 6-12 months; add imipenem if severe.",
          "Crypto meningitis: **L-AmB 10 mg/kg once** plus flucytosine and fluconazole.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "Sulfa intolerance: **clindamycin plus primaquine** after G6PD test.",
          "Severe intolerance: **IV pentamidine** 4 mg/kg daily.",
          "Histoplasmosis: **L-AmB 3 mg/kg** then itraconazole 12 months.",
          "Start **ART within 2 weeks**; delay 4-6 weeks in crypto meningitis.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Pregnancy**: cotrimoxazole still first choice; avoid primaquine and flucytosine.",
          "**Transplant**: azoles raise **tacrolimus**; rifampicin lowers it.",
          "**Kidney disease**: halve cotrimoxazole at CrCl 15-30.",
          "**Rheumatology**: rituximab plus steroids needs PJP prophylaxis.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "PJP **pneumothorax** and day 3-5 worsening.",
          "**IRIS** after ART: new fever and infiltrates.",
          "Drug toxicity: cotrimoxazole **hyperkalaemia**, ganciclovir neutropenia, amphotericin hypokalaemia.",
          "Red flags: hypoxaemia, **neutropenic fever**, neurological signs.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "Prophylaxis: **cotrimoxazole daily** in HIV CD4 under 350 (NACO) or WHO stage 3-4.",
          "Non-HIV prophylaxis for **transplant, HSCT, ALL** and heavy steroids.",
          "**CrAg screening** at CD4 under 200 with pre-emptive fluconazole.",
          "**Valganciclovir or letermovir** prevent CMV after transplant.",
          "Check CBC, potassium, creatinine on long-term cotrimoxazole.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**NIH OI 2024**: standard PJP dose and steroid rule unchanged.",
          "**WHO 2022**: single-dose liposomal amphotericin for crypto meningitis.",
          "**Letermovir 2023**: longer HSCT use and kidney transplant approval.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs for opportunistic lung infections",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Cotrimoxazole", "15-20 mg/kg/day TMP IV/oral in 3-4 doses", "21 days (PJP)", "Rash, hyperkalaemia, marrow suppression"],
          ["Prednisolone", "40 mg BD, then 40 mg OD, then 20 mg OD", "21 days", "Hyperglycaemia, other OIs"],
          ["Clindamycin + primaquine", "600-900 mg IV 8-hourly + 30 mg oral daily", "21 days", "Haemolysis in G6PD deficiency"],
          ["Ganciclovir", "5 mg/kg IV 12-hourly", "2-3 weeks", "Neutropenia; renal dosing"],
          ["Liposomal amphotericin B", "10 mg/kg once (crypto); 3 mg/kg/day (histo)", "Single dose or 1-2 weeks", "Hypokalaemia, nephrotoxicity"],
          ["Fluconazole", "400-1200 mg/day oral", "Months", "Hepatitis, QT, raises tacrolimus"],
          ["Itraconazole", "200 mg BD oral", "12 months or more", "Hepatitis, interactions"],
        ],
      },
      {
        heading: "Immune defect and pathogens",
        columns: ["Defect", "Setting", "Pathogens"],
        rows: [
          ["Neutropenia", "Chemotherapy", "Pseudomonas, Aspergillus, Mucorales"],
          ["T-cell", "HIV, transplant, steroids", "PJP, CMV, TB, Nocardia, Crypto"],
          ["Humoral", "Myeloma, rituximab, splenectomy", "Pneumococcus, H. influenzae"],
        ],
      },
      {
        heading: "CD4 thresholds in HIV",
        columns: ["CD4", "Pathogens", "Action"],
        rows: [
          ["Any", "TB, bacterial pneumonia", "TPT, vaccines"],
          ["Under 200", "PJP, Cryptococcus", "Cotrimoxazole, CrAg screen"],
          ["Under 100", "Toxoplasma, Histoplasma, Talaromyces", "Cotrimoxazole, early ART"],
          ["Under 50", "CMV, MAC", "Fundoscopy, ART"],
        ],
      },
    ],
    remember: [
      "Name the **immune defect** before the bug.",
      "PJP: **hypoxaemia out of proportion** to chest signs.",
      "Steroids if **PaO2 under 70**: 40 BD x5, 40 OD x5, 20 OD x11.",
      "**G6PD** before primaquine or dapsone.",
      "Nocardia: **weakly acid-fast**, branching, loves the brain.",
      "Positive CrAg means **lumbar puncture**.",
      "CD4 **2-1-5**: 200 PJP, 100 Crypto/Toxo, 50 CMV/MAC.",
    ],
  },
};

export default revision;
