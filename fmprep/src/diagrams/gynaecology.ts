/**
 * Diagrams for gynaecology, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "gynaecology-abnormal-uterine-bleeding": [
    {
      kind: "branch",
      heading: "PALM-COEIN: the FIGO causes of AUB",
      caption:
        "FIGO 2018 asks that menorrhagia, metrorrhagia and dysfunctional uterine bleeding be abandoned; write heavy menstrual bleeding, intermenstrual bleeding and AUB-O instead.",
      root: "AUB in a non-pregnant woman of reproductive age",
      arms: [
        {
          label: "PALM - structural causes",
          steps: [
            "AUB-P polyp - intermenstrual and postcoital bleeding",
            "AUB-A adenomyosis - heavy painful periods, bulky tender uterus",
            "AUB-L leiomyoma - subclassified L-SM submucosal and L-O other",
            "AUB-M malignancy or hyperplasia - endometrial biopsy confirms",
            "Visible on imaging or histology",
          ],
        },
        {
          label: "COEIN - non-structural causes",
          steps: [
            "AUB-C coagulopathy - 13% of heavy bleeders, usually von Willebrand",
            "AUB-O ovulatory dysfunction - PCOS, thyroid, perimenopause, obesity",
            "AUB-E endometrial - regular cycles, no lesion, a diagnosis of exclusion",
            "AUB-I iatrogenic - contraceptives, anticoagulants, copper IUCD",
            "AUB-N not otherwise classified - AV malformation, caesarean scar defect",
          ],
        },
        {
          label: "More than one category may coexist",
          tone: "warn",
          steps: [
            "A woman with a submucosal fibroid on warfarin is AUB-L(SM); I",
            "The notation records each category",
            "Marks are given for saying this, not for reciting the acronym",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Work-up of abnormal uterine bleeding",
      steps: [
        {
          label: "Urine pregnancy test in every woman",
          detail: "Whatever she says about contraception - miscarriage and ectopic are the diagnoses that kill",
          tone: "warn",
        },
        {
          label: "Quantify and ask the pattern",
          detail:
            "Pads a day, flooding, clots larger than a rupee coin, days lost. Regular heavy points to L, A, C or E; irregular to O; intermenstrual to the cervix",
        },
        {
          label: "Screen for coagulopathy",
          detail:
            "Heavy periods since menarche plus postpartum, surgical or dental bleeding, or two of bruising, epistaxis, gum bleeding, family history",
        },
        {
          label: "Speculum and bimanual examination",
          detail: "The cervix must be seen, not assumed, in every sexually active woman",
          tone: "warn",
        },
        {
          label: "CBC with smear and serum ferritin",
          detail:
            "Haemoglobin alone underestimates iron deficiency in India. Add TSH, prolactin or von Willebrand studies only if targeted",
        },
        {
          label: "Transvaginal ultrasound - first-line imaging",
          detail:
            "Transabdominal or transrectal in the virgin patient. Add saline sonohysterography or hysteroscopy if an intracavitary lesion is suspected",
        },
        {
          label: "Endometrial sampling if indicated",
          detail:
            "Age 45 or over with AUB; under 45 with persistent AUB and unopposed oestrogen risk; failed medical therapy; Lynch syndrome",
          tone: "decision",
        },
        {
          label: "Postmenopausal bleeding is a separate pathway",
          detail:
            "Carcinoma until proved otherwise: endometrial thickness 4 mm or less makes it very unlikely, over 4 mm mandates sampling",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Treating heavy menstrual bleeding",
      caption:
        "The commonest examiner criticism in India is hysterectomy done for heavy bleeding with no LNG-IUS trial and no endometrial biopsy - say you would do both first.",
      steps: [
        {
          label: "Iron replacement runs alongside everything",
          detail:
            "Elemental iron 100 mg daily for 3-6 months; IV iron sucrose or ferric carboxymaltose if Hb under 8 g/dL or surgery is imminent",
        },
        {
          label: "LNG-IUS 52 mg - first line",
          detail:
            "Releases 20 microgram/24 h, lasts 5-8 years, cuts loss 70-95%, treats dysmenorrhoea; needs an undistorted cavity",
          tone: "good",
        },
        {
          label: "Tranexamic acid with mefenamic acid",
          detail:
            "Tranexamic acid 1 g PO TDS-QDS for the first 3-5 bleeding days cuts loss 40-50%; mefenamic acid 500 mg TDS adds 25-35%. The choice when she wants to conceive",
        },
        {
          label: "Combined oral contraceptive",
          detail:
            "Cuts loss 35-50% and gives cycle control. Apply WHO MEC - migraine with aura, or age 35 or more with 15 or more cigarettes a day, is Category 4",
        },
        {
          label: "Norethisterone 5 mg PO TDS, day 5 to 26",
          detail: "About 80% short-term. Prescribing it only day 19-26 is the common error and is ineffective",
          tone: "warn",
        },
        {
          label: "GnRH agonist with add-back, 3-6 months",
          detail: "Leuprolide 3.75 mg IM monthly - preoperative correction of anaemia only, because of bone loss",
        },
        {
          label: "Hysteroscopic resection or ablation",
          detail:
            "Resection for a polyp or FIGO type 0-2 submucosal fibroid. Ablation only when the family is complete, and contraception continues",
        },
        {
          label: "Hysterectomy - the last resort",
          detail: "Failed medical treatment, disease not amenable to conservative surgery, or her informed choice",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Acute heavy uterine bleeding",
      steps: [
        {
          label: "Two wide-bore cannulae and crystalloid",
          detail: "Treat the shock first and diagnose second",
          tone: "warn",
        },
        {
          label: "Cross-match and transfuse",
          detail: "Tachycardia, systolic BP under 90 mmHg, syncope or Hb under 7 g/dL means resuscitate and admit",
        },
        { label: "Exclude pregnancy on the same visit", detail: "And its complications" },
        {
          label: "MPA 20 mg PO TDS for 7 days then taper",
          detail: "Or a monophasic combined pill three times a day for 7 days",
        },
        {
          label: "Add tranexamic acid 1 g PO TDS",
          detail: "Intravenous conjugated oestrogen 25 mg 4-6 hourly where it is available",
        },
        {
          label: "Foley balloon tamponade if drugs fail",
          detail: "Curettage is a haemostatic manoeuvre, not a treatment - the bleeding returns",
          tone: "warn",
        },
        {
          label: "Make a definitive plan before discharge",
          detail: "Biopsy, then LNG-IUS or the appropriate operation",
          tone: "good",
        },
      ],
    },
  ],

  "gynaecology-contraception": [
    {
      kind: "ladder",
      heading: "WHO Medical Eligibility Criteria",
      caption:
        "Where clinical judgement is limited, the four categories collapse to two: 1 and 2 mean use the method, 3 and 4 mean do not. Categories are assigned separately for initiation and for continuation.",
      steps: [
        { label: "Category 1 - no restriction on use", detail: "Use the method", tone: "good" },
        {
          label: "Category 2 - advantages outweigh risks",
          detail: "Use the method, generally with routine follow-up",
        },
        {
          label: "Category 3 - risks usually outweigh benefit",
          detail:
            "Not usually recommended unless nothing more appropriate is available or acceptable, then with close follow-up",
          tone: "warn",
        },
        { label: "Category 4 - unacceptable health risk", detail: "The method must not be used", tone: "warn" },
      ],
    },
    {
      kind: "compare",
      heading: "Combined hormonal contraception: the restrictions",
      caption:
        "In a healthy woman with no answers of concern on the WHO checklist, no laboratory test and no pelvic examination is needed before starting the pill, condoms or injectables.",
      columns: ["Condition", "Category", "Reason"],
      rows: [
        ["Migraine with aura, any age", "4", "Sharp rise in ischaemic stroke risk"],
        ["Age 35 or more, 15 or more cigarettes a day", "4", "Arterial disease risk multiplies"],
        ["BP 160/100 mmHg or more", "4", "Stroke and myocardial infarction risk"],
        ["Current or past venous thromboembolism", "4", "Oestrogen is prothrombotic"],
        ["Breastfeeding under 6 weeks postpartum", "4", "Thrombosis risk plus effect on milk"],
        ["Current breast cancer", "4", "Hormone-responsive tumour"],
        ["BP 140-159/90-99 mmHg", "3", "Elevated but lesser arterial risk"],
        ["Age 35 or more, under 15 cigarettes a day", "3", "Same risk, smaller magnitude"],
        ["Breastfeeding 6 weeks to under 6 months", "3", "Possible effect on milk volume"],
        ["Rifampicin or enzyme-inducing anticonvulsants", "3", "Reduced contraceptive efficacy"],
        ["Uncomplicated obesity, BMI 30 or more", "2", "Small absolute rise in VTE risk"],
      ],
    },
    {
      kind: "flow",
      heading: "Missed pill rule for 30-35 microgram pills",
      caption:
        "Warn about ACHES - abdominal pain, chest pain, headache, eye problems, severe leg pain - which mean stop the pill and attend the same day.",
      steps: [
        {
          label: "One pill missed, under 48 hours late",
          detail: "Take it as soon as remembered, continue the pack, no extra protection needed",
          tone: "good",
        },
        {
          label: "Two or more missed, 48 hours or more",
          detail: "Take the most recent missed pill at once, discard the others, continue the pack",
          tone: "decision",
        },
        { label: "Condoms or abstinence for 7 days", tone: "warn" },
        {
          label: "Misses in week 1 with sex in past 5 days",
          detail: "Offer emergency contraception as well",
        },
        {
          label: "Misses in week 3",
          detail: "Finish the hormone tablets and skip the placebo or iron week - the hormone-free interval is what lets ovulation through",
        },
        {
          label: "Vomiting within 2 h or severe diarrhoea",
          detail: "Counts as a missed pill and follows the same rule",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Emergency contraception",
      caption:
        "No absolute contraindication other than known pregnancy, not teratogenic if a pregnancy already exists, and may be repeated if necessary - though it is less effective than a regular method.",
      columns: ["Option", "Window", "Effectiveness and what follows"],
      rows: [
        [
          "Copper IUCD",
          "Within 5 days of unprotected intercourse",
          "Failure under 0.1%, the most effective method; continues as 10 years of contraception - always offer it",
        ],
        [
          "Levonorgestrel 1.5 mg single dose",
          "Ideally within 72 h, declining to 120 h",
          "Delays or inhibits ovulation; quick-start a regular method with 7 days of condoms",
        ],
        [
          "Ulipristal acetate 30 mg",
          "Up to 120 h",
          "Alternative where available; wait 5 days before starting a progestogen",
        ],
      ],
    },
  ],

  "gynaecology-pcos": [
    {
      kind: "branch",
      heading: "Rotterdam criteria - two of three",
      caption:
        "PCOS is a diagnosis of exclusion. Every woman gets a 75 g oral glucose tolerance test at diagnosis and every 1-3 years, because HbA1c alone under-detects impaired glucose tolerance in this group.",
      root: "PCOS: any two of three, after the mimics are excluded",
      arms: [
        {
          label: "Oligo- or anovulation",
          steps: [
            "Cycles under 21 or over 35 days, or fewer than 8 a year",
            "From 1 to under 3 years post-menarche: under 21 or over 45 days",
            "Mid-luteal progesterone confirms it",
          ],
        },
        {
          label: "Hyperandrogenism",
          steps: [
            "Modified Ferriman-Gallwey score, acne, male-pattern alopecia",
            "Free testosterone, free androgen index or SHBG",
            "Cut-off 4-6 for South Asian women",
          ],
        },
        {
          label: "Polycystic ovarian morphology",
          steps: [
            "20 or more follicles of 2-9 mm in either ovary",
            "And/or ovarian volume 10 mL or more, on an 8 MHz or better transducer",
            "Never within 8 years of menarche; AMH is an adult alternative",
          ],
        },
        {
          label: "Exclude before you diagnose",
          tone: "warn",
          steps: [
            "TSH for thyroid disease",
            "Prolactin for hyperprolactinaemia",
            "Follicular early-morning 17-hydroxyprogesterone; above 2 ng/mL needs ACTH stimulation",
            "Do not order an LH to FSH ratio - it is not a criterion and is neither sensitive nor specific",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "PCOS or an androgen-secreting tumour",
      columns: ["Feature", "PCOS", "Androgen-secreting tumour"],
      rows: [
        ["Onset of hirsutism", "Slow and gradual over years", "Rapid, over a few months"],
        ["Virilisation", "Absent", "Clitoromegaly, deepening voice, muscle bulk"],
        ["Total testosterone", "Normal or mildly raised", "Above 150 ng/dL (5.2 nmol/L)"],
        ["DHEAS", "Normal or mildly raised", "More than twice the upper limit of normal"],
        ["Next step", "Rotterdam criteria, OGTT, lipids, BP, weight", "Urgent imaging of the ovaries and adrenals"],
        [
          "The error to avoid",
          "Ordering an LH to FSH ratio to confirm it",
          "Starting the pill or spironolactone, which masks the signs while the tumour grows",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "PCOS when pregnancy is not desired",
      steps: [
        {
          label: "Lifestyle for every woman - first line",
          detail:
            "A 500-750 kcal daily deficit with 150 minutes of moderate activity a week, targeting 5-10% weight loss, which restores ovulation in a majority",
          tone: "good",
        },
        {
          label: "Combined oral contraceptive",
          detail:
            "First-line drug therapy: regularises cycles, protects the endometrium, raises SHBG. No preparation is superior; avoid 35 microgram ethinylestradiol with cyproterone first line",
        },
        {
          label: "Metformin 500 mg OD to 1500-2000 mg/day",
          detail: "For impaired glucose tolerance or metabolic features, or where the pill is refused. Not a hirsutism treatment",
        },
        {
          label: "Cyclical progestogen or LNG-IUS",
          detail:
            "If the pill is refused, medroxyprogesterone 10 mg daily for 10-14 days every 2-3 months - more than 3-4 months of amenorrhoea is an endometrial risk",
        },
        {
          label: "Cosmetic measures plus 6 months of the pill",
          detail: "Laser is the most effective; judge the effect only at 6 months, because the hair cycle is long",
        },
        {
          label: "Spironolactone 50-100 mg daily",
          detail: "Only with reliable contraception - it feminises a male fetus. Check potassium",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "PCOS when pregnancy is desired",
      steps: [
        {
          label: "Preconception care first",
          detail:
            "Folic acid 400 microgram daily (5 mg if BMI is high or there is diabetes), rubella immunity, treat thyroid disease",
        },
        {
          label: "Weight loss of 5-10%",
          detail: "Restores ovulation in most and materially raises the live birth rate - say it before any drug",
          tone: "good",
        },
        {
          label: "Letrozole 2.5 mg daily, days 3-7",
          detail:
            "First line, escalating to 5 and 7.5 mg. Higher ovulation, pregnancy and live-birth rates than clomiphene, most of all in obese women",
          tone: "good",
        },
        {
          label: "Clomiphene 50 mg daily, days 2-6",
          detail: "Acceptable alternative where letrozole is unavailable, increasing to 100 and 150 mg",
        },
        {
          label: "Stop after about 6 ovulatory cycles",
          detail: "No benefit beyond that point; risk of ovarian hyperstimulation and multiple pregnancy",
          tone: "warn",
        },
        {
          label: "Metformin as an adjunct only",
          detail: "Alone it gives lower live-birth rates than letrozole and is not a primary ovulation induction agent",
        },
      ],
    },
  ],

  "gynaecology-vaginal-discharge-pid": [
    {
      kind: "compare",
      heading: "Separating the three causes of vaginitis",
      caption:
        "The bedside kit settles most cases: a speculum, narrow-range pH paper, a drop of saline and a drop of 10% potassium hydroxide, and a microscope. pH alone divides the field.",
      columns: ["Feature", "Bacterial vaginosis", "Vulvovaginal candidiasis", "Trichomoniasis"],
      rows: [
        ["Discharge", "Thin, homogeneous, grey-white", "Thick, curdy, white on a red wall", "Profuse, frothy, greenish-yellow"],
        ["Odour", "Fishy, worse after intercourse", "None", "Offensive"],
        ["Itching and inflammation", "Absent", "Intense pruritus and soreness", "Soreness, dysuria, vulval erythema"],
        ["Vaginal pH", "Above 4.5", "Normal, 4.0-4.5", "Above 4.5"],
        ["Whiff test with 10% KOH", "Positive", "Negative", "May be positive"],
        [
          "Microscopy",
          "Clue cells over 20% on saline mount",
          "Budding yeast and pseudohyphae on KOH",
          "Motile flagellated trichomonads on saline",
        ],
        ["Sexually transmitted", "No", "No", "Yes"],
        ["Treat the partner", "No", "No", "Yes, always"],
        [
          "First-line treatment",
          "Metronidazole 400 mg PO BD for 7 days",
          "Fluconazole 150 mg PO single dose",
          "Metronidazole 2 g PO once, or 400 mg BD for 7 days",
        ],
        [
          "In pregnancy",
          "Metronidazole 400 mg BD 7 days if symptomatic",
          "Topical clotrimazole 7 days, avoid oral fluconazole",
          "Metronidazole, and treat the partner",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Syndromic management of vaginal discharge",
      caption:
        "Doxycycline is contraindicated in pregnancy - azithromycin 1 g replaces it, and a pregnant woman with PID or cervicitis is admitted for a parenteral regimen.",
      root: "Woman with vaginal discharge in a syndromic clinic",
      arms: [
        {
          label: "Vaginitis alone, cervix normal",
          steps: ["Kit 2, green", "Secnidazole 2 g single dose", "Fluconazole 150 mg single dose"],
        },
        {
          label: "Cervicitis, risk factors, or cervix not seen",
          steps: ["Add Kit 1, grey", "Azithromycin 1 g single dose", "Cefixime 400 mg single dose"],
        },
        {
          label: "Lower abdominal pain with tenderness",
          tone: "warn",
          steps: [
            "This is pelvic inflammatory disease - Kit 6, yellow",
            "Cefixime 400 mg single dose",
            "Doxycycline 100 mg BD for 14 days",
            "Metronidazole 400 mg BD for 14 days",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Pelvic inflammatory disease: recognise and treat",
      caption:
        "Admit for parenteral therapy if she is pregnant, severely ill or vomiting, if a surgical emergency cannot be excluded, if there is a tubo-ovarian abscess, or if outpatient treatment fails at 72 hours.",
      steps: [
        {
          label: "Urine pregnancy test in every case",
          detail: "Ectopic pregnancy is the differential that kills; a negative test is the first step, not an afterthought",
          tone: "warn",
        },
        {
          label: "CDC minimum criteria on bimanual",
          detail:
            "Cervical motion, uterine or adnexal tenderness in a sexually active woman with pelvic pain and no other cause found",
          tone: "decision",
        },
        {
          label: "Treat empirically at once",
          detail: "Do not wait for the chlamydia NAAT - waiting for certainty costs tubes",
          tone: "warn",
        },
        {
          label: "Ceftriaxone 500 mg IM single dose",
          detail: "Cefixime 400 mg PO where injection is not feasible - this is what NACO Kit 6 provides",
        },
        {
          label: "Doxycycline 100 mg BD for 14 days",
          detail: "Plus metronidazole 500 mg BD for 14 days, with analgesia and rest",
        },
        {
          label: "Treat partners of the last 60 days",
          detail: "Even if asymptomatic. Condoms or abstinence until 7 days after both complete treatment",
        },
        {
          label: "Compulsory review at 72 hours",
          detail:
            "No improvement means the diagnosis is wrong, the organism resistant, or an abscess has formed - re-image and admit, do not repeat the prescription",
          tone: "decision",
        },
        {
          label: "Screen for HIV and syphilis",
          detail:
            "Review again at 2-4 weeks, offer cervical screening if due, and record the episode - it changes future contraceptive counselling",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "NACO colour-coded STI and RTI kits",
      columns: ["Kit", "Colour", "Syndrome", "Contents"],
      rows: [
        [
          "Kit 1",
          "Grey",
          "Urethral discharge, cervicitis, anorectal discharge",
          "Azithromycin 1 g single dose plus cefixime 400 mg single dose",
        ],
        [
          "Kit 2",
          "Green",
          "Vaginitis - discharge without cervicitis",
          "Secnidazole 2 g single dose plus fluconazole 150 mg single dose",
        ],
        [
          "Kit 3",
          "White",
          "Genital ulcer, non-herpetic",
          "Benzathine penicillin 2.4 MU IM plus azithromycin 1 g",
        ],
        [
          "Kit 4",
          "Blue",
          "Genital ulcer, non-herpetic, penicillin-allergic",
          "Doxycycline 100 mg BD for 15 days plus azithromycin 1 g",
        ],
        ["Kit 5", "Red", "Genital ulcer, herpetic", "Acyclovir 400 mg TDS for 7 days"],
        [
          "Kit 6",
          "Yellow",
          "Lower abdominal pain and pelvic inflammatory disease",
          "Cefixime 400 mg single dose, metronidazole 400 mg BD and doxycycline 100 mg BD, both 14 days",
        ],
        [
          "Kit 7",
          "Black",
          "Inguinal bubo - lymphogranuloma venereum, chancroid",
          "Doxycycline 100 mg BD for 21 days plus azithromycin 1 g",
        ],
      ],
    },
  ],

  "gynaecology-infertility-workup": [
    {
      kind: "branch",
      heading: "Where the cause lies in an infertile couple",
      caption:
        "Investigate after 12 months of regular unprotected intercourse; after 6 months if she is 35 or older; and at once at any age with amenorrhoea, known tubal disease, previous pelvic infection or surgery, stage III-IV endometriosis, or a known testicular problem.",
      root: "Failure to conceive after 12 months of regular unprotected intercourse",
      arms: [
        {
          label: "Male factor - 30 to 40%",
          steps: [
            "Semen analysis is the first and cheapest test",
            "Reported against WHO 6th edition (2021) limits",
            "Repeat an abnormal sample after at least 3 months",
          ],
        },
        {
          label: "Ovulatory dysfunction - 25 to 30%",
          steps: [
            "WHO Group II, overwhelmingly PCOS, is about 85% of anovulation",
            "Group I hypogonadotropic, Group III primary ovarian insufficiency",
            "Mid-luteal progesterone above 3 ng/mL confirms ovulation",
          ],
        },
        {
          label: "Tubal and peritoneal - 25 to 35%",
          steps: [
            "Pelvic inflammatory disease, and distinctively in India genital tuberculosis",
            "Genital TB is 5-15% of female infertility in Indian series",
            "HSG on day 6-11, or laparoscopy where tubal disease is likely",
          ],
        },
        {
          label: "Uterine and cervical - 5 to 10%",
          steps: [
            "Transvaginal ultrasound, then hysteroscopy if the cavity is abnormal",
            "Septum, submucosal fibroid, polyp, synechiae, T-shaped cavity",
          ],
        },
        {
          label: "Unexplained - 10 to 15%",
          steps: [
            "Both partners contribute in 20-30% of couples",
            "See them together and say out loud that it is not her fault",
            "Normal fecundability is 20-25% per cycle; 85% conceive within 12 months",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "First-line work-up in family practice",
      steps: [
        {
          label: "See the couple together",
          detail:
            "Coital history is the commonest omission: frequency, spermicidal lubricants, dyspareunia, vaginismus, prolonged separation for work",
        },
        {
          label: "Semen analysis first",
          detail:
            "2-7 days abstinence, masturbation into a clean wide-mouthed container, whole ejaculate, to the laboratory within an hour near body temperature",
          tone: "good",
        },
        {
          label: "Confirm ovulation",
          detail:
            "Mid-luteal progesterone 7 days before the expected period - day 21 of a 28-day cycle, day 28 of a 35-day cycle. Above 3 ng/mL confirms ovulation",
        },
        {
          label: "TSH in all, prolactin if oligomenorrhoea",
          detail: "Treat hypothyroidism to a TSH below 2.5 mIU/L before conception",
        },
        {
          label: "Transvaginal ultrasound",
          detail:
            "Uterine contour, fibroids and FIGO type, endometrial thickness, polycystic morphology, endometrioma, hydrosalpinx, antral follicle count on day 2-5",
        },
        {
          label: "Tubal test: HSG on day 6-11",
          detail:
            "After bleeding stops and before ovulation. Free peritoneal spill confirms patency; cornual spasm mimics a proximal block, so confirm before calling a tube occluded",
          tone: "warn",
        },
        {
          label: "Laparoscopy with chromopertubation",
          detail:
            "The reference standard, and the first tubal test where tubal or peritoneal disease is likely - it diagnoses and treats adhesions and endometriosis together",
        },
      ],
    },
    {
      kind: "compare",
      heading: "WHO 6th edition (2021) semen limits",
      caption:
        "These are the fifth centile of fertile men, not a threshold of fertility. One spermatogenic cycle is about 74 days, so a single abnormal result never makes a diagnosis.",
      columns: ["Parameter", "Lower reference limit", "Term for the abnormality"],
      rows: [
        ["Semen volume", "1.4 mL", "Hypospermia or aspermia"],
        ["Sperm concentration", "16 million per mL", "Oligozoospermia"],
        ["Total sperm number", "39 million per ejaculate", "Oligozoospermia"],
        ["Total motility", "42%", "Asthenozoospermia"],
        ["Progressive motility", "30%", "Asthenozoospermia"],
        ["Vitality on eosin exclusion", "54%", "Necrozoospermia"],
        ["Normal morphology, strict criteria", "4%", "Teratozoospermia"],
        ["Sperm count on two samples", "None seen in a centrifuged pellet", "Azoospermia"],
      ],
    },
    {
      kind: "flow",
      heading: "Genital tuberculosis in the infertile woman",
      steps: [
        {
          label: "Suspect it on the pattern",
          detail: "Poor menstrual flow, hypomenorrhoea, secondary amenorrhoea, chronic pelvic pain, in an otherwise well woman",
        },
        {
          label: "Look for the HSG signs",
          detail: "Beaded or rigid pipe-stem tubes, cornual block, shrunken cavity with synechiae",
        },
        {
          label: "Premenstrual endometrial aspirate",
          detail: "AFB smear, mycobacterial culture, CBNAAT, and histopathology for granulomas",
          tone: "good",
        },
        {
          label: "Never treat on a Mantoux alone",
          detail:
            "A tuberculin test or IGRA marks exposure, which is near-universal in India; empirical antitubercular therapy here is harmful practice examiners expect you to condemn",
          tone: "warn",
        },
        {
          label: "Treat proven disease with standard ATT",
          detail:
            "Tubal reconstructive surgery in tuberculous tubes gives very poor pregnancy rates with a high ectopic risk",
        },
      ],
    },
  ],

  "gynaecology-dysmenorrhoea-endometriosis-fibroids": [
    {
      kind: "compare",
      heading: "Primary versus secondary dysmenorrhoea",
      caption:
        "Primary dysmenorrhoea is prostaglandin F2 alpha driven: give mefenamic acid 500 mg TDS regularly for 2-3 days starting before or at the onset of pain, not as required.",
      columns: ["Feature", "Primary dysmenorrhoea", "Secondary dysmenorrhoea"],
      rows: [
        ["Age at onset", "6-24 months after menarche, adolescence", "Usually after 25 years, years after menarche"],
        [
          "Timing of pain",
          "Starts with or just before flow, lasts 8-72 hours",
          "Begins days before flow and persists after it stops",
        ],
        ["Course over time", "Static or improves with age and parity", "Progressive, worsens cycle on cycle"],
        [
          "Associated symptoms",
          "Nausea, vomiting, diarrhoea, headache",
          "Deep dyspareunia, dyschezia, heavy or irregular bleeding, infertility",
        ],
        [
          "Pelvic examination",
          "Normal",
          "Fixed uterus, nodular uterosacrals, adnexal or uterine mass, tenderness",
        ],
        ["Response to NSAIDs and the pill", "Good in over 80%", "Often incomplete or absent"],
        [
          "Underlying cause",
          "Prostaglandin F2 alpha excess, no pathology",
          "Endometriosis, adenomyosis, fibroids, PID, IUCD, obstructive anomaly",
        ],
        ["First investigation", "None needed if the picture is typical", "Pregnancy test and transvaginal ultrasound"],
      ],
    },
    {
      kind: "compare",
      heading: "Endometriosis, adenomyosis and fibroid",
      columns: ["Feature", "Endometriosis", "Adenomyosis", "Leiomyoma"],
      rows: [
        ["Typical woman", "Nulliparous, 25-35 years", "Parous, 35-50 years", "30-45 years, any parity"],
        [
          "Dominant symptom",
          "Cyclical pain, deep dyspareunia, infertility",
          "Heavy painful periods",
          "Heavy periods and pressure symptoms",
        ],
        [
          "Uterus on examination",
          "Normal size, fixed and retroverted",
          "Symmetrically bulky, globular, tender",
          "Enlarged, firm, irregular, non-tender",
        ],
        [
          "Key extra sign",
          "Nodular tender uterosacrals, pouch of Douglas nodules",
          "Tenderness maximal just before menses",
          "Mass moves with the cervix and cannot be felt separately",
        ],
        [
          "Imaging",
          "Ground-glass endometrioma on TVS; MRI for deep disease",
          "Junctional zone over 12 mm on MRI",
          "Well-defined myometrial mass, FIGO type 0-8 on TVS",
        ],
        [
          "First-line medical treatment",
          "NSAID plus continuous COC, dienogest 2 mg, or LNG-IUS",
          "LNG-IUS",
          "Tranexamic acid and NSAID; LNG-IUS if the cavity is undistorted",
        ],
        [
          "Effect on fertility",
          "Reduced; treat by surgery or ART, not by suppression",
          "Reduced, less clearly than endometriosis",
          "Reduced only when the cavity is distorted",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "FIGO leiomyoma subclassification",
      caption:
        "50-80% of fibroids are asymptomatic. Suspect leiomyosarcoma (0.1-0.3%) if a fibroid grows rapidly or grows at all after the menopause, and do not morcellate it.",
      root: "Leiomyoma - FIGO types 0 to 8",
      arms: [
        {
          label: "Submucosal - types 0, 1 and 2",
          tone: "warn",
          steps: [
            "Type 0 entirely intracavitary and pedunculated",
            "Type 1 with less than 50% intramural extension",
            "Type 2 with 50% or more",
            "Only submucosal fibroids reliably cause heavy menstrual bleeding",
            "Hysteroscopic resection often cures the bleeding outright",
          ],
        },
        {
          label: "Intramural or transmural - types 3 to 5",
          steps: [
            "Bleeding and bulk symptoms",
            "LNG-IUS is WHO MEC Category 1 while the cavity is undistorted",
            "Myomectomy if fertility is wanted, with recurrence in 15-30%",
          ],
        },
        {
          label: "Subserosal - types 6 and 7",
          steps: [
            "Pressure effects: frequency, retention, constipation, backache, leg oedema",
            "A pedunculated one can tort - sudden pain with a tender mass",
          ],
        },
        {
          label: "Type 8 - other",
          steps: ["Cervical, parasitic or broad ligament fibroids"],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Endometriosis pain, step by step",
      caption:
        "ESHRE 2022 accepts a clinical and imaging diagnosis, so treatment starts now. Symptom severity correlates poorly with stage, and CA-125 must not be used to diagnose or exclude the disease.",
      steps: [
        {
          label: "NSAID plus a hormonal method",
          detail: "Combined oral contraceptive taken continuously to induce amenorrhoea, after checking WHO MEC",
          tone: "good",
        },
        {
          label: "Dienogest 2 mg daily",
          detail: "Or medroxyprogesterone 10-30 mg daily, or depot 150 mg every 3 months",
        },
        {
          label: "LNG-IUS",
          detail: "Particularly effective for rectovaginal disease and for recurrence after surgery",
        },
        {
          label: "GnRH agonist for 6 months only",
          detail:
            "Leuprolide 3.75 mg IM or goserelin 3.6 mg monthly, always with add-back - bone density falls about 6% in six months. Not a fertility treatment",
          tone: "warn",
        },
        {
          label: "Laparoscopic excision or ablation",
          detail:
            "Excise the endometrioma capsule rather than drain it - drainage recurs in over 80% - but excision costs ovarian reserve, so individualise",
        },
        {
          label: "Hysterectomy with BSO and excision of disease",
          detail: "Definitive surgery for refractory pain once the family is complete",
        },
      ],
    },
  ],

  "gynaecology-cervical-cancer-screening": [
    {
      kind: "flow",
      heading: "Natural history and where we intervene",
      caption:
        "WHO 90-70-90 by 2030: 90% of girls fully vaccinated by 15, 70% of women screened with a high-performance test at 35 and 45, 90% with disease treated. Elimination is an incidence under 4 per 100,000 women-years.",
      steps: [
        {
          label: "Infection with a high-risk HPV type",
          detail: "About 14 oncogenic genotypes; 16 and 18 cause about 70% worldwide and over 80% in Indian series",
        },
        {
          label: "80-90% clear within 2 years",
          detail:
            "Cleared by cell-mediated immunity - which is why HPV testing is not used below age 30, where transient infection wrecks specificity",
          tone: "good",
        },
        {
          label: "A minority persist",
          detail: "Vaccination at 9-14 years prevents acquisition but cannot clear an established infection",
        },
        {
          label: "CIN1, then CIN2 and CIN3",
          detail: "Screening finds disease here - this whole interval is the opportunity",
          tone: "decision",
        },
        {
          label: "Invasive cervical cancer",
          detail: "Latency from infection to invasion is 10-20 years",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "The three screening tests",
      caption:
        "India: VIA once every 5 years for all women aged 30-65, delivered through Health and Wellness Centres (MoHFW 2016). WHO 2021: HPV DNA from age 30 every 5-10 years, and from age 25 every 3-5 years in women living with HIV.",
      columns: ["Test", "Sensitivity for CIN2+", "Specificity", "Strength", "Limitation"],
      rows: [
        [
          "VIA with 5% acetic acid",
          "60-70%",
          "About 85%",
          "Cheap, no laboratory, immediate result, permits single-visit screen and treat",
          "Subjective and operator dependent; invalid after menopause as the squamocolumnar junction recedes",
        ],
        [
          "Cytology, Pap or liquid based",
          "50-60% per test",
          "90-95%",
          "Bethesda 2014 reporting; identifies glandular lesions",
          "Needs a cytology laboratory; no result at the visit; must be repeated 3-yearly",
        ],
        [
          "High-risk HPV DNA",
          "90-95%",
          "About 85% at age 30 and over",
          "Objective, self-collection possible, NPV over 99% so the interval extends to 5-10 years",
          "Costly; poor specificity below 30, so positives must be triaged",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Acting on a positive screen",
      caption:
        "Where follow-up is unreliable, screen and treat in one visit - in a multi-visit pathway 40-60% of screen-positive women never return. Test of cure is an HPV test at 12 months.",
      root: "Screen-positive woman: colposcopy with a directed punch biopsy",
      arms: [
        {
          label: "Ablation-eligible lesion",
          tone: "good",
          steps: [
            "Type 1 transformation zone with the whole squamocolumnar junction visible",
            "Lesion under 75% of the ectocervix and not extending into the canal",
            "No suspicion of invasive or glandular disease",
            "Thermal ablation at 100-120 degrees C for 20-40 seconds, or cryotherapy with a double freeze-thaw",
          ],
        },
        {
          label: "Not ablation-eligible",
          steps: [
            "LLETZ, which also provides a specimen",
            "Cold knife cone for suspected microinvasion, adenocarcinoma in situ, or deep canal disease",
            "Counsel about the raised risk of preterm birth after deep or repeat excision",
          ],
        },
        {
          label: "A visible friable growth",
          tone: "warn",
          steps: [
            "This is no longer a screening problem",
            "Punch biopsy from the edge of the lesion at the same visit",
            "Urgent gynaecological oncology referral",
            "Never accept a Pap smear or a course of antibiotics as the answer",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "HPV vaccination schedule",
      caption:
        "Recombinant L1 virus-like particle vaccines containing no viral DNA, so they cannot cause infection or warts. Observe the girl seated or lying for 15 minutes for vasovagal syncope. Vaccination never replaces screening.",
      columns: ["Group", "Schedule", "Note"],
      rows: [
        [
          "Girls 9-14 years, the primary target",
          "Two doses at 0 and 6 months",
          "Given before sexual debut, when antibody response is highest. WHO SAGE 2022 accepts a single dose for ages 9-20",
        ],
        [
          "Age 15 years and above",
          "Three doses at 0, 1-2 and 6 months",
          "Catch-up is routine to 26 years, and reasonable to 45 years by shared decision-making",
        ],
        [
          "Immunocompromised or HIV positive",
          "Three doses at 0, 1-2 and 6 months",
          "Three doses at any age; screening continues from 25 years",
        ],
      ],
    },
  ],

  "gynaecology-menopause-hormone-therapy": [
    {
      kind: "compare",
      heading: "Choosing the hormone therapy regimen",
      caption:
        "The uterus decides the regimen. In a woman over 45 with typical symptoms the diagnosis is clinical - ordering an FSH is the error. MHT is not contraception: 12 months of amenorrhoea over 50, 24 months under 50.",
      columns: ["Situation", "Regimen", "Typical prescription"],
      rows: [
        [
          "Perimenopausal with a uterus, within 12 months of the last period",
          "Sequential combined - progestogen 12-14 days a month",
          "Transdermal oestradiol 25-50 microgram twice weekly with micronised progesterone 200 mg for 12-14 days, or an LNG-IUS",
        ],
        [
          "More than 12 months postmenopausal, uterus present",
          "Continuous combined, bleed-free",
          "Oestradiol valerate 1 mg or a patch, with micronised progesterone 100 mg daily",
        ],
        [
          "After hysterectomy",
          "Oestrogen alone",
          "Transdermal oestradiol, or oestradiol valerate 1-2 mg daily - no progestogen unless there is past endometriosis",
        ],
        [
          "Genitourinary syndrome alone, no flushes",
          "Local vaginal oestrogen",
          "Estriol 0.5-1 mg cream or a 10 microgram estradiol pessary, nightly for 2 weeks then twice weekly, indefinitely",
        ],
        [
          "Premature ovarian insufficiency",
          "Full replacement doses with a progestogen",
          "Higher doses than a woman of 55 needs, continued at least to about age 51",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Can she have hormone therapy?",
      caption:
        "Oral oestrogen roughly doubles VTE risk; transdermal at low dose does not. Combined therapy adds about 1 extra breast cancer per 1000 women per year of use beyond 5 years, and oestrogen alone showed no increase in the WHI.",
      root: "Woman with menopausal symptoms",
      arms: [
        {
          label: "Within the window - under 60 or 10 years",
          tone: "good",
          steps: [
            "Benefit-risk balance is favourable and coronary risk is not increased",
            "Transdermal oestradiol if obese, migraine, hypertension, gallbladder disease or thrombotic risk",
            "No arbitrary 5-year limit - annual review, lowest effective dose, taper to stop",
            "Tibolone 2.5 mg is a bleed-free alternative, but raises stroke risk over 60",
          ],
        },
        {
          label: "Outside the window",
          steps: [
            "Started over 60 or more than 10 years out, the same drug raises coronary and stroke risk",
            "Use non-hormonal treatment for flushes",
            "Local vaginal oestrogen remains available at any age",
          ],
        },
        {
          label: "Absolute contraindications",
          tone: "warn",
          steps: [
            "Undiagnosed abnormal vaginal bleeding",
            "Breast or other oestrogen-dependent malignancy",
            "Current or past venous thromboembolism, or known thrombophilia",
            "Active or recent arterial thromboembolic disease",
            "Active liver disease, untreated endometrial hyperplasia, pregnancy",
          ],
        },
        {
          label: "Cautions, not refusals",
          steps: [
            "Migraine with aura, gallstones, family history of breast cancer, fibroids, uncontrolled hypertension",
            "These argue for the transdermal route, not for withholding treatment",
            "Reflex refusal is why symptomatic Indian women go untreated",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Non-hormonal control of vasomotor symptoms",
      caption:
        "Baseline for every Indian postmenopausal woman: calcium 1000-1200 mg and vitamin D 800-1000 IU daily. For osteoporosis, alendronate 70 mg weekly or annual zoledronic acid is first-line drug treatment.",
      steps: [
        {
          label: "CBT and clinical hypnosis",
          detail: "Good trial evidence and no drug interaction. Phytoestrogens and black cohosh are inconsistent, and black cohosh carries a rare hepatotoxicity warning",
          tone: "good",
        },
        {
          label: "SSRI or SNRI",
          detail:
            "Paroxetine 7.5-20 mg, escitalopram 10-20 mg or venlafaxine 37.5-75 mg cut flushes 40-60%. Paroxetine and fluoxetine inhibit CYP2D6 and must be avoided on tamoxifen - venlafaxine is the safe choice",
          tone: "warn",
        },
        { label: "Gabapentin 300-900 mg at night", detail: "Particularly useful for night sweats" },
        { label: "Clonidine", detail: "Modest efficacy with troublesome side effects" },
      ],
    },
    {
      kind: "flow",
      heading: "Premature ovarian insufficiency",
      steps: [
        {
          label: "Amenorrhoea 4 months or more, under 40",
          detail: "Affects about 1% of women. Exclude pregnancy, and check prolactin and thyroid function first",
        },
        {
          label: "Two FSH values above 25-40 IU/L",
          detail: "Taken 4-6 weeks apart",
          tone: "decision",
        },
        {
          label: "Karyotype, FMR1, autoantibodies, DXA",
          detail: "Turner syndrome and its mosaics, fragile X premutation; a family history is present in 10-30%",
        },
        {
          label: "Hormone replacement is mandatory",
          detail:
            "This is replacement, not optional symptom relief - higher doses than at 55, a progestogen if she has a uterus, continued at least to about age 51",
          tone: "good",
        },
        {
          label: "Do not apply the WHI to a 35-year-old",
          detail: "The WHI mean age was 63; misapplying it is the error that leaves these women osteoporotic",
          tone: "warn",
        },
        {
          label: "Contraception is still needed",
          detail:
            "Spontaneous ovulation recurs in about 5%; oocyte donation is the established route to pregnancy, and fertility preservation is discussed before gonadotoxic treatment",
        },
        {
          label: "Calcium, vitamin D and weight-bearing exercise",
          detail: "Calcium 1000-1200 mg and vitamin D 800-1000 IU daily, smoking cessation, DXA surveillance",
        },
      ],
    },
  ],

  "gynaecology-uterine-prolapse": [
    {
      kind: "branch",
      heading: "The supports of the uterus",
      caption:
        "DeLancey level I is apical suspension by the uterosacral-cardinal complex, and its failure gives uterine descent, vault prolapse and enterocele. Level II is lateral attachment of the mid-vagina to the arcus tendineus, giving cystocele and rectocele. Level III is fusion of the distal vagina to the perineal body, giving urethrocele and a gaping introitus.",
      root: "What holds the uterus and vagina up",
      arms: [
        {
          label: "Primary - the active muscular floor",
          tone: "good",
          steps: [
            "Levator ani: pubococcygeus, puborectalis, iliococcygeus, plus coccygeus",
            "A tonic levator keeps the plate horizontal and the genital hiatus closed",
            "Perineal body and the perineal membrane support the lower vagina",
            "Nerve supply S3-S4; denervation in childbirth is one route to later prolapse",
          ],
        },
        {
          label: "Ligamentous or mechanical supports",
          steps: [
            "Cardinal, that is transverse cervical or Mackenrodt - the strongest single support",
            "Uterosacral - pulls the cervix back over the levator plate",
            "Pubocervical fascia slings the bladder base and anterior wall",
            "Rectovaginal fascia does the same posteriorly",
          ],
        },
        {
          label: "Weak or secondary - the classic trap",
          tone: "warn",
          steps: [
            "Round ligament maintains anteversion; it does not hold the uterus up",
            "Broad ligament is draped peritoneum and gives no support at all",
            "The old ventrosuspension operations that shortened it never cured prolapse",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "POP-Q stages and what to do",
      caption:
        "Measured on maximum Valsalva, in centimetres relative to the hymen, negative above and positive below, and staged by the leading edge. A C-to-D difference over about 4 cm means cervical elongation, which is what makes a Manchester repair the operation.",
      steps: [
        {
          label: "Stage 0 - no descent",
          detail:
            "Aa, Ba, Ap and Bp all at -3. Reassure; pelvic floor training if there are continence symptoms; prevention advice",
        },
        {
          label: "Stage I - more than 1 cm above the hymen",
          detail:
            "Baden-Walker grade 1. Usually incidental. Supervised pelvic floor muscle training for at least 16 weeks, lifestyle measures, treat cough and constipation",
        },
        {
          label: "Stage II - within 1 cm of the hymen",
          detail:
            "The stage at which the bulge is first felt. Floor training first line (NICE NG123), vaginal oestrogen, ring pessary; surgery if symptoms persist or she prefers it",
        },
        {
          label: "Stage III - more than 1 cm below the hymen",
          detail:
            "Less than (tvl - 2). Ring pessary, or shelf or Gellhorn if a ring will not stay, or surgery. Heal any ulcer first and check the post-void residual",
          tone: "warn",
        },
        {
          label: "Stage IV - complete eversion",
          detail:
            "Leading edge at or beyond (tvl - 2): procidentia, with decubitus ulcer, retention, recurrent infection and possible hydronephrosis",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Procidentia with hydronephrosis",
      caption:
        "The obstruction comes from kinking of the ureters as the uterus and cardinal ligaments descend through the levator hiatus, and it is usually reversible.",
      steps: [
        {
          label: "Catheterise the bladder",
          detail: "A post-void residual over about 100 mL confirms incomplete emptying",
          tone: "warn",
        },
        {
          label: "Reduce the prolapse and keep it reduced",
          detail: "A pessary or a pack relieves the ureteric obstruction",
          tone: "good",
        },
        {
          label: "Vaginal oestrogen for the decubitus ulcer",
          detail:
            "Estriol cream or a 10 microgram estradiol tablet nightly for 2 weeks then twice weekly, with saline or glycerine-acriflavine packs; treat secondary infection",
        },
        {
          label: "Recheck creatinine and ultrasound",
          detail: "After one to two weeks, before planning anything operative",
          tone: "decision",
        },
        {
          label: "Biopsy only a suspicious or unhealed ulcer",
          detail: "Indurated, friable, rolled or everted edges, or not healed after two to three weeks",
        },
        {
          label: "Then definitive surgery or colpocleisis",
          detail: "Operating on an unhealed, infected ulcer invites breakdown of the repair and fistula",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Choosing the operation",
      caption:
        "The ureter passes beneath the uterine artery about 1.5 to 2 cm lateral to the supravaginal cervix - water under the bridge - and is the structure most often injured at the uterine pedicle. Transvaginal mesh for vaginal wall prolapse is restricted to research settings.",
      columns: ["Operation", "Best indication", "Main caveat"],
      rows: [
        [
          "Vaginal hysterectomy with repair and McCall culdoplasty",
          "Uterovaginal prolapse in a woman who has completed her family",
          "Hysterectomy alone does not treat prolapse - re-suspend the apex or vault prolapse follows",
        ],
        [
          "Manchester (Fothergill) repair",
          "Younger woman with supravaginal cervical elongation who wants to keep her uterus",
          "Cervical stenosis, haematometra, subfertility, mid-trimester loss and preterm labour, difficult later cytology",
        ],
        [
          "Sacrospinous fixation or hysteropexy",
          "Vault prolapse, or a vault descending to the introitus at the end of a vaginal hysterectomy",
          "Place sutures 2 cm medial to the ischial spine to spare the pudendal nerve; right buttock pain is common",
        ],
        [
          "Anterior colporrhaphy or paravaginal repair",
          "Symptomatic cystocele or cystourethrocele",
          "The highest recurrence of all native-tissue repairs; fails again if the apex is not supported at the same time",
        ],
        [
          "Sacrocolpopexy, abdominal or laparoscopic",
          "Vault prolapse where durability matters, recurrent prolapse, a young or sexually active woman",
          "The most durable but the most morbid: presacral haemorrhage, mesh exposure, bowel obstruction",
        ],
        [
          "Le Fort partial colpocleisis",
          "Frail elderly woman with stage III-IV prolapse who does not wish to retain coital function",
          "Over 90% successful but irreversible; exclude cervical and endometrial disease first; may unmask stress incontinence",
        ],
      ],
    },
  ],
};

export default diagrams;
