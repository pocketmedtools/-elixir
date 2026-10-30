import type { RevisionSet } from "./index";

const revision: RevisionSet = {};

revision["respiratory-examination"] = {
  checked: "2026-10",
  updated: [
    "ERS lung sound nomenclature (Task Force 2016, still current): wheeze, rhonchus, fine and coarse crackles; avoid 'crepitations' and 'rales'.",
    "BTS Pleural Disease Guideline 2023: thoracic ultrasound as the bedside extension before pleural procedures.",
    "FDA draft guidance on pulse oximeters (January 2025): overestimation of SpO2 in darker skin.",
    "International lung ultrasound consensus 2023: standard definitions of B-lines, consolidation and lung sliding.",
    "GOLD 2025: mMRC and CAT remain the symptom grading alongside the examination.",
  ],
  master: {
    heading: "Respiratory examination - what to write",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Structured sequence (survey, hands, neck, inspection, palpation, percussion, auscultation) that localises a lesion as solid, fluid, air or scar"],
      ["General survey", "RR for 60 s (12-20 normal), SpO2, accessory muscles, pursed lips, cyanosis, flap, nodes, JVP, Horner"],
      ["Hands", "Clubbing grade 1-4, Lovibond over 180 degrees, Schamroth, tar stains, tremor, small-muscle wasting"],
      ["Neck", "Trachea (towards collapse/fibrosis, away from effusion/tension), Trail sign, cricosternal distance, tracheal tug"],
      ["Inspection", "Barrel chest, flattening, scars, unequal movement, Hoover sign, abdominal paradox, breathing pattern"],
      ["Palpation", "Apex beat, expansion over 5 cm, tactile fremitus up in consolidation, down in fluid/air/blocked bronchus"],
      ["Percussion", "Resonant, hyperresonant, dull, stony dull; liver dullness 5th ICS; Traube, Skodaic, Kronig, Grocco"],
      ["Breath sounds", "Vesicular vs bronchial (tubular, cavernous, amphoric); diminished; prolonged expiration"],
      ["Added sounds", "Wheeze poly/monophonic; fine late vs coarse early crackles; rub; stridor; squawk"],
      ["Vocal resonance", "Bronchophony, whispering pectoriloquy, aegophony over consolidation; reduced in effusion and pneumothorax"],
      ["Signs table", "Consolidation, collapse, effusion, pneumothorax, fibrosis, emphysema: trachea, note, sounds, resonance"],
      ["Confirm", "SpO2, PEF, CXR PA, lung ultrasound, sputum NAAT, spirometry, ABG"],
      ["Red flags", "RR 30+, SpO2 under 92%, silent chest, stridor, tension signs, flap with drowsiness"],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Localising a chest lesion at the bedside",
      caption: "Use the mediastinum first, then the percussion note, then the breath sounds.",
      steps: [
        { label: "Which side moves less?", detail: "That is the side of disease" },
        { label: "Where is the mediastinum?", detail: "Trachea for upper, apex beat for lower mediastinum", tone: "decision" },
        { label: "Pulled towards", detail: "Collapse or fibrosis" },
        { label: "Pushed away", detail: "Massive effusion (stony dull) or tension pneumothorax (hyperresonant)", tone: "warn" },
        { label: "Central", detail: "Consolidation, small effusion, pleural thickening, diffuse disease" },
        { label: "Breath sounds and resonance decide", detail: "Bronchial + increased = solid lung with open bronchus; absent + decreased = fluid, air or blocked bronchus", tone: "decision" },
        { label: "Confirm with CXR PA and ultrasound", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Order of the respiratory examination",
      steps: [
        { label: "General survey and vital signs", detail: "RR 60 s, SpO2, distress, cyanosis, flap" },
        { label: "Hands", detail: "Clubbing, tar, tremor, wasting" },
        { label: "Face and neck", detail: "Horner, nodes, JVP, trachea, cricosternal distance" },
        { label: "Inspection", detail: "Shape, scars, movement, Hoover sign" },
        { label: "Palpation", detail: "Apex, expansion, tactile fremitus" },
        { label: "Percussion", detail: "Compare sides, include axilla and apices" },
        { label: "Auscultation and vocal resonance", detail: "Front, axillae, back; then summarise", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "Fine versus coarse crackles",
      columns: ["Feature", "Fine crackles", "Coarse crackles"],
      rows: [
        ["Timing", "Late inspiratory", "Early inspiratory, often expiratory too"],
        ["Pitch", "High, short", "Low, longer"],
        ["Effect of cough", "Unchanged", "Change or clear"],
        ["Mechanism", "Small airways snapping open", "Air through secretions"],
        ["Causes", "IPF, asbestosis, early oedema", "Bronchiectasis, chronic bronchitis, pneumonia"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "The **respiratory examination** localises a lesion and tells whether it is solid, fluid, air or scar.",
          "Always **compare sides** at the same level; asymmetry is the sign.",
          "Bedside signs are **specific but insensitive**; a normal chest does not exclude pneumonia.",
          "Examine the front at 45 degrees and the back with the patient **sitting forward**.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "Count **respiratory rate for 60 seconds**; 25 or more scores 3 on NEWS2.",
          "Distress: **accessory muscles**, tripod position, pursed lips, unable to finish sentences.",
          "**Central cyanosis** is late; trust the oximeter, not the tongue.",
          "**Flapping tremor**, bounding pulse and drowsiness mean CO2 retention.",
          "Grade breathlessness with **mMRC 0-4**; ask smoking pack-years and biomass exposure.",
          "Cough over 2 weeks in India needs **sputum NAAT** whatever the chest shows.",
        ],
      },
      {
        title: "Examination",
        points: [
          "**Clubbing**: Lovibond angle over 180 degrees, Schamroth window lost, depth ratio over 1.",
          "Clubbing is **never from COPD or asthma** alone; in a smoker think cancer.",
          "**Trachea** shows the upper mediastinum; **apex beat** shows the lower mediastinum.",
          "**Hoover sign**: lower ribs move inward on inspiration in hyperinflation.",
          "Normal **chest expansion** is over 5 cm at the 4th intercostal space.",
          "**Tactile fremitus** rises over consolidation and falls over fluid, air or blocked bronchus.",
          "Liver dullness starts at the **5th intercostal space**; lost cardiac dullness suggests emphysema.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**Vesicular**: inspiration longer, no gap. **Bronchial**: expiration equal or longer, with a gap.",
          "**Tubular** for consolidation, **cavernous** for a cavity, **amphoric** for a large thin-walled space.",
          "**Fine late crackles** mean fibrosis or oedema; **coarse early crackles** mean secretions.",
          "**Monophonic fixed wheeze** means one blocked airway: tumour, foreign body or endobronchial TB.",
          "**Stridor** is inspiratory and comes from the extrathoracic upper airway.",
        ],
      },
      {
        title: "Differential diagnosis",
        points: [
          "Trachea **towards** a dull side: collapse or fibrosis.",
          "Trachea **away** from a stony dull side: massive effusion.",
          "Trachea **away** from a hyperresonant silent side: tension pneumothorax.",
          "Central trachea with bronchial breathing and increased resonance: **consolidation**.",
          "Large opaque side with central trachea: **collapse plus effusion** or malignancy.",
          "Upper-zone signs in India: **post-TB fibrosis or active TB** first.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**SpO2** at rest and on walking; a 4% drop on exertion is significant.",
          "Oximeters may **overestimate SpO2 in darker skin**; check ABG when borderline.",
          "**Chest X-ray PA** confirms side and lesion; silhouette sign localises the lobe.",
          "**Lung ultrasound**: lung point for pneumothorax, spine sign for effusion, B-lines for interstitial fluid.",
          "**Spirometry** and **ABG** quantify what the bedside suggests.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "Child fast breathing: **60 under 2 months, 50 at 2-11 months, 40 at 1-5 years**.",
          "Elderly basal crackles that clear with deep breaths are often **atelectasis**.",
          "**Obesity** dampens sounds and mimics basal dullness.",
          "After intubation, absent left sounds suggest **right main bronchus intubation**.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Silent chest**, cyanosis or drowsiness in asthma is life-threatening.",
          "**Tension pneumothorax** is treated clinically; do not wait for an X-ray.",
          "**Abdominal paradox** warns of diaphragm fatigue and ventilatory failure.",
          "**Stridor** in an adult needs immediate airway assessment.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ERS nomenclature**: say wheeze and crackles, not rhonchi and crepitations.",
          "**BTS 2023** pleural guideline puts thoracic ultrasound at the bedside.",
          "**FDA 2025** draft guidance tests oximeters across skin tones.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs whose effects you find at the bedside",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Amiodarone", "200 mg oral daily maintenance", "Months, cumulative", "Fibrosis with fine crackles, low DLCO"],
          ["Methotrexate", "7.5-25 mg oral or SC weekly", "Usually first year", "Acute pneumonitis, hypoxaemia"],
          ["Nitrofurantoin", "50-100 mg oral at night", "Over 6 months", "Chronic interstitial fibrosis"],
          ["Bleomycin", "IV per protocol", "Cumulative over about 400 units", "Fibrosis; avoid high FiO2"],
          ["Inhaled steroid", "MDI with spacer or DPI twice daily", "Long-term", "Oral thrush, hoarseness; rinse mouth"],
          ["ACE inhibitor", "Oral daily", "Weeks to months", "Dry cough with a normal chest"],
        ],
      },
      {
        heading: "Signs of the classic lesions",
        columns: ["Lesion", "Trachea", "Percussion", "Breath sounds", "Vocal resonance"],
        rows: [
          ["Consolidation", "Central", "Dull", "Bronchial", "Increased"],
          ["Collapse, blocked bronchus", "Towards", "Dull", "Absent or reduced", "Decreased"],
          ["Pleural effusion", "Away (if large)", "Stony dull", "Absent or reduced", "Decreased"],
          ["Pneumothorax", "Away (if tension)", "Hyperresonant", "Absent or reduced", "Decreased"],
          ["Upper-lobe fibrosis", "Towards", "Impaired or dull", "Bronchial", "Increased"],
          ["Emphysema", "Central, tracheal tug", "Hyperresonant", "Reduced, prolonged expiration", "Decreased"],
        ],
      },
      {
        heading: "Clubbing grades",
        columns: ["Grade", "Finding"],
        rows: [
          ["1", "Nail-bed fluctuation and softening"],
          ["2", "Loss of nail-fold angle"],
          ["3", "Increased convexity, drumstick or parrot-beak"],
          ["4", "Hypertrophic pulmonary osteoarthropathy"],
        ],
      },
    ],
    remember: [
      "Four causes of bronchial breathing: **consolidation, collapse with open bronchus, fibrosis, above effusion**.",
      "Trachea = upper mediastinum; apex = lower mediastinum.",
      "Pleural rub stops on breath-holding; pericardial rub does not.",
      "Effusion triad: **stony dull, Skodaic band above, aegophony at the upper border**.",
      "Shifting dullness in the chest only with **hydropneumothorax**.",
      "Clubbing in a smoker with COPD is **cancer until proved otherwise**.",
    ],
  },
};

revision["respiratory-pft-spirometry"] = {
  checked: "2026-10",
  updated: [
    "ATS/ERS 2019 spirometry standard: BEV under 5% FVC or 0.100 L, repeatability 0.150 L, quality grades A-F, withholding times.",
    "ERS/ATS 2022 interpretation: LLN and z-scores, severity by FEV1 z-score, BDR over 10% of predicted, non-specific pattern.",
    "ATS 2023: race-neutral GLI Global equations.",
    "GOLD 2025: fixed post-BD ratio under 0.70 kept; PRISm described.",
    "BTS/NICE/SIGN NG245 2024: FeNO 50 ppb adults, 35 ppb children as a positive asthma test.",
    "GINA 2025: BDR 12% and 200 mL and PEF variability over 10% retained (differs from ERS/ATS 2022).",
  ],
  master: {
    heading: "Pulmonary function tests - what to write",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Spirometry (FEV1, FVC, ratio), lung volumes (TLC, RV), DLCO; interpret against GLI LLN (z -1.645)"],
      ["Indications", "Diagnose asthma, COPD, ILD; monitor; pre-op; drug toxicity; neuromuscular; occupational"],
      ["Contraindications", "MI within 1 week, recent surgery, pneumothorax, haemoptysis, aneurysm, active TB"],
      ["Quality", "BEV under 5% or 0.100 L; plateau or 15 s; 3 acceptable blows; repeatability 0.150 L; grade A-F"],
      ["Obstruction", "FEV1/FVC below LLN (GOLD: post-BD under 0.70); scooped loop; RV/TLC high"],
      ["Restriction", "TLC below LLN; ratio normal or high; witch's hat loop"],
      ["Mixed / non-specific / PRISm", "Ratio and TLC both low; low FVC with normal TLC; ratio 0.70+ with FEV1 under 80%"],
      ["Severity", "ERS/ATS 2022 FEV1 z -1.65/-2.5/-4; GOLD 1-4 by FEV1 80/50/30%"],
      ["BDR", "Salbutamol 400 mcg spacer, 10-15 min; positive over 10% predicted (2022) or 12% + 200 mL (GINA)"],
      ["Flow-volume loops", "Fixed UAO both limbs flat; variable extrathoracic inspiratory; intrathoracic expiratory; Empey over 10"],
      ["DLCO", "Low: emphysema, ILD, PVD, anaemia; high: haemorrhage, polycythaemia, shunt, asthma; KCO for extraparenchymal"],
      ["Other tests", "PEF variability over 10%; FeNO 50 ppb; methacholine PD20 over 400 mcg normal; 6MWT MID 25-33 m"],
      ["Follow-up", "COPD yearly; asthma 3-6 months after ICS then 1-2 yearly; ILD FVC/DLCO 3-6 monthly"],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Reading a PFT report (ERS/ATS 2022)",
      caption: "Check quality first, then ratio, then volumes, then DLCO.",
      steps: [
        { label: "Is the test acceptable and repeatable?", detail: "Grade A-C; plateau reached; best FEV1 and FVC within 0.150 L", tone: "decision" },
        { label: "FEV1/FVC below LLN?", detail: "Yes - obstruction; check BDR (over 10% predicted)", tone: "decision" },
        { label: "If ratio normal: is FVC below LLN?", detail: "Possible restriction - measure TLC" },
        { label: "TLC below LLN?", detail: "Yes - restriction; with low ratio - mixed; normal TLC - non-specific pattern", tone: "decision" },
        { label: "Grade severity by FEV1 z-score", detail: "-1.65 to -2.5 mild; -2.5 to -4 moderate; below -4 severe" },
        { label: "Add DLCO and KCO", detail: "Low DLCO + low KCO parenchymal; normal/high KCO extraparenchymal; isolated low - vascular" },
        { label: "Look at the flow-volume loop shape", detail: "Plateau on either limb - upper airway obstruction", tone: "warn" },
      ],
    },
    {
      kind: "branch",
      heading: "Upper airway obstruction on the flow-volume loop",
      root: "Plateau instead of a peak",
      arms: [
        { label: "Fixed", tone: "warn", steps: ["Both limbs flat", "FEF50/FIF50 about 1", "Post-intubation stenosis, goitre"] },
        { label: "Variable extrathoracic", steps: ["Inspiratory limb flat", "FEF50/FIF50 well above 1", "Vocal cord palsy, vocal cord dysfunction"] },
        { label: "Variable intrathoracic", steps: ["Expiratory limb flat", "FEF50/FIF50 well below 1", "Tracheomalacia, lower tracheal tumour"] },
      ],
    },
    {
      kind: "compare",
      heading: "Obstructive versus restrictive PFTs",
      columns: ["Feature", "Obstructive", "Restrictive (parenchymal)"],
      rows: [
        ["FEV1/FVC", "Below LLN", "Normal or high"],
        ["TLC", "Normal or high", "Below LLN"],
        ["RV/TLC", "High (air trapping)", "Normal"],
        ["DLCO", "Low in emphysema, normal in asthma", "Low, KCO low"],
        ["Loop", "Scooped expiratory limb", "Tall narrow witch's hat"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**Spirometry** gives FEV1, FVC and the FEV1/FVC ratio from a maximal forced breath.",
          "**Lung volumes** need plethysmography or gas dilution; spirometry cannot measure RV.",
          "**DLCO** measures CO uptake in a 10-second breath-hold; correct it for haemoglobin.",
          "Normal FEV1 falls about **20-30 mL a year** after 25-30; susceptible smokers lose far more.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "Flow after early expiration is **effort-independent** due to dynamic compression at the equal pressure point.",
          "**Obstruction** lowers FEV1 more than FVC, so the ratio falls.",
          "**ILD** raises recoil, so the ratio is normal or high and DLCO is low.",
          "**Extraparenchymal restriction** lowers TLC but KCO stays normal or high.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "Withhold **SABA 4-6 h, SAMA 12 h, LABA 24 h, LAMA 36-48 h** before a diagnostic test.",
          "Quality: **BEV under 5%**, plateau or 15 s, repeatability within **0.150 L**, grade A-F.",
          "Report the **largest FEV1 and largest FVC**, even from different blows.",
          "Use **GLI equations and LLN** (z-score -1.645), not 80% predicted.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**Obstruction**: FEV1/FVC below LLN; GOLD keeps post-BD under 0.70.",
          "**Restriction** needs TLC below LLN; low FVC alone is only possible restriction.",
          "**Mixed**: low ratio plus low TLC. **Non-specific**: low FVC, normal ratio and TLC.",
          "**PRISm**: ratio 0.70 or more with FEV1 under 80% predicted.",
          "Severity by **FEV1 z-score**: mild -1.65 to -2.5, moderate -2.5 to -4, severe below -4.",
          "**BDR**: over 10% of predicted FEV1 or FVC (2022); GINA keeps 12% and 200 mL.",
        ],
      },
      {
        title: "Differential diagnosis",
        points: [
          "**Low DLCO + obstruction** suggests emphysema; normal DLCO suggests asthma.",
          "**Isolated low DLCO** suggests pulmonary vascular disease, early ILD or anaemia.",
          "**High DLCO**: alveolar haemorrhage, polycythaemia, shunt, asthma, obesity.",
          "**CPFE**: near-normal spirometry with a very low DLCO.",
          "Flat **inspiratory limb** is extrathoracic; flat **expiratory limb** is intrathoracic; both flat is fixed.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "BDR: **salbutamol 400 mcg** by spacer, repeat at 10-15 minutes.",
          "Alternative: **ipratropium 160 mcg**, repeat at 30 minutes.",
          "Without a spirometer, use a **2-week PEF diary**; variability over 10% supports asthma.",
          "**FeNO 50 ppb or more** in adults supports asthma (NICE/BTS/SIGN 2024).",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Children** have a high normal ratio; the fixed 0.70 misses obstruction.",
          "**Elderly** have a lower normal ratio; LLN avoids overdiagnosis.",
          "**Pregnancy** does not change FEV1 or FVC, so low values are disease.",
          "**Neuromuscular**: supine VC fall over 25% suggests diaphragm weakness; use the 20-30-40 rule.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "Refer for **full PFTs** if FVC is low with a normal ratio or breathlessness is unexplained.",
          "Repeat spirometry **yearly in COPD** and 3-6 monthly FVC and DLCO in ILD.",
          "A **10% FVC fall in a year** in ILD means progressive fibrosis.",
          "Any **upper airway obstruction loop** needs CT and bronchoscopy.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ATS/ERS 2019** set new acceptability, repeatability and grading rules.",
          "**ERS/ATS 2022** moved to LLN, z-scores and the 10% predicted BDR.",
          "**ATS 2023** recommends race-neutral **GLI Global** equations.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs used in or withheld for lung function testing",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Salbutamol", "400 mcg MDI via spacer", "Spirometry at 10-15 min; withhold 4-6 h before", "Tremor, tachycardia"],
          ["Ipratropium", "160 mcg MDI via spacer", "Spirometry at 30 min; withhold 12 h before", "Dry mouth; glaucoma, retention"],
          ["LABA (formoterol, salmeterol)", "Usual inhaled dose", "Withhold 24 h", "Do not withhold in unstable asthma"],
          ["Once-daily LAMA or LABA", "Usual inhaled dose", "Withhold 36-48 h", "As above"],
          ["Methacholine", "Inhaled escalating doses", "Until 20% FEV1 fall or maximum", "Bronchospasm; avoid if FEV1 under 60% or 1.5 L"],
          ["Montelukast", "10 mg oral daily", "Withhold 24 h before challenge", "Neuropsychiatric effects"],
        ],
      },
      {
        heading: "PFT patterns",
        columns: ["Pattern", "FEV1/FVC", "TLC", "DLCO", "Examples"],
        rows: [
          ["Obstructive", "Below LLN", "Normal or high", "Low in emphysema", "Asthma, COPD"],
          ["Restrictive parenchymal", "Normal or high", "Below LLN", "Low, KCO low", "IPF, sarcoid"],
          ["Restrictive extraparenchymal", "Normal", "Below LLN", "KCO normal or high", "Obesity, kyphoscoliosis, NMD"],
          ["Mixed", "Below LLN", "Below LLN", "Variable", "COPD plus ILD, post-TB"],
          ["Isolated low DLCO", "Normal", "Normal", "Low", "Pulmonary vascular disease, anaemia"],
        ],
      },
      {
        heading: "Flow-volume loop patterns",
        columns: ["Pattern", "Limb affected", "Causes"],
        rows: [
          ["Fixed UAO", "Both flat", "Tracheal stenosis, goitre"],
          ["Variable extrathoracic", "Inspiratory flat", "Vocal cord palsy, VCD"],
          ["Variable intrathoracic", "Expiratory flat", "Tracheomalacia, lower tracheal tumour"],
          ["Obstructive", "Expiratory scooped", "Asthma, COPD"],
          ["Restrictive", "Small, tall, narrow", "ILD, chest wall"],
        ],
      },
    ],
    remember: [
      "Restriction is a **TLC** diagnosis, never an FVC diagnosis.",
      "**Empey index** over 10 means upper airway obstruction.",
      "Extrathoracic = **inspiratory** flattening; intrathoracic = **expiratory** flattening.",
      "Raised DLCO: **haemorrhage, polycythaemia, shunt, asthma, obesity**.",
      "2022 BDR: **over 10% of predicted**; GINA: **12% and 200 mL**.",
      "Neuromuscular **20-30-40**: VC 20 mL/kg, MIP -30, MEP 40 cmH2O.",
    ],
  },
};

revision["respiratory-abg-interpretation"] = {
  checked: "2026-10",
  updated: [
    "ADA/EASD/JBDS/AACE/DTS 2024 hyperglycaemic crises consensus: DKA criteria, euglycaemic DKA, bicarbonate only if pH under 7.0.",
    "Global ARDS definition 2023/2024: SpO2/FiO2 315 or less allowed in place of P/F.",
    "KDIGO CKD 2024: alkali therapy when bicarbonate persistently under 18 mmol/L.",
    "Surviving Sepsis 2021: no bicarbonate for lactic acidaemia with pH 7.2 or more; consider below 7.2 with AKI.",
    "FDA 2025 draft oximeter guidance: confirm borderline SpO2 with ABG in darker skin.",
  ],
  master: {
    heading: "ABG interpretation - what to write",
    columns: ["Heading", "What to write"],
    rows: [
      ["Normal values", "pH 7.35-7.45, PaCO2 35-45, HCO3 22-26, PaO2 80-100 mmHg, BE -2 to +2"],
      ["Sampling", "Radial, modified Allen, dry heparin, no bubbles, analyse within 30 min, record FiO2"],
      ["Oxygenation", "P/F ratio; A-a gradient with PAO2 = 150 - 1.25 x PaCO2; normal about age/4 + 4"],
      ["Primary disorder", "pH and PaCO2 opposite = respiratory; pH and HCO3 same = metabolic"],
      ["Compensation", "Winter 1.5 x HCO3 + 8; alkalosis 0.7 x HCO3 + 21; resp acid 1 and 3.5; resp alk 2 and 4-5"],
      ["Anion gap", "Na - (Cl + HCO3), 8-12; add 2.5 per g/dL albumin below 4"],
      ["Delta ratio", "Under 0.4 NAGMA; 0.4-0.8 mixed; 1-2 pure HAGMA; over 2 plus metabolic alkalosis"],
      ["Osmolar gap", "Over 10 - methanol, ethylene glycol"],
      ["HAGMA causes", "GOLD MARK"],
      ["NAGMA causes", "Diarrhoea, RTA, saline, acetazolamide, ureteric diversion; urine anion gap"],
      ["Alkalosis", "Urine Cl under 20 saline-responsive; over 20 mineralocorticoid, Bartter, Gitelman, current diuretic"],
      ["VBG", "pH 0.03 lower, HCO3 1-2 higher; PvCO2 under 45 excludes hypercapnia; PvO2 useless"],
      ["Treatment", "Treat cause; controlled O2 88-92% if hypercapnia risk; NIV pH under 7.35 + PaCO2 over 49; bicarbonate selectively"],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Stepwise ABG interpretation",
      caption: "Write each step with the numbers.",
      steps: [
        { label: "Oxygenation: PaO2, FiO2, P/F, A-a gradient", detail: "PAO2 = 150 - 1.25 x PaCO2 on room air" },
        { label: "pH: acidaemia or alkalaemia?", detail: "Normal pH with abnormal values = mixed", tone: "decision" },
        { label: "Primary disorder: respiratory or metabolic", detail: "Look at direction of PaCO2 and HCO3", tone: "decision" },
        { label: "Is compensation appropriate?", detail: "Winter 1.5 x HCO3 + 8 plus or minus 2; outside range = second disorder" },
        { label: "Anion gap, corrected for albumin", detail: "Over 12 = high-AG acidosis" },
        { label: "Delta ratio and osmolar gap", detail: "Hidden NAGMA or alkalosis; osmolar gap over 10 = toxic alcohol", tone: "warn" },
        { label: "Name disorder, cause and next test", tone: "good" },
      ],
    },
    {
      kind: "branch",
      heading: "Metabolic acidosis by anion gap",
      root: "Low pH, low HCO3",
      arms: [
        { label: "High anion gap", tone: "warn", steps: ["GOLD MARK", "Check lactate, ketones, renal function", "Osmolar gap over 10 - methanol or glycol"] },
        { label: "Normal anion gap", steps: ["Diarrhoea, RTA, saline, acetazolamide", "Urine anion gap negative - GI loss", "Urine anion gap positive - distal RTA"] },
      ],
    },
    {
      kind: "compare",
      heading: "Acute versus chronic respiratory acidosis",
      columns: ["Feature", "Acute", "Chronic"],
      rows: [
        ["HCO3 rise per 10 mmHg PaCO2", "1 mmol/L", "3.5-4 mmol/L"],
        ["pH fall per 10 mmHg PaCO2", "About 0.08", "About 0.03"],
        ["Time course", "Minutes to hours", "3-5 days of renal compensation"],
        ["Example", "Opioid overdose, acute asthma", "Stable COPD, obesity hypoventilation"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "Normal: **pH 7.35-7.45, PaCO2 35-45, HCO3 22-26, PaO2 80-100** mmHg.",
          "**Type 1 failure**: PaO2 under 60 with normal or low PaCO2.",
          "**Type 2 failure**: PaO2 under 60 with PaCO2 over 45-50.",
          "pH depends on the **ratio** of HCO3 to PaCO2 (Henderson-Hasselbalch).",
          "Always record **FiO2**; PaO2 means nothing without it.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "Respiratory compensation takes **12-24 hours**; renal compensation takes **3-5 days**.",
          "**Compensation never overcorrects** the pH.",
          "**A-a gradient** is normal in hypoventilation and raised in lung disease.",
          "**Shunt** does not correct with oxygen; V/Q mismatch does.",
          "Acidaemia raises serum **potassium**; correcting it lowers potassium.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**Winter**: expected PaCO2 = 1.5 x HCO3 + 8, plus or minus 2.",
          "**Metabolic alkalosis**: expected PaCO2 = 0.7 x HCO3 + 21.",
          "**Respiratory acidosis**: HCO3 up 1 (acute) or 3.5-4 (chronic) per 10 mmHg.",
          "**Respiratory alkalosis**: HCO3 down 2 (acute) or 4-5 (chronic) per 10 mmHg.",
          "**Anion gap** = Na - (Cl + HCO3); add 2.5 per g/dL albumin below 4.",
        ],
      },
      {
        title: "Causes and risk factors",
        points: [
          "**High AG**: glycols, oxoproline, lactate, methanol, aspirin, renal failure, ketoacidosis.",
          "**Normal AG**: diarrhoea, RTA, saline, acetazolamide, ureteric diversion.",
          "**Alkalosis**: vomiting and diuretics (urine Cl under 20) or mineralocorticoid excess (over 20).",
          "**Respiratory acidosis**: opioids, neuromuscular weakness, COPD, obesity hypoventilation.",
          "**Respiratory alkalosis**: anxiety, sepsis, PE, pregnancy, altitude, early salicylate.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**Delta ratio** over 2 hides a metabolic alkalosis; under 0.4 hides a normal-AG acidosis.",
          "**Osmolar gap** over 10 with high AG suggests methanol or ethylene glycol.",
          "**Urine anion gap** negative in diarrhoea, positive in distal RTA.",
          "**VBG** is fine for pH, HCO3, lactate and K; venous PO2 is useless.",
          "**Venous PCO2 under 45** excludes arterial hypercapnia.",
          "**Lactate over 4** with hypotension marks high-risk sepsis.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "**Treat the cause**: fluids and insulin in DKA, source control in sepsis.",
          "Target **SpO2 88-92%** with a Venturi mask in those at risk of hypercapnia.",
          "**NIV** if pH under 7.35 and PaCO2 over 49 mmHg in COPD.",
          "**Naloxone** for opioid hypoventilation; oxygen alone is not enough.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "**Bicarbonate** only for pH 7.2 or less with AKI, DKA with pH under 7.0, or bicarbonate loss.",
          "**Methanol**: fomepizole or ethanol, folinic acid, bicarbonate and early dialysis.",
          "**Saline-responsive alkalosis**: 0.9% saline with potassium chloride.",
          "Lower chronic hypercapnia **slowly** to avoid post-hypercapnic alkalosis.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Pregnancy**: normal PaCO2 is 28-32; a PaCO2 of 40 is a danger sign.",
          "**Elderly**: normal A-a gradient is about age/4 + 4.",
          "**SGLT2 inhibitors**: euglycaemic DKA with near-normal glucose.",
          "**CKD**: oral bicarbonate when HCO3 persistently under 18 (KDIGO 2024).",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ADA 2024** DKA: ketones 3.0 or more, pH under 7.3 or HCO3 under 18.",
          "**Global ARDS 2023** allows SpO2/FiO2 315 or less without an ABG.",
          "**FDA 2025**: oximeters may overestimate SpO2 in darker skin.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs in acid-base and blood gas disorders",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Sodium bicarbonate 8.4%", "50-100 mmol IV over 30-60 min", "Repeat by gas; aim pH over 7.2", "Hypernatraemia, overload, low K, raised PaCO2"],
          ["Potassium chloride", "IV 10-20 mmol/h peripherally", "Titrate to K 4-5", "Never bolus; phlebitis"],
          ["Acetazolamide", "250-500 mg IV or oral once or twice daily", "1-3 days", "Hypokalaemia; sulfonamide allergy"],
          ["Fomepizole", "15 mg/kg IV load, then 10 mg/kg 12-hourly", "Until alcohol cleared", "Ethanol is the alternative"],
          ["Naloxone", "0.4-2 mg IV, repeat every 2-3 min", "Infusion for long-acting opioids", "Withdrawal, pulmonary oedema"],
          ["Venturi oxygen", "24-28% mask", "Target SpO2 88-92%; ABG within 60 min", "Uncontrolled oxygen worsens hypercapnia"],
        ],
      },
      {
        heading: "Compensation formulas",
        columns: ["Primary disorder", "Expected compensation"],
        rows: [
          ["Metabolic acidosis", "PaCO2 = 1.5 x HCO3 + 8 plus or minus 2"],
          ["Metabolic alkalosis", "PaCO2 = 0.7 x HCO3 + 21 plus or minus 2"],
          ["Acute respiratory acidosis", "HCO3 up 1 per 10 mmHg"],
          ["Chronic respiratory acidosis", "HCO3 up 3.5-4 per 10 mmHg"],
          ["Acute respiratory alkalosis", "HCO3 down 2 per 10 mmHg"],
          ["Chronic respiratory alkalosis", "HCO3 down 4-5 per 10 mmHg"],
        ],
      },
      {
        heading: "Delta ratio interpretation",
        columns: ["Delta ratio", "Meaning"],
        rows: [
          ["Under 0.4", "Pure normal-AG acidosis"],
          ["0.4-0.8", "High-AG plus normal-AG acidosis (renal failure)"],
          ["1-2", "Pure high-AG acidosis (lactic about 1.6, DKA about 1)"],
          ["Over 2", "High-AG acidosis plus metabolic alkalosis or chronic respiratory acidosis"],
        ],
      },
    ],
    remember: [
      "**GOLD MARK** for high anion gap acidosis.",
      "PaCO2 roughly equals the **last two digits of pH** in compensated metabolic acidosis.",
      "Normal A-a gradient with hypoxaemia = **hypoventilation**.",
      "**Salicylate** = respiratory alkalosis plus high-AG acidosis.",
      "Never skip the **albumin correction** of the anion gap.",
      "High COPD bicarbonate is usually **compensation**, not alkalosis.",
    ],
  },
};

revision["respiratory-chest-imaging"] = {
  checked: "2026-10",
  updated: [
    "ATS/ERS/JRS/ALAT 2022: four HRCT categories, probable UIP accepted, progressive pulmonary fibrosis defined.",
    "Fleischner Society glossary 2024 update of thoracic imaging terms.",
    "BTS Pleural Disease Guideline 2023: ultrasound guidance for all pleural procedures; symptom-based pneumothorax care.",
    "International lung ultrasound consensus 2023: standard B-line and consolidation definitions.",
    "ACR Lung-RADS v2022 and ACS 2023 screening eligibility (50-80 years, 20 pack-years, no quit-time limit).",
    "WHO 2021 CAD for TB screening; AI-assisted handheld X-ray in the 2024-2025 TB Mukt Bharat campaign.",
  ],
  master: {
    heading: "Chest X-ray and CT - what to write",
    columns: ["Heading", "What to write"],
    rows: [
      ["Quality", "Details, PA/AP, RIPE: rotation, inspiration (6 anterior ribs), projection, exposure"],
      ["Systematic read", "ABCDE: airway, bones, cardiac/mediastinum/hila, diaphragm, everything; then hidden areas"],
      ["Silhouette sign", "RML right heart border; lingula left heart border; RLL/LLL hemidiaphragms; LUL aortic knob"],
      ["Collapse", "Fissure shift, volume loss; Golden S (RUL), sail sign (LLL), luftsichel (LUL)"],
      ["Consolidation", "Homogeneous opacity, air bronchogram, no volume loss"],
      ["Effusion / pneumothorax", "Blunting needs about 200 mL; meniscus; pleural line with no markings; deep sulcus supine"],
      ["Cavity and miliary", "Wall 4 mm or less benign, 15 mm or more malignant; miliary 1-3 mm - TB first"],
      ["Nodule", "Up to 3 cm; mass over 3 cm; Fleischner 2017 for incidental; Lung-RADS for screening"],
      ["HRCT", "UIP, NSIP, GGO, crazy paving, tree-in-bud, mosaic, nodule distribution, cysts"],
      ["CTPA / PET-CT", "CTPA after Wells/D-dimer; V/Q in pregnancy, CKD, allergy; PET for staging, TB false positives"],
      ["Lung ultrasound", "Sliding, A-lines, B-lines (3+), lung point, spine sign, BLUE protocol"],
      ["Safety", "CXR 0.02 mSv, CT 5-7, LDCT 1-1.5; contrast AKI risk at eGFR under 30; hold metformin"],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Reading a chest X-ray",
      caption: "Same order every time, then compare with old films.",
      steps: [
        { label: "Patient details, date, PA or AP", detail: "AP magnifies the heart" },
        { label: "Quality: RIPE", detail: "Clavicles equidistant; 6 anterior ribs; vertebrae just visible behind heart", tone: "decision" },
        { label: "Airway and bones", detail: "Trachea, carina, ribs, clavicles, soft tissue" },
        { label: "Cardiac, mediastinum, hila", detail: "CTR under 0.5 on PA; hilar size and density" },
        { label: "Diaphragm and angles", detail: "Free gas, blunting, height" },
        { label: "Lung fields, zone by zone", detail: "Silhouette sign, air bronchogram, volume loss" },
        { label: "Hidden areas and lines", detail: "Apices, retrocardiac, below diaphragm; ETT 5 cm above carina", tone: "warn" },
        { label: "Summarise and compare with old films", tone: "good" },
      ],
    },
    {
      kind: "branch",
      heading: "White hemithorax - which way is the mediastinum?",
      root: "Opaque hemithorax",
      arms: [
        { label: "Shifted away", tone: "warn", steps: ["Massive effusion", "Ultrasound and diagnostic tap", "Large tumour mass"] },
        { label: "Shifted towards", steps: ["Whole-lung collapse", "Pneumonectomy", "Post-TB destroyed lung"] },
        { label: "Central", steps: ["Consolidation", "Collapse plus effusion", "Mesothelioma fixing the mediastinum"] },
      ],
    },
    {
      kind: "compare",
      heading: "UIP versus NSIP on HRCT",
      columns: ["Feature", "UIP", "NSIP"],
      rows: [
        ["Main finding", "Reticulation with honeycombing", "Ground glass with fine reticulation"],
        ["Distribution", "Subpleural, basal, heterogeneous", "Basal, symmetric, subpleural sparing"],
        ["Honeycombing", "Present", "Little or none"],
        ["Typical cause", "IPF, RA-ILD, asbestosis", "Connective tissue disease, drugs"],
        ["Prognosis", "Worse", "Better, steroid-responsive"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "Standard film is **PA erect** at full inspiration; AP magnifies the heart.",
          "Doses: **CXR 0.02 mSv**, CT chest 5-7 mSv, low-dose CT 1-1.5 mSv.",
          "NTEP uses **CXR with NAAT**; any TB-like shadow needs sputum testing.",
          "WHO 2021 allows **AI (CAD)** reading of CXR for TB screening at 15 years and over.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "**Silhouette sign**: a lesion hides the border it touches.",
          "**Air bronchogram** means airspaces are filled; the opacity is in the lung.",
          "**Collapse** shows volume loss: fissure shift, mediastinal pull, raised diaphragm.",
          "**Kerley B lines** are thickened septa: oedema, lymphangitis, pneumoconiosis.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**RUL collapse**: raised horizontal fissure; Golden reverse S with a central mass.",
          "**RML**: right heart border lost. **RLL**: right hemidiaphragm lost, heart border kept.",
          "**LUL**: veil-like haze and **luftsichel** crescent around the aortic knob.",
          "**LLL**: **sail sign** behind the heart; left hemidiaphragm lost.",
          "Collapse causes: **tumour, mucus plug, endobronchial TB**; foreign body in children.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "Effusion blunts the angle at about **200 mL** on PA; ultrasound sees 20 mL.",
          "Cavity wall **4 mm or less** usually benign; **15 mm or more** often malignant.",
          "**Miliary** 1-3 mm nodules: TB first, then metastases, silicosis, sarcoid.",
          "Nodule up to 3 cm; **mass over 3 cm** is malignant until proved otherwise.",
          "Pneumonia may take **6 weeks or more** to clear on film.",
        ],
      },
      {
        title: "Differential diagnosis",
        points: [
          "**UIP**: subpleural basal honeycombing; IPF in the right setting.",
          "**NSIP**: ground glass with subpleural sparing; connective tissue disease.",
          "**Tree-in-bud**: active TB or bronchiolitis.",
          "**Mosaic attenuation**: small airway disease, HP or CTEPH; check expiratory images.",
          "**Crazy paving**: alveolar proteinosis, PCP, ARDS.",
          "**Halo sign** in neutropenia suggests invasive aspergillosis.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "**HRCT** for suspected ILD or bronchiectasis.",
          "**CTPA** for suspected PE after Wells and D-dimer; V/Q if pregnant with normal CXR.",
          "**PET-CT** for staging and nodules 8 mm or more; TB gives false positives.",
          "**Contrast CT** for mass, empyema, haemoptysis and mediastinum.",
          "**Lung ultrasound**: lung point for pneumothorax, B-lines for oedema.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Pregnancy**: CXR fetal dose under 0.01 mGy; never withhold a needed film.",
          "**Children**: use ALARA and ultrasound; look for foreign body air trapping.",
          "**HIV**: a normal CXR does not exclude PCP or TB.",
          "**CKD**: contrast AKI risk mainly at eGFR under 30; hold metformin.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Lobar collapse** in an adult smoker means endobronchial tumour until proved otherwise.",
          "**Widened mediastinum** with chest pain needs dissection excluded.",
          "**Free gas** under the diaphragm needs surgical review.",
          "Have **adrenaline 0.5 mg IM** ready for contrast anaphylaxis.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**2022 IPF guideline**: probable UIP accepted; progressive pulmonary fibrosis defined.",
          "**BTS 2023**: ultrasound guidance for all pleural procedures.",
          "**Lung-RADS v2022** and **ACS 2023** screening rules.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs and agents in chest imaging",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Iodinated contrast", "About 50-100 mL IV (1-1.5 mL/kg)", "Single dose", "Reactions; AKI risk at eGFR under 30"],
          ["Prednisolone premedication", "50 mg oral at 13, 7 and 1 h before", "Single course", "Hyperglycaemia"],
          ["Pheniramine premedication", "22.75 mg IV 1 h before", "Single dose", "Sedation"],
          ["Adrenaline", "0.5 mg IM thigh", "Repeat every 5 min if needed", "Arrhythmia; never withhold in anaphylaxis"],
          ["0.9% saline", "1 mL/kg/h IV for 6-12 h before and after", "Only if eGFR under 30 or AKI", "Fluid overload"],
          ["Metformin", "Hold at time of contrast", "Restart after 48 h if renal function stable", "Lactic acidosis with AKI"],
        ],
      },
      {
        heading: "Silhouette sign map",
        columns: ["Border lost", "Lobe"],
        rows: [
          ["Right heart border", "Right middle lobe"],
          ["Right hemidiaphragm", "Right lower lobe"],
          ["Ascending aorta / SVC", "Right upper lobe"],
          ["Left heart border", "Lingula"],
          ["Aortic knob", "Left upper lobe"],
          ["Left hemidiaphragm / descending aorta", "Left lower lobe"],
        ],
      },
      {
        heading: "HRCT nodule distribution",
        columns: ["Distribution", "Look", "Causes"],
        rows: [
          ["Perilymphatic", "Along fissures, septa, bronchovascular bundles", "Sarcoidosis, lymphangitis, silicosis"],
          ["Centrilobular", "Spare the pleura; may be tree-in-bud", "HP, TB, bronchiolitis, RB-ILD"],
          ["Random", "Uniform, touch fissures", "Miliary TB, metastases, fungal"],
        ],
      },
    ],
    remember: [
      "**RIPE**: rotation, inspiration, projection, exposure.",
      "**Sail sign** = LLL collapse; **luftsichel** = LUL collapse; **Golden S** = RUL collapse with mass.",
      "Fissure shift is the **most reliable** sign of collapse.",
      "Heart failure **ABCDE**: alveolar oedema, B lines, cardiomegaly, dilated upper veins, effusion.",
      "**Lung point** is about 100% specific for pneumothorax.",
      "Always check the **hidden areas**: apices, behind heart, below diaphragm, hila.",
    ],
  },
};

export default revision;
