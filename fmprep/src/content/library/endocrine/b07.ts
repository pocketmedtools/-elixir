import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "endocrine-diabetes-insipidus",
  title: "Polyuria and arginine vasopressin deficiency/resistance (diabetes insipidus)",
  oneLiner:
    "Diabetes insipidus, renamed in 2022 as **arginine vasopressin deficiency (AVP-D, central)** and **arginine vasopressin resistance (AVP-R, nephrogenic)**, is **hypotonic polyuria (urine over 50 mL/kg/24 h with urine osmolality below 300 mOsm/kg)** from failure to secrete or respond to AVP; it is separated from **primary polydipsia** by the **hypertonic saline-stimulated copeptin test** or water deprivation, and AVP-D is treated with **desmopressin**.",
  frequency: "less-common",
  keywords: [
    "diabetes insipidus",
    "AVP deficiency",
    "AVP-D",
    "AVP resistance",
    "AVP-R",
    "central diabetes insipidus",
    "cranial diabetes insipidus",
    "nephrogenic diabetes insipidus",
    "primary polydipsia",
    "psychogenic polydipsia",
    "polyuria",
    "copeptin",
    "water deprivation test",
    "desmopressin",
    "DDAVP",
    "lithium",
    "Wolfram syndrome DIDMOAD",
    "triple-phase response",
    "posterior pituitary bright spot",
    "thiazide paradox",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Polyuria** in adults is a urine output **over 50 mL/kg/24 h (about 3 L/day)**; in children it is **over 2 L/m2/day**; a patient complaining of 'frequency' must first have a **24-hour urine volume** measured to separate true polyuria from frequency with normal volume. [Harrison 22e]",
        "**Hypotonic polyuria** (urine osmolality **below 300 mOsm/kg**) has three causes - **AVP deficiency, AVP resistance and primary polydipsia**; polyuria with urine osmolality **above 300 mOsm/kg** is a **solute diuresis** (glucose, urea, mannitol, saline). [Harrison 22e]",
        "In **2022** an international working group of the major endocrine societies renamed **central diabetes insipidus** as **arginine vasopressin deficiency (AVP-D)** and **nephrogenic diabetes insipidus** as **arginine vasopressin resistance (AVP-R)**, to stop confusion with diabetes mellitus (including missed desmopressin doses in hospital). [AVP-D/AVP-R nomenclature statement 2022]",
        "AVP-D is rare, with a prevalence of about **1 in 25,000**; fewer than 10% of cases are hereditary; acquired AVP-R from **lithium** is now more common than congenital AVP-R. [Williams Endocrinology 15e]",
        "**Primary polydipsia** is the commonest cause of hypotonic polyuria in outpatients: compulsive water drinking occurs in up to **10-20% of chronic psychiatric inpatients**, and 'healthy-lifestyle' drinking of 3-5 L/day is increasingly seen in urban clinics. [Williams Endocrinology 15e]",
        "In Indian tertiary-centre series of AVP-D, **idiopathic (presumed autoimmune), post-neurosurgical and tumour-related** cases predominate, with **tuberculosis, Langerhans cell histiocytosis and germinoma** prominent among infiltrative causes in young people. [Indian J Endocrinol Metab series]",
        "**Gestational AVP-D** (transient) affects about **2-4 per 100,000 pregnancies**, caused by placental **vasopressinase (cystine aminopeptidase)** that degrades AVP but not desmopressin. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**AVP-D causes - acquired**: idiopathic or autoimmune infundibuloneurohypophysitis (about 30-50%), **pituitary or hypothalamic surgery**, **head injury**, tumours (**craniopharyngioma, germinoma**, metastases from breast and lung), and **infiltration** (Langerhans cell histiocytosis, sarcoidosis, TB, IgG4 disease). [Harrison 22e]",
        "A **pituitary adenoma** rarely causes AVP-D before surgery - diabetes insipidus at presentation in a sellar mass suggests **craniopharyngioma, germinoma, metastasis or hypophysitis** instead. [Williams Endocrinology 15e]",
        "**Immune checkpoint inhibitors** (anti-CTLA-4 more than anti-PD-1) cause hypophysitis that occasionally includes AVP-D; **post-COVID and post-vaccine hypophysitis** have been reported. [Endocrine Society 2022]",
        "**Hereditary AVP-D**: **autosomal dominant AVP gene mutations** (onset in childhood, misfolded prohormone kills magnocellular neurons) and **Wolfram syndrome (DIDMOAD - diabetes insipidus, diabetes mellitus, optic atrophy, deafness; WFS1 gene)**. [Harrison 22e]",
        "**AVP-R causes**: congenital **X-linked AVPR2 mutations (about 90% of congenital cases)** and **aquaporin-2 (AQP2)** mutations; acquired from **lithium**, **hypercalcaemia, hypokalaemia**, relief of urinary obstruction, sickle cell disease, amyloidosis, Sjogren syndrome and demeclocycline. [Harrison 22e]",
        "**Lithium** causes AVP-R in about **20-40%** of long-term users; risk rises with duration and it may persist after the drug is stopped. [Williams Endocrinology 15e]",
        "**Primary polydipsia** has three forms: **psychogenic** (schizophrenia, anticholinergic dry mouth), **dipsogenic** (lowered thirst threshold - hypothalamic lesions, often idiopathic) and **iatrogenic or habitual** (advice to 'drink plenty'). [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Pathophysiology",
      points: [
        "AVP is made in the **supraoptic and paraventricular nuclei**, carried with its carrier protein **neurophysin II and copeptin** down the stalk and stored in the **posterior pituitary**; **copeptin** is released in equimolar amounts and is stable in the laboratory, so it is the surrogate marker for AVP. [Harrison 22e]",
        "AVP release starts at a plasma osmolality of about **280-285 mOsm/kg**; thirst starts slightly higher, at about **290-295 mOsm/kg** - so normally AVP, not thirst, defends osmolality. [Harrison 22e]",
        "AVP binds **V2 receptors** on the basolateral collecting-duct membrane, raises **cAMP**, and inserts **aquaporin-2** channels into the luminal membrane; water then moves into the hypertonic medulla and urine concentrates up to **1200 mOsm/kg**. [Harrison 22e]",
        "Symptoms appear only when about **80-85% of magnocellular neurons** are lost; because thirst is intact, most patients keep **plasma sodium normal or high-normal** - hypernatraemia means thirst or water access has failed. [Williams Endocrinology 15e]",
        "In **primary polydipsia** the excess water suppresses AVP and **washes out the medullary concentration gradient**, so even a normal kidney concentrates poorly on testing - the reason the water deprivation test is often indeterminate. [Harrison 22e]",
        "**Lithium** enters principal cells through the **epithelial sodium channel (ENaC)**, inhibits GSK-3 beta and down-regulates **aquaporin-2** - which is why **amiloride**, an ENaC blocker, reduces lithium AVP-R. [Williams Endocrinology 15e]",
        "**Thiazide paradox**: thiazides cause mild volume contraction, increase proximal sodium and water reabsorption and deliver less water to the collecting duct, cutting urine volume by **30-50%** in AVP-R. [Harrison 22e]",
        "**Glucocorticoids** are needed to excrete free water, so coexisting **ACTH deficiency masks AVP-D**; starting hydrocortisone can **unmask** polyuria days later. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Classification that examiners ask",
      points: [
        "**AVP deficiency (AVP-D)**: complete or partial; central lesion; responds to desmopressin. [AVP-D/AVP-R nomenclature statement 2022]",
        "**AVP resistance (AVP-R)**: congenital or acquired; renal lesion; high AVP and copeptin; little or no response to desmopressin. [AVP-D/AVP-R nomenclature statement 2022]",
        "**Primary polydipsia**: excess intake; AVP and copeptin appropriately suppressed; must not be treated with desmopressin because of severe hyponatraemia risk. [Harrison 22e]",
        "**Gestational AVP-D**: placental vasopressinase in the third trimester; treat with desmopressin, which resists vasopressinase; resolves within 2-3 weeks after delivery. [Williams Endocrinology 15e]",
        "**Adipsic AVP-D** (osmoreceptor dysfunction): no thirst plus AVP deficiency, often after anterior communicating artery aneurysm clipping or craniopharyngioma surgery - causes dangerous recurrent hypernatraemia. [Williams Endocrinology 15e]",
        "**Post-surgical triple-phase response**: phase 1 AVP-D (days 1-5, axon shock), phase 2 **SIADH-like antidiuresis** (days 5-10, release of stored AVP from degenerating terminals), phase 3 **permanent AVP-D** if over 80-90% of neurons are lost. [Harrison 22e]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**Abrupt onset** of polyuria, nocturia and thirst, with a **craving for ice-cold water**, points to **AVP-D**; gradual onset with fluctuating intake and drinking during the day only suggests **primary polydipsia**. [Williams Endocrinology 15e]",
        "**Nocturia** waking the patient 3-4 times a night is typical of AVP-D and AVP-R; primary polydipsia patients often sleep through. [Harrison 22e]",
        "Ask about **headache, visual field loss, galactorrhoea, amenorrhoea, growth failure** (sellar mass), **head injury or recent pituitary surgery**, and **lithium** exposure. [Harrison 22e]",
        "In a child, **bed-wetting, irritability, failure to thrive and fever from dehydration** may be the only clues; check for **skin rash, bone lesions and ear discharge** (Langerhans cell histiocytosis). [Nelson 22e]",
        "Ask for **psychiatric history**, anticholinergic drugs and **diet fads** ('drink 5 litres a day') before labelling AVP-D. [Williams Endocrinology 15e]",
        "Elderly patients, unconscious or post-operative patients and infants **cannot drink to thirst** - they present with **hypernatraemia, confusion and seizures** rather than polyuria. [Harrison 22e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "Assess **volume status**: postural fall in BP, dry mucosa and tachycardia mean intake is not keeping up - check sodium urgently. [Harrison 22e]",
        "Examine **visual fields by confrontation** (bitemporal hemianopia from a sellar or suprasellar mass) and **fundi** (optic atrophy in Wolfram syndrome or chronic compression). [Harrison 22e]",
        "Look for features of **hypopituitarism**: pale smooth skin, loss of body hair, small testes, short stature in children. [Williams Endocrinology 15e]",
        "Look for **Langerhans cell histiocytosis** clues: seborrhoeic scalp rash, gum disease with loose teeth, lytic skull lesions, proptosis. [Nelson 22e]",
        "Palpate the **bladder** (a large distended bladder and hydronephrosis occur with long-standing high-volume polyuria) and check for lymph nodes, hepatosplenomegaly and erythema nodosum (sarcoidosis, TB). [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Uncontrolled diabetes mellitus** is the commonest cause of polyuria in Indian OPDs - urine sugar and capillary glucose come first. [Harrison 22e]",
        "**Hypercalcaemia and hypokalaemia** cause acquired AVP-R and are both reversible - check calcium and potassium in every polyuric patient. [Harrison 22e]",
        "**Chronic kidney disease, post-obstructive diuresis and recovery phase of acute tubular necrosis** cause isosthenuric or solute polyuria. [Harrison 22e]",
        "**Primary polydipsia** gives low-normal sodium (often below 140 mmol/L) and low plasma osmolality; AVP-D and AVP-R give high-normal sodium (often above 142 mmol/L). [Williams Endocrinology 15e]",
        "**Urinary frequency without polyuria** - UTI, overactive bladder, benign prostatic hyperplasia - is excluded by a normal 24-hour volume. [Harrison 22e]",
        "**Diuretic or laxative abuse** and **cerebral salt wasting** after neurosurgery cause polyuria with high urine sodium and volume depletion. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations - first line (OPD and district hospital)",
      points: [
        "Confirm polyuria with a **24-hour urine volume**; then measure **urine osmolality** (or specific gravity below 1.005 as a crude marker) on the same collection. [Harrison 22e]",
        "Send **plasma sodium, plasma osmolality, glucose, potassium, calcium, creatinine and urea**, with urine glucose. [Harrison 22e]",
        "**Hypotonic polyuria** = urine osmolality **below 300 mOsm/kg** with volume above 50 mL/kg/day; if serum sodium is **above 147 mmol/L** with dilute urine, the diagnosis is AVP-D or AVP-R and no deprivation test is needed. [Williams Endocrinology 15e]",
        "A **random baseline copeptin above 21.4 pmol/L**, without prior fluid restriction, diagnoses **AVP-R** with near 100% accuracy. [Fenske NEJM 2018]",
        "**Water deprivation test**: fluids withheld (usually 8 hours) with hourly weight, urine volume and osmolality; stop if **weight falls by more than 3%** or **sodium exceeds 147-150 mmol/L**; then give **desmopressin 2 mcg IM/SC** (or 10-20 mcg intranasal) and measure urine osmolality over the next 2-4 hours. [Williams Endocrinology 15e]",
        "Water deprivation interpretation: urine osmolality **above 800 mOsm/kg** after deprivation = normal or primary polydipsia; **below 300** with a **rise of more than 50%** after desmopressin = complete AVP-D; **below 300** with **little or no rise** = AVP-R; 300-800 = indeterminate (partial AVP-D vs polydipsia). [Harrison 22e]",
        "The indirect water deprivation test has a diagnostic accuracy of only **about 70%** overall and under 50% for primary polydipsia - the reason copeptin-based tests have replaced it where available. [Fenske NEJM 2018]",
      ],
    },
    {
      heading: "Investigations - advanced and tertiary",
      points: [
        "**Hypertonic saline-stimulated copeptin**: **3% saline** bolus 250 mL then 0.15 mL/kg/min, with sodium every 30 min until **sodium reaches 150 mmol/L or more**; copeptin **4.9 pmol/L or less** = AVP-D, above 4.9 = primary polydipsia (accuracy about **96%**). [Fenske NEJM 2018]",
        "**Arginine-stimulated copeptin**: **L-arginine 0.5 g/kg (maximum 40 g) IV over 30 min**; copeptin at 60 min **3.8 pmol/L or less** = AVP-D; it is safer and simpler but less accurate. [Winzeler Lancet 2019]",
        "In the head-to-head trial, hypertonic saline-stimulated copeptin was correct in **about 96%** vs **about 74%** for arginine, so **hypertonic saline is the preferred test** where nursing supervision is possible. [Refardt NEJM 2023]",
        "**Glucagon-stimulated copeptin** (1 mg SC) and **plasma AVP** assays exist; direct AVP measurement is unreliable (unstable, platelet-bound) and is no longer recommended. [Williams Endocrinology 15e]",
        "**MRI pituitary with gadolinium**: loss of the **posterior pituitary bright spot on T1** supports AVP-D; **stalk thickening above 3 mm** suggests germinoma, LCH, hypophysitis or TB. [Harrison 22e]",
        "In 'idiopathic' AVP-D with stalk thickening, **repeat MRI every 6 months for 2-3 years** (germinoma can declare itself late) and measure **serum and CSF beta-hCG and AFP**. [Williams Endocrinology 15e]",
        "Test **anterior pituitary function** (morning cortisol, TSH with FT4, LH, FSH, testosterone or oestradiol, IGF-1, prolactin) in every AVP-D patient - see the Hypopituitarism topic. [Harrison 22e]",
        "**Genetic testing** (AVP, AVPR2, AQP2, WFS1) in childhood-onset or familial disease. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Management in OPD - AVP-D",
      points: [
        "**Desmopressin (DDAVP)**, a selective **V2 agonist** without pressor (V1) effect, is the drug of choice; start low at bedtime to control nocturia, then add daytime doses. [Harrison 22e]",
        "**Oral desmopressin tablets**: **0.1 mg at bedtime**, titrated to **0.1-0.4 mg two or three times daily** (usual 0.1-1.2 mg/day). [BNF 2025]",
        "**Sublingual melts**: **60-120 mcg** two or three times daily (usual 120-720 mcg/day); **intranasal spray** 10 mcg per puff, **10-40 mcg/day** in 1-3 doses; **injection 1-4 mcg SC or IV** once or twice daily. [BNF 2025]",
        "The commonest harm is **dilutional hyponatraemia**: advise drinking **only to thirst**, check sodium at **1 week** after starting or changing a dose, and allow a **weekly 'breakthrough' period** of polyuria by delaying one dose. [Endocrine Society 2022]",
        "Partial AVP-D with urine volume under 4 L/day may need **no drug** if the patient has access to water and is comfortable. [Williams Endocrinology 15e]",
        "**Primary polydipsia**: **reduce intake gradually**, stop anticholinergics, use sugar-free gum or ice chips; there is no proven drug, and **desmopressin is contraindicated**. [Williams Endocrinology 15e]",
        "Treat the cause: stop drugs, correct calcium and potassium, refer sellar masses for neurosurgery; **replace cortisol first** if ACTH deficiency coexists. [Harrison 22e]",
      ],
    },
    {
      heading: "Management of AVP resistance and lithium",
      points: [
        "**Lithium-induced AVP-R**: discuss with the psychiatrist about **switching mood stabiliser** if feasible; if lithium must continue, add **amiloride 5-10 mg once or twice daily**. [Williams Endocrinology 15e]",
        "**Hydrochlorothiazide 25 mg once or twice daily** with a **low-sodium (under 2 g/day) and low-protein diet** reduces urine volume by up to 50% in AVP-R. [Harrison 22e]",
        "Thiazides **raise lithium levels by about 25-40%** - halve the lithium dose or monitor levels within 5-7 days when combining. [BNF 2025]",
        "**NSAIDs** (indomethacin 25-50 mg two or three times daily) reduce prostaglandin-mediated antagonism of AVP and add 25-50% further reduction, but their renal toxicity limits long-term use. [Williams Endocrinology 15e]",
        "**High-dose desmopressin** may help partial AVP-R; congenital X-linked AVP-R in infants needs **free access to water, hypotonic feeds and thiazide plus amiloride**. [Nelson 22e]",
        "Monitor lithium patients with **sodium, creatinine, calcium and TSH every 6 months** - lithium also causes hyperparathyroidism and hypothyroidism. [NICE CG185 2023]",
      ],
    },
    {
      heading: "Management in IPD and emergency",
      points: [
        "**Admit** with sodium above 150 mmol/L, altered sensorium, inability to drink (post-op, stroke, sedation), or any planned water deprivation or hypertonic saline test. [Harrison 22e]",
        "**Desmopressin must never be omitted** in a hospitalised AVP-D patient who is nil by mouth - give it **parenterally (1-2 mcg SC/IV)**; omission has caused deaths and triggered a national patient safety alert in the UK. [NHS England Patient Safety Alert 2016]",
        "**Hypernatraemia**: calculate free-water deficit = **0.6 x body weight (kg) x (Na/140 - 1)** (0.5 for women and the elderly); replace with oral water or **5% dextrose** and give desmopressin for AVP-D. [Harrison 22e]",
        "Lower chronic hypernatraemia by **no more than 10-12 mmol/L in 24 hours** to avoid cerebral oedema; acute hypernatraemia (under 48 hours) may be corrected faster. [Harrison 22e]",
        "**Post-pituitary surgery**: daily weight, strict intake-output, sodium **twice daily for the first 7-10 days**; give desmopressin only when urine is above **250-300 mL/h for 2-3 hours** with rising sodium, and **avoid fixed doses** because the SIADH phase can follow. [Society for Endocrinology inpatient guidance 2018]",
        "In **adipsic AVP-D**, prescribe a **fixed daily water intake** with daily weighing and fixed desmopressin, and check sodium weekly. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: desmopressin is **safe** (about 5% oxytocic activity) and resists placental vasopressinase; requirements may **rise** in the third trimester; gestational AVP-D resolves after delivery. [Williams Endocrinology 15e]",
        "**Children**: use bedtime oral desmopressin at small doses, and always look for **germinoma, craniopharyngioma and LCH**; idiopathic AVP-D in a child needs serial MRI. [Nelson 22e]",
        "**Elderly**: higher risk of **desmopressin-induced hyponatraemia**, especially at doses used for nocturia - check sodium at 3-7 days and 1 month. [BNF 2025]",
        "**CKD**: desmopressin is contraindicated in nocturia formulations when eGFR is below 50 mL/min; in AVP-D use the lowest dose with sodium monitoring. [BNF 2025]",
        "**Resource-limited setting**: if osmolality is unavailable, use **urine specific gravity** (1.005 or less suggests hypotonic urine) and paired sodium, and refer for copeptin testing; never run a water deprivation test without hourly weighing. [ICMR STW 2023]",
        "Patients with AVP-D need a **steroid and desmopressin alert card**; travel and gastroenteritis days need extra fluid and sometimes extra doses. [Endocrine Society 2022]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Hypernatraemia** (when thirst or water access fails) causes brain shrinkage, **intracranial haemorrhage**, seizures and death; mortality of sodium above 160 mmol/L in hospital is about 40-60%. [Harrison 22e]",
        "**Desmopressin overdose** causes water intoxication with **hyponatraemic seizures** - the main iatrogenic risk. [BNF 2025]",
        "Long-standing high-volume polyuria causes **megacystis, hydroureter and hydronephrosis**, especially in congenital AVP-R. [Nelson 22e]",
        "Congenital AVP-R in infancy causes **repeated hypernatraemic dehydration and intellectual disability** if missed. [Nelson 22e]",
        "Idiopathic AVP-D is usually permanent; post-traumatic and post-surgical AVP-D recovers in up to **50-60%** within weeks to a year. [Williams Endocrinology 15e]",
        "Lithium AVP-R improves in a minority after stopping lithium; after **more than 10-15 years** it is often irreversible. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Referral, follow-up and counselling",
      points: [
        "**Refer** to an endocrinologist every patient with confirmed hypotonic polyuria; refer urgently with visual field loss, headache with a sellar mass, or sodium above 150 mmol/L. [Endocrine Society 2022]",
        "Follow-up: **sodium at 1 week** after starting desmopressin, then every 3-6 months once stable, and with every dose change or intercurrent illness. [Endocrine Society 2022]",
        "Monitor **growth and puberty** in children, and **anterior pituitary function yearly** in infiltrative and tumour-related disease. [Williams Endocrinology 15e]",
        "Teach the patient: **drink only when thirsty on desmopressin**, recognise **headache, nausea and confusion** as hyponatraemia, and carry an alert card. [Endocrine Society 2022]",
        "Patients on **lithium** under the mental health programme (**District Mental Health Programme, NMHP**) should have renal function, sodium and polyuria screened every 6 months. [NICE CG185 2023]",
        "Use the new terms **'AVP deficiency' and 'AVP resistance'** in prescriptions and discharge summaries so desmopressin is not confused with diabetes mellitus treatment. [AVP-D/AVP-R nomenclature statement 2022]",
      ],
    },
    {
      heading: "Latest guideline updates (2022-2026)",
      points: [
        "**2022**: international renaming to **AVP deficiency** and **AVP resistance**, adopted by the Endocrine Society, ESE, Pituitary Society, Society for Endocrinology and Japan Endocrine Society. [AVP-D/AVP-R nomenclature statement 2022]",
        "**2023**: the head-to-head trial established **hypertonic saline-stimulated copeptin** (cut-off 4.9 pmol/L) as the reference test, superior to arginine stimulation. [Refardt NEJM 2023]",
        "**Baseline copeptin above 21.4 pmol/L** for AVP-R removes the need for any stimulation test in suspected nephrogenic disease. [Fenske NEJM 2018]",
        "Copeptin assays are available only in a few Indian laboratories; where unavailable, a **carefully supervised water deprivation test** remains acceptable but has about 70% accuracy. [Williams Endocrinology 15e]",
        "Inpatient guidance stresses **desmopressin as a critical medicine** - never omit, convert to parenteral when nil by mouth. [Society for Endocrinology inpatient guidance 2018]",
        "Immune checkpoint inhibitor hypophysitis and **post-COVID-19 hypophysitis** are newer recognised causes of AVP-D. [Endocrine Society 2022]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic question: **'Approach to a patient with polyuria'** - start with 24-h volume and urine osmolality, separate solute from water diuresis, then AVP-D vs AVP-R vs primary polydipsia. [Harrison 22e]",
        "Know the **triple-phase response** after pituitary surgery and the dates of each phase. [Harrison 22e]",
        "Know why **thiazides paradoxically reduce polyuria** in AVP-R, and why **amiloride** is specific for lithium. [Harrison 22e]",
        "Common mistake: **giving desmopressin to a primary polydipsia patient** - causes severe hyponatraemia because the patient keeps drinking. [Williams Endocrinology 15e]",
        "Common mistake: calling it **'central DI' only** in 2026 exams without the new AVP-D/AVP-R terms - name both. [AVP-D/AVP-R nomenclature statement 2022]",
        "Remember the copeptin cut-offs: **21.4 (baseline, AVP-R), 4.9 (hypertonic saline, AVP-D), 3.8 (arginine, AVP-D)**. [Refardt NEJM 2023]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs for polyuria disorders",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Desmopressin oral tablet", "0.1 mg at bedtime; usual 0.1-0.4 mg two or three times daily", "Lifelong in permanent AVP-D; titrate to nocturia and thirst; sodium at 1 week", "Hyponatraemia, headache; contraindicated in primary polydipsia, SIADH, heart failure"],
        ["Desmopressin sublingual melt", "60-120 mcg two or three times daily", "As above", "Hyponatraemia; useful with poor tablet absorption"],
        ["Desmopressin nasal spray", "10 mcg per puff; 10-40 mcg/day in 1-3 doses", "Absorption falls with rhinitis or nasal surgery", "Nasal irritation, hyponatraemia"],
        ["Desmopressin injection", "1-4 mcg SC or IV once or twice daily (post-op often 0.5-1 mcg)", "Nil-by-mouth, post-op, hypernatraemia", "Hyponatraemia; never give fixed post-op doses in the triple-phase window"],
        ["Hydrochlorothiazide", "25 mg once or twice daily with salt restriction", "Long term in AVP-R", "Hypokalaemia, raises lithium levels, hyperuricaemia"],
        ["Amiloride", "5-10 mg once or twice daily", "Long term with lithium", "Hyperkalaemia (avoid with ACE inhibitor in CKD)"],
        ["Indomethacin", "25-50 mg two or three times daily", "Short courses or children with AVP-R", "Renal impairment, GI bleeding, hypertension"],
      ],
    },
    {
      heading: "Classification of hypotonic polyuria",
      columns: ["Type", "Site and cause", "Plasma sodium", "Copeptin", "Response to desmopressin"],
      rows: [
        ["AVP deficiency (central)", "Hypothalamus or posterior pituitary: idiopathic, surgery, trauma, tumour, LCH, TB", "High-normal or high", "Low (4.9 pmol/L or less after hypertonic saline)", "Urine osmolality rises more than 50%"],
        ["AVP resistance (nephrogenic)", "Collecting duct: AVPR2, AQP2, lithium, hypercalcaemia, hypokalaemia", "High-normal or high", "High (baseline above 21.4 pmol/L)", "Little or no rise"],
        ["Primary polydipsia", "Excess intake: psychogenic, dipsogenic, habitual", "Low-normal", "Above 4.9 pmol/L after hypertonic saline", "Partial rise; risk of hyponatraemia"],
        ["Gestational AVP-D", "Placental vasopressinase", "High-normal", "Variable", "Responds (desmopressin resists vasopressinase)"],
      ],
    },
    {
      heading: "Differential diagnosis of polyuria",
      columns: ["Condition", "Urine osmolality", "Discriminating feature", "First test"],
      rows: [
        ["Uncontrolled diabetes mellitus", "Above 300 (solute)", "Glycosuria, high glucose", "Capillary glucose, urine sugar"],
        ["Hypercalcaemia", "Low (acquired AVP-R)", "Constipation, stones, high calcium", "Serum calcium, PTH"],
        ["Hypokalaemia", "Low (acquired AVP-R)", "Weakness, low potassium", "Serum potassium"],
        ["CKD or post-obstructive diuresis", "Around 300 (isosthenuria)", "Raised creatinine, recent catheterisation", "Creatinine, ultrasound"],
        ["Primary polydipsia", "Low", "Low-normal sodium, psychiatric history", "Hypertonic saline copeptin"],
        ["AVP-D or AVP-R", "Low", "High-normal sodium, abrupt onset, nocturia", "Baseline copeptin, then stimulated copeptin"],
      ],
    },
    {
      heading: "Diagnostic tests and cut-offs",
      columns: ["Test", "How it is done", "Cut-off", "Interpretation"],
      rows: [
        ["24-h urine volume", "Timed collection", "Above 50 mL/kg/day (about 3 L)", "Confirms polyuria"],
        ["Urine osmolality", "Same collection", "Below 300 mOsm/kg", "Hypotonic (water) polyuria"],
        ["Baseline copeptin", "No prior fluid restriction", "Above 21.4 pmol/L", "AVP resistance"],
        ["Hypertonic saline copeptin", "3% saline until sodium 150 mmol/L or more", "4.9 pmol/L or less", "AVP deficiency (above = primary polydipsia)"],
        ["Arginine copeptin", "L-arginine 0.5 g/kg (max 40 g) IV over 30 min; sample at 60 min", "3.8 pmol/L or less", "AVP deficiency"],
        ["Water deprivation then desmopressin", "Deprive to 3% weight loss or sodium 147-150, then desmopressin 2 mcg", "Above 800 normal; below 300 with more than 50% rise AVP-D; no rise AVP-R", "Indeterminate in 300-800 range"],
        ["MRI pituitary", "T1 with gadolinium", "Absent bright spot; stalk above 3 mm", "AVP-D; infiltrative or neoplastic cause"],
      ],
    },
  ],
  redFlags: [
    "Serum sodium above 150 mmol/L or altered sensorium in a polyuric patient",
    "Polyuria with headache, vomiting or visual field loss (sellar or suprasellar mass)",
    "Post-pituitary surgery or head injury with urine above 250-300 mL/h",
    "Infant or child with polyuria, fever and failure to thrive (congenital AVP-R, LCH, germinoma)",
    "Patient on desmopressin with headache, vomiting, confusion or seizure (hyponatraemia)",
    "AVP-D patient who is nil by mouth or unable to drink",
    "Polyuria with sodium below 130 mmol/L in a psychiatric patient (water intoxication)",
  ],
  pearls: [
    "New names (2022): **AVP deficiency** = central DI; **AVP resistance** = nephrogenic DI.",
    "Copeptin numbers: **21.4 baseline = AVP-R; 4.9 after hypertonic saline = AVP-D; 3.8 after arginine = AVP-D**.",
    "**Sodium high-normal** points to AVP-D or AVP-R; **sodium low-normal** points to primary polydipsia.",
    "**Craving ice-cold water** and abrupt onset are classic of AVP-D.",
    "Thiazides **reduce** urine volume in AVP-R (thiazide paradox); amiloride is the lithium antidote.",
    "**ACTH deficiency masks AVP-D** - polyuria appears after hydrocortisone is started.",
    "Triple-phase response: **DI (days 1-5), SIADH (days 5-10), permanent DI**.",
    "Wolfram syndrome = **DIDMOAD** (WFS1).",
    "**Never omit desmopressin** in a nil-by-mouth patient - give it SC or IV.",
  ],
  mcqs: [
    {
      id: "endocrine-diabetes-insipidus-q1",
      stem: "A 34-year-old woman has polyuria of 6 L/day. Plasma sodium is 138 mmol/L and urine osmolality 110 mOsm/kg. Baseline copeptin is 3 pmol/L. During 3% saline infusion her sodium reaches 151 mmol/L and copeptin rises to 9.2 pmol/L. What is the diagnosis?",
      options: [
        "AVP deficiency (central diabetes insipidus)",
        "Primary polydipsia",
        "AVP resistance (nephrogenic diabetes insipidus)",
        "Solute diuresis",
      ],
      answer: 1,
      explanation:
        "A hypertonic saline-stimulated copeptin above 4.9 pmol/L at a sodium of 150 mmol/L or more means the posterior pituitary secretes AVP normally, so the hypotonic polyuria is from primary polydipsia. AVP deficiency would give copeptin 4.9 or less; AVP resistance shows a baseline copeptin above 21.4 pmol/L; a solute diuresis has urine osmolality above 300.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetes-insipidus-q2",
      stem: "A 45-year-old man on lithium for bipolar disorder for 12 years has polyuria. Baseline copeptin is 38 pmol/L. Lithium cannot be stopped. Which drug specifically reduces lithium entry into collecting-duct cells?",
      options: [
        "Desmopressin",
        "Indomethacin",
        "Furosemide",
        "Amiloride",
      ],
      answer: 3,
      explanation:
        "Lithium enters principal cells through the epithelial sodium channel (ENaC); amiloride blocks ENaC and so reduces lithium-induced AVP resistance. Desmopressin is ineffective because AVP levels (copeptin 38 pmol/L) are already high; indomethacin helps through prostaglandin inhibition but is nephrotoxic; furosemide worsens polyuria.",
      difficulty: "easy",
    },
    {
      id: "endocrine-diabetes-insipidus-q3",
      stem: "Six days after transsphenoidal surgery for a craniopharyngioma, a patient who had polyuria on days 1-4 and was discharged on fixed-dose desmopressin is readmitted with confusion and a sodium of 118 mmol/L. What is the most likely explanation?",
      options: [
        "Cerebral salt wasting",
        "Secondary adrenal insufficiency alone",
        "Second (antidiuretic) phase of the triple-phase response",
        "Recovery of AVP secretion with permanent cure",
      ],
      answer: 2,
      explanation:
        "The triple-phase response gives AVP deficiency in days 1-5, then an SIADH-like phase around days 5-10 as stored AVP leaks from degenerating terminals; fixed desmopressin in this window causes severe hyponatraemia. Cerebral salt wasting causes hypovolaemia and natriuresis; adrenal insufficiency can contribute but does not explain the timing after polyuria; permanent AVP-D often follows the second phase rather than cure.",
      difficulty: "hard",
    },
    {
      id: "endocrine-diabetes-insipidus-q4",
      stem: "In a water deprivation test, urine osmolality stays at 180 mOsm/kg after 3% weight loss and rises to 420 mOsm/kg after desmopressin 2 mcg. This indicates:",
      options: [
        "Complete AVP deficiency",
        "AVP resistance",
        "Primary polydipsia",
        "Normal response",
      ],
      answer: 0,
      explanation:
        "Failure to concentrate above 300 mOsm/kg with dehydration, followed by a rise of more than 50% (here over 130%) after desmopressin, shows the kidney responds but no endogenous AVP is released - complete AVP deficiency. AVP resistance shows little or no rise after desmopressin; primary polydipsia and normal subjects concentrate during deprivation itself.",
      difficulty: "easy",
    },
    {
      id: "endocrine-diabetes-insipidus-q5",
      stem: "A 9-year-old boy presents with polyuria, nocturnal enuresis and growth slowing. MRI shows absent posterior pituitary bright spot and a pituitary stalk 5 mm thick. Which next step is most important?",
      options: [
        "Water deprivation test only and discharge on desmopressin",
        "Serum and CSF beta-hCG and AFP with serial MRI",
        "Start lithium-protective amiloride",
        "Hypertonic saline test to exclude primary polydipsia",
      ],
      answer: 1,
      explanation:
        "AVP deficiency with stalk thickening in a child may be the first sign of germinoma or Langerhans cell histiocytosis; tumour markers (beta-hCG, AFP) and serial MRI every 6 months are needed. Desmopressin alone would miss the tumour; amiloride is for lithium; the MRI already makes primary polydipsia unlikely.",
      difficulty: "moderate",
    },
  ],
  theory: [
    {
      id: "endocrine-diabetes-insipidus-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "less-common",
      question:
        "Discuss the approach to a patient with polyuria. Describe the causes, diagnosis and management of arginine vasopressin deficiency (central diabetes insipidus).",
      openingLines: [
        "Polyuria is a urine output above 50 mL/kg/24 h (about 3 L/day); hypotonic polyuria (urine osmolality below 300 mOsm/kg) is due to AVP deficiency, AVP resistance or primary polydipsia.",
        "In 2022 central and nephrogenic diabetes insipidus were renamed arginine vasopressin deficiency (AVP-D) and arginine vasopressin resistance (AVP-R).",
      ],
      answer: [
        {
          heading: "Step 1: confirm and classify polyuria",
          points: [
            "24-h urine volume to separate polyuria from frequency.",
            "Urine osmolality above 300 = solute diuresis (diabetes mellitus, urea, mannitol, saline).",
            "Below 300 = water diuresis: AVP-D, AVP-R or primary polydipsia.",
            "Baseline: sodium, glucose, potassium, calcium, creatinine.",
          ],
        },
        {
          heading: "Physiology in brief",
          points: [
            "AVP from supraoptic and paraventricular nuclei; released above 280-285 mOsm/kg.",
            "V2 receptor, cAMP, aquaporin-2 insertion in collecting duct.",
            "Copeptin co-secreted in equimolar amounts - stable surrogate.",
          ],
        },
        {
          heading: "Causes of AVP deficiency",
          points: [
            "Idiopathic/autoimmune, neurosurgery, head injury.",
            "Tumours: craniopharyngioma, germinoma, metastasis.",
            "Infiltrative: LCH, sarcoidosis, TB, IgG4; hypophysitis including checkpoint inhibitors.",
            "Genetic: AVP gene (autosomal dominant), Wolfram (DIDMOAD).",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "Sodium above 147 with dilute urine: diagnosis made, no deprivation needed.",
            "Baseline copeptin above 21.4 pmol/L: AVP-R.",
            "Hypertonic saline copeptin: 4.9 pmol/L or less = AVP-D (accuracy about 96%).",
            "Arginine copeptin 3.8 or less at 60 min = AVP-D (less accurate).",
            "Water deprivation test: below 300 with more than 50% rise after desmopressin = AVP-D.",
            "MRI pituitary: absent bright spot, stalk thickening; anterior pituitary function tests.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Desmopressin oral 0.1-0.4 mg two or three times daily, start at bedtime; melt 60-120 mcg; nasal 10-40 mcg/day; injection 1-4 mcg.",
            "Drink only to thirst; sodium at 1 week; weekly breakthrough dose delay.",
            "Treat cause; replace cortisol first if ACTH deficient.",
            "Inpatient: never omit desmopressin; free-water deficit replacement with 5% dextrose; lower sodium by no more than 10-12 mmol/L/day.",
          ],
        },
        {
          heading: "Special points and complications",
          points: [
            "Post-surgery triple-phase response - avoid fixed doses.",
            "Pregnancy: desmopressin safe, resists vasopressinase.",
            "Complications: hypernatraemia, desmopressin hyponatraemia, hydronephrosis.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart: polyuria to urine osmolality to copeptin-based separation of AVP-D, AVP-R and primary polydipsia",
        "Table of water deprivation test results",
      ],
      markSplit: [
        { part: "Definition and approach to polyuria", marks: 2 },
        { part: "Causes of AVP-D", marks: 2 },
        { part: "Diagnostic tests with cut-offs", marks: 3 },
        { part: "Management including inpatient safety", marks: 3 },
      ],
      keywords: ["polyuria", "AVP deficiency", "copeptin", "water deprivation test", "desmopressin", "triple-phase response"],
    },
    {
      id: "endocrine-diabetes-insipidus-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Differentiate AVP deficiency, AVP resistance and primary polydipsia.",
      openingLines: [
        "All three cause hypotonic polyuria with urine osmolality below 300 mOsm/kg.",
        "They differ in the site of the defect, plasma sodium, copeptin level and response to desmopressin.",
      ],
      answer: [
        {
          heading: "Defect and causes",
          points: [
            "AVP-D: no AVP secretion - idiopathic, surgery, tumour, LCH, TB.",
            "AVP-R: kidney cannot respond - AVPR2/AQP2, lithium, hypercalcaemia, hypokalaemia.",
            "Primary polydipsia: excess intake - psychiatric, dipsogenic, habitual.",
          ],
        },
        {
          heading: "Clinical and biochemical clues",
          points: [
            "Sodium high-normal in AVP-D and AVP-R; low-normal in primary polydipsia.",
            "Abrupt onset, nocturia and cold-water craving in AVP-D.",
          ],
        },
        {
          heading: "Tests",
          points: [
            "Baseline copeptin above 21.4 pmol/L: AVP-R.",
            "Hypertonic saline copeptin 4.9 or less: AVP-D; above 4.9: primary polydipsia.",
            "Desmopressin: big rise in AVP-D, little in AVP-R.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "AVP-D: desmopressin.",
            "AVP-R: thiazide, low-salt diet, amiloride for lithium, NSAIDs.",
            "Primary polydipsia: reduce intake; desmopressin dangerous.",
          ],
        },
      ],
      mustDraw: ["Three-column comparison table"],
      markSplit: [
        { part: "Defect and causes", marks: 1 },
        { part: "Clinical and biochemical clues", marks: 1 },
        { part: "Tests with cut-offs", marks: 2 },
        { part: "Treatment", marks: 1 },
      ],
      keywords: ["AVP-D", "AVP-R", "primary polydipsia", "copeptin", "thiazide"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Disorders of the neurohypophysis",
    "Williams Textbook of Endocrinology, 15th edition, 2024",
    "Arima H, et al. Changing the name of diabetes insipidus: a position statement of the Working Group for Renaming Diabetes Insipidus, 2022",
    "Fenske W, et al. A copeptin-based approach in the diagnosis of diabetes insipidus. N Engl J Med 2018",
    "Refardt J, et al. Arginine or hypertonic saline-stimulated copeptin to diagnose AVP deficiency. N Engl J Med 2023",
    "Society for Endocrinology clinical guidance: inpatient management of cranial diabetes insipidus, 2018",
    "Nelson Textbook of Pediatrics, 22nd edition, 2024",
  ],
});

export default topics;
