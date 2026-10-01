import type { TopicRewrite } from "../index";

const rewrites: Record<string, TopicRewrite> = {
  "gynaecology-abnormal-uterine-bleeding": {
    "oneLiner": "Abnormal uterine bleeding (AUB) is bleeding from the uterine corpus that is abnormal in **frequency, regularity, duration or volume** in a non-pregnant woman of reproductive age; classify it with **FIGO PALM-COEIN**, rule out pregnancy first, biopsy the endometrium at **45 years or over** (or earlier with unopposed oestrogen), and treat heavy menstrual bleeding first with the **LNG-IUS**, then tranexamic acid, NSAIDs or hormones, before any surgery.",
    "sections": [
      {
        "heading": "Definition and the classification that matters",
        "points": [
          "**Normal menstruation (FIGO 2018)**: frequency **24-38 days**, cycle-to-cycle variation (shortest to longest) **7-9 days or less**, duration **8 days or less**, and a volume the woman herself does not find excessive. [FIGO 2018]",
          "**AUB** is uterine-corpus bleeding outside these limits in a non-pregnant woman of reproductive age; it is **acute** (heavy enough to need immediate intervention), **chronic** (present for most of the last 6 months) or **intermenstrual**. [FIGO 2018]",
          "**Heavy menstrual bleeding (HMB)** is excessive menstrual loss that **interferes with physical, social, emotional or material quality of life** - defined by impact, not by the old research threshold of 80 mL. [NICE NG88 2021]",
          "**Obsolete terms** - menorrhagia, metrorrhagia, menometrorrhagia, polymenorrhoea, oligomenorrhoea and **dysfunctional uterine bleeding** - should not be used; say HMB, intermenstrual bleeding, infrequent menses and AUB-O instead. [FIGO 2018]",
          "The one classification expected is **FIGO PALM-COEIN**: **PALM = structural** (Polyp, Adenomyosis, Leiomyoma, Malignancy and hyperplasia) and **COEIN = non-structural** (Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not otherwise classified). [FIGO 2018]",
          "**AUB-L** is subclassified by the **FIGO leiomyoma types 0-8**, and only **submucosal (types 0-2, L-SM)** fibroids reliably cause bleeding; a woman may carry more than one category, for example **AUB-L(SM); C** for fibroids plus warfarin. [FIGO 2018]",
          "**Bleeding in pregnancy, before menarche or after 12 months of menopausal amenorrhoea is not AUB** - each has its own pathway, and postmenopausal bleeding is endometrial cancer until proved otherwise. [FIGO 2018]",
          "**Burden in India**: NFHS-5 found **57% of women aged 15-49 anaemic**, so untreated HMB rapidly produces symptomatic iron deficiency. [NFHS-5 2021]"
        ]
      },
      {
        "heading": "Pathophysiology and pathoanatomy",
        "points": [
          "**Uterine anatomy**: the corpus has an inner **endometrium** (functional layer shed monthly, basal layer that regenerates it), a thick smooth-muscle **myometrium** whose contraction compresses vessels, and an outer serosa; the **junctional zone** is the inner myometrium disrupted in adenomyosis. [Berek and Novak 16e]",
          "**Blood supply**: the **uterine artery** (anterior division of the internal iliac) runs in the base of the broad ligament, **crosses above the ureter 1.5-2 cm lateral to the cervix** (\"water under the bridge\"), then gives arcuate, radial, basal and **spiral arterioles** - only the spiral arterioles supply the functional layer and respond to hormones. [Gray's 42e]",
          "**HPO axis**: the hypothalamus releases **GnRH in pulses every 60-90 minutes**, which drive the anterior pituitary to secrete **FSH and LH**; continuous GnRH (as with a GnRH agonist depot) instead **down-regulates** the receptors and shuts the axis down. [Speroff 9e]",
          "**Follicular phase**: FSH recruits a cohort of follicles; the dominant follicle's granulosa cells aromatise theca-cell androgens (LH-driven) into **oestradiol** (two-cell two-gonadotrophin theory), and oestradiol makes the endometrium **proliferate**. [Speroff 9e]",
          "**Ovulation**: a sustained oestradiol level above about **200 pg/mL for about 50 hours** switches negative feedback to **positive feedback**, triggering the **LH surge**; ovulation follows **34-36 hours after the surge begins** (10-12 hours after its peak). [Speroff 9e]",
          "**Luteal phase**: the corpus luteum secretes **progesterone** for a fixed **about 14 days**, turning the endometrium **secretory** and stabilising its stroma (decidualisation) - so cycle length varies because of the follicular, not the luteal, phase. [Speroff 9e]",
          "**Normal menstruation**: when the corpus luteum fails, **progesterone withdrawal** raises endometrial **prostaglandin F2-alpha**, matrix metalloproteinases and endothelin, causing spiral-arteriole **vasoconstriction**, ischaemia and orderly shedding of the whole functional layer at once. [Berek and Novak 16e]",
          "**Stopping menstrual flow** depends on platelet plugs and fibrin in the vessels, **myometrial contraction**, vasoconstriction and then oestrogen-driven **re-epithelialisation** from the basal layer - failure of any step causes heavy or prolonged flow. [Berek and Novak 16e]",
          "**AUB-O (anovulation)**: without ovulation there is no corpus luteum and no progesterone, so **unopposed oestrogen** builds a thick, fragile, poorly supported endometrium that **outgrows its blood supply and breaks down piecemeal** - irregular, unpredictable, sometimes torrential bleeding and, over years, **hyperplasia**. [FIGO 2018]",
          "**Causes of AUB-O**: physiological for **12-18 months after menarche** (immature positive feedback) and in **perimenopause**, and pathological in **PCOS, hypothyroidism, hyperprolactinaemia, obesity**, stress and weight loss - each disturbs GnRH pulsatility or the LH surge. [FIGO 2018]",
          "**AUB-E**: in regular ovulatory cycles the endometrium itself has **excess local fibrinolysis (tissue plasminogen activator)** and **excess vasodilator prostaglandin E2 and prostacyclin** relative to vasoconstrictor PGF2-alpha - this is exactly why **tranexamic acid and NSAIDs** work. [FIGO 2018]",
          "**AUB-L and AUB-A**: submucosal fibroids **enlarge and distort the bleeding surface**, dilate venules and impair myometrial contraction; adenomyosis enlarges the cavity and makes the uterus **bulky and tender**, adding painful heavy periods. [Berek and Novak 16e]",
          "**AUB-C**: about **13% of women with HMB have an inherited bleeding disorder**, most often **von Willebrand disease** - vWF is needed for platelet adhesion and carries factor VIII, so the platelet plug in shed vessels fails. [FIGO 2018]",
          "**AUB-I**: progestogen-only methods cause **unscheduled bleeding from fragile dilated superficial vessels** in a thin endometrium; the copper IUCD raises local prostaglandins; **anticoagulants** impair haemostasis; tamoxifen thickens the endometrium. [FIGO 2018]",
          "**AUB-M**: endometrial hyperplasia progresses to **endometrioid adenocarcinoma** under unopposed oestrogen (obesity - peripheral aromatisation in fat, PCOS, tamoxifen, Lynch syndrome); risk rises steeply after 45 years. [Berek and Novak 16e]",
          "**Why drugs work**: **progestogens** convert and thin the endometrium, **COCs** suppress ovulation and thin the lining, the **LNG-IUS** makes it atrophic locally, **tranexamic acid** blocks plasminogen activation, **NSAIDs** cut prostaglandins, and **GnRH analogues** stop ovarian oestrogen. [NICE NG88 2021]"
        ]
      },
      {
        "heading": "History in the OPD",
        "points": [
          "**Always ask about pregnancy first** (LMP, contraception, sexual activity) and do a **urine pregnancy test** - miscarriage and ectopic pregnancy are the bleeding diagnoses that kill. [Shaw 18e]",
          "**Quantify the loss** with countable events: pads or cloths per day, **changing at night**, **flooding** through clothes or bedding, **clots larger than a 1-rupee coin**, and days of work or school missed. [NICE NG88 2021]",
          "**Pattern separates the groups**: **regular heavy** periods suggest AUB-L, A, C or E (ovulation intact), while **irregular, unpredictable** bleeding suggests **AUB-O**. [FIGO 2018]",
          "**Intermenstrual and postcoital bleeding** point to the **cervix or a polyp** until proved otherwise - ask specifically and check screening status. [NICE NG88 2021]",
          "**Pelvic pain, dysmenorrhoea and dyspareunia** point to adenomyosis or endometriosis; **pressure symptoms** (frequency, constipation, abdominal swelling) suggest a large fibroid. [NICE NG88 2021]",
          "**Coagulopathy screen (positive = test for vWD)**: heavy periods **since menarche**, or one of postpartum haemorrhage, surgical or dental bleeding, or two of monthly bruising, epistaxis, gum bleeding and a family history. [FIGO 2018]",
          "**Anovulation clues**: acne, hirsutism and weight gain (PCOS), cold intolerance and constipation (hypothyroidism), **galactorrhoea and headache** (prolactinoma), recent weight loss or stress. [FIGO 2018]",
          "**Drug and device history**: copper IUCD, DMPA or implant, OCP missed pills, **warfarin, DOACs, aspirin**, antipsychotics (raise prolactin), tamoxifen and over-the-counter hormones. [FIGO 2018]",
          "**Symptoms of anaemia** - fatigue, breathlessness, palpitations, pica - and any syncope or dizziness in an acute bleed signal urgency. [NICE NG88 2021]",
          "**Endometrial cancer risk factors**: age **45 or over**, obesity, diabetes, nulliparity, PCOS, tamoxifen and **Lynch syndrome** (40-60% lifetime risk) - they decide who needs a biopsy. [Berek and Novak 16e]",
          "**Fertility wishes and contraception needs** decide the treatment: tranexamic acid or NSAIDs if trying to conceive, LNG-IUS or COC if contraception is also wanted. [NICE NG88 2021]",
          "**Last cervical screening** result and HPV vaccination status should be recorded at every AUB visit. [MoHFW 2024]"
        ]
      },
      {
        "heading": "Examination",
        "points": [
          "**General**: pulse, BP and postural drop, **pallor** and koilonychia, BMI, thyroid swelling, **acanthosis nigricans and hirsutism** (PCOS), bruises and petechiae (coagulopathy), and galactorrhoea only if history suggests it. [Shaw 18e]",
          "**Abdomen**: palpate for a **pelvic mass arising from the pelvis** (you cannot get below it), its size in weeks of gestation, mobility and tenderness - a fibroid uterus is firm and irregular. [Shaw 18e]",
          "**Consent and chaperone**: explain, obtain verbal consent, offer a **female chaperone**, empty the bladder and position in **dorsal (lithotomy or left lateral for Sims)** with good light; skip speculum and bimanual in a virgo intacta and use transabdominal or transrectal ultrasound instead. [NICE NG88 2021]",
          "**Speculum (Cusco) technique**: (1) warm and lubricate with water or gel; (2) part the labia with the left hand; (3) insert the closed blades **obliquely, then rotate to horizontal**, directing posteriorly toward the sacrum; (4) open gently to bring the cervix into view and lock. [Shaw 18e]",
          "**What to look for on speculum**: bleeding from the os versus from the cervix or vagina, **ectropion, polyp protruding from the os, a friable or growth-bearing cervix**, discharge and IUCD threads; take cervical screening if due, but **biopsy any visible lesion** rather than relying on a smear. [Shaw 18e]",
          "**Bimanual technique**: two lubricated fingers of the gloved dominant hand in the vagina behind the cervix, the other hand on the abdomen above the pubis pushing down; **lift the uterus toward the abdominal hand** and assess size, position (anteverted or retroverted), consistency, mobility and tenderness. [Shaw 18e]",
          "**Bimanual findings**: **uniformly bulky, soft, tender uterus** suggests adenomyosis; **irregular firm enlargement** suggests fibroids; **cervical motion tenderness** suggests PID or ectopic; an **adnexal mass** is felt in the lateral fornices. [Berek and Novak 16e]",
          "**Per-rectal examination** is added when a vaginal examination is not possible or to assess the parametrium and uterosacral ligaments. [Shaw 18e]"
        ]
      },
      {
        "heading": "Minimal investigations",
        "points": [
          "**Urine pregnancy test** in every woman of reproductive age with AUB, before any imaging or drug. [NICE NG88 2021]",
          "**Full blood count** in all women with HMB; add **serum ferritin** only if the FBC suggests iron deficiency - **ferritin under 15 microgram/L** means depleted iron stores. [NICE NG88 2021]",
          "**TSH** only with thyroid symptoms or irregular cycles, **prolactin** only with galactorrhoea or amenorrhoea - not routinely for regular HMB. [NICE NG88 2021]",
          "**Coagulation tests (vWF antigen, ristocetin cofactor activity, factor VIII)** only when the coagulopathy screen is positive, ideally before surgery and not on estrogen. [FIGO 2018]",
          "**Transvaginal ultrasound** is first-line imaging when the uterus is enlarged, a mass or pelvic pathology is suspected, or medical treatment fails; it shows fibroids (with FIGO type), adenomyosis, polyps and **endometrial thickness**. [NICE NG88 2021]",
          "**Hysteroscopy (outpatient)** is preferred over ultrasound when the history suggests a **submucosal fibroid, polyp or endometrial pathology**, and allows see-and-treat removal; saline sonohysterography is the alternative. [NICE NG88 2021]",
          "**Endometrial biopsy (Pipelle)** is mandatory at **45 years or over** with AUB, and under 45 with persistent AUB plus **unopposed-oestrogen risk (obesity, PCOS, chronic anovulation)**, failed medical treatment or Lynch syndrome. [FIGO 2018]",
          "**Postmenopausal bleeding**: an endometrial thickness of **4 mm or less** on TVS has a negative predictive value for cancer of about 99%; over 4 mm, or recurrent bleeding, needs tissue. [NICE NG12 2025]",
          "**Do not order routinely**: hormone panels (FSH, LH, oestradiol, progesterone) for regular HMB, MRI as first-line, or **D and C as a diagnostic tool** - it misses focal lesions and is not a treatment. [NICE NG88 2021]"
        ]
      },
      {
        "heading": "Treatment - general measures",
        "points": [
          "**Explain the diagnosis and options** in plain language, including that most HMB is benign, and use a menstrual diary or pictorial chart to review response. [NICE NG88 2021]",
          "**Weight reduction** in obese women with AUB-O restores ovulation in many and reduces hyperplasia and cancer risk. [FIGO 2018]",
          "**Iron-rich diet** (green leafy vegetables, jaggery, legumes, meat) with **vitamin C** at meals, and avoid tea or coffee within an hour of iron-containing meals. [MoHFW 2022]",
          "**Treat the cause**: levothyroxine for hypothyroidism, cabergoline for hyperprolactinaemia, stop or switch the causative drug (AUB-I). [FIGO 2018]",
          "**Menstrual hygiene counselling** - clean cloth or pads, changing 4-6 hourly, and access to sanitary products through school and ASHA schemes. [MoHFW 2024]",
          "**Record a treatment plan tied to fertility wishes** - reassess in 3 months and escalate only if the woman's quality of life is still affected. [NICE NG88 2021]"
        ]
      },
      {
        "heading": "Treatment - drugs",
        "points": [
          "**Choice (NICE)**: no structural cause or fibroids under 3 cm not distorting the cavity -> **LNG-IUS first**; if declined or unsuitable -> **non-hormonal** (tranexamic acid, NSAID) or **hormonal** (COC, cyclical oral progestogen). [NICE NG88 2021]",
          "**LNG-IUS (52 mg levonorgestrel, releasing about 20 microgram/day)**: local progestogen makes the endometrium **atrophic and decidualised**, cutting loss by **70-95%**; effective for HMB for 5 years (contraception up to 8 years). [NICE NG88 2021]",
          "**LNG-IUS counselling**: **irregular spotting for 3-6 months** is expected before the benefit, about 20% become amenorrhoeic by 1 year, and hormonal side effects (breast tenderness, acne, mood change) are mild because blood levels are low. [NICE NG88 2021]",
          "**Tranexamic acid (antifibrinolytic)**: blocks lysine-binding sites on plasminogen so clots in the endometrial vessels are not dissolved; **1 g (2 x 500 mg) orally three times a day for up to 4 days from the start of bleeding**, maximum 4 g/day; cuts loss by **about 40-50%**. [NICE NG88 2021]",
          "**Tranexamic acid safety**: side effects are mild nausea and diarrhoea; **contraindicated in active thromboembolism** or a history of VTE with ongoing risk, and **reduce the dose in renal impairment**; it does not affect fertility and can be taken with or without food. [NICE NG88 2021]",
          "**NSAIDs**: **mefenamic acid 500 mg three times a day with food** from the first day of bleeding (or the day before) for 3-5 days, or **naproxen 250-500 mg twice daily**; they inhibit **COX and prostaglandin synthesis**, reducing loss by **25-35%** and relieving dysmenorrhoea. [NICE NG88 2021]",
          "**NSAID cautions**: dyspepsia and GI bleeding (take with food, add a PPI if at risk), avoid in **peptic ulcer, aspirin-sensitive asthma, renal impairment**, and do not combine two NSAIDs; stop if no benefit after 3 cycles. [NICE NG88 2021]",
          "**Combined oral contraceptive**: **ethinylestradiol 30 microgram + levonorgestrel 150 microgram, one tablet daily** (21 days then 7-day break, or tailored continuous use) suppresses ovulation and thins the lining, reducing loss by **35-50%** and regularising cycles; check **WHO MEC** first (see contraception topic). [NICE NG88 2021]",
          "**Cyclical oral progestogen for HMB**: **norethisterone 5 mg three times a day from day 5 to day 26** (21 days) of each cycle; the old luteal-only regimen (day 19-26) is **ineffective for ovulatory HMB**. [NICE NG88 2021]",
          "**Cyclical progestogen for AUB-O**: **medroxyprogesterone acetate 10 mg once daily for 12-14 days each month** (for example day 12-25) produces a predictable withdrawal bleed and **protects the endometrium from hyperplasia** in anovulatory women. [FIGO 2018]",
          "**Progestogen side effects**: bloating, breast tenderness, weight gain, mood change and acne; norethisterone is partly converted to ethinylestradiol, so **avoid long high-dose use in women at high VTE risk**. [NICE NG88 2021]",
          "**DMPA 150 mg deep IM (or 104 mg SC) every 12 weeks** suits a woman who also wants contraception; amenorrhoea in about 50% at 1 year, but irregular bleeding initially and **delayed return of fertility (up to 10 months)**. [WHO FP Handbook 2022]",
          "**Ormeloxifene (centchroman)**, a non-steroidal **SERM** used in India for AUB: **60 mg twice a week for 12 weeks, then 60 mg once a week for 12 weeks**; it has anti-oestrogenic action on the endometrium; avoid in PCOS, liver disease and cervical hyperplasia, and it may delay periods. [FOGSI 2017]",
          "**GnRH agonist - preoperative only**: **leuprolide 3.75 mg IM monthly (or 11.25 mg 3-monthly) for 3-6 months** causes a medical menopause, shrinks fibroids and allows Hb to recover; **add-back tibolone 2.5 mg daily** if used beyond 3 months, because of **bone loss and hot flushes**. [NICE NG88 2021]",
          "**Ulipristal acetate** (selective progesterone receptor modulator) is **restricted** because of rare severe liver injury - do not use for HMB in primary care. [NICE NG88 2021]",
          "**Oral iron**: ferrous sulphate, fumarate or ascorbate providing **60-120 mg elemental iron once daily or on alternate days, on an empty stomach with vitamin C**, for **3 months after Hb normalises**; causes dark stools, constipation and nausea - taking it with food reduces nausea at some cost to absorption. [MoHFW 2022]",
          "**IV iron** when Hb is under 8 g/dL with ongoing loss, oral iron fails or is not tolerated, or surgery is near: **ferric carboxymaltose 20 mg/kg up to 1000 mg over 15 minutes** (once weekly), or **iron sucrose 200 mg** in 100 mL saline on alternate days; watch for hypersensitivity and hypophosphataemia. [MoHFW 2022]",
          "**Step-up and step-down**: review at **3 months**; if the first option fails, try another medical option or proceed to investigation and surgery; once HMB is controlled, keep the LNG-IUS or COC long term and stop tranexamic acid and NSAIDs outside periods. [NICE NG88 2021]",
          "**Pregnancy caution**: exclude pregnancy before hormones; **tranexamic acid** and NSAIDs are for the woman trying to conceive, but NSAIDs should be stopped once pregnant (third-trimester ductal closure). [NICE NG88 2021]"
        ]
      },
      {
        "heading": "Acute presentation and emergency management",
        "points": [
          "**Acute AUB with haemodynamic compromise**: two wide-bore cannulae, blood for Hb, group and cross-match, coagulation and UPT, crystalloid and **transfuse if Hb under 7 g/dL** or unstable - resuscitate first, diagnose second. [ACOG 2020]",
          "**Exclude pregnancy complications** on the same visit - a ruptured ectopic or incomplete miscarriage can present as acute heavy bleeding. [Shaw 18e]",
          "**High-dose progestogen**: **medroxyprogesterone acetate 20 mg orally three times a day for 7 days** (or norethisterone 5-10 mg three times a day until bleeding stops, then twice daily to complete 10-21 days) stabilises the endometrium. [ACOG 2020]",
          "**High-dose COC**: a monophasic **30-35 microgram EE pill three times a day for 7 days** (then daily) re-epithelialises the denuded surface; add an antiemetic, and check VTE contraindications. [ACOG 2020]",
          "**IV conjugated equine oestrogen 25 mg every 4-6 hours for up to 24 hours** where available, or **tranexamic acid 10 mg/kg IV (max 1 g) 8-hourly or 1.3 g orally three times a day for 5 days** as adjuncts. [ACOG 2020]",
          "**If medical treatment fails**: **Foley catheter balloon tamponade** (30 mL) buys time, **suction curettage** stops acute bleeding temporarily and gives tissue, and uterine artery embolisation or hysterectomy are last resorts. [ACOG 2020]",
          "**Surgical options for chronic HMB**: **hysteroscopic polypectomy or myomectomy** (types 0-2 fibroids), **endometrial ablation** (family complete, normal cavity, uterus under 10 weeks - contraception still needed), uterine artery embolisation, myomectomy and **hysterectomy** as the definitive last resort. [NICE NG88 2021]"
        ]
      },
      {
        "heading": "Follow-up, monitoring and when to refer",
        "points": [
          "**Review at 3 months** with the bleeding diary, Hb and the woman's own rating of her quality of life; continue what works. [NICE NG88 2021]",
          "**Recheck Hb after 4 weeks of iron** (expect a rise of about 1-2 g/dL) and continue iron 3 months after normalisation; failure to rise means poor adherence, ongoing loss or another cause. [MoHFW 2022]",
          "**Check LNG-IUS threads** at 4-6 weeks after insertion and whenever bleeding pattern changes suddenly. [NICE NG88 2021]",
          "**Refer urgently (2-week pathway)**: postmenopausal bleeding in a woman **55 or over**, a visible cervical lesion, or a pelvic mass suspicious of malignancy. [NICE NG12 2025]",
          "**Refer to gynaecology**: failed medical treatment after 3-6 months, fibroids over 3 cm or distorting the cavity, abnormal endometrial histology (hyperplasia with atypia), or a woman who wants surgery. [NICE NG88 2021]",
          "**Refer to haematology** with a positive coagulopathy screen or confirmed vWD, and **admit** any acute AUB with Hb under 7 g/dL, shock or ongoing heavy loss. [FIGO 2018]",
          "**Hysterectomy is never offered first**: document an LNG-IUS trial (or reason it was declined) and an endometrial assessment before referral for hysterectomy. [NICE NG88 2021]"
        ]
      }
    ],
    "tables": [
      {
        "heading": "FIGO PALM-COEIN classification of AUB",
        "columns": [
          "Category",
          "Cause",
          "Typical pattern",
          "Confirming test"
        ],
        "rows": [
          [
            "P - Polyp",
            "Endometrial or endocervical polyp",
            "Intermenstrual and postcoital bleeding",
            "Hysteroscopy or saline sonohysterography"
          ],
          [
            "A - Adenomyosis",
            "Endometrial glands within myometrium",
            "Heavy painful regular periods, bulky tender uterus",
            "TVS or MRI (junctional zone over 12 mm)"
          ],
          [
            "L - Leiomyoma",
            "Fibroid; submucosal (L-SM, types 0-2) or other (L-O)",
            "Heavy regular periods, pressure symptoms",
            "TVS with FIGO type 0-8"
          ],
          [
            "M - Malignancy and hyperplasia",
            "Endometrial hyperplasia, carcinoma, sarcoma",
            "Intermenstrual or postmenopausal bleeding",
            "Endometrial biopsy"
          ],
          [
            "C - Coagulopathy",
            "Usually von Willebrand disease, anticoagulants moved to I",
            "Heavy since menarche, bruising, epistaxis",
            "vWF antigen, ristocetin cofactor, factor VIII"
          ],
          [
            "O - Ovulatory dysfunction",
            "PCOS, thyroid, prolactin, obesity, adolescence, perimenopause",
            "Irregular, unpredictable, often prolonged",
            "Clinical pattern, TSH, prolactin, TVS"
          ],
          [
            "E - Endometrial",
            "Primary local haemostatic defect, endometritis",
            "Regular heavy cycles, no lesion",
            "Diagnosis of exclusion"
          ],
          [
            "I - Iatrogenic",
            "Hormones, IUCD, anticoagulants, tamoxifen, antipsychotics",
            "Unscheduled or breakthrough bleeding",
            "Drug and device history"
          ],
          [
            "N - Not otherwise classified",
            "AV malformation, caesarean scar niche (isthmocele)",
            "Variable, often post-caesarean",
            "Doppler TVS, hysteroscopy"
          ]
        ]
      },
      {
        "heading": "FIGO 2018 criteria for normal menstruation and AUB terms",
        "columns": [
          "Parameter",
          "Normal",
          "Abnormal term"
        ],
        "rows": [
          [
            "Frequency",
            "24-38 days",
            "Frequent under 24 days; infrequent over 38 days; absent = amenorrhoea"
          ],
          [
            "Regularity",
            "Variation 7-9 days or less",
            "Irregular: variation 10 days or more"
          ],
          [
            "Duration",
            "8 days or less",
            "Prolonged: over 8 days"
          ],
          [
            "Volume",
            "Normal for the woman",
            "Heavy menstrual bleeding: affects quality of life"
          ],
          [
            "Intermenstrual bleeding",
            "None",
            "Random or cyclic bleeding between periods"
          ]
        ]
      },
      {
        "heading": "Drugs: dose, duration and side effects",
        "columns": [
          "Drug",
          "Mechanism",
          "Dose and duration",
          "Side effects",
          "How to take"
        ],
        "rows": [
          [
            "LNG-IUS 52 mg",
            "Local progestogen, endometrial atrophy",
            "Inserted in uterus; 5 years for HMB",
            "Spotting 3-6 months, amenorrhoea, acne",
            "Clinic insertion within 7 days of period start; check threads"
          ],
          [
            "Tranexamic acid",
            "Antifibrinolytic, blocks plasminogen",
            "1 g three times daily for up to 4 days per period",
            "Nausea, diarrhoea; avoid in active VTE",
            "Start on day 1 of bleeding; halve dose in renal impairment"
          ],
          [
            "Mefenamic acid",
            "COX inhibitor, lowers prostaglandins",
            "500 mg three times daily for 3-5 days per period",
            "Dyspepsia, GI bleed, renal impairment",
            "With food from day 1 (or day before); stop after 3 failed cycles"
          ],
          [
            "Combined pill (EE 30 microgram + LNG 150 microgram)",
            "Suppresses ovulation, thins endometrium",
            "1 tablet daily, 21/7 or continuous",
            "Nausea, breast tenderness, VTE, BP rise",
            "Same time daily; check WHO MEC; missed-pill rules apply"
          ],
          [
            "Norethisterone",
            "Progestogen, secretory then atrophic endometrium",
            "5 mg three times daily, day 5-26; acute: until bleeding stops",
            "Bloating, mood change, acne",
            "Oral with water; acute use 10-21 days then taper"
          ],
          [
            "Medroxyprogesterone acetate (oral)",
            "Progestogen, protects endometrium",
            "AUB-O: 10 mg daily 12-14 days a month; acute: 20 mg three times daily 7 days",
            "Bloating, breast tenderness",
            "Withdrawal bleed 2-7 days after last tablet"
          ],
          [
            "DMPA",
            "Suppresses ovulation, atrophic endometrium",
            "150 mg IM or 104 mg SC every 12 weeks",
            "Irregular bleeding, weight gain, delayed fertility",
            "Deep IM deltoid or gluteal; do not massage site"
          ],
          [
            "Ormeloxifene",
            "SERM, anti-oestrogenic on endometrium",
            "60 mg twice weekly x 12 weeks, then weekly x 12 weeks",
            "Delayed or scanty periods",
            "Same weekdays each week"
          ],
          [
            "Leuprolide",
            "GnRH agonist, down-regulates pituitary",
            "3.75 mg IM monthly, 3-6 months, preoperative",
            "Hot flushes, bone loss, initial flare",
            "Add-back tibolone 2.5 mg daily beyond 3 months"
          ],
          [
            "Ferric carboxymaltose",
            "IV iron repletion",
            "20 mg/kg, max 1000 mg, over 15 minutes",
            "Hypersensitivity, hypophosphataemia",
            "Observe 30 minutes; recheck Hb at 4 weeks"
          ]
        ]
      }
    ],
    "redFlags": [
      "Any bleeding after 12 months of menopausal amenorrhoea - endometrial carcinoma until proved otherwise; TVS and endometrial sampling.",
      "Postcoital bleeding, a friable cervix or a visible cervical growth - biopsy the lesion; a normal smear is not reassurance.",
      "Heavy bleeding with tachycardia, systolic BP under 90 mmHg, syncope or Hb under 7 g/dL - resuscitate and admit.",
      "A positive pregnancy test with bleeding and pelvic pain - ectopic pregnancy until excluded.",
      "AUB with fever, offensive discharge and uterine tenderness after delivery or abortion - sepsis, admit for IV antibiotics.",
      "Rapidly enlarging pelvic mass or a fibroid growing after the menopause - suspect sarcoma, refer to gynae-oncology.",
      "HMB since menarche with bruising, epistaxis or family history - test for von Willebrand disease before any surgery.",
      "AUB at 45 or over, or with obesity or PCOS and persistent irregular bleeding - biopsy before hormones."
    ],
    "pearls": [
      "Say PALM-COEIN in full and add that a woman can carry two categories at once - that sentence earns the classification marks.",
      "Menorrhagia, metrorrhagia and dysfunctional uterine bleeding are obsolete; use HMB, intermenstrual bleeding and AUB-O.",
      "Urine pregnancy test first in every reproductive-age woman with abnormal bleeding.",
      "Endometrial biopsy at 45 or over whatever the scan shows; under 45 it is unopposed oestrogen (obesity, PCOS, anovulation) that triggers sampling.",
      "Postmenopausal endometrium of 4 mm or less has a very high negative predictive value; over 4 mm needs tissue.",
      "The LNG-IUS is first-line medical treatment for HMB and the closest rival to hysterectomy in satisfaction.",
      "Norethisterone for ovulatory HMB runs day 5 to day 26; the luteal-only regimen is the classic wrong answer.",
      "Tranexamic acid and mefenamic acid are the choices for the woman trying to conceive - they act only during menses.",
      "D and C is a diagnostic and temporary haemostatic procedure, not a treatment for HMB."
    ],
    "references": [
      "Munro MG et al. FIGO Systems 1 and 2 for abnormal uterine bleeding in the reproductive years, 2018 revision. Int J Gynecol Obstet 2018.",
      "NICE NG88. Heavy menstrual bleeding: assessment and management, 2018 (updated 2021).",
      "ACOG Committee Opinion 557. Management of acute abnormal uterine bleeding in nonpregnant reproductive-aged women (reaffirmed 2020).",
      "FOGSI Good Clinical Practice Recommendations on the management of AUB, 2017.",
      "Berek and Novak's Gynecology, 16th edition; Speroff's Clinical Gynecologic Endocrinology and Infertility, 9th edition.",
      "Shaw's Textbook of Gynaecology, 18th edition.",
      "MoHFW Anemia Mukt Bharat operational guidelines, 2018 (updated 2022)."
    ]
  },
  "gynaecology-contraception": {
    "oneLiner": "Contraception is a **shared, informed choice** from the national basket (condoms, Mala-N combined pill, Chhaya centchroman, Antara DMPA, Cu-IUCD, emergency pill, sterilisation, with implant and DMPA-SC being added), made safe by the **WHO Medical Eligibility Criteria (categories 1-4)** and made effective by teaching **how to take or use the method correctly** - LARC (IUCD, LNG-IUS, implant) is the most effective because it removes user error.",
    "sections": [
      {
        "heading": "Definition and the classification that matters",
        "points": [
          "**Contraception** is the intentional prevention of pregnancy by temporary (reversible) or permanent methods; **effectiveness** is expressed as pregnancies per 100 women in the first year of **typical use** and **perfect use**, or as the **Pearl index** (failures x 1200 / total months of exposure). [WHO FP Handbook 2022]",
          "**Effectiveness tiers**: tier 1 (under 1 per 100) - **implant, LNG-IUS, copper IUCD, sterilisation**; tier 2 (4-7) - injectables, pills, LAM; tier 3 (13-20) - condoms, fertility awareness, withdrawal; tier 4 (about 21) - spermicides. [WHO FP Handbook 2022]",
          "**Typical-use first-year failure**: male condom 13, combined pill 7, DMPA 4, copper IUCD 0.8, LNG-IUS 0.1-0.2, implant 0.1, female sterilisation 0.5, vasectomy 0.15 - the gap between perfect and typical use is **user error**. [WHO FP Handbook 2022]",
          "**WHO MEC categories**: **1 - no restriction**; **2 - advantages generally outweigh risks**; **3 - risks usually outweigh advantages** (use only if nothing else is acceptable, with close follow-up); **4 - unacceptable health risk, do not use**. [WHO MEC 2015]",
          "**Simplified two-category rule** where clinical judgement is limited (ASHA, ANM): categories **1 and 2 = use**, **3 and 4 = do not use**. [WHO MEC 2015]",
          "**Initiation versus continuation**: some conditions have separate categories - for example an IUCD is **category 4 to insert with current PID but 2 to continue** if PID develops with the device in place. [WHO MEC 2015]",
          "**The national basket (India)**: free condoms (Nirodh), **Mala-N** combined pill, **Chhaya** (centchroman) weekly pill, **Antara** (DMPA 150 mg IM), Cu-IUCD 380A and 375 (including postpartum and post-abortion IUCD), emergency pill (Ezy Pill) and male and female sterilisation; the **subdermal implant and DMPA-SC** are being introduced in selected states. [MoHFW 2024]",
          "**Indian burden**: NFHS-5 modern contraceptive prevalence **56.5%**, female sterilisation **37.9%** versus vasectomy **0.3%**, and **unmet need 9.4%** - the programme aim is more spacing methods and male participation. [NFHS-5 2021]"
        ]
      },
      {
        "heading": "Pathophysiology and pathoanatomy",
        "points": [
          "**Pelvic anatomy relevant to methods**: the uterus is usually **anteverted and anteflexed**, the cavity sounds **6-9 cm** from external os to fundus, and the cervical canal with its internal os is the narrowest point an IUCD must pass. [Gray's 42e]",
          "**Fallopian tube**: about 10 cm long with **interstitial, isthmic, ampullary and infundibular (fimbrial)** parts; fertilisation occurs in the **ampulla**, and tubal sterilisation (Pomeroy, Falope ring) occludes the narrow **isthmus about 2-3 cm from the cornu**. [Gray's 42e]",
          "**Vas deferens** runs in the spermatic cord from the epididymis to the ejaculatory duct and is easily felt as a firm cord at the top of the scrotum - the basis of **no-scalpel vasectomy**. [Gray's 42e]",
          "**HPO axis target**: GnRH pulses drive FSH (follicle recruitment) and LH (mid-cycle surge); **oestrogen suppresses FSH** so no dominant follicle is selected, and **progestogen suppresses the LH surge** - together they abolish ovulation. [Speroff 9e]",
          "**Fertile window**: sperm survive **up to 5 days** in cervical mucus and the ovum about **12-24 hours**, so the fertile window is the **6 days ending on the day of ovulation** - which is why emergency contraception within 72-120 hours still works. [Speroff 9e]",
          "**Combined pill mechanism**: ethinylestradiol plus progestogen **inhibit ovulation**, and the progestogen also **thickens cervical mucus** and thins the endometrium; 7 hormone-free days are the 'weak point' when a follicle may begin to grow. [Speroff 9e]",
          "**Why late pills fail**: during the hormone-free interval FSH rises and follicles start to grow; **lengthening the break** (missed pills in week 1 or week 3) lets a follicle reach ovulation - hence the missed-pill rules. [FSRH 2023]",
          "**Progestogen-only methods**: traditional POPs work mainly by **thick, hostile cervical mucus** (a 24-hour effect, so tight timing), while desogestrel POP, the implant and DMPA **reliably inhibit ovulation**. [WHO FP Handbook 2022]",
          "**Oestrogen and thrombosis**: ethinylestradiol increases hepatic synthesis of **factors II, VII, VIII, X and fibrinogen** and causes **acquired activated protein C resistance**, raising VTE risk from about **2 to 5-7 per 10 000 women-years** with levonorgestrel pills (9-12 with desogestrel, gestodene or drospirenone) - still far below pregnancy. [FSRH 2023]",
          "**Oestrogen and arteries**: ethinylestradiol raises **BP (renin-angiotensin activation)** and, with smoking or migraine aura, **ischaemic stroke and MI risk** - hence CHC category 4 for these. [WHO MEC 2015]",
          "**Enzyme induction**: rifampicin, rifabutin, carbamazepine, phenytoin, phenobarbital, topiramate and efavirenz induce **CYP3A4**, lowering ethinylestradiol and progestogen levels and causing pill and implant failure; common antibiotics do not. [FSRH 2023]",
          "**DMPA** suppresses gonadotrophins so profoundly that **oestradiol falls to early-follicular levels**, causing a reversible loss of **bone mineral density** and delayed return of ovulation (median **about 10 months** from the last injection). [WHO FP Handbook 2022]",
          "**Copper IUCD**: copper ions create a **sterile foreign-body inflammatory reaction** that is **spermicidal and ovotoxic**, preventing fertilisation - it is not an abortifacient; raised local prostaglandins and fibrinolysis cause **heavier, more painful periods**. [WHO FP Handbook 2022]",
          "**LNG-IUS**: local levonorgestrel makes the endometrium **decidualised and atrophic** and thickens mucus, cutting blood loss by 70-95%; ovulation continues in most users. [NICE NG88 2021]",
          "**Centchroman (ormeloxifene)**, a **non-steroidal SERM**, is anti-oestrogenic on the endometrium, **accelerating tubal transport and making the endometrium out of phase for implantation**; it does not suppress ovulation, so cycles may lengthen. [MoHFW 2024]",
          "**Emergency pill**: levonorgestrel 1.5 mg **delays or prevents the LH surge** if taken before it starts; ulipristal (a progesterone-receptor modulator) works **even after the LH surge has begun**, so it is more effective later in the window; neither disrupts an implanted pregnancy. [WHO SPR 2016]",
          "**Lactational amenorrhoea**: frequent suckling raises **prolactin and beta-endorphin**, disrupting GnRH pulsatility and so ovulation - effective (about 2% failure) only if **fully breastfeeding, amenorrhoeic and under 6 months postpartum**. [WHO FP Handbook 2022]"
        ]
      },
      {
        "heading": "History in the OPD",
        "points": [
          "**Reproductive goal**: spacing or limiting, when she wants the next child, number and age of living children, breastfeeding status and partner's views - this decides between reversible, LARC and permanent methods. [WHO FP Handbook 2022]",
          "**Exclude pregnancy with the WHO pregnancy checklist**: she is reasonably certain not pregnant if she has no pregnancy symptoms and any one of - **7 days or less since start of a normal period**, no sex since the last period, **consistent correct use of a reliable method**, 7 days or less after abortion, within 4 weeks postpartum, or fully breastfeeding, amenorrhoeic and under 6 months postpartum. [WHO FP Handbook 2022]",
          "**Headache history**: ask specifically about **migraine with aura** (visual or sensory symptoms before the headache) - category 4 for combined methods at any age. [WHO MEC 2015]",
          "**Cardiovascular risk**: **age 35 or over with smoking**, hypertension, diabetes with vascular disease, ischaemic heart disease, stroke and multiple risk factors all restrict oestrogen. [WHO MEC 2015]",
          "**Thrombosis history**: past or current DVT or PE, known thrombophilia, recent major surgery with immobilisation, and **postpartum under 21 days** make combined methods category 3-4. [WHO MEC 2015]",
          "**Cancer and liver**: current or past **breast cancer** (all hormonal methods restricted, copper IUCD category 1), severe cirrhosis, liver tumour and active hepatitis. [WHO MEC 2015]",
          "**Drug history**: rifampicin (TB), anticonvulsants (carbamazepine, phenytoin, lamotrigine), ART (efavirenz) - enzyme inducers make pills and implants unreliable, and **the pill lowers lamotrigine** levels. [FSRH 2023]",
          "**Menstrual history**: heavy or painful periods favour the LNG-IUS or COC and argue against the copper IUCD; **unexplained vaginal bleeding** must be evaluated before an IUCD or DMPA. [WHO MEC 2015]",
          "**STI and PID risk**: new or multiple partners, discharge or pelvic pain - current purulent cervicitis, chlamydia, gonorrhoea or PID make **IUCD insertion category 4** until treated. [WHO MEC 2015]",
          "**Past method experience** and myths (weight gain, infertility, 'cancer', IUCD 'travelling to the heart') - address them directly because fear, not side effects, causes most discontinuation. [MoHFW 2024]",
          "**Reproductive coercion and IPV**: ask privately whether her partner controls or sabotages contraception - a **discreet method (IUCD, implant, injectable)** may be safer. [WHO FP Handbook 2022]"
        ]
      },
      {
        "heading": "Examination",
        "points": [
          "**Blood pressure before combined hormonal contraception** is the one essential examination; BMI is useful for counselling and follow-up. [WHO SPR 2016]",
          "**No pelvic, breast or cervical examination and no blood test** is needed before condoms, pills, centchroman, DMPA or an implant - requiring them only delays access. [WHO SPR 2016]",
          "**Before an IUCD or LNG-IUS**, examine the abdomen for tenderness or a mass, then do a **speculum examination** to inspect the cervix for **mucopurulent discharge, cervicitis or a lesion**. [MoHFW 2018]",
          "**Bimanual examination before IUCD** establishes **uterine size, position (anteverted or retroverted) and mobility**, and detects **cervical motion tenderness or adnexal tenderness** (PID) - an unrecognised retroverted uterus is the classic setting for perforation. [MoHFW 2018]",
          "**Uterine sounding** with a no-touch technique confirms direction and depth: **6-9 cm** is normal; do not insert if it sounds **under 6 cm** or the cavity is distorted by fibroids. [MoHFW 2018]",
          "**Before postpartum IUCD** confirm the placenta is complete, bleeding is controlled and there is no chorioamnionitis, prolonged rupture of membranes over 18 hours or puerperal sepsis. [MoHFW 2018]",
          "**Before an implant** examine the **inner non-dominant upper arm** for skin infection or scarring at the site. [WHO FP Handbook 2022]",
          "**Before vasectomy** examine the scrotum for hydrocele, varicocele, hernia or undescended testis and check that **both vasa are palpable**; before tubal ligation examine for pelvic adhesions or masses. [MoHFW 2014]"
        ]
      },
      {
        "heading": "Minimal investigations",
        "points": [
          "**Urine pregnancy test** only when the WHO checklist cannot make pregnancy reasonably unlikely; a negative test within 3 weeks of unprotected sex does not exclude an early pregnancy, so repeat it at 3 weeks after quick start. [WHO SPR 2016]",
          "**No routine tests** (Hb, lipids, LFT, glucose, Pap smear, thrombophilia screen) are needed before any method in a healthy woman. [WHO SPR 2016]",
          "**STI testing before IUCD** only in a woman at high individual risk - with no signs of infection insert the same day and treat if the result is positive; routine prophylactic antibiotics are not needed. [WHO SPR 2016]",
          "**Thrombophilia screening is not routine** before the pill; ask about first-degree relatives with VTE under 45 and use a non-oestrogen method if positive. [FSRH 2023]",
          "**Hb** is useful before and during copper IUCD use in anaemic women, since the device increases menstrual loss. [MoHFW 2018]",
          "**Semen analysis at 12 weeks after vasectomy** (azoospermia) is required before stopping other contraception. [MoHFW 2014]",
          "**Ultrasound** is needed only for missing IUCD threads or suspected malposition; if not seen in the uterus, an **abdominal X-ray** looks for a perforated device. [MoHFW 2018]"
        ]
      },
      {
        "heading": "Treatment - general measures",
        "points": [
          "**Counsel with the Balanced Counselling Strategy Plus (BCS+) or GATHER** approach: Greet, Ask, Tell (effectiveness, how used, side effects, warning signs, STI protection), Help choose, Explain how to use, Return visit. [MoHFW 2024]",
          "**Quote effectiveness tiers first**, then let her choose; **offer LARC** to all, including adolescents and nulliparous women, but never push a method. [WHO FP Handbook 2022]",
          "**Dual protection**: no hormonal method or IUCD protects against HIV or STIs, so advise **condoms plus another method** whenever there is infection risk. [NACO 2021]",
          "**Male condom technique**: check expiry and packet, open without teeth or nails, pinch the tip to expel air and **roll on to the erect penis before any genital contact**, withdraw while still erect holding the rim, one condom per act, oil-based lubricants (petroleum jelly, coconut oil) damage latex. [WHO FP Handbook 2022]",
          "**Anticipatory guidance on bleeding changes** (spotting with pills early, irregular bleeding then amenorrhoea with DMPA and implant, heavier periods with copper) halves discontinuation. [WHO FP Handbook 2022]",
          "**Male involvement**: offer **no-scalpel vasectomy** actively - it is simpler, safer and cheaper than tubal ligation. [MoHFW 2014]",
          "**Adolescents**: all methods are medically eligible (age alone is category 1-2), confidentiality is assured, and emergency contraception should be discussed in advance. [WHO MEC 2015]",
          "**Programme support**: ASHA home delivery of condoms, pills and pregnancy kits, **Mission Parivar Vikas**, Nayi Pehel kits for newly married couples, and incentives for PPIUCD, sterilisation and Antara. [MoHFW 2024]"
        ]
      },
      {
        "heading": "Treatment - drugs",
        "points": [
          "**Combined pill (Mala-N)**: each cycle has **21 tablets of levonorgestrel 0.15 mg + ethinylestradiol 0.03 mg and 7 ferrous fumarate tablets**; take **one daily at the same time**, starting the new pack the day after the last iron tablet with no break. [MoHFW 2024]",
          "**Starting the pill**: start on **days 1-5 of the period** with no back-up; at any other time (quick start, pregnancy reasonably excluded) use **condoms for 7 days**; after first-trimester abortion start the same day. [WHO SPR 2016]",
          "**Missed pills (30-35 microgram EE pill, WHO rule)**: if **1 or 2 pills are missed** (or started 1-2 days late), take one missed pill now and continue - no back-up; if **3 or more are missed**, take one now, continue, and use **condoms for 7 days**. [WHO SPR 2016]",
          "**Where the missed pills fall**: if missed in **week 3**, finish the hormonal tablets and **skip the iron or placebo week**, starting the next pack at once; if missed in **week 1 with unprotected sex in the previous 5 days**, offer emergency contraception (UK FSRH applies these steps once 2 or more pills are missed). [WHO SPR 2016]",
          "**Vomiting within 2 hours of a pill (3 hours in UK guidance) or severe diarrhoea** counts as a missed pill - take another and follow missed-pill rules if it continues. [WHO SPR 2016]",
          "**COC side effects**: nausea (take at bedtime or with food), breast tenderness, headache and **breakthrough bleeding** usually settle within **3 cycles**; persistent bleeding - check adherence, vomiting, interacting drugs, chlamydia, pregnancy and cervix before changing pill. [FSRH 2023]",
          "**COC serious risks and warning signs (ACHES)**: **Abdominal pain, Chest pain, Headache (severe or new aura), Eye problems, Severe leg pain** - stop and attend the same day for VTE, stroke or hepatic problems. [FSRH 2023]",
          "**COC benefits**: regular lighter less painful periods, less acne, and about **50% lower ovarian and endometrial cancer risk** lasting decades; a small rise in cervical and breast cancer risk falls away after stopping. [FSRH 2023]",
          "**COC with interacting drugs**: with **enzyme inducers** switch to a copper IUCD, LNG-IUS or DMPA (unaffected) rather than doubling pills; the COC lowers **lamotrigine** levels, so it is category 3 with lamotrigine monotherapy. [FSRH 2023]",
          "**Progestogen-only pill (POP)**: **levonorgestrel 30 microgram or norethisterone 350 microgram daily** without a break - late if **over 3 hours**; **desogestrel 75 microgram daily** - late if **over 12 hours**; if late, take it at once, continue and use **condoms for 2 days (48 hours)**. [FSRH 2023]",
          "**POP use**: suits **breastfeeding women** (any time postpartum), smokers over 35, migraine with aura and women with oestrogen contraindications; the main side effect is **irregular bleeding**, and functional ovarian cysts can occur. [WHO MEC 2015]",
          "**Centchroman (Chhaya) 30 mg**: **one tablet twice a week for the first 3 months** (for example Sunday and Wednesday, first dose on day 1 of the period), then **once a week** on the same day indefinitely; if a dose is late by over 7 days, restart the twice-weekly regimen and use condoms until the next period. [MoHFW 2024]",
          "**Centchroman safety**: non-hormonal, safe in breastfeeding and diabetes; main effect is **delayed periods** (in about 8%) - exclude pregnancy; avoid in **PCOS, cervical hyperplasia, recent jaundice, liver or renal disease, TB** and severe allergy. [MoHFW 2024]",
          "**DMPA IM (Antara) 150 mg deep IM every 3 months (13 weeks)** in the deltoid or gluteus; first dose within **7 days of period start** (no back-up) or any time if not pregnant with **7 days of condoms**; it can be given **up to 2 weeks early and up to 4 weeks late** without back-up. [WHO SPR 2016]",
          "**DMPA-SC 104 mg/0.65 mL** (Uniject) is given subcutaneously every 3 months with the same grace period and can be **self-injected at home** after training - see Devices. [WHO SPR 2016]",
          "**DMPA side effects**: irregular bleeding then **amenorrhoea (about 50% at 1 year)**, weight gain of about **1-2 kg a year**, headache, mood change, reversible **BMD loss**, and **delayed return of fertility (about 10 months)**; it does not cause permanent infertility. [WHO FP Handbook 2022]",
          "**DMPA cautions**: category 3 with **BP 160/100 or over, vascular disease, multiple cardiovascular risk factors, unexplained vaginal bleeding** and diabetes with complications, category 4 in **current breast cancer**; it is category 2 under 18 and over 45 because of bone. [WHO MEC 2015]",
          "**Etonogestrel implant (68 mg, single rod)**: inhibits ovulation for **3 years** (evidence to 5); the levonorgestrel two-rod implant lasts 5 years; insert within 7 days of period start for immediate cover, otherwise 7 days of condoms. [WHO FP Handbook 2022]",
          "**Implant side effects**: unpredictable bleeding (the main reason for removal), acne, headache and breast tenderness; fertility returns **within days of removal**, and effectiveness falls with enzyme inducers. [WHO FP Handbook 2022]",
          "**Troublesome progestogen-only bleeding** (implant or DMPA): exclude infection and pregnancy, then give **mefenamic acid 500 mg twice or three times daily for 5 days** or, if eligible, a **COC for up to 3 months**. [FSRH 2023]",
          "**Copper IUCD (Cu-T 380A 10 years, Cu 375 5 years)**: effective immediately; heavier periods and cramps in the first months are treated with **mefenamic acid 500 mg three times daily with food** or **tranexamic acid 1 g three times daily** during menses. [MoHFW 2018]",
          "**LNG-IUS 52 mg**: contraception for **up to 8 years** (5 years for HMB and 5 years as endometrial protection with HRT); expect **spotting for 3-6 months** then light or absent periods; category 4 in current breast cancer. [NICE NG88 2021]",
          "**Emergency pill - levonorgestrel 1.5 mg single dose** as soon as possible, ideally **within 72 hours** and up to 120 hours of unprotected sex; with an enzyme inducer or **BMI over 30** use the copper IUCD or give **3 mg** (double dose). [WHO SPR 2016]",
          "**Ulipristal acetate 30 mg single dose within 120 hours** is more effective than levonorgestrel on days 3-5; wait **5 days before starting a hormonal method** (progestogen blocks its action) and use condoms meanwhile. [WHO SPR 2016]",
          "**Copper IUCD within 5 days** of unprotected sex (or within 5 days of the earliest expected ovulation) is the **most effective emergency method (failure under 0.1%)** and gives ongoing contraception. [WHO SPR 2016]",
          "**After emergency contraception**: start a regular method the same day (quick start with 7 days of condoms after levonorgestrel), do a **pregnancy test in 3 weeks** if the next period is late, and remember EC is not teratogenic. [WHO SPR 2016]",
          "**Switching methods**: start the new method **immediately without a gap** (for example from pill to DMPA on any day of the pack), and remove an IUCD only after the new method is effective. [WHO SPR 2016]"
        ]
      },
      {
        "heading": "Devices and how to use them",
        "points": [
          "**Choice of device**: the **copper IUCD** suits women wanting hormone-free, long-term or emergency contraception; the **LNG-IUS** suits women with heavy or painful periods or needing endometrial protection; the **implant** suits those wanting no pelvic examination; **DMPA-SC** suits those who prefer injections but cannot attend clinic every 3 months. [WHO FP Handbook 2022]",
          "**Timing of IUCD insertion**: any day once pregnancy is reasonably excluded (within 12 days of period start is convenient); **postpartum within 10 minutes of placenta delivery (post-placental) or within 48 hours**; during caesarean; immediately after first-trimester abortion; or from **6 weeks postpartum** - **48 hours to 4 weeks postpartum is category 3** because of expulsion. [MoHFW 2018]",
          "**Cu-T 380A interval insertion (withdrawal technique)**: (1) counsel, consent, **NSAID 30-60 minutes before**, empty bladder; (2) bimanual to confirm size and position; (3) Cusco speculum, clean cervix with antiseptic; (4) hold the anterior lip with a **vulsellum** and apply gentle traction to straighten the canal; (5) **sound the uterus** (no-touch) and note the depth. [MoHFW 2018]",
          "**Cu-T 380A insertion continued**: (6) load the arms into the inserter tube **inside the sterile package, no more than 5 minutes before insertion**, and set the blue flange to the sounded depth; (7) pass the loaded tube until the flange touches the cervix; (8) **hold the white rod still and withdraw the tube about 1.5 cm** to release the arms; (9) gently push the tube up to the fundus; (10) remove rod then tube and **cut the threads 3-4 cm** from the os. [MoHFW 2018]",
          "**Cu-IUCD errors**: pushing the rod instead of withdrawing the tube (perforation), inserting without sounding, loading too early so the arms lose their memory, missing a retroverted uterus, and **cutting threads too short**; perforation occurs in about **1 per 1000** insertions. [MoHFW 2018]",
          "**Postpartum IUCD (post-placental)**: within 10 minutes of placental delivery, hold the Cu-T with **long Kelly placental forceps**, place it at the **fundus** guided by the abdominal hand steadying the uterus, release and withdraw with the forceps slightly open and swept laterally; threads are not cut and descend by 6 weeks. [MoHFW 2018]",
          "**LNG-IUS insertion (slider inserter)**: sound; push the slider fully forward and pull the threads to draw the arms in; set the flange to the sounded depth; insert until the flange is **1.5-2 cm** from the cervix; **pull the slider back to the mark and wait 10 seconds** for the arms to open; advance until the flange touches the cervix; pull the slider fully back to release, withdraw and cut threads to 3 cm. [NICE NG88 2021]",
          "**Teach the IUCD user**: check the threads with a clean finger after each period, especially in the first 3 months (expulsion **3-5% in year 1**), and return for **missing or longer threads**, fever or pelvic pain, missed period, or a partner who feels the device. [MoHFW 2018]",
          "**Implant insertion**: (1) woman supine, **non-dominant arm flexed at the elbow and externally rotated**, hand beside the head; (2) mark the site **8-10 cm above the medial epicondyle and 3-5 cm posterior to the biceps-triceps sulcus** (over triceps, away from the neurovascular bundle); (3) antiseptic and **2 mL of 1% lidocaine** along the track. [WHO FP Handbook 2022]",
          "**Implant insertion continued**: (4) puncture the skin at **about 30 degrees with the bevel up**; (5) lower the applicator to horizontal, **tent the skin with the needle** and advance its full length just under the skin; (6) unlock the slider and retract the needle leaving the rod; (7) **provider and woman both palpate the 4 cm rod**; (8) pressure bandage 24 hours and dressing 3-5 days. [WHO FP Handbook 2022]",
          "**Implant errors**: **deep (intramuscular) insertion** - nerve injury and difficult removal - and **failure to insert** (rod still in the needle) are avoided by tenting and by palpating after insertion; a non-palpable rod needs ultrasound localisation and back-up contraception. [WHO FP Handbook 2022]",
          "**Implant removal**: palpate, press the proximal end to raise the distal tip, **2 mm incision** under local anaesthesia at the tip, push the rod out and grasp it with mosquito forceps; a new implant can go through the same incision. [WHO FP Handbook 2022]",
          "**DMPA-SC self-injection**: (1) wash hands, check expiry; (2) **shake vigorously for 30 seconds**; (3) **activate** by pushing the needle cap and port together until the gap closes; (4) remove the cap; (5) choose the **abdomen (away from the navel) or front of the thigh**, rotating sites. [WHO SPR 2016]",
          "**DMPA-SC self-injection continued**: (6) **pinch the skin** into a tent; (7) insert the needle fully, angled downwards, until the port touches the skin; (8) **squeeze the reservoir slowly over 5-7 seconds** until flat; (9) withdraw, **do not rub** the site; (10) dispose in a hard container and **write the next date (13 weeks) on a calendar**. [WHO SPR 2016]",
          "**DMPA-SC errors**: not shaking (drug stays in the reservoir), not activating, not pinching (intradermal injection), squeezing too fast and forgetting the date; the grace period is **up to 4 weeks late** without back-up. [WHO SPR 2016]"
        ]
      },
      {
        "heading": "Special situations (postpartum, post-abortion, perimenopause) and sterilisation",
        "points": [
          "**Postpartum**: copper IUCD within 48 hours or from 4-6 weeks; **POP, implant immediately** (DMPA from 6 weeks if breastfeeding per WHO); **COC not before 6 months if breastfeeding** (category 4 under 6 weeks, 3 at 6 weeks-6 months) or 21 days if not breastfeeding. [WHO MEC 2015]",
          "**Post-abortion**: ovulation returns within **2 weeks**, so start any method (IUCD, implant, pills, injectable) **the same day** after uncomplicated first-trimester abortion; IUCD is category 4 after septic abortion. [WHO SPR 2016]",
          "**Perimenopause**: continue contraception until **2 years after the last period if under 50 or 1 year if over 50**, or until age 55; COC is suitable till 50 in a healthy non-smoker, DMPA is best stopped by 50 (bone). [FSRH 2023]",
          "**HIV**: all methods are category 1-2 except that IUCD insertion is **category 3 with severe or advanced clinical disease (WHO stage 3-4)**; efavirenz-based ART lowers implant and pill efficacy, whereas dolutegravir does not. [WHO MEC 2015]",
          "**Sterilisation eligibility (GoI)**: ever-married, woman **22-49 years**, man under 60, at least **one child over 1 year of age** (unless medically indicated), voluntary written informed consent; **spouse consent is not required** and sterilisation must never be a condition for another benefit. [MoHFW 2014]",
          "**Female sterilisation**: **minilaparotomy with modified Pomeroy** (interval or within 7 days postpartum) or **laparoscopic Falope ring** (interval, at least 6 weeks postpartum); failure about **0.5 per 100 over 10 years**, one-third of failures ectopic. [MoHFW 2014]",
          "**No-scalpel vasectomy**: vas isolated through a single puncture under local anaesthesia; **not effective immediately** - use condoms for **3 months** and confirm **azoospermia on semen analysis at 12 weeks**; it does not affect potency or libido. [MoHFW 2014]",
          "**Family Planning Indemnity Scheme** compensates for death, complication or failure after public-sector sterilisation, and only certified providers at accredited facilities may operate. [MoHFW 2014]"
        ]
      },
      {
        "heading": "Follow-up, monitoring and when to refer",
        "points": [
          "**Pills**: give up to **1 year's supply**, review BP at least annually, and ask about migraine aura, new drugs and smoking; no routine blood tests. [WHO SPR 2016]",
          "**IUCD**: a single follow-up visit at **3-6 weeks** (or after the first period) to check threads and satisfaction; then return only for problems. [MoHFW 2018]",
          "**DMPA**: book the next injection at **13 weeks** (grace up to 17 weeks), reassess bone risk and the need to continue after 2 years in adolescents. [WHO SPR 2016]",
          "**Missing threads**: UPT, back-up contraception, **ultrasound**; if the uterus is empty and no expulsion was noticed, **abdominal X-ray** - an extrauterine copper device is removed laparoscopically. [MoHFW 2018]",
          "**Pregnancy with an IUCD**: exclude ectopic; if threads are visible and it is under 12 weeks, **remove the device** (reduces miscarriage, sepsis and preterm birth). [WHO SPR 2016]",
          "**PID with an IUCD in place**: treat with standard antibiotics **without removing the device**; remove only if there is no improvement in **48-72 hours**. [WHO SPR 2016]",
          "**Refer**: suspected VTE, stroke or MI on the pill (same day), non-palpable implant, difficult IUCD removal, perforation or embedded device, and women with complex MEC category 3-4 conditions needing specialist advice. [FSRH 2023]"
        ]
      }
    ],
    "tables": [
      {
        "heading": "WHO MEC categories for selected conditions (CHC, POP-implant, DMPA, Cu-IUCD / LNG-IUS)",
        "columns": [
          "Condition",
          "Combined pill",
          "POP and implant",
          "DMPA",
          "Cu-IUCD / LNG-IUS"
        ],
        "rows": [
          [
            "Migraine with aura",
            "4",
            "2 (3 to continue)",
            "2 (3 to continue)",
            "1 / 2 (3 to continue)"
          ],
          [
            "Age 35 or over, smoking 15 or more a day",
            "4",
            "1",
            "1",
            "1 / 1"
          ],
          [
            "BP 160/100 or over",
            "4",
            "2",
            "3",
            "1 / 2"
          ],
          [
            "BP 140-159/90-99",
            "3",
            "1",
            "2",
            "1 / 1"
          ],
          [
            "History of DVT or PE",
            "4",
            "2",
            "2",
            "1 / 2"
          ],
          [
            "Breastfeeding under 6 weeks",
            "4",
            "2",
            "3 (WHO)",
            "Under 48 h: 1 / 2; 48 h-4 weeks: 3 / 3"
          ],
          [
            "Current breast cancer",
            "4",
            "4",
            "4",
            "1 / 4"
          ],
          [
            "Diabetes with vascular disease",
            "3-4",
            "2",
            "3",
            "1 / 2"
          ],
          [
            "Rifampicin or enzyme-inducing anticonvulsants",
            "3",
            "3 (implant 2)",
            "1",
            "1 / 1"
          ],
          [
            "Current PID, purulent cervicitis, chlamydia or gonorrhoea",
            "1",
            "1",
            "1",
            "4 to insert, 2 to continue"
          ],
          [
            "Unexplained vaginal bleeding (not evaluated)",
            "2",
            "2 (implant 3)",
            "3",
            "4 to insert"
          ],
          [
            "Obesity BMI 30 or over",
            "2",
            "1",
            "1",
            "1 / 1"
          ]
        ]
      },
      {
        "heading": "Drugs: dose, duration and side effects",
        "columns": [
          "Drug",
          "Mechanism",
          "Dose and duration",
          "Side effects",
          "How to take"
        ],
        "rows": [
          [
            "Combined pill (Mala-N: LNG 0.15 mg + EE 0.03 mg)",
            "Inhibits ovulation, thick mucus",
            "1 tablet daily, 21 hormone + 7 iron, no break between packs",
            "Nausea, spotting, breast tenderness, VTE, BP rise",
            "Same time daily; start day 1-5; 1-2 missed: continue; 3 or more: 7 days condoms"
          ],
          [
            "Desogestrel POP 75 microgram",
            "Inhibits ovulation, thick mucus",
            "1 tablet daily continuously",
            "Irregular bleeding, acne, ovarian cysts",
            "Late over 12 h (LNG or NET POP over 3 h): take now, condoms 48 h"
          ],
          [
            "Centchroman (Chhaya) 30 mg",
            "SERM, out-of-phase endometrium",
            "Twice weekly x 3 months, then weekly",
            "Delayed periods",
            "Fixed weekdays; first dose day 1 of period"
          ],
          [
            "DMPA IM (Antara) 150 mg",
            "Inhibits ovulation",
            "Deep IM every 13 weeks (2 weeks early to 4 weeks late)",
            "Irregular bleeding, amenorrhoea, weight gain, BMD loss, delayed fertility",
            "Do not massage site; first dose day 1-7"
          ],
          [
            "DMPA-SC 104 mg",
            "Inhibits ovulation",
            "SC every 13 weeks, self-injection possible",
            "As DMPA IM, local reactions",
            "Shake, activate, pinch, inject slowly, do not rub"
          ],
          [
            "Etonogestrel implant 68 mg",
            "Inhibits ovulation",
            "Single rod, 3 years",
            "Unpredictable bleeding, acne, headache",
            "Inner non-dominant arm; palpate after insertion"
          ],
          [
            "LNG-IUS 52 mg",
            "Endometrial atrophy, thick mucus",
            "Up to 8 years contraception (5 for HMB or HRT)",
            "Spotting 3-6 months, amenorrhoea, hormonal effects",
            "Clinic insertion; check threads after each period"
          ],
          [
            "Copper IUCD 380A",
            "Copper ions spermicidal, ovotoxic",
            "10 years (Cu 375: 5 years); EC within 5 days",
            "Heavier, painful periods; expulsion, perforation",
            "Clinic insertion; NSAID for heavy periods"
          ],
          [
            "Levonorgestrel EC 1.5 mg",
            "Delays LH surge and ovulation",
            "Single dose within 72 h (up to 120 h); 3 mg if BMI over 30 or enzyme inducer",
            "Nausea, spotting, delayed period",
            "Repeat if vomited within 2 h; start regular method same day"
          ],
          [
            "Ulipristal acetate 30 mg",
            "Progesterone-receptor modulator, delays ovulation",
            "Single dose within 120 h",
            "Nausea, headache, delayed period",
            "Wait 5 days before starting hormonal method"
          ]
        ]
      },
      {
        "heading": "Contraceptive devices: choice and technique",
        "columns": [
          "Device",
          "Best for",
          "Technique key steps",
          "Common errors"
        ],
        "rows": [
          [
            "Cu-T 380A (interval)",
            "Hormone-free LARC, emergency contraception",
            "Bimanual, vulsellum traction, sound, load under 5 min, withdraw tube 1.5 cm, cut threads 3-4 cm",
            "Pushing rod, not sounding, missed retroversion, threads too short"
          ],
          [
            "PPIUCD",
            "Immediate postpartum or intra-caesarean",
            "Kelly forceps to fundus within 10 min of placenta or within 48 h",
            "Low placement causing expulsion, inserting with chorioamnionitis"
          ],
          [
            "LNG-IUS",
            "HMB, dysmenorrhoea, HRT endometrial protection",
            "Flange to sound depth, stop 1.5-2 cm short, release arms, wait 10 s, advance",
            "Releasing arms in the canal, poor counselling on spotting"
          ],
          [
            "Subdermal implant",
            "LARC without pelvic examination",
            "Inner non-dominant arm over triceps, 30 degrees then tent skin, palpate rod",
            "Deep insertion, rod left in needle, not palpating"
          ],
          [
            "DMPA-SC (Uniject)",
            "Self-injection at home",
            "Shake, activate, pinch abdomen or thigh, squeeze over 5-7 s, do not rub",
            "Not shaking, not activating, forgetting 13-week date"
          ]
        ]
      }
    ],
    "redFlags": [
      "Sudden severe headache, new aura, unilateral weakness or visual loss on the combined pill - stop it and assess for stroke.",
      "Calf pain and swelling, pleuritic chest pain or breathlessness on combined hormonal contraception - suspect VTE, same-day referral.",
      "Pelvic pain with a late period in an IUCD user or after sterilisation - ectopic pregnancy until proved otherwise.",
      "Fever, offensive discharge and pelvic tenderness within 20 days of IUCD insertion - PID; treat at once, remove only if no response in 48-72 hours.",
      "Missing IUCD threads with a positive pregnancy test - exclude ectopic and locate the device by ultrasound.",
      "Unexplained vaginal bleeding before evaluation - IUCD insertion is category 4 until the cause is known.",
      "Jaundice or a liver mass in a long-term pill user - stop the pill and image.",
      "Non-palpable implant after insertion - back-up contraception and ultrasound localisation."
    ],
    "pearls": [
      "State WHO MEC as 1 no restriction, 2 benefits outweigh risks, 3 risks usually outweigh benefits, 4 unacceptable risk - and 1-2 use, 3-4 do not use at peripheral level.",
      "Migraine with aura is category 4 for the combined pill but 1 for the copper IUCD - the classic single-best-answer switch.",
      "The most effective emergency contraception is the copper IUCD within 5 days, not a pill.",
      "No pelvic examination, Pap smear or blood test is needed before pills, condoms or injectables - only BP before the combined pill.",
      "WHO missed-pill rule for Mala-N: 1-2 missed, continue with no back-up; 3 or more missed, 7 days of condoms, skip the iron week if in week 3, EC if in week 1 with recent sex.",
      "DMPA can be given up to 4 weeks late without back-up; warn about amenorrhoea, weight gain and a 10-month delay in fertility.",
      "Vasectomy needs 3 months of condoms and a semen analysis showing azoospermia before it can be relied upon.",
      "Spouse consent is not required for sterilisation in India; the woman must be 22-49 with at least one child over 1 year.",
      "Chhaya is the non-hormonal weekly pill for a breastfeeding woman; start twice weekly for 3 months, then weekly."
    ],
    "references": [
      "WHO. Medical eligibility criteria for contraceptive use, 5th edition, 2015.",
      "WHO. Selected practice recommendations for contraceptive use, 3rd edition, 2016.",
      "WHO and Johns Hopkins CCP. Family Planning: A Global Handbook for Providers, 2022 edition.",
      "MoHFW Family Planning Division. Reference manuals for IUCD and PPIUCD services (2018), injectable MPA (2016), oral pills (2016) and female and male sterilisation (2014).",
      "FSRH Clinical Guideline. Combined hormonal contraception (2019, amended 2023) and Progestogen-only pills (2022).",
      "NFHS-5 India Report 2019-21, family planning chapter."
    ]
  },
  "gynaecology-pcos": {
    "oneLiner": "Polycystic ovary syndrome (PCOS) is a lifelong **endocrine-metabolic disorder** diagnosed by the **Rotterdam criteria (2 of 3: ovulatory dysfunction, hyperandrogenism, polycystic ovarian morphology or high AMH)** after excluding thyroid disease, hyperprolactinaemia, non-classical CAH and androgen-secreting tumours; treatment starts with **lifestyle and 5-10% weight loss**, then the **combined pill** for cycles and hirsutism, **metformin** for metabolic risk, and **letrozole** for ovulation induction.",
    "sections": [
      {
        "heading": "Definition and the classification that matters",
        "points": [
          "**Rotterdam criteria (endorsed by the 2023 International Guideline)**: any **two of three** - (1) **oligo- or anovulation**, (2) **clinical or biochemical hyperandrogenism**, (3) **polycystic ovarian morphology (PCOM) on ultrasound or raised AMH** - after excluding mimics. [PCOS Guideline 2023]",
          "**Irregular cycles in adults** (over 3 years after menarche): cycles **under 21 or over 35 days, or fewer than 8 a year**; 1-3 years after menarche, under 21 or over 45 days; any cycle over 90 days is irregular at any stage. [PCOS Guideline 2023]",
          "**PCOM**: **20 or more follicles of 2-9 mm in either ovary, or ovarian volume 10 mL or more** on a transvaginal probe of 8 MHz or higher; **AMH** can replace ultrasound in adults, but **neither is used within 8 years of menarche**. [PCOS Guideline 2023]",
          "**Adolescents**: diagnose only with **both irregular cycles and hyperandrogenism**; if only one is present, label them 'at risk' and reassess later. [PCOS Guideline 2023]",
          "**Phenotypes (NIH 2012)**: **A** - all three features (most severe metabolic risk); **B** - hyperandrogenism plus anovulation; **C** - hyperandrogenism plus PCOM (ovulatory); **D** - anovulation plus PCOM without hyperandrogenism (mildest). [PCOS Guideline 2023]",
          "**Burden in India**: prevalence **3.7-22.5%** depending on criteria and population, with more insulin resistance and central adiposity at any BMI - hence **Asian-Indian cut-offs** (BMI 23 overweight, 25 obese, waist over 80 cm). [ICMR 2020]"
        ]
      },
      {
        "heading": "Pathophysiology and pathoanatomy",
        "points": [
          "**Normal two-cell system**: LH drives **theca cells** (CYP17) to make androstenedione and testosterone, which diffuse into **granulosa cells** where FSH-driven **aromatase** converts them to oestradiol - PCOS tips this balance toward androgen. [Speroff 9e]",
          "**Hypothalamic defect**: GnRH **pulse frequency is persistently fast**, which favours **LH over FSH** synthesis; low progesterone (no ovulation) fails to slow the pulse generator, so the cycle is self-perpetuating. [Speroff 9e]",
          "**Theca hyperactivity**: PCOS theca cells are intrinsically over-responsive, and raised LH plus insulin push **ovarian androgen production** up; relative FSH lack means too little aromatase to convert it. [Berek and Novak 16e]",
          "**Insulin resistance** (in 50-70%, including lean women) is a **post-receptor defect in muscle and fat**; compensatory **hyperinsulinaemia** acts through ovarian insulin and IGF-1 receptors as a **co-gonadotrophin with LH**. [PCOS Guideline 2023]",
          "**Low SHBG**: insulin suppresses hepatic **sex hormone-binding globulin**, so **free testosterone rises** even when total testosterone is normal - measure SHBG and calculate the free androgen index. [Berek and Novak 16e]",
          "**Follicular arrest**: androgens and high **AMH** (2-3 times normal, from the many small follicles) block FSH action, so follicles stall at **2-9 mm** and **no dominant follicle is selected** - the scan picture and the anovulation have one cause. [PCOS Guideline 2023]",
          "**Hirsutism and acne**: in the pilosebaceous unit **5-alpha-reductase** converts testosterone to **DHT**, turning fine vellus hair into coarse **terminal hair** in androgen-dependent areas and increasing sebum - which is why antiandrogens and COCs help. [Berek and Novak 16e]",
          "**Acanthosis nigricans**: very high insulin stimulates **IGF-1 receptors on keratinocytes and fibroblasts**, producing velvety pigmented skin in the neck and axillae - a bedside marker of insulin resistance. [PCOS Guideline 2023]",
          "**Obesity** amplifies every step: adipose tissue **aromatises androstenedione to oestrone**, worsens insulin resistance and lowers SHBG further - so **5-10% weight loss** can restore ovulation. [PCOS Guideline 2023]",
          "**Endometrium**: chronic anovulation means **unopposed oestrogen without progesterone withdrawal**, giving irregular heavy bleeding (AUB-O), **hyperplasia and a 2-6 fold risk of endometrial cancer**. [PCOS Guideline 2023]",
          "**Metabolic consequences**: impaired glucose tolerance, **type 2 diabetes (about 4-fold)**, gestational diabetes, dyslipidaemia (high TG, low HDL), NAFLD, hypertension and **obstructive sleep apnoea**. [PCOS Guideline 2023]",
          "**Psychological burden**: depression and anxiety are **3-5 times commoner**, driven by hirsutism, weight, infertility and body image. [PCOS Guideline 2023]",
          "**Aetiology**: strongly **familial and polygenic** (for example DENND1A, LHCGR, FSHR loci), with possible **prenatal androgen programming** of the hypothalamus. [Speroff 9e]",
          "**Why drugs work**: **COCs** suppress LH (less ovarian androgen) and **raise SHBG**; **metformin** lowers hepatic glucose output and insulin; **spironolactone** blocks the androgen receptor; **letrozole** blocks aromatase, lowering oestrogen so FSH rises and a follicle is selected. [PCOS Guideline 2023]"
        ]
      },
      {
        "heading": "History in the OPD",
        "points": [
          "**Menstrual history since menarche**: cycle length and number per year, longest gap without a period, and heavy or prolonged bleeds - over 3 months of amenorrhoea raises endometrial concern. [PCOS Guideline 2023]",
          "**Hyperandrogenism**: excess hair (face, chest, abdomen), **how she removes it** (threading, waxing, shaving - it lowers the visible score), acne and scalp hair thinning. [PCOS Guideline 2023]",
          "**Tempo of symptoms**: slowly progressive since puberty suggests PCOS; **rapid onset over months with voice change or clitoral enlargement** suggests an androgen-secreting tumour. [PCOS Guideline 2023]",
          "**Weight trajectory**, diet and physical activity - weight gain often precedes cycle irregularity and is the lever for treatment. [PCOS Guideline 2023]",
          "**Fertility plans** - trying to conceive now, later, or not at all; this single answer decides whether you use the COC or ovulation induction. [PCOS Guideline 2023]",
          "**Mimic clues**: galactorrhoea and headache (prolactinoma), cold intolerance and constipation (hypothyroidism), **striae, easy bruising and proximal weakness** (Cushing), family history of CAH or consanguinity. [PCOS Guideline 2023]",
          "**Drug history**: valproate, anabolic steroids, danazol and testosterone gels cause hirsutism or PCOS-like cycles. [Speroff 9e]",
          "**Family history** of type 2 diabetes, PCOS, premature cardiovascular disease and dyslipidaemia. [PCOS Guideline 2023]",
          "**Screen for mood** (PHQ-9 and GAD-7), **eating disorders**, body-image distress and snoring or daytime sleepiness (OSA). [PCOS Guideline 2023]",
          "**Contraceptive needs and MEC factors** (migraine with aura, smoking, BP, VTE) before prescribing a COC. [WHO MEC 2015]"
        ]
      },
      {
        "heading": "Examination",
        "points": [
          "**Weight, height, BMI and waist circumference** at every visit, using Asian-Indian cut-offs (waist over 80 cm is central obesity). [ICMR 2020]",
          "**Blood pressure** at diagnosis and at least annually. [PCOS Guideline 2023]",
          "**Modified Ferriman-Gallwey score**: grade terminal hair **0-4 in nine areas** (upper lip, chin, chest, upper and lower abdomen, upper arm, thigh, upper and lower back; total 0-36); a score of **4-6 or more** indicates hirsutism in South Asian women. [PCOS Guideline 2023]",
          "**Acne** (distribution and severity) and **female-pattern hair loss** graded by the **Ludwig scale** (crown thinning with a preserved frontal hairline). [PCOS Guideline 2023]",
          "**Acanthosis nigricans** in the neck, axillae and groins and skin tags - markers of insulin resistance. [PCOS Guideline 2023]",
          "**Virilisation**: **clitoromegaly** (clitoral index over 35 mm2), deep voice, temporal balding, male muscle pattern and breast atrophy - these are not PCOS and need tumour work-up. [Speroff 9e]",
          "**Cushingoid features**: purple striae over 1 cm, proximal myopathy, thin skin with bruising, dorsocervical fat pad. [PCOS Guideline 2023]",
          "**Thyroid and breasts** (goitre, expressible galactorrhoea); a pelvic examination only if sexually active and an adnexal mass or other pathology is suspected. [PCOS Guideline 2023]"
        ]
      },
      {
        "heading": "Minimal investigations",
        "points": [
          "**Exclude mimics**: **TSH**, **prolactin**, and early-morning follicular-phase **17-hydroxyprogesterone** (over 2 ng/mL, or 6 nmol/L, needs an ACTH stimulation test for non-classical CAH); **beta-hCG** if amenorrhoeic. [PCOS Guideline 2023]",
          "**Biochemical hyperandrogenism**: **total testosterone (ideally LC-MS) with SHBG to calculate the free androgen index**; add androstenedione and DHEAS only if testosterone is normal and suspicion is high. [PCOS Guideline 2023]",
          "**Tumour triggers**: total testosterone **over 150 ng/dL (5.2 nmol/L)** or **DHEAS over twice the upper limit** with rapid virilisation - image ovaries and adrenals. [PCOS Guideline 2023]",
          "**Metabolic screen at diagnosis**: **75 g OGTT** (preferred - HbA1c and fasting glucose miss impaired glucose tolerance), **fasting lipid profile**, and repeat glycaemic testing every **1-3 years** according to risk. [PCOS Guideline 2023]",
          "**Pelvic ultrasound**: transvaginal if sexually active, otherwise transabdominal (ovarian volume only); **not needed for diagnosis** if irregular cycles plus hyperandrogenism already make it; **do not use within 8 years of menarche**. [PCOS Guideline 2023]",
          "**Endometrial assessment**: TVS endometrial thickness and **biopsy** when amenorrhoea has lasted over 3-4 months without progestogen, the endometrium is thickened, or bleeding is persistent and irregular, especially over 35 or obese. [PCOS Guideline 2023]",
          "**Do not order routinely**: LH, FSH or the **LH:FSH ratio**, fasting insulin or HOMA-IR, and AMH in adolescents - none change management. [PCOS Guideline 2023]"
        ]
      },
      {
        "heading": "Treatment - general measures",
        "points": [
          "**Lifestyle is first-line for all**: a **5-10% weight loss within 6 months** restores ovulation in many, improves hirsutism, insulin resistance and pregnancy rates. [PCOS Guideline 2023]",
          "**Diet**: an energy deficit of **500-750 kcal/day** (about 1200-1500 kcal/day), with any healthy pattern - no specific 'PCOS diet' is superior; reduce refined carbohydrates and sugary drinks. [PCOS Guideline 2023]",
          "**Exercise**: at least **150 minutes a week of moderate or 75 minutes of vigorous activity** (250 minutes for weight loss) plus muscle strengthening on 2 days, and less sitting. [PCOS Guideline 2023]",
          "**Hair removal**: **laser or intense pulsed light** is the most effective physical method; threading, waxing and bleaching are acceptable, and **eflornithine 11.5% cream twice daily** slows facial hair growth. [PCOS Guideline 2023]",
          "**Explain the condition**: lifelong, not an 'ovarian cyst' needing surgery, fertility is usually achievable, and **long-term risks** (diabetes, endometrial cancer) are preventable. [PCOS Guideline 2023]",
          "**Mental health support** and avoid weight stigma; refer for counselling when screening is positive. [PCOS Guideline 2023]",
          "**Preconception care**: folic acid, weight optimisation, stop smoking and alcohol, check rubella immunity and screen for diabetes before pregnancy. [PCOS Guideline 2023]"
        ]
      },
      {
        "heading": "Treatment - drugs",
        "points": [
          "**Combined oral contraceptive (first-line for cycle control and hyperandrogenism)**: suppresses LH-driven ovarian androgen and **raises SHBG**, regularises bleeding and **protects the endometrium**; use the **lowest effective oestrogen dose (20-30 microgram EE)**, for example **EE 30 microgram + levonorgestrel 150 microgram, one tablet daily**, after checking WHO MEC. [PCOS Guideline 2023]",
          "**COC choice**: no preparation is superior; **EE 35 microgram + cyproterone acetate 2 mg** has a higher VTE risk and is **not first-line**, reserved for severe hirsutism or acne; allow **6 months** before judging hirsutism response. [PCOS Guideline 2023]",
          "**COC side effects**: nausea, breast tenderness, breakthrough bleeding (settles by 3 months), BP rise and VTE; follow the standard missed-pill rules. [FSRH 2023]",
          "**Metformin (biguanide)**: reduces hepatic gluconeogenesis and improves peripheral insulin sensitivity, lowering insulin and androgens; start **500 mg once daily with the evening meal**, increase by 500 mg every 1-2 weeks to **1500-2000 mg/day in divided doses with meals** (or extended-release once daily). [PCOS Guideline 2023]",
          "**Metformin use**: added to the COC for metabolic features (BMI 25 or over in Asians, IGT) and used alone when the COC is contraindicated; it modestly improves weight and cycles but **does not treat hirsutism or acne** and is not an ovulation inducer on its own. [PCOS Guideline 2023]",
          "**Metformin side effects**: nausea, diarrhoea and abdominal pain (reduce with slow titration, food and the XR form), **vitamin B12 deficiency** with long use; **stop if eGFR under 30**, reduce under 45, and withhold during acute illness or iodinated contrast. [PCOS Guideline 2023]",
          "**Cyclical progestogen (endometrial protection when a COC is not used)**: **medroxyprogesterone acetate 10 mg once daily for 12-14 days every 1-3 months** (or dydrogesterone 10 mg twice daily for the same days) produces a withdrawal bleed; it is **not contraceptive**. [PCOS Guideline 2023]",
          "**LNG-IUS 52 mg** is an alternative for endometrial protection and contraception in women who cannot take oestrogen. [PCOS Guideline 2023]",
          "**Spironolactone (antiandrogen)**: aldosterone and **androgen-receptor antagonist**; **25-100 mg daily** (often 50 mg twice daily) added after **6 months of COC** if hirsutism persists; only with **reliable contraception** because it **feminises a male fetus**. [PCOS Guideline 2023]",
          "**Spironolactone monitoring**: polyuria, postural dizziness, breast tenderness and irregular bleeding; check **potassium and creatinine** at baseline and after starting, and avoid with ACE inhibitors, ARBs or renal impairment. [PCOS Guideline 2023]",
          "**Other antiandrogens**: finasteride (5-alpha-reductase inhibitor) is also teratogenic and needs contraception; **flutamide is avoided** because of hepatotoxicity. [PCOS Guideline 2023]",
          "**Anti-obesity drugs**: **GLP-1 receptor agonists** (liraglutide, semaglutide) can be considered in adults with obesity alongside lifestyle, with contraception, and should be **stopped at least 2 months before conception** (semaglutide). [PCOS Guideline 2023]",
          "**Inositol** (myo-inositol 2-4 g/day) has limited evidence of metabolic benefit and should be presented as experimental, not as a proven therapy. [PCOS Guideline 2023]",
          "**Letrozole (aromatase inhibitor) - first-line ovulation induction**: blocks oestrogen synthesis, the hypothalamus senses low oestrogen and **raises FSH**; **2.5 mg once daily on days 3-7** of a spontaneous or progestogen-induced bleed, increasing by 2.5 mg per cycle to **7.5 mg** if no ovulation; better live-birth rates than clomiphene. [PCOS Guideline 2023]",
          "**Letrozole in India**: its use for ovulation induction is **off-label** (DCGI 2011 advisory), so document informed consent; side effects are hot flushes, headache and fatigue, and it has no antioestrogenic effect on the endometrium or mucus. [FOGSI 2018]",
          "**Clomiphene citrate (SERM)**: blocks hypothalamic oestrogen receptors so GnRH and FSH rise; **50 mg once daily on days 2-6**, increasing to **100 then 150 mg**; maximum **6 ovulatory cycles** (12 in total); side effects are hot flushes, visual blurring (stop), multiple pregnancy (about 8-10%) and thin endometrium. [PCOS Guideline 2023]",
          "**Monitoring ovulation induction**: **follicle tracking by TVS** at least in the first cycle, **mid-luteal (day 21) progesterone over 10 nmol/L (3 ng/mL)** confirms ovulation, and intercourse every 2-3 days from day 10. [PCOS Guideline 2023]",
          "**Second and third line**: **gonadotrophins** (low-dose step-up) or **laparoscopic ovarian drilling** for letrozole-resistant women, then **IVF** (antagonist protocol with agonist trigger to prevent OHSS) - specialist care. [PCOS Guideline 2023]",
          "**Treat comorbidities on merit**: statins by cardiovascular risk score, antihypertensives to target, and diabetes per standard guidelines. [PCOS Guideline 2023]"
        ]
      },
      {
        "heading": "Special situations (adolescents and pregnancy)",
        "points": [
          "**Adolescents 'at risk'**: treat symptoms (COC for irregular cycles or acne, lifestyle) without a firm label, and reassess **8 years after menarche**. [PCOS Guideline 2023]",
          "**Pregnancy**: higher risk of **gestational diabetes, pre-eclampsia, preterm birth and miscarriage** - do an early OGTT (or at booking) and screen for hypertension; metformin is not routinely continued for miscarriage prevention. [PCOS Guideline 2023]",
          "**Ovarian hyperstimulation syndrome**: PCOS is the strongest risk factor, so gonadotrophin cycles need low doses, careful monitoring and cycle cancellation if over 3 follicles of 16 mm or more develop. [PCOS Guideline 2023]"
        ]
      },
      {
        "heading": "Follow-up, monitoring and when to refer",
        "points": [
          "**Weight, waist and BP** every 6-12 months, and **mood screening** at each review. [PCOS Guideline 2023]",
          "**OGTT every 1-3 years** (annually if IGT, BMI over 25 in Asians, family history, or previous GDM) and **lipids** as per cardiovascular risk. [PCOS Guideline 2023]",
          "**Ensure a withdrawal bleed at least every 3 months** in women not on a COC; biopsy if bleeding is persistently irregular or the endometrium is thickened. [PCOS Guideline 2023]",
          "**Review hirsutism at 6 months** before adding an antiandrogen. [PCOS Guideline 2023]",
          "**Refer urgently** for rapid virilisation, testosterone over 150 ng/dL or DHEAS over twice normal, and suspected Cushing syndrome. [PCOS Guideline 2023]",
          "**Refer to fertility services** after 6 ovulatory cycles of letrozole or clomiphene without pregnancy, anovulation on maximum dose, or any other infertility factor (tubal, male). [PCOS Guideline 2023]",
          "**Refer** for bariatric surgery only by usual criteria, and to psychiatry for severe depression or eating disorders. [PCOS Guideline 2023]"
        ]
      }
    ],
    "tables": [
      {
        "heading": "Rotterdam diagnostic criteria and exclusions (2023 International Guideline)",
        "columns": [
          "Element",
          "How it is established",
          "Notes"
        ],
        "rows": [
          [
            "Ovulatory dysfunction",
            "Cycles under 21 or over 35 days, or fewer than 8 a year",
            "Age-specific limits in the first 3 years after menarche"
          ],
          [
            "Hyperandrogenism",
            "mFG 4-6 or more, acne, alopecia; free androgen index",
            "Clinical or biochemical is enough"
          ],
          [
            "PCOM or AMH",
            "20 or more follicles 2-9 mm or volume 10 mL or more; AMH in adults",
            "Not within 8 years of menarche"
          ],
          [
            "Exclude thyroid and prolactin",
            "TSH, prolactin",
            "Hypothyroidism and prolactinoma mimic PCOS"
          ],
          [
            "Exclude non-classical CAH",
            "Morning follicular 17-OHP; over 2 ng/mL needs ACTH test",
            "Consider in consanguinity, family history"
          ],
          [
            "Exclude tumour or Cushing",
            "Testosterone over 150 ng/dL, DHEAS, dexamethasone suppression test",
            "Rapid virilisation is the trigger"
          ]
        ]
      },
      {
        "heading": "Drugs: dose, duration and side effects",
        "columns": [
          "Drug",
          "Mechanism",
          "Dose and duration",
          "Side effects",
          "How to take"
        ],
        "rows": [
          [
            "COC (EE 30 microgram + LNG 150 microgram)",
            "Suppresses LH, raises SHBG, protects endometrium",
            "1 tablet daily; review hirsutism at 6 months",
            "Nausea, spotting, BP rise, VTE",
            "Same time daily; check WHO MEC; missed-pill rules"
          ],
          [
            "Metformin",
            "Lowers hepatic glucose output, insulin",
            "500 mg daily, titrate to 1500-2000 mg/day",
            "GI upset, B12 deficiency, lactic acidosis (rare)",
            "With meals; slow titration; stop if eGFR under 30"
          ],
          [
            "Medroxyprogesterone acetate",
            "Progestogen withdrawal bleed",
            "10 mg daily for 12-14 days every 1-3 months",
            "Bloating, breast tenderness",
            "Not contraceptive; bleed 2-7 days after last tablet"
          ],
          [
            "Spironolactone",
            "Androgen-receptor antagonist",
            "25-100 mg daily, after 6 months of COC",
            "Polyuria, hyperkalaemia, irregular bleeding",
            "With reliable contraception; check potassium"
          ],
          [
            "Eflornithine 11.5% cream",
            "Inhibits hair follicle ornithine decarboxylase",
            "Twice daily to face, at least 8 hours apart",
            "Burning, acne, rash",
            "Apply after hair removal; effect in 6-8 weeks"
          ],
          [
            "Letrozole",
            "Aromatase inhibitor, raises FSH",
            "2.5 mg days 3-7, up to 7.5 mg; up to 6 ovulatory cycles",
            "Hot flushes, headache, fatigue",
            "Off-label in India; follicle tracking; exclude pregnancy first"
          ],
          [
            "Clomiphene citrate",
            "Hypothalamic oestrogen-receptor blocker",
            "50 mg days 2-6, up to 150 mg; max 6 ovulatory cycles",
            "Hot flushes, visual blurring, multiple pregnancy",
            "Stop if visual symptoms; day 21 progesterone"
          ]
        ]
      }
    ],
    "redFlags": [
      "Hirsutism developing over months with clitoromegaly, voice deepening or muscle bulk - androgen-secreting tumour, not PCOS.",
      "Total testosterone over 150 ng/dL or DHEAS over twice the upper limit - refer for tumour imaging.",
      "Over 3-4 months without a period, or persistent irregular bleeding with a thick endometrium - sample for hyperplasia.",
      "Purple striae, proximal myopathy and easy bruising - screen for Cushing syndrome.",
      "Abdominal distension, breathlessness and oliguria after ovulation induction - OHSS, admit.",
      "Acanthosis nigricans with HbA1c or OGTT in the diabetic range in an adolescent - established type 2 diabetes.",
      "Severe depression or suicidal ideation - same-day mental health assessment."
    ],
    "pearls": [
      "Rotterdam is 2 of 3 and a diagnosis of exclusion - name TSH, prolactin and 17-OHP with the criteria.",
      "Do not order the LH:FSH ratio or fasting insulin - neither is a criterion nor changes treatment.",
      "No ultrasound or AMH for diagnosis within 8 years of menarche; PCOM is now 20 follicles or 10 mL.",
      "A 5-10% weight loss is the single most effective intervention - say it before any drug.",
      "Letrozole, not clomiphene, is first-line ovulation induction in PCOS, with higher live-birth rates.",
      "Every woman with PCOS needs an OGTT at diagnosis and every 1-3 years - HbA1c misses IGT.",
      "A woman who refuses the pill still needs endometrial protection - progestogen every 1-3 months or an LNG-IUS.",
      "Spironolactone and finasteride only with reliable contraception - they feminise a male fetus."
    ],
    "references": [
      "International Evidence-based Guideline for the Assessment and Management of PCOS, Monash University and ESHRE, 2023.",
      "Rotterdam ESHRE/ASRM-sponsored PCOS consensus workshop group, 2003.",
      "FOGSI Good Clinical Practice Recommendations on PCOS, 2018.",
      "ICMR Task Force on PCOS in Indian women, 2020.",
      "Speroff's Clinical Gynecologic Endocrinology and Infertility, 9th edition; Berek and Novak's Gynecology, 16th edition."
    ]
  },
  "gynaecology-vaginal-discharge-pid": {
    "oneLiner": "Abnormal vaginal discharge is sorted at the bedside into **vaginitis** (bacterial vaginosis, candidiasis, trichomoniasis - pH, whiff test and wet mount) and **cervicitis** (chlamydia, gonorrhoea - mucopurulent friable cervix), treated by **NACO colour-coded syndromic kits** where tests are unavailable, while any sexually active woman with pelvic pain and **cervical motion, uterine or adnexal tenderness** is treated at once as **pelvic inflammatory disease** (ceftriaxone plus 14 days of doxycycline and metronidazole) to protect her tubes.",
    "sections": [
      {
        "heading": "Definition and the classification that matters",
        "points": [
          "**Physiological discharge** is white or clear, non-offensive and non-irritant, and varies with the cycle (most at mid-cycle), pregnancy, COC use and arousal; it needs explanation, not antibiotics. [NACO 2024]",
          "**Pathological discharge** is a change in **colour, odour, amount or consistency**, or discharge with itching, soreness, dysuria, dyspareunia, bleeding or pelvic pain. [NACO 2024]",
          "**Classification that matters**: **vaginitis** (BV, vulvovaginal candidiasis, trichomoniasis) versus **cervicitis** (C. trachomatis, N. gonorrhoeae, M. genitalium) versus **upper-tract infection (PID)** - only cervicitis and PID need gonorrhoea-chlamydia cover and partner treatment. [CDC 2021]",
          "**Bacterial vaginosis (Amsel criteria, 3 of 4)**: thin homogeneous grey-white discharge, **vaginal pH over 4.5**, positive **whiff test** with 10% KOH, and **clue cells over 20%** of epithelial cells on saline wet mount; the lab gold standard is a **Nugent score 7-10** on Gram stain. [CDC 2021]",
          "**PID (CDC minimum criteria)**: in a sexually active woman with pelvic or lower abdominal pain and no other cause, **any one of cervical motion tenderness, uterine tenderness or adnexal tenderness** is enough to start treatment. [CDC 2021]",
          "**Recurrent vulvovaginal candidiasis** is **3 or more symptomatic episodes in a year** (CDC; 4 or more in UK guidance); **complicated VVC** includes recurrent, severe, non-albicans, and VVC in diabetes, immunosuppression or pregnancy. [CDC 2021]",
          "**Non-infective causes** to remember: **retained foreign body** (tampon, forgotten pessary, child's object), **atrophic vaginitis**, cervical ectropion or polyp, and **cervical cancer** - which in India often presents as foul discharge before bleeding. [Shaw 18e]"
        ]
      },
      {
        "heading": "Pathophysiology and pathoanatomy",
        "points": [
          "**Vaginal anatomy**: a fibromuscular tube lined by **non-keratinised stratified squamous epithelium with no glands**; its moisture is a transudate plus cervical mucus, desquamated cells and Bartholin secretion. [Gray's 42e]",
          "**Vaginal defence**: oestrogen loads the epithelium with **glycogen**, which **lactobacilli** convert to **lactic acid (pH 3.8-4.5)** and hydrogen peroxide and bacteriocins - this acid, lactobacillus-dominated ecosystem prevents overgrowth. [Berek and Novak 16e]",
          "**Why pH changes**: before puberty and after menopause (low oestrogen, little glycogen) the pH is **over 5**, and **semen (pH 7.2-8) and menstrual blood** transiently alkalinise the vagina - explaining odour after sex and menses in BV. [Berek and Novak 16e]",
          "**Cervix**: the **ectocervix** has squamous epithelium, the **endocervix** has mucus-secreting columnar epithelium; **chlamydia and gonococcus infect columnar cells**, so an **ectropion** (pregnancy, COC, adolescence) widens their target. [Berek and Novak 16e]",
          "**Bacterial vaginosis**: loss of H2O2-producing lactobacilli lets **Gardnerella vaginalis, Prevotella, Mobiluncus and Fannyhessea (Atopobium)** form a **polymicrobial biofilm** on epithelial cells (clue cells); anaerobes produce **amines (trimethylamine, putrescine, cadaverine)** that smell fishy when alkalinised - with no inflammation, hence no itching. [CDC 2021]",
          "**Candidiasis**: Candida albicans (80-90%) is a commensal that switches to **invasive hyphae** when oestrogen, glycogen or glucose is high (pregnancy, COC, **diabetes**) or lactobacilli are killed (**antibiotics**), or immunity is low (steroids, HIV); inflammation causes intense itch and soreness while the **pH stays normal**. [CDC 2021]",
          "**Trichomoniasis**: the flagellate **Trichomonas vaginalis** adheres to squamous epithelium and damages it, causing inflammation, **punctate haemorrhages (strawberry cervix)**, frothy discharge from gas-producing anaerobes and raised pH; it is sexually transmitted. [CDC 2021]",
          "**Cervicitis**: chlamydia (obligate intracellular) and gonococcus invade columnar epithelium, attracting **polymorphs (10 or more per high-power field)**; chlamydia is **asymptomatic in about 70%** of women and so silently reaches the tubes. [CDC 2021]",
          "**Barrier to ascent**: the **cervical mucus plug** and the closed os protect the upper tract; **menstruation, IUCD insertion (first 20 days), abortion, delivery and instrumentation** breach it - PID often begins just after a period. [CDC 2021]",
          "**PID pathoanatomy**: infection ascends from cervix to **endometrium (endometritis), tubes (salpingitis), ovaries** and pelvic peritoneum; it is **polymicrobial** - chlamydia and gonococcus start it and vaginal anaerobes, Gram-negative rods and streptococci follow. [CDC 2021]",
          "**Tubal damage**: salpingitis destroys **ciliated epithelium** and causes intraluminal adhesions, fimbrial agglutination and **hydrosalpinx** - hence **infertility (about 12% after one episode, 25% after two, 50% after three)** and a **6-10 fold ectopic risk**. [CDC 2021]",
          "**Tubo-ovarian abscess** is a walled-off collection of tube, ovary and bowel that antibiotics penetrate poorly; **Fitz-Hugh-Curtis syndrome** is perihepatitis with **'violin-string' adhesions** between liver capsule and abdominal wall, causing right upper quadrant pleuritic pain. [Shaw 18e]",
          "**Why drugs work**: **metronidazole** (nitroimidazole) is reduced inside anaerobes and protozoa to toxic radicals that break DNA - covering BV, trichomonas and PID anaerobes; **azoles** block fungal ergosterol synthesis; **ceftriaxone** kills gonococci; **doxycycline and azithromycin** block bacterial protein synthesis in intracellular chlamydia. [CDC 2021]"
        ]
      },
      {
        "heading": "History in the OPD",
        "points": [
          "**Discharge characteristics**: colour, consistency (thin, curdy, frothy), **odour and whether worse after sex or periods** (BV), amount, and duration. [NACO 2024]",
          "**Itching and vulval soreness** point to candidiasis (or trichomoniasis); **fishy odour without itch** points to BV. [CDC 2021]",
          "**Pelvic pain, deep dyspareunia, fever, postcoital or intermenstrual bleeding** point to cervicitis or PID - these women need a bimanual examination. [CDC 2021]",
          "**LMP and pregnancy possibility** - lower abdominal pain with a missed period is **ectopic pregnancy until proved otherwise**. [CDC 2021]",
          "**Sexual risk assessment** in private: new or multiple partners in the last 3 months, partner with urethral discharge or genital ulcer, condom use, and age under 25. [NACO 2024]",
          "**Recent instrumentation**: IUCD insertion in the last 3 weeks, abortion (including unsafe), delivery, D and C or HSG - all predispose to PID. [CDC 2021]",
          "**Predisposing factors for candidiasis**: diabetes symptoms, recent antibiotics, steroids, pregnancy, HIV risk, and repeated self-treatment. [CDC 2021]",
          "**Hygiene practices**: vaginal douching, cloth use during menses, and harsh soaps - douching is a risk factor for BV and PID. [NACO 2024]",
          "**Previous episodes and treatments**, including kits taken and partner treatment - recurrence after syndromic treatment suggests reinfection, non-adherence or a wrong diagnosis. [NACO 2024]",
          "**Physiological or psychosomatic leucorrhoea**: many Indian women present with 'white discharge' linked to **backache, weakness, anxiety or marital stress** with no infection - ask about mood and relationships. [NACO 2024]",
          "**Red-flag history**: age over 35 with foul or blood-stained discharge, postcoital bleeding or weight loss (cervical cancer), and discharge in a prepubertal child (foreign body or sexual abuse). [Shaw 18e]"
        ]
      },
      {
        "heading": "Examination",
        "points": [
          "**General**: temperature (over 38.3 C supports PID), pulse and BP, pallor, oral thrush and lymphadenopathy (HIV), and abdomen for **guarding, rebound, a pelvic mass** or right upper quadrant tenderness (Fitz-Hugh-Curtis). [CDC 2021]",
          "**Vulval inspection**: erythema, fissures and satellite lesions (candida), ulcers (herpes, syphilis, chancroid), warts and inguinal nodes. [NACO 2024]",
          "**Speculum examination** (Cusco, lubricated with water only, since gel alters pH and microscopy): note where the discharge comes from - **vaginal walls (vaginitis) or the os (cervicitis)** - and inspect the cervix for friability, ectropion, polyp, growth or a foreign body. [CDC 2021]",
          "**Signs of cervicitis**: **mucopurulent yellow or green endocervical discharge** on a white swab and **easily induced bleeding** when a swab is passed into the os. [CDC 2021]",
          "**Bedside pH**: touch narrow-range pH paper to discharge from the **lateral vaginal wall** (not the cervix, whose mucus is alkaline): **4.5 or below** suggests candida or physiological, **over 4.5** suggests BV or trichomonas. [CDC 2021]",
          "**Whiff test and wet mounts**: mix discharge with **10% KOH** for a fishy amine odour and for **hyphae and budding yeasts**; mix with **saline** for clue cells, motile trichomonads and white cells. [CDC 2021]",
          "**Bimanual examination**: **cervical motion tenderness** (pain when the cervix is moved sideways), uterine tenderness and **adnexal tenderness or mass** - one is enough for PID in the right context; a tender fixed adnexal mass suggests a TOA. [CDC 2021]",
          "**Children and virgins**: do not use a speculum; inspect, take a low vaginal swab, and consider examination under anaesthesia for a foreign body and child-protection assessment. [Shaw 18e]"
        ]
      },
      {
        "heading": "Minimal investigations",
        "points": [
          "**Urine pregnancy test** in every woman with pelvic pain before labelling PID. [CDC 2021]",
          "**Point-of-care tests**: vaginal pH, whiff test, saline and KOH wet mounts - cheap, same-visit and enough to separate the three vaginitides in most cases. [CDC 2021]",
          "**Gram stain (Nugent score)** for BV when microscopy is available; **culture for candida** in recurrent or non-responding cases to identify non-albicans species. [CDC 2021]",
          "**NAAT (PCR) for chlamydia and gonorrhoea** on a vulvovaginal or endocervical swab is the test of choice where available; gonococcal culture is needed for resistance testing. [CDC 2021]",
          "**Offer the STI panel** to every woman with an STI or PID: **HIV, syphilis (RPR or VDRL confirmed with TPHA)** and HBsAg, plus cervical screening if due. [NACO 2024]",
          "**For PID**: CBC, CRP or ESR, urine microscopy (exclude UTI), and **transvaginal ultrasound** if a mass or TOA is suspected or she is severely ill. [CDC 2021]",
          "**Fasting glucose or HbA1c** in recurrent candidiasis; **HIV test** if recurrent or severe. [CDC 2021]",
          "**Do not**: treat a partner for BV or candida, repeat antibiotics for physiological discharge, or do a high vaginal swab culture for BV (Gardnerella grows in normal women too). [CDC 2021]"
        ]
      },
      {
        "heading": "Treatment - general measures",
        "points": [
          "**Reassure** women with physiological discharge, explain the normal cycle, and avoid antibiotics - over-treatment is a recognised programme failure. [NACO 2024]",
          "**Hygiene advice**: avoid douching, perfumed soaps and bubble baths; wash the vulva with plain water; loose cotton underwear; change menstrual cloths or pads 4-6 hourly and dry cloths in sunlight. [NACO 2024]",
          "**Four Cs of STI care**: **Compliance** with the full course, **Counselling** on risk reduction, **Condom** promotion and provision, and **Contact (partner) treatment**. [NACO 2024]",
          "**Partner treatment**: treat partners of women with **trichomoniasis, cervicitis and PID** regardless of their symptoms (Kit 1 for the male partner); **do not** treat partners for BV or candidiasis. [NACO 2024]",
          "**Abstain or use condoms** until 7 days after both partners complete treatment and symptoms resolve. [CDC 2021]",
          "**Control predisposing factors**: glucose control in diabetes, review steroids and unnecessary antibiotics, remove foreign bodies and treat atrophy with local oestrogen. [CDC 2021]",
          "**Designated STI/RTI clinics (Suraksha clinics)** provide free kits, counselling and testing; refer or link the woman there. [NACO 2024]"
        ]
      },
      {
        "heading": "Treatment - drugs",
        "points": [
          "**Syndromic approach (NACO)**: vaginitis alone gets **Kit 2 (green): secnidazole 2 g single oral dose + fluconazole 150 mg single oral dose**; cervicitis gets **Kit 1 (grey): azithromycin 1 g + cefixime 400 mg single doses**; lower abdominal pain gets **Kit 6 (yellow)**. [NACO 2024]",
          "**Bacterial vaginosis**: **metronidazole 400-500 mg orally twice daily for 7 days** (first-line); alternatives are **metronidazole 0.75% gel 5 g intravaginally at night for 5 days**, clindamycin 2% cream 5 g at night for 7 days, or **secnidazole 2 g** or tinidazole 2 g daily for 2 days. [CDC 2021]",
          "**Metronidazole - how to take and side effects**: take **with or after food**; metallic taste, nausea and dark urine are common; traditional advice is **no alcohol during and for 24 hours after** (48-72 hours for tinidazole); it is safe in all trimesters of pregnancy. [CDC 2021]",
          "**Clindamycin cream** is oil-based and **weakens latex condoms and diaphragms for 5 days**; recurrent BV (3 or more a year) can be suppressed with **metronidazole gel twice weekly for 4-6 months** after a treatment course. [CDC 2021]",
          "**Vulvovaginal candidiasis (uncomplicated)**: **fluconazole 150 mg orally single dose**, or **clotrimazole 500 mg vaginal pessary single dose at night** (or 100 mg nightly for 6-7 days), or clotrimazole 1% cream for vulval symptoms. [CDC 2021]",
          "**Severe or complicated VVC**: **fluconazole 150 mg every 72 hours for 3 doses**; **recurrent VVC**: induction as above, then **fluconazole 150 mg once weekly for 6 months** (check LFT if prolonged); non-albicans (C. glabrata) needs boric acid 600 mg vaginally daily for 14 days. [CDC 2021]",
          "**Candida in pregnancy**: use **topical clotrimazole for 7 days only** - avoid oral fluconazole (miscarriage and malformation signal with high or prolonged doses). [CDC 2021]",
          "**Fluconazole cautions**: CYP inhibitor - raises **warfarin, sulfonylurea and some statin** levels; QT prolongation with other QT drugs; mild nausea and headache. [CDC 2021]",
          "**Trichomoniasis**: **metronidazole 500 mg orally twice daily for 7 days** in women (more effective than the single 2 g dose; the 2 g single dose is used for men and where adherence is doubtful), treat all partners, and **retest at 3 months** because reinfection is common. [CDC 2021]",
          "**Gonococcal cervicitis**: **ceftriaxone 500 mg IM single dose** (1 g if weight 150 kg or over); cefixime 400 mg orally single dose is the NACO kit alternative where injection is not feasible. [CDC 2021]",
          "**Chlamydial cervicitis**: **doxycycline 100 mg orally twice daily for 7 days** (preferred) or **azithromycin 1 g orally single dose** (used in pregnancy); take doxycycline **upright with a full glass of water**, not at bedtime, and avoid milk, antacids and iron within 2 hours. [CDC 2021]",
          "**Doxycycline cautions**: photosensitivity, **pill oesophagitis**, GI upset; **contraindicated in pregnancy, breastfeeding and children under 8** (teeth staining, bone deposition). [CDC 2021]",
          "**PID - outpatient (mild to moderate)**: **ceftriaxone 500 mg IM single dose + doxycycline 100 mg twice daily for 14 days + metronidazole 500 mg twice daily for 14 days**; NACO Kit 6 uses **cefixime 400 mg single dose + doxycycline 100 mg BD + metronidazole 400 mg BD, both for 14 days**. [CDC 2021]",
          "**PID - inpatient**: **ceftriaxone 1 g IV every 24 hours + doxycycline 100 mg orally or IV twice daily + metronidazole 500 mg orally or IV twice daily**; or **clindamycin 900 mg IV 8-hourly + gentamicin** (2 mg/kg load then 1.5 mg/kg 8-hourly, or 3-5 mg/kg once daily) for TOA; switch to oral 24-48 hours after improvement to complete **14 days**. [CDC 2021]",
          "**PID with an IUCD in place**: treat without removing the device; remove only if there is **no improvement in 48-72 hours**. [WHO MEC 2015]",
          "**PID in pregnancy** (rare, but serious): admit and give parenteral **ceftriaxone plus azithromycin** (no doxycycline); exclude ectopic first. [CDC 2021]",
          "**Analgesia**: paracetamol 1 g 6-hourly or ibuprofen 400 mg 8-hourly with food for pelvic pain. [CDC 2021]",
          "**Atrophic vaginitis**: **estriol 0.1% cream (or conjugated oestrogen cream 0.5 g) intravaginally nightly for 2 weeks, then twice weekly**; minimal systemic absorption. [NAMS 2022]"
        ]
      },
      {
        "heading": "Acute presentation and emergency management",
        "points": [
          "**Admit PID** when a **surgical emergency (appendicitis, ectopic) cannot be excluded**, with **tubo-ovarian abscess**, pregnancy, severe illness (high fever, vomiting, peritonism), oral intolerance or **failure of oral therapy at 72 hours**. [CDC 2021]",
          "**Tubo-ovarian abscess**: IV antibiotics (clindamycin or metronidazole to cover anaerobes) and **drainage (image-guided or laparoscopic) if over 7 cm or not improving in 48-72 hours**; ruptured TOA with shock needs resuscitation and **emergency laparotomy**. [CDC 2021]",
          "**Pelvic pain with positive pregnancy test and shock** is a ruptured ectopic - resuscitate and send to theatre, not treat for PID. [Shaw 18e]"
        ]
      },
      {
        "heading": "Follow-up, monitoring and when to refer",
        "points": [
          "**Review PID at 72 hours**: fever, tenderness and pain should improve; if not, re-examine, image and admit - do not simply repeat the prescription. [CDC 2021]",
          "**Test of cure** is not needed for uncomplicated chlamydia or gonorrhoea, but **retest at 3 months** for reinfection, and test of cure in pregnancy. [CDC 2021]",
          "**Recurrent BV or candida** (3 or more a year): confirm the diagnosis by microscopy or culture, check glucose and HIV, and start suppressive therapy. [CDC 2021]",
          "**Counsel after PID** about future infertility and ectopic risk - she should seek **early ultrasound in any future pregnancy**. [CDC 2021]",
          "**IUCD after PID**: past PID with a later pregnancy is **WHO MEC 1**; current PID is **category 4 to insert** - treat first, insert after 3 months. [WHO MEC 2015]",
          "**Refer**: TOA, suspected cervical cancer (visible growth, contact bleeding in over 35 - biopsy), non-response to two courses, children with discharge (child-protection pathway), and complicated STIs to the Suraksha clinic. [NACO 2024]"
        ]
      }
    ],
    "tables": [
      {
        "heading": "Types of vaginitis - bedside differentiation criteria",
        "columns": [
          "Feature",
          "Bacterial vaginosis",
          "Candidiasis",
          "Trichomoniasis"
        ],
        "rows": [
          [
            "Discharge",
            "Thin, grey-white, homogeneous",
            "Thick, curdy white, adherent",
            "Profuse, frothy, greenish-yellow"
          ],
          [
            "Symptoms",
            "Fishy odour, worse after sex; no itch",
            "Intense itch, soreness, external dysuria",
            "Soreness, dysuria, odour"
          ],
          [
            "Vaginal pH",
            "Over 4.5",
            "4.5 or below (normal)",
            "Over 4.5"
          ],
          [
            "Whiff and microscopy",
            "Whiff positive; clue cells over 20%",
            "Whiff negative; hyphae and budding yeast on KOH",
            "Whiff may be positive; motile trichomonads on saline"
          ],
          [
            "Partner treatment",
            "No",
            "No",
            "Yes, always"
          ]
        ]
      },
      {
        "heading": "NACO colour-coded syndromic kit classification",
        "columns": [
          "Kit and colour",
          "Syndrome",
          "Contents"
        ],
        "rows": [
          [
            "Kit 1 - Grey",
            "Urethral discharge, cervicitis, anorectal discharge",
            "Azithromycin 1 g + cefixime 400 mg, single doses"
          ],
          [
            "Kit 2 - Green",
            "Vaginal discharge (vaginitis)",
            "Secnidazole 2 g + fluconazole 150 mg, single doses"
          ],
          [
            "Kit 3 - White",
            "Genital ulcer, non-herpetic",
            "Benzathine penicillin 2.4 MU IM + azithromycin 1 g"
          ],
          [
            "Kit 4 - Blue",
            "Genital ulcer, non-herpetic, penicillin allergy",
            "Doxycycline 100 mg BD 15 days + azithromycin 1 g"
          ],
          [
            "Kit 5 - Red",
            "Genital ulcer, herpetic",
            "Acyclovir 400 mg TDS 7 days"
          ],
          [
            "Kit 6 - Yellow",
            "Lower abdominal pain (PID)",
            "Cefixime 400 mg single + metronidazole 400 mg BD + doxycycline 100 mg BD, 14 days"
          ],
          [
            "Kit 7 - Black",
            "Inguinal bubo",
            "Doxycycline 100 mg BD 21 days + azithromycin 1 g"
          ]
        ]
      },
      {
        "heading": "Drugs: dose, duration and side effects",
        "columns": [
          "Drug",
          "Mechanism",
          "Dose and duration",
          "Side effects",
          "How to take"
        ],
        "rows": [
          [
            "Metronidazole",
            "Nitroimidazole, DNA damage in anaerobes and protozoa",
            "BV and trichomonas: 400-500 mg BD 7 days; PID: 500 mg BD 14 days",
            "Metallic taste, nausea, dark urine",
            "With food; avoid alcohol till 24 h after; safe in pregnancy"
          ],
          [
            "Secnidazole",
            "Long-acting nitroimidazole",
            "2 g single dose (Kit 2)",
            "Nausea, metallic taste",
            "Granules or tablets with food; no alcohol 72 h"
          ],
          [
            "Fluconazole",
            "Azole, blocks ergosterol synthesis",
            "150 mg single; recurrent: every 72 h x 3 then weekly 6 months",
            "Nausea, headache, raised LFT",
            "Avoid in pregnancy; interacts with warfarin"
          ],
          [
            "Clotrimazole pessary",
            "Topical azole",
            "500 mg once, or 100 mg nightly 6-7 days",
            "Local burning",
            "High in vagina at bedtime; 7 days in pregnancy"
          ],
          [
            "Ceftriaxone",
            "Third-generation cephalosporin",
            "500 mg IM single (1 g IV daily inpatient)",
            "Pain at site, allergy",
            "Reconstitute with 1% lidocaine for IM"
          ],
          [
            "Cefixime",
            "Oral cephalosporin",
            "400 mg single dose",
            "Diarrhoea, allergy",
            "NACO kit alternative to ceftriaxone"
          ],
          [
            "Doxycycline",
            "Tetracycline, protein synthesis",
            "Chlamydia 100 mg BD 7 days; PID 100 mg BD 14 days",
            "Oesophagitis, photosensitivity",
            "Upright with full glass of water; not in pregnancy"
          ],
          [
            "Azithromycin",
            "Macrolide, protein synthesis",
            "1 g single dose",
            "GI upset, QT prolongation",
            "Empty stomach; the chlamydia choice in pregnancy"
          ]
        ]
      }
    ],
    "redFlags": [
      "Lower abdominal pain with a positive pregnancy test - ectopic pregnancy until excluded; do not label it PID.",
      "Fever over 38.3 C, vomiting, peritonism or a tender adnexal mass - suspected TOA or peritonitis; admit.",
      "No improvement 72 hours after correct PID treatment - re-image and admit.",
      "Foul, blood-stained discharge over 35 or postcoital bleeding - see the cervix and biopsy any lesion.",
      "Discharge in a prepubertal girl - foreign body or sexual abuse; child-protection pathway.",
      "Purulent cervicitis or active PID in a woman requesting an IUCD - MEC category 4 to insert.",
      "Discharge with genital ulcers, lymphadenopathy, oral thrush or weight loss - test for HIV and syphilis the same visit."
    ],
    "pearls": [
      "Vaginitis itches or smells with a normal cervix; cervicitis bleeds from a friable os and needs gonorrhoea-chlamydia cover.",
      "Amsel 3 of 4: thin discharge, pH over 4.5, positive whiff, clue cells over 20%.",
      "Candidiasis is the only vaginitis with a normal pH - a pH strip sorts most cases at the bedside.",
      "Trichomoniasis is an STI (treat partner); BV and candidiasis are not (do not treat partner).",
      "One of cervical motion, uterine or adnexal tenderness is enough to treat PID - the cost of waiting is her tubes.",
      "Write PID treatment in full: ceftriaxone 500 mg IM stat, doxycycline 100 mg BD and metronidazole 500 mg BD for 14 days (NACO Kit 6 uses cefixime).",
      "Infertility after PID: about 12% after one episode, 25% after two, 50% after three.",
      "Doxycycline is contraindicated in pregnancy - use azithromycin and admit for PID.",
      "Syndromic management treats at first contact but over-treats physiological discharge and misses asymptomatic chlamydia."
    ],
    "references": [
      "NACO. National Technical Guidelines on STI/RTI management (colour-coded kits), MoHFW, Government of India.",
      "CDC. Sexually Transmitted Infections Treatment Guidelines, 2021.",
      "WHO. Guidelines for the management of symptomatic sexually transmitted infections, 2021.",
      "WHO. Medical eligibility criteria for contraceptive use, 5th edition, 2015.",
      "Berek and Novak's Gynecology, 16th edition; Shaw's Textbook of Gynaecology, 18th edition."
    ]
  },
  "gynaecology-infertility-workup": {
    "oneLiner": "Infertility is failure to achieve a clinical pregnancy after **12 months of regular unprotected intercourse** (6 months if the woman is **35 or over**, at once with amenorrhoea or known tubal or testicular disease); the family physician should complete the first-line work-up of **both partners** - semen analysis (WHO 2021), confirmation of ovulation, TSH and prolactin where indicated, ovarian reserve, tubal patency and pelvic ultrasound - within about two cycles, start **preconception care and letrozole for anovulatory PCOS**, and refer a defined problem.",
    "sections": [
      {
        "heading": "Definition and the classification that matters",
        "points": [
          "**Infertility**: no clinical pregnancy after **12 months of regular (every 2-3 days) unprotected intercourse**; about **85% of couples conceive within 12 months** and a further 7% in the second year, and normal fecundability is **about 20-25% per cycle**. [NICE CG156 2017]",
          "**Start investigating early**: after **6 months if the woman is 35 or over**, and **immediately** with amenorrhoea or oligomenorrhoea, previous PID or pelvic surgery, stage III-IV endometriosis, known male factor (undescended testes, chemotherapy) or age 38 or over. [NICE CG156 2017]",
          "**Primary infertility** means she has never conceived; **secondary** means a previous conception however it ended - in India secondary infertility is a clue to **post-abortal or puerperal infection and genital tuberculosis**. [FOGSI 2018]",
          "**Causes (approximate)**: male factor **30-40%**, ovulatory **25-30%**, tubal and peritoneal **25-35%**, uterine and cervical 5-10%, **unexplained 10-15%**, and both partners in 20-30% - hence both are tested from the first visit. [Shaw 18e]",
          "**WHO classification of ovulatory disorders**: **Group I** hypogonadotropic hypogonadism, **Group II** normogonadotropic normo-oestrogenic anovulation (**PCOS, about 85%**), **Group III** hypergonadotropic (premature ovarian insufficiency), with hyperprolactinaemia separate. [ESHRE 2023]",
          "**Genital tuberculosis** causes **5-15% of female infertility** in Indian series and must be sought actively - but never diagnosed on a Mantoux or IGRA alone. [FOGSI 2018]"
        ]
      },
      {
        "heading": "Pathophysiology and pathoanatomy",
        "points": [
          "**Requirements for conception**: a normal **egg released** (ovulation), **adequate sperm deposited** at the right time, **patent tubes** with working fimbriae and cilia, and a **receptive endometrium** - each test in the work-up checks one link. [Speroff 9e]",
          "**Female HPO axis**: pulsatile GnRH releases FSH (follicle growth, aromatase) and LH (theca androgen, the mid-cycle surge that triggers ovulation **34-36 hours later**); the corpus luteum then secretes **progesterone for 14 days** to prepare the endometrium. [Speroff 9e]",
          "**Ovarian reserve**: a woman is born with about **1-2 million oocytes**, has about 400 000 at puberty, and loses them continuously; after **35 both number and quality fall** (meiotic errors cause **aneuploidy and miscarriage**), which is why age is the strongest predictor of success. [Speroff 9e]",
          "**AMH** is made by **granulosa cells of preantral and small antral follicles**, so it mirrors the remaining follicle pool; it predicts **response to stimulation, not natural conception**. [ESHRE 2023]",
          "**Tube anatomy and function**: fimbriae pick up the oocyte, the **ampulla** is the site of fertilisation, and ciliary beating and peristalsis carry the embryo to the uterus over **3-4 days**; infection (chlamydia, gonorrhoea, TB) destroys cilia and occludes the lumen, causing **infertility and ectopic pregnancy**. [Berek and Novak 16e]",
          "**Hydrosalpinx** fluid refluxes into the cavity and is **embryotoxic**, roughly **halving IVF implantation** - hence salpingectomy or proximal occlusion before IVF. [NICE CG156 2017]",
          "**Genital TB** spreads haematogenously from a primary focus to the **tubes (almost always, bilateral)** then the endometrium, causing **beaded 'pipe-stem' tubes, tubal blocks and intrauterine synechiae** with hypomenorrhoea or amenorrhoea. [FOGSI 2018]",
          "**Uterine factors**: **submucosal fibroids and polyps** distort the cavity and impair implantation; **Asherman syndrome** (adhesions after curettage or TB) destroys the basal endometrium; a **septate uterus** raises miscarriage. [Berek and Novak 16e]",
          "**Endometriosis** impairs fertility by **pelvic adhesions distorting tubo-ovarian anatomy**, inflammatory peritoneal fluid toxic to gametes and embryos, and endometriomas that reduce ovarian reserve. [ESHRE 2022]",
          "**Male HPT axis**: LH drives **Leydig cells** to make testosterone (high local intratesticular levels are needed for spermatogenesis), and FSH drives **Sertoli cells**, which support germ cells and secrete **inhibin B** (negative feedback to FSH). [Speroff 9e]",
          "**Spermatogenesis takes about 64-74 days**, plus epididymal transit for maturation and motility - so any toxin, fever or drug shows in semen about **3 months later**, and an abnormal result is repeated after 3 months. [WHO 2021]",
          "**Why exogenous testosterone causes infertility**: it suppresses LH and FSH, so **intratesticular testosterone and spermatogenesis fall** - a man taking testosterone or anabolic steroids can become azoospermic. [EAU 2024]",
          "**Varicocele** raises scrotal temperature and oxidative stress, impairing spermatogenesis; **cryptorchidism, mumps orchitis, torsion and chemotherapy** damage germ cells directly. [EAU 2024]",
          "**Azoospermia types**: **obstructive** (normal FSH and testicular volume - for example CBAVD from CFTR mutations, post-infective) versus **non-obstructive** (raised FSH, small testes - Klinefelter 47 XXY, Y-chromosome microdeletions, post-chemotherapy). [EAU 2024]",
          "**Hyperprolactinaemia** suppresses GnRH pulsatility in both sexes, causing anovulation, galactorrhoea, low libido and oligospermia - reversible with a dopamine agonist. [Speroff 9e]",
          "**Why drugs work**: **letrozole** lowers oestrogen so FSH rises; **clomiphene** blocks hypothalamic oestrogen receptors so GnRH and FSH rise; **cabergoline** restores GnRH by suppressing prolactin; **gonadotrophins** stimulate follicles directly. [PCOS Guideline 2023]"
        ]
      },
      {
        "heading": "History in the OPD",
        "points": [
          "**See the couple together** first, then each privately; use the word 'couple', and state that infertility is **not the woman's fault** - the social burden in Indian families falls almost entirely on her. [FOGSI 2018]",
          "**Duration and age**: years of trying, **woman's age** (the most important prognostic factor), frequency of intercourse and previous investigations or treatment. [NICE CG156 2017]",
          "**Menstrual history**: cycle length and regularity (a regular 24-38 day cycle with premenstrual symptoms is about 95% predictive of ovulation), **hypomenorrhoea** (TB, Asherman), amenorrhoea and dysmenorrhoea. [NICE CG156 2017]",
          "**Obstetric and pelvic history**: previous pregnancies and how they ended, **post-abortal or puerperal fever, D and C**, ectopic, PID, appendicitis with peritonitis and pelvic surgery - each scars tubes or the cavity. [Shaw 18e]",
          "**Endocrine symptoms**: galactorrhoea and headache (prolactinoma), hirsutism and acne (PCOS), heat or cold intolerance (thyroid), hot flushes (POI), weight change, and extreme exercise or eating disorder (hypothalamic). [Shaw 18e]",
          "**Endometriosis clues**: progressive dysmenorrhoea, **deep dyspareunia**, dyschezia and chronic pelvic pain. [ESHRE 2022]",
          "**TB history**: past pulmonary TB or contact, and **constitutional symptoms** - genital TB may present with infertility alone. [FOGSI 2018]",
          "**Male history**: previous paternity, **undescended testis** and age at orchidopexy, **mumps orchitis** after puberty, torsion, hernia or hydrocele surgery, STIs, erectile and ejaculatory function, and occupational heat. [EAU 2024]",
          "**Coital history (the commonest omission)**: frequency, timing, penetration, lubricants, **vaginismus or erectile dysfunction**, and long separations for work - each is easily corrected. [Shaw 18e]",
          "**Drugs and habits in both**: **smoking and chewed tobacco**, alcohol, cannabis, **anabolic steroids or testosterone**, sulfasalazine, antipsychotics (prolactin), chemotherapy and radiotherapy. [NICE CG156 2017]",
          "**Family history** of early menopause, genetic disorders or consanguinity, and **rubella immunity and vaccination status**. [NICE CG156 2017]"
        ]
      },
      {
        "heading": "Examination",
        "points": [
          "**Woman - general**: BMI (under 19 or over 30 reduces fertility), BP, **thyroid**, breast development and **galactorrhoea**, hirsutism (Ferriman-Gallwey), acanthosis nigricans and signs of Turner syndrome. [Shaw 18e]",
          "**Woman - abdomen**: scars (previous surgery), masses and tenderness. [Shaw 18e]",
          "**Woman - speculum**: vaginal septum, cervicitis or discharge, cervical stenosis or lesions; take cervical screening if due. [Shaw 18e]",
          "**Woman - bimanual**: uterine size, position and **mobility (a fixed retroverted uterus suggests endometriosis or adhesions)**, adnexal masses, and **tender nodularity in the uterosacral ligaments or pouch of Douglas** (endometriosis). [ESHRE 2022]",
          "**Man - general**: body habitus, **secondary sexual characteristics**, gynaecomastia and signs of anabolic steroid use (Klinefelter: tall, small firm testes, gynaecomastia). [EAU 2024]",
          "**Man - genitalia**: penis and **urethral meatus** (hypospadias), **testicular volume by Prader orchidometer (normal 15-25 mL; under 15 mL suggests impaired spermatogenesis)**, consistency, epididymal thickening or cysts. [EAU 2024]",
          "**Palpate both vasa**: an **absent vas (CBAVD)** means obstructive azoospermia and CFTR testing for both partners. [EAU 2024]",
          "**Varicocele**: examine **standing, with and without Valsalva** - a 'bag of worms' above the testis, usually left-sided. [EAU 2024]"
        ]
      },
      {
        "heading": "Minimal investigations",
        "points": [
          "**Semen analysis first** (before any invasive test on the woman): **2-7 days of abstinence**, masturbation into a sterile wide-mouthed container (no condom or lubricant), whole sample, delivered **within 1 hour at body temperature**. [WHO 2021]",
          "**WHO 2021 lower reference limits (5th centile of fertile men)**: volume **1.4 mL**, concentration **16 million/mL**, total **39 million per ejaculate**, total motility **42%**, progressive motility **30%**, vitality **54%**, normal forms **4%** - repeat an abnormal result after **3 months** (sooner if severe). [WHO 2021]",
          "**Confirm ovulation** in women with regular cycles by **mid-luteal progesterone taken 7 days before the expected period** (day 21 of a 28-day cycle, day 28 of a 35-day cycle); **over 3 ng/mL (10 nmol/L)** confirms ovulation, and in irregular cycles anovulation needs no proof. [NICE CG156 2017]",
          "**Endocrine tests are targeted**: **TSH** in women with symptoms or before treatment, **prolactin** only with oligomenorrhoea, amenorrhoea or galactorrhoea, and **day 2-5 FSH, LH and oestradiol** with irregular cycles (WHO group). [NICE CG156 2017]",
          "**Ovarian reserve**: **AMH** (any day) and **antral follicle count** (2-10 mm follicles in both ovaries on day 2-5 TVS); low values mean **refer early**, not 'cannot conceive'. [ESHRE 2023]",
          "**Transvaginal ultrasound**: fibroids (FIGO type), polyps, adenomyosis, PCOM, endometrioma and **hydrosalpinx**. [NICE CG156 2017]",
          "**Tubal patency - low risk**: **hysterosalpingography on days 6-11** (after bleeding stops, before ovulation), with an NSAID beforehand and doxycycline cover if PID risk; free peritoneal spill confirms patency, and a proximal block may be **cornual spasm**. [NICE CG156 2017]",
          "**Tubal patency - high risk** (previous PID, ectopic, pelvic surgery, endometriosis): **laparoscopy with chromopertubation**, which diagnoses and treats adhesions and endometriosis, plus hysteroscopy if the cavity is abnormal. [NICE CG156 2017]",
          "**Genital TB work-up** (hypomenorrhoea, synechiae, beaded tubes): **premenstrual endometrial aspirate for CBNAAT (Xpert), liquid culture and histology for granulomas**; chest X-ray. [FOGSI 2018]",
          "**Men with abnormal semen**: FSH, LH, testosterone and prolactin; **karyotype and Y-chromosome microdeletion** if concentration is **under 5 million/mL** or non-obstructive azoospermia; **CFTR** if vasa are absent; scrotal ultrasound if examination is difficult. [EAU 2024]",
          "**Preconception screening**: Hb, blood group, **rubella IgG**, HIV, HBsAg, VDRL, and glucose. [MoHFW 2024]",
          "**Do not order routinely**: basal body temperature charts, post-coital test, anti-sperm antibodies, **Mantoux or IGRA to diagnose genital TB**, endometrial biopsy to 'date' the endometrium, or thrombophilia screens. [NICE CG156 2017]"
        ]
      },
      {
        "heading": "Treatment - general measures",
        "points": [
          "**Intercourse every 2-3 days throughout the cycle** rather than timed intercourse, which adds stress; avoid oil-based lubricants. [NICE CG156 2017]",
          "**Weight**: aim for BMI **19-30** (Asian ideal 18.5-23); a **5-10% weight loss** in obese anovulatory women restores ovulation in many. [NICE CG156 2017]",
          "**Stop smoking and chewed tobacco in both partners**, limit alcohol (none for the woman trying to conceive; under 3-4 units a day for men), and limit caffeine. [NICE CG156 2017]",
          "**Men**: avoid tight underwear, hot baths, saunas, and laptops on the lap; **stop testosterone and anabolic steroids** (recovery takes 6-12 months). [EAU 2024]",
          "**Folic acid 400 microgram daily** from the first visit (**5 mg** with previous NTD, diabetes, antiepileptics or BMI over 30), and **rubella vaccination** if non-immune with 1 month of contraception after. [MoHFW 2024]",
          "**Psychological support**: infertility causes depression, marital conflict and social stigma; offer counselling and involve both partners. [NICE CG156 2017]",
          "**Law and ethics**: ART clinics must be **registered under the ART (Regulation) Act 2021**; the **Surrogacy (Regulation) Act 2021** bans commercial surrogacy; the **PC-PNDT Act 1994** bans sex selection. [ART Act 2021]"
        ]
      },
      {
        "heading": "Treatment - drugs",
        "points": [
          "**Letrozole (aromatase inhibitor) - first-line ovulation induction in PCOS**: **2.5 mg once daily on days 3-7**, increasing by 2.5 mg per cycle to **7.5 mg** if no ovulation; higher live-birth rate than clomiphene; side effects hot flushes, fatigue, headache; **off-label in India** - document consent. [PCOS Guideline 2023]",
          "**Clomiphene citrate (SERM)**: **50 mg once daily on days 2-6**, increasing by 50 mg to **150 mg**; **maximum 6 ovulatory cycles**; side effects hot flushes, **visual disturbance (stop the drug)**, multiple pregnancy (8-10%), thin endometrium and cervical mucus hostility. [NICE CG156 2017]",
          "**Monitoring ovulation induction**: **follicle tracking by TVS** from day 10 in at least the first cycle (a leading follicle of **18-22 mm** is mature), mid-luteal progesterone to confirm ovulation, and **cancel if 3 or more follicles over 16 mm** because of multiple pregnancy and OHSS. [NICE CG156 2017]",
          "**hCG trigger** (specialist): **urinary hCG 5000-10 000 IU IM or recombinant hCG 250 microgram SC** when the leading follicle reaches 18-20 mm; ovulation follows in **about 36 hours**, so time intercourse or IUI accordingly. [NICE CG156 2017]",
          "**Metformin** (500 mg daily titrated to **1500-2000 mg/day with meals**) is an **adjunct** in obese or insulin-resistant PCOS or clomiphene resistance, not a stand-alone ovulation inducer. [PCOS Guideline 2023]",
          "**Gonadotrophins** (specialist): **recombinant FSH or hMG 37.5-75 IU SC daily** in a low-dose step-up protocol for letrozole- or clomiphene-resistant PCOS and WHO group I; **pulsatile GnRH or hMG (FSH plus LH)** is the treatment for hypothalamic amenorrhoea. [NICE CG156 2017]",
          "**Hyperprolactinaemia**: **cabergoline 0.25 mg twice weekly**, increasing monthly to **0.5-1 mg twice weekly**, taken **with food at bedtime** to reduce nausea and dizziness; stop once pregnant (unless macroadenoma); **bromocriptine 1.25 mg at night increasing to 2.5 mg two or three times daily** is the alternative. [Endocrine Society 2011]",
          "**Dopamine agonist side effects**: nausea, postural hypotension, headache, and **impulse-control disorders**; high-dose cabergoline for Parkinson's causes valvulopathy (not at fertility doses, but echo if long term over 2 mg/week). [Endocrine Society 2011]",
          "**Hypothyroidism**: **levothyroxine 25-50 microgram daily**, titrated 6-weekly to **TSH under 2.5 mIU/L before conception**, taken **on an empty stomach 30-60 minutes before breakfast** and apart from iron and calcium by 4 hours; increase the dose by about **25-30% once pregnant**. [ATA 2017]",
          "**Genital tuberculosis**: standard NTEP regimen **2HRZE + 4HRE daily as weight-band fixed-dose combinations** (for example 50-64 kg: 4 tablets of HRZE 75/150/400/275), with pyridoxine, LFT monitoring and notification; tubal damage is often irreversible, so most need **IVF** afterwards. [NTEP 2024]",
          "**Luteal support in ART** (specialist): **micronised progesterone 200 mg vaginally three times a day or 400 mg twice daily** (or 8% gel 90 mg daily) from oocyte retrieval to about 8-10 weeks. [ESHRE 2019]",
          "**Male hypogonadotropic hypogonadism**: **hCG 1500-2000 IU SC twice weekly**, adding FSH 75-150 IU three times weekly if needed - never testosterone, which suppresses sperm production. [EAU 2024]",
          "**Male factor - other treatment**: varicocele repair only for a **clinical varicocele with abnormal semen**; antioxidants have weak evidence; severe oligozoospermia or azoospermia goes to **ICSI**, with surgical sperm retrieval (TESA, micro-TESE). [EAU 2024]",
          "**Empirical treatments not to use**: clomiphene for unexplained infertility (no benefit), antitubercular therapy on a positive Mantoux, progesterone for 'luteal phase defect', and steroids for antisperm antibodies. [NICE CG156 2017]"
        ]
      },
      {
        "heading": "Special situations and complications of treatment",
        "points": [
          "**Ovarian hyperstimulation syndrome**: after hCG trigger, VEGF raises capillary permeability, causing **ovarian enlargement, ascites, haemoconcentration, oliguria and thrombosis**; PCOS, young age and high AMH are the main risk factors; severe OHSS (clinical ascites, **Hct over 45%**, oliguria) needs admission and thromboprophylaxis. [RCOG GTG5 2016]",
          "**Multiple pregnancy and ectopic pregnancy** are commoner after ovulation induction and ART - an **early ultrasound at 6-7 weeks** is advised in any treated conception. [NICE CG156 2017]",
          "**Intrauterine insemination** suits mild male factor, sexual dysfunction and unexplained infertility (with at least one patent tube); **IVF** suits tubal disease, failed IUI, endometriosis and unexplained infertility over 2 years; **ICSI** for severe male factor. [NICE CG156 2017]",
          "**Unexplained infertility**: after 2 years of trying (including the first year), **offer IVF**; expectant management is reasonable in young women with short duration. [NICE CG156 2017]"
        ]
      },
      {
        "heading": "Follow-up, monitoring and when to refer",
        "points": [
          "**Complete the first-line work-up within 2 cycles** and review the couple with all results together. [NICE CG156 2017]",
          "**During ovulation induction**: review every cycle, confirm ovulation, track follicles, and **stop after 6 ovulatory cycles** without pregnancy. [NICE CG156 2017]",
          "**Refer at once**: woman **38 or over**, amenorrhoea, **raised FSH or very low AMH**, known tubal disease or hydrosalpinx, uterine anomaly or Asherman syndrome, stage III-IV endometriosis. [NICE CG156 2017]",
          "**Refer the man**: azoospermia on two samples, **concentration under 5 million/mL**, absent vasa, small testes or raised FSH - for genetic tests and ICSI planning. [EAU 2024]",
          "**Refer after failed first-line treatment**: no conception after 6 ovulatory cycles of letrozole or clomiphene, or anovulation on maximum dose. [NICE CG156 2017]",
          "**Refer urgently**: suspected OHSS, pituitary macroadenoma (headache, visual field loss) and suspected ectopic pregnancy after treatment. [NICE CG156 2017]"
        ]
      }
    ],
    "tables": [
      {
        "heading": "WHO 2021 semen analysis reference criteria",
        "columns": [
          "Parameter",
          "Lower reference limit (5th centile)",
          "Term if below"
        ],
        "rows": [
          [
            "Semen volume",
            "1.4 mL",
            "Hypospermia"
          ],
          [
            "Sperm concentration",
            "16 million per mL",
            "Oligozoospermia (none = azoospermia)"
          ],
          [
            "Total sperm number",
            "39 million per ejaculate",
            "Oligozoospermia"
          ],
          [
            "Total motility",
            "42%",
            "Asthenozoospermia"
          ],
          [
            "Progressive motility",
            "30%",
            "Asthenozoospermia"
          ],
          [
            "Vitality",
            "54% live",
            "Necrozoospermia"
          ],
          [
            "Normal morphology (strict)",
            "4%",
            "Teratozoospermia"
          ]
        ]
      },
      {
        "heading": "WHO classification of ovulatory disorders",
        "columns": [
          "Group",
          "Hormone profile",
          "Examples",
          "First treatment"
        ],
        "rows": [
          [
            "Group I",
            "Low FSH, LH and oestradiol",
            "Hypothalamic amenorrhoea, Kallmann syndrome",
            "Weight gain, pulsatile GnRH or hMG"
          ],
          [
            "Group II",
            "Normal FSH, normal oestradiol",
            "PCOS (about 85% of anovulation)",
            "Weight loss, letrozole"
          ],
          [
            "Group III",
            "High FSH, low oestradiol",
            "Premature ovarian insufficiency",
            "HRT; donor oocytes"
          ],
          [
            "Hyperprolactinaemia",
            "High prolactin, low FSH and LH",
            "Prolactinoma, drugs, hypothyroidism",
            "Cabergoline or stop the drug"
          ]
        ]
      },
      {
        "heading": "Drugs: dose, duration and side effects",
        "columns": [
          "Drug",
          "Mechanism",
          "Dose and duration",
          "Side effects",
          "How to take"
        ],
        "rows": [
          [
            "Letrozole",
            "Aromatase inhibitor, raises FSH",
            "2.5 mg days 3-7, up to 7.5 mg; up to 6 ovulatory cycles",
            "Hot flushes, fatigue, headache",
            "Exclude pregnancy first; follicle tracking; off-label in India"
          ],
          [
            "Clomiphene citrate",
            "Hypothalamic oestrogen-receptor blocker",
            "50 mg days 2-6, up to 150 mg; max 6 ovulatory cycles",
            "Hot flushes, visual blurring, twins, thin endometrium",
            "Stop if visual symptoms; mid-luteal progesterone"
          ],
          [
            "hCG",
            "LH-like, triggers final maturation and ovulation",
            "5000-10 000 IU IM (rhCG 250 microgram SC) once",
            "OHSS, injection pain",
            "When lead follicle is 18-20 mm; ovulation in 36 h"
          ],
          [
            "Recombinant FSH or hMG",
            "Direct follicle stimulation",
            "37.5-75 IU SC daily, low-dose step-up",
            "OHSS, multiple pregnancy",
            "Specialist monitoring with scans"
          ],
          [
            "Cabergoline",
            "Dopamine D2 agonist, lowers prolactin",
            "0.25 mg twice weekly, up to 1 mg twice weekly",
            "Nausea, postural hypotension, impulse control",
            "With food at bedtime"
          ],
          [
            "Levothyroxine",
            "Thyroid hormone replacement",
            "25-50 microgram daily, titrate to TSH under 2.5",
            "Palpitations if over-replaced",
            "Empty stomach; 4 h apart from iron, calcium"
          ],
          [
            "Metformin",
            "Insulin sensitiser",
            "500 mg daily, up to 1500-2000 mg/day",
            "GI upset, B12 deficiency",
            "With meals; adjunct only"
          ],
          [
            "Micronised progesterone",
            "Luteal support",
            "200 mg vaginally three times daily to 8-10 weeks",
            "Vaginal discharge, drowsiness (oral)",
            "Insert high in vagina lying down"
          ],
          [
            "Folic acid",
            "Prevents neural tube defects",
            "400 microgram daily (5 mg if high risk) until 12 weeks",
            "None significant",
            "Start before conception"
          ]
        ]
      }
    ],
    "redFlags": [
      "Amenorrhoea with hot flushes and raised FSH under 40 - premature ovarian insufficiency; refer and counsel about donor oocytes.",
      "Azoospermia on two samples - stop repeating; FSH, testicular volume, karyotype, Y-microdeletion and refer.",
      "Galactorrhoea with headache or visual field loss - pituitary macroadenoma; urgent MRI.",
      "Pain, ascites, breathlessness or oliguria during ovulation induction - OHSS, admit.",
      "Hypomenorrhoea with synechiae or beaded tubes - suspect genital TB; endometrial CBNAAT and culture.",
      "Hydrosalpinx on ultrasound - refer for salpingectomy before IVF.",
      "Woman aged 38 or over - investigate and refer at once; do not observe for 12 months.",
      "Man on testosterone or anabolic steroids with low count - stop them; this is iatrogenic azoospermia."
    ],
    "pearls": [
      "Define with numbers: 12 months, 6 months if 35 or over, immediately with amenorrhoea or known tubal disease.",
      "Semen analysis comes before any invasive test on the woman - HSG before semen analysis is the classic sequencing error.",
      "Mid-luteal progesterone is drawn 7 days before the expected period, not on day 21 regardless of cycle length; over 3 ng/mL confirms ovulation.",
      "Quote WHO 2021 limits as a set: 1.4 mL, 16 million/mL, 39 million, 42% total motility, 30% progressive, 4% normal forms.",
      "Repeat an abnormal semen analysis after 3 months - spermatogenesis takes about 74 days.",
      "HSG on days 6-11; a proximal block may be cornual spasm.",
      "AMH predicts response to stimulation, not natural fertility.",
      "Letrozole is first-line ovulation induction in PCOS; metformin is an adjunct.",
      "Never start ATT for infertility on a positive Mantoux - demand CBNAAT, culture or granulomas.",
      "Testosterone therapy in a man trying to conceive causes azoospermia."
    ],
    "references": [
      "WHO Laboratory Manual for the Examination and Processing of Human Semen, 6th edition, 2021.",
      "NICE CG156. Fertility problems: assessment and treatment, 2013 (updated 2017).",
      "ESHRE Guideline on unexplained infertility, 2023; ESHRE Endometriosis guideline, 2022.",
      "International Evidence-based Guideline for PCOS, 2023.",
      "EAU Guidelines on Sexual and Reproductive Health (male infertility), 2024.",
      "FOGSI Good Clinical Practice Recommendations on female genital tuberculosis, 2018.",
      "Assisted Reproductive Technology (Regulation) Act and Surrogacy (Regulation) Act, Government of India, 2021."
    ]
  },
  "gynaecology-dysmenorrhoea-endometriosis-fibroids": {
    "oneLiner": "Painful periods are **primary dysmenorrhoea** (prostaglandin-driven, starts within 6-24 months of menarche, normal pelvis, treated with an **NSAID started before the pain** plus hormonal suppression) or **secondary dysmenorrhoea** from endometriosis, adenomyosis, fibroids or chronic PID; endometriosis is treated empirically with **NSAID plus continuous COC, dienogest or LNG-IUS** without waiting for laparoscopy, fibroids are managed by **FIGO type (0-8)** and symptoms, and any **fixed, nodular or rapidly enlarging pelvis** is referred.",
    "sections": [
      {
        "heading": "Definition and the classification that matters",
        "points": [
          "**Primary dysmenorrhoea** is cyclical menstrual pain with **no pelvic pathology**, beginning **6-24 months after menarche** once cycles become ovulatory; it affects **50-90% of adolescents and young women**. [ACOG 2018]",
          "**Secondary dysmenorrhoea** is menstrual pain due to identifiable pelvic pathology - **endometriosis, adenomyosis, fibroids, chronic PID, copper IUCD, cervical stenosis or an obstructive Mullerian anomaly**; suspect it with onset after 25, progressive pain, pain outside the flow, deep dyspareunia or failed NSAID plus COC. [Shaw 18e]",
          "**Endometriosis** is the presence of **endometrial-like glands and stroma outside the uterus**, affecting **about 10% of reproductive-age women**, 30-50% of women with infertility and up to 70% with chronic pelvic pain; types are **superficial peritoneal, ovarian endometrioma and deep endometriosis** (over 5 mm below the peritoneum). [ESHRE 2022]",
          "**Endometriosis staging (revised ASRM)**: stage I minimal (1-5 points), II mild (6-15), III moderate (16-40), IV severe (over 40) - it predicts fertility, **not pain**, and #Enzian describes deep disease for surgical planning. [ESHRE 2022]",
          "**Adenomyosis** is endometrial glands and stroma **within the myometrium** with surrounding smooth-muscle hyperplasia - diffuse or focal (adenomyoma). [Berek and Novak 16e]",
          "**Leiomyoma (fibroid)** is a benign monoclonal smooth-muscle tumour; the classification that matters is the **FIGO leiomyoma types 0-8** by position, where **types 0-2 (submucosal)** cause heavy bleeding and infertility and decide the operation. [FIGO 2018]",
          "**Burden**: fibroids are the commonest pelvic tumour (clinically evident in **20-40%** of reproductive-age women, 70-80% of uteri by 50), with earlier and larger fibroids in Indian and African women. [FOGSI 2019]"
        ]
      },
      {
        "heading": "Pathophysiology and pathoanatomy",
        "points": [
          "**Pelvic anatomy**: the uterus is held by the **uterosacral ligaments** (running back to the sacrum around the rectum), cardinal ligaments and round ligaments; the **pouch of Douglas** between uterus and rectum is the most dependent peritoneal recess, where refluxed menstrual debris collects - hence the commonest sites of endometriosis. [Gray's 42e]",
          "**Pain pathways**: afferents from the uterine body travel with **sympathetic fibres via the hypogastric plexus to T10-L1**, so uterine pain is felt **suprapubically and referred to the lower back and inner thighs**; the cervix and upper vagina send afferents via the pelvic splanchnic nerves (S2-S4). [Gray's 42e]",
          "**Primary dysmenorrhoea mechanism**: in ovulatory cycles **progesterone withdrawal** destabilises endometrial lysosomes, releasing phospholipase A2 and arachidonic acid, which COX converts to **PGF2-alpha and PGE2**; these cause high-pressure dysrhythmic contractions (**over 150-200 mmHg**) that occlude myometrial vessels - **uterine ischaemic pain ('uterine angina')**. [ACOG 2018]",
          "**Systemic prostaglandin effects** explain the nausea, vomiting, diarrhoea and headache, and why **NSAIDs (COX inhibitors) remove the cause** - best started before prostaglandin is made. [ACOG 2018]",
          "**Why anovulation protects**: anovulatory cycles have no progesterone withdrawal and little prostaglandin, so the pill (which stops ovulation and thins the endometrium) relieves pain. [ACOG 2018]",
          "**Endometriosis origin**: **Sampson's retrograde menstruation** (viable fragments reflux along tubes and implant), **coelomic metaplasia** (explains cases without menstruation) and **lymphatic or haematogenous spread** (pleural, umbilical, scar deposits); retrograde flow is near-universal, so **immune and genetic factors** decide who develops disease. [ESHRE 2022]",
          "**Endometriosis biology**: lesions express **aromatase** (making their own oestrogen) and show **progesterone resistance**, and they recruit macrophages and cytokines (IL-1, IL-6, TNF-alpha, prostaglandins) - an **oestrogen-dependent chronic inflammatory disease**. [ESHRE 2022]",
          "**Why endometriosis hurts**: cyclical bleeding into deposits causes inflammation, **nerve-fibre ingrowth (neuroangiogenesis)** and central sensitisation, then **fibrosis and adhesions** that fix the uterus in retroversion - explaining pain before menses, **deep dyspareunia, dyschezia** and chronic pelvic pain. [ESHRE 2022]",
          "**Endometrioma**: ovarian surface implants invaginate and bleed repeatedly into a cyst of altered blood (**'chocolate cyst'**); its ground-glass content is typical on ultrasound, and surgery on it reduces ovarian reserve. [ESHRE 2022]",
          "**Infertility in endometriosis**: distorted tubo-ovarian anatomy and adhesions, **inflammatory peritoneal fluid toxic to sperm and embryos**, impaired oocyte quality and endometrial receptivity. [ESHRE 2022]",
          "**Adenomyosis mechanism**: basal endometrium **invades across a disrupted junctional zone** into the myometrium (often after childbirth or curettage); the invading tissue bleeds within muscle and causes smooth-muscle hypertrophy - a **bulky, globular, tender uterus** with heavy painful periods. [Berek and Novak 16e]",
          "**Fibroid biology**: each fibroid is a **clone of one myometrial cell**, often with a **MED12 mutation**; growth depends on **oestrogen and especially progesterone** (a major mitogen) and on excess **extracellular matrix** - so fibroids grow in pregnancy and shrink after menopause, and progesterone-receptor modulators shrink them. [FIGO 2018]",
          "**How fibroids cause symptoms**: submucosal fibroids **enlarge and distort the bleeding endometrial surface**, dilate venules and impair contraction (**HMB**); large fibroids press on **bladder (frequency, retention), rectum, ureters (hydronephrosis) and pelvic veins (leg oedema)**. [FIGO 2018]",
          "**Degeneration**: fibroids outgrow their blood supply - **hyaline** (commonest), cystic, **red (carneous) degeneration** in the second trimester (haemorrhagic infarction causing acute pain and fever), calcific in postmenopause; **sarcomatous change is rare (0.1-0.3%)**. [Shaw 18e]",
          "**Why drugs work**: **COCs and progestogens** stop ovulation and produce endometrial decidualisation and atrophy (including ectopic deposits); **GnRH agonists** create a reversible menopause; **tranexamic acid and NSAIDs** reduce fibroid-related bleeding but do not shrink fibroids. [ESHRE 2022]"
        ]
      },
      {
        "heading": "History in the OPD",
        "points": [
          "**Timing of pain**: primary pain starts with or just before the flow and lasts **8-72 hours**; secondary pain begins **days before and continues after** the period and worsens cycle on cycle. [Shaw 18e]",
          "**Severity and impact**: days missed from school or work, analgesic use and response - **failure of NSAID plus COC** after 3-6 months suggests a secondary cause. [ACOG 2018]",
          "**Endometriosis questions**: **deep dyspareunia**, cyclical **dyschezia** or dysuria, **cyclical rectal bleeding or haematuria** (deep disease), chronic pelvic pain, fatigue and infertility. [ESHRE 2022]",
          "**Bleeding pattern**: heavy regular periods with clots suggest fibroids or adenomyosis; intermenstrual bleeding suggests a polyp, submucosal fibroid or cervical cause. [NICE NG88 2021]",
          "**Pressure symptoms**: frequency, urgency, retention, constipation, abdominal swelling, backache and leg swelling suggest a large fibroid. [FIGO 2018]",
          "**Obstetric history**: parity (adenomyosis in parous women in their late 30s-40s), caesareans and curettage, miscarriages and difficulty conceiving. [Berek and Novak 16e]",
          "**Infection history**: previous PID, STI risk, IUCD use - chronic PID causes secondary dysmenorrhoea and adhesions. [CDC 2021]",
          "**Adolescent red flags**: **cyclical pain with primary amenorrhoea** (obstructed outflow - imperforate hymen, transverse septum) and pain from menarche that fails NSAIDs (obstructed horn, early endometriosis). [ACOG 2018]",
          "**Family history** of endometriosis (6-7 fold risk in first-degree relatives) or fibroids. [ESHRE 2022]",
          "**Fertility plans and contraceptive needs** - the single most important question before choosing between suppression, surgery and ART. [ESHRE 2022]",
          "**Red-flag features**: postmenopausal growth of a fibroid, weight loss, ascites, rapidly enlarging mass - suspect malignancy. [FIGO 2018]"
        ]
      },
      {
        "heading": "Examination",
        "points": [
          "**General**: pallor (HMB), BMI, and in adolescents only an **abdominal examination and inspection of the vulva** - a vaginal examination is neither necessary nor appropriate in virgins. [ACOG 2018]",
          "**Abdomen**: a **firm, irregular, non-tender mass arising from the pelvis** (fibroid - you cannot get below it), its size in weeks, and tenderness. [Shaw 18e]",
          "**Speculum**: **bluish nodules in the posterior fornix** (rectovaginal endometriosis), cervical stenosis, a fibroid polyp protruding through the os, IUCD threads and cervicitis. [ESHRE 2022]",
          "**Bimanual - endometriosis**: **fixed retroverted uterus**, **tender nodular uterosacral ligaments** and pouch of Douglas, tender adnexal mass (endometrioma); findings are clearest **premenstrually**, and a rectovaginal examination feels the septum. [ESHRE 2022]",
          "**Bimanual - adenomyosis**: **symmetrically enlarged, globular, soft and tender uterus**, usually under 12-14 weeks size, most tender just before menses. [Berek and Novak 16e]",
          "**Bimanual - fibroid**: **enlarged, firm, irregular, non-tender uterus**; the mass **moves with the cervix** and cannot be felt separately from the uterus (unlike an ovarian mass, where a groove is felt). [Shaw 18e]",
          "**Chronic PID**: generalised tenderness with **cervical motion tenderness** and fixed tender adnexal masses (hydrosalpinx, adhesions). [CDC 2021]",
          "**Adolescent with primary amenorrhoea and cyclical pain**: look for a **bulging bluish membrane at the introitus** (imperforate hymen with haematocolpos) and a suprapubic mass. [Shaw 18e]"
        ]
      },
      {
        "heading": "Minimal investigations",
        "points": [
          "**No investigation** is needed for typical primary dysmenorrhoea with a normal examination; treat empirically. [ACOG 2018]",
          "**Urine pregnancy test** in any sexually active woman with pelvic pain, and **chlamydia and gonorrhoea NAAT** if infection is possible. [ESHRE 2022]",
          "**Transvaginal ultrasound** (transabdominal in virgins) is the first imaging test: it shows **fibroids with FIGO type**, adenomyosis (asymmetric wall, cysts, fan-shaped shadowing), **endometrioma (ground-glass cyst)** and obstructed outflow; a normal scan **does not exclude** peritoneal endometriosis. [ESHRE 2022]",
          "**MRI** when ultrasound is inconclusive: **junctional zone 12 mm or more** (adenomyosis), mapping of **deep endometriosis** (bowel, bladder, ureter) and fibroid mapping before myomectomy. [ESHRE 2022]",
          "**Hb and ferritin** in heavy bleeding; **renal ultrasound** if a large fibroid or deep endometriosis may obstruct the ureters. [NICE NG88 2021]",
          "**Laparoscopy** is no longer required before treatment; it is done when imaging is negative and empirical treatment fails, or when surgery is planned - histology remains the reference standard. [ESHRE 2022]",
          "**Do not use CA-125** to diagnose or exclude endometriosis (it rises in infection, fibroids, adenomyosis, pregnancy and menstruation); it is for **suspected ovarian malignancy**, especially after menopause. [ESHRE 2022]"
        ]
      },
      {
        "heading": "Treatment - general measures",
        "points": [
          "**Explain and validate**: the pain is real, physiological or treatable, and endometriosis is a chronic condition managed long term. [ESHRE 2022]",
          "**Local heat** (hot water bottle or heat patch at about 40 C) is as effective as an NSAID in trials, and **regular exercise** and not smoking help. [ACOG 2018]",
          "**Settle the goal first**: pain relief and fertility need different treatments - **hormonal suppression cannot improve fertility** and prevents conception while it is taken. [ESHRE 2022]",
          "**Iron-rich diet and iron supplements** for anaemia from HMB with fibroids or adenomyosis. [NICE NG88 2021]",
          "**Asymptomatic fibroids** need no treatment - reassure, check Hb and review annually or if symptoms change; they regress after menopause. [FIGO 2018]",
          "**Multidisciplinary pain care** for chronic pelvic pain (physiotherapy, psychology, pain clinic) when hormonal and surgical treatment fail. [ESHRE 2022]"
        ]
      },
      {
        "heading": "Treatment - drugs",
        "points": [
          "**NSAIDs (first-line for dysmenorrhoea)**: **mefenamic acid 500 mg three times daily**, **ibuprofen 400 mg three times daily** or **naproxen 500 mg then 250 mg every 6-8 hours**, taken **with food, starting 1-2 days before the expected period (or at the first twinge) and regularly for 2-3 days**, not as needed. [ACOG 2018]",
          "**NSAID safety**: dyspepsia and GI bleeding (add a PPI if at risk), avoid in **peptic ulcer, aspirin-sensitive asthma, renal impairment and after 20 weeks of pregnancy**; try at least **3 cycles**, and switch to another NSAID before declaring failure. [ACOG 2018]",
          "**Combined oral contraceptive (second-line and endometriosis first-line)**: EE 30 microgram + levonorgestrel 150 microgram daily, cyclically or **continuously (tricycling or no break) to induce amenorrhoea**; check WHO MEC (migraine with aura category 4). [ESHRE 2022]",
          "**Dienogest 2 mg once daily continuously** (a progestogen) is first-line for endometriosis pain: decidualises and atrophies deposits and shrinks endometriomas; side effects are **irregular bleeding, headache, breast tenderness, mood change and acne**; it is not relied on as a contraceptive. [ESHRE 2022]",
          "**Other progestogens**: **norethisterone acetate 5 mg daily** (up to 15 mg), **medroxyprogesterone acetate 10-30 mg daily**, or **DMPA 150 mg IM 3-monthly**; side effects are spotting, bloating, weight gain and low mood. [ESHRE 2022]",
          "**LNG-IUS 52 mg**: **first-line for adenomyosis**, effective for endometriosis pain (including after surgery) and for HMB with fibroids **if the cavity is not distorted**; spotting for 3-6 months. [NICE NG88 2021]",
          "**GnRH agonists (second-line)**: **leuprolide 3.75 mg IM monthly (or 11.25 mg 3-monthly)** or **goserelin 3.6 mg SC implant monthly**; after an initial **flare** they down-regulate the pituitary, producing a reversible menopause. [ESHRE 2022]",
          "**GnRH agonist side effects and add-back**: hot flushes, vaginal dryness, mood change and **about 6% bone loss in 6 months**; give **add-back from the start** - **tibolone 2.5 mg daily**, or **estradiol 1 mg + norethisterone acetate 0.5 mg daily**, or norethisterone acetate 5 mg daily - and limit to **6 months** unless specialist-supervised. [ESHRE 2022]",
          "**Oral GnRH antagonist combinations** (for example **relugolix 40 mg + estradiol 1 mg + norethisterone acetate 0.5 mg once daily**) treat fibroid bleeding and endometriosis pain without a flare, where available; they are not contraceptive until 1 month of use. [ESHRE 2022]",
          "**Fibroid bleeding - non-hormonal**: **tranexamic acid 1 g three times daily for up to 4 days** from day 1 of the period (avoid with active VTE) plus **mefenamic acid 500 mg three times daily**; these reduce loss but **do not shrink the fibroid**. [NICE NG88 2021]",
          "**Preoperative GnRH agonist for fibroids**: 3 months shrinks fibroids by **35-60%**, lets Hb recover and may allow a laparoscopic or transverse incision - fibroids regrow within months of stopping. [FIGO 2018]",
          "**Ulipristal acetate** (SPRM) shrinks fibroids but is **restricted to women who are not eligible for surgery** because of rare severe liver injury - check LFTs if ever used. [NICE NG88 2021]",
          "**Iron**: oral elemental iron **60-120 mg daily or on alternate days** for 3 months after Hb normalises, or **ferric carboxymaltose 20 mg/kg up to 1000 mg IV** before surgery. [MoHFW 2022]",
          "**Danazol** (androgenic, causes hirsutism, voice change and adverse lipids) and **GnRH agonists without add-back** are no longer recommended for routine use. [ESHRE 2022]",
          "**Aromatase inhibitors** (letrozole 2.5 mg daily with a COC or GnRH analogue) are reserved for refractory endometriosis pain under specialist care. [ESHRE 2022]",
          "**Red degeneration in pregnancy**: rest, **paracetamol 1 g 6-hourly** and short-course opioids; NSAIDs only briefly and **not after 20-30 weeks** (fetal renal and ductal effects); no surgery. [Shaw 18e]",
          "**Step-up logic**: primary dysmenorrhoea - NSAID, then add COC or LNG-IUS, then investigate; endometriosis - NSAID plus COC or progestogen, then GnRH analogue with add-back or surgery; fibroids - tranexamic acid or LNG-IUS, then surgery chosen by FIGO type and fertility wishes. [ESHRE 2022]"
        ]
      },
      {
        "heading": "Surgery and special situations",
        "points": [
          "**Endometriosis surgery**: laparoscopic **excision or ablation of peritoneal deposits and adhesiolysis** relieves pain; for endometriomas **cystectomy (capsule excision) rather than drainage** (drainage alone recurs in over 80%), but excision **reduces AMH**. [ESHRE 2022]",
          "**Endometriosis with infertility**: surgery for minimal-mild disease modestly raises spontaneous pregnancy; **IUI with stimulation** for mild disease with patent tubes; **IVF** for moderate-severe disease, tubal damage or failure - the Endometriosis Fertility Index predicts success after surgery. [ESHRE 2022]",
          "**Definitive endometriosis surgery**: hysterectomy with bilateral salpingo-oophorectomy and excision of all visible disease only when the family is complete; afterwards give **combined oestrogen-progestogen HRT** (progestogen prevents reactivation of residual disease). [ESHRE 2022]",
          "**Fibroid surgery by FIGO type**: **hysteroscopic myomectomy for types 0-2** (often curative for bleeding), **laparoscopic or open myomectomy** to preserve fertility (recurrence 15-30%, may need caesarean if the cavity was breached), **hysterectomy** when the family is complete. [FIGO 2018]",
          "**Uterine artery embolisation** shrinks fibroids by **40-60%** and preserves the uterus, but is not preferred for women wanting pregnancy; post-embolisation pain, fever and fibroid expulsion occur. [FIGO 2018]",
          "**Fibroids and contraception (WHO MEC)**: fibroids **without cavity distortion are category 1** for copper and LNG IUDs; **with cavity distortion category 4**. [WHO MEC 2015]",
          "**Fibroids in pregnancy**: raise miscarriage, malpresentation, obstructed labour, preterm birth, abruption and **postpartum haemorrhage**; **myomectomy at caesarean is avoided** except for pedunculated subserosal fibroids. [Shaw 18e]",
          "**Morcellation risk**: power morcellation of an **unsuspected leiomyosarcoma** disseminates it, so use containment bags and avoid morcellation with suspicious features. [FIGO 2018]"
        ]
      },
      {
        "heading": "Follow-up, monitoring and when to refer",
        "points": [
          "**Primary dysmenorrhoea**: review after **3 cycles** of NSAID with or without COC; failure means reconsider the diagnosis and scan. [ACOG 2018]",
          "**Endometriosis on hormones**: review at **3-6 months** for pain, bleeding pattern and side effects, and long term for recurrence (up to **50% at 5 years after surgery**). [ESHRE 2022]",
          "**Fibroids under observation**: Hb and symptoms annually, and scan if symptoms change; **any growth after menopause** needs urgent referral. [FIGO 2018]",
          "**GnRH agonist use**: monitor menopausal symptoms, and consider **DXA** if treatment exceeds 6 months or is repeated. [ESHRE 2022]",
          "**Refer to gynaecology**: suspected deep endometriosis (bowel, bladder, ureter), endometrioma, infertility, failed medical treatment, fibroids with cavity distortion or pressure symptoms, and anaemia not controlled. [NICE NG73 2024]",
          "**Refer urgently**: rapidly enlarging or postmenopausal fibroid, pelvic mass with ascites or raised CA-125 after menopause, hydronephrosis or urinary retention, and suspected torsion (same hour). [FIGO 2018]"
        ]
      }
    ],
    "tables": [
      {
        "heading": "Types of dysmenorrhoea - classification by cause",
        "columns": [
          "Feature",
          "Primary",
          "Endometriosis",
          "Adenomyosis",
          "Fibroid"
        ],
        "rows": [
          [
            "Typical woman",
            "Adolescent, 6-24 months after menarche",
            "25-35, nulliparous, infertility",
            "Parous, 35-50",
            "30-45, any parity"
          ],
          [
            "Pain pattern",
            "With or just before flow, 8-72 hours",
            "Days before and after flow, deep dyspareunia, dyschezia",
            "Heavy painful periods",
            "Mainly heavy bleeding; pain if degenerating"
          ],
          [
            "Pelvic findings",
            "Normal",
            "Fixed retroverted uterus, nodular uterosacrals",
            "Bulky, globular, tender uterus",
            "Enlarged, firm, irregular, non-tender"
          ],
          [
            "Imaging",
            "None needed",
            "Ground-glass endometrioma; MRI for deep disease",
            "Junctional zone 12 mm or more on MRI",
            "TVS with FIGO type 0-8"
          ],
          [
            "First-line treatment",
            "NSAID before onset, then COC or LNG-IUS",
            "NSAID + continuous COC or dienogest",
            "LNG-IUS",
            "Tranexamic acid, NSAID; LNG-IUS if cavity normal"
          ]
        ]
      },
      {
        "heading": "FIGO leiomyoma classification types 0-8",
        "columns": [
          "Type",
          "Location",
          "Usual approach"
        ],
        "rows": [
          [
            "0",
            "Pedunculated intracavitary",
            "Hysteroscopic resection"
          ],
          [
            "1",
            "Submucosal, under 50% intramural",
            "Hysteroscopic resection"
          ],
          [
            "2",
            "Submucosal, 50% or more intramural",
            "Hysteroscopic (may need two stages) or abdominal"
          ],
          [
            "3",
            "Contacts endometrium, 100% intramural",
            "Laparoscopic or open myomectomy"
          ],
          [
            "4",
            "Intramural",
            "Myomectomy if symptomatic"
          ],
          [
            "5",
            "Subserosal, 50% or more intramural",
            "Laparoscopic or open myomectomy"
          ],
          [
            "6",
            "Subserosal, under 50% intramural",
            "Laparoscopic myomectomy"
          ],
          [
            "7",
            "Subserosal pedunculated",
            "Laparoscopic removal; risk of torsion"
          ],
          [
            "8",
            "Other - cervical, broad ligament, parasitic",
            "Individualised"
          ]
        ]
      },
      {
        "heading": "Drugs: dose, duration and side effects",
        "columns": [
          "Drug",
          "Mechanism",
          "Dose and duration",
          "Side effects",
          "How to take"
        ],
        "rows": [
          [
            "Mefenamic acid",
            "COX inhibitor, lowers PGF2-alpha",
            "500 mg three times daily for 2-3 days per period",
            "Dyspepsia, GI bleed, renal impairment",
            "With food; start 1-2 days before or at first twinge; regular not as needed"
          ],
          [
            "Naproxen",
            "COX inhibitor, long acting",
            "500 mg then 250 mg every 6-8 hours, 2-3 days",
            "Dyspepsia, fluid retention",
            "With food; covers the night"
          ],
          [
            "Combined pill (EE 30 + LNG 150)",
            "Stops ovulation, thins endometrium",
            "1 daily, cyclic or continuous",
            "Spotting, nausea, VTE",
            "Continuous use for endometriosis; check WHO MEC"
          ],
          [
            "Dienogest",
            "Progestogen, decidualises and atrophies deposits",
            "2 mg daily continuously",
            "Irregular bleeding, headache, low mood, acne",
            "Same time daily; not relied on as contraceptive"
          ],
          [
            "Medroxyprogesterone acetate",
            "Progestogen",
            "10-30 mg daily orally, or 150 mg IM 3-monthly",
            "Spotting, bloating, weight gain",
            "Oral daily with water; depot every 12 weeks"
          ],
          [
            "LNG-IUS 52 mg",
            "Local endometrial atrophy",
            "Up to 5 years for pain and HMB",
            "Spotting 3-6 months",
            "First-line for adenomyosis; not if cavity distorted"
          ],
          [
            "Leuprolide",
            "GnRH agonist, pituitary down-regulation",
            "3.75 mg IM monthly or 11.25 mg 3-monthly, up to 6 months",
            "Hot flushes, bone loss, initial flare",
            "Add-back tibolone 2.5 mg or E2 1 mg + NETA 0.5 mg daily"
          ],
          [
            "Tranexamic acid",
            "Antifibrinolytic",
            "1 g three times daily for up to 4 days per period",
            "Nausea; avoid in active VTE",
            "From day 1 of bleeding; reduce in renal impairment"
          ]
        ]
      }
    ],
    "redFlags": [
      "Cyclical pain with primary amenorrhoea and a bulging bluish introital membrane - imperforate hymen with haematocolpos; refer for drainage.",
      "Rapidly enlarging pelvic mass, or a fibroid growing after menopause - suspect leiomyosarcoma; refer and avoid morcellation.",
      "Solid irregular pelvic mass with ascites, weight loss and raised CA-125 after menopause - ovarian cancer, not a fibroid.",
      "Acute localised pain over a fibroid in the second trimester with fever - red degeneration; admit for analgesia, no surgery.",
      "Sudden severe pelvic pain with vomiting and a tender mass - torsion of a pedunculated fibroid or ovarian cyst; same-hour surgical referral.",
      "Cyclical rectal bleeding or haematuria - deep endometriosis of bowel or bladder; specialist centre.",
      "Fibroid with urinary retention, hydronephrosis or unilateral leg oedema - refer urgently."
    ],
    "pearls": [
      "Primary dysmenorrhoea is PGF2-alpha driven, starts once cycles are ovulatory, and the examination is normal.",
      "Give the NSAID before the pain and regularly for 2-3 days - taking it only once pain is established is the commonest failure.",
      "Pain that begins days before the flow and persists after it, with deep dyspareunia, is secondary until proved otherwise.",
      "Endometriosis severity correlates poorly with stage - treat empirically without waiting for laparoscopy.",
      "CA-125 must not be used to diagnose or exclude endometriosis.",
      "Suppressing ovulation does not treat endometriosis-associated infertility - use surgery or ART.",
      "Excise an endometrioma capsule rather than drain it, but counsel that excision costs ovarian reserve.",
      "GnRH agonists are limited to 6 months and given with add-back - bone density falls about 6%.",
      "Only FIGO types 0-2 fibroids reliably cause HMB and are cured by hysteroscopic resection.",
      "Fibroids without cavity distortion are WHO MEC 1 for IUDs; with distortion, category 4."
    ],
    "references": [
      "ESHRE Guideline: Endometriosis, 2022.",
      "NICE NG73. Endometriosis: diagnosis and management, 2017 (updated 2024).",
      "NICE NG88. Heavy menstrual bleeding: assessment and management, 2018 (updated 2021).",
      "Munro MG et al. FIGO leiomyoma subclassification system, 2018 revision.",
      "ACOG Committee Opinion 760. Dysmenorrhea and endometriosis in the adolescent, 2018.",
      "FOGSI Good Clinical Practice Recommendations on the management of fibroids, 2019.",
      "Shaw's Textbook of Gynaecology, 18th edition; Berek and Novak's Gynecology, 16th edition."
    ]
  },
  "gynaecology-cervical-cancer-screening": {
    "oneLiner": "Cervical cancer is a preventable cancer caused by **persistent high-risk HPV infection** with a **10-20 year precancerous phase**; it is eliminated by the WHO **90-70-90** strategy - HPV vaccination of girls **9-14 years**, screening of women **30-65 years** (India: **VIA every 5 years**; WHO: **HPV DNA every 5-10 years**, from 25 and every 3-5 years in HIV) and **same-visit treatment** of screen-positive precancer by thermal ablation or LLETZ - while any woman with a **visible lesion or postcoital bleeding is biopsied, not screened**.",
    "sections": [
      {
        "heading": "Definition and the classification that matters",
        "points": [
          "**Screening** means testing **asymptomatic** women to find **cervical intraepithelial neoplasia (CIN2+)** before invasion; a symptomatic woman (postcoital bleeding, visible lesion) needs **diagnosis and biopsy**, not screening. [WHO 2021]",
          "**Burden**: cervical cancer is the **second commonest cancer in Indian women**, with about **1.2 lakh new cases and 77 000 deaths a year** - about a fifth of the global burden. [GLOBOCAN 2022]",
          "**WHO elimination targets for 2030 (90-70-90)**: **90% of girls fully vaccinated by 15**, **70% of women screened with a high-performance test by 35 and again by 45**, and **90% of women with precancer or cancer treated**; elimination means incidence **under 4 per 100 000 women-years**. [WHO 2020]",
          "**Histological classification**: **CIN1 (LSIL)** - lower third, usually regresses; **CIN2 and CIN3 (HSIL)** - two-thirds to full thickness, the treatment threshold; **adenocarcinoma in situ** - glandular precursor. [WHO 2021]",
          "**Cytology is reported by the Bethesda 2014 system** (NILM, ASC-US, ASC-H, LSIL, HSIL, AGC, carcinoma) - the classification table below, with the next step for each. [ASCCP 2019]",
          "**Indian programme**: under **NP-NCD population-based screening**, all women **30-65 years are offered VIA every 5 years** at Ayushman Arogya Mandirs (sub-centres and PHCs) by trained ANMs, nurses or medical officers, with HPV testing being introduced where available. [MoHFW 2023]",
          "**WHO recommendation**: **HPV DNA as the primary test from 30 years, every 5-10 years** (screen-and-treat or screen-triage-treat); in **women living with HIV from 25 years, every 3-5 years**, always with triage. [WHO 2021]"
        ]
      },
      {
        "heading": "Pathophysiology and pathoanatomy",
        "points": [
          "**Cervical anatomy**: the **ectocervix** is covered by stratified squamous epithelium and the **endocervical canal** by mucus-secreting columnar epithelium; they meet at the **squamocolumnar junction (SCJ)**. [Berek and Novak 16e]",
          "**Transformation zone**: at puberty, in pregnancy and on the COC, oestrogen **everts** columnar epithelium onto the ectocervix (ectropion); vaginal acidity then drives **squamous metaplasia**, creating a zone between the original and new SCJ - **the metaplastic transformation zone is where almost all cancers arise**. [Berek and Novak 16e]",
          "**SCJ migration with age**: after the menopause the SCJ **recedes into the canal**, so it cannot be seen - which makes **VIA invalid after menopause** and colposcopy often 'type 3'. [WHO 2021]",
          "**HPV biology**: HPV enters **basal cells through micro-abrasions**; 14 high-risk genotypes, with **HPV 16 and 18 causing about 70% of cancers worldwide and over 80% in India**; low-risk 6 and 11 cause genital warts. [WHO 2021]",
          "**Natural history**: **80-90% of infections clear within 2 years** by cell-mediated immunity; only **persistent** infection progresses through CIN2-3 to invasion over **10-20 years** - the window that screening exploits. [WHO 2021]",
          "**Oncogenesis**: in persistent infection viral DNA **integrates** into the host genome and over-expresses **E6 (degrades p53)** and **E7 (inactivates Rb, releasing E2F)**, so damaged cells neither arrest nor die; **p16 over-expression** is the tissue marker of this transforming infection. [Berek and Novak 16e]",
          "**Cofactors for persistence and progression**: **smoking** (carcinogens concentrate in cervical mucus, local immunosuppression), **HIV and immunosuppression** (6-fold higher risk), high parity, **long-term COC use**, early sexual debut and many partners (more exposure), and co-infection with chlamydia or HSV. [WHO 2021]",
          "**Why VIA works**: **5% acetic acid** coagulates the abundant nuclear protein and dehydrates cells with a **high nuclear-cytoplasmic ratio**, so dysplastic epithelium turns **dense acetowhite** while normal squamous epithelium stays pink. [MoHFW 2016]",
          "**Why Lugol iodine works (VILI and Schiller test)**: normal mature squamous cells are rich in **glycogen and stain mahogany brown**; dysplastic cells lack glycogen and stay **mustard-yellow (iodine-negative)**. [Berek and Novak 16e]",
          "**Colposcopic vessels**: angiogenesis in high-grade lesions produces **coarse punctation, mosaicism and atypical 'corkscrew' vessels** - the higher the grade, the coarser the pattern. [Berek and Novak 16e]",
          "**Why HPV testing is more sensitive**: it detects the **cause** rather than the morphological change, so a negative test has a **negative predictive value over 99%** for CIN2+ for 5 or more years - which buys the long interval. [WHO 2021]",
          "**How vaccines work**: recombinant **L1 capsid proteins self-assemble into virus-like particles** with no viral DNA; they induce high-titre **neutralising IgG** that transudates into cervical mucus and blocks infection - **prophylactic, not therapeutic**. [WHO 2022]",
          "**Invasion and spread**: invasive cancer spreads directly to the **vagina, parametrium (ureteric obstruction, hydronephrosis)**, bladder and rectum, and by lymphatics to pelvic then para-aortic nodes - staged clinically and by imaging (**FIGO 2018**). [FIGO 2018]"
        ]
      },
      {
        "heading": "History in the OPD",
        "points": [
          "**Ask every woman aged 30 or over** when she was last screened, with which test and result - most Indian women attend for something else, and that contact must become a screen. [MoHFW 2023]",
          "**Symptoms that mean diagnosis, not screening**: **postcoital bleeding**, intermenstrual or postmenopausal bleeding, and **foul, blood-stained watery discharge**. [WHO 2021]",
          "**Advanced disease symptoms**: backache, sciatic pain, unilateral leg swelling, urinary or rectal symptoms, weight loss - parametrial or sidewall spread. [FIGO 2018]",
          "**Risk factors**: age at first intercourse, number of partners (hers and her partner's), parity, **smoking or tobacco use**, COC use for over 5 years, and previous STIs. [WHO 2021]",
          "**HIV status and immunosuppression** (transplant, long-term steroids, biologics) - these change the age of entry and interval. [WHO 2021]",
          "**Previous abnormal results or treatment** (cryotherapy, thermal ablation, LLETZ) - she needs post-treatment follow-up rather than routine screening. [WHO 2021]",
          "**HPV vaccination status** - vaccinated women still need screening. [WHO 2021]",
          "**Hysterectomy history**: total or subtotal, and whether it was for CIN2+ - this decides whether to stop or continue. [ACOG 2021]",
          "**Pregnancy and menopausal status** - VIA is invalid after the menopause and endocervical curettage is avoided in pregnancy. [WHO 2021]",
          "**Barriers**: fear of cancer, embarrassment, **need for a female provider**, loss of wages, and the belief that screening is for the symptomatic. [MoHFW 2016]"
        ]
      },
      {
        "heading": "Examination",
        "points": [
          "**Setting**: privacy, female provider or chaperone, consent, empty bladder, lithotomy position on a couch with a good **halogen or LED light source**. [MoHFW 2016]",
          "**Speculum technique for screening**: warm the Cusco speculum with water only (**no gel - it interferes with cytology and HPV tests**), insert obliquely and rotate, open to see the **whole cervix and os**, and note discharge, ectropion, polyp, growth or ulcer. [MoHFW 2016]",
          "**VIA procedure**: (1) identify the **SCJ and transformation zone**; (2) wipe away mucus with saline; (3) apply **5% acetic acid** with a large swab; (4) wait **1 minute**; (5) inspect the transformation zone in good light. [MoHFW 2016]",
          "**VIA reading**: **positive** = a **dense, opaque, well-defined acetowhite area touching the SCJ**; **negative** = no acetowhitening or faint, patchy, translucent change, or acetowhite polyps and nabothian cysts; **suspicious for cancer** = a cauliflower growth or ulcer. [MoHFW 2016]",
          "**VIA is not valid** when the SCJ is not visible (usually after menopause) - such women need HPV testing or cytology. [WHO 2021]",
          "**Sampling for cytology**: rotate an **Ayre's spatula 360 degrees** around the ectocervix and an **endocervical brush 90-180 degrees** in the canal, spread thinly and **fix immediately** (or rinse into liquid-based medium). [ACOG 2021]",
          "**HPV sampling**: clinician-collected cervical brush, or **self-collected vaginal swab** (inserted 5-6 cm, rotated 3-5 times) - self-sampling raises uptake among women who decline speculum examination. [WHO 2021]",
          "**Bimanual and per-rectal examination** where cancer is suspected, to assess uterine mobility, **parametrial thickening** and the rectovaginal septum. [FIGO 2018]"
        ]
      },
      {
        "heading": "Minimal investigations",
        "points": [
          "**Primary screening test choice**: **HPV DNA** where available (sensitivity **90-95%** for CIN2+), **VIA** where not (sensitivity **60-70%**, specificity about 85%, immediate result), and **cytology** where a laboratory exists (single-test sensitivity **50-60%**). [WHO 2021]",
          "**Triage of an HPV-positive woman**: VIA, cytology or colposcopy decides who needs treatment - positives are common, so not all are treated in the triage approach. [WHO 2021]",
          "**Colposcopy**: magnified view after acetic acid and Lugol iodine; record the **transformation zone type (1 fully ectocervical, 2 partly endocervical but visible, 3 not fully visible)** and take a **directed punch biopsy** of the worst area. [Berek and Novak 16e]",
          "**Biopsy directly (no screening)** for any **visible growth, ulcer or contact-bleeding friable cervix** - a smear is falsely negative in frank cancer. [WHO 2021]",
          "**Women living with HIV**: HPV DNA from 25 years, every 3-5 years, always triaged; offer ART regardless of CD4. [WHO 2021]",
          "**Stop screening** at **65 after two consecutive negative screens** and no history of CIN2+, and after **total hysterectomy for benign disease**; continue after **subtotal hysterectomy**, and do vault tests for 20 years after hysterectomy for CIN2+. [ACOG 2021]",
          "**Do not**: screen under **25** (cytology) or **HPV-test under 30** (transient infections), repeat screens annually, screen symptomatic women instead of examining and biopsying them, or stop screening because a woman is vaccinated or sterilised. [WHO 2021]",
          "**If cancer is confirmed**: staging by examination, **CBC, renal function, chest X-ray, ultrasound for hydronephrosis**, and MRI or CT at the cancer centre (FIGO 2018 allows imaging and pathology in staging). [FIGO 2018]"
        ]
      },
      {
        "heading": "Treatment - general measures",
        "points": [
          "**Counsel before screening**: what the test looks for, that most positives are precancer and curable, and what happens next - **same-visit treatment** if positive. [MoHFW 2016]",
          "**Counsel an HPV-positive woman**: HPV is very common, may have been acquired **many years earlier**, says nothing about recent fidelity, and **partner testing or treatment is not indicated** - address blame and marital discord directly. [FOGSI 2019]",
          "**Tobacco cessation** in every screened woman - smoking impairs clearance and doubles progression. [WHO 2021]",
          "**Condoms** reduce (but do not eliminate) HPV transmission; **male circumcision** lowers carriage in men. [WHO 2021]",
          "**Organise the service**: fixed weekly screening slot, female provider, screened room, **same-day results and treatment**, and a **register with date, test and result** to drive recall. [MoHFW 2016]",
          "**ASHA mobilisation** through population enumeration and the CBAC form brings women aged 30-65 to the Ayushman Arogya Mandir for screening. [MoHFW 2023]"
        ]
      },
      {
        "heading": "Treatment - drugs (vaccines) and treatment of precancer",
        "points": [
          "**HPV vaccines available in India**: **bivalent** (16, 18), **quadrivalent** (6, 11, 16, 18 - including the indigenous **Cervavac**, licensed 2022) and **nonavalent** (adds 31, 33, 45, 52, 58, covering about 90% of cancers). [WHO 2022]",
          "**Schedule (WHO 2022)**: girls **9-14 years - 1 or 2 doses** (2 doses at **0 and 6 months** as licensed); **15-20 years - 1 or 2 doses**; **21 and over - 2 doses 6 months apart** (3 doses 0, 1-2, 6 months as licensed from 15); **immunocompromised or HIV-positive - at least 2, preferably 3 doses**. [WHO 2022]",
          "**How to give**: **0.5 mL IM into the deltoid**; observe **seated or lying for 15 minutes** (vasovagal syncope is the commonest event in adolescents); can be co-administered with Td and other vaccines. [WHO 2022]",
          "**Vaccine side effects**: injection-site pain and swelling, fever, headache, **syncope**; anaphylaxis is very rare (contraindicated after anaphylaxis to a previous dose or yeast for quadrivalent and nonavalent). [WHO 2022]",
          "**Pregnancy**: vaccination is **deferred**, but inadvertent vaccination needs no action; **breastfeeding is not a contraindication**. [WHO 2022]",
          "**National programme**: NTAGI (2022) recommended HPV vaccine for girls **9-14 years with a one-time catch-up**, and it is being introduced through the UIP with school-based delivery; private catch-up to **26 years**, and **27-45 years by shared decision**. [MoHFW 2024]",
          "**Efficacy**: over **90% protection against vaccine-type CIN2+** in HPV-naive girls, with falling cervical cancer rates in high-coverage countries - but **vaccinated women must still be screened**. [WHO 2022]",
          "**Ablation eligibility**: **type 1 transformation zone** (whole SCJ visible), lesion covering **under 75% of the ectocervix**, not extending into the canal, and **no suspicion of invasion or glandular disease**. [WHO 2021]",
          "**Thermal ablation**: probe at **100-120 C for 20-40 seconds per application** (overlapping to cover the zone), no anaesthesia needed, portable and battery-operated - the preferred ablation in screen-and-treat. [WHO 2021]",
          "**Cryotherapy**: **double freeze-thaw (3 minutes freeze, 5 minutes thaw, 3 minutes freeze)** with CO2 or N2O, an ice ball extending 4-5 mm beyond the lesion; equally effective but gas supply is a barrier. [WHO 2021]",
          "**LLETZ (LEEP)**: for lesions not eligible for ablation (type 2-3 zones, large lesions, suspected invasion or glandular disease, recurrence); under **local anaesthetic (lidocaine with adrenaline cervical block)**, with a specimen for histology. [WHO 2021]",
          "**Cold knife conisation** for suspected microinvasion, **adenocarcinoma in situ** or deep canal disease; **hysterectomy is never the primary treatment for CIN**. [WHO 2021]",
          "**After ablation or LLETZ**: watery discharge for 2-4 weeks, avoid intercourse, tampons and douching for **4 weeks**; return for heavy bleeding, fever or foul discharge; LLETZ raises **preterm birth risk** with deep or repeat cones. [WHO 2021]",
          "**Pregnancy**: screening and colposcopy are safe, but **endocervical curettage is avoided** and treatment of CIN is deferred to **6 weeks postpartum** unless invasion is suspected. [ASCCP 2019]"
        ]
      },
      {
        "heading": "Follow-up, monitoring and when to refer",
        "points": [
          "**Screening intervals**: VIA every **5 years** (India), HPV DNA every **5-10 years**, cytology every **3 years**; women living with HIV every **3-5 years** from 25. [WHO 2021]",
          "**Post-treatment test of cure**: **HPV test (or VIA or cytology) at 12 months**; a positive result means repeat colposcopy - persistence predicts residual disease. [WHO 2021]",
          "**Close the loop**: a screen-positive woman who has not been treated is a programme emergency - trace her through the ASHA and the register. [MoHFW 2016]",
          "**Refer to a colposcopy or higher centre**: VIA-positive lesions not eligible for ablation, HSIL or AGC cytology, suspected glandular disease, and **HPV-positive women with type 3 zones**. [WHO 2021]",
          "**Refer urgently to gynae-oncology**: visible growth, suspicious VIA, biopsy-proven cancer, postcoital bleeding with an abnormal cervix, or **hydronephrosis and leg oedema**. [FIGO 2018]",
          "**Programme indicators**: screening coverage of the eligible population, **VIA positivity (expected 5-10%)**, proportion of positives treated (target 90%), and loss to follow-up. [MoHFW 2023]"
        ]
      }
    ],
    "tables": [
      {
        "heading": "Screening tests - types and performance criteria",
        "columns": [
          "Test",
          "Sensitivity for CIN2+",
          "Specificity",
          "Main advantage",
          "Main limitation"
        ],
        "rows": [
          [
            "VIA (5% acetic acid)",
            "60-70%",
            "About 85%",
            "Cheap, no laboratory, immediate result, screen-and-treat",
            "Subjective; invalid after menopause (SCJ not seen)"
          ],
          [
            "Cytology (Pap or LBC)",
            "50-60% single test",
            "90-95%",
            "Standardised Bethesda reporting; detects glandular lesions",
            "Needs laboratory and cytologists; repeat every 3 years"
          ],
          [
            "HPV DNA test",
            "90-95%",
            "About 85% (30 and over)",
            "Objective, self-sampling, NPV over 99%, interval 5-10 years",
            "Cost; positives need triage; not under 30"
          ]
        ]
      },
      {
        "heading": "Bethesda 2014 classification of cervical cytology and next step",
        "columns": [
          "Category",
          "Meaning",
          "Usual next step"
        ],
        "rows": [
          [
            "NILM",
            "Negative for intraepithelial lesion or malignancy",
            "Routine screening interval"
          ],
          [
            "ASC-US",
            "Atypical squamous cells of undetermined significance",
            "Reflex HPV test; colposcopy if positive"
          ],
          [
            "ASC-H",
            "Atypical squamous cells, cannot exclude HSIL",
            "Colposcopy"
          ],
          [
            "LSIL",
            "Low-grade lesion (HPV effect, CIN1)",
            "Colposcopy, or HPV-based follow-up if low risk"
          ],
          [
            "HSIL",
            "High-grade lesion (CIN2-3)",
            "Colposcopy or see-and-treat LLETZ"
          ],
          [
            "AGC",
            "Atypical glandular cells",
            "Colposcopy, endocervical sampling; endometrial sampling if 35 or over"
          ],
          [
            "AIS or carcinoma",
            "Adenocarcinoma in situ or invasive cancer",
            "Excision (AIS) or oncology referral"
          ]
        ]
      },
      {
        "heading": "Drugs: dose, duration and side effects",
        "columns": [
          "Drug",
          "Mechanism",
          "Dose and duration",
          "Side effects",
          "How to take"
        ],
        "rows": [
          [
            "Bivalent HPV vaccine (16, 18)",
            "L1 VLPs, neutralising antibody",
            "9-14 y: 2 doses 0 and 6 months (or 1 dose, WHO); 15 and over: 3 doses",
            "Injection pain, fever, syncope",
            "0.5 mL IM deltoid; observe 15 min seated"
          ],
          [
            "Quadrivalent HPV vaccine (6, 11, 16, 18), incl. Cervavac",
            "L1 VLPs; also prevents genital warts",
            "9-14 y: 2 doses 0 and 6 months; 15-26 y: 3 doses 0, 2, 6 months",
            "As above; yeast allergy caution",
            "0.5 mL IM deltoid; defer in pregnancy"
          ],
          [
            "Nonavalent HPV vaccine",
            "L1 VLPs of 9 types",
            "9-14 y: 2 doses; 15 and over or immunocompromised: 3 doses",
            "As above",
            "0.5 mL IM; 3 doses in HIV at any age"
          ],
          [
            "Acetic acid 5%",
            "Coagulates nuclear protein in dysplastic cells",
            "Apply to cervix, read at 1 minute",
            "Mild stinging",
            "Freshly prepared; read in good light"
          ],
          [
            "Lugol iodine",
            "Stains glycogen in normal squamous cells",
            "Apply after VIA for VILI or colposcopy",
            "Burning; avoid in iodine allergy",
            "Mustard-yellow areas are abnormal"
          ],
          [
            "Lidocaine 2% with adrenaline",
            "Local anaesthetic, vasoconstriction",
            "Cervical block about 5-10 mL before LLETZ",
            "Palpitations, tremor",
            "Inject at 3, 6, 9, 12 o'clock into stroma"
          ]
        ]
      }
    ],
    "redFlags": [
      "Postcoital bleeding at any age - examine and biopsy; this is not a screening situation.",
      "A visible growth, ulcer or friable contact-bleeding cervix - biopsy and refer to gynae-oncology; do not screen.",
      "Foul, blood-stained watery discharge in a perimenopausal or postmenopausal woman.",
      "Postmenopausal bleeding - investigate endometrium and cervix; VIA is not valid.",
      "Backache or sciatic pain with unilateral leg oedema or hydronephrosis - parametrial or sidewall spread.",
      "A screen-positive woman who has not been treated - failure to close the loop is itself the emergency."
    ],
    "pearls": [
      "Persistent high-risk HPV is a necessary cause of cervical cancer; the 10-20 year latency is what screening exploits.",
      "A VIA positive is a dense acetowhite lesion touching the SCJ; acetowhitening elsewhere is metaplasia or inflammation.",
      "The negative predictive value of an HPV test is what buys the 5-10 year interval.",
      "Ablation needs a type 1 transformation zone, lesion under 75% of the ectocervix and no suspicion of invasion; everything else needs LLETZ.",
      "Screen-and-treat in one visit beats a multi-visit pathway where 40-60% of women do not return.",
      "HPV vaccination is prophylactic, never therapeutic, and never cancels screening.",
      "Screening stops at 65 after two negatives and after total hysterectomy for benign disease, but continues after subtotal hysterectomy.",
      "Women living with HIV: screen from 25 every 3-5 years and vaccinate with 3 doses."
    ],
    "references": [
      "WHO. Guideline for screening and treatment of cervical pre-cancer lesions for cervical cancer prevention, 2nd edition, 2021.",
      "WHO. Global strategy to accelerate the elimination of cervical cancer, 2020.",
      "WHO. Human papillomavirus vaccines: WHO position paper, December 2022.",
      "MoHFW. Operational framework for management of common cancers, 2016, and NP-NCD population-based screening guidelines, 2023.",
      "ASCCP Risk-Based Management Consensus Guidelines, 2019.",
      "FOGSI Good Clinical Practice Recommendations on cervical cancer screening and HPV vaccination, 2019.",
      "Sankaranarayanan R et al. HPV screening for cervical cancer in rural India. NEJM 2009; Shastri SS et al. JNCI 2014."
    ]
  },
  "gynaecology-menopause-hormone-therapy": {
    oneLiner:
      "**Menopause** is permanent cessation of menstruation from **loss of ovarian follicles**, diagnosed clinically after **12 months of amenorrhoea** (mean age **46-47 years in India**); vasomotor symptoms come from **KNDy-neuron (neurokinin B) overactivity** narrowing the thermoneutral zone, and **menopausal hormone therapy (MHT)** - oestrogen, plus a progestogen if the uterus is present, preferably **transdermal** - is the most effective treatment when started **under 60 or within 10 years of menopause**, with non-hormonal drugs, local vaginal oestrogen and bone protection for the rest.",
    sections: [
      {
        heading: "Definition and the classification that matters",
        points: [
          "**Menopause** is the permanent cessation of menstruation from loss of ovarian follicular activity - a **retrospective clinical diagnosis after 12 consecutive months of amenorrhoea** with no other cause; no single blood test makes it. [NICE NG23 2024]",
          "The **mean age at menopause in Indian women is 46-47 years**, about 4-5 years earlier than the Western 51, and each woman then lives about 30 years in an oestrogen-deficient state. [IMS 2020]",
          "**Perimenopause (menopausal transition)** begins with the first persistent change in cycle length and ends 12 months after the final period; the **climacteric** is the broader phase of declining ovarian function. [IMS 2020]",
          "The staging an examiner expects is **STRAW+10 (2012)** - reproductive, menopausal transition (early -2, late -1) and postmenopause - defined by **cycle pattern, then FSH and AMH** (table below). [STRAW+10 2012]",
          "**Premature ovarian insufficiency (POI)** is menopause **before 40 years** (about 1%); **early menopause is 40-45 years** - both need hormone replacement **until about 51**. [NICE NG23 2024]",
          "**Causes of POI**: idiopathic (largest group), chromosomal (**Turner, fragile X premutation**), autoimmune (thyroid, adrenal), and iatrogenic (bilateral oophorectomy, chemotherapy, pelvic radiotherapy). [NICE NG23 2024]",
          "**Induced (surgical) menopause** after bilateral oophorectomy is abrupt, with more severe vasomotor symptoms and steeper bone loss; smoking advances menopause by about **2 years** and hysterectomy alone by **1-4 years**. [IMS 2020]",
          "**Severity** can be graded with the **Menopause Rating Scale** (11 items, 0-44): 0-4 none, 5-8 mild, 9-16 moderate, 17 or more severe - moderate or severe symptoms usually justify MHT if eligible. [IMS 2020]",
        ],
      },
      {
        heading: "Pathophysiology and pathoanatomy",
        points: [
          "**Follicle depletion** is the primary event: about 1-2 million follicles at birth fall to about **1000 at menopause** by atresia, and AMH (from small follicles) falls years before the cycle changes. [IMS 2020]",
          "**Inhibin B falls first**, releasing FSH from negative feedback, so a **rising FSH with preserved or even high oestradiol** is the earliest change - oestradiol swings wildly in the transition, which is why a single FSH misleads. [IMS 2020]",
          "**Anovulatory cycles** in the transition give unopposed oestrogen without progesterone, causing **heavy, irregular bleeding** and endometrial hyperplasia risk - any such bleeding needs assessment. [Shaw 18e]",
          "**After menopause** the main oestrogen is **oestrone**, made by aromatase in adipose tissue from adrenal androstenedione - so obese women flush less but have more endometrial cancer. [IMS 2020]",
          "**Hot flushes - mechanism**: oestrogen withdrawal causes hypertrophy and overactivity of **KNDy neurons (kisspeptin, neurokinin B, dynorphin)** in the arcuate nucleus; neurokinin B acts on **NK3 receptors** in the preoptic thermoregulatory centre and narrows the **thermoneutral zone**. [NAMS 2023]",
          "**Flush sequence**: a tiny rise in core temperature crosses the lowered sweating threshold, triggering **peripheral vasodilation, sweating and tachycardia**, then chills - this is why **NK3 antagonists (fezolinetant)** and serotonin/noradrenaline drugs (SSRIs, SNRIs) reduce flushes. [NAMS 2023]",
          "**Vasomotor symptoms** affect about **75%** of women and last a **median of 7.4 years** (SWAN), over 10 years in a third; night sweats fragment sleep, causing fatigue, poor concentration and irritability. [NAMS 2022]",
          "**Genitourinary syndrome of menopause (GSM)**: the vagina, vulva, urethra and trigone are rich in oestrogen receptors; loss of oestrogen thins the epithelium, removes **glycogen** so lactobacilli fall and **pH rises above 4.5**, causing dryness, dyspareunia, urgency and **recurrent UTI** - and unlike flushes it **progresses**. [IMS 2020]",
          "**Bone**: oestrogen normally lowers **RANKL** and raises osteoprotegerin; its loss frees osteoclasts, so trabecular bone falls **2-5% a year for 5-7 years** (about 20% in a decade), causing vertebral, wrist and hip fractures. [IMS 2020]",
          "**How bone drugs map on**: **bisphosphonates** bind bone mineral and inhibit farnesyl pyrophosphate synthase in osteoclasts, **denosumab** blocks RANKL, oestrogen restores RANKL restraint, and **teriparatide** (intermittent PTH) builds new bone. [Harrison 22e]",
          "**Cardiometabolic change**: LDL and lipoprotein(a) rise, HDL falls, fat moves to the abdomen, insulin resistance and BP rise, and loss of oestrogen's endothelial nitric oxide effect narrows the female advantage in coronary disease. [IMS 2020]",
          "**Timing hypothesis**: on healthy endothelium oestrogen is neutral or protective, but over established atheroma it promotes plaque inflammation and thrombosis - explaining why the WHI (mean age 63) showed harm while women under 60 do not. [WHI 2017]",
          "**Oral versus transdermal**: oral oestrogen passes through the liver first and raises **clotting factors, SHBG, triglycerides, CRP and bile lithogenicity**, roughly doubling VTE and increasing gallstones; transdermal oestradiol bypasses this and does not raise VTE risk at standard doses. [NICE NG23 2024]",
          "**Why a progestogen is needed with a uterus**: unopposed oestrogen drives endometrial proliferation to **hyperplasia and carcinoma**; progestogen converts the endometrium to secretory and down-regulates oestrogen receptors. [Shaw 18e]",
          "**Breast risk comes mainly from the progestogen**: combined MHT promotes proliferation of breast epithelium (about **1 extra cancer per 1000 women per year beyond 5 years**), while oestrogen alone did not increase it in the WHI; the excess fades after stopping. [NICE NG23 2024]",
          "**Indian context**: women often present with **somatic symptoms** (body aches, burning feet, fatigue, palpitations) and start with **vitamin D deficiency, calcium intake under 400 mg a day and sarcopenia**, so bone loss begins from a deficit. [IMS 2020]",
        ],
      },
      {
        heading: "History in the OPD",
        points: [
          "Ask **age, last menstrual period and the pattern of cycle change** - in a woman over 45 with typical symptoms and changing cycles the diagnosis is clinical. [NICE NG23 2024]",
          "Ask about **flushes and night sweats** (frequency, severity, sleep), **mood, anxiety and concentration**, **joint and muscle aches** and **palpitations** - Indian women often lead with somatic complaints. [IMS 2020]",
          "Ask directly about **vaginal dryness, dyspareunia, urgency and recurrent UTI** - GSM is rarely volunteered and progresses without treatment. [IMS 2020]",
          "Ask about **libido and the relationship** - low desire, dyspareunia and relationship or cultural factors each need different treatment. [IMS 2020]",
          "Ask about **any bleeding after 12 months of amenorrhoea** or heavy, prolonged or intermenstrual bleeding - this needs endometrial assessment before any hormone therapy. [NICE NG23 2024]",
          "**MHT suitability history**: personal or family **breast, endometrial or ovarian cancer**, **VTE**, stroke or ischaemic heart disease, **migraine with aura**, liver disease, gallstones, smoking, hypertension and obesity. [NICE NG23 2024]",
          "Ask about **drugs that cause flushing** - tamoxifen, aromatase inhibitors, GnRH analogues - and about **tamoxifen** specifically before choosing an SSRI (CYP2D6). [NAMS 2023]",
          "**Bone risk history**: previous low-trauma fracture, parental hip fracture, steroids (prednisolone 5 mg or more for 3 months), low BMI, smoking, alcohol, early menopause, rheumatoid arthritis and falls. [IMS 2020]",
          "Ask **contraception** - MHT is not a contraceptive; contraception is needed for **12 months after the last period if over 50, 24 months if under 50**. [NICE NG23 2024]",
          "Screen **mood** (PHQ-9) - depression risk rises in the transition, especially with past depression or premenstrual dysphoria. [NAMS 2022]",
          "Ask about **symptoms that mimic menopause**: weight loss, heat intolerance and tremor (thyrotoxicosis), fever and cough (TB), episodic headache with palpitations and hypertension (phaeochromocytoma), diarrhoea with flushing (carcinoid). [IMS 2020]",
          "Ask the woman's **expectations and fears about hormones** - most refusals come from fear of cancer, and an explained absolute risk changes decisions. [IMS 2020]",
        ],
      },
      {
        heading: "Examination",
        points: [
          "**Weight, height (height loss over 4 cm suggests vertebral fracture), BMI, waist and BP** - cardiovascular risk rises after menopause. [IMS 2020]",
          "**Thyroid and pulse** - goitre, tremor and tachycardia point to thyroid disease rather than menopause. [IMS 2020]",
          "**Breast examination** before starting MHT - a lump, skin dimpling or nipple change needs triple assessment first. [IMS 2020]",
          "**Pelvic examination**: pale, thin, dry vaginal mucosa with loss of rugae, petechiae and a narrowed introitus (GSM); also look for **prolapse** and urethral caruncle. [Shaw 18e]",
          "**Speculum and cervical screening** if due - hormone therapy must not be started over a missed cancer. [IMS 2020]",
          "**Kyphosis, spinal tenderness and gait or balance problems** - signs of vertebral fracture and fall risk. [IMS 2020]",
          "**Pelvic or abdominal mass** - ovarian tumours rise with age, and an enlarged uterus with bleeding needs imaging. [Shaw 18e]",
        ],
      },
      {
        heading: "Minimal investigations",
        points: [
          "**Over 45 with typical symptoms - no FSH**; ordering FSH here is wasteful and misleading. [NICE NG23 2024]",
          "**FSH only** in a woman **40-45** with symptoms and cycle change, when POI is suspected under 40 (**two values above 25 IU/L, 4-6 weeks apart**), or when the menstrual marker is absent (hysterectomy, progestogen-only method). [NICE NG23 2024]",
          "**Exclude pregnancy** in a perimenopausal woman with amenorrhoea. [IMS 2020]",
          "**Baseline panel**: Hb, fasting glucose or HbA1c, lipids, **TSH**, serum calcium and vitamin D where deficiency is likely - for cardiovascular risk and mimics. [IMS 2020]",
          "**POI work-up**: karyotype, **FMR1 premutation**, thyroid and adrenal antibodies, and DXA. [NICE NG23 2024]",
          "**DXA** at spine and hip for women with risk factors, early menopause or a high **FRAX** score; osteoporosis is a **T score of -2.5 or below**. [IMS 2020]",
          "**Transvaginal ultrasound** for postmenopausal bleeding: endometrial thickness **over 4 mm** needs sampling (hysteroscopy or pipelle). [NICE NG12 2023]",
          "**Mammography** according to national screening age and risk, not as a routine precondition for MHT in a woman with a normal breast examination. [IMS 2020]",
          "**Do not order** oestradiol, LH, progesterone or AMH to diagnose menopause over 45, or routine thrombophilia screens before MHT. [NICE NG23 2024]",
        ],
      },
      {
        heading: "Treatment - general measures",
        points: [
          "**Explain the menopause** as a normal life stage with real, treatable symptoms, and give the absolute risks and benefits of each option in numbers. [NICE NG23 2024]",
          "**Lifestyle for every woman**: weight control, **150 minutes of moderate exercise a week with resistance and weight-bearing work**, stop smoking, limit alcohol and caffeine. [IMS 2020]",
          "**Flush triggers**: layered cotton clothing, a cool bedroom, cold drinks, and avoiding hot spicy food, alcohol and stress. [IMS 2020]",
          "**Cognitive behavioural therapy** reduces the bother of flushes, low mood and anxiety and has no interactions - offer it alongside or instead of drugs. [NICE NG23 2024]",
          "**Diet**: **calcium 1000-1200 mg a day** (milk, curd, paneer, ragi, sesame, green leafy vegetables) and protein for muscle. [IMS 2020]",
          "**Vaginal moisturisers** (2-3 times a week) and **lubricants** at intercourse are first-line for mild GSM and safe after any cancer. [NAMS 2022]",
          "**Pelvic floor exercises** for stress incontinence and prolapse symptoms. [Shaw 18e]",
          "**Fall prevention**: vision correction, home safety, balance training and review of sedatives - most fractures follow a fall. [IMS 2020]",
          "**Phytoestrogens and black cohosh** have inconsistent evidence, variable potency and rare hepatotoxicity (black cohosh) - say so plainly. [NICE NG23 2024]",
        ],
      },
      {
        heading: "Treatment - drugs",
        points: [
          "**MHT indications**: moderate-severe vasomotor symptoms, **POI and early menopause** (replacement until about 51), GSM (local oestrogen), and bone protection in a symptomatic woman under 60; MHT is **not** started to prevent heart disease or dementia. [NICE NG23 2024]",
          "**Window of opportunity**: start systemic MHT **under 60 or within 10 years of menopause**; there is **no fixed 5-year limit** - review yearly and continue at the lowest effective dose while benefits outweigh risks. [NAMS 2022]",
          "**Choose the regimen by two questions - uterus present, and time since last period**: hysterectomy - oestrogen alone; uterus and within 12 months of last period - **sequential combined**; over 12 months - **continuous combined** (table below). [NICE NG23 2024]",
          "**Transdermal oestradiol** (preferred in obesity, migraine, hypertension, high triglycerides, gallstones, smokers and VTE risk): **patch 25-50 microgram/24 h changed twice weekly**, or **gel 0.75-1.5 mg (1-2 pumps) once daily**. [NICE NG23 2024]",
          "**Oral oestrogen**: **oestradiol valerate 1-2 mg once daily** or conjugated equine oestrogen 0.3-0.625 mg - start low; flushes settle in 2-4 weeks, full effect by 3 months. [Shaw 18e]",
          "**Oestrogen side effects**: breast tenderness, nausea, leg cramps and headache in the first 3 months (usually settle); serious - **VTE (oral), stroke (oral, over 60), gallbladder disease**. [NICE NG23 2024]",
          "**Micronised progesterone** (preferred progestogen - metabolically neutral, least breast and clot signal): **100 mg every night continuously**, or **200 mg every night for 12-14 days each month** sequentially - take **at bedtime** because it causes drowsiness. [NAMS 2022]",
          "**Dydrogesterone** is an alternative: **10 mg daily for 14 days a month** (sequential) or **5 mg daily** continuous; side effects are bloating, mood change and breast tenderness. [IMS 2020]",
          "**LNG-IUS 52 mg** gives endometrial protection for **5 years** with contraception - ideal for the perimenopausal woman still needing contraception. [NICE NG23 2024]",
          "**Tibolone 2.5 mg once daily** (synthetic steroid with oestrogenic, progestogenic and androgenic metabolites) is bleed-free once over 12 months postmenopausal and helps flushes, libido and bone, but raises **stroke risk over 60** and breast cancer recurrence. [NICE NG23 2024]",
          "**Bleeding on MHT**: irregular bleeding is common in the first **3-6 months** of continuous combined therapy; bleeding beyond 6 months, or after a bleed-free spell, needs ultrasound and endometrial sampling. [NICE NG23 2024]",
          "**Absolute contraindications to systemic MHT**: **undiagnosed vaginal bleeding, known or suspected breast or other oestrogen-dependent cancer, current or past VTE or thrombophilia, active arterial disease (angina, MI, stroke), active liver disease, untreated endometrial hyperplasia**, porphyria and pregnancy. [Shaw 18e]",
          "**Relative cautions** (migraine with aura, gallstones, hypertension, fibroids, family history of breast cancer) argue for **transdermal oestradiol**, not refusal - reflex refusal is the commonest reason symptomatic Indian women go untreated. [NICE NG23 2024]",
          "**POI**: oestrogen in **higher replacement doses** (for example oestradiol 2-4 mg orally or 75-100 microgram patch) plus progestogen, or a **combined pill** if contraception is needed, continued **until at least 51**. [NICE NG23 2024]",
          "**Local vaginal oestrogen for GSM**: **estriol cream 0.5 mg or oestradiol 10 microgram vaginal tablet daily for 2 weeks, then twice weekly**; no progestogen needed, can be continued indefinitely, and may be used in many breast cancer survivors with oncology agreement. [NICE NG23 2024]",
          "**Fezolinetant** (NK3 receptor antagonist - blocks neurokinin B at the thermoregulatory centre): **45 mg once daily** reduces flushes within a week; check **LFT at baseline and monthly for 3 months** (rare liver injury); limited availability in India. [NAMS 2023]",
          "**SSRIs and SNRIs** cut flushes by 40-60%: **venlafaxine 37.5-75 mg daily** or **escitalopram 10-20 mg daily** (both safe with tamoxifen); **paroxetine 7.5-10 mg** works but **must be avoided with tamoxifen** (CYP2D6 inhibition blocks endoxifen). [NAMS 2023]",
          "**Gabapentin 300 mg at night, up to 900 mg**, helps night sweats and sleep; side effects are dizziness and drowsiness; **clonidine 50-75 microgram twice daily** is modest, with dry mouth and rebound hypertension. [NAMS 2023]",
          "**Calcium 500 mg once or twice daily with meals** (to reach 1000-1200 mg total with diet) and **vitamin D3 800-1000 IU daily** (or 60,000 IU weekly for 8 weeks if deficient) for every postmenopausal woman at bone risk. [IMS 2020]",
          "**Alendronate 70 mg once weekly** for osteoporosis: take **on waking with a full glass of plain water, on an empty stomach, stay upright and fast for 30 minutes**; side effects are oesophagitis and, rarely, osteonecrosis of the jaw and atypical femoral fracture - review for a drug holiday after **5 years**. [IMS 2020]",
          "**Zoledronic acid 5 mg IV once yearly** for those who cannot take oral bisphosphonates (check creatinine clearance over 35 and vitamin D first; flu-like reaction after the first dose); **denosumab 60 mg SC 6-monthly** must not be stopped without switching to a bisphosphonate (rebound fractures). [IMS 2020]",
          "**Low libido despite adequate MHT**: specialist may consider **transdermal testosterone** (about 5 mg a day of a 1% gel, off-label) with testosterone levels checked at 3-6 weeks. [NICE NG23 2024]",
        ],
      },
      {
        heading: "Devices and how to use them",
        points: [
          "**Oestradiol patch - steps**: 1) apply to clean, dry, hairless skin **below the waist** (buttock or lower abdomen); 2) press firmly for 10 seconds; 3) change **twice weekly on the same days**; 4) rotate sites; 5) never on the breasts. [Shaw 18e]",
          "**Patch errors**: applying after lotion or oil (falls off), using the same site (irritation), cutting patches; if a patch falls off, apply a new one and keep the usual change day. [Shaw 18e]",
          "**Oestradiol gel - steps**: 1) pump the prescribed dose onto clean, dry skin of the **outer arm or inner thigh**; 2) spread thinly; 3) let it dry 2-5 minutes; 4) wash hands; 5) do not bathe the area for 1 hour and avoid skin contact with children. [Shaw 18e]",
          "**Vaginal oestrogen tablet or cream - steps**: 1) empty bladder and wash hands; 2) lie down with knees bent; 3) insert the applicator gently as far as comfortable; 4) press plunger; 5) use **at bedtime** so it stays in place; 6) after 2 weeks reduce to twice weekly. [NICE NG23 2024]",
          "**LNG-IUS** is fitted in the clinic and gives endometrial protection for 5 years; check strings after each period or monthly and report pain, fever or expulsion. [NICE NG23 2024]",
        ],
      },
      {
        heading: "Follow-up, monitoring and when to refer",
        points: [
          "Review **3 months after starting or changing MHT** for symptom response and side effects, then **once a year** - BP, weight, bleeding pattern, breast check and screening due. [NICE NG23 2024]",
          "**Stop MHT by tapering** over 3-6 months rather than abruptly - abrupt withdrawal brings back flushes; local vaginal oestrogen continues as long as needed. [NICE NG23 2024]",
          "**DXA every 2-3 years** on osteoporosis treatment, and reassess fracture risk before any bisphosphonate holiday. [IMS 2020]",
          "**Refer urgently** for postmenopausal bleeding (2-week pathway), unscheduled bleeding beyond 6 months of continuous combined MHT, or a breast lump. [NICE NG12 2023]",
          "**Refer** women with **POI**, those with contraindications who still have severe symptoms, breast cancer survivors with severe GSM or flushes, and uncertain diagnosis. [NICE NG23 2024]",
          "**Stop oestrogen at once** and investigate for calf pain or swelling, chest pain, breathlessness, sudden severe headache, focal neurology or jaundice. [NICE NG23 2024]",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs: dose, duration and side effects",
        columns: ["Drug", "Mechanism", "Dose and duration", "Side effects", "How to take"],
        rows: [
          ["Transdermal oestradiol", "Replaces oestradiol, bypasses liver first pass", "Patch 25-50 microgram/24 h twice weekly, or gel 0.75-1.5 mg daily; review yearly", "Skin irritation, breast tenderness; no VTE excess at standard dose", "Clean dry skin below waist; rotate sites"],
          ["Oestradiol valerate (oral)", "Oestrogen receptor agonist", "1-2 mg once daily; POI 2-4 mg until age 51", "Nausea, breast tenderness, VTE, gallstones, stroke over 60", "Same time daily with food"],
          ["Micronised progesterone", "Converts endometrium to secretory, protects from hyperplasia", "100 mg nightly continuous, or 200 mg nightly 12-14 days a month", "Drowsiness, bloating, mood change", "At bedtime; must be used if uterus present"],
          ["LNG-IUS 52 mg", "Local levonorgestrel suppresses endometrium", "One device for 5 years of endometrial protection", "Spotting in first months, cramps", "Fitted in clinic; check strings monthly"],
          ["Tibolone", "Tissue-selective steroid metabolites", "2.5 mg daily, only over 12 months postmenopause and under 60", "Bleeding, stroke over 60, breast cancer recurrence", "Once daily, any time"],
          ["Vaginal estriol or oestradiol", "Local oestrogen restores epithelium and lactobacilli", "Estriol 0.5 mg or oestradiol 10 microgram daily 2 weeks, then twice weekly, indefinitely", "Local irritation, minimal systemic effect", "Applicator at bedtime; no progestogen needed"],
          ["Fezolinetant", "NK3 receptor antagonist at thermoregulatory centre", "45 mg once daily", "Abdominal pain, insomnia, rare liver injury", "Any time; LFT baseline and monthly for 3 months"],
          ["Venlafaxine", "SNRI - modulates thermoregulatory set point", "37.5 mg daily, up to 75 mg; effect within 2 weeks", "Nausea, insomnia, BP rise, withdrawal symptoms", "Morning with food; taper to stop; safe with tamoxifen"],
          ["Gabapentin", "Alpha2-delta calcium channel ligand", "300 mg at night, up to 900 mg", "Dizziness, drowsiness, weight gain", "At bedtime for night sweats"],
          ["Alendronate", "Inhibits osteoclast farnesyl pyrophosphate synthase", "70 mg once weekly; review after 5 years", "Oesophagitis, rare ONJ and atypical femoral fracture", "On waking, full glass of water, upright and fasting 30 minutes"],
          ["Calcium plus vitamin D3", "Substrate for mineralisation; improves absorption", "Calcium 500-1000 mg plus D3 800-1000 IU daily", "Constipation, rarely stones", "Calcium with meals; separate from iron and levothyroxine"],
        ],
      },
      {
        heading: "Types of MHT regimen by clinical situation",
        columns: ["Clinical situation", "Regimen", "Preferred route or agent", "Key point"],
        rows: [
          ["Uterus present, still bleeding or within 12 months of last period", "Sequential combined - oestrogen daily, progestogen 12-14 days a month", "Transdermal oestradiol with micronised progesterone 200 mg, or LNG-IUS", "Monthly withdrawal bleed; still needs contraception"],
          ["Uterus present, over 12 months since last period", "Continuous combined - oestrogen and progestogen daily", "Oestradiol 1 mg or patch with micronised progesterone 100 mg daily", "Bleed-free; bleeding beyond 6 months needs investigation"],
          ["After hysterectomy", "Oestrogen alone", "Transdermal oestradiol or oestradiol valerate 1-2 mg", "No progestogen unless previous endometriosis"],
          ["GSM alone", "Local vaginal oestrogen", "Estriol 0.5 mg or oestradiol 10 microgram, twice weekly maintenance", "No progestogen; continue indefinitely"],
          ["POI (under 40)", "Full replacement oestrogen plus progestogen, or combined pill", "Higher doses than at 55, continued to at least 51", "Replacement, not optional symptom relief"],
        ],
      },
      {
        heading: "STRAW+10 stages of reproductive ageing",
        columns: ["Stage", "Phase", "Defining criteria"],
        rows: [
          ["-3b, -3a", "Late reproductive", "Regular cycles; subtle change in flow or length; AMH low, FSH variable"],
          ["-2", "Early menopausal transition", "Persistent 7 days or more difference in consecutive cycle lengths"],
          ["-1", "Late menopausal transition", "Amenorrhoea of 60 days or more; FSH over 25 IU/L; vasomotor symptoms likely"],
          ["0", "Final menstrual period", "Confirmed after 12 months of amenorrhoea"],
          ["+1a to +1c", "Early postmenopause (first 6 years)", "FSH rising then stable high; vasomotor symptoms most likely"],
          ["+2", "Late postmenopause", "Genitourinary symptoms increase"],
        ],
      },
    ],
    redFlags: [
      "Any bleeding after 12 months of amenorrhoea, or unscheduled bleeding beyond 6 months of continuous combined MHT - TVS and endometrial sampling.",
      "New breast lump, nipple retraction, bloody discharge or skin dimpling - triple assessment before any MHT.",
      "Calf pain and swelling, pleuritic chest pain or breathlessness on oral MHT - suspected VTE; stop and investigate today.",
      "Sudden severe headache, focal deficit, visual loss or new aura on MHT - stop and assess for stroke or TIA.",
      "Menopausal symptoms with amenorrhoea under 40 - POI; karyotype, fragile X, autoimmune screen and hormone replacement.",
      "Weight loss, fever, night sweats or cough with 'flushes' - exclude TB, lymphoma and thyrotoxicosis.",
      "Height loss over 4 cm or a low-trauma fracture - vertebral fracture and osteoporosis work-up.",
      "Jaundice or raised LFT on fezolinetant - stop the drug.",
    ],
    pearls: [
      "Over 45 with typical symptoms, menopause is clinical - ordering FSH is the error.",
      "The uterus decides the regimen: uterus present means a progestogen; hysterectomy means oestrogen alone.",
      "Transdermal oestradiol does not raise VTE risk - default in obesity, migraine, hypertension and clot risk.",
      "Window of opportunity: under 60 or within 10 years of menopause; no fixed 5-year limit.",
      "Breast risk is mainly from the progestogen - about 1 extra case per 1000 women per year beyond 5 years.",
      "MHT is not contraception - 12 months over 50, 24 months under 50.",
      "POI is replacement, not treatment - continue until at least 51.",
      "GSM never gets better on its own - local oestrogen, no progestogen, indefinitely.",
      "On tamoxifen use venlafaxine or escitalopram, never paroxetine or fluoxetine.",
      "Alendronate: on waking, plain water, upright and fasting for 30 minutes.",
    ],
    references: [
      "NICE NG23 Menopause: identification and management, updated 2024.",
      "Indian Menopause Society clinical practice guidelines on menopause, 2020; FOGSI good clinical practice recommendations on menopause, 2019.",
      "The 2022 hormone therapy position statement of The North American Menopause Society; The 2023 nonhormone therapy position statement of The Menopause Society.",
      "Harlow SD et al. Executive summary of the Stages of Reproductive Aging Workshop + 10 (STRAW+10), 2012.",
      "Manson JE et al. Menopausal hormone therapy and long-term all-cause and cause-specific mortality: WHI randomized trials. JAMA 2017.",
      "NICE NG12 Suspected cancer: recognition and referral, updated 2023.",
      "Shaw's Textbook of Gynaecology, 18th edition; Harrison's Principles of Internal Medicine, 22nd edition.",
    ],
  },
  "gynaecology-uterine-prolapse": {
    oneLiner:
      "**Pelvic organ prolapse** is descent of the anterior or posterior vaginal wall, the uterus and cervix, or the vault **towards or through the introitus**, because a **damaged levator ani** (mostly from childbirth) lets the **cardinal-uterosacral ligaments and endopelvic fascia** take a load they cannot bear; it is staged by **POP-Q** (or Baden-Walker in clinic), treated first with **supervised pelvic floor training, risk-factor control, vaginal oestrogen and a ring pessary**, and surgically by compartment - **hysterectomy alone is not a prolapse operation**.",
    sections: [
      {
        heading: "Definition and the classification that matters",
        points: [
          "**Pelvic organ prolapse (POP)** is the descent of one or more of the anterior vaginal wall, posterior vaginal wall, uterus (cervix) or vaginal vault, **towards or through the introitus**, with symptoms. [IUGA/ICS 2016]",
          "**Describe by compartment**, because the compartment decides the operation: **anterior** (urethrocele in the lower third, cystocele in the upper two-thirds), **apical** (uterine descent, vault prolapse, enterocele) and **posterior** (rectocele, deficient perineum). [IUGA/ICS 2016]",
          "The reference classification is **POP-Q** (ICS 1996, kept in the IUGA/ICS 2016 report): points measured in centimetres from the hymen on **maximum Valsalva**, staged 0-IV by the **leading edge** (table below). [IUGA/ICS 2016]",
          "**POP-Q points**: **Aa and Ap** 3 cm inside the hymen on the anterior and posterior walls (range -3 to +3), **Ba and Bp** the most dependent upper wall points, **C** the cervix or cuff, **D** the posterior fornix, plus **gh** (genital hiatus), **pb** (perineal body) and **tvl** (total vaginal length). [IUGA/ICS 2016]",
          "In clinic the **Baden-Walker halfway system** is acceptable: grade 1 halfway to the hymen, 2 to the hymen, 3 halfway past, 4 maximal descent; Indian wards still use **Shaw's degrees** - first (cervix within vagina), second (cervix at or through introitus), third (**procidentia**). [Shaw 18e]",
          "**Procidentia** is the whole uterus outside the introitus with complete vaginal eversion; it causes **decubitus ulcer, retention and hydronephrosis** and is a surgical problem in a fit woman. [Shaw 18e]",
          "**Cervical elongation** (C to D difference over about 4 cm) is not true uterine descent - the fundus is in place, and it is the indication for a **Manchester repair**. [Te Linde 12e]",
          "Prolapse is common - lifetime risk of surgery for prolapse or incontinence is **12-20%**, and in India it presents about a decade earlier because of high parity, short birth intervals, unattended births and early return to heavy work. [Te Linde 12e]",
        ],
      },
      {
        heading: "Pathophysiology and pathoanatomy",
        points: [
          "**The levator ani carries the load**: pubococcygeus (pubovaginalis, pubourethralis), puborectalis and iliococcygeus, with coccygeus, form the pelvic diaphragm; tonic contraction keeps the **levator plate horizontal and the genital hiatus closed**. [Te Linde 12e]",
          "**Ship and slipway**: the upper vagina rests on the horizontal levator plate, so a rise in abdominal pressure presses it against the plate instead of pushing it out - the ligaments are **moorings, the levator plate is the berth**. [Te Linde 12e]",
          "**Muscle fails before ligament**: childbirth tears or denervates the levator (nerve to levator ani **S3-S4**, pudendal nerve), the plate sags and the hiatus widens (**gh 4 cm or more** predicts prolapse and recurrence), and the ligaments then stretch and give way. [Te Linde 12e]",
          "**Classical supports** - primary muscular (levator ani, perineal body, perineal membrane), **ligamentous** (cardinal, uterosacral, pubocervical and rectovaginal fascia) and **weak or secondary** (round and broad ligaments, peritoneal folds). [Shaw 18e]",
          "**Cardinal (Mackenrodt) ligament** runs from the lateral supravaginal cervix to the side wall - the **strongest single mechanical support**; it carries the uterine vessels and, above, the ureter. [Shaw 18e]",
          "**Uterosacral ligament** pulls the cervix **backwards and upwards** over the levator plate, keeping the uterus anteverted - an **anteverted uterus acts as a flap valve** against abdominal pressure. [Shaw 18e]",
          "**Round and broad ligaments are not supports**: the round ligament only maintains anteversion (ventrosuspension never cured prolapse), and the broad ligament is a peritoneal fold - naming either as a support loses the mark. [Shaw 18e]",
          "**DeLancey Level I** (apical suspension by the cardinal-uterosacral complex) - failure gives **uterine or vault descent and enterocele**; a repair that ignores the apex fails because Level I failure drags both walls down. [Te Linde 12e]",
          "**DeLancey Level II** (lateral attachment of mid-vagina via pubocervical and rectovaginal fascia to the **arcus tendineus fasciae pelvis**, the white line) - failure gives **cystocele** (central stretch or paravaginal avulsion) and **rectocele**. [Te Linde 12e]",
          "**DeLancey Level III** (fusion of the distal vagina to the **perineal body**, perineal membrane and levator) - failure gives urethrocele, a deficient perineum and a gaping introitus; an unrepaired perineal tear is the common Indian cause. [Te Linde 12e]",
          "**Obstetric causes**: prolonged second stage, **pushing before full dilatation**, fundal pressure, forceps, big baby, precipitate labour, high parity and short birth intervals stretch the levator and pudendal nerve. [Shaw 18e]",
          "**Raised intra-abdominal pressure** from chronic cough (smoking, COPD, TB), constipation, obesity, ascites, pelvic tumours and **heavy load carrying** repeatedly fatigues the supports - and will undo any repair if not corrected. [Shaw 18e]",
          "**Oestrogen deficiency** after menopause reduces collagen and elastin in the fascia and thins the vaginal epithelium, so prolapse often appears then and tissue quality for surgery is poorer. [Shaw 18e]",
          "**Nulliparous prolapse** points to connective tissue weakness (**Ehlers-Danlos, Marfan, spina bifida occulta**) and typically shows supravaginal cervical elongation - always exclude a mass or ascites pushing from above. [Shaw 18e]",
          "**Urinary effects**: a cystocele forms a dependent pouch with residual urine (frequency, infection); a large cystocele **kinks the urethra**, causing poor stream, need to reduce the bulge to void and retention, and **masks stress incontinence** in a fifth to a third with stage III-IV. [Te Linde 12e]",
          "**Ureteric obstruction in procidentia**: the ureters travel in the descended cardinal ligament and kink at the levator hiatus, causing **hydroureter and hydronephrosis** (up to a third in long-standing cases) - reversible if reduced early. [Shaw 18e]",
          "**Decubitus ulcer** forms on the most dependent exposed part from **friction and venous congestion**; the exposed mucosa keratinises; chronic ulceration can rarely become squamous carcinoma. [Shaw 18e]",
          "**Surgical anatomy**: the ureter passes beneath the uterine artery about **1.5-2 cm lateral to the cervix** ('water under the bridge'), and the pudendal vessels lie just behind the ischial spine - so sacrospinous sutures go **2 cm medial to the spine**. [Te Linde 12e]",
        ],
      },
      {
        heading: "History in the OPD",
        points: [
          "The cardinal symptom is **'something coming down'** - a lump that appears on standing, walking or straining, is worse by evening and **disappears on lying down**. [Shaw 18e]",
          "Ask about **dragging or bearing-down discomfort** and **sacral backache relieved by lying flat** - symptoms correlate poorly with stage, so treat the woman, not the number. [NICE NG123 2019]",
          "**Urinary**: frequency, urgency, **stress incontinence**, poor stream, incomplete emptying, recurrent UTI, and whether she must **push the lump back to void** (large cystocele). [NICE NG123 2019]",
          "**Bowel**: incomplete evacuation, straining and the need to **digitate** (press on the perineum or into the vagina) suggest rectocele; faecal urgency or incontinence suggests a missed sphincter injury. [Te Linde 12e]",
          "**Sexual function**: dyspareunia, loss of sensation, and **whether she wishes to retain coital function** - this decides whether colpocleisis is an option. [NICE NG123 2019]",
          "**Discharge or bleeding** from the exposed mass suggests a decubitus ulcer; **postmenopausal bleeding not explained by an ulcer** needs endometrial assessment. [Shaw 18e]",
          "**Obstetric history**: parity, place of birth, length of labour, instruments, birth weight, perineal tears and repair, and **when she returned to heavy work after delivery**. [Shaw 18e]",
          "**Risk drivers**: occupation and load carrying, squatting work, chronic cough, smoking, constipation, weight gain, menopause and hormone use. [Shaw 18e]",
          "**Previous pelvic surgery** (hysterectomy, prolapse repair, continence surgery) - vault prolapse and recurrence change the operation. [Te Linde 12e]",
          "**Wish for future pregnancy, comorbidity and fitness for anaesthesia** - these, with age and compartments, choose between pessary and the type of surgery. [Shaw 18e]",
          "**Rapid recent onset** with weight loss, abdominal swelling or ascites suggests a pelvic or ovarian tumour pushing from above. [Shaw 18e]",
        ],
      },
      {
        heading: "Examination",
        points: [
          "**General**: anaemia, nutrition, BMI, chest disease (cough), and spine for spina bifida occulta or joint laxity in a young woman. [Shaw 18e]",
          "**Abdomen** for a mass, ascites or palpable bladder - an abdominal cause of descent must be excluded first. [Shaw 18e]",
          "**Dorsal position at rest and on straining or coughing**, then **left lateral with a Sims speculum** - retract one wall to display the opposite compartment; examine **standing** if the findings do not match her symptoms. [IUGA/ICS 2016]",
          "**Grade each compartment** (Baden-Walker at minimum, POP-Q if possible) and estimate **gh, pb and tvl** - a wide hiatus and short perineal body predict recurrence. [NICE NG123 2019]",
          "**Reduce the prolapse and do a cough stress test** - to unmask occult stress incontinence before surgery. [NICE NG123 2019]",
          "**Inspect the cervix and any ulcer**: a clean base with a flat edge is a decubitus ulcer; **rolled edges, induration or friability** need biopsy. [Shaw 18e]",
          "**Cervical length**: a long supravaginal cervix with the fundus in place indicates elongation rather than descent. [Te Linde 12e]",
          "**Bimanual examination** for uterine size, mobility and adnexal masses; **rectovaginal examination** separates a high rectocele from an enterocele (sac above the rectal finger with cough impulse). [Shaw 18e]",
          "**Pelvic floor strength** on the **modified Oxford scale 0-5**, and whether she contracts correctly or bears down instead. [NICE NG123 2019]",
          "**Atrophy**: pale, thin, dry mucosa - treat before a pessary or surgery. [NICE NG123 2019]",
        ],
      },
      {
        heading: "Minimal investigations",
        points: [
          "**Urine dipstick and culture** - infection is common with residual urine and is treatable. [NICE NG123 2019]",
          "**Post-void residual** by bladder scan or catheter - **over about 100 mL** means incomplete emptying. [NICE NG123 2019]",
          "**Hb, blood glucose and serum creatinine** - anaemia from bleeding ulcers and silent obstructive uropathy are easily missed. [Shaw 18e]",
          "**Ultrasound of kidneys and ureters** - mandatory in procidentia or a large residual, to detect hydronephrosis; pelvic ultrasound for masses. [Shaw 18e]",
          "**Cervical screening if due** and **biopsy of any suspicious ulcer** (rolled edge, induration, or not healing in 2-3 weeks of reduction). [Shaw 18e]",
          "**Transvaginal ultrasound and endometrial sampling** for postmenopausal bleeding before surgery - especially before colpocleisis, which makes the uterus inaccessible. [Te Linde 12e]",
          "**Urodynamics are not routine** - only for mixed or complex urinary symptoms, voiding dysfunction, or when continence surgery is planned. [NICE NG123 2019]",
          "**Pre-anaesthetic work-up** (chest X-ray, ECG) as needed in elderly women with chest disease. [Shaw 18e]",
        ],
      },
      {
        heading: "Treatment - general measures",
        points: [
          "**Explain and reassure** - many women fear the lump is cancer; show that it reduces, name it, and say it is common, benign and treatable. [NICE NG123 2019]",
          "**Supervised pelvic floor muscle training (PFMT) is first line for stage I-II** - at least **16 weeks**, which reduced symptoms in the POPPY trial; it will not reverse stage III-IV. [NICE NG123 2019]",
          "**How to teach PFMT**: 'squeeze as if stopping wind and urine, **lift up and in**'; confirm the contraction digitally (not glutei or abdominals), no breath-holding; **8-12 maximal holds of 6-10 seconds, three times a day**, plus fast contractions, continued indefinitely. [NICE NG123 2019]",
          "Teach **the knack** - contract the pelvic floor just before every cough, sneeze or lift; review at 6-8 weeks and refer to a physiotherapist (biofeedback) if she cannot contract. [NICE NG123 2019]",
          "**Reduce the load**: weight loss if BMI is raised, stop smoking, treat chronic cough, avoid straining, and negotiate realistic changes in **heavy lifting** rather than an impossible order to stop work. [NICE NG123 2019]",
          "**Prevention in pregnancy and labour**: no pushing before full dilatation, no fundal pressure, selective episiotomy, correct instrument technique and **anatomical repair of perineal tears** by a trained person. [Shaw 18e]",
          "**Postnatal prevention**: pelvic floor exercises from the puerperium, treat constipation, avoid heavy work for at least **3 months**, and **birth spacing** with contraception. [Shaw 18e]",
          "**Pessary** is offered to women who are unfit for or decline surgery, want more children, are pregnant or postpartum, are awaiting surgery, need an ulcer healed, or want a diagnostic trial. [NICE NG123 2019]",
        ],
      },
      {
        heading: "Treatment - drugs",
        points: [
          "**There is no drug that lifts a prolapse** - drugs treat atrophy, constipation, cough, infection and associated bladder symptoms, and protect the woman around surgery. [NICE NG123 2019]",
          "**Vaginal oestrogen - mechanism**: restores epithelial thickness, glycogen and lactobacilli, improving tissue quality before a pessary or surgery and healing a decubitus ulcer; it does **not** reduce the prolapse. [NICE NG123 2019]",
          "**Vaginal oestrogen - dose**: **estriol cream 0.5 mg (one applicator) or oestradiol 10 microgram vaginal tablet at bedtime for 2 weeks, then twice weekly**; systemic absorption is negligible, so **no progestogen** is needed; discuss with the oncologist after oestrogen-dependent breast cancer. [NICE NG123 2019]",
          "**Decubitus ulcer**: keep the prolapse reduced (pessary, or bed rest with a vaginal pack) with **vaginal oestrogen and saline or glycerine packs**, treat infection, correct anaemia - most heal in **2-3 weeks**; operate only on healed tissue. [Shaw 18e]",
          "**Constipation**: fibre 25-30 g a day and 2 litres of fluid, with **ispaghula husk 3.5 g once or twice daily in a full glass of water** or **lactulose 15 mL twice daily**, or **polyethylene glycol 17 g daily**; avoid straining. [NICE NG123 2019]",
          "**Urinary infection** with residual urine: treat by culture - **nitrofurantoin 100 mg modified-release twice daily for 3 days** (avoid if eGFR under 45) - and correct the residual by reducing the prolapse. [NICE NG109 2018]",
          "**Overactive bladder symptoms** with prolapse: bladder training first; **mirabegron 25-50 mg once daily** (check BP) is preferred in older women over anticholinergics such as **oxybutynin 2.5-5 mg twice daily**, which worsen cognition and constipation. [NICE NG123 2019]",
          "**Chronic cough**: treat the cause - smoking cessation, COPD inhalers, and exclude TB with sputum testing - because each cough loads the pelvic floor. [GOLD 2026]",
          "**Perioperative antibiotics** for vaginal surgery: **cefazolin 2 g IV** (plus metronidazole 500 mg IV for vaginal hysterectomy where local policy advises) within 60 minutes before incision. [ACOG PB 195 2018]",
          "**Thromboprophylaxis** after major pelvic surgery in older or immobile women: **enoxaparin 40 mg SC once daily** from 6-12 hours after surgery until mobile (extended if high risk), with stockings and early mobilisation. [NICE NG89 2018]",
          "**Post-operative pain**: paracetamol 1 g 6-hourly with an NSAID if renal function allows; avoid codeine-heavy regimens that cause constipation and straining. [NICE NG123 2019]",
        ],
      },
      {
        heading: "Devices and how to use them",
        points: [
          "**Ring pessary (with or without support membrane, usually 60-75 mm)** is first choice for stage I-III and needs a reasonably intact perineum; **space-filling pessaries (shelf, Gellhorn, cube, donut)** are for stage III-IV, procidentia and a wide hiatus. [Te Linde 12e]",
          "**Fitting steps**: 1) empty the bladder; 2) estimate size digitally from the **posterior fornix to just behind the symphysis**; 3) fold the lubricated ring and insert it along the posterior wall; 4) open it so it sits **behind the symphysis and in the posterior fornix**; 5) a fingertip should pass between ring and vaginal wall. [Te Linde 12e]",
          "**Check before she leaves**: she must be able to **walk, cough, squat, void and open her bowels** without pain or expulsion; use the largest comfortable size that stays in. [Te Linde 12e]",
          "**Follow-up**: review at 1-2 weeks, then remove, clean and inspect the vagina **every 3-6 months** (or teach self-removal at night); use vaginal oestrogen twice weekly to protect the mucosa. [NICE NG123 2019]",
          "**Common errors and complications**: too small (falls out), too large (pain, retention), no follow-up arranged; complications are discharge, erosion, bleeding, unmasked stress incontinence and, if neglected, **impaction and vesicovaginal or rectovaginal fistula**. [Shaw 18e]",
        ],
      },
      {
        heading: "Surgical management",
        points: [
          "**Choose the operation from six things** - age, desire for children, wish to keep coital function, compartments involved, urinary or uterine pathology, and fitness for anaesthesia - plus her informed preference; up to a third may need a further operation. [NICE NG123 2019]",
          "**Vaginal hysterectomy with pelvic floor repair** is standard once the family is complete, but **hysterectomy alone is not a prolapse operation** - the vault must be re-suspended by **McCall culdoplasty or high uterosacral suspension**, and any enterocele sac excised. [Te Linde 12e]",
          "**Manchester (Fothergill) repair**: cervical amputation, cardinal ligaments shortened and crossed in front of the stump, Sturmdorf sutures, with anterior and posterior repair - for **cervical elongation** in a woman wanting to keep her uterus or unfit for hysterectomy; risks are **cervical stenosis, haematometra, subfertility and cervical incompetence**. [Shaw 18e]",
          "**Anterior colporrhaphy** for a central cystocele and **paravaginal repair** for a lateral (white-line) defect; native anterior repair has the **highest recurrence** of all prolapse operations. [Te Linde 12e]",
          "**Posterior colporrhaphy with perineorrhaphy** for rectocele and deficient perineum - avoid aggressive levator plication, which causes dyspareunia. [Te Linde 12e]",
          "**Sacrospinous fixation (Richter)** of the vault, usually to the right ligament, or **sacrospinous hysteropexy** to conserve the uterus; sutures 2 cm medial to the spine; buttock pain is common and settles in about 6 weeks. [Te Linde 12e]",
          "**Abdominal or laparoscopic sacrocolpopexy** (mesh from vault to the sacral promontory) is the most durable option for vault or recurrent prolapse and preserves vaginal length; risks are presacral bleeding, mesh exposure and bowel obstruction. [NICE NG123 2019]",
          "**Uterus-preserving abdominal slings** - sacrohysteropexy, or the Indian **Purandare cervicopexy, Shirodkar and Khanna slings** using autologous tissue - for young women wanting future pregnancy. [Shaw 18e]",
          "**Colpocleisis** (Le Fort partial, or colpectomy after hysterectomy) for the **frail elderly woman not wishing to retain coital function**: success over 90% under regional or local anaesthesia, but irreversible - exclude cervical and endometrial pathology first. [Te Linde 12e]",
          "**Transvaginal mesh** for vaginal wall prolapse is **restricted to research** (NICE NG123), paused in the UK since 2018 and withdrawn in the US in 2019 because of erosion, chronic pain and dyspareunia; **abdominal sacrocolpopexy mesh and mid-urethral slings are still allowed** - 'mesh is banned' is wrong. [NICE NG123 2019]",
          "**After surgery**: no heavy lifting for **6-12 weeks**, continue PFMT and vaginal oestrogen, and keep treating cough and constipation; native-tissue repairs recur in **10-30% within 5 years**. [NICE NG123 2019]",
        ],
      },
      {
        heading: "Acute presentation and emergency management",
        points: [
          "**Procidentia with urinary retention**: catheterise, reduce the prolapse and hold it with a pessary or pack, check creatinine and renal ultrasound, and refer urgently - obstruction reverses only if relieved early. [NICE NG123 2019]",
          "**Irreducible, incarcerated or congested prolapse**: elevate the foot of the bed, cold compresses and glycerine-magnesium sulphate packs to reduce oedema, then gentle reduction; refer the same day if it will not reduce or looks gangrenous. [Shaw 18e]",
          "**Impacted or embedded pessary** with bleeding, offensive discharge or pain: remove it (with analgesia or under anaesthesia) and assess for fistula. [Shaw 18e]",
        ],
      },
      {
        heading: "Follow-up, monitoring and when to refer",
        points: [
          "**Stage I-II with tolerable symptoms** is managed in family practice: review PFMT at 6-8 weeks and at 16 weeks, and treat drivers. [NICE NG123 2019]",
          "**Pessary users**: review at 1-2 weeks then every 3-6 months - **never fit a pessary without booking follow-up**. [NICE NG123 2019]",
          "**Refer the same day** for procidentia with retention, rising creatinine or hydronephrosis, and for an irreducible or gangrenous prolapse. [NICE NG123 2019]",
          "**Refer urgently** for a suspicious or non-healing ulcer, a suspicious cervical lesion, or postmenopausal bleeding not explained by an ulcer. [NICE NG12 2023]",
          "**Refer routinely** for stage III-IV prolapse, failed conservative treatment, significant urinary or bowel dysfunction, prolapse in a nulliparous or young woman, recurrence after surgery, or any woman who wants an operation. [NICE NG123 2019]",
          "The referral letter should carry **the compartments, the grade, residual urine, renal function and what has been tried**. [NICE NG123 2019]",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs: dose, duration and side effects",
        columns: ["Drug", "Mechanism", "Dose and duration", "Side effects", "How to take"],
        rows: [
          ["Estriol vaginal cream", "Local oestrogen restores epithelium, glycogen and lactobacilli", "0.5 mg at bedtime for 2 weeks, then twice weekly long term", "Local irritation, discharge; negligible systemic effect", "Applicator at bedtime lying down; no progestogen needed"],
          ["Oestradiol vaginal tablet", "As above", "10 microgram daily for 2 weeks, then twice weekly", "Spotting, local irritation", "Insert high in vagina at bedtime"],
          ["Ispaghula husk", "Bulk-forming fibre softens and bulks stool", "3.5 g once or twice daily, long term", "Bloating, wind; obstruction if taken dry", "Stir into a full glass of water and drink at once"],
          ["Lactulose or polyethylene glycol", "Osmotic laxatives retain water in stool", "Lactulose 15 mL twice daily or PEG 17 g daily", "Bloating, cramps; PEG may cause loose stools", "Regular dose; titrate to soft daily stool"],
          ["Mirabegron", "Beta3-agonist relaxes detrusor", "25-50 mg once daily", "Hypertension, palpitations, UTI", "With or without food; check BP"],
          ["Cefazolin (surgical prophylaxis)", "Bactericidal cell-wall inhibitor", "2 g IV single dose within 60 min before incision", "Allergy, rare anaphylaxis", "IV at induction; repeat if surgery over 4 hours"],
          ["Enoxaparin", "Antithrombin-mediated factor Xa inhibition", "40 mg SC daily until mobile, longer if high risk", "Bleeding, bruising", "First dose 6-12 hours after surgery"],
          ["Ring pessary (device)", "Mechanical support of the vaginal apex and walls", "Fitted size 60-75 mm usually; changed or cleaned every 3-6 months", "Discharge, erosion, expulsion, unmasked stress incontinence", "Combine with vaginal oestrogen; never without booked review"],
        ],
      },
      {
        heading: "POP-Q stages with older grading equivalents",
        columns: ["POP-Q stage", "Leading edge", "Older equivalents", "Usual management"],
        rows: [
          ["Stage 0", "No descent; Aa, Ba, Ap, Bp at -3", "Baden-Walker 0", "Reassure; PFMT if continence symptoms"],
          ["Stage I", "More than 1 cm above hymen (below -1)", "Baden-Walker 1; first degree", "Supervised PFMT 16 weeks, lifestyle"],
          ["Stage II", "Within 1 cm of hymen (-1 to +1)", "Baden-Walker 2; second degree", "PFMT, vaginal oestrogen, ring pessary, surgery if persists"],
          ["Stage III", "More than 1 cm below hymen but less than tvl minus 2", "Baden-Walker 3", "Pessary or surgery; heal ulcer; check residual"],
          ["Stage IV", "Complete eversion (tvl minus 2 or beyond)", "Baden-Walker 4; third degree, procidentia", "Reduce, catheter if retained, renal scan, then surgery or colpocleisis"],
        ],
      },
      {
        heading: "Types of prolapse operation and their indications",
        columns: ["Operation", "Best indication", "Main caveat"],
        rows: [
          ["Vaginal hysterectomy, repair and McCall culdoplasty", "Uterovaginal prolapse, family complete", "Must re-suspend the vault or vault prolapse follows"],
          ["Manchester (Fothergill) repair", "Cervical elongation, uterus to be kept, or unfit for hysterectomy", "Cervical stenosis, subfertility, cervical incompetence"],
          ["Sacrospinous fixation or hysteropexy", "Vault prolapse; uterine conservation by vaginal route", "Pudendal injury if lateral; buttock pain; later anterior prolapse"],
          ["Anterior colporrhaphy or paravaginal repair", "Central or lateral cystocele", "Highest recurrence; fails if apex unsupported"],
          ["Posterior colpoperineorrhaphy", "Rectocele with digitation, deficient perineum", "Over-plication causes dyspareunia"],
          ["Sacrocolpopexy or sacrohysteropexy (abdominal mesh)", "Vault or recurrent prolapse, young or sexually active woman", "Most durable but most morbid; mesh exposure"],
          ["Colpocleisis", "Frail elderly, stage III-IV, no wish for coitus", "Irreversible; exclude cervical and endometrial disease first"],
        ],
      },
    ],
    redFlags: [
      "Ulcer on the prolapse with rolled edge, induration, friability, or not healing after 2-3 weeks of reduction - biopsy before any repair.",
      "Procidentia with retention, palpable bladder, large residual, hydronephrosis or rising creatinine - catheterise, reduce and refer urgently.",
      "Irreducible, congested or gangrenous prolapse - same-day gynaecology referral.",
      "Prolapse in a nulliparous or young woman - look for a mass, ascites or connective tissue disorder.",
      "Rapid recent onset with weight loss, distension or ascites - exclude ovarian or abdominal malignancy.",
      "Suspicious cervical lesion, contact bleeding or overdue smear - colposcopy and biopsy before surgery.",
      "Postmenopausal bleeding not explained by an ulcer - endometrial assessment before surgery or colpocleisis.",
      "Offensive discharge, bleeding or pain with an old unchanged pessary - impaction or fistula.",
    ],
    pearls: [
      "The round ligament is not a support - it maintains anteversion; the broad ligament is just peritoneum.",
      "Ligaments are the moorings, the levator plate is the berth - muscle fails before ligament.",
      "DeLancey: Level I apex (uterine, vault, enterocele), Level II mid-vagina (cystocele, rectocele), Level III perineum.",
      "Water under the bridge: ureter under the uterine artery 1.5-2 cm lateral to the cervix.",
      "Hysterectomy alone is not a prolapse operation - always re-suspend the vault.",
      "Reduce the prolapse and make her cough - occult stress incontinence is unmasked in a fifth to a third.",
      "Supervised pelvic floor training for at least 16 weeks is first line for stage I-II.",
      "Vaginal oestrogen treats atrophy and ulcers, not the prolapse.",
      "C minus D over 4 cm means cervical elongation - Manchester repair, not hysterectomy.",
      "Transvaginal mesh is restricted; abdominal sacrocolpopexy mesh and mid-urethral slings are not.",
    ],
    references: [
      "Haylen BT et al. IUGA/ICS joint report on the terminology for female pelvic organ prolapse, 2016.",
      "NICE NG123 Urinary incontinence and pelvic organ prolapse in women: management, 2019; NICE IPG599 Transvaginal mesh repair of anterior or posterior vaginal wall prolapse.",
      "Hagen S et al. Individualised pelvic floor muscle training in women with pelvic organ prolapse (POPPY). Lancet 2014.",
      "Te Linde's Operative Gynecology, 12th edition - pelvic organ prolapse and apical suspension procedures.",
      "Shaw's Textbook of Gynaecology, 18th edition - displacements and prolapse of the uterus and vagina.",
      "NICE NG12 Suspected cancer: recognition and referral, updated 2023; NICE NG89 Venous thromboembolism in over 16s, 2018.",
    ],
  },
  "gynaecology-amenorrhoea-menstrual-irregularity": {
    oneLiner:
      "**Primary amenorrhoea** is no menses by **15 years with normal secondary sexual characters** (or by 13 with none), and **secondary amenorrhoea** is no menses for **3 months after regular or 6 months after irregular cycles**; after **excluding pregnancy**, the cause is found by the **compartment approach** (outflow tract, ovary, pituitary, hypothalamus) using **TSH, prolactin, FSH/LH, oestradiol and pelvic ultrasound**, with **PCOS** the commonest cause of oligomenorrhoea and **genital TB and curettage** important Indian causes of secondary amenorrhoea.",
    sections: [
      {
        heading: "Definition and the classification that matters",
        points: [
          "**Primary amenorrhoea** is no menarche by **15 years with normal growth and secondary sexual characters**, by **13 years with no breast development**, or **3 years after thelarche**. [ACOG CO 651 2015]",
          "**Secondary amenorrhoea** is absence of menses for **3 months** in a woman with previously regular cycles, or **6 months** with previously irregular cycles. [Berek and Novak 16e]",
          "**FIGO 2018 normal cycle**: frequency **24-38 days**, variation of **7-9 days or less**, duration **8 days or less**; cycles over 38 days are **infrequent (oligomenorrhoea)** and fall under the **'O' (ovulatory dysfunction) of PALM-COEIN**. [FIGO 2018]",
          "**Adolescent cycles**: irregularity in the first year after menarche is normal; **1-3 years after menarche**, cycles under 21 or over 45 days are irregular; **over 3 years**, under 21 or over 35 days, or fewer than 8 cycles a year. [PCOS Guideline 2023]",
          "The classification examiners expect is the **compartment approach**: **I outflow tract and uterus, II ovary, III anterior pituitary, IV hypothalamus and CNS**, plus other endocrine causes (PCOS, thyroid, CAH, Cushing) - table below. [Speroff 9e]",
          "**Physiological amenorrhoea** occurs before puberty, in **pregnancy and lactation** and after menopause - **pregnancy is the commonest cause of secondary amenorrhoea**, so a pregnancy test is always the first step. [Berek and Novak 16e]",
          "**Commonest causes of primary amenorrhoea**: **gonadal dysgenesis (40-50%, mostly Turner)**, **Mullerian agenesis (MRKH, about 15%)**, and constitutional delay or hypothalamic causes. [Berek and Novak 16e]",
          "**Commonest pathological causes of secondary amenorrhoea**: **PCOS, functional hypothalamic amenorrhoea, hyperprolactinaemia, POI, thyroid disease** and uterine causes (**Asherman, genital TB**). [Berek and Novak 16e]",
        ],
      },
      {
        heading: "Pathophysiology and pathoanatomy",
        points: [
          "**A period needs four working compartments**: pulsatile **GnRH** from the hypothalamus, **FSH and LH** from the pituitary, an ovary with follicles making oestradiol then progesterone, and a responsive endometrium with a **patent outflow tract**. [Speroff 9e]",
          "**Menstruation is progesterone withdrawal**: oestrogen builds the endometrium, progesterone after ovulation makes it secretory, and the fall in progesterone when the corpus luteum dies causes shedding - which is why a **progestogen challenge** tests both oestrogen status and outflow. [Speroff 9e]",
          "**GnRH pulse frequency decides the output**: slow pulses favour FSH, fast pulses favour LH; **stress (CRH, cortisol), low energy (low leptin, high ghrelin) and opioids** slow or stop the pulse generator, causing **functional hypothalamic amenorrhoea** with low-normal LH/FSH and low oestradiol. [Endocrine Society FHA 2017]",
          "**Low oestrogen states** (FHA, anorexia, POI) remove oestrogen's restraint on osteoclasts, so bone density falls - the reason for DXA after 6 months and for oestrogen replacement. [Endocrine Society FHA 2017]",
          "**PCOS** is driven by **fast GnRH pulses (high LH)** and **insulin resistance**: LH stimulates theca cell androgens, hyperinsulinaemia amplifies them and lowers SHBG (more free testosterone), and androgens arrest follicles at 5-9 mm - giving anovulation, hirsutism and polycystic morphology. [PCOS Guideline 2023]",
          "**Why metformin and weight loss work in PCOS**: lowering insulin reduces ovarian androgen production and raises SHBG, so 5-10% weight loss restores ovulation in many; the **COC** suppresses LH (less androgen) and raises SHBG. [PCOS Guideline 2023]",
          "**Prolactin suppresses kisspeptin and GnRH**, so hyperprolactinaemia causes amenorrhoea and galactorrhoea; dopamine from the hypothalamus normally inhibits prolactin, so **dopamine-blocking drugs (risperidone, haloperidol, metoclopramide, domperidone)** and **stalk compression** raise it, and **dopamine agonists** treat it. [Harrison 22e]",
          "**Primary hypothyroidism** raises TRH, which stimulates prolactin as well as TSH, and alters SHBG and oestrogen clearance - so TSH is a first-line test in every menstrual disorder. [Harrison 22e]",
          "**Ovarian failure** (Turner, POI) removes oestradiol and inhibin feedback, so **FSH rises above 25 IU/L**; in **Turner syndrome (45,X)** follicles undergo accelerated atresia, leaving **streak gonads**. [ESHRE POI 2024]",
          "**MRKH (46,XX)**: failure of the **Mullerian (paramesonephric) ducts** leaves no uterus and no upper two-thirds of the vagina, but the ovaries (from the gonadal ridge) are normal - so breasts and hair are normal; the nearby mesonephric development explains **renal anomalies in 30-40%**. [Berek and Novak 16e]",
          "**Complete androgen insensitivity (46,XY)**: testes make **anti-Mullerian hormone** (so no uterus) and testosterone, but the **androgen receptor** does not work - so no pubic or axillary hair, while testosterone aromatised to oestradiol gives **normal breasts**. [Berek and Novak 16e]",
          "**Swyer syndrome (46,XY gonadal dysgenesis)**: streak gonads make neither AMH nor testosterone, so a **uterus is present** and breasts are absent; the dysgenetic gonad with Y material carries a high risk of **gonadoblastoma**. [Berek and Novak 16e]",
          "**Outflow obstruction**: an **imperforate hymen or transverse septum** traps menstrual blood (**haematocolpos, haematometra**), causing cyclical pain and urinary retention in a girl with normal secondary sexual characters. [Berek and Novak 16e]",
          "**Asherman syndrome**: curettage of the basal layer (especially **postpartum or post-abortal**) or infection (**genital TB**) destroys the regenerative basalis and forms adhesions, so the endometrium cannot respond to hormones. [Berek and Novak 16e]",
          "**Sheehan syndrome**: the pregnancy-enlarged pituitary has a fragile portal blood supply, so **severe PPH with hypotension** infarcts it - lactation fails first (prolactin), then amenorrhoea, hypothyroidism and **adrenal insufficiency**. [Williams 26e]",
          "**Kallmann syndrome**: GnRH neurons fail to migrate from the olfactory placode, giving **hypogonadotropic hypogonadism with anosmia**. [Speroff 9e]",
          "**Non-classic CAH (21-hydroxylase deficiency)**: the cortisol pathway is partly blocked, so 17-hydroxyprogesterone accumulates and is shunted to androgens, mimicking PCOS. [Speroff 9e]",
        ],
      },
      {
        heading: "History in the OPD",
        points: [
          "Ask **age at thelarche and menarche**, cycle pattern and **last menstrual period**, and ask about **sexual activity and contraception** privately - pregnancy is the first diagnosis. [Berek and Novak 16e]",
          "Ask about **weight change, diet, exercise, exam or family stress**, and eating-disorder symptoms (fear of weight gain, vomiting, laxatives) - FHA and anorexia. [Endocrine Society FHA 2017]",
          "Ask about **galactorrhoea, headache and visual disturbance** - pituitary tumour. [Harrison 22e]",
          "Ask about **hirsutism, acne, scalp hair loss and weight gain** (PCOS), and **rapid progression or voice change** (androgen-secreting tumour). [PCOS Guideline 2023]",
          "Ask about **hot flushes and vaginal dryness** - oestrogen deficiency from POI or FHA. [ESHRE POI 2024]",
          "Ask about **cyclical lower abdominal pain and urinary retention** in a girl with no periods - outflow obstruction. [Berek and Novak 16e]",
          "Ask about **previous D&C, MTP, postpartum or post-abortal infection and tuberculosis** (Asherman, genital TB), and **severe PPH with failure of lactation** (Sheehan). [Berek and Novak 16e]",
          "Ask about **drugs** - antipsychotics, antiemetics, opioids, **DMPA**, LNG-IUS, continuous pill - and chemotherapy or pelvic radiotherapy. [Berek and Novak 16e]",
          "Ask about **chronic illness** - CKD, liver disease, uncontrolled diabetes, TB, HIV, coeliac disease - which cause hypogonadotropic amenorrhoea. [Harrison 22e]",
          "Ask **family history** of delayed puberty, early menopause (fragile X), infertility or intellectual disability. [ESHRE POI 2024]",
          "Ask about **shift work, occupational exposures** (solvents, pesticides, lead) and access to toilets and menstrual hygiene at work. [Park 28e]",
          "Ask about **impact and worries** - fertility, body image and identity concerns are often the real reason for the visit. [Berek and Novak 16e]",
        ],
      },
      {
        heading: "Examination",
        points: [
          "**Height, weight, BMI, waist and BP** - BMI under 18.5 suggests FHA; obesity and central fat suggest PCOS; short stature suggests Turner or constitutional delay. [Berek and Novak 16e]",
          "**Tanner staging** of breast and pubic hair - absent breasts mean no oestrogen ever (ovarian or hypothalamic-pituitary failure); normal breasts with no pubic hair mean androgen insensitivity. [Berek and Novak 16e]",
          "**Turner stigmata**: short stature, webbed neck, shield chest with widely spaced nipples, low hairline, cubitus valgus, short fourth metacarpals; check BP in both arms (coarctation). [Turner Guideline 2024]",
          "**Hyperandrogenism**: **modified Ferriman-Gallwey score** (4-6 or more abnormal), acne, **acanthosis nigricans**; **virilisation** (clitoromegaly, deep voice, temporal balding) suggests a tumour. [PCOS Guideline 2023]",
          "**Thyroid** examination and signs of **Cushing syndrome** (striae, proximal myopathy, moon face). [Berek and Novak 16e]",
          "**Visual fields** for bitemporal hemianopia, **sense of smell** (Kallmann) and **expressible galactorrhoea**. [Harrison 22e]",
          "**External genitalia**: a bulging bluish membrane (imperforate hymen), short blind vagina (MRKH, AIS), clitoromegaly, and **inguinal or labial masses** (testes in AIS). [Berek and Novak 16e]",
          "**Speculum or bimanual examination** only if sexually active and consenting; in virgins use transabdominal ultrasound instead. [Berek and Novak 16e]",
          "**Eating-disorder signs**: lanugo, bradycardia, hypotension, hypothermia, parotid swelling and Russell's sign on the knuckles. [Kaplan and Sadock 12e]",
        ],
      },
      {
        heading: "Minimal investigations",
        points: [
          "**Step 1 - urine or serum hCG** in every case, even when she denies sexual activity. [Berek and Novak 16e]",
          "**Step 2 - TSH, prolactin, FSH, LH and oestradiol**, ideally in the early follicular phase if any cycles occur. [Berek and Novak 16e]",
          "**Prolactin over 25 ng/mL**: repeat fasting and unstressed, exclude macroprolactin, hypothyroidism and drugs; **MRI pituitary** if persistently raised without a cause. [Harrison 22e]",
          "**FSH over 25 IU/L with low oestradiol** means ovarian failure: **karyotype** (Turner, Swyer, mosaicism), **FMR1 premutation**, and thyroid and adrenal antibodies. [ESHRE POI 2024]",
          "**Low or normal FSH/LH with low oestradiol** means hypothalamic or pituitary cause: MRI brain if no clear functional cause, or if headache or visual symptoms. [Speroff 9e]",
          "**Pelvic ultrasound** (transabdominal in virgins): presence of uterus, endometrial thickness, haematocolpos, ovarian morphology; **renal ultrasound in MRKH**. [Berek and Novak 16e]",
          "**Hyperandrogenism**: total testosterone (over twice the upper limit suggests a tumour), DHEAS, **early-morning 17-OH progesterone**; in PCOS a **75 g OGTT and lipids**. [PCOS Guideline 2023]",
          "**Progestogen challenge** (MPA 10 mg daily for 7-10 days): withdrawal bleed within 2-7 days means adequate oestrogen and a patent outflow tract; no bleed after **oestrogen plus progestogen** means an outflow or endometrial defect - many clinicians now rely on oestradiol and endometrial thickness instead. [Speroff 9e]",
          "**Suspected Asherman or genital TB**: **hysteroscopy or HSG**, and **premenstrual endometrial biopsy for CBNAAT, culture and histology**. [NTEP 2022]",
          "**DXA** after 6 months or more of hypo-oestrogenic amenorrhoea; **do not order** AMH or ultrasound to diagnose PCOS within 8 years of menarche. [PCOS Guideline 2023]",
        ],
      },
      {
        heading: "Treatment - general measures",
        points: [
          "**Treat the cause**: stop or change the offending drug, levothyroxine for hypothyroidism, hymenotomy for imperforate hymen, weight restoration for FHA. [Berek and Novak 16e]",
          "**PCOS lifestyle first**: **5-10% weight loss**, a healthy diet and at least **150 minutes of moderate exercise a week** restore ovulation in many and reduce diabetes risk. [PCOS Guideline 2023]",
          "**FHA**: restore energy balance (eat more, train less), **CBT for stress**, and treat any eating disorder with a psychiatrist and dietitian; most regain cycles once weight and energy recover. [Endocrine Society FHA 2017]",
          "**Adolescents**: irregular cycles in the first 2 years are usually anovulatory - reassure, keep a **menstrual calendar**, give iron-folic acid and review; heavy bleeding at menarche needs Hb and a screen for **von Willebrand disease**. [Berek and Novak 16e]",
          "**MRKH**: **vaginal dilator therapy (Frank method)** is first line, vaginoplasty if dilators fail, psychological support, and **gestational surrogacy** permitted under the Surrogacy (Regulation) Act 2021. [Berek and Novak 16e]",
          "**Careful disclosure and counselling** in MRKH, Turner and AIS - the diagnosis affects identity, sexuality and fertility; involve the family with her consent. [Berek and Novak 16e]",
          "**Surgery for DSD**: **gonadectomy** in Swyer syndrome (high tumour risk) and after puberty in complete AIS. [Berek and Novak 16e]",
          "**Asherman**: hysteroscopic adhesiolysis followed by oestrogen and second-look hysteroscopy (specialist). [Berek and Novak 16e]",
          "**Programme links**: **RKSK adolescent friendly health clinics**, the **Menstrual Hygiene Scheme** and weekly **WIFS** iron-folic acid for adolescent girls. [MoHFW 2024]",
        ],
      },
      {
        heading: "Treatment - drugs",
        points: [
          "**Endometrial protection in chronic anovulation** (PCOS, oligomenorrhoea): induce a withdrawal bleed at least **every 3 months** with **medroxyprogesterone acetate (MPA) 10 mg daily for 12-14 days**, or use a COC or LNG-IUS, to prevent hyperplasia. [PCOS Guideline 2023]",
          "**Combined oral contraceptive** (ethinylestradiol 20-30 microgram with levonorgestrel or desogestrel) for PCOS cycle control and hirsutism: suppresses LH and ovarian androgen and raises SHBG; **one tablet daily at the same time, 21/7 or 24/4**; hirsutism improves only after **6 months**. [PCOS Guideline 2023]",
          "**COC cautions**: check BP and BMI and exclude migraine with aura, smoking over 35, VTE history and uncontrolled hypertension (UKMEC/WHO MEC 4); warn about nausea, breakthrough bleeding and the rare VTE. [WHO MEC 2015]",
          "**Metformin** (lowers hepatic glucose output and insulin): **500 mg once daily with the evening meal, increase by 500 mg weekly to 1500-2000 mg/day** for PCOS with BMI 25 or more or metabolic features; side effects are GI upset (use extended-release) and **B12 deficiency** with long use. [PCOS Guideline 2023]",
          "**Spironolactone 50-100 mg daily** (androgen receptor blocker) may be added for hirsutism after 6 months of COC - only with **reliable contraception** (feminises a male fetus); check potassium. [PCOS Guideline 2023]",
          "**Cabergoline** (long-acting dopamine D2 agonist) for prolactinoma: **0.25 mg twice weekly, increased to 0.5-1 mg twice weekly** by prolactin; take **with food at bedtime** to reduce nausea and dizziness; continue at least 2 years then review; echo if high doses are used long term (valvulopathy). [Harrison 22e]",
          "**Bromocriptine** (D2 agonist): **1.25 mg at night with food, increased to 2.5 mg two or three times daily** - preferred when pregnancy is planned; side effects are nausea, postural hypotension and nasal stuffiness. [Harrison 22e]",
          "**Letrozole** (aromatase inhibitor - lowers oestrogen so FSH rises and a follicle grows) for PCOS infertility: **2.5 mg daily on days 3-7**, increased to 5-7.5 mg if no ovulation, up to **6 ovulatory cycles** with follicle tracking - first line ahead of clomiphene. [PCOS Guideline 2023]",
          "**POI and Turner HRT**: **oestradiol 2 mg orally or 100 microgram transdermal daily with cyclic progestogen** (MPA 10 mg or micronised progesterone 200 mg for 12-14 days a month), **continued to about 51 years** for bone, heart and brain; a COC is an alternative if contraception is wanted. [ESHRE POI 2024]",
          "**Puberty induction (Turner, hypogonadism)**: start **low-dose transdermal oestradiol (about 3-7 microgram/day, a quarter of a 25 microgram patch) from 11-12 years**, increase over 2-3 years, and add progestogen after breakthrough bleeding or 2 years; growth hormone is given earlier in Turner. [Turner Guideline 2024]",
          "**FHA lasting over 6 months with low bone density**: **transdermal oestradiol 100 microgram/day with cyclic oral progestogen**, not a COC (ethinylestradiol suppresses IGF-1 and protects bone less). [Endocrine Society FHA 2017]",
          "**Levothyroxine** for hypothyroidism: **1.6 microgram/kg/day** (lower start, 25-50 microgram, in the elderly or cardiac patients), on an empty stomach 30-60 minutes before breakfast; recheck TSH in 6 weeks. [Harrison 22e]",
          "**Genital TB**: **2HRZE/4HRE** daily fixed-dose combination by weight band for 6 months under NTEP, with pyridoxine; tubal and endometrial damage may persist despite cure. [NTEP 2022]",
          "**Calcium 1000 mg and vitamin D3 800-1000 IU daily** in hypo-oestrogenic amenorrhoea to support bone. [Endocrine Society FHA 2017]",
        ],
      },
      {
        heading: "Follow-up, monitoring and when to refer",
        points: [
          "Review **PCOS** every 6-12 months: weight, BP, cycle pattern, mood, and **OGTT every 1-3 years** with lipids; ensure a bleed at least every 3 months. [PCOS Guideline 2023]",
          "**Hyperprolactinaemia**: prolactin 1 month after each dose change, visual fields and MRI for macroadenoma; stop cabergoline once pregnant unless a macroadenoma needs it. [Harrison 22e]",
          "**POI and Turner**: annual review of HRT adherence, BP, lipids, thyroid; **DXA every 3-5 years**; Turner needs lifelong cardiac (aortic dilatation), renal, hearing and thyroid follow-up. [ESHRE POI 2024]",
          "**FHA**: track weight and energy intake, cycle return, and DXA after 12 months if amenorrhoea persists. [Endocrine Society FHA 2017]",
          "**Refer all primary amenorrhoea** after initial work-up, and refer **suspected pituitary tumour, POI, virilisation, DSD, Asherman or genital TB**, and infertility. [Berek and Novak 16e]",
          "**Refer urgently** for severe anorexia (**BMI under 15, pulse under 40, syncope, electrolyte disturbance**), visual field loss, or haematocolpos with retention. [Kaplan and Sadock 12e]",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs: dose, duration and side effects",
        columns: ["Drug", "Mechanism", "Dose and duration", "Side effects", "How to take"],
        rows: [
          ["Medroxyprogesterone acetate", "Progestogen - secretory change then withdrawal bleed", "10 mg daily for 7-10 days (challenge) or 12-14 days every 1-3 months", "Bloating, mood change, breast tenderness", "Once daily; bleed expected 2-7 days after stopping"],
          ["Combined oral contraceptive", "Suppresses LH and ovarian androgen, raises SHBG", "EE 20-30 microgram with LNG or desogestrel, 21/7 or 24/4, long term", "Nausea, spotting, BP rise, rare VTE", "Same time daily; check MEC criteria first"],
          ["Metformin", "Lowers hepatic glucose output and insulin, reduces ovarian androgen", "500 mg daily, increase weekly to 1500-2000 mg/day", "GI upset, B12 deficiency, lactic acidosis (rare)", "With meals; extended-release if GI upset"],
          ["Cabergoline", "Long-acting dopamine D2 agonist", "0.25-1 mg twice weekly, at least 2 years", "Nausea, dizziness, valvulopathy at high dose", "With food at bedtime"],
          ["Bromocriptine", "Dopamine D2 agonist", "1.25 mg at night, up to 2.5 mg two or three times daily", "Nausea, postural hypotension, nasal stuffiness", "With food; preferred if pregnancy planned"],
          ["Letrozole", "Aromatase inhibitor - raises FSH by lowering oestrogen", "2.5-7.5 mg daily on days 3-7, up to 6 cycles", "Hot flushes, headache, multiple pregnancy (low)", "With follicle tracking; timed intercourse"],
          ["Oestradiol (HRT for POI or Turner)", "Replaces ovarian oestradiol", "2 mg oral or 100 microgram patch daily, with cyclic progestogen, to age 51", "Breast tenderness, nausea, VTE (oral)", "Transdermal preferred; never without progestogen if uterus present"],
          ["Spironolactone", "Androgen receptor and 5-alpha reductase blocker", "50-100 mg daily added after 6 months of COC", "Hyperkalaemia, irregular bleeding, teratogenic", "Only with reliable contraception; check potassium"],
        ],
      },
      {
        heading: "Compartment classification of amenorrhoea",
        columns: ["Compartment", "Examples", "Key finding"],
        rows: [
          ["I - Outflow tract and uterus", "Imperforate hymen, transverse septum, MRKH, AIS, Asherman, genital TB", "Normal FSH and E2; no bleed after oestrogen-progestogen"],
          ["II - Ovary", "Turner, Swyer, POI, chemotherapy or radiotherapy", "FSH over 25 IU/L, low E2"],
          ["III - Anterior pituitary", "Prolactinoma, Sheehan, pituitary tumour, empty sella", "High prolactin or low FSH/LH; abnormal MRI"],
          ["IV - Hypothalamus and CNS", "Stress, weight loss, exercise, anorexia, Kallmann, craniopharyngioma", "Low or normal FSH/LH, low E2"],
          ["Other endocrine", "PCOS, thyroid disease, non-classic CAH, Cushing", "High LH, androgens, abnormal TSH or 17-OHP"],
        ],
      },
      {
        heading: "Types of primary amenorrhoea: differentiating criteria",
        columns: ["Condition", "Karyotype", "Breasts and pubic hair", "Uterus", "FSH"],
        rows: [
          ["Turner syndrome", "45,X or mosaic", "Absent breasts, sparse hair", "Present, small", "High"],
          ["MRKH", "46,XX", "Normal", "Absent", "Normal"],
          ["Complete AIS", "46,XY", "Normal breasts, absent or scanty hair", "Absent", "Normal or high"],
          ["Swyer syndrome", "46,XY", "Absent breasts, sparse hair", "Present", "High"],
          ["Imperforate hymen", "46,XX", "Normal", "Present, haematometra", "Normal"],
          ["Constitutional delay or Kallmann", "46,XX", "Absent or early", "Present", "Low"],
        ],
      },
    ],
    redFlags: [
      "Headache, visual field loss or galactorrhoea - pituitary tumour.",
      "Rapidly progressive hirsutism, clitoromegaly or deepening voice - androgen-secreting tumour.",
      "Cyclical pelvic pain with urinary retention in a girl with no periods - haematocolpos.",
      "BMI under 15, bradycardia under 40 or syncope - severe anorexia nervosa; admit.",
      "Hot flushes and amenorrhoea before 40 - premature ovarian insufficiency.",
      "Failure of lactation and amenorrhoea after PPH - Sheehan syndrome with adrenal crisis risk.",
      "Amenorrhoea with fever, weight loss or past TB - genital tuberculosis.",
      "Ambiguous genitalia or an inguinal gonad in a girl - disorder of sex development.",
    ],
    pearls: [
      "Every amenorrhoea is pregnancy until proved otherwise - urine hCG first.",
      "First-line tests after hCG: TSH, prolactin, FSH/LH, oestradiol and pelvic ultrasound.",
      "Turner is the commonest cause of primary amenorrhoea; MRKH the commonest with normal breasts and no uterus.",
      "Normal breasts, no pubic hair and a blind vagina - androgen insensitivity; check the karyotype.",
      "Y chromosome with streak gonads (Swyer) - gonadectomy for tumour risk.",
      "In India think of genital TB and curettage when amenorrhoea follows normal periods.",
      "Adolescent PCOS needs both anovulation and hyperandrogenism; no ultrasound within 8 years of menarche.",
      "Chronic anovulation needs a withdrawal bleed at least every 3 months.",
      "POI needs HRT until about 51 - replacement, not treatment of menopause.",
      "In FHA fix energy balance first; use transdermal oestradiol rather than the pill for bone.",
    ],
    references: [
      "ACOG Committee Opinion 651: Menstruation in girls and adolescents - using the menstrual cycle as a vital sign, 2015 (reaffirmed).",
      "Munro MG et al. FIGO classification systems (PALM-COEIN) and terminology for abnormal uterine bleeding, revised 2018.",
      "Teede HJ et al. International evidence-based guideline for the assessment and management of polycystic ovary syndrome, 2023.",
      "ESHRE guideline: Management of women with premature ovarian insufficiency, 2024.",
      "Gordon CM et al. Functional hypothalamic amenorrhea: an Endocrine Society clinical practice guideline, 2017.",
      "Gravholt CH et al. Clinical practice guidelines for the care of girls and women with Turner syndrome, 2024.",
      "IOC consensus statement on Relative Energy Deficiency in Sport (REDs), 2023; NTEP guidelines, 2022.",
      "Berek and Novak's Gynecology, 16th edition; Speroff's Clinical Gynecologic Endocrinology and Infertility, 9th edition.",
    ],
  },
  "gynaecology-ipv-sexual-assault": {
    oneLiner:
      "**Intimate partner violence (IPV)** is physical, sexual, emotional or economic abuse or controlling behaviour by a current or former partner, reported by **about 3 in 10 ever-married Indian women (NFHS-5)**; the family physician must **ask safely, respond with LIVES, document injuries, plan safety** and link her to **One Stop Centres, 181 and the PWDVA 2005**, and must give every sexual-assault survivor **free, consent-based care** under the **MoHFW 2014 protocol and BNSS 2023** - no two-finger test, **emergency contraception, STI prophylaxis and HIV PEP within 72 hours**.",
    sections: [
      {
        heading: "Definition and the classification that matters",
        points: [
          "**Violence against women** is any act of gender-based violence that results in, or is likely to result in, physical, sexual or psychological harm, including threats, coercion or deprivation of liberty, in public or private life. [WHO 2021]",
          "**Intimate partner violence** includes **physical violence, sexual violence, emotional abuse, economic abuse and controlling behaviour** by a current or former partner - the classification table below links each type to its Indian legal remedy. [WHO 2021]",
          "**Sexual violence** is any sexual act, attempt or unwanted sexual comment or advance by coercion, by any person in any setting; **rape** is a legal term decided by a court, not by the doctor. [MoHFW 2014]",
          "Indian forms also include **dowry violence and dowry deaths, marital rape, acid attacks, honour crimes, child marriage, trafficking, stalking, workplace harassment and cyber abuse**. [MoHFW 2014]",
          "**Burden**: globally about **27% of ever-partnered women** have faced physical or sexual IPV; in **NFHS-5, 29% of ever-married women aged 18-49** reported spousal physical or sexual violence, about 3% in pregnancy, and only **14%** ever sought help. [NFHS-5 2021]",
          "**Risk factors**: husband's **alcohol use**, low education, poverty, witnessing parental violence, **controlling behaviour, dowry demands** and attitudes that justify wife-beating; violence escalates **in pregnancy, after separation and with alcohol**. [NFHS-5 2021]",
          "**NCRB 2022** recorded about **4.45 lakh crimes against women**, with **cruelty by husband or relatives** the largest category - reported crime is only the tip of the iceberg. [NCRB 2022]",
        ],
      },
      {
        heading: "Pathophysiology and pathoanatomy",
        points: [
          "**Power and control is the mechanism**: IPV is a pattern of coercive control (isolation, monitoring, financial control, threats) punctuated by physical or sexual assault, not a series of isolated 'quarrels' - which is why couple counselling can increase danger. [WHO 2019 Curriculum]",
          "**Cycle of violence**: tension building, an acute violent episode, then reconciliation or 'honeymoon' - this cycle, plus economic dependence, children, stigma and fear, explains why women stay or return. [WHO 2019 Curriculum]",
          "**Chronic stress biology**: repeated threat keeps the **HPA axis and sympathetic system** activated (high cortisol, catecholamines), causing insomnia, hypertension, chronic pain, IBS-type symptoms and immune changes - the body expression of abuse. [WHO 2021]",
          "**Trauma and the brain**: fear conditioning in the **amygdala**, reduced prefrontal control and hippocampal changes underlie **PTSD** (intrusions, avoidance, hyperarousal), depression and dissociation - IPV roughly **doubles the risk of depression**. [WHO 2021]",
          "**Freezing (tonic immobility)** during sexual assault is a common involuntary defence response, so **absence of struggle or injury does not mean consent**. [MoHFW 2014]",
          "**Non-fatal strangulation** compresses the jugular veins (petechiae, facial congestion), carotid arteries (loss of consciousness within seconds) and larynx (voice change); it may leave **no external mark** yet raises the risk of later homicide about **seven-fold** and can cause delayed carotid dissection. [WHO 2019 Curriculum]",
          "**Pattern injuries** reveal mechanism: **fingertip bruises on the upper arms** (grip), **defence bruises on the ulnar forearms**, bite marks, **cigarette burns**, ligature or fingertip marks on the neck, and **injuries of different ages** from repeated assault. [Reddy 35e]",
          "**Genital injury** after assault is often absent or minor because the vagina is elastic and examination may be delayed - the posterior fourchette, labia minora and hymen are the usual sites when present. [MoHFW 2014]",
          "**Reproductive harm** comes from **reproductive coercion** (sabotaged contraception, forced pregnancy or abortion) and forced unprotected sex: unintended pregnancy, **repeat induced abortion, STIs, HIV, PID and chronic pelvic pain**. [WHO 2021]",
          "**Obstetric harm**: abdominal blows cause **abruption, preterm labour and fetal injury**, and stress and late booking add **low birth weight**; maternal deaths from homicide and suicide cluster in pregnancy and postpartum. [Williams 26e]",
          "**Burns in a young married woman**, especially within 7 years of marriage, raise suspicion of **dowry-related violence**; kerosene burns concentrated on the front of the body and inconsistent stories are clues. [Reddy 35e]",
          "**Why prophylaxis is time-critical**: HIV establishes in local dendritic cells and lymph nodes within **72 hours**, so PEP must start early; **levonorgestrel** works by delaying ovulation and is ineffective after ovulation, hence the 72-hour window. [NACO 2021]",
          "**Children who witness IPV** develop behavioural, emotional and learning problems and are more likely to experience or perpetrate violence as adults - the **intergenerational cycle**. [WHO 2021]",
        ],
      },
      {
        heading: "History in the OPD",
        points: [
          "**Suspect violence** with injuries inconsistent with the story, delay in seeking care, repeated visits, a **partner who insists on staying and answers for her**, missed appointments, depression, suicidal thoughts or unexplained chronic symptoms. [WHO 2019 Curriculum]",
          "**Ask only when she is alone** (no partner, relatives or children over 2 years), in private, with a **professional interpreter**, after explaining **confidentiality and its limits**. [WHO 2019 Curriculum]",
          "WHO advises **clinical enquiry** when conditions suggest violence in low-resource settings, while USPSTF recommends **screening** women of reproductive age with a brief tool such as **HITS (Hurt, Insult, Threaten, Scream)** or **HARK (Humiliation, Afraid, Rape, Kick)**. [USPSTF 2018]",
          "**Ask directly and without judgement**: 'Has your husband or anyone at home ever hit, kicked, slapped or hurt you?', 'Are you afraid of anyone at home?', 'Has anyone forced you to have sex?' [WHO 2019 Curriculum]",
          "**Danger assessment**: increasing frequency or severity, **threats to kill, weapons, strangulation, violence in pregnancy, recent separation**, stalking and threats to children - any of these means high risk. [WHO 2019 Curriculum]",
          "**Sexual assault history** in her own words: date, time and place, number of assailants, type of contact (vaginal, anal, oral, digital, object), condom use, ejaculation, and **activities since (bathing, urinating, changing clothes)**, which affect evidence. [MoHFW 2014]",
          "Ask **last menstrual period, contraception, consensual intercourse within 72 hours** (for DNA interpretation) and drug or alcohol use (drug-facilitated assault). [MoHFW 2014]",
          "Ask about **mental health**: sleep, mood, flashbacks, **suicidal thoughts or previous self-harm**, alcohol and drug use. [WHO mhGAP 2023]",
          "Ask about **children's safety** and whether they are being hurt or threatened. [WHO 2021]",
          "Ask **what she wants** - medical care, a safe place, police, legal help - and **respect her decisions**; an adult woman decides whether to report. [WHO 2019 Curriculum]",
        ],
      },
      {
        heading: "Examination",
        points: [
          "**Treat life-threatening injuries first** - resuscitation and wound care take priority over evidence collection. [MoHFW 2014]",
          "Take **separate informed consent** for examination, evidence collection, treatment and police intimation; a survivor **12 or older can consent herself**, and refusal of any part is respected without refusing treatment. [MoHFW 2014]",
          "**Any registered medical practitioner** must examine - a female doctor is preferred but **care must not be delayed**; a male doctor examines with a female attendant present. [MoHFW 2014]",
          "**Head-to-toe examination** with a **body map**: each injury's type, size in cm, shape, colour and site, with **photographs taken with consent**; do not age bruises precisely by colour. [MoHFW 2014]",
          "**Neck**: petechiae, fingertip or ligature marks, voice change, stridor or difficulty swallowing after strangulation - these need urgent assessment even if marks are faint. [WHO 2019 Curriculum]",
          "**Genital and anal examination** by inspection, gentle traction and speculum only when indicated and consented; record injuries to the fourchette, labia, hymen, vagina, anus. [MoHFW 2014]",
          "**The two-finger test is banned** - it is unscientific and violates dignity; the Supreme Court has held that anyone doing it is guilty of **misconduct** (2022). [Supreme Court 2022]",
          "**Never comment** on the hymen's 'old tears', 'habituation to sexual intercourse' or past sexual history - and the **absence of injuries does not rule out assault**. [MoHFW 2014]",
          "**Mental state**: affect, orientation, signs of intoxication, and risk of self-harm. [WHO mhGAP 2023]",
        ],
      },
      {
        heading: "Minimal investigations",
        points: [
          "**Urine pregnancy test** before emergency contraception and as baseline. [MoHFW 2014]",
          "**Baseline HIV (with counselling), HBsAg, anti-HCV and syphilis (VDRL or RPR)** before PEP, repeated at **6 weeks, 3 months and 6 months**. [NACO 2021]",
          "**Baseline creatinine** (and ALT if available) before tenofovir-based PEP, without delaying the first dose. [NACO 2021]",
          "**Forensic evidence** best within **96 hours** (but collect whenever she presents): clothes, vaginal, anal and oral swabs, nail scrapings, pubic hair combings, blood and urine for **DNA, alcohol and drugs** - air-dried, sealed, labelled, with **chain of custody**. [MoHFW 2014]",
          "**Imaging as clinically indicated** - X-ray for suspected fractures, CT head for head injury, and **CT angiography of the neck** after strangulation with neurological symptoms. [WHO 2019 Curriculum]",
          "**Fetal tissue for DNA** is preserved if a pregnancy from rape is terminated. [MTP Amendment Act 2021]",
          "**Do not order** tests to 'prove' virginity or past sexual activity - they have no scientific or legal value. [MoHFW 2014]",
        ],
      },
      {
        heading: "Treatment - general measures",
        points: [
          "**LIVES first-line support**: **Listen** with empathy, **Inquire** about needs, **Validate** ('it is not your fault, you do not deserve this'), **Enhance safety**, and **Support** by connecting to services. [WHO 2019 Curriculum]",
          "**Do not** blame her, pressure her to leave, confront the partner, or suggest **couple counselling** while violence continues - it can escalate danger. [WHO 2019 Curriculum]",
          "**Safety plan**: a safe place to go, an **emergency bag** (ID, documents, money, medicines, keys, phone numbers), a **code word** with a trusted neighbour, and memorised helpline numbers. [WHO 2019 Curriculum]",
          "**Documentation** in her own words (in quotes) - who, when, where, how - with the body map; register an **MLC** for assault injuries per hospital policy and give her a **free copy** of the records. [MoHFW 2014]",
          "**PWDVA 2005** is a **civil law** for any woman in a domestic relationship (wife, live-in partner, mother, sister, daughter, widow): a **Protection Officer** records a **Domestic Incident Report**, and a Magistrate can give **protection, residence, monetary, custody and compensation orders** (first hearing within **3 days**, disposal within **60 days**; breach is a criminal offence). [PWDVA 2005]",
          "**Criminal law**: cruelty by husband or relatives (**BNS 2023 sections 85-86**, formerly IPC 498A), dowry death (**section 80**, formerly 304B) and the **Dowry Prohibition Act 1961**. [BNS 2023]",
          "**Sexual assault law**: **BNSS 2023 section 397** requires every hospital, public or private, to **treat rape and acid-attack survivors free and immediately and inform the police**; refusal is punishable under **BNS section 200**; examination with consent within 24 hours under **BNSS section 184**; identity protected under **BNS section 72**. [BNSS 2023]",
          "**No FIR or police requisition is needed** for a survivor who comes directly to hospital to be examined and treated. [MoHFW 2014]",
          "**Children under 18**: the **POCSO Act 2012** makes reporting **mandatory** (section 19) and failure to report punishable (section 21). [POCSO Act 2012]",
          "**Services**: **One Stop Centre (Sakhi)** in every district under **Mission Shakti** (medical aid, police facilitation, legal aid, counselling, shelter up to 5 days), **Women Helpline 181**, emergency **112**, **Child Helpline 1098**, **Tele-MANAS 14416**, District Legal Services Authority and Protection Officers. [MWCD Mission Shakti 2022]",
          "**Economic support**: link to self-help groups, skill training and shelter homes (**Shakti Sadan**), and to **victim compensation** schemes through the DLSA. [MWCD Mission Shakti 2022]",
        ],
      },
      {
        heading: "Treatment - drugs",
        points: [
          "**Emergency contraception - levonorgestrel 1.5 mg orally once** as soon as possible and **within 72 hours** (some effect to 120 hours): delays ovulation; side effects are nausea, spotting and a changed next period - **repeat the dose if she vomits within 2 hours**. [MoHFW 2014]",
          "**Copper IUD within 5 days** is the most effective emergency contraception (over 99%) and gives ongoing contraception - offer it if she accepts a pelvic procedure. [WHO MEC 2015]",
          "**STI prophylaxis** at the first visit: **azithromycin 1 g orally once** (chlamydia) **plus cefixime 400 mg orally once** or **ceftriaxone 500 mg IM** (gonorrhoea), **plus metronidazole 2 g orally once** (trichomonas, BV) - metronidazole may be deferred to reduce nausea or if she has taken alcohol. [NACO 2021]",
          "**HIV PEP - mechanism and regimen**: antiretrovirals stop viral replication before infection is established; **tenofovir 300 mg + lamivudine 300 mg + dolutegravir 50 mg (TLD) one tablet once daily for 28 days**, started as soon as possible and **within 72 hours**. [NACO 2021]",
          "**PEP side effects and adherence**: nausea, headache, insomnia (dolutegravir), rarely renal toxicity; take at the same time daily, separate dolutegravir from iron or calcium by 2 hours before or 6 hours after; missing doses risks failure. [NACO 2021]",
          "**Hepatitis B**: start or complete **hepatitis B vaccine (0, 1, 6 months)** if not immune, with **HBIG 0.06 mL/kg IM** if the assailant is known HBsAg-positive. [MoHFW 2014]",
          "**Tetanus**: **Td 0.5 mL IM** if there are wounds and immunisation is not up to date. [MoHFW 2014]",
          "**Antiemetic** with prophylaxis: **ondansetron 4 mg orally** 30 minutes before the medicines improves tolerance and adherence. [NACO 2021]",
          "**Psychological first aid** at first contact; for persistent PTSD or depression offer **trauma-focused CBT or EMDR**, and an **SSRI (sertraline 50 mg daily, up to 200 mg)** for moderate-severe depression or PTSD - review in 2 weeks for agitation and suicidality. [WHO mhGAP 2023]",
          "**Avoid routine benzodiazepines** after trauma - they do not prevent PTSD and may worsen it; short-term use only for severe distress with insomnia. [WHO mhGAP 2023]",
          "**Pregnancy from rape**: the **MTP Amendment Act 2021** allows termination **up to 24 weeks**; medical abortion (**mifepristone 200 mg then misoprostol 800 microgram** buccal or vaginal 24-48 hours later, up to 9 weeks) or surgical methods. [MTP Amendment Act 2021]",
        ],
      },
      {
        heading: "Acute presentation and emergency management",
        points: [
          "**Sexual assault within 72 hours**: treat injuries, take consent, collect evidence, and give the **three time-critical drugs - EC, STI prophylaxis and HIV PEP** - at the same visit, free of cost. [MoHFW 2014]",
          "**Strangulation**: observe and image the neck if there was loss of consciousness, voice change, stridor, dysphagia or neurological symptoms - delayed airway oedema and carotid dissection can kill. [WHO 2019 Curriculum]",
          "**Burns in a young married woman**: resuscitate, treat burns, inform police, and arrange a **dying declaration** before a magistrate (or doctor if none available) if life is in danger. [Reddy 35e]",
          "**Imminent danger** (threats to kill, weapons, escalating violence): call **112**, arrange immediate shelter through the **One Stop Centre** or police, and do not send her home to the abuser. [MWCD Mission Shakti 2022]",
          "**Suicidal ideation**: do not leave her alone, remove means, and arrange same-day psychiatric assessment or **Tele-MANAS 14416**. [WHO mhGAP 2023]",
        ],
      },
      {
        heading: "Follow-up, monitoring and when to refer",
        points: [
          "**After sexual assault** review at **2 weeks, 6 weeks, 3 months and 6 months**: injuries, PEP adherence and side effects, pregnancy test, repeat HIV, HBsAg and syphilis tests, vaccine doses and mental health. [MoHFW 2014]",
          "**After IPV disclosure** offer an early follow-up visit on a **safe pretext** (for example a BP check), keep the door open, and reassess danger and safety plans each time. [WHO 2019 Curriculum]",
          "**Persistent distress beyond 1 month** suggests PTSD or depression - refer to a psychiatrist or clinical psychologist. [Kaplan and Sadock 12e]",
          "**Refer** to the One Stop Centre, Protection Officer, DLSA for free legal aid, and child protection services when children are at risk. [MWCD Mission Shakti 2022]",
          "**Clinic systems**: train all staff in identification, LIVES, documentation and referral, keep a **private room**, and display helpline numbers in the women's toilet. [WHO 2019 Curriculum]",
          "**Prevention**: gender-equality education, engaging men and boys, reducing harmful alcohol use, economic empowerment and ending child marriage. [WHO 2021]",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs: dose, duration and side effects",
        columns: ["Drug", "Mechanism", "Dose and duration", "Side effects", "How to take"],
        rows: [
          ["Levonorgestrel (EC)", "Delays or prevents ovulation", "1.5 mg orally once, within 72 hours (some effect to 120 h)", "Nausea, spotting, altered next period", "Repeat if vomited within 2 hours; pregnancy test at 3 weeks"],
          ["Copper IUD (EC)", "Copper is toxic to sperm and ovum, prevents implantation", "Inserted within 5 days; can stay for 10 years", "Pain, heavier periods, infection risk", "Fitted by trained provider after consent"],
          ["Azithromycin", "Macrolide - blocks bacterial 50S ribosome", "1 g orally once", "Nausea, diarrhoea", "With food; observe if vomiting"],
          ["Cefixime (or ceftriaxone)", "Third-generation cephalosporin cell-wall inhibitor", "Cefixime 400 mg orally once, or ceftriaxone 500 mg IM", "Allergy, diarrhoea", "Once at first visit"],
          ["Metronidazole", "Nitroimidazole - DNA damage in anaerobes and trichomonas", "2 g orally once", "Nausea, metallic taste, disulfiram reaction", "No alcohol for 48 hours; may defer to reduce nausea"],
          ["TLD (tenofovir, lamivudine, dolutegravir)", "NRTIs plus integrase inhibitor block HIV replication", "One tablet daily for 28 days, start within 72 hours", "Nausea, headache, insomnia", "Same time daily; separate from iron or calcium"],
          ["Hepatitis B vaccine with or without HBIG", "Active and passive immunity", "Vaccine 0, 1, 6 months; HBIG 0.06 mL/kg if source HBsAg-positive", "Local soreness", "Deltoid IM; HBIG at a separate site"],
          ["Sertraline", "SSRI", "50 mg daily, up to 200 mg; at least 6 months after recovery", "Nausea, agitation, sexual dysfunction", "Morning with food; review in 2 weeks"],
        ],
      },
      {
        heading: "Types of violence against women and legal remedy",
        columns: ["Type", "Examples", "Legal remedy (India)"],
        rows: [
          ["Physical", "Slapping, beating, burning, strangling, acid attack", "BNS 2023 hurt and cruelty (s85-86), PWDVA 2005"],
          ["Sexual", "Rape, forced sex by partner, harassment, child sexual abuse", "BNS 2023 s63-70, POCSO 2012, PWDVA 2005"],
          ["Emotional or psychological", "Insults, threats, isolation, humiliation, control", "PWDVA 2005, BNS cruelty"],
          ["Economic", "Denying money, taking earnings, dowry demands, eviction", "PWDVA 2005, Dowry Prohibition Act 1961"],
          ["Structural or cultural", "Child marriage, honour crimes, trafficking, dowry deaths", "PCMA 2006, BNS s80, anti-trafficking laws"],
        ],
      },
      {
        heading: "Types of legal duty for the family physician",
        columns: ["Law", "Key provision", "Doctor's duty"],
        rows: [
          ["PWDVA 2005", "Civil protection, residence and monetary orders", "Give medical aid and report to Protection Officer on request"],
          ["BNSS 2023 s397", "Free immediate treatment of rape and acid-attack survivors", "Treat free; inform police"],
          ["BNS 2023 s200", "Punishment for not treating a victim", "Never refuse or delay care"],
          ["BNSS 2023 s184", "Medical examination of rape survivor with consent", "Examine within 24 hours and report without delay"],
          ["POCSO Act 2012 s19, s21", "Mandatory reporting of child sexual abuse", "Report every case under 18"],
          ["BNS 2023 s72", "Survivor identity must not be disclosed", "Maintain confidentiality"],
        ],
      },
    ],
    redFlags: [
      "Strangulation - voice change, neck marks, petechiae or loss of consciousness.",
      "Threats to kill, access to weapons or escalating violence.",
      "Violence during pregnancy.",
      "Suicidal thoughts or previous self-harm.",
      "Recent separation or the partner stalking her.",
      "Burns in a young married woman - suspect dowry violence.",
      "Sexual assault within 72 hours - urgent EC, STI prophylaxis and HIV PEP.",
      "Children in the household being hurt or threatened.",
    ],
    pearls: [
      "Ask alone, ask directly, believe her, never blame - LIVES is the first-line response.",
      "Couple counselling is contraindicated while violence is ongoing.",
      "PWDVA 2005 is civil law - protection and residence orders, not punishment by itself.",
      "No FIR is needed to examine or treat a sexual-assault survivor; no hospital can turn her away.",
      "The two-finger test is banned; never comment on the hymen or 'habituation'.",
      "Absence of injury does not mean absence of assault.",
      "Three time-critical drugs within 72 hours: EC, STI prophylaxis and HIV PEP (TLD for 28 days).",
      "BNSS 397 mandates free treatment by all hospitals; BNS 200 punishes refusal.",
      "POCSO makes reporting of child sexual abuse mandatory.",
      "Every district has a One Stop Centre, and 181 works 24x7.",
    ],
    references: [
      "MoHFW. Guidelines and protocols: medico-legal care for survivors/victims of sexual violence, 2014 (read with BNSS 2023).",
      "WHO. Caring for women subjected to violence: a WHO curriculum for training health-care providers, revised 2021; WHO violence against women prevalence estimates, 2021.",
      "National Family Health Survey-5 (2019-21), India report; NCRB Crime in India, 2022.",
      "Protection of Women from Domestic Violence Act 2005; Bharatiya Nyaya Sanhita 2023; Bharatiya Nagarik Suraksha Sanhita 2023; POCSO Act 2012; MTP (Amendment) Act 2021.",
      "NACO National guidelines for HIV care and treatment, 2021.",
      "Ministry of Women and Child Development. Mission Shakti guidelines (One Stop Centres, Women Helpline), 2022.",
      "WHO mhGAP intervention guide, 2023; US Preventive Services Task Force. Screening for intimate partner violence, 2018.",
    ],
  },
};

export default rewrites;
