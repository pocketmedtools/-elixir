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

export default revision;
