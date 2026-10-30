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

export default topics;
