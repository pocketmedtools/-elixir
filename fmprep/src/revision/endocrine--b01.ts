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
};

export default revision;
