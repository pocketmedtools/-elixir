import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "endocrine-pituitary-approach",
  title: "Pituitary tumours and incidentalomas: mass effects and hormonal work-up",
  frequency: "common",
  oneLiner:
    "A **pituitary adenoma (now pituitary neuroendocrine tumour, PitNET, WHO 2022)** is a benign tumour of the anterior pituitary that presents by **hormone excess** (prolactin, GH, ACTH, rarely TSH), **hypopituitarism** or **mass effect** (headache, **bitemporal hemianopia**, cranial nerve palsy); every lesion - including an **incidentaloma** - needs **prolactin and IGF-1**, a **pituitary function screen if 10 mm or more**, **visual fields if it touches the chiasm**, and **transsphenoidal surgery** for visual loss or any functioning tumour except a prolactinoma.",
  keywords: [
    "pituitary adenoma",
    "PitNET",
    "pituitary neuroendocrine tumour",
    "pituitary incidentaloma",
    "non-functioning pituitary adenoma",
    "NFPA",
    "macroadenoma",
    "microadenoma",
    "bitemporal hemianopia",
    "optic chiasm",
    "stalk effect",
    "Knosp grade",
    "transsphenoidal surgery",
    "endoscopic endonasal",
    "craniopharyngioma",
    "Rathke cleft cyst",
    "sellar mass",
    "cavernous sinus",
    "visual field perimetry",
    "pituitary MRI",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "A **pituitary adenoma** is a benign monoclonal tumour of anterior pituitary cells; the **WHO 2022 (5th edition)** classification renames it **pituitary neuroendocrine tumour (PitNET)** and types it by **transcription-factor lineage** (PIT1, TPIT, SF1, or none). [WHO 2022]",
        "**Microadenoma** is under 10 mm, **macroadenoma** 10 mm or more and **giant adenoma** 40 mm or more; size drives the work-up because mass effects and hypopituitarism are almost confined to macroadenomas. [Harrison 22e]",
        "**Clinically relevant pituitary adenomas** have a prevalence of about **1 in 1000** (roughly 80-115 per 100,000) in population studies, far higher than once believed. [Harrison 22e]",
        "A **pituitary incidentaloma** is a lesion found on imaging done for an unrelated reason; incidental lesions appear in about **10% of normal MRI scans** and in a similar proportion at autopsy, nearly all microadenomas. [Endocrine Society 2011]",
        "Relative frequency among clinically apparent tumours: **prolactinoma about 40-50%**, **non-functioning (mostly gonadotroph) about 30-35%**, **somatotroph 10-15%**, **corticotroph 5-10%**, **thyrotroph under 1%**. [Harrison 22e]",
        "Sellar masses are the **third commonest intracranial tumour** after meningioma and glioma; Indian neurosurgical series show patients present late, with **macroadenomas and visual loss in the majority**, because headache and menstrual change are ignored. [Williams Endocrinology 15e]",
        "**Pituitary carcinoma** - renamed **metastatic PitNET** in WHO 2022 - is defined only by craniospinal or distant metastasis and is very rare (well under 1%). [WHO 2022]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "Most adenomas are **sporadic**; somatic **GNAS** mutations (gsp oncogene) occur in up to 40% of somatotroph tumours and **USP8** mutations in about half of corticotroph tumours. [Harrison 22e]",
        "**MEN1** (menin, chromosome 11q13): pituitary adenoma (commonly prolactinoma) with **primary hyperparathyroidism and pancreatic NETs** - ask about kidney stones, peptic ulcer and hypoglycaemia. [Harrison 22e]",
        "**AIP mutation (familial isolated pituitary adenoma)**: young patients, aggressive somatotroph or lacto-somatotroph macroadenomas - test anyone with a pituitary adenoma before age 30 or with gigantism. [Williams Endocrinology 15e]",
        "Other syndromes: **Carney complex** (PRKAR1A, spotty pigmentation, myxomas), **McCune-Albright** (GNAS mosaic, cafe-au-lait, fibrous dysplasia), **MEN4** (CDKN1B), **X-LAG** (GPR101 duplication, infant gigantism) and SDH-related paraganglioma syndromes. [Harrison 22e]",
        "**Pituitary hyperplasia** (not tumour) follows **long-standing primary hypothyroidism** (TRH drive), **pregnancy** (lactotroph hyperplasia, gland up to 10-12 mm) and puberty - a symmetric enlarged gland that shrinks with treatment. [Williams Endocrinology 15e]",
        "Radiation exposure in childhood and prior cranial surgery are weak risk factors; unlike many tumours, there is **no proven lifestyle cause**. [Harrison 22e]",
      ],
    },
    {
      heading: "Pathophysiology: how a sellar mass causes symptoms",
      points: [
        "**Mass effect upward**: the optic chiasm lies about 10 mm above the diaphragma sellae; a tumour growing up compresses the **crossing inferonasal fibres first**, giving **superior bitemporal quadrantanopia**, then full **bitemporal hemianopia**. [Harrison 22e]",
        "A **pre-fixed or post-fixed chiasm** changes the pattern - optic nerve compression gives a **central scotoma or junctional scotoma**, and optic tract compression gives **homonymous hemianopia**. [Harrison 22e]",
        "**Lateral extension into the cavernous sinus** can involve **CN III (commonest), IV, VI, V1 and V2**; slow growth rarely causes palsy, so a sudden palsy suggests **apoplexy**. [Harrison 22e]",
        "**Hypopituitarism by compression**: the portal vessels and normal gland are squeezed, and hormones fail in the order **GH, then LH/FSH, then TSH, then ACTH** - prolactin rises rather than falls. [Harrison 22e]",
        "**Stalk effect**: compression of the stalk interrupts **dopamine** carriage from the hypothalamus, releasing lactotrophs from tonic inhibition - prolactin rises modestly, usually **under 100 ng/mL** (often quoted up to 150). [Pituitary Society 2023]",
        "**Headache** comes from stretching of the dura and diaphragma sellae and does not correlate with tumour size; **CSF rhinorrhoea** follows downward erosion of the sellar floor, often after dopamine-agonist shrinkage. [Williams Endocrinology 15e]",
        "**Hypothalamic invasion** (craniopharyngioma, giant tumours) disturbs appetite, temperature, sleep and thirst; **posterior pituitary failure (AVP deficiency) is rare in adenomas** and points instead to craniopharyngioma, hypophysitis, metastasis or granuloma. [Harrison 22e]",
      ],
    },
    {
      heading: "Classification that examiners ask",
      points: [
        "**By size**: micro (under 10 mm), macro (10 mm or more), giant (40 mm or more). [Harrison 22e]",
        "**By function**: functioning (prolactinoma, somatotroph - acromegaly, corticotroph - Cushing disease, thyrotroph - central hyperthyroidism, rare gonadotroph) and **non-functioning** (clinically silent; most are SF1 gonadotroph). [Harrison 22e]",
        "**By lineage (WHO 2022)**: **PIT1** (somatotroph, lactotroph, thyrotroph, mammosomatotroph), **TPIT** (corticotroph), **SF1** (gonadotroph), and **null cell** (no lineage marker). [WHO 2022]",
        "**Knosp grade (0-4)** describes cavernous sinus invasion on coronal MRI relative to the intercavernous carotid lines; grade 3-4 means invasion and **lower surgical cure**. [Williams Endocrinology 15e]",
        "**Hardy classification** grades sellar floor erosion (I-IV) and suprasellar extension (A-E) - an older radiological scheme still asked in viva. [Williams Endocrinology 15e]",
        "**High-risk subtypes** (WHO 2022): sparsely granulated somatotroph, silent corticotroph, Crooke cell, **immature PIT1-lineage** and male lactotroph tumours - more aggressive and recurrent. [WHO 2022]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**Headache** (frontal, retro-orbital, chronic) is the commonest mass symptom; a **sudden thunderclap headache with vomiting and visual loss** is **pituitary apoplexy** until proved otherwise - see the Hypopituitarism and Sheehan topic. [Harrison 22e]",
        "**Visual symptoms**: bumping into objects or people on both sides, trouble driving, missing words at the ends of lines - patients often go first to an optician, so ask about recent spectacle changes. [Williams Endocrinology 15e]",
        "**Hypogonadism** is the earliest endocrine clue: **oligo/amenorrhoea, infertility, galactorrhoea** in women; **low libido and erectile dysfunction** in men (who therefore present later with bigger tumours). [Harrison 22e]",
        "**Hormone-excess clues**: change in ring or shoe size and sweating (acromegaly), weight gain with bruising and proximal weakness (Cushing disease), palpitations with a goitre and non-suppressed TSH (TSHoma). [Harrison 22e]",
        "**Hypopituitary symptoms**: fatigue, cold intolerance, pallor, loss of body hair, postural dizziness, hyponatraemia, hypoglycaemia - often vague and attributed to anaemia or depression. [Harrison 22e]",
        "**Diplopia or ptosis** (CN III), facial numbness (V1/V2) and **clear nasal drip** (CSF leak - test for beta-2 transferrin) are less common but important. [Williams Endocrinology 15e]",
        "Ask for **MEN1 symptoms** (kidney stones, peptic ulcers, hypoglycaemia), **family history** of pituitary tumours, and **drugs** that raise prolactin (levosulpiride, risperidone, metoclopramide). [Pituitary Society 2023]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Visual fields by confrontation with a red pin** (red desaturation is the earliest sign); test each eye separately and each quadrant - a **superior temporal defect** is the classic early finding. [Harrison 22e]",
        "**Visual acuity and fundoscopy**: **optic atrophy (pale disc)** means long-standing compression and predicts poorer recovery after surgery; papilloedema is rare. [Williams Endocrinology 15e]",
        "**Eye movements and pupils** for CN III palsy (ptosis, eye down and out, dilated pupil) and **corneal reflex/facial sensation** for V1-V2. [Harrison 22e]",
        "**Stigmata of excess**: acromegalic facies, broad spade hands, prognathism; Cushingoid striae, proximal myopathy; **galactorrhoea on gentle expression**. [Harrison 22e]",
        "**Stigmata of deficiency**: fine wrinkled pale skin (**alabaster skin**), sparse axillary and pubic hair, small soft testes, postural BP drop. [Harrison 22e]",
        "Measure **BP, BMI, testicular volume (orchidometer)** and look for a **goitre** - a goitre with a pituitary mass raises TSHoma or acromegaly. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Differential diagnosis of a sellar mass",
      points: [
        "**Craniopharyngioma**: bimodal age (children 5-14, adults 50-75), **suprasellar calcification and cyst** with 'machinery-oil' fluid, AVP deficiency and growth failure. [Harrison 22e]",
        "**Rathke cleft cyst**: non-enhancing intrasellar cyst between anterior and posterior lobes, often with an intracystic nodule; usually asymptomatic and followed with MRI. [Williams Endocrinology 15e]",
        "**Hypophysitis** (lymphocytic in late pregnancy or postpartum, IgG4-related, **immune checkpoint inhibitor - ipilimumab**): thick stalk, symmetric enhancement, **ACTH deficiency and AVP deficiency** out of proportion to size. [Endocrine Society 2016]",
        "**Meningioma** (dural tail, hyperostosis, normal pituitary seen separately) and **internal carotid aneurysm** - an aneurysm must be **excluded with MR or CT angiography** before any transsphenoidal approach. [Harrison 22e]",
        "**Granulomas** (tuberculosis - important in India, sarcoidosis, Langerhans cell histiocytosis) and **metastasis** (breast, lung; thick stalk with AVP deficiency in an older patient). [Williams Endocrinology 15e]",
        "**Physiological enlargement and hyperplasia**: pregnancy, puberty, and **primary hypothyroidism** - always check TSH before calling an enlarged pituitary a tumour. [Williams Endocrinology 15e]",
        "**Germinoma** in a child or young adult with AVP deficiency and a thick stalk; check serum and CSF beta-hCG and AFP. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**MRI pituitary with gadolinium (dedicated thin coronal and sagittal cuts)** is the imaging test; a microadenoma is hypointense on the early dynamic T1 post-contrast images. A routine brain MRI may miss it. [Endocrine Society 2011]",
        "**Hypersecretion screen in every pituitary lesion**: **serum prolactin** and **age- and sex-matched IGF-1**; test for Cushing (1 mg overnight dexamethasone suppression, late-night salivary cortisol or 24-h urine free cortisol) **only when clinically suspected** per the 2011 guideline, though many centres screen all. [Endocrine Society 2011]",
        "**Hypopituitarism screen** in macroadenomas (and microadenomas 6-9 mm if symptomatic): **8-9 am cortisol, free T4 with TSH, LH/FSH with testosterone or oestradiol, IGF-1, serum sodium**. [Endocrine Society 2011]",
        "**Read central hypothyroidism correctly**: **low free T4 with a low or 'normal' TSH** - TSH alone misses it. [Endocrine Society 2016]",
        "**Prolactin pitfalls**: with a macroadenoma and only modest prolactin, **re-assay at 1:100 dilution** to exclude the **hook effect**; a level **over 250 ng/mL** almost always means prolactinoma, while **under 100 ng/mL** with a macroadenoma suggests stalk effect. [Pituitary Society 2023]",
        "**Formal visual fields** (Humphrey 24-2 automated or Goldmann perimetry) for any lesion **abutting or compressing the chiasm**; **OCT of the retinal nerve fibre layer** predicts visual recovery after decompression. [Endocrine Society 2011]",
        "**CT** shows calcification (craniopharyngioma) and sellar bone erosion and is used when MRI is contraindicated; **CT or MR angiography** if aneurysm is possible. [Williams Endocrinology 15e]",
        "Advanced: **inferior petrosal sinus sampling** for ACTH-dependent Cushing with an equivocal MRI, **PET with 68Ga-DOTATATE or 11C-methionine** for residual or occult tumours, and **genetic testing** (MEN1, AIP) in young or familial cases. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Management in OPD and primary care",
      points: [
        "**Prolactinoma** (even macro with visual loss) is treated **medically first with cabergoline** - see the Hyperprolactinaemia and prolactinoma topic. [Pituitary Society 2023]",
        "**Microincidentaloma, non-functioning**: no treatment; **repeat MRI at 1 year**, then every 1-2 years for 3 years, then less often; no routine hormone testing unless symptoms. [Endocrine Society 2011]",
        "**Macroincidentaloma, non-functioning, not touching the chiasm**: **MRI at 6 months**, then yearly for 3 years, then less often; **hormone tests at 6 months, then yearly**; visual fields if it grows towards the chiasm. [Endocrine Society 2011]",
        "**Replace deficient hormones before surgery**: glucocorticoid first (hydrocortisone 15-20 mg/day in divided doses), then thyroxine - never thyroxine first in suspected ACTH deficiency. [Endocrine Society 2016]",
        "**Teach steroid sick-day rules** and give a **steroid alert card** to anyone with ACTH deficiency. [ESE/Endocrine Society 2024]",
        "**Counsel on driving**: a patient with a bitemporal field defect may not meet the visual field standard for driving until fields are reassessed. [Williams Endocrinology 15e]",
        "**Refer all macroadenomas** and every functioning or growing lesion to an endocrinologist working with a **pituitary neurosurgeon** (Pituitary Tumour Centre of Excellence model). [Pituitary Society 2023]",
      ],
    },
    {
      heading: "Surgery, radiotherapy and inpatient care",
      points: [
        "**Indications for surgery** (Endocrine Society 2011): **visual field defect**, ophthalmoplegia or other visual loss from the tumour, **lesion abutting or compressing the chiasm**, **apoplexy with visual disturbance**, and **hypersecreting tumours other than prolactinoma**. [Endocrine Society 2011]",
        "**Relative indications**: significant growth, loss of pituitary function, a lesion close to the chiasm in a woman **planning pregnancy**, and unremitting headache. [Endocrine Society 2011]",
        "**Endoscopic endonasal transsphenoidal surgery** is the standard approach; **transcranial** surgery is kept for large suprasellar or lateral extension not reachable from below. [Williams Endocrinology 15e]",
        "**Perioperative steroids**: give hydrocortisone cover (e.g. **50-100 mg IV at induction**) if ACTH deficiency is known or suspected; centres that use an intact-axis protocol withhold it and check **morning cortisol on post-op day 1-3**. [Williams Endocrinology 15e]",
        "**Watch sodium daily for 10 days**: transient **AVP deficiency** (polyuria in the first 1-2 days) and **delayed SIADH (day 5-10)** - the **triphasic response**; advise **fluid restriction to about 1-1.5 L/day** in the first week after discharge in many centres. [Williams Endocrinology 15e]",
        "Other complications: **CSF leak and meningitis**, new hypopituitarism, epistaxis, sinusitis, and rare **carotid artery injury**; mortality in expert centres is under 0.5%. [Harrison 22e]",
        "**Radiotherapy** (stereotactic radiosurgery or fractionated stereotactic RT) for residual or recurrent growing tumour; tumour control exceeds 90% but **hypopituitarism develops in 30-50% over 10 years**, so lifelong yearly testing is needed. [Williams Endocrinology 15e]",
        "**Aggressive PitNET**: after surgery and RT, **temozolomide** is first-line chemotherapy (ESE 2018); **dopamine agonists do not shrink most non-functioning tumours**. [ESE 2018]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: the normal pituitary enlarges up to 10-12 mm; known macroadenomas may grow - **visual fields each trimester**, MRI without gadolinium only if symptoms appear. [ESE 2021]",
        "**Children and adolescents**: think **craniopharyngioma** and germinoma; a pituitary adenoma under 30 years warrants **AIP and MEN1 genetic testing**. [Williams Endocrinology 15e]",
        "**Elderly**: many non-functioning macroadenomas grow slowly - observation is reasonable if fields are normal and comorbidity makes surgery risky. [Endocrine Society 2011]",
        "**Primary hypothyroidism with a 'pituitary mass'**: treat with levothyroxine and repeat MRI in 3-6 months - hyperplasia regresses, avoiding needless surgery. [Williams Endocrinology 15e]",
        "**Patients on immune checkpoint inhibitors** with headache and fatigue: check morning cortisol and sodium - **ipilimumab hypophysitis** affects up to about 10%, anti-PD-1 drugs cause isolated ACTH deficiency. [Endocrine Society 2016]",
        "**Resource-limited setting**: if MRI is not available, a **contrast CT of the sella** plus **confrontation fields and prolactin** allows triage; refer visual loss the same week. [ICMR STW 2023]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Visual recovery** after decompression occurs in about **two-thirds to three-quarters**; poor predictors are **long duration, optic atrophy and thin RNFL on OCT**. [Williams Endocrinology 15e]",
        "**Non-functioning macroadenoma** after surgery recurs or regrows in about **15-40% at 10 years** without RT, depending on residual tumour - lifelong MRI follow-up is needed. [Williams Endocrinology 15e]",
        "**Natural history of incidentalomas**: about **10% of microincidentalomas** and **about 20-25% of macroincidentalomas** enlarge over years; apoplexy risk is about **0.2-0.6 per 100 patient-years**, higher in macroadenomas. [Endocrine Society 2011]",
        "**Untreated hypopituitarism** raises mortality, mainly through **unrecognised adrenal crisis**, cardiovascular disease and possibly GH deficiency. [Harrison 22e]",
        "**Apoplexy** may be the first presentation in up to 80% of affected patients; it can cause blindness, coma and adrenal crisis. [SfE 2011]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "**Same-day referral**: sudden headache with visual loss or ophthalmoplegia, falling visual acuity, hypotension or hyponatraemia with a pituitary mass. [SfE 2011]",
        "**Post-operative**: endocrine reassessment at **6-12 weeks**, **MRI at 3-4 months**, then yearly MRI for at least 5 years and less often after. [Williams Endocrinology 15e]",
        "**Visual fields** at 3 months after surgery and with any MRI growth or symptoms. [Endocrine Society 2011]",
        "**Yearly pituitary function testing** after radiotherapy, lifelong. [Endocrine Society 2016]",
        "**Primary-care role**: check adherence to hydrocortisone and thyroxine, sick-day rules, BMD and cardiovascular risk, and that a steroid card is carried. [ESE/Endocrine Society 2024]",
        "**Stop surveillance** of a non-functioning microincidentaloma that is stable for 3-5 years, if no new symptoms. [Endocrine Society 2011]",
      ],
    },
    {
      heading: "Prevention and counselling",
      points: [
        "There is **no primary prevention**; the aim is **early detection** - think of the pituitary in amenorrhoea-galactorrhoea, male low libido, unexplained bitemporal field loss and hyponatraemia. [Harrison 22e]",
        "**Screen relatives** of MEN1 or AIP carriers (prolactin, IGF-1, calcium, and MRI by protocol). [Williams Endocrinology 15e]",
        "**Explain the word 'tumour'**: most are benign, not cancer, and many incidentalomas need only scans. [Endocrine Society 2011]",
        "Under **PM-JAY**, transsphenoidal surgery is covered at empanelled neurosurgery centres; refer through the district hospital. [MoHFW 2024]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**WHO 2022 (5th edition)**: adenoma renamed **PitNET**; classification by **PIT1/TPIT/SF1 lineage**; **pituitary carcinoma renamed metastatic PitNET**. [WHO 2022]",
        "**Pituitary Society 2023 prolactinoma consensus**: surgery accepted as an **alternative first-line option** for selected well-circumscribed prolactinomas in expert centres. [Pituitary Society 2023]",
        "**ESE/Endocrine Society 2024 adrenal insufficiency (glucocorticoid-induced) guideline**: lower cortisol cut-offs with newer **monoclonal immunoassays and LC-MS/MS** - peak cortisol about **14-15 microgram/dL** after Synacthen rather than the old 18. [ESE/Endocrine Society 2024]",
        "The **Endocrine Society 2011 incidentaloma guideline** remains the reference: prolactin and IGF-1 for all, function screen for macro, fields if near the chiasm. [Endocrine Society 2011]",
        "**Pituitary Tumour Centres of Excellence** (Pituitary Society): concentration of surgery in high-volume units with a dedicated surgeon improves cure and lowers complications. [Pituitary Society 2023]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "**Classic viva**: 'A woman with amenorrhoea, headache and bitemporal hemianopia - prolactin 80 ng/mL, MRI 25 mm mass' - answer: **stalk effect from a non-functioning macroadenoma** (or hook effect - dilute), not a prolactinoma. [Pituitary Society 2023]",
        "**Upper quadrants first** for pituitary (inferior chiasmal compression); **lower quadrants first** for craniopharyngioma (pressing from above). [Harrison 22e]",
        "**Order of hormone loss**: 'Go Look For The Adrenal' - **GH, LH, FSH, TSH, ACTH**; prolactin goes up. [Harrison 22e]",
        "**Common mistake**: giving thyroxine before hydrocortisone in central hypothyroidism - it can precipitate **adrenal crisis**. [Endocrine Society 2016]",
        "**Common mistake**: using TSH to monitor central hypothyroidism - use **free T4 (upper half of normal)**. [Endocrine Society 2016]",
        "**AVP deficiency at presentation** argues against an adenoma - think craniopharyngioma, hypophysitis, metastasis, TB. [Harrison 22e]",
      ],
    },
  ],
  tables: [
    {
      heading: "Classification of pituitary adenomas (PitNETs)",
      columns: ["Type (lineage)", "Share of tumours", "Hormone / syndrome", "Screening test", "First treatment"],
      rows: [
        ["Lactotroph (PIT1)", "40-50%", "Prolactin - amenorrhoea, galactorrhoea, hypogonadism", "Serum prolactin (dilute if macro)", "Cabergoline"],
        ["Non-functioning / gonadotroph (SF1) or null cell", "30-35%", "None - mass effect, hypopituitarism", "Normal hormones; mild prolactin rise", "Surgery if near chiasm, else watch"],
        ["Somatotroph (PIT1)", "10-15%", "GH - acromegaly, gigantism", "IGF-1, GH on 75 g OGTT", "Transsphenoidal surgery"],
        ["Corticotroph (TPIT)", "5-10%", "ACTH - Cushing disease", "1 mg DST, late-night salivary cortisol, UFC", "Transsphenoidal surgery"],
        ["Thyrotroph (PIT1)", "Under 1%", "TSH - central hyperthyroidism, goitre", "High FT4 with non-suppressed TSH", "Surgery; somatostatin analogue"],
      ],
    },
    {
      heading: "Work-up of a pituitary incidentaloma (Endocrine Society 2011)",
      columns: ["Lesion", "Hormone tests", "Visual fields", "MRI follow-up", "Surgery if"],
      rows: [
        ["Microincidentaloma (under 10 mm)", "Prolactin, IGF-1; cortisol tests if Cushingoid", "Not needed", "1 year, then every 1-2 years for 3 years", "Hypersecretion (not prolactin) or growth"],
        ["Macroincidentaloma, away from chiasm", "Prolactin, IGF-1, cortisol, FT4/TSH, LH/FSH, sex steroid", "Baseline if near chiasm", "6 months, then yearly for 3 years", "Growth, new deficiency, pregnancy plans"],
        ["Macroincidentaloma touching chiasm", "Full panel; dilute prolactin", "Formal perimetry now", "Per surgical plan", "Field defect or chiasmal compression"],
        ["Cystic lesion (Rathke cleft)", "Prolactin, IGF-1; function if large", "If suprasellar", "1 year, then spaced out", "Visual loss or rapid growth"],
      ],
    },
    {
      heading: "Differential diagnosis of a sellar mass",
      columns: ["Lesion", "Clue in history", "MRI or CT clue", "Hormone clue"],
      rows: [
        ["Pituitary macroadenoma", "Adult, slow headache, hypogonadism", "Snowman shape, displaces gland", "AVP deficiency rare; prolactin under 100 (stalk)"],
        ["Craniopharyngioma", "Child or older adult, growth failure", "Suprasellar cyst with calcification on CT", "AVP deficiency common"],
        ["Rathke cleft cyst", "Usually incidental", "Non-enhancing intrasellar cyst", "Usually normal"],
        ["Lymphocytic hypophysitis", "Late pregnancy or postpartum, severe headache", "Thick stalk, symmetric enhancement", "Early ACTH and AVP deficiency"],
        ["Meningioma", "Older woman, visual loss", "Dural tail, separate pituitary", "Usually normal"],
        ["Metastasis or TB", "Known cancer; TB contact, fever", "Thick stalk, ring enhancement (TB)", "AVP deficiency"],
        ["Pituitary hyperplasia", "Untreated hypothyroidism or pregnancy", "Symmetric diffuse enlargement", "High TSH (hypothyroidism)"],
      ],
    },
    {
      heading: "Drugs used around pituitary tumours",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Cabergoline (prolactinoma)", "0.25-0.5 mg orally once or twice a week", "Increase monthly by prolactin; most need 2 mg/week or less", "Nausea, postural hypotension, impulse control disorder; valvulopathy at high dose"],
        ["Hydrocortisone (ACTH deficiency)", "15-20 mg/day orally in 2-3 doses (e.g. 10-5-5 mg)", "Lifelong; double or triple on sick days", "Over-replacement: weight gain, osteoporosis, diabetes"],
        ["Hydrocortisone (perioperative/apoplexy)", "100 mg IV bolus, then 50 mg IV 6-hourly or 200 mg/24 h infusion", "Taper to oral over days once stable", "Hyperglycaemia; do not delay for tests"],
        ["Levothyroxine (central hypothyroidism)", "1.6 microgram/kg/day orally (start 25-50 microgram in elderly)", "Titrate to free T4 in upper half of normal", "Start only after glucocorticoid cover"],
        ["Desmopressin (post-op AVP deficiency)", "1-2 microgram SC/IV or 50-100 microgram oral or 60-120 microgram melt", "Give only for proven polyuria with rising sodium", "Hyponatraemia - avoid fixed regular doses early post-op"],
        ["Temozolomide (aggressive PitNET)", "150-200 mg/m2 orally days 1-5 every 28 days", "At least 3 cycles, assess response", "Myelosuppression, nausea; specialist only"],
      ],
    },
    {
      heading: "Visual field patterns and site of lesion",
      columns: ["Field defect", "Site", "Typical cause"],
      rows: [
        ["Superior bitemporal quadrantanopia", "Chiasm from below", "Pituitary macroadenoma (early)"],
        ["Inferior bitemporal quadrantanopia", "Chiasm from above", "Craniopharyngioma, suprasellar meningioma"],
        ["Complete bitemporal hemianopia", "Body of chiasm", "Large pituitary tumour"],
        ["Junctional scotoma (central scotoma one eye + superotemporal defect other)", "Optic nerve-chiasm junction", "Tumour with post-fixed chiasm"],
        ["Homonymous hemianopia", "Optic tract", "Tumour with pre-fixed chiasm"],
      ],
    },
  ],
  redFlags: [
    "Sudden severe (thunderclap) headache with vomiting, visual loss or ophthalmoplegia - pituitary apoplexy",
    "Falling visual acuity or rapidly spreading field defect",
    "Hypotension, vomiting, hyponatraemia or hypoglycaemia in a patient with a pituitary mass - adrenal crisis",
    "Clear watery nasal discharge after starting cabergoline or after surgery - CSF leak, risk of meningitis",
    "Polyuria with rising sodium after transsphenoidal surgery, or sodium under 130 mmol/L in the second week",
    "Fever, neck stiffness and drowsiness after pituitary surgery - meningitis",
    "New third nerve palsy with a dilated pupil",
  ],
  pearls: [
    "Every pituitary lesion: **prolactin plus IGF-1**; every macro: **full function screen**; every chiasm contact: **perimetry**.",
    "**Prolactin under 100 with a macroadenoma = stalk effect** (or hook effect - ask for 1:100 dilution).",
    "**Steroids before thyroxine** - always.",
    "Monitor central hypothyroidism with **free T4**, not TSH.",
    "**AVP deficiency at diagnosis is not an adenoma** until proved - craniopharyngioma, hypophysitis, metastasis, TB.",
    "**Exclude an aneurysm** before anyone goes through the sphenoid.",
    "Prolactinoma is the **only pituitary tumour treated with tablets first**, even with visual loss.",
    "Triphasic response after surgery: **polyuria (day 1-2), SIADH (day 5-10), then possible permanent AVP deficiency**.",
    "Optic atrophy and thin **RNFL on OCT** predict poor visual recovery.",
  ],
  mcqs: [
    {
      id: "endocrine-pituitary-approach-q1",
      stem: "A 45-year-old man has an MRI for headache that shows a 6 mm non-enhancing pituitary lesion. He has no symptoms of hormone excess or deficiency and normal visual fields by confrontation. According to the Endocrine Society incidentaloma guideline, which initial hormone tests are recommended?",
      options: [
        "Serum prolactin and IGF-1",
        "Full anterior pituitary panel including Synacthen test",
        "No hormone tests, repeat MRI in 1 year only",
        "Serum prolactin alone",
      ],
      answer: 0,
      explanation:
        "The 2011 Endocrine Society guideline advises prolactin and IGF-1 in every incidentaloma, because a prolactinoma or a subtle somatotroph tumour changes management; Cushing testing is added only if clinically suggested. A full pituitary panel with dynamic testing is reserved for macroincidentalomas (or symptomatic 6-9 mm lesions), so it is excessive here. Doing no tests misses silent hypersecretion, and prolactin alone misses early acromegaly.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-pituitary-approach-q2",
      stem: "A 38-year-old woman has amenorrhoea, headache and bitemporal hemianopia. MRI shows a 28 mm sellar mass with suprasellar extension. Serum prolactin is 72 ng/mL and is unchanged after a 1:100 dilution. What is the most likely diagnosis?",
      options: [
        "Macroprolactinoma",
        "Prolactinoma with a hook effect",
        "Non-functioning macroadenoma with stalk effect",
        "Drug-induced hyperprolactinaemia",
      ],
      answer: 2,
      explanation:
        "A macroprolactinoma of 28 mm almost always gives prolactin well over 250 ng/mL; a modest level under 100 ng/mL with a large tumour reflects stalk compression cutting off dopamine (stalk effect), typical of a non-functioning adenoma. The hook effect is excluded because dilution did not raise the value. Drugs do not explain a 28 mm mass. This matters because a non-functioning tumour compressing the chiasm needs surgery, not cabergoline.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-pituitary-approach-q3",
      stem: "In a pituitary macroadenoma compressing the optic chiasm from below, the earliest visual field defect is usually:",
      options: [
        "Inferior bitemporal quadrantanopia",
        "Right homonymous hemianopia",
        "Bilateral central scotomas",
        "Superior bitemporal quadrantanopia",
      ],
      answer: 3,
      explanation:
        "A pituitary tumour rises from below and first presses the inferonasal crossing fibres, which serve the superior temporal fields, so superior bitemporal quadrantanopia comes first. Inferior quadrantanopia suggests compression from above (craniopharyngioma, meningioma). A homonymous hemianopia indicates optic tract involvement, as with a pre-fixed chiasm, and central scotomas suggest optic nerve compression.",
      difficulty: "easy",
    },
    {
      id: "endocrine-pituitary-approach-q4",
      stem: "A 50-year-old woman with a 22 mm non-functioning macroadenoma has fatigue. Free T4 is 0.6 ng/dL (low), TSH 1.8 mIU/L, and 8 am cortisol 4 microgram/dL. What is the correct first step in replacement?",
      options: [
        "Start levothyroxine 50 microgram daily and recheck cortisol in 6 weeks",
        "Start hydrocortisone, then add levothyroxine a few days later",
        "Wait for TSH to rise above the reference range before treating",
        "Start levothyroxine and hydrocortisone on the same day at full dose",
      ],
      answer: 1,
      explanation:
        "Low free T4 with an inappropriately normal TSH is central hypothyroidism, and a morning cortisol of 4 microgram/dL suggests ACTH deficiency. Thyroxine speeds cortisol clearance and can precipitate adrenal crisis, so glucocorticoid must start first and thyroxine follow a few days later. Waiting for TSH to rise is wrong because in central disease TSH never reliably rises.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-pituitary-approach-q5",
      stem: "A sellar mass at presentation is accompanied by polyuria, thirst and a thickened pituitary stalk. Which lesion is least likely?",
      options: [
        "Craniopharyngioma",
        "Pituitary metastasis",
        "Lymphocytic hypophysitis",
        "Non-functioning pituitary adenoma",
      ],
      answer: 3,
      explanation:
        "Pituitary adenomas arise in the anterior lobe and very rarely cause AVP deficiency (diabetes insipidus) before surgery, because the posterior lobe and hypothalamic neurons are spared by slow growth. Craniopharyngioma, metastasis (often breast or lung), hypophysitis and granulomas such as TB involve the stalk or hypothalamus and commonly cause AVP deficiency, so their presence makes an adenoma unlikely.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "endocrine-pituitary-approach-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Discuss the clinical presentation, evaluation and management of a pituitary macroadenoma. Add a note on the approach to a pituitary incidentaloma.",
      openingLines: [
        "A pituitary adenoma (PitNET, WHO 2022) is a benign anterior pituitary tumour; a macroadenoma is 10 mm or more and presents with hormone excess, hypopituitarism or mass effect.",
        "Prolactinomas are treated medically; all other macroadenomas compressing the chiasm or secreting hormone need transsphenoidal surgery.",
      ],
      answer: [
        {
          heading: "Classification",
          points: [
            "Size: micro under 10 mm, macro 10 mm or more, giant 40 mm or more.",
            "Function: prolactinoma, somatotroph, corticotroph, thyrotroph, non-functioning (gonadotroph or null cell).",
            "Lineage (WHO 2022): PIT1, TPIT, SF1, null cell; Knosp grade for cavernous sinus invasion.",
          ],
        },
        {
          heading: "Clinical presentation",
          points: [
            "Mass effect: headache, superior bitemporal quadrantanopia then hemianopia, CN III palsy, CSF rhinorrhoea.",
            "Hypopituitarism in order GH, LH/FSH, TSH, ACTH; stalk effect raises prolactin under 100 ng/mL.",
            "Hormone excess: amenorrhoea-galactorrhoea, acromegaly, Cushing disease, central hyperthyroidism.",
            "Apoplexy: thunderclap headache, visual loss, ophthalmoplegia, shock.",
          ],
        },
        {
          heading: "Evaluation",
          points: [
            "MRI pituitary with gadolinium; CT for calcification; angiography if aneurysm possible.",
            "Hypersecretion: prolactin (diluted 1:100), IGF-1, overnight dexamethasone suppression if Cushingoid.",
            "Hypopituitarism: 8-9 am cortisol, free T4 with TSH, LH/FSH and sex steroid, IGF-1, sodium.",
            "Formal perimetry and OCT; fundus for optic atrophy.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Prolactinoma: cabergoline first even with visual loss.",
            "Others: endoscopic transsphenoidal surgery if chiasm compressed, visual loss or hypersecretion.",
            "Replace hydrocortisone before thyroxine; sick-day rules and steroid card.",
            "Post-op: sodium daily 10 days (triphasic response), function tests at 6-12 weeks, MRI at 3-4 months.",
            "Residual or recurrent: radiotherapy or radiosurgery; temozolomide for aggressive tumours.",
          ],
        },
        {
          heading: "Pituitary incidentaloma",
          points: [
            "All: history, examination, prolactin and IGF-1.",
            "Macro: full function screen; fields if near chiasm; MRI at 6 months then yearly for 3 years.",
            "Micro: MRI at 1 year then every 1-2 years for 3 years; no surgery unless hypersecreting or growing.",
          ],
        },
        {
          heading: "Follow-up",
          points: [
            "Lifelong MRI and hormone review; yearly function tests after radiotherapy.",
            "Refer same day for apoplexy, falling acuity or adrenal crisis.",
          ],
        },
      ],
      mustDraw: [
        "Diagram of the optic chiasm showing compression from below and the resulting superior bitemporal field defect",
        "Flow chart of incidentaloma work-up (micro vs macro)",
      ],
      markSplit: [
        { part: "Definition and classification", marks: 1 },
        { part: "Clinical features (mass, deficiency, excess)", marks: 2 },
        { part: "Investigations with interpretation", marks: 2.5 },
        { part: "Management including surgery and post-op care", marks: 3 },
        { part: "Incidentaloma approach", marks: 1.5 },
      ],
      keywords: ["PitNET", "macroadenoma", "bitemporal hemianopia", "stalk effect", "transsphenoidal surgery", "incidentaloma"],
    },
    {
      id: "endocrine-pituitary-approach-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Differentiate between pituitary macroadenoma and craniopharyngioma.",
      openingLines: [
        "Both are sellar-suprasellar masses that cause visual loss and hypopituitarism, but they differ in origin, age, imaging and hormonal pattern.",
        "A macroadenoma arises from anterior pituitary cells; a craniopharyngioma arises from Rathke pouch remnants.",
      ],
      answer: [
        {
          heading: "Origin and age",
          points: [
            "Adenoma: anterior pituitary cells (PitNET), adults 30-60 years.",
            "Craniopharyngioma: squamous epithelial remnants of Rathke pouch, bimodal - children 5-14 and adults 50-75.",
          ],
        },
        {
          heading: "Clinical",
          points: [
            "Adenoma: superior bitemporal defect, hypogonadism, may secrete hormone; AVP deficiency rare.",
            "Craniopharyngioma: inferior bitemporal defect, raised ICP, growth failure, obesity, AVP deficiency common.",
          ],
        },
        {
          heading: "Imaging",
          points: [
            "Adenoma: solid enhancing 'snowman' mass enlarging the sella; calcification rare.",
            "Craniopharyngioma: suprasellar cystic-solid mass with calcification on CT (adamantinomatous type).",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Adenoma: transsphenoidal surgery (cabergoline for prolactinoma).",
            "Craniopharyngioma: surgery plus radiotherapy; BRAF V600E inhibitors for papillary type; long-term hypothalamic obesity.",
          ],
        },
      ],
      mustDraw: ["Two-column comparison table: origin, age, field defect, AVP deficiency, calcification, treatment"],
      markSplit: [
        { part: "Origin and age", marks: 1 },
        { part: "Clinical and hormonal differences", marks: 2 },
        { part: "Imaging", marks: 1 },
        { part: "Treatment", marks: 1 },
      ],
      keywords: ["craniopharyngioma", "Rathke pouch", "calcification", "AVP deficiency", "macroadenoma"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Pituitary tumour syndromes",
    "Williams Textbook of Endocrinology, 15th edition, 2024",
    "Freda PU et al. Pituitary incidentaloma: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab 2011",
    "WHO Classification of Tumours: Endocrine and Neuroendocrine Tumours, 5th edition, 2022",
    "Petersenn S et al. Diagnosis and management of prolactin-secreting pituitary adenomas: a Pituitary Society international consensus statement. Nat Rev Endocrinol 2023",
    "Fleseriu M et al. Hormonal replacement in hypopituitarism in adults: Endocrine Society clinical practice guideline, 2016",
    "Raverot G et al. European Society of Endocrinology clinical practice guidelines for aggressive pituitary tumours and carcinomas, 2018",
    "Rajasekaran S et al. UK guidelines for the management of pituitary apoplexy (Society for Endocrinology), 2011",
  ],
});

export default topics;
