import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-thyroid-cancer": {
    checked: "2026-10",
    updated: [
      "ATA 2025 adult DTC guideline: WHO 2022 terms, active surveillance for low-risk microcarcinoma, lobectomy up to 4 cm, selective RAI, de-escalated TSH targets",
      "Bethesda 2023 (3rd edition): category III is AUS only, category IV is follicular neoplasm, average risk of malignancy per category",
      "WHO 2022 classification: oncocytic carcinoma replaces Hurthle cell; differentiated high-grade carcinoma added",
      "LIBRETTO-531 (2023): selpercatinib preferred first systemic drug for RET-mutant MTC",
      "ATA 2021 anaplastic guideline: rapid BRAF testing and dabrafenib-trametinib, including neoadjuvant use",
    ],
    master: {
      heading: "Thyroid cancer on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Malignancy of follicular cells (papillary, follicular, anaplastic) or C cells (medullary); commonest endocrine cancer"],
        ["Burden", "About 8.2 lakh cases worldwide (GLOBOCAN 2022); women 3:1; Kerala registries highest in India (NCRP)"],
        ["Risk factors", "Childhood neck radiation, family history, RET (MEN2), FAP, Cowden; Hashimoto for lymphoma"],
        ["Molecular", "BRAF V600E papillary; RAS follicular; RET in MTC; TP53 and TERT in anaplastic"],
        ["Classification", "WHO 2022; NIFTP is not cancer; oncocytic carcinoma replaces Hurthle"],
        ["Staging", "AJCC 8: age 55 cut-off; under 55 stage I or II only; anaplastic always stage IV"],
        ["Work-up", "TSH, ultrasound (TI-RADS), US-guided FNAC by Bethesda 2023; calcitonin if MTC suspected"],
        ["Surgery", "Lobectomy for low-risk up to 4 cm; total thyroidectomy for over 4 cm, extension, nodes, metastases"],
        ["Radioiodine", "Selective: not for low risk; 30 mCi ablation, 100-200 mCi for known disease; TSH over 30 first"],
        ["TSH target", "Under 0.1 structural disease; 0.1-0.5 biochemical; 0.5-2 excellent response"],
        ["Follow-up", "Tg plus anti-Tg antibody and neck ultrasound 6-12 monthly; PET-CT if Tg high and scan negative"],
        ["MTC", "RET testing, exclude phaeo, total thyroidectomy plus central dissection; calcitonin and CEA follow-up; selpercatinib"],
        ["Anaplastic", "Airway, core biopsy with BRAF IHC, dabrafenib-trametinib, surgery or chemoradiation, palliative care"],
        ["Advanced DTC", "RAI-refractory and progressive: lenvatinib 24 mg or sorafenib 400 mg twice daily"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Work-up of a thyroid nodule",
        steps: [
          { label: "Thyroid nodule found", detail: "History: growth, hoarseness, radiation, family history" },
          { label: "Serum TSH", tone: "decision", detail: "Low TSH: radionuclide scan; hot nodule rarely needs FNAC" },
          { label: "Neck ultrasound with TI-RADS", detail: "Solid hypoechoic, taller-than-wide, microcalcification, irregular margin" },
          { label: "US-guided FNAC, Bethesda 2023", tone: "decision", detail: "I repeat; II follow; III-IV molecular or lobectomy; V-VI surgery" },
          { label: "Pre-operative staging", detail: "Lateral neck US, laryngoscopy, CT if fixed; calcitonin, RET, metanephrines if MTC" },
          { label: "Risk-adapted surgery", tone: "good", detail: "Lobectomy or total thyroidectomy with neck dissection as needed" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder for differentiated thyroid cancer",
        steps: [
          { label: "Active surveillance", detail: "Low-risk microcarcinoma 1 cm or less; ultrasound 6-12 monthly", tone: "good" },
          { label: "Lobectomy", detail: "Low-risk unifocal up to 4 cm, no nodes" },
          { label: "Total thyroidectomy with neck dissection", detail: "Over 4 cm, gross extension, nodes or metastases" },
          { label: "Radioiodine", detail: "Intermediate (selective) or high risk; 30-200 mCi after TSH over 30" },
          { label: "TSH suppression", detail: "Under 0.1 for structural disease; 0.5-2 for excellent response" },
          { label: "Kinase inhibitors", tone: "warn", detail: "RAI-refractory progressive: lenvatinib, sorafenib; RET or NTRK targeted drugs" },
        ],
      },
      {
        kind: "compare",
        heading: "Papillary, follicular, medullary and anaplastic",
        columns: ["Feature", "Papillary", "Follicular", "Medullary", "Anaplastic"],
        rows: [
          ["Cell", "Follicular", "Follicular", "C cell", "Dedifferentiated follicular"],
          ["Spread", "Lymph nodes", "Blood to bone, lung", "Nodes and blood", "Local invasion"],
          ["FNAC diagnosis", "Yes", "No (needs histology)", "Yes, with calcitonin stain", "Core biopsy"],
          ["Marker", "Thyroglobulin", "Thyroglobulin", "Calcitonin, CEA", "None"],
          ["RAI", "Selective", "Selective", "Useless", "Useless"],
          ["Prognosis", "Over 95% at 10 years", "85-90%", "About 75%", "Median months"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Thyroid cancer** is the commonest endocrine malignancy; women are affected three times as often.",
            "**Papillary 80-85%**, follicular 10%, medullary 1-2%, anaplastic under 2%.",
            "Rising incidence is mostly **overdiagnosis** of small papillary cancers by ultrasound.",
            "In India, Kerala registries record the **highest rates** in women (NCRP).",
            "Papillary 10-year survival is **over 95%**; anaplastic median survival is a few months.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Childhood neck radiation** is the strongest environmental cause.",
            "**Germline RET** mutation causes hereditary medullary cancer (MEN2A, MEN2B).",
            "Iodine deficiency favours **follicular and anaplastic**; iodine sufficiency favours papillary.",
            "**Hashimoto thyroiditis** predisposes to primary thyroid lymphoma.",
            "Higher suspicion in a **man, child or person over 70** with a nodule.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**BRAF V600E** drives most papillary cancers; RAS drives follicular tumours.",
            "Papillary spreads by **lymphatics**; follicular spreads by **blood** to bone and lung.",
            "Follicular carcinoma needs **capsular or vascular invasion**, so FNAC cannot diagnose it.",
            "Retained **NIS and TSH receptor** explain radioiodine and TSH suppression.",
            "C cells lack NIS, so **RAI is useless in medullary** cancer.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**WHO 2022**: oncocytic carcinoma replaces Hurthle; NIFTP is a low-risk neoplasm.",
            "**AJCC 8** uses an age cut-off of **55**; under 55 the maximum is stage II.",
            "**Anaplastic** is always stage IV.",
            "**ATA recurrence risk**: low under 5%, intermediate 5-20%, high over 20%.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Usually a painless **solitary nodule** or an incidentaloma.",
            "Worry about **rapid growth, hoarseness, stridor, hard fixed nodule** and neck nodes.",
            "Follicular may present with a **bone metastasis** or pathological fracture.",
            "Medullary may cause **diarrhoea and flushing**; ask about phaeo symptoms in the family.",
            "Check **vocal cords** by laryngoscopy before any thyroid surgery.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**TSH first**; low TSH means scan, not FNAC.",
            "**Ultrasound** with TI-RADS selects nodules for FNAC.",
            "**Bethesda 2023** risk of malignancy: I 13%, II 4%, III 22%, IV 30%, V 74%, VI 97%.",
            "**Calcitonin and CEA** for medullary; over 500 pg/mL means look for metastases.",
            "Every medullary needs **germline RET** and **plasma metanephrines** before surgery.",
            "**Serum thyroglobulin** has no role in diagnosing a nodule.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Active surveillance** is an option for low-risk microcarcinoma 1 cm or less.",
            "**Lobectomy** for low-risk unifocal tumours up to 4 cm.",
            "**Total thyroidectomy** for over 4 cm, gross extension, nodes or metastases.",
            "**Radioiodine** is selective: not for low risk, yes for high risk.",
            "**Levothyroxine 1.6-2 microgram/kg/day** to a risk-based TSH target.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "RAI-refractory progressive DTC: **lenvatinib 24 mg** daily or **sorafenib 400 mg** twice daily.",
            "Medullary: **total thyroidectomy plus central dissection**; selpercatinib for progressive RET-mutant disease.",
            "Anaplastic BRAF V600E: **dabrafenib plus trametinib**, often before surgery.",
            "Thyroid lymphoma needs **chemotherapy**, not radical surgery.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Post-operative **neck haematoma** with stridor: open the wound at the bedside.",
            "**Hypocalcaemia** after total thyroidectomy: check calcium and PTH, give calcium and calcitriol.",
            "**Recurrent laryngeal nerve** palsy causes hoarseness; bilateral palsy causes stridor.",
            "RAI causes **sialadenitis** and dry mouth; avoid pregnancy for 6-12 months.",
            "Over-suppression of TSH causes **AF and bone loss**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "**Tg with anti-Tg antibody** and neck ultrasound every 6-12 months at first.",
            "Rising anti-Tg antibody alone suggests **persistent disease**.",
            "**FDG PET-CT** if Tg is high and the RAI scan is negative.",
            "Medullary: **calcitonin and CEA** at 3 months, then doubling times.",
            "Test **RET in relatives**; prophylactic thyroidectomy by codon risk.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in thyroid cancer",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Levothyroxine", "1.6-2 microgram/kg/day orally", "Lifelong, to TSH target", "AF and bone loss if over-suppressed"],
            ["Radioiodine I-131", "30 mCi ablation; 100-200 mCi for disease, orally", "Single dose", "Sialadenitis; not in pregnancy or lactation"],
            ["Recombinant TSH", "0.9 mg IM daily for 2 days", "Before RAI or stimulated Tg", "Nausea, headache, cost"],
            ["Lenvatinib", "24 mg orally once daily", "Until progression", "Hypertension, proteinuria, diarrhoea"],
            ["Sorafenib", "400 mg orally twice daily", "Until progression", "Hand-foot reaction, diarrhoea"],
            ["Selpercatinib", "160 mg orally twice daily", "Until progression", "Hypertension, QT prolongation, hepatitis"],
            ["Dabrafenib plus trametinib", "150 mg twice daily plus 2 mg daily orally", "Neoadjuvant or until progression", "Fever, rash, low ejection fraction"],
          ],
        },
        {
          heading: "Bethesda 2023",
          columns: ["Category", "Name", "Risk of malignancy", "Next step"],
          rows: [
            ["I", "Non-diagnostic", "13%", "Repeat FNAC"],
            ["II", "Benign", "4%", "Ultrasound follow-up"],
            ["III", "AUS", "22%", "Repeat FNAC or molecular test"],
            ["IV", "Follicular neoplasm", "30%", "Molecular test or lobectomy"],
            ["V", "Suspicious for malignancy", "74%", "Surgery"],
            ["VI", "Malignant", "97%", "Surgery by risk"],
          ],
        },
        {
          heading: "Response to therapy and TSH target",
          columns: ["Response", "Suppressed Tg", "Imaging", "TSH target"],
          rows: [
            ["Excellent", "Under 0.2 ng/mL", "Negative", "0.5-2 mIU/L"],
            ["Indeterminate", "0.2-1 ng/mL", "Non-specific", "0.5-2 low risk; 0.1-0.5 higher risk"],
            ["Biochemical incomplete", "1 ng/mL or more, or rising anti-Tg", "Negative", "0.1-0.5 mIU/L"],
            ["Structural incomplete", "Any", "Disease seen", "Under 0.1 mIU/L"],
          ],
        },
      ],
      remember: [
        "**Papillary: Popular, Psammoma, Palpable nodes, Positive prognosis.**",
        "**FNAC cannot diagnose follicular carcinoma.**",
        "**Tg is for follow-up, never for diagnosis**; always pair it with anti-Tg antibody.",
        "**Exclude phaeo before operating on medullary** cancer.",
        "**RAI and TSH suppression do nothing in medullary** cancer.",
        "AJCC 8: **age 55**; under 55 the worst stage is II.",
        "**Anaplastic: airway first, BRAF test within days.**",
      ],
    },
  },
};

export default revision;
