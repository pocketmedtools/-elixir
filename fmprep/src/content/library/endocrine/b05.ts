import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "endocrine-thyroid-cancer",
  title: "Thyroid cancer: differentiated, medullary and anaplastic",
  frequency: "common",
  oneLiner:
    "Thyroid cancer is a malignancy of the **follicular cells** (differentiated **papillary** and **follicular** carcinoma, poorly differentiated and **anaplastic** carcinoma) or of the **parafollicular C cells** (**medullary carcinoma**); it is diagnosed by **ultrasound-guided FNAC reported in the Bethesda system**, treated by **surgery tailored to risk**, with **radioiodine and TSH suppression** reserved for follicular-cell cancers at higher risk of recurrence and followed up with **thyroglobulin (DTC) or calcitonin/CEA (MTC)**.",
  keywords: [
    "papillary thyroid carcinoma",
    "PTC",
    "follicular thyroid carcinoma",
    "FTC",
    "medullary thyroid carcinoma",
    "MTC",
    "anaplastic thyroid carcinoma",
    "ATC",
    "Bethesda 2023",
    "radioactive iodine I-131",
    "thyroglobulin",
    "calcitonin",
    "RET proto-oncogene",
    "BRAF V600E",
    "TSH suppression",
    "lenvatinib",
    "selpercatinib",
    "NIFTP",
    "oncocytic (Hurthle cell) carcinoma",
    "papillary microcarcinoma active surveillance",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Thyroid cancer** is the commonest endocrine malignancy: about **8.2 lakh new cases and 47,000 deaths worldwide in 2022**, ranking about 7th among all cancers, with women affected about **3 times** as often as men. [GLOBOCAN 2022]",
        "Histological share: **papillary 80-85%**, follicular about 10%, oncocytic 3-5%, **medullary 1-2%**, and **anaplastic under 2%** - yet anaplastic causes a large share of thyroid cancer deaths. [Harrison 22e]",
        "Incidence has risen several-fold over three decades largely through **overdiagnosis of small papillary cancers** by ultrasound; in South Korea screening raised incidence about 15-fold with **no change in mortality**. [Harrison 22e]",
        "In India, the **National Cancer Registry Programme** shows thyroid cancer among the **leading cancers in women**, with the highest rates in **Thiruvananthapuram and other Kerala registries** and in parts of the North-East. [ICMR-NCRP 2020]",
        "Peak age: papillary cancer in **20-50 years**, follicular a decade later, anaplastic in the **seventh decade**; medullary is sporadic in about 75% and hereditary (MEN2 or familial MTC) in about 25%. [Harrison 22e]",
        "Outlook is excellent for most: **10-year survival above 95% for papillary**, about 85-90% for follicular, about 75% for medullary overall, while median survival for anaplastic was historically **about 5-6 months**. [Harrison 22e]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**Ionising radiation to the neck in childhood** is the strongest environmental cause (head-neck radiotherapy, Chernobyl and Fukushima-type exposure); risk is highest when exposed before 5 years and persists for decades. [Harrison 22e]",
        "**Iodine status** shapes histology: iodine-sufficient populations have more **papillary**, iodine-deficient populations more **follicular and anaplastic** cancer - so salt iodisation shifted the Indian mix toward papillary. [Williams Endocrinology 15e]",
        "**Family history**: a first-degree relative with non-medullary thyroid cancer raises risk 3-8 fold; syndromes include **FAP** (cribriform-morular variant), **Cowden/PTEN** (follicular), **Carney complex** and **DICER1**. [Harrison 22e]",
        "**Germline RET mutation** causes hereditary MTC: **MEN2A** (MTC, phaeochromocytoma, hyperparathyroidism) and **MEN2B** (MTC, phaeo, mucosal neuromas, marfanoid habitus) - see the MEN syndromes topic. [ATA MTC 2015]",
        "**Long-standing goitre** is the usual soil for anaplastic transformation; **Hashimoto thyroiditis** is the main risk factor for **primary thyroid lymphoma** (about 60-fold risk). [Harrison 22e]",
        "Obesity and female sex hormones are weak associations; a nodule in a **man, a child or a patient over 70** carries a higher chance of malignancy than one in a middle-aged woman. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Pathophysiology and molecular basis",
      points: [
        "Follicular-cell cancers are driven by the **MAPK pathway**: **BRAF V600E** in about 60% of papillary (classic and tall-cell, more aggressive), **RAS** in follicular and follicular-variant tumours, and **RET/PTC and NTRK fusions** in radiation-induced and childhood papillary cancer. [Harrison 22e]",
        "**TERT promoter mutation** added to BRAF or RAS marks aggressive behaviour, RAI resistance and higher mortality; **TP53 loss** characterises anaplastic and poorly differentiated cancer. [WHO 2022]",
        "**Papillary cancer** spreads by **lymphatics** to central (level VI) and lateral neck nodes; the diagnosis is nuclear - **Orphan Annie (ground-glass) nuclei, nuclear grooves, pseudo-inclusions** and **psammoma bodies** - so FNAC can confirm it. [Robbins 10e]",
        "**Follicular cancer** spreads by **blood** to **bone and lung**; it is defined by **capsular or vascular invasion**, which cytology cannot see - hence FNAC reports only 'follicular neoplasm' and **lobectomy** is needed for the diagnosis. [Robbins 10e]",
        "Differentiated cells keep the **sodium-iodide symporter (NIS)**, **TSH receptor** and **thyroglobulin** synthesis - the basis of **radioiodine therapy, TSH suppression and thyroglobulin as a tumour marker**; dedifferentiation loses NIS and causes RAI-refractory disease. [Harrison 22e]",
        "**Medullary cancer** arises from neural-crest **C cells** that secrete **calcitonin and CEA**; they lack NIS and TSH receptors, so **RAI and TSH suppression are useless** in MTC. Stromal amyloid is derived from calcitonin. [Harrison 22e]",
        "High calcitonin and other peptides (serotonin, prostaglandins, VIP) cause **secretory diarrhoea and flushing** in advanced MTC; ectopic **ACTH** can cause Cushing syndrome. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Classification and staging",
      points: [
        "**WHO 2022 (5th edition)** groups follicular-cell tumours as benign, **low-risk neoplasms** (NIFTP, uncertain malignant potential tumours, hyalinising trabecular tumour) and malignant: papillary, follicular, invasive encapsulated follicular-variant papillary, **oncocytic carcinoma** (replacing 'Hurthle cell'), high-grade (poorly differentiated and differentiated high-grade) and anaplastic. [WHO 2022]",
        "**NIFTP** (non-invasive follicular thyroid neoplasm with papillary-like nuclear features), reclassified from cancer in 2016, needs only **lobectomy without RAI or TSH suppression**. [WHO 2022]",
        "**AJCC 8th edition** T stage: **T1 2 cm or less** (T1a 1 cm or less), **T2 over 2-4 cm**, **T3a over 4 cm** confined, **T3b gross extension into strap muscles**, **T4a** into subcutaneous tissue, larynx, trachea, oesophagus or recurrent laryngeal nerve, **T4b** prevertebral fascia or encasing carotid/mediastinal vessels. [AJCC 8e]",
        "N stage: **N1a** level VI/VII (central, upper mediastinal) and **N1b** lateral (levels I-V) or retropharyngeal nodes. [AJCC 8e]",
        "DTC stage uses an **age cut-off of 55 years**: under 55, any T any N M0 is **stage I** and M1 is **stage II**; at 55 or more stage rises with size, nodes and gross extension (stage IVB if M1). [AJCC 8e]",
        "**Anaplastic carcinoma is always stage IV**: IVA intrathyroidal, IVB gross extrathyroidal extension or nodes, IVC distant metastases. [AJCC 8e]",
        "**ATA risk of recurrence** (used to decide RAI and TSH target): **low** (intrathyroidal, no vascular invasion, 5 or fewer micrometastatic nodes under 0.2 cm) under 5%; **intermediate** (microscopic extension, aggressive histology, vascular invasion, over 5 nodes 0.2-3 cm) 5-20%; **high** (gross extension, incomplete resection, distant metastases, node over 3 cm, FTC with more than 4 foci of vascular invasion) over 20%. [ATA 2015, retained ATA 2025]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "Most present as an **asymptomatic thyroid nodule** found by the patient, at a check-up or as an **incidentaloma** on carotid Doppler, CT or PET. [Harrison 22e]",
        "Suspicious history: **rapid growth**, **new hoarseness** (recurrent laryngeal nerve invasion), **dysphagia, stridor**, neck node swelling, childhood neck irradiation, and family history of thyroid cancer or MEN2. [ATA 2025]",
        "**Follicular cancer** may first present with a **pathological fracture or a pulsatile bony metastasis** (skull, spine, pelvis), or lung nodules. [Bailey and Love 28e]",
        "**MTC** presents as a nodule with lateral nodes, or with **diarrhoea and flushing** in advanced disease; ask about **headache-palpitation-sweating** (phaeo) and **renal stones** (hyperparathyroidism) in the patient and family. [ATA MTC 2015]",
        "**Anaplastic carcinoma**: an elderly person with a long-standing goitre that **enlarges over weeks**, with pain, hoarseness, dysphagia and breathlessness - an emergency. [ATA anaplastic 2021]",
        "Most patients are **euthyroid**; hyperthyroid symptoms make a nodule more likely benign (toxic adenoma), though cancer can coexist with Graves disease. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "A **hard, irregular, fixed nodule** that does not move with deglutition (fixity to trachea or strap muscles) suggests extrathyroidal extension. [Bailey and Love 28e]",
        "**Cervical lymphadenopathy**, especially ipsilateral jugular chain nodes, may be the only sign of a small papillary primary (old term 'lateral aberrant thyroid'). [Bailey and Love 28e]",
        "**Vocal-cord palsy** on indirect or fibre-optic laryngoscopy before surgery is mandatory to document - a palsied cord with a nodule strongly suggests invasion. [ATA 2025]",
        "**Berry sign** - absent carotid pulsation on the side of the mass - indicates malignant encasement of the carotid sheath. [Bailey and Love 28e]",
        "**Stridor, Pemberton sign** (facial plethora on raising arms) and tracheal deviation mark airway compromise or retrosternal extension. [Bailey and Love 28e]",
        "MEN2B stigmata: **mucosal neuromas** of lips and tongue, **marfanoid habitus**, thickened corneal nerves and intestinal ganglioneuromatosis. [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Benign colloid nodule or multinodular goitre** - soft, mobile, spongiform or purely cystic on ultrasound, Bethesda II on FNAC (see the Goitre and iodine deficiency topic). [ATA 2025]",
        "**Follicular adenoma** - cytology identical to follicular carcinoma; only the excised capsule tells them apart. [Robbins 10e]",
        "**Hashimoto nodule (pseudonodule)** - heterogeneous gland, high anti-TPO; FNAC shows lymphocytes and oncocytes. [Williams Endocrinology 15e]",
        "**Primary thyroid lymphoma** - rapidly enlarging mass on Hashimoto background in an elderly woman, like anaplastic cancer; needs **core biopsy with flow cytometry** because it is treated by chemotherapy, not surgery. [Harrison 22e]",
        "**Subacute (de Quervain) thyroiditis** - a painful tender nodule with high ESR and low uptake, settling in weeks (see the Thyroiditis topic). [Harrison 22e]",
        "**Metastasis to the thyroid** (kidney, lung, breast, melanoma) and **tuberculous cervical nodes**, the commonest neck node disease in India, can mimic a nodule with nodes. [Williams Endocrinology 15e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**TSH first**: a low TSH suggests a hyperfunctioning nodule - do a **radionuclide scan**; a 'hot' nodule rarely needs FNAC. Normal or high TSH goes to ultrasound and FNAC. [ATA 2025]",
        "**Neck ultrasound** grades the nodule (ACR TI-RADS or ATA patterns) and maps the lateral nodes; suspicious features are **solid hypoechoic, taller-than-wide, irregular margins, microcalcification and extrathyroidal extension** (details in the Hyperthyroidism and nodule topic). [ACR TI-RADS 2017]",
        "**US-guided FNAC** reported by **Bethesda 2023 (3rd edition)**: I non-diagnostic (risk of malignancy about 13%), II benign (about 4%), III **AUS** (about 22%), IV **follicular neoplasm** (about 30%), V suspicious for malignancy (about 74%), VI malignant (about 97%). [Bethesda 2023]",
        "**Molecular testing** on Bethesda III-IV aspirates (gene panels such as ThyroSeq or Afirma; BRAF, RAS, RET/PTC, TERT) can avoid diagnostic surgery where available - largely in tertiary centres in India. [Bethesda 2023]",
        "**Pre-operative work-up for cancer**: lateral neck ultrasound, **laryngoscopy**, and **contrast CT or MRI** if the mass is fixed, retrosternal or causes hoarseness or stridor; avoid unnecessary iodinated contrast if early RAI is planned. [ATA 2025]",
        "**Serum calcitonin** (normal roughly under 10 pg/mL in men, under 5 pg/mL in women, assay-dependent) and **CEA** for suspected MTC; **calcitonin over 500 pg/mL** suggests distant spread and needs chest, liver and bone imaging. [ATA MTC 2015]",
        "Every MTC needs **germline RET testing** and, before surgery, **plasma metanephrines** (to exclude phaeochromocytoma) and **serum calcium/PTH**. [ATA MTC 2015]",
        "**Pre-operative serum thyroglobulin is not useful** for diagnosis because benign goitres also raise it; Tg becomes a marker only after total thyroidectomy. [ATA 2025]",
        "Suspected anaplastic carcinoma: **core or open biopsy** with **BRAF V600E immunohistochemistry** and rapid staging (CT neck-chest, PET-CT) within days. [ATA anaplastic 2021]",
      ],
    },
    {
      heading: "Management in OPD / primary care",
      points: [
        "The family physician's role: **TSH, ultrasound and FNAC** for any suspicious nodule, prompt referral of Bethesda IV-VI to a thyroid or ENT/endocrine surgeon, and lifelong follow-up after treatment. [ICMR STW 2023]",
        "**Bethesda II**: repeat ultrasound at 12-24 months by TI-RADS; **Bethesda I**: repeat US-guided FNAC after about 3 months; **Bethesda III**: repeat FNAC or molecular test, or diagnostic lobectomy. [Bethesda 2023]",
        "**Papillary microcarcinoma (1 cm or less)** without nodes, extrathyroidal extension or high-risk location (near trachea or nerve) may be offered **active surveillance** with ultrasound every 6-12 months instead of surgery. [ATA 2025]",
        "**Levothyroxine after total thyroidectomy** about **1.6-2 microgram/kg/day** orally on an empty stomach, adjusted to the TSH target; after lobectomy many need no thyroxine if TSH stays within target. [ATA 2025]",
        "Check **TSH 6-8 weeks** after any dose change; ask about palpitations and bone health when TSH is suppressed (AF and osteoporosis risk), especially in postmenopausal women. [ATA 2025]",
        "Counsel that differentiated thyroid cancer is **highly curable** and that the follow-up marker is **thyroglobulin with anti-Tg antibody** measured in the same laboratory each time. [ATA 2025]",
      ],
    },
    {
      heading: "Definitive treatment and inpatient care",
      points: [
        "**Surgery for DTC**: **total thyroidectomy** for tumours **over 4 cm**, gross extrathyroidal extension, clinical node metastases or distant metastases; **lobectomy is sufficient** for low-risk unifocal intrathyroidal tumours up to 4 cm without nodes. [ATA 2025]",
        "**Therapeutic central (level VI) neck dissection** for clinically involved central nodes and **lateral (levels II-V) dissection** for biopsy-proven lateral nodes; prophylactic central dissection is considered for T3-T4 or lateral N1 disease. [ATA 2025]",
        "Post-thyroidectomy ward care: **check calcium and PTH** (PTH under about 15 pg/mL predicts hypocalcaemia; give calcium plus calcitriol), watch for **neck haematoma** (open the wound at the bedside if airway is compromised) and document voice. [BTA 2014]",
        "**Radioiodine (I-131)** after total thyroidectomy is **selective**: not routine for ATA low-risk, considered for intermediate, and recommended for high-risk; doses about **30 mCi (1.1 GBq) for remnant ablation**, 30-150 mCi as adjuvant, and **100-200 mCi for known disease**. [ATA 2025]",
        "RAI preparation: **TSH over 30 mIU/L** by **levothyroxine withdrawal for 3-4 weeks** or **recombinant TSH 0.9 mg IM on 2 consecutive days**; **low-iodine diet for 1-2 weeks**; negative pregnancy test; stop breastfeeding at least 3 months before. [ATA 2025]",
        "**MTC**: **total thyroidectomy plus central neck dissection**, lateral dissection guided by imaging and calcitonin; operate on any **phaeochromocytoma first**. [ATA MTC 2015]",
        "**Anaplastic carcinoma**: secure the airway, rapid BRAF testing, and for **BRAF V600E** tumours **dabrafenib 150 mg twice daily plus trametinib 2 mg once daily**, often neoadjuvant before surgery; otherwise resection if feasible plus chemoradiation, with early palliative care. [ATA anaplastic 2021]",
        "**RAI-refractory DTC** with progressive disease: **lenvatinib 24 mg once daily** or **sorafenib 400 mg twice daily**; cabozantinib second-line; selpercatinib for RET fusions, larotrectinib for NTRK fusions. [NCCN 2025]",
        "**Advanced MTC**: **selpercatinib 160 mg twice daily** (120 mg if under 50 kg) for RET-mutant disease, or vandetanib 300 mg daily or cabozantinib; start only for **progressive or symptomatic** disease, not for a rising calcitonin alone. [NCCN 2025]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: a DTC found in early pregnancy can be operated in the **second trimester** if it grows substantially; otherwise defer surgery to after delivery - outcome is unchanged. **RAI is absolutely contraindicated** in pregnancy and lactation. [ATA 2017 pregnancy]",
        "Avoid pregnancy for **6-12 months after RAI**; men should wait about 3-4 months before conception. [ATA 2025]",
        "**Children** present with more nodal and lung metastases yet have excellent survival; nodules are more often malignant (about 20-25%) and are managed by paediatric thyroid teams. [ATA paediatric 2015]",
        "**Elderly**: TSH suppression raises AF and fracture risk - targets are relaxed; anaplastic and poorly differentiated cancers cluster here. [ATA 2025]",
        "**CKD and dialysis**: RAI clearance is slow, so the activity is reduced and dialysis timed with the nuclear medicine team. [Harrison 22e]",
        "**Resource-limited setting**: I-131 therapy is available only at nuclear medicine centres (government medical colleges, regional cancer centres, AIIMS); **PM-JAY packages** cover thyroidectomy and RAI. [PM-JAY HBP 2022]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "Surgical: **permanent hypoparathyroidism** about 1-3% and **recurrent laryngeal nerve palsy** about 1-2% in high-volume hands; bilateral nerve palsy causes stridor needing tracheostomy. [BTA 2014]",
        "**Superior laryngeal nerve (external branch)** injury causes loss of high pitch and voice fatigue - important in singers and teachers. [Bailey and Love 28e]",
        "RAI: **sialadenitis and dry mouth**, taste change, nasolacrimal duct obstruction, transient gonadal effects, and small risk of **second cancers (leukaemia)** with high cumulative activity. [ATA 2025]",
        "Long-term **TSH suppression**: atrial fibrillation, bone loss in postmenopausal women and anxiety - the reason targets were de-escalated. [ATA 2025]",
        "**Dynamic risk stratification** re-classifies response at 6-24 months: **excellent** (recurrence 1-4%), **indeterminate**, **biochemical incomplete** (about 20% develop structural disease) and **structural incomplete** (disease-specific death 11% with loco-regional, up to 50% with distant disease). [ATA 2015]",
        "MTC: post-operative **calcitonin undetectable** predicts cure; a **calcitonin doubling time under 6 months** predicts poor survival. Anaplastic: 1-year survival about 20% historically, improving with BRAF-targeted therapy. [ATA MTC 2015]",
      ],
    },
    {
      heading: "Follow-up and monitoring",
      points: [
        "**Thyroglobulin plus anti-Tg antibody** every 6-12 months for the first years: anti-Tg antibodies (present in about 25%) cause **falsely low Tg**, so a rising antibody titre itself suggests disease. [ATA 2025]",
        "Response after total thyroidectomy and RAI: **excellent** = suppressed Tg under 0.2 ng/mL or stimulated Tg under 1 ng/mL with negative imaging; **biochemical incomplete** = suppressed Tg 1 ng/mL or more, stimulated Tg 10 ng/mL or more, or rising anti-Tg. [ATA 2015]",
        "**Neck ultrasound at 6-12 months** after surgery, then at intervals by risk; diagnostic whole-body RAI scan only for high-risk or unexplained Tg rise. [ATA 2025]",
        "**FDG PET-CT** when Tg is high (above about 10 ng/mL) and the RAI scan is negative - FDG-avid disease is usually RAI-refractory and more aggressive. [ATA 2025]",
        "**TSH targets (ATA 2015 framework)**: structural incomplete **under 0.1 mIU/L**; biochemical incomplete **0.1-0.5**; high-risk with excellent response 0.1-0.5 for up to 5 years then 0.5-2; low-risk or lobectomy with excellent response **0.5-2 mIU/L**. [ATA 2015, de-escalated in ATA 2025]",
        "**MTC follow-up**: calcitonin and CEA **3 months after surgery**, then every 6-12 months; compute doubling times; screen **RET-positive relatives** and offer prophylactic thyroidectomy. [ATA MTC 2015]",
        "**Prophylactic thyroidectomy** in RET carriers: **highest risk (M918T, MEN2B) in the first year of life**; **high risk (codon 634, A883F) at or before age 5** guided by calcitonin; moderate risk when calcitonin starts to rise. [ATA MTC 2015]",
      ],
    },
    {
      heading: "Prevention and counselling",
      points: [
        "**Do not screen** asymptomatic adults for thyroid cancer by ultrasound or palpation - it drives overdiagnosis without lowering mortality. [USPSTF 2017]",
        "**Cascade genetic testing** of first-degree relatives of every MTC patient with a RET mutation prevents death from hereditary MTC. [ATA MTC 2015]",
        "Shield the thyroid in children during radiotherapy and avoid unnecessary CT of the neck; **potassium iodide** blocks thyroid uptake after nuclear accidents. [WHO 2017]",
        "Counsel on **radiation safety after RAI**: sleep separately and keep distance from children and pregnant women for several days, double-flush the toilet, and use separate utensils - per the nuclear medicine discharge advice. [AERB]",
        "Explain **lifelong levothyroxine** after total thyroidectomy: take daily on an empty stomach, separate from calcium and iron by 4 hours, and never stop before RAI unless told. [ATA 2025]",
        "Link to the **NP-NCD** cancer care pathway and **PM-JAY** for cost of surgery, RAI and targeted therapy. [MoHFW NP-NCD 2023]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**ATA 2025 adult DTC guideline** replaces ATA 2015: adopts **WHO 2022 terms**, endorses **active surveillance** for low-risk microcarcinoma, accepts **lobectomy for low-risk tumours up to 4 cm**, makes RAI **selective** and de-escalates TSH suppression. [ATA 2025]",
        "ATA 2025 recommends **tumour genomic profiling** (BRAF, RET, NTRK, ALK and others) in advanced, RAI-refractory or high-grade disease to choose targeted therapy. [ATA 2025]",
        "**Bethesda 2023 (3rd edition)** uses single names for categories III (**AUS**, dropping FLUS) and IV (**follicular neoplasm**, dropping 'suspicious for'), and publishes average risk of malignancy for each category. [Bethesda 2023]",
        "**WHO 2022** renames Hurthle cell carcinoma **oncocytic carcinoma**, introduces **differentiated high-grade thyroid carcinoma**, and stops calling the tall-cell, hobnail and columnar forms 'variants' (now subtypes). [WHO 2022]",
        "**LIBRETTO-531 (2023)**: selpercatinib gave longer progression-free survival than cabozantinib or vandetanib in RET-mutant MTC, making it the preferred first systemic drug. [NEJM 2023]",
        "**ATA 2021 anaplastic guideline**: urgent BRAF testing and dabrafenib-trametinib (including neoadjuvant use) have changed ATC from uniformly fatal to occasionally resectable. [ATA anaplastic 2021]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic viva: 'Why can FNAC not diagnose follicular carcinoma?' - because it needs **capsular or vascular invasion** seen only on histology. [Robbins 10e]",
        "'Why is RAI useless in MTC?' - C cells lack the **sodium-iodide symporter**; 'Why is Tg the marker after total thyroidectomy?' - only thyroid tissue makes it. [Harrison 22e]",
        "Common mistake: **ordering serum thyroglobulin to diagnose a nodule** - it has no diagnostic value. [ATA 2025]",
        "Common mistake: **operating on MTC without excluding phaeochromocytoma** - hypertensive crisis under anaesthesia. [ATA MTC 2015]",
        "Remember the **age cut-off 55** in AJCC 8 and that a patient under 55 with distant metastases is only **stage II**. [AJCC 8e]",
        "Lymph node metastasis is common in papillary cancer but **affects recurrence more than survival** in the young. [ATA 2025]",
      ],
    },
  ],
  tables: [
    {
      heading: "Bethesda System for Reporting Thyroid Cytopathology, 2023",
      columns: ["Category", "Name", "Average risk of malignancy", "Usual management"],
      rows: [
        ["I", "Non-diagnostic", "About 13%", "Repeat US-guided FNAC after about 3 months"],
        ["II", "Benign", "About 4%", "Clinical and ultrasound follow-up"],
        ["III", "Atypia of undetermined significance (AUS)", "About 22%", "Repeat FNAC, molecular testing, diagnostic lobectomy or surveillance"],
        ["IV", "Follicular neoplasm", "About 30%", "Molecular testing or diagnostic lobectomy"],
        ["V", "Suspicious for malignancy", "About 74%", "Molecular testing, lobectomy or near-total thyroidectomy"],
        ["VI", "Malignant", "About 97%", "Lobectomy or total thyroidectomy by risk"],
      ],
    },
    {
      heading: "Types of thyroid cancer compared",
      columns: ["Feature", "Papillary", "Follicular", "Medullary", "Anaplastic"],
      rows: [
        ["Cell of origin", "Follicular cell", "Follicular cell", "Parafollicular C cell", "Follicular cell (dedifferentiated)"],
        ["Share", "80-85%", "About 10%", "1-2%", "Under 2%"],
        ["Typical age", "20-50 years", "40-60 years", "Any; children in MEN2", "Over 60 years"],
        ["Spread", "Lymphatic (neck nodes)", "Blood (bone, lung)", "Lymphatic and blood", "Local invasion, all routes"],
        ["Key genetics", "BRAF V600E, RET/PTC, NTRK", "RAS, PAX8-PPARG", "RET (germline in 25%)", "TP53, TERT, BRAF"],
        ["Hallmark pathology", "Orphan Annie nuclei, psammoma bodies", "Capsular or vascular invasion", "Amyloid stroma, calcitonin staining", "Spindle and giant cells"],
        ["Tumour marker", "Thyroglobulin", "Thyroglobulin", "Calcitonin and CEA", "None useful"],
        ["RAI useful", "Yes, selectively", "Yes, selectively", "No", "No"],
        ["10-year survival", "Over 95%", "85-90%", "About 75%", "Median survival months"],
      ],
    },
    {
      heading: "Drugs used in thyroid cancer",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Levothyroxine", "1.6-2 microgram/kg/day orally, empty stomach", "Lifelong; titrate every 6-8 weeks to the risk-based TSH target", "Over-suppression causes AF and bone loss; separate from calcium, iron, PPIs"],
        ["Radioiodine (I-131)", "30 mCi ablation; 30-150 mCi adjuvant; 100-200 mCi for known disease, orally", "Single dose; repeat only for RAI-avid persistent disease", "Sialadenitis, dry mouth, taste loss; contraindicated in pregnancy and lactation"],
        ["Recombinant TSH (thyrotropin alfa)", "0.9 mg IM daily for 2 days", "Before RAI or stimulated Tg", "Nausea, headache; avoids hypothyroid withdrawal; costly"],
        ["Calcium carbonate plus calcitriol", "Elemental calcium 1-3 g/day plus calcitriol 0.25-1 microgram/day orally", "Post-thyroidectomy hypocalcaemia; taper by calcium and PTH", "Hypercalcaemia, hypercalciuria, stones"],
        ["Lenvatinib", "24 mg orally once daily", "Until progression or toxicity (RAI-refractory DTC)", "Hypertension, proteinuria, diarrhoea, fatigue, fistula, bleeding"],
        ["Sorafenib", "400 mg orally twice daily", "Until progression (RAI-refractory DTC)", "Hand-foot skin reaction, diarrhoea, hypertension, raised TSH"],
        ["Selpercatinib", "160 mg orally twice daily (120 mg if under 50 kg)", "Until progression (RET-mutant MTC, RET-fusion DTC)", "Hypertension, QT prolongation, raised transaminases, dry mouth"],
        ["Dabrafenib plus trametinib", "150 mg twice daily plus 2 mg once daily orally", "BRAF V600E anaplastic; neoadjuvant or until progression", "Pyrexia, rash, reduced ejection fraction, uveitis"],
        ["Vandetanib / cabozantinib", "300 mg once daily / 140 mg once daily (capsule) orally", "Progressive MTC when selpercatinib not available", "Vandetanib QT prolongation; cabozantinib bleeding, fistula, hand-foot syndrome"],
      ],
    },
    {
      heading: "ATA response to therapy after total thyroidectomy and RAI",
      columns: ["Response", "Suppressed Tg", "Stimulated Tg", "Imaging", "TSH target"],
      rows: [
        ["Excellent", "Under 0.2 ng/mL", "Under 1 ng/mL", "Negative", "0.5-2 mIU/L (0.1-0.5 for up to 5 years if high risk)"],
        ["Indeterminate", "0.2-1 ng/mL", "1-10 ng/mL", "Non-specific findings", "0.5-2 mIU/L if low risk; 0.1-0.5 if intermediate or high risk"],
        ["Biochemical incomplete", "1 ng/mL or more", "10 ng/mL or more", "Negative", "0.1-0.5 mIU/L"],
        ["Structural incomplete", "Any", "Any", "Structural or functional disease", "Under 0.1 mIU/L"],
      ],
    },
    {
      heading: "Differential diagnosis of a rapidly enlarging thyroid mass",
      columns: ["Condition", "Clue", "Confirming test", "Treatment"],
      rows: [
        ["Anaplastic carcinoma", "Elderly, old goitre, hard fixed, hoarse in weeks", "Core biopsy, BRAF IHC", "Airway, BRAF-MEK inhibitors, surgery, chemoradiation"],
        ["Primary thyroid lymphoma", "Elderly woman with Hashimoto, rubbery", "Core biopsy with flow cytometry", "R-CHOP chemotherapy plus radiotherapy"],
        ["Haemorrhage into a nodule", "Sudden painful swelling over hours", "Ultrasound: cystic with debris", "Aspiration, observation"],
        ["Subacute thyroiditis", "Pain to jaw or ear, fever, tender", "High ESR, low uptake", "NSAID or prednisolone"],
        ["Poorly differentiated carcinoma", "Rapid growth, nodes, older adult", "Histology (high mitoses, necrosis)", "Total thyroidectomy, RAI if avid"],
      ],
    },
  ],
  redFlags: [
    "Stridor, breathlessness or a rapidly enlarging neck mass - suspect anaplastic carcinoma or lymphoma and secure the airway today",
    "New hoarseness with a thyroid nodule - recurrent laryngeal nerve invasion",
    "Hard, fixed nodule with ipsilateral cervical lymph nodes",
    "Neck swelling or breathlessness within hours of thyroidectomy - expanding haematoma; open the wound",
    "Perioral tingling, carpopedal spasm or Chvostek sign after thyroidectomy - acute hypocalcaemia",
    "Thyroid nodule with diarrhoea and flushing or a family history of MTC or phaeochromocytoma",
    "Thyroid nodule in a child or after childhood neck irradiation",
  ],
  pearls: [
    "**Papillary is 'P' for Popular, Palpable nodes, Psammoma bodies, Positive prognosis.**",
    "Follicular spreads by **blood to bone and lung**; papillary by **lymph to neck nodes**.",
    "**FNAC cannot diagnose follicular carcinoma** - invasion is a histological diagnosis.",
    "**Thyroglobulin is a follow-up marker, never a diagnostic test** for a nodule.",
    "**Always measure anti-Tg antibody with Tg** - antibodies falsely lower Tg.",
    "Before operating on MTC, **exclude phaeochromocytoma** with plasma metanephrines.",
    "**RAI and TSH suppression do nothing in MTC** - C cells lack NIS and TSH receptors.",
    "AJCC 8: **age 55** is the cut-off; under 55 the worst DTC stage is **II**.",
    "**Anaplastic carcinoma is always stage IV** - test BRAF V600E within days.",
  ],
  mcqs: [
    {
      id: "endocrine-thyroid-cancer-q1",
      stem: "A 38-year-old woman has a 2.5 cm solid thyroid nodule. US-guided FNAC is reported as Bethesda category IV. Which statement about this report is correct?",
      options: [
        "It confirms follicular carcinoma and needs total thyroidectomy plus radioiodine",
        "It cannot distinguish follicular adenoma from carcinoma, so molecular testing or diagnostic lobectomy is advised",
        "It is a non-diagnostic sample and should simply be repeated after 3 months",
        "It carries a risk of malignancy above 90% and is treated as papillary carcinoma",
      ],
      answer: 1,
      explanation:
        "Bethesda IV (follicular neoplasm) carries about a 30% risk of malignancy; cytology cannot see capsular or vascular invasion, so adenoma and carcinoma look the same and the next step is molecular testing or diagnostic lobectomy. It is not proof of carcinoma, it is not non-diagnostic (that is category I), and a risk above 90% belongs to category VI.",
      difficulty: "easy",
    },
    {
      id: "endocrine-thyroid-cancer-q2",
      stem: "A 45-year-old man has medullary thyroid carcinoma on FNAC with a raised calcitonin. Before thyroidectomy, which test is mandatory?",
      options: [
        "Serum thyroglobulin",
        "Radioiodine uptake scan",
        "Plasma free metanephrines",
        "Anti-TPO antibody",
      ],
      answer: 2,
      explanation:
        "About a quarter of MTC is hereditary (MEN2), and an undiagnosed phaeochromocytoma causes a hypertensive crisis under anaesthesia, so plasma metanephrines are mandatory and a phaeo is removed first. Thyroglobulin is a marker of follicular cell tumours, C cells do not take up iodine so an uptake scan adds nothing, and anti-TPO has no role in MTC staging.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-thyroid-cancer-q3",
      stem: "A 50-year-old woman had total thyroidectomy and radioiodine for papillary carcinoma one year ago. Suppressed thyroglobulin is undetectable but anti-thyroglobulin antibody titre has doubled. Neck ultrasound is normal. What is the best interpretation?",
      options: [
        "Excellent response; reduce follow-up to every 5 years",
        "Laboratory error, since Tg is undetectable",
        "Expected rise after RAI that needs no action",
        "Possible persistent disease, because rising anti-Tg antibody can mask thyroglobulin",
      ],
      answer: 3,
      explanation:
        "Anti-Tg antibodies interfere with immunometric Tg assays and give falsely low results; a rising titre is classed as biochemical incomplete response and warrants closer imaging. Calling it excellent ignores the antibody trend, and a doubling titre a year after treatment is neither a typical lab error nor an expected post-RAI change - antibodies should fall when tissue is gone.",
      difficulty: "hard",
    },
    {
      id: "endocrine-thyroid-cancer-q4",
      stem: "Under AJCC 8th edition staging, a 40-year-old woman with papillary carcinoma, lateral neck nodes and lung metastases is in which stage?",
      options: ["Stage II", "Stage I", "Stage III", "Stage IVB"],
      answer: 0,
      explanation:
        "AJCC 8 uses an age cut-off of 55 for differentiated thyroid cancer: under 55, any T and any N without metastasis is stage I and any distant metastasis is stage II. Stage III and IVB apply only to patients aged 55 or more, and stage I would be correct only if there were no distant metastases.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-thyroid-cancer-q5",
      stem: "A 70-year-old man with a long-standing goitre has rapid enlargement over 3 weeks, hoarseness and stridor. Core biopsy shows anaplastic carcinoma positive for BRAF V600E. Which systemic therapy has the best evidence?",
      options: [
        "High-dose radioiodine 200 mCi",
        "Dabrafenib plus trametinib",
        "Levothyroxine TSH suppression",
        "Vandetanib",
      ],
      answer: 1,
      explanation:
        "BRAF V600E-mutant anaplastic carcinoma responds to combined BRAF and MEK inhibition with dabrafenib and trametinib, which can also be used neoadjuvantly to make the tumour resectable. Anaplastic cells lose the sodium-iodide symporter so radioiodine is useless, TSH suppression has no effect on a dedifferentiated tumour, and vandetanib is a RET-directed drug for medullary carcinoma.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "endocrine-thyroid-cancer-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Classify thyroid malignancies. Describe the evaluation of a thyroid nodule and the management and follow-up of differentiated thyroid cancer.",
      openingLines: [
        "Thyroid cancer is the commonest endocrine malignancy; 80-85% are papillary, and most have a 10-year survival above 95%.",
        "Management is risk-adapted: surgery for all, radioiodine and TSH suppression selectively, and lifelong follow-up with thyroglobulin.",
      ],
      answer: [
        {
          heading: "Classification (WHO 2022)",
          points: [
            "Follicular cell: **papillary**, follicular, oncocytic, high-grade (poorly differentiated, differentiated high-grade), **anaplastic**.",
            "C cell: **medullary** (sporadic 75%, hereditary MEN2 25%).",
            "Others: primary lymphoma, metastases; NIFTP is a low-risk neoplasm, not cancer.",
          ],
        },
        {
          heading: "Evaluation of a nodule",
          points: [
            "History of rapid growth, hoarseness, radiation, family history; examine for hardness, fixity, nodes, cord palsy.",
            "**TSH** first: low TSH means scintigraphy; normal or high goes to **ultrasound** with TI-RADS.",
            "**US-guided FNAC** reported by **Bethesda 2023** I-VI with risk of malignancy 13, 4, 22, 30, 74, 97%.",
            "Calcitonin if MTC suspected; laryngoscopy and CT for fixed or retrosternal masses.",
          ],
        },
        {
          heading: "Surgery",
          points: [
            "**Lobectomy** for low-risk unifocal tumours up to 4 cm without nodes; active surveillance an option for low-risk microcarcinoma.",
            "**Total thyroidectomy** for over 4 cm, gross extrathyroidal extension, nodes or metastases.",
            "Therapeutic central and lateral neck dissection for involved nodes.",
          ],
        },
        {
          heading: "Risk stratification and radioiodine",
          points: [
            "ATA risk of recurrence: low (under 5%), intermediate (5-20%), high (over 20%).",
            "RAI not routine for low risk; considered for intermediate; recommended for high risk.",
            "Prepare with TSH over 30 (withdrawal or rhTSH), low-iodine diet, pregnancy test.",
          ],
        },
        {
          heading: "TSH suppression and follow-up",
          points: [
            "Levothyroxine 1.6-2 microgram/kg; TSH under 0.1 for structural disease, 0.5-2 for excellent response.",
            "Tg with anti-Tg antibody and neck ultrasound at 6-12 months; classify response (excellent, indeterminate, biochemical, structural).",
            "FDG PET-CT if Tg high and RAI scan negative; lenvatinib or sorafenib for progressive RAI-refractory disease.",
          ],
        },
        {
          heading: "Prognosis",
          points: [
            "Papillary over 95%, follicular 85-90% at 10 years; worse with age over 55, size, extension, distant metastases.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart: nodule to TSH to ultrasound to FNAC (Bethesda) to surgery",
        "Table: Bethesda categories with risk of malignancy",
      ],
      markSplit: [
        { part: "Classification", marks: 2 },
        { part: "Nodule evaluation and Bethesda", marks: 3 },
        { part: "Surgery, RAI and TSH suppression", marks: 3 },
        { part: "Follow-up and prognosis", marks: 2 },
      ],
      keywords: ["Bethesda", "ATA risk", "radioiodine", "thyroglobulin", "TSH suppression", "lobectomy"],
    },
    {
      id: "endocrine-thyroid-cancer-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Write a short note on medullary carcinoma of the thyroid.",
      openingLines: [
        "Medullary thyroid carcinoma arises from the calcitonin-secreting parafollicular C cells and forms 1-2% of thyroid cancers.",
        "About 25% are hereditary due to germline RET mutations (MEN2A, MEN2B, familial MTC).",
      ],
      answer: [
        {
          heading: "Features",
          points: [
            "Nodule with nodes; diarrhoea and flushing in advanced disease; amyloid stroma on histology.",
            "MEN2A: MTC, phaeo, hyperparathyroidism; MEN2B: MTC, phaeo, mucosal neuromas, marfanoid habitus.",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "**Calcitonin and CEA**; calcitonin over 500 pg/mL needs imaging for distant metastases.",
            "**Germline RET** in all; **plasma metanephrines** and calcium before surgery.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "**Total thyroidectomy plus central neck dissection**; remove phaeo first.",
            "No role for RAI or TSH suppression; selpercatinib for progressive RET-mutant disease.",
            "Prophylactic thyroidectomy in carriers: M918T in first year, codon 634 by age 5.",
          ],
        },
        {
          heading: "Follow-up",
          points: ["Calcitonin and CEA at 3 months, then 6-12 monthly; doubling time under 6 months is ominous."],
        },
      ],
      mustDraw: ["Table: MEN2A versus MEN2B components"],
      markSplit: [
        { part: "Origin and genetics", marks: 1 },
        { part: "Clinical features and investigations", marks: 2 },
        { part: "Treatment and follow-up", marks: 2 },
      ],
      keywords: ["C cells", "calcitonin", "RET", "MEN2", "phaeochromocytoma", "selpercatinib"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Thyroid cancer chapter",
    "Ringel MD, Sosa JA, et al. 2025 American Thyroid Association Management Guidelines for Adult Patients with Differentiated Thyroid Cancer. Thyroid, 2025",
    "Ali SZ, VanderLaan PA, eds. The Bethesda System for Reporting Thyroid Cytopathology, 3rd edition, 2023",
    "Wells SA Jr, et al. Revised American Thyroid Association Guidelines for the Management of Medullary Thyroid Carcinoma. Thyroid, 2015",
    "Bible KC, et al. 2021 American Thyroid Association Guidelines for Management of Patients with Anaplastic Thyroid Cancer. Thyroid, 2021",
    "WHO Classification of Tumours: Endocrine and Neuroendocrine Tumours, 5th edition, 2022",
    "AJCC Cancer Staging Manual, 8th edition, 2017",
    "ICMR-NCDIR Report of the National Cancer Registry Programme, 2020",
  ],
});

export default topics;
