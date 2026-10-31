import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-hirsutism": {
    checked: "2026-10",
    updated: [
      "International Evidence-based PCOS Guideline 2023: mFG 4-6 or more indicates hirsutism; AMH allowed for PCOM in adults",
      "International PCOS Guideline 2023: lowest-dose EE COCP; cyproterone pill second line for VTE risk",
      "Endocrine Society hirsutism guideline 2018 (current): COCP first, antiandrogen added at 6 months, no antiandrogen without contraception",
      "Endocrine Society CAH guideline 2018: 17-OHP screen with cosyntropin test for 200-1000 ng/dL",
    ],
    master: {
      heading: "Hirsutism and virilisation - the whole topic in one table",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Male-pattern terminal hair in a woman; mFG 8 or more (Indian practice), 4-6 or more (PCOS 2023); virilisation = clitoromegaly, deep voice, balding"],
        ["Not hirsutism", "Hypertrichosis - diffuse, non-androgenic (minoxidil, phenytoin, ciclosporin)"],
        ["Causes", "PCOS 70-80%, idiopathic 5-20%, NCCAH 1-5%, tumours 0.2%, hyperthecosis, Cushing, drugs"],
        ["Mechanism", "Testosterone to DHT by 5-alpha-reductase converts vellus to terminal hair; low SHBG raises free testosterone"],
        ["History", "Tempo of onset, cycles, virilising symptoms, drugs, fertility plans, distress"],
        ["Examination", "mFG 9 areas, clitoral index over 35 mm2, acanthosis, Cushingoid signs, adnexal or abdominal mass"],
        ["First tests", "Morning day 3-10 total testosterone (LC-MS/MS), SHBG/FAI, 17-OHP, TSH, prolactin"],
        ["Tumour cut-offs", "Testosterone over 150-200 ng/dL (ovary); DHEAS over 700 mcg/dL (adrenal)"],
        ["NCCAH", "17-OHP under 200 unlikely, 200-1000 ACTH test, over 1000 diagnostic"],
        ["Cosmetic", "Threading, waxing, shaving; laser (Nd:YAG 1064 nm for dark skin); eflornithine cream to face"],
        ["Drugs", "COCP first; add spironolactone 50-100 mg twice daily at 6 months; finasteride 2.5-5 mg; always contraception"],
        ["Special", "Pregnancy - no antiandrogens; postmenopause - think hyperthecosis or tumour; adolescents - no ultrasound criterion"],
        ["Refer", "Rapid onset, virilisation, tumour-range androgens, mass, Cushingoid features"],
        ["Follow-up", "Re-score at 6 months; metabolic screen in PCOS; mood screening"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Work-up of a woman with hirsutism",
        steps: [
          { label: "Confirm hirsutism, not hypertrichosis", detail: "mFG 9 areas; 8 or more in Indian practice" },
          { label: "Rapid onset or virilisation?", detail: "Months of progression, clitoromegaly, deep voice", tone: "decision" },
          { label: "Yes: testosterone, DHEAS, imaging urgently", detail: "T over 150-200 ng/dL ovary; DHEAS over 700 mcg/dL adrenal", tone: "warn" },
          { label: "No: morning T, SHBG/FAI, 17-OHP, TSH, prolactin", detail: "Days 3-10, off COCP 3 months" },
          { label: "17-OHP 200-1000 ng/dL: ACTH stimulation test", detail: "Stimulated over 1000 ng/dL confirms NCCAH", tone: "decision" },
          { label: "Oligomenorrhoea, high FAI, PCOM: PCOS", detail: "Add OGTT, lipids, mood screen", tone: "good" },
          { label: "Normal androgens and cycles: idiopathic hirsutism", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder for hirsutism",
        steps: [
          { label: "Counsel and lose 5-10% weight", detail: "6-month time frame; hair already terminal stays" },
          { label: "Cosmetic removal and laser", detail: "Nd:YAG 1064 nm for dark skin; eflornithine to face" },
          { label: "COCP first line", detail: "EE 20-30 mcg with levonorgestrel/desogestrel/drospirenone" },
          { label: "Add spironolactone at 6 months", detail: "50-100 mg twice daily; never without contraception", tone: "warn" },
          { label: "Finasteride or cyproterone pill", detail: "Finasteride 2.5-5 mg; cyproterone pill has higher VTE risk" },
          { label: "GnRH agonist or surgery", detail: "Severe hyperandrogenaemia, hyperthecosis, tumour", tone: "decision" },
        ],
      },
      {
        kind: "compare",
        heading: "PCOS versus androgen-secreting tumour",
        columns: ["Feature", "PCOS", "Tumour"],
        rows: [
          ["Onset", "Around puberty, slow", "Any age, often later; over months"],
          ["Virilisation", "Absent", "Present"],
          ["Testosterone", "Mildly raised, usually under 150 ng/dL", "Over 150-200 ng/dL (ovary)"],
          ["DHEAS", "Normal or mildly raised", "Over 700 mcg/dL (adrenal)"],
          ["Imaging", "PCOM or high AMH", "Adnexal or adrenal mass"],
          ["Treatment", "Lifestyle, COCP, antiandrogen", "Surgery"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Hirsutism** is male-pattern terminal hair in a woman, driven by androgens.",
            "**Hypertrichosis** is diffuse non-androgenic hair from drugs like minoxidil and phenytoin.",
            "**Virilisation** adds clitoromegaly, deep voice, temporal balding and muscle bulk.",
            "Affects about **5-15%** of women of reproductive age.",
            "**mFG score**: 9 areas, 0-4 each; 8 or more in Indian practice.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**PCOS** causes 70-80% of hirsutism.",
            "**Idiopathic** hirsutism: normal androgens, regular ovulatory cycles.",
            "**NCCAH** in 1-5%: looks exactly like PCOS.",
            "**Tumours** of ovary or adrenal are rare but must not be missed.",
            "Postmenopausal **hyperthecosis**, Cushing, prolactinoma, drugs like danazol and anabolic steroids.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**5-alpha-reductase** turns testosterone into DHT in the hair follicle.",
            "Androgens convert **vellus to terminal hair**, which stays terminal after treatment.",
            "**Low SHBG** in obesity and insulin resistance raises free testosterone.",
            "**DHEAS** comes almost only from the adrenal gland.",
            "Hair cycles take months, so drugs need **6 months** to show effect.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Tempo** matters most: slow since puberty suggests PCOS, months suggests tumour.",
            "Ask cycles, acne, voice change, balding, drugs and fertility plans.",
            "Examine for **clitoromegaly** (index over 35 mm2), acanthosis and Cushingoid signs.",
            "Feel for a **pelvic or abdominal mass**.",
            "Screen for **depression and distress**; treat any hair that bothers her.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Morning **total testosterone** on days 3-10, ideally by LC-MS/MS.",
            "**SHBG** with free androgen index catches PCOS with normal total testosterone.",
            "**Testosterone over 150-200 ng/dL** suggests an ovarian tumour.",
            "**DHEAS over 700 mcg/dL** suggests an adrenal tumour.",
            "**17-OHP**: under 200 unlikely NCCAH, 200-1000 do ACTH test, over 1000 diagnostic.",
            "Also TSH, prolactin, and OGTT with lipids in PCOS.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Explain that results take **6 months** and existing hair needs removal.",
            "**Weight loss 5-10%** lowers free testosterone in PCOS.",
            "Threading, waxing and shaving are safe; **Nd:YAG laser** suits dark skin.",
            "**COCP** with 20-30 mcg ethinylestradiol is first-line drug therapy.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Add **spironolactone 50-100 mg twice daily** if COCP fails after 6 months.",
            "Never give an antiandrogen **without contraception**: it feminises a male fetus.",
            "**Finasteride 2.5-5 mg** daily is an alternative antiandrogen.",
            "**Cyproterone** pill is second line because of higher VTE risk.",
            "Avoid **flutamide** (liver toxicity); metformin is not for hair alone.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: stop antiandrogens; new virilisation suggests luteoma.",
            "Seeking pregnancy: use **letrozole** for ovulation, not COCP.",
            "**Adolescents**: no ultrasound criterion within 8 years of menarche.",
            "**Postmenopausal** new hirsutism means hyperthecosis or tumour until proved otherwise.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer urgently for **virilisation**, rapid onset, tumour-range androgens or a mass.",
            "Re-score **mFG at 6 months** before changing drugs.",
            "Check **potassium** on spironolactone only with CKD or ACE inhibitor use.",
            "In PCOS, check glucose every 1-3 years and lipids yearly.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**PCOS Guideline 2023**: mFG 4-6 or more indicates hirsutism; AMH allowed for PCOM in adults.",
            "**PCOS Guideline 2023**: lowest-dose COCP; cyproterone pill second line.",
            "**Endocrine Society 2018**: COCP first, antiandrogen at 6 months, no insulin sensitisers for hair.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for hirsutism",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["COCP (EE 20-30 mcg)", "1 tablet orally daily", "Judge at 6 months; long term", "VTE; avoid with migraine aura, smoker over 35, past VTE"],
            ["Spironolactone", "50-100 mg orally twice daily", "Add after 6 months of COCP", "Teratogenic; hyperkalaemia in CKD; spotting"],
            ["Finasteride", "2.5-5 mg orally daily", "6-12 months", "Teratogenic; needs contraception"],
            ["Cyproterone 2 mg + EE 35 mcg", "1 tablet orally daily", "Second line", "Higher VTE risk"],
            ["Eflornithine 13.9% cream", "Topical to face twice daily", "Effect by 8 weeks", "Burning, acne; limited availability"],
          ],
        },
        {
          heading: "Causes and their clue",
          columns: ["Cause", "Clue", "Lab"],
          rows: [
            ["PCOS", "Puberty onset, oligomenorrhoea, obesity", "Mild high T, high FAI"],
            ["Idiopathic", "Regular cycles, normal ovaries", "Normal androgens"],
            ["NCCAH", "PCOS-like, family history", "17-OHP over 200, ACTH test over 1000"],
            ["Ovarian tumour", "Rapid virilisation, adnexal mass", "T over 150-200 ng/dL"],
            ["Adrenal tumour", "Rapid virilisation, Cushingoid", "DHEAS over 700 mcg/dL"],
            ["Hyperthecosis", "Postmenopausal, bilateral solid ovaries", "High T, suppresses with GnRH agonist"],
          ],
        },
        {
          heading: "mFG cut-offs by ethnicity",
          columns: ["Group", "Abnormal score"],
          rows: [
            ["White and Black (US/UK)", "8 or more"],
            ["East Asian", "4-6 or more"],
            ["Mediterranean, Hispanic, Middle Eastern", "9-10 or more"],
            ["Indian practice", "8 or more (treat lower scores with distress)"],
            ["International PCOS Guideline 2023", "4-6 or more"],
          ],
        },
      ],
      remember: [
        "Slow since puberty = PCOS; fast over months = tumour.",
        "Testosterone over 200 = ovary; DHEAS over 700 = adrenal.",
        "Always a morning 17-OHP: NCCAH mimics PCOS.",
        "Six months per drug trial - one hair cycle.",
        "COCP first, spironolactone second, contraception always.",
        "Dark skin laser = Nd:YAG 1064 nm.",
        "Hypertrichosis is not hirsutism - antiandrogens do nothing.",
      ],
    },
  },
};

export default revision;
