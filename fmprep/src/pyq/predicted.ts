/**
 * Likely questions for the coming sittings.
 *
 * Built from the 2011-2025 papers: themes that recur on a cycle and are due,
 * themes asked often and recently, and new national guidelines or programmes
 * that have not yet been examined. Each carries the evidence it rests on, so
 * the reader can judge the prediction rather than take it on trust.
 */
import type { PaperId } from "../lib/types";

export type PredictedQuestion = {
  id: string;
  paper: PaperId;
  question: string;
  marks: number;
  likelihood: "high" | "medium";
  /** The pattern in the past papers the prediction rests on. */
  basis: string;
  /** The library topic that answers it. */
  topicId: string;
};

export const PREDICTED: PredictedQuestion[] = [
  {
    "id": "pred-001",
    "paper": "IV",
    "question": "A 52-year-old auto-rickshaw driver, the only earning member of his family, has poorly controlled diabetes and a non-healing ulcer on his right foot. He says he cannot afford to stop working. a) Explain the concept of three-stage assessment in family medicine. [3] b) Write the three-stage assessment of this patient. [4] c) Outline a management plan for each problem identified. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Three-stage assessment asked Dec 2021, Jun 2022 (non-healing foot ulcer), Dec 2022, May 2024 - four times in three years, the most reliable family-medicine theme",
    "topicId": "fm-principles-three-stage-assessment"
  },
  {
    "id": "pred-002",
    "paper": "IV",
    "question": "a) What are red flags and yellow flags in family practice? Give two examples each for low back pain and headache. [4] b) Differentiate patient-centred medicine from disease-centred medicine. [3] c) Describe the components of the patient-centred clinical method. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Red and yellow flags Jun 2025; patient- vs disease-centred 2017 and Jun 2021; the method keeps returning in new wording",
    "topicId": "fm-principles-three-stage-assessment"
  },
  {
    "id": "pred-003",
    "paper": "IV",
    "question": "a) Enumerate McWhinney's principles of family medicine. [4] b) How does the approach of a family physician differ from that of an organ specialist? [3] c) Explain the 'ecology of medical care' and its relevance to training in India. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Principles of FM asked 2013 and Dec 2022; a staple opener for the FM paper, not asked in 2023-2025",
    "topicId": "fm-principles-definition"
  },
  {
    "id": "pred-004",
    "paper": "IV",
    "question": "a) Describe any two models of consultation. [4] b) Explain how you elicit the Ideas, Concerns and Expectations (ICE) of a patient and why it matters. [3] c) How will you adapt the consultation to a busy Indian OPD of 100 patients a day? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Consultation models May 2024; Calgary-Cambridge Jun 2025; ICE Jun 2021 - asked in 3 of the last 5 sessions",
    "topicId": "fm-principles-consultation"
  },
  {
    "id": "pred-005",
    "paper": "IV",
    "question": "Mrs. R, 45, brings her 70-year-old mother-in-law with dementia; her husband drinks heavily and her 16-year-old son has stopped going to school. a) Draw a three-generation genogram of this family. [3] b) Identify the stage of the family life cycle and its tasks. [3] c) Assess family function using Family APGAR and SCREEM and outline your family-oriented plan. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Genogram and Family APGAR Jun 2025; family types 2013; family-oriented case questions are the newest FM format",
    "topicId": "fm-principles-family-unit"
  },
  {
    "id": "pred-006",
    "paper": "IV",
    "question": "a) Classify the types of referral in a health care system. [3] b) What are the contents of a good referral letter? [3] c) How will you ensure back-referral and follow-up of a patient you have referred to a tertiary centre? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Referral asked Dec 2021, Jun 2022 (referral vs consultation, legal aspects) and May 2024 (types, ideal pathway) - three times in 3 years",
    "topicId": "fm-principles-referral-system"
  },
  {
    "id": "pred-007",
    "paper": "IV",
    "question": "A 58-year-old woman's biopsy report shows carcinoma cervix. Her son requests you not to tell her the diagnosis. a) Describe the SPIKES protocol for breaking bad news. [5] b) How will you handle the son's request (collusion)? [3] c) How will you plan her follow-up care? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Breaking bad news asked 2014 and Oct 2024; collusion is the Indian twist not yet examined",
    "topicId": "fm-principles-breaking-bad-news-difficult-consultations"
  },
  {
    "id": "pred-008",
    "paper": "IV",
    "question": "a) What are the causes of anger in patients attending a busy clinic? [3] b) Describe the steps to de-escalate an angry patient or relative. [4] c) What measures can a practice take to prevent violence against health care workers? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Angry patient asked Jun 2025 for the first time; violence against doctors is a current national issue",
    "topicId": "fm-principles-breaking-bad-news-difficult-consultations"
  },
  {
    "id": "pred-009",
    "paper": "IV",
    "question": "a) What are the advantages and challenges of electronic medical records in family practice? [4] b) Describe the components of the Ayushman Bharat Digital Mission (ABHA, HPR, HFR). [4] c) What safeguards will you follow for patient data privacy? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "EMR Jun 2021, telemedicine 2020 and Apr 2023; ABDM and the DPDP Act 2023 are new and never asked - digital health is a 2022-2025 trend",
    "topicId": "fm-principles-digital-health-emr-abdm"
  },
  {
    "id": "pred-010",
    "paper": "IV",
    "question": "You notice that many hypertensive patients in your practice have uncontrolled blood pressure. a) Describe the audit cycle. [4] b) How will you conduct an audit of hypertension control in your practice (criteria, standards, data)? [4] c) How will you close the loop? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Clinical audit asked Dec 2022 (caesarean rate) and Oct 2023 (diabetes) - every 1-2 years with a different disease",
    "topicId": "fm-principles-records-audit"
  },
  {
    "id": "pred-011",
    "paper": "IV",
    "question": "a) What are the steps of evidence-based medicine? [3] b) Frame a PICO question on the use of aspirin for primary prevention in diabetics. [2] c) Describe the hierarchy of evidence and how you will critically appraise a randomised controlled trial. [5]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "EBM Dec 2022; meta-analysis 2020; RCT design 2019 - appraisal skills recur every 2-3 years",
    "topicId": "fm-principles-ebm"
  },
  {
    "id": "pred-012",
    "paper": "IV",
    "question": "A new rapid card test for malaria was compared with microscopy in 500 febrile patients: 90 true positives, 10 false positives, 30 false negatives, 370 true negatives. a) Construct the 2x2 table and calculate sensitivity, specificity, PPV and NPV. [6] b) How will prevalence affect the predictive values? [2] c) Which test would you choose for screening and why? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Diagnostic test statistics asked 2016 and Apr 2023; numerical questions are rising in recent papers",
    "topicId": "preventive-biostatistics"
  },
  {
    "id": "pred-013",
    "paper": "IV",
    "question": "You wish to find out whether indoor cooking smoke is a risk factor for tuberculosis in your block. a) Which study design will you choose and why? [3] b) Describe the steps of that study. [4] c) What biases may occur and how will you control them? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Study design asked 2019, Jun 2021, Dec 2021, Dec 2022, Oct 2023, Jun 2025 - almost every year",
    "topicId": "preventive-study-designs"
  },
  {
    "id": "pred-014",
    "paper": "IV",
    "question": "a) What is sampling? Describe probability sampling methods with examples. [5] b) What information do you need to calculate sample size for a cross-sectional prevalence study? Illustrate with an example. [5]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Sampling Dec 2020; sample size in observational studies Jun 2025 - a 4-5 year cycle",
    "topicId": "fm-principles-research-thesis"
  },
  {
    "id": "pred-015",
    "paper": "IV",
    "question": "A pharmaceutical company approaches you to recruit your patients for a phase III drug trial. a) What are the ethical principles you must follow? [4] b) What approvals and registrations are required under the New Drugs and Clinical Trials Rules 2019? [3] c) Who bears responsibility for trial-related injury and compensation? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Drug trial ethics Apr 2023; COVID vaccine trial ethics 2020 - research ethics every 2-3 years",
    "topicId": "geriatrics-ethics-medicolegal-negligence-ethics"
  },
  {
    "id": "pred-016",
    "paper": "IV",
    "question": "A patient's relatives allege negligence after a death following an injection given in your clinic. a) What are the essential elements to prove medical negligence? [3] b) Describe the provisions for negligence under the Bharatiya Nyaya Sanhita 2023 and the Consumer Protection Act 2019. [4] c) What steps will you take in your practice to prevent litigation? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Legal aspects of referral Jun 2022; BNS came into force July 2024 and has never been examined - new law",
    "topicId": "geriatrics-ethics-medicolegal-negligence-ethics"
  },
  {
    "id": "pred-017",
    "paper": "IV",
    "question": "Twenty cases of acute watery diarrhoea with two deaths are reported from a village under your PHC in one week. a) Describe the steps of investigating this outbreak. [5] b) What immediate control measures will you take? [3] c) What is the role of IDSP/IHIP in this situation? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Outbreak investigation asked 2019, 2020, Jun 2021, Dec 2021, Jun 2022, Dec 2022, Oct 2023, May 2024, Jun 2025 - every single session",
    "topicId": "preventive-outbreak-investigation"
  },
  {
    "id": "pred-018",
    "paper": "IV",
    "question": "Eighteen cases of fever with thrombocytopenia are reported in a peri-urban ward in September. a) How will you confirm that this is a dengue outbreak? [3] b) Describe the integrated vector management you will implement. [4] c) What advice will you give the community? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Dengue/vector outbreak Jun 2022, Oct 2023 and May 2024 (malaria); vector control annually",
    "topicId": "infectious-fever-dengue"
  },
  {
    "id": "pred-019",
    "paper": "IV",
    "question": "Thirty guests developed vomiting and diarrhoea within 6 hours of a wedding feast. a) What are the likely causative agents based on the incubation period? [3] b) How will you manage the affected persons? [3] c) How will you investigate the food-poisoning outbreak and what are your notification duties? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Food poisoning 2013, Apr 2023 (restaurant family), Oct 2024 (fast food) - 3 times; 2-year cycle",
    "topicId": "gastro-hepatology-acute-diarrhoea"
  },
  {
    "id": "pred-020",
    "paper": "IV",
    "question": "a) What are the goals of the National TB Elimination Programme and the TB Mukt Bharat campaign? [2] b) Describe the diagnostic algorithm for presumptive pulmonary TB under NTEP. [3] c) Write the treatment regimens for drug-sensitive and drug-resistant TB, including the shorter BPaLM regimen. [3] d) What patient support schemes are available? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "NTEP asked 2019, Dec 2021, Jun 2022, May 2024, Oct 2024 - twice in 2024; BPaLM (2024) and 100-day campaign new",
    "topicId": "respiratory-tuberculosis-ntep"
  },
  {
    "id": "pred-021",
    "paper": "IV",
    "question": "The 5-year-old son and 60-year-old diabetic father of a sputum-positive TB patient come to you. a) How will you screen household contacts? [3] b) Describe TB preventive treatment options (6H, 3HP) under NTEP. [4] c) How will you monitor adherence and adverse effects? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Childhood TB and prevention of infection from father Dec 2022; TPT guidelines 2021 never asked directly",
    "topicId": "respiratory-tb-infection-contacts-tpt"
  },
  {
    "id": "pred-022",
    "paper": "IV",
    "question": "A 62-year-old diabetic with COPD asks you about vaccines. a) Describe the adult immunisation schedule for him. [5] b) What are the pneumococcal vaccine options and schedule? [3] c) What adverse reactions will you warn him about? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Adult immunisation 2017, 2018, 2020, Jun 2022 (twice), Dec 2022, Oct 2024, Jun 2025 - near-annual",
    "topicId": "preventive-immunisation"
  },
  {
    "id": "pred-023",
    "paper": "IV",
    "question": "A 35-year-old IT professional with hypertension is travelling to Nigeria for a 6-month assignment. a) What vaccinations will you advise? [3] b) What malaria prophylaxis and personal protection will you recommend? [3] c) What other health advice and documents will you provide? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Pre-travel consultation 2017, 2019 (Kenya), Jun 2022 (USA), Jun 2025 - 4 times; Africa scenario not used since 2019",
    "topicId": "preventive-travel-medicine"
  },
  {
    "id": "pred-024",
    "paper": "IV",
    "question": "a) What is vaccine hesitancy? List its determinants (3 Cs). [4] b) How will you address a mother who refuses measles-rubella vaccine for her child? [3] c) What is herd immunity and how does it differ from herd effect? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Vaccine hesitancy Jun 2021; herd immunity Apr 2023; COVID vaccination 2021 and Oct 2023",
    "topicId": "preventive-immunisation"
  },
  {
    "id": "pred-025",
    "paper": "IV",
    "question": "a) Describe the natural history of disease and levels of prevention. [4] b) Explain each level of prevention using type 2 diabetes as an example. [4] c) What is primordial prevention and how can a family physician practise it? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Levels of prevention 2011, 2012, 2013, May 2024 - with the 2024 wording expected to recur",
    "topicId": "preventive-prevention-screening"
  },
  {
    "id": "pred-026",
    "paper": "IV",
    "question": "A 40-year-old woman comes for a routine check-up. a) Differentiate screening and diagnostic tests. [2] b) Describe the Wilson-Jungner criteria. [4] c) What biases affect evaluation of screening programmes? [2] d) Which screening tests will you offer her? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Screening asked 2013, Dec 2022, Oct 2023 - every 1-2 years",
    "topicId": "preventive-prevention-screening"
  },
  {
    "id": "pred-027",
    "paper": "IV",
    "question": "a) What are the five most common cancers in men and women in India? [2] b) Describe population-based screening for oral, breast and cervical cancers under NP-NCD. [6] c) What is the role of cancer registries? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Cancer screening asked 2018, 2019, Jun 2020, Dec 2022, Oct 2024 - a 1-2 year cycle",
    "topicId": "preventive-cancer-screening-india"
  },
  {
    "id": "pred-028",
    "paper": "IV",
    "question": "a) Define health and describe its dimensions. [3] b) Describe the social determinants of health with examples from India. [4] c) What indicators are used to measure the health of a community? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Health concepts 2012, 2013, Jun 2022, May 2024 - 2-year cycle recently",
    "topicId": "preventive-concept-health-determinants"
  },
  {
    "id": "pred-029",
    "paper": "IV",
    "question": "a) Describe the three-tier structure of rural health care in India with population norms. [4] b) What are the challenges in primary health care delivery? [3] c) Suggest measures to strengthen primary care, with reference to IPHS 2022. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "PHC 2011, 2013; NRHM 2012, 2013; current PHC delivery Oct 2024",
    "topicId": "preventive-health-care-delivery-nhm"
  },
  {
    "id": "pred-030",
    "paper": "IV",
    "question": "a) What are the components of Ayushman Bharat? [2] b) Describe the services provided at Ayushman Arogya Mandirs (HWCs). [4] c) Describe PM-JAY including the 2024 extension to citizens aged 70 and above. [2] d) How can a private family physician participate? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Ayushman Bharat Jun 2021, Dec 2022, Apr 2023 - 3 times in 2 years; 2024 expansion adds a new angle",
    "topicId": "preventive-ayushman-bharat"
  },
  {
    "id": "pred-031",
    "paper": "IV",
    "question": "a) What are the health problems of the urban poor? [4] b) Describe the components of the National Urban Health Mission. [4] c) What is the role of ASHA and Mahila Arogya Samiti in urban areas? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Urban health Jun 2021 and Jun 2022; 3-4 year gap now",
    "topicId": "preventive-health-care-delivery-nhm"
  },
  {
    "id": "pred-032",
    "paper": "IV",
    "question": "a) Define infant mortality rate and under-five mortality rate and give current Indian figures. [2] b) What are the causes and determinants of neonatal and infant deaths in India? [4] c) Describe the interventions under RMNCH+A to reduce child mortality. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "IMR 2011, 2013, 2014, 2016, 2020, Dec 2022; U5MR 2018, 2019, May 2024 - the most repeated community indicator",
    "topicId": "preventive-infant-child-mortality"
  },
  {
    "id": "pred-033",
    "paper": "IV",
    "question": "You are the medical officer of a CHC in a coastal district when a cyclone warning is issued for the next 48 hours. a) Describe the disaster management cycle. [3] b) How will you prepare the health centre and community? [4] c) What post-disaster measures will you take to prevent epidemics? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Disaster asked 2019 (cyclone), 2020, Dec 2021, Jun 2022, May 2024 - near-annual; cyclone not used since 2019",
    "topicId": "preventive-disaster-management"
  },
  {
    "id": "pred-034",
    "paper": "IV",
    "question": "a) What are the effects of climate change on human health? [4] b) Describe the National Programme on Climate Change and Human Health. [3] c) What can a family physician do to reduce the carbon footprint of practice and protect vulnerable patients? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Climate change Jun 2021; heat stroke 2020; climate is a stated 2022-2025 trend and NPCCHH is new",
    "topicId": "preventive-climate-change-health"
  },
  {
    "id": "pred-035",
    "paper": "IV",
    "question": "a) What are the sources of indoor and outdoor air pollution in India? [3] b) What are its health effects? [3] c) Explain the Air Quality Index and the advice you give patients on high-AQI days. [2] d) What is the National Clean Air Programme? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Air pollution 2019, Dec 2020, Dec 2022 - 2-year cycle, due again",
    "topicId": "preventive-air-pollution-environmental-health"
  },
  {
    "id": "pred-036",
    "paper": "IV",
    "question": "a) Classify biomedical waste as per the Biomedical Waste Management Rules 2016. [4] b) How will you segregate, store and dispose of waste in a family clinic? [4] c) How is sharps waste handled? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Biomedical waste 2012, 2013, 2020, Dec 2021, Dec 2022 - 1-2 year cycle",
    "topicId": "preventive-water-sanitation-vector"
  },
  {
    "id": "pred-037",
    "paper": "IV",
    "question": "A 35-year-old works in a stone quarry for 10 years and now has breathlessness. a) What are the occupational hazards of quarry and construction workers? [3] b) Describe the diagnosis and prevention of silicosis. [4] c) What legal protections and compensation are available? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Occupational hazards 2015, 2018 (twice), 2019 (cement), Dec 2020 (agriculture) - silicosis angle not used",
    "topicId": "preventive-occupational-health"
  },
  {
    "id": "pred-038",
    "paper": "IV",
    "question": "a) Define planning and describe the planning cycle. [4] b) Conduct a SWOT analysis for starting a non-communicable disease clinic at your PHC. [6]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Planning 2013, Dec 2021; SWOT Dec 2020 - 4-year cycle",
    "topicId": "preventive-health-planning-management"
  },
  {
    "id": "pred-039",
    "paper": "IV",
    "question": "A survey shows that 30% of boys in a higher-secondary school use tobacco. a) Differentiate IEC and behaviour change communication. [3] b) Plan a behaviour change communication programme for this school. [5] c) How will you evaluate it? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "BCC 2012; IEC 2011; social marketing 2013 and Dec 2020; school smoking 2019",
    "topicId": "preventive-iec-social-marketing"
  },
  {
    "id": "pred-040",
    "paper": "IV",
    "question": "a) Describe the demographic cycle and India's current stage. [3] b) Define TFR, NRR and couple protection rate and give current figures. [3] c) What are the recent initiatives in the national family planning programme? [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Family planning programme 2011, 2018; fertility indicators 2020; demography 2012, 2018 - due after 5 years",
    "topicId": "preventive-demography-family-planning"
  },
  {
    "id": "pred-041",
    "paper": "IV",
    "question": "a) What are the drivers of antimicrobial resistance in India? [3] b) Describe the National Action Plan on AMR and the WHO AWaRe classification. [4] c) What is the role of the family physician in antibiotic stewardship? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Superbug 2018; AMR role 2020; rational antibiotics Apr 2023 - AMR is a stated recent trend",
    "topicId": "infectious-fever-antimicrobial-resistance"
  },
  {
    "id": "pred-042",
    "paper": "IV",
    "question": "a) What are the medical, psychological and social problems of the elderly in India? [4] b) What government programmes and legal provisions exist for senior citizens? [4] c) What is the role of the family physician in healthy ageing? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Elderly problems 2013, Dec 2020, Oct 2023; retirement check-up Jun 2025 - 2-3 year cycle",
    "topicId": "geriatrics-ethics-elderly-community-health"
  },
  {
    "id": "pred-043",
    "paper": "IV",
    "question": "a) What are the types and warning signs of elder abuse? [4] b) How will you screen for it in your practice? [3] c) What are the legal remedies under the Maintenance and Welfare of Parents and Senior Citizens Act? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Elder abuse Dec 2020 - once; the elderly theme is recurring and this angle is due",
    "topicId": "geriatrics-ethics-elderly-community-health"
  },
  {
    "id": "pred-044",
    "paper": "IV",
    "question": "a) Describe the components of the National Programme for Prevention and Control of NCDs (NP-NCD). [4] b) What is the 75/25 initiative? [2] c) How will you set up opportunistic NCD screening in your practice? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Lifestyle disorders 2019; programme questions dominate 2022-2025; NP-NCD renamed 2023 and 75/25 launched 2023 - never asked",
    "topicId": "preventive-national-health-programmes"
  },
  {
    "id": "pred-045",
    "paper": "IV",
    "question": "A 30-year-old smokes 15 cigarettes a day and is unsure about quitting. a) Describe the stages of change model. [3] b) Explain the 5 A's and 5 R's. [4] c) Describe pharmacotherapy for tobacco cessation. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Smoking cessation 2015 (twice), 2016, 2018, 2020, Oct 2024, Jun 2025 - near-annual",
    "topicId": "psychiatry-tobacco-cessation"
  },
  {
    "id": "pred-046",
    "paper": "IV",
    "question": "a) What are the objectives and components of the National Mental Health Programme and the District Mental Health Programme? [5] b) Describe Tele-MANAS. [2] c) How can the family physician integrate mental health into primary care? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "NMHP 2020; Tele-MANAS (2022) never asked; mental health has had a strong recent run",
    "topicId": "preventive-national-health-programmes"
  },
  {
    "id": "pred-047",
    "paper": "IV",
    "question": "a) What is a balanced diet? Describe the ICMR-NIN dietary guidelines. [4] b) What is the double burden of malnutrition in India? [3] c) Describe POSHAN Abhiyaan. [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Balanced diet 2012; PEM Jun 2022; ICMR-NIN Dietary Guidelines for Indians released 2024 - never asked",
    "topicId": "preventive-nutrition-programmes"
  },
  {
    "id": "pred-048",
    "paper": "IV",
    "question": "a) Define zoonoses and classify them with examples. [3] b) Describe the One Health approach. [3] c) Describe the clinical features and control of leptospirosis. [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Zoonoses and One Health never asked; recent Nipah and Chandipura outbreaks and One Health mission make it likely",
    "topicId": "infectious-fever-tropical-fevers-zoonoses"
  },
  {
    "id": "pred-049",
    "paper": "I",
    "question": "A 42-year-old overweight bank manager has an HbA1c of 8.6% and a BMI of 31. a) How will you confirm the diagnosis of diabetes? [2] b) Describe lifestyle measures and the first-line drug choice. [3] c) Classify oral anti-diabetic drugs with mechanism of action and side effects, including SGLT2 inhibitors and GLP-1 receptor agonists. [5]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Diabetes diagnosis/drugs asked 2014, Jun 2022, Oct 2023, Oct 2024 - diabetes appears in almost every session",
    "topicId": "endocrine-t2dm-diagnosis-oral-drugs"
  },
  {
    "id": "pred-050",
    "paper": "I",
    "question": "A 55-year-old with diabetes for 12 years has an HbA1c of 10% on maximum metformin and glimepiride. He is reluctant to start insulin. a) How will you address his reluctance? [3] b) Describe how you will start and titrate basal insulin. [4] c) What advice will you give about hypoglycaemia, injection technique and storage? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Insulin initiation 2016, 2018, 2019 (refusing insulin); indications Oct 2023",
    "topicId": "endocrine-insulin-initiation"
  },
  {
    "id": "pred-051",
    "paper": "I",
    "question": "A 19-year-old with type 1 diabetes is brought with vomiting, abdominal pain and rapid breathing; blood sugar is 480 mg/dl and urine ketones are 3+. a) What is the diagnosis and how will you confirm it? [2] b) Describe the management in the first 24 hours. [5] c) What are the complications of treatment and how will you prevent recurrence? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "DKA asked 2016, 2017, 2020, Jun 2021, Dec 2022 - roughly every 2 years",
    "topicId": "endocrine-diabetic-emergencies"
  },
  {
    "id": "pred-052",
    "paper": "I",
    "question": "A 70-year-old on glibenclamide is found unresponsive at home. a) What is the likely diagnosis? [1] b) How will you manage him at home and in hospital? [4] c) Why is sulfonylurea hypoglycaemia prolonged? [2] d) How will you prevent recurrence? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Hypoglycaemia Apr 2023 and Oct 2023 (adult and neonate)",
    "topicId": "endocrine-hypoglycaemia"
  },
  {
    "id": "pred-053",
    "paper": "I",
    "question": "A 50-year-old diabetic has urinary albumin of 300 mg/g. a) Describe annual screening for complications in a diabetic. [4] b) How will you manage diabetic kidney disease in primary care? [4] c) What are the targets for BP and lipids? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Diabetic nephropathy 2015; microalbuminuria case Oct 2024; complication screening under NP-NCD",
    "topicId": "endocrine-diabetes-complication-screening"
  },
  {
    "id": "pred-054",
    "paper": "I",
    "question": "A 45-year-old smoker has a BP of 170/104 mmHg on two visits. a) What precautions will you take while measuring BP? [2] b) What history, examination and investigations will you do to look for causes and target-organ damage? [4] c) Outline non-pharmacological and pharmacological treatment. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Hypertension asked 2012, 2014, 2019 (twice), Jun 2021, Oct 2024 - every 2-3 years",
    "topicId": "cardiovascular-hypertension"
  },
  {
    "id": "pred-055",
    "paper": "I",
    "question": "A 48-year-old with diabetes has LDL 170 mg/dl and triglycerides 280 mg/dl. a) How will you assess his cardiovascular risk? [3] b) What are his lipid targets? [2] c) Describe the management of dyslipidaemia including statin intensity and add-on drugs. [5]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Lipid case Oct 2024; risk assessment 2019; Lipid Association of India targets are recent",
    "topicId": "cardiovascular-dyslipidaemia"
  },
  {
    "id": "pred-056",
    "paper": "I",
    "question": "A 52-year-old diabetic has had central chest pain with sweating for 45 minutes. His ECG shows ST elevation in V1-V4. a) What is the diagnosis? [1] b) Describe the immediate management at a CHC including thrombolysis. [5] c) What are the contraindications to thrombolysis? [2] d) What secondary prevention will you plan after discharge? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "MI asked 2011, 2018 (ECG), 2019, Dec 2021 - 2-3 year cycle; not since 2021",
    "topicId": "cardiovascular-acs"
  },
  {
    "id": "pred-057",
    "paper": "I",
    "question": "A 65-year-old with a previous MI has breathlessness, orthopnoea and pedal oedema; his EF is 30%. a) What are the precipitating causes of heart failure? [2] b) What investigations will you do? [2] c) Describe the four pillars of drug treatment for HFrEF. [4] d) What non-pharmacological advice will you give? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Heart failure 2016 (twice), 2017, Dec 2021, Dec 2022, Oct 2023 - nearly annual",
    "topicId": "cardiovascular-heart-failure"
  },
  {
    "id": "pred-058",
    "paper": "I",
    "question": "A 72-year-old hypertensive has an irregularly irregular pulse of 130/minute. a) How will you confirm the diagnosis? [1] b) What are the causes of atrial fibrillation? [2] c) How will you assess stroke and bleeding risk? [3] d) Describe rate control and anticoagulation. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "AF asked Dec 2022 and Oct 2023 - consecutive sessions",
    "topicId": "cardiovascular-atrial-fibrillation"
  },
  {
    "id": "pred-059",
    "paper": "I",
    "question": "A 28-year-old asthmatic uses his salbutamol inhaler 4 times a week and wakes at night once a week. a) How will you assess asthma control? [2] b) Describe step-wise management with the GINA 2024 approach including MART. [4] c) Explain inhaler technique with spacer. [2] d) What are the features of acute severe asthma? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Asthma 2012, 2019, Jun 2021, Apr 2023 - 2-year cycle; GINA 2024 changes",
    "topicId": "respiratory-asthma"
  },
  {
    "id": "pred-060",
    "paper": "I",
    "question": "A 58-year-old farmer who smoked beedis for 30 years has progressive breathlessness. a) How will you confirm COPD? [2] b) Describe the GOLD classification. [3] c) Describe the management of stable COPD including pulmonary rehabilitation. [3] d) How will you manage an acute exacerbation? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "COPD 2017, 2020 (twice), Oct 2023 - 3-year cycle",
    "topicId": "respiratory-copd"
  },
  {
    "id": "pred-061",
    "paper": "I",
    "question": "A 68-year-old diabetic has fever, cough and breathlessness for 3 days. a) What are the common organisms of community-acquired pneumonia? [2] b) How will you assess severity using CURB-65? [3] c) Describe outpatient and inpatient antibiotic treatment. [3] d) What are the complications? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "CAP 2011, 2017, 2019 - due after 6 years",
    "topicId": "respiratory-pneumonia-cap"
  },
  {
    "id": "pred-062",
    "paper": "I",
    "question": "A 45-year-old obese truck driver complains of daytime sleepiness and his wife reports loud snoring. a) What is the likely diagnosis? [1] b) Describe the STOP-BANG questionnaire. [2] c) How will you confirm the diagnosis? [2] d) What are the complications and management? [5]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Excessive daytime sleepiness 2018; tiredness with drowsiness 2019; OSA never asked directly",
    "topicId": "respiratory-osa"
  },
  {
    "id": "pred-063",
    "paper": "I",
    "question": "Several students in a hostel develop jaundice after a fever. a) What is the likely diagnosis and its mode of transmission? [2] b) How will you confirm it? [2] c) What are the complications and red flags? [3] d) What control measures will you take? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Viral hepatitis clusters 2013, Dec 2021, Jun 2022; HBV Oct 2023 - near-annual",
    "topicId": "gastro-hepatology-viral-hepatitis"
  },
  {
    "id": "pred-064",
    "paper": "I",
    "question": "A 50-year-old alcoholic presents with abdominal distension and confusion. a) What are the causes of cirrhosis? [2] b) How will you assess severity (Child-Pugh)? [2] c) Describe the management of ascites and hepatic encephalopathy. [4] d) What is spontaneous bacterial peritonitis? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Cirrhosis/ascites Dec 2022, Apr 2023, Oct 2024 - three consecutive years",
    "topicId": "gastro-hepatology-chronic-liver-disease"
  },
  {
    "id": "pred-065",
    "paper": "I",
    "question": "A 40-year-old vomits blood; his pulse is 118/minute and BP 90/60 mmHg. a) What is the immediate management? [4] b) What are the causes of upper GI bleeding? [2] c) How will you differentiate variceal and non-variceal bleeding? [2] d) What pre-referral treatment will you give? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Haematemesis 2012; GI bleed Oct 2024; melaena 2012",
    "topicId": "gastro-hepatology-gi-bleeding"
  },
  {
    "id": "pred-066",
    "paper": "I",
    "question": "A 35-year-old software engineer has heartburn and epigastric pain for 3 months. a) What are the alarm features in dyspepsia? [2] b) How will you test for and treat H. pylori? [4] c) What lifestyle advice will you give for GERD? [2] d) What are the risks of long-term PPI use? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "GERD/dyspepsia 2014, 2015, 2017, 2020 (twice), Jun 2022",
    "topicId": "gastro-hepatology-acid-peptic-gerd"
  },
  {
    "id": "pred-067",
    "paper": "I",
    "question": "A 44-year-old labourer who drinks alcohol has fever, right upper quadrant pain and tender hepatomegaly. a) What is the probable diagnosis and differentials? [2] b) What investigations will you do? [3] c) Describe medical treatment. [3] d) When will you refer for aspiration or drainage? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Amoebic liver abscess 2011; Jun 2025 case - likely to be reused in a new format",
    "topicId": "gastro-hepatology-liver-abscess"
  },
  {
    "id": "pred-068",
    "paper": "I",
    "question": "A 30-year-old farmer has had fever for 6 days in the rainy season. a) What are the common causes of acute undifferentiated fever in India? [3] b) What investigations will you order by day of illness? [3] c) When will you start empirical doxycycline? [2] d) What are the indications for referral? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "AUFI 2019, Oct 2023 (fever with rash and shock) - scrub/lepto/dengue triad",
    "topicId": "infectious-fever-acute-undifferentiated-fever"
  },
  {
    "id": "pred-069",
    "paper": "I",
    "question": "A 25-year-old returning from Odisha has fever with chills and jaundice. a) What are the criteria for severe malaria? [3] b) Describe the NCVBDC treatment of uncomplicated vivax and falciparum malaria. [4] c) How will you manage severe malaria before referral? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Malaria 2011, 2012, Oct 2023 - malaria elimination 2030 keeps it current",
    "topicId": "infectious-fever-malaria"
  },
  {
    "id": "pred-070",
    "paper": "I",
    "question": "A 22-year-old has fever for 4 days, abdominal pain and platelets of 40,000/cumm. a) What are the warning signs in dengue? [3] b) Describe the phases of dengue. [2] c) Describe fluid management and indications for platelet transfusion. [5]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Dengue 2012, 2018, Jun 2022 - national dengue guidelines 2023",
    "topicId": "infectious-fever-dengue"
  },
  {
    "id": "pred-071",
    "paper": "I",
    "question": "A 30-year-old man is found HIV-positive during a pre-operative check. a) How is HIV diagnosed as per NACO? [2] b) What baseline tests will you do? [2] c) Describe the first-line ART regimen and monitoring. [4] d) What prophylaxis against opportunistic infections will you give? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "HIV 2012, 2020, Apr 2023 (twice) - ART and prophylaxis",
    "topicId": "infectious-fever-hiv-art"
  },
  {
    "id": "pred-072",
    "paper": "I",
    "question": "A 30-year-old is bitten on the face by a stray dog. a) Classify the exposure. [2] b) Describe wound care. [2] c) Describe post-exposure prophylaxis including intradermal regimen and rabies immunoglobulin. [4] d) What is pre-exposure prophylaxis? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Rabies 2012, 2013, 2019; National Action Plan for Rabies Elimination 2030",
    "topicId": "infectious-fever-rabies-animal-bite"
  },
  {
    "id": "pred-073",
    "paper": "I",
    "question": "A 35-year-old sewage worker presents with fever, calf pain, jaundice and reduced urine output. a) What is the likely diagnosis? [1] b) Describe the pathogenesis and clinical features. [3] c) How will you confirm it? [2] d) Describe treatment and chemoprophylaxis. [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Leptospirosis never asked; AUFI questions and monsoon outbreaks make it likely",
    "topicId": "infectious-fever-tropical-fevers-zoonoses"
  },
  {
    "id": "pred-074",
    "paper": "I",
    "question": "A 45-year-old diabetic woman has fever with chills, vomiting and right loin pain. a) What is the diagnosis? [1] b) How will you manage her in the first 48 hours? [4] c) Her urine grows ESBL-producing E. coli; what antibiotics will you choose? [3] d) What are the complications? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "UTI 2012, 2015, 2017, Dec 2021, Oct 2024 - 2-year cycle",
    "topicId": "infectious-fever-urinary-tract-infection"
  },
  {
    "id": "pred-075",
    "paper": "I",
    "question": "A 60-year-old with diabetes and hypertension has an eGFR of 38 ml/min. a) How is CKD staged? [2] b) What measures slow progression of CKD? [4] c) Describe the management of anaemia and bone mineral disease in CKD. [2] d) What drugs need dose adjustment? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "CKD 2013, Dec 2021 - 4-year gap now; KDIGO 2024 update",
    "topicId": "renal-urology-chronic-kidney-disease"
  },
  {
    "id": "pred-076",
    "paper": "I",
    "question": "A 70-year-old on hydrochlorothiazide is confused; serum sodium is 116 mEq/L. a) What are the causes of hyponatraemia? [3] b) How will you classify and evaluate it? [3] c) Describe safe correction and osmotic demyelination. [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Hyponatraemia 2017, Oct 2024",
    "topicId": "renal-urology-hyponatraemia-hyperkalaemia"
  },
  {
    "id": "pred-077",
    "paper": "I",
    "question": "A 64-year-old develops sudden right-sided weakness and slurred speech 1 hour ago. a) How will you recognise stroke (BE FAST)? [2] b) What is the immediate management? [3] c) What are the indications and contraindications for thrombolysis? [3] d) Describe secondary prevention. [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Stroke 2013, Oct 2023; hemiplegia discharge 2022",
    "topicId": "neurology-stroke-acute"
  },
  {
    "id": "pred-078",
    "paper": "I",
    "question": "A 26-year-old woman has recurrent one-sided throbbing headaches with vomiting. a) Classify headaches. [2] b) What red flags suggest secondary headache? [3] c) Describe the treatment of acute migraine. [2] d) Describe prophylaxis for migraine. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Headache 2011, 2014, 2016, 2019, Jun 2021, Oct 2023 - every 2 years",
    "topicId": "neurology-headache"
  },
  {
    "id": "pred-079",
    "paper": "I",
    "question": "A 25-year-old has his first generalised seizure. a) What history and investigations are needed? [3] b) How will you manage status epilepticus? [3] c) What advice will you give about driving, work and pregnancy? [2] d) What are the first-line antiepileptic drugs? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Seizures 2014, 2018, Jun 2021 (alcohol), Dec 2022",
    "topicId": "neurology-seizures-epilepsy"
  },
  {
    "id": "pred-080",
    "paper": "I",
    "question": "A 20-year-old has fever, headache, vomiting and neck stiffness. a) What is the differential diagnosis? [2] b) How will you differentiate bacterial, viral and tuberculous meningitis by CSF? [3] c) Describe empirical treatment. [3] d) How will you manage contacts? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Meningitis Apr 2023; neurocysticercosis 2012; paediatric meningitis Jun 2025",
    "topicId": "neurology-cns-infection"
  },
  {
    "id": "pred-081",
    "paper": "I",
    "question": "A 65-year-old has tremor at rest and slowness of movement. a) What are the causes of parkinsonism? [2] b) Describe the clinical features. [3] c) Describe drug treatment. [3] d) When will you refer? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Parkinsonism 2016, Oct 2024",
    "topicId": "neurology-parkinsonism"
  },
  {
    "id": "pred-082",
    "paper": "I",
    "question": "A 74-year-old retired teacher has progressive forgetfulness, getting lost and neglecting hygiene. a) What are the reversible causes of dementia? [3] b) How will you assess cognition? [3] c) Describe the role of the family physician in caring for him and his caregivers. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Dementia 2013, 2016, 2018, Dec 2021, Apr 2023; delirium Jun 2022",
    "topicId": "psychiatry-delirium-dementia"
  },
  {
    "id": "pred-083",
    "paper": "I",
    "question": "A 45-year-old woman has low mood, poor sleep and says life is not worth living. a) What are the diagnostic criteria for depression? [2] b) How will you use PHQ-9? [2] c) How will you assess suicide risk? [3] d) Describe drug treatment and when to refer. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Depression 2014, 2017, 2019, Dec 2021, Oct 2023 - every 2 years",
    "topicId": "psychiatry-depression"
  },
  {
    "id": "pred-084",
    "paper": "I",
    "question": "A 32-year-old has sudden episodes of palpitations, sweating and fear of dying. a) What are the diagnostic criteria for panic disorder? [2] b) What medical conditions mimic panic attacks? [3] c) Describe pharmacological and non-pharmacological treatment. [5]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Anxiety/panic 2015, 2019, 2020, Dec 2022/Apr 2023",
    "topicId": "psychiatry-anxiety"
  },
  {
    "id": "pred-085",
    "paper": "I",
    "question": "A 38-year-old is brought with tremors and seeing insects on the wall 2 days after his last drink. a) What is the diagnosis? [1] b) Describe the CIWA-Ar scale. [2] c) Describe management of alcohol withdrawal and delirium tremens. [4] d) How will you prevent relapse? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Alcohol 2011, 2012, 2018, Jun 2021, Dec 2022, Apr 2023 - nearly every year",
    "topicId": "psychiatry-alcohol-use-disorder"
  },
  {
    "id": "pred-086",
    "paper": "I",
    "question": "A 24-year-old has been hearing voices and is suspicious of his neighbours for 2 months. a) What is the differential diagnosis? [2] b) How will you manage him in primary care? [4] c) What are the provisions of the Mental Healthcare Act 2017 for admission? [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Schizophrenia/psychosis 2011, 2015, 2019; mania 2012, 2020",
    "topicId": "psychiatry-psychosis-schizophrenia"
  },
  {
    "id": "pred-087",
    "paper": "I",
    "question": "A 38-year-old woman has painful swollen small joints of both hands and 1 hour of morning stiffness. a) What are the ACR/EULAR 2010 criteria? [3] b) What investigations will you do? [2] c) Describe the management with DMARDs. [3] d) How will you monitor a patient on methotrexate? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "RA 2011, 2015, 2018, Apr 2023 (methotrexate monitoring)",
    "topicId": "musculoskeletal-rheumatoid-arthritis"
  },
  {
    "id": "pred-088",
    "paper": "I",
    "question": "A 50-year-old has sudden severe pain and swelling of the big toe after a party. a) What is the likely diagnosis? [1] b) How will you confirm it? [2] c) Describe the management of the acute attack. [3] d) Describe urate-lowering therapy and its indications. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Gout 2014, 2015, Jun 2021 - 3-6 year cycle, due",
    "topicId": "musculoskeletal-gout"
  },
  {
    "id": "pred-089",
    "paper": "I",
    "question": "A 68-year-old woman has a vertebral compression fracture after a minor fall. a) What are the risk factors for osteoporosis? [2] b) How will you diagnose it? [2] c) Describe pharmacological treatment. [4] d) How will you prevent falls and further fractures? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Osteoporosis 2012, 2016, 2018, Jun 2021; fracture prevention Oct 2024 and Jun 2025",
    "topicId": "musculoskeletal-osteoporosis"
  },
  {
    "id": "pred-090",
    "paper": "I",
    "question": "A 55-year-old man is found to have haemoglobin of 8 g/dl with microcytosis. a) Classify anaemia. [2] b) What are the causes of iron deficiency in an older man? [2] c) How will you investigate him? [3] d) Describe oral and parenteral iron therapy. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Adult anaemia 2011, 2015, 2018, 2019, May 2024 - a 3-year cycle",
    "topicId": "symptom-approach-anaemia-adult"
  },
  {
    "id": "pred-091",
    "paper": "I",
    "question": "A 45-year-old strict vegetarian on metformin has tingling of the feet and fatigue. a) What is the likely deficiency? [1] b) Describe the causes and clinical features of vitamin B12 deficiency. [4] c) How will you investigate and treat it? [5]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "B12 deficiency Jun 2021; vegetarian elderly with falls Dec 2021",
    "topicId": "symptom-approach-anaemia-adult"
  },
  {
    "id": "pred-092",
    "paper": "I",
    "question": "A 40-year-old woman has weight gain, constipation and tiredness; TSH is 14 mIU/L. a) What are the causes of hypothyroidism? [2] b) What are the clinical features? [3] c) Describe treatment and monitoring. [3] d) How will you manage subclinical hypothyroidism? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Hypothyroidism 2015; fatigue-weight gain 2019; CTS with hypothyroid features May 2024",
    "topicId": "endocrine-hypothyroidism"
  },
  {
    "id": "pred-093",
    "paper": "I",
    "question": "A 38-year-old woman has a BMI of 34 and waist circumference of 96 cm. a) Classify obesity using Asian-Indian cut-offs. [2] b) What are the complications of obesity? [2] c) Describe lifestyle and drug treatment, including GLP-1 receptor agonists. [4] d) When will you refer for bariatric surgery? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Obesity 2012, 2014, 2019, 2020 (twice), Oct 2023, Oct 2024 (children) - GLP-1/tirzepatide launched in India 2025",
    "topicId": "endocrine-obesity-metabolic-syndrome"
  },
  {
    "id": "pred-094",
    "paper": "I",
    "question": "An 80-year-old woman on four medications has fallen twice in 3 months. a) What are the risk factors for falls in the elderly? [3] b) How will you assess her, including a home visit? [4] c) Describe fall prevention measures. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Falls 2015, 2018, Dec 2021, Jun 2022, Dec 2022 - 3 times in 2021-2022",
    "topicId": "geriatrics-ethics-falls"
  },
  {
    "id": "pred-095",
    "paper": "I",
    "question": "An 82-year-old takes 11 drugs a day. a) What is polypharmacy and why is it harmful? [3] b) Describe the Beers criteria and STOPP/START. [4] c) What steps will you follow to deprescribe? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Polypharmacy 2017; drug interactions 2018; compliance in elderly 2019",
    "topicId": "geriatrics-ethics-polypharmacy"
  },
  {
    "id": "pred-096",
    "paper": "I",
    "question": "A 65-year-old with metastatic lung cancer has severe bone pain and constipation. a) Describe the WHO analgesic ladder. [3] b) How will you prescribe oral morphine and manage its side effects? [4] c) How will you manage breathlessness and nausea at the end of life? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Palliative care 2017 (twice), 2019, Dec 2022 - 2-3 year cycle",
    "topicId": "geriatrics-ethics-palliative-symptom-control"
  },
  {
    "id": "pred-097",
    "paper": "I",
    "question": "a) What is an advance directive (living will) and what is its current legal status in India? [4] b) How will you discuss end-of-life care with a family? [3] c) How will you fill a medical certificate of cause of death? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "End-of-life and advance directives Dec 2022; the 2023 Supreme Court simplification is not yet examined",
    "topicId": "geriatrics-ethics-end-of-life-death-certification"
  },
  {
    "id": "pred-098",
    "paper": "I",
    "question": "A 65-year-old diabetic has had three episodes of brief loss of consciousness in a week. a) What is the differential diagnosis of transient loss of consciousness? [3] b) How will you differentiate syncope from seizure? [3] c) What investigations will you do and when will you admit? [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Syncope 2014; brief LOC 2020 (twice); dizziness Dec 2022 and Oct 2023",
    "topicId": "symptom-approach-dizziness"
  },
  {
    "id": "pred-099",
    "paper": "II",
    "question": "A 44-year-old woman has a 3 x 2 cm hard lump in the upper outer quadrant of her right breast. a) What is the differential diagnosis? [2] b) Describe triple assessment. [4] c) What are the recommendations for breast cancer screening in India? [2] d) What is the family physician's role after surgery? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Breast lump 2011, 2012, 2014, 2016, 2017, Dec 2021, Jun 2022, Dec 2022, Apr 2023, Oct 2024 - the most repeated surgical theme",
    "topicId": "surgery-office-breast-lump"
  },
  {
    "id": "pred-100",
    "paper": "II",
    "question": "A 58-year-old diabetic has an infected ulcer on the sole of his foot. a) How will you examine the foot and grade the ulcer? [3] b) Describe local wound care and offloading. [3] c) What are the indications for antibiotics and referral? [2] d) What foot care advice will you give? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Diabetic foot 2013, 2015, 2017, 2018, 2020, Dec 2022, Apr 2023, Oct 2023 - nearly annual",
    "topicId": "surgery-office-diabetic-foot"
  },
  {
    "id": "pred-101",
    "paper": "II",
    "question": "A 50-year-old bus conductor has a shallow ulcer above the medial malleolus with pigmentation. a) What is the likely diagnosis? [1] b) Describe the venous anatomy of the lower limb and tests for varicose veins. [3] c) How will you differentiate venous, arterial and neuropathic ulcers? [3] d) Describe the management including compression. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Venous ulcer/varicose 2015, 2016, 2017, 2020, Jun 2022, May 2024",
    "topicId": "surgery-office-varicose-veins-leg-ulcers"
  },
  {
    "id": "pred-102",
    "paper": "II",
    "question": "A 45-year-old has a swollen painful calf 2 days after a long flight. a) What is the differential diagnosis? [2] b) How will you use the Wells score and D-dimer? [3] c) Describe outpatient management with anticoagulants. [3] d) How will you prevent recurrence? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "DVT 2013, 2014, 2015, 2016, 2017, 2019, 2020, Jun 2025 - one of the most repeated",
    "topicId": "cardiovascular-pad-vte"
  },
  {
    "id": "pred-103",
    "paper": "II",
    "question": "A 30-year-old woman sustains flame burns to her chest, abdomen and both upper limbs. a) How will you estimate the burn area and depth? [3] b) Describe fluid resuscitation using the Parkland formula. [3] c) What are the criteria for referral to a burns unit? [2] d) What are the medico-legal aspects? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Burns 2012, 2013, 2014, 2016, Dec 2021, Dec 2022, Apr 2023, Oct 2023 - nearly annual",
    "topicId": "emergency-burns"
  },
  {
    "id": "pred-104",
    "paper": "II",
    "question": "A 25-year-old motorcyclist is brought after an accident; he opens his eyes to pain and is confused. a) Calculate and interpret the GCS. [3] b) Describe the initial management at a CHC. [4] c) What are the indications for CT head? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Head injury 2011, 2012, 2015, 2018 (twice), 2020 (twice), Jun 2021, Oct 2024 - about 10 times",
    "topicId": "emergency-head-injury"
  },
  {
    "id": "pred-105",
    "paper": "II",
    "question": "A 6-year-old fell from a swing and lost consciousness for 1 minute but is now playing. a) What history and examination will you do? [3] b) What are the indications for neuroimaging in children (PECARN)? [3] c) What advice will you give the parents for home observation? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Child head injury 2018; teenager cycling 2020 - paediatric version recurring",
    "topicId": "emergency-head-injury"
  },
  {
    "id": "pred-106",
    "paper": "II",
    "question": "You arrive at the scene of a road traffic accident with an injured motorcyclist. a) Describe the primary survey. [4] b) What are the life-threatening injuries to identify? [3] c) How will you immobilise and transfer the patient safely? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Trauma 2011, 2013, 2014, 2017, 2019 - due after 6 years",
    "topicId": "emergency-trauma-primary-survey"
  },
  {
    "id": "pred-107",
    "paper": "II",
    "question": "A 30-year-old woman has a painless swelling in front of the neck that moves with swallowing. a) How will you differentiate thyroid swellings from other neck swellings? [2] b) What investigations will you order? [3] c) Describe the ACR TI-RADS and Bethesda systems. [3] d) What are the indications for surgery? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Thyroid swelling 2012, 2013, 2015, 2017, 2018, 2019, 2020, Oct 2024, Jun 2025 - nine times",
    "topicId": "surgery-office-neck-swellings-thyroid"
  },
  {
    "id": "pred-108",
    "paper": "II",
    "question": "A 50-year-old has a groin swelling that increases on coughing. a) Describe the differential diagnosis of groin swelling. [3] b) How will you differentiate direct and indirect hernia? [2] c) What are the features of strangulation? [2] d) Describe pre-operative optimisation and post-operative advice. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Hernia 2017, 2020 (twice), Oct 2023, Oct 2024",
    "topicId": "surgery-office-hernia"
  },
  {
    "id": "pred-109",
    "paper": "II",
    "question": "A 62-year-old with diabetes, hypertension and COPD is scheduled for cholecystectomy. a) Describe the components of pre-anaesthetic check-up. [4] b) How will you optimise his comorbidities? [4] c) Which drugs will you stop or continue before surgery? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Pre-op 2012, 2017, 2018, 2020, Oct 2024 - 2-3 year cycle",
    "topicId": "surgery-office-preop-postop"
  },
  {
    "id": "pred-110",
    "paper": "II",
    "question": "A 28-year-old is posted for caesarean section under spinal anaesthesia. a) Describe the anatomy relevant to spinal anaesthesia with a diagram. [3] b) What are the contraindications? [2] c) What are the complications and their management? [5]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Spinal anaesthesia 2017, Dec 2022, Jun 2025 - repeating every 2-3 years",
    "topicId": "surgery-office-spinal-anaesthesia"
  },
  {
    "id": "pred-111",
    "paper": "II",
    "question": "You plan to drain a paronychia under digital block. a) Classify local anaesthetic agents and give their maximum doses. [3] b) Describe the digital nerve block. [3] c) What are the signs of local anaesthetic systemic toxicity and how will you manage it? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "LA agents 2012, 2013, May 2024; digital block 2015; nerve blocks 2020, 2021, 2022, 2023 - nearly annual",
    "topicId": "surgery-office-local-anaesthesia-nerve-blocks"
  },
  {
    "id": "pred-112",
    "paper": "II",
    "question": "A 40-year-old with menorrhagia has haemoglobin of 5 g/dl. a) What are the indications for blood transfusion? [2] b) What blood products are available and their uses? [3] c) How will you recognise and manage transfusion reactions? [3] d) What tests are done on donated blood? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Transfusion 2011, 2016, 2020, Dec 2022, Oct 2024 - 2-year cycle",
    "topicId": "surgery-office-blood-transfusion"
  },
  {
    "id": "pred-113",
    "paper": "II",
    "question": "A 19-year-old college student has pain that started around the umbilicus and moved to the right iliac fossa. a) What is the Alvarado score and how will you interpret it? [3] b) What is the differential diagnosis in a young woman? [3] c) Describe management at a CHC and indications for referral. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "RIF pain 2011, 2015, 2017, 2019, Dec 2021, Dec 2022, Apr 2023, Jun 2025 - eight times",
    "topicId": "surgery-office-rif-pain-appendicitis"
  },
  {
    "id": "pred-114",
    "paper": "II",
    "question": "A 40-year-old presents with sudden severe epigastric pain; pulse 116/minute, BP 96/60 mmHg and a rigid abdomen. a) What is the differential diagnosis? [3] b) What investigations will you do? [3] c) Describe the initial management before referral. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Acute abdomen 2013, 2018, 2020, Jun 2022 - 2-year cycle",
    "topicId": "gastro-hepatology-acute-abdomen-pancreatitis"
  },
  {
    "id": "pred-115",
    "paper": "II",
    "question": "A 35-year-old has painful defecation with streaks of fresh blood. a) What is the differential diagnosis of bleeding per rectum? [3] b) How will you examine him? [2] c) Describe the management of acute anal fissure. [3] d) What are the red flags for colorectal cancer? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Bleeding PR 2013, 2015, 2018, 2020; perianal abscess 2021; anal pain Oct 2023",
    "topicId": "surgery-office-anorectal-disorders"
  },
  {
    "id": "pred-116",
    "paper": "II",
    "question": "A 15-year-old has sudden severe pain in the left testis for 3 hours. a) What is the differential diagnosis? [3] b) How will you differentiate testicular torsion from epididymo-orchitis? [3] c) Describe the management and time window. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Acute scrotum 2012, 2013, 2014, 2018, May 2024; scrotal swelling 2017, Dec 2021",
    "topicId": "surgery-office-scrotal-swelling-acute-scrotum"
  },
  {
    "id": "pred-117",
    "paper": "II",
    "question": "A 68-year-old cannot pass urine for 10 hours and has a tender lower abdomen. a) What are the causes of acute urinary retention? [3] b) Describe the steps of urethral catheterisation. [3] c) Describe the medical management of BPH after catheter removal. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Urinary retention 2013, 2016, 2019, 2020 (twice); BPH 2012, 2014, 2016, 2019",
    "topicId": "renal-urology-luts-bph"
  },
  {
    "id": "pred-118",
    "paper": "II",
    "question": "A 40-year-old labourer has fever, a swollen hand and tenderness over the mid-palm. a) Describe the spaces of the hand. [2] b) What are the types of hand infection? [3] c) Describe the management of paronychia and deep palmar space infection. [5]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Paronychia 2015 (twice), 2018, 2020, May 2024; palmar space Apr 2023",
    "topicId": "surgery-office-hand-infections"
  },
  {
    "id": "pred-119",
    "paper": "II",
    "question": "A 68-year-old post-menopausal woman falls on her outstretched hand and has a dinner-fork deformity. a) What are the components of Colles fracture? [3] b) How will you manage it at a CHC? [4] c) What are the complications? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Colles fracture 2014, 2019, Dec 2021, Oct 2024 - 2-3 year cycle",
    "topicId": "musculoskeletal-fractures-sports-injury"
  },
  {
    "id": "pred-120",
    "paper": "II",
    "question": "An 80-year-old falls in the bathroom and has a shortened, externally rotated leg. a) What is the likely diagnosis? [1] b) Describe first aid and referral. [3] c) How will you counsel the family who prefer a traditional bone setter? [3] d) How will you prevent another fracture? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Hip fracture 2013, Dec 2022, Oct 2024, Jun 2025 - three times in 3 years",
    "topicId": "musculoskeletal-osteoporosis"
  },
  {
    "id": "pred-121",
    "paper": "II",
    "question": "A 32-year-old has low back pain radiating to the lateral leg after lifting a load. a) What are the red flags in low back pain? [2] b) Describe the dermatomes and signs of L4, L5 and S1 root involvement. [3] c) What are the indications for imaging and urgent referral? [2] d) Describe conservative management. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Back pain 2019, 2020, Jun 2021, Dec 2022, Apr 2023, Jun 2025 - near-annual",
    "topicId": "musculoskeletal-low-back-pain"
  },
  {
    "id": "pred-122",
    "paper": "II",
    "question": "A 55-year-old diabetic has a painful, stiff shoulder for 3 months. a) What is the differential diagnosis? [3] b) Describe the clinical tests for shoulder pain. [3] c) Describe the management of adhesive capsulitis. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Shoulder pain 2014, 2016, 2017, 2019, Jun 2021, Oct 2024 - every 2-3 years",
    "topicId": "musculoskeletal-shoulder-pain"
  },
  {
    "id": "pred-123",
    "paper": "II",
    "question": "A 62-year-old obese woman has bilateral knee pain for 3 years. a) What are the clinical and radiological features of OA knee? [3] b) Describe non-pharmacological management. [3] c) Describe drug therapy and intra-articular injections. [2] d) What are the indications for knee replacement? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Knee OA 2015, 2017, 2020, Dec 2021, Jun 2022",
    "topicId": "musculoskeletal-knee-osteoarthritis"
  },
  {
    "id": "pred-124",
    "paper": "II",
    "question": "A 40-year-old woman has numbness of her thumb, index and middle fingers at night. a) What is the likely diagnosis? [1] b) What are the predisposing causes? [2] c) Describe the clinical tests. [3] d) Describe management. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Carpal tunnel 2015, 2019, May 2024",
    "topicId": "musculoskeletal-regional-soft-tissue-disorders"
  },
  {
    "id": "pred-125",
    "paper": "II",
    "question": "A 14-year-old has had foul-smelling ear discharge for 3 months. a) Differentiate safe and unsafe CSOM. [3] b) Describe the management of safe CSOM. [3] c) What are the complications? [2] d) What are the indications for referral? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "CSOM 2015, 2018, 2020, Dec 2021, Jun 2022, Dec 2022, Oct 2024 - nearly annual",
    "topicId": "eye-ent-otitis"
  },
  {
    "id": "pred-126",
    "paper": "II",
    "question": "A 65-year-old hypertensive has profuse nasal bleeding for an hour. a) What are the causes of epistaxis? [2] b) Describe first aid and anterior nasal packing. [4] c) How will you manage BP and when will you refer? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Epistaxis 2011, 2012 (twice), 2013 (twice), 2015, 2016, 2018, Jun 2025 - the most repeated ENT theme",
    "topicId": "eye-ent-epistaxis-foreign-bodies"
  },
  {
    "id": "pred-127",
    "paper": "II",
    "question": "A 45-year-old has brief spinning vertigo when turning in bed. a) What is the differential diagnosis of vertigo? [2] b) How will you differentiate peripheral and central vertigo (HINTS)? [3] c) Describe the Dix-Hallpike test and Epley manoeuvre. [3] d) When will you refer? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Vertigo 2014, 2017, 2018, 2019, Oct 2023",
    "topicId": "neurology-vertigo"
  },
  {
    "id": "pred-128",
    "paper": "II",
    "question": "A 16-year-old has fever and sore throat. a) Describe the Centor/McIsaac score. [3] b) When will you prescribe antibiotics and which ones? [3] c) What are the complications of streptococcal pharyngitis? [2] d) What are the indications for tonsillectomy? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Sore throat 2015, Apr 2023 (rational antibiotics); tonsillectomy 2016",
    "topicId": "eye-ent-sore-throat"
  },
  {
    "id": "pred-129",
    "paper": "II",
    "question": "A 50-year-old farmer has a painful red eye with blurred vision. a) What is the differential diagnosis of red eye? [3] b) What are the red flags? [2] c) How will you differentiate conjunctivitis, keratitis, iritis and acute glaucoma? [3] d) When will you refer urgently? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Red eye 2013, 2014 (twice), 2017, 2019, Dec 2021, Oct 2023, May 2024, Jun 2025 - nearly annual",
    "topicId": "eye-ent-red-eye"
  },
  {
    "id": "pred-130",
    "paper": "II",
    "question": "A 35-year-old agricultural worker has a painful red eye with a corneal opacity after injury with a paddy leaf. a) What is the likely diagnosis? [1] b) How will you examine him? [2] c) Describe the management of fungal keratitis. [4] d) What are the complications? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Corneal ulcer 2015, 2017, Jun 2022; ocular trauma Jun 2025",
    "topicId": "eye-ent-corneal-ulcer-ocular-trauma"
  },
  {
    "id": "pred-131",
    "paper": "II",
    "question": "A 55-year-old with diabetes for 10 years has never had an eye examination. a) Classify diabetic retinopathy. [3] b) How will you screen for it in family practice? [2] c) Describe the treatment options. [3] d) How will you prevent progression? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Diabetic retinopathy 2016, 2019, Jun 2022, Oct 2024, Jun 2025 - nearly annual",
    "topicId": "eye-ent-cataract-dr-glaucoma"
  },
  {
    "id": "pred-132",
    "paper": "II",
    "question": "A 60-year-old woman has a painful swelling near the inner angle of her left eye with watering. a) What is the differential diagnosis? [3] b) Describe the management of acute dacryocystitis. [4] c) Differentiate stye and chalazion. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Eyelid swellings 2012, 2013, 2015, 2017, 2018 (twice), Apr 2023",
    "topicId": "eye-ent-eyelid-lacrimal-disorders"
  },
  {
    "id": "pred-133",
    "paper": "II",
    "question": "A 45-year-old has well-defined erythematous plaques with silvery scales on elbows and knees. a) What is the diagnosis and how will you confirm it? [2] b) What are the comorbidities? [2] c) Describe topical and systemic treatment. [4] d) When will you refer? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Psoriasis 2012, 2017, 2018, 2019, Dec 2021, Dec 2022 - nearly every 2 years",
    "topicId": "dermatology-psoriasis"
  },
  {
    "id": "pred-134",
    "paper": "II",
    "question": "A 17-year-old girl is upset about pimples on her face. a) Describe the pathogenesis of acne. [2] b) How will you grade acne? [2] c) Describe the treatment ladder including isotretinoin precautions. [4] d) How will you counsel her? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Acne 2012, 2014, 2017, 2020, Oct 2024",
    "topicId": "dermatology-acne-vulgaris"
  },
  {
    "id": "pred-135",
    "paper": "II",
    "question": "A 30-year-old has a hypopigmented anaesthetic patch on the forearm and a thickened ulnar nerve. a) What are the cardinal signs of leprosy? [2] b) How is leprosy classified? [2] c) Describe MDT regimens under NLEP. [3] d) Describe lepra reactions and their management. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Leprosy 2014, 2019, Apr 2023, Oct 2023 - twice in 2023",
    "topicId": "dermatology-leprosy-nlep"
  },
  {
    "id": "pred-136",
    "paper": "II",
    "question": "Four members of a family have severe itching at night. a) What is the likely diagnosis? [1] b) Describe the clinical features. [3] c) Describe treatment of the family. [4] d) What are the complications? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Scabies 2011, 2020; scabies-related PSGN Oct 2023",
    "topicId": "dermatology-scabies-pediculosis"
  },
  {
    "id": "pred-137",
    "paper": "II",
    "question": "A 30-year-old has itchy annular scaly lesions in the groin that have recurred despite creams. a) What is the likely diagnosis and how will you confirm it? [2] b) Why is dermatophytosis becoming chronic and recurrent in India? [3] c) Describe topical and systemic treatment. [3] d) What general measures will you advise? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Tinea 2015; groin fungal infection Oct 2023; the steroid-modified tinea epidemic makes this a likely standalone question",
    "topicId": "dermatology-superficial-fungal-infections"
  },
  {
    "id": "pred-138",
    "paper": "II",
    "question": "A 65-year-old has generalised itching for 2 months with no rash. a) What are the systemic causes of pruritus? [3] b) What investigations will you order? [3] c) Describe the management. [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Pruritus 2016, 2018, 2019, Dec 2021",
    "topicId": "dermatology-generalised-pruritus"
  },
  {
    "id": "pred-139",
    "paper": "II",
    "question": "A 28-year-old man has a painless indurated penile ulcer with inguinal lymphadenopathy. a) What are the causes of genital ulcers? [2] b) What serological tests will you order? [2] c) Describe syndromic management of genital ulcer disease. [3] d) How will you manage his partner? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Genital ulcer Oct 2023 (repeated May 2024); urethral discharge 2018",
    "topicId": "dermatology-sti-genital-ulcer-urethral-discharge"
  },
  {
    "id": "pred-140",
    "paper": "II",
    "question": "A 25-year-old develops wheeze, urticaria and hypotension minutes after an injection in your clinic. a) What is the diagnosis? [1] b) Describe immediate management with doses. [5] c) What are the causes of anaphylaxis? [2] d) What advice will you give at discharge? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Anaphylaxis 2013, Oct 2023",
    "topicId": "emergency-anaphylaxis"
  },
  {
    "id": "pred-141",
    "paper": "II",
    "question": "A 30-year-old farmer is brought with vomiting, salivation, pinpoint pupils and breathlessness. a) What is the diagnosis? [1] b) Describe management including atropinisation. [5] c) What is the intermediate syndrome? [2] d) What are the medico-legal duties? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "OP poisoning Jun 2022; chemical poisoning; paracetamol Oct 2024",
    "topicId": "emergency-poisoning"
  },
  {
    "id": "pred-142",
    "paper": "II",
    "question": "A 20-year-old took 30 paracetamol tablets 2 hours ago. a) What are the principles of managing any drug overdose? [3] b) Describe the management of paracetamol poisoning with N-acetylcysteine. [4] c) How will you assess suicide risk before discharge? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Paracetamol overdose Oct 2024",
    "topicId": "emergency-poisoning"
  },
  {
    "id": "pred-143",
    "paper": "II",
    "question": "A 35-year-old farmer is bitten on the foot at night and later has ptosis and difficulty swallowing. a) What is the likely snake? [1] b) Describe first aid. [2] c) What is the 20WBCT? [2] d) Describe ASV dosing and management of neurotoxic envenomation. [5]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Snake bite 2018, Dec 2022; NAPSE 2024 new",
    "topicId": "emergency-snake-bite-envenomation"
  },
  {
    "id": "pred-144",
    "paper": "II",
    "question": "A 30-year-old construction worker collapses at noon in May with a temperature of 41.5 C and confusion. a) What is the diagnosis? [1] b) What is the differential diagnosis? [2] c) Describe rapid cooling and management. [4] d) How will you prevent heat illness in outdoor workers? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Heat stroke 2020 (twice); heat action plans and NPCCHH; climate trend",
    "topicId": "emergency-heat-illness"
  },
  {
    "id": "pred-145",
    "paper": "II",
    "question": "A 55-year-old collapses in your waiting room. a) Describe basic life support. [4] b) Describe the ACLS algorithm for ventricular fibrillation. [4] c) What drugs must be in the emergency tray? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "BLS/ACLS 2012; emergency readiness - not asked for over 10 years",
    "topicId": "emergency-cardiac-arrest"
  },
  {
    "id": "pred-146",
    "paper": "II",
    "question": "An 80-year-old bedridden stroke patient has a sacral ulcer. a) Describe the stages of pressure ulcers. [3] b) What are the risk factors? [2] c) Describe the management. [3] d) How will you prevent pressure ulcers at home? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Pressure ulcers 2017, Jun 2022, Oct 2024 - 2-year cycle",
    "topicId": "geriatrics-ethics-pressure-ulcers"
  },
  {
    "id": "pred-147",
    "paper": "II",
    "question": "A 72-year-old woman has leakage of urine when she coughs and before reaching the toilet. a) What are the types of urinary incontinence? [3] b) How will you assess her? [3] c) Describe the management. [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Urinary incontinence 2018, 2020, Jun 2022, Apr 2023",
    "topicId": "renal-urology-urinary-incontinence"
  },
  {
    "id": "pred-148",
    "paper": "II",
    "question": "A 30-year-old has chest trauma with severe breathlessness, absent breath sounds on the left and a deviated trachea. a) What is the diagnosis? [1] b) Describe immediate management. [3] c) Describe the indications and procedure for intercostal drain insertion. [6]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Tension pneumothorax 2011, 2014, Apr 2023; ICD 2015",
    "topicId": "emergency-trauma-primary-survey"
  },
  {
    "id": "pred-149",
    "paper": "III",
    "question": "A 24-year-old primigravida at 34 weeks has BP 164/112 mmHg, headache and urine albumin 3+. a) Classify hypertensive disorders of pregnancy. [2] b) What are the features of severe pre-eclampsia? [2] c) Describe management including MgSO4 and antihypertensives. [4] d) What are the maternal and fetal complications? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "HDP asked 2011, 2012, 2014, 2016, 2017, 2019, Dec 2021, Jun 2022, Dec 2022, Apr 2023, May 2024 - nearly every session",
    "topicId": "obstetrics-hypertensive-disorders"
  },
  {
    "id": "pred-150",
    "paper": "III",
    "question": "A 30-year-old at 24 weeks has a 75 g OGTT 2-hour value of 172 mg/dl. a) What is the DIPSI criterion? [2] b) Who should be screened and when? [2] c) Describe management with MNT, metformin and insulin. [4] d) What are the long-term implications for mother and child? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "GDM 2013, 2015, 2019, 2020 (twice), Dec 2022/Apr 2023, Oct 2023 - 2-year cycle",
    "topicId": "obstetrics-gdm"
  },
  {
    "id": "pred-151",
    "paper": "III",
    "question": "A 26-year-old at 28 weeks has Hb 7 g/dl and cannot tolerate oral iron. a) What are the causes of anaemia in pregnancy? [2] b) How will you calculate and give IV ferric carboxymaltose/iron sucrose? [3] c) What are the complications of anaemia in pregnancy? [2] d) How will you manage her during labour? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Anaemia in pregnancy 2012, 2013, 2017, 2018, Oct 2024, Jun 2025",
    "topicId": "obstetrics-anaemia-pregnancy"
  },
  {
    "id": "pred-152",
    "paper": "III",
    "question": "A para 3 has heavy bleeding 20 minutes after delivery at a PHC. a) Define PPH and list the causes (4 Ts). [3] b) Describe the management of atonic PPH. [4] c) What is active management of the third stage of labour? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "PPH 2012, 2015, 2017, 2019, Dec 2022 - 2-3 year cycle",
    "topicId": "obstetrics-pph"
  },
  {
    "id": "pred-153",
    "paper": "III",
    "question": "A 25-year-old with 7 weeks of amenorrhoea has abdominal pain and spotting. a) What is the differential diagnosis? [2] b) How will you use beta-hCG and ultrasound? [3] c) Describe the management of ectopic pregnancy including methotrexate criteria. [3] d) Classify abortion. [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "First-trimester bleeding 2014, 2019, Dec 2021, May 2024, Oct 2024 (algorithm) - twice in 2024",
    "topicId": "obstetrics-early-pregnancy-bleeding"
  },
  {
    "id": "pred-154",
    "paper": "III",
    "question": "a) Describe the provisions of the MTP (Amendment) Act 2021. [5] b) Describe medical abortion with mifepristone and misoprostol up to 9 weeks. [3] c) What post-abortion care will you provide? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "MTP Act 2012, May 2024, Jun 2025 - twice in 2 years",
    "topicId": "obstetrics-early-pregnancy-bleeding"
  },
  {
    "id": "pred-155",
    "paper": "III",
    "question": "A 22-year-old primigravida registers at 10 weeks. a) What investigations will you do at the first visit? [3] b) What is the recommended schedule of antenatal visits? [2] c) What supplements and vaccines will you give? [3] d) What danger signs will you teach her? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "ANC 2012, 2013, Dec 2021, Apr 2023, Oct 2023, Jun 2025 - nearly annual",
    "topicId": "obstetrics-antenatal-care"
  },
  {
    "id": "pred-156",
    "paper": "III",
    "question": "A 36-year-old G4 with a previous stillbirth and short stature attends at 16 weeks. a) Define high-risk pregnancy and list the factors. [3] b) How is high-risk pregnancy tracked under PMSMA? [2] c) How will you detect and monitor fetal growth restriction? [3] d) What is your role as family physician? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "High-risk pregnancy 2017, Apr 2023, Oct 2023, Jun 2025; IUGR 2013",
    "topicId": "obstetrics-high-risk-pregnancy-fgr"
  },
  {
    "id": "pred-157",
    "paper": "III",
    "question": "A 26-year-old at 32 weeks has regular painful contractions and leaking fluid. a) What are the risk factors for preterm labour? [2] b) How will you confirm PPROM? [2] c) Describe antenatal corticosteroids, tocolysis and magnesium sulphate. [4] d) What antibiotics are indicated? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Preterm 2018, Oct 2023, Jun 2025",
    "topicId": "obstetrics-preterm-labour-prom"
  },
  {
    "id": "pred-158",
    "paper": "III",
    "question": "A couple married for 6 months, the woman with epilepsy and the man a thalassaemia carrier, plan a pregnancy. a) What is preconception care? [2] b) What advice will you give about her epilepsy and folic acid? [3] c) What screening will you offer for thalassaemia? [3] d) What vaccines will you give before pregnancy? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Preconception counselling Jun 2022 and May 2024; prenatal screening 2018",
    "topicId": "obstetrics-preconception-prenatal-screening"
  },
  {
    "id": "pred-159",
    "paper": "III",
    "question": "A 25-year-old primigravida is Rh-negative and her husband is Rh-positive. a) Explain the pathogenesis of Rh isoimmunisation. [2] b) How will you monitor her antenatally? [3] c) Describe anti-D prophylaxis with dose and timing. [3] d) What care does the newborn need? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Never asked as a full question - a core curriculum topic due to be examined",
    "topicId": "obstetrics-rh-negative-pregnancy"
  },
  {
    "id": "pred-160",
    "paper": "III",
    "question": "A 28-year-old with mitral stenosis is 12 weeks pregnant. a) What are the physiological changes that worsen heart disease in pregnancy? [2] b) How will you manage her antenatally? [3] c) Describe management in labour and puerperium. [3] d) What contraception will you advise afterwards? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Heart disease in pregnancy 2018; ToF dental advice Apr 2023",
    "topicId": "obstetrics-medical-disorders-pregnancy"
  },
  {
    "id": "pred-161",
    "paper": "III",
    "question": "A primigravida at booking is HBsAg-positive. a) What further tests will you do? [2] b) What is the risk of transmission to the baby? [2] c) When is tenofovir indicated? [2] d) What will you give the newborn and can she breastfeed? [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "HBsAg in pregnancy Oct 2023",
    "topicId": "obstetrics-medical-disorders-pregnancy"
  },
  {
    "id": "pred-162",
    "paper": "III",
    "question": "A 22-year-old at 9 weeks has persistent vomiting and dehydration. a) What is the differential diagnosis? [2] b) How will you assess severity? [2] c) Describe outpatient and inpatient management. [4] d) What are the complications? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Hyperemesis 2012, Oct 2024",
    "topicId": "obstetrics-hyperemesis-gravidarum"
  },
  {
    "id": "pred-163",
    "paper": "III",
    "question": "A primigravida in active labour is admitted to your CHC. a) What are the components of the WHO Labour Care Guide? [4] b) How is it different from the older partograph? [3] c) What are the indications for referral from the alert and action lines? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Partograph May 2024; WHO Labour Care Guide (2020) never asked",
    "topicId": "obstetrics-labour-partograph"
  },
  {
    "id": "pred-164",
    "paper": "III",
    "question": "A primigravida at term is in the second stage for 2 hours with maternal exhaustion. a) What are the indications for assisted vaginal delivery? [3] b) What are the prerequisites? [3] c) Compare vacuum and forceps. [2] d) What are the complications? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Instrumental delivery Oct 2024; caesarean audit Dec 2022",
    "topicId": "obstetrics-malpresentation-twins-operative-delivery"
  },
  {
    "id": "pred-165",
    "paper": "III",
    "question": "A mother comes for her 6-week postnatal visit. a) What are the common problems of the puerperium? [4] b) How will you screen for postpartum depression? [2] c) What advice will you give on nutrition, contraception and baby care? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Puerperium Dec 2021, Jun 2022; postnatal visit",
    "topicId": "obstetrics-postnatal-care"
  },
  {
    "id": "pred-166",
    "paper": "III",
    "question": "A mother of a 1-month-old complains that her milk is not enough. a) How will you assess the adequacy of breastfeeding? [2] b) Describe correct positioning and attachment. [3] c) How will you manage perceived insufficient milk? [3] d) What are the Ten Steps of BFHI? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Breastfeeding 2012, 2014, 2015, 2016, 2019, Dec 2021, Jun 2022, May 2024 - near-annual",
    "topicId": "obstetrics-postnatal-care"
  },
  {
    "id": "pred-167",
    "paper": "III",
    "question": "A 26-year-old delivered by caesarean 6 weeks ago and is breastfeeding. a) What contraceptive options are available to her? [3] b) Describe the WHO Medical Eligibility Criteria. [3] c) Describe the use of DMPA and PPIUCD. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Contraception 2012-2020 yearly, Dec 2022, Apr 2023, Oct 2023, May 2024, Jun 2025",
    "topicId": "gynaecology-contraception"
  },
  {
    "id": "pred-168",
    "paper": "III",
    "question": "A 19-year-old student had unprotected sex 36 hours ago. a) What are the methods of emergency contraception? [4] b) Describe the mechanism and failure rate of each. [3] c) What advice will you give about safe sex and regular contraception? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Emergency contraception 2012, 2015, 2019, Dec 2022, Oct 2023, May 2024",
    "topicId": "gynaecology-contraception"
  },
  {
    "id": "pred-169",
    "paper": "III",
    "question": "A couple married for 2 years has not conceived. a) Define infertility. [1] b) Describe the evaluation of the couple in primary care. [5] c) What simple treatments can be tried before referral? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Infertility 2014, 2015, 2017, Oct 2024",
    "topicId": "gynaecology-infertility-workup"
  },
  {
    "id": "pred-170",
    "paper": "III",
    "question": "A 44-year-old has heavy menstrual bleeding for 6 months and Hb 8 g/dl. a) Describe the PALM-COEIN classification. [3] b) How will you evaluate her? [3] c) Describe medical management and indications for referral. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "AUB 2012, 2016, 2018, Jun 2022, Dec 2022, Oct 2023",
    "topicId": "gynaecology-abnormal-uterine-bleeding"
  },
  {
    "id": "pred-171",
    "paper": "III",
    "question": "A 28-year-old has foul-smelling vaginal discharge and lower abdominal pain. a) Describe the differential diagnosis of vaginal discharge. [3] b) Describe the syndromic management with colour-coded kits. [4] c) How will you diagnose and treat PID? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Vaginal discharge/syndromic approach 2011-2022 nearly annually; Apr 2023, Oct 2023",
    "topicId": "gynaecology-vaginal-discharge-pid"
  },
  {
    "id": "pred-172",
    "paper": "III",
    "question": "a) What are the risk factors for cervical cancer? [2] b) Describe the methods of screening including VIA and HPV DNA testing. [4] c) Describe HPV vaccination and its introduction into the national programme. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Cervical screening 2011, 2016, Jun 2021, Dec 2021, Jun 2022, Dec 2022; HPV vaccine rollout announced 2024",
    "topicId": "gynaecology-cervical-cancer-screening"
  },
  {
    "id": "pred-173",
    "paper": "III",
    "question": "A 51-year-old has hot flushes, sleep disturbance and vaginal dryness. a) Define menopause and perimenopause. [2] b) Describe the problems of menopause. [3] c) What are the benefits and risks of hormone therapy? [3] d) What non-hormonal treatments are available? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Menopause 2013, 2018, Oct 2023",
    "topicId": "gynaecology-menopause-hormone-therapy"
  },
  {
    "id": "pred-174",
    "paper": "III",
    "question": "A 17-year-old has not attained menarche. a) Define primary amenorrhoea. [1] b) What are the causes? [3] c) How will you evaluate her? [4] d) When will you refer? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Menstrual irregularity 2018, 2019, 2020; amenorrhoea never asked - a curriculum gap",
    "topicId": "gynaecology-amenorrhoea-menstrual-irregularity"
  },
  {
    "id": "pred-175",
    "paper": "III",
    "question": "A 30-year-old woman with bruises on her arms tells you her husband beats her. a) How will you ask about and document domestic violence? [3] b) What are the health consequences? [2] c) What legal protections are available? [3] d) What support services will you refer her to? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Domestic violence 2013, Jun 2025",
    "topicId": "gynaecology-ipv-sexual-assault"
  },
  {
    "id": "pred-176",
    "paper": "III",
    "question": "a) Define maternal mortality ratio and give the current figure. [2] b) What are the causes of maternal deaths in India? [3] c) Describe the government schemes to reduce maternal mortality (JSY, JSSK, PMSMA, SUMAN, LaQshya). [5]",
    "marks": 10,
    "likelihood": "high",
    "basis": "MMR 2011, 2012 (twice), 2013 (twice), 2016, 2019; JSY Dec 2022",
    "topicId": "preventive-maternal-health-mmr"
  },
  {
    "id": "pred-177",
    "paper": "III",
    "question": "You are in charge of newborn care at a CHC. a) Describe essential newborn care at birth. [3] b) What are the danger signs in a newborn? [3] c) Describe home-based newborn care by ASHA. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Newborn care 2019 (HBNC), Dec 2021, Oct 2024 (CHC newborns)",
    "topicId": "pediatrics-newborn-care"
  },
  {
    "id": "pred-178",
    "paper": "III",
    "question": "A 3-day-old baby is yellow up to the abdomen. a) Differentiate physiological and pathological jaundice. [3] b) How will you use the Bhutani nomogram? [3] c) Describe phototherapy and the indications for exchange transfusion. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Neonatal jaundice 2013, 2018, Dec 2022",
    "topicId": "pediatrics-neonatal-jaundice"
  },
  {
    "id": "pred-179",
    "paper": "III",
    "question": "A 1.8 kg baby is born at 34 weeks. a) Classify low birth weight. [2] b) What are the problems of a preterm baby? [3] c) Describe kangaroo mother care. [3] d) How will you prevent low birth weight? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "LBW 2018, 2020, Dec 2022, Oct 2023",
    "topicId": "pediatrics-low-birth-weight-preterm-kmc"
  },
  {
    "id": "pred-180",
    "paper": "III",
    "question": "A 2-day-old baby of a diabetic mother has jittery movements and lip-smacking. a) What are the causes of neonatal seizures? [3] b) How will you manage neonatal hypoglycaemia? [3] c) Describe the evaluation and treatment of neonatal seizures. [4]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Neonatal seizures 2017, Jun 2025; neonatal hypoglycaemia Oct 2023",
    "topicId": "pediatrics-neonatal-seizures-common-problems"
  },
  {
    "id": "pred-181",
    "paper": "III",
    "question": "A 2-year-old weighing 10 kg has loose stools for 2 days, is restless and has sunken eyes. a) Assess dehydration by IMNCI. [3] b) Describe Plan B with ORS volume. [3] c) Describe zinc and nutritional management. [2] d) When will you refer? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "IMNCI diarrhoea 2015, 2018, Dec 2021, Dec 2022, May 2024 (twice), Jun 2025 - every session",
    "topicId": "pediatrics-diarrhoea-dehydration"
  },
  {
    "id": "pred-182",
    "paper": "III",
    "question": "A 14-month-old has cough and fast breathing. a) How will you classify pneumonia by IMNCI? [4] b) Describe the management of each classification. [4] c) What are the general danger signs? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "IMNCI pneumonia 2012, 2019, Jun 2025",
    "topicId": "pediatrics-imnci"
  },
  {
    "id": "pred-183",
    "paper": "III",
    "question": "A 2-year-old has a MUAC of 11 cm and bilateral pedal oedema. a) Define SAM. [2] b) What are the criteria for admission? [2] c) Describe the 10 steps of management. [4] d) Describe community management. [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "SAM 2011-2015, 2018, 2019, 2020 (twice), Jun 2022, Oct 2023 - near-annual",
    "topicId": "pediatrics-severe-acute-malnutrition"
  },
  {
    "id": "pred-184",
    "paper": "III",
    "question": "A mother of a 6-month-old asks about starting solid foods. a) When and why should complementary feeding start? [2] b) What are the principles of complementary feeding? [3] c) Plan a diet for a 9-month-old. [3] d) How will you monitor growth? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Complementary feeding Oct 2023; growth charts 2017, 2018",
    "topicId": "pediatrics-growth-monitoring"
  },
  {
    "id": "pred-185",
    "paper": "III",
    "question": "A 3-year-old boy has never been immunised. a) Describe the National Immunisation Schedule. [4] b) Plan catch-up immunisation for him. [4] c) What is the U-WIN platform? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Immunisation schedule 2012, 2017, 2019, Jun 2022 (unimmunised child); U-WIN is new",
    "topicId": "pediatrics-immunisation"
  },
  {
    "id": "pred-186",
    "paper": "III",
    "question": "A 2-year-old had a generalised seizure lasting 3 minutes with high fever. a) Define febrile seizure and its types. [2] b) What is the differential diagnosis? [2] c) Describe acute management. [3] d) How will you counsel the parents? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Febrile seizures 2014, 2015, 2016, Jun 2022, Oct 2023 - every 1-2 years",
    "topicId": "pediatrics-fever-febrile-seizure"
  },
  {
    "id": "pred-187",
    "paper": "III",
    "question": "A 4-year-old has recurrent wheezing with colds. a) What is the differential diagnosis of wheeze in a child? [2] b) How will you diagnose asthma in a preschool child? [2] c) Describe step-wise management with doses. [4] d) How will you teach spacer use? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Childhood asthma 2015 (twice), 2016, 2017, 2019",
    "topicId": "pediatrics-asthma-wheeze-child"
  },
  {
    "id": "pred-188",
    "paper": "III",
    "question": "A 2-year-old has a barking cough and stridor at night. a) What is the differential diagnosis of acute stridor? [3] b) Describe the Westley croup score. [2] c) Describe management of croup. [3] d) How will you recognise epiglottitis? [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Stridor/croup 2015, 2018, Jun 2021, Jun 2022",
    "topicId": "pediatrics-stridor-croup"
  },
  {
    "id": "pred-189",
    "paper": "III",
    "question": "A 10-year-old has migratory joint pain and fever 3 weeks after a sore throat. a) Describe the Revised Jones Criteria. [3] b) What investigations will you do? [2] c) Describe treatment. [3] d) Describe secondary prophylaxis. [2]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Rheumatic fever 2019, Dec 2022/Apr 2023",
    "topicId": "pediatrics-rheumatic-fever"
  },
  {
    "id": "pred-190",
    "paper": "III",
    "question": "A 6-year-old has puffiness of the face and 4+ proteinuria. a) Define nephrotic syndrome. [2] b) Describe the steroid regimen. [3] c) What are the complications? [2] d) How will you differentiate it from PSGN? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Nephrotic 2012, 2019, Jun 2025; PSGN 2015, 2019, Oct 2023",
    "topicId": "pediatrics-glomerular-disease-child"
  },
  {
    "id": "pred-191",
    "paper": "III",
    "question": "A 2-year-old does not speak any words and does not respond to his name. a) Describe the milestones expected at 2 years. [3] b) What are the red flags for autism? [3] c) How will you evaluate and refer him? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Development Dec 2021, May 2024 (autism)",
    "topicId": "pediatrics-development-behaviour-scholastic"
  },
  {
    "id": "pred-192",
    "paper": "III",
    "question": "A 9-year-old is brought for poor school performance and restlessness. a) What are the causes of poor scholastic performance? [3] b) What are the features of ADHD? [3] c) How will you manage a child with ADHD and a specific learning disability? [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Scholastic performance Oct 2024, Jun 2025 (twice)",
    "topicId": "pediatrics-development-behaviour-scholastic"
  },
  {
    "id": "pred-193",
    "paper": "III",
    "question": "A 6-year-old girl is brought with genital injury. a) What features suggest child sexual abuse? [3] b) Describe the provisions of the POCSO Act. [4] c) What is the family physician's duty? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Child abuse 2016, 2017, 2020, Jun 2025",
    "topicId": "pediatrics-child-abuse-pocso"
  },
  {
    "id": "pred-194",
    "paper": "III",
    "question": "A 15-year-old girl comes with fatigue and says she feels low. a) What are the health problems of adolescents? [3] b) Describe the HEADSSS assessment. [3] c) Describe RKSK. [4]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Adolescent health 2013, 2016, 2020 (twice), Dec 2021, Jun 2022, Oct 2024, Jun 2025 - 8 times",
    "topicId": "pediatrics-adolescent-health"
  },
  {
    "id": "pred-195",
    "paper": "III",
    "question": "A 5-year-old has fever, cough, red eyes and a rash starting behind the ears. a) What is the likely diagnosis? [1] b) Describe the complications. [3] c) Describe management including vitamin A. [3] d) How will you control spread? [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "Fever with rash 2015, 2020 (measles); chickenpox Oct 2023",
    "topicId": "pediatrics-exanthematous-fevers"
  },
  {
    "id": "pred-196",
    "paper": "III",
    "question": "A 6-year-old whose mother has TB has fever and weight loss. a) How will you diagnose TB in a child? [3] b) Describe the treatment regimen. [3] c) How will you prevent TB in other children? [2] d) What is Ni-kshay Poshan Yojana? [2]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Childhood TB 2012, Dec 2022/Apr 2023",
    "topicId": "respiratory-tuberculosis-ntep"
  },
  {
    "id": "pred-197",
    "paper": "III",
    "question": "A 25-year-old woman has thalassaemia trait. a) How will you differentiate thalassaemia trait from iron deficiency? [3] b) What advice will you give about marriage and pregnancy? [4] c) Describe the National Sickle Cell Anaemia Elimination Mission. [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "Thalassaemia trait 2016; sickle cell mission 2023 - never asked",
    "topicId": "pediatrics-genetic-disorders-haemoglobinopathies"
  },
  {
    "id": "pred-198",
    "paper": "III",
    "question": "A pregnant woman tests HIV-positive at 20 weeks. a) What is the risk of transmission to the baby? [2] b) Describe PPTCT under NACP. [5] c) What care does the baby need? [3]",
    "marks": 10,
    "likelihood": "medium",
    "basis": "PPTCT 2011, 2016, 2019",
    "topicId": "infectious-fever-hiv-art"
  },
  {
    "id": "pred-199",
    "paper": "IV",
    "question": "You are asked to start school health services for classes 6 to 12 in two schools under your CHC. a) What are the common health problems of school children aged 10-17 years? [3] b) What are the components of school health services? [4] c) Describe the School Health and Wellness Programme under Ayushman Bharat and how you will evaluate it. [3]",
    "marks": 10,
    "likelihood": "high",
    "basis": "School health asked 2013, Jun 2021, Dec 2021, Oct 2024, Jun 2025 - 5 times, 3 in the last 4 years",
    "topicId": "preventive-school-health"
  }
];
