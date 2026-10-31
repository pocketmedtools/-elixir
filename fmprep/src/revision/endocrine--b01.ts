import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-diabetes-classification": {
    checked: "2026-10",
    updated: [
      "ADA Standards of Care 2026: diagnostic thresholds unchanged; HbA1c interpretation against red-cell turnover and variants reinforced.",
      "ADA 2025-2026: presymptomatic type 1 diabetes (stages 1-2), antibody screening of relatives and monitoring schedules.",
      "IDF 2024 position statement: 1-hour post-load glucose 155 mg/dL (intermediate) and 209 mg/dL (diabetes) proposed.",
      "IDF 2025: malnutrition-related diabetes named type 5 diabetes.",
      "ICMR-INDIAB 2023: diabetes 11.4%, prediabetes 15.3% of Indian adults.",
    ],
    master: {
      heading: "Master revision table - classification and diagnosis of diabetes",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Chronic hyperglycaemia from defective insulin secretion, action or both; cut-offs set where **retinopathy rises**."],
        ["Burden", "**589 million** adults worldwide (IDF 2025); India **11.4% diabetes, 15.3% prediabetes** (ICMR-INDIAB 2023); India has most children with type 1."],
        ["Diagnostic criteria", "FPG **126+**, 2-h OGTT **200+**, HbA1c **6.5%+**, random **200+ with symptoms**; asymptomatic needs **two abnormal results** (same sample allowed)."],
        ["Prediabetes", "IFG **100-125**, IGT **140-199**, HbA1c **5.7-6.4%**."],
        ["Classification", "ADA: **type 1** (stages 1-3, LADA), **type 2**, **specific types** (MODY, neonatal, pancreatic, endocrine, drugs, PTDM), **GDM**; plus ketosis-prone and **type 5** (IDF 2025)."],
        ["HbA1c pitfalls", "High: **iron/B12 deficiency**, asplenia, uraemia. Low: **haemolysis, transfusion, pregnancy, CKD/ESA, G6PD, HIV NRTIs**. Variants: HbE, HbS, HbD, thal trait."],
        ["Antibodies", "**GAD65 first**, then IA-2, ZnT8; insulin antibodies only before insulin; two or more = type 1."],
        ["C-peptide", "With glucose **over 144**, ideally **3+ years** after diagnosis; **under 200 pmol/L type 1, over 600 type 2**; never during DKA."],
        ["LADA", "Over 30, antibody-positive, insulin-free 6 months; C-peptide **under 0.3 nmol/L insulin**, 0.3-0.7 mixed, **over 0.7 type 2 algorithm, no SU**."],
        ["MODY", "Dominant, young, non-obese, antibody-negative; **GCK no treatment, HNF1A/4A low-dose SU, HNF1B insulin + kidneys**; cascade testing."],
        ["Ketosis-prone", "**A-beta classification**; A-beta+ = DKA at onset, C-peptide recovers, taper insulin."],
        ["Secondary", "Pancreas (FCPD, cancer over 50 with weight loss), Cushing, acromegaly, **steroids, antipsychotics, tacrolimus, checkpoint inhibitors**."],
        ["Referral", "Unclear type in young, suspected MODY/LADA/neonatal/fulminant/pancreatogenic diabetes, DKA at onset."],
        ["Exam traps", "Never diagnose on glucometer or urine; **check Hb before HbA1c**; no C-peptide in DKA."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Adult with new diabetes - which type?",
        caption: "ADA/EASD 2021 antibody-first algorithm adapted for Indian practice.",
        steps: [
          { label: "Confirm diabetes on venous plasma or HbA1c", detail: "Two abnormal results if asymptomatic; check Hb first" },
          { label: "Ketosis, weight loss, age under 35, BMI under 25?", detail: "Any of these: suspect insulin deficiency", tone: "decision" },
          { label: "Islet antibodies (GAD65 first, then IA-2, ZnT8)", detail: "Positive: type 1 or LADA - insulin-based care", tone: "decision" },
          { label: "Antibody-negative and young: C-peptide after 3 years", detail: "Under 200 pmol/L: type 1; over 600: type 2 or MODY" },
          { label: "Preserved C-peptide plus family history", detail: "Exeter MODY calculator, then gene panel", tone: "decision" },
          { label: "Look for secondary causes", detail: "Calculi on X-ray, steroids, Cushing, new diabetes over 50 with weight loss", tone: "warn" },
          { label: "Treat by type and screen relatives", detail: "Cascade testing in MODY; antibodies in type 1 relatives", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "ADA aetiological classification with Indian additions",
        root: "Diabetes mellitus",
        arms: [
          { label: "Type 1", tone: "warn", steps: ["Autoimmune 1A (stages 1-3)", "Idiopathic 1B, fulminant", "LADA (slow autoimmune)"] },
          { label: "Type 2", steps: ["Insulin resistance", "Progressive beta-cell failure", "Over 90% of cases"] },
          {
            label: "Specific types",
            tone: "decision",
            steps: ["Monogenic: MODY, neonatal", "Exocrine pancreas: FCPD, pancreatitis", "Endocrinopathies and drugs", "Post-transplant"],
          },
          { label: "Gestational", steps: ["2nd-3rd trimester", "Not overt before pregnancy"] },
          { label: "Indian additions", tone: "good", steps: ["Ketosis-prone (A-beta)", "Type 5 malnutrition-related (IDF 2025)"] },
        ],
      },
      {
        kind: "compare",
        heading: "Type 1 vs LADA vs MODY vs type 2",
        columns: ["Feature", "Type 1", "LADA", "MODY", "Type 2"],
        rows: [
          ["Age at onset", "Usually under 30", "Over 30", "Under 25-35", "Over 30 (earlier in India)"],
          ["Build", "Lean", "Lean or normal", "Non-obese", "Overweight, acanthosis"],
          ["Ketosis", "Common", "Late", "Rare", "Rare"],
          ["Antibodies", "Positive", "GAD positive", "Negative", "Negative"],
          ["C-peptide", "Low", "Falls over years", "Preserved", "Normal or high"],
          ["Treatment", "Insulin", "Insulin or non-SU", "By gene", "Metformin first"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Diabetes** is chronic hyperglycaemia from poor insulin secretion, poor insulin action, or both.",
            "India: **11.4% diabetes** and **15.3% prediabetes** in adults (ICMR-INDIAB 2023).",
            "Indians get type 2 **a decade earlier** and at a lower BMI.",
            "India has the **most children with type 1** diabetes in the world.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**ADA classes**: type 1, type 2, specific types and gestational diabetes.",
            "Type 1 has **three stages**: two antibodies with normal glucose, then dysglycaemia, then clinical diabetes.",
            "**Specific types**: MODY, neonatal, pancreatic, endocrine, drug-induced and post-transplant diabetes.",
            "**Ketosis-prone** diabetes uses the A-beta system; A-beta+ can often stop insulin.",
            "**Type 5** (IDF 2025) is malnutrition-related: lean, young, poor, no ketosis, no antibodies.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Type 1: **T-cell destruction** of beta cells; antibodies are markers, not causes.",
            "Symptoms start after about **70-80%** of beta cells are lost.",
            "**Ketosis** means absolute insulin deficiency with unopposed glucagon.",
            "**GCK-MODY** resets the glucose sensor, so glucose stays mildly high for life.",
            "**HbA1c** depends on red-cell lifespan, so anaemia and transfusion distort it.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Insulin deficiency clues**: young, lean, weight loss, ketosis, other autoimmunity.",
            "**MODY clues**: three generations, non-obese, no ketosis, antibody-negative.",
            "**LADA clues**: adult over 30, lean, tablets fail within months to years.",
            "**Secondary clues**: steatorrhoea, steroids, antipsychotics, new diabetes over 50 with weight loss.",
            "Onset **before 6 months** of age means monogenic diabetes.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Diabetes: FPG **126+**, OGTT 2-hour **200+**, HbA1c **6.5%+**, random **200+ with symptoms**.",
            "Without symptoms, need **two abnormal results**; two tests on one sample counts.",
            "Use a **fluoride tube** and spin quickly; never diagnose on a glucometer.",
            "**GAD65 first**, then IA-2 and ZnT8 antibodies.",
            "**C-peptide** under 200 pmol/L suggests type 1; over 600 suggests type 2.",
            "Do C-peptide with glucose over 144 and **never during DKA**.",
            "X-ray or ultrasound abdomen for **pancreatic calculi** in lean young patients.",
          ],
        },
        {
          title: "Differential diagnosis",
          points: [
            "**Stress hyperglycaemia**: HbA1c below 6.5% on admission favours stress over diabetes.",
            "**Renal glycosuria**: sugar in urine with normal blood glucose.",
            "**FCPD**: lean, calculi, steatorrhoea, ketosis-resistant.",
            "**Ketosis-prone**: overweight, antibody-negative, C-peptide recovers after DKA.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Type 1: **basal-bolus insulin** about 0.4-0.5 units/kg/day; never trial tablets.",
            "**LADA**: insulin if C-peptide under 0.3 nmol/L; avoid sulfonylureas.",
            "**GCK-MODY**: no drug treatment needed.",
            "**HNF1A/HNF4A-MODY**: gliclazide 20-40 mg daily.",
            "**HNF1B-MODY**: insulin plus kidney follow-up.",
            "Neonatal KCNJ11/ABCC8: **high-dose glibenclamide** at a specialist centre.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: do not use HbA1c alone; overt diabetes is FPG 126+ at booking.",
            "**CKD 4-5 and dialysis**: HbA1c unreliable; use glucose or CGM.",
            "**Thalassaemia and transfusion**: rely on OGTT and fructosamine.",
            "**Checkpoint inhibitors** can cause abrupt permanent autoimmune diabetes.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer **unclear type**, suspected MODY, LADA, neonatal or pancreatic diabetes.",
            "Screen adults from **30 under NP-NCD** (35 per ADA), earlier if overweight.",
            "Offer **cascade testing** to MODY families and antibody screening to type 1 relatives.",
            "Re-check C-peptide in LADA every **1-2 years**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ADA 2026**: criteria unchanged; presymptomatic type 1 staging and relative screening kept.",
            "**IDF 2024**: one-hour glucose 155 and 209 mg/dL proposed; not adopted by ADA.",
            "**IDF 2025**: malnutrition-related diabetes renamed **type 5 diabetes**.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs by diabetes type",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Basal-bolus insulin", "0.4-0.5 units/kg/day SC, half basal", "Lifelong", "Hypoglycaemia, weight gain"],
            ["Gliclazide (HNF1A/4A MODY)", "20-40 mg once daily oral", "Lifelong", "Hypoglycaemia; avoid in LADA"],
            ["Glibenclamide (neonatal diabetes)", "Start 0.2 mg/kg/day oral, titrate", "Lifelong", "Diarrhoea; specialist only"],
            ["Metformin", "500 mg OD-BD, up to 1 g BD oral", "Lifelong", "GI upset, B12 deficiency; stop eGFR under 30"],
            ["Pancreatic enzymes", "40,000-50,000 lipase units per meal", "Lifelong", "Abdominal pain"],
          ],
        },
        {
          heading: "Diagnostic cut-offs (venous plasma, mg/dL)",
          columns: ["Test", "Normal", "Prediabetes", "Diabetes"],
          rows: [
            ["Fasting glucose", "Under 100", "100-125", "126 or more"],
            ["2-hour OGTT", "Under 140", "140-199", "200 or more"],
            ["HbA1c", "Under 5.7%", "5.7-6.4%", "6.5% or more"],
            ["Random glucose", "-", "-", "200 or more with symptoms"],
          ],
        },
        {
          heading: "HbA1c pitfalls",
          columns: ["Condition", "HbA1c reads", "Use instead"],
          rows: [
            ["Iron, B12, folate deficiency", "Falsely high", "Plasma glucose"],
            ["Haemolysis, G6PD, malaria", "Falsely low", "Glucose, fructosamine"],
            ["Transfusion, blood loss", "Falsely low", "Plasma glucose"],
            ["Pregnancy 2nd-3rd trimester", "Falsely low", "OGTT"],
            ["CKD 4-5, dialysis, ESA", "Usually low", "Glucose, CGM"],
            ["HbE, HbS, HbD, thal trait", "Assay-dependent", "Glucose criteria"],
          ],
        },
      ],
      remember: [
        "**Two abnormal results** if asymptomatic; one is enough with symptoms and random 200+.",
        "**Check Hb before HbA1c** in every Indian woman.",
        "**Antibodies first, C-peptide later**, never during DKA.",
        "C-peptide **200 / 600 pmol/L** split type 1 from type 2.",
        "**GCK = Give nothing; HNF1A = Half-dose SU; HNF1B = Kidneys and insulin**.",
        "LADA: **30, antibody, 6 months** insulin-free.",
        "Ketosis-prone **A-beta+**: DKA at onset, insulin can often stop.",
      ],
    },
  },

  "endocrine-t1dm-management": {
    checked: "2026-10",
    updated: [
      "ADA 2026: CGM from diagnosis and automated insulin delivery offered to all with type 1 who can use it.",
      "ADA 2025-2026: teplizumab for stage 2 type 1 aged 8 and over; monitoring of antibody-positive relatives.",
      "ISPAD 2022: paediatric HbA1c target under 7% with time in range over 70%; ketone-based sick-day insulin.",
      "ICMR Guidelines for Management of Type 1 Diabetes 2022: Indian carb exchanges, non-refrigerated storage, school care.",
      "ADA 2024 hyperglycaemic crises consensus: ketone 3.0 mmol/L or more defines DKA, glucose 200 or more or known diabetes.",
    ],
    master: {
      heading: "Master revision table - type 1 diabetes management",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Autoimmune beta-cell destruction, **absolute insulin deficiency**; lifelong physiological insulin replacement."],
        ["Burden", "India has the **most children with type 1** worldwide (about 2.3 lakh under 20); many present in DKA."],
        ["Targets", "HbA1c **under 7%** (6.5% if safe), **TIR over 70%**, TBR under 4%, no severe hypoglycaemia or DKA, normal growth."],
        ["Starting dose", "Adults **0.4-0.5**, prepubertal **0.7-1.0**, puberty **1.2-1.5** units/kg/day; **40-50% basal**."],
        ["Regimens", "**MDI basal-bolus** standard; **pump / AID** best; twice-daily premixed only if cost-limited."],
        ["Insulins", "Rapid analogue 10-15 min onset, 3-5 h; regular 30 min before meals; NPH peaks 4-10 h; glargine 24 h; **degludec over 42 h**."],
        ["Carb counting", "**ICR = 500/TDD** g per unit; **ISF = 1800/TDD** mg/dL per unit; chapati 15 g, katori rice 28-30 g."],
        ["Sick-day rules", "**Never stop basal**; glucose 2-3 hourly; ketones if over 250; extra **5-10% TDD (0.6-1.4)**, **10-20% (1.5-2.9)**; hospital at **3.0**."],
        ["Exercise", "Start at **126-180**; under 90 take 10-20 g; ketones 1.5+ no exercise; cut bolus 25-75%; reduce night basal 20%."],
        ["Hypoglycaemia", "**15 g sugar, 15 minutes**; glucagon **1 mg IM** (0.5 mg under 25 kg) or 3 mg nasal."],
        ["Screening", "TSH and **tTG-IgA**; ACR and retina from **11 years/puberty after 2-5 years**; adults within 5 years."],
        ["School and transition", "Care plan, **CBSE exam-hall permission**; transition prep from **12-14**, transfer 16-18; cover driving, alcohol, contraception."],
        ["New therapies", "**Teplizumab** delays stage 2 to 3 by 2-3 years; islet transplant for severe unawareness; icodec not for type 1."],
        ["Exam traps", "Never stop insulin when vomiting; check 3 a.m. before raising evening dose; feel for lipohypertrophy."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Sick-day rules by ketone level",
        caption: "ISPAD 2022 - teach every family at diagnosis.",
        steps: [
          { label: "Unwell: never stop basal insulin", detail: "Illness raises insulin needs", tone: "warn" },
          { label: "Check glucose 2-3 hourly and ketones", detail: "Ketones if glucose over 250 mg/dL or vomiting", tone: "decision" },
          { label: "Ketone under 0.6", detail: "Usual corrections, fluids" },
          { label: "Ketone 0.6-1.4", detail: "Extra 5-10% of TDD as rapid insulin; recheck 2 h" },
          { label: "Ketone 1.5-2.9", detail: "Extra 10-20% of TDD; call the team", tone: "warn" },
          { label: "Ketone 3.0 or more, persistent vomiting, drowsy", detail: "Hospital now - DKA likely", tone: "warn" },
          { label: "Recovered", detail: "Ketones under 0.6, eating, glucose in range", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Insulin regimen ladder in type 1",
        caption: "Move up as resources and skills allow; ADA 2026 recommends AID for all who can use it.",
        steps: [
          { label: "Twice-daily premixed or NPH plus regular", detail: "Cost-limited only; fixed meals and snacks", tone: "warn" },
          { label: "MDI with human insulins", detail: "NPH twice daily plus regular 30 min before meals" },
          { label: "MDI with analogues", detail: "Glargine/degludec 40-50% TDD + rapid analogue by ICR" },
          { label: "MDI plus CGM", detail: "CGM from diagnosis; targets TIR over 70%" },
          { label: "Pump (CSII)", detail: "Programmable basal rates for dawn phenomenon" },
          { label: "Automated insulin delivery", detail: "Pump + CGM + algorithm", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "High fasting glucose: waning basal vs dawn vs Somogyi",
        columns: ["Feature", "Waning basal", "Dawn phenomenon", "Somogyi"],
        rows: [
          ["3 a.m. glucose", "High", "Normal", "Low"],
          ["Mechanism", "Basal runs out", "GH and cortisol surge", "Rebound after hypoglycaemia"],
          ["Fix", "More or longer basal", "Pump basal rise, later NPH", "Less evening insulin, snack"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Type 1 diabetes** is autoimmune beta-cell destruction causing absolute insulin deficiency.",
            "India has the **most children with type 1** in the world.",
            "Over half of new cases are diagnosed **in adults**.",
            "Targets: **HbA1c under 7%**, time in range over 70%, no severe lows.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Normal pancreas gives about **half basal, half mealtime** insulin.",
            "**Basal-bolus** therapy copies this pattern.",
            "Glucagon response to hypoglycaemia is **lost within years**, causing unawareness.",
            "Without insulin for a few hours, **ketones** rise; pumps have no depot.",
            "**Dawn phenomenon**: growth hormone and cortisol raise glucose after 3 a.m.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Regimens: **MDI basal-bolus**, pump, **automated insulin delivery**, twice-daily premixed.",
            "**Rapid analogues**: onset 10-15 minutes, last 3-5 hours.",
            "**Regular insulin**: inject 30 minutes before meals, lasts 6-8 hours.",
            "**NPH** peaks at 4-10 hours, causing night lows.",
            "**Glargine** lasts 24 hours; **degludec** over 42 hours.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Review **CGM or meter data** at every visit.",
            "Ask about **hypoglycaemia** frequency, severity and awareness.",
            "Check **injection sites** for lipohypertrophy.",
            "Plot **growth** and puberty in children.",
            "Screen for **depression and insulin omission** from age 10-12.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**HbA1c every 3 months**; CGM time in range over 70%.",
            "Blood ketone: **0.6 raised, 1.5 danger, 3.0 hospital**.",
            "**TSH and tTG-IgA** at diagnosis; coeliac again at 2 and 5 years.",
            "Kidney and eye screening from **age 11 or puberty** after 2-5 years.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Starting dose: adult **0.4-0.5**, child 0.7-1.0, puberty up to 1.5 units/kg/day.",
            "Give **40-50% as basal** once daily.",
            "**Carb ratio** = 500 divided by total daily dose.",
            "**Correction factor** = 1800 divided by total daily dose.",
            "Use **4 mm needles**, rotate sites, never reuse.",
            "Store in a fridge or **earthen pot**; in-use pen lasts 28-30 days.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Sick days**: never stop basal; extra 5-20% of daily dose by ketones.",
            "Give **sugary fluids** if glucose is under 180 so insulin can continue.",
            "**Exercise**: start at 126-180; reduce meal bolus 25-75%.",
            "Reduce **bedtime basal about 20%** after evening exercise.",
            "Hypoglycaemia: **15 g sugar**, recheck in 15 minutes; glucagon 1 mg if severe.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**School**: care plan; CBSE allows snacks and insulin in the exam hall.",
            "**Transition**: prepare from 12-14, transfer at 16-18, joint clinics.",
            "**Pregnancy**: plan with HbA1c under 6.5%; needs rise 2-3-fold by term.",
            "**SGLT2 inhibitors** are not approved in type 1 because of euglycaemic DKA.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**DCCT**: intensive control cut retinopathy by about 76%.",
            "**Recurrent DKA** usually means insulin omission.",
            "Falling insulin needs: think **Addison or coeliac** disease.",
            "Vomiting with ketones **1.5 or more** needs urgent review.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ADA 2026**: CGM from diagnosis; AID for all who can use it.",
            "**Teplizumab** delays stage 2 to stage 3 by about 2-3 years.",
            "**Insulin icodec** is not recommended in type 1.",
            "**ICMR 2022** type 1 guideline adapts care to Indian resources.",
          ],
        },
      ],
      tables: [
        {
          heading: "Insulins in type 1 diabetes",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Aspart / lispro / glulisine", "SC 0-15 min before meals by carb ratio", "Lasts 3-5 h", "Hypoglycaemia, lipohypertrophy"],
            ["Regular human insulin", "SC 30 min before meals", "Lasts 6-8 h", "Late post-meal lows"],
            ["NPH", "SC twice daily", "Lasts 10-16 h, peak 4-10 h", "Night hypoglycaemia"],
            ["Glargine U100", "SC once daily, 40-50% of TDD", "About 24 h", "Do not mix"],
            ["Degludec", "SC once daily", "Over 42 h", "Cost"],
            ["Glucagon", "1 mg IM/SC, 0.5 mg under 25 kg", "Single dose", "Vomiting"],
          ],
        },
        {
          heading: "Sick-day insulin by ketones",
          columns: ["Blood ketone (mmol/L)", "Extra rapid insulin", "Action"],
          rows: [
            ["Under 0.6", "Usual corrections", "Glucose 2-3 hourly"],
            ["0.6-1.4", "5-10% of TDD", "Recheck in 2 hours"],
            ["1.5-2.9", "10-20% of TDD", "Call the team"],
            ["3.0 or more", "10-20% of TDD", "Hospital now"],
          ],
        },
        {
          heading: "Regimens compared",
          columns: ["Regimen", "Best for", "Drawback"],
          rows: [
            ["MDI basal-bolus", "Most patients", "4-5 injections daily"],
            ["Pump / AID", "All who can use it", "Cost; DKA if pump fails"],
            ["Twice-daily premixed", "Cost-limited", "Rigid meals, more lows"],
          ],
        },
      ],
      remember: [
        "**Never stop basal insulin.**",
        "**500 rule** for carbs, **1800 rule** for corrections.",
        "Ketones **0.6 / 1.5 / 3.0**: raised, danger, hospital.",
        "**Rule of 15** for hypoglycaemia.",
        "High fasting sugar: **check 3 a.m.** first.",
        "Feel the sites: **lipohypertrophy** causes erratic sugars.",
        "**Thyroid and coeliac** travel with type 1.",
      ],
    },
  },

  "endocrine-cgm-technology": {
    checked: "2026-10",
    updated: [
      "ADA 2026: CGM at diagnosis for anyone on insulin or a hypoglycaemia-causing drug; may be considered in other type 2.",
      "ADA 2025-2026: AID for all with type 1 and considered in insulin-treated type 2.",
      "ADA 2025-2026: personal CGM may continue in hospital with point-of-care confirmation.",
      "AGP Report 2023 update: standard one-page report with the five-range stacked TIR bar.",
    ],
    master: {
      heading: "Master revision table - glucose monitoring, CGM and AGP",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "SMBG = capillary snapshot; **CGM = interstitial glucose every 1-15 min** with trends, alarms and 24-h pattern."],
        ["Why CGM", "HbA1c hides **hypoglycaemia, variability and timing**; TIR predicts complications."],
        ["Devices", "Glucometer, **flash/isCGM**, **real-time CGM**, **professional 14-day CGM** (common in India), implantable, **AID**."],
        ["Indications (ADA 2026)", "Type 1 from diagnosis, **any insulin or SU user**, unawareness, pregnancy, unreliable HbA1c."],
        ["Core targets", "**TIR 70-180 over 70%**, under 70 below **4%**, under 54 below **1%**, over 180 below **25%**, over 250 below **5%**, **CV 36% or less**."],
        ["Special targets", "Older/high-risk **TIR over 50%, TBR under 1%**; pregnancy type 1 **63-140 over 70%**."],
        ["GMI", "**3.31 + 0.02392 x mean glucose**; TIR 70% about HbA1c 7%; 10% TIR about 0.5-0.8% HbA1c."],
        ["Hypo and hyper levels", "Level 1 hypo **54-69**, level 2 **under 54**, level 3 severe; level 1 hyper 181-250, level 2 over 250."],
        ["Reading the AGP", "**14 days, 70% wear**; lows first; highs by time of day; variability (IQR band, CV); 1-2 changes."],
        ["Pattern actions", "Night lows: **cut basal 10-20%**; post-meal spike: **pre-bolus 15-20 min**; wide band: education, AID."],
        ["Pitfalls", "**Lag 5-15 min**, compression lows, vitamin C/paracetamol/hydroxyurea, adhesive reactions, cost."],
        ["Discordance", "HbA1c above GMI: **iron deficiency**; below GMI: **haemolysis, transfusion, CKD**; use fructosamine."],
        ["SMBG frequency", "Type 1 without CGM **6-10/day**; basal insulin fasting daily; non-hypo drugs: structured profile only."],
        ["Exam traps", "Never raise basal for high fasting without checking night lows; CGM and finger-prick need not match exactly."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Reading an AGP in four steps",
        caption: "Always fix hypoglycaemia before hyperglycaemia.",
        steps: [
          { label: "Data sufficiency", detail: "14 days, at least 70% wear", tone: "decision" },
          { label: "Time below range", detail: "Under 70 over 4% or under 54 over 1%: fix lows first", tone: "warn" },
          { label: "Time in and above range", detail: "TIR target over 70%; find when glucose is high" },
          { label: "Read the curve", detail: "Median, 25-75% band, 5-95% band; CV 36% or less" },
          { label: "Agree one or two changes", detail: "Basal for nights, bolus for meals; recheck in 2-4 weeks", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Monitoring ladder by intensity",
        caption: "Match the tool to the treatment and the budget.",
        steps: [
          { label: "HbA1c alone", detail: "Non-hypoglycaemic oral drugs, stable" },
          { label: "Structured SMBG profile", detail: "7-point or paired pre/post meal before visits" },
          { label: "Daily fasting SMBG", detail: "Basal insulin titration" },
          { label: "Professional 14-day CGM", detail: "At diagnosis and when therapy changes" },
          { label: "Continuous flash or real-time CGM", detail: "Type 1, MDI, sulfonylurea, unawareness, pregnancy" },
          { label: "Automated insulin delivery", detail: "CGM + pump + algorithm", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "HbA1c vs CGM metrics",
        columns: ["Feature", "HbA1c", "CGM (TIR, GMI)"],
        rows: [
          ["Time window", "8-12 weeks", "14 days"],
          ["Hypoglycaemia", "Not shown", "Time below range"],
          ["Variability", "Not shown", "CV, AGP bands"],
          ["Distorted by", "Anaemia, haemolysis, variants, CKD", "Lag, compression, some drugs"],
          ["Cost in India", "Low", "High"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**SMBG** gives a capillary snapshot; **CGM** reads interstitial glucose every few minutes.",
            "HbA1c **hides hypoglycaemia** and variability.",
            "Each **10% rise in TIR** is about 0.5-0.8% fall in HbA1c.",
            "Sensor accuracy (**MARD**) is now about 8-10%.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Devices: glucometer, **flash**, **real-time**, **professional 14-day**, implantable CGM.",
            "**AID** links CGM to a pump through an algorithm.",
            "Hypoglycaemia **level 1** is 54-69; **level 2** under 54; **level 3** needs help.",
            "Hyperglycaemia **level 1** is 181-250; **level 2** over 250.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Sensors use **glucose oxidase** to make a current.",
            "Interstitial glucose **lags 5-15 minutes** behind blood.",
            "**Compression lows** happen when lying on the sensor.",
            "**Vitamin C, paracetamol and hydroxyurea** can falsely raise some sensors.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Core targets: **TIR over 70%**, under 70 below 4%, under 54 below 1%.",
            "Time over 180 **below 25%**; over 250 **below 5%**.",
            "Variability: **CV 36% or less**.",
            "Older people: **TIR over 50%**, time under 70 below 1%.",
            "Pregnancy type 1: **63-140 mg/dL over 70%**.",
            "**GMI** = 3.31 + 0.02392 times mean glucose.",
            "Need **14 days with 70% wear** to trust the report.",
          ],
        },
        {
          title: "Differential diagnosis",
          points: [
            "HbA1c above GMI: **iron or B12 deficiency**, poor monitoring.",
            "HbA1c below GMI: **haemolysis**, transfusion, CKD, pregnancy.",
            "Odd meter readings: **unwashed fingers**, heat-damaged strips.",
            "Use **fructosamine** when HbA1c is unreliable.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Read the AGP **lows first**, then highs, then variability.",
            "Night lows: **reduce basal 10-20%** or stop evening sulfonylurea.",
            "Post-meal spike: **inject 15-20 minutes before** eating.",
            "Late post-meal low: **reduce bolus** or switch to analogue.",
            "Make **one or two changes**; review in 2-4 weeks.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Type 1 not at target on MDI and CGM: refer for **AID**.",
            "AID adds about **10-15% TIR**, mostly at night.",
            "Pump glucose over 250 that will not fall: **check ketones**, use a pen.",
            "In hospital, CGM may continue with **point-of-care checks**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Children**: CGM from diagnosis with alerts to parents.",
            "**CKD and dialysis**: prefer CGM because HbA1c misleads.",
            "**Resource-limited**: professional 14-day CGM or structured SMBG.",
            "Remove sensors before **MRI, CT and diathermy**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review **CGM data at every visit**.",
            "HbA1c **3-monthly** until at target, then 6-monthly.",
            "Re-teach **meter technique** yearly; hot weather damages strips.",
            "Type 1 SMBG without CGM: **6-10 times daily**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ADA 2026**: CGM at diagnosis for insulin or sulfonylurea users.",
            "**ADA 2025-2026**: AID for all type 1; consider in insulin-treated type 2.",
            "**AGP 2023** report standardises the five-range TIR bar.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs adjusted from monitoring data",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Basal insulin", "SC once daily; change 10-20% by night pattern", "Review every 3 days", "Night hypoglycaemia"],
            ["Rapid-acting insulin", "SC 15-20 min before meals by carb ratio", "Review every 1-2 weeks", "Stacking causes lows"],
            ["Gliclazide MR", "30-120 mg oral once daily", "Reduce if TBR 4% or more", "Hypoglycaemia"],
            ["Oral glucose", "15 g oral for glucose under 70", "Recheck in 15 min", "Rebound high if overtreated"],
            ["Glucagon", "1 mg IM/SC or 3 mg nasal", "Single dose", "Vomiting"],
          ],
        },
        {
          heading: "CGM targets",
          columns: ["Group", "TIR", "TBR", "TAR"],
          rows: [
            ["Adults type 1 and 2", "70-180 over 70%", "Under 70 below 4%; under 54 below 1%", "Over 180 below 25%"],
            ["Older / high-risk", "70-180 over 50%", "Under 70 below 1%", "Over 250 below 10%"],
            ["Pregnancy type 1", "63-140 over 70%", "Under 63 below 4%", "Over 140 below 25%"],
          ],
        },
        {
          heading: "Monitoring tools compared",
          columns: ["Tool", "Window", "Best use"],
          rows: [
            ["HbA1c", "8-12 weeks", "Long-term control"],
            ["Fructosamine", "2-3 weeks", "When HbA1c unreliable"],
            ["SMBG", "Moment", "Dosing, confirming lows"],
            ["Professional CGM", "14 days", "Pattern finding in clinic"],
            ["Real-time CGM", "Continuous", "Alarms, AID"],
          ],
        },
      ],
      remember: [
        "**70-4-1-25-5** are the core CGM targets.",
        "**CV 36% or less** means stable glucose.",
        "**14 days, 70% wear** before reading an AGP.",
        "**Lows first**, then highs, then variability.",
        "**TIR 70% is about HbA1c 7%.**",
        "Older people: **TIR over 50%, TBR under 1%**.",
        "Confirm sensor lows with a **finger-prick**.",
      ],
    },
  },
};

export default revision;
