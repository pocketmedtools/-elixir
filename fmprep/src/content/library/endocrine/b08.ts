import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "endocrine-primary-aldosteronism",
  title: "Primary aldosteronism",
  frequency: "common",
  oneLiner:
    "**Primary aldosteronism** is **renin-independent, non-suppressible aldosterone secretion** from one or both adrenals (aldosterone-producing adenoma or bilateral hyperplasia), the **commonest curable cause of secondary hypertension**; screen with the **aldosterone-renin ratio (suppressed renin with inappropriately normal or high aldosterone)**, confirm, lateralise by **adrenal venous sampling**, and treat unilateral disease with **laparoscopic adrenalectomy** and bilateral disease with a **mineralocorticoid receptor antagonist**.",
  keywords: [
    "PA",
    "Conn syndrome",
    "hyperaldosteronism",
    "aldosterone-renin ratio",
    "ARR",
    "aldosterone-producing adenoma",
    "APA",
    "bilateral adrenal hyperplasia",
    "idiopathic hyperaldosteronism",
    "adrenal venous sampling",
    "AVS",
    "saline infusion test",
    "spironolactone",
    "eplerenone",
    "glucocorticoid-remediable aldosteronism",
    "KCNJ5",
    "hypokalaemic hypertension",
    "resistant hypertension",
    "baxdrostat",
    "aldosterone synthase inhibitor",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Primary aldosteronism (PA)** is autonomous aldosterone production that is **independent of the renin-angiotensin system** and **not suppressed by sodium loading**, causing hypertension, sodium retention, renin suppression and (in a minority) potassium loss. [Endocrine Society 2025]",
        "PA is found in about **5-10% of all hypertensives** and **about 20% of resistant hypertension**, rising with BP grade - it is the **commonest endocrine (and curable) cause of hypertension**. [Harrison 22e]",
        "Community studies with sensitive assays show a **continuum of renin-independent aldosterone excess** even in normotensive people, so overt PA is the tip of a much larger iceberg. [Endocrine Society 2025]",
        "Only **9-37% of patients have hypokalaemia** - the classic 'hypokalaemic hypertension' picture misses most cases. [Harrison 22e]",
        "Fewer than **2-3% of eligible hypertensives worldwide are ever screened**; PA remains one of the most under-diagnosed conditions in medicine. [Endocrine Society 2025]",
        "**India**: with about **22-30% adult hypertension prevalence** (NFHS-5, ICMR-INDIAB) there are likely several million people with PA, but screening is rare outside tertiary endocrine units and most present only after **stroke, AF or CKD** have occurred. [ICMR-INDIAB 2023]",
        "Indian single-centre series report **aldosterone-producing adenomas presenting younger, with severe hypokalaemia and larger tumours**, a sign of late diagnosis rather than a different disease. [Indian J Endocrinol Metab]",
        "**Subtype split**: about **two-thirds bilateral (idiopathic) adrenal hyperplasia** and **one-third unilateral** disease (mostly aldosterone-producing adenoma, rarely unilateral hyperplasia or carcinoma). [Harrison 22e]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**Aldosterone-producing adenoma (APA, Conn adenoma)**: usually under 2 cm, golden-yellow, unilateral - the surgically curable form. [Harrison 22e]",
        "**Bilateral idiopathic hyperaldosteronism (IHA)**: micronodular or diffuse zona glomerulosa hyperplasia - treated medically. [Harrison 22e]",
        "**Somatic driver mutations** in APAs: **KCNJ5** (potassium channel - about 40% in Western series and **60-80% in East Asian series**), ATP1A1, ATP2B3, CACNA1D and CTNNB1. [Williams Endocrinology 15e]",
        "**Aldosterone-producing micronodules (cell clusters)** with CACNA1D mutations increase with age - explaining the rising prevalence of renin-independent aldosteronism in older adults. [Williams Endocrinology 15e]",
        "**Familial hyperaldosteronism (FH)**: type I - **glucocorticoid-remediable aldosteronism** (CYP11B1/CYP11B2 chimeric gene, dexamethasone-suppressible); type II - CLCN2; type III - germline KCNJ5; type IV - CACNA1H. [Endocrine Society 2025]",
        "**Rare**: aldosterone-secreting adrenocortical carcinoma (large mass, often co-secretes cortisol or androgens) and ectopic aldosterone secretion (ovary, kidney). [Harrison 22e]",
        "**High-risk groups to screen**: resistant hypertension, BP 150/100 or more, hypokalaemia (spontaneous or diuretic-induced), adrenal incidentaloma with hypertension, **obstructive sleep apnoea**, **AF without structural cause**, hypertension under 40 years, and family history of early hypertension or stroke under 40. [AHA/ACC 2025]",
      ],
    },
    {
      heading: "Pathophysiology",
      points: [
        "Aldosterone binds the **mineralocorticoid receptor (MR)** in the principal cells of the **collecting duct**, increasing **ENaC** (apical sodium channel) and basolateral **Na-K-ATPase** - sodium is reabsorbed and potassium and hydrogen ions are secreted. [Harrison 22e]",
        "Sodium retention expands volume and raises BP; volume expansion then **suppresses renin** - the biochemical fingerprint (high aldosterone, low renin) that the ARR exploits. [Harrison 22e]",
        "**Aldosterone escape**: after 3-5 days of retention, pressure natriuresis and ANP limit further sodium gain, so **oedema is absent** and serum sodium is only high-normal (142-146 mmol/L). [Harrison 22e]",
        "Potassium wasting causes **hypokalaemia**, which in turn **reduces aldosterone secretion** - correcting potassium before testing avoids a false-negative ARR. [Endocrine Society 2025]",
        "Hydrogen-ion secretion causes **metabolic alkalosis**; hypokalaemia causes **nephrogenic diabetes insipidus (polyuria, nocturia)**, muscle weakness and impaired insulin secretion (glucose intolerance). [Harrison 22e]",
        "**Non-epithelial MR effects** - inflammation, fibrosis and oxidative stress in heart, vessels and kidney - explain why PA carries **more cardiovascular damage than essential hypertension at the same BP**. [Williams Endocrinology 15e]",
        "Glomerular hyperfiltration in PA **masks underlying CKD**; eGFR often falls after adrenalectomy or MRA, unmasking true kidney function. [Endocrine Society 2025]",
        "**Rationale for drugs**: MR antagonists block the receptor (spironolactone, eplerenone); amiloride blocks ENaC downstream; aldosterone synthase (CYP11B2) inhibitors stop production at source. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Classification and subtypes",
      points: [
        "**By laterality** (the one that decides treatment): **unilateral** (APA, unilateral adrenal hyperplasia, carcinoma) - surgical; **bilateral** (IHA, familial forms) - medical. [Endocrine Society 2025]",
        "**Sporadic vs familial**: test for familial forms when PA starts **before 20 years** or there is a family history of PA or stroke under 40. [Endocrine Society 2025]",
        "**FH type I (GRA)**: autosomal dominant, early severe hypertension, early haemorrhagic stroke from intracranial aneurysm; treat with low-dose glucocorticoid. [Harrison 22e]",
        "**Severity spectrum**: from mild renin-independent aldosteronism with normokalaemia to florid hypokalaemic PA - the 2025 guideline treats it as a continuum, not a yes/no state. [Endocrine Society 2025]",
        "**PASO outcome criteria** (Primary Aldosteronism Surgical Outcome, 2017) grade surgical success as **complete, partial or absent** for both clinical (BP) and biochemical (K, ARR) cure. [PASO 2017]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "Most patients have **only hypertension** - often moderate to severe, **resistant to three drugs** including a diuretic, or detected young. [Harrison 22e]",
        "Hypokalaemia symptoms: **muscle weakness, cramps, fatigue, palpitations**, rarely **hypokalaemic periodic paralysis** (especially in Asian men). [Harrison 22e]",
        "**Polyuria and nocturia** from hypokalaemic nephrogenic diabetes insipidus. [Harrison 22e]",
        "**Diuretic-induced hypokalaemia** that is severe (potassium under 3.0 mmol/L) or slow to recover is a classic clue. [Endocrine Society 2025]",
        "**Cardiovascular events at young age**: stroke, AF, heart failure, MI - PA carries about **2-fold stroke, 3-4-fold AF and 2-fold heart failure risk** vs essential hypertension. [Monticone, Lancet Diab Endocrinol 2018]",
        "Ask about **snoring and daytime sleepiness** (OSA is both a cause and a consequence of aldosterone excess). [AHA/ACC 2025]",
        "Ask about **liquorice**, carbenoxolone and topical/oral steroids - these cause pseudohyperaldosteronism with low aldosterone. [Harrison 22e]",
        "**Family history** of early hypertension or haemorrhagic stroke (FH-I). [Endocrine Society 2025]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Hypertension without oedema** - absence of oedema despite sodium retention reflects aldosterone escape. [Harrison 22e]",
        "**Hypertensive target-organ damage** disproportionate to BP duration: LVH (heaving apex), grade II-III retinopathy. [Harrison 22e]",
        "**Proximal muscle weakness, reduced reflexes** with hypokalaemia; **Trousseau and Chvostek signs** can appear with alkalosis-related low ionised calcium and hypomagnesaemia. [Harrison 22e]",
        "**Irregular pulse** (AF) - a structural-heart-disease-free AF in a hypertensive is a screening trigger. [AHA/ACC 2025]",
        "**No Cushingoid features** expected - their presence with PA suggests a co-secreting adenoma or carcinoma. [Endocrine Society 2025]",
        "Look for **features of other secondary causes**: renal bruit (renovascular), radio-femoral delay (coarctation), paroxysms (phaeochromocytoma), large neck (OSA). [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Secondary hyperaldosteronism** (renovascular disease, diuretics, malignant hypertension, renin-secreting tumour): aldosterone high but **renin also high** - ARR normal. [Harrison 22e]",
        "**Liquorice ingestion / apparent mineralocorticoid excess (11-beta-HSD2 deficiency)**: hypertension, hypokalaemia, **low renin and low aldosterone** - cortisol acts on the MR. [Harrison 22e]",
        "**Liddle syndrome** (gain-of-function ENaC): low renin, **low aldosterone**, responds to **amiloride, not spironolactone**. [Harrison 22e]",
        "**Cushing syndrome / ectopic ACTH**: cortisol overwhelms 11-beta-HSD2; hypokalaemia with low aldosterone and Cushingoid or catabolic features. [Harrison 22e]",
        "**CAH (11-beta-hydroxylase or 17-alpha-hydroxylase deficiency)**: DOC excess, low renin and low aldosterone, virilisation or sexual infantilism - see the CAH topic. [Endocrine Society 2018]",
        "**Bartter and Gitelman syndromes**: hypokalaemic alkalosis but **normal or low BP and high renin**. [Harrison 22e]",
        "**Low-renin essential hypertension** (common in older and African-origin patients): renin low but aldosterone also low - no autonomous excess. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Investigations - screening in OPD and district hospital",
      points: [
        "**Screening test**: morning (after 2 hours upright, seated 5-15 minutes) **plasma aldosterone and plasma renin activity (PRA) or direct renin concentration (DRC)** - the **aldosterone-renin ratio (ARR)**. [Endocrine Society 2025]",
        "**Positive screen**: **suppressed renin** (PRA under about 1 ng/mL/h or DRC under about 8 mU/L) with **aldosterone not suppressed** (commonly 10 ng/dL or more by immunoassay; LC-MS/MS thresholds are lower) and an ARR above the laboratory cut-off (often **20-30 ng/dL per ng/mL/h**). [Endocrine Society 2025]",
        "**Correct potassium first** (target 4.0 mmol/L or more) and allow liberal salt - hypokalaemia lowers aldosterone and causes false negatives. [Endocrine Society 2025]",
        "**2025 change**: screening can be done **on most antihypertensives without stopping them**; interpret with drug effects in mind and repeat after switching only if results are equivocal. [Endocrine Society 2025]",
        "**False negatives** (renin raised): diuretics, ACE inhibitors, ARBs, dihydropyridine CCBs, MRAs, hypokalaemia, low-salt diet, pregnancy. **False positives** (renin lowered): **beta-blockers, clonidine, NSAIDs**, CKD, older age, oestrogen pills (lower DRC). [Endocrine Society 2025]",
        "**Drugs with minimal interference** if a washout is needed: **verapamil SR, hydralazine, prazosin or doxazosin**; MRAs need 4-6 weeks off only if renin is not suppressed on them. [Endocrine Society 2025]",
        "**Supportive bedside tests**: serum potassium, sodium (high-normal), **venous bicarbonate (alkalosis)**, 24-hour urinary potassium over 30 mmol/day with hypokalaemia (renal loss), ECG (U waves, LVH), echo. [Harrison 22e]",
        "**Renin suppression is the key variable** - a high ARR from very low renin with low aldosterone is not PA; always read the two numbers, not just the ratio. [Endocrine Society 2025]",
      ],
    },
    {
      heading: "Investigations - confirmation, subtype and lateralisation (tertiary)",
      points: [
        "**Saline infusion test** (2 L normal saline over 4 hours, seated version preferred): post-infusion aldosterone **over about 6-10 ng/dL confirms**, under 5 ng/dL makes PA unlikely. [Endocrine Society 2025]",
        "**Oral salt loading**: sodium intake over 200 mmol/day for 3 days, then **24-hour urine aldosterone over 12 mcg/day** with urine sodium over 200 mmol/day confirms. [Endocrine Society 2016]",
        "**Captopril challenge** (25-50 mg orally): aldosterone **suppressed by under 30%** with renin still suppressed supports PA - simplest outpatient option. [Endocrine Society 2016]",
        "**Fludrocortisone suppression test** (0.1 mg 6-hourly for 4 days with salt and potassium): most accurate but needs admission; rarely used in India. [Endocrine Society 2016]",
        "**Skip confirmation** when the screen is unequivocal: **spontaneous hypokalaemia, undetectable renin and aldosterone over 20 ng/dL**. [Endocrine Society 2025]",
        "**Adrenal CT (thin-slice, adrenal protocol)** in all confirmed cases who would consider surgery - to exclude carcinoma (large, heterogeneous, over 4 cm) and map anatomy; **CT alone mislateralises in about 40%** because non-functioning incidentalomas are common. [Endocrine Society 2025]",
        "**Adrenal venous sampling (AVS)**: gold standard for lateralisation in surgical candidates; **selectivity index** (adrenal/IVC cortisol) **2 or more unstimulated or 3-5 or more with ACTH**, and **lateralisation index** (cortisol-corrected aldosterone ratio) **4 or more indicates unilateral** disease, under 3 bilateral. [Endocrine Society 2025]",
        "AVS may be omitted in a **patient under 35 with spontaneous hypokalaemia, marked aldosterone excess and a clear unilateral adenoma on CT**; functional PET (**11C-metomidate, MATCH trial**) is an emerging non-invasive alternative. [MATCH, Nat Med 2023]",
        "**Genetic testing** for FH-I (CYP11B1/CYP11B2 chimera) and KCNJ5 when onset is before 20 years or there is a family history. [Endocrine Society 2025]",
      ],
    },
    {
      heading: "Management in OPD / primary care",
      points: [
        "**Unilateral PA - laparoscopic unilateral adrenalectomy** is first choice: **hypokalaemia corrects in nearly 100%**, BP improves in almost all and is **cured in about 35-60%** (lower with older age, long duration and obesity). [Endocrine Society 2025]",
        "**Bilateral PA or patient unfit / unwilling for surgery - MRA**: **spironolactone 12.5-25 mg once daily**, titrate every 4-8 weeks to **50-100 mg/day** (higher doses rarely needed). [Endocrine Society 2025]",
        "**Eplerenone 25-50 mg twice daily** if spironolactone causes **gynaecomastia, breast pain, erectile dysfunction or menstrual upset** (about 10% at 50 mg/day, much more above 100 mg) - more selective but shorter-acting and costlier. [Endocrine Society 2025]",
        "**Target of MRA therapy**: titrate until **renin is un-suppressed** (PRA 1 ng/mL/h or more) - patients who keep suppressed renin on MRA retain excess cardiovascular and AF risk. [Hundemer, Lancet Diab Endocrinol 2018]",
        "**Amiloride 5-20 mg/day** (ENaC blocker) is an alternative or add-on when MRAs are not tolerated; it corrects potassium but has no anti-fibrotic MR effect. [Harrison 22e]",
        "**Salt restriction to under 5 g/day** (under 2 g sodium) enhances MRA response; add CCB or ACE inhibitor/ARB if BP stays above target. [AHA/ACC 2025]",
        "**FH-I (GRA)**: smallest dose of glucocorticoid that normalises BP - **dexamethasone 0.125-0.25 mg or prednisolone 2.5-5 mg at bedtime**; in children prefer MRA. [Endocrine Society 2025]",
        "**Monitor potassium and creatinine** at 1 week, 4 weeks, then 3-monthly after starting or changing an MRA, especially with CKD, diabetes or ACE inhibitor/ARB use. [Endocrine Society 2025]",
        "**Resource-limited setting**: when AVS or surgery is not accessible, the 2025 guideline accepts a **targeted MRA-first approach** after a positive screen (and a confirmation where available). [Endocrine Society 2025]",
      ],
    },
    {
      heading: "Management in IPD / emergency",
      points: [
        "**Admit** with **potassium under 2.5-3.0 mmol/L**, hypokalaemic paralysis, ECG changes (U waves, arrhythmia), or hypertensive emergency. [Harrison 22e]",
        "**IV potassium chloride**: up to **10 mmol/h peripherally** (20 mmol/h via central line with cardiac monitoring), with oral KCl 40-80 mmol/day; correct **magnesium** too. [ICMR STW 2023]",
        "**Hypertensive emergency** is treated as usual (labetalol, nicardipine, nitroglycerine) - see the Hypertension topic; PA work-up follows once stable. [AHA/ACC 2025]",
        "**Pre-adrenalectomy**: control BP and **normalise potassium with an MRA** for 2-4 weeks; this also reduces post-operative hyperkalaemia. [Endocrine Society 2025]",
        "**Post-adrenalectomy**: **stop MRA and potassium supplements on day 1**, reduce antihypertensives, measure **potassium weekly for 4 weeks** - contralateral zona glomerulosa suppression causes **hyperkalaemia in about 5-15%** (more with CKD), occasionally needing fludrocortisone. [Endocrine Society 2025]",
        "Check **plasma aldosterone and renin the morning after surgery** to document biochemical cure. [PASO 2017]",
        "If the 1 mg DST shows **concomitant cortisol co-secretion** pre-operatively, give **perioperative hydrocortisone cover** to prevent post-op adrenal insufficiency. [Endocrine Society 2025]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: hypertension and hypokalaemia may worsen or paradoxically improve (progesterone is an MR antagonist); **spironolactone is avoided** (anti-androgen, feminises male fetus); use **methyldopa, labetalol, nifedipine**, amiloride or eplerenone if needed; surgery if required in the **second trimester**. [Endocrine Society 2025]",
        "**CKD**: renin is lower and potassium higher, so ARR may be falsely positive and MRAs risk hyperkalaemia - start low (spironolactone 12.5 mg) and monitor; post-adrenalectomy eGFR may fall as hyperfiltration resolves. [Endocrine Society 2025]",
        "**Diabetes**: PA worsens insulin secretion via hypokalaemia; MRA or surgery improves glycaemia modestly; avoid confusion with SGLT2 inhibitor-related volume changes. [Williams Endocrinology 15e]",
        "**Elderly over 65**: higher false-positive ARR (low renin with age), more micronodular disease and lower surgical cure - weigh AVS and surgery against comorbidity. [Endocrine Society 2025]",
        "**Children and young adults**: suspect **familial forms** and test genetically; GRA presents in childhood with early stroke. [Endocrine Society 2025]",
        "**OSA**: 10-20% of patients with OSA and resistant hypertension have PA - screen them. [AHA/ACC 2025]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Cardiovascular**: higher rates of **stroke (about 2.6-fold), CAD, AF (3.5-fold), heart failure and LVH** than matched essential hypertension. [Monticone, Lancet Diab Endocrinol 2018]",
        "**Renal**: hyperfiltration, albuminuria and progressive CKD; hypokalaemic nephropathy with cysts. [Harrison 22e]",
        "**Metabolic**: impaired glucose tolerance, metabolic syndrome, osteoporosis (calciuria). [Williams Endocrinology 15e]",
        "**Hypokalaemic complications**: periodic paralysis, rhabdomyolysis, **arrhythmia and sudden death**, ileus. [Harrison 22e]",
        "**Prognosis after targeted treatment**: adrenalectomy and adequately dosed MRA both reduce cardiovascular events; **AF and mortality risk falls toward that of essential hypertension** when renin is un-suppressed. [Hundemer, Lancet Diab Endocrinol 2018]",
        "Residual hypertension after surgery is predicted by **age over 50, long duration, obesity and family history of hypertension** (the Aldosteronoma Resolution Score). [Zarnegar, Ann Surg 2008]",
      ],
    },
    {
      heading: "Referral, follow-up, prevention and programme link",
      points: [
        "**Refer to endocrinology** after a positive ARR, for confirmation, CT and AVS; refer urgently if potassium is under 3.0 mmol/L or there is an adrenal mass over 4 cm. [Endocrine Society 2025]",
        "**On MRA**: potassium and creatinine at 1 and 4 weeks then **3-6 monthly**; BP each visit; **renin yearly** to confirm un-suppression; ask about gynaecomastia. [Endocrine Society 2025]",
        "**After adrenalectomy**: potassium weekly for 4 weeks, BP and **ARR at 3 months and 6-12 months** (PASO outcome), then yearly BP and potassium - recurrence in the other gland can occur. [PASO 2017]",
        "**Echo and ECG** at baseline and as indicated to track LVH regression. [Harrison 22e]",
        "**First-degree relatives** of familial PA should be screened for hypertension and tested genetically. [Endocrine Society 2025]",
        "Under **NP-NCD**, hypertensives are screened over 30 years at **Ayushman Arogya Mandir** - flag those with **hypokalaemia, resistant BP or onset under 40** for referral for ARR. [MoHFW NP-NCD 2023]",
        "The **India Hypertension Control Initiative (IHCI)** protocol escalates to referral when BP stays uncontrolled on three drugs - this is the moment to think of PA. [IHCI 2023]",
        "Counsel that PA is **potentially curable** and that treating it specifically protects the heart and kidney beyond BP lowering. [Endocrine Society 2025]",
        "**Salt under 5 g/day**, weight control, OSA treatment and avoidance of liquorice support therapy. [WHO 2023]",
        "**Spironolactone** is on the **NLEM** and available through **Jan Aushadhi** at low cost - cost is not a barrier to medical treatment. [NLEM 2022]",
      ],
    },
    {
      heading: "Latest guideline updates (2023-2026)",
      points: [
        "**Endocrine Society 2025 PA guideline**: recommends **screening all patients with hypertension** (not only high-risk groups) because PA is common and under-diagnosed. [Endocrine Society 2025]",
        "**Endocrine Society 2025**: screening can be done **without stopping most antihypertensives**, using **renin suppression** as the central criterion and assay-specific thresholds (immunoassay vs LC-MS/MS). [Endocrine Society 2025]",
        "**Endocrine Society 2025**: confirmatory tests can be **bypassed** when renin is suppressed with high aldosterone and spontaneous hypokalaemia; a **targeted MRA-first** strategy is acceptable when AVS or surgery is not wanted or available. [Endocrine Society 2025]",
        "**AHA/ACC 2025 hypertension guideline**: screen for PA in **resistant hypertension, hypokalaemia, adrenal incidentaloma, OSA** and family history of early hypertension or stroke, regardless of current antihypertensives. [AHA/ACC 2025]",
        "**ESH 2023 hypertension guideline**: lists PA as the most common secondary cause and supports ARR screening in resistant and young-onset hypertension. [ESH 2023]",
        "**Aldosterone synthase inhibitors** (baxdrostat - BaxHTN, NEJM 2025; lorundrostat - Launch-HTN 2025) lower BP substantially in uncontrolled and resistant hypertension; not yet licensed for PA in India. [NEJM 2025]",
        "**Functional PET** (11C-metomidate, 68Ga-pentixafor) is being validated as an alternative to AVS for lateralisation. [MATCH, Nat Med 2023]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic triad asked: **hypertension, hypokalaemia, metabolic alkalosis** - but say that **most PA is normokalaemic**. [Harrison 22e]",
        "Why no oedema in PA? **Aldosterone escape** via pressure natriuresis and ANP. [Harrison 22e]",
        "Which drugs give a **false-positive ARR**? Beta-blockers, clonidine, NSAIDs (they lower renin). **False negative**? Diuretics, ACE inhibitors, ARBs, MRAs, hypokalaemia. [Endocrine Society 2025]",
        "Why AVS rather than CT? **Non-functioning incidentalomas** are common - CT misdirects surgery in up to 40%. [Endocrine Society 2025]",
        "**Liddle vs PA**: both low renin, but aldosterone is low in Liddle and it responds to amiloride. [Harrison 22e]",
        "Common mistake: interpreting ARR **without checking that renin is actually suppressed** or **without correcting potassium**. [Endocrine Society 2025]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs used in primary aldosteronism",
      columns: ["Drug", "Dose and route", "Duration / titration", "Key adverse effects / contraindications"],
      rows: [
        ["Spironolactone", "12.5-25 mg oral once daily", "Titrate every 4-8 weeks to 50-100 mg/day; lifelong for bilateral PA", "Gynaecomastia, breast pain, ED, menstrual upset, hyperkalaemia; avoid in pregnancy"],
        ["Eplerenone", "25 mg oral twice daily", "Up to 50 mg twice daily; lifelong", "Hyperkalaemia; fewer sexual side effects; CYP3A4 interactions (clarithromycin, ketoconazole)"],
        ["Amiloride", "5 mg oral once daily", "Up to 20 mg/day; add-on or MRA-intolerant", "Hyperkalaemia; no anti-fibrotic MR blockade"],
        ["Dexamethasone (FH-I only)", "0.125-0.25 mg oral at bedtime", "Lifelong, lowest dose that normalises BP", "Cushingoid effects if overdosed; growth suppression in children"],
        ["Potassium chloride", "Oral 40-80 mmol/day; IV up to 10 mmol/h peripheral", "Until K 4.0 mmol/L or more", "Hyperkalaemia, GI irritation; never IV bolus"],
        ["Verapamil SR / doxazosin / hydralazine", "Verapamil SR 120-240 mg/day; doxazosin 2-8 mg/day; hydralazine 25-50 mg TDS", "During ARR washout if needed", "Constipation, bradycardia (verapamil); postural hypotension (doxazosin); reflex tachycardia (hydralazine)"],
      ],
    },
    {
      heading: "Screening, confirmatory and lateralisation tests with cut-offs",
      columns: ["Test", "How done", "Positive / cut-off", "Pitfall"],
      rows: [
        ["Aldosterone-renin ratio", "Morning, seated, after 2 h upright; K corrected", "Renin suppressed (PRA under 1 ng/mL/h or DRC under 8 mU/L), aldosterone 10 ng/dL or more, ARR above lab cut-off (often 20-30)", "Beta-blockers false positive; diuretics, ACEi/ARB, hypokalaemia false negative"],
        ["Saline infusion test", "2 L 0.9% saline over 4 h, seated", "Aldosterone over about 6-10 ng/dL confirms; under 5 excludes", "Volume overload in heart failure; avoid in severe uncontrolled BP"],
        ["Oral salt loading", "Over 200 mmol Na/day for 3 days", "24-h urine aldosterone over 12 mcg/day", "Worsens hypokalaemia; needs K replacement"],
        ["Captopril challenge", "25-50 mg oral, sample at 0 and 1-2 h", "Aldosterone suppressed under 30%, renin stays low", "Lower sensitivity; equivocal results common"],
        ["Adrenal CT", "Thin-slice adrenal protocol", "Nodule, hyperplasia; mass over 4 cm or HU over 10 suspicious", "Mislateralises in about 40%"],
        ["Adrenal venous sampling", "Simultaneous or sequential, with or without ACTH", "Selectivity index 2+ (3+ with ACTH); lateralisation index 4+ unilateral, under 3 bilateral", "Right adrenal vein hard to cannulate; operator-dependent"],
      ],
    },
    {
      heading: "Differential diagnosis of hypertension with hypokalaemia",
      columns: ["Condition", "Renin", "Aldosterone", "Discriminating feature"],
      rows: [
        ["Primary aldosteronism", "Low", "High", "Non-suppressible aldosterone; no oedema"],
        ["Renovascular / malignant hypertension", "High", "High", "Renal bruit, asymmetric kidneys, severe retinopathy"],
        ["Diuretic use", "High", "High", "Drug history; resolves on stopping"],
        ["Liquorice / apparent mineralocorticoid excess", "Low", "Low", "Liquorice history; raised urinary cortisol:cortisone ratio"],
        ["Liddle syndrome", "Low", "Low", "Family history; responds to amiloride not spironolactone"],
        ["Cushing syndrome / ectopic ACTH", "Low", "Low", "Cushingoid or catabolic; high cortisol"],
        ["11-beta- or 17-alpha-hydroxylase CAH", "Low", "Low", "Virilisation or sexual infantilism; raised DOC"],
      ],
    },
    {
      heading: "Subtypes of primary aldosteronism",
      columns: ["Subtype", "Approximate share", "Key feature", "Treatment"],
      rows: [
        ["Bilateral idiopathic hyperplasia", "About 60-65%", "Milder, often normokalaemic, older", "MRA lifelong"],
        ["Aldosterone-producing adenoma", "About 30-35%", "Younger, severe hypokalaemia, KCNJ5 common in Asians", "Laparoscopic adrenalectomy"],
        ["Unilateral adrenal hyperplasia", "About 2%", "Lateralises on AVS without a discrete adenoma", "Adrenalectomy"],
        ["Aldosterone-secreting carcinoma", "Under 1%", "Mass usually over 4 cm, co-secretion", "Open adrenalectomy, oncology"],
        ["Familial hyperaldosteronism I-IV", "Under 5%", "Onset under 20, family history, early stroke (FH-I)", "FH-I glucocorticoid; others MRA or surgery"],
      ],
    },
    {
      heading: "Who to screen for primary aldosteronism",
      columns: ["Group", "Why", "Guideline"],
      rows: [
        ["All adults with hypertension", "PA is common and under-diagnosed", "Endocrine Society 2025"],
        ["Resistant hypertension (3 drugs incl diuretic) or BP 150/100 or more", "PA in about 20%", "AHA/ACC 2025, ESH 2023"],
        ["Hypertension with spontaneous or diuretic-induced hypokalaemia", "Classic phenotype", "AHA/ACC 2025"],
        ["Hypertension with adrenal incidentaloma", "APA may present as incidentaloma", "ESE/ENSAT 2023"],
        ["Hypertension with OSA or unexplained AF", "Strong association", "AHA/ACC 2025"],
        ["Onset under 40, or family history of PA or early stroke", "Familial forms", "Endocrine Society 2025"],
      ],
    },
  ],
  redFlags: [
    "Potassium under 2.5-3.0 mmol/L, U waves or arrhythmia - admit for IV potassium and cardiac monitoring",
    "Hypokalaemic periodic paralysis or rhabdomyolysis",
    "Hypertensive emergency with target-organ damage (encephalopathy, pulmonary oedema, AKI)",
    "Adrenal mass over 4 cm or heterogeneous with high HU - suspect aldosterone-secreting carcinoma",
    "New AF, stroke or heart failure in a young hypertensive - screen for PA",
    "Hyperkalaemia (over 5.5 mmol/L) on MRA or after adrenalectomy",
    "Hypertension in a child or adolescent with family history of early haemorrhagic stroke (FH-I)",
  ],
  pearls: [
    "PA is the **commonest curable cause of hypertension** - and most patients have a **normal potassium**.",
    "Read **renin first**: no renin suppression, no PA - the ratio alone misleads.",
    "**Beta-blockers raise the ARR (false positive); diuretics, ACEi/ARBs and hypokalaemia lower it (false negative).**",
    "**No oedema in PA** because of aldosterone escape.",
    "CT shows the anatomy, **AVS shows the function** - never operate on CT alone after 35.",
    "Titrate MRA until **renin un-suppresses** - that is the cardioprotective target.",
    "After adrenalectomy **stop potassium and MRA on day 1** and watch for hyperkalaemia.",
    "**Liddle = amiloride; PA = spironolactone; GRA = dexamethasone.**",
    "Mnemonic **SALT** for screening: **S**leep apnoea, **A**F/adrenal mass, **L**ow potassium, **T**hree-drug resistance (plus young onset).",
  ],
  mcqs: [
    {
      id: "endocrine-primary-aldosteronism-q1",
      stem: "A 38-year-old man has BP 168/104 mmHg on amlodipine, telmisartan and chlorthalidone. Serum potassium is 3.1 mmol/L. Which is the most appropriate initial investigation for primary aldosteronism?",
      options: [
        "24-hour urinary catecholamines",
        "Morning plasma aldosterone and renin after correcting potassium",
        "Adrenal venous sampling",
        "Contrast CT of the adrenals",
      ],
      answer: 1,
      explanation:
        "The screening test is the aldosterone-renin ratio drawn in the morning after potassium is corrected; the 2025 Endocrine Society guideline allows testing on most antihypertensives with interpretation for drug effects. AVS and adrenal CT come only after biochemical confirmation, and catecholamines screen for phaeochromocytoma, not PA.",
      difficulty: "easy",
    },
    {
      id: "endocrine-primary-aldosteronism-q2",
      stem: "Which antihypertensive is most likely to cause a FALSE-POSITIVE aldosterone-renin ratio?",
      options: ["Spironolactone", "Hydrochlorothiazide", "Atenolol", "Ramipril"],
      answer: 2,
      explanation:
        "Beta-blockers such as atenolol suppress renin release from the juxtaglomerular cells more than they lower aldosterone, so the ratio rises and may be falsely positive. Spironolactone, thiazides and ACE inhibitors such as ramipril raise renin and therefore produce false-negative results instead.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-primary-aldosteronism-q3",
      stem: "A 52-year-old woman with confirmed primary aldosteronism has a 1.2 cm left adrenal nodule on CT and wants surgery. What is the next step?",
      options: [
        "Left laparoscopic adrenalectomy",
        "Bilateral adrenalectomy",
        "Lifelong dexamethasone",
        "Adrenal venous sampling",
      ],
      answer: 3,
      explanation:
        "At 52 a small nodule may be a non-functioning incidentaloma while the true source is bilateral hyperplasia or the opposite gland; CT mislateralises in about 40%, so AVS is required before surgery. Proceeding straight to left adrenalectomy risks removing the wrong gland, bilateral adrenalectomy causes permanent adrenal insufficiency, and dexamethasone is only for familial hyperaldosteronism type I.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-primary-aldosteronism-q4",
      stem: "A hypertensive man with hypokalaemia has low plasma renin and LOW plasma aldosterone. His BP and potassium respond to amiloride but not to spironolactone. The most likely diagnosis is:",
      options: [
        "Liddle syndrome",
        "Bilateral adrenal hyperplasia",
        "Aldosterone-producing adenoma",
        "Renovascular hypertension",
      ],
      answer: 0,
      explanation:
        "Liddle syndrome is a gain-of-function mutation of the epithelial sodium channel, so sodium is retained without aldosterone; renin and aldosterone are both low, and only an ENaC blocker such as amiloride works. Both forms of primary aldosteronism have high aldosterone and respond to spironolactone, and renovascular hypertension has high renin.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-primary-aldosteronism-q5",
      stem: "On the first day after a right adrenalectomy for an aldosterone-producing adenoma, which instruction is correct?",
      options: [
        "Continue spironolactone for 3 months to protect the heart",
        "Double the potassium supplement because aldosterone falls",
        "Stop spironolactone and potassium supplements and monitor potassium weekly",
        "Start fludrocortisone routinely in all patients",
      ],
      answer: 2,
      explanation:
        "After removal of the adenoma the suppressed contralateral zona glomerulosa can cause hyperkalaemia, so MRAs and potassium supplements are stopped on day 1 and potassium is checked weekly for about 4 weeks. Continuing spironolactone or increasing potassium invites dangerous hyperkalaemia, and fludrocortisone is reserved for the minority with persistent hyperkalaemia.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "endocrine-primary-aldosteronism-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Discuss the aetiology, clinical features, diagnostic approach and management of primary aldosteronism. Add a note on whom to screen.",
      openingLines: [
        "Primary aldosteronism is renin-independent, non-suppressible aldosterone secretion from an adenoma or bilateral adrenal hyperplasia, and is the commonest curable cause of hypertension (5-10% of hypertensives, about 20% of resistant hypertension).",
        "Diagnosis proceeds in three steps - screen (aldosterone-renin ratio), confirm (saline or captopril test) and subtype (CT plus adrenal venous sampling) - because treatment differs: adrenalectomy for unilateral and mineralocorticoid receptor antagonist for bilateral disease.",
      ],
      answer: [
        {
          heading: "Aetiology",
          points: [
            "Bilateral idiopathic hyperplasia about 60-65%; aldosterone-producing adenoma about 30-35% (KCNJ5 somatic mutations).",
            "Unilateral hyperplasia, carcinoma (rare), familial hyperaldosteronism types I-IV.",
          ],
        },
        {
          heading: "Pathophysiology",
          points: [
            "Aldosterone acts on MR in collecting duct: ENaC and Na-K-ATPase up - sodium retention, K and H loss.",
            "Volume expansion suppresses renin; aldosterone escape explains absence of oedema; MR-mediated fibrosis explains excess cardiovascular damage.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Resistant or young-onset hypertension; weakness, cramps, polyuria, nocturia; periodic paralysis.",
            "Complications: stroke, AF, LVH, heart failure, CKD; most patients normokalaemic.",
          ],
        },
        {
          heading: "Whom to screen",
          points: [
            "Endocrine Society 2025: all hypertensives; priority to resistant HTN, hypokalaemia, incidentaloma, OSA, AF, onset under 40, family history of early stroke.",
          ],
        },
        {
          heading: "Diagnostic approach",
          points: [
            "Screen: morning ARR after correcting potassium; renin suppressed and aldosterone 10 ng/dL or more; note drug interference.",
            "Confirm: saline infusion (aldosterone over 6-10 ng/dL after 2 L), oral salt load, captopril challenge; skip if florid.",
            "Subtype: adrenal CT to exclude carcinoma; AVS - selectivity index 2+ and lateralisation index 4+ = unilateral.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Unilateral: laparoscopic adrenalectomy after MRA pre-treatment; stop MRA and K on day 1; monitor for hyperkalaemia.",
            "Bilateral or non-surgical: spironolactone 12.5-25 mg titrated to 50-100 mg; eplerenone 25-50 mg BD if gynaecomastia; amiloride add-on; salt under 5 g.",
            "Target renin un-suppression; FH-I - low-dose dexamethasone.",
          ],
        },
        {
          heading: "Follow-up and prognosis",
          points: [
            "Potassium and creatinine at 1 and 4 weeks then 3-6 monthly; PASO outcome at 6-12 months; surgical cure of BP 35-60%.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart: suspect - ARR - confirm - CT - AVS - adrenalectomy vs MRA",
        "Table of drugs causing false-positive and false-negative ARR",
      ],
      markSplit: [
        { part: "Definition, aetiology and pathophysiology", marks: 2 },
        { part: "Clinical features and whom to screen", marks: 2 },
        { part: "Diagnostic approach with cut-offs and flow chart", marks: 3 },
        { part: "Management and follow-up", marks: 3 },
      ],
      keywords: ["ARR", "renin suppression", "saline infusion test", "AVS", "adrenalectomy", "spironolactone", "Endocrine Society 2025"],
    },
    {
      id: "endocrine-primary-aldosteronism-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on the aldosterone-renin ratio: how to perform it and how to interpret it.",
      openingLines: [
        "The aldosterone-renin ratio (ARR) is the screening test for primary aldosteronism; it detects autonomous aldosterone secretion with a suppressed renin.",
        "Its value depends on patient preparation, drug effects and on reading renin and aldosterone individually, not only the ratio.",
      ],
      answer: [
        {
          heading: "Preparation and sampling",
          points: [
            "Correct potassium to 4.0 mmol/L or more; unrestricted salt.",
            "Morning sample after 2 hours upright and 5-15 minutes seated.",
            "Endocrine Society 2025: test on current antihypertensives; washout (verapamil SR, hydralazine, doxazosin) only if equivocal.",
          ],
        },
        {
          heading: "Interpretation",
          points: [
            "Positive: renin suppressed (PRA under 1 ng/mL/h or DRC under 8 mU/L) with aldosterone 10 ng/dL or more and ARR above lab cut-off (often 20-30).",
            "Very low renin with low aldosterone gives a high ratio but is not PA.",
          ],
        },
        {
          heading: "Interfering factors",
          points: [
            "False positive: beta-blockers, clonidine, NSAIDs, CKD, older age.",
            "False negative: diuretics, ACEi/ARB, DHP-CCB, MRA, hypokalaemia, low-salt diet, pregnancy.",
          ],
        },
        {
          heading: "Next step",
          points: ["Positive screen - confirmatory test (saline or captopril) unless florid, then CT and AVS."],
        },
      ],
      mustDraw: ["Two-column table: false positive vs false negative causes"],
      markSplit: [
        { part: "Preparation", marks: 1 },
        { part: "Cut-offs and interpretation", marks: 2 },
        { part: "Interfering factors and next step", marks: 2 },
      ],
      keywords: ["ARR", "PRA", "DRC", "beta-blocker", "hypokalaemia", "false negative"],
    },
  ],
  references: [
    "Adler GK, Stowasser M, et al. Primary Aldosteronism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab, 2025",
    "Funder JW, et al. The Management of Primary Aldosteronism: Endocrine Society Clinical Practice Guideline, 2016",
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Disorders of the adrenal cortex",
    "Williams Textbook of Endocrinology, 15th edition, 2024",
    "2025 AHA/ACC/multisociety Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults",
    "2023 ESH Guidelines for the management of arterial hypertension",
    "Williams TA, et al. Primary Aldosteronism Surgical Outcome (PASO) consensus. Lancet Diabetes Endocrinol, 2017",
    "MoHFW. National Programme for Prevention and Control of Non-Communicable Diseases (NP-NCD) operational guidelines, 2023",
  ],
});

export default topics;
