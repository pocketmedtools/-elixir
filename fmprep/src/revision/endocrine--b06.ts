import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-pituitary-approach": {
    checked: "2026-10",
    updated: [
      "WHO 2022 (5th edition): adenoma renamed pituitary neuroendocrine tumour (PitNET), lineage-based classification; carcinoma renamed metastatic PitNET",
      "Pituitary Society 2023 prolactinoma consensus: surgery an alternative first-line option in expert centres",
      "ESE/Endocrine Society 2024 adrenal insufficiency guideline: lower cortisol cut-offs with newer assays",
      "Endocrine Society 2011 incidentaloma guideline confirmed as current reference for work-up and follow-up",
    ],
    master: {
      heading: "Master revision table - pituitary tumours and incidentalomas",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Benign anterior pituitary tumour, now **PitNET (WHO 2022)**; **micro under 10 mm, macro 10 mm or more, giant 40 mm or more**; prevalence about **1 in 1000**; incidental lesions in about **10% of MRIs**."],
        ["Classification", "Function: **prolactinoma 40-50%**, **non-functioning 30-35%**, GH 10-15%, ACTH 5-10%, TSH under 1%; lineage **PIT1, TPIT, SF1, null cell**; **Knosp grade** for cavernous sinus invasion."],
        ["Pathophysiology", "Upward growth presses inferonasal crossing fibres - **superior bitemporal quadrantanopia**; stalk compression cuts dopamine - **prolactin under 100**; compression loses **GH, LH/FSH, TSH, ACTH** in that order."],
        ["History", "Headache, bumping into things, **amenorrhoea/galactorrhoea, low libido**, features of acromegaly or Cushing, fatigue, postural dizziness; thunderclap headache = **apoplexy**."],
        ["Examination", "**Red-pin confrontation fields**, acuity, fundus (**optic atrophy**), CN III/IV/VI, galactorrhoea, acromegalic or Cushingoid features, pale hairless skin, testes."],
        ["Differential", "**Craniopharyngioma** (calcified cyst, AVP deficiency), Rathke cyst, **hypophysitis**, meningioma, **aneurysm**, TB, metastasis, hyperplasia of hypothyroidism or pregnancy."],
        ["Investigations", "**Gadolinium MRI pituitary**; **prolactin (1:100 dilution) and IGF-1 in all**; macro - **8-9 am cortisol, FT4 with TSH, LH/FSH, sex steroid, sodium**; perimetry if near chiasm; OCT."],
        ["Treatment - medical", "**Prolactinoma - cabergoline first**; replace **hydrocortisone before levothyroxine**; free T4 target upper half of normal; sick-day rules, steroid card."],
        ["Treatment - surgery", "**Endoscopic transsphenoidal surgery** for **field defect, chiasmal compression, apoplexy with visual loss, hypersecretion (not prolactin)**; relative - growth, pregnancy plans."],
        ["Post-op care", "Sodium daily 10 days - **triphasic response** (DI day 1-2, SIADH day 5-10); morning cortisol; CSF leak watch; function tests 6-12 weeks; MRI 3-4 months."],
        ["Radiotherapy", "Radiosurgery or fractionated RT for residual growth; **hypopituitarism 30-50% at 10 years**; **temozolomide** for aggressive PitNET."],
        ["Incidentaloma follow-up", "Micro: **MRI 1 year, then every 1-2 years for 3 years**; macro: **MRI 6 months, then yearly for 3 years**, hormones 6 months then yearly."],
        ["Red flags", "Thunderclap headache with visual loss, falling acuity, shock or hyponatraemia, CSF rhinorrhoea, post-op meningitis."],
        ["Latest updates", "**WHO 2022 PitNET**; **Pituitary Society 2023** surgery as option for prolactinoma; **ESE 2024** lower cortisol cut-offs with new assays."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Work-up of a pituitary lesion or incidentaloma",
        caption: "Endocrine Society 2011 sequence - the same steps for a lesion found by symptoms or by chance.",
        steps: [
          { label: "Lesion on CT or MRI", detail: "Get dedicated gadolinium pituitary MRI" },
          { label: "History and examination", detail: "Hormone excess, deficiency, fields by red pin" },
          { label: "Prolactin and IGF-1 in all", detail: "Dilute prolactin 1:100 if macro; Cushing tests if suspected", tone: "decision" },
          { label: "Size 10 mm or more?", detail: "Cortisol, FT4/TSH, LH/FSH, sex steroid, sodium", tone: "decision" },
          { label: "Touching the chiasm?", detail: "Formal perimetry and OCT", tone: "decision" },
          { label: "Visual loss or hypersecretion (not prolactin)", detail: "Transsphenoidal surgery", tone: "warn" },
          { label: "None of these", detail: "Watch: MRI 6-12 months, then yearly", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Management ladder for a non-functioning macroadenoma",
        steps: [
          { label: "Replace deficient hormones", detail: "Hydrocortisone first, then levothyroxine", tone: "neutral" },
          { label: "Observe if away from chiasm", detail: "MRI 6 months, then yearly; fields if growth", tone: "neutral" },
          { label: "Endoscopic transsphenoidal surgery", detail: "If chiasm compressed or visual loss", tone: "decision" },
          { label: "Radiosurgery or fractionated RT", detail: "Residual tumour that grows", tone: "decision" },
          { label: "Temozolomide", detail: "Aggressive PitNET after surgery and RT", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Prolactin level with a macroadenoma - what it means",
        columns: ["Finding", "Stalk effect", "Macroprolactinoma", "Hook effect"],
        rows: [
          ["Prolactin", "Under 100 ng/mL", "Over 250 ng/mL", "Falsely normal or mildly high"],
          ["After 1:100 dilution", "Unchanged", "Unchanged", "Rises to thousands"],
          ["Tumour type", "Non-functioning", "Lactotroph", "Giant lactotroph"],
          ["Treatment", "Surgery if chiasm compressed", "Cabergoline", "Cabergoline"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "A pituitary adenoma is now called a **PitNET** (WHO 2022).",
            "**Micro** under 10 mm, **macro** 10 mm or more, **giant** 40 mm or more.",
            "Prevalence is about **1 in 1000**; incidental lesions appear on about 10% of MRIs.",
            "**Prolactinoma** is commonest (40-50%), then **non-functioning** tumours (30-35%).",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Growth from below presses crossing fibres, giving **superior bitemporal quadrantanopia** first.",
            "Stalk compression blocks dopamine, so prolactin rises, usually **under 100 ng/mL**.",
            "Hormones fail in order: **GH, LH/FSH, TSH, ACTH**.",
            "**AVP deficiency** is rare in adenomas and suggests another lesion.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Headache, visual field loss and **hypogonadism** are the common presenting features.",
            "Women present early with amenorrhoea; **men present late** with large tumours.",
            "Look for features of **acromegaly, Cushing** or thyrotoxicosis.",
            "Thunderclap headache with visual loss means **apoplexy**.",
            "Examine fields with a **red pin**, acuity, fundus and eye movements.",
          ],
        },
        {
          title: "Differential diagnosis",
          points: [
            "**Craniopharyngioma**: calcified suprasellar cyst, AVP deficiency, children or older adults.",
            "**Hypophysitis**: pregnancy or checkpoint inhibitors, thick stalk, early ACTH loss.",
            "Exclude **carotid aneurysm** before surgery.",
            "**Hypothyroidism** and pregnancy cause pituitary hyperplasia, not tumour.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Gadolinium MRI** with dedicated pituitary cuts.",
            "**Prolactin and IGF-1** for every lesion; dilute prolactin with a macroadenoma.",
            "Macroadenoma: **morning cortisol, free T4, TSH, LH, FSH, sex steroid, sodium**.",
            "Central hypothyroidism is **low free T4 with normal TSH**.",
            "**Formal perimetry** if the lesion reaches the chiasm.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Prolactinoma**: cabergoline first, even with visual loss.",
            "Others with chiasm compression or hypersecretion: **transsphenoidal surgery**.",
            "Replace **hydrocortisone before levothyroxine**.",
            "Non-functioning micro: **no treatment**, MRI at 1 year.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Residual growing tumour: **radiosurgery** or fractionated radiotherapy.",
            "Radiotherapy causes **hypopituitarism in 30-50%** over 10 years.",
            "Aggressive tumours: **temozolomide**.",
            "After surgery check **sodium daily for 10 days** for DI and SIADH.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Macroincidentaloma: **MRI at 6 months**, then yearly for 3 years.",
            "Microincidentaloma: **MRI at 1 year**, then every 1-2 years for 3 years.",
            "After surgery: hormones at 6-12 weeks, **MRI at 3-4 months**.",
            "Same-day referral for apoplexy, falling acuity or adrenal crisis.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**WHO 2022**: PitNET name, lineage typing, metastatic PitNET.",
            "**Pituitary Society 2023**: surgery is an option for selected prolactinomas.",
            "**ESE 2024**: lower cortisol cut-offs with newer assays.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs around pituitary tumours",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Cabergoline", "0.25-0.5 mg orally once or twice weekly", "Titrate monthly by prolactin", "Nausea, postural drop, impulse control disorder"],
            ["Hydrocortisone", "15-20 mg/day orally in 2-3 doses", "Lifelong; double on sick days", "Over-replacement: weight gain, bone loss"],
            ["Hydrocortisone IV", "100 mg bolus, then 50 mg 6-hourly", "Until stable, then oral", "Hyperglycaemia"],
            ["Levothyroxine", "1.6 microgram/kg/day orally", "Lifelong; free T4 upper half", "Only after steroid cover"],
            ["Desmopressin", "50-100 microgram oral or 1-2 microgram SC", "As needed for proven polyuria", "Hyponatraemia"],
          ],
        },
        {
          heading: "Classification of pituitary tumours",
          columns: ["Type", "Share", "Syndrome", "First treatment"],
          rows: [
            ["Lactotroph", "40-50%", "Amenorrhoea, galactorrhoea", "Cabergoline"],
            ["Non-functioning", "30-35%", "Mass effect, hypopituitarism", "Surgery or observe"],
            ["Somatotroph", "10-15%", "Acromegaly", "Surgery"],
            ["Corticotroph", "5-10%", "Cushing disease", "Surgery"],
            ["Thyrotroph", "Under 1%", "Central hyperthyroidism", "Surgery"],
          ],
        },
        {
          heading: "Sellar mass differential",
          columns: ["Lesion", "Key clue", "Imaging"],
          rows: [
            ["Macroadenoma", "Adult, hypogonadism, no DI", "Snowman mass"],
            ["Craniopharyngioma", "Child or elderly, DI, growth failure", "Calcified cyst"],
            ["Rathke cleft cyst", "Incidental", "Non-enhancing cyst"],
            ["Hypophysitis", "Postpartum or ipilimumab", "Thick enhancing stalk"],
            ["Hyperplasia", "Hypothyroidism, pregnancy", "Diffuse symmetric gland"],
          ],
        },
      ],
      remember: [
        "**Prolactin plus IGF-1** for every pituitary lesion.",
        "**Prolactin under 100 with a big tumour** = stalk effect; ask for dilution.",
        "Hormone loss order: **Go Look For The Adrenal** (GH, LH, FSH, TSH, ACTH).",
        "**Upper quadrants** first for pituitary, **lower quadrants** for craniopharyngioma.",
        "**Steroids before thyroxine**, always.",
        "**Free T4**, not TSH, in central hypothyroidism.",
        "**DI at presentation** means not an adenoma until proved.",
      ],
    },
  },
};

export default revision;
