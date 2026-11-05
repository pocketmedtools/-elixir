import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "infectious-fever-visceral-leishmaniasis",
  title: "Visceral leishmaniasis (kala-azar) and PKDL",
  oneLiner:
    "**Visceral leishmaniasis (kala-azar)** is a chronic systemic infection of the reticulo-endothelial system by **Leishmania donovani**, spread in India by the sandfly **Phlebotomus argentipes**, presenting as **fever over 2 weeks with massive splenomegaly, pancytopenia and weight loss** in a resident of the Bihar-Jharkhand-Bengal-UP belt; it is diagnosed by the **rK39 rapid test** and treated with **single-dose liposomal amphotericin B 10 mg/kg**, and its sequel **post-kala-azar dermal leishmaniasis (PKDL)** is the hidden reservoir the elimination programme must find.",
  frequency: "common",
  keywords: [
    "kala-azar",
    "black fever",
    "Dumdum fever",
    "Leishmania donovani",
    "Phlebotomus argentipes",
    "sandfly",
    "LD bodies",
    "amastigote",
    "rK39",
    "liposomal amphotericin B",
    "LAmB",
    "miltefosine",
    "paromomycin",
    "sodium stibogluconate",
    "PKDL",
    "post-kala-azar dermal leishmaniasis",
    "HIV-VL co-infection",
    "KAMIS",
    "indoor residual spraying",
    "NCVBDC",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Visceral leishmaniasis (VL)** is a vector-borne protozoal infection of macrophages of the spleen, liver, bone marrow and lymph nodes; untreated, symptomatic VL is **fatal in over 95%** within about 2 years. [WHO 2023]",
        "Globally VL occurs in about **80 countries**; WHO estimates **50,000-90,000 new cases a year**, and the burden has shifted from South Asia to **East Africa (Sudan, South Sudan, Ethiopia, Kenya)**, which now reports the majority. [WHO 2023]",
        "In the **Indian subcontinent** VL is **anthroponotic** - humans are the only reservoir - so treating every case and every PKDL patient breaks transmission, unlike the zoonotic (dog) VL of the Mediterranean and Brazil. [Harrison 22e]",
        "India's endemic focus is **Bihar, Jharkhand, West Bengal and eastern Uttar Pradesh** - **54 districts, 633 blocks**; Bihar contributes the large majority of cases (Saran, Siwan, Vaishali, Muzaffarpur, Gopalganj belt). [NCVBDC 2024]",
        "Indian cases fell from about **77,000 in 1992 and over 44,000 in 2007** to **under 1,000 a year since 2022** under the **Kala-azar Elimination Programme**. [NCVBDC 2024]",
        "The **elimination target** is **under 1 VL case per 10,000 population per year at block level**; India reached it in **all 633 endemic blocks in 2023** and must sustain it for **3 consecutive years** before WHO validation. [NCVBDC 2024]",
        "**Bangladesh** became the **first country validated by WHO** for eliminating VL as a public-health problem in **October 2023**; Nepal and Bhutan are on the same pathway. [WHO 2023]",
        "VL is a disease of the **rural poor**: mud-walled houses with cracks, damp floors, cattle sheds next to the house, poor nutrition and sleeping outdoors, mainly among **Musahar and other marginalised communities** in Bihar. [Park 27e]",
      ],
    },
    {
      heading: "Aetiology, vector and risk factors",
      points: [
        "**Leishmania donovani** causes VL in India and East Africa; **L. infantum (L. chagasi)** causes zoonotic VL in the Mediterranean, Middle East, Central Asia and Brazil. [Harrison 22e]",
        "The parasite has two forms: the flagellated **promastigote** in the sandfly gut and the non-flagellated intracellular **amastigote (Leishman-Donovan or LD body, 2-4 micrometres)** in human macrophages. [Harrison 22e]",
        "The Indian vector is the female sandfly **Phlebotomus argentipes** - tiny (2-3 mm), hairy, a **weak hopping flier** with a range of under 50-100 m, active from dusk, resting low on walls (under 6 feet) and breeding in **moist organic soil and cracks in mud walls and cattle sheds**. [NCVBDC 2024]",
        "Transmission is also possible by **blood transfusion, shared needles, congenital (transplacental)** and organ transplant routes. [Harrison 22e]",
        "Incubation is usually **2-6 months** (range 10 days to several years); most infections are **asymptomatic** - only about 1 in 5-10 infected people develop disease. [Harrison 22e]",
        "Risk factors for disease: **malnutrition, HIV, immunosuppression (transplant, steroids, biologics), young age**, a household case in the last year and living within a cluster. [WHO 2023]",
        "Seasonal peak of sandfly density is the **pre-monsoon and monsoon months (March-October)**, which is why indoor residual spraying is timed around **February-March and May-June**. [NCVBDC 2024]",
      ],
    },
    {
      heading: "Pathophysiology - why the signs and the drugs",
      points: [
        "Inoculated promastigotes are taken up by **macrophages via complement receptors (CR3)**; the surface **lipophosphoglycan and gp63** inhibit the oxidative burst and phagolysosome fusion, letting amastigotes multiply inside. [Harrison 22e]",
        "Control depends on a **Th1 response (IL-12, IFN-gamma activating macrophage nitric oxide)**; disease follows when **IL-10 and TGF-beta dominate** - so the skin-test (leishmanin) is **negative during active VL** and becomes positive after cure. [Harrison 22e]",
        "Parasitised macrophages fill the spleen, liver and marrow, producing **massive splenomegaly** and **hypersplenism**, which with marrow infiltration explains **pancytopenia**. [Harrison 22e]",
        "**Polyclonal B-cell activation** gives marked **hypergammaglobulinaemia (IgG)** with **reversed albumin-globulin ratio** - the basis of the obsolete **aldehyde (Napier) test** and of high ESR. [Harrison 22e]",
        "**Anaemia** is multifactorial - hypersplenism, marrow suppression, haemolysis and blood loss; neutropenia and immune suppression make **secondary bacterial infection (pneumonia, TB, dysentery)** the commonest cause of death. [Harrison 22e]",
        "**Grey-black skin hyperpigmentation**, giving the name kala-azar (black fever), is seen mainly in Indian patients; its mechanism is uncertain (proposed adrenal involvement or melanocyte stimulation). [Harrison 22e]",
        "**Amphotericin B** binds **ergosterol-like sterols** in the Leishmania membrane, forming pores; the **liposomal form** is taken up by the same reticulo-endothelial macrophages that harbour the parasite, delivering drug to the target and sparing the kidney. [Goodman and Gilman 14e]",
        "**Miltefosine** (alkylphosphocholine) disrupts parasite membrane phospholipid and signalling and is the only **oral** drug; **paromomycin** is an aminoglycoside that blocks parasite ribosomes; **antimonials** inhibit trypanothione reductase and glycolysis - resistance in Bihar is linked to parasite thiol up-regulation. [Goodman and Gilman 14e]",
      ],
    },
    {
      heading: "Classification and case definitions",
      points: [
        "**Clinical spectrum**: asymptomatic infection, **symptomatic VL**, **VL-HIV co-infection**, relapse VL, and **PKDL** as a dermal sequel. [WHO 2023]",
        "**Suspected VL case (India)**: a person from an endemic area with **fever of more than 2 weeks and splenomegaly**, not responding to antimalarials and antibiotics. [NCVBDC 2024]",
        "**Confirmed VL**: a suspected case with a **positive rK39 rapid test** or **LD bodies on splenic, marrow or lymph-node aspirate**. [NCVBDC 2024]",
        "**Primary unresponsiveness**: no initial cure at end of treatment; **relapse**: return of symptoms and parasites after initial cure, usually within **6-12 months**. [WHO 2023]",
        "**Initial cure** is clinical improvement at end of treatment; **definitive (final) cure** is being **symptom-free at 6 months** after treatment. [NCVBDC 2024]",
        "**PKDL is classified clinically** as **macular (hypopigmented, the commonest in India), papular, nodular, or polymorphic** (mixed); WHO grades PKDL severity by extent - grade 1 face only, grade 2 face plus upper chest and arms, grade 3 most of the body. [WHO 2023]",
        "**Splenic aspirate parasite density** is graded **0 to 6+** on a log scale (Chulay-Bryceson) - from fewer than 1 parasite per 1,000 fields to over 100 per field - and is used to judge response and relapse. [WHO 2010]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**Prolonged fever** over 2 weeks, often irregular or **double-quotidian (two spikes in 24 hours)**, in a patient who looks surprisingly **well and ambulant** for the degree of fever. [Harrison 22e]",
        "Progressive **abdominal fullness or left upper quadrant dragging pain** from splenomegaly, **weight loss and wasting** despite preserved appetite. [Harrison 22e]",
        "**Darkening of the skin** of face, hands and abdomen, and thinning of hair, are noticed by the family. [Park 27e]",
        "**Bleeding** - epistaxis, gum bleeding - and pallor with exertional breathlessness reflect thrombocytopenia and anaemia. [Harrison 22e]",
        "Ask the **residence in an endemic block**, a **past VL episode** or treatment, **family or neighbour with VL or PKDL**, migration back from endemic Bihar, and **HIV risk**. [NCVBDC 2024]",
        "Atypical presentations: **HIV-VL** with fever and cytopenia but small or absent spleen, gut, lung or skin involvement; **acute onset** mimicking malaria or typhoid; and VL first found during work-up of **pancytopenia or PUO** outside the endemic area. [Harrison 22e]",
        "**PKDL history**: painless hypopigmented patches or nodules starting **around the mouth and chin**, appearing **months to years after treated VL** (in India median about 2-3 years; 15-20% give no VL history). [WHO 2023]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Massive splenomegaly** - soft, non-tender, often crossing the umbilicus or reaching the right iliac fossa; splenomegaly of over 8 cm in a fever of weeks is kala-azar until proven otherwise in an endemic area. [Harrison 22e]",
        "**Moderate hepatomegaly**, usually smaller than the spleen; jaundice and ascites are late signs suggesting advanced disease or co-infection. [Harrison 22e]",
        "**Pallor, wasting, oedema** (hypoalbuminaemia) and **dry, thin, brittle hair**; **grey-dark hyperpigmentation** of the skin. [Park 27e]",
        "**Lymphadenopathy** is **uncommon in Indian VL** but common in **Sudanese/East African VL** - useful in a viva. [Harrison 22e]",
        "**Petechiae, epistaxis, gum bleeding**; look for signs of secondary infection - crepitations, oral thrush, **cancrum oris** in children. [Harrison 22e]",
        "**PKDL**: symmetric **hypopigmented macules** with preserved sensation (unlike leprosy), or papules and nodules on face, chin, lips, ears and trunk; **no nerve thickening**. [WHO 2023]",
        "Record **spleen size in cm below the costal margin** at baseline - regression of the spleen and rise in Hb are the clinical markers of cure. [NCVBDC 2024]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Chronic malaria and hyperreactive malarial splenomegaly** (tropical splenomegaly syndrome): very high IgM, high anti-malarial antibody, responds to prolonged antimalarials; rK39 negative. [Harrison 22e]",
        "**Haematological malignancy** - **CML** (leucocytosis, basophilia, BCR-ABL), **myelofibrosis** (tear-drop cells, dry tap), **lymphoma** (nodes, LDH): leucocytosis argues against VL, which causes leucopenia. [Harrison 22e]",
        "**Enteric fever, tuberculosis (disseminated, splenic), brucellosis** and **infective endocarditis** - prolonged fever with splenomegaly but usually smaller spleen; cultures and imaging discriminate. [Harrison 22e]",
        "**Cirrhosis with portal hypertension** - varices, ascites, stigmata of liver disease and no fever. [Harrison 22e]",
        "**Haemolytic anaemias (thalassaemia)** - lifelong, family history, target cells and HbF/HbA2 on HPLC. [Harrison 22e]",
        "For PKDL: **leprosy** (anaesthetic patches, thickened nerves, AFB on slit skin), **vitiligo** (depigmented, not hypopigmented), **pityriasis versicolor**, sarcoidosis and lupus vulgaris. [WHO 2023]",
        "Outside the endemic belt, consider **cutaneous leishmaniasis (L. tropica) of Rajasthan and Himachal** - a skin ulcer, not a visceral disease. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**CBC**: pancytopenia - Hb often **under 8 g/dL**, WBC **under 3,000/microlitre** with neutropenia, platelets under 1 lakh; ESR very high. [Harrison 22e]",
        "**Serum proteins**: albumin low, **globulin high with reversed A:G ratio**; LFT, creatinine and electrolytes before amphotericin. [Harrison 22e]",
        "**rK39 immunochromatographic RDT** (recombinant kinesin antigen) is the **first-line diagnostic at PHC level**: sensitivity **about 95-99% and specificity about 90-98% in South Asia**; it uses a fingerprick sample and reads in **10-20 minutes**. [WHO 2023]",
        "rK39 detects antibody, so it **stays positive for years after cure** - it cannot diagnose **relapse**, which needs parasitological confirmation; it is also **less sensitive in HIV-VL and in East Africa**. [WHO 2023]",
        "**Splenic aspirate** has the highest sensitivity, **93-99%**, but carries a risk of fatal haemorrhage (about **1 in 1,000**); do it only with platelets over 40,000, INR normal and a palpable spleen over 3 cm. [WHO 2010]",
        "**Bone marrow aspirate** is safer but less sensitive (**53-86%**); **lymph-node aspirate** 53-65%, more useful in East Africa; Giemsa stain shows **LD bodies (amastigotes with nucleus and rod-shaped kinetoplast)** in macrophages. [Harrison 22e]",
        "Advanced: **PCR / qPCR** on blood or tissue (best in HIV-VL and PKDL; also for monitoring), **DAT (direct agglutination test)**, culture in **NNN medium**, and **rK28** RDT; **leishmanin skin test** is negative in active VL. [WHO 2023]",
        "**Screen every VL patient for HIV and TB**; and in PKDL, rK39 positivity with typical lesions in an endemic area is enough for programme diagnosis, with **slit-skin smear or PCR** for confirmation. [NCVBDC 2024]",
      ],
    },
    {
      heading: "Management in OPD and primary care",
      points: [
        "Suspect, test with **rK39 at the PHC/CHC**, and **refer every confirmed case** to the designated kala-azar treatment centre - treatment is free under NCVBDC and is given **in a facility under supervision**. [NCVBDC 2024]",
        "**First line in India: single-dose liposomal amphotericin B (LAmB) 10 mg/kg IV** in 5% dextrose over **2 hours** - cure rates **over 95%** with one hospital day. [NCVBDC 2024]",
        "**Second-line combinations** (when LAmB is unsuitable or unavailable): **LAmB 5 mg/kg single dose + miltefosine for 7 days**; **LAmB 5 mg/kg + paromomycin for 10 days**; or **miltefosine + paromomycin for 10 days**. [WHO 2023]",
        "**Miltefosine** dose is about **2.5 mg/kg/day orally**: adults over 25 kg **50 mg twice daily**, under 25 kg 50 mg once daily, children 2-11 years 2.5 mg/kg/day; take with food to reduce vomiting. [WHO 2010]",
        "**Paromomycin** is **11 mg/kg base (15 mg/kg sulphate) IM once daily**; as monotherapy it is given for **21 days**. [WHO 2010]",
        "**Amphotericin B deoxycholate 1 mg/kg IV daily or on alternate days for 15 doses** (total 15 mg/kg) remains a backup where LAmB is unavailable - needs admission for renal and potassium monitoring. [WHO 2010]",
        "**Miltefosine monotherapy (28 days) is no longer recommended** in India because relapse rose to **10-20%**, and **sodium stibogluconate is abandoned in Bihar** because over 60% are unresponsive. [NCVBDC 2024]",
        "Supportive care: **nutrition, iron and folate**, treat **intercurrent infections first**, transfuse if Hb under 5-6 g/dL or bleeding, and counsel on the **wage-loss compensation** paid to VL and PKDL patients under the programme. [NCVBDC 2024]",
      ],
    },
    {
      heading: "Management in IPD and emergencies",
      points: [
        "**Admit** for LAmB infusion; also admit for **severe anaemia (Hb under 5 g/dL)**, **bleeding, jaundice, oedema, severe malnutrition, age under 2 or over 45 years, HIV co-infection, suspected secondary infection** or relapse. [WHO 2023]",
        "Before amphotericin: weight, **creatinine, potassium, magnesium**, CBC; **test dose** is not required for LAmB in programme practice but **watch the first 30 minutes** for infusion reactions. [NCVBDC 2024]",
        "**Infusion reactions** (fever, rigors, back pain, flushing, hypoxia) are commoner with **deoxycholate**; slow the infusion, give paracetamol and antihistamine; hydrocortisone premedication for recurrent reactions. [Goodman and Gilman 14e]",
        "For **deoxycholate AmB**, prehydrate with **500 mL-1 L normal saline**, monitor creatinine and **potassium at least twice weekly**, and replace potassium and magnesium - nephrotoxicity and hypokalaemia are dose-limiting. [Goodman and Gilman 14e]",
        "**Treat bacterial infections empirically and aggressively** - pneumonia, sepsis and diarrhoea kill more VL patients than the parasite; screen for **TB** in prolonged illness. [Harrison 22e]",
        "**Relapse or unresponsive VL**: confirm parasitologically, then give **LAmB total 15-30 mg/kg** (for example 5 mg/kg on alternate days) or a combination; refer to a tertiary centre and test for HIV. [WHO 2023]",
        "**Severe bleeding**: platelet transfusion and FFP; avoid splenic aspiration and IM injections while platelets are low. [Harrison 22e]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**HIV-VL co-infection** (about 2-6% of VL in Bihar): WHO recommends **LAmB 5 mg/kg on days 1, 3, 5, 7, 9 and 11 (total 30 mg/kg) plus miltefosine 100 mg/day for 14 days** in South Asia (28 days in East Africa). [WHO 2022]",
        "In HIV-VL start **ART** (dolutegravir-based) early, and give **secondary prophylaxis with LAmB 3-5 mg/kg every 3-4 weeks** while **CD4 is under 200 cells/microlitre**; relapse is common. [WHO 2022]",
        "**Pregnancy**: **LAmB is the drug of choice** (10 mg/kg single dose or 3 mg/kg daily to 21 mg/kg total); **miltefosine is teratogenic** and contraindicated, and antimonials cause abortion. [WHO 2023]",
        "**Women of reproductive age on miltefosine** must have a pregnancy test first and use **effective contraception during treatment and for at least 3 months after** (current product labels advise up to 5 months). [WHO 2010]",
        "**Children**: same single-dose LAmB 10 mg/kg; miltefosine 2.5 mg/kg/day (allometric dosing preferred); watch nutrition and secondary infection. [WHO 2023]",
        "**CKD and elderly**: prefer **LAmB**, avoid deoxycholate and paromomycin (nephrotoxic, ototoxic); adjust supportive care. [Goodman and Gilman 14e]",
        "**Transplant and biologic users** develop VL with atypical, severe disease - think of it with unexplained cytopenia after travel or residence in an endemic area. [Harrison 22e]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Secondary bacterial infections** - pneumonia, TB, sepsis, dysentery, **cancrum oris** - are the major cause of death. [Harrison 22e]",
        "**Severe anaemia, bleeding** (epistaxis, GI), **hepatic dysfunction**, oedema and malnutrition; splenic rupture or infarction is rare. [Harrison 22e]",
        "**Drug toxicity**: deoxycholate AmB - **nephrotoxicity, hypokalaemia, myocarditis**; antimonials - **QT prolongation, arrhythmia, pancreatitis**; paromomycin - **ototoxicity, nephrotoxicity, raised transaminases, injection pain**; miltefosine - **vomiting, diarrhoea, hepatotoxicity, nephrotoxicity, teratogenicity, keratitis**. [Goodman and Gilman 14e]",
        "**PKDL** follows treated VL in **about 5-15% of Indian patients** (up to 50% in Sudan, where it appears within 6 months); in India it persists for years and **does not heal spontaneously**. [WHO 2023]",
        "**Relapse** occurs in about **5% after single-dose LAmB** and much more often in HIV co-infection; most relapses appear within **6-12 months**. [WHO 2023]",
        "With prompt treatment, mortality is **under 5%**; poor prognostic markers are **age under 2 or over 45, severe anaemia, jaundice, bleeding, oedema, HIV and malnutrition**. [WHO 2023]",
      ],
    },
    {
      heading: "PKDL - the reservoir",
      points: [
        "**Post-kala-azar dermal leishmaniasis** is a dermal form with **parasites in the skin** after (or occasionally without) VL; nodular lesions contain abundant parasites and **infect sandflies**, so PKDL keeps transmission going after VL cases fall. [WHO 2023]",
        "It is thought to reflect a **post-treatment Th1 response against persistent skin parasites** - IFN-gamma and IL-10 both high in the lesions. [Harrison 22e]",
        "**Diagnosis**: typical lesions + endemic area + rK39 positive; **slit-skin smear** is often negative in macular PKDL, so **PCR of skin biopsy** confirms. [WHO 2023]",
        "**Treatment (WHO 2022, South Asia)**: **miltefosine for 12 weeks with allometric dosing**, or **LAmB 5 mg/kg twice weekly for 3 weeks (total 30 mg/kg)** where miltefosine is unsuitable. [WHO 2022]",
        "Stop miltefosine and refer to ophthalmology if **eye pain, redness or blurring** appear - **keratitis and ocular toxicity** were reported with 12-week courses in India. [NCVBDC 2024]",
        "Programme case search for PKDL is **house-to-house in villages with VL cases in the previous 3 years**, using ASHAs and photo cards. [NCVBDC 2024]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "Refer **all suspected cases** to the block/district kala-azar treatment centre; refer relapse, HIV-VL, pregnancy, severe disease and drug toxicity to a **tertiary centre (for example RMRIMS Patna)**. [NCVBDC 2024]",
        "Follow up treated VL at **1, 3, 6 and 12 months** for fever, spleen size, Hb and weight; **definitive cure is declared at 6 months** if symptom-free. [NCVBDC 2024]",
        "Continue watching for **PKDL for at least 3 years** - teach the patient to report any new skin patch. [NCVBDC 2024]",
        "During miltefosine: **monthly LFT and creatinine**, pregnancy test, contraception and eye symptoms; during paromomycin: creatinine, LFT and hearing. [WHO 2010]",
        "Every case is entered into **KAMIS (Kala-azar Management Information System)** and the village is mapped for **active case detection and focal spraying**. [NCVBDC 2024]",
      ],
    },
    {
      heading: "Prevention and the national elimination programme",
      points: [
        "The programme runs under **NCVBDC** with four pillars: **early case detection and complete treatment, integrated vector management, community mobilisation, and surveillance with operational research**. [NCVBDC 2024]",
        "**Indoor residual spraying (IRS)** with the synthetic pyrethroid **alpha-cypermethrin** (replacing DDT, to which sandflies became resistant) in **two rounds a year**, walls and cattle sheds sprayed **up to 6 feet**. [NCVBDC 2024]",
        "**Active case detection** (camp approach and index-case-based search within **500 m**) plus incentives to **ASHAs** for referring a confirmed case and ensuring completion. [NCVBDC 2024]",
        "**Pucca housing** under PMAY-G, **plastering of mud walls**, keeping cattle away from sleeping areas and **fine-mesh insecticide-treated nets** reduce sandfly contact. [NCVBDC 2024]",
        "There is **no vaccine** for human VL; post-elimination surveillance must also screen **HIV patients from endemic districts** and migrants. [WHO 2023]",
        "VL is a **notifiable disease** in endemic states; the **WHO NTD Road Map 2021-2030** targets elimination as a public-health problem in South-East Asia. [WHO 2021]",
      ],
    },
    {
      heading: "Latest guideline updates (2022-2026)",
      points: [
        "**WHO 2022** guideline for **HIV-VL co-infection**: LAmB 30 mg/kg total plus **miltefosine** (14 days South Asia, 28 days East Africa) replaces LAmB monotherapy. [WHO 2022]",
        "**WHO 2022** guideline for **PKDL in South Asia**: miltefosine 12 weeks with allometric dosing, or LAmB 5 mg/kg twice weekly for 3 weeks. [WHO 2022]",
        "**WHO 2024** guideline for **East Africa**: **paromomycin + miltefosine for 14 days** replaces the 17-day SSG + paromomycin combination - an important contrast with India's single-dose LAmB. [WHO 2024]",
        "**India reached the elimination target in all endemic blocks in 2023** and has been sustaining it through 2024-2025, entering the 3-year validation window; Bangladesh was validated in **October 2023**. [NCVBDC 2024]",
        "**rK39 remains the programme diagnostic**, but PCR-based tools (qPCR, LAMP) are increasingly used for HIV-VL, PKDL and post-elimination surveillance. [WHO 2023]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic short note: **'Kala-azar - diagnosis and treatment'** or **'PKDL'**; always write the **case definition, rK39, single-dose LAmB 10 mg/kg** and the **elimination target under 1 per 10,000 at block level**.",
        "Common mistake: **using rK39 to diagnose relapse** - it remains positive for years; relapse needs a tissue aspirate or PCR.",
        "Common mistake: writing **SSG or miltefosine monotherapy** as first line in India - both are obsolete for Bihar.",
        "Viva: **why is PKDL important?** - it is the **reservoir** in an anthroponotic disease, and nodular lesions infect sandflies.",
        "Viva: **why is lymphadenopathy a clue to geography?** - common in Sudanese VL, uncommon in Indian VL.",
        "Viva: **why is LAmB more effective and less toxic?** - liposomes are taken up by the **reticulo-endothelial macrophages** that harbour amastigotes and reach the kidney less.",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs for visceral leishmaniasis and PKDL",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Liposomal amphotericin B (first line, India)", "10 mg/kg IV in 5% dextrose over 2 h", "Single dose", "Infusion reactions, back pain, mild hypokalaemia, rare nephrotoxicity; safe in pregnancy"],
        ["LAmB + miltefosine", "LAmB 5 mg/kg IV once, then miltefosine about 2.5 mg/kg/day orally", "Miltefosine 7 days", "Miltefosine: vomiting, diarrhoea, hepatotoxicity, teratogenic"],
        ["LAmB + paromomycin", "LAmB 5 mg/kg IV once, then paromomycin 11 mg/kg base IM OD", "Paromomycin 10 days", "Ototoxicity, nephrotoxicity, raised transaminases, injection pain"],
        ["Miltefosine + paromomycin", "Miltefosine 2.5 mg/kg/day oral + paromomycin 11 mg/kg base IM OD", "10 days (India); 14 days in East Africa (WHO 2024)", "Contraception needed; avoid in pregnancy"],
        ["Amphotericin B deoxycholate", "1 mg/kg IV over 4-6 h, daily or alternate days", "15 doses (total 15 mg/kg)", "Nephrotoxicity, hypokalaemia, hypomagnesaemia, rigors, myocarditis, anaemia"],
        ["HIV-VL regimen", "LAmB 5 mg/kg IV on days 1, 3, 5, 7, 9, 11 + miltefosine 100 mg/day", "Miltefosine 14 days (South Asia); then secondary prophylaxis LAmB every 3-4 weeks if CD4 under 200", "As above; interactions minimal with dolutegravir ART"],
        ["PKDL - miltefosine", "Allometric dose (adult about 50 mg BD)", "12 weeks", "Keratitis and eye toxicity - stop and refer; GI upset, hepatotoxicity"],
        ["PKDL - LAmB", "5 mg/kg IV twice weekly", "3 weeks (total 30 mg/kg)", "Infusion reactions; hypokalaemia"],
        ["Sodium stibogluconate (obsolete in Bihar)", "20 mg/kg/day IM or IV", "30 days", "QT prolongation, arrhythmia, pancreatitis, hepatitis; over 60% unresponsive in Bihar"],
      ],
    },
    {
      heading: "Diagnostic tests for VL - what each is good for",
      columns: ["Test", "Sensitivity / specificity", "Strength", "Limitation"],
      rows: [
        ["rK39 RDT (fingerprick)", "About 95-99% / 90-98% in South Asia", "PHC-level, 10-20 min, programme test", "Positive for years after cure - not for relapse; less sensitive in HIV and East Africa"],
        ["Splenic aspirate (Giemsa)", "93-99%", "Gold standard; grading 0-6+ for response", "Fatal bleed about 1 in 1,000; needs platelets over 40,000 and normal INR"],
        ["Bone marrow aspirate", "53-86%", "Safer; also excludes leukaemia", "Lower sensitivity"],
        ["Lymph-node aspirate", "53-65%", "Useful in East African VL", "Nodes rarely enlarged in Indian VL"],
        ["PCR / qPCR (blood, tissue)", "Over 95% in blood", "HIV-VL, PKDL, relapse, monitoring", "Tertiary labs; detects asymptomatic infection"],
        ["Direct agglutination test (DAT)", "About 95% / 86-98%", "Quantitative serology", "Needs lab; remains positive after cure"],
        ["Leishmanin skin test", "Negative in active VL", "Marks past infection or cure", "Not diagnostic of active disease"],
      ],
    },
    {
      heading: "Fever with massive splenomegaly - differential",
      columns: ["Condition", "Discriminating clinical clue", "Key test"],
      rows: [
        ["Visceral leishmaniasis", "Endemic Bihar belt; fever over 2 weeks; pancytopenia; dark skin", "rK39 RDT; splenic aspirate LD bodies"],
        ["Hyperreactive malarial splenomegaly", "Repeated malaria; high IgM", "Malaria antibody, IgM; response to antimalarials"],
        ["Chronic myeloid leukaemia", "Leucocytosis with left shift and basophilia; often afebrile", "Peripheral smear, BCR-ABL"],
        ["Myelofibrosis", "Older age, tear-drop cells, dry tap", "Marrow biopsy, JAK2/CALR"],
        ["Lymphoma", "Lymphadenopathy, B symptoms, high LDH", "Node biopsy, CT"],
        ["Thalassaemia major/intermedia", "Lifelong anaemia, facies, family history", "HPLC"],
        ["Cirrhosis with portal hypertension", "Varices, ascites, liver stigmata, no fever", "USG Doppler, endoscopy"],
      ],
    },
    {
      heading: "PKDL versus leprosy versus vitiligo",
      columns: ["Feature", "PKDL", "Leprosy", "Vitiligo"],
      rows: [
        ["Colour", "Hypopigmented macules, papules, nodules", "Hypopigmented or erythematous patches", "Depigmented (milky white)"],
        ["Sensation", "Normal", "Reduced or absent", "Normal"],
        ["Nerves", "Not thickened", "Thickened peripheral nerves", "Normal"],
        ["Distribution", "Starts around mouth and chin, spreads symmetrically", "Asymmetric, any site", "Periorificial, acral, segmental"],
        ["History", "Treated VL months to years earlier", "Contact with leprosy", "Family history, autoimmunity"],
        ["Test", "rK39 positive; skin PCR", "Slit-skin smear AFB", "Wood lamp accentuation"],
      ],
    },
    {
      heading: "Classification of VL outcomes and timing",
      columns: ["Term", "Definition", "When assessed"],
      rows: [
        ["Initial cure", "Afebrile, spleen regressing, Hb rising at end of treatment", "End of treatment"],
        ["Definitive cure", "Symptom-free with no relapse", "6 months after treatment"],
        ["Primary unresponsiveness", "No initial cure", "End of treatment"],
        ["Relapse", "Return of symptoms with parasites after initial cure", "Usually within 6-12 months"],
        ["PKDL", "Dermal lesions with parasites after VL", "Months to years (India); within 6 months (Sudan)"],
      ],
    },
  ],
  redFlags: [
    "Hb under 5 g/dL, breathlessness or heart failure from anaemia",
    "Active bleeding - epistaxis, gum or GI bleeding - or platelets under 20,000",
    "Fever with signs of pneumonia, sepsis or dysentery in a VL patient - secondary infection kills",
    "Jaundice, ascites or generalised oedema",
    "VL in a person with HIV, in pregnancy, or in a child under 2",
    "Relapse after a completed course, or no response by end of treatment",
    "Eye pain, redness or blurred vision during miltefosine (PKDL course)",
  ],
  pearls: [
    "**Fever over 2 weeks + splenomegaly + endemic area = suspected kala-azar** - test with rK39.",
    "**One dose, 10 mg/kg** - single-dose liposomal amphotericin B is first line in India.",
    "**rK39 cannot diagnose relapse** - it stays positive for years.",
    "Indian VL is **anthroponotic**, so **PKDL is the reservoir** that elimination must chase.",
    "**Lymph nodes - Sudan; skin darkening - India.**",
    "Elimination target: **under 1 per 10,000 population per year at block level** - achieved by India in 2023.",
    "**Miltefosine** = oral, teratogenic, contraception during and for months after.",
    "Spray **up to 6 feet** - the sandfly is a weak, low-flying hopper.",
  ],
  mcqs: [
    {
      id: "infectious-fever-visceral-leishmaniasis-q1",
      stem: "A 28-year-old man from Muzaffarpur, Bihar, has fever for 6 weeks, weight loss and a spleen palpable 12 cm below the costal margin. Hb is 7 g/dL, WBC 2,400/microlitre and platelets 80,000. The rK39 rapid test is positive. What is the recommended first-line treatment under the national programme?",
      options: [
        "Sodium stibogluconate 20 mg/kg/day for 30 days",
        "Miltefosine 50 mg twice daily for 28 days",
        "Liposomal amphotericin B 10 mg/kg IV as a single dose",
        "Amphotericin B deoxycholate 1 mg/kg on alternate days for 15 doses",
      ],
      answer: 2,
      explanation:
        "Single-dose liposomal amphotericin B 10 mg/kg is the first-line regimen in India, curing over 95% with one hospital day. Sodium stibogluconate is abandoned in Bihar because over 60% are unresponsive, miltefosine monotherapy was withdrawn after relapse rose to 10-20%, and deoxycholate amphotericin is a nephrotoxic backup only where LAmB is unavailable.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-visceral-leishmaniasis-q2",
      stem: "A woman treated for kala-azar 8 months ago presents with fever and an enlarging spleen. Her rK39 test is positive. What is the most appropriate next step to confirm relapse?",
      options: [
        "Repeat the rK39 test after 2 weeks",
        "Splenic or bone marrow aspirate for LD bodies (or PCR)",
        "Leishmanin skin test",
        "Serum globulin and albumin-globulin ratio",
      ],
      answer: 1,
      explanation:
        "rK39 detects antibody that persists for years after cure, so a positive result cannot distinguish relapse from past infection; relapse needs parasitological confirmation by splenic or marrow aspirate, or PCR. A repeat rK39 adds nothing, the leishmanin test is negative in active disease and positive after cure, and globulin levels are non-specific.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-visceral-leishmaniasis-q3",
      stem: "Which feature best explains why post-kala-azar dermal leishmaniasis is a priority for the Indian elimination programme?",
      options: [
        "It is a fatal condition if untreated",
        "It is transmitted directly from person to person by contact",
        "Its skin lesions harbour parasites that infect sandflies in an anthroponotic cycle",
        "It always develops within 6 months of VL treatment",
      ],
      answer: 2,
      explanation:
        "Indian VL is anthroponotic: humans are the only reservoir, and PKDL nodules contain parasites that sandflies pick up, sustaining transmission after VL cases fall. PKDL itself is not fatal, is not spread by contact, and in India appears months to years (median 2-3 years) after VL - the within-6-months pattern is typical of Sudan.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-visceral-leishmaniasis-q4",
      stem: "A 30-year-old man with HIV (CD4 90 cells/microlitre) from Saran district is diagnosed with visceral leishmaniasis. Which regimen does WHO (2022) recommend in South Asia?",
      options: [
        "Liposomal amphotericin B 10 mg/kg single dose alone",
        "Paromomycin IM for 21 days",
        "Liposomal amphotericin B 5 mg/kg on alternate days to a total of 30 mg/kg plus miltefosine 100 mg/day for 14 days",
        "Sodium stibogluconate plus paromomycin for 17 days",
      ],
      answer: 2,
      explanation:
        "WHO 2022 recommends LAmB 30 mg/kg total (5 mg/kg on days 1, 3, 5, 7, 9, 11) combined with miltefosine for 14 days in South Asian HIV-VL, followed by ART and secondary prophylaxis while CD4 is under 200. Single-dose LAmB alone has high failure and relapse in HIV, paromomycin monotherapy is not used here, and SSG plus paromomycin was the old East African regimen.",
      difficulty: "hard",
    },
    {
      id: "infectious-fever-visceral-leishmaniasis-q5",
      stem: "Indoor residual spraying against Phlebotomus argentipes is done only up to a height of about 6 feet on walls. What is the reason?",
      options: [
        "The sandfly is a weak, hopping flier that rests low on walls",
        "Insecticide above 6 feet is toxic to the household",
        "The sandfly breeds only on roofs",
        "Pyrethroids lose activity at higher levels",
      ],
      answer: 0,
      explanation:
        "Phlebotomus argentipes is a small, weak hopping flier that rests on the lower parts of walls and cattle sheds, so spraying up to 6 feet covers its resting sites efficiently. Toxicity is not the reason, the sandfly breeds in moist soil and wall cracks rather than on roofs, and pyrethroid activity does not depend on height.",
      difficulty: "easy",
    },
  ],
  theory: [
    {
      id: "infectious-fever-visceral-leishmaniasis-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Discuss the clinical features, diagnosis and management of visceral leishmaniasis. Add a note on the kala-azar elimination programme in India.",
      openingLines: [
        "Visceral leishmaniasis (kala-azar) is a chronic, potentially fatal infection of the reticulo-endothelial system by Leishmania donovani, transmitted in India by the sandfly Phlebotomus argentipes.",
        "It presents as prolonged fever with massive splenomegaly and pancytopenia in residents of Bihar, Jharkhand, West Bengal and eastern UP, and is treated with single-dose liposomal amphotericin B.",
      ],
      answer: [
        {
          heading: "Epidemiology and agent",
          points: [
            "L. donovani; anthroponotic in India; vector P. argentipes (weak, low flier).",
            "54 districts, 633 blocks in 4 states; cases under 1,000 a year since 2022.",
            "Incubation 2-6 months; most infections asymptomatic.",
          ],
        },
        {
          heading: "Pathogenesis",
          points: [
            "Amastigotes in macrophages; Th1 failure with high IL-10.",
            "Hypersplenism and marrow infiltration: pancytopenia; polyclonal hypergammaglobulinaemia.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Fever over 2 weeks, double-quotidian; patient ambulant.",
            "Massive soft splenomegaly, hepatomegaly, weight loss, dark skin, bleeding, pallor.",
            "Lymphadenopathy uncommon in India.",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "Case definition: fever over 2 weeks + splenomegaly in an endemic area.",
            "rK39 RDT (95-99% sensitive); splenic aspirate 93-99%; marrow 53-86%; PCR in HIV and PKDL.",
            "CBC pancytopenia, reversed A:G ratio; screen HIV and TB.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "LAmB 10 mg/kg single dose IV (first line).",
            "Combinations: LAmB + miltefosine 7 days; LAmB + paromomycin 10 days; miltefosine + paromomycin 10 days.",
            "HIV-VL: LAmB 30 mg/kg total + miltefosine 14 days, ART, secondary prophylaxis.",
            "Supportive: treat infections, nutrition, transfusion.",
          ],
        },
        {
          heading: "Follow-up and PKDL",
          points: [
            "Definitive cure at 6 months; watch for PKDL for 3 years.",
            "PKDL treated with miltefosine 12 weeks or LAmB 5 mg/kg twice weekly x 3 weeks.",
          ],
        },
        {
          heading: "Elimination programme",
          points: [
            "Target under 1 case per 10,000 per year at block level - achieved 2023.",
            "Early diagnosis and complete treatment, IRS with alpha-cypermethrin twice a year, active case detection, KAMIS surveillance, ASHA incentives, wage compensation.",
          ],
        },
      ],
      mustDraw: ["Life cycle of L. donovani (sandfly promastigote and human amastigote)", "Diagnostic and treatment flow chart from suspected case to definitive cure"],
      markSplit: [
        { part: "Definition and epidemiology", marks: 1 },
        { part: "Clinical features", marks: 2 },
        { part: "Diagnosis", marks: 2 },
        { part: "Treatment including HIV-VL and PKDL", marks: 3 },
        { part: "Elimination programme", marks: 2 },
      ],
      keywords: ["rK39", "LAmB 10 mg/kg", "PKDL", "IRS", "under 1 per 10,000", "KAMIS"],
    },
    {
      id: "infectious-fever-visceral-leishmaniasis-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on post-kala-azar dermal leishmaniasis (PKDL).",
      openingLines: [
        "PKDL is a dermal form of leishmaniasis in which parasites persist in the skin, appearing months to years after apparent cure of visceral leishmaniasis.",
        "In anthroponotic Indian VL it is the hidden reservoir that sustains transmission, so finding and treating PKDL is central to elimination.",
      ],
      answer: [
        {
          heading: "Epidemiology and pathogenesis",
          points: [
            "Follows 5-15% of treated VL in India (median 2-3 years); up to 50% in Sudan within 6 months.",
            "Post-treatment immune response against persistent skin parasites.",
          ],
        },
        {
          heading: "Clinical types",
          points: [
            "Macular (commonest in India), papular, nodular, polymorphic.",
            "Starts around mouth and chin; normal sensation; nerves not thickened.",
          ],
        },
        {
          heading: "Diagnosis",
          points: ["Clinical + endemic area + rK39 positive; slit-skin smear or skin PCR to confirm.", "Differentiate leprosy and vitiligo."],
        },
        {
          heading: "Treatment and programme",
          points: [
            "Miltefosine 12 weeks (allometric) or LAmB 5 mg/kg twice weekly x 3 weeks (WHO 2022).",
            "Eye symptoms on miltefosine - stop and refer.",
            "House-to-house PKDL search in villages with VL in last 3 years; wage compensation.",
          ],
        },
      ],
      mustDraw: ["Table: PKDL vs leprosy vs vitiligo"],
      markSplit: [
        { part: "Definition and importance", marks: 1 },
        { part: "Clinical types and diagnosis", marks: 2 },
        { part: "Treatment and programme", marks: 2 },
      ],
      keywords: ["PKDL", "macular", "nodular", "miltefosine 12 weeks", "reservoir"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Leishmaniasis chapter",
    "WHO. Guideline for the treatment of visceral leishmaniasis in HIV co-infected patients in East Africa and South-East Asia, 2022",
    "WHO. Guideline for the treatment of PKDL in East Africa and South-East Asia, 2022",
    "WHO. Control of the leishmaniases, Technical Report Series 949, 2010",
    "WHO. Guideline for the treatment of visceral leishmaniasis in East Africa (paromomycin + miltefosine), 2024",
    "National Center for Vector Borne Diseases Control (NCVBDC), MoHFW. Kala-azar elimination programme operational guidelines, 2024 update",
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023",
    "Goodman and Gilman's The Pharmacological Basis of Therapeutics, 14th edition, 2023",
  ],
});

export default topics;
