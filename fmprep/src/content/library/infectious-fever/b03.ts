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

topics.push({
  id: "infectious-fever-mucormycosis",
  title: "Mucormycosis",
  frequency: "common",
  oneLiner:
    "**Mucormycosis** is an acute, **angioinvasive infection by moulds of the order Mucorales** (Rhizopus, Mucor, Lichtheimia, Apophysomyces) that causes **thrombosis and black necrotic tissue**, chiefly **rhino-orbito-cerebral (ROCM)** disease in **uncontrolled diabetes, ketoacidosis and steroid use**; cure rests on three simultaneous steps - **early liposomal amphotericin B 5-10 mg/kg/day, urgent surgical debridement and reversal of the risk factor** - per the **ECMM/MSG ERC 2019** global guideline.",
  keywords: [
    "black fungus",
    "zygomycosis",
    "Mucorales",
    "Rhizopus arrhizus",
    "Apophysomyces",
    "ROCM",
    "rhino-orbito-cerebral mucormycosis",
    "COVID-associated mucormycosis",
    "CAM",
    "black turbinate sign",
    "reverse halo sign",
    "liposomal amphotericin B",
    "posaconazole",
    "isavuconazole",
    "debridement",
    "orbital exenteration",
    "TRAMB",
    "GRP78",
    "Honavar staging",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Mucormycosis** is invasive infection by fungi of the order **Mucorales** (class Mucoromycetes, formerly Zygomycetes), characterised by **angioinvasion, thrombosis and tissue infarction**. [Harrison 22e]",
        "Global incidence is estimated at about **0.2 per 100,000** in developed countries; in India the pre-COVID estimated prevalence was about **14 per 100,000 - roughly 70-80 times higher**. [Prakash and Chakrabarti, J Fungi 2019]",
        "During the **2021 COVID-19 second wave**, India reported an epidemic of **COVID-associated mucormycosis (CAM)** - **over 45,000 cases** reported to MoHFW by mid-2021 - and states were asked to make it **notifiable under the Epidemic Diseases Act**. [MoHFW 2021]",
        "The **ICMR multicentre study** (Patel et al.) found CAM in 65% of 287 mucormycosis patients in 2020; **diabetes was present in about 74%** and **inappropriate glucocorticoid use in about 21%** of CAM cases. [Patel, Emerg Infect Dis 2021]",
        "In India **ROCM forms about two-thirds** of cases, followed by pulmonary, cutaneous, renal (isolated renal mucormycosis is reported almost only from India) and gastrointestinal disease. [Prakash and Chakrabarti, J Fungi 2019]",
        "**Rhizopus arrhizus** causes about 50-60% of Indian cases; **Apophysomyces variabilis** (cutaneous, trauma, immunocompetent) and **Rhizopus microsporus** are next; Mucor and Lichtheimia are less common. [Prakash and Chakrabarti, J Fungi 2019]",
        "The **WHO Fungal Priority Pathogens List 2022** places **Mucorales in the high-priority group**. [WHO FPPL 2022]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**Uncontrolled diabetes mellitus**, especially **diabetic ketoacidosis**, is the dominant risk in India (**over 70%**), unlike the West where haematological malignancy dominates. [ECMM/MSG 2019]",
        "**Systemic corticosteroids** - high dose, long duration or started too early in COVID-19 - impair macrophage and neutrophil function and cause steroid-induced hyperglycaemia. [ICMR 2021]",
        "**COVID-19 itself** contributes through endothelial damage, lymphopenia, hyperferritinaemia and raised free iron, plus tocilizumab, prolonged ICU stay and new-onset diabetes. [Harrison 22e]",
        "**Haematological malignancy, neutropenia, stem-cell and solid-organ transplant** remain key risks; mucormycosis can break through **voriconazole prophylaxis**. [ECMM/MSG 2019]",
        "**Iron overload and deferoxamine therapy** (e.g. dialysis patients) - Rhizopus uses deferoxamine as a xenosiderophore to take up iron. [Harrison 22e]",
        "**Trauma, burns, contaminated dressings and injections** cause cutaneous mucormycosis, often in immunocompetent people (Apophysomyces, Saksenaea). [ECMM/MSG 2019]",
        "Other risks: **CKD, cirrhosis, malnutrition, IV drug use** (cerebral disease) and **neonatal prematurity** (gastrointestinal). [Harrison 22e]",
      ],
    },
    {
      heading: "Pathophysiology - why it is so destructive",
      points: [
        "Sporangiospores are inhaled into the **nose and paranasal sinuses** or lungs; healthy **neutrophils and macrophages** kill them, so disease needs impaired phagocytes. [Harrison 22e]",
        "**Acidosis frees iron**: low pH dissociates iron from transferrin, and **free serum iron** is a growth factor for Rhizopus - the core reason DKA predisposes. [Harrison 22e]",
        "Hyphae bind endothelial **GRP78** via the spore-coat protein **CotH**; **hyperglycaemia, iron and ketone bodies up-regulate GRP78 and CotH**, so invasion is faster in DKA. [Harrison 22e]",
        "**Angioinvasion** causes vessel thrombosis and **infarction** - hence the **black eschar**, painless necrosis and poor drug delivery to dead tissue, which is why **surgery is essential**. [ECMM/MSG 2019]",
        "Spread is **contiguous and perineural/perivascular**: nasal mucosa to sinuses, then orbit via the lamina papyracea and nasolacrimal duct, then **orbital apex, cavernous sinus and brain**. [Harrison 22e]",
        "Mucorales are **intrinsically resistant to voriconazole, fluconazole and echinocandins**; only **amphotericin B, posaconazole and isavuconazole** are reliably active. [ECMM/MSG 2019]",
        "Mucorales cell walls lack galactomannan in detectable amounts and contain little beta-D-glucan - so **galactomannan and beta-D-glucan tests are negative**. [ECMM/MSG 2019]",
      ],
    },
    {
      heading: "Classification and ROCM staging",
      points: [
        "**Clinical forms**: rhino-orbito-cerebral (ROCM), pulmonary, cutaneous, gastrointestinal, renal and **disseminated** (two or more non-contiguous sites). [ECMM/MSG 2019]",
        "**Honavar staging (2021) for ROCM**: **Stage 1 - nasal mucosa**; **Stage 2 - paranasal sinuses**; **Stage 3 - orbit**; **Stage 4 - CNS**; each has sub-stages a-d by extent. [Honavar, Indian J Ophthalmol 2021]",
        "Stage 1a limited to the middle turbinate, 1b involving the inferior turbinate or nasolacrimal duct ostium, 1c the nasal septum, 1d bilateral nasal mucosa. [Honavar, Indian J Ophthalmol 2021]",
        "Stage 2a one sinus, 2b two ipsilateral sinuses, 2c more than two ipsilateral sinuses and/or **palate or oral cavity**, 2d bilateral sinuses or zygoma and masticator space. [Honavar, Indian J Ophthalmol 2021]",
        "Stage 3a nasolacrimal duct or medial orbit with vision intact, 3b diffuse orbital involvement, **3c central retinal artery occlusion, orbital apex or superior orbital fissure syndrome with vision loss**, 3d bilateral orbit. [Honavar, Indian J Ophthalmol 2021]",
        "Stage 4a focal cavernous sinus or cribriform plate, 4b diffuse cavernous sinus thrombosis, 4c beyond the cavernous sinus - skull base, **internal carotid occlusion, brain infarction**, 4d multifocal or diffuse CNS disease. [Honavar, Indian J Ophthalmol 2021]",
        "**Diagnostic certainty (EORTC/MSGERC 2020)**: proven needs histology showing tissue invasion by broad hyphae or culture from a sterile site; probable needs host, clinical-radiological and mycological criteria. [EORTC/MSGERC 2020]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "Typical patient: an Indian adult with **uncontrolled diabetes**, often on steroids for COVID-19, presenting **2-3 weeks** after the illness (median about 14-18 days). [Patel, Emerg Infect Dis 2021]",
        "Early ROCM: **unilateral facial pain or numbness**, nasal stuffiness, **blood-stained or black nasal discharge**, and headache. [ICMR 2021]",
        "Orbital spread: **periorbital swelling, drooping eyelid, double vision**, eye pain and **sudden loss of vision**. [ICMR 2021]",
        "Oral involvement: **toothache, loosening of teeth** and a black area on the palate. [ICMR 2021]",
        "CNS spread: **altered sensorium, hemiparesis, seizures** and cranial nerve palsies from cavernous sinus thrombosis or carotid occlusion. [Harrison 22e]",
        "**Pulmonary mucormycosis**: fever, cough, pleuritic chest pain and **haemoptysis** (may be massive) in a neutropenic or diabetic patient on voriconazole. [ECMM/MSG 2019]",
        "**Cutaneous**: a wound that turns **black and spreads rapidly** despite antibiotics after trauma, burns or injection. [ECMM/MSG 2019]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Nasal endoscopy** shows pale (ischaemic) then **black necrotic turbinate or septal mucosa** that does not bleed when touched - the earliest sign. [ICMR 2021]",
        "**Palatal eschar** (black ulcer on the hard palate) indicates stage 2c - the hard palate is supplied by vessels that thrombose. [Honavar, Indian J Ophthalmol 2021]",
        "Facial signs: **periorbital and cheek swelling**, skin discoloration, and loss of sensation over V2 (maxillary nerve). [Harrison 22e]",
        "Orbital apex syndrome: **proptosis, ophthalmoplegia (III, IV, VI), ptosis, loss of vision and V1 sensory loss**; a fixed dilated pupil with no perception of light suggests central retinal artery occlusion. [Honavar, Indian J Ophthalmol 2021]",
        "**Bilateral signs** or contralateral cranial nerve palsy suggest cavernous sinus thrombosis (stage 4b). [Honavar, Indian J Ophthalmol 2021]",
        "Look for **DKA signs** - Kussmaul breathing, dehydration, ketotic breath - and **check capillary glucose and ketones** at the bedside. [ICMR 2021]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Invasive aspergillosis of the sinuses**: similar picture but slower, galactomannan positive, narrow septate hyphae branching at 45 degrees, and responds to voriconazole. [ECMM/MSG 2019]",
        "**Bacterial orbital cellulitis**: fever, painful proptosis and sinusitis but **no black necrosis**, and response to IV antibiotics within 48 hours. [Harrison 22e]",
        "**Cavernous sinus thrombosis from bacteria** (S. aureus, facial infection): high fever, bilateral chemosis; MRI and endoscopy separate it. [Harrison 22e]",
        "**Granulomatosis with polyangiitis, NK/T-cell lymphoma and nasopharyngeal carcinoma** cause destructive midline lesions - biopsy with fungal stain and immunohistochemistry decides. [Harrison 22e]",
        "**Pulmonary mucormycosis versus aspergillosis**: suspect mucor with **reverse halo sign, over 10 nodules, pleural effusion, sinusitis** and breakthrough on voriconazole. [ECMM/MSG 2019]",
        "**Ecthyma gangrenosum** (Pseudomonas) can cause black skin lesions in neutropenia - culture and biopsy distinguish. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**Direct microscopy (KOH with calcofluor white)** of nasal scraping, endoscopic biopsy or debrided tissue: **broad (6-25 micrometres), ribbon-like, pauci-septate hyphae with wide-angle (up to 90 degree) branching** - a same-day diagnosis. [ECMM/MSG 2019]",
        "**Histopathology** (H&E, PAS, GMS) shows **tissue and vessel invasion** and infarction - needed for proven disease; tissue (not swab) is the right specimen. [ECMM/MSG 2019]",
        "**Culture** on Sabouraud dextrose agar (without cycloheximide) grows fluffy 'lid-lifter' colonies in 24-48 hours, but is positive in **only about 50%** because grinding destroys aseptate hyphae - mince, do not homogenise. [ECMM/MSG 2019]",
        "**Contrast MRI of paranasal sinuses, orbit and brain** is the imaging of choice; the **'black turbinate' sign** (non-enhancing devitalised mucosa) is an early finding; MRI defines orbital apex, cavernous sinus and brain extent. [ICMR 2021]",
        "**CT of sinuses** shows mucosal thickening and bone erosion; **HRCT chest** may show the **reverse halo sign**, multiple nodules, cavitation and effusion. [ECMM/MSG 2019]",
        "**Galactomannan and beta-D-glucan are negative** - a positive result suggests aspergillosis or co-infection; **Mucorales PCR** on blood or tissue is used in specialist laboratories. [ECMM/MSG 2019]",
        "Baseline workup: **blood glucose, HbA1c, ketones, ABG, electrolytes (K, Mg), creatinine, CBC, ferritin and HIV test** - before and during amphotericin. [ICMR 2021]",
      ],
    },
    {
      heading: "Management in OPD / primary care",
      points: [
        "Mucormycosis is **never an OPD-managed disease** - the family physician's job is **early suspicion and same-day referral** to a centre with ENT, ophthalmology, neurosurgery, mycology and amphotericin. [ICMR 2021]",
        "Suspect ROCM in any diabetic or post-COVID patient with **unilateral facial pain, nasal black discharge, toothache, eyelid swelling or diplopia** - follow the ICMR 'do not miss warning signs' advisory. [ICMR 2021]",
        "Before transfer: **check capillary glucose and ketones**, start IV fluids and insulin if in DKA, and **stop or taper non-essential steroids**. [ICMR 2021]",
        "Do not start **empirical voriconazole** (inactive, and selects Mucorales) and do not give antibiotics as a substitute for urgent referral. [ECMM/MSG 2019]",
        "**After discharge**: supervise oral **posaconazole or isavuconazole** step-down, glycaemic control (HbA1c target under 7%), dental and prosthetic rehabilitation, and psychological support after facial or orbital surgery. [ECMM/MSG 2019]",
      ],
    },
    {
      heading: "Management in IPD - the three pillars",
      points: [
        "**First-line antifungal**: **liposomal amphotericin B 5 mg/kg/day IV**, increased to **10 mg/kg/day for CNS involvement**; start on suspicion, **without waiting for culture**. [ECMM/MSG 2019]",
        "Alternatives: **amphotericin B lipid complex 5 mg/kg/day**; **isavuconazole 200 mg 8-hourly x 6 doses then 200 mg daily** or **posaconazole IV/delayed-release tablet 300 mg 12-hourly on day 1 then 300 mg daily** as first-line options when amphotericin is contraindicated. [ECMM/MSG 2019]",
        "**Amphotericin B deoxycholate 1-1.5 mg/kg/day** is used only when lipid formulations are unavailable (as during the 2021 shortage); it is strongly discouraged by ECMM/MSG because of nephrotoxicity. [ICMR 2021]",
        "**Surgery: early and repeated debridement** of all necrotic tissue - endoscopic sinus surgery, maxillectomy; **orbital exenteration** for a blind, frozen orbit or progressive orbital disease. [ECMM/MSG 2019]",
        "**Reverse the risk factor**: correct DKA with insulin infusion, **target glucose 140-180 mg/dL**, taper steroids, stop deferoxamine, and recover neutrophils (G-CSF where neutropenic). [ECMM/MSG 2019]",
        "**Transcutaneous retrobulbar amphotericin B (TRAMB)** - liposomal amphotericin 3.5 mg in 1 mL injected retrobulbar for 3-5 doses - was used in Indian centres for stage 3a-3b orbital disease to save the eye; evidence is observational only. [Honavar, Indian J Ophthalmol 2021]",
        "**Step-down** to oral **posaconazole delayed-release 300 mg daily** or **isavuconazole 200 mg daily** once stable, imaging improving and no further debridement needed, usually after **3-6 weeks** of IV therapy. [ECMM/MSG 2019]",
        "**Total duration**: until clinical and radiological resolution and reversal of immunosuppression - **typically 3-6 months**; posaconazole trough target **over 1 mg/L**. [ECMM/MSG 2019]",
      ],
    },
    {
      heading: "Monitoring and supportive care in hospital",
      points: [
        "**Amphotericin monitoring**: creatinine, potassium and magnesium **daily for the first week then twice weekly**; preload **500-1000 mL normal saline** before each dose; supplement K and Mg routinely. [ICMR 2021]",
        "A **creatinine rise of over 2-fold** on liposomal amphotericin calls for hydration review and dose reduction or a switch to isavuconazole, not abrupt cessation. [ECMM/MSG 2019]",
        "**Repeat MRI** at 2-4 weeks or on clinical worsening; **repeat nasal endoscopy** with debridement of fresh necrosis. [ICMR 2021]",
        "**Combination therapy** (amphotericin plus posaconazole or isavuconazole) is used as salvage in refractory disease but is not proven superior. [ECMM/MSG 2019]",
        "**Iron chelation with deferasirox** is **not recommended** - the DEFEAT Mucor trial showed higher mortality. [ECMM/MSG 2019]",
        "**Hyperbaric oxygen** is an optional adjunct in some centres; evidence is weak. [ECMM/MSG 2019]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: **liposomal amphotericin** is preferred; posaconazole and isavuconazole are avoided (teratogenic in animals). [ECMM/MSG 2019]",
        "**CKD and transplant**: liposomal amphotericin needs no dose change but monitor creatinine; isavuconazole is the least nephrotoxic option; **azoles raise tacrolimus and cyclosporine levels**. [ECMM/MSG 2019]",
        "**Children**: same drugs - liposomal amphotericin 5-10 mg/kg/day; neonatal **gastrointestinal mucormycosis** mimics necrotising enterocolitis. [ECMM/MSG 2019]",
        "**Haematological malignancy**: **posaconazole prophylaxis** in AML/MDS induction and GVHD reduces mould infections; breakthrough on voriconazole should prompt a search for Mucorales. [ECMM/MSG 2019]",
        "**Resource-limited settings**: where liposomal amphotericin is unaffordable, conventional amphotericin with saline loading, early surgery and strict glycaemic control still save lives; government schemes (PM-JAY) covered CAM treatment in 2021. [ICMR 2021]",
        "**COVID-19 or other illness needing steroids**: use **dexamethasone 6 mg/day for up to 10 days only in hypoxic patients** - steroid stewardship is the main preventive lever. [ICMR 2021]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Overall mortality 40-80%** depending on site and host: ROCM about **30-50%**, pulmonary about **50-70%**, disseminated **over 90%**. [ECMM/MSG 2019]",
        "Indian CAM cohorts report mortality around **30-45%**; mortality rises steeply with **CNS involvement (stage 4)** and delayed surgery. [Patel, Emerg Infect Dis 2021]",
        "**Each 6-day delay** in starting amphotericin roughly doubles mortality (from about 35% to over 80% in a key cohort). [ECMM/MSG 2019]",
        "Sequelae: **blindness, orbital exenteration, maxillectomy defects**, facial disfigurement, cranial nerve palsies, stroke and depression. [ICMR 2021]",
        "Complications of therapy: **amphotericin nephrotoxicity and hypokalaemia**; posaconazole hepatotoxicity and QT prolongation. [ECMM/MSG 2019]",
        "**Relapse** occurs if therapy stops before immune recovery or residual necrotic tissue remains. [ECMM/MSG 2019]",
      ],
    },
    {
      heading: "Referral, follow-up, prevention and counselling",
      points: [
        "**Refer immediately** any suspected case - mucormycosis is a **surgical-medical emergency**; transfer with glucose control started. [ICMR 2021]",
        "**Follow-up**: monthly visits on step-down azole with **LFT, creatinine, posaconazole levels**, glycaemic review, nasal endoscopy and MRI at 1 and 3 months or as advised. [ECMM/MSG 2019]",
        "**Prevention**: tight **glycaemic control** in all diabetics and during steroid therapy (monitor glucose 4 times daily while on steroids), **judicious steroid and tocilizumab use**, and early diabetes detection in COVID-19. [ICMR 2021]",
        "Hospital measures: clean **humidifier water** (sterile or boiled-cooled water), HEPA filtration in transplant units, and prompt wound care. [ICMR 2021]",
        "**Counselling**: explain that it is **not contagious**, that 'black, white, yellow fungus' labels are media terms, and that the long course and surgery are needed for cure. [MoHFW 2021]",
        "Link to **NP-NCD**: opportunistic screening for diabetes at Ayushman Arogya Mandirs detects the commonest risk factor early. [NP-NCD 2023]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "The **ECMM/MSG ERC global guideline (2019)** remains the reference: strong recommendation for **early complete surgery** and **liposomal amphotericin 5-10 mg/kg/day** first line; isavuconazole and posaconazole (delayed-release tablet or IV) as alternatives and step-down. [ECMM/MSG 2019]",
        "**ICMR/MoHFW evidence-based advisories (2021)** on screening, diagnosis and management of CAM and steroid stewardship guide Indian practice. [ICMR 2021]",
        "The **Honavar ROCM staging (2021)** from the Collaborative OPAI-IJO Study on Mucormycosis in COVID-19 (COSMIC) is now widely used in India. [Honavar, Indian J Ophthalmol 2021]",
        "**EORTC/MSGERC 2020** definitions apply to mucormycosis; Mucorales PCR is gaining acceptance as mycological evidence. [EORTC/MSGERC 2020]",
        "**WHO FPPL 2022** lists Mucorales as high priority, driving surveillance and drug development. [WHO FPPL 2022]",
        "New agents: **fosmanogepix** shows activity against Mucorales in trials; **olorofim has no activity** against Mucorales. [Harrison 22e]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic question: **'Why does DKA predispose to mucormycosis?'** - acidosis frees iron from transferrin, hyperglycaemia up-regulates GRP78 and CotH, and phagocytes fail. [Harrison 22e]",
        "**Three pillars**: antifungal (L-AmB), surgery (debridement), and reversal of risk (glucose, steroids, neutropenia) - examiners expect all three. [ECMM/MSG 2019]",
        "Common mistake: prescribing **voriconazole** for a sinus mould in a diabetic - it is inactive against Mucorales. [ECMM/MSG 2019]",
        "Common mistake: sending a **swab or galactomannan** - send tissue for KOH, histology and culture; galactomannan is negative. [ECMM/MSG 2019]",
        "Microscopy viva: **mucor - broad aseptate ribbon-like hyphae, right-angle branching; aspergillus - narrow septate hyphae, acute-angle (45 degree) dichotomous branching**. [Harrison 22e]",
        "Imaging viva: **black turbinate sign** on MRI (sinonasal) and **reverse halo sign** on CT chest (pulmonary). [ECMM/MSG 2019]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs for mucormycosis",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Liposomal amphotericin B (first line)", "5 mg/kg/day IV; 10 mg/kg/day if CNS involved", "Usually 3-6 weeks IV until stable, then oral step-down", "Nephrotoxicity, hypokalaemia, hypomagnesaemia, infusion reactions; preload saline; preferred in pregnancy"],
        ["Amphotericin B lipid complex", "5 mg/kg/day IV", "As above", "Similar to liposomal; avoid in CNS disease where liposomal is preferred"],
        ["Amphotericin B deoxycholate", "1-1.5 mg/kg/day IV over 4-6 h", "Only if lipid forms unavailable", "Marked nephrotoxicity, rigors, hypokalaemia, anaemia; discouraged by ECMM/MSG"],
        ["Isavuconazole", "200 mg IV/PO 8-hourly x 6 doses, then 200 mg daily", "First-line alternative or step-down; months", "Shortens QT (avoid in familial short QT); fewer hepatic and visual effects; CYP3A4 interactions"],
        ["Posaconazole (delayed-release tablet or IV)", "300 mg 12-hourly day 1, then 300 mg daily", "Step-down; trough over 1 mg/L", "Hepatotoxicity, QT prolongation, hypokalaemia, raises tacrolimus; avoid in pregnancy; suspension poorly absorbed"],
        ["Insulin (risk reversal)", "IV infusion in DKA, then basal-bolus", "Glucose 140-180 mg/dL in hospital", "Hypoglycaemia, hypokalaemia - monitor K especially with amphotericin"],
      ],
    },
    {
      heading: "Honavar staging of rhino-orbito-cerebral mucormycosis (2021)",
      columns: ["Stage", "Site", "Sub-stages (a-d)", "Usual management"],
      rows: [
        ["1", "Nasal mucosa", "a middle turbinate; b inferior turbinate or NLD ostium; c septum; d bilateral", "L-AmB + endoscopic debridement"],
        ["2", "Paranasal sinuses", "a one sinus; b two ipsilateral; c more than two and/or palate/oral cavity; d bilateral or zygoma/masticator space", "L-AmB + FESS / maxillectomy for palate"],
        ["3", "Orbit", "a NLD or medial orbit, vision intact; b diffuse orbital; c CRAO, apex or SOF syndrome, vision loss; d bilateral", "3a-3b: debridement +/- TRAMB; 3c-3d: consider exenteration"],
        ["4", "CNS", "a focal cavernous sinus or cribriform plate; b diffuse cavernous sinus thrombosis; c skull base, ICA occlusion, infarction; d multifocal/diffuse CNS", "L-AmB 10 mg/kg/day; neurosurgical opinion; poor prognosis"],
      ],
    },
    {
      heading: "Mucormycosis versus look-alikes",
      columns: ["Feature", "Mucormycosis", "Invasive aspergillosis", "Bacterial orbital cellulitis"],
      rows: [
        ["Host", "DKA, steroids, COVID, neutropenia", "Neutropenia, transplant, steroids", "Any age, sinusitis, children"],
        ["Tissue", "Black necrosis, palatal eschar", "Necrosis less striking", "Red, swollen, no necrosis"],
        ["Microscopy", "Broad aseptate ribbons, wide-angle branching", "Narrow septate hyphae, 45 degree branching", "No hyphae"],
        ["Biomarkers", "Galactomannan and BDG negative", "Galactomannan positive", "Raised CRP, procalcitonin"],
        ["Imaging", "Black turbinate (MRI); reverse halo (chest)", "Halo sign, air-crescent", "Subperiosteal abscess, fat stranding"],
        ["Drug of choice", "Liposomal amphotericin; posaconazole/isavuconazole", "Voriconazole or isavuconazole", "IV ceftriaxone + clindamycin or similar"],
        ["Voriconazole", "Inactive - may select Mucorales", "First line", "Not relevant"],
      ],
    },
    {
      heading: "Investigations and their interpretation",
      columns: ["Test", "Finding in mucormycosis", "Practical point"],
      rows: [
        ["KOH / calcofluor of tissue", "Broad (6-25 micrometres) pauci-septate hyphae, right-angle branching", "Same-day; send tissue, not swab"],
        ["Histopathology (H&E, PAS, GMS)", "Angioinvasion, infarction, broad hyphae", "Needed for proven diagnosis"],
        ["Culture (SDA, no cycloheximide)", "Fluffy rapid-growing colonies in 24-48 h", "Positive in only about 50%; mince tissue, do not grind"],
        ["Contrast MRI sinus-orbit-brain", "Black turbinate sign; orbital apex, cavernous sinus extent", "Imaging of choice; repeat at 2-4 weeks"],
        ["CT chest", "Reverse halo sign, over 10 nodules, effusion", "Points to mucor over aspergillus"],
        ["Galactomannan / beta-D-glucan", "Negative", "Positive suggests aspergillosis or co-infection"],
        ["Glucose, ketones, ABG, HbA1c", "Hyperglycaemia, DKA", "Correct urgently - core of therapy"],
        ["Creatinine, K, Mg", "Baseline before amphotericin", "Daily in week 1, then twice weekly"],
      ],
    },
  ],
  redFlags: [
    "Diabetic or post-COVID patient with unilateral facial pain, numbness or swelling",
    "Black or blood-stained nasal discharge, black nasal or palatal eschar",
    "Eyelid swelling, proptosis, diplopia, ptosis or sudden vision loss",
    "Toothache or loosening of teeth with sinus symptoms in uncontrolled diabetes",
    "Altered sensorium, hemiparesis or cranial nerve palsies (cavernous sinus or brain spread)",
    "Haemoptysis with lung nodules in a neutropenic or diabetic patient on voriconazole",
    "Rapidly spreading black necrosis of a wound after trauma or injection",
  ],
  pearls: [
    "**Three pillars**: liposomal amphotericin, aggressive surgery, reverse the risk (DKA, steroids, neutropenia).",
    "**Acidosis frees iron** and up-regulates **GRP78/CotH** - why DKA and Rhizopus go together.",
    "Mucor hyphae: **broad, ribbon-like, aseptate, right-angle branching**; Aspergillus: narrow, septate, 45 degrees.",
    "**Voriconazole and echinocandins do not work**; only amphotericin, posaconazole, isavuconazole.",
    "**Galactomannan and BDG are negative** in mucormycosis.",
    "MRI: **black turbinate sign**; CT chest: **reverse halo sign**.",
    "**Deferoxamine** feeds Rhizopus; deferasirox adjunct increased mortality (DEFEAT Mucor).",
    "Honavar staging: **1 nose, 2 sinus, 3 orbit, 4 brain** - each with a-d.",
    "India has the world's highest burden - about **70-80 times** the global rate.",
  ],
  mcqs: [
    {
      id: "infectious-fever-mucormycosis-q1",
      stem:
        "A 52-year-old man with uncontrolled diabetes, treated with dexamethasone for COVID-19 three weeks ago, has left facial pain, black nasal crusts and periorbital swelling. Nasal biopsy shows broad aseptate hyphae with right-angle branching. Which is the most appropriate antifungal to start?",
      options: [
        "Voriconazole 6 mg/kg IV 12-hourly",
        "Caspofungin 70 mg IV loading then 50 mg daily",
        "Fluconazole 800 mg IV daily",
        "Liposomal amphotericin B 5 mg/kg/day IV",
      ],
      answer: 3,
      explanation:
        "Broad aseptate hyphae with wide-angle branching in a diabetic post-steroid patient mean mucormycosis; ECMM/MSG 2019 recommends liposomal amphotericin B 5-10 mg/kg/day first line with urgent debridement. Voriconazole, caspofungin and fluconazole have no reliable activity against Mucorales, and voriconazole may even select them.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-mucormycosis-q2",
      stem: "Which mechanism best explains why diabetic ketoacidosis predisposes to mucormycosis?",
      options: [
        "Acidosis releases iron from transferrin and hyperglycaemia up-regulates endothelial GRP78",
        "Ketones directly stimulate fungal ergosterol synthesis",
        "Insulin deficiency increases galactomannan production by the fungus",
        "Hyperosmolality enhances T-cell recognition of fungal antigens",
      ],
      answer: 0,
      explanation:
        "Low pH dissociates iron from transferrin, and free iron drives Rhizopus growth; hyperglycaemia, iron and ketones also up-regulate endothelial GRP78 and fungal CotH, allowing angioinvasion, while neutrophil function falls. Ergosterol synthesis and galactomannan are unrelated to DKA, and hyperosmolality impairs rather than enhances immunity.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-mucormycosis-q3",
      stem:
        "In the Honavar staging of rhino-orbito-cerebral mucormycosis, involvement of more than two ipsilateral paranasal sinuses with a black eschar on the hard palate is staged as:",
      options: ["Stage 1d", "Stage 2c", "Stage 3a", "Stage 4a"],
      answer: 1,
      explanation:
        "Stage 2 is paranasal sinus disease; 2c is more than two ipsilateral sinuses and/or palate or oral cavity involvement. Stage 1d is bilateral nasal mucosal disease only, stage 3a is limited orbital disease with intact vision, and stage 4a is focal cavernous sinus or cribriform plate involvement.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-mucormycosis-q4",
      stem:
        "A patient with ROCM has received liposomal amphotericin for 4 weeks after two debridements. He is clinically stable, MRI shows regression and glucose is controlled. The best next step is:",
      options: [
        "Stop all antifungals and review in 3 months",
        "Switch to oral voriconazole 200 mg twice daily",
        "Step down to oral posaconazole delayed-release 300 mg daily or isavuconazole 200 mg daily",
        "Add deferasirox to chelate iron",
      ],
      answer: 2,
      explanation:
        "ECMM/MSG 2019 recommends oral step-down to posaconazole delayed-release tablets or isavuconazole after a stable response, continued until clinical and radiological resolution and immune recovery, usually for months in total. Stopping at 4 weeks risks relapse, voriconazole is inactive against Mucorales, and deferasirox increased mortality in the DEFEAT Mucor trial.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-mucormycosis-q5",
      stem:
        "A neutropenic AML patient on voriconazole prophylaxis develops fever and haemoptysis. CT chest shows a ground-glass area surrounded by a ring of consolidation and a small effusion. Serum galactomannan is negative. The most likely diagnosis is:",
      options: [
        "Invasive aspergillosis breaking through prophylaxis",
        "Pulmonary mucormycosis",
        "Pneumocystis pneumonia",
        "Candida pneumonia",
      ],
      answer: 1,
      explanation:
        "The reverse halo sign (central ground glass with a consolidation rim), pleural effusion, negative galactomannan and breakthrough on voriconazole all point to pulmonary mucormycosis. Aspergillosis would usually be galactomannan positive and voriconazole-sensitive, Pneumocystis gives diffuse ground glass, and Candida pneumonia is exceedingly rare.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "infectious-fever-mucormycosis-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Discuss the risk factors, pathogenesis, clinical staging, diagnosis and management of rhino-orbito-cerebral mucormycosis. Add a note on its prevention in India.",
      openingLines: [
        "Mucormycosis is an acute angioinvasive infection by moulds of the order Mucorales, causing thrombosis and tissue necrosis, most often rhino-orbito-cerebral disease in uncontrolled diabetes and steroid use.",
        "India has about 70-80 times the global burden and saw an epidemic of COVID-associated mucormycosis in 2021; treatment rests on liposomal amphotericin, surgical debridement and reversal of risk factors (ECMM/MSG 2019).",
      ],
      answer: [
        {
          heading: "Risk factors",
          points: [
            "Uncontrolled diabetes and DKA (over 70% in India); corticosteroids; COVID-19.",
            "Haematological malignancy, transplant, neutropenia; deferoxamine; trauma and burns.",
          ],
        },
        {
          heading: "Pathogenesis",
          points: [
            "Inhaled spores - impaired phagocytes - germination in nose and sinuses.",
            "Acidosis frees iron; hyperglycaemia up-regulates GRP78 and CotH - angioinvasion, thrombosis, infarction.",
            "Spread to orbit, cavernous sinus and brain; necrotic tissue blocks drug delivery.",
          ],
        },
        {
          heading: "Clinical features and staging",
          points: [
            "Facial pain, black nasal discharge, palatal eschar, periorbital swelling, diplopia, vision loss, altered sensorium.",
            "Honavar 2021: stage 1 nose, 2 sinuses, 3 orbit, 4 CNS, with sub-stages a-d.",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "Tissue KOH/calcofluor: broad aseptate hyphae, right-angle branching; histopathology for angioinvasion; culture.",
            "Contrast MRI sinus-orbit-brain (black turbinate sign); galactomannan negative.",
            "Glucose, ketones, ABG, creatinine, K, Mg.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Liposomal amphotericin B 5 mg/kg/day (10 mg/kg/day for CNS).",
            "Early and repeated surgical debridement; exenteration for advanced orbital disease; TRAMB for selected stage 3.",
            "Control glucose, correct DKA, taper steroids.",
            "Step down to posaconazole 300 mg daily or isavuconazole 200 mg daily; total 3-6 months.",
            "Monitor creatinine, potassium, magnesium; avoid deferasirox.",
          ],
        },
        {
          heading: "Prevention in India",
          points: [
            "Glycaemic control and monitoring during steroids; steroid stewardship in COVID-19.",
            "Early diabetes screening (NP-NCD), clean humidifier water, awareness of warning signs, early referral.",
          ],
        },
      ],
      mustDraw: ["Diagram of spread: nose - sinuses - orbit - cavernous sinus - brain with Honavar stages", "Flow chart of the three pillars of management"],
      markSplit: [
        { part: "Risk factors and pathogenesis", marks: 2 },
        { part: "Clinical features and staging", marks: 2 },
        { part: "Diagnosis", marks: 2 },
        { part: "Management", marks: 3 },
        { part: "Prevention", marks: 1 },
      ],
      keywords: ["Mucorales", "ROCM", "DKA", "GRP78", "liposomal amphotericin", "debridement", "posaconazole", "isavuconazole", "Honavar staging"],
    },
    {
      id: "infectious-fever-mucormycosis-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Differentiate between mucormycosis and invasive aspergillosis.",
      openingLines: [
        "Both are angioinvasive mould infections of immunocompromised hosts, but they differ in host, microscopy, biomarkers, imaging and drug of choice.",
        "Distinguishing them matters because voriconazole, first line for aspergillosis, is inactive against Mucorales.",
      ],
      answer: [
        {
          heading: "Host and site",
          points: [
            "Mucor: DKA, steroids, COVID; rhino-orbito-cerebral commonest in India.",
            "Aspergillus: prolonged neutropenia, transplant; pulmonary commonest.",
          ],
        },
        {
          heading: "Laboratory",
          points: [
            "Mucor: broad aseptate ribbon-like hyphae, right-angle branching; galactomannan and BDG negative.",
            "Aspergillus: narrow septate hyphae, acute-angle branching; galactomannan and BDG positive.",
          ],
        },
        {
          heading: "Imaging",
          points: [
            "Mucor: reverse halo, over 10 nodules, effusion, black turbinate on MRI.",
            "Aspergillus: halo sign, air-crescent sign.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Mucor: liposomal amphotericin 5-10 mg/kg/day, surgery, posaconazole/isavuconazole step-down.",
            "Aspergillus: voriconazole or isavuconazole; surgery rarely needed.",
          ],
        },
      ],
      mustDraw: ["Two-column comparison table"],
      markSplit: [
        { part: "Host and site", marks: 1 },
        { part: "Microscopy and biomarkers", marks: 2 },
        { part: "Imaging", marks: 1 },
        { part: "Treatment", marks: 1 },
      ],
      keywords: ["mucormycosis", "aspergillosis", "aseptate hyphae", "galactomannan", "reverse halo", "voriconazole"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - chapter on mucormycosis",
    "Cornely OA et al. Global guideline for the diagnosis and management of mucormycosis: an initiative of the ECMM in cooperation with the Mycoses Study Group Education and Research Consortium, Lancet Infectious Diseases, 2019",
    "ICMR / MoHFW Evidence-based advisory on screening, diagnosis and management of mucormycosis in the era of COVID-19, 2021",
    "Honavar SG. Code Mucor: guidelines for the diagnosis, staging and management of rhino-orbito-cerebral mucormycosis in the setting of COVID-19, Indian Journal of Ophthalmology, 2021",
    "Patel A et al. Multicenter epidemiologic study of coronavirus disease-associated mucormycosis, India, Emerging Infectious Diseases, 2021",
    "Prakash H, Chakrabarti A. Global epidemiology of mucormycosis, Journal of Fungi, 2019",
    "Donnelly JP et al. EORTC/MSGERC consensus definitions of invasive fungal disease, Clinical Infectious Diseases, 2020",
  ],
});

topics.push({
  id: "infectious-fever-opportunistic-infections-hiv",
  title: "Opportunistic infections in HIV: prophylaxis and treatment",
  frequency: "core",
  oneLiner:
    "**Opportunistic infections (OIs)** are infections that cause disease, or unusually severe disease, because of **HIV-induced CD4 T-cell depletion**; each appears below a predictable **CD4 threshold** (TB at any count, **PCP under 200, toxoplasma and cryptococcus under 100, CMV and MAC under 50**), and they are prevented by **cotrimoxazole, TB preventive therapy, CrAg screening and early ART** - started within 2 weeks of most OIs but **delayed 4-6 weeks in cryptococcal and TB meningitis** to avoid fatal IRIS (NACO 2021, WHO 2021-2022).",
  keywords: [
    "OI",
    "advanced HIV disease",
    "AHD package",
    "CD4 count",
    "cotrimoxazole prophylaxis",
    "CPT",
    "Pneumocystis jirovecii pneumonia",
    "PCP",
    "cerebral toxoplasmosis",
    "cryptococcal meningitis",
    "CMV retinitis",
    "TB-HIV",
    "TB-LAM",
    "TB preventive treatment",
    "3HP",
    "IRIS",
    "MAC",
    "PML",
    "oesophageal candidiasis",
    "NACO 2021",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "An **opportunistic infection** is caused by an organism that rarely causes disease in an intact host but does so when **CD4 T cells fall**; AIDS-defining OIs mark **WHO clinical stage 4**. [Harrison 22e]",
        "**Advanced HIV disease (AHD)** is **CD4 under 200 cells/mm3 or WHO stage 3 or 4** in adults and adolescents, and **all children under 5 years** with HIV - this group has the highest OI death risk. [WHO 2021]",
        "India has about **25 lakh people living with HIV** (adult prevalence about **0.2%**), the second or third largest number in the world; about **one-third present late with CD4 under 200**. [NACO India HIV Estimates 2023]",
        "**Tuberculosis is the commonest OI and the leading cause of death in PLHIV** - globally about 1 in 3 AIDS deaths; India accounts for a large share of global HIV-associated TB. [WHO Global TB Report 2024]",
        "Indian OI spectrum (NACO cohorts): **TB (about 50-70% of OIs)**, oral and oesophageal candidiasis, PCP, cryptococcal meningitis, toxoplasmosis, CMV retinitis, chronic diarrhoea (Cryptosporidium, Cystoisospora) and herpes zoster. [NACO 2021]",
        "Since **Treat All (2017)** and dolutegravir-based ART (2020), OI incidence has fallen, but late presenters and treatment failures still drive OI admissions. [NACO 2021]",
      ],
    },
    {
      heading: "Aetiology and the CD4 ladder",
      points: [
        "**Any CD4 count**: TB, bacterial pneumonia (S. pneumoniae), herpes zoster, oral candidiasis, Kaposi sarcoma, lymphoma - risk rises as CD4 falls. [DHHS OI 2024]",
        "**CD4 under 200**: **Pneumocystis jirovecii pneumonia (PCP)**, oesophageal candidiasis, histoplasmosis (under 150), and talaromycosis in the North-East (under 100). [DHHS OI 2024]",
        "**CD4 under 100**: **cerebral toxoplasmosis** (if Toxoplasma IgG positive), **cryptococcal meningitis**, cryptosporidiosis, microsporidiosis and **PML** (JC virus). [DHHS OI 2024]",
        "**CD4 under 50**: **CMV retinitis and colitis**, **disseminated Mycobacterium avium complex (MAC)**, primary CNS lymphoma (EBV). [DHHS OI 2024]",
        "**Cystoisospora belli** (chronic watery diarrhoea) is common in India and responds to cotrimoxazole - which also prevents it. [NACO 2021]",
        "Other contributors: **malnutrition, IV drug use** (Manipur, Mizoram, Punjab), **hepatitis B and C co-infection** and **unrecognised ART failure**. [NACO 2021]",
      ],
    },
    {
      heading: "Pathophysiology - why the CD4 count predicts the OI",
      points: [
        "HIV binds **CD4 and CCR5/CXCR4**, destroys CD4 T cells (especially gut **memory Th17 cells** early), and causes chronic immune activation and **microbial translocation**. [Harrison 22e]",
        "**CD4 T cells orchestrate macrophage activation (IFN-gamma)** against intracellular pathogens - Mycobacteria, Toxoplasma, Cryptococcus, Histoplasma - so these reactivate as CD4 falls. [Harrison 22e]",
        "Most OIs are **reactivation of latent infection** (TB, toxoplasma tissue cysts, CMV, JC virus, VZV) - which is why **serology (Toxoplasma IgG) and TB screening** predict risk. [Harrison 22e]",
        "**Cotrimoxazole** blocks sequential steps of folate synthesis (sulfamethoxazole - dihydropteroate synthase; trimethoprim - dihydrofolate reductase), covering **Pneumocystis, Toxoplasma, Cystoisospora, many bacteria and malaria**. [Goodman and Gilman 14e]",
        "In PCP, the **inflammatory response to dying organisms** worsens hypoxia in the first days of therapy - why **adjunctive prednisolone** reduces mortality in moderate-severe PCP. [Harrison 22e]",
        "**IRIS** happens when ART restores pathogen-specific T cells that attack residual antigen - **paradoxical** (worsening of a treated OI) or **unmasking** (a hidden OI declares itself), mostly in the **first 3 months**. [Harrison 22e]",
      ],
    },
    {
      heading: "Classification and staging",
      points: [
        "**WHO clinical staging** (stage 1 asymptomatic to stage 4 AIDS-defining) is used with CD4 to define AHD and decide prophylaxis. [WHO 2021]",
        "**WHO stage 3** examples: unexplained weight loss over 10%, chronic diarrhoea over 1 month, persistent fever over 1 month, oral candidiasis, oral hairy leukoplakia, **pulmonary TB**, severe bacterial infections. [WHO 2021]",
        "**WHO stage 4** examples: HIV wasting, **PCP, extrapulmonary TB, cerebral toxoplasmosis, cryptococcal meningitis, CMV retinitis, oesophageal candidiasis**, Kaposi sarcoma, PML, HIV encephalopathy, disseminated MAC or histoplasmosis. [WHO 2021]",
        "**CDC CD4 categories**: 500 or more, 200-499, and **under 200 (AIDS)**; children use age-specific CD4 percentages. [CDC 2014]",
        "**IRIS classification**: paradoxical versus unmasking; INSHI criteria require a temporal link to ART, a fall in viral load and exclusion of drug toxicity, resistance or a new infection. [INSHI 2008]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**PCP**: **subacute (2-4 weeks) progressive exertional dyspnoea**, dry cough and low-grade fever - a patient who desaturates on walking with a near-normal chest X-ray. [Harrison 22e]",
        "**Cerebral toxoplasmosis**: headache, fever, confusion, **focal deficits (hemiparesis) and seizures** over days to weeks. [Harrison 22e]",
        "**Cryptococcal meningitis**: subacute headache, vomiting, blurred vision; neck stiffness often absent - see the Systemic fungal infections topic. [WHO 2022]",
        "**CMV retinitis**: **floaters, flashing lights, scotomata or painless loss of vision**, often in one eye first; colitis causes bloody diarrhoea and pain. [Harrison 22e]",
        "**HIV-TB**: the **4-symptom screen - current cough, fever, weight loss, night sweats** - any one positive needs evaluation; extrapulmonary and disseminated TB are common at low CD4. [NTEP 2024]",
        "**Oesophageal candidiasis**: **odynophagia and retrosternal pain** on swallowing, usually with oral thrush. [NACO 2021]",
        "**Chronic diarrhoea** (over 1 month) with weight loss suggests Cryptosporidium, Cystoisospora, Microsporidia, CMV or MAC. [NACO 2021]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Oral cavity**: thrush (pseudomembranous), **oral hairy leukoplakia** (EBV, lateral tongue, non-scrapable), angular cheilitis, aphthous ulcers - all point to immunosuppression. [Harrison 22e]",
        "**Desaturation on exertion** (fall of SpO2 by 3% or more on a 1-minute sit-to-stand or walk) with few crackles suggests **PCP**. [Harrison 22e]",
        "**Fundoscopy** in every PLHIV with CD4 under 100: CMV retinitis gives **'pizza-pie' or 'cottage cheese and ketchup'** - perivascular white necrosis with haemorrhage. [NACO 2021]",
        "**Focal neurological signs** with fever point to toxoplasmosis, tuberculoma or lymphoma; **no fever and slowly progressive deficits without mass effect** suggest PML. [Harrison 22e]",
        "**Skin**: umbilicated papules (Cryptococcus, Talaromyces, Histoplasma), multidermatomal **herpes zoster**, Kaposi sarcoma, seborrhoeic dermatitis and pruritic papular eruption. [Harrison 22e]",
        "**Lymphadenopathy with fever** - matted nodes suggest TB; rapidly enlarging asymmetric nodes suggest lymphoma. [NACO 2021]",
        "**Wasting** (BMI under 18.5) and generalised lymphadenopathy with hepatosplenomegaly suggest disseminated TB, MAC or histoplasmosis. [NACO 2021]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Diffuse pulmonary infiltrates**: PCP (bilateral perihilar ground glass, high LDH, no effusion) versus **TB** (any pattern at low CD4, effusion, nodes) versus bacterial pneumonia (lobar, acute) versus CMV. [Harrison 22e]",
        "**Ring-enhancing brain lesions**: **toxoplasmosis** (multiple, basal ganglia and corticomedullary, IgG positive) versus **tuberculoma** versus **primary CNS lymphoma** (single, periventricular, EBV DNA in CSF) versus neurocysticercosis. [Harrison 22e]",
        "**White matter lesions without enhancement or mass effect**: PML (JC virus PCR in CSF) versus HIV encephalopathy. [Harrison 22e]",
        "**Chronic meningitis**: cryptococcal (CrAg positive, high opening pressure) versus TB meningitis (high protein, low glucose, basal exudates). [WHO 2022]",
        "**Fever without focus at CD4 under 100**: disseminated TB, MAC, histoplasmosis, talaromycosis, lymphoma, and bacteraemia (non-typhoidal Salmonella). [DHHS OI 2024]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**Baseline for every PLHIV**: CD4 count, **viral load** (NACO: at 6 and 12 months then yearly), CBC, LFT, creatinine, HBsAg, anti-HCV, VDRL, urine, chest X-ray and TB symptom screen. [NACO 2021]",
        "**AHD screening (CD4 under 200)**: **serum CrAg** (CD4 under 100, consider under 200), **urine TB-LAM** (inpatients with TB symptoms or CD4 under 200; outpatients with symptoms and CD4 under 100), and Toxoplasma IgG. [WHO 2021]",
        "**TB diagnosis**: **CBNAAT/Truenat** on sputum or any sample as the first test, plus **TB-LAM** - LAM performs best at low CD4 and reduces mortality when used in inpatients. [NTEP 2024]",
        "**PCP**: induced sputum or BAL for **immunofluorescence or PCR**; **LDH over 500 U/L**, **beta-D-glucan positive**, ABG with **PaO2 under 70 mmHg or A-a gradient 35 or more** marks moderate-severe disease. [DHHS OI 2024]",
        "**Brain lesions**: **contrast MRI** is better than CT for toxoplasmosis (multiple lesions); LP only after excluding mass effect; CSF EBV PCR for lymphoma, JC virus PCR for PML. [DHHS OI 2024]",
        "**CMV**: diagnosis of retinitis is **clinical by dilated fundoscopy**; blood CMV PCR does not prove end-organ disease; colitis needs biopsy with inclusion bodies. [DHHS OI 2024]",
        "**Diarrhoea**: stool **modified acid-fast stain** (Cryptosporidium, Cystoisospora, Cyclospora), microsporidia stain, culture; colonoscopy and biopsy if negative. [NACO 2021]",
      ],
    },
    {
      heading: "Prophylaxis - primary and secondary",
      points: [
        "**Cotrimoxazole preventive therapy (CPT)**: **960 mg (one DS tablet) once daily** for all adults with **CD4 350 or less or WHO stage 3-4**, and all HIV-exposed infants from 6 weeks; it prevents PCP, toxoplasma, Cystoisospora, bacterial infections and malaria. [NACO 2021]",
        "**Stopping CPT (NACO)**: when on ART with **CD4 over 350 on two occasions 6 months apart** and viral suppression; WHO suggests continuing where malaria and severe bacterial infection are common. [NACO 2021]",
        "**Cotrimoxazole allergy**: desensitise if non-severe, or use **dapsone 100 mg daily** (check G6PD) for PCP; add pyrimethamine-leucovorin if toxoplasma IgG positive. [DHHS OI 2024]",
        "**TB preventive treatment (TPT)** for all PLHIV after excluding active TB: **3HP (isoniazid 900 mg + rifapentine 900 mg weekly for 12 weeks)** or **6H (isoniazid 300 mg daily for 6 months)** with pyridoxine; 3HP can be given with dolutegravir. [NTEP TPT 2021]",
        "**Cryptococcal**: CrAg-positive without meningitis - **fluconazole 800 mg x 2 weeks, 400 mg x 8 weeks, then 200 mg** until immune recovery; routine primary fluconazole prophylaxis is not recommended where CrAg screening exists. [WHO 2022]",
        "**MAC prophylaxis** (azithromycin 1200 mg weekly) is **not needed if ART is started immediately** (DHHS 2024); consider only if ART is delayed with CD4 under 50. [DHHS OI 2024]",
        "**Secondary prophylaxis (maintenance)** after PCP, toxoplasmosis, cryptococcosis or CMV continues until **CD4 over 200 for at least 3-6 months** on ART with suppressed viral load. [DHHS OI 2024]",
        "**Vaccines**: hepatitis B, pneumococcal (PCV then PPSV23), influenza yearly, HPV; **avoid live vaccines** (MMR, varicella, yellow fever) at CD4 under 200. [DHHS OI 2024]",
      ],
    },
    {
      heading: "Treatment of the major OIs",
      points: [
        "**PCP**: **cotrimoxazole 15-20 mg/kg/day of trimethoprim** in 3-4 divided doses (about 2 DS tablets 8-hourly for 60 kg) for **21 days**, then secondary prophylaxis. [DHHS OI 2024]",
        "**PCP steroids** if PaO2 under 70 mmHg or A-a gradient 35 or more: **prednisolone 40 mg twice daily days 1-5, 40 mg daily days 6-10, 20 mg daily days 11-21**, started within 72 hours. [DHHS OI 2024]",
        "PCP alternatives: **primaquine 30 mg daily + clindamycin 600 mg IV 8-hourly** (G6PD check), or atovaquone for mild disease. [DHHS OI 2024]",
        "**Toxoplasmosis**: **pyrimethamine 200 mg once then 50-75 mg daily + sulfadiazine 1-1.5 g 6-hourly + folinic acid 10-25 mg daily** for **6 weeks**; in India, **cotrimoxazole 5 mg/kg TMP twice daily** is equally effective and widely used. [DHHS OI 2024]",
        "**Empirical toxoplasma therapy** for ring-enhancing lesions with positive IgG - expect clinical response in **7-14 days**; no response means brain biopsy (lymphoma, TB). [DHHS OI 2024]",
        "**CMV retinitis**: **valganciclovir 900 mg twice daily for 14-21 days, then 900 mg daily**, plus **intravitreal ganciclovir 2 mg** for sight-threatening (zone 1) lesions; IV ganciclovir 5 mg/kg 12-hourly if oral not possible. [DHHS OI 2024]",
        "**Oesophageal candidiasis**: **fluconazole 200-400 mg daily for 14-21 days**; oral thrush 100 mg daily for 7-14 days. [DHHS OI 2024]",
        "**Cystoisospora**: cotrimoxazole DS twice daily for 10 days; **cryptosporidiosis**: ART is the cure, with rehydration and nitazoxanide as an adjunct. [DHHS OI 2024]",
        "**Disseminated MAC**: **clarithromycin 500 mg twice daily + ethambutol 15 mg/kg daily** for at least 12 months. [DHHS OI 2024]",
      ],
    },
    {
      heading: "TB-HIV, timing of ART and IRIS",
      points: [
        "**HIV-TB treatment** follows the standard NTEP regimen (2HRZE/4HRE); start ATT first and **ART within 2 weeks** irrespective of CD4, except TB meningitis. [WHO 2021]",
        "**TB meningitis**: delay ART **4-8 weeks** after ATT (earlier ART increased severe adverse events in trials). [WHO 2021]",
        "**Rifampicin-dolutegravir interaction**: give **dolutegravir 50 mg twice daily** during rifampicin and for 2 weeks after; rifabutin replaces rifampicin with boosted PIs. [NACO 2021]",
        "**Cryptococcal meningitis**: delay ART **4-6 weeks** after antifungal start (COAT trial excess mortality with early ART). [WHO 2022]",
        "**Other OIs (PCP, toxoplasma, CMV)**: start ART **within 2 weeks** (ACTG A5164 showed fewer deaths and AIDS progression). [DHHS OI 2024]",
        "**Paradoxical TB-IRIS** (fever, enlarging nodes, effusions) in 10-20%: continue ATT and ART, give **prednisolone 1.5 mg/kg/day for 2 weeks then 0.75 mg/kg/day for 2 weeks**; prophylactic prednisone (40 mg x 2 weeks then 20 mg x 2 weeks) at CD4 100 or less cut IRIS in the PredART trial. [Meintjes, NEJM 2018]",
        "**Do not stop ART for IRIS** unless life-threatening (e.g. cryptococcal IRIS with raised ICP or TB meningitis IRIS). [DHHS OI 2024]",
      ],
    },
    {
      heading: "Inpatient and emergency care",
      points: [
        "**Admit**: SpO2 under 94% or respiratory distress, altered sensorium, focal deficit or seizure, severe headache with vomiting, sudden vision loss, severe dehydration, CD4 under 200 with fever and danger signs. [WHO 2021]",
        "**WHO danger signs** in PLHIV: respiratory rate over 30, heart rate over 120, unable to walk unaided, temperature 39 C or more - triage for rapid TB-LAM, CrAg and empirical therapy. [WHO 2021]",
        "In a **seriously ill PLHIV with suspected TB**, start empirical ATT if tests are unavailable or negative and there is no response to antibiotics. [WHO 2021]",
        "**PCP with respiratory failure**: oxygen, high-flow or non-invasive ventilation, IV cotrimoxazole and steroids; watch for **pneumothorax**. [DHHS OI 2024]",
        "**Brain lesion with mass effect**: dexamethasone only for midline shift or clinical deterioration, and taper quickly (masks lymphoma response). [DHHS OI 2024]",
        "**Monitor cotrimoxazole toxicity**: rash (stop at Stevens-Johnson features), **hyperkalaemia, cytopenias, hepatitis** and creatinine rise at treatment doses. [DHHS OI 2024]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: CPT continues (benefit outweighs first-trimester folate risk); treat PCP with cotrimoxazole; avoid valganciclovir if possible; TPT with isoniazid is safe (3HP data limited). [NACO 2021]",
        "**Children**: CPT for all HIV-exposed infants from 6 weeks until HIV excluded; children with HIV continue until 5 years or as per CD4; PCP peaks at 3-6 months of age. [NACO 2021]",
        "**CKD**: reduce cotrimoxazole treatment doses at CrCl under 30 and watch potassium; adjust ganciclovir to creatinine clearance. [DHHS OI 2024]",
        "**HBV co-infection**: ART must contain **TDF plus lamivudine**; stopping them can cause hepatitis flare. [NACO 2021]",
        "**Elderly PLHIV**: more drug interactions (statins, antiplatelets), cardiovascular risk and atypical OI presentations. [NACO 2021]",
        "**Resource-limited settings**: where CD4 testing is unavailable, use WHO staging; give CPT, TPT and ART on clinical grounds; use cotrimoxazole for toxoplasmosis when pyrimethamine is unavailable. [WHO 2021]",
      ],
    },
    {
      heading: "Complications, prognosis and follow-up",
      points: [
        "**PCP mortality** is 10-20% overall and **over 50% when ventilation is needed**; toxoplasmosis and cryptococcal meningitis carry 20-30% mortality even with treatment. [Harrison 22e]",
        "CMV retinitis causes **retinal detachment** and blindness; immune recovery uveitis may follow ART. [DHHS OI 2024]",
        "**Follow-up**: monthly visits in the first 6 months, adherence counselling, CD4 at 6 months, **viral load at 6 and 12 months then yearly**, and fundoscopy every 3 months while CD4 under 100. [NACO 2021]",
        "**An OI after 6 months on ART** suggests treatment failure - check viral load; two values over 1000 copies/mL 3 months apart with adherence support confirm failure. [NACO 2021]",
        "**Refer** to the ART Centre or Centre of Excellence for CD4 under 100 with OIs, suspected IRIS, treatment failure and complex drug interactions. [NACO 2021]",
        "**Programme link**: the **National AIDS and STD Control Programme (NACP Phase V, 2021-2026)** provides free CD4, viral load, CPT, ART and links with NTEP through single-window TB-HIV services. [NACO 2021]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**WHO 2021 consolidated HIV guidelines**: rapid ART (same day, within 7 days), **ART within 2 weeks of TB treatment**, and the **AHD package** (CrAg, TB-LAM, CPT, TPT, rapid ART, adherence support). [WHO 2021]",
        "**WHO 2022 cryptococcal guideline**: single high-dose liposomal amphotericin regimen and CrAg screening at CD4 under 100. [WHO 2022]",
        "**NACO National Guidelines for HIV Care and Treatment 2021**: TLD (tenofovir-lamivudine-dolutegravir) first line, CPT at CD4 350 or less, AHD package, viral load-based monitoring. [NACO 2021]",
        "**NTEP TPT guidelines 2021** expanded **3HP and 1HP** for PLHIV and household contacts. [NTEP TPT 2021]",
        "**WHO 2024 TB consolidated guidelines (Module 6)** recommend **TB-LAM-supported diagnosis** and rapid molecular testing for all PLHIV with symptoms. [WHO 2024]",
        "**DHHS/NIH/IDSA adult OI guidelines (living, updated 2024)**: no routine MAC prophylaxis if ART started immediately; ART within 2 weeks for most OIs. [DHHS OI 2024]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Learn the **CD4 ladder**: any - TB, zoster; **under 200 - PCP, candida oesophagitis; under 100 - toxo, crypto; under 50 - CMV, MAC**. [DHHS OI 2024]",
        "Classic viva: **'When do you start ART after an OI?'** - within 2 weeks for most, including TB; **4-6 weeks for cryptococcal**, 4-8 weeks for TB meningitis. [WHO 2021]",
        "PCP steroid trigger: **PaO2 under 70 mmHg or A-a gradient 35 or more** - prednisolone 40 BD x5, 40 OD x5, 20 OD x11. [DHHS OI 2024]",
        "Common mistake: forgetting to **double dolutegravir (50 mg BD) with rifampicin**. [NACO 2021]",
        "Common mistake: **stopping ART for IRIS** - continue both ART and OI therapy, and add steroids for paradoxical TB-IRIS. [DHHS OI 2024]",
        "Cotrimoxazole covers **PCP, Toxo, Isospora, bacteria and malaria** - one tablet, five infections. [NACO 2021]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs for prophylaxis and treatment of major OIs",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Cotrimoxazole (prophylaxis)", "960 mg (1 DS) PO once daily; infants 6 weeks onward by weight", "Until CD4 over 350 x2 on ART with VL suppressed (NACO)", "Rash, SJS/TEN, cytopenias, hyperkalaemia, hepatitis; G6PD-independent"],
        ["Cotrimoxazole (PCP treatment)", "TMP 15-20 mg/kg/day PO/IV in 3-4 doses", "21 days, then prophylaxis", "As above, more frequent at high dose; adjust if CrCl under 30"],
        ["Prednisolone (PCP)", "40 mg BD d1-5, 40 mg OD d6-10, 20 mg OD d11-21", "If PaO2 under 70 or A-a gradient 35 or more", "Hyperglycaemia, may unmask TB or CMV"],
        ["Pyrimethamine + sulfadiazine + folinic acid", "200 mg load then 50-75 mg daily; sulfadiazine 1-1.5 g 6-hourly; folinic acid 10-25 mg daily", "6 weeks, then maintenance", "Marrow suppression, crystalluria, rash; pyrimethamine scarce in India"],
        ["Valganciclovir", "900 mg PO BD induction, then 900 mg OD", "14-21 days induction; maintenance till CD4 over 100-150 for 3-6 months", "Neutropenia, anaemia, thrombocytopenia; renal dose adjustment; teratogenic"],
        ["Fluconazole", "Oesophageal 200-400 mg daily; crypto pre-emptive 800 mg then 400 mg then 200 mg", "14-21 days for oesophagitis", "Hepatitis, QT, interactions"],
        ["Isoniazid + rifapentine (3HP)", "Isoniazid 900 mg + rifapentine 900 mg PO weekly (adult over 30 kg)", "12 weekly doses", "Flu-like reaction, hepatitis; compatible with DTG; not with PIs"],
        ["Isoniazid (6H)", "300 mg PO daily + pyridoxine 10-25 mg", "6 months", "Hepatitis, peripheral neuropathy"],
        ["Clarithromycin + ethambutol (MAC)", "500 mg BD + 15 mg/kg daily", "At least 12 months", "GI upset, QT; optic neuritis with ethambutol"],
      ],
    },
    {
      heading: "CD4 thresholds and the OI they predict",
      columns: ["CD4 (cells/mm3)", "Typical OIs", "Prophylaxis / screening", "Key test"],
      rows: [
        ["Any count", "TB, bacterial pneumonia, zoster, oral candida, Kaposi", "TPT (3HP/6H) after excluding TB; vaccines", "4-symptom screen, CBNAAT, CXR"],
        ["Under 350", "Bacterial infections, malaria, isosporiasis", "Cotrimoxazole 960 mg daily (NACO)", "-"],
        ["Under 200", "PCP, oesophageal candida, histoplasmosis", "Cotrimoxazole; AHD package", "Induced sputum IF/PCR, LDH, BDG; TB-LAM"],
        ["Under 100", "Toxoplasmosis, cryptococcus, cryptosporidium, PML", "CrAg screen; cotrimoxazole covers toxo", "Serum CrAg, toxo IgG, MRI brain"],
        ["Under 50", "CMV retinitis/colitis, disseminated MAC, CNS lymphoma", "Fundoscopy every 3 months; ART (no routine MAC prophylaxis)", "Dilated fundoscopy, AFB blood culture"],
      ],
    },
    {
      heading: "Ring-enhancing brain lesions in HIV",
      columns: ["Feature", "Toxoplasmosis", "Primary CNS lymphoma", "Tuberculoma"],
      rows: [
        ["CD4", "Under 100", "Under 50", "Any"],
        ["Number and site", "Multiple, basal ganglia, corticomedullary junction", "Usually single, periventricular, crosses corpus callosum", "Multiple or single, often with basal meningitis"],
        ["Fever", "Common", "Uncommon", "Common"],
        ["Supportive test", "Toxoplasma IgG positive (negative almost excludes)", "CSF EBV DNA PCR; SPECT/PET hot lesion", "CSF TB features, CBNAAT, chest TB"],
        ["Response test", "Clinical and radiological response to therapy in 7-14 days", "No response to toxo therapy; biopsy", "Response to ATT over weeks"],
      ],
    },
    {
      heading: "Timing of ART after an opportunistic infection",
      columns: ["OI", "When to start ART", "Evidence / reason", "IRIS management"],
      rows: [
        ["Pulmonary or extrapulmonary TB (not CNS)", "Within 2 weeks of ATT, any CD4", "SAPIT, CAMELIA, STRIDE - lower mortality at low CD4", "Prednisolone 1.5 mg/kg/day x2 weeks then 0.75 x2 weeks"],
        ["TB meningitis", "4-8 weeks after ATT", "Early ART increased severe adverse events", "Steroids part of TBM therapy; careful monitoring"],
        ["Cryptococcal meningitis", "4-6 weeks after antifungal start", "COAT trial - early ART raised mortality", "Therapeutic LP; steroids only if life-threatening"],
        ["PCP, toxoplasmosis, bacterial infections", "Within 2 weeks", "ACTG A5164 - fewer deaths/AIDS progression", "Continue ART; supportive care"],
        ["CMV retinitis", "Within 2 weeks", "Intravitreal therapy protects the eye", "Immune recovery uveitis - topical/periocular steroids"],
        ["Cryptosporidiosis, PML, Kaposi", "Immediately", "ART is the only effective therapy", "Continue ART"],
      ],
    },
    {
      heading: "Key investigation cut-offs in HIV OIs",
      columns: ["Test", "Cut-off / finding", "Meaning"],
      rows: [
        ["CD4 count", "Under 200 or WHO stage 3-4", "Advanced HIV disease - AHD package"],
        ["PaO2 / A-a gradient", "Under 70 mmHg / 35 or more", "Moderate-severe PCP - add steroids"],
        ["LDH", "Over 500 U/L", "Supports PCP; very high suggests poor prognosis"],
        ["Viral load", "Under 1000 copies/mL suppressed; over 1000 twice 3 months apart = failure", "NACO 2021 monitoring"],
        ["CSF opening pressure", "25 cm H2O or more", "Therapeutic LP in cryptococcal meningitis"],
        ["Toxoplasma IgG", "Negative", "Toxoplasmosis very unlikely; think lymphoma or TB"],
      ],
    },
  ],
  redFlags: [
    "Breathlessness with SpO2 under 94% or desaturation on exertion (PCP)",
    "Headache with vomiting, blurred vision or confusion (cryptococcal meningitis)",
    "Focal neurological deficit or seizure (toxoplasmosis, lymphoma, tuberculoma)",
    "Floaters or sudden painless loss of vision (CMV retinitis)",
    "WHO danger signs: RR over 30, HR over 120, unable to walk unaided, temperature 39 C or more",
    "Worsening fever, nodes or neurological signs in the first 3 months of ART (IRIS)",
    "Severe dehydration from chronic diarrhoea, or odynophagia preventing oral intake",
  ],
  pearls: [
    "**CD4 ladder**: any - TB; under 200 - PCP; under 100 - toxo, crypto; under 50 - CMV, MAC.",
    "**Cotrimoxazole 960 mg daily** at CD4 350 or less covers PCP, toxo, Isospora, bacteria, malaria.",
    "**ART timing**: 2 weeks for most OIs including TB; **4-6 weeks crypto**, 4-8 weeks TB meningitis.",
    "**PCP steroids** if PaO2 under 70 or A-a gradient 35 or more - 40 BD, 40 OD, 20 OD over 21 days.",
    "**DTG 50 mg twice daily with rifampicin** - and for 2 weeks after stopping it.",
    "**Toxo IgG negative**: think lymphoma or TB, not toxoplasmosis.",
    "CMV retinitis: **pizza-pie fundus**; valganciclovir 900 mg BD then OD.",
    "**AHD package**: CrAg, TB-LAM, CPT, TPT, rapid ART.",
    "Never stop ART for IRIS unless it threatens life.",
  ],
  mcqs: [
    {
      id: "infectious-fever-opportunistic-infections-hiv-q1",
      stem:
        "A 34-year-old newly diagnosed HIV-positive man has CD4 64 cells/mm3, no symptoms and a normal chest X-ray. Which set of interventions best fits the WHO advanced HIV disease package?",
      options: [
        "Start ART only after CD4 rises above 100",
        "Fluconazole 200 mg daily prophylaxis and delay ART for 3 months",
        "Serum CrAg, urine TB-LAM if symptomatic, cotrimoxazole, TB preventive treatment and rapid ART",
        "Weekly azithromycin and isoniazid only",
      ],
      answer: 2,
      explanation:
        "The AHD package for CD4 under 200 includes CrAg screening (under 100), TB-LAM where indicated, cotrimoxazole, TPT once active TB is excluded and rapid ART initiation with adherence support. Waiting for CD4 to rise is wrong because ART is what raises it; universal fluconazole prophylaxis is replaced by CrAg screening; MAC prophylaxis is unnecessary when ART starts immediately.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-opportunistic-infections-hiv-q2",
      stem:
        "A PLHIV with CD4 90 has 3 weeks of progressive exertional dyspnoea and dry cough. SpO2 is 89%, PaO2 62 mmHg, LDH 680 U/L and the chest X-ray shows bilateral perihilar haziness. Along with high-dose cotrimoxazole, which is correct?",
      options: [
        "Prednisolone 40 mg twice daily for 5 days, then tapered over 21 days",
        "Avoid steroids because they worsen PCP",
        "Add amphotericin B for possible cryptococcal pneumonia",
        "Start ART on the same day and defer cotrimoxazole",
      ],
      answer: 0,
      explanation:
        "This is moderate-severe PCP (PaO2 under 70 mmHg); adjunctive prednisolone 40 mg BD days 1-5, 40 mg OD days 6-10 and 20 mg OD days 11-21, started within 72 hours, reduces mortality and respiratory failure. Steroids do not worsen PCP, amphotericin is not indicated, and cotrimoxazole is the treatment, not something to defer; ART follows within 2 weeks.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-opportunistic-infections-hiv-q3",
      stem:
        "A PLHIV with CD4 40 has fever, right hemiparesis and seizures. MRI shows multiple ring-enhancing lesions in the basal ganglia. Toxoplasma IgG is positive. What is the most appropriate step?",
      options: [
        "Immediate stereotactic brain biopsy",
        "Empirical anti-toxoplasma therapy and repeat assessment in 10-14 days",
        "Whole-brain radiotherapy for lymphoma",
        "Start ART today and give no specific therapy",
      ],
      answer: 1,
      explanation:
        "Multiple basal ganglia ring-enhancing lesions with positive Toxoplasma IgG at CD4 under 100 justify empirical pyrimethamine-sulfadiazine-folinic acid or high-dose cotrimoxazole, with clinical response expected in 7-14 days. Biopsy is reserved for non-response, a single lesion with negative IgG or suspected lymphoma; radiotherapy is premature; ART follows within 2 weeks alongside specific treatment.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-opportunistic-infections-hiv-q4",
      stem:
        "A man with HIV (CD4 120) and newly diagnosed pulmonary TB started on rifampicin-based ATT. When and how should ART (TLD) be started?",
      options: [
        "After completing 6 months of ATT, with standard dolutegravir dose",
        "Within 2 weeks of ATT, with dolutegravir 50 mg twice daily during rifampicin",
        "After 8 weeks of ATT, replacing rifampicin with streptomycin",
        "Immediately with efavirenz because dolutegravir cannot be used with rifampicin",
      ],
      answer: 1,
      explanation:
        "WHO 2021 and NACO 2021 advise starting ART within 2 weeks of ATT regardless of CD4 (except TB meningitis), and rifampicin induction requires dolutegravir 50 mg twice daily during rifampicin and for 2 weeks after. Waiting until ATT finishes raises mortality, streptomycin substitution is obsolete, and dolutegravir is usable with rifampicin once the dose is doubled.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-opportunistic-infections-hiv-q5",
      stem:
        "Three weeks after starting ART, a patient on ATT for TB lymphadenitis develops high fever and rapidly enlarging, tender cervical nodes. Viral load has fallen 2 log. Sputum shows no rifampicin resistance. The best management is:",
      options: [
        "Stop ART and ATT and restart after 4 weeks",
        "Switch to second-line ART for treatment failure",
        "Change ATT to an MDR-TB regimen",
        "Continue ART and ATT; give prednisolone 1.5 mg/kg/day for 2 weeks then 0.75 mg/kg/day for 2 weeks",
      ],
      answer: 3,
      explanation:
        "This is paradoxical TB-IRIS: worsening soon after ART with a good virological response and no drug resistance. Both ART and ATT continue, prednisolone reduces symptoms and hospital stay (Meintjes regimen) and nodes may need aspiration. Stopping therapy is dangerous, a falling viral load excludes ART failure, and there is no evidence of MDR-TB.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "infectious-fever-opportunistic-infections-hiv-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Enumerate the opportunistic infections in HIV according to CD4 count. Discuss the prophylaxis of opportunistic infections and the management of Pneumocystis jirovecii pneumonia. Add a note on the timing of ART after an opportunistic infection.",
      openingLines: [
        "Opportunistic infections are infections that cause disease, or unusually severe disease, because of HIV-induced CD4 depletion; each appears below a predictable CD4 threshold.",
        "They are prevented by cotrimoxazole, TB preventive treatment, CrAg screening and early ART (NACO 2021, WHO AHD package), and ART follows most OIs within 2 weeks.",
      ],
      answer: [
        {
          heading: "OIs by CD4 count",
          points: [
            "Any: TB, bacterial pneumonia, zoster, oral candidiasis, Kaposi sarcoma.",
            "Under 200: PCP, oesophageal candidiasis, histoplasmosis.",
            "Under 100: toxoplasmosis, cryptococcosis, cryptosporidiosis, PML.",
            "Under 50: CMV retinitis, disseminated MAC, primary CNS lymphoma.",
          ],
        },
        {
          heading: "Prophylaxis",
          points: [
            "Cotrimoxazole 960 mg daily at CD4 350 or less or WHO stage 3-4; stop at CD4 over 350 twice on ART (NACO).",
            "TPT: 3HP weekly x 12 or 6H daily after excluding TB.",
            "CrAg screen at CD4 under 100; pre-emptive fluconazole if positive and CSF negative.",
            "Vaccines; avoid live vaccines at CD4 under 200; secondary prophylaxis until CD4 over 200.",
          ],
        },
        {
          heading: "PCP - diagnosis",
          points: [
            "Subacute exertional dyspnoea, dry cough, exertional desaturation; bilateral perihilar ground glass.",
            "Induced sputum or BAL IF/PCR; LDH over 500; beta-D-glucan; ABG.",
          ],
        },
        {
          heading: "PCP - treatment",
          points: [
            "Cotrimoxazole TMP 15-20 mg/kg/day in 3-4 doses for 21 days.",
            "Prednisolone if PaO2 under 70 or A-a gradient 35 or more: 40 BD x5, 40 OD x5, 20 OD x11 days.",
            "Alternative primaquine + clindamycin; then secondary prophylaxis.",
          ],
        },
        {
          heading: "Timing of ART",
          points: [
            "Within 2 weeks for most OIs including TB (any CD4).",
            "4-6 weeks after antifungal start in cryptococcal meningitis; 4-8 weeks in TB meningitis.",
            "Watch for IRIS in the first 3 months; continue ART.",
          ],
        },
      ],
      mustDraw: ["CD4 ladder diagram with the OI at each threshold", "Table: ART timing by OI"],
      markSplit: [
        { part: "OIs by CD4", marks: 2 },
        { part: "Prophylaxis", marks: 3 },
        { part: "PCP diagnosis and treatment", marks: 3 },
        { part: "Timing of ART", marks: 2 },
      ],
      keywords: ["CD4", "cotrimoxazole", "PCP", "prednisolone", "TPT", "CrAg", "IRIS", "ART timing"],
    },
    {
      id: "infectious-fever-opportunistic-infections-hiv-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on immune reconstitution inflammatory syndrome (IRIS).",
      openingLines: [
        "IRIS is a paradoxical clinical worsening of a known infection, or the unmasking of a hidden one, after starting ART, caused by recovering pathogen-specific immunity.",
        "It occurs mostly in the first 3 months of ART, especially when baseline CD4 is under 50-100 and ART starts soon after an OI.",
      ],
      answer: [
        {
          heading: "Types and common pathogens",
          points: [
            "Paradoxical (treated OI worsens) and unmasking (subclinical OI appears).",
            "TB, cryptococcus, CMV (immune recovery uveitis), MAC, hepatitis B, PML, Kaposi sarcoma.",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "Temporal link to ART, viral load falling, CD4 rising.",
            "Exclude drug resistance, new infection, drug toxicity and non-adherence.",
          ],
        },
        {
          heading: "Management and prevention",
          points: [
            "Continue ART and OI treatment; NSAIDs for mild cases.",
            "TB-IRIS: prednisolone 1.5 mg/kg/day x 2 weeks then 0.75 mg/kg/day x 2 weeks.",
            "Prevent: screen for TB and CrAg before ART; delay ART 4-6 weeks in cryptococcal meningitis; prophylactic prednisone (PredART) at CD4 100 or less with TB.",
          ],
        },
      ],
      mustDraw: ["Flow chart: worsening on ART - exclude failure, resistance, new OI - diagnose IRIS - manage"],
      markSplit: [
        { part: "Definition and types", marks: 1.5 },
        { part: "Diagnosis", marks: 1.5 },
        { part: "Management and prevention", marks: 2 },
      ],
      keywords: ["IRIS", "paradoxical", "unmasking", "prednisolone", "PredART", "cryptococcal"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - chapter on HIV disease: AIDS and related disorders",
    "NACO National Guidelines for HIV Care and Treatment, Ministry of Health and Family Welfare, Government of India, 2021",
    "WHO Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring, 2021",
    "WHO Guidelines for diagnosing, preventing and managing cryptococcal disease among adults, adolescents and children living with HIV, 2022",
    "Panel on Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (NIH, CDC, HIVMA/IDSA), living guideline updated 2024",
    "NTEP Guidelines for Programmatic Management of Tuberculosis Preventive Treatment in India, 2021",
    "Meintjes G et al. Prednisone for the prevention of paradoxical tuberculosis-associated IRIS (PredART), New England Journal of Medicine, 2018",
    "NACO India HIV Estimates 2023: Technical Report",
  ],
});

topics.push({
  id: "infectious-fever-hiv-special-situations",
  title: "HIV special situations: PEP, PrEP, PPTCT, paediatric HIV and HIV-2",
  frequency: "core",
  oneLiner:
    "HIV prevention and special-population care rest on a few fixed rules: **post-exposure prophylaxis (PEP)** with **TDF + 3TC + DTG for 28 days started within 72 hours (ideally 2 hours)**; **pre-exposure prophylaxis (PrEP)** with daily **TDF/FTC** or long-acting injectables for people at substantial risk; **prevention of parent-to-child transmission (PPTCT)** by universal antenatal **HIV and syphilis testing**, **lifelong dolutegravir-based ART**, infant **nevirapine (or dual) prophylaxis**, **early infant diagnosis by DNA PCR from 6 weeks** and supported breastfeeding; and recognising **HIV-2**, which is **intrinsically resistant to NNRTIs** - all underpinned by **U=U** (an undetectable viral load does not transmit HIV sexually).",
  keywords: [
    "PEP",
    "post-exposure prophylaxis",
    "needlestick injury",
    "PrEP",
    "pre-exposure prophylaxis",
    "TDF/FTC",
    "cabotegravir",
    "lenacapavir",
    "PPTCT",
    "EMTCT",
    "Option B+",
    "dolutegravir in pregnancy",
    "infant nevirapine prophylaxis",
    "early infant diagnosis",
    "EID",
    "DNA PCR",
    "paediatric HIV",
    "HIV-2",
    "U=U",
    "viral load monitoring",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**PEP** is short-term ART taken after a potential HIV exposure to prevent infection; **PrEP** is ART taken by HIV-negative people **before** exposure; **PPTCT/EMTCT** is the package that prevents transmission from a mother living with HIV to her child. [WHO 2021]",
        "India has about **25 lakh PLHIV**, **about 66,000-68,000 new infections a year** and about 20,000 pregnant women with HIV needing PPTCT each year; prevalence is highest in **Mizoram, Nagaland and Manipur**. [NACO India HIV Estimates 2023]",
        "Without any intervention, **mother-to-child transmission is 15-45%**: about 5-10% in pregnancy, 10-20% in labour and 5-20% through breastfeeding; with suppressive ART it falls to **under 1%**. [WHO 2021]",
        "**Occupational transmission risk** after a percutaneous injury from an HIV-positive source is about **0.3%**, after mucous membrane exposure about **0.09%** - versus about 6-30% for hepatitis B and 1.8% for hepatitis C. [CDC 2013]",
        "Per-act sexual risk: **receptive anal intercourse about 1.4%**, receptive vaginal about 0.08%; sharing injecting equipment about 0.6%. [CDC 2014]",
        "**HIV-2** is concentrated in **West Africa**; in India it is uncommon, reported mainly from **western India (Maharashtra, Goa)**, often as **dual HIV-1/HIV-2 infection**. [Harrison 22e]",
        "India's goals under **NACP Phase V (2021-2026)** are the **UNAIDS 95-95-95 targets** and **elimination of vertical transmission of HIV and syphilis (EMTCT)**. [NACO 2021]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**Occupational exposure**: needlestick (especially **hollow-bore needles with visible blood** or from an artery or vein), scalpel injuries, splashes to eyes or mouth, and contact with non-intact skin. [NACO 2021]",
        "**Infectious fluids**: blood, semen, vaginal secretions, CSF, pleural, peritoneal, pericardial, synovial and amniotic fluid; **saliva, urine, sweat, tears and vomit are not infectious unless visibly bloody**. [NACO 2021]",
        "**Non-occupational exposure**: unprotected sex, sexual assault, condom breakage, shared needles - key populations are **sex workers, MSM, transgender people, people who inject drugs and their partners**. [NACO 2021]",
        "**MTCT risk factors**: **high maternal viral load** (the single strongest), low CD4, **new infection in pregnancy or breastfeeding**, no or late ART, prolonged rupture of membranes, chorioamnionitis, invasive procedures, mixed feeding and mastitis. [WHO 2021]",
        "**Paediatric HIV** is almost entirely **vertically acquired**; adolescents may also acquire it sexually or through injecting drug use. [NACO 2021]",
        "**HIV-2 risk** follows travel or partners from West Africa and areas of western India; it is less transmissible sexually and vertically than HIV-1. [Harrison 22e]",
      ],
    },
    {
      heading: "Pathophysiology - the window that PEP and PrEP exploit",
      points: [
        "After mucosal or percutaneous exposure, HIV first infects local **dendritic cells, macrophages and CD4 T cells**, reaches regional lymph nodes in **24-72 hours** and becomes systemic within days - PEP works by blocking this early local replication. [Harrison 22e]",
        "Animal studies show PEP efficacy falls sharply when started after **24-36 hours** and is negligible after **72 hours** - hence 'as early as possible, ideally within 2 hours, never after 72'. [WHO 2024]",
        "**PrEP** puts active drug (**tenofovir diphosphate**) in genital and rectal tissue before exposure; rectal tissue reaches protective levels faster than cervicovaginal tissue, which is the basis for **event-driven 2-1-1 dosing only in cisgender men**. [WHO 2022]",
        "**Dolutegravir** is an integrase inhibitor with a **high genetic barrier**, rapid viral load decline (useful late in pregnancy) and once-daily dosing; it is the anchor of PEP, PPTCT and first-line ART. [NACO 2021]",
        "**Breastfeeding transmission** depends on **breast-milk viral load** and gut integrity - **mixed feeding** damages the infant gut mucosa and raises transmission more than exclusive breastfeeding. [WHO 2016]",
        "**Infant antibodies are maternal IgG** that cross the placenta and persist **up to 18 months** - so infant diagnosis before 18 months needs a **virological test (DNA PCR)**, not an antibody test. [NACO 2021]",
        "**HIV-2** differs in reverse transcriptase structure (**Y181I, Y188L**), making it **intrinsically resistant to efavirenz and nevirapine**; it has lower viral loads and slower CD4 decline. [Harrison 22e]",
      ],
    },
    {
      heading: "Classification - exposure grading and infant risk",
      points: [
        "**NACO exposure grading**: **mild** - mucous membrane or non-intact skin with small volume, or superficial scratch with a solid needle; **moderate** - large volume or prolonged contact, or moderate injury with a solid needle; **severe** - **deep injury with a hollow-bore needle, visible blood on the device, or needle used in an artery or vein**. [NACO 2021]",
        "**Source status**: known HIV positive (with viral load if known), HIV negative, or unknown - PEP is started if the source is positive or unknown and stopped if a rapid test on the source is negative (unless in the window period with high risk). [NACO 2021]",
        "**Infant risk (WHO/NACO)**: **high-risk** if the mother received **under 4 weeks of ART at delivery**, has **viral load over 1000 copies/mL** in the 4 weeks before delivery, acquired HIV in pregnancy or breastfeeding, or was diagnosed only postpartum; all others are **low-risk**. [WHO 2021]",
        "**WHO viral load categories (2023)**: **undetectable (not detected)** - zero risk of sexual transmission; **suppressed (under 1000 copies/mL)** - almost zero risk; **unsuppressed (1000 or more)** - transmission possible and treatment failure likely. [WHO 2023]",
        "**WHO paediatric clinical staging** (stages 1-4) applies to children, with **all children under 5 years counted as advanced HIV disease**. [WHO 2021]",
        "**HIV-2 serology**: rapid tests and line immunoassays differentiate **HIV-1, HIV-2 and dual reactivity**; HIV-1 viral load assays **do not measure HIV-2**. [NACO 2021]",
      ],
    },
    {
      heading: "Clinical features - history and presentation",
      points: [
        "**PEP history**: time since exposure (hours), type of device and depth, fluid, glove use, source HIV/HBV/HCV status and viral load, and the exposed person's **hepatitis B vaccination and antibody status**. [NACO 2021]",
        "**Acute HIV (seroconversion)** 2-4 weeks after exposure: fever, sore throat, rash, lymphadenopathy, mucosal ulcers - ask at every PEP or PrEP visit, because starting PrEP during acute HIV breeds resistance. [WHO 2022]",
        "**Antenatal history**: HIV and syphilis test result, ART start date and adherence, last viral load, partner's status, previous children's status, and feeding plans. [NACO 2021]",
        "**Paediatric HIV presentation**: **failure to thrive**, recurrent or persistent diarrhoea, persistent oral thrush after 6-8 weeks, recurrent pneumonia, **PCP at 3-6 months**, developmental delay and encephalopathy. [WHO 2021]",
        "**Older children and adolescents**: chronic otitis or parotid swelling, chronic lung disease, stunting, delayed puberty, skin disease, school difficulties and disclosure-related distress. [NACO 2021]",
        "**HIV-2**: long asymptomatic period; may present with OIs at low CD4 even with an 'undetectable' HIV-1 viral load - a classic clue. [Harrison 22e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Exposure site**: depth of wound, bleeding, contamination; after sexual assault - injuries documented as per the **MoHFW medico-legal guidelines (2014)**. [MoHFW 2014]",
        "**Pregnant woman with HIV**: weight, BMI, oral thrush, lymphadenopathy, signs of TB, genital ulcers (syphilis, herpes) and WHO staging. [NACO 2021]",
        "**Infant**: weight-for-age and length on growth charts, oral thrush, hepatosplenomegaly, generalised lymphadenopathy, **parotid enlargement**, developmental milestones. [WHO 2021]",
        "**Child with HIV**: **digital clubbing and chronic cough** (lymphoid interstitial pneumonitis - LIP, or bronchiectasis), molluscum, chronic scabies, recurrent herpes zoster. [WHO 2021]",
        "**Signs of congenital syphilis** in HIV-exposed infants: snuffles, hepatosplenomegaly, desquamating rash on palms and soles, pseudoparalysis. [Harrison 22e]",
        "**PrEP visit**: weight, blood pressure, signs of STIs (urethral discharge, genital ulcers), and features of acute HIV. [WHO 2022]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Febrile illness after PEP or PrEP start**: acute HIV seroconversion versus drug reaction versus intercurrent viral illness - an **HIV antigen/antibody test plus viral load** separates them. [WHO 2022]",
        "**Failure to thrive in an infant**: HIV versus malnutrition, TB, congenital infections (TORCH), cow's milk protein allergy and congenital heart disease. [WHO 2021]",
        "**LIP versus miliary TB** in a child with HIV: LIP has **clubbing, parotid enlargement, no fever** and a reticulonodular pattern; miliary TB is febrile and acute. [WHO 2021]",
        "**Persistent low CD4 with undetectable HIV-1 viral load**: HIV-2 infection, poor CD4 recovery (immunological non-responder), or lab error. [Harrison 22e]",
        "**Indeterminate infant results**: true infection versus contamination or low-level maternal DNA - repeat DNA PCR on a new sample before starting lifelong ART. [NACO 2021]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**HIV diagnosis (NACO)**: adults - a **three-test strategy** with three different rapid kits; children under 18 months - **DNA PCR on dried blood spot (DBS)**. [NACO 2021]",
        "**PEP baseline**: HIV test of exposed person (and source if possible), **HBsAg and anti-HBs**, anti-HCV, creatinine, pregnancy test; **follow-up HIV test at 3 months** (WHO 2024 simplified schedule; older NACO schedules also tested at 6 weeks and 6 months). [WHO 2024]",
        "**PrEP baseline and follow-up**: HIV test (exclude acute HIV), **creatinine (eGFR 60 mL/min or more for TDF)**, HBsAg, STI screen and pregnancy test; repeat HIV test **every 3 months**, creatinine every 6-12 months. [WHO 2022]",
        "**Antenatal**: universal **dual HIV/syphilis rapid test** at first ANC visit, HBsAg (triple elimination); repeat HIV test in the third trimester for women at high risk. [NACO 2021]",
        "**Pregnant women on ART**: viral load at **6 months on ART** and in the **late third trimester (around 32-36 weeks)** to classify infant risk; if over 1000, adherence support and repeat. [NACO 2021]",
        "**Early infant diagnosis (EID)**: **DBS DNA PCR at 6 weeks** (or first contact after), repeated at **6 months and 12 months** or 6 weeks after breastfeeding stops; **confirm with antibody tests at 18 months**; any positive PCR is confirmed on a second sample. [NACO 2021]",
        "**Viral load monitoring on ART (NACO)**: at **6 months, 12 months, then every 12 months**; **1000 copies/mL or more** - enhanced adherence counselling and repeat after 3 months; persistent - treatment failure. [NACO 2021]",
      ],
    },
    {
      heading: "PEP - management in OPD and casualty",
      points: [
        "**First aid**: wash the wound with **soap and running water**, let it bleed freely, **do not squeeze, scrub, suck or apply bleach**; flush eyes and mouth with water or saline. [NACO 2021]",
        "**Regimen (NACO 2021)**: **tenofovir 300 mg + lamivudine 300 mg + dolutegravir 50 mg (TLD), one tablet once daily for 28 days**; start **as early as possible (ideally within 2 hours), not after 72 hours**. [NACO 2021]",
        "**Alternatives** if DTG is unavailable or not tolerated: TDF + 3TC with **atazanavir/ritonavir or lopinavir/ritonavir**; TAF or FTC can replace TDF or 3TC. [WHO 2024]",
        "**Children**: weight-based ABC or AZT + 3TC + DTG (paediatric DTG) for 28 days. [WHO 2024]",
        "**Hepatitis B**: if unvaccinated or non-responder and source HBsAg positive or unknown - **HBIG 0.06 mL/kg IM + start hepatitis B vaccination**; vaccinated responders (anti-HBs 10 mIU/mL or more) need nothing. [NACO 2021]",
        "**Sexual assault survivors**: HIV PEP, **emergency contraception** (levonorgestrel 1.5 mg within 72 hours), presumptive STI treatment, hepatitis B vaccine, counselling and medico-legal care. [MoHFW 2014]",
        "**Counselling**: adherence for all 28 days, condoms and no blood donation until the 3-month test is negative, and report symptoms of acute HIV. [NACO 2021]",
      ],
    },
    {
      heading: "PrEP",
      points: [
        "**Indication**: HIV-negative people at **substantial risk** - sex workers, MSM, transgender people, people who inject drugs, and **serodiscordant partners** whose partner is not yet virally suppressed. [WHO 2022]",
        "**Oral PrEP**: **TDF 300 mg + FTC 200 mg (or TDF + 3TC) once daily**; protective levels after about **7 days**; efficacy **over 90%** with good adherence. [WHO 2022]",
        "**Event-driven (2-1-1) PrEP** for cisgender men: **2 tablets 2-24 hours before sex, 1 tablet 24 hours later and 1 tablet 48 hours after the first dose**. [WHO 2022]",
        "**Long-acting cabotegravir (CAB-LA)**: **600 mg IM, two injections 4 weeks apart, then every 8 weeks** - recommended by WHO in 2022 (HPTN 083 and 084 superior to oral PrEP). [WHO 2022]",
        "**Lenacapavir**: subcutaneous injection **twice yearly**; PURPOSE 1 and 2 trials (2024) showed near-complete protection; FDA approved and **WHO recommended in 2025**. [WHO 2025]",
        "**Dapivirine vaginal ring** (monthly) is a WHO-recommended option for women who cannot use oral PrEP. [WHO 2021]",
        "In India, **NACO offers oral PrEP** to key populations through targeted intervention sites; long-acting agents are not yet in the programme. [NACO 2021]",
      ],
    },
    {
      heading: "PPTCT - pregnancy, delivery and infant",
      points: [
        "**Universal testing**: every pregnant woman is offered **HIV and syphilis testing at the first ANC visit**; HIV-positive women start **lifelong TLD the same day or as soon as possible, irrespective of CD4** (Option B+ since 2014). [NACO 2021]",
        "**Dolutegravir is safe in pregnancy and at conception**: the 2018 Tsepamo neural-tube-defect signal fell to **about 0.1%, no different from other ART**, and WHO recommends DTG for all women including those planning pregnancy; give folic acid. [WHO 2021]",
        "**Delivery**: vaginal delivery is preferred when viral load is suppressed; **caesarean section for obstetric indications** (and considered if viral load over 1000 near term); avoid prolonged rupture, artificial rupture, episiotomy and instrumental delivery where possible. [NACO 2021]",
        "**Low-risk infant prophylaxis**: **nevirapine syrup once daily for 6 weeks** (10 mg if birth weight 2-2.5 kg, 15 mg if over 2.5 kg). [NACO 2021]",
        "**High-risk infant prophylaxis**: **dual zidovudine + nevirapine for 6 weeks**, continued (nevirapine with or without zidovudine) for a further 6 weeks - **12 weeks in all if breastfed**. [WHO 2021]",
        "**Infant feeding**: **exclusive breastfeeding for 6 months** with the mother on ART, then complementary foods with continued breastfeeding to at least 12 months (WHO up to 24 months); **avoid mixed feeding** in the first 6 months. [WHO 2016]",
        "**HIV-exposed infant**: **cotrimoxazole from 6 weeks** until HIV is excluded after breastfeeding ends; routine UIP vaccines including **BCG** (defer if infant is confirmed HIV-positive and symptomatic). [NACO 2021]",
        "**Syphilis in pregnancy**: **benzathine penicillin 2.4 million units IM** (single dose for early syphilis; weekly x3 for late or unknown duration) given at least 30 days before delivery prevents congenital syphilis. [WHO 2021]",
      ],
    },
    {
      heading: "Paediatric HIV - treatment",
      points: [
        "**Treat all**: every child with confirmed HIV starts ART **as soon as possible**, regardless of CD4 or stage. [NACO 2021]",
        "**Preferred regimen**: **abacavir + lamivudine + dolutegravir**; **paediatric DTG 10 mg dispersible tablets** for children aged 4 weeks or more and weighing 3 kg or more, and the **50 mg adult tablet from 20 kg**. [WHO 2021]",
        "**Neonates (under 4 weeks)**: AZT + 3TC with **raltegravir** or nevirapine, switching to DTG at 4 weeks and 3 kg. [WHO 2021]",
        "**Lopinavir/ritonavir** remains an alternative (pellets or granules) where DTG is not possible. [WHO 2021]",
        "**Cotrimoxazole prophylaxis** for all children with HIV (up to 5 years in NACO, then as per CD4); **TB screening and TPT**, growth monitoring and **age-appropriate disclosure**. [NACO 2021]",
        "**Adolescents**: transition to adult services, sexual and reproductive health counselling, adherence support and mental health screening. [NACO 2021]",
      ],
    },
    {
      heading: "HIV-2 and special adult situations",
      points: [
        "**HIV-2 is intrinsically resistant to NNRTIs (efavirenz, nevirapine) and enfuvirtide**, and less susceptible to some PIs (atazanavir); **integrase inhibitors (dolutegravir), NRTIs and boosted darunavir or lopinavir** are active - so **TLD suits HIV-2 and dual infection**. [NACO 2021]",
        "**HIV-2 monitoring** needs HIV-2-specific viral load assays (not widely available) - otherwise monitor **CD4 trends and clinical response**. [Harrison 22e]",
        "**HIV-2 natural history**: slower progression, lower viral load, **lower sexual and vertical transmission (MTCT about 0-4%)** - but it does cause AIDS and must be treated. [Harrison 22e]",
        "**Serodiscordant couples**: the positive partner on ART with sustained suppression does not transmit sexually (**U=U**); PrEP for the negative partner until suppression is confirmed; **safer conception** planning. [WHO 2023]",
        "**Women of reproductive age**: DTG-based ART with contraception counselling; **rifampicin and efavirenz reduce hormonal contraceptive efficacy** - DMPA or IUCD preferred. [NACO 2021]",
        "**Healthcare workers with HIV** on suppressive ART need not stop clinical work but avoid exposure-prone procedures if viraemic, per institutional policy. [WHO 2024]",
      ],
    },
    {
      heading: "Complications, prognosis and follow-up",
      points: [
        "**PEP side effects** with TLD are mild (headache, nausea, insomnia); completion rates are higher than with older AZT or LPV/r regimens. [WHO 2024]",
        "**PrEP risks**: small reversible **creatinine rise** and bone-density loss with TDF; **resistance if PrEP is started during undiagnosed acute HIV**; **hepatitis B flare** if TDF/FTC is stopped in HBsAg-positive users. [WHO 2022]",
        "**Untreated paediatric HIV** kills about **one-third of infants by 1 year and half by 2 years**; early ART (CHER trial) cut early mortality by about 75%. [WHO 2021]",
        "**Follow-up of HIV-exposed infants**: monthly visits to 6 months, then 3-monthly till 18 months for growth, prophylaxis, feeding and EID testing. [NACO 2021]",
        "**Women after PPTCT**: continue lifelong ART, viral load monitoring, cervical cancer screening and family planning. [NACO 2021]",
        "**Refer** to the ART centre: all positive tests, high-risk infants, indeterminate EID results, suspected HIV-2 or dual infection and adolescents with treatment failure. [NACO 2021]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**WHO PEP guideline 2024**: TDF + 3TC/FTC + **DTG preferred** for 28 days; dispense the full course at the first visit; simplified testing (baseline and 3 months); PEP via community and pharmacy delivery. [WHO 2024]",
        "**WHO 2025** recommended **twice-yearly injectable lenacapavir** as an additional PrEP option; **CAB-LA every 2 months** recommended since 2022. [WHO 2025]",
        "**WHO 2023 policy brief on viral load and transmission**: undetectable = zero sexual transmission; under 1000 copies/mL = almost zero - formal endorsement of **U=U**. [WHO 2023]",
        "**NACO National Guidelines for HIV Care and Treatment 2021**: TLD for adults, adolescents and pregnant women, paediatric DTG, viral load monitoring at 6 and 12 months then yearly. [NACO 2021]",
        "**WHO 2021**: **dolutegravir for all**, including women of childbearing potential and pregnant women, after the neural-tube-defect signal resolved. [WHO 2021]",
        "**Triple elimination (HIV, syphilis, hepatitis B)** of vertical transmission is now the WHO framework; India's programme uses **dual HIV/syphilis RDTs** in ANC. [WHO 2024]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "PEP in one line: **TLD once daily x 28 days, start within 2 hours, not after 72 hours; test at baseline and 3 months**. [NACO 2021]",
        "Classic question: **'Why DNA PCR and not ELISA in an infant?'** - maternal IgG persists up to 18 months. [NACO 2021]",
        "Classic mistake: **mixed feeding** - examiners want 'exclusive breastfeeding for 6 months with the mother on ART'. [WHO 2016]",
        "Classic mistake: giving **efavirenz or nevirapine for HIV-2** - intrinsically resistant. [Harrison 22e]",
        "Classic mistake: **starting PrEP without excluding acute HIV** - leads to resistance. [WHO 2022]",
        "**U=U**: viral load undetectable for 6 months or more = no sexual transmission; it does not apply fully to breastfeeding, where risk is low but not zero. [WHO 2023]",
        "High-risk infant = **mother on ART under 4 weeks, VL over 1000, or new infection** - gets dual prophylaxis for 12 weeks if breastfed. [WHO 2021]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs for PEP, PrEP and PPTCT",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["TLD (tenofovir 300 + lamivudine 300 + dolutegravir 50)", "1 tablet PO once daily", "PEP 28 days; lifelong for treatment and PPTCT", "Nausea, headache, insomnia, weight gain; TDF renal toxicity; DTG 50 mg BD with rifampicin"],
        ["TDF 300 mg + FTC 200 mg (oral PrEP)", "1 tablet daily; or 2-1-1 event-driven (cisgender men)", "While at risk; HIV test every 3 months", "Creatinine rise, bone loss; avoid if eGFR under 60; HBV flare on stopping"],
        ["Cabotegravir long-acting", "600 mg IM gluteal; 2 doses 4 weeks apart, then every 8 weeks", "While at risk", "Injection-site reactions; long pharmacokinetic tail - resistance risk if HIV acquired"],
        ["Lenacapavir", "Subcutaneous injection twice yearly (with oral loading)", "While at risk", "Injection-site nodules; not yet available in India"],
        ["Nevirapine (infant, low-risk)", "10 mg PO OD (2-2.5 kg) or 15 mg OD (over 2.5 kg)", "6 weeks from birth", "Rash, hepatotoxicity (rare in infants)"],
        ["Zidovudine + nevirapine (infant, high-risk)", "AZT 4 mg/kg PO BD + nevirapine as above", "6 weeks dual, then 6 more weeks if breastfed (12 weeks)", "Anaemia, neutropenia (AZT)"],
        ["Paediatric dolutegravir", "10 mg dispersible tablets by weight band (4 weeks and 3 kg or more); 50 mg from 20 kg", "Lifelong with ABC + 3TC", "Insomnia, headache; check interactions with rifampicin"],
        ["Benzathine penicillin (syphilis in pregnancy)", "2.4 million units IM", "Single dose early; weekly x 3 late/unknown", "Anaphylaxis (rare), Jarisch-Herxheimer reaction"],
        ["HBIG + hepatitis B vaccine (PEP)", "HBIG 0.06 mL/kg IM + vaccine 0, 1, 6 months", "Within 24 hours ideally, up to 7 days", "Local pain; give at separate sites"],
      ],
    },
    {
      heading: "NACO grading of occupational exposure",
      columns: ["Category", "Definition", "Source HIV positive / unknown", "Source HIV negative"],
      rows: [
        ["Mild", "Mucous membrane or non-intact skin, small volume; superficial scratch with solid or low-calibre needle", "Start PEP (TLD 28 days)", "No PEP"],
        ["Moderate", "Mucous membrane or non-intact skin, large volume or long contact; moderate injury with solid needle", "Start PEP", "No PEP"],
        ["Severe", "Deep injury, hollow-bore needle, visible blood on device, needle from artery or vein", "Start PEP urgently", "No PEP (unless source in window period with high risk)"],
        ["Intact skin", "Blood on intact skin only", "No PEP", "No PEP"],
      ],
    },
    {
      heading: "Infant prophylaxis and testing by risk",
      columns: ["Situation", "Infant ARV prophylaxis", "Testing", "Feeding"],
      rows: [
        ["Low-risk: mother on ART over 4 weeks with suppressed VL", "Nevirapine once daily x 6 weeks", "DBS DNA PCR at 6 weeks, 6 and 12 months; antibody at 18 months", "Exclusive breastfeeding 6 months, then continued with complementary feeds"],
        ["High-risk: ART under 4 weeks, VL over 1000, new maternal infection", "AZT + nevirapine x 6 weeks, then nevirapine +/- AZT 6 more weeks if breastfed", "Consider birth PCR; PCR at 6 weeks and as above", "Breastfeed with maternal ART and adherence support"],
        ["Mother diagnosed during breastfeeding", "Start maternal ART now; infant dual prophylaxis for 12 weeks", "Infant PCR immediately and repeat", "Continue breastfeeding"],
        ["Positive infant PCR", "Stop prophylaxis; start ABC + 3TC + DTG (or neonatal regimen)", "Confirm on second sample", "Continue breastfeeding"],
      ],
    },
    {
      heading: "HIV-1 versus HIV-2",
      columns: ["Feature", "HIV-1", "HIV-2"],
      rows: [
        ["Distribution", "Worldwide; most Indian infections", "West Africa; western India, often dual"],
        ["Progression", "Faster; median 8-10 years to AIDS untreated", "Slower; many long-term non-progressors"],
        ["Viral load", "High", "Low; HIV-1 assays do not detect it"],
        ["Transmission", "Higher sexual and vertical (15-45% untreated MTCT)", "Lower (MTCT about 0-4%)"],
        ["NNRTI (efavirenz, nevirapine)", "Active", "Intrinsically resistant"],
        ["Integrase inhibitors and NRTIs", "Active", "Active - TLD suitable"],
        ["Diagnosis", "Rapid tests, ELISA, HIV-1 VL", "Differentiating rapid test or line immunoassay; HIV-2 VL where available"],
      ],
    },
    {
      heading: "Monitoring cut-offs and schedules",
      columns: ["Situation", "Test", "Schedule / cut-off"],
      rows: [
        ["PEP", "HIV test", "Baseline and 3 months (WHO 2024)"],
        ["PrEP", "HIV test, creatinine", "HIV every 3 months; creatinine every 6-12 months; eGFR 60 or more for TDF"],
        ["Adult on ART (NACO)", "Viral load", "6 months, 12 months, then yearly; failure = 1000 or more twice, 3 months apart"],
        ["Pregnant woman on ART", "Viral load", "Late third trimester (about 32-36 weeks) to grade infant risk"],
        ["HIV-exposed infant", "DBS DNA PCR", "6 weeks, 6 months, 12 months or 6 weeks after weaning; antibody at 18 months"],
        ["U=U", "Viral load", "Undetectable sustained 6 months or more = no sexual transmission"],
      ],
    },
  ],
  redFlags: [
    "High-risk exposure (hollow-bore needle with visible blood, sexual assault) - start PEP immediately, do not wait for source results",
    "Presentation for PEP between 48 and 72 hours - start at once; beyond 72 hours PEP is not recommended",
    "Fever, rash and sore throat 2-4 weeks after exposure or while on PrEP - suspect acute HIV",
    "Pregnant woman newly diagnosed in late pregnancy or labour - start ART now and treat infant as high-risk",
    "HIV-exposed infant with failure to thrive, persistent thrush or severe pneumonia (possible PCP)",
    "Positive infant DNA PCR - start ART the same week after a confirmatory sample",
    "Low CD4 or OI with undetectable HIV-1 viral load - think HIV-2",
  ],
  pearls: [
    "**PEP**: TLD x 28 days; within 2 hours ideal, 72 hours maximum.",
    "**Wash, do not squeeze** a needlestick wound; no bleach.",
    "**Infant ELISA is useless before 18 months** - maternal IgG; use DNA PCR from 6 weeks.",
    "**Exclusive breastfeeding** with maternal ART beats mixed feeding.",
    "**High-risk infant** = mother on ART under 4 weeks, VL over 1000, or new infection - dual AZT + NVP.",
    "**HIV-2 laughs at NNRTIs** - use dolutegravir-based ART.",
    "**U=U**: undetectable equals untransmittable (sexually).",
    "**2-1-1 PrEP** only for cisgender men.",
    "**Dual HIV/syphilis test** at the first antenatal visit; benzathine penicillin 30 days before delivery.",
  ],
  mcqs: [
    {
      id: "infectious-fever-hiv-special-situations-q1",
      stem:
        "A nursing officer sustains a deep needlestick injury with a hollow-bore needle used to draw blood from a patient with HIV whose viral load is unknown. She presents 90 minutes later. What is the correct PEP regimen?",
      options: [
        "Zidovudine plus lamivudine for 14 days",
        "Tenofovir + lamivudine + dolutegravir once daily for 28 days",
        "Single-dose nevirapine",
        "Wait for her baseline HIV result before deciding",
      ],
      answer: 1,
      explanation:
        "NACO 2021 and WHO 2024 recommend TLD (tenofovir, lamivudine, dolutegravir) once daily for 28 days, started as early as possible and within 72 hours, for a severe exposure from a positive source. Two-drug zidovudine regimens and 14-day courses are outdated, single-dose nevirapine has no role in PEP, and waiting for her own result delays protection - the baseline test is drawn but PEP starts at once.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-hiv-special-situations-q2",
      stem:
        "An infant born to a mother living with HIV is 8 weeks old and breastfed. Which is the appropriate test to diagnose HIV infection in this infant?",
      options: [
        "HIV-1/2 antibody ELISA",
        "Rapid antibody test on maternal blood",
        "CD4 count of the infant",
        "HIV DNA PCR on a dried blood spot",
      ],
      answer: 3,
      explanation:
        "Maternal IgG antibodies cross the placenta and persist up to 18 months, so antibody tests cannot diagnose infant infection; NACO EID uses DNA PCR on a dried blood spot from 6 weeks. A maternal test only confirms exposure, and the infant CD4 count is age-dependent and does not diagnose infection.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-hiv-special-situations-q3",
      stem:
        "A woman tested HIV-positive for the first time in labour at 38 weeks and was started on TLD. She plans to breastfeed. Which infant prophylaxis is recommended?",
      options: [
        "Nevirapine once daily for 6 weeks only",
        "No prophylaxis because the mother has started ART",
        "Dual zidovudine plus nevirapine for 6 weeks, continued for a total of 12 weeks while breastfeeding",
        "Cotrimoxazole alone from birth",
      ],
      answer: 2,
      explanation:
        "The infant is high-risk because the mother received under 4 weeks of ART before delivery, so WHO/NACO advise dual zidovudine plus nevirapine for 6 weeks, extended to 12 weeks in breastfed infants. Nevirapine alone for 6 weeks is for low-risk infants, maternal ART started in labour has not suppressed viral load, and cotrimoxazole starts at 6 weeks to prevent PCP but is not antiretroviral prophylaxis.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-hiv-special-situations-q4",
      stem:
        "A 40-year-old man from Goa with a positive HIV screening test has CD4 180 cells/mm3 but an HIV-1 viral load below the detection limit and is not on ART. The line immunoassay shows HIV-2 reactivity only. Which ART regimen should be avoided?",
      options: [
        "Tenofovir + lamivudine + efavirenz",
        "Tenofovir + lamivudine + dolutegravir",
        "Abacavir + lamivudine + dolutegravir",
        "Tenofovir + lamivudine + boosted lopinavir",
      ],
      answer: 0,
      explanation:
        "HIV-2 is intrinsically resistant to NNRTIs such as efavirenz and nevirapine because of its reverse transcriptase structure, so an efavirenz regimen would fail. Dolutegravir-based regimens (with tenofovir or abacavir) and boosted lopinavir regimens are active against HIV-2. The undetectable HIV-1 viral load with a low CD4 is the classic clue to HIV-2.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-hiv-special-situations-q5",
      stem:
        "An HIV-negative man whose male partner has HIV with a viral load of 15,000 copies/mL wants PrEP. He reports fever, sore throat and a rash for 5 days, and had condomless sex 3 weeks ago. What is the best next step?",
      options: [
        "Start daily TDF/FTC today and test for HIV at 3 months",
        "Start event-driven 2-1-1 PrEP immediately",
        "Defer PrEP, test for acute HIV with a 4th-generation antigen/antibody test or viral load, and offer PEP only if exposure is under 72 hours",
        "Reassure him that PrEP is not needed because his partner is on ART",
      ],
      answer: 2,
      explanation:
        "Fever, sore throat and rash 3 weeks after a high-risk exposure suggest acute HIV; PrEP must be deferred until acute infection is excluded with an antigen/antibody test or viral load, because two-drug PrEP during acute HIV selects resistance. Starting daily or event-driven PrEP today ignores that risk, and his partner is not suppressed (15,000 copies/mL), so U=U does not yet apply.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "infectious-fever-hiv-special-situations-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Discuss the prevention of parent-to-child transmission of HIV in India. Describe the antenatal, intrapartum and postnatal interventions, infant prophylaxis, infant feeding and early infant diagnosis.",
      openingLines: [
        "Parent-to-child transmission of HIV occurs in pregnancy, labour or breastfeeding, and without intervention affects 15-45% of exposed infants; with suppressive maternal ART it falls below 1%.",
        "Under NACP Phase V, NACO offers universal antenatal HIV and syphilis testing, lifelong dolutegravir-based ART for every pregnant woman with HIV, risk-based infant prophylaxis, early infant diagnosis by DNA PCR and supported breastfeeding.",
      ],
      answer: [
        {
          heading: "Timing and risk factors",
          points: [
            "In utero 5-10%, intrapartum 10-20%, breastfeeding 5-20%.",
            "High maternal viral load, new infection, late ART, prolonged rupture of membranes, mixed feeding, mastitis.",
          ],
        },
        {
          heading: "Antenatal",
          points: [
            "Universal dual HIV/syphilis RDT at first ANC visit; HBsAg; retest high-risk women in third trimester.",
            "Lifelong TLD irrespective of CD4, same day if possible; folic acid; DTG safe.",
            "Viral load late in third trimester; partner testing; cotrimoxazole if CD4 350 or less; TB screen and TPT.",
            "Benzathine penicillin for syphilis at least 30 days before delivery.",
          ],
        },
        {
          heading: "Intrapartum",
          points: [
            "Vaginal delivery if suppressed; caesarean for obstetric indications (consider if VL over 1000).",
            "Avoid prolonged rupture, ARM, episiotomy, instrumental delivery; universal precautions.",
          ],
        },
        {
          heading: "Infant prophylaxis",
          points: [
            "Low-risk: nevirapine daily for 6 weeks (10 or 15 mg by weight).",
            "High-risk (ART under 4 weeks, VL over 1000, new infection): AZT + NVP 6 weeks, extended to 12 weeks if breastfed.",
            "Cotrimoxazole from 6 weeks until HIV excluded.",
          ],
        },
        {
          heading: "Feeding",
          points: [
            "Exclusive breastfeeding for 6 months with maternal ART; then complementary feeds with continued breastfeeding to at least 12 months.",
            "Avoid mixed feeding; replacement feeding only if AFASS criteria met.",
          ],
        },
        {
          heading: "Early infant diagnosis",
          points: [
            "DBS DNA PCR at 6 weeks, 6 months, 12 months or 6 weeks after weaning; antibody at 18 months.",
            "Positive PCR confirmed on second sample; start ABC + 3TC + DTG.",
          ],
        },
        {
          heading: "EMTCT targets",
          points: [
            "ANC coverage, HIV and syphilis testing and maternal ART each 95% or more; MTCT under 5% (breastfeeding) or under 2%.",
          ],
        },
      ],
      mustDraw: ["Flow chart: ANC test - positive - TLD - VL in third trimester - delivery - risk-based infant prophylaxis - EID schedule"],
      markSplit: [
        { part: "Burden and timing of transmission", marks: 1 },
        { part: "Antenatal and intrapartum interventions", marks: 3 },
        { part: "Infant prophylaxis and feeding", marks: 3 },
        { part: "Early infant diagnosis", marks: 2 },
        { part: "EMTCT targets", marks: 1 },
      ],
      keywords: ["PPTCT", "EMTCT", "dolutegravir", "nevirapine prophylaxis", "breastfeeding", "DNA PCR", "early infant diagnosis", "syphilis"],
    },
    {
      id: "infectious-fever-hiv-special-situations-t2",
      paper: "I",
      kind: "chart-flow",
      marks: 5,
      minutes: 9,
      frequency: "core",
      question: "Draw a flow chart for the management of occupational exposure to HIV (post-exposure prophylaxis).",
      openingLines: [
        "Post-exposure prophylaxis is a 28-day course of three antiretrovirals started within 72 hours, ideally within 2 hours, of an exposure to a potentially HIV-infected body fluid.",
        "NACO 2021 recommends TLD once daily; the decision depends on the type of exposure and the source's HIV status.",
      ],
      answer: [
        {
          heading: "Immediate steps",
          points: [
            "Wash with soap and water; let it bleed; do not squeeze, scrub or use bleach; flush mucosa.",
            "Report to the PEP officer; document the exposure.",
          ],
        },
        {
          heading: "Assess",
          points: [
            "Exposure grade: mild, moderate, severe; fluid type; time since exposure.",
            "Source: HIV, HBV, HCV status (rapid test with consent).",
            "Exposed person: baseline HIV, HBsAg, anti-HBs, anti-HCV, creatinine, pregnancy test.",
          ],
        },
        {
          heading: "Decide and treat",
          points: [
            "Source positive or unknown with mild-severe exposure: TLD once daily for 28 days.",
            "Source negative: no PEP (unless window-period risk); intact skin: no PEP.",
            "Hepatitis B: HBIG plus vaccine if non-immune and source positive or unknown.",
          ],
        },
        {
          heading: "Follow-up",
          points: [
            "Adherence and side-effect review; HIV test at 3 months; safe sex and no blood donation until then.",
          ],
        },
      ],
      mustDraw: ["PEP flow chart: first aid - grade exposure - source status - TLD 28 days - follow-up testing"],
      markSplit: [
        { part: "First aid and reporting", marks: 1 },
        { part: "Assessment of exposure and source", marks: 1.5 },
        { part: "PEP regimen and HBV", marks: 1.5 },
        { part: "Follow-up", marks: 1 },
      ],
      keywords: ["PEP", "needlestick", "TLD", "exposure grading", "HBIG", "72 hours"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - chapter on HIV disease and HIV-2",
    "NACO National Guidelines for HIV Care and Treatment, Ministry of Health and Family Welfare, Government of India, 2021",
    "WHO Guidelines for HIV post-exposure prophylaxis, 2024",
    "WHO Guidelines on long-acting injectable cabotegravir for HIV prevention, 2022; WHO recommendation on lenacapavir for HIV prevention, 2025",
    "WHO Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring, 2021",
    "WHO The role of HIV viral suppression in improving individual health and reducing transmission: policy brief, 2023",
    "MoHFW Guidelines and Protocols: Medico-legal care for survivors/victims of sexual violence, 2014",
    "NACO India HIV Estimates 2023: Technical Report",
  ],
});

export default topics;
