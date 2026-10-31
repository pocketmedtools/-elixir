import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-pancreatogenic-diabetes": {
    checked: "2026-10",
    updated: [
      "ADA Standards of Care 2026: pancreatic (type 3c) diabetes kept under specific types; CGM for insulin users from diagnosis",
      "ESPEN practical guideline 2024: normal-fat diet with PERT; screen for sarcopenia and osteoporosis",
      "PancreasFest 2021 consensus: annual screening in chronic pancreatitis, metformin first line, caution with incretins and SGLT2 inhibitors",
    ],
    master: {
      heading: "Master revision table - FCPD and type 3c diabetes",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Type 3c** = diabetes from exocrine pancreatic disease (loss of insulin, **glucagon**, PP); **FCPD** = tropical form with **tropical calcific pancreatitis** in the young and lean."],
        ["Epidemiology", "Type 3c **5-10%** of adult diabetes in the West, mostly misclassified as type 2; FCPD **under 1%** of Indian diabetes, Kerala/Tamil Nadu, declining."],
        ["Causes", "Chronic pancreatitis (commonest), acute pancreatitis (**PPDM-A**), pancreatic cancer, pancreatectomy, CF, haemochromatosis; FCPD - **SPINK1 N34S**, malnutrition, oxidative stress."],
        ["Pathophysiology", "Acinar loss first; then beta (insulin) and **alpha (glucagon)** loss - brittle hypoglycaemia; PP loss - hepatic insulin resistance; **ketosis resistance** from residual C-peptide, low glucagon, low fat."],
        ["Criteria", "**Mohan**: tropics, WHO diabetes, calculi or 3 CP features, no other cause; **Ewald-Bretzel**: exocrine insufficiency, abnormal imaging, no T1 antibodies."],
        ["Clinical", "Under 30, **lean**, childhood pain, **steatorrhoea**, glucose often over 300 without ketones; parotid enlargement, vitamin deficiency signs."],
        ["Investigations", "**X-ray abdomen** calculi right of L1-L2; USG, CT, MRCP, EUS; **faecal elastase under 200** microg/g; C-peptide low-detectable; GAD negative; vitamin D, DEXA."],
        ["Diabetes treatment", "**Insulin 0.5-1 unit/kg/day** (premixed or basal-bolus), start low; **metformin** first line in mild type 3c; avoid DPP-4i/GLP-1 RA; caution SGLT2i."],
        ["Exocrine treatment", "**Normal-fat diet**; PERT **25,000-50,000 units lipase per main meal**, half per snack; PPI if poor response; vitamin D and calcium."],
        ["Pain and IPD", "Analgesic ladder; **ESWL plus ERCP**; Frey or lateral pancreaticojejunostomy; TPIAT in centres; hypoglycaemia - 25% dextrose 100 mL IV."],
        ["Complications", "Microvascular like type 2; **pancreatic cancer up to 100-fold** in TCP; hypoglycaemia deaths; osteoporosis; pseudocyst, biliary stricture."],
        ["Follow-up", "HbA1c 3-monthly; annual screen in CP; after acute pancreatitis at **3 months then yearly**; **CT/EUS** with weight loss, new pain, jaundice, sudden poor control."],
        ["Exam one-liners", "**Pain, calculi, diabetes**; insulin-requiring but ketosis-resistant; never restrict fat; new diabetes over 50 with weight loss - image pancreas."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspecting pancreatogenic diabetes",
        caption: "Ask the pancreatic questions in every lean or atypical diabetic.",
        steps: [
          { label: "Diabetes in a lean, young or atypical patient", detail: "Or history of pancreatitis or pancreatic surgery" },
          { label: "Ask: abdominal pain, steatorrhoea, alcohol", tone: "decision" },
          { label: "Plain X-ray abdomen and ultrasound", detail: "Calculi right of L1-L2 along the duct" },
          { label: "Faecal elastase-1, C-peptide, GAD antibodies", detail: "FE-1 under 200 microg/g; GAD negative" },
          { label: "Over 50 with weight loss?", detail: "Pancreas-protocol CT or EUS for cancer", tone: "warn" },
          { label: "Diagnose FCPD (Mohan) or type 3c (Ewald-Bretzel)", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder for glucose in type 3c",
        caption: "Weight and insulin deficiency decide the step.",
        steps: [
          { label: "Lifestyle, stop alcohol and tobacco", detail: "Normal-fat diet plus PERT" },
          { label: "Metformin if mild and weight preserved", detail: "500 mg OD up to 1 g BD" },
          { label: "Basal insulin", detail: "Start 0.1-0.2 unit/kg, titrate slowly" },
          { label: "Premixed or basal-bolus insulin", detail: "0.5-1 unit/kg/day total" },
          { label: "CGM and hypoglycaemia plan", detail: "Glucagon deficiency - brittle", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "FCPD versus type 1 diabetes",
        columns: ["Feature", "FCPD", "Type 1"],
        rows: [
          ["Ketosis", "Resistant", "Prone"],
          ["Pain and steatorrhoea", "Present", "Absent"],
          ["Pancreatic calculi", "Present", "Absent"],
          ["Islet antibodies", "Negative", "Positive"],
          ["C-peptide", "Low but detectable", "Absent"],
          ["Extra treatment", "PERT, cancer watch", "Screen thyroid, coeliac"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Type 3c diabetes** is caused by disease of the exocrine pancreas.",
            "It is **5-10%** of adult diabetes in the West, often mislabelled as type 2.",
            "**FCPD** is diabetes due to tropical calcific pancreatitis in young lean Indians.",
            "WHO 1985 called it **MRDM**; WHO 1999 abolished that category.",
            "About **15-20%** develop diabetes within 3-5 years of acute pancreatitis.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Chronic pancreatitis** is the commonest cause of type 3c diabetes.",
            "Others: acute pancreatitis, **pancreatic cancer**, pancreatectomy, cystic fibrosis, haemochromatosis.",
            "FCPD: **SPINK1 N34S** mutation, childhood malnutrition, oxidative stress.",
            "The **cassava hypothesis** is now considered unproven.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Acinar tissue goes first, so **steatorrhoea comes before diabetes**.",
            "Alpha-cell loss causes **glucagon deficiency** and brittle hypoglycaemia.",
            "**Ketosis resistance**: residual C-peptide, low glucagon and low fat stores.",
            "Pancreatic polypeptide loss causes **hepatic insulin resistance**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Young (under 30), **very lean**, recurrent abdominal pain since childhood.",
            "**Steatorrhoea**: bulky, oily, foul stools that float.",
            "High glucose, often over 300 mg/dL, **without ketonuria**.",
            "Signs: emaciation, **parotid enlargement**, vitamin A, D and K deficiency.",
            "New diabetes after 50 with **weight loss** suggests pancreatic cancer.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Plain X-ray abdomen**: dense calculi right of L1-L2.",
            "USG, **CT**, MRCP and EUS show calculi, dilated duct, atrophy or mass.",
            "**Faecal elastase-1** under 200 microg/g means exocrine insufficiency.",
            "C-peptide **low but detectable**; GAD antibodies negative.",
            "Check vitamin D, B12, albumin and **bone density**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Stop **alcohol and smoking** completely.",
            "Most FCPD need **insulin**, about 0.5-1 unit/kg/day, started low.",
            "**Metformin** is first line in mild type 3c with preserved weight.",
            "**Normal-fat diet** plus enzymes; never restrict fat.",
            "PERT **25,000-50,000 units lipase** with each main meal.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Add a **PPI** if steatorrhoea persists on enough enzymes.",
            "Avoid **DPP-4 inhibitors and GLP-1 agonists** with pancreatitis.",
            "Use **SGLT2 inhibitors** with caution because of euglycaemic DKA.",
            "Pain: analgesics, then **ESWL with ERCP** or surgery.",
            "**CGM** helps brittle patients on insulin.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Retinopathy, nephropathy and neuropathy occur **as in type 2**.",
            "**Pancreatic cancer** risk is up to 100-fold in tropical pancreatitis.",
            "Severe **hypoglycaemia** is a major cause of death.",
            "Red flags: weight loss, jaundice, new pain, **sudden loss of control**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer to **diabetologist and gastroenterologist** together.",
            "HbA1c every 3 months; relax target if hypoglycaemia is frequent.",
            "Screen chronic pancreatitis **yearly**; after acute attack at 3 months, then yearly.",
            "Low threshold for **CT or EUS** to exclude cancer.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ADA 2026** keeps pancreatic diabetes as a specific type and backs CGM for insulin users.",
            "**ESPEN 2024**: normal fat, enzymes with meals, check sarcopenia.",
            "**PancreasFest 2021**: metformin first, caution with incretins and SGLT2 inhibitors.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in FCPD and type 3c diabetes",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Premixed insulin 30/70", "0.5-1 unit/kg/day SC, split two-thirds and one-third", "Lifelong, titrate every 3 days", "Hypoglycaemia - start low"],
            ["Metformin", "500 mg oral OD with food, up to 1 g BD", "Long term if tolerated", "GI upset, weight loss; stop eGFR under 30"],
            ["Pancreatin (PERT)", "25,000-50,000 units lipase oral per main meal", "Lifelong", "Take with first bite; do not crush"],
            ["Pantoprazole", "40 mg oral OD before breakfast", "While PERT response poor", "Low magnesium, B12 deficiency"],
            ["Cholecalciferol", "60,000 IU oral weekly x 8", "Then monthly", "Hypercalcaemia if overdosed"],
          ],
        },
        {
          heading: "FCPD vs type 1 vs type 2",
          columns: ["Feature", "FCPD", "Type 1", "Type 2"],
          rows: [
            ["Age", "10-30 years", "Child or young adult", "Usually over 30"],
            ["Build", "Very lean", "Lean", "Overweight"],
            ["Ketosis", "Rare", "Prone", "Uncommon"],
            ["Calculi and steatorrhoea", "Yes", "No", "No"],
            ["Antibodies", "Negative", "Positive", "Negative"],
          ],
        },
        {
          heading: "Diagnostic criteria",
          columns: ["Set", "Main points"],
          rows: [
            ["Mohan (FCPD)", "Tropics; WHO diabetes; calculi or 3 CP features; no other cause"],
            ["Ewald-Bretzel major (type 3c)", "Exocrine insufficiency; abnormal imaging; no T1 antibodies"],
            ["PPDM-A", "Diabetes at least 90 days after acute pancreatitis"],
          ],
        },
      ],
      remember: [
        "**Pain, calculi, diabetes** - the natural history of tropical calcific pancreatitis.",
        "FCPD: **insulin-requiring, ketosis-resistant**.",
        "Glucagon loss makes it **brittle** - start insulin low.",
        "**Never restrict fat** - give enzymes with every meal.",
        "New diabetes over 50 plus weight loss: **image the pancreas**.",
        "MRDM was **abolished by WHO in 1999**.",
      ],
    },
  },
  "endocrine-short-stature-growth": {
    checked: "2026-10",
    updated: [
      "International Turner syndrome guideline 2024: karyotype every short girl, GH 0.045-0.05 mg/kg/day from 4-6 years, transdermal oestradiol at 11-12 years",
      "Long-acting weekly GH (lonapegsomatropin 2021, somapacitan and somatrogon 2023) added for paediatric GHD",
      "Vosoritide for achondroplasia extended to infants and young children (FDA 2023)",
      "IAP 2015 charts (5-18 years) with WHO 2006 standards (under 5) remain the Indian reference",
    ],
    master: {
      heading: "Master revision table - short stature and growth disorders",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Height **below -2 SD** (3rd centile), or **more than 2 SD below MPH**, or **velocity below 25th centile** / crossing two centile lines; severe below -3 SD."],
        ["Charts and burden", "**WHO 2006 under 5**, **IAP 2015 for 5-18 years**; India stunting **35.5%** (NFHS-5); most short children are normal variants."],
        ["Growth norms", "Velocity 25 cm year 1, 12 cm year 2, 8 cm year 3, then **5-6 cm/year**; **under 4 cm/year** after 3 years is abnormal; US:LS **1.7, 1.3, 1.0** at birth, 3, 10 years."],
        ["Causes", "Normal variants (**familial, CDGP**); nutritional and systemic (malnutrition, **celiac**, CKD, **RTA**); endocrine (**hypothyroid, GHD, Cushing**); syndromes (**Turner**, Noonan, PWS); dysplasias; SGA; psychosocial."],
        ["Classification", "**Proportionate vs disproportionate**; prenatal vs postnatal; **short and fat = endocrine, short and thin = nutritional**; bone age equal, delayed or advanced."],
        ["History", "Previous heights (velocity), birth weight, neonatal hypoglycaemia/micropenis, diet, diarrhoea, polyuria, **headache and vision**, steroids, **measured parental heights**, puberty timing."],
        ["Examination", "Stadiometer, plot SDS, **MPH (F + M +/- 13)/2, target +/- 8.5 cm**, arm span, US:LS, Tanner, Turner stigmata, GHD face, goitre, rickets, fundus and fields."],
        ["First-line tests", "CBC, ESR, RFT, **VBG**, Ca, P, ALP, LFT, urine pH, stool; **TSH, FT4**; **tTG-IgA plus total IgA**; **karyotype in girls**; **bone age** (left hand, Greulich-Pyle)."],
        ["Second-line tests", "**IGF-1, IGFBP-3**; **two GH stimulation tests** (peak under 10, or under 7 ng/mL; sex-steroid priming); MRI pituitary; skeletal survey; genes."],
        ["Treatment", "Reassure normal variants; nutrition, deworming; **levothyroxine**; gluten-free diet; testosterone 50-100 mg IM monthly x 3-6 for CDGP boys; vitamin D for rickets."],
        ["GH therapy", "GHD **0.025-0.035 mg/kg/day SC**; Turner/CKD 0.045-0.05; PWS 1 mg/m2; weekly somapacitan 0.16 mg/kg; stop at velocity under 2-2.5 cm/year or BA 14/16."],
        ["GH harms", "**IIH, SCFE**, scoliosis, glucose intolerance; contraindicated in active cancer, closed epiphyses, **PWS with severe obesity or OSA**."],
        ["Follow-up and programmes", "Height every **6 months**; bone age 1-2 yearly; on GH IGF-1 and TSH 6-monthly; **RBSK**, Poshan Tracker, newborn TSH screening."],
        ["Exam one-liners", "Velocity beats one height; **karyotype every short girl**; CDGP bone age = height age; always test **TSH and celiac**."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Approach to a short child",
        caption: "Velocity, proportions and bone age decide the path.",
        steps: [
          { label: "Measure accurately and plot on WHO or IAP 2015 chart", detail: "Height SDS, BMI, MPH and target range" },
          { label: "Growth velocity over 6-12 months", detail: "Under 4 cm/year after age 3 is abnormal", tone: "decision" },
          { label: "Proportions: US:LS ratio and arm span", detail: "Disproportionate: skeletal survey for dysplasia or rickets", tone: "decision" },
          { label: "First-line screen", detail: "CBC, RFT, VBG, Ca, P, ALP, TSH, tTG-IgA, karyotype in girls" },
          { label: "Bone age", detail: "Equal: familial or genetic; delayed: CDGP, systemic, endocrine" },
          { label: "IGF-1 and two GH stimulation tests", detail: "Peak under 10 ng/mL; then MRI pituitary", tone: "warn" },
          { label: "Treat cause or reassure and monitor 6-monthly", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Causes of short stature",
        root: "Short stature",
        arms: [
          { label: "Normal variants", tone: "good", steps: ["Familial short stature", "Constitutional delay (CDGP)"] },
          { label: "Proportionate - short and thin", steps: ["Malnutrition", "Celiac, IBD", "CKD, RTA", "Cyanotic heart disease, TB"] },
          { label: "Proportionate - short and fat", tone: "warn", steps: ["Hypothyroidism", "GH deficiency", "Cushing, steroids", "Pseudohypoparathyroidism"] },
          { label: "Syndromic / prenatal", steps: ["Turner", "Noonan", "Prader-Willi", "SGA, Russell-Silver"] },
          { label: "Disproportionate", tone: "decision", steps: ["Achondroplasia", "Rickets", "Spondyloepiphyseal dysplasia"] },
        ],
      },
      {
        kind: "compare",
        heading: "Familial vs constitutional vs GH deficiency",
        columns: ["Feature", "Familial", "CDGP", "GHD"],
        rows: [
          ["Velocity", "Normal", "Normal", "Low"],
          ["Bone age", "= chronological", "Delayed = height age", "Markedly delayed"],
          ["Puberty", "On time", "Late", "Late"],
          ["Parents", "Short", "Late bloomers", "Average"],
          ["Final height", "Short, within target", "Near target", "Short if untreated"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Short stature is height **below -2 SD** for age and sex.",
            "Also abnormal: more than 2 SD **below mid-parental target**, or crossing centiles.",
            "Use **WHO 2006** under 5 years and **IAP 2015** charts for 5-18 years.",
            "India: **35.5%** of under-5 children are stunted (NFHS-5).",
            "Most short children are **normal variants**: familial or constitutional delay.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Nutritional and systemic**: malnutrition, celiac, CKD, RTA, heart disease, TB.",
            "**Endocrine**: hypothyroidism, GH deficiency, Cushing and long-term steroids.",
            "**Syndromes**: Turner, Noonan, Prader-Willi, Russell-Silver, SHOX deficiency.",
            "**Disproportionate**: achondroplasia, rickets, spondyloepiphyseal dysplasia.",
            "**SGA** babies who do not catch up by 2-4 years.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Normal **velocity**: 25 cm in year 1, then 5-6 cm a year before puberty.",
            "**GH acts via IGF-1** on growth-plate chondrocytes.",
            "**Oestrogen closes epiphyses**, so precocious puberty gives a short adult.",
            "Thyroid hormone is needed for bone maturation; hypothyroidism **arrests growth**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Collect **previous heights**; velocity matters more than one height.",
            "Ask birth weight, neonatal hypoglycaemia, diet, diarrhoea, polyuria and **headache**.",
            "**Measure parents**; ask about late puberty in the family.",
            "MPH: **(father + mother +/- 13)/2**; target range +/- 8.5 cm.",
            "Look for Turner stigmata, GHD face, goitre, rickets and **visual fields**.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Short and fat** suggests endocrine; **short and thin** suggests nutritional.",
            "Bone age **equal** to age: familial or genetic.",
            "Bone age **delayed**: CDGP, systemic or endocrine disease.",
            "Bone age **advanced**: precocious puberty or CAH.",
            "US:LS ratio **1.7, 1.3, 1.0** at birth, 3 years and 10 years.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "First line: CBC, ESR, RFT, **blood gas**, calcium, phosphate, ALP, urine pH.",
            "**TSH and tTG-IgA** with total IgA in every unexplained case.",
            "**Karyotype** every short girl, even without stigmata.",
            "**Bone age**: left hand and wrist X-ray, Greulich-Pyle atlas.",
            "IGF-1, then **two GH stimulation tests**; peak under 10 ng/mL suggests GHD.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Normal variants: **reassure** and measure every 6 months.",
            "Treat the cause: nutrition, deworming, **levothyroxine**, gluten-free diet.",
            "CDGP boys in distress: **testosterone 50-100 mg IM** monthly for 3-6 months.",
            "Avoid **height tonics**, anabolic steroids and cyproheptadine.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**GH** for GHD, Turner, Prader-Willi, CKD, SGA, Noonan and SHOX deficiency.",
            "GHD dose **0.025-0.035 mg/kg/day** SC; Turner 0.045-0.05 mg/kg/day.",
            "Weekly **long-acting GH** is an option where available.",
            "Stop GH when velocity is **under 2-2.5 cm a year**.",
            "Watch for **IIH, slipped femoral epiphysis** and scoliosis.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer if height **below -3 SD** or velocity under 4 cm a year.",
            "Refer urgently with **headache and field loss** - craniopharyngioma.",
            "On GH: height 3-monthly, **IGF-1 and TSH** 6-monthly.",
            "Link with **RBSK** and Poshan Tracker for community growth monitoring.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**Turner guideline 2024**: early GH, oestradiol patch at 11-12 years.",
            "**Long-acting weekly GH** approved for paediatric GHD (2021-2023).",
            "**Vosoritide** now licensed for young children with achondroplasia.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in growth disorders",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Somatropin (GHD)", "0.025-0.035 mg/kg/day SC at bedtime", "Until velocity under 2-2.5 cm/year", "IIH, SCFE, scoliosis, high glucose"],
            ["Somatropin (Turner, CKD)", "0.045-0.05 mg/kg/day SC", "From 4-6 years to near-final height", "As above"],
            ["Somapacitan", "0.16 mg/kg/week SC", "Weekly, adjust by IGF-1", "As daily GH"],
            ["Levothyroxine", "4-6 microg/kg/day oral (1-5 years)", "Lifelong, TSH-guided", "Over-treatment advances bone age"],
            ["Testosterone enanthate", "50-100 mg IM monthly", "3-6 months for CDGP", "Acne, bone age advance"],
          ],
        },
        {
          heading: "Normal variants vs pathology",
          columns: ["Feature", "Familial", "CDGP", "Pathological"],
          rows: [
            ["Velocity", "Normal", "Normal", "Low"],
            ["Bone age", "Equal to age", "Delayed", "Markedly delayed"],
            ["Puberty", "On time", "Late", "Late or absent"],
            ["Final height", "Within target", "Near target", "Below target"],
          ],
        },
        {
          heading: "Key cut-offs",
          columns: ["Measure", "Cut-off", "Meaning"],
          rows: [
            ["Height SDS", "Below -2 SD", "Short stature"],
            ["Velocity after 3 years", "Under 4 cm/year", "Pathological"],
            ["Height vs MPH", "More than 8.5 cm below", "Look for disease"],
            ["GH stimulation peak", "Under 10 ng/mL", "GH deficiency"],
          ],
        },
      ],
      remember: [
        "**Velocity beats a single height**.",
        "MPH = **(F + M +/- 13)/2**, target +/- 8.5 cm.",
        "**Short and fat = endocrine**; short and thin = nutritional.",
        "CDGP: bone age **equals height age**.",
        "**Karyotype every short girl**.",
        "Always check **TSH, tTG-IgA and blood gas**.",
        "Precocious puberty: **tall child, short adult**.",
      ],
    },
  },
  "endocrine-hypercalcaemia-approach": {
    checked: "2026-10",
    updated: [
      "Endocrine Society 2023 hypercalcaemia of malignancy guideline: denosumab or IV bisphosphonate, calcitonin for severe cases, steroids for calcitriol-mediated causes",
      "Fifth International Workshop on PHPT 2022: updated surgical criteria including hypercalciuria over 250/300 mg/day",
      "Endocrine Society 2024 vitamin D guideline: no routine 25-OH D testing - fewer mega-doses and less toxicity",
      "Routine loop diuretics no longer advised in hypercalcaemia",
    ],
    master: {
      heading: "Master revision table - approach to hypercalcaemia",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Corrected calcium **over 10.5 mg/dL** (ionised over 1.32 mmol/L); **corrected = measured + 0.8 x (4 - albumin)**; mild under 12, moderate 12-14, **severe over 14**."],
        ["Epidemiology", "**PHPT + malignancy = 90%**; PHPT commonest in OPD, malignancy in IPD; India - symptomatic PHPT, **vitamin D injections**, **TB**."],
        ["PTH-dependent causes", "**PHPT**, tertiary HPT, **lithium**, **FHH** (Ca/Cr clearance under 0.01), MEN."],
        ["PTH-independent causes", "**PTHrP** (squamous, renal, breast), **myeloma**, lymphoma, **granulomas (TB, sarcoid)**, **vitamin D toxicity**, milk-alkali, thiazides, thyrotoxicosis, immobilisation."],
        ["Pathophysiology", "Nephrogenic DI - dehydration - low GFR - higher calcium; **short QT**; bone resorption (antiresorptives) vs gut absorption (**steroids**)."],
        ["Clinical", "**Stones, bones, groans, moans, thrones**; dehydration, band keratopathy, hyporeflexia, confusion, pancreatitis."],
        ["Step 1 tests", "Repeat corrected or ionised Ca, creatinine, phosphate, Mg, ALP, **ECG**."],
        ["Step 2 - PTH", "**High/normal**: urine Ca, Ca/Cr clearance ratio, 25-OH D, neck imaging. **Suppressed**: **PTHrP, 25-OH D, 1,25-(OH)2D, SPEP, free light chains**, chest X-ray, CT."],
        ["Mild treatment", "Hydrate, **stop thiazides, lithium, calcium, vitamin D**; normal calcium diet; treat cause."],
        ["Severe treatment", "**Saline 200-300 mL/h** to urine 100-150 mL/h; **calcitonin 4 IU/kg 12-hourly** (48 h); **zoledronic acid 4 mg IV over 15 min**; **denosumab 120 mg SC** if refractory or CKD."],
        ["Cause-specific", "**Steroids** (prednisolone 40-60 mg) for lymphoma, granuloma, vitamin D toxicity; cinacalcet for PHPT/carcinoma; dialysis if over 18 mg/dL or renal failure."],
        ["Complications", "AKI, stones, nephrocalcinosis, arrhythmia, pancreatitis, peptic ulcer, fractures, coma."],
        ["Follow-up", "Calcium 6-12 hourly in acute phase; hypocalcaemia day 4-7 after antiresorptives; mild PHPT yearly calcium, creatinine; DEXA 1-2 yearly."],
        ["Exam one-liners", "**Fluids first, furosemide never first**; FHH - do not operate; steroids for calcitriol causes; ask about **vitamin D injections**."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Evaluating hypercalcaemia",
        caption: "PTH is the pivot of the work-up.",
        steps: [
          { label: "High calcium on a report", detail: "Correct for albumin or measure ionised calcium" },
          { label: "Repeat and confirm; ECG, creatinine, phosphate", detail: "Short QT; AKI" },
          { label: "Intact PTH", detail: "Over 20-25 pg/mL = PTH-dependent; under 20 = independent", tone: "decision" },
          { label: "PTH-dependent: urine Ca/Cr clearance ratio", detail: "Under 0.01 FHH; over 0.02 PHPT; lithium; tertiary HPT" },
          { label: "PTH suppressed: PTHrP, 25-OH D, 1,25-(OH)2D, SPEP", detail: "Malignancy, toxicity, granuloma, myeloma", tone: "warn" },
          { label: "Treat the cause", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder by severity",
        caption: "Each rung adds to the one below it.",
        steps: [
          { label: "Mild under 12 mg/dL: hydrate, stop culprits", detail: "Thiazide, lithium, calcium, vitamin D" },
          { label: "IV 0.9% saline", detail: "200-300 mL/hour; urine output 100-150 mL/hour" },
          { label: "Calcitonin for rapid fall", detail: "4 IU/kg SC/IM 12-hourly; works 48 hours" },
          { label: "Zoledronic acid 4 mg IV over 15 minutes", detail: "Onset 2-4 days; lasts weeks" },
          { label: "Denosumab 120 mg SC", detail: "Bisphosphonate-refractory or renal impairment" },
          { label: "Haemodialysis", detail: "Over 18 mg/dL with coma, or renal failure", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "PTH-independent causes - lab pattern",
        columns: ["Cause", "PTHrP", "25-OH D", "1,25-(OH)2D"],
        rows: [
          ["Humoral malignancy", "High", "Normal", "Low-normal"],
          ["Granuloma or lymphoma", "Normal", "Normal", "High"],
          ["Vitamin D toxicity", "Normal", "Over 150 ng/mL", "Normal or high"],
          ["Myeloma", "Normal", "Normal", "Normal (paraprotein positive)"],
          ["Milk-alkali", "Normal", "Normal", "Low (alkalosis, AKI)"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Hypercalcaemia is corrected calcium **over 10.5 mg/dL**.",
            "**Corrected calcium** = measured + 0.8 x (4 - albumin).",
            "Mild under 12, moderate 12-14, **severe over 14 mg/dL**.",
            "**PHPT and malignancy** cause about 90% of cases.",
            "In India, ask about **vitamin D injections** and TB.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**PTH-dependent**: PHPT, tertiary HPT, lithium, FHH.",
            "**Malignancy**: PTHrP tumours, myeloma, bone metastases, lymphoma.",
            "**Granulomas**: TB, sarcoidosis and fungal infections make calcitriol.",
            "**Vitamin D toxicity** and **milk-alkali syndrome**.",
            "Thiazides, thyrotoxicosis, immobilisation, adrenal insufficiency.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "High calcium causes **nephrogenic DI**, dehydration and a falling GFR.",
            "This vicious cycle is why **saline** comes first.",
            "Calcium **shortens the QT** and slows conduction.",
            "Bone-driven causes respond to **antiresorptives**; gut-driven causes to **steroids**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Stones, bones, abdominal groans, psychic moans, thrones**.",
            "Polyuria, constipation, nausea, confusion and **pancreatitis**.",
            "Signs: dehydration, **band keratopathy**, hyporeflexia.",
            "Slow mild rise suggests PHPT; **fast rise with weight loss** suggests cancer.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Confirm with **ionised or corrected calcium**; check ECG and creatinine.",
            "**Intact PTH** is the key branch point.",
            "PTH high or normal: urine calcium and **Ca/Cr clearance ratio**.",
            "PTH suppressed: **PTHrP**, 25-OH D, 1,25-(OH)2D, SPEP and free light chains.",
            "High 1,25-(OH)2D: look for **TB, sarcoidosis, lymphoma**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Mild: hydrate and stop **thiazides, lithium, calcium and vitamin D**.",
            "Keep a **normal dietary calcium** intake.",
            "Severe: **IV saline 200-300 mL/hour** to urine output 100-150 mL/hour.",
            "**Calcitonin 4 IU/kg** every 12 hours for a fast but short fall.",
            "**Zoledronic acid 4 mg IV** over at least 15 minutes.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**Denosumab 120 mg SC** if bisphosphonate fails or kidneys are poor.",
            "**Prednisolone 40-60 mg/day** for lymphoma, granulomas, vitamin D toxicity.",
            "**Dialysis** for calcium over 18 mg/dL with coma or renal failure.",
            "**Furosemide** only for fluid overload after volume repletion.",
            "PHPT: parathyroidectomy; **cinacalcet** if surgery is not possible.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Calcium **over 14 mg/dL**, confusion or coma.",
            "**AKI**, arrhythmia, heart block.",
            "Acute **pancreatitis** and peptic ulcer.",
            "Malignant hypercalcaemia has a **poor prognosis**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Monitor calcium every **6-12 hours** during acute care.",
            "Watch for **hypocalcaemia** 4-7 days after antiresorptives.",
            "Mild PHPT: **yearly calcium and creatinine**, DEXA every 1-2 years.",
            "Screen relatives for **FHH and MEN 1**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**Endocrine Society 2023**: denosumab or bisphosphonate, plus calcitonin if severe.",
            "**PHPT Workshop 2022**: surgery for hypercalciuria, eGFR under 60, age under 50.",
            "**Endocrine Society 2024**: no routine vitamin D testing in healthy adults.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for hypercalcaemia",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["0.9% saline", "200-300 mL/hour IV", "24-72 hours, to urine 100-150 mL/hour", "Fluid overload"],
            ["Calcitonin", "4 IU/kg SC/IM 12-hourly", "48 hours (tachyphylaxis)", "Nausea, flushing"],
            ["Zoledronic acid", "4 mg IV over at least 15 minutes", "Single dose; lasts 2-4 weeks", "AKI, flu-like reaction, hypocalcaemia"],
            ["Denosumab", "120 mg SC, days 1, 8, 15 then monthly", "Until controlled", "Hypocalcaemia, jaw osteonecrosis"],
            ["Prednisolone", "40-60 mg/day oral", "3-10 days then taper", "Hyperglycaemia; no effect in PHPT"],
          ],
        },
        {
          heading: "PTH-based classification",
          columns: ["PTH", "Causes", "Next test"],
          rows: [
            ["High or inappropriately normal", "PHPT, lithium, tertiary HPT, FHH", "Urine Ca/Cr clearance ratio"],
            ["Suppressed with high PTHrP", "Squamous, renal, breast cancer", "CT, tumour search"],
            ["Suppressed with high 1,25-(OH)2D", "TB, sarcoidosis, lymphoma", "Chest X-ray, biopsy"],
            ["Suppressed with 25-OH D over 150", "Vitamin D toxicity", "Drug history"],
          ],
        },
        {
          heading: "Severity grading",
          columns: ["Calcium (mg/dL)", "Grade", "Action"],
          rows: [
            ["10.5-12", "Mild", "Treat cause, hydrate"],
            ["12-14", "Moderate", "Saline, bisphosphonate if symptomatic"],
            ["Over 14", "Severe", "Saline, calcitonin, zoledronic acid"],
            ["Over 18 with coma", "Crisis", "Add dialysis"],
          ],
        },
      ],
      remember: [
        "**Correct for albumin** before calling it hypercalcaemia.",
        "**PTH is the pivot** of the algorithm.",
        "**Fluids first, furosemide never first**.",
        "Calcitonin is fast but fades in **48 hours**.",
        "**Steroids for calcitriol causes** - not for PHPT.",
        "FHH: **Ca/Cr clearance ratio under 0.01** - no surgery.",
        "Short QT means **high calcium**.",
      ],
    },
  },
  "endocrine-diabetes-infections": {
    checked: "2026-10",
    updated: [
      "ADA Standards of Care 2026: PCV20/PCV21 single dose, RSV at 75+ or 50-74 at risk, recombinant zoster from 50",
      "IWGDF/IDSA 2023 diabetic foot infection guideline: classification with 'O' for osteomyelitis; 1-2 weeks soft tissue, about 6 weeks osteomyelitis",
      "NTEP 2024: universal diabetes screening of TB patients; Ni-kshay Poshan support raised to Rs 1000 per month",
      "ECMM/MSG ERC 2019 mucormycosis guideline and ICMR 2021 advisory remain the reference",
      "Darwin melioidosis guideline 2020: ceftazidime or meropenem, then co-trimoxazole for 3 months",
    ],
    master: {
      heading: "Master revision table - infections in diabetes",
      columns: ["Heading", "What to write"],
      rows: [
        ["Why diabetics get infected", "Impaired **neutrophil chemotaxis, phagocytosis, oxidative burst**; complement glycation; **neuropathy, vasculopathy**, bladder stasis; DKA."],
        ["Burden in India", "Mucormycosis **about 70x global rate**; **45,000+ CAM cases in 2021**; TB-DM **15-20% of TB**; melioidosis endemic on coasts."],
        ["Mucormycosis - mechanism", "**Acidosis frees iron**, GRP78-CotH binding, ketone reductase - **angioinvasion and black necrosis**."],
        ["Mucormycosis - diagnosis", "Facial pain, black discharge, eschar, proptosis; **KOH/calcofluor: broad aseptate 90-degree hyphae**; MRI black turbinate; Honavar stage 1-4."],
        ["Mucormycosis - treatment", "Reverse DKA, stop steroids; **L-AmB 5 mg/kg/day (10 CNS)**; **urgent debridement**; step-down **isavuconazole or posaconazole** 3-6 months."],
        ["Emphysematous pyelonephritis", "Diabetic woman, sepsis; **non-contrast CT**; **Huang-Tseng 1-4**; antibiotics + **PCN/stent**; nephrectomy if class 3-4 with 2+ risk factors."],
        ["Emphysematous cholecystitis", "Older diabetic man, acalculous, Clostridium; **urgent cholecystectomy** or cholecystostomy."],
        ["Malignant otitis externa", "Elderly diabetic, **Pseudomonas**, night pain, granulation at bony-cartilaginous junction, **VII palsy**; CT, ESR, bone scan; **anti-pseudomonal 6-8 weeks**."],
        ["TB-DM", "TB risk **3x**; bidirectional screening; standard **2HRZE/4HRE** + pyridoxine; **rifampicin lowers SU and gliptins** - use metformin and insulin."],
        ["Melioidosis", "Farmer, monsoon, abscesses, pneumonia; **safety-pin GNB, gentamicin-resistant**; **ceftazidime/meropenem 2+ weeks, then co-trimoxazole 3 months**."],
        ["UTI and others", "**No treatment of asymptomatic bacteriuria**; SGLT2i - genital mycosis, **Fournier**; Klebsiella liver abscess with endophthalmitis."],
        ["Foot infection pointer", "**IWGDF/IDSA 2023**: probe-to-bone + X-ray; mild oral 1-2 weeks; osteomyelitis about 6 weeks."],
        ["Vaccines", "Influenza yearly; **PCV20/PCV21**; hepatitis B; **RZV at 50+**; RSV 75+ or 50-74 at risk; Td/Tdap."],
        ["Exam one-liners", "**Voriconazole misses Mucor**; Mucor 90 degrees, Aspergillus 45; CT diagnoses gas; co-trimoxazole prevents melioidosis relapse."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected rhino-orbital mucormycosis",
        caption: "Treat as an emergency from the first suspicion.",
        steps: [
          { label: "Diabetic with facial pain, black discharge or eschar", detail: "Often after DKA or steroids", tone: "warn" },
          { label: "Glucose, ketones, gas, electrolytes, creatinine", detail: "Start insulin; correct DKA" },
          { label: "Nasal endoscopy with KOH and calcofluor mount", detail: "Broad aseptate hyphae, 90-degree branching", tone: "decision" },
          { label: "Contrast MRI sinus, orbit, brain", detail: "Stage by Honavar 1-4" },
          { label: "Liposomal amphotericin B", detail: "5 mg/kg/day; 10 mg/kg/day if CNS" },
          { label: "Urgent surgical debridement", detail: "FESS, maxillectomy, exenteration as needed" },
          { label: "Step-down isavuconazole or posaconazole", detail: "Total 3-6 months", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Diabetes-specific infections by site",
        root: "Diabetic with severe infection",
        arms: [
          { label: "Nose, orbit, brain", tone: "warn", steps: ["Mucormycosis", "Liposomal amphotericin plus debridement"] },
          { label: "Ear", steps: ["Malignant otitis externa", "Pseudomonas; ceftazidime then ciprofloxacin 6-8 weeks"] },
          { label: "Kidney, bladder, gallbladder", steps: ["Emphysematous infections", "CT; antibiotics plus drainage or surgery"] },
          { label: "Lung, liver, spleen abscesses", steps: ["Melioidosis or TB", "Culture, CBNAAT; ceftazidime or ATT"] },
          { label: "Foot and perineum", tone: "decision", steps: ["Diabetic foot infection, Fournier gangrene", "Debride; IWGDF/IDSA antibiotics"] },
        ],
      },
      {
        kind: "compare",
        heading: "Mucormycosis vs aspergillosis",
        columns: ["Feature", "Mucormycosis", "Aspergillosis"],
        rows: [
          ["Typical host", "DKA, steroids", "Neutropenia, transplant"],
          ["Hyphae", "Broad, aseptate", "Narrow, septate"],
          ["Branching", "90 degrees", "45 degrees"],
          ["Drug", "Liposomal amphotericin B", "Voriconazole"],
          ["Voriconazole works?", "No", "Yes"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Diabetes raises infection risk about **1.5-2 times**, more with high HbA1c.",
            "Some infections are almost unique: **mucormycosis, emphysematous infections, malignant otitis externa**.",
            "India has about **70 times** the global mucormycosis rate.",
            "Diabetes triples **TB risk**; 15-20% of Indian TB patients are diabetic.",
            "**Melioidosis** is endemic in coastal India; most patients are diabetic.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "High glucose impairs **neutrophil** movement, engulfing and killing.",
            "In DKA, **acidosis frees iron** that Mucorales use to grow.",
            "**GRP78** on endothelium lets the fungus invade vessels and cause necrosis.",
            "Gas forms when bacteria **ferment high tissue glucose**.",
            "Neuropathy and vasculopathy cause **stasis and poor healing**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Mucormycosis: **facial pain**, black nasal discharge, eschar, proptosis, vision loss.",
            "Emphysematous pyelonephritis: **fever, flank pain, sepsis**, AKI.",
            "Malignant otitis externa: **night ear pain**, granulation tissue, facial palsy.",
            "TB-DM: **lower-zone** or cavitary disease; worsening glucose may be the only clue.",
            "Melioidosis: pneumonia and **multiple liver-spleen abscesses** after monsoon.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "All: glucose, **ketones**, gas, electrolytes, creatinine, blood cultures.",
            "Mucor: **KOH or calcofluor mount**, biopsy, contrast MRI.",
            "Emphysematous infections: **non-contrast CT** shows gas and extent.",
            "Ear: **CT temporal bone**, ESR and CRP, bone scan.",
            "Melioidosis: culture on **Ashdown medium**; safety-pin Gram-negative bacilli.",
            "TB-DM: **CBNAAT** for sputum; RBS for every TB patient.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Mucor: **liposomal amphotericin 5 mg/kg/day** plus urgent debridement.",
            "Emphysematous pyelonephritis: **IV antibiotics plus drainage** of obstruction.",
            "Malignant otitis externa: **anti-pseudomonal** therapy for 6-8 weeks.",
            "Melioidosis: **ceftazidime or meropenem** for at least 2 weeks.",
            "TB-DM: **2HRZE/4HRE** with pyridoxine; use metformin and insulin.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Mucor step-down: **isavuconazole or posaconazole** to complete 3-6 months.",
            "**Nephrectomy** for class 3-4 emphysematous pyelonephritis with 2 or more risk factors.",
            "Emphysematous cholecystitis: **urgent cholecystectomy** or cholecystostomy.",
            "Melioidosis eradication: **co-trimoxazole for 3 months** with folic acid.",
            "Always correct **DKA and glucose** with insulin.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Mucor mortality **40-50%**, over 80% with brain spread.",
            "Amphotericin causes **kidney injury, low potassium and magnesium**.",
            "Red flags: **proptosis**, vision loss, facial palsy, septic shock.",
            "SGLT2 inhibitors: genital infection and rare **Fournier gangrene**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer suspected mucor **the same day** to ENT, eye and neurosurgery.",
            "Daily **creatinine and potassium** on amphotericin.",
            "Follow **ESR and CRP** in malignant otitis externa.",
            "TB-DM: HbA1c at start and end of ATT.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ADA 2026** vaccines: PCV20 or PCV21, RSV, recombinant zoster.",
            "**IWGDF/IDSA 2023**: shorter antibiotic courses for foot infection.",
            "**NTEP 2024**: universal diabetes screening and Ni-kshay Poshan Rs 1000.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for diabetes-associated infections",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Liposomal amphotericin B", "5 mg/kg/day IV (10 for CNS)", "Until improving, then step-down", "AKI, low potassium and magnesium"],
            ["Isavuconazole", "200 mg 8-hourly x 6, then 200 mg daily", "To complete 3-6 months", "LFT rise"],
            ["Ceftazidime", "2 g IV 8-hourly", "MOE 6-8 weeks; melioidosis 2+ weeks", "C. difficile; adjust in CKD"],
            ["Ciprofloxacin", "750 mg oral twice daily", "MOE step-down", "Tendinopathy, QT, dysglycaemia"],
            ["Co-trimoxazole", "320/1600 mg oral twice daily (over 60 kg)", "3 months for melioidosis", "High potassium, rash, marrow suppression"],
          ],
        },
        {
          heading: "Infections and their clues",
          columns: ["Infection", "Organism", "Clue"],
          rows: [
            ["Mucormycosis", "Rhizopus", "DKA, black eschar"],
            ["Emphysematous pyelonephritis", "E. coli, Klebsiella", "Gas on CT, sepsis"],
            ["Malignant otitis externa", "Pseudomonas", "Night pain, VII palsy"],
            ["Melioidosis", "B. pseudomallei", "Farmer, abscesses"],
            ["TB-DM", "M. tuberculosis", "Lower-zone cavity"],
          ],
        },
        {
          heading: "Huang-Tseng classes",
          columns: ["Class", "Gas location", "Management"],
          rows: [
            ["1", "Collecting system", "Antibiotics, relieve obstruction"],
            ["2", "Renal parenchyma", "Antibiotics plus drainage"],
            ["3A / 3B", "Perinephric / pararenal", "Drainage; nephrectomy if 2+ risk factors"],
            ["4", "Bilateral or solitary kidney", "Bilateral drainage"],
          ],
        },
      ],
      remember: [
        "**Acid frees iron** - why DKA invites Mucor.",
        "Mucor **broad and 90 degrees**; Aspergillus narrow and 45.",
        "**Voriconazole misses Mucor**.",
        "Old diabetic, night ear pain, facial palsy: **malignant otitis externa**.",
        "Gas in the kidney: **CT diagnoses, drain first**.",
        "Melioidosis: **ceftazidime then 3 months co-trimoxazole**.",
        "Rifampicin lowers **sulfonylureas and gliptins**.",
      ],
    },
  },
};

export default revision;
