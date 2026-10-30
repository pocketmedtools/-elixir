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

export default revision;
