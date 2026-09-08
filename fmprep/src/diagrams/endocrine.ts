/**
 * Diagrams for endocrine, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "endocrine-t2dm-diagnosis-oral-drugs": [
    {
      kind: "flow",
      heading: "Diagnosing type 2 diabetes",
      caption: "One abnormal test does not diagnose diabetes unless the patient is symptomatic.",
      steps: [
        {
          label: "Any one of the four criteria is met",
          detail: "FPG 126 mg/dL or more; 2-h 200 mg/dL or more after 75 g; HbA1c 6.5% or more; random 200 mg/dL or more",
        },
        {
          label: "Unequivocal hyperglycaemia?",
          detail: "Random 200 mg/dL or more with polyuria, polydipsia and weight loss",
          tone: "decision",
        },
        {
          label: "If symptomatic - diagnosis stands",
          detail: "No repeat test needed; start treatment",
        },
        {
          label: "If asymptomatic - repeat on a separate sample",
          detail: "Ideally the same test repeated; two different abnormal tests on one sample also confirm",
          tone: "warn",
        },
        {
          label: "FPG 100-125 mg/dL only",
          detail: "Label prediabetes; 75 g OGTT where impaired glucose tolerance is suspected. Rescreen annually",
        },
        {
          label: "Baseline work-up at diagnosis",
          detail: "HbA1c, lipids, creatinine with eGFR, UACR, ALT, TSH, ECG, dilated fundus, 10 g monofilament, BP, weight, waist",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Is it really type 2? Sorting the phenotype",
      caption: "Three adult non-type-2 patterns that are misdiagnosed as type 2 diabetes.",
      columns: ["Feature", "LADA", "Fibrocalculous pancreatic diabetes", "MODY (HNF1A)"],
      rows: [
        ["Body habitus", "Adult onset, lean or normal weight", "Lean young south Indian patient", "Young, normal weight"],
        [
          "The giveaway",
          "Fails oral agents within 6-12 months",
          "Epigastric pain and steatorrhoea for years, pancreatic calculi on plain X-ray",
          "Three-generation family history, normal pancreas",
        ],
        ["Ketosis", "Follows type 1 course as beta cells fail", "Resists ketosis despite very high glucose", "Mild non-ketotic hyperglycaemia"],
        ["Test that settles it", "GAD antibody positive, C-peptide preserved but falling", "Plain abdominal X-ray showing pancreatic calculi", "Family history; no calcification"],
        ["Treatment", "Early insulin; avoid sulfonylureas", "Insulin plus pancreatic enzyme replacement", "Mild hyperglycaemia, no insulin needed at onset"],
      ],
    },
    {
      kind: "branch",
      heading: "Choosing the drug after metformin",
      caption: "Metformin 500 mg OD after food up to 1 g BD for nearly everyone; the second agent is chosen by comorbidity.",
      root: "Not at target on metformin - what dominates?",
      arms: [
        {
          label: "Heart failure, ASCVD or CKD",
          tone: "good",
          steps: [
            "SGLT2 inhibitor - dapagliflozin 10 mg OD or empagliflozin 10-25 mg OD",
            "Benefit on heart-failure hospitalisation and eGFR decline is independent of glucose lowering",
            "Watch genital mycotic infection, volume depletion, euglycaemic DKA; hold in sepsis or fasting",
          ],
        },
        {
          label: "Obesity or established ASCVD",
          steps: [
            "GLP-1 agonist - dulaglutide 0.75-1.5 mg weekly SC",
            "Semaglutide 0.25 mg weekly titrated to 1 mg, or oral 3-14 mg daily",
            "Best weight loss and 1-1.5% HbA1c; cost limits public-sector use",
          ],
        },
        {
          label: "Cost decides, low hypoglycaemia risk",
          steps: [
            "Glimepiride 1-2 mg before breakfast, or gliclazide MR 30-60 mg OD",
            "Cheap and potent but weight gain, hypoglycaemia, loss of effect over years",
            "Avoid glibenclamide entirely in the elderly and in renal impairment",
          ],
        },
        {
          label: "Hypoglycaemia must be avoided",
          steps: [
            "Teneligliptin 20 mg OD is the cheapest gliptin in India",
            "Linagliptin 5 mg OD needs no renal dose change",
            "Only 0.5-0.8% and no cardiovascular benefit; never combine with a GLP-1 agonist",
          ],
        },
        {
          label: "HbA1c above 10% or catabolic",
          tone: "warn",
          steps: [
            "Glucose above 300 mg/dL, ketonuria or weight loss with osmotic symptoms",
            "Start insulin from the outset alongside metformin",
            "Step down to oral agents once glucotoxicity resolves",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Individualising the HbA1c target",
      caption: "The target is a decision about the patient, not a number copied from a guideline.",
      columns: ["Patient", "Target", "Why"],
      rows: [
        ["Newly diagnosed, under 50, no complications", "6.5% or lower", "Legacy effect; long horizon to accrue benefit"],
        ["Most adults with type 2 diabetes", "Below 7%", "Microvascular benefit proven; macrovascular benefit modest"],
        ["Established CVD, long duration, hypoglycaemia risk", "7.0-7.5%", "ACCORD showed harm from aggressive lowering in this group"],
        ["Frail elderly, living alone, cognitive impairment", "7.5-8.0%", "Hypoglycaemia causes more harm than hyperglycaemia"],
        ["Advanced CKD, dialysis, short life expectancy", "Around 8%, avoid symptoms", "HbA1c unreliable; aim for freedom from osmotic symptoms"],
      ],
    },
  ],

  "endocrine-insulin-initiation": [
    {
      kind: "flow",
      heading: "Starting and titrating basal insulin",
      caption: "Start at 10 units at bedtime and titrate by 2 units every 3 days against the fasting sugar.",
      steps: [
        {
          label: "Decide insulin is needed",
          detail: "HbA1c above 10%, glucose above 300 mg/dL, ketonuria or catabolic at diagnosis; or above target on two or three optimally dosed oral agents",
        },
        {
          label: "Start NPH 10 units at bedtime",
          detail: "Or 0.1-0.2 units/kg. Cheapest option and free in most NP-NCD clinics",
        },
        {
          label: "Halve the sulfonylurea",
          detail: "Stop it altogether when prandial insulin is added - failing to do so is the commonest iatrogenic hypoglycaemia",
          tone: "warn",
        },
        {
          label: "Titrate on the fasting value alone",
          detail: "The 3-0-3 rule: add 2 units every 3 days while fasting is above target. Target 80-130 mg/dL, relaxed to 100-140 mg/dL in the elderly or those living alone",
        },
        {
          label: "Any hypoglycaemia below 70 mg/dL",
          detail: "Reduce by 4 units or 10-20%; never titrate up through hypoglycaemia",
          tone: "warn",
        },
        {
          label: "HbA1c at 3 months",
          detail: "Fasting at target but HbA1c not, or dose above 0.5 units/kg or 40-60 units - stop increasing basal",
          tone: "decision",
        },
        {
          label: "Over-basalisation - go prandial",
          detail: "Add 4 units with the largest meal, or a GLP-1 agonist; never more basal",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "A high fasting glucose - which of the three causes?",
      caption: "Before increasing the evening insulin, ask for a 3 a.m. reading at least once.",
      columns: ["Feature", "Insufficient basal dose", "Dawn phenomenon", "Somogyi rebound"],
      rows: [
        ["3 a.m. glucose", "High or normal", "Normal", "Low"],
        ["Nocturnal symptoms", "None", "None", "Sweating, nightmares, morning headache"],
        [
          "Mechanism",
          "Simply not enough basal insulin",
          "Early-morning rise under growth hormone and cortisol",
          "Counter-regulatory surge after nocturnal hypoglycaemia",
        ],
        [
          "What to do",
          "Increase the bedtime dose by 2 units every 3 days",
          "Move the basal to bedtime rather than dinner, or switch NPH to a long-acting analogue",
          "Reduce the evening dose or add a bedtime snack - increasing it makes things worse",
        ],
        ["Frequency", "By far the commonest", "Less common", "The trap in the exam question"],
      ],
    },
    {
      kind: "compare",
      heading: "Insulin preparations available in India",
      caption: "Regular human insulin goes in 30 minutes before food; rapid analogues go in at the plate.",
      columns: ["Preparation", "Onset", "Peak", "Duration", "How it is used"],
      rows: [
        ["Regular (soluble) human insulin", "30-60 min", "2-4 h", "6-8 h", "Give 30 minutes before the meal; used in DKA infusion and in hospital"],
        ["Aspart, lispro, glulisine", "10-15 min", "1-2 h", "3-5 h", "Give 0-10 minutes before the meal; less late hypoglycaemia"],
        [
          "Premix 30/70 human insulin",
          "30-60 min",
          "Dual (2-4 h and 6-10 h)",
          "10-16 h",
          "Twice daily before breakfast and dinner; needs fixed meals",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Escalating the insulin regimen",
      caption: "Each rung has its own starting dose and its own value to titrate against.",
      steps: [
        {
          label: "Basal at bedtime",
          detail: "NPH or glargine 10 units or 0.1-0.2 units/kg; titrate against the fasting capillary glucose by 2 units every 3 days",
        },
        {
          label: "Premix 30/70 twice daily",
          detail: "0.3 units/kg split two-thirds morning and one-third evening; morning dose against pre-dinner, evening dose against fasting, 2 units every 3 days",
        },
        {
          label: "Basal plus",
          detail: "Basal as above plus 4 units with the largest meal; titrate 1-2 units every 3 days against the 2-hour postprandial of that meal",
        },
        {
          label: "Basal bolus",
          detail: "0.4-0.5 units/kg/day, 50% basal and 50% split across meals; adjust by 10-20% against pre-meal and bedtime values",
        },
      ],
    },
  ],

  "endocrine-diabetes-complication-screening": [
    {
      kind: "flow",
      heading: "The annual complication screening package",
      caption: "In type 2 diabetes screening starts on the day of diagnosis; in type 1 it starts 5 years later.",
      steps: [
        {
          label: "Set the start date",
          detail: "Type 2 from diagnosis - 15-20% already have retinopathy. Type 1 from 5 years, and from puberty in children",
          tone: "decision",
        },
        {
          label: "Eye - dilated fundus examination",
          detail: "Or fundus photography with tele-reporting under NPCBVI. Any retinopathy goes to ophthalmology",
        },
        {
          label: "Kidney - UACR plus creatinine and eGFR",
          detail: "Early-morning spot sample; 30-299 mg/g moderately increased, 300 mg/g or more severely increased",
        },
        {
          label: "Foot - 10 g monofilament and pulses",
          detail: "Four plantar sites per foot: hallux and 1st, 3rd and 5th metatarsal heads; plus 128 Hz tuning fork, ankle jerks, pinprick",
        },
        {
          label: "Nerve - and exclude the mimics",
          detail: "Check vitamin B12 after 3-4 years of metformin; methylcobalamin 1500 mcg daily corrects it",
          tone: "warn",
        },
        {
          label: "Vessels - lipids, blood pressure, ECG",
          detail: "Statin for every diabetic over 40 or with a risk factor: atorvastatin 10-20 mg or rosuvastatin 10 mg at night; BP below 130/80 mmHg",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Grading diabetic retinopathy and what it triggers",
      caption: "Sight-threatening disease is asymptomatic until the macula or vitreous is involved.",
      steps: [
        { label: "No retinopathy", detail: "Normal fundus - rescreen in 1 year (2 years if well controlled, per some programmes)", tone: "good" },
        { label: "Mild NPDR", detail: "Microaneurysms only - ophthalmology review in 6-12 months" },
        { label: "Moderate NPDR", detail: "More than microaneurysms but less than severe - ophthalmology review in 3-6 months" },
        {
          label: "Severe NPDR",
          detail: "4-2-1 rule: haemorrhages in 4 quadrants, or venous beading in 2, or IRMA in 1. Refer within weeks; consider pan-retinal photocoagulation",
          tone: "warn",
        },
        {
          label: "Proliferative retinopathy",
          detail: "Neovascularisation, vitreous or preretinal haemorrhage - urgent referral for PRP, anti-VEGF or vitrectomy",
          tone: "warn",
        },
        {
          label: "Diabetic macular oedema",
          detail: "Thickening or exudate within 1 disc diameter of the fovea - urgent referral for OCT and intravitreal anti-VEGF; can occur at any stage",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Wagner grading of the diabetic foot ulcer",
      caption: "The grade dictates whether the foot is managed in the clinic or admitted.",
      steps: [
        { label: "Grade 0 - intact skin, at-risk foot", detail: "Deformity or callus. Education, protective footwear, callus removal" },
        { label: "Grade 1 - superficial ulcer", detail: "Full-thickness skin only. Offloading, debridement, moist dressing" },
        {
          label: "Grade 2 - deep ulcer, no osteomyelitis",
          detail: "To tendon, capsule or bone. As above plus antibiotics if infected, and imaging",
        },
        {
          label: "Grade 3 - abscess or osteomyelitis",
          detail: "Admission, surgical drainage, prolonged antibiotics; osteomyelitis needs 4-6 weeks with a surgical opinion",
          tone: "warn",
        },
        { label: "Grade 4 - localised gangrene", detail: "Forefoot or heel. Vascular assessment, limited amputation", tone: "warn" },
        { label: "Grade 5 - gangrene of the whole foot", detail: "Major amputation", tone: "warn" },
      ],
    },
    {
      kind: "flow",
      heading: "An abnormal urine albumin-creatinine ratio",
      caption: "Never diagnose diabetic nephropathy on a single sample.",
      steps: [
        {
          label: "Exclude the transient causes",
          detail: "Fever, exercise, urinary infection, menstruation, heart failure and marked hyperglycaemia all raise albumin excretion",
          tone: "warn",
        },
        { label: "Confirm on two of three samples", detail: "Over 3-6 months, after the confounder has resolved" },
        {
          label: "Does the picture fit diabetic kidney disease?",
          detail: "Heavy proteinuria without retinopathy, red cell casts, rapid eGFR fall, or proteinuria within 5 years of type 1 diagnosis - refer to nephrology for biopsy",
          tone: "decision",
        },
        {
          label: "ACE inhibitor or ARB, maximum tolerated",
          detail: "Ramipril 2.5-10 mg OD or telmisartan 40-80 mg OD; never combine the two. Target BP below 130/80 mmHg",
        },
        {
          label: "Recheck creatinine and potassium at 1-2 weeks",
          detail: "A creatinine rise up to 30% is acceptable; more than 30%, or potassium above 5.5 mmol/L, means stop and investigate",
          tone: "warn",
        },
        {
          label: "Add SGLT2 inhibitor, then finerenone",
          detail: "Dapagliflozin or empagliflozin 10 mg OD down to an eGFR of 20-25; finerenone 10-20 mg OD on maximal RAS blockade, monitoring potassium",
          tone: "good",
        },
      ],
    },
  ],

  "endocrine-hypoglycaemia": [
    {
      kind: "ladder",
      heading: "Severity levels and immediate action",
      caption: "Level 3 is defined by needing another person's help, not by a number.",
      steps: [
        {
          label: "Level 1 - alert value",
          detail: "Below 70 mg/dL and 54 mg/dL or above; may be asymptomatic. 15 g oral carbohydrate, recheck in 15 minutes, review the regimen",
        },
        {
          label: "Level 2 - clinically significant",
          detail: "Below 54 mg/dL; neuroglycopenic symptoms likely. 15-20 g oral carbohydrate, recheck, then a snack or meal; reduce the offending drug",
          tone: "warn",
        },
        {
          label: "Level 3 - severe",
          detail: "Any value, needing another person's help - confusion, seizure or coma. IV 25% dextrose 100 mL or IM glucagon 1 mg; admit if sulfonylurea or long-acting insulin",
          tone: "warn",
        },
      ],
    },
    {
      kind: "cycle",
      heading: "The rule of 15 in the conscious patient",
      caption: "Repeat the loop until the glucose is above 70 mg/dL, then eat a proper meal.",
      steps: [
        {
          label: "Give 15-20 g of fast carbohydrate",
          detail: "3-4 teaspoons of glucose powder or sugar in water, 3-4 glucose tablets, 150 mL juice or a regular soft drink, or 1 tablespoon of honey",
        },
        { label: "Wait 15 minutes", detail: "Chocolate, milk and biscuits are too slow because of their fat content", tone: "warn" },
        { label: "Recheck the capillary glucose", detail: "Still below 70 mg/dL - repeat the 15 g", tone: "decision" },
        {
          label: "Above 70 mg/dL - give a meal",
          detail: "Or a complex-carbohydrate snack, then review the regimen that caused it",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "The unconscious or unswallowing patient",
      caption: "In any unconscious or fitting patient, check a capillary glucose before anything else.",
      steps: [
        {
          label: "Thiamine 100 mg IV first if malnourished",
          detail: "Or alcohol dependent - a glucose load consumes remaining thiamine and precipitates Wernicke encephalopathy",
          tone: "warn",
        },
        {
          label: "25% dextrose 100 mL IV as a slow bolus",
          detail: "25 g; the standard Indian ampoule-based treatment. 50% dextrose 50 mL is an alternative but is sclerosant and needs a large vein",
        },
        {
          label: "No IV access - glucagon 1 mg IM or SC",
          detail: "0.5 mg if under 25 kg; works in 10-15 minutes. Ineffective in alcohol-related and glycogen-depleted patients, and causes vomiting",
        },
        { label: "Recheck at 10-15 minutes", detail: "Repeat the bolus if still low", tone: "decision" },
        {
          label: "Long-acting cause - 10% dextrose infusion",
          detail: "Sulfonylurea, long-acting insulin or renal failure; titrate to keep glucose 100-150 mg/dL",
        },
        {
          label: "Sulfonylurea - admit for at least 24 hours",
          detail: "It recurs for 24-72 hours. Octreotide 50-100 mcg SC 8-12 hourly suppresses the drug-driven insulin release and reduces repeat boluses",
          tone: "warn",
        },
        {
          label: "Then relax the target and change the drug",
          detail: "HbA1c 7.5-8%; metformin if eGFR allows, linagliptin 5 mg OD, or an SGLT2 inhibitor",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "The critical sample in hypoglycaemia without diabetes",
      caption: "Draw the sample during the episode; a supervised 72-hour fast is the definitive test.",
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

  "endocrine-hypothyroidism": [
    {
      kind: "compare",
      heading: "Interpreting thyroid function tests",
      caption: "Two numbers, six patterns - and the action each one demands.",
      columns: ["TSH", "Free T4", "Interpretation", "Action"],
      rows: [
        ["High", "Low", "Overt primary hypothyroidism", "Levothyroxine 1.6 mcg/kg/day; low dose if elderly or cardiac"],
        [
          "High",
          "Normal",
          "Subclinical hypothyroidism",
          "Repeat in 6-12 weeks with anti-TPO; treat if TSH 10 or more, or if pregnant, symptomatic or antibody positive",
        ],
        ["Low", "High", "Thyrotoxicosis", "Determine the cause: Graves, toxic nodule or thyroiditis"],
        ["Low", "Normal", "Subclinical hyperthyroidism", "Repeat; treat if TSH below 0.1 with AF, osteoporosis or age over 65"],
        [
          "Low or normal",
          "Low",
          "Central hypothyroidism or non-thyroidal illness",
          "Assess the pituitary; do not test in acute illness; check cortisol before thyroxine",
        ],
        [
          "High",
          "High",
          "Assay interference, TSH-oma, hormone resistance, or a recent dose taken before the test",
          "Repeat in a different assay; refer to endocrinology",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Subclinical hypothyroidism - treat or monitor?",
      caption: "Confirm first: up to a third of raised TSH values normalise spontaneously.",
      root: "Raised TSH with a normal free T4, repeated after 6-12 weeks with anti-TPO",
      arms: [
        {
          label: "TSH 10 mIU/L or more",
          tone: "warn",
          steps: ["Treat", "Levothyroxine 25-50 mcg daily and titrate", "Recheck TSH at 6-8 weeks; target 0.5-2.5 mIU/L"],
        },
        {
          label: "TSH 4.5-10 with an indication",
          steps: [
            "Pregnancy, planning pregnancy or infertility",
            "Positive anti-TPO antibodies, or a goitre",
            "Convincing symptoms, dyslipidaemia, or age under 65 with cardiovascular risk",
            "Start levothyroxine 25-50 mcg daily",
          ],
        },
        {
          label: "TSH 4.5-10 with no indication",
          tone: "good",
          steps: [
            "Monitor TSH and free T4 every 6-12 months",
            "Treat if TSH rises above 10 mIU/L or free T4 falls",
            "In asymptomatic antibody-negative older adults TRUST found no benefit from levothyroxine",
            "Treating risks iatrogenic thyrotoxicosis, atrial fibrillation and fracture",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Myxoedema coma",
      caption: "Mortality 20-40%; typically an elderly woman in winter who stopped her tablets.",
      steps: [
        {
          label: "Recognise it",
          detail: "Hypothermia often below 35 degrees C, bradycardia, hypotension, drowsiness, hyponatraemia; precipitated by infection, cold, sedatives, surgery or stopping levothyroxine",
        },
        { label: "Admit to intensive care", detail: "Ventilatory support and cardiac monitoring" },
        {
          label: "Hydrocortisone 100 mg IV 8-hourly FIRST",
          detail: "Before or with thyroid hormone - coexisting adrenal insufficiency is common and thyroxine raises cortisol clearance, so T4 alone can precipitate a crisis",
          tone: "warn",
        },
        {
          label: "Levothyroxine 200-400 mcg IV load",
          detail: "Then 50-100 mcg IV daily; crushed tablets by nasogastric tube where IV is unavailable. Liothyronine may be added in specialist settings",
        },
        {
          label: "Passive rewarming and cautious fluids",
          detail: "Aggressive active rewarming causes vasodilatation and cardiovascular collapse; the hyponatraemia is dilutional and corrects with hormone replacement",
          tone: "warn",
        },
        { label: "Treat the precipitating infection", detail: "Search for it actively - it is usually what tipped her over", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "Levothyroxine dosing situations",
      caption: "Take it on an empty stomach, and separate by 4 hours from calcium, iron, antacids, PPIs and soya.",
      columns: ["Situation", "Dose", "Monitoring"],
      rows: [
        ["Healthy adult, overt hypothyroidism", "1.6 mcg/kg/day, about 100 mcg for 60 kg", "TSH at 6-8 weeks, then 6-12 monthly"],
        [
          "Age over 65 or coronary artery disease",
          "12.5-25 mcg daily, increase by 12.5-25 mcg every 4-6 weeks",
          "TSH at 6-8 weeks after each change; watch for angina",
        ],
        ["Subclinical hypothyroidism", "25-50 mcg daily", "TSH at 6-8 weeks; target 0.5-2.5 mIU/L"],
        [
          "Pregnancy, known hypothyroid",
          "Increase by 25-30%, or take 2 extra tablets a week",
          "TSH every 4 weeks to mid-gestation, then once in the third trimester",
        ],
        ["Congenital hypothyroidism, newborn", "10-15 mcg/kg/day started within 2 weeks of birth", "TSH and free T4 at 2 and 4 weeks, then per protocol"],
        ["Myxoedema coma", "200-400 mcg IV load then 50-100 mcg IV daily, with hydrocortisone 100 mg IV 8-hourly", "ICU monitoring"],
      ],
    },
  ],

  "endocrine-diabetic-emergencies": [
    {
      kind: "flow",
      heading: "Hour-by-hour management of DKA in an adult",
      caption: "Fluids first, potassium before insulin, and dextrose when the glucose falls - not the insulin stopped.",
      steps: [
        {
          label: "Hour 0-1: 0.9% saline 1 litre over 1 hour",
          detail: "15-20 mL/kg/hour; repeat in the first 1-2 hours if shocked. The adult deficit is 5-7 litres in DKA and 8-10 in HHS",
        },
        {
          label: "Check potassium before any insulin",
          detail: "Below 3.3 mmol/L - replace at 20-40 mmol/hour and delay insulin; insulin now can cause fatal arrhythmia",
          tone: "warn",
        },
        {
          label: "Insulin 0.1 units/kg bolus, then infusion",
          detail: "Regular insulin 0.1 units/kg IV bolus then 0.1 units/kg/hour, or 0.14 units/kg/hour with no bolus. Aim for a fall of 50-75 mg/dL per hour; double the rate if it is under 10% in the first hour",
        },
        {
          label: "Hour 1-6: fluid by corrected sodium",
          detail: "0.45% saline 250-500 mL/hour if corrected sodium is normal or high; 0.9% if it is low. Add 20-30 mmol KCl per litre to keep potassium 4-5 mmol/L",
        },
        {
          label: "At 200-250 mg/dL, add 5% dextrose",
          detail: "With 0.45% saline; reduce the infusion to 0.02-0.05 units/kg/hour and do not stop it. Track the anion gap, not the glucose",
          tone: "warn",
        },
        {
          label: "Bicarbonate only if pH is below 6.9",
          detail: "100 mmol in 400 mL water with 20 mmol KCl over 2 hours; otherwise it worsens intracellular acidosis, hypokalaemia and cerebral oedema",
        },
        {
          label: "Monitor and hunt the precipitant",
          detail: "Glucose hourly, electrolytes and venous gas every 2-4 hours, urine output, conscious level, cardiac rhythm; cultures, chest X-ray, ECG",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Potassium decides when insulin starts",
      caption: "Total body potassium is always depleted even when the serum value looks normal or high.",
      root: "Serum potassium before insulin",
      arms: [
        {
          label: "Below 3.3 mmol/L",
          tone: "warn",
          steps: ["Hold the insulin", "Replace at 20-40 mmol/hour", "Start insulin only once potassium is above 3.3 mmol/L"],
        },
        {
          label: "3.3-5.2 mmol/L",
          tone: "good",
          steps: ["Start insulin", "Add 20-30 mmol of potassium chloride to each litre of fluid", "Keep potassium at 4-5 mmol/L"],
        },
        {
          label: "Above 5.2 mmol/L",
          steps: ["Start insulin", "Withhold potassium", "Recheck in 2 hours"],
        },
      ],
    },
    {
      kind: "compare",
      heading: "DKA versus HHS at a glance",
      caption: "Effective osmolality is 2 x sodium plus glucose divided by 18 - urea is excluded.",
      columns: ["Feature", "DKA", "HHS"],
      rows: [
        ["Onset", "Hours to 1-2 days", "Days to weeks"],
        ["Glucose", "Usually above 250 mg/dL, may be normal in euglycaemic DKA", "Usually above 600 mg/dL"],
        ["Ketones", "Strongly positive; beta-hydroxybutyrate 3.0 mmol/L or more", "Absent or trace"],
        ["pH and bicarbonate", "pH below 7.30, bicarbonate below 18 mmol/L", "pH above 7.30, bicarbonate above 18 mmol/L"],
        ["Osmolality", "Variable", "Effective osmolality above 320 mOsm/kg"],
        ["Fluid deficit", "5-7 litres", "8-10 litres"],
        ["Dextrose added at", "Glucose 200-250 mg/dL", "Glucose 250-300 mg/dL"],
        ["Mortality", "1-5%", "5-20%"],
      ],
    },
    {
      kind: "flow",
      heading: "Resolution and the transition off the drip",
      caption: "Stopping the infusion without an overlap is the commonest cause of rebound ketoacidosis on the ward.",
      steps: [
        {
          label: "Confirm resolution of DKA",
          detail: "Glucose below 200 mg/dL plus two of: bicarbonate 15 mmol/L or more, venous pH above 7.30, anion gap 12 mmol/L or less",
          tone: "decision",
        },
        { label: "For HHS instead", detail: "Normal osmolality and restored mental status" },
        {
          label: "Give subcutaneous basal insulin",
          detail: "The patient's usual dose, or basal bolus at 0.5-0.8 units/kg/day once eating",
        },
        {
          label: "Overlap the infusion by 1-2 hours",
          detail: "Only then stop the drip; in a known type 2 patient oral agents may resume once the acute illness settles",
          tone: "warn",
        },
        {
          label: "Watch for cerebral oedema in the young",
          detail: "4-12 hours in, with headache, falling conscious level, bradycardia and rising blood pressure - mannitol 0.5-1 g/kg IV or 3% saline, and slow the fluids",
          tone: "warn",
        },
        {
          label: "Name the precipitant before discharge",
          detail: "Infection, missed insulin, SGLT2 inhibitor with surgery or fasting; look for a black nasal eschar of mucormycosis",
          tone: "good",
        },
      ],
    },
  ],

  "endocrine-hyperthyroidism-nodule": [
    {
      kind: "compare",
      heading: "Causes of thyrotoxicosis and how to tell them apart",
      caption: "The uptake scan splits overproduction from release of stored hormone.",
      columns: ["Cause", "Clinical clue", "Uptake scan", "First-line treatment"],
      rows: [
        [
          "Graves disease",
          "Young woman, diffuse goitre with bruit, orbitopathy, TRAb positive",
          "Diffusely increased",
          "Carbimazole plus propranolol for 12-18 months",
        ],
        ["Toxic multinodular goitre", "Older patient, long-standing lumpy goitre, no eye signs", "Patchy, multiple hot areas", "Radioiodine or surgery; drugs never cure it"],
        ["Toxic adenoma", "Single palpable nodule, rest of gland impalpable", "Single hot nodule, rest suppressed", "Radioiodine or lobectomy"],
        [
          "Subacute (de Quervain) thyroiditis",
          "Painful tender goitre after a viral illness, very high ESR",
          "Very low or absent",
          "NSAIDs, prednisolone if severe, propranolol; no thionamide",
        ],
        ["Postpartum or silent thyroiditis", "2-6 months postpartum, painless, anti-TPO positive", "Low", "Propranolol only; watch for later hypothyroidism"],
        ["Factitious (exogenous thyroxine)", "No goitre, weight-loss clinic history, low thyroglobulin", "Low", "Stop the thyroxine and counsel"],
        [
          "Amiodarone-induced type 1 or type 2",
          "Nodular gland with increased Doppler flow, or normal gland with no flow",
          "Low or normal in both",
          "Carbimazole with perchlorate, or prednisolone 40 mg daily",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Thyroid storm - the order the drugs go in",
      caption: "Mortality 10-30% even when treated. Iodine given first fuels hormone synthesis.",
      steps: [
        {
          label: "Recognise it",
          detail: "Fever above 38.5 C, tachycardia out of proportion, agitation or coma, vomiting, diarrhoea, cardiac failure after infection, surgery, delivery, DKA, contrast or drug withdrawal",
          tone: "warn",
        },
        {
          label: "1. Propylthiouracil 500-1000 mg loading",
          detail: "Then 250 mg 4-hourly orally or by nasogastric tube; it also blocks peripheral T4 to T3 conversion. Carbimazole 20 mg 6-hourly if PTU is unavailable",
        },
        {
          label: "2. Lugol iodine at least 1 hour later",
          detail: "5-10 drops 6-hourly; given before the thionamide it supplies substrate for new hormone and worsens the storm",
          tone: "warn",
        },
        {
          label: "3. Propranolol 60-80 mg 4-hourly",
          detail: "Or 0.5-1 mg IV slowly with cardiac monitoring; esmolol infusion where titratability is needed in heart failure",
        },
        {
          label: "4. Hydrocortisone 100 mg IV 8-hourly",
          detail: "Blocks T4 to T3 conversion and covers the relative adrenal insufficiency of storm",
        },
        {
          label: "Cool, rehydrate and treat the precipitant",
          detail: "Never give aspirin - it displaces thyroxine from binding globulin and raises free hormone",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Working up a thyroid nodule",
      caption: "Only 5-10% of nodules are malignant; the task is to select the few that need cytology.",
      steps: [
        { label: "Send a TSH first", detail: "It decides whether this is a functional or a structural problem", tone: "decision" },
        {
          label: "TSH suppressed - uptake scan",
          detail: "A hot autonomously functioning nodule is a toxic adenoma; malignancy in a hot nodule is very rare, so cytology adds nothing",
        },
        {
          label: "Hot nodule - definitive treatment",
          detail: "Radioiodine or lobectomy after control with carbimazole and a beta-blocker",
          tone: "good",
        },
        {
          label: "TSH normal or raised - ultrasound",
          detail: "Look for suspicious features, abnormal nodes and extrathyroidal extension",
        },
        {
          label: "Ultrasound-guided FNAC",
          detail: "Nodules 1 cm or more with suspicious features, 1.5-2 cm for intermediate patterns, any size with abnormal nodes; 23-25 G needle at the bedside",
        },
        {
          label: "Report by Bethesda category",
          detail: "A rapidly enlarging hard mass with stridor in an elderly patient is anaplastic carcinoma - do not wait for cytology",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Bethesda system for reporting thyroid cytopathology",
      caption: "Each category carries its own malignancy risk and its own next step.",
      steps: [
        { label: "I - non-diagnostic or unsatisfactory", detail: "5-10% malignancy risk. Repeat the aspiration under ultrasound guidance" },
        { label: "II - benign", detail: "Colloid nodule or thyroiditis; 0-3% risk. Clinical and ultrasound follow-up only", tone: "good" },
        { label: "III - atypia of undetermined significance", detail: "10-30% risk. Repeat FNAC, molecular testing or diagnostic lobectomy" },
        {
          label: "IV - follicular neoplasm",
          detail: "25-40% risk. Diagnostic hemithyroidectomy - cytology cannot show capsular or vascular invasion",
          tone: "warn",
        },
        { label: "V - suspicious for malignancy", detail: "50-75% risk. Total thyroidectomy, or lobectomy with frozen section", tone: "warn" },
        { label: "VI - malignant", detail: "97-99% risk. Total thyroidectomy with node dissection as indicated", tone: "warn" },
      ],
    },
  ],

  "endocrine-obesity-metabolic-syndrome": [
    {
      kind: "compare",
      heading: "Asian-Indian versus international cut-offs",
      caption: "Indians carry more body fat at any given BMI, so the thresholds are lowered rather than the advice changed.",
      columns: ["Measure", "Asian-Indian", "International"],
      rows: [
        ["Normal BMI", "18.0-22.9 kg/m2", "18.5-24.9 kg/m2"],
        ["Overweight BMI", "23.0-24.9 kg/m2", "25.0-29.9 kg/m2"],
        ["Obesity BMI", "25.0 kg/m2 or more", "30.0 kg/m2 or more"],
        ["Waist circumference", "90 cm men, 80 cm women", "Higher thresholds used for European populations"],
        ["Bariatric surgery with comorbidity", "BMI 32.5 kg/m2 or more", "About five units higher"],
        ["Bariatric surgery without comorbidity", "BMI 37.5 kg/m2 or more", "About five units higher"],
      ],
    },
    {
      kind: "branch",
      heading: "Defining the metabolic syndrome",
      caption: "Modified NCEP ATP III with Asian-Indian waist cut-offs: any three of the five.",
      root: "Any 3 of these 5 makes the diagnosis",
      arms: [
        { label: "Abdominal obesity", steps: ["Waist 90 cm or more in men", "Waist 80 cm or more in women"] },
        { label: "Raised triglyceride", steps: ["150 mg/dL or more", "Or on specific treatment"] },
        { label: "Low HDL cholesterol", steps: ["Below 40 mg/dL in men", "Below 50 mg/dL in women"] },
        { label: "Raised blood pressure", steps: ["130/85 mmHg or more", "Or on antihypertensive treatment"] },
        { label: "Raised fasting glucose", steps: ["100 mg/dL or more", "Or previously diagnosed diabetes"] },
      ],
    },
    {
      kind: "ladder",
      heading: "Escalating treatment of obesity",
      caption: "Nothing on the upper rungs replaces the lifestyle prescription; it continues alongside.",
      steps: [
        {
          label: "Lifestyle for everyone",
          detail: "5-10% loss over 6 months at 0.5-1 kg a week on a 500-750 kcal deficit; millets and whole grains for polished rice and maida; protein 0.8-1.2 g/kg",
        },
        {
          label: "Activity and sitting time",
          detail: "150-300 minutes a week of moderate aerobic activity with resistance training twice weekly; stand or walk 5 minutes every hour",
        },
        {
          label: "Drugs: BMI 27 with comorbidity, 30 without",
          detail: "Asian-Indian criteria, after 3-6 months of adequate lifestyle change and always alongside it, never instead",
          tone: "decision",
        },
        {
          label: "Orlistat 120 mg three times daily with meals",
          detail: "3-5% loss; oily stools and faecal urgency, and needs fat-soluble vitamins at a different time of day",
        },
        {
          label: "GLP-1 agonist or tirzepatide",
          detail: "Liraglutide 3 mg daily 5-8%; semaglutide 2.4 mg weekly about 15%; tirzepatide 5-15 mg weekly 15-20%. Cost restricts all of them and weight returns on stopping",
        },
        {
          label: "Bariatric surgery",
          detail: "BMI 32.5 or more with a comorbidity, or 37.5 or more without, after documented failure of supervised lifestyle and drug treatment",
          tone: "warn",
        },
        {
          label: "Lifelong supplementation and follow-up",
          detail: "Multivitamin, calcium citrate 1200-1500 mg daily, vitamin D, iron, B12, thiamine and folate; defer pregnancy 12-18 months",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Weight-lowering drugs: dose, expected loss and limits",
      caption: "Metformin is not an obesity drug - it earns its place only in prediabetes, PCOS or antipsychotic weight gain.",
      columns: ["Drug", "Dose", "Expected loss", "Limits"],
      rows: [
        ["Orlistat", "120 mg three times daily with meals", "3-5% of body weight", "Oily stools and faecal urgency; needs fat-soluble vitamins"],
        ["Liraglutide", "0.6 mg daily SC titrated weekly to 3 mg", "5-8%", "Daily injection, nausea, cost"],
        ["Semaglutide", "0.25 mg weekly SC titrated to 2.4 mg", "About 15%", "Cost; regain on stopping; avoid with MEN2"],
        ["Tirzepatide", "2.5 mg weekly SC titrated to 5-15 mg", "15-20%", "Highest cost, limited availability"],
        ["Metformin", "500 mg twice daily to 1 g twice daily", "1-3 kg only", "Not licensed for obesity; useful in PCOS and prediabetes"],
      ],
    },
  ],

  "endocrine-vitamin-d-calcium": [
    {
      kind: "compare",
      heading: "Biochemical patterns in metabolic bone disease",
      caption: "Four numbers separate the conditions that all present as bone pain.",
      columns: ["Condition", "Calcium", "Phosphate", "Alkaline phosphatase", "Parathyroid hormone"],
      rows: [
        ["Vitamin D deficiency or osteomalacia", "Low or low-normal", "Low", "High", "High (secondary)"],
        ["Primary hyperparathyroidism", "High", "Low", "Normal or high", "High or inappropriately normal"],
        ["Hypoparathyroidism", "Low", "High", "Normal", "Low or undetectable"],
        ["CKD mineral bone disorder", "Low or normal", "High", "High", "High (secondary or tertiary)"],
        ["Hypercalcaemia of malignancy", "High", "Variable", "High if bone metastases", "Suppressed"],
        ["Osteoporosis (uncomplicated)", "Normal", "Normal", "Normal", "Normal"],
      ],
    },
    {
      kind: "flow",
      heading: "Testing and treating vitamin D deficiency",
      caption: "Measure 25-hydroxyvitamin D, not the 1,25-dihydroxy form, which is often normal or high in deficiency.",
      steps: [
        {
          label: "Serum 25-hydroxyvitamin D",
          detail: "Below 20 ng/mL is deficiency, 20-29 ng/mL insufficiency. It has a 2-3 week half-life and reflects stores",
          tone: "decision",
        },
        {
          label: "Cholecalciferol 60,000 IU weekly for 8 weeks",
          detail: "About 480,000 IU in total, taken with a fatty meal because absorption is fat dependent. Children: 60,000 IU weekly for 6 weeks or 2000 IU daily",
        },
        {
          label: "Give calcium alongside, always",
          detail: "Elemental calcium 500 mg twice daily. Indian intake averages 300-500 mg a day against an ICMR requirement of 1000 mg, so vitamin D alone often fails",
          tone: "warn",
        },
        {
          label: "Maintenance",
          detail: "60,000 IU monthly or 1000-2000 IU daily; 400 IU daily for every infant from birth and 600 IU for children and adolescents",
        },
        {
          label: "Do not use repeated mega-dose injections",
          detail: "Unsupervised 6 lakh IU injections cause toxicity with hypercalcaemia, nephrocalcinosis and renal failure. Reserve calcitriol for CKD, hypoparathyroidism and vitamin D-dependent rickets",
          tone: "warn",
        },
        {
          label: "Recheck at 3 months, not earlier",
          detail: "25-hydroxyvitamin D, calcium and alkaline phosphatase; a falling alkaline phosphatase confirms healing. Sun 15-30 minutes between 10 am and 3 pm",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Acute symptomatic hypocalcaemia",
      caption: "New tingling in the first 48 hours after thyroidectomy is post-surgical hypoparathyroidism until proved otherwise.",
      steps: [
        {
          label: "Correct the calcium for albumin",
          detail: "Add 0.8 mg/dL for every 1 g/dL that albumin falls below 4 g/dL, or you chase a hypocalcaemia that does not exist",
        },
        {
          label: "Confirm at the bedside",
          detail: "Trousseau sign - carpal spasm within 3 minutes of cuff inflation - is specific; Chvostek sign occurs in 10-25% of normal people",
        },
        {
          label: "Calcium gluconate 10% 10 mL IV over 10 min",
          detail: "About 90 mg elemental calcium, diluted in 50-100 mL of 5% dextrose with cardiac monitoring; repeat until symptoms settle",
        },
        {
          label: "Never bolus, never peripherally as chloride",
          detail: "No rapid bolus in a patient on digoxin, and calcium chloride is not given peripherally",
          tone: "warn",
        },
        {
          label: "Then infuse",
          detail: "10 ampoules of 10% calcium gluconate in 1 litre of 5% dextrose at 50-100 mL/hour, titrated to the lower end of normal",
        },
        {
          label: "Check and replace magnesium",
          detail: "Magnesium below 0.5 mmol/L blocks PTH secretion and action - the classic cause of refractory hypocalcaemia in the alcoholic and malnourished",
          tone: "warn",
        },
        {
          label: "Continue orally",
          detail: "Elemental calcium 1-2 g daily in divided doses; calcitriol 0.25-1 mcg twice daily in hypoparathyroidism, keeping 24-hour urine calcium below 300 mg",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Calcium and vitamin D preparations in Indian practice",
      caption: "Absorption is best in doses of 500 mg or less at a time.",
      columns: ["Preparation", "Elemental content or strength", "When to choose it"],
      rows: [
        ["Calcium carbonate 1250 mg tablet", "500 mg elemental calcium (40%)", "Cheapest; take with food, needs gastric acid"],
        [
          "Calcium citrate 1000 mg tablet",
          "About 210 mg elemental calcium (21%)",
          "On a proton pump inhibitor, in achlorhydria, after bariatric surgery, in stone formers",
        ],
        ["Cholecalciferol 60,000 IU sachet", "Vitamin D3", "Weekly for 8 weeks to treat deficiency, then monthly maintenance"],
        ["Calcitriol 0.25 mcg capsule", "Active 1,25-dihydroxyvitamin D", "Hypoparathyroidism and chronic kidney disease; not for routine replacement"],
        ["Calcium gluconate 10% ampoule", "About 90 mg elemental calcium per 10 mL", "Acute symptomatic hypocalcaemia, diluted and given slowly"],
      ],
    },
  ],

  "endocrine-adrenal-disorders": [
    {
      kind: "flow",
      heading: "Adrenal crisis - treat before you confirm",
      caption: "Waiting for a cortisol result is the classic fatal error.",
      steps: [
        {
          label: "Recognise it",
          detail: "Hypotension unresponsive to fluid, vomiting, hyponatraemia, hyperkalaemia and hypoglycaemia in a patient on or recently off steroids",
          tone: "warn",
        },
        {
          label: "Hydrocortisone 100 mg IV or IM at once",
          detail: "Then 50 mg 6-hourly, or 200 mg over 24 hours by infusion",
        },
        {
          label: "Normal saline 1 litre in the first hour",
          detail: "Further fluid by response, with 5% dextrose for the hypoglycaemia",
        },
        {
          label: "Save a sample only if it causes no delay",
          detail: "Cortisol and ACTH before the first dose - but never delay the steroid for it",
          tone: "warn",
        },
        {
          label: "Do not treat the potassium first",
          detail: "The hyperkalaemia is driven by mineralocorticoid deficiency and volume depletion and corrects with steroid and fluid",
          tone: "warn",
        },
        {
          label: "Omit fludrocortisone at this dose",
          detail: "At 100 mg a day hydrocortisone gives enough mineralocorticoid effect; add it back when the dose falls below about 50 mg",
        },
        { label: "Find and treat the precipitant", detail: "Then step down and reinforce the sick-day rules", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "Primary versus secondary adrenal insufficiency",
      caption: "Hyperpigmentation with hyperkalaemia is decisive - and it also tells you fludrocortisone is needed.",
      columns: ["Feature", "Primary (Addison disease)", "Secondary (pituitary or steroid withdrawal)"],
      rows: [
        ["Site of the lesion", "Adrenal cortex", "Pituitary or hypothalamus, or exogenous steroid"],
        ["Plasma ACTH", "High", "Low or inappropriately normal"],
        ["Hyperpigmentation", "Present", "Absent"],
        ["Serum potassium", "High (aldosterone lost)", "Normal (aldosterone preserved)"],
        ["Serum sodium", "Low", "Low (dilutional, from cortisol lack)"],
        ["Mineralocorticoid replacement", "Fludrocortisone 50-200 mcg daily required", "Not required"],
        [
          "Common Indian causes",
          "Tuberculosis, autoimmune adrenalitis, HIV, haemorrhage",
          "Abrupt steroid withdrawal, pituitary tumour or surgery, Sheehan syndrome",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Steroid replacement and stress dosing",
      caption: "Every patient carries a steroid emergency card and an emergency injection kit.",
      steps: [
        {
          label: "Maintenance",
          detail: "Hydrocortisone 15-25 mg daily in 2-3 divided doses weighted to the morning - 10 mg on waking, 5 mg at midday, 2.5-5 mg mid-afternoon. Fludrocortisone 50-200 mcg daily in primary disease only",
        },
        { label: "Fever above 38 C or infection on antibiotics", detail: "Double the usual oral dose and continue until 24 hours after recovery" },
        {
          label: "Vomiting or diarrhoea",
          detail: "100 mg intramuscularly, then attend hospital - oral tablets cannot be relied upon",
          tone: "warn",
        },
        { label: "Minor surgery or dental extraction", detail: "100 mg at induction, usual dose the next day; no taper needed for a single dose" },
        { label: "Major surgery or trauma", detail: "100 mg at induction then 200 mg over 24 hours, halving daily until maintenance is reached" },
        {
          label: "Adrenal crisis",
          detail: "100 mg IV or IM stat then 50 mg 6-hourly, with 1 litre of normal saline in the first hour and dextrose for hypoglycaemia",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Confirming and localising Cushing syndrome",
      caption: "Ask about steroid-containing creams first - iatrogenic Cushing is the commonest cause seen in the clinic.",
      steps: [
        {
          label: "Screen with at least two of three tests",
          detail: "Overnight 1 mg dexamethasone (1 mg at 11 pm, cortisol at 8 am, abnormal above 1.8 mcg/dL); late-night salivary cortisol on two nights; two 24-hour urinary free cortisols",
        },
        {
          label: "Beware the false positives",
          detail: "Oestrogen pill, phenytoin, rifampicin, depression and alcohol for the dexamethasone test; shift work for salivary cortisol; incomplete collection for urinary cortisol",
          tone: "warn",
        },
        {
          label: "Confirmed - measure 8-9 am plasma ACTH",
          detail: "The sample must be transported on ice and processed promptly",
          tone: "decision",
        },
        {
          label: "ACTH below 5 pg/mL - adrenal source",
          detail: "Go to CT of the adrenals",
        },
        {
          label: "ACTH normal or raised - ACTH-dependent",
          detail: "Pituitary Cushing disease is about 70% of endogenous cases; the rest is ectopic ACTH",
        },
        {
          label: "Separate pituitary from ectopic",
          detail: "High-dose 8 mg dexamethasone (pituitary adenomas usually suppress, ectopic sources usually do not), pituitary MRI, and inferior petrosal sinus sampling as the gold standard",
        },
        {
          label: "If it is iatrogenic - taper, never stop",
          detail: "Cushingoid features with a low cortisol and undetectable ACTH. Taper to the lowest effective dose with sick-day rules; the axis takes 6-12 months or more to recover",
          tone: "good",
        },
      ],
    },
  ],
};

export default diagrams;
