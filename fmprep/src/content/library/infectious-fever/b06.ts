import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "infectious-fever-sti-syndromic",
  title: "Sexually transmitted infections: syndromic management and aetiological diagnosis",
  oneLiner:
    "**Syndromic management** treats an STI by the **syndrome** the patient presents with (urethral discharge, vaginal discharge, genital ulcer, lower abdominal pain, inguinal bubo, scrotal swelling) using a flow chart that covers every common cause at the **first visit**, with India's **NACO colour-coded kits 1-7**, while **aetiological diagnosis** (Gram stain, NAAT, syphilis serology) confirms the organism where a laboratory exists - always completed by the **4 Cs: compliance, counselling, condoms and contact (partner) treatment**.",
  frequency: "core",
  keywords: [
    "STI",
    "RTI",
    "syndromic case management",
    "NACO kits",
    "Suraksha clinic",
    "DSRC",
    "urethral discharge",
    "genital ulcer disease",
    "GUD",
    "gonorrhoea",
    "chlamydia",
    "chancroid",
    "LGV",
    "donovanosis",
    "herpes genitalis",
    "benzathine penicillin",
    "cefixime azithromycin",
    "partner notification",
    "expedited partner therapy",
    "doxy-PEP",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Sexually transmitted infections (STIs)** are infections spread mainly by vaginal, anal or oral sex; **reproductive tract infections (RTIs)** is the wider Indian programme term that also includes endogenous infections (bacterial vaginosis, candidiasis) and iatrogenic infections after abortion, delivery or IUD insertion. [NACO 2014]",
        "WHO estimates about **374 million new curable STIs** each year in people aged 15-49 - **trichomoniasis 156 million, chlamydia 129 million, gonorrhoea 82 million and syphilis 7.1 million** (2020 estimates); syphilis rose to about **8 million** new adult cases in 2022. [WHO 2024]",
        "More than **1 million curable STIs are acquired every day** worldwide, and most are **asymptomatic**, especially chlamydia and gonorrhoea in women - which is why syndromic management alone misses a large share of infections. [WHO 2021]",
        "In India, NACO estimates that about **6% of the adult population** has one or more STI/RTI at any time; the burden is highest in **key populations** - female sex workers, men who have sex with men, transgender people, injecting drug users and migrant workers. [NACO 2014]",
        "STI services are delivered through about **1,100+ Designated STI/RTI Clinics (DSRCs) branded 'Suraksha Clinics'** in district hospitals and medical colleges, and through targeted interventions under **NACP Phase V (2021-2026)**. [NACP-V 2021]",
        "**Herpes simplex type 2** has overtaken chancroid as the **commonest cause of genital ulcer disease** in India and worldwide; chancroid and donovanosis are now rare, while syphilis is resurging in many cities. [Harrison 22e]",
        "STIs matter beyond the genitals: an ulcerative STI raises the risk of acquiring **HIV 2-4 fold**, untreated chlamydia and gonorrhoea cause **PID, ectopic pregnancy and tubal infertility**, and untreated syphilis in pregnancy causes **stillbirth and congenital syphilis**. [WHO 2021]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**Urethral discharge** in men: **Neisseria gonorrhoeae** and **Chlamydia trachomatis** (often together), then **Mycoplasma genitalium**, Trichomonas vaginalis, and rarely HSV or adenovirus. [WHO 2021]",
        "**Vaginal discharge**: commonest causes are the endogenous **bacterial vaginosis** (Gardnerella and anaerobes) and **vulvovaginal candidiasis**, then the STI **Trichomonas vaginalis**; **cervicitis** from gonorrhoea or chlamydia is less common and often silent. [WHO 2021]",
        "**Genital ulcer**: **HSV-2 (and HSV-1)**, **Treponema pallidum (syphilis)**, **Haemophilus ducreyi (chancroid)**, **Chlamydia trachomatis serovars L1-L3 (LGV)** and **Klebsiella granulomatis (donovanosis)**; non-infective causes include fixed drug eruption, Behcet disease and trauma. [Harrison 22e]",
        "**Lower abdominal pain in women (PID)**: gonorrhoea, chlamydia, M. genitalium and mixed anaerobes ascending from the cervix. [CDC 2021]",
        "**Acute scrotal swelling (epididymo-orchitis)**: under 35 years usually gonorrhoea or chlamydia; over 35 years or after instrumentation usually **enteric Gram-negative bacilli** - but **testicular torsion** must be excluded first. [CDC 2021]",
        "Risk factors: **age 15-24 years**, a new partner or more than one partner in the last 3 months, a partner with an STI, inconsistent condom use, sex work, MSM, alcohol and drug use, previous STI and HIV infection. [WHO 2021]",
        "Mother-to-child transmission occurs for **syphilis, HIV, hepatitis B, HSV, gonorrhoea and chlamydia** (ophthalmia neonatorum, neonatal pneumonia). [WHO 2021]",
      ],
    },
    {
      heading: "Pathophysiology - why the syndromes look the way they do",
      points: [
        "**Gonococcus** adheres to columnar epithelium by **pili and Opa proteins**, invades, and triggers an intense **neutrophil response** - producing the profuse purulent discharge, the **Gram-negative intracellular diplococci** in neutrophils and the short incubation of **2-5 days**. [Harrison 22e]",
        "**Chlamydia** is an **obligate intracellular** bacterium with an elementary body (infectious) and reticulate body (replicating) cycle; it causes a milder, mucoid discharge after **7-21 days** and chronic subclinical inflammation that scars the tubes - and beta-lactams do not reach it, hence **doxycycline or azithromycin**. [Harrison 22e]",
        "**Treponema pallidum** enters through micro-abrasions and causes an **obliterative endarteritis** with plasma cells; the resulting ischaemic, **indurated, painless chancre** contrasts with the **painful, soft, ragged** ulcer of chancroid, where H. ducreyi toxin causes necrosis. [Harrison 22e]",
        "**HSV** replicates in epithelium to form vesicles that rupture into **multiple shallow painful erosions**, then travels up sensory nerves to establish **latency in sacral dorsal root ganglia** - which explains recurrences and asymptomatic shedding. [Harrison 22e]",
        "**LGV serovars L1-L3** invade lymphatics and cause a **suppurative lymphadenitis**; nodes above and below the inguinal ligament produce the **groove sign**, and rectal LGV in MSM causes **proctocolitis** mimicking inflammatory bowel disease. [CDC 2021]",
        "**Bacterial vaginosis** is not an infection in the classic sense but a **loss of hydrogen-peroxide-producing lactobacilli**, with overgrowth of anaerobes that release **amines (fishy odour)** and raise pH above **4.5**. [CDC 2021]",
        "Inflamed or ulcerated genital mucosa recruits **CD4 target cells** and breaches the epithelial barrier - the mechanism by which STIs amplify **HIV acquisition and shedding**. [WHO 2021]",
      ],
    },
    {
      heading: "Classification - the STI syndromes and the NACO kits",
      points: [
        "NACO recognises **seven syndromes**: urethral discharge, vaginal discharge (vaginitis and cervicitis), genital ulcer (herpetic and non-herpetic), lower abdominal pain, inguinal bubo, scrotal swelling, and neonatal conjunctivitis, plus anorectal discharge and genital warts. [NACO 2014]",
        "**Kit 1 - Grey**: urethral discharge, cervicitis, anorectal discharge, painful scrotal swelling - **azithromycin 1 g + cefixime 400 mg, both single oral doses**. [NACO 2014]",
        "**Kit 2 - Green**: vaginitis (BV, trichomonas, candida) - **secnidazole 2 g single dose + fluconazole 150 mg single dose**. [NACO 2014]",
        "**Kit 3 - White**: non-herpetic genital ulcer - **benzathine penicillin 2.4 MU IM single dose (with skin test where required by local policy) + azithromycin 1 g single dose**. [NACO 2014]",
        "**Kit 4 - Blue**: non-herpetic genital ulcer in penicillin allergy - **doxycycline 100 mg BD for 15 days + azithromycin 1 g single dose**. [NACO 2014]",
        "**Kit 5 - Red**: herpetic genital ulcer - **acyclovir 400 mg TDS for 7 days**. [NACO 2014]",
        "**Kit 6 - Yellow**: lower abdominal pain (PID) - **cefixime 400 mg single dose + metronidazole 400 mg BD for 14 days + doxycycline 100 mg BD for 14 days**. [NACO 2014]",
        "**Kit 7 - Black**: inguinal bubo - **doxycycline 100 mg BD for 21 days + azithromycin 1 g single dose**; fluctuant nodes are aspirated through healthy skin, never incised. [NACO 2014]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "Take a **sexual history using the 5 Ps** - partners (number, gender), practices (vaginal, anal, oral), protection (condoms), past STIs, and pregnancy intention - in private, with a non-judgemental tone. [CDC 2021]",
        "**Gonococcal urethritis**: sudden **purulent discharge and dysuria** 2-5 days after exposure; **chlamydial urethritis** is milder, mucoid and often noticed only as morning crusting; **up to 50% of chlamydia in men** and 70-80% in women is asymptomatic. [Harrison 22e]",
        "**Vaginal discharge**: ask colour, odour and itch - **thin grey fishy** (BV, worse after sex), **frothy yellow-green with soreness** (trichomoniasis), **curdy white with intense itch** (candidiasis); post-coital bleeding or deep dyspareunia suggests cervicitis or PID. [WHO 2021]",
        "**Genital ulcer**: ask pain, number and preceding vesicles - **painful grouped vesicles with prodromal tingling** (herpes), **single painless ulcer** (syphilis), **painful ragged ulcers with tender suppurative nodes** (chancroid), **painless beefy-red ulcer that bleeds** (donovanosis). [Harrison 22e]",
        "**Inguinal bubo**: a painful node mass weeks after a small transient ulcer that the patient may not recall suggests **LGV**; rectal pain, tenesmus and bloody discharge in MSM suggest **LGV proctitis**. [CDC 2021]",
        "Ask about **extragenital symptoms**: sore throat after oral sex (pharyngeal gonorrhoea is usually silent), joint pain and skin pustules (**disseminated gonococcal infection**), rash on palms and soles (secondary syphilis). [Harrison 22e]",
        "**Atypical presentations**: asymptomatic screening-detected infection, recurrent 'UTI' with sterile pyuria, infertility, reactive arthritis with conjunctivitis and urethritis after chlamydia. [Harrison 22e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "Examine in good light with a chaperone: **milk the urethra** from base to meatus if no discharge is visible, retract the foreskin, and palpate the testes, epididymis and inguinal nodes. [NACO 2014]",
        "In women, do a **speculum examination**: vaginal discharge on the walls suggests vaginitis, while **mucopurulent discharge from the os, friability and contact bleeding** suggest cervicitis; a **'strawberry cervix'** (punctate haemorrhages) suggests trichomoniasis. [CDC 2021]",
        "A **bimanual examination** with **cervical motion tenderness, uterine or adnexal tenderness** in a sexually active woman with lower abdominal pain is enough to start PID treatment. [CDC 2021]",
        "**Syphilitic chancre**: single, round, clean-based, **indurated (button-like)**, painless, with rubbery non-tender bilateral nodes; **chancroid**: multiple, soft, ragged undermined edges, purulent base, painful, with unilateral tender bubo that may rupture. [Harrison 22e]",
        "**LGV groove sign**: enlarged inguinal and femoral nodes separated by the inguinal ligament - seen in about 10-20%; **donovanosis pseudobubo**: subcutaneous granulation tissue, not a true node. [Harrison 22e]",
        "**Warts (condylomata acuminata)** from HPV 6/11 are cauliflower-like; **condylomata lata** of secondary syphilis are flat, moist and highly infectious - do not confuse them. [Harrison 22e]",
        "Look for **systemic clues**: oral ulcers, generalised lymphadenopathy, rash, jaundice (hepatitis B), oral candidiasis or weight loss (HIV). [NACO 2014]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Urethral discharge vs UTI**: urethritis has discharge and urethral dysuria with a normal urine culture; cystitis has frequency, urgency and suprapubic pain with bacteriuria. [CDC 2021]",
        "**Vaginal discharge**: physiological discharge (clear, odourless, mid-cycle), foreign body (retained tampon), cervical ectropion and **cervical cancer** (blood-stained, foul) must be separated from vaginitis. [WHO 2021]",
        "**Genital ulcer non-infective causes**: **fixed drug eruption** (recurs at the same site after NSAIDs, cotrimoxazole, fluconazole), **Behcet disease** (recurrent oral plus genital ulcers, pathergy), trauma, and **squamous cell carcinoma** in an older man with a non-healing ulcer. [Harrison 22e]",
        "**Lower abdominal pain**: **ectopic pregnancy** (always do a urine pregnancy test), appendicitis, ovarian torsion, endometriosis and UTI. [CDC 2021]",
        "**Scrotal swelling**: **testicular torsion** (sudden, young, high-riding testis, absent cremasteric reflex - surgical emergency), mumps orchitis, tuberculous epididymitis, hernia and tumour. [CDC 2021]",
        "**Inguinal bubo**: pyogenic lymphadenitis from a leg wound, tuberculous adenitis, filarial lymphadenitis, plague (very rare) and lymphoma. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations - first line and advanced",
      points: [
        "**Gram stain of urethral discharge**: **2 or more polymorphs per oil-immersion field** confirms urethritis; **Gram-negative intracellular diplococci** make gonorrhoea - sensitivity over 95% in symptomatic men, but poor in cervical samples. [CDC 2021]",
        "**Vaginal discharge bedside tests**: **pH paper** (over 4.5 in BV and trichomoniasis, normal 3.8-4.5 in candidiasis), **whiff test** with 10% KOH, **saline wet mount** (motile trichomonads, clue cells) and **KOH mount** (pseudohyphae). [CDC 2021]",
        "**Amsel criteria** for BV - **3 of 4**: thin homogeneous discharge, pH over 4.5, positive whiff test, **clue cells over 20%** of epithelial cells; the **Nugent score of 7-10** on Gram stain is the laboratory standard. [CDC 2021]",
        "**NAAT** (nucleic acid amplification test) on **first-void urine in men** and **vaginal swab in women** is the test of choice for gonorrhoea and chlamydia (sensitivity over 90%); use rectal and pharyngeal swabs for extragenital sites in MSM. [WHO 2021]",
        "**Gonococcal culture** on Thayer-Martin medium with **antimicrobial susceptibility testing** is needed in treatment failure, because ceftriaxone-resistant strains are rising; India is part of the WHO **Enhanced Gonococcal Antimicrobial Surveillance Programme**. [WHO 2024]",
        "**Every STI patient** is offered **syphilis serology (RPR/VDRL with TPHA or a rapid treponemal test), HIV testing** and, where indicated, hepatitis B and C testing. [NACO 2014]",
        "**Genital ulcer**: **HSV PCR** of the ulcer base is best for herpes (Tzanck smear is insensitive), **dark-field microscopy or treponemal PCR** for a chancre, and **tissue smear for Donovan bodies** (Giemsa) for donovanosis. [CDC 2021]",
      ],
    },
    {
      heading: "Management in OPD / primary care",
      points: [
        "Treat on the **first visit** with the syndromic flow chart - the main advantage of syndromic management is that **no patient leaves untreated** while waiting for results. [WHO 2021]",
        "**Gonorrhoea**: WHO 2024 recommends **ceftriaxone 1 g IM single dose**; CDC 2021 uses **ceftriaxone 500 mg IM** (1 g if 150 kg or more); the NACO kit uses **cefixime 400 mg orally** - an acceptable option where injections are impractical, but cefixime is less reliable for pharyngeal infection. [WHO 2024]",
        "**Chlamydia**: **doxycycline 100 mg BD for 7 days** is now preferred over azithromycin 1 g single dose (better cure of rectal infection); azithromycin is used in pregnancy and when adherence is doubtful. [WHO 2024]",
        "**Trichomoniasis**: **metronidazole 500 mg BD for 7 days** in women (better than the 2 g single dose); men may take 2 g single dose; avoid alcohol for 24 hours (48-72 hours after tinidazole or secnidazole). [CDC 2021]",
        "**Bacterial vaginosis**: **metronidazole 400-500 mg BD for 7 days** or 0.75% gel; **candidiasis**: **fluconazole 150 mg single oral dose** or clotrimazole 500 mg vaginal tablet; partners of BV or candida patients are **not** treated routinely. [CDC 2021]",
        "**First-episode genital herpes**: **acyclovir 400 mg TDS for 7-10 days** (or valacyclovir 1 g BD); recurrences: acyclovir 800 mg TDS for 2 days or episodic short courses; more than 6 recurrences a year: **suppressive acyclovir 400 mg BD**. [CDC 2021]",
        "**Syphilis**: **benzathine penicillin G 2.4 MU IM single dose** (1.2 MU into each buttock) for primary, secondary and early latent syphilis - full detail in the Syphilis topic. [WHO 2024]",
        "**Chancroid**: **azithromycin 1 g single dose** or ceftriaxone 250 mg IM; **donovanosis**: azithromycin 1 g weekly or 500 mg daily for **at least 3 weeks** and until healed; **LGV**: **doxycycline 100 mg BD for 21 days**. [CDC 2021]",
        "Complete every visit with the **4 Cs** - **compliance** (take all doses), **counselling** (risk reduction, abstain for 7 days after treatment), **condoms** (demonstrate and provide), and **contact tracing** (partners). [NACO 2014]",
      ],
    },
    {
      heading: "Partner management",
      points: [
        "Notify and treat **all partners from the last 60 days** (or the last partner if none in 60 days) for urethral discharge, cervicitis and PID; for primary syphilis, the last **3 months plus duration of symptoms**, for secondary syphilis **6 months**, and for early latent **1 year**. [CDC 2021]",
        "Partners are treated **epidemiologically** - for the same syndrome as the index patient - without waiting for their own test results. [NACO 2014]",
        "Methods: **patient referral** (index patient informs, with a partner card), **provider referral** (the clinic contacts the partner), and **expedited partner therapy** (giving the drugs for the partner), which is legal and used in many countries but less common in India. [CDC 2021]",
        "Both partners **abstain until 7 days after both** have completed treatment and symptoms resolve, to prevent the **ping-pong reinfection**. [CDC 2021]",
        "Retest for chlamydia and gonorrhoea **3 months after treatment** because reinfection, not treatment failure, explains most positives. [CDC 2021]",
      ],
    },
    {
      heading: "Management in IPD / emergency",
      points: [
        "Admit **PID** if surgical emergency cannot be excluded, there is a **tubo-ovarian abscess**, pregnancy, high fever with vomiting, or failure of oral therapy at 72 hours; give **ceftriaxone 1 g IV daily + doxycycline 100 mg BD + metronidazole 500 mg BD**, switching to oral after 24-48 hours of improvement for 14 days total. [CDC 2021]",
        "**Disseminated gonococcal infection** (arthritis-dermatitis syndrome, septic arthritis): **ceftriaxone 1 g IV daily**, for at least 7 days for arthritis; meningitis and endocarditis need 10-14 days and 4 weeks respectively. [CDC 2021]",
        "**Severe primary herpes** with urinary retention, aseptic meningitis or disseminated disease: **acyclovir 5-10 mg/kg IV 8-hourly** for 2-7 days then oral to complete 10 days; urinary retention may need a **suprapubic catheter**. [CDC 2021]",
        "**Acute painful scrotal swelling** in a young man is **torsion until proven otherwise** - urgent surgical review and Doppler, do not delay exploration beyond 6 hours. [CDC 2021]",
        "**Ophthalmia neonatorum** (purulent conjunctivitis in the first month): **ceftriaxone 25-50 mg/kg IV/IM single dose** (max 250 mg) for gonococcal; erythromycin 50 mg/kg/day for 14 days for chlamydial; treat both parents. [CDC 2021]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: **doxycycline and tetracyclines are contraindicated** - use **azithromycin 1 g** for chlamydia, ceftriaxone for gonorrhoea, metronidazole is safe for BV and trichomonas, and syphilis is treated **only with penicillin** (desensitise if allergic). [CDC 2021]",
        "**Pregnancy screening**: every pregnant woman has **syphilis and HIV testing at the first ANC visit**, ideally with a point-of-care **dual HIV/syphilis rapid test**, under India's push for **elimination of vertical transmission of HIV and syphilis (EVTHS)**. [WHO 2021]",
        "**HIV co-infection**: the same regimens apply, but herpes is more severe and longer (acyclovir 400 mg TDS for 5-10 days, suppression often needed) and syphilis follow-up serology is more frequent. [CDC 2021]",
        "**MSM**: test all exposed sites (urethra, rectum, pharynx) with NAAT; consider **rectal LGV**, and offer **HIV PrEP**, hepatitis A and B and HPV vaccination. [WHO 2021]",
        "**Adolescents and children**: an STI in a prepubertal child is **sexual abuse until proven otherwise** - report under the **POCSO Act 2012**; consent and confidentiality rules apply to adolescents. [NACO 2014]",
        "**Resource-limited setting**: where no microscope exists, syndromic management is the standard; add a **speculum and risk score** for cervicitis because vaginal discharge alone predicts cervical infection poorly. [WHO 2021]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Women**: PID leads to **tubal infertility (about 10-20% after one episode)**, **ectopic pregnancy** and **chronic pelvic pain**; gonorrhoea and chlamydia cause Fitz-Hugh-Curtis **perihepatitis**. [Harrison 22e]",
        "**Men**: epididymo-orchitis, urethral stricture after repeated gonorrhoea, and **reactive arthritis** after chlamydia (HLA-B27). [Harrison 22e]",
        "**Neonates**: ophthalmia neonatorum (blindness), chlamydial pneumonia, congenital syphilis, neonatal herpes (high mortality when disseminated). [CDC 2021]",
        "**LGV and donovanosis**: genital elephantiasis (esthiomene), rectal stricture, fistulae; **HPV**: cervical, anal and penile cancer. [Harrison 22e]",
        "Treated bacterial STIs are cured in **over 95%**; the prognosis is limited by **reinfection**, rising **gonococcal resistance** and the lifelong nature of HSV and HIV. [WHO 2024]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "Refer to the **Suraksha Clinic / DSRC** for laboratory diagnosis, partner services and confidential counselling; link to the **ICTC** for HIV testing. [NACP-V 2021]",
        "Review urethral discharge at **7 days**: persistent symptoms mean **non-adherence, reinfection or resistant organisms** - test with culture/NAAT and treat **M. genitalium** (doxycycline 7 days then moxifloxacin 400 mg daily for 7 days) or trichomonas. [CDC 2021]",
        "Review genital ulcers at **7 days**: a non-healing ulcer needs **biopsy, dark-field, HSV PCR and HIV testing** and referral. [NACO 2014]",
        "Review PID at **72 hours**: no improvement means admission, ultrasound for tubo-ovarian abscess and IV therapy. [CDC 2021]",
        "Repeat **syphilis serology at 6 and 12 months** after treatment and **HIV testing at 3 months** if the first test was in the window period. [CDC 2021]",
      ],
    },
    {
      heading: "Prevention and programme link",
      points: [
        "**Condoms** used correctly and consistently reduce transmission of gonorrhoea, chlamydia, trichomonas and HIV substantially, with lesser protection against herpes, HPV and syphilis on uncovered skin. [WHO 2021]",
        "**HPV vaccination** (see the Adult vaccination topic) and **hepatitis B vaccination** prevent two viral STIs; **voluntary medical male circumcision** reduces female-to-male HIV acquisition by about 60%. [WHO 2021]",
        "**Doxycycline post-exposure prophylaxis (doxy-PEP)**: **doxycycline 200 mg within 72 hours** of condomless sex reduced syphilis and chlamydia by about two-thirds in MSM and transgender women; CDC recommends it (2024) for those with a bacterial STI in the last year - not part of NACO policy. [CDC 2024]",
        "**NACP Phase V (2021-2026)** aims to eliminate **vertical transmission of HIV and syphilis** and to provide free syndromic kits and testing in all DSRCs, with STI services integrated into **Ayushman Arogya Mandirs**. [NACP-V 2021]",
        "Report STIs through the **SIMS (Strategic Information Management System)** of NACO; maintain **confidentiality** under the HIV and AIDS (Prevention and Control) Act 2017. [NACO 2017]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**WHO 2021** - Guidelines for the management of symptomatic STIs: recommends **speculum examination plus point-of-care tests** where available and moves away from purely syndromic treatment of vaginal discharge for cervicitis. [WHO 2021]",
        "**WHO 2024** - updated treatment recommendations: **ceftriaxone 1 g IM single dose** for gonorrhoea, **doxycycline 100 mg BD for 7 days** as preferred chlamydia treatment, and **benzathine penicillin** for syphilis with alternatives during shortages. [WHO 2024]",
        "**CDC 2021** STI treatment guidelines: ceftriaxone **500 mg** (no routine co-treatment with azithromycin unless chlamydia is not excluded), metronidazole 7 days for trichomoniasis in women, and **metronidazole added to all PID regimens**. [CDC 2021]",
        "**CDC 2024** - doxy-PEP recommended for MSM and transgender women with a recent bacterial STI; concern remains about **tetracycline resistance** in gonococci and commensals. [CDC 2024]",
        "**Rising resistance**: ceftriaxone-resistant gonorrhoea (penA mosaic strains) is increasing in Asia - culture and susceptibility in every treatment failure; the NACO kit (2014) still uses oral **cefixime** - note the difference from WHO 2024. [WHO 2024]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Commonest viva: **'name the NACO kits and their colours'** - Grey, Green, White, Blue, Red, Yellow, Black for kits 1-7 (urethral, vaginal, non-herpetic ulcer, ulcer in penicillin allergy, herpetic, PID, bubo). [NACO 2014]",
        "**Advantages of syndromic management**: same-day treatment, no laboratory needed, cheap, can be done by trained paramedics; **disadvantages**: overtreatment, misses asymptomatic infection, poor for cervicitis, promotes resistance. [WHO 2021]",
        "Common mistake: treating **vaginal discharge as an STI** and notifying partners for BV or candidiasis - only trichomoniasis and cervicitis need partner treatment. [CDC 2021]",
        "Common mistake: **incising a bubo** - aspirate through healthy skin with a wide-bore needle to prevent a sinus. [NACO 2014]",
        "Always say **'offer HIV and syphilis testing and do partner management'** at the end of any STI answer. [NACO 2014]",
      ],
    },
  ],
  tables: [
    {
      heading: "NACO colour-coded STI/RTI kits",
      columns: ["Kit (colour)", "Syndrome", "Contents", "Key cautions"],
      rows: [
        ["Kit 1 (Grey)", "Urethral discharge, cervicitis, anorectal discharge, scrotal swelling", "Azithromycin 1 g + cefixime 400 mg, single oral doses", "Cefixime weaker for pharyngeal gonorrhoea; exclude torsion"],
        ["Kit 2 (Green)", "Vaginitis (BV, trichomonas, candida)", "Secnidazole 2 g + fluconazole 150 mg, single doses", "No alcohol for 72 h; metronidazole 7 days preferred in pregnancy"],
        ["Kit 3 (White)", "Non-herpetic genital ulcer", "Benzathine penicillin 2.4 MU IM + azithromycin 1 g", "Observe 30 min for anaphylaxis; keep adrenaline ready"],
        ["Kit 4 (Blue)", "Non-herpetic ulcer, penicillin allergy", "Doxycycline 100 mg BD x 15 days + azithromycin 1 g", "Doxycycline contraindicated in pregnancy - desensitise instead"],
        ["Kit 5 (Red)", "Herpetic genital ulcer", "Acyclovir 400 mg TDS x 7 days", "Start within 72 h for best effect; suppression if 6+ recurrences/year"],
        ["Kit 6 (Yellow)", "Lower abdominal pain (PID)", "Cefixime 400 mg single + metronidazole 400 mg BD x 14 days + doxycycline 100 mg BD x 14 days", "Pregnancy test first; admit if TOA, pregnancy or failure at 72 h"],
        ["Kit 7 (Black)", "Inguinal bubo", "Doxycycline 100 mg BD x 21 days + azithromycin 1 g", "Aspirate, never incise, fluctuant nodes"],
      ],
    },
    {
      heading: "Drug table - aetiological treatment (WHO 2024 / CDC 2021)",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Ceftriaxone (gonorrhoea)", "1 g IM (WHO 2024) or 500 mg IM (CDC 2021)", "Single dose", "Beta-lactam allergy; rising resistance in Asia"],
        ["Doxycycline (chlamydia, LGV)", "100 mg orally BD", "7 days chlamydia; 21 days LGV", "Pregnancy, children under 8; photosensitivity, oesophagitis - take upright with water"],
        ["Azithromycin", "1 g orally", "Single dose (chlamydia in pregnancy, chancroid); weekly x 3+ for donovanosis", "GI upset; QT prolongation; M. genitalium macrolide resistance"],
        ["Benzathine penicillin G", "2.4 MU deep IM (1.2 MU each buttock)", "Single dose early syphilis; weekly x 3 late latent", "Anaphylaxis (rare), Jarisch-Herxheimer reaction, never IV"],
        ["Metronidazole", "500 mg orally BD", "7 days (trichomonas in women, BV)", "Disulfiram-like reaction with alcohol; metallic taste"],
        ["Fluconazole", "150 mg orally", "Single dose; 3 doses 72 h apart in severe VVC", "Avoid in first trimester (use topical clotrimazole); drug interactions"],
        ["Acyclovir", "400 mg orally TDS", "7-10 days first episode; 400 mg BD suppression", "Reduce dose in CKD; IV form can crystallise in renal tubules - hydrate"],
      ],
    },
    {
      heading: "Differential diagnosis of genital ulcer disease",
      columns: ["Feature", "Syphilis", "Herpes", "Chancroid", "LGV", "Donovanosis"],
      rows: [
        ["Organism", "Treponema pallidum", "HSV-2 / HSV-1", "Haemophilus ducreyi", "C. trachomatis L1-L3", "Klebsiella granulomatis"],
        ["Incubation", "9-90 days (mean 21)", "2-7 days", "3-10 days", "3-30 days", "1-4 weeks (up to 6 months)"],
        ["Ulcer", "Single, indurated, clean base", "Multiple grouped vesicles then shallow erosions", "Multiple, soft, ragged, purulent", "Small, transient, often unnoticed", "Beefy red, bleeds on touch, painless"],
        ["Pain", "Painless", "Painful", "Very painful", "Painless", "Painless"],
        ["Nodes", "Bilateral, rubbery, non-tender", "Bilateral, tender", "Unilateral, tender, suppurative bubo", "Large painful bubo, groove sign", "Pseudobubo (subcutaneous granuloma)"],
        ["Test", "Dark-field, RPR + TPHA", "HSV PCR", "Culture/PCR (rarely available)", "Chlamydia NAAT with LGV genotyping", "Donovan bodies on tissue smear"],
        ["Treatment", "Benzathine penicillin 2.4 MU IM", "Acyclovir 400 mg TDS 7-10 days", "Azithromycin 1 g single", "Doxycycline 100 mg BD 21 days", "Azithromycin 1 g weekly 3+ weeks"],
      ],
    },
    {
      heading: "Bedside investigations of vaginal discharge",
      columns: ["Test", "Bacterial vaginosis", "Trichomoniasis", "Candidiasis", "Normal"],
      rows: [
        ["Discharge", "Thin, grey, homogeneous, fishy", "Frothy, yellow-green, profuse", "Thick, white, curdy", "Clear or white, scant"],
        ["pH", "Over 4.5", "Over 4.5 (often 5-6)", "4.0-4.5", "3.8-4.5"],
        ["Whiff test (10% KOH)", "Positive", "Often positive", "Negative", "Negative"],
        ["Microscopy", "Clue cells over 20%, few lactobacilli", "Motile trichomonads (sensitivity 50-60%), many WBC", "Budding yeast, pseudohyphae on KOH", "Lactobacilli, few WBC"],
        ["Partner treatment", "No", "Yes", "No (unless symptomatic balanitis)", "Not applicable"],
      ],
    },
    {
      heading: "Syndromic vs aetiological management",
      columns: ["Aspect", "Syndromic", "Aetiological"],
      rows: [
        ["Basis", "Symptoms and signs grouped into a syndrome", "Identification of the organism"],
        ["Timing of treatment", "First visit", "After results (unless point-of-care)"],
        ["Cost and setting", "Cheap, any PHC, paramedics can use", "Needs laboratory, trained staff, NAAT expensive"],
        ["Accuracy", "Good for urethral discharge and GUD; poor for cervicitis", "High; detects asymptomatic infection"],
        ["Drawbacks", "Overtreatment, resistance, misses asymptomatic cases", "Delay, loss to follow-up, cost"],
        ["Best use", "Primary care, where no lab exists", "DSRC, medical college, treatment failure, surveillance"],
      ],
    },
  ],
  redFlags: [
    "Acute painful scrotal swelling in a young man - suspect testicular torsion, urgent surgical exploration",
    "Lower abdominal pain with a positive pregnancy test or shock - ectopic pregnancy until proven otherwise",
    "PID with tubo-ovarian abscess, high fever, vomiting or no response to oral therapy in 72 hours",
    "Fever with arthritis and pustular skin lesions - disseminated gonococcal infection needing IV ceftriaxone",
    "Primary herpes with urinary retention, severe headache or neck stiffness",
    "Purulent conjunctivitis in a neonate - ophthalmia neonatorum",
    "STI in a prepubertal child - sexual abuse, report under POCSO",
    "Non-healing genital ulcer beyond 2-3 weeks of treatment - biopsy for carcinoma and test for HIV",
  ],
  pearls: [
    "NACO kits 1-7 colours in order: **Grey, Green, White, Blue, Red, Yellow, Black** - 'Good Girls Wear Blue, Red, Yellow, Black'.",
    "Painful ulcer: herpes and chancroid; painless ulcer: syphilis, LGV and donovanosis.",
    "The **groove sign** is LGV; the **pseudobubo** is donovanosis; the **button-like induration** is syphilis.",
    "Gram stain with **2 or more PMN per oil-immersion field** confirms urethritis in a man.",
    "Partners are treated for trichomoniasis and cervicitis, not for BV or candidiasis.",
    "The **4 Cs** of STI care: compliance, counselling, condoms, contact tracing.",
    "Aspirate a bubo through healthy skin - never incise.",
    "Doxycycline is now the preferred chlamydia drug (WHO 2024); azithromycin in pregnancy.",
    "Every STI patient gets an **HIV and syphilis test** - an STI is an HIV risk marker.",
  ],
  mcqs: [
    {
      id: "infectious-fever-sti-syndromic-q1",
      stem: "A 26-year-old truck driver has purulent urethral discharge for 3 days. At the PHC there is no laboratory. Which NACO kit should be given?",
      options: [
        "Kit 2 (Green) - secnidazole and fluconazole",
        "Kit 1 (Grey) - azithromycin 1 g and cefixime 400 mg",
        "Kit 3 (White) - benzathine penicillin and azithromycin",
        "Kit 7 (Black) - doxycycline for 21 days and azithromycin",
      ],
      answer: 1,
      explanation:
        "Urethral discharge is covered by the Grey kit, which treats both gonorrhoea (cefixime) and chlamydia (azithromycin) at the first visit. The Green kit is for vaginitis, the White kit is for non-herpetic genital ulcer, and the Black kit is for inguinal bubo.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-sti-syndromic-q2",
      stem: "A woman has thin grey vaginal discharge with a fishy odour, pH 5.0, and clue cells on wet mount. Which statement about her management is correct?",
      options: [
        "Her partner must be treated to prevent recurrence",
        "Fluconazole 150 mg single dose is the treatment of choice",
        "Metronidazole 500 mg twice daily for 7 days is appropriate, and the partner need not be treated",
        "She needs ceftriaxone for presumed cervicitis",
      ],
      answer: 2,
      explanation:
        "These are Amsel criteria for bacterial vaginosis, an endogenous loss of lactobacilli treated with metronidazole for 7 days; partner treatment does not reduce recurrence. Fluconazole treats candidiasis, which has a normal pH, and ceftriaxone is for gonococcal cervicitis, not suggested here.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-sti-syndromic-q3",
      stem: "A man has multiple painful, soft, ragged genital ulcers with a purulent base and a tender, fluctuant unilateral inguinal node. The most likely organism is:",
      options: [
        "Haemophilus ducreyi",
        "Treponema pallidum",
        "Klebsiella granulomatis",
        "Chlamydia trachomatis L2",
      ],
      answer: 0,
      explanation:
        "Painful soft ragged ulcers with a suppurative unilateral bubo are classic chancroid caused by H. ducreyi. Syphilis gives a single painless indurated ulcer, donovanosis a painless beefy-red ulcer with a pseudobubo, and LGV a transient painless ulcer followed by a large bubo with the groove sign.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-sti-syndromic-q4",
      stem: "According to WHO 2024 STI treatment recommendations, the preferred treatment for uncomplicated urogenital chlamydia in a non-pregnant adult is:",
      options: [
        "Azithromycin 1 g orally single dose",
        "Amoxicillin 500 mg thrice daily for 7 days",
        "Ceftriaxone 1 g IM single dose",
        "Doxycycline 100 mg orally twice daily for 7 days",
      ],
      answer: 3,
      explanation:
        "WHO 2024 (and CDC 2021) prefer doxycycline for 7 days because it cures rectal chlamydia better than single-dose azithromycin. Azithromycin remains the choice in pregnancy, amoxicillin is a pregnancy alternative only, and ceftriaxone does not treat intracellular chlamydia.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-sti-syndromic-q5",
      stem: "A 19-year-old man has sudden severe left testicular pain for 2 hours with a high-riding testis and absent cremasteric reflex. He had unprotected sex last week. The next step is:",
      options: [
        "Give the Grey kit and review in 7 days",
        "Urgent surgical referral for possible testicular torsion",
        "Ultrasound after 48 hours if pain persists",
        "Doxycycline for 10 days for epididymo-orchitis",
      ],
      answer: 1,
      explanation:
        "Sudden pain, a high-riding testis and loss of the cremasteric reflex mean torsion, a surgical emergency where testicular salvage falls sharply after 6 hours. Treating it as STI-related epididymo-orchitis with the Grey kit or doxycycline, or delaying imaging, risks losing the testis.",
      difficulty: "moderate",
    },
  ],
  theory: [
    {
      id: "infectious-fever-sti-syndromic-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Describe the syndromic approach to sexually transmitted infections. Give the NACO colour-coded kits and outline the management of genital ulcer disease.",
      openingLines: [
        "Syndromic management treats an STI on the first visit by the group of symptoms and signs (syndrome) using a flow chart that covers all common causes, without waiting for laboratory confirmation.",
        "India delivers it through Suraksha Clinics (DSRCs) under NACP Phase V using seven colour-coded pre-packed kits, completed by the 4 Cs - compliance, counselling, condoms and contact treatment.",
      ],
      answer: [
        {
          heading: "Rationale and burden",
          points: [
            "About 374 million curable STIs a year globally; about 6% of Indian adults have an STI/RTI.",
            "STIs raise HIV risk 2-4 fold and cause infertility, ectopic pregnancy and congenital syphilis.",
            "Syndromic approach: same-day treatment, cheap, no laboratory; drawbacks - overtreatment, misses asymptomatic and cervical infection.",
          ],
        },
        {
          heading: "The syndromes and NACO kits",
          points: [
            "Kit 1 Grey - urethral discharge/cervicitis: azithromycin 1 g + cefixime 400 mg.",
            "Kit 2 Green - vaginitis: secnidazole 2 g + fluconazole 150 mg.",
            "Kit 3 White - non-herpetic GUD: benzathine penicillin 2.4 MU IM + azithromycin 1 g; Kit 4 Blue - same with penicillin allergy: doxycycline 100 mg BD 15 days + azithromycin 1 g.",
            "Kit 5 Red - herpetic GUD: acyclovir 400 mg TDS 7 days.",
            "Kit 6 Yellow - PID: cefixime 400 mg + metronidazole 400 mg BD 14 days + doxycycline 100 mg BD 14 days; Kit 7 Black - bubo: doxycycline 100 mg BD 21 days + azithromycin 1 g.",
          ],
        },
        {
          heading: "Genital ulcer - history and examination",
          points: [
            "Sexual history with 5 Ps; pain, number, vesicles, recurrences, nodes.",
            "Painful grouped vesicles - herpes; single painless indurated - syphilis; painful ragged with bubo - chancroid; beefy red - donovanosis; transient with groove sign - LGV.",
          ],
        },
        {
          heading: "Genital ulcer - flow chart",
          points: [
            "Vesicles or recurrent history: treat herpes (Kit 5).",
            "No vesicles: treat syphilis and chancroid together (Kit 3, or Kit 4 if allergic and not pregnant).",
            "Review at 7 days; non-healing ulcer - biopsy, dark-field, HSV PCR, HIV test, refer.",
          ],
        },
        {
          heading: "Aetiological confirmation",
          points: [
            "RPR/VDRL with TPHA, HSV PCR, Donovan bodies on tissue smear; HIV test for all.",
          ],
        },
        {
          heading: "The 4 Cs and partner management",
          points: [
            "Partners in last 3 months (primary syphilis) treated epidemiologically; abstain 7 days; condoms provided.",
            "Follow-up syphilis serology at 6 and 12 months; HIV retest at 3 months.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart of genital ulcer disease: ulcer, vesicles yes or no, Kit 5 vs Kit 3/4, review at 7 days",
        "Table of NACO kits 1-7 with colours",
      ],
      markSplit: [
        { part: "Definition, rationale, advantages and drawbacks", marks: 2 },
        { part: "NACO kits table", marks: 3 },
        { part: "GUD flow chart and differential", marks: 3 },
        { part: "4 Cs, partner management, follow-up", marks: 2 },
      ],
      keywords: ["syndromic management", "NACO kits", "genital ulcer", "benzathine penicillin", "partner notification"],
    },
    {
      id: "infectious-fever-sti-syndromic-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Differentiate between the causes of vaginal discharge: bacterial vaginosis, trichomoniasis and candidiasis.",
      openingLines: [
        "Vaginal discharge is the commonest RTI syndrome in women; most is due to endogenous vaginitis (bacterial vaginosis, candidiasis) rather than an STI.",
        "Only trichomoniasis among the three is sexually transmitted and needs partner treatment.",
      ],
      answer: [
        {
          heading: "Clinical features",
          points: [
            "BV: thin grey homogeneous fishy discharge, little itch; trichomoniasis: frothy yellow-green, soreness, strawberry cervix; candidiasis: thick curdy white, intense itch, normal pH.",
          ],
        },
        {
          heading: "Bedside tests",
          points: [
            "pH over 4.5 in BV and trichomoniasis; 4.0-4.5 in candida.",
            "Whiff positive in BV; clue cells over 20% (Amsel 3 of 4; Nugent 7-10); motile trichomonads on saline mount; pseudohyphae on KOH.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "BV: metronidazole 500 mg BD 7 days; trichomoniasis: metronidazole 500 mg BD 7 days (women) plus partner; candida: fluconazole 150 mg single dose. Syndromic: Kit 2 Green.",
          ],
        },
      ],
      mustDraw: ["Three-column comparison table of BV, trichomoniasis and candidiasis"],
      markSplit: [
        { part: "Clinical features", marks: 2 },
        { part: "Bedside tests", marks: 2 },
        { part: "Treatment and partner", marks: 1 },
      ],
      keywords: ["Amsel criteria", "clue cells", "whiff test", "trichomonas", "candida"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Sexually transmitted infections: overview and clinical approach",
    "NACO. National Guidelines on Prevention, Management and Control of Reproductive Tract Infections including Sexually Transmitted Infections, 2014",
    "NACO. National AIDS and STD Control Programme Phase V (2021-2026) strategy document",
    "WHO. Guidelines for the management of symptomatic sexually transmitted infections, 2021",
    "WHO. Recommendations for the treatment of Neisseria gonorrhoeae, Chlamydia trachomatis and Treponema pallidum (syphilis), 2024",
    "CDC. Sexually Transmitted Infections Treatment Guidelines, 2021 (MMWR Recomm Rep 70(4))",
    "CDC. Clinical guidelines on the use of doxycycline post-exposure prophylaxis for bacterial STI prevention, 2024",
  ],
});

topics.push({
  id: "infectious-fever-syphilis-detail",
  title: "Syphilis: stages, serology interpretation and treatment",
  oneLiner:
    "**Syphilis** is a chronic systemic infection by the spirochaete **Treponema pallidum subsp. pallidum**, spread sexually and **vertically**, that passes through **primary (chancre), secondary (rash, condylomata lata), latent and tertiary (gumma, cardiovascular, neurosyphilis)** stages; it is diagnosed by pairing a **non-treponemal test (VDRL/RPR, titre follows activity)** with a **treponemal test (TPHA/TPPA/EIA, positive for life)** and cured with **benzathine penicillin G 2.4 MU IM** - once for early syphilis, weekly x 3 for late latent - while **neurosyphilis needs IV aqueous penicillin for 10-14 days**.",
  frequency: "common",
  keywords: [
    "Treponema pallidum",
    "lues",
    "chancre",
    "condylomata lata",
    "VDRL",
    "RPR",
    "TPHA",
    "TPPA",
    "FTA-ABS",
    "prozone phenomenon",
    "biological false positive",
    "serofast",
    "neurosyphilis",
    "tabes dorsalis",
    "Argyll Robertson pupil",
    "congenital syphilis",
    "Hutchinson triad",
    "Jarisch-Herxheimer reaction",
    "benzathine penicillin",
    "penicillin desensitisation",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Syphilis** is caused by **Treponema pallidum subsp. pallidum**, a thin, motile spirochaete that cannot be cultured on artificial media, divides slowly (every **30-33 hours**) and is killed by tiny, sustained penicillin levels - which is why a **long-acting depot penicillin** works. [Harrison 22e]",
        "WHO estimated about **8 million new adult syphilis infections in 2022** worldwide, a rise of over 1 million since 2020, with congenital syphilis still a leading infectious cause of **stillbirth**. [WHO 2024]",
        "In India, syphilis sero-positivity in antenatal women in national sentinel surveillance is **well under 1%**, but it is several-fold higher in **female sex workers, MSM, transgender people and injecting drug users**; NACO screens all ANC attendees and key populations. [NACO 2023]",
        "Transmission is mainly **sexual** (about 30-60% of partners of a person with early syphilis become infected), **vertical** (transplacental at any stage of pregnancy) and rarely through **blood transfusion** (all donated blood is screened). [Harrison 22e]",
        "Infectiousness is highest in the **first 1-2 years** (primary, secondary and early latent stages with mucocutaneous lesions); late latent syphilis is not sexually infectious but can still pass to the fetus. [CDC 2021]",
        "Syphilis is an **HIV co-factor** - genital ulcers increase HIV acquisition, and HIV co-infection makes syphilis more aggressive, with earlier neurosyphilis. [Harrison 22e]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**Organism**: T. pallidum has very few outer-membrane proteins (a 'stealth pathogen'), which allows immune evasion and decades of latency. [Harrison 22e]",
        "**Related treponemes** cause the non-venereal treponematoses - **yaws (T. pertenue)**, **bejel** and **pinta** - which give identical serology; India was declared **yaws-free by WHO in 2016**. [WHO 2016]",
        "**Risk factors**: unprotected sex, multiple partners, sex work, MSM, transgender women, HIV infection, drug and alcohol use, and a partner with any STI. [CDC 2021]",
        "**Congenital syphilis risk** rises with untreated maternal early syphilis (fetal infection in up to **70-100% of primary and secondary**), lack of ANC screening, and treatment less than **30 days before delivery**. [CDC 2021]",
        "**Re-infection** is common: past treated syphilis gives no protective immunity. [Harrison 22e]",
      ],
    },
    {
      heading: "Pathophysiology",
      points: [
        "Treponemes penetrate intact mucosa or abraded skin and **disseminate within hours** through lymphatics and blood - syphilis is a systemic infection from the start, even while the chancre is the only sign. [Harrison 22e]",
        "The basic lesion is an **obliterative endarteritis** with perivascular **plasma cells and lymphocytes**; ischaemia of the overlying tissue produces the **indurated, painless ulcer** of the chancre. [Harrison 22e]",
        "**Secondary syphilis** reflects haematogenous spread and immune-complex deposition - rash, mucous patches, lymphadenopathy, hepatitis, **membranous nephropathy** and early meningitis. [Harrison 22e]",
        "**Latency** follows when cell-mediated immunity controls but does not eradicate the organism; secondary relapses occur mainly in the first year. [Harrison 22e]",
        "**Tertiary syphilis** is a slow destructive inflammation: **gummas** (granulomas with central necrosis) from delayed hypersensitivity; **aortitis** from endarteritis of the **vasa vasorum**, weakening the media of the **ascending aorta** (tree-bark intima, aneurysm, aortic regurgitation, coronary ostial stenosis). [Harrison 22e]",
        "**Neurosyphilis** begins with CSF invasion in the first months in up to 40% of untreated people; it may clear, cause **early meningovascular** disease (stroke in a young adult), or progress decades later to **parenchymal** disease - general paresis (cortex) and **tabes dorsalis** (dorsal columns and dorsal roots). [Harrison 22e]",
        "**Non-treponemal antibodies** (reagin) react to **cardiolipin-lecithin-cholesterol** released from damaged host cells and treponemes - so they track disease activity and also rise in other tissue-damaging illnesses (biological false positives). [Harrison 22e]",
      ],
    },
    {
      heading: "Classification - stages",
      points: [
        "**Primary**: chancre at the inoculation site after **9-90 days (mean 21)**, with regional lymphadenopathy; heals in **3-6 weeks** even without treatment. [CDC 2021]",
        "**Secondary**: **4-10 weeks after the chancre** - generalised rash, mucocutaneous lesions, lymphadenopathy and systemic features; resolves untreated in weeks. [Harrison 22e]",
        "**Early latent**: positive serology without symptoms, infection acquired within **1 year (CDC) or 2 years (WHO)**; **late latent**: beyond that or of unknown duration - treated as late latent. [WHO 2024]",
        "**Tertiary** (about one-third of untreated): gummatous (15%), cardiovascular (10%) and late neurosyphilis (general paresis, tabes) appearing **years to decades** later. [Harrison 22e]",
        "**Neurosyphilis, ocular syphilis and otosyphilis** can occur at **any stage**, so they are classified separately and treated with IV penicillin. [CDC 2021]",
        "**Congenital**: **early** (signs before 2 years) and **late** (after 2 years), plus stigmata. [CDC 2021]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**Primary**: a single painless genital sore (oral or anal in receptive sex) that the patient may not notice, especially on the cervix or in the rectum. [Harrison 22e]",
        "**Secondary**: a non-itchy rash, sore throat, fever, malaise, headache, patchy hair loss, weight loss and joint pain - the great imitator, often seen first by a dermatologist or physician. [Harrison 22e]",
        "**Early neurosyphilis**: headache, neck stiffness, cranial nerve palsies (VII, VIII), **sudden hearing loss and tinnitus (otosyphilis)**, blurred vision or red eye (**ocular syphilis - uveitis**), and stroke in a young adult. [CDC 2021]",
        "**General paresis**: personality change, poor memory, grandiosity, psychosis and dementia in middle age - a reversible cause of dementia that is worth testing for. [Harrison 22e]",
        "**Tabes dorsalis**: **lightning (lancinating) pains** in the legs, sensory ataxia worse in the dark, bladder dysfunction, impotence and visceral crises. [Harrison 22e]",
        "**Cardiovascular**: dyspnoea and angina from aortic regurgitation or ostial stenosis, typically **15-30 years** after infection. [Harrison 22e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Chancre**: round, painless, clean-based ulcer with **button-like induration**, and **bilateral rubbery, non-tender inguinal nodes** ('bubon d'accompagnement'). [Harrison 22e]",
        "**Secondary rash**: symmetrical **macular, papular or papulosquamous** eruption, non-itchy, characteristically on the **palms and soles** (copper-coloured); also **condylomata lata** (moist flat papules in warm folds, teeming with treponemes), **mucous patches and snail-track ulcers**, and **moth-eaten alopecia**. [Harrison 22e]",
        "**Generalised lymphadenopathy** including **epitrochlear nodes** is a useful bedside clue to secondary syphilis. [Harrison 22e]",
        "**Argyll Robertson pupil**: small, irregular pupils that **accommodate but do not react to light** (light-near dissociation) - classic of tabes and general paresis. [Harrison 22e]",
        "**Tabes signs**: loss of vibration and position sense, **positive Romberg**, absent ankle reflexes, **Charcot neuropathic joints** (knee), and painless trophic ulcers. [Harrison 22e]",
        "**Cardiovascular**: early diastolic murmur of aortic regurgitation heard best at the **right sternal edge**, a 'tambour' A2, and an ascending aortic aneurysm on chest X-ray. [Harrison 22e]",
        "**Gumma**: painless nodule or punched-out ulcer of skin, bone (sabre tibia, palatal perforation), liver (hepar lobatum) or testis. [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Chancre**: herpes (painful, multiple), chancroid (painful, soft), donovanosis, fixed drug eruption, trauma and squamous cell carcinoma - see the STI syndromic topic for the full GUD table. [Harrison 22e]",
        "**Secondary rash**: pityriasis rosea (herald patch, spares palms and soles), drug eruption, guttate psoriasis, lichen planus, viral exanthem, acute HIV seroconversion and rickettsial fever. [Harrison 22e]",
        "**Palm and sole rash** list: secondary syphilis, rickettsial infections (Indian tick typhus), hand-foot-mouth disease, meningococcaemia, erythema multiforme and infective endocarditis (Janeway lesions). [Harrison 22e]",
        "**Neurosyphilis**: other chronic meningitis (TB, cryptococcal), stroke from vasculitis, other dementias, B12 deficiency (subacute combined degeneration mimics tabes) and diabetic pseudotabes. [Harrison 22e]",
        "**Aortitis**: Takayasu arteritis, giant-cell arteritis, Marfan syndrome and bicuspid aortopathy. [Braunwald 12e]",
      ],
    },
    {
      heading: "Investigations - serology interpretation",
      points: [
        "**Direct tests**: **dark-field microscopy** of chancre or condylomata serum (not oral lesions, which contain commensal treponemes) and **T. pallidum PCR** - useful before antibodies appear. [CDC 2021]",
        "**Non-treponemal tests (VDRL, RPR)** are cheap, **quantitative** (titre 1:2, 1:4...), become positive **about 1-4 weeks after the chancre**, peak in secondary syphilis (nearly 100% positive), and fall with treatment - used to **diagnose activity and monitor cure**. [Harrison 22e]",
        "**Treponemal tests (TPHA, TPPA, FTA-ABS, EIA/CLIA, rapid ICT)** detect specific antibody, turn positive slightly earlier, and stay **positive for life in about 85%** after treatment - they **confirm** but cannot judge activity or reinfection. [CDC 2021]",
        "**A fourfold (two-dilution) change** in VDRL/RPR titre - e.g. 1:32 to 1:8 - is the significant change; VDRL and RPR titres cannot be compared with each other, so use the same test and laboratory. [CDC 2021]",
        "**Prozone phenomenon**: very high antibody levels (secondary syphilis, pregnancy, HIV) block lattice formation and give a **false-negative undiluted VDRL** - ask the laboratory to **dilute the serum**. [Harrison 22e]",
        "**Biological false-positive VDRL** (usually titre 1:8 or less, TPHA negative): **acute** (under 6 months) - viral infections, malaria, pregnancy, recent immunisation; **chronic** - SLE, antiphospholipid syndrome, leprosy, injecting drug use, old age. [Harrison 22e]",
        "**Reverse-sequence algorithm**: treponemal EIA first; if positive, RPR; if EIA positive and RPR negative, do a **second treponemal test (TPPA)** to separate past treated syphilis or early infection from a false-positive EIA. [CDC 2021]",
        "**CSF examination** (lumbar puncture) indications: neurological, ocular or otic signs, tertiary disease, and **treatment failure**; CSF findings - **WBC over 5/microlitre**, raised protein, and **CSF-VDRL** (highly specific but only 30-70% sensitive); a negative **CSF FTA-ABS** largely excludes neurosyphilis. [CDC 2021]",
      ],
    },
    {
      heading: "Management in OPD - treatment by stage",
      points: [
        "**Primary, secondary and early latent**: **benzathine penicillin G 2.4 million units IM single dose** (1.2 MU into each buttock); the depot gives treponemicidal levels for about 2-3 weeks. [WHO 2024]",
        "**Late latent, latent of unknown duration and tertiary (non-neuro)**: **benzathine penicillin G 2.4 MU IM weekly for 3 weeks** (7.2 MU total); a gap of more than 9 days between doses in pregnancy (10-14 days may be accepted outside pregnancy) means restarting the series. [CDC 2021]",
        "**Penicillin allergy, not pregnant, early syphilis**: **doxycycline 100 mg BD for 14 days**; late latent: **doxycycline 100 mg BD for 28 days**; alternatives - **ceftriaxone 1 g IM/IV daily for 10-14 days**; azithromycin 2 g single dose is no longer advised because of macrolide resistance (A2058G mutation). [CDC 2021]",
        "**When benzathine penicillin is short** (recurrent global shortages): WHO 2024 lists **procaine penicillin 1.2 MU IM daily for 10 days**, ceftriaxone 1 g IM daily for 10 days, or doxycycline 100 mg BD 14 days for early syphilis - reserve BPG for **pregnant women**. [WHO 2024]",
        "**Before the injection**: explain the Jarisch-Herxheimer reaction, keep **adrenaline 1:1000 (0.5 mg IM)** ready, inject deep IM in the upper outer gluteal quadrant, and observe for **30 minutes**. [NACO 2014]",
        "**Never give benzathine penicillin IV** - accidental intravascular injection causes cardiorespiratory arrest and limb ischaemia (Nicolau syndrome). [Harrison 22e]",
        "Treat all partners (window: 90 days for any exposure, treat presumptively; longer windows by stage), test for **HIV**, and advise abstinence until lesions heal and 7 days after treatment. [CDC 2021]",
      ],
    },
    {
      heading: "Management in IPD - neurosyphilis and reactions",
      points: [
        "**Neurosyphilis, ocular and otic syphilis**: **aqueous crystalline penicillin G 18-24 million units per day** given as **3-4 MU IV every 4 hours** (or continuous infusion) for **10-14 days**. [CDC 2021]",
        "**Alternative for neurosyphilis** if adherence is assured: **procaine penicillin 2.4 MU IM daily plus probenecid 500 mg orally QID for 10-14 days**; ceftriaxone **2 g IV daily for 10-14 days** if penicillin allergic (or desensitise). [CDC 2021]",
        "Many experts add **benzathine penicillin 2.4 MU IM weekly for up to 3 weeks** after IV therapy to match the duration of late syphilis treatment. [CDC 2021]",
        "**Ocular syphilis** is managed with an ophthalmologist; topical or systemic **steroids** may be added for uveitis alongside, never instead of, IV penicillin. [CDC 2021]",
        "**Jarisch-Herxheimer reaction**: fever, rigors, myalgia, headache, tachycardia and mild hypotension starting **2-8 hours** after the first dose and settling within **24 hours**; seen in up to **50% of primary and 90% of secondary** syphilis; caused by cytokine release from lysed treponemes. [Harrison 22e]",
        "Manage J-H with **rest, fluids and paracetamol** - it is **not penicillin allergy**, so do not stop therapy; in pregnancy it may trigger **preterm contractions or fetal distress**, so monitor in the second half of pregnancy but never delay treatment. [CDC 2021]",
        "**Cardiovascular syphilis**: treat as late syphilis (some use the neurosyphilis regimen after CSF review) and refer for **aortic valve replacement or aneurysm repair**; treatment does not reverse established aortic damage. [Harrison 22e]",
      ],
    },
    {
      heading: "Special situations - pregnancy, congenital syphilis, HIV, allergy",
      points: [
        "**Pregnancy**: screen at the **first ANC visit** (and again at 28-32 weeks and delivery in high-risk women); treat with **penicillin only** - no alternative reliably treats the fetus; a second BPG dose **1 week later** is advised by some for early syphilis in pregnancy. [CDC 2021]",
        "**Penicillin-allergic pregnant woman**: **desensitise** (oral or IV graded doses in hospital) and then give BPG - doxycycline is contraindicated and macrolides do not cross the placenta reliably. [CDC 2021]",
        "**Early congenital syphilis** (under 2 years): **snuffles** (rhinitis teeming with treponemes), bullous rash on palms and soles (**syphilitic pemphigus**), hepatosplenomegaly, jaundice, anaemia, **osteochondritis with pseudoparalysis of Parrot**, and **Wimberger sign** (bilateral destruction of the medial proximal tibial metaphysis). [Harrison 22e]",
        "**Late congenital syphilis** (over 2 years): **Hutchinson triad - notched peg-shaped upper incisors, interstitial keratitis and VIII nerve deafness**; also saddle nose, **sabre shins**, frontal bossing, **mulberry molars**, rhagades and Clutton joints (painless knee effusions). [Harrison 22e]",
        "**Infant treatment** (proven or highly probable congenital syphilis): **aqueous crystalline penicillin G 50,000 U/kg IV every 12 hours for the first 7 days, then every 8 hours, for a total of 10 days**. [CDC 2021]",
        "**HIV**: same regimens as HIV-negative people, but serology may be atypical, CSF examination has a lower threshold (neurological symptoms, RPR 1:32 or more, CD4 under 350), and follow-up serology is at **3, 6, 9, 12 and 24 months**. [CDC 2021]",
        "**Penicillin allergy labels**: about **10% of people** report penicillin allergy but **over 90% are not truly allergic**; assess risk and consider **skin testing or a direct oral amoxicillin challenge** for low-risk histories - details in the antibiotic allergy topic. [CDC 2021]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "Without treatment about **one-third** of people develop tertiary disease; the rest stay latent or clear. [Harrison 22e]",
        "**Untreated syphilis in pregnancy** causes fetal loss or stillbirth, neonatal death, prematurity or congenital infection in **up to 50-80%** of cases. [WHO 2024]",
        "**Neurosyphilis** can leave permanent deafness, blindness, dementia or ataxia; outcomes are best when treated early (meningitis, uveitis). [CDC 2021]",
        "**Serofast state**: titre falls less than fourfold yet remains low and stable (often 1:8 or less) despite adequate treatment - common in late or HIV-associated syphilis; needs CSF review if any doubt, but not repeated treatment if reinfection is excluded. [CDC 2021]",
        "Early syphilis treated with penicillin has a cure rate of **over 95%**; penicillin resistance has **never** been documented in T. pallidum. [Harrison 22e]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "**Early syphilis**: repeat quantitative RPR/VDRL at **6 and 12 months**; a **fourfold fall within 12 months** is the expected response. [CDC 2021]",
        "**Latent syphilis**: repeat at **6, 12 and 24 months**; expect a fourfold fall within **12-24 months** if the initial titre was high. [CDC 2021]",
        "**Treatment failure or reinfection**: a **fourfold rise** in titre, persistent or recurring signs - test for HIV, do a lumbar puncture, and retreat (BPG weekly x 3 if CSF normal). [CDC 2021]",
        "**Neurosyphilis**: repeat CSF at 6 months if CSF cell count was raised and serology does not fall; normalisation of serum RPR is an acceptable marker in most patients on ART. [CDC 2021]",
        "Refer **ocular, otic, neuro and cardiovascular** syphilis, pregnant women with allergy (desensitisation), and infants of reactive mothers to tertiary care. [CDC 2021]",
      ],
    },
    {
      heading: "Prevention and programme link",
      points: [
        "**Universal ANC screening** with point-of-care treponemal or dual HIV/syphilis rapid tests, with **same-day treatment** of the mother and partner, is the key step to eliminating congenital syphilis. [WHO 2021]",
        "India's **elimination of vertical transmission of HIV and syphilis (EVTHS)** under NACP Phase V aims for over 95% ANC syphilis screening and treatment; WHO validates elimination when congenital syphilis is **50 or fewer per 100,000 live births**. [WHO 2021]",
        "**Blood safety**: every unit of donated blood is screened for syphilis along with HIV, HBV, HCV and malaria. [NACO 2023]",
        "**Condoms, partner notification and periodic screening** (every 3-6 months for MSM and sex workers) reduce community transmission. [CDC 2021]",
        "**Doxy-PEP** reduces new syphilis in high-risk MSM and transgender women (CDC 2024) but is not Indian programme policy. [CDC 2024]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**WHO 2024** syphilis treatment recommendations: benzathine penicillin remains first line; during shortages, **procaine penicillin, ceftriaxone or doxycycline** are alternatives for non-pregnant adults; early latent defined as under 2 years. [WHO 2024]",
        "**CDC 2021** STI guideline: ocular and otic syphilis managed as neurosyphilis; **CSF examination not needed** before treatment in isolated ocular or otic symptoms with a normal neurological examination; azithromycin removed as an alternative. [CDC 2021]",
        "**CDC 2023-2024**: benzathine penicillin (Bicillin L-A) shortage in the US - importation of **extencilline/lentocilin** allowed and doxycycline prioritised for non-pregnant patients. [CDC 2024]",
        "**CDC 2024**: doxycycline post-exposure prophylaxis guideline for STI prevention including syphilis in MSM and transgender women. [CDC 2024]",
        "**WHO 2024 Global progress report**: rising syphilis in adults and congenital syphilis; renewed call for dual HIV/syphilis testing in ANC. [WHO 2024]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic viva: **'VDRL is reactive 1:4 and TPHA is negative - interpret'** - a biological false positive; look for SLE, APS, pregnancy, malaria or leprosy. [Harrison 22e]",
        "**'VDRL negative, TPHA positive'**: past treated syphilis, very early primary syphilis, late latent or tertiary syphilis (non-treponemal tests may wane), or the prozone effect - repeat with dilution and clinical correlation. [CDC 2021]",
        "**Argyll Robertson pupil** = 'prostitute's pupil - accommodates but does not react'; **Hutchinson triad** = teeth, eyes (interstitial keratitis), ears (VIII nerve). [Harrison 22e]",
        "Common mistake: calling **J-H reaction an allergy** and switching to an inferior drug. [CDC 2021]",
        "Common mistake: treating neurosyphilis with **benzathine penicillin** - it does not achieve treponemicidal CSF levels. [Harrison 22e]",
        "Remember the **stage-dose rule**: early - BPG once; late latent - BPG weekly x 3; neuro - aqueous penicillin IV 10-14 days. [CDC 2021]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drug table - treatment of syphilis by stage",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Benzathine penicillin G (early: primary, secondary, early latent)", "2.4 MU deep IM (1.2 MU each buttock)", "Single dose", "Anaphylaxis, J-H reaction; never IV; observe 30 min"],
        ["Benzathine penicillin G (late latent, unknown duration, tertiary non-neuro)", "2.4 MU deep IM", "Weekly x 3 weeks (7.2 MU)", "Restart series if a dose is missed beyond 9-14 days"],
        ["Aqueous crystalline penicillin G (neuro, ocular, otic)", "3-4 MU IV every 4 h (18-24 MU/day)", "10-14 days", "Hospital stay; sodium/potassium load; J-H reaction"],
        ["Procaine penicillin + probenecid (neurosyphilis alternative)", "2.4 MU IM daily + probenecid 500 mg oral QID", "10-14 days", "Hoigne reaction (procaine), painful injections"],
        ["Doxycycline (allergy, not pregnant)", "100 mg oral BD", "14 days early; 28 days late latent", "Contraindicated in pregnancy and children under 8"],
        ["Ceftriaxone (alternative)", "1 g IM/IV daily (2 g IV for neuro)", "10-14 days", "Cross-reactivity small; less evidence"],
        ["Aqueous penicillin G (congenital)", "50,000 U/kg IV 12-hourly x 7 days, then 8-hourly", "10 days total", "Restart if more than 1 day missed"],
      ],
    },
    {
      heading: "Stages of syphilis",
      columns: ["Stage", "Timing", "Key features", "Infectious?"],
      rows: [
        ["Primary", "9-90 days (mean 21) after exposure", "Painless indurated chancre, bilateral rubbery nodes", "Yes - highly"],
        ["Secondary", "4-10 weeks after chancre", "Palm-sole rash, condylomata lata, mucous patches, alopecia, lymphadenopathy", "Yes - highly"],
        ["Early latent", "Under 1 year (CDC) / 2 years (WHO)", "Serology only; relapses possible", "Yes (relapse)"],
        ["Late latent", "Beyond early latent or unknown", "Serology only", "Not sexually; still vertically"],
        ["Tertiary", "Years to decades", "Gumma, aortitis, general paresis, tabes dorsalis", "No"],
        ["Neurosyphilis (any stage)", "Early or late", "Meningitis, stroke, uveitis, deafness, dementia, tabes", "Depends on stage"],
      ],
    },
    {
      heading: "Interpreting syphilis serology",
      columns: ["Non-treponemal (VDRL/RPR)", "Treponemal (TPHA/TPPA/EIA)", "Interpretation", "Action"],
      rows: [
        ["Reactive (any titre)", "Reactive", "Active syphilis (untreated or reinfection) or recently treated", "Stage clinically; treat unless documented adequate treatment with falling titre"],
        ["Reactive, low titre (1:8 or less)", "Non-reactive", "Biological false positive", "Look for SLE, APS, pregnancy, malaria, leprosy; repeat"],
        ["Non-reactive", "Reactive", "Past treated, very early, late latent/tertiary, or prozone", "Dilute serum; history of treatment; second treponemal test; treat if untreated"],
        ["Non-reactive", "Non-reactive", "No syphilis or very early incubation", "Repeat in 2-4 weeks if recent exposure or chancre; dark-field/PCR"],
        ["Fourfold rise after treatment", "Reactive", "Treatment failure or reinfection", "HIV test, CSF, retreat"],
      ],
    },
    {
      heading: "Differential diagnosis of secondary syphilis rash",
      columns: ["Condition", "Discriminating feature", "Palms and soles", "Test"],
      rows: [
        ["Secondary syphilis", "Non-itchy copper-coloured papules, mucous patches, nodes", "Yes", "RPR high titre + TPHA"],
        ["Pityriasis rosea", "Herald patch, Christmas-tree pattern, mild itch", "Usually spared", "Clinical; RPR to exclude syphilis"],
        ["Drug eruption", "New drug, itchy, eosinophilia", "Variable", "Drug history"],
        ["Guttate psoriasis", "Silvery scale, after streptococcal sore throat", "Rare", "ASO, clinical"],
        ["Rickettsial fever", "Acute febrile illness, eschar (scrub) or tick bite", "Yes", "Weil-Felix / IgM ELISA"],
        ["Acute HIV", "Fever, pharyngitis, ulcers, recent exposure", "Occasional", "HIV p24 antigen / RNA"],
      ],
    },
    {
      heading: "CSF findings in neurosyphilis",
      columns: ["Parameter", "Neurosyphilis finding", "Meaning"],
      rows: [
        ["Cell count", "Over 5 WBC/microlitre (lymphocytic)", "Active inflammation; first to fall after treatment"],
        ["Protein", "Over 45 mg/dL", "Non-specific"],
        ["CSF-VDRL", "Reactive in 30-70%", "Highly specific - confirms; negative does not exclude"],
        ["CSF FTA-ABS", "Reactive", "Sensitive - negative largely excludes"],
        ["HIV co-infection", "Pleocytosis may be from HIV itself", "Use a higher cut-off (over 20 cells) if on effective ART"],
      ],
    },
  ],
  redFlags: [
    "Visual blurring, red eye or uveitis in a patient with positive syphilis serology - ocular syphilis, IV penicillin",
    "Sudden hearing loss or tinnitus with reactive serology - otosyphilis",
    "Headache, neck stiffness, cranial nerve palsy or stroke in a young adult with syphilis",
    "Reactive syphilis serology in pregnancy - treat the same day with penicillin and refer if allergic",
    "Infant of a reactive mother with snuffles, rash, hepatosplenomegaly or pseudoparalysis",
    "New aortic regurgitation murmur or ascending aortic aneurysm with reactive serology",
    "Fourfold titre rise after treatment - failure or reinfection, needs HIV test and CSF",
  ],
  pearls: [
    "Non-treponemal tests track **activity**; treponemal tests confirm **ever-infection** and stay positive for life.",
    "Only a **fourfold (two-dilution) change** in VDRL/RPR titre is meaningful.",
    "**Prozone**: false-negative VDRL with very high antibody - dilute the serum.",
    "Early syphilis: **BPG 2.4 MU once**; late latent: **weekly x 3**; neurosyphilis: **IV aqueous penicillin 10-14 days**.",
    "Pregnancy + penicillin allergy = **desensitise**; no substitute treats the fetus.",
    "**J-H reaction** is cytokine release, not allergy - continue treatment.",
    "Hutchinson triad: **teeth, interstitial keratitis, VIII nerve deafness**.",
    "Argyll Robertson pupil: **accommodation reflex present, light reflex absent**.",
    "Syphilitic aortitis hits the **ascending aorta** (vasa vasorum) - atherosclerosis hits the abdominal aorta.",
  ],
  mcqs: [
    {
      id: "infectious-fever-syphilis-detail-q1",
      stem: "A 28-year-old antenatal woman has VDRL reactive at 1:2 and TPHA non-reactive. She is asymptomatic. The most likely interpretation is:",
      options: [
        "Late latent syphilis needing benzathine penicillin weekly for 3 weeks",
        "Prozone phenomenon masking secondary syphilis",
        "Biological false-positive non-treponemal test",
        "Serofast state after previous treatment",
      ],
      answer: 2,
      explanation:
        "A low-titre reactive VDRL with a negative specific treponemal test is a biological false positive; pregnancy itself is a known cause, as are SLE and antiphospholipid syndrome. Late latent syphilis and the serofast state both require a reactive treponemal test, and the prozone effect causes a false-negative, not a false-positive, VDRL.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-syphilis-detail-q2",
      stem: "A man with secondary syphilis develops fever, rigors and myalgia 4 hours after benzathine penicillin. Blood pressure is 110/70 mmHg and there is no wheeze or urticaria. The correct action is:",
      options: [
        "Reassure, give paracetamol and continue the planned treatment",
        "Label him penicillin allergic and switch to doxycycline",
        "Give IM adrenaline and admit to ICU",
        "Start IV ceftriaxone for presumed bacterial sepsis",
      ],
      answer: 0,
      explanation:
        "This is the Jarisch-Herxheimer reaction, cytokine release from lysed treponemes, common in secondary syphilis and self-limiting within 24 hours. It is not an allergy, so labelling him allergic or switching to doxycycline is wrong; adrenaline is for anaphylaxis with urticaria, wheeze or shock, which are absent here.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-syphilis-detail-q3",
      stem: "A 40-year-old man with reactive RPR (1:32) and TPHA has bilateral anterior uveitis and blurred vision. Normal neurological examination otherwise. Which treatment is recommended?",
      options: [
        "Benzathine penicillin 2.4 MU IM single dose",
        "Benzathine penicillin 2.4 MU IM weekly for 3 weeks",
        "Doxycycline 100 mg twice daily for 28 days",
        "Aqueous crystalline penicillin G 3-4 MU IV every 4 hours for 10-14 days",
      ],
      answer: 3,
      explanation:
        "Ocular syphilis is managed as neurosyphilis at any stage, needing IV aqueous penicillin 18-24 MU/day for 10-14 days. Benzathine penicillin, whether single or weekly, does not give treponemicidal levels in the eye or CSF, and doxycycline is only an allergy alternative for non-neurological syphilis.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-syphilis-detail-q4",
      stem: "A pregnant woman at 16 weeks with early latent syphilis gives a history of urticaria and wheeze after penicillin. The best management is:",
      options: [
        "Erythromycin 500 mg four times daily for 14 days",
        "Penicillin desensitisation followed by benzathine penicillin",
        "Doxycycline 100 mg twice daily for 14 days",
        "Defer treatment until after delivery",
      ],
      answer: 1,
      explanation:
        "Penicillin is the only drug proven to treat the mother and prevent congenital syphilis, so a truly allergic pregnant woman is desensitised and then given benzathine penicillin. Erythromycin does not reliably cross the placenta, doxycycline is contraindicated in pregnancy, and deferring treatment risks fetal infection or stillbirth.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-syphilis-detail-q5",
      stem: "Bilateral symmetrical destruction of the medial proximal tibial metaphyses on an infant's X-ray is called:",
      options: [
        "Hutchinson sign",
        "Higoumenakis sign",
        "Wimberger sign",
        "Parrot nodes",
      ],
      answer: 2,
      explanation:
        "Wimberger sign is the bilateral medial proximal tibial metaphyseal erosion of early congenital syphilis. Hutchinson teeth and the Higoumenakis sign (thickening of the medial clavicle) belong to late congenital syphilis, and Parrot nodes are frontal bossing of the skull rather than a tibial lesion.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "infectious-fever-syphilis-detail-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Describe the stages of acquired syphilis. Discuss the interpretation of serological tests and outline the treatment of syphilis including neurosyphilis.",
      openingLines: [
        "Syphilis is a chronic systemic infection by Treponema pallidum, transmitted sexually and vertically, progressing through primary, secondary, latent and tertiary stages, with neurosyphilis possible at any stage.",
        "Diagnosis rests on pairing a non-treponemal test (VDRL/RPR) that tracks activity with a treponemal test (TPHA/TPPA) that confirms infection; benzathine penicillin cures early disease.",
      ],
      answer: [
        {
          heading: "Epidemiology",
          points: [
            "About 8 million new adult infections in 2022 (WHO); high in key populations; India screens all ANC women under EVTHS.",
          ],
        },
        {
          heading: "Stages",
          points: [
            "Primary (9-90 days): painless indurated chancre, rubbery nodes.",
            "Secondary (4-10 weeks later): palm-sole rash, condylomata lata, mucous patches, alopecia, lymphadenopathy.",
            "Latent: early (under 1 year CDC, 2 years WHO) and late.",
            "Tertiary: gumma, aortitis (ascending aorta, AR), general paresis, tabes dorsalis, Argyll Robertson pupil.",
          ],
        },
        {
          heading: "Serology",
          points: [
            "Non-treponemal: VDRL/RPR, quantitative, fourfold change significant, falls with treatment; prozone and biological false positives.",
            "Treponemal: TPHA/TPPA/FTA-ABS/EIA, lifelong positivity, confirms.",
            "Interpretation table of the four combinations; reverse algorithm.",
            "CSF: WBC over 5, raised protein, CSF-VDRL specific, CSF FTA-ABS sensitive.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Early: BPG 2.4 MU IM once; late latent: weekly x 3.",
            "Neuro, ocular, otic: aqueous penicillin G 18-24 MU/day IV for 10-14 days.",
            "Allergy: doxycycline 14 or 28 days; pregnancy - desensitise.",
            "J-H reaction: anticipate, paracetamol, continue treatment.",
          ],
        },
        {
          heading: "Follow-up and partners",
          points: [
            "RPR at 6 and 12 months (early), 6-12-24 months (latent); fourfold fall expected; HIV test; partner treatment.",
          ],
        },
      ],
      mustDraw: [
        "Timeline of the natural history of untreated syphilis",
        "Serology interpretation 2 x 2 table (VDRL/RPR vs TPHA)",
      ],
      markSplit: [
        { part: "Stages and clinical features", marks: 3 },
        { part: "Serology interpretation", marks: 3 },
        { part: "Treatment including neurosyphilis and pregnancy", marks: 3 },
        { part: "Follow-up and partner management", marks: 1 },
      ],
      keywords: ["Treponema pallidum", "VDRL", "TPHA", "benzathine penicillin", "neurosyphilis"],
    },
    {
      id: "infectious-fever-syphilis-detail-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on congenital syphilis.",
      openingLines: [
        "Congenital syphilis is transplacental infection of the fetus by Treponema pallidum, possible at any stage of maternal syphilis but highest (70-100%) in untreated primary and secondary syphilis.",
        "It is fully preventable by first-visit ANC screening and same-day benzathine penicillin given at least 30 days before delivery.",
      ],
      answer: [
        {
          heading: "Early congenital (under 2 years)",
          points: [
            "Snuffles, bullous palm-sole rash, hepatosplenomegaly, jaundice, anaemia, osteochondritis, pseudoparalysis of Parrot, Wimberger sign.",
          ],
        },
        {
          heading: "Late congenital (over 2 years) and stigmata",
          points: [
            "Hutchinson triad (notched incisors, interstitial keratitis, VIII nerve deafness), saddle nose, sabre shins, mulberry molars, rhagades, Clutton joints, frontal bossing.",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "Infant RPR fourfold higher than mother's, dark-field/PCR of lesions, long-bone X-rays, CSF.",
          ],
        },
        {
          heading: "Treatment and prevention",
          points: [
            "Aqueous penicillin G 50,000 U/kg IV 12-hourly x 7 days then 8-hourly to 10 days.",
            "ANC screening (dual HIV/syphilis test), maternal BPG, partner treatment; EVTHS target 50 or fewer per 100,000 live births.",
          ],
        },
      ],
      mustDraw: ["Table of early vs late congenital syphilis features"],
      markSplit: [
        { part: "Early and late features", marks: 2 },
        { part: "Diagnosis", marks: 1 },
        { part: "Treatment and prevention", marks: 2 },
      ],
      keywords: ["Hutchinson triad", "Wimberger sign", "snuffles", "EVTHS", "aqueous penicillin"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Syphilis",
    "CDC. Sexually Transmitted Infections Treatment Guidelines, 2021 - Syphilis",
    "WHO. Recommendations for the treatment of Neisseria gonorrhoeae, Chlamydia trachomatis and Treponema pallidum (syphilis), 2024",
    "WHO. Global guidance on criteria and processes for validation: elimination of mother-to-child transmission of HIV, syphilis and hepatitis B, 2021",
    "WHO. Implementing the global health sector strategies on HIV, viral hepatitis and STIs - Global progress report, 2024",
    "NACO. National Guidelines on Prevention, Management and Control of RTI including STI, 2014",
    "Braunwald's Heart Disease, 12th edition, 2022 - Diseases of the aorta",
  ],
});

topics.push({
  id: "infectious-fever-vaccine-preventable-adult",
  title: "Adult vaccination and vaccine-preventable infections",
  oneLiner:
    "**Adult immunisation** extends protection beyond the childhood **UIP** with vaccines chosen by **age, risk condition, occupation, pregnancy and travel** - in India the core adult set is **Td/Tdap every 10 years, annual influenza, pneumococcal (PCV20, or PCV13/PCV15 followed by PPSV23), hepatitis B (0-1-6 months), recombinant zoster vaccine (RZV) at 50+, and HPV** - with live vaccines (MMR, varicella, yellow fever) **avoided in pregnancy and severe immunosuppression**.",
  frequency: "core",
  keywords: [
    "adult immunisation",
    "API adult vaccination",
    "Td",
    "Tdap",
    "influenza vaccine",
    "PCV13",
    "PCV15",
    "PCV20",
    "PCV21",
    "PPSV23",
    "hepatitis B vaccine",
    "anti-HBs",
    "Shingrix",
    "recombinant zoster vaccine",
    "HPV vaccine",
    "Cervavac",
    "Gardasil 9",
    "MMR",
    "typhoid conjugate vaccine",
    "RSV vaccine",
    "healthcare worker vaccination",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Adult immunisation** is the planned use of vaccines in people aged **19 years and over** to prevent infections whose risk rises with age, chronic disease, pregnancy, occupation or travel - complementing the childhood **Universal Immunization Programme (UIP)**. [API 2022]",
        "Vaccine-preventable diseases still cause a large adult burden: **influenza** causes about **290,000-650,000 respiratory deaths** a year globally, mostly in the elderly and chronically ill. [WHO 2023]",
        "India carries about **1.24 lakh new cervical cancer cases and 77,000 deaths each year** (GLOBOCAN 2020) - almost all caused by **HPV 16 and 18**, which vaccination prevents. [GLOBOCAN 2020]",
        "India has **intermediate hepatitis B endemicity (HBsAg about 2-4%, roughly 4 crore carriers)**; adults born before UIP added hepatitis B (2002-2011) are largely unvaccinated. [NVHCP 2018]",
        "**Herpes zoster** affects about **1 in 3 people** in their lifetime, with incidence rising sharply after 50; **post-herpetic neuralgia** occurs in 10-18%. [Harrison 22e]",
        "**Adult vaccine coverage in India is very low** - influenza and pneumococcal uptake among the elderly and people with diabetes is in the low single digits in Indian surveys such as LASI; India has **no national adult programme** apart from Td in pregnancy, TT/Td for injuries and a few outbreak campaigns. [LASI 2020]",
        "**Missed opportunities** are the main barrier: most unvaccinated adults saw a doctor in the past year; physician recommendation is the strongest predictor of uptake. [API 2022]",
      ],
    },
    {
      heading: "Indications and risk groups",
      points: [
        "**Age 50 and over**: RZV (zoster); pneumococcal vaccination is now recommended from **50 years** (ACIP 2024; earlier 65). [ACIP 2024]",
        "**Age 65 and over (60 in many Indian recommendations)**: annual influenza (high-dose or adjuvanted preferred) and pneumococcal; RSV vaccine at **75+ and 50-74 at increased risk** (ACIP 2024-2025). [ACIP 2025]",
        "**Chronic conditions** (diabetes, chronic heart, lung, liver or kidney disease, alcoholism, smoking): influenza, pneumococcal, hepatitis B, Tdap and zoster. [ACIP 2025]",
        "**Immunocompromised** (HIV, transplant, chemotherapy, biologics, steroids): inactivated vaccines (pneumococcal, influenza, hepatitis B, RZV from 19 years, HPV up to 26), **no live vaccines** when severely immunosuppressed. [IDSA 2013]",
        "**Asplenia or sickle cell disease**: pneumococcal, **meningococcal ACWY and B**, Hib and influenza - given **2 weeks before elective splenectomy** or 2 weeks after emergency splenectomy. [ACIP 2025]",
        "**Healthcare workers**: hepatitis B (with anti-HBs check), annual influenza, MMR and varicella if non-immune, and a Tdap dose. [ACIP 2011]",
        "**Pregnancy**: Td/Tdap and inactivated influenza; RSV (Abrysvo) at **32-36 weeks** where available. [ACIP 2023]",
        "**Others**: travellers (see the Travel medicine topic), MSM (hepatitis A, B, HPV), people who inject drugs, lab and veterinary workers (rabies PrEP), and close contacts of hepatitis B carriers. [ACIP 2025]",
      ],
    },
    {
      heading: "Immunology - why vaccines differ",
      points: [
        "**Live attenuated vaccines** (MMR, varicella, yellow fever, oral typhoid Ty21a, live zoster) replicate and give strong, long-lasting cellular and humoral immunity from 1-2 doses - but can cause disease in the **immunosuppressed and the fetus**. [Plotkin 8e]",
        "**Inactivated, subunit and toxoid vaccines** (influenza, hepatitis B, Td, HPV, RZV) cannot replicate, are safe in pregnancy and immunosuppression, but need **boosters and adjuvants**. [Plotkin 8e]",
        "**Polysaccharide vaccines (PPSV23, ViPS typhoid)** stimulate B cells **without T-cell help** - no memory, no booster effect, poor response under 2 years, no effect on carriage, and **hyporesponsiveness** after repeated doses. [Plotkin 8e]",
        "**Conjugate vaccines (PCV13/15/20/21, TCV, MenACWY-conjugate)** link the polysaccharide to a protein carrier (CRM197, tetanus toxoid), recruiting **T-helper cells** for memory, affinity maturation, mucosal IgA and **herd immunity** through reduced carriage. [Plotkin 8e]",
        "**Adjuvants** (aluminium salts; **AS01B** in Shingrix - MPL plus QS-21) activate innate immunity and overcome **immunosenescence**, which is why RZV gives over 90% efficacy even at 70+ while the older live zoster vaccine fell to about 38% at 70+. [NEJM 2016]",
        "**Immunosenescence** - thymic involution, fewer naive T cells and weaker germinal-centre reactions - explains poor influenza vaccine response in the elderly and the rationale for **high-dose (60 microgram HA per strain) or adjuvanted** influenza vaccine. [Harrison 22e]",
      ],
    },
    {
      heading: "Classification - vaccine types",
      points: [
        "**Live attenuated**: MMR, varicella, yellow fever, live attenuated hepatitis A (Biovac-A, India), oral typhoid Ty21a and LAIV; the oral cholera vaccines used in India are **inactivated, not live**. [Plotkin 8e]",
        "**Inactivated whole/split**: influenza (IIV), inactivated hepatitis A, rabies cell-culture vaccine, IPV, JE (JENVAC). [Plotkin 8e]",
        "**Subunit/recombinant**: hepatitis B (HBsAg), HPV (virus-like particles), **RZV (glycoprotein E + AS01B)**, recombinant influenza, RSV prefusion F. [Plotkin 8e]",
        "**Toxoid**: tetanus and diphtheria toxoids (Td), with acellular pertussis (Tdap). [Plotkin 8e]",
        "**Polysaccharide**: PPSV23, Vi polysaccharide typhoid; **conjugate**: PCV13, PCV15, PCV20, PCV21, typhoid conjugate (Typbar-TCV), MenACWY conjugate. [Plotkin 8e]",
        "**mRNA and viral vector**: COVID-19 vaccines (mRNA vaccines, and the adenovirus-vector Covishield; Covaxin is inactivated whole-virus) and a newer RSV mRNA vaccine. [WHO 2023]",
      ],
    },
    {
      heading: "Adult schedule - the core vaccines",
      points: [
        "**Td/Tdap**: adults with completed primary series - **one dose of Tdap**, then Td or Tdap **every 10 years**; unvaccinated adults - 3 doses at **0, 4 weeks and 6-12 months** (one as Tdap). India's UIP replaced TT with **Td in 2018**. [ACIP 2020]",
        "**Influenza**: **one dose every year** for all adults where feasible, prioritising 65+, chronic illness, pregnancy and HCWs; in most of India use the **WHO Southern Hemisphere** formulation **before the monsoon (April-June)**, while hill states with a winter peak may use the Northern Hemisphere vaccine. [API 2022]",
        "**Pneumococcal (ACIP 2024)**: all adults **50 and over** and at-risk adults 19-49 - **a single dose of PCV20 or PCV21**, OR **PCV15 followed by PPSV23 after at least 1 year** (8 weeks if immunocompromised, CSF leak or cochlear implant). [ACIP 2024]",
        "**Pneumococcal - Indian practice**: where only PCV13 and PPSV23 are available, give **PCV13 first, then PPSV23 after 8 weeks (high risk) or 1 year**; never give PPSV23 first if a conjugate is planned (blunts the response). [API 2022]",
        "**Hepatitis B**: **20 microgram (1 mL) IM deltoid at 0, 1 and 6 months**; dialysis and immunosuppressed adults: **40 microgram at 0, 1, 2 and 6 months**; ACIP now recommends universal vaccination for adults **19-59**, and 60+ with risk factors. [ACIP 2022]",
        "**Recombinant zoster vaccine (RZV, Shingrix)**: **2 doses of 0.5 mL IM, 2-6 months apart**, for all adults **50+** and immunocompromised adults **19+** (1-2 months apart if needed sooner); give even after previous zoster or live zoster vaccine (wait 8 weeks). Available in India since 2023. [ACIP 2022]",
        "**HPV**: routine at **9-14 years** (India: **Cervavac** quadrivalent, Gardasil, Gardasil 9); catch-up to **26 years**; **27-45 years by shared decision**; 3 doses (0, 1-2, 6 months) if started at 15+; WHO 2022 allows a **single dose** up to 20 years. [WHO 2022]",
        "**MMR**: adults born after vaccine introduction without evidence of immunity - 1 dose (2 doses 4 weeks apart for HCWs, students, travellers); **avoid pregnancy for 4 weeks** after. [ACIP 2013]",
        "**Varicella**: seronegative adults with no history of chickenpox - **2 doses 4-8 weeks apart**; priority for HCWs, teachers and women planning pregnancy. [ACIP 2007]",
        "**Typhoid conjugate vaccine**: **single 0.5 mL IM dose** for adults up to 45 years at risk (Indian food handlers, travellers); Vi polysaccharide needs revaccination every 3 years. [WHO 2018]",
      ],
    },
    {
      heading: "History - the vaccination assessment",
      points: [
        "Ask age, **records of childhood vaccines** (UIP card), previous adult doses and dates, and **previous chickenpox, zoster, hepatitis B** - documented history replaces vaccines for varicella and measles only when reliable. [API 2022]",
        "Ask **chronic disease** (diabetes, CKD, COPD, heart failure, cirrhosis), **immunosuppression** (steroid dose and duration, biologics, chemotherapy, HIV with CD4), and splenectomy. [IDSA 2013]",
        "Ask **pregnancy or plans for pregnancy** in women 15-49 - live vaccines are deferred and Tdap/influenza are offered during pregnancy. [ACIP 2025]",
        "Ask **occupation** (HCW, lab worker, veterinarian, sewage worker, food handler) and **lifestyle** (MSM, injecting drugs, multiple partners). [ACIP 2025]",
        "Ask **planned travel** (destination, duration, Hajj/Umrah) - see the Travel medicine topic. [WHO 2024]",
        "Ask **previous reactions**: anaphylaxis to a vaccine or component (gelatin, neomycin, yeast for hepatitis B, latex), Guillain-Barre syndrome within 6 weeks of an influenza vaccine. [ACIP 2025]",
      ],
    },
    {
      heading: "Examination and pre-vaccination assessment",
      points: [
        "**Temperature**: a **moderate or severe acute illness** (with or without fever) is a precaution - defer; **minor illness** (common cold, low-grade fever) is **not** a reason to delay. [ACIP 2025]",
        "Check the **deltoid site** (IM vaccines in the deltoid with a 25 mm needle; 38 mm for heavier adults) - **never the buttock** for hepatitis B or rabies, where fat reduces the response. [ACIP 2025]",
        "Assess **bleeding risk**: on anticoagulants or with haemophilia, use a **23-gauge or finer needle** and firm pressure for 2 minutes; IM injection is still acceptable. [ACIP 2025]",
        "Look for **signs of immunosuppression** (oral candida, wasting) before any live vaccine; screen CD4 in HIV (live vaccines like MMR/varicella only if **CD4 200 or more**). [IDSA 2013]",
        "Observe for **15 minutes** after any vaccine (30 minutes if previous allergy or syncope risk) with adrenaline 1:1000 ready - anaphylaxis occurs at about **1 per million doses**. [ACIP 2025]",
      ],
    },
    {
      heading: "Differential diagnosis - adverse events vs coincident illness",
      points: [
        "**Local reactions** (pain, redness, swelling) are common - up to **80% after RZV**, with myalgia and fever in 10-20% for 1-3 days; warn patients that this is a sign of immune response, not illness. [NEJM 2016]",
        "**Syncope** (vasovagal) after vaccination in adolescents and young adults must be distinguished from **anaphylaxis** - syncope has bradycardia, pallor and rapid recovery; anaphylaxis has urticaria, wheeze, hypotension with tachycardia. [ACIP 2025]",
        "**Guillain-Barre syndrome** after influenza vaccine is very rare (about **1-2 extra cases per million doses**) - lower than the GBS risk from influenza itself. [CDC 2024]",
        "**Shoulder injury related to vaccine administration (SIRVA)** follows injection too high into the subacromial bursa - inject into the thick central deltoid. [ACIP 2025]",
        "**Vaccine-strain disease**: varicella-like rash after varicella vaccine, and **yellow fever vaccine-associated viscerotropic disease** in older adults and those with thymus disease. [ACIP 2025]",
        "**Arthralgia** after rubella vaccine in adult women (up to 25%) is transient. [Plotkin 8e]",
      ],
    },
    {
      heading: "Investigations - serology before and after vaccination",
      points: [
        "**Anti-HBs 1-2 months after the 3rd dose** in HCWs, dialysis patients, HIV and sexual partners of carriers: **10 mIU/mL or more = protected**; non-responders get a **second full series** and retest; persistent non-responders are tested for **HBsAg** (chronic infection). [ACIP 2018]",
        "**Pre-vaccination HBsAg and anti-HBc** screening is advised in high-prevalence groups so that carriers are identified and linked to care. [ACIP 2022]",
        "**Varicella IgG** in adults with an uncertain history (most adults in India are immune); **measles/rubella IgG** in HCWs and women planning pregnancy without records. [ACIP 2013]",
        "**Hepatitis A IgG** before vaccination in adults over 40 from endemic regions - most Indian adults are already immune. [API 2022]",
        "**Dialysis patients**: check anti-HBs **every year** and give a booster if it falls **below 10 mIU/mL**. [ACIP 2001]",
        "Serology is **not** needed before or after influenza, pneumococcal, RZV, Td or HPV vaccination. [ACIP 2025]",
      ],
    },
    {
      heading: "Management in OPD - wound care and post-exposure",
      points: [
        "**Clean minor wound**: give Td/Tdap if fewer than 3 doses, unknown history, or **last dose 10 or more years ago**; no TIG. [ACIP 2020]",
        "**Dirty or major wound** (soil, faeces, puncture, burns, crush): Td/Tdap if fewer than 3 doses, unknown, or **last dose 5 or more years ago**; **TIG 250 IU IM** at a separate site if fewer than 3 doses or unknown. [ACIP 2020]",
        "**Hepatitis B exposure (needle-stick)**: vaccinated responder - nothing; unvaccinated - **HBIG 0.06 mL/kg plus vaccine series** within 24 hours; known non-responder - HBIG x 2 a month apart. [ACIP 2018]",
        "**Measles exposure in a non-immune adult**: MMR within **72 hours**, or immunoglobulin within 6 days if MMR is contraindicated (pregnancy, immunosuppressed). [ACIP 2013]",
        "**Varicella exposure**: vaccine within **3-5 days** in non-immune healthy adults; **VZIG** within 10 days for pregnant or immunocompromised non-immune contacts. [ACIP 2013]",
        "**Rabies PEP and PrEP** are covered in the Animal bite and rabies topic; WHO 2018 PrEP is **2 visits (day 0 and 7)**. [WHO 2018]",
      ],
    },
    {
      heading: "Rules of administration",
      points: [
        "**Any two inactivated vaccines**, or an inactivated and a live vaccine, can be given **on the same day or at any interval**; use separate sites at least 2.5 cm apart. [ACIP 2025]",
        "**Two live injectable vaccines** not given on the same day must be separated by **at least 4 weeks** (28 days). [ACIP 2025]",
        "**Interrupted series**: never restart - just continue where it stopped (exception: oral typhoid). [ACIP 2025]",
        "**Immunoglobulin or blood products** delay live MMR and varicella vaccines by **3-11 months** depending on the product; they do not affect inactivated vaccines. [ACIP 2025]",
        "**Cold chain**: most vaccines at **+2 to +8 C**, never frozen (freezing destroys aluminium-adjuvanted vaccines - use the **shake test**); India's **eVIN** digitally tracks stock and temperature. [MoHFW 2023]",
        "Record every dose (date, batch, site) - in India adult doses can be recorded on the **U-WIN** platform. [MoHFW 2024]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: **Td** (2 doses 4 weeks apart in the first pregnancy, 1 booster if vaccinated within 3 years, per UIP) and **Tdap at 27-36 weeks** in each pregnancy (ACIP) to protect the newborn from pertussis; inactivated influenza in any trimester; hepatitis B if at risk; **no MMR, varicella, HPV or live vaccines**. [ACIP 2025]",
        "**Elderly**: influenza (high-dose/adjuvanted preferred at 65+), pneumococcal, RZV, Tdap and RSV (75+); response is weaker but severe-disease prevention is greatest. [ACIP 2025]",
        "**CKD and dialysis**: hepatitis B **40 microgram at 0, 1, 2, 6 months** (or 4 doses of double dose), pneumococcal, influenza, RZV - vaccinate **before dialysis** when response is better. [ACIP 2001]",
        "**Diabetes**: hepatitis B for adults under 60 (and 60+ by assessment), influenza, pneumococcal, Tdap and RZV - people with diabetes have higher mortality from influenza and pneumococcal disease. [ADA 2025]",
        "**Immunosuppression**: give live vaccines **at least 4 weeks before** starting immunosuppression and inactivated **at least 2 weeks before**; high-dose steroids (**prednisolone 20 mg/day or more for 14 days or more**) - wait **at least 1 month** after stopping before a live vaccine. [IDSA 2013]",
        "**HIV**: all inactivated vaccines; MMR and varicella if **CD4 200 or more**; yellow fever only if unavoidable and CD4 200 or more. [IDSA 2013]",
        "**Healthcare workers**: hepatitis B with documented anti-HBs, influenza yearly, MMR (2 doses), varicella (2 doses), Tdap - required by many Indian hospitals under their infection-control policies. [ACIP 2011]",
      ],
    },
    {
      heading: "Complications of the diseases and vaccine safety",
      points: [
        "**Pneumococcal disease**: community-acquired pneumonia, bacteraemia and meningitis with case fatality of **15-20% in invasive disease** in the elderly. [Harrison 22e]",
        "**Influenza**: pneumonia, myocarditis, exacerbation of COPD and heart failure, and a rise in **myocardial infarction in the week after infection**; influenza vaccination lowers major cardiovascular events in people with recent MI. [ESC 2023]",
        "**Herpes zoster**: post-herpetic neuralgia, **herpes zoster ophthalmicus**, stroke risk in the following months; RZV prevents over 90% of zoster and about 90% of PHN. [NEJM 2016]",
        "**Hepatitis B**: chronic infection, cirrhosis and hepatocellular carcinoma - the vaccine is the first **anti-cancer vaccine**. [WHO 2023]",
        "**Contraindications** (true): anaphylaxis to a previous dose or component; for live vaccines - pregnancy and severe immunosuppression; **egg allergy is no longer a contraindication** to influenza vaccine. [ACIP 2025]",
        "Report serious events (death, hospitalisation, anaphylaxis, GBS) as **AEFI** to the district immunisation officer under India's **AEFI surveillance system**. [MoHFW 2023]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "Schedule the **next dose date** on the card: hepatitis B months 1 and 6; RZV at 2-6 months; HPV per schedule; PPSV23 after 1 year if PCV15/PCV13 was given. [ACIP 2024]",
        "Recall annually for **influenza** (before the monsoon in most of India). [API 2022]",
        "Check **anti-HBs** 1-2 months after the series in HCWs and dialysis patients, annually in dialysis. [ACIP 2018]",
        "Refer **post-transplant, chemotherapy and HIV with low CD4** to the specialist for timed vaccination (often restarting schedules after stem-cell transplant). [IDSA 2013]",
        "Refer suspected **serious AEFI** (anaphylaxis, GBS, encephalopathy) for investigation and reporting. [MoHFW 2023]",
      ],
    },
    {
      heading: "Prevention and programme link",
      points: [
        "**UIP (2024)** gives adults only **Td in pregnancy and for injuries**; **adult BCG** vaccination of high-risk adults has been piloted in selected states under the TB elimination effort. [MoHFW 2024]",
        "**HPV vaccination** for girls 9-14 years was announced for national roll-out in the **Interim Budget 2024**, using the indigenous **Cervavac** vaccine. [MoHFW 2024]",
        "**Hepatitis B vaccination** of high-risk adults and HCWs is part of the **National Viral Hepatitis Control Programme (NVHCP)**. [NVHCP 2018]",
        "Opportunistic vaccination in **NP-NCD clinics and Ayushman Arogya Mandirs** - for every person with diabetes, CKD or COPD - is the most practical route in Indian primary care. [API 2022]",
        "Build trust: address **vaccine hesitancy** with a clear recommendation, side-effect counselling and documentation. [WHO 2023]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**ACIP October 2024**: pneumococcal vaccination age lowered from 65 to **50 years**; **PCV21 (Capvaxive)** added as an option alongside PCV20 or PCV15 plus PPSV23. [ACIP 2024]",
        "**ACIP 2024-2025**: single-dose **RSV vaccine** for all **75+** and **60-74 at increased risk**, extended in 2025 to **50-59 at increased risk**; not repeated annually. [ACIP 2025]",
        "**WHO/ACIP 2024**: influenza vaccines switched to **trivalent** from the 2024-25 season because B/Yamagata has not circulated since 2020. [WHO 2024]",
        "**WHO 2022** HPV position paper: **one-dose or two-dose schedule for 9-20 years**, two doses 21 and over, three doses in immunocompromised. [WHO 2022]",
        "**ACIP 2022**: universal hepatitis B vaccination for adults 19-59; RZV for immunocompromised adults 19+. [ACIP 2022]",
        "**ACIP 2023**: maternal RSV vaccine (Abrysvo) at **32-36 weeks** in the RSV season as an alternative to infant nirsevimab. [ACIP 2023]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic viva: **'Why conjugate before polysaccharide?'** - conjugate primes T-cell memory; PPSV23 first causes hyporesponsiveness to later conjugate doses. [Plotkin 8e]",
        "Classic viva: **'Tetanus prophylaxis for a dirty wound in a man last vaccinated 7 years ago'** - Td/Tdap booster, no TIG. [ACIP 2020]",
        "**Live vaccines in adults**: MMR, varicella, yellow fever, Ty21a, live hepatitis A, LAIV - remember **'MMR, VZV, YF'** for the pregnancy and immunosuppression exclusion list. [ACIP 2025]",
        "Common mistake: giving hepatitis B vaccine in the **gluteal muscle** - lower seroconversion. [ACIP 2025]",
        "Common mistake: withholding RZV in someone who **already had zoster** - vaccinate once the acute episode has resolved. [ACIP 2022]",
        "Common mistake: deferring vaccination for a **minor cold** - only moderate or severe illness is a reason to postpone. [ACIP 2025]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drug table - core adult vaccines",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Td / Tdap", "0.5 mL IM deltoid", "Tdap once, then Td/Tdap every 10 years; 3-dose primary if unvaccinated; Tdap 27-36 weeks each pregnancy", "Local pain, Arthus reaction if too frequent; encephalopathy after pertussis vaccine (Tdap)"],
        ["Influenza (inactivated, trivalent)", "0.5 mL IM", "Every year (pre-monsoon in most of India)", "Local pain, low fever; GBS within 6 weeks of a prior dose is a precaution; egg allergy not a contraindication"],
        ["PCV20 / PCV21", "0.5 mL IM", "Single dose at 50+ or at-risk 19-49", "Local pain, fatigue; anaphylaxis to diphtheria toxoid-containing vaccine"],
        ["PCV15 or PCV13 then PPSV23", "0.5 mL IM each", "PPSV23 at least 1 year later (8 weeks if high risk)", "PPSV23: local reactions, more with revaccination"],
        ["Hepatitis B (recombinant)", "20 microgram (1 mL) IM deltoid; 40 microgram in dialysis", "0, 1, 6 months (dialysis 0, 1, 2, 6); check anti-HBs at 1-2 months", "Yeast allergy; never gluteal"],
        ["Recombinant zoster (RZV)", "0.5 mL IM", "2 doses 2-6 months apart at 50+ (19+ if immunocompromised)", "Reactogenic: pain, myalgia, fever for 1-3 days; not for active zoster"],
        ["HPV (Cervavac / Gardasil 9)", "0.5 mL IM", "9-14 y: 1-2 doses; 15-26 y: 3 doses at 0, 1-2, 6 months", "Syncope - observe 15 min; avoid in pregnancy"],
        ["MMR (live)", "0.5 mL SC/IM", "1-2 doses 4 weeks apart", "Pregnancy (avoid conception 4 weeks), severe immunosuppression, CD4 under 200"],
      ],
    },
    {
      heading: "Classification of vaccines and what it means",
      columns: ["Type", "Examples", "Memory and boosters", "Pregnancy / immunosuppressed"],
      rows: [
        ["Live attenuated", "MMR, varicella, yellow fever, Ty21a, live hepatitis A", "Strong, long-lasting after 1-2 doses", "Contraindicated"],
        ["Inactivated / subunit", "Influenza, hepatitis B, HPV, RZV, rabies", "Needs series and boosters", "Safe"],
        ["Toxoid", "Tetanus, diphtheria", "Boosters every 10 years", "Safe (Td/Tdap in pregnancy)"],
        ["Polysaccharide", "PPSV23, Vi typhoid", "No memory, hyporesponsiveness", "Safe but weak"],
        ["Conjugate", "PCV13/15/20/21, TCV, MenACWY", "T-cell memory, reduces carriage", "Safe"],
      ],
    },
    {
      heading: "Tetanus prophylaxis in wound management",
      columns: ["Previous tetanus doses", "Clean minor wound: Td/Tdap", "Clean minor wound: TIG", "Dirty/major wound: Td/Tdap", "Dirty/major wound: TIG"],
      rows: [
        ["Unknown or fewer than 3", "Yes (start series)", "No", "Yes (start series)", "Yes - 250 IU IM"],
        ["3 or more, last within 5 years", "No", "No", "No", "No"],
        ["3 or more, last 5-10 years ago", "No", "No", "Yes", "No"],
        ["3 or more, last 10 or more years ago", "Yes", "No", "Yes", "No"],
      ],
    },
    {
      heading: "Vaccines by risk group",
      columns: ["Group", "Recommended", "Avoid / caution"],
      rows: [
        ["Pregnancy", "Td/Tdap 27-36 weeks, inactivated influenza, RSV 32-36 weeks (where available)", "MMR, varicella, HPV, live vaccines"],
        ["Age 50-64", "RZV x 2, pneumococcal (ACIP 2024), Td booster, influenza", "None specific"],
        ["Age 65+", "High-dose/adjuvanted influenza, pneumococcal, RZV, RSV at 75+", "Yellow fever caution at 60+"],
        ["Diabetes / CKD / COPD / heart failure", "Influenza, pneumococcal, hepatitis B, RZV", "Double-dose hepatitis B in dialysis"],
        ["Asplenia", "Pneumococcal, MenACWY + MenB, Hib, influenza", "Time 2 weeks before elective splenectomy"],
        ["HIV / immunosuppressed", "All inactivated, RZV from 19 y", "Live vaccines if CD4 under 200 or on high-dose steroids"],
        ["Healthcare workers", "Hepatitis B (anti-HBs), influenza, MMR, varicella, Tdap", "Check immunity, document"],
      ],
    },
    {
      heading: "Hepatitis B serology after vaccination",
      columns: ["Anti-HBs (1-2 months after series)", "Interpretation", "Action"],
      rows: [
        ["10 mIU/mL or more", "Responder - protected long term", "No boosters (except dialysis: annual check)"],
        ["Under 10 mIU/mL after 1 series", "Non-responder", "Repeat a full 3-dose series and retest"],
        ["Under 10 after 2 series", "Persistent non-responder", "Test HBsAg; if negative, counsel and give HBIG after exposures"],
        ["HBsAg positive", "Chronic infection - vaccine irrelevant", "Refer for hepatitis B care; vaccinate contacts"],
      ],
    },
  ],
  redFlags: [
    "Anaphylaxis after vaccination - urticaria, wheeze, hypotension: adrenaline 0.5 mg IM and admit",
    "Ascending weakness within 6 weeks of a vaccine - suspected Guillain-Barre syndrome",
    "Dirty or crush wound in an unvaccinated adult - Td plus TIG today",
    "Needle-stick from an HBsAg-positive source in an unvaccinated HCW - HBIG and vaccine within 24 hours",
    "Live vaccine given inadvertently in pregnancy or severe immunosuppression - counsel and refer",
    "Fever, jaundice or multi-organ failure within 10 days of yellow fever vaccine - viscerotropic disease",
  ],
  pearls: [
    "Conjugate before polysaccharide - **PCV first, PPSV23 later**.",
    "**PCV20 or PCV21 single dose** at 50+ completes pneumococcal vaccination (ACIP 2024).",
    "**RZV** works in the elderly because of the **AS01B adjuvant** - over 90% efficacy at 70+.",
    "Anti-HBs **10 mIU/mL or more** = protected; check 1-2 months after the third dose.",
    "Two live vaccines: **same day or 4 weeks apart**.",
    "Hepatitis B and rabies vaccine in the **deltoid, never the buttock**.",
    "**Egg allergy is not a contraindication** to influenza vaccine.",
    "Live vaccine list for adults: **MMR, varicella, yellow fever, Ty21a, live hepatitis A, LAIV**.",
    "Tdap in **every pregnancy at 27-36 weeks** protects the newborn from pertussis.",
  ],
  mcqs: [
    {
      id: "infectious-fever-vaccine-preventable-adult-q1",
      stem: "A 55-year-old man with type 2 diabetes has never received a pneumococcal vaccine. According to ACIP 2024, which regimen completes his pneumococcal vaccination?",
      options: [
        "PPSV23 now, followed by PCV13 after 1 year",
        "PPSV23 every 5 years",
        "A single dose of PCV20 or PCV21",
        "No vaccine until he reaches 65 years",
      ],
      answer: 2,
      explanation:
        "ACIP lowered the pneumococcal age to 50 in 2024, and one dose of PCV20 or PCV21 is complete on its own. Giving PPSV23 first blunts the later conjugate response, repeated PPSV23 every 5 years is not recommended, and waiting until 65 reflects the old age threshold.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-vaccine-preventable-adult-q2",
      stem: "A 30-year-old farmer has a deep soil-contaminated foot wound. He completed his primary tetanus series and his last Td was 7 years ago. What prophylaxis is needed?",
      options: [
        "Td booster and tetanus immunoglobulin 250 IU",
        "Td booster only",
        "Tetanus immunoglobulin only",
        "Nothing - he is protected for 10 years",
      ],
      answer: 1,
      explanation:
        "For a dirty wound in someone with 3 or more doses, a booster is needed if the last dose was 5 or more years ago; TIG is only for those with fewer than 3 doses or an unknown history. The 10-year interval applies only to clean minor wounds, and TIG alone gives no lasting protection.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-vaccine-preventable-adult-q3",
      stem: "A nurse completed three doses of hepatitis B vaccine. Anti-HBs 2 months later is 4 mIU/mL. What is the next step?",
      options: [
        "Repeat a full 3-dose hepatitis B series and retest anti-HBs",
        "She is protected; no further action",
        "Give a single booster dose and stop",
        "Give HBIG every 6 months",
      ],
      answer: 0,
      explanation:
        "An anti-HBs below 10 mIU/mL after one series means she is a non-responder, and a second full series makes about half of non-responders seroconvert, followed by a repeat anti-HBs. She is not protected, one booster is not enough, and routine HBIG is used only after an actual exposure.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-vaccine-preventable-adult-q4",
      stem: "Which vaccine is contraindicated in a 28-year-old woman who is 20 weeks pregnant?",
      options: [
        "Tdap",
        "Inactivated influenza vaccine",
        "Hepatitis B vaccine",
        "Varicella vaccine",
      ],
      answer: 3,
      explanation:
        "Varicella vaccine is live attenuated and carries a theoretical risk to the fetus, so it is contraindicated in pregnancy. Tdap is recommended at 27-36 weeks, inactivated influenza vaccine is safe in any trimester, and recombinant hepatitis B vaccine is safe for at-risk pregnant women.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-vaccine-preventable-adult-q5",
      stem: "A 68-year-old woman had shingles 2 years ago. She asks about zoster vaccination. The most appropriate advice is:",
      options: [
        "She is immune after shingles and needs no vaccine",
        "Recombinant zoster vaccine, 2 doses 2-6 months apart",
        "Live zoster vaccine single dose, as it is more effective in the elderly",
        "Varicella vaccine 2 doses 4 weeks apart",
      ],
      answer: 1,
      explanation:
        "Zoster can recur, so RZV is recommended after the acute episode has resolved, as 2 doses 2-6 months apart, with over 90% efficacy even at 70+. Live zoster vaccine works poorly in the elderly and has been withdrawn in many countries, and varicella vaccine is meant for non-immune people, not to prevent zoster.",
      difficulty: "moderate",
    },
  ],
  theory: [
    {
      id: "infectious-fever-vaccine-preventable-adult-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Discuss adult immunisation in India. Describe the vaccines recommended for the elderly and for adults with chronic diseases, with schedules and contraindications.",
      openingLines: [
        "Adult immunisation is the planned use of vaccines in people aged 19 and over to prevent infections whose risk rises with age, chronic disease, pregnancy, occupation or travel, complementing the childhood UIP.",
        "India has no national adult programme beyond Td in pregnancy, so opportunistic vaccination in NCD clinics by the family physician is the key to closing very low coverage.",
      ],
      answer: [
        {
          heading: "Burden and rationale",
          points: [
            "Influenza 290,000-650,000 deaths/year globally; cervical cancer 1.24 lakh cases/year in India; HBsAg 2-4%; zoster 1 in 3 lifetime.",
            "Immunosenescence and comorbidity increase severity; adult coverage in India is in single digits.",
          ],
        },
        {
          heading: "Immunological principles",
          points: [
            "Live vs inactivated; polysaccharide (no memory) vs conjugate (T-cell memory); adjuvants overcome immunosenescence (AS01B in RZV).",
          ],
        },
        {
          heading: "Vaccines for the elderly",
          points: [
            "Influenza yearly (high-dose/adjuvanted at 65+), pre-monsoon Southern Hemisphere formulation.",
            "Pneumococcal from 50 (ACIP 2024): PCV20/PCV21 once or PCV15/PCV13 then PPSV23.",
            "RZV 2 doses 2-6 months apart at 50+; Td/Tdap every 10 years; RSV at 75+.",
          ],
        },
        {
          heading: "Chronic disease",
          points: [
            "Diabetes: hepatitis B, influenza, pneumococcal, RZV.",
            "CKD/dialysis: hepatitis B 40 microgram at 0, 1, 2, 6 months, annual anti-HBs.",
            "Asplenia: pneumococcal, MenACWY + MenB, Hib, 2 weeks before splenectomy.",
            "Immunosuppressed: inactivated only; live 4 weeks before immunosuppression.",
          ],
        },
        {
          heading: "Contraindications and precautions",
          points: [
            "Anaphylaxis to prior dose; live vaccines in pregnancy and severe immunosuppression; moderate-severe illness - defer; egg allergy is not a contraindication.",
          ],
        },
        {
          heading: "Programme and practice",
          points: [
            "UIP Td; HPV national roll-out (Cervavac); NVHCP hepatitis B for HCWs; opportunistic vaccination at NP-NCD clinics; AEFI reporting; U-WIN records.",
          ],
        },
      ],
      mustDraw: ["Table of adult vaccines with dose, schedule and contraindications", "Pneumococcal decision flow (PCV20/21 vs PCV15 then PPSV23)"],
      markSplit: [
        { part: "Burden and principles", marks: 2 },
        { part: "Elderly schedule", marks: 3 },
        { part: "Chronic disease groups", marks: 3 },
        { part: "Contraindications and programme", marks: 2 },
      ],
      keywords: ["adult immunisation", "PCV20", "RZV", "hepatitis B", "influenza"],
    },
    {
      id: "infectious-fever-vaccine-preventable-adult-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Differentiate between polysaccharide and conjugate pneumococcal vaccines.",
      openingLines: [
        "PPSV23 contains capsular polysaccharide from 23 serotypes and stimulates B cells without T-cell help, while conjugate vaccines (PCV13, 15, 20, 21) link fewer serotypes to a protein carrier to recruit T-cell help.",
        "This difference explains memory, booster response, carriage reduction and the rule of conjugate first.",
      ],
      answer: [
        {
          heading: "Immunology",
          points: [
            "PPSV23: T-independent, IgM-dominant, no memory, hyporesponsiveness, poor under 2 years.",
            "PCV: T-dependent, class switching, memory, mucosal IgA, effective in infants.",
          ],
        },
        {
          heading: "Clinical effect",
          points: [
            "PPSV23: covers more serotypes, prevents invasive disease modestly, no effect on carriage or herd immunity.",
            "PCV: prevents pneumonia and invasive disease, reduces carriage, herd effect.",
          ],
        },
        {
          heading: "Use in adults",
          points: [
            "PCV20/PCV21 alone, or PCV15/PCV13 first then PPSV23 after 1 year (8 weeks high risk); never PPSV23 first.",
          ],
        },
      ],
      mustDraw: ["Two-column comparison table PPSV23 vs PCV"],
      markSplit: [
        { part: "Immunology", marks: 2 },
        { part: "Clinical effect", marks: 2 },
        { part: "Schedule", marks: 1 },
      ],
      keywords: ["PPSV23", "PCV20", "T-dependent", "hyporesponsiveness", "herd immunity"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Immunization principles and vaccine use",
    "Plotkin's Vaccines, 8th edition, 2023",
    "CDC/ACIP. Adult Immunization Schedule by Age and Medical Condition, United States, 2025",
    "Kobayashi M et al. Use of 21-valent pneumococcal conjugate vaccine among US adults: ACIP recommendations, MMWR 2024 (age lowered to 50, October 2024)",
    "WHO. Human papillomavirus vaccines: WHO position paper, December 2022",
    "API Textbook of Medicine, 12th edition, 2022 - Adult immunisation (Association of Physicians of India)",
    "MoHFW. Universal Immunization Programme - Td replacement of TT (2018) and National HPV vaccination announcement, 2024",
    "Rubin LG et al. 2013 IDSA Clinical Practice Guideline for Vaccination of the Immunocompromised Host",
  ],
});

topics.push({
  id: "infectious-fever-travel-medicine",
  title: "Travel medicine and fever in the returning traveller",
  oneLiner:
    "**Travel medicine** is the **pre-travel risk assessment** (destination, duration, activities, host factors) leading to **required vaccines (yellow fever, MenACWY for Hajj/Umrah, polio), recommended vaccines, malaria chemoprophylaxis (ABCD) and self-treatment advice**, plus the **approach to fever in the returning traveller**, where **malaria must be excluded first** (three smears/RDTs over 12-24 hours) and the **incubation period, geography and exposure** narrow the differential.",
  frequency: "less-common",
  keywords: [
    "pre-travel consultation",
    "returning traveller",
    "malaria chemoprophylaxis",
    "atovaquone-proguanil",
    "doxycycline prophylaxis",
    "mefloquine",
    "yellow fever certificate",
    "ICVP",
    "International Health Regulations",
    "Hajj",
    "MenACWY",
    "travellers' diarrhoea",
    "acute mountain sickness",
    "acetazolamide",
    "GeoSentinel",
    "viral haemorrhagic fever",
    "Katayama fever",
    "typhoid conjugate vaccine",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Travel medicine** prevents and manages health problems of international and long-distance domestic travellers; it covers **pre-travel advice, vaccines, chemoprophylaxis, and post-travel illness**. [Harrison 22e]",
        "Of travellers from high-income to low- and middle-income countries, **22-64% report some illness** and about **8% seek medical care** during or after travel; **fever** is the main reason for post-travel hospital admission. [CDC Yellow Book 2024]",
        "**GeoSentinel** surveillance shows **malaria** is the commonest specific cause of fever in travellers returning from **sub-Saharan Africa**, **dengue** from **South-East Asia and Latin America**, and **enteric fever** from **South Asia (India, Pakistan, Bangladesh, Nepal)**. [GeoSentinel 2023]",
        "India is both a **source** (over 2.5 crore outbound departures a year, about **1.75 lakh Hajj pilgrims** annually and large migrant worker flows to the Gulf and Africa) and a **destination** (medical tourism, pilgrimage) - so Indian physicians see both pre-travel and returning-traveller problems. [MoHFW 2024]",
        "**VFR travellers** (visiting friends and relatives) - such as Indians settled abroad returning home - have the **highest risk** of malaria and typhoid because they stay longer, live locally and rarely take prophylaxis. [CDC Yellow Book 2024]",
        "Most deaths in travellers are from **cardiovascular disease and injuries (road traffic accidents, drowning)**, not infection - pre-travel advice covers these too. [CDC Yellow Book 2024]",
      ],
    },
    {
      heading: "Risk factors and risk assessment",
      points: [
        "**Destination** (country, rural vs urban, altitude), **season** (monsoon - dengue, leptospirosis; dry season - meningococcal belt), **duration** (over 1 month raises risk of rabies, JE, TB) and **accommodation**. [CDC Yellow Book 2024]",
        "**Activities**: trekking (altitude, rabies), freshwater swimming (**schistosomiasis**, leptospirosis), caving (histoplasmosis, rabies), animal contact, sexual contact, healthcare work, mass gatherings (Hajj, Kumbh Mela). [CDC Yellow Book 2024]",
        "**Host factors**: age, **pregnancy**, immunosuppression, asplenia, chronic disease (diabetes, heart, lung, kidney), previous vaccines, drug allergies and **G6PD status** (primaquine, tafenoquine). [CDC Yellow Book 2024]",
        "**Time before departure**: ideally **4-8 weeks** to complete vaccine series, but a last-minute traveller still benefits from accelerated schedules and advice. [CDC Yellow Book 2024]",
        "**Drug interactions**: antimalarials with warfarin, antiepileptics, ART and QT-prolonging drugs; travellers on insulin need a time-zone plan. [CDC Yellow Book 2024]",
      ],
    },
    {
      heading: "Pathophysiology - incubation periods drive the differential",
      points: [
        "Each infection has a **characteristic incubation period** set by its replication cycle - **short (under 10 days)** for arboviruses and bacteria with direct invasion, **intermediate (10-21 days)** for malaria (liver stage of about 7-30 days) and typhoid, and **long (over 21 days)** for parasites with tissue migration or latency. [Harrison 22e]",
        "**P. falciparum** has a liver stage of about **7-14 days** and causes most severe malaria within **1 month** of return (over 90% within 2 months); **P. vivax and P. ovale** form **hypnozoites** that relapse months to over a year later. [Harrison 22e]",
        "**Altitude illness**: hypobaric hypoxia triggers cerebral vasodilatation and increased capillary permeability (**AMS, HACE**) and uneven hypoxic pulmonary vasoconstriction (**HAPE**); **acetazolamide** (carbonic anhydrase inhibitor) causes a bicarbonate diuresis and metabolic acidosis that drives ventilation and speeds acclimatisation. [WMS 2024]",
        "**Travellers' diarrhoea**: mostly **enterotoxigenic E. coli (ETEC)**, enteroaggregative E. coli, Campylobacter (dominant in South and SE Asia, often fluoroquinolone-resistant), Shigella, Salmonella and norovirus. [IDSA/ISTM 2017]",
        "**Schistosoma** cercariae penetrate skin in fresh water; migration and egg-laying 3-8 weeks later trigger an immune-complex illness (**Katayama fever**) with fever, urticaria and **high eosinophilia**. [Harrison 22e]",
        "**Deep vein thrombosis** risk on flights over **4 hours** comes from immobility, cabin hypoxia and dehydration (Virchow triad). [ACCP 2012]",
      ],
    },
    {
      heading: "Classification - pre-travel vaccines",
      points: [
        "**Routine** - bring up to date: Td/Tdap, MMR, influenza, varicella, hepatitis B, pneumococcal and COVID-19 as per age (see the Adult vaccination topic). [CDC Yellow Book 2024]",
        "**Required** (by International Health Regulations or the destination country): **yellow fever** (ICVP) for endemic countries or for entry from them; **MenACWY** for Hajj and Umrah (Saudi Arabia); **polio** for residents of or long-stay visitors to polio-affected countries. [WHO IHR 2005]",
        "**Recommended** by risk: **hepatitis A** (2 doses inactivated, or single live attenuated in India), **typhoid conjugate vaccine** (single dose), **rabies PrEP** (day 0 and 7), **Japanese encephalitis** (rural Asia, over 1 month in season), **cholera** (outbreak areas, aid workers), **dengue (Qdenga)** in some countries, and tick-borne encephalitis (Europe). [WHO 2024]",
        "**Rabies PrEP** (WHO 2018): **2 visits on day 0 and day 7**, IM 1 vial or ID 0.1 mL at 2 sites; after PrEP, a bite needs only **2 booster doses (day 0 and 3)** and **no RIG**. [WHO 2018]",
        "**JE vaccine** in India: **live SA-14-14-2** (single dose) or **inactivated JENVAC** (2 doses 28 days apart); IXIARO internationally, 2 doses 28 days apart (7-day accelerated in adults). [WHO 2015]",
      ],
    },
    {
      heading: "Yellow fever and the vaccination certificate",
      points: [
        "**Yellow fever vaccine (17D live attenuated)**: **0.5 mL SC/IM single dose**, gives **lifelong protection** - since **July 2016** the **International Certificate of Vaccination or Prophylaxis (ICVP)** is valid **for life**, starting **10 days after** vaccination. [WHO IHR 2016]",
        "**India** has no yellow fever but has *Aedes aegypti*, so it **requires a valid YF certificate** from travellers arriving within **6 days** of leaving or transiting a YF-risk country (Africa, South America); travellers without one are **quarantined for up to 6 days**. [MoHFW 2023]",
        "YF vaccine is given only at **designated Yellow Fever Vaccination Centres** (APHOs, PHOs and selected government hospitals and institutes), which issue the stamped ICVP. [MoHFW 2023]",
        "**Contraindications**: infants under **6 months**, **thymus disorder or thymectomy**, severe immunosuppression (HIV with CD4 under 200, chemotherapy, high-dose steroids), and anaphylaxis to egg or gelatin. [CDC Yellow Book 2024]",
        "**Precautions**: age **60 and over** (higher risk of **viscerotropic disease, YEL-AVD**, and neurotropic disease, **YEL-AND**), infants 6-8 months, pregnancy and breastfeeding (give only if travel to a high-risk area is unavoidable). [CDC Yellow Book 2024]",
        "When the vaccine is contraindicated, issue a **medical waiver (exemption) letter** on official letterhead and complete the exemption section of the ICVP; the traveller must accept the infection risk. [WHO IHR 2005]",
      ],
    },
    {
      heading: "Hajj, Umrah and mass gatherings",
      points: [
        "**Saudi Arabia requires MenACWY** for Hajj and Umrah pilgrims and seasonal workers, given **at least 10 days before arrival**; a **conjugate vaccine is valid for 5 years** (polysaccharide 3 years where still accepted) - check the current Saudi Ministry of Health requirements each season. [Saudi MoH 2025]",
        "The requirement followed **meningococcal W135 outbreaks after Hajj in 2000-2001**, with international spread to pilgrims' contacts. [Harrison 22e]",
        "Pilgrims from **polio-affected countries** need documented polio vaccination; Saudi Arabia also recommends **seasonal influenza** and COVID-19 vaccination, especially for elderly pilgrims. [Saudi MoH 2025]",
        "Main Hajj health problems: **respiratory infections** (spread in crowds), **heat stroke and dehydration** (summer Hajj, temperatures over 45 C), diarrhoea, trauma from crowd crushes and **decompensated chronic disease**; MERS-CoV is a concern with camel contact. [WHO 2024]",
        "Advise elderly pilgrims with diabetes or heart disease to carry medicines, a **medical summary**, foot care for long walks barefoot, and to drink and shelter from heat. [WHO 2024]",
        "The **Hajj Committee of India** organises pre-departure vaccination (MenACWY, seasonal influenza) at state Hajj camps. [MoHFW 2024]",
      ],
    },
    {
      heading: "Malaria prevention - the ABCD",
      points: [
        "**A - Awareness** of risk, **B - Bite avoidance**, **C - Chemoprophylaxis**, **D - prompt Diagnosis** and treatment of any fever during or up to a year after travel. [UKHSA 2024]",
        "**Bite avoidance**: **DEET 20-50%** (safe in pregnancy and children over 2 months), picaridin or IR3535 repellents, permethrin-treated clothes, long sleeves at dusk and **long-lasting insecticidal nets**. [CDC Yellow Book 2024]",
        "**Atovaquone-proguanil** 250/100 mg one tablet daily, start **1-2 days before**, continue **7 days after** - best for short trips; avoid in severe CKD (CrCl under 30). [CDC Yellow Book 2024]",
        "**Doxycycline 100 mg daily**, start **1-2 days before**, continue **4 weeks after** - cheap, also protects against leptospirosis and rickettsia; not in pregnancy or under 8 years. [CDC Yellow Book 2024]",
        "**Mefloquine 250 mg weekly**, start **2-3 weeks before**, continue **4 weeks after** - for long stays and pregnancy (all trimesters); contraindicated with psychiatric illness, seizures or cardiac conduction disease. [CDC Yellow Book 2024]",
        "**Chloroquine 300 mg base (500 mg salt) weekly**, 1-2 weeks before and 4 weeks after - only for **chloroquine-sensitive areas** (Central America west of Panama canal, Haiti); not useful for Africa or most of Asia. [CDC Yellow Book 2024]",
        "**Primaquine 30 mg base daily** (1-2 days before, 7 days after) or **tafenoquine 200 mg weekly** (after a loading dose) are options in **G6PD-normal** travellers; primaquine 30 mg base daily for 14 days is used as **terminal prophylaxis** after heavy vivax exposure. [CDC Yellow Book 2024]",
        "**India NCVBDC**: for travellers to high-risk areas within India - **doxycycline 100 mg daily for stays up to 6 weeks** (start 2 days before, continue 4 weeks after); **mefloquine 250 mg weekly for longer stays**. [NCVBDC 2023]",
      ],
    },
    {
      heading: "Other pre-travel advice",
      points: [
        "**Travellers' diarrhoea prevention**: 'boil it, cook it, peel it or forget it', bottled or treated water, hand hygiene; **antibiotic prophylaxis is not routine** (only for high-risk hosts such as IBD or immunosuppression). [IDSA/ISTM 2017]",
        "**Self-treatment of travellers' diarrhoea**: ORS for all; **loperamide** for mild-moderate watery diarrhoea; for severe or dysentery - **azithromycin 1 g single dose or 500 mg daily for 3 days** (preferred in South and SE Asia); rifaximin 200 mg TDS for 3 days for non-invasive diarrhoea; avoid fluoroquinolones because of resistance and adverse effects. [IDSA/ISTM 2017]",
        "**Altitude**: ascend gradually - above **3,000 m**, sleep no more than **500 m higher** each night and rest every 3-4 days; **acetazolamide 125 mg BD** from the day before ascent for moderate-high risk; **dexamethasone** is an alternative; **nifedipine** for HAPE prevention in those with prior HAPE. [WMS 2024]",
        "**Flight-related DVT**: for flights over 4 hours, walk, flex calves and hydrate; **graduated compression stockings** (15-30 mmHg) for higher-risk travellers; LMWH only for very high risk. [ACCP 2012]",
        "**Jet lag**: light exposure at the destination's daytime; **melatonin 0.5-5 mg** at local bedtime for flights across 5 or more time zones. [CDC Yellow Book 2024]",
        "**Sexual health, road safety, insurance and a travel kit** (ORS, antipyretic, antimalarials, prescription drugs in original packs, condoms, sunscreen). [CDC Yellow Book 2024]",
      ],
    },
    {
      heading: "Fever in the returning traveller - history",
      points: [
        "**Exclude malaria first** in any febrile traveller from an endemic area within the last **3 months** (and up to a year for vivax) - **falciparum can kill within 24-48 hours**. [UKHSA 2024]",
        "Take a **travel history**: exact itinerary with dates, rural or urban, **onset of fever relative to exposure**, prophylaxis (name, dose, adherence), vaccines and pre-travel advice. [Harrison 22e]",
        "**Incubation under 10 days**: dengue, chikungunya, Zika, rickettsiae (African tick-bite fever), influenza, COVID-19, leptospirosis, traveller's diarrhoea pathogens, plague. [Harrison 22e]",
        "**10-21 days**: **malaria**, **typhoid and paratyphoid**, leptospirosis, scrub typhus, acute HIV, brucellosis, African trypanosomiasis, viral haemorrhagic fevers (Lassa, Ebola up to 21 days). [Harrison 22e]",
        "**Over 21 days**: **vivax/ovale malaria**, tuberculosis, hepatitis A, B and E, acute schistosomiasis (Katayama), amoebic liver abscess, **visceral leishmaniasis**, filariasis, rabies. [Harrison 22e]",
        "**Exposures**: fresh water (schistosomiasis, leptospirosis), insect and tick bites, animal bites, unpasteurised dairy (brucellosis), sexual contact (HIV, syphilis), raw food, healthcare contact (MDR organisms), sick contacts. [Harrison 22e]",
        "**Viral haemorrhagic fever risk**: travel within **21 days** to an area with an active outbreak (Ebola, Marburg, Lassa, CCHF) plus contact with sick people, bodies or animals - **isolate first and call infection control** before taking samples. [UKHSA 2024]",
      ],
    },
    {
      heading: "Examination in the returning traveller",
      points: [
        "**Vital signs and sepsis screen**: hypotension, tachypnoea, confusion, jaundice and bleeding point to severe malaria, typhoid, leptospirosis, dengue, meningococcaemia or VHF. [UKHSA 2024]",
        "**Rash**: maculopapular (dengue, chikungunya, Zika, acute HIV, rickettsiae, measles), petechial or purpuric (meningococcaemia, dengue, VHF), **rose spots** (typhoid), **eschar** (African tick-bite fever, scrub typhus). [Harrison 22e]",
        "**Hepatosplenomegaly**: malaria, typhoid, visceral leishmaniasis, brucellosis, acute schistosomiasis; **tender hepatomegaly**: amoebic liver abscess. [Harrison 22e]",
        "**Conjunctival suffusion and calf tenderness**: leptospirosis; **jaundice**: falciparum malaria, leptospirosis, hepatitis. [Harrison 22e]",
        "**Neck stiffness or altered sensorium**: cerebral malaria, meningococcal meningitis, JE, rabies, African trypanosomiasis. [Harrison 22e]",
        "**Skin lesions after travel**: **cutaneous larva migrans** (serpiginous itchy track from beach sand), myiasis, cutaneous leishmaniasis (painless ulcer), tungiasis. [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis by region",
      points: [
        "**Sub-Saharan Africa**: falciparum malaria (top), African tick-bite fever, schistosomiasis, typhoid, Lassa/Ebola in outbreak areas, African trypanosomiasis (game parks). [GeoSentinel 2023]",
        "**South Asia (including India)**: enteric fever, dengue, vivax and falciparum malaria, chikungunya, scrub typhus, hepatitis A and E, leptospirosis. [GeoSentinel 2023]",
        "**South-East Asia**: dengue (top), chikungunya, malaria (border forests), leptospirosis, scrub typhus, **melioidosis**, JE. [GeoSentinel 2023]",
        "**Latin America and Caribbean**: dengue, chikungunya, Zika, malaria (Amazon), leptospirosis, histoplasmosis (caves), yellow fever. [GeoSentinel 2023]",
        "**Middle East**: brucellosis, MERS-CoV (camel exposure), meningococcal disease after Hajj, Q fever, CCHF. [GeoSentinel 2023]",
        "**Non-travel causes** must still be considered: pneumonia, UTI, DVT/PE after a long flight, drug fever and influenza. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations in the returning traveller",
      points: [
        "**Malaria smear (thick and thin) and RDT**: if negative, **repeat every 12-24 hours for a total of 3 sets** before excluding malaria; report parasitaemia percentage (**2% or more** in non-immunes raises concern; **over 10%** is severe in non-immunes per UK guidance). [UKHSA 2024]",
        "**CBC**: thrombocytopenia (malaria, dengue, VHF, rickettsia), leucopenia (dengue, typhoid, malaria), **eosinophilia** (helminths - schistosomiasis, strongyloides, filariasis, Katayama), neutrophilia (bacterial sepsis, amoebic liver abscess, leptospirosis). [Harrison 22e]",
        "**Blood cultures** (two sets) for enteric fever and bacteraemia; **LFT, RFT, glucose, lactate, urine**. [UKHSA 2024]",
        "**Dengue NS1 (days 1-5) and IgM (from day 5)**, chikungunya and Zika PCR/IgM, leptospira IgM/PCR, scrub typhus IgM, **HIV test** (acute retroviral syndrome). [Harrison 22e]",
        "**Chest X-ray** (pneumonia, TB), **ultrasound abdomen** (liver abscess, splenomegaly), stool microscopy and PCR, **schistosoma serology** (at least 6-12 weeks after exposure). [Harrison 22e]",
        "**VHF suspected**: only **essential tests** in a designated lab with biosafety precautions; send samples to the **National Institute of Virology, Pune** (BSL-4) via the state surveillance unit. [ICMR-NIV 2024]",
      ],
    },
    {
      heading: "Management - OPD and IPD",
      points: [
        "**Uncomplicated falciparum malaria**: **artemether-lumefantrine** (20/120 mg, 4 tablets twice daily for 3 days in adults) or the Indian **ACT-SP** (artesunate 4 mg/kg daily for 3 days plus sulfadoxine-pyrimethamine on day 1) - NE India uses artemether-lumefantrine; details in the Malaria topic. [NCVBDC 2023]",
        "**Severe malaria** (any WHO criterion, or parasitaemia over 2-5% in non-immune travellers): **IV artesunate 2.4 mg/kg at 0, 12 and 24 hours then daily**, admit to HDU. [WHO 2025]",
        "**Admit**: suspected falciparum malaria in a non-immune traveller (many centres admit all), sepsis, bleeding, altered sensorium, jaundice, respiratory distress, AKI, pregnancy, extremes of age, or **suspected VHF** (isolation room). [UKHSA 2024]",
        "**Suspected enteric fever from South Asia**: blood culture first, then **azithromycin 500 mg-1 g daily for 7 days** (uncomplicated) or **ceftriaxone 2 g IV daily** (severe); fluoroquinolones fail because of resistance; **XDR typhoid** from Pakistan needs **meropenem** (± azithromycin). [ICMR 2022]",
        "**Empirical doxycycline 100 mg BD** when rickettsial infection (eschar, tick bite) or leptospirosis is likely. [ICMR 2022]",
        "**Paracetamol only** until dengue is excluded; no NSAIDs or aspirin. [WHO 2025]",
        "**Notify** malaria, dengue, VHF, cholera, yellow fever and other IHR diseases to the district surveillance officer through **IDSP-IHIP**; VHF and yellow fever are also notified to WHO under IHR. [IDSP 2024]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: advise against travel to **falciparum-malaria** and **Zika** areas if possible; **mefloquine** is the prophylaxis of choice in all trimesters; no doxycycline, primaquine or tafenoquine; YF vaccine only if travel is unavoidable. [CDC Yellow Book 2024]",
        "**Children**: weight-based atovaquone-proguanil (paediatric tablets from 5 kg) or mefloquine; **doxycycline only from 8 years**; DEET is safe over 2 months; ORS sachets for diarrhoea. [CDC Yellow Book 2024]",
        "**Immunocompromised and HIV**: avoid live vaccines (YF, MMR, Ty21a) if severely immunosuppressed; use **TCV and inactivated** vaccines; higher risk of severe travellers' diarrhoea - consider standby antibiotics. [IDSA 2013]",
        "**Elderly and chronic disease**: YF precaution at 60+, heat stroke risk on Hajj, drug interactions, adequate supply of medicines and a letter. [CDC Yellow Book 2024]",
        "**Asplenia**: high risk of **severe falciparum malaria** and overwhelming sepsis - strict prophylaxis and a standby antibiotic (amoxicillin-clavulanate). [CDC Yellow Book 2024]",
        "**Diabetes on insulin**: adjust doses across time zones (longer eastward days need less, westward more), carry insulin in hand luggage with a doctor's letter, monitor glucose more often. [ADA 2025]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Delayed diagnosis of falciparum malaria** is the main preventable cause of death in returning travellers - most deaths follow missed or late diagnosis in non-immune travellers. [UKHSA 2024]",
        "**Typhoid**: intestinal perforation and bleeding in week 3; **dengue**: shock and bleeding in the critical phase (day 3-7). [Harrison 22e]",
        "**Altitude**: untreated **HACE and HAPE** can kill within hours - **descend** at least 300-1,000 m, oxygen, dexamethasone 8 mg then 4 mg 6-hourly (HACE), nifedipine (HAPE). [WMS 2024]",
        "**Post-infectious IBS** follows travellers' diarrhoea in about 5-10%. [IDSA/ISTM 2017]",
        "**Imported outbreaks**: travellers can import measles, VHF, mpox, cholera and MDR bacteria (e.g. carbapenemase producers) into hospitals. [WHO 2024]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "Refer **suspected VHF** (isolate, use full PPE, inform the state surveillance unit), severe malaria, and complex eosinophilia to an infectious diseases centre. [UKHSA 2024]",
        "**Post-travel screening** of asymptomatic long-stay travellers: CBC for eosinophilia, schistosoma serology after fresh-water exposure in Africa, strongyloides serology, TB testing (IGRA) after over 3 months in high-incidence settings with exposure. [CDC Yellow Book 2024]",
        "Advise travellers that **any fever up to 1 year after return** from a malarious area needs a malaria test and that they must **mention their travel**. [UKHSA 2024]",
        "After treated vivax malaria, give **primaquine 0.25 mg/kg daily for 14 days** (G6PD-normal) for radical cure. [NCVBDC 2023]",
        "Check adherence to post-travel **chemoprophylaxis** (4 weeks for doxycycline/mefloquine, 7 days for atovaquone-proguanil). [CDC Yellow Book 2024]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**IHR amendments (WHA77, June 2024)** introduce a **'pandemic emergency'** category and stronger national IHR authorities; they entered into force in **September 2025**. [WHO 2024]",
        "**WMS 2024** altitude illness guideline: **acetazolamide 125 mg BD** for prevention (higher doses unnecessary), dexamethasone alternative; ibuprofen is a second-line option for AMS prevention. [WMS 2024]",
        "**WHO SAGE 2023**: **TAK-003 (Qdenga)** dengue vaccine recommended for ages 6-16 in high-transmission settings; not licensed in India as of 2026; WHO 2025 dengue clinical guideline for arboviral disease management. [WHO 2025]",
        "**Chikungunya vaccine**: live **VLA1553 (Ixchiq)** licensed in 2023 had safety restrictions in older adults in 2025 after serious adverse events; a virus-like-particle vaccine was licensed in 2025. [FDA 2025]",
        "**CDC Yellow Book 2024** (and 2026 edition): updated malaria prophylaxis maps, tafenoquine for prophylaxis, and rabies PrEP 2-dose schedule. [CDC Yellow Book 2024]",
        "**Saudi MoH** pilgrim requirements (updated each season): MenACWY conjugate preferred; influenza and COVID-19 recommended. [Saudi MoH 2025]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic viva: **'A man returns from Nigeria with fever after 12 days - first test?'** - malaria smear/RDT, repeated 3 times over 12-24 hours if negative. [UKHSA 2024]",
        "**YF certificate**: valid **for life** (IHR 2016), from **10 days** after vaccination; India quarantines travellers without one for up to 6 days. [WHO IHR 2016]",
        "**Hajj**: MenACWY at least **10 days** before arrival is mandatory. [Saudi MoH 2025]",
        "**Prophylaxis continuation**: atovaquone-proguanil **7 days**, doxycycline and mefloquine **4 weeks** after leaving - the 'causal vs suppressive' explanation (A-P kills liver stages). [CDC Yellow Book 2024]",
        "Common mistake: excluding malaria on **one negative smear**. [UKHSA 2024]",
        "Common mistake: giving **ciprofloxacin** for traveller's diarrhoea or typhoid from South Asia - azithromycin is preferred because of quinolone resistance. [IDSA/ISTM 2017]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drug table - malaria chemoprophylaxis",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Atovaquone-proguanil", "250/100 mg oral daily with food", "Start 1-2 days before, continue 7 days after", "GI upset; avoid if CrCl under 30; costly"],
        ["Doxycycline", "100 mg oral daily", "Start 1-2 days before, continue 4 weeks after (NCVBDC: stays up to 6 weeks)", "Pregnancy, under 8 years; photosensitivity, oesophagitis, vaginal candidiasis"],
        ["Mefloquine", "250 mg oral weekly", "Start 2-3 weeks before, continue 4 weeks after (NCVBDC: stays over 6 weeks)", "Neuropsychiatric effects; contraindicated in psychiatric illness, seizures, conduction defects; safe in pregnancy"],
        ["Chloroquine", "300 mg base (500 mg salt) oral weekly", "1-2 weeks before, 4 weeks after", "Only chloroquine-sensitive areas; retinopathy with long use"],
        ["Primaquine", "30 mg base oral daily", "1-2 days before, 7 days after (14 days as terminal prophylaxis)", "G6PD deficiency (haemolysis), pregnancy"],
        ["Tafenoquine", "200 mg oral daily x 3 days, then weekly", "Continue 1 week after return", "G6PD test mandatory; psychiatric history; pregnancy, breastfeeding"],
      ],
    },
    {
      heading: "Incubation periods in the febrile returning traveller",
      columns: ["Incubation", "Infections", "Key clue"],
      rows: [
        ["Under 10 days", "Dengue, chikungunya, Zika, rickettsiae, influenza, COVID-19, leptospirosis (often 7-12)", "Rash, arthralgia, eschar, respiratory symptoms"],
        ["10-21 days", "Falciparum malaria, typhoid, leptospirosis, scrub typhus, acute HIV, VHF (up to 21 days), brucellosis", "Malaria must be excluded first"],
        ["Over 21 days", "Vivax/ovale malaria, TB, hepatitis A/B/E, schistosomiasis, amoebic liver abscess, visceral leishmaniasis", "Eosinophilia, hepatomegaly, weight loss"],
      ],
    },
    {
      heading: "Differential diagnosis of fever by travel region",
      columns: ["Region", "Most likely", "Do not miss", "Specific test"],
      rows: [
        ["Sub-Saharan Africa", "Falciparum malaria", "VHF (outbreaks), meningococcaemia, schistosomiasis", "Smear/RDT x 3; schistosoma serology"],
        ["South Asia", "Enteric fever, dengue", "Malaria, scrub typhus, leptospirosis", "Blood culture, NS1/IgM, scrub IgM"],
        ["South-East Asia", "Dengue", "Malaria, melioidosis, JE", "NS1/IgM, smear, blood culture"],
        ["Latin America", "Dengue, chikungunya, Zika", "Malaria (Amazon), yellow fever", "PCR/IgM, smear"],
        ["Middle East (Hajj)", "Respiratory viral infection", "Meningococcal disease, MERS-CoV, brucellosis", "Blood culture, MERS PCR"],
      ],
    },
    {
      heading: "Travel vaccines - required and recommended",
      columns: ["Vaccine", "Schedule", "Who needs it", "Notes"],
      rows: [
        ["Yellow fever (17D, live)", "0.5 mL single dose", "Travel to endemic Africa/South America; required for entry to India from these", "Certificate valid for life from day 10; precaution at 60+"],
        ["MenACWY conjugate", "0.5 mL IM single dose", "Hajj/Umrah (mandatory), meningitis belt", "At least 10 days before arrival; valid 5 years"],
        ["Typhoid conjugate", "0.5 mL IM single dose", "South Asia, VFR travellers", "Not 100% - food and water care still needed"],
        ["Hepatitis A", "Inactivated 0, 6-12 months or live single dose", "Most developing countries", "Most Indian adults already immune"],
        ["Rabies PrEP", "Day 0 and 7 (IM or ID)", "Long stay, rural, trekkers, animal workers, children", "After PrEP: 2 boosters, no RIG"],
        ["Japanese encephalitis", "Live SA-14-14-2 single, or inactivated 2 doses 28 days apart", "Rural Asia over 1 month in season", "Indian UIP vaccine in endemic districts"],
        ["Polio (OPV/IPV)", "Booster dose", "Residents/long-stay visitors of polio-affected countries", "Within 4 weeks-12 months before departure"],
      ],
    },
    {
      heading: "Travellers' diarrhoea - severity and treatment (IDSA/ISTM 2017)",
      columns: ["Severity", "Definition", "Treatment"],
      rows: [
        ["Mild", "Tolerable, does not interfere with activities", "ORS, loperamide or bismuth; no antibiotic"],
        ["Moderate", "Distressing, interferes with activities", "Loperamide; consider azithromycin 1 g single dose or rifaximin"],
        ["Severe or dysentery", "Incapacitating, or blood in stool, high fever", "Azithromycin 1 g single or 500 mg daily x 3 days; avoid loperamide alone in dysentery"],
      ],
    },
  ],
  redFlags: [
    "Fever within 3 months of return from a malarious area with any sign of severity - severe falciparum malaria until proven otherwise",
    "Fever with bleeding after travel to an area with an active Ebola, Marburg, Lassa or CCHF outbreak within 21 days - isolate now",
    "Fever with petechial or purpuric rash after Hajj - meningococcaemia, give antibiotic immediately",
    "Altered sensorium, jaundice, oliguria or respiratory distress in a returning traveller",
    "Headache, ataxia or breathlessness at rest at altitude - HACE/HAPE, descend immediately",
    "Bloody diarrhoea with high fever or dehydration in a traveller",
    "Fever in a pregnant or asplenic returning traveller",
  ],
  pearls: [
    "**Malaria first, malaria second, malaria third** - three negative smears over 12-24 hours before you exclude it.",
    "Malaria prevention **ABCD**: Awareness, Bite avoidance, Chemoprophylaxis, Diagnosis.",
    "Atovaquone-proguanil stops **7 days** after return (causal prophylaxis); doxycycline and mefloquine continue **4 weeks**.",
    "YF certificate valid **for life**, from **10 days** after the dose.",
    "**Hajj = MenACWY** at least 10 days before arrival.",
    "Fever beginning **under 7 days** after first entering a malarious area is unlikely to be malaria - but test anyway; exposure dates are often wrong.",
    "**VFR travellers** carry the highest risk of malaria and typhoid.",
    "Eosinophilia after African fresh-water exposure = **schistosomiasis** until proven otherwise.",
    "Azithromycin, not ciprofloxacin, for traveller's diarrhoea from South Asia.",
  ],
  mcqs: [
    {
      id: "infectious-fever-travel-medicine-q1",
      stem: "A 35-year-old engineer returned from Ghana 10 days ago and now has fever and headache. He took no prophylaxis. One malaria smear is negative. The most appropriate next step is:",
      options: [
        "Exclude malaria and start treatment for typhoid",
        "Send dengue IgM only",
        "Discharge with paracetamol and review in a week",
        "Repeat smear and RDT every 12-24 hours for a total of three sets",
      ],
      answer: 3,
      explanation:
        "A single negative smear cannot exclude falciparum malaria, which can kill within 48 hours; three sets over 12-24 hours are needed. Treating as typhoid, testing only for dengue, or discharging him all risk missing the commonest and deadliest cause of fever after travel to sub-Saharan Africa.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-travel-medicine-q2",
      stem: "A traveller arriving in India from Nigeria without a yellow fever vaccination certificate should be:",
      options: [
        "Refused entry and deported",
        "Quarantined for up to 6 days",
        "Vaccinated at the airport and allowed to proceed",
        "Allowed entry since the certificate is optional",
      ],
      answer: 1,
      explanation:
        "India has Aedes aegypti but no yellow fever, so arrivals from YF-risk countries without a valid certificate are quarantined for up to 6 days, the longest incubation period. Vaccination on arrival does not protect in time, and deportation or free entry is not the rule under India's IHR implementation.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-travel-medicine-q3",
      stem: "A 30-year-old woman, 14 weeks pregnant, must travel to rural Odisha for 3 months. Which malaria chemoprophylaxis is most appropriate?",
      options: [
        "Mefloquine 250 mg weekly",
        "Doxycycline 100 mg daily",
        "Primaquine 30 mg base daily",
        "Tafenoquine 200 mg weekly",
      ],
      answer: 0,
      explanation:
        "Mefloquine is safe in all trimesters of pregnancy and suits a stay longer than 6 weeks, matching NCVBDC advice. Doxycycline is contraindicated in pregnancy, and primaquine and tafenoquine can cause haemolysis in a G6PD-deficient fetus, so they are avoided in pregnancy.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-travel-medicine-q4",
      stem: "A man returned from a lake holiday in Malawi 5 weeks ago with fever, urticaria, dry cough and eosinophil count of 3,500/microlitre. The most likely diagnosis is:",
      options: [
        "Falciparum malaria",
        "Typhoid fever",
        "Acute schistosomiasis (Katayama fever)",
        "Dengue fever",
      ],
      answer: 2,
      explanation:
        "Fresh-water exposure in Africa followed 3-8 weeks later by fever, urticaria, cough and marked eosinophilia is Katayama fever from schistosome migration. Malaria, typhoid and dengue do not cause high eosinophilia; typhoid and dengue more often cause leucopenia, and dengue has a much shorter incubation period.",
      difficulty: "hard",
    },
    {
      id: "infectious-fever-travel-medicine-q5",
      stem: "An Indian pilgrim is preparing for Hajj. Which vaccination is mandatory for the Saudi visa?",
      options: [
        "Typhoid conjugate vaccine",
        "Hepatitis A vaccine",
        "Yellow fever vaccine",
        "Quadrivalent meningococcal (ACWY) vaccine",
      ],
      answer: 3,
      explanation:
        "Saudi Arabia requires MenACWY for Hajj and Umrah, given at least 10 days before arrival, after W135 outbreaks among pilgrims. Typhoid and hepatitis A vaccines are recommended but not required, and yellow fever is required only for travellers coming from YF-risk countries.",
      difficulty: "easy",
    },
  ],
  theory: [
    {
      id: "infectious-fever-travel-medicine-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "less-common",
      question:
        "Discuss the approach to a patient with fever returning from international travel. Add a note on malaria chemoprophylaxis.",
      openingLines: [
        "Fever in the returning traveller is a medical emergency until falciparum malaria is excluded, because it can kill within 24-48 hours of symptom onset in a non-immune person.",
        "The diagnosis is narrowed by geography, incubation period, exposures and vaccination/prophylaxis history.",
      ],
      answer: [
        {
          heading: "Epidemiology",
          points: [
            "GeoSentinel: malaria (Africa), dengue (SE Asia, Latin America), enteric fever (South Asia); VFR travellers at highest risk.",
          ],
        },
        {
          heading: "History",
          points: [
            "Itinerary, dates, rural/urban, prophylaxis adherence, vaccines, exposures (fresh water, insects, animals, sex, food), sick contacts, VHF risk within 21 days.",
            "Incubation: under 10 days (dengue, rickettsia), 10-21 days (malaria, typhoid), over 21 days (vivax, TB, hepatitis, schistosomiasis, amoebic abscess, VL).",
          ],
        },
        {
          heading: "Examination",
          points: [
            "Sepsis screen; rash, eschar, jaundice, hepatosplenomegaly, conjunctival suffusion, neck stiffness.",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "Malaria smear/RDT x 3 over 12-24 hours; CBC (eosinophilia), blood cultures, LFT, RFT, dengue NS1/IgM, HIV, CXR, ultrasound.",
            "VHF suspected: isolate, essential tests only, NIV Pune.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Admit severe or falciparum; IV artesunate for severe malaria; azithromycin/ceftriaxone for enteric; doxycycline for rickettsia/lepto; paracetamol only; notify via IDSP-IHIP.",
          ],
        },
        {
          heading: "Malaria chemoprophylaxis",
          points: [
            "ABCD; atovaquone-proguanil daily (7 days after), doxycycline daily (4 weeks after), mefloquine weekly (pregnancy, long stay); NCVBDC: doxycycline up to 6 weeks, mefloquine longer.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart: febrile returning traveller - VHF risk? - malaria smear x 3 - incubation-based differential",
        "Table of incubation periods",
      ],
      markSplit: [
        { part: "History and incubation periods", marks: 3 },
        { part: "Examination and investigations", marks: 3 },
        { part: "Management and notification", marks: 2 },
        { part: "Chemoprophylaxis", marks: 2 },
      ],
      keywords: ["returning traveller", "malaria", "incubation period", "chemoprophylaxis", "GeoSentinel"],
    },
    {
      id: "infectious-fever-travel-medicine-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Write a short note on the yellow fever vaccine and the International Certificate of Vaccination.",
      openingLines: [
        "Yellow fever vaccine is the live attenuated 17D strain, given as a single 0.5 mL dose that protects for life.",
        "Under the International Health Regulations, the certificate (ICVP) is valid for life from 10 days after vaccination (since July 2016).",
      ],
      answer: [
        {
          heading: "Vaccine",
          points: [
            "17D live attenuated, 0.5 mL SC/IM single dose; seroconversion over 95% by day 10.",
          ],
        },
        {
          heading: "Indian requirement",
          points: [
            "Required from travellers arriving within 6 days from YF-risk countries; otherwise quarantine up to 6 days; given only at designated YF vaccination centres.",
          ],
        },
        {
          heading: "Contraindications and precautions",
          points: [
            "Under 6 months, thymus disease, severe immunosuppression, egg anaphylaxis; precautions at 60+, pregnancy, breastfeeding, infants 6-8 months.",
            "Adverse events: YEL-AVD, YEL-AND; medical waiver letter if contraindicated.",
          ],
        },
      ],
      mustDraw: ["Box listing contraindications vs precautions"],
      markSplit: [
        { part: "Vaccine and certificate", marks: 2 },
        { part: "Indian requirement", marks: 1 },
        { part: "Contraindications and adverse events", marks: 2 },
      ],
      keywords: ["17D", "ICVP", "IHR", "YEL-AVD", "quarantine"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Health recommendations for international travel; Approach to the acutely ill infected febrile patient",
    "CDC Yellow Book: Health Information for International Travel, 2024 edition",
    "UKHSA. Guidelines for malaria prevention in travellers from the UK, 2024; and UK malaria treatment guidelines",
    "Riddle MS et al. Guidelines for the prevention and treatment of travelers' diarrhea (IDSA/ISTM), J Travel Med 2017",
    "Luks AM et al. Wilderness Medical Society Clinical Practice Guidelines for the Prevention, Diagnosis and Treatment of Acute Altitude Illness: 2024 Update",
    "WHO. International Health Regulations (2005), third edition, and 2024 amendments",
    "NCVBDC. National Drug Policy on Malaria and Guidelines for Diagnosis and Treatment of Malaria in India, 2023",
  ],
});

export default topics;
