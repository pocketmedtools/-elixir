import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "infectious-fever-je-aes",
  title: "Japanese encephalitis and acute encephalitis syndrome",
  oneLiner:
    "**Acute encephalitis syndrome (AES)** is **acute fever with altered mental status and/or new seizures** in a person of any age at any time of year; in India its leading treatable causes are **scrub typhus, Japanese encephalitis (JE, a Culex-borne flavivirus with pigs as amplifiers), HSV, dengue, malaria and litchi-associated hypoglycaemic encephalopathy** - so every AES child gets a **bedside glucose, empirical doxycycline or azithromycin and acyclovir** while JE, which has no antiviral, is prevented by **JE vaccine under UIP**.",
  frequency: "core",
  keywords: [
    "JE",
    "AES",
    "Japanese B encephalitis",
    "chamki bukhar",
    "litchi encephalopathy",
    "hypoglycin A",
    "MCPG",
    "Muzaffarpur",
    "Gorakhpur",
    "Culex tritaeniorhynchus",
    "SA 14-14-2",
    "JENVAC",
    "JEEV",
    "Chandipura virus",
    "scrub typhus encephalitis",
    "NPPCJA",
    "MAC-ELISA",
    "thalamic lesions",
    "acyclovir",
    "Dastak campaign",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**AES (WHO/NCVBDC syndromic case definition)**: a person of **any age, at any time of year**, with **acute onset of fever** and a **change in mental status** (confusion, disorientation, coma, inability to talk) **and/or new-onset seizures**, excluding simple febrile seizures. [WHO JE surveillance standard 2018]",
        "**Laboratory-confirmed JE** is an AES case with **JE-specific IgM in CSF (preferred) or serum** by MAC-ELISA, or JE RNA or antigen, in a person **not recently vaccinated** against JE. [WHO JE surveillance standard 2018]",
        "**Japanese encephalitis** is the commonest vaccine-preventable cause of viral encephalitis in Asia: about **68,000 clinical cases a year** in **24 countries** of the WHO South-East Asia and Western Pacific regions, with over **3 billion people at risk**. [WHO JE fact sheet 2024]",
        "Only about **1 in 250 infections** is symptomatic, but of those with encephalitis the **case fatality is 20-30%** and **30-50% of survivors** have lasting neurological, cognitive or psychiatric sequelae. [Harrison 22e]",
        "**India**: JE was first recognised in **Vellore (1955)**; the large **Bankura, West Bengal epidemic (1973)** and the **Gorakhpur, Uttar Pradesh epidemic (2005, over 6000 cases and 1500 deaths)** made it a national priority. [NCVBDC]",
        "AES and JE are reported from most states, but the burden is concentrated in **Uttar Pradesh (Gorakhpur division), Bihar, Assam, West Bengal and Tamil Nadu**, with a **monsoon and post-monsoon peak (June-November)**; Assam peaks earlier in June-July. [NCVBDC]",
        "JE explains only a **minority (roughly 5-20%) of AES** in India today, because vaccination has reduced it while **scrub typhus, dengue, HSV, enteroviruses and non-infectious causes** fill the rest - so AES is a syndrome to work up, not a synonym for JE. [ICMR]",
        "**Muzaffarpur, Bihar** has a separate seasonal AES (**May-July**, litchi harvest) in young undernourished children, shown to be a **non-inflammatory hypoglycaemic encephalopathy** linked to litchi toxins; over **150 child deaths** occurred in the **2019** season. [Lancet Glob Health 2017]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**JE virus** is a single-stranded positive-sense RNA **flavivirus** (same family as dengue, West Nile and Zika); **genotype III** historically dominated India, with **genotype I** now co-circulating. [Harrison 22e]",
        "**Vector**: mainly **Culex tritaeniorhynchus** (also C. vishnui and C. gelidus), which breeds in **flooded rice paddies and irrigation ditches** and bites outdoors at **dusk and night**. [NCVBDC]",
        "**Enzootic cycle**: **ardeid birds (herons, egrets)** are maintenance hosts and **pigs are amplifying hosts** with high viraemia; **humans and horses are dead-end hosts** whose viraemia is too low to infect mosquitoes, so there is no person-to-person spread. [Harrison 22e]",
        "**Risk factors for JE**: rural residence near **paddy fields and pigsties**, age **under 15 years** in endemic areas (adults are immune by exposure), outdoor sleeping, monsoon season and **lack of JE vaccination**; in newly affected areas (Assam) adults are also hit. [WHO 2024]",
        "**Other infectious causes of AES in India**: **scrub typhus**, dengue, **HSV-1**, enteroviruses, measles, mumps, VZV, **Chandipura virus** (sandfly-borne rhabdovirus), **Nipah**, West Nile, rabies, **cerebral malaria**, tuberculous and bacterial meningitis. [ICMR]",
        "**Non-infectious AES**: **litchi-associated hypoglycaemic encephalopathy**, autoimmune encephalitis (**anti-NMDAR**), ADEM, toxic and metabolic encephalopathy (pesticides, Reye syndrome, hepatic or uraemic), heat stroke and sepsis-associated encephalopathy. [ICMR]",
        "**Risk factors for litchi encephalopathy**: child aged **1-10 years**, **undernutrition**, spending the day in **litchi orchards eating fruit (matched OR 9.6)** and **skipping the evening meal (OR 2.2)**; onset is typically **in the early morning**. [Lancet Glob Health 2017]",
      ],
    },
    {
      heading: "Pathophysiology",
      points: [
        "After the bite, JE virus replicates in **dermal and lymphoid tissue**, produces a brief low viraemia, and crosses the **blood-brain barrier** through endothelium; most infections are cleared by **neutralising antibody** before neuroinvasion - hence the 1:250 ratio. [Harrison 22e]",
        "JE virus has a **tropism for the thalamus, basal ganglia, substantia nigra, brainstem and anterior horn cells** - which explains the **parkinsonian features, dystonia, coma, breathing irregularity and poliomyelitis-like flaccid paralysis**. [Harrison 22e]",
        "Neuronal death is driven by direct viral cytopathy plus **microglial activation and cytokine storm (TNF-alpha, IL-6)**; the result is **cerebral oedema, raised intracranial pressure and seizures**, the usual immediate causes of death. [Harrison 22e]",
        "**SIADH** and cerebral salt wasting are common in encephalitis and produce **hyponatraemia**, which lowers the seizure threshold and worsens oedema - so sodium is checked on admission and daily. [IAP]",
        "**Litchi toxins**: unripe litchi contains **hypoglycin A** and **methylenecyclopropylglycine (MCPG)**, whose metabolites block **fatty-acid beta-oxidation** and **gluconeogenesis**; a child with little glycogen who misses dinner cannot raise glucose overnight and develops **hypoglycaemia with a toxic encephalopathy** by dawn. [Lancet Glob Health 2017]",
        "Because litchi encephalopathy is **metabolic, not inflammatory**, the **CSF is normal (under 5 cells)** and the child may stay encephalopathic even after glucose is corrected, as accumulated acyl-carnitines are neurotoxic - the same mechanism as **Jamaican vomiting sickness (ackee)**. [Lancet Glob Health 2017]",
        "**Scrub typhus AES**: Orientia tsutsugamushi causes an **endothelial vasculitis** of the brain, producing meningoencephalitis with **lymphocytic CSF and low or normal glucose**; it responds within **48 hours to doxycycline or azithromycin** and does not respond to beta-lactams. [ICMR]",
        "**HSV-1 encephalitis** is a necrotising haemorrhagic encephalitis of the **medial temporal and orbitofrontal lobes**; untreated mortality is about **70%**, falling to under 20% with **early acyclovir** - the reason acyclovir is started before the PCR result. [Harrison 22e]",
      ],
    },
    {
      heading: "Classification and diagnostic criteria",
      points: [
        "**AES surveillance categories (NCVBDC)**: **suspected AES** (clinical case definition), **laboratory-confirmed JE**, **AES due to other agents** (scrub, dengue, HSV, etc.) and **AES of unknown cause** - every case is reported through **IDSP-IHIP**. [NCVBDC]",
        "**International Encephalitis Consortium (2013) criteria**: the major criterion is **altered mental status for 24 hours or more** with no other cause; **2 minor criteria = possible**, **3 or more = probable/confirmed** encephalitis. [IEC 2013]",
        "**Minor criteria (IEC 2013)**: **fever 38 C or more within 72 hours**, generalised or partial **seizures** not due to a known seizure disorder, **new focal neurological signs**, **CSF white cells 5/mm3 or more**, **neuroimaging** suggesting encephalitis, and an **EEG** abnormality consistent with encephalitis. [IEC 2013]",
        "**Clinical stages of JE**: **prodrome** (2-4 days of fever, headache, vomiting), **acute encephalitic stage** (altered sensorium, seizures, focal deficits, movement disorder), **late stage and sequelae** (recovery or persistent deficits). [Harrison 22e]",
        "**Severity at admission** is graded by the **Glasgow Coma Scale** (paediatric GCS in children): **GCS 8 or less**, status epilepticus, signs of herniation or shock define severe AES needing PICU or ICU. [IAP]",
        "**Litchi encephalopathy (operational)**: AES in a child from a litchi area in the season with **blood glucose under 70 mg/dL**, **normal CSF** and no other cause - used to trigger glucose protocols rather than as a formal criterion. [Lancet Glob Health 2017]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**Incubation of JE is 5-15 days**; the illness starts with **abrupt high fever, headache, vomiting and malaise**, often mistaken for an ordinary viral fever for 1-4 days. [Harrison 22e]",
        "The encephalitic stage brings **altered sensorium (drowsiness to coma), irritability, abnormal behaviour and seizures** - **seizures occur in most children** and fewer adults, and may be subtle (twitching, eye deviation). [Harrison 22e]",
        "Ask about **season, residence near paddy and pigs, JE vaccination**, recent forest or grass exposure (**scrub**), sandfly-infested mud houses (**Chandipura**), bat-bitten fruit or a sick contact (**Nipah**) and travel. [NCVBDC]",
        "In a Muzaffarpur-type case ask: **litchi eaten the previous day, missed evening meal**, onset **in the early morning (4-7 am)** with sudden seizures and unconsciousness, usually **without a prodromal fever**. [Lancet Glob Health 2017]",
        "**Clues for HSV**: **behaviour change, olfactory or gustatory hallucinations, aphasia, focal seizures** and a temporal-lobe picture; **clues for scrub**: fever over 5 days before encephalopathy, **eschar**, rash, breathlessness. [Harrison 22e]",
        "**Clues for autoimmune (anti-NMDAR) encephalitis**: young woman or child with **psychiatric symptoms, orofacial dyskinesia, autonomic instability and reduced speech** over days to weeks, often without high fever; ask about **ovarian teratoma**. [Graus criteria 2016]",
        "Ask for **drugs and toxins** (organophosphates, salicylates in Reye syndrome, alcohol), **diabetes and insulin use**, and **dog bite** (rabies) before labelling an infectious encephalitis. [ICMR]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "Start with **ABC, GCS, pupils and bedside capillary glucose** in the first 5 minutes - **hypoglycaemia is the one cause of coma that kills or maims within hours and is cured within minutes**. [IAP]",
        "**Signs of raised ICP**: **Cushing triad (hypertension, bradycardia, irregular breathing)**, unequal or sluggish pupils, decerebrate or decorticate posturing, papilloedema (often absent early) - each demands immediate ICP measures. [IAP]",
        "**JE**: **mask-like facies, tremor, cogwheel rigidity, choreoathetosis and dystonia** (thalamus and basal ganglia), opsoclonus, cranial nerve palsies, and **acute flaccid paralysis of a limb** (anterior horn cells). [Harrison 22e]",
        "**Neck stiffness** is present in many viral encephalitides but is more marked in **bacterial and tuberculous meningitis**; a purpuric rash points to **meningococcaemia**. [Harrison 22e]",
        "**Hunt for an eschar** in the axilla, groin, waistband and genitals, plus **lymphadenopathy and hepatosplenomegaly** - an eschar makes scrub typhus the working diagnosis. [ICMR]",
        "Look for **hepatomegaly with hypoglycaemia** (Reye-like), **jaundice and pallor** (cerebral malaria, leptospirosis), **parotid swelling** (mumps), a **vesicular rash** (VZV) and **hydrophobia or aerophobia** (rabies). [Harrison 22e]",
        "In litchi encephalopathy the child is **afebrile or mildly febrile**, with **sudden convulsions, coma and often decerebrate posturing**, but **no meningeal signs**; liver may be enlarged. [Lancet Glob Health 2017]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Bacterial meningitis**: abrupt fever, **neck stiffness, purpura**, CSF **neutrophils with glucose under 40 mg/dL** (or CSF:blood under 0.4) and high protein - give ceftriaxone without waiting. [Harrison 22e]",
        "**Tuberculous meningitis**: subacute over **more than 5 days**, cranial nerve palsies, **CSF lymphocytes with low glucose and protein over 100 mg/dL**, basal exudates and hydrocephalus on imaging. [Harrison 22e]",
        "**Cerebral malaria**: fever with coma in a malarious area, **positive smear or RDT**, hypoglycaemia, anaemia and retinopathy - give **IV artesunate** immediately. [WHO 2025]",
        "**HSV encephalitis**: focal temporal signs, **CSF red cells**, **temporal lobe T2/FLAIR hyperintensity** on MRI and **periodic lateralised epileptiform discharges** on EEG. [Harrison 22e]",
        "**Scrub typhus meningoencephalitis**: fever for 5-7 days before encephalopathy, eschar, **thrombocytopenia, transaminitis, ARDS** and a positive **scrub IgM ELISA**. [ICMR]",
        "**Litchi hypoglycaemic encephalopathy**: early-morning onset in summer, **low glucose, normal CSF** and no fever - treated by dextrose, not antimicrobials. [Lancet Glob Health 2017]",
        "**Chandipura**: rapid-onset fever, vomiting, seizures and coma in children **under 15** with death often **within 24-48 hours**, sandfly exposure in rural mud houses (Gujarat, Maharashtra, Andhra Pradesh). [WHO DON 2024]",
        "**Autoimmune encephalitis and ADEM**: subacute psychiatric or multifocal picture, **post-infectious or post-vaccinal** timing (ADEM), MRI showing large white-matter lesions (ADEM) and positive serum or CSF neuronal antibodies. [Graus criteria 2016]",
      ],
    },
    {
      heading: "Investigations - first line and advanced",
      points: [
        "**Immediately**: capillary and venous **glucose**, **malaria RDT plus smear**, CBC, **sodium, potassium, calcium**, creatinine, LFT, blood culture, and arterial or venous blood gas if breathing is abnormal. [NCVBDC]",
        "**Lumbar puncture** after excluding raised ICP clinically (or by CT): JE and viral AES give **lymphocytic pleocytosis 10-500 cells/mm3, protein 50-150 mg/dL, normal glucose**; defer LP in **GCS 8 or less, papilloedema, focal deficit, shock or bleeding** and start empirical treatment. [IAP]",
        "**JE IgM capture ELISA (MAC-ELISA)** on **CSF** (most specific) and **serum**; IgM appears by **day 3-7** of illness, so a **negative early serum** is repeated after day 7-10; **cross-reactivity with dengue** and recent vaccination can confuse serum results. [WHO JE surveillance standard 2018]",
        "Send in parallel **scrub typhus IgM ELISA**, **dengue NS1/IgM**, **leptospira IgM**, and CSF **HSV-1/2 PCR** - CSF HSV PCR is over **95% sensitive and specific**, but may be negative in the first 72 hours, so repeat if suspicion is high. [Harrison 22e]",
        "**Neuroimaging**: **MRI** is preferred - JE shows **bilateral thalamic T2/FLAIR hyperintensity (often haemorrhagic)** with basal ganglia, substantia nigra and brainstem involvement; HSV shows **medial temporal and insular** lesions; CT is used first if MRI is unavailable or to exclude a mass before LP. [Harrison 22e]",
        "**EEG** helps in non-convulsive status (common in comatose encephalitis) and shows **PLEDs** in HSV; anti-NMDAR encephalitis may show an **extreme delta brush** pattern. [Harrison 22e]",
        "**Referral labs**: AES samples go to **sentinel sites and apex labs (ICMR-NIV Pune and its Gorakhpur unit, VRDL network)** for JE, enterovirus, Chandipura and Nipah testing; **autoimmune panels** (anti-NMDAR in CSF) when infection is negative. [NCVBDC]",
      ],
    },
    {
      heading: "Management in OPD / primary care",
      points: [
        "Any child or adult with **fever plus altered sensorium or new seizures** is an **AES emergency**: stabilise and refer to the nearest **AES treatment centre (designated PHC/CHC, district hospital or medical college)** - the first hour decides outcome. [NCVBDC]",
        "**Check glucose before transfer**; if under **70 mg/dL** (or unmeasurable and the child is comatose), give **10% dextrose 5 mL/kg IV** in children (adults 25% dextrose 100 mL or 50% dextrose 50 mL), and continue a **dextrose-containing infusion** during transfer. [Bihar AES SOP]",
        "**Stop a seizure before transfer**: **midazolam 0.2 mg/kg intranasal or buccal (max 10 mg)** or **IV lorazepam 0.1 mg/kg (max 4 mg)** / IV diazepam 0.2-0.3 mg/kg; place in **recovery position**, give oxygen. [IAP]",
        "**Give the first dose of empirical treatment if transfer will take over 1 hour**: **ceftriaxone 100 mg/kg (max 2 g) IV/IM** plus **doxycycline** or **azithromycin 10 mg/kg** for scrub typhus; give **artesunate** if the RDT is positive. [ICMR]",
        "Treat **fever with paracetamol 15 mg/kg** and tepid sponging; **avoid aspirin** (Reye syndrome) and NSAIDs until dengue is excluded. [IAP]",
        "Community health workers (ASHA) are trained to recognise **chamki bukhar**, feed a sugar solution to a conscious child, and arrange **free transport (108/102 ambulance)** to the nearest centre - the Bihar and Uttar Pradesh model. [Bihar AES SOP]",
      ],
    },
    {
      heading: "Management in IPD / emergency",
      points: [
        "**Airway and breathing**: intubate for **GCS 8 or less**, loss of airway reflexes, status epilepticus or respiratory failure; keep **SpO2 94-98%** and **PaCO2 35-40 mmHg** (avoid hyperventilation except for impending herniation). [IAP]",
        "**Circulation and fluids**: treat shock with isotonic crystalloid boluses; otherwise give **normal-saline-based maintenance with 5-10% dextrose at about two-thirds of maintenance** only if SIADH is present, and keep **sodium 135-145 mmol/L**. [IAP]",
        "**Raised ICP**: head end **15-30 degrees**, neutral neck, normothermia, normoglycaemia; **mannitol 20% 0.5-1 g/kg IV over 20 minutes** 6-8 hourly or **3% saline 5-10 mL/kg** then 0.1-1 mL/kg/hour, targeting serum sodium 145-155 mmol/L. [IAP]",
        "**Seizures and status epilepticus**: benzodiazepine, then **levetiracetam 40-60 mg/kg IV (max 4.5 g)**, **fosphenytoin 20 mg PE/kg** or **valproate 40 mg/kg**; refractory status needs midazolam infusion and EEG. [ESETT 2019]",
        "**Empirical antimicrobials until results**: **acyclovir 10 mg/kg IV 8-hourly** (20 mg/kg 8-hourly from 3 months to 12 years) for **14-21 days if HSV confirmed**; **ceftriaxone 100 mg/kg/day** until bacterial meningitis is excluded; and **doxycycline or azithromycin** for scrub typhus in all AES in endemic belts. [ICMR]",
        "**Scrub typhus AES with severity**: the **INTREST trial** found **IV doxycycline plus IV azithromycin** better than either alone for **severe scrub typhus**, so combination therapy is reasonable in scrub meningoencephalitis. [NEJM 2023]",
        "**JE itself has no proven antiviral**: trials of **ribavirin, interferon alfa-2a, IV immunoglobulin, minocycline and dexamethasone** showed **no mortality benefit**; care is supportive. [Harrison 22e]",
        "**Supportive care**: 2-hourly position change, eye care, NG feeding by 24-48 hours, bladder care, physiotherapy from day 1, and screening for **aspiration pneumonia** - nursing quality is a major determinant of survival. [NCVBDC]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Children under 15** carry most JE and almost all litchi AES; drug doses are by weight, and **doxycycline short courses are safe at any age** (no dental staining at 2.2 mg/kg 12-hourly for under 21 days). [AAP Red Book 2024]",
        "**Pregnancy**: JE in the first and second trimesters can cause **miscarriage and intrauterine infection**; use **azithromycin rather than doxycycline** for suspected scrub, acyclovir is safe, and **live SA 14-14-2 vaccine is contraindicated** (inactivated vaccine may be used if risk is high). [WHO JE position paper 2015]",
        "**Adults in newly endemic areas** (Assam, parts of West Bengal and Uttar Pradesh) have high JE attack rates and higher mortality, the reason for **adult JE vaccination campaigns (15-65 years)** in those districts. [NCVBDC]",
        "**Elderly and immunocompromised**: encephalitis may present with **confusion and little fever**; widen the search to **Listeria (add ampicillin), cryptococcus, CMV, VZV and TB**. [Harrison 22e]",
        "**Resource-limited settings**: where LP, MRI or PCR are unavailable, treat syndromically - **glucose, artesunate if RDT positive, ceftriaxone, doxycycline/azithromycin and acyclovir** - and refer; never delay dextrose or antibiotics for a test. [ICMR]",
        "**Travellers** to rural Asia for **over a month in the season**, or shorter trips with heavy rural exposure, should receive **inactivated Vero-cell JE vaccine** before travel. [CDC Yellow Book 2026]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Acute complications**: status epilepticus, **raised ICP with herniation**, aspiration pneumonia, **hyponatraemia**, upper GI bleed (stress ulcer), pressure sores and nosocomial sepsis. [Harrison 22e]",
        "**Case fatality** of JE encephalitis is **20-30%**, higher in infants and the elderly; **poor prognostic markers** are deep coma (GCS under 8), status epilepticus, **raised ICP**, respiratory failure and high CSF viral load. [Harrison 22e]",
        "**Sequelae in 30-50% of JE survivors**: **intellectual disability, behavioural change, epilepsy, parkinsonism and dystonia, motor deficits, speech and hearing loss** - a lifelong burden for families. [WHO 2024]",
        "**HSV encephalitis**: even with acyclovir, many survivors have **memory and behavioural deficits**, and about a quarter develop **post-HSV anti-NMDAR encephalitis** within weeks - a treatable cause of relapse. [Harrison 22e]",
        "**Litchi encephalopathy** has a high case fatality when glucose correction is delayed beyond **4 hours**; early dextrose markedly improves survival. [Lancet Glob Health 2017]",
        "**Chandipura** carries a case fatality of **up to 50-75%** in outbreaks, often within 48 hours of onset. [WHO DON 2024]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "**Refer immediately** every AES case to a centre with **paediatric or adult ICU** if GCS falls, seizures recur, shock or respiratory failure develops. [NCVBDC]",
        "**Monitor in hospital**: **GCS, pupils and vitals 1-2 hourly**, glucose **4-6 hourly** (hourly in litchi encephalopathy), sodium 12-24 hourly, input-output, and seizures charted. [IAP]",
        "**After discharge**: review at **2 weeks, 3 months and 6 months** for development, cognition, behaviour, hearing, vision, epilepsy and movement disorder; plan **anti-seizure drug withdrawal** after 1-2 seizure-free years. [IAP]",
        "Link survivors to **physical medicine and rehabilitation (PMR) departments and District Early Intervention Centres (DEIC under RBSK)** - rehabilitation is a named component of the NPPCJA. [NPPCJA]",
        "Report every case to **IDSP-IHIP within 24 hours** and send CSF and serum for JE IgM; a **cluster of AES** triggers a rapid response team investigation. [IDSP]",
      ],
    },
    {
      heading: "Prevention, counselling and the national programme",
      points: [
        "**JE vaccine in UIP**: live attenuated **SA 14-14-2** in endemic districts, **2 doses - at 9-12 months (with MR) and 16-24 months (with DPT booster)**; the campaign began in **2006** and routine use followed. [UIP / MoHFW]",
        "**Indian inactivated vaccines**: **JENVAC** (Bharat Biotech; Indian Kolar strain, Vero cell) and **JEEV** (Biological E; SA 14-14-2, Vero cell, the same product as IXIARO) - preferred in pregnancy and immunocompromise. [MoHFW]",
        "**Adult JE vaccination (15-65 years)** has been carried out in high-burden districts of **Assam, Uttar Pradesh and West Bengal** where adult cases were frequent. [NCVBDC]",
        "**NPPCJA (National Programme for Prevention and Control of JE/AES, 2014)** is a **multi-ministry convergence plan** covering vaccination, safe drinking water and sanitation, nutrition, vector control, early case management and **rehabilitation** in high-burden districts. [MoHFW 2014]",
        "**Vector control**: larvivorous fish, intermittent irrigation of paddies, **pigsties away from homes**, fogging in outbreaks, and personal protection (repellents, full sleeves, nets) - bednets help less because Culex bites outdoors at dusk. [NCVBDC]",
        "**Litchi AES prevention**: ensure children **eat an evening meal**, limit litchi eating (especially unripe fruit) in the season, and **give glucose to any child found unwell in the morning** - with this, Muzaffarpur deaths fell sharply. [Lancet Glob Health 2017]",
        "**Uttar Pradesh Dastak campaign (from 2018)**: door-to-door awareness, early referral, JE vaccination, sanitation and **empirical doxycycline or azithromycin** at peripheral AES centres - AES mortality in Gorakhpur division fell steeply. [UP NHM]",
      ],
    },
    {
      heading: "Latest guideline updates (2023-2026)",
      points: [
        "**INTREST trial (NEJM 2023)**: for **severe scrub typhus, IV doxycycline plus azithromycin** reduced the composite of death, complications and persisting illness at day 7 compared with either drug alone - relevant to scrub meningoencephalitis. [NEJM 2023]",
        "**WHO Chandipura disease outbreak news (2024)**: Gujarat reported the **largest Chandipura outbreak in 20 years** (about 245 AES cases with 82 deaths, June-August 2024), reinforcing **sandfly control** and Chandipura testing in AES. [WHO DON 2024]",
        "**WHO encephalitis technical brief (2024)**: calls encephalitis a neglected global syndrome, stresses **early acyclovir**, access to **MRI, EEG and CSF PCR**, vaccination (JE, measles) and **rehabilitation** for survivors. [WHO 2024]",
        "**WHO JE fact sheet (2024)** keeps the **inactivated Vero-cell, live attenuated and live recombinant** vaccines as acceptable, with a **single dose of live attenuated or recombinant** vaccine sufficient for long-term protection. [WHO 2024]",
        "**Bihar AES SOP (updated seasonally since 2019)**: mandatory **glucometer check and 10% dextrose** at every PHC, night-time ASHA visits during litchi season and free ambulance transfer. [Bihar AES SOP]",
        "**CDC Yellow Book (2026)** continues to recommend IXIARO for travellers to endemic Asia with prolonged or rural exposure, with the **accelerated 0, 7-day schedule for adults 18-65**. [CDC Yellow Book 2026]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Define **AES precisely** (fever plus altered sensorium and/or new seizures, any age, any season) - examiners penalise defining AES as JE. [WHO JE surveillance standard 2018]",
        "Name the **transmission cycle**: **Culex tritaeniorhynchus - pigs (amplifier) - ardeid birds (reservoir) - humans (dead end)**; a common error is to call humans the reservoir or Aedes the vector. [Harrison 22e]",
        "The classic MRI is **bilateral thalamic** involvement in JE versus **temporal lobe** involvement in HSV. [Harrison 22e]",
        "The single most important bedside test in AES is a **glucometer reading** - litchi encephalopathy is hypoglycaemia until proven otherwise. [Lancet Glob Health 2017]",
        "**Scrub typhus is the commonest treatable cause** of AES in eastern Uttar Pradesh; give **doxycycline or azithromycin** to every AES case in that belt. [ICMR]",
        "Common mistakes: giving **steroids** for JE, giving **aspirin** for fever, waiting for **HSV PCR before acyclovir**, and doing **LP in a deeply comatose child** with signs of herniation. [IAP]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs used in acute encephalitis syndrome",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Dextrose 10%", "Child 5 mL/kg IV bolus; adult 25% dextrose 100 mL or 50% dextrose 50 mL IV", "Then 10% dextrose-containing infusion; recheck glucose at 15-30 min and hourly", "Hyperglycaemia; thrombophlebitis with 25-50% solutions in small veins"],
        ["Acyclovir", "10 mg/kg IV 8-hourly over 1 hour (20 mg/kg 8-hourly from 3 months to 12 years)", "14-21 days if HSV confirmed; stop if CSF PCR negative and another cause found", "Crystal nephropathy - hydrate, adjust for eGFR; phlebitis; neurotoxicity in CKD"],
        ["Ceftriaxone", "100 mg/kg/day IV in 1-2 doses (max 4 g/day); adult 2 g IV 12-hourly", "Until bacterial meningitis excluded; 7-14 days if confirmed", "Biliary sludge; avoid with IV calcium in neonates; allergy"],
        ["Doxycycline", "Adult 100 mg 12-hourly oral/IV; child 2.2 mg/kg 12-hourly (max 100 mg)", "7 days (or 3 days after fever settles)", "Oesophagitis, photosensitivity; avoid in pregnancy"],
        ["Azithromycin", "Adult 500 mg IV/oral daily; child 10 mg/kg daily", "5 days (with doxycycline in severe scrub per INTREST)", "QT prolongation, GI upset; safe in pregnancy"],
        ["Mannitol 20%", "0.5-1 g/kg (2.5-5 mL/kg) IV over 20 minutes", "6-8 hourly for 24-72 hours; keep serum osmolality under 320 mOsm/kg", "Hypovolaemia, AKI, rebound oedema"],
        ["Hypertonic saline 3%", "5-10 mL/kg IV bolus then 0.1-1 mL/kg/hour", "Target sodium 145-155 mmol/L", "Hypernatraemia, osmotic demyelination if sodium was chronically low"],
        ["Levetiracetam", "40-60 mg/kg IV over 10-15 minutes (max 4.5 g); maintenance 10-30 mg/kg 12-hourly", "Second-line for status; continue during acute phase", "Behavioural change; reduce dose in CKD"],
      ],
    },
    {
      heading: "Causes of AES in India - clues and first test",
      columns: ["Cause", "Epidemiological clue", "Clinical clue", "Key test"],
      rows: [
        ["Japanese encephalitis", "Monsoon, paddy fields, pigs, unvaccinated child", "Parkinsonism, dystonia, flaccid limb", "JE IgM MAC-ELISA in CSF; MRI thalamic lesions"],
        ["Scrub typhus", "Grass, farm or forest exposure, monsoon to winter", "Fever over 5 days, eschar, ARDS, thrombocytopenia", "Scrub IgM ELISA; response to doxycycline in 48 h"],
        ["Litchi hypoglycaemic encephalopathy", "Muzaffarpur, May-July, missed dinner", "Early-morning seizures, little fever", "Glucose under 70 mg/dL; normal CSF"],
        ["HSV encephalitis", "Any season, any age", "Behaviour change, aphasia, focal seizures", "CSF HSV PCR; MRI temporal lobe"],
        ["Cerebral malaria", "Malarious district, travel", "Coma, hypoglycaemia, anaemia, jaundice", "Smear and RDT"],
        ["Chandipura virus", "Gujarat, Maharashtra, Andhra Pradesh; sandflies in mud houses", "Child under 15, death in 24-48 h", "RT-PCR at NIV"],
        ["Bacterial meningitis", "Any season; CSF leak, otitis", "Neck stiffness, purpura", "CSF neutrophils, low glucose, Gram stain, culture"],
        ["Autoimmune (anti-NMDAR)", "Young female, post-HSV", "Psychiatric onset, dyskinesia, dysautonomia", "CSF anti-NMDAR antibody; pelvic imaging"],
      ],
    },
    {
      heading: "CSF patterns in the comatose febrile patient",
      columns: ["Condition", "Cells (per mm3)", "Protein (mg/dL)", "Glucose"],
      rows: [
        ["Normal", "Under 5 lymphocytes", "15-45", "Over 60% of blood glucose"],
        ["Viral encephalitis (JE, HSV)", "10-500, lymphocytes (red cells in HSV)", "50-150", "Normal"],
        ["Bacterial meningitis", "Over 1000, neutrophils", "Over 200", "Low (CSF:blood under 0.4)"],
        ["Tuberculous meningitis", "50-500, lymphocytes", "100-500", "Low"],
        ["Scrub typhus meningoencephalitis", "10-300, lymphocytes", "Mildly raised", "Normal or mildly low"],
        ["Litchi encephalopathy / metabolic", "Under 5", "Normal", "Normal (blood glucose low)"],
      ],
    },
    {
      heading: "JE vaccines available in India",
      columns: ["Vaccine", "Type", "Schedule", "Notes"],
      rows: [
        ["SA 14-14-2 (Chengdu)", "Live attenuated, cell culture", "UIP: 0.5 mL SC at 9-12 months and 16-24 months", "Contraindicated in pregnancy and immunosuppression; one dose gives long protection"],
        ["JENVAC (Bharat Biotech)", "Inactivated Vero cell, Indian Kolar strain", "0.5 mL IM, 2 doses 4 weeks apart from 1 year", "Indigenous; usable in pregnancy if risk high"],
        ["JEEV (Biological E)", "Inactivated Vero cell, SA 14-14-2 strain", "1-3 years 0.25 mL IM, over 3 years 0.5 mL IM; days 0 and 28", "Same product as IXIARO used for travellers"],
        ["IXIARO (travellers)", "Inactivated Vero cell", "Days 0 and 28 (adults 18-65 may use 0 and 7); booster at 1 year if continued risk", "Complete at least 1 week before travel"],
        ["Mouse-brain derived (Nakayama)", "Inactivated", "Discontinued", "Withdrawn for ADEM and hypersensitivity"],
      ],
    },
    {
      heading: "JE versus HSV versus litchi encephalopathy",
      columns: ["Feature", "Japanese encephalitis", "HSV encephalitis", "Litchi encephalopathy"],
      rows: [
        ["Season and place", "Monsoon, paddy belts", "Any season, anywhere", "May-July, Muzaffarpur litchi belt"],
        ["Age", "Children under 15 in endemic areas", "Any age, bimodal", "1-10 years, undernourished"],
        ["Onset", "Prodrome 2-4 days then coma", "Days of behaviour change", "Sudden at dawn, no prodrome"],
        ["CSF", "Lymphocytic pleocytosis", "Lymphocytes plus red cells", "Normal"],
        ["MRI", "Bilateral thalami, basal ganglia", "Medial temporal, insula", "Diffuse oedema or normal"],
        ["Specific treatment", "None - supportive", "Acyclovir 10 mg/kg 8-hourly", "10% dextrose"],
        ["Prevention", "JE vaccine, vector control", "None", "Evening meal, limit litchi"],
      ],
    },
  ],
  redFlags: [
    "Blood glucose under 70 mg/dL in a drowsy or convulsing child - give dextrose now",
    "GCS 8 or less, or a fall of 2 or more points",
    "Seizure lasting over 5 minutes or repeated seizures without recovery",
    "Unequal pupils, abnormal posturing or Cushing triad - impending herniation",
    "Shock, irregular breathing or SpO2 under 94%",
    "Purpuric rash or neck stiffness with high fever - bacterial meningitis",
    "Cluster of AES cases in a village or a sick contact with Nipah-like illness - notify at once",
  ],
  pearls: [
    "AES is a syndrome; JE is one cause - and today scrub typhus is often the commoner one in eastern Uttar Pradesh.",
    "Culex tritaeniorhynchus, pigs amplify, herons maintain, humans are dead ends - no person-to-person spread of JE.",
    "Thalamus means JE; temporal lobe means HSV.",
    "In AES, check sugar first: Glucose, Artesunate if RDT positive, Ceftriaxone, Doxy/azithro, Acyclovir - GACDA.",
    "Litchi AES: hypoglycin A and MCPG block beta-oxidation - dawn onset, low sugar, normal CSF.",
    "JE has no antiviral; ribavirin, interferon, IVIG, minocycline and steroids all failed trials.",
    "UIP JE vaccine: SA 14-14-2 at 9-12 months and 16-24 months in endemic districts.",
    "One in 250 JE infections is symptomatic, but a quarter of those die and up to half of survivors are disabled.",
    "Never give aspirin to a febrile child with encephalopathy - Reye syndrome mimics AES.",
  ],
  mcqs: [
    {
      id: "infectious-fever-je-aes-q1",
      stem: "In the transmission cycle of Japanese encephalitis virus, which host acts as the principal amplifying host?",
      options: ["Pigs", "Humans", "Fruit bats", "Rodents"],
      answer: 0,
      explanation:
        "Pigs develop high-titre viraemia and amplify JE virus for Culex tritaeniorhynchus, which then bites humans; ardeid birds are maintenance hosts. Humans are dead-end hosts with low viraemia and do not transmit, fruit bats are the reservoir of Nipah not JE, and rodents are linked to leptospirosis and scrub typhus.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-je-aes-q2",
      stem: "A 4-year-old undernourished child from Muzaffarpur is brought in June at 6 am with sudden seizures and unconsciousness after spending the previous day in an orchard and skipping dinner. Temperature is 37.8 C. What is the most important immediate step?",
      options: [
        "Lumbar puncture for JE IgM",
        "Intravenous acyclovir",
        "Capillary glucose and 10% dextrose if low",
        "CT scan of the brain",
      ],
      answer: 2,
      explanation:
        "This is the classic litchi-associated hypoglycaemic encephalopathy: hypoglycin A and MCPG block gluconeogenesis and beta-oxidation, so a fasting child becomes hypoglycaemic overnight. Checking glucose and giving 10% dextrose 5 mL/kg saves the brain within minutes. Lumbar puncture, CT and acyclovir all have a place in AES work-up but none corrects the lethal hypoglycaemia, and the CSF is usually normal.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-je-aes-q3",
      stem: "Which MRI finding is most characteristic of Japanese encephalitis?",
      options: [
        "Unilateral medial temporal lobe hyperintensity",
        "Ring-enhancing lesions at the grey-white junction",
        "Periventricular ovoid lesions perpendicular to the ventricles",
        "Bilateral thalamic T2/FLAIR hyperintensity, often haemorrhagic",
      ],
      answer: 3,
      explanation:
        "JE virus has a tropism for the thalamus, basal ganglia, substantia nigra and brainstem, so bilateral thalamic hyperintensity is its hallmark and explains the parkinsonian features. Medial temporal lobe involvement suggests HSV encephalitis, ring-enhancing lesions suggest neurocysticercosis, tuberculoma or abscess, and periventricular ovoid lesions suggest multiple sclerosis.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-je-aes-q4",
      stem: "A 9-year-old from Gorakhpur has had fever for 7 days followed by drowsiness and a seizure. Platelets are 60,000/mm3, ALT is 180 U/L and there is a small black scab in the groin. CSF shows 80 lymphocytes with normal glucose. Which empirical drug most directly treats the likely cause?",
      options: ["Ceftriaxone", "Doxycycline or azithromycin", "Ribavirin", "Dexamethasone"],
      answer: 1,
      explanation:
        "Fever before encephalopathy, eschar, thrombocytopenia and transaminitis point to scrub typhus meningoencephalitis, the commonest treatable AES cause in eastern Uttar Pradesh; Orientia is intracellular and responds to doxycycline or azithromycin within 48 hours. Ceftriaxone has no activity against Orientia, ribavirin has no proven benefit in JE or scrub, and dexamethasone does not help viral or rickettsial encephalitis.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-je-aes-q5",
      stem: "Regarding JE vaccination under India's Universal Immunization Programme, which statement is correct?",
      options: [
        "A single dose of inactivated vaccine is given at birth",
        "It is given at 6, 10 and 14 weeks with pentavalent vaccine",
        "Live SA 14-14-2 vaccine is given at 9-12 months and 16-24 months in endemic districts",
        "The live vaccine is preferred in pregnant women in endemic districts",
      ],
      answer: 2,
      explanation:
        "UIP gives live attenuated SA 14-14-2 vaccine in two doses - at 9-12 months with MR and at 16-24 months with the DPT booster - in JE-endemic districts, with adult campaigns in high-burden districts. It is not given at birth or with the primary pentavalent series, and live vaccines are contraindicated in pregnancy, when an inactivated Vero-cell vaccine such as JENVAC or JEEV is used if risk is high.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "infectious-fever-je-aes-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Define acute encephalitis syndrome. Discuss the aetiology, clinical approach and management of AES in India, and add a note on the prevention of Japanese encephalitis.",
      openingLines: [
        "Acute encephalitis syndrome is a clinical case definition: a person of any age, at any time of year, with acute fever and altered mental status and/or new-onset seizures (excluding simple febrile seizures).",
        "In India its main causes are scrub typhus, Japanese encephalitis, dengue, HSV, malaria and litchi-associated hypoglycaemic encephalopathy, and it is managed syndromically while specific tests are awaited.",
      ],
      answer: [
        {
          heading: "Definition and burden",
          points: [
            "WHO/NCVBDC AES definition; laboratory-confirmed JE by IgM in CSF or serum.",
            "JE: 68,000 cases a year in Asia; CFR 20-30%; sequelae in 30-50%.",
            "India: UP, Bihar, Assam, West Bengal, Tamil Nadu; monsoon peak; Muzaffarpur litchi season May-July.",
          ],
        },
        {
          heading: "Aetiology",
          points: [
            "Viral: JE, HSV, dengue, enterovirus, Chandipura, Nipah, measles, mumps, rabies.",
            "Bacterial/rickettsial: scrub typhus, pyogenic and TB meningitis; parasitic: cerebral malaria.",
            "Non-infectious: litchi hypoglycaemia, autoimmune encephalitis, ADEM, toxic-metabolic.",
          ],
        },
        {
          heading: "Clinical approach",
          points: [
            "History: season, exposure, vaccination, prodrome length, litchi and missed meal, eschar, behaviour change.",
            "Examination: GCS, pupils, ICP signs, eschar, movement disorder, meningism, rash, spleen.",
            "Investigations: glucose first, malaria RDT, CBC, sodium, LP (if safe), JE and scrub IgM, HSV PCR, MRI, EEG.",
          ],
        },
        {
          heading: "Management",
          points: [
            "ABC, glucose (10% dextrose 5 mL/kg if under 70 mg/dL), stop seizures, treat raised ICP (mannitol or 3% saline).",
            "Empirical acyclovir, ceftriaxone, doxycycline or azithromycin; artesunate if malaria.",
            "Supportive care, sodium control, nutrition, physiotherapy; no antiviral for JE.",
          ],
        },
        {
          heading: "Prevention of JE",
          points: [
            "UIP SA 14-14-2 at 9-12 and 16-24 months; inactivated JENVAC, JEEV; adult campaigns.",
            "Vector control, pigsties away from homes, personal protection; NPPCJA convergence; rehabilitation.",
          ],
        },
      ],
      mustDraw: [
        "Transmission cycle: Culex - pigs/ardeid birds - humans (dead end)",
        "Flow chart of AES management in the first hour",
      ],
      markSplit: [
        { part: "Definition and burden", marks: 1 },
        { part: "Aetiology", marks: 2 },
        { part: "Clinical approach and investigations", marks: 3 },
        { part: "Management", marks: 3 },
        { part: "Prevention", marks: 1 },
      ],
      keywords: ["AES", "JE", "scrub typhus", "litchi", "acyclovir", "SA 14-14-2", "NPPCJA"],
    },
    {
      id: "infectious-fever-je-aes-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on litchi-associated acute encephalitis syndrome in Muzaffarpur.",
      openingLines: [
        "Litchi-associated AES is a non-inflammatory hypoglycaemic encephalopathy of young undernourished children in the Muzaffarpur litchi belt during May-July.",
        "It is caused by hypoglycin A and MCPG in litchi fruit, which block gluconeogenesis and fatty-acid oxidation when the evening meal is skipped.",
      ],
      answer: [
        {
          heading: "Epidemiology and cause",
          points: [
            "Children 1-10 years, undernourished, orchard exposure; litchi eating (OR 9.6) and missed dinner (OR 2.2).",
            "Toxins hypoglycin A and MCPG; similar to ackee poisoning.",
          ],
        },
        {
          heading: "Clinical features and diagnosis",
          points: [
            "Sudden early-morning seizures and coma, little fever, no meningism.",
            "Blood glucose under 70 mg/dL, normal CSF, toxin metabolites in urine.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Glucometer at every PHC; 10% dextrose 5 mL/kg then infusion; seizure control; ICU care.",
            "Empirical antimicrobials until infection excluded.",
          ],
        },
        {
          heading: "Prevention",
          points: [
            "Evening meal for every child, limit litchi, ASHA visits, free ambulance - Bihar AES SOP.",
          ],
        },
      ],
      mustDraw: ["Mechanism: MCPG and hypoglycin A blocking beta-oxidation and gluconeogenesis"],
      markSplit: [
        { part: "Cause and epidemiology", marks: 1.5 },
        { part: "Clinical features and diagnosis", marks: 1.5 },
        { part: "Management and prevention", marks: 2 },
      ],
      keywords: ["litchi", "hypoglycin A", "MCPG", "hypoglycaemia", "Muzaffarpur", "chamki bukhar"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Arthropod-borne and rodent-borne virus infections; Encephalitis",
    "WHO Japanese encephalitis fact sheet, 2024; WHO Vaccine-Preventable Diseases Surveillance Standards: Japanese encephalitis, 2018",
    "WHO position paper on Japanese encephalitis vaccines, Weekly Epidemiological Record, 2015",
    "NCVBDC (MoHFW) guidelines for prevention, control and clinical management of AES/JE; National Programme for Prevention and Control of JE/AES, 2014",
    "Shrivastava A et al. Association of acute toxic encephalopathy with litchi consumption in an outbreak in Muzaffarpur, India, 2014. Lancet Global Health, 2017",
    "Varghese GM et al. Doxycycline, azithromycin, or both for severe scrub typhus (INTREST). New England Journal of Medicine, 2023",
    "Venkatesan A et al. International Encephalitis Consortium case definitions and diagnostic algorithms, Clinical Infectious Diseases, 2013",
    "WHO Disease Outbreak News: Chandipura virus - India, 2024",
  ],
});

export default topics;
