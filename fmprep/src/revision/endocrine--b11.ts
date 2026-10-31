import type { RevisionSet } from "./index";

const revision: RevisionSet = {};

revision["endocrine-obesity-pharmacotherapy-bariatric"] = {
  checked: "2026-10",
  updated: [
    "Lancet Diabetes & Endocrinology Commission 2025: clinical vs preclinical obesity; BMI alone no longer diagnoses obesity.",
    "Indian obesity definition 2025 (Misra et al.): two-stage Asian-Indian classification at BMI 23 or more.",
    "EASO 2025 pharmacotherapy framework: drug choice by complication; semaglutide 2.4 mg or tirzepatide first-line for most.",
    "WHO 2025 guideline: conditional recommendation for GLP-1 therapies in adults with obesity.",
    "SURMOUNT-5 (2025): tirzepatide 20.2% vs semaglutide 13.7% weight loss.",
    "FDA 2024-2025: tirzepatide approved for OSA; semaglutide approved for MASH with F2-F3 fibrosis.",
    "ADA Standards 2026: 10-15% weight loss as a primary target in T2DM; continue anti-obesity drugs long term.",
    "India 2025: tirzepatide and semaglutide 2.4 mg launched; generic semaglutide after 2026 patent expiry.",
  ],
  master: {
    heading: "Master revision table - Obesity pharmacotherapy and bariatric surgery",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Chronic relapsing disease of **excess adiposity**; Asian Indian obesity BMI **25 or more**, overweight 23-24.9; waist 90/80 cm."],
      ["Burden", "ICMR-INDIAB 2023: generalised obesity **28.6%**, abdominal **39.5%**; NFHS-5 BMI 25+ in 24% women, 22.9% men."],
      ["New definitions", "Lancet Commission 2025 **clinical vs preclinical** obesity; Indian 2025 **stage 1 / stage 2** at BMI 23 or more."],
      ["Why weight returns", "Leptin resistance; after dieting ghrelin rises, GLP-1/PYY fall, energy expenditure drops - **metabolic adaptation**."],
      ["Drug indication", "BMI **27 or more, or 25 or more with a complication** (Asian); labels 30 / 27 with complication."],
      ["Drugs", "**Orlistat** 120 mg TDS (3 kg); **liraglutide** 3 mg daily (8%); **semaglutide** 2.4 mg weekly (15%); **tirzepatide** 5-15 mg weekly (20%)."],
      ["Stopping rule", "Under **5% loss at 12 weeks** on maintenance dose - stop; otherwise continue long term (regain on stopping)."],
      ["Not in India", "Phentermine, phentermine-topiramate, naltrexone-bupropion; **sibutramine banned 2010** (SCOUT)."],
      ["Surgery indication", "ASMBS/IFSO 2022 Asians: **offer at 27.5, recommend at 32.5**; DSS-II for T2DM."],
      ["Procedures", "Sleeve (commonest, worsens GERD), **RYGB** (best for GERD, diabetes), OAGB, BPD-DS, band (abandoned)."],
      ["Post-op care", "Staged diet to 8 weeks, protein 60-80 g, multivitamin, calcium citrate, D3, B12, iron, thiamine; UDCA 6 months."],
      ["Complications", "Leak (tachycardia over 120), Wernicke, dumping, internal hernia, marginal ulcer, deficiencies, alcohol misuse."],
      ["Special groups", "Pregnancy - stop drugs (semaglutide 2 months before); tirzepatide reduces OCP; delay pregnancy 12-18 months after surgery."],
      ["Latest updates", "Lancet 2025, Indian definition 2025, EASO 2025, WHO 2025, SELECT, SURMOUNT-5, ADA 2026."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Assessing a person with obesity in OPD",
      steps: [
        { label: "Measure BMI, waist and waist-height ratio", detail: "Asian cut-offs: BMI 23 overweight, 25 obese; waist 90/80 cm" },
        { label: "Confirm excess adiposity", detail: "BMI plus one waist measure; BMI over 40 alone is enough" },
        { label: "Screen for complications", detail: "Glucose, lipids, BP, MASLD (FIB-4), OSA (STOP-BANG), knees, mood", tone: "decision" },
        { label: "Look for secondary causes on clues only", detail: "TSH; 1 mg DST if Cushing features; drug history" },
        { label: "Stage: preclinical or clinical obesity", detail: "Indian stage 1 vs stage 2", tone: "decision" },
        { label: "Agree a goal of 5-15% weight loss", detail: "Choose treatment intensity by stage and complications", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Treatment ladder with Asian-Indian thresholds",
      steps: [
        { label: "Lifestyle therapy for all", detail: "500-750 kcal deficit, protein 1-1.2 g/kg, 150-300 min/week activity, resistance training" },
        { label: "Add drug at BMI 27, or 25 with complication", detail: "Semaglutide 2.4 mg or tirzepatide first; orlistat if cost limits" },
        { label: "Review at 12 weeks on maintenance dose", detail: "Under 5% loss - stop or switch", tone: "decision" },
        { label: "Offer surgery at BMI 27.5 with metabolic disease", detail: "ASMBS/IFSO 2022; DSS-II for uncontrolled T2DM" },
        { label: "Recommend surgery at BMI 32.5 or more", detail: "Sleeve, RYGB or OAGB at accredited centre", tone: "warn" },
        { label: "Lifelong follow-up and supplements", detail: "Labs at 3, 6, 12 months then yearly", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "Sleeve gastrectomy vs Roux-en-Y gastric bypass",
      columns: ["Feature", "Sleeve gastrectomy", "Roux-en-Y gastric bypass"],
      rows: [
        ["Weight loss", "25-30% total", "30-35% total"],
        ["Reflux", "Worsens or causes GERD", "Treats GERD"],
        ["Diabetes remission", "Good", "Better"],
        ["Deficiencies", "Fewer", "Iron, B12, calcium more common"],
        ["Specific risks", "Staple-line leak, Barrett", "Marginal ulcer, internal hernia, dumping"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "Obesity is a **chronic relapsing disease** of excess adiposity, treated long term like hypertension.",
          "Asian Indians: overweight BMI **23-24.9**, obesity **25 or more**; waist 90 cm men, 80 cm women.",
          "ICMR-INDIAB 2023: **generalised obesity 28.6%**, abdominal obesity 39.5% of Indian adults.",
          "Lancet Commission 2025: **clinical obesity** means organ dysfunction or limited daily activities.",
          "Indian 2025 definition: **stage 2** is BMI 23 or more with abdominal fat and a complication.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "Hypothalamic **POMC neurons** cut appetite; AgRP/NPY neurons drive hunger.",
          "Obesity causes **leptin resistance**, so leptin is useless as a drug except in deficiency.",
          "After dieting, ghrelin rises and GLP-1 falls; this **metabolic adaptation** drives regain.",
          "**GLP-1 agonists** act on hypothalamus and brainstem to increase satiety.",
          "**Tirzepatide** adds GIP agonism, giving more weight loss than GLP-1 alone.",
          "Bariatric surgery raises GLP-1 and PYY, so diabetes improves **before weight loss**.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "Baseline: **HbA1c**, lipids, liver enzymes, creatinine, urine ACR, TSH, CBC.",
          "**FIB-4** for liver fibrosis; 1.3 or more needs elastography.",
          "Sleep study if **STOP-BANG** is 3 or more.",
          "Before surgery: **upper GI endoscopy**, ultrasound, vitamin D, B12, iron studies, psychological review.",
          "Test for Cushing only with clues: **purple striae**, proximal myopathy, thin skin.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "Lifestyle for all: **500-750 kcal deficit**, high protein, 150-300 minutes activity weekly.",
          "Drugs at Asian BMI **27, or 25 with a complication**.",
          "**Semaglutide 2.4 mg** weekly, titrated over 16 weeks; about 15% weight loss.",
          "**Tirzepatide** 2.5 mg weekly, up by 2.5 mg monthly to 5-15 mg; about 20% loss.",
          "**Orlistat 120 mg** three times daily with fatty meals; multivitamin at bedtime.",
          "Stop any drug giving **under 5% loss at 12 weeks** on maintenance dose.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "ASMBS/IFSO 2022 Asians: **offer surgery at 27.5**, recommend at 32.5.",
          "**Sleeve gastrectomy** is commonest; avoid it when reflux is significant.",
          "**RYGB** gives more weight loss and treats reflux and diabetes best.",
          "SOS study: surgery adds about **3 years of life**.",
          "Weight regain after surgery: add **semaglutide or tirzepatide**.",
        ],
      },
      {
        title: "Inpatient / emergency care",
        points: [
          "Persistent **tachycardia over 120** after bariatric surgery means leak until proved otherwise.",
          "Vomiting after surgery: **thiamine 100 mg IV** before glucose.",
          "Colicky pain after bypass: think **internal hernia**; urgent CT.",
          "Severe pain on incretin drug: suspect **pancreatitis**; stop the drug.",
          "Hold weekly GLP-1 agonists **one week before** elective surgery, or liquid diet the day before.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "Pregnancy: all drugs contraindicated; stop **semaglutide 2 months** before conception.",
          "Tirzepatide reduces **oral contraceptive** efficacy; add barrier for 4 weeks after each dose step.",
          "Delay pregnancy **12-18 months** after bariatric surgery; avoid OGTT.",
          "Elderly: modest loss with **resistance training** to prevent sarcopenia.",
          "Adolescents: semaglutide from **12 years**; surgery from 13 years for severe obesity.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "Incretin drugs: **nausea**, gallstones, pancreatitis, AKI, muscle loss.",
          "Orlistat: **oily spotting**, urgency, vitamin loss; space levothyroxine 4 hours.",
          "**Early dumping** at 10-30 minutes; late dumping hypoglycaemia at 1-3 hours.",
          "Deficiencies after surgery: **iron, B12, folate, D, calcium, thiamine, copper**.",
          "Higher risk of **alcohol misuse** and self-harm after surgery.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "On drugs: review **monthly** during titration, then 3-monthly.",
          "Reduce insulin, sulfonylureas and antihypertensives as **weight falls**.",
          "After surgery: labs at **3, 6, 12 months**, then yearly, for life.",
          "Lifelong **calcium citrate, vitamin D3, B12, iron** and multivitamin.",
          "Screen adults over 30 under **NP-NCD** at Ayushman Arogya Mandirs.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**Lancet Commission 2025** and Indian definition 2025 move beyond BMI.",
          "**EASO 2025**: choose drug by complication.",
          "**WHO 2025** conditionally recommends GLP-1 therapies for obesity.",
          "**SELECT**: semaglutide cut MACE 20% without diabetes.",
          "India: **tirzepatide and Wegovy** launched 2025; generic semaglutide 2026.",
        ],
      },
    ],
    tables: [
      {
        heading: "Anti-obesity drugs",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Orlistat", "120 mg orally three times daily with fatty meals", "Long term; stop if under 5% at 12 weeks", "Oily spotting, vitamin loss, oxalate stones; space levothyroxine"],
          ["Liraglutide 3 mg", "0.6 mg SC daily, up 0.6 mg weekly to 3 mg", "Long term; about 8% loss", "Nausea, gallstones, pancreatitis; MTC/MEN2"],
          ["Semaglutide 2.4 mg", "SC weekly: 0.25, 0.5, 1, 1.7, 2.4 mg every 4 weeks", "Long term; about 15% loss", "GI upset, gallstones, retinopathy worsening; stop 2 months before pregnancy"],
          ["Tirzepatide", "SC weekly 2.5 mg, up 2.5 mg every 4 weeks to 5-15 mg", "Long term; about 20% loss", "GI upset, pancreatitis; lowers oral contraceptive efficacy"],
          ["Phentermine", "15-37.5 mg orally daily (US only)", "12 weeks; not in India", "Tachycardia, hypertension, insomnia"],
        ],
      },
      {
        heading: "BMI thresholds: Western vs Asian",
        columns: ["Step", "Western", "Asian / Indian"],
        rows: [
          ["Overweight", "25", "23"],
          ["Obesity", "30", "25"],
          ["Drugs", "30, or 27 with complication", "27, or 25 with complication"],
          ["Surgery offered", "30 with metabolic disease", "27.5"],
          ["Surgery recommended", "35", "32.5"],
        ],
      },
      {
        heading: "Bariatric procedures",
        columns: ["Procedure", "Weight loss", "Main problem"],
        rows: [
          ["Sleeve gastrectomy", "25-30%", "GERD, leak"],
          ["RYGB", "30-35%", "Marginal ulcer, internal hernia, dumping"],
          ["OAGB", "30-35%", "Bile reflux, malnutrition"],
          ["BPD-DS", "35-45%", "Protein and fat-soluble vitamin deficiency"],
          ["Gastric band", "15-20%", "Slippage, erosion"],
        ],
      },
    ],
    remember: [
      "Asian surgery thresholds: **27.5 offer, 32.5 recommend** (IFSO 2022).",
      "Stopping rule: **under 5% at 12 weeks** - stop the drug.",
      "Tirzepatide **20%**, semaglutide 15%, liraglutide 8%, orlistat 3 kg.",
      "Sibutramine **banned in India 2010**.",
      "Sleeve worsens reflux; **bypass cures it**.",
      "Post-bariatric vomiting: **thiamine before glucose**.",
      "Stopping incretins: **two-thirds of weight returns** in a year.",
    ],
  },
};

revision["endocrine-diabetes-nutrition-exercise"] = {
  checked: "2026-10",
  updated: [
    "ICMR-NIN Dietary Guidelines for Indians 2024: My Plate for the Day; cereals at most 45% of energy; added sugar under 5%.",
    "ICMR-INDIAB Nature Medicine 2023: carbohydrate 49-54%, protein 19-20%, fat 21-26% of energy for remission.",
    "WHO 2023 guideline: do not use non-sugar sweeteners for weight control.",
    "ADA Standards 2026 Section 5: food-insecurity screening, individualised eating patterns, protein and resistance training on incretin drugs.",
    "DiRECT 5-year follow-up 2024: durable remission in about 13% vs 5%.",
    "KDIGO 2022: protein 0.8 g/kg/day and sodium under 2 g/day in diabetes with CKD.",
  ],
  master: {
    heading: "Master revision table - Medical nutrition therapy and exercise in diabetes",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "**MNT**: individualised dietitian-led nutrition care; lowers HbA1c **1-2%**; foundation at every stage."],
      ["Indian problem", "About **62% energy from carbohydrate**, low protein, sugar in tea, fried snacks, inactivity in 55%."],
      ["Physiology", "Post-meal spike from lost first-phase insulin; exercise moves **GLUT4 via AMPK**; 15 kg loss clears liver and pancreatic fat."],
      ["GI and GL", "GI low 55 or less, high 70 or more; **GL = GI x carbohydrate g / 100**, high 20 or more."],
      ["Calories", "Ideal weight x **20-25 kcal** (sedentary overweight); 500-750 kcal deficit."],
      ["Macronutrients", "Carbohydrate about **50%**, protein 19-20%, fat 21-26%; sugar under 25 g, salt under 5 g."],
      ["Plate method", "**Half vegetables, quarter protein, quarter carbohydrate**, water."],
      ["ICMR-NIN plate", "Vegetables 400 g, fruit 100 g, cereals 250 g, pulses 85 g, nuts 35 g, milk 300 mL, oil 27 g."],
      ["Exercise", "**150 min/week** aerobic, no 2 days off; resistance 2-3 times weekly; break sitting every 30 min."],
      ["Exercise safety", "Glucose under 90 - take **15-30 g** carbohydrate; avoid heavy lifting in proliferative retinopathy; ulcer - non-weight-bearing."],
      ["Remission", "HbA1c under 6.5% **3 months off drugs**; DiRECT 46% at 1 year, 86% if 15 kg lost."],
      ["Special groups", "Pregnancy at least 175 g carbohydrate; CKD protein 0.8 g/kg; elderly protein 1-1.2 g/kg."],
      ["Follow-up", "Dietitian **3-4 visits in 6 months**; HbA1c 3-monthly; NP-NCD screening."],
      ["Latest updates", "ICMR-NIN 2024, ICMR-INDIAB 2023 macronutrients, WHO 2023 sweeteners, ADA 2026, DiRECT 5-year."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Writing a diet plan in the OPD",
      steps: [
        { label: "Diet recall and lifestyle history", detail: "Portions, oil, sugar, timing, fasting, alcohol, cost, who cooks" },
        { label: "Calculate energy need", detail: "Ideal weight (height minus 100 or 105) x 20-35 kcal by activity" },
        { label: "Weight loss needed?", detail: "Overweight: 500-750 kcal deficit; aim 5-15% loss", tone: "decision" },
        { label: "Set the plate", detail: "Half vegetables, quarter protein, quarter whole grain or millet" },
        { label: "Fix limits", detail: "Sugar under 25 g, salt under 5 g, oil 20-27 g, no juice" },
        { label: "Adjust for drugs and kidneys", detail: "Regular meals on insulin/SU; protein 0.8 g/kg in CKD", tone: "warn" },
        { label: "Review in 4-12 weeks with SMBG pairs", detail: "HbA1c at 3 months", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Lifestyle intensity ladder towards remission",
      steps: [
        { label: "Plate method and sugar removal", detail: "All patients from day one" },
        { label: "Structured MNT with dietitian", detail: "3-4 visits in 6 months; HbA1c falls 1-2%" },
        { label: "Exercise prescription", detail: "150 min aerobic plus resistance 2-3 times weekly" },
        { label: "Low-carbohydrate or calorie-restricted plan", detail: "Aim 10-15% weight loss; adjust SU and insulin", tone: "decision" },
        { label: "Total diet replacement", detail: "825-853 kcal/day for 12-20 weeks; stop SU and insulin at start", tone: "warn" },
        { label: "Remission maintained", detail: "HbA1c under 6.5% off drugs; yearly checks continue", tone: "good" },
      ],
    },
    {
      kind: "branch",
      heading: "Exercise: when to modify",
      root: "Patient with diabetes starting exercise",
      arms: [
        { label: "On insulin or sulfonylurea", tone: "warn", steps: ["Check glucose first", "Under 90 mg/dL: 15-30 g carbohydrate", "Bedtime check for delayed lows"] },
        { label: "Proliferative retinopathy", tone: "warn", steps: ["No heavy lifting or Valsalva", "Moderate aerobic only after eye review"] },
        { label: "Neuropathy with ulcer", tone: "decision", steps: ["Non-weight-bearing exercise", "Proper footwear, daily foot check"] },
        { label: "No complications", tone: "good", steps: ["150 min aerobic", "Resistance 2-3 times weekly", "Post-meal walks"] },
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**MNT** is individualised nutrition care that lowers HbA1c by 1-2%.",
          "Indians get about **62% of energy from carbohydrate**, mostly white rice and wheat.",
          "About **55% of Indians** are physically inactive (ICMR-INDIAB).",
          "**Remission**: HbA1c under 6.5% at least 3 months after stopping all drugs.",
          "Give **DSMES** at diagnosis, yearly, with complications and at transitions.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "Loss of **first-phase insulin** makes post-meal spikes drive HbA1c.",
          "**Glycaemic load** combines food quality (GI) and portion size.",
          "Exercise moves **GLUT4** to muscle membranes without insulin.",
          "Insulin sensitivity stays higher for **24-72 hours** after exercise.",
          "Losing about 15 kg clears **liver and pancreatic fat** (twin cycle hypothesis).",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**HbA1c** every 3 months until target; MNT effect shows by 3-6 months.",
          "**Paired SMBG** before and 2 hours after a meal shows which food spikes.",
          "Check **creatinine and urine ACR** before setting protein targets.",
          "Check **fundus and feet** before an exercise prescription.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "Energy: ideal weight x **20-25 kcal**; deficit of 500-750 kcal for weight loss.",
          "**Plate method**: half vegetables, quarter protein, quarter carbohydrate.",
          "Carbohydrate about **50% of energy**, protein 19-20%, fat 21-26%.",
          "Added sugar under **25 g/day**, salt under 5 g, oil 20-27 g.",
          "Prefer **whole grains, millets**, whole pulses; whole fruit not juice.",
          "Eat **vegetables and protein first**, carbohydrate last.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "Aerobic **150 minutes a week** over at least 3 days, no 2 days off.",
          "**Resistance training** 2-3 non-consecutive days a week.",
          "Break sitting every **30 minutes**; walk 10-15 minutes after meals.",
          "Indian consensus: **60 minutes a day** of activity.",
          "**Total diet replacement** (about 850 kcal) for remission in early disease.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "Pregnancy: at least **175 g carbohydrate**, no weight-loss diets.",
          "CKD: protein **0.8 g/kg/day**, sodium under 2 g.",
          "Elderly: protein **1-1.2 g/kg** with resistance exercise; avoid restriction.",
          "On GLP-1 drugs: **high protein** and resistance training to protect muscle.",
          "Vegetarians: combine **cereal and pulse**; check B12.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "Exercise on insulin or SU: glucose under 90 means **15-30 g carbohydrate** first.",
          "**Delayed hypoglycaemia** up to 24 hours after long exercise.",
          "**Proliferative retinopathy**: no heavy lifting or Valsalva.",
          "Very-low-carb diet with **SGLT2 inhibitor** risks euglycaemic DKA.",
          "Weight loss on strict diet with rising glucose suggests **insulin deficiency**.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "**Dietitian** 3-4 visits in the first 3-6 months, then yearly.",
          "Set one or two **SMART goals** per visit with motivational interviewing.",
          "Involve the **family cook** in every diet discussion.",
          "Deprescribe SU and insulin at the start of a **remission diet**.",
          "Screen adults over 30 under **NP-NCD** at Ayushman Arogya Mandirs.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ICMR-NIN 2024**: My Plate for the Day; cereals at most 45% of energy.",
          "**ICMR-INDIAB 2023**: Indian macronutrient targets for remission.",
          "**WHO 2023**: avoid non-sugar sweeteners for weight control.",
          "**ADA 2026**: screen for food insecurity; individualise eating pattern.",
          "**DiRECT 5-year**: remission lasts only with weight maintenance.",
        ],
      },
    ],
    tables: [
      {
        heading: "Nutrition and exercise prescriptions",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Calorie prescription", "Ideal weight x 20-25 kcal/day orally as food", "Ongoing; review 3-monthly", "Hypoglycaemia if over-restricted on SU/insulin"],
          ["Total diet replacement", "825-853 kcal/day formula", "12-20 weeks then food reintroduction", "Stop SU/insulin at start; gallstones"],
          ["Aerobic exercise", "Brisk walk 30 min, 5 days a week", "Lifelong", "Check glucose on insulin/SU; foot care"],
          ["Resistance exercise", "8-10 exercises, 1-3 sets of 10-15", "2-3 days a week", "No heavy lifting in proliferative retinopathy"],
          ["Hypoglycaemia correction", "15-20 g glucose orally", "Recheck at 15 minutes", "Not chocolate; fat slows absorption"],
        ],
      },
      {
        heading: "GI and GL cut-offs",
        columns: ["Measure", "Low", "Medium", "High"],
        rows: [
          ["Glycaemic index", "55 or less", "56-69", "70 or more"],
          ["Glycaemic load", "10 or less", "11-19", "20 or more"],
          ["Indian examples", "Rajma, chana, milk, curd, apple", "Chapati, parboiled rice", "Polished rice, potato, maida bread"],
        ],
      },
      {
        heading: "ICMR-NIN My Plate for the Day (2,000 kcal)",
        columns: ["Food group", "Amount", "Diabetes tip"],
        rows: [
          ["Vegetables", "400 g", "Half the plate"],
          ["Fruit", "100 g", "Whole, not juice"],
          ["Cereals and millets", "250 g", "Whole grains and millets"],
          ["Pulses, eggs, flesh", "85 g", "Protein at every meal"],
          ["Nuts and seeds", "35 g", "Unsalted"],
          ["Milk and curd", "300 mL", "Toned milk"],
          ["Fats and oils", "27 g", "Mix oils; no vanaspati"],
        ],
      },
    ],
    remember: [
      "**MNT** lowers HbA1c 1-2% - as much as a drug.",
      "Plate: **half vegetables**, quarter protein, quarter carbohydrate.",
      "**GL = GI x carbohydrate / 100**; high is 20 or more.",
      "**150 minutes**, never 2 days off, plus resistance twice weekly.",
      "**FITT**: Frequency, Intensity, Time, Type.",
      "DiRECT: **15 kg lost, 86% remission**.",
      "Glucose under 90 before exercise: **15-30 g carbohydrate**.",
    ],
  },
};

revision["endocrine-glucocorticoid-therapy"] = {
  checked: "2026-10",
  updated: [
    "ESE/Endocrine Society 2024 GI-AI guideline: no HPA testing on supraphysiological doses; morning cortisol thresholds 150 and 300 nmol/L.",
    "ESE/ES 2024: glucocorticoid withdrawal syndrome recognised separately from adrenal insufficiency.",
    "ESE/ES 2024: switch long-acting dexamethasone to shorter-acting agents near physiological dose.",
    "ESE/ES 2024: stress dosing - hydrocortisone 100 mg IV then 200 mg/24 h for major stress; emergency cards for all at risk.",
    "ACR 2022 GIOP guideline: bone protection from prednisolone 2.5 mg/day for 3 months or more.",
    "GINA 2025: reduce cumulative oral corticosteroid burden in asthma.",
  ],
  master: {
    heading: "Master revision table - Glucocorticoid therapy",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Supraphysiological GC: above **prednisolone 5 mg / hydrocortisone 20 mg** daily; over 3-4 weeks suppresses HPA axis."],
      ["Equivalence", "Hydrocortisone 20 = prednisolone 5 = methylprednisolone 4 = **dexamethasone 0.75** mg."],
      ["Potency", "Glucocorticoid 1 : 4 : 5 : 25-30; mineralocorticoid 1 : 0.8 : 0.5 : 0."],
      ["Mechanism", "GR **transrepression** of NF-kappa-B (benefit); transactivation (metabolic harm)."],
      ["HPA suppression", "CRH/ACTH suppressed, **zona fasciculata atrophies**; aldosterone spared - no hyperkalaemia."],
      ["Burden", "AI after about **49% of oral** and 52% of intra-articular courses (meta-analysis)."],
      ["Side effects", "Hyperglycaemia, osteoporosis, AVN, myopathy, infection (TB, PJP, mucor), cataract, glaucoma, psychosis, growth."],
      ["Prevention", "Lowest dose, morning, steroid-sparing; calcium-D and bisphosphonate; TB screen and TPT; vaccines; PJP prophylaxis."],
      ["Taper", "Under 3 weeks no taper; 2.5 mg steps 10-20 mg; **1 mg steps below 10 mg**."],
      ["Morning cortisol", "At physiological dose: **over 300 nmol/L stop**; under 150 continue; 150-300 repeat or Synacthen."],
      ["Steroid cover", "Fever - double dose; vomiting - **100 mg IM**; major surgery - 100 mg IV then 200 mg/24 h."],
      ["Special groups", "Pregnancy prednisolone; rifampicin doubles dose; liver disease use prednisolone; GC before thyroxine."],
      ["Follow-up", "BP, weight, afternoon glucose each visit; HbA1c 3-6 monthly; DXA 1-3 yearly; eye yearly."],
      ["Latest updates", "ESE/ES 2024 GI-AI; ACR 2022 GIOP; GINA 2025 OCS reduction."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Tapering long-term prednisolone (ESE/ES 2024)",
      steps: [
        { label: "Course under 3 weeks?", detail: "Yes - stop without taper unless repeated courses", tone: "decision" },
        { label: "Taper to physiological dose by disease activity", detail: "2.5-5 mg steps above 10 mg; 1 mg steps below 10 mg" },
        { label: "At prednisolone 4-5 mg/day", detail: "Option: switch to hydrocortisone 15-20 mg/day" },
        { label: "8 am cortisol, dose withheld 24 h or more", tone: "decision" },
        { label: "Over 300 nmol/L - stop glucocorticoid", tone: "good" },
        { label: "150-300 - continue, repeat or Synacthen test" },
        { label: "Under 150 - continue replacement, retest 1-3 months", detail: "Stress dosing and emergency card", tone: "warn" },
      ],
    },
    {
      kind: "ladder",
      heading: "Steroid cover by stress level",
      steps: [
        { label: "Minor procedure under local anaesthesia", detail: "Usual dose only" },
        { label: "Fever over 38 C or illness", detail: "Double the usual oral dose until well" },
        { label: "Intermediate procedure or minor surgery under GA", detail: "Hydrocortisone 50-100 mg IV; double oral dose 24-48 h" },
        { label: "Vomiting or unable to take tablets", detail: "Hydrocortisone 100 mg IM and attend hospital", tone: "warn" },
        { label: "Major surgery, labour, trauma, ICU", detail: "100 mg IV at induction, then 200 mg/24 h", tone: "warn" },
        { label: "Adrenal crisis", detail: "100 mg IV stat, 200 mg/24 h, saline 1 L in first hour", tone: "warn" },
      ],
    },
    {
      kind: "compare",
      heading: "Symptoms during taper: what is it?",
      columns: ["Feature", "Adrenal insufficiency", "Withdrawal syndrome", "Disease flare"],
      rows: [
        ["Symptoms", "Fatigue, nausea, hypotension", "Myalgia, arthralgia, low mood", "Disease-specific signs"],
        ["Morning cortisol", "Low", "Adequate", "Variable"],
        ["Labs", "Low sodium, low glucose", "Normal", "Raised ESR/CRP"],
        ["Action", "Replacement and stress dosing", "Raise dose briefly, slow taper", "Raise dose, steroid-sparing agent"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "Physiological dose: **prednisolone 4-5 mg** or hydrocortisone 15-25 mg daily.",
          "Above this for **3-4 weeks** suppresses the HPA axis.",
          "AI follows about **half of long oral courses**; also intra-articular, inhaled, topical.",
          "Exogenous steroid is the **commonest cause** of Cushing syndrome.",
          "India: OTC dexamethasone, adulterated remedies and **fairness creams** cause iatrogenic Cushing.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**Equivalence**: hydrocortisone 20 = prednisolone 5 = methylprednisolone 4 = dexamethasone 0.75 mg.",
          "Half-life: **short** hydrocortisone, intermediate prednisolone, long dexamethasone.",
          "EULAR doses: **low 7.5 mg or less**, medium to 30, high to 100, pulse 250 or more.",
          "Dexamethasone has **no mineralocorticoid** action; hydrocortisone has full action.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "GR **transrepression** blocks NF-kappa-B and cytokines - the anti-inflammatory effect.",
          "**Transactivation** drives gluconeogenesis, muscle breakdown and fat redistribution.",
          "Bone: **osteoblast apoptosis**; fracture risk rises within 3-6 months.",
          "HPA: ACTH suppression causes **zona fasciculata atrophy**.",
          "Aldosterone axis is spared, so **no hyperkalaemia or pigmentation**.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "Baseline: **HbA1c**, lipids, potassium, chest X-ray, TB screen, hepatitis B, DXA.",
          "Check **afternoon glucose**; morning steroid raises evening values.",
          "Do not test HPA axis while on **supraphysiological doses**.",
          "8 am cortisol: **over 300 nmol/L recovered**; under 150 adrenal insufficiency.",
          "Prednisolone **cross-reacts** in cortisol immunoassays; withhold before testing.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "Lowest dose, **single morning dose**, shortest time, early steroid-sparing agent.",
          "Courses **under 3 weeks** need no taper.",
          "Calcium-D, DXA and **alendronate 70 mg weekly** if risk moderate or high.",
          "Live vaccines contraindicated at **20 mg or more for 14 days**.",
          "PJP prophylaxis: **co-trimoxazole** at 20 mg for 4 weeks plus another immunosuppressant.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "Taper **2.5 mg steps** between 10 and 20 mg; 1 mg steps below 10 mg.",
          "At physiological dose, **slow taper** or check 8 am cortisol.",
          "Switch **dexamethasone to prednisolone** or hydrocortisone near the end.",
          "Withdrawal syndrome: **raise dose briefly** and slow the taper.",
        ],
      },
      {
        title: "Inpatient / emergency care",
        points: [
          "Fever: **double the dose**; vomiting: hydrocortisone 100 mg IM.",
          "Major surgery: **100 mg IV at induction**, then 200 mg over 24 hours.",
          "Adrenal crisis: **100 mg IV stat**, saline 1 L in the first hour.",
          "Do not wait for **cortisol results** before treating crisis.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "Pregnancy: **prednisolone** preferred; dexamethasone and betamethasone cross the placenta.",
          "**Rifampicin** halves steroid levels; double the dose.",
          "Children: watch **growth velocity**; high-dose inhaled fluticasone can cause crisis.",
          "Start steroid **before thyroxine** if both deficiencies coexist.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Avascular necrosis**: new hip or groin pain on steroids.",
          "Infections masked: **TB, PJP, mucormycosis**, strongyloides hyperinfection.",
          "**Psychosis** above 40 mg/day; cataract and glaucoma long term.",
          "Collapse or vomiting after stopping steroids means **adrenal crisis**.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ESE/ES 2024**: morning cortisol thresholds, withdrawal syndrome, emergency cards.",
          "**ACR 2022**: bone protection from 2.5 mg for 3 months.",
          "**GINA 2025**: cut oral steroid burden in asthma.",
        ],
      },
    ],
    tables: [
      {
        heading: "Glucocorticoids",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Prednisolone", "5-60 mg orally once in the morning", "Taper if over 3 weeks", "All GC effects; double with rifampicin"],
          ["Hydrocortisone", "Replacement 15-25 mg/day; stress 100 mg IV then 200 mg/24 h", "Stress 24-72 h", "Fluid retention, hypokalaemia"],
          ["Methylprednisolone", "Pulse 500-1,000 mg IV daily", "3-5 days", "Hyperglycaemia, psychosis, arrhythmia"],
          ["Dexamethasone", "6-16 mg/day orally or IV", "Short courses", "Strong HPA suppression; crosses placenta"],
          ["Betamethasone", "12 mg IM, two doses 24 h apart", "Single course in preterm labour", "Maternal hyperglycaemia"],
        ],
      },
      {
        heading: "Equivalence and potency",
        columns: ["Drug", "Equivalent dose (mg)", "GC potency", "MC potency"],
        rows: [
          ["Hydrocortisone", "20", "1", "1"],
          ["Prednisolone", "5", "4", "0.8"],
          ["Methylprednisolone", "4", "5", "0.5"],
          ["Dexamethasone", "0.75", "25-30", "0"],
          ["Betamethasone", "0.6", "25-30", "0"],
        ],
      },
      {
        heading: "Morning cortisol during taper",
        columns: ["8 am cortisol", "Meaning", "Action"],
        rows: [
          ["Over 300 nmol/L", "Recovered", "Stop steroid"],
          ["150-300 nmol/L", "Partial recovery", "Continue taper, repeat or Synacthen"],
          ["Under 150 nmol/L", "Adrenal insufficiency", "Continue replacement, stress dosing"],
        ],
      },
    ],
    remember: [
      "**20-5-4-0.75**: hydrocortisone, prednisolone, methylprednisolone, dexamethasone.",
      "**Under 3 weeks** no taper needed.",
      "Morning cortisol **300 stop, 150 continue** (nmol/L).",
      "Sick day: **double for fever**, 100 mg IM for vomiting.",
      "Steroid AI: **no pigmentation, no hyperkalaemia**.",
      "**CUSHINGOID** mnemonic for side effects.",
      "**Rifampicin** doubles the steroid dose.",
    ],
  },
};

export default revision;
