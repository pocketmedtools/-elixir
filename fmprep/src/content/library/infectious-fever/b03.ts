import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "infectious-fever-fungal-infections-systemic",
  title: "Systemic fungal infections: candidiasis, aspergillosis, cryptococcosis, histoplasmosis",
  frequency: "common",
  oneLiner:
    "**Invasive (systemic) fungal infections** are deep-tissue or bloodstream infections by yeasts (**Candida, Cryptococcus**), moulds (**Aspergillus**) or dimorphic fungi (**Histoplasma, Talaromyces**) in a host with broken barriers or depressed immunity; treatment is organism-led - an **echinocandin for candidaemia**, **voriconazole or isavuconazole for invasive aspergillosis**, and the **WHO 2022 single high-dose liposomal amphotericin B plus flucytosine and fluconazole** regimen for HIV cryptococcal meningitis.",
  keywords: [
    "invasive fungal infection",
    "IFI",
    "candidaemia",
    "invasive candidiasis",
    "Candida auris",
    "invasive aspergillosis",
    "chronic pulmonary aspergillosis",
    "galactomannan",
    "beta-D-glucan",
    "cryptococcal meningitis",
    "CrAg",
    "histoplasmosis",
    "talaromycosis",
    "echinocandin",
    "caspofungin",
    "micafungin",
    "voriconazole",
    "isavuconazole",
    "liposomal amphotericin B",
    "flucytosine",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Invasive fungal infection (IFI)** means fungus in sterile tissue or blood with tissue damage; it is graded **proven, probable or possible** by the **EORTC/MSGERC 2020** definitions, which need host factors, clinical signs and mycological evidence. [EORTC/MSGERC 2020]",
        "Globally fungal disease kills an estimated **3.8 million people a year**, about 2.5 million directly attributable - more than malaria; the **WHO Fungal Priority Pathogens List 2022** puts **Cryptococcus neoformans, Candida auris, Aspergillus fumigatus and Candida albicans** in the critical group. [WHO FPPL 2022]",
        "India carries one of the largest fungal burdens: an estimated **over 57 million people** have a serious fungal disease, with **chronic pulmonary aspergillosis (CPA) around 1.7 million** (mostly after treated TB) and the world's highest rate of **mucormycosis**. [Ray et al., Open Forum Infect Dis 2022]",
        "The Indian ICU candidaemia study (27 ICUs) found an incidence of about **6.5 per 1000 ICU admissions**, with **C. tropicalis (about 42%)** the commonest species and over 30 species overall, and **C. auris** in about 5%. [Chakrabarti, Intensive Care Med 2015]",
        "**C. auris** was first characterised as a nosocomial pathogen in **Indian ICUs** (South Asian clade I); it spreads on hands and surfaces, colonises skin, and is often **fluconazole-resistant (over 90%)**. [WHO FPPL 2022]",
        "Cryptococcal meningitis causes about **15-19% of AIDS-related deaths** worldwide and is the leading cause of adult meningitis where HIV is common; Indian HIV cohorts report **CrAg positivity of 3-8%** at CD4 under 100. [WHO 2022]",
        "**Histoplasmosis** is endemic in the **Gangetic plains (West Bengal, Uttar Pradesh, Bihar)** and Assam; **talaromycosis (Talaromyces marneffei)** is endemic in **Manipur** and the North-East. [Harrison 22e]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**Candidaemia risk**: central venous catheter, broad-spectrum antibiotics, ICU stay over 7 days, TPN, abdominal surgery or anastomotic leak, necrotising pancreatitis, haemodialysis, neutropenia and **colonisation at several sites**. [ECMM/ISHAM/ASM 2025]",
        "**Invasive aspergillosis risk**: **neutrophils under 500/mm3 for over 10 days**, allogeneic stem-cell transplant and GVHD, high-dose steroids (prednisolone 0.3 mg/kg/day or more for over 3 weeks), ibrutinib and other BTK inhibitors, and severe influenza or COVID in ICU (IAPA, CAPA). [EORTC/MSGERC 2020]",
        "**Chronic pulmonary aspergillosis** affects the **immunocompetent with a lung cavity** - post-tuberculosis cavities (commonest in India), sarcoidosis, COPD and bullae. [ERS/ESCMID 2016]",
        "**Cryptococcus neoformans** (pigeon droppings, decaying wood) causes disease mainly at **CD4 under 100 cells/mm3**; **C. gattii** (eucalyptus) can infect immunocompetent hosts and forms brain cryptococcomas. [Harrison 22e]",
        "Other cryptococcal hosts: solid-organ transplant, long-term steroids, **anti-TNF and fingolimod**, cirrhosis, sarcoidosis and idiopathic CD4 lymphopenia. [IDSA 2010]",
        "**Histoplasma capsulatum** is inhaled from bat and bird guano (caves, poultry, old buildings); dissemination follows **HIV at CD4 under 150**, steroids or TNF blockers, but adrenal disease occurs in apparently healthy Indian men. [Harrison 22e]",
        "**Uncontrolled diabetes** raises risk of candidiasis, mucormycosis and cryptococcosis - see the Mucormycosis topic. [Harrison 22e]",
      ],
    },
    {
      heading: "Pathophysiology - why the signs and the drugs",
      points: [
        "**Neutrophils** kill hyphae and **T cells (Th1, Th17) with macrophages** control yeasts and dimorphs - so **neutropenia predisposes to moulds and candidaemia**, while **CD4 lymphopenia predisposes to Cryptococcus, Histoplasma, Talaromyces and Pneumocystis**. [Harrison 22e]",
        "**Candida** reaches blood from the **gut (translocation)** or a **colonised catheter biofilm**; biofilms resist azoles, which is why the **catheter must be removed**. [IDSA 2016]",
        "**Aspergillus** conidia (2-3 micrometres) reach alveoli, germinate into hyphae and **invade blood vessels**, causing infarction - the **halo sign** (haemorrhage around a nodule) early and the **air-crescent sign** when neutrophils recover. [Harrison 22e]",
        "**Cryptococcus** is inhaled, disseminates and enters the CNS; its **polysaccharide capsule (glucuronoxylomannan)** blocks phagocytosis and **clogs arachnoid villi**, raising intracranial pressure - the cause of headache, papilloedema, cranial nerve palsies and early death. [Harrison 22e]",
        "**Drug targets**: **azoles** inhibit lanosterol 14-alpha-demethylase (CYP51) and ergosterol synthesis; **echinocandins** inhibit **beta-1,3-D-glucan synthase** in the cell wall; **polyenes (amphotericin)** bind ergosterol and punch membrane pores; **flucytosine** is converted to 5-fluorouracil inside the fungus. [Goodman and Gilman 14e]",
        "**Why some drugs fail**: Cryptococcus and Mucorales have little beta-glucan, so **echinocandins do not work** against them; fluconazole has no mould activity; **C. krusei is intrinsically fluconazole-resistant** and C. glabrata often dose-dependent. [Harrison 22e]",
        "Echinocandins and fluconazole cross poorly into the eye and CSF - **endophthalmitis or meningitis needs fluconazole or amphotericin**, not an echinocandin alone. [IDSA 2016]",
      ],
    },
    {
      heading: "Classification",
      points: [
        "**EORTC/MSGERC 2020**: **proven** = organism on histology or culture from sterile tissue; **probable** = host factor + clinical/radiological feature + mycological evidence (galactomannan, beta-D-glucan, culture, PCR); **possible** = host and clinical criteria without mycology. [EORTC/MSGERC 2020]",
        "**Candidiasis spectrum**: mucocutaneous (oral, oesophageal, vulvovaginal) versus **invasive** - candidaemia, deep-seated (intra-abdominal abscess, endocarditis, osteomyelitis), **chronic disseminated (hepatosplenic)** after neutropenia, and endophthalmitis. [ECMM/ISHAM/ASM 2025]",
        "**Aspergillus spectrum by immunity**: **invasive aspergillosis** (immunosuppressed), **chronic pulmonary aspergillosis** (simple aspergilloma, chronic cavitary, chronic fibrosing - over 3 months), and **ABPA** (hypersensitivity in asthma - see the Asthma topic). [ERS/ESCMID 2016]",
        "**Cryptococcosis**: asymptomatic **cryptococcal antigenaemia** (CrAg positive, CSF negative), pulmonary, **meningitis/meningoencephalitis**, and disseminated (skin papules mimicking molluscum). [WHO 2022]",
        "**Histoplasmosis**: acute pulmonary, chronic cavitary pulmonary (TB mimic), **progressive disseminated (PDH)** and **adrenal** histoplasmosis. [Harrison 22e]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**Candidaemia**: an ICU patient on broad antibiotics with a central line who develops **new fever not responding to antibiotics** after day 5-7, often with no localising sign. [IDSA 2016]",
        "**Invasive aspergillosis**: neutropenic fever persisting **over 96 hours despite antibiotics**, pleuritic chest pain, cough and **haemoptysis**; sinus pain and epistaxis in sinus disease. [IDSA 2016]",
        "**CPA**: cured TB patient with months of **cough, weight loss, fatigue and haemoptysis** and a 'sputum-negative TB relapse' label - the classic Indian misdiagnosis. [ERS/ESCMID 2016]",
        "**Cryptococcal meningitis**: **subacute headache over 1-3 weeks**, fever, vomiting, blurred or double vision and confusion; neck stiffness is **absent in about 70%** because inflammation is minimal. [Harrison 22e]",
        "**Disseminated histoplasmosis**: prolonged fever, weight loss, diarrhoea, **painful oral or tongue ulcers**, and features of **adrenal insufficiency** (fatigue, postural giddiness, pigmentation). [Harrison 22e]",
        "**Talaromycosis**: fever, anaemia and **umbilicated skin papules on face and trunk** in advanced HIV from Manipur or South-East Asia. [Harrison 22e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Fundoscopy** in every candidaemia - fluffy white **chorioretinal exudates** (Candida endophthalmitis) change duration to at least 4-6 weeks. [IDSA 2016]",
        "**Skin**: tender erythematous nodules in candidaemia (often C. tropicalis); **necrotic eschar** in mould infection; **molluscum-like umbilicated papules** in Cryptococcus, Histoplasma and Talaromyces. [Harrison 22e]",
        "**CNS signs in cryptococcosis**: papilloedema, **sixth nerve palsy** (raised ICP), reduced vision, low GCS - a GCS under 15 predicts higher mortality. [WHO 2022]",
        "**Hepatosplenomegaly and lymphadenopathy** with pancytopenia suggest disseminated histoplasmosis, talaromycosis or leishmaniasis in the right context. [Harrison 22e]",
        "**Bilateral adrenal enlargement** with **postural hypotension and hyperpigmentation** in a middle-aged man suggests adrenal histoplasmosis (or TB). [Harrison 22e]",
        "**Clubbing and coarse crackles** over an old TB cavity with haemoptysis suggest an **aspergilloma** within CPA. [ERS/ESCMID 2016]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Persistent ICU fever**: candidaemia versus resistant Gram-negative sepsis, Clostridioides difficile, drug fever and line infection by bacteria - **beta-D-glucan and blood culture** separate them. [ECMM/ISHAM/ASM 2025]",
        "**Nodules with halo in a neutropenic patient**: invasive aspergillosis versus **mucormycosis** (reverse halo, over 10 nodules, sinusitis, voriconazole breakthrough) - galactomannan is negative in mucormycosis. [ECMM/MSG 2019]",
        "**CPA versus TB relapse**: both cavitate and bleed; CPA has **negative sputum NAAT, a positive Aspergillus IgG** (over 20 mg/L or kit cut-off) and a fungal ball or pericavitary thickening. [ERS/ESCMID 2016]",
        "**Chronic meningitis in HIV**: cryptococcal versus **TB meningitis** (high protein, low glucose, lymphocytes, basal exudates) - **CSF CrAg** is near 100% sensitive for cryptococcus. [WHO 2022]",
        "**Disseminated histoplasmosis** mimics **disseminated TB, kala-azar and lymphoma** - bone marrow aspirate with fungal stains, urine antigen and culture separate them. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**Blood culture** (2-3 sets, 20 mL each, automated system) is positive in only **about 50% of invasive candidiasis**; identify to species with **MALDI-TOF** - routine biochemical kits misidentify C. auris as C. haemulonii. [ECMM/ISHAM/ASM 2025]",
        "**Serum (1,3)-beta-D-glucan**: positive at **80 pg/mL or more** (Fungitell), negative predictive value about 95% for invasive candidiasis; false positives with albumin, IVIG, haemodialysis, gauze and piperacillin batches; negative in Cryptococcus and Mucorales. [ECMM/ISHAM/ASM 2025]",
        "**Galactomannan (Aspergillus)**: positive at an optical density index of **1.0 or more in serum or BAL**, or serum 0.7 plus BAL 0.8 or more (EORTC/MSGERC 2020); sensitivity falls on mould-active prophylaxis and in non-neutropenic patients. [EORTC/MSGERC 2020]",
        "**HRCT chest** in neutropenic fever over 3-5 days: nodules, **halo sign**, cavitation, **air-crescent sign**; CPA shows a cavity with fungal ball, pleural thickening and progression over 3 months. [IDSA 2016]",
        "**Cryptococcal antigen (CrAg) lateral flow assay** on serum, plasma or CSF: sensitivity and specificity **over 95%**; India ink is cheap but misses about 20-30%; CSF opening pressure **25 cm H2O or more** is raised. [WHO 2022]",
        "**Histoplasma**: **urine and serum antigen** (sensitivity about 90% in disseminated disease), bone marrow or ulcer biopsy with **GMS/PAS stain** showing small intracellular yeasts, and culture (slow, 2-4 weeks). [WHO/PAHO 2020]",
        "Always do **antifungal susceptibility testing** for invasive Candida, and **therapeutic drug monitoring (TDM)** for voriconazole, posaconazole, itraconazole and flucytosine. [ECMM/ISHAM/ASM 2025]",
      ],
    },
    {
      heading: "Management - candidiasis",
      points: [
        "**Mucosal**: oral thrush - **clotrimazole troche 10 mg five times daily** or fluconazole 100-200 mg/day for 7-14 days; **oesophageal - fluconazole 200-400 mg/day for 14-21 days**. [IDSA 2016]",
        "**Candidaemia first line is an echinocandin**: **caspofungin 70 mg IV loading then 50 mg daily**, **micafungin 100 mg IV daily** or **anidulafungin 200 mg loading then 100 mg daily**. [ECMM/ISHAM/ASM 2025]",
        "**Remove or change all central venous catheters** as soon as possible; take **repeat blood cultures every 24-48 hours** until negative. [IDSA 2016]",
        "**Step down to oral fluconazole 400 mg (6 mg/kg) daily** after **5-7 days** if the isolate is susceptible, the patient is stable and repeat cultures are negative; voriconazole step-down for C. krusei. [IDSA 2016]",
        "**Duration: 14 days after the first negative blood culture** and resolution of symptoms, provided there is no metastatic focus; endophthalmitis, endocarditis and osteomyelitis need weeks to months. [IDSA 2016]",
        "**Fluconazole** (800 mg loading, then 400 mg daily; halve after loading if CrCl under 50 mL/min) is acceptable in a stable, non-critically ill patient with low risk of resistance; **liposomal amphotericin 3-5 mg/kg/day** if echinocandins are unavailable or not tolerated. [IDSA 2016]",
        "**C. auris**: echinocandin first line, **contact isolation, chlorhexidine or chlorine-based cleaning** (quaternary ammonium compounds fail), and screening of contacts (axilla-groin swab). [ECMM/ISHAM/ASM 2025]",
      ],
    },
    {
      heading: "Management - aspergillosis, cryptococcosis, histoplasmosis",
      points: [
        "**Invasive aspergillosis**: **voriconazole 6 mg/kg IV 12-hourly x 2 doses then 4 mg/kg 12-hourly** (oral 200-300 mg 12-hourly), trough **1-5.5 mg/L**; or **isavuconazole 200 mg 8-hourly for 6 doses then 200 mg daily** - equal efficacy, fewer side effects (SECURE trial). [IDSA 2016]",
        "Aspergillosis alternatives: **liposomal amphotericin 3 mg/kg/day**; posaconazole; treat for at least **6-12 weeks** and until immunosuppression is reversed. [IDSA 2016]",
        "**CPA**: **itraconazole 200 mg twice daily** or voriconazole 150-200 mg twice daily for **at least 6 months**; **bronchial artery embolisation** for haemoptysis; surgery for a single aspergilloma. [ERS/ESCMID 2016]",
        "**HIV cryptococcal meningitis (WHO 2022)**: **single dose liposomal amphotericin B 10 mg/kg** + **flucytosine 100 mg/kg/day in 4 divided doses for 14 days** + **fluconazole 1200 mg/day for 14 days** (AMBITION-cm). [WHO 2022]",
        "Then **consolidation fluconazole 800 mg/day for 8 weeks** and **maintenance 200 mg/day** until CD4 is 200 or more (or 100-200 with suppressed viral load) after at least 1 year. [WHO 2022]",
        "If liposomal amphotericin is unavailable: **amphotericin B deoxycholate 1 mg/kg/day + flucytosine for 7 days**, then fluconazole 1200 mg/day for days 8-14; without amphotericin, **fluconazole 1200 mg + flucytosine for 14 days**. [WHO 2022]",
        "**Raised ICP**: **therapeutic lumbar puncture** to drain CSF until pressure is under 20 cm H2O or halved, repeated daily; **no steroids, acetazolamide or mannitol** (CryptoDex harm). [WHO 2022]",
        "**Histoplasmosis (WHO/PAHO 2020)**: severe disease - **liposomal amphotericin 3 mg/kg/day for 2 weeks**, then **itraconazole 200 mg thrice daily for 3 days then twice daily for at least 12 months**; mild-moderate - itraconazole alone. [WHO/PAHO 2020]",
      ],
    },
    {
      heading: "Inpatient and ICU care",
      points: [
        "**Admit** all invasive fungal infections: candidaemia, febrile neutropenia with lung nodules, suspected cryptococcal meningitis and disseminated histoplasmosis. [IDSA 2016]",
        "**Amphotericin safety bundle**: **1 L normal saline before each dose**, give over 2 hours (deoxycholate over 4-6 hours), **daily potassium and magnesium supplements** (K 1-2 tablets of 8 mEq twice daily, Mg 1-2 tablets), creatinine and electrolytes **twice weekly**. [WHO 2022]",
        "**Empirical antifungal** in persistent neutropenic fever after 4-7 days of antibiotics: caspofungin or liposomal amphotericin; prefer a **pre-emptive (biomarker and CT-driven)** strategy where tests are available. [IDSA 2016]",
        "Echinocandin **empirical** therapy may be used in septic ICU patients with risk factors and multisite colonisation; **stop after 4-5 days** if beta-D-glucan and cultures are negative. [IDSA 2016]",
        "Monitor **flucytosine** for marrow suppression (CBC twice weekly) and adjust dose to creatinine clearance; check **voriconazole trough on day 5**. [WHO 2022]",
        "**Source control**: drain intra-abdominal abscesses, remove infected prostheses, and early valve surgery for Candida endocarditis. [IDSA 2016]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: **amphotericin B (liposomal) is the drug of choice**; avoid high-dose fluconazole (craniofacial defects in first trimester) and voriconazole; flucytosine is teratogenic in animals. [IDSA 2016]",
        "**Neonates**: candidaemia in preterm infants - **amphotericin B deoxycholate 1 mg/kg/day** or fluconazole 12 mg/kg/day; always do LP and fundoscopy (high CNS spread). [IDSA 2016]",
        "**CKD**: echinocandins, voriconazole oral and isavuconazole need **no renal dose change**; avoid IV voriconazole at CrCl under 50 (cyclodextrin vehicle accumulates); reduce fluconazole and flucytosine. [Goodman and Gilman 14e]",
        "**Liver disease**: reduce **caspofungin to 35 mg daily** in Child-Pugh B; voriconazole halves the maintenance dose in mild-moderate cirrhosis. [Goodman and Gilman 14e]",
        "**Drug interactions**: azoles inhibit **CYP3A4** - raise tacrolimus, cyclosporine, statins, warfarin and vincristine levels; **rifampicin cuts voriconazole levels by about 95%** (contraindicated). [Goodman and Gilman 14e]",
        "**Resource-limited settings**: where liposomal amphotericin or flucytosine is unaffordable, use **amphotericin deoxycholate with saline loading** and the oral fluconazole-flucytosine regimen; CrAg lateral-flow tests are cheap and need no laboratory. [WHO 2022]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Candidaemia mortality is 30-60%**; each day of delay in antifungal therapy raises mortality - early source control and echinocandin cut it. [ECMM/ISHAM/ASM 2025]",
        "Candidaemia metastasises to **eye (up to 16%)**, heart valves, bone and kidney; hepatosplenic candidiasis presents as fever when neutrophils recover. [IDSA 2016]",
        "Invasive aspergillosis carries **30-60% mortality** and up to 90% in cerebral disease; CPA has 5-year mortality around **40-50%** and causes life-threatening haemoptysis. [ERS/ESCMID 2016]",
        "Untreated cryptococcal meningitis is **almost always fatal**; with the WHO 2022 regimen **10-week mortality is about 25%**; blindness, deafness and hydrocephalus follow uncontrolled ICP. [WHO 2022]",
        "**Cryptococcal IRIS** occurs in 10-30% after ART - hence the **4-6 week delay** before starting ART. [WHO 2022]",
        "Drug toxicity: amphotericin - nephrotoxicity, **hypokalaemia, hypomagnesaemia**, infusion reactions, anaemia; voriconazole - **visual disturbance (30%)**, hallucinations, photosensitivity, skin cancer, periostitis and hepatitis; flucytosine - neutropenia. [Goodman and Gilman 14e]",
      ],
    },
    {
      heading: "Referral, follow-up, prevention and the programme link",
      points: [
        "**Refer** to a tertiary centre with mycology, ICU and TDM for C. auris, aspergillosis, cryptococcal meningitis needing repeated LPs, and Candida endocarditis. [ICMR AMRSN 2024]",
        "**Follow-up**: CT chest every 2-4 weeks in aspergillosis; LFT and voriconazole levels; **visual acuity and fundus** in cryptococcal and Candida eye disease; CPA reviewed at 3 and 6 months with CT and Aspergillus IgG. [ERS/ESCMID 2016]",
        "**Antifungal prophylaxis**: **posaconazole delayed-release 300 mg daily** in AML/MDS induction and GVHD; fluconazole in allogeneic transplant; avoid blanket fluconazole in ICUs (selects C. auris and C. glabrata). [IDSA 2016]",
        "**CrAg screening** of all PLHIV with **CD4 under 100 (consider under 200)** before ART is part of the WHO advanced HIV disease package and NACO care - see the Opportunistic infections in HIV topic. [WHO 2022]",
        "**Infection prevention**: line-care bundles, chlorhexidine bathing, hand hygiene and **HEPA-filtered rooms** during construction near haematology wards. [IDSA 2016]",
        "India's **ICMR Antimicrobial Resistance Surveillance Network (AMRSN)** includes fungal surveillance; report C. auris clusters to the hospital infection control committee. [ICMR AMRSN 2024]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**ECMM/ISHAM/ASM global guideline on candidiasis (2025)** confirms **echinocandin first line** for candidaemia, adds **rezafungin 400 mg then 200 mg once weekly** as an option, and stresses early catheter removal and step-down at 5 days. [ECMM/ISHAM/ASM 2025]",
        "**Rezafungin**, a once-weekly echinocandin, was approved by the FDA and EMA in **2023** (ReSTORE trial non-inferior to caspofungin). [FDA 2023]",
        "**WHO 2022 cryptococcal guideline** replaced 7-day amphotericin regimens with **single high-dose liposomal amphotericin B 10 mg/kg** plus 14 days of flucytosine and fluconazole. [WHO 2022]",
        "**WHO Fungal Priority Pathogens List (2022)** - the first such list - names 19 fungi; critical priority: C. neoformans, C. auris, A. fumigatus, C. albicans. [WHO FPPL 2022]",
        "**EORTC/MSGERC 2020** revised galactomannan thresholds (serum or BAL 1.0) and added PCR as mycological evidence for probable aspergillosis. [EORTC/MSGERC 2020]",
        "**ISHAM 2024 revised ABPA criteria** use total IgE over 500 IU/mL and Aspergillus-specific IgE 0.35 kUA/L or more as obligatory criteria; managed under the Asthma topic. [ISHAM 2024]",
        "Agents in late trials: **olorofim** (dihydroorotate dehydrogenase inhibitor, mould-active) and **fosmanogepix** (Gwt1 inhibitor) - not yet licensed in India. [Harrison 22e]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic viva: **'Why not fluconazole for aspergillosis?'** - no mould activity; **'Why not an echinocandin for cryptococcus?'** - the capsule-bearing yeast lacks a beta-glucan-rich wall target. [Harrison 22e]",
        "Common mistake: treating candidaemia without **removing the line, repeating cultures and doing fundoscopy** - examiners call these the three bundle steps. [IDSA 2016]",
        "Common mistake: calling Candida in sputum or urine of a catheterised ICU patient an infection - it is usually **colonisation**; treat candiduria only if symptomatic, neutropenic, infant or before urological surgery. [IDSA 2016]",
        "Know the **WHO 2022 crypto regimen** by heart: **10 mg/kg L-AmB once + flucytosine 100 mg/kg/day + fluconazole 1200 mg/day for 14 days, then 800 mg for 8 weeks, then 200 mg**. [WHO 2022]",
        "**Galactomannan for Aspergillus, beta-D-glucan for Candida (and Pneumocystis), CrAg for Cryptococcus, urine antigen for Histoplasma** - and none of these for Mucorales. [EORTC/MSGERC 2020]",
        "**Halo sign = early angioinvasive aspergillosis; air-crescent = recovery phase; reverse halo = think mucormycosis**. [IDSA 2016]",
      ],
    },
  ],
  tables: [
    {
      heading: "Antifungal drugs: dose, duration and toxicity",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Fluconazole", "Candidaemia 800 mg loading then 400 mg (6 mg/kg) PO/IV daily; crypto 1200 mg induction, 800 mg consolidation, 200 mg maintenance", "Halve after loading if CrCl under 50; candidaemia 14 days after negative culture", "QT prolongation, hepatitis, CYP3A4 interactions; no mould activity; C. krusei resistant; avoid high dose in pregnancy"],
        ["Caspofungin", "70 mg IV loading then 50 mg IV daily", "Step down to fluconazole after 5-7 days if stable and susceptible; 35 mg in Child-Pugh B", "Infusion reaction, raised transaminases; poor CSF, eye and urine penetration; no activity against Cryptococcus or Mucorales"],
        ["Micafungin / anidulafungin", "Micafungin 100 mg IV daily; anidulafungin 200 mg then 100 mg IV daily", "As caspofungin; no renal adjustment", "Hepatotoxicity (micafungin); same spectrum gaps as caspofungin"],
        ["Voriconazole", "6 mg/kg IV 12-hourly x 2 then 4 mg/kg 12-hourly; oral 200-300 mg 12-hourly", "Trough 1-5.5 mg/L on day 5; at least 6-12 weeks in IA", "Visual disturbance, hallucinations, photosensitivity, skin cancer, periostitis (fluoride), hepatitis, QT; avoid with rifampicin; IV vehicle accumulates if CrCl under 50"],
        ["Isavuconazole", "200 mg IV/PO 8-hourly x 6 doses then 200 mg daily", "No renal adjustment; TDM optional", "Shortens QT (contraindicated in familial short QT), fewer visual and liver effects than voriconazole"],
        ["Itraconazole", "200 mg PO twice daily (CPA, histoplasmosis maintenance); 200 mg thrice daily x 3 days loading in histoplasmosis", "6 months in CPA; 12 months in disseminated histoplasmosis; trough over 0.5-1 mg/L", "Negative inotrope - avoid in heart failure; hepatitis; erratic absorption (capsules with food and acid)"],
        ["Liposomal amphotericin B", "3-5 mg/kg/day IV (single 10 mg/kg for HIV crypto)", "Histoplasmosis 2 weeks; IA salvage; neutropenic empirical", "Less nephrotoxic than deoxycholate; hypokalaemia, hypomagnesaemia, infusion reactions; safe in pregnancy"],
        ["Amphotericin B deoxycholate", "0.7-1 mg/kg/day IV over 4-6 h after 1 L saline", "7 days in WHO alternative crypto regimen", "Nephrotoxicity, hypokalaemia, hypomagnesaemia, rigors, anaemia, phlebitis - monitor creatinine and K twice weekly"],
        ["Flucytosine", "100 mg/kg/day PO in 4 divided doses", "14 days in cryptococcal induction; adjust to CrCl", "Marrow suppression, hepatitis, diarrhoea; never use alone (rapid resistance); limited availability in India"],
      ],
    },
    {
      heading: "Classification and organism-host matching",
      columns: ["Organism", "Typical host", "Key syndrome", "Diagnostic test of choice"],
      rows: [
        ["Candida spp.", "ICU, central line, TPN, abdominal surgery, neutropenia", "Candidaemia, intra-abdominal candidiasis, endophthalmitis", "Blood culture with MALDI-TOF ID; beta-D-glucan 80 pg/mL or more"],
        ["Candida auris", "ICU, long stay, ventilated, prior antifungals", "Outbreak candidaemia, often fluconazole-resistant", "MALDI-TOF (not VITEK-2 older databases); susceptibility testing"],
        ["Aspergillus fumigatus / flavus", "Neutropenia over 10 days, HSCT, steroids; post-TB cavity (CPA)", "Invasive pulmonary aspergillosis; CPA; aspergilloma", "CT halo sign, galactomannan ODI 1.0 or more; Aspergillus IgG for CPA"],
        ["Cryptococcus neoformans", "HIV with CD4 under 100, transplant, steroids", "Subacute meningitis with raised ICP", "CrAg lateral flow (serum, CSF); India ink; CSF culture"],
        ["Histoplasma capsulatum", "HIV CD4 under 150; healthy adults in Gangetic plains", "Disseminated disease, oral ulcers, adrenal masses", "Urine antigen; marrow or adrenal biopsy (GMS)"],
        ["Talaromyces marneffei", "Advanced HIV, Manipur / North-East", "Fever, anaemia, umbilicated papules", "Skin scraping or marrow - septate yeasts; culture (red pigment)"],
      ],
    },
    {
      heading: "Differential diagnosis of fungal look-alikes",
      columns: ["Presentation", "Fungal cause", "Main mimic", "Discriminating feature"],
      rows: [
        ["Persistent ICU fever on antibiotics", "Candidaemia", "MDR Gram-negative sepsis", "Beta-D-glucan positive, Candida in blood culture; procalcitonin often lower"],
        ["Neutropenic fever with lung nodules", "Invasive aspergillosis", "Mucormycosis", "Galactomannan positive; mucor - reverse halo, sinus disease, voriconazole breakthrough"],
        ["Cavity with haemoptysis after TB", "Chronic pulmonary aspergillosis", "TB relapse", "NAAT negative, Aspergillus IgG positive, fungal ball, pericavitary thickening"],
        ["Subacute meningitis in HIV", "Cryptococcal meningitis", "TB meningitis", "CSF CrAg positive, opening pressure high, low cell count; TBM - high protein, basal exudate"],
        ["Fever, pancytopenia, hepatosplenomegaly", "Disseminated histoplasmosis", "Kala-azar, disseminated TB, lymphoma", "Urine Histoplasma antigen, intracellular yeasts on marrow (GMS)"],
        ["Bilateral adrenal masses with Addisonian features", "Adrenal histoplasmosis", "Adrenal TB, metastases", "Biopsy with fungal stain; low-attenuation enlarged glands"],
      ],
    },
    {
      heading: "Fungal biomarkers and cut-offs",
      columns: ["Test", "Positive cut-off", "Use", "Pitfalls"],
      rows: [
        ["(1,3)-beta-D-glucan (Fungitell)", "80 pg/mL or more (60-79 indeterminate)", "Invasive candidiasis, aspergillosis, Pneumocystis; high NPV", "False positive with albumin, IVIG, haemodialysis, gauze, Gram-negative sepsis; negative in Cryptococcus and Mucorales"],
        ["Galactomannan (serum)", "ODI 1.0 or more single, or 0.7 with BAL 0.8 (EORTC/MSGERC 2020)", "Invasive aspergillosis in neutropenia; twice-weekly screening", "Low sensitivity on mould-active prophylaxis and in non-neutropenic hosts"],
        ["Galactomannan (BAL)", "ODI 1.0 or more", "Probable IA, including ICU and CAPA", "Contamination from airway colonisation"],
        ["Cryptococcal antigen LFA", "Any positive (titre guides prognosis)", "Screening at CD4 under 100-200; diagnosis on CSF", "Prozone at very high titres (rare); does not guide cure - stays positive"],
        ["CSF opening pressure", "25 cm H2O or more raised", "Decides therapeutic LP in crypto meningitis", "Must be measured lying lateral, relaxed"],
        ["Histoplasma urine antigen", "Kit-specific positive", "Disseminated histoplasmosis (sensitivity about 90%)", "Cross-reacts with Talaromyces, Blastomyces"],
        ["Aspergillus-specific IgG", "Kit-specific (about 20-40 mg/L)", "Chronic pulmonary aspergillosis", "Low in immunosuppressed; not for invasive disease"],
      ],
    },
    {
      heading: "WHO 2022 cryptococcal meningitis regimens (HIV)",
      columns: ["Phase", "Preferred", "Alternative", "Notes"],
      rows: [
        ["Induction (2 weeks)", "L-AmB 10 mg/kg single dose + flucytosine 100 mg/kg/day + fluconazole 1200 mg/day x 14 days", "AmB deoxycholate 1 mg/kg/day + flucytosine x 7 days, then fluconazole 1200 mg days 8-14; or fluconazole 1200 mg + flucytosine x 14 days", "Therapeutic LP if opening pressure 25 cm H2O or more; saline loading and K/Mg"],
        ["Consolidation (8 weeks)", "Fluconazole 800 mg/day", "-", "Children: 6-12 mg/kg/day (max 800 mg)"],
        ["Maintenance", "Fluconazole 200 mg/day", "-", "Stop at CD4 200 or more, or 100-200 with suppressed VL, after at least 1 year"],
        ["ART timing", "Start 4-6 weeks after antifungal start", "-", "Earlier ART raises mortality (COAT trial)"],
        ["Asymptomatic CrAg positive (CSF negative)", "Fluconazole 800 mg x 2 weeks, 400 mg x 8 weeks, then 200 mg", "Single L-AmB + 2 weeks fluconazole-flucytosine if available (ACACIA)", "LP before treatment to exclude meningitis"],
      ],
    },
  ],
  redFlags: [
    "Candidaemia with persisting positive blood cultures beyond 72 hours, new murmur or eye findings (endocarditis, endophthalmitis)",
    "Neutropenic fever over 96 hours with haemoptysis or lung nodules",
    "HIV patient with headache, vomiting, visual blurring or confusion - suspect cryptococcal meningitis and do LP with opening pressure",
    "CSF opening pressure 25 cm H2O or more, papilloedema or sixth nerve palsy",
    "Massive haemoptysis (over 200-600 mL/24 h) from an aspergilloma",
    "Postural hypotension, hyponatraemia and hyperkalaemia with adrenal masses (adrenal crisis from histoplasmosis)",
    "Candida auris isolated anywhere - immediate contact isolation and infection-control alert",
  ],
  pearls: [
    "**Candida bundle**: echinocandin early, pull the line, repeat cultures till negative, fundoscopy, 14 days after first negative culture.",
    "**C. tropicalis** is India's commonest ICU candidaemia species; **C. auris** was first recognised in Indian hospitals.",
    "**Echinocandins miss Cryptococcus and Mucorales**; fluconazole misses all moulds and C. krusei.",
    "**WHO 2022 crypto: 10 mg/kg L-AmB once + 14 days 5FC + fluconazole 1200 mg**, then 800 mg 8 weeks, then 200 mg; ART at 4-6 weeks.",
    "**No steroids, no acetazolamide for crypto ICP** - drain CSF by daily therapeutic LP.",
    "Post-TB patient with haemoptysis and negative sputum NAAT - think **chronic pulmonary aspergillosis**, check Aspergillus IgG.",
    "**Voriconazole** - TDM 1-5.5 mg/L, visual flashes, photosensitivity, never with rifampicin.",
    "Biomarker match: **GM - Aspergillus, BDG - Candida/PCP, CrAg - Cryptococcus, urine Ag - Histoplasma**.",
    "Bilateral adrenal masses in a healthy Bengali man: **adrenal histoplasmosis** until proven otherwise.",
  ],
  mcqs: [
    {
      id: "infectious-fever-fungal-infections-systemic-q1",
      stem:
        "A 58-year-old man on day 9 of ICU stay after bowel surgery has a central line, TPN and is on meropenem. He develops new fever and hypotension. Blood culture grows yeast. What is the most appropriate initial antifungal?",
      options: [
        "Oral fluconazole 200 mg daily",
        "Intravenous caspofungin 70 mg loading then 50 mg daily",
        "Intravenous voriconazole 6 mg/kg twice on day 1",
        "Oral flucytosine 100 mg/kg/day",
      ],
      answer: 1,
      explanation:
        "Echinocandins (caspofungin, micafungin, anidulafungin) are first line for candidaemia, especially in shock and in India where C. auris and C. glabrata resistance to azoles is common. Low-dose fluconazole is under-dosed and unsafe in a septic patient; voriconazole is a mould drug used for step-down only for C. krusei; flucytosine must never be used alone because resistance develops rapidly.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-fungal-infections-systemic-q2",
      stem:
        "In a neutropenic patient with acute myeloid leukaemia, a CT chest shows a nodule surrounded by ground-glass attenuation. Which serum test best supports probable invasive aspergillosis by EORTC/MSGERC 2020 criteria?",
      options: [
        "Cryptococcal antigen lateral flow assay",
        "Histoplasma urine antigen",
        "Galactomannan optical density index of 1.0 or more",
        "Anti-Candida mannan antibody",
      ],
      answer: 2,
      explanation:
        "The halo sign in a neutropenic host plus a serum galactomannan ODI of 1.0 or more (or BAL 1.0) fulfils probable invasive aspergillosis under EORTC/MSGERC 2020. CrAg detects the cryptococcal capsule, urine antigen detects Histoplasma, and Candida mannan serology plays no part in mould diagnosis.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-fungal-infections-systemic-q3",
      stem:
        "A 32-year-old man with HIV (CD4 42 cells/mm3, not on ART) has 2 weeks of headache. CSF CrAg is positive and opening pressure is 34 cm H2O. Per WHO 2022, which induction regimen is preferred?",
      options: [
        "Amphotericin B deoxycholate 0.7 mg/kg/day alone for 14 days with dexamethasone",
        "Fluconazole 400 mg daily for 8 weeks and start ART the same week",
        "Caspofungin 70 mg loading then 50 mg daily with acetazolamide",
        "Single liposomal amphotericin B 10 mg/kg with 14 days of flucytosine and fluconazole 1200 mg/day",
      ],
      answer: 3,
      explanation:
        "WHO 2022, based on the AMBITION-cm trial, prefers single high-dose liposomal amphotericin B 10 mg/kg plus 14 days of flucytosine 100 mg/kg/day and fluconazole 1200 mg/day, with daily therapeutic LP for the raised pressure. Dexamethasone and acetazolamide cause harm, fluconazole 400 mg alone is inadequate induction, ART must be delayed 4-6 weeks, and echinocandins have no activity against Cryptococcus.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-fungal-infections-systemic-q4",
      stem:
        "A 45-year-old man treated for pulmonary TB 4 years ago presents with 5 months of cough, weight loss and recurrent haemoptysis. Sputum CBNAAT is negative. CT shows an upper-lobe cavity with an intracavitary mass and pleural thickening. The most useful next test is:",
      options: [
        "Aspergillus-specific IgG",
        "Serum galactomannan",
        "Repeat Widal test",
        "Serum (1,3)-beta-D-glucan",
      ],
      answer: 0,
      explanation:
        "Chronic pulmonary aspergillosis in a post-TB cavity is diagnosed by more than 3 months of symptoms, a cavity with fungal ball or pericavitary thickening, and a raised Aspergillus-specific IgG. Serum galactomannan and beta-D-glucan are insensitive in the immunocompetent host with chronic disease, and Widal has no role.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-fungal-infections-systemic-q5",
      stem:
        "A renal transplant recipient on tacrolimus is started on voriconazole for invasive aspergillosis. Which statement is correct?",
      options: [
        "Voriconazole should be combined with rifampicin to prevent TB reactivation",
        "Voriconazole will lower tacrolimus levels, so the tacrolimus dose should be increased",
        "Voriconazole will raise tacrolimus levels; reduce the tacrolimus dose and monitor troughs",
        "Isavuconazole has no CYP3A4 interaction, so it can be swapped with no monitoring",
      ],
      answer: 2,
      explanation:
        "Voriconazole inhibits CYP3A4 and raises tacrolimus levels, so the tacrolimus dose is cut (often to about one-third) with close trough monitoring. Rifampicin induces CYP enzymes and lowers voriconazole levels by about 95%, so the pair is contraindicated. Isavuconazole is a milder CYP3A4 inhibitor but still raises tacrolimus and needs monitoring.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "infectious-fever-fungal-infections-systemic-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Discuss the risk factors, clinical features, diagnosis and management of invasive candidiasis in the intensive care unit. Add a note on Candida auris.",
      openingLines: [
        "Invasive candidiasis is infection of the bloodstream (candidaemia) or deep tissues by Candida species, most often in ICU patients with central lines, broad-spectrum antibiotics, TPN and abdominal surgery.",
        "It carries 30-60% mortality; the ECMM/ISHAM/ASM 2025 guideline recommends an echinocandin first, early catheter removal, repeat cultures and fundoscopy, with step-down to fluconazole after 5-7 days.",
      ],
      answer: [
        {
          heading: "Epidemiology and species",
          points: [
            "Indian ICU incidence about 6.5 per 1000 admissions; **C. tropicalis** commonest; C. auris about 5% (Chakrabarti 2015).",
            "Fourth commonest cause of hospital bloodstream infection worldwide.",
          ],
        },
        {
          heading: "Risk factors",
          points: [
            "Central venous catheter, broad-spectrum antibiotics, TPN, ICU stay over 7 days.",
            "Abdominal surgery, anastomotic leak, necrotising pancreatitis, haemodialysis, neutropenia, steroids.",
            "Multisite colonisation (Candida colonisation index over 0.5; Candida score 3 or more).",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Fever not responding to antibiotics; septic shock; skin nodules.",
            "Endophthalmitis (fluffy chorioretinal exudates), endocarditis, osteomyelitis; hepatosplenic candidiasis after neutrophil recovery.",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "Blood cultures (positive in about 50%); species by MALDI-TOF; antifungal susceptibility.",
            "Serum beta-D-glucan 80 pg/mL or more; high NPV to stop empirical therapy.",
            "Echocardiography if persistent candidaemia; fundoscopy within the first week.",
          ],
        },
        {
          heading: "Management",
          points: [
            "**Caspofungin 70 mg then 50 mg daily** (or micafungin 100 mg, anidulafungin 200/100 mg).",
            "Remove all central lines; repeat blood cultures every 24-48 hours.",
            "Step down to **fluconazole 400 mg daily** at 5-7 days if stable, susceptible, cultures negative.",
            "Duration **14 days after first negative culture**; longer for metastatic foci.",
            "Liposomal amphotericin 3-5 mg/kg/day if echinocandins fail or unavailable; source control of abscesses.",
          ],
        },
        {
          heading: "Candida auris",
          points: [
            "Multidrug-resistant, persists on surfaces, colonises skin; first recognised in Indian ICUs.",
            "Echinocandin first line; contact isolation, chlorine-based disinfection, contact screening.",
          ],
        },
      ],
      mustDraw: ["Flow chart: suspected candidaemia - cultures, echinocandin, line removal, fundoscopy, step-down, duration"],
      markSplit: [
        { part: "Risk factors and epidemiology", marks: 2 },
        { part: "Clinical features and diagnosis", marks: 3 },
        { part: "Management with doses", marks: 4 },
        { part: "Candida auris", marks: 1 },
      ],
      keywords: ["candidaemia", "echinocandin", "catheter removal", "beta-D-glucan", "Candida auris", "fluconazole step-down"],
    },
    {
      id: "infectious-fever-fungal-infections-systemic-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on cryptococcal meningitis in HIV, including CrAg screening and the WHO 2022 treatment regimen.",
      openingLines: [
        "Cryptococcal meningitis is a subacute meningoencephalitis caused by Cryptococcus neoformans in people with advanced HIV (CD4 under 100), and causes about 15-19% of AIDS deaths.",
        "WHO 2022 recommends CrAg screening before ART at CD4 under 100 and a single high-dose liposomal amphotericin B induction regimen.",
      ],
      answer: [
        {
          heading: "Clinical features and diagnosis",
          points: [
            "Headache over 1-3 weeks, fever, vomiting, visual loss; neck stiffness often absent.",
            "LP with opening pressure; CSF CrAg (over 95% sensitive), India ink, culture.",
          ],
        },
        {
          heading: "Treatment (WHO 2022)",
          points: [
            "Induction: L-AmB 10 mg/kg once + flucytosine 100 mg/kg/day + fluconazole 1200 mg/day for 14 days.",
            "Consolidation fluconazole 800 mg/day x 8 weeks; maintenance 200 mg/day until CD4 200 or more.",
            "Therapeutic LP for opening pressure 25 cm H2O or more; no steroids or acetazolamide.",
            "Start ART 4-6 weeks after antifungal therapy begins (COAT trial).",
          ],
        },
        {
          heading: "CrAg screening",
          points: [
            "Serum CrAg for all with CD4 under 100 (consider under 200) before ART.",
            "Positive: LP; if CSF negative, pre-emptive fluconazole 800 mg x 2 weeks, 400 mg x 8 weeks, then 200 mg.",
          ],
        },
      ],
      mustDraw: ["Table: induction, consolidation and maintenance phases with doses"],
      markSplit: [
        { part: "Clinical features and diagnosis", marks: 1.5 },
        { part: "Treatment regimen", marks: 2.5 },
        { part: "CrAg screening", marks: 1 },
      ],
      keywords: ["cryptococcal meningitis", "CrAg", "AMBITION", "liposomal amphotericin", "flucytosine", "therapeutic LP"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - chapters on candidiasis, aspergillosis, cryptococcosis and histoplasmosis",
    "Cornely OA et al. Global guideline for the diagnosis and management of candidiasis: an initiative of ECMM, ISHAM and ASM, Lancet Infectious Diseases, 2025",
    "Pappas PG et al. Clinical Practice Guideline for the Management of Candidiasis: IDSA, 2016",
    "Patterson TF et al. Practice Guidelines for the Diagnosis and Management of Aspergillosis: IDSA, 2016; and Denning DW et al. ERS/ESCMID Chronic Pulmonary Aspergillosis guideline, 2016",
    "Donnelly JP et al. Revision and update of the consensus definitions of invasive fungal disease (EORTC/MSGERC), Clinical Infectious Diseases, 2020",
    "WHO Guidelines for diagnosing, preventing and managing cryptococcal disease among adults, adolescents and children living with HIV, 2022",
    "WHO/PAHO Guidelines for diagnosing and managing disseminated histoplasmosis among people living with HIV, 2020; WHO Fungal Priority Pathogens List, 2022",
    "Chakrabarti A et al. Incidence, characteristics and outcome of ICU-acquired candidemia in India, Intensive Care Medicine, 2015",
  ],
});

export default topics;
