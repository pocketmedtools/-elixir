import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "infectious-fever-fever-immunocompromised",
  title: "Fever in the immunocompromised: neutropenic fever, transplant, steroids and biologics",
  oneLiner:
    "**Febrile neutropenia** is a single oral temperature of **38.3 C or more** (or 38.0 C sustained over 1 hour) with an **ANC under 500/mm3** (or expected to fall below 500 within 48 hours) - a **medical emergency** in which a broad-spectrum **antipseudomonal beta-lactam (piperacillin-tazobactam or cefepime) is given within 60 minutes**, risk is stratified by the **MASCC score (21 or more = low risk)**, and every patient starting steroids, transplant immunosuppression or a biologic is first screened for **latent TB and hepatitis B**.",
  frequency: "core",
  keywords: [
    "febrile neutropenia",
    "neutropenic sepsis",
    "MASCC score",
    "CISNE",
    "IDSA/ASCO 2018",
    "piperacillin-tazobactam",
    "cefepime",
    "meropenem",
    "empirical antifungal",
    "galactomannan",
    "transplant infection timeline",
    "CMV",
    "Pneumocystis jirovecii",
    "anti-TNF",
    "rituximab HBV reactivation",
    "latent TB screening",
    "IGRA",
    "G-CSF",
    "febrile neutropenia outpatient",
    "immunosuppressed host",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Febrile neutropenia (FN)**: a single oral temperature of **38.3 C or more**, or **38.0 C or more sustained over 1 hour**, with an **absolute neutrophil count (ANC) under 500/mm3** or under 1000/mm3 and expected to fall below 500 within 48 hours. [IDSA 2010]",
        "**Profound neutropenia** is an ANC **under 100/mm3**; **prolonged neutropenia** lasts **more than 7 days** - both define the high-risk host for bacteraemia and invasive mould infection. [IDSA 2010]",
        "FN complicates chemotherapy in **10-50% of solid tumour** patients and **over 80% of haematological malignancy** patients; a clinical or microbiological source is found in only **20-30%**, and bacteraemia in **10-25%**. [IDSA 2010]",
        "Overall in-hospital mortality of FN in adults is about **5-10%**, rising to **over 20%** with Gram-negative bacteraemia, septic shock or each additional comorbidity. [Harrison 22e]",
        "**Indian burden**: series from tertiary cancer centres (Tata Memorial, AIIMS, CMC Vellore) show **Gram-negative bacilli cause about 60-70%** of bacteraemias in FN (E. coli, Klebsiella, Pseudomonas), unlike the Gram-positive predominance in Western centres. [ICMR AMRSN 2023]",
        "**Carbapenem resistance** in Klebsiella pneumoniae now exceeds half of isolates in ICMR AMRSN hospital data, which is why Indian guidance asks every unit to choose its first-line FN regimen from its own antibiogram. [ICMR AMRSN 2023]",
        "The wider **immunocompromised host** includes solid organ and stem cell transplant recipients, people on **prednisolone 20 mg/day or more for 14 days or more**, biologics (anti-TNF, rituximab, JAK inhibitors), advanced HIV, asplenia, and uncontrolled diabetes. [Harrison 22e]",
        "Fever in these patients is often **blunted** (steroids, elderly, uraemia), so **any new deterioration, hypothermia or unexplained tachycardia** is treated as FN or sepsis until proved otherwise. [NICE NG151 2020]",
      ],
    },
    {
      heading: "Aetiology and risk factors - matching the defect to the organism",
      points: [
        "**Neutropenia** (chemotherapy, aplastic anaemia, leukaemia): **Gram-negative bacilli** (E. coli, Klebsiella, Pseudomonas), viridans streptococci, S. aureus, coagulase-negative staphylococci, then **Candida and Aspergillus** after 7-10 days. [Harrison 22e]",
        "**Cell-mediated (T-cell) defect** (steroids, calcineurin inhibitors, HIV, transplant, lymphoma): **intracellular pathogens** - Mycobacterium tuberculosis, Listeria, Nocardia, Salmonella, PJP, Cryptococcus, CMV, VZV, Toxoplasma, Strongyloides hyperinfection. [Harrison 22e]",
        "**Humoral defect and asplenia** (rituximab, myeloma, CLL, splenectomy): **encapsulated bacteria** - Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis - with fulminant sepsis. [Harrison 22e]",
        "**Anti-TNF agents** (infliximab, adalimumab, etanercept): **TB reactivation** (risk raised 4-20 times, often extrapulmonary or disseminated), histoplasmosis, Listeria, Legionella and HBV reactivation. [ACR 2022]",
        "**Rituximab (anti-CD20)**: **hepatitis B reactivation** (risk over 10% in HBsAg-positive, can be fatal), hypogammaglobulinaemia, PML and prolonged poor vaccine response for 6 months. [AGA 2025]",
        "**JAK inhibitors** (tofacitinib, baricitinib, upadacitinib): **herpes zoster** at 2-3 times the background rate, TB reactivation and opportunistic infections. [ACR 2022]",
        "**Barrier breaks** add their own organisms: **mucositis** (viridans streptococci, anaerobes, Candida), **central venous catheters** (coagulase-negative staphylococci, S. aureus, Candida), and neutropenic enterocolitis (Clostridium septicum, Gram-negatives). [IDSA 2010]",
        "Host risk factors for poor outcome: **age over 60**, haematological malignancy, **ANC under 100 for over 7 days**, hypotension, pneumonia, renal or hepatic dysfunction, uncontrolled cancer and prior fungal infection. [IDSA/ASCO 2018]",
      ],
    },
    {
      heading: "Pathophysiology - why the signs vanish and why the drugs are chosen",
      points: [
        "Neutrophils make **pus, infiltrates and inflammation**; without them, pneumonia may show **no sputum or consolidation**, UTI **no pyuria**, and cellulitis only faint erythema and pain - so **fever may be the only sign**. [Harrison 22e]",
        "Chemotherapy injures the **gut mucosa**, letting endogenous gut flora translocate; this is why **Gram-negative bacilli and Pseudomonas** must be covered empirically and why bacteraemia arises without a visible focus. [Harrison 22e]",
        "Gram-negative bacteraemia in neutropenia can kill within **hours**; each hour of delay in the first antibiotic dose raises mortality, which is why IDSA/ASCO and NICE set a **door-to-needle time of 60 minutes**. [IDSA/ASCO 2018]",
        "**Moulds (Aspergillus, Mucorales)** are cleared by neutrophils and macrophages; risk rises steeply after **10-14 days of neutropenia**, explaining the rule to escalate to antifungal cover when fever persists beyond **4-7 days** of antibiotics. [IDSA 2010]",
        "**Corticosteroids** redistribute lymphocytes, inhibit cytokine transcription (NF-kB), block neutrophil migration and lower the hypothalamic set-point - hence **masked fever, low CRP rise and T-cell opportunists** such as PJP. [Harrison 22e]",
        "**TNF-alpha** is essential for **granuloma maintenance**; blocking it dissolves granulomas that contain latent TB, which is why TB under anti-TNF is often disseminated and why screening precedes the first dose. [Harrison 22e]",
        "**B-cell depletion** removes the antibody that controls HBV cccDNA in hepatocytes; HBV replication rebounds and the hepatitis flare comes on **immune reconstitution**, often weeks to months after the last rituximab dose. [AGA 2025]",
        "Transplant immunosuppression follows a **predictable timeline** (net state of immunosuppression), so the month after transplant points to the likely pathogen. [Fishman, NEJM 2007]",
      ],
    },
    {
      heading: "Classification - risk stratification that decides inpatient or outpatient care",
      points: [
        "The **MASCC risk index** (Multinational Association for Supportive Care in Cancer) scores 7 items to a **maximum of 26**; a score of **21 or more = low risk** (serious complications under 5%), under 21 = high risk. [IDSA/ASCO 2018]",
        "MASCC items: burden of illness **none or mild 5**, moderate 3; **no hypotension 5**; **no COPD 4**; **solid tumour or haematological cancer with no previous fungal infection 4**; **no dehydration needing IV fluids 3**; **outpatient at onset 3**; **age under 60 years 2**. [MASCC 2000]",
        "The **CISNE score** (Clinical Index of Stable Febrile Neutropenia) is used for **apparently stable solid tumour** patients: ECOG 2 or more, stress hyperglycaemia, COPD, cardiovascular disease, mucositis grade 2 or more, monocytes under 200 - **score 0 = low risk**. [IDSA/ASCO 2018]",
        "IDSA clinical high risk regardless of score: **expected neutropenia over 7 days, ANC 100 or less**, haemodynamic instability, new pneumonia, abdominal pain, neurological change, catheter infection, hepatic or renal dysfunction, or **AML/allogeneic HSCT**. [IDSA 2010]",
        "**Transplant timeline**: **0-1 month** - nosocomial, donor-derived, surgical-site, C. difficile, HSV; **1-6 months** - opportunists (CMV, PJP, BK virus, Listeria, Nocardia, Toxoplasma, TB, Aspergillus); **over 6 months** - community infections, late CMV, EBV-driven PTLD. [Fishman, NEJM 2007]",
        "**Steroid thresholds**: prednisolone **20 mg/day or more for 14 days or more** counts as immunosuppressive for live-vaccine purposes; **20 mg/day or more for 4 weeks or more** is the threshold for PJP prophylaxis in cancer patients. [IDSA/ASCO 2018]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "Ask the **date and regimen of the last chemotherapy**: the ANC nadir is usually **7-14 days** after most cytotoxic cycles, so fever in that window is FN until the count is back. [NICE NG151 2020]",
        "Ask about **rigors after flushing a central line** (catheter-related bloodstream infection), mouth ulcers (mucositis), perianal pain, diarrhoea and abdominal pain (**neutropenic enterocolitis**, C. difficile). [IDSA 2010]",
        "Ask about **dry cough and breathlessness with falling SpO2** - PJP under steroids or transplant drugs classically has **hypoxia out of proportion to the chest X-ray**. [Harrison 22e]",
        "Ask about **headache or confusion** (Cryptococcus, Listeria, toxoplasma, PML), **visual symptoms** (CMV retinitis, candida endophthalmitis) and **sinus pain, black nasal discharge or facial swelling** (mucormycosis, aspergillosis). [Harrison 22e]",
        "Ask the **transplant date, organ, induction agent, rejection treatment** (pulse steroids or ATG reset the clock to the high-risk window), CMV donor-recipient status and current prophylaxis. [AST IDCOP 2019]",
        "For biologics, ask the **drug, start date and screening done**: IGRA or TST, chest X-ray, HBsAg and anti-HBc, and whether **TB preventive treatment** was given. [ACR 2022]",
        "Ask about **TB contact, previous TB, travel, soil and farm work** (Nocardia, histoplasma, melioidosis, Strongyloides) and pets or undercooked food (toxoplasma, Listeria, Salmonella). [Harrison 22e]",
      ],
    },
    {
      heading: "Examination findings and what they mean",
      points: [
        "Record vitals with **NEWS2** and lactate: **SBP under 90, MAP under 65, RR 22 or more, SpO2 under 94%** or altered mentation mean neutropenic sepsis - start resuscitation and antibiotics at once. [SSC 2026]",
        "**Do not perform a digital rectal examination** or insert rectal thermometers or suppositories in neutropenia - risk of bacteraemia and perianal abscess; inspect the perianal area instead. [NICE NG151 2020]",
        "Inspect **all catheter sites and tunnels**: erythema or pus over 2 cm along the tunnel is a **tunnel infection** that needs catheter removal. [IDSA 2009]",
        "Examine the **mouth** (mucositis, thrush, HSV ulcers), **sinuses and palate** (black eschar = mucormycosis until proved otherwise) and **fundi** (candida endophthalmitis, CMV retinitis). [Harrison 22e]",
        "Look for skin lesions: **ecthyma gangrenosum** (painless necrotic ulcer with red halo) = **Pseudomonas** bacteraemia; tender nodules may be disseminated Candida, Fusarium or Nocardia; **dermatomal vesicles** = zoster. [Harrison 22e]",
        "Right iliac fossa tenderness with fever and diarrhoea in neutropenia suggests **neutropenic enterocolitis (typhlitis)**; bowel wall over 4 mm on CT confirms. [IDSA 2010]",
        "Absent or minimal signs are the rule; **repeat a full head-to-toe examination daily**, because foci declare themselves as the ANC recovers. [IDSA 2010]",
      ],
    },
    {
      heading: "Differential diagnosis of fever in the immunocompromised",
      points: [
        "**Non-infectious fever** is common: **tumour fever**, transfusion reactions, drug fever (cytarabine, bleomycin, ATG, amphotericin), engraftment syndrome, GVHD and VTE - but these are diagnoses of exclusion after cultures. [Harrison 22e]",
        "**Acute rejection** in a transplant recipient can cause low-grade fever with graft dysfunction (raised creatinine, liver enzymes) - distinguished by biopsy, not by antibiotics. [AST IDCOP 2019]",
        "**Immune reconstitution inflammatory syndrome (IRIS)** - worsening of a known infection as neutrophils or CD4 recover - mimics treatment failure. [Harrison 22e]",
        "**Haemophagocytic lymphohistiocytosis** should be suspected when fever persists with cytopenias, ferritin over 10,000 and splenomegaly despite negative cultures (see the HLH topic). [HLH-2004]",
        "**Endemic Indian infections** still occur in the immunosuppressed - malaria, dengue, scrub typhus, enteric fever - and must be tested for in parallel (see the Acute undifferentiated fever topic). [ICMR 2022]",
        "**PJP versus bacterial pneumonia**: PJP gives subacute dry cough, bilateral ground-glass change, high LDH and desaturation on exertion; bacterial pneumonia is lobar with sputum (if neutrophils exist). [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations - first line and advanced",
      points: [
        "Before antibiotics: **two sets of blood cultures** - one from each lumen of any central line and one peripheral - but **never delay the first dose beyond 60 minutes** to obtain them. [IDSA 2010]",
        "**Differential time to positivity**: a central-line culture turning positive **2 hours or more before** the peripheral one indicates catheter-related bloodstream infection. [IDSA 2009]",
        "First-line panel: **CBC with differential** (ANC = WBC x (neutrophils + bands) %), creatinine, electrolytes, LFT, **lactate**, urine culture (even without pyuria), sputum, stool C. difficile if diarrhoea, and **chest X-ray** if respiratory signs. [IDSA 2010]",
        "In India add a **malaria RDT and smear and dengue NS1** in season - endemic fevers are not suspended by chemotherapy. [ICMR 2022]",
        "**High-resolution CT chest** is the investigation of choice for persistent fever beyond 4-7 days in high-risk neutropenia; nodules with a **halo sign** suggest invasive aspergillosis, the **reverse halo** suggests mucormycosis. [EORTC/MSGERC 2020]",
        "**Serum galactomannan** (positive index 0.5 or more in serum, 1.0 in BAL) and **beta-D-glucan** support invasive fungal disease; galactomannan sensitivity falls on mould-active prophylaxis. [EORTC/MSGERC 2020]",
        "**Transplant panel**: CMV quantitative PCR, BK virus PCR (kidney), EBV PCR, calcineurin inhibitor levels, and **BAL with PJP PCR or immunofluorescence** for infiltrates. [AST IDCOP 2019]",
        "Procalcitonin and CRP help less in neutropenia and are **not used to withhold antibiotics**; serial values may support de-escalation. [ECIL-4 2013]",
      ],
    },
    {
      heading: "Management in OPD - low-risk febrile neutropenia",
      points: [
        "**First dose of antibiotic within 1 hour of triage in every patient**, before the risk assessment is complete; then decide outpatient or inpatient care with MASCC or CISNE. [IDSA/ASCO 2018]",
        "**Low-risk oral regimen**: **ciprofloxacin 750 mg orally twice daily plus amoxicillin-clavulanate 625 mg orally three times daily** (or 500/125 mg); levofloxacin or moxifloxacin 400 mg once daily are alternatives. [IDSA/ASCO 2018]",
        "Do **not** use an oral fluoroquinolone regimen in patients who were already on **fluoroquinolone prophylaxis** - admit and give IV beta-lactam instead. [IDSA/ASCO 2018]",
        "Outpatient care needs: **observation for at least 4 hours** after the first dose, tolerance of oral drugs, a caregiver, a telephone, transport and **reach of the hospital within 1 hour**, with review at 24-48 hours. [IDSA/ASCO 2018]",
        "Penicillin allergy (non-severe): **ciprofloxacin plus clindamycin 300 mg orally 6-hourly** is the IDSA/ASCO alternative. [IDSA/ASCO 2018]",
        "Re-admit if fever persists beyond **48-72 hours**, a new focus appears, cultures grow, the patient cannot take oral drugs or any red flag develops. [IDSA/ASCO 2018]",
        "In a patient on **steroids or biologics** with fever but a normal ANC, manage the focus as in a normal host but with a **lower threshold for admission, cultures and chest imaging**; hold the biologic during active infection. [ACR 2022]",
      ],
    },
    {
      heading: "Management in IPD and emergency - high-risk febrile neutropenia",
      points: [
        "**Empirical IV monotherapy with an antipseudomonal beta-lactam**: **piperacillin-tazobactam 4.5 g IV 6-hourly** or **cefepime 2 g IV 8-hourly**; **meropenem 1 g IV 8-hourly** where ESBL rates are high, in septic shock or with prior ESBL colonisation. [IDSA 2010; ICMR 2022]",
        "Give piperacillin-tazobactam and meropenem as **extended or continuous infusions** in sepsis for better time above MIC. [SSC 2026]",
        "Add **vancomycin 15-20 mg/kg IV 8-12-hourly** (AUC 400-600) only for **haemodynamic instability, pneumonia, suspected catheter infection, skin or soft tissue infection, MRSA colonisation, severe mucositis on fluoroquinolone prophylaxis, or Gram-positive cocci in blood** - not routinely. [IDSA 2010]",
        "Septic shock or known **CRE colonisation**: follow the local antibiogram - **ceftazidime-avibactam 2.5 g IV 8-hourly**, plus **aztreonam** for metallo-beta-lactamase (NDM) producers, which are common in India; add an aminoglycoside in shock. [IDSA AMR 2024; ICMR 2022]",
        "**Persistent fever at 4-7 days** in high-risk patients with expected neutropenia over 7 days: start **empirical antifungal** - **caspofungin 70 mg IV day 1 then 50 mg daily** or **liposomal amphotericin B 3 mg/kg/day**; or a **pre-emptive** strategy guided by CT and galactomannan. [IDSA 2010; ECIL 2017]",
        "Proven or probable **invasive aspergillosis**: **voriconazole 6 mg/kg IV 12-hourly for 2 doses then 4 mg/kg 12-hourly** (trough 1-5.5 mg/L) or isavuconazole; **mucormycosis**: liposomal amphotericin B 5-10 mg/kg/day plus surgery. [IDSA Aspergillus 2016; ECMM 2019]",
        "**Duration**: in a stable patient with no source, **stop empirical antibiotics after 72 hours of apyrexia** irrespective of ANC (ECIL-4); IDSA 2010 continued until ANC over 500 - modern practice follows ECIL, supported by the How Long trial. [ECIL-4 2013]",
        "**G-CSF** (filgrastim 5 mcg/kg/day SC) is **not routine** for established FN; consider it only in high-risk patients (sepsis, pneumonia, invasive fungal infection, expected long neutropenia). [ASCO 2015]",
        "**Remove the central line** for S. aureus, Pseudomonas, Candida or mycobacterial bloodstream infection, tunnel or port-pocket infection, or persistent bacteraemia over 72 hours. [IDSA 2009]",
      ],
    },
    {
      heading: "Special situations - transplant, steroids, biologics, pregnancy and CKD",
      points: [
        "**Solid organ transplant fever**: cultures, CMV PCR, chest imaging and graft function; **never stop all immunosuppression** without the transplant team - reduce antimetabolite (mycophenolate) first in serious infection. [AST IDCOP 2019]",
        "**Drug interactions**: macrolides, azoles and rifampicin alter **tacrolimus and cyclosporine levels** (azoles raise, rifampicin lowers); check levels within 3-5 days of starting or stopping them. [AST IDCOP 2019]",
        "**CMV prophylaxis** after SOT: **valganciclovir 900 mg orally once daily** (renally adjusted) for **3-6 months** in D+/R- or R+; in allogeneic HSCT **letermovir 480 mg daily** to day 100. [AST IDCOP 2019]",
        "**PJP prophylaxis**: **cotrimoxazole one double-strength (160/800 mg) tablet daily or thrice weekly** for 6-12 months after SOT, during HSCT and with prednisolone **20 mg/day or more for 4 weeks or more**. [IDSA/ASCO 2018]",
        "**Before a biologic**: screen **IGRA or TST plus chest X-ray**, **HBsAg, anti-HBc, anti-HBs**, anti-HCV, HIV, and VZV serology; give TB preventive treatment for at least **1 month before** starting anti-TNF (complete the course). [ACR 2022; NTEP TPT 2021]",
        "**HBV before rituximab or chemotherapy**: HBsAg-positive - **entecavir 0.5 mg or tenofovir 300 mg daily** started before and continued **12-18 months** after the last dose; HBsAg-negative anti-HBc-positive on anti-CD20 - prophylaxis too (or HBV DNA monitoring every 1-3 months for lower-risk drugs). [AGA 2025]",
        "**Pregnancy** with FN or on immunosuppression: piperacillin-tazobactam, cefepime and meropenem are acceptable; avoid fluoroquinolones as first choice and voriconazole (teratogenic) - use liposomal amphotericin for fungal cover. [Harrison 22e]",
        "**CKD**: reduce cefepime (neurotoxicity, non-convulsive status), piperacillin-tazobactam and meropenem by eGFR; monitor vancomycin by AUC or trough; amphotericin B worsens renal function - prefer the liposomal form. [Sanford 2025]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Septic shock** develops in 5-10% of FN episodes and carries **mortality of 30-50%**, highest with Pseudomonas and carbapenem-resistant Klebsiella. [Harrison 22e]",
        "**Invasive aspergillosis** mortality is 30-60% and **mucormycosis** 40-80%; early CT and galactomannan-guided therapy improve survival. [ECMM 2019]",
        "**Neutropenic enterocolitis** can perforate; manage with bowel rest, broad cover including anaerobes (piperacillin-tazobactam or meropenem) and surgery for perforation or uncontrolled bleeding. [IDSA 2010]",
        "**CMV disease** after transplant causes pneumonitis, colitis, hepatitis and graft rejection; **disseminated TB** under anti-TNF often presents as PUO with miliary or extrapulmonary disease. [AST IDCOP 2019]",
        "**HBV reactivation** can cause fulminant hepatitis with mortality up to 20-30% in reported series - and it is almost entirely preventable by screening. [AGA 2025]",
        "Delayed chemotherapy, dose reduction and longer hospital stay follow each FN episode - this is why **primary G-CSF prophylaxis** is given when the regimen's FN risk is **20% or more**. [ASCO 2015]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "**Refer the same day** to the oncology or transplant centre any patient with fever within 6 weeks of chemotherapy, any transplant recipient with fever, and anyone on a biologic with fever and hypotension or hypoxia. [NICE NG151 2020]",
        "In-patient monitoring: **vitals 4-hourly**, daily CBC, creatinine and LFT, daily examination, blood cultures again if fever persists at 48-72 hours, and **drug levels** (vancomycin, voriconazole, tacrolimus). [IDSA 2010]",
        "**De-escalate** once cultures are known and the patient is stable; switch to oral therapy in low-risk patients afebrile for 24-48 hours. [ECIL-4 2013]",
        "On biologics: **annual IGRA or symptom screening** if TB exposure continues, ALT and HBV DNA every 1-3 months in anti-HBc-positive patients not on prophylaxis. [AGA 2025]",
        "Teach the patient to **check the temperature at any chill** and to come at once at **38.0 C or more** - give a written neutropenic alert card. [NICE NG151 2020]",
      ],
    },
    {
      heading: "Prevention and counselling",
      points: [
        "**Antibacterial prophylaxis** with **levofloxacin 500-750 mg once daily** is advised only for high-risk patients expected to have **ANC 100 or less for over 7 days** (AML, HSCT); not routinely in solid tumours. [IDSA/ASCO 2018]",
        "**Antifungal prophylaxis**: **posaconazole 300 mg delayed-release tablet twice daily on day 1 then 300 mg once daily** in AML/MDS induction and GVHD; fluconazole 400 mg daily in allogeneic HSCT pre-engraftment. [IDSA/ASCO 2018]",
        "**Antiviral prophylaxis**: **aciclovir 400-800 mg twice daily** for HSV-seropositive patients during HSCT or leukaemia induction. [IDSA/ASCO 2018]",
        "**Vaccinate before immunosuppression**: inactivated vaccines at least **2 weeks before**, live vaccines at least **4 weeks before**; avoid live vaccines (MMR, varicella, oral typhoid, yellow fever) during therapy. [IDSA 2013; ACR 2022]",
        "Give **annual inactivated influenza**, **pneumococcal** (PCV20 alone, or PCV15/PCV13 then PPSV23), and **recombinant zoster vaccine** (2 doses) to adults 19 years or older who are immunocompromised. [ACIP 2024]",
        "**Hand hygiene, a safe-food diet** (no unwashed raw produce, raw eggs, unpasteurised dairy), avoidance of construction dust and gardening during neutropenia; HEPA rooms for allogeneic HSCT. [IDSA/ASCO 2018]",
        "Household contacts should receive **all routine inactivated vaccines and influenza vaccine**; they may receive MMR and varicella (avoid contact with a vaccine rash). [IDSA 2013]",
      ],
    },
    {
      heading: "Latest guideline updates (2023-2026)",
      points: [
        "**Surviving Sepsis Campaign 2026** (adult guideline update): screen with **NEWS2, MEWS or SIRS rather than qSOFA alone**, give antibiotics **within 1 hour** in probable shock, use **balanced crystalloids** and **prolonged beta-lactam infusions** - applied to neutropenic sepsis. [SSC 2026]",
        "**IDSA AMR guidance 2024**: for MBL-producing (NDM) Enterobacterales use **ceftazidime-avibactam plus aztreonam** or cefiderocol; for carbapenem-resistant Pseudomonas, ceftolozane-tazobactam or ceftazidime-avibactam - relevant to Indian FN units. [IDSA AMR 2024]",
        "**AGA 2025 HBV reactivation guideline**: universal **HBsAg and anti-HBc** testing before immunosuppressive therapy, and antiviral prophylaxis (entecavir or tenofovir) for moderate and high-risk drug classes including **anti-CD20 agents**. [AGA 2025]",
        "**CDC 2023** recommends **hepatitis B screening at least once in all adults** with the triple panel (HBsAg, anti-HBs, total anti-HBc). [CDC 2023]",
        "**ACIP 2024**: PCV20 or PCV21 for adults with immunocompromise; recombinant zoster vaccine for immunocompromised adults from age 19. [ACIP 2024]",
        "**WHO TPT 2024 (Consolidated guidelines Module 1)** keeps **3HP, 1HP, 6H and 4R** as options for latent TB before biologics; NTEP 2021 TPT guidance lists people starting anti-TNF, dialysis and transplant as eligible for testing and treatment. [WHO 2024; NTEP 2021]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic question: **define febrile neutropenia, outline MASCC and give empirical therapy** - write the definition, the score items with 21 cut-off, and the drug with dose and the 1-hour rule. [IDSA/ASCO 2018]",
        "Common mistake: **adding vancomycin routinely** - it has no survival benefit unless one of the specific indications is present. [IDSA 2010]",
        "Common mistake: **waiting for the ANC result** before giving the antibiotic; give the first dose on clinical suspicion. [NICE NG151 2020]",
        "Common mistake: **rectal examination or enema** in a neutropenic patient. [NICE NG151 2020]",
        "Viva: why ceftriaxone is not empirical FN therapy - **no reliable antipseudomonal activity**. [IDSA 2010]",
        "Viva: what to screen before infliximab - **IGRA/TST and chest X-ray, HBsAg, anti-HBc, anti-HCV, HIV**, vaccination status. [ACR 2022]",
      ],
    },
  ],
  tables: [
    {
      heading: "MASCC risk index (low risk = 21 or more of 26)",
      columns: ["Characteristic", "Points", "Comment"],
      rows: [
        ["Burden of illness: none or mild symptoms", "5", "Clinician's global judgement"],
        ["Burden of illness: moderate symptoms", "3", "Severe symptoms or moribund score 0"],
        ["No hypotension (SBP 90 mmHg or more)", "5", "Hypotension excludes low risk in practice"],
        ["No chronic obstructive pulmonary disease", "4", "Active COPD needing treatment counts"],
        ["Solid tumour, or haematological cancer with no previous fungal infection", "4", "Prior invasive fungal infection removes these points"],
        ["No dehydration needing IV fluids", "3", "Inability to drink counts as dehydration"],
        ["Outpatient at onset of fever", "3", "Hospital-onset FN is higher risk"],
        ["Age under 60 years", "2", "Older age loses 2 points"],
      ],
    },
    {
      heading: "Drugs in febrile neutropenia and the immunocompromised host",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Piperacillin-tazobactam", "4.5 g IV 6-hourly (extended 4-h infusion in sepsis)", "Until 72 h afebrile and stable (ECIL-4) or per source", "Hypersensitivity, hypokalaemia, AKI with vancomycin; reduce if eGFR under 40"],
        ["Cefepime", "2 g IV 8-hourly", "As above", "Neurotoxicity and non-convulsive status in CKD - dose by eGFR"],
        ["Meropenem", "1 g IV 8-hourly (2 g 8-hourly for CNS)", "As above; de-escalate on cultures", "Seizures (less than imipenem), C. difficile; valproate levels fall"],
        ["Ciprofloxacin + amoxicillin-clavulanate (low risk, oral)", "Cipro 750 mg BD + amox-clav 625 mg TDS orally", "Until afebrile 48 h and ANC recovering; usually 7 days", "Not if on FQ prophylaxis; QT prolongation, tendinopathy"],
        ["Vancomycin (selected indications)", "15-20 mg/kg IV 8-12-hourly; AUC 400-600", "Stop at 48-72 h if no Gram-positive grown", "Nephrotoxicity, infusion reaction; monitor levels"],
        ["Caspofungin", "70 mg IV day 1, then 50 mg IV daily", "Until neutrophil recovery and fever resolves", "Hepatotoxicity; few interactions"],
        ["Liposomal amphotericin B", "3 mg/kg/day IV (5-10 mg/kg for mucor)", "Weeks; per response", "Nephrotoxicity, hypokalaemia, hypomagnesaemia, infusion reactions"],
        ["Voriconazole", "6 mg/kg IV 12-hourly x 2, then 4 mg/kg 12-hourly; oral 200-300 mg BD", "6-12 weeks for aspergillosis; trough 1-5.5 mg/L", "Visual disturbance, hepatitis, QT; raises tacrolimus; teratogenic"],
        ["Cotrimoxazole (PJP prophylaxis)", "1 DS tablet (160/800 mg) daily or thrice weekly", "6-12 months post-SOT; while on 20 mg prednisolone 4 weeks or more", "Rash, hyperkalaemia, marrow suppression, SJS"],
        ["Valganciclovir (CMV prophylaxis)", "900 mg orally once daily (renal adjustment)", "3-6 months post-SOT", "Leucopenia, neutropenia; renal dosing"],
        ["Entecavir / tenofovir (HBV prophylaxis)", "Entecavir 0.5 mg or TDF 300 mg orally daily", "Start before therapy; continue 12-18 months after last dose", "TDF - renal and bone toxicity; entecavir - lactic acidosis rare"],
      ],
    },
    {
      heading: "Immune defect, typical drugs and the organisms to expect",
      columns: ["Immune defect", "Examples", "Typical organisms", "Empirical thinking"],
      rows: [
        ["Neutropenia", "Chemotherapy, AML, aplastic anaemia", "Gram-negative bacilli, Pseudomonas, viridans strep, Candida, Aspergillus", "Antipseudomonal beta-lactam within 1 h; antifungal at 4-7 days"],
        ["T-cell (cell-mediated)", "Steroids, tacrolimus, HIV, lymphoma", "TB, Listeria, Nocardia, PJP, Cryptococcus, CMV, VZV, Toxoplasma", "Sputum/BAL, CSF; cotrimoxazole for PJP"],
        ["B-cell / humoral, asplenia", "Rituximab, myeloma, CLL, splenectomy", "Pneumococcus, H. influenzae, meningococcus; HBV reactivation", "Ceftriaxone early; vaccinate; HBV prophylaxis"],
        ["Anti-TNF blockade", "Infliximab, adalimumab, etanercept", "TB (often extrapulmonary), histoplasma, Listeria, Legionella", "Screen and treat latent TB before; think disseminated TB"],
        ["JAK inhibition", "Tofacitinib, baricitinib, upadacitinib", "Herpes zoster, TB, opportunists", "Recombinant zoster vaccine beforehand"],
        ["Barrier break", "Central line, mucositis, surgery", "CoNS, S. aureus, Candida, anaerobes", "Vancomycin if line infection; remove line for S. aureus/Candida"],
      ],
    },
    {
      heading: "Infection timeline after solid organ transplant",
      columns: ["Period", "Main infections", "Why", "Prophylaxis that changes it"],
      rows: [
        ["0-1 month", "Surgical-site, line and urinary infection, C. difficile, donor-derived, HSV, Candida", "Surgery, devices, hospital flora", "Perioperative antibiotics, aciclovir"],
        ["1-6 months", "CMV, PJP, BK virus, Listeria, Nocardia, Toxoplasma, TB reactivation, Aspergillus", "Peak T-cell suppression", "Valganciclovir, cotrimoxazole, TPT"],
        ["Over 6 months", "Community pneumonia, UTI, late CMV, EBV-PTLD, VZV, endemic fungi", "Maintenance immunosuppression lower", "Vaccination, sun protection, surveillance"],
        ["After rejection treatment", "Resets to the 1-6 month pattern", "Pulse steroids or ATG", "Restart CMV and PJP prophylaxis"],
      ],
    },
    {
      heading: "Screening before steroids, biologics and transplant",
      columns: ["Test", "Positive result", "Action before starting"],
      rows: [
        ["IGRA or TST (5 mm or more) + chest X-ray", "Latent TB infection", "TPT (3HP, 4R or 6H) at least 1 month before anti-TNF; rule out active TB first"],
        ["HBsAg", "Chronic HBV", "Entecavir or tenofovir before therapy, continue 12-18 months after"],
        ["Anti-HBc (HBsAg negative)", "Resolved HBV", "Prophylaxis with anti-CD20 or HSCT; otherwise HBV DNA every 1-3 months"],
        ["Anti-HCV, HIV", "Chronic infection", "Treat HCV with DAA; ART and OI prophylaxis"],
        ["VZV IgG", "Seronegative", "Varicella vaccine at least 4 weeks before; recombinant zoster vaccine if seropositive"],
        ["Strongyloides serology or empirical ivermectin", "Exposure in endemic India", "Ivermectin 200 mcg/kg for 2 days before high-dose steroids"],
      ],
    },
  ],
  redFlags: [
    "Temperature of 38.0 C or more within 6 weeks of chemotherapy - treat as neutropenic sepsis and give antibiotics within 1 hour",
    "SBP under 90 mmHg, lactate 2 mmol/L or more, RR 22 or more or SpO2 under 94% in any immunocompromised patient",
    "Black eschar on the palate or nasal turbinate, or periorbital swelling - suspected mucormycosis",
    "New hypoxia with near-normal chest X-ray on steroids or after transplant - suspected PJP",
    "Headache, confusion or seizure in a transplant recipient or on a biologic - CNS infection (Listeria, Cryptococcus, Toxoplasma)",
    "Jaundice or ALT rise after rituximab or chemotherapy - HBV reactivation",
    "Right iliac fossa pain with fever in neutropenia - neutropenic enterocolitis",
    "Fever with tunnel infection or rigors on flushing a central line",
  ],
  pearls: [
    "FN = 38.3 once or 38.0 for 1 hour, with ANC under 500 - and the antibiotic goes in within 60 minutes.",
    "MASCC 21 or more of 26 = low risk; CISNE 0 = low risk for stable solid tumours.",
    "Low-risk oral: cipro + amox-clav - but never if already on fluoroquinolone prophylaxis.",
    "High risk: pip-taz 4.5 g 6-hourly or cefepime 2 g 8-hourly; meropenem if ESBL likely; ceftriaxone has no place.",
    "Vancomycin only for the 'SPIRIT' indications: Shock, Pneumonia, Infection of line, Rash/skin, Identified Gram-positive, Tissue (mucositis) with FQ prophylaxis.",
    "Fever at day 4-7 despite antibiotics in high-risk FN = think mould; CT chest and galactomannan.",
    "Ecthyma gangrenosum = Pseudomonas bacteraemia.",
    "Anti-TNF = TB; rituximab = HBV; JAK inhibitor = zoster; steroid = PJP.",
    "No rectal examination in neutropenia.",
  ],
  mcqs: [
    {
      id: "infectious-fever-fever-immunocompromised-q1",
      stem: "A 48-year-old woman on adjuvant chemotherapy for breast cancer presents 10 days after her last cycle with a temperature of 38.6 C. She is alert, BP 118/76 mmHg, and her ANC is 300/mm3. Her MASCC score is 23. She was not on antibiotic prophylaxis. What is the most appropriate management after the first dose is given in the emergency room?",
      options: [
        "Admit and start IV meropenem plus vancomycin",
        "Observe for 4 hours, then discharge on oral ciprofloxacin plus amoxicillin-clavulanate with review in 24 hours",
        "Discharge on oral cefixime alone and repeat CBC in a week",
        "Start G-CSF and withhold antibiotics until cultures return",
      ],
      answer: 1,
      explanation:
        "A MASCC score of 21 or more defines low-risk FN; IDSA/ASCO 2018 allows outpatient oral ciprofloxacin plus amoxicillin-clavulanate after the first dose and a period of observation, if she has support and access. Meropenem with vancomycin is excessive for a stable low-risk patient, cefixime lacks antipseudomonal cover, and withholding antibiotics in FN is dangerous.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-fever-immunocompromised-q2",
      stem: "In high-risk febrile neutropenia, which of the following is an accepted indication to add vancomycin to the empirical beta-lactam?",
      options: [
        "Persistent fever at 48 hours without any other change",
        "ANC under 100/mm3",
        "Suspected catheter-related infection with redness at the exit site",
        "Age over 60 years",
      ],
      answer: 2,
      explanation:
        "IDSA lists suspected catheter-related infection, skin or soft-tissue infection, pneumonia, haemodynamic instability, MRSA colonisation and Gram-positive cocci in blood as reasons to add vancomycin. Persistent fever alone, profound neutropenia and older age are not indications - routine vancomycin adds toxicity without lowering mortality.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-fever-immunocompromised-q3",
      stem: "A 35-year-old man with Crohn disease is to start infliximab. His IGRA is positive and chest X-ray is normal; he has no symptoms. What is the best next step?",
      options: [
        "Start infliximab and repeat IGRA in 6 months",
        "Start TB preventive treatment and begin infliximab after at least 1 month of it",
        "Give full four-drug antitubercular treatment for 6 months before infliximab",
        "Abandon infliximab permanently",
      ],
      answer: 1,
      explanation:
        "A positive IGRA with no active disease is latent TB infection; TB preventive treatment (for example 3HP or 4R) is started and anti-TNF therapy can begin after about 1 month while TPT is completed. Starting infliximab untreated risks disseminated TB, four-drug ATT is for active disease, and biologics need not be abandoned.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-fever-immunocompromised-q4",
      stem: "A kidney transplant recipient presents 3 months after transplant with fever, leucopenia and diarrhoea. He was CMV donor-positive, recipient-negative and stopped valganciclovir early due to cost. Which pathogen is most likely?",
      options: [
        "Cytomegalovirus",
        "Methicillin-resistant Staphylococcus aureus wound infection",
        "EBV-driven post-transplant lymphoproliferative disease",
        "Streptococcus pneumoniae",
      ],
      answer: 0,
      explanation:
        "The 1-6 month window is the period of opportunistic infection, and a D+/R- recipient off prophylaxis is at the highest risk of CMV disease, which classically gives fever, leucopenia and colitis. Wound MRSA belongs to the first month, PTLD usually appears later, and pneumococcus causes lobar pneumonia rather than leucopenia with colitis.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-fever-immunocompromised-q5",
      stem: "A 60-year-old man with diffuse large B-cell lymphoma is HBsAg negative and anti-HBc positive. He will receive R-CHOP. According to current guidance, what is advised?",
      options: [
        "No action, since HBsAg is negative",
        "Hepatitis B vaccination only",
        "Check ALT once after the course ends",
        "Antiviral prophylaxis with entecavir or tenofovir during and for at least 12 months after rituximab",
      ],
      answer: 3,
      explanation:
        "Anti-CD20 therapy carries a high risk of HBV reactivation even in HBsAg-negative, anti-HBc-positive patients, so AGA 2025 recommends entecavir or tenofovir prophylaxis continued 12-18 months after the last dose. Doing nothing ignores occult HBV, vaccination does not suppress replication, and a single late ALT misses an early flare.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "infectious-fever-fever-immunocompromised-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Define febrile neutropenia. Describe its risk stratification and the management of a patient presenting to a district hospital with febrile neutropenia after chemotherapy.",
      openingLines: [
        "Febrile neutropenia is a single oral temperature of 38.3 C or more, or 38.0 C sustained for 1 hour, with an ANC under 500/mm3 or expected to fall below 500 within 48 hours (IDSA).",
        "It is an oncological emergency: Gram-negative bacteraemia can kill within hours, so the first antipseudomonal antibiotic dose is given within 60 minutes of arrival.",
      ],
      answer: [
        {
          heading: "Definition and burden",
          points: [
            "Definition as above; profound neutropenia ANC under 100, prolonged over 7 days.",
            "Occurs in 10-50% of solid tumour and over 80% of haematological malignancy patients; mortality 5-10%.",
            "In India Gram-negative bacilli cause 60-70% of bacteraemias, with high ESBL and carbapenem resistance.",
          ],
        },
        {
          heading: "Pathophysiology",
          points: [
            "Absent neutrophils - no pus, minimal signs, fever often the only sign.",
            "Mucositis and gut translocation of Gram-negatives; line infections with Gram-positives; fungi after 7-10 days.",
          ],
        },
        {
          heading: "Initial assessment (first hour)",
          points: [
            "Triage on suspicion; vitals, NEWS2, lactate; give the first dose of antibiotic within 60 minutes.",
            "Two sets of blood cultures (line and peripheral), CBC, renal and liver tests, urine culture, chest X-ray; malaria and dengue tests in season.",
            "Search mouth, lungs, skin, line sites and perianal area; no rectal examination.",
          ],
        },
        {
          heading: "Risk stratification",
          points: [
            "MASCC score: burden of illness 5/3, no hypotension 5, no COPD 4, solid tumour or no prior fungal infection 4, no dehydration 3, outpatient 3, age under 60 2; 21 or more = low risk.",
            "CISNE for stable solid tumour; IDSA clinical high-risk features override the score.",
          ],
        },
        {
          heading: "Treatment - low risk",
          points: [
            "Oral ciprofloxacin 750 mg BD plus amoxicillin-clavulanate 625 mg TDS after 4 h observation, with 24-48 h review; not if on FQ prophylaxis.",
          ],
        },
        {
          heading: "Treatment - high risk",
          points: [
            "Piperacillin-tazobactam 4.5 g IV 6-hourly or cefepime 2 g IV 8-hourly; meropenem 1 g 8-hourly if ESBL likely or septic shock.",
            "Add vancomycin only for specific indications; ceftazidime-avibactam plus aztreonam for NDM CRE per antibiogram.",
            "Fever at 4-7 days: CT chest, galactomannan, empirical caspofungin or liposomal amphotericin B.",
            "Stop after 72 h apyrexia if stable and no source (ECIL-4); remove infected lines.",
          ],
        },
        {
          heading: "Prevention and referral",
          points: [
            "Levofloxacin prophylaxis in high-risk only; posaconazole in AML induction; primary G-CSF if regimen FN risk 20% or more.",
            "Refer to the oncology centre after stabilisation and the first dose; neutropenic alert card and patient education.",
          ],
        },
      ],
      mustDraw: ["Flow chart: fever after chemotherapy - first dose in 60 min - MASCC - low-risk oral vs high-risk IV - reassess at 48-72 h - antifungal at 4-7 days", "MASCC score table"],
      markSplit: [
        { part: "Definition and burden", marks: 1 },
        { part: "Initial assessment and investigations", marks: 2 },
        { part: "Risk stratification (MASCC)", marks: 2 },
        { part: "Empirical antibiotic management", marks: 3 },
        { part: "Persistent fever, duration and prevention", marks: 2 },
      ],
      keywords: ["febrile neutropenia", "MASCC", "piperacillin-tazobactam", "cefepime", "empirical antifungal", "ECIL-4"],
    },
    {
      id: "infectious-fever-fever-immunocompromised-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on screening and prophylaxis before starting biologic therapy.",
      openingLines: [
        "Biologics such as anti-TNF agents, rituximab and JAK inhibitors reactivate latent infections - chiefly tuberculosis, hepatitis B and herpes zoster.",
        "Screening and prophylaxis before the first dose prevent most of these infections and is mandatory standard of care.",
      ],
      answer: [
        {
          heading: "Tuberculosis",
          points: [
            "Symptom screen, IGRA or TST and chest X-ray; exclude active TB.",
            "Latent TB: TPT (3HP, 4R or 6H) at least 1 month before anti-TNF; complete the course.",
          ],
        },
        {
          heading: "Hepatitis B and other viruses",
          points: [
            "HBsAg, anti-HBc, anti-HBs; HBsAg-positive or anti-HBc-positive on anti-CD20 - entecavir or tenofovir until 12-18 months after therapy.",
            "Anti-HCV and HIV testing; VZV serology.",
          ],
        },
        {
          heading: "Vaccination",
          points: [
            "Inactivated vaccines 2 weeks before, live vaccines 4 weeks before; influenza yearly, pneumococcal, recombinant zoster vaccine, hepatitis B if non-immune.",
          ],
        },
        {
          heading: "Other prophylaxis and counselling",
          points: [
            "Cotrimoxazole for PJP with prednisolone 20 mg/day or more for 4 weeks or more; ivermectin for Strongyloides risk before high-dose steroids.",
            "Hold biologic during serious infection; report fever early.",
          ],
        },
      ],
      mustDraw: ["Table: test - positive result - action before biologic"],
      markSplit: [
        { part: "TB screening and TPT", marks: 2 },
        { part: "HBV and other viral screening", marks: 1.5 },
        { part: "Vaccination and other prophylaxis", marks: 1.5 },
      ],
      keywords: ["anti-TNF", "IGRA", "TPT", "HBV reactivation", "rituximab", "recombinant zoster vaccine"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Infections in patients with cancer; Infections in transplant recipients",
    "Freifeld AG et al. IDSA Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer, 2010 update",
    "Taplitz RA et al. Outpatient Management of Fever and Neutropenia in Adults Treated for Malignancy: ASCO/IDSA Guideline Update, 2018; and Antimicrobial Prophylaxis ASCO/IDSA, 2018",
    "Averbuch D et al. ECIL-4 European guidelines for empirical antibacterial therapy for febrile neutropenic patients, 2013",
    "ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 2nd edition, 2022; ICMR AMRSN Annual Report 2023",
    "IDSA Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections, 2024",
    "AGA Clinical Practice Guideline on Prevention and Treatment of Hepatitis B Virus Reactivation, 2025; ACR Guideline for Vaccinations in Rheumatic and Musculoskeletal Diseases, 2022",
    "NTEP Guidelines for Programmatic Management of TB Preventive Treatment in India, 2021; WHO Consolidated Guidelines on TB Module 1: Prevention, 2024",
  ],
});

export default topics;
