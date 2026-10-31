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
};

export default revision;
