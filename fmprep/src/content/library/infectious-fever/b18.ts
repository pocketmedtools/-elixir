import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "infectious-fever-hepatitis-b-vaccine-pep",
  title: "Hepatitis B vaccination and post-exposure protocols",
  frequency: "less-common",
  oneLiner:
    "**Hepatitis B vaccine** is a **recombinant HBsAg** vaccine given as **3 doses at 0, 1 and 6 months** (20 mcg IM deltoid in adults); a post-vaccination **anti-HBs of 10 mIU/mL or more** defines a lifelong responder, and **post-exposure prophylaxis** is decided by the exposed person's vaccine response and the source's HBsAg - **HBIG 0.06 mL/kg plus vaccine within 24 hours** for the unprotected.",
  keywords: [
    "HBV vaccine",
    "recombinant HBsAg vaccine",
    "anti-HBs titre",
    "10 mIU/mL",
    "non-responder",
    "HBIG",
    "hepatitis B immunoglobulin",
    "needlestick injury",
    "occupational exposure",
    "post-exposure prophylaxis",
    "PEP",
    "birth dose",
    "Heplisav-B",
    "CpG 1018",
    "dialysis vaccine schedule",
    "Engerix-B",
    "NVHCP",
    "healthcare worker vaccination",
    "post-vaccination serology",
    "escape mutant",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Hepatitis B vaccine** is a **subunit vaccine of recombinant HBsAg** made in yeast (Saccharomyces or Hansenula) and adsorbed on aluminium hydroxide; it contains no live virus and cannot cause infection. [Harrison 22e]",
        "WHO estimates **254 million people** were living with chronic HBV in 2022, with about **1.1 million deaths** a year from cirrhosis and hepatocellular carcinoma. [WHO Global Hepatitis Report 2024]",
        "**India** is a country of **intermediate endemicity** (HBsAg about **2-4%** in the general population, higher in tribal groups of Arunachal, Andaman and Nicobar and parts of the North-East), with an estimated **about 40 million** chronic carriers. [NVHCP 2018]",
        "Most Indian chronic infection is acquired **perinatally or in early childhood**, which is why the **birth dose within 24 hours** is the single most effective intervention in the programme. [MoHFW UIP]",
        "**Healthcare workers (HCWs)** have a needlestick risk several times higher than the public; Indian surveys repeatedly find that **only about half** of HCWs, and fewer nurses, housekeeping and lab staff, are fully vaccinated with documented anti-HBs. [Indian HCW surveys]",
        "Risk of transmission after a **percutaneous injury** from an HBsAg-positive source is **up to 30%** if the source is **HBeAg-positive** and about **1-6% clinical hepatitis** (higher serological infection) if HBeAg-negative - far above HCV (about 0.2-1.8%) and HIV (about 0.3%). [CDC 2013]",
        "HBV survives on environmental surfaces for **at least 7 days** and is infectious in tiny volumes of blood, which explains outbreaks from shared glucometers, dialysis machines and multi-dose vials. [CDC 2013]",
        "The vaccine is **95% effective** in preventing chronic infection and was the **first anti-cancer vaccine**, reducing hepatocellular carcinoma in Taiwan after universal infant vaccination. [Harrison 22e]",
      ],
    },
    {
      heading: "Who must be vaccinated and risk factors for exposure",
      points: [
        "**Universal infant vaccination**: birth dose (monovalent, 0.5 mL, 10 mcg) within 24 hours, then **pentavalent (DPT-HepB-Hib) at 6, 10 and 14 weeks** under India's Universal Immunisation Programme. [MoHFW UIP]",
        "**Healthcare and laboratory workers, students** of medicine, nursing and dentistry, and **sanitation and biomedical waste handlers** must complete vaccination and documented anti-HBs testing before clinical exposure. [NVHCP 2018]",
        "**Patients on haemodialysis and with CKD**, people who **inject drugs**, **men who have sex with men**, sex workers, people with **multiple partners or an STI**, and **household and sexual contacts** of HBsAg-positive people are high priority. [ACIP 2022]",
        "People with **HIV, HCV, chronic liver disease, diabetes**, those in prisons and institutions, recipients of **repeated transfusion** (thalassaemia, haemophilia) and travellers to endemic areas should be vaccinated. [ACIP 2022]",
        "**ACIP 2022** moved the US to **universal vaccination of all adults aged 19-59 years** (and adults 60 or older with risk factors or who request it), because risk-based programmes missed most infections. [ACIP 2022]",
        "**Exposure risk is highest** with **hollow-bore needles** (phlebotomy, IV cannula), deep injury, visible blood on the device and a source with **high HBV DNA or HBeAg**. [CDC 2013]",
        "**Host factors for poor vaccine response**: age over 40, **male sex, obesity, smoking**, diabetes, **CKD and dialysis**, HIV, immunosuppressive drugs, chronic liver disease, certain HLA types (DRB1*03, DQB1*02) and **gluteal injection**. [Harrison 22e]",
      ],
    },
    {
      heading: "Immunology - why the schedule and titre work",
      points: [
        "Vaccine HBsAg is taken up by dendritic cells and presented to **CD4 T-helper cells**, which drive **B cells to make anti-HBs** against the **a determinant** of the S protein - shared by all HBV genotypes. [Harrison 22e]",
        "**Anti-HBs neutralises virions** before they enter hepatocytes through the **NTCP receptor**; an anti-HBs of **10 mIU/mL or more** after the primary series correlates with protection. [Harrison 22e]",
        "The **first two doses prime** the response and the **third dose at 6 months boosts** affinity maturation and memory, which is why a longer gap before the last dose gives higher titres. [Plotkin 8e]",
        "**Immune memory outlasts antibody**: anti-HBs falls below 10 mIU/mL in many responders after 10-15 years, but **anamnestic memory protects against chronic infection for at least 30 years**, so routine boosters are not needed. [WHO position paper 2017]",
        "**Incubation is long (45-180 days)**, so active vaccine given promptly after exposure can generate antibody before the virus establishes infection; **HBIG** fills the gap with passive antibody in the first weeks. [Harrison 22e]",
        "**HBIG** is pooled human plasma with high anti-HBs; its half-life is about **3-4 weeks**, so a non-responder needs **two doses one month apart** to cover the incubation window. [CDC 2013]",
        "**Vaccine escape mutants** (classically **G145R** in the a determinant) can infect vaccinated people and evade some HBsAg assays, but they have not undermined population control. [Harrison 22e]",
        "**Dialysis and CKD** patients have **uraemic T-cell dysfunction**, so they need **higher antigen dose (40 mcg) and more doses**, and their antibody wanes faster - hence annual anti-HBs. [CDC dialysis guidance]",
      ],
    },
    {
      heading: "Classification - exposure type and vaccine response status",
      points: [
        "**Exposure types**: **percutaneous** (needlestick, sharp), **mucosal** (splash to eye, mouth), **non-intact skin**, **sexual**, and **perinatal**; intact skin contact with blood is **not** an exposure. [CDC 2013]",
        "**Responder**: anti-HBs **10 mIU/mL or more** at 1-2 months after a complete series - protected for life, needs **no further testing, boosters or PEP** whatever the source. [CDC 2013]",
        "**Non-responder after one series**: anti-HBs under 10 mIU/mL after 3 doses - give a **second complete series** and retest; about **30-50%** respond to the second series. [CDC 2013]",
        "**Confirmed non-responder**: anti-HBs under 10 mIU/mL after **two complete series (6 doses)**; first check **HBsAg and anti-HBc** to exclude chronic infection as the reason. [CDC 2013]",
        "**Response unknown**: vaccinated but never tested - the common Indian HCW situation; test anti-HBs at the time of exposure and act on the result. [CDC 2013]",
        "**Unvaccinated or incompletely vaccinated**: no protection assumed; needs HBIG plus vaccine if the source is positive or unknown. [CDC 2013]",
        "**Source status**: **HBsAg-positive**, **HBsAg-negative**, or **unknown or untestable** (discarded needle); a high-risk unknown source is managed as positive. [CDC 2013]",
      ],
    },
    {
      heading: "Clinical features - what the exposed person reports",
      points: [
        "Take the **exact time**, mechanism, device (hollow or solid), **depth**, visible blood and whether gloves were worn - these grade the risk and decide urgency. [NACO PEP 2021]",
        "Ask the **vaccination history with dates** and any recorded **anti-HBs** value; a vaccine card without a titre counts as **response unknown**. [CDC 2013]",
        "Record the **source**: known diagnosis, HBsAg, HIV and HCV status, ART, HBV DNA, injecting drug use; obtain **informed consent** for source testing. [NACO PEP 2021]",
        "Ask about **pregnancy, breastfeeding**, prior allergy to yeast or vaccine, and current immunosuppression - none of these contraindicates HBV vaccine or HBIG. [ACIP 2018]",
        "Acute hepatitis B after exposure presents after **1-6 months** with anorexia, nausea, **dark urine, jaundice** and right upper quadrant pain; **about 70% of adults are anicteric**. [Harrison 22e]",
        "A **serum-sickness-like prodrome** (urticaria, arthralgia, fever) from immune complexes may precede jaundice by 1-2 weeks. [Harrison 22e]",
        "Vaccine side effects reported: **sore arm (3-29%)**, low-grade fever (1-6%); anaphylaxis is about **1 per 1.1 million doses**; there is **no link with multiple sclerosis or Guillain-Barre syndrome**. [WHO position paper 2017]",
      ],
    },
    {
      heading: "Examination of the exposed person",
      points: [
        "Inspect the **wound**: depth, bleeding, foreign body; a deep puncture with visible blood is the highest-risk injury. [CDC 2013]",
        "Look for **pre-existing liver disease** in the HCW (jaundice, stigmata) - an occult HBsAg-positive HCW explains non-response and needs care, not vaccine. [CDC 2013]",
        "Record **BMI and smoking**, which predict poor response and favour a more immunogenic vaccine for revaccination. [ACIP 2018]",
        "At follow-up, look for **icterus, tender hepatomegaly** and flapping tremor; asterixis or confusion means **acute liver failure** and immediate referral. [Harrison 22e]",
        "Injection technique matters: give the vaccine **IM in the deltoid** (anterolateral thigh in infants) with a 25 mm needle; **gluteal injection into fat lowers response**. [ACIP 2018]",
      ],
    },
    {
      heading: "Differential and interpretation pitfalls",
      points: [
        "**Low anti-HBs years after vaccination** does not mean non-response; it is waning antibody with intact memory - one **challenge (booster) dose** and retest at 1-2 months separates the two. [CDC 2013]",
        "**Isolated anti-HBs from HBIG** (passive) can mimic vaccine response for 4-6 months, so anti-HBs should be tested **4-6 months after HBIG** to judge the vaccine. [CDC 2013]",
        "**Anti-HBs with anti-HBc** means immunity from **past natural infection**, not vaccination; anti-HBs alone means vaccine immunity. [Harrison 22e]",
        "**HBsAg transiently positive for up to 2-3 weeks after a vaccine dose** (especially in dialysis patients and infants) is antigen, not infection - repeat after a month. [CDC dialysis guidance]",
        "**Isolated anti-HBc** may be a false positive, a window period or occult HBV; check HBV DNA in the immunosuppressed and vaccinate the rest. [AASLD 2018]",
        "Post-exposure jaundice is also caused by **HCV, HAV, HEV, drug-induced liver injury** (ART PEP regimens, antituberculars) and **leptospirosis** - test, do not assume HBV. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**Exposed HCW at baseline**: **anti-HBs** (if response unknown), and **HBsAg and total anti-HBc** when unvaccinated or a non-responder, plus **anti-HIV and anti-HCV** at baseline. [CDC 2013]",
        "**Source**: **HBsAg**, anti-HCV (with HCV RNA if positive or high risk) and **rapid anti-HIV** with consent; a rapid HBsAg card result is acceptable for an immediate decision. [NACO PEP 2021]",
        "**Post-vaccination serology** (anti-HBs) for HCWs, dialysis, HIV, immunocompromised, sexual partners of carriers and infants of HBsAg-positive mothers - test **1-2 months after the last dose**. [ACIP 2018]",
        "**Protective cut-off**: anti-HBs **10 mIU/mL or more**; quantitative ELISA or CLIA is required - a qualitative card test is not enough to document responder status. [CDC 2013]",
        "**Follow-up after an exposure** from an HBsAg-positive source in an unprotected person: **HBsAg and total anti-HBc at 6 months**; check ALT if symptomatic. [CDC 2013]",
        "**Infants of HBsAg-positive mothers**: test **HBsAg and anti-HBs at 9-12 months** (1-2 months after the last dose); HBsAg-negative with anti-HBs under 10 needs a repeat series. [ACIP 2018]",
        "**Dialysis patients**: anti-HBs **annually**, and HBsAg every month for susceptible patients (monthly surveillance in dialysis units). [CDC dialysis guidance]",
        "**HCV after exposure** (cross-reference): baseline anti-HCV, then **HCV RNA at 3-6 weeks** and anti-HCV at 4-6 months; there is no HCV PEP. [CDC 2020]",
      ],
    },
    {
      heading: "Management in OPD - vaccination schedules",
      points: [
        "**Standard adult schedule**: **20 mcg (1 mL) IM deltoid at 0, 1 and 6 months**; children and adolescents up to 19 years get **10 mcg (0.5 mL)** at the same intervals. [ACIP 2018]",
        "**Interrupted series**: never restart - **continue where it stopped**; minimum intervals are 4 weeks between doses 1 and 2, 8 weeks between 2 and 3, and **16 weeks between 1 and 3**. [ACIP 2018]",
        "**Accelerated schedule** (urgent travel, new HCW starting duty): **0, 7 and 21 days** plus a **booster at 12 months**, or **0, 1, 2 and 12 months**. [Engerix-B prescribing information]",
        "**CpG-adjuvanted Heplisav-B** (20 mcg with CpG 1018) for adults 18 years or older: **2 doses one month apart**, with higher seroprotection (90-95%) in older, obese, diabetic and CKD patients; not routinely marketed in India. [ACIP 2018]",
        "**Haemodialysis and CKD stage 4-5**: **40 mcg at 0, 1, 2 and 6 months** (two 20 mcg doses in one sitting, or a 40 mcg dialysis formulation), with annual anti-HBs and a **booster when it falls under 10**. [CDC dialysis guidance]",
        "**HIV**: give the standard or double dose (40 mcg) series; response is best when **CD4 is above 350** and viral load is suppressed - but do not delay vaccination waiting for CD4 to rise. [NIH OI guidelines 2024]",
        "**Pre-vaccination screening** with HBsAg, anti-HBc and anti-HBs is worthwhile in high-prevalence groups (household contacts, PWID, HIV); for HCWs, screen HBsAg and vaccinate in the same visit. [ACIP 2023]",
        "**Non-responder after one series**: give a **second full series** (or a double-dose or Heplisav-B series) and retest; after **6 doses** with no response, stop vaccinating and counsel the person as susceptible. [CDC 2013]",
      ],
    },
    {
      heading: "Post-exposure management (occupational and non-occupational)",
      points: [
        "**First aid within minutes**: wash the wound with **soap and running water**, flush mucosa or eyes with water or saline for several minutes; **do not squeeze, scrub or apply bleach**. [NACO PEP 2021]",
        "**Documented responder**: **no HBIG or vaccine needed**, whatever the source status. [CDC 2013]",
        "**Unvaccinated or incompletely vaccinated, source HBsAg-positive or unknown**: **HBIG 0.06 mL/kg IM** (about 1000-2000 IU in adults) **plus the first vaccine dose at a different site**, then complete the series. [CDC 2013]",
        "**Response unknown**: test anti-HBs now; **10 or more** - nothing further; **under 10** with a positive or unknown source - **HBIG once plus a vaccine booster**, then retest anti-HBs 1-2 months later. [CDC 2013]",
        "**Non-responder after one series**: **HBIG once plus start a second series**; **confirmed non-responder after 6 doses**: **HBIG twice, one month apart**. [CDC 2013]",
        "**Source HBsAg-negative**: no HBIG; complete or start vaccination in the unvaccinated, booster in the unknown-response HCW with low anti-HBs. [CDC 2013]",
        "**Timing**: HBIG is most effective **within 24 hours**, and is of uncertain value after **7 days** for percutaneous and **14 days for sexual exposure**. [CDC 2013]",
        "**Sexual and household exposure** to an HBsAg-positive person: same algorithm; **sexual assault** survivors get vaccine (and HBIG if the assailant is known positive) with HIV PEP and STI cover - see the HIV special situations topic. [CDC STI 2021]",
      ],
    },
    {
      heading: "Inpatient and institutional protocols",
      points: [
        "Every hospital needs a **24-hour sharps injury protocol**: report to the casualty medical officer, register in the **needlestick injury register**, test source and HCW, and give PEP within hours. [NACO PEP 2021]",
        "**Hospital infection control committee** must keep a **vaccination and anti-HBs register** for all staff, including contract housekeeping and waste handlers. [NVHCP 2018]",
        "**Dialysis units**: isolate **HBsAg-positive patients in a separate room with dedicated machines** and staff, monthly HBsAg for susceptible patients, and vaccinate all new patients. [CDC dialysis guidance]",
        "**Admit** the exposed person only for complications: acute hepatitis with **INR over 1.5, encephalopathy** or bilirubin rising - suspect acute liver failure. [Harrison 22e]",
        "**Neonate of HBsAg-positive mother** in the labour room: **vaccine (10 mcg) plus HBIG 0.5 mL (100 IU) IM within 12 hours** at separate thighs; breastfeeding is allowed. [MoHFW NVHCP 2018]",
        "HBIG is stored at **2-8 C** and supplied free at many government hospitals for newborns under **NVHCP**; ensure stock in the labour room and casualty. [NVHCP 2018]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy and breastfeeding**: vaccine and HBIG are **safe**; an exposed pregnant HCW gets PEP exactly as a non-pregnant one. [ACIP 2018]",
        "**HBsAg-positive pregnant woman**: check HBV DNA or HBeAg; **tenofovir disoproxil 300 mg daily from 24-28 weeks** when HBV DNA is 200,000 IU/mL or more (or HBeAg-positive); **WHO 2024 allows TDF for all HBsAg-positive women** where DNA testing is unavailable. [WHO HBV 2024]",
        "**Preterm under 2000 g** born to an HBsAg-positive or unknown mother: vaccine plus HBIG within 12 hours, and the birth dose **does not count** - give **3 more doses**. [ACIP 2018]",
        "**CKD before dialysis**: vaccinate **early (eGFR above 30)**, when response is much better than on dialysis. [KDIGO]",
        "**Elderly, obese, diabetic and smokers**: expect lower titres; check anti-HBs after the series in those at continuing risk and consider an adjuvanted vaccine for revaccination. [ACIP 2018]",
        "**Immunosuppressed (biologics, chemotherapy, transplant)**: vaccinate **before** immunosuppression; HBsAg and anti-HBc screening before rituximab or chemotherapy is mandatory for **HBV reactivation** prophylaxis. [AASLD 2018]",
        "**Resource-limited setting**: if anti-HBs testing is unavailable, an exposed HCW of unknown status with a positive or unknown source should get **HBIG plus a vaccine dose** rather than wait. [CDC 2013]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "Without prophylaxis, **perinatal infection becomes chronic in about 90%**, childhood infection in 25-50%, and **adult infection in under 5%**. [Harrison 22e]",
        "**Birth dose plus HBIG** cuts transmission from HBeAg-positive mothers from **70-90% to about 5-10%**, and adding **antenatal tenofovir** brings it to **under 1-2%**. [WHO HBV 2024]",
        "**Acute liver failure** complicates under 1% of adult acute hepatitis B but has high mortality without liver transplantation. [Harrison 22e]",
        "**Chronic HBV** carries a lifetime risk of **cirrhosis (up to 40%)** and **hepatocellular carcinoma**; this is what vaccination prevents. [EASL 2025]",
        "Vaccine adverse events are trivial; the only absolute contraindication is **anaphylaxis to a previous dose or to yeast**. [WHO position paper 2017]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "Repeat **anti-HBs 1-2 months** after a completed series or after any booster given for low titre. [CDC 2013]",
        "After HBIG, test anti-HBs **4-6 months later** (after passive antibody has cleared) to judge the vaccine response. [CDC 2013]",
        "**Six-month HBsAg and anti-HBc** in an exposed susceptible person; counsel **safe sex and no blood donation** until infection is excluded. [CDC 2013]",
        "Refer to hepatology an exposed HCW who becomes **HBsAg-positive**, has **ALT over 10 times normal**, rising INR or jaundice. [EASL 2025]",
        "**HCW who is HBsAg-positive** should be evaluated by an expert panel; with **HBV DNA under 1000 IU/mL** (on treatment if needed) most can continue practice, including exposure-prone procedures in many policies. [SHEA 2010]",
        "Confirmed non-responders must be **counselled that they are susceptible** and need HBIG after every significant exposure. [CDC 2013]",
      ],
    },
    {
      heading: "Prevention and national programme link",
      points: [
        "**National Viral Hepatitis Control Programme (NVHCP, 2018)** aims to **eliminate HCV and reduce HBV** burden, with free testing, tenofovir, **HCW vaccination** and **HBIG for newborns of positive mothers**. [NVHCP 2018]",
        "**UIP** covers the birth dose and three pentavalent doses; NFHS-5 (2019-21) shows **HepB birth dose coverage still well below pentavalent coverage**, mainly from home and late deliveries. [NFHS-5]",
        "**Antenatal HBsAg screening** of every pregnant woman is the entry point to tenofovir and newborn HBIG; WHO's triple elimination initiative covers **HIV, syphilis and HBV**. [WHO HBV 2024]",
        "**Standard precautions**: gloves, **no recapping**, puncture-proof sharps containers at the point of use, **safety-engineered devices** and auto-disable syringes. [BMW Rules 2016]",
        "**Safe injection, safe blood**: NAT-screened blood where available, single-use glucometer lancets and dialysis-unit hygiene prevent nosocomial outbreaks. [NVHCP 2018]",
        "Counsel **household contacts and sexual partners** of HBsAg-positive patients to test and get vaccinated; **condoms until the partner's anti-HBs is 10 or more**. [ACIP 2018]",
      ],
    },
    {
      heading: "Latest guideline updates (2022-2026)",
      points: [
        "**ACIP 2022**: universal hepatitis B vaccination for **all adults 19-59 years**, and for those 60 or older with risk factors or on request. [ACIP 2022]",
        "**CDC 2023 screening**: **once-in-a-lifetime triple-panel test (HBsAg, anti-HBs, total anti-HBc)** for every adult 18 years or older - it identifies infection, immunity and the need for vaccine together. [CDC 2023]",
        "**WHO 2024 hepatitis B guideline**: simplified treatment criteria, and **tenofovir prophylaxis for pregnant women** with HBV DNA 200,000 IU/mL or more or HBeAg-positive - or for all HBsAg-positive women where testing is unavailable. [WHO HBV 2024]",
        "**EASL 2025 HBV guideline**: broader treatment indications and reinforces vaccination of all at-risk adults and screening before immunosuppression. [EASL 2025]",
        "**ACIP December 2025** voted to drop the universal US birth dose for infants of **HBsAg-negative mothers** in favour of individual decision-making; **WHO, AAP and India's UIP retain the universal birth dose within 24 hours** - write the WHO/India position in the exam. [ACIP 2025]",
        "**NACO PEP guidance (2021)** keeps HBV assessment inside the integrated occupational exposure protocol with HIV PEP - see the HIV special situations topic. [NACO PEP 2021]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic question: **needlestick injury in a resident** - write first aid, risk grading, source testing, the HBV table by vaccine status, HIV PEP and HCV follow-up in one flow. [CDC 2013]",
        "Commonest mistake: giving **HBIG to a documented responder** - a responder needs nothing, ever. [CDC 2013]",
        "Second mistake: **restarting an interrupted series** - doses are never repeated, only completed. [ACIP 2018]",
        "Know the numbers: **10 mIU/mL** protective, test at **1-2 months**, HBIG **0.06 mL/kg**, newborn HBIG **0.5 mL within 12 hours**, non-responder after **6 doses**. [CDC 2013]",
        "Viva: why test anti-HBc in a non-responder? - because **chronic HBV** is a hidden cause of non-response. [CDC 2013]",
        "Viva: why two HBIG doses in a confirmed non-responder? - HBIG's **half-life is 3-4 weeks** and the incubation period is up to 6 months. [CDC 2013]",
      ],
    },
  ],
  tables: [
    {
      heading: "Post-exposure management of HBV by the exposed person's status (CDC 2013)",
      columns: ["Exposed person", "Source HBsAg-positive or unknown", "Source HBsAg-negative", "Follow-up"],
      rows: [
        ["Documented responder (anti-HBs 10 or more)", "No action", "No action", "None"],
        ["Unvaccinated or incomplete series", "HBIG 0.06 mL/kg once plus start or complete vaccine series", "Start or complete vaccine series", "Anti-HBs 1-2 months after series; HBsAg and anti-HBc at 6 months if source positive"],
        ["Vaccinated, response unknown - anti-HBs now 10 or more", "No action", "No action", "None"],
        ["Vaccinated, response unknown - anti-HBs now under 10", "HBIG once plus one vaccine booster", "One vaccine booster", "Anti-HBs 1-2 months after booster (4-6 months if HBIG given); complete second series if still under 10"],
        ["Non-responder after one series (3 doses)", "HBIG once plus start second series", "Start second series", "Anti-HBs 1-2 months after second series"],
        ["Non-responder after two series (6 doses)", "HBIG twice, 1 month apart", "No action", "HBsAg and anti-HBc at 6 months if source positive"],
      ],
    },
    {
      heading: "Drugs and vaccines for HBV prevention",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Recombinant HBV vaccine (adult)", "20 mcg (1 mL) IM deltoid", "0, 1, 6 months; accelerated 0, 7, 21 days plus 12-month booster", "Sore arm, low fever; anaphylaxis to previous dose or yeast is the only contraindication"],
        ["Recombinant HBV vaccine (child to 19 y)", "10 mcg (0.5 mL) IM thigh (infant) or deltoid", "Birth dose within 24 h, then pentavalent 6, 10, 14 weeks", "Same; safe in preterm and pregnancy"],
        ["Dialysis / CKD 4-5 schedule", "40 mcg IM (2 x 20 mcg or dialysis formulation)", "0, 1, 2, 6 months; annual anti-HBs, booster if under 10", "Lower and shorter-lived response; vaccinate before dialysis"],
        ["CpG 1018-adjuvanted HBsAg (Heplisav-B)", "20 mcg IM", "2 doses at 0 and 1 month (adults 18 or older)", "Not routinely available in India; data in pregnancy limited"],
        ["Hepatitis B immunoglobulin (HBIG) - adult PEP", "0.06 mL/kg IM (about 1000-2000 IU)", "Single dose within 24 h (up to 7 days); repeat at 1 month in confirmed non-responders", "Local pain; rare hypersensitivity; give vaccine at a different site"],
        ["HBIG - newborn of HBsAg-positive mother", "0.5 mL (100 IU) IM anterolateral thigh", "Once within 12 h of birth, with birth-dose vaccine", "Breastfeeding allowed; test infant at 9-12 months"],
        ["Tenofovir disoproxil fumarate (antenatal)", "300 mg orally once daily", "From 24-28 weeks until delivery or 1-3 months postpartum", "Renal tubular toxicity, bone loss; check creatinine; ALT flare after stopping"],
      ],
    },
    {
      heading: "Interpreting hepatitis B serology",
      columns: ["HBsAg", "Anti-HBc (total)", "Anti-HBs", "Interpretation"],
      rows: [
        ["Negative", "Negative", "Negative", "Susceptible - vaccinate"],
        ["Negative", "Negative", "10 mIU/mL or more", "Immune from vaccination"],
        ["Negative", "Positive", "Positive", "Immune from past natural infection"],
        ["Positive", "Positive (IgM)", "Negative", "Acute HBV infection"],
        ["Positive", "Positive (IgG)", "Negative", "Chronic HBV infection"],
        ["Negative", "Positive", "Negative", "Isolated anti-HBc: false positive, window, or occult HBV - check HBV DNA if immunosuppressed"],
        ["Negative", "Negative", "Positive within 4-6 months of HBIG", "Passive antibody - cannot judge vaccine response yet"],
      ],
    },
    {
      heading: "Why a person fails to reach anti-HBs 10 mIU/mL - and what to do",
      columns: ["Cause", "Clue", "Action"],
      rows: [
        ["Waning antibody in a past responder", "Completed series years ago, never tested", "One booster, retest at 1-2 months"],
        ["Host factors (age over 40, obesity, smoking, diabetes)", "Low titre after a correct series", "Second series, double dose or adjuvanted vaccine"],
        ["CKD or dialysis", "Raised creatinine, on dialysis", "40 mcg schedule at 0, 1, 2, 6 months; annual titre"],
        ["HIV or immunosuppression", "Low CD4, biologics, steroids", "Double dose; revaccinate after immune recovery"],
        ["Chronic HBV infection", "HBsAg or anti-HBc positive", "Stop vaccinating; refer for HBV care"],
        ["Poor technique", "Gluteal injection, broken cold chain", "Repeat series IM deltoid with proper storage"],
      ],
    },
  ],
  redFlags: [
    "Needlestick from an HBsAg-positive or unknown source in an unvaccinated or non-responder HCW - HBIG and vaccine within 24 hours, do not wait for reports.",
    "Exposed person with jaundice, INR over 1.5 or confusion - acute liver failure; refer to a liver unit.",
    "Newborn of an HBsAg-positive mother without HBIG and vaccine by 12 hours - give both now.",
    "HBsAg-positive pregnant woman with high HBV DNA or HBeAg not on tenofovir by 28 weeks.",
    "HBsAg or anti-HBc positive patient about to start rituximab, chemotherapy or high-dose steroids - needs antiviral prophylaxis first.",
    "Combined exposure with HIV risk - HIV PEP must start within 72 hours, ideally 2 hours.",
    "HBV case in a dialysis unit - outbreak investigation and isolation.",
  ],
  pearls: [
    "**Responder once, protected forever** - no boosters, no PEP, no repeat titres in immunocompetent HCWs.",
    "**10-1-2**: protective titre 10 mIU/mL, tested 1-2 months after the last dose.",
    "**Never restart** an interrupted series - just complete it.",
    "**HBIG 0.06 mL/kg within 24 hours**; newborn HBIG 0.5 mL within 12 hours with the birth dose.",
    "**Non-responder = 6 doses** with anti-HBs under 10 and HBsAg negative; gets two HBIG doses after exposure.",
    "**Rule of 3s for needlestick risk**: HBV 30%, HCV 3%, HIV 0.3% (classical teaching; current HCV figure is lower).",
    "**Anti-HBs alone = vaccine; anti-HBs plus anti-HBc = past infection.**",
    "**Dialysis needs 40 mcg x 4 doses** and annual anti-HBs.",
    "Check **HBsAg and anti-HBc** in every non-responder - a hidden carrier does not make antibody.",
  ],
  mcqs: [
    {
      id: "infectious-fever-hepatitis-b-vaccine-pep-q1",
      stem: "A nursing officer had anti-HBs of 120 mIU/mL one month after her third hepatitis B vaccine dose 8 years ago. She now sustains a deep needlestick from an HBsAg-positive patient. What is the correct HBV management?",
      options: [
        "HBIG 0.06 mL/kg plus one vaccine booster",
        "Test anti-HBs now and give HBIG if under 10 mIU/mL",
        "No HBIG or vaccine is needed",
        "A full repeat 3-dose vaccine series",
      ],
      answer: 2,
      explanation:
        "A documented responder (anti-HBs 10 mIU/mL or more after a complete series) has immune memory that protects against chronic infection for decades, so no HBIG, booster or retesting is needed whatever the source. Testing anti-HBs now is for people whose response was never documented, HBIG with booster is for unknown-response people with a low titre, and repeating the series is for non-responders.",
      difficulty: "moderate",
    },
    {
      id: "infectious-fever-hepatitis-b-vaccine-pep-q2",
      stem: "A laboratory technician has anti-HBs under 10 mIU/mL after two complete hepatitis B vaccine series, and HBsAg and anti-HBc are negative. After a needlestick from an HBsAg-positive source, what is recommended?",
      options: [
        "HBIG once plus a third vaccine series",
        "HBIG two doses, one month apart",
        "Tenofovir for 4 weeks",
        "No prophylaxis because he is a known non-responder",
      ],
      answer: 1,
      explanation:
        "After six doses without response the person is a confirmed non-responder; further vaccine is futile, so passive protection is given as two HBIG doses a month apart to cover the long incubation (HBIG half-life is 3-4 weeks). HBIG once with a new series is for non-responders after only one series; tenofovir is not an HBV PEP standard; doing nothing leaves him unprotected.",
      difficulty: "hard",
    },
    {
      id: "infectious-fever-hepatitis-b-vaccine-pep-q3",
      stem: "A healthy 25-year-old received hepatitis B vaccine doses in January and February and then missed the third dose. He presents in December of the same year. What should be done?",
      options: [
        "Give the third dose now",
        "Restart the series from dose one",
        "Check anti-HBs and give the third dose only if under 10",
        "Give two doses one month apart",
      ],
      answer: 0,
      explanation:
        "An interrupted hepatitis B series is never restarted; the missed dose is simply given, because longer intervals before the last dose actually improve the final titre. Restarting wastes doses, checking anti-HBs mid-series is not meaningful for deciding the third dose, and two extra doses are not required for a healthy adult.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-hepatitis-b-vaccine-pep-q4",
      stem: "A baby is born to a mother who is HBsAg-positive and HBeAg-positive. Which is the correct newborn prophylaxis?",
      options: [
        "Hepatitis B vaccine at 6 weeks with pentavalent",
        "HBIG alone within 72 hours",
        "Hepatitis B vaccine and HBIG within 12 hours at separate sites",
        "Vaccine within 24 hours and avoid breastfeeding",
      ],
      answer: 2,
      explanation:
        "Infants of HBsAg-positive mothers need both active and passive immunisation - birth-dose vaccine plus HBIG 0.5 mL (100 IU) within 12 hours, at different thighs - which reduces transmission to about 5-10%, further lowered by antenatal tenofovir. Waiting until 6 weeks or giving HBIG alone loses the perinatal window, and breastfeeding is not contraindicated.",
      difficulty: "easy",
    },
    {
      id: "infectious-fever-hepatitis-b-vaccine-pep-q5",
      stem: "Which vaccine schedule is recommended for an adult starting maintenance haemodialysis who is susceptible to hepatitis B?",
      options: [
        "20 mcg at 0, 1 and 6 months",
        "40 mcg at 0, 1, 2 and 6 months with annual anti-HBs",
        "10 mcg intradermal monthly for 6 months",
        "Single 40 mcg dose with a booster every 5 years",
      ],
      answer: 1,
      explanation:
        "Uraemic immune dysfunction blunts and shortens the response, so dialysis patients receive higher-dose 40 mcg vaccine at 0, 1, 2 and 6 months, with annual anti-HBs and a booster when it drops below 10 mIU/mL. The standard 20 mcg schedule gives poor response in dialysis; intradermal regimens are an off-label rescue option, and a single dose with fixed 5-yearly boosters is not a recommended schedule.",
      difficulty: "moderate",
    },
  ],
  theory: [
    {
      id: "infectious-fever-hepatitis-b-vaccine-pep-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "less-common",
      question:
        "A postgraduate resident sustains a needlestick injury while drawing blood from a patient with chronic hepatitis B. Describe the immediate management, the post-exposure protocol for hepatitis B based on vaccination status, and the follow-up. Add a note on hepatitis B vaccination of healthcare workers.",
      openingLines: [
        "Percutaneous exposure to an HBsAg-positive source carries a transmission risk of up to 30% (HBeAg-positive) and is managed by first aid, source testing, and post-exposure prophylaxis decided by the exposed person's anti-HBs status.",
        "A documented responder (anti-HBs 10 mIU/mL or more after a complete series) needs nothing; the unprotected need HBIG 0.06 mL/kg plus vaccine within 24 hours (CDC 2013).",
      ],
      answer: [
        {
          heading: "Immediate first aid and reporting",
          points: [
            "Wash with soap and running water; do not squeeze or apply antiseptic bleach; flush mucosa with water.",
            "Report to the casualty medical officer, register the injury, grade the exposure (hollow needle, depth, blood).",
          ],
        },
        {
          heading: "Risk assessment and testing",
          points: [
            "Source: HBsAg, anti-HCV, rapid HIV with consent.",
            "Exposed: anti-HBs if response unknown; HBsAg and anti-HBc if unvaccinated or non-responder; baseline HIV and HCV.",
          ],
        },
        {
          heading: "HBV PEP by vaccination status",
          points: [
            "Responder - no action.",
            "Unvaccinated - HBIG 0.06 mL/kg plus vaccine series.",
            "Response unknown - anti-HBs now; under 10: HBIG plus booster.",
            "Non-responder after 3 doses - HBIG plus second series; after 6 doses - HBIG twice, 1 month apart.",
            "HBIG within 24 h, not beyond 7 days.",
          ],
        },
        {
          heading: "HIV and HCV in the same exposure",
          points: [
            "HIV PEP (TDF-3TC-DTG for 28 days) within 72 h if source positive or unknown high risk.",
            "HCV: no PEP; HCV RNA at 3-6 weeks, anti-HCV at 4-6 months.",
          ],
        },
        {
          heading: "Follow-up",
          points: [
            "Anti-HBs 1-2 months after series (4-6 months if HBIG given).",
            "HBsAg and anti-HBc at 6 months; counsel no blood donation and safe sex meanwhile.",
          ],
        },
        {
          heading: "Vaccination of HCWs",
          points: [
            "20 mcg IM deltoid 0, 1, 6 months before clinical exposure; anti-HBs at 1-2 months.",
            "Under 10: second series; non-responder after 6 doses - check HBsAg/anti-HBc, counsel.",
            "No boosters for responders; NVHCP mandates HCW vaccination; prevention by standard precautions.",
          ],
        },
      ],
      mustDraw: ["Flow chart of HBV PEP by vaccine status of the exposed HCW", "Table of HBV serology interpretation"],
      markSplit: [
        { part: "First aid and risk assessment", marks: 2 },
        { part: "HBV PEP algorithm", marks: 4 },
        { part: "HIV/HCV and follow-up", marks: 2 },
        { part: "HCW vaccination", marks: 2 },
      ],
      keywords: ["needlestick", "HBIG", "anti-HBs", "non-responder", "PEP", "occupational exposure"],
    },
    {
      id: "infectious-fever-hepatitis-b-vaccine-pep-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Write a short note on non-responders to hepatitis B vaccine.",
      openingLines: [
        "A non-responder is a person whose anti-HBs stays under 10 mIU/mL 1-2 months after two complete hepatitis B vaccine series (6 doses), with HBsAg and anti-HBc negative.",
        "About 5-10% of healthy adults fail a first series; about half of them respond to a second.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Age over 40, male, obesity, smoking, diabetes, CKD, HIV, immunosuppression, HLA types, gluteal injection.",
            "Hidden chronic HBV - always test HBsAg and anti-HBc.",
          ],
        },
        {
          heading: "Approach",
          points: [
            "Distinguish waning antibody: one booster and retest at 1-2 months.",
            "Second series - standard, double dose 40 mcg, or CpG-adjuvanted vaccine (2 doses).",
            "Retest; after 6 doses stop vaccinating.",
          ],
        },
        {
          heading: "Management after exposure",
          points: [
            "HBIG 0.06 mL/kg twice, one month apart, if source HBsAg-positive or unknown.",
            "Counsel that they remain susceptible; record status in the HCW register.",
          ],
        },
      ],
      mustDraw: ["Flow: anti-HBs under 10 - booster - second series - non-responder"],
      markSplit: [
        { part: "Definition and causes", marks: 2 },
        { part: "Revaccination strategy", marks: 2 },
        { part: "Post-exposure management", marks: 1 },
      ],
      keywords: ["non-responder", "anti-HBs", "revaccination", "HBIG", "Heplisav-B"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Acute viral hepatitis and immunisation chapters",
    "CDC. Guidance for evaluating health-care personnel for hepatitis B virus protection and for administering postexposure management. MMWR 2013",
    "Schillie S et al. Prevention of hepatitis B virus infection in the United States: recommendations of ACIP. MMWR 2018",
    "Weng MK et al. Universal hepatitis B vaccination in adults aged 19-59 years: updated ACIP recommendations. MMWR 2022",
    "Conners EE et al. Screening and testing for hepatitis B virus infection: CDC recommendations, MMWR 2023",
    "WHO Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection, 2024",
    "National Viral Hepatitis Control Programme (NVHCP) operational and technical guidelines, MoHFW, 2018",
    "NACO National Guidelines for HIV Care and Treatment (post-exposure prophylaxis), 2021",
  ],
});

export default topics;
