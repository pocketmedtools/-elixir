import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "respiratory-drtb",
  title: "Drug-resistant TB: diagnosis and the BPaLM and shorter regimens under NTEP",
  frequency: "core",
  oneLiner:
    "**Drug-resistant TB** is disease caused by *M. tuberculosis* resistant to one or more anti-TB drugs; **RR/MDR-TB** (resistance to rifampicin, with or without isoniazid) is now diagnosed by **universal NAAT-based drug-susceptibility testing** and treated under NTEP with the **6-month all-oral BPaLM regimen** (bedaquiline, pretomanid, linezolid, moxifloxacin), a **9-11-month shorter oral bedaquiline regimen** or an **18-20-month longer oral regimen**.",
  keywords: [
    "DR-TB",
    "MDR-TB",
    "RR-TB",
    "pre-XDR",
    "XDR-TB",
    "Hr-TB",
    "BPaLM",
    "BPaL",
    "bedaquiline",
    "pretomanid",
    "linezolid",
    "delamanid",
    "clofazimine",
    "CBNAAT",
    "Truenat",
    "line probe assay",
    "PMDT",
    "Ni-kshay",
    "QTc",
    "UDST",
  ],
  sections: [
    {
      heading: "Definitions and epidemiology",
      points: [
        "**Rifampicin-resistant TB (RR-TB)**: resistance to rifampicin detected by phenotypic or genotypic testing, with or without resistance to other drugs; it is managed exactly like MDR-TB. [WHO 2021]",
        "**MDR-TB**: resistance to at least **rifampicin and isoniazid**, the two most powerful first-line drugs. [WHO 2021]",
        "**Pre-XDR-TB** (WHO 2021 definition): MDR/RR-TB that is also resistant to **any fluoroquinolone** (levofloxacin or moxifloxacin). [WHO 2021]",
        "**XDR-TB** (WHO 2021 definition): MDR/RR-TB resistant to a fluoroquinolone **plus at least one other Group A drug (bedaquiline or linezolid)**; the old definition based on injectables was dropped when injectables left the regimens. [WHO 2021]",
        "**Isoniazid-resistant, rifampicin-susceptible TB (Hr-TB)** is a separate entity treated with **6 months of rifampicin, ethambutol, pyrazinamide and levofloxacin** (6(H)REZ-Lfx). [NTEP PMDT 2021]",
        "Globally about **400,000 people** develop MDR/RR-TB each year and fewer than half are diagnosed and treated; **India carries about a quarter of the world's MDR/RR-TB**, the largest share of any country. [WHO Global TB Report 2024]",
        "India's **First National Anti-TB Drug Resistance Survey (2014-16)** found MDR-TB in **2.84% of new** and **11.6% of previously treated** patients, and **fluoroquinolone resistance in about 22% of MDR-TB** isolates - the reason FQ resistance must be tested before any regimen is chosen. [NDRS 2014-16]",
        "**Primary (transmitted) resistance** now causes most MDR-TB in India, so a new patient with no past treatment can still have MDR-TB - hence **universal drug-susceptibility testing (UDST)** for every diagnosed patient. [NTEP PMDT 2021]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "Resistance arises from **spontaneous chromosomal mutations** (rifampicin about 1 in 10^8 bacilli, isoniazid about 1 in 10^6) selected by **monotherapy or inadequate regimens**; there are no plasmids in *M. tuberculosis*. [Harrison 22e]",
        "**Acquired resistance** follows irregular treatment, wrong doses, poor-quality drugs, adding a single drug to a failing regimen, and private-sector prescriptions outside guidelines. [Harrison 22e]",
        "**Previous TB treatment** is the strongest individual risk factor, especially **treatment failure, loss to follow-up and recurrence**. [NTEP PMDT 2021]",
        "**Contacts of a known MDR-TB patient**, healthcare workers, prisoners and people from high-burden settings are at higher risk of transmitted resistance. [WHO 2025]",
        "**HIV infection, diabetes and malabsorption** lower drug levels or increase progression; poor rifampicin absorption in advanced HIV has been linked to acquired rifamycin resistance. [Harrison 22e]",
        "**Persistent sputum positivity at the end of the intensive phase** or clinical deterioration on first-line treatment should trigger repeat NAAT and DST. [NTEP 2023]",
      ],
    },
    {
      heading: "Mechanism of resistance and drug action",
      points: [
        "**Rifampicin resistance**: over 95% is due to mutations in an **81-bp rifampicin resistance-determining region (RRDR) of rpoB**, which is why a single NAAT cartridge can detect it in 2 hours. [Harrison 22e]",
        "**Isoniazid resistance**: **katG mutations** (catalase-peroxidase that activates the prodrug) cause high-level resistance; **inhA promoter mutations** cause low-level resistance and **cross-resistance to ethionamide**. [WHO 2021]",
        "**Fluoroquinolone resistance** comes from **gyrA/gyrB** mutations in DNA gyrase; **second-line injectable resistance** from **rrs** (amikacin) and **eis** (kanamycin) mutations. [WHO 2021]",
        "**Bedaquiline** (a diarylquinoline) inhibits **mycobacterial ATP synthase**; resistance arises through **Rv0678 (mmpR5) efflux-pump mutations**, which also confer **cross-resistance to clofazimine**. [WHO 2025]",
        "**Pretomanid and delamanid** are nitroimidazoles: prodrugs activated by the **deazaflavin-dependent nitroreductase (ddn)** that block mycolic acid synthesis and release nitric oxide, killing non-replicating bacilli. [Harrison 22e]",
        "**Linezolid** binds the **23S rRNA of the 50S ribosome**; it also inhibits human mitochondrial protein synthesis, which explains its time- and dose-dependent **myelosuppression, neuropathy and lactic acidosis**. [Goodman and Gilman 14e]",
        "**Bedaquiline, clofazimine, moxifloxacin and delamanid prolong QT** by blocking hERG potassium channels; their effect is additive, so combined regimens need ECG monitoring. [WHO 2025]",
      ],
    },
    {
      heading: "Classification of resistance and WHO drug groups",
      points: [
        "Resistance types by pattern: **mono-resistance** (one first-line drug), **poly-resistance** (more than one first-line drug other than both H and R), **MDR, pre-XDR and XDR**, and **RR-TB**. [WHO 2021]",
        "**Group A** (include all three if possible): **levofloxacin or moxifloxacin, bedaquiline, linezolid**. [WHO 2025]",
        "**Group B** (add one or both): **clofazimine, cycloserine or terizidone**. [WHO 2025]",
        "**Group C** (to complete a regimen when A and B cannot be used): **ethambutol, delamanid, pyrazinamide, imipenem-cilastatin or meropenem (with clavulanate), amikacin (streptomycin), ethionamide or prothionamide, and PAS**. [WHO 2025]",
        "**Kanamycin and capreomycin are no longer recommended** because they were linked to worse outcomes; amikacin is only a last resort with audiometry. [WHO 2025]",
        "By history NTEP also records **new versus previously treated** and by **site** (pulmonary versus extrapulmonary), which decides regimen eligibility. [NTEP PMDT 2021]",
      ],
    },
    {
      heading: "Clinical features",
      points: [
        "DR-TB is **clinically indistinguishable from drug-susceptible TB**: cough over 2 weeks, fever, weight loss, night sweats, haemoptysis - resistance is a laboratory diagnosis. [Harrison 22e]",
        "Suspect DR-TB when there is **no clinical or microbiological response after 2 months** of first-line treatment, or when a patient worsens despite good adherence. [NTEP PMDT 2021]",
        "**Recurrent TB**, a patient returning after **loss to follow-up**, and a contact of a known DR-TB patient are presumptive DR-TB until proved otherwise. [NTEP PMDT 2021]",
        "Patients have often had **months of private-sector treatment**, so the history must record every drug, dose and duration, including fluoroquinolones given for 'chest infection'. [MoHFW 2024]",
        "Look for **comorbidities that change the regimen**: HIV, diabetes, alcohol use, pregnancy, psychiatric illness (cycloserine), heart disease (QT drugs), neuropathy and visual problems (linezolid). [WHO 2025]",
        "**Extrapulmonary DR-TB** (lymph node, CNS, spine) presents as non-healing disease on first-line ATT; obtain tissue or fluid for NAAT and culture. [INDEX-TB 2016]",
      ],
    },
    {
      heading: "Examination",
      points: [
        "Record **weight and BMI at every visit**: weight and BMI decide doses, and BMI under 16 or weight loss despite treatment signals poor response or malnutrition. [NTEP 2023]",
        "Look for **pallor** (baseline before linezolid), **jaundice** (hepatotoxic drugs) and **signs of respiratory failure** (cyanosis, RR over 30, SpO2 under 94%) that need admission. [NTEP 2023]",
        "Chest signs - **bronchial breathing, crackles, amphoric breath sounds over cavities**, and tracheal shift from fibrosis - do not differ from drug-sensitive disease. [Harrison 22e]",
        "Baseline **visual acuity (Snellen) and colour vision (Ishihara)** before linezolid and ethambutol; document any baseline deficit. [NTEP PMDT 2021]",
        "Baseline **peripheral neuropathy screen** (vibration, ankle reflexes, the Brief Peripheral Neuropathy Screen) before linezolid. [WHO 2025]",
        "Screen for **depression and psychosis** before cycloserine, and for **hearing loss** (audiometry) if amikacin is unavoidable. [NTEP PMDT 2021]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Non-response from poor adherence** to first-line ATT: check pill counts, Ni-kshay adherence records and family supervision before labelling resistance. [NTEP 2023]",
        "**Non-tuberculous mycobacteria**: smear-positive but NAAT-negative for MTB, or culture grows a rapid or slow NTM - see the NTM topic. [ATS/ERS/ESCMID/IDSA 2020]",
        "**Post-TB sequelae** (bronchiectasis, fibrosis, aspergilloma) cause persistent symptoms with **negative NAAT and culture** - not treatment failure. [Harrison 22e]",
        "**Paradoxical reaction or IRIS** (especially after starting ART) causes worsening nodes or effusions while cultures are converting. [WHO 2025]",
        "**Alternative diagnosis**: lung cancer, chronic pulmonary aspergillosis, melioidosis, nocardia or ILD mistaken for TB. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations and the NTEP diagnostic algorithm",
      points: [
        "**Universal DST**: every diagnosed TB patient gets a **rapid molecular test for rifampicin resistance** - **CBNAAT (Xpert MTB/RIF Ultra) or Truenat MTB-RIF Dx** - at diagnosis. [NTEP 2023]",
        "If **rifampicin resistance is detected**, send a further sample for **first-line LPA** (katG, inhA - isoniazid), **second-line LPA** (gyrA, gyrB - fluoroquinolones; rrs, eis - injectables) and **liquid culture (MGIT) DST**. [NTEP PMDT 2021]",
        "If rifampicin is **sensitive**, NTEP also does **FL-LPA for isoniazid resistance** to find Hr-TB. [NTEP PMDT 2021]",
        "**Xpert MTB/XDR** (10-colour cartridge) detects resistance to **isoniazid, fluoroquinolones, ethionamide and amikacin** in under 90 minutes, as a reflex test after RR is found. [WHO 2024]",
        "**Liquid culture DST for bedaquiline, linezolid, clofazimine, delamanid and pretomanid** is done at reference laboratories; **targeted next-generation sequencing** was endorsed by WHO in 2024 for comprehensive resistance profiles. [WHO 2024]",
        "**Low-level RR with very low bacillary load** on Xpert Ultra ('trace' results) should be confirmed before starting a DR-TB regimen. [WHO 2024]",
        "**Pre-treatment evaluation**: CBC, LFT, renal function, electrolytes (K, Mg, Ca), **HbA1c**, **HIV**, **TSH**, urine pregnancy test, **ECG with QTcF**, chest X-ray, visual and hearing tests. [NTEP PMDT 2021]",
        "**Follow-up**: monthly sputum smear and culture until conversion and through treatment; **culture conversion** is two consecutive negative cultures at least 30 days apart. [WHO 2021]",
      ],
    },
    {
      heading: "Regimens: BPaLM, BPaL and the shorter oral regimen",
      points: [
        "**BPaLM (6 months, 26 weeks)**: **bedaquiline 400 mg OD for 2 weeks then 200 mg three times a week for 24 weeks, pretomanid 200 mg OD, linezolid 600 mg OD and moxifloxacin 400 mg OD** - preferred for MDR/RR-TB with no FQ resistance in patients **aged 14 years or over**. [WHO 2025]",
        "**BPaL** (moxifloxacin dropped) is used when **fluoroquinolone resistance (pre-XDR)** is confirmed; in TB-PRACTECAL, BPaLM gave **89% favourable outcome versus 52% with the old standard care**. [Lancet/NEJM TB-PRACTECAL 2022]",
        "India approved and began rolling out **BPaLM in 2024** under NTEP as the preferred regimen for eligible MDR/RR-TB and pre-XDR-TB. [MoHFW 2024]",
        "**BPaLM is not used** in pregnancy or breastfeeding, children under 14, **CNS, osteoarticular or disseminated TB**, or after more than 1 month's prior exposure to bedaquiline, linezolid, pretomanid or delamanid. [WHO 2025]",
        "Extend BPaL(M) to **9 months (39 weeks)** if sputum culture is still positive between months 4 and 6; linezolid can be reduced to **300 mg** for toxicity after the first months. [WHO 2025]",
        "**Shorter oral bedaquiline-containing regimen (9-11 months)**: **4-6 months Bdq(6), Lfx, Cfz, Z, E, high-dose H, Eto, then 5 months Lfx, Cfz, Z, E** - for FQ-sensitive MDR/RR-TB not eligible for BPaLM, including children. [NTEP PMDT 2021]",
        "The shorter regimen is excluded if there is **resistance to FQ**, **both katG and inhA mutations**, more than 1 month of second-line drugs, extensive disease or severe EPTB. [NTEP PMDT 2021]",
        "WHO 2025 also lists **9-month endTB regimens** (for example bedaquiline, delamanid, linezolid, levofloxacin, clofazimine - BDLLfxC) as options, including in **pregnancy and children** when BPaLM cannot be used. [WHO 2025]",
      ],
    },
    {
      heading: "Longer oral regimen and Hr-TB",
      points: [
        "**Longer oral M/XDR-TB regimen (18-20 months)**: all three Group A drugs plus at least one Group B drug, so that **at least 4 effective drugs** are given at the start and 3 after bedaquiline stops at 6 months. [WHO 2025]",
        "Typical NTEP longer regimen: **18-20 months Lfx/Mfx, Bdq (6 months or longer), Lzd, Cfz, Cs**, modified by DST and toxicity. [NTEP PMDT 2021]",
        "Use the longer regimen for **XDR-TB**, failure of a shorter regimen, extensive EPTB, or resistance or intolerance that rules out shorter regimens. [WHO 2025]",
        "**Cycloserine 10-15 mg/kg/day (usually 500-750 mg)** with **pyridoxine 50 mg for every 250 mg** to prevent seizures and neuropathy. [NTEP PMDT 2021]",
        "**Clofazimine 100 mg OD** causes reversible **pink-brown skin and conjunctival discolouration**, dry skin and QT prolongation. [WHO 2025]",
        "**Hr-TB**: **6 months of rifampicin, ethambutol, pyrazinamide and levofloxacin**, dosed by weight band; add no isoniazid. [NTEP PMDT 2021]",
      ],
    },
    {
      heading: "Programmatic care: DR-TB centres, admission and adverse-effect monitoring",
      points: [
        "Treatment begins at a **Nodal DR-TB Centre (N-DR-TBC) or District DR-TB Centre (D-DR-TBC)** after pre-treatment evaluation; **admission is not mandatory** and is reserved for the sick or those with comorbidity. [NTEP PMDT 2021]",
        "**Admit** for respiratory failure, massive haemoptysis, severe malnutrition, uncontrolled diabetes, serious adverse events, psychiatric illness on cycloserine, or QTcF over 500 ms. [NTEP PMDT 2021]",
        "**ECG with QTcF** at baseline, at **2 weeks**, then monthly while on bedaquiline; **stop QT-prolonging drugs if QTcF exceeds 500 ms** and correct potassium, magnesium and calcium. [WHO 2025]",
        "**CBC** at baseline and regularly (weekly to monthly in the first months) on linezolid; hold linezolid for **haemoglobin under 8 g/dL, platelets under 75,000 or neutrophils under 750**. [WHO 2025]",
        "**Linezolid neuropathy** is graded at every visit; **optic neuritis** (falling acuity, colour vision loss) means stop linezolid permanently. [WHO 2025]",
        "**LFT** monthly with pretomanid and bedaquiline; **TSH** every 3 months with ethionamide or PAS (hypothyroidism); creatinine and electrolytes monthly. [NTEP PMDT 2021]",
        "Every serious adverse event is reported through **aDSM (active drug safety monitoring) in Ni-kshay**. [NTEP PMDT 2021]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: do not use BPaLM; avoid **aminoglycosides (fetal ototoxicity) and ethionamide (teratogenic, worsens vomiting)**; a 9-month endTB regimen or individualised bedaquiline-based regimen is used with specialist input. [WHO 2025]",
        "**Children**: the shorter oral bedaquiline regimen and **bedaquiline and delamanid can be used at all ages**; child-friendly dispersible formulations are now available. [WHO 2025]",
        "**HIV**: start ART within 2 weeks; avoid **efavirenz with bedaquiline** (lowers levels) - **dolutegravir-based ART** is preferred. [WHO 2025]",
        "**Diabetes**: control glucose tightly, because diabetes raises the risk of linezolid neuropathy and of treatment failure. [NTEP 2023]",
        "**Renal failure**: reduce frequency of **ethambutol, pyrazinamide, levofloxacin, cycloserine** to thrice weekly; bedaquiline, linezolid and moxifloxacin need no change. [WHO 2025]",
        "**Liver disease**: prefer regimens with fewer hepatotoxic drugs; bedaquiline and pretomanid need close LFT monitoring. [WHO 2025]",
      ],
    },
    {
      heading: "Complications, outcomes and prognosis",
      points: [
        "Global **treatment success for MDR/RR-TB is about 68%** (2020 cohort), dragged down by deaths and loss to follow-up on long regimens. [WHO Global TB Report 2024]",
        "With BPaL in **Nix-TB, 90% of XDR or treatment-intolerant MDR-TB patients** had a favourable outcome; ZeNix showed **linezolid 600 mg for 26 weeks** kept efficacy with less toxicity. [NEJM 2020, 2022]",
        "**Outcome definitions** (WHO 2021): cured, treatment completed, treatment failed, died, lost to follow-up, not evaluated; **sustained treatment success** is no recurrence at 6 months after treatment. [WHO 2021]",
        "Sequelae include **post-TB lung disease**, chronic pulmonary aspergillosis, haemoptysis and cor pulmonale - see the NTM and post-TB lung disease topic. [Harrison 22e]",
        "Drug harms: **permanent linezolid neuropathy**, hearing loss with amikacin, hypothyroidism and psychiatric illness - the reason injectables were removed. [WHO 2025]",
      ],
    },
    {
      heading: "Follow-up, contacts and prevention",
      points: [
        "Monthly clinical review with weight, symptoms, adherence and adverse effects; monthly culture; **post-treatment follow-up every 6 months for 2 years** under NTEP. [NTEP PMDT 2021]",
        "**Household contacts** of DR-TB are screened by symptoms and chest X-ray; **TB preventive treatment with levofloxacin for 6 months** is recommended for contacts of MDR/RR-TB - see the TB infection and TPT topic. [WHO 2024]",
        "**Ni-kshay Poshan Yojana** pays **Rs 1000 per month** by DBT for the whole treatment period (raised from Rs 500 in 2024), and Ni-kshay Mitras provide food baskets. [MoHFW 2024]",
        "**Airborne infection control**: separate cough triage, ventilation, N95 for staff, surgical mask for the patient, and cough hygiene at home. [NTEP 2023]",
        "Prevention of acquired resistance: **fixed-dose combinations, directly observed or digitally monitored treatment (99DOTS, MERM boxes)**, and never adding a single drug to a failing regimen. [NTEP 2023]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**WHO 2022** recommended the **6-month BPaLM/BPaL regimen** for MDR/RR-TB and pre-XDR-TB in people aged 14 or over. [WHO 2022]",
        "**WHO 2025 consolidated Module 4** added **9-month endTB regimens** (BDLLfxC, BLMZ and others) and extended options to children, adolescents and pregnant women. [WHO 2025]",
        "**India 2024**: BPaLM approved and rolled out under NTEP; **Ni-kshay Poshan Yojana raised to Rs 1000 per month**. [MoHFW 2024]",
        "**WHO 2024** recommended **6 months of levofloxacin** as TPT for contacts of MDR/RR-TB (VQUIN and TB-CHAMP trials). [WHO 2024]",
        "**WHO 2024** endorsed **targeted next-generation sequencing** and low-complexity automated NAATs (Xpert MTB/XDR) for second-line resistance. [WHO 2024]",
        "**WHO 2021** redefined **pre-XDR and XDR** around fluoroquinolones, bedaquiline and linezolid instead of injectables. [WHO 2021]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Define **pre-XDR and XDR by the 2021 WHO definitions** - quoting injectables is the commonest mistake. [WHO 2021]",
        "Write the **BPaLM doses exactly**: bedaquiline 400 mg OD x 2 weeks then 200 mg thrice weekly x 22 weeks; pretomanid 200 mg, linezolid 600 mg, moxifloxacin 400 mg daily for 26 weeks. [WHO 2025]",
        "Name the **three linezolid toxicities** (myelosuppression, peripheral neuropathy, optic neuropathy) and the **QT threshold of 500 ms**. [WHO 2025]",
        "Explain **inhA versus katG**: inhA gives low-level INH resistance and ethionamide cross-resistance; both mutations together exclude the shorter regimen. [NTEP PMDT 2021]",
        "Remember the **Group A drugs**: 'Lfx/Mfx, Bdq, Lzd - **LBL**'. [WHO 2025]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drug-resistant TB drugs: doses and adverse effects (adult)",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Bedaquiline (Group A)", "400 mg oral OD x 2 weeks, then 200 mg three times weekly; take with food", "24 weeks in BPaLM; 6 months (can be longer) in other regimens", "QT prolongation, hepatotoxicity, arthralgia, nausea; avoid with efavirenz"],
        ["Pretomanid", "200 mg oral OD with food", "26 weeks (39 if extended)", "Hepatotoxicity, nausea, peripheral neuropathy and myelosuppression mainly through linezolid; not in pregnancy or under 14 years"],
        ["Linezolid (Group A)", "600 mg oral OD (300 mg if toxicity); longer regimen 600 mg OD", "26 weeks in BPaLM; often 6 months or more in longer regimen", "Anaemia, thrombocytopenia, peripheral and optic neuropathy, lactic acidosis, serotonin syndrome with SSRIs"],
        ["Moxifloxacin / levofloxacin (Group A)", "Moxifloxacin 400 mg OD; levofloxacin 750-1000 mg OD by weight", "Whole regimen", "QT prolongation (moxifloxacin more), tendinopathy, dysglycaemia, insomnia, seizures"],
        ["Clofazimine (Group B)", "100 mg oral OD", "Whole regimen in shorter and longer regimens", "Skin and conjunctival pink-brown discolouration, ichthyosis, QT prolongation, abdominal pain"],
        ["Cycloserine (Group B)", "10-15 mg/kg/day, usually 500-750 mg in divided doses, with pyridoxine 50 mg per 250 mg", "Longer regimen", "Depression, psychosis, suicidal ideation, seizures; avoid in epilepsy or psychiatric illness"],
        ["Delamanid (Group C)", "100 mg oral BD", "6 months (can be extended)", "QT prolongation, nausea; used when bedaquiline or linezolid cannot be"],
        ["Ethionamide (Group C)", "15-20 mg/kg/day, max 1 g", "Shorter regimen intensive phase", "GI intolerance, hypothyroidism, hepatotoxicity, gynaecomastia; teratogenic"],
      ],
    },
    {
      heading: "Definitions of drug-resistant TB (WHO 2021)",
      columns: ["Type", "Definition", "Usual NTEP regimen"],
      rows: [
        ["Hr-TB", "Isoniazid-resistant, rifampicin-susceptible", "6 months R, E, Z plus levofloxacin"],
        ["RR-TB", "Rifampicin resistance with or without other resistance", "Managed as MDR-TB"],
        ["MDR-TB", "Resistance to at least rifampicin and isoniazid", "BPaLM 6 months, or shorter oral 9-11 months, or longer oral 18-20 months"],
        ["Pre-XDR-TB", "MDR/RR-TB plus resistance to any fluoroquinolone", "BPaL 6 months or longer oral regimen"],
        ["XDR-TB", "MDR/RR-TB plus fluoroquinolone plus bedaquiline and/or linezolid resistance", "Individualised longer regimen at a nodal DR-TB centre"],
      ],
    },
    {
      heading: "Choosing the regimen for MDR/RR-TB",
      columns: ["Regimen", "Composition and duration", "Eligible", "Not eligible"],
      rows: [
        ["BPaLM", "Bdq, Pa, Lzd, Mfx for 26 weeks", "MDR/RR-TB, FQ-sensitive, age 14 or over", "Pregnancy, breastfeeding, CNS/bone/miliary TB, prior exposure over 1 month to Bdq/Pa/Lzd/Dlm"],
        ["BPaL", "Bdq, Pa, Lzd for 26 weeks", "Pre-XDR (FQ-resistant) TB, age 14 or over", "Same exclusions as BPaLM"],
        ["Shorter oral Bdq regimen", "4-6 Bdq(6) Lfx Cfz Z E Hh Eto / 5 Lfx Cfz Z E (9-11 months)", "FQ-sensitive MDR/RR-TB incl. children, not eligible for BPaLM", "FQ resistance, katG plus inhA mutations, prior second-line over 1 month, severe EPTB"],
        ["Longer oral regimen", "Group A all three plus Group B; 18-20 months", "XDR-TB, failure of shorter regimen, extensive disease", "Individualised to DST and tolerance"],
      ],
    },
    {
      heading: "Diagnostic tests for drug resistance",
      columns: ["Test", "Detects", "Time", "Use under NTEP"],
      rows: [
        ["CBNAAT Xpert MTB/RIF Ultra", "MTB and rifampicin resistance (rpoB)", "About 2 hours", "Upfront test for all presumptive TB at district level"],
        ["Truenat MTB / MTB-RIF Dx", "MTB and rifampicin resistance", "About 1 hour, chip-based, battery-operated", "Peripheral labs and PHCs"],
        ["Xpert MTB/XDR", "Isoniazid, fluoroquinolone, ethionamide, amikacin resistance", "Under 90 minutes", "Reflex test after RR detected"],
        ["First-line LPA", "rpoB, katG, inhA", "1-3 days on smear-positive sputum", "Isoniazid resistance in all diagnosed TB"],
        ["Second-line LPA", "gyrA, gyrB (FQ), rrs, eis (injectables)", "1-3 days", "All RR-TB before regimen choice"],
        ["Liquid culture DST (MGIT)", "Phenotypic resistance incl. bedaquiline, linezolid, clofazimine, delamanid, pretomanid", "2-6 weeks", "Reference labs; monitoring cultures"],
        ["Targeted NGS", "Mutations across many drugs at once", "Days", "Reference labs; endorsed by WHO 2024"],
      ],
    },
    {
      heading: "Adverse-effect monitoring schedule",
      columns: ["Test", "When", "Action threshold"],
      rows: [
        ["ECG with QTcF", "Baseline, 2 weeks, then monthly on Bdq/Dlm/Cfz/Mfx", "QTcF over 500 ms: stop QT drugs, correct K/Mg/Ca"],
        ["CBC", "Baseline, then frequently in the first 2 months, then monthly on linezolid", "Hb under 8 g/dL, platelets under 75,000, ANC under 750: hold linezolid"],
        ["Visual acuity and Ishihara", "Baseline and monthly on linezolid or ethambutol", "Any loss: stop linezolid and refer to ophthalmology"],
        ["Neuropathy screen", "Every visit", "Grade 2 or more: reduce or stop linezolid"],
        ["LFT", "Baseline and monthly", "ALT over 3 times ULN with symptoms or over 5 times without: hold hepatotoxic drugs"],
        ["TSH", "Baseline and every 3 months on Eto or PAS", "Raised: start levothyroxine, continue drugs"],
      ],
    },
  ],
  redFlags: [
    "QTcF over 500 ms, syncope or palpitations on bedaquiline, delamanid, clofazimine or moxifloxacin",
    "Sudden fall in vision or colour vision on linezolid (optic neuropathy)",
    "Haemoglobin under 8 g/dL or platelets under 75,000 on linezolid",
    "Jaundice or ALT over 5 times the upper limit, or ALT over 3 times with symptoms",
    "Suicidal ideation, psychosis or seizures on cycloserine",
    "Massive haemoptysis or respiratory failure (SpO2 under 90%)",
    "Persistent culture positivity after 4 months or clinical deterioration on a DR-TB regimen",
  ],
  pearls: [
    "**Every** diagnosed TB patient in India needs a rapid rifampicin-resistance test - universal DST.",
    "**Pre-XDR = MDR plus FQ resistance; XDR = pre-XDR plus bedaquiline or linezolid resistance** (WHO 2021).",
    "BPaLM is **6 months, all oral, 4 drugs**; drop moxifloxacin (BPaL) if FQ-resistant.",
    "Group A drugs are '**LBL**': levofloxacin/moxifloxacin, bedaquiline, linezolid.",
    "**inhA mutation** means ethionamide is useless; katG plus inhA together exclude the shorter regimen.",
    "**Bedaquiline plus efavirenz** is a classic interaction - switch to dolutegravir.",
    "Cycloserine needs **pyridoxine 50 mg per 250 mg**.",
    "**QTcF over 500 ms** - stop all QT-prolonging drugs.",
    "Kanamycin and capreomycin are **no longer recommended**.",
  ],
  mcqs: [
    {
      id: "respiratory-drtb-q1",
      stem: "A 34-year-old man has MDR-TB. Second-line line probe assay shows a gyrA mutation, and phenotypic DST shows linezolid resistance. Under the WHO 2021 definitions, this is:",
      options: ["Pre-XDR-TB", "MDR-TB with poly-resistance", "XDR-TB", "Rifampicin-resistant TB only"],
      answer: 2,
      explanation:
        "XDR-TB (WHO 2021) is MDR/RR-TB resistant to a fluoroquinolone plus at least one more Group A drug, bedaquiline or linezolid - here gyrA (FQ) plus linezolid resistance. Pre-XDR stops at fluoroquinolone resistance alone, and poly-resistance refers to first-line drugs other than both H and R, so neither fits.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-drtb-q2",
      stem: "Which is the correct BPaLM dose schedule for an adult with fluoroquinolone-susceptible MDR-TB?",
      options: [
        "Bedaquiline 400 mg OD for 2 weeks then 200 mg three times weekly, pretomanid 200 mg OD, linezolid 600 mg OD, moxifloxacin 400 mg OD for 26 weeks",
        "Bedaquiline 200 mg OD, pretomanid 100 mg OD, linezolid 1200 mg OD, moxifloxacin 800 mg OD for 9 months",
        "Bedaquiline 400 mg OD throughout, pretomanid 200 mg BD, linezolid 600 mg BD, levofloxacin 750 mg OD for 18 months",
        "Bedaquiline 400 mg three times weekly, pretomanid 200 mg OD, linezolid 300 mg OD, moxifloxacin 400 mg OD for 12 weeks",
      ],
      answer: 0,
      explanation:
        "BPaLM is 26 weeks: bedaquiline loads at 400 mg daily for 2 weeks and then 200 mg three times a week, with daily pretomanid 200 mg, linezolid 600 mg and moxifloxacin 400 mg. Linezolid 1200 mg was the original Nix-TB dose and caused much more neuropathy, and 18-month durations describe the longer regimen, not BPaLM.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-drtb-q3",
      stem: "A patient on a bedaquiline-containing regimen has a QTcF of 520 ms on the monthly ECG. The best immediate step is:",
      options: [
        "Continue all drugs and repeat the ECG in a month",
        "Add a beta-blocker and continue",
        "Reduce bedaquiline to 100 mg and continue moxifloxacin",
        "Stop QT-prolonging drugs and correct potassium, magnesium and calcium",
      ],
      answer: 3,
      explanation:
        "A QTcF over 500 ms is the threshold at which bedaquiline and other QT-prolonging drugs (moxifloxacin, clofazimine, delamanid) are stopped and electrolytes corrected, with repeat ECGs. Continuing unchanged risks torsades, and dose-reducing bedaquiline is not a recognised strategy; beta-blockers do not make the drugs safe.",
      difficulty: "easy",
    },
    {
      id: "respiratory-drtb-q4",
      stem: "Which finding makes a patient with MDR-TB ineligible for the shorter oral bedaquiline-containing regimen?",
      options: [
        "Age 10 years",
        "Both katG and inhA mutations on line probe assay",
        "HIV infection on dolutegravir-based ART",
        "Isolated cervical lymph node TB",
      ],
      answer: 1,
      explanation:
        "The shorter regimen relies on high-dose isoniazid and ethionamide; katG plus inhA mutations mean high-level isoniazid and ethionamide resistance, so the regimen loses two drugs. Children can receive it, HIV on dolutegravir is compatible, and limited lymph node disease is not a severe extrapulmonary exclusion.",
      difficulty: "hard",
    },
    {
      id: "respiratory-drtb-q5",
      stem: "A woman on a longer DR-TB regimen develops blurred vision and red-green colour loss in month 5. Which drug is most likely responsible and should be stopped?",
      options: ["Clofazimine", "Bedaquiline", "Cycloserine", "Linezolid"],
      answer: 3,
      explanation:
        "Linezolid causes time-dependent optic neuropathy through mitochondrial toxicity, and visual loss means it should be stopped permanently with ophthalmology referral. Clofazimine causes skin discolouration, bedaquiline mainly QT prolongation, and cycloserine neuropsychiatric effects rather than optic neuropathy.",
      difficulty: "easy",
    },
  ],
  theory: [
    {
      id: "respiratory-drtb-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Define and classify drug-resistant tuberculosis. Describe the diagnostic algorithm and management of MDR/RR-TB under the National TB Elimination Programme, including the BPaLM regimen.",
      openingLines: [
        "Drug-resistant TB is TB caused by M. tuberculosis resistant to one or more anti-TB drugs; MDR-TB is resistance to at least rifampicin and isoniazid.",
        "India carries about a quarter of the world's MDR/RR-TB, and NTEP now offers universal NAAT-based DST and the 6-month all-oral BPaLM regimen.",
      ],
      answer: [
        {
          heading: "Definitions (WHO 2021)",
          points: [
            "Mono-, poly-resistance, Hr-TB, RR-TB, MDR-TB.",
            "Pre-XDR: MDR/RR plus any fluoroquinolone resistance.",
            "XDR: pre-XDR plus bedaquiline and/or linezolid resistance.",
          ],
        },
        {
          heading: "Burden and risk factors",
          points: [
            "NDRS 2014-16: MDR 2.84% new, 11.6% previously treated; FQ resistance about 22% of MDR.",
            "Previous treatment, failure, contacts of MDR, HIV, diabetes, poor adherence.",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "UDST: CBNAAT or Truenat for rifampicin resistance in all diagnosed TB.",
            "If RR: FL-LPA, SL-LPA or Xpert MTB/XDR, and liquid culture DST.",
            "Pre-treatment evaluation: CBC, LFT, RFT, electrolytes, HbA1c, HIV, TSH, ECG-QTcF, pregnancy test, vision and hearing.",
          ],
        },
        {
          heading: "Regimens",
          points: [
            "WHO drug groups A (Lfx/Mfx, Bdq, Lzd), B (Cfz, Cs), C.",
            "BPaLM 26 weeks with doses; BPaL for FQ resistance; eligibility and exclusions.",
            "Shorter oral Bdq regimen 9-11 months; longer oral 18-20 months; Hr-TB 6 months REZ-Lfx.",
          ],
        },
        {
          heading: "Monitoring and adverse effects",
          points: [
            "Monthly smear and culture; culture conversion definition.",
            "QTcF over 500 ms stop; CBC and vision for linezolid; LFT, TSH; aDSM in Ni-kshay.",
          ],
        },
        {
          heading: "Programme support and prevention",
          points: [
            "N-DR-TBC and D-DR-TBC; Ni-kshay Poshan Yojana Rs 1000/month; Ni-kshay Mitra.",
            "Contact screening and 6 months levofloxacin TPT; infection control; post-treatment follow-up 2 years.",
          ],
        },
      ],
      mustDraw: ["NTEP DR-TB diagnostic algorithm flow chart from NAAT to LPA to regimen", "Regimen selection table (BPaLM, BPaL, shorter, longer)"],
      markSplit: [
        { part: "Definitions and classification", marks: 2 },
        { part: "Diagnostic algorithm", marks: 3 },
        { part: "Regimens including BPaLM", marks: 3 },
        { part: "Monitoring and programme support", marks: 2 },
      ],
      keywords: ["MDR-TB", "pre-XDR", "XDR", "UDST", "BPaLM", "LPA", "QTcF", "Ni-kshay"],
    },
    {
      id: "respiratory-drtb-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "core",
      question: "Write a short note on the BPaLM regimen.",
      openingLines: [
        "BPaLM is a 6-month all-oral regimen of bedaquiline, pretomanid, linezolid and moxifloxacin for MDR/RR-TB, recommended by WHO in 2022 and rolled out by NTEP in 2024.",
        "It replaces 9-20-month regimens with higher success and fewer drugs.",
      ],
      answer: [
        {
          heading: "Composition and doses",
          points: [
            "Bedaquiline 400 mg OD x 2 weeks then 200 mg thrice weekly x 22 weeks.",
            "Pretomanid 200 mg, linezolid 600 mg, moxifloxacin 400 mg once daily for 26 weeks.",
          ],
        },
        {
          heading: "Eligibility and exclusions",
          points: [
            "MDR/RR-TB age 14 or over; BPaL if FQ-resistant.",
            "Exclude pregnancy, breastfeeding, CNS/bone/miliary TB, prior exposure over 1 month.",
          ],
        },
        {
          heading: "Evidence",
          points: ["TB-PRACTECAL: 89% favourable versus 52% with standard care; Nix-TB and ZeNix for BPaL."],
        },
        {
          heading: "Monitoring",
          points: ["ECG-QTcF, CBC, vision, neuropathy, LFT; extend to 39 weeks if culture positive at months 4-6."],
        },
      ],
      mustDraw: ["Table of the four drugs with dose, mechanism and main toxicity"],
      markSplit: [
        { part: "Composition and doses", marks: 2 },
        { part: "Eligibility", marks: 1 },
        { part: "Evidence and monitoring", marks: 2 },
      ],
      keywords: ["BPaLM", "bedaquiline", "pretomanid", "linezolid", "moxifloxacin", "TB-PRACTECAL"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Tuberculosis",
    "WHO consolidated guidelines on tuberculosis, Module 4: Treatment and care, 2025",
    "WHO consolidated guidelines on tuberculosis, Module 3: Diagnosis, 2024 update",
    "Guidelines for Programmatic Management of Drug-Resistant TB in India, NTEP, MoHFW, 2021",
    "MoHFW / Central TB Division - introduction of BPaLM regimen under NTEP, 2024",
    "Report of the First National Anti-Tuberculosis Drug Resistance Survey, India 2014-16",
    "WHO Global Tuberculosis Report 2024",
    "Nyang'wa BT et al. TB-PRACTECAL, N Engl J Med 2022",
  ],
});

topics.push({
  id: "respiratory-extrapulmonary-tb",
  title: "Extrapulmonary tuberculosis: lymph node, pleural, abdominal, CNS, spinal and genitourinary",
  frequency: "core",
  oneLiner:
    "**Extrapulmonary TB (EPTB)** is TB of organs other than the lung parenchyma - commonest in **lymph nodes and pleura** - that is **paucibacillary**, so diagnosis rests on **tissue or fluid for NAAT, culture and histology** plus surrogate markers such as **ADA**; it is treated with the standard **2HRZE/4HRE** regimen, extended to **12 months for CNS and osteoarticular TB**, with **corticosteroids for TB meningitis** (and selectively for pericarditis), following the **INDEX-TB guidelines (2016)** and NTEP.",
  keywords: [
    "EPTB",
    "INDEX-TB",
    "scrofula",
    "TB lymphadenitis",
    "TB meningitis",
    "TBM",
    "Pott's spine",
    "spinal TB",
    "abdominal TB",
    "ileocaecal TB",
    "genitourinary TB",
    "female genital TB",
    "pericardial TB",
    "ADA",
    "Xpert Ultra",
    "paradoxical reaction",
    "tuberculoma",
    "cold abscess",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**EPTB** is TB involving organs other than the lungs, such as pleura, lymph nodes, abdomen, genitourinary tract, skin, joints and bones, and meninges; a patient with both lung and extrapulmonary disease is classified as **pulmonary TB**. [WHO 2021]",
        "Pleural TB is counted as **extrapulmonary** in WHO and NTEP reporting, though it is managed with the respiratory team - see the Pleural effusion topic for the effusion work-up. [WHO 2021]",
        "Globally about **16% of notified TB** is extrapulmonary; in India EPTB makes up roughly **one-fifth to one-quarter of notified cases** in the India TB Report. [WHO Global TB Report 2024]",
        "**Lymph node TB** is the commonest form, followed by **pleural TB**; abdominal, skeletal, genitourinary and CNS TB follow. [Harrison 22e]",
        "EPTB is commoner in **HIV infection (especially CD4 under 200), children, women and people of South Asian origin**. [Harrison 22e]",
        "The **INDEX-TB guidelines (2016)**, developed by ICMR, the Central TB Division and WHO India, are India's site-specific evidence-based guidance for EPTB. [INDEX-TB 2016]",
      ],
    },
    {
      heading: "Pathogenesis and why EPTB is paucibacillary",
      points: [
        "During primary infection bacilli spread by **lymphatics to hilar nodes and by the blood to any organ**, seeding foci that may reactivate years later - the basis of EPTB in any site. [Harrison 22e]",
        "Sites with **high oxygen tension and blood flow** - lung apices, renal cortex, vertebral bodies and the growing ends of long bones - are favoured. [Harrison 22e]",
        "Most damage is from the **host's delayed-type hypersensitivity**: caseating granulomas, exudates and fibrosis, not bacillary load - hence few organisms in fluids and low culture yield. [Harrison 22e]",
        "**TB meningitis** follows rupture of a subependymal or subpial focus (the **Rich focus**) into the subarachnoid space; thick **basal exudate** entraps cranial nerves, causes **vasculitis and infarcts** and blocks CSF flow, causing **hydrocephalus**. [Harrison 22e]",
        "**Spinal TB** starts in the **anterior vertebral body near the disc (paradiscal)**; the avascular disc is destroyed late, vertebrae collapse anteriorly causing **gibbus and kyphosis**, and pus tracks as a **cold abscess** (psoas, paravertebral). [Harrison 22e]",
        "**Abdominal TB** arises from swallowed sputum, haematogenous spread or contiguous nodes; **Peyer's patches in the ileocaecal region** are the commonest gut site, and the peritoneum forms ascites or adhesions. [Harrison 22e]",
        "**Genitourinary TB** begins in the renal cortex and spreads down the collecting system, producing **papillary necrosis, strictures and a small fibrosed bladder**; in women haematogenous spread to the **fallopian tubes** causes infertility. [Harrison 22e]",
        "**Pericardial TB** progresses from effusive to effusive-constrictive and **constrictive** stages as fibrin and fibrosis thicken the pericardium. [Harrison 22e]",
      ],
    },
    {
      heading: "Classification and grading the examiner asks",
      points: [
        "**Jones and Campbell staging of TB lymphadenitis**: 1 enlarged firm mobile nodes; 2 rubbery matted nodes; 3 central softening (abscess); 4 **collar-stud abscess**; 5 **sinus formation**. [Jones and Campbell 1962]",
        "**Modified BMRC grading of TB meningitis**: **Grade I** - GCS 15 with no focal deficit; **Grade II** - GCS 11-14, or 15 with focal deficit; **Grade III** - GCS 10 or less. Mortality rises steeply with grade. [BMRC; Thwaites 2004]",
        "**Lancet consensus case definition for TBM (Marais 2010)**: definite (AFB, culture or NAAT positive in CSF), **probable (score 10 or more without imaging, 12 or more with imaging)** and possible. [Marais 2010]",
        "**Spinal TB** is classified by site (paradiscal, central, anterior, posterior, skip lesions) and by neurological deficit; kyphosis is measured as **Konstam's angle**. [Tuli 2016]",
        "**Abdominal TB** is classified as **gastrointestinal, peritoneal (wet ascitic, dry plastic, fibrotic-fixed), nodal and solid-organ** TB. [INDEX-TB 2016]",
        "**Pericardial TB** stages: dry, effusive, effusive-constrictive and constrictive. [Harrison 22e]",
      ],
    },
    {
      heading: "Clinical features by site",
      points: [
        "**Lymph node TB**: painless, slowly enlarging **cervical** nodes (posterior triangle and jugular chain), matting, cold abscess and discharging sinus; constitutional symptoms in only about half. [INDEX-TB 2016]",
        "**Pleural TB**: acute or subacute fever, pleuritic pain and breathlessness in a young adult, with a unilateral moderate effusion. [Harrison 22e]",
        "**Abdominal TB**: chronic abdominal pain, distension, fever, weight loss, **subacute intestinal obstruction** (doughy abdomen, recurrent colic) or a **right iliac fossa mass**. [INDEX-TB 2016]",
        "**TB meningitis**: **2-8 weeks of headache, fever, vomiting**, then confusion, cranial nerve palsies (**VI commonest**), hemiparesis, seizures and coma - the subacute course distinguishes it from bacterial meningitis. [Harrison 22e]",
        "**Spinal TB (Pott's disease)**: back pain, stiffness, constitutional symptoms, **gibbus**, cold abscess, and **paraplegia** (Pott's paraplegia); thoracolumbar spine is commonest. [Harrison 22e]",
        "**Genitourinary TB**: frequency, dysuria, haematuria, flank pain, **sterile pyuria**, epididymo-orchitis, and in women **infertility, menstrual disturbance and pelvic pain**. [INDEX-TB 2016]",
        "**Pericardial TB**: fever, chest pain, breathlessness, raised JVP, pulsus paradoxus, or features of constriction (Kussmaul sign, pericardial knock, ascites). [Harrison 22e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Cold abscess**: fluctuant, non-tender, without warmth or erythema - the opposite of a pyogenic abscess. [Bailey and Love 28e]",
        "**Collar-stud abscess**: a superficial abscess communicating with a deep caseous node through a hole in the deep fascia. [Bailey and Love 28e]",
        "**Gibbus** (sharp angular kyphosis), paraspinal muscle spasm, tenderness, and **psoas abscess** presenting as a groin swelling or flexion deformity of the hip. [Tuli 2016]",
        "**Neck stiffness, Kernig's sign, papilloedema, VI nerve palsy** and choroid tubercles on fundoscopy suggest TBM or miliary TB. [Harrison 22e]",
        "**Doughy abdomen**, ascites, and a firm, mildly tender **right iliac fossa mass** suggest abdominal TB. [INDEX-TB 2016]",
        "**Beaded vas deferens** and a craggy epididymis suggest male genital TB. [Bailey and Love 28e]",
        "Always examine the chest and take a **chest X-ray** - up to a third of EPTB has coexisting pulmonary TB, which changes infectivity and classification. [INDEX-TB 2016]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Cervical lymphadenopathy**: reactive nodes, lymphoma (rubbery, B symptoms), metastatic carcinoma (hard, older patient), NTM in children, sarcoidosis, Kikuchi disease. [Harrison 22e]",
        "**Lymphocytic exudative effusion**: TB versus malignancy (older, ADA low, cytology positive) and lymphoma. [Light 2013]",
        "**Ileocaecal TB versus Crohn's disease**: TB has **transverse ulcers, patulous ileocaecal valve, caseating confluent granulomas, necrotic nodes**; Crohn's has longitudinal ulcers, skip lesions, perianal disease and **comb sign**. [INDEX-TB 2016]",
        "**Chronic meningitis**: TBM versus cryptococcal meningitis (India ink, CrAg), partially treated bacterial meningitis, neurocysticercosis and carcinomatous meningitis. [Harrison 22e]",
        "**Spondylodiscitis**: TB (slow, multiple levels, large cold abscess, posterior element sparing early) versus **brucellosis** (lower lumbar, less destruction), pyogenic (acute) and metastasis (**disc spared**). [Harrison 22e]",
        "**Sterile pyuria**: GU TB versus partially treated UTI, chlamydia, interstitial nephritis, renal stones and analgesic nephropathy. [OHCM 11e]",
      ],
    },
    {
      heading: "Investigations - principles and per site",
      points: [
        "**Principle**: obtain tissue or fluid for **Xpert MTB/RIF Ultra or Truenat, liquid culture with DST, and histopathology**; a negative NAAT does not exclude EPTB because of low bacillary load. [INDEX-TB 2016]",
        "**TST and IGRA cannot diagnose active EPTB** - they only show infection; INDEX-TB advises against **serological tests** (banned in India since 2012). [INDEX-TB 2016]",
        "**Lymph node**: **FNAC** showing epithelioid granulomas with caseation, AFB stain and Xpert on aspirate; excision biopsy if FNAC is inconclusive. [INDEX-TB 2016]",
        "**Pleural fluid**: lymphocytic exudate with **ADA over 40 U/L** strongly supports TB in India; Xpert on fluid has low sensitivity (about 50%), so **pleural biopsy** (histology plus culture) has the highest yield. [INDEX-TB 2016]",
        "**Ascitic fluid**: high-protein, **SAAG under 1.1 g/dL**, lymphocytic, **ADA of 39 U/L or more**; CT shows thickened peritoneum, omental caking and necrotic nodes; **colonoscopy with ileal and caecal biopsy** for culture and NAAT. [INDEX-TB 2016]",
        "**CSF**: raised opening pressure, **lymphocytic pleocytosis 100-500 cells**, **protein 1-5 g/L**, **glucose under 50% of blood glucose**; **Xpert Ultra on CSF** is the initial test (send at least 6 mL); **MRI with contrast** shows basal enhancement, hydrocephalus, infarcts and tuberculomas. [WHO 2024]",
        "**Spine**: **MRI** is the investigation of choice (paradiscal oedema, abscess, skip lesions, cord compression); **CT-guided biopsy** for Xpert, culture and histology. [INDEX-TB 2016]",
        "**Genitourinary**: **three to five early-morning urine samples** for culture and Xpert; CT urography (**putty kidney, thimble bladder, golf-hole ureteric orifice**); **endometrial biopsy** in the premenstrual phase for women; **a positive PCR alone must not be used to treat infertile women**. [INDEX-TB 2016]",
        "**Pericardial fluid**: lymphocytic exudate, **ADA over 40 U/L** and unstimulated interferon-gamma; echocardiography for effusion and constriction. [INDEX-TB 2016]",
        "**HIV with CD4 200 or less or seriously ill**: add **urine LF-LAM**, which finds disseminated TB rapidly. [WHO 2024]",
      ],
    },
    {
      heading: "Treatment - standard regimen and duration",
      points: [
        "Most EPTB (lymph node, pleural, abdominal, genitourinary, pericardial) receives the NTEP regimen **2HRZE + 4HRE (6 months)**, daily, as weight-band fixed-dose combinations. [NTEP 2023]",
        "**CNS TB (meningitis, tuberculoma) and osteoarticular/spinal TB**: **2HRZE + 10HRE (12 months total)** under NTEP; INDEX-TB allows 9-12 months individualised by response. [NTEP 2023]",
        "**Abdominal TB**: **6 months is as good as 9 months** in Indian trials, so routine extension is not needed. [INDEX-TB 2016]",
        "Adult FDC dosing (H75 R150 Z400 E275 per tablet): **25-34 kg 2 tablets, 35-49 kg 3, 50-64 kg 4, 65-75 kg 5, over 75 kg 6** daily. [NTEP 2023]",
        "Every EPTB patient needs **universal DST** where a specimen exists; RR found on tissue or fluid means a DR-TB regimen - see the Drug-resistant TB topic. [NTEP 2023]",
        "**Residual nodes or masses at the end of 6 months are common** and are not by themselves a reason to extend treatment. [INDEX-TB 2016]",
      ],
    },
    {
      heading: "Steroids, surgery and inpatient care",
      points: [
        "**TBM - dexamethasone for all HIV-negative patients**: Grade II/III **0.4 mg/kg/day IV week 1, 0.3 week 2, 0.2 week 3, 0.1 week 4**, then oral tapering over 4 weeks; Grade I starts at 0.3 mg/kg/day. [Thwaites NEJM 2004]",
        "Steroids reduce **TBM mortality by about 25%** in HIV-negative adults; the **ACT HIV trial (2023)** found **no survival benefit in HIV-positive TBM**. [NEJM 2023]",
        "**TB pericarditis**: prednisolone (IMPI regimen **120 mg/day tapering over 6 weeks**) did not reduce mortality but **halved constrictive pericarditis**; WHO suggests steroids may be used, avoiding them in HIV because of Kaposi sarcoma risk. [IMPI NEJM 2014]",
        "**TBM with hydrocephalus**: communicating hydrocephalus may respond to **acetazolamide and furosemide**; obstructive hydrocephalus or worsening sensorium needs **ventriculoperitoneal shunt or endoscopic third ventriculostomy**. [Harrison 22e]",
        "**Spinal TB surgery** for **neurological deficit not improving on ATT, instability, progressive kyphosis, large abscess or diagnostic doubt**; most patients recover with ATT alone (Tuli's 'middle path'). [Tuli 2016]",
        "**Abdominal TB**: surgery for **perforation, complete obstruction, massive bleeding or fistula**; strictures often respond to ATT or endoscopic dilatation. [INDEX-TB 2016]",
        "**Pericardiocentesis** for tamponade; **pericardiectomy** for established constriction. [ESC 2015]",
        "**Admit** TBM, spinal TB with deficit, tamponade, intestinal obstruction or perforation, and any EPTB with sepsis or inability to take oral drugs. [INDEX-TB 2016]",
      ],
    },
    {
      heading: "Paradoxical reactions and special situations",
      points: [
        "A **paradoxical reaction** is worsening of existing lesions or appearance of new ones after initial improvement on ATT, in a patient with drug-susceptible TB and good adherence. [INDEX-TB 2016]",
        "Paradoxical reactions occur in about **10-25% of lymph node TB** and are commoner with HIV on ART (**TB-IRIS**); new nodes, abscesses, effusions or **enlarging tuberculomas** may appear. [Harrison 22e]",
        "Manage by **continuing ATT**, aspirating fluctuant nodes, excluding drug resistance (repeat NAAT and culture), and adding **prednisolone** for severe or CNS reactions. [INDEX-TB 2016]",
        "**HIV**: start ART within 2 weeks for most EPTB, but **delay ART 4-8 weeks in TB meningitis** because early ART increases severe adverse events. [WHO 2021]",
        "**Pregnancy**: first-line drugs are safe; give **pyridoxine** with isoniazid; genital TB is a cause of infertility and ectopic pregnancy. [INDEX-TB 2016]",
        "**Children**: TBM and miliary TB are commoner under 5; treat CNS TB for 12 months under NTEP. [NTEP 2023]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**TBM**: mortality about **20-30% overall and up to 50% in Grade III**; survivors may have hydrocephalus, epilepsy, cognitive impairment, blindness and hemiparesis. [Harrison 22e]",
        "**Spinal TB**: Pott's paraplegia, severe kyphosis and late-onset paraplegia from cord stretching over the gibbus. [Tuli 2016]",
        "**Abdominal TB**: strictures, obstruction, perforation, malabsorption and adhesions. [Harrison 22e]",
        "**Genitourinary TB**: obstructive uropathy, **contracted bladder**, CKD and **tubal infertility** (often irreversible). [INDEX-TB 2016]",
        "**Pleural TB**: pleural thickening and trapped lung; **pericardial TB**: constrictive pericarditis in up to a quarter without steroids. [Harrison 22e]",
      ],
    },
    {
      heading: "Referral, follow-up and programme link",
      points: [
        "Notify every EPTB case on **Ni-kshay**; the patient gets **Ni-kshay Poshan Yojana Rs 1000 per month** and treatment support like pulmonary TB. [MoHFW 2024]",
        "Follow-up is **clinical** (weight, symptoms, node size, neurological status) because sputum is not available; imaging is repeated only to guide decisions. [INDEX-TB 2016]",
        "Refer to **neurology/neurosurgery** for TBM, **spine surgery** for deficits or instability, **gastro-surgery** for obstruction, and **cardiology** for tamponade or constriction. [INDEX-TB 2016]",
        "Screen **household contacts** if there is coexisting pulmonary TB, and offer **TPT** to eligible contacts - see the TB infection and TPT topic. [NTEP 2023]",
        "Offer **HIV testing and diabetes screening** to all; manage both in parallel. [NTEP 2023]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**WHO 2024** recommends **Xpert Ultra on CSF** as the initial test for TBM and NAAT on other extrapulmonary specimens. [WHO 2024]",
        "**ACT HIV trial (2023)**: dexamethasone did not improve survival in **HIV-associated TBM**; steroids remain standard in HIV-negative TBM. [NEJM 2023]",
        "**High-dose rifampicin for TBM** is under trial and **not yet recommended** for routine use. [WHO 2025]",
        "**NTEP 2023-24** continues 12-month treatment for CNS and osteoarticular TB and introduced the higher **Ni-kshay Poshan payment (2024)**. [MoHFW 2024]",
        "**WHO 2022** paediatric guidance: a **6-month intensive regimen (HRZEto)** is an option for children with TBM. [WHO 2022]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Name the **INDEX-TB guidelines (2016)** - examiners expect this source for Indian EPTB. [INDEX-TB 2016]",
        "Know **ADA cut-offs**: pleural **40 U/L**, ascitic **39 U/L**, pericardial **40 U/L**. [INDEX-TB 2016]",
        "Steroids: **always in TBM (HIV-negative)**, consider in pericarditis, **not routine in pleural TB**. [INDEX-TB 2016]",
        "**Paradoxical reaction is not treatment failure** - continue ATT. [INDEX-TB 2016]",
        "Pleural TB with lung involvement is still notified as **pulmonary TB**. [WHO 2021]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs for extrapulmonary TB (adult)",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Isoniazid (H)", "5 mg/kg oral daily (in FDC); pyridoxine 10 mg daily", "6 months; 12 months CNS/bone", "Hepatitis, peripheral neuropathy"],
        ["Rifampicin (R)", "10 mg/kg oral daily (in FDC)", "6 months; 12 months CNS/bone", "Hepatitis, orange secretions, many drug interactions"],
        ["Pyrazinamide (Z)", "25 mg/kg oral daily (in FDC)", "First 2 months", "Hepatitis, hyperuricaemia, arthralgia"],
        ["Ethambutol (E)", "15 mg/kg oral daily (in FDC)", "Whole course", "Optic neuritis (colour vision); reduce in renal failure"],
        ["Dexamethasone (TBM)", "0.4 mg/kg/day IV (Grade II/III), weekly reduction", "4 weeks IV, then oral taper over 4 weeks", "Hyperglycaemia, GI bleed; no survival benefit in HIV"],
        ["Prednisolone (pericarditis)", "120 mg/day oral tapering (IMPI) or 1 mg/kg", "6 weeks", "Avoid in HIV (Kaposi sarcoma); hyperglycaemia"],
        ["Acetazolamide (communicating hydrocephalus)", "10-20 mg/kg/day oral in divided doses with furosemide", "Weeks, guided by response", "Metabolic acidosis, hypokalaemia"],
      ],
    },
    {
      heading: "Diagnosis and duration by site (INDEX-TB / NTEP)",
      columns: ["Site", "Best specimen and test", "Supportive cut-off or finding", "Duration", "Steroids"],
      rows: [
        ["Lymph node", "FNAC: cytology, AFB, Xpert; excision biopsy", "Caseating granulomas", "6 months", "No (unless severe paradoxical)"],
        ["Pleural", "Pleural fluid and biopsy", "Lymphocytic exudate, ADA over 40 U/L", "6 months", "Not routine"],
        ["Abdominal", "Colonoscopic biopsy, ascitic fluid, CT", "SAAG under 1.1, ADA 39 U/L or more", "6 months", "No"],
        ["CNS (TBM, tuberculoma)", "CSF Xpert Ultra, culture; MRI", "Lymphocytes, protein high, glucose under 50% of blood", "12 months", "Yes - dexamethasone"],
        ["Spinal / bone", "MRI; CT-guided biopsy Xpert and histology", "Paradiscal lesion, cold abscess", "12 months", "No"],
        ["Genitourinary", "3-5 early-morning urines; endometrial biopsy", "Sterile pyuria; CT urography changes", "6 months", "No"],
        ["Pericardial", "Pericardial fluid, echo", "ADA over 40 U/L", "6 months", "Consider (not in HIV)"],
      ],
    },
    {
      heading: "BMRC grading of TB meningitis",
      columns: ["Grade", "Features", "Approximate mortality"],
      rows: [
        ["I", "GCS 15, no focal neurological deficit", "Lowest (about 10-15%)"],
        ["II", "GCS 11-14, or GCS 15 with focal deficit", "Intermediate"],
        ["III", "GCS 10 or less", "Up to 50%"],
      ],
    },
    {
      heading: "Differential diagnosis of key EPTB presentations",
      columns: ["Presentation", "TB clue", "Main mimic", "Discriminating feature"],
      rows: [
        ["Cervical nodes", "Matted, cold abscess, sinus", "Lymphoma", "Rubbery discrete nodes, B symptoms, biopsy"],
        ["Ileocaecal disease", "Transverse ulcers, necrotic nodes, caseation", "Crohn's disease", "Longitudinal ulcers, skip lesions, perianal disease, comb sign"],
        ["Chronic meningitis", "Basal exudate, low glucose, VI palsy", "Cryptococcal meningitis", "CSF CrAg / India ink positive, HIV"],
        ["Spondylitis", "Paradiscal, large abscess, gibbus", "Metastasis", "Disc space preserved, pedicle involved"],
        ["Sterile pyuria", "Early-morning urine culture positive", "Chlamydia / partially treated UTI", "NAAT for chlamydia, response to antibiotics"],
      ],
    },
  ],
  redFlags: [
    "Headache with fever for over a week, altered sensorium or cranial nerve palsy (suspect TBM)",
    "Back pain with leg weakness, sensory level or bladder involvement (Pott's paraplegia)",
    "Raised JVP, pulsus paradoxus or hypotension with pericardial effusion (tamponade)",
    "Abdominal distension, vomiting and absolute constipation (intestinal obstruction) or peritonitis",
    "Worsening sensorium on ATT in TBM (hydrocephalus, infarct, enlarging tuberculoma)",
    "Visual blurring on ethambutol or new jaundice on ATT",
  ],
  pearls: [
    "EPTB is **paucibacillary** - get tissue, send NAAT, culture and histology together.",
    "ADA **40 pleural, 39 ascitic, 40 pericardial** - INDEX-TB cut-offs.",
    "**CNS and bone TB: 12 months** (2HRZE + 10HRE); everything else 6 months.",
    "**Steroids in every HIV-negative TBM**; not routinely in pleural TB.",
    "**Delay ART 4-8 weeks in TBM**, unlike other TB.",
    "**Cold abscess**: no heat, no redness, no tenderness.",
    "**Disc destroyed in TB, preserved in metastasis.**",
    "**Paradoxical reaction is not failure** - continue ATT, exclude resistance.",
  ],
  mcqs: [
    {
      id: "respiratory-extrapulmonary-tb-q1",
      stem: "A 28-year-old woman has 3 weeks of headache, fever and vomiting, GCS 13 and a right VI nerve palsy. CSF shows 180 cells (90% lymphocytes), protein 2.1 g/L and glucose 35% of blood glucose. Xpert Ultra on CSF detects MTB, rifampicin not detected. Which is the correct plan?",
      options: [
        "2HRZE + 4HRE with no steroids",
        "2HRZE + 10HRE with dexamethasone tapering over 6-8 weeks",
        "2HRZE + 4HRE with prednisolone only if she deteriorates",
        "BPaLM for 26 weeks",
      ],
      answer: 1,
      explanation:
        "This is BMRC Grade II TB meningitis (GCS 11-14 with focal deficit), drug-sensitive. CNS TB needs 12 months (2HRZE + 10HRE) under NTEP and dexamethasone for HIV-negative TBM, which reduces mortality. A 6-month regimen is too short for CNS disease, withholding steroids loses the mortality benefit, and BPaLM is for rifampicin-resistant TB.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-extrapulmonary-tb-q2",
      stem: "Which ascitic fluid profile most strongly supports tuberculous peritonitis?",
      options: [
        "SAAG 1.8 g/dL, protein 1.2 g/dL, neutrophils 500/mm3",
        "SAAG 2.0 g/dL, ADA 10 U/L, lymphocytes predominant",
        "SAAG 0.8 g/dL, protein 4.5 g/dL, lymphocytes predominant, ADA 52 U/L",
        "SAAG 0.6 g/dL, cytology showing adenocarcinoma cells, ADA 15 U/L",
      ],
      answer: 2,
      explanation:
        "TB peritonitis gives a low-SAAG (under 1.1) high-protein lymphocytic exudate with ADA of 39 U/L or more. A high SAAG points to portal hypertension, a neutrophil count over 250 with low protein suggests spontaneous bacterial peritonitis, and malignant cells with low ADA indicate peritoneal carcinomatosis.",
      difficulty: "easy",
    },
    {
      id: "respiratory-extrapulmonary-tb-q3",
      stem: "Six weeks into ATT for cervical node TB, a patient who was improving develops a new fluctuant node. He is adherent and the original isolate was rifampicin-sensitive. What is the best next step?",
      options: [
        "Continue ATT, aspirate the node and send it for Xpert and culture",
        "Stop ATT and start a DR-TB regimen",
        "Add a fluoroquinolone to the current regimen",
        "Excise all nodes and stop treatment",
      ],
      answer: 0,
      explanation:
        "New or enlarging nodes after initial improvement are typical of a paradoxical reaction. ATT is continued, fluctuant nodes are aspirated, and the aspirate is retested to exclude resistance. Switching to a DR-TB regimen without evidence or adding a single drug risks acquired resistance, and surgery is not a replacement for ATT.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-extrapulmonary-tb-q4",
      stem: "On MRI of the dorsal spine, which feature best favours tuberculous over metastatic disease?",
      options: [
        "Involvement of a single pedicle with preserved disc",
        "Destruction of the intervertebral disc with a large paravertebral abscess",
        "Multiple sclerotic vertebral bodies",
        "A collapsed vertebra with a convex posterior border and normal adjacent discs",
      ],
      answer: 1,
      explanation:
        "Spinal TB starts paradiscally, involves the disc and two adjacent vertebrae and forms large cold abscesses. Metastases typically spare the disc and involve the pedicle and posterior elements, and sclerotic vertebrae suggest prostate or breast metastasis.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-extrapulmonary-tb-q5",
      stem: "In a patient with HIV and newly diagnosed TB meningitis who is not on ART, when should ART be started according to WHO guidance?",
      options: [
        "Within 48 hours of ATT",
        "Within 2 weeks of ATT, as for other TB",
        "After completing 12 months of ATT",
        "Deferred 4-8 weeks after starting ATT",
      ],
      answer: 3,
      explanation:
        "For TB meningitis, early ART increases severe adverse events including fatal IRIS, so ART is delayed 4-8 weeks after ATT. The 2-week rule applies to other forms of TB, starting within 48 hours is unsafe, and waiting until ATT ends leaves HIV untreated for too long.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "respiratory-extrapulmonary-tb-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Describe the pathogenesis, clinical features, diagnosis and management of tuberculous meningitis. Add a note on the role of corticosteroids.",
      openingLines: [
        "Tuberculous meningitis is the most severe form of extrapulmonary TB, a subacute basal meningitis caused by rupture of a Rich focus into the subarachnoid space.",
        "It is graded by the modified BMRC scale, treated for 12 months with ATT and dexamethasone, and carries up to 50% mortality in Grade III.",
      ],
      answer: [
        {
          heading: "Pathogenesis",
          points: [
            "Haematogenous seeding, Rich focus, rupture into subarachnoid space.",
            "Basal exudate: cranial nerve palsies, vasculitis and infarcts, hydrocephalus.",
          ],
        },
        {
          heading: "Clinical features and grading",
          points: [
            "Prodrome of 2-8 weeks; headache, fever, vomiting, confusion, VI palsy, seizures.",
            "BMRC grade I, II, III with GCS and focal deficit.",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "CSF: lymphocytes, protein 1-5 g/L, glucose under 50% of blood; Xpert Ultra, culture.",
            "MRI: basal enhancement, hydrocephalus, infarcts, tuberculomas; CXR for miliary; HIV test.",
            "Lancet consensus score for probable TBM.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "2HRZE + 10HRE (12 months) under NTEP; DST on CSF.",
            "Dexamethasone 0.4 mg/kg/day tapered over 6-8 weeks in HIV-negative patients.",
            "Hydrocephalus: acetazolamide, furosemide, VP shunt or ETV.",
            "In HIV, ART after 4-8 weeks.",
          ],
        },
        {
          heading: "Role of corticosteroids",
          points: [
            "Thwaites 2004: about 25% lower mortality; no reduction in disability.",
            "ACT HIV 2023: no survival benefit in HIV-positive TBM.",
          ],
        },
        {
          heading: "Complications and prognosis",
          points: ["Hydrocephalus, infarcts, SIADH, seizures, paradoxical tuberculoma; mortality up to 50% in Grade III."],
        },
      ],
      mustDraw: ["CSF comparison table: TB versus bacterial versus viral versus cryptococcal meningitis", "Flow chart of TBM management with steroid taper"],
      markSplit: [
        { part: "Pathogenesis", marks: 2 },
        { part: "Clinical features and grading", marks: 2 },
        { part: "Investigations", marks: 2 },
        { part: "Treatment and steroids", marks: 3 },
        { part: "Complications", marks: 1 },
      ],
      keywords: ["TBM", "BMRC", "Rich focus", "dexamethasone", "Xpert Ultra", "hydrocephalus", "INDEX-TB"],
    },
    {
      id: "respiratory-extrapulmonary-tb-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Differentiate ileocaecal tuberculosis from Crohn's disease.",
      openingLines: [
        "Ileocaecal TB and Crohn's disease look alike clinically, endoscopically and on imaging, and misdiagnosis in either direction is harmful in India.",
        "INDEX-TB advises tissue diagnosis and, where doubt persists, an ATT trial with objective endoscopic reassessment.",
      ],
      answer: [
        {
          heading: "Clinical",
          points: ["TB: fever, night sweats, ascites, pulmonary TB; Crohn's: perianal disease, diarrhoea, extraintestinal features."],
        },
        {
          heading: "Endoscopy",
          points: ["TB: transverse ulcers, patulous ileocaecal valve, fewer than 4 segments; Crohn's: longitudinal ulcers, aphthous ulcers, cobblestoning, skip lesions."],
        },
        {
          heading: "Histology and microbiology",
          points: ["TB: large confluent caseating granulomas, AFB, Xpert or culture positive; Crohn's: small non-caseating granulomas."],
        },
        {
          heading: "Imaging",
          points: ["TB: necrotic nodes, ascites, short segment; Crohn's: comb sign, fibrofatty proliferation, long segments."],
        },
        {
          heading: "If still uncertain",
          points: ["ATT trial with clinical and endoscopic response at 2-3 months; never give steroids before excluding TB."],
        },
      ],
      mustDraw: ["Two-column comparison table of ileocaecal TB versus Crohn's disease"],
      markSplit: [
        { part: "Clinical and endoscopic differences", marks: 2 },
        { part: "Histology and imaging", marks: 2 },
        { part: "Approach when uncertain", marks: 1 },
      ],
      keywords: ["ileocaecal TB", "Crohn's disease", "transverse ulcers", "caseating granuloma", "comb sign", "ATT trial"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Tuberculosis",
    "Index-TB Guidelines: Guidelines on extra-pulmonary tuberculosis for India, ICMR and Central TB Division, 2016",
    "Technical and Operational Guidelines for TB Control in India, NTEP, MoHFW, 2023",
    "WHO consolidated guidelines on tuberculosis, Module 3: Diagnosis, 2024",
    "Thwaites GE et al. Dexamethasone for tuberculous meningitis, N Engl J Med 2004",
    "Donovan J et al. ACT HIV trial, N Engl J Med 2023",
    "Mayosi BM et al. IMPI trial, N Engl J Med 2014",
    "Marais S et al. Tuberculous meningitis: a uniform case definition, Lancet Infect Dis 2010",
  ],
});

export default topics;
