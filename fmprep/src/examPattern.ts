import type { ExamBlueprint } from "./lib/frameTypes";

const blueprint: ExamBlueprint = {
  title: "DNB Family Medicine (NBEMS) - final examination",
  overview: [
    "The DNB Final examination has two independent halves. Theory comes first: four written papers of 100 marks and 180 minutes each, 400 marks in total. Only candidates who qualify theory are called for the practical, which is a separate 300-mark examination held some weeks later.",
    "Theory is written in **hybrid mode**. The questions appear on a computer screen at the exam centre and the answers are written by hand in a physical, barcoded answer booklet. Nothing is typed. The barcode of the booklet must be keyed into the system before the paper starts, and getting that wrong cancels the result.",
    "Every paper carries **10 questions and all 10 must be attempted**. Since the December 2018 session NBEMS has said the papers consist of short-note-type questions rather than the older long-essay format, so the working assumption is ten 10-mark structured questions, usually with sub-parts (a), (b) and sometimes (c).",
    "For Family Medicine the four papers between them cover the whole of general practice: internal medicine and allied medical specialties, surgery and allied surgical specialties, maternal and child health, and the discipline of family medicine itself alongside community and public health. Paper IV is the one that is unique to this speciality and is where General Medicine candidates would be lost.",
  ],
  sourceNote:
    "Checked in September 2026. Content was built from: the NBEMS official question-paper archive at natboard.edu.in (DNB Family Medicine Paper 1 October 2024 and December 2021 and April 2023, Paper 2 June 2025, Paper 3 October 2024, Paper 4 December 2021 and May 2024 - these carry the printed header 'Duration: 180 minutes, Total marks: 100, Number of questions to be attempted: 10'); the NBEMS DNB Family Medicine curriculum page and PDF; the DNB/DrNB Final Examination Information Bulletins (December 2022, May 2024, October 2024) for pass marks, grace marks and attempts; NBEMS notices and press reporting on the hybrid-mode barcoded answer booklet; and NBEMS practical-examination scheme reporting for the OSCE/clinical case/ward round/viva split. NOTE ON METHOD: the session this was written in could not open PDFs or web pages directly (outbound fetching was blocked by a network policy), so the above sources were read through search-engine extracts of those exact documents rather than by downloading them. Every figure below is therefore reproduced as reported and NOT as personally verified page-by-page. The paper titles in particular are an inference drawn from the subject matter of the actual papers, not a quotation of an NBEMS heading. Before you rely on any number here for a decision - fees, deadlines, pass marks, attempts, what you may carry into the hall - open the current NBEMS Information Bulletin for your session at natboard.edu.in and confirm it. The bulletin is the only authority; this page is a study aid.",
  papers: [
    {
      id: "I",
      title: "Paper I - Medicine and allied medical specialties (title inferred; verify against the current NBEMS information bulletin)",
      covers: [
        "General internal medicine as seen in primary and secondary care",
        "Cardiovascular disease: hypertension, ischaemic heart disease, heart failure, arrhythmia, rheumatic heart disease",
        "Endocrine and metabolic: type 2 diabetes and its complications, thyroid disease, obesity, dyslipidaemia, metabolic syndrome",
        "Respiratory: asthma, COPD, pneumonia, tuberculosis, pleural disease",
        "Infectious disease including the Indian tropical set - dengue, malaria, enteric fever, leptospirosis, scrub typhus, HIV",
        "Renal, gastrointestinal, hepatic, haematological and rheumatological problems in general practice",
        "Neurology: headache, stroke and TIA, seizures, peripheral neuropathy, dizziness",
        "Geriatric medicine, polypharmacy, frailty and falls",
        "Applied basic sciences as they bear on the above - pharmacology of the common drug classes, applied physiology and pathology behind the clinical picture",
        "Acute medical emergencies a family physician must stabilise before referral, and rational prescribing",
      ],
      marks: 100,
      minutes: 180,
      structure: [
        "10 questions, all to be attempted (printed on the NBEMS paper header).",
        "10 marks per question, so 100 marks in 180 minutes.",
        "Since December 2018 NBEMS has stated the papers are short-note-type; in practice the questions are short structured clinical vignettes with two or three sub-parts, e.g. '(a) describe the pharmacological and non-pharmacological management (b) classify the oral antidiabetic drugs'.",
        "Sub-part marks are not always printed. Where they are not, split the 10 marks evenly across the sub-parts and write to that.",
        "The exact split of long questions versus short notes is not stated in a document that could be read directly - verify against the current NBEMS information bulletin.",
      ],
      recurringThemes: [
        {
          theme: "Hypertension - diagnosis, staging, target organ damage, and combined pharmacological plus lifestyle management",
          frequency: "core",
          note: "October 2024 Paper 1 opened with a 45-year-old man on amlodipine 10 mg daily returning with BP 160/90, BMI 29, total cholesterol 280, LDL 182, HDL 33, HbA1c 7.8 per cent, creatinine 0.9 and 24-hour urinary microalbumin 900 mg, and asked for pharmacological and non-pharmacological management. Expect a whole-risk answer, not a blood-pressure-only answer.",
        },
        {
          theme: "Type 2 diabetes mellitus - classification and mechanism of oral antidiabetic drugs, targets, and complication screening",
          frequency: "core",
          note: "The second half of that same October 2024 question asked to describe the classes of oral anti-diabetic drugs with their mechanisms. This is a table question: class, example, mechanism, main adverse effect, one caution. Draw it.",
        },
        {
          theme: "Ischaemic heart disease and heart failure, including post-MI secondary prevention in a diabetic",
          frequency: "core",
          note: "December 2021 Paper 1 gave a 65-year-old with type 2 diabetes and myocardial infarction five years earlier, now with exertional dyspnoea, fatigue and leg swelling. Work through cause, class, investigation, drug groups with prognostic benefit, and what the family physician follows up.",
        },
        {
          theme: "Diabetic and hypertensive kidney disease - microalbuminuria, CKD staging, when to refer",
          frequency: "core",
          note: "Microalbuminuria was handed to the candidate inside the October 2024 stem. If a number like that appears in a vignette it is there to be commented on; ignoring it loses marks silently.",
        },
        {
          theme: "Dyslipidaemia and absolute cardiovascular risk estimation",
          frequency: "common",
          note: "Almost always embedded in a metabolic-syndrome stem rather than asked alone. Know statin indications, targets and the counselling script.",
        },
        {
          theme: "Tuberculosis - diagnosis, NTEP regimens, adherence, adverse effects, contact screening",
          frequency: "core",
          note: "TB straddles Paper I and Paper IV: the drug and diagnostic side sits here, the programme side sits in Paper IV. December 2021 Paper 4 asked what advice to give a patient on TB treatment.",
        },
        {
          theme: "Asthma and COPD in primary care - differentiation, inhaler technique, step-up and exacerbation care",
          frequency: "core",
          note: "Family Medicine wants the inhaler device counselling and the action plan, not just the drug ladder.",
        },
        {
          theme: "Fever in the Indian setting - dengue, malaria, enteric fever, leptospirosis, scrub typhus",
          frequency: "core",
          note: "Usually a syndromic approach question: how you narrow the differential with history, examination and a small panel of tests available at a health centre, and the warning signs that force admission.",
        },
        {
          theme: "Thyroid disorders - hypothyroidism, hyperthyroidism, subclinical disease, thyroid in pregnancy",
          frequency: "common",
          note: "Interpretation of TSH and free T4 in a table is a fast, high-yield way to earn the marks.",
        },
        {
          theme: "Anaemia - approach by indices, iron deficiency, megaloblastic, anaemia of chronic disease",
          frequency: "common",
          note: "A flow chart from MCV is the expected diagram.",
        },
        {
          theme: "Obesity and metabolic syndrome - definition, criteria, Asian Indian cut-offs, management",
          frequency: "common",
          note: "Know the Asian Indian BMI and waist cut-offs specifically; using the Western cut-offs in an Indian exam reads as careless.",
        },
        {
          theme: "Geriatric care - falls, polypharmacy, deprescribing, cognitive impairment, comprehensive geriatric assessment",
          frequency: "common",
          note: "A distinctively family-medicine slant: functional status and the caregiver, not just the diagnosis.",
        },
        {
          theme: "Rational prescribing, antimicrobial stewardship, drug interactions and adverse drug reactions",
          frequency: "common",
          note: "Often the (b) sub-part attached to a clinical stem. A short, principled list scores better than a long drug list.",
        },
        {
          theme: "Stroke, transient ischaemic attack and seizure disorder in general practice",
          frequency: "less-common",
          note: "When it comes, it is usually about recognition, the time window, referral and long-term secondary prevention.",
        },
        {
          theme: "Acute emergencies in the clinic - chest pain, breathlessness, anaphylaxis, poisoning, snake bite",
          frequency: "less-common",
          note: "Answer as a sequence: stabilise, treat, refer with what documentation. A timed algorithm reads well.",
        },
      ],
    },
    {
      id: "II",
      title: "Paper II - Surgery and allied surgical specialties (title inferred; verify against the current NBEMS information bulletin)",
      covers: [
        "General surgery as it presents to a family physician: acute abdomen, hernia, anorectal disease, breast and thyroid lumps",
        "Orthopaedics and musculoskeletal medicine: fractures, osteoporosis, osteoarthritis, backache, soft tissue injury",
        "Ophthalmology: red eye, refractive error, cataract, glaucoma, diabetic and hypertensive retinopathy",
        "Otorhinolaryngology: ear discharge, hearing loss, vertigo, epistaxis, sore throat, foreign bodies",
        "Dermatology: infections and infestations, eczema, psoriasis, drug eruptions, leprosy, skin manifestations of systemic disease",
        "Anaesthesia relevant to the district setting: pre-anaesthetic assessment, local and spinal anaesthesia and their complications, sedation, basic airway",
        "Urology: retention, calculi, benign prostatic hyperplasia, catheterisation",
        "Trauma, wounds, burns and office/minor surgical procedures",
        "Peripheral vascular problems - deep vein thrombosis, varicose veins, diabetic foot and chronic ulcers",
        "Oncology in general practice: warning signs, screening, referral pathway and palliative care",
      ],
      marks: 100,
      minutes: 180,
      structure: [
        "10 questions, all to be attempted; 10 marks each; 180 minutes.",
        "Same short-note-with-sub-parts format as the other papers.",
        "The June 2025 paper mixed a vascular medicine stem, two ophthalmology stems, an orthopaedic/osteoporosis stem, a hepatobiliary stem and an anaesthesia stem in one paper - so no single allied speciality can safely be dropped.",
        "The exact allocation of specialities to this paper is inferred from the question papers, not quoted from an NBEMS syllabus heading - verify against the current NBEMS information bulletin.",
      ],
      recurringThemes: [
        {
          theme: "Ophthalmology in the diabetic and hypertensive patient - classification of diabetic retinopathy, ocular effects of hypertension, preventing progression",
          frequency: "core",
          note: "June 2025 Paper 2 gave a 53-year-old woman with diabetes and hypertension attending for her annual eye check and asked for the classification of diabetic retinopathy with diagrams, how progression is prevented, and the ocular effects of hypertension. The word 'with diagrams' is in the question - draw the fundus stages.",
        },
        {
          theme: "The unilateral red eye - differential diagnosis and what must not be missed",
          frequency: "core",
          note: "June 2025 Paper 2 also asked for the differential diagnosis of a unilateral painful red eye in a 55-year-old diabetic farmer. Acute angle-closure glaucoma and corneal ulcer are the marks; a table of red eye causes against pain, vision, discharge and pupil is the ideal answer shape.",
        },
        {
          theme: "Osteoporosis and the fragility fracture in an older woman",
          frequency: "core",
          note: "June 2025 Paper 2: a 75-year-old post-menopausal woman with a fracture of both bones of the right lower limb after a trivial fall. Answer both halves - fracture management and the osteoporosis workup, calcium and vitamin D, bisphosphonates, and fall prevention.",
        },
        {
          theme: "Acute abdomen and right upper quadrant pain - liver abscess, cholecystitis, hepatitis, amoebiasis",
          frequency: "core",
          note: "June 2025 Paper 2: a 44-year-old labourer with four days of fever and RUQ pain, two weeks of loose stools and ten years of unsafe alcohol use. The stem is engineered to point at amoebic liver abscess - name it, then justify it against the differential.",
        },
        {
          theme: "Common dermatology - scabies, dermatophytosis, eczema, psoriasis, drug eruption, leprosy",
          frequency: "core",
          note: "Dermatology is high volume in real practice and shows up as short structured questions. Describe the lesion in proper morphological language before you name the diagnosis; that sentence carries marks.",
        },
        {
          theme: "Musculoskeletal pain in general practice - low backache, knee osteoarthritis, shoulder pain, red flags",
          frequency: "core",
          note: "The red-flag list for back pain is worth memorising verbatim; it is the fastest two marks in the paper.",
        },
        {
          theme: "Anaesthesia for the family physician - spinal anaesthesia, its haemodynamic management, level of block, sedation and complications",
          frequency: "common",
          note: "June 2025 Paper 2 asked about management after spinal anaesthesia covering haemodynamics, level of block and sedation. Know pre-anaesthetic assessment, ASA grading and the management of hypotension and post-dural-puncture headache.",
        },
        {
          theme: "Deep vein thrombosis and venous thromboembolism - risk factors, Wells score, initial assessment",
          frequency: "common",
          note: "June 2025 Paper 2: a 43-year-old businessman with calf pain and swelling after long air travel, asked for the initial assessment and differential diagnosis. Wells score plus D-dimer plus compression ultrasound is the expected skeleton.",
        },
        {
          theme: "Wounds, burns, minor surgical procedures and office surgery",
          frequency: "common",
          note: "Rule of nines, Parkland formula, tetanus prophylaxis schedule and suturing/local anaesthetic principles are all directly examinable.",
        },
        {
          theme: "Trauma and fracture first aid - splinting, immobilisation, transport, when to refer",
          frequency: "common",
          note: "Answer in sequence: primary survey, then the limb, then the referral note.",
        },
        {
          theme: "Anorectal and abdominal wall problems - haemorrhoids, fissure, fistula, hernia, hydrocele",
          frequency: "common",
          note: "Conservative management in the clinic, and the exact indication that turns it into a referral.",
        },
        {
          theme: "Diabetic foot and chronic ulcers - grading, offloading, infection, amputation risk",
          frequency: "common",
          note: "Wagner grading in a table, then a management column against each grade.",
        },
        {
          theme: "ENT problems - otitis media, hearing loss, vertigo, epistaxis, tonsillitis, foreign body",
          frequency: "common",
          note: "Vertigo differentiation (peripheral versus central) and the Dix-Hallpike/Epley pair are reliably askable.",
        },
        {
          theme: "Urological presentations - acute retention, renal colic, benign prostatic hyperplasia, catheterisation",
          frequency: "less-common",
          note: "IPSS scoring and catheter care are the family-medicine angle.",
        },
        {
          theme: "Breast and thyroid lumps, cancer warning signs, screening and palliative care",
          frequency: "less-common",
          note: "Triple assessment for a breast lump, and the WHO analgesic ladder for the palliative question, are the two stock answers.",
        },
      ],
    },
    {
      id: "III",
      title: "Paper III - Maternal and child health: obstetrics, gynaecology, paediatrics and neonatology (title inferred; verify against the current NBEMS information bulletin)",
      covers: [
        "Antenatal, intranatal and postnatal care at the level of a health centre",
        "Normal labour, the partograph, second stage, instrumental delivery and its complications",
        "Obstetric emergencies and referral: post-partum haemorrhage, pre-eclampsia and eclampsia, obstructed labour, sepsis",
        "Medical disorders in pregnancy - anaemia, gestational diabetes, hypertension, thyroid, infection",
        "Contraception, family planning counselling and medical termination of pregnancy",
        "Gynaecology in general practice: abnormal uterine bleeding, vaginal discharge, PCOS, prolapse, menopause, cervical and breast cancer screening",
        "Infertility - evaluation of the couple by the family physician",
        "Essential newborn care, neonatal resuscitation, breastfeeding, care of the low-birth-weight baby, neonatal jaundice and sepsis",
        "IMNCI and the sick child, common childhood infections, diarrhoea and ARI",
        "Growth, development and nutrition, malnutrition, immunisation, and adolescent health",
      ],
      marks: 100,
      minutes: 180,
      structure: [
        "10 questions, all to be attempted; 10 marks each; 180 minutes.",
        "Short structured questions built around a mother, a newborn, a child or a couple.",
        "Questions frequently name a programme or a protocol by name - WHO essential newborn care, IMNCI - and expect you to reproduce its components, so learn the named frameworks as lists.",
        "The subject grouping of this paper is inferred from the actual papers - verify against the current NBEMS information bulletin.",
      ],
      recurringThemes: [
        {
          theme: "Essential newborn care and neonatal resuscitation, and how to deliver it at a community health centre",
          frequency: "core",
          note: "October 2024 Paper 3 asked to briefly describe the components of WHO 'Essential neonatal care' and how to implement it in a community health centre. The second half - implementation - is where most candidates under-write. Answer it with staff, equipment, protocol, training, records and audit.",
        },
        {
          theme: "IMNCI - assessing and classifying the sick child, especially pneumonia",
          frequency: "core",
          note: "October 2024 Paper 3: a 5-year-old with three days of cold, cough and fever, poor feeding, lethargy and respiratory rate 38 per minute, asked to assess for pneumonia by IMNCI. Reproduce the age-specific respiratory rate cut-offs and the classification colour bands exactly.",
        },
        {
          theme: "Second stage of labour - indications for cutting it short, instruments used, complications and their management",
          frequency: "core",
          note: "Asked in that exact wording in October 2024 Paper 3. Three-part question, so three headed blocks: indications, instruments (forceps and vacuum with their prerequisites), complications maternal and fetal with management.",
        },
        {
          theme: "Antenatal care - schedule of visits, investigations, risk stratification, danger signs, birth preparedness",
          frequency: "core",
          note: "Recurs in every session in some form, including as a Paper IV public-health question about reaching a migrant or hard-to-reach woman.",
        },
        {
          theme: "Immunisation - the national schedule, cold chain, AEFI, missed and delayed doses, catch-up",
          frequency: "core",
          note: "Write the current national schedule as a table with age, vaccine, dose, route and site. Rote-learn it; it is examined in both Paper III and Paper IV.",
        },
        {
          theme: "Diarrhoea, dehydration and ORS; acute respiratory infection in children",
          frequency: "core",
          note: "The dehydration assessment table and low-osmolarity ORS composition with zinc dosing are the marks.",
        },
        {
          theme: "Growth, development and nutrition - growth charts, developmental milestones, severe acute malnutrition",
          frequency: "core",
          note: "Milestones by age and the SAM/MAM criteria with facility versus community management.",
        },
        {
          theme: "Contraception and family planning counselling",
          frequency: "core",
          note: "Method table with mechanism, efficacy, contraindications and counselling points; plus emergency contraception and post-partum options.",
        },
        {
          theme: "Obstetric emergencies - post-partum haemorrhage, pre-eclampsia and eclampsia, obstructed labour",
          frequency: "core",
          note: "Answer with a timed drill including drug doses (oxytocin, misoprostol, magnesium sulphate regimen) and the referral decision.",
        },
        {
          theme: "Infertility - evaluation of the couple in family practice",
          frequency: "common",
          note: "October 2024 Paper 3: a young couple married four years, living together, anxious to conceive, presenting to the family physician. Evaluate both partners in parallel; the commonest error is a female-only answer.",
        },
        {
          theme: "Anaemia in pregnancy and in childhood - screening, grading, oral and parenteral iron, national programme",
          frequency: "common",
          note: "Anaemia Mukt Bharat and the WHO cut-offs by age and pregnancy status.",
        },
        {
          theme: "Common gynaecological problems - abnormal uterine bleeding, vaginal discharge, PCOS, prolapse, menopause",
          frequency: "common",
          note: "PALM-COEIN for AUB and syndromic management of vaginal discharge are compact, high-scoring frameworks.",
        },
        {
          theme: "Cervical and breast cancer screening in primary care",
          frequency: "common",
          note: "Know what the Indian national programme actually offers (visual inspection with acetic acid, clinical breast examination) as against what Western guidelines recommend.",
        },
        {
          theme: "Adolescent health - puberty, nutrition, mental health, sexual and reproductive health, RKSK",
          frequency: "common",
          note: "HEEADSSS assessment is the family-medicine framework to name.",
        },
        {
          theme: "Neonatal jaundice, neonatal sepsis and care of the low-birth-weight baby including kangaroo mother care",
          frequency: "less-common",
          note: "Danger signs and referral thresholds carry more marks than the pathophysiology.",
        },
        {
          theme: "Childhood behaviour and developmental problems, learning difficulty, child abuse and POCSO obligations",
          frequency: "less-common",
          note: "The medico-legal duty under POCSO is examinable and is often forgotten.",
        },
      ],
    },
    {
      id: "IV",
      title: "Paper IV - Family medicine as a discipline, community and public health, and practice management (title inferred; verify against the current NBEMS information bulletin)",
      covers: [
        "Principles and philosophy of family medicine: first contact, continuity, comprehensiveness, coordination, person- and family-centred care",
        "Family assessment tools - genogram, family life cycle, family APGAR, SCREEM, ecomap - and the biopsychosocial model",
        "Consultation models, communication skills, counselling, breaking bad news, shared decision making",
        "The health system in India, levels of care, referral and back-referral, health financing and insurance",
        "National health programmes - tuberculosis, non-communicable disease, reproductive and child health, vector-borne disease, blindness control",
        "Epidemiology and biostatistics - study designs, measures of association, screening, outbreak investigation",
        "Preventive and promotive care - periodic health examination, screening principles, lifestyle counselling, tobacco and alcohol cessation, immunisation delivery",
        "Practice management - medical records, clinical audit, quality and safety, infection control, biomedical waste, practice finances and staffing",
        "Ethics and medico-legal practice - consent, confidentiality, negligence, certification, documentation",
        "Research methodology, critical appraisal and evidence-based practice; disaster preparedness and occupational, school and geriatric community health",
      ],
      marks: 100,
      minutes: 180,
      structure: [
        "10 questions, all to be attempted; 10 marks each; 180 minutes.",
        "The December 2018 NBEMS clarification specifically named Paper IV of Family Medicine (along with General Medicine and Paediatrics) as moving to short-note-type questions only.",
        "This paper is where the DNB Family Medicine candidate is examined on the discipline itself. It reads like a mix of community medicine and general-practice organisation, and it is the paper on which a purely clinical revision plan fails.",
        "Questions are typically framed as 'you are the family physician at X, what would you do' - answer operationally, with steps and people and records, not with textbook definitions alone.",
      ],
      recurringThemes: [
        {
          theme: "Principles of family medicine and structured clinical assessment - the three-stage assessment of a person",
          frequency: "core",
          note: "December 2021 Paper 4 asked directly to describe the concept of 'three stage assessment' of a person in family medicine clinical practice. Define, then expand each stage, then give a worked clinical illustration; a bare definition will not fill 10 marks.",
        },
        {
          theme: "Referral and back-referral in family practice - when, to whom, with what, and what happens after",
          frequency: "core",
          note: "A December 2021 Paper 4 question. Cover the indications, the content of a good referral letter, continuity after referral, and the common failures of the referral loop.",
        },
        {
          theme: "Outbreak investigation and epidemic control",
          frequency: "core",
          note: "December 2021 Paper 4 had both an investigation of a fever outbreak and a plan for a control programme for a waterborne disease. Write the classical ten steps of outbreak investigation as a numbered list - it is a memorised answer and it is fast.",
        },
        {
          theme: "National health programmes - NTEP for tuberculosis, the NCD programme, RCH, vector-borne disease control",
          frequency: "core",
          note: "December 2021 Paper 4 asked what advice you would give a patient on tuberculosis treatment. Learn the current programme names, the service package at each level and the reporting/recording requirements, not just the clinical protocol.",
        },
        {
          theme: "Immunisation delivery in the community - programme logistics, cold chain, coverage, vaccine hesitancy",
          frequency: "core",
          note: "December 2021 Paper 4 asked about the challenges in implementing COVID-19 vaccination. Answer under headings: supply and cold chain, workforce, demand and hesitancy, records and surveillance, adverse event monitoring, equity.",
        },
        {
          theme: "Biomedical waste management",
          frequency: "core",
          note: "Asked outright in December 2021 Paper 4. The colour-coded segregation table with category, container colour, waste type and final treatment is the whole answer; draw it and you have most of the marks in five minutes.",
        },
        {
          theme: "Family assessment tools - genogram, family life cycle, family APGAR, SCREEM, ecomap",
          frequency: "core",
          note: "This is the signature Family Medicine content and is examined in both theory and the practical. Be able to draw a genogram with correct symbols and to score a family APGAR.",
        },
        {
          theme: "Care of vulnerable and hard-to-reach groups - migrants, urban poor, elderly living alone",
          frequency: "common",
          note: "December 2021 Paper 4 opened with a couple who are migrant labourers, the woman five months pregnant, seeking advice at a health centre. Cover the clinical care, the entitlement and portability of services, and the follow-up mechanism.",
        },
        {
          theme: "School health services",
          frequency: "common",
          note: "A December 2021 Paper 4 question. Components, screening schedule, the teacher's role, referral, and the national school health programme.",
        },
        {
          theme: "Disaster and post-disaster public health - post-flood disease prevention, relief camp health",
          frequency: "common",
          note: "December 2021 Paper 4 asked about preventing disease after a flood. Structure it as water, sanitation, food, vector, immunisation, surveillance, shelter and mental health.",
        },
        {
          theme: "Ethics, consent, confidentiality and medico-legal responsibilities of the family physician",
          frequency: "common",
          note: "The four principles plus a concrete Indian application (consent in a minor, confidentiality with a spouse, certification, records retention).",
        },
        {
          theme: "Communication and counselling - breaking bad news, motivational interviewing, tobacco and alcohol cessation",
          frequency: "common",
          note: "Name a model and use it as your headings (SPIKES for bad news, the 5 A's for tobacco). Examiners reward a named framework.",
        },
        {
          theme: "Research methodology, biostatistics and critical appraisal",
          frequency: "common",
          note: "Study designs with their strengths and weaknesses, sensitivity and specificity with a 2x2 table, confounding and bias, levels of evidence. Draw the 2x2.",
        },
        {
          theme: "Screening principles and the periodic health examination in general practice",
          frequency: "common",
          note: "Wilson and Jungner criteria, then an age- and sex-specific screening package for an Indian adult.",
        },
        {
          theme: "Practice management - medical records, clinical audit cycle, quality and patient safety, infection control",
          frequency: "common",
          note: "The audit cycle drawn as a loop, with a family-practice example, is a compact 10-mark answer.",
        },
        {
          theme: "Health system organisation, health financing, insurance and Ayushman Bharat / health and wellness centres",
          frequency: "less-common",
          note: "Levels of care with the staffing and service package at each is the frame to memorise.",
        },
      ],
    },
  ],
  practical: [
    {
      name: "Virtual OSCE - 20 stations",
      minutes: 80,
      weight: "100 of 300 marks (20 stations x 5 marks, 4 minutes per station)",
      whatHappens: [
        "Twenty short stations delivered on a computer, four minutes each, run back to back.",
        "Stations are image-, data- or scenario-based: an ECG, an X-ray, a fundus photograph, a skin lesion, a growth chart, a partograph, a prescription to critique, a lab report to interpret, a counselling script, an instrument or a piece of equipment.",
        "Each station is self-contained and closed at the four-minute mark; you cannot go back.",
        "This component is reported as a virtual/computer-delivered OSCE in the NBEMS scheme introduced in 2021 - confirm the current delivery format in your session's practical instructions.",
      ],
      howItIsMarked: [
        "Five marks per station, marked against a checklist of specific expected points, not on general impression.",
        "Because it is checklist-marked, partial answers score - always write or say something for every prompt.",
        "Spread of stations across the syllabus means no single weak area sinks you, but leaving stations blank does.",
        "Practise against a clock; four minutes is the constraint, not the knowledge.",
      ],
    },
    {
      name: "Clinical cases - 2 cases",
      minutes: 90,
      weight: "100 of 300 marks (2 cases x 50 marks)",
      whatHappens: [
        "Two clinical case examinations, 50 marks each, on real patients.",
        "For Family Medicine the cases are the bread-and-butter of general practice: an adult with multimorbidity (diabetes plus hypertension plus a complication), a chronic respiratory or cardiac case, a mother-and-child case, an elderly patient with functional decline.",
        "You take a history, examine, present the case, give a summary statement and a differential, then defend investigations and a management plan.",
        "The Family Medicine slant is expected: family and social context, function, adherence, cost, follow-up plan and preventive care - not a tertiary-care workup.",
        "Exact time allowed per case is set by the examination centre on the day; the commonly reported allowance is around 30-45 minutes with the patient plus presentation - verify against the current NBEMS instructions for your session.",
      ],
      howItIsMarked: [
        "Marks are distributed across history, examination, presentation, diagnostic reasoning, investigations and management - the internal split is not published; the reported distribution should be verified against the current NBEMS information bulletin.",
        "The summary statement is the single most heavily weighted sentence: one sentence naming age, sex, the problem, its duration, the key positives and the key negatives.",
        "A well-argued wrong diagnosis defended with evidence scores better than a right diagnosis asserted without reasoning.",
        "Do not present a hospital-style plan for a general-practice patient; name the follow-up interval and who does the follow-up.",
      ],
    },
    {
      name: "Ward rounds - 4 rounds",
      minutes: 40,
      weight: "40 of 300 marks (4 rounds x 10 marks)",
      whatHappens: [
        "Four short bedside rounds, relevant to the speciality, ten marks each.",
        "This component was added to the NBEMS scheme in 2021 to restore the clinical content of the examination.",
        "You are asked to review a patient the way a physician on a round would: what has changed, what does today's chart show, what do you do next, what would make you escalate.",
        "It is deliberately quick and practical - a working round, not a full case.",
      ],
      howItIsMarked: [
        "Ten marks per round, on the safety and the practicality of what you propose.",
        "Examiners reward a clear structure: read the chart, examine the relevant system, state the problem list, state today's plan.",
        "Missing a safety issue (a drug interaction, a missed vital sign, an unaddressed abnormal result) is the classic mark loss here.",
      ],
    },
    {
      name: "Viva voce - 4 stations",
      minutes: 40,
      weight: "60 of 300 marks (4 stations x 15 marks)",
      whatHappens: [
        "Four separate viva stations of 15 marks each, each with its own examiner and its own domain.",
        "For Family Medicine the domains reliably include: investigations and their interpretation; principles of prescribing and rational drug use; health indicators, national programmes and community health service delivery; morbidity patterns, medical records and practice management; and emergencies, ethics and referral.",
        "Table topics: instruments, specimens, drug samples, X-rays, ECGs, vaccines and cold-chain equipment, contraceptive devices, and family assessment tools.",
        "Expect at least one station on family medicine as a discipline - genogram, family life cycle, continuity of care.",
      ],
      howItIsMarked: [
        "Fifteen marks per station, marked by the examiner on that station only, so a bad station does not follow you to the next.",
        "Answer in the first sentence, then expand. Examiners in a viva mark the first thing you say.",
        "Say 'I do not know' cleanly when you do not, then offer what you do know about the area; a confident wrong answer costs more.",
        "The domain list above is as commonly reported for Family Medicine viva stations - verify against the current NBEMS information bulletin and your centre's instructions.",
      ],
    },
  ],
  rules: [
    {
      heading: "Passing the theory examination",
      points: [
        "Theory is four papers of 100 marks each, **400 marks in total**.",
        "The reported pass rule is **200 out of 400 in the aggregate of the four papers** - that is 50 per cent overall, not 50 per cent in each paper.",
        "The DNB Family Medicine curriculum wording is that the candidate must score at least 50 per cent in the aggregate of the 4 papers to qualify the theory examination.",
        "Some secondary sources instead state a minimum in each individual paper. This is a real conflict between sources and it matters - **verify against the current NBEMS information bulletin** for your session before relying on it.",
        "Grace marks of up to 2 per cent of the maximum, i.e. **8 marks out of 400**, are reported to be given to candidates in the zone of consideration, i.e. scoring between 192 and 199 out of 400. Verify against the current NBEMS information bulletin.",
        "Only candidates who qualify theory are called for the practical. The theory result and the practical schedule are usually announced together.",
      ],
    },
    {
      heading: "Passing the practical examination",
      points: [
        "The practical is **300 marks** and the pass mark is **150 out of 300** - 50 per cent.",
        "There is **no provision for grace marks in the practical examination**.",
        "The reported component split is OSCE 100, clinical cases 100, ward rounds 40 and viva 60. There is no published requirement to pass each component separately; the 150/300 aggregate is the reported criterion - verify against the current NBEMS information bulletin.",
        "The final result is pass or fail. NBEMS does not publish a merit rank for the DNB final.",
      ],
    },
    {
      heading: "Attempts",
      points: [
        "A **maximum of three attempts** is reported to be available for the practical examination.",
        "**Appearance in the first practical examination for which you are eligible is compulsory** - not turning up is reported to count as an attempt.",
        "The number of attempts permitted at the theory examination is not stated consistently across the sources that could be read; some secondary sources report a limit of ten. Treat the theory attempt limit as **not verified** and check the current NBEMS information bulletin.",
        "Candidates who have failed to qualify the final theory examination in earlier sessions are reported to be ineligible to apply for any further final theory examination until their thesis has been accepted.",
      ],
    },
    {
      heading: "Thesis",
      points: [
        "The thesis is **compulsory** for DNB and is an eligibility condition for the final examination, not an optional extra.",
        "The **thesis protocol** must be submitted to NBEMS through the online thesis portal within a prescribed window after joining - reported as within 3 months of the date of joining. Ethics Committee and scientific committee approval must be in place before research begins.",
        "The **thesis itself** must be submitted by the deadline for the session you intend to sit. Reported deadlines are **31 December for the June session and 30 June for the December session**, with NBEMS frequently issuing extensions by public notice.",
        "A trainee who has not submitted the thesis by the deadline is **not eligible to appear** in that final examination.",
        "A **Thesis Acceptance Certificate** is required for issue of the DNB transcript and degree.",
        "Deadlines move session to session and extensions are announced by notice - always check the live thesis page and the current information bulletin at natboard.edu.in.",
      ],
    },
    {
      heading: "Eligibility to appear",
      points: [
        "Enrolment in an **NBEMS-accredited** DNB Family Medicine training post, and completion (or imminent completion) of the prescribed three years of training.",
        "A valid **training completion certificate** from the accredited institution.",
        "A registrable MBBS qualification and current medical registration.",
        "Thesis submitted within the deadline for the session, as above.",
        "Application submitted online within the announced window, with the prescribed fee. NBEMS routinely extends the application and thesis deadlines by notice, so do not rely on the first-announced date.",
        "The exact eligibility clauses change between bulletins - **verify against the current NBEMS information bulletin**.",
      ],
    },
    {
      heading: "Sessions, timing and the hybrid mode",
      points: [
        "The DNB final theory examination is held in two sessions a year, commonly a **June session and a December session** (the exact months have shifted between sessions - recent ones include May, June, October and December).",
        "The four papers are written over consecutive days, one paper per day.",
        "Theory is conducted in **hybrid mode**: questions are displayed on the computer screen at the exam centre; answers are handwritten in a physical, **barcoded answer booklet**. Nothing is typed and nothing is submitted electronically.",
        "**Before the paper starts** you are given about **two minutes** to enter the barcode number of your answer booklet using a **virtual numeric keypad on screen**.",
        "**Before entering it**, check the booklet: that it has **50 pages** for answers, that there are no misprints, no torn or missing pages, and that the **barcode is printed on every page**. If anything is wrong, raise it with the invigilator before you submit the barcode.",
        "Enter the barcode digits **in the same sequence** as printed. Once the barcode is submitted the answer booklet **cannot be changed under any circumstances**.",
        "A **mismatch or an incorrectly entered barcode leads to the answer booklet being rejected from evaluation and the result being cancelled**. NBEMS has stated there is zero tolerance on this. This is the single highest-stakes 120 seconds of the whole examination.",
        "NBEMS has provided an **online mock test** specifically to familiarise candidates with the barcode entry procedure. Do it before the exam.",
        "Barcode entry was made a mandatory step from the DNB Final theory examination 2025 session onward.",
        "Carry the admit card and the specified photo identity document; follow the reporting time, prohibited-items list and centre instructions in your admit card and the current bulletin - these change and are enforced strictly.",
      ],
    },
  ],
  answerCraft: [
    {
      heading: "The time budget - the arithmetic you must internalise",
      points: [
        "100 marks in 180 minutes with 10 questions gives you **18 minutes and 10 marks per question**, or **1.8 minutes per mark**.",
        "Budget it as **15 minutes writing + 3 minutes of slack** per question. The slack is what saves you when one question is unfamiliar.",
        "Reserve the first **5 minutes** to read all ten questions and mark them A (know it cold), B (know most), C (weak). Answer A first, then B, then C. You are not obliged to answer in order - but **number every answer clearly** to match the question.",
        "Reserve the last **10 minutes** to go back to any question you left short and add the two or three missing headings. A half-page addition to an empty area scores more than polishing a full answer.",
        "**Never leave a question blank.** All ten must be attempted. A blank is a guaranteed zero out of ten; four scrappy headings on a topic you barely know is typically three or four marks - and three or four marks is the difference between 196 and 200.",
        "Write the time you will move on next to each question number on your rough working, and obey it. The commonest way to fail this paper is to write a beautiful 25-minute answer to question 1 and then run out of time at question 9.",
      ],
    },
    {
      heading: "How to open an answer",
      points: [
        "**Line one is a definition or a one-line orientation.** For a disease: definition plus the one epidemiological fact that matters. For a clinical vignette: a one-sentence problem statement naming the patient, the problem and your working diagnosis.",
        "Example opening for a vignette: 'This is a 45-year-old man with poorly controlled stage 2 hypertension, dyslipidaemia, newly identified dysglycaemia and established diabetic nephropathy (24-hour microalbumin 900 mg), i.e. a very high cardiovascular risk patient requiring simultaneous blood pressure, lipid, glycaemic and renal-protective management.'",
        "That single sentence tells the examiner you have read every number in the stem. Examiners plant numbers in stems specifically to see whether you comment on them.",
        "**Line two is your plan of the answer**: 'I will discuss this under: (a) assessment (b) non-pharmacological management (c) pharmacological management (d) follow-up and targets.' Then use exactly those as your headings.",
        "Never open with padding - no 'Hypertension is a very common condition in India today and is a major public health problem', unless the question is a public-health question where prevalence is actually a scoring point.",
      ],
    },
    {
      heading: "Structuring a 10-mark answer",
      points: [
        "A 10-mark answer is roughly **1.5 to 2 sides** of the booklet in normal handwriting. It is not an essay and it is not four lines.",
        "Use **4 to 6 underlined headings**. Ten marks divided across five headings is two marks per heading, which is three or four bullet lines each. That is the shape to aim at.",
        "Default skeleton for a clinical question: **Definition / problem statement -> Assessment (history, examination, investigations) -> Management (non-pharmacological, pharmacological, procedural) -> Referral criteria and red flags -> Follow-up, prevention and family/social dimension.**",
        "Default skeleton for a public-health or practice question: **Definition -> Why it matters (burden) -> Components / steps -> How you would implement it (people, equipment, protocol, records, training) -> Monitoring and evaluation -> Barriers and how to overcome them.**",
        "The last heading is where Family Medicine candidates separate themselves. Add the family, the cost, the adherence and the follow-up interval to a clinical answer, and add implementation to a public-health answer.",
        "**Bullet points, not paragraphs.** Prose buries the keyword the examiner is scanning for. One idea per line.",
      ],
    },
    {
      heading: "Sub-parts and 5-mark chunks",
      points: [
        "Most questions come as (a) and (b), or (a), (b) and (c). If the marks are printed, obey them exactly. If they are not, **split the 10 marks evenly** and write the same amount for each part.",
        "A **5-mark part is 3 to 4 headings, half to three-quarters of a side, about 8 minutes**. It gets a one-line opening and then straight into the list. No separate conclusion.",
        "**Start each sub-part on a new line with its label - (a), (b), (c) - underlined.** Answering (b) inside a paragraph about (a) is a common and entirely avoidable way to lose the (b) marks: the examiner marking part (b) does not find it.",
        "If a sub-part says 'classify', give a classification with a heading structure. If it says 'enumerate' or 'list', give a numbered list and nothing else - no discussion. If it says 'discuss' or 'describe', give headings with content under them. If it says 'differentiate', give a two-column table. Obey the verb; it is the marking instruction.",
        "If part (a) is a topic you know deeply, still stop at your allotted time. Extra depth in (a) earns nothing once the (a) marks are exhausted, and it steals the time you needed for (b).",
      ],
    },
    {
      heading: "When to draw a table, a flow chart or a diagram",
      points: [
        "**Draw a table** whenever the question asks you to compare, classify, differentiate, or list things that share the same attributes. Drug classes, causes of red eye, types of shock, dehydration grading, biomedical waste categories, vaccine schedules, study designs - all tables.",
        "A table is faster to write than prose, holds more scoreable content per square inch, and is easier for a tired examiner to mark. **A table with 5 rows and 4 columns is 20 marked facts in three minutes.**",
        "**Draw a flow chart** whenever the answer is a sequence of decisions: approach to anaemia from the MCV, approach to a solitary thyroid nodule, IMNCI classification, resuscitation algorithms, the audit cycle, the referral pathway.",
        "**Draw an anatomical or clinical diagram** when the question uses the words 'with diagram' or 'illustrate' (June 2025 Paper 2 explicitly asked for the classification of diabetic retinopathy 'with diagrams'), and for genograms, growth charts, partographs, fundus stages and dermatomes.",
        "Diagram conventions: draw it **large, at least a quarter of a page**, in the same blue or black pen, **label every part with a leader line**, and give it a **title underlined above it** ('Fig 1: Stages of diabetic retinopathy'). Never draw an unlabelled diagram - an unlabelled diagram scores zero.",
        "Do not shade, colour or decorate. Do not use a second colour of ink. Keep a small ruler for table lines and axes; ruled tables look deliberate and are marked more kindly than freehand ones.",
        "Refer to the drawing from the text: 'as shown in Fig 1'. It costs four words and it links the diagram to the marks.",
      ],
    },
    {
      heading: "Handwriting, layout and booklet discipline",
      points: [
        "You get **50 pages**. That is 5 pages per question. You will not run out. Do not cramp your writing to save paper.",
        "**Leave 3 to 4 blank lines at the end of every answer.** When you come back in the last ten minutes with a forgotten heading, you have somewhere to put it and it reads as part of the answer rather than as an addendum.",
        "**Start every new question on a new page.** Write the question number large in the left margin and circle it.",
        "Keep a **left margin** for question numbers and a **right margin** clear. Never write in the margins otherwise.",
        "Underline headings with a ruler. Use one consistent hierarchy: heading underlined, sub-heading not underlined, then bullets. Do not use more than two levels of indentation.",
        "Legibility beats elegance. If your handwriting deteriorates under time pressure, deliberately write **larger** rather than faster - large untidy writing is markable, small untidy writing is not.",
        "**Do not use unexplained abbreviations.** Write the term in full the first time with the abbreviation in brackets, then use the abbreviation: 'chronic kidney disease (CKD)'. Standard ones (BP, ECG, TB) are fine bare.",
        "Cross out mistakes with a **single line**. Do not scribble, do not use correction fluid.",
        "Write in blue or black ink only. Carry two working pens of the same colour.",
        "**Do not write your name, roll number or any identifying mark anywhere in the booklet.** The booklet is identified by its barcode and nothing else.",
      ],
    },
    {
      heading: "Handling a question you only half know",
      points: [
        "Do not skip it and do not leave it to the end and forget it. Give it its full 18 minutes at its proper place in your order, and take whatever you can get.",
        "**Fall back to the generic skeleton.** Almost every clinical topic can be answered with: definition, epidemiology in India, aetiology and risk factors, clinical features, differential diagnosis, investigations, management (non-pharmacological, pharmacological, referral), complications, prevention, and the family-medicine dimension. Write those headings first, then fill in whatever you actually know under each.",
        "For an unfamiliar public-health topic, use: burden -> objectives -> components -> service delivery at each level of care -> monitoring indicators -> barriers -> your role as family physician.",
        "**Write what is certainly true before you write what you think might be true.** Two definitely correct headings well filled beat six headings of guesswork.",
        "**Do not invent numbers.** If you do not know the dose, write the drug and the class and say 'in standard therapeutic dose'. A wrong dose is an actively dangerous answer and examiners mark it as such. A named drug without a dose loses far less.",
        "If it is a named framework you cannot remember (an acronym, a set of criteria), say what it is for and give the components you do remember as a list, then move on. Partial lists score.",
        "**Always write the safety net**, whatever the topic: red flags, when to refer, and when to review. Those lines are relevant to almost every family-medicine question and they are almost always on the mark scheme.",
        "Never write meta-commentary - no 'I am not sure about this', no 'not taught in our curriculum'. Write the answer you have and stop.",
      ],
    },
    {
      heading: "What quietly loses marks",
      points: [
        "Answering as a tertiary specialist. This is Family Medicine: the setting is a clinic or a community health centre, resources are finite, and the answer must include what you do when the CT scanner is 60 km away.",
        "Ignoring a number planted in the stem (a BMI, an HbA1c, a microalbumin, a respiratory rate). If it is in the question, it is on the mark scheme.",
        "Ignoring the family and social context in a question that names a family member, an occupation or a migration status.",
        "Writing a long answer to a short question and a short answer to a long one - i.e. not reading the marks.",
        "Prose walls with no headings. The content may be there; the marks are not awarded because the examiner cannot find it.",
        "Running out of time. This is by far the biggest single cause of failing theory and it is entirely under your control.",
      ],
    },
  ],
  tables: [
    {
      heading: "The four theory papers at a glance",
      columns: ["Paper", "Focus (inferred from actual NBEMS papers)", "Marks", "Duration", "Questions"],
      rows: [
        ["I", "Medicine and allied medical specialties; applied basic sciences", "100", "180 min", "10, all to be attempted"],
        ["II", "Surgery and allied surgical specialties - ortho, ophthalmology, ENT, dermatology, anaesthesia", "100", "180 min", "10, all to be attempted"],
        ["III", "Maternal and child health - obstetrics, gynaecology, paediatrics, neonatology", "100", "180 min", "10, all to be attempted"],
        ["IV", "Family medicine as a discipline, community and public health, practice management", "100", "180 min", "10, all to be attempted"],
      ],
    },
    {
      heading: "Marks and pass criteria (verify against the current NBEMS information bulletin)",
      columns: ["Component", "Maximum marks", "Reported pass mark", "Note"],
      rows: [
        ["Theory - 4 papers", "400", "200 (50 per cent aggregate)", "Grace of up to 2 per cent (8 marks) reported for scores of 192-199"],
        ["Practical - OSCE", "100", "-", "20 stations x 5 marks, 4 minutes each"],
        ["Practical - clinical cases", "100", "-", "2 cases x 50 marks"],
        ["Practical - ward rounds", "40", "-", "4 rounds x 10 marks"],
        ["Practical - viva voce", "60", "-", "4 stations x 15 marks"],
        ["Practical - total", "300", "150 (50 per cent)", "No grace marks in the practical; max 3 attempts reported"],
      ],
    },
    {
      heading: "Time budget inside one 180-minute paper",
      columns: ["Block", "Minutes", "What you do"],
      rows: [
        ["Read and triage", "5", "Read all 10 questions, mark each A / B / C, decide your order"],
        ["Questions in order A", "~60", "Your strongest 4 questions, 15 min each - bank the certain marks first"],
        ["Questions in order B", "~60", "Your middling 4 questions, 15 min each"],
        ["Questions in order C", "~45", "Your weakest 2 questions, using the generic skeleton"],
        ["Sweep", "10", "Fill the gaps you left blank lines for; check all 10 are numbered and attempted"],
      ],
    },
    {
      heading: "Minutes per mark - what a given mark value should look like",
      columns: ["Marks", "Minutes", "Length", "Shape"],
      rows: [
        ["2", "3-4", "4-6 lines", "A definition plus a short list. No headings."],
        ["5", "8-9", "Half to three-quarters of a side", "One-line opening, then 3-4 underlined headings"],
        ["10", "15-18", "1.5-2 sides", "Opening statement, 4-6 headings, at least one table or flow chart"],
      ],
    },
  ],
  studyPlan: [
    {
      heading: "Six months out - build the map (working resident, about 10-12 hours a week)",
      points: [
        "**Week 1: get the primary documents.** Download the current NBEMS information bulletin for your session, the DNB Family Medicine curriculum PDF, and every DNB Family Medicine question paper on the NBEMS archive at natboard.edu.in/dnb_old_qp. Print the last 8 to 10 sessions - four papers each.",
        "**Week 1-2: build your own theme index.** Type every question from those papers into a spreadsheet with columns for paper number, session, topic and sub-topic. When you sort by topic you will have the real, evidence-based syllabus weighting for your speciality. This exercise takes one weekend and is the highest-return thing you will do all year.",
        "**Set the rhythm: one paper per fortnight, rotating I -> II -> III -> IV.** Two weeks on Paper I content, two on Paper II, and so on. Three full rotations fit in six months.",
        "**Weekday evenings (1-1.5 hours):** read one core topic for the current paper, and write the answer to one past question on it in longhand, timed at 15 minutes. Longhand from day one - typing does not build the hand speed you need for three hours.",
        "**Weekend (4-5 hours):** one full 3-hour paper written under exam conditions every second weekend, plus two hours reviewing it against the source texts. Alternate weekends: catch-up and consolidation.",
        "**Paper IV needs its own protected slot** because it is the paper you cannot absorb from clinical work. Give it one fixed weekday evening every single week from month one, not just in its rotation fortnight. Work through family assessment tools, national programmes, biostatistics, ethics and practice management.",
        "**Thesis and logbook must be closed out in this window.** Confirm your thesis submission status and deadline now; a late thesis makes everything else irrelevant.",
        "**Build a table bank.** Every time you draw a good table or flow chart in an answer, copy it into one notebook. By the exam you will have 60-80 pre-designed tables you can reproduce from memory. This is the single best return on revision effort for a paper marked on structure.",
        "**Start clinical case practice now, not later.** One long case presented aloud to a senior every week. The practical is a separate 300-mark exam and it is not something you can start after the theory result.",
      ],
    },
    {
      heading: "Three months out - consolidate and start writing at speed (12-15 hours a week)",
      points: [
        "**Switch the ratio from reading to writing.** From here, at least half your study time is producing written answers under time pressure, not reading. Reading feels productive and does not build the skill being tested.",
        "**One full paper per week, written in 180 minutes, in a real booklet, timed.** Rotate I, II, III, IV so each paper is written three times in the twelve weeks.",
        "**Mark your own paper the next day** against your notes and a marking checklist. Score it honestly out of 100. Track the score. If a paper is under 45, that paper gets an extra weekday slot until it is not.",
        "**Go through your theme index and force-rank.** Anything you tagged 'core' that you cannot write a 10-mark answer to in 15 minutes is your priority list. Work down that list; ignore the tail.",
        "**Memorise the memorisable.** The national immunisation schedule, the biomedical waste colour codes, IMNCI respiratory rate cut-offs and classification bands, the NTEP regimens, ORS composition, the ten steps of outbreak investigation, the Wilson and Jungner criteria, Asian Indian BMI and waist cut-offs, Wagner grading, the rule of nines and Parkland formula. These are free marks that only reward rote learning.",
        "**Drill diagrams to muscle memory:** genogram symbols, growth chart, partograph, fundus stages of diabetic retinopathy, the audit cycle, a 2x2 table, the anaemia flow chart from MCV. Ten minutes a day.",
        "**Practical prep in parallel, twice a week:** one long case presented aloud and one OSCE-style set of 20 four-minute stations from images and reports off your ward. Time every station.",
        "**Sit the NBEMS online mock test** for the hybrid barcode-entry procedure as soon as it is available for your session.",
      ],
    },
    {
      heading: "Last two weeks - protect the marks you already have",
      points: [
        "**Learn nothing new after day 4 of this fortnight.** New material displaces retrievable material. From here it is retrieval, speed and logistics only.",
        "**Days 14-11: one final full paper of each of I, II, III, IV**, one a day, timed, then a fast review the same evening. This is your last calibration of pace.",
        "**Days 10-4: revise from your own material only** - your theme index, your table bank, your marked papers. One paper's worth of themes per day, twice through. Reproduce tables and flow charts from blank paper rather than re-reading them.",
        "**Day 10 onward: 30 minutes a day on Paper IV specifically.** It is the paper most likely to be under-revised and the one where rote content converts directly into marks.",
        "**Days 3-2: logistics.** Print the admit card. Confirm the centre location and do the travel once if you can. Check the permitted and prohibited items list in the bulletin and the admit card. Pack: admit card, the specified photo ID, two identical blue or black pens plus spares, a small transparent ruler, and nothing else that is not explicitly permitted.",
        "**Re-read the hybrid mode instructions the night before the first paper:** questions appear on screen, answers are handwritten in the barcoded booklet, and you have about two minutes to enter the barcode on the on-screen virtual keypad. Before entering it, check the booklet has 50 pages, no misprints, no torn or missing pages, and a barcode on every page. Once submitted the booklet cannot be changed and a mismatch cancels your result. Rehearse this so that on the day it is automatic and unhurried.",
        "**Between papers:** do not post-mortem the paper you have just written and do not compare answers with anyone. Spend the evening on a single-page skim of the next paper's headings, then stop by 10 pm. Sleep is worth more than one more topic.",
        "**Day 1 of the exam:** arrive at the reporting time, not later and not so early that you spend an hour absorbing other people's anxiety. In the hall, spend your first five minutes reading all ten questions and triaging them before you write a word.",
      ],
    },
    {
      heading: "The weekly rhythm that actually survives a residency",
      points: [
        "Fix **three weekday slots of 60-90 minutes** and **one weekend block of 4-5 hours**, and defend them like duty hours. Consistency beats intensity over six months.",
        "**Use post-take and OPD as revision.** Every patient you see in clinic maps to a past question. Note the question number next to the patient in your logbook; you will be revising all day without adding hours.",
        "**Keep one A5 notebook that never leaves your pocket** for the table bank and the memorised lists. Fifteen minutes of dead time in a day is 90 minutes a week.",
        "**Study with one other Family Medicine candidate, not a General Medicine one.** Paper IV and the family-medicine dimension of every clinical answer are the marks that decide this exam, and only another FM candidate will hold you to them.",
        "**Never miss the weekly timed paper**, even in a bad week. Write it in 90 minutes at half length if you must, but write something against a clock.",
      ],
    },
  ],
  references: [
    {
      label: "NBEMS - DNB old question papers archive (all specialities, session by session)",
      url: "https://natboard.edu.in/dnb_old_qp",
    },
    {
      label: "NBEMS - DNB Family Medicine Paper 1, October 2024 (header: 180 minutes, 100 marks, 10 questions to be attempted; hypertension and oral antidiabetic drug questions)",
      url: "https://natboard.edu.in/natboard-data/QuestionPaper/OCT24/DNB%20Family%20Medicine%20Paper1.pdf",
    },
    {
      label: "NBEMS - DNB Family Medicine Paper 1, December 2021 (type 2 diabetes with prior myocardial infarction and exertional dyspnoea)",
      url: "https://natboard.edu.in/natboard-data/QuestionPaper/DEC21/DNB%20Family%20Medicine%20Paper1.pdf",
    },
    {
      label: "NBEMS - DNB Family Medicine Paper 1, April 2023",
      url: "https://natboard.edu.in/natboard-data/QuestionPaper/APR23/DNB%20Family%20Medicine%20Paper1.pdf",
    },
    {
      label: "NBEMS - DNB Family Medicine Paper 2, June 2025 (diabetic retinopathy with diagrams, unilateral red eye, DVT after air travel, fragility fracture, right upper quadrant pain, spinal anaesthesia)",
      url: "https://natboard.edu.in/natboard-data/QuestionPaper/JUN25/DNB%20Family%20Medicine%20Paper2.pdf",
    },
    {
      label: "NBEMS - DNB Family Medicine Paper 3, October 2024 (infertility evaluation, WHO essential neonatal care, IMNCI assessment for pneumonia, second stage of labour)",
      url: "https://natboard.edu.in/natboard-data/QuestionPaper/OCT24/DNB%20Family%20Medicine%20Paper3.pdf",
    },
    {
      label: "NBEMS - DNB Family Medicine Paper 4, December 2021 (three stage assessment, referrals, fever outbreak, biomedical waste, COVID-19 vaccination, school health, post-flood prevention, TB advice, waterborne disease programme, migrant antenatal care)",
      url: "https://natboard.edu.in/natboard-data/QuestionPaper/DEC21/DNB%20Family%20Medicine%20Paper4.pdf",
    },
    {
      label: "NBEMS - DNB Family Medicine Paper 4, May 2024",
      url: "https://natboard.edu.in/natboard-data/QuestionPaper/MAY24/DNB%20Family%20Medicine%20Paper4.pdf",
    },
    {
      label: "NBEMS - Curriculum for NBEMS DNB Family Medicine (official programme page)",
      url: "https://natboard.edu.in/viewNBEprogrammes?NBE=Curriculum+for+NBEMS+DNB+Family+Medicine&DNB=DNB",
    },
    {
      label: "NBE - DNB Family Medicine curriculum PDF, 2021 revision (four theory papers of 100 marks, 3 hours, 10 short notes of 10 marks each; 50 per cent aggregate to qualify theory)",
      url: "https://nbe.edu.in/mainpdf/curriculum/DNB%20-%20Family%20Medicine%202021.pdf",
    },
    {
      label: "NBE - DNB Family Medicine curriculum PDF, earlier version",
      url: "https://nbe.edu.in/mainpdf/curriculum/old240821/Family-Medicine.pdf",
    },
    {
      label: "NBEMS - DNB Final Examination October 2024 Information Bulletin",
      url: "https://natboard.edu.in/viewUpload?xyz=MFFGM0M0bzNYTU9jSG5uWU9OWkZOZz09",
    },
    {
      label: "NBEMS - DNB/DrNB Final Examination December 2022 Information Bulletin (pass marks, grace marks, attempts, examination scheme)",
      url: "https://cdn.digialm.com/per/g01/pub/726/EForms/image/ImageDocUpload/11/1111935701121006050282.pdf",
    },
    {
      label: "NBEMS - DNB/DrNB Final Examination May 2024 Information Bulletin",
      url: "https://medicaldialogues.in/pdf_upload/information-bulletin-235510.pdf",
    },
    {
      label: "NBEMS - Thesis protocol and thesis submission guidelines",
      url: "https://natboard.edu.in/thesisonline/guidelines/Thesis%20protocol%20&%20thesis%20submission%20guidelines.pdf",
    },
    {
      label: "Careers360 - NBEMS makes barcode entry mandatory for hybrid exams from the DNB Final theory examination (50-page booklet check, two-minute virtual-keypad entry, mismatch cancels the result, NBEMS mock test)",
      url: "https://news.careers360.com/nbems-hybrid-exams-makes-barcode-entry-mandatory-from-dnb-final-theory-exam-2026-guidelines",
    },
    {
      label: "Medical Dialogues - NBE introduces answer booklet barcode entry in hybrid exams",
      url: "https://medicaldialogues.in/news/education/nbe-introduces-answer-booklet-barcode-entry-in-hybrid-exams-160760",
    },
    {
      label: "Medical Dialogues - DNB final theory 2018 question paper pattern: NBE clarification that papers, including Family Medicine Paper IV, become short-note type",
      url: "https://education.medicaldialogues.in/dnb-final-theory-2018-question-paper-pattern-nbe-issues-new-clarification",
    },
    {
      label: "Medical Dialogues - NBE releases speciality-wise DNB/DrNB practical examination schedule and exam scheme (OSCE, clinical cases, ward rounds, viva; 300 marks)",
      url: "https://medicaldialogues.in/news/health/nbe/dnb-drnb-practical-exams-june-2021-nbe-releases-speciality-wise-schedule-exam-scheme-details-86007",
    },
    {
      label: "Careers360 - NBEMS DNB final practical examination dates for sessions having an OSCE component (Family Medicine listed among them)",
      url: "https://news.careers360.com/nbems-dnb-final-practical-exam-dates-for-october-2024-having-osce-component-out-begins-on-january-21",
    },
    {
      label: "DNB Pediatrics - DNB practical examinations: mark distribution and pattern (component-wise 100/100/40/60 split)",
      url: "https://www.dnbpediatrics.com/2024/02/dnb-exam-pattern.html",
    },
    {
      label: "DocTutorials - DNB exam pattern: theory and practical structure and eligibility (secondary summary; conflicts with the curriculum on per-paper versus aggregate pass mark)",
      url: "https://www.doctutorials.com/pg-residency/dnb-exam-pattern",
    },
    {
      label: "Medical Dialogues - NBE extends deadline for thesis submission for DNB final examinations",
      url: "https://medicaldialogues.in/news/education/nbe-extends-deadline-for-thesis-submission-for-dnb-final-exams-december-2025-158284",
    },
    {
      label: "NBE Diploma - Diploma in Family Medicine practical examination guidelines (the Diploma scheme, which is NOT the DNB scheme - listed here only to warn against confusing the two)",
      url: "https://www.nbediploma.com/post/exam-structure-for-diploma-family-medicine-practical-exam-guidelines",
    },
    {
      label: "Family Medicine India - DNB Family Medicine paper-wise questions and answers by session",
      url: "https://familymedicineindia.com/",
    },
  ],
};

export default blueprint;
