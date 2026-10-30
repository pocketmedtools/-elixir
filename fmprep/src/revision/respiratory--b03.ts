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
  "respiratory-severe-asthma-biologics": {
    checked: "2026-10",
    updated: [
      "GINA 2024-2025: clinical remission on treatment added as the goal in severe asthma",
      "GINA 2025: tezepelumab for severe asthma regardless of T2 biomarkers (age 12 and over)",
      "FDA 2024: benralizumab approved for EGPA and for children 6-11 with severe eosinophilic asthma",
      "Depemokimab (anti-IL-5, 100 mg every 6 months) licensed in some countries in 2025; not in India",
      "BTS/NICE/SIGN 2024 (NG245): refer if uncontrolled on MART with moderate-dose ICS",
    ],
    master: {
      heading: "Difficult and severe asthma - the whole answer in one table",
      columns: ["Heading", "What to write"],
      rows: [
        ["Difficult-to-treat", "Uncontrolled on medium/high-dose ICS-LABA or needs it for control; about 17% of adult asthma"],
        ["Severe", "Uncontrolled despite optimised high-dose ICS-LABA after fixing modifiable factors; about 3.7%"],
        ["Uncontrolled means", "ACT under 20 or ACQ over 1.5; 2+ OCS bursts or 1 serious attack a year; FEV1 under 80%"],
        ["Check first", "Diagnosis, technique, adherence, comorbidity (CRSwNP, GORD, obesity, OSA, anxiety), exposures, drugs"],
        ["Mimics", "Laryngeal obstruction, dysfunctional breathing, COPD, ABPA, EGPA, bronchiectasis, central airway lesion"],
        ["T2 markers", "Eosinophils 150 or more, FeNO 20 or more, allergen-driven, OCS-dependent; repeat up to 3 times"],
        ["Indian must-excludes", "ABPA (Aspergillus IgE), TB, Strongyloides before OCS or biologics"],
        ["Add-ons", "MART; tiotropium 2.5 mcg x2 OD or triple inhaler; azithromycin 500 mg thrice weekly for 6 months"],
        ["Omalizumab", "Anti-IgE; allergic, IgE 30-1500; SC every 2-4 weeks by table; age 6+"],
        ["Anti-IL-5/5R", "Mepolizumab 100 mg q4w; benralizumab 30 mg q4w x3 then q8w; eosinophils 150-300+"],
        ["Dupilumab", "Anti-IL-4Ralpha; 400 then 200 mg q2w; FeNO 25+ or eos 150-1500; avoid if eos over 1500"],
        ["Tezepelumab", "Anti-TSLP 210 mg q4w; no biomarker needed; age 12+"],
        ["Review", "Biologic response at 4 months; continue, extend to 12 months, or switch; goal is remission"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Uncontrolled asthma on Step 4-5 - GINA pathway",
        caption: "Severe asthma is a diagnosis made only after optimisation.",
        steps: [
          { label: "Uncontrolled on medium/high-dose ICS-LABA", detail: "Difficult-to-treat asthma" },
          { label: "Confirm diagnosis; exclude mimics", detail: "Spirometry, laryngeal obstruction, ABPA, EGPA, TB", tone: "decision" },
          { label: "Fix technique, adherence, comorbidity, exposures", detail: "Rhinitis, GORD, OSA, obesity, smoking, biomass" },
          { label: "Optimise: MART, high-dose ICS-LABA, LAMA", detail: "Review after 3-6 months" },
          { label: "Still uncontrolled: severe asthma", detail: "Refer to specialist clinic", tone: "warn" },
          { label: "Phenotype: eosinophils, FeNO, IgE", detail: "Repeat up to 3 times on lowest OCS dose", tone: "decision" },
          { label: "Biologic trial, assess at 4 months", detail: "Goal: clinical remission on treatment", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Choosing a biologic by phenotype",
        root: "Severe asthma after optimisation",
        arms: [
          { label: "Allergic, IgE 30-1500", steps: ["Perennial allergen sensitisation", "Omalizumab SC every 2-4 weeks"] },
          { label: "Eosinophilic", steps: ["Eosinophils 150-300 or more", "Mepolizumab or benralizumab", "Dupilumab if FeNO high"] },
          { label: "FeNO high or atopic dermatitis", steps: ["FeNO 25 ppb or more", "Dupilumab; avoid if eos over 1500"] },
          { label: "T2-low", tone: "decision", steps: ["Eos under 150, FeNO under 20", "Tezepelumab; azithromycin"] },
        ],
      },
      {
        kind: "compare",
        heading: "Difficult-to-treat versus severe asthma",
        columns: ["Feature", "Difficult-to-treat", "Severe"],
        rows: [
          ["Share of adult asthma", "About 17%", "About 3.7%"],
          ["Main cause", "Technique, adherence, comorbidity", "Refractory inflammation"],
          ["First action", "Educate and optimise", "Phenotype and add-on therapy"],
          ["Biologics", "Not yet", "Yes, by phenotype"],
          ["Setting", "Primary care", "Specialist clinic"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Difficult-to-treat asthma**: uncontrolled on medium- or high-dose ICS-LABA.",
            "**Severe asthma**: still uncontrolled after fixing technique, adherence and comorbidities on high-dose ICS-LABA.",
            "About 17% of adults have difficult asthma, but only **3.7% have severe asthma**.",
            "Cumulative **oral steroid** exposure causes diabetes, fractures and cataract.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Poor adherence** and **poor technique** cause most uncontrolled asthma.",
            "Comorbidities: **nasal polyps, GORD, obesity, OSA**, anxiety and depression.",
            "Exposures: tobacco, **biomass smoke**, incense, occupational agents.",
            "Drugs: beta-blockers and NSAIDs.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Alarmin **TSLP** starts the cascade; tezepelumab blocks it.",
            "**IL-5** drives eosinophils; mepolizumab and benralizumab block it.",
            "**IL-4 and IL-13** drive IgE, mucus and FeNO; dupilumab blocks their receptor.",
            "**IgE** triggers mast cells; omalizumab binds it.",
            "**T2-low** asthma is neutrophilic and responds poorly to steroids.",
          ],
        },
        {
          title: "Clinical features and differential diagnosis",
          points: [
            "Daily symptoms, night waking and **2 or more steroid courses a year**.",
            "**Inspiratory stridor** suggests laryngeal obstruction, not asthma.",
            "Brown mucus plugs suggest **ABPA**; neuropathy and rash suggest **EGPA**.",
            "Daily purulent sputum suggests bronchiectasis or post-TB lung.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Confirm asthma with **spirometry and reversibility**.",
            "**Eosinophils 150 or more** or **FeNO 20 or more** means refractory T2 inflammation.",
            "Repeat markers **up to 3 times** on the lowest steroid dose.",
            "Check total IgE, specific IgE and **Aspergillus IgE** in every Indian patient.",
            "Test or treat **Strongyloides**; HRCT if atypical features.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Fix technique and adherence; **review in 3-6 months**.",
            "Use **ICS-formoterol MART** and a trial of high-dose ICS-LABA.",
            "Add **tiotropium 2.5 microgram x 2 puffs** once daily or a triple inhaler.",
            "**Azithromycin 500 mg thrice weekly** for 6 months; check QTc and exclude NTM.",
            "Rehab, weight loss, CPAP for OSA, treat rhinitis.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Omalizumab** for allergic asthma with IgE 30-1500.",
            "**Mepolizumab 100 mg** every 4 weeks or **benralizumab 30 mg** every 8 weeks after loading.",
            "**Dupilumab** for high FeNO or atopic dermatitis; avoid if eosinophils over 1500.",
            "**Tezepelumab 210 mg** every 4 weeks needs no biomarker.",
            "Assess at **4 months**; continue, extend or switch.",
            "Maintenance OCS only as a last resort at **7.5 mg or less**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: omalizumab data are reassuring; others limited.",
            "**Children 6-11**: omalizumab, mepolizumab, benralizumab, dupilumab approved.",
            "Long-term OCS: give **bone protection** and check glucose.",
            "In India: biologics are costly and not on NLEM.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer when uncontrolled after **3-6 months** of optimised Step 4.",
            "Track ACT, exacerbations, **OCS dose** and FEV1 each visit.",
            "Never stop ICS when a biologic starts; **taper OCS first**.",
            "Goal is **clinical remission** on treatment.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for severe asthma",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Omalizumab", "75-600 mg SC every 2-4 weeks by table", "Assess at 4 months", "Anaphylaxis 0.1-0.2%"],
            ["Mepolizumab", "100 mg SC every 4 weeks", "Assess at 4 months", "Headache, herpes zoster"],
            ["Benralizumab", "30 mg SC every 4 weeks x3, then every 8 weeks", "Assess at 4 months", "Headache, pharyngitis"],
            ["Dupilumab", "400 then 200 mg SC every 2 weeks", "Assess at 4 months", "Conjunctivitis, eosinophilia; avoid if eos over 1500"],
            ["Tezepelumab", "210 mg SC every 4 weeks", "Assess at 4 months", "Pharyngitis, arthralgia"],
            ["Tiotropium", "2.5 microgram x 2 puffs once daily", "Continuous", "Dry mouth, urinary retention"],
            ["Azithromycin", "500 mg three times a week", "At least 6 months", "QTc, hearing loss; exclude NTM"],
          ],
        },
        {
          heading: "Biomarker cut-offs",
          columns: ["Marker", "Cut-off", "Meaning"],
          rows: [
            ["Blood eosinophils", "150 or more", "Refractory T2 inflammation"],
            ["Blood eosinophils", "300 or more", "Good anti-IL-5 response"],
            ["Blood eosinophils", "1500 or more", "Look for EGPA, HES, ABPA, parasites"],
            ["FeNO", "20 ppb or more (25 for dupilumab)", "IL-13 activity"],
            ["Total IgE", "30-1500 IU/mL", "Omalizumab range"],
          ],
        },
        {
          heading: "Mimics of severe asthma",
          columns: ["Condition", "Clue", "Test"],
          rows: [
            ["Laryngeal obstruction", "Inspiratory stridor", "Laryngoscopy in attack"],
            ["Dysfunctional breathing", "Sighing, tingling", "Nijmegen questionnaire"],
            ["ABPA", "Brown plugs", "Aspergillus IgE, total IgE"],
            ["EGPA", "Neuropathy, rash", "Eosinophils, ANCA"],
            ["Bronchiectasis", "Daily sputum", "HRCT"],
          ],
        },
      ],
      remember: [
        "**Difficult is not severe** until technique, adherence and comorbidity are fixed.",
        "Targets: **E-5-5R-4R-TSLP** for omalizumab, mepolizumab, benralizumab, dupilumab, tezepelumab.",
        "**Tezepelumab** needs no biomarker.",
        "**Assess biologics at 4 months**.",
        "In India: **exclude ABPA, TB and Strongyloides** first.",
        "Biologics are **add-ons**; never stop ICS.",
      ],
    },
  },
  "respiratory-abpa-fungal": {
    checked: "2026-10",
    updated: [
      "ISHAM-AWG 2024: A. fumigatus-specific IgE replaces skin test as the ABPA screening test",
      "ISHAM-AWG 2024: essentials are specific IgE and total IgE 500; two of IgG, CT, eosinophils 500",
      "ISHAM-AWG 2024: prednisolone 0.5 mg/kg or itraconazole monotherapy for acute ABPA; ABPM recognised",
      "ERS/ESCMID 2016 CPA guideline still current; Indian RCT supports 12 months of itraconazole to reduce relapse",
      "WHO Fungal Priority Pathogens List 2022: A. fumigatus critical, Mucorales high priority",
    ],
    master: {
      heading: "Aspergillus and Mucor in the lung - the whole answer in one table",
      columns: ["Heading", "What to write"],
      rows: [
        ["Spectrum", "Hypersensitivity (ABPA), saprophytic (aspergilloma), chronic invasive (CPA), invasive (IA) - set by host immunity"],
        ["ABPA burden", "About 2.5% of adult asthma; India about 1.4 million cases"],
        ["ABPA criteria", "Asthma/CF + specific IgE 0.35 + total IgE 500; plus 2 of IgG, CT, eosinophils 500"],
        ["ABPA CT", "Central bronchiectasis, mucus plugs, high-attenuation mucus (pathognomonic)"],
        ["ABPA treatment", "Prednisolone 0.5 mg/kg 2 weeks then taper over 3-4 months, or itraconazole 200 mg BD 4 months"],
        ["ABPA monitoring", "IgE every 6-8 weeks; response 20% fall; exacerbation 50% rise"],
        ["CPA", "Cavity 3 months or more + Aspergillus IgG, usually post-TB; itraconazole or voriconazole 6-12 months"],
        ["Aspergilloma", "Fungal ball in old cavity; haemoptysis; observe or resect; BAE for bleeding"],
        ["Invasive aspergillosis", "Neutropenia, transplant, ICU; halo sign; galactomannan; voriconazole or isavuconazole"],
        ["Mucormycosis", "Diabetes, DKA, steroids; black eschar; broad right-angle hyphae; reverse halo"],
        ["Mucor treatment", "Liposomal amphotericin 5-10 mg/kg + debridement + glucose control; step-down posaconazole"],
        ["Traps", "Do not treat as TB without proof; voriconazole does not cover Mucor"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Screening an asthmatic for ABPA (ISHAM-AWG 2024)",
        steps: [
          { label: "Asthma in specialist care or poorly controlled", detail: "Also CF, bronchiectasis, COPD" },
          { label: "A. fumigatus-specific IgE", detail: "0.35 kUA/L or more is positive", tone: "decision" },
          { label: "Total IgE", detail: "500 IU/mL or more essential", tone: "decision" },
          { label: "Need 2 of 3 supporting", detail: "Specific IgG raised; CT bronchiectasis/plugs/HAM; eosinophils 500 or more" },
          { label: "ABPA confirmed: classify S, B, HAM, CPF", detail: "Exclude TB with CBNAAT", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "ABPA treatment ladder",
        steps: [
          { label: "Stage 0 / ABPA-S, asthma controlled", detail: "Optimise asthma, monitor IgE" },
          { label: "Acute ABPA", detail: "Prednisolone 0.5 mg/kg 2 weeks, taper over 3-4 months; or itraconazole 200 mg BD 4 months" },
          { label: "Recurrent exacerbations", detail: "Prednisolone plus itraconazole; voriconazole if itraconazole fails", tone: "decision" },
          { label: "Steroid-dependent", detail: "Biologics: omalizumab, mepolizumab, benralizumab, dupilumab", tone: "warn" },
          { label: "Persistent lobar collapse", detail: "Bronchoscopic removal of mucus plugs", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Invasive aspergillosis versus mucormycosis",
        columns: ["Feature", "Aspergillosis", "Mucormycosis"],
        rows: [
          ["Host", "Neutropenia, transplant, ICU", "Diabetes, DKA, steroids, iron overload"],
          ["Hyphae", "Narrow, septate, 45 degree branching", "Broad, aseptate, right-angle branching"],
          ["CT", "Halo, air-crescent", "Reverse halo, effusion"],
          ["Galactomannan", "Positive", "Negative"],
          ["Drug", "Voriconazole, isavuconazole", "Liposomal amphotericin plus surgery"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Aspergillus disease depends on the **host**: allergy, old cavity or immunosuppression.",
            "**ABPA** is hypersensitivity to Aspergillus in asthma or cystic fibrosis.",
            "**CPA** is slow invasive disease in old cavities, mostly after TB.",
            "**Mucormycosis** is angio-invasive; India has about 70 times the global rate.",
            "The 2021 COVID wave caused **over 45,000 mucormycosis cases** in India.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "ABPA: **asthma, cystic fibrosis**, bronchiectasis, COPD.",
            "CPA and aspergilloma: **healed TB cavities**, COPD, sarcoidosis, NTM.",
            "Invasive aspergillosis: **neutropenia**, transplant, high-dose steroids, ICU influenza.",
            "Mucormycosis: **uncontrolled diabetes, DKA, steroids**, deferoxamine.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "ABPA is a **Th2 response** with high IgE and eosinophils, not invasion.",
            "Mucus plugs cause **central bronchiectasis** and collapse.",
            "Aspergilloma bleeds from **hypertrophied bronchial arteries**.",
            "Invasive moulds **invade vessels**, causing infarction and necrosis.",
            "Acidosis frees **iron**, which feeds Mucorales in DKA.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**ABPA essentials**: specific IgE 0.35 or more and total IgE 500 or more.",
            "Plus **2 of 3**: specific IgG, compatible CT, eosinophils 500 or more.",
            "ABPA types: **S, B, HAM, CPF**; HAM is the most severe.",
            "CPA: **cavity for 3 months or more** with raised Aspergillus IgG.",
            "Invasive fungal disease is **proven, probable or possible** (EORTC/MSGERC).",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "ABPA: uncontrolled asthma, **brown mucus plugs**, fleeting shadows.",
            "Aspergilloma: often silent; **haemoptysis** is the main symptom.",
            "CPA: weight loss and cough in a treated TB patient, **sputum negative**.",
            "Mucor: **black nasal discharge, palatal eschar**, proptosis, vision loss.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Specific IgE** screens every uncontrolled asthmatic for ABPA.",
            "**HRCT**: central bronchiectasis and **high-attenuation mucus**.",
            "**Aspergillus IgG** is the key test for CPA.",
            "Galactomannan: serum **0.5 or more**, BAL **1.0 or more** for invasive aspergillosis.",
            "Mucor: **KOH mount** shows broad right-angle hyphae; MRI for orbit and brain.",
            "Always exclude TB with **CBNAAT and culture**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Acute ABPA: **prednisolone 0.5 mg/kg** for 2 weeks, taper over 3-4 months.",
            "Or **itraconazole 200 mg twice daily** for 4 months, with food.",
            "CPA: **itraconazole or voriconazole** for 6-12 months.",
            "Simple aspergilloma with bleeding: **surgical resection** if fit.",
            "Invasive aspergillosis: **voriconazole** or isavuconazole.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Mucor: **liposomal amphotericin 5 mg/kg/day** (10 with CNS disease).",
            "Plus urgent **surgical debridement** and glucose and ketoacidosis control.",
            "Step down to **posaconazole or isavuconazole** for months.",
            "Give **saline pre-load** and check K, Mg, creatinine daily on amphotericin.",
            "Haemoptysis in aspergilloma: tranexamic acid, then **bronchial artery embolisation**.",
          ],
        },
        {
          title: "Special groups and follow-up",
          points: [
            "**Pregnancy**: avoid azoles; amphotericin is the safe antifungal.",
            "**Heart failure**: avoid itraconazole (negative inotrope).",
            "**Rifampicin** lowers azole levels in TB-CPA overlap.",
            "ABPA: check **IgE every 6-8 weeks**; CPA: CT and IgG at 3-6 months.",
            "Prevent mucor with **careful steroid use and glucose control**.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for Aspergillus and Mucorales",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Prednisolone (ABPA)", "0.5 mg/kg/day oral 2 weeks, then taper", "3-4 months total", "Hyperglycaemia, osteoporosis"],
            ["Itraconazole", "200 mg oral twice daily with food", "4 months ABPA; 6-12 months CPA", "Liver injury, heart failure, interactions"],
            ["Voriconazole", "6 mg/kg IV 12-hourly x2, then 4 mg/kg; oral 200 mg BD", "6-12 weeks IA; 6-12 months CPA", "Visual change, photosensitivity, liver; no Mucor cover"],
            ["Isavuconazole", "200 mg 8-hourly x6, then 200 mg daily", "Weeks to months", "Fewer side effects; covers Mucor"],
            ["Posaconazole", "300 mg BD day 1, then 300 mg daily", "Months as step-down", "Liver, QTc"],
            ["Liposomal amphotericin B", "5 mg/kg/day IV (10 in CNS)", "3-6 weeks then step-down", "Nephrotoxicity, low K and Mg"],
          ],
        },
        {
          heading: "ISHAM-AWG 2024 ABPA criteria",
          columns: ["Part", "Requirement"],
          rows: [
            ["Predisposition", "Asthma, CF, bronchiectasis, COPD"],
            ["Essential", "Specific IgE 0.35 kUA/L or more"],
            ["Essential", "Total IgE 500 IU/mL or more"],
            ["2 of 3", "Specific IgG; CT bronchiectasis or plugs; eosinophils 500 or more"],
          ],
        },
        {
          heading: "Aspergillosis spectrum",
          columns: ["Entity", "Host", "Treatment"],
          rows: [
            ["ABPA", "Asthma, CF", "Prednisolone or itraconazole"],
            ["Aspergilloma", "Old cavity", "Observe or resect"],
            ["CPA", "Post-TB, COPD", "Azole 6-12 months"],
            ["Invasive", "Neutropenia, transplant", "Voriconazole"],
          ],
        },
      ],
      remember: [
        "**ABPA = 2 essentials + 2 of 3**.",
        "**High-attenuation mucus** is pathognomonic of ABPA.",
        "Response = **IgE falls 20%**; exacerbation = **IgE rises 50%**.",
        "CPA = **3-month cavity + Aspergillus IgG**.",
        "**Halo early, crescent late**; reverse halo means Mucor.",
        "Mucor triad: **amphotericin, debridement, glucose control**.",
        "**Voriconazole misses Mucor**.",
      ],
    },
  },
};

export default revision;
