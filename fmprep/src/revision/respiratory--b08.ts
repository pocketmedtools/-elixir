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

export default revision;
