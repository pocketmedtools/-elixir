import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-diabetes-insipidus": {
    checked: "2026-10",
    updated: [
      "Renamed central and nephrogenic DI to AVP deficiency and AVP resistance (international nomenclature statement 2022).",
      "Hypertonic saline-stimulated copeptin (4.9 pmol/L) set as preferred test over arginine (Refardt NEJM 2023).",
      "Baseline copeptin above 21.4 pmol/L for AVP resistance (Fenske NEJM 2018).",
      "Desmopressin treated as a critical medicine that must never be omitted (Society for Endocrinology inpatient guidance 2018).",
    ],
    master: {
      heading: "Polyuria and AVP deficiency/resistance on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Polyuria above 50 mL/kg/day (3 L); hypotonic if urine osmolality below 300 mOsm/kg"],
        ["New names (2022)", "AVP deficiency (central DI), AVP resistance (nephrogenic DI)"],
        ["Three causes of hypotonic polyuria", "AVP-D, AVP-R, primary polydipsia"],
        ["AVP-D causes", "Idiopathic, surgery, trauma, craniopharyngioma, germinoma, LCH, TB, Wolfram"],
        ["AVP-R causes", "AVPR2/AQP2, lithium, hypercalcaemia, hypokalaemia, obstruction relief"],
        ["Sodium clue", "High-normal in AVP-D/AVP-R; low-normal in primary polydipsia"],
        ["Copeptin cut-offs", "Baseline above 21.4 = AVP-R; hypertonic saline 4.9 or less = AVP-D; arginine 3.8 or less = AVP-D"],
        ["Water deprivation", "Above 800 normal; below 300 with over 50% rise after desmopressin = AVP-D; no rise = AVP-R"],
        ["Imaging", "MRI: absent posterior bright spot, stalk above 3 mm; test anterior pituitary"],
        ["AVP-D treatment", "Desmopressin oral 0.1-0.4 mg two or three times daily, melt 60-120 mcg, nasal 10-40 mcg/day"],
        ["AVP-R treatment", "Thiazide plus low-salt diet, amiloride for lithium, NSAIDs"],
        ["Inpatient", "Never omit desmopressin; free-water deficit with 5% dextrose; fall in sodium 10-12 mmol/L/day maximum"],
        ["Triple phase", "DI days 1-5, SIADH days 5-10, permanent DI"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Work-up of polyuria",
        steps: [
          { label: "Confirm polyuria", detail: "24-h urine above 50 mL/kg/day" },
          { label: "Urine osmolality", detail: "Above 300 = solute diuresis (glucose, urea, mannitol)", tone: "decision" },
          { label: "Exclude glucose, calcium, potassium, CKD", detail: "Correct reversible causes first" },
          { label: "Sodium above 147 with dilute urine?", detail: "Yes: AVP-D or AVP-R, no deprivation test", tone: "decision" },
          { label: "Baseline copeptin", detail: "Above 21.4 pmol/L = AVP resistance", tone: "decision" },
          { label: "Hypertonic saline copeptin", detail: "4.9 or less = AVP-D; above 4.9 = primary polydipsia", tone: "good" },
          { label: "AVP-D confirmed: MRI and pituitary tests", detail: "Bright spot, stalk, hCG/AFP if stalk thick" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder by cause",
        steps: [
          { label: "Treat cause and allow water to thirst", detail: "Stop lithium if possible; correct calcium and potassium" },
          { label: "AVP-D: bedtime desmopressin", detail: "Oral 0.1 mg at night; sodium at 1 week", tone: "good" },
          { label: "AVP-D: add daytime doses", detail: "0.1-0.4 mg two or three times daily; weekly breakthrough" },
          { label: "AVP-R: thiazide plus low-salt diet", detail: "HCTZ 25 mg once or twice daily; watch lithium level" },
          { label: "AVP-R lithium: add amiloride", detail: "5-10 mg once or twice daily" },
          { label: "Hypernatraemia: admit", detail: "5% dextrose; parenteral desmopressin 1-2 mcg", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "AVP-D vs AVP-R vs primary polydipsia",
        columns: ["Feature", "AVP-D", "AVP-R", "Primary polydipsia"],
        rows: [
          ["Defect", "No AVP release", "Kidney unresponsive", "Excess intake"],
          ["Sodium", "High-normal", "High-normal", "Low-normal"],
          ["Copeptin", "Low", "High (above 21.4)", "Normal (above 4.9 stimulated)"],
          ["Desmopressin response", "Over 50% rise", "Little or none", "Partial; dangerous"],
          ["Treatment", "Desmopressin", "Thiazide, amiloride", "Reduce intake"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Polyuria** is urine above 50 mL/kg/day, about 3 litres in an adult.",
            "**Hypotonic polyuria** has urine osmolality below 300 mOsm/kg.",
            "Since 2022 central DI is **AVP deficiency** and nephrogenic DI is **AVP resistance**.",
            "**Primary polydipsia** is the commonest cause of hypotonic polyuria in outpatients.",
            "**Lithium** causes AVP resistance in 20-40% of long-term users.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**AVP-D**: idiopathic, pituitary surgery, head injury, craniopharyngioma, germinoma, LCH, TB.",
            "A pituitary adenoma **rarely** causes DI before surgery.",
            "**AVP-R**: X-linked AVPR2, aquaporin-2, lithium, hypercalcaemia, hypokalaemia.",
            "**Wolfram syndrome** (DIDMOAD) is a genetic cause of AVP-D.",
            "**Gestational AVP-D** comes from placental vasopressinase.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "AVP acts on **V2 receptors** to insert aquaporin-2 in the collecting duct.",
            "**Copeptin** is released with AVP and is a stable marker.",
            "Symptoms appear after **80-85%** loss of AVP neurons.",
            "Thirst keeps sodium near normal; **hypernatraemia** means thirst or access failed.",
            "**ACTH deficiency masks AVP-D**; hydrocortisone can unmask polyuria.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Abrupt onset**, nocturia and craving for ice-cold water suggest AVP-D.",
            "Ask about headache, visual loss, head injury, surgery and **lithium**.",
            "Children show **bed-wetting** and failure to thrive.",
            "Look for visual field loss, hypopituitarism and LCH rash or skull lesions.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Start with **24-h urine volume**, urine osmolality, sodium, glucose, calcium, potassium.",
            "Baseline **copeptin above 21.4 pmol/L** means AVP resistance.",
            "**Hypertonic saline copeptin 4.9 or less** means AVP deficiency.",
            "**Arginine copeptin 3.8 or less** at 60 minutes also suggests AVP-D.",
            "Water deprivation: **over 50% rise** after desmopressin means AVP-D.",
            "**MRI**: absent bright spot; stalk thicker than 3 mm needs tumour markers.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Desmopressin** at bedtime first, then daytime doses as needed.",
            "Oral 0.1-0.4 mg two or three times daily; melt 60-120 mcg.",
            "Drink **only to thirst**; check sodium at **1 week**.",
            "**Primary polydipsia**: reduce intake; never give desmopressin.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**AVP-R**: hydrochlorothiazide 25 mg with a low-salt, low-protein diet.",
            "**Amiloride** 5-10 mg blocks lithium entry through ENaC.",
            "Thiazides **raise lithium levels**; recheck levels within a week.",
            "**Indomethacin** adds benefit but harms the kidney.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "**Never omit desmopressin** when nil by mouth; give 1-2 mcg SC or IV.",
            "Free-water deficit is **0.6 x weight x (Na/140 - 1)**.",
            "Lower chronic hypernatraemia by **no more than 10-12 mmol/L** per day.",
            "After pituitary surgery, avoid fixed doses because of the **triple-phase response**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: desmopressin is safe and resists vasopressinase.",
            "**Children** with AVP-D need serial MRI for germinoma and LCH.",
            "**Elderly** are prone to desmopressin hyponatraemia.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Hypernatraemia** above 150 mmol/L or confusion needs admission.",
            "**Desmopressin overdose** causes hyponatraemic seizures.",
            "Chronic polyuria causes **hydronephrosis** and megacystis.",
            "Post-surgical AVP-D recovers in about half of patients.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Desmopressin oral", "0.1-0.4 mg two or three times daily", "Lifelong in permanent AVP-D", "Hyponatraemia; avoid in primary polydipsia"],
            ["Desmopressin melt", "60-120 mcg two or three times daily", "Long term", "Hyponatraemia"],
            ["Desmopressin nasal", "10-40 mcg/day in 1-3 doses", "Long term", "Poor absorption with rhinitis"],
            ["Desmopressin injection", "1-4 mcg SC or IV once or twice daily", "Nil by mouth, post-op", "Avoid fixed post-op doses"],
            ["Hydrochlorothiazide", "25 mg once or twice daily", "Long term in AVP-R", "Hypokalaemia; raises lithium"],
            ["Amiloride", "5-10 mg once or twice daily", "Long term with lithium", "Hyperkalaemia"],
          ],
        },
        {
          heading: "Water deprivation test interpretation",
          columns: ["Result", "Urine osmolality after deprivation", "After desmopressin", "Diagnosis"],
          rows: [
            ["Normal concentration", "Above 800", "No further rise", "Normal or primary polydipsia"],
            ["No concentration, big rise", "Below 300", "Rise above 50%", "Complete AVP-D"],
            ["No concentration, no rise", "Below 300", "Little or no rise", "AVP-R"],
            ["Partial", "300-800", "Variable", "Partial AVP-D or polydipsia; do copeptin"],
          ],
        },
        {
          heading: "Copeptin cut-offs",
          columns: ["Test", "Cut-off", "Meaning"],
          rows: [
            ["Baseline copeptin", "Above 21.4 pmol/L", "AVP resistance"],
            ["Hypertonic saline (sodium 150 or more)", "4.9 pmol/L or less", "AVP deficiency"],
            ["Arginine 0.5 g/kg, 60 min", "3.8 pmol/L or less", "AVP deficiency"],
          ],
        },
      ],
      remember: [
        "**AVP-D = central, AVP-R = nephrogenic** (2022 names).",
        "Copeptin: **21.4 / 4.9 / 3.8**.",
        "Thiazide **paradox** reduces urine in AVP-R.",
        "**Amiloride** for lithium-induced AVP-R.",
        "Triple phase: **DI, SIADH, DI**.",
        "**DIDMOAD** = Wolfram syndrome.",
        "**Never omit** desmopressin in hospital.",
      ],
    },
  },
  "endocrine-siadh": {
    checked: "2026-10",
    updated: [
      "Rapid intermittent 3% saline boluses preferred over slow infusion (SALSA trial 2021).",
      "ESE 2014 and US Expert Panel 2013 correction limits retained; their difference on vaptans noted.",
      "Furosemide plus salt tablets no better than fluid restriction alone (RCT 2020).",
      "SGLT2 inhibitors and oral urea added as emerging or second-line options (RCTs 2020-2023).",
      "Low-dose tolvaptan 7.5 mg start noted to reduce overcorrection.",
    ],
    master: {
      heading: "SIADH on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Euvolaemic hypotonic hyponatraemia with concentrated urine and urine sodium above 30"],
        ["Severity", "Mild 130-135, moderate 125-129, profound below 125; acute under 48 h"],
        ["Causes", "Lung cancer, pneumonia, TB, TB meningitis, SAH, SSRIs, carbamazepine, pain, nausea"],
        ["Criteria", "Serum osm below 275, urine osm above 100, urine Na above 30, euvolaemia"],
        ["Must exclude", "Adrenal insufficiency, hypothyroidism, diuretics, renal failure"],
        ["Supportive", "Uric acid below 4, urea below 21.6 mg/dL, FEurea above 55%"],
        ["Severe symptoms", "150 mL 3% saline over 20 min, up to 3 times, aim +5 mmol/L"],
        ["Limits", "10 mmol/L first 24 h, 8 after; 8 in high ODS risk"],
        ["Overcorrection", "D5W 10 mL/kg plus desmopressin 2 mcg"],
        ["Chronic first line", "Fluid restriction 800-1000 mL/day; Furst ratio above 1 = fails"],
        ["Second line", "Oral urea 15-30 g/day; tolvaptan 7.5-15 mg in hospital"],
        ["ODS", "Days 2-6: dysarthria, dysphagia, quadriparesis, locked-in"],
        ["Avoid", "Normal saline in SIADH; fluid restriction in SAH"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Hyponatraemia work-up",
        steps: [
          { label: "Severe symptoms?", detail: "Seizure, vomiting, GCS 8 or less: 3% saline now", tone: "warn" },
          { label: "Serum osmolality", detail: "Normal/high: pseudo or hyperglycaemia", tone: "decision" },
          { label: "Urine osmolality", detail: "100 or less: polydipsia, beer potomania", tone: "decision" },
          { label: "Urine sodium and volume", detail: "Low volume: losses, diuretics; high volume: HF, cirrhosis", tone: "decision" },
          { label: "Euvolaemic, urine Na above 30", detail: "Check cortisol, TSH, creatinine, drugs" },
          { label: "SIADH diagnosed", detail: "Search cause: chest imaging, CNS, drugs", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Management ladder for SIADH",
        steps: [
          { label: "Treat cause, stop drug", detail: "SSRI, carbamazepine, thiazide; treat TB, pain" },
          { label: "Fluid restriction", detail: "800-1000 mL/day; check sodium in 24-48 h", tone: "good" },
          { label: "Oral urea", detail: "0.25-0.5 g/kg/day, usually 15-30 g" },
          { label: "Tolvaptan in hospital", detail: "7.5-15 mg; sodium at 6-8 h; no restriction day 1" },
          { label: "Severe symptoms: 3% saline", detail: "150 mL over 20 min, up to 3 times", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "SIADH vs cerebral salt wasting vs secondary adrenal insufficiency",
        columns: ["Feature", "SIADH", "Cerebral salt wasting", "Secondary adrenal insufficiency"],
        rows: [
          ["Volume", "Normal", "Low", "Normal"],
          ["Urine sodium", "Above 30", "Above 30, high volume", "Above 30"],
          ["Potassium", "Normal", "Normal", "Normal"],
          ["Key test", "Exclusion", "Haematocrit, urea, postural BP", "8 am cortisol"],
          ["Treatment", "Fluid restriction", "Saline, fludrocortisone", "Hydrocortisone"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**SIADH** is euvolaemic hypotonic hyponatraemia from inappropriate AVP action.",
            "Severity: **mild 130-135, moderate 125-129, profound below 125** mmol/L.",
            "**Acute** is under 48 hours; chronic is 48 hours or more.",
            "It causes about **one-third** of hospital hyponatraemia.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Lung**: small-cell cancer, pneumonia, TB.",
            "**CNS**: TB meningitis, SAH, stroke, head injury.",
            "**Drugs**: SSRIs, carbamazepine, cyclophosphamide, vincristine, opioids, PPIs.",
            "**Pain, nausea and surgery** are potent AVP triggers.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "AVP retains water; mild expansion causes **natriuresis**, so no oedema.",
            "Brain loses **osmolytes** in 48 hours to adapt.",
            "Rapid correction then shrinks cells and causes **ODS**.",
            "**Cortisol deficiency** raises AVP; secondary adrenal insufficiency mimics SIADH.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Paired **serum and urine osmolality and sodium** before treatment.",
            "Criteria: serum osm **below 275**, urine osm **above 100**, urine Na **above 30**.",
            "Always check **8 am cortisol and TSH**, creatinine, glucose.",
            "Supportive: uric acid **below 4** mg/dL, FEurea **above 55%**.",
            "**Furst ratio** above 1 means fluid restriction will fail.",
          ],
        },
        {
          title: "Differential diagnosis",
          points: [
            "**Thiazides** mimic SIADH; stop and reassess.",
            "**Cerebral salt wasting** is hypovolaemic; give saline, never restrict.",
            "**Primary adrenal insufficiency** has hyperkalaemia and hypovolaemia.",
            "**Polydipsia** gives urine osmolality 100 or less.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Treat the cause** and stop the offending drug.",
            "**Fluid restriction** 800-1000 mL/day, including all drinks.",
            "Expect only a slow rise of 1-2 mmol/L per day.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Oral urea** 15-30 g daily in juice.",
            "**Tolvaptan** 7.5-15 mg, started in hospital, titrated to 60 mg.",
            "Avoid tolvaptan in **liver disease**; check sodium at 6-8 hours.",
            "**SGLT2 inhibitors** are an emerging option.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Severe symptoms: **150 mL 3% saline over 20 minutes**, up to three times.",
            "Aim for a **5 mmol/L** rise, then slow down.",
            "Limit: **10 mmol/L** in the first 24 hours, 8 thereafter.",
            "High ODS risk: **8 mmol/L** maximum per day.",
            "Overcorrection: **5% dextrose plus desmopressin 2 mcg**.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**ODS** appears 2-6 days after correction: dysarthria, dysphagia, quadriparesis.",
            "ODS risk: **alcoholism, malnutrition, hypokalaemia, liver disease**, sodium 105 or less.",
            "Chronic mild hyponatraemia causes **falls and fractures** in the elderly.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Admit with **sodium below 125** or any neurological symptom.",
            "Check sodium weekly on fluid restriction or urea.",
            "On tolvaptan check **liver enzymes** monthly.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["3% saline", "150 mL IV over 20 min, up to 3 times", "Until +5 mmol/L", "Overcorrection, ODS"],
            ["Oral urea", "15-30 g once or twice daily", "Long term", "Bad taste, GI upset"],
            ["Tolvaptan", "7.5-15 mg daily, up to 60 mg", "Start in hospital; 30-day limit", "Liver injury, overcorrection"],
            ["Desmopressin", "2 mcg IV or SC 8-hourly", "Overcorrection rescue", "Needs fluid control"],
            ["Hydrocortisone", "100 mg IV", "Suspected adrenal crisis", "Water diuresis, overcorrection"],
          ],
        },
        {
          heading: "Diagnostic criteria",
          columns: ["Criterion", "Value"],
          rows: [
            ["Serum osmolality", "Below 275 mOsm/kg"],
            ["Urine osmolality", "Above 100 mOsm/kg"],
            ["Urine sodium", "Above 30 mmol/L"],
            ["Volume", "Euvolaemic"],
            ["Exclusions", "Normal cortisol, thyroid, renal function; no diuretics"],
          ],
        },
        {
          heading: "Differential by volume",
          columns: ["Volume status", "Urine Na above 30", "Urine Na below 30"],
          rows: [
            ["Low", "Diuretics, primary adrenal insufficiency, cerebral salt wasting", "Vomiting, diarrhoea, burns"],
            ["Normal", "SIADH, secondary adrenal insufficiency, hypothyroidism", "Polydipsia, low solute intake"],
            ["High", "CKD, diuretic-treated heart failure", "Heart failure, cirrhosis, nephrotic syndrome"],
          ],
        },
      ],
      remember: [
        "SIADH is a **diagnosis of exclusion**.",
        "Correction rule: **10 then 8**.",
        "**150 mL x 3** of 3% saline for severe symptoms.",
        "**Furst above 1** = restriction fails.",
        "**Normal saline** can worsen SIADH.",
        "Never fluid restrict in **SAH**.",
        "Overcorrection: **D5W plus DDAVP**.",
      ],
    },
  },
  "endocrine-primary-hyperparathyroidism": {
    checked: "2026-10",
    updated: [
      "Surgical criteria updated to the 5th International Workshop (2022): urine calcium above 250 mg/day women, 300 mg/day men.",
      "Surgery appropriate in all patients without contraindication even if no criterion met (2022 workshop).",
      "Normocalcaemic PHPT definition tightened: 25OHD at least 30 ng/mL, eGFR at least 60 (2022 workshop).",
      "Genetic testing under age 30, multigland disease or family history (2022 workshop).",
      "18F-fluorocholine PET/CT added as first- or second-line localisation (EANM 2021).",
    ],
    master: {
      heading: "Primary hyperparathyroidism on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Autonomous PTH secretion; high calcium with high or inappropriately normal PTH"],
        ["Pathology", "Adenoma 80-85%, hyperplasia 10-15%, double adenoma 2-5%, carcinoma under 1%"],
        ["India", "Mostly symptomatic: stones, brown tumours, pancreatitis, vitamin D deficiency (Indian PHPT Registry)"],
        ["Clinical", "Stones, bones, groans, moans, thrones; band keratopathy"],
        ["Biochemistry", "Low phosphate, Cl/PO4 above 33, high ALP in bone disease"],
        ["Exclude FHH", "Ca/Cr clearance ratio below 0.01 = FHH"],
        ["Target organs", "DXA spine, hip, distal radius; renal imaging; 24-h urine calcium"],
        ["Localisation", "Neck USG plus sestamibi SPECT/CT; 4D-CT; fluorocholine PET"],
        ["Surgery criteria", "Ca above ULN+1; T-score -2.5 or fracture; eGFR below 60; stones; urine Ca above 250/300; age under 50"],
        ["Surgery", "Focused parathyroidectomy with intra-op PTH fall above 50% at 10 min"],
        ["Medical", "Cinacalcet 30 mg twice daily; alendronate or denosumab for BMD; vitamin D repletion"],
        ["Post-op", "Hungry bone syndrome: low Ca, PO4, Mg; IV calcium, calcitriol"],
        ["Follow-up", "Calcium and creatinine yearly; DXA every 1-2 years"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing PHPT",
        steps: [
          { label: "High corrected or ionised calcium", detail: "Repeat to confirm" },
          { label: "Measure intact PTH", detail: "Suppressed: malignancy, vitamin D, granuloma", tone: "decision" },
          { label: "PTH high or inappropriately normal", detail: "PTH-dependent hypercalcaemia" },
          { label: "24-h urine calcium, Ca/Cr clearance", detail: "Below 0.01 = FHH, do not operate", tone: "warn" },
          { label: "Target organs", detail: "DXA 3 sites, renal imaging, eGFR, 25OHD" },
          { label: "Surgery planned: localise", detail: "Neck USG plus sestamibi; PET if discordant", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Who gets surgery",
        root: "Confirmed PHPT",
        arms: [
          { label: "Symptomatic", tone: "warn", steps: ["Stones, fractures, brown tumours, pancreatitis", "Parathyroidectomy"] },
          {
            label: "Asymptomatic meeting 2022 criteria",
            tone: "decision",
            steps: ["Ca above ULN+1 mg/dL", "T-score -2.5 or fracture", "eGFR below 60, stones, urine Ca above 250/300", "Age under 50", "Parathyroidectomy"],
          },
          {
            label: "Asymptomatic, no criteria or unfit",
            tone: "good",
            steps: ["Surgery still appropriate if fit", "Else: hydration, normal calcium, vitamin D", "Cinacalcet and/or bisphosphonate", "Annual calcium, DXA 1-2 yearly"],
          },
        ],
      },
      {
        kind: "compare",
        heading: "PHPT vs FHH vs secondary HPT",
        columns: ["Feature", "PHPT", "FHH", "Secondary HPT"],
        rows: [
          ["Calcium", "High", "Mildly high", "Low or normal"],
          ["PTH", "High", "Normal or mildly high", "High"],
          ["Urine calcium", "Normal or high", "Low", "Low"],
          ["Ca/Cr clearance", "Above 0.02", "Below 0.01", "Variable"],
          ["Treatment", "Surgery", "None", "Treat vitamin D deficiency or CKD"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**PHPT**: high calcium with high or **inappropriately normal PTH**.",
            "Commonest cause of hypercalcaemia in **outpatients**.",
            "Single **adenoma** in 80-85%.",
            "Indian patients are mostly **symptomatic** with larger adenomas and vitamin D deficiency.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Hereditary: **MEN1**, MEN2A, HPT-jaw tumour (CDC73).",
            "Risks: **neck irradiation**, lithium, older women.",
            "Suspect **carcinoma** with calcium above 14, neck mass, very high PTH.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Adenoma has a **raised calcium set-point** at the CaSR.",
            "PTH resorbs **cortical bone** most; distal radius suffers first.",
            "PTH causes **phosphaturia** and raises calcitriol.",
            "Hypercalcaemia causes polyuria, constipation, ulcers and **pancreatitis**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Stones, bones, groans, moans, thrones**.",
            "**Brown tumours** of jaw and long bones are common in India.",
            "Check calcium in every **pancreatitis** and recurrent stone patient.",
            "Look for **band keratopathy** and proximal weakness.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Corrected or ionised calcium** with intact PTH.",
            "**Ca/Cr clearance ratio** below 0.01 suggests FHH.",
            "**DXA at three sites** including distal one-third radius.",
            "Renal ultrasound for silent **stones**.",
            "Imaging only **localises**; it never diagnoses PHPT.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Parathyroidectomy** for all symptomatic patients.",
            "Asymptomatic criteria: calcium **above ULN+1**, T-score -2.5, eGFR below 60, stones.",
            "Urine calcium **above 250 (women) / 300 (men)**, or age under 50.",
            "**Focused surgery** with intra-op PTH fall above 50% at 10 minutes.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Keep **normal calcium intake** and drink 2-3 L daily.",
            "Replete **vitamin D** to at least 30 ng/mL.",
            "**Cinacalcet** 30 mg twice daily lowers calcium but not BMD.",
            "**Alendronate or denosumab** improves BMD.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Admit with calcium **above 14**, or above 12 with symptoms.",
            "**Hungry bone**: low calcium, phosphate, magnesium after surgery.",
            "Treat with **IV calcium gluconate**, calcitriol and magnesium.",
            "High pre-op **ALP** predicts hungry bone.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: operate in the second trimester; neonatal tetany risk.",
            "**MEN1**: subtotal parathyroidectomy plus thymectomy.",
            "**Normocalcaemic PHPT**: monitor; no routine surgery.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer every PTH-dependent hypercalcaemia to an **endocrinologist**.",
            "Non-operated: **calcium and creatinine yearly**, DXA every 1-2 years.",
            "Cure means **normal calcium at 6 months** after surgery.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Cinacalcet", "30 mg twice daily, titrate to 90 mg up to four times daily", "Long term if no surgery", "Nausea, hypocalcaemia; no BMD gain"],
            ["Alendronate", "70 mg weekly", "3-5 years", "Oesophagitis; avoid if eGFR below 35"],
            ["Denosumab", "60 mg SC every 6 months", "Long term", "Rebound fractures if stopped"],
            ["Zoledronic acid", "4 mg IV over 15 min", "Hypercalcaemic crisis", "Fever, renal toxicity"],
            ["Calcium gluconate 10%", "1-2 g IV bolus, then infusion", "Hungry bone", "Extravasation; ECG monitoring"],
            ["Calcitriol", "0.5-2 mcg/day", "Hungry bone, weeks to months", "Hypercalcaemia"],
          ],
        },
        {
          heading: "2022 surgical criteria",
          columns: ["Domain", "Criterion"],
          rows: [
            ["Calcium", "More than 1 mg/dL above upper limit"],
            ["Bone", "T-score -2.5 or less, or vertebral fracture"],
            ["Kidney", "eGFR below 60; stones or nephrocalcinosis"],
            ["Urine calcium", "Above 250 mg/day women, 300 mg/day men"],
            ["Age", "Under 50 years"],
          ],
        },
        {
          heading: "Hungry bone vs post-surgical hypoparathyroidism",
          columns: ["Feature", "Hungry bone", "Hypoparathyroidism"],
          rows: [
            ["PTH", "Normal or high", "Low"],
            ["Phosphate", "Low", "High"],
            ["Magnesium", "Low", "Normal"],
            ["Setting", "Severe bone disease, high ALP", "Gland damage or removal"],
          ],
        },
      ],
      remember: [
        "**Stones, bones, groans, moans, thrones**.",
        "Imaging **localises, never diagnoses**.",
        "**FHH**: Ca/Cr clearance below 0.01.",
        "2022 urine calcium: **250 / 300**.",
        "**Distal radius** shows cortical loss first.",
        "**Cinacalcet**: calcium yes, BMD no.",
        "High **ALP** predicts hungry bone.",
      ],
    },
  },
};

export default revision;
