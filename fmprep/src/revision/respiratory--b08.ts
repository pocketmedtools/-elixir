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

export default revision;
