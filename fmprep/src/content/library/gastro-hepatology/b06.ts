import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "gastro-hepatology-hepatitis-c-chronic",
  title: "Chronic hepatitis C: pan-genotypic DAA therapy",
  frequency: "common",
  oneLiner:
    "**Chronic hepatitis C** is infection with the **hepatitis C virus (HCV RNA) persisting beyond 6 months**, a silent cause of **cirrhosis and hepatocellular carcinoma**, now **curable in over 95%** with 8-12 weeks of oral **pan-genotypic direct-acting antivirals (sofosbuvir/velpatasvir or sofosbuvir + daclatasvir, free under NVHCP)**, cure being defined as **SVR12** - undetectable HCV RNA 12 weeks after the end of treatment.",
  keywords: [
    "HCV",
    "hepatitis C",
    "DAA",
    "direct-acting antivirals",
    "sofosbuvir",
    "velpatasvir",
    "daclatasvir",
    "glecaprevir/pibrentasvir",
    "voxilaprevir",
    "SVR12",
    "sustained virological response",
    "NVHCP",
    "APRI",
    "FIB-4",
    "transient elastography",
    "cryoglobulinaemia",
    "ribavirin",
    "simplified HCV treatment",
    "anti-HCV",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Chronic HCV infection** is detectable **HCV RNA for more than 6 months**; a positive anti-HCV antibody alone means only exposure, past or present. [AASLD-IDSA HCV Guidance 2023]",
        "WHO estimates about **50 million people live with chronic HCV**, with about **1 million new infections and 2.4 lakh deaths a year** (2022 data), mostly from cirrhosis and HCC. [WHO Global Hepatitis Report 2024]",
        "India carries an estimated **6-12 million viraemic people (anti-HCV about 0.5-1% of adults)**, with pockets of much higher prevalence in **Punjab, Haryana and the north-eastern states**. [NVHCP Technical Guidelines 2018]",
        "High-prevalence Indian groups are **people who inject drugs (PWID, 30-60% in Punjab and Manipur), patients on haemodialysis, multi-transfused thalassaemics and people with HIV**. [NVHCP Technical Guidelines 2018]",
        "**Genotype 3 is the commonest genotype in India (about 60%), followed by genotype 1**; genotype 3 with cirrhosis is the hardest group to cure, which is why pan-genotypic regimens matter. [NVHCP Technical Guidelines 2018]",
        "India's **National Viral Hepatitis Control Programme (NVHCP)**, launched on **28 July 2018**, gives free anti-HCV testing, HCV RNA and DAA treatment through Model Treatment Centres and Treatment Centres. [MoHFW NVHCP 2018]",
        "The programme aims at **elimination of hepatitis C as a public health threat by 2030** (SDG 3.3), the WHO target being a **90% fall in incidence and 65% fall in mortality** versus 2015. [WHO GHSS 2022-2030]",
      ],
    },
    {
      heading: "Virology, transmission and risk factors",
      points: [
        "HCV is a **positive-sense single-stranded RNA virus of the Flaviviridae (genus Hepacivirus)**, about 9.6 kb, with **8 genotypes** and many subtypes; it never integrates into the host genome, which is why it can be cured. [Harrison 22e]",
        "Its polyprotein yields the three drug targets: **NS3/4A protease (-previr drugs), NS5A replication complex (-asvir drugs) and NS5B RNA polymerase (-buvir drugs)**. [Harrison 22e]",
        "Error-prone replication creates a **quasispecies** that escapes antibody - there is **no vaccine**, and cure does not protect against reinfection. [Harrison 22e]",
        "In India the main route is **unsafe therapeutic injections and reuse of needles**, followed by **blood transfusion before 2002 screening, haemodialysis, injecting drug use and unsterile dental or surgical procedures**. [NVHCP Technical Guidelines 2018]",
        "Other routes: **tattooing, shared razors, needle-stick injury (risk about 1.8% per exposure)**, sexual (low, higher in MSM with HIV) and **vertical (about 5%, double with HIV co-infection)**. [Harrison 22e]",
        "Factors that speed fibrosis: **alcohol, age over 40 at infection, male sex, obesity/MASLD, diabetes, HIV or HBV co-infection** and genotype 3 (steatosis). [EASL HCV 2020]",
      ],
    },
    {
      heading: "Pathophysiology and natural history",
      points: [
        "HCV is **not directly cytopathic**; liver injury comes from **CD8 T-cell-mediated killing of infected hepatocytes**, which drives stellate-cell activation and fibrosis. [Harrison 22e]",
        "About **15-45% clear acute infection spontaneously** (more in the young, women and those with favourable IL28B/IFNL3 genotype); **55-85% become chronic**. [AASLD-IDSA HCV Guidance 2023]",
        "Over **20-30 years, 15-30% of chronically infected people develop cirrhosis**; once cirrhotic, **HCC develops at 1-4% a year** and decompensation at about 3-6% a year. [Harrison 22e]",
        "**Genotype 3 deposits fat in hepatocytes (viral steatosis)** and is associated with faster fibrosis and higher HCC risk. [EASL HCV 2020]",
        "**Extrahepatic disease** arises from chronic B-cell stimulation: **mixed (type II) cryoglobulinaemia**, membranoproliferative glomerulonephritis, B-cell non-Hodgkin lymphoma; plus insulin resistance and type 2 diabetes. [Harrison 22e]",
        "DAAs cure because HCV has **no latent reservoir** (unlike HBV cccDNA or HIV proviral DNA): blocking replication for 8-12 weeks lets infected cells turn over until the virus is gone. [Harrison 22e]",
        "Combining a **sofosbuvir backbone (high barrier to resistance) with an NS5A inhibitor** prevents emergence of resistant variants - the logic of every pan-genotypic regimen. [AASLD-IDSA HCV Guidance 2023]",
      ],
    },
    {
      heading: "Classification and staging",
      points: [
        "Classify by **phase**: acute (within 6 months of exposure) versus chronic (RNA beyond 6 months); AASLD now advises **treating acute HCV at once without waiting for spontaneous clearance**. [AASLD-IDSA HCV Guidance 2023]",
        "Classify by **liver stage**, which decides regimen and follow-up: **no cirrhosis, compensated cirrhosis (Child-Pugh A) or decompensated cirrhosis (Child-Pugh B/C)**. [NVHCP Technical Guidelines 2018]",
        "Fibrosis is staged **METAVIR F0-F4** (F4 = cirrhosis); in practice it is estimated by **APRI, FIB-4 or transient elastography**, not biopsy. [EASL HCV 2020]",
        "Classify by **treatment history**: treatment-naive, interferon-experienced, or **DAA-experienced (NS5A failure)** - the last needs a different regimen. [AASLD-IDSA HCV Guidance 2023]",
        "Genotype matters now only for **genotype 3 with cirrhosis** (Y93H resistance testing in some guidelines) and when non-pan-genotypic drugs are used. [AASLD-IDSA HCV Guidance 2023]",
        "**Special populations**: HBV or HIV co-infection, CKD/dialysis, pregnancy, children, HCC, post-transplant - excluded from simplified treatment. [AASLD-IDSA HCV Guidance 2023]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "Most people are **asymptomatic for decades**; HCV is usually found on **screening before surgery, blood donation, dialysis or antenatal care**, or on a raised ALT. [Harrison 22e]",
        "The commonest symptom is **fatigue**; others are vague right upper quadrant discomfort, poor concentration and depression. [Harrison 22e]",
        "Acute HCV is **icteric in only 20-30%** and rarely fulminant; a history of jaundice is therefore usually absent. [Harrison 22e]",
        "Take a **risk history**: injections from unqualified practitioners, transfusion, dialysis, surgery or dental work, injecting drugs, tattoos, shared razors, HIV, and family members with HCV. [NVHCP Technical Guidelines 2018]",
        "Ask about **alcohol** (in units/week), **diabetes and weight** - they accelerate fibrosis - and about all medicines and herbal products for **drug interactions** with DAAs. [AASLD-IDSA HCV Guidance 2023]",
        "Ask for **decompensation**: jaundice, abdominal distension, confusion or sleep reversal, haematemesis or melaena - they change the regimen and need referral. [NVHCP Technical Guidelines 2018]",
        "Atypical presentations: **purpura and arthralgia (cryoglobulinaemia), nephrotic syndrome, blistering of sun-exposed skin (porphyria cutanea tarda), lichen planus**, peripheral neuropathy. [Harrison 22e]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "Examination is **often normal** in the non-cirrhotic patient - a normal liver on palpation does not exclude advanced fibrosis. [Harrison 22e]",
        "Look for **stigmata of chronic liver disease**: palmar erythema, spider naevi, gynaecomastia, Dupuytren contracture, parotid enlargement and loss of axillary hair. [Harrison 22e]",
        "**Splenomegaly** and a low platelet count point to portal hypertension and probable cirrhosis. [Harrison 22e]",
        "Look for **decompensation**: jaundice, ascites (shifting dullness), flapping tremor (asterixis), fetor hepaticus and pedal oedema. [Harrison 22e]",
        "Look for extrahepatic signs: **palpable purpura on the legs (cryoglobulin vasculitis), oral or skin lichen planus, PCT blisters and scarring on the hands**. [Harrison 22e]",
        "Look for **needle tracks, tattoos and thrombophlebitis** (PWID) and record **BMI and waist** for metabolic co-factors. [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Chronic hepatitis B** - HBsAg positive; may co-exist with HCV, and HBV can **reactivate during DAA therapy**. [AASLD-IDSA HCV Guidance 2023]",
        "**MASLD/MASH** - metabolic risk factors, steatosis on ultrasound, anti-HCV negative; HCV genotype 3 also causes steatosis, so test anti-HCV in every fatty liver with raised ALT (see the MASLD topic). [EASL HCV 2020]",
        "**Alcohol-related liver disease** - AST:ALT over 2, raised GGT and MCV; often coexists with HCV and multiplies cirrhosis risk. [Harrison 22e]",
        "**Autoimmune hepatitis** - raised IgG, ANA/ASMA; note that HCV itself can produce low-titre autoantibodies and anti-LKM1. [Harrison 22e]",
        "**Wilson disease, haemochromatosis and drug-induced liver injury** in the young or with no risk factor. [Harrison 22e]",
        "**False-positive anti-HCV** - low signal-to-cutoff ratio, negative RNA; and **resolved infection** - antibody positive, RNA negative on two occasions. [CDC HCV Testing 2020]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**Step 1 - screen with anti-HCV antibody** (ELISA/CLIA or WHO-prequalified rapid diagnostic test); it turns positive about **8-12 weeks** after exposure. [NVHCP Technical Guidelines 2018]",
        "**Step 2 - confirm viraemia with HCV RNA (quantitative PCR) or HCV core antigen**; a positive antibody with negative RNA means cleared infection or false positive. [WHO HCV Guidelines 2022]",
        "**Reflex testing** (RNA run on the same sample when antibody is positive) and **point-of-care RNA (GeneXpert/Truenat)** reduce loss to follow-up; WHO 2022 endorses both. [WHO HCV Guidelines 2022]",
        "**Assess fibrosis**: **APRI = (AST/AST upper limit) x 100 / platelets (10^9/L)**; **APRI over 2 suggests cirrhosis** (NVHCP and WHO cut-off), under 0.5 makes significant fibrosis unlikely. [NVHCP Technical Guidelines 2018]",
        "**FIB-4 = age x AST / (platelets x square root of ALT)**; **over 3.25 suggests advanced fibrosis/cirrhosis**, under 1.45 excludes it; **transient elastography over 12.5 kPa** indicates cirrhosis. [AASLD-IDSA HCV Guidance 2023]",
        "Pre-treatment baseline: CBC, LFT, INR, creatinine with eGFR, **HBsAg and anti-HBc, HIV**, pregnancy test in women, and an **ultrasound** for cirrhosis/HCC. [AASLD-IDSA HCV Guidance 2023]",
        "**Genotyping is not needed** before a pan-genotypic regimen under NVHCP or the AASLD simplified pathway. [AASLD-IDSA HCV Guidance 2023]",
        "In cirrhosis, calculate **Child-Pugh and MELD** and arrange **endoscopy for varices** if platelets are under 1.5 lakh or stiffness over 20 kPa (Baveno VII). [Baveno VII 2022]",
      ],
    },
    {
      heading: "Management in OPD - simplified pan-genotypic treatment",
      points: [
        "**Treat everyone with HCV viraemia** aged 3 years and over, whatever the fibrosis stage, except those with short life expectancy from other illness. [WHO HCV Guidelines 2022]",
        "**NVHCP, no cirrhosis**: **sofosbuvir 400 mg + daclatasvir 60 mg orally once daily for 12 weeks**, or sofosbuvir/velpatasvir 400/100 mg once daily for 12 weeks. [NVHCP Technical Guidelines 2018]",
        "**NVHCP, compensated cirrhosis**: **sofosbuvir/velpatasvir 400/100 mg OD for 12 weeks**, or sofosbuvir + daclatasvir for **24 weeks**. [NVHCP Technical Guidelines 2018]",
        "**AASLD simplified (naive, no cirrhosis)**: **glecaprevir/pibrentasvir 300/120 mg (three tablets) once daily with food for 8 weeks**, or sofosbuvir/velpatasvir for 12 weeks. [AASLD-IDSA HCV Guidance 2023]",
        "**AASLD simplified, compensated cirrhosis**: glecaprevir/pibrentasvir 8 weeks, or sofosbuvir/velpatasvir 12 weeks (genotype 3: test for **NS5A Y93H** - if present add weight-based ribavirin or use SOF/VEL/VOX). [AASLD-IDSA HCV Guidance 2023]",
        "**Check drug interactions before prescribing**: rifampicin, carbamazepine, phenytoin and St John's wort are **contraindicated** (they cut DAA levels); **amiodarone with sofosbuvir causes fatal bradycardia**. [AASLD-IDSA HCV Guidance 2023]",
        "**Acid suppressants and velpatasvir**: PPIs reduce velpatasvir absorption - avoid, or give omeprazole up to 20 mg 4 hours after SOF/VEL taken with food; space antacids 4 hours. [AASLD-IDSA HCV Guidance 2023]",
        "**No on-treatment monitoring is needed** in the simplified pathway apart from adherence and glucose/INR checks in diabetics or those on warfarin, since clearing HCV can lower glucose and change INR. [AASLD-IDSA HCV Guidance 2023]",
        "Counsel: **daily adherence, no alcohol, avoid new medicines without checking**, safe sex and no sharing of razors or needles; dispense monthly under NVHCP. [NVHCP Technical Guidelines 2018]",
      ],
    },
    {
      heading: "Management of difficult groups and in hospital",
      points: [
        "**Decompensated cirrhosis (Child-Pugh B/C)**: **sofosbuvir/velpatasvir + ribavirin for 12 weeks** (ribavirin 1000 mg if under 75 kg, 1200 mg if 75 kg or more, or start at 600 mg and titrate), or SOF/VEL for 24 weeks if ribavirin is not tolerated. [AASLD-IDSA HCV Guidance 2023]",
        "**Protease inhibitors (glecaprevir, voxilaprevir, grazoprevir) are contraindicated in Child-Pugh B/C** - they are hepatically cleared and can precipitate liver failure. [AASLD-IDSA HCV Guidance 2023]",
        "Decompensated patients are treated at a **Model Treatment Centre or liver unit** with liver transplant assessment; those with **MELD 20 or more** may be better treated after transplant. [EASL HCV 2020]",
        "**DAA failure (NS5A-experienced)**: **sofosbuvir/velpatasvir/voxilaprevir 400/100/100 mg once daily for 12 weeks** (compensated liver only); refer to a specialist centre. [AASLD-IDSA HCV Guidance 2023]",
        "**HBV co-infection**: HBV can flare when HCV is cleared - if **HBsAg positive**, start tenofovir/entecavir prophylaxis until 12 weeks after DAAs or monitor HBV DNA; if only anti-HBc positive, check ALT if it rises. [AASLD-IDSA HCV Guidance 2023]",
        "**Admission** is for complications rather than for HCV itself: variceal bleed, encephalopathy, SBP, HCC, or **severe cryoglobulinaemic vasculitis** (rituximab or plasmapheresis plus DAA). [EASL HCV 2020]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: test every pregnant woman (AASLD/CDC); DAAs are not yet licensed in pregnancy, so treatment is usually **deferred until after delivery**, though AASLD 2023 allows individualised treatment. [AASLD-IDSA HCV Guidance 2023]",
        "**Ribavirin is teratogenic** - contraindicated in pregnancy, with **contraception for 6 months after the last dose in both partners**. [AASLD-IDSA HCV Guidance 2023]",
        "Mode of delivery is decided on obstetric grounds; **caesarean section does not prevent transmission**, and **breastfeeding is allowed** unless nipples are cracked or bleeding. [AASLD-IDSA HCV Guidance 2023]",
        "**Perinatally exposed infants**: test **HCV RNA at 2-6 months** (CDC 2023), not antibody, which is maternal until 18 months. [CDC Perinatal HCV 2023]",
        "**Children 3 years and over** are treated with weight-based pan-genotypic DAAs (SOF/VEL or G/P granules). [WHO HCV Guidelines 2022]",
        "**CKD and dialysis**: sofosbuvir-based regimens and glecaprevir/pibrentasvir need **no dose change at any eGFR including dialysis**; screen all dialysis patients every 6 months. [KDIGO HCV in CKD 2022]",
        "**HIV co-infection**: same DAA regimens, but check ART interactions (efavirenz lowers velpatasvir; boosted protease inhibitors with glecaprevir). [AASLD-IDSA HCV Guidance 2023]",
        "**PWID and people on opioid substitution**: treat - active drug use is **not** a reason to withhold DAAs; combine with needle-syringe and OST services. [WHO HCV Guidelines 2022]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "Untreated: **cirrhosis (15-30% over 20-30 years), decompensation, HCC (1-4%/year in cirrhosis)** and liver-related death. [Harrison 22e]",
        "**SVR12 is durable in over 99%** and equals cure; it reduces all-cause mortality, decompensation and HCC by about 70-80%. [EASL HCV 2020]",
        "**HCC risk persists after SVR in cirrhosis** (about 1-2% a year), so surveillance does not stop with cure. [AASLD-IDSA HCV Guidance 2023]",
        "Pan-genotypic DAAs achieve **SVR above 95% in all genotypes**; the lowest rates are in genotype 3 with cirrhosis and decompensated disease. [AASLD-IDSA HCV Guidance 2023]",
        "Side effects are minor: **headache, fatigue, nausea**; ribavirin adds **haemolytic anaemia, cough, rash and teratogenicity**. [AASLD-IDSA HCV Guidance 2023]",
        "Extrahepatic complications - cryoglobulinaemic vasculitis, MPGN, lymphoma - often **improve after SVR**. [EASL HCV 2020]",
      ],
    },
    {
      heading: "Follow-up and referral",
      points: [
        "Check **HCV RNA 12 weeks after the end of treatment (SVR12)**; undetectable RNA means cure. [AASLD-IDSA HCV Guidance 2023]",
        "**Anti-HCV stays positive for life after cure**, so reinfection is diagnosed only by **HCV RNA** - test yearly in PWID and other ongoing-risk groups. [AASLD-IDSA HCV Guidance 2023]",
        "**No cirrhosis + SVR**: discharge from liver follow-up with normal ALT; advise alcohol limits and metabolic control. [AASLD-IDSA HCV Guidance 2023]",
        "**Cirrhosis + SVR**: **ultrasound with or without AFP every 6 months for life** and variceal surveillance as per Baveno VII. [AASLD-IDSA HCV Guidance 2023]",
        "Refer to a **Model Treatment Centre/hepatologist**: decompensated cirrhosis, DAA failure, HCC, HBV/HIV co-infection, pregnancy, children, transplant, eGFR under 30 needing ribavirin. [NVHCP Technical Guidelines 2018]",
        "Detectable RNA at SVR12 means **relapse or reinfection** - repeat adherence history and refer for retreatment. [AASLD-IDSA HCV Guidance 2023]",
      ],
    },
    {
      heading: "Prevention, counselling and NVHCP link",
      points: [
        "**Universal one-time screening of all adults 18 years and over**, every pregnancy, and periodic screening for ongoing risk is the AASLD/CDC strategy; NVHCP targets high-risk groups. [CDC HCV Screening 2020]",
        "Injection safety: **auto-disable syringes, single-use devices and fewer unnecessary injections** - the key prevention in India. [NVHCP Technical Guidelines 2018]",
        "**Safe blood**: NAT screening of donated blood where available and voluntary non-remunerated donation. [NVHCP Technical Guidelines 2018]",
        "Harm reduction for PWID: **needle-syringe programmes and opioid substitution therapy** (Targeted Interventions under NACO). [WHO HCV Guidelines 2022]",
        "Counsel that HCV **is not spread by hugging, sharing food or utensils, or breastfeeding**; household members should not share razors or toothbrushes. [CDC HCV 2020]",
        "**Vaccinate against hepatitis A and B** if non-immune, as superinfection worsens outcome; there is no HCV vaccine. [AASLD-IDSA HCV Guidance 2023]",
      ],
    },
    {
      heading: "Latest guideline updates (2022-2026)",
      points: [
        "**AASLD-IDSA HCV Guidance (2023 update)**: universal screening, simplified treatment pathways for non-cirrhotic and compensated cirrhotic adults, and **treat acute HCV immediately**. [AASLD-IDSA HCV Guidance 2023]",
        "**CDC 2023**: perinatally exposed infants are tested by **HCV RNA at 2-6 months** instead of antibody at 18 months. [CDC Perinatal HCV 2023]",
        "**WHO 2022 HCV guidelines**: treat children and adolescents 3 years and over with pan-genotypic DAAs, **point-of-care RNA testing, same-visit test and treat**, and task-sharing to non-specialists. [WHO HCV Guidelines 2022]",
        "**WHO Global Hepatitis Report 2024** places India among the countries carrying most of the global viral hepatitis burden, re-emphasising decentralised testing. [WHO Global Hepatitis Report 2024]",
        "**NVHCP** now delivers testing and treatment through decentralised Treatment Centres and **Ayushman Arogya Mandirs** screening high-risk groups. [MoHFW NVHCP 2023]",
        "Older regimens - **interferon, sofosbuvir + ribavirin alone, genotype-specific ledipasvir or elbasvir/grazoprevir** - are no longer first-line where pan-genotypic DAAs are available. [AASLD-IDSA HCV Guidance 2023]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic viva: **'Anti-HCV positive - what next?'** Answer: HCV RNA; antibody alone never starts treatment. [NVHCP Technical Guidelines 2018]",
        "Know the **three DAA classes by suffix**: -previr (NS3/4A protease), -asvir (NS5A), -buvir (NS5B polymerase). [Harrison 22e]",
        "Common mistake: **forgetting HBsAg/anti-HBc before DAAs** - HBV reactivation (FDA boxed warning 2016) can be fatal. [AASLD-IDSA HCV Guidance 2023]",
        "Common mistake: **stopping HCC surveillance after SVR in a cirrhotic**. [AASLD-IDSA HCV Guidance 2023]",
        "Common mistake: prescribing **glecaprevir/pibrentasvir in decompensated cirrhosis** - protease inhibitors are contraindicated in Child-Pugh B/C. [AASLD-IDSA HCV Guidance 2023]",
        "Remember **amiodarone + sofosbuvir = symptomatic bradycardia** and **rifampicin + any DAA = treatment failure** - both high-yield in India where TB co-exists. [AASLD-IDSA HCV Guidance 2023]",
      ],
    },
  ],
  tables: [
    {
      heading: "DAA and adjunct drugs for chronic hepatitis C",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Sofosbuvir (NS5B nucleotide inhibitor)", "400 mg orally once daily, with or without food", "12 weeks (24 weeks with daclatasvir in cirrhosis)", "Bradycardia with amiodarone (contraindicated); rifampicin, carbamazepine, phenytoin reduce levels; no dose change in CKD/dialysis"],
        ["Daclatasvir (NS5A inhibitor)", "60 mg orally once daily; 30 mg with strong CYP3A4 inhibitors; 90 mg with moderate inducers (efavirenz)", "12 weeks (no cirrhosis); 24 weeks (cirrhosis)", "Headache, fatigue; avoid strong CYP3A inducers"],
        ["Sofosbuvir/velpatasvir (SOF/VEL)", "400/100 mg one tablet orally once daily", "12 weeks; + ribavirin 12 weeks or alone 24 weeks in decompensated", "PPIs and antacids lower velpatasvir; efavirenz, rifampicin contraindicated; amiodarone"],
        ["Glecaprevir/pibrentasvir (G/P)", "300/120 mg (three 100/40 mg tablets) orally once daily with food", "8 weeks naive (with or without compensated cirrhosis)", "Contraindicated in Child-Pugh B/C; avoid with atazanavir, rifampicin, ethinylestradiol pills (ALT rise)"],
        ["Sofosbuvir/velpatasvir/voxilaprevir", "400/100/100 mg orally once daily with food", "12 weeks (DAA failure)", "Contraindicated in Child-Pugh B/C; protease-inhibitor interactions"],
        ["Ribavirin", "1000 mg/day (under 75 kg) or 1200 mg/day (75 kg or more) in two divided doses with food; start 600 mg/day in decompensated", "12 weeks with SOF/VEL", "Haemolytic anaemia, teratogenic (contraception 6 months both partners), cough, rash; reduce in CKD"],
        ["Tenofovir disoproxil (HBV prophylaxis)", "300 mg orally once daily", "From DAA start until 12 weeks after the end (HBsAg positive)", "Renal tubular toxicity, bone loss; use TAF or entecavir in CKD"],
      ],
    },
    {
      heading: "Which regimen for whom (NVHCP 2018 and AASLD-IDSA 2023)",
      columns: ["Patient group", "NVHCP regimen", "AASLD-IDSA alternative", "Note"],
      rows: [
        ["Treatment-naive, no cirrhosis", "SOF 400 + DCV 60 mg OD x 12 weeks or SOF/VEL x 12 weeks", "G/P x 8 weeks or SOF/VEL x 12 weeks", "Simplified pathway; no genotype needed"],
        ["Compensated cirrhosis (Child A)", "SOF/VEL x 12 weeks or SOF + DCV x 24 weeks", "G/P x 8 weeks or SOF/VEL x 12 weeks", "Genotype 3: Y93H test; add ribavirin if present"],
        ["Decompensated cirrhosis (Child B/C)", "SOF/VEL + ribavirin x 12 weeks (SOF/VEL x 24 weeks if no ribavirin)", "Same; no protease inhibitor", "Treat at MTC/transplant centre"],
        ["DAA failure (NS5A-experienced)", "Refer to MTC", "SOF/VEL/VOX x 12 weeks", "Compensated liver only"],
        ["CKD stage 4-5 / dialysis", "SOF-based, no dose change", "G/P x 8 weeks or SOF/VEL x 12 weeks", "Avoid ribavirin or dose-reduce"],
        ["Children 3 years and over", "Per national paediatric guidance", "Weight-based SOF/VEL or G/P", "WHO 2022 recommends treating"],
      ],
    },
    {
      heading: "HCV test interpretation and fibrosis cut-offs",
      columns: ["Test / result", "Interpretation", "Action"],
      rows: [
        ["Anti-HCV positive, HCV RNA detectable", "Current (active) infection", "Stage fibrosis and treat"],
        ["Anti-HCV positive, HCV RNA not detected", "Past cleared infection or false-positive antibody", "Repeat RNA if recent exposure; reassure"],
        ["Anti-HCV negative, RNA detectable", "Very early acute infection (window) or immunosuppressed/dialysis", "Treat as acute HCV; retest antibody later"],
        ["APRI over 2 / under 0.5", "Cirrhosis likely / significant fibrosis unlikely", "Over 2: cirrhosis regimen, ultrasound, endoscopy"],
        ["FIB-4 over 3.25 / under 1.45", "Advanced fibrosis likely / excluded", "Over 3.25: treat as cirrhosis, confirm with elastography"],
        ["Liver stiffness over 12.5 kPa", "Cirrhosis", "HCC surveillance for life even after SVR"],
        ["HCV RNA undetectable 12 weeks after treatment", "SVR12 - cure", "Discharge if no cirrhosis; antibody stays positive"],
      ],
    },
    {
      heading: "Chronic HCV versus other causes of chronic hepatitis",
      columns: ["Feature", "Chronic HCV", "Chronic HBV", "MASLD", "Autoimmune hepatitis"],
      rows: [
        ["Key marker", "Anti-HCV + HCV RNA", "HBsAg > 6 months, HBV DNA", "Steatosis + metabolic risk", "Raised IgG, ANA/ASMA, interface hepatitis"],
        ["Typical ALT", "Mild, fluctuating, often normal", "Variable by phase", "Mild, ALT > AST", "Moderate-high"],
        ["Extrahepatic", "Cryoglobulinaemia, MPGN, PCT, lichen planus", "Polyarteritis nodosa, membranous GN", "Diabetes, CVD", "Thyroiditis, other autoimmunity"],
        ["Treatment", "DAA 8-12 weeks - cure", "Long-term tenofovir/entecavir - suppression", "Weight loss 7-10%, resmetirom", "Prednisolone + azathioprine"],
        ["Cure possible?", "Yes (SVR over 95%)", "Functional cure rare", "Reversible with weight loss", "Remission, rarely off-drug"],
      ],
    },
    {
      heading: "High-yield DAA drug interactions",
      columns: ["Co-medication", "Interaction", "What to do"],
      rows: [
        ["Rifampicin, rifabutin", "Strong induction - DAA levels fall, failure", "Complete TB treatment first or defer DAA"],
        ["Carbamazepine, phenytoin, phenobarbitone", "Strong induction", "Switch to levetiracetam or valproate before DAA"],
        ["Amiodarone", "Severe bradycardia/asystole with sofosbuvir", "Contraindicated; stop and wait or use alternative"],
        ["PPIs, H2 blockers, antacids", "Lower velpatasvir and ledipasvir absorption", "Avoid PPI; omeprazole max 20 mg 4 hours after SOF/VEL; antacid 4 hours apart"],
        ["Statins (rosuvastatin, atorvastatin)", "Levels rise with velpatasvir and G/P", "Lowest dose; rosuvastatin max 10 mg with SOF/VEL"],
        ["Ethinylestradiol pills", "ALT rise with glecaprevir/pibrentasvir", "Use progestogen-only or non-hormonal method"],
        ["Efavirenz", "Lowers velpatasvir and daclatasvir", "Switch to dolutegravir or raise daclatasvir to 90 mg"],
      ],
    },
  ],
  redFlags: [
    "Jaundice, ascites, encephalopathy or variceal bleed in a known HCV patient - decompensation, needs a liver unit and transplant assessment.",
    "Liver mass on ultrasound or rising AFP in HCV cirrhosis - suspect hepatocellular carcinoma.",
    "ALT flare or jaundice during DAA therapy in an HBsAg or anti-HBc positive patient - HBV reactivation.",
    "Bradycardia, syncope or dizziness in a patient on sofosbuvir with amiodarone.",
    "Palpable purpura, rising creatinine, haematuria or neuropathy - cryoglobulinaemic vasculitis or MPGN.",
    "Pregnancy discovered while on ribavirin - stop at once and refer.",
    "Detectable HCV RNA at SVR12 - treatment failure or reinfection, refer for retreatment.",
  ],
  pearls: [
    "**Antibody says exposure, RNA says infection** - never treat on anti-HCV alone.",
    "**Previr-asvir-buvir**: NS3/4A protease, NS5A, NS5B polymerase.",
    "**SVR12 = cure**, but **cirrhosis + SVR = ultrasound every 6 months for life**.",
    "**No protease inhibitor in Child B/C** - use SOF/VEL + ribavirin.",
    "Test **HBsAg and anti-HBc before every DAA course** (HBV reactivation boxed warning).",
    "**APRI over 2 = cirrhosis** (NVHCP); **FIB-4 over 3.25 = advanced fibrosis**.",
    "**Genotype 3 is India's commonest** and the hardest to cure in cirrhosis.",
    "**Rifampicin and amiodarone** are the two interactions every examiner asks.",
    "Anti-HCV stays positive after cure - **check reinfection by RNA**.",
  ],
  mcqs: [
    {
      id: "gastro-hepatology-hepatitis-c-chronic-q1",
      stem: "A 34-year-old man found anti-HCV positive on pre-operative screening has HCV RNA detectable, AST 48 U/L (ULN 40), ALT 62 U/L and platelets 2.4 lakh/mm3. He has no cirrhosis on ultrasound. What is the best NVHCP regimen?",
      options: [
        "Sofosbuvir 400 mg + daclatasvir 60 mg once daily for 12 weeks",
        "Pegylated interferon with ribavirin for 48 weeks",
        "Sofosbuvir/velpatasvir with ribavirin for 24 weeks",
        "Wait for genotype result before starting any therapy",
      ],
      answer: 0,
      explanation:
        "His APRI is about 0.5, so he is non-cirrhotic; NVHCP treats non-cirrhotics with pan-genotypic sofosbuvir + daclatasvir (or SOF/VEL) for 12 weeks without genotyping. Interferon is obsolete; ribavirin and 24-week courses are reserved for decompensated disease; genotyping is unnecessary with pan-genotypic drugs.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-hepatitis-c-chronic-q2",
      stem: "A 52-year-old woman with HCV cirrhosis has ascites, bilirubin 3.2 mg/dL and albumin 2.7 g/dL (Child-Pugh C). Which DAA regimen must be avoided?",
      options: [
        "Sofosbuvir/velpatasvir with ribavirin for 12 weeks",
        "Sofosbuvir/velpatasvir for 24 weeks",
        "Glecaprevir/pibrentasvir for 8 weeks",
        "Sofosbuvir/velpatasvir with low-dose ribavirin titrated up",
      ],
      answer: 2,
      explanation:
        "Glecaprevir is an NS3/4A protease inhibitor, hepatically cleared, and protease inhibitors are contraindicated in Child-Pugh B/C because of hepatotoxicity and decompensation. SOF/VEL plus ribavirin for 12 weeks, ribavirin started low, or SOF/VEL alone for 24 weeks when ribavirin cannot be used are the recommended decompensated regimens.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-hepatitis-c-chronic-q3",
      stem: "Before starting direct-acting antivirals, which test is mandatory because of a boxed warning about a potentially fatal complication?",
      options: ["Serum alpha-fetoprotein", "HBsAg and anti-HBc", "HCV genotype", "Serum cryoglobulins"],
      answer: 1,
      explanation:
        "Rapid clearance of HCV by DAAs removes viral interference and can reactivate co-existing hepatitis B, sometimes fatally (FDA boxed warning 2016), so HBsAg and anti-HBc are checked and HBsAg-positive patients get prophylaxis or monitoring. Genotype is no longer needed with pan-genotypic drugs; AFP and cryoglobulins are not required to start treatment.",
      difficulty: "easy",
    },
    {
      id: "gastro-hepatology-hepatitis-c-chronic-q4",
      stem: "A 45-year-old man with pulmonary tuberculosis on HRZE is found to have chronic HCV without cirrhosis. What is the most appropriate plan?",
      options: [
        "Start sofosbuvir/velpatasvir now alongside anti-TB treatment",
        "Switch rifampicin to rifabutin and start glecaprevir/pibrentasvir",
        "Start sofosbuvir + daclatasvir with daclatasvir increased to 90 mg",
        "Complete anti-TB treatment first, then start DAAs",
      ],
      answer: 3,
      explanation:
        "Rifampicin, and also rifabutin, are strong inducers of P-glycoprotein and CYP3A that lower DAA levels and cause treatment failure, so co-administration is contraindicated. In a non-cirrhotic, delaying HCV therapy for a few months is safe, so finish TB treatment first; raising daclatasvir to 90 mg applies to moderate inducers such as efavirenz, not rifampicin.",
      difficulty: "moderate",
    },
    {
      id: "gastro-hepatology-hepatitis-c-chronic-q5",
      stem: "A 60-year-old man with compensated HCV cirrhosis achieved SVR12 after sofosbuvir/velpatasvir. Which follow-up is correct?",
      options: [
        "Repeat anti-HCV yearly to confirm continued cure",
        "Discharge from follow-up as he is cured",
        "Ultrasound with or without AFP every 6 months for life",
        "Liver biopsy at 1 year to document fibrosis regression",
      ],
      answer: 2,
      explanation:
        "SVR lowers but does not abolish HCC risk in cirrhosis, so 6-monthly ultrasound surveillance continues for life, with variceal surveillance as indicated. Discharge is appropriate only for non-cirrhotics; anti-HCV remains positive for life after cure so it cannot monitor anything, and biopsy is not needed.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "gastro-hepatology-hepatitis-c-chronic-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Discuss the diagnosis, pre-treatment assessment and management of chronic hepatitis C in primary care, with reference to pan-genotypic direct-acting antivirals and the National Viral Hepatitis Control Programme.",
      openingLines: [
        "Chronic hepatitis C is persistence of HCV RNA beyond 6 months, a silent cause of cirrhosis and HCC that affects an estimated 6-12 million Indians.",
        "It is now curable in over 95% with 8-12 weeks of oral pan-genotypic DAAs, given free under NVHCP, with cure defined as SVR12.",
      ],
      answer: [
        {
          heading: "Definition, burden and virology",
          points: [
            "HCV - Flaviviridae RNA virus, 8 genotypes; genotype 3 commonest in India (about 60%).",
            "WHO 2024: about 50 million chronic infections worldwide; India 6-12 million; hotspots Punjab, north-east, PWID, dialysis.",
            "Natural history: 55-85% chronic, 15-30% cirrhosis in 20-30 years, HCC 1-4%/year in cirrhosis.",
          ],
        },
        {
          heading: "Diagnosis - two-step testing",
          points: [
            "Screen with anti-HCV (ELISA or rapid test).",
            "Confirm viraemia with HCV RNA (or core antigen); antibody alone is not an indication to treat.",
            "Reflex and point-of-care RNA testing reduce loss to follow-up (WHO 2022).",
          ],
        },
        {
          heading: "Pre-treatment assessment",
          points: [
            "Fibrosis: APRI (over 2 = cirrhosis), FIB-4 (over 3.25 advanced), elastography over 12.5 kPa.",
            "Child-Pugh status - compensated vs decompensated.",
            "HBsAg, anti-HBc, HIV, eGFR, pregnancy test, drug interaction check (rifampicin, amiodarone, antiepileptics, PPIs).",
          ],
        },
        {
          heading: "Treatment regimens",
          points: [
            "No cirrhosis: SOF 400 + DCV 60 mg OD 12 weeks or SOF/VEL 12 weeks (AASLD: G/P 8 weeks).",
            "Compensated cirrhosis: SOF/VEL 12 weeks or SOF + DCV 24 weeks.",
            "Decompensated: SOF/VEL + ribavirin 12 weeks; no protease inhibitors.",
            "DAA failure: SOF/VEL/VOX 12 weeks at a specialist centre.",
          ],
        },
        {
          heading: "Monitoring and follow-up",
          points: [
            "Adherence counselling; monthly dispensing under NVHCP.",
            "HCV RNA at 12 weeks after the end - SVR12 = cure.",
            "Cirrhosis: 6-monthly ultrasound for HCC for life; varices per Baveno VII.",
            "Reinfection checked by RNA, not antibody.",
          ],
        },
        {
          heading: "Special groups and prevention",
          points: [
            "Pregnancy: screen every pregnancy, usually treat after delivery; ribavirin teratogenic.",
            "Children 3 years and over, CKD/dialysis, PWID and HIV - all treatable.",
            "Prevention: injection safety, NAT-screened blood, harm reduction; no vaccine.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart: anti-HCV test, HCV RNA, fibrosis assessment (APRI/FIB-4), regimen by liver stage, SVR12",
        "Table of regimens by patient group (NVHCP)",
      ],
      markSplit: [
        { part: "Definition, burden, virology", marks: 2 },
        { part: "Diagnostic algorithm", marks: 2 },
        { part: "Pre-treatment assessment", marks: 2 },
        { part: "Regimens by group", marks: 2 },
        { part: "Follow-up, special groups, prevention", marks: 2 },
      ],
      keywords: ["anti-HCV", "HCV RNA", "APRI", "FIB-4", "sofosbuvir", "daclatasvir", "velpatasvir", "SVR12", "NVHCP"],
    },
    {
      id: "gastro-hepatology-hepatitis-c-chronic-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on direct-acting antiviral drugs for hepatitis C.",
      openingLines: [
        "Direct-acting antivirals (DAAs) inhibit specific HCV non-structural proteins - NS3/4A protease, NS5A and NS5B polymerase.",
        "Pan-genotypic combinations cure over 95% of chronic HCV in 8-12 weeks.",
      ],
      answer: [
        {
          heading: "Classes and examples",
          points: [
            "NS3/4A protease inhibitors (-previr): glecaprevir, voxilaprevir, grazoprevir.",
            "NS5A inhibitors (-asvir): daclatasvir, velpatasvir, pibrentasvir, ledipasvir.",
            "NS5B polymerase inhibitor (-buvir): sofosbuvir - nucleotide, high barrier to resistance.",
          ],
        },
        {
          heading: "Pan-genotypic regimens",
          points: [
            "SOF/VEL 400/100 mg OD 12 weeks; SOF 400 + DCV 60 mg OD 12 weeks.",
            "G/P 300/120 mg OD with food 8 weeks.",
            "SOF/VEL/VOX 12 weeks for DAA failure.",
          ],
        },
        {
          heading: "Cautions",
          points: [
            "HBV reactivation - test HBsAg and anti-HBc first.",
            "Amiodarone with sofosbuvir - bradycardia; rifampicin and antiepileptic inducers - failure.",
            "Protease inhibitors contraindicated in Child-Pugh B/C.",
            "PPIs reduce velpatasvir absorption.",
          ],
        },
        {
          heading: "End-point",
          points: ["SVR12 - undetectable RNA 12 weeks after treatment = cure; HCC surveillance continues in cirrhosis."],
        },
      ],
      mustDraw: ["Diagram of HCV polyprotein with NS3/4A, NS5A, NS5B and the drug class acting on each"],
      markSplit: [
        { part: "Classes with mechanism", marks: 2 },
        { part: "Regimens and duration", marks: 1.5 },
        { part: "Cautions and end-point", marks: 1.5 },
      ],
      keywords: ["NS5A", "NS5B", "NS3/4A", "pan-genotypic", "SVR12", "HBV reactivation"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Chronic hepatitis",
    "AASLD-IDSA. HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C, 2023 update",
    "WHO. Updated recommendations on treatment of adolescents and children with chronic HCV infection, and HCV simplified service delivery and diagnostics, 2022",
    "WHO. Global Hepatitis Report 2024",
    "MoHFW, Government of India. National Viral Hepatitis Control Programme - National Guidelines for Diagnosis and Management of Viral Hepatitis, 2018",
    "EASL Recommendations on Treatment of Hepatitis C: Final update of the series, 2020",
    "CDC. Recommendations for Hepatitis C Testing Among Perinatally Exposed Infants and Children, 2023",
    "KDIGO 2022 Clinical Practice Guideline for the Prevention, Diagnosis, Evaluation, and Treatment of Hepatitis C in CKD",
  ],
});

export default topics;
