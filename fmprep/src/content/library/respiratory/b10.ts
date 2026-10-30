import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "respiratory-adult-respiratory-vaccines",
  title: "Adult respiratory vaccines: influenza, pneumococcal, RSV, pertussis and COVID",
  oneLiner:
    "Adult respiratory vaccination means a **yearly inactivated influenza vaccine**, a **pneumococcal conjugate vaccine (PCV20 or PCV21 alone, or PCV15/PCV13 followed by PPSV23)**, a **single dose of RSV prefusion-F vaccine** in older or high-risk adults, **Tdap** once in adulthood and in every pregnancy, and **COVID-19 vaccination** for high-risk groups - offered to everyone over 50-65 and to younger adults with chronic heart, lung, kidney, liver disease, diabetes or immunosuppression.",
  frequency: "common",
  keywords: [
    "adult immunisation",
    "influenza vaccine",
    "flu shot",
    "trivalent influenza vaccine",
    "PCV13",
    "PCV15",
    "PCV20",
    "PCV21",
    "PPSV23",
    "Prevenar",
    "Pneumovax",
    "RSV vaccine",
    "Arexvy",
    "Abrysvo",
    "mRESVIA",
    "Tdap",
    "Boostrix",
    "COVID-19 vaccine",
    "API adult immunisation",
    "ACIP",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Adult respiratory vaccines** are those that prevent lower respiratory tract infection and its cardiac and metabolic sequelae in adults: **influenza, pneumococcal, respiratory syncytial virus (RSV), pertussis (Tdap) and COVID-19**. [Harrison 22e]",
        "**Lower respiratory infection** remains one of the leading infectious causes of death worldwide, and deaths concentrate at the extremes of age and in people with chronic disease. [GBD 2021]",
        "Seasonal **influenza** causes an estimated **290,000-650,000 respiratory deaths a year worldwide**, most in adults over 65. [WHO 2023]",
        "**Streptococcus pneumoniae** is the commonest bacterial cause of community-acquired pneumonia in adults in India and worldwide, and invasive pneumococcal disease (bacteraemia, meningitis) carries a case fatality of about 10-20% in older adults. [Harrison 22e]",
        "**RSV** in adults over 60 causes a hospitalisation burden comparable to influenza in high-income settings, with exacerbations of COPD and heart failure as common presentations. [ACIP 2024]",
        "In India, influenza circulates **year-round with seasonal peaks** - a monsoon peak (July-September) across most of the country and a winter peak in the southern states - as shown by **ICMR-IDSP influenza surveillance**. [ICMR 2024]",
        "**Adult vaccine coverage in India is very low**: there is no adult schedule under the Universal Immunization Programme except **Td in pregnancy**, so adult vaccination depends on the clinician who offers it. [API 2024]",
        "The **Universal Immunization Programme (UIP)** gives **PCV to infants** (nationwide since 2021), which reduces carriage and gives some indirect (herd) protection to adults. [MoHFW 2021]",
      ],
    },
    {
      heading: "Who needs them: risk groups",
      points: [
        "**Age** is the dominant risk factor: influenza every year for **all adults**, especially **over 50-65**; pneumococcal conjugate vaccine for **all adults 50 and over** (ACIP 2024) or **65 and over** (API 2024); RSV for **all 75 and over** and **60-74 at increased risk**. [ACIP 2024]",
        "**Chronic lung disease**: COPD, asthma, bronchiectasis, interstitial lung disease, post-TB lung disease - all should receive influenza, pneumococcal and (if 60 or over) RSV vaccines. [GOLD 2025]",
        "**Chronic heart disease** (heart failure, coronary disease, cardiomyopathy), **diabetes**, **chronic kidney disease** and nephrotic syndrome, and **chronic liver disease or cirrhosis**. [API 2024]",
        "**Immunocompromise**: HIV, malignancy, transplant, **asplenia or sickle cell disease**, long-term corticosteroids (prednisolone 20 mg/day or more for 2 weeks or more), biologics and DMARDs. [ACIP 2024]",
        "**CSF leak and cochlear implant** - specific indications for pneumococcal vaccine with a shorter PCV-to-PPSV23 interval of 8 weeks. [ACIP 2024]",
        "**Smoking and alcohol use disorder** both independently raise invasive pneumococcal disease risk and are indications for pneumococcal vaccine below 50. [ACIP 2024]",
        "**Pregnancy**: influenza (any trimester), **Tdap at 27-36 weeks** of each pregnancy and **RSVpreF (Abrysvo) at 32-36 weeks** to protect the newborn. [ACIP 2024]",
        "**Healthcare workers, residents of old-age homes, Hajj and Umrah pilgrims** and caregivers of infants (cocooning for pertussis and influenza). [API 2024]",
      ],
    },
    {
      heading: "Immunology: why the vaccines are built as they are",
      points: [
        "**Polysaccharide vaccines (PPSV23)** stimulate B cells directly (**T-cell-independent**), so they give no immunological memory, no booster response, no effect on nasopharyngeal carriage and can cause **hyporesponsiveness** with repeat doses. [Harrison 22e]",
        "**Conjugate vaccines (PCV13, PCV15, PCV20, PCV21)** link the capsular polysaccharide to a carrier protein (**CRM197**), recruiting **T-helper cells** - producing class-switched, high-affinity IgG, memory B cells and reduced carriage. [Harrison 22e]",
        "**Serotype coverage** decides choice: PCV20 adds 7 serotypes to PCV13; **PCV21 (Capvaxive)** is designed around serotypes that cause most adult invasive disease and covers several not in PCV20. [ACIP 2024]",
        "**Influenza** vaccine induces antibodies against **haemagglutinin (HA)**; **antigenic drift** (point mutations) means yearly strain updates and yearly vaccination, while **antigenic shift** (reassortment) causes pandemics. [Harrison 22e]",
        "**Immunosenescence** in older adults blunts the antibody response, which is why **high-dose, adjuvanted (MF59) or recombinant influenza vaccines** are preferred in 65 and over where available. [ACIP 2024]",
        "**RSV vaccines target the prefusion F (pre-F) protein**: pre-F displays the most potent neutralising epitopes, which are lost when F flips to its postfusion form - the structural insight behind all three licensed vaccines. [Harrison 22e]",
        "**Arexvy** is pre-F protein with **AS01E adjuvant**; **Abrysvo** is bivalent (RSV A and B) pre-F without adjuvant; **mRESVIA** is an mRNA vaccine encoding pre-F. [ACIP 2024]",
        "**Acellular pertussis** immunity wanes within 5-10 years, which explains adolescent and adult pertussis presenting as prolonged cough and transmission to unvaccinated infants. [Harrison 22e]",
        "**Maternal IgG crosses the placenta** actively in the third trimester, so Tdap and RSVpreF given at the right gestation protect the newborn before the infant can be vaccinated. [ACIP 2024]",
      ],
    },
    {
      heading: "Classification of adult respiratory vaccines",
      points: [
        "**Inactivated/split or subunit**: inactivated influenza vaccine (IIV), recombinant influenza vaccine (RIV) - safe in pregnancy and immunosuppression. [ACIP 2024]",
        "**Live attenuated**: **LAIV (intranasal)** - contraindicated in pregnancy, immunosuppression and in contacts of severely immunocompromised people; not routinely used in Indian adults. [ACIP 2024]",
        "**Polysaccharide**: **PPSV23** - 23 serotypes, 0.5 mL IM or SC. [ACIP 2024]",
        "**Conjugate**: PCV13 (Prevenar 13), PCV15 (Vaxneuvance), PCV20 (Prevenar 20), PCV21 (Capvaxive) - 0.5 mL IM. [ACIP 2024]",
        "**Protein subunit**: RSV pre-F (Arexvy adjuvanted, Abrysvo non-adjuvanted); **Corbevax** (RBD protein) COVID vaccine made in India. [ACIP 2024]",
        "**Toxoid plus acellular antigens**: Td and **Tdap** (reduced-dose diphtheria and pertussis antigens for adults). [ACIP 2024]",
        "**mRNA**: COVID-19 mRNA vaccines and **mRESVIA** (RSV); **viral vector**: Covishield (ChAdOx1); **whole-virion inactivated**: Covaxin. [WHO SAGE 2024]",
      ],
    },
    {
      heading: "Clinical features: the diseases the vaccines prevent",
      points: [
        "**Influenza**: abrupt fever, myalgia, headache, dry cough and prostration; complications are primary viral pneumonia, **secondary Staphylococcus aureus or pneumococcal pneumonia**, myocarditis and **acute MI in the week after infection**. [Harrison 22e]",
        "**Pneumococcal pneumonia**: sudden rigor, pleuritic pain, rusty sputum and lobar consolidation; invasive disease adds bacteraemia and meningitis, highest in asplenia and alcohol use disorder. [Harrison 22e]",
        "**RSV in older adults**: cold-like illness that often presents as **wheeze, COPD or asthma exacerbation or decompensated heart failure** rather than as pneumonia, and is under-diagnosed without PCR. [ACIP 2024]",
        "**Adult pertussis**: a **cough lasting over 2-3 weeks** with paroxysms, post-tussive vomiting or inspiratory whoop; often missed and labelled as post-viral cough. [Harrison 22e]",
        "**COVID-19** in vaccinated adults is usually mild, but older adults and immunocompromised people still face pneumonia, thrombosis and hospitalisation. [WHO SAGE 2024]",
        "**Opportunistic history in the OPD**: every visit by an older adult or a person with COPD, diabetes, heart failure or CKD is a chance to ask **which vaccines and when**, and write the date in the record. [API 2024]",
      ],
    },
    {
      heading: "Before vaccinating: screening and examination",
      points: [
        "Check for **anaphylaxis to a previous dose or component** - the only absolute contraindication to the inactivated vaccines. [ACIP 2024]",
        "**Moderate or severe acute illness with fever** is a precaution - defer until better; a mild cold is not a reason to delay. [ACIP 2024]",
        "**Egg allergy is no longer a contraindication or precaution** for any influenza vaccine, regardless of severity - no extra observation beyond routine. [ACIP 2023]",
        "**Previous Guillain-Barre syndrome within 6 weeks of influenza vaccine** is a precaution; weigh risk and benefit. [ACIP 2024]",
        "**Bleeding disorder or anticoagulation**: IM injection with a fine needle (23G or finer) and firm pressure for 2 minutes without rubbing is acceptable. [ACIP 2024]",
        "Ask about **immunosuppressive plans** - vaccinate at least **2 weeks before** chemotherapy, rituximab, splenectomy or transplant where possible. [ACIP 2024]",
        "Observe for **15 minutes** after vaccination (30 minutes after a past immediate reaction), with adrenaline 1:1000 ready - **0.5 mg IM** in the anterolateral thigh for anaphylaxis. [API 2024]",
      ],
    },
    {
      heading: "Differential considerations: choosing between products",
      points: [
        "**PCV20 or PCV21 alone** completes the pneumococcal series in one dose - simplest where available. [ACIP 2024]",
        "**PCV15 (or PCV13 in India) followed by PPSV23** after at least **1 year** (8 weeks if immunocompromised, CSF leak or cochlear implant) - used where PCV20/21 is not available or affordable. [ACIP 2024]",
        "**PPSV23 alone is no longer adequate** - an adult who had only PPSV23 should receive PCV20 or PCV21 at least 1 year later. [ACIP 2024]",
        "**Arexvy vs Abrysvo vs mRESVIA**: all give one dose; efficacy against RSV lower respiratory disease was about **83% (Arexvy), 67-86% (Abrysvo) and 84% (mRESVIA)** in the first season; only **Abrysvo is approved in pregnancy**. [ACIP 2024]",
        "**Standard-dose vs high-dose influenza vaccine** in 65 and over: high-dose, adjuvanted or recombinant vaccines are preferred (ACIP), but **any available standard-dose vaccine is better than none**. [ACIP 2024]",
        "**Td vs Tdap**: Tdap once in adulthood (then Td or Tdap every 10 years), and **Tdap in every pregnancy**; India's UIP gives **Td** in pregnancy, and **Tdap** is available privately. [FOGSI 2023]",
      ],
    },
    {
      heading: "Investigations: serology and records",
      points: [
        "**No routine serology** is needed before or after influenza, pneumococcal, RSV or Tdap vaccination - the decision is clinical and schedule-based. [ACIP 2024]",
        "**Haemagglutination-inhibition titre of 1:40 or more** is the conventional correlate of about 50% protection against influenza - a research measure, not a clinic test. [Harrison 22e]",
        "**Pneumococcal serotype-specific IgG** is measured only in immunodeficiency work-up (to test polysaccharide responsiveness), not to check vaccine success. [Harrison 22e]",
        "**Diagnostic confirmation of the disease** matters for public health: influenza and RSV by **RT-PCR on nasopharyngeal swab**, pertussis by **PCR in the first 3 weeks** of cough and culture/serology later. [Harrison 22e]",
        "Record **product, batch number, date, site and next dose due** in the patient's card and the clinic register; a **vaccination card** for adults avoids repeat or missed doses. [API 2024]",
        "Report **adverse events following immunisation (AEFI)** through the national AEFI surveillance system; serious AEFI needs investigation within the timelines of the AEFI guidelines. [MoHFW 2024]",
      ],
    },
    {
      heading: "Management in OPD: schedules and doses",
      points: [
        "**Influenza**: inactivated vaccine **0.5 mL IM in the deltoid, once every year**, using the current-season formulation; two doses 4 weeks apart only for children under 9 getting their first season. [WHO 2024]",
        "**Timing in India**: for most of India give the **Southern Hemisphere formulation in April-June** before the monsoon peak; for the southern states with a winter peak, the **Northern Hemisphere formulation in September-October**. [ICMR 2024]",
        "**Pneumococcal**: **PCV20 or PCV21 0.5 mL IM single dose**; or **PCV13/PCV15 0.5 mL IM then PPSV23 0.5 mL IM or SC at least 1 year later** (8 weeks in high-risk). [ACIP 2024]",
        "**RSV**: **single 0.5 mL IM dose** for all adults 75 and over and those 60-74 at increased risk (and 50-59 at increased risk per ACIP 2025); **no repeat dose** is currently recommended. [ACIP 2025]",
        "**Tdap**: **0.5 mL IM once** in adulthood for those who never had it, then **Td or Tdap every 10 years**; in pregnancy at **27-36 weeks**, ideally early in that window. [ACIP 2024]",
        "**COVID-19**: offer an updated dose to **older adults, immunocompromised and those with comorbidities**, about **6-12 months after the last dose** per WHO SAGE; national guidance in India currently has no routine adult booster drive. [WHO SAGE 2024]",
        "**Co-administration**: influenza, PCV, RSV, Tdap and COVID vaccines can be given at the **same visit at different sites** (at least 2.5 cm apart); more local reactions but no loss of immunity. [ACIP 2024]",
        "**Paracetamol** for post-vaccination fever or arm pain; do not give it routinely beforehand as prophylaxis. [API 2024]",
      ],
    },
    {
      heading: "Management in IPD and emergency settings",
      points: [
        "**Inpatient vaccination at discharge** (after an admission for pneumonia, COPD exacerbation or heart failure) is one of the most effective missed-opportunity fixes - give influenza and PCV before the patient leaves. [ACIP 2024]",
        "**Acute illness**: give vaccines once the patient is afebrile and stable; an admission for an exacerbation is not a contraindication once the acute phase settles. [ACIP 2024]",
        "**Before elective splenectomy**: pneumococcal, Hib and meningococcal vaccines **at least 2 weeks before**; after emergency splenectomy, give them **14 days after** surgery or before discharge if follow-up is uncertain. [ACIP 2024]",
        "**Anaphylaxis after a vaccine**: adrenaline **0.5 mg IM (0.5 mL of 1:1000)**, repeat every 5 minutes as needed, oxygen, IV fluids, and observe; document as a contraindication to that product. [Resuscitation Council UK 2021]",
        "**Outbreak control in hospitals and old-age homes**: vaccinate unvaccinated staff and residents and give oseltamivir prophylaxis during an influenza outbreak. [CDC 2024]",
        "**Wound management**: Td or Tdap if the last tetanus-containing dose was over 5 years ago for a dirty wound or over 10 years for a clean wound; Tdap preferred if never given. [ACIP 2024]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: inactivated influenza vaccine in **any trimester**; **Tdap 27-36 weeks**; **Abrysvo 32-36 weeks** (seasonally) or infant nirsevimab - not both; COVID vaccine where offered; **LAIV contraindicated**. [ACIP 2024]",
        "**Elderly**: prefer high-dose or adjuvanted influenza vaccine if available; RSV and PCV at the same opportunity; check frailty-related falls risk is not a reason to defer. [ACIP 2024]",
        "**CKD and dialysis**: influenza yearly, PCV series, plus **hepatitis B** (higher dose); antibody responses are lower but benefit is clear. [KDIGO 2024]",
        "**Diabetes**: all vaccines as for age, and PCV even below 50; influenza vaccination is associated with fewer cardiovascular events and admissions. [ADA 2025]",
        "**HIV**: give **PCV regardless of CD4 count** (PCV20/21, or PCV13/15 then PPSV23 8 weeks later); avoid LAIV; response is better once CD4 is over 200. [ACIP 2024]",
        "**Biologics and immunosuppressants**: vaccinate 2 weeks before starting; after **rituximab** wait about 6 months for a useful response; inactivated vaccines are safe at any time. [ACR 2022]",
        "**Post-TB lung disease and COPD in India** (often biomass-related): these patients have the highest pneumonia risk and should be prioritised for influenza and pneumococcal vaccines. [GOLD 2025]",
        "**Hajj and Umrah pilgrims**: influenza and pneumococcal vaccines recommended alongside the mandatory meningococcal ACWY vaccine. [API 2024]",
      ],
    },
    {
      heading: "Adverse effects, efficacy and prognosis",
      points: [
        "**Local reactions** (pain, redness, swelling) are the commonest; **adjuvanted vaccines (Arexvy, Shingrix-type AS01)** cause more fatigue, myalgia and fever for 1-2 days. [ACIP 2024]",
        "**Guillain-Barre syndrome**: influenza vaccine carries at most about **1-2 extra cases per million doses**; an FDA warning (January 2025) notes a small GBS risk after **Arexvy and Abrysvo** in 60 and over. [FDA 2025]",
        "**Influenza vaccine effectiveness** is about **40-60%** in matched seasons, lower in the elderly; it also reduces **cardiovascular events**, with an RCT (IAMI) showing lower mortality after MI. [ESC 2023]",
        "**PCV13 efficacy (CAPiTA trial)**: about **45% against vaccine-type pneumococcal CAP** and **75% against vaccine-type invasive disease** in adults 65 and over. [Harrison 22e]",
        "**RSV vaccine protection** persists over at least **two to three seasons** with some waning, which is why a single dose (not annual) is advised for now. [ACIP 2024]",
        "**Myocarditis after mRNA COVID vaccines** is rare, mostly in young males after the second dose, and usually mild. [WHO SAGE 2024]",
        "**PPSV23 local reactions** are more marked when revaccinated within 5 years; avoid unnecessary repeat doses. [ACIP 2024]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "**Review the vaccine record at every chronic-disease visit** (NCD clinic, COPD and asthma follow-up, dialysis) and flag what is due. [API 2024]",
        "**Influenza every year** before the local season; **PCV once** (series complete with PCV20/21, or PCV13/15 plus PPSV23); **RSV once**; **Td/Tdap every 10 years**. [ACIP 2024]",
        "Refer to a specialist only for **anaphylaxis to a vaccine**, suspected **primary immunodeficiency** or complex transplant/biologic schedules. [API 2024]",
        "For a patient who had **PCV13 and PPSV23 before 65**, give **PCV20 or PCV21 at least 5 years after** the last pneumococcal dose to complete the series. [ACIP 2024]",
        "Report and review **serious AEFI** (anaphylaxis, GBS, death) through the district AEFI committee. [MoHFW 2024]",
      ],
    },
    {
      heading: "Prevention, counselling and programme links",
      points: [
        "**Counsel on myths**: the injectable influenza vaccine **cannot cause influenza** (it is inactivated); a cold after vaccination is coincidental rhinovirus infection. [WHO 2024]",
        "**Strong physician recommendation** is the single biggest predictor that an adult will accept a vaccine - name the vaccine and the date. [API 2024]",
        "**Cocooning**: vaccinate household contacts of newborns (Tdap and influenza) and of immunocompromised patients. [ACIP 2024]",
        "**Non-vaccine prevention** belongs in the same conversation: smoking cessation, clean cooking fuel (**Pradhan Mantri Ujjwala Yojana**), hand hygiene and masks in crowded places during peaks. [MoHFW 2024]",
        "**Programme links**: Td in pregnancy and infant PCV under **UIP/U-WIN**; NCD clinics under **NP-NCD** and **Ayushman Arogya Mandir** are the natural place to add adult vaccine counselling. [MoHFW 2024]",
        "**Cost in India**: influenza vaccine costs a few hundred rupees; PCV and RSV vaccines are expensive, so prioritise by risk when money is limited - influenza for everyone at risk, PCV for those over 65 or with comorbidities. [API 2024]",
      ],
    },
    {
      heading: "Latest guideline updates (2023-2026)",
      points: [
        "**ACIP October 2024**: pneumococcal conjugate vaccine age threshold **lowered from 65 to 50**; **PCV21 (Capvaxive)** added as an option after FDA approval in June 2024. [ACIP 2024]",
        "**ACIP June 2024**: RSV vaccine for **all adults 75 and over** and **60-74 at increased risk**, a **single lifetime dose for now**; **ACIP April 2025** extended it to **50-59 at increased risk**. [ACIP 2025]",
        "**mRESVIA (mRNA-1345)** approved in May 2024 as the third RSV vaccine; FDA (January 2025) added a GBS warning for Arexvy and Abrysvo. [FDA 2025]",
        "**Influenza vaccines became trivalent from 2024-25**: WHO advised removing the **B/Yamagata** lineage, which has not been detected since March 2020. [WHO 2023]",
        "**Egg allergy**: ACIP (2023) removed all extra precautions for egg-allergic people receiving influenza vaccine. [ACIP 2023]",
        "**COVID-19**: WHO SAGE (2023-2024) moved to risk-based revaccination of high-priority groups every 6-12 months; US advice in 2025 moved to individual (shared) decision-making - Indian practice offers it to high-risk adults where vaccine is available. [WHO SAGE 2024]",
        "**GOLD 2025** lists **RSV vaccine for people with COPD aged 60 and over**, alongside influenza, PCV20/21 (or PCV15 then PPSV23), Tdap, zoster and COVID-19. [GOLD 2025]",
        "**API adult immunisation recommendations (2024)** provide the Indian adult schedule, with pneumococcal and influenza vaccines for those over 50-65 and high-risk adults. [API 2024]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "**Classic question**: 'Write the adult immunisation schedule for a 68-year-old with COPD and diabetes' - answer influenza yearly, PCV, RSV, Tdap, zoster and COVID with doses and intervals. [API 2024]",
        "**Why conjugate is better than polysaccharide** - T-cell-dependent response, memory, carriage reduction - is the commonest viva on pneumococcal vaccines. [Harrison 22e]",
        "**Commonest mistake**: giving PPSV23 first and then PCV soon after - the interval after PPSV23 must be **at least 1 year**, because PPSV23 blunts the later conjugate response. [ACIP 2024]",
        "**Egg allergy is not a contraindication** - examiners test this because old textbooks still say it is. [ACIP 2023]",
        "**RSV vaccine is a single dose, not annual** - a common error in answers. [ACIP 2024]",
        "**Tdap in every pregnancy**, even if given in a previous pregnancy, because maternal antibodies wane quickly. [ACIP 2024]",
      ],
    },
  ],
  tables: [
    {
      heading: "Adult respiratory vaccines: dose, schedule and cautions",
      columns: ["Vaccine", "Dose and route", "Schedule", "Key adverse effects / contraindications"],
      rows: [
        ["Inactivated influenza (trivalent, standard dose)", "0.5 mL IM deltoid", "Every year before the local season (April-June for most of India)", "Sore arm, low fever; anaphylaxis to prior dose is the only contraindication; egg allergy is NOT a contraindication"],
        ["High-dose or adjuvanted influenza", "0.5 mL IM (high-dose 0.7 mL in some products)", "Yearly, preferred in 65 and over where available", "More local reactions; same contraindications"],
        ["PCV20 (Prevenar 20) or PCV21 (Capvaxive)", "0.5 mL IM", "Single dose completes the series", "Local pain, fatigue; anaphylaxis to component or diphtheria toxoid (CRM197)"],
        ["PCV13 or PCV15 then PPSV23", "0.5 mL IM, then PPSV23 0.5 mL IM or SC", "PPSV23 at least 1 year after PCV (8 weeks if immunocompromised, CSF leak, cochlear implant)", "PPSV23: marked local reaction if repeated early; no memory"],
        ["RSV pre-F (Arexvy, Abrysvo) or mRNA (mRESVIA)", "0.5 mL IM", "Single dose: all 75+, 60-74 (and 50-59) at increased risk; Abrysvo at 32-36 weeks in pregnancy", "Fatigue, myalgia; small GBS signal (Arexvy, Abrysvo); not with nirsevimab for the same infant"],
        ["Tdap (Boostrix, Adacel)", "0.5 mL IM", "Once in adulthood, then Td/Tdap every 10 years; every pregnancy at 27-36 weeks", "Local reaction; encephalopathy within 7 days of a pertussis vaccine is a contraindication to pertussis component"],
        ["COVID-19 (updated mRNA, protein subunit, Covaxin, Corbevax)", "As per product, IM", "High-priority adults every 6-12 months per WHO SAGE", "Myocarditis (rare, young males, mRNA); anaphylaxis to component"],
      ],
    },
    {
      heading: "Pneumococcal pathways for adults (ACIP 2024)",
      columns: ["Previous vaccination", "Option A", "Option B", "Interval"],
      rows: [
        ["None or unknown", "PCV20 or PCV21 once", "PCV15 (or PCV13) then PPSV23", "PPSV23 at least 1 year after PCV (8 weeks if high-risk)"],
        ["PPSV23 only", "PCV20 or PCV21 once", "PCV15 once", "At least 1 year after PPSV23"],
        ["PCV13 only", "PCV20 or PCV21 once", "PPSV23 once", "At least 1 year after PCV13 (8 weeks if high-risk)"],
        ["PCV13 and PPSV23 (series incomplete for age)", "PCV20 or PCV21 once", "Shared decision", "At least 5 years after last pneumococcal dose"],
        ["PCV20 or PCV21 already", "Series complete", "No further dose", "Not applicable"],
      ],
    },
    {
      heading: "Polysaccharide versus conjugate pneumococcal vaccine",
      columns: ["Feature", "PPSV23", "PCV (13, 15, 20, 21)"],
      rows: [
        ["Immune response", "T-cell-independent", "T-cell-dependent via carrier protein CRM197"],
        ["Memory and booster effect", "None; hyporesponsiveness on repeat", "Memory B cells; boostable"],
        ["Effect on nasopharyngeal carriage", "None", "Reduces carriage; herd effect"],
        ["Serotypes", "23", "13, 15, 20 or 21"],
        ["Use in children under 2", "Poorly immunogenic", "Immunogenic (UIP uses PCV)"],
        ["Current adult role", "Only after PCV13 or PCV15", "First choice; PCV20/21 alone completes series"],
      ],
    },
    {
      heading: "Indications by risk group",
      columns: ["Group", "Influenza", "Pneumococcal", "RSV", "Tdap / COVID"],
      rows: [
        ["Healthy adult 19-49", "Yearly (recommended for all)", "Not needed", "Not indicated", "Tdap once; COVID per national advice"],
        ["Adult 50-64", "Yearly", "PCV (ACIP 2024: all 50+)", "If at increased risk (ACIP 2025)", "Td/Tdap every 10 years"],
        ["Adult 65-74", "Yearly, high-dose preferred", "PCV for all", "If at increased risk", "COVID every 6-12 months (high priority)"],
        ["75 and over", "Yearly, high-dose preferred", "PCV for all", "All, single dose", "COVID high priority"],
        ["COPD, asthma, heart failure, diabetes, CKD, liver disease (any adult age)", "Yearly", "PCV at any age", "If 50 and over", "COVID high priority"],
        ["Pregnancy", "Any trimester", "Only if indicated", "Abrysvo 32-36 weeks (seasonal)", "Tdap 27-36 weeks every pregnancy"],
        ["Immunocompromised, asplenia, HIV", "Yearly (inactivated only)", "PCV; PPSV23 interval 8 weeks", "If 50 and over at risk", "COVID high priority; no live vaccines"],
      ],
    },
    {
      heading: "RSV vaccines compared",
      columns: ["Feature", "Arexvy (GSK)", "Abrysvo (Pfizer)", "mRESVIA (Moderna)"],
      rows: [
        ["Platform", "Pre-F protein + AS01E adjuvant", "Bivalent pre-F protein, no adjuvant", "mRNA encoding pre-F"],
        ["First-season efficacy against RSV LRTD", "About 83%", "About 67-86% (by definition)", "About 84%"],
        ["Use in pregnancy", "No", "Yes, 32-36 weeks", "No"],
        ["Main safety note", "Reactogenicity; GBS signal", "GBS signal", "Local and systemic reactions"],
        ["Dosing", "Single 0.5 mL IM", "Single 0.5 mL IM", "Single 0.5 mL IM"],
      ],
    },
  ],
  redFlags: [
    "Anaphylaxis after a vaccine (stridor, hypotension, urticaria within minutes) - give adrenaline 0.5 mg IM and admit.",
    "Ascending weakness or areflexia within 6 weeks of a vaccine - suspect Guillain-Barre syndrome and admit.",
    "Chest pain, breathlessness or palpitations within a week of an mRNA COVID vaccine in a young male - check troponin and ECG for myocarditis.",
    "Pneumonia in an asplenic or sickle cell patient - risk of overwhelming pneumococcal sepsis; admit and treat at once.",
    "Paroxysmal cough with apnoea or cyanosis in a young infant whose mother was not vaccinated - suspect pertussis and admit.",
    "Influenza-like illness with breathlessness, SpO2 under 94% or altered sensorium in an older adult - admit and start oseltamivir.",
  ],
  pearls: [
    "**Egg allergy is not a contraindication** to any influenza vaccine (ACIP 2023).",
    "**PCV before PPSV23, never the other way round** - PPSV23 first blunts the later PCV response; the gap after PPSV23 is at least 1 year.",
    "**PCV20 or PCV21 alone = series complete.**",
    "**RSV vaccine is one dose for life (so far)** - not annual like influenza.",
    "**Tdap in every pregnancy at 27-36 weeks**; RSVpreF (Abrysvo) at 32-36 weeks.",
    "**India's influenza season is the monsoon** for most states - vaccinate in April-June with the Southern Hemisphere vaccine.",
    "**Influenza vaccine is a cardiovascular drug**: it cuts post-MI deaths (IAMI trial).",
    "**Discharge = vaccination opportunity** after any admission for pneumonia, COPD or heart failure.",
  ],
  mcqs: [
    {
      id: "respiratory-adult-respiratory-vaccines-q1",
      stem: "A 66-year-old man with COPD received PPSV23 two years ago and no other pneumococcal vaccine. What is the best next step according to current recommendations?",
      options: [
        "Repeat PPSV23 now",
        "Give PCV20 or PCV21 once now",
        "No further pneumococcal vaccine is needed",
        "Give PCV13 now and PPSV23 again 8 weeks later",
      ],
      answer: 1,
      explanation:
        "An adult who has had only PPSV23 should receive a conjugate vaccine at least 1 year later; PCV20 or PCV21 alone then completes the series. Repeating PPSV23 adds no memory and increases local reactions; stopping leaves him without conjugate protection; PCV13 followed by another early PPSV23 is outdated and over-vaccinates.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-adult-respiratory-vaccines-q2",
      stem: "A 34-year-old woman with a history of urticaria and lip swelling after eating eggs asks about influenza vaccination. What is the correct advice?",
      options: [
        "Influenza vaccine is contraindicated",
        "Give only after skin testing with the vaccine",
        "Give in hospital with 2 hours of observation",
        "Give any age-appropriate influenza vaccine with routine observation",
      ],
      answer: 3,
      explanation:
        "Since 2023 ACIP advises that people with egg allergy of any severity can receive any influenza vaccine with no extra precautions beyond the routine observation and readiness for anaphylaxis that apply to every vaccinee. Skin testing, prolonged observation and avoidance are outdated advice that leaves allergic patients unprotected.",
      difficulty: "easy",
    },
    {
      id: "respiratory-adult-respiratory-vaccines-q3",
      stem: "Which property explains why conjugate pneumococcal vaccines reduce nasopharyngeal carriage while PPSV23 does not?",
      options: [
        "Recruitment of T-helper cells by the carrier protein, producing memory and mucosal IgG",
        "Higher number of serotypes in the conjugate vaccine",
        "Live attenuated organisms colonising the nasopharynx",
        "Adjuvant-induced innate immune activation alone",
      ],
      answer: 0,
      explanation:
        "Linking polysaccharide to the carrier protein CRM197 makes the response T-cell-dependent, giving class-switched high-affinity IgG, memory and mucosal effects that cut carriage and create herd protection. PPSV23 actually has more serotypes (23), so serotype number is not the reason; neither vaccine is live, and adjuvant alone does not create memory.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-adult-respiratory-vaccines-q4",
      stem: "A 72-year-old woman with heart failure received an RSV vaccine last year. She asks whether she needs another dose this season. What is the correct answer?",
      options: [
        "Yes, RSV vaccine is given every year like influenza",
        "Yes, a booster is due at 12 months",
        "No, currently a single dose is recommended and protection lasts at least two to three seasons",
        "No, RSV vaccine is not recommended for heart failure",
      ],
      answer: 2,
      explanation:
        "RSV vaccines (Arexvy, Abrysvo, mRESVIA) are currently recommended as a single dose because protection persists over at least two to three seasons; revaccination is not yet advised. Heart failure is precisely a condition that makes a 60-74-year-old eligible, so the claim that it is not recommended is wrong, and annual or 12-month boosting is not current advice.",
      difficulty: "easy",
    },
    {
      id: "respiratory-adult-respiratory-vaccines-q5",
      stem: "In which month is it best to give influenza vaccine to an adult with diabetes living in Delhi?",
      options: [
        "January, before the winter peak",
        "April-May, before the monsoon peak, using the Southern Hemisphere formulation",
        "October, using the Northern Hemisphere formulation",
        "Any month; timing does not matter in India",
      ],
      answer: 1,
      explanation:
        "Surveillance shows that most of India, including the north, has its main influenza peak in the monsoon (July-September), so the Southern Hemisphere formulation in April-June is best. October with the Northern Hemisphere formulation suits the southern states with a winter peak; January is too late; timing matters because protection wanes within months.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "respiratory-adult-respiratory-vaccines-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Discuss adult immunisation against respiratory infections. Write the schedule you would follow for a 68-year-old man with COPD and type 2 diabetes attending your clinic.",
      openingLines: [
        "Adult respiratory vaccination comprises yearly inactivated influenza vaccine, pneumococcal conjugate vaccine (PCV20/21, or PCV13/15 followed by PPSV23), a single dose of RSV vaccine, Tdap and risk-based COVID-19 vaccination.",
        "Older adults and people with COPD, diabetes, heart, kidney or liver disease are the priority, and each clinic visit is an opportunity to vaccinate.",
      ],
      answer: [
        {
          heading: "Burden and rationale",
          points: [
            "Influenza, pneumococcus and RSV cause most vaccine-preventable pneumonia and exacerbations in older adults.",
            "COPD and diabetes multiply the risk of pneumonia, hospitalisation and death; vaccines also reduce cardiovascular events.",
            "India has no adult UIP schedule except Td in pregnancy - adult vaccination depends on the physician.",
          ],
        },
        {
          heading: "Influenza",
          points: [
            "Inactivated trivalent vaccine 0.5 mL IM yearly; high-dose or adjuvanted preferred at 65 and over where available.",
            "Timing: April-June (Southern Hemisphere formulation) for most of India; September-October in southern states.",
            "Egg allergy is not a contraindication; only anaphylaxis to a prior dose is.",
          ],
        },
        {
          heading: "Pneumococcal",
          points: [
            "PCV20 or PCV21 single dose, or PCV13/15 then PPSV23 at least 1 year later.",
            "Explain why conjugate first: T-cell-dependent memory; PPSV23 first blunts the later response.",
          ],
        },
        {
          heading: "RSV",
          points: [
            "Single 0.5 mL IM dose of Arexvy, Abrysvo or mRESVIA - he qualifies at 68 with COPD and diabetes.",
            "Efficacy about 67-84% against RSV lower respiratory disease in the first season; small GBS signal.",
          ],
        },
        {
          heading: "Tdap, COVID-19 and others",
          points: [
            "Tdap once if never given, then Td/Tdap every 10 years.",
            "COVID-19 updated vaccine every 6-12 months (WHO SAGE high-priority group).",
            "Recombinant zoster vaccine (2 doses) is also listed by GOLD for COPD over 50.",
          ],
        },
        {
          heading: "Practical points",
          points: [
            "All can be co-administered at different sites; observe 15 minutes.",
            "Record batch, date and next due date; report AEFI.",
            "Counsel: inactivated vaccine cannot cause flu; smoking cessation and clean fuel alongside.",
          ],
        },
      ],
      mustDraw: ["Schedule table for a 68-year-old with COPD and diabetes", "PCV-PPSV23 pathway flow chart"],
      markSplit: [
        { part: "Burden and rationale", marks: 1 },
        { part: "Influenza", marks: 2 },
        { part: "Pneumococcal with immunology", marks: 3 },
        { part: "RSV, Tdap, COVID", marks: 2 },
        { part: "Schedule for the patient and practical points", marks: 2 },
      ],
      keywords: ["influenza", "PCV20", "PPSV23", "RSV vaccine", "Tdap", "COPD", "API 2024"],
    },
    {
      id: "respiratory-adult-respiratory-vaccines-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Differentiate between polysaccharide and conjugate pneumococcal vaccines.",
      openingLines: [
        "PPSV23 is a 23-valent plain polysaccharide vaccine that gives a T-cell-independent response; PCVs link polysaccharide to a carrier protein (CRM197) to give a T-cell-dependent response.",
        "This difference explains memory, carriage reduction and why conjugate vaccine is now the first choice in adults.",
      ],
      answer: [
        {
          heading: "Immunology",
          points: [
            "PPSV23: B-cell only, IgM-dominant, no memory, hyporesponsiveness on repeat dosing.",
            "PCV: T-helper help, class switch to high-affinity IgG, memory B cells, boostable.",
          ],
        },
        {
          heading: "Clinical consequences",
          points: [
            "PPSV23 does not reduce carriage; PCV reduces carriage and gives herd protection.",
            "PPSV23 is poorly immunogenic under 2 years; PCV works in infants (UIP).",
          ],
        },
        {
          heading: "Use in adults",
          points: [
            "PCV20 or PCV21 alone completes the series.",
            "PCV13/15 then PPSV23 at least 1 year later (8 weeks if high-risk) broadens serotype cover.",
            "PPSV23 alone is no longer adequate.",
          ],
        },
      ],
      mustDraw: ["Comparison table: PPSV23 vs PCV"],
      markSplit: [
        { part: "Definitions", marks: 1 },
        { part: "Immunology", marks: 2 },
        { part: "Clinical use", marks: 2 },
      ],
      keywords: ["PPSV23", "PCV", "CRM197", "T-cell-dependent", "carriage", "hyporesponsiveness"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - chapter on immunization principles and vaccine use",
    "CDC/ACIP Adult Immunization Schedule, United States, 2025 (including October 2024 pneumococcal and June 2024/April 2025 RSV recommendations)",
    "Association of Physicians of India (API) adult immunisation recommendations, 2024",
    "Global Initiative for Chronic Obstructive Lung Disease (GOLD) Report, 2025",
    "WHO SAGE roadmap for prioritising uses of COVID-19 vaccines, updated 2023-2024; WHO influenza vaccine composition recommendations 2023-2025",
    "Ministry of Health and Family Welfare, Government of India - Universal Immunization Programme and AEFI surveillance guidelines, 2024",
    "FOGSI guidance on maternal immunisation (Tdap and influenza in pregnancy), 2023",
  ],
});

export default topics;
