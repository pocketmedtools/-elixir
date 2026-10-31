import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-metabolic-bone-disease": {
    checked: "2026-10",
    updated: [
      "Endocrine Society 2024 vitamin D guideline: no routine 25(OH)D testing, empiric supplements for defined groups, daily over intermittent mega-doses",
      "Global Consensus 2016 and IAP 2017 rickets schedules retained as current treatment standard",
      "Paget international guideline 2019: treat bone pain, no treat-to-target ALP; ZiPP 2024 prophylaxis data noted",
      "XLH consensus 2019: burosumab as first-line option for children where available",
      "ICMR-NIN RDA 2020: vitamin D 600 IU/day for children and adults",
    ],
    master: {
      heading: "Master revision table - osteomalacia, rickets and Paget disease",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Osteomalacia/rickets** = defective mineralisation of osteoid (rickets also at the growth plate); **Paget** = focal excess osteoclastic resorption with disorganised woven bone."],
        ["Burden", "25(OH)D under 20 ng/mL in **50-90%** of Indian adults; **CNNS 2016-18**: deficiency in 14-24% of children and adolescents; Paget 1-2% of white people over 55, rare in Indians."],
        ["Classification", "**Calciopenic** (vitamin D/calcium deficiency, CKD, VDDR) vs **phosphopenic** (XLH, TIO, Fanconi) vs inhibitors (hypophosphatasia, fluoride)."],
        ["Pathophysiology", "Low vitamin D, low calcium absorption, **secondary hyperparathyroidism**, phosphaturia, low Ca x P product, unmineralised osteoid; FGF23 excess gives low phosphate with low calcitriol."],
        ["Clinical - child", "Craniotabes, bossing, **rachitic rosary, Harrison sulcus**, wide wrists, genu varum/valgum, delayed milestones, **tetany/seizures**."],
        ["Clinical - adult", "Diffuse **bone pain**, bone tenderness, **proximal myopathy, waddling gait**, fractures, Looser zones."],
        ["Paget features", "Often asymptomatic high ALP; pain, **warm bowed bone**, big skull, **deafness**, fracture, OA, osteosarcoma under 1%."],
        ["Biochemistry", "Vit D deficiency: Ca low/N, PO4 low, **ALP high, PTH high**, 25D low; XLH: **PO4 low, PTH normal**, FGF23 high; Paget: **isolated ALP high**."],
        ["Imaging", "Rickets: **cupping, fraying, splaying**; osteomalacia: **Looser zones**; Paget: blade-of-grass, cotton-wool skull, ivory vertebra, bone scan."],
        ["Treatment - rickets", "**2000 IU daily x 12 weeks** or stoss 50,000-300,000 IU by age, plus **calcium 500 mg/day**; IAP: 60,000 IU weekly x 6 weeks; maintenance 400-600 IU."],
        ["Treatment - adult", "**60,000 IU weekly x 8 weeks**, then 1500-2000 IU/day or 60,000 IU monthly, plus calcium 1000-1200 mg/day."],
        ["Treatment - special", "XLH: **phosphate + calcitriol** or burosumab; TIO: resect tumour; CKD/VDDR 1A: **calcitriol/alfacalcidol**; Paget: **zoledronic acid 5 mg IV once**."],
        ["Monitoring", "Ca, PO4, ALP at 4 weeks; X-ray and 25(OH)D at 3 months; Paget ALP 3-6 months after infusion, retreat for pain relapse."],
        ["Exam traps", "Never diagnose deficiency with 1,25(OH)2D; low ALP rickets = hypophosphatasia; **60,000 IU is weekly, not daily**."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Bone pain or rickets: biochemical work-up",
        caption: "Five tests separate almost every cause.",
        steps: [
          { label: "Suspect: bone pain, proximal weakness, bowing, tetany", detail: "Child or adult; ask diet, sun, drugs, family history" },
          { label: "Calcium, phosphate, ALP, creatinine, 25(OH)D, PTH", detail: "Check GGT if ALP source unclear", tone: "decision" },
          { label: "Low 25(OH)D, high PTH, high ALP", detail: "Nutritional calciopenic rickets/osteomalacia", tone: "good" },
          { label: "Low phosphate, normal calcium and PTH", detail: "TmP/GFR, FGF23: XLH, TIO, iron infusion", tone: "warn" },
          { label: "High phosphate, high creatinine", detail: "Renal osteodystrophy (CKD-MBD)" },
          { label: "Isolated high ALP, normal minerals", detail: "Paget disease: X-ray and bone scan" },
          { label: "Low ALP", detail: "Hypophosphatasia: refer", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treating nutritional rickets and osteomalacia",
        steps: [
          { label: "Prevent: 400 IU daily for every infant", detail: "600 IU/day children and adults (ICMR-NIN 2020)", tone: "good" },
          { label: "Treat rickets: 2000 IU daily for 12 weeks", detail: "Or stoss 50,000 / 150,000 / 300,000 IU by age; calcium 500 mg/day" },
          { label: "Treat adult osteomalacia: 60,000 IU weekly x 8", detail: "Then 1500-2000 IU daily; calcium 1000-1200 mg/day" },
          { label: "Malabsorption or anticonvulsants", detail: "2-3 times dose or calcifediol 50 mcg weekly", tone: "decision" },
          { label: "CKD 4-5 or VDDR 1A", detail: "Calcitriol 0.25-1 mcg/day or alfacalcidol" },
          { label: "No healing at 3 months", detail: "Refer: hypophosphataemic or inherited rickets", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Osteomalacia vs osteoporosis vs Paget",
        columns: ["Feature", "Osteomalacia", "Osteoporosis", "Paget disease"],
        rows: [
          ["Defect", "Under-mineralised matrix", "Less bone, normal mineral", "Disorganised high-turnover bone"],
          ["Pain", "Diffuse, with myopathy", "Only with fracture", "Focal, worse at night"],
          ["Calcium / phosphate", "Low or normal / low", "Normal / normal", "Normal / normal"],
          ["ALP", "High", "Normal", "High (often very)"],
          ["PTH", "High", "Normal", "Normal"],
          ["X-ray", "Looser zones", "Osteopenia, fractures", "Expanded bone, mixed lysis and sclerosis"],
          ["Treatment", "Vitamin D and calcium", "Bisphosphonate, denosumab", "Zoledronic acid 5 mg once"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Osteomalacia** is poor mineralisation of osteoid in adult bone; **rickets** adds growth-plate failure in children.",
            "**Osteoporosis** has normal mineral but less bone; osteomalacia hurts and has abnormal biochemistry.",
            "Indian adults: low **25(OH)D** in about 50-90% in community studies.",
            "**Paget disease**: focal overactive osteoclasts with disorganised woven bone; mostly over 55.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Calciopenic**: low sun, veiling, dark skin, low-calcium diet, malabsorption, anticonvulsants, rifampicin, CKD.",
            "**Phosphopenic**: XLH (PHEX), tumour-induced osteomalacia, ferric carboxymaltose, tenofovir Fanconi syndrome.",
            "**Inhibitors**: hypophosphatasia (low ALP), fluoride, aluminium.",
            "**Paget**: family history and **SQSTM1** mutation.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Low vitamin D lowers gut calcium absorption.",
            "**Secondary hyperparathyroidism** keeps calcium up but wastes phosphate.",
            "Low calcium-phosphate product leaves osteoid unmineralised; bone softens and bends.",
            "**FGF23 excess** wastes phosphate and lowers calcitriol, with normal calcium and PTH.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Child: **craniotabes, rachitic rosary, Harrison sulcus**, wide wrists, bowed legs, tetany.",
            "Adult: **bone pain**, sternal tenderness, **proximal weakness**, waddling gait, fractures.",
            "XLH: family history, short stature, dental abscesses, **no tetany or myopathy**.",
            "Paget: warm bowed tibia, bigger hat, **deafness**, night bone pain; often asymptomatic.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Core panel: **calcium, phosphate, ALP, PTH, 25(OH)D**, creatinine.",
            "Deficiency: 25(OH)D **below 12 ng/mL**; insufficiency 12-20 (Global Consensus 2016).",
            "Rickets X-ray: **cupping, fraying, splaying** of the wrist or knee metaphysis.",
            "Osteomalacia X-ray: **Looser zones** at femoral neck, pubic rami, ribs, scapula.",
            "Phosphate wasting: low **TmP/GFR**, high FGF23; TIO needs **68Ga-DOTATATE PET-CT**.",
            "Paget: **isolated high ALP**, normal GGT; bone scan maps extent.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Rickets: **2000 IU daily for 12 weeks** or a single stoss dose, with calcium 500 mg/day.",
            "IAP option: **60,000 IU weekly for 6 weeks** in children over 1 year.",
            "Adult: **60,000 IU weekly for 8 weeks**, then 1500-2000 IU daily, plus calcium 1000-1200 mg.",
            "Paget: **zoledronic acid 5 mg IV once**, after vitamin D repletion.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Malabsorption: double or triple dose, or **calcifediol**.",
            "CKD 4-5 and VDDR 1A: **calcitriol or alfacalcidol**.",
            "XLH: **phosphate plus calcitriol**, or burosumab; TIO: remove the tumour.",
            "Tetany: **10% calcium gluconate** IV over 10 minutes with ECG monitoring.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Rickets: leg deformity, short stature, **contracted pelvis** in girls.",
            "Paget: fracture, deafness, spinal stenosis, heart failure, **osteosarcoma under 1%**.",
            "New severe localised pain in Paget suggests **sarcoma**; refer urgently.",
            "Daily 60,000 IU sachets cause **vitamin D toxicity** with hypercalcaemia.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Check calcium, phosphate, ALP at **4 weeks**; X-ray and 25(OH)D at **3 months**.",
            "Refer if **no healing at 3 months**, normal 25(OH)D, low ALP or family history.",
            "Paget: ALP at 3-6 months, then yearly; retreat only for relapse of pain.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**Endocrine Society 2024**: no routine 25(OH)D screening; daily rather than mega-dose supplements.",
            "**Paget 2019**: no treat-to-target ALP; **ZiPP 2024** prophylaxis in SQSTM1 carriers is investigational.",
            "**ICMR-NIN 2020**: 600 IU/day vitamin D for children and adults.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Cholecalciferol (rickets)", "2000 IU oral daily, or stoss 50,000-300,000 IU once", "12 weeks, then 400-600 IU daily", "Give calcium 500 mg/day too"],
            ["Cholecalciferol (adult)", "60,000 IU oral weekly", "8 weeks, then maintenance", "Toxicity if taken daily"],
            ["Calcium carbonate", "500-1200 mg elemental/day oral", "During repletion", "Constipation; take with food"],
            ["Calcitriol", "0.25-1 mcg/day oral", "Long term", "Hypercalcaemia, nephrocalcinosis"],
            ["Oral phosphate", "20-60 mg/kg/day in 4-6 doses", "Until growth ends", "Diarrhoea, hyperparathyroidism"],
            ["Zoledronic acid", "5 mg IV over 15+ minutes", "Single dose", "Flu-like reaction, hypocalcaemia; avoid CrCl under 35"],
          ],
        },
        {
          heading: "Biochemical patterns",
          columns: ["Condition", "Calcium", "Phosphate", "ALP", "PTH"],
          rows: [
            ["Vitamin D deficiency", "Low/normal", "Low", "High", "High"],
            ["XLH / TIO", "Normal", "Low", "High", "Normal"],
            ["Renal osteodystrophy", "Low", "High", "High", "High"],
            ["Paget disease", "Normal", "Normal", "High", "Normal"],
            ["Osteoporosis", "Normal", "Normal", "Normal", "Normal"],
            ["Hypophosphatasia", "Normal", "Normal/high", "Low", "Normal"],
          ],
        },
        {
          heading: "Classification of rickets",
          columns: ["Type", "Examples", "Key feature"],
          rows: [
            ["Calciopenic", "Vitamin D or calcium deficiency, CKD, VDDR", "High PTH"],
            ["Phosphopenic", "XLH, TIO, Fanconi", "Normal PTH, low TmP/GFR"],
            ["Inhibitor", "Hypophosphatasia, fluoride", "Low ALP in hypophosphatasia"],
          ],
        },
      ],
      remember: [
        "**Osteomalacia hurts, osteoporosis does not.**",
        "Low phosphate with **normal PTH** means an FGF23 problem.",
        "Never use **1,25(OH)2D** to diagnose vitamin D deficiency.",
        "**Low ALP rickets** is hypophosphatasia.",
        "**Paget**: big, warm, bent bone with isolated high ALP.",
        "**60,000 IU is weekly**, never daily.",
        "Replete vitamin D before **zoledronic acid**.",
      ],
    },
  },
};

export default revision;
