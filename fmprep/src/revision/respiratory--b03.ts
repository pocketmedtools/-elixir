import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-acute-severe-asthma": {
    checked: "2026-10",
    updated: [
      "GINA 2025: oxygen target 93-95% in adults, 94-98% in children 6-11; titrated beats high-flow oxygen",
      "GINA 2025: budesonide-formoterol can be the reliever in mild-moderate attacks for patients on MART",
      "GINA 2025: every patient leaves the ED on ICS-containing treatment, with review in 2-7 days",
      "BTS/NICE/SIGN 2024 (NG245) covers chronic asthma; acute management still follows BTS/SIGN 2019",
      "GINA 2025 advises against aminophylline; BTS/SIGN 2019 keeps it as a senior decision",
    ],
    master: {
      heading: "Acute severe asthma - the whole answer in one table",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Any one of PEF 33-50%, RR 25 or more, HR 110 or more, cannot complete sentences (BTS/SIGN)"],
        ["Life-threatening", "PEF under 33%, SpO2 under 92%, PaO2 under 8 kPa, normal PaCO2, silent chest, cyanosis, exhaustion, arrhythmia, hypotension"],
        ["Near-fatal", "Raised PaCO2 or need for ventilation with raised inflation pressures"],
        ["Burden", "India: 13% of global asthma, over 40% of asthma deaths; INSEARCH adult prevalence about 2%"],
        ["Fatal-risk markers", "Previous intubation/ICU, admission in past year, recent OCS, no ICS, over 1 SABA canister a month, psychosocial problems"],
        ["Pathophysiology", "Spasm, oedema, mucus plugs; dynamic hyperinflation and auto-PEEP; low PaCO2 early, normal PaCO2 means fatigue"],
        ["Investigations", "PEF, SpO2; ABG if SpO2 under 92%; K+, glucose; X-ray only if pneumothorax, consolidation or no response"],
        ["Oxygen", "Target 93-95% (GINA) or 94-98% (BTS); oxygen-driven nebulisers at 6 L/min"],
        ["Bronchodilators", "Salbutamol 5 mg neb every 15-30 min or 5-10 mg/hour continuous; ipratropium 0.5 mg 4-6 hourly"],
        ["Steroid", "Prednisolone 40-50 mg for at least 5 days or hydrocortisone 100 mg IV 6-hourly, within 1 hour"],
        ["Poor response", "Magnesium sulphate 1.2-2 g IV over 20 min; aminophylline only by senior; no antibiotics or sedatives"],
        ["ICU", "Rising PaCO2, acidosis, exhaustion, drowsiness; NIV not routine; ketamine, low rate, long expiration"],
        ["Discharge", "PEF over 75%, stable 12-24 hours, ICS controller, technique, action plan, GP review in 2 working days"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Acute asthma - grade it in the first minutes",
        caption: "BTS/SIGN grading using bedside signs, PEF and SpO2.",
        steps: [
          { label: "Breathless known asthmatic: speech, RR, HR, SpO2, PEF", detail: "Start salbutamol and oxygen while assessing" },
          { label: "Any life-threatening sign?", detail: "PEF under 33%, SpO2 under 92%, silent chest, cyanosis, exhaustion, hypotension", tone: "decision" },
          { label: "Yes: life-threatening - ABG, senior, ICU alert", detail: "Normal PaCO2 4.6-6.0 kPa also life-threatening", tone: "warn" },
          { label: "Any severe sign?", detail: "PEF 33-50%, RR 25 or more, HR 110 or more, cannot finish sentences", tone: "decision" },
          { label: "Yes: acute severe - hospital treatment", detail: "Nebulised salbutamol plus ipratropium, steroid, oxygen 93-95%" },
          { label: "No: moderate - PEF over 50%", detail: "Spacer salbutamol, prednisolone; may go home if PEF over 75%", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Acute severe asthma - escalation ladder",
        caption: "Step up every 15-30 minutes if PEF and SpO2 do not improve.",
        steps: [
          { label: "Oxygen to SpO2 93-95%", detail: "Avoid uncontrolled 100% oxygen" },
          { label: "Salbutamol 5 mg nebulised", detail: "Every 15-30 min; continuous 5-10 mg/hour if severe" },
          { label: "Add ipratropium 0.5 mg", detail: "4-6 hourly in severe or life-threatening attacks" },
          { label: "Prednisolone 40-50 mg or hydrocortisone 100 mg IV", detail: "Within the first hour, at least 5 days" },
          { label: "Magnesium sulphate 1.2-2 g IV over 20 min", detail: "Single dose if poor response or PEF under 25-30%", tone: "decision" },
          { label: "Senior: aminophylline in selected cases", detail: "5 mg/kg load then 0.5-0.7 mg/kg/hour; GINA advises against", tone: "warn" },
          { label: "ICU: intubate with ketamine", detail: "Low rate, long expiration, permissive hypercapnia", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Acute asthma versus AECOPD at the emergency door",
        columns: ["Feature", "Acute asthma", "AECOPD"],
        rows: [
          ["Oxygen target", "93-95% (GINA)", "88-92%"],
          ["Early ABG", "Low PaCO2; normal means danger", "Often chronic high PaCO2 with compensation"],
          ["Steroid", "Prednisolone 40-50 mg for 5-7 days", "Prednisolone 40 mg for 5 days"],
          ["Magnesium", "Yes, 2 g IV if poor response", "Not standard"],
          ["NIV", "Not routine; ICU only", "First-line for pH 7.25-7.35 with PaCO2 over 6 kPa"],
          ["Antibiotics", "Not routine", "If purulent sputum or ventilated"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Acute severe asthma**: any one of PEF 33-50%, RR 25 or more, HR 110 or more, or broken sentences.",
            "**Life-threatening**: PEF under 33%, SpO2 under 92%, normal PaCO2, silent chest, cyanosis, exhaustion or hypotension.",
            "**Near-fatal**: raised PaCO2 or needing ventilation.",
            "India carries **over 40% of global asthma deaths**, mostly preventable.",
            "**Mild asthma is not low risk**: 15-20% of deaths occur in mild disease.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Viral infection** triggers about 80% of attacks.",
            "Other triggers: allergen, smog, fireworks, biomass smoke, NSAIDs, beta-blockers, stopping ICS.",
            "**Fatal-risk markers**: past intubation or ICU, admission in past year, no ICS, over 1 SABA canister a month.",
            "Psychosocial problems, food allergy and no action plan also raise risk of death.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Spasm, oedema and **mucus plugs** narrow the airways.",
            "Air is trapped, causing **auto-PEEP** and high work of breathing.",
            "Early ABG shows **low PaCO2**; a normal PaCO2 means the patient is tiring.",
            "A **silent chest** means almost no airflow, not improvement.",
            "Salbutamol causes **hypokalaemia** and lactic acidosis.",
          ],
        },
        {
          title: "Clinical features and examination",
          points: [
            "Speech: phrases in moderate, **words only** in severe, none in life-threatening.",
            "Tripod posture, accessory muscles, tachycardia and tachypnoea.",
            "**Drowsiness, cyanosis, bradycardia or hypotension** mean impending arrest.",
            "Look for pneumothorax, subcutaneous emphysema and anaphylaxis signs.",
            "**Measure PEF** before and 15-30 minutes after the first bronchodilator.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**PEF and SpO2** in everyone.",
            "**ABG** if SpO2 under 92% or any life-threatening sign.",
            "PaCO2 4.6-6.0 kPa is life-threatening; over 6.0 kPa is near-fatal.",
            "Check **potassium and glucose** during repeated salbutamol.",
            "**Chest X-ray only** for pneumothorax, consolidation, no response or before ventilation.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Oxygen** to SpO2 93-95% (GINA) or 94-98% (BTS).",
            "**Salbutamol 5 mg nebulised** every 15-30 minutes, or 4-10 puffs by spacer every 20 minutes.",
            "Add **ipratropium 0.5 mg** nebulised 4-6 hourly in severe attacks.",
            "**Prednisolone 40-50 mg** daily for at least 5 days, given in the first hour.",
            "Hydrocortisone 100 mg IV 6-hourly only if the patient cannot swallow.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Magnesium sulphate 1.2-2 g IV** over 20 minutes once for poor response.",
            "**Aminophylline** only by senior decision; GINA advises against it.",
            "No routine **antibiotics**, sedatives or montelukast in the attack.",
            "Continuous salbutamol 5-10 mg/hour for refractory bronchospasm.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "**ICU** for rising PaCO2, acidosis, exhaustion, drowsiness or arrest.",
            "**NIV is not routine** and must never delay intubation.",
            "Intubate with **ketamine**; use low rate, low tidal volume and long expiration.",
            "Accept **permissive hypercapnia**; keep plateau pressure under 30 cm H2O.",
            "Hypotension after intubation: **disconnect for 30-60 seconds** and exclude tension pneumothorax.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: same drugs, all safe; target SpO2 94-98% and monitor the fetus.",
            "**Children**: prednisolone 1-2 mg/kg (maximum 40 mg); magnesium 40 mg/kg (maximum 2 g).",
            "**Diabetes**: monitor glucose on steroids; never withhold steroids.",
            "**PHC setting**: a 500 mL bottle spacer works as well as a nebuliser.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Discharge when **PEF over 75%** and stable 12-24 hours on discharge drugs.",
            "Start or step up an **ICS-containing controller**; never discharge on SABA alone.",
            "Check technique, give a **written action plan**, remove triggers.",
            "**Review in 2 working days** (BTS) or 2-7 days (GINA); clinic within 4 weeks.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in acute severe asthma",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Salbutamol", "5 mg neb every 15-30 min, or 5-10 mg/hour continuous; 4-10 puffs by spacer", "Intensive first hour, then 1-4 hourly", "Tremor, tachycardia, low K+, lactic acidosis"],
            ["Ipratropium", "0.5 mg nebulised", "4-6 hourly in early hours", "Dry mouth, urinary retention, glaucoma"],
            ["Prednisolone", "40-50 mg oral once daily", "At least 5 days, no taper", "Hyperglycaemia, mood change"],
            ["Hydrocortisone", "100 mg IV 6-hourly", "Until able to swallow", "Hyperglycaemia, fluid retention"],
            ["Magnesium sulphate", "1.2-2 g IV over 20 min", "Single dose", "Flushing, hypotension; caution in renal failure"],
            ["Aminophylline", "5 mg/kg load, then 0.5-0.7 mg/kg/hour", "Level 10-20 mg/L within 24 hours", "Arrhythmia, seizures; drug interactions"],
          ],
        },
        {
          heading: "BTS/SIGN severity grading",
          columns: ["Grade", "Any one of"],
          rows: [
            ["Moderate", "PEF over 50-75%, no severe features"],
            ["Acute severe", "PEF 33-50%; RR 25 or more; HR 110 or more; cannot complete sentences"],
            ["Life-threatening", "PEF under 33%; SpO2 under 92%; PaO2 under 8 kPa; normal PaCO2; silent chest; cyanosis; exhaustion; arrhythmia; hypotension; confusion"],
            ["Near-fatal", "Raised PaCO2; needs mechanical ventilation"],
          ],
        },
        {
          heading: "Differential diagnosis of acute wheeze",
          columns: ["Condition", "Key clue", "Discriminating test"],
          rows: [
            ["Acute LVF", "Orthopnoea, cardiac history", "Crackles, NT-proBNP, X-ray oedema"],
            ["AECOPD", "Smoker over 40, chronic sputum", "Fixed obstruction, chronic hypercapnia"],
            ["Anaphylaxis", "Trigger exposure, urticaria", "Hypotension; adrenaline IM first"],
            ["Pneumothorax", "Sudden pleuritic pain", "Unilateral silent hyper-resonant chest"],
            ["Laryngeal obstruction", "Throat tightness, stridor", "Normal SpO2, laryngoscopy"],
          ],
        },
      ],
      remember: [
        "**33-92-CHEST**: PEF under 33, SpO2 under 92, Cyanosis, Hypotension, Exhaustion, Silent chest, Tachy/brady.",
        "**O SHIT ME**: Oxygen, Salbutamol, Hydrocortisone, Ipratropium, Theophylline, Magnesium, Escalate.",
        "A **normal PaCO2** in acute asthma is a danger sign.",
        "Steroids act in 4-6 hours, so give them **in the first hour**.",
        "Spacer with pMDI **equals a nebuliser** in mild-moderate attacks.",
        "Ventilating asthma: **low rate, long expiration, accept CO2**.",
        "Discharge only on an **ICS-containing controller** with review in 2 working days.",
      ],
    },
  },
};

export default revision;
