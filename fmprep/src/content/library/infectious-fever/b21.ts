import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "infectious-fever-strongyloides",
  title: "Strongyloidiasis and hyperinfection",
  frequency: "less-common",
  oneLiner:
    "**Strongyloidiasis** is infection with the soil-transmitted nematode **Strongyloides stercoralis**, which alone among human helminths completes its life cycle inside the host by **autoinfection** and so persists for decades; when cell-mediated immunity falls - above all with **corticosteroids** or **HTLV-1** - it explodes into **hyperinfection or disseminated disease with Gram-negative sepsis** (mortality up to 60-85%), which is why anyone from an endemic area should be **screened or given ivermectin before steroids**.",
  keywords: [
    "Strongyloides stercoralis",
    "strongyloidiasis",
    "hyperinfection syndrome",
    "disseminated strongyloidiasis",
    "autoinfection",
    "larva currens",
    "filariform larva",
    "rhabditiform larva",
    "ivermectin",
    "albendazole",
    "HTLV-1",
    "corticosteroid-induced hyperinfection",
    "agar plate culture",
    "Baermann technique",
    "Strongyloides serology",
    "Gram-negative meningitis",
    "eosinophilia",
    "pre-emptive ivermectin",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Strongyloidiasis** is infection by the intestinal nematode **Strongyloides stercoralis** (and rarely **S. fuelleborni** in Africa and Papua New Guinea); it is classed by WHO as a **soil-transmitted helminth** and a neglected tropical disease. [WHO 2020]",
        "The global burden is estimated at about **600 million infections** (Buonfrate 2020 modelling: 614 million), concentrated in South-East Asia, sub-Saharan Africa and the Western Pacific - far more than older estimates of 30-100 million. [Buonfrate 2020]",
        "**South-East Asia including India** carries the largest share of the global burden; Indian stool surveys report low single-digit prevalence, but these use **direct microscopy**, which misses most light infections, so the true burden is underestimated. [Harrison 22e]",
        "Higher rates are reported from **rural, humid and agricultural settings** - the North-East, tea-garden workers of Assam, Kerala, coastal Odisha and West Bengal - and in institutionalised people with poor sanitation. [Harrison 22e]",
        "The infection is **lifelong without treatment** because of autoinfection - cases have presented with hyperinfection **more than 40-60 years** after leaving an endemic area (e.g. Second World War prisoners of war in South-East Asia). [Harrison 22e]",
        "Most chronic infections (about **50-70%**) are **asymptomatic or minimally symptomatic**, so the first presentation may be fatal hyperinfection after an innocent steroid course. [Mandell 9e]",
        "The **COVID-19 pandemic** produced a cluster of reports of hyperinfection after **dexamethasone and tocilizumab**, renewing the advice to screen or treat empirically before immunosuppression in endemic regions. [Stauffer 2020]",
      ],
    },
    {
      heading: "Aetiology, life cycle and risk factors",
      points: [
        "**Free-living cycle**: rhabditiform larvae passed in stool develop in warm moist soil into free-living adults or directly into infective **filariform (L3) larvae**, which **penetrate intact skin** (bare feet, hands in soil). [Harrison 22e]",
        "**Parasitic cycle**: larvae travel by blood to the lungs, ascend the airways, are swallowed and mature into **parthenogenetic females** embedded in the **duodenal and jejunal mucosa**; there are no parasitic males. [Harrison 22e]",
        "Eggs hatch **inside the mucosa**, so the stool contains **rhabditiform larvae, not eggs** - the single most tested diagnostic fact (S. fuelleborni is the exception and passes eggs). [Harrison 22e]",
        "**Autoinfection**: some rhabditiform larvae moult into filariform larvae **within the gut** and re-penetrate the **colonic mucosa (internal) or perianal skin (external)**, so the worm burden is maintained without new exposure. [Mandell 9e]",
        "**Corticosteroids at any dose and duration** are the single most important trigger of hyperinfection - reported after prednisolone 20 mg or more for as little as **6-17 days**, after pulse methylprednisolone and after dexamethasone for COVID-19 or cerebral oedema. [Mandell 9e]",
        "**HTLV-1 coinfection** skews immunity towards Th1 with high interferon-gamma, suppressing the Th2/IgE/eosinophil response that contains the worm; it causes recurrent and refractory infection and treatment failure. [Harrison 22e]",
        "Other risk factors: **solid-organ and stem-cell transplantation**, haematological malignancy, chemotherapy, **biologics (anti-TNF, tocilizumab)**, alcohol use disorder, malnutrition, hypogammaglobulinaemia, diabetes and CKD. [Mandell 9e]",
        "**HIV** is surprisingly **not a major risk factor** for hyperinfection in most series, though cases occur, particularly with **IRIS** after ART. [Harrison 22e]",
        "Transmission may also occur through a **transplanted organ** from an infected donor, and rarely person-to-person in institutions and by sexual (oro-anal) contact. [Mandell 9e]",
      ],
    },
    {
      heading: "Pathophysiology - why steroids are dangerous",
      points: [
        "Control of autoinfection depends on a **Th2 response** - IL-4, IL-5, IL-13, **eosinophils, mast cells and IgE** - that kills migrating larvae in the mucosa; anything that blunts this lets autoinfection accelerate. [Harrison 22e]",
        "Steroids cause **eosinopenia** and lymphocyte apoptosis, and are thought to act like **ecdysteroids (moulting hormones)**, directly speeding the change of rhabditiform to filariform larvae - so larval numbers rise exponentially. [Mandell 9e]",
        "**Hyperinfection** is accelerated autoinfection with a massive larval load confined to the **normal migratory route (gut, peritoneum, lungs)**; **dissemination** means larvae in organs outside it - CNS, liver, kidney, heart, skin. [Mandell 9e]",
        "Penetrating filariform larvae **carry enteric bacteria** on their surface and through ulcerated mucosa, producing **Gram-negative bacteraemia, E. coli or Klebsiella meningitis and polymicrobial sepsis** - the usual cause of death. [Harrison 22e]",
        "Massive mucosal invasion gives **oedema, ulceration and malabsorption**, protein-losing enteropathy and **paralytic ileus or small-bowel obstruction**; in the lung, larval migration causes **alveolar haemorrhage, pneumonitis and ARDS**. [Mandell 9e]",
        "**Eosinophilia is usually absent in hyperinfection** (steroids, sepsis), so a normal eosinophil count never excludes it; persistent eosinophilia in a treated patient suggests ongoing infection. [Harrison 22e]",
        "**Larva currens** is an urticarial hypersensitivity track produced by filariform larvae migrating through the dermis during external autoinfection; it moves **5-10 cm per hour**, far faster than hookworm larva migrans. [Harrison 22e]",
      ],
    },
    {
      heading: "Classification - clinical stages",
      points: [
        "**Acute infection**: local pruritus at the entry site, then **Loeffler-like pneumonitis** (cough, wheeze, eosinophilia) at about 1-2 weeks and GI symptoms; larvae appear in stool after about **3-4 weeks**. [Harrison 22e]",
        "**Chronic infection**: asymptomatic or intermittent epigastric pain, diarrhoea, bloating, urticaria and larva currens with fluctuating **eosinophilia**; persists for decades. [Harrison 22e]",
        "**Hyperinfection syndrome**: increased larval load with **worsening GI and pulmonary disease** in an immunosuppressed host, with larvae in **sputum, BAL or stool in large numbers**. [Mandell 9e]",
        "**Disseminated strongyloidiasis**: larvae in **organs outside the gut-lung axis** (CNS, liver, kidney, skin); in practice it overlaps with hyperinfection and both carry high mortality. [Mandell 9e]",
        "Mortality of hyperinfection/dissemination is reported at **about 60% and up to 85%**, higher with Gram-negative bacteraemia, shock or delayed diagnosis. [Mandell 9e]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "Ask about **barefoot walking, farm or plantation work and childhood in a rural endemic area** - exposure may have been decades ago. [Harrison 22e]",
        "Chronic symptoms: **intermittent epigastric pain** mimicking peptic ulcer, diarrhoea alternating with constipation, bloating, weight loss, and recurrent **pruritic rash of buttocks and thighs**. [Harrison 22e]",
        "**Recurrent urticaria or wheeze** with unexplained eosinophilia, or asthma that **worsens when steroids are given**, is a classic clue. [Mandell 9e]",
        "Hyperinfection presents **days to weeks after starting steroids**: fever, abdominal pain, vomiting, diarrhoea or ileus, **GI bleeding**, cough, haemoptysis, breathlessness. [Mandell 9e]",
        "Then **Gram-negative sepsis or meningitis** - fever, headache, neck stiffness, confusion - in a steroid-treated patient from an endemic area; recurrent enteric bacteraemia with no source should prompt the diagnosis. [Harrison 22e]",
        "Atypical presentations: **SIADH-like hyponatraemia**, protein-losing enteropathy, unexplained **petechial or purpuric periumbilical rash**, and acute abdomen. [Mandell 9e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Larva currens**: a serpiginous, raised, intensely itchy urticarial line on the **buttocks, perineum, groins, thighs or lower trunk** that advances 5-10 cm per hour and fades in hours to days - essentially pathognomonic. [Harrison 22e]",
        "**Periumbilical 'thumbprint' purpura** (petechiae spreading from the umbilicus) is a sign of **disseminated** disease from dermal larval migration. [Mandell 9e]",
        "Look for **wheeze, crepitations and hypoxia** (larval pneumonitis, alveolar haemorrhage, ARDS). [Mandell 9e]",
        "Abdominal **distension with absent bowel sounds** suggests paralytic ileus; tenderness with guarding may indicate perforation or peritonitis. [Mandell 9e]",
        "**Meningism and altered sensorium** in a steroid-treated patient suggest Gram-negative meningitis secondary to hyperinfection. [Harrison 22e]",
        "Look for features of the underlying immunosuppression - **Cushingoid habitus**, transplant scar, lymphadenopathy - and of HTLV-1 (**spastic paraparesis**, adult T-cell leukaemia skin lesions). [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Hookworm**: eggs, not larvae, in fresh stool; skin entry causes ground itch, and **cutaneous larva migrans (animal hookworm)** moves only **1-2 cm per day**, usually on the feet. [Harrison 22e]",
        "In stool left standing, hookworm eggs hatch into rhabditiform larvae: Strongyloides larvae have a **short buccal canal and prominent genital primordium**; hookworm larvae have a **long buccal canal**. [Harrison 22e]",
        "**Tropical pulmonary eosinophilia** (filarial): nocturnal wheeze, eosinophils often over 3000/microL, **very high IgE** and high filarial antibody, with response to DEC. [Harrison 22e]",
        "**Ascaris Loeffler syndrome**: transient pneumonitis with eosinophilia; eggs appear in stool 6-8 weeks later; no autoinfection. [Harrison 22e]",
        "**ABPA, eosinophilic granulomatosis with polyangiitis, drug reactions and hypereosinophilic syndrome** - exclude Strongyloides before steroids for any of these. [Harrison 22e]",
        "Hyperinfection with Gram-negative sepsis mimics **intra-abdominal sepsis, typhoid, Klebsiella liver abscess or nosocomial sepsis** - the clue is steroids plus pulmonary infiltrates plus enteric bacteraemia. [Mandell 9e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**CBC**: eosinophilia (over 500/microL) in about **50-80% of chronic infections**, but often absent in hyperinfection; IgE may be raised. [Harrison 22e]",
        "**Stool microscopy** for rhabditiform larvae: a single direct smear detects only about **30% or less** of chronic infections because larval output is low and intermittent; examining **3 or more samples** improves yield. [Mandell 9e]",
        "**Agar plate culture (Koga)**: larvae crawl on the agar carrying bacteria, leaving **visible tracks** in 2-3 days - more sensitive than smear; **Baermann concentration** and formol-ether concentration also improve yield. [Mandell 9e]",
        "**Serology (IgG ELISA)** is the best screening test, sensitivity about **80-95%**; it cross-reacts with filariasis and other nematodes and may be falsely negative in severe immunosuppression and HTLV-1. [Mandell 9e]",
        "**Stool PCR** (real-time) is highly specific but its sensitivity in light infection is similar to or below serology; it is available in tertiary centres. [Mandell 9e]",
        "In suspected hyperinfection, examine **sputum, BAL, gastric aspirate and duodenal aspirate** - larvae are abundant; also send **blood cultures** and **CSF** (Gram-negative meningitis). [Harrison 22e]",
        "Duodenal or colonic biopsy may show larvae and adult females in crypts; **chest X-ray** may show migratory infiltrates or diffuse alveolar opacities. [Mandell 9e]",
        "Check **HTLV-1 serology** in recurrent, refractory or severe disease, and screen for the underlying immunosuppression (HIV, haematological malignancy). [Harrison 22e]",
      ],
    },
    {
      heading: "Management in OPD / primary care",
      points: [
        "**Treat every infection, even if asymptomatic**, because autoinfection makes it lifelong and steroids may be given later. [CDC 2024]",
        "Drug of choice: **ivermectin 200 microgram/kg orally once daily for 1-2 days** (CDC: 2 days); take on an empty stomach with water; tablets 3, 6 and 12 mg are available in India. [CDC 2024]",
        "**Ivermectin is superior to albendazole**: Cochrane review showed higher parasitological cure with ivermectin; albendazole **400 mg twice daily for 7 days** is the second-line option when ivermectin is unavailable. [Cochrane 2016]",
        "**Single-dose albendazole 400 mg** (as used on National Deworming Day) is **inadequate** for Strongyloides. [Cochrane 2016]",
        "Some experts repeat ivermectin after **2 weeks** (one autoinfection cycle) in immunocompromised patients and those with HTLV-1. [Mandell 9e]",
        "Follow-up: eosinophil count and serology fall over **6-12 months**; persistent eosinophilia or positive stool culture after treatment means retreatment and HTLV-1 testing. [Mandell 9e]",
        "Ivermectin is well tolerated; mild dizziness, nausea and pruritus occur; in travellers from **Central/West Africa**, exclude **Loa loa** microfilaraemia first because ivermectin can cause encephalopathy. [CDC 2024]",
      ],
    },
    {
      heading: "Pre-emptive strategy before steroids and immunosuppression",
      points: [
        "**Anyone who has lived in an endemic area (all of India counts)** due to receive high-dose or prolonged steroids, a biologic, chemotherapy or a transplant should be **screened or treated empirically**. [IDSA 2023]",
        "**Screen-and-treat**: serology with or without stool agar culture, and treat if positive - suitable for elective immunosuppression such as transplant work-up. [Mandell 9e]",
        "**Empirical ivermectin 200 microgram/kg once daily for 1-2 days** is reasonable when steroids are needed urgently or testing is unavailable, as it is cheap and safe. [Stauffer 2020]",
        "For **COVID-19 or other short urgent steroid courses** in endemic regions, empirical ivermectin was recommended by expert groups to prevent hyperinfection - an anti-helminthic use, not an antiviral one. [Stauffer 2020]",
        "For **transplant candidates**, screen donors from endemic areas and treat recipients before transplant; positive recipients may receive ivermectin again post-transplant. [AST IDCOP 2019]",
        "Do **not delay life-saving steroids** while waiting for results - give ivermectin alongside and watch for hyperinfection. [Mandell 9e]",
      ],
    },
    {
      heading: "Management of hyperinfection and dissemination (IPD / ICU)",
      points: [
        "**Admit to ICU-level care**; involve infectious diseases early; **reduce or stop immunosuppression** as far as possible, including steroids. [Mandell 9e]",
        "**Ivermectin 200 microgram/kg orally or by nasogastric tube once daily**, continued until stool and sputum are **negative for at least 2 weeks** (one autoinfection cycle), typically 2-3 weeks or longer. [CDC 2024]",
        "Some experts **add albendazole 400 mg twice daily** in severe disease, though benefit is unproven. [Mandell 9e]",
        "If **ileus or malabsorption** prevents oral absorption, **subcutaneous veterinary ivermectin** (200 microgram/kg) or rectal ivermectin has been used on a compassionate basis with case-report evidence. [Mandell 9e]",
        "Give **broad-spectrum antibiotics covering enteric Gram-negatives** (e.g. ceftriaxone 2 g IV 12-hourly for meningitis, or meropenem where ESBL is likely) after blood and CSF cultures; anaerobic and enterococcal cover as needed. [Harrison 22e]",
        "Supportive care: **ventilatory support for ARDS or alveolar haemorrhage**, nasogastric decompression for ileus, nutrition, correction of hyponatraemia and protein loss. [Mandell 9e]",
        "Monitor **daily sputum and stool for larvae**; contact precautions for stool and secretions, as hyperinfection material contains infective filariform larvae. [Mandell 9e]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: ivermectin safety data are limited; defer treatment of uncomplicated infection until after delivery or at least the first trimester, but **treat hyperinfection immediately** as benefit outweighs risk. [CDC 2024]",
        "**Lactation**: ivermectin passes into milk in small amounts; treatment is usually deferred in uncomplicated disease. [CDC 2024]",
        "**Children**: ivermectin is licensed for children **15 kg or more**; albendazole is used in smaller children with uncomplicated infection. [CDC 2024]",
        "**Transplant recipients**: hyperinfection often occurs in the **first 3 months** after transplant; donor-derived infection is described. [AST IDCOP 2019]",
        "**HTLV-1**: expect relapse; use repeated or prolonged ivermectin and long follow-up with stool culture. [Harrison 22e]",
        "**Elderly and institutionalised**: chronic infection may surface decades later with steroids for COPD, polymyalgia or rheumatoid arthritis - ask about early-life exposure. [Mandell 9e]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Gram-negative bacteraemia and meningitis** (E. coli, Klebsiella, Enterococcus, Streptococcus bovis) - the leading cause of death in hyperinfection. [Harrison 22e]",
        "**Pulmonary**: ARDS, diffuse alveolar haemorrhage, secondary pneumonia, respiratory failure. [Mandell 9e]",
        "**Gastrointestinal**: paralytic ileus, small-bowel obstruction, massive GI bleeding, perforation, protein-losing enteropathy and malabsorption. [Mandell 9e]",
        "Others: **SIADH**, eosinophilic or Gram-negative pericarditis, hepatic granulomas. [Mandell 9e]",
        "Chronic uncomplicated infection has an **excellent prognosis** with ivermectin (cure 80-95%); hyperinfection mortality remains **about 60-85%**, emphasising prevention. [Mandell 9e]",
      ],
    },
    {
      heading: "Referral, follow-up and prevention",
      points: [
        "**Refer** any steroid-treated patient with **fever, pulmonary infiltrates, ileus or Gram-negative bacteraemia** - hyperinfection is an emergency. [Mandell 9e]",
        "Follow treated chronic infection with **eosinophil count at 3-6 months** and serology at 6-12 months; stool agar culture if available. [Mandell 9e]",
        "Prevention: **footwear, sanitary latrines** (Swachh Bharat Mission) and hand hygiene interrupt soil transmission. [WHO 2020]",
        "**National Deworming Day** albendazole does not control Strongyloides; WHO now advocates **ivermectin-based** control in school-age children where prevalence is high. [WHO 2020]",
        "Counsel patients who have been treated to **tell any doctor before steroids** that they had Strongyloides. [Mandell 9e]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**WHO NTD Road Map 2021-2030** added strongyloidiasis as a target for control, with **ivermectin preventive chemotherapy** in school-age children where prevalence is 10% or more. [WHO 2020]",
        "**Cochrane 2016 review** (Henriquez-Camacho): ivermectin gives higher cure than albendazole, and equivalent cure to thiabendazole with fewer adverse effects - the basis for ivermectin first-line. [Cochrane 2016]",
        "**COVID-era recommendations (2020-2022)**: empirical ivermectin before dexamethasone in people from endemic regions to prevent hyperinfection, endorsed by several national societies. [Stauffer 2020]",
        "**IDSA/AST and ESCMID transplant infection guidance** reinforce screening of transplant candidates and donors from endemic areas. [AST IDCOP 2019]",
        "**Moxidectin**, a long-acting macrocyclic lactone, is under trial as a single-dose alternative to ivermectin; it is not yet a standard of care. [Harrison 22e]",
        "**NLEM 2022** lists ivermectin, improving access in public facilities in India. [NLEM 2022]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic question: **'Why does Strongyloides persist for decades?'** - autoinfection; no other common human helminth does it. [Harrison 22e]",
        "**Stool shows larvae, not eggs** (eggs hatch in the mucosa) - a favourite MCQ. [Harrison 22e]",
        "**Larva currens moves 5-10 cm/hour**; cutaneous larva migrans moves 1-2 cm/day. [Harrison 22e]",
        "**Absent eosinophilia does not exclude hyperinfection** - steroids suppress it. [Mandell 9e]",
        "**Hyperinfection plus Gram-negative meningitis** in a steroid-treated patient - the bugs ride on the larvae. [Harrison 22e]",
        "Common mistake: treating with **single-dose albendazole** and assuming cure; or giving steroids to an 'asthmatic' with eosinophilia without excluding Strongyloides. [Mandell 9e]",
        "**HTLV-1** is the viral co-factor; HIV is not a major one. [Harrison 22e]",
      ],
    },
  ],
  tables: [
    {
      heading: "Drug treatment of strongyloidiasis",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Ivermectin (first line)", "200 microgram/kg orally on empty stomach", "Once daily for 1-2 days (chronic); repeat at 2 weeks if immunocompromised", "Dizziness, nausea, pruritus; avoid in Loa loa microfilaraemia; limited data in pregnancy and children under 15 kg"],
        ["Ivermectin (hyperinfection)", "200 microgram/kg orally or by NG tube", "Daily until stool and sputum negative for at least 2 weeks", "Poor absorption in ileus - consider subcutaneous veterinary preparation (compassionate use)"],
        ["Albendazole (second line)", "400 mg orally twice daily with fatty food", "7 days; added to ivermectin in some severe cases", "Lower cure than ivermectin; hepatotoxicity, neutropenia with prolonged use; avoid in first trimester"],
        ["Empirical pre-steroid ivermectin", "200 microgram/kg orally", "Single dose or 2 daily doses before or with steroids", "Cheap and safe - do not delay life-saving steroids"],
        ["Antibiotics for associated sepsis", "Ceftriaxone 2 g IV 12-hourly (meningitis) or meropenem 1-2 g IV 8-hourly", "Per culture and site, typically 10-21 days", "Cover enteric Gram-negatives; adjust for ESBL/CRE"],
      ],
    },
    {
      heading: "Clinical stages of strongyloidiasis",
      columns: ["Stage", "Host", "Features", "Larval load / location", "Prognosis"],
      rows: [
        ["Acute", "Any", "Entry-site itch, Loeffler-like cough and wheeze, GI upset", "Migrating larvae; stool positive after 3-4 weeks", "Good"],
        ["Chronic", "Immunocompetent", "Asymptomatic or epigastric pain, diarrhoea, urticaria, larva currens, eosinophilia", "Low, intermittent; gut", "Excellent with ivermectin"],
        ["Hyperinfection", "Steroids, HTLV-1, transplant", "Fever, ileus, GI bleed, pneumonitis, ARDS, Gram-negative sepsis", "Massive; gut and lungs (normal route)", "Mortality about 60%"],
        ["Disseminated", "Severe immunosuppression", "As hyperinfection plus CNS, liver, kidney, purpuric rash", "Organs outside gut-lung axis", "Mortality up to 85%"],
      ],
    },
    {
      heading: "Differential diagnosis of helminth-related eosinophilia with skin or lung signs",
      columns: ["Condition", "Skin sign", "Lung picture", "Stool / blood clue", "Discriminator"],
      rows: [
        ["Strongyloidiasis", "Larva currens, buttocks, 5-10 cm/hour", "Loeffler-like; ARDS in hyperinfection", "Rhabditiform larvae, agar plate tracks", "Autoinfection; worsens with steroids"],
        ["Hookworm / cutaneous larva migrans", "Ground itch; CLM on feet, 1-2 cm/day", "Mild Loeffler", "Eggs in fresh stool; iron-deficiency anaemia", "No autoinfection"],
        ["Ascariasis", "None", "Transient Loeffler syndrome", "Eggs 6-8 weeks after lung phase", "Self-limiting pneumonitis"],
        ["Tropical pulmonary eosinophilia", "None", "Nocturnal wheeze, miliary mottling", "Eosinophils over 3000/microL, IgE very high, filarial antibody", "Responds to DEC"],
        ["ABPA", "None", "Central bronchiectasis, fleeting infiltrates", "Aspergillus-specific IgE, total IgE over 500 IU/mL", "Asthma or cystic fibrosis background"],
      ],
    },
    {
      heading: "Investigations and their performance",
      columns: ["Test", "What it shows", "Sensitivity / cut-off", "Use"],
      rows: [
        ["Eosinophil count", "Over 500/microL", "Present in 50-80% chronic; often absent in hyperinfection", "Clue only"],
        ["Direct stool microscopy (1 sample)", "Rhabditiform larvae", "30% or less", "Cheap; repeat 3 or more samples"],
        ["Agar plate culture / Baermann", "Larval tracks on agar / concentrated larvae", "Higher than smear", "Best stool method"],
        ["IgG ELISA serology", "Antibody", "About 80-95%; cross-reacts with filaria", "Screening before immunosuppression"],
        ["Stool real-time PCR", "Parasite DNA", "High specificity; variable sensitivity", "Tertiary confirmation"],
        ["Sputum / BAL / duodenal aspirate", "Filariform larvae in large numbers", "High in hyperinfection", "Diagnosis of hyperinfection"],
      ],
    },
  ],
  redFlags: [
    "Fever, abdominal pain or ileus in a patient on steroids who grew up in a rural endemic area",
    "Gram-negative bacteraemia or meningitis (E. coli, Klebsiella) with no obvious source in an immunosuppressed patient",
    "New pulmonary infiltrates, haemoptysis or ARDS with larvae in sputum",
    "Periumbilical purpuric (thumbprint) rash",
    "Upper GI bleeding or small-bowel obstruction in a transplant or chemotherapy patient",
    "Known HTLV-1 infection with recurrent strongyloidiasis",
    "Worsening 'asthma' with eosinophilia after steroids are started",
  ],
  pearls: [
    "Strongyloides is the only common human helminth that multiplies inside the host - **autoinfection** explains lifelong infection and hyperinfection.",
    "**Larvae, not eggs**, in stool.",
    "**Larva currens: 5-10 cm per hour** on buttocks and thighs; larva migrans: 1-2 cm per day on feet.",
    "**Ivermectin before steroids** in anyone from an endemic area - 'worm before wean (immunosuppression)'.",
    "Hyperinfection = **steroids + lungs + gut + Gram-negative sepsis**; eosinophils are often normal.",
    "**HTLV-1, not HIV**, is the classic viral co-factor.",
    "Treat hyperinfection with daily ivermectin **until 2 weeks of negative samples** - one full autoinfection cycle.",
    "Serology is the **screening** test; agar plate culture is the best stool test.",
  ],
  mcqs: [
    {
      id: "infectious-fever-strongyloides-q1",
      stem: "A 58-year-old farmer from Assam with COPD is given prednisolone 40 mg daily for an exacerbation. Ten days later he develops fever, abdominal distension, haemoptysis and E. coli meningitis. Which feature of the causative parasite best explains this presentation?",
      options: [
        "Autoinfection allowing larval numbers to multiply within the host",
        "Haematogenous spread of eggs from the portal venous system",
        "Release of a cardiotoxic exotoxin by adult worms",
        "Migration of adult worms from bowel to lung",
      ],
      answer: 0,
      explanation:
        "Strongyloides stercoralis completes its life cycle within the host by autoinfection; steroids accelerate this into hyperinfection, and penetrating larvae carry enteric Gram-negatives into blood and CSF. Egg embolisation to the portal system is the mechanism of schistosomiasis, not Strongyloides; there is no exotoxin; and it is larvae, not adult worms, that migrate to the lung.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-strongyloides-q2",
      stem: "In a fresh stool sample from a patient with chronic strongyloidiasis, which form of the parasite is typically seen?",
      options: [
        "Embryonated eggs",
        "Adult males and females",
        "Rhabditiform larvae",
        "Proglottids",
      ],
      answer: 2,
      explanation:
        "Strongyloides eggs hatch within the intestinal mucosa, so fresh stool contains rhabditiform larvae rather than eggs. Embryonated eggs are seen in hookworm and other nematodes, adult males do not exist in the parasitic cycle, and proglottids are segments of tapeworms such as Taenia.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-strongyloides-q3",
      stem: "A 45-year-old woman from rural Tamil Nadu is to start rituximab and high-dose prednisolone for vasculitis next week. Strongyloides serology is not available. What is the most appropriate step?",
      options: [
        "Single dose albendazole 400 mg",
        "Defer immunosuppression until three stool samples are negative",
        "No action unless eosinophilia is present",
        "Ivermectin 200 microgram/kg once daily for 2 days before starting immunosuppression",
      ],
      answer: 3,
      explanation:
        "Empirical ivermectin is cheap, safe and prevents hyperinfection in people from endemic areas who cannot be screened. Single-dose albendazole has poor efficacy against Strongyloides; stool microscopy is insensitive and delaying immunosuppression is unnecessary; and the absence of eosinophilia does not exclude infection.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-strongyloides-q4",
      stem: "Which viral infection is most strongly associated with refractory and recurrent Strongyloides hyperinfection?",
      options: [
        "HIV-1",
        "HTLV-1",
        "Hepatitis C virus",
        "Epstein-Barr virus",
      ],
      answer: 1,
      explanation:
        "HTLV-1 shifts immunity towards Th1 with high interferon-gamma, suppressing the Th2/IgE/eosinophil response that contains Strongyloides, causing hyperinfection and treatment failure. HIV, surprisingly, is not a major risk factor except during IRIS; hepatitis C and EBV have no specific association.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-strongyloides-q5",
      stem: "A renal transplant recipient with Strongyloides hyperinfection is started on ivermectin. For how long should ivermectin be continued?",
      options: [
        "Two doses 24 hours apart",
        "Until stool and sputum have been negative for at least 2 weeks",
        "A single dose repeated after 3 months",
        "Seven days, then switch to albendazole",
      ],
      answer: 1,
      explanation:
        "In hyperinfection ivermectin is given daily until stool and sputum are negative for at least 2 weeks, covering one autoinfection cycle. The 2-day course is for uncomplicated chronic infection, a 3-month repeat leaves the patient exposed during the most dangerous period, and switching to albendazole replaces the better drug with a less effective one.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "infectious-fever-strongyloides-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "less-common",
      question:
        "Describe the life cycle of Strongyloides stercoralis. Discuss the pathogenesis, clinical features, diagnosis and management of Strongyloides hyperinfection syndrome, and outline its prevention in patients receiving corticosteroids.",
      openingLines: [
        "Strongyloidiasis is infection with the soil-transmitted nematode Strongyloides stercoralis, which uniquely completes its life cycle within the host by autoinfection and so persists for decades.",
        "In the immunosuppressed - especially with corticosteroids or HTLV-1 - autoinfection accelerates into hyperinfection or dissemination with Gram-negative sepsis, carrying mortality of 60-85%.",
      ],
      answer: [
        {
          heading: "Life cycle",
          points: [
            "Free-living cycle in soil; filariform larvae penetrate skin, travel to lungs, are swallowed.",
            "Parthenogenetic females in duodenal mucosa; eggs hatch in mucosa - larvae, not eggs, in stool.",
            "Autoinfection: internal (colonic mucosa) and external (perianal skin) - draw the cycle.",
          ],
        },
        {
          heading: "Pathogenesis of hyperinfection",
          points: [
            "Loss of Th2/eosinophil/IgE control; steroids cause eosinopenia and accelerate moulting.",
            "Massive larval load in gut and lungs; dissemination to CNS, liver, kidney.",
            "Larvae carry enteric Gram-negatives - bacteraemia and meningitis.",
          ],
        },
        {
          heading: "Risk factors",
          points: [
            "Corticosteroids (any dose), HTLV-1, transplant, haematological malignancy, biologics, alcohol, malnutrition.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "GI: pain, vomiting, ileus, bleeding, protein-losing enteropathy.",
            "Pulmonary: cough, haemoptysis, infiltrates, ARDS.",
            "Sepsis, meningitis, periumbilical purpura, SIADH; eosinophilia often absent.",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "Larvae in stool, sputum, BAL, duodenal aspirate; agar plate culture.",
            "Blood and CSF cultures; serology for screening; HTLV-1 testing.",
          ],
        },
        {
          heading: "Management",
          points: [
            "ICU care, reduce immunosuppression.",
            "Ivermectin 200 microgram/kg daily until samples negative 2 weeks; consider albendazole addition; subcutaneous ivermectin in ileus.",
            "Broad-spectrum Gram-negative antibiotics; ventilatory and nutritional support.",
          ],
        },
        {
          heading: "Prevention",
          points: [
            "Screen (serology) or give empirical ivermectin before steroids, biologics, chemotherapy or transplant in anyone from an endemic area.",
            "Footwear, sanitation; WHO 2030 road map ivermectin-based control.",
          ],
        },
      ],
      mustDraw: ["Life cycle showing the free-living, parasitic and autoinfection loops", "Table of acute, chronic, hyperinfection and disseminated stages"],
      markSplit: [
        { part: "Life cycle with diagram", marks: 2 },
        { part: "Pathogenesis and risk factors", marks: 2 },
        { part: "Clinical features and diagnosis", marks: 2 },
        { part: "Management", marks: 2 },
        { part: "Prevention before steroids", marks: 2 },
      ],
      keywords: ["autoinfection", "hyperinfection", "ivermectin", "HTLV-1", "Gram-negative sepsis", "larva currens"],
    },
    {
      id: "infectious-fever-strongyloides-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Differentiate larva currens from cutaneous larva migrans.",
      openingLines: [
        "Larva currens is the rapidly migrating urticarial track of Strongyloides filariform larvae during external autoinfection.",
        "Cutaneous larva migrans is the slowly advancing serpiginous track of animal hookworm larvae (Ancylostoma braziliense) that cannot complete their cycle in humans.",
      ],
      answer: [
        {
          heading: "Agent and mechanism",
          points: [
            "Larva currens: S. stercoralis, human parasite, autoinfection - systemic infection.",
            "CLM: dog/cat hookworm, dead-end host - infection confined to skin.",
          ],
        },
        {
          heading: "Clinical",
          points: [
            "Speed: 5-10 cm per hour vs 1-2 cm per day.",
            "Site: buttocks, perianal, thighs, trunk vs feet, hands, buttocks after beach exposure.",
            "Duration: fades in hours, recurs vs persists weeks, self-limiting over months.",
          ],
        },
        {
          heading: "Investigation and treatment",
          points: [
            "Larva currens: eosinophilia, serology, stool culture; ivermectin 200 microgram/kg x 2 days and pre-steroid caution.",
            "CLM: clinical diagnosis; ivermectin single dose or albendazole 400 mg for 3-7 days; topical thiabendazole.",
          ],
        },
      ],
      mustDraw: ["Comparison table of agent, speed, site, duration and treatment"],
      markSplit: [
        { part: "Agent and mechanism", marks: 1 },
        { part: "Clinical differences", marks: 2 },
        { part: "Diagnosis and treatment", marks: 2 },
      ],
      keywords: ["larva currens", "cutaneous larva migrans", "Ancylostoma braziliense", "ivermectin"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Intestinal nematode infections",
    "Mandell, Douglas and Bennett's Principles and Practice of Infectious Diseases, 9th edition, 2020 - Strongyloides",
    "CDC. Strongyloidiasis - Clinical care and treatment guidance, updated 2024",
    "Henriquez-Camacho C et al. Ivermectin versus albendazole or thiabendazole for Strongyloides stercoralis infection. Cochrane Database Syst Rev 2016",
    "Buonfrate D et al. The global prevalence of Strongyloides stercoralis infection. Pathogens 2020",
    "World Health Organization. Ending the neglect to attain the SDGs: NTD Road Map 2021-2030, 2020",
    "Stauffer WM et al. Coronavirus disease 2019 (COVID-19) and Strongyloides: deworming before corticosteroids. Open Forum Infect Dis 2020",
    "Ministry of Health and Family Welfare. National List of Essential Medicines 2022",
  ],
});

export default topics;
