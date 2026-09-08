/**
 * Endocrine & metabolic - Family Medicine board revision.
 *
 * Ordered commonest-first: type 2 diabetes and its day-to-day management, then
 * insulin, complication screening, hypoglycaemia and thyroid disease, then the
 * metabolic cluster, then the uncommon adrenal tail that decides ranks.
 */
import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "endocrine-t2dm-diagnosis-oral-drugs",
  title: "Type 2 diabetes: diagnosis and oral drug selection",
  oneLiner:
    "Type 2 diabetes is diagnosed by FPG 126 mg/dL or more, 2-hour post-75 g OGTT 200 mg/dL or more, HbA1c 6.5% or more, or a random glucose of 200 mg/dL or more with osmotic symptoms, and is managed with lifestyle plus metformin, adding a second agent chosen by cardio-renal risk, weight, hypoglycaemia risk and cost.",
  frequency: "core",
  keywords: [
    "T2DM",
    "diabetes mellitus",
    "HbA1c",
    "OGTT",
    "metformin",
    "SGLT2 inhibitor",
    "dapagliflozin",
    "empagliflozin",
    "sulfonylurea",
    "glimepiride",
    "gliclazide",
    "teneligliptin",
    "sitagliptin",
    "pioglitazone",
    "acarbose",
    "IDRS",
    "ICMR-INDIAB",
    "prediabetes",
    "LADA",
    "FCPD",
    "MODY",
    "NP-NCD",
  ],
  sections: [
    {
      heading: "Diagnostic criteria and burden",
      points: [
        "Fasting plasma glucose **126 mg/dL or more** after an 8 h fast diagnoses diabetes. [ADA 2025]",
        "2-hour plasma glucose **200 mg/dL or more** after a 75 g oral glucose load diagnoses diabetes. [ADA 2025]",
        "HbA1c **6.5% or more** diagnoses diabetes. [ADA 2025]",
        "Random plasma glucose **200 mg/dL or more** with polyuria, polydipsia and weight loss diagnoses diabetes. [ADA 2025]",
        "Any one of these four criteria is enough - they are alternatives, not a set to be satisfied together. [ADA 2025]",
        "Without unequivocal hyperglycaemia, confirm with a **repeat test on a separate sample** - ideally the same test repeated. [ADA 2025]",
        "Two different abnormal tests on one sample also confirm - for example FPG 132 mg/dL with HbA1c 6.8%. [ADA 2025]",
        "Impaired fasting glucose is **100-125 mg/dL** by ADA, **110-125 mg/dL** by WHO. [ADA 2025]",
        "Impaired glucose tolerance is a 2-hour value of **140-199 mg/dL** after 75 g glucose. [ADA 2025]",
        "The prediabetic HbA1c range is **5.7-6.4%**. [ADA 2025]",
        "About **one in four** Indians with prediabetes converts to diabetes within 5 years. [ICMR 2018]",
        "ICMR-INDIAB found diabetes in **11.4%** of Indian adults. [ICMR-INDIAB 2023]",
        "ICMR-INDIAB found prediabetes in **15.3%** of Indian adults. [ICMR-INDIAB 2023]",
        "Prediabetes now exceeds diabetes in most states - the pipeline of future disease is larger than the current disease. [ICMR-INDIAB 2023]",
        "NFHS-5 found about **one in seven** adults aged 15 and above with random glucose above 140 mg/dL or already on medication. [NFHS-5 2019-21]",
        "The urban excess is narrowing as rural prevalence rises. [NFHS-5 2019-21]",
        "Asian Indian phenotype: onset **a decade earlier** than in Europeans and at a lower BMI. [ICMR 2018]",
        "Asian Indians carry more visceral and hepatic fat with lower muscle mass, early beta-cell failure and a strong family history. [ICMR 2018]",
        "A normal BMI must never reassure you in an Indian patient. [ICMR 2018]",
      ],
    },
    {
      heading: "Whom to screen and how",
      points: [
        "ICMR advises **screening all adults from age 30**. [ICMR 2018]",
        "Screen earlier than 30 if overweight with a first-degree relative with diabetes, hypertension, dyslipidaemia or PCOS. [ICMR 2018]",
        "Other early-screening triggers: prior gestational diabetes, acanthosis nigricans or sedentary work. [ICMR 2018]",
        "NP-NCD does **population-based screening of everyone aged 30 and above** through the ASHA and ANM at the Health and Wellness Centre. [NP-NCD MoHFW]",
        "Screening uses the **CBAC form** with a capillary glucose as the first filter. [NP-NCD MoHFW]",
        "Every positive capillary screen needs **venous confirmation**. [NP-NCD MoHFW]",
        "IDRS (MDRF) scores four items - age, waist circumference, physical activity and family history - to a maximum of **100**. [ICMR 2018]",
        "**IDRS 60 or more is high risk** and mandates a blood test. [ICMR 2018]",
        "IDRS is free, needs only a measuring tape and works in camps. [ICMR 2018]",
        "Use **fasting plasma glucose plus HbA1c** as the practical screening pair. [ADA 2025]",
        "Venous plasma, laboratory method, NGSP-certified assay - a glucometer reading never diagnoses diabetes. [ADA 2025]",
        "HbA1c is **falsely high in iron deficiency** - the commonest Indian trap. [ADA 2025]",
        "HbA1c is **falsely low** after recent transfusion, blood loss or haemolysis. [ADA 2025]",
        "HbA1c is uninterpretable in haemoglobinopathies - HbE, HbD and sickle trait. [ADA 2025]",
        "HbA1c is unreliable in advanced chronic kidney disease - cross-check against plasma glucose. [ADA 2025]",
        "Repeat screening **every 3 years if normal** and **annually if prediabetes**. [ADA 2025]",
        "Give structured lifestyle advice alongside screening, not instead of it. [ICMR 2018]",
      ],
    },
    {
      heading: "Is it really type 2? Sorting the phenotype",
      points: [
        "Type 1 or ketosis-prone: lean, **age under 35**, rapid weight loss over weeks, ketonuria, poor response to oral agents. [ICMR 2018]",
        "Send **fasting C-peptide with a paired glucose** and GAD antibodies rather than guessing the type. [RSSDI 2022]",
        "LADA: adult onset, lean, apparent type 2 that **fails oral agents within 6-12 months**. [RSSDI 2022]",
        "LADA is **GAD antibody positive** - move to insulin early. [RSSDI 2022]",
        "Avoid sulfonylureas in LADA - they accelerate beta-cell exhaustion. [RSSDI 2022]",
        "Fibrocalculous pancreatic diabetes: young, very lean, recurrent epigastric pain from childhood, steatorrhoea. [ICMR 2018]",
        "FCPD shows **pancreatic calculi** on plain abdominal X-ray or CT - described from Kerala, Odisha and Tamil Nadu. [ICMR 2018]",
        "FCPD needs **insulin plus pancreatic enzyme replacement** and characteristically resists ketosis. [ICMR 2018]",
        "Drug causes of secondary diabetes: **corticosteroids, antiretrovirals, atypical antipsychotics**. [ICMR 2018]",
        "Disease causes of secondary diabetes: post-pancreatitis, chronic pancreatitis, haemochromatosis, Cushing syndrome, acromegaly. [ICMR 2018]",
        "Suspect MODY when **three generations** are affected, onset is **before 25**, the patient is non-obese and there is no ketosis. [RSSDI 2022]",
        "MODY fasting hyperglycaemia is mild and stable rather than progressive. [RSSDI 2022]",
        "**HNF1A MODY responds to low-dose sulfonylurea** and needs no insulin. [RSSDI 2022]",
        "The best bedside discriminator is **body habitus plus the speed of the story**. [RSSDI 2022]",
        "Obese with years of creeping numbers is type 2; lean with weeks of weight loss is not. [RSSDI 2022]",
      ],
    },
    {
      heading: "Targets and the first consultation",
      points: [
        "**HbA1c below 7%** is the target for most adults with type 2 diabetes. [ADA 2025]",
        "**HbA1c 6.5% or lower** for the young, newly diagnosed, with long life expectancy and no cardiovascular disease. [ADA 2025]",
        "**HbA1c up to 8%** is acceptable in frailty, advanced complications, hypoglycaemia unawareness or short life expectancy. [ADA 2025]",
        "Fasting glucose target **80-130 mg/dL**; 2-hour postprandial **below 180 mg/dL**. [ADA 2025]",
        "On Indian high-carbohydrate diets the **postprandial excursion dominates the HbA1c** - measure the post-lunch value, not only the fasting. [RSSDI 2022]",
        "Baseline bloods: HbA1c, fasting lipids, serum creatinine with eGFR, urine albumin-creatinine ratio, ALT and TSH. [ICMR 2018]",
        "Baseline tests also include an **ECG and a dilated fundus examination** at diagnosis. [ICMR 2018]",
        "Baseline bedside: **10 g monofilament foot examination**, blood pressure, weight and waist circumference. [ICMR 2018]",
        "Ask every diabetic about **cough for 2 weeks or more**, fever, night sweats and weight loss. [NTEP]",
        "Bidirectional screening: every diabetic is screened for TB symptoms and every TB patient is tested for diabetes. [NTEP]",
        "Prescribe **150 minutes a week of brisk activity** plus two sessions of resistance work. [ADA 2025]",
        "Set a **5-7% weight loss** target and replace refined cereal with whole grain and millets. [ICMR 2018]",
        "Give a written portion plan - the non-drug prescription alone is worth roughly **1-1.5% of HbA1c**. [ICMR 2018]",
        "Register the patient in the **NP-NCD register at the first visit** - it drives follow-up, free drugs and annual screening. [NP-NCD MoHFW]",
      ],
    },
    {
      heading: "Choosing the oral agent",
      points: [
        "**Metformin is first line for nearly everyone** with type 2 diabetes. [ADA 2025]",
        "Start metformin **500 mg once or twice daily after food**, uptitrating weekly to **1000 mg twice daily**. [ADA 2025]",
        "Metformin gives a **1-1.5% HbA1c fall**, is weight neutral, causes no hypoglycaemia and costs least. [ADA 2025]",
        "Switch to **extended-release metformin** when diarrhoea limits the dose. [RSSDI 2022]",
        "Add an **SGLT2 inhibitor** for established atherosclerotic disease, heart failure or chronic kidney disease. [ADA 2025]",
        "Dose **dapagliflozin 10 mg OD** or **empagliflozin 10-25 mg OD**. [ADA 2025]",
        "The SGLT2 benefit on heart-failure hospitalisation and eGFR decline is **independent of glucose lowering**. [ADA 2025]",
        "Add a **GLP-1 receptor agonist** when obesity or atherosclerotic disease dominates. [ADA 2025]",
        "Dose **dulaglutide 0.75-1.5 mg weekly SC**, or injectable semaglutide 0.25 mg weekly titrated to **1 mg weekly**. [ADA 2025]",
        "**Oral semaglutide 3-14 mg daily** is the tablet option. [ADA 2025]",
        "GLP-1 agonists give the best weight loss and a **1-1.5% HbA1c fall**, but cost limits public-sector use. [RSSDI 2022]",
        "Use a **sulfonylurea** when cost decides and hypoglycaemia risk is low. [RSSDI 2022]",
        "Dose **glimepiride 1-2 mg before breakfast** or **gliclazide MR 30-60 mg OD**. [RSSDI 2022]",
        "Sulfonylureas are cheap and potent but cause weight gain and hypoglycaemia and lose effect over years. [RSSDI 2022]",
        "**Avoid glibenclamide entirely** in the elderly and in renal impairment. [RSSDI 2022]",
        "DPP-4 inhibitors are weight-neutral and safe - **teneligliptin 20 mg OD** is the least expensive gliptin in India. [RSSDI 2022]",
        "**Linagliptin 5 mg OD** needs no renal dose change. [RSSDI 2022]",
        "Gliptins give a modest **0.5-0.8% HbA1c fall** and no cardiovascular benefit. [ADA 2025]",
        "**Never combine a DPP-4 inhibitor with a GLP-1 agonist** - the incretin mechanism is the same. [ADA 2025]",
        "**Pioglitazone 15-30 mg OD** is cheap and helps marked insulin resistance and fatty liver. [RSSDI 2022]",
        "Avoid pioglitazone in heart failure, oedema, osteoporosis and past bladder cancer. [RSSDI 2022]",
        "**Acarbose 25-50 mg with the first mouthful of each meal** targets the postprandial spike of a rice- or roti-heavy diet. [RSSDI 2022]",
        "**Start insulin from the outset** if HbA1c is above 10%, glucose above 300 mg/dL, ketonuria is present or the patient is catabolic. [ADA 2025]",
        "Step down from insulin to oral agents once glucotoxicity resolves. [ADA 2025]",
      ],
    },
    {
      heading: "Prediabetes and prevention",
      points: [
        "IDPP-1: lifestyle modification cut progression from IGT to diabetes by **28.5%**. [IDPP-1 2006]",
        "IDPP-1: metformin cut progression by **26.4%**. [IDPP-1 2006]",
        "IDPP-1: lifestyle plus metformin gave **28.2%** - combining adds nothing over either alone. [IDPP-1 2006]",
        "Offer **structured lifestyle modification to everyone with prediabetes**: 5-7% weight loss and 150 minutes a week of moderate activity. [ADA 2025]",
        "Reduce refined carbohydrate and give follow-up contact rather than a one-off lecture. [ADA 2025]",
        "**Metformin 500 mg BD may be added** for prediabetes with BMI **35 kg/m2 or more**, or **30 or more** by Asian-Indian criteria. [ADA 2025]",
        "Other triggers for metformin in prediabetes: age under 60, prior gestational diabetes, or rising HbA1c despite lifestyle. [ADA 2025]",
        "Metformin in prediabetes is not a blanket prescription. [ADA 2025]",
        "Recheck **HbA1c or fasting glucose annually** in prediabetes. [ADA 2025]",
        "Screen at the same visit for hypertension, dyslipidaemia and fatty liver, which cluster with prediabetes. [ADA 2025]",
        "Prediabetes is **already vascular risk**, not a warning of future risk. [ADA 2025]",
        "Retinopathy and neuropathy are detectable in a minority before the diabetes threshold is crossed. [ADA 2025]",
      ],
    },
    {
      heading: "Follow-up and failure",
      points: [
        "Review at **4-6 weeks** for tolerance and at **3 months with an HbA1c**. [ICMR 2018]",
        "If not at target, **add a drug rather than substitute one** - monotherapy failure reflects progressive beta-cell loss. [ADA 2025]",
        "Before blaming the drug, check adherence, dosing technique, diet and an untreated infection. [RSSDI 2022]",
        "Also check steroid use, thyroid status and depression before escalating therapy. [RSSDI 2022]",
        "The commonest cause of secondary failure in Indian practice is that **the tablets ran out**. [RSSDI 2022]",
        "Do not stack drugs with the same mechanism - sulfonylurea with a glinide, or a DPP-4 inhibitor with a GLP-1 agonist. [ADA 2025]",
        "**Stop or halve the sulfonylurea** when starting bedtime basal insulin if hypoglycaemia appears. [ADA 2025]",
        "**Check serum vitamin B12 after 3-4 years of metformin**, or sooner if there is neuropathy. [ADA 2025]",
        "Metformin-induced B12 deficiency mimics diabetic neuropathy - correct with **methylcobalamin 1500 mcg daily**. [RSSDI 2022]",
        "Annual screen: urine albumin-creatinine ratio, eGFR, dilated fundus, feet with a monofilament and fasting lipids. [ADA 2025]",
        "Blood pressure and weight at every visit. [ADA 2025]",
        "Sick-day rule one: **never stop insulin**. [ADA 2025]",
        "Sick-day rule two: hold metformin and SGLT2 inhibitors during vomiting, dehydration or sepsis. [ADA 2025]",
        "Sick-day rule three: test glucose more often and attend if vomiting prevents fluids. [ADA 2025]",
      ],
    },
  ],
  tables: [
    {
      heading: "Oral agents: dose, effect and what limits them",
      columns: ["Class and drug", "Usual dose", "HbA1c fall", "Weight / hypo", "Watch for"],
      rows: [
        ["Biguanide - metformin", "500 mg OD after food up to 1 g BD", "1.0-1.5%", "Neutral / none", "GI upset, B12 deficiency; halve at eGFR 30-45, stop below 30"],
        ["SGLT2i - dapagliflozin, empagliflozin", "Dapagliflozin 10 mg OD; empagliflozin 10-25 mg OD", "0.5-0.9%", "Loss 2-3 kg / none alone", "Genital mycotic infection, volume depletion, euglycaemic DKA; hold in sepsis or fasting"],
        ["GLP-1 RA - dulaglutide, semaglutide", "Dulaglutide 0.75-1.5 mg weekly SC", "1.0-1.5%", "Loss 3-6 kg / none alone", "Nausea, cost; avoid with MEN2 or medullary thyroid cancer history"],
        ["Sulfonylurea - glimepiride, gliclazide MR", "Glimepiride 1-4 mg before breakfast", "1.0-1.5%", "Gain 2-3 kg / yes", "Hypoglycaemia in elderly, CKD, skipped meals, alcohol, Ramadan fasting"],
        ["DPP-4i - teneligliptin, sitagliptin, linagliptin", "20 mg / 100 mg / 5 mg OD", "0.5-0.8%", "Neutral / none", "Teneligliptin cheapest; saxagliptin has a heart-failure signal; pancreatitis rare"],
        ["TZD - pioglitazone", "15-30 mg OD", "0.8-1.2%", "Gain / none", "Oedema, heart failure, fractures, bladder cancer caution"],
        ["Alpha-glucosidase inhibitor - acarbose", "25-50 mg with first bite, TDS", "0.5-0.8%", "Neutral / none", "Flatulence; treat hypoglycaemia with glucose, not sucrose"],
      ],
    },
    {
      heading: "Individualising the HbA1c target",
      columns: ["Patient", "Target HbA1c", "Reasoning"],
      rows: [
        ["Newly diagnosed, under 50, no complications", "6.5% or lower", "Legacy effect; long horizon to accrue benefit"],
        ["Most adults with T2DM", "Below 7%", "Microvascular benefit proven; macrovascular benefit modest"],
        ["Established CVD, long duration, hypoglycaemia risk", "7.0-7.5%", "ACCORD showed harm from aggressive lowering in this group"],
        ["Frail elderly, living alone, cognitive impairment", "7.5-8.0%", "Hypoglycaemia causes more harm than hyperglycaemia"],
        ["Advanced CKD, dialysis, short life expectancy", "Around 8%, avoid symptoms", "HbA1c unreliable; aim for freedom from osmotic symptoms"],
      ],
    },
  ],
  redFlags: [
    "Lean young patient with weight loss over weeks, ketonuria and glucose above 250 mg/dL - treat as type 1 or ketosis-prone diabetes and start insulin the same day.",
    "Glucose above 300 mg/dL with vomiting, dehydration, drowsiness or Kussmaul breathing - admit for DKA or hyperosmolar state, do not send home on tablets.",
    "New diabetes with cough for 2 weeks or more, fever or weight loss - send sputum for NAAT under NTEP before intensifying glucose treatment.",
    "Foot ulcer with cellulitis, crepitus, foul discharge or bone felt on probing - same-day surgical referral, not an outpatient dressing.",
    "Sudden visual loss, floaters or a red painful eye in a diabetic - same-day ophthalmology for vitreous haemorrhage or retinal detachment.",
    "Metformin continued through vomiting, diarrhoea or sepsis with rising creatinine - stop it and check lactate and bicarbonate for lactic acidosis.",
  ],
  pearls: [
    "One abnormal test does not diagnose diabetes unless the patient is symptomatic with a random glucose of 200 mg/dL or more - otherwise repeat before labelling someone for life.",
    "In India check the haemoglobin before trusting an HbA1c: iron deficiency raises it and can manufacture a diagnosis that the fasting glucose does not support.",
    "Metformin is not contraindicated in stable chronic kidney disease down to eGFR 30 - halve the dose between 30 and 45 and withhold it around contrast and acute illness.",
    "Choose the second drug by the complication you fear: heart failure or albuminuric CKD calls for an SGLT2 inhibitor, obesity for a GLP-1 agonist, an empty wallet for a sulfonylurea or teneligliptin.",
    "A high HbA1c with acceptable fasting values means the postprandial spike is doing the damage - target it with acarbose, a short-acting secretagogue or split carbohydrate portions.",
    "Every newly diagnosed diabetic gets four questions for TB and every TB patient gets a blood sugar - that is the bidirectional screening NTEP expects of you.",
    "IDPP-1 is the number to quote in any prevention answer: lifestyle 28.5%, metformin 26.4%, both together 28.2% relative risk reduction - combining adds nothing.",
  ],
  theory: [
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "A 45-year-old man is found to have a fasting plasma glucose of 148 mg/dL at a workplace camp. Describe how you will confirm the diagnosis, the baseline assessment you will perform, and outline your plan of management for the first year.",
      openingLines: [
        "Type 2 diabetes mellitus is a chronic metabolic disorder of insulin resistance with progressive beta-cell failure, diagnosed by a fasting plasma glucose of 126 mg/dL or more, a 2-hour post-75 g glucose of 200 mg/dL or more, an HbA1c of 6.5% or more, or a random glucose of 200 mg/dL or more with osmotic symptoms.",
        "In an asymptomatic person a single abnormal value must be confirmed by a repeat abnormal test before the diagnosis is made, since the label carries lifelong therapeutic and insurance consequences.",
      ],
      answer: [
        {
          heading: "1. Confirmation of the diagnosis",
          points: [
            "Repeat the **venous fasting plasma glucose** in the laboratory on a separate day. [ADA 2025]",
            "Or send an HbA1c on the same sample - **two abnormal tests confirm diabetes**. [ADA 2025]",
            "A capillary glucometer value is a screening tool only and can never confirm the diagnosis. [ADA 2025]",
            "Check haemoglobin and iron status before relying on HbA1c - iron deficiency falsely raises it. [ADA 2025]",
            "Haemoglobinopathy makes the HbA1c uninterpretable. [ADA 2025]",
            "If FPG is only **100-125 mg/dL**, label prediabetes rather than diabetes. [ADA 2025]",
            "Perform a **75 g OGTT** where impaired glucose tolerance is suspected. [ADA 2025]",
          ],
        },
        {
          heading: "2. Assessment at diagnosis",
          points: [
            "History: duration of symptoms, osmotic symptoms, weight change and family history. [ICMR 2018]",
            "History: tobacco and alcohol use, occupation and shift pattern. [ICMR 2018]",
            "Drug history: steroids, antipsychotics and antiretrovirals all cause secondary diabetes. [ICMR 2018]",
            "Ask the **four TB symptom questions** at diagnosis. [NTEP]",
            "Examination: weight, height, BMI against **Asian-Indian cut-offs** and waist circumference. [ICMR 2018]",
            "Examination: blood pressure with a standing reading, acanthosis nigricans and fundus. [ICMR 2018]",
            "Examination: both feet with a **10 g monofilament** and pedal pulses. [ICMR 2018]",
            "Investigations: HbA1c, fasting lipid profile, serum creatinine with eGFR. [ICMR 2018]",
            "Investigations: urine albumin-creatinine ratio, urine routine, ALT, TSH and ECG. [ICMR 2018]",
            "A lean patient with rapid weight loss and ketonuria needs **C-peptide and GAD antibodies** before being labelled type 2. [RSSDI 2022]",
          ],
        },
        {
          heading: "3. Non-pharmacological management",
          points: [
            "Nutrition: **50-55% of energy from complex carbohydrate**, with whole grains and millets replacing polished rice and maida. [ICMR 2018]",
            "Nutrition: **25-30 g fibre daily**, salt under **5 g/day** and fixed portion sizes. [ICMR 2018]",
            "Activity: **150 minutes a week** of moderate aerobic activity over at least five days, with no more than two consecutive days missed. [ADA 2025]",
            "Add **resistance exercise twice a week**. [ADA 2025]",
            "Weight target: **5-7% loss in the first six months**, which alone gives 1-1.5% of HbA1c. [ICMR 2018]",
            "Tobacco cessation in every form, including gutkha and khaini. [NP-NCD MoHFW]",
            "Alcohol limitation, foot care education and structured self-monitoring instruction. [ICMR 2018]",
          ],
        },
        {
          heading: "4. Pharmacological management",
          points: [
            "Start **metformin 500 mg once daily after food**, increasing weekly to **1000 mg twice daily** as tolerated. [ADA 2025]",
            "Full-dose metformin requires eGFR above **45 mL/min/1.73 m2**. [ADA 2025]",
            "Set an HbA1c target **below 7%**, or **6.5%** in this newly diagnosed man of 45 with no complications. [ADA 2025]",
            "Reassess HbA1c at **3 months** and add a second agent chosen by comorbidity if above target. [ADA 2025]",
            "SGLT2 inhibitor for heart failure or CKD; GLP-1 agonist for obesity or established atherosclerotic disease. [ADA 2025]",
            "Sulfonylurea or teneligliptin where cost governs the choice. [RSSDI 2022]",
            "Add **atorvastatin 10-20 mg at night** for primary prevention. [ADA 2025]",
            "Add an **ACE inhibitor or ARB** if blood pressure is 140/90 mmHg or more, or if albuminuria is present. [ADA 2025]",
          ],
        },
        {
          heading: "5. Follow-up over the first year",
          points: [
            "Visits at **4-6 weeks**, then **3-monthly with HbA1c**, weight and blood pressure. [ICMR 2018]",
            "Review adherence and hypoglycaemia at each visit. [ICMR 2018]",
            "At 12 months: dilated fundus examination, urine albumin-creatinine ratio and eGFR. [ADA 2025]",
            "At 12 months: lipid profile and foot examination - repeat all of these annually. [ADA 2025]",
            "Register the patient in the **NP-NCD clinic register** for free drug supply and recall. [NP-NCD MoHFW]",
            "Educate on sick-day rules, hypoglycaemia recognition and treatment, and when to attend the same day. [ADA 2025]",
          ],
        },
      ],
      mustDraw: [
        "Table of the four diagnostic criteria with the prediabetes ranges beside each.",
        "Flow chart: abnormal screening glucose - repeat test - confirmed diabetes - baseline assessment - lifestyle plus metformin - review at 3 months with HbA1c - add second agent by comorbidity.",
      ],
      markSplit: [
        { part: "Diagnostic criteria and confirmation", marks: 2 },
        { part: "Baseline history, examination and investigations", marks: 2 },
        { part: "Non-pharmacological management", marks: 2 },
        { part: "Drug therapy with doses and targets", marks: 3 },
        { part: "Follow-up schedule and complication screening", marks: 1 },
      ],
      keywords: ["diagnosis", "metformin", "HbA1c target", "NP-NCD", "baseline work-up"],
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write short notes on prediabetes and its management in Indian primary care.",
      openingLines: [
        "Prediabetes is an intermediate state of dysglycaemia that does not meet the diagnostic threshold for diabetes but carries a substantially increased risk of progression to diabetes and of cardiovascular disease.",
        "It is defined by impaired fasting glucose 100-125 mg/dL (ADA) or 110-125 mg/dL (WHO), impaired glucose tolerance with a 2-hour value of 140-199 mg/dL after 75 g glucose, or an HbA1c of 5.7-6.4%.",
      ],
      answer: [
        {
          heading: "Burden and significance",
          points: [
            "ICMR-INDIAB found prediabetes in **15.3%** of Indian adults. [ICMR-INDIAB 2023]",
            "That exceeds the **11.4%** who have diabetes. [ICMR-INDIAB 2023]",
            "Roughly **one in four** converts to diabetes within five years without intervention. [ICMR 2018]",
            "Prediabetes already carries excess cardiovascular risk. [ADA 2025]",
            "Prediabetes clusters with hypertension, dyslipidaemia and non-alcoholic fatty liver disease. [ADA 2025]",
          ],
        },
        {
          heading: "Detection",
          points: [
            "Opportunistic and population screening **from age 30** under NP-NCD using the CBAC form. [NP-NCD MoHFW]",
            "Or screen with the **IDRS at a cut-off of 60**. [ICMR 2018]",
            "Confirm with a venous fasting plasma glucose and an HbA1c. [ADA 2025]",
            "Use a **75 g OGTT** when isolated impaired glucose tolerance is suspected, as after gestational diabetes. [ADA 2025]",
          ],
        },
        {
          heading: "Management",
          points: [
            "Structured lifestyle modification is first line: **5-7% weight loss** and **150 minutes a week** of moderate activity. [ADA 2025]",
            "Substitute whole grain and millets for polished cereal and cut refined sugar. [ICMR 2018]",
            "Give repeated contact rather than a single lecture. [IDPP-1 2006]",
            "IDPP-1: lifestyle cut progression by **28.5%**, metformin by **26.4%**, both together by **28.2%**. [IDPP-1 2006]",
            "Combining lifestyle and metformin gives no additional benefit over either alone. [IDPP-1 2006]",
            "**Metformin 500 mg twice daily** is added selectively for BMI **30 kg/m2 or more** by Asian-Indian criteria. [ADA 2025]",
            "Other indications for metformin: age under 60, prior gestational diabetes, or rising HbA1c despite lifestyle. [ADA 2025]",
            "Treat the accompanying risk factors: blood pressure **below 140/90 mmHg**, a statin if 10-year risk warrants it, tobacco cessation. [ADA 2025]",
          ],
        },
        {
          heading: "Follow-up",
          points: [
            "**Annual fasting glucose or HbA1c** in prediabetes. [ADA 2025]",
            "Waist circumference and weight at every contact. [ICMR 2018]",
            "Screen annually for hypertension and dyslipidaemia. [ADA 2025]",
            "Consider fatty liver evaluation if ALT is raised. [ADA 2025]",
          ],
        },
      ],
      mustDraw: ["Table of prediabetes cut-offs: IFG, IGT and HbA1c, with the ADA and WHO fasting ranges side by side."],
      markSplit: [
        { part: "Definition and cut-offs", marks: 1 },
        { part: "Burden and significance", marks: 1 },
        { part: "Lifestyle management with IDPP-1 numbers", marks: 2 },
        { part: "Role of metformin and follow-up", marks: 1 },
      ],
      keywords: ["prediabetes", "IGT", "IDPP", "IDRS", "metformin prevention"],
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-t3",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Differentiate between type 1 diabetes, type 2 diabetes, LADA and fibrocalculous pancreatic diabetes.",
      openingLines: [
        "Correct classification decides whether insulin is mandatory, whether oral agents will work, and whether ketoacidosis is a risk, so the phenotype must be settled before treatment is chosen.",
        "The four discriminators used in practice are age and speed of onset, body habitus, ketosis proneness, and the C-peptide and autoantibody result.",
      ],
      answer: [
        {
          heading: "Clinical discriminators",
          points: [
            "Type 1: onset usually **under 35**, lean, symptoms over weeks, ketosis-prone. [ICMR 2018]",
            "Type 1: **C-peptide low or undetectable**, with GAD or IA-2 antibodies positive. [RSSDI 2022]",
            "Type 1 needs **insulin from day one** - oral agents will not work. [ICMR 2018]",
            "Type 2: onset usually **over 35**, overweight or centrally obese, insidious over years, ketosis-resistant. [ICMR 2018]",
            "Type 2: **C-peptide normal or high**, antibodies negative, oral agents effective initially. [RSSDI 2022]",
            "LADA: adult onset, lean or normal weight, initially responds to oral agents then **fails within 6-12 months**. [RSSDI 2022]",
            "LADA: **GAD antibody positive** with a preserved but falling C-peptide. [RSSDI 2022]",
            "LADA needs early insulin and avoidance of sulfonylureas. [RSSDI 2022]",
            "FCPD: young, very lean, south or east Indian, recurrent abdominal pain from childhood with steatorrhoea. [ICMR 2018]",
            "FCPD: **pancreatic calculi on imaging**, very high glucose but ketosis-resistant. [ICMR 2018]",
            "FCPD needs **insulin plus pancreatic enzyme replacement**. [ICMR 2018]",
          ],
        },
        {
          heading: "Investigations that settle it",
          points: [
            "**Fasting C-peptide with a paired plasma glucose** - a low C-peptide against hyperglycaemia means insulin deficiency. [RSSDI 2022]",
            "**GAD65 antibody** is positive in type 1 and LADA, negative in type 2 and FCPD. [RSSDI 2022]",
            "Plain abdominal X-ray or CT abdomen for **pancreatic calculi** in suspected FCPD. [ICMR 2018]",
            "**Faecal elastase** for exocrine insufficiency in suspected FCPD. [ICMR 2018]",
            "Urine ketones at presentation in any lean patient with marked hyperglycaemia. [ICMR 2018]",
          ],
        },
        {
          heading: "Why it matters",
          points: [
            "Misclassifying LADA as type 2 and giving a sulfonylurea hastens beta-cell failure and risks ketoacidosis. [RSSDI 2022]",
            "Misclassifying FCPD as type 1 misses the need for pancreatic enzyme replacement. [ICMR 2018]",
            "FCPD also carries a risk of pancreatic malignancy. [ICMR 2018]",
            "Misclassifying type 1 as type 2 and withholding insulin can be **fatal within days**. [ICMR 2018]",
          ],
        },
      ],
      mustDraw: [
        "Four-column comparison table: age, body habitus, ketosis, C-peptide, GAD antibody, imaging, and first-line treatment for type 1, type 2, LADA and FCPD.",
      ],
      markSplit: [
        { part: "Comparison table with clinical discriminators", marks: 3 },
        { part: "Investigations", marks: 1 },
        { part: "Therapeutic consequences of misclassification", marks: 1 },
      ],
      keywords: ["LADA", "FCPD", "C-peptide", "GAD antibody", "classification"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-q1",
      stem: "A 44-year-old asymptomatic shopkeeper attends for a health check. Fasting plasma glucose is 131 mg/dL. He has no polyuria, no weight loss and takes no medication. What is the correct next step?",
      options: [
        "Repeat the fasting plasma glucose or send an HbA1c on a separate day before labelling him diabetic",
        "Diagnose type 2 diabetes and start metformin 500 mg twice daily today",
        "Perform a 75 g oral glucose tolerance test immediately in the same sitting",
        "Reassure him that a single value of 131 mg/dL is within normal limits and repeat in 3 years",
      ],
      answer: 0,
      explanation:
        "In an asymptomatic patient a single abnormal test must be confirmed by a repeat abnormal test before diabetes is diagnosed; the confirmatory test may be the same test repeated or a second test such as HbA1c. Starting metformin at once commits an unconfirmed patient to lifelong therapy on one laboratory value. An immediate OGTT is unnecessary when a simpler fasting glucose or HbA1c will confirm, and it is more expensive and less reproducible. Calling 131 mg/dL normal is wrong - it is above the 126 mg/dL threshold and cannot be dismissed.",
      difficulty: "easy",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-q2",
      stem: "A 58-year-old man with type 2 diabetes for 8 years is on metformin 1 g twice daily. HbA1c is 8.2%, eGFR 48 mL/min/1.73 m2, urine albumin-creatinine ratio 180 mg/g, and he was admitted 4 months ago with heart failure with reduced ejection fraction. Which second agent is best?",
      options: [
        "Dapagliflozin 10 mg once daily",
        "Glimepiride 2 mg before breakfast",
        "Pioglitazone 15 mg once daily",
        "Sitagliptin 50 mg once daily",
      ],
      answer: 0,
      explanation:
        "An SGLT2 inhibitor reduces hospitalisation for heart failure and slows eGFR decline and albuminuria, and is the agent of choice when heart failure and albuminuric CKD coexist; dapagliflozin can be started and continued at this eGFR. Glimepiride only lowers glucose, adds hypoglycaemia risk and weight gain, and offers no cardio-renal benefit. Pioglitazone causes fluid retention and is contraindicated in symptomatic heart failure. Sitagliptin is safe but cardio-renally neutral, so it wastes the opportunity this patient's comorbidity creates.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-q3",
      stem: "A 26-year-old lean woman from coastal Kerala has had recurrent epigastric pain and steatorrhoea for 6 years. Fasting glucose is 268 mg/dL, urine ketones are negative and a plain abdominal X-ray shows coarse calculi along the line of the pancreas. Which diagnosis fits best?",
      options: [
        "Fibrocalculous pancreatic diabetes",
        "Latent autoimmune diabetes in adults",
        "Maturity-onset diabetes of the young, HNF1A subtype",
        "Classic type 1 diabetes mellitus",
      ],
      answer: 0,
      explanation:
        "Pancreatic calculi with a long history of pain and steatorrhoea in a lean young south Indian patient is fibrocalculous pancreatic diabetes, which needs insulin plus pancreatic enzyme replacement and characteristically resists ketosis despite very high glucose. LADA presents as adult-onset autoimmune diabetes without pancreatic calcification or exocrine failure. HNF1A MODY causes mild non-ketotic hyperglycaemia with a three-generation history and a normal pancreas, not calculi and steatorrhoea. Type 1 diabetes at this glucose would usually show ketonuria and has no exocrine or radiological findings.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-q4",
      stem: "A 62-year-old woman with type 2 diabetes has HbA1c 6.9% but fasting glucose consistently 138-150 mg/dL. She has microcytic anaemia with haemoglobin 8.4 g/dL and ferritin 6 ng/mL. How should the discrepancy be interpreted?",
      options: [
        "Iron deficiency raises HbA1c relative to true glycaemia, so glucose values should guide treatment",
        "Iron deficiency lowers HbA1c, so her true control is worse than 6.9% suggests",
        "The HbA1c is accurate and the fasting glucose readings are laboratory error",
        "Anaemia has no effect on HbA1c when the haemoglobin is above 8 g/dL",
      ],
      answer: 0,
      explanation:
        "Untreated iron deficiency prolongs erythrocyte survival and increases glycation, so HbA1c reads falsely high; here the fasting glucose values are the more truthful measure and iron should be replaced before re-testing. It is haemolysis, recent transfusion and blood loss that shorten red cell life and lower HbA1c, not iron deficiency. Dismissing repeated fasting values as laboratory error ignores a well-described interference, and anaemia distorts HbA1c well above a haemoglobin of 8 g/dL.",
      difficulty: "hard",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-q5",
      stem: "A 35-year-old man with a sedentary desk job, waist 96 cm and both parents diabetic is screened at a workplace camp. Using the Indian Diabetes Risk Score, what is the appropriate action?",
      options: [
        "His score is 60 or more, so send a fasting plasma glucose and HbA1c now",
        "His score is below 60, so repeat the score in 3 years without blood tests",
        "The score cannot be applied below the age of 40",
        "Start metformin 500 mg daily as primary prevention based on the score alone",
      ],
      answer: 0,
      explanation:
        "IDRS scores age 35-49 as 20, waist 90 cm or more in a man as 20, sedentary activity as 30 and both parents affected as 20, giving 90 - well above the 60 cut-off that defines high risk and mandates a blood test. Calling this low risk misreads the scoring. The score is designed for adults and is not restricted to those over 40. Metformin for prevention is considered only after glucose testing shows prediabetes with additional risk, never on a risk score alone.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-q6",
      stem: "A 70-year-old widow living alone has type 2 diabetes, chronic kidney disease with eGFR 38 mL/min/1.73 m2 and two documented episodes of symptomatic hypoglycaemia in the last 3 months on glibenclamide. HbA1c is 7.4%. What is the best change?",
      options: [
        "Stop glibenclamide, accept an HbA1c target of about 8% and use linagliptin 5 mg once daily",
        "Continue glibenclamide but halve the dose and aim for HbA1c below 6.5%",
        "Switch to glimepiride 4 mg daily to improve the HbA1c further",
        "Add pioglitazone 30 mg daily to allow better control at a lower sulfonylurea dose",
      ],
      answer: 0,
      explanation:
        "Glibenclamide has active renally cleared metabolites and is the sulfonylurea most likely to cause prolonged hypoglycaemia in the elderly with CKD; it should be stopped, the target relaxed to about 8% for a frail patient living alone, and a hypoglycaemia-free agent such as linagliptin used since it needs no renal dose adjustment. Halving glibenclamide while tightening the target increases the very risk that caused harm. Glimepiride at 4 mg is another sulfonylurea and still causes hypoglycaemia in CKD. Pioglitazone adds oedema and fracture risk in an elderly woman and does not address the offending drug.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-q7",
      stem: "A 47-year-old man newly diagnosed with type 2 diabetes has HbA1c 11.4%, fasting glucose 312 mg/dL, has lost 7 kg in 2 months and has 2+ urine ketones but is alert with a normal bicarbonate. What is the best initial management?",
      options: [
        "Start basal insulin with metformin now, and reassess for stepping down to oral agents once glucose normalises",
        "Start metformin 500 mg twice daily alone and review the HbA1c in 3 months",
        "Start metformin plus glimepiride and review in 6 weeks",
        "Start triple oral therapy with metformin, sitagliptin and dapagliflozin",
      ],
      answer: 0,
      explanation:
        "Catabolic features with HbA1c above 10%, glucose above 300 mg/dL and ketonuria indicate glucotoxicity with insufficient insulin reserve, so insulin is started immediately alongside metformin and is often withdrawn later once beta-cell function recovers. Metformin alone, or with a sulfonylurea, will not close a gap of this size quickly and leaves him catabolic. Triple oral therapy including an SGLT2 inhibitor is unsafe with ketonuria because of the risk of ketoacidosis.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-q8",
      stem: "In the Indian Diabetes Prevention Programme (IDPP-1), which statement about progression from impaired glucose tolerance to diabetes is correct?",
      options: [
        "Lifestyle modification and metformin each reduced progression by about 27-29%, and their combination gave no additional benefit",
        "Metformin alone was clearly superior to lifestyle modification alone",
        "The combination of lifestyle and metformin roughly doubled the benefit of either alone",
        "Neither lifestyle modification nor metformin significantly reduced progression in Asian Indians",
      ],
      answer: 0,
      explanation:
        "IDPP-1 reported relative risk reductions of 28.5% with lifestyle modification, 26.4% with metformin and 28.2% with both, so the two interventions were comparable and additive benefit was not demonstrated - the reason Indian guidance offers lifestyle first and adds metformin selectively. Metformin was not superior to lifestyle. The combination did not double the effect, which is the commonest misremembering of this trial. Both interventions were clearly effective, so the last option contradicts the trial entirely.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c1",
      front: "Four diagnostic thresholds for diabetes",
      back: "FPG 126 mg/dL or more; 2-h post 75 g OGTT 200 mg/dL or more; HbA1c 6.5% or more; random 200 mg/dL or more with osmotic symptoms.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c2",
      front: "Prediabetes numbers",
      back: "IFG 100-125 mg/dL (ADA) or 110-125 (WHO); IGT 2-h 140-199 mg/dL; HbA1c 5.7-6.4%.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c3",
      front: "IDRS components and the action cut-off",
      back: "Age, waist circumference, physical activity, family history; maximum 100. Score 60 or more is high risk and needs a blood glucose test.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c4",
      front: "ICMR-INDIAB 2023 headline prevalence",
      back: "Diabetes 11.4% and prediabetes 15.3% of Indian adults; prediabetes now outnumbers diabetes in most states.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c5",
      front: "Metformin and renal function",
      back: "Full dose above eGFR 45; halve between 30 and 45; do not start below 45 and stop below 30. Withhold around iodinated contrast and acute illness.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c6",
      front: "When does the second drug pick itself?",
      back: "Heart failure or albuminuric CKD gives an SGLT2 inhibitor; obesity or established atherosclerotic disease gives a GLP-1 agonist; cost gives a sulfonylurea or teneligliptin.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c7",
      front: "Conditions that make HbA1c untrustworthy",
      back: "Iron deficiency (falsely high); haemolysis, recent transfusion, blood loss, late pregnancy (falsely low); haemoglobinopathies and advanced CKD (uninterpretable).",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c8",
      front: "When to start insulin at diagnosis",
      back: "HbA1c above 10%, glucose above 300 mg/dL, ketonuria, or weight loss with catabolic symptoms; step down once glucotoxicity clears.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c9",
      front: "Clues to fibrocalculous pancreatic diabetes",
      back: "Lean young patient, recurrent abdominal pain, steatorrhoea, pancreatic calculi on X-ray, ketosis-resistant despite severe hyperglycaemia; needs insulin and enzyme replacement.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c10",
      front: "NTEP bidirectional screening rule",
      back: "Screen every diabetic for TB symptoms at each visit and test every diagnosed TB patient for diabetes.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c11",
      front: "Acarbose hypoglycaemia caveat",
      back: "It blocks sucrose breakdown, so hypoglycaemia on acarbose must be treated with glucose (dextrose) and not with table sugar.",
    },
    {
      id: "endocrine-t2dm-diagnosis-oral-drugs-c12",
      front: "IDPP-1 risk reductions",
      back: "Lifestyle 28.5%, metformin 26.4%, lifestyle plus metformin 28.2% - the combination adds nothing over either alone.",
    },
  ],
  references: [
    "American Diabetes Association, Standards of Care in Diabetes, 2025",
    "ICMR Guidelines for Management of Type 2 Diabetes, 2018",
    "RSSDI Clinical Practice Recommendations for the Management of Type 2 Diabetes Mellitus, 2022",
    "Anjana RM et al., ICMR-INDIAB-17, Lancet Diabetes and Endocrinology, 2023",
    "Ramachandran A et al., Indian Diabetes Prevention Programme (IDPP-1), Diabetologia, 2006",
    "National Programme for Prevention and Control of Non-Communicable Diseases (NP-NCD) operational guidelines, MoHFW",
  ],
});

topics.push({
  id: "endocrine-insulin-initiation",
  title: "Insulin initiation and titration in general practice",
  oneLiner:
    "Insulin is started in type 2 diabetes when HbA1c remains above target on two or three oral agents, when HbA1c is above 10% or glucose above 300 mg/dL at diagnosis, or in any catabolic or ketotic patient, usually as bedtime basal insulin at 10 units or 0.1-0.2 units/kg titrated by 2 units every 3 days against the fasting glucose.",
  frequency: "core",
  keywords: [
    "basal insulin",
    "NPH",
    "insulin glargine",
    "premix 30/70",
    "biphasic insulin",
    "regular insulin",
    "insulin aspart",
    "basal plus",
    "basal bolus",
    "titration",
    "Somogyi",
    "dawn phenomenon",
    "insulin pen",
    "lipohypertrophy",
    "units per kilogram",
  ],
  sections: [
    {
      heading: "When to start insulin",
      points: [
        "At diagnosis, start insulin if **HbA1c is above 10%** or **fasting glucose is above 300 mg/dL**. [ADA 2025]",
        "At diagnosis, ketonuria or unintentional weight loss with osmotic symptoms also mandates insulin. [ADA 2025]",
        "Glucotoxicity must be broken before oral agents can work. [RSSDI 2022]",
        "In established diabetes, start insulin when HbA1c stays above target on **two or three optimally dosed oral agents**. [ADA 2025]",
        "Also start insulin when HbA1c is **more than 1.5-2% above target** and oral escalation cannot close the gap. [ADA 2025]",
        "Compelling situations: pregnancy, acute myocardial infarction or stroke, sepsis and hospitalisation. [ADA 2025]",
        "Compelling situations: tuberculosis on treatment, chronic liver disease, **eGFR below 30**, perioperative period, high-dose corticosteroids. [ADA 2025]",
        "Phenotypes that need insulin: type 1 diabetes, LADA after early oral failure, fibrocalculous pancreatic diabetes, any low C-peptide. [RSSDI 2022]",
        "Insulin is **not a punishment and not a last resort** - say so at the first visit. [RSSDI 2022]",
        "Therapeutic inertia is the commonest reason Indian patients reach insulin with an HbA1c above 10%. [RSSDI 2022]",
      ],
    },
    {
      heading: "Choosing the regimen",
      points: [
        "**Bedtime basal insulin is the standard start** in type 2 diabetes. [ADA 2025]",
        "Start human NPH (isophane) **10 units at bedtime**, or **0.1-0.2 units/kg**. [ADA 2025]",
        "NPH is the cheapest basal and is supplied free in most NP-NCD clinics. [WHO EML 2023]",
        "**Analogue basal** - glargine U100 or detemir once daily at a fixed time - causes less nocturnal hypoglycaemia and runs flatter than NPH. [ADA 2025]",
        "Basal analogues cost several times more - reserve them for nocturnal hypoglycaemia, erratic meals, the elderly or renal impairment. [RSSDI 2022]",
        "**Premixed 30/70 human insulin twice daily** before breakfast and dinner suits two large fixed meals or poor literacy. [RSSDI 2022]",
        "Premix is the workhorse of Indian practice but demands regular meals and gives more hypoglycaemia. [RSSDI 2022]",
        "**Basal plus** adds one prandial dose to the largest meal when the fasting glucose is at target but the HbA1c is not. [ADA 2025]",
        "**Basal bolus** - basal once daily plus rapid-acting insulin before all three meals - is the most flexible and is the regimen for type 1. [ADA 2025]",
        "Rapid-acting analogues (aspart, lispro, glulisine) go in **0-10 minutes before the meal**. [FIT India 2e]",
        "Regular human insulin must go in **30 minutes before the meal** - the most commonly missed instruction in the clinic. [FIT India 2e]",
        "Continue metformin with insulin - it reduces the dose needed and limits weight gain. [ADA 2025]",
        "Continue an SGLT2 inhibitor or GLP-1 agonist if already prescribed. [ADA 2025]",
        "**Stop or halve the sulfonylurea** when basal insulin is started, and stop it altogether when prandial insulin is added. [ADA 2025]",
      ],
    },
    {
      heading: "Titration - how to actually do it",
      points: [
        "**Titrate basal insulin against the fasting capillary glucose alone.** [ADA 2025]",
        "Target fasting **80-130 mg/dL**, relaxed to **100-140 mg/dL** in the elderly or those living alone. [ADA 2025]",
        "**The 3-0-3 rule:** increase the bedtime dose by **2 units every 3 days** if fasting glucose is above target on 3 consecutive days. [RSSDI 2022]",
        "A simpler patient-led rule is to add **1 unit every day** until the fasting value is in range. [ADA 2025]",
        "**Reduce by 4 units, or by 10-20%,** for any glucose below **70 mg/dL** or any nocturnal symptoms. [ADA 2025]",
        "Never continue titrating up through hypoglycaemia. [ADA 2025]",
        "Stop increasing basal beyond **0.5 units/kg/day, or 40-60 units**, when fasting is at target but HbA1c is not. [ADA 2025]",
        "That is over-basalisation - the next step is prandial insulin or a GLP-1 agonist, not more basal. [ADA 2025]",
        "Premix: adjust the **morning dose against the pre-dinner glucose**, by 2 units every 3 days. [RSSDI 2022]",
        "Premix: adjust the **evening dose against the next fasting glucose**, by 2 units every 3 days. [RSSDI 2022]",
        "Prandial insulin starts at **4 units, or 10% of the basal dose**, with the largest meal. [ADA 2025]",
        "Titrate prandial insulin by **1-2 units every 3 days** against the 2-hour postprandial or next pre-meal glucose. [ADA 2025]",
      ],
    },
    {
      heading: "A high fasting glucose - which of the three causes?",
      points: [
        "**Insufficient basal dose** is by far the commonest cause of a high fasting glucose. [RSSDI 2022]",
        "In underdosing the pre-bed and **3 a.m.** values are high or normal with no nocturnal symptoms - increase the dose. [RSSDI 2022]",
        "**Dawn phenomenon:** the 3 a.m. glucose is normal and rises through the early morning under growth hormone and cortisol. [RSSDI 2022]",
        "For dawn phenomenon move the basal dose to bedtime rather than dinner, or switch NPH to a long-acting analogue. [RSSDI 2022]",
        "**Somogyi rebound:** the 3 a.m. glucose is low with sweating, nightmares or morning headache, and fasting rebounds high. [RSSDI 2022]",
        "For Somogyi **reduce the evening dose** - increasing it makes things worse. [RSSDI 2022]",
        "**Ask for a 3 a.m. reading at least once** before increasing evening insulin for a high fasting sugar. [RSSDI 2022]",
        "Exclude the artefacts: a late heavy dinner, a missed dose, expired or frozen insulin. [FIT India 2e]",
        "Exclude injection into lipohypertrophied skin and a glucometer never checked against a laboratory value. [FIT India 2e]",
      ],
    },
    {
      heading: "Injection technique, storage and the Indian realities",
      points: [
        "Injection sites: abdomen (fastest and most predictable absorption), thigh, buttock and upper outer arm. [FIT India 2e]",
        "**Rotate systematically within one site**, not between sites, at least **1 cm** from the last injection. [FIT India 2e]",
        "**Lipohypertrophy** is the commonest cause of unexplained erratic control - palpate every site at every visit. [FIT India 2e]",
        "Injecting into lipohypertrophy can reduce absorption by **25% or more**. [FIT India 2e]",
        "Moving to normal skin without reducing the dose causes hypoglycaemia. [FIT India 2e]",
        "Needle length **4-6 mm**; inject at **90 degrees with no pinch** for a 4 mm needle. [FIT India 2e]",
        "**Do not reuse needles** - blunting causes pain, bleeding and lipohypertrophy. [FIT India 2e]",
        "**Count 10 seconds** before withdrawing a pen needle. [FIT India 2e]",
        "Store unopened vials and cartridges at **2-8 degrees Celsius**, never frozen. [WHO EML 2023]",
        "In-use insulin keeps at room temperature for **28 days**, away from direct sunlight. [FIT India 2e]",
        "Where there is no refrigerator an earthen pot with wet sand or a matka works - the standard rural advice. [FIT India 2e]",
        "Human insulin in India is supplied as **U-100 in 10 mL vials and 3 mL cartridges or pens**. [WHO EML 2023]",
        "Match the syringe to the insulin strength - U-40 insulin still exists and a mismatch causes a **2.5-fold dosing error**. [FIT India 2e]",
        "Teach a family member as well as the patient and provide a written sliding record. [RSSDI 2022]",
        "Confirm the patient can afford both insulin and strips before designing an intensive regimen. [RSSDI 2022]",
      ],
    },
    {
      heading: "Monitoring, fasting and sick days",
      points: [
        "On basal insulin check **fasting capillary glucose daily during titration**, then 2-3 times a week. [ADA 2025]",
        "On premix alternate fasting and pre-dinner readings; on basal bolus check before each meal until stable. [ADA 2025]",
        "**HbA1c every 3 months** until at target, then 6-monthly. [ADA 2025]",
        "Do a **7-point profile** once before any major regimen change if strips are affordable. [ADA 2025]",
        "Ramadan: risk-stratify and obtain a fatwa-consistent exemption for very high-risk patients. [IDF-DAR 2021]",
        "Ramadan: shift the main insulin dose to **iftar** and cut the suhoor (pre-dawn) dose by about **half**. [IDF-DAR 2021]",
        "Break the fast if glucose falls **below 70 mg/dL** or rises **above 300 mg/dL**. [IDF-DAR 2021]",
        "Sick days: **never omit insulin**, and check glucose **4-hourly**. [ADA 2025]",
        "Sick days: check urine or blood ketones if glucose exceeds **250 mg/dL**, and maintain fluid and carbohydrate intake. [ADA 2025]",
        "Attend hospital for persistent vomiting, ketones or drowsiness. [ADA 2025]",
        "Weight gain of **2-4 kg** is expected in the first year on insulin. [ADA 2025]",
        "Pre-empt insulin weight gain with continued metformin, portion control and activity - not by under-dosing. [ADA 2025]",
      ],
    },
  ],
  tables: [
    {
      heading: "Insulin preparations available in India",
      columns: ["Insulin", "Onset", "Peak", "Duration", "Practical use"],
      rows: [
        ["Regular (soluble) human insulin", "30-60 min", "2-4 h", "6-8 h", "Give 30 minutes before the meal; used in DKA infusion and in-hospital"],
        ["Aspart / lispro / glulisine", "10-15 min", "1-2 h", "3-5 h", "Give 0-10 minutes before the meal; less late hypoglycaemia"],
        ["NPH (isophane)", "1-2 h", "4-8 h", "12-16 h", "Cheapest basal; bedtime dosing; nocturnal hypoglycaemia risk; must be resuspended"],
        ["Glargine U100 / detemir", "2-4 h", "Flat / minimal", "20-24 h", "Once daily at a fixed time; less nocturnal hypoglycaemia; costlier"],
        ["Degludec", "1-2 h", "Flat", "Over 42 h", "Very flexible timing; useful with erratic schedules; most expensive"],
        ["Premix 30/70 human insulin", "30-60 min", "Dual (2-4 h and 6-10 h)", "10-16 h", "Twice daily before breakfast and dinner; needs fixed meals"],
      ],
    },
    {
      heading: "Titration rules by regimen",
      columns: ["Regimen", "Starting dose", "Adjust against", "Step"],
      rows: [
        ["Basal (NPH or glargine) at bedtime", "10 units or 0.1-0.2 units/kg", "Fasting capillary glucose", "Increase 2 units every 3 days; reduce 4 units or 10-20% for hypoglycaemia"],
        ["Premix 30/70 twice daily", "0.3 units/kg split 2/3 morning, 1/3 evening", "Morning dose vs pre-dinner; evening dose vs fasting", "2 units every 3 days"],
        ["Basal plus", "Basal as above plus 4 units with largest meal", "2-hour postprandial of that meal", "1-2 units every 3 days"],
        ["Basal bolus", "0.4-0.5 units/kg/day, 50% basal and 50% split across meals", "Pre-meal and bedtime values", "10-20% per adjustment"],
      ],
    },
  ],
  redFlags: [
    "Recurrent or nocturnal hypoglycaemia, or hypoglycaemia unawareness, on any insulin regimen - reduce the dose immediately and relax the target rather than continuing titration.",
    "Fasting glucose above 250 mg/dL with vomiting, abdominal pain or Kussmaul breathing on insulin - check ketones and treat as diabetic ketoacidosis.",
    "A patient who has stopped insulin because of cost, fear or an intercurrent illness, with glucose above 300 mg/dL - this is the classic path to DKA and needs same-day restarting and admission if ketotic.",
    "Sudden improvement in control with unexplained hypoglycaemia in a long-standing diabetic - suspect new renal failure, adrenal insufficiency or weight loss from malignancy or tuberculosis.",
    "Injection-site abscess, cellulitis or a hard indurated lump with fever - stop injecting there and treat the infection; a diabetic injection-site abscess can seed deep infection.",
    "Insulin allergy with generalised urticaria, angioedema or wheeze after injection - stop and refer, as true systemic insulin allergy needs specialist desensitisation.",
  ],
  pearls: [
    "Start basal insulin at 10 units at bedtime and titrate by 2 units every 3 days against the fasting sugar - that single sentence answers most insulin initiation questions.",
    "Never increase the evening insulin for a high fasting sugar without at least one 3 a.m. reading, or you will make a Somogyi rebound worse.",
    "Regular human insulin goes in 30 minutes before food; rapid analogues go in at the plate. Getting this wrong causes both post-meal spikes and pre-meal hypoglycaemia.",
    "Over-basalisation: if the fasting sugar is at target, the dose is above 0.5 units/kg, and the HbA1c is still high, the answer is prandial insulin or a GLP-1 agonist - never more basal.",
    "Palpate the injection sites at every visit: lipohypertrophy is the invisible cause of unexplained swings, and switching to fresh skin without a dose reduction causes hypoglycaemia.",
    "Stop the sulfonylurea when you add prandial insulin, and halve it when you add basal - failing to do so is the commonest iatrogenic hypoglycaemia in Indian practice.",
    "Where there is no refrigerator, insulin keeps well in an earthen pot with wet sand; freezing destroys it, and a vial that has been frozen must be discarded.",
  ],
  theory: [
    {
      id: "endocrine-insulin-initiation-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "A 54-year-old man with type 2 diabetes of 11 years' duration has an HbA1c of 9.6% on metformin 1 g twice daily, glimepiride 4 mg daily and teneligliptin 20 mg daily. Discuss the indications for insulin therapy, how you will initiate and titrate it, and the patient education you will provide.",
      openingLines: [
        "Insulin is indicated in type 2 diabetes when the HbA1c remains above target despite optimally dosed oral agents, when hyperglycaemia is severe or catabolic at diagnosis, and in defined clinical situations such as pregnancy, sepsis, surgery, advanced renal or hepatic disease and acute vascular events.",
        "This patient has failed triple oral therapy with an HbA1c 2.6% above target, which reflects progressive beta-cell failure and is an indication for adding basal insulin rather than adding a fourth oral drug.",
      ],
      answer: [
        {
          heading: "1. Indications for insulin in type 2 diabetes",
          points: [
            "Failure of **two or three optimally dosed oral agents** to reach the individualised HbA1c target. [ADA 2025]",
            "At diagnosis when **HbA1c is above 10%** or **glucose is above 300 mg/dL**. [ADA 2025]",
            "At diagnosis when ketonuria is present, or there is weight loss with osmotic symptoms. [ADA 2025]",
            "Mandatory in pregnancy and lactation. [ADA 2025]",
            "Temporary indications: acute myocardial infarction or stroke, sepsis and surgery. [ADA 2025]",
            "Temporary indications: active tuberculosis on treatment, high-dose steroids and decompensated liver disease. [ADA 2025]",
            "Indicated when **eGFR is below 30 mL/min/1.73 m2**. [ADA 2025]",
            "Phenotypic indications: type 1 diabetes, LADA, fibrocalculous pancreatic diabetes and any low C-peptide. [RSSDI 2022]",
          ],
        },
        {
          heading: "2. Before starting - preparation",
          points: [
            "Confirm adherence to existing drugs and exclude an occult infection, including tuberculosis. [RSSDI 2022]",
            "Review diet, steroid use and thyroid status before blaming beta-cell failure. [RSSDI 2022]",
            "Assess vision, manual dexterity and literacy before choosing a device. [FIT India 2e]",
            "Assess availability of a refrigerator and the ability to afford insulin and strips. [RSSDI 2022]",
            "Identify a family member who can be trained to inject. [FIT India 2e]",
            "Address the fear of injections explicitly - demonstrate the pen needle and let the patient handle it. [FIT India 2e]",
            "Record weight, a baseline capillary profile and renal function. [ADA 2025]",
          ],
        },
        {
          heading: "3. Initiation",
          points: [
            "Start bedtime basal insulin: **NPH 10 units at bedtime**, or **0.1-0.2 units/kg**. [ADA 2025]",
            "For a 70 kg man that is about **10-14 units**. [ADA 2025]",
            "Continue metformin - it limits weight gain and the insulin dose needed. [ADA 2025]",
            "**Halve or stop glimepiride** to avoid hypoglycaemia. [ADA 2025]",
            "The DPP-4 inhibitor may be continued initially but is often stopped later. [RSSDI 2022]",
            "Use **glargine instead of NPH** for nocturnal hypoglycaemia, an erratic schedule, renal impairment or advanced age, if affordable. [RSSDI 2022]",
            "Teach fasting capillary self-monitoring and supply a written record chart. [ADA 2025]",
          ],
        },
        {
          heading: "4. Titration",
          points: [
            "Target fasting capillary glucose **80-130 mg/dL**. [ADA 2025]",
            "Increase the bedtime dose by **2 units every 3 days** while the fasting glucose stays above target. [ADA 2025]",
            "Reduce the dose by **4 units or 10-20%** for any glucose below **70 mg/dL** or for nocturnal symptoms. [ADA 2025]",
            "Recheck HbA1c at **3 months**. [ADA 2025]",
            "If fasting is at target but HbA1c is not, or the dose exceeds **0.5 units/kg**, add prandial insulin to the largest meal at **4 units**. [ADA 2025]",
            "A GLP-1 receptor agonist is the alternative at that point - never more basal. [ADA 2025]",
            "For a high fasting value get a **3 a.m. reading** to separate an inadequate dose from dawn phenomenon and Somogyi rebound. [RSSDI 2022]",
          ],
        },
        {
          heading: "5. Patient education",
          points: [
            "Technique: injection sites, **systematic rotation within a site**, and a **4-6 mm needle**. [FIT India 2e]",
            "Technique: no needle reuse, a **10-second count** before withdrawal, and palpation for lipohypertrophy. [FIT India 2e]",
            "Storage: **2-8 degrees Celsius** unopened, in-use vial at room temperature for **28 days**, never freeze. [WHO EML 2023]",
            "Use an earthen pot with wet sand where there is no refrigerator. [FIT India 2e]",
            "Hypoglycaemia: recognition, the **rule of 15**, and carrying glucose plus an identity card. [ADA 2025]",
            "Never omit a meal after taking insulin. [ADA 2025]",
            "Sick-day rules: never stop insulin, and monitor **4-hourly**. [ADA 2025]",
            "Check ketones if glucose exceeds **250 mg/dL**, and attend hospital for vomiting or drowsiness. [ADA 2025]",
            "Safe disposal of needles and lancets, plus a plan for driving, fasting and travel. [FIT India 2e]",
          ],
        },
      ],
      mustDraw: [
        "Table of insulin preparations with onset, peak and duration.",
        "Flow chart: oral agent failure - add bedtime basal 10 units - titrate 2 units every 3 days on fasting glucose - reassess at 3 months - fasting at target but HbA1c high - add prandial insulin or GLP-1 agonist.",
      ],
      markSplit: [
        { part: "Indications for insulin", marks: 2 },
        { part: "Choice of regimen and initiation dose", marks: 2 },
        { part: "Titration algorithm with targets", marks: 3 },
        { part: "Patient education including storage and hypoglycaemia", marks: 3 },
      ],
      keywords: ["basal insulin", "titration", "NPH", "glargine", "patient education"],
    },
    {
      id: "endocrine-insulin-initiation-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write short notes on the causes and evaluation of a persistently high morning fasting blood glucose in a patient on bedtime insulin.",
      openingLines: [
        "A persistently high fasting glucose in a patient on bedtime insulin has three physiological explanations - an inadequate basal dose, the dawn phenomenon and the Somogyi rebound - and several technical ones, and the three are distinguished by a 3 a.m. capillary glucose.",
        "Distinguishing them matters because the treatment of one is to increase the dose and of another is to reduce it.",
      ],
      answer: [
        {
          heading: "The three physiological causes",
          points: [
            "Inadequate basal dose: bedtime, **3 a.m.** and fasting values are all high, with no nocturnal symptoms. [RSSDI 2022]",
            "Treat an inadequate dose by increasing the bedtime dose by **2 units every 3 days**. [ADA 2025]",
            "Dawn phenomenon: the **3 a.m. value is normal** and glucose rises in the early morning under growth hormone and cortisol. [RSSDI 2022]",
            "Treat dawn phenomenon by moving NPH from dinner to bedtime, or switching to a long-acting analogue. [RSSDI 2022]",
            "Somogyi rebound: the **3 a.m. value is low**, with sweating, nightmares or a morning headache, then counter-regulatory rebound. [RSSDI 2022]",
            "Treat Somogyi by **reducing the evening dose** or adding a bedtime snack. [RSSDI 2022]",
          ],
        },
        {
          heading: "Technical and behavioural causes to exclude",
          points: [
            "A missed or mistimed dose. [FIT India 2e]",
            "**NPH not resuspended** before drawing up. [FIT India 2e]",
            "Injection into an area of **lipohypertrophy**, giving erratic absorption - palpate all sites. [FIT India 2e]",
            "Insulin that has been frozen, kept in direct sunlight, or is past **28 days** in use. [FIT India 2e]",
            "A late, large or high-carbohydrate dinner. [RSSDI 2022]",
            "An inaccurate glucometer never validated against a laboratory value. [RSSDI 2022]",
            "**U-40 insulin drawn into a U-100 syringe**, or the reverse. [FIT India 2e]",
          ],
        },
        {
          heading: "Evaluation",
          points: [
            "Obtain a **bedtime, 3 a.m. and fasting** capillary glucose on at least one night, ideally two. [RSSDI 2022]",
            "Review the record chart, injection sites, technique and insulin storage at the same visit. [FIT India 2e]",
            "Check for a precipitant: infection, steroid use or new-onset hypothyroidism. [RSSDI 2022]",
            "Where affordable, **continuous glucose monitoring for 7-14 days** resolves the question definitively. [ADA 2025]",
          ],
        },
      ],
      mustDraw: [
        "Three-line graph of overnight glucose showing the inadequate-dose, dawn and Somogyi patterns against time from 10 p.m. to 8 a.m.",
      ],
      markSplit: [
        { part: "Three physiological causes with distinguishing 3 a.m. values", marks: 3 },
        { part: "Technical and behavioural causes", marks: 1 },
        { part: "Evaluation plan", marks: 1 },
      ],
      keywords: ["dawn phenomenon", "Somogyi", "3 a.m. glucose", "lipohypertrophy", "basal dose"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-insulin-initiation-q1",
      stem: "A 60-year-old man weighing 68 kg with type 2 diabetes has HbA1c 9.4% on maximal metformin, glimepiride and sitagliptin. You decide to add basal insulin. What is the most appropriate starting regimen?",
      options: [
        "NPH insulin 10 units subcutaneously at bedtime, titrated against the fasting glucose",
        "Premixed 30/70 insulin 20 units before breakfast and 10 units before dinner",
        "Regular insulin 8 units before each of three meals",
        "NPH insulin 34 units at bedtime, calculated as 0.5 units/kg",
      ],
      answer: 0,
      explanation:
        "Basal insulin is started at 10 units, or 0.1-0.2 units/kg, at bedtime and titrated by 2 units every 3 days against the fasting capillary glucose - the safest and simplest initiation in general practice. Premix twice daily is a valid alternative regimen but is not the standard first step and carries more hypoglycaemia in someone still on a sulfonylurea. A prandial-only regimen ignores the fasting hyperglycaemia that basal insulin addresses. Starting at 0.5 units/kg is a full replacement dose appropriate to type 1 diabetes and would cause hypoglycaemia here.",
      difficulty: "easy",
    },
    {
      id: "endocrine-insulin-initiation-q2",
      stem: "A 48-year-old woman on NPH 26 units at bedtime reports morning headaches and night sweats. Her fasting glucose is consistently 190-210 mg/dL. A 3 a.m. capillary glucose is 54 mg/dL. What should you do?",
      options: [
        "Reduce the bedtime NPH dose and review in one week",
        "Increase the bedtime NPH by 4 units because the fasting value is high",
        "Add a pre-breakfast dose of rapid-acting insulin",
        "Add glimepiride 2 mg before breakfast",
      ],
      answer: 0,
      explanation:
        "Nocturnal hypoglycaemia at 3 a.m. with night sweats and morning headache followed by a high fasting value is the Somogyi rebound, and the correct action is to reduce the evening insulin, or add a bedtime snack, so that the counter-regulatory surge stops. Increasing the dose on the basis of the fasting reading alone deepens the nocturnal hypoglycaemia and is the classic trap. Adding pre-breakfast rapid-acting insulin does nothing for a problem occurring at 3 a.m. Adding a sulfonylurea adds further hypoglycaemia risk.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-insulin-initiation-q3",
      stem: "A 62-year-old man weighing 72 kg is on glargine 44 units at bedtime with metformin. His fasting glucose averages 108 mg/dL but HbA1c is 8.6% and post-lunch values are 260-290 mg/dL. What is the best next step?",
      options: [
        "Add rapid-acting insulin aspart 4 units before lunch and titrate against the post-lunch value",
        "Increase glargine to 50 units at bedtime",
        "Split glargine into two daily doses of 22 units",
        "Add glimepiride 2 mg before breakfast",
      ],
      answer: 0,
      explanation:
        "The fasting glucose is at target on a basal dose above 0.5 units/kg while the HbA1c remains high because of postprandial excursions - this is over-basalisation, and the correct step is basal plus, adding a prandial dose to the largest meal. Increasing glargine further will only cause hypoglycaemia because the fasting value is already at target. Splitting glargine does not address a post-lunch spike. Adding a sulfonylurea on top of a large insulin dose is a hypoglycaemia risk with a smaller postprandial effect than prandial insulin.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-insulin-initiation-q4",
      stem: "A patient on regular human insulin before meals reports feeling shaky and sweaty about 30-45 minutes after each injection, before he starts eating. Which instruction is most likely to correct this?",
      options: [
        "He should inject 30 minutes before eating and must not delay the meal after injecting",
        "He should inject immediately after finishing the meal",
        "He should switch the injection site from abdomen to thigh",
        "He should double the dose so the effect lasts through the meal",
      ],
      answer: 0,
      explanation:
        "Regular human insulin begins to act at 30-60 minutes, so it must be injected 30 minutes before the meal and the meal must then actually be eaten - a delayed meal after a correctly timed injection produces exactly these pre-meal hypoglycaemic symptoms. Injecting after the meal would cause a postprandial spike followed by late hypoglycaemia. Changing the site from abdomen to thigh slows absorption slightly but does not fix the timing error. Doubling the dose worsens the hypoglycaemia.",
      difficulty: "easy",
    },
    {
      id: "endocrine-insulin-initiation-q5",
      stem: "A 55-year-old woman on premixed 30/70 insulin has erratic glucose values despite unchanged doses and diet. Examination shows two soft rubbery swellings in the periumbilical region where she has injected for years. What is the most appropriate advice?",
      options: [
        "Move injections to unaffected skin and reduce the dose, monitoring closely for hypoglycaemia",
        "Continue injecting into the same swellings because absorption is faster there",
        "Increase the total daily dose by 20% to overcome erratic absorption",
        "Switch immediately to a basal bolus regimen",
      ],
      answer: 0,
      explanation:
        "These swellings are lipohypertrophy, which causes unpredictable and reduced insulin absorption; injections must move to normal skin, and because absorption then improves the dose usually needs reduction with close monitoring for hypoglycaemia. Continuing to inject into lipohypertrophy is why the control is erratic - absorption there is slower and variable, not faster. Increasing the dose while still injecting into abnormal tissue risks severe hypoglycaemia once the site is changed. Changing the whole regimen does not address the mechanical problem.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-insulin-initiation-q6",
      stem: "A 38-year-old man with type 2 diabetes on metformin and premixed insulin twice daily intends to fast during Ramadan. Which adjustment is most appropriate?",
      options: [
        "Give the usual full dose at iftar and about half the usual dose at suhoor, with instructions to break the fast if glucose falls below 70 mg/dL",
        "Give both usual doses unchanged at the same clock times as before",
        "Stop all insulin for the month and continue metformin alone",
        "Give the full dose at suhoor and omit the iftar dose",
      ],
      answer: 0,
      explanation:
        "During Ramadan the main insulin dose is moved to iftar, the evening meal that breaks the fast, and the pre-dawn suhoor dose is roughly halved because it must cover a long fasting daytime, with explicit permission to break the fast for glucose below 70 mg/dL or above 300 mg/dL. Keeping unchanged doses at the old clock times ignores that the meals have moved and causes daytime hypoglycaemia. Stopping insulin altogether risks marked hyperglycaemia and ketosis. Giving the full dose at suhoor is the exact reverse of the correct adjustment and is the most dangerous option.",
      difficulty: "hard",
    },
    {
      id: "endocrine-insulin-initiation-q7",
      stem: "A daily-wage labourer is prescribed insulin and has no refrigerator at home. What is the correct storage advice?",
      options: [
        "Keep the in-use vial at room temperature away from sunlight for up to 28 days, and store spares in an earthen pot with wet sand",
        "Keep all insulin in the freezer compartment of a neighbour's refrigerator",
        "Insulin cannot be prescribed safely without a refrigerator, so use oral agents only",
        "Keep the vial in a bowl of hot water to prevent bacterial contamination",
      ],
      answer: 0,
      explanation:
        "An in-use insulin vial is stable at room temperature for about 28 days provided it is kept out of direct sunlight and heat, and unopened supplies can be kept cool in an earthen pot with wet sand - the standard workaround taught in Indian rural practice. Freezing destroys insulin irreversibly and a frozen vial must be discarded. Refusing insulin to a patient who needs it because of a refrigerator is not acceptable when a practical alternative exists. Heat denatures insulin, so warming it is actively harmful.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "endocrine-insulin-initiation-c1",
      front: "Standard basal insulin starting dose and titration",
      back: "10 units at bedtime, or 0.1-0.2 units/kg; increase 2 units every 3 days against the fasting glucose; reduce 4 units or 10-20% for any hypoglycaemia.",
    },
    {
      id: "endocrine-insulin-initiation-c2",
      front: "Timing of regular insulin versus rapid analogues",
      back: "Regular human insulin 30 minutes before the meal; aspart, lispro and glulisine 0-10 minutes before the meal.",
    },
    {
      id: "endocrine-insulin-initiation-c3",
      front: "Definition of over-basalisation",
      back: "Basal dose above 0.5 units/kg or 40-60 units with a fasting glucose at target but HbA1c still high - add prandial insulin or a GLP-1 agonist, not more basal.",
    },
    {
      id: "endocrine-insulin-initiation-c4",
      front: "Distinguishing dawn phenomenon from Somogyi effect",
      back: "3 a.m. glucose normal and rising by morning is dawn phenomenon (increase or shift basal); 3 a.m. glucose low with rebound is Somogyi (reduce the evening dose).",
    },
    {
      id: "endocrine-insulin-initiation-c5",
      front: "What happens to oral agents when insulin is started?",
      back: "Continue metformin; continue SGLT2i or GLP-1 RA if already on them; halve or stop the sulfonylurea with basal insulin and stop it when prandial insulin is added.",
    },
    {
      id: "endocrine-insulin-initiation-c6",
      front: "Premix 30/70 titration rule",
      back: "Adjust the morning dose against the pre-dinner glucose and the evening dose against the next fasting glucose, by 2 units every 3 days.",
    },
    {
      id: "endocrine-insulin-initiation-c7",
      front: "Insulin storage rules",
      back: "Unopened 2-8 degrees Celsius, never frozen; in-use vial at room temperature for 28 days away from sunlight; earthen pot with wet sand where there is no refrigerator.",
    },
    {
      id: "endocrine-insulin-initiation-c8",
      front: "Lipohypertrophy - why it matters",
      back: "Reduces and randomises absorption, causing erratic control; moving to normal skin without reducing the dose precipitates hypoglycaemia. Palpate sites at every visit.",
    },
    {
      id: "endocrine-insulin-initiation-c9",
      front: "Basal bolus starting dose in type 1 diabetes",
      back: "0.4-0.5 units/kg/day, about 50% as basal once daily and 50% split as rapid-acting insulin across the three meals.",
    },
    {
      id: "endocrine-insulin-initiation-c10",
      front: "Ramadan insulin adjustment",
      back: "Main dose at iftar, roughly half the usual dose at suhoor; break the fast if glucose is below 70 mg/dL or above 300 mg/dL.",
    },
    {
      id: "endocrine-insulin-initiation-c11",
      front: "Indications to start insulin at the time of diagnosis",
      back: "HbA1c above 10%, glucose above 300 mg/dL, ketonuria, or catabolic weight loss with osmotic symptoms.",
    },
    {
      id: "endocrine-insulin-initiation-c12",
      front: "Needle length and technique for insulin pens",
      back: "4-6 mm needle, 90 degrees, no pinch needed for 4 mm, count 10 seconds before withdrawing, one needle per injection, rotate within a single site.",
    },
  ],
  references: [
    "American Diabetes Association, Standards of Care in Diabetes, 2025 - Pharmacologic Approaches to Glycemic Treatment",
    "RSSDI Clinical Practice Recommendations for the Management of Type 2 Diabetes Mellitus, 2022",
    "Forum for Injection Technique (FIT) India Recommendations, 2nd edition",
    "IDF-DAR International Alliance Practical Guidelines for Diabetes and Ramadan, 2021",
    "WHO Model List of Essential Medicines, 23rd list, 2023 (human insulin)",
  ],
});

topics.push({
  id: "endocrine-diabetes-complication-screening",
  title: "Screening for diabetic complications: eye, foot, kidney and nerve",
  oneLiner:
    "Every person with type 2 diabetes needs an annual dilated fundus examination, an annual urine albumin-creatinine ratio with eGFR, an annual foot examination with a 10 g monofilament and pedal pulses, and a symptom-directed neuropathy assessment, beginning at diagnosis in type 2 disease and 5 years after diagnosis in type 1.",
  frequency: "core",
  keywords: [
    "diabetic retinopathy",
    "NPDR",
    "PDR",
    "maculopathy",
    "laser photocoagulation",
    "anti-VEGF",
    "diabetic nephropathy",
    "albumin-creatinine ratio",
    "eGFR",
    "microalbuminuria",
    "diabetic foot",
    "monofilament",
    "Wagner grade",
    "peripheral neuropathy",
    "autonomic neuropathy",
    "pregabalin",
    "duloxetine",
    "finerenone",
  ],
  sections: [
    {
      heading: "When and what to screen",
      points: [
        "**Type 2 diabetes: screen for all complications from the day of diagnosis**, because the disease has typically been present unrecognised for 5-10 years and 15-20% already have retinopathy at diagnosis.",
        "**Type 1 diabetes: begin screening 5 years after diagnosis** (and from puberty in children), because the date of onset is usually known and hyperglycaemia was not present before it.",
        "The annual package: **dilated fundus examination, urine albumin-creatinine ratio with serum creatinine and eGFR, foot examination with a 10 g Semmes-Weinstein monofilament and palpation of pedal pulses, fasting lipids**, and blood pressure and weight at every visit.",
        "Screen in **pregnancy at the first visit and each trimester** for retinopathy, since it can accelerate rapidly with pregnancy and with rapid correction of a very high HbA1c.",
        "Record each screen in the NP-NCD card so the recall actually happens; an undocumented normal examination is, for programme purposes, a screen that never occurred.",
      ],
    },
    {
      heading: "Diabetic retinopathy",
      points: [
        "**Classification:** mild non-proliferative diabetic retinopathy (microaneurysms only), moderate NPDR, severe NPDR by the 4-2-1 rule, and proliferative diabetic retinopathy (new vessels at the disc or elsewhere, vitreous or preretinal haemorrhage).",
        "**The 4-2-1 rule for severe NPDR:** severe intraretinal haemorrhages and microaneurysms in **4** quadrants, or venous beading in **2** quadrants, or intraretinal microvascular abnormalities in **1** quadrant.",
        "**Diabetic macular oedema is the commonest cause of visual loss in type 2 diabetes** and can occur at any retinopathy stage - it is defined by retinal thickening or hard exudates within one disc diameter of the fovea, and is confirmed on optical coherence tomography.",
        "**Treatment:** pan-retinal photocoagulation for proliferative disease and for severe NPDR in selected patients; intravitreal anti-VEGF (ranibizumab, bevacizumab, aflibercept) for centre-involving macular oedema; vitrectomy for non-clearing vitreous haemorrhage or tractional retinal detachment.",
        "**Glycaemic and blood pressure control slow progression** (UKPDS, DCCT), but a very rapid fall in HbA1c can cause transient early worsening - lower a very high HbA1c over months, not weeks, and screen the eye before intensifying.",
        "Fenofibrate 145-160 mg OD has evidence (FIELD, ACCORD-Eye) for slowing retinopathy progression independent of lipid effect, and is cheap; it is an adjunct, not a substitute for laser.",
      ],
    },
    {
      heading: "Diabetic kidney disease",
      points: [
        "**Screen with a spot urine albumin-creatinine ratio (UACR) on an early-morning sample plus serum creatinine for eGFR, annually.** Moderately increased albuminuria (formerly microalbuminuria) is UACR 30-299 mg/g; severely increased (macroalbuminuria) is 300 mg/g or more.",
        "**Confirm any abnormal UACR with two of three samples over 3-6 months**, because fever, exercise, urinary infection, menstruation, heart failure and marked hyperglycaemia all raise albumin excretion transiently.",
        "**Treatment pillars:** an ACE inhibitor or ARB titrated to the maximum tolerated dose for anyone with albuminuria (ramipril 2.5-10 mg OD or telmisartan 40-80 mg OD), blood pressure below 130/80 mmHg, HbA1c to target, and an SGLT2 inhibitor which slows eGFR decline even at eGFR down to 20-25 mL/min/1.73 m2.",
        "**Finerenone 10-20 mg OD**, a non-steroidal mineralocorticoid receptor antagonist, adds cardio-renal benefit in albuminuric diabetic kidney disease on maximal RAS blockade (FIDELIO-DKD, FIGARO-DKD); monitor potassium.",
        "**Never combine an ACE inhibitor with an ARB**, and check creatinine and potassium 1-2 weeks after starting or up-titrating - a creatinine rise up to 30% is acceptable, more than 30% or potassium above 5.5 mmol/L means stop and investigate.",
        "**Think of a non-diabetic renal disease** if there is heavy proteinuria without retinopathy, active urinary sediment with red cell casts, a rapid fall in eGFR, proteinuria within 5 years of type 1 diagnosis, or systemic features - refer for nephrology assessment and possible biopsy.",
      ],
    },
    {
      heading: "The diabetic foot",
      points: [
        "**Annual foot examination:** inspect for deformity, callus, dryness, fissures, interdigital maceration and nail disease; palpate dorsalis pedis and posterior tibial pulses; test sensation with a 10 g monofilament at 4 sites per foot (plantar hallux, and the 1st, 3rd and 5th metatarsal heads), plus vibration with a 128 Hz tuning fork or a biothesiometer.",
        "**Loss of protective sensation** is inability to feel the 10 g monofilament at one or more sites; it identifies the foot that will ulcerate painlessly and mandates daily self-inspection and protective footwear.",
        "**Risk stratification (IWGDF):** very low risk (no neuropathy, no peripheral artery disease) screen annually; low risk (neuropathy or PAD) 6-12 monthly; moderate risk (neuropathy plus PAD, or neuropathy plus deformity) 3-6 monthly; high risk (previous ulcer or amputation, or end-stage renal disease) 1-3 monthly.",
        "**Wagner grading of ulcers:** grade 0 at-risk foot with no ulcer, 1 superficial ulcer, 2 deep ulcer to tendon or capsule, 3 deep with abscess or osteomyelitis, 4 localised gangrene of forefoot or heel, 5 gangrene of the whole foot.",
        "**Ulcer management:** debridement of callus and slough, offloading (total contact cast is the gold standard; removable walker or felted foam otherwise), moist wound dressing, infection control, and revascularisation assessment if pulses are absent or the ABI is below 0.9.",
        "**Probe-to-bone test:** a sterile blunt probe reaching bone in an infected ulcer strongly supports osteomyelitis and, with a plain X-ray, is enough to begin prolonged antibiotics and seek surgical opinion; MRI is the imaging of choice where available.",
        "**Patient education is the intervention with the best evidence:** never walk barefoot even indoors or in the temple, inspect the soles daily with a mirror, test bath water with the elbow, cut nails straight across, use closed protective footwear (MCR chappals or moulded insoles), and never use hot-water bottles or self-treat corns with chemical pastes.",
      ],
    },
    {
      heading: "Diabetic neuropathy",
      points: [
        "**Distal symmetric polyneuropathy** is the commonest form: length-dependent, glove-and-stocking, with numbness, burning, tingling and nocturnal exacerbation; it is a **clinical diagnosis after excluding other causes** - vitamin B12 deficiency (including metformin-induced), hypothyroidism, alcohol, uraemia, HIV, leprosy and drugs.",
        "**Leprosy remains an important Indian differential** for a mononeuropathy or asymmetric sensory loss: look for thickened ulnar, common peroneal or greater auricular nerves and hypopigmented anaesthetic patches - do not attribute every foot numbness to diabetes.",
        "**Painful neuropathy first-line drugs:** pregabalin 75 mg at night titrated to 75-150 mg BD, duloxetine 30 mg OD increased to 60 mg OD, or amitriptyline 10-25 mg at night (cheapest, but anticholinergic and best avoided in the elderly, in glaucoma and in prostatism). Gabapentin 300 mg at night titrated to 300-600 mg TDS is an alternative.",
        "**Autonomic neuropathy:** resting tachycardia and loss of heart-rate variability, postural hypotension, gastroparesis with early satiety and vomiting, diabetic diarrhoea alternating with constipation, erectile dysfunction, neurogenic bladder and hypoglycaemia unawareness. Cardiac autonomic neuropathy predicts silent ischaemia and sudden death.",
        "**Treat the treatable:** correct B12 with methylcobalamin 1500 mcg daily, correct hypothyroidism, stop alcohol, optimise glycaemia (which prevents progression but does not reverse established neuropathy), and use non-drug measures - foot care, sleep hygiene and exercise.",
        "Warn every neuropathic patient that **loss of pain is not recovery** - it is the point at which the foot becomes most dangerous.",
      ],
    },
    {
      heading: "Macrovascular and other screening",
      points: [
        "Every diabetic over 40, or with any additional risk factor, should be on a **statin - atorvastatin 10-20 mg or rosuvastatin 10 mg at night** for primary prevention, and atorvastatin 40-80 mg for secondary prevention.",
        "Screen for **peripheral artery disease** with pulses and, where claudication or an absent pulse is found, an ankle-brachial index; an ABI below 0.9 confirms it and above 1.3 suggests incompressible calcified vessels, common in diabetes and falsely reassuring.",
        "**Do not screen asymptomatic patients with routine stress testing**; screen instead by treating risk factors. Do investigate atypical breathlessness, unexplained fatigue or reduced effort tolerance, since myocardial infarction is often silent in autonomic neuropathy.",
        "Screen for **non-alcoholic fatty liver disease** with ALT and ultrasound in patients with obesity or metabolic syndrome, and for **obstructive sleep apnoea** by asking about snoring, witnessed apnoea and daytime sleepiness.",
        "Screen for **depression** (PHQ-9), which is twice as common in diabetes and is a strong independent predictor of poor adherence and worse outcomes, and for **periodontal disease** with an annual dental referral.",
        "Offer **influenza vaccine annually, pneumococcal vaccine, and hepatitis B vaccination** to unvaccinated adults with diabetes, and screen for tuberculosis symptoms at every visit under NTEP.",
      ],
    },
  ],
  tables: [
    {
      heading: "The annual complication screening package",
      columns: ["Complication", "Test", "Frequency", "Action on an abnormal result"],
      rows: [
        ["Retinopathy", "Dilated fundus examination or fundus photography", "From diagnosis in T2DM, 5 years after in T1DM; annually", "Any retinopathy - refer to ophthalmology; PDR or macular oedema - urgent referral"],
        ["Nephropathy", "Spot urine ACR plus serum creatinine and eGFR", "Annually; 6-monthly if abnormal", "Confirm on 2 of 3 samples; start ACEi/ARB and SGLT2 inhibitor"],
        ["Neuropathy", "10 g monofilament, 128 Hz tuning fork, ankle reflexes, symptom enquiry", "Annually from diagnosis", "Loss of protective sensation - foot care education and protective footwear"],
        ["Peripheral artery disease", "Pedal pulses; ABI if symptoms or absent pulse", "Annually", "ABI below 0.9 - vascular referral; consider ulcer risk"],
        ["Dyslipidaemia", "Fasting lipid profile", "Annually, or 3 months after a change of statin", "Statin to LDL target by risk category"],
        ["Cardiac", "Blood pressure at every visit, ECG at diagnosis and if symptomatic", "As above", "Treat BP to below 130/80 mmHg where tolerated"],
      ],
    },
    {
      heading: "Grading diabetic retinopathy and what it triggers",
      columns: ["Stage", "Findings", "Referral timing"],
      rows: [
        ["No retinopathy", "Normal fundus", "Rescreen in 1 year (2 years if well controlled, per some programmes)"],
        ["Mild NPDR", "Microaneurysms only", "Ophthalmology review in 6-12 months"],
        ["Moderate NPDR", "More than microaneurysms but less than severe", "Ophthalmology review in 3-6 months"],
        ["Severe NPDR", "4-2-1 rule met", "Refer within weeks; consider pan-retinal photocoagulation"],
        ["PDR", "Neovascularisation, vitreous or preretinal haemorrhage", "Urgent referral - pan-retinal photocoagulation, anti-VEGF or vitrectomy"],
        ["Diabetic macular oedema", "Thickening or exudate within 1 disc diameter of fovea", "Urgent referral - OCT and intravitreal anti-VEGF"],
      ],
    },
    {
      heading: "Wagner grading of the diabetic foot ulcer",
      columns: ["Grade", "Description", "Management emphasis"],
      rows: [
        ["0", "Intact skin, at-risk foot with deformity or callus", "Education, protective footwear, callus removal"],
        ["1", "Superficial ulcer, full-thickness skin only", "Offloading, debridement, moist dressing"],
        ["2", "Deep ulcer to tendon, capsule or bone without osteomyelitis", "As above plus antibiotics if infected; imaging"],
        ["3", "Deep ulcer with abscess or osteomyelitis", "Admission, surgical drainage, prolonged antibiotics"],
        ["4", "Localised gangrene of forefoot or heel", "Vascular assessment, limited amputation"],
        ["5", "Gangrene of the entire foot", "Major amputation"],
      ],
    },
  ],
  redFlags: [
    "Sudden painless loss of vision or a shower of new floaters in a diabetic - vitreous haemorrhage from proliferative retinopathy; same-day ophthalmology.",
    "Foot ulcer with surrounding cellulitis, crepitus, foul discharge, exposed bone or systemic upset - admit for surgical debridement and intravenous antibiotics.",
    "A hot, red, swollen, deformed but painless foot with intact skin in a neuropathic patient - acute Charcot neuroarthropathy; immobilise and refer immediately, do not treat as cellulitis alone.",
    "Rapidly rising creatinine, heavy proteinuria without retinopathy, or an active urinary sediment - suspect non-diabetic renal disease and refer to nephrology.",
    "Rest pain, absent pulses, dependent rubor or gangrenous toes - critical limb ischaemia; urgent vascular referral for revascularisation.",
    "Persistent vomiting with early satiety and unexplained wide glucose swings - gastroparesis with a risk of dehydration and ketosis; needs admission if unable to keep fluids down.",
    "Postural drop with syncope, resting tachycardia and hypoglycaemia unawareness - advanced autonomic neuropathy carrying a risk of sudden cardiac death; relax targets and refer.",
  ],
  pearls: [
    "In type 2 diabetes complication screening starts on the day of diagnosis; in type 1 it starts 5 years later. Getting this the wrong way round is a favourite examiner trap.",
    "Diabetic macular oedema, not proliferative disease, is the commonest cause of blindness in type 2 diabetes, and it can occur at any retinopathy stage.",
    "Never diagnose diabetic nephropathy on a single albumin-creatinine ratio - fever, exercise, infection and heart failure all raise it; confirm on two of three samples.",
    "Proteinuria without retinopathy in a long-standing diabetic should make you doubt the diagnosis of diabetic nephropathy and think of another glomerular disease.",
    "A painless hot swollen foot in a neuropathic diabetic is Charcot until proved otherwise - immobilise it, because walking on it destroys the arch within weeks.",
    "The 10 g monofilament is the cheapest instrument in the clinic and predicts amputation better than any blood test - use it at four plantar sites on each foot.",
    "Lowering a very high HbA1c too fast can transiently worsen retinopathy; examine the eye before you intensify, and lower over months.",
    "Not every numb diabetic foot is diabetic neuropathy - check B12, thyroid, alcohol history and thickened nerves for leprosy before you accept the easy diagnosis.",
  ],
  theory: [
    {
      id: "endocrine-diabetes-complication-screening-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Describe the screening, prevention and management of the diabetic foot in family practice, including risk stratification and patient education.",
      openingLines: [
        "The diabetic foot is the combination of neuropathy, peripheral artery disease and immunosuppression that leads to ulceration, infection and amputation, and it accounts for the majority of non-traumatic lower-limb amputations in India.",
        "Up to 85% of these amputations are preceded by a foot ulcer that was preventable, which makes systematic annual screening and education the highest-value intervention in a family practice diabetes clinic.",
      ],
      answer: [
        {
          heading: "1. Pathogenesis",
          points: [
            "Peripheral sensory neuropathy causes loss of protective sensation, so minor trauma goes unnoticed.",
            "Motor neuropathy causes small-muscle wasting, clawing of the toes and abnormal pressure loading over the metatarsal heads.",
            "Autonomic neuropathy causes anhidrosis with dry, fissured skin and arteriovenous shunting.",
            "Peripheral artery disease impairs healing, and hyperglycaemia impairs neutrophil function, so infection spreads rapidly.",
          ],
        },
        {
          heading: "2. Screening examination",
          points: [
            "Inspection: deformity, clawing, callus, dryness, fissures, interdigital maceration, nail disease, and previous ulcer or amputation scars.",
            "Vascular: palpate dorsalis pedis and posterior tibial pulses; measure ankle-brachial index if a pulse is absent or claudication is present (abnormal below 0.9, unreliable above 1.3).",
            "Neurological: 10 g Semmes-Weinstein monofilament at four plantar sites per foot, 128 Hz tuning fork vibration at the hallux, ankle jerks and pinprick.",
            "Footwear inspection at every visit - look inside the shoe for stones, nails and worn insoles.",
          ],
        },
        {
          heading: "3. Risk stratification and screening interval (IWGDF)",
          points: [
            "Very low risk - no neuropathy, no peripheral artery disease: screen annually.",
            "Low risk - neuropathy or peripheral artery disease alone: screen every 6-12 months.",
            "Moderate risk - neuropathy with peripheral artery disease, or neuropathy with foot deformity: screen every 3-6 months.",
            "High risk - previous ulcer or amputation, or end-stage renal disease: screen every 1-3 months and involve a podiatry or surgical service.",
          ],
        },
        {
          heading: "4. Management of an established ulcer",
          points: [
            "Grade the ulcer (Wagner or IWGDF/IDSA) and assess for infection, ischaemia and osteomyelitis, including a probe-to-bone test and a plain X-ray.",
            "Offloading is the single most important measure: total contact cast where available, otherwise a removable walker, felted foam or crutches.",
            "Sharp debridement of callus and non-viable tissue; moist wound dressing; do not use antiseptic soaks that harm granulation tissue.",
            "Infection: mild infection - oral amoxicillin-clavulanate 625 mg TDS or cefalexin for 1-2 weeks; moderate to severe - admit for intravenous piperacillin-tazobactam or ceftriaxone with clindamycin, guided by deep tissue culture; osteomyelitis needs 4-6 weeks of therapy with surgical opinion.",
            "Glycaemic control with insulin during infection, adequate nutrition and protein, and correction of anaemia.",
            "Vascular referral for revascularisation if the ABI is below 0.9 or the ulcer fails to heal in 4-6 weeks.",
          ],
        },
        {
          heading: "5. Patient education - the prescription that prevents amputation",
          points: [
            "Never walk barefoot, including indoors, on hot floors and in places of worship.",
            "Inspect the feet and the soles daily, using a mirror or the help of a family member.",
            "Wash daily in lukewarm water tested with the elbow, dry between the toes, and apply emollient to the soles but not between the toes.",
            "Cut nails straight across; do not use blades, corn caps or chemical paring; treat corns and calluses professionally.",
            "Wear well-fitting closed footwear or MCR/moulded microcellular rubber chappals; buy footwear in the evening; check inside the shoe before wearing.",
            "Report any blister, crack, colour change, swelling or discharge the same day, and stop smoking.",
          ],
        },
      ],
      mustDraw: [
        "Diagram of the foot marking the four monofilament testing sites: plantar surface of the hallux and the 1st, 3rd and 5th metatarsal heads.",
        "Table of IWGDF risk categories against screening interval, or the Wagner grading table.",
      ],
      markSplit: [
        { part: "Pathogenesis", marks: 2 },
        { part: "Screening examination with instruments", marks: 2 },
        { part: "Risk stratification and screening interval", marks: 2 },
        { part: "Ulcer management including offloading and antibiotics", marks: 2 },
        { part: "Patient education", marks: 2 },
      ],
      keywords: ["diabetic foot", "monofilament", "Wagner", "offloading", "IWGDF", "amputation prevention"],
    },
    {
      id: "endocrine-diabetes-complication-screening-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write short notes on screening and management of diabetic nephropathy in primary care.",
      openingLines: [
        "Diabetic kidney disease is persistently increased urinary albumin excretion, a declining eGFR, or both, in a person with diabetes and no alternative cause, and it is the commonest cause of end-stage renal disease in India.",
        "It is detected by an annual spot urine albumin-creatinine ratio with a serum creatinine and eGFR, beginning at diagnosis in type 2 diabetes and 5 years after diagnosis in type 1.",
      ],
      answer: [
        {
          heading: "Screening",
          points: [
            "Spot early-morning urine albumin-creatinine ratio annually: 30-299 mg/g is moderately increased albuminuria, 300 mg/g or more is severely increased.",
            "Serum creatinine with eGFR by the CKD-EPI equation at the same visit; stage by the KDIGO G and A grid.",
            "Confirm an abnormal result on two of three samples over 3-6 months, after excluding fever, exercise, urinary infection, menstruation, heart failure and marked hyperglycaemia.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Blood pressure below 130/80 mmHg using an ACE inhibitor or ARB titrated to the maximum tolerated dose - ramipril 2.5-10 mg OD or telmisartan 40-80 mg OD - for anyone with albuminuria.",
            "Add an SGLT2 inhibitor (dapagliflozin 10 mg OD or empagliflozin 10 mg OD) which slows eGFR decline and reduces progression, and can be continued to an eGFR of about 20-25 mL/min/1.73 m2.",
            "Consider finerenone 10-20 mg OD in albuminuric disease on maximal RAS blockade, monitoring potassium.",
            "Glycaemic control to the individualised HbA1c target; adjust metformin by eGFR and stop it below 30.",
            "Dietary protein about 0.8 g/kg/day, salt under 5 g/day, avoid NSAIDs and nephrotoxins, treat anaemia and acidosis, and give a statin.",
            "Check creatinine and potassium 1-2 weeks after starting or increasing an ACEi or ARB; accept a creatinine rise up to 30%.",
          ],
        },
        {
          heading: "When to refer to nephrology",
          points: [
            "eGFR below 30 mL/min/1.73 m2, or a rapid decline of more than 5 mL/min/1.73 m2 per year.",
            "Heavy proteinuria without retinopathy, haematuria with red cell casts, or proteinuria within 5 years of type 1 diagnosis - suspect non-diabetic renal disease.",
            "Refractory hypertension, refractory hyperkalaemia, or uncertainty about the diagnosis.",
          ],
        },
      ],
      mustDraw: ["KDIGO heat-map grid of eGFR category (G1-G5) against albuminuria category (A1-A3), with the referral zone marked."],
      markSplit: [
        { part: "Definition and screening test with cut-offs", marks: 2 },
        { part: "Management including ACEi/ARB and SGLT2 inhibitor", marks: 2 },
        { part: "Referral criteria and clues to non-diabetic renal disease", marks: 1 },
      ],
      keywords: ["albumin-creatinine ratio", "microalbuminuria", "SGLT2 inhibitor", "finerenone", "KDIGO"],
    },
    {
      id: "endocrine-diabetes-complication-screening-t3",
      paper: "II",
      kind: "chart-flow",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Draw and explain a flow chart for diabetic retinopathy screening and referral in a primary care setting.",
      openingLines: [
        "Diabetic retinopathy is a microvascular complication affecting the retina, is asymptomatic until advanced, and is the leading cause of preventable blindness in working-age adults, which is why screening is by examination and not by symptoms.",
        "Screening begins at diagnosis in type 2 diabetes and 5 years after diagnosis in type 1, is repeated annually, and is performed at every trimester in pregnancy.",
      ],
      answer: [
        {
          heading: "The screening step",
          points: [
            "Visual acuity with a Snellen chart in each eye, with pinhole correction.",
            "Dilate with tropicamide 0.8% with phenylephrine 5% (after excluding a shallow anterior chamber) and examine with a direct ophthalmoscope or a 90 D lens on a slit lamp; non-mydriatic fundus photography with tele-reporting is the scalable option under NPCBVI.",
            "Grade as no retinopathy, mild, moderate or severe NPDR, proliferative disease, or diabetic macular oedema.",
          ],
        },
        {
          heading: "The referral rules",
          points: [
            "No retinopathy: rescreen in 12 months.",
            "Mild NPDR: ophthalmology review in 6-12 months and intensify glycaemic, blood pressure and lipid control.",
            "Moderate NPDR: ophthalmology review in 3-6 months.",
            "Severe NPDR: refer within weeks for consideration of pan-retinal photocoagulation.",
            "Proliferative retinopathy, vitreous haemorrhage, or any macular oedema or unexplained visual loss: urgent, same-week or same-day referral.",
          ],
        },
        {
          heading: "What the family physician controls",
          points: [
            "HbA1c to the individualised target, lowered gradually to avoid early worsening.",
            "Blood pressure below 130/80 mmHg and a statin for lipids.",
            "Fenofibrate 145-160 mg OD as an adjunct with evidence for slowing progression.",
            "Smoking cessation, anaemia correction, and counselling that good vision does not mean a normal retina.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart: person with diabetes - screen at diagnosis (T2DM) or 5 years (T1DM) - visual acuity and dilated fundus - grade - four referral boxes by grade - annual rescreen loop.",
      ],
      markSplit: [
        { part: "Timing and method of screening", marks: 2 },
        { part: "Grading with the 4-2-1 rule", marks: 1 },
        { part: "Referral rules by grade", marks: 2 },
      ],
      keywords: ["retinopathy", "4-2-1 rule", "macular oedema", "pan-retinal photocoagulation", "NPCBVI"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-diabetes-complication-screening-q1",
      stem: "A 52-year-old man is newly diagnosed with type 2 diabetes today on the basis of two fasting glucose values of 158 and 164 mg/dL. When should he have his first dilated fundus examination?",
      options: [
        "Today or within the next few weeks, at diagnosis",
        "After 5 years, as in type 1 diabetes",
        "Only if he reports blurred vision",
        "After 3 years, once HbA1c has stabilised",
      ],
      answer: 0,
      explanation:
        "Type 2 diabetes is typically present for 5-10 years before it is diagnosed, so retinopathy may already exist and screening starts at diagnosis - about 15-20% have some retinopathy at that point. The 5-year rule applies to type 1 diabetes, where the date of onset is known. Waiting for symptoms is the central error, since sight-threatening retinopathy is asymptomatic until the macula or vitreous is involved. Delaying 3 years allows treatable disease to progress.",
      difficulty: "easy",
    },
    {
      id: "endocrine-diabetes-complication-screening-q2",
      stem: "A 58-year-old diabetic woman has a urine albumin-creatinine ratio of 92 mg/g. She had fever and dysuria for 3 days before the sample was collected. What is the most appropriate next step?",
      options: [
        "Treat the urinary infection and repeat the albumin-creatinine ratio after recovery",
        "Diagnose diabetic nephropathy and start ramipril today",
        "Order a 24-hour urine protein estimation immediately",
        "Refer directly to nephrology for a renal biopsy",
      ],
      answer: 0,
      explanation:
        "Urinary tract infection, fever, exercise, menstruation, heart failure and marked hyperglycaemia all transiently raise albumin excretion, so an abnormal ratio measured in these circumstances must be repeated after the confounder resolves and confirmed on two of three samples. Starting an ACE inhibitor on an unconfirmed result labels the patient with nephropathy on a spurious value. A 24-hour collection adds cost and inconvenience without removing the confounder. Biopsy is reserved for suspected non-diabetic renal disease, not for a first abnormal screening test.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetes-complication-screening-q3",
      stem: "A 60-year-old man with 15 years of diabetes and known neuropathy presents with a warm, swollen, erythematous right foot with a collapsed medial arch. He has no ulcer, no fever, a normal white cell count and normal CRP, and the foot is not painful. Pedal pulses are bounding. What is the most likely diagnosis?",
      options: [
        "Acute Charcot neuroarthropathy",
        "Cellulitis of the foot",
        "Deep vein thrombosis",
        "Acute gout of the midfoot",
      ],
      answer: 0,
      explanation:
        "A hot, swollen, deformed but relatively painless foot with intact skin, bounding pulses and normal inflammatory markers in a long-standing neuropathic diabetic is acute Charcot neuroarthropathy, and it requires immediate immobilisation and offloading because continued weight-bearing destroys the arch. Cellulitis would have a portal of entry, fever and raised inflammatory markers. Deep vein thrombosis causes calf rather than midfoot swelling with arch collapse. Gout is intensely painful, which this is not, and does not cause a collapsed arch.",
      difficulty: "hard",
    },
    {
      id: "endocrine-diabetes-complication-screening-q4",
      stem: "During fundus examination of a diabetic patient you find severe intraretinal haemorrhages in all four quadrants and venous beading in two quadrants, but no new vessels. How should this be classified and managed?",
      options: [
        "Severe non-proliferative diabetic retinopathy - refer within weeks for consideration of pan-retinal photocoagulation",
        "Proliferative diabetic retinopathy - immediate vitrectomy",
        "Moderate non-proliferative retinopathy - review in 12 months",
        "Diabetic macular oedema - intravitreal anti-VEGF",
      ],
      answer: 0,
      explanation:
        "The 4-2-1 rule defines severe NPDR: haemorrhages in 4 quadrants, or venous beading in 2 quadrants, or intraretinal microvascular abnormalities in 1 quadrant - two of these criteria are met, and the absence of new vessels excludes proliferative disease, so the patient needs prompt referral where pan-retinal photocoagulation may be offered. Vitrectomy is for non-clearing vitreous haemorrhage or tractional detachment. Calling it moderate and waiting a year risks progression to proliferative disease. Macular oedema is defined by thickening or exudate near the fovea, which is not described.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetes-complication-screening-q5",
      stem: "A 55-year-old man with type 2 diabetes for 6 years has burning feet at night. Haemoglobin is 11.8 g/dL with an MCV of 106 fL. He has taken metformin 1 g twice daily for 5 years. Which investigation should be done before attributing his symptoms to diabetic neuropathy?",
      options: [
        "Serum vitamin B12",
        "Nerve conduction studies",
        "MRI of the lumbar spine",
        "Serum uric acid",
      ],
      answer: 0,
      explanation:
        "Metformin causes vitamin B12 malabsorption, and a macrocytosis in a patient on long-term metformin with a peripheral neuropathy makes B12 deficiency the priority test; it is cheap, and treatment with methylcobalamin can reverse symptoms that would otherwise be dismissed as irreversible diabetic neuropathy. Nerve conduction studies confirm the presence of a neuropathy but do not identify its cause and are unnecessary in a typical symmetrical picture. Lumbar MRI investigates radiculopathy, which is not suggested by symmetrical distal burning. Uric acid has no role in this presentation.",
      difficulty: "easy",
    },
    {
      id: "endocrine-diabetes-complication-screening-q6",
      stem: "A 63-year-old diabetic with painful peripheral neuropathy also has glaucoma and benign prostatic hyperplasia. Which is the most appropriate first-line drug for his neuropathic pain?",
      options: [
        "Pregabalin 75 mg at night, titrated as tolerated",
        "Amitriptyline 25 mg at night",
        "Diclofenac 50 mg twice daily",
        "Tramadol 50 mg three times daily",
      ],
      answer: 0,
      explanation:
        "Pregabalin is a first-line agent for painful diabetic neuropathy and lacks the anticholinergic effects that make amitriptyline hazardous in narrow-angle glaucoma and in prostatic hypertrophy, where it can precipitate acute angle closure and urinary retention. Amitriptyline is otherwise effective and cheap but is contraindicated by his comorbidities. NSAIDs are ineffective for neuropathic pain and risk renal injury in a diabetic. Tramadol is a second- or third-line option with dependence and confusion risk in an older adult.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetes-complication-screening-q7",
      stem: "A 45-year-old man with type 1 diabetes of 3 years' duration has a urine albumin-creatinine ratio of 1400 mg/g, blood pressure 150/94 mmHg, red cell casts on urine microscopy, and a completely normal dilated fundus examination. What is the most appropriate interpretation?",
      options: [
        "The picture suggests a non-diabetic glomerular disease and warrants nephrology referral for biopsy",
        "This is classic diabetic nephropathy and needs only an ACE inhibitor and tighter control",
        "The fundus examination must be repeated because retinopathy always accompanies nephropathy",
        "The albuminuria reflects the hypertension alone and will resolve once blood pressure is controlled",
      ],
      answer: 0,
      explanation:
        "Heavy proteinuria within 5 years of a type 1 diagnosis, an active sediment with red cell casts, and a normal retina together point strongly away from diabetic nephropathy, in which retinopathy is nearly always present when overt proteinuria develops in type 1 disease; this needs nephrology referral and probable biopsy. Treating it as diabetic nephropathy would miss a treatable glomerulonephritis. Repeating the fundus is reasonable but does not explain the casts. Hypertension alone rarely produces this degree of proteinuria with an active sediment.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "endocrine-diabetes-complication-screening-c1",
      front: "When does complication screening begin in type 1 and type 2 diabetes?",
      back: "Type 2: at diagnosis. Type 1: 5 years after diagnosis (and from puberty in children).",
    },
    {
      id: "endocrine-diabetes-complication-screening-c2",
      front: "The 4-2-1 rule",
      back: "Severe NPDR: haemorrhages in 4 quadrants, or venous beading in 2 quadrants, or IRMA in 1 quadrant.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c3",
      front: "Commonest cause of visual loss in type 2 diabetes",
      back: "Diabetic macular oedema - retinal thickening or hard exudates within one disc diameter of the fovea; treated with intravitreal anti-VEGF.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c4",
      front: "Albuminuria categories on spot urine ACR",
      back: "A1 under 30 mg/g; A2 (moderately increased) 30-299 mg/g; A3 (severely increased) 300 mg/g or more. Confirm on 2 of 3 samples.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c5",
      front: "Four drug pillars of diabetic kidney disease",
      back: "ACE inhibitor or ARB at maximum tolerated dose, SGLT2 inhibitor, glycaemic control, and finerenone in persistent albuminuria; plus a statin and BP below 130/80 mmHg.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c6",
      front: "Where are the four monofilament test sites on each foot?",
      back: "Plantar surface of the great toe, and the 1st, 3rd and 5th metatarsal heads. Inability to feel the 10 g filament at any site is loss of protective sensation.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c7",
      front: "IWGDF foot risk categories and screening interval",
      back: "Very low - annual; low (neuropathy or PAD) - 6-12 monthly; moderate (both, or with deformity) - 3-6 monthly; high (previous ulcer, amputation or ESRD) - 1-3 monthly.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c8",
      front: "Wagner grade 3 diabetic foot ulcer",
      back: "Deep ulcer with abscess or osteomyelitis - needs admission, surgical drainage and prolonged antibiotics.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c9",
      front: "Clues that renal disease in a diabetic is NOT diabetic nephropathy",
      back: "Heavy proteinuria without retinopathy, active sediment with red cell casts, rapid eGFR decline, proteinuria within 5 years of type 1 onset, or systemic features.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c10",
      front: "First-line drugs for painful diabetic neuropathy",
      back: "Pregabalin 75-150 mg BD, duloxetine 30-60 mg OD, or amitriptyline 10-25 mg at night (avoid in the elderly, glaucoma and prostatism). Gabapentin is an alternative.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c11",
      front: "Ankle-brachial index interpretation in diabetes",
      back: "Below 0.9 confirms peripheral artery disease; above 1.3 indicates incompressible calcified vessels and is falsely reassuring.",
    },
    {
      id: "endocrine-diabetes-complication-screening-c12",
      front: "Acute Charcot foot - the presentation and the first action",
      back: "Hot, swollen, deformed, relatively painless foot with intact skin and normal inflammatory markers in a neuropathic diabetic; immobilise and offload immediately, then refer.",
    },
  ],
  references: [
    "American Diabetes Association, Standards of Care in Diabetes, 2025 - Retinopathy, Neuropathy and Foot Care; Chronic Kidney Disease",
    "KDIGO Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease, 2022",
    "IWGDF Guidelines on the Prevention and Management of Diabetes-Related Foot Disease, 2023",
    "National Programme for Control of Blindness and Visual Impairment (NPCBVI) guidelines for diabetic retinopathy screening, MoHFW",
    "RSSDI Clinical Practice Recommendations for the Management of Type 2 Diabetes Mellitus, 2022",
  ],
});

topics.push({
  id: "endocrine-hypoglycaemia",
  title: "Hypoglycaemia: recognition, treatment and prevention",
  oneLiner:
    "Hypoglycaemia in a treated diabetic is a plasma glucose below 70 mg/dL (level 1 alert), below 54 mg/dL (level 2, clinically significant) or any episode with altered mental or physical function requiring another person's help (level 3, severe), and it is treated by the rule of 15 when the patient can swallow and by intravenous 25% dextrose or intramuscular glucagon when the patient cannot.",
  frequency: "core",
  keywords: [
    "hypoglycaemia",
    "rule of 15",
    "Whipple triad",
    "glucagon",
    "25% dextrose",
    "sulfonylurea overdose",
    "octreotide",
    "hypoglycaemia unawareness",
    "neuroglycopenia",
    "adrenergic symptoms",
    "insulinoma",
    "glibenclamide",
  ],
  sections: [
    {
      heading: "Definitions and thresholds",
      points: [
        "**Level 1 (alert value):** plasma glucose below 70 mg/dL and 54 mg/dL or above - not necessarily symptomatic, but it demands treatment and a review of the regimen.",
        "**Level 2 (clinically significant):** plasma glucose below 54 mg/dL, the threshold at which neuroglycopenic symptoms and counter-regulatory failure begin.",
        "**Level 3 (severe):** any episode with altered mental or physical status requiring the assistance of another person, regardless of the glucose value recorded.",
        "**Whipple triad** confirms true hypoglycaemia in a person without diabetes: symptoms consistent with hypoglycaemia, a documented low plasma glucose at the time, and relief of symptoms when glucose is raised.",
        "**Symptom sequence:** autonomic or adrenergic symptoms first (sweating, tremor, palpitation, hunger, anxiety) at about 60-70 mg/dL, then neuroglycopenic symptoms (confusion, slurred speech, incoordination, odd behaviour, focal deficit, seizure, coma) below about 50 mg/dL.",
        "In the elderly, hypoglycaemia often presents **only as confusion, a fall, a stroke-like deficit or a behavioural change** - always check a capillary glucose in any older patient with altered consciousness.",
      ],
    },
    {
      heading: "Who is at risk, and why",
      points: [
        "**Drugs:** insulin and sulfonylureas are the only common diabetic drugs that cause hypoglycaemia on their own; **glibenclamide is the worst offender** because of its renally cleared active metabolites, and it should be avoided in the elderly and in CKD.",
        "**Missed or delayed meals, fasting for religious observance or investigations, unusual exertion, and alcohol** (which blocks gluconeogenesis, characteristically causing hypoglycaemia several hours later and often overnight).",
        "**Renal or hepatic impairment** prolongs insulin and sulfonylurea action; a falling insulin requirement in a long-standing diabetic is a clue to new renal failure.",
        "**Endocrine causes of a falling requirement:** untreated hypothyroidism, and adrenal insufficiency - remember that a diabetic whose insulin needs suddenly drop may have developed Addison disease (autoimmune polyglandular syndrome).",
        "**Weight loss from malignancy, tuberculosis or depression**, and gastroparesis with mismatched insulin and food absorption.",
        "**Hypoglycaemia unawareness** develops after repeated episodes blunt the counter-regulatory response; it is partly reversible by scrupulously avoiding hypoglycaemia for 2-3 weeks while relaxing targets.",
      ],
    },
    {
      heading: "Treatment - conscious patient",
      points: [
        "**Rule of 15:** give 15-20 g of fast-acting carbohydrate, recheck the capillary glucose in 15 minutes, and repeat if it remains below 70 mg/dL; then give a meal or a complex-carbohydrate snack once recovered.",
        "**15 g equivalents:** 3-4 teaspoons of glucose powder or sugar in water, 3-4 glucose tablets, 150 mL of fruit juice or a regular (non-diet) soft drink, or 1 tablespoon of honey. Chocolate, milk and biscuits are too slow because of their fat content.",
        "**If the patient is on acarbose or voglibose**, the hypoglycaemia must be treated with **glucose (dextrose) and not with sucrose**, because the alpha-glucosidase inhibitor blocks the breakdown of table sugar.",
        "Do not over-treat: giving a full meal or repeated sugar leads to rebound hyperglycaemia and a cycle of swings. Fifteen grams, recheck, repeat if needed.",
        "After recovery, find the precipitant - a missed meal, a dose error, new renal impairment, alcohol, exertion, or a wrong syringe - and change the regimen, not just the advice.",
      ],
    },
    {
      heading: "Treatment - unconscious or unable to swallow",
      points: [
        "**Never put food or fluid into the mouth of an unconscious patient.** Secure the airway, place in the recovery position, and obtain intravenous access.",
        "**Intravenous 25% dextrose 100 mL (25 g) as a slow bolus** is the standard Indian ampoule-based treatment; 50% dextrose 50 mL is an alternative but is sclerosant and should go through a large vein. Recheck the glucose after 10-15 minutes and repeat if still low.",
        "**Where there is no intravenous access:** glucagon 1 mg intramuscularly or subcutaneously (0.5 mg if under 25 kg), which raises glucose within 10-15 minutes; it is ineffective in alcohol-related hypoglycaemia and in glycogen-depleted or starved patients, and causes vomiting.",
        "Follow the bolus with a **10% dextrose infusion** if the cause is long-acting - especially a sulfonylurea, long-acting insulin, or renal failure - and admit for at least 24 hours of monitoring.",
        "**Sulfonylurea-induced hypoglycaemia always needs admission**, because it recurs for 24-72 hours; **octreotide 50-100 mcg subcutaneously 8-12 hourly** suppresses the sulfonylurea-driven insulin release and reduces the number of dextrose boluses needed.",
        "In a malnourished patient or an alcoholic, give **thiamine 100 mg intravenously before or with the glucose** to avoid precipitating Wernicke encephalopathy.",
      ],
    },
    {
      heading: "Prevention and patient education",
      points: [
        "Ask about hypoglycaemia at every visit, by symptom rather than by the word - many patients describe only weakness, sweating or hunger and never report it unless asked.",
        "**Relax the HbA1c target** to 7.5-8% in anyone with recurrent hypoglycaemia, unawareness, frailty, living alone, advanced CKD or a limited life expectancy.",
        "Teach the patient and a family member: carry glucose sachets and an identity card, never skip a meal after taking insulin or a sulfonylurea, test before driving and before unusual exertion, and take a snack before heavy work or a long journey.",
        "**Structured religious fasting advice** (Ramadan, Navratri, Ekadashi, Karva Chauth): shift the main insulin or sulfonylurea dose to the evening meal, halve the pre-dawn dose, prefer gliclazide MR or a DPP-4 inhibitor over glibenclamide, and give explicit permission to break the fast for glucose below 70 mg/dL.",
        "Review drug interactions that potentiate sulfonylureas: **fluoroquinolones (especially gatifloxacin, now withdrawn, and levofloxacin), sulfonamides, fluconazole, warfarin, salicylates, beta-blockers** (which additionally mask adrenergic warning symptoms) and alcohol.",
        "Document every severe episode in the record and adjust the regimen the same day - the strongest predictor of a future severe episode is a past one.",
      ],
    },
    {
      heading: "Hypoglycaemia in a person without diabetes",
      points: [
        "Confirm Whipple triad first; a low glucometer reading alone in an asymptomatic person is usually artefactual or a delayed sample.",
        "**Drugs remain the commonest cause** even in non-diabetics: surreptitious or accidental insulin or sulfonylurea use, quinine, propranolol, alcohol, and in India unlabelled polyherbal or Ayurvedic preparations adulterated with glibenclamide.",
        "**Non-drug causes:** sepsis, hepatic failure, renal failure, adrenal insufficiency, hypopituitarism, severe malnutrition and anorexia, and large non-islet cell tumours producing IGF-2.",
        "**Insulinoma:** fasting hypoglycaemia with inappropriately high insulin, C-peptide and proinsulin, and a negative sulfonylurea screen. Exogenous insulin gives high insulin with a **suppressed C-peptide** - that pairing is the classic exam discriminator.",
        "**Post-prandial (reactive) hypoglycaemia** occurs 2-5 hours after meals, especially after gastric surgery; manage with small frequent low-glycaemic-index meals rather than with drugs.",
        "In children, exclude ketotic hypoglycaemia of childhood, inborn errors of metabolism and congenital hyperinsulinism, and always check ketones and a critical sample at the time of the low glucose.",
      ],
    },
  ],
  tables: [
    {
      heading: "Severity levels and immediate action",
      columns: ["Level", "Glucose", "Clinical state", "Action"],
      rows: [
        ["Level 1 (alert)", "Below 70 and 54 mg/dL or above", "May be asymptomatic", "15 g oral carbohydrate, recheck in 15 min, review regimen"],
        ["Level 2 (clinically significant)", "Below 54 mg/dL", "Neuroglycopenic symptoms likely", "15-20 g oral carbohydrate, recheck, then a snack or meal; reduce the offending drug"],
        ["Level 3 (severe)", "Any value", "Needs another person's help; confusion, seizure or coma", "IV 25% dextrose 100 mL or IM glucagon 1 mg; admit if sulfonylurea or long-acting insulin"],
      ],
    },
    {
      heading: "Interpreting the critical sample in hypoglycaemia without diabetes",
      columns: ["Cause", "Insulin", "C-peptide", "Sulfonylurea screen", "Ketones"],
      rows: [
        ["Insulinoma", "High", "High", "Negative", "Suppressed"],
        ["Exogenous insulin", "Very high", "Suppressed", "Negative", "Suppressed"],
        ["Sulfonylurea ingestion", "High", "High", "Positive", "Suppressed"],
        ["Adrenal insufficiency or hypopituitarism", "Low", "Low", "Negative", "Raised"],
        ["Alcohol or starvation", "Low", "Low", "Negative", "Raised"],
        ["Non-islet cell tumour (IGF-2)", "Low", "Low", "Negative", "Suppressed"],
      ],
    },
  ],
  redFlags: [
    "Any unconscious or fitting patient - check a capillary glucose before anything else, and treat a value below 70 mg/dL immediately with intravenous dextrose.",
    "Hypoglycaemia caused by a sulfonylurea - admit for at least 24 hours, because it recurs after the initial dextrose bolus wears off.",
    "Recurrent hypoglycaemia in a diabetic whose insulin requirement is falling - look for new renal failure, adrenal insufficiency, hypothyroidism, tuberculosis or malignancy.",
    "Hypoglycaemia unawareness or a severe episode while driving or operating machinery - stop driving, relax the target, and re-educate before resuming.",
    "Hypoglycaemia in a non-diabetic with no drug exposure - admit for a supervised fast and a critical sample; do not discharge on reassurance.",
    "Persistent altered consciousness after the glucose has been corrected above 100 mg/dL - consider cerebral oedema, stroke, post-ictal state, sepsis or an alternative cause and image the brain.",
  ],
  pearls: [
    "Whipple triad is the definition of true hypoglycaemia: symptoms, a documented low glucose, and relief on giving glucose.",
    "Rule of 15: 15 g of fast carbohydrate, recheck in 15 minutes, repeat if still below 70 mg/dL, then eat a proper meal.",
    "Hypoglycaemia on acarbose must be treated with dextrose, never with table sugar, because sucrose cannot be split.",
    "A sulfonylurea hypoglycaemia is admitted, not discharged - octreotide 50-100 mcg subcutaneously reduces the recurrent boluses that would otherwise be needed.",
    "High insulin with a suppressed C-peptide means exogenous insulin; high insulin with a high C-peptide and a negative drug screen means insulinoma.",
    "Beta-blockers mask the adrenergic warning symptoms while leaving neuroglycopenia intact - the patient goes straight from feeling well to being confused.",
    "In any elderly patient found confused, fallen or apparently having a stroke, the first test is a capillary glucose - hypoglycaemia is the most reversible cause on the list.",
    "Give thiamine 100 mg IV with the glucose in an alcoholic or a malnourished patient, or you may precipitate Wernicke encephalopathy.",
  ],
  theory: [
    {
      id: "endocrine-hypoglycaemia-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "A 68-year-old woman with type 2 diabetes on glibenclamide is brought to your clinic unconscious. Discuss the causes, clinical features, immediate management and prevention of hypoglycaemia in a diabetic patient.",
      openingLines: [
        "Hypoglycaemia in a treated diabetic is defined by the ADA as a plasma glucose below 70 mg/dL (level 1), below 54 mg/dL (level 2), or any episode with altered mental or physical function requiring another person's assistance (level 3, severe), and it is the principal limiting factor in the glycaemic management of diabetes.",
        "In an unconscious diabetic, hypoglycaemia must be assumed and treated before any other diagnosis is pursued, since it is rapidly reversible and rapidly fatal if missed.",
      ],
      answer: [
        {
          heading: "1. Causes",
          points: [
            "Drug-related: insulin and sulfonylureas, particularly glibenclamide with its renally cleared active metabolites; dosing errors, U-40 versus U-100 syringe mismatch, and injection into lipohypertrophied skin.",
            "Missed or delayed meals, religious fasting, unaccustomed exertion, and alcohol which inhibits gluconeogenesis and causes delayed nocturnal hypoglycaemia.",
            "Reduced clearance: chronic kidney disease, hepatic failure, and advancing age.",
            "Reduced counter-regulation: adrenal insufficiency, hypothyroidism, hypopituitarism, and hypoglycaemia unawareness from repeated episodes.",
            "Drug interactions potentiating sulfonylureas: fluoroquinolones, sulfonamides, fluconazole, salicylates, warfarin and beta-blockers.",
            "Weight loss from intercurrent illness such as tuberculosis or malignancy, and gastroparesis.",
          ],
        },
        {
          heading: "2. Clinical features",
          points: [
            "Autonomic (adrenergic) at about 60-70 mg/dL: sweating, tremor, palpitation, anxiety, hunger, pallor.",
            "Neuroglycopenic below about 50 mg/dL: confusion, difficulty concentrating, slurred speech, incoordination, abnormal behaviour, focal deficit, seizure and coma.",
            "In the elderly the presentation may be only a fall, confusion, or a stroke-like deficit; beta-blockers mask the adrenergic phase.",
            "Whipple triad establishes the diagnosis: symptoms, documented low glucose, and relief with glucose.",
          ],
        },
        {
          heading: "3. Immediate management of this patient",
          points: [
            "Airway, breathing, circulation; recovery position; nothing by mouth while unconscious.",
            "Capillary glucose at once, and send a venous sample before treatment where possible.",
            "Intravenous 25% dextrose 100 mL (25 g) slow bolus; repeat after 10-15 minutes if the glucose is still below 70 mg/dL. Where no intravenous access is possible, glucagon 1 mg intramuscularly.",
            "Thiamine 100 mg intravenously first in a malnourished or alcoholic patient.",
            "Follow with a 10% dextrose infusion titrated to keep glucose 100-150 mg/dL, because the sulfonylurea effect will outlast the bolus.",
            "Admit for at least 24 hours; consider octreotide 50-100 mcg subcutaneously 8-12 hourly for recurrent sulfonylurea hypoglycaemia.",
            "Once conscious, give a complex carbohydrate meal; look for the precipitant - renal function, sepsis, missed meals, interacting drugs.",
          ],
        },
        {
          heading: "4. Subsequent management and regimen change",
          points: [
            "Stop glibenclamide permanently; it is inappropriate in an elderly patient and in renal impairment.",
            "Relax the HbA1c target to about 8%, and choose agents that do not cause hypoglycaemia - metformin if eGFR allows, linagliptin 5 mg OD, or an SGLT2 inhibitor if appropriate.",
            "Reassess renal and hepatic function, thyroid function and nutrition.",
            "Arrange early review and involve a family member in the plan.",
          ],
        },
        {
          heading: "5. Prevention",
          points: [
            "Enquire about hypoglycaemia by symptom at every visit and record every episode.",
            "Educate on the rule of 15: 15 g of fast-acting carbohydrate, recheck in 15 minutes, repeat if needed, then a meal.",
            "Carry glucose and an identity card; never skip a meal after insulin or a sulfonylurea; test before driving and before unusual exertion.",
            "Structured advice for religious fasting, with permission to break the fast below 70 mg/dL.",
            "Match the target to the patient: frail, elderly, living alone, CKD or unawareness means a relaxed target and hypoglycaemia-sparing drugs.",
          ],
        },
      ],
      mustDraw: [
        "Table of the three ADA severity levels with glucose values and actions.",
        "Flow chart: unconscious diabetic - ABC and capillary glucose - IV 25% dextrose 100 mL or IM glucagon 1 mg - recheck at 15 min - 10% dextrose infusion - admit and find the cause.",
      ],
      markSplit: [
        { part: "Definition and severity levels", marks: 1 },
        { part: "Causes", marks: 2 },
        { part: "Clinical features including in the elderly", marks: 2 },
        { part: "Immediate management with doses", marks: 3 },
        { part: "Prevention and regimen change", marks: 2 },
      ],
      keywords: ["hypoglycaemia", "glibenclamide", "25% dextrose", "glucagon", "octreotide", "rule of 15"],
    },
    {
      id: "endocrine-hypoglycaemia-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Write short notes on the evaluation of hypoglycaemia in a patient who does not have diabetes.",
      openingLines: [
        "Hypoglycaemia in a person without diabetes must first be confirmed by Whipple triad - symptoms consistent with hypoglycaemia, a simultaneously documented low plasma glucose, and relief of symptoms when glucose is raised.",
        "Evaluation then rests on a critical sample drawn at the time of the low glucose, before treatment, for insulin, C-peptide, proinsulin, beta-hydroxybutyrate, cortisol and a sulfonylurea screen.",
      ],
      answer: [
        {
          heading: "Causes to consider",
          points: [
            "Drugs, which remain the commonest cause: surreptitious or accidental insulin or sulfonylurea, quinine, propranolol, alcohol, and unlabelled herbal preparations adulterated with glibenclamide.",
            "Critical illness: sepsis, hepatic failure, renal failure, cardiac failure and severe malnutrition.",
            "Hormone deficiency: adrenal insufficiency and hypopituitarism.",
            "Endogenous hyperinsulinism: insulinoma, nesidioblastosis, insulin autoimmune hypoglycaemia and post-bariatric hypoglycaemia.",
            "Non-islet cell tumour hypoglycaemia from IGF-2 secretion by large mesenchymal or hepatic tumours.",
          ],
        },
        {
          heading: "The critical sample",
          points: [
            "High insulin with high C-peptide and a negative sulfonylurea screen indicates insulinoma.",
            "High insulin with suppressed C-peptide indicates exogenous insulin administration.",
            "High insulin with high C-peptide and a positive sulfonylurea screen indicates sulfonylurea ingestion.",
            "Low insulin with raised ketones suggests alcohol, starvation, or adrenal or pituitary failure - check an 8 a.m. cortisol.",
            "Low insulin with suppressed ketones and low IGF-1 with a high IGF-2 to IGF-1 ratio suggests a non-islet cell tumour.",
          ],
        },
        {
          heading: "Further evaluation and management",
          points: [
            "A supervised 72-hour fast, terminated when glucose falls below 55 mg/dL with symptoms, is the definitive test for endogenous hyperinsulinism.",
            "Localise a suspected insulinoma with contrast CT or MRI of the pancreas, endoscopic ultrasound, or a Ga-68 DOTANOC or GLP-1 receptor scan; treatment is surgical enucleation, with diazoxide as a temporising measure.",
            "Treat the underlying cause: stop the offending drug, replace hydrocortisone in adrenal insufficiency, and give frequent low-glycaemic-index meals for reactive hypoglycaemia.",
          ],
        },
      ],
      mustDraw: ["Table of the critical sample interpretation: insulin, C-peptide, sulfonylurea screen and ketones across insulinoma, exogenous insulin, sulfonylurea, adrenal failure and alcohol."],
      markSplit: [
        { part: "Whipple triad and causes", marks: 2 },
        { part: "Critical sample interpretation table", marks: 2 },
        { part: "Confirmatory test, localisation and treatment", marks: 1 },
      ],
      keywords: ["Whipple triad", "insulinoma", "C-peptide", "critical sample", "72-hour fast"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-hypoglycaemia-q1",
      stem: "A 72-year-old man on glibenclamide 10 mg daily is brought in drowsy with a capillary glucose of 34 mg/dL. He is given 25% dextrose 100 mL intravenously and recovers fully within 10 minutes. What should be done next?",
      options: [
        "Admit him for at least 24 hours with a 10% dextrose infusion and glucose monitoring",
        "Discharge him after a meal with advice to halve the glibenclamide dose",
        "Discharge him with a glucagon kit and review in one week",
        "Observe for 2 hours in the clinic, then discharge if the glucose is above 100 mg/dL",
      ],
      answer: 0,
      explanation:
        "Sulfonylurea-induced hypoglycaemia recurs for 24-72 hours because the drug and, with glibenclamide, its renally cleared active metabolites long outlast a dextrose bolus, so admission with a dextrose infusion and monitoring is mandatory. Discharging him on a halved dose leaves him in the community during the window when hypoglycaemia will recur. A glucagon kit is ineffective when hepatic glycogen has been depleted by repeated hypoglycaemia and does not substitute for admission. Two hours of observation is far too short for a long-acting sulfonylurea.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hypoglycaemia-q2",
      stem: "A 46-year-old man on metformin and acarbose develops sweating and tremor with a capillary glucose of 58 mg/dL after skipping lunch. He also takes glimepiride. What should he be given?",
      options: [
        "Glucose powder or glucose tablets, 15 g",
        "Three teaspoons of table sugar in water",
        "A glass of milk with two biscuits",
        "A bar of chocolate",
      ],
      answer: 0,
      explanation:
        "Acarbose inhibits intestinal alpha-glucosidase and therefore blocks the breakdown of sucrose into absorbable monosaccharides, so hypoglycaemia in a patient on acarbose must be treated with glucose or dextrose. Table sugar is sucrose and will not be absorbed quickly in this patient. Milk with biscuits and chocolate both contain fat and protein that delay gastric emptying and glucose absorption, and are unsuitable for acute treatment in any patient.",
      difficulty: "easy",
    },
    {
      id: "endocrine-hypoglycaemia-q3",
      stem: "A 34-year-old woman without diabetes has recurrent early-morning confusion. During an episode her plasma glucose is 38 mg/dL, insulin is markedly raised, C-peptide is suppressed, and a sulfonylurea screen is negative. What is the diagnosis?",
      options: [
        "Surreptitious administration of exogenous insulin",
        "Insulinoma",
        "Sulfonylurea ingestion",
        "Adrenal insufficiency",
      ],
      answer: 0,
      explanation:
        "Exogenous insulin raises the measured insulin while suppressing endogenous secretion, so C-peptide is low - the pairing of high insulin with suppressed C-peptide is diagnostic of exogenous insulin administration. An insulinoma secretes proinsulin, so both insulin and C-peptide are high. Sulfonylurea ingestion also raises both insulin and C-peptide and would give a positive drug screen. Adrenal insufficiency causes hypoglycaemia with low insulin and raised ketones, not hyperinsulinaemia.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hypoglycaemia-q4",
      stem: "A 60-year-old man with type 2 diabetes on insulin for 12 years has had three episodes of hypoglycaemia in the last month without any warning symptoms; previously he always felt sweaty and tremulous. His HbA1c is 6.2%. What is the most appropriate management?",
      options: [
        "Relax the glycaemic target and scrupulously avoid hypoglycaemia for 2-3 weeks to restore awareness",
        "Add a beta-blocker to blunt the excessive adrenergic response",
        "Increase the insulin dose to reduce glycaemic variability",
        "Continue the current regimen and issue a glucagon kit only",
      ],
      answer: 0,
      explanation:
        "Hypoglycaemia unawareness results from repeated episodes blunting counter-regulation, and it is at least partly reversible if hypoglycaemia is strictly avoided for 2-3 weeks, which requires relaxing the HbA1c target from an inappropriately tight 6.2%. Beta-blockers make the problem worse by further masking adrenergic warning symptoms. Increasing insulin increases the frequency of hypoglycaemia. A glucagon kit is a useful adjunct but does nothing to restore awareness or prevent episodes.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hypoglycaemia-q5",
      stem: "A 58-year-old woman with type 2 diabetes on a stable dose of insulin for years now has repeated hypoglycaemia, has lost 5 kg, and has developed skin darkening and postural dizziness. Serum sodium is 128 mmol/L and potassium 5.4 mmol/L. What should be suspected?",
      options: [
        "Primary adrenal insufficiency (Addison disease)",
        "Progression of diabetic nephropathy",
        "Insulinoma",
        "Overtreatment with insulin alone",
      ],
      answer: 0,
      explanation:
        "Falling insulin requirements with weight loss, hyperpigmentation, postural hypotension, hyponatraemia and hyperkalaemia in an autoimmune-prone patient is Addison disease, which occurs with type 1 diabetes as part of autoimmune polyglandular syndrome and must be confirmed with an 8 a.m. cortisol and ACTH. Advancing nephropathy does reduce insulin requirements but would not cause pigmentation, and typically raises rather than lowers sodium handling in this pattern. Insulinoma is exceptionally rare in a treated diabetic and would not explain the electrolytes or pigmentation. Simple overtreatment does not cause hyperpigmentation or hyperkalaemia.",
      difficulty: "hard",
    },
    {
      id: "endocrine-hypoglycaemia-q6",
      stem: "An unconscious diabetic patient is found at home with a capillary glucose of 28 mg/dL. There is no intravenous access and the nearest hospital is 40 minutes away. What is the most appropriate immediate treatment?",
      options: [
        "Glucagon 1 mg intramuscularly",
        "Sugar solution poured into the mouth",
        "Honey rubbed on the buccal mucosa and observe",
        "Wait for transfer and give intravenous dextrose at the hospital",
      ],
      answer: 0,
      explanation:
        "Glucagon 1 mg intramuscularly or subcutaneously is the recommended treatment when a patient cannot swallow and intravenous access is unavailable; it acts within 10-15 minutes by mobilising hepatic glycogen. Pouring fluid into an unconscious patient's mouth risks aspiration and is explicitly contraindicated. Buccal honey has minimal and unreliable absorption and would delay definitive treatment. Waiting 40 minutes at a glucose of 28 mg/dL risks irreversible neurological injury.",
      difficulty: "easy",
    },
    {
      id: "endocrine-hypoglycaemia-q7",
      stem: "A 30-year-old man is admitted after an alcohol binge with a glucose of 32 mg/dL. He is malnourished. Which is the correct sequence of treatment?",
      options: [
        "Thiamine 100 mg intravenously followed by or given with 25% dextrose",
        "25% dextrose alone; thiamine is unnecessary in hypoglycaemia",
        "Glucagon 1 mg intramuscularly as first-line therapy",
        "Oral glucose gel and observation",
      ],
      answer: 0,
      explanation:
        "In a malnourished or alcohol-dependent patient, a glucose load consumes the remaining thiamine and can precipitate Wernicke encephalopathy, so thiamine 100 mg intravenously is given before or with the dextrose. Giving dextrose alone risks that complication. Glucagon acts by mobilising hepatic glycogen, which is depleted in alcohol-related hypoglycaemia, so it is unreliable here. Oral treatment is unsuitable for a patient with impaired consciousness at this glucose level.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "endocrine-hypoglycaemia-c1",
      front: "The three ADA levels of hypoglycaemia",
      back: "Level 1: below 70 mg/dL. Level 2: below 54 mg/dL. Level 3 (severe): any value with altered mental or physical function needing another person's help.",
    },
    {
      id: "endocrine-hypoglycaemia-c2",
      front: "Whipple triad",
      back: "Symptoms of hypoglycaemia, a documented low plasma glucose at that time, and relief of symptoms when glucose is raised.",
    },
    {
      id: "endocrine-hypoglycaemia-c3",
      front: "The rule of 15",
      back: "15-20 g of fast-acting carbohydrate, recheck the glucose in 15 minutes, repeat if still below 70 mg/dL, then give a meal or complex-carbohydrate snack.",
    },
    {
      id: "endocrine-hypoglycaemia-c4",
      front: "What counts as 15 g of fast-acting carbohydrate?",
      back: "3-4 teaspoons of glucose or sugar in water, 3-4 glucose tablets, 150 mL of juice or regular soft drink, or 1 tablespoon of honey. Not chocolate, milk or biscuits.",
    },
    {
      id: "endocrine-hypoglycaemia-c5",
      front: "Dose of intravenous dextrose for severe hypoglycaemia in an adult",
      back: "25% dextrose 100 mL (25 g) slow IV bolus, repeated at 10-15 minutes if needed, then a 10% dextrose infusion if the cause is long-acting.",
    },
    {
      id: "endocrine-hypoglycaemia-c6",
      front: "Glucagon dose and its two failure situations",
      back: "1 mg IM or SC (0.5 mg if under 25 kg). Ineffective in alcohol-related hypoglycaemia and in glycogen-depleted or starved patients.",
    },
    {
      id: "endocrine-hypoglycaemia-c7",
      front: "Why does sulfonylurea hypoglycaemia need admission?",
      back: "It recurs for 24-72 hours after the bolus wears off; give a 10% dextrose infusion and consider octreotide 50-100 mcg SC 8-12 hourly.",
    },
    {
      id: "endocrine-hypoglycaemia-c8",
      front: "Insulin and C-peptide pattern in exogenous insulin versus insulinoma",
      back: "Exogenous insulin: high insulin, suppressed C-peptide. Insulinoma: high insulin and high C-peptide with a negative sulfonylurea screen.",
    },
    {
      id: "endocrine-hypoglycaemia-c9",
      front: "Managing hypoglycaemia unawareness",
      back: "Relax the HbA1c target and avoid all hypoglycaemia strictly for 2-3 weeks - awareness is partly restored. Never add a beta-blocker.",
    },
    {
      id: "endocrine-hypoglycaemia-c10",
      front: "Drugs that potentiate sulfonylurea hypoglycaemia",
      back: "Fluoroquinolones, sulfonamides, fluconazole, salicylates, warfarin, alcohol, and beta-blockers which additionally mask the warning symptoms.",
    },
    {
      id: "endocrine-hypoglycaemia-c11",
      front: "Falling insulin requirement in a long-standing diabetic - what to look for",
      back: "New renal failure, adrenal insufficiency, hypothyroidism, weight loss from tuberculosis or malignancy, or gastroparesis.",
    },
    {
      id: "endocrine-hypoglycaemia-c12",
      front: "Why give thiamine before dextrose in an alcoholic?",
      back: "A glucose load consumes residual thiamine and can precipitate Wernicke encephalopathy; give thiamine 100 mg IV before or with the dextrose.",
    },
  ],
  references: [
    "American Diabetes Association, Standards of Care in Diabetes, 2025 - Glycemic Goals and Hypoglycemia",
    "Endocrine Society Clinical Practice Guideline, Evaluation and Management of Adult Hypoglycemic Disorders, 2009",
    "RSSDI Clinical Practice Recommendations for the Management of Type 2 Diabetes Mellitus, 2022",
    "IDF-DAR International Alliance Practical Guidelines for Diabetes and Ramadan, 2021",
  ],
});

topics.push({
  id: "endocrine-hypothyroidism",
  title: "Hypothyroidism and subclinical hypothyroidism",
  oneLiner:
    "Overt primary hypothyroidism is a raised TSH with a low free T4 and is treated with levothyroxine 1.6 mcg/kg/day on an empty stomach, while subclinical hypothyroidism is a raised TSH with a normal free T4 and is treated only when TSH is 10 mIU/L or more, when the patient is pregnant or planning pregnancy, or when TPO antibodies and symptoms are present.",
  frequency: "core",
  keywords: [
    "hypothyroidism",
    "levothyroxine",
    "TSH",
    "free T4",
    "anti-TPO",
    "Hashimoto thyroiditis",
    "subclinical hypothyroidism",
    "myxoedema coma",
    "goitre",
    "iodine deficiency",
    "NIDDCP",
    "sick euthyroid",
    "eltroxin",
  ],
  sections: [
    {
      heading: "Definitions, causes and Indian burden",
      points: [
        "**Overt primary hypothyroidism:** TSH above the reference range (usually above 4.5-5.0 mIU/L) with a **low free T4**. **Subclinical hypothyroidism:** raised TSH with a **normal free T4**. **Central (secondary) hypothyroidism:** low free T4 with a low or inappropriately normal TSH.",
        "**Commonest cause in India is autoimmune (Hashimoto) thyroiditis** now that salt iodisation has been implemented; other causes are post-surgical, post-radioiodine, drug-induced (amiodarone, lithium, antithyroid drugs, interferon, immune checkpoint inhibitors), and iodine deficiency in residual pockets.",
        "The **ITDS (Indian Thyroid Disease Study, Unnikrishnan 2013)** across eight cities found hypothyroidism in about 10.9% of adults, of which roughly 8% was subclinical, with a marked female preponderance and a rising prevalence with age; inland cities such as Kolkata and Delhi had higher rates than coastal ones.",
        "**NIDDCP (National Iodine Deficiency Disorders Control Programme)** mandates universal salt iodisation at 15 ppm at the consumer level and 30 ppm at production; goitre surveys and urinary iodine estimation (median 100-199 mcg/L is iodine sufficiency) monitor it.",
        "Excess iodine matters too: a median urinary iodine above 300 mcg/L is excessive and is itself associated with autoimmune thyroiditis and subclinical hypothyroidism.",
        "Congenital hypothyroidism has an incidence of roughly 1 in 1000 to 1 in 1700 live births in India, higher than the western figure, which is the argument for universal newborn screening under RBSK.",
      ],
    },
    {
      heading: "Clinical features and the diagnostic pitfalls",
      points: [
        "**Symptoms:** fatigue, cold intolerance, weight gain despite poor appetite, constipation, dry skin, hair loss, hoarseness, menorrhagia or oligomenorrhoea, infertility, low mood, poor memory, muscle cramps and carpal tunnel syndrome.",
        "**Signs:** bradycardia, diastolic hypertension, periorbital and non-pitting peripheral oedema, coarse dry skin, loss of the outer third of the eyebrows, **delayed relaxation phase of the ankle jerk**, goitre (firm and bosselated in Hashimoto), macroglossia and a slow, hoarse voice.",
        "**Test TSH first** in primary care; add free T4 if TSH is abnormal. Do not order a T3 to diagnose hypothyroidism - T3 is preserved until late and a normal T3 is meaningless here.",
        "**Anti-TPO antibodies** establish autoimmune aetiology, predict progression from subclinical to overt disease, and predict post-partum thyroiditis - test once, not repeatedly.",
        "**Do not test thyroid function during acute illness or hospitalisation** unless thyroid disease is strongly suspected: non-thyroidal illness (sick euthyroid) syndrome gives a low T3, then a low T4, with a low or normal TSH, and a rebound TSH rise during recovery that is easily mistaken for hypothyroidism.",
        "Biotin supplements (common in hair and skin preparations, 5-10 mg) interfere with immunoassays and can give **spuriously low TSH with high free T4** - stop biotin for 48-72 hours before testing.",
      ],
    },
    {
      heading: "Treating overt hypothyroidism",
      points: [
        "**Levothyroxine 1.6 mcg/kg/day** as a single morning dose is the full replacement dose - roughly 100 mcg for a 60 kg adult. Available in India as 12.5, 25, 50, 62.5, 75, 88, 100, 112, 125 and 150 mcg tablets.",
        "**Start low in the elderly and in coronary artery disease:** 12.5-25 mcg daily, increasing by 12.5-25 mcg every 4-6 weeks, because a full dose can precipitate angina, arrhythmia or infarction.",
        "**Take it on an empty stomach with water, 30-60 minutes before breakfast** (or at bedtime, 3 hours after the last food, which is equally effective and often easier). Consistency matters more than the exact timing.",
        "**Separate by at least 4 hours** from calcium, iron, multivitamins, antacids, proton pump inhibitors, sucralfate, cholestyramine and soya - all reduce absorption and are the commonest reason for an unexpectedly high TSH on an adequate dose.",
        "**Recheck TSH 6-8 weeks after starting or after any dose change** (it takes that long to reach a new steady state), then 6-monthly to annually once stable. Do not chase the TSH at 2 weeks.",
        "**Target TSH 0.5-2.5 mIU/L** in most adults; accept 4-6 mIU/L in those over 70 to avoid iatrogenic thyrotoxicosis, atrial fibrillation and osteoporosis.",
        "**Combination T4 plus T3 therapy is not recommended routinely**; persistent symptoms with a normal TSH should prompt a search for anaemia, vitamin D or B12 deficiency, depression, sleep apnoea, coeliac disease and Addison disease rather than an increase in dose.",
      ],
    },
    {
      heading: "Subclinical hypothyroidism - when to treat",
      points: [
        "**Confirm first:** repeat TSH with free T4 and anti-TPO after 6-12 weeks, because up to a third of raised TSH values normalise spontaneously, and exclude recovery from illness, assay interference and a normal age-related rise.",
        "**Treat if TSH is 10 mIU/L or more**, because the risk of progression to overt disease and of adverse lipid and cardiac outcomes is substantial.",
        "**Treat if TSH is 4.5-10 mIU/L with any of:** pregnancy or planning pregnancy or infertility, positive anti-TPO antibodies, goitre, convincing symptoms, dyslipidaemia, or age under 65 with cardiovascular risk. Start levothyroxine 25-50 mcg daily and titrate.",
        "**Do not treat** an asymptomatic antibody-negative person over 65-70 with a TSH of 4.5-7 mIU/L: the TRUST trial showed no benefit in symptoms or quality of life in older adults, and treatment risks atrial fibrillation and fracture.",
        "If not treating, **monitor TSH and free T4 every 6-12 months**, and treat if TSH rises above 10 mIU/L or free T4 falls.",
        "In children and adolescents, subclinical hypothyroidism with a goitre or a positive antibody is more likely to progress and is usually treated.",
      ],
    },
    {
      heading: "Pregnancy and the newborn",
      points: [
        "**Screen all pregnant women in India at the first antenatal visit** with a TSH - the FOGSI and ITS position, justified by the high prevalence and the neurodevelopmental consequences, rather than the case-finding approach used in some western guidance.",
        "**Trimester-specific TSH upper limits:** first trimester about 2.5 mIU/L and second and third about 3.0 mIU/L where local ranges are unavailable; use assay- and population-specific ranges where they exist (Indian studies suggest a first-trimester upper limit closer to 3.0-4.0 mIU/L).",
        "**Treat all overt hypothyroidism in pregnancy immediately**, and treat subclinical hypothyroidism when TSH is above the trimester-specific limit, particularly if anti-TPO is positive.",
        "**Levothyroxine requirement rises by 25-50% in pregnancy**: instruct a known hypothyroid woman to take **two extra tablets a week (nine doses instead of seven)** as soon as pregnancy is confirmed, and check TSH every 4 weeks until mid-gestation, then once in the third trimester.",
        "Return to the pre-pregnancy dose immediately after delivery and check TSH at 6 weeks post-partum.",
        "**Congenital hypothyroidism** is screened under RBSK/newborn screening with a TSH on a heel-prick dried blood spot taken between 48 and 72 hours of age (cord blood is an alternative). Treat confirmed cases with levothyroxine 10-15 mcg/kg/day within the first 2 weeks - delay costs IQ points permanently.",
      ],
    },
    {
      heading: "Myxoedema coma and refractory hypothyroidism",
      points: [
        "**Myxoedema coma** is decompensated hypothyroidism, usually in an elderly woman in winter, precipitated by infection, cold, sedatives, surgery or stopping levothyroxine; it has a mortality of 20-40%.",
        "**Features:** hypothermia, bradycardia, hypotension, hypoventilation with hypercapnia, hyponatraemia, hypoglycaemia, non-pitting oedema, and altered consciousness or seizures.",
        "**Treatment:** admit to intensive care; **levothyroxine 200-400 mcg IV loading then 50-100 mcg IV daily** (or crushed via nasogastric tube if IV is unavailable), **hydrocortisone 100 mg IV 8-hourly first** until adrenal insufficiency is excluded, passive rewarming, cautious fluids, ventilatory support and treatment of the precipitating infection.",
        "**Give hydrocortisone before or with the thyroxine** - thyroid hormone increases cortisol clearance and can precipitate an adrenal crisis in a patient with coexisting adrenal insufficiency.",
        "**Refractory hypothyroidism** (TSH persistently high on an apparently adequate dose): the commonest cause is non-adherence, then malabsorption of the tablet from coadministered calcium, iron or a proton pump inhibitor, coeliac disease, Helicobacter pylori gastritis, atrophic gastritis, and rarely a poor-quality generic.",
        "A supervised weekly dose (the total weekly dose given once under observation) confirms adherence-related pseudo-malabsorption and is both a diagnostic and a practical management step.",
      ],
    },
  ],
  tables: [
    {
      heading: "Interpreting thyroid function tests",
      columns: ["TSH", "Free T4", "Interpretation", "Action"],
      rows: [
        ["High", "Low", "Overt primary hypothyroidism", "Start levothyroxine 1.6 mcg/kg/day (low dose if elderly or cardiac)"],
        ["High", "Normal", "Subclinical hypothyroidism", "Repeat in 6-12 weeks with anti-TPO; treat if TSH 10 or more, or if pregnant, symptomatic or antibody positive"],
        ["Low", "High", "Thyrotoxicosis", "Determine cause: Graves, toxic nodule, thyroiditis"],
        ["Low", "Normal", "Subclinical hyperthyroidism", "Repeat; treat if TSH below 0.1 with AF, osteoporosis or age over 65"],
        ["Low or normal", "Low", "Central hypothyroidism or non-thyroidal illness", "Assess pituitary; do not test in acute illness; check cortisol before thyroxine"],
        ["High", "High", "Assay interference, TSH-oma, thyroid hormone resistance, poor adherence with a recent dose", "Repeat in a different assay; refer to endocrinology"],
      ],
    },
    {
      heading: "Levothyroxine dosing situations",
      columns: ["Situation", "Dose", "Monitoring"],
      rows: [
        ["Healthy adult, overt hypothyroidism", "1.6 mcg/kg/day (about 100 mcg for 60 kg)", "TSH at 6-8 weeks, then 6-12 monthly"],
        ["Age over 65 or coronary artery disease", "12.5-25 mcg daily, increase by 12.5-25 mcg every 4-6 weeks", "TSH at 6-8 weeks after each change; watch for angina"],
        ["Subclinical hypothyroidism", "25-50 mcg daily", "TSH at 6-8 weeks; target 0.5-2.5 mIU/L"],
        ["Pregnancy, known hypothyroid", "Increase by 25-30%, or take 2 extra tablets per week", "TSH every 4 weeks to mid-gestation, then once in the third trimester"],
        ["Post-thyroidectomy for cancer", "TSH suppression dose per risk category", "Endocrinology-led; TSH target set by recurrence risk"],
        ["Congenital hypothyroidism, newborn", "10-15 mcg/kg/day started within 2 weeks of birth", "TSH and free T4 at 2 and 4 weeks, then per protocol"],
        ["Myxoedema coma", "200-400 mcg IV load then 50-100 mcg IV daily, with hydrocortisone 100 mg IV 8-hourly", "ICU monitoring"],
      ],
    },
  ],
  redFlags: [
    "Hypothermia, bradycardia, hypotension and altered consciousness in a known or suspected hypothyroid patient - myxoedema coma; admit and treat before the confirmatory result returns.",
    "New angina, palpitation or atrial fibrillation after starting or increasing levothyroxine - stop or halve the dose and assess for ischaemia the same day.",
    "A rapidly enlarging, hard, fixed goitre with hoarseness, stridor or dysphagia - suspect anaplastic carcinoma or thyroid lymphoma; urgent referral.",
    "Hypothyroidism with postural hypotension, hyperpigmentation, hyponatraemia and hyperkalaemia - coexisting Addison disease; give hydrocortisone before levothyroxine or you may precipitate an adrenal crisis.",
    "A pregnant woman with a newly detected TSH above the trimester-specific limit - start levothyroxine the same day and repeat in 4 weeks; do not wait for a repeat test first in overt disease.",
    "Newborn with prolonged jaundice, poor feeding, constipation, a large tongue and an umbilical hernia - test for congenital hypothyroidism immediately, as treatment delay causes irreversible intellectual disability.",
  ],
  pearls: [
    "TSH is the screening test, free T4 is the confirmatory test, and T3 has no role in diagnosing hypothyroidism.",
    "Six to eight weeks is the interval for rechecking a TSH after any dose change - testing at two weeks generates needless dose changes.",
    "Levothyroxine goes in on an empty stomach, and calcium, iron, antacids and proton pump inhibitors must be at least four hours away from it.",
    "Two extra tablets a week is the practical way to deliver the 25-30% dose increase a hypothyroid woman needs the moment she becomes pregnant.",
    "Do not treat mild subclinical hypothyroidism in an antibody-negative person over 65 with no symptoms - TRUST showed no benefit and there is real harm.",
    "In myxoedema coma give hydrocortisone before the thyroxine; thyroxine alone can precipitate an adrenal crisis.",
    "A persistently high TSH on a big dose is almost always adherence or a drug interaction, not a genuine need for more levothyroxine - a supervised weekly dose settles it.",
    "Never check thyroid function in a sick inpatient unless you must: non-thyroidal illness syndrome will mislead you and the rebound TSH on recovery will mislead you again.",
  ],
  theory: [
    {
      id: "endocrine-hypothyroidism-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Define hypothyroidism. Discuss the aetiology, clinical features, investigations and management of hypothyroidism in adults, and outline the special considerations in pregnancy.",
      openingLines: [
        "Hypothyroidism is a clinical state resulting from deficient thyroid hormone action at the tissues, defined biochemically in its primary overt form by a raised serum TSH with a low free T4, and in its subclinical form by a raised TSH with a normal free T4.",
        "It affects about 10.9% of Indian adults according to the Indian Thyroid Disease Study, is three to five times commoner in women, and is now most often due to autoimmune thyroiditis following the success of universal salt iodisation.",
      ],
      answer: [
        {
          heading: "1. Aetiology",
          points: [
            "Primary: autoimmune (Hashimoto) thyroiditis, which is the commonest cause; post-surgical; post-radioiodine or external radiation; iodine deficiency in residual pockets and iodine excess.",
            "Drug-induced: amiodarone, lithium, antithyroid drugs, interferon-alpha, tyrosine kinase inhibitors and immune checkpoint inhibitors.",
            "Transient: subacute (de Quervain) thyroiditis, silent and post-partum thyroiditis in their hypothyroid phase.",
            "Central: pituitary or hypothalamic disease including Sheehan syndrome, pituitary adenoma and its treatment.",
            "Congenital: thyroid dysgenesis and dyshormonogenesis, screened for at birth.",
          ],
        },
        {
          heading: "2. Clinical features",
          points: [
            "Symptoms: fatigue, cold intolerance, weight gain with poor appetite, constipation, dry skin, hair fall, hoarseness, menorrhagia or oligomenorrhoea, infertility, depression and poor memory.",
            "Signs: bradycardia, diastolic hypertension, periorbital puffiness, non-pitting oedema, coarse skin, loss of the lateral third of the eyebrows, goitre, macroglossia and a delayed relaxation phase of the ankle jerk.",
            "Complications: dyslipidaemia, pericardial effusion, carpal tunnel syndrome, anaemia, subfertility and, at the extreme, myxoedema coma.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Serum TSH as the first-line test, with free T4 if TSH is abnormal; T3 is not used for diagnosis.",
            "Anti-TPO antibodies to establish an autoimmune aetiology and to predict progression.",
            "Supporting tests: haemogram (macrocytic or normocytic anaemia), fasting lipids (raised LDL), serum sodium, creatine kinase, and ECG for bradycardia and low voltage.",
            "Ultrasound of the neck only if there is a nodule or an asymmetrical goitre - not routinely for a diffuse goitre with positive antibodies.",
            "Avoid testing during acute illness because of non-thyroidal illness syndrome; stop biotin supplements 48-72 hours before testing.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Levothyroxine 1.6 mcg/kg/day as a single morning dose on an empty stomach, 30-60 minutes before breakfast or at bedtime 3 hours after food.",
            "Start at 12.5-25 mcg daily in the elderly and in those with ischaemic heart disease, increasing by 12.5-25 mcg every 4-6 weeks.",
            "Separate by at least 4 hours from calcium, iron, antacids, proton pump inhibitors, cholestyramine and soya products.",
            "Recheck TSH 6-8 weeks after starting or changing the dose; target 0.5-2.5 mIU/L in adults and 4-6 mIU/L in those over 70.",
            "Subclinical disease: treat if TSH is 10 mIU/L or more, or 4.5-10 mIU/L with pregnancy, planned pregnancy, positive anti-TPO, goitre, symptoms or cardiovascular risk; otherwise monitor 6-12 monthly.",
            "Counsel on lifelong therapy, adherence, and the fact that improvement takes weeks; do not use combination T4 plus T3 routinely.",
          ],
        },
        {
          heading: "5. Pregnancy",
          points: [
            "Screen all pregnant women with TSH at the first antenatal visit as recommended by FOGSI and the Indian Thyroid Society.",
            "Trimester-specific TSH upper limits of about 2.5 mIU/L in the first trimester and 3.0 mIU/L in the second and third where local ranges are unavailable.",
            "Treat all overt hypothyroidism, and subclinical hypothyroidism above the trimester-specific limit especially when anti-TPO is positive.",
            "Increase the pre-pregnancy dose by 25-30% as soon as pregnancy is confirmed - practically, two extra tablets per week - and monitor TSH every 4 weeks to mid-gestation.",
            "Revert to the pre-pregnancy dose after delivery and recheck TSH at 6 weeks; screen the newborn for congenital hypothyroidism at 48-72 hours.",
          ],
        },
      ],
      mustDraw: [
        "Table of TSH and free T4 combinations with their interpretation.",
        "Hypothalamic-pituitary-thyroid axis diagram with the negative feedback loop marked.",
      ],
      markSplit: [
        { part: "Definition and biochemical criteria", marks: 1 },
        { part: "Aetiology", marks: 2 },
        { part: "Clinical features", marks: 2 },
        { part: "Investigations and interpretation", marks: 2 },
        { part: "Management with doses and monitoring", marks: 2 },
        { part: "Pregnancy considerations", marks: 1 },
      ],
      keywords: ["hypothyroidism", "levothyroxine", "TSH", "anti-TPO", "pregnancy", "Hashimoto"],
    },
    {
      id: "endocrine-hypothyroidism-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write short notes on subclinical hypothyroidism.",
      openingLines: [
        "Subclinical hypothyroidism is a serum TSH above the upper limit of the reference range with a normal free T4, in a person without acute illness or interfering medication.",
        "It affects roughly 8% of Indian adults, is commoner in women and with increasing age, and its importance lies in deciding whom to treat, since most people with it are asymptomatic.",
      ],
      answer: [
        {
          heading: "Confirmation before any decision",
          points: [
            "Repeat TSH with free T4 and anti-TPO antibodies after 6-12 weeks; up to a third of raised values normalise spontaneously.",
            "Exclude recovery from acute illness, assay interference including biotin and heterophile antibodies, untreated adrenal insufficiency, and the physiological rise of TSH with age.",
          ],
        },
        {
          heading: "Indications to treat",
          points: [
            "TSH 10 mIU/L or more on two occasions - treat regardless of symptoms.",
            "TSH 4.5-10 mIU/L with pregnancy, planned pregnancy or infertility.",
            "TSH 4.5-10 mIU/L with positive anti-TPO antibodies, a goitre, convincing symptoms, dyslipidaemia, or age under 65 with cardiovascular risk.",
            "Children and adolescents, in whom progression is more likely.",
          ],
        },
        {
          heading: "When not to treat",
          points: [
            "Asymptomatic, antibody-negative adults over 65-70 with a TSH of 4.5-7 mIU/L - the TRUST trial showed no benefit in symptoms or quality of life, and treatment risks atrial fibrillation and fracture.",
            "Monitor instead with TSH and free T4 every 6-12 months, and treat if TSH rises above 10 mIU/L or free T4 falls.",
          ],
        },
        {
          heading: "Treatment and follow-up",
          points: [
            "Levothyroxine 25-50 mcg daily on an empty stomach, titrated by 12.5-25 mcg every 6-8 weeks.",
            "Target TSH 0.5-2.5 mIU/L in younger adults and 4-6 mIU/L in the elderly.",
            "Reassess symptoms after 3-6 months; if there is no benefit and treatment was started for symptoms alone, consider stopping and re-testing.",
          ],
        },
      ],
      mustDraw: ["Decision table of TSH band (4.5-10 versus 10 or more) against age, antibody status and pregnancy, showing treat or monitor."],
      markSplit: [
        { part: "Definition and confirmation", marks: 1 },
        { part: "Indications to treat", marks: 2 },
        { part: "When not to treat, with the evidence", marks: 1 },
        { part: "Dose and monitoring", marks: 1 },
      ],
      keywords: ["subclinical hypothyroidism", "TSH 10", "anti-TPO", "TRUST trial", "levothyroxine"],
    },
    {
      id: "endocrine-hypothyroidism-t3",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "uncommon",
      question: "Write short notes on myxoedema coma.",
      openingLines: [
        "Myxoedema coma is the decompensated end-stage of untreated or undertreated hypothyroidism, characterised by hypothermia, depressed consciousness and multi-organ slowing, with a mortality of 20-40% even with treatment.",
        "It is a clinical diagnosis and treatment must begin before confirmatory thyroid function results are available.",
      ],
      answer: [
        {
          heading: "Precipitants",
          points: [
            "Infection, particularly pneumonia and urinary sepsis; exposure to cold, typically in an elderly woman in winter.",
            "Sedatives, opioids, anaesthesia, amiodarone and lithium.",
            "Stopping levothyroxine, trauma, surgery, stroke, myocardial infarction and gastrointestinal bleeding.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Hypothermia, often below 35 degrees Celsius, with a thermometer that reads low.",
            "Altered consciousness ranging from lethargy to coma, and seizures.",
            "Bradycardia, hypotension, pericardial effusion; hypoventilation with hypercapnic respiratory failure.",
            "Non-pitting oedema, coarse dry skin, macroglossia, ileus and urinary retention.",
            "Laboratory: hyponatraemia, hypoglycaemia, raised creatine kinase, anaemia, and a low-voltage ECG with bradycardia.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Admit to intensive care; secure the airway and ventilate for hypercapnia; monitor core temperature.",
            "Hydrocortisone 100 mg IV 8-hourly, started before or with thyroid hormone, until adrenal insufficiency is excluded.",
            "Levothyroxine 200-400 mcg IV as a loading dose then 50-100 mcg IV daily; where intravenous levothyroxine is unavailable, crushed tablets by nasogastric tube. Liothyronine may be added in specialist settings.",
            "Passive external rewarming with blankets; avoid aggressive active rewarming, which causes vasodilatation and shock.",
            "Cautious isotonic fluids, correction of hypoglycaemia with dextrose, careful management of hyponatraemia, and broad-spectrum antibiotics for the precipitating infection.",
            "Avoid all sedatives and reduce the dose of any drug that is hepatically cleared.",
          ],
        },
      ],
      mustDraw: ["Flow chart: suspected myxoedema coma - ICU, airway, cultures - hydrocortisone 100 mg IV - levothyroxine IV load - passive rewarming and supportive care - treat precipitant."],
      markSplit: [
        { part: "Definition and precipitants", marks: 1 },
        { part: "Clinical and laboratory features", marks: 2 },
        { part: "Management with doses, including the hydrocortisone-first rule", marks: 2 },
      ],
      keywords: ["myxoedema coma", "hypothermia", "hydrocortisone", "levothyroxine IV", "hyponatraemia"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-hypothyroidism-q1",
      stem: "A 34-year-old woman has fatigue and weight gain. TSH is 8.2 mIU/L and free T4 is 1.1 ng/dL (normal 0.8-1.8). Anti-TPO antibody is strongly positive. She is planning a pregnancy in the next few months. What is the most appropriate management?",
      options: [
        "Start levothyroxine 50 mcg daily and recheck TSH in 6-8 weeks",
        "Observe and repeat thyroid function in one year",
        "Start levothyroxine only if TSH exceeds 10 mIU/L",
        "Start combination levothyroxine and liothyronine therapy",
      ],
      answer: 0,
      explanation:
        "This is subclinical hypothyroidism with positive anti-TPO antibodies in a woman planning pregnancy - two independent indications to treat, since antibody positivity predicts progression and maternal hypothyroidism is associated with miscarriage and impaired fetal neurodevelopment. Observation for a year is unsafe when conception is planned. Waiting for TSH to exceed 10 mIU/L ignores the pregnancy and antibody indications, which lower the treatment threshold. Combination T4 and T3 therapy is not recommended routinely and has no place at initiation.",
      difficulty: "easy",
    },
    {
      id: "endocrine-hypothyroidism-q2",
      stem: "A 76-year-old asymptomatic man has TSH 6.4 mIU/L with a normal free T4 on two occasions 3 months apart. Anti-TPO is negative. He has no goitre and no dyslipidaemia. What is the best management?",
      options: [
        "Monitor thyroid function every 6-12 months without starting treatment",
        "Start levothyroxine 25 mcg daily to prevent progression",
        "Start levothyroxine 50 mcg daily and target a TSH below 2.5 mIU/L",
        "Refer for radioiodine uptake scanning",
      ],
      answer: 0,
      explanation:
        "In asymptomatic antibody-negative older adults with a TSH in the 4.5-7 mIU/L range, the TRUST trial found no benefit from levothyroxine in symptoms or quality of life, and treatment risks iatrogenic thyrotoxicosis, atrial fibrillation and fracture, so monitoring is correct; a modest TSH rise is also physiological with age. Starting levothyroxine at either dose exposes him to those harms without benefit, and targeting a TSH below 2.5 mIU/L in a 76-year-old is inappropriate even when treatment is indicated. Uptake scanning has no role in hypothyroidism.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hypothyroidism-q3",
      stem: "A 40-year-old woman with hypothyroidism on levothyroxine 100 mcg daily has a TSH of 22 mIU/L despite claiming perfect adherence. She takes calcium carbonate 500 mg with iron for anaemia every morning along with her thyroxine, and pantoprazole for reflux. What is the most likely explanation?",
      options: [
        "Impaired absorption of levothyroxine from co-administered calcium, iron and a proton pump inhibitor",
        "Development of levothyroxine resistance requiring liothyronine",
        "Progression of Hashimoto thyroiditis requiring a doubling of the dose",
        "Laboratory error in the TSH assay",
      ],
      answer: 0,
      explanation:
        "Calcium and iron bind levothyroxine in the gut and proton pump inhibitors raise gastric pH and reduce its dissolution, so taking all three with the tablet markedly reduces absorption - the fix is to separate them by at least four hours, not to increase the dose. True thyroid hormone resistance is a rare genetic disorder and does not appear in adulthood in this way. Hashimoto progression raises the requirement gradually and would not produce this magnitude of failure on a near-replacement dose. Assay error is a diagnosis of exclusion, and a simple explanation is present.",
      difficulty: "easy",
    },
    {
      id: "endocrine-hypothyroidism-q4",
      stem: "A 28-year-old woman on levothyroxine 75 mcg daily for hypothyroidism tests positive for pregnancy at 6 weeks. Her TSH one month ago was 1.8 mIU/L. What should you advise today?",
      options: [
        "Increase the dose immediately by taking two extra tablets each week and check TSH in 4 weeks",
        "Continue the same dose and check TSH at 20 weeks",
        "Stop levothyroxine as pregnancy increases endogenous thyroid hormone production",
        "Double the dose and check TSH at 12 weeks",
      ],
      answer: 0,
      explanation:
        "Levothyroxine requirements rise by 25-30% early in pregnancy because of increased thyroxine-binding globulin, hCG effects and placental deiodination, so the standard practical instruction is to take two extra tablets each week as soon as pregnancy is confirmed, with TSH monitoring every 4 weeks until mid-gestation. Continuing unchanged risks first-trimester maternal hypothyroidism during critical fetal neurodevelopment. Stopping treatment is dangerous. Doubling the dose over-replaces her and delaying the check to 12 weeks misses the window when adjustment matters most.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hypothyroidism-q5",
      stem: "A 70-year-old woman with known hypothyroidism who stopped her tablets months ago is brought in during winter with a temperature of 34.5 degrees Celsius, pulse 44/min, blood pressure 86/54 mmHg and drowsiness. Sodium is 122 mmol/L. What should be given first?",
      options: [
        "Hydrocortisone 100 mg intravenously, then intravenous levothyroxine",
        "Intravenous levothyroxine 400 mcg, then hydrocortisone if she fails to improve",
        "Active external rewarming with a warming blanket alone",
        "3% hypertonic saline to correct the sodium before any hormone therapy",
      ],
      answer: 0,
      explanation:
        "In myxoedema coma, hydrocortisone is given before or with thyroid hormone because coexisting adrenal insufficiency is common and thyroid hormone increases cortisol clearance, so thyroxine alone can precipitate an adrenal crisis. Giving levothyroxine first inverts this rule. Rewarming is supportive and should be passive, since aggressive active rewarming causes vasodilatation and cardiovascular collapse. The hyponatraemia is dilutional from hypothyroidism and corrects with hormone replacement and cautious fluid management; hypertonic saline is reserved for severe symptomatic hyponatraemia and does not address the underlying crisis.",
      difficulty: "hard",
    },
    {
      id: "endocrine-hypothyroidism-q6",
      stem: "A 55-year-old man admitted with severe pneumonia has thyroid function tests showing TSH 0.3 mIU/L, free T4 0.7 ng/dL (low-normal) and low T3. He has no goitre and no prior thyroid history. What is the most appropriate action?",
      options: [
        "Recognise non-thyroidal illness syndrome, give no thyroid treatment, and repeat the tests 6-8 weeks after recovery",
        "Start levothyroxine 100 mcg daily for central hypothyroidism",
        "Start liothyronine to correct the low T3",
        "Order an urgent MRI of the pituitary",
      ],
      answer: 0,
      explanation:
        "A low T3 with a low-normal T4 and a low or normal TSH in an acutely ill patient is the classic pattern of non-thyroidal illness (sick euthyroid) syndrome, which is an adaptive response and resolves with recovery; the correct step is to withhold treatment and retest after recovery, when a rebound TSH rise may also be seen and should not be misread. Treating with levothyroxine or liothyronine has never been shown to help and may harm. Pituitary imaging is unwarranted without other pituitary hormone deficiencies or clinical suspicion outside the acute illness.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hypothyroidism-q7",
      stem: "A newborn screening programme reports a raised TSH on a dried blood spot taken at 60 hours of life. Confirmatory venous testing at day 6 shows TSH 90 mIU/L with a low free T4. When should levothyroxine be started and at what dose?",
      options: [
        "Immediately, at 10-15 mcg/kg/day",
        "At 3 months of age, at 5 mcg/kg/day, after repeating the test",
        "Only after a thyroid scan has established the aetiology",
        "At 25 mcg/kg/day, tapering after 6 weeks",
      ],
      answer: 0,
      explanation:
        "Congenital hypothyroidism must be treated within the first two weeks of life at 10-15 mcg/kg/day, because every week of delay costs irreversible IQ points; imaging can be done later or in parallel but must never delay treatment. Waiting until 3 months guarantees neurodevelopmental harm. Requiring a scan first is the commonest reason for dangerous delay in practice. A dose of 25 mcg/kg/day is excessive and tapering after 6 weeks misunderstands the condition, which usually requires lifelong therapy with reassessment at around 3 years.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "endocrine-hypothyroidism-c1",
      front: "Biochemical definitions of overt, subclinical and central hypothyroidism",
      back: "Overt: high TSH with low free T4. Subclinical: high TSH with normal free T4. Central: low free T4 with low or inappropriately normal TSH.",
    },
    {
      id: "endocrine-hypothyroidism-c2",
      front: "Full replacement dose of levothyroxine",
      back: "1.6 mcg/kg/day as a single morning dose on an empty stomach; about 100 mcg for a 60 kg adult.",
    },
    {
      id: "endocrine-hypothyroidism-c3",
      front: "Starting dose in the elderly or in coronary artery disease",
      back: "12.5-25 mcg daily, increasing by 12.5-25 mcg every 4-6 weeks, to avoid precipitating angina or arrhythmia.",
    },
    {
      id: "endocrine-hypothyroidism-c4",
      front: "Interval before rechecking TSH after a dose change",
      back: "6-8 weeks - the time to reach a new steady state. Then 6-12 monthly once stable.",
    },
    {
      id: "endocrine-hypothyroidism-c5",
      front: "Drugs and foods that block levothyroxine absorption",
      back: "Calcium, iron, antacids, proton pump inhibitors, sucralfate, cholestyramine and soya - separate by at least 4 hours.",
    },
    {
      id: "endocrine-hypothyroidism-c6",
      front: "When to treat subclinical hypothyroidism",
      back: "TSH 10 mIU/L or more; or TSH 4.5-10 with pregnancy or planned pregnancy, positive anti-TPO, goitre, symptoms, dyslipidaemia, or age under 65 with cardiovascular risk.",
    },
    {
      id: "endocrine-hypothyroidism-c7",
      front: "Levothyroxine adjustment in pregnancy",
      back: "Increase by 25-30% as soon as pregnancy is confirmed - two extra tablets a week - and check TSH every 4 weeks until mid-gestation.",
    },
    {
      id: "endocrine-hypothyroidism-c8",
      front: "Trimester-specific TSH upper limits",
      back: "About 2.5 mIU/L in the first trimester and 3.0 mIU/L in the second and third, where population-specific ranges are unavailable.",
    },
    {
      id: "endocrine-hypothyroidism-c9",
      front: "Congenital hypothyroidism - screening and treatment",
      back: "Heel-prick TSH at 48-72 hours; treat confirmed cases with levothyroxine 10-15 mcg/kg/day within the first 2 weeks of life.",
    },
    {
      id: "endocrine-hypothyroidism-c10",
      front: "Non-thyroidal illness (sick euthyroid) pattern",
      back: "Low T3 first, then low T4, with a low or normal TSH during acute illness, and a rebound TSH rise during recovery. Do not treat; retest after recovery.",
    },
    {
      id: "endocrine-hypothyroidism-c11",
      front: "Myxoedema coma - the drug order",
      back: "Hydrocortisone 100 mg IV 8-hourly BEFORE or with levothyroxine 200-400 mcg IV load, then 50-100 mcg IV daily. Passive rewarming only.",
    },
    {
      id: "endocrine-hypothyroidism-c12",
      front: "NIDDCP salt iodisation standard",
      back: "Iodised salt at 30 ppm at production and not less than 15 ppm at the consumer level; median urinary iodine 100-199 mcg/L indicates iodine sufficiency.",
    },
  ],
  references: [
    "American Thyroid Association Guidelines for the Treatment of Hypothyroidism, 2014",
    "American Thyroid Association Guidelines for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum, 2017",
    "Indian Thyroid Society and FOGSI Good Clinical Practice Recommendations on Thyroid Disorders in Pregnancy",
    "Unnikrishnan AG et al., Prevalence of hypothyroidism in adults: an epidemiological study in eight cities of India, Indian J Endocrinol Metab, 2013",
    "Stott DJ et al., TRUST trial - Thyroid Hormone Therapy for Older Adults with Subclinical Hypothyroidism, NEJM, 2017",
    "National Iodine Deficiency Disorders Control Programme (NIDDCP) operational guidelines, MoHFW",
  ],
});

topics.push({
  id: "endocrine-diabetic-emergencies",
  title: "Diabetic ketoacidosis and hyperosmolar hyperglycaemic state",
  oneLiner:
    "Diabetic ketoacidosis is the triad of hyperglycaemia (usually above 250 mg/dL), ketonaemia or ketonuria and metabolic acidosis with pH below 7.3 or bicarbonate below 18 mmol/L, while the hyperosmolar hyperglycaemic state is marked hyperglycaemia (usually above 600 mg/dL) with effective osmolality above 320 mOsm/kg and minimal ketosis; both are treated with fluid first, then insulin, with potassium replacement and a hunt for the precipitant.",
  frequency: "common",
  keywords: [
    "DKA",
    "HHS",
    "ketoacidosis",
    "anion gap",
    "beta-hydroxybutyrate",
    "normal saline",
    "insulin infusion",
    "potassium replacement",
    "cerebral oedema",
    "euglycaemic DKA",
    "SGLT2 inhibitor",
    "mucormycosis",
    "Kussmaul breathing",
  ],
  sections: [
    {
      heading: "Diagnosis and severity",
      points: [
        "**DKA diagnostic triad:** blood glucose above 250 mg/dL (may be lower or normal in euglycaemic DKA), **ketonaemia** (blood beta-hydroxybutyrate 3.0 mmol/L or more, or 2+ or more urine ketones) and **metabolic acidosis** with venous pH below 7.30 or bicarbonate below 18 mmol/L, with a raised anion gap.",
        "**Severity of DKA:** mild - pH 7.25-7.30, bicarbonate 15-18, alert; moderate - pH 7.00-7.24, bicarbonate 10-15, drowsy; severe - pH below 7.00, bicarbonate below 10, stupor or coma.",
        "**HHS criteria:** glucose usually above 600 mg/dL, **effective serum osmolality above 320 mOsm/kg**, pH above 7.30 with bicarbonate above 18 mmol/L, minimal or no ketosis, and profound dehydration with altered sensorium. Mortality is 5-20%, much higher than DKA's 1-5%.",
        "**Effective osmolality = 2 x sodium (mmol/L) + glucose (mg/dL)/18.** Do not include urea, which crosses cell membranes freely and does not contribute to effective tonicity.",
        "**Anion gap = sodium - (chloride + bicarbonate)**, normal 8-12 mmol/L. **Corrected sodium** adds 1.6 mmol/L for every 100 mg/dL of glucose above 100 mg/dL - a normal measured sodium in marked hyperglycaemia actually means significant hypernatraemia and severe water deficit.",
        "Mixed DKA and HHS pictures are common in Indian practice, particularly in elderly type 2 patients with sepsis, and are managed as DKA with attention to the osmolar deficit.",
      ],
    },
    {
      heading: "Precipitants - find them or the patient relapses",
      points: [
        "**Infection is the commonest precipitant in India:** urinary tract infection, pneumonia, skin and soft-tissue infection, dental abscess, and tuberculosis. Fever may be absent, and hypothermia is a bad sign.",
        "**Omission of insulin** - because of cost, fasting, a religious observance, an intercurrent illness, or a belief that insulin is unnecessary when not eating - is the second commonest, and is the leading cause in the young.",
        "**New-onset type 1 diabetes** presenting in DKA, and ketosis-prone type 2 diabetes.",
        "**Drugs:** corticosteroids, thiazides, atypical antipsychotics, sympathomimetics, and **SGLT2 inhibitors causing euglycaemic DKA**.",
        "**Vascular and other stress:** myocardial infarction (often silent), stroke, pancreatitis, trauma, surgery, and pregnancy.",
        "**Euglycaemic DKA** occurs with glucose below 250 mg/dL in patients on SGLT2 inhibitors, in pregnancy, in prolonged fasting and with heavy alcohol use - check ketones on the merits of the acidosis, not on the glucose value, or the diagnosis will be missed.",
      ],
    },
    {
      heading: "Fluids - the first and most important treatment",
      points: [
        "**Start 0.9% sodium chloride 1 litre over the first hour** (15-20 mL/kg/hour), and give a second litre in the first 1-2 hours if the patient is shocked. The typical adult fluid deficit is **5-7 litres in DKA and 8-10 litres in HHS**.",
        "After the first hour, assess the **corrected sodium**: if it is normal or high, continue with **0.45% saline at 250-500 mL/hour**; if it is low, continue with **0.9% saline at 250-500 mL/hour**.",
        "**Change to 5% dextrose with 0.45% saline when glucose falls to 200-250 mg/dL in DKA** (or to 250-300 mg/dL in HHS) and continue the insulin infusion - the acidosis, not the glucose, is what is being treated.",
        "In HHS, correct the osmolality more slowly: aim for a **fall in glucose of 50-75 mg/dL per hour** and a fall in effective osmolality of no more than **3-8 mOsm/kg per hour**, to avoid cerebral oedema.",
        "Adjust for **heart failure, renal failure and the elderly** with smaller boluses and closer monitoring, ideally with hourly urine output and, where available, central venous assessment.",
      ],
    },
    {
      heading: "Insulin and potassium",
      points: [
        "**Do not start insulin until the serum potassium is known and is above 3.3 mmol/L** - insulin drives potassium into cells and can cause fatal arrhythmia in an unrecognised hypokalaemia. If potassium is below 3.3 mmol/L, replace it first at 20-40 mmol/hour and delay insulin.",
        "**Insulin regimen:** regular insulin **0.1 units/kg intravenous bolus followed by 0.1 units/kg/hour infusion**, or 0.14 units/kg/hour infusion with no bolus. Aim for a glucose fall of 50-75 mg/dL per hour; if the fall is less than 10% in the first hour, double the rate.",
        "**Potassium replacement:** if potassium is 3.3-5.2 mmol/L, add **20-30 mmol of potassium chloride to each litre of fluid** to keep it at 4-5 mmol/L; if above 5.2 mmol/L, withhold potassium and recheck in 2 hours. Total body potassium is always depleted even when the serum value looks normal or high.",
        "**Bicarbonate is not given** unless pH is below 6.9, when 100 mmol of sodium bicarbonate in 400 mL of water with 20 mmol potassium chloride may be infused over 2 hours; it worsens intracellular acidosis, hypokalaemia and cerebral oedema.",
        "**Phosphate is not replaced routinely**; give it only for a phosphate below 1.0 mg/dL with cardiac or respiratory depression, muscle weakness or haemolysis, and monitor calcium.",
        "**Where an infusion pump is unavailable**, hourly intramuscular regular insulin (0.1 units/kg IM hourly after a 0.1 units/kg IV plus 0.1 units/kg IM loading dose) is an acceptable and well-validated alternative for mild to moderate DKA - a genuinely useful point in a resource-limited Indian setting.",
      ],
    },
    {
      heading: "Monitoring, resolution and transition",
      points: [
        "Monitor **capillary glucose hourly**, and electrolytes, urea, creatinine and venous blood gas every 2-4 hours until resolution; monitor urine output, conscious level and cardiac rhythm.",
        "**Track resolution by the anion gap and beta-hydroxybutyrate, not by the glucose** - glucose falls first and can mislead you into stopping insulin while ketogenesis continues.",
        "**Criteria for resolution of DKA:** glucose below 200 mg/dL plus **two of** bicarbonate 15 mmol/L or more, venous pH above 7.30, and anion gap 12 mmol/L or less. For HHS: normal osmolality and restored mental status.",
        "**Transition:** give subcutaneous basal insulin (or the patient's usual dose) and **overlap the intravenous infusion for 1-2 hours** before stopping it - stopping the infusion without an overlap is the commonest cause of rebound ketoacidosis on the ward.",
        "Once eating, start a basal bolus regimen at 0.5-0.8 units/kg/day; in a previously known type 2 patient, oral agents may be resumed once the acute illness has settled.",
        "Before discharge: identify and treat the precipitant, teach **sick-day rules**, ensure a supply of insulin and strips, confirm injection technique, and arrange follow-up within a week.",
      ],
    },
    {
      heading: "Complications and the Indian tail",
      points: [
        "**Cerebral oedema** is the feared complication in children and adolescents, appearing 4-12 hours into treatment with headache, falling conscious level, bradycardia and hypertension; treat with **mannitol 0.5-1 g/kg IV** or 3% saline, reduce the fluid rate, and it carries high mortality. Prevention is by avoiding overly rapid correction of glucose and osmolality.",
        "**Hypokalaemia and hypoglycaemia** are the commonest iatrogenic complications and both are avoidable by protocol adherence.",
        "**Rhino-orbito-cerebral mucormycosis** must be actively looked for in any diabetic with ketoacidosis and facial pain, nasal blockage, black nasal crusting, orbital swelling, proptosis or a palatal eschar - this became far more visible during the COVID-19 pandemic in India and is a same-hour ENT and ophthalmology referral for biopsy, liposomal amphotericin B and surgical debridement.",
        "**Emphysematous pyelonephritis and emphysematous cholecystitis**, malignant otitis externa, and necrotising fasciitis are diabetic-specific infections that both precipitate and complicate DKA.",
        "**Acute kidney injury, aspiration pneumonia, venous thromboembolism and acute respiratory distress syndrome** complicate HHS in particular; consider thromboprophylaxis in HHS given the extreme hyperosmolality.",
        "Recurrent DKA in a young patient is a **psychosocial diagnosis** until proved otherwise: insulin omission driven by cost, eating disorder, depression or family conflict - address that, or the patient returns.",
      ],
    },
  ],
  tables: [
    {
      heading: "DKA versus HHS at a glance",
      columns: ["Feature", "DKA", "HHS"],
      rows: [
        ["Typical patient", "Type 1 or ketosis-prone, younger", "Type 2, elderly, often with sepsis"],
        ["Onset", "Hours to 1-2 days", "Days to weeks"],
        ["Glucose", "Usually above 250 mg/dL (may be normal in euglycaemic DKA)", "Usually above 600 mg/dL"],
        ["Ketones", "Strongly positive; beta-hydroxybutyrate 3.0 mmol/L or more", "Absent or trace"],
        ["pH and bicarbonate", "pH below 7.30, bicarbonate below 18 mmol/L", "pH above 7.30, bicarbonate above 18 mmol/L"],
        ["Effective osmolality", "Variable, often below 320 mOsm/kg", "Above 320 mOsm/kg"],
        ["Fluid deficit", "5-7 litres", "8-10 litres"],
        ["Mortality", "1-5%", "5-20%"],
      ],
    },
    {
      heading: "Hour-by-hour management of DKA in an adult",
      columns: ["Time", "Fluid", "Insulin", "Potassium", "Monitoring"],
      rows: [
        ["Hour 0-1", "0.9% saline 1 L over 1 hour (repeat if shocked)", "Check K first; then regular insulin 0.1 units/kg IV bolus, then 0.1 units/kg/hour infusion", "Hold insulin if K below 3.3 mmol/L; replace at 20-40 mmol/hour", "Glucose hourly; VBG, electrolytes, ketones, ECG, cultures, chest X-ray"],
        ["Hour 1-6", "0.45% saline 250-500 mL/hour if corrected Na normal or high; 0.9% if low", "Continue infusion; double the rate if glucose falls under 10% in an hour", "20-30 mmol KCl per litre to keep K 4-5 mmol/L", "Glucose hourly; electrolytes and VBG every 2-4 hours"],
        ["Glucose reaches 200-250 mg/dL", "Add 5% dextrose with 0.45% saline", "Reduce infusion to 0.02-0.05 units/kg/hour; do not stop", "Continue as above", "Track the anion gap and beta-hydroxybutyrate, not the glucose"],
        ["Resolution", "Continue maintenance fluid until eating", "Give subcutaneous basal insulin and overlap the infusion by 1-2 hours", "Continue oral or IV replacement as needed", "Confirm bicarbonate 15 or more, pH above 7.30, anion gap 12 or less"],
      ],
    },
  ],
  redFlags: [
    "Glucose above 250 mg/dL with vomiting, abdominal pain, deep sighing (Kussmaul) breathing or a fruity breath - check ketones and a venous gas immediately and admit.",
    "Serum potassium below 3.3 mmol/L before insulin is started - replace potassium first; giving insulin now can cause fatal arrhythmia.",
    "Headache, falling conscious level, bradycardia or a rising blood pressure 4-12 hours into DKA treatment in a child or adolescent - cerebral oedema; give mannitol and slow the fluids.",
    "Facial or orbital pain, nasal blockage, black nasal crusting, proptosis or a palatal eschar in a ketoacidotic diabetic - rhino-orbito-cerebral mucormycosis; same-hour ENT and ophthalmology referral.",
    "Ketoacidosis with a normal or near-normal glucose in a patient on an SGLT2 inhibitor - euglycaemic DKA; stop the drug, and treat with insulin plus dextrose-containing fluid.",
    "Persistent hypotension after 3-4 litres of fluid, or hypothermia - suspect sepsis or myocardial infarction as the precipitant and escalate to intensive care.",
    "Recurrent DKA in a young person - look for insulin omission from cost, an eating disorder, or depression, and involve social support before discharge.",
  ],
  pearls: [
    "Fluid before insulin, and potassium before insulin - the order of the first three actions in DKA answers most of the question.",
    "Never give insulin if the potassium is below 3.3 mmol/L; replace potassium first.",
    "Follow the anion gap and beta-hydroxybutyrate, not the glucose - glucose normalises long before ketogenesis stops.",
    "When the glucose reaches 200-250 mg/dL, add dextrose to the fluid and keep the insulin running; do not stop the insulin.",
    "Always overlap subcutaneous basal insulin with the infusion for 1-2 hours before stopping the drip, or the patient rebounds into ketoacidosis.",
    "Bicarbonate is reserved for pH below 6.9 and does more harm than good above it.",
    "Corrected sodium rises by 1.6 mmol/L for every 100 mg/dL of glucose above 100 - a normal measured sodium in a glucose of 700 mg/dL means real hypernatraemia.",
    "Where there is no infusion pump, hourly intramuscular regular insulin is a validated alternative in mild to moderate DKA - a peripheral hospital can still treat this correctly.",
  ],
  theory: [
    {
      id: "endocrine-diabetic-emergencies-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "A 22-year-old man is brought to your clinic with vomiting, abdominal pain and drowsiness. Capillary glucose is 468 mg/dL and urine ketones are 3+. Define diabetic ketoacidosis, discuss its precipitating factors, and describe your management including monitoring and complications.",
      openingLines: [
        "Diabetic ketoacidosis is an acute metabolic emergency caused by absolute or relative insulin deficiency with a counter-regulatory hormone excess, defined by the triad of hyperglycaemia (usually above 250 mg/dL), ketonaemia or ketonuria, and a high anion gap metabolic acidosis with venous pH below 7.30 or bicarbonate below 18 mmol/L.",
        "This young man has hyperglycaemia with heavy ketonuria and impaired consciousness, and must be treated as severe DKA pending a venous blood gas, electrolytes and beta-hydroxybutyrate.",
      ],
      answer: [
        {
          heading: "1. Definition and severity grading",
          points: [
            "Triad: glucose above 250 mg/dL, ketonaemia (beta-hydroxybutyrate 3.0 mmol/L or more) or ketonuria of 2+ or more, and metabolic acidosis with pH below 7.30 or bicarbonate below 18 mmol/L with a raised anion gap.",
            "Mild: pH 7.25-7.30, bicarbonate 15-18, alert. Moderate: pH 7.00-7.24, bicarbonate 10-15, drowsy. Severe: pH below 7.00, bicarbonate below 10, stupor or coma.",
            "Euglycaemic DKA, with a glucose below 250 mg/dL, occurs with SGLT2 inhibitors, in pregnancy, in starvation and with alcohol.",
          ],
        },
        {
          heading: "2. Precipitating factors",
          points: [
            "Infection - urinary, respiratory, skin and soft tissue, dental, tuberculosis - the commonest precipitant in India.",
            "Omission or interruption of insulin, including for cost, fasting or intercurrent illness.",
            "First presentation of type 1 or ketosis-prone diabetes.",
            "Drugs: corticosteroids, thiazides, atypical antipsychotics, sympathomimetics and SGLT2 inhibitors.",
            "Acute vascular and surgical stress: myocardial infarction, stroke, pancreatitis, trauma, surgery and pregnancy.",
          ],
        },
        {
          heading: "3. Initial assessment and investigations",
          points: [
            "Airway, breathing, circulation; conscious level by GCS; hydration, blood pressure, pulse, temperature and respiratory pattern.",
            "Immediate tests: capillary and venous glucose, venous blood gas, serum electrolytes with potassium, urea and creatinine, blood ketones, complete blood count, urinalysis and culture, ECG, and chest radiograph.",
            "Calculate the anion gap, the effective osmolality and the corrected sodium.",
            "Search for the precipitant clinically, including a full skin, foot, dental and ENT examination.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Fluids first: 0.9% sodium chloride 1 litre over the first hour (15-20 mL/kg), then 250-500 mL/hour, choosing 0.45% saline if the corrected sodium is normal or high and 0.9% if it is low.",
            "Potassium: check before insulin. If below 3.3 mmol/L, replace at 20-40 mmol/hour and delay insulin. If 3.3-5.2 mmol/L, add 20-30 mmol KCl to each litre. If above 5.2 mmol/L, withhold and recheck in 2 hours.",
            "Insulin: regular insulin 0.1 units/kg IV bolus then 0.1 units/kg/hour infusion (or 0.14 units/kg/hour with no bolus); target a glucose fall of 50-75 mg/dL per hour and double the rate if the fall is under 10% in the first hour. Where no pump is available, hourly intramuscular regular insulin is acceptable.",
            "When glucose reaches 200-250 mg/dL, add 5% dextrose to the fluid and reduce the insulin to 0.02-0.05 units/kg/hour, continuing until the anion gap closes.",
            "Bicarbonate only if pH is below 6.9: 100 mmol in 400 mL water with 20 mmol KCl over 2 hours. Phosphate only for severe hypophosphataemia with cardiac or respiratory compromise.",
            "Treat the precipitant: antibiotics for infection, and thromboprophylaxis where indicated.",
          ],
        },
        {
          heading: "5. Monitoring, resolution and transition",
          points: [
            "Hourly capillary glucose, hourly urine output, and electrolytes with venous gas every 2-4 hours; cardiac monitoring for hypokalaemia.",
            "Resolution: glucose below 200 mg/dL with two of bicarbonate 15 mmol/L or more, venous pH above 7.30, and anion gap 12 mmol/L or less.",
            "Transition to subcutaneous basal bolus insulin at 0.5-0.8 units/kg/day once eating, overlapping the intravenous infusion by 1-2 hours.",
            "Before discharge: identify the precipitant, teach sick-day rules, confirm insulin supply and technique, and arrange review within a week.",
          ],
        },
        {
          heading: "6. Complications",
          points: [
            "Iatrogenic: hypokalaemia, hypoglycaemia, fluid overload and hyperchloraemic acidosis.",
            "Cerebral oedema, mainly in children and adolescents 4-12 hours into treatment - treat with mannitol 0.5-1 g/kg IV and slow the fluids.",
            "Aspiration pneumonia, acute kidney injury, venous thromboembolism and acute respiratory distress syndrome.",
            "Rhino-orbito-cerebral mucormycosis, which must be actively excluded in any ketoacidotic diabetic with facial or nasal symptoms.",
          ],
        },
      ],
      mustDraw: [
        "Hour-by-hour DKA management table: time, fluid, insulin, potassium, monitoring.",
        "Comparison table of DKA versus HHS.",
      ],
      markSplit: [
        { part: "Definition and severity grading", marks: 1 },
        { part: "Precipitating factors", marks: 1 },
        { part: "Initial assessment and investigations", marks: 2 },
        { part: "Fluid, insulin and potassium management with doses", marks: 4 },
        { part: "Monitoring, resolution criteria and complications", marks: 2 },
      ],
      keywords: ["DKA", "anion gap", "potassium before insulin", "0.9% saline", "cerebral oedema"],
    },
    {
      id: "endocrine-diabetic-emergencies-t2",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Differentiate between diabetic ketoacidosis and the hyperosmolar hyperglycaemic state, and outline how their management differs.",
      openingLines: [
        "Both are acute hyperglycaemic emergencies of diabetes, but DKA results from an absolute insulin deficiency with unrestrained ketogenesis, while HHS results from a relative insulin deficiency sufficient to suppress ketogenesis but not hepatic glucose output, producing extreme hyperglycaemia and hyperosmolality.",
        "The distinction matters because HHS has a far greater fluid deficit, a much higher mortality, and requires slower correction of osmolality.",
      ],
      answer: [
        {
          heading: "Points of difference",
          points: [
            "Patient: DKA in type 1 or ketosis-prone younger patients; HHS in elderly type 2 patients, often with sepsis, stroke or dementia and poor access to water.",
            "Onset: DKA over hours to a day or two; HHS insidiously over days to weeks.",
            "Glucose: DKA usually above 250 mg/dL and may be normal in euglycaemic DKA; HHS usually above 600 mg/dL.",
            "Ketones and acid-base: DKA has heavy ketonaemia with pH below 7.30 and bicarbonate below 18 mmol/L; HHS has minimal ketones with pH above 7.30 and bicarbonate above 18 mmol/L.",
            "Osmolality: variable in DKA; above 320 mOsm/kg in HHS, which is what produces the altered sensorium.",
            "Fluid deficit and mortality: 5-7 litres and 1-5% in DKA; 8-10 litres and 5-20% in HHS.",
          ],
        },
        {
          heading: "How management differs",
          points: [
            "Both begin with 0.9% saline and both need potassium checked before insulin, with 20-30 mmol added per litre once potassium is 3.3-5.2 mmol/L.",
            "HHS needs larger volumes given more slowly, with a target fall in effective osmolality of no more than 3-8 mOsm/kg per hour to avoid cerebral oedema.",
            "Insulin can be started at a lower rate in HHS, or after the first hour of fluid alone, since much of the glucose falls with rehydration; the infusion is titrated to a glucose fall of 50-75 mg/dL per hour.",
            "Dextrose is added at a glucose of 200-250 mg/dL in DKA and 250-300 mg/dL in HHS.",
            "Endpoint differs: closure of the anion gap in DKA, normalisation of osmolality and mental state in HHS.",
            "HHS carries a higher risk of thrombosis, so prophylactic anticoagulation should be considered.",
          ],
        },
      ],
      mustDraw: ["Two-column comparison table of DKA and HHS across patient, onset, glucose, ketones, pH, osmolality, fluid deficit and mortality."],
      markSplit: [
        { part: "Comparison table", marks: 3 },
        { part: "Differences in management", marks: 2 },
      ],
      keywords: ["DKA", "HHS", "effective osmolality", "fluid deficit", "mortality"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-diabetic-emergencies-q1",
      stem: "A 19-year-old with newly suspected type 1 diabetes has glucose 430 mg/dL, pH 7.08, bicarbonate 8 mmol/L, ketones 3+ and serum potassium 3.0 mmol/L. What should be done first?",
      options: [
        "Give intravenous fluids with potassium chloride replacement and delay insulin until potassium is above 3.3 mmol/L",
        "Start an insulin infusion at 0.1 units/kg/hour immediately",
        "Give sodium bicarbonate 100 mmol over 2 hours because the pH is below 7.1",
        "Give an insulin bolus of 0.1 units/kg and then reassess the potassium",
      ],
      answer: 0,
      explanation:
        "Insulin drives potassium intracellularly, so starting it when the potassium is already below 3.3 mmol/L can precipitate fatal arrhythmia and respiratory muscle weakness; fluids with potassium replacement at 20-40 mmol/hour come first, and insulin is delayed until potassium exceeds 3.3 mmol/L. Starting an infusion or a bolus now is the classic fatal error. Bicarbonate is reserved for pH below 6.9 and would worsen the hypokalaemia here.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetic-emergencies-q2",
      stem: "During treatment of DKA the glucose falls from 480 to 220 mg/dL after 5 hours. The venous pH is 7.18, bicarbonate 12 mmol/L and the anion gap is 22 mmol/L. What is the correct next step?",
      options: [
        "Add 5% dextrose to the intravenous fluid and continue the insulin infusion at a reduced rate",
        "Stop the insulin infusion because the glucose has normalised",
        "Stop the insulin infusion and give subcutaneous insulin only",
        "Give sodium bicarbonate to correct the persistent acidosis",
      ],
      answer: 0,
      explanation:
        "The anion gap remains wide and the acidosis unresolved, meaning ketogenesis is continuing; insulin must continue and dextrose is added to the fluid so that insulin can be given safely without causing hypoglycaemia. Stopping the insulin at this point, in either form, allows ketogenesis to resume and is the commonest ward error. Bicarbonate is not indicated above a pH of 6.9 and does not address ongoing ketone production.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetic-emergencies-q3",
      stem: "A 68-year-old man with type 2 diabetes and a chest infection has glucose 780 mg/dL, sodium 148 mmol/L, urea 76 mg/dL, pH 7.36, bicarbonate 22 mmol/L and trace urine ketones. He is confused. What is the calculated effective serum osmolality and the diagnosis?",
      options: [
        "About 339 mOsm/kg - hyperosmolar hyperglycaemic state",
        "About 366 mOsm/kg - diabetic ketoacidosis",
        "About 296 mOsm/kg - simple hyperglycaemia without an emergency",
        "About 339 mOsm/kg - mixed DKA and HHS requiring bicarbonate",
      ],
      answer: 0,
      explanation:
        "Effective osmolality is 2 x sodium plus glucose divided by 18, giving 296 plus 43, about 339 mOsm/kg; urea is excluded because it crosses membranes freely and does not contribute to effective tonicity. With a normal pH, a normal bicarbonate, minimal ketones and osmolality above 320 mOsm/kg, this is HHS, not DKA. The option quoting 366 wrongly includes urea and also misnames the syndrome. Calling it simple hyperglycaemia ignores the confusion and the osmolality, and bicarbonate has no role when the pH is normal.",
      difficulty: "hard",
    },
    {
      id: "endocrine-diabetic-emergencies-q4",
      stem: "A 12-year-old girl being treated for DKA becomes drowsy 8 hours after admission with a headache, pulse falling from 118 to 62/min and blood pressure rising. Her glucose is 210 mg/dL. What is the most likely diagnosis and immediate treatment?",
      options: [
        "Cerebral oedema - give mannitol 0.5-1 g/kg intravenously and reduce the fluid rate",
        "Hypoglycaemia - give 25% dextrose intravenously",
        "Hypokalaemia - give potassium chloride 40 mmol intravenously",
        "Sepsis - give broad-spectrum antibiotics and a fluid bolus",
      ],
      answer: 0,
      explanation:
        "Headache with a falling conscious level, bradycardia and rising blood pressure (the Cushing response) 4-12 hours into DKA treatment in a child is cerebral oedema, and immediate mannitol or hypertonic saline with a reduction in the fluid rate is required. The glucose of 210 mg/dL excludes hypoglycaemia. Hypokalaemia causes weakness and arrhythmia, not a Cushing response. Sepsis would give tachycardia and hypotension, the opposite haemodynamic pattern, and a fluid bolus would worsen cerebral oedema.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetic-emergencies-q5",
      stem: "A 52-year-old woman on metformin and empagliflozin presents 3 days after a laparoscopic cholecystectomy with vomiting and rapid breathing. Glucose is 184 mg/dL, pH 7.14, bicarbonate 10 mmol/L, anion gap 26 mmol/L and blood ketones 4.8 mmol/L. What is the diagnosis?",
      options: [
        "Euglycaemic diabetic ketoacidosis precipitated by the SGLT2 inhibitor and surgery",
        "Lactic acidosis from metformin",
        "Hyperosmolar hyperglycaemic state",
        "Starvation ketosis, which requires no specific treatment",
      ],
      answer: 0,
      explanation:
        "A high anion gap acidosis with blood ketones of 4.8 mmol/L in a patient on an SGLT2 inhibitor after surgery is euglycaemic DKA, in which glucose is below 250 mg/dL because glycosuria continues; the drug is stopped and treatment is insulin with dextrose-containing fluid. Metformin-associated lactic acidosis does not raise ketones to this level and would show a high lactate. HHS is defined by very high glucose and osmolality without significant ketosis. Starvation ketosis rarely produces this degree of acidosis and never justifies inaction with a pH of 7.14.",
      difficulty: "hard",
    },
    {
      id: "endocrine-diabetic-emergencies-q6",
      stem: "In a primary health centre with no infusion pump, a patient with moderate DKA (pH 7.15, glucose 420 mg/dL, potassium 4.4 mmol/L) needs insulin while transfer is arranged. What is an acceptable regimen?",
      options: [
        "Regular insulin 0.1 units/kg IV plus 0.1 units/kg IM as a loading dose, then 0.1 units/kg intramuscularly every hour",
        "Premixed 30/70 insulin 20 units subcutaneously every 6 hours",
        "Glargine 30 units subcutaneously and oral fluids",
        "No insulin until an infusion pump is available at the referral hospital",
      ],
      answer: 0,
      explanation:
        "Hourly intramuscular regular insulin after a combined intravenous and intramuscular loading dose is a validated alternative to an infusion in mild and moderate DKA and is the correct answer for a resource-limited setting. Subcutaneous premixed insulin has erratic absorption in a dehydrated, acidotic patient and does not deliver the steady low-dose insulin required. Basal analogue alone will not suppress ketogenesis acutely. Withholding insulin during transfer allows the acidosis to deepen and is unacceptable.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetic-emergencies-q7",
      stem: "A 45-year-old man recovering from DKA develops left-sided facial pain, nasal blockage and a black crust in the left nostril on day 3. What is the immediate priority?",
      options: [
        "Urgent ENT and ophthalmology referral for nasal endoscopy and biopsy, with liposomal amphotericin B started on suspicion",
        "Nasal decongestants and a course of oral amoxicillin-clavulanate",
        "CT of the paranasal sinuses in the outpatient department next week",
        "Reassure that black crusting is a common effect of nasal oxygen",
      ],
      answer: 0,
      explanation:
        "Facial pain with nasal blockage and a black eschar in a ketoacidotic diabetic is rhino-orbito-cerebral mucormycosis, which spreads angioinvasively within hours; endoscopy with biopsy, urgent imaging, immediate liposomal amphotericin B and surgical debridement are required, and treatment must start on suspicion rather than after confirmation. Antibiotics do not treat mucormycosis. Deferring imaging by a week or dismissing the crust as an oxygen effect are both fatal delays.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "endocrine-diabetic-emergencies-c1",
      front: "The diagnostic triad of DKA",
      back: "Glucose usually above 250 mg/dL, ketonaemia (beta-hydroxybutyrate 3.0 mmol/L or more) or ketonuria, and metabolic acidosis with pH below 7.30 or bicarbonate below 18 mmol/L with a raised anion gap.",
    },
    {
      id: "endocrine-diabetic-emergencies-c2",
      front: "Diagnostic criteria for HHS",
      back: "Glucose usually above 600 mg/dL, effective osmolality above 320 mOsm/kg, pH above 7.30 and bicarbonate above 18 mmol/L, minimal ketones, altered sensorium.",
    },
    {
      id: "endocrine-diabetic-emergencies-c3",
      front: "Formula for effective serum osmolality",
      back: "2 x sodium (mmol/L) + glucose (mg/dL)/18. Urea is excluded because it crosses cell membranes freely.",
    },
    {
      id: "endocrine-diabetic-emergencies-c4",
      front: "Corrected sodium in hyperglycaemia",
      back: "Add 1.6 mmol/L to the measured sodium for every 100 mg/dL of glucose above 100 mg/dL.",
    },
    {
      id: "endocrine-diabetic-emergencies-c5",
      front: "The potassium rule before insulin in DKA",
      back: "Below 3.3 mmol/L - replace potassium first and delay insulin. 3.3-5.2 - add 20-30 mmol KCl per litre. Above 5.2 - withhold potassium and recheck in 2 hours.",
    },
    {
      id: "endocrine-diabetic-emergencies-c6",
      front: "Insulin regimen in DKA",
      back: "Regular insulin 0.1 units/kg IV bolus then 0.1 units/kg/hour infusion, or 0.14 units/kg/hour with no bolus; aim for a glucose fall of 50-75 mg/dL per hour.",
    },
    {
      id: "endocrine-diabetic-emergencies-c7",
      front: "When is bicarbonate given in DKA?",
      back: "Only if pH is below 6.9: 100 mmol in 400 mL water with 20 mmol KCl over 2 hours. Above that it worsens intracellular acidosis, hypokalaemia and cerebral oedema.",
    },
    {
      id: "endocrine-diabetic-emergencies-c8",
      front: "Criteria for resolution of DKA",
      back: "Glucose below 200 mg/dL plus two of: bicarbonate 15 mmol/L or more, venous pH above 7.30, anion gap 12 mmol/L or less.",
    },
    {
      id: "endocrine-diabetic-emergencies-c9",
      front: "Transition from infusion to subcutaneous insulin",
      back: "Give subcutaneous basal insulin and overlap the intravenous infusion for 1-2 hours before stopping it, otherwise ketoacidosis rebounds.",
    },
    {
      id: "endocrine-diabetic-emergencies-c10",
      front: "Euglycaemic DKA - who gets it",
      back: "Patients on SGLT2 inhibitors, in pregnancy, in prolonged fasting and with heavy alcohol use. Glucose is below 250 mg/dL, so check ketones on the acidosis, not the glucose.",
    },
    {
      id: "endocrine-diabetic-emergencies-c11",
      front: "Cerebral oedema in DKA - timing, signs and treatment",
      back: "4-12 hours into treatment, mostly in children: headache, falling consciousness, bradycardia, rising blood pressure. Mannitol 0.5-1 g/kg IV or 3% saline, and slow the fluids.",
    },
    {
      id: "endocrine-diabetic-emergencies-c12",
      front: "Fluid deficit and mortality in DKA versus HHS",
      back: "DKA 5-7 litres, mortality 1-5%. HHS 8-10 litres, mortality 5-20%.",
    },
  ],
  references: [
    "Kitabchi AE et al., Hyperglycemic Crises in Adult Patients with Diabetes, ADA consensus statement, Diabetes Care",
    "American Diabetes Association, Standards of Care in Diabetes, 2025 - Diabetes Care in the Hospital",
    "Joint British Diabetes Societies (JBDS-IP) guideline for the management of diabetic ketoacidosis in adults, 2023",
    "RSSDI Clinical Practice Recommendations for the Management of Type 2 Diabetes Mellitus, 2022",
    "ICMR Guidelines on the Management of Mucormycosis, 2021",
  ],
});

topics.push({
  id: "endocrine-hyperthyroidism-nodule",
  title: "Hyperthyroidism and the thyroid nodule",
  oneLiner:
    "Thyrotoxicosis is suspected from weight loss despite a good appetite, palpitation, heat intolerance and tremor, confirmed by a suppressed TSH with a raised free T4 or free T3, and treated by cause - carbimazole with beta-blockade for Graves disease, symptomatic care for thyroiditis - while a discrete thyroid nodule is worked up with TSH, ultrasound and fine-needle aspiration reported by the Bethesda system.",
  frequency: "common",
  keywords: [
    "thyrotoxicosis",
    "hyperthyroidism",
    "Graves disease",
    "carbimazole",
    "methimazole",
    "propylthiouracil",
    "propranolol",
    "radioiodine",
    "I-131",
    "thyroid storm",
    "Burch-Wartofsky",
    "TRAb",
    "toxic multinodular goitre",
    "toxic adenoma",
    "subacute thyroiditis",
    "de Quervain",
    "thyroid nodule",
    "FNAC",
    "Bethesda",
    "TIRADS",
    "papillary carcinoma",
    "NIDDCP",
    "goitre",
    "amiodarone-induced thyrotoxicosis",
    "subclinical hyperthyroidism",
  ],
  sections: [
    {
      heading: "Recognising thyrotoxicosis",
      points: [
        "The classic story is **weight loss despite an increased appetite**, palpitation, heat intolerance, excessive sweating, fine tremor, anxiety, insomnia, frequent loose stools and, in women, oligomenorrhoea - a combination that is often mislabelled as anxiety disorder for months before a TSH is sent.",
        "On examination look for a **resting tachycardia that persists in sleep**, a wide pulse pressure, warm moist palms, a fine outstretched tremor, proximal muscle weakness on standing from a squat, lid lag and lid retraction, and a goitre with or without a bruit.",
        "**Elderly patients present apathetically**: isolated atrial fibrillation, unexplained weight loss, heart failure or simple failure to thrive, with none of the adrenergic signs - so check a TSH in every new atrial fibrillation and in every older patient losing weight.",
        "**Eye signs specific to Graves disease** are proptosis, periorbital oedema, chemosis, conjunctival injection and restricted upgaze from an infiltrative orbitopathy; lid retraction and lid lag are adrenergic and occur in thyrotoxicosis of any cause, which is the distinction examiners ask for.",
        "**Pretibial myxoedema** (a raised, non-pitting, orange-peel plaque over the shins) and **thyroid acropachy** (clubbing with periosteal new bone) are rare but pathognomonic of Graves disease and worth a mark when described.",
        "Ask specifically about **thyroxine tablets taken for weight loss**, iodine-containing cough syrups, recent contrast imaging, amiodarone and a recent sore throat with neck pain, since each points to a very different cause and treatment.",
      ],
    },
    {
      heading: "Establishing the cause",
      points: [
        "**Graves disease accounts for about 60-80% of thyrotoxicosis** in India: young or middle-aged women, a diffuse smooth firm goitre often with a bruit, orbitopathy, and a positive TSH receptor antibody (TRAb). It is autoimmune and often has a family history of thyroid or other autoimmune disease.",
        "**Toxic multinodular goitre (Plummer disease)** is the commonest cause in the older patient from an iodine-deficient belt: a long-standing lumpy goitre that becomes toxic over years, no eye signs, no antibodies, and a patchy scan. It never remits on drugs and always needs definitive therapy.",
        "**Toxic adenoma** is a single autonomously functioning nodule in a younger adult, with a hot nodule and a suppressed remainder of the gland on scintigraphy; the surrounding tissue recovers after the nodule is ablated or removed.",
        "**Subacute (de Quervain) thyroiditis** follows a viral upper respiratory infection by 2-3 weeks with a painful, exquisitely tender goitre, fever, a very high ESR and a low radioiodine uptake. It is a release phenomenon, not overproduction, so antithyroid drugs are useless - it needs NSAIDs or prednisolone and it runs a triphasic course.",
        "**Painless, silent and postpartum thyroiditis** behave the same way without the pain; postpartum thyroiditis appears 2-6 months after delivery in about 5-8% of women, is more common with positive anti-TPO antibodies, and about a quarter end permanently hypothyroid.",
        "**Factitious thyrotoxicosis** from surreptitious thyroxine shows a suppressed TSH, raised T4, a **low serum thyroglobulin** and no goitre - the low thyroglobulin is the discriminator, because every endogenous cause raises it.",
      ],
    },
    {
      heading: "Investigation: what to send and in what order",
      points: [
        "**Send TSH first.** A normal TSH from a reliable laboratory effectively excludes primary thyrotoxicosis. If it is suppressed, add free T4 and free T3 on the same sample.",
        "**Suppressed TSH with raised free T4 and free T3** is overt thyrotoxicosis; **suppressed TSH with raised T3 but normal T4** is T3 toxicosis, seen early in Graves disease and in toxic nodules; **suppressed TSH with normal free T4 and free T3** is subclinical hyperthyroidism.",
        "A **raised or inappropriately normal TSH with a raised free T4** is not ordinary hyperthyroidism - think assay interference, a TSH-secreting pituitary adenoma or thyroid hormone resistance, and refer rather than treat.",
        "**TRAb (TSH receptor antibody) is the single most useful aetiological test** where available: positive in Graves disease, negative in nodular disease and thyroiditis. Anti-TPO antibody is often positive in Graves disease too but is far less specific.",
        "**Technetium-99m or radioiodine uptake scan** separates the high-uptake causes (Graves, toxic multinodular goitre, toxic adenoma) from the low-uptake causes (all forms of thyroiditis, factitious thyroxine, iodine excess) and is the investigation to name when TRAb is unavailable. It is contraindicated in pregnancy and lactation.",
        "**Ultrasound of the neck** defines gland size, vascularity and nodules but does not diagnose thyrotoxicosis; order it for a nodular gland, not for a smooth diffuse one.",
        "Baseline **complete blood count and liver function tests before starting an antithyroid drug** give you a comparator when a sore throat or jaundice appears later, and an ECG is mandatory to pick up atrial fibrillation.",
      ],
    },
    {
      heading: "Antithyroid drugs and symptom control",
      points: [
        "**Carbimazole is the drug of choice in India** (converted to methimazole): start 10-20 mg daily for mild disease and 20-40 mg daily for severe disease, given once daily, and reduce every 4-6 weeks by response to a maintenance dose of 5-10 mg daily. Methimazole 10-30 mg daily is the equivalent where it is stocked.",
        "**Propylthiouracil 100-150 mg three times daily** is reserved for the first trimester of pregnancy, thyroid storm and carbimazole intolerance, because it additionally blocks peripheral T4 to T3 conversion but carries a real risk of fulminant hepatic failure.",
        "**Propranolol 20-40 mg three to four times daily** controls tremor, palpitation, anxiety and sweating within hours and also inhibits peripheral T4 to T3 conversion; use atenolol 25-50 mg daily for adherence, and a rate-limiting calcium channel blocker such as diltiazem where asthma forbids beta-blockade.",
        "**Recheck free T4 at 4-6 weeks, not TSH**, because TSH stays suppressed for weeks to months after the hormones normalise and will mislead you into overtreating.",
        "**Treat Graves disease for 12-18 months and then stop** to look for remission, which happens in only about 40-50%; predictors of relapse are a large goitre, a very high initial T3, persistently positive TRAb, smoking and young age. Toxic nodular disease is never cured by drugs.",
        "**Warn every patient in writing about agranulocytosis**: any fever or sore throat means stop the drug immediately and get a total leucocyte count the same day. It occurs in about 0.2-0.5%, usually in the first 3 months, and is not predicted by routine counts. Also warn about rash, arthralgia, jaundice and dark urine.",
        "**Block-and-replace** (carbimazole 40 mg daily with levothyroxine added once euthyroid) is an alternative for erratic control and in Graves orbitopathy, but it uses more drug and does not raise the remission rate.",
      ],
    },
    {
      heading: "Definitive treatment: radioiodine and surgery",
      points: [
        "**Radioiodine (I-131) is the definitive treatment of choice** for relapsed Graves disease, toxic multinodular goitre and toxic adenoma: a single oral dose, no anaesthesia, low cost and available in most Indian medical college nuclear medicine departments.",
        "Render the patient **near-euthyroid on carbimazole before radioiodine and stop the drug 3-7 days before the dose**, restarting a few days after; the deliberate aim in Graves disease is hypothyroidism, which is then treated with lifelong levothyroxine rather than regarded as a failure.",
        "**Absolute contraindications to radioiodine are pregnancy and breastfeeding.** Pregnancy must be excluded on the day and avoided for 6 months afterwards, breastfeeding stopped 6 weeks before, and radiation-protection advice given about distance from small children for a few days.",
        "**Radioiodine can worsen Graves orbitopathy**, especially in smokers; cover moderate eye disease with prednisolone 0.3-0.5 mg/kg daily tapered over 6-12 weeks, or choose surgery instead when the orbitopathy is active and severe.",
        "**Total or near-total thyroidectomy** is preferred for a very large goitre with compressive symptoms, a coexisting suspicious or malignant nodule, severe active orbitopathy, a patient who refuses radioiodine, and in pregnancy where drugs have failed (done in the second trimester).",
        "Before surgery make the patient euthyroid on carbimazole and add **Lugol iodine 5-10 drops three times daily for 10 days** to reduce gland vascularity. Warn about the specific complications: recurrent laryngeal nerve palsy, hypoparathyroidism with hypocalcaemia, haematoma causing airway obstruction, and permanent hypothyroidism.",
        "**Check calcium and voice in the first 24-48 hours after thyroidectomy**, and start levothyroxine 1.6 mcg/kg the day after a total thyroidectomy with a TSH check at 6-8 weeks.",
      ],
    },
    {
      heading: "Thyroid storm and other emergencies",
      points: [
        "**Thyroid storm is decompensated thyrotoxicosis** precipitated by infection, surgery, trauma, delivery, diabetic ketoacidosis, iodinated contrast or abrupt withdrawal of antithyroid drugs, with fever above 38.5 C, tachycardia out of proportion, agitation or coma, vomiting and diarrhoea, and cardiac failure. Mortality is 10-30% even when treated.",
        "The **Burch-Wartofsky score** grades thermoregulatory, central nervous, gastrointestinal-hepatic and cardiovascular dysfunction plus a precipitant: **45 or more is highly suggestive of storm**, 25-44 impending, below 25 unlikely. Treatment is clinical and must not wait for hormone results.",
        "Treat with **propylthiouracil 500-1000 mg loading then 250 mg 4-hourly** (preferred over carbimazole because it blocks T4 to T3 conversion), **Lugol iodine 5-10 drops 6-hourly started at least one hour after the thionamide** to avoid fuelling hormone synthesis, **propranolol 60-80 mg 4-hourly** or intravenous esmolol, and **hydrocortisone 100 mg intravenously 8-hourly**.",
        "Add supportive care: cooling with tepid sponging and **paracetamol - never aspirin, which displaces thyroxine from thyroid-binding globulin** and worsens the storm; intravenous fluids, glucose, thiamine, oxygen, and treatment of the precipitating infection.",
        "**Thyrotoxic periodic paralysis** presents as sudden proximal weakness with hypokalaemia after a carbohydrate load, rest after exercise or alcohol, typically in young Asian men; give cautious potassium replacement with propranolol and treat the thyrotoxicosis, since aggressive potassium causes rebound hyperkalaemia.",
        "**Amiodarone-induced thyrotoxicosis type 1** occurs in a nodular or iodine-deficient gland and responds to carbimazole with potassium perchlorate; **type 2** is a destructive thyroiditis responding to prednisolone 40 mg daily. Colour Doppler flow is increased in type 1 and absent in type 2 - the practical bedside distinction.",
      ],
    },
    {
      heading: "Subclinical hyperthyroidism and pregnancy",
      points: [
        "**Subclinical hyperthyroidism is a suppressed TSH with normal free T4 and free T3.** Confirm on a repeat sample after 3 months before acting, since transient suppression follows any acute illness, is normal in the first trimester of pregnancy and is common in the very elderly.",
        "**Treat when TSH is persistently below 0.1 mIU/L and the patient is over 65, has atrial fibrillation, coronary disease, heart failure, osteoporosis or is postmenopausal**, because the untreated risks are atrial fibrillation (about threefold) and accelerated bone loss. Observe younger asymptomatic patients with a TSH of 0.1-0.4 mIU/L.",
        "**In pregnancy, gestational transient thyrotoxicosis** from hCG cross-stimulation occurs in the first trimester, often with hyperemesis gravidarum, has no goitre and no eye signs, and settles by 18-20 weeks with supportive care alone - do not start an antithyroid drug for it.",
        "**True Graves disease in pregnancy** is treated with **propylthiouracil in the first trimester** (carbimazole causes aplasia cutis, choanal and oesophageal atresia) and a **switch to carbimazole from the second trimester** because of propylthiouracil hepatotoxicity. Use the lowest dose that keeps free T4 in the upper third of the normal range.",
        "**Measure TRAb at 18-22 weeks** in any woman with current or past Graves disease: a high titre crosses the placenta and can cause fetal or neonatal thyrotoxicosis, which needs fetal heart rate and growth monitoring and a paediatric alert at delivery.",
        "Both propylthiouracil and carbimazole are compatible with **breastfeeding** in usual doses when given after a feed.",
      ],
    },
    {
      heading: "The thyroid nodule and the neck swelling",
      points: [
        "Palpable nodules are found in about 5% of adults and nodules on ultrasound in up to 50%, but only about **5-10% of nodules are malignant** - so the task is to select the few that need cytology rather than to aspirate everything.",
        "**Send a TSH first in every nodule.** If the TSH is suppressed, do a radionuclide scan: a **hot (autonomously functioning) nodule is almost never malignant and does not need FNAC** - it needs radioiodine or surgery. If the TSH is normal or raised, go to ultrasound.",
        "**Ultrasound features that predict malignancy** are marked hypoechogenicity, a taller-than-wide shape, irregular or lobulated margins, microcalcification, extrathyroidal extension and abnormal cervical nodes; purely cystic and spongiform nodules are almost always benign. These are scored by ACR TI-RADS or the ATA risk categories, which set the size threshold for aspiration.",
        "**Ultrasound-guided fine-needle aspiration cytology is the definitive office investigation**, typically for nodules 1 cm or more with suspicious features, 1.5-2 cm for intermediate patterns, and any size with abnormal nodes or extrathyroidal extension. It is cheap, safe and can be done at the bedside with a 23-25 G needle.",
        "**Report cytology by the Bethesda system**, which links each category to a malignancy risk and an action, and never accept a report that just says benign or malignant without the category.",
        "**Clinical red flags override cytology**: a hard fixed nodule, rapid growth over weeks, hoarseness with vocal cord palsy, stridor, dysphagia, cervical lymphadenopathy, age under 20 or over 60, male sex, prior neck irradiation, and a family history of medullary carcinoma or MEN2.",
        "**Papillary carcinoma accounts for about 80%** of thyroid cancers and spreads to nodes with an excellent prognosis; follicular carcinoma spreads by blood to bone and lung and cannot be diagnosed on cytology because capsular invasion needs histology; medullary carcinoma raises serum calcitonin and needs RET testing and a check for phaeochromocytoma before surgery; anaplastic carcinoma presents as a rapidly enlarging hard mass with stridor in the elderly and is almost uniformly fatal.",
        "**A simple diffuse goitre in an endemic belt** with normal thyroid function needs iodised salt and reassurance, not surgery; India runs universal salt iodisation under the **National Iodine Deficiency Disorders Control Programme (NIDDCP)**, requiring 30 ppm iodine at production and 15 ppm at the consumer end.",
      ],
    },
  ],
  tables: [
    {
      heading: "Causes of thyrotoxicosis and how to tell them apart",
      columns: ["Cause", "Clinical clue", "Uptake scan", "First-line treatment"],
      rows: [
        ["Graves disease", "Young woman, diffuse goitre with bruit, orbitopathy, TRAb positive", "Diffusely increased", "Carbimazole plus propranolol for 12-18 months"],
        ["Toxic multinodular goitre", "Older patient, long-standing lumpy goitre, no eye signs", "Patchy, multiple hot areas", "Radioiodine or surgery; drugs never cure it"],
        ["Toxic adenoma", "Single palpable nodule, rest of gland impalpable", "Single hot nodule, rest suppressed", "Radioiodine or lobectomy"],
        ["Subacute (de Quervain) thyroiditis", "Painful tender goitre after a viral illness, high ESR", "Very low or absent", "NSAIDs, prednisolone if severe, propranolol; no thionamide"],
        ["Postpartum or silent thyroiditis", "2-6 months postpartum, painless, anti-TPO positive", "Low", "Propranolol only; watch for later hypothyroidism"],
        ["Factitious (exogenous thyroxine)", "No goitre, weight-loss clinic history, low thyroglobulin", "Low", "Stop the thyroxine and counsel"],
        ["Amiodarone-induced type 1 / type 2", "Nodular gland with increased Doppler flow / normal gland with no flow", "Low or normal in both", "Carbimazole with perchlorate / prednisolone 40 mg daily"],
      ],
    },
    {
      heading: "Antithyroid drugs and adjuncts: dose and cautions",
      columns: ["Drug", "Dose", "Role", "Main hazard"],
      rows: [
        ["Carbimazole", "10-40 mg daily, maintenance 5-10 mg", "First line in almost all non-pregnant patients", "Agranulocytosis, rash, cholestatic jaundice; teratogenic in first trimester"],
        ["Propylthiouracil", "100-150 mg three times daily; 250 mg 4-hourly in storm", "First trimester, thyroid storm, carbimazole allergy", "Fulminant hepatic necrosis, ANCA vasculitis"],
        ["Propranolol", "20-40 mg three to four times daily", "Symptom relief within hours; blocks T4 to T3 conversion", "Bronchospasm, bradycardia; avoid in asthma"],
        ["Lugol iodine", "5-10 drops three times daily for 10 days pre-operatively", "Reduces gland vascularity; used in storm after a thionamide", "Escape after 10-14 days; worsens thyrotoxicosis if given first"],
        ["Prednisolone", "40 mg daily tapering, or 0.3-0.5 mg/kg for orbitopathy cover", "Type 2 amiodarone thyrotoxicosis, severe subacute thyroiditis", "Hyperglycaemia, reactivation of tuberculosis"],
      ],
    },
    {
      heading: "Bethesda system for reporting thyroid cytopathology",
      columns: ["Category", "Diagnosis", "Risk of malignancy", "Action"],
      rows: [
        ["I", "Non-diagnostic or unsatisfactory", "5-10%", "Repeat aspiration under ultrasound guidance"],
        ["II", "Benign (colloid nodule, thyroiditis)", "0-3%", "Clinical and ultrasound follow-up only"],
        ["III", "Atypia of undetermined significance", "10-30%", "Repeat FNAC, molecular testing or diagnostic lobectomy"],
        ["IV", "Follicular neoplasm or suspicious for it", "25-40%", "Diagnostic hemithyroidectomy - cytology cannot show invasion"],
        ["V", "Suspicious for malignancy", "50-75%", "Total thyroidectomy or lobectomy with frozen section"],
        ["VI", "Malignant", "97-99%", "Total thyroidectomy with node dissection as indicated"],
      ],
    },
  ],
  redFlags: [
    "Fever above 38.5 C with agitation, delirium, vomiting and a tachycardia out of proportion in a thyrotoxic patient - treat as thyroid storm and admit immediately, do not wait for hormone reports.",
    "Sore throat, mouth ulcers or fever in anyone taking carbimazole or propylthiouracil - stop the drug the same day and get an urgent total leucocyte count for agranulocytosis.",
    "Jaundice, dark urine or right upper quadrant pain on propylthiouracil - stop it and check liver function, since fulminant hepatic failure can follow.",
    "A rapidly enlarging hard thyroid mass with hoarseness or stridor in an older patient - urgent referral for anaplastic carcinoma or lymphoma, not an outpatient FNAC appointment in six weeks.",
    "New atrial fibrillation, heart failure or unexplained weight loss in the elderly - send a TSH before labelling it primary cardiac disease.",
    "Sudden proximal weakness with hypokalaemia in a young thyrotoxic man - thyrotoxic periodic paralysis, needs cautious potassium and propranolol with cardiac monitoring.",
    "Rapidly progressive proptosis with pain, diplopia or reduced colour vision in Graves disease - sight-threatening optic neuropathy needing same-day ophthalmology and intravenous methylprednisolone.",
    "Any thyroid nodule in a child, or in a patient with prior neck irradiation or a family history of medullary carcinoma - refer for cytology regardless of size.",
  ],
  pearls: [
    "Lid lag and lid retraction occur in thyrotoxicosis of any cause; proptosis, chemosis and restricted eye movement occur only in Graves disease - that single distinction earns marks in every viva.",
    "Do not follow treatment with TSH in the first few months: it stays suppressed long after the hormones normalise, so titrate on free T4 or you will render the patient hypothyroid.",
    "Antithyroid drugs are useless in thyroiditis because the hormone is being released, not made - the low uptake scan is what saves you from months of pointless carbimazole.",
    "In thyroid storm give the thionamide first and the iodine at least an hour later; iodine given first supplies substrate and makes the storm worse.",
    "Use paracetamol and never aspirin for fever in thyroid storm, because salicylates displace thyroxine from binding protein and raise the free hormone.",
    "A hot nodule on scintigraphy is almost never cancer and does not need an FNAC - biopsy the cold ones.",
    "Follicular carcinoma can never be diagnosed on cytology because the diagnosis rests on capsular and vascular invasion, which needs the whole lobe under a microscope - that is why Bethesda IV goes straight to hemithyroidectomy.",
    "In a pregnant woman with a suppressed TSH, no goitre and hyperemesis in the first trimester, think gestational transient thyrotoxicosis and treat with reassurance and fluids rather than carbimazole.",
  ],
  theory: [
    {
      id: "endocrine-hyperthyroidism-nodule-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "A 28-year-old woman presents with weight loss of 6 kg over 4 months despite a good appetite, palpitation and heat intolerance. Her pulse is 118 per minute and she has a diffuse goitre. Discuss the aetiology, clinical evaluation, investigations and management.",
      openingLines: [
        "Thyrotoxicosis is the clinical syndrome resulting from excess circulating thyroid hormone, while hyperthyroidism is the subset in which the excess arises from sustained overproduction by the thyroid gland itself.",
        "In a young woman with a diffuse goitre and adrenergic features the most likely cause is Graves disease, an autoimmune disorder in which TSH receptor stimulating antibodies drive the gland, accounting for 60-80% of thyrotoxicosis in India.",
      ],
      answer: [
        {
          heading: "1. Causes to consider",
          points: [
            "High uptake, true hyperthyroidism: Graves disease, toxic multinodular goitre, toxic adenoma, rarely a TSH-secreting pituitary adenoma or hCG-driven gestational thyrotoxicosis.",
            "Low uptake, hormone release or exogenous: subacute de Quervain thyroiditis, silent and postpartum thyroiditis, amiodarone or iodine-induced thyrotoxicosis, and factitious thyroxine ingestion.",
            "In this age group and with a diffuse goitre, Graves disease is far the most likely, with postpartum or silent thyroiditis the main alternative if there is a recent delivery.",
          ],
        },
        {
          heading: "2. Clinical evaluation",
          points: [
            "History: duration and pattern of weight loss, appetite, palpitation, heat intolerance, sweating, tremor, bowel frequency, menstrual history, insomnia and irritability, neck pain, recent delivery or abortion, drug and iodine exposure, weight-loss preparations, family history of autoimmune disease and smoking.",
            "Examination: pulse rate and rhythm, blood pressure with pulse pressure, weight and BMI, tremor, warm moist palms, proximal myopathy tested by rising from a squat, and hyperreflexia.",
            "Neck: size, consistency, symmetry, nodularity, tenderness, bruit, retrosternal extension and cervical lymph nodes.",
            "Eyes: lid retraction and lid lag versus true proptosis measured by exophthalmometry, chemosis, conjunctival injection, ocular motility, and visual acuity with colour vision to exclude optic neuropathy.",
            "Look for pretibial myxoedema, thyroid acropachy, and signs of cardiac decompensation such as atrial fibrillation, raised jugular venous pressure and basal crepitations.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Confirm: TSH (suppressed) with free T4 and free T3; if free T4 is normal with a raised free T3 the diagnosis is T3 toxicosis.",
            "Aetiology: TSH receptor antibody (TRAb), and where unavailable a technetium-99m or radioiodine uptake scan to separate high-uptake from low-uptake causes.",
            "Baseline safety: complete blood count and liver function tests before an antithyroid drug, ECG for atrial fibrillation, and a urine pregnancy test before any radionuclide study.",
            "Ultrasound of the neck only if the gland is nodular, and ESR with a low uptake if subacute thyroiditis is suspected.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Symptom control: propranolol 20-40 mg three to four times daily started at the first visit, or atenolol 25-50 mg daily; use diltiazem if there is asthma.",
            "Antithyroid drug: carbimazole 20-40 mg daily as a single dose, reduced every 4-6 weeks by free T4 response to a maintenance of 5-10 mg daily, continued for 12-18 months.",
            "Monitoring: free T4 at 4-6 weeks and then 2-3 monthly; do not titrate on TSH early. Repeat complete blood count and liver function if symptoms suggest toxicity.",
            "Written safety advice: stop the drug and get a leucocyte count immediately for fever, sore throat or mouth ulcers; report jaundice or dark urine.",
            "Definitive therapy with radioiodine or near-total thyroidectomy for relapse after a full course, a large or compressive goitre, poor adherence, or patient preference; render euthyroid first and warn that hypothyroidism is the expected outcome of radioiodine.",
            "Contraception and pregnancy counselling: avoid pregnancy for 6 months after radioiodine; if she conceives, switch to propylthiouracil in the first trimester and back to carbimazole thereafter.",
            "Advise smoking cessation, which halves the risk of progressive orbitopathy, and refer active eye disease to ophthalmology.",
          ],
        },
        {
          heading: "5. Follow-up and outcome",
          points: [
            "Review at 4-6 weeks, then every 2-3 months with free T4, weight, pulse and drug tolerance.",
            "Only about 40-50% of Graves disease remits after a full course; relapse is likelier with a large goitre, very high T3, persistent TRAb, smoking and young age.",
            "After remission, check TSH 6-monthly for 2 years, since both relapse and later hypothyroidism are common.",
            "After radioiodine or surgery, check TSH at 6-8 weeks and start levothyroxine 1.6 mcg/kg once hypothyroid.",
          ],
        },
      ],
      mustDraw: [
        "Table separating high-uptake from low-uptake thyrotoxicosis with the treatment of each.",
        "Flow chart: clinical suspicion - TSH - suppressed TSH with free T4 and free T3 - TRAb or uptake scan - Graves disease treated with carbimazole and beta-blocker - relapse - radioiodine or surgery.",
      ],
      markSplit: [
        { part: "Definition and causes", marks: 2 },
        { part: "History and examination including eye signs", marks: 2 },
        { part: "Investigations with rationale", marks: 2 },
        { part: "Drug treatment with doses and monitoring", marks: 3 },
        { part: "Definitive therapy and follow-up", marks: 1 },
      ],
      keywords: ["Graves disease", "carbimazole", "TRAb", "radioiodine", "orbitopathy"],
    },
    {
      id: "endocrine-hyperthyroidism-nodule-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write short notes on the evaluation of a solitary thyroid nodule.",
      openingLines: [
        "A solitary thyroid nodule is a discrete swelling within an otherwise normal-feeling thyroid gland, palpable in about 5% of adults and detected by ultrasound in up to half.",
        "Only 5-10% are malignant, so the purpose of evaluation is to select the minority that need cytology and surgery while sparing the majority any intervention.",
      ],
      answer: [
        {
          heading: "Clinical assessment",
          points: [
            "History: duration and rate of growth, pain, hoarseness, dysphagia, stridor, symptoms of hyper- or hypothyroidism, residence in an endemic goitre belt, previous head and neck irradiation, and family history of thyroid cancer or MEN2.",
            "Examination: size, consistency, mobility on swallowing, fixity, tenderness, retrosternal extension, tracheal deviation, cervical lymphadenopathy and indirect laryngoscopy for cord movement if hoarse.",
            "High-risk features: age under 20 or over 60, male sex, hard fixed nodule, rapid growth, lymph nodes, hoarseness, and prior irradiation.",
          ],
        },
        {
          heading: "Investigations in sequence",
          points: [
            "Serum TSH first. If suppressed, perform a radionuclide scan; a hot autonomously functioning nodule is almost never malignant and needs radioiodine or surgery rather than cytology.",
            "If TSH is normal or raised, perform high-resolution ultrasound and grade by ACR TI-RADS or ATA categories, noting hypoechogenicity, taller-than-wide shape, irregular margins, microcalcification, extrathyroidal spread and abnormal nodes.",
            "Ultrasound-guided fine-needle aspiration cytology for nodules meeting the size threshold for their risk category, or of any size with abnormal nodes or extrathyroidal extension.",
            "Report cytology by the Bethesda system; add serum calcitonin if medullary carcinoma is suspected and check for phaeochromocytoma before any surgery in that setting.",
          ],
        },
        {
          heading: "Management by Bethesda category",
          points: [
            "Bethesda I: repeat the aspiration under ultrasound guidance.",
            "Bethesda II: benign - clinical and ultrasound follow-up, no surgery.",
            "Bethesda III: repeat cytology, molecular testing where available, or diagnostic lobectomy.",
            "Bethesda IV: diagnostic hemithyroidectomy, because capsular invasion cannot be seen on cytology.",
            "Bethesda V and VI: thyroidectomy with appropriate node dissection and post-operative radioiodine and TSH suppression as indicated.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart: solitary nodule - TSH - suppressed leads to scan and hot nodule; normal or raised leads to ultrasound then FNAC then Bethesda-directed action.",
        "Table of the six Bethesda categories with malignancy risk and action.",
      ],
      markSplit: [
        { part: "Definition and clinical high-risk features", marks: 1 },
        { part: "Role of TSH and scan", marks: 1 },
        { part: "Ultrasound and FNAC", marks: 1.5 },
        { part: "Bethesda categories and management", marks: 1.5 },
      ],
      keywords: ["solitary nodule", "FNAC", "Bethesda", "TI-RADS", "hemithyroidectomy"],
    },
    {
      id: "endocrine-hyperthyroidism-nodule-t3",
      paper: "II",
      kind: "chart-flow",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Outline the recognition and emergency management of thyroid storm.",
      openingLines: [
        "Thyroid storm is the life-threatening decompensation of thyrotoxicosis, with multi-organ dysfunction out of proportion to the hormone levels, carrying a mortality of 10-30% even with treatment.",
        "It is a clinical diagnosis, graded by the Burch-Wartofsky score, and treatment must be started before biochemical confirmation returns.",
      ],
      answer: [
        {
          heading: "Recognition",
          points: [
            "Precipitants: infection, surgery, trauma, delivery, diabetic ketoacidosis, iodinated contrast, radioiodine, and abrupt withdrawal of antithyroid drugs.",
            "Features: fever above 38.5 C, tachycardia disproportionate to fever, agitation, delirium or coma, vomiting, diarrhoea, jaundice, atrial fibrillation and congestive cardiac failure.",
            "Burch-Wartofsky score of 45 or more is highly suggestive, 25-44 impending storm, below 25 unlikely.",
            "Send free T4, free T3, TSH, blood counts, electrolytes, glucose, liver and renal function, blood cultures, chest radiograph and ECG, but do not delay treatment for them.",
          ],
        },
        {
          heading: "Blocking hormone synthesis and release",
          points: [
            "Propylthiouracil 500-1000 mg loading dose then 250 mg every 4 hours orally or by nasogastric tube, preferred because it also blocks peripheral conversion of T4 to T3.",
            "Carbimazole 20 mg 6-hourly if propylthiouracil is unavailable.",
            "Lugol iodine 5-10 drops 6-hourly, or sodium iodide intravenously, given at least one hour after the thionamide so that it does not provide substrate for new hormone.",
            "Lithium carbonate or cholestyramine are second-line options when iodine cannot be used.",
          ],
        },
        {
          heading: "Blocking the peripheral effects",
          points: [
            "Propranolol 60-80 mg every 4 hours orally, or 0.5-1 mg intravenously slowly with cardiac monitoring; esmolol infusion if titratability is needed in heart failure.",
            "Hydrocortisone 100 mg intravenously 8-hourly, which blocks T4 to T3 conversion and covers the relative adrenal insufficiency of storm.",
            "Cooling with tepid sponging and paracetamol; aspirin is contraindicated because it displaces thyroxine from binding proteins.",
          ],
        },
        {
          heading: "Supportive care and the precipitant",
          points: [
            "Intravenous fluids with glucose, correction of electrolytes, thiamine, oxygen, and nutrition, since the catabolic state is extreme.",
            "Treat the precipitating illness - antibiotics for sepsis, insulin for ketoacidosis - because storm will not settle while it is untreated.",
            "Monitor in an intensive care setting with continuous ECG; treat atrial fibrillation and heart failure conventionally.",
            "Plan definitive therapy with radioiodine or thyroidectomy once the patient is stable and euthyroid.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart of the four arms of treatment: block synthesis (thionamide), block release (iodine one hour later), block peripheral action (propranolol, hydrocortisone), and supportive care with treatment of the precipitant.",
      ],
      markSplit: [
        { part: "Definition, precipitants and Burch-Wartofsky score", marks: 1.5 },
        { part: "Thionamide and iodine with the timing rule", marks: 1.5 },
        { part: "Beta-blockade and steroid", marks: 1 },
        { part: "Supportive care and treatment of the precipitant", marks: 1 },
      ],
      keywords: ["thyroid storm", "Burch-Wartofsky", "propylthiouracil", "Lugol iodine", "hydrocortisone"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-hyperthyroidism-nodule-q1",
      stem: "A 34-year-old woman has a 3-week history of a painful tender goitre, fever and palpitation following a sore throat. TSH is less than 0.01 mIU/L, free T4 is raised, ESR is 78 mm in the first hour and the technetium uptake is very low. What is the most appropriate treatment?",
      options: [
        "Carbimazole 20 mg daily with propranolol",
        "Naproxen or prednisolone with propranolol for symptoms",
        "Radioiodine ablation after rendering her euthyroid",
        "Total thyroidectomy after 10 days of Lugol iodine",
      ],
      answer: 1,
      explanation:
        "A painful tender goitre after a viral illness with a very high ESR and a suppressed uptake is subacute de Quervain thyroiditis, in which stored hormone is being released rather than synthesised, so treatment is anti-inflammatory - NSAIDs or prednisolone for pain - with propranolol for the adrenergic symptoms, and the illness runs a self-limiting triphasic course. Carbimazole blocks synthesis, which is not happening, so it is useless here. Radioiodine cannot be taken up by a gland with negligible uptake. Thyroidectomy is entirely inappropriate for a self-limiting inflammatory condition.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-q2",
      stem: "A 30-year-old woman on carbimazole 20 mg daily for Graves disease for 6 weeks telephones with fever and a severe sore throat. What should you advise?",
      options: [
        "Continue carbimazole and take paracetamol; sore throat is a common thyrotoxic symptom",
        "Halve the carbimazole dose and review in one week",
        "Stop carbimazole immediately and get a total and differential leucocyte count today",
        "Add amoxicillin and continue carbimazole at the same dose",
      ],
      answer: 2,
      explanation:
        "Fever with sore throat in anyone on a thionamide must be treated as agranulocytosis until an urgent leucocyte count proves otherwise; the drug is stopped the same day because continuing it during agranulocytosis can be fatal. Reassuring her and continuing risks exactly that. Halving the dose does not reduce the risk of an idiosyncratic reaction. Prescribing an antibiotic without a count neither excludes nor treats agranulocytosis and delays the crucial test.",
      difficulty: "easy",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-q3",
      stem: "A 46-year-old man has a 2 cm solitary thyroid nodule. TSH is 0.02 mIU/L and free T4 is mildly raised. A technetium scan shows the nodule to be hot with suppression of the rest of the gland. What is the next step?",
      options: [
        "Ultrasound-guided fine-needle aspiration cytology of the nodule",
        "Radioiodine or lobectomy after control with carbimazole and a beta-blocker",
        "Total thyroidectomy because a nodule with abnormal function is likely malignant",
        "Levothyroxine suppression therapy and repeat ultrasound in 6 months",
      ],
      answer: 1,
      explanation:
        "A hot autonomously functioning nodule causing thyrotoxicosis is a toxic adenoma; malignancy in a hot nodule is very rare, so cytology adds nothing and definitive treatment with radioiodine or lobectomy is correct after symptom control. FNAC is reserved for cold or indeterminate nodules when the TSH is normal or raised. Total thyroidectomy is more surgery than a benign unilateral adenoma requires. Levothyroxine suppression in a patient who is already thyrotoxic would be dangerous.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-q4",
      stem: "A 26-year-old woman with Graves disease is 8 weeks pregnant. She is currently on carbimazole 15 mg daily. What is the correct management?",
      options: [
        "Stop all antithyroid drugs because thyrotoxicosis remits in pregnancy",
        "Switch to propylthiouracil for the first trimester and back to carbimazole from the second",
        "Continue carbimazole unchanged throughout pregnancy",
        "Arrange radioiodine ablation in the second trimester",
      ],
      answer: 1,
      explanation:
        "Carbimazole and methimazole in the first trimester are associated with aplasia cutis and choanal or oesophageal atresia, so propylthiouracil is used until organogenesis is complete and then carbimazole is resumed to avoid cumulative propylthiouracil hepatotoxicity. Stopping treatment risks maternal thyrotoxicosis with miscarriage, prematurity and storm. Continuing carbimazole through the first trimester ignores the embryopathy risk. Radioiodine is absolutely contraindicated in pregnancy because it ablates the fetal thyroid.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-q5",
      stem: "A 60-year-old man with thyrotoxicosis develops fever of 39.2 C, agitation, vomiting and atrial fibrillation at 160 per minute two days after an emergency hernia repair. Which sequence of drug administration is correct?",
      options: [
        "Lugol iodine first, then propylthiouracil one hour later, then propranolol",
        "Propylthiouracil first, then Lugol iodine at least one hour later, with propranolol and hydrocortisone",
        "Carbimazole and aspirin for fever, with intravenous fluids alone",
        "Radioiodine as an emergency dose with hydrocortisone cover",
      ],
      answer: 1,
      explanation:
        "In thyroid storm the thionamide is given first to block organification, and iodine follows at least an hour later so that it suppresses hormone release without supplying substrate for new synthesis; propranolol controls the adrenergic state and hydrocortisone blocks T4 to T3 conversion while covering relative adrenal insufficiency. Giving iodine first fuels hormone production and worsens the storm. Aspirin is contraindicated because it displaces thyroxine from binding globulin and raises free hormone. Radioiodine takes weeks to act and has no role in the acute emergency.",
      difficulty: "hard",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-q6",
      stem: "A fine-needle aspirate from a 2.5 cm thyroid nodule is reported as Bethesda category IV, follicular neoplasm. What is the appropriate management?",
      options: [
        "Repeat the fine-needle aspiration in 6 months",
        "Reassure and follow up with ultrasound, since the risk of malignancy is under 3%",
        "Diagnostic hemithyroidectomy for histological assessment of capsular and vascular invasion",
        "Total thyroidectomy with central compartment node dissection and radioiodine"
      ],
      answer: 2,
      explanation:
        "Follicular carcinoma is distinguished from follicular adenoma only by capsular and vascular invasion, which cannot be seen in an aspirate, so a Bethesda IV lesion with a 25-40% malignancy risk goes to diagnostic hemithyroidectomy. Repeating the aspiration cannot resolve the question no matter how often it is done. A malignancy risk of 25-40% is far too high for reassurance and surveillance. Total thyroidectomy with node dissection is over-treatment before histology proves cancer, and can be completed later if the lobectomy shows carcinoma.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-q7",
      stem: "A 72-year-old woman has a TSH of 0.05 mIU/L with normal free T4 and free T3 on two occasions three months apart. She has osteoporosis and paroxysmal atrial fibrillation. What is the best action?",
      options: [
        "No treatment; subclinical hyperthyroidism is benign and should only be observed",
        "Investigate the cause and treat, because persistent TSH below 0.1 mIU/L in this patient carries cardiac and skeletal risk",
        "Start levothyroxine to normalise the TSH",
        "Repeat the TSH in a further two years",
      ],
      answer: 1,
      explanation:
        "Persistent TSH below 0.1 mIU/L in a patient over 65 with atrial fibrillation and osteoporosis is exactly the group in whom subclinical hyperthyroidism should be investigated and treated, since untreated it roughly triples the risk of atrial fibrillation and accelerates bone loss. Observation alone is reasonable only in younger asymptomatic patients with a TSH of 0.1-0.4 mIU/L. Levothyroxine would deepen the suppression and worsen both problems. Deferring for two years leaves a treatable driver of her arrhythmia and fractures unaddressed.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "endocrine-hyperthyroidism-nodule-c1",
      front: "Eye signs: which are specific to Graves disease?",
      back: "Proptosis, chemosis, periorbital oedema and restricted ocular motility are Graves-specific. Lid lag and lid retraction are adrenergic and occur in any thyrotoxicosis.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c2",
      front: "Why not follow antithyroid treatment with TSH?",
      back: "TSH remains suppressed for weeks to months after free T4 normalises; titrate on free T4 or you will overtreat into hypothyroidism.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c3",
      front: "Carbimazole dose and course in Graves disease",
      back: "Start 10-40 mg once daily, taper by free T4 every 4-6 weeks to 5-10 mg maintenance, continue 12-18 months; remission in only 40-50%.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c4",
      front: "Agranulocytosis warning to give with every thionamide",
      back: "Fever, sore throat or mouth ulcers means stop the drug the same day and get a total leucocyte count; risk 0.2-0.5%, mostly in the first 3 months.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c5",
      front: "High-uptake versus low-uptake thyrotoxicosis",
      back: "High: Graves, toxic multinodular goitre, toxic adenoma. Low: all thyroiditides, factitious thyroxine, iodine excess. Thionamides work only for the high-uptake group.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c6",
      front: "Antithyroid drug of choice by trimester",
      back: "Propylthiouracil in the first trimester (carbimazole embryopathy), carbimazole from the second (propylthiouracil hepatotoxicity).",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c7",
      front: "Burch-Wartofsky score cut-offs",
      back: "45 or more highly suggestive of thyroid storm, 25-44 impending storm, below 25 unlikely.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c8",
      front: "The order rule in thyroid storm",
      back: "Thionamide first, Lugol iodine at least one hour later; iodine given first supplies substrate and worsens the storm. Paracetamol, never aspirin.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c9",
      front: "Amiodarone-induced thyrotoxicosis type 1 versus type 2",
      back: "Type 1: pre-existing nodular gland, increased Doppler flow, treat with carbimazole plus perchlorate. Type 2: destructive thyroiditis, absent flow, treat with prednisolone 40 mg daily.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c10",
      front: "First test in any thyroid nodule, and what a suppressed TSH means",
      back: "Serum TSH. If suppressed, do a radionuclide scan - a hot nodule is almost never malignant and needs radioiodine or lobectomy, not FNAC.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c11",
      front: "Bethesda IV: why straight to surgery?",
      back: "Follicular carcinoma is defined by capsular and vascular invasion, which cytology cannot show; malignancy risk 25-40%, so diagnostic hemithyroidectomy.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c12",
      front: "Clinical red flags in a thyroid nodule",
      back: "Age under 20 or over 60, male, hard fixed nodule, rapid growth, hoarseness or stridor, cervical nodes, prior neck irradiation, family history of medullary carcinoma or MEN2.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c13",
      front: "Salt iodisation standard under NIDDCP",
      back: "Universal salt iodisation with 30 ppm iodine at production and not less than 15 ppm at the consumer level.",
    },
    {
      id: "endocrine-hyperthyroidism-nodule-c14",
      front: "Factitious thyrotoxicosis: the discriminating test",
      back: "Serum thyroglobulin is low; every endogenous cause of thyrotoxicosis raises it. There is also no goitre and the uptake is low.",
    },
  ],
  references: [
    "American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis, 2016",
    "American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer, 2015",
    "Indian Thyroid Society and ITS-ETA consensus on management of thyroid disorders, 2020",
    "American Thyroid Association Guidelines for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum, 2017",
    "The Bethesda System for Reporting Thyroid Cytopathology, 3rd edition, 2023",
    "National Iodine Deficiency Disorders Control Programme (NIDDCP) revised policy guidelines, MoHFW, 2006",
    "API Textbook of Medicine, 11th edition, 2019 - thyroid disorders",
  ],
});

topics.push({
  id: "endocrine-obesity-metabolic-syndrome",
  title: "Obesity and the metabolic syndrome: Asian-Indian cut-offs",
  oneLiner:
    "Asian Indians develop cardiometabolic disease at a lower body mass index than Europeans, so overweight begins at a BMI of 23 kg/m2, obesity at 25 kg/m2 and abdominal obesity at a waist of 90 cm in men and 80 cm in women, and the metabolic syndrome is diagnosed when any three of abdominal obesity, raised triglyceride, low HDL, raised blood pressure and raised fasting glucose coexist.",
  frequency: "common",
  keywords: [
    "obesity",
    "BMI",
    "Asian Indian cut-off",
    "waist circumference",
    "waist-hip ratio",
    "metabolic syndrome",
    "abdominal obesity",
    "insulin resistance",
    "thin-fat Indian",
    "sarcopenic obesity",
    "NAFLD",
    "MASLD",
    "orlistat",
    "liraglutide",
    "semaglutide",
    "tirzepatide",
    "bariatric surgery",
    "sleeve gastrectomy",
    "Roux-en-Y gastric bypass",
    "acanthosis nigricans",
    "PCOS",
    "obstructive sleep apnoea",
    "Eat Right India",
    "Fit India",
    "JAPI consensus 2009",
  ],
  sections: [
    {
      heading: "Why Asian Indians need different numbers",
      points: [
        "At any given body mass index the Asian Indian carries **more total body fat, more visceral and hepatic fat and less skeletal muscle** than a European of the same weight and height, so the same BMI represents a higher metabolic risk.",
        "This is the **thin-fat Indian phenotype**, described in the Pune Maternal Nutrition Study: Indian newborns are lighter than European newborns but have preserved or increased subcutaneous fat with reduced lean mass, and the pattern persists into adult life.",
        "Consequently the **WHO Asia-Pacific and the 2009 JAPI Consensus Statement lowered the cut-offs**: normal BMI 18.0-22.9 kg/m2, overweight 23.0-24.9 kg/m2, obesity 25.0 kg/m2 or more, in place of the 25 and 30 thresholds used for European populations.",
        "**Abdominal obesity begins at a waist circumference of 90 cm in men and 80 cm in women**, compared with 102 and 88 cm in Europeans; the waist is measured at the midpoint between the lowest rib and the iliac crest, at the end of a normal expiration, with the tape horizontal and snug but not compressing.",
        "**Waist is a better predictor of cardiometabolic risk than BMI in Indians**, because it captures the visceral compartment that BMI misses - a man with a BMI of 23 and a waist of 96 cm is at higher risk than one with a BMI of 27 and a waist of 88 cm.",
        "**Sarcopenic obesity** - excess fat with reduced muscle mass - is common in older Indians and in those who lose weight without resistance exercise; it explains why weight alone is a poor treatment target and why grip strength and muscle bulk deserve attention.",
        "The **2025 Lancet Diabetes and Endocrinology Indian obesity guidance** describes a two-stage model: **stage 1 innocuous obesity** (raised adiposity without organ dysfunction) managed by lifestyle, and **stage 2 obesity** with mechanical or metabolic consequences such as diabetes, sleep apnoea, knee osteoarthritis or fatty liver, which needs active pharmacological or surgical treatment.",
      ],
    },
    {
      heading: "Measuring and classifying in the clinic",
      points: [
        "**Record weight, height, BMI, waist circumference and blood pressure at every consultation** - the waist tape costs nothing and detects the risk that the weighing scale misses.",
        "**Waist-hip ratio** above 0.90 in men and 0.80 in women, and **waist-height ratio above 0.5** in either sex, are useful supplementary markers; the waist-height rule of keeping the waist below half the height is easy for patients to remember.",
        "Look for the **clinical signs of insulin resistance**: acanthosis nigricans at the nape, axillae and knuckles, skin tags, hirsutism and acne in women, and a fatty apron with striae.",
        "Screen every obese patient for the **cluster that travels with it**: type 2 diabetes, hypertension, dyslipidaemia, metabolic dysfunction-associated steatotic liver disease, obstructive sleep apnoea, polycystic ovary syndrome, infertility, knee osteoarthritis, gastro-oesophageal reflux, depression and low self-esteem.",
        "**Exclude secondary causes** when the story does not fit: hypothyroidism, Cushing syndrome (proximal myopathy, purple striae, easy bruising), hypothalamic damage, and drugs - olanzapine, clozapine, valproate, corticosteroids, insulin, sulfonylureas, pioglitazone, oral contraceptives and beta-blockers.",
        "**Screen for obstructive sleep apnoea** with the STOP-BANG questions in anyone with snoring, witnessed apnoea, daytime sleepiness, resistant hypertension or a neck circumference above 40 cm, since untreated apnoea sabotages both blood pressure and weight control.",
        "Baseline tests: **fasting glucose or HbA1c, fasting lipid profile, ALT and AST with an ultrasound of the liver, TSH, serum creatinine and uric acid**, with a urine albumin-creatinine ratio if there is hypertension or diabetes.",
      ],
    },
    {
      heading: "Defining the metabolic syndrome",
      points: [
        "The **modified NCEP ATP III definition with Asian-Indian waist cut-offs** requires **any three of five**: waist 90 cm or more in men and 80 cm or more in women; triglyceride 150 mg/dL or more; HDL cholesterol below 40 mg/dL in men or below 50 mg/dL in women; blood pressure 130/85 mmHg or more or on treatment; fasting glucose 100 mg/dL or more or known diabetes.",
        "The **IDF definition makes abdominal obesity mandatory** and adds any two of the remaining four, using the same ethnicity-specific waist thresholds - the difference between the two definitions is a favourite examination question.",
        "**Prevalence in urban India is roughly 30-35% of adults** by the modified ATP III criteria, higher in women, and rises steeply with age; it is now well established in small towns and rural areas as diets shift.",
        "The syndrome confers roughly a **twofold increase in cardiovascular events and a fivefold increase in incident type 2 diabetes**, so it is a case-finding tool rather than a disease in itself.",
        "**It is not a diagnosis to treat as a unit** - there is no drug for metabolic syndrome. Its value is that finding one component obliges you to look for the other four and to treat each on its own merits.",
        "Two associations to remember: the syndrome is the metabolic soil of **metabolic dysfunction-associated steatotic liver disease**, which is now the commonest liver disease in India, and of **polycystic ovary syndrome** in young women.",
      ],
    },
    {
      heading: "Lifestyle treatment that actually works",
      points: [
        "Set a realistic target of **5-10% loss of baseline weight over 6 months**, at 0.5-1 kg a week; a 5% loss already improves glycaemia, blood pressure, triglyceride and hepatic fat, and 10% can put early type 2 diabetes into remission.",
        "Create a **deficit of 500-750 kcal a day**. In practical Indian terms this usually means reducing the cereal portion at each meal, cutting visible oil to 3-4 teaspoons a day for the individual, eliminating sweetened beverages and fried snacks, and adding a vegetable and a pulse to every plate.",
        "**Restructure rather than forbid**: replace polished rice and maida with whole wheat, millets (ragi, bajra, jowar), brown rice and whole pulses; keep protein at 0.8-1.2 g/kg with dal, curd, eggs, fish or paneer at each meal to preserve muscle during weight loss.",
        "**Physical activity: 150-300 minutes a week of moderate aerobic activity** plus **resistance training on two or more days**; Indian guidance recommends the higher end of 60 minutes daily - 30 minutes aerobic, 15 minutes resistance and 15 minutes of flexibility work - because of the greater insulin resistance at any given weight.",
        "**Reduce sedentary time**: stand or walk for 5 minutes every hour, and cut screen and sitting time, which independently predicts metabolic risk even in those who exercise.",
        "Address **sleep of less than 6 hours, night-shift work, alcohol and stress eating**, and screen for binge eating and depression, all of which defeat an otherwise sound plan.",
        "**Follow-up contact is the active ingredient**: monthly weighing with a written record, family involvement in cooking decisions, and realistic praise for maintained loss - a single dietary lecture achieves nothing.",
        "National platforms to name in an answer: **Eat Right India and the FSSAI front-of-pack labelling initiative, Fit India Movement, the yoga and wellness component of Ayushman Arogya Mandirs, and the NP-NCD lifestyle counselling package** delivered by the community health officer.",
      ],
    },
    {
      heading: "Drugs for obesity",
      points: [
        "Consider drug therapy when **BMI is 27 kg/m2 or more with a comorbidity, or 30 kg/m2 or more without** (Asian-Indian criteria, roughly equivalent to 30 and 27 in the older Western thresholds), and only alongside continued lifestyle treatment - never instead of it.",
        "**Orlistat 120 mg three times daily with meals** blocks about a third of dietary fat absorption and gives 3-5% weight loss; it causes oily stools, faecal urgency and flatus with a fatty diet, and needs a fat-soluble vitamin supplement taken at a different time of day.",
        "**Liraglutide 3 mg daily subcutaneously**, titrated from 0.6 mg weekly, gives about 5-8% loss; **semaglutide 2.4 mg weekly subcutaneously** gives about 15% in trials, and oral semaglutide is an alternative for the needle-averse. Nausea, vomiting and constipation are dose-related and usually settle with slower titration.",
        "**Tirzepatide, a dual GIP and GLP-1 receptor agonist, 5-15 mg weekly**, gives the largest loss of the current agents, around 20% at the highest dose. Cost restricts all of these to a small minority of Indian patients, and weight is regained when they are stopped.",
        "Avoid the GLP-1 class with a personal or family history of **medullary thyroid carcinoma or MEN2**, in pregnancy, and in active gallbladder disease or a history of pancreatitis; stop them well before elective anaesthesia because of delayed gastric emptying.",
        "**Metformin is not an obesity drug** but is useful where there is prediabetes, PCOS or antipsychotic-induced weight gain, giving a modest 1-3 kg. **Topiramate and phentermine combinations** are used elsewhere but have restricted availability and cardiovascular and teratogenic cautions.",
        "**Sibutramine and rimonabant were withdrawn** for cardiovascular and psychiatric harm respectively, and unregulated herbal and 'fat-cutter' preparations sold in India frequently contain undeclared sibutramine, thyroxine or diuretics - ask about them directly.",
      ],
    },
    {
      heading: "Bariatric and metabolic surgery",
      points: [
        "**Indian criteria (OSSI and the Asia-Pacific consensus) are lower than Western criteria**: surgery is offered at a **BMI of 37.5 kg/m2 or more without comorbidity, or 32.5 kg/m2 or more with type 2 diabetes or another significant comorbidity**, after a documented failure of supervised lifestyle and drug treatment.",
        "**Sleeve gastrectomy** removes about 80% of the stomach along the greater curvature: technically simpler, no malabsorption, 25-30% total weight loss, but worsens gastro-oesophageal reflux. **Roux-en-Y gastric bypass** gives 30-35% loss with better diabetes remission and better reflux control but more nutritional deficiency.",
        "Surgery produces **remission of type 2 diabetes in 50-80% at 2 years**, largely through incretin changes that begin before significant weight is lost, and improves sleep apnoea, hypertension, dyslipidaemia and fatty liver.",
        "**Lifelong follow-up and supplementation are mandatory**: multivitamin, calcium citrate 1200-1500 mg daily, vitamin D, iron, vitamin B12 (injectable or high-dose oral), thiamine and folate, with annual haematinics and bone density where indicated.",
        "Complications to counsel on: anastomotic leak, venous thromboembolism, internal hernia and small bowel obstruction after bypass, dumping syndrome, marginal ulcer, gallstones, **Wernicke encephalopathy from thiamine deficiency in protracted vomiting**, and weight regain in a fifth of patients by 5 years.",
        "Pregnancy should be **deferred for 12-18 months** after surgery until weight has stabilised, and contraception discussed because fertility often returns rapidly.",
      ],
    },
    {
      heading: "Treating the components and the family",
      points: [
        "**Blood pressure:** target below 130/80 mmHg. Use an ACE inhibitor or ARB first in the presence of diabetes, albuminuria or metabolic syndrome, since they are metabolically neutral, and avoid the older beta-blocker plus thiazide combination which worsens glycaemia.",
        "**Lipids:** treat with a statin according to risk - atorvastatin 10-40 mg or rosuvastatin 5-20 mg at night. Raised triglyceride with low HDL is the Indian pattern; fibrates such as fenofibrate 145 mg daily are added when triglyceride is above 500 mg/dL to prevent pancreatitis, after alcohol and glycaemia have been addressed.",
        "**Glycaemia:** treat prediabetes with lifestyle and selective metformin; where diabetes coexists with obesity, choose a GLP-1 receptor agonist or SGLT2 inhibitor as the second agent and avoid sulfonylureas, pioglitazone and excessive insulin, which add weight.",
        "**Fatty liver:** weight loss of 7-10% is the only intervention with proven benefit on steatohepatitis; vitamin E and pioglitazone have a limited role in biopsy-proven disease, and alcohol should be stopped.",
        "**Screen the family, not just the patient.** Obesity clusters in households because the cooking, the schedule and the activity pattern are shared, so the intervention must be at the household level - the family is the unit of care.",
        "**Address weight stigma explicitly**: use neutral language, weigh in privacy, provide a wide-cuffed sphygmomanometer and adequate seating, and never make continued care conditional on weight loss, since shame drives patients out of the clinic rather than towards the gym.",
      ],
    },
  ],
  tables: [
    {
      heading: "Asian-Indian versus international anthropometric cut-offs",
      columns: ["Measure", "Asian-Indian cut-off", "International (WHO) cut-off"],
      rows: [
        ["Normal BMI", "18.0-22.9 kg/m2", "18.5-24.9 kg/m2"],
        ["Overweight BMI", "23.0-24.9 kg/m2", "25.0-29.9 kg/m2"],
        ["Obesity BMI", "25.0 kg/m2 or more", "30.0 kg/m2 or more"],
        ["Waist circumference - men", "90 cm or more", "102 cm or more"],
        ["Waist circumference - women", "80 cm or more", "88 cm or more"],
        ["Waist-hip ratio", "Above 0.90 men, above 0.80 women", "Above 1.0 men, above 0.85 women"],
        ["Drug therapy threshold", "BMI 27 with comorbidity, or 30 alone", "BMI 27 with comorbidity, or 30 alone"],
        ["Bariatric surgery threshold", "BMI 32.5 with comorbidity, or 37.5 alone", "BMI 35 with comorbidity, or 40 alone"],
      ],
    },
    {
      heading: "Metabolic syndrome: the two definitions used in Indian practice",
      columns: ["Component", "Modified NCEP ATP III (any 3 of 5)", "IDF (abdominal obesity plus any 2)"],
      rows: [
        ["Abdominal obesity", "Waist 90 cm men, 80 cm women - one of the five", "Waist 90 cm men, 80 cm women - mandatory"],
        ["Triglyceride", "150 mg/dL or more, or on treatment", "150 mg/dL or more, or on treatment"],
        ["HDL cholesterol", "Below 40 mg/dL men, below 50 mg/dL women", "Below 40 mg/dL men, below 50 mg/dL women"],
        ["Blood pressure", "130/85 mmHg or more, or on treatment", "130/85 mmHg or more, or on treatment"],
        ["Fasting glucose", "100 mg/dL or more, or known diabetes", "100 mg/dL or more, or known diabetes"],
      ],
    },
    {
      heading: "Weight-lowering drugs: dose, expected loss and limits",
      columns: ["Drug", "Dose", "Expected weight loss", "Main limitation"],
      rows: [
        ["Orlistat", "120 mg three times daily with meals", "3-5% of body weight", "Oily stools and faecal urgency; needs fat-soluble vitamins"],
        ["Liraglutide", "0.6 mg daily SC titrated weekly to 3 mg", "5-8%", "Daily injection, nausea, cost"],
        ["Semaglutide", "0.25 mg weekly SC titrated to 2.4 mg", "About 15%", "Cost; regain on stopping; avoid with MEN2"],
        ["Tirzepatide", "2.5 mg weekly SC titrated to 5-15 mg", "15-20%", "Highest cost, limited availability"],
        ["Metformin", "500 mg twice daily to 1 g twice daily", "1-3 kg only", "Not licensed for obesity; useful in PCOS and prediabetes"],
      ],
    },
  ],
  redFlags: [
    "Rapid weight gain with proximal muscle weakness, purple abdominal striae, easy bruising and new diabetes or hypertension - screen for Cushing syndrome rather than counselling about diet.",
    "Daytime somnolence, witnessed apnoea, morning headache and resistant hypertension - refer for sleep study, since untreated obstructive sleep apnoea causes sudden cardiac death and defeats all weight advice.",
    "Unintentional weight loss in a previously obese patient - look for malignancy, tuberculosis, new diabetes or thyrotoxicosis before congratulating them.",
    "Severe abdominal pain with vomiting after bariatric surgery - internal hernia, obstruction or anastomotic leak needing urgent surgical assessment, not analgesia.",
    "Confusion, ataxia and ophthalmoplegia after bariatric surgery or protracted vomiting - Wernicke encephalopathy; give parenteral thiamine before any glucose.",
    "Use of an unregulated herbal or 'fat-cutter' preparation with palpitation, tremor or hypertension - suspect undeclared sibutramine or thyroxine and stop it immediately.",
    "Acanthosis nigricans with a BMI above 25 in an adolescent - screen for type 2 diabetes and PCOS now, not at the next visit.",
  ],
  pearls: [
    "For Asian Indians overweight starts at a BMI of 23 and obesity at 25 - quoting 25 and 30 in an Indian answer loses the mark that the whole question was set to test.",
    "Waist beats BMI in Indians because it captures visceral fat; a normal BMI with a waist of 96 cm in a man is metabolically obese normal weight and needs full screening.",
    "Teach the waist-height rule to patients: keep the waist below half the height, a target that needs no chart and no calculator.",
    "The modified ATP III definition needs any three of five; the IDF definition makes abdominal obesity compulsory and adds any two - know which definition you are quoting.",
    "There is no drug for metabolic syndrome; it is a case-finding label that obliges you to treat each of the five components on its own merits.",
    "Five per cent weight loss already improves glucose, blood pressure, triglyceride and liver fat - offer that as the first target instead of an unattainable ideal weight.",
    "Protect muscle while losing fat: 0.8-1.2 g/kg protein with resistance training twice a week, otherwise you create sarcopenic obesity in an older Indian patient.",
    "Bariatric surgery thresholds in India are 32.5 with comorbidity and 37.5 without - five units lower than the Western figures, for the same reason the BMI cut-offs are lower.",
  ],
  theory: [
    {
      id: "endocrine-obesity-metabolic-syndrome-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "A 38-year-old software professional attends with a BMI of 28.4 kg/m2 and a waist circumference of 102 cm. His blood pressure is 138/88 mmHg, fasting glucose 108 mg/dL, triglyceride 214 mg/dL and HDL 34 mg/dL. Define obesity and metabolic syndrome using Asian-Indian criteria, and describe your evaluation and management.",
      openingLines: [
        "Obesity is abnormal or excessive fat accumulation that impairs health; for Asian Indians the JAPI 2009 consensus and WHO Asia-Pacific criteria define overweight as a BMI of 23.0-24.9 kg/m2 and obesity as 25.0 kg/m2 or more, with abdominal obesity at a waist of 90 cm or more in men and 80 cm or more in women.",
        "This patient has obesity with abdominal obesity and fulfils four of the five modified NCEP ATP III criteria - abdominal obesity, raised triglyceride, low HDL and impaired fasting glucose, with borderline blood pressure - so he has the metabolic syndrome.",
      ],
      answer: [
        {
          heading: "1. Definitions and why the Indian cut-offs differ",
          points: [
            "Asian Indians have higher body fat, more visceral and hepatic fat and less lean mass at any given BMI, the thin-fat phenotype described in the Pune Maternal Nutrition Study, so risk begins at a lower BMI.",
            "Overweight 23.0-24.9 kg/m2, obesity 25.0 kg/m2 or more; waist 90 cm men and 80 cm women; waist-hip ratio above 0.90 in men and 0.80 in women; waist-height ratio above 0.5.",
            "Metabolic syndrome, modified NCEP ATP III with Asian waist cut-offs: any three of waist 90 or 80 cm, triglyceride 150 mg/dL or more, HDL below 40 or 50 mg/dL, blood pressure 130/85 mmHg or more, fasting glucose 100 mg/dL or more.",
            "The IDF definition instead requires abdominal obesity as an obligatory criterion plus any two of the other four.",
          ],
        },
        {
          heading: "2. Evaluation",
          points: [
            "History: dietary pattern with actual portion sizes and eating out, sweetened beverages, alcohol, physical activity and sedentary hours, sleep duration and snoring, shift work, stress, tobacco, drugs that cause weight gain, and family history of obesity, diabetes and premature coronary disease.",
            "Examination: weight, height, BMI, waist and hip circumference, blood pressure with the correct cuff, acanthosis nigricans, skin tags, striae, hepatomegaly, and joints.",
            "Screen for secondary causes if the history suggests them: TSH for hypothyroidism, overnight dexamethasone suppression for Cushing syndrome, and a drug review.",
            "Investigations: fasting glucose or HbA1c, fasting lipid profile, ALT and AST, ultrasound abdomen for fatty liver, serum creatinine, uric acid, urine albumin-creatinine ratio, ECG, and STOP-BANG screening with a sleep study if positive.",
          ],
        },
        {
          heading: "3. Lifestyle management",
          points: [
            "Target 5-10% weight loss over 6 months at 0.5-1 kg a week, with an energy deficit of 500-750 kcal a day.",
            "Diet: reduce cereal portions, replace polished rice and maida with whole grains and millets, visible oil limited to 3-4 teaspoons a day, protein 0.8-1.2 g/kg from dal, curd, egg or fish, 25-30 g fibre, no sweetened beverages, and controlled restaurant and festival eating.",
            "Activity: 150-300 minutes a week of moderate aerobic activity, resistance training twice weekly, and interruption of sitting every hour.",
            "Behavioural support: self-weighing with a written record, food diary, family involvement in cooking, sleep of 7-8 hours, and monthly follow-up contact.",
          ],
        },
        {
          heading: "4. Treating each component",
          points: [
            "Blood pressure to below 130/80 mmHg, preferring an ACE inhibitor or ARB for metabolic neutrality.",
            "Impaired fasting glucose: lifestyle first, with metformin 500 mg twice daily added if it rises despite lifestyle, as supported by IDPP-1.",
            "Dyslipidaemia: statin according to overall cardiovascular risk, with triglyceride addressed by weight loss, alcohol restriction and glycaemic control; fenofibrate if triglyceride exceeds 500 mg/dL.",
            "Fatty liver: 7-10% weight loss is the only proven treatment; stop alcohol and avoid hepatotoxic supplements.",
          ],
        },
        {
          heading: "5. Drugs, surgery and follow-up",
          points: [
            "Pharmacotherapy if BMI is 27 kg/m2 or more with comorbidity despite 3-6 months of adequate lifestyle change: orlistat 120 mg three times daily, or a GLP-1 receptor agonist such as liraglutide 3 mg daily or semaglutide 2.4 mg weekly where affordable.",
            "Bariatric surgery referral at BMI 32.5 kg/m2 or more with comorbidity, or 37.5 kg/m2 or more without, after documented failure of medical management.",
            "Review monthly for 3 months and then 3-monthly with weight, waist, blood pressure, and annual glucose and lipids.",
            "Extend counselling to the family, since dietary and activity patterns are shared, and use non-stigmatising language throughout.",
          ],
        },
      ],
      mustDraw: [
        "Table of Asian-Indian versus WHO cut-offs for BMI and waist circumference.",
        "Table of the five metabolic syndrome components with the modified ATP III thresholds, ticking the ones this patient meets.",
      ],
      markSplit: [
        { part: "Definitions with Asian-Indian cut-offs", marks: 2 },
        { part: "Metabolic syndrome criteria and both definitions", marks: 2 },
        { part: "History, examination and investigations", marks: 2 },
        { part: "Lifestyle management with specifics", marks: 2 },
        { part: "Drugs, surgery thresholds and follow-up", marks: 2 },
      ],
      keywords: ["Asian Indian cut-off", "metabolic syndrome", "waist circumference", "orlistat", "bariatric surgery"],
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-t2",
      paper: "II",
      kind: "define-classify",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Define metabolic syndrome. Enumerate its components and describe its significance in Indian primary care.",
      openingLines: [
        "The metabolic syndrome is a clustering of interrelated cardiometabolic risk factors - abdominal obesity, atherogenic dyslipidaemia, raised blood pressure and dysglycaemia - that occur together more often than chance and share insulin resistance as the underlying mechanism.",
        "It is identified using the modified NCEP ATP III criteria with Asian-Indian waist cut-offs, requiring any three of five components.",
      ],
      answer: [
        {
          heading: "Components and thresholds",
          points: [
            "Abdominal obesity: waist 90 cm or more in men, 80 cm or more in women.",
            "Triglyceride 150 mg/dL or more, or on specific treatment.",
            "HDL cholesterol below 40 mg/dL in men or below 50 mg/dL in women.",
            "Blood pressure 130/85 mmHg or more, or on antihypertensive treatment.",
            "Fasting plasma glucose 100 mg/dL or more, or previously diagnosed diabetes.",
          ],
        },
        {
          heading: "Alternative definition",
          points: [
            "The International Diabetes Federation definition makes abdominal obesity by ethnicity-specific waist cut-offs obligatory and requires any two of the remaining four components.",
            "The WHO 1999 definition required documented insulin resistance plus two others and included microalbuminuria, which makes it impractical in primary care.",
          ],
        },
        {
          heading: "Significance in India",
          points: [
            "Prevalence in urban Indian adults is about 30-35% and rising in rural areas with dietary transition, and it appears at a younger age and lower BMI than in Europeans.",
            "It carries roughly a twofold excess of cardiovascular events and a fivefold risk of incident type 2 diabetes.",
            "It is the metabolic basis of fatty liver disease, polycystic ovary syndrome, obstructive sleep apnoea and gout.",
            "Its practical value is as a case-finding device - identifying one component obliges a search for the other four in the patient and in the family.",
          ],
        },
        {
          heading: "Management principle",
          points: [
            "There is no single drug for the syndrome; each component is treated on its merits, with weight loss of 5-10%, 150-300 minutes of weekly activity and dietary restructuring as the common foundation.",
            "Statins, ACE inhibitors or ARBs, and metformin are used according to the individual components and overall cardiovascular risk.",
          ],
        },
      ],
      mustDraw: ["Table of the five components with modified ATP III Asian-Indian thresholds beside the IDF requirement."],
      markSplit: [
        { part: "Definition and underlying mechanism", marks: 1 },
        { part: "Five components with thresholds", marks: 2 },
        { part: "Alternative definitions", marks: 1 },
        { part: "Significance and management principle", marks: 1 },
      ],
      keywords: ["metabolic syndrome", "ATP III", "IDF", "insulin resistance", "waist"],
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-t3",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Write short notes on bariatric surgery: indications, procedures and long-term follow-up in Indian practice.",
      openingLines: [
        "Bariatric or metabolic surgery is the surgical modification of the gastrointestinal tract to produce durable weight loss and metabolic improvement in severe obesity that has not responded to medical management.",
        "Indian and Asia-Pacific criteria are five BMI units lower than Western criteria because of the higher metabolic risk of Asian Indians at any given BMI.",
      ],
      answer: [
        {
          heading: "Indications",
          points: [
            "BMI 37.5 kg/m2 or more with no comorbidity, or 32.5 kg/m2 or more with type 2 diabetes, obstructive sleep apnoea, hypertension, dyslipidaemia or severe joint disease.",
            "Documented failure of at least 6 months of supervised lifestyle modification with or without pharmacotherapy.",
            "Age usually 18-65, with the patient motivated, informed, and free of untreated psychiatric illness, active substance misuse or unfit anaesthetic risk.",
            "Multidisciplinary assessment by surgeon, physician or endocrinologist, dietitian, psychologist and anaesthetist before listing.",
          ],
        },
        {
          heading: "Procedures",
          points: [
            "Sleeve gastrectomy: resection of about 80% of the stomach along the greater curvature; restrictive with reduced ghrelin, 25-30% total weight loss, simpler, but worsens gastro-oesophageal reflux.",
            "Roux-en-Y gastric bypass: small gastric pouch with a Roux limb; 30-35% weight loss, superior diabetes remission and reflux control, but greater risk of nutritional deficiency, internal hernia and dumping.",
            "One-anastomosis (mini) gastric bypass is widely performed in India with similar results and a simpler anastomosis but a risk of bile reflux.",
            "Adjustable gastric banding has been largely abandoned for poor durability and band-related complications.",
          ],
        },
        {
          heading: "Outcomes and complications",
          points: [
            "Type 2 diabetes remission in 50-80% at 2 years, with improvement in blood pressure, lipids, sleep apnoea, fatty liver and fertility.",
            "Early: anastomotic leak, bleeding, venous thromboembolism, wound infection.",
            "Late: internal hernia and small bowel obstruction, marginal ulcer, dumping syndrome, gallstones, nutritional deficiency, Wernicke encephalopathy from thiamine deficiency with persistent vomiting, and weight regain in about a fifth by 5 years.",
          ],
        },
        {
          heading: "Long-term follow-up",
          points: [
            "Structured review at 1, 3, 6 and 12 months and annually thereafter, with weight, nutrition and psychological assessment.",
            "Lifelong supplementation: multivitamin, calcium citrate 1200-1500 mg daily, vitamin D, iron, vitamin B12 and thiamine, with annual haematinics, calcium, vitamin D and bone density where indicated.",
            "Re-titrate or withdraw diabetes and antihypertensive drugs early to avoid hypoglycaemia and hypotension as weight falls.",
            "Defer pregnancy for 12-18 months and provide effective contraception, since fertility often returns quickly.",
          ],
        },
      ],
      mustDraw: ["Table comparing sleeve gastrectomy with Roux-en-Y gastric bypass on mechanism, weight loss, diabetes remission and complications."],
      markSplit: [
        { part: "Indications with Indian BMI thresholds", marks: 1.5 },
        { part: "Procedures and their differences", marks: 1.5 },
        { part: "Outcomes and complications", marks: 1 },
        { part: "Long-term follow-up and supplementation", marks: 1 },
      ],
      keywords: ["bariatric surgery", "sleeve gastrectomy", "gastric bypass", "diabetes remission", "vitamin B12"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-obesity-metabolic-syndrome-q1",
      stem: "A 42-year-old Indian man has a BMI of 24.2 kg/m2 and a waist circumference of 97 cm. Fasting glucose is 104 mg/dL. How should he be classified?",
      options: [
        "Normal weight; reassure and repeat measurements in 3 years",
        "Overweight by Asian-Indian criteria with abdominal obesity, requiring full metabolic screening",
        "Obese by Asian-Indian criteria, requiring immediate pharmacotherapy",
        "Normal weight with a spuriously large waist, since BMI is the definitive measure",
      ],
      answer: 1,
      explanation:
        "A BMI of 23.0-24.9 kg/m2 is overweight by Asian-Indian criteria, and a waist of 97 cm is well above the 90 cm male threshold for abdominal obesity, so he needs a full metabolic screen including lipids and HbA1c. Calling him normal applies European thresholds inappropriately. Obesity would require a BMI of 25 or more, and drug therapy is not indicated at this BMI without failed lifestyle treatment and a comorbidity. BMI is not definitive in Indians precisely because it misses the visceral fat that the waist detects.",
      difficulty: "easy",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-q2",
      stem: "A 45-year-old Indian woman has a waist of 86 cm, triglyceride 168 mg/dL, HDL cholesterol 42 mg/dL, blood pressure 126/78 mmHg and fasting glucose 96 mg/dL. Using the modified NCEP ATP III criteria with Asian-Indian cut-offs, which is correct?",
      options: [
        "She has metabolic syndrome, meeting three of the five criteria",
        "She does not have metabolic syndrome, meeting only two criteria",
        "She does not have metabolic syndrome, because fasting glucose must be abnormal",
        "The diagnosis cannot be made without a fasting insulin level",
      ],
      answer: 0,
      explanation:
        "She meets abdominal obesity (86 cm exceeds the 80 cm female cut-off), raised triglyceride (168 mg/dL is 150 or more) and low HDL (42 mg/dL is below the female threshold of 50 mg/dL), which is three of five and therefore diagnostic. Counting only two comes from applying the male HDL threshold of 40 mg/dL to a woman. No single component is mandatory under ATP III - abdominal obesity is obligatory only in the IDF definition, and glucose is just one of the five. A fasting insulin belongs to the obsolete WHO 1999 definition and has no place in primary care.",
      difficulty: "hard",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-q3",
      stem: "A 36-year-old man with a BMI of 33 kg/m2 and type 2 diabetes on metformin has failed 8 months of supervised diet and exercise with a 2 kg loss. HbA1c is 8.4%. Which addition is most appropriate for both weight and glycaemia?",
      options: [
        "Glimepiride 2 mg daily before breakfast",
        "Pioglitazone 30 mg daily",
        "Semaglutide 0.25 mg weekly subcutaneously, titrated to 1 mg",
        "Premixed insulin 30/70 twice daily",
      ],
      answer: 2,
      explanation:
        "A GLP-1 receptor agonist lowers HbA1c by 1-1.5% while producing substantial weight loss, making it the ideal second agent when obesity and hyperglycaemia coexist. Glimepiride causes 2-3 kg of weight gain and hypoglycaemia, moving him in the wrong direction. Pioglitazone also causes weight gain and fluid retention. Premixed insulin is the most weight-gaining option of all and is not indicated at an HbA1c of 8.4% before non-insulin options have been tried.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-q4",
      stem: "An Indian patient with a BMI of 33.5 kg/m2, type 2 diabetes and obstructive sleep apnoea has failed medical management including a GLP-1 receptor agonist. What is the correct advice regarding bariatric surgery?",
      options: [
        "He does not qualify; Indian criteria require a BMI of 40 or more",
        "He qualifies, since Indian criteria allow surgery at a BMI of 32.5 or more with a significant comorbidity",
        "He qualifies only after his HbA1c falls below 6.5%",
        "Surgery is contraindicated because sleep apnoea makes anaesthesia unsafe",
      ],
      answer: 1,
      explanation:
        "Indian and Asia-Pacific consensus criteria set the threshold at a BMI of 32.5 kg/m2 with a significant comorbidity such as type 2 diabetes or sleep apnoea, and 37.5 kg/m2 without, five units lower than Western criteria because of higher metabolic risk at a given BMI. Quoting 40 applies Western thresholds. Requiring an HbA1c below 6.5% inverts the logic, since poor glycaemic control is an indication rather than a barrier. Obstructive sleep apnoea requires careful perioperative management with CPAP, not exclusion from surgery.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-q5",
      stem: "A 29-year-old woman who had a Roux-en-Y gastric bypass 14 months ago presents with confusion, unsteady gait and diplopia after 3 weeks of persistent vomiting. What must be given first?",
      options: [
        "Intravenous 25% dextrose for presumed hypoglycaemia",
        "Parenteral thiamine before any glucose-containing fluid",
        "Intramuscular vitamin B12 1000 mcg",
        "Oral multivitamin and antiemetics with outpatient review",
      ],
      answer: 1,
      explanation:
        "Confusion, ataxia and ophthalmoplegia after bariatric surgery with protracted vomiting is Wernicke encephalopathy from thiamine deficiency, and parenteral thiamine must be given before any glucose load because glucose consumes the remaining thiamine and precipitates irreversible damage. Giving dextrose first is precisely the error that converts a treatable encephalopathy into Korsakoff psychosis. Vitamin B12 deficiency causes subacute combined degeneration over months, not this acute triad. Oral vitamins and outpatient review are far too slow for a neurological emergency.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-q6",
      stem: "A 34-year-old woman taking an over-the-counter 'fat-cutter' herbal preparation reports palpitation, tremor, insomnia and a blood pressure of 158/96 mmHg. What is the most likely explanation?",
      options: [
        "Undeclared sibutramine or thyroxine adulteration of the preparation",
        "A genuine pharmacological effect of the herbal ingredients, which is expected and harmless",
        "Anxiety disorder unrelated to the preparation",
        "Orlistat toxicity from over-the-counter use",
      ],
      answer: 0,
      explanation:
        "Unregulated slimming preparations sold in India are repeatedly found to contain undeclared sibutramine, thyroxine or diuretics, and sibutramine was withdrawn worldwide for exactly this pattern of sympathomimetic effect and cardiovascular harm; the preparation should be stopped and the patient assessed. Treating these effects as expected and harmless ignores documented deaths from such adulteration. Anxiety disorder does not explain the temporal relationship and the hypertension. Orlistat acts in the gut lumen and causes gastrointestinal effects, not sympathomimetic ones.",
      difficulty: "easy",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-q7",
      stem: "Which statement about the thin-fat Indian phenotype is correct?",
      options: [
        "Indian newborns are heavier than European newborns with more lean mass",
        "Indian adults have less body fat than Europeans at the same BMI",
        "Indian newborns are lighter but have preserved subcutaneous fat with reduced lean mass, a pattern that persists into adulthood",
        "The phenotype is explained entirely by adult diet and has no intrauterine component",
      ],
      answer: 2,
      explanation:
        "The Pune Maternal Nutrition Study showed Indian babies are smaller than European babies yet conserve subcutaneous fat while sparing lean tissue least, and this fat-preserving, muscle-poor body composition persists into adult life and underlies the excess metabolic risk at a low BMI. Indian newborns are lighter, not heavier. Indian adults carry more, not less, body fat at any given BMI. The phenotype has a clear intrauterine and early-life origin in addition to adult diet, which is why the cut-offs are lowered rather than simply prescribing more exercise.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "endocrine-obesity-metabolic-syndrome-c1",
      front: "Asian-Indian BMI bands",
      back: "Normal 18.0-22.9; overweight 23.0-24.9; obesity 25.0 kg/m2 or more.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c2",
      front: "Asian-Indian waist cut-offs for abdominal obesity",
      back: "90 cm or more in men, 80 cm or more in women, measured midway between the lowest rib and iliac crest at end-expiration.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c3",
      front: "Five components of the metabolic syndrome (modified ATP III)",
      back: "Waist 90/80 cm; triglyceride 150 mg/dL or more; HDL below 40 (men) or 50 (women); BP 130/85 mmHg or more; fasting glucose 100 mg/dL or more. Any three of five.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c4",
      front: "How does the IDF definition differ from modified ATP III?",
      back: "IDF makes abdominal obesity obligatory and requires any two of the other four; ATP III needs any three of five with no obligatory component.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c5",
      front: "The thin-fat Indian phenotype",
      back: "Lighter babies with preserved subcutaneous fat and reduced lean mass (Pune Maternal Nutrition Study); more visceral fat and less muscle at every BMI in adulthood.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c6",
      front: "Waist-height rule for patients",
      back: "Keep the waist circumference below half the height; a waist-height ratio above 0.5 signals cardiometabolic risk.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c7",
      front: "First weight target to offer",
      back: "5-10% of baseline weight over 6 months at 0.5-1 kg a week; 5% alone improves glucose, blood pressure, triglyceride and liver fat.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c8",
      front: "Activity prescription in Indian obesity guidance",
      back: "About 60 minutes daily - 30 aerobic, 15 resistance, 15 flexibility - or at least 150-300 minutes a week of moderate activity with resistance work twice weekly.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c9",
      front: "Orlistat: dose, effect and caution",
      back: "120 mg three times daily with meals; 3-5% weight loss; oily stools and urgency, and needs fat-soluble vitamin supplementation taken separately.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c10",
      front: "GLP-1 based weight-loss doses",
      back: "Liraglutide 3 mg daily SC (5-8%); semaglutide 2.4 mg weekly SC (about 15%); tirzepatide 5-15 mg weekly (15-20%). Avoid with MEN2 or medullary thyroid carcinoma.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c11",
      front: "Indian bariatric surgery thresholds",
      back: "BMI 37.5 kg/m2 or more alone, or 32.5 kg/m2 or more with a significant comorbidity - five units below the Western criteria.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c12",
      front: "Lifelong supplements after bariatric surgery",
      back: "Multivitamin, calcium citrate 1200-1500 mg daily, vitamin D, iron, vitamin B12 and thiamine, with annual haematinics.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c13",
      front: "Drugs that commonly cause weight gain",
      back: "Olanzapine and clozapine, valproate, corticosteroids, insulin, sulfonylureas, pioglitazone, some oral contraceptives and beta-blockers.",
    },
    {
      id: "endocrine-obesity-metabolic-syndrome-c14",
      front: "Stage 1 versus stage 2 obesity (Indian 2025 framework)",
      back: "Stage 1 is raised adiposity without organ dysfunction, managed by lifestyle; stage 2 has mechanical or metabolic consequences and needs drugs or surgery.",
    },
  ],
  references: [
    "Misra A et al., Consensus Statement for Diagnosis of Obesity, Abdominal Obesity and the Metabolic Syndrome for Asian Indians, Journal of the Association of Physicians of India, 2009",
    "WHO Expert Consultation, Appropriate body-mass index for Asian populations, Lancet, 2004",
    "Kalra S, Misra A et al., Redefining obesity for Asian Indians - staged diagnosis and management, Lancet Diabetes and Endocrinology, 2025",
    "National Cholesterol Education Program Adult Treatment Panel III, with Asian waist modification",
    "International Diabetes Federation consensus worldwide definition of the metabolic syndrome, 2006",
    "Obesity Surgery Society of India and Asia-Pacific consensus on metabolic and bariatric surgery",
    "Yajnik CS et al., Pune Maternal Nutrition Study - the thin-fat Indian baby, International Journal of Obesity, 2003",
    "National Programme for Prevention and Control of Non-Communicable Diseases (NP-NCD) operational guidelines, MoHFW",
  ],
});

topics.push({
  id: "endocrine-vitamin-d-calcium",
  title: "Vitamin D deficiency and calcium disorders",
  oneLiner:
    "Vitamin D deficiency is defined by a serum 25-hydroxyvitamin D below 20 ng/mL and is near-universal in India despite abundant sunshine, presenting as bone pain, proximal myopathy, rickets or osteomalacia and treated with cholecalciferol 60,000 IU weekly for 8 weeks followed by monthly maintenance with adequate dietary calcium, while symptomatic hypocalcaemia and hypercalcaemia demand a parathyroid hormone level before any treatment.",
  frequency: "less-common",
  keywords: [
    "vitamin D deficiency",
    "25-hydroxyvitamin D",
    "cholecalciferol",
    "calcitriol",
    "rickets",
    "osteomalacia",
    "Looser zone",
    "hypocalcaemia",
    "Chvostek sign",
    "Trousseau sign",
    "hypoparathyroidism",
    "primary hyperparathyroidism",
    "hypercalcaemia",
    "parathyroid adenoma",
    "calcium carbonate",
    "calcium citrate",
    "osteoporosis",
    "ICMR RDA",
    "alfacalcidol",
    "magnesium",
  ],
  sections: [
    {
      heading: "Why vitamin D deficiency is so common in India",
      points: [
        "Community studies from across India report **serum 25-hydroxyvitamin D below 20 ng/mL in 50-90%** of apparently healthy adults, children, pregnant women and even outdoor workers - a paradox in a country lying between 8 and 37 degrees north with year-round sunshine.",
        "The reasons are behavioural and biological: **skin pigmentation** requires three to five times longer sun exposure to make the same vitamin D, **indoor work and urban high-rise living**, complete clothing coverage for cultural and religious reasons, **the widespread use of sunscreen and skin-lightening avoidance of the sun**, and atmospheric pollution which absorbs UVB in cities.",
        "**Dietary intake is negligible** in a largely vegetarian population - vitamin D occurs naturally in oily fish, egg yolk and liver, and Indian milk is not routinely fortified, so almost none is obtained from food.",
        "**A high phytate and low calcium diet** compounds it: an average Indian intake of 300-400 mg of calcium a day against the ICMR recommendation of 1000 mg means that even adequate vitamin D cannot maintain calcium balance, and the resulting secondary hyperparathyroidism accelerates vitamin D catabolism.",
        "Groups at highest risk: **exclusively breastfed infants without supplementation**, pregnant and lactating women, veiled women, the elderly and housebound, patients on **phenytoin, phenobarbitone, rifampicin or long-term corticosteroids**, those with malabsorption (coeliac disease, chronic pancreatitis, post-bariatric surgery) and chronic kidney or liver disease.",
        "The practical inference is that **treatment is often started empirically in high-risk symptomatic patients**, because the assay costs more than the eight weeks of cholecalciferol it would justify.",
      ],
    },
    {
      heading: "Recognising deficiency and its bone disease",
      points: [
        "Adults typically present with **vague generalised body ache, low back and pelvic pain, bone tenderness over the sternum and tibiae, difficulty rising from a squat or climbing stairs from proximal myopathy, and a waddling gait** - a picture endlessly mislabelled as fibromyalgia or 'weakness'.",
        "**Osteomalacia** is defective mineralisation of mature bone: bone pain, muscle weakness, pseudofractures (**Looser zones**) on the pubic rami, femoral neck, ribs and scapula, and a raised alkaline phosphatase with a low or low-normal calcium and phosphate.",
        "**Rickets** is the same defect in the growing skeleton: delayed closure of the anterior fontanelle, craniotabes, frontal bossing, **rachitic rosary**, **Harrison sulcus**, widened wrists and ankles, bow legs or knock knees, delayed dentition, delayed motor milestones and, in infancy, hypocalcaemic seizures or stridor from laryngospasm.",
        "**Nutritional rickets in India is often calcium-deficiency rickets** rather than pure vitamin D deficiency, so treatment must always include calcium and not vitamin D alone - a point examiners like.",
        "Biochemistry of deficiency progresses in stages: **first a rise in parathyroid hormone with normal calcium**, then a falling phosphate with a rising alkaline phosphatase, and only late a frank hypocalcaemia - so a normal serum calcium never excludes deficiency.",
        "Radiological signs in rickets: **cupping, splaying and fraying of the metaphysis** at the wrist and knee, widened growth plate, and generalised osteopenia; the wrist radiograph is the single most useful film.",
      ],
    },
    {
      heading: "Testing and treating vitamin D deficiency",
      points: [
        "**Measure serum 25-hydroxyvitamin D, not 1,25-dihydroxyvitamin D.** The 25-hydroxy form has a 2-3 week half-life and reflects stores; the 1,25 form is short-lived, is often normal or high in deficiency because of secondary hyperparathyroidism, and is reserved for suspected rickets of renal origin or 1-alpha-hydroxylase problems.",
        "**Interpretation: deficiency below 20 ng/mL, insufficiency 20-29 ng/mL, sufficiency 30-100 ng/mL, potential toxicity above 150 ng/mL** (multiply by 2.5 for nmol/L).",
        "**Do not screen the whole population.** Test when there is bone pain with proximal myopathy, suspected rickets or osteomalacia, osteoporosis before starting a bisphosphonate, malabsorption, chronic kidney disease, recurrent fractures, or a patient on anticonvulsants or long-term steroids.",
        "**Treatment of deficiency in adults: cholecalciferol 60,000 IU once a week for 8 weeks** (a total of about 480,000 IU), then a maintenance of **60,000 IU once a month** or 1000-2000 IU daily, taken with a fatty meal because absorption is fat dependent.",
        "**Give calcium alongside**: elemental calcium 500 mg twice daily as calcium carbonate (taken with food, since it needs gastric acid) or calcium citrate (usable on an empty stomach and preferred on a proton pump inhibitor or after bariatric surgery).",
        "**Children:** cholecalciferol 2000 IU daily for 6 weeks or 60,000 IU weekly for 6 weeks by age and weight, with elemental calcium 500 mg daily, and 400 IU daily thereafter. **Every exclusively breastfed infant needs 400 IU daily from birth**, and IAP advises 400 IU daily for all infants and 600 IU for children and adolescents.",
        "**Recheck at 3 months, not earlier**, and check calcium and creatinine if high doses have been used. Do not use undated mega-doses of 6 lakh IU by injection casually - vitamin D toxicity with hypercalcaemia, nephrocalcinosis and renal failure is now regularly seen in India from repeated unsupervised injections.",
        "**Use active vitamin D (calcitriol 0.25-0.5 mcg twice daily or alfacalcidol) only where 1-alpha-hydroxylation fails or is bypassed** - chronic kidney disease, hypoparathyroidism, vitamin D-dependent rickets type 1 - never as routine replacement, because it does not replenish stores and readily causes hypercalcaemia.",
      ],
    },
    {
      heading: "Hypocalcaemia",
      points: [
        "**Always correct the measured calcium for albumin** before acting: corrected calcium equals measured calcium plus 0.8 times (4.0 minus serum albumin in g/dL). An ionised calcium is better still where available, and an alkalosis from hyperventilation lowers ionised calcium without changing the total.",
        "Symptoms follow the level and its speed of fall: **perioral and acral paraesthesia, muscle cramps, carpopedal spasm, laryngospasm with stridor, tetany, seizures**, and on the ECG a **prolonged QT interval** which can lead to arrhythmia.",
        "**Chvostek sign** is twitching of the facial muscles on tapping the facial nerve in front of the tragus - present in up to 10-25% of normal people, so it is suggestive rather than diagnostic. **Trousseau sign** is carpal spasm within 3 minutes of inflating a cuff above systolic pressure and is far more specific.",
        "Causes: **vitamin D deficiency and osteomalacia** (the commonest in India), **hypoparathyroidism** - most often post-surgical after thyroidectomy or parathyroidectomy, sometimes autoimmune or from infiltration, **chronic kidney disease**, **hypomagnesaemia**, acute pancreatitis, massive transfusion with citrate, tumour lysis syndrome, and pseudohypoparathyroidism.",
        "**Hypomagnesaemia must be corrected first**: magnesium below 0.5 mmol/L impairs both parathyroid hormone secretion and its action at the bone, so calcium will not correct until magnesium is replaced - a classic cause of refractory hypocalcaemia in the alcoholic, the malnourished and the patient on a proton pump inhibitor or diuretic.",
        "**Acute symptomatic hypocalcaemia:** 10 mL of 10% calcium gluconate (about 90 mg elemental calcium) diluted in 50-100 mL of 5% dextrose given intravenously over 10 minutes with cardiac monitoring, repeated as needed and followed by an infusion of 10 ampoules in 1 litre of 5% dextrose at 50-100 mL/hour. Never give calcium chloride peripherally and never give calcium as a rapid bolus to a patient on digoxin.",
        "**Chronic hypoparathyroidism** is managed with elemental calcium 1-2 g daily in divided doses plus **calcitriol 0.25-1 mcg twice daily**, aiming for a low-normal serum calcium and a 24-hour urine calcium below 300 mg to avoid nephrocalcinosis; plain cholecalciferol alone will not work because 1-alpha-hydroxylation is parathyroid hormone dependent.",
      ],
    },
    {
      heading: "Hypercalcaemia and primary hyperparathyroidism",
      points: [
        "**Primary hyperparathyroidism and malignancy account for about 90% of hypercalcaemia.** In the outpatient with an incidental raised calcium and no illness, think primary hyperparathyroidism; in the unwell inpatient with rapid onset, think malignancy.",
        "Clinical shorthand: **stones, bones, abdominal groans and psychic moans** - renal calculi and nephrocalcinosis, bone pain, osteitis fibrosa cystica and fractures, constipation, peptic ulcer and pancreatitis, and depression, poor concentration or confusion, together with polyuria, polydipsia and fatigue.",
        "**The diagnostic pair is calcium with an intact parathyroid hormone measured on the same sample.** A raised or inappropriately normal parathyroid hormone with hypercalcaemia is primary hyperparathyroidism; a suppressed parathyroid hormone points to malignancy, vitamin D toxicity, sarcoidosis, thyrotoxicosis, immobilisation or milk-alkali syndrome.",
        "**Indian primary hyperparathyroidism is still often symptomatic** at presentation - overt bone disease, brown tumours and renal stones - unlike the asymptomatic biochemical disease of the West, because routine calcium testing is not universal.",
        "Always check a **24-hour urine calcium and creatinine clearance**: **familial hypocalciuric hypercalcaemia** has a low urinary calcium excretion with a calcium-creatinine clearance ratio below 0.01, is benign and autosomal dominant, and must not be sent for parathyroidectomy.",
        "**Parathyroidectomy is indicated** for symptomatic disease, and in asymptomatic disease for serum calcium more than 1 mg/dL above the upper limit, creatinine clearance below 60 mL/min, a T-score of -2.5 or less or a vertebral fracture, renal stones or nephrocalcinosis, urinary calcium above 400 mg a day, or age below 50. Localise first with sestamibi scanning and neck ultrasound.",
        "**Acute severe hypercalcaemia (above 14 mg/dL or symptomatic):** intravenous normal saline 200-300 mL/hour to restore volume and promote calciuresis, a loop diuretic only after rehydration and only for fluid overload, **zoledronic acid 4 mg intravenously** (onset 2-4 days), calcitonin 4 IU/kg 12-hourly for rapid but short-lived effect, and steroids for the hypercalcaemia of sarcoidosis, lymphoma or vitamin D toxicity. Stop thiazides, lithium, calcium and vitamin D supplements.",
      ],
    },
    {
      heading: "Calcium requirement, sources and osteoporosis prevention",
      points: [
        "**ICMR-NIN 2020 recommended dietary allowance for calcium is 1000 mg a day for adults, 1000-1200 mg in pregnancy and lactation, 850 mg for children aged 10-12 and about 1050 mg for adolescents**; actual Indian intakes average only 300-500 mg a day.",
        "**Dietary sources to name in a diet plan:** milk and curd (about 120 mg per 100 mL), paneer, ragi (finger millet, one of the richest vegetarian sources at about 350 mg per 100 g), til (sesame), amaranth and other green leafy vegetables, drumstick leaves, small fish eaten with bones, and almonds.",
        "**Calcium carbonate contains 40% elemental calcium** and is the cheapest, but needs gastric acid so must be taken with food; **calcium citrate contains 21%** and is absorbed without acid, making it the right choice on a proton pump inhibitor, in achlorhydria and after bariatric surgery. Absorption is best in **doses of 500 mg or less at a time**.",
        "Under **Anaemia Mukt Bharat and the antenatal care schedule, calcium 500 mg with vitamin D 250 IU twice daily is given from 14 weeks of gestation through pregnancy and for 6 months postpartum**, taken at a different time from iron and folic acid because calcium impairs iron absorption.",
        "For **osteoporosis prevention**: adequate calcium and vitamin D, weight-bearing and resistance exercise, tobacco and alcohol cessation, fall prevention at home, and correction of deficiency before starting a bisphosphonate - giving zoledronic acid to a vitamin D deficient patient precipitates severe hypocalcaemia.",
        "Do not over-supplement: **calcium supplements above about 1000-1200 mg a day**, particularly without dietary need, add nothing for bone and increase the risk of renal stones and constipation.",
      ],
    },
  ],
  tables: [
    {
      heading: "Interpreting serum 25-hydroxyvitamin D",
      columns: ["Category", "25(OH)D level", "Action"],
      rows: [
        ["Deficiency", "Below 20 ng/mL (50 nmol/L)", "Cholecalciferol 60,000 IU weekly for 8 weeks with calcium, then monthly maintenance"],
        ["Insufficiency", "20-29 ng/mL", "Cholecalciferol 60,000 IU monthly or 1000-2000 IU daily with dietary calcium"],
        ["Sufficiency", "30-100 ng/mL", "No treatment; maintain sun exposure and dietary calcium"],
        ["Excess", "Above 100 ng/mL", "Stop supplements, check serum and urine calcium"],
        ["Toxicity", "Above 150 ng/mL with hypercalcaemia", "Stop vitamin D and calcium, hydrate, steroids if severe, check renal function"],
      ],
    },
    {
      heading: "Biochemical patterns in metabolic bone disease",
      columns: ["Condition", "Calcium", "Phosphate", "Alkaline phosphatase", "Parathyroid hormone"],
      rows: [
        ["Vitamin D deficiency / osteomalacia", "Low or low-normal", "Low", "High", "High (secondary)"],
        ["Primary hyperparathyroidism", "High", "Low", "Normal or high", "High or inappropriately normal"],
        ["Hypoparathyroidism", "Low", "High", "Normal", "Low or undetectable"],
        ["Chronic kidney disease - mineral bone disorder", "Low or normal", "High", "High", "High (secondary or tertiary)"],
        ["Hypercalcaemia of malignancy", "High", "Variable", "High if bone metastases", "Suppressed"],
        ["Osteoporosis (uncomplicated)", "Normal", "Normal", "Normal", "Normal"],
      ],
    },
    {
      heading: "Calcium salts and vitamin D preparations in Indian practice",
      columns: ["Preparation", "Elemental content or strength", "When to choose it"],
      rows: [
        ["Calcium carbonate 1250 mg tablet", "500 mg elemental calcium (40%)", "Cheapest; take with food, needs gastric acid"],
        ["Calcium citrate 1000 mg tablet", "About 210 mg elemental calcium (21%)", "On a proton pump inhibitor, achlorhydria, post-bariatric surgery, stone formers"],
        ["Cholecalciferol 60,000 IU sachet", "Vitamin D3", "Weekly for 8 weeks to treat deficiency, then monthly maintenance"],
        ["Calcitriol 0.25 mcg capsule", "Active 1,25-dihydroxyvitamin D", "Hypoparathyroidism, chronic kidney disease; not for routine replacement"],
        ["Calcium gluconate 10% ampoule", "About 90 mg elemental calcium per 10 mL", "Acute symptomatic hypocalcaemia, diluted and given slowly"],
      ],
    },
  ],
  redFlags: [
    "Carpopedal spasm, stridor or a seizure with a low calcium - give intravenous calcium gluconate immediately with cardiac monitoring rather than waiting for oral treatment to work.",
    "Hypocalcaemia that will not correct despite adequate calcium and vitamin D - measure and replace magnesium, since hypomagnesaemia blocks both parathyroid hormone release and its action.",
    "Serum calcium above 14 mg/dL, or any hypercalcaemia with drowsiness, vomiting or dehydration - admit for intravenous saline and a bisphosphonate.",
    "Hypercalcaemia with a suppressed parathyroid hormone, weight loss and bone pain - look for malignancy with myeloma screen, chest imaging and a bone scan rather than repeating the calcium.",
    "A child with bow legs, a rachitic rosary and a hypocalcaemic seizure - treat as nutritional rickets urgently with calcium as well as vitamin D, and check for renal tubular disease if it recurs.",
    "Vomiting, polyuria, confusion and renal impairment after repeated unsupervised 6 lakh IU vitamin D injections - vitamin D toxicity with hypercalcaemia and nephrocalcinosis.",
    "New hypocalcaemia with perioral tingling in the first 48 hours after thyroidectomy - post-surgical hypoparathyroidism until proved otherwise; check calcium urgently before discharge.",
  ],
  pearls: [
    "Measure 25-hydroxyvitamin D and not 1,25-dihydroxyvitamin D: the active form is often normal or even high in deficiency because secondary hyperparathyroidism drives its production.",
    "A normal serum calcium does not exclude vitamin D deficiency - parathyroid hormone rises first and defends the calcium until the bone disease is advanced.",
    "Indian nutritional rickets is frequently calcium-deficiency rickets, so calcium must be given with the vitamin D or the child will not heal.",
    "Always correct calcium for albumin: add 0.8 mg/dL to the measured calcium for every 1 g/dL that albumin falls below 4 g/dL, or you will chase a hypocalcaemia that does not exist.",
    "Trousseau sign beats Chvostek sign - up to a quarter of normal people have a positive Chvostek, but carpal spasm on cuff inflation is genuinely specific.",
    "Refractory hypocalcaemia means check the magnesium; nothing else will work until it is replaced.",
    "Calcium plus a raised or inappropriately normal parathyroid hormone on the same sample makes the diagnosis of primary hyperparathyroidism - no imaging is needed to diagnose it, only to localise it before surgery.",
    "Check the urinary calcium before referring for parathyroidectomy: familial hypocalciuric hypercalcaemia is benign, has a calcium-creatinine clearance ratio below 0.01, and needs no operation.",
    "Correct vitamin D deficiency before giving a bisphosphonate, or you will precipitate severe symptomatic hypocalcaemia.",
  ],
  theory: [
    {
      id: "endocrine-vitamin-d-calcium-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "less-common",
      question:
        "A 34-year-old veiled homemaker presents with generalised body ache of one year, difficulty in rising from a squat and pain in both hips. Discuss the likely diagnosis, the causes of this condition in India, its clinical and biochemical features, and management.",
      openingLines: [
        "The picture of generalised bone pain with proximal myopathy in a young Indian woman with limited sun exposure is characteristic of vitamin D deficiency with osteomalacia, defined biochemically by a serum 25-hydroxyvitamin D below 20 ng/mL.",
        "Osteomalacia is defective mineralisation of mature bone matrix, the adult counterpart of rickets, and is one of the most under-diagnosed treatable causes of chronic musculoskeletal pain in Indian practice.",
      ],
      answer: [
        {
          heading: "1. Why deficiency is common in India",
          points: [
            "Reduced synthesis: skin pigmentation requiring longer exposure, complete clothing coverage, indoor living and work, urban high-rise housing, sunscreen use and atmospheric pollution absorbing UVB.",
            "Negligible dietary intake in a predominantly vegetarian diet with no routine fortification of milk or oil.",
            "Low dietary calcium of 300-500 mg a day against an ICMR requirement of 1000 mg, with a high phytate load, producing secondary hyperparathyroidism that accelerates vitamin D catabolism.",
            "Additional risks: repeated pregnancy and prolonged lactation, malabsorption, chronic kidney or liver disease, and drugs such as phenytoin, phenobarbitone, rifampicin and corticosteroids.",
          ],
        },
        {
          heading: "2. Clinical features",
          points: [
            "Symptoms: diffuse bony pain especially in the pelvis, low back, ribs and thighs; proximal muscle weakness with difficulty rising from a squat or climbing stairs; a waddling gait; and fatigue.",
            "Signs: bone tenderness on sternal and tibial pressure, proximal myopathy without wasting or fasciculation, waddling gait, and sometimes deformity or fracture.",
            "Complications: fragility and pseudofractures, hypocalcaemic tetany, and increased fall and fracture risk in the elderly.",
            "Differential diagnosis: fibromyalgia, hypothyroid myopathy, polymyalgia rheumatica, myeloma, metastatic bone disease and inflammatory myopathy.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Serum 25-hydroxyvitamin D: below 20 ng/mL confirms deficiency; 20-29 ng/mL is insufficiency.",
            "Serum calcium (corrected for albumin), phosphate, alkaline phosphatase, intact parathyroid hormone, creatinine and magnesium.",
            "Typical pattern: low or low-normal calcium, low phosphate, high alkaline phosphatase and high parathyroid hormone.",
            "Radiographs of the pelvis and femur for Looser zones or pseudofractures; a wrist film in children for metaphyseal cupping and fraying; DXA if osteoporosis is also suspected.",
            "Search for malabsorption (coeliac serology, faecal fat) if deficiency recurs after adequate treatment.",
          ],
        },
        {
          heading: "4. Treatment",
          points: [
            "Cholecalciferol 60,000 IU orally once a week for 8 weeks, taken with a fatty meal, followed by 60,000 IU monthly or 1000-2000 IU daily as maintenance.",
            "Elemental calcium 500 mg twice daily as calcium carbonate with food, or calcium citrate if on a proton pump inhibitor, continued throughout.",
            "Counsel on 15-30 minutes of sun exposure to the face, arms and legs between 10 am and 3 pm on most days, and on calcium-rich foods - milk, curd, paneer, ragi, sesame, green leafy vegetables and small fish with bones.",
            "Analgesia and graded physiotherapy for the myopathy; symptoms improve within 2-4 weeks and strength over 3-6 months.",
            "Use calcitriol only if there is chronic kidney disease or hypoparathyroidism, never as routine replacement.",
          ],
        },
        {
          heading: "5. Monitoring and prevention",
          points: [
            "Recheck 25-hydroxyvitamin D, calcium and alkaline phosphatase at 3 months; alkaline phosphatase falling towards normal confirms healing.",
            "Check serum and urine calcium if high doses have been used, and avoid repeated unsupervised mega-dose injections which cause hypercalcaemia and nephrocalcinosis.",
            "Prevention: 400 IU daily for all infants from birth including the exclusively breastfed, 600 IU for children and adolescents, supplementation in pregnancy and lactation with calcium 500 mg twice daily from 14 weeks under the antenatal schedule, and fortified food promotion.",
            "Screen the household - deficiency is shared by family members with the same diet and sun exposure.",
          ],
        },
      ],
      mustDraw: [
        "Table of calcium, phosphate, alkaline phosphatase and parathyroid hormone in osteomalacia, primary hyperparathyroidism, hypoparathyroidism and osteoporosis.",
        "Table of 25-hydroxyvitamin D categories with the corresponding treatment.",
      ],
      markSplit: [
        { part: "Diagnosis and definition", marks: 1 },
        { part: "Causes specific to India", marks: 2 },
        { part: "Clinical features and differential diagnosis", marks: 2 },
        { part: "Investigations with the expected biochemical pattern", marks: 2 },
        { part: "Treatment doses and prevention", marks: 3 },
      ],
      keywords: ["vitamin D deficiency", "osteomalacia", "cholecalciferol", "Looser zone", "proximal myopathy"],
    },
    {
      id: "endocrine-vitamin-d-calcium-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Write short notes on the causes and emergency management of symptomatic hypocalcaemia.",
      openingLines: [
        "Hypocalcaemia is a corrected serum calcium below 8.5 mg/dL, where the corrected value equals the measured calcium plus 0.8 times the deficit of albumin below 4 g/dL.",
        "It becomes an emergency when it produces tetany, laryngospasm, seizures or a prolonged QT interval with arrhythmia, and treatment must then precede full aetiological work-up.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Vitamin D deficiency and osteomalacia - the commonest cause in India.",
            "Hypoparathyroidism: post-thyroidectomy or post-parathyroidectomy (commonest), autoimmune, infiltrative, or as part of DiGeorge syndrome.",
            "Hypomagnesaemia, which impairs both parathyroid hormone secretion and its peripheral action.",
            "Chronic kidney disease with hyperphosphataemia and reduced 1-alpha-hydroxylation.",
            "Acute pancreatitis, massive transfusion with citrate, tumour lysis syndrome, rhabdomyolysis, and pseudohypoparathyroidism with end-organ resistance.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Perioral and acral paraesthesia, muscle cramps, carpopedal spasm and tetany.",
            "Laryngospasm with stridor, bronchospasm, and generalised seizures.",
            "Chvostek sign (facial twitch on tapping the facial nerve, non-specific) and Trousseau sign (carpal spasm within 3 minutes of cuff inflation, specific).",
            "ECG shows a prolonged QT interval; chronic hypocalcaemia causes cataract, basal ganglia calcification, dry skin and brittle nails.",
          ],
        },
        {
          heading: "Emergency management",
          points: [
            "Secure airway and give oxygen; attach cardiac monitoring and obtain intravenous access.",
            "Calcium gluconate 10%, 10 mL (about 90 mg elemental calcium) diluted in 50-100 mL of 5% dextrose intravenously over 10 minutes, repeated until symptoms settle.",
            "Follow with an infusion of 10 ampoules of 10% calcium gluconate in 1 litre of 5% dextrose at 50-100 mL/hour, titrated to keep calcium at the lower end of normal.",
            "Measure and replace magnesium; hypocalcaemia will not correct while magnesium is low.",
            "Extreme caution in patients on digoxin, since calcium potentiates digoxin toxicity; avoid calcium chloride peripherally because of tissue necrosis on extravasation.",
          ],
        },
        {
          heading: "Continuing treatment",
          points: [
            "Oral elemental calcium 1-2 g daily in divided doses once symptoms settle.",
            "Cholecalciferol for deficiency; calcitriol 0.25-1 mcg twice daily for hypoparathyroidism or chronic kidney disease, since plain vitamin D cannot be activated without parathyroid hormone.",
            "Monitor calcium, phosphate, magnesium and 24-hour urine calcium, keeping urinary calcium below 300 mg a day to avoid nephrocalcinosis.",
            "Identify and treat the cause, and issue a written warning card after thyroid or parathyroid surgery.",
          ],
        },
      ],
      mustDraw: ["Flow chart: symptomatic hypocalcaemia - IV calcium gluconate 10 mL over 10 min - infusion - check magnesium - oral calcium with cholecalciferol or calcitriol by cause."],
      markSplit: [
        { part: "Definition with albumin correction", marks: 1 },
        { part: "Causes", marks: 1 },
        { part: "Clinical features and signs", marks: 1 },
        { part: "Emergency drug treatment with doses", marks: 2 },
      ],
      keywords: ["hypocalcaemia", "calcium gluconate", "Trousseau", "hypomagnesaemia", "hypoparathyroidism"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-vitamin-d-calcium-q1",
      stem: "A 40-year-old woman with generalised body ache and difficulty climbing stairs has calcium 8.2 mg/dL, phosphate 2.1 mg/dL, alkaline phosphatase 420 IU/L and parathyroid hormone 128 pg/mL. Which test confirms the diagnosis?",
      options: [
        "Serum 1,25-dihydroxyvitamin D",
        "Serum 25-hydroxyvitamin D",
        "Sestamibi parathyroid scan",
        "Serum protein electrophoresis",
      ],
      answer: 1,
      explanation:
        "Low calcium and phosphate with a high alkaline phosphatase and secondary rise in parathyroid hormone is the classic pattern of vitamin D deficiency osteomalacia, and 25-hydroxyvitamin D is the storage form that confirms it. The 1,25-dihydroxy form is often normal or even raised in deficiency because the high parathyroid hormone drives 1-alpha-hydroxylation, so it will mislead. A sestamibi scan localises a parathyroid adenoma in primary hyperparathyroidism, which would show a high calcium rather than a low one. Protein electrophoresis screens for myeloma, which typically raises calcium and leaves alkaline phosphatase normal.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-vitamin-d-calcium-q2",
      stem: "A 55-year-old man had a total thyroidectomy 36 hours ago and now reports perioral tingling and cramps. Corrected calcium is 6.9 mg/dL and he has carpal spasm on inflating the blood pressure cuff. What is the immediate treatment?",
      options: [
        "Oral calcium carbonate 500 mg twice daily and review in the morning",
        "Cholecalciferol 60,000 IU orally as a single dose",
        "10 mL of 10% calcium gluconate diluted in 5% dextrose intravenously over 10 minutes with cardiac monitoring",
        "Intravenous magnesium sulphate 2 g alone",
      ],
      answer: 2,
      explanation:
        "Symptomatic hypocalcaemia with a positive Trousseau sign after thyroidectomy is post-surgical hypoparathyroidism and needs intravenous calcium gluconate given slowly under cardiac monitoring, followed by an infusion and then oral calcium with calcitriol. Oral calcium alone acts too slowly for tetany that can progress to laryngospasm. Cholecalciferol cannot be 1-alpha-hydroxylated without parathyroid hormone and takes days regardless. Magnesium should be checked and replaced if low but does not treat symptomatic tetany on its own.",
      difficulty: "easy",
    },
    {
      id: "endocrine-vitamin-d-calcium-q3",
      stem: "A 58-year-old woman has an incidental serum calcium of 11.4 mg/dL. Intact parathyroid hormone is 96 pg/mL (normal 15-65), phosphate is 2.2 mg/dL and she has had two renal stones. What is the diagnosis and the appropriate next step?",
      options: [
        "Hypercalcaemia of malignancy; arrange a bone scan and myeloma screen",
        "Primary hyperparathyroidism; refer for parathyroidectomy after sestamibi and ultrasound localisation",
        "Familial hypocalciuric hypercalcaemia; reassure and take no further action",
        "Vitamin D toxicity; stop supplements and recheck in 6 weeks",
      ],
      answer: 1,
      explanation:
        "Hypercalcaemia with an inappropriately raised parathyroid hormone and a low phosphate is primary hyperparathyroidism, and renal stones are an accepted indication for parathyroidectomy, with sestamibi and ultrasound used to localise the adenoma before surgery. Malignant hypercalcaemia suppresses parathyroid hormone, so a level of 96 pg/mL excludes it. Familial hypocalciuric hypercalcaemia can mimic this biochemically but has a low urinary calcium and does not cause stones, and should be excluded with a calcium-creatinine clearance ratio before surgery rather than assumed. Vitamin D toxicity also suppresses parathyroid hormone.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-vitamin-d-calcium-q4",
      stem: "A malnourished man with alcohol dependence has a corrected calcium of 7.2 mg/dL that fails to rise after 48 hours of adequate intravenous and oral calcium. What is the most likely reason?",
      options: [
        "Hypomagnesaemia impairing parathyroid hormone secretion and action",
        "Coexisting hyperphosphataemia from chronic kidney disease",
        "Inadequate dose of vitamin D",
        "Laboratory error in the albumin correction",
      ],
      answer: 0,
      explanation:
        "Refractory hypocalcaemia in an alcoholic or malnourished patient is nearly always hypomagnesaemia, which both blocks parathyroid hormone release and causes end-organ resistance to it, so calcium cannot normalise until magnesium is replaced. Hyperphosphataemia contributes in renal failure but does not typically produce complete refractoriness in this setting. Vitamin D takes days to weeks and would not explain failure of intravenous calcium to raise the level at all. Repeating the albumin correction may be prudent but does not explain a genuinely low ionised calcium with symptoms.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-vitamin-d-calcium-q5",
      stem: "A 3-year-old child from an urban slum has bow legs, a rachitic rosary and widened wrists. Serum calcium is 7.8 mg/dL, phosphate 2.6 mg/dL, alkaline phosphatase 890 IU/L and 25-hydroxyvitamin D is 9 ng/mL. Which treatment is correct?",
      options: [
        "Cholecalciferol alone, since calcium intake is adequate in all Indian diets",
        "Calcitriol 0.25 mcg twice daily as the drug of choice",
        "Cholecalciferol 60,000 IU weekly for 6 weeks together with elemental calcium 500 mg daily",
        "Intramuscular vitamin D 6 lakh IU repeated monthly for six months",
      ],
      answer: 2,
      explanation:
        "Nutritional rickets in India is usually a combined calcium and vitamin D deficiency, so treatment requires both cholecalciferol and elemental calcium, followed by maintenance vitamin D and dietary counselling. Vitamin D alone frequently fails to heal Indian nutritional rickets because dietary calcium averages only 300-500 mg a day. Calcitriol bypasses the storage pool, does not replenish it, and risks hypercalcaemia; it is reserved for renal disease and vitamin D-dependent rickets. Repeated 6 lakh IU injections are a recognised cause of vitamin D toxicity with hypercalcaemia and nephrocalcinosis.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-vitamin-d-calcium-q6",
      stem: "A 62-year-old woman on long-term omeprazole for reflux needs calcium supplementation for osteoporosis. Which preparation is most appropriate and why?",
      options: [
        "Calcium carbonate, because it contains the highest percentage of elemental calcium",
        "Calcium citrate, because its absorption does not depend on gastric acid",
        "Calcium gluconate tablets, because they are best tolerated",
        "Calcium lactate, because it is unaffected by dietary phytate",
      ],
      answer: 1,
      explanation:
        "Calcium carbonate requires gastric acid for dissolution, so a proton pump inhibitor substantially reduces its absorption; calcium citrate is absorbed independently of acid and is the correct choice in achlorhydria, on acid suppression and after bariatric surgery. Carbonate does contain the most elemental calcium at 40%, but that is irrelevant if it cannot be dissolved. Calcium gluconate tablets contain very little elemental calcium and are impractical orally. Calcium lactate is also acid dependent and phytate affects all salts similarly.",
      difficulty: "easy",
    },
    {
      id: "endocrine-vitamin-d-calcium-q7",
      stem: "A 68-year-old woman with a T-score of -3.1 and a 25-hydroxyvitamin D of 12 ng/mL is due to receive zoledronic acid. What must be done first?",
      options: [
        "Nothing; bisphosphonates can be given regardless of vitamin D status",
        "Correct the vitamin D deficiency and confirm a normal serum calcium before infusion",
        "Give a loop diuretic to protect the kidneys before infusion",
        "Start calcitriol 0.5 mcg twice daily indefinitely",
      ],
      answer: 1,
      explanation:
        "A potent intravenous bisphosphonate given to a vitamin D deficient patient causes severe symptomatic hypocalcaemia, so deficiency must be corrected and calcium confirmed normal before the infusion. Ignoring vitamin D status is precisely the error that produces post-infusion tetany. A loop diuretic lowers calcium further and increases the risk. Calcitriol is not the correct replacement for simple nutritional deficiency and would not replenish stores.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "endocrine-vitamin-d-calcium-c1",
      front: "Vitamin D cut-offs on serum 25(OH)D",
      back: "Deficiency below 20 ng/mL; insufficiency 20-29; sufficiency 30-100; toxicity above 150 ng/mL with hypercalcaemia.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c2",
      front: "Standard adult treatment regimen for vitamin D deficiency",
      back: "Cholecalciferol 60,000 IU weekly for 8 weeks with a fatty meal, then 60,000 IU monthly or 1000-2000 IU daily, plus elemental calcium 500 mg twice daily.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c3",
      front: "Which vitamin D metabolite to measure, and why",
      back: "25-hydroxyvitamin D, because it has a 2-3 week half-life and reflects stores; the 1,25 form is often normal or high in deficiency due to secondary hyperparathyroidism.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c4",
      front: "Albumin correction of serum calcium",
      back: "Corrected calcium = measured calcium + 0.8 x (4.0 - serum albumin in g/dL).",
    },
    {
      id: "endocrine-vitamin-d-calcium-c5",
      front: "Chvostek versus Trousseau sign",
      back: "Chvostek is facial twitch on tapping the facial nerve, positive in up to 25% of normals. Trousseau is carpal spasm within 3 minutes of cuff inflation and is far more specific.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c6",
      front: "Acute symptomatic hypocalcaemia dose",
      back: "10 mL of 10% calcium gluconate (about 90 mg elemental calcium) in 50-100 mL of 5% dextrose IV over 10 minutes with cardiac monitoring, then an infusion.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c7",
      front: "Refractory hypocalcaemia - what have you forgotten?",
      back: "Magnesium. Hypomagnesaemia impairs parathyroid hormone secretion and its action; calcium will not correct until magnesium is replaced.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c8",
      front: "Biochemistry of osteomalacia",
      back: "Low or low-normal calcium, low phosphate, high alkaline phosphatase, high parathyroid hormone, low 25(OH)D.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c9",
      front: "Biochemistry of primary hyperparathyroidism",
      back: "High calcium, low phosphate, high or inappropriately normal parathyroid hormone; alkaline phosphatase raised when bone disease is present.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c10",
      front: "Familial hypocalciuric hypercalcaemia - how to spot it",
      back: "Hypercalcaemia with a raised parathyroid hormone but a low urinary calcium and a calcium-creatinine clearance ratio below 0.01; autosomal dominant, benign, needs no surgery.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c11",
      front: "Acute severe hypercalcaemia management",
      back: "Intravenous normal saline 200-300 mL/hour, zoledronic acid 4 mg IV, calcitonin for rapid short-term effect, steroids for sarcoid, lymphoma or vitamin D toxicity; stop thiazides, lithium, calcium and vitamin D.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c12",
      front: "ICMR calcium requirement versus actual Indian intake",
      back: "Recommended 1000 mg daily for adults (1000-1200 mg in pregnancy and lactation); actual intake averages only 300-500 mg a day.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c13",
      front: "Calcium carbonate versus calcium citrate",
      back: "Carbonate is 40% elemental and needs food and gastric acid; citrate is 21% elemental and is absorbed without acid, so it is used on a proton pump inhibitor or after bariatric surgery.",
    },
    {
      id: "endocrine-vitamin-d-calcium-c14",
      front: "Radiological signs of rickets and osteomalacia",
      back: "Rickets: metaphyseal cupping, splaying and fraying with a widened growth plate at wrist and knee. Osteomalacia: Looser zones (pseudofractures) in pubic rami, femoral neck, ribs and scapula.",
    },
  ],
  references: [
    "Indian Council of Medical Research - National Institute of Nutrition, Nutrient Requirements for Indians (RDA and EAR), 2020",
    "Indian Academy of Paediatrics revised guidelines on prevention and treatment of vitamin D and calcium deficiency, 2017",
    "Endocrine Society Clinical Practice Guideline, Evaluation, Treatment and Prevention of Vitamin D Deficiency, 2011 and 2024 update",
    "Fourth International Workshop on the Management of Asymptomatic Primary Hyperparathyroidism, 2014",
    "Ministry of Health and Family Welfare, Anaemia Mukt Bharat and antenatal calcium supplementation guidelines",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - disorders of bone and mineral metabolism",
  ],
});

topics.push({
  id: "endocrine-adrenal-disorders",
  title: "Adrenal disease: Cushing syndrome and adrenal insufficiency",
  oneLiner:
    "Cushing syndrome is glucocorticoid excess - overwhelmingly iatrogenic in Indian practice - screened for with an overnight 1 mg dexamethasone suppression test, late-night salivary cortisol or 24-hour urinary free cortisol, while adrenal insufficiency presents with fatigue, weight loss, postural hypotension and hyperpigmentation, is confirmed by an 8 am cortisol with ACTH, and is treated for life with hydrocortisone plus fludrocortisone and strict sick-day rules.",
  frequency: "uncommon",
  keywords: [
    "Cushing syndrome",
    "Cushing disease",
    "dexamethasone suppression test",
    "late-night salivary cortisol",
    "urinary free cortisol",
    "iatrogenic steroid",
    "Addison disease",
    "adrenal insufficiency",
    "adrenal crisis",
    "hydrocortisone",
    "fludrocortisone",
    "short synacthen test",
    "ACTH",
    "adrenal tuberculosis",
    "hyperpigmentation",
    "phaeochromocytoma",
    "metanephrines",
    "Conn syndrome",
    "primary aldosteronism",
    "adrenal incidentaloma",
    "congenital adrenal hyperplasia",
    "steroid card",
  ],
  sections: [
    {
      heading: "Cushing syndrome: recognising it",
      points: [
        "**By far the commonest cause in India is exogenous corticosteroid** - oral prednisolone for asthma or arthritis, intra-articular and depot injections from unqualified practitioners, potent topical steroids used for months on tinea, steroid-containing skin-lightening creams, steroid nasal sprays and Ayurvedic or 'herbal' preparations adulterated with steroid. Ask about all of these by name, because patients do not consider them medicines.",
        "The **discriminatory features** that separate Cushing syndrome from simple obesity are **proximal myopathy** (difficulty rising from a chair without arms), **wide purple striae over 1 cm**, **easy bruising and thin skin**, **facial plethora** and **unexplained osteoporotic fracture** - not weight gain, hypertension or diabetes, which are far too common to discriminate.",
        "Other features: central obesity with thin limbs, moon face, interscapular and supraclavicular fat pads, hirsutism and acne, oligomenorrhoea, poor wound healing, recurrent infection, depression or frank psychosis, insomnia and cataract.",
        "**In children, growth arrest with continued weight gain** is the single most reliable sign - a child growing normally almost never has Cushing syndrome.",
        "**Rapid onset with severe hypokalaemia, marked pigmentation, oedema and profound myopathy but few of the classic body changes** suggests ectopic ACTH from a small cell lung carcinoma or a carcinoid, where the cortisol is extremely high and the time course too short for the physical stigmata to develop.",
        "Complications that make it dangerous: **diabetes, hypertension, osteoporosis with vertebral fracture, venous thromboembolism, opportunistic infection and reactivation of tuberculosis** - the last being a specific concern in India before or during any steroid treatment.",
      ],
    },
    {
      heading: "Confirming and localising Cushing syndrome",
      points: [
        "**Step one is always to exclude exogenous steroid** by history. If it is present, no biochemical test is needed - the plasma ACTH and cortisol will both be suppressed, and the treatment is a supervised taper, not an endocrine work-up.",
        "**Three accepted screening tests**, of which at least two should be abnormal before a diagnosis is accepted: the **overnight 1 mg dexamethasone suppression test** (1 mg at 11 pm, serum cortisol at 8 am; failure to suppress below 1.8 mcg/dL is abnormal), **late-night salivary cortisol** on two separate nights, and **24-hour urinary free cortisol** on two collections.",
        "**False positives are common**: depression, alcohol dependence, poorly controlled diabetes, obesity, severe illness, shift work, oestrogen-containing pills which raise cortisol-binding globulin, and enzyme-inducing drugs such as phenytoin, carbamazepine and rifampicin which accelerate dexamethasone metabolism. These constitute pseudo-Cushing states.",
        "**Once cortisol excess is confirmed, measure plasma ACTH** at 8-9 am. A **suppressed ACTH below 5 pg/mL indicates an adrenal source** - go to CT of the adrenals. A **normal or raised ACTH indicates an ACTH-dependent cause** - pituitary Cushing disease (about 70% of endogenous cases) or ectopic ACTH.",
        "Distinguish pituitary from ectopic disease with a **high-dose (8 mg) dexamethasone suppression test** (pituitary adenomas usually suppress, ectopic sources usually do not), a **pituitary MRI**, and where doubt persists, **bilateral inferior petrosal sinus sampling**, which is the gold standard and is available in a few tertiary centres.",
        "**Treatment is by cause:** transsphenoidal adenomectomy for Cushing disease, adrenalectomy for an adrenal adenoma or carcinoma, resection of the ectopic source, and medical control with **ketoconazole, metyrapone or osilodrostat** while awaiting surgery. Post-operative adrenal insufficiency is expected and needs hydrocortisone cover with a written card.",
        "**Iatrogenic Cushing syndrome** is managed by tapering to the lowest effective dose and switching to steroid-sparing agents, never by stopping abruptly; the suppressed axis takes 6-12 months or more to recover and the patient needs sick-day rules throughout.",
      ],
    },
    {
      heading: "Adrenal insufficiency: presentation",
      points: [
        "**Primary adrenal insufficiency (Addison disease)** is destruction of the adrenal cortex: fatigue, anorexia, weight loss, nausea and vomiting, abdominal pain, salt craving, postural dizziness, myalgia and low mood, developing over months and repeatedly mistaken for depression, tuberculosis or malignancy.",
        "**Hyperpigmentation is the specific sign** and occurs only in primary disease, where the high ACTH stimulates melanocytes: it is most obvious in palmar creases, knuckles, elbows, scars, the buccal mucosa and gums, areolae and areas of pressure or friction. Its absence does not exclude the disease when onset is rapid.",
        "**Biochemistry is a strong clue**: hyponatraemia (about 90%), hyperkalaemia (about 50%, present only in primary disease because mineralocorticoid is also lost), mild hypercalcaemia, hypoglycaemia especially in children, a normal anion gap acidosis, and eosinophilia with lymphocytosis.",
        "**In India tuberculosis remains a leading cause** of primary adrenal insufficiency alongside autoimmune adrenalitis; adrenal calcification on imaging supports tuberculous destruction. Other causes are adrenal haemorrhage (meningococcaemia, anticoagulants, antiphospholipid syndrome), HIV with opportunistic infection, histoplasmosis, metastases, lymphoma, adrenoleukodystrophy and bilateral adrenalectomy.",
        "**Autoimmune Addison disease** often accompanies other autoimmune disease - type 1 diabetes, autoimmune thyroid disease, vitiligo, pernicious anaemia, premature ovarian insufficiency - as autoimmune polyglandular syndrome types 1 and 2, so screen for the others.",
        "**Secondary adrenal insufficiency** results from pituitary disease or, far more often, **from abrupt withdrawal of exogenous glucocorticoid**: there is no hyperpigmentation, potassium is normal because aldosterone is intact, and mineralocorticoid replacement is not needed.",
        "**Any patient who has had prednisolone above 5 mg daily (or equivalent) for more than 3-4 weeks** should be regarded as having a suppressed axis; suspect it also with repeated intra-articular or intramuscular depot injections and with potent topical or inhaled steroids in high dose.",
      ],
    },
    {
      heading: "Confirming and treating adrenal insufficiency",
      points: [
        "**Send an 8-9 am serum cortisol with a paired plasma ACTH.** A morning cortisol **below 3 mcg/dL is diagnostic** of insufficiency, **above 15-18 mcg/dL effectively excludes** it, and values in between need a stimulation test.",
        "**The short synacthen (ACTH stimulation) test** is the confirmatory investigation: 250 mcg of tetracosactide intramuscularly or intravenously with cortisol measured at 0, 30 and 60 minutes; a **peak below 18 mcg/dL confirms adrenal insufficiency**. A high ACTH with a low cortisol localises the problem to the adrenal; a low or normal ACTH indicates a pituitary or hypothalamic cause needing pituitary MRI and assessment of the other axes.",
        "Look for the cause: **anti-21-hydroxylase antibodies** for autoimmune disease, a **CT of the adrenals** for enlargement, calcification or masses, chest radiograph and evaluation for tuberculosis, HIV testing, and very long chain fatty acids in a young male with neurological signs.",
        "**Maintenance replacement: hydrocortisone 15-25 mg a day in two or three divided doses**, weighted to the morning to mimic the diurnal rhythm - typically 10 mg on waking, 5 mg at midday and 2.5-5 mg in the mid-afternoon. Prednisolone 3-5 mg once daily is an acceptable alternative where adherence or cost favours it. Dexamethasone is avoided because it cannot be titrated and readily overtreats.",
        "**Primary disease also needs fludrocortisone 50-200 mcg once daily** for mineralocorticoid replacement, titrated against postural blood pressure, serum potassium and plasma renin activity; it is not required in secondary insufficiency. Salt is not restricted.",
        "**There is no blood test to monitor replacement.** Titrate clinically against energy, weight, appetite, postural blood pressure, potassium and the absence of cushingoid features - a cortisol level taken during treatment is uninterpretable.",
        "**Adjust the dose for interacting drugs**: rifampicin, phenytoin and carbamazepine induce cortisol metabolism and roughly double the requirement, an important point when treating tuberculosis in a patient with Addison disease.",
        "**DHEA 25-50 mg daily** may be considered for persistent fatigue and low libido in women, but is optional and not available everywhere.",
      ],
    },
    {
      heading: "Adrenal crisis and sick-day rules",
      points: [
        "**Adrenal crisis is hypotensive shock unresponsive to fluids and inotropes**, with vomiting, abdominal pain that can mimic an acute abdomen, fever, confusion, hyponatraemia, hyperkalaemia and hypoglycaemia. It is precipitated by infection, gastroenteritis, surgery, trauma, missed doses or vomited tablets.",
        "**Treat before you confirm.** Give **hydrocortisone 100 mg intravenously or intramuscularly immediately**, then 50 mg 6-hourly or 200 mg over 24 hours by infusion, with **rapid intravenous normal saline 1 litre in the first hour** and 5% dextrose for hypoglycaemia. Save a sample for cortisol and ACTH before the first dose if this causes no delay - but never delay the steroid for it.",
        "**At this dose hydrocortisone provides sufficient mineralocorticoid effect**, so fludrocortisone is not needed until the dose falls below about 50 mg a day.",
        "Treat the precipitant with antibiotics or antivirals as appropriate, correct electrolytes with fluid rather than with insulin-dextrose in the first instance, and monitor sodium correction so that hyponatraemia is not corrected too rapidly.",
        "**Sick-day rule 1 - double the dose** of oral hydrocortisone for a fever above 38 C, an intercurrent infection needing antibiotics, or a minor procedure, and continue until 24 hours after recovery.",
        "**Sick-day rule 2 - go parenteral** when vomiting or diarrhoea prevents oral absorption: 100 mg of hydrocortisone intramuscularly and attend hospital. Every patient must be issued an emergency injection kit and taught, with a family member, how to use it.",
        "**Every patient carries a steroid emergency card and preferably wears a medical alert bracelet**, and the diagnosis must be told to every doctor and dentist. Surgical cover: 100 mg of hydrocortisone at induction with 200 mg over 24 hours for major surgery, and a single 100 mg dose for minor procedures.",
        "**Never stop long-term steroids abruptly** in any patient, and always taper - the same crisis follows abrupt withdrawal in a patient who has never had adrenal disease.",
      ],
    },
    {
      heading: "The rest of the adrenal tail",
      points: [
        "**Phaeochromocytoma** is the great mimic: episodic headache, palpitation and sweating with paroxysmal or sustained hypertension, pallor, tremor and anxiety, sometimes provoked by micturition in a bladder paraganglioma. Screen with **plasma free metanephrines or 24-hour urinary fractionated metanephrines**, not with catecholamines, then image with CT or MRI and MIBG.",
        "**Alpha blockade must precede beta blockade** in phaeochromocytoma - phenoxybenzamine or prazosin for 10-14 days with liberal salt and fluid, adding a beta-blocker only afterwards for tachycardia. A beta-blocker given first causes unopposed alpha stimulation and a hypertensive crisis. Up to a third are familial (MEN2, von Hippel-Lindau, neurofibromatosis type 1, SDH mutations) so offer genetic assessment.",
        "**Primary aldosteronism (Conn syndrome)** is the commonest secondary cause of hypertension and is under-diagnosed: suspect it with resistant hypertension, spontaneous or diuretic-induced hypokalaemia, an adrenal incidentaloma or hypertension in the young. Screen with the **aldosterone-renin ratio**, having controlled the confounding effect of drugs, and treat with spironolactone or eplerenone medically, or adrenalectomy for a unilateral adenoma after adrenal vein sampling.",
        "**Adrenal incidentaloma** - a mass found on imaging done for another reason - needs two questions answered: is it functioning (1 mg overnight dexamethasone suppression test, plasma metanephrines, and an aldosterone-renin ratio if hypertensive) and is it malignant (size above 4 cm, irregular margins and unenhanced attenuation above 10 Hounsfield units are suspicious). Non-functioning benign lesions under 4 cm are followed rather than removed.",
        "**Congenital adrenal hyperplasia**, most often 21-hydroxylase deficiency, presents in the newborn with ambiguous genitalia in a female infant or a salt-wasting crisis in the second week of life with vomiting, hyponatraemia and hyperkalaemia, and in later childhood with virilisation and rapid growth with advanced bone age. Diagnosis rests on a raised **17-hydroxyprogesterone**, and treatment is hydrocortisone with fludrocortisone.",
        "**Steroid-induced adrenal suppression is the commonest adrenal disorder a family physician will actually manage** - far more common than all the primary adrenal diseases put together - so the practical skills that matter are safe tapering, sick-day rules and the steroid card.",
      ],
    },
  ],
  tables: [
    {
      heading: "Primary versus secondary adrenal insufficiency",
      columns: ["Feature", "Primary (Addison disease)", "Secondary (pituitary or steroid withdrawal)"],
      rows: [
        ["Site of the lesion", "Adrenal cortex", "Pituitary or hypothalamus, or exogenous steroid"],
        ["Plasma ACTH", "High", "Low or inappropriately normal"],
        ["Hyperpigmentation", "Present", "Absent"],
        ["Serum potassium", "High (aldosterone lost)", "Normal (aldosterone preserved)"],
        ["Serum sodium", "Low", "Low (dilutional, from cortisol lack)"],
        ["Mineralocorticoid replacement", "Fludrocortisone 50-200 mcg daily required", "Not required"],
        ["Common Indian causes", "Tuberculosis, autoimmune adrenalitis, HIV, haemorrhage", "Abrupt steroid withdrawal, pituitary tumour or surgery, Sheehan syndrome"],
      ],
    },
    {
      heading: "Screening tests for Cushing syndrome",
      columns: ["Test", "How it is done", "Abnormal result", "Main pitfall"],
      rows: [
        ["Overnight 1 mg dexamethasone suppression", "1 mg at 11 pm, serum cortisol at 8 am", "Cortisol above 1.8 mcg/dL", "False positive with oestrogen pill, phenytoin, rifampicin, depression, alcohol"],
        ["Late-night salivary cortisol", "Sample at 11 pm on two separate nights", "Raised on both nights", "Invalid in shift workers and with recent smoking or eating"],
        ["24-hour urinary free cortisol", "Two complete collections", "More than three times the upper limit", "Incomplete collection; unreliable if eGFR is below 60"],
        ["Plasma ACTH (for localisation, not screening)", "8-9 am sample after cortisol excess is confirmed", "Below 5 pg/mL means adrenal source", "Sample must be transported on ice and processed promptly"],
      ],
    },
    {
      heading: "Steroid replacement and stress dosing",
      columns: ["Situation", "Hydrocortisone dose", "Notes"],
      rows: [
        ["Maintenance", "15-25 mg daily in 2-3 divided doses, morning weighted", "Add fludrocortisone 50-200 mcg daily in primary disease only"],
        ["Fever above 38 C or infection on antibiotics", "Double the usual oral dose", "Continue until 24 hours after recovery"],
        ["Vomiting or diarrhoea", "100 mg intramuscularly, then attend hospital", "Oral tablets cannot be relied upon; emergency kit is mandatory"],
        ["Minor surgery or dental extraction", "100 mg at induction, usual dose next day", "No taper needed for a single dose"],
        ["Major surgery or trauma", "100 mg at induction then 200 mg over 24 hours", "Halve daily until maintenance is reached"],
        ["Adrenal crisis", "100 mg IV or IM stat, then 50 mg 6-hourly", "With 1 litre of normal saline in the first hour and dextrose for hypoglycaemia"],
      ],
    },
  ],
  redFlags: [
    "Hypotension unresponsive to fluids and inotropes with hyponatraemia and hyperkalaemia in a patient on or recently off steroids - give hydrocortisone 100 mg immediately, before any confirmatory test.",
    "Vomiting or diarrhoea in a patient on replacement steroid - oral tablets are not absorbed, so give parenteral hydrocortisone and admit rather than sending home with an antiemetic.",
    "Abdominal pain with fever and shock in a known Addison patient - adrenal crisis can mimic an acute abdomen, and laparotomy without steroid cover is lethal.",
    "Growth arrest with continuing weight gain in a child - Cushing syndrome or exogenous steroid, and needs endocrine referral rather than dietary advice.",
    "New severe hypokalaemia with hypertension, oedema and profound proximal weakness developing over weeks in a smoker - suspect ectopic ACTH from a small cell lung carcinoma.",
    "Paroxysms of headache, palpitation and sweating with labile hypertension - screen for phaeochromocytoma and never start a beta-blocker before alpha blockade.",
    "Any patient stopping prednisolone above 5 mg daily after more than 3-4 weeks without a taper - the axis is suppressed and crisis can follow.",
    "An adrenal mass larger than 4 cm with irregular margins and unenhanced attenuation above 10 Hounsfield units - refer for surgical assessment for adrenocortical carcinoma.",
  ],
  pearls: [
    "In India, ask about steroid-containing skin creams, unlabelled 'herbal' powders and depot injections from unqualified practitioners - iatrogenic Cushing syndrome outnumbers every endogenous cause many times over.",
    "The discriminatory features of Cushing syndrome are proximal myopathy, purple striae wider than 1 cm, easy bruising and facial plethora; obesity, hypertension and diabetes are far too common to be of any use.",
    "Hyperpigmentation means primary adrenal insufficiency; there is no pigmentation in secondary disease because ACTH is low.",
    "Hyperkalaemia distinguishes primary from secondary insufficiency, because only primary disease loses aldosterone - and only primary disease needs fludrocortisone.",
    "In adrenal crisis, treat first and test later: draw the sample if it costs no time, but the hydrocortisone must not wait for the cortisol result.",
    "At 100 mg a day, hydrocortisone provides enough mineralocorticoid effect that fludrocortisone can be omitted until the dose falls below about 50 mg.",
    "Rifampicin, phenytoin and carbamazepine roughly double the hydrocortisone requirement - a trap when starting antitubercular treatment in an Addison patient.",
    "Alpha blockade always precedes beta blockade in phaeochromocytoma; the reverse order produces unopposed alpha stimulation and a hypertensive crisis.",
    "There is no laboratory test to titrate steroid replacement - judge it by weight, energy, appetite, postural blood pressure and potassium.",
  ],
  theory: [
    {
      id: "endocrine-adrenal-disorders-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "uncommon",
      question:
        "A 40-year-old woman presents with fatigue, weight loss of 8 kg, giddiness on standing and darkening of the skin over 8 months. Blood pressure is 88/60 mmHg, sodium 126 mmol/L and potassium 5.8 mmol/L. Discuss the diagnosis, causes, investigations and management including the emergency treatment of an acute deterioration.",
      openingLines: [
        "Weight loss, postural hypotension and hyperpigmentation with hyponatraemia and hyperkalaemia is the classic presentation of primary adrenal insufficiency, or Addison disease, in which destruction of the adrenal cortex causes deficiency of both cortisol and aldosterone.",
        "The hyperpigmentation and the hyperkalaemia together localise the lesion to the adrenal gland rather than the pituitary, since only primary disease raises ACTH and only primary disease loses mineralocorticoid.",
      ],
      answer: [
        {
          heading: "1. Causes in Indian practice",
          points: [
            "Infective: tuberculosis, which remains a leading cause in India and often leaves adrenal calcification; also histoplasmosis, HIV with opportunistic infection, and disseminated fungal infection.",
            "Autoimmune adrenalitis with anti-21-hydroxylase antibodies, often as part of autoimmune polyglandular syndrome with thyroid disease, type 1 diabetes, vitiligo or pernicious anaemia.",
            "Vascular: bilateral adrenal haemorrhage in meningococcaemia (Waterhouse-Friderichsen syndrome), anticoagulation or antiphospholipid syndrome.",
            "Infiltrative and neoplastic: metastases, lymphoma, amyloidosis, and adrenoleukodystrophy in young males.",
            "Iatrogenic: bilateral adrenalectomy, or drugs such as ketoconazole, etomidate and mitotane.",
          ],
        },
        {
          heading: "2. Clinical assessment",
          points: [
            "Symptoms: fatigue, anorexia, weight loss, nausea, vomiting, abdominal pain, salt craving, muscle and joint pain, low mood and dizziness on standing.",
            "Signs: hyperpigmentation of palmar creases, knuckles, scars, buccal mucosa and areolae, postural hypotension, weight loss, loss of axillary and pubic hair in women, and vitiligo if autoimmune.",
            "Look for the cause: cough, fever and night sweats for tuberculosis, other autoimmune disease, HIV risk, and anticoagulant use.",
            "Assess severity: postural blood pressure drop, dehydration, confusion and any features suggesting impending crisis.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Serum electrolytes: hyponatraemia in about 90%, hyperkalaemia in about half, mild hypercalcaemia, hypoglycaemia, and eosinophilia with lymphocytosis on the blood count.",
            "8-9 am serum cortisol with a paired plasma ACTH: cortisol below 3 mcg/dL is diagnostic, above 15-18 mcg/dL excludes it, and a high ACTH confirms a primary adrenal cause.",
            "Short synacthen test where the morning cortisol is equivocal: 250 mcg tetracosactide with cortisol at 0, 30 and 60 minutes; a peak below 18 mcg/dL confirms insufficiency.",
            "Aetiological tests: anti-21-hydroxylase antibodies, CT of the adrenals for enlargement or calcification, chest radiograph and sputum or tissue evaluation for tuberculosis, HIV test, and thyroid function with fasting glucose to screen for polyglandular disease.",
          ],
        },
        {
          heading: "4. Long-term management",
          points: [
            "Hydrocortisone 15-25 mg daily in divided doses weighted to the morning - typically 10 mg on waking, 5 mg at midday and 2.5-5 mg mid-afternoon; prednisolone 3-5 mg daily is an alternative.",
            "Fludrocortisone 50-200 mcg once daily, titrated against postural blood pressure, serum potassium and plasma renin; no salt restriction.",
            "Treat the underlying cause - a full course of antitubercular treatment where indicated, remembering that rifampicin roughly doubles the hydrocortisone requirement.",
            "Monitor clinically: weight, energy, appetite, postural blood pressure, sodium and potassium; there is no cortisol level that can be used to titrate the dose.",
            "Educate the patient and a family member, issue a steroid emergency card and a medical alert bracelet, and supply an emergency hydrocortisone injection kit with training in its use.",
          ],
        },
        {
          heading: "5. Sick-day rules and adrenal crisis",
          points: [
            "Double the oral dose for fever above 38 C or any infection needing antibiotics, continuing until 24 hours after recovery.",
            "For vomiting or diarrhoea, give 100 mg of hydrocortisone intramuscularly and attend hospital, since oral absorption cannot be relied upon.",
            "Surgical cover: 100 mg at induction for minor procedures; 100 mg at induction with 200 mg over 24 hours for major surgery, halving daily to maintenance.",
            "Adrenal crisis: hydrocortisone 100 mg intravenously or intramuscularly at once followed by 50 mg 6-hourly, 1 litre of normal saline in the first hour with further fluid by response, 5% dextrose for hypoglycaemia, and treatment of the precipitant. Take a sample for cortisol and ACTH only if it causes no delay.",
            "Fludrocortisone is unnecessary while hydrocortisone is above about 50 mg a day, as it then provides adequate mineralocorticoid effect.",
          ],
        },
      ],
      mustDraw: [
        "Table comparing primary and secondary adrenal insufficiency on ACTH, pigmentation, potassium and the need for fludrocortisone.",
        "Flow chart: suspicion - 8 am cortisol with ACTH - equivocal leads to short synacthen test - confirmed leads to aetiological work-up - replacement with sick-day rules.",
      ],
      markSplit: [
        { part: "Diagnosis with reasoning from the biochemistry", marks: 1 },
        { part: "Causes relevant to India", marks: 2 },
        { part: "Clinical features and examination", marks: 1.5 },
        { part: "Investigations including the synacthen test", marks: 2 },
        { part: "Replacement therapy with doses", marks: 1.5 },
        { part: "Sick-day rules and crisis management", marks: 2 },
      ],
      keywords: ["Addison disease", "short synacthen test", "hydrocortisone", "fludrocortisone", "adrenal crisis"],
    },
    {
      id: "endocrine-adrenal-disorders-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "uncommon",
      question: "Write short notes on Cushing syndrome: causes, clinical features and the approach to diagnosis.",
      openingLines: [
        "Cushing syndrome is the clinical state resulting from chronic exposure to excess glucocorticoid, whatever its source, while Cushing disease refers specifically to the syndrome caused by an ACTH-secreting pituitary adenoma.",
        "In Indian practice the overwhelming majority of cases are iatrogenic, from prescribed or self-administered corticosteroid including topical, injectable and adulterated herbal preparations.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Exogenous (commonest): oral, injectable, inhaled, nasal and potent topical corticosteroid, and steroid-adulterated herbal or cosmetic preparations.",
            "ACTH-dependent endogenous: pituitary adenoma (Cushing disease, about 70% of endogenous cases) and ectopic ACTH from small cell lung carcinoma, bronchial or thymic carcinoid, or medullary thyroid carcinoma.",
            "ACTH-independent endogenous: adrenal adenoma, adrenal carcinoma, and rarely bilateral macronodular or micronodular adrenal hyperplasia.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Discriminatory: proximal myopathy, purple striae wider than 1 cm, easy bruising with thin skin, facial plethora, and unexplained osteoporotic fracture; in children, growth arrest with weight gain.",
            "Non-discriminatory but common: central obesity, moon face, buffalo hump, hypertension, diabetes, hirsutism, acne, oligomenorrhoea, depression and poor wound healing.",
            "Complications: osteoporosis with vertebral fracture, venous thromboembolism, opportunistic infection and reactivation of tuberculosis, cataract and psychosis.",
          ],
        },
        {
          heading: "Diagnostic approach",
          points: [
            "Step 1: exclude exogenous steroid by a detailed drug history covering creams, injections and herbal preparations - if present, no biochemical work-up is needed.",
            "Step 2: confirm cortisol excess with at least two abnormal screening tests from the overnight 1 mg dexamethasone suppression test (cortisol above 1.8 mcg/dL), late-night salivary cortisol on two nights, and two 24-hour urinary free cortisol collections.",
            "Step 3: exclude pseudo-Cushing states - depression, alcohol dependence, uncontrolled diabetes, obesity, severe illness, oestrogen therapy and enzyme-inducing drugs.",
            "Step 4: localise with a 9 am plasma ACTH - suppressed indicates an adrenal source needing adrenal CT; normal or raised indicates ACTH dependence, evaluated with a high-dose dexamethasone suppression test, pituitary MRI and, where doubt remains, inferior petrosal sinus sampling.",
          ],
        },
        {
          heading: "Principles of treatment",
          points: [
            "Iatrogenic: taper to the lowest effective dose, use steroid-sparing agents, never stop abruptly, and provide sick-day rules and a steroid card.",
            "Cushing disease: transsphenoidal adenomectomy, with radiotherapy or bilateral adrenalectomy for failure.",
            "Adrenal tumour: adrenalectomy; ectopic ACTH: resection or treatment of the primary tumour.",
            "Medical control while awaiting surgery with ketoconazole, metyrapone or osilodrostat, and hydrocortisone cover afterwards for the expected adrenal insufficiency.",
          ],
        },
      ],
      mustDraw: ["Flow chart: clinical suspicion - exclude exogenous steroid - two abnormal screening tests - plasma ACTH - suppressed goes to adrenal CT, raised goes to pituitary MRI and high-dose suppression."],
      markSplit: [
        { part: "Definition and causes", marks: 1.5 },
        { part: "Discriminatory clinical features", marks: 1.5 },
        { part: "Screening and confirmatory tests", marks: 1.5 },
        { part: "Localisation and treatment principles", marks: 0.5 },
      ],
      keywords: ["Cushing syndrome", "dexamethasone suppression", "iatrogenic steroid", "ACTH", "proximal myopathy"],
    },
  ],
  mcqs: [
    {
      id: "endocrine-adrenal-disorders-q1",
      stem: "A 32-year-old woman using an unlabelled skin-lightening cream for two years has moon face, purple abdominal striae, proximal myopathy and new hypertension. Serum cortisol at 8 am is 1.8 mcg/dL and plasma ACTH is undetectable. What is the diagnosis?",
      options: [
        "Cushing disease from a pituitary adenoma",
        "Adrenal adenoma secreting cortisol",
        "Exogenous (iatrogenic) Cushing syndrome from a steroid-containing cream",
        "Ectopic ACTH syndrome",
      ],
      answer: 2,
      explanation:
        "Cushingoid features with a low cortisol and an undetectable ACTH mean the glucocorticoid is coming from outside the body and has suppressed the whole axis, which is exactly what a steroid-adulterated cosmetic cream does; the treatment is a supervised taper with sick-day rules, not an endocrine work-up. Cushing disease would show a raised or normal ACTH with a high cortisol. An adrenal adenoma suppresses ACTH but raises cortisol, not lowers it. Ectopic ACTH produces very high levels of both ACTH and cortisol.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-adrenal-disorders-q2",
      stem: "A 45-year-old man with known Addison disease on hydrocortisone presents with 12 hours of vomiting, blood pressure 78/50 mmHg, sodium 124 mmol/L, potassium 6.1 mmol/L and glucose 52 mg/dL. What is the first action?",
      options: [
        "Send serum cortisol and ACTH and start treatment once the results return",
        "Give hydrocortisone 100 mg intravenously immediately with intravenous normal saline and dextrose",
        "Give calcium gluconate and insulin-dextrose for the hyperkalaemia before any steroid",
        "Double his oral hydrocortisone dose and observe for 6 hours",
      ],
      answer: 1,
      explanation:
        "This is an adrenal crisis, in which hydrocortisone 100 mg intravenously with rapid saline and dextrose must be given at once - a sample may be drawn first only if it causes no delay. Waiting for cortisol results is the classic fatal error. The hyperkalaemia of adrenal crisis is driven by mineralocorticoid deficiency and volume depletion and corrects with steroid and fluid; treating it first delays the definitive therapy. Doubling the oral dose is useless in a vomiting patient because tablets are not absorbed.",
      difficulty: "easy",
    },
    {
      id: "endocrine-adrenal-disorders-q3",
      stem: "A patient has an 8 am cortisol of 9 mcg/dL, which is equivocal. A short synacthen test is performed with 250 mcg tetracosactide. Which result confirms adrenal insufficiency?",
      options: [
        "Peak cortisol below 18 mcg/dL at 30 or 60 minutes",
        "Peak cortisol above 25 mcg/dL at 60 minutes",
        "A doubling of the baseline cortisol regardless of the peak",
        "A rise in plasma ACTH after stimulation",
      ],
      answer: 0,
      explanation:
        "A peak cortisol below 18 mcg/dL after 250 mcg of tetracosactide confirms adrenal insufficiency, since a healthy adrenal cortex responds briskly to a supraphysiological ACTH stimulus. A peak above 25 mcg/dL is a normal response that excludes the diagnosis. The increment above baseline is unreliable and has been abandoned in favour of the absolute peak. ACTH is not measured during the test - tetracosactide is itself a synthetic ACTH analogue, so its level after injection is meaningless.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-adrenal-disorders-q4",
      stem: "A 38-year-old woman with Addison disease is started on antitubercular treatment including rifampicin. What change to her replacement therapy is needed?",
      options: [
        "No change; rifampicin does not interact with corticosteroids",
        "Halve the hydrocortisone dose, since rifampicin potentiates steroid effect",
        "Approximately double the hydrocortisone dose, since rifampicin induces its metabolism",
        "Stop hydrocortisone and use dexamethasone alone",
      ],
      answer: 2,
      explanation:
        "Rifampicin is a potent inducer of hepatic enzymes and roughly doubles the clearance of hydrocortisone, so the replacement dose must be increased by about twofold to prevent a crisis - the same applies to phenytoin and carbamazepine. Claiming no interaction risks an adrenal crisis a few days into treatment. Halving the dose inverts the pharmacology entirely. Dexamethasone is also metabolised by the same pathway and cannot be titrated, so it is not a solution.",
      difficulty: "hard",
    },
    {
      id: "endocrine-adrenal-disorders-q5",
      stem: "A 44-year-old man with episodic headache, palpitation and drenching sweats has a blood pressure of 210/120 mmHg during an episode. Plasma free metanephrines are markedly raised and CT shows a 4 cm right adrenal mass. What is the correct preparation for surgery?",
      options: [
        "Start atenolol first to control the tachycardia, then add an alpha-blocker",
        "Start phenoxybenzamine or prazosin with liberal salt and fluid for 10-14 days, adding a beta-blocker only afterwards",
        "Proceed directly to surgery, since medical preparation delays definitive treatment",
        "Start amlodipine alone and operate the following day",
      ],
      answer: 1,
      explanation:
        "In phaeochromocytoma alpha blockade with phenoxybenzamine or prazosin, together with salt and fluid loading to re-expand the contracted plasma volume, is given for 10-14 days before surgery, and a beta-blocker is added only afterwards for reflex tachycardia. Giving a beta-blocker first leaves alpha receptors unopposed and can precipitate a hypertensive crisis. Operating without preparation risks catastrophic intraoperative hypertension and cardiovascular collapse. A calcium channel blocker alone is inadequate preparation and does not address the volume contraction.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-adrenal-disorders-q6",
      stem: "Which combination of findings best distinguishes primary from secondary adrenal insufficiency at the bedside and on basic biochemistry?",
      options: [
        "Hyperpigmentation with hyperkalaemia indicates primary disease",
        "Hyponatraemia alone indicates primary disease",
        "Postural hypotension indicates secondary disease",
        "Hypoglycaemia occurs only in secondary disease",
      ],
      answer: 0,
      explanation:
        "Only primary adrenal disease raises ACTH, which drives melanocyte stimulation and produces hyperpigmentation, and only primary disease destroys the zona glomerulosa and so loses aldosterone, producing hyperkalaemia - together these two findings are decisive and also indicate the need for fludrocortisone. Hyponatraemia occurs in both, since cortisol deficiency alone impairs free water excretion. Postural hypotension occurs in both, more markedly in primary disease. Hypoglycaemia results from cortisol deficiency and occurs in both forms, particularly in children.",
      difficulty: "easy",
    },
    {
      id: "endocrine-adrenal-disorders-q7",
      stem: "A 25-year-old woman on prednisolone 20 mg daily for 8 months for lupus nephritis wishes to stop it because of weight gain. What is the correct advice?",
      options: [
        "She can stop immediately, since the underlying disease is now quiescent",
        "Taper slowly over months, provide sick-day rules and a steroid card, since the axis may take 6-12 months or more to recover",
        "Switch abruptly to hydrocortisone 20 mg daily, which is a physiological dose and needs no taper",
        "Stop the prednisolone and start fludrocortisone instead",
      ],
      answer: 1,
      explanation:
        "Eight months of prednisolone at 20 mg daily suppresses the hypothalamic-pituitary-adrenal axis, which recovers over 6-12 months or longer, so the dose must be tapered gradually with sick-day rules and a steroid emergency card during the whole period of recovery. Stopping immediately risks adrenal crisis as well as a flare of her lupus. An abrupt switch to hydrocortisone still leaves her unable to mount a stress response and provides no taper of the underlying disease control. Fludrocortisone is a mineralocorticoid and does not replace glucocorticoid at all.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "endocrine-adrenal-disorders-c1",
      front: "Commonest cause of Cushing syndrome in India",
      back: "Exogenous corticosteroid - oral, depot injection, potent topical steroid for tinea, skin-lightening creams and steroid-adulterated herbal preparations. ACTH and cortisol are both suppressed.",
    },
    {
      id: "endocrine-adrenal-disorders-c2",
      front: "Discriminatory features of Cushing syndrome",
      back: "Proximal myopathy, purple striae wider than 1 cm, easy bruising with thin skin, facial plethora, unexplained fracture; in children, growth arrest with weight gain.",
    },
    {
      id: "endocrine-adrenal-disorders-c3",
      front: "Three screening tests for Cushing syndrome",
      back: "Overnight 1 mg dexamethasone suppression (cortisol above 1.8 mcg/dL), late-night salivary cortisol on two nights, and two 24-hour urinary free cortisol collections; need at least two abnormal.",
    },
    {
      id: "endocrine-adrenal-disorders-c4",
      front: "What does plasma ACTH tell you in confirmed cortisol excess?",
      back: "Below 5 pg/mL means an adrenal source - image the adrenals. Normal or raised means ACTH-dependent disease - pituitary MRI, high-dose dexamethasone test, and petrosal sinus sampling if needed.",
    },
    {
      id: "endocrine-adrenal-disorders-c5",
      front: "Morning cortisol cut-offs in suspected adrenal insufficiency",
      back: "Below 3 mcg/dL is diagnostic, above 15-18 mcg/dL excludes it, and anything between needs a short synacthen test.",
    },
    {
      id: "endocrine-adrenal-disorders-c6",
      front: "Short synacthen test",
      back: "250 mcg tetracosactide IM or IV, cortisol at 0, 30 and 60 minutes; a peak below 18 mcg/dL confirms adrenal insufficiency.",
    },
    {
      id: "endocrine-adrenal-disorders-c7",
      front: "Maintenance replacement in Addison disease",
      back: "Hydrocortisone 15-25 mg daily in 2-3 divided doses weighted to the morning, plus fludrocortisone 50-200 mcg once daily; no fludrocortisone in secondary insufficiency.",
    },
    {
      id: "endocrine-adrenal-disorders-c8",
      front: "The two sick-day rules",
      back: "Rule 1: double the oral dose for fever above 38 C or infection until 24 hours after recovery. Rule 2: for vomiting or diarrhoea give 100 mg hydrocortisone IM and attend hospital.",
    },
    {
      id: "endocrine-adrenal-disorders-c9",
      front: "Adrenal crisis treatment",
      back: "Hydrocortisone 100 mg IV or IM at once, then 50 mg 6-hourly; 1 litre normal saline in the first hour, dextrose for hypoglycaemia, treat the precipitant. Do not wait for cortisol results.",
    },
    {
      id: "endocrine-adrenal-disorders-c10",
      front: "Primary versus secondary adrenal insufficiency in two signs",
      back: "Hyperpigmentation and hyperkalaemia occur only in primary disease, because only there is ACTH high and aldosterone lost.",
    },
    {
      id: "endocrine-adrenal-disorders-c11",
      front: "Leading causes of Addison disease in India",
      back: "Tuberculosis (often with adrenal calcification) and autoimmune adrenalitis; also HIV with opportunistic infection, adrenal haemorrhage, metastases and adrenoleukodystrophy.",
    },
    {
      id: "endocrine-adrenal-disorders-c12",
      front: "Drugs that double the hydrocortisone requirement",
      back: "Rifampicin, phenytoin and carbamazepine - potent enzyme inducers; a trap when starting antitubercular treatment.",
    },
    {
      id: "endocrine-adrenal-disorders-c13",
      front: "Screening test and drug order in phaeochromocytoma",
      back: "Plasma free or 24-hour urinary fractionated metanephrines. Alpha blockade (phenoxybenzamine or prazosin) with salt and fluid for 10-14 days, and only then a beta-blocker.",
    },
    {
      id: "endocrine-adrenal-disorders-c14",
      front: "Two questions to ask of every adrenal incidentaloma",
      back: "Is it functioning (1 mg dexamethasone suppression, metanephrines, aldosterone-renin ratio if hypertensive)? Is it malignant (over 4 cm, irregular, unenhanced attenuation above 10 HU)?",
    },
    {
      id: "endocrine-adrenal-disorders-c15",
      front: "When is the HPA axis assumed to be suppressed?",
      back: "After prednisolone above 5 mg daily (or equivalent) for more than 3-4 weeks; recovery takes 6-12 months or more, so taper and give sick-day rules throughout.",
    },
  ],
  references: [
    "Endocrine Society Clinical Practice Guideline, Diagnosis and Treatment of Primary Adrenal Insufficiency, 2016",
    "Endocrine Society Clinical Practice Guideline, The Diagnosis of Cushing's Syndrome, 2008, and Treatment of Cushing's Syndrome, 2015",
    "Endocrine Society Clinical Practice Guideline, Pheochromocytoma and Paraganglioma, 2014",
    "European Society of Endocrinology and ENSAT guideline on the management of adrenal incidentalomas, 2023",
    "Society for Endocrinology guidance on the emergency management of adrenal crisis and steroid emergency cards, 2020",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - disorders of the adrenal cortex",
    "API Textbook of Medicine, 11th edition, 2019 - adrenal disorders",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "endocrine-case-uncontrolled-t2dm",
    title: "Uncontrolled type 2 diabetes with complications",
    kind: "long",
    subjectId: "endocrine",
    opening:
      "A 54-year-old shopkeeper with type 2 diabetes of 12 years presents with tingling and burning of both feet for a year, blurring of vision for 3 months and frothy urine, on metformin and glimepiride with an HbA1c of 9.8%.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the presenting complaints in the patient's own sequence with duration, and then the one-line problem statement before any detail - examiners judge the first thirty seconds.",
          "Say: 'Mr X, a 54-year-old shopkeeper from a peri-urban area, a known type 2 diabetic for 12 years on oral agents, presents with symmetrical burning and tingling of both feet for one year, progressive blurring of vision for 3 months and frothy urine for 2 months.'",
          "Add the negatives that matter early: no chest pain, no breathlessness, no claudication, no foot ulcer, no fever, no weight loss, no polyuria at present.",
          "State the current treatment with doses and adherence, and the last documented HbA1c, so the examiner knows you have the therapeutic picture.",
        ],
      },
      {
        heading: "History of the diabetes",
        points: [
          "Mode of detection: found on a routine test at a camp, or with osmotic symptoms; whether it was ever confirmed on a laboratory venous sample.",
          "Course: drugs used over 12 years with doses and reasons for change, any period of insulin use, hospital admissions for hyperglycaemia or hypoglycaemia, and the pattern of clinic attendance and drug interruptions.",
          "Glycaemic control: home monitoring if any, the last three HbA1c values, symptoms of hyperglycaemia and any episodes of sweating, tremor or confusion suggesting hypoglycaemia, particularly at night or when meals are missed.",
          "Diet and activity in real terms: number of chapatis or cups of rice per meal, sugar in tea, fried and sweet items, alcohol and tobacco including gutkha and khaini, and the actual daily walking distance.",
          "Ask about traditional remedies, homeopathic and Ayurvedic preparations and periods of drug stoppage during religious fasting - these are common and are rarely volunteered.",
        ],
      },
      {
        heading: "History of complications - the marks are here",
        points: [
          "Eye: blurred vision, floaters, sudden visual loss, date and result of the last dilated fundus examination, any laser treatment or intravitreal injection, and cataract surgery.",
          "Kidney: frothy urine, ankle swelling, reduction in urine output, previous urine albumin or creatinine results, and use of analgesics or nephrotoxic remedies.",
          "Nerve: symmetrical burning, tingling and numbness with nocturnal worsening, unsteadiness in the dark, painless injury or burn to the foot, and autonomic symptoms - postural dizziness, early satiety and vomiting, nocturnal diarrhoea, erectile dysfunction, bladder emptying difficulty and gustatory sweating.",
          "Foot: ulcer, callus, deformity, previous amputation, footwear worn indoors and outdoors, walking barefoot in the shop or temple, and who cuts his nails.",
          "Macrovascular: exertional chest discomfort or breathlessness, claudication distance, transient limb weakness or speech disturbance, and known hypertension or dyslipidaemia with treatment.",
          "Infection: recurrent boils, balanoposthitis or vulvovaginal candidiasis, dental sepsis, urinary infection, and the four TB symptom questions - cough for 2 weeks or more, fever, night sweats, weight loss.",
        ],
      },
      {
        heading: "Family, personal and socio-economic history",
        points: [
          "Family history of diabetes, premature coronary disease, stroke, hypertension and kidney disease in first-degree relatives, and the ages at which they occurred.",
          "Occupation, hours standing, income, who pays for the drugs, distance from the clinic, and whether he collects free drugs under the NP-NCD programme at the Health and Wellness Centre.",
          "Who cooks at home, whether the family eats the same food, and whether anyone else in the household has been screened - the family is the unit of care.",
          "Health beliefs and fears: what he believes caused the diabetes, whether he fears insulin, and what he thinks will happen to him - the answers determine whether your plan will be followed.",
        ],
      },
      {
        heading: "Examination to demonstrate",
        points: [
          "General: build and nutrition, weight, height, BMI by Asian-Indian criteria, waist circumference, pallor, oedema, acanthosis nigricans, skin infections, injection sites if on insulin, and the dental and oral examination.",
          "Vitals: pulse in all four limbs, blood pressure supine and after 2 minutes standing to detect autonomic neuropathy, respiratory rate and temperature.",
          "Eyes: visual acuity in each eye, and dilated direct ophthalmoscopy describing what you see - microaneurysms, dot and blot haemorrhages, hard exudates, cotton wool spots, venous beading and new vessels.",
          "Feet, exposed to the knees, both together: colour, hair loss, dryness, callus over pressure points, clawing of toes, prominent metatarsal heads, ulcers with site and depth, interdigital maceration, and nails.",
          "Neurological: 10 g monofilament at ten sites, 128 Hz vibration at the great toe and medial malleolus, ankle jerks, pinprick and temperature, joint position sense, and Romberg test.",
          "Vascular: dorsalis pedis and posterior tibial pulses, capillary refill, femoral and popliteal pulses, and bruits over the femoral and carotid arteries.",
          "Cardiovascular and abdominal examination for cardiomegaly, murmurs, renal bruit and hepatomegaly, and a systemic examination completing the general survey.",
        ],
      },
    ],
    summaryStatement:
      "This is a 54-year-old shopkeeper with poorly controlled type 2 diabetes mellitus of 12 years' duration on submaximal oral therapy, with established microvascular complications - symmetrical distal sensorimotor polyneuropathy with loss of protective sensation, background diabetic retinopathy with maculopathy affecting vision, and diabetic kidney disease with albuminuria - together with hypertension and dyslipidaemia, currently without a foot ulcer or symptomatic macrovascular disease, in a patient with limited health literacy and intermittent drug supply.",
    differential: [
      {
        diagnosis: "Diabetic distal symmetrical sensorimotor polyneuropathy",
        forIt:
          "Twelve years of poorly controlled diabetes, symmetrical glove-and-stocking burning worse at night, absent ankle jerks, reduced vibration and loss of monofilament sensation at multiple sites.",
        againstIt:
          "Nothing against it clinically, but it remains a diagnosis of exclusion; asymmetry, rapid progression, motor predominance or upper limb onset would demand another explanation.",
      },
      {
        diagnosis: "Vitamin B12 deficiency neuropathy from long-term metformin",
        forIt:
          "Twelve years of metformin, a largely vegetarian diet, and an identical distal sensory picture with unsteadiness in the dark.",
        againstIt:
          "No glossitis, no anaemia and no posterior column signs with extensor plantars so far; a serum B12 level settles it and it is cheap to exclude and cheap to treat.",
      },
      {
        diagnosis: "Alcoholic or nutritional neuropathy",
        forIt: "Common in this age group and can be indistinguishable clinically, with burning feet and calf tenderness.",
        againstIt: "No history of significant alcohol intake and no other features of nutritional deficiency.",
      },
      {
        diagnosis: "Chronic kidney disease of another cause - hypertensive or obstructive",
        forIt: "Long-standing hypertension, frothy urine and reduced eGFR could all be explained by hypertensive nephrosclerosis.",
        againstIt:
          "Albuminuria with concurrent retinopathy strongly supports a diabetic aetiology; absence of retinopathy with heavy proteinuria would have forced a search for another renal disease.",
      },
      {
        diagnosis: "Lumbar canal stenosis or radiculopathy",
        forIt: "Leg symptoms in a middle-aged man who stands all day at his shop.",
        againstIt: "Symptoms are symmetrical, non-dermatomal, worse at rest and at night, with no back pain and no claudication distance that improves on bending forward.",
      },
    ],
    investigations: [
      {
        test: "HbA1c, fasting and 2-hour post-prandial plasma glucose",
        why: "To quantify control over 3 months and to see whether the fasting or the post-meal value is driving it, which decides the drug added.",
        expected: "HbA1c 9.8%, fasting 180-220 mg/dL and post-prandial above 300 mg/dL with a high-carbohydrate diet.",
      },
      {
        test: "Urine albumin-creatinine ratio on an early morning sample, repeated twice in 3-6 months",
        why: "To establish albuminuria as the earliest marker of diabetic kidney disease; a single positive can be caused by fever, exercise or infection.",
        expected: "30-300 mg/g indicates moderately increased albuminuria, and above 300 mg/g severely increased.",
      },
      {
        test: "Serum creatinine with eGFR, electrolytes and haemoglobin",
        why: "To stage chronic kidney disease and to decide the safety of metformin and the dose of other drugs.",
        expected: "eGFR often 45-75 mL/min/1.73 m2 at this stage, with normocytic anaemia if it is lower.",
      },
      {
        test: "Dilated fundus examination by an ophthalmologist, with fundus photography or OCT if available",
        why: "Retinopathy is asymptomatic until the macula or vitreous is involved; blurred vision here demands formal assessment for maculopathy.",
        expected: "Microaneurysms, dot and blot haemorrhages and hard exudates near the macula; new vessels would upgrade it to proliferative disease needing urgent laser.",
      },
      {
        test: "10 g monofilament, 128 Hz tuning fork and ankle reflexes",
        why: "To document loss of protective sensation, which defines the at-risk foot and dictates footwear and follow-up interval.",
        expected: "Absent monofilament sensation at 4 or more of 10 sites with reduced vibration and absent ankle jerks.",
      },
      {
        test: "Serum vitamin B12",
        why: "Long-term metformin causes deficiency that mimics diabetic neuropathy and is easily and cheaply corrected.",
        expected: "Low or borderline in a substantial minority after 4 or more years of metformin.",
      },
      {
        test: "Fasting lipid profile, ECG, and blood pressure recorded supine and standing",
        why: "To quantify cardiovascular risk, detect silent ischaemia and demonstrate autonomic neuropathy.",
        expected: "Raised triglyceride with low HDL, possible Q waves or ST-T changes, and a postural fall of 20 mmHg systolic if autonomic neuropathy is present.",
      },
      {
        test: "Sputum for NAAT or chest radiograph if any TB symptom is present, and urine routine with culture",
        why: "Bidirectional TB screening is mandatory under NTEP, and asymptomatic urinary infection is common and worsens control.",
        expected: "Usually negative, but the yield in poorly controlled diabetes justifies the test.",
      },
      {
        test: "TSH and liver function tests",
        why: "Thyroid disease is common and worsens lipids and control; ALT screens for fatty liver before adding drugs.",
        expected: "Usually normal; a raised TSH or ALT changes the drug plan.",
      },
    ],
    management: [
      {
        heading: "Immediate priorities",
        points: [
          "Treat the two things that can cause irreversible loss this month: refer for ophthalmology assessment of the maculopathy, and protect the insensate foot with proper footwear and daily inspection advice.",
          "Review the drug list for inappropriate agents: glimepiride is risky as the eGFR falls, and the dose of metformin must be checked against renal function.",
          "Confirm adherence and drug supply before escalating - the commonest cause of an HbA1c of 9.8% is that the tablets were not taken.",
        ],
      },
      {
        heading: "Glycaemic control",
        points: [
          "Continue metformin 1 g twice daily if eGFR is above 45 mL/min/1.73 m2, halving the dose between 30 and 45 and stopping below 30.",
          "Add an SGLT2 inhibitor - dapagliflozin 10 mg once daily or empagliflozin 10 mg once daily - for the albuminuric kidney disease, which slows eGFR decline independently of glucose lowering, provided eGFR is above 20-25 mL/min/1.73 m2.",
          "Because the HbA1c is 9.8% and above target by more than 1.5%, start basal insulin: glargine or NPH 10 units at bedtime, or 0.1-0.2 units/kg, titrated by 2 units every 3 days against the fasting glucose with a target of 80-130 mg/dL.",
          "Reduce or stop glimepiride when basal insulin is introduced to avoid hypoglycaemia, and teach hypoglycaemia recognition and the rule of 15 to the patient and his family.",
          "Set an individualised HbA1c target of below 7.5% given his duration of disease, established complications and hypoglycaemia risk, reviewed with an HbA1c in 3 months.",
        ],
      },
      {
        heading: "Treating each complication",
        points: [
          "Retinopathy: ophthalmology referral now, laser photocoagulation or anti-VEGF injection as advised, and annual dilated examination thereafter; warn that sudden visual loss or floaters need same-day review.",
          "Kidney disease: start an ACE inhibitor or ARB - ramipril 5 mg daily or telmisartan 40 mg daily - titrated up, checking creatinine and potassium 1-2 weeks after each increase; a rise in creatinine of up to 30% is acceptable.",
          "Neuropathy: pain relief with amitriptyline 10-25 mg at night, or pregabalin 75 mg twice daily, or duloxetine 30-60 mg daily, titrated slowly and warning about drowsiness and postural dizziness; correct vitamin B12 with methylcobalamin 1500 mcg daily if deficient.",
          "Foot: classify as high risk because of loss of protective sensation, prescribe well-fitting cushioned footwear with a microcellular rubber insole, forbid barefoot walking indoors and out, teach daily inspection with a mirror and lukewarm water washing with careful drying between the toes, and arrange 3-monthly foot review.",
          "Cardiovascular risk: atorvastatin 40 mg at night regardless of the lipid level given established microvascular disease, blood pressure target below 130/80 mmHg, aspirin only if there is established atherosclerotic disease, and firm tobacco cessation support.",
        ],
      },
      {
        heading: "Education, follow-up and the family",
        points: [
          "Explain in his own language what the complications are, that they are the reason for tighter control, and that the treatment aims to prevent blindness, dialysis and amputation - specific consequences motivate better than numbers.",
          "Teach insulin injection technique, site rotation, storage without a refrigerator in a clay pot or wrapped cloth, and disposal of needles.",
          "Sick-day rules: never stop insulin, hold metformin and the SGLT2 inhibitor with vomiting, dehydration or sepsis, test more often and attend if unable to keep fluids down.",
          "Register in the NP-NCD clinic for free drugs and recall, give a written follow-up card with the schedule, and involve his wife, who cooks, in the dietary plan.",
          "Follow-up: 2 weeks for insulin titration, then monthly until stable, 3-monthly HbA1c and blood pressure, 3-monthly foot examination, and annual fundus, urine albumin-creatinine ratio, eGFR and lipids.",
          "Screen his first-degree relatives with a fasting glucose, since two siblings and a son are at high risk.",
        ],
      },
    ],
    viva: [
      {
        q: "Why do you call this diabetic kidney disease rather than hypertensive nephropathy?",
        a: "Because albuminuria coexists with retinopathy, and in type 2 diabetes the presence of retinopathy with albuminuria has a high positive predictive value for diabetic nephropathy. Albuminuria with no retinopathy, an active urinary sediment, rapidly falling eGFR or heavy proteinuria of sudden onset would make me look for a non-diabetic renal disease and consider a biopsy.",
      },
      {
        q: "He is on metformin for 12 years and has burning feet. What else must you exclude?",
        a: "Vitamin B12 deficiency. Metformin reduces ileal B12 absorption, and after 4 or more years deficiency is common, particularly on a vegetarian diet. It produces an identical distal sensory neuropathy, so I would send a serum B12 and treat with methylcobalamin 1500 mcg daily if it is low or borderline.",
      },
      {
        q: "How would you decide the HbA1c target for this man?",
        a: "By individualising. He has 12 years of disease, established microvascular complications and will now be on insulin, so a target below 7.5% is appropriate rather than below 6.5%. In a newly diagnosed young patient with no complications I would aim for 6.5% or lower, and in a frail elderly patient living alone I would accept around 8%.",
      },
      {
        q: "Why add an SGLT2 inhibitor rather than a DPP-4 inhibitor here?",
        a: "Because he has albuminuric chronic kidney disease. SGLT2 inhibitors slow the decline in eGFR and reduce heart failure hospitalisation independently of glucose lowering, which DPP-4 inhibitors do not. I would counsel on genital mycotic infection, ensure he stops it during acute illness, and warn about euglycaemic ketoacidosis.",
      },
      {
        q: "How do you grade the diabetic foot risk and what does each grade mean for follow-up?",
        a: "No neuropathy or vascular disease is low risk with annual review. Neuropathy alone, or deformity, or absent pulses is moderate risk with 3-6 monthly review. Neuropathy with deformity or peripheral arterial disease, or a previous ulcer or amputation, is high risk with 1-3 monthly review by a foot care team. This man has loss of protective sensation, so he is at least moderate risk and needs protective footwear now.",
      },
      {
        q: "What is the rule of 15 and when do you teach it?",
        a: "For a conscious patient with hypoglycaemia, give 15 g of fast-acting carbohydrate - three teaspoons of sugar or glucose in water, or 150 mL of fruit juice - recheck the glucose after 15 minutes and repeat if it is still below 70 mg/dL, then give a complex carbohydrate snack. I teach it to every patient and to a family member at the visit when insulin or a sulfonylurea is started, not at some later visit.",
      },
      {
        q: "He fasts during a religious festival for nine days. What do you advise?",
        a: "Assess risk first, then plan. I would halve or omit the sulfonylurea, keep metformin with the main meal, reduce the basal insulin dose by about 20%, insist on breaking the fast if glucose falls below 70 mg/dL or rises above 300 mg/dL, provide a glucometer and strips, encourage adequate fluids at permitted times, and see him before and after the fasting period rather than forbidding fasting outright.",
      },
      {
        q: "What would make you refer this patient to a nephrologist?",
        a: "An eGFR below 30 mL/min/1.73 m2, rapidly declining eGFR of more than 5 mL/min a year, urine albumin-creatinine ratio above 300 mg/g despite maximal ACE inhibitor or ARB therapy, refractory hypertension or hyperkalaemia, an active urinary sediment with red cell casts, or diagnostic uncertainty about a non-diabetic renal disease.",
      },
    ],
    pitfalls: [
      "Presenting the case as 'a known diabetic with high sugars' without a structured complication history - the marks in this long case sit almost entirely in the eye, kidney, nerve and foot history.",
      "Examining the feet with the socks on, or examining only one foot; both feet must be exposed to the knees and compared, with the footwear inspected too.",
      "Failing to record a standing blood pressure and then missing autonomic neuropathy, which changes both the drug choice and the fall risk.",
      "Blaming poor control on 'non-compliance' without asking who pays for the drugs, whether the supply ran out, and whether he stopped them during fasting or an illness.",
      "Intensifying drugs while ignoring an untreated infection, undiagnosed tuberculosis, dental sepsis or depression, all of which will defeat any regimen.",
      "Forgetting vitamin B12 in a patient on long-term metformin and attributing every symptom to diabetic neuropathy.",
      "Quoting a single HbA1c target for everyone instead of individualising it to duration, complications, hypoglycaemia risk and life expectancy.",
      "Omitting the family: not screening first-degree relatives and not involving the person who actually cooks the food.",
    ],
    references: [
      "American Diabetes Association, Standards of Care in Diabetes, 2025",
      "RSSDI Clinical Practice Recommendations for the Management of Type 2 Diabetes Mellitus, 2022",
      "ICMR Guidelines for Management of Type 2 Diabetes, 2018",
      "KDIGO Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease, 2022",
      "International Working Group on the Diabetic Foot (IWGDF) Guidelines, 2023",
      "National Programme for Prevention and Control of Non-Communicable Diseases (NP-NCD) operational guidelines, MoHFW",
    ],
  },
  {
    id: "endocrine-case-thyroid-swelling",
    title: "Short case and viva: swelling in the front of the neck",
    kind: "short",
    subjectId: "endocrine",
    opening:
      "A 32-year-old woman has noticed a painless swelling in the front of the neck for 8 months, with no pain, no hoarseness and no difficulty in swallowing or breathing.",
    minutes: 12,
    frequency: "common",
    sections: [
      {
        heading: "Demonstrating that it is thyroid",
        points: [
          "Seat the patient on a stool with the neck slightly extended and adequate light, expose from the chin to below both clavicles, and inspect from the front before touching anything.",
          "Ask her to swallow a sip of water: **a thyroid swelling moves up with deglutition** because it is bound to the trachea by the ligament of Berry, and this is the observation that identifies the organ.",
          "Ask her to protrude the tongue: **a thyroglossal cyst rises on tongue protrusion**, a thyroid swelling does not - this single manoeuvre separates the two commonest midline neck swellings.",
          "Then palpate from behind with both hands, thumbs on the nape, defining size, shape, surface, consistency, mobility, tenderness, and whether the lower border can be reached - an unreachable lower border means retrosternal extension.",
          "Palpate for the trachea in the suprasternal notch, for cervical lymph nodes in all groups, and for a carotid pulse that should be palpable; **a pulse pushed backwards and impalpable (Berry sign) suggests malignant infiltration**.",
        ],
      },
      {
        heading: "Completing the local examination",
        points: [
          "Percuss the manubrium for retrosternal dullness and auscultate over the upper poles for a bruit, which indicates a hyperdynamic vascular gland as in Graves disease.",
          "Test for **Pemberton sign** - ask her to raise both arms above the head for a minute and watch for facial congestion, cyanosis, distended neck veins or stridor, which indicates thoracic inlet obstruction by a retrosternal goitre.",
          "Ask her to speak and cough to assess voice quality; a bovine cough or hoarseness suggests recurrent laryngeal nerve involvement and mandates indirect laryngoscopy.",
          "Say clearly whether the gland is diffusely enlarged, multinodular or a solitary nodule, and state the size in centimetres rather than in fruit.",
        ],
      },
      {
        heading: "Assessing the functional status",
        points: [
          "Look for hyperthyroidism: pulse rate and rhythm, sleeping pulse, tremor of outstretched hands, warm moist palms, proximal myopathy, lid lag, lid retraction, proptosis and pretibial myxoedema.",
          "Look for hypothyroidism: bradycardia, dry coarse skin, periorbital puffiness, hoarse voice, delayed relaxation of the ankle jerk, and a slow answer to a simple question.",
          "Ask the functional screening questions: weight change with appetite, heat or cold intolerance, palpitation, bowel habit, menstrual pattern, and energy.",
          "State your functional conclusion explicitly - 'she is clinically euthyroid' - because the examiner will ask for it if you do not offer it.",
        ],
      },
      {
        heading: "Presenting the findings",
        points: [
          "Present as: 'On examination there is a 3 by 3 cm swelling in the front of the neck to the right of the midline, moving up with deglutition but not on tongue protrusion, firm, non-tender, with a smooth surface and well-defined margins, the lower border reachable, no cervical lymphadenopathy, trachea central, carotid pulses palpable, no bruit and no Pemberton sign.'",
          "Follow with the functional statement and then the summary: 'a clinically euthyroid patient with a solitary right lobe thyroid nodule with no clinical features suggesting malignancy or compression.'",
          "Offer the differential diagnosis in order of likelihood before being asked, and then say what investigation you would do first.",
        ],
      },
    ],
    summaryStatement:
      "This is a 32-year-old clinically euthyroid woman with a solitary, firm, non-tender, mobile 3 cm nodule in the right lobe of the thyroid, moving with deglutition but not with tongue protrusion, with no cervical lymphadenopathy, no tracheal deviation, no retrosternal extension and no clinical features of compression or malignancy.",
    differential: [
      {
        diagnosis: "Benign colloid nodule in a multinodular goitre (dominant nodule)",
        forIt: "Commonest cause in an iodine-deficient country, painless, slow growing, euthyroid, firm and mobile with a smooth surface.",
        againstIt: "The rest of the gland feels normal, so it may be a genuinely solitary lesion rather than a dominant nodule - ultrasound frequently reveals other nodules.",
      },
      {
        diagnosis: "Follicular adenoma",
        forIt: "A true solitary, smooth, firm, encapsulated nodule in a young woman with normal thyroid function fits perfectly.",
        againstIt: "It cannot be distinguished from follicular carcinoma on clinical examination or on cytology - only histology after hemithyroidectomy can separate them.",
      },
      {
        diagnosis: "Papillary carcinoma of the thyroid",
        forIt: "The commonest thyroid malignancy, often presenting as a painless solitary nodule in a young woman with a normal TSH.",
        againstIt: "No hard or fixed feel, no lymphadenopathy, no hoarseness, no rapid growth and no history of neck irradiation.",
      },
      {
        diagnosis: "Toxic adenoma",
        forIt: "A solitary nodule with the rest of the gland impalpable can be an autonomously functioning adenoma.",
        againstIt: "She is clinically euthyroid with no tachycardia or tremor; a suppressed TSH would be needed and would then require a scintiscan.",
      },
      {
        diagnosis: "Thyroid cyst or haemorrhage into a nodule",
        forIt: "Cystic degeneration is common; sudden painful enlargement would suggest haemorrhage into a pre-existing nodule.",
        againstIt: "There is no fluctuation, no history of sudden onset and no pain; ultrasound will settle it immediately.",
      },
      {
        diagnosis: "Non-thyroid neck swelling - thyroglossal cyst, lymph node, dermoid, branchial cyst",
        forIt: "All present as neck swellings and must be excluded by position and mobility.",
        againstIt: "The swelling moves with deglutition and not with tongue protrusion, which places it in the thyroid and excludes a thyroglossal cyst.",
      },
    ],
    investigations: [
      {
        test: "Serum TSH, with free T4 if TSH is abnormal",
        why: "It is the first test in every thyroid nodule, and it decides the next step - a suppressed TSH sends you to a scan and a normal TSH to ultrasound.",
        expected: "Normal in a clinically euthyroid patient with a benign or neoplastic nodule; suppressed in a toxic adenoma.",
      },
      {
        test: "High-resolution ultrasound of the neck with cervical node survey",
        why: "To characterise the nodule, detect impalpable additional nodules, and grade the risk of malignancy by ACR TI-RADS or ATA categories, which sets the size threshold for aspiration.",
        expected: "A well-defined isoechoic solid nodule with peripheral vascularity in a benign lesion; hypoechogenicity, taller-than-wide shape, microcalcification, irregular margins or abnormal nodes suggest malignancy.",
      },
      {
        test: "Radionuclide (technetium-99m) scan, only if TSH is suppressed",
        why: "To identify an autonomously functioning hot nodule, which is almost never malignant and does not require cytology.",
        expected: "A hot nodule with suppression of the rest of the gland in a toxic adenoma; a cold nodule requires cytology.",
      },
      {
        test: "Ultrasound-guided fine-needle aspiration cytology reported by the Bethesda system",
        why: "It is the definitive investigation for a cold nodule meeting the size and risk threshold, and it directs management by category.",
        expected: "Bethesda II benign in the majority; III, IV, V or VI change management as set out in the Bethesda table.",
      },
      {
        test: "Indirect laryngoscopy or flexible nasolaryngoscopy",
        why: "To document vocal cord function before any thyroid surgery, and immediately if the patient is hoarse.",
        expected: "Normal cord movement; a paralysed cord raises strong suspicion of malignant infiltration.",
      },
      {
        test: "Serum calcitonin, and chest radiograph or CT for a large or retrosternal goitre",
        why: "Calcitonin if medullary carcinoma is suspected from family history or cytology; imaging to define retrosternal extension and tracheal compression before surgery.",
        expected: "Normal calcitonin in the great majority; tracheal narrowing or deviation on imaging changes the anaesthetic plan.",
      },
    ],
    management: [
      {
        heading: "If the cytology is benign (Bethesda II)",
        points: [
          "Reassure, explain that surgery is not needed, and arrange clinical and ultrasound follow-up at 12-24 months.",
          "Repeat aspiration if the nodule grows by more than 50% in volume or 20% in two dimensions, or if new suspicious ultrasound features appear.",
          "Do not use levothyroxine suppression therapy: it rarely shrinks nodules and causes iatrogenic thyrotoxicosis with atrial fibrillation and bone loss.",
          "Advise iodised salt use, and reassure that a benign nodule does not turn malignant with time.",
        ],
      },
      {
        heading: "If the cytology is indeterminate or malignant",
        points: [
          "Bethesda III: repeat aspiration, molecular testing where available, or diagnostic lobectomy according to the ultrasound risk and patient preference.",
          "Bethesda IV: diagnostic hemithyroidectomy with isthmusectomy, since capsular and vascular invasion can only be assessed histologically.",
          "Bethesda V or VI: total thyroidectomy with central compartment node dissection where indicated, followed by radioiodine ablation and TSH-suppressive levothyroxine for high-risk differentiated cancer.",
          "Counsel specifically on the risks of thyroid surgery: recurrent laryngeal nerve palsy with hoarseness, hypoparathyroidism with hypocalcaemia, haematoma with airway obstruction, and lifelong levothyroxine after total thyroidectomy.",
        ],
      },
      {
        heading: "Surgical indications regardless of cytology",
        points: [
          "Pressure symptoms - dysphagia, dyspnoea, stridor, or a positive Pemberton sign from retrosternal extension.",
          "Cosmetic concern in a large goitre after the patient has been fully informed of the risks.",
          "A recurrent cyst that refills after two aspirations, and any nodule with clinical red flags such as fixity, rapid growth, hoarseness or lymphadenopathy.",
          "A toxic adenoma or toxic multinodular goitre, where radioiodine and surgery are the two definitive options and drugs alone will never cure it.",
        ],
      },
      {
        heading: "Post-operative care",
        points: [
          "Watch for stridor and neck swelling in the first 24 hours - a tension haematoma needs the wound opened at the bedside, so clip removers must be at the bed.",
          "Check serum calcium at 12 and 24 hours and ask about perioral tingling; treat symptomatic hypocalcaemia with intravenous calcium gluconate and start oral calcium with calcitriol.",
          "Assess the voice on the first post-operative day and arrange laryngoscopy if it is altered.",
          "Start levothyroxine 1.6 mcg/kg after total thyroidectomy, with a TSH check at 6-8 weeks; after hemithyroidectomy check TSH at 6-8 weeks since about a fifth become hypothyroid.",
        ],
      },
    ],
    viva: [
      {
        q: "How do you prove clinically that a neck swelling arises from the thyroid?",
        a: "It moves upwards with deglutition, because the pretracheal fascia binds the gland to the trachea through the ligament of Berry. A thyroglossal cyst also moves with swallowing but in addition rises on tongue protrusion, because of its attachment to the hyoid and foramen caecum, so the two manoeuvres together localise the swelling.",
      },
      {
        q: "What is Berry sign and what does it mean?",
        a: "Absence of a palpable carotid pulse on the side of a thyroid swelling. The carotid sheath is displaced or infiltrated, which suggests a malignant thyroid lesion; in a benign goitre the carotid is pushed laterally but remains palpable.",
      },
      {
        q: "What is Pemberton sign?",
        a: "Facial congestion, cyanosis, distended neck veins and sometimes stridor when the patient raises both arms above the head for a minute. It indicates that a retrosternal goitre is obstructing the thoracic inlet, and it is an indication for surgery and for careful anaesthetic assessment.",
      },
      {
        q: "Why is the first investigation a TSH and not an FNAC?",
        a: "Because a suppressed TSH changes the entire pathway: it points to an autonomously functioning nodule, which is investigated with a radionuclide scan and is almost never malignant, so cytology is unnecessary and can be misleading. With a normal or raised TSH the pathway goes to ultrasound and then risk-stratified aspiration.",
      },
      {
        q: "Which ultrasound features make you suspect malignancy?",
        a: "Marked hypoechogenicity, a taller-than-wide shape, irregular or lobulated margins, microcalcification, extrathyroidal extension and abnormal cervical lymph nodes with loss of the fatty hilum or cystic change. Purely cystic and spongiform nodules are almost always benign.",
      },
      {
        q: "Why is a Bethesda IV report an indication for surgery?",
        a: "Because the distinction between follicular adenoma and follicular carcinoma rests entirely on capsular and vascular invasion, which cannot be seen in an aspirate of cells. With a malignancy risk of 25-40%, a diagnostic hemithyroidectomy provides the whole capsule for histology and is both diagnostic and, if benign, therapeutic.",
      },
      {
        q: "Name the complications of thyroidectomy you would consent for.",
        a: "Haemorrhage with tension haematoma and airway obstruction, recurrent laryngeal nerve injury causing hoarseness and, if bilateral, stridor requiring tracheostomy, external laryngeal nerve injury altering voice pitch, hypoparathyroidism with hypocalcaemia which may be transient or permanent, hypothyroidism requiring lifelong levothyroxine, wound infection, keloid and thyroid storm if an unprepared thyrotoxic patient is operated.",
      },
      {
        q: "A patient develops perioral tingling and carpal spasm on the first night after total thyroidectomy. What do you do?",
        a: "This is symptomatic hypocalcaemia from post-surgical hypoparathyroidism. I would check corrected calcium urgently, attach cardiac monitoring and give 10 mL of 10% calcium gluconate diluted in 50-100 mL of 5% dextrose intravenously over 10 minutes, repeat as required and set up an infusion, then start oral calcium 1-2 g daily with calcitriol 0.25-0.5 mcg twice daily. Plain cholecalciferol would not work, since 1-alpha-hydroxylation depends on parathyroid hormone.",
      },
      {
        q: "How common is malignancy in a solitary thyroid nodule, and which clinical features raise your suspicion?",
        a: "About 5-10% of nodules are malignant. Suspicion rises with age under 20 or over 60, male sex, a hard or fixed nodule, rapid growth, hoarseness with vocal cord palsy, stridor or dysphagia, cervical lymphadenopathy, previous head and neck irradiation, and a family history of medullary carcinoma or MEN2.",
      },
    ],
    pitfalls: [
      "Palpating from the front only and never standing behind the patient, which loses the surface, consistency and lower border of the gland.",
      "Forgetting to ask the patient to protrude the tongue, and then being unable to exclude a thyroglossal cyst.",
      "Failing to state the functional status - a candidate who describes a beautiful lump but cannot say whether the patient is euthyroid has missed the point of the case.",
      "Omitting the search for cervical lymph nodes and the assessment of the voice, both of which change the diagnosis and the operation.",
      "Requesting an FNAC before a TSH, and so aspirating a hot nodule unnecessarily.",
      "Offering levothyroxine suppression for a benign nodule, which is ineffective and causes iatrogenic thyrotoxicosis.",
      "Describing size as 'the size of a lemon' instead of measuring it in centimetres in two dimensions.",
      "Sending an unprepared thyrotoxic patient for surgery and precipitating a thyroid storm.",
    ],
    references: [
      "American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer, 2015",
      "The Bethesda System for Reporting Thyroid Cytopathology, 3rd edition, 2023",
      "ACR Thyroid Imaging Reporting and Data System (TI-RADS), 2017",
      "Bailey and Love's Short Practice of Surgery, 28th edition, 2023 - the thyroid gland",
      "S Das, A Manual on Clinical Surgery, 14th edition - examination of a swelling in the neck",
      "Indian Thyroid Society consensus on evaluation of thyroid nodules, 2020",
    ],
  },
];

const subject: Subject = {
  id: "endocrine",
  title: "Endocrine & Metabolic",
  blurb:
    "Diabetes from diagnosis through insulin, complication screening and the emergencies, then thyroid disease, obesity and the metabolic syndrome, vitamin D and calcium, and the adrenal tail.",
  icon: "Activity",
  papers: ["II"],
  topics,
  cases,
};

export default subject;
