import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "geriatrics-ethics-cga",
  title: "Comprehensive geriatric assessment",
  oneLiner:
    "Comprehensive geriatric assessment is a multidimensional, interdisciplinary diagnostic process that measures the medical, functional, cognitive, psychological, nutritional and social capabilities of an older person in order to build a single coordinated problem list and long-term care plan.",
  frequency: "core",
  keywords: [
    "CGA",
    "geriatric assessment",
    "Katz ADL",
    "Lawton IADL",
    "Barthel index",
    "MMSE",
    "MoCA",
    "HMSE",
    "GDS-15",
    "Mini Nutritional Assessment",
    "Timed Up and Go",
    "gait speed",
    "geriatric giants",
    "5 Ms",
    "NPHCE",
    "LASI",
    "multimorbidity",
  ],
  sections: [
    {
      heading: "Definition, rationale and the evidence behind it",
      points: [
        "**Definition (Rubenstein):** comprehensive geriatric assessment (CGA) is a multidimensional, usually interdisciplinary diagnostic process to determine the medical, psychological and functional capabilities of a frail older person in order to develop a coordinated and integrated plan for treatment and long-term follow-up.",
        "The rationale is that in old age **the presenting complaint is a poor guide to the problem list**: a fall may be the presentation of a urinary infection, a new antihypertensive, cataract, a painful knee and a loose slipper all at once, and treating any one of them alone will fail.",
        "Disease in the elderly presents **atypically**: pneumonia as confusion without fever, myocardial infarction as breathlessness without chest pain, hyperthyroidism as apathy and weight loss, and depression as somatic pain.",
        "**Evidence:** the Cochrane review of CGA for older adults admitted to hospital (2017) found that patients receiving ward-based CGA were more likely to be alive and living in their own home at up to 12 months and less likely to be admitted to a nursing home; the effect comes from the ward-based model, not from a consultation-only team.",
        "CGA is not a questionnaire and not a single visit - it is a **process** that ends in a written problem list, a named responsible clinician, an agreed goal and a review date, and it can be spread over two or three consultations in family practice.",
        "**Who needs it:** anyone 60 years or older with a fall, incontinence, weight loss, confusion, immobility, five or more drugs, recent hospital discharge, or a caregiver who says the patient is not managing; a fit 70-year-old marathon walker does not need one.",
      ],
    },
    {
      heading: "The domains assessed",
      points: [
        "**Medical:** full problem list including multimorbidity, a complete drug history with over-the-counter, ayurvedic, homeopathic and herbal preparations, pain, sensory impairment (vision, hearing, dentition), continence, sleep, bowel habit and immunisation status.",
        "**Functional:** basic activities of daily living (Katz ADL) and instrumental activities (Lawton IADL); the loss of IADLs such as handling money and medication precedes loss of basic ADLs and is the earliest functional marker of dementia.",
        "**Mobility and balance:** gait speed, Timed Up and Go, chair stand, footwear, walking aid, and a direct observation of the patient getting out of the chair and walking to the door - which tells you more than any scale.",
        "**Cognition and mood:** a validated screen for cognition and a screen for depression, remembering that depression, delirium and dementia coexist and that untreated depression is the commonest reversible cause of apparent functional decline.",
        "**Nutrition:** unintentional weight loss, MNA-SF, dentition and swallowing, and whether the patient can actually buy, cook and eat food in the household as it runs.",
        "**Social, financial and environment:** who lives in the house, who cooks, income and who controls it, home hazards (steps, loose mats, wet bathroom floor, squat toilet, poor lighting), and the caregiver's own health and strain.",
        "**Goals and values:** what matters most to the patient - the 5 Ms of geriatrics are **Mind, Mobility, Medications, Multicomplexity and Matters Most** - and, where appropriate, an early conversation about future care preferences.",
      ],
    },
    {
      heading: "Tools and their cut-offs",
      points: [
        "**Katz ADL** (bathing, dressing, toileting, transferring, continence, feeding) scores 0-6; 6 is independent, 4 is moderate impairment and 2 or less is severe functional dependence.",
        "**Lawton IADL** has 8 items (telephone, shopping, cooking, housekeeping, laundry, transport, medication, finances) scored 0-8; the **Barthel Index** (10 items, 0-100) is the better instrument for tracking rehabilitation after a stroke or a hip fracture.",
        "**Cognition:** MMSE out of 30 with 23 or less suggesting impairment, MoCA out of 30 with less than 26 abnormal (add one point if education is 12 years or fewer), Mini-Cog (three-word recall plus clock drawing, 0-5, a score of 2 or less positive) and AMT-10 (6 or less abnormal). In Indian practice use the **Hindi Mental State Examination or a validated vernacular MoCA**, because the MMSE penalises illiteracy heavily and will falsely label an unschooled farmer as demented.",
        "**Mood:** Geriatric Depression Scale 15-item version - 5 or more suggests depression, 10 or more makes it almost certain; the GDS avoids somatic items and so performs better than the PHQ-9 in the physically ill elderly.",
        "**Nutrition:** MNA short form scores 0-14, where 12-14 is normal, 8-11 is at risk of malnutrition and 0-7 is malnourished; unintentional loss of more than 5% of body weight in 6 months is significant whatever the scale says.",
        "**Mobility:** usual gait speed over 4 metres below **0.8 m/s** marks slowness; Timed Up and Go of **12 seconds or more** predicts falls and more than 20 seconds indicates functional dependence; the Short Physical Performance Battery scores 0-12 with 8 or less indicating poor performance.",
      ],
    },
    {
      heading: "Doing a CGA in a busy family practice",
      points: [
        "Split it over visits: visit one covers the drug review and functional and mobility screen, visit two the cognition, mood and nutrition screen, and visit three the social, environmental and goals discussion - a single 45-minute sitting is unrealistic and rarely funded.",
        "Ask the **three STEADI falls questions** every year (have you fallen in the past year, do you feel unsteady, are you worried about falling); a yes to any one triggers the fuller falls assessment.",
        "Run a **brown bag review** at every visit: ask the patient or attendant to bring every strip, bottle, inhaler, eye drop, ointment, tonic and churna in the house, and lay them on the table - this uncovers duplication and self-medication that a history never will.",
        "Always interview the patient **alone for part of the consultation**; abuse, financial exploitation, alcohol use and low mood are not disclosed with a son in the room.",
        "Examine the feet and the footwear, take a lying and standing blood pressure, check visual acuity with a near card and hearing with a whisper test, and look inside the mouth - four things that are almost never done and each of which changes management.",
        "Involve the family: in Indian households the daughter-in-law or the son is usually the de facto care manager, and a plan that is not explained to her is a plan that will not happen.",
      ],
    },
    {
      heading: "From assessment to plan",
      points: [
        "Write **one problem list**, not a list of specialties, and rank the problems by what matters most to the patient rather than by organ severity.",
        "Set a **functional goal** for each problem, expressed in what the patient will be able to do - to walk to the temple without stopping, to get to the toilet at night without help - because functional goals are measurable and motivating in a way that HbA1c is not.",
        "Apply the geriatric giants of Bernard Isaacs as a safety net: **immobility, instability (falls), incontinence and impaired intellect or memory**, to which iatrogenesis is usually added as the fifth.",
        "Reconcile every drug against the plan: stop what has no indication, no benefit within the patient's remaining life expectancy, or a harm that outweighs benefit, and set targets that are less tight in the frail (for example HbA1c 7.5-8.5% and blood pressure below 150/90 mmHg in advanced frailty).",
        "Name a **single responsible clinician** and give the family a written plan in the local language with a follow-up date, a telephone number and the three symptoms that should prompt an earlier visit.",
        "Review at 4-12 weeks depending on frailty, and again after every hospital admission, because **discharge from hospital is the highest-risk transition** in geriatric care and the point at which drug errors cluster.",
      ],
    },
    {
      heading: "The Indian context and the services available",
      points: [
        "India had 103.9 million people aged 60 and over at Census 2011 (8.6% of the population); the **UNFPA India Ageing Report 2023** projects this to reach about 20.8% by 2050, with the fastest growth in the 80-plus group.",
        "The **Longitudinal Ageing Study in India (LASI) wave 1, 2017-18** is the reference dataset for Indian geriatrics: it documented high rates of untreated hypertension, undetected cognitive impairment, falls and functional limitation in older Indians.",
        "The **National Programme for Health Care of the Elderly (NPHCE)**, launched in 2010-11 and now run alongside NP-NCD, provides geriatric clinics at district hospitals, regional geriatric centres and elderly care at health and wellness centres.",
        "**Rashtriya Vayoshri Yojana (2017)** supplies free assistive devices - spectacles, hearing aids, walking sticks, walkers, wheelchairs, dentures - to eligible senior citizens below the poverty line, and is an underused referral for a family physician.",
        "**Ayushman Bharat PM-JAY Vay Vandana (October 2024)** extends health cover of Rs 5 lakh per family per year to all citizens aged 70 and above irrespective of income, which changes the affordability calculation for admissions and surgery in this age group.",
        "The national helpline for senior citizens is **Elderline 14567**, run by the Ministry of Social Justice and Empowerment - worth writing on the treatment card of every isolated older patient.",
      ],
    },
  ],
  tables: [
    {
      heading: "Functional assessment scales",
      columns: ["Scale", "Items", "Score range", "Interpretation"],
      rows: [
        ["Katz ADL", "Bathing, dressing, toileting, transferring, continence, feeding", "0-6", "6 independent, 4 moderate impairment, 2 or less severe dependence"],
        ["Lawton IADL", "Telephone, shopping, cooking, housekeeping, laundry, transport, medication, finances", "0-8", "Loss of medication and money handling is the earliest marker of dementia"],
        ["Barthel Index", "10 self-care and mobility items", "0-100", "Under 60 dependent; best for tracking stroke and hip fracture rehabilitation"],
        ["Clinical Frailty Scale", "Global judgement after assessment", "1-9", "1-3 fit, 4 very mild, 5 or more frail, 8 very severely frail, 9 terminally ill"],
      ],
    },
    {
      heading: "Cognition, mood and nutrition screens with cut-offs",
      columns: ["Instrument", "What it screens", "Cut-off", "Caution"],
      rows: [
        ["MMSE", "Global cognition", "23 or less of 30 abnormal", "Heavily education dependent; do not use unadjusted in the unschooled"],
        ["MoCA (vernacular version)", "Cognition, executive function", "Under 26 of 30", "Add 1 point if education 12 years or fewer"],
        ["HMSE (Hindi Mental State Examination)", "Cognition in low-literacy Indian populations", "Locally validated cut-off", "Designed for rural and illiterate respondents"],
        ["Mini-Cog", "Rapid cognitive screen", "2 or less of 5", "Three-word recall plus clock drawing; takes 3 minutes"],
        ["GDS-15", "Depression", "5 or more suggests, 10 or more near certain", "Avoids somatic items, so better than PHQ-9 in the physically ill"],
        ["MNA short form", "Nutrition", "8-11 at risk, 0-7 malnourished", "Score 12-14 is normal; recheck if weight is falling"],
      ],
    },
    {
      heading: "Mobility and performance measures",
      columns: ["Test", "How it is done", "Abnormal result", "What it predicts"],
      rows: [
        ["Usual gait speed", "Time over a marked 4 metre walk at normal pace", "Under 0.8 m/s", "Frailty, falls, disability, mortality"],
        ["Timed Up and Go", "Rise from a chair, walk 3 m, turn, return, sit", "12 seconds or more", "Falls risk; over 20 seconds indicates dependence"],
        ["30-second chair stand", "Number of sit-to-stand repetitions in 30 seconds", "Below age norm", "Lower limb strength, falls risk"],
        ["4-stage balance test", "Feet together, semi-tandem, tandem, single leg, 10 seconds each", "Cannot hold tandem for 10 seconds", "Balance impairment and falls"],
        ["Grip strength (dynamometer)", "Best of three squeezes, dominant hand", "Under 28 kg men, under 18 kg women (AWGS 2019)", "Sarcopenia and adverse outcomes"],
      ],
    },
  ],
  redFlags: [
    "Acute confusion or a sudden change in function over hours to days - this is delirium, not dementia, and it needs same-day assessment for infection, retention, constipation, drugs, hypoxia and metabolic causes.",
    "Unintentional weight loss of more than 5% in six months, or an MNA short form score of 7 or less - investigate for malignancy, tuberculosis, thyroid disease, depression and dysphagia.",
    "A new fall with head injury in a patient on an anticoagulant or antiplatelet - image the head the same day even if the patient looks entirely well.",
    "Inability to bear weight after a fall, a shortened externally rotated leg, or pain in the groin on log-roll - hip fracture until radiography says otherwise.",
    "A caregiver who says they can no longer cope, or a patient found lying on the floor for more than an hour - a social emergency that will become a medical one within days.",
    "Bruises in unusual sites, poor hygiene, dehydration or missing medication in a patient with an available caregiver - consider elder abuse or neglect and interview alone.",
    "Sudden loss of an activity of daily living that was intact last month - always pathological in old age and never simply ageing.",
  ],
  pearls: [
    "In geriatrics the history is a function history: ask what the patient could do six months ago and what they can do today, and the difference is the disease.",
    "Ageing itself does not cause confusion, incontinence, falling or weight loss - each of these has a cause and each deserves a work-up.",
    "The single most useful examination in a geriatric consultation is watching the patient stand up from a chair and walk; do it before you touch the stethoscope.",
    "Loss of instrumental activities (money, medication, transport, cooking) comes before loss of basic activities (bathing, dressing, toileting, feeding) - so ask about IADLs to catch decline early.",
    "Never use an unadjusted MMSE in an unschooled Indian patient; use the HMSE or a vernacular MoCA, or you will diagnose dementia in a healthy illiterate farmer.",
    "Interview the older patient alone for part of every consultation - abuse, low mood, alcohol and financial exploitation surface only when the attendant steps out.",
    "Hospital discharge is the most dangerous transition in geriatric care: reconcile every drug, put the plan in writing in the local language, and review within two weeks.",
    "The 5 Ms - Mind, Mobility, Medications, Multicomplexity and Matters Most - is the fastest way to structure a geriatric answer when you have gone blank in a viva.",
  ],
  theory: [
    {
      id: "geriatrics-ethics-cga-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Define comprehensive geriatric assessment. Describe its components and outline how you would carry it out for a 76-year-old woman brought by her son with a history of two falls and increasing forgetfulness in a family practice setting.",
      openingLines: [
        "Comprehensive geriatric assessment is a multidimensional, interdisciplinary diagnostic process that determines the medical, functional, cognitive, psychological, nutritional and social capabilities of an older person, in order to produce a coordinated problem list and a long-term plan of treatment and follow-up.",
        "It is indicated here because falls and forgetfulness in a 76-year-old are non-specific presentations with multiple simultaneous causes, and treating either alone will fail; the Cochrane review of ward-based CGA showed more patients alive and living in their own home at 12 months.",
      ],
      answer: [
        {
          heading: "1. Components of comprehensive geriatric assessment",
          points: [
            "Medical: full problem list, multimorbidity, complete drug review including over-the-counter and traditional preparations, pain, continence, sleep, vision, hearing and dentition.",
            "Functional: basic ADLs by the Katz index and instrumental ADLs by the Lawton scale, with the Barthel index where rehabilitation is being tracked.",
            "Mobility and balance: gait speed, Timed Up and Go, chair stand, footwear and walking aid.",
            "Cognitive and psychological: a vernacular cognitive screen and the 15-item Geriatric Depression Scale.",
            "Nutritional: weight trend, MNA short form, dentition and swallowing.",
            "Social and environmental: household composition, income, caregiver strain, and a home hazard review.",
            "Goals and values: what matters most to the patient, and where appropriate an early advance care planning conversation.",
          ],
        },
        {
          heading: "2. History in this patient",
          points: [
            "Falls: circumstances of each fall, whether there was loss of consciousness, giddiness on standing, palpitation, the time of day, the footwear, the surface and whether she could get up unaided.",
            "Cognition: informant history from the son on memory, orientation, word finding, getting lost, handling money and medication, personality change and hallucinations, with a timeline of onset and progression.",
            "Complete drug history including antihypertensives, hypnotics, antidepressants, anticholinergics, alpha-blockers, hypoglycaemics and any recently intensified drug.",
            "Systems review for incontinence, constipation, weight loss, sleep, alcohol, vision and hearing, and any recent hospital admission.",
            "Screen for depression, for delirium precipitants, and directly for elder abuse or neglect with the son out of the room.",
          ],
        },
        {
          heading: "3. Examination",
          points: [
            "Lying and standing blood pressure at 1 and 3 minutes, pulse and rhythm, cardiac murmurs, and carotid examination.",
            "Neurological examination for focal deficit, parkinsonism, peripheral neuropathy, cerebellar signs and proprioception.",
            "Musculoskeletal examination of hips, knees and feet, footwear inspection, and observed gait, chair stand and Timed Up and Go.",
            "Visual acuity with a near card, whisper test for hearing, oral examination, and a skin survey for bruises and pressure areas.",
            "Cognitive screen with a vernacular MoCA or the Hindi Mental State Examination, and a GDS-15 for mood.",
          ],
        },
        {
          heading: "4. Investigations and what each would change",
          points: [
            "Haemoglobin, blood glucose or HbA1c, urea, creatinine, electrolytes including sodium and calcium, thyroid function, vitamin B12 and vitamin D, urine routine and culture.",
            "ECG for arrhythmia, conduction block and ischaemia; echocardiography only if a murmur or syncope suggests aortic stenosis.",
            "Neuroimaging (CT or MRI brain) if the cognitive decline is rapid, focal signs are present, there has been a head injury, the patient is on an anticoagulant, or normal pressure hydrocephalus is suspected.",
            "Correcting hyponatraemia, hypothyroidism, B12 deficiency or anaemia may reverse a large part of the presentation; a normal panel does not exclude dementia.",
          ],
        },
        {
          heading: "5. Management plan",
          points: [
            "Multifactorial falls intervention: deprescribe fall-risk-increasing drugs, treat orthostatic hypotension, correct vision, supervised strength and balance exercise (Otago or tai chi style), home hazard modification, footwear and a walking aid fitted to height.",
            "Cognition: treat reversible contributors, stage the impairment, start a cholinesterase inhibitor only if a dementia diagnosis is established, and plan for safety, wandering, driving and finances.",
            "Deprescribe using the Beers criteria and STOPP/START, taper what needs tapering, and relax targets appropriate to her frailty.",
            "Nutrition, calcium, vitamin D and osteoporosis assessment with FRAX; treat if fracture risk is high or a fragility fracture has occurred.",
            "Caregiver support: explain the diagnosis to the son, assess his strain, link to a support group, arrange respite where available, and give a written plan with a review date and a helpline number.",
          ],
        },
      ],
      mustDraw: [
        "A table of the CGA domains with the specific instrument used for each and its cut-off.",
        "A flow chart from presenting complaint (falls plus forgetfulness) to problem list to goal-directed plan.",
      ],
      markSplit: [
        { part: "Definition and rationale", marks: 2 },
        { part: "Components and domains with instruments", marks: 3 },
        { part: "History and examination in this patient", marks: 2 },
        { part: "Investigations and what each changes", marks: 1 },
        { part: "Multifactorial management and caregiver support", marks: 2 },
      ],
      keywords: ["comprehensive geriatric assessment", "Katz ADL", "Lawton IADL", "GDS-15", "Timed Up and Go", "geriatric giants"],
    },
    {
      id: "geriatrics-ethics-cga-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the geriatric giants and their significance in family practice.",
      openingLines: [
        "The geriatric giants, described by Bernard Isaacs, are the four non-specific presentations through which most serious illness in old age declares itself: immobility, instability (falls), incontinence and impaired intellect or memory.",
        "Iatrogenesis is universally added as the fifth giant, because drugs and hospital care cause a substantial share of geriatric morbidity.",
      ],
      answer: [
        {
          heading: "The giants and what hides behind each",
          points: [
            "Immobility: arthritis, stroke, parkinsonism, heart failure, fear of falling, foot problems, depression and deconditioning after admission.",
            "Instability and falls: orthostatic hypotension, drugs, vestibular disease, cataract, neuropathy, arrhythmia, environmental hazards.",
            "Incontinence: urinary tract infection, faecal impaction, prostatism, atrophic vaginitis, diuretics, delirium and restricted mobility.",
            "Impaired intellect and memory: delirium, dementia, depression, hypothyroidism, B12 deficiency, subdural haematoma and anticholinergic drugs.",
            "Iatrogenesis: polypharmacy, prescribing cascades, immobilisation and catheterisation in hospital, and inappropriate targets carried over from middle age.",
          ],
        },
        {
          heading: "Why they matter in practice",
          points: [
            "Each giant is a final common pathway with many causes, so a single-diagnosis approach fails and a multidimensional assessment is required.",
            "Each is often dismissed as normal ageing by the family and even the doctor, which delays diagnosis of a treatable illness.",
            "Each predicts the same hard outcomes: loss of independence, institutionalisation, caregiver breakdown and death.",
            "Each has effective interventions - exercise, deprescribing, continence training, treating reversible cognitive causes - so identifying the giant is worthwhile.",
            "The modern restatement is the 5 Ms of geriatrics: Mind, Mobility, Medications, Multicomplexity and Matters Most.",
          ],
        },
      ],
      mustDraw: ["A four-column table: giant, common causes, screening question, first intervention."],
      markSplit: [
        { part: "Naming and defining the giants", marks: 1.5 },
        { part: "Causes behind each", marks: 2 },
        { part: "Significance and the 5 Ms", marks: 1.5 },
      ],
      keywords: ["geriatric giants", "Isaacs", "iatrogenesis", "5 Ms", "atypical presentation"],
    },
    {
      id: "geriatrics-ethics-cga-t3",
      paper: "II",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the causes of acute confusion (delirium) in an elderly patient and outline how you would differentiate it from dementia.",
      openingLines: [
        "Delirium is an acute, fluctuating disturbance of attention and awareness with disorganised thinking, developing over hours to days and caused by a medical condition, intoxication or withdrawal.",
        "It is a medical emergency with a mortality comparable to myocardial infarction, and it is missed in over half of cases, particularly the hypoactive form.",
      ],
      answer: [
        {
          heading: "Causes, grouped for recall",
          points: [
            "Infection: urinary tract infection, pneumonia, cellulitis, cholangitis, meningitis, and in India tuberculosis, malaria, dengue and enteric fever.",
            "Drugs: anticholinergics, benzodiazepines, opioids, steroids, antiparkinsonian drugs, digoxin toxicity, alcohol and benzodiazepine withdrawal.",
            "Metabolic: hyponatraemia, hypercalcaemia, hypoglycaemia and hyperglycaemia, uraemia, hepatic encephalopathy, thyroid disease, hypoxia and hypercapnia.",
            "Neurological and vascular: stroke, subdural haematoma, seizure and postictal state, intracranial infection, hypertensive encephalopathy.",
            "Cardiopulmonary: myocardial infarction, arrhythmia, heart failure, pulmonary embolism, exacerbation of COPD.",
            "The often-missed simple causes: urinary retention, faecal impaction, uncontrolled pain, dehydration, sensory deprivation from missing spectacles and hearing aids, and change of environment.",
          ],
        },
        {
          heading: "Differentiating delirium from dementia",
          points: [
            "Onset: delirium over hours to days, dementia over months to years.",
            "Course: delirium fluctuates through the day and worsens at night, dementia is steadily progressive.",
            "Attention: markedly impaired in delirium and relatively preserved early in dementia - test with serial sevens, months backwards or digit span.",
            "Consciousness and alertness: clouded or fluctuating in delirium, clear in dementia until very late.",
            "Perception: hallucinations and delusions common and frightening in delirium, less common early in dementia except Lewy body disease.",
            "Reversibility: delirium is usually reversible once the cause is treated, though recovery in the elderly may take weeks; and remember delirium is often superimposed on dementia, which is the commonest single risk factor for it.",
          ],
        },
      ],
      mustDraw: ["A two-column comparison table of delirium versus dementia across onset, course, attention, consciousness, perception and reversibility."],
      markSplit: [
        { part: "Definition of delirium", marks: 1 },
        { part: "Grouped causes", marks: 2 },
        { part: "Delirium versus dementia table", marks: 2 },
      ],
      keywords: ["delirium", "acute confusional state", "CAM", "hypoactive delirium", "dementia"],
    },
  ],
  mcqs: [
    {
      id: "geriatrics-ethics-cga-q1",
      stem: "A 74-year-old retired schoolteacher is brought by his daughter because he has stopped paying the electricity bill and now forgets his tablets, though he still bathes, dresses and feeds himself without help. Which assessment instrument best captures the deficit she is describing?",
      options: [
        "Katz index of activities of daily living",
        "Lawton instrumental activities of daily living scale",
        "Braden scale",
        "Barthel index",
        "Clinical Frailty Scale",
      ],
      answer: 1,
      explanation:
        "Handling finances and managing medication are instrumental activities of daily living, and the Lawton scale is the instrument that measures them; loss of IADLs precedes loss of basic ADLs and is the earliest functional marker of cognitive decline. The Katz index and the Barthel index measure basic self-care (bathing, dressing, feeding, transferring), which is exactly the domain this man has preserved, so both would score normal and miss the problem. The Braden scale grades pressure ulcer risk, and the Clinical Frailty Scale is a global judgement of frailty rather than a domain-specific functional measure.",
      difficulty: "easy",
    },
    {
      id: "geriatrics-ethics-cga-q2",
      stem: "A 70-year-old woman who never attended school scores 21 on the Mini-Mental State Examination. She runs her household, manages the money and her family reports no change in her memory. What is the most appropriate next step?",
      options: [
        "Start donepezil 5 mg at night",
        "Diagnose mild cognitive impairment and review in 6 months",
        "Repeat testing with the Hindi Mental State Examination or a validated vernacular tool",
        "Order an MRI brain and CSF biomarkers",
        "Refer for a driving assessment",
      ],
      answer: 2,
      explanation:
        "The MMSE is heavily dependent on literacy and years of schooling, and its unadjusted use in an unschooled patient produces false positives; the Hindi Mental State Examination and vernacular MoCA versions were developed precisely for low-literacy Indian populations. Starting donepezil treats a diagnosis that has not been made, and labelling mild cognitive impairment on a single invalid score is equally wrong. Imaging and biomarkers are not the answer to a test that was the wrong test, and there is no functional or informant evidence of decline here to justify a driving assessment.",
      difficulty: "moderate",
    },
    {
      id: "geriatrics-ethics-cga-q3",
      stem: "An 80-year-old man takes 17 seconds to complete the Timed Up and Go test. What does this result most directly indicate?",
      options: [
        "Normal mobility for his age",
        "Increased risk of falling",
        "Established sarcopenia",
        "Cognitive impairment",
        "Need for immediate hip radiography",
      ],
      answer: 1,
      explanation:
        "A Timed Up and Go of 12 seconds or more identifies increased falls risk in community-dwelling older adults, which is the threshold used by the CDC STEADI algorithm; over 20 seconds additionally suggests functional dependence. It is a performance test, not a body-composition measure, so it cannot by itself establish sarcopenia, which requires low muscle strength confirmed by low muscle mass. It does not diagnose cognitive impairment, and radiography is indicated by injury or pain, not by a slow timed walk.",
      difficulty: "easy",
    },
    {
      id: "geriatrics-ethics-cga-q4",
      stem: "A 79-year-old woman with known Alzheimer disease becomes acutely agitated and disoriented over two days, worse at night, with fluctuating attention. She is afebrile. Which single action should come first?",
      options: [
        "Start risperidone 0.5 mg at night",
        "Increase the donepezil dose",
        "Look for a precipitant - urinary retention, faecal impaction, infection, pain and new drugs",
        "Arrange an urgent MRI brain",
        "Admit for behavioural therapy",
      ],
      answer: 2,
      explanation:
        "An acute fluctuating change in attention and awareness superimposed on dementia is delirium, and the first step is always to find and treat the precipitant, with retention, constipation, infection, pain, dehydration and new drugs accounting for the great majority even in an afebrile patient. Antipsychotics carry increased mortality and stroke risk in dementia and are reserved for severe distress or danger after non-drug measures have failed, so they are not the first action. Increasing donepezil treats the wrong process, and imaging is reserved for focal signs, head injury or anticoagulation rather than being the reflex first test.",
      difficulty: "moderate",
    },
    {
      id: "geriatrics-ethics-cga-q5",
      stem: "Which finding on comprehensive geriatric assessment best predicts subsequent disability, institutionalisation and mortality in a community-dwelling older adult?",
      options: [
        "Serum albumin below 3.5 g/dL",
        "Usual gait speed below 0.8 m/s",
        "Body mass index below 20 kg/m2",
        "A total cholesterol below 150 mg/dL",
        "Diastolic blood pressure below 70 mmHg",
      ],
      answer: 1,
      explanation:
        "Usual gait speed is the single best-validated performance measure in geriatrics, and a value below 0.8 m/s over 4 metres predicts falls, disability, hospitalisation, institutionalisation and death across many cohorts; it is quick, needs no equipment and is often called the sixth vital sign. Low albumin, low BMI and low cholesterol are markers of illness and undernutrition with much weaker and more confounded predictive value. A low diastolic pressure matters for treatment intensity in the very old but is not a general prognostic marker of this strength.",
      difficulty: "moderate",
    },
    {
      id: "geriatrics-ethics-cga-q6",
      stem: "A 68-year-old man with diabetes and heart failure has an MNA short form score of 6. What does this signify and what is the appropriate response?",
      options: [
        "Normal nutritional status; reassure",
        "At risk of malnutrition; repeat in 3 months",
        "Malnourished; assess cause, start dietary intervention and look for an underlying illness",
        "Obesity; start weight reduction",
        "Sarcopenia is confirmed and resistance exercise alone is required",
      ],
      answer: 2,
      explanation:
        "The MNA short form runs from 0 to 14, where 12-14 is normal nutritional status, 8-11 indicates being at risk and 0-7 indicates established malnutrition, so a score of 6 mandates a nutritional plan and a search for a cause such as malignancy, tuberculosis, depression, dysphagia or drug side effects. Reassurance and a three-month recheck would be right only for a score in the at-risk band. The score says nothing about obesity, and sarcopenia is a separate diagnosis requiring measurement of muscle strength and mass rather than a nutrition screen.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "geriatrics-ethics-cga-c1",
      front: "Define comprehensive geriatric assessment in one sentence.",
      back: "A multidimensional, interdisciplinary diagnostic process determining the medical, psychological and functional capabilities of a frail older person, in order to develop a coordinated plan for treatment and long-term follow-up.",
    },
    {
      id: "geriatrics-ethics-cga-c2",
      front: "The four geriatric giants of Isaacs, plus the fifth usually added.",
      back: "Immobility, instability (falls), incontinence, impaired intellect or memory - plus iatrogenesis.",
    },
    {
      id: "geriatrics-ethics-cga-c3",
      front: "The 5 Ms of geriatrics.",
      back: "Mind, Mobility, Medications, Multicomplexity and Matters Most.",
    },
    {
      id: "geriatrics-ethics-cga-c4",
      front: "Katz ADL items and score interpretation.",
      back: "Bathing, dressing, toileting, transferring, continence, feeding; 0-6. Six is independent, four moderate impairment, two or less severe dependence.",
    },
    {
      id: "geriatrics-ethics-cga-c5",
      front: "Which functional loss comes first in dementia - ADL or IADL?",
      back: "IADL. Handling money, managing medication, using transport and cooking fail before bathing, dressing and feeding.",
    },
    {
      id: "geriatrics-ethics-cga-c6",
      front: "GDS-15 cut-offs.",
      back: "5 or more suggests depression; 10 or more is almost always depression. Preferred over PHQ-9 in the physically ill because it avoids somatic items.",
    },
    {
      id: "geriatrics-ethics-cga-c7",
      front: "Gait speed and Timed Up and Go thresholds.",
      back: "Usual gait speed under 0.8 m/s is slow; Timed Up and Go of 12 seconds or more predicts falls, and over 20 seconds indicates functional dependence.",
    },
    {
      id: "geriatrics-ethics-cga-c8",
      front: "MNA short form bands.",
      back: "Score 0-14: 12-14 normal, 8-11 at risk of malnutrition, 0-7 malnourished.",
    },
    {
      id: "geriatrics-ethics-cga-c9",
      front: "Why not use the MMSE unadjusted in India?",
      back: "It is heavily education dependent and falsely labels unschooled patients as impaired; use the Hindi Mental State Examination or a validated vernacular MoCA.",
    },
    {
      id: "geriatrics-ethics-cga-c10",
      front: "Indian ageing numbers worth quoting.",
      back: "103.9 million aged 60 and over at Census 2011 (8.6%); UNFPA India Ageing Report 2023 projects about 20.8% by 2050. LASI wave 1 (2017-18) is the reference survey.",
    },
    {
      id: "geriatrics-ethics-cga-c11",
      front: "Name three Indian government schemes relevant to an older patient.",
      back: "NPHCE (geriatric clinics and regional geriatric centres), Rashtriya Vayoshri Yojana (free assistive devices), and Ayushman Bharat PM-JAY Vay Vandana (Rs 5 lakh cover for all aged 70 and above, from October 2024).",
    },
    {
      id: "geriatrics-ethics-cga-c12",
      front: "The national helpline number for senior citizens in India.",
      back: "Elderline 14567, run by the Ministry of Social Justice and Empowerment.",
    },
  ],
  references: [
    "Ellis G et al. Comprehensive geriatric assessment for older adults admitted to hospital. Cochrane Database of Systematic Reviews, 2017",
    "Hazzard's Geriatric Medicine and Gerontology, 8th edition, 2022 - assessment of the older patient",
    "Longitudinal Ageing Study in India (LASI) Wave 1 report, IIPS / MoHFW, 2020",
    "UNFPA India Ageing Report 2023",
    "Operational Guidelines, National Programme for Health Care of the Elderly (NPHCE), MoHFW",
    "Tinetti ME, Fried TR. The 5 Ms of geriatrics. Journal of the American Geriatrics Society, 2017",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "geriatrics-ethics-case-1",
    title: "Recurrent falls in a frail 78-year-old widow on nine medicines",
    kind: "long",
    subjectId: "geriatrics-ethics",
    opening:
      "Mrs Kamala Devi, a 78-year-old widow who lives with her son, daughter-in-law and two grandchildren, is brought by her daughter-in-law with two falls in the past three months, the second a fortnight ago on getting up from bed, which left her with a sprained right wrist; she has hypertension, type 2 diabetes, osteoarthritis of both knees and poor sleep, and takes nine medicines every day.",
    minutes: 45,
    frequency: "core",
    sections: [
      {
        heading: "History of the falls",
        points: [
          "The first fall was about ten weeks ago at around 2 am, when she got up to go to the toilet, felt the room go dark for a moment and found herself on the floor of the passage; she did not lose consciousness, had no chest pain or palpitation, and was able to get up with the wall for support.",
          "The second fall was fourteen days ago at about 6 am, on standing up from her bed after a night of poor sleep; she describes a light-headed, sinking feeling for a few seconds before her knees gave way, and she landed on her outstretched right hand.",
          "There was no tongue bite, incontinence, jerking, confusion afterwards or witnessed unresponsiveness, and she remembers every detail of both events, which argues against seizure and against true syncope.",
          "Since the second fall she has been afraid to walk unaccompanied, has stopped going to the temple two streets away and has taken to spending most of the day on her bed, and her daughter-in-law says she has become quiet and eats less.",
          "She reports giddiness on standing for the past four or five months, for which a local practitioner started cinnarizine, and unsteadiness in the dark that is worse than in daylight; she does not describe vertigo with head movement, hearing loss or tinnitus.",
          "A wrist radiograph after the second fall showed no fracture; she has never had a hip, spine or wrist fracture, and has never had her bone density measured.",
        ],
      },
      {
        heading: "Drug history and the brown bag review",
        points: [
          "The nine medicines laid out on the table are amlodipine 10 mg in the morning, telmisartan 40 mg in the morning, metformin 500 mg twice daily, glimepiride 2 mg before breakfast, diclofenac 50 mg twice daily for the knees, pantoprazole 40 mg before breakfast, amitriptyline 25 mg at night for sleep and 'nerve pain', clonazepam 0.5 mg at night for sleep, and cinnarizine 25 mg three times a day for giddiness.",
          "The clonazepam was started about two years ago after her husband died and has never been reviewed; the amitriptyline was added eight months ago by a second doctor for sleep and burning feet; the cinnarizine was added five months ago for giddiness; and the pantoprazole was added to cover the diclofenac, so three of the nine drugs were started to treat the side effects of other drugs.",
          "She has no known drug allergy, buys her drugs from a chemist without a prescription every month, occasionally doubles the diclofenac when the knees are bad, and takes an ayurvedic churna for constipation that she did not think counted as medicine.",
          "The daughter-in-law fills a weekly pill box, but the patient sometimes takes the night-time tablets twice when she cannot sleep, and there is no written medication list in the house.",
          "The combination of a benzodiazepine, a tricyclic antidepressant, a sedating antihistamine, a sulfonylurea, an NSAID and two antihypertensives in a 46 kg woman is itself the most likely cause of the presenting complaint, and the history should be presented with that hypothesis stated openly.",
        ],
      },
      {
        heading: "Past history and systems review",
        points: [
          "Hypertension was diagnosed twelve years ago and diabetes eight years ago; there is no history of stroke, transient ischaemic attack, myocardial infarction, heart failure or hospital admission apart from a cataract operation on the right eye three years ago, and the left eye has an operable cataract she has been postponing.",
          "She has bilateral knee pain on climbing stairs and squatting, morning stiffness of under fifteen minutes, and no swelling or redness, consistent with osteoarthritis; she uses an Indian-style toilet in the house and holds the wall to get up from it.",
          "She reports burning of both feet at night, numbness of the toes, and cannot feel the floor properly in the dark, suggesting a distal sensory neuropathy from diabetes and possibly vitamin B12 deficiency on long-term metformin.",
          "Her sleep is broken, with early waking at 4 am, loss of interest in her grandchildren's activities and a feeling that she is a burden on the family since the second fall, so depression must be screened for and not dismissed as grief or as a reaction to the fall.",
          "There is nocturia twice a night, occasional urge incontinence that she conceals from the family, and constipation with straining, all of which increase night-time toileting and the risk of a fall in the dark.",
          "She has lost about 4 kg in the past six months by her own estimate and her blouse has become loose, she has ill-fitting lower dentures, and she eats a single cooked meal a day with tea and biscuits at other times.",
        ],
      },
      {
        heading: "Social history, the household and the caregiver",
        points: [
          "She has lived with her son, a bank clerk, and his family since her husband died two years ago; the son leaves at 8 am and returns at 8 pm, so the daughter-in-law, who also runs a tailoring business from the house, is the sole daytime caregiver.",
          "The house is a first-floor flat with a steep unlit staircase, a wet bathroom floor without a grab bar or a raised commode, loose mats in the passage, and a bedroom light switch across the room from the bed, so she walks to the toilet at night in the dark.",
          "A small pension of about Rs 3,000 a month is paid into an account operated by the son; she has no health insurance and has not been enrolled in the Ayushman Bharat PM-JAY Vay Vandana scheme for which she is eligible on age alone.",
          "The daughter-in-law describes waking whenever her mother-in-law gets up at night, being unable to leave the house for more than an hour, and feeling that any fall will be blamed on her; she scores in the moderate range on the Zarit caregiver burden interview.",
          "There is no history suggesting neglect or abuse when she is interviewed alone, but she feels she is 'in the way' of the family and does not want to trouble them, which is why she did not report the first fall.",
        ],
      },
      {
        heading: "Examination",
        points: [
          "She is a thin, quietly spoken woman with a weight of 46 kg, height 154 cm and body mass index 19.4 kg/m2, a mid-arm circumference of 21 cm, healed abrasions over the right forearm and a tender but not deformed right wrist, and there is no bruising in unusual sites.",
          "Blood pressure is 152/86 mmHg lying and falls to 124/70 mmHg at one minute and 118/68 mmHg at three minutes of standing, with reproduction of her light-headedness and no compensatory rise in pulse from 64 per minute, which establishes orthostatic hypotension of 28 to 34 mmHg systolic.",
          "The pulse is regular with no pauses, the apex is not displaced, there are no murmurs and no carotid bruit, the chest is clear and there is no ankle oedema beyond slight pitting attributable to amlodipine.",
          "Neurological examination shows loss of vibration sense at both great toes and ankles, absent ankle jerks, reduced pinprick to mid-shin in a stocking distribution and a positive Romberg test, with mild symmetrical bradykinesia, reduced arm swing and slight cogwheel rigidity at both wrists without rest tremor, which fits drug-induced parkinsonism from cinnarizine on top of a diabetic sensory neuropathy.",
          "She rises from the chair only with the use of her arms, walks with short shuffling steps and a widened base, cannot hold a tandem stance for ten seconds, and completes the Timed Up and Go in 18 seconds; her sandals are loose rubber slippers with a worn sole.",
          "Distance acuity is 6/18 in the operated right eye and 6/60 in the left eye with a dense nuclear cataract and she cannot read N8 print with her current spectacles, the whisper test is passed on both sides, the mouth shows ill-fitting lower dentures with angular stomatitis, and the knees show crepitus with a small right effusion and no warmth.",
        ],
      },
      {
        heading: "Bedside assessment scores and how to present them",
        points: [
          "Function: Katz ADL 5 of 6 (needs help bathing since the wrist injury) and Lawton IADL 4 of 8 (no longer shops, cooks, handles money or manages her own medication), which places her in the frail rather than the fit group and means her IADL loss began before the falls.",
          "Cognition: a vernacular MoCA of 24 with points lost on delayed recall and attention, which in a woman with five years of schooling and on three sedating drugs should be reported as 'probable drug-related impairment, to be repeated after deprescribing' rather than as dementia.",
          "Mood: GDS-15 score of 8, with positive answers on feeling worthless, dropping activities and preferring to stay at home, which is clinically significant depression that also feeds her fear of falling and poor intake.",
          "Nutrition: MNA short form 9 (at risk), with a 4 kg weight loss, reduced intake and a BMI of 19.4, so undernutrition and sarcopenia are part of the problem list and not a footnote.",
          "Frailty: Clinical Frailty Scale 6 (moderately frail), and by the Fried phenotype she meets four of five criteria (weight loss, exhaustion, slow gait, low activity), which sets the targets for her blood pressure and glucose.",
          "The examiner expects these scores to be quoted with their cut-offs in the presentation, in one sentence each, and then folded into a single problem list rather than read out as a questionnaire.",
        ],
      },
    ],
    summaryStatement:
      "Mrs Kamala Devi, a 78-year-old frail widow living with her son's family, presents with two falls in three months, both on standing and the second with a wrist sprain, on a background of hypertension, type 2 diabetes with a distal sensory neuropathy, knee osteoarthritis, insomnia and a 4 kg weight loss, treated with nine medicines including clonazepam, amitriptyline, cinnarizine, diclofenac, glimepiride and two antihypertensives; on examination she has a postural drop of 28 to 34 mmHg systolic without a pulse rise, drug-induced parkinsonian features, a dense left cataract, a Timed Up and Go of 18 seconds, a GDS-15 of 8 and an MNA-SF of 9, and my diagnosis is multifactorial falls in a frail older woman driven by drug-induced orthostatic hypotension and sedative-anticholinergic burden, with fear of falling, depression, undernutrition, an unsafe home and caregiver strain as active problems on the same list.",
    differential: [
      {
        diagnosis: "Multifactorial falls from drug-induced orthostatic hypotension and sedative-anticholinergic burden",
        forIt: "Both falls occurred on standing with a preceding light-headed sinking feeling; a documented postural drop of 28 to 34 mmHg systolic without a compensatory pulse rise; a benzodiazepine, a tricyclic, a sedating antihistamine, two antihypertensives and an NSAID in a 46 kg woman; parkinsonian signs after cinnarizine; neuropathy and cataract adding to the risk.",
        againstIt: "Nothing argues against it, but it is a diagnosis of pattern rather than of a single test, and the candidate must still exclude the dangerous single causes below before resting on it.",
      },
      {
        diagnosis: "Cardiac syncope from arrhythmia, conduction block or aortic stenosis",
        forIt: "Her age, hypertension and diabetes; a fall at night with a momentary blackout; the amitriptyline, which prolongs the QT interval and slows conduction.",
        againstIt: "No true loss of consciousness, no palpitation, no exertional symptoms, both events tied to posture rather than to exertion or lying flat, a regular pulse of 64 without pauses, no murmur, and a normal 12-lead ECG; a 24-hour Holter is reasonable if the ECG shows any conduction abnormality.",
      },
      {
        diagnosis: "Hypoglycaemia on glimepiride",
        forIt: "A sulfonylurea in a frail underweight woman eating one meal a day, with an HbA1c of 6.4% indicating overtreatment; the first fall was in the early hours and the second before breakfast.",
        againstIt: "No sweating, tremor, hunger or relief with food, the symptoms are strictly postural, and a capillary glucose checked by the daughter-in-law with a neighbour's glucometer after the second fall was 118 mg/dL; nevertheless the drug must go because the risk is real even if it was not the cause this time.",
      },
      {
        diagnosis: "Idiopathic Parkinson disease or another parkinsonian syndrome",
        forIt: "Shuffling short-stepped gait, reduced arm swing, bradykinesia and cogwheel rigidity, with falls and constipation.",
        againstIt: "The signs are symmetrical, there is no rest tremor, no hyposmia or REM sleep behaviour disorder in the history, and the features appeared within months of starting cinnarizine, a known cause of drug-induced parkinsonism; the correct test is withdrawal of the drug and re-examination at three months.",
      },
    ],
    investigations: [
      {
        test: "Haemoglobin and complete blood count with red cell indices",
        why: "Anaemia lowers cerebral perfusion and worsens postural symptoms, and long-term diclofenac in a woman with weight loss may cause occult gastrointestinal bleeding.",
        expected: "Haemoglobin 10.6 g/dL with a mean corpuscular volume of 78 fL, consistent with iron deficiency from NSAID-related blood loss and poor intake, prompting stool occult blood testing and iron studies.",
      },
      {
        test: "Serum creatinine with estimated GFR, sodium and potassium",
        why: "Telmisartan plus diclofenac plus dehydration is the classic combination for acute kidney injury, metformin dosing depends on the eGFR, and hyponatraemia on amitriptyline or a thiazide is a common cause of falls.",
        expected: "Creatinine 1.1 mg/dL giving an eGFR of about 48 mL/min/1.73 m2, sodium 133 mmol/L and potassium 4.6 mmol/L, which makes the NSAID unacceptable, supports stopping the tricyclic, and means metformin is continued at the present dose but reviewed if the eGFR falls below 45 and stopped below 30.",
      },
      {
        test: "Fasting glucose and HbA1c",
        why: "To decide whether the sulfonylurea is needed at all and to set a frailty-appropriate target rather than a middle-age one.",
        expected: "Fasting glucose 96 mg/dL and HbA1c 6.4%, which in a moderately frail 78-year-old is overtreatment; the target is 7.5 to 8.5% and glimepiride should be stopped.",
      },
      {
        test: "Twelve-lead ECG",
        why: "To look for bradyarrhythmia, atrioventricular block, bundle branch block, ischaemia and QT prolongation from the tricyclic before attributing the falls to orthostasis alone.",
        expected: "Sinus rhythm at 64 per minute, PR 180 ms, QRS 90 ms, QTc 440 ms, no conduction block and no ischaemic change, which makes cardiac syncope unlikely and allows the tricyclic to be tapered without cardiac monitoring.",
      },
      {
        test: "Serum 25-hydroxyvitamin D, calcium, phosphate and vitamin B12",
        why: "Vitamin D deficiency contributes to proximal weakness and falls, and B12 deficiency on eight years of metformin can cause or worsen her neuropathy and her cognitive scores.",
        expected: "25-hydroxyvitamin D 11 ng/mL (deficient), calcium 8.9 mg/dL, and B12 165 pg/mL (low), so both are replaced and the neuropathy is re-assessed after three months.",
      },
      {
        test: "Thyroid-stimulating hormone",
        why: "Hypothyroidism presents in old age as slowness, depression, constipation and weight change and would be an easily reversible contributor to her presentation.",
        expected: "TSH 3.2 mIU/L, normal, so thyroid disease is excluded as a cause.",
      },
      {
        test: "Urine routine and microscopy",
        why: "Urinary infection can present as falls and incontinence in the elderly, and glycosuria or proteinuria changes the diabetic plan.",
        expected: "No pyuria, nitrite negative, no glycosuria and trace albumin; asymptomatic bacteriuria, if found, is not to be treated.",
      },
      {
        test: "FRAX calculation and, where available, DXA of the hip and spine",
        why: "Two falls in a thin postmenopausal woman with vitamin D deficiency make fracture risk the most important downstream outcome to prevent.",
        expected: "A FRAX ten-year major osteoporotic fracture probability above 20% or a hip fracture probability above 3%, or a femoral neck T-score of -2.7, either of which justifies a bisphosphonate once vitamin D is replete and the eGFR is confirmed above 35 mL/min.",
      },
    ],
    management: [
      {
        heading: "Deprescribing with Beers and STOPP reasoning, one drug at a time",
        points: [
          "**Clonazepam:** Beers 2023 lists all benzodiazepines as drugs to avoid in older adults and STOPP flags any benzodiazepine in a patient who has fallen; taper rather than stop, reducing by 0.125 mg every two weeks over eight to twelve weeks, with sleep hygiene and, if needed, low-dose melatonin or cognitive behavioural therapy for insomnia, because abrupt withdrawal causes rebound insomnia, delirium and seizures.",
          "**Amitriptyline:** a strongly anticholinergic tricyclic that causes orthostatic hypotension, sedation, constipation, urinary retention and QT prolongation, and appears in both Beers and STOPP for patients with falls, constipation and cognitive impairment; halve the dose for two weeks then stop, and treat the neuropathic pain if it persists with duloxetine 20 to 30 mg or a low dose of pregabalin adjusted for eGFR, starting only after the falls are controlled.",
          "**Cinnarizine:** stop at once, because it was treating the giddiness of orthostatic hypotension caused by the other drugs (a prescribing cascade), it is sedating and anticholinergic, and it is the likeliest cause of her parkinsonian signs; expect the bradykinesia to resolve over weeks to months.",
          "**Diclofenac and pantoprazole:** Beers proscribes chronic oral NSAID use in older adults and STOPP flags an NSAID with an eGFR below 50 and in anyone at risk of gastrointestinal bleeding, and with an ARB in a dehydrated patient it risks acute kidney injury; replace with regular paracetamol 500 mg to 1 g three times daily, topical diclofenac gel, a knee exercise programme and firm footwear, and review the pantoprazole for withdrawal after eight weeks once the NSAID is gone and the anaemia has been worked up.",
          "**Glimepiride:** Beers lists long-acting sulfonylureas for avoidance because of prolonged hypoglycaemia, and an HbA1c of 6.4% in a frail underweight woman is overtreatment; stop it, continue metformin at 500 mg twice daily with a dose review if the eGFR falls below 45 and withdrawal below 30, and set an HbA1c target of 7.5 to 8.5%.",
          "**Antihypertensives:** with a standing systolic of 118 to 124 mmHg the priority is the standing, not the lying, pressure; stop amlodipine first because it adds oedema and postural symptoms, continue telmisartan 40 mg for its renal protection in a diabetic with albuminuria, aim for a seated pressure below 150/90 mmHg without a symptomatic postural drop, and recheck lying and standing pressure at every visit.",
          "**START criteria - what is missing:** vitamin D 60,000 IU weekly for eight weeks then 1,000 to 2,000 IU daily, calcium 500 to 1,000 mg daily from diet or supplement, oral or intramuscular B12 replacement, iron once the source of loss is addressed, and a bisphosphonate if the fracture risk assessment is high.",
        ],
      },
      {
        heading: "Multifactorial falls intervention",
        points: [
          "Orthostatic hypotension: in addition to drug withdrawal, teach her to sit on the edge of the bed for one minute and to tense the calf muscles and cross the legs before standing, to raise the head of the bed by 10 to 15 cm, to drink 1.5 to 2 litres of fluid a day unless heart failure supervenes, to avoid large carbohydrate-heavy meals and hot baths, and to use a bedside commode at night rather than walking to the toilet in the dark.",
          "Strength and balance: refer to physiotherapy for an Otago-style home programme of leg strengthening and balance retraining three times a week, progressing to a supervised group or tai chi class where available, since structured balance and strength exercise reduces the rate of falls by about a quarter and is the intervention with the strongest evidence.",
          "Vision: schedule the left cataract surgery early, because first-eye cataract surgery reduces falls, and advise against bifocal or varifocal spectacles when walking outdoors.",
          "Feet and footwear: fit closed, low-heeled, firm-soled footwear with a back strap, examine the feet at every visit because she has neuropathy and diabetes, and treat the dental and mouth problems that limit her intake.",
          "Continence and bowel: treat the constipation with fluid, fibre and a stool softener rather than the churna, and manage urge incontinence with timed voiding and pelvic floor work rather than an anticholinergic, which would undo the deprescribing.",
          "Depression: after deprescribing, treat the GDS-15 score of 8 with behavioural activation and, if it persists at six weeks, an SSRI such as sertraline 25 mg rising to 50 mg, which is far safer than the tricyclic she was on, checking sodium at two weeks because SSRI-induced hyponatraemia is commonest in the first month.",
        ],
      },
      {
        heading: "Nutrition, sarcopenia and the chronic diseases at frailty-appropriate targets",
        points: [
          "Aim for 1.0 to 1.2 g/kg/day of protein (about 50 to 55 g) with a protein source in every meal, milk, dal, egg or curd between meals instead of tea and biscuits, and a fortified oral supplement only if intake remains poor after the dentures are refitted.",
          "Refer for denture adjustment and treat the angular stomatitis with B-complex and iron, because inability to chew is the commonest correctable cause of weight loss in this age group.",
          "Relax the diabetes target to an HbA1c of 7.5 to 8.5% and the blood pressure target to below 150/90 mmHg seated without postural symptoms, and document these targets on the card so that the next doctor does not re-intensify treatment.",
          "Review the neuropathy after B12 and vitamin D replacement, and teach daily foot inspection by the daughter-in-law with a mirror, because a neuropathic foot in a diabetic who cannot see her own sole is a future ulcer.",
          "Recheck weight, MNA-SF, grip strength and gait speed at three months to decide whether the sarcopenia is responding to protein and resistance exercise.",
        ],
      },
      {
        heading: "Caregiver and home safety plan",
        points: [
          "Hold a family meeting with the son and daughter-in-law present, explain that the falls were caused by treatable factors and not by carelessness, and agree the plan in writing in the local language with a single medication list kept on the refrigerator door.",
          "Home modifications, in order of cost: remove the loose mats, put a night light between the bed and the toilet, move the bed so the light switch is within reach, fit a grab bar beside the toilet and in the bathroom, use a raised commode chair over the Indian toilet, keep the bathroom floor dry with a non-slip mat, and install a handrail and a bulb on the staircase.",
          "Give the patient a whistle or a mobile phone within reach of the bed, teach her how to get up from the floor and how to call for help, and instruct the family to check on her rather than leave her on the floor if a fall recurs.",
          "Reduce caregiver strain by arranging a morning helper or a neighbour for two hours a day, applying to Rashtriya Vayoshri Yojana for a walker and spectacles, enrolling her in Ayushman Bharat PM-JAY Vay Vandana for the cataract surgery, and giving the daughter-in-law the Elderline number 14567 and a direct line to the clinic.",
          "Address the patient's feeling of being a burden directly with her and with the family, give her back a valued household role such as supervising the children's homework, and revisit her mood at every follow-up.",
        ],
      },
      {
        heading: "Follow-up, safety-netting and what success looks like",
        points: [
          "See her at two weeks to check the clonazepam and amitriptyline taper, standing blood pressure, sodium and sleep; at six weeks for mood, weight and the falls diary; and at three months for repeat MoCA, gait speed, Timed Up and Go, parkinsonian signs and the pantoprazole review.",
          "Tell the family the three symptoms that need a same-day visit: a fall with head injury or inability to bear weight, new confusion or drowsiness, and black stools or vomiting blood.",
          "Success at three months is no further falls, a standing systolic above 110 mmHg without symptoms, five or fewer regular medicines, a Timed Up and Go under 14 seconds, weight regained to 48 kg, a GDS-15 below 5, and a mother-in-law who walks to the temple again.",
          "Reassess and rewrite the drug list after any hospital admission, since discharge is where the benzodiazepine and the NSAID are most likely to be restarted by a doctor who has not seen this plan.",
        ],
      },
    ],
    viva: [
      {
        q: "What are the Beers criteria and the STOPP/START criteria, and how do they differ?",
        a: "The Beers criteria, published by the American Geriatrics Society and last updated in 2023, are a list of drugs that are potentially inappropriate in adults aged 65 and over, arranged as drugs to avoid, drugs to avoid in specific diseases, drugs to use with caution, drug interactions and renal dose adjustments. STOPP/START, from Ireland and now in version 3 (2023), pairs a list of prescriptions to stop with a list of omitted drugs to start, is organised by physiological system and is explicitly linked to clinical circumstances such as falls, so it is easier to apply at the bedside and is the only one of the two that tells you what is missing.",
      },
      {
        q: "How would you taper the clonazepam, and what are the risks of stopping it abruptly?",
        a: "Reduce the dose by about a quarter every two weeks, so 0.5 mg to 0.375 mg to 0.25 mg to 0.125 mg to stop over eight to twelve weeks, slowing if rebound insomnia or anxiety appears, with sleep hygiene, a fixed rising time and no daytime napping. Abrupt withdrawal after two years of use risks rebound insomnia, anxiety, tremor, delirium and withdrawal seizures, and in a frail patient any of these can itself cause a fall or an admission.",
      },
      {
        q: "Define orthostatic hypotension and describe how you measured it.",
        a: "A fall in systolic blood pressure of 20 mmHg or more, or in diastolic of 10 mmHg or more, within three minutes of standing from a lying position; with the patient lying for five minutes I recorded the pressure and pulse, then stood her and repeated both at one and three minutes, asking about symptoms. In this patient the systolic fell by 28 mmHg at one minute and 34 mmHg at three minutes without a rise in pulse, which suggests an autonomic contribution from her neuropathy and the tricyclic as well as volume and vasodilator effects.",
      },
      {
        q: "What is a prescribing cascade, and where is it in this case?",
        a: "A prescribing cascade occurs when the adverse effect of one drug is misread as a new disease and a second drug is prescribed to treat it. Here amlodipine and the sedatives caused orthostatic giddiness, which was treated with cinnarizine, which caused parkinsonism and more falls; and diclofenac caused dyspepsia, which was treated with pantoprazole. The remedy is always to withdraw the first drug, not to add a third.",
      },
      {
        q: "What blood pressure and glycaemic targets would you set for this patient and why?",
        a: "For a moderately frail 78-year-old with orthostatic hypotension I would aim for a seated blood pressure below 150/90 mmHg and a standing systolic above 110 mmHg without symptoms, and an HbA1c of 7.5 to 8.5%, because the harms of tight control in the frail (falls, syncope, hypoglycaemia, hospitalisation) outrun the benefits within her remaining life expectancy, as the ADA Standards of Care for older adults and the European hypertension guidance for frail older patients both recognise.",
      },
      {
        q: "Which exercise programme has the best evidence for preventing falls in the community?",
        a: "Programmes that train balance and functional movement, with or without lower-limb strengthening, for at least three hours a week over several months: the Otago home exercise programme, delivered by a physiotherapist and progressed over a year, and tai chi are the best studied. The Cochrane review of exercise for falls prevention (Sherrington 2019) found a reduction of about 23% in the rate of falls; walking alone does not reduce falls and may increase them in the frail.",
      },
      {
        q: "Does vitamin D prevent falls?",
        a: "Only in those who are deficient: replacing vitamin D in a patient with a level below 20 ng/mL improves proximal muscle strength and reduces falls, whereas giving it routinely to replete community-dwelling elders does not, and an annual high-dose bolus of 500,000 IU actually increased falls and fractures in the Sanders trial. This patient is deficient, so she should be replaced with 60,000 IU weekly for eight weeks and then a daily maintenance dose, together with adequate calcium.",
      },
      {
        q: "How would you assess and support caregiver strain, and what resources exist in India?",
        a: "I would ask the daughter-in-law directly and alone how she is coping, use the Zarit Burden Interview or its four-item screen, look for depression, sleep loss and financial strain, and check whether she has any respite. Support means sharing the load within the family through a family meeting, arranging paid or volunteer help, assistive devices through Rashtriya Vayoshri Yojana, health cover through Ayushman Bharat PM-JAY Vay Vandana for those aged 70 and over, day care or physiotherapy through the National Programme for Health Care of the Elderly, the Elderline 14567 helpline, and, where they exist, community palliative or home-care networks and senior citizen associations.",
      },
    ],
    pitfalls: [
      "Presenting the case as a diabetic hypertensive with knee pain and mentioning the falls in passing: the falls are the case, and the presentation should open with them and return to them.",
      "Forgetting the lying and standing blood pressure, which is the single examination finding that makes the diagnosis and the single one examiners most often find omitted.",
      "Stopping the clonazepam and amitriptyline abruptly, or stopping all nine drugs on day one; deprescribing is planned, sequenced, tapered and reviewed, and a withdrawal seizure will end the candidate's argument.",
      "Treating the giddiness with more cinnarizine or betahistine, or the parkinsonism with levodopa, rather than recognising the prescribing cascade and withdrawing the cause.",
      "Diagnosing dementia from a MoCA of 24 obtained on three sedating drugs, and diagnosing grief rather than depression from a GDS-15 of 8.",
      "Leaving the daughter-in-law out of the plan and out of the presentation; in this household she is the person who will carry out every item on the list, and her strain is a finding in its own right.",
    ],
    references: [
      "American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society, 2023",
      "O'Mahony D et al. STOPP/START criteria for potentially inappropriate prescribing in older people: version 3. European Geriatric Medicine, 2023",
      "Montero-Odasso M et al. World guidelines for falls prevention and management for older adults: a global initiative. Age and Ageing, 2022",
      "Sherrington C et al. Exercise for preventing falls in older people living in the community. Cochrane Database of Systematic Reviews, 2019",
      "Hazzard's Geriatric Medicine and Gerontology, 8th edition, 2022 - falls, orthostatic hypotension and pharmacotherapy chapters",
      "CDC STEADI (Stopping Elderly Accidents, Deaths and Injuries) algorithm for fall risk screening, assessment and intervention, 2019",
      "American Diabetes Association. Standards of Care in Diabetes 2023 - older adults section",
    ],
  },
  {
    id: "geriatrics-ethics-case-2",
    title: "Breaking bad news to a daughter: advanced carcinoma of the stomach and the first palliative care conversation",
    kind: "osce",
    subjectId: "geriatrics-ethics",
    opening:
      "Station instructions: You are the family physician of Mr Raghavan, a 72-year-old retired postmaster investigated for three months of weight loss, early satiety and epigastric pain; the endoscopic biopsy has confirmed adenocarcinoma of the stomach and the CT scan shows multiple liver metastases and peritoneal deposits, and the surgeon has written that the tumour is not resectable. His daughter Meena, 40, who has been bringing him to the clinic, has come alone to collect the reports and asks what they show. In ten minutes, break the news to her using a structured approach and introduce palliative care.",
    minutes: 10,
    frequency: "core",
    sections: [
      {
        heading: "S - Setting up: the first ninety seconds before any news",
        points: [
          "Read the reports before calling her in so that you can say what they show without looking down at them, switch your phone to silent, ask the nurse that you are not to be disturbed, and put the box of tissues within her reach rather than yours.",
          "Sit at the same level with no desk between you, at a slight angle rather than face on, and confirm who she is before saying anything about the results.",
          "Say: 'Good morning, Meena. I am Dr Sharma, the family physician who has been looking after your father. Please sit down. I have the results of the endoscopy and the scan with me, and I have kept the next fifteen minutes free so that we can go through them properly.'",
          "Ask whether she wants anyone else present: 'Before we start, is there anyone you would like to have here with you, or would you rather we talk now and I go through it again with the family later?'",
          "Establish, without alarm, that the results belong to her father: 'I want to be sure we do right by your father in how he hears about this too, so I will ask you a little about him as we go.'",
        ],
      },
      {
        heading: "P - Perception: find out what she already knows and fears",
        points: [
          "Ask before telling, because the gap between what she believes and what the reports say is the distance you will have to cover: 'Can you tell me what you understand so far about why we did the endoscopy and the scan?'",
          "Follow with what she has been told and what she suspects: 'What did the doctor at the endoscopy say to you afterwards?' and 'When you saw him losing weight like this, what went through your mind?'",
          "Listen without correcting, note her words - if she says 'ulcer' or 'growth' or 'cancer', use her word when you return to the topic - and notice whether she is minimising, expecting the worst or has already been told something by a relative.",
          "If she says 'I was afraid it might be cancer', acknowledge it rather than confirm it yet: 'That was a reasonable thing to worry about, and I am going to tell you exactly what the tests found.'",
          "Do not let this step become an interrogation; two or three open questions and a summary back to her are enough: 'So you know that we were looking for the cause of the weight loss and the pain, that a small piece was taken from the stomach, and that the scan was to see how things looked inside.'",
        ],
      },
      {
        heading: "I - Invitation: ask how much she wants to know, and how her father likes to receive news",
        points: [
          "Ask permission for the level of detail: 'Some people want me to go through every detail of a report, and others prefer the big picture and what happens next. Which would suit you better today?'",
          "Ask about the patient himself, because the daughter is a messenger and a proxy, not the patient: 'Is your father the kind of man who likes to know everything about his own health, or does he prefer the family to handle these things for him?'",
          "If she asks you to tell her first and keep it from him, do not agree or refuse at this point; note it for later: 'I hear that, and we will come back to how and when your father hears this, because it matters a great deal.'",
          "Confirm she is ready: 'Are you ready for me to go through what the reports show?' - and wait for a yes, a nod or a silence that is clearly an assent.",
        ],
      },
      {
        heading: "K - Knowledge: the warning shot, then the news in plain words, in chunks",
        points: [
          "Give the warning shot and pause: 'I am sorry, Meena, the results are not what we were hoping for.' Then wait for her to look up before continuing; the pause is not a delay, it is the step.",
          "Give the diagnosis in one short plain sentence, using the word cancer once and clearly: 'The piece of tissue taken from your father's stomach shows that it is a cancer.' Then stop and allow silence for a few seconds.",
          "Chunk the second piece only when she is ready: 'The scan tells us more. The cancer has already spread from the stomach to the liver and to the lining inside the abdomen.' Pause again.",
          "Give the third chunk, the implication, without hedging and without jargon: 'Because it has spread in this way, the surgeons have looked at it carefully and an operation cannot remove it. I have to be honest with you: this is not a cancer that we can cure.'",
          "Check understanding after each chunk rather than at the end: 'I know this is a great deal to take in. Can you tell me what you have understood so far?' and correct gently if she has heard 'the operation is being delayed' rather than 'there will be no operation'.",
          "Avoid the words adenocarcinoma, metastatic, unresectable, stage four and prognosis unless she uses them; if she asks for the technical name, give it and then translate it back into plain language.",
        ],
      },
      {
        heading: "E - Emotions: name it, allow it, and answer the hard question honestly",
        points: [
          "Expect tears, silence, anger or a rush of practical questions, and respond to the emotion before the content: 'I can see this has come as a terrible shock.' Then be quiet; do not fill the silence, and offer the tissues without comment.",
          "Legitimise the feeling and the effort she has made: 'Anyone would feel this way. You have done everything a daughter could - you brought him in as soon as he started losing weight, and nothing you did or did not do caused this.'",
          "If she asks 'How long does he have?', do not dodge and do not give a number: 'I cannot give you an exact figure, and any doctor who does is guessing. With a cancer that has spread this far, we are usually talking about months rather than years. I will always tell you honestly as things change, and I would rather you asked me than wondered alone.'",
          "If she asks whether the delay in diagnosis mattered, answer truthfully and without defensiveness: 'Stomach cancer very often shows itself only after it has spread, because the early stage causes so few symptoms. Finding it a few weeks earlier would not have changed what the scan shows today.'",
          "Use the NURSE sequence if you need a scaffold: Name the emotion, express Understanding, Respect what she has done, Support her, and Explore what worries her most - the last question often reveals that her real fear is pain, or her father dying in hospital, or money.",
        ],
      },
      {
        heading: "S - Strategy and summary: introduce palliative care as active treatment, not withdrawal",
        points: [
          "Move to the plan only when she signals readiness, and open with what can be done rather than what cannot: 'Although we cannot cure the cancer, there is a great deal we can do, and I want to tell you what that looks like.'",
          "Introduce the term deliberately and define it in her language: 'There is a branch of medicine called palliative care. It is a team - doctors, nurses, sometimes a counsellor - whose whole job is to keep your father comfortable, free of pain, eating what he enjoys, and at home as much as possible, for as long as he lives. It is not giving up; it is a different kind of treatment, and it starts now, not at the end.'",
          "Name the specific things the team will handle so that the word has content: pain control with regular medicines including morphine if needed, the nausea and vomiting, help with swallowing and small frequent meals, weakness, sleep, the mood of the whole family, and a plan for what to do at night if something changes.",
          "Explain the oncology referral honestly: 'I will also ask the cancer specialist to see him, because in some patients chemotherapy tablets or injections can slow the cancer and improve the symptoms for a while. Whether that is right for your father depends on how strong he is and what he wants, and the palliative care team works alongside them, not instead of them.'",
          "Agree the next concrete steps and say them back: 'So the plan is: I see your father with you on Thursday, we ask him how much he wants to know and take it at his pace, I refer him to the palliative care team and the oncologist in the same week, and here is my number for anything before then.' Offer a short written summary in the local language.",
          "Close by checking what she will do in the next hour, because the journey home is when people crash: 'Who is at home with you tonight? Would it help if I spoke to your brother on the phone as well?'",
        ],
      },
      {
        heading: "The collusion request: 'Please do not tell Appa'",
        points: [
          "Expect it, because most Indian families ask for it, and treat it as an act of love rather than an obstacle: 'I can see you want to protect him from this, and that comes from how much you care for him.'",
          "Explore the reason before arguing: 'What do you think would happen if he knew?' - the answer is usually 'he will give up', 'his heart will not take it' or 'he will stop eating', and each can be addressed directly.",
          "Explain gently what experience shows: 'In my experience, patients almost always know that something is seriously wrong - they feel it in their body. What hurts them is not the truth but being alone with it, unable to talk to the people they love. And there are decisions about his treatment that only he can make.'",
          "Offer a middle path that respects both his right to know and his right not to know: 'I will not force information on him. What I would like to do is sit with him, with you there, and ask him how much he wants to know about his illness. If he says he wants you to handle everything, I will respect that completely. If he asks me directly, I will not lie to him, because I could not look after him properly if I did.'",
          "State the professional and legal position plainly but kindly: a competent adult has the right to information about his own illness and to consent to or refuse treatment, the family cannot consent on his behalf while he can decide for himself, and the duty of confidentiality runs to the patient, so the family is told with his permission, express or implied.",
          "Agree the plan for the joint meeting: who will be present, what words will be used, that the doctor will lead and let the patient set the pace, and that the daughter can step out of the room if she cannot bear to be there.",
        ],
      },
    ],
    summaryStatement:
      "The closing summary to the daughter, said in her language and checked back: 'Meena, to sum up what we have talked about: the biopsy shows that your father has a cancer of the stomach, the scan shows it has spread to the liver and the lining of the abdomen, and it cannot be removed by an operation or cured. It can be treated, in the sense that we can keep him comfortable, free of pain and at home, and a specialist will see whether chemotherapy would help him for a time. On Thursday I will see him with you and ask him how much he wants to know, and I will refer him to the palliative care team and the oncologist this week. You have my number. You are not doing this alone.'",
    differential: [
      {
        diagnosis: "Stage IV gastric adenocarcinoma with hepatic and peritoneal metastases",
        forIt: "Three months of weight loss, early satiety and epigastric pain in a 72-year-old, an endoscopic biopsy reported as adenocarcinoma, multiple liver lesions and peritoneal deposits on contrast CT, and a surgical opinion of unresectability.",
        againstIt: "Nothing on the reports argues against it, but the candidate should confirm before the conversation that the histology report is final and not provisional, that the liver lesions were characterised on contrast phases rather than assumed, and that the surgical note is the considered opinion of the treating surgeon and not a passing remark.",
      },
      {
        diagnosis: "Primary gastric lymphoma",
        forIt: "A gastric mass with weight loss in an older adult, sometimes with bulky nodes and liver involvement, and it matters because even disseminated lymphoma is treatable and often curable, which would make this a different conversation.",
        againstIt: "The biopsy is reported as adenocarcinoma, a diagnosis made on morphology and confirmed where necessary by immunohistochemistry; lymphoma would show a diffuse lymphoid infiltrate with CD20 or CD45 positivity, and the report should be read for these words before the news is given.",
      },
      {
        diagnosis: "Locally advanced but potentially resectable gastric cancer over-staged by CT",
        forIt: "CT can call small peritoneal nodules and indeterminate liver lesions metastases when they are inflammatory or benign, and some centres perform staging laparoscopy before declaring peritoneal disease.",
        againstIt: "Multiple liver lesions together with peritoneal deposits and a small volume of ascites, read by a radiologist and reviewed by the surgeon, make over-staging unlikely; but if the daughter or the family asks for a second opinion, the correct response is to support it, not to be defensive.",
      },
    ],
    investigations: [
      {
        test: "Endoscopic biopsy with histopathology and, where palliative chemotherapy is being considered, HER2 and mismatch repair or PD-L1 testing",
        why: "Tissue diagnosis is what allows the word cancer to be used, and the molecular markers decide whether trastuzumab or immunotherapy can be added to palliative chemotherapy.",
        expected: "Moderately differentiated adenocarcinoma, intestinal or diffuse type; HER2 positive in about 15 to 20% of gastric cancers, which changes the oncologist's first-line regimen.",
      },
      {
        test: "Contrast-enhanced CT of the chest, abdomen and pelvis",
        why: "Staging determines resectability and therefore what is said in the room; the family will ask about the liver and the lungs by name.",
        expected: "Thickened antral wall, multiple hypodense liver lesions in both lobes, peritoneal nodularity with a small volume of ascites, and no lung deposits - stage IV disease.",
      },
      {
        test: "Complete blood count, liver and renal function, albumin and electrolytes",
        why: "To assess fitness for palliative chemotherapy, to detect anaemia from tumour bleeding, and to document nutritional status for the palliative team.",
        expected: "Haemoglobin 9.2 g/dL, albumin 2.9 g/dL, mildly raised alkaline phosphatase from liver involvement, normal creatinine; an albumin below 3 g/dL and weight loss above 10% are markers of poor tolerance of chemotherapy.",
      },
      {
        test: "ECOG performance status recorded at each visit",
        why: "Performance status, not the scan, decides whether palliative chemotherapy is offered; an ECOG of 3 or 4 means best supportive care alone.",
        expected: "ECOG 2 at present - ambulatory and capable of self-care but in bed less than half the day - which keeps the option of oncology treatment open if he wants it.",
      },
      {
        test: "Structured symptom assessment with the Edmonton Symptom Assessment System and a numerical pain score",
        why: "A baseline against which the palliative care team measures pain, nausea, appetite, fatigue, anxiety and depression, and a way of showing the family that symptoms are being taken as seriously as the tumour.",
        expected: "Epigastric pain 5 of 10, early satiety and nausea daily, poor appetite, fatigue and low mood, giving immediate targets for the first prescription: regular paracetamol, a step-2 or step-3 analgesic, metoclopramide before meals and a family-centred feeding plan.",
      },
      {
        test: "Tumour markers CEA and CA 19-9",
        why: "They have no role in diagnosis and should not be ordered to prove the diagnosis to the family; they may be used by the oncologist to follow response if chemotherapy is given.",
        expected: "Often raised; a rising level after treatment suggests progression, a normal level does not exclude the disease, and the family should not be given these numbers to worry over.",
      },
    ],
    management: [
      {
        heading: "The SPIKES protocol as a checklist for the examiner",
        points: [
          "**S - Setting:** privacy, seated, time protected, the right people present, the reports read beforehand.",
          "**P - Perception:** 'What do you understand so far?' before any information is given.",
          "**I - Invitation:** 'How much detail would you like?' and 'How does your father like to receive news?'",
          "**K - Knowledge:** warning shot, plain words, small chunks, silence between them, check understanding after each.",
          "**E - Emotions:** name the emotion, allow silence, use NURSE, answer 'how long' with honesty and a range.",
          "**S - Strategy and summary:** what can be done, palliative care introduced by name and defined, concrete next steps, a written summary, a phone number, and a check on who is going home with her.",
        ],
      },
      {
        heading: "Introducing palliative care and arranging it",
        points: [
          "Use the WHO definition in plain words: an approach that improves the quality of life of patients and families facing life-threatening illness through the prevention and relief of suffering by early identification, assessment and treatment of pain and other problems, physical, psychosocial and spiritual.",
          "Refer early and in parallel with oncology, because early palliative care alongside standard oncological treatment improved quality of life, reduced depression and, in the Temel trial, lengthened survival; a family physician can start the symptom plan the same day rather than waiting for the referral.",
          "Symptom control to start now: regular paracetamol with a weak opioid or low-dose oral morphine for the pain by the WHO ladder, metoclopramide 10 mg before meals for nausea and early satiety, a proton pump inhibitor for the tumour-related dyspepsia, small frequent soft meals chosen by the patient rather than forced feeding, and a laxative from the day an opioid is started.",
          "Plan for the predictable complications and tell the family what to expect: gastric outlet obstruction (endoscopic stent or venting gastrostomy), bleeding, ascites (paracentesis for comfort), and the loss of appetite and weight that will not be reversed by tonics, tube feeding or parenteral nutrition.",
          "Oral morphine is legally available in India under the NDPS Amendment Act 2014 through Recognised Medical Institutions, and the state palliative care policy or the nearest palliative care unit should be known to every family physician; give the family the address and telephone number of the nearest one.",
        ],
      },
      {
        heading: "Handling collusion and the patient's right to know",
        points: [
          "Collusion is the agreement between family and doctor to withhold the diagnosis from the patient; it is common in India, it is well meant, and it is not to be met with either a lecture or a signature.",
          "Acknowledge the love behind it, explore the fear, explain that patients usually know and suffer more from isolation than from truth, and propose the compromise: the doctor asks the patient how much he wants to know and follows his lead, does not force information, and does not lie to a direct question.",
          "Legal position: a competent adult patient has the right to information about his condition and to give or refuse consent for his own treatment; consent from a relative on behalf of a competent adult is not valid consent, and confidentiality is owed to the patient, so relatives are told with his permission rather than the other way around.",
          "Document the conversation with the daughter, the collusion request and the agreed plan for the joint meeting, and record after that meeting what the patient was told, in what words, what he understood and what he chose.",
        ],
      },
      {
        heading: "Advance care planning and end-of-life decisions in the Indian legal frame",
        points: [
          "Once the patient knows his diagnosis, open the conversation about goals: where he would like to be cared for, what matters most to him in the time he has, whether he would want to be admitted to intensive care or resuscitated if his heart stopped, and who should speak for him if he cannot.",
          "The Supreme Court in Common Cause v Union of India (2018) recognised the right to die with dignity, upheld passive euthanasia and gave legal standing to advance medical directives; the procedure was simplified in January 2023 so that a directive needs attestation by a notary or gazetted officer in the presence of two witnesses, and decisions to withdraw life-sustaining treatment are reviewed by a primary and a secondary medical board within a time limit rather than by a judicial magistrate.",
          "The ICMR consensus statement on limiting life-sustaining treatment and the Indian Association of Palliative Care position papers guide do-not-attempt-resuscitation decisions, which must be discussed with the patient where possible, recorded, signed and reviewed.",
          "Explain to the family that a decision not to escalate is not a decision to stop caring, and that death at home with a palliative team on call is usually what the patient chooses once he is asked.",
        ],
      },
      {
        heading: "Follow-up, documentation and looking after the family",
        points: [
          "Fix the joint consultation with the patient within the week, seat the daughter beside him, ask his permission before discussing results, and follow the same SPIKES sequence with him, at his pace.",
          "Write in the notes who was told, what words were used, what was understood, what questions were asked, what was agreed and who will do what by when; a bad news conversation that is not documented is repeated badly by the next doctor.",
          "Give the daughter one contact number, tell her what a night-time emergency looks like and where to go, and see her separately at least once for her own sleep, mood and coping; caregivers of patients dying at home are at high risk of depression and are rarely asked.",
          "Involve the wider family and, if the patient wishes, a religious or community figure, and prepare the family for the last days early rather than in the last hours.",
        ],
      },
    ],
    viva: [
      {
        q: "What does SPIKES stand for, and who described it?",
        a: "Setting up, Perception, Invitation, Knowledge, Emotions with empathic responses, and Strategy and summary; it was described by Baile, Buckman and colleagues in The Oncologist in 2000 as a six-step protocol for delivering bad news to cancer patients, and it is the framework most examiners expect.",
      },
      {
        q: "What is a warning shot and why does it matter?",
        a: "A short sentence that signals that bad news is coming - 'I am afraid the results are not what we hoped for' - followed by a pause, so that the listener can brace and shift from expecting good news to receiving bad; without it the diagnosis lands as an ambush and the listener hears nothing that follows.",
      },
      {
        q: "How would you answer a relative who asks how long the patient has?",
        a: "Honestly, in ranges, without a number: acknowledge that the question is important, say that no one can be exact, give a broad frame such as months rather than years, explain what would make it shorter or longer, and promise to keep them informed as things change. Precise figures are usually wrong, and the family will remember them forever.",
      },
      {
        q: "Define palliative care and say when it should begin.",
        a: "The WHO defines palliative care as an approach that improves the quality of life of patients and their families facing the problems associated with life-threatening illness, through the prevention and relief of suffering by early identification, impeccable assessment and treatment of pain and other problems - physical, psychosocial and spiritual. It should begin at diagnosis of a life-limiting illness alongside disease-directed treatment, not when that treatment stops.",
      },
      {
        q: "What is the evidence that early palliative care helps?",
        a: "Temel and colleagues in the New England Journal of Medicine in 2010 randomised patients with newly diagnosed metastatic non-small-cell lung cancer to early palliative care integrated with oncology or to standard care; the early palliative care group had better quality of life, less depression, less aggressive care at the end of life and a median survival of 11.6 versus 8.9 months. Later trials in other cancers confirmed the quality-of-life benefit.",
      },
      {
        q: "What is collusion, and how do you handle a request to hide the diagnosis from the patient?",
        a: "Collusion is a pact, usually between relatives and the doctor, to withhold the diagnosis or prognosis from the patient. It is handled by acknowledging the love behind it, exploring the fear, explaining that patients usually already suspect and suffer more from isolation than from truth, and negotiating a joint meeting in which the doctor asks the patient how much he wants to know and follows his lead, never forcing information and never lying to a direct question.",
      },
      {
        q: "What is the legal position on advance directives and withdrawal of treatment in India?",
        a: "In Common Cause v Union of India (2018) the Supreme Court held that the right to die with dignity is part of the right to life under Article 21, permitted passive euthanasia and gave legal validity to advance medical directives; in January 2023 the Court simplified the procedure, replacing the judicial magistrate with attestation by a notary or gazetted officer, and providing for a primary and a secondary medical board to review withdrawal of life-sustaining treatment within a time limit.",
      },
      {
        q: "How is oral morphine obtained for a patient at home in India?",
        a: "The NDPS Amendment Act 2014 created a class of Essential Narcotic Drugs, including oral morphine, that can be stocked and dispensed by a Recognised Medical Institution under a single state-level rule rather than multiple licences; a family physician can prescribe it, the patient or relative collects it from the institution, and a record is kept in the register. Availability remains patchy, so the family physician should know the nearest palliative care unit that stocks it.",
      },
    ],
    pitfalls: [
      "Reading the whole report aloud in one breath, with no warning shot and no pause, so that the daughter hears 'cancer' and nothing after it.",
      "Using adenocarcinoma, metastatic, unresectable and stage four as if they were plain words, or the opposite error of never using the word cancer at all.",
      "Saying 'there is nothing more we can do', which is untrue and abandons the family; and its cousin, the false reassurance that the oncologist may still cure him.",
      "Giving a precise number of months, which will be wrong and will be quoted back to you.",
      "Agreeing outright to hide the diagnosis from the father, or refusing bluntly and lecturing the daughter about autonomy; both lose the family, and the station is testing whether you can find the middle path.",
      "Standing, looking at the reports or the clock, handing over the papers and ending without a plan, a number to call or a check on who is going home with her.",
    ],
    references: [
      "Baile WF, Buckman R, Lenzi R et al. SPIKES - a six-step protocol for delivering bad news: application to the patient with cancer. The Oncologist, 2000",
      "Temel JS et al. Early palliative care for patients with metastatic non-small-cell lung cancer. New England Journal of Medicine, 2010",
      "World Health Organization. Palliative care fact sheet and definition, 2020",
      "Common Cause v Union of India, Supreme Court of India, 2018, and the clarifying order of January 2023 on advance medical directives",
      "Lordick F et al. Gastric cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Annals of Oncology, 2022",
      "Oxford Textbook of Palliative Medicine, 6th edition, 2021 - communication and breaking bad news",
      "Indian Association of Palliative Care. Position papers on end-of-life care and the NDPS Amendment Act 2014",
    ],
  },
];

const subject: Subject = {
  id: "geriatrics-ethics",
  title: "Geriatrics, Palliative Care & Ethics",
  blurb: "Geriatric assessment, falls, deprescribing, end-of-life care, consent, records and medico-legal duties.",
  icon: "Users",
  papers: ["I", "II"],
  topics,
  cases,
};

export default subject;
