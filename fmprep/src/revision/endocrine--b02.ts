import type { RevisionSet } from "./index";

const revision: RevisionSet = {};

revision["endocrine-injectables-glp1-tirzepatide"] = {
  checked: "2026-10",
  updated: [
    "ADA Standards of Care 2026: GLP-1 RA or tirzepatide for glycaemia and weight; CV and kidney benefit as independent indications.",
    "ADA 2025: GLP-1 RA in CKD with T2D (FLOW 2024) and in MASLD/MASH; continue after weight goals; avoid compounded products.",
    "SOUL 2025 (oral semaglutide MACE benefit) and SURPASS-CVOT 2025 (tirzepatide non-inferior to dulaglutide) added.",
    "Multisociety perioperative guidance 2024: continue GLP-1 RA in most; 24-hour liquid diet in high-risk (replaces ASA 2023 1-week hold).",
    "EMA PRAC 2025: NAION listed as a very rare adverse effect of semaglutide.",
    "India: tirzepatide launched March 2025; semaglutide generics after patent expiry in March 2026.",
  ],
  master: {
    heading: "Master revision table - GLP-1 receptor agonists and tirzepatide",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "DPP-4 resistant **GLP-1 analogues** (semaglutide, liraglutide, dulaglutide) and the **dual GIP/GLP-1 agonist tirzepatide**; HbA1c fall **1-2.3%**, weight loss **5-15%**."],
      ["Mechanism", "**Glucose-dependent insulin release**, glucagon suppression, slow gastric emptying, **arcuate nucleus satiety**; GIP adds weight effect and blunts nausea."],
      ["Classification", "Short-acting (exenatide BD, lixisenatide); daily (**liraglutide**); weekly (**semaglutide, dulaglutide**); oral (**semaglutide**); dual agonist (**tirzepatide**)."],
      ["Indications", "**ASCVD or high CV risk, CKD, obesity, MASLD, HFpEF with obesity**, first injectable before basal insulin - independent of HbA1c and metformin."],
      ["Doses", "Semaglutide **0.25-0.5-1-2 mg weekly**; oral **3-7-14 mg**; liraglutide **0.6-1.2-1.8 mg daily**; dulaglutide **0.75-4.5 mg weekly**; tirzepatide **2.5 mg, +2.5 mg every 4 weeks to 15 mg**."],
      ["Oral semaglutide rule", "On waking, **120 mL water or less**, wait **30 minutes** before food or other drugs (SNAC absorption, 1% bioavailability)."],
      ["Evidence", "**LEADER** MACE -13%, **SUSTAIN-6** -26%, **REWIND** -12%, **SOUL** -14%, **FLOW** kidney events -24%, **SELECT** -20% without diabetes; SURPASS-2 tirzepatide beats semaglutide 1 mg."],
      ["Adverse effects", "Nausea/vomiting, **AKI from dehydration**, gallstones, **pancreatitis**, retinopathy early worsening, rare **NAION**, perioperative aspiration, hypoglycaemia only with SU/insulin."],
      ["Contraindications", "**MTC or MEN2** (self or family), past **pancreatitis**, pregnancy (stop semaglutide 2 months before), type 1 diabetes, severe gastroparesis; **exenatide** below eGFR 30."],
      ["Special groups", "No renal dose change (except exenatide); elderly - watch sarcopenia; children from age 10 (liraglutide, dulaglutide); **tirzepatide - barrier contraception 4 weeks** after each step."],
      ["Monitoring", "Review 4 weeks after each step; **HbA1c, weight, BP every 3 months**; reduce SU and insulin; yearly fundus, eGFR, ACR; calcitonin and lipase not routine."],
      ["India 2026", "Tirzepatide since **March 2025**, semaglutide generics since **March 2026**; not on NLEM or NP-NCD list; warn against unregulated online products."],
      ["Exam pitfalls", "Never combine with **DPP-4 inhibitor**; titrate **4-weekly**; organ-based choice - SGLT2i for HF/CKD, GLP-1 RA for ASCVD/obesity."],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Is this patient right for a GLP-1 RA?",
      caption: "Selection before the first prescription.",
      steps: [
        { label: "T2D with residual beta-cell function?", detail: "No rapid weight loss, ketosis or DKA history", tone: "decision" },
        { label: "Contraindication check", detail: "MTC/MEN2, pancreatitis, pregnancy, gastroparesis", tone: "warn" },
        { label: "Indication present?", detail: "ASCVD, high CV risk, CKD, obesity, MASLD", tone: "decision" },
        { label: "Fundus if long duration or known retinopathy", detail: "Treat PDR before rapid HbA1c fall" },
        { label: "Reduce SU and insulin if near target", detail: "Halve SU; basal insulin down 10-20%" },
        { label: "Start lowest dose, titrate 4-weekly", detail: "Semaglutide 0.25 mg; tirzepatide 2.5 mg weekly", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Titration ladders for weekly agents",
      caption: "Move up only if tolerated and more effect is needed.",
      steps: [
        { label: "Semaglutide 0.25 mg weekly x 4 weeks", detail: "Initiation dose only" },
        { label: "Semaglutide 0.5 mg weekly", detail: "First maintenance dose" },
        { label: "Semaglutide 1 mg, then 2 mg weekly", detail: "4-week steps" },
        { label: "Or tirzepatide 2.5 mg weekly x 4 weeks", detail: "Initiation dose only", tone: "decision" },
        { label: "Tirzepatide 5 mg, then +2.5 mg every 4 weeks", detail: "7.5, 10, 12.5, max 15 mg", tone: "good" },
      ],
    },
    {
      kind: "compare",
      heading: "GLP-1 RA vs DPP-4 inhibitor vs SGLT2 inhibitor",
      columns: ["Feature", "GLP-1 RA", "DPP-4 inhibitor", "SGLT2 inhibitor"],
      rows: [
        ["HbA1c fall", "1-2.3%", "0.5-0.8%", "0.5-0.8%"],
        ["Weight", "Loss 5-15%", "Neutral", "Loss 2-3 kg"],
        ["Best for", "ASCVD, obesity, CKD", "Cost-sensitive, elderly", "Heart failure, CKD"],
        ["Key harm", "Nausea, gallstones", "Rare pancreatitis", "Genital mycosis, euglycaemic DKA"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**GLP-1 RAs** are DPP-4 resistant analogues of the gut hormone GLP-1.",
          "**Tirzepatide** is a weekly dual GIP and GLP-1 receptor agonist.",
          "They lower **HbA1c by 1-2.3%** and weight by 5-15%.",
          "India has about **101 million** adults with diabetes (ICMR-INDIAB 2023).",
          "Not a substitute for insulin in **insulin-deficient** diabetes.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "Native GLP-1 lasts **2 minutes**; DPP-4 destroys it.",
          "Insulin release is **glucose-dependent**, so hypoglycaemia is rare alone.",
          "Glucagon falls, stomach empties slowly, and **satiety** rises in the hypothalamus.",
          "Semaglutide lasts a week through **albumin binding**; oral form needs SNAC.",
        ],
      },
      {
        title: "Classification that matters",
        points: [
          "Short-acting: **exenatide** twice daily, lixisenatide.",
          "Daily: **liraglutide**. Weekly: **semaglutide, dulaglutide**.",
          "Oral: **semaglutide** 3, 7, 14 mg daily.",
          "Dual agonist: **tirzepatide** 2.5-15 mg weekly.",
          "Proven MACE benefit: semaglutide, liraglutide, dulaglutide; neutral: lixisenatide, exenatide.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "Use for **ASCVD, high CV risk, CKD, obesity** whatever the HbA1c.",
          "Preferred **first injectable** before basal insulin.",
          "Start lowest dose; step up every **4 weeks**.",
          "Halve the **sulfonylurea** and cut basal insulin 10-20% if near target.",
          "Oral semaglutide: on waking, **120 mL water**, wait 30 minutes.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "Judge response at **3-6 months** on maintenance dose.",
          "Not enough: check adherence and technique, then raise dose.",
          "Add basal insulin, or use a **fixed-ratio combination** if still off target.",
          "Combine with an **SGLT2 inhibitor** for HF or CKD; effects add up.",
          "Never combine with a **DPP-4 inhibitor**.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "Nausea and vomiting are common; **slow the titration**.",
          "Severe epigastric pain to the back means **pancreatitis**; stop for good.",
          "Vomiting with low urine output means **AKI**; pause the drug.",
          "Semaglutide may worsen **retinopathy** early if HbA1c falls fast.",
          "Sudden painless visual loss may be **NAION**; refer the same day.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "**Pregnancy**: stop; stop semaglutide 2 months before conception.",
          "**CKD**: no dose change, except avoid exenatide below eGFR 30.",
          "**Tirzepatide**: add barrier contraception for 4 weeks after each dose step.",
          "**Elderly**: protect muscle with protein and resistance exercise.",
          "**Children**: liraglutide and dulaglutide approved from age 10.",
        ],
      },
      {
        title: "Referral and follow-up",
        points: [
          "Review **4 weeks** after each step, then HbA1c, weight and BP 3-monthly.",
          "Yearly **fundus**, eGFR, urine ACR, lipids and liver tests.",
          "Calcitonin and lipase are **not routine** tests.",
          "Refer pancreatitis, AKI, visual loss, thyroid nodule or pregnancy.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**ADA 2025-2026**: use in CKD (FLOW) and MASLD; continue after weight goals.",
          "**SOUL 2025**: oral semaglutide cuts MACE by 14%.",
          "**SURPASS-CVOT 2025**: tirzepatide non-inferior to dulaglutide for MACE.",
          "**Perioperative 2024**: continue in most; liquid diet 24 hours before for high risk.",
          "India: **tirzepatide 2025**, generic semaglutide from March 2026.",
        ],
      },
    ],
    tables: [
      {
        heading: "GLP-1 RAs and tirzepatide",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Semaglutide SC", "0.25 mg weekly, then 0.5, 1, max 2 mg", "4-week steps; long-term", "Nausea, gallstones, retinopathy worsening; MTC/MEN2"],
          ["Oral semaglutide", "3 mg daily, then 7, then 14 mg", "30-day steps; long-term", "Must be taken fasting with little water"],
          ["Liraglutide", "0.6 mg SC daily, then 1.2, max 1.8 mg", "Weekly steps; long-term", "Nausea, pancreatitis; generics available"],
          ["Dulaglutide", "0.75-1.5 mg SC weekly, up to 4.5 mg", "4-week steps; long-term", "Nausea, injection-site reaction"],
          ["Tirzepatide", "2.5 mg SC weekly, then 5 mg, up to 15 mg", "+2.5 mg every 4 weeks; long-term", "Nausea, gallstones, oral contraceptive failure"],
          ["Exenatide", "5-10 mcg SC twice daily", "Step up after 1 month", "Avoid eGFR under 30; antibodies"],
        ],
      },
      {
        heading: "GLP-1 RA outcome trials",
        columns: ["Trial", "Drug", "Result"],
        rows: [
          ["LEADER 2016", "Liraglutide", "MACE down 13%"],
          ["SUSTAIN-6 2016", "Semaglutide SC", "MACE down 26%; more retinopathy complications"],
          ["REWIND 2019", "Dulaglutide", "MACE down 12%"],
          ["FLOW 2024", "Semaglutide 1 mg", "Kidney events down 24%"],
          ["SOUL 2025", "Oral semaglutide", "MACE down 14%"],
          ["SURPASS-CVOT 2025", "Tirzepatide", "Non-inferior to dulaglutide"],
        ],
      },
      {
        heading: "GI symptoms on therapy - what is it?",
        columns: ["Condition", "Clue", "Action"],
        rows: [
          ["Expected nausea", "Mild, after a dose step", "Small meals, delay next step"],
          ["Pancreatitis", "Severe pain to back, lipase over 3 times ULN", "Stop permanently, admit"],
          ["Cholecystitis", "RUQ pain, fever", "Ultrasound, hold drug"],
          ["AKI", "Vomiting, low urine output", "Pause drug, fluids, sick-day rules"],
        ],
      },
    ],
    remember: [
      "**Glucose-dependent** action - little hypoglycaemia on its own.",
      "**Organ first**: ASCVD and obesity - GLP-1 RA; HF and CKD - SGLT2 inhibitor.",
      "**Start low, go slow** - 4-weekly steps.",
      "**MTC/MEN2 and pancreatitis** - the two contraindications to name.",
      "**30-120 rule** for oral semaglutide: 30 minutes, 120 mL water.",
      "**Exenatide** is the renal exception - avoid below eGFR 30.",
      "**Never pair** a GLP-1 RA with a DPP-4 inhibitor.",
    ],
  },
};

export default revision;
