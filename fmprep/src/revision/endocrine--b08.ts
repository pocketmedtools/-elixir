import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "endocrine-primary-aldosteronism": {
    checked: "2026-10",
    updated: [
      "Endocrine Society 2025 PA guideline: screen all adults with hypertension; test on most antihypertensives; renin suppression is the key criterion.",
      "Endocrine Society 2025: confirmatory test may be skipped when florid; targeted MRA-first approach accepted when AVS or surgery is unavailable.",
      "AHA/ACC 2025 hypertension guideline: screen resistant hypertension, hypokalaemia, adrenal incidentaloma, OSA and family history of early stroke.",
      "Aldosterone synthase inhibitors (baxdrostat, lorundrostat) shown to lower BP in resistant hypertension (2025 trials) - not yet licensed for PA in India.",
    ],
    master: {
      heading: "Master revision table - primary aldosteronism",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Renin-independent, non-suppressible aldosterone** excess; commonest **curable** cause of hypertension (5-10% of all, about 20% of resistant)."],
        ["Causes", "**Bilateral hyperplasia about 60-65%**, **adenoma about 30-35%** (KCNJ5, commoner in Asians), unilateral hyperplasia, carcinoma, familial FH I-IV."],
        ["Pathophysiology", "MR in collecting duct: ENaC up, Na retained, K and H lost; **renin suppressed**; **aldosterone escape** so no oedema; MR-driven fibrosis of heart and kidney."],
        ["Clinical features", "Resistant or young hypertension; weakness, cramps, polyuria; **only 9-37% hypokalaemic**; AF, stroke, LVH at young age."],
        ["Whom to screen", "**All hypertensives (Endocrine Society 2025)**; priority: resistant HTN, low K, incidentaloma, OSA, AF, onset under 40, family history of early stroke."],
        ["Screening test", "Morning seated **ARR** after correcting K; **renin suppressed** (PRA under 1, DRC under 8) with aldosterone 10 ng/dL or more; ARR above lab cut-off (20-30)."],
        ["Drug effects", "**False positive**: beta-blockers, clonidine, NSAIDs; **false negative**: diuretics, ACEi/ARB, DHP-CCB, MRA, hypokalaemia; washout drugs: verapamil SR, hydralazine, doxazosin."],
        ["Confirmation", "**Saline infusion** 2 L/4 h (aldosterone over 6-10 confirms, under 5 excludes), oral salt load, captopril challenge; skip if low K, undetectable renin, aldosterone over 20."],
        ["Subtyping", "Adrenal CT (exclude carcinoma); **AVS**: selectivity index 2+ (3+ with ACTH), **lateralisation index 4+ = unilateral**; CT mislateralises about 40%."],
        ["Treatment - unilateral", "**Laparoscopic adrenalectomy** after MRA pre-treatment; K corrects in nearly all, BP cured 35-60%; stop MRA and K day 1."],
        ["Treatment - bilateral", "**Spironolactone 12.5-25 mg titrated to 50-100 mg**; eplerenone 25-50 mg BD if gynaecomastia; amiloride; salt under 5 g; target renin un-suppressed."],
        ["Special groups", "Pregnancy: avoid spironolactone, use methyldopa/labetalol/nifedipine; CKD: start low, watch K; under 20: test FH-I (dexamethasone-suppressible)."],
        ["Follow-up", "K and creatinine at 1 and 4 weeks then 3-6 monthly; post-op K weekly for 4 weeks, PASO outcome at 6-12 months; renin yearly on MRA."],
        ["Exam one-liners", "Most PA is normokalaemic; read renin first; AVS before surgery over 35; **Liddle = amiloride, PA = spironolactone, GRA = dexamethasone**."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing primary aldosteronism",
        caption: "Screen, confirm, then subtype - treatment depends on laterality.",
        steps: [
          { label: "Hypertensive patient (all, priority high-risk)", detail: "Resistant HTN, low K, incidentaloma, OSA, AF, onset under 40" },
          { label: "Correct potassium, keep salt liberal", detail: "Target K 4.0 mmol/L or more" },
          { label: "Morning seated aldosterone and renin (ARR)", detail: "Renin suppressed + aldosterone 10 ng/dL or more = positive", tone: "decision" },
          { label: "Florid? (low K, undetectable renin, aldo over 20)", detail: "Yes: skip confirmation; No: saline infusion or captopril test", tone: "decision" },
          { label: "Adrenal CT", detail: "Mass over 4 cm or HU over 10: think carcinoma", tone: "warn" },
          { label: "Wants surgery? Adrenal venous sampling", detail: "Lateralisation index 4+ = unilateral", tone: "decision" },
          { label: "Unilateral: adrenalectomy; bilateral: MRA", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Medical treatment ladder for bilateral PA",
        caption: "Titrate every 4-8 weeks; check K and creatinine at 1 and 4 weeks.",
        steps: [
          { label: "Salt under 5 g/day, weight loss, treat OSA" },
          { label: "Spironolactone 12.5-25 mg OD", detail: "Titrate to 50-100 mg/day until renin un-suppressed" },
          { label: "Switch to eplerenone if sexual side effects", detail: "25-50 mg twice daily" },
          { label: "Add amiloride 5-20 mg/day", detail: "Or if MRA not tolerated" },
          { label: "Add CCB or ACEi/ARB to reach BP target", detail: "Watch potassium closely with ACEi/ARB", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Low-renin hypertension with hypokalaemia",
        columns: ["Condition", "Aldosterone", "Clue", "Treatment"],
        rows: [
          ["Primary aldosteronism", "High", "Non-suppressible on saline", "Adrenalectomy or MRA"],
          ["Liddle syndrome", "Low", "Family history; ENaC mutation", "Amiloride"],
          ["Liquorice / AME", "Low", "Liquorice history; high cortisol:cortisone", "Stop liquorice; MRA"],
          ["Cushing / ectopic ACTH", "Low", "Cushingoid or catabolic", "Treat cause"],
          ["11-beta / 17-alpha-hydroxylase CAH", "Low", "Virilisation or infantilism; high DOC", "Glucocorticoid"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Primary aldosteronism** is aldosterone excess that renin and salt cannot switch off.",
            "Found in **5-10%** of hypertensives and about **20%** of resistant hypertension.",
            "It is the commonest **curable** cause of hypertension.",
            "Only about a third are **hypokalaemic**; most have normal potassium.",
            "India: rarely screened, so patients present late with stroke, AF or CKD.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Bilateral hyperplasia** about two-thirds; treated with tablets.",
            "**Adenoma (Conn)** about one-third; cured by surgery. KCNJ5 mutations are common in Asians.",
            "**Familial type I** (GRA) is dexamethasone-suppressible and causes early haemorrhagic stroke.",
            "Screen: resistant HTN, low potassium, adrenal mass, **sleep apnoea**, AF, onset under 40.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Aldosterone opens **ENaC** in the collecting duct: sodium in, potassium and hydrogen out.",
            "Volume expansion **suppresses renin**, the basis of the ratio test.",
            "**Aldosterone escape** limits sodium gain, so there is no oedema.",
            "MR activation causes **fibrosis** of heart and kidney beyond the effect of BP.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Severe, resistant or **young-onset** hypertension.",
            "Weakness, cramps, palpitations and **polyuria** from low potassium.",
            "**Hypokalaemic periodic paralysis** can occur, especially in Asian men.",
            "Higher **AF, stroke and heart failure** risk than essential hypertension.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**ARR** in the morning after 2 hours upright; correct potassium first.",
            "Positive: **renin suppressed** and aldosterone 10 ng/dL or more.",
            "2025: test **on current drugs**; only switch if results are equivocal.",
            "Beta-blockers give **false positives**; diuretics, ACEi/ARBs and low potassium give false negatives.",
            "Confirm with **saline infusion** or captopril test unless the picture is florid.",
            "**CT** excludes carcinoma; **AVS** decides which side, lateralisation index 4 or more.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Unilateral: **laparoscopic adrenalectomy**; potassium corrects in nearly all.",
            "BP is fully cured in only **35-60%**; many still need some drugs.",
            "Bilateral: **spironolactone** 12.5-25 mg, titrate to 50-100 mg daily.",
            "Use **eplerenone** if gynaecomastia or erectile problems occur.",
            "Aim to **un-suppress renin**; this lowers AF and cardiovascular risk.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Admit if potassium under **3.0 mmol/L**, paralysis or arrhythmia.",
            "IV potassium up to **10 mmol/h** peripherally with cardiac monitoring; correct magnesium.",
            "After surgery **stop MRA and potassium** on day 1; check potassium weekly for 4 weeks.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: avoid spironolactone; use methyldopa, labetalol or nifedipine.",
            "**CKD**: start low and watch potassium; eGFR may fall after treatment.",
            "**Elderly**: more false-positive ratios and lower surgical cure.",
            "**Under 20**: test for familial forms genetically.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer every **positive ratio** to endocrinology for confirmation and subtyping.",
            "On MRA: potassium and creatinine at 1 and 4 weeks, then every 3-6 months.",
            "After surgery: **PASO** biochemical and clinical outcome at 6-12 months.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**Endocrine Society 2025**: screen all hypertensives, not just high-risk ones.",
            "Targeted **MRA-first** treatment is accepted where AVS or surgery is not available.",
            "**AHA/ACC 2025** lists OSA and adrenal incidentaloma as screening triggers.",
            "Aldosterone synthase inhibitors (**baxdrostat**) are promising in resistant hypertension.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in primary aldosteronism",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Spironolactone", "12.5-25 mg oral OD, up to 50-100 mg", "Lifelong (bilateral)", "Gynaecomastia, ED, hyperkalaemia; avoid in pregnancy"],
            ["Eplerenone", "25-50 mg oral BD", "Lifelong", "Hyperkalaemia; CYP3A4 interactions"],
            ["Amiloride", "5-20 mg oral OD", "Lifelong add-on", "Hyperkalaemia"],
            ["Dexamethasone (FH-I)", "0.125-0.25 mg oral at bedtime", "Lifelong", "Cushingoid if overdosed"],
            ["Potassium chloride", "Oral 40-80 mmol/day; IV up to 10 mmol/h", "Until K 4.0 or more", "Hyperkalaemia; never IV bolus"],
          ],
        },
        {
          heading: "Renin and aldosterone in hypokalaemic hypertension",
          columns: ["Condition", "Renin", "Aldosterone", "Clue"],
          rows: [
            ["Primary aldosteronism", "Low", "High", "No oedema; non-suppressible"],
            ["Renovascular / diuretic", "High", "High", "Bruit, drug history"],
            ["Liddle syndrome", "Low", "Low", "Responds to amiloride"],
            ["Liquorice / AME", "Low", "Low", "Liquorice history"],
            ["Cushing syndrome", "Low", "Low", "Cushingoid features"],
          ],
        },
        {
          heading: "Tests and cut-offs",
          columns: ["Test", "Positive result", "Use"],
          rows: [
            ["ARR", "Renin suppressed, aldosterone 10 ng/dL or more", "Screening"],
            ["Saline infusion (2 L over 4 h)", "Aldosterone over 6-10 ng/dL", "Confirmation"],
            ["Captopril challenge", "Aldosterone falls under 30%", "Confirmation"],
            ["Adrenal CT", "Mass over 4 cm suspicious", "Exclude carcinoma"],
            ["AVS", "Lateralisation index 4 or more", "Unilateral vs bilateral"],
          ],
        },
      ],
      remember: [
        "**Read renin first** - no renin suppression, no PA.",
        "**Beta-blocker = false positive; diuretic, ACEi/ARB, low K = false negative.**",
        "**No oedema** in PA because of aldosterone escape.",
        "CT shows anatomy, **AVS shows function**.",
        "**Liddle = amiloride, PA = spironolactone, GRA = dexamethasone.**",
        "Mnemonic **SALT**: Sleep apnoea, AF/adrenal mass, Low potassium, Three-drug resistance.",
        "After adrenalectomy: **stop potassium and MRA on day 1**.",
      ],
    },
  },

  "endocrine-pheochromocytoma": {
    checked: "2026-10",
    updated: [
      "WHO 2022 classification: no benign vs malignant - all PPGLs have metastatic potential; use 'metastatic PPGL'.",
      "ESE/ENSAT 2023: metanephrines needed only for adrenal masses that are not lipid-rich (unenhanced HU over 10).",
      "FDA 2025: belzutifan (HIF-2-alpha inhibitor) approved for advanced or metastatic PPGL; 131I-MIBG (Azedra) withdrawn in 2024.",
      "Endocrine Society 2014 guideline remains the reference for preoperative alpha-blockade; PRESCRIPT (2020) found phenoxybenzamine and doxazosin broadly similar.",
    ],
    master: {
      heading: "Master revision table - phaeochromocytoma and paraganglioma",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Catecholamine-secreting chromaffin tumour** - adrenal (phaeochromocytoma, 80-85%) or extra-adrenal (paraganglioma); together **PPGL**."],
        ["Epidemiology", "0.2-0.6% of hypertensives, about 5% of incidentalomas; **35-40% hereditary**; India: late, large tumours in tertiary series."],
        ["Genetics", "Cluster 1 pseudohypoxia (**SDHx, VHL**, EPAS1), cluster 2 kinase (**RET, NF1**, TMEM127, MAX), cluster 3 Wnt; **SDHB most metastatic**."],
        ["Pathophysiology", "Intratumoral **COMT makes metanephrines continuously**; PNMT needs cortisol so adrenaline tumours are adrenal; alpha-1 vasoconstriction and volume contraction."],
        ["Clinical features", "**Headache, sweating, palpitations**; paroxysmal or sustained HTN with **postural drop**; pallor; triggers - anaesthesia, metoclopramide, steroids, beta-blockers."],
        ["Examination", "Postural hypotension, tachycardia, retinopathy; NF1 skin signs, MEN2B neuromas, VHL retinal angiomas; do not palpate mass deeply."],
        ["Differentials", "Panic disorder, thyrotoxicosis, hypoglycaemia, carcinoid, drugs (cocaine, clonidine withdrawal), menopause."],
        ["Biochemistry", "**Plasma free metanephrines supine** or 24-h urine metanephrines; **over 3-4 times ULN diagnostic**; clonidine suppression for borderline; 3-MT for dopaminergic."],
        ["Imaging and genetics", "CT (HU over 10) or MRI (T2 bright); **68Ga-DOTATATE PET** for PGL/SDHx/metastasis; **germline testing for all**; **no FNAC**."],
        ["Pre-op", "**Phenoxybenzamine 10 mg BD to 1 mg/kg/day** or **doxazosin 2-32 mg/day** for 7-14 days; salt and fluids; **beta-blocker only after 3-4 days**."],
        ["Crisis", "ICU; **phentolamine 1-5 mg IV** every 5 min, nitroprusside, nicardipine, magnesium; never beta first; stabilise before surgery."],
        ["Post-op", "Hypotension (fluids), **hypoglycaemia** (glucose 1-2 hourly for 24 h), steroid cover if bilateral; metanephrines at 2-6 weeks."],
        ["Special groups", "Pregnancy: MRI, alpha-blockade, surgery before 24 weeks or with caesarean; children: test genes; CKD: plasma metanephrines."],
        ["Follow-up", "Metanephrines **yearly for at least 10 years**, lifelong if hereditary; SDHx MRI every 2-3 years; cascade testing of relatives."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing PPGL",
        caption: "Biochemistry first, imaging second, genetics for all.",
        steps: [
          { label: "Suspect: triad, paroxysms, incidentaloma HU over 10, syndrome", detail: "Or crisis with anaesthesia, labour, metoclopramide" },
          { label: "Plasma free metanephrines (supine) or urine", detail: "Stop TCAs, SNRIs, levodopa if possible", tone: "decision" },
          { label: "Over 3-4 times ULN: confirmed", detail: "Borderline: repeat supine, clonidine suppression test", tone: "decision" },
          { label: "CT abdomen-pelvis or MRI", detail: "HU over 10, T2 bright; no biopsy", tone: "warn" },
          { label: "Functional imaging if over 5 cm, PGL or SDHx", detail: "68Ga-DOTATATE PET-CT" },
          { label: "Germline genetic panel for every patient", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Preoperative preparation ladder",
        caption: "7-14 days; targets BP under 130/80 seated, standing systolic over 90, HR 60-70.",
        steps: [
          { label: "Alpha-blocker", detail: "Doxazosin 2 mg titrated to 8-32 mg/day, or phenoxybenzamine 10 mg BD to 1 mg/kg/day" },
          { label: "High salt over 5 g/day and 2.5 L fluid", detail: "From day 2-3 of alpha-blockade" },
          { label: "Add CCB if BP still high", detail: "Nifedipine SR 30-60 mg or amlodipine 5-10 mg" },
          { label: "Beta-blocker after 3-4 days if HR over 90", detail: "Propranolol 20 mg TDS or metoprolol", tone: "warn" },
          { label: "Laparoscopic adrenalectomy", detail: "Early adrenal vein ligation; watch glucose post-op", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Genetic clusters of PPGL",
        root: "PPGL genetics",
        arms: [
          { label: "Cluster 1 - pseudohypoxia", tone: "warn", steps: ["SDHx, VHL, EPAS1, FH", "Noradrenergic or dopaminergic", "Often extra-adrenal; SDHB metastatic"] },
          { label: "Cluster 2 - kinase signalling", tone: "neutral", steps: ["RET (MEN2), NF1, TMEM127, MAX", "Adrenergic (adrenaline)", "Adrenal, often bilateral"] },
          { label: "Cluster 3 - Wnt signalling", tone: "decision", steps: ["Somatic MAML3, CSDE1", "Sporadic", "Aggressive"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**PPGL** are catecholamine-secreting chromaffin tumours: adrenal phaeochromocytoma or extra-adrenal paraganglioma.",
            "Found in 0.2-0.6% of hypertensives and about **5% of adrenal incidentalomas**.",
            "About **35-40% are hereditary**, so the rule of 10s is outdated.",
            "**WHO 2022**: all have metastatic potential; say 'metastatic', not 'malignant'.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Cluster 1**: SDHx, VHL - noradrenergic, extra-adrenal, SDHB metastatic.",
            "**Cluster 2**: RET (MEN2), NF1 - adrenaline-secreting adrenal tumours.",
            "Adrenaline tumours are adrenal because **PNMT needs cortisol**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Triad: **headache, sweating, palpitations**, with pallor.",
            "Hypertension sustained or paroxysmal, with **postural drop** from volume contraction.",
            "Crisis triggers: anaesthesia, labour, **metoclopramide**, steroids, beta-blockers.",
            "Atypical: cardiomyopathy, takotsubo, shock, new diabetes in a lean patient.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Plasma free metanephrines** drawn supine, or 24-hour urine metanephrines.",
            "Over **3-4 times the upper limit** is almost diagnostic.",
            "Tricyclics, SNRIs and levodopa cause **false positives**.",
            "Image only after biochemistry: **CT HU over 10** or MRI T2 bright.",
            "**68Ga-DOTATATE PET** for paraganglioma, SDHx and metastases.",
            "**Genetic testing for every patient**; never do FNAC.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Alpha-blocker for 7-14 days**: doxazosin or phenoxybenzamine.",
            "Add **high salt and fluids** to restore volume.",
            "**Beta-blocker only after** 3-4 days of alpha-blockade.",
            "Then **laparoscopic adrenalectomy**; cortical-sparing for bilateral hereditary disease.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Crisis: ICU and **phentolamine 1-5 mg IV** every 5 minutes.",
            "Alternatives: **nitroprusside**, nicardipine, magnesium sulphate.",
            "Never give **labetalol or a beta-blocker first**.",
            "After surgery watch for **hypotension and hypoglycaemia** for 24-48 hours.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: MRI, alpha-blockade, surgery before 24 weeks or at caesarean.",
            "**Children**: more hereditary, bilateral and extra-adrenal tumours.",
            "**CKD**: use plasma, not urine, metanephrines.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Metanephrines at **2-6 weeks** after surgery to confirm cure.",
            "Then **yearly for at least 10 years**; lifelong if hereditary.",
            "SDHx carriers: whole-body **MRI every 2-3 years**.",
            "Offer **cascade testing** to first-degree relatives.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**Belzutifan** approved by FDA in 2025 for advanced PPGL.",
            "131I-MIBG (Azedra) withdrawn in 2024; **PRRT** increasingly used.",
            "**ESE/ENSAT 2023**: metanephrines only if incidentaloma HU over 10.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in PPGL",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Phenoxybenzamine", "10 mg oral BD, up to 1 mg/kg/day", "7-14 days pre-op", "Orthostasis, tachycardia, post-op hypotension"],
            ["Doxazosin", "2 mg oral OD, up to 8-32 mg/day", "7-14 days pre-op", "First-dose hypotension"],
            ["Propranolol", "20 mg oral TDS", "After 3-4 days of alpha-blockade", "Crisis if given first; asthma"],
            ["Nifedipine SR", "30-60 mg oral OD", "Pre-op add-on", "Oedema, headache"],
            ["Phentolamine", "1-5 mg IV bolus every 5 min", "Crisis, surgery", "Tachycardia, hypotension"],
            ["Sodium nitroprusside", "0.3-10 mcg/kg/min IV", "Crisis", "Cyanide toxicity"],
          ],
        },
        {
          heading: "Paroxysmal symptoms - differential",
          columns: ["Condition", "Clue", "Key test"],
          rows: [
            ["Phaeochromocytoma", "Pallor, headache, postural drop", "Plasma metanephrines"],
            ["Panic disorder", "Hyperventilation, fear", "Metanephrines normal"],
            ["Thyrotoxicosis", "Sustained symptoms, goitre", "TSH suppressed"],
            ["Hypoglycaemia", "Relieved by food", "Glucose in attack"],
            ["Carcinoid", "Flushing, diarrhoea", "Urine 5-HIAA"],
          ],
        },
        {
          heading: "Hereditary syndromes",
          columns: ["Gene", "Tumour pattern", "Other features"],
          rows: [
            ["RET (MEN2)", "Adrenal, bilateral, adrenergic", "Medullary thyroid cancer"],
            ["VHL", "Adrenal, noradrenergic", "Haemangioblastoma, RCC"],
            ["NF1", "Adrenal, adrenergic", "Café-au-lait, neurofibromas"],
            ["SDHB", "Extra-adrenal, metastatic", "RCC, GIST"],
            ["SDHD", "Head and neck, multifocal", "Paternal transmission"],
          ],
        },
      ],
      remember: [
        "**Alpha first, beta later - never beta alone.**",
        "**Metanephrines, not VMA**, and draw them supine.",
        "**Adrenaline means adrenal** - PNMT needs cortisol.",
        "**No biopsy** of an adrenal mass before excluding phaeochromocytoma.",
        "Stuffy nose and mild postural drop mean **adequate alpha-blockade**.",
        "**SDHB = extra-adrenal, metastatic.**",
        "Post-op killers: **hypotension and hypoglycaemia**.",
      ],
    },
  },

  "endocrine-adrenal-incidentaloma": {
    checked: "2026-10",
    updated: [
      "ESE/ENSAT 2023: homogeneous mass 10 HU or less needs no further imaging regardless of size (4 cm threshold dropped).",
      "ESE/ENSAT 2023: 'MACS' replaces subclinical Cushing and possible/autonomous cortisol secretion (DST cortisol over 1.8 mcg/dL without overt features).",
      "ESE/ENSAT 2023: metanephrines only for masses not lipid-rich (over 10 HU); no routine follow-up imaging or hormone tests for benign non-functioning adenomas.",
      "ESE/ENSAT 2023: urine steroid metabolomics as adjunct when ACC suspected; multidisciplinary review for indeterminate masses.",
    ],
    master: {
      heading: "Master revision table - adrenal incidentaloma",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Adrenal mass **1 cm or more** found on imaging done for another reason; 1-5% of CTs, about **7% over 70**."],
        ["Causes", "Non-functioning adenoma (most), **MACS**, phaeochromocytoma 1-5%, aldosteronoma 2-5%, Cushing, **ACC under 2%**, metastasis, myelolipoma; India - **TB, histoplasmosis** if bilateral."],
        ["Two questions", "**Malignant?** (HU, size, texture, growth) and **functioning?** (DST, metanephrines, ARR)."],
        ["Imaging", "**Unenhanced CT 10 HU or less homogeneous = benign, stop**; over 10 HU - washout CT, MRI chemical shift, FDG-PET or repeat at 6-12 months."],
        ["Suspicious features", "**Over 4 cm, over 20 HU, heterogeneous**, irregular, necrosis, growth 20% and 5 mm/year; young age."],
        ["Hormones - all", "**1 mg DST**: 1.8 mcg/dL (50 nmol/L) or less excludes; above without Cushing signs = **MACS**; confirm with low ACTH, low DHEAS."],
        ["Hormones - selective", "**Metanephrines if HU over 10**; **ARR if hypertension or low K**; androgens and steroid metabolomics if ACC suspected; 17-OHP and Synacthen if bilateral."],
        ["DST pitfalls", "**Rifampicin**, carbamazepine, phenytoin, oral oestrogen, depression, alcohol, missed dose."],
        ["Biopsy", "Rarely; only suspected metastasis or infection; **exclude phaeochromocytoma first; never if ACC suspected**."],
        ["Management - benign", "Non-functioning 10 HU or less: **discharge**, no routine follow-up."],
        ["Management - MACS", "Treat **HTN, diabetes, lipids, osteoporosis**; yearly review; individualised adrenalectomy with **hydrocortisone cover**."],
        ["Surgery", "Overt hormone excess, **suspected ACC** (open, expert centre), MACS with worsening comorbidity, growth; alpha-block if phaeochromocytoma."],
        ["Special groups", "Under 40, children, pregnancy: MRI, higher risk; known cancer: FDG-PET, metastasis likely."],
        ["Exam one-liners", "Magic numbers **1 cm, 10 HU, 4 cm, 1.8 mcg/dL**; bad or busy; no biopsy before metanephrines."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Work-up of an adrenal incidentaloma",
        caption: "ESE/ENSAT 2023 - characterise the mass and test function in parallel.",
        steps: [
          { label: "Adrenal mass 1 cm or more found incidentally" },
          { label: "Unenhanced CT attenuation", detail: "10 HU or less homogeneous = benign adenoma", tone: "decision" },
          { label: "Over 10 HU: indeterminate", detail: "Metanephrines; washout CT, MRI, FDG-PET or repeat at 6-12 months", tone: "warn" },
          { label: "1 mg DST in all", detail: "1.8 mcg/dL or less normal; above = MACS if no Cushing signs", tone: "decision" },
          { label: "ARR if hypertension or hypokalaemia" },
          { label: "Androgens, steroid metabolomics if ACC suspected", detail: "Over 4 cm, heterogeneous, over 20 HU", tone: "warn" },
          { label: "Multidisciplinary decision", detail: "Discharge, follow-up imaging or adrenalectomy", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "What to do after the work-up",
        root: "Adrenal incidentaloma result",
        arms: [
          { label: "Benign, non-functioning", tone: "good", steps: ["10 HU or less, DST normal", "Discharge", "No repeat imaging or hormones"] },
          { label: "MACS", tone: "decision", steps: ["Yearly BP, HbA1c, lipids, DXA", "Treat comorbidities", "Surgery if young with worsening disease; steroid cover"] },
          { label: "Overt hormone excess", tone: "warn", steps: ["Cushing, PA (after AVS), phaeochromocytoma", "Adrenalectomy after preparation"] },
          { label: "Suspicious / indeterminate", tone: "warn", steps: ["Over 4 cm, heterogeneous, over 20 HU", "Exclude phaeochromocytoma", "Surgery or repeat imaging at 6-12 months"] },
        ],
      },
      {
        kind: "compare",
        heading: "Adenoma vs phaeochromocytoma vs carcinoma",
        columns: ["Feature", "Adenoma", "Phaeochromocytoma", "Carcinoma"],
        rows: [
          ["Unenhanced HU", "10 or less", "Over 10", "Over 20"],
          ["Size", "Under 4 cm", "3-5 cm", "Over 4-6 cm"],
          ["Texture", "Homogeneous", "Heterogeneous, cystic", "Heterogeneous, necrosis"],
          ["MRI", "Signal loss opposed-phase", "T2 bright", "No signal loss"],
          ["Key biochemistry", "DST (MACS)", "Metanephrines", "Androgens, precursors"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Adrenal mass **1 cm or more** found on imaging done for another reason.",
            "Seen on 1-5% of abdominal CTs and about **7% of people over 70**.",
            "Most are **benign non-functioning adenomas**; carcinoma is under 2%.",
            "Every mass needs two answers: **malignant or not, functioning or not**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Adenoma, MACS adenoma, **phaeochromocytoma**, aldosteronoma, carcinoma, metastasis, myelolipoma.",
            "**Bilateral** masses: think TB, histoplasmosis, metastasis, CAH and macronodular hyperplasia.",
            "Known cancer makes **metastasis** much more likely.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Adenomas are **lipid-rich**, so they measure 10 HU or less on plain CT.",
            "Cortisol-secreting adenomas suppress ACTH, so **dexamethasone fails to suppress cortisol**.",
            "Suppressed ACTH shrinks the other adrenal, causing **post-op adrenal insufficiency**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Unenhanced CT**: 10 HU or less and homogeneous means benign; stop imaging.",
            "Over 10 HU: washout CT, chemical-shift MRI, FDG-PET, or repeat at 6-12 months.",
            "**1 mg DST in everyone**: cortisol 1.8 mcg/dL or less is normal.",
            "**Metanephrines** only if over 10 HU; **ARR** if hypertensive or hypokalaemic.",
            "**Rifampicin and oral oestrogens** give false-positive DST results.",
            "**No biopsy** before excluding phaeochromocytoma; never if carcinoma suspected.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Imaging: **benign**, indeterminate (over 10 HU) or suspicious (over 4 cm, heterogeneous).",
            "Function: non-functioning, **MACS**, overt Cushing, aldosteronoma, phaeochromocytoma.",
            "**MACS**: DST cortisol over 1.8 mcg/dL without Cushing signs.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Benign non-functioning: **discharge**, no follow-up scans.",
            "MACS: treat **hypertension, diabetes, lipids and bones**; review yearly.",
            "Adrenalectomy for MACS is individual; favour it in younger patients with worsening disease.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Surgery for overt hormone excess, **suspected carcinoma** or significant growth.",
            "Suspected carcinoma: **open surgery** at an expert centre.",
            "Give **hydrocortisone 100 mg IV** at induction for cortisol-secreting adenomas.",
            "Phaeochromocytoma: **alpha-block 7-14 days** before surgery.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Under 40, children, pregnancy**: use MRI; higher risk of malignancy and function.",
            "**Known cancer**: FDG-PET; biopsy only if it changes management.",
            "**Bilateral masses in India**: test for adrenal insufficiency and TB.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer urgently if **over 4 cm**, over 20 HU, growing or virilising.",
            "Indeterminate small mass: **one repeat scan** at 6-12 months.",
            "MACS: yearly BP, HbA1c, lipids and **bone density**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ESE/ENSAT 2023**: no size cut-off when HU is 10 or less.",
            "**MACS** replaces subclinical Cushing as the single term.",
            "No routine repeat imaging or hormones for **benign non-functioning** masses.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs and steroid cover",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Dexamethasone (test)", "1 mg oral at 11 pm", "Single dose", "False positive with rifampicin, oestrogen"],
            ["Hydrocortisone (peri-op)", "100 mg IV at induction, then 50 mg 6-8 hourly", "24 h, then oral taper over weeks", "Adrenal crisis if under-dosed"],
            ["Metyrapone", "250 mg oral QID, titrate", "Pre-op Cushing", "Hirsutism, hypokalaemia"],
            ["Doxazosin", "2 mg oral OD, up to 8-32 mg", "7-14 days pre-op if phaeochromocytoma", "First-dose hypotension"],
            ["Spironolactone", "12.5-25 mg oral OD, up to 100 mg", "Lifelong if PA not operated", "Gynaecomastia, hyperkalaemia"],
          ],
        },
        {
          heading: "Differential diagnosis of an adrenal mass",
          columns: ["Lesion", "Imaging", "Biochemistry", "Action"],
          rows: [
            ["Non-functioning adenoma", "10 HU or less", "Normal", "Discharge"],
            ["MACS adenoma", "Adenoma", "DST over 1.8, low ACTH", "Treat comorbidities"],
            ["Phaeochromocytoma", "Over 10 HU, T2 bright", "Metanephrines high", "Alpha-block, surgery"],
            ["Carcinoma", "Over 4 cm, heterogeneous", "Androgens high", "Open surgery"],
            ["Myelolipoma", "Fat below -20 HU", "Normal", "No follow-up"],
          ],
        },
        {
          heading: "Key cut-offs",
          columns: ["Measure", "Cut-off", "Meaning"],
          rows: [
            ["Size", "1 cm", "Definition of incidentaloma"],
            ["Unenhanced CT", "10 HU or less", "Benign lipid-rich adenoma"],
            ["Size", "Over 4 cm", "Higher carcinoma risk"],
            ["1 mg DST cortisol", "1.8 mcg/dL (50 nmol/L)", "Above this = MACS"],
            ["Growth", "20% and 5 mm in a year", "Suspicious, consider surgery"],
          ],
        },
      ],
      remember: [
        "Every incidentaloma: **is it bad, is it busy?**",
        "**10 HU or less = benign**, whatever the size.",
        "**DST for all**; metanephrines only if over 10 HU.",
        "**ARR** only if hypertensive or hypokalaemic.",
        "**No biopsy** before metanephrines.",
        "Magic numbers: **1 cm, 10 HU, 4 cm, 1.8 mcg/dL**.",
        "**Steroid cover** after removing a cortisol-secreting adenoma.",
      ],
    },
  },

  // ENTRIES-END
};

export default revision;
