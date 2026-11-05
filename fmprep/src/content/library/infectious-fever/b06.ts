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

export default topics;
