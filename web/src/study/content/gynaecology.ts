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
