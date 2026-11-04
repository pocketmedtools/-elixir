import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-colorectal-cancer-screening": {
    checked: "2026-10",
    updated: [
      "USPSTF 2021 and ACG 2021: average-risk screening starts at 45, continues to 75",
      "USMSTF 2020: 1-2 small tubular adenomas now 7-10 years; serrated lesion intervals added",
      "USPSTF 2022: routine aspirin for CRC prevention withdrawn; aspirin kept for Lynch syndrome",
      "ASGE/ACG 2024 quality indicators: adenoma detection rate target raised to 35%",
      "FDA 2024: blood cell-free DNA test approved but second line only (ECLIPSE 2024)",
      "NCCN 2024-2025: checkpoint inhibitors for dMMR rectal and metastatic CRC (CheckMate 8HW)",
    ],
    master: {
      heading: "Master revision table - colorectal polyps, cancer and screening",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Adenocarcinoma of colon or rectum arising over **10-15 years** from **adenomas or serrated polyps**; preventable by screening and polypectomy."],
        ["Epidemiology", "**1.9 million cases, 0.9 million deaths** a year (GLOBOCAN 2022); India low incidence but **young-onset rectal cancer** and late stage; no national CRC screening."],
        ["Risk factors", "Age, **FDR with CRC**, Lynch, FAP, MUTYH, **IBD 8+ years**, PSC, processed meat, obesity, diabetes, smoking, alcohol; Strep bovis link."],
        ["Pathways", "**CIN** (APC, KRAS, TP53) 70-85%; **MSI** (MMR loss) 15%; **serrated** (BRAF, CIMP) right colon."],
        ["Polyps", "Adenoma (tubular, villous), **SSL**, TSA are precancerous; hyperplastic and inflammatory are not; **advanced = 10 mm, villous, HGD**."],
        ["Clinical", "Right: **IDA**, mass; left: **change in bowel habit, obstruction**; rectum: **bright bleeding, tenesmus**; emergency obstruction or perforation in 20%."],
        ["Investigations", "CBC, ferritin, **colonoscopy with biopsy**, CT chest-abdomen-pelvis, **MRI pelvis for rectum**, CEA baseline, **MMR IHC on all**, RAS/BRAF/HER2 if metastatic."],
        ["Staging", "**AJCC 8th TNM**: I T1-2N0; II T3-4N0; III N+; IV M1; Dukes A-D; at least 12 nodes."],
        ["Screening", "**45-75 years**: FIT yearly, stool DNA-FIT 1-3 yearly, colonoscopy 10 yearly, CT colonography or sigmoidoscopy 5 yearly; positive test = colonoscopy."],
        ["High-risk screening", "FDR under 60 or 2 FDRs: colonoscopy from **40** every 5 years; **Lynch** 1-2 yearly from 20-25; **FAP** annually from 10-12."],
        ["Surveillance", "USMSTF 2020: 1-2 small adenomas **7-10 y**; 3-4 **3-5 y**; advanced or 5-10 **3 y**; more than 10 **1 y**; after cancer 1, 3, 5 y."],
        ["Treatment", "Colectomy with lymphadenectomy; stage III **CAPOX 3-6 months**; rectal **TNT then TME**; metastatic FOLFOX/FOLFIRI plus biologic; **MSI-H: pembrolizumab**."],
        ["Follow-up", "CEA 3-6 monthly for 2 years then 6-monthly to 5 years; CT 6-12 monthly to 5 years; survivorship care."],
        ["Exam pearls", "Positive FIT means colonoscopy; CEA not for screening; **Strep bovis means colonoscopy**; universal MMR testing; investigate young bleeders."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Who to screen and how",
        caption: "Stratify risk first; every positive non-invasive test ends in colonoscopy.",
        steps: [
          { label: "Take a three-generation family and personal history", detail: "FDR age at diagnosis, Lynch cancers, IBD, prior polyps" },
          { label: "Symptoms or alarm features?", detail: "Bleeding, IDA, mass, weight loss, change in habit", tone: "decision" },
          { label: "Yes - diagnostic colonoscopy at any age", detail: "Symptomatic FIT 10 micrograms Hb/g or more = urgent referral", tone: "warn" },
          { label: "Hereditary syndrome or IBD?", detail: "Lynch 1-2 yearly from 20-25; FAP annual from 10-12; IBD from 8 years", tone: "decision" },
          { label: "Family history FDR under 60 or 2 FDRs", detail: "Colonoscopy from 40 or 10 years before youngest, every 5 years" },
          { label: "Average risk 45-75", detail: "FIT yearly or colonoscopy every 10 years" },
          { label: "Positive FIT = colonoscopy within 6-9 months", detail: "Never repeat FIT", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Management by stage",
        caption: "Stage and molecular profile decide therapy.",
        steps: [
          { label: "Polyp / Tis: endoscopic resection", detail: "Cold snare under 10 mm; EMR or ESD for large flat lesions" },
          { label: "Stage I: surgery alone", detail: "Colectomy with 12+ nodes; local excision for selected T1" },
          { label: "Stage II: surgery, chemo only if high-risk pMMR", detail: "T4, obstruction, under 12 nodes, LVI" },
          { label: "Stage III: surgery plus CAPOX 3-6 months", detail: "Or FOLFOX 6 months; rectal - TNT then TME" },
          { label: "Stage IV: systemic therapy by biomarker", detail: "RAS wild-type left: anti-EGFR; MSI-H: pembrolizumab; resect liver mets", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Right vs left colon vs rectal cancer",
        columns: ["Feature", "Right colon", "Left colon", "Rectum"],
        rows: [
          ["Stool", "Liquid, wide lumen", "Formed, narrow lumen", "Formed"],
          ["Main symptom", "Iron-deficiency anaemia, mass", "Change in bowel habit, obstruction", "Bright bleeding, tenesmus"],
          ["Molecular", "More MSI-H, BRAF, serrated", "CIN, KRAS", "CIN"],
          ["Key staging test", "CT chest-abdomen-pelvis", "CT chest-abdomen-pelvis", "MRI pelvis plus CT"],
          ["Mimic in India", "Ileocaecal TB, amoeboma", "Diverticular phlegmon", "Haemorrhoids"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Colorectal cancer** is adenocarcinoma of colon or rectum arising over **10-15 years** from polyps.",
            "Third commonest cancer and second commonest cancer killer worldwide (**GLOBOCAN 2022**).",
            "India has lower incidence but a high share of **young-onset rectal cancer** presenting late.",
            "India has **no national CRC screening**; NP-NCD covers oral, breast and cervical cancer only.",
            "Five-year survival falls from **over 90% (stage I)** to **10-15% (stage IV)**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Age** is the strongest factor; screening now starts at **45**.",
            "**First-degree relative** with CRC doubles risk, more if diagnosed under 60.",
            "**Lynch syndrome** (about 3%) and **FAP** (under 1%) are the main inherited forms.",
            "**IBD** over 8 years, especially with **PSC**, needs surveillance colonoscopy.",
            "Processed meat, obesity, diabetes, smoking and alcohol raise risk; fibre and exercise protect.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**CIN pathway**: APC loss, then KRAS, then TP53 - the Vogelstein sequence.",
            "**MSI pathway**: mismatch repair loss, germline in Lynch or MLH1 methylation in sporadic cases.",
            "**Serrated pathway**: BRAF V600E and CIMP in flat right-sided sessile serrated lesions.",
            "**Advanced adenoma** means 10 mm or more, villous component or high-grade dysplasia.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Right colon**: iron-deficiency anaemia, fatigue, mass, normal bowel habit.",
            "**Left colon**: change in bowel habit, colicky pain, obstruction, blood mixed with stool.",
            "**Rectum**: bright red bleeding, tenesmus, mucus; often mislabelled as piles.",
            "Look for pallor, mass, nodular liver, **DRE findings** and Virchow node.",
            "**Unexplained IDA** in men or post-menopausal women needs upper and lower endoscopy.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**FIT** detects human globin; one sample, no diet restriction.",
            "**Colonoscopy with biopsy** is gold standard; synchronous cancer in 3-5%.",
            "Stage with **CT chest-abdomen-pelvis**; add **MRI pelvis** for rectal cancer.",
            "**CEA** is a baseline and follow-up marker, never a screening test.",
            "**MMR IHC on every CRC**; RAS, BRAF, HER2 testing if metastatic; DPYD before 5-FU.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**TNM (AJCC 8th)**: T1 submucosa, T2 muscularis propria, T3 beyond, T4 serosa or organ.",
            "**N1** 1-3 nodes, **N2** 4 or more; at least **12 nodes** must be examined.",
            "**Dukes**: A wall, B through wall, C nodes, D distant spread.",
            "**Paris** shape and **NICE** NBI types; NICE type 3 means deep invasion, go to surgery.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Screen average risk **45-75**: **FIT yearly** or **colonoscopy every 10 years**.",
            "**Cold snare** polyps under 10 mm; EMR or ESD for large flat lesions.",
            "Colon cancer: **colectomy with lymphadenectomy**; stage III adds **CAPOX 3-6 months**.",
            "Rectal cancer: **total neoadjuvant therapy** then total mesorectal excision.",
            "Split-dose **PEG 4 L** prep; avoid sodium phosphate in CKD and elderly.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Metastatic: **FOLFOX or FOLFIRI** plus bevacizumab or anti-EGFR (RAS wild-type, left-sided).",
            "**MSI-H/dMMR**: pembrolizumab first line; dostarlimab can spare surgery in dMMR rectal cancer.",
            "**BRAF V600E**: encorafenib plus cetuximab, now with FOLFOX first line (BREAKWATER 2025).",
            "Resect **liver or lung metastases** when feasible: 40-50% five-year survival.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Surveillance **USMSTF 2020**: 1-2 small adenomas 7-10 years; advanced adenoma 3 years.",
            "After cancer: colonoscopy at **1, 3 and 5 years**; CEA 3-6 monthly for 2 years.",
            "Refer to **genetics** for dMMR tumours, 10+ adenomas or CRC under 50.",
            "Lynch: colonoscopy **every 1-2 years** from 20-25; FAP: colectomy by mid-20s.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**USPSTF 2021**: screening starts at **45**, not 50.",
            "**USPSTF 2022**: no routine aspirin for prevention; Lynch is the exception.",
            "**ASGE/ACG 2024**: adenoma detection rate target raised to **35%**.",
            "**FDA 2024** blood test detects only about 13% of advanced adenomas; second line only.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in colorectal cancer",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["PEG-electrolyte prep", "4 L oral split dose", "Once before colonoscopy", "Bloating; avoid in obstruction"],
            ["Capecitabine", "1000 mg/m2 oral BD days 1-14 every 3 weeks (CAPOX)", "3-6 months adjuvant", "Hand-foot syndrome, diarrhoea; DPD deficiency; renal dose"],
            ["Oxaliplatin", "130 mg/m2 IV 3-weekly or 85 mg/m2 IV 2-weekly", "3-6 months adjuvant", "Cold-induced cumulative neuropathy"],
            ["5-FU plus leucovorin", "400 mg/m2 bolus then 2400 mg/m2 over 46 h, 2-weekly", "6 months adjuvant", "Mucositis, neutropenia, coronary spasm"],
            ["Irinotecan", "180 mg/m2 IV 2-weekly", "Until progression", "Diarrhoea, neutropenia; UGT1A1*28"],
            ["Bevacizumab", "5 mg/kg IV 2-weekly", "With chemo in metastatic", "Hypertension, bleeding, perforation; stop 6 weeks pre-surgery"],
            ["Cetuximab / panitumumab", "500 mg/m2 or 6 mg/kg IV 2-weekly", "RAS wild-type metastatic", "Acneiform rash, low magnesium"],
            ["Pembrolizumab", "200 mg IV 3-weekly", "Up to 2 years, MSI-H", "Immune colitis, hepatitis, thyroiditis"],
          ],
        },
        {
          heading: "USMSTF 2020 surveillance intervals",
          columns: ["Baseline finding", "Next colonoscopy"],
          rows: [
            ["Normal", "10 years"],
            ["1-2 tubular adenomas under 10 mm", "7-10 years"],
            ["3-4 adenomas under 10 mm", "3-5 years"],
            ["5-10 adenomas or advanced adenoma", "3 years"],
            ["More than 10 adenomas", "1 year, genetics referral"],
            ["SSL 10 mm or more, with dysplasia, or TSA", "3 years"],
            ["Piecemeal EMR 20 mm or more", "6 months"],
          ],
        },
        {
          heading: "Lynch syndrome vs FAP",
          columns: ["Feature", "Lynch", "FAP"],
          rows: [
            ["Gene", "MLH1, MSH2, MSH6, PMS2, EPCAM", "APC"],
            ["Polyps", "Few, fast progression", "100 to thousands"],
            ["CRC risk", "Up to 50-60%, right-sided", "Near 100% by 40"],
            ["Other cancers", "Endometrium, ovary, stomach, urothelium", "Duodenum, desmoid, thyroid"],
            ["Plan", "Colonoscopy 1-2 yearly from 20-25", "Annual from 10-12; colectomy by mid-20s"],
          ],
        },
      ],
      remember: [
        "**45 to 75**: FIT yearly or colonoscopy 10 yearly.",
        "**Right bleeds, left blocks, rectum bleeds red.**",
        "**Lynch 3-2-1**: 3 relatives, 2 generations, 1 under 50.",
        "**Positive FIT = colonoscopy**, never repeat FIT.",
        "**CEA follows, never finds.**",
        "**Strep bovis endocarditis means colonoscopy.**",
        "**Advanced adenoma = 10 mm, villous or HGD**: 3-year recall.",
        "Young Indian with rectal bleeding: **DRE and colonoscopy**, not piles cream.",
      ],
    },
  },
};

export default revision;
