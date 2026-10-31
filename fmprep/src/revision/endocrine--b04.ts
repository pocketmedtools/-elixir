import type { RevisionSet } from "./index";

const revision: RevisionSet = {};

revision["endocrine-thyroid-function-tests"] = {
  checked: "2026-10",
  updated: [
    "ATA 2017 pregnancy: trimester-specific TSH ranges; first-trimester upper limit about 4.0 mIU/L if no local range.",
    "FDA biotin safety communication (2017, updated 2019): ask about biotin before every thyroid immunoassay.",
    "TRUST 2017 and BMJ Rapid Recommendation 2019: do not treat mild subclinical hypothyroidism (TSH below 10) in older adults.",
    "ESMO 2022 and ASCO 2021: TSH and FT4 every 4-6 weeks on checkpoint inhibitors.",
    "ATA 2025 DTC: thyroglobulin always with anti-Tg antibodies in cancer follow-up.",
  ],
  master: {
    heading: "Master revision table - Thyroid function tests",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "TSH, FT4, FT3 classify thyroid status; antibodies, uptake and imaging give the **cause**."],
      ["Physiology", "T4 80% of secretion; 80% of T3 from **deiodination**; over 99.9% of T4 protein-bound (TBG)."],
      ["Why TSH first", "**Log-linear**: 2-fold FT4 change gives about 100-fold TSH change; fails in central disease and early treatment."],
      ["Reference values", "TSH 0.4-4.0 mIU/L (about 7.5 over 80 years); FT4 0.8-1.8 ng/dL; first-trimester TSH upper limit about 4.0."],
      ["Patterns", "Low TSH high FT4 - thyrotoxicosis; high TSH low FT4 - primary hypo; low/normal TSH low FT4 - **central**; high FT4 non-suppressed TSH - interference, TSHoma, RTH."],
      ["Subclinical grades", "Hypo: TSH 4.5-9.9 vs 10 or more; hyper: TSH 0.1-0.4 vs below 0.1."],
      ["Antibodies", "Anti-TPO 90% Hashimoto, 10-15% normal people; **TRAb** 97% sensitive, 99% specific for Graves."],
      ["Uptake", "High - Graves, TMNG, toxic adenoma; low - thyroiditis, exogenous, iodine, struma ovarii; T3:T4 ratio over 20 favours Graves."],
      ["Sick euthyroid", "Low T3, high **rT3**; low T4 in severe illness; TSH up to about 20 in recovery; do not treat."],
      ["Interference", "**Biotin** mimics Graves; heterophile antibodies and macro-TSH raise TSH; heparin raises FT4 in vitro."],
      ["Drugs", "Steroids, dopamine lower TSH; oestrogen raises TBG; amiodarone raises FT4 and rT3; PPI, calcium, iron reduce LT4 absorption."],
      ["Monitoring", "LT4: TSH 6-8 weeks after change; antithyroid drugs: FT4/FT3 first 3 months; central: FT4 upper half."],
      ["India", "Hypothyroidism about 11%, anti-TPO about 22% (8-city survey); universal antenatal TSH screening (MoHFW 2014)."],
      ["Viva pitfalls", "Treating a single TSH; thyroxine before cortisol in central disease; titrating carbimazole on TSH; missing biotin."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Reading a TFT report",
      steps: [
        { label: "Check context first", detail: "Illness, pregnancy, age, drugs, biotin, LT4 timing", tone: "warn" },
        { label: "Look at TSH", detail: "Low, normal or high against lab range" },
        { label: "Add FT4 (and FT3 if TSH low)", detail: "Concordant or discordant pattern?", tone: "decision" },
        { label: "Concordant pattern", detail: "Primary hyper- or hypothyroidism, overt or subclinical", tone: "good" },
        { label: "Discordant pattern", detail: "Think pituitary, illness, drugs or assay", tone: "warn" },
        { label: "Repeat mild abnormality", detail: "In 6-12 weeks before treating" },
        { label: "Find the cause", detail: "Anti-TPO for hypo; TRAb or uptake for thyrotoxicosis" },
      ],
    },
    {
      kind: "branch",
      heading: "Low TSH: which cause?",
      root: "Suppressed TSH with high FT4 or FT3",
      arms: [
        { label: "TRAb positive or diffuse high uptake", tone: "decision", steps: ["Graves disease", "Eye signs, bruit"] },
        { label: "Patchy or single hot nodule", steps: ["Toxic multinodular goitre", "Toxic adenoma"] },
        { label: "Low uptake, high thyroglobulin", steps: ["Subacute, painless or postpartum thyroiditis", "Iodine or amiodarone type 2"] },
        { label: "Low uptake, low thyroglobulin", tone: "warn", steps: ["Exogenous thyroid hormone"] },
        { label: "Clinically euthyroid, on supplements", tone: "warn", steps: ["Biotin interference", "Stop and retest"] },
      ],
    },
    {
      kind: "compare",
      heading: "Central hypothyroidism vs sick euthyroid vs interference",
      columns: ["Feature", "Central hypothyroidism", "Non-thyroidal illness", "Assay interference"],
      rows: [
        ["Setting", "Pituitary tumour, Sheehan, apoplexy", "ICU, sepsis, starvation", "Well patient, supplements"],
        ["TSH", "Low, normal or mildly high", "Normal or low; high in recovery", "Any, does not fit"],
        ["FT4", "Low", "Normal or low", "Often high"],
        ["T3 and rT3", "Low T3, normal rT3", "Low T3, high rT3", "Variable"],
        ["Key test", "Cortisol, prolactin, MRI", "Repeat after recovery", "Second platform, stop biotin"],
        ["Treat?", "Yes, hydrocortisone first", "No", "No"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**TSH** is the first-line test; FT4 and FT3 confirm and grade.",
          "Thyroid makes mostly **T4**; most T3 comes from conversion in tissues.",
          "Over 99.9% of T4 is **protein-bound**; only free hormone works.",
          "India: hypothyroidism in about **11%** of adults and anti-TPO in about 22%.",
          "Subclinical hypothyroidism is the commonest abnormality, about **8%**.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "TRH drives TSH, TSH drives the gland, T3 feeds back.",
          "**Log-linear** rule: 2-fold FT4 change gives about 100-fold TSH change.",
          "TSH takes **6-8 weeks** to settle after any dose change.",
          "In **central** disease TSH may be normal but inactive; follow FT4.",
          "Illness blocks D1 and boosts D3, so T3 falls and **reverse T3** rises.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "Low TSH, high FT4: **overt thyrotoxicosis**; low TSH, normal FT4, high FT3: T3 toxicosis.",
          "High TSH, low FT4: **primary hypothyroidism**; high TSH, normal FT4: subclinical.",
          "Low or normal TSH with low FT4: **central** hypothyroidism or severe illness.",
          "High FT4 with unsuppressed TSH: **interference**, TSHoma or thyroid hormone resistance.",
          "Grade subclinical hypo by **TSH 10**; subclinical hyper by **TSH 0.1**.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "Screen with **TSH alone**; add FT4 when abnormal or pituitary disease suspected.",
          "**TRAb** is the quickest way to confirm Graves.",
          "**Uptake** high in Graves and nodules; low in thyroiditis and exogenous hormone.",
          "**Low thyroglobulin** with low uptake means factitious thyrotoxicosis.",
          "Doppler: high flow in Graves, low flow in destructive thyroiditis.",
          "Central disease: check **cortisol**, prolactin, gonadotrophins and pituitary MRI.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "**Repeat** a mild abnormality in 6-12 weeks before treating.",
          "Treat subclinical hypo if **TSH 10 or more**, or symptoms, TPO positive or pregnancy.",
          "Avoid treating mild TSH rises in people over 65-70.",
          "On levothyroxine check TSH **6-8 weeks** after a dose change.",
          "On carbimazole follow **FT4 and FT3**, not TSH, for 3 months.",
        ],
      },
      {
        title: "Inpatient / emergency care",
        points: [
          "Do not test acutely ill patients unless thyroid disease is likely.",
          "**Sick euthyroid**: low T3, high rT3; low T4 means poor prognosis.",
          "Do **not** give T4 or T3 for non-thyroidal illness.",
          "TSH may rise to about 20 during recovery; retest after 4-6 weeks.",
          "Dopamine and steroids in ICU **suppress TSH**.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Elderly**: TSH up to about 7.5 can be normal over 80.",
          "**Pregnancy**: use trimester ranges; first-trimester upper limit about 4.0.",
          "Pregnancy doubles **TBG**, so total T4 rises 1.5 times.",
          "India screens every pregnant woman with **TSH** at the first visit.",
          "**Newborn** heel-prick TSH after 48-72 hours, because of the birth surge.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Biotin** gives low TSH and high FT4 and TRAb, mimicking Graves.",
          "**Heterophile antibodies** and macro-TSH give a falsely high TSH.",
          "**Heparin** falsely raises FT4 in the test tube.",
          "Thyroxine before cortisol in central disease can cause **adrenal crisis**.",
          "**Amiodarone** raises FT4 and rT3 and briefly raises TSH.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "Refer **discordant** results and suspected central disease.",
          "TPO positive and euthyroid: TSH every **1-2 years**.",
          "Amiodarone: TFT every **3-6 months**; lithium: every 6 months.",
          "Checkpoint inhibitors: TSH and FT4 every **4-6 weeks**.",
          "Stable levothyroxine: TSH every **6-12 months**.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ATA 2017**: trimester-specific TSH ranges replace the old 2.5 cut-off.",
          "**FDA**: screen for biotin before thyroid immunoassays.",
          "**TRUST**: no benefit from treating mild subclinical hypothyroidism in older adults.",
          "**ATA 2025 DTC**: measure anti-Tg with every thyroglobulin.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs that alter thyroid tests",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Biotin", "5-10 mg oral (supplements); 100-300 mg (neurology)", "Stop at least 2-3 days before testing", "Falsely low TSH, high FT4, FT3, TRAb"],
          ["Levothyroxine", "1.6 mcg/kg/day oral, empty stomach", "Check TSH 6-8 weeks after change", "FT4 high for hours if taken before sample"],
          ["Amiodarone", "200 mg/day oral (75 mg iodine per tablet)", "TFT baseline then 3-6 monthly", "High FT4, rT3; AIH or AIT"],
          ["Glucocorticoids, dopamine", "Any therapeutic dose", "During therapy", "Suppress TSH"],
          ["Heparin", "IV or flush", "Sample before dose", "Falsely high FT4 in vitro"],
          ["Phenytoin, carbamazepine", "Usual doses", "Long term", "Low measured FT4; raise LT4 dose"],
        ],
      },
      {
        heading: "TFT pattern classification",
        columns: ["TSH", "FT4", "Meaning"],
        rows: [
          ["Low", "High", "Overt thyrotoxicosis"],
          ["Low", "Normal (FT3 high)", "T3 toxicosis"],
          ["Low", "Normal", "Subclinical hyperthyroidism"],
          ["High", "Low", "Primary hypothyroidism"],
          ["High", "Normal", "Subclinical hypothyroidism"],
          ["Low or normal", "Low", "Central hypothyroidism or NTI"],
          ["Normal or high", "High", "Interference, TSHoma, RTH"],
        ],
      },
      {
        heading: "Low versus high uptake thyrotoxicosis",
        columns: ["Feature", "High uptake", "Low uptake"],
        rows: [
          ["Mechanism", "Excess synthesis", "Destruction or external source"],
          ["Examples", "Graves, TMNG, toxic adenoma", "Thyroiditis, exogenous, iodine, AIT2"],
          ["T3:T4 ratio", "Above 20", "Below 20"],
          ["Doppler", "Increased flow", "Reduced flow"],
          ["Antithyroid drugs", "Work", "Useless"],
        ],
      },
    ],
    remember: [
      "**2 x FT4 = 100 x TSH**: the log-linear rule.",
      "TSH misleads in **pituitary disease, early treatment and acute illness**.",
      "**Biotin mimics Graves** - ask about hair supplements.",
      "Low uptake causes **TIES**: Thyroiditis, Iodine, Exogenous, Struma ovarii.",
      "**Steroids before thyroxine** in central hypothyroidism.",
      "Sick euthyroid: **T3 down, rT3 up**; do not treat.",
      "First-trimester TSH upper limit about **4.0**; over-80 about 7.5.",
    ],
  },
};

revision["endocrine-graves-disease"] = {
  checked: "2026-10",
  updated: [
    "EUGOGO 2021: IV methylprednisolone 4.5 g plus mycophenolate is first line for active moderate-to-severe orbitopathy.",
    "ATA/ETA 2022 TED consensus: teprotumumab a preferred option where available.",
    "FDA teprotumumab label 2023: indication regardless of activity; hearing impairment warning.",
    "ETA 2018 Graves with later RCTs: long-term low-dose methimazole accepted as alternative to ablation; GREAT score for relapse.",
    "ETA 2022 paediatric Graves: methimazole only, PTU avoided in children.",
  ],
  master: {
    heading: "Master revision table - Graves disease and thyroid eye disease",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Autoimmune hyperthyroidism from **stimulating TRAb**; 60-80% of hyperthyroidism; F:M 5-10:1."],
      ["Risk factors", "HLA-DR3, CTLA-4, PTPN22; **smoking** (TED 5-fold), stress, iodine, postpartum, alemtuzumab."],
      ["Mechanism", "TRAb stimulate TSHR; orbital fibroblasts via **TSHR/IGF-1R** make GAGs and fat."],
      ["Features", "Weight loss with hyperphagia, tremor, AF, diffuse goitre with **bruit**, proptosis, pretibial myxoedema."],
      ["Investigations", "Low TSH, high FT4/FT3; **TRAb**; uptake if TRAb negative; baseline CBC and LFT."],
      ["Drugs", "Propranolol; **carbimazole 20-40 mg**, titrate, 12-18 months; PTU in first trimester and storm."],
      ["Drug toxicity", "**Agranulocytosis** 0.2-0.5% - stop, CBC, never switch; PTU liver necrosis; embryopathy weeks 6-10."],
      ["Radioiodine", "10-15 mCi; not in pregnancy, breastfeeding or active moderate-severe TED; steroid cover in smokers."],
      ["Surgery", "Total thyroidectomy after Lugol iodine 10 days; hypoparathyroidism under 2%, RLN palsy under 1%."],
      ["TED assessment", "**CAS 3 of 7 = active**; EUGOGO mild, moderate-severe, sight-threatening."],
      ["TED treatment", "Mild: selenium; moderate-severe active: **IVMP 4.5 g + mycophenolate**; DON: IVMP pulses then decompression."],
      ["Pregnancy", "PTU first trimester; TRAb early and 18-22 weeks; no RAI."],
      ["Follow-up", "FT4/FT3 4-6 weekly; after stopping monthly x 6; lifelong yearly TSH."],
      ["Viva pitfalls", "RAI in active TED smoker; switching thionamide after agranulocytosis; routine PTU."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Diagnosing Graves disease",
      steps: [
        { label: "Symptoms of thyrotoxicosis", detail: "Weight loss, tremor, palpitation, heat intolerance" },
        { label: "TSH low, FT4/FT3 high", detail: "Exclude biotin; grade by FT4 multiple", tone: "decision" },
        { label: "Eye signs or diffuse goitre with bruit", detail: "Clinically Graves", tone: "good" },
        { label: "Otherwise check TRAb", detail: "Positive confirms Graves" },
        { label: "TRAb negative", detail: "Uptake scan: patchy, hot nodule or low uptake", tone: "warn" },
        { label: "Baseline CBC and LFT", detail: "Before starting carbimazole" },
      ],
    },
    {
      kind: "ladder",
      heading: "Treatment ladder for Graves orbitopathy (EUGOGO 2021)",
      steps: [
        { label: "All patients", detail: "Stop smoking, euthyroidism, lubricants, prisms", tone: "good" },
        { label: "Mild active", detail: "Selenium 100 mcg twice daily for 6 months" },
        { label: "Moderate-severe active (CAS 3 or more)", detail: "IVMP 4.5 g over 12 weeks plus mycophenolate 24 weeks", tone: "decision" },
        { label: "Second line", detail: "Teprotumumab, repeat IVMP, radiotherapy, ciclosporin, rituximab, tocilizumab" },
        { label: "Sight-threatening (DON)", detail: "IVMP 0.5-1 g x 3 days; decompression if poor response in 2 weeks", tone: "warn" },
        { label: "Inactive disease", detail: "Decompression, then squint, then lid surgery" },
      ],
    },
    {
      kind: "compare",
      heading: "Drugs vs radioiodine vs surgery",
      columns: ["Feature", "Antithyroid drugs", "Radioiodine", "Thyroidectomy"],
      rows: [
        ["Choose for", "First episode, mild, pregnancy, children", "Relapse, elderly, cardiac", "Large goitre, nodule, active TED"],
        ["Outcome", "About 50% remission", "80-90% cured, mostly hypothyroid", "Cure, always hypothyroid"],
        ["Main risk", "Agranulocytosis, relapse", "TED flare, hypothyroidism", "Hypocalcaemia, nerve palsy"],
        ["Avoid in", "Prior severe reaction", "Pregnancy, active TED", "High surgical risk"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "Graves is **autoimmune hyperthyroidism** caused by stimulating TSH-receptor antibodies.",
          "It causes **60-80%** of hyperthyroidism; women are affected 5-10 times more.",
          "**Orbitopathy** is visible in 25-40%; only about 5% is moderate-to-severe.",
          "Pretibial myxoedema in 1-4%, almost always with eye disease.",
        ],
      },
      {
        title: "Causes and risk factors",
        points: [
          "Genes: **HLA-DR3, CTLA-4, PTPN22**.",
          "**Smoking** raises eye disease risk about 5-fold and blunts treatment.",
          "Triggers: stress, iodine, postpartum period, **alemtuzumab**.",
          "**Radioiodine** can flare active eye disease.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "**TRAb** mimic TSH, giving a diffuse vascular goitre.",
          "Excess T3 raises heat production and **beta-receptor** numbers.",
          "Orbital fibroblasts make **glycosaminoglycans** and fat; muscles swell in a fixed orbit.",
          "Inferior and medial recti go first, so **upgaze** is lost early.",
          "Eye disease is active for 6-18 months, then burns out (**Rundle curve**).",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "**Weight loss with good appetite**, tremor, palpitation, sweating, loose stools.",
          "Diffuse goitre with a **bruit**, AF, proximal myopathy.",
          "Lid signs: **Dalrymple**, von Graefe, Stellwag, Joffroy, Moebius.",
          "Proptosis, chemosis, diplopia; **colour vision loss** means optic neuropathy.",
          "Elderly may be **apathetic**; Asian men may get periodic paralysis.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**Low TSH** with high FT4 or FT3.",
          "**TRAb** confirms Graves; uptake scan only if TRAb negative or nodule.",
          "**CBC and LFT** before starting carbimazole.",
          "ECG for AF; orbit MRI or CT if asymmetric or optic neuropathy.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "**Propranolol** 10-40 mg three to four times daily for symptoms.",
          "**Carbimazole** 20-40 mg daily, titrated to 5-10 mg, for 12-18 months.",
          "Check **FT4 and FT3** every 4-6 weeks; ignore TSH early.",
          "**PTU** only in first trimester, storm or minor reaction.",
          "Warn: **fever or sore throat** means stop and get a blood count.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "Relapse in about **50%**; options are RAI, surgery or long-term low-dose methimazole.",
          "**RAI** 10-15 mCi; avoid in pregnancy and active moderate-severe eye disease.",
          "Give **prednisolone cover** with RAI in smokers or mild active eye disease.",
          "**Thyroidectomy** after 10 days of Lugol iodine; lifelong levothyroxine.",
          "Eye disease: **IVMP 4.5 g plus mycophenolate** if active and moderate-to-severe.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Pregnancy**: PTU in first trimester; TRAb early and at 18-22 weeks.",
          "No pregnancy for **6 months** after radioiodine.",
          "**Breastfeeding**: methimazole up to 20 mg daily is safe.",
          "**Children**: methimazole only; avoid PTU.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Agranulocytosis**: stop drug, admit if febrile, never switch thionamide.",
          "**PTU liver failure**: stop at first jaundice.",
          "**Optic neuropathy**: same-day IV methylprednisolone and ophthalmology.",
          "Untreated disease causes **AF, stroke, osteoporosis** and storm.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**EUGOGO 2021**: mycophenolate added to IV steroids as first line.",
          "**Teprotumumab**: preferred where available; watch hearing and glucose (FDA 2023).",
          "**Long-term methimazole** accepted as an alternative to ablation.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs in Graves disease",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Carbimazole", "20-40 mg oral daily; maintenance 5-10 mg", "12-18 months or long-term low dose", "Agranulocytosis, rash, cholestasis, embryopathy"],
          ["Propylthiouracil", "100-150 mg oral three times daily", "First trimester, storm", "Liver necrosis, ANCA vasculitis"],
          ["Propranolol", "10-40 mg oral three to four times daily", "Until euthyroid", "Asthma, bradycardia"],
          ["Lugol iodine", "5-7 drops oral three times daily", "10 days before surgery", "Rash, escape after 2 weeks"],
          ["Radioiodine", "10-15 mCi oral once", "Single dose", "Pregnancy, active eye disease"],
          ["IV methylprednisolone", "0.5 g weekly x 6, then 0.25 g weekly x 6", "12 weeks", "Liver injury, hyperglycaemia; max 8 g"],
          ["Mycophenolate sodium", "0.72 g oral daily", "24 weeks", "Cytopenia, infection, teratogenic"],
          ["Teprotumumab", "10 mg/kg IV, then 20 mg/kg 3-weekly", "8 infusions", "Hearing loss, hyperglycaemia, IBD flare"],
        ],
      },
      {
        heading: "Orbitopathy severity (EUGOGO)",
        columns: ["Grade", "Features", "Treatment"],
        rows: [
          ["Mild", "Lid retraction under 2 mm, proptosis under 3 mm, no constant diplopia", "Local care, selenium"],
          ["Moderate-to-severe", "Lid retraction 2 mm or more, proptosis 3 mm or more, diplopia", "IVMP plus mycophenolate if active"],
          ["Sight-threatening", "Optic neuropathy or corneal breakdown", "IVMP pulses, decompression"],
        ],
      },
      {
        heading: "Clinical Activity Score (one point each)",
        columns: ["Item", "Type"],
        rows: [
          ["Spontaneous retrobulbar pain", "Pain"],
          ["Pain on eye movement", "Pain"],
          ["Eyelid redness", "Redness"],
          ["Conjunctival redness", "Redness"],
          ["Eyelid swelling", "Swelling"],
          ["Chemosis", "Swelling"],
          ["Caruncle swelling", "Swelling"],
        ],
      },
    ],
    remember: [
      "**Lid lag** in any thyrotoxicosis; **proptosis** only in Graves.",
      "**CAS 3 of 7** means active; treat activity with immunosuppression.",
      "**Fever + sore throat on carbimazole** = blood count today.",
      "**PTU for the first trimester and storm**; carbimazole otherwise.",
      "Eye surgery order: **decompression, squint, lids**.",
      "**Smoker + active eye disease**: avoid RAI or give steroid cover.",
      "IV methylprednisolone ceiling: **8 g per course**.",
    ],
  },
};

revision["endocrine-thyroiditis"] = {
  checked: "2026-10",
  updated: [
    "ASCO 2021 and ESMO 2022 irAE guidance: continue checkpoint inhibitor in grade 1-2 thyroiditis; TSH and FT4 every 4-6 weeks.",
    "ATA 2017 pregnancy: postpartum thyroiditis - propranolol, selective levothyroxine, yearly TSH.",
    "ETA 2018 amiodarone: AIT type 1 methimazole, type 2 prednisolone, early surgery if cardiac decline.",
    "Post-COVID and post-vaccine subacute thyroiditis recognised (reports 2020-2023); treatment unchanged.",
    "ACR/EULAR 2019 IgG4-RD criteria applied to Riedel and fibrosing thyroiditis.",
  ],
  master: {
    heading: "Master revision table - Thyroiditis",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Thyroid inflammation; destructive forms give **low-uptake thyrotoxicosis**, then hypothyroid phase, then recovery."],
      ["Classification", "Painful (subacute, suppurative); painless (silent, postpartum, drugs); chronic (Hashimoto, Riedel/IgG4)."],
      ["Mechanism", "Release of **stored** hormone and thyroglobulin; no new synthesis, so uptake below 5%."],
      ["Subacute", "Post-viral, HLA-B35; pain to the ear, tender goitre, **ESR above 50**; NSAID or prednisolone 40 mg taper."],
      ["Painless and postpartum", "Anti-TPO positive; PPT toxic at 1-4 months, hypo at 3-8 months; up to 50% permanent hypo."],
      ["Hashimoto", "Anti-TPO 90%; bosselated goitre; Hurthle cells; lymphoma risk; levothyroxine when hypothyroid."],
      ["Investigations", "Low TSH, T3:T4 below 20, low uptake, **TRAb negative**, high thyroglobulin, Doppler low flow."],
      ["Treatment", "**Propranolol**; no antithyroid drugs; levothyroxine in hypo phase if TSH above 10 or symptomatic."],
      ["Amiodarone", "AIT1 (synthesis, flow up) - methimazole; AIT2 (destruction, no flow) - prednisolone; AIH - add LT4."],
      ["Lithium", "Hypothyroidism up to 20%; continue lithium, add levothyroxine; TSH 6-monthly."],
      ["Checkpoint inhibitors", "Toxic at 4-12 weeks, then permanent hypo in two-thirds; continue drug; low TSH + low FT4 = hypophysitis."],
      ["Suppurative", "Left pyriform sinus fistula; IV antibiotics, drainage, fistula excision."],
      ["Follow-up", "TFT 2-4 weekly in toxic phase; yearly TSH lifelong after recovery."],
      ["Viva pitfalls", "Carbimazole for thyroiditis; uptake scan in breastfeeding; stopping lithium."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Thyrotoxicosis: is it thyroiditis?",
      steps: [
        { label: "Low TSH, high FT4", detail: "Exclude biotin" },
        { label: "Neck pain and tender goitre?", detail: "ESR above 50 suggests subacute", tone: "decision" },
        { label: "Check TRAb", detail: "Positive means Graves", tone: "decision" },
        { label: "TRAb negative, no nodule", detail: "Uptake below 5% or low Doppler flow" },
        { label: "Destructive thyroiditis", detail: "Beta-blocker; no carbimazole", tone: "good" },
        { label: "Low thyroglobulin", detail: "Think exogenous hormone instead", tone: "warn" },
      ],
    },
    {
      kind: "ladder",
      heading: "Treating subacute thyroiditis",
      steps: [
        { label: "Propranolol for thyrotoxic symptoms", detail: "10-40 mg three to four times daily" },
        { label: "Mild pain: NSAID", detail: "Ibuprofen 400-600 mg three times daily, 1-2 weeks" },
        { label: "Severe pain or NSAID failure", detail: "Prednisolone 40 mg 1-2 weeks, taper over 2-4 weeks", tone: "decision" },
        { label: "No response in 48-72 hours", detail: "Rethink diagnosis: haemorrhage, cancer, abscess", tone: "warn" },
        { label: "Hypothyroid phase", detail: "Levothyroxine if symptomatic or TSH above 10; trial off later" },
        { label: "Recovery", detail: "Yearly TSH", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "Subacute vs painless/postpartum vs Graves",
      columns: ["Feature", "Subacute", "Painless / postpartum", "Graves"],
      rows: [
        ["Pain", "Severe, to ear", "None", "None"],
        ["ESR", "High", "Normal", "Normal"],
        ["Uptake", "Very low", "Very low", "High"],
        ["TRAb", "Negative", "Negative", "Positive"],
        ["Anti-TPO", "Usually negative", "Positive", "Often positive"],
        ["Treatment", "NSAID or prednisolone", "Beta-blocker", "Carbimazole, RAI, surgery"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "Thyroiditis is **inflammation** of the thyroid.",
          "Destructive forms are **triphasic**: toxic, then hypo, then recovery.",
          "Subacute peaks in women aged **40-50**; incidence about 5 per 100,000.",
          "Postpartum thyroiditis affects about **5-8%** of mothers.",
          "Hashimoto is the commonest cause of **hypothyroidism** in India today.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "**Painful**: subacute, acute suppurative, radiation.",
          "**Painless**: silent, postpartum, amiodarone type 2, lithium, checkpoint inhibitors.",
          "**Chronic**: Hashimoto, atrophic, Riedel and IgG4 disease.",
          "**AIT type 1** is extra synthesis; **type 2** is destruction.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "Damaged follicles **leak stored hormone**; no new hormone is made.",
          "So **uptake is below 5%** and carbimazole does nothing.",
          "Stores run out in 3-6 weeks, then a **hypothyroid** phase follows.",
          "Subacute shows **giant-cell granulomas**; Hashimoto shows lymphoid follicles.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "Subacute: **neck pain to the ear**, fever, very tender goitre.",
          "Postpartum: toxic at **1-4 months**, hypo at 3-8 months.",
          "Painless forms are often mistaken for **stress or new-baby fatigue**.",
          "Amiodarone thyrotoxicosis may show only as **new AF or VT**.",
          "Checkpoint thyroiditis appears **4-12 weeks** after starting therapy.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**ESR above 50** in subacute; normal in painless forms.",
          "**TRAb negative** separates thyroiditis from Graves.",
          "**Uptake below 5%**; avoid the scan in pregnancy and breastfeeding.",
          "**T3:T4 ratio below 20** favours destruction.",
          "Doppler: **no flow** in AIT2, increased flow in AIT1.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "**Propranolol** for palpitation and tremor.",
          "**Never carbimazole** for destructive thyroiditis.",
          "Subacute mild pain: **NSAIDs** for 1-2 weeks.",
          "Severe pain: **prednisolone 40 mg**, taper over 2-4 weeks.",
          "Hypo phase: levothyroxine if symptoms, **TSH above 10**, breastfeeding or planning pregnancy.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "**AIT1**: methimazole 40-60 mg daily.",
          "**AIT2**: prednisolone 30-40 mg, taper over about 3 months.",
          "**Lithium** hypothyroidism: keep lithium, add levothyroxine.",
          "**Checkpoint** thyroiditis: continue therapy, beta-blocker, then levothyroxine.",
          "**Suppurative**: IV antibiotics, drainage, later fistula surgery.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Breastfeeding**: propranolol is preferred; use TRAb instead of a scan.",
          "**Diabetes**: prednisolone raises glucose; type 1 diabetes triples PPT risk.",
          "**Children** with recurrent left neck abscess: look for a **pyriform sinus fistula**.",
          "**Elderly**: short toxic phases can still trigger AF.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Permanent hypothyroidism**: 5-15% after subacute, up to 50% after postpartum.",
          "**Hard, fast-growing goitre** with stridor: think lymphoma, anaplastic cancer, Riedel.",
          "**Low TSH with low FT4** on checkpoint inhibitors: think hypophysitis.",
          "AIT with heart failure carries **high mortality**; admit.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "TFT every **2-4 weeks** in the toxic phase, then 4-8 weeks.",
          "**Yearly TSH** for life after recovery.",
          "PPT recurs in about **70%** of later pregnancies.",
          "Amiodarone TFT every **3-6 months**; lithium every 6 months.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs in thyroiditis",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Propranolol", "10-40 mg oral three to four times daily", "Until FT4 normal", "Asthma, bradycardia"],
          ["Ibuprofen", "400-600 mg oral three times daily", "1-2 weeks", "Gastritis, kidney injury"],
          ["Prednisolone (subacute)", "40 mg oral daily", "1-2 weeks, taper over 2-4 weeks", "Hyperglycaemia, relapse on taper"],
          ["Prednisolone (AIT2)", "30-40 mg oral daily", "Taper over about 3 months", "Infection, glucose, bone loss"],
          ["Methimazole (AIT1)", "40-60 mg oral daily", "Until euthyroid", "Agranulocytosis, liver injury"],
          ["Levothyroxine", "25-100 mcg oral daily", "Trial off at 6-12 months if transient", "Over-replacement, AF"],
        ],
      },
      {
        heading: "Types of thyroiditis",
        columns: ["Type", "Pain", "ESR", "Antibodies", "Outcome"],
        rows: [
          ["Subacute", "Severe", "High", "Negative", "5-15% permanent hypo"],
          ["Painless", "None", "Normal", "Anti-TPO often", "Usually recovers"],
          ["Postpartum", "None", "Normal", "Anti-TPO", "Up to 50% permanent hypo"],
          ["Hashimoto", "None", "Normal", "Anti-TPO 90%", "Progressive hypo"],
          ["Suppurative", "Severe", "High", "Negative", "Abscess, fistula"],
        ],
      },
      {
        heading: "AIT type 1 vs type 2",
        columns: ["Feature", "Type 1", "Type 2"],
        rows: [
          ["Gland", "Nodular or latent Graves", "Normal"],
          ["Uptake", "Normal or high", "Very low"],
          ["Doppler", "Increased flow", "No flow"],
          ["Treatment", "Methimazole", "Prednisolone"],
        ],
      },
    ],
    remember: [
      "**Destruction, not production**: low uptake, no carbimazole.",
      "De Quervain: **pain to ear, ESR high, uptake low, steroids work fast**.",
      "PPT: **toxic 1-4, hypo 3-8 months**; yearly TSH afterwards.",
      "**TRAb, not a scan**, in a breastfeeding mother.",
      "AIT: **1 = iodine and flow; 2 = destruction and no flow**.",
      "**Keep lithium, add thyroxine**.",
      "Checkpoint thyroiditis: **keep the cancer drug**.",
    ],
  },
};

export default revision;
