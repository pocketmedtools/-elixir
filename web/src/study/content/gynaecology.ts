import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "gynaecology-abnormal-uterine-bleeding",
  title: "Abnormal uterine bleeding and the PALM-COEIN system",
  oneLiner:
    "Abnormal uterine bleeding is bleeding from the uterine corpus that is abnormal in frequency, regularity, duration or volume in a non-pregnant woman of reproductive age, and it is classified by the FIGO PALM-COEIN system into four structural causes (polyp, adenomyosis, leiomyoma, malignancy and hyperplasia) and five non-structural causes (coagulopathy, ovulatory dysfunction, endometrial, iatrogenic, not otherwise classified).",
  frequency: "core",
  keywords: [
    "AUB",
    "PALM-COEIN",
    "heavy menstrual bleeding",
    "HMB",
    "menorrhagia",
    "intermenstrual bleeding",
    "dysfunctional uterine bleeding",
    "DUB",
    "tranexamic acid",
    "LNG-IUS",
    "Mirena",
    "norethisterone",
    "endometrial biopsy",
    "von Willebrand disease",
    "postmenopausal bleeding",
    "anovulatory bleeding",
    "FIGO 2018",
  ],
  sections: [
    {
      heading: "Definitions and the FIGO vocabulary",
      points: [
        "**Normal menstrual parameters (FIGO 2018):** frequency 24-38 days, regularity with cycle-to-cycle variation of 7-9 days or less, duration 8 days or less, and a volume the woman herself does not find excessive.",
        "**Abnormal uterine bleeding (AUB)** is any bleeding from the uterine corpus that departs from those limits in a non-pregnant woman of reproductive age; it is described as acute, chronic (present for most of the last 6 months) or intermenstrual.",
        "**Heavy menstrual bleeding (HMB)** is excessive menstrual blood loss that interferes with a woman's physical, social, emotional or material quality of life - a patient-centred definition that has replaced the old 80 mL threshold, which was never measurable in clinic.",
        "FIGO 2018 asks that the terms **menorrhagia, metrorrhagia, menometrorrhagia, oligomenorrhoea, polymenorrhoea and dysfunctional uterine bleeding be abandoned**; write heavy menstrual bleeding, intermenstrual bleeding, infrequent menses and AUB-O instead. Examiners look specifically for this.",
        "Bleeding before menarche, after 12 months of amenorrhoea at the menopause, or during pregnancy is **not** classified as AUB and is investigated on its own pathway.",
        "Burden matters in India: NFHS-5 (2019-21) found 57% of women aged 15-49 anaemic, and untreated HMB in a country with that baseline turns a nuisance symptom into symptomatic iron deficiency anaemia.",
      ],
    },
    {
      heading: "PALM-COEIN in full",
      points: [
        "**PALM are the structural causes visible on imaging or histology:** AUB-P polyp, AUB-A adenomyosis, AUB-L leiomyoma (subclassified L-SM submucosal and L-O other, because only submucosal fibroids reliably cause bleeding), AUB-M malignancy and hyperplasia.",
        "**COEIN are the non-structural causes:** AUB-C coagulopathy, AUB-O ovulatory dysfunction, AUB-E endometrial (a primary disorder of local endometrial haemostasis), AUB-I iatrogenic, AUB-N not otherwise classified.",
        "A woman may carry **more than one category at once** and the notation allows it - a woman with fibroids who is also on warfarin is AUB-L(SM); C. Marks are given for saying this, not for reciting the acronym alone.",
        "**AUB-C:** 13% of women with HMB have an inherited bleeding disorder, most often von Willebrand disease; suspect it when heavy bleeding has been present since menarche, or with postpartum haemorrhage, surgical or dental bleeding, epistaxis or easy bruising.",
        "**AUB-O** is the commonest non-structural cause and reflects an unopposed oestrogen state: adolescence (immature hypothalamic-pituitary-ovarian axis), perimenopause, PCOS, thyroid disease, hyperprolactinaemia, obesity, and severe systemic illness or stress.",
        "**AUB-E** is a diagnosis of exclusion in a woman with regular ovulatory cycles and no structural lesion, attributed to deficient local vasoconstrictors and excess prostaglandin E2 and plasminogen activator - it is why tranexamic acid and NSAIDs work.",
        "**AUB-I** covers hormonal contraceptives (breakthrough bleeding on the pill, on progestogen-only implants and injectables), copper IUCD, anticoagulants, and agents that raise prolactin such as antipsychotics.",
      ],
    },
    {
      heading: "History and examination in the clinic",
      points: [
        "Quantify with events the woman can count: number of pads or cloths a day, flooding through to clothes or bedding, passage of clots larger than a rupee coin, and how many days of work or school were lost.",
        "**Always exclude pregnancy first** with a urine pregnancy test in any woman of reproductive age, whatever she says about contraception - miscarriage and ectopic pregnancy are the diagnoses that kill.",
        "Ask the pattern: regular heavy periods point to AUB-L, AUB-A, AUB-C or AUB-E; irregular unpredictable bleeding points to AUB-O; **intermenstrual and postcoital bleeding point to the cervix** until proved otherwise.",
        "Screen for coagulopathy with the four-question screen: heavy periods since menarche, plus any one of postpartum haemorrhage, surgery-related bleeding, dental-extraction bleeding, or two of bruising, epistaxis, gum bleeding and family history.",
        "Drug and device history: warfarin, aspirin, the copper IUCD, injectable and implant progestogens, tamoxifen, antipsychotics, and traditional or over-the-counter hormone preparations.",
        "Examination: pallor, thyroid, BMI, hirsutism and acanthosis nigricans (PCOS), bruising and petechiae; abdominal examination for a mass; and **a speculum examination with a per-vaginal examination in every sexually active woman** - the cervix must be seen, not assumed.",
      ],
    },
    {
      heading: "Investigations and who needs a biopsy",
      points: [
        "Every woman: urine pregnancy test, complete blood count with a peripheral smear, and **serum ferritin** where affordable - haemoglobin alone underestimates iron deficiency in the Indian population.",
        "Targeted tests: TSH if there are thyroid symptoms or irregular cycles, prolactin with galactorrhoea or amenorrhoea, coagulation screen with von Willebrand factor antigen and ristocetin cofactor activity when the coagulopathy screen is positive, and androgens only if virilisation is present.",
        "**Transvaginal ultrasound is the first-line imaging** for all but the virgin patient, in whom a transabdominal or transrectal scan is used; it detects fibroids, adenomyosis, polyps, endometrial thickness and ovarian pathology.",
        "**Saline infusion sonohysterography or hysteroscopy** is added when the ultrasound is inconclusive but the history suggests an intracavitary lesion - a normal transvaginal scan does not exclude a small submucosal polyp or fibroid.",
        "**Endometrial sampling is mandatory** in: any woman aged 45 or over with AUB; a woman under 45 with persistent AUB and unopposed oestrogen exposure (obesity, PCOS, chronic anovulation); failure of medical therapy; and any woman with Lynch syndrome.",
        "**Any bleeding after the menopause is endometrial carcinoma until proved otherwise:** transvaginal ultrasound with an endometrial thickness of 4 mm or less makes cancer very unlikely, while more than 4 mm mandates endometrial sampling by pipelle or hysteroscopic biopsy.",
        "Cervical cytology or VIA is done as per the screening schedule, not as a test for the bleeding, but a visibly abnormal cervix needs a **biopsy of the lesion, never just a Pap smear**.",
      ],
    },
    {
      heading: "Medical management of heavy menstrual bleeding",
      points: [
        "**Levonorgestrel-releasing intrauterine system (LNG-IUS, 52 mg releasing 20 microgram/24 h) is first-line** where the cavity is not distorted: it reduces measured menstrual blood loss by 70-95%, lasts 5-8 years, treats dysmenorrhoea, gives contraception, and is the only medical option that competes with hysterectomy on satisfaction.",
        "**Tranexamic acid 1 g PO three or four times a day for the first 3-5 days of bleeding** reduces loss by 40-50%; it is non-hormonal, does not affect fertility, and is the drug for a woman who wants to conceive. It is contraindicated in active thromboembolic disease.",
        "**NSAIDs - mefenamic acid 500 mg PO three times a day** from the day before bleeding starts - cut loss by 25-35% and treat dysmenorrhoea at the same time; they are the natural partner for tranexamic acid.",
        "**Combined oral contraceptive pills** reduce loss by 35-50%, regularise the cycle and provide contraception; use WHO Medical Eligibility Criteria before prescribing, and remember migraine with aura and age 35 or more with 15 or more cigarettes a day are Category 4.",
        "**Cyclical norethisterone 5 mg PO three times a day from day 5 to day 26** is effective; the common error is prescribing it only in the luteal phase (day 19-26), which is ineffective for ovulatory HMB. Depot medroxyprogesterone acetate is an alternative when contraception is also wanted.",
        "**GnRH agonists** (leuprolide 3.75 mg IM monthly) with add-back therapy are used only for 3-6 months to correct anaemia before surgery, because of bone loss and vasomotor symptoms.",
        "**Iron replacement is part of the treatment, not an afterthought:** ferrous ascorbate or ferrous sulphate 100 mg elemental iron daily for 3-6 months, or intravenous iron sucrose or ferric carboxymaltose when haemoglobin is under 8 g/dL, oral iron is not tolerated, or surgery is imminent.",
      ],
    },
    {
      heading: "Acute heavy bleeding and surgical options",
      points: [
        "**Acute AUB with haemodynamic compromise:** two wide-bore cannulae, crystalloid, cross-match and transfuse, treat the shock first and diagnose second; exclude pregnancy and its complications on the same visit.",
        "To stop the bleeding medically: high-dose oral progestogen (medroxyprogesterone acetate 20 mg PO three times a day for 7 days then taper), or a monophasic COC three times a day for 7 days, plus **tranexamic acid 1 g three times a day**; intravenous conjugated oestrogen 25 mg 4-6 hourly is used where available.",
        "Failure of medical control needs intrauterine tamponade with a Foley catheter balloon, or **uterine curettage, which is a haemostatic manoeuvre and not a treatment** - the bleeding returns unless a definitive plan is made.",
        "**Endometrial ablation** suits a woman who has completed her family, has a normal cavity and does not want hysterectomy; she must still use contraception because pregnancy after ablation is dangerous.",
        "**Hysteroscopic resection** is the operation for a polyp or a FIGO type 0-2 submucosal fibroid and often cures the bleeding outright.",
        "**Hysterectomy is definitive but is the last resort**, reserved for failure of medical treatment, structural disease not amenable to conservative surgery, or the woman's informed choice after the alternatives have genuinely been offered.",
        "The commonest examiner criticism in India is the **hysterectomy done for HMB without an LNG-IUS trial and without an endometrial biopsy** - say explicitly that you would do both first.",
      ],
    },
  ],
  tables: [
    {
      heading: "PALM-COEIN at a glance",
      columns: ["Code", "Cause", "Typical bleeding pattern", "Test that confirms it"],
      rows: [
        ["AUB-P", "Endometrial or endocervical polyp", "Intermenstrual and postcoital bleeding", "Saline sonohysterography or hysteroscopy"],
        ["AUB-A", "Adenomyosis", "Heavy painful regular periods, bulky tender uterus", "Transvaginal ultrasound or MRI (junctional zone over 12 mm)"],
        ["AUB-L", "Leiomyoma (submucosal matters most)", "Heavy regular periods with bulk symptoms", "Transvaginal ultrasound with FIGO type 0-8"],
        ["AUB-M", "Hyperplasia or carcinoma", "Intermenstrual or postmenopausal bleeding", "Endometrial biopsy"],
        ["AUB-C", "Coagulopathy, usually von Willebrand disease", "Heavy since menarche, bruising, epistaxis", "vWF antigen, ristocetin cofactor, factor VIII"],
        ["AUB-O", "Ovulatory dysfunction (PCOS, thyroid, perimenopause)", "Irregular and unpredictable, often prolonged", "TSH, prolactin, clinical pattern, ultrasound"],
        ["AUB-E", "Primary endometrial haemostatic disorder", "Regular cycles, heavy flow, no lesion found", "Diagnosis of exclusion"],
        ["AUB-I", "Iatrogenic - contraceptives, anticoagulants, copper IUCD", "Breakthrough or unscheduled bleeding", "Drug and device history"],
        ["AUB-N", "Not otherwise classified (AV malformation, isthmocele)", "Variable, often after caesarean section", "Doppler ultrasound, hysteroscopy"],
      ],
    },
    {
      heading: "Medical treatment of heavy menstrual bleeding",
      columns: ["Option", "Dose", "Reduction in blood loss", "Best suited to"],
      rows: [
        ["LNG-IUS 52 mg", "Insert in cavity, 5-8 years", "70-95%", "Wants long-term treatment and contraception"],
        ["Tranexamic acid", "1 g PO TDS-QDS for 3-5 bleeding days", "40-50%", "Wants to conceive, non-hormonal preference"],
        ["Mefenamic acid", "500 mg PO TDS during bleeding", "25-35%", "Heavy bleeding with dysmenorrhoea"],
        ["Combined oral contraceptive", "One tablet PO daily, cyclical or continuous", "35-50%", "Needs cycle control plus contraception"],
        ["Norethisterone", "5 mg PO TDS, day 5 to day 26", "About 80% in short-term use", "Short-term control while awaiting definitive plan"],
        ["Depot medroxyprogesterone", "150 mg IM every 3 months", "Amenorrhoea in about 50% at 1 year", "Wants injectable contraception too"],
        ["GnRH agonist with add-back", "Leuprolide 3.75 mg IM monthly, 3-6 months", "Near amenorrhoea", "Preoperative correction of anaemia only"],
      ],
    },
  ],
  redFlags: [
    "Any vaginal bleeding after 12 months of amenorrhoea at the menopause - endometrial carcinoma until proved otherwise, refer for transvaginal ultrasound and endometrial sampling.",
    "Postcoital bleeding, an irregular or friable cervix, or a visible cervical growth - biopsy the lesion the same visit; never accept a normal Pap smear as reassurance.",
    "Heavy bleeding with tachycardia, systolic BP under 90 mmHg, syncope or haemoglobin under 7 g/dL - resuscitate and admit.",
    "A positive pregnancy test with bleeding and pelvic pain - ectopic pregnancy until excluded; arrange ultrasound and serum beta-hCG urgently.",
    "AUB with fever, offensive discharge and uterine tenderness after a delivery or abortion - sepsis, admit for intravenous antibiotics.",
    "Rapidly enlarging pelvic mass, weight loss, or a fibroid growing after the menopause - suspect leiomyosarcoma and refer to gynaecological oncology.",
    "Heavy menstrual bleeding since menarche with epistaxis, bruising or a family history of bleeding - investigate for von Willebrand disease before any surgery.",
  ],
  pearls: [
    "Say PALM-COEIN in full and then say a woman can have two categories at once - that sentence alone earns the classification marks.",
    "The FIGO 2018 terminology answer: menorrhagia, metrorrhagia and dysfunctional uterine bleeding are obsolete terms; use heavy menstrual bleeding, intermenstrual bleeding and AUB-O.",
    "Urine pregnancy test before anything else in a reproductive-age woman with abnormal bleeding - this is a mark, and it is also the diagnosis you must not miss.",
    "Age 45 or more with AUB means an endometrial biopsy, whatever the ultrasound shows; under 45 it is the unopposed oestrogen state (obesity, PCOS, anovulation) that triggers sampling.",
    "Postmenopausal endometrial thickness of 4 mm or less has a very high negative predictive value; above 4 mm the woman needs tissue.",
    "The LNG-IUS is the first-line medical treatment for heavy menstrual bleeding and the single strongest alternative to hysterectomy - offer it before you ever mention an operation.",
    "Norethisterone for ovulatory heavy bleeding must run day 5 to day 26; the luteal-phase-only regimen is a classic wrong answer.",
    "Curettage stops bleeding for one cycle and diagnoses the endometrium; it is not a treatment for heavy menstrual bleeding.",
  ],
  theory: [
    {
      id: "gynaecology-abnormal-uterine-bleeding-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 42-year-old para 3 woman presents with heavy menstrual bleeding for eight months and a haemoglobin of 7.8 g/dL. Classify abnormal uterine bleeding, and describe your evaluation and management of this patient in a family practice setting.",
      openingLines: [
        "Abnormal uterine bleeding is bleeding from the uterine corpus that is abnormal in frequency, regularity, duration or volume in a non-pregnant woman of reproductive age; heavy menstrual bleeding is excessive loss that interferes with the woman's quality of life.",
        "FIGO classifies the causes by the PALM-COEIN system into four structural causes - polyp, adenomyosis, leiomyoma, malignancy and hyperplasia - and five non-structural causes - coagulopathy, ovulatory dysfunction, endometrial, iatrogenic and not otherwise classified.",
      ],
      answer: [
        {
          heading: "1. Classification - PALM-COEIN",
          points: [
            "AUB-P polyp, AUB-A adenomyosis, AUB-L leiomyoma (subclassified into L-SM submucosal and L-O other), AUB-M malignancy and hyperplasia.",
            "AUB-C coagulopathy, AUB-O ovulatory dysfunction, AUB-E endometrial, AUB-I iatrogenic, AUB-N not otherwise classified.",
            "More than one category may coexist and the notation records both; at 42 years the likeliest categories are AUB-L, AUB-A and AUB-O, with AUB-M to be excluded.",
          ],
        },
        {
          heading: "2. History",
          points: [
            "Quantify: pads or cloths per day, flooding, clots larger than a rupee coin, days of work lost, and duration and regularity of cycles.",
            "Regular heavy periods suggest fibroids, adenomyosis, coagulopathy or endometrial causes; irregular bleeding suggests ovulatory dysfunction; intermenstrual or postcoital bleeding directs attention to the cervix.",
            "Screen for coagulopathy (heavy since menarche, postpartum haemorrhage, dental or surgical bleeding), for thyroid symptoms, for drugs including anticoagulants and hormonal contraceptives, and for a copper IUCD.",
            "Obstetric history, contraceptive needs, desire for further children, and cervical screening history.",
          ],
        },
        {
          heading: "3. Examination",
          points: [
            "Pallor, pulse and blood pressure, BMI, thyroid, bruising and petechiae, signs of hyperandrogenism.",
            "Abdominal examination for a pelvic mass; speculum examination to see the cervix and exclude a local cause; bimanual examination for uterine size, shape, mobility and tenderness.",
          ],
        },
        {
          heading: "4. Investigations",
          points: [
            "Urine pregnancy test in every case; complete blood count with peripheral smear and serum ferritin.",
            "TSH, and a coagulation screen with von Willebrand studies if the bleeding screen is positive.",
            "Transvaginal ultrasound to assess the endometrium, fibroids, adenomyosis and adnexa; saline sonohysterography or hysteroscopy if an intracavitary lesion is suspected.",
            "Endometrial biopsy is mandatory at 42 years with persistent bleeding, and would also be indicated for failed medical therapy or unopposed oestrogen risk factors.",
            "Cervical screening as per schedule, with directed biopsy of any visible lesion.",
          ],
        },
        {
          heading: "5. Management",
          points: [
            "Correct the anaemia: oral elemental iron 100 mg daily for 3-6 months, or intravenous iron sucrose or ferric carboxymaltose given a haemoglobin of 7.8 g/dL, with transfusion only if she is symptomatic or bleeding acutely.",
            "First-line medical therapy once malignancy is excluded: LNG-IUS 52 mg if the cavity is not distorted; otherwise tranexamic acid 1 g TDS for the bleeding days with mefenamic acid 500 mg TDS.",
            "Alternatives: combined oral contraceptive after checking WHO Medical Eligibility Criteria, or norethisterone 5 mg TDS from day 5 to day 26.",
            "Treat the specific PALM lesion: hysteroscopic resection of a polyp or type 0-2 submucosal fibroid, myomectomy or hysterectomy for large symptomatic fibroids, and referral to oncology for hyperplasia with atypia or carcinoma.",
            "Reserve hysterectomy for failed medical treatment or the woman's informed choice; review at 3 months with a repeat haemoglobin and a menstrual diary.",
            "Counsel on diet, deworming, and continuing iron; register her for cervical and breast screening at the same visit.",
          ],
        },
      ],
      mustDraw: [
        "A two-column table of PALM (structural) versus COEIN (non-structural) causes with one clinical clue for each.",
        "A flow chart: reproductive-age woman with AUB - pregnancy test - history and examination - transvaginal ultrasound - biopsy if 45 or over or risk factors - medical therapy - surgery.",
      ],
      markSplit: [
        { part: "Definition and PALM-COEIN classification", marks: 3 },
        { part: "History and examination", marks: 2 },
        { part: "Investigations including indications for biopsy", marks: 2 },
        { part: "Medical management with drugs and doses", marks: 2 },
        { part: "Anaemia correction, surgery and follow-up", marks: 1 },
      ],
      keywords: ["PALM-COEIN", "heavy menstrual bleeding", "LNG-IUS", "endometrial biopsy", "tranexamic acid"],
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the evaluation of postmenopausal bleeding.",
      openingLines: [
        "Postmenopausal bleeding is any vaginal bleeding occurring after 12 months of amenorrhoea following the last menstrual period, and it must be regarded as endometrial carcinoma until proved otherwise.",
        "About 10% of women with postmenopausal bleeding have endometrial carcinoma, and the rest have atrophic vaginitis, endometrial or cervical polyps, hyperplasia, cervical carcinoma, or bleeding related to hormone therapy.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Genital tract atrophy - atrophic vaginitis and endometritis - is the commonest cause, accounting for roughly half.",
            "Endometrial carcinoma (about 10%), endometrial hyperplasia with or without atypia, endometrial and cervical polyps.",
            "Cervical carcinoma, vulval and vaginal carcinoma, and oestrogen-secreting ovarian tumours.",
            "Iatrogenic: menopausal hormone therapy, tamoxifen, anticoagulants, and phyto-oestrogen or unregulated herbal preparations.",
          ],
        },
        {
          heading: "Evaluation",
          points: [
            "History: amount and duration, relation to hormone therapy, risk factors for endometrial cancer - obesity, nulliparity, late menopause, diabetes, PCOS, tamoxifen, Lynch syndrome.",
            "General examination for pallor and obesity; abdominal examination for a mass.",
            "Speculum examination to identify a vulval, vaginal or cervical source, and to look for atrophic changes; bimanual examination for uterine size and adnexal masses.",
            "Transvaginal ultrasound: an endometrial thickness of 4 mm or less has a very high negative predictive value for carcinoma; thickness above 4 mm, a focal lesion, or fluid in the cavity requires tissue.",
            "Endometrial sampling by pipelle in the outpatient clinic; hysteroscopy with directed biopsy where pipelle fails, sampling is inadequate, or bleeding recurs despite a normal biopsy.",
            "Cervical biopsy of any visible cervical lesion, and Pap or HPV testing as per screening schedule.",
          ],
        },
        {
          heading: "Principles of management",
          points: [
            "Atrophic vaginitis: local vaginal oestrogen (estriol 0.5 mg or conjugated oestrogen cream) with a lubricant; no systemic progestogen is needed for low-dose vaginal oestrogen.",
            "Hyperplasia without atypia: progestogen therapy, preferably LNG-IUS, with repeat biopsy at 6 months.",
            "Atypical hyperplasia or carcinoma: refer to gynaecological oncology - total hysterectomy with bilateral salpingo-oophorectomy is standard.",
            "Recurrent bleeding after a normal work-up is re-investigated, never reassured.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart: postmenopausal bleeding - speculum and bimanual - transvaginal ultrasound - endometrial thickness 4 mm or less (observe, treat atrophy) versus over 4 mm (endometrial sampling, then hysteroscopy if needed).",
      ],
      markSplit: [
        { part: "Definition and the statement that it is cancer until proved otherwise", marks: 1 },
        { part: "Causes", marks: 1.5 },
        { part: "Evaluation with the 4 mm cut-off and biopsy", marks: 1.5 },
        { part: "Principles of management", marks: 1 },
      ],
      keywords: ["postmenopausal bleeding", "endometrial thickness 4 mm", "pipelle", "atrophic vaginitis", "endometrial carcinoma"],
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-t3",
      paper: "IV",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the indications for endometrial biopsy in a woman with abnormal uterine bleeding and outline the methods available.",
      openingLines: [
        "Endometrial biopsy is performed to exclude endometrial hyperplasia and carcinoma in women whose age or risk profile makes those diagnoses plausible.",
        "It is a targeted test, not a routine one - the indications are defined by age, risk factors and response to treatment.",
      ],
      answer: [
        {
          heading: "Indications",
          points: [
            "Any woman aged 45 years or more with abnormal uterine bleeding.",
            "Any postmenopausal bleeding with endometrial thickness above 4 mm, a focal lesion, or recurrent bleeding despite a thin endometrium.",
            "A woman under 45 with persistent AUB and unopposed oestrogen exposure - obesity, PCOS, chronic anovulation, oestrogen therapy without a progestogen.",
            "Failure of medical management of AUB, or recurrence after initially successful treatment.",
            "Abnormal endometrial thickening or a polyp on ultrasound at any age with symptoms.",
            "Atypical glandular cells on cervical cytology; women on tamoxifen with bleeding; and women with Lynch syndrome from age 35.",
            "Before endometrial ablation or an LNG-IUS inserted specifically for heavy bleeding in an at-risk woman.",
          ],
        },
        {
          heading: "Methods",
          points: [
            "Outpatient pipelle or Karman cannula aspiration - no anaesthesia, samples about 4% of the cavity, sensitivity above 90% for global disease but lower for focal lesions.",
            "Hysteroscopy with directed biopsy - the standard when a focal lesion is suspected, bleeding recurs, or the office sample is insufficient.",
            "Dilatation and curettage under anaesthesia - now largely superseded but still used when the cervix cannot be negotiated or bleeding must also be controlled.",
            "Endometrial sampling is contraindicated in pregnancy and in acute pelvic infection.",
          ],
        },
      ],
      markSplit: [
        { part: "Age and postmenopausal indications", marks: 2 },
        { part: "Risk-factor and treatment-failure indications", marks: 1.5 },
        { part: "Methods and contraindications", marks: 1.5 },
      ],
      keywords: ["endometrial biopsy", "pipelle", "hysteroscopy", "age 45", "unopposed oestrogen"],
    },
  ],
  mcqs: [
    {
      id: "gynaecology-abnormal-uterine-bleeding-q1",
      stem: "A 16-year-old girl presents with heavy periods since menarche at age 12. She soaks eight pads a day for six days, has had two episodes of epistaxis, and her mother had a postpartum haemorrhage. Haemoglobin is 8.4 g/dL, urine pregnancy test negative, ultrasound normal. Which investigation is most likely to establish the diagnosis?",
      options: [
        "Serum TSH and prolactin",
        "Von Willebrand factor antigen and ristocetin cofactor activity",
        "Endometrial biopsy",
        "Serum LH to FSH ratio",
        "Diagnostic hysteroscopy",
      ],
      answer: 1,
      explanation:
        "Heavy menstrual bleeding present from menarche, with mucocutaneous bleeding and a family history of postpartum haemorrhage, is the classic screen-positive picture for von Willebrand disease, which is found in about 13% of women with heavy menstrual bleeding - this is AUB-C. Thyroid and prolactin testing is reasonable when cycles are irregular, but her bleeding is regular and heavy and the personal and family bleeding history is far more discriminating. Endometrial biopsy is not indicated at 16 with no unopposed oestrogen risk and a normal scan, and an LH to FSH ratio neither diagnoses nor excludes PCOS and would not explain the epistaxis. Hysteroscopy adds nothing after a normal ultrasound in an adolescent with a systemic bleeding history.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-q2",
      stem: "A 56-year-old woman, menopausal for six years, reports two episodes of light vaginal spotting. Transvaginal ultrasound shows an endometrial thickness of 9 mm. What is the next best step?",
      options: [
        "Reassure and review in six months",
        "Start local vaginal oestrogen for presumed atrophic vaginitis",
        "Endometrial sampling",
        "Repeat the ultrasound in three months",
        "Start cyclical norethisterone",
      ],
      answer: 2,
      explanation:
        "Postmenopausal bleeding with an endometrial thickness above 4 mm requires tissue, because roughly one in ten such women has endometrial carcinoma and imaging cannot distinguish hyperplasia and carcinoma from a benign thickened endometrium. Reassurance and repeat scanning both delay a cancer diagnosis in the group where delay costs stage. Vaginal oestrogen treats atrophy but atrophy is a diagnosis of exclusion here and the endometrium is thick, not thin. Norethisterone would treat presumed hyperplasia blind and could mask a carcinoma.",
      difficulty: "easy",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-q3",
      stem: "A 34-year-old woman with regular but very heavy periods has a normal pelvic examination, a normal transvaginal ultrasound, haemoglobin 10.2 g/dL, and wants to conceive within the next year. Which is the most appropriate first-line treatment?",
      options: [
        "Levonorgestrel-releasing intrauterine system",
        "Combined oral contraceptive pill",
        "Tranexamic acid during menstruation with mefenamic acid",
        "Depot medroxyprogesterone acetate every three months",
        "Endometrial ablation",
      ],
      answer: 2,
      explanation:
        "She has AUB-E, and because she wants to conceive soon the treatment must be non-contraceptive: tranexamic acid reduces loss by 40-50% and mefenamic acid adds a further reduction and treats dysmenorrhoea, with neither affecting fertility. The LNG-IUS and the combined pill are both first-line for heavy bleeding but both prevent the pregnancy she is planning. Depot medroxyprogesterone delays return of fertility by up to 9-12 months after the last injection, which is exactly wrong here. Endometrial ablation is absolutely inappropriate in a woman who wants children, since pregnancy after ablation carries serious risk.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-q4",
      stem: "Under the FIGO PALM-COEIN system, a 38-year-old woman with a 4 cm submucosal fibroid who is also taking warfarin for a mechanical valve is best classified as:",
      options: [
        "AUB-L only, since the fibroid is the structural cause",
        "AUB-I only, since anticoagulation is the reversible cause",
        "AUB-L(SM); I, because both categories apply",
        "AUB-N, because the cause is multifactorial",
        "AUB-E, because the endometrium is the final common pathway",
      ],
      answer: 2,
      explanation:
        "PALM-COEIN is deliberately designed so that a woman may carry more than one category simultaneously, and the notation records each - here a submucosal leiomyoma and an iatrogenic anticoagulant contribution. Attributing the bleeding to the fibroid alone risks operating without addressing anticoagulation, and attributing it to warfarin alone risks leaving a resectable submucosal fibroid untreated. AUB-N is reserved for rare entities such as arteriovenous malformation and caesarean scar defect, and AUB-E is a diagnosis of exclusion applied only when no structural or systemic cause is found.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-q5",
      stem: "A 47-year-old obese woman with type 2 diabetes has had irregular, sometimes prolonged bleeding for a year. Ultrasound shows a bulky uterus with an endometrial thickness of 13 mm and no fibroids. What must be done before starting any hormonal treatment?",
      options: [
        "Serum CA-125",
        "Endometrial biopsy",
        "Hysterosalpingography",
        "Serum FSH to confirm perimenopause",
        "Diagnostic laparoscopy",
      ],
      answer: 1,
      explanation:
        "She is over 45 with abnormal uterine bleeding and carries the classic unopposed oestrogen risk profile of obesity, diabetes and chronic anovulation, so endometrial sampling is mandatory before any hormonal treatment that could mask hyperplasia or carcinoma. CA-125 is neither sensitive nor specific for endometrial disease and is used in ovarian mass assessment. Hysterosalpingography assesses tubal patency in infertility and has no role here. An FSH level does not change management in a bleeding perimenopausal woman, and laparoscopy examines the peritoneum, not the endometrium that needs sampling.",
      difficulty: "easy",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-q6",
      stem: "A 29-year-old woman is brought with heavy vaginal bleeding for four days, pulse 118/min, BP 88/58 mmHg, haemoglobin 6.1 g/dL, urine pregnancy test negative. After intravenous fluids and cross-matched blood, which is the most appropriate drug to control the bleeding?",
      options: [
        "Oral norethisterone 5 mg once daily",
        "Medroxyprogesterone acetate 20 mg PO three times a day plus tranexamic acid 1 g three times a day",
        "Combined oral contraceptive one tablet daily",
        "Intramuscular leuprolide 3.75 mg",
        "Immediate hysterectomy",
      ],
      answer: 1,
      explanation:
        "Acute heavy AUB needs a high-dose progestogen or high-dose combined pill regimen plus an antifibrinolytic, and medroxyprogesterone 20 mg three times daily with tranexamic acid 1 g three times daily is a standard, available and effective combination. A single daily norethisterone tablet or one combined pill a day are maintenance doses and are far too weak to arrest acute bleeding. A GnRH agonist causes an initial flare with worsening bleeding and takes weeks to act, so it is a preoperative agent, not an acute one. Hysterectomy in an unresuscitated 29-year-old before medical therapy has been tried is indefensible.",
      difficulty: "hard",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-q7",
      stem: "Which statement about FIGO 2018 menstrual terminology is correct?",
      options: [
        "Normal cycle frequency is 21 to 35 days",
        "Normal menstrual duration is up to 10 days",
        "Heavy menstrual bleeding is defined as measured blood loss above 80 mL",
        "Normal cycle frequency is 24 to 38 days and normal duration is 8 days or less",
        "Dysfunctional uterine bleeding remains the preferred term for AUB with no structural cause",
      ],
      answer: 3,
      explanation:
        "FIGO 2018 sets normal frequency at 24-38 days, normal duration at 8 days or less, and regularity as a cycle-to-cycle variation within 7-9 days. The older 21-35 day and 7-day figures were replaced, and the 80 mL research threshold was abandoned in favour of a patient-centred definition of heavy menstrual bleeding based on impact on quality of life, because no clinic can measure millilitres. Dysfunctional uterine bleeding is specifically among the terms FIGO asks clinicians to abandon, replaced by AUB-O for ovulatory dysfunction and AUB-E for primary endometrial disorders.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "gynaecology-abnormal-uterine-bleeding-c1",
      front: "Expand PALM-COEIN.",
      back: "Polyp, Adenomyosis, Leiomyoma (SM submucosal / O other), Malignancy and hyperplasia; Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not otherwise classified.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c2",
      front: "FIGO 2018 normal menstrual parameters.",
      back: "Frequency 24-38 days, regularity within 7-9 days variation, duration 8 days or less, volume as judged by the woman.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c3",
      front: "Which terms does FIGO 2018 ask you to abandon?",
      back: "Menorrhagia, metrorrhagia, menometrorrhagia, oligomenorrhoea, polymenorrhoea and dysfunctional uterine bleeding.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c4",
      front: "Indications for endometrial biopsy in AUB.",
      back: "Age 45 or over; under 45 with persistent AUB plus unopposed oestrogen risk (obesity, PCOS, anovulation); failed medical therapy; postmenopausal bleeding with endometrium over 4 mm; Lynch syndrome.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c5",
      front: "Endometrial thickness cut-off in postmenopausal bleeding.",
      back: "4 mm or less makes carcinoma very unlikely; above 4 mm mandates endometrial sampling.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c6",
      front: "First-line medical treatment for heavy menstrual bleeding.",
      back: "LNG-IUS 52 mg (20 microgram/24 h), reducing measured loss by 70-95%, provided the cavity is not distorted.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c7",
      front: "Tranexamic acid dose and effect in heavy menstrual bleeding.",
      back: "1 g PO three to four times a day for the first 3-5 bleeding days; reduces loss by 40-50%. Avoid in active thromboembolic disease.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c8",
      front: "Correct norethisterone regimen for ovulatory heavy menstrual bleeding.",
      back: "5 mg PO three times a day from day 5 to day 26; the luteal-phase-only (day 19-26) regimen does not work.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c9",
      front: "What proportion of women with heavy menstrual bleeding have an inherited bleeding disorder?",
      back: "About 13%, most commonly von Willebrand disease - suspect it when bleeding has been heavy since menarche.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c10",
      front: "Risk of endometrial carcinoma in postmenopausal bleeding.",
      back: "About 10%; the commonest cause overall is genital tract atrophy, but cancer must be excluded first.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c11",
      front: "Which fibroids reliably cause heavy menstrual bleeding?",
      back: "Submucosal ones - FIGO types 0, 1 and 2 - which is why the L category is split into L-SM and L-O.",
    },
    {
      id: "gynaecology-abnormal-uterine-bleeding-c12",
      front: "First test in any reproductive-age woman with abnormal bleeding.",
      back: "Urine pregnancy test - to exclude miscarriage, ectopic and gestational trophoblastic disease.",
    },
  ],
  references: [
    "FIGO Systems 1 and 2 for abnormal uterine bleeding in the reproductive years, Munro et al, International Journal of Gynecology and Obstetrics, 2018 revision",
    "NICE NG88 Heavy Menstrual Bleeding: Assessment and Management, 2018 (updated 2021)",
    "FOGSI Good Clinical Practice Recommendations on Abnormal Uterine Bleeding, 2017",
    "Shaw's Textbook of Gynaecology, 18th edition, 2024 - abnormal uterine bleeding",
    "Jeffcoate's Principles of Gynaecology, 9th edition, 2020",
  ],
});

topics.push({
  id: "gynaecology-contraception",
  title: "Contraception: the Indian method mix and WHO Medical Eligibility Criteria",
  oneLiner:
    "Contraceptive choice in Indian family practice is a shared decision between the woman, her partner and the physician, made from the national basket of condoms, combined and progestogen-only pills, weekly centchroman, the copper IUCD, the LNG-IUS, injectable DMPA, emergency contraception and sterilisation, with safety governed by the WHO Medical Eligibility Criteria categories 1 to 4.",
  frequency: "core",
  keywords: [
    "family planning",
    "WHO MEC",
    "medical eligibility criteria",
    "combined oral contraceptive",
    "Mala-N",
    "Chhaya",
    "centchroman",
    "ormeloxifene",
    "Antara",
    "DMPA",
    "Cu-IUCD 380A",
    "PPIUCD",
    "LNG-IUS",
    "emergency contraception",
    "levonorgestrel 1.5 mg",
    "no-scalpel vasectomy",
    "minilap tubectomy",
    "missed pills",
    "lactational amenorrhoea method",
    "Mission Parivar Vikas",
  ],
  sections: [
    {
      heading: "The national basket and how to open the conversation",
      points: [
        "The Government of India family planning programme offers, free at public facilities: **condoms (Nirodh), combined oral pills (Mala-N), the weekly non-hormonal pill Chhaya (centchroman/ormeloxifene), emergency contraceptive pills, Cu-IUCD 380A and 375, the postpartum IUCD, injectable MPA (Antara), and male and female sterilisation**; the LNG-IUS and implants are available in the private sector.",
        "Open with the woman's own plan, not the method: does she want to space or to limit, when does she want the next child, is she breastfeeding, and what has she or her friends had trouble with before.",
        "**Effectiveness is quoted two ways** and examiners test the difference: perfect-use failure and typical-use failure per 100 woman-years. Condoms fail 2 per 100 with perfect use but 13 with typical use; the pill 0.3 versus 7; DMPA 0.2 versus 4; the copper IUCD 0.6 versus 0.8; sterilisation and the LNG-IUS under 0.5.",
        "**Long-acting reversible contraception (LARC) - IUCD, LNG-IUS, implant, and by convention DMPA - is the most effective reversible group** precisely because typical use and perfect use are nearly identical; there is nothing to forget.",
        "NFHS-5 (2019-21): modern contraceptive prevalence in India is 56.5%, but **female sterilisation alone accounts for 37.9%**, spacing methods are underused, and unmet need for family planning is 9.4%. Any programme answer should say the aim is to shift the method mix towards spacing and towards male participation.",
        "Counsel on **dual protection**: no hormonal method or IUCD protects against HIV or other sexually transmitted infections, so a condom is added whenever there is any infection risk.",
      ],
    },
    {
      heading: "WHO Medical Eligibility Criteria - the four categories",
      points: [
        "**Category 1: no restriction on use** - the condition does not affect eligibility at all.",
        "**Category 2: advantages generally outweigh theoretical or proven risks** - the method can be used, generally with routine follow-up.",
        "**Category 3: theoretical or proven risks usually outweigh the advantages** - the method is not usually recommended unless more appropriate methods are unavailable or unacceptable, and it then needs careful clinical judgement and close follow-up.",
        "**Category 4: unacceptable health risk** - the method must not be used.",
        "Where clinical judgement is limited, as at a subcentre, the four categories collapse to a **two-category rule: 1 and 2 mean use the method, 3 and 4 mean do not use it**. Quote both the four-category and the simplified version.",
        "Categories are assigned separately for **initiation (I) and continuation (C)** of a method - the same condition may be Category 4 to start and Category 2 to continue, as with an IUCD in a woman who develops pelvic inflammatory disease.",
        "The criteria are applied by asking the WHO checklist questions and, in a healthy woman with no answers of concern, **no laboratory test and no pelvic examination is required before starting the pill, condoms or injectables** - insisting on tests is a barrier, not good practice.",
      ],
    },
    {
      heading: "Combined hormonal contraception: eligibility, initiation and missed pills",
      points: [
        "Mala-N contains levonorgestrel 0.15 mg with ethinylestradiol 0.03 mg; the pack of 28 has 21 hormone tablets and 7 ferrous fumarate tablets, taken one daily without a break, starting on **day 1 to day 5 of the menstrual cycle**.",
        "**Quick start** at any point in the cycle is acceptable once pregnancy is reasonably excluded, with condoms for the first 7 days. Starting on day 1-5 needs no back-up.",
        "**Category 4 for combined hormonal contraception:** migraine with aura at any age; age 35 or more and smoking 15 or more cigarettes a day; systolic BP 160 mmHg or more or diastolic 100 mmHg or more; current or past deep vein thrombosis or pulmonary embolism; known thrombogenic mutations; major surgery with prolonged immobilisation; current breast cancer; ischaemic heart disease or stroke; complicated valvular disease; severe cirrhosis or liver tumour; systemic lupus with positive antiphospholipid antibodies; breastfeeding under 6 weeks postpartum.",
        "**Category 3 for combined hormonal contraception:** breastfeeding from 6 weeks to under 6 months; non-breastfeeding under 21 days postpartum without other thrombosis risk factors; hypertension 140-159/90-99 mmHg; age 35 or more smoking fewer than 15 cigarettes a day; past breast cancer with 5 years disease-free; gallbladder disease; and rifampicin or most anticonvulsants (phenytoin, carbamazepine, barbiturates, lamotrigine).",
        "**Missed pill rule (30-35 microgram pills):** one missed pill, that is less than 48 hours since the last pill, means take it as soon as remembered, continue the pack, and no extra protection is needed.",
        "**Two or more missed pills (48 hours or more):** take the most recent missed pill at once, discard the others, continue the pack, and **use condoms or abstain for 7 days**. If the misses fall in week 3, finish the hormone tablets and skip the placebo or iron week; if they fall in week 1 with unprotected sex in the preceding 5 days, offer emergency contraception.",
        "Manage nausea, breakthrough bleeding and breast tenderness by reassurance for the first three cycles; **vomiting within 2 hours or severe diarrhoea counts as a missed pill**. Warn about the ACHES symptoms - abdominal pain, chest pain, headache, eye problems, severe leg pain - which mean stop the pill and attend the same day.",
      ],
    },
    {
      heading: "Progestogen-only methods: POP, DMPA and centchroman",
      points: [
        "**Progestogen-only pills** are taken continuously with no pill-free interval and are the pill of choice while breastfeeding (MEC 1 from 6 weeks, 2 earlier), in migraine with aura (MEC 2), and where oestrogen is contraindicated. A traditional levonorgestrel or norethisterone POP is late if **more than 3 hours overdue** (12 hours for desogestrel and drospirenone pills): take it at once and use condoms for 48 hours.",
        "**Injectable DMPA (Antara) 150 mg intramuscular into the deltoid or gluteus every 3 months**, with a grace period of 2 weeks early or 4 weeks late; the subcutaneous 104 mg formulation is an alternative. First injection is given within day 1-7 of the cycle, immediately after abortion, or at 6 weeks postpartum for a breastfeeding woman under the Indian programme.",
        "Counsel every DMPA user before the first injection about **menstrual change - irregular spotting early, and amenorrhoea in about half by one year** - because unwarned bleeding change is the commonest reason for discontinuation. Also mention weight gain of 1-2 kg a year and a **delay in return of fertility of up to 9-12 months** after the last injection.",
        "DMPA causes a reversible fall in bone mineral density; it is **MEC 2 under age 18 and over age 45** on that account, but is not restricted in duration for most women. Current breast cancer is MEC 4; unexplained vaginal bleeding, severe hypertension and vascular disease are MEC 3.",
        "**Centchroman (ormeloxifene, Chhaya) 30 mg** is India's own non-hormonal, non-steroidal selective oestrogen receptor modulator taken **twice a week for the first 12 weeks and then once a week on the same days**; it is oestrogen-free, safe in breastfeeding after 6 weeks, and causes delayed cycles or amenorrhoea in some users.",
        "Centchroman is avoided in polycystic ovary syndrome, cervical hyperplasia, chronic liver or kidney disease, and recent jaundice or tuberculosis; it is a genuinely useful option for a woman who cannot take oestrogen and refuses an IUCD.",
        "The **subdermal etonogestrel implant** (3 years) is highly effective and available privately in India; it is not yet part of the national programme basket, which is a fair point to make in a programme answer.",
      ],
    },
    {
      heading: "Intrauterine devices and postpartum insertion",
      points: [
        "**Cu-IUCD 380A lasts 10 years and Cu-IUCD 375 lasts 5 years**; both act mainly by a sterile inflammatory and spermicidal intrauterine reaction that impairs sperm function and fertilisation, not by causing abortion - say this explicitly when counselling.",
        "**LNG-IUS 52 mg** releases 20 microgram levonorgestrel daily for 5-8 years, reduces menstrual blood loss by 70-95%, and is simultaneously contraception, treatment for heavy menstrual bleeding and dysmenorrhoea, and endometrial protection for a woman on oestrogen therapy.",
        "**Timing:** any time in the cycle once pregnancy is excluded; within 12 minutes of placental delivery or up to 48 hours postpartum (PPIUCD); immediately after an uncomplicated first- or second-trimester abortion (PAIUCD); or from 6 weeks postpartum. **Insertion between 48 hours and 4 weeks postpartum is MEC 3** because of expulsion and perforation risk.",
        "**Category 4 for IUCD insertion:** pregnancy, puerperal sepsis, immediate post-septic abortion, unexplained vaginal bleeding before evaluation, gestational trophoblastic disease with persistently raised hCG, cervical or endometrial cancer, current pelvic inflammatory disease or purulent cervicitis or documented gonococcal or chlamydial infection, known pelvic tuberculosis, and a distorted uterine cavity. Current breast cancer is additionally Category 4 for the LNG-IUS but Category 1 for the copper device.",
        "Complications to counsel and to manage: **expulsion 3-5% in the first year (highest in the first 3 months)**, heavier and more painful periods with the copper device, missing threads (exclude pregnancy and expulsion, then ultrasound and, if not seen, an abdominal radiograph for a perforated device), and perforation in about 1 per 1000 insertions.",
        "If pelvic inflammatory disease occurs, **treat the infection with the device in place** and remove it only if there is no improvement at 48-72 hours; if pregnancy occurs with the device in situ and threads are visible, remove it to reduce miscarriage and preterm birth.",
        "There is **no infection risk beyond the first 20 days after insertion**; a woman in a mutually monogamous relationship does not need prophylactic antibiotics, and routine screening for infection is not required before insertion in a low-risk woman.",
      ],
    },
    {
      heading: "Emergency contraception, postpartum and post-abortion contraception",
      points: [
        "**Levonorgestrel 1.5 mg as a single dose is the standard emergency pill in India, ideally within 72 hours** and with declining efficacy up to 120 hours; it works mainly by delaying or inhibiting ovulation and does not disrupt an established pregnancy.",
        "**The copper IUCD inserted within 5 days of unprotected intercourse is the most effective emergency method**, with a failure rate under 0.1%, and it continues as ongoing contraception for 10 years - always offer it, especially to a woman who also wants long-term cover.",
        "Emergency contraception has **no absolute medical contraindication** other than known pregnancy, is not teratogenic if a pregnancy is already present, and may be used repeatedly if necessary, though it is less effective than regular methods. Ulipristal acetate 30 mg is an alternative where available.",
        "Start a regular method immediately after emergency contraception: hormonal methods can be quick-started with 7 days of condoms after levonorgestrel; after ulipristal, wait 5 days before starting a progestogen.",
        "**Postpartum:** a fully breastfeeding, amenorrhoeic woman in the first 6 months has the lactational amenorrhoea method with about 2% failure, but all three conditions must hold. Progestogen-only methods and the IUCD can be started immediately; combined hormonal contraception waits until 6 months if she is breastfeeding, and until 21 days if she is not and has no thrombosis risk factors.",
        "**Post-abortion:** fertility can return within 2 weeks, so contraception is started on the day of the procedure - the IUCD, injectable, pill or implant may all be begun immediately after an uncomplicated first-trimester abortion. Post-abortion contraception counselling is a mandated component of the MTP Act services.",
        "The **Mission Parivar Vikas** scheme in high-fertility districts adds Antara and Chhaya, the Saas-Bahu Sammelan, Nayi Pehel kits and ASHA-delivered doorstep supply of contraceptives - useful specifics for a programme question.",
      ],
    },
    {
      heading: "Sterilisation: eligibility, technique and counselling",
      points: [
        "**Government of India eligibility (Standards for Female and Male Sterilisation, 2006):** the client must be ever-married, the woman aged 22-49 years, with at least one child over one year of age unless there is a medical indication, and must give written informed consent. **The spouse's consent is not required**, and consent may be withdrawn at any time before the procedure.",
        "A person who is mentally ill or unable to give informed consent cannot be sterilised without following the specific legal safeguards; sterilisation must never be a condition for receiving any other service or benefit.",
        "**Female sterilisation** is by minilaparotomy tubal ligation (modified Pomeroy) or laparoscopic tubal occlusion with a Falope ring or clip; interval, postpartum (within 7 days, ideally within 48 hours) and concurrent with caesarean section are all offered. Failure is about **0.5 per 100 women over 10 years**, and about a third of failures are ectopic.",
        "**No-scalpel vasectomy** is the safer, cheaper, quicker procedure with a failure rate of about 0.15%, done under local anaesthesia through a single midline puncture; it should be actively offered, as male sterilisation is under 1% of the Indian method mix.",
        "**A vasectomy is not effective immediately:** another method must be used for 3 months or 20 ejaculations, and azoospermia should be confirmed on semen analysis at 3 months. This is the single most commonly missed counselling point.",
        "Counsel that sterilisation is **permanent and must be regarded as irreversible**, that reversal is expensive with limited success, that it does not affect libido, potency, menstruation or the ability to work, and that it offers no protection against sexually transmitted infection.",
        "Compensation is payable under the family planning indemnity scheme for failure, complication or death following a sterilisation done in a public facility; the operating surgeon and facility must be certified and the client must be given the sterilisation certificate and a follow-up date.",
      ],
    },
  ],
  tables: [
    {
      heading: "WHO Medical Eligibility Criteria categories",
      columns: ["Category", "Meaning", "What to do in a clinic with limited judgement"],
      rows: [
        ["1", "No restriction on the use of the method", "Use the method"],
        ["2", "Advantages generally outweigh theoretical or proven risks", "Use the method"],
        ["3", "Risks usually outweigh the advantages", "Do not use unless nothing else is available or acceptable, with close follow-up"],
        ["4", "Unacceptable health risk", "Do not use the method"],
      ],
    },
    {
      heading: "Selected WHO MEC categories for combined hormonal contraception",
      columns: ["Condition", "Category", "Reason"],
      rows: [
        ["Migraine with aura, any age", "4", "Sharp rise in ischaemic stroke risk"],
        ["Age 35 or more, smoking 15 or more cigarettes a day", "4", "Arterial disease risk multiplies"],
        ["Age 35 or more, smoking fewer than 15 a day", "3", "Same risk, smaller magnitude"],
        ["BP 160/100 mmHg or more", "4", "Stroke and myocardial infarction risk"],
        ["BP 140-159/90-99 mmHg", "3", "Elevated but lesser arterial risk"],
        ["Current or past venous thromboembolism", "4", "Oestrogen is prothrombotic"],
        ["Breastfeeding under 6 weeks postpartum", "4", "Thrombosis risk plus effect on milk"],
        ["Breastfeeding 6 weeks to under 6 months", "3", "Possible effect on milk volume"],
        ["Current breast cancer", "4", "Hormone-responsive tumour"],
        ["Diabetes with nephropathy, retinopathy or neuropathy", "3 or 4", "Established vascular disease"],
        ["Rifampicin or enzyme-inducing anticonvulsants", "3", "Reduced contraceptive efficacy"],
        ["Uncomplicated obesity (BMI 30 or more)", "2", "Small absolute rise in VTE risk"],
      ],
    },
    {
      heading: "Indian programme methods: dose, duration and typical failure",
      columns: ["Method", "Regimen", "Duration of action", "Typical-use failure per 100 woman-years"],
      rows: [
        ["Male condom (Nirodh)", "One per act", "Single use", "13"],
        ["Mala-N (COC)", "One tablet daily, 21 hormone + 7 iron", "Daily", "7"],
        ["Chhaya (centchroman 30 mg)", "Twice weekly for 12 weeks, then weekly", "Weekly", "About 2 in programme data"],
        ["Antara (DMPA 150 mg IM)", "Every 3 months, grace 2 weeks early to 4 weeks late", "3 months", "4"],
        ["Cu-IUCD 380A", "Single insertion", "10 years", "0.8"],
        ["Cu-IUCD 375", "Single insertion", "5 years", "0.8"],
        ["LNG-IUS 52 mg", "Single insertion", "5-8 years", "0.2"],
        ["Emergency pill (levonorgestrel 1.5 mg)", "Single dose within 72-120 h", "That act only", "Not for regular use"],
        ["Minilap or laparoscopic tubal occlusion", "Single procedure", "Permanent", "0.5 over 10 years"],
        ["No-scalpel vasectomy", "Single procedure, azoospermia at 3 months", "Permanent", "0.15"],
      ],
    },
  ],
  redFlags: [
    "A pill user with sudden severe headache, unilateral weakness, visual loss or new aura - stop the combined pill immediately and assess for stroke.",
    "Calf pain and swelling, pleuritic chest pain or breathlessness in a woman on combined hormonal contraception - suspect venous thromboembolism and refer the same day.",
    "Severe lower abdominal pain with amenorrhoea in a woman with an IUCD or after sterilisation - ectopic pregnancy until proved otherwise.",
    "Fever, offensive discharge and pelvic tenderness within 20 days of IUCD insertion - pelvic inflammatory disease; treat at once and remove the device only if there is no response in 48-72 hours.",
    "Missing IUCD threads with a positive pregnancy test - exclude ectopic pregnancy and locate the device with ultrasound before anything else.",
    "Continuous or unexplained vaginal bleeding before any evaluation - IUCD insertion is WHO MEC Category 4 until the cause is known.",
    "Jaundice, right upper quadrant pain or a palpable liver mass in a long-term pill user - stop the pill and image for hepatic adenoma or cholestasis.",
  ],
  pearls: [
    "Always state WHO MEC categories as 1 no restriction, 2 advantages outweigh risks, 3 risks usually outweigh advantages, 4 unacceptable risk - and add that at peripheral level 1 and 2 mean use, 3 and 4 mean do not use.",
    "Migraine with aura is Category 4 for the combined pill but Category 2 for progestogen-only pills and Category 1 for the copper IUCD - the classic single-best-answer switch.",
    "The most effective emergency contraception is not a pill: it is a copper IUCD inserted within 5 days, and it doubles as 10 years of contraception.",
    "A woman does not need a pelvic examination, a Pap smear or any blood test before starting the pill, condoms or an injectable - demanding them is a barrier to access.",
    "Vasectomy needs 3 months or 20 ejaculations plus a confirmatory semen analysis; failing to say this loses a mark and, in real life, causes pregnancies.",
    "Spouse consent is not required for sterilisation in India; the client must be ever-married, the woman 22-49 years, with at least one child over one year.",
    "Warn every DMPA user about irregular spotting first and amenorrhoea later, and about the 9-12 month delay in return of fertility - it is the difference between a satisfied user and a defaulter.",
    "Chhaya (centchroman) is the answer when a breastfeeding woman past 6 weeks cannot take oestrogen, refuses an IUCD and wants a pill she can remember weekly.",
  ],
  theory: [
    {
      id: "gynaecology-contraception-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Describe the WHO Medical Eligibility Criteria for contraceptive use, and apply them in counselling a 34-year-old woman with hypertension who has just delivered her second child and is breastfeeding.",
      openingLines: [
        "The WHO Medical Eligibility Criteria for Contraceptive Use, now in its fifth edition (2015) with a 2024 update, grades the safety of every contraceptive method against every relevant medical condition on a scale of 1 to 4.",
        "The purpose is to remove unnecessary medical barriers to contraception while identifying the small number of genuine contraindications, so that a woman is offered the widest safe choice rather than the method the clinic happens to prefer.",
      ],
      answer: [
        {
          heading: "1. The four categories",
          points: [
            "Category 1 - no restriction on the use of the method.",
            "Category 2 - the advantages generally outweigh the theoretical or proven risks; use with routine follow-up.",
            "Category 3 - the risks usually outweigh the advantages; not usually recommended unless more appropriate methods are unavailable or unacceptable, and then only with careful clinical judgement and close follow-up.",
            "Category 4 - an unacceptable health risk; the method must not be used.",
            "Where clinical judgement is limited, categories 1 and 2 mean use the method and categories 3 and 4 mean do not use it.",
            "Categories are given separately for initiation and continuation, since a condition arising during use may not require the method to be stopped.",
          ],
        },
        {
          heading: "2. How the criteria are applied in practice",
          points: [
            "A short checklist of history questions is enough for most women; no routine pelvic examination, cervical cytology, blood test or breast examination is required before starting pills, condoms or injectables.",
            "Blood pressure measurement should be done before starting combined hormonal contraception, and is the one measurement that genuinely changes the category.",
            "The criteria are combined with the WHO Selected Practice Recommendations, which give the practical rules on when to start, what to do about missed pills, and how to switch methods.",
          ],
        },
        {
          heading: "3. Applying them to this woman",
          points: [
            "Two conditions are relevant: hypertension and breastfeeding in the postpartum period.",
            "Combined hormonal contraception: hypertension of 140-159/90-99 mmHg is Category 3 and 160/100 mmHg or more is Category 4; breastfeeding under 6 weeks is Category 4 and 6 weeks to 6 months is Category 3. Combined pills are therefore not offered to her.",
            "Progestogen-only pill and the etonogestrel implant: Category 1 for hypertension of any severity and Category 1 or 2 while breastfeeding - both are safe and can be started immediately.",
            "DMPA: Category 1 while breastfeeding after 6 weeks under the Indian programme, but Category 3 if her blood pressure is 160/100 mmHg or more or there is vascular disease, so it depends on her actual reading.",
            "Copper IUCD and LNG-IUS: Category 1 for hypertension and Category 1 for breastfeeding; insertion within 48 hours of delivery or after 4 weeks is appropriate, while 48 hours to 4 weeks is Category 3.",
            "Lactational amenorrhoea method may be used as an adjunct only if she is exclusively breastfeeding, amenorrhoeic and under 6 months postpartum, and it must be supplemented once any condition fails.",
          ],
        },
        {
          heading: "4. The counselling itself",
          points: [
            "Establish whether she wants to space or to limit, and the interval she wants before the next child; the recommended birth-to-pregnancy interval is at least 24 months.",
            "Offer the full range for which she is eligible, describe effectiveness in typical use, side effects, and how to stop; the copper IUCD, LNG-IUS, implant and progestogen-only pill are all open to her.",
            "Add condoms for dual protection if there is any risk of sexually transmitted infection.",
            "Control the hypertension in parallel, review the blood pressure at follow-up, and record the method and review date in the family planning register.",
          ],
        },
      ],
      mustDraw: [
        "A four-row table of MEC categories 1-4 with their meaning and the simplified use / do-not-use rule.",
        "A grid of methods (combined pill, POP, DMPA, Cu-IUCD, LNG-IUS) against the two conditions (hypertension, breastfeeding postpartum) with the category in each cell.",
      ],
      markSplit: [
        { part: "The four categories defined correctly", marks: 3 },
        { part: "Simplified two-category rule and initiation versus continuation", marks: 1 },
        { part: "Application to hypertension and breastfeeding, method by method", marks: 4 },
        { part: "Counselling, dual protection and follow-up", marks: 2 },
      ],
      keywords: ["WHO MEC", "category 3", "category 4", "postpartum contraception", "breastfeeding", "hypertension"],
    },
    {
      id: "gynaecology-contraception-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the intrauterine contraceptive device: types, mechanism, timing of insertion, contraindications and complications.",
      openingLines: [
        "The intrauterine contraceptive device is a long-acting reversible method inserted into the uterine cavity, offering 5-10 years of protection with a typical-use failure of under 1 per 100 women per year.",
        "The national programme supplies the Cu-IUCD 380A for 10 years and the Cu-IUCD 375 for 5 years; the levonorgestrel-releasing intrauterine system is available in the private sector.",
      ],
      answer: [
        {
          heading: "Types and mechanism",
          points: [
            "Copper devices: Cu-IUCD 380A (10 years) and Cu-IUCD 375 (5 years); copper ions create a sterile inflammatory reaction that is spermicidal and impairs sperm transport and fertilisation.",
            "LNG-IUS 52 mg releasing 20 microgram/day for 5-8 years: thickens cervical mucus, thins the endometrium and partially suppresses ovulation; it reduces menstrual loss by 70-95%.",
            "Neither device acts principally by preventing implantation of a formed embryo - this must be stated clearly when counselling.",
          ],
        },
        {
          heading: "Timing of insertion",
          points: [
            "Any day of the cycle once pregnancy is reasonably excluded; menstrual insertion is convenient but not mandatory.",
            "Postpartum: within 10 minutes of placental delivery, or up to 48 hours (PPIUCD), or from 4-6 weeks onward. Insertion between 48 hours and 4 weeks is WHO MEC Category 3.",
            "Post-abortion: immediately after an uncomplicated first- or second-trimester abortion; not after septic abortion.",
            "As emergency contraception within 5 days of unprotected intercourse - the most effective method available.",
          ],
        },
        {
          heading: "Contraindications (WHO MEC Category 4 for initiation)",
          points: [
            "Pregnancy, puerperal sepsis, immediate post-septic abortion.",
            "Unexplained vaginal bleeding before evaluation, gestational trophoblastic disease with persistently raised hCG.",
            "Current pelvic inflammatory disease, purulent cervicitis, gonococcal or chlamydial infection, known pelvic tuberculosis.",
            "Cervical or endometrial carcinoma, and a distorted uterine cavity from fibroids or a Mullerian anomaly.",
            "Current breast cancer is Category 4 for the LNG-IUS specifically, and Category 1 for the copper device.",
          ],
        },
        {
          heading: "Complications and their management",
          points: [
            "Pain and bleeding at insertion, vasovagal syncope - manage with reassurance, an NSAID and correct technique.",
            "Heavier and more painful periods with copper devices; give tranexamic acid and mefenamic acid or switch to the LNG-IUS.",
            "Expulsion in 3-5% in the first year, most in the first 3 months - teach the woman to feel for the threads after each period.",
            "Perforation in about 1 per 1000 insertions - suspect with lost threads and a device not seen in the uterus on ultrasound; confirm with a plain radiograph and remove laparoscopically.",
            "Infection risk is confined to the first 20 days; treat pelvic infection with the device in place and remove only if there is no improvement at 48-72 hours.",
            "Pregnancy with the device in situ: exclude ectopic pregnancy, and remove the device if threads are visible.",
          ],
        },
      ],
      mustDraw: ["A labelled line diagram of a Cu-IUCD 380A in the uterine cavity with the threads at the external os."],
      markSplit: [
        { part: "Types and mechanism of action", marks: 1 },
        { part: "Timing of insertion including PPIUCD and emergency use", marks: 1.5 },
        { part: "Category 4 contraindications", marks: 1.5 },
        { part: "Complications and their management", marks: 1 },
      ],
      keywords: ["Cu-IUCD 380A", "PPIUCD", "LNG-IUS", "expulsion", "MEC category 4"],
    },
    {
      id: "gynaecology-contraception-t3",
      paper: "IV",
      kind: "chart-flow",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "A woman on combined oral contraceptive pills reports that she has missed three tablets in the third week of her pack. Draw and explain the missed-pill algorithm, and describe the role of emergency contraception.",
      openingLines: [
        "A pill is counted as missed when it is more than 24 hours late, that is when 48 hours or more have elapsed since the last tablet was taken; vomiting within 2 hours of a tablet or severe diarrhoea counts as a missed pill.",
        "The risk of ovulation depends on how long the hormone-free interval is extended, which is why the rules differ by the week in which the pills were missed.",
      ],
      answer: [
        {
          heading: "One missed pill (less than 48 hours since the last tablet)",
          points: [
            "Take the missed tablet as soon as it is remembered, even if that means two tablets on one day.",
            "Continue the rest of the pack at the usual time; no additional contraception and no emergency contraception are needed.",
          ],
        },
        {
          heading: "Two or more missed pills (48 hours or more)",
          points: [
            "Take the most recent missed tablet immediately, discard the earlier missed tablets, and continue the pack at the usual time.",
            "Use condoms or abstain from intercourse for the next 7 consecutive days.",
            "If the pills were missed in week 1 and there was unprotected intercourse in the preceding 5 days, offer emergency contraception.",
            "If the pills were missed in week 3, as in this woman, finish the hormone tablets in the current pack and start a new pack the next day, omitting the placebo or iron tablets altogether so that the hormone-free interval is not extended.",
            "If she cannot start a new pack immediately, use condoms for 7 days and consider emergency contraception if there has been unprotected intercourse.",
          ],
        },
        {
          heading: "Emergency contraception",
          points: [
            "Levonorgestrel 1.5 mg as a single dose, ideally within 72 hours and up to 120 hours, acting by delaying or inhibiting ovulation.",
            "A copper IUCD inserted within 5 days is the most effective option and provides ongoing contraception.",
            "Ulipristal acetate 30 mg is an alternative where available; after ulipristal, hormonal contraception is restarted after 5 days.",
            "There is no absolute contraindication apart from a known pregnancy, and it is not teratogenic; it is not an abortifacient and does not disrupt an implanted pregnancy.",
          ],
        },
        {
          heading: "Follow-up",
          points: [
            "Do a pregnancy test if the withdrawal bleed is missed or is unusually light.",
            "Review adherence and offer a long-acting method - the LNG-IUS, copper IUCD, implant or injectable - to a woman who misses pills repeatedly.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart: pills missed - fewer than 2 (take one, continue, no back-up) versus 2 or more (take latest, continue, condoms 7 days) - then branch by week 1 (consider emergency contraception), week 2 (nothing extra), week 3 (skip the hormone-free interval).",
      ],
      markSplit: [
        { part: "Definition of a missed pill", marks: 0.5 },
        { part: "One missed pill rule", marks: 1 },
        { part: "Two or more missed pills including the week-specific rules", marks: 2 },
        { part: "Emergency contraception options and follow-up", marks: 1.5 },
      ],
      keywords: ["missed pills", "hormone-free interval", "levonorgestrel 1.5 mg", "copper IUCD emergency", "7-day rule"],
    },
  ],
  mcqs: [
    {
      id: "gynaecology-contraception-q1",
      stem: "A 37-year-old woman with migraine with aura requests contraception. She is otherwise healthy, blood pressure 118/76 mmHg, and does not smoke. Which method is WHO MEC Category 4 for her?",
      options: [
        "Copper intrauterine device",
        "Combined oral contraceptive pill",
        "Progestogen-only pill",
        "Depot medroxyprogesterone acetate",
        "Levonorgestrel intrauterine system",
      ],
      answer: 1,
      explanation:
        "Migraine with aura is WHO MEC Category 4 for all combined hormonal contraception at any age, because the combination of aura and exogenous oestrogen multiplies the risk of ischaemic stroke. The progestogen-only pill and DMPA are Category 2 for migraine with aura, meaning they may be used with routine follow-up. Both intrauterine devices are Category 1, since neither exposes her to systemic oestrogen; the copper device is entirely non-hormonal. Her normal blood pressure and non-smoking status do not soften the aura restriction.",
      difficulty: "easy",
    },
    {
      id: "gynaecology-contraception-q2",
      stem: "A 24-year-old woman delivered vaginally 10 days ago and is exclusively breastfeeding. She wants reliable contraception before her postnatal visit. Which is the most appropriate choice?",
      options: [
        "Combined oral contraceptive pill started today",
        "Progestogen-only pill started today",
        "Copper IUCD inserted today",
        "Depot medroxyprogesterone acetate given today",
        "Wait until 6 weeks and offer nothing in the interim",
      ],
      answer: 1,
      explanation:
        "A progestogen-only pill can be started at any time postpartum in a breastfeeding woman, does not reduce milk supply, and is WHO MEC Category 1 or 2 throughout - it is the method she can safely take home today. Combined hormonal contraception is Category 4 while breastfeeding under 6 weeks postpartum because of thrombosis risk and effects on lactation. Copper IUCD insertion between 48 hours and 4 weeks postpartum is Category 3 owing to expulsion and perforation risk, so 10 days is precisely the window to avoid. Waiting to 6 weeks with no method ignores the fact that unprotected intercourse may occur before the postnatal visit, and while lactational amenorrhoea gives some protection it requires all three conditions to hold and is not what she asked for.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-contraception-q3",
      stem: "A 26-year-old woman had unprotected intercourse 4 days ago. She also wants long-term contraception and has never had a pelvic infection. What is the most effective option to offer her now?",
      options: [
        "Levonorgestrel 1.5 mg orally",
        "Copper IUCD insertion today",
        "Start combined oral contraceptives today",
        "Ulipristal acetate 30 mg orally",
        "Reassure her, as it is too late for emergency contraception",
      ],
      answer: 1,
      explanation:
        "A copper IUCD inserted within 5 days of unprotected intercourse is the most effective emergency contraception, with a failure rate under 0.1%, and it simultaneously meets her request for long-term contraception for the next 10 years. Levonorgestrel 1.5 mg is much less effective at 96 hours and provides no ongoing cover. Ulipristal retains efficacy to 120 hours but is still inferior to the copper device and again gives no continuing protection. Starting a combined pill today does nothing about the exposure that has already occurred, and it is certainly not too late to act.",
      difficulty: "easy",
    },
    {
      id: "gynaecology-contraception-q4",
      stem: "A 30-year-old man had a no-scalpel vasectomy 5 weeks ago and asks whether he and his wife can stop using condoms. What is the correct advice?",
      options: [
        "Stop condoms now, as vasectomy is effective immediately",
        "Continue condoms for 3 months or 20 ejaculations and confirm azoospermia on semen analysis",
        "Continue condoms for 2 weeks more, then stop",
        "Stop condoms and repeat a semen analysis after one year",
        "Continue condoms permanently, as vasectomy failure is common",
      ],
      answer: 1,
      explanation:
        "Sperm persist in the distal vas and seminal vesicles after vasectomy, so another method must be used for about 3 months or 20 ejaculations and azoospermia confirmed on semen analysis before relying on the procedure - failing to say this is the commonest cause of post-vasectomy pregnancy. Stopping now, or after a further two weeks, exposes the couple during exactly the period when residual sperm are present. Deferring the semen check to a year leaves the interval unverified. Vasectomy failure is in fact very low, about 0.15%, so permanent condom use is unnecessary once azoospermia is documented.",
      difficulty: "easy",
    },
    {
      id: "gynaecology-contraception-q5",
      stem: "A 28-year-old woman on Antara (DMPA) returns 15 weeks after her last injection with no intercourse in the last month. What should be done?",
      options: [
        "Give the injection today with no additional precautions",
        "Give the injection today and advise condoms for 7 days",
        "Do a pregnancy test and defer the injection for 2 weeks",
        "Switch her to combined oral contraceptives",
        "Insert a copper IUCD instead"
      ],
      answer: 0,
      explanation:
        "DMPA has a grace period of up to 4 weeks late, so a woman at 15 weeks from a 13-week schedule is still within the window and may simply receive the next injection with no back-up method and no pregnancy test. Advising 7 days of condoms is the rule when a woman presents beyond the grace period, not within it. Deferring the injection would create a real gap in cover, and a pregnancy test is unnecessary when she is within the grace period and has had no intercourse. Switching methods is not indicated when the current one is being used correctly and she has not asked to change.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-contraception-q6",
      stem: "A 33-year-old para 2 woman had a copper IUCD inserted 8 days ago and now has fever 38.6 C, lower abdominal pain, cervical motion tenderness and purulent cervical discharge. What is the correct management?",
      options: [
        "Remove the IUCD immediately and start antibiotics",
        "Start antibiotics for pelvic inflammatory disease and leave the IUCD in place, reviewing at 48-72 hours",
        "Remove the IUCD and give no antibiotics unless cultures are positive",
        "Perform an urgent laparotomy",
        "Give an analgesic and review in one week",
      ],
      answer: 1,
      explanation:
        "Pelvic inflammatory disease in an IUCD user is treated with antibiotics while the device stays in place, and removal is considered only if there is no clinical improvement after 48-72 hours - removing it at once has not been shown to improve outcomes and leaves the woman unprotected against pregnancy. Withholding antibiotics is dangerous, since untreated PID causes tubal infertility, ectopic pregnancy and chronic pelvic pain. Laparotomy is reserved for a ruptured tubo-ovarian abscess or an unresolved surgical abdomen. Simple analgesia and a one-week review would allow tubal damage to progress.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-contraception-q7",
      stem: "A 21-year-old unmarried woman with one living child requests tubal ligation at a government facility. Under the Government of India Standards for Female and Male Sterilisation, which statement is correct?",
      options: [
        "She is eligible because she has one living child",
        "She is not eligible, since the woman must be 22-49 years of age and ever-married",
        "She may be sterilised only with her partner's written consent",
        "She may be sterilised if two doctors certify the need",
        "She is eligible only after a psychiatric evaluation",
      ],
      answer: 1,
      explanation:
        "The Government of India standards require that the client be ever-married, that the woman be between 22 and 49 years of age, and that she have at least one child over one year old unless there is a medical indication, so at 21 and unmarried she does not meet the criteria. Having a living child alone does not satisfy the age and marital requirements. Partner consent is explicitly not required in India, so that option inverts the actual rule. There is no two-doctor certification route for elective sterilisation, and a psychiatric evaluation is relevant only where capacity to consent is in question.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-contraception-q8",
      stem: "A 29-year-old woman taking Mala-N realises she has missed the tablets on days 15, 16 and 17 of her pack. She had intercourse yesterday. What is the correct advice?",
      options: [
        "Take one missed tablet now, discard the rest, continue the pack, and no extra precautions",
        "Take the most recent missed tablet now, continue the pack, use condoms for 7 days, and skip the iron tablets by starting the next pack immediately after the hormone tablets",
        "Stop the pack, wait for a withdrawal bleed and start a new pack",
        "Take all three missed tablets together and continue",
        "Stop the pill and switch permanently to condoms",
      ],
      answer: 1,
      explanation:
        "Three missed tablets means 48 hours or more without hormone, so she takes only the most recent missed tablet, discards the others, continues the pack and uses condoms for 7 days; because the misses fall in week 3 she must also omit the hormone-free interval by starting the next pack straight after the hormone tablets, since extending that interval is what permits ovulation. Doing nothing extra is the rule for a single missed pill only. Stopping the pack and waiting for a bleed creates a long hormone-free interval and maximises the pregnancy risk. Taking all three tablets together causes nausea without improving cover, and abandoning a method she otherwise likes is not required.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "gynaecology-contraception-c1",
      front: "WHO MEC categories 1 to 4 in one line each.",
      back: "1 no restriction; 2 advantages outweigh risks; 3 risks usually outweigh advantages (avoid unless nothing else); 4 unacceptable health risk (do not use). Simplified: 1-2 use, 3-4 do not use.",
    },
    {
      id: "gynaecology-contraception-c2",
      front: "Category 4 conditions for combined hormonal contraception (name six).",
      back: "Migraine with aura; age 35 or more with 15 or more cigarettes a day; BP 160/100 mmHg or more; current or past VTE; current breast cancer; breastfeeding under 6 weeks postpartum. (Also stroke, IHD, severe cirrhosis, thrombogenic mutations.)",
    },
    {
      id: "gynaecology-contraception-c3",
      front: "Missed combined pill: the two-line rule.",
      back: "One pill missed (under 48 h): take it, continue, no back-up. Two or more (48 h or more): take the latest, continue, condoms 7 days; week 1 add emergency contraception if unprotected sex in last 5 days; week 3 skip the hormone-free interval.",
    },
    {
      id: "gynaecology-contraception-c4",
      front: "Antara (DMPA) dose, interval and grace period.",
      back: "150 mg IM every 3 months; grace period 2 weeks early to 4 weeks late; expect spotting early and amenorrhoea in about half at one year; fertility returns after 9-12 months.",
    },
    {
      id: "gynaecology-contraception-c5",
      front: "Chhaya (centchroman) regimen.",
      back: "Ormeloxifene 30 mg twice weekly for 12 weeks, then once weekly on the same day; non-steroidal, oestrogen-free SERM. Avoid in PCOS, cervical hyperplasia, liver or kidney disease.",
    },
    {
      id: "gynaecology-contraception-c6",
      front: "Duration of Cu-IUCD 380A, Cu-IUCD 375 and LNG-IUS 52 mg.",
      back: "380A ten years, 375 five years, LNG-IUS 52 mg five to eight years.",
    },
    {
      id: "gynaecology-contraception-c7",
      front: "Postpartum IUCD timing rules.",
      back: "Within 10 minutes of placental delivery or up to 48 hours (PPIUCD), or from 4-6 weeks. Between 48 hours and 4 weeks is MEC Category 3.",
    },
    {
      id: "gynaecology-contraception-c8",
      front: "Most effective emergency contraception.",
      back: "Copper IUCD within 5 days of unprotected intercourse, failure under 0.1%, and it continues as 10-year contraception. Levonorgestrel 1.5 mg is the oral standard within 72-120 hours.",
    },
    {
      id: "gynaecology-contraception-c9",
      front: "Three conditions for the lactational amenorrhoea method.",
      back: "Exclusive or near-exclusive breastfeeding, complete amenorrhoea, and less than 6 months postpartum - all three, or the method fails.",
    },
    {
      id: "gynaecology-contraception-c10",
      front: "Government of India sterilisation eligibility.",
      back: "Ever-married, woman aged 22-49 years, at least one child over one year old (unless medically indicated), written informed consent; spouse consent NOT required and consent may be withdrawn any time.",
    },
    {
      id: "gynaecology-contraception-c11",
      front: "Post-vasectomy advice.",
      back: "Not effective immediately: use another method for 3 months or 20 ejaculations and confirm azoospermia on semen analysis. Failure rate about 0.15%.",
    },
    {
      id: "gynaecology-contraception-c12",
      front: "Category 4 conditions for IUCD insertion (name five).",
      back: "Pregnancy; puerperal sepsis; immediate post-septic abortion; unexplained vaginal bleeding before evaluation; current PID, purulent cervicitis or gonococcal/chlamydial infection; cervical or endometrial cancer; distorted cavity; pelvic tuberculosis; GTD with raised hCG.",
    },
  ],
  references: [
    "WHO Medical Eligibility Criteria for Contraceptive Use, 5th edition, 2015, with 2024 update",
    "WHO Selected Practice Recommendations for Contraceptive Use, 3rd edition, 2016",
    "Reference Manual for Injectable Contraceptive MPA (Antara programme), Family Planning Division, MoHFW, Government of India, 2016",
    "Standards for Female and Male Sterilisation Services, Family Planning Division, MoHFW, Government of India, 2006",
    "Reference Manual for IUCD Services and PPIUCD Reference Manual, MoHFW, Government of India, 2018",
    "National Family Health Survey (NFHS-5) India Report, 2019-21 - family planning indicators",
    "FOGSI Good Clinical Practice Recommendations on Contraception, 2018",
  ],
});

topics.push({
  id: "gynaecology-pcos",
  title: "Polycystic ovary syndrome",
  oneLiner:
    "Polycystic ovary syndrome is diagnosed by the Rotterdam criteria when two of three features are present - oligo-ovulation or anovulation, clinical or biochemical hyperandrogenism, and polycystic ovarian morphology - after excluding thyroid disease, hyperprolactinaemia, non-classical congenital adrenal hyperplasia and androgen-secreting tumours, and it is managed as a lifelong metabolic and reproductive condition, not as an ovarian cyst.",
  frequency: "core",
  keywords: [
    "PCOS",
    "Rotterdam criteria",
    "hyperandrogenism",
    "hirsutism",
    "Ferriman-Gallwey",
    "anovulation",
    "insulin resistance",
    "acanthosis nigricans",
    "metformin",
    "letrozole",
    "clomiphene citrate",
    "myo-inositol",
    "anti-Mullerian hormone",
    "oligomenorrhoea",
    "endometrial hyperplasia",
    "17-hydroxyprogesterone",
  ],
  sections: [
    {
      heading: "Definition, criteria and burden",
      points: [
        "**Rotterdam 2003 criteria, endorsed by the 2023 International Evidence-based Guideline: two of three** - oligo-ovulation or anovulation; clinical or biochemical hyperandrogenism; and polycystic ovarian morphology on ultrasound. It is a diagnosis of exclusion.",
        "**Polycystic ovarian morphology is now defined as 20 or more follicles of 2-9 mm in either ovary and/or an ovarian volume of 10 mL or more** using a modern transvaginal transducer of 8 MHz or higher; the old threshold of 12 follicles applies only to older equipment.",
        "**Ultrasound must not be used to diagnose PCOS within 8 years of menarche**, because multifollicular ovaries are normal in that period; in adolescents the diagnosis rests on irregular cycles plus hyperandrogenism alone.",
        "Serum **anti-Mullerian hormone may replace ultrasound** for defining polycystic ovarian morphology in adults, per the 2023 guideline, but not in adolescents and not as a stand-alone diagnostic test.",
        "Irregular cycles are defined as: cycles under 21 or over 35 days, or fewer than 8 cycles a year, in an adult; in the first year after menarche irregularity is normal, and from 1 to under 3 years post-menarche the limits are under 21 or over 45 days.",
        "**Prevalence in India is quoted as 3.7-22.5%** depending on criteria and population, with a higher metabolic risk at any given BMI than in white populations - Indian women with PCOS have more insulin resistance and central adiposity for the same weight.",
      ],
    },
    {
      heading: "Pathophysiology worth writing down",
      points: [
        "Increased GnRH pulse frequency raises LH relative to FSH, driving **ovarian theca cell androgen production**; the raised LH to FSH ratio is a consequence, not a diagnostic criterion, and should not be ordered as a test.",
        "**Insulin resistance with compensatory hyperinsulinaemia** is present in 50-70% and is independent of obesity; insulin acts synergistically with LH on the theca cell and suppresses hepatic sex hormone binding globulin, so free testosterone rises even when total testosterone is normal.",
        "Follicular arrest at the 2-9 mm antral stage produces the ultrasound picture and the anovulation; **anti-Mullerian hormone from those follicles is 2-3 times normal** and itself inhibits FSH-driven selection of a dominant follicle.",
        "**Chronic unopposed oestrogen** from anovulation, with no progesterone from a corpus luteum, is what puts the endometrium at risk of hyperplasia and carcinoma - the single most important long-term consequence to state.",
        "Adipose tissue converts androstenedione to oestrone peripherally, sustaining the cycle; **weight gain worsens every element and weight loss reverses much of it**.",
        "Long-term risks: impaired glucose tolerance and type 2 diabetes (up to 4-fold), metabolic syndrome, dyslipidaemia, obstructive sleep apnoea, non-alcoholic fatty liver disease, endometrial carcinoma (2-6 fold), anxiety and depression, and in pregnancy gestational diabetes and pre-eclampsia.",
      ],
    },
    {
      heading: "Clinical assessment",
      points: [
        "Menstrual history since menarche, weight trajectory, hirsutism and its rate of progression, acne, scalp hair loss, difficulty conceiving, and a family history of diabetes and PCOS.",
        "**Score hirsutism with the modified Ferriman-Gallwey scale** over nine body areas; a score of 4-6 or more is significant in South Asian women, in whom cut-offs differ from those used in white populations.",
        "Examine for BMI and waist circumference using **Asian-Indian cut-offs (BMI 23 kg/m2 overweight, 25 obese; waist above 80 cm in women)**, acanthosis nigricans, acne, male-pattern alopecia and blood pressure.",
        "**Rapid virilisation - clitoromegaly, deep voice, marked muscle bulk, hirsutism developing over months** - is not PCOS; look for an androgen-secreting ovarian or adrenal tumour or Cushing syndrome, and refer.",
        "Assess mood at every visit: anxiety and depression are substantially more common in PCOS and the 2023 guideline makes screening for them a formal recommendation.",
        "Ask about snoring and daytime sleepiness (obstructive sleep apnoea), and about pregnancy plans, because these decide whether treatment is metabolic, cosmetic, contraceptive or fertility-directed.",
      ],
    },
    {
      heading: "Investigations and what to exclude",
      points: [
        "**Exclude the mimics first: TSH for thyroid disease, prolactin for hyperprolactinaemia, and early-morning follicular-phase 17-hydroxyprogesterone for non-classical congenital adrenal hyperplasia** (a value above 2 ng/mL requires an ACTH stimulation test).",
        "Confirm biochemical hyperandrogenism with **total and free testosterone, calculated free androgen index or SHBG**; a total testosterone above 150 ng/dL (5.2 nmol/L) or DHEAS more than twice the upper limit demands imaging for a tumour.",
        "**Every woman with PCOS should have a 75 g oral glucose tolerance test at diagnosis**, repeated every 1-3 years depending on risk, plus a fasting lipid profile, blood pressure and weight; HbA1c alone under-detects impaired glucose tolerance in this group.",
        "Transvaginal ultrasound where appropriate for age and marital status; a transabdominal scan is used in the unmarried adolescent and then only ovarian volume, not follicle number, is interpretable.",
        "Do **not** order LH, FSH or the LH to FSH ratio to make the diagnosis; it is neither sensitive nor specific and its routine use is a common error in Indian practice.",
        "Screen for depression and anxiety, and check for obstructive sleep apnoea symptoms; screen for endometrial pathology with ultrasound and, if the endometrium is thickened or amenorrhoea has been prolonged, with a biopsy.",
      ],
    },
    {
      heading: "Management when pregnancy is not desired",
      points: [
        "**Lifestyle modification is first line for every woman:** a 5-10% reduction in weight restores ovulation in a majority, improves hirsutism and insulin resistance, and does so before any measurable change in BMI category. Set an achievable calorie deficit of 500-750 kcal a day with 150 minutes of moderate activity a week.",
        "**Combined oral contraceptives are first-line pharmacotherapy** for menstrual irregularity and for hyperandrogenic features: they regularise cycles, protect the endometrium and raise SHBG so that free androgen falls. Any low-dose preparation may be used; the 2023 guideline states no specific preparation is superior, and 35 microgram ethinylestradiol with cyproterone acetate should not be first line because of VTE risk.",
        "**Metformin 500 mg PO once daily titrated to 1500-2000 mg a day** is added for metabolic features, impaired glucose tolerance, or where the combined pill is contraindicated or refused; it improves cycle regularity and weight modestly but is not a treatment for hirsutism.",
        "**If the pill is not acceptable, protect the endometrium with a progestogen** - medroxyprogesterone acetate 10 mg daily for 10-14 days every 2-3 months, or an LNG-IUS - because more than 3-4 months of amenorrhoea from anovulation is an endometrial risk.",
        "**Hirsutism:** cosmetic measures (laser is the most effective) plus 6 months of a combined pill before judging effect, since hair growth cycles are long. Add an antiandrogen such as **spironolactone 50-100 mg daily only with reliable contraception**, because of feminisation of a male fetus.",
        "Treat the metabolic syndrome components on their merits - statin for dyslipidaemia by risk, antihypertensives to target, and refer for bariatric surgery only by the usual criteria.",
        "Myo-inositol is popular in India and may modestly improve metabolic and ovulatory parameters, but the evidence is weak and it should be presented honestly as an option with limited evidence rather than a proven therapy.",
      ],
    },
    {
      heading: "Management when pregnancy is desired",
      points: [
        "**Preconception:** confirm ovulatory status, check rubella immunity where available, start folic acid 400 microgram (5 mg if BMI is high or there is diabetes) daily, treat thyroid disease, and optimise weight - a 5-10% loss materially raises the live birth rate.",
        "**Letrozole 2.5 mg PO daily on days 3-7 of the cycle, escalating to 5 and 7.5 mg, is first-line ovulation induction** and gives higher ovulation, pregnancy and live-birth rates than clomiphene in PCOS, particularly in obese women.",
        "**Clomiphene citrate 50 mg PO daily on days 2-6**, increasing to 100 and 150 mg, remains an acceptable alternative where letrozole is unavailable; it should not be used for more than 6 ovulatory cycles because of the risk of ovarian hyperstimulation and multiple pregnancy without benefit beyond that point.",
        "Metformin may be added to clomiphene in clomiphene-resistant women and improves ovulation rates, and it is often continued in obese women; it is not a substitute for ovulation induction.",
        "Second line is **gonadotrophin therapy or laparoscopic ovarian drilling** under specialist care, and third line is in-vitro fertilisation; ovarian drilling avoids multiple pregnancy but carries a risk of adhesions and reduced ovarian reserve.",
        "**Monitor for ovarian hyperstimulation syndrome** with gonadotrophins - abdominal distension, ascites, haemoconcentration and thrombosis; PCOS is the strongest risk factor for it.",
        "In pregnancy, PCOS raises the risk of gestational diabetes, hypertensive disease and preterm birth, so book an early oral glucose tolerance test and plan antenatal surveillance accordingly.",
      ],
    },
  ],
  tables: [
    {
      heading: "Rotterdam criteria and the exclusions",
      columns: ["Element", "How it is established", "Notes"],
      rows: [
        ["Oligo- or anovulation", "Cycles under 21 or over 35 days, or fewer than 8 a year; mid-luteal progesterone", "In adolescents use age-specific cycle limits"],
        ["Hyperandrogenism", "Modified Ferriman-Gallwey score, acne, alopecia; free testosterone or FAI", "Cut-off 4-6 for South Asian women"],
        ["Polycystic ovarian morphology", "20 or more follicles of 2-9 mm per ovary and/or ovarian volume 10 mL or more", "Not to be used within 8 years of menarche; AMH is an adult alternative"],
        ["Exclude thyroid disease", "TSH", "Hypothyroidism mimics oligomenorrhoea"],
        ["Exclude hyperprolactinaemia", "Serum prolactin", "Look for galactorrhoea and drugs"],
        ["Exclude non-classical CAH", "Follicular-phase early-morning 17-hydroxyprogesterone", "Above 2 ng/mL needs ACTH stimulation"],
        ["Exclude androgen-secreting tumour and Cushing", "Testosterone above 150 ng/dL, DHEAS, overnight dexamethasone suppression", "Rapid virilisation is the clinical trigger"],
      ],
    },
    {
      heading: "Drug options in PCOS",
      columns: ["Drug", "Dose", "Indication", "Caution"],
      rows: [
        ["Combined oral contraceptive", "One tablet PO daily", "Cycle regulation, hirsutism, endometrial protection", "Apply WHO MEC; avoid in migraine with aura"],
        ["Metformin", "500 mg PO OD titrated to 1500-2000 mg/day", "Impaired glucose tolerance, metabolic features", "GI upset; hold if eGFR under 30"],
        ["Medroxyprogesterone acetate", "10 mg PO daily for 10-14 days every 2-3 months", "Endometrial protection when the pill is refused", "Not contraceptive"],
        ["Spironolactone", "50-100 mg PO daily", "Hirsutism not responding to the pill at 6 months", "Teratogenic; mandatory contraception; check potassium"],
        ["Letrozole", "2.5-7.5 mg PO daily, days 3-7", "First-line ovulation induction", "Monitor follicles; stop after 6 ovulatory cycles"],
        ["Clomiphene citrate", "50-150 mg PO daily, days 2-6", "Alternative ovulation induction", "Multiple pregnancy, antioestrogenic on endometrium"],
      ],
    },
  ],
  redFlags: [
    "Rapid onset of hirsutism over months with clitoromegaly, voice deepening or muscle bulk - androgen-secreting tumour, not PCOS; image the ovaries and adrenals urgently.",
    "Total testosterone above 150 ng/dL or DHEAS more than twice the upper limit of normal - refer for tumour work-up.",
    "Amenorrhoea for more than 6 months in an anovulatory woman with a thickened endometrium - endometrial hyperplasia risk; sample the endometrium.",
    "Central obesity with purple striae, proximal myopathy and easy bruising - Cushing syndrome, screen with an overnight dexamethasone suppression test.",
    "Abdominal distension, breathlessness and reduced urine output after ovulation induction - ovarian hyperstimulation syndrome, admit.",
    "Acanthosis nigricans with an HbA1c in the diabetic range in an adolescent - established type 2 diabetes needing immediate treatment, not just lifestyle advice.",
    "New severe depression or suicidal ideation - PCOS carries a high psychiatric burden and this needs same-day mental health assessment.",
  ],
  pearls: [
    "PCOS is Rotterdam two-of-three, and it is a diagnosis of exclusion - name TSH, prolactin and 17-hydroxyprogesterone in the same breath as the criteria.",
    "Do not order an LH to FSH ratio; it is not a Rotterdam criterion and is neither sensitive nor specific.",
    "Never diagnose PCOS on ultrasound within 8 years of menarche - multifollicular ovaries are physiological in adolescence.",
    "The polycystic morphology threshold is now 20 follicles per ovary and/or 10 mL volume with a modern transducer, not 12 follicles.",
    "A 5-10% weight loss restores ovulation in most women and is the single most effective intervention - say it before any drug.",
    "Letrozole, not clomiphene, is the first-line ovulation induction agent in PCOS, with better live-birth rates especially in obese women.",
    "Every woman with PCOS needs an oral glucose tolerance test at diagnosis and every 1-3 years - HbA1c alone misses impaired glucose tolerance.",
    "If a woman refuses the pill, she still needs endometrial protection: a progestogen for 10-14 days every 2-3 months, or an LNG-IUS.",
  ],
  theory: [
    {
      id: "gynaecology-pcos-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 24-year-old unmarried woman presents with irregular cycles, acne and weight gain. Define polycystic ovary syndrome, describe its pathophysiology, and outline your evaluation and long-term management.",
      openingLines: [
        "Polycystic ovary syndrome is diagnosed by the Rotterdam criteria when two of three features are present - oligo-ovulation or anovulation, clinical or biochemical hyperandrogenism, and polycystic ovarian morphology - after other causes have been excluded.",
        "It is the commonest endocrinopathy of reproductive-age women, with an Indian prevalence quoted between 3.7% and 22.5%, and it is a lifelong metabolic as well as reproductive disorder.",
      ],
      answer: [
        {
          heading: "1. Diagnostic criteria",
          points: [
            "Oligo-ovulation or anovulation - cycles under 21 or over 35 days, or fewer than 8 cycles a year.",
            "Clinical hyperandrogenism (hirsutism by modified Ferriman-Gallwey, acne, androgenic alopecia) or biochemical hyperandrogenism (raised free testosterone or free androgen index).",
            "Polycystic ovarian morphology - 20 or more follicles of 2-9 mm in either ovary and/or ovarian volume 10 mL or more; not applicable within 8 years of menarche, and anti-Mullerian hormone may substitute in adults.",
            "Exclusions: thyroid disease, hyperprolactinaemia, non-classical congenital adrenal hyperplasia, Cushing syndrome and androgen-secreting tumours.",
          ],
        },
        {
          heading: "2. Pathophysiology",
          points: [
            "Increased GnRH pulse frequency raises LH relative to FSH and drives theca cell androgen production.",
            "Insulin resistance with hyperinsulinaemia, present in 50-70% and independent of obesity, potentiates theca cell androgen output and lowers sex hormone binding globulin, raising free androgen.",
            "Follicular arrest at the small antral stage produces the ultrasound appearance, high anti-Mullerian hormone and anovulation.",
            "Chronic unopposed oestrogen without luteal progesterone results in endometrial hyperplasia and a 2-6 fold increase in endometrial carcinoma risk.",
            "Peripheral aromatisation in adipose tissue sustains the cycle, which is why weight change moves the whole disorder in either direction.",
          ],
        },
        {
          heading: "3. Evaluation",
          points: [
            "History: cycles since menarche, weight trajectory, hirsutism and its speed of onset, acne, mood, family history of diabetes, and future fertility plans.",
            "Examination: BMI and waist by Asian-Indian cut-offs, blood pressure, modified Ferriman-Gallwey score, acanthosis nigricans, and signs of virilisation or Cushing syndrome.",
            "Investigations: TSH, prolactin, early-morning follicular 17-hydroxyprogesterone, total and free testosterone with SHBG; transabdominal or transvaginal ultrasound as appropriate.",
            "Metabolic screen: 75 g oral glucose tolerance test at diagnosis and every 1-3 years, fasting lipid profile, blood pressure, and liver assessment for fatty liver if indicated.",
            "Screen for depression, anxiety and obstructive sleep apnoea.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Lifestyle first for everyone: a 500-750 kcal daily deficit, 150 minutes of moderate activity weekly, targeting a 5-10% weight reduction, which restores ovulation in most and improves every metabolic marker.",
            "Combined oral contraceptive as first-line drug therapy for cycle regulation, hyperandrogenism and endometrial protection, after applying WHO Medical Eligibility Criteria.",
            "Metformin 500 mg titrated to 1500-2000 mg a day for impaired glucose tolerance or where the pill is refused or contraindicated.",
            "If neither is acceptable, cyclical medroxyprogesterone acetate 10 mg for 10-14 days every 2-3 months, or an LNG-IUS, to protect the endometrium.",
            "Hirsutism: cosmetic measures plus 6 months of the pill before adding spironolactone 50-100 mg daily with mandatory contraception.",
            "When she later wants to conceive: preconception folic acid, weight optimisation, and letrozole 2.5-7.5 mg on days 3-7 as first-line ovulation induction, with clomiphene as an alternative.",
          ],
        },
        {
          heading: "5. Long-term follow-up",
          points: [
            "Annual weight, waist, blood pressure; glucose tolerance test every 1-3 years; lipids periodically.",
            "Endometrial surveillance in prolonged amenorrhoea; mental health review; counselling that PCOS is chronic and that treatment addresses the current priority - cycles, skin, metabolism or fertility - and changes over her life.",
          ],
        },
      ],
      mustDraw: [
        "A Venn diagram of the three Rotterdam criteria with the overlap marked as PCOS.",
        "A flow chart of the pathophysiology: raised GnRH pulse frequency and insulin resistance - raised LH and free androgen - follicular arrest - anovulation and unopposed oestrogen.",
      ],
      markSplit: [
        { part: "Rotterdam criteria and exclusions", marks: 3 },
        { part: "Pathophysiology", marks: 2 },
        { part: "Evaluation including metabolic screening", marks: 2 },
        { part: "Management with drugs, doses and lifestyle", marks: 2.5 },
        { part: "Long-term follow-up", marks: 0.5 },
      ],
      keywords: ["Rotterdam criteria", "insulin resistance", "letrozole", "metformin", "endometrial protection"],
    },
    {
      id: "gynaecology-pcos-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on hirsutism: causes, assessment and management.",
      openingLines: [
        "Hirsutism is excessive terminal hair growth in a woman in an androgen-dependent male pattern - upper lip, chin, chest, upper abdomen, back and thighs - and is distinct from hypertrichosis, which is generalised non-androgenic hair growth.",
        "It affects 5-10% of reproductive-age women, and about 70-80% of cases are due to polycystic ovary syndrome.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Ovarian: polycystic ovary syndrome (the great majority), androgen-secreting ovarian tumours such as Sertoli-Leydig cell tumour, and ovarian hyperthecosis.",
            "Adrenal: non-classical congenital adrenal hyperplasia (21-hydroxylase deficiency), Cushing syndrome, adrenal carcinoma.",
            "Drugs: danazol, anabolic steroids, testosterone, valproate, ciclosporin, phenytoin and minoxidil (the last causing hypertrichosis).",
            "Idiopathic hirsutism with regular cycles and normal androgens, reflecting increased 5-alpha-reductase activity in the pilosebaceous unit.",
            "Endocrine: hyperprolactinaemia, acromegaly, and rarely thyroid disease.",
          ],
        },
        {
          heading: "Assessment",
          points: [
            "History: age and speed of onset, menstrual pattern, fertility, drugs, family and ethnic background.",
            "Rapid progression over months with virilisation - clitoromegaly, deepening voice, temporal balding, increased muscle mass - indicates a tumour and demands urgent imaging.",
            "Score severity with the modified Ferriman-Gallwey scale over nine areas; a score of 4-6 or more is significant in South Asian women.",
            "Investigations: total and free testosterone, DHEAS, early-morning follicular 17-hydroxyprogesterone, prolactin, TSH; pelvic ultrasound; overnight dexamethasone suppression if Cushing syndrome is suspected.",
            "Testosterone above 150 ng/dL or DHEAS more than twice normal requires ovarian and adrenal imaging.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Treat the cause: weight loss in PCOS, stop the offending drug, surgery for a tumour, glucocorticoid for congenital adrenal hyperplasia.",
            "Cosmetic and physical measures: shaving, waxing, threading, eflornithine cream for facial hair, and laser or electrolysis, which is the most effective long-term option.",
            "Combined oral contraceptive as first-line drug therapy - it suppresses ovarian androgen production and raises SHBG. Allow 6 months before judging response, as the hair cycle is long.",
            "Antiandrogens after 6 months of inadequate response: spironolactone 50-100 mg daily, or finasteride, always with reliable contraception because of the risk of feminising a male fetus.",
            "Realistic counselling and attention to psychological distress, which is often the dominant symptom.",
          ],
        },
      ],
      mustDraw: ["A table of hirsutism causes grouped as ovarian, adrenal, drug-induced and idiopathic, with the discriminating test for each."],
      markSplit: [
        { part: "Definition and distinction from hypertrichosis", marks: 0.5 },
        { part: "Causes grouped correctly", marks: 1.5 },
        { part: "Assessment including Ferriman-Gallwey and red flags", marks: 1.5 },
        { part: "Management including the 6-month rule and antiandrogens", marks: 1.5 },
      ],
      keywords: ["hirsutism", "Ferriman-Gallwey", "spironolactone", "non-classical CAH", "virilisation"],
    },
    {
      id: "gynaecology-pcos-t3",
      paper: "IV",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "less-common",
      question: "Differentiate polycystic ovary syndrome from hypothyroidism and hyperprolactinaemia as causes of oligomenorrhoea, and justify the tests you would use.",
      openingLines: [
        "Oligomenorrhoea is menstruation occurring at intervals longer than 35 days or fewer than eight times a year, and its three common endocrine causes in family practice are polycystic ovary syndrome, hypothyroidism and hyperprolactinaemia.",
        "They are separated by three simple, cheap tests - TSH, prolactin and clinical assessment of androgen excess - which is why all three are ordered together at the first visit.",
      ],
      answer: [
        {
          heading: "Clinical differentiation",
          points: [
            "PCOS: onset around menarche, hirsutism, acne, acanthosis nigricans, central obesity, family history of diabetes, normal galactorrhoea-free breasts.",
            "Hypothyroidism: fatigue, cold intolerance, constipation, weight gain with a puffy face, dry skin, delayed relaxation of ankle jerk, goitre, and sometimes menorrhagia rather than oligomenorrhoea; severe hypothyroidism can cause galactorrhoea through TRH-driven prolactin release.",
            "Hyperprolactinaemia: galactorrhoea, headache or visual field defect with a macroadenoma, reduced libido, and a careful drug history for antipsychotics, metoclopramide, domperidone and methyldopa.",
          ],
        },
        {
          heading: "Biochemical differentiation",
          points: [
            "PCOS: raised free testosterone or free androgen index with normal TSH and prolactin; ultrasound shows polycystic ovarian morphology; a mildly raised prolactin up to about 25-30 ng/mL may occur and does not exclude PCOS.",
            "Hypothyroidism: raised TSH with low free T4 in overt disease; raised TSH with normal free T4 in subclinical disease.",
            "Hyperprolactinaemia: prolactin persistently above 25 ng/mL on a repeat, non-stressed, fasting sample; a value above 100-150 ng/mL suggests a prolactinoma and requires MRI of the pituitary.",
          ],
        },
        {
          heading: "Why the tests are justified",
          points: [
            "TSH and prolactin are cheap, widely available and treatable if abnormal; both mimic PCOS closely, and PCOS is by definition a diagnosis of exclusion.",
            "Correcting hypothyroidism with levothyroxine or a prolactinoma with cabergoline restores ovulation and cycles without any need for the PCOS treatment pathway.",
            "Missing them leads to a woman being placed on the oral contraceptive pill for years with an untreated pituitary adenoma or thyroid disease.",
          ],
        },
      ],
      mustDraw: ["A three-column table comparing PCOS, hypothyroidism and hyperprolactinaemia across symptoms, signs, key test and treatment."],
      markSplit: [
        { part: "Clinical differentiation", marks: 2 },
        { part: "Biochemical differentiation with cut-offs", marks: 2 },
        { part: "Justification and treatment implication", marks: 1 },
      ],
      keywords: ["oligomenorrhoea", "TSH", "prolactin", "galactorrhoea", "diagnosis of exclusion"],
    },
  ],
  mcqs: [
    {
      id: "gynaecology-pcos-q1",
      stem: "A 15-year-old girl, two years post-menarche, has cycles every 50-60 days and mild acne. Ultrasound reports multiple small follicles in both ovaries. What is the correct interpretation?",
      options: [
        "She has PCOS by Rotterdam criteria and should start a combined oral contraceptive",
        "Ultrasound should not be used for diagnosis within 8 years of menarche; reassess her cycles and androgen status over time",
        "She needs an urgent LH to FSH ratio to confirm the diagnosis",
        "She should start metformin immediately",
        "Ovarian drilling should be planned",
      ],
      answer: 1,
      explanation:
        "Multifollicular ovaries are a normal finding in adolescence, and the 2023 International Evidence-based Guideline explicitly states that ultrasound must not be used to diagnose PCOS within 8 years of menarche; in adolescents the diagnosis needs irregular cycles plus hyperandrogenism, and mild acne alone does not establish the latter. Labelling her now would commit her to a chronic diagnosis on physiological findings. The LH to FSH ratio is not a Rotterdam criterion and is neither sensitive nor specific. Metformin is not indicated without metabolic abnormality, and ovarian drilling is a second-line fertility intervention with no place in an adolescent not seeking pregnancy.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-pcos-q2",
      stem: "A 27-year-old woman with PCOS and a BMI of 31 kg/m2 has been trying to conceive for 18 months. Her husband's semen analysis is normal and hysterosalpingography shows patent tubes. What is the most appropriate first-line pharmacological treatment?",
      options: [
        "Clomiphene citrate 50 mg on days 2-6",
        "Letrozole 2.5 mg on days 3-7",
        "Metformin 1000 mg twice daily alone",
        "Gonadotrophin injections",
        "In-vitro fertilisation",
      ],
      answer: 1,
      explanation:
        "Letrozole is the recommended first-line ovulation induction agent in PCOS, with higher ovulation, clinical pregnancy and live-birth rates than clomiphene, and the advantage is greatest in obese women such as this one. Clomiphene remains acceptable where letrozole is unavailable but is no longer the preferred first choice, and its antioestrogenic effect on endometrium and cervical mucus is a further disadvantage. Metformin alone produces lower live-birth rates than letrozole and is an adjunct rather than a primary ovulation induction agent. Gonadotrophins and IVF are second and third line and should not precede an oral agent when the tubes are patent and semen analysis is normal.",
      difficulty: "easy",
    },
    {
      id: "gynaecology-pcos-q3",
      stem: "A 30-year-old woman reports hirsutism that has worsened rapidly over 5 months, with a deepening voice and clitoromegaly. Total testosterone is 210 ng/dL. What is the most appropriate next step?",
      options: [
        "Start a combined oral contraceptive and review in 6 months",
        "Start spironolactone 100 mg daily",
        "Imaging of the ovaries and adrenals to look for an androgen-secreting tumour",
        "Reassure and offer laser hair removal",
        "Start metformin and advise weight loss",
      ],
      answer: 2,
      explanation:
        "Rapid virilisation over months with a testosterone above 150 ng/dL is the classic presentation of an androgen-secreting ovarian or adrenal tumour, and imaging is urgent - PCOS causes slow, gradual hirsutism without frank virilisation. Starting the pill or spironolactone would suppress the clinical signs while a tumour progressed, and the 6-month review built into hirsutism treatment would waste critical time. Cosmetic treatment and metabolic advice address symptoms while missing the diagnosis entirely.",
      difficulty: "easy",
    },
    {
      id: "gynaecology-pcos-q4",
      stem: "Which investigation is recommended for every woman at the time of PCOS diagnosis?",
      options: [
        "LH to FSH ratio",
        "75 g oral glucose tolerance test",
        "Serum anti-Mullerian hormone",
        "MRI of the pituitary",
        "Endometrial biopsy",
      ],
      answer: 1,
      explanation:
        "A 75 g oral glucose tolerance test is recommended at diagnosis and every 1-3 years thereafter, because impaired glucose tolerance is common in PCOS and is frequently missed by fasting glucose or HbA1c alone, particularly in South Asian women. The LH to FSH ratio is explicitly not recommended for diagnosis. Anti-Mullerian hormone may substitute for ultrasound in defining polycystic morphology in adults but is not a universal requirement. Pituitary MRI is reserved for significant hyperprolactinaemia, and endometrial biopsy is indicated only with prolonged amenorrhoea, abnormal bleeding or a thickened endometrium.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-pcos-q5",
      stem: "A 29-year-old woman with PCOS and amenorrhoea for 5 months declines the combined pill because of a family history of thrombosis. She does not want pregnancy now. Which is the most appropriate management to protect her endometrium?",
      options: [
        "No treatment is needed as long as she is not bleeding",
        "Medroxyprogesterone acetate 10 mg daily for 10-14 days every 2-3 months, or an LNG-IUS",
        "Spironolactone 100 mg daily",
        "Clomiphene citrate to induce ovulation",
        "Metformin 500 mg daily alone",
      ],
      answer: 1,
      explanation:
        "Prolonged anovulatory amenorrhoea exposes the endometrium to unopposed oestrogen, and either a cyclical progestogen every 2-3 months or an LNG-IUS provides the necessary opposition - the LNG-IUS has the advantage of also giving contraception. Doing nothing accepts a 2-6 fold increase in endometrial carcinoma risk. Spironolactone treats hirsutism and gives no endometrial protection, and it would in any case require contraception. Clomiphene is an ovulation induction agent for a woman seeking pregnancy, not a way of protecting the endometrium in one who is not, and metformin alone regularises cycles too unreliably to be relied upon for endometrial protection.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-pcos-q6",
      stem: "A 22-year-old woman has oligomenorrhoea and hirsutism. Her early-morning follicular-phase 17-hydroxyprogesterone is 4.2 ng/mL. What does this suggest?",
      options: [
        "Confirms polycystic ovary syndrome",
        "Suggests non-classical congenital adrenal hyperplasia; proceed to an ACTH stimulation test",
        "Indicates an androgen-secreting ovarian tumour",
        "Indicates Cushing syndrome",
        "Is a normal finding requiring no action",
      ],
      answer: 1,
      explanation:
        "A follicular-phase early-morning 17-hydroxyprogesterone above 2 ng/mL is a positive screen for non-classical congenital adrenal hyperplasia due to 21-hydroxylase deficiency, and the diagnosis is confirmed with an ACTH stimulation test - this matters because treatment is glucocorticoid replacement and there are implications for genetic counselling. PCOS is a diagnosis of exclusion and cannot be confirmed while this result stands. An androgen-secreting tumour raises testosterone or DHEAS rather than 17-hydroxyprogesterone, and Cushing syndrome is screened with dexamethasone suppression or late-night salivary cortisol.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "gynaecology-pcos-c1",
      front: "Rotterdam criteria for PCOS.",
      back: "Two of three: oligo/anovulation; clinical or biochemical hyperandrogenism; polycystic ovarian morphology - after excluding thyroid disease, hyperprolactinaemia, non-classical CAH, Cushing and androgen-secreting tumours.",
    },
    {
      id: "gynaecology-pcos-c2",
      front: "Current ultrasound definition of polycystic ovarian morphology.",
      back: "20 or more follicles of 2-9 mm in either ovary and/or ovarian volume 10 mL or more, on a transducer of 8 MHz or higher.",
    },
    {
      id: "gynaecology-pcos-c3",
      front: "When must ultrasound NOT be used to diagnose PCOS?",
      back: "Within 8 years of menarche - multifollicular ovaries are normal in adolescence; diagnose on irregular cycles plus hyperandrogenism instead.",
    },
    {
      id: "gynaecology-pcos-c4",
      front: "Three exclusion tests before labelling PCOS.",
      back: "TSH, prolactin, and early-morning follicular-phase 17-hydroxyprogesterone (add dexamethasone suppression and testosterone/DHEAS if virilised).",
    },
    {
      id: "gynaecology-pcos-c5",
      front: "First-line ovulation induction in PCOS.",
      back: "Letrozole 2.5 mg on days 3-7, escalating to 5 and 7.5 mg - better ovulation and live-birth rates than clomiphene, especially in obese women.",
    },
    {
      id: "gynaecology-pcos-c6",
      front: "How much weight loss restores ovulation in PCOS?",
      back: "5-10% of body weight - it restores ovulation in most women and improves insulin resistance, hirsutism and pregnancy rates.",
    },
    {
      id: "gynaecology-pcos-c7",
      front: "Metabolic screening schedule in PCOS.",
      back: "75 g oral glucose tolerance test at diagnosis and every 1-3 years, plus fasting lipids, blood pressure and weight; screen for depression, anxiety and sleep apnoea.",
    },
    {
      id: "gynaecology-pcos-c8",
      front: "Endometrial cancer risk in PCOS and how to reduce it.",
      back: "2-6 fold increased from chronic unopposed oestrogen. Reduce with the combined pill, cyclical progestogen for 10-14 days every 2-3 months, or an LNG-IUS.",
    },
    {
      id: "gynaecology-pcos-c9",
      front: "Ferriman-Gallwey threshold for hirsutism in South Asian women.",
      back: "A modified Ferriman-Gallwey score of 4-6 or more across nine body areas is significant; ethnic cut-offs differ from those used in white populations.",
    },
    {
      id: "gynaecology-pcos-c10",
      front: "Why is spironolactone given only with contraception?",
      back: "It is an antiandrogen that can feminise a male fetus; reliable contraception is mandatory throughout treatment, and potassium should be checked.",
    },
    {
      id: "gynaecology-pcos-c11",
      front: "Which androgen values demand imaging for a tumour?",
      back: "Total testosterone above 150 ng/dL (5.2 nmol/L) or DHEAS more than twice the upper limit of normal - image the ovaries and adrenals.",
    },
    {
      id: "gynaecology-pcos-c12",
      front: "Why is the LH to FSH ratio not used to diagnose PCOS?",
      back: "It is neither sensitive nor specific, is not a Rotterdam criterion, and varies with cycle day, BMI and assay - ordering it is a common error.",
    },
  ],
  references: [
    "International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome, Monash University and ESHRE, 2023",
    "Rotterdam ESHRE/ASRM-Sponsored PCOS Consensus Workshop Group criteria, 2003",
    "FOGSI Good Clinical Practice Recommendations on PCOS, 2018",
    "Indian Council of Medical Research consensus on PCOS in Indian women, 2020",
    "Shaw's Textbook of Gynaecology, 18th edition, 2024 - polycystic ovarian syndrome",
  ],
});

topics.push({
  id: "gynaecology-vaginal-discharge-pid",
  title: "Vaginal discharge and pelvic inflammatory disease: syndromic management",
  oneLiner:
    "Abnormal vaginal discharge in a family practice is sorted into vaginitis (bacterial vaginosis, vulvovaginal candidiasis, trichomoniasis) and cervicitis (Neisseria gonorrhoeae, Chlamydia trachomatis), and because laboratory confirmation is rarely available at the point of care the Indian national programme treats it by colour-coded syndromic kits, while any woman with lower abdominal pain plus cervical motion, uterine or adnexal tenderness is treated as pelvic inflammatory disease to protect her future fertility.",
  frequency: "core",
  keywords: [
    "vaginal discharge",
    "leucorrhoea",
    "bacterial vaginosis",
    "Amsel criteria",
    "clue cells",
    "Nugent score",
    "vulvovaginal candidiasis",
    "trichomoniasis",
    "strawberry cervix",
    "cervicitis",
    "Chlamydia trachomatis",
    "Neisseria gonorrhoeae",
    "pelvic inflammatory disease",
    "PID",
    "cervical motion tenderness",
    "tubo-ovarian abscess",
    "Fitz-Hugh-Curtis syndrome",
    "syndromic management",
    "NACO STI RTI kits",
    "metronidazole",
    "doxycycline",
    "ceftriaxone",
    "partner notification",
  ],
  sections: [
    {
      heading: "Physiological versus pathological discharge",
      points: [
        "**Physiological discharge is white or clear, odourless, non-irritant, does not stain the underclothes yellow, and varies with the cycle** - it increases at mid-cycle under oestrogen, in pregnancy, on combined oral contraceptives and with sexual arousal, and it needs explanation and reassurance rather than an antibiotic.",
        "Pathological discharge is suggested by a **change in colour, odour, volume or consistency, or by associated itching, soreness, dysuria, dyspareunia, intermenstrual or postcoital bleeding, and lower abdominal pain**; the last three point away from the vagina and towards the cervix and upper tract.",
        "The single most useful clinical division is **vaginitis versus cervicitis**: vaginitis causes itching, soreness and odour with a normal cervix, whereas cervicitis causes mucopurulent discharge from the os, a friable cervix that bleeds on contact, and carries the risk of ascending infection.",
        "In Indian practice a very large fraction of women presenting with **leucorrhoea have no infection at all** - the discharge is physiological, and the symptom is often a somatic expression of anxiety, marital stress, iron deficiency or a genuine but unrelated pelvic complaint. Treating every such woman with repeated antibiotic courses is a recognised programme failure.",
        "Non-infective causes must not be forgotten: **atrophic vaginitis in the postmenopausal woman, a retained foreign body such as a forgotten tampon or a neglected pessary, chemical irritation from douching and vaginal preparations, an ectropion, a cervical or endometrial polyp, and cervical carcinoma**.",
        "**Any blood-stained or foul offensive discharge in a woman over 35, or discharge with postcoital bleeding at any age, requires the cervix to be seen and any lesion biopsied** - carcinoma of the cervix presents as discharge more often than as bleeding in the Indian setting.",
      ],
    },
    {
      heading: "The three causes of vaginitis and how to separate them",
      points: [
        "**Bacterial vaginosis is the commonest cause of abnormal discharge worldwide.** It is not an infection but a change in the vaginal ecology - loss of hydrogen-peroxide-producing lactobacilli and overgrowth of Gardnerella vaginalis, Prevotella, Mobiluncus and Atopobium. The discharge is thin, homogeneous, grey-white and adherent to the vaginal walls, with a fishy odour that worsens after intercourse and after menstruation, and there is characteristically **no itching and no inflammation**.",
        "**Amsel criteria diagnose bacterial vaginosis when three of four are present:** thin homogeneous discharge; vaginal pH above 4.5; a positive whiff or amine test (fishy odour on adding 10% potassium hydroxide); and **clue cells forming more than 20% of epithelial cells on saline wet mount**. The laboratory gold standard is the Nugent score on a Gram-stained smear, scored 0-10, where 7-10 is bacterial vaginosis.",
        "**Vulvovaginal candidiasis** presents with intense pruritus, soreness, superficial dyspareunia and external dysuria, with a thick curdy white discharge adherent to an erythematous vaginal wall. The **vaginal pH stays normal at 4.0-4.5**, the whiff test is negative, and 10% potassium hydroxide microscopy shows budding yeasts and pseudohyphae. Recurrent candidiasis (four or more episodes a year) demands a search for **uncontrolled diabetes, recent antibiotics, corticosteroids, pregnancy and HIV**.",
        "**Trichomoniasis is a sexually transmitted infection** caused by the flagellate protozoan Trichomonas vaginalis. The discharge is profuse, frothy, greenish-yellow and offensive, with vulval soreness and dysuria; the **vaginal pH is above 4.5**, the whiff test may be positive, and saline wet mount shows **motile flagellated trichomonads**. The classic strawberry cervix (colpitis macularis) is highly specific but seen in only about 2% of women on naked-eye examination.",
        "The bedside kit that settles most cases is simple and cheap: **a speculum, narrow-range pH paper, a drop of normal saline and a drop of 10% potassium hydroxide on two slides, and a microscope**. Vaginal pH alone divides the field - a normal pH points to candidiasis or physiological discharge, a raised pH to bacterial vaginosis or trichomoniasis.",
        "**Trichomoniasis and bacterial vaginosis in pregnancy** are associated with preterm labour, preterm prelabour rupture of membranes and low birth weight, and both are treated; **trichomoniasis also increases HIV acquisition and transmission**, which is why it is always managed as an STI with partner treatment.",
      ],
    },
    {
      heading: "Cervicitis, the sexually transmitted causes, and testing",
      points: [
        "**Mucopurulent cervicitis** - yellow or green endocervical exudate, a friable cervix bleeding on gentle swabbing, and 10 or more polymorphs per high-power field on an endocervical smear - is caused chiefly by **Chlamydia trachomatis and Neisseria gonorrhoeae**, and less often by Mycoplasma genitalium, herpes simplex virus and Trichomonas.",
        "**Chlamydia is silent in about 70% of infected women** and is the leading preventable cause of tubal factor infertility; gonorrhoea is more often symptomatic and more acutely purulent. Neither can be reliably distinguished clinically, which is exactly why the syndromic approach covers both together.",
        "The reference test is a **nucleic acid amplification test (NAAT) on a vulvovaginal or endocervical swab or a first-void urine sample**, and it should be used wherever it is available and affordable. Gram stain of endocervical discharge showing intracellular Gram-negative diplococci is specific but insensitive in women, and culture on Thayer-Martin medium is needed if antimicrobial resistance is being tracked.",
        "**Every woman diagnosed with any sexually transmitted infection is offered the full panel**: HIV testing with counselling under the national programme, VDRL or RPR for syphilis with a confirmatory treponemal test, hepatitis B surface antigen, and cervical screening if she is due. This bundling is a mark in itself.",
        "**Partner management is part of the treatment, not an optional extra.** Male partners of women with trichomoniasis, chlamydia, gonorrhoea and pelvic inflammatory disease are treated regardless of symptoms, and the woman is advised to abstain or use condoms until seven days after both she and her partner have completed treatment. Partners are **not** treated for bacterial vaginosis or candidiasis, since treating them does not reduce recurrence.",
        "**A copper or hormonal intrauterine device must not be inserted in the presence of current purulent cervicitis, chlamydial infection, gonorrhoea or active pelvic inflammatory disease - WHO Medical Eligibility Criteria Category 4 for initiation.** If those conditions arise in a woman who already has a device in place, the device is Category 2 for continuation: treat the infection and leave the device in unless she does not improve within 48-72 hours.",
      ],
    },
    {
      heading: "Syndromic management: the Indian national programme",
      points: [
        "**Syndromic management treats a recognisable group of symptoms and signs with a combination that covers all the treatable organisms responsible for that syndrome**, using a flow chart, on the same visit, without waiting for laboratory confirmation. It was adopted because it treats on the first contact, requires no laboratory, prevents onward transmission and complications, and reaches the peripheral health facility where most Indian women present.",
        "Under NACO the drugs are supplied as **pre-packed colour-coded kits, each containing the full course plus condoms and an information leaflet** - the seven kits are grey, green, white, blue, red, yellow and black, and knowing which kit goes with which syndrome is standard examination material.",
        "**Vaginal discharge is managed by first deciding whether the cervix is involved.** Speculum examination showing a mucopurulent cervix, or a woman with risk factors (partner with urethral discharge, new or multiple partners), gets cervicitis cover with **Kit 1 (grey)**; a woman with vaginitis alone gets **Kit 2 (green)**; where the cervix cannot be visualised and risk is high, both kits are given.",
        "**Kit 6 (yellow) is the pelvic inflammatory disease and lower abdominal pain kit** - cefixime 400 mg single dose, metronidazole 400 mg twice daily and doxycycline 100 mg twice daily, both for 14 days - and it is the single kit most often asked about in the examination.",
        "The **limitations of the syndromic approach must be stated in any answer**: it over-treats women whose discharge is physiological or purely candidal, it cannot detect asymptomatic chlamydial infection (the very infection that causes infertility), it does not track antimicrobial resistance, and repeated unnecessary courses erode both the drug supply and the woman's trust.",
        "**Doxycycline is contraindicated in pregnancy**; the pregnant woman with pelvic inflammatory disease or cervicitis is admitted and treated with a parenteral regimen, and **azithromycin 1 g orally replaces doxycycline** in outpatient syndromic packages where pregnancy is possible.",
      ],
    },
    {
      heading: "Pelvic inflammatory disease: recognition and diagnosis",
      points: [
        "**Pelvic inflammatory disease is infection ascending from the cervix to the endometrium, fallopian tubes, ovaries and pelvic peritoneum**, producing endometritis, salpingitis, oophoritis, tubo-ovarian abscess and pelvic peritonitis. It is usually polymicrobial - chlamydia and gonorrhoea initiate it, and anaerobes, Gram-negative rods, streptococci and genital mycoplasmas complete it.",
        "**The threshold for treatment is deliberately low. Empirical treatment is started in any sexually active woman with pelvic or lower abdominal pain in whom no other cause is found, if she has any one of cervical motion tenderness, uterine tenderness or adnexal tenderness on bimanual examination** - these are the CDC minimum criteria, and waiting for certainty costs tubes.",
        "**Additional criteria that raise specificity:** oral temperature above 38.3 degrees Celsius, abnormal mucopurulent cervical or vaginal discharge, abundant white cells on saline microscopy of vaginal fluid, raised ESR or C-reactive protein, and laboratory documentation of gonococcal or chlamydial infection.",
        "**Definitive criteria** are endometrial biopsy showing endometritis, transvaginal ultrasound or MRI showing thickened fluid-filled tubes or a tubo-ovarian complex, and laparoscopic findings of tubal erythema, oedema and purulent exudate; laparoscopy remains the reference standard but is neither available nor justified for routine diagnosis.",
        "**The essential differential diagnosis is the surgical and obstetric emergency**: ectopic pregnancy (a urine pregnancy test is mandatory in every case), acute appendicitis, ruptured or torted ovarian cyst, urinary tract infection and pyelonephritis, endometriosis, and inflammatory bowel disease. A negative pregnancy test is the first step, not an afterthought.",
        "**Fitz-Hugh-Curtis syndrome** is perihepatitis complicating pelvic inflammatory disease, presenting with right upper quadrant pleuritic pain that can be mistaken for cholecystitis; the violin-string adhesions between the liver capsule and the anterior abdominal wall are seen at laparoscopy.",
        "Risk factors worth listing: **age under 25, multiple or new sexual partners, a partner with urethral discharge, previous PID, recent instrumentation of the uterus (IUCD insertion within 3 weeks, dilatation and curettage, hysteroscopy, unsafe abortion), and bacterial vaginosis**.",
      ],
    },
    {
      heading: "Treatment of PID, complications and prevention",
      points: [
        "**Outpatient regimen (CDC 2021, and the one to write): ceftriaxone 500 mg intramuscularly as a single dose, plus doxycycline 100 mg orally twice daily for 14 days, plus metronidazole 500 mg orally twice daily for 14 days.** Cefixime 400 mg orally is the substitute where injection is not feasible, and this is exactly what NACO Kit 6 provides.",
        "**Admit for parenteral therapy if:** pregnancy; a surgical emergency such as appendicitis cannot be excluded; tubo-ovarian abscess; severe illness with high fever, nausea and vomiting; inability to tolerate or follow an oral regimen; or failure to respond to outpatient treatment within 72 hours. The inpatient regimen is **ceftriaxone 1 g intravenously daily (or cefoxitin) with doxycycline 100 mg twice daily and metronidazole**, or clindamycin with gentamicin where the abscess is prominent.",
        "**Review at 72 hours is compulsory.** Failure of the fever, pain and tenderness to improve means the diagnosis is wrong, the organism is resistant, or an abscess has formed - re-image and admit rather than repeat the same prescription.",
        "**Tubo-ovarian abscess** is treated with antibiotics plus drainage - image-guided percutaneous or transvaginal aspiration where the abscess is over 5-7 cm or fails to respond in 48-72 hours; laparotomy is reserved for rupture, which presents as generalised peritonitis and shock and carries high mortality.",
        "**The long-term cost of PID is the reason for aggressive treatment:** tubal factor infertility in roughly 12% after one episode, 25% after two and 50% after three; a six-fold to ten-fold rise in ectopic pregnancy; and chronic pelvic pain in about 30%, largely from adhesions and hydrosalpinx.",
        "**Prevention and counselling close the answer:** condom use with every act, treatment of partners, screening young sexually active women for chlamydia where testing exists, avoiding unnecessary uterine instrumentation, ensuring aseptic technique and screening before IUCD insertion, and safe abortion services under the MTP Act rather than unsafe procedures.",
        "**A woman with past PID who has since had a pregnancy is WHO Medical Eligibility Criteria Category 1 for a copper or levonorgestrel IUD; past PID without a subsequent pregnancy is Category 2 for initiation** - past infection is not by itself a reason to deny her the most effective long-acting method, and this nuance is worth a mark.",
      ],
    },
  ],
  tables: [
    {
      heading: "Separating the three causes of vaginitis at the bedside",
      columns: ["Feature", "Bacterial vaginosis", "Vulvovaginal candidiasis", "Trichomoniasis"],
      rows: [
        ["Discharge", "Thin, homogeneous, grey-white, adherent", "Thick, curdy, white, adherent to red wall", "Profuse, frothy, greenish-yellow"],
        ["Odour", "Fishy, worse after intercourse", "None", "Offensive"],
        ["Itching and inflammation", "Absent", "Intense pruritus and soreness", "Soreness, dysuria, vulval erythema"],
        ["Vaginal pH", "Above 4.5", "Normal, 4.0-4.5", "Above 4.5"],
        ["Whiff test with 10% KOH", "Positive", "Negative", "May be positive"],
        ["Microscopy", "Clue cells over 20% on saline mount", "Budding yeast and pseudohyphae on KOH", "Motile flagellated trichomonads on saline"],
        ["Sexually transmitted", "No", "No", "Yes"],
        ["Treat the partner", "No", "No", "Yes, always"],
        ["First-line treatment", "Metronidazole 400 mg PO BD for 7 days", "Fluconazole 150 mg PO single dose", "Metronidazole 2 g PO single dose or 400 mg BD 7 days"],
        ["In pregnancy", "Metronidazole 400 mg BD 7 days, treat symptomatic women", "Topical clotrimazole 7 days, avoid oral fluconazole", "Metronidazole, treat and treat the partner"],
      ],
    },
    {
      heading: "NACO colour-coded STI/RTI kits",
      columns: ["Kit", "Colour", "Syndrome", "Contents"],
      rows: [
        ["Kit 1", "Grey", "Urethral discharge, cervicitis, anorectal discharge", "Azithromycin 1 g single dose plus cefixime 400 mg single dose"],
        ["Kit 2", "Green", "Vaginitis (vaginal discharge without cervicitis)", "Secnidazole 2 g single dose plus fluconazole 150 mg single dose"],
        ["Kit 3", "White", "Genital ulcer, non-herpetic (syphilis and chancroid)", "Benzathine penicillin 2.4 MU IM plus azithromycin 1 g"],
        ["Kit 4", "Blue", "Genital ulcer, non-herpetic, penicillin-allergic", "Doxycycline 100 mg BD for 15 days plus azithromycin 1 g"],
        ["Kit 5", "Red", "Genital ulcer, herpetic", "Acyclovir 400 mg TDS for 7 days"],
        ["Kit 6", "Yellow", "Lower abdominal pain and pelvic inflammatory disease", "Cefixime 400 mg single dose, metronidazole 400 mg BD and doxycycline 100 mg BD, both for 14 days"],
        ["Kit 7", "Black", "Inguinal bubo (lymphogranuloma venereum, chancroid)", "Doxycycline 100 mg BD for 21 days plus azithromycin 1 g"],
      ],
    },
  ],
  redFlags: [
    "Lower abdominal pain with a positive urine pregnancy test - ectopic pregnancy until excluded; arrange urgent ultrasound and serum beta-hCG, do not label it pelvic inflammatory disease.",
    "Pelvic pain with fever above 38.3 degrees Celsius, vomiting, guarding or a tender adnexal mass - suspected tubo-ovarian abscess or peritonitis; admit for parenteral antibiotics and imaging.",
    "No improvement in fever, pain or tenderness after 72 hours of correct outpatient PID therapy - re-image and admit; the diagnosis or the organism is wrong.",
    "Foul, blood-stained or watery discharge in a woman over 35, or discharge with postcoital or intermenstrual bleeding at any age - see the cervix and biopsy any lesion; cervical carcinoma presents this way.",
    "Vaginal discharge in a prepubertal girl - consider a foreign body and consider sexual abuse; examine under the child protection pathway and never treat blindly.",
    "Purulent cervicitis or active PID in a woman requesting an IUCD - WHO MEC Category 4 for insertion; treat the infection first and insert later.",
    "Discharge with genital ulceration, inguinal lymphadenopathy, oral thrush or weight loss - test for HIV and syphilis the same visit.",
  ],
  pearls: [
    "Vaginitis itches, cervicitis bleeds - itching and odour with a normal cervix is vaginitis, mucopurulent discharge from a friable os is cervicitis and needs gonorrhoea and chlamydia cover.",
    "Three of the four Amsel criteria diagnose bacterial vaginosis: thin homogeneous discharge, pH above 4.5, positive whiff test, and clue cells over 20%.",
    "Candidiasis is the only one of the three vaginitides with a normal vaginal pH - a pH strip at the bedside sorts most cases before microscopy.",
    "Trichomoniasis is an STI, so the partner is treated; bacterial vaginosis and candidiasis are not, so the partner is not.",
    "The CDC minimum criteria for PID are cervical motion, uterine or adnexal tenderness in a sexually active woman with pelvic pain - one is enough to start treatment, because the cost of waiting is her tubes.",
    "Write the PID regimen in full: ceftriaxone 500 mg IM stat, doxycycline 100 mg BD for 14 days, metronidazole 500 mg BD for 14 days - and this is NACO Kit 6 (yellow).",
    "Infertility follows PID in about 12% after one episode, 25% after two and 50% after three - quoting this sequence earns the complications mark.",
    "Doxycycline is contraindicated in pregnancy; a pregnant woman with PID is admitted for parenteral treatment.",
    "Say the limitations of syndromic management as well as its advantages - over-treatment, missed asymptomatic chlamydia and unmonitored resistance - that balance is what separates a pass from a good answer.",
  ],
  theory: [
    {
      id: "gynaecology-vaginal-discharge-pid-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 24-year-old married woman presents to your clinic with lower abdominal pain for five days, fever and offensive vaginal discharge. Discuss your approach, and describe the syndromic management of vaginal discharge in the Indian setting.",
      openingLines: [
        "This young sexually active woman with lower abdominal pain, fever and abnormal vaginal discharge has pelvic inflammatory disease until proved otherwise, and ectopic pregnancy must be excluded before anything else with a urine pregnancy test.",
        "Pelvic inflammatory disease is polymicrobial infection ascending from the cervix to the endometrium, tubes, ovaries and pelvic peritoneum, and the threshold for empirical treatment is deliberately low because delay causes tubal infertility, ectopic pregnancy and chronic pelvic pain.",
      ],
      answer: [
        {
          heading: "1. History",
          points: [
            "Pain: onset, site, severity, relation to menses; character and odour of discharge; fever, nausea and vomiting; dysuria, dyspareunia, intermenstrual and postcoital bleeding.",
            "Menstrual and obstetric history with the date of the last menstrual period, contraceptive method, and any recent instrumentation - IUCD insertion, curettage, abortion or delivery.",
            "Sexual history taken privately and without judgement: new or multiple partners, partner with urethral discharge or genital ulcer, condom use.",
            "Past history of similar episodes, treated STI, tuberculosis, diabetes; drug history including previous antibiotic courses and self-medication.",
          ],
        },
        {
          heading: "2. Examination",
          points: [
            "General: temperature, pulse, blood pressure, pallor, hydration, and signs of systemic sepsis.",
            "Abdominal: lower abdominal tenderness, guarding, rebound, and any palpable mass; right upper quadrant tenderness suggests Fitz-Hugh-Curtis perihepatitis.",
            "Speculum: character of discharge, mucopurulent cervical exudate, friability of the cervix, ulcers, foreign body, and any visible cervical growth.",
            "Bimanual: cervical motion tenderness, uterine tenderness, adnexal tenderness or a mass, and the position and size of the uterus.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "Urine pregnancy test in every case, before any drug is prescribed.",
            "Bedside tests: vaginal pH, saline wet mount for clue cells and trichomonads, 10% KOH whiff test and mount for pseudohyphae; endocervical Gram stain if available.",
            "Complete blood count, ESR or C-reactive protein, and urine routine and microscopy to exclude urinary infection.",
            "NAAT for Chlamydia trachomatis and Neisseria gonorrhoeae where available; HIV testing with counselling, VDRL or RPR, and HBsAg for every woman with a suspected STI.",
            "Transvaginal or transabdominal ultrasound to look for a tubo-ovarian mass, free fluid, hydrosalpinx or an adnexal mass, and to exclude other causes of the pain.",
          ],
        },
        {
          heading: "4. Syndromic management of vaginal discharge",
          points: [
            "The principle: treat a defined symptom complex with a combination covering all the treatable organisms responsible, on the first visit, using a flow chart and pre-packed colour-coded kits, without waiting for laboratory results.",
            "Decide whether the cervix is involved. Vaginitis alone - Kit 2 (green): secnidazole 2 g single dose plus fluconazole 150 mg single dose. Cervicitis, or a woman with risk factors, or where the cervix cannot be visualised - add Kit 1 (grey): azithromycin 1 g plus cefixime 400 mg.",
            "Lower abdominal pain with tenderness, that is pelvic inflammatory disease - Kit 6 (yellow): cefixime 400 mg single dose, doxycycline 100 mg twice daily and metronidazole 400 mg twice daily, both for 14 days.",
            "Advantages: treatment on first contact, no laboratory needed, feasible at the peripheral facility, interrupts transmission and prevents complications.",
            "Limitations: over-treatment of physiological discharge, poor specificity for candidiasis, failure to detect asymptomatic chlamydia, no resistance surveillance, and cost of unnecessary drugs.",
          ],
        },
        {
          heading: "5. Treatment of this patient and follow-up",
          points: [
            "Outpatient regimen if she is stable, afebrile enough to tolerate oral drugs and able to follow up: ceftriaxone 500 mg IM stat, doxycycline 100 mg PO twice daily for 14 days, metronidazole 500 mg PO twice daily for 14 days, with analgesia and rest.",
            "Admit for parenteral therapy if pregnant, severely ill, vomiting, if a surgical emergency cannot be excluded, if there is a tubo-ovarian abscess, or if outpatient treatment fails at 72 hours.",
            "Partner treatment for all male partners of the past 60 days, abstinence or condoms until seven days after both complete treatment, and treatment of the partner even if he is asymptomatic.",
            "Counsel on condom use, the risk to future fertility, completing the full 14 days, and the need to return immediately if pain or fever worsens.",
            "Review at 72 hours to confirm improvement, and again at 2-4 weeks; screen for HIV and syphilis, offer cervical screening if due, and record the episode because it changes future contraceptive counselling.",
          ],
        },
      ],
      mustDraw: [
        "The syndromic flow chart for vaginal discharge: history and speculum - cervix mucopurulent or risk factors present? - yes gives Kit 1 plus Kit 2, no gives Kit 2 alone - add Kit 6 if there is lower abdominal pain with tenderness.",
        "A table of the three causes of vaginitis against pH, whiff test, microscopy and treatment.",
      ],
      markSplit: [
        { part: "History and examination including the minimum criteria for PID", marks: 2 },
        { part: "Investigations with pregnancy test and bedside tests", marks: 2 },
        { part: "Principle of syndromic management with kits", marks: 3 },
        { part: "Treatment regimen with doses and admission criteria", marks: 2 },
        { part: "Partner management, counselling and follow-up", marks: 1 },
      ],
      keywords: ["syndromic management", "NACO kits", "pelvic inflammatory disease", "cervical motion tenderness", "doxycycline"],
    },
    {
      id: "gynaecology-vaginal-discharge-pid-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on bacterial vaginosis.",
      openingLines: [
        "Bacterial vaginosis is a polymicrobial clinical syndrome caused by replacement of the normal hydrogen-peroxide-producing lactobacilli of the vagina by high concentrations of anaerobic organisms - Gardnerella vaginalis, Prevotella, Mobiluncus and Atopobium vaginae.",
        "It is the commonest cause of abnormal vaginal discharge in women of reproductive age, it is not a sexually transmitted infection, and it is characteristically an infection without inflammation.",
      ],
      answer: [
        {
          heading: "Clinical features",
          points: [
            "Thin, homogeneous, grey-white discharge coating the vaginal walls, with a fishy odour worse after intercourse and after menstruation.",
            "Absence of itching, soreness, erythema or dyspareunia - the wall is not inflamed, which is the point of the name vaginosis rather than vaginitis.",
            "Up to half of affected women are asymptomatic; risk factors include douching, new or multiple sexual partners, smoking and an intrauterine device.",
          ],
        },
        {
          heading: "Diagnosis - Amsel criteria (three of four)",
          points: [
            "Thin, homogeneous, adherent vaginal discharge.",
            "Vaginal pH above 4.5 measured on narrow-range pH paper from the lateral vaginal wall.",
            "Positive whiff or amine test - a fishy odour released on adding 10% potassium hydroxide.",
            "Clue cells constituting more than 20% of epithelial cells on saline wet mount - vaginal epithelial cells with borders obscured by adherent coccobacilli.",
            "The laboratory gold standard is the Nugent score on a Gram-stained vaginal smear, graded 0-10, with 7-10 diagnostic and 4-6 intermediate.",
          ],
        },
        {
          heading: "Complications",
          points: [
            "In pregnancy: preterm labour, preterm prelabour rupture of membranes, low birth weight, chorioamnionitis and postpartum endometritis.",
            "Outside pregnancy: post-abortal and post-hysterectomy infection, increased susceptibility to pelvic inflammatory disease, and increased acquisition of HIV, herpes simplex virus type 2, gonorrhoea and chlamydia.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Metronidazole 400 mg orally twice daily for 7 days is first line; metronidazole 2 g as a single dose is an alternative but has a higher relapse rate.",
            "Alternatives: metronidazole 0.75% vaginal gel once daily for 5 days, or clindamycin 2% vaginal cream at night for 7 days; oral clindamycin 300 mg twice daily for 7 days where metronidazole is not tolerated.",
            "Advise avoidance of alcohol during and for 24 hours after metronidazole because of the disulfiram-like reaction, and avoidance of douching.",
            "Treat symptomatic pregnant women with oral metronidazole 400 mg twice daily for 7 days; routine partner treatment is not recommended because it does not reduce recurrence.",
            "Recurrence occurs in up to 30% within three months; suppressive twice-weekly metronidazole gel for 4-6 months is used for frequent recurrence.",
          ],
        },
      ],
      mustDraw: [
        "A labelled sketch of a clue cell - a vaginal epithelial cell with a granular, stippled surface and an obscured cell border - beside a normal epithelial cell for comparison.",
      ],
      markSplit: [
        { part: "Definition and microbiology", marks: 1 },
        { part: "Clinical features", marks: 1 },
        { part: "Amsel criteria and Nugent score", marks: 1.5 },
        { part: "Complications and treatment", marks: 1.5 },
      ],
      keywords: ["bacterial vaginosis", "Amsel criteria", "clue cells", "Nugent score", "metronidazole"],
    },
  ],
  mcqs: [
    {
      id: "gynaecology-vaginal-discharge-pid-q1",
      stem: "A 27-year-old woman complains of a thin grey-white vaginal discharge with a fishy odour, without itching. Vaginal pH is 5.2 and 10% potassium hydroxide releases a fishy smell. Which finding on saline wet mount would complete the diagnosis?",
      options: [
        "Budding yeasts with pseudohyphae",
        "Motile flagellated organisms",
        "Clue cells forming more than 20% of epithelial cells",
        "More than 10 polymorphs per high-power field",
        "Gram-negative intracellular diplococci",
      ],
      answer: 2,
      explanation:
        "Thin homogeneous discharge, pH above 4.5 and a positive whiff test are three of the four Amsel criteria; clue cells are the fourth and are the microscopic hallmark of bacterial vaginosis. Budding yeasts and pseudohyphae indicate candidiasis, which characteristically has a normal pH of 4.0-4.5 and causes intense itching, both absent here. Motile flagellates indicate trichomoniasis, which produces a frothy greenish offensive discharge with vulval soreness rather than an odour without inflammation. Polymorphs are non-specific and are in fact typically scanty in bacterial vaginosis, which is an infection without inflammation. Intracellular Gram-negative diplococci are seen on Gram stain of gonococcal cervicitis, not on a saline mount of vaginal fluid.",
      difficulty: "easy",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-q2",
      stem: "A 22-year-old sexually active woman has lower abdominal pain for four days. Temperature is 37.6 degrees Celsius, urine pregnancy test is negative, and bimanual examination shows cervical motion tenderness. Ultrasound is normal. What is the most appropriate next step?",
      options: [
        "Reassure and review in one week as she is afebrile and the scan is normal",
        "Start ceftriaxone 500 mg IM stat with doxycycline and metronidazole for 14 days",
        "Wait for the chlamydia NAAT result before starting any antibiotic",
        "Perform diagnostic laparoscopy to confirm pelvic inflammatory disease",
        "Give a single dose of fluconazole 150 mg and review",
      ],
      answer: 1,
      explanation:
        "Cervical motion tenderness in a sexually active woman with pelvic pain and no other explanation satisfies the CDC minimum criteria, and empirical treatment is started at once because delay causes tubal damage. Reassurance is wrong because a normal scan and a normal temperature do not exclude pelvic inflammatory disease - imaging is normal in most cases and fever is present in a minority. Waiting for the NAAT costs days of tubal inflammation and is explicitly discouraged; treatment is started and modified later if needed. Laparoscopy is the reference standard but is invasive and is reserved for diagnostic doubt or failed treatment, not for first-line confirmation. Fluconazole treats candidiasis, which causes itching and a normal vaginal pH and does not cause cervical motion tenderness.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-q3",
      stem: "A woman diagnosed with pelvic inflammatory disease at a primary health centre is to be given the appropriate NACO colour-coded kit. Which kit and contents are correct?",
      options: [
        "Kit 1 (grey) - azithromycin 1 g plus cefixime 400 mg",
        "Kit 2 (green) - secnidazole 2 g plus fluconazole 150 mg",
        "Kit 6 (yellow) - cefixime 400 mg, metronidazole 400 mg BD and doxycycline 100 mg BD for 14 days",
        "Kit 7 (black) - doxycycline 100 mg BD for 21 days plus azithromycin 1 g",
        "Kit 5 (red) - acyclovir 400 mg TDS for 7 days",
      ],
      answer: 2,
      explanation:
        "Kit 6, the yellow kit, is the lower abdominal pain and pelvic inflammatory disease kit and contains a single dose of cefixime with 14 days of metronidazole and doxycycline, covering gonococci, chlamydia and anaerobes. Kit 1 (grey) covers urethral discharge and cervicitis only and lacks the anaerobic and 14-day chlamydial cover the upper tract needs. Kit 2 (green) is for vaginitis and contains no cephalosporin, so it would leave gonococcal and chlamydial upper-tract infection untreated. Kit 7 (black) is for inguinal bubo, treating lymphogranuloma venereum and chancroid. Kit 5 (red) is acyclovir for herpetic genital ulcer and has no antibacterial activity at all.",
      difficulty: "moderate",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-q4",
      stem: "A 26-year-old woman is being counselled for a copper intrauterine device. On examination she has a mucopurulent cervical discharge and a friable cervix. According to WHO Medical Eligibility Criteria, what is the correct action?",
      options: [
        "Insert the device now and give antibiotics at the same visit - Category 1",
        "Insert the device and review in one week - Category 2",
        "Do not insert now; treat the cervicitis and insert later - Category 4 for initiation",
        "Do not offer an intrauterine device ever again - Category 4 permanently",
        "Insert a levonorgestrel device instead, as it is Category 1 in cervicitis",
      ],
      answer: 2,
      explanation:
        "Current purulent cervicitis, chlamydial infection or gonorrhoea is Category 4 for initiation of either a copper or a levonorgestrel intrauterine device, because insertion through an infected cervix carries a high risk of ascending infection; the correct action is to treat the infection and insert once she is cured. Inserting with cover is not Category 1 and is not acceptable practice. Category 2 would mean the benefits generally outweigh the risks and insertion may proceed, which is not the case here. The Category 4 rating applies to initiation while the infection is current, not permanently - once treated she can have a device, and if the same infection arises with a device already in place it is only Category 2 for continuation. The levonorgestrel device carries the same Category 4 restriction, so switching device type changes nothing.",
      difficulty: "hard",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-q5",
      stem: "A 30-year-old woman with pelvic inflammatory disease has completed 72 hours of correct outpatient therapy but has worsening pain, a temperature of 39 degrees Celsius and a tender right adnexal mass of 7 cm on ultrasound. What is the most appropriate management?",
      options: [
        "Continue the same oral regimen for the full 14 days and review at completion",
        "Change the oral cephalosporin to oral ciprofloxacin and continue at home",
        "Admit for intravenous antibiotics with consideration of image-guided drainage",
        "Arrange immediate total abdominal hysterectomy with bilateral salpingo-oophorectomy",
        "Insert a levonorgestrel intrauterine system to control the infection",
      ],
      answer: 2,
      explanation:
        "Failure to respond within 72 hours and a 7 cm tubo-ovarian abscess are both admission criteria; she needs intravenous antibiotics and image-guided percutaneous or transvaginal drainage, since abscesses above about 5-7 cm respond poorly to antibiotics alone. Continuing the identical failed oral regimen ignores the defined 72-hour review point and risks rupture and generalised peritonitis. Substituting oral ciprofloxacin at home neither addresses the failure of the outpatient route nor drains the collection, and fluoroquinolone monotherapy has poor anaerobic cover and high gonococcal resistance in India. Hysterectomy with bilateral salpingo-oophorectomy in a 30-year-old is reserved for rupture with life-threatening sepsis, not for a first attempt at controlling an abscess. Inserting an intrauterine device during active pelvic infection is Category 4 and would worsen the infection.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "gynaecology-vaginal-discharge-pid-c1",
      front: "State the four Amsel criteria.",
      back: "Thin homogeneous discharge; vaginal pH above 4.5; positive whiff test with 10% KOH; clue cells over 20% of epithelial cells. Three of four diagnose bacterial vaginosis.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c2",
      front: "Which vaginitis has a normal vaginal pH?",
      back: "Vulvovaginal candidiasis - pH stays 4.0-4.5. Bacterial vaginosis and trichomoniasis both raise the pH above 4.5.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c3",
      front: "CDC minimum criteria for starting treatment for pelvic inflammatory disease.",
      back: "Sexually active woman with pelvic or lower abdominal pain and no other cause, plus any one of cervical motion tenderness, uterine tenderness or adnexal tenderness.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c4",
      front: "Outpatient regimen for pelvic inflammatory disease.",
      back: "Ceftriaxone 500 mg IM stat, plus doxycycline 100 mg PO BD for 14 days, plus metronidazole 500 mg PO BD for 14 days.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c5",
      front: "Which NACO kit is used for pelvic inflammatory disease, and what does it contain?",
      back: "Kit 6, yellow - cefixime 400 mg single dose plus metronidazole 400 mg BD and doxycycline 100 mg BD for 14 days.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c6",
      front: "Risk of infertility after pelvic inflammatory disease.",
      back: "About 12% after one episode, 25% after two and 50% after three; ectopic pregnancy risk rises six-fold to ten-fold, and about 30% get chronic pelvic pain.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c7",
      front: "What is Fitz-Hugh-Curtis syndrome?",
      back: "Perihepatitis complicating pelvic inflammatory disease - right upper quadrant pleuritic pain with violin-string adhesions between the liver capsule and the anterior abdominal wall.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c8",
      front: "Which causes of vaginal discharge require the partner to be treated?",
      back: "Trichomoniasis, chlamydia, gonorrhoea and pelvic inflammatory disease. Not bacterial vaginosis and not candidiasis.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c9",
      front: "WHO MEC category for IUD insertion in current purulent cervicitis or PID.",
      back: "Category 4 for initiation - treat first, insert later. If it occurs with a device already in situ it is Category 2 for continuation.",
    },
    {
      id: "gynaecology-vaginal-discharge-pid-c10",
      front: "Name three limitations of syndromic management of vaginal discharge.",
      back: "Over-treatment of physiological and candidal discharge; failure to detect asymptomatic chlamydial infection; no surveillance of antimicrobial resistance.",
    },
  ],
  references: [
    "National Guidelines on Prevention, Management and Control of Reproductive Tract Infections and Sexually Transmitted Infections, NACO, Ministry of Health and Family Welfare, Government of India, 2014 (reprinted 2022)",
    "CDC Sexually Transmitted Infections Treatment Guidelines, 2021",
    "WHO Guidelines for the Management of Symptomatic Sexually Transmitted Infections, 2021",
    "WHO Medical Eligibility Criteria for Contraceptive Use, 5th edition, 2015, with 2024 update",
    "FOGSI Good Clinical Practice Recommendations on Vaginal Discharge and Genital Infections, 2018",
    "Shaw's Textbook of Gynaecology, 18th edition, 2024 - infections of the genital tract",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "gynaecology-case-1",
    title: "Woman of 42 with heavy menstrual bleeding and iron deficiency anaemia",
    kind: "long",
    subjectId: "gynaecology",
    opening:
      "A 42-year-old para 2 live 2 homemaker, with a minilaparotomy tubectomy 12 years ago, presents with heavy regular periods for 8 months - bleeding for 8 days with flooding, clots and 8-10 soaked pads a day on the first three days - together with easy fatiguability and breathlessness on climbing stairs for 3 months; her haemoglobin is 7.6 g/dL, her BMI is 31, and the uterus is enlarged to about 10 weeks' size.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the parity with the sterilisation status, the presenting complaints in the woman's own order with the duration of each, and the two numbers that define the case - the haemoglobin and the uterine size - before any detail; the examiner decides in the first thirty seconds whether you have understood the case.",
          "Say: 'Mrs X, a 42-year-old homemaker from a peri-urban area, para 2 live 2 with both deliveries vaginal and a minilaparotomy tubectomy 12 years ago, presents with heavy regular menstrual bleeding for 8 months and easy fatiguability with breathlessness on exertion for 3 months, and has been found to have a haemoglobin of 7.6 g/dL and a uterus enlarged to about 10 weeks' size.'",
          "Add the negatives that shape the differential at once: no intermenstrual or postcoital bleeding, no offensive discharge, no weight loss, no bruising or epistaxis, no drug or device that could cause the bleeding, and no orthopnoea, palpitations at rest or chest pain.",
          "State the treatment so far honestly, because it decides the next step: two courses of an unnamed haemostatic tablet from a chemist during the heaviest days, a course of oral iron stopped after 2 weeks for constipation, and no ultrasound or biopsy to date.",
          "Use FIGO vocabulary from the first sentence - heavy menstrual bleeding, not menorrhagia - and describe the bleeding as chronic AUB, present for most of the last 6 months, so that the classification marks are earned before the history is even complete.",
        ],
      },
      {
        heading: "History of the presenting complaint: quantify the bleeding",
        points: [
          "Describe each cycle against the four FIGO parameters: a frequency of 26-28 days (normal 24-38), regular to within 3 days (normal variation 7-9 days or less), a duration of 8 days (normal 8 or less), and a volume she herself finds excessive - which is the whole of the modern definition of heavy menstrual bleeding.",
          "Turn the volume into countable events: 8-10 fully soaked pads a day for the first three days, doubling of pads at night, flooding through to clothing on two occasions, clots larger than a rupee coin, and 3 days of housework lost each month; a pictorial blood loss assessment chart score above 100 corresponds to a loss above 80 mL.",
          "Date the change: periods were 4-5 days with 3-4 pads a day until about 8 months ago, when they lengthened and became heavier without any change in regularity - a heavy but regular pattern points to a structural cause (AUB-L, AUB-A) or to AUB-E rather than to ovulatory dysfunction.",
          "Ask about pain: secondary dysmenorrhoea beginning a day before the flow and lasting through it, deep dyspareunia, and chronic pelvic pain - the combination of heavy painful periods with a bulky tender uterus is the clinical picture of adenomyosis.",
          "Ask about the bulk and pressure symptoms of a fibroid - a sense of a lump low in the abdomen, urinary frequency, incomplete bladder emptying, constipation - and about intermenstrual and postcoital bleeding, whose absence is stated deliberately because their presence would move the cervix to the top of the list.",
        ],
      },
      {
        heading: "History that works through PALM-COEIN",
        points: [
          "Structural causes: pressure symptoms and a self-noticed abdominal swelling (AUB-L), heavy painful periods after two deliveries (AUB-A), intermenstrual bleeding (AUB-P), and the risk factors for hyperplasia and carcinoma (AUB-M) - obesity, diabetes, chronic anovulation, tamoxifen and a family history of endometrial, colon or ovarian cancer.",
          "Coagulopathy screen (AUB-C) in the four-question form: heavy bleeding since menarche, or one of postpartum haemorrhage, surgery-related bleeding or dental extraction bleeding, or two of bruising, epistaxis, gum bleeding and a family history of a bleeding disorder - here every answer is no, and the bleeding after both deliveries and after the tubectomy was unremarkable.",
          "Ovulatory dysfunction (AUB-O): the cycles are regular and predictable, so anovulation is unlikely, but weight gain, cold intolerance, constipation and hair loss are asked for hypothyroidism, and galactorrhoea and headache for hyperprolactinaemia, because both can present in the forties.",
          "Iatrogenic causes (AUB-I): no copper device, no anticoagulant or antiplatelet drug, no hormonal preparation, no tamoxifen, no antipsychotic, and no herbal or over-the-counter preparation - each named and denied rather than summarised as 'no drug history'.",
          "The perimenopausal transition: any hot flushes, night sweats or skipped cycles, because a 42-year-old is close enough to the menopause for AUB-O to become the driver in the next few years, and the plan must anticipate it.",
        ],
      },
      {
        heading: "History directed at the anaemia",
        points: [
          "Characterise the functional impact in the woman's own activities: breathlessness on one flight of stairs but not at rest, fatigue by the afternoon, palpitations on exertion, giddiness on standing on the heaviest days, and no orthopnoea, paroxysmal nocturnal dyspnoea or ankle swelling that would signal decompensation.",
          "Establish that the anaemia is a consequence of the bleeding and not a parallel disease: a mixed diet with pulses but little green leafy vegetable, tea taken with meals, no pica, no black stools or haematemesis, no altered bowel habit or rectal bleeding, no chronic cough or fever, and no jaundice.",
          "Record the iron history as it happened: ferrous sulphate from a chemist stopped after 2 weeks for constipation and black stools, no injectable iron, no transfusion, and no deworming in the last year.",
          "Ask about the symptoms of iron deficiency beyond anaemia - restless legs, hair loss, brittle nails, a sore tongue and a craving for ice - which help when the haemoglobin has been partly corrected by intermittent iron.",
          "Ask about diabetes, hypertension and thyroid disease, and record the weight history, because a BMI of 31 raises the endometrial risk, lowers the biopsy threshold and affects the choice of hormonal therapy.",
        ],
      },
      {
        heading: "Menstrual, obstetric, contraceptive, past, family and social history",
        points: [
          "Menstrual history: menarche at 13, cycles of 26-28 days lasting 4-5 days for most of her life, the change 8 months ago, the last menstrual period 12 days ago, and no bleeding between periods or after intercourse.",
          "Obstetric history: two term vaginal deliveries 16 and 14 years ago without postpartum haemorrhage or transfusion, and a minilaparotomy tubectomy 12 years ago at the district hospital; state explicitly that sterilisation does not remove the need for a pregnancy test.",
          "Past history of tuberculosis, diabetes, hypertension, thyroid disease, jaundice, a bleeding disorder, previous surgery or transfusion, and any earlier pelvic ultrasound or gynaecological treatment.",
          "Family history of endometrial, colon, breast or ovarian cancer, of fibroids in the mother or sisters, of diabetes, and of a bleeding disorder - a family history of endometrial or colon cancer under 50 raises Lynch syndrome and changes the biopsy rule.",
          "Socio-economic history in usable terms: the family income and any insurance, the distance to a facility with ultrasound and a gynaecologist, who decides about treatment at home, and her own view of hysterectomy, which in many Indian families is either demanded or refused before the doctor has spoken.",
        ],
      },
      {
        heading: "General and systemic examination",
        points: [
          "General survey: height, weight and a BMI of 31 with the waist circumference, pallor graded in the lower palpebral conjunctiva, tongue and nail beds, koilonychia, angular stomatitis, glossitis, no icterus, no petechiae or ecchymoses, no thyroid enlargement, no acanthosis nigricans, and no lymphadenopathy.",
          "Vitals with the technique stated: pulse 96 per minute, regular and of good volume, blood pressure 124/80 mmHg sitting with the correct cuff, respiratory rate 18 per minute, afebrile, and no postural fall in blood pressure.",
          "Cardiovascular examination for the hyperdynamic circulation of anaemia and for decompensation: the jugular venous pressure, a forceful but undisplaced apex, a soft ejection systolic flow murmur at the pulmonary area, no third heart sound, and clear lung bases.",
          "Look for the systemic causes of bleeding you cannot afford to miss: hepatomegaly or splenomegaly, the stigmata of chronic liver disease, and the signs of hypothyroidism - dry skin, periorbital puffiness and a delayed relaxation of the ankle reflex.",
          "Breast examination is part of a complete gynaecological long case in a woman over 40 and is done and reported, with a note that the thyroid, breasts, abdomen and pelvis were examined with a chaperone present.",
        ],
      },
      {
        heading: "Abdominal, speculum and pelvic examination",
        points: [
          "Abdomen: no visible mass, no scar apart from the tubectomy scar, a firm, non-tender, mobile suprapubic mass reaching about 2 cm above the symphysis pubis whose lower border cannot be reached - a mass arising from the pelvis - with no free fluid and no hepatosplenomegaly.",
          "Speculum examination with a good light: a healthy-looking multiparous cervix without growth, erosion, polyp or contact bleeding, no discharge, and healthy vaginal walls - the sentence 'the cervix was seen and is healthy' must be said, because a cervical cause is excluded by looking, not by the history.",
          "Bimanual examination: the uterus enlarged to about 10 weeks' size, firm, with an irregular contour on the posterior surface, mobile, not tender, anteverted, with the fornices free and no adnexal mass or tenderness; the cervix moves with the uterine mass, confirming that the mass is uterine.",
          "Interpret the findings aloud: an irregular firm uterus favours a fibroid, a uniformly enlarged, globular and tender uterus favours adenomyosis, and a fixed uterus with nodularity in the pouch of Douglas would raise endometriosis or malignancy.",
          "Close by stating that a per-rectal examination is added if a posterior mass or rectal symptoms are present, and that cervical screening by VIA or a Pap smear is offered at this visit because she has never been screened.",
        ],
      },
    ],
    summaryStatement:
      "This is a 42-year-old para 2 live 2 with a tubectomy 12 years ago, presenting with chronic heavy menstrual bleeding of 8 months with regular cycles, flooding and clots, and symptomatic iron deficiency anaemia with a haemoglobin of 7.6 g/dL without cardiac decompensation, in whom examination shows a firm, irregularly enlarged uterus of about 10 weeks' size, free fornices and a healthy cervix; the most probable diagnosis is AUB-L due to a uterine leiomyoma, with adenomyosis and endometrial hyperplasia to be excluded, and because she is obese with persistent bleeding the endometrium must be sampled before hormonal treatment, the plan being iron replacement, tranexamic acid and mefenamic acid for the current cycle, transvaginal ultrasound and endometrial biopsy, and then a levonorgestrel intrauterine system as first-line treatment if the cavity is not distorted and the histology is benign, with referral for hysteroscopic or definitive surgery only if medical treatment fails.",
    differential: [
      {
        diagnosis: "AUB-L: uterine leiomyoma, most likely intramural, possibly with a submucosal component",
        forIt:
          "Heavy regular periods with clots and flooding, a firm irregularly enlarged uterus of 10 weeks' size that moves with the cervix, mild pressure symptoms, and an age of 42, which is the peak decade for symptomatic fibroids; fibroids are found in 20-40% of women over 35.",
        againstIt:
          "Only a submucosal or cavity-distorting fibroid reliably causes heavy bleeding, so an intramural or subserosal fibroid on ultrasound may be an innocent bystander, and the uterus is not tender or globular; the FIGO type on transvaginal ultrasound, and if needed saline sonohysterography, settles it.",
      },
      {
        diagnosis: "AUB-A: adenomyosis",
        forIt:
          "Two vaginal deliveries, uterine enlargement of about 10 weeks, heavy menstrual bleeding, and an age of 42 - adenomyosis presents most often in parous women in their forties and coexists with fibroids in about a third of hysterectomy specimens.",
        againstIt:
          "The uterus is irregular rather than uniformly globular and is not tender on examination, and the secondary dysmenorrhoea is mild; a junctional zone of 12 mm or more on MRI, or myometrial cysts, asymmetrical wall thickening and a poorly defined junctional zone on transvaginal ultrasound, would support it.",
      },
      {
        diagnosis: "AUB-M: endometrial hyperplasia with or without atypia, or endometrial carcinoma",
        forIt:
          "Obesity with a BMI of 31 is a state of unopposed peripheral oestrogen, she is over 40, the bleeding has persisted for 8 months, and hyperplasia is found in a few per cent of women with AUB in this age group with carcinoma in about 1%; anaemia does not distinguish benign from malignant bleeding.",
        againstIt:
          "The cycles are regular and ovulatory, there is no intermenstrual bleeding, no diabetes, no family history of Lynch-associated cancers and no tamoxifen exposure; none of these excludes hyperplasia, and only an endometrial biopsy does, which is why it is done before any hormonal treatment.",
      },
      {
        diagnosis: "AUB-C: an inherited bleeding disorder such as von Willebrand disease, or an acquired coagulopathy from liver disease or thrombocytopenia",
        forIt:
          "Heavy bleeding with anaemia, and an inherited bleeding disorder is found in about 13% of women with heavy menstrual bleeding, most often von Willebrand disease.",
        againstIt:
          "The bleeding began at 41 and not at menarche, both deliveries and the tubectomy passed without excess bleeding, there is no epistaxis, gum bleeding, bruising or family history, and the four-question screen is negative, so von Willebrand testing is not indicated; a platelet count and a prothrombin time are still obtained before any biopsy or surgery.",
      },
    ],
    investigations: [
      {
        test: "Urine pregnancy test",
        why: "Every woman of reproductive age with abnormal bleeding has pregnancy excluded first, and sterilisation does not exempt her - tubectomy fails in about 0.5 per 100 women in the first year, failures keep accumulating over the following decade, and about a third of them are ectopic.",
        expected: "Negative; a positive result with pain or a mass converts the case into an ectopic pregnancy until proved otherwise and needs a serum beta-hCG and a transvaginal ultrasound the same day.",
      },
      {
        test: "Complete blood count with red cell indices, red cell distribution width, reticulocyte count, platelet count and peripheral smear",
        why: "To grade the anaemia, characterise it as microcytic hypochromic, obtain the platelet count that the bleeding work-up needs, and set the baseline for judging the response to iron.",
        expected: "Haemoglobin 7.6 g/dL, MCV below 80 fL, MCH below 27 pg, RDW above 15%, a low reticulocyte count, normal platelets, and a smear showing microcytosis, hypochromia, anisocytosis and pencil cells; a Mentzer index above 13 favours iron deficiency over thalassaemia trait.",
      },
      {
        test: "Serum ferritin with C-reactive protein",
        why: "Ferritin is the most specific test of iron stores and settles both the diagnosis and the choice between oral and intravenous iron; haemoglobin alone underestimates iron deficiency in Indian women, and a normal ferritin in the presence of inflammation must be read with the CRP.",
        expected: "Ferritin below 30 microgram/L, and usually below 15 microgram/L, with a normal CRP; a ferritin above 100 microgram/L with a microcytic picture points to thalassaemia trait or anaemia of chronic disease and calls for HbA2 electrophoresis.",
      },
      {
        test: "Serum TSH",
        why: "Fatigue, weight gain and heavy bleeding overlap with hypothyroidism, which is common in Indian women in their forties and is a correctable cause of AUB-O; prolactin is not needed with regular cycles and no galactorrhoea.",
        expected: "Normal, 0.4-4.0 mIU/L; a raised TSH with heavy bleeding is treated with levothyroxine and the bleeding reassessed after 3 months before any further hormonal step.",
      },
      {
        test: "Prothrombin time, activated partial thromboplastin time and platelet count, with von Willebrand factor antigen, ristocetin cofactor activity and factor VIII only if the coagulopathy screen is positive",
        why: "A baseline coagulation profile is needed before endometrial biopsy or surgery, and in the 13% of women with heavy menstrual bleeding who have an inherited bleeding disorder the specific tests change management to tranexamic acid, desmopressin and a haematology referral.",
        expected: "Normal prothrombin time, aPTT and platelet count in this woman, whose four-question screen is negative; von Willebrand studies are deferred unless the screen becomes positive or the bleeding fails to respond to treatment.",
      },
      {
        test: "Transvaginal ultrasound in the first half of the cycle, with transabdominal views of the whole uterus",
        why: "It is the first-line imaging for AUB: it maps fibroids by number, size and FIGO type, measures endometrial thickness, looks for the features of adenomyosis and examines the ovaries, and it decides whether an LNG-IUS can be placed in an undistorted cavity.",
        expected: "A 4 cm posterior wall intramural fibroid (FIGO type 4) not indenting the cavity, an endometrial thickness of 9 mm on day 8, a normal junctional zone and normal ovaries; a type 0-2 submucosal fibroid or an indistinct cavity would call for saline sonohysterography or hysteroscopy.",
      },
      {
        test: "Endometrial sampling by office pipelle biopsy, or hysteroscopy with directed biopsy if the sample is inadequate or a focal lesion is suspected",
        why: "She is under 45 but obese, with heavy bleeding persisting for 8 months, and she is about to start hormonal therapy - each of these is an indication in NICE NG88 and the FOGSI recommendations, and no ultrasound appearance replaces tissue in this setting.",
        expected: "Proliferative or secretory endometrium without hyperplasia; hyperplasia without atypia would be treated with an LNG-IUS and rebiopsied at 6 months, while atypical hyperplasia or carcinoma means referral for hysterectomy at a centre with gynaecological oncology.",
      },
      {
        test: "Cervical screening by VIA or Pap smear, with HPV testing where available",
        why: "She is 42 and has never been screened, so this visit is the screening opportunity; the test is not for the bleeding, and a visibly abnormal cervix would need a punch biopsy rather than cytology.",
        expected: "VIA negative or cytology negative for an intraepithelial lesion; a positive VIA or an abnormal smear leads to colposcopy and biopsy, and does not alter the treatment of the heavy bleeding unless a lesion is found.",
      },
    ],
    management: [
      {
        heading: "Treat the anaemia as part of the treatment, not as an afterthought",
        points: [
          "**Oral iron first if she can tolerate it:** ferrous ascorbate or ferrous sulphate giving 100 mg of elemental iron once daily or on alternate days, on an empty stomach or with a source of vitamin C, away from tea and calcium, continued for 3 months after the haemoglobin has normalised to rebuild ferritin; warn about black stools and manage constipation rather than allowing her to stop.",
          "**Intravenous iron is indicated here** because the haemoglobin is below 8 g/dL with continuing heavy loss and oral iron has already failed on tolerance: ferric carboxymaltose 1000 mg (up to 20 mg/kg by infusion, not more than 1000 mg a week) over 15 minutes with a second dose after a week if the calculated deficit demands it, or iron sucrose 200 mg on alternate days to the calculated total dose.",
          "**Transfusion is reserved** for haemodynamic instability, active heavy bleeding with a haemoglobin under 7 g/dL, or symptomatic cardiac decompensation; it does not treat iron deficiency, and each unit raises the haemoglobin by only about 1 g/dL.",
          "Single-dose albendazole 400 mg, dietary counselling on pulses, green leafy vegetables and citrus with meals, and a haemoglobin check at 4 weeks (an expected rise of 1-2 g/dL) and at 3 months, with ferritin at 3 months.",
        ],
      },
      {
        heading: "Control the bleeding and choose the medical option",
        points: [
          "**For the current cycle, while the investigations are completed:** tranexamic acid 1 g orally three times a day for the first 3-5 days of bleeding, with mefenamic acid 500 mg three times a day from the day before the expected period through the heavy days - together they reduce loss by about half, are non-hormonal, and do not interfere with the biopsy.",
          "**If bleeding is heavy while awaiting the biopsy**, cyclical norethisterone 5 mg three times a day from day 5 to day 26 for 2-3 cycles will control it; the luteal-phase-only regimen (day 19-26) does not work for ovulatory heavy bleeding and must not be prescribed.",
          "**Once the cavity is shown to be undistorted and the histology benign, the LNG-IUS 52 mg is first-line:** it reduces menstrual loss by 70-95%, lasts 5-8 years, is the only medical option that competes with hysterectomy on satisfaction in trials, and works with an intramural fibroid of this size; counsel that irregular spotting for the first 3-6 months is expected and is not failure.",
          "**Combined oral contraceptive pills are acceptable but second choice:** at 42 as a non-smoker she is WHO MEC Category 2 for age 40 or more and Category 2 for a BMI of 30 or more, so a pill may be used with blood pressure monitoring, but she does not need contraception and the venous thromboembolism risk is higher than with the LNG-IUS.",
          "**Injectable DMPA** 150 mg every 3 months produces amenorrhoea in about half by one year and is an option if the device is refused; a **GnRH agonist** (leuprolide 3.75 mg monthly for 3-6 months, with add-back) is reserved for correcting anaemia and shrinking the fibroid before planned surgery because of bone loss.",
        ],
      },
      {
        heading: "When to refer to the gynaecologist and what to ask for",
        points: [
          "**Refer the same day** for haemodynamic instability, a haemoglobin under 7 g/dL with continuing heavy bleeding, or a positive pregnancy test with pain; **refer within 2 weeks** for postmenopausal bleeding, a suspicious cervix, or a biopsy showing atypical hyperplasia or carcinoma, which needs a gynaecological oncology centre.",
          "**Refer for hysteroscopic surgery** when the ultrasound shows an endometrial polyp or a FIGO type 0-2 submucosal fibroid, because hysteroscopic polypectomy or myomectomy often cures the bleeding outright and preserves the uterus.",
          "**Refer for a surgical opinion** after a genuine trial of medical treatment - usually 3-6 months of the LNG-IUS or of two medical options - has failed, when a fibroid is over 5 cm or growing, when there are pressure symptoms on the bladder or bowel, when adenomyosis has failed hormonal control, or when the woman has made an informed choice for definitive surgery.",
          "Ask for the right operation, in the order of increasing invasiveness that the examiner expects: hysteroscopic resection, endometrial ablation for a completed family with a normal cavity, myomectomy for a woman who wishes to keep her uterus, and hysterectomy only after an LNG-IUS trial and a benign biopsy have been documented.",
          "Write a referral letter that carries the haemoglobin trend, the iron given with dates, the ultrasound report with the FIGO fibroid type, the biopsy result, the medical treatments tried with doses and duration, and her own stated preference about surgery.",
        ],
      },
      {
        heading: "Follow-up in family practice",
        points: [
          "Give her a menstrual diary or a pictorial blood loss assessment chart and review at 4 weeks for the haemoglobin and the tolerance of iron, at the first period on treatment, and at 3 months to decide whether the chosen option is working - a fall to 3-4 pads a day and a haemoglobin above 10 g/dL is success.",
          "After LNG-IUS insertion review at 6 weeks to check the threads and to counsel through the spotting phase; the device is replaced at 5 years when used for heavy bleeding (8 years for contraception alone), and the ultrasound is repeated only if the symptoms change.",
          "Reassess the endometrium if the bleeding changes character or persists despite treatment, and remember that a fibroid that grows after the menopause or a uterus that enlarges rapidly needs referral for suspected leiomyosarcoma.",
          "Use the contact for the rest of preventive care: weight management and a fasting glucose or HbA1c given the BMI of 31, blood pressure and lipids, cervical screening on schedule and clinical breast examination, and anticipate the perimenopausal transition with its own pattern of AUB-O in the next few years.",
        ],
      },
    ],
    viva: [
      {
        q: "The rule says biopsy at 45 and above. Why are you doing a biopsy in a 42-year-old?",
        a: "Because the age threshold is only one of the triggers. Below 45 the endometrium is sampled when there is persistent AUB with unopposed oestrogen exposure - obesity, PCOS or chronic anovulation - when medical treatment has failed, when there is a risk factor such as Lynch syndrome, or before hormonal treatment when the risk is raised; she is obese, has bled for 8 months and is about to start hormonal therapy, so three of those apply.",
      },
      {
        q: "What is the difference between menorrhagia and heavy menstrual bleeding, and which term should I write?",
        a: "Menorrhagia was defined by a measured loss above 80 mL per cycle, which no clinic ever measured; heavy menstrual bleeding under FIGO 2018 is excessive menstrual blood loss that interferes with the woman's physical, emotional, social or material quality of life. FIGO asks us to abandon menorrhagia, metrorrhagia and dysfunctional uterine bleeding, so the answer book should say heavy menstrual bleeding and classify it by PALM-COEIN.",
      },
      {
        q: "Would you put a levonorgestrel intrauterine system into a uterus with a fibroid?",
        a: "Yes, provided the cavity is not distorted - a FIGO type 3 to 8 fibroid does not prevent it, and trials show good control of bleeding with intramural fibroids. A type 0, 1 or 2 submucosal fibroid distorts the cavity, raises the expulsion rate and is better resected hysteroscopically first; expulsion is also somewhat higher when the uterus is much enlarged, so I would counsel her and check the threads at 6 weeks.",
      },
      {
        q: "How do you prescribe norethisterone for heavy menstrual bleeding, and why does the luteal-phase course fail?",
        a: "Norethisterone 5 mg three times a day from day 5 to day 26 of the cycle, for 2 to 3 cycles, reduces loss by about 80% in the short term because it converts the endometrium into a thin, stable lining for the whole cycle. Giving it only from day 19 to day 26 in ovulatory women adds progestogen to an endometrium that already has its own luteal progesterone and does nothing to the loss, which is why the trials show no benefit.",
      },
      {
        q: "When do you give intravenous iron, and how do you dose it?",
        a: "When the haemoglobin is below 8 g/dL, when oral iron is not tolerated or has failed after 4 weeks, when the loss is continuing faster than oral iron can replace it, or when surgery is planned within a few weeks. Ferric carboxymaltose is given as 1000 mg in a single 15-minute infusion, not exceeding 20 mg/kg or 1000 mg in a week, with a second dose a week later if the calculated deficit demands it; iron sucrose is given as 200 mg on alternate days to the calculated total, and the haemoglobin is expected to rise by about 2 g/dL in 3-4 weeks.",
      },
      {
        q: "She has had a tubectomy. Why waste a pregnancy test?",
        a: "Because tubectomy fails in about 0.5 per 100 women in the first year and failures continue to accumulate for a decade, a third of them ectopic, which is the diagnosis that kills in a woman with bleeding; a urine pregnancy test costs a few rupees and takes 3 minutes. It is also the first mark on the examiner's sheet for any woman of reproductive age with abnormal bleeding.",
      },
      {
        q: "Give me the FIGO classification of fibroids and tell me which types cause bleeding.",
        a: "Type 0 is a pedunculated intracavitary fibroid, type 1 is submucosal with less than 50% intramural, type 2 submucosal with 50% or more intramural, type 3 is intramural but in contact with the endometrium, type 4 is purely intramural, type 5 subserosal with 50% or more intramural, type 6 subserosal with less than 50% intramural, type 7 pedunculated subserosal, and type 8 covers other sites such as cervical or parasitic fibroids; hybrid types are written with both numbers, for example 2-5. Types 0 to 2, and to a lesser degree type 3, are the ones that reliably cause heavy bleeding.",
      },
      {
        q: "Which of your patients would you send for hysterectomy?",
        a: "The woman with atypical hyperplasia or carcinoma on biopsy; the woman whose bleeding has failed a proper trial of the LNG-IUS or of two medical options; the woman with a large or symptomatic fibroid or adenomyosis not amenable to hysteroscopic surgery or ablation who has completed her family; and the woman who, having been genuinely offered the alternatives, makes an informed choice for it. I would document the LNG-IUS trial and the benign biopsy in the referral, because a hysterectomy done for heavy bleeding without both is the commonest criticism of Indian practice.",
      },
    ],
    pitfalls: [
      "Presenting the anaemia as the diagnosis and the bleeding as its cause: the examiner wants the bleeding classified by PALM-COEIN, with the anaemia as the complication that sets the urgency.",
      "Skipping the urine pregnancy test because she is sterilised, or skipping the speculum examination because the history 'was typical of fibroids' - a cervical growth presents with exactly this story.",
      "Starting a combined pill, a progestogen or an LNG-IUS in an obese woman over 40 with 8 months of bleeding without first sampling the endometrium.",
      "Prescribing norethisterone only in the luteal phase, or tranexamic acid throughout the cycle instead of on the bleeding days.",
      "Treating the iron deficiency with a 2-week course of tablets and no ferritin, no deworming and no follow-up haemoglobin, so that the anaemia is still there when she comes back for surgery.",
      "Advising hysterectomy at the first visit, or agreeing to it on the family's demand, without an LNG-IUS trial, a benign biopsy and a written record that the alternatives were offered.",
    ],
    references: [
      "FIGO Systems 1 and 2 for abnormal uterine bleeding in the reproductive years, Munro et al, International Journal of Gynecology and Obstetrics, 2018 revision",
      "NICE NG88 Heavy Menstrual Bleeding: Assessment and Management, 2018 (updated 2021)",
      "FOGSI Good Clinical Practice Recommendations on Abnormal Uterine Bleeding, 2017",
      "ACOG Practice Bulletin 128: Diagnosis of Abnormal Uterine Bleeding in Reproductive-Aged Women, 2012",
      "Anaemia Mukt Bharat operational guidelines, MoHFW, Government of India, 2018",
      "Shaw's Textbook of Gynaecology, 18th edition, 2024 - abnormal uterine bleeding and fibroids",
      "Jeffcoate's Principles of Gynaecology, 9th edition, 2020 - clinical examination in gynaecology",
    ],
  },
  {
    id: "gynaecology-case-2",
    title: "OSCE: contraceptive counselling for a breastfeeding woman 8 weeks after delivery",
    kind: "osce",
    subjectId: "gynaecology",
    opening:
      "Station instruction: 'Mrs R, a 26-year-old para 2 live 2, delivered a healthy boy by an uncomplicated vaginal delivery 8 weeks ago, is exclusively breastfeeding and has not menstruated since the delivery. She has come to the primary health centre with the baby for the 10-week immunisation and says she does not want another child for at least 3 years. Counsel her on contraception. You have 8 minutes, and the examiner will ask questions in the last 2.'",
    minutes: 8,
    frequency: "core",
    sections: [
      {
        heading: "Reading the station and the first minute",
        points: [
          "Read the stem twice and extract the four facts that fix the eligibility categories before you speak: 8 weeks postpartum, exclusively breastfeeding, amenorrhoeic, and a wish to space for 3 years - together they mean that combined hormonal methods are WHO MEC Category 3, that every progestogen-only method and both intrauterine devices are Category 1, and that sterilisation is not what she is asking for.",
          "Greet her by name, introduce yourself with your role, confirm who is with her and whether she wants them present, and ask permission to discuss her family planning - the GATHER sequence (greet, ask, tell, help, explain, return) is what the mark sheet is built on.",
          "Open with her plan rather than with a method: 'You said you would like a gap of about 3 years before the next child - tell me what you have thought about, and what you or your friends have used before.' Her prior experience and her fears about a method are worth more than any brochure.",
          "Congratulate her on exclusive breastfeeding and say at once that it matters for contraception too, because it is protecting her now and it shapes which methods are best for her; this earns the LAM mark early and reassures her that breastfeeding will not be interrupted.",
          "Say aloud that no blood test, no pelvic examination and no smear is needed before she can start most methods, so that the examiner hears that you know the WHO position on unnecessary barriers.",
        ],
      },
      {
        heading: "The history that decides eligibility: the WHO MEC checklist",
        points: [
          "Breastfeeding in detail: whether the baby is fed only on breast milk, day and night, with no water or top feeds, whether any bleeding has occurred since the lochia stopped, and when she expects to go back to work or to start top feeds - the three conditions of the lactational amenorrhoea method are being checked one at a time.",
          "The delivery: vaginal, uncomplicated, no fever or offensive discharge in the puerperium (puerperal sepsis makes an IUCD Category 4), no postpartum haemorrhage or transfusion, and the date of the 6-week check with the blood pressure recorded there.",
          "The checklist for hormonal methods, asked as plain questions: headaches with flashing lights or one-sided weakness (migraine with aura), high blood pressure in or outside pregnancy, a clot in the leg or lung in her or a first-degree relative, jaundice or liver disease, a breast lump, diabetes, smoking, and tablets for tuberculosis or epilepsy; each is asked and each answer is stated.",
          "The checklist for an IUCD: unexplained vaginal bleeding, pelvic pain, abnormal discharge, a partner with urethral discharge or other symptoms, more than one partner for either of them, and any previous IUCD and what happened with it.",
          "Whether intercourse has resumed, whether any method has been used since delivery, her weight and a recorded blood pressure, and finally her own preferences - a method she controls, one that needs no daily action, one that keeps her periods, or one that stops them - because the counselling has to end in her choice, not yours.",
        ],
      },
      {
        heading: "Excluding pregnancy and explaining the lactational amenorrhoea method",
        points: [
          "Apply the WHO criteria for being reasonably certain that a woman is not pregnant: she is within 6 months of delivery, fully breastfeeding and amenorrhoeic, so she meets one criterion outright and a pregnancy test is not required to start any method today; the other criteria are no intercourse since delivery or the last period, within 4 weeks postpartum, within 7 days of the start of a period, within 7 days of an abortion, or correct and consistent use of a reliable method.",
          "Explain LAM in her language: as long as the baby is under 6 months, she has had no period, and the baby is fed only breast milk day and night with no long gaps, her chance of pregnancy is about 2 per 100 women; the moment any one of the three changes she needs another method the same day, and the safest plan is to start the next method before that happens.",
          "Give the practical triggers that end LAM in Indian households - the first period, top feeds or water at 4 months, returning to farm or factory work, the baby sleeping through the night, or the baby falling ill and feeding less - so that she knows what to watch for rather than a rule she cannot apply.",
          "Say that fertility can return before the first period, because ovulation precedes menstruation, and that the woman who waits for a period to start contraception is the woman who presents with an unplanned pregnancy at 5 months postpartum.",
          "Explain dual protection in one sentence: none of the methods you are about to describe protects against sexually transmitted infection, so a condom is added whenever either partner may be at risk, and condoms are free from the ASHA and the health centre.",
        ],
      },
      {
        heading: "Presenting the methods with their MEC categories",
        points: [
          "Order the options by effectiveness and say the category for each: the copper IUCD 380A - Category 1 at 4 weeks or more after delivery, 10 years, no hormone, no effect on milk, failure under 1 per 100; the LNG-IUS - Category 1, 5-8 years, lighter periods, available privately; injectable DMPA (Antara) - Category 1 at 6 weeks or more while breastfeeding, every 3 months, failure 4 per 100 in typical use.",
          "The progestogen-only pill - Category 1 from 6 weeks, taken every day at the same time with a 3-hour window, though not part of the national basket; Chhaya (centchroman 30 mg) - the programme's non-hormonal weekly pill, safe in breastfeeding after 6 weeks, twice a week for 12 weeks and then once a week; the etonogestrel implant - Category 1, 3 years, private sector only.",
          "The combined pill Mala-N is the one she must not be started on today: breastfeeding between 6 weeks and 6 months is Category 3, because oestrogen may reduce milk volume and the clotting risk of the puerperium has not fully settled; from 6 months it becomes Category 2 and can be considered if she prefers a pill she has used before.",
          "Condoms - Category 1, the only method with STI protection, 13 per 100 typical-use failure, and best used alongside another method rather than alone for a 3-year gap; sterilisation is not offered, because it is permanent and she wants to space and not to limit.",
          "Give effectiveness in a form she can picture: with an IUCD fewer than 1 in 100 and with an injectable about 4 in 100 women become pregnant in a year; with pills about 7 in 100 because of missed tablets; with condoms alone about 13 in 100; and with nothing about 85 in 100.",
          "Check understanding after the list, not after each method: 'Of these, which two would you like me to tell you more about?' - the mark sheet rewards a shared decision, and a candidate who describes eight methods and never lets her speak loses it.",
        ],
      },
      {
        heading: "Helping her choose and counselling on the copper IUCD she picks",
        points: [
          "When she chooses the copper IUCD, say why it fits: it needs nothing from her for 10 years, does not touch her milk or her hormones, can be removed on the day she wants to conceive with immediate return of fertility, and can be inserted today because she is more than 4 weeks postpartum and reasonably not pregnant.",
          "Explain how it is put in: a speculum and bimanual examination first, a few minutes of cramping, a trained provider using a no-touch technique, and then a check of the threads; explain that it works mainly by preventing the sperm from reaching and fertilising the egg, not by causing abortion, because that belief is the commonest reason for refusal.",
          "Counsel on the expected side effects and their time course: heavier and more painful periods for the first 3-6 months once her periods return, spotting between periods early on, and a 3-5% chance of expulsion in the first year, highest in the first 3 months and often noticed as the threads being longer or absent.",
          "Teach the warning signs with the PAINS mnemonic - Period late or missed, Abdominal pain especially with fever, Infection or unusual discharge, Not feeling well with fever or chills, String missing or shorter - and tell her that any of these means coming in the same day rather than waiting for the ASHA.",
          "Fix the follow-up: a visit after her first period or at 6 weeks, whichever comes first, to check the threads and the bleeding pattern, then only if there are problems; write the type of device and the dates of insertion and expiry on her card.",
        ],
      },
      {
        heading: "Closing the station",
        points: [
          "Ask her to repeat back the three things that matter - what she is protected by today, when she must come in, and what happens if she wants a baby sooner - because teach-back is a marked item and it is how you find the misunderstanding you missed.",
          "Offer a condom supply for dual protection, tell her where the ASHA and the sub-centre fit in for resupply and doorstep delivery, and link the next contact with the 14-week immunisation visit.",
          "Document the counselling: the methods discussed, the MEC category assigned, that pregnancy was reasonably excluded on the WHO criteria, her choice, the consent for insertion, and the follow-up date.",
          "Thank her, invite questions from the husband or mother-in-law if she wants them included, and close with the sentence that shows the examiner the station's point: 'You are well protected now by breastfeeding, and the IUCD will take over from today so that nothing depends on the day the first period comes.'",
          "If time is short, the items that must not be dropped are the MEC category for the combined pill, the three LAM conditions, the choice being hers, the warning signs and the follow-up date.",
        ],
      },
    ],
    summaryStatement:
      "This is a 26-year-old para 2 live 2, 8 weeks after an uncomplicated vaginal delivery, exclusively breastfeeding and amenorrhoeic, with no condition of concern on the WHO Medical Eligibility Criteria checklist and a wish to delay the next pregnancy by at least 3 years; she is currently protected by the lactational amenorrhoea method and is reasonably certain not to be pregnant, combined hormonal contraception is Category 3 for her until 6 months postpartum, every progestogen-only method and both intrauterine devices are Category 1, and after counselling on the full range she has chosen a copper IUCD 380A for insertion today, with condoms for dual protection and a review after her first period.",
    differential: [
      {
        diagnosis: "Copper IUCD 380A inserted today as an interval device (WHO MEC Category 1 at 4 weeks or more postpartum)",
        forIt:
          "The most effective reversible method in the national basket, 10 years of cover for a 3-year plan with immediate return of fertility on removal, no hormone and no effect on breast milk, free at the health centre, and insertable today because she is beyond 4 weeks and reasonably not pregnant.",
        againstIt:
          "Needs a trained provider and a pelvic examination, periods when they return may be heavier and more painful for 3-6 months, expulsion is 3-5% in the first year, and she must be able to recognise missing threads and infection; it is Category 3 to insert between 48 hours and 4 weeks postpartum and Category 4 with puerperal sepsis, neither of which applies here.",
      },
      {
        diagnosis: "Injectable DMPA 150 mg (Antara) every 3 months (Category 1 at 6 weeks or more while breastfeeding)",
        forIt:
          "Highly effective, private, needs no daily action, has no effect on milk, can be started today at 8 weeks under the programme schedule, and the amenorrhoea it produces in half of users by a year suits many breastfeeding women.",
        againstIt:
          "Irregular spotting early and a return of fertility delayed by 9-12 months after the last injection, which is acceptable for a 3-year gap but must be said; weight gain of 1-2 kg a year, a reversible fall in bone density, and the need to return every 3 months with a grace period of only 4 weeks late.",
      },
      {
        diagnosis: "A pill she takes herself: the progestogen-only pill daily (Category 1 from 6 weeks) or Chhaya (centchroman) weekly",
        forIt:
          "Under her own control, stopped the day she wants to conceive with no delay in fertility, no effect on milk, and Chhaya is free in the programme and needs only a weekly tablet after the first 12 weeks.",
        againstIt:
          "The progestogen-only pill has a 3-hour window and a typical-use failure of 7 per 100, and is not part of the national programme basket; Chhaya causes delayed or absent periods in some users and is avoided in polycystic ovary syndrome and chronic liver or kidney disease; both depend on remembering tablets with a new baby in the house.",
      },
      {
        diagnosis: "Combined oral pill Mala-N (Category 3 now, Category 2 from 6 months postpartum) - deferred, not refused",
        forIt:
          "Familiar, free, gives regular predictable cycles and can be started from 6 months postpartum if she then prefers a daily pill; from 6 months while breastfeeding it is Category 2.",
        againstIt:
          "Between 6 weeks and 6 months in a breastfeeding woman it is Category 3 - the risks usually outweigh the benefits because oestrogen may reduce milk volume and the puerperal thrombosis risk has not fully settled - so it must not be started today, and a candidate who prescribes it fails the station's key item.",
      },
    ],
    investigations: [
      {
        test: "Blood pressure measurement",
        why: "The only examination WHO requires before a hormonal method; hypertension of 160/100 mmHg or more makes combined methods Category 4 and DMPA Category 3, and 140-159/90-99 mmHg makes combined methods Category 3 and DMPA Category 2.",
        expected: "Normal, below 140/90 mmHg; a raised reading in the puerperium is rechecked and, if persistent, moves her to a progestogen-only or intrauterine method and to evaluation for hypertension.",
      },
      {
        test: "Urine pregnancy test - only if the WHO criteria for being reasonably certain she is not pregnant are not met",
        why: "A fully breastfeeding amenorrhoeic woman under 6 months postpartum meets the criteria and needs no test; if she has started top feeds, had bleeding, or had unprotected intercourse more than 2 weeks ago outside LAM, a test is done before an IUCD or an injectable.",
        expected: "Negative; a test cannot exclude a conception within the last 2 weeks, so a woman who does not meet the criteria starts a hormonal method with condoms for 7 days (2 days for the progestogen-only pill) and repeats the test in 2 weeks, while IUCD insertion waits.",
      },
      {
        test: "Speculum and bimanual pelvic examination, immediately before IUCD insertion only",
        why: "Required to confirm uterine involution, size and position and to exclude purulent cervicitis, pelvic tenderness or an undiagnosed mass before the device is placed; it is not required before pills, injectables or condoms, and demanding it is a barrier.",
        expected: "A normally involuted, anteverted, mobile, non-tender uterus with a healthy cervix and no discharge; purulent cervicitis or pelvic tenderness makes insertion Category 4 until treated, and a distorted cavity makes it Category 4 permanently.",
      },
      {
        test: "Haemoglobin",
        why: "Not an eligibility test for any method, but a postnatal anaemia check is part of the 6-week visit, and iron deficiency anaemia makes the copper IUCD Category 2 because it may increase menstrual loss, while hormonal methods remain Category 1 and may help.",
        expected: "11 g/dL or more; an anaemic woman is treated with iron, the finding is discussed rather than used to refuse the copper device, and an LNG-IUS or DMPA is offered as an alternative that reduces bleeding.",
      },
      {
        test: "Assessment of sexually transmitted infection risk by history, with syndromic examination for discharge if indicated",
        why: "Current purulent cervicitis or gonococcal or chlamydial infection makes IUCD insertion Category 4, a very high individual likelihood of exposure is Category 3, and the general increased risk of STI is only Category 2; laboratory screening is not required in a low-risk mutually monogamous woman.",
        expected: "No discharge, no cervical motion tenderness and no partner symptoms in this woman; where infection is found it is treated syndromically with the partner and the IUCD is inserted 3 months later, with condoms and DMPA bridging the gap.",
      },
      {
        test: "Cervical screening by VIA or Pap smear, offered opportunistically",
        why: "She is not yet in the national screening age band, which begins at 30, so it is mentioned only as a future opportunity; screening is never a precondition for any method, and refusal does not delay the IUCD.",
        expected: "Not done at this visit; when it is due, cervical intraepithelial neoplasia is Category 1 for the copper device and Category 2 for the LNG-IUS, whereas cervical cancer awaiting treatment is Category 4 for insertion.",
      },
    ],
    management: [
      {
        heading: "The structure the examiner is marking",
        points: [
          "**GATHER:** Greet her and ensure privacy; Ask about her plans, breastfeeding, health and preferences; Tell her about the methods with their effectiveness and categories; Help her choose; Explain the chosen method in full; Return - fix the follow-up. REDI (rapport, exploration, decision-making, implementing the decision) is the equivalent used in Indian training material and either may be quoted.",
          "**Apply the MEC as you go, aloud:** 'Because you are breastfeeding and it is 8 weeks, the pill with oestrogen is a Category 3 for you until 6 months - not advised - while the injection, the progestogen pill and both devices are Category 1, no restriction.' The examiner is listening for the categories used correctly, not recited.",
          "**The two-category rule for peripheral workers:** 1 and 2 mean use the method, 3 and 4 mean do not use it; say it once, because it is how the ANM at the sub-centre will apply what you decide.",
          "Keep the decision hers: present the range, answer the two she asks about, and never lead with the method the programme or a target favours; a woman who chooses her own method continues it, and the station rewards the candidate who asks 'what would suit you' before 'I would suggest'.",
        ],
      },
      {
        heading: "Insertion of the copper IUCD and the instructions that go with it",
        points: [
          "**Timing:** she is 8 weeks postpartum, beyond the 48-hour postpartum window and past the Category 3 interval from 48 hours to 4 weeks, so an interval insertion is done today under Category 1 without waiting for a period, since pregnancy is reasonably excluded by LAM.",
          "**Pre-insertion:** consent, a bimanual examination for size and position, a speculum examination for discharge, sounding the uterus (6-8 cm is expected at 8 weeks), and insertion of the Cu-T 380A by the withdrawal technique with a no-touch load, followed by trimming the threads to 3-4 cm and showing her how to feel them after each period.",
          "**Post-insertion:** paracetamol or ibuprofen for cramps, expected spotting for a few days, no restriction on intercourse or breastfeeding, the PAINS warning signs, and a card recording the device type, the date of insertion and the year of expiry (10 years for the 380A, 5 years for the 375).",
          "**Follow-up:** after the first period or at 6 weeks to check the threads, then only as needed; missing threads mean a pregnancy test, an ultrasound to locate the device and an abdominal radiograph if it is not seen, and pelvic infection is treated with the device in place unless there is no improvement at 48-72 hours.",
          "**If she wants to conceive** the device is removed at any time with immediate return of fertility; if a pregnancy occurs with the device in place and the threads are visible, it is removed to reduce miscarriage and preterm birth, after an ectopic pregnancy has been excluded.",
        ],
      },
      {
        heading: "If she chooses a hormonal or a pill method instead",
        points: [
          "**DMPA (Antara):** the first injection today, 150 mg deep intramuscular, with no back-up needed because she is fully breastfeeding and amenorrhoeic under 6 months; the next dose in 3 months with a grace of 2 weeks early to 4 weeks late, and pre-injection counselling on spotting, later amenorrhoea, weight gain and the 9-12 month delay in return of fertility.",
          "**Progestogen-only pill:** one tablet every day at the same time with no break, started today with no back-up in her situation; a tablet more than 3 hours late (12 hours for desogestrel) means take it at once and use condoms for 48 hours, and vomiting within 2 hours counts as a missed pill.",
          "**Chhaya (centchroman 30 mg):** twice a week on fixed days for 12 weeks, then once a week on the same day; safe in breastfeeding beyond 6 weeks; warn about delayed periods, and check for polycystic ovary syndrome, cervical hyperplasia, recent jaundice or tuberculosis before prescribing.",
          "**Mala-N (combined pill):** not before 6 months while breastfeeding; from 6 months it is Category 2 and can be started on day 1-5 of a period without back-up, or at any time with 7 days of condoms once pregnancy is excluded, and the ACHES warning symptoms are taught at that visit.",
          "**Switching rule:** if she moves from LAM to any method after top feeds have begun or a period has returned, the start is treated as in a non-breastfeeding woman - within 7 days of the start of a period no back-up, otherwise condoms for 7 days (2 days for the progestogen-only pill) after pregnancy is reasonably excluded.",
        ],
      },
      {
        heading: "Dual protection, the programme, and the postnatal contacts that must not be wasted",
        points: [
          "Give condoms (Nirodh) alongside whichever method she chooses, for STI protection and as a bridge for any gap; a woman with a partner at risk of infection is counselled about that separately and privately, and a copper IUCD is still only Category 2 for a general increased risk of STI.",
          "Use the home-based newborn care visits (days 3, 7, 14, 21, 28 and 42) and the immunisation contacts at 6, 10 and 14 weeks as the fixed points at which the ASHA re-checks LAM, resupplies condoms or Chhaya and reminds her of the DMPA date; the postpartum period is where the Indian method mix is most often lost.",
          "Under Mission Parivar Vikas the ASHA can deliver contraceptives to the door and the sub-centre stocks Antara and Chhaya; the postpartum IUCD within 48 hours of delivery was the missed opportunity in this case, and should be counselled antenatally in the next pregnancy.",
          "Record the counselling in the MCP card and the family planning register with the method, the MEC category and the follow-up date, so that whoever sees her next continues the plan rather than starting again.",
        ],
      },
    ],
    viva: [
      {
        q: "Define the four WHO MEC categories and tell me how they are used at a sub-centre.",
        a: "Category 1 - no restriction on use; Category 2 - the advantages generally outweigh the theoretical or proven risks; Category 3 - the risks usually outweigh the advantages, so the method is not usually recommended unless nothing more appropriate is available or acceptable, and it then needs clinical judgement and close follow-up; Category 4 - an unacceptable health risk, the method must not be used. Where clinical judgement is limited the categories collapse to two: 1 and 2 mean use, 3 and 4 mean do not use.",
      },
      {
        q: "Why is the combined pill Category 3 for this woman, and when does it change?",
        a: "In a breastfeeding woman combined hormonal contraception is Category 4 under 6 weeks postpartum because the risk of venous thromboembolism is highest then and oestrogen can affect milk, Category 3 from 6 weeks to under 6 months because of the possible effect on milk volume and infant growth, and Category 2 from 6 months. In a woman who is not breastfeeding it is Category 3 under 21 days, or 4 if she also has thrombosis risk factors, Category 2 from 21 to 42 days, or 3 with risk factors, and Category 1 after 42 days.",
      },
      {
        q: "What are the three conditions of the lactational amenorrhoea method, and how effective is it?",
        a: "The woman is amenorrhoeic, the infant is fully or nearly fully breastfed day and night with no long intervals and no regular supplements, and the infant is under 6 months old; when all three hold the pregnancy rate is about 2 per 100 women over 6 months. When any one fails, and in practice by 6 months for everyone, another method is needed at once, and the best practice is to start it before the conditions break.",
      },
      {
        q: "How can you be reasonably sure a woman is not pregnant without a test?",
        a: "WHO lists six criteria, of which any one is enough: no intercourse since the last normal period or the delivery; correct and consistent use of a reliable method; within 7 days of the start of a normal period; within 4 weeks postpartum; fully or nearly fully breastfeeding, amenorrhoeic and under 6 months postpartum; or within 7 days of an abortion or miscarriage. If none applies a pregnancy test is done, remembering that it cannot detect a conception within the last 2 weeks.",
      },
      {
        q: "When can an IUCD be inserted after delivery, and what are the categories at each point?",
        a: "Within 10 minutes of delivery of the placenta, or at any time up to 48 hours postpartum including at caesarean section, both Category 1 for the copper device - the postpartum IUCD; between 48 hours and 4 weeks it is Category 3 because of the higher expulsion and perforation risk in an involuting uterus; from 4 weeks it is Category 1 again as an interval insertion. Puerperal sepsis is Category 4 at any time. The LNG-IUS follows the same timing, except that it is Category 2 in the first 48 hours in a breastfeeding woman.",
      },
      {
        q: "Suppose she had told you she gets migraine with visual aura. What changes?",
        a: "Migraine with aura is Category 4 for combined hormonal contraception at any age because of the ischaemic stroke risk, so Mala-N would be off the table permanently and not merely deferred. The progestogen-only pill, DMPA, the implant and the LNG-IUS are Category 2 to start, becoming Category 3 if aura develops while on them, and the copper IUCD is Category 1 - so her choice today is unchanged.",
      },
      {
        q: "What must a woman be told before her first injection of DMPA?",
        a: "That the bleeding pattern will change - irregular spotting in the first months and no periods at all in about half of users by one year - and that this is expected and not harmful; that she may gain 1-2 kg a year; that fertility returns after a delay of up to 9-12 months from the last injection; that she must return every 3 months, with a window of 2 weeks early to 4 weeks late; that it does not protect against STIs; and that it is Category 2 under 18 and over 45 because of a reversible fall in bone density.",
      },
      {
        q: "Her mother-in-law asks why you are not simply doing the operation. What do you say?",
        a: "That sterilisation is a permanent method for a couple that has decided to have no more children, and this couple wants a gap and not an end; that the Government standards require the woman to be between 22 and 49 with at least one child over 1 year, and her own written consent, not her husband's or her mother-in-law's; and that when they do decide to limit, no-scalpel vasectomy for the husband is the safer and simpler operation, with a semen analysis at 3 months to confirm that it has worked.",
      },
    ],
    pitfalls: [
      "Prescribing Mala-N at 8 weeks 'because the 6-week check is over' - in a breastfeeding woman it is Category 3 until 6 months, and this is the single item most stations are built around.",
      "Demanding a pregnancy test, a pelvic examination or a smear before an injectable or a pill in a woman who meets the WHO criteria for being reasonably certain she is not pregnant.",
      "Counselling the method you or the programme prefer, describing eight methods without a pause, and never asking what she wants or what she has understood.",
      "Dismissing LAM as unreliable, or the opposite error - letting her rely on it after top feeds have begun, after a period, or beyond 6 months.",
      "Forgetting dual protection with condoms, and forgetting to say that the IUCD prevents fertilisation rather than causing abortion when the family raises the objection.",
      "Reciting MEC categories without the timing that qualifies them - the copper IUCD is Category 1 at 8 weeks but Category 3 at 2 weeks, and the combined pill is Category 3 now but Category 2 at 6 months - the category always comes with its condition.",
    ],
    references: [
      "WHO Medical Eligibility Criteria for Contraceptive Use, 5th edition, 2015, with 2024 update",
      "WHO Selected Practice Recommendations for Contraceptive Use, 3rd edition, 2016",
      "Family Planning: A Global Handbook for Providers, WHO and Johns Hopkins Bloomberg School of Public Health, 2022 edition",
      "Reference Manual for IUCD Services and PPIUCD Reference Manual, MoHFW, Government of India, 2018",
      "Reference Manual for Injectable Contraceptive MPA (Antara programme), Family Planning Division, MoHFW, Government of India, 2016",
      "Standards for Female and Male Sterilisation Services, Family Planning Division, MoHFW, Government of India, 2006",
      "Shaw's Textbook of Gynaecology, 18th edition, 2024 - contraception",
    ],
  },
];

const subject: Subject = {
  id: "gynaecology",
  title: "Gynaecology",
  blurb: "Abnormal bleeding, contraception, PCOS, infertility, discharge, menopause and cancer screening.",
  icon: "HeartPulse",
  papers: ["IV"],
  topics,
  cases,
};

export default subject;
