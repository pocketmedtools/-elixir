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

topics.push({
  id: "dermatology-scabies-pediculosis",
  title: "Scabies and pediculosis, including treatment of the whole household",
  oneLiner:
    "Scabies is an intensely pruritic infestation by the mite Sarcoptes scabiei var. hominis in which nocturnal itch, burrows and papules in the finger webs, wrists, axillae, waist and genitalia, and a history of itching in other members of the household, make the diagnosis clinically, and the cure depends entirely on treating every contact simultaneously with topical permethrin 5 per cent or oral ivermectin plus decontamination of clothes and bedding.",
  frequency: "core",
  keywords: [
    "scabies",
    "Sarcoptes scabiei",
    "burrow",
    "nocturnal pruritus",
    "permethrin",
    "ivermectin",
    "benzyl benzoate",
    "crusted scabies",
    "Norwegian scabies",
    "pediculosis capitis",
    "pediculosis corporis",
    "pthirus pubis",
    "nits",
    "malathion",
    "post-scabetic itch",
    "dermoscopy delta sign",
    "impetigo",
    "household contacts",
  ],
  sections: [
    {
      heading: "The organism, the transmission and why the whole family matters",
      points: [
        "Scabies is caused by **Sarcoptes scabiei var. hominis**, an obligate human mite; the fertilised female burrows into the stratum corneum at about 2 mm a day and lays two to three eggs daily for a life of four to six weeks, and an ordinary patient carries only **10 to 15 adult mites** on the whole body.",
        "Transmission needs **prolonged skin-to-skin contact of 15 to 20 minutes**, which is why it runs through households, hostels, orphanages, prisons and shared beds rather than through casual handshakes; fomite transmission through shared clothes and bedding is real but secondary, except in crusted scabies where it is the dominant route.",
        "The itch is a **type IV delayed hypersensitivity reaction to mite antigen, faeces and eggs**, so a first infestation stays silent for **four to six weeks** before itching begins, while a re-infestation itches within one to four days - this incubation period is the reason asymptomatic contacts must still be treated.",
        "In Indian general practice scabies clusters in the rainy and winter months, in overcrowded housing and where water for washing is short; the classical exam history is **itching worse at night that disturbs sleep, with at least one other person in the house itching**.",
        "Scabies is a **WHO-recognised neglected tropical disease** since 2017, with an estimated 200 million people affected at any time, and in India it is one of the commonest reasons for a skin consultation in primary care.",
        "Untreated scabies in children is a major driver of **streptococcal pyoderma and therefore of acute post-streptococcal glomerulonephritis and acute rheumatic fever**, which is why treating scabies is a public health act and not merely a comfort measure.",
      ],
    },
    {
      heading: "Clinical features and the lesion vocabulary to use",
      points: [
        "Describe the eruption in the fixed order - **number, site and distribution, size, shape, surface, margin, colour, arrangement and secondary change**; in scabies the answer is multiple, symmetrical, 1 to 3 mm erythematous **papules and papulovesicles with excoriations and crusting**, discrete but grouped, in a characteristic distribution below the neck.",
        "The **pathognomonic primary lesion is the burrow**: a 3 to 10 mm greyish, serpiginous or S-shaped thread-like ridge with a minute vesicle or black dot (the mite) at one end, best seen on the finger webs, the sides of the fingers, the flexor wrists and the ulnar border of the hand.",
        "**Sites of predilection** - finger webs, flexor wrists, elbows, anterior axillary folds, periumbilical skin and waist, buttocks, areolae in women, and the penis and scrotum in men; **itchy papules or nodules on the glans, shaft and scrotum are almost diagnostic of scabies in an adult male**.",
        "**The head and neck are spared in adults but involved in infants and in the elderly**; in infants under two years the palms, soles, scalp and face are typically affected with vesicles, pustules and nodules, and secondary eczematisation is common.",
        "Secondary lesions dominate what you actually see: **excoriations proving the itch, honey-coloured crusts of secondary impetigo, eczematisation and post-inflammatory hyperpigmentation**; lichenification appears where the patient has scratched for months.",
        "**Nodular scabies** presents as firm, reddish-brown, intensely itchy 5 to 10 mm nodules on the scrotum, penis, groins and axillae that are a persistent hypersensitivity granuloma and may **persist for weeks to months after the mite is dead**, needing intralesional or potent topical steroid rather than more scabicide.",
      ],
    },
    {
      heading: "Variants that change the management",
      points: [
        "**Crusted (Norwegian) scabies** occurs in HIV infection, human T-lymphotropic virus 1 infection, lepromatous leprosy, malnutrition, Down syndrome, dementia, paralysis and long-term topical or systemic steroid use, and carries **thousands to millions of mites**.",
        "It presents as **thick, warty, fissured hyperkeratotic crusts on the hands, feet, elbows, scalp and under the nails, with gross nail dystrophy and subungual debris, and characteristically little or no itch**; it is highly contagious and is the usual index case behind an institutional outbreak.",
        "Crusted scabies needs **combined therapy - a keratolytic such as 5 per cent salicylic acid ointment, topical permethrin daily then twice weekly, plus oral ivermectin 200 microgram per kilogram on days 1, 2, 8, 9 and 15, extended to days 22 and 29 in severe disease** - and barrier nursing with gowns and gloves.",
        "**Scabies incognito** results from topical or systemic steroids that suppress the inflammatory response: the eruption becomes atypical and widespread, burrows are hard to find, and the itch is disproportionate to a bland-looking rash - a common trap in Indian practice where potent steroid combination creams are sold over the counter.",
        "**Bullous scabies** in the elderly mimics bullous pemphigoid, and **scabies in the very clean patient** may show only a handful of papules on the wrists; both are diagnosed by taking the household history seriously.",
        "**Secondary bacterial infection** with Staphylococcus aureus or Streptococcus pyogenes produces impetigo, ecthyma, folliculitis or cellulitis and must be treated with oral cloxacillin or amoxicillin-clavulanate before or alongside the scabicide.",
      ],
    },
    {
      heading: "Diagnosis, differential diagnosis and bedside tests",
      points: [
        "Scabies is a **clinical diagnosis** made on the triad of nocturnal itch, typical distribution and an affected household contact; the 2020 International Alliance for the Control of Scabies (IACS) criteria grade the diagnosis as confirmed (mite, egg or faecal pellet seen), clinical (burrows, typical genital or infant lesions) or suspected.",
        "**Skin scraping**: place a drop of mineral oil or 10 per cent potassium hydroxide on an unexcoriated burrow or papule, scrape with a number 15 blade held tangentially until pinpoint bleeding, and look under low power for **mites, oval eggs or brown faecal pellets (scybala)**.",
        "**Burrow ink test**: rub fountain-pen ink over a suspected burrow and wipe with alcohol - retained ink outlines a zig-zag track; **dermoscopy** shows the dark triangular head and mouthparts of the mite at the end of the burrow, the **delta-wing jet or hang-glider sign**.",
        "**Differential diagnosis** - papular urticaria from insect bites (grouped on exposed limbs, seropapules, no burrows, no genital lesions), atopic dermatitis (flexural, personal or family atopy, no household clustering), pediculosis corporis (lesions along seam-contact areas of the trunk, lice in clothing seams), contact dermatitis, dermatitis herpetiformis and papular eruption of HIV.",
        "**Post-scabetic itch** persists for two to four weeks after successful treatment because the antigen remains in the stratum corneum; treat it with emollients, a mild to moderate topical steroid and an oral antihistamine, and **do not repeat the scabicide**, because repeated application itself causes an irritant dermatitis that mimics failure.",
        "Suspect **true treatment failure** if new burrows or new papules appear more than two weeks after treatment, and then ask about the three real causes - untreated contacts, incorrect application technique, and failure to decontaminate clothing and bedding.",
      ],
    },
    {
      heading: "Treatment of the patient and of the whole household",
      points: [
        "**Permethrin 5 per cent cream is first line at all ages above two months and in pregnancy and lactation**: apply to the whole body from the neck down (including the face and scalp in infants, the elderly and the immunosuppressed), leave for **8 to 14 hours (overnight)**, wash off, and **repeat once after 7 days** to kill mites hatching from eggs that survive the first application.",
        "Application technique earns the mark: **apply after a bath to cool dry skin, cover every fold - behind the ears, umbilicus, natal cleft, genitalia, under the breasts and under the finger and toe nails after cutting them short - and reapply to the hands after every hand wash**; an adult needs about 30 grams per application.",
        "**Oral ivermectin 200 microgram per kilogram as a single dose repeated after 7 to 14 days** is preferred for institutional outbreaks, crusted scabies, treatment failures and where topical application cannot be supervised; it is **not recommended in children under 15 kilograms or under 5 years, and is avoided in pregnancy and lactation**. Take it with food to improve absorption.",
        "Alternatives - **benzyl benzoate 25 per cent lotion** (dilute to 12.5 per cent for children and 6.25 per cent for infants) applied on three consecutive nights, cheap and effective but stinging and irritant; **sulphur 5 to 10 per cent in petrolatum** for three consecutive nights, malodorous and staining but the safest option in infants under two months and in pregnancy; **crotamiton 10 per cent**, which is antipruritic but least effective; **lindane is no longer recommended** because of neurotoxicity.",
        "**Treat every household member and every intimate or close physical contact of the last six weeks on the same day, whether or not they itch**, because contacts are in the asymptomatic incubation period and will otherwise re-infest the index case - this single sentence is the most examined point in the topic.",
        "**Decontamination**: machine wash clothes, towels and bed linen used in the last three days in hot water above 60 degrees Celsius and dry in the sun or a hot dryer, or iron them; items that cannot be washed should be **sealed in a plastic bag for 72 hours to seven days**, since the mite dies within 2 to 3 days away from human skin. Fumigation of the house is unnecessary.",
        "Also treat the complications: **oral antihistamine (hydroxyzine 25 mg at night or cetirizine 10 mg) for itch, emollients, and oral antibiotics for pyoderma**; screen the child for haematuria three weeks later if streptococcal impetigo was present, and check for other sexually transmitted infections when scabies is acquired sexually.",
      ],
    },
    {
      heading: "Pediculosis: head, body and pubic lice",
      points: [
        "**Pediculosis capitis** is caused by Pediculus humanus capitis, spreads by head-to-head contact and shared combs in schoolgirls, and presents with occipital and retroauricular itch, excoriation, occipital lymphadenopathy and secondary impetigo; the diagnosis is confirmed by **finding a live louse, since nits (egg cases) firmly cemented to the hair shaft may persist long after cure**.",
        "Treat head lice with **permethrin 1 per cent cream rinse applied to damp hair for 10 minutes, or 5 per cent for 8 hours, repeated after 7 days**, or **malathion 0.5 per cent lotion for 8 to 12 hours**; add **wet combing with a fine-toothed nit comb and conditioner every 3 to 4 days for two weeks**, and treat affected household members. Oral ivermectin 200 microgram per kilogram on days 1 and 8 is used for resistant cases.",
        "**Pediculosis corporis** is a disease of poverty and homelessness: the louse **lives and lays eggs in the seams of clothing, not on the body**, and produces itchy excoriated papules and, over years, the pigmented lichenified back of **vagabond's disease**; treatment is **hot washing, ironing or discarding the clothing plus personal hygiene**, with permethrin to the body only if lice are found on skin.",
        "The body louse is a **vector of epidemic typhus (Rickettsia prowazekii), trench fever (Bartonella quintana) and relapsing fever (Borrelia recurrentis)** - the head louse and pubic louse transmit no disease, and this contrast is a standard viva question.",
        "**Pediculosis pubis** is caused by Pthirus pubis, is sexually transmitted, causes itching in the pubic area with **bluish-grey macules (maculae ceruleae)** and rust-coloured specks of louse faeces on the underclothes; treat with permethrin 1 per cent or 5 per cent, treat sexual partners of the last month, and **screen for other sexually transmitted infections including HIV, syphilis and gonorrhoea**.",
        "**Phthiriasis palpebrarum** (pubic lice on the eyelashes in a child) raises the question of sexual abuse and is treated with **thick petrolatum to the lid margins twice daily for 8 to 10 days plus mechanical removal**, never with a neurotoxic pediculicide near the eye.",
      ],
    },
  ],
  tables: [
    {
      heading: "Scabicides: dose, contact time and safety",
      columns: ["Drug", "Strength and route", "Contact time and repeat", "Safe in", "Cautions"],
      rows: [
        ["Permethrin", "5 per cent cream, topical", "8 to 14 hours overnight, repeat day 7", "Above 2 months, pregnancy, lactation", "Costliest topical; mild burning"],
        ["Ivermectin", "200 microgram/kg oral", "Single dose, repeat day 7 to 14", "Adults, children above 15 kg", "Avoid under 5 years, pregnancy, lactation"],
        ["Benzyl benzoate", "25 per cent lotion (dilute for children)", "3 consecutive nights", "Adults, older children", "Stings on excoriated skin, irritant dermatitis"],
        ["Sulphur", "5 to 10 per cent in petrolatum", "3 consecutive nights", "Infants under 2 months, pregnancy", "Malodorous, stains clothes"],
        ["Crotamiton", "10 per cent cream or lotion", "2 to 5 consecutive nights", "Children, antipruritic", "Least effective as a scabicide"],
        ["Lindane", "1 per cent lotion", "8 hours, single application", "Not recommended", "Neurotoxicity, seizures, aplastic anaemia"],
      ],
    },
    {
      heading: "The three pediculoses compared",
      columns: ["Feature", "Pediculosis capitis", "Pediculosis corporis", "Pediculosis pubis"],
      rows: [
        ["Organism", "Pediculus humanus capitis", "Pediculus humanus corporis", "Pthirus pubis (crab louse)"],
        ["Where the louse lives", "Scalp hair, close to the skin", "Seams of clothing", "Pubic, axillary, beard hair, eyelashes"],
        ["Typical patient", "School child, girls more than boys", "Homeless, destitute, unwashed clothing", "Sexually active adult"],
        ["Key sign", "Nits cemented to hair, occipital nodes", "Excoriated back, vagabond pigmentation", "Maculae ceruleae, rusty specks on underwear"],
        ["Vector of disease", "No", "Epidemic typhus, trench fever, relapsing fever", "No"],
        ["Treatment", "Permethrin 1 per cent plus wet combing, repeat day 7", "Wash, iron or discard clothing; hygiene", "Permethrin plus partner treatment and STI screen"],
      ],
    },
  ],
  redFlags: [
    "Thick hyperkeratotic crusts with nail dystrophy and little itch - crusted scabies; isolate, investigate for HIV or other immunosuppression, and start combined ivermectin and topical therapy.",
    "Fever, spreading erythema, tenderness or lymphangitis over excoriated scabies - cellulitis needing systemic antibiotics the same day.",
    "Puffy eyelids, smoky urine or hypertension two to three weeks after impetiginised scabies in a child - acute post-streptococcal glomerulonephritis; check urine and blood pressure.",
    "An institutional or hostel outbreak, or a bedridden patient in a nursing home - mass treatment of all residents and staff on a single day is required, not case-by-case treatment.",
    "Scabies in an infant with failure to thrive, or widespread atypical scabies in an adult - test for HIV and for underlying immunosuppression.",
    "Pubic lice on the eyelashes of a prepubertal child - evaluate for sexual abuse under the POCSO framework.",
  ],
  pearls: [
    "The mark-carrying sentence is: treat all household and close contacts simultaneously on the same day, whether or not they itch, and decontaminate clothes and bedding.",
    "Itch that wakes the patient at night plus another itching person in the house is scabies until proved otherwise, even without a visible burrow.",
    "Itchy papules or nodules on the scrotum or penis in a man, and on the areolae in a woman, are close to diagnostic of scabies.",
    "Adults are spared above the neck, infants are not - always treat the scalp and face in a baby under two years.",
    "Post-scabetic itch lasts two to four weeks and is treated with emollients, a mild steroid and an antihistamine, not with more scabicide.",
    "Permethrin needs a second application on day 7 because it is not fully ovicidal; a single application is the commonest reason for apparent treatment failure.",
    "Nits alone do not mean active head lice - look for a live, moving louse before re-treating.",
    "Crusted scabies is not itchy, and the patient who does not itch is the one who infests the whole ward.",
  ],
  theory: [
    {
      id: "dermatology-scabies-pediculosis-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 24-year-old man presents with intense itching worse at night for three weeks. His wife and two children are also itching. Describe the clinical features, diagnosis and complete management of this condition including the household.",
      openingLines: [
        "This is scabies, an infestation of the stratum corneum by the mite Sarcoptes scabiei var. hominis, transmitted by prolonged skin-to-skin contact, and presenting with nocturnal pruritus, burrows and papules in a characteristic distribution with clustering of cases in a household.",
        "The itch is a delayed type IV hypersensitivity response to mite antigen, appearing four to six weeks after a first infestation and within one to four days on re-infestation, which is why asymptomatic contacts must also be treated.",
      ],
      answer: [
        {
          heading: "1. Clinical features",
          points: [
            "Symptom: generalised itching that is characteristically worse at night and on warming in bed, disturbing sleep, with a history of similar itching in family members or bed partners.",
            "Primary lesions: the burrow - a 3 to 10 mm greyish serpiginous ridge with a vesicle or black dot at one end - along with 1 to 3 mm erythematous papules and papulovesicles.",
            "Distribution: finger webs, sides of fingers, flexor wrists, elbows, anterior axillary folds, periumbilical area and waist, buttocks, areolae in women, penis and scrotum in men; head and neck spared in adults but involved in infants.",
            "Secondary lesions: excoriations, eczematisation, honey-coloured crusts of impetigo, lichenification and post-inflammatory hyperpigmentation.",
            "Variants: nodular scabies on the genitalia, crusted (Norwegian) scabies in the immunosuppressed, scabies incognito after topical steroid use, and bullous scabies in the elderly.",
          ],
        },
        {
          heading: "2. Diagnosis",
          points: [
            "Clinical, using the IACS 2020 criteria: confirmed when a mite, egg or faecal pellet is demonstrated; clinical when burrows or typical genital or infant lesions are present; suspected on typical distribution with a contact history.",
            "Skin scraping in mineral oil or 10 per cent KOH from an unexcoriated burrow, showing mites, eggs or scybala.",
            "Burrow ink test and dermoscopy showing the delta-wing jet sign of the mite head at the end of a burrow.",
            "Differential diagnosis: papular urticaria, atopic dermatitis, pediculosis corporis, contact dermatitis, dermatitis herpetiformis and papular pruritic eruption of HIV.",
          ],
        },
        {
          heading: "3. Treatment of the patient",
          points: [
            "Permethrin 5 per cent cream to the whole body from the neck down after a bath, left for 8 to 14 hours overnight, washed off, and repeated once after 7 days; about 30 g per adult application, reapplied to the hands after washing.",
            "Alternatives: oral ivermectin 200 microgram per kilogram on day 1 and repeated day 7 to 14; benzyl benzoate 25 per cent on three consecutive nights; sulphur 5 to 10 per cent ointment for infants under two months and in pregnancy.",
            "Symptomatic treatment: emollients, oral antihistamine such as hydroxyzine 25 mg at night, and a moderate topical corticosteroid for eczematisation and for post-scabetic itch.",
            "Secondary pyoderma: oral cloxacillin 500 mg six hourly or amoxicillin-clavulanate for five to seven days; screen for haematuria and hypertension three weeks later.",
          ],
        },
        {
          heading: "4. Treatment of the household and environment",
          points: [
            "All household members, bed partners and close physical contacts of the previous six weeks are treated on the same day, whether or not they are symptomatic.",
            "Clothes, towels and bed linen of the last three days are washed at above 60 degrees Celsius and sun dried or ironed; non-washable items are sealed in a plastic bag for 72 hours to one week.",
            "The mite survives only 2 to 3 days off the host, so fumigation and disinfection of the house are unnecessary.",
            "Counsel that itching may persist two to four weeks after cure and does not mean failure; review at two weeks and treat again only if new burrows or new papules have appeared.",
          ],
        },
        {
          heading: "5. Public health note",
          points: [
            "Scabies is a WHO neglected tropical disease; mass drug administration with ivermectin is used in high-prevalence communities and institutional outbreaks.",
            "Control of scabies reduces streptococcal pyoderma and hence acute post-streptococcal glomerulonephritis and acute rheumatic fever in children.",
          ],
        },
      ],
      mustDraw: [
        "A figure of the body showing the sites of predilection of scabies in an adult and in an infant.",
        "A table of scabicides with strength, contact time, repeat schedule and safety in pregnancy and infancy.",
      ],
      markSplit: [
        { part: "Clinical features and variants", marks: 3 },
        { part: "Diagnosis and differential diagnosis", marks: 2 },
        { part: "Treatment of the patient", marks: 3 },
        { part: "Household treatment and decontamination", marks: 2 },
      ],
      keywords: ["scabies", "permethrin", "ivermectin", "burrow", "household contacts", "nocturnal itch"],
    },
    {
      id: "dermatology-scabies-pediculosis-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on crusted (Norwegian) scabies.",
      openingLines: [
        "Crusted or Norwegian scabies is a hyperinfestation with Sarcoptes scabiei carrying thousands to millions of mites, occurring in immunosuppressed, neurologically impaired or malnourished hosts who cannot mount an effective scratch or immune response.",
        "It is extremely contagious and is typically the index case behind an outbreak in a family, hospital ward or old age home.",
      ],
      answer: [
        {
          heading: "Predisposing factors",
          points: [
            "HIV infection, HTLV-1 infection, lymphoma and organ transplantation.",
            "Lepromatous leprosy, Down syndrome, dementia, paralysis, spinal cord injury and severe malnutrition.",
            "Prolonged topical or systemic corticosteroid use, including over-the-counter steroid combination creams.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Thick, warty, fissured hyperkeratotic crusts on hands, feet, elbows, knees, scalp and ears, with generalised scaling that may progress to erythroderma.",
            "Gross nail thickening with subungual hyperkeratotic debris that harbours mites.",
            "Itch is mild or absent, which delays diagnosis; a foul smell and secondary bacterial infection are common.",
            "Complications: sepsis from Staphylococcus aureus or Streptococcus pyogenes bacteraemia, which is the main cause of death.",
          ],
        },
        {
          heading: "Diagnosis and treatment",
          points: [
            "Scraping of crust shows innumerable mites and eggs; skin biopsy shows mites in a thickened hyperkeratotic stratum corneum.",
            "Combined therapy: oral ivermectin 200 microgram per kilogram on days 1, 2, 8, 9 and 15, extended to days 22 and 29 in severe cases.",
            "Topical permethrin 5 per cent daily for seven days then twice weekly until cure, with 5 per cent salicylic acid or urea ointment as a keratolytic to allow penetration.",
            "Barrier nursing with gloves and gowns, isolation, decontamination of linen, and simultaneous treatment of all contacts and health care staff.",
            "Investigate for the underlying immunosuppression, particularly HIV testing.",
          ],
        },
      ],
      markSplit: [
        { part: "Definition and predisposing factors", marks: 1 },
        { part: "Clinical features and complications", marks: 2 },
        { part: "Diagnosis and combined treatment", marks: 2 },
      ],
      keywords: ["crusted scabies", "Norwegian scabies", "ivermectin", "keratolytic", "HIV", "outbreak"],
    },
  ],
  mcqs: [
    {
      id: "dermatology-scabies-pediculosis-q1",
      stem: "A 30-year-old man is treated for scabies with a single overnight application of permethrin 5 per cent cream. Three weeks later he returns with fresh burrows in the finger webs. His wife, who also itches, was never treated. What is the single most important reason for the failure?",
      options: [
        "Permethrin resistance in the local mite population",
        "Untreated household contacts together with omission of the day 7 repeat application",
        "Inadequate contact time of the cream on the skin",
        "Persistence of mite antigen causing post-scabetic itch",
        "Development of crusted scabies",
      ],
      answer: 1,
      explanation:
        "New burrows three weeks later mean live mites, and the two commonest causes are an untreated contact who re-infests the patient and the missed second application on day 7, since permethrin is not reliably ovicidal. Permethrin resistance is documented but rare and should never be the first explanation when a contact is admittedly untreated. Inadequate contact time is possible but he did leave it overnight, which is within the 8 to 14 hour range. Post-scabetic itch is itch without new lesions, so fresh burrows exclude it. Crusted scabies presents with thick hyperkeratotic crusts and little itch, not a few new burrows.",
      difficulty: "easy",
    },
    {
      id: "dermatology-scabies-pediculosis-q2",
      stem: "A 6-week-old exclusively breastfed infant has itchy vesicles and pustules on the palms, soles and scalp; the mother has itchy papules on her wrists and areolae. Which treatment is most appropriate for the infant?",
      options: [
        "Oral ivermectin 200 microgram per kilogram single dose",
        "Lindane 1 per cent lotion for 8 hours",
        "Sulphur 5 per cent in petrolatum on three consecutive nights",
        "Benzyl benzoate 25 per cent lotion on three consecutive nights",
        "Crotamiton 10 per cent cream for two nights only",
      ],
      answer: 2,
      explanation:
        "Below two months of age permethrin is not licensed and sulphur 5 to 10 per cent in petrolatum applied for three consecutive nights is the accepted safe scabicide, covering the scalp and face as well since infants are affected above the neck. Oral ivermectin is contraindicated under 15 kilograms and under five years. Lindane is neurotoxic and is no longer recommended at any age, least of all in a neonate with a high surface-area-to-weight ratio. Benzyl benzoate 25 per cent is far too irritant for a six-week-old and would need dilution to 6.25 per cent at best. Crotamiton is antipruritic but is the least effective scabicide and would not clear the infestation.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q3",
      stem: "A 55-year-old bedridden man from an old age home has thick warty crusts on the hands, feet and elbows with dystrophic nails and generalised scaling, but complains of almost no itching. Four staff members have developed itchy papules. What is the diagnosis and the correct treatment?",
      options: [
        "Psoriasis vulgaris - potent topical steroid under occlusion",
        "Crusted scabies - oral ivermectin on days 1, 2, 8, 9 and 15 plus topical permethrin and a keratolytic",
        "Ordinary scabies - a single application of permethrin 5 per cent",
        "Chronic eczema - emollients and a moderate topical steroid",
        "Palmoplantar keratoderma - urea 20 per cent ointment",
      ],
      answer: 1,
      explanation:
        "Hyperkeratotic crusts with nail dystrophy, minimal itch and an outbreak among carers is crusted scabies, which carries an enormous mite burden and needs multiple doses of oral ivermectin combined with repeated topical permethrin and a keratolytic to let the scabicide penetrate the crust. Psoriasis would show silvery scale, Auspitz sign and typical extensor plaques, and treating this patient with a potent steroid would worsen the infestation. A single permethrin application is grossly inadequate for a mite load of thousands. Eczema and keratoderma do not cause an outbreak of itching among staff, which is the clue that this is an infestation.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q4",
      stem: "A 32-year-old destitute man has intensely itchy excoriated papules and lichenified hyperpigmented skin over the back and shoulders. No lesions are seen in the finger webs or genitalia. Examination of his shirt shows lice and eggs in the seams. Which complication is he specifically at risk of?",
      options: [
        "Acute post-streptococcal glomerulonephritis",
        "Epidemic typhus and trench fever",
        "Acquired immunodeficiency from lymphatic spread",
        "Bartonella henselae cat scratch disease",
        "Chagas disease",
      ],
      answer: 1,
      explanation:
        "Lice living in clothing seams is pediculosis corporis, and Pediculus humanus corporis is the vector of epidemic typhus caused by Rickettsia prowazekii, trench fever caused by Bartonella quintana and louse-borne relapsing fever caused by Borrelia recurrentis. Post-streptococcal glomerulonephritis follows streptococcal pyoderma, which is a complication of scabies and impetigo rather than a vector-borne consequence of body lice. Lice do not cause immunodeficiency. Cat scratch disease is Bartonella henselae transmitted by cats and their fleas, not by lice. Chagas disease is transmitted by the reduviid bug in Latin America.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q5",
      stem: "A 28-year-old woman treated correctly for scabies with permethrin on day 0 and day 7 returns on day 18 with continued itching. Examination shows healing excoriations and post-inflammatory hyperpigmentation but no burrows and no new papules. Her family was treated. What is the correct action?",
      options: [
        "Repeat permethrin for a third application",
        "Give oral ivermectin as she has failed topical therapy",
        "Reassure and treat with emollients, a moderate topical steroid and an oral antihistamine",
        "Take a skin biopsy to look for mites",
        "Start oral prednisolone 30 mg daily for two weeks",
      ],
      answer: 2,
      explanation:
        "Itch without new burrows or new papules two to four weeks after adequate treatment is post-scabetic itch, a hypersensitivity response to retained mite antigen in the stratum corneum, and it is managed with emollients, a moderate topical corticosteroid and an antihistamine. A third application of permethrin adds irritant dermatitis that perpetuates the itch and is the classic wrong answer. Ivermectin is reserved for genuine failure, which requires objective new lesions. A biopsy is unnecessary when the clinical picture is clear and no active lesions exist. Systemic steroids are disproportionate and risk converting a residual infestation into crusted scabies.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "dermatology-scabies-pediculosis-c1",
      front: "Incubation period of scabies and why it matters.",
      back: "Four to six weeks in a first infestation (one to four days on re-infestation) because the itch is a type IV hypersensitivity reaction - so asymptomatic contacts are already infested and must be treated.",
    },
    {
      id: "dermatology-scabies-pediculosis-c2",
      front: "Pathognomonic lesion of scabies and where to look for it.",
      back: "The burrow - a 3 to 10 mm greyish serpiginous ridge with a vesicle or black dot at one end, on the finger webs, sides of fingers, flexor wrists and ulnar border of the hand.",
    },
    {
      id: "dermatology-scabies-pediculosis-c3",
      front: "Permethrin regimen for scabies.",
      back: "5 per cent cream to the whole body neck down (whole body in infants), leave 8 to 14 hours overnight, wash off, repeat on day 7; about 30 g per adult application, reapply to hands after washing.",
    },
    {
      id: "dermatology-scabies-pediculosis-c4",
      front: "Ivermectin dose and contraindications in scabies.",
      back: "200 microgram per kilogram orally with food, repeated day 7 to 14; avoid under 15 kg or 5 years, and in pregnancy and lactation.",
    },
    {
      id: "dermatology-scabies-pediculosis-c5",
      front: "Scabicide of choice under two months of age and in pregnancy.",
      back: "Sulphur 5 to 10 per cent in petrolatum for three consecutive nights (permethrin 5 per cent is also accepted in pregnancy and above two months).",
    },
    {
      id: "dermatology-scabies-pediculosis-c6",
      front: "Environmental decontamination in scabies.",
      back: "Wash linen and clothes of the last 3 days above 60 degrees Celsius, sun dry or iron; seal non-washables in a bag for 72 hours to a week. The mite dies in 2 to 3 days off the host, so fumigation is not needed.",
    },
    {
      id: "dermatology-scabies-pediculosis-c7",
      front: "Post-scabetic itch versus treatment failure.",
      back: "Post-scabetic itch: itching for 2 to 4 weeks with no new burrows or papules - treat with emollients, mild steroid and antihistamine. Failure: new burrows or papules after 2 weeks - re-treat and find the untreated contact.",
    },
    {
      id: "dermatology-scabies-pediculosis-c8",
      front: "Which louse transmits systemic disease, and which diseases?",
      back: "Only the body louse (Pediculus humanus corporis) - epidemic typhus (Rickettsia prowazekii), trench fever (Bartonella quintana) and relapsing fever (Borrelia recurrentis).",
    },
    {
      id: "dermatology-scabies-pediculosis-c9",
      front: "Treatment of pediculosis corporis.",
      back: "Treat the clothing, not the skin - hot wash, iron or discard clothing and improve hygiene; permethrin to the body only if lice are found on the skin.",
    },
    {
      id: "dermatology-scabies-pediculosis-c10",
      front: "Maculae ceruleae - what and where?",
      back: "Bluish-grey macules at the site of pubic louse bites on the lower abdomen, thighs and buttocks in pediculosis pubis.",
    },
  ],
  references: [
    "IADVL Textbook of Dermatology, 5th edition, 2022 - scabies and other infestations",
    "International Alliance for the Control of Scabies (IACS) 2020 Consensus Criteria for the Diagnosis of Scabies",
    "WHO Informal Consultation on a Framework for Scabies Control, 2019, and WHO NTD Road Map 2021-2030",
    "British Association of Dermatologists guideline on the management of scabies, 2024",
    "Centers for Disease Control and Prevention, Parasites - Scabies and Lice, 2024 update",
    "Neena Khanna, Illustrated Synopsis of Dermatology and Sexually Transmitted Diseases, 6th edition, 2020",
  ],
});

topics.push({
  id: "dermatology-scabies-pediculosis",
  title: "Scabies and pediculosis, including treatment of the whole household",
  oneLiner:
    "Scabies is an intensely pruritic infestation by the mite Sarcoptes scabiei var. hominis in which nocturnal itch, burrows and papules in the finger webs, wrists, axillae, waist and genitalia, and a history of itching in other members of the household, make the diagnosis clinically, and the cure depends entirely on treating every contact simultaneously with topical permethrin 5 per cent or oral ivermectin plus decontamination of clothes and bedding.",
  frequency: "core",
  keywords: [
    "scabies",
    "Sarcoptes scabiei",
    "burrow",
    "nocturnal pruritus",
    "permethrin",
    "ivermectin",
    "benzyl benzoate",
    "crusted scabies",
    "Norwegian scabies",
    "pediculosis capitis",
    "pediculosis corporis",
    "pthirus pubis",
    "nits",
    "malathion",
    "post-scabetic itch",
    "dermoscopy delta sign",
    "impetigo",
    "household contacts",
  ],
  sections: [
    {
      heading: "The organism, the transmission and why the whole family matters",
      points: [
        "Scabies is caused by **Sarcoptes scabiei var. hominis**, an obligate human mite; the fertilised female burrows into the stratum corneum at about 2 mm a day and lays two to three eggs daily for a life of four to six weeks, and an ordinary patient carries only **10 to 15 adult mites** on the whole body.",
        "Transmission needs **prolonged skin-to-skin contact of 15 to 20 minutes**, which is why it runs through households, hostels, orphanages, prisons and shared beds rather than through casual handshakes; fomite transmission through shared clothes and bedding is real but secondary, except in crusted scabies where it is the dominant route.",
        "The itch is a **type IV delayed hypersensitivity reaction to mite antigen, faeces and eggs**, so a first infestation stays silent for **four to six weeks** before itching begins, while a re-infestation itches within one to four days - this incubation period is the reason asymptomatic contacts must still be treated.",
        "In Indian general practice scabies clusters in the rainy and winter months, in overcrowded housing and where water for washing is short; the classical exam history is **itching worse at night that disturbs sleep, with at least one other person in the house itching**.",
        "Scabies is a **WHO-recognised neglected tropical disease** since 2017, with an estimated 200 million people affected at any time, and in India it is one of the commonest reasons for a skin consultation in primary care.",
        "Untreated scabies in children is a major driver of **streptococcal pyoderma and therefore of acute post-streptococcal glomerulonephritis and acute rheumatic fever**, which is why treating scabies is a public health act and not merely a comfort measure.",
      ],
    },
    {
      heading: "Clinical features and the lesion vocabulary to use",
      points: [
        "Describe the eruption in the fixed order - **number, site and distribution, size, shape, surface, margin, colour, arrangement and secondary change**; in scabies the answer is multiple, symmetrical, 1 to 3 mm erythematous **papules and papulovesicles with excoriations and crusting**, discrete but grouped, in a characteristic distribution below the neck.",
        "The **pathognomonic primary lesion is the burrow**: a 3 to 10 mm greyish, serpiginous or S-shaped thread-like ridge with a minute vesicle or black dot (the mite) at one end, best seen on the finger webs, the sides of the fingers, the flexor wrists and the ulnar border of the hand.",
        "**Sites of predilection** - finger webs, flexor wrists, elbows, anterior axillary folds, periumbilical skin and waist, buttocks, areolae in women, and the penis and scrotum in men; **itchy papules or nodules on the glans, shaft and scrotum are almost diagnostic of scabies in an adult male**.",
        "**The head and neck are spared in adults but involved in infants and in the elderly**; in infants under two years the palms, soles, scalp and face are typically affected with vesicles, pustules and nodules, and secondary eczematisation is common.",
        "Secondary lesions dominate what you actually see: **excoriations proving the itch, honey-coloured crusts of secondary impetigo, eczematisation and post-inflammatory hyperpigmentation**; lichenification appears where the patient has scratched for months.",
        "**Nodular scabies** presents as firm, reddish-brown, intensely itchy 5 to 10 mm nodules on the scrotum, penis, groins and axillae that are a persistent hypersensitivity granuloma and may **persist for weeks to months after the mite is dead**, needing intralesional or potent topical steroid rather than more scabicide.",
      ],
    },
    {
      heading: "Variants that change the management",
      points: [
        "**Crusted (Norwegian) scabies** occurs in HIV infection, human T-lymphotropic virus 1 infection, lepromatous leprosy, malnutrition, Down syndrome, dementia, paralysis and long-term topical or systemic steroid use, and carries **thousands to millions of mites**.",
        "It presents as **thick, warty, fissured hyperkeratotic crusts on the hands, feet, elbows, scalp and under the nails, with gross nail dystrophy and subungual debris, and characteristically little or no itch**; it is highly contagious and is the usual index case behind an institutional outbreak.",
        "Crusted scabies needs **combined therapy - a keratolytic such as 5 per cent salicylic acid ointment, topical permethrin daily then twice weekly, plus oral ivermectin 200 microgram per kilogram on days 1, 2, 8, 9 and 15, extended to days 22 and 29 in severe disease** - and barrier nursing with gowns and gloves.",
        "**Scabies incognito** results from topical or systemic steroids that suppress the inflammatory response: the eruption becomes atypical and widespread, burrows are hard to find, and the itch is disproportionate to a bland-looking rash - a common trap in Indian practice where potent steroid combination creams are sold over the counter.",
        "**Bullous scabies** in the elderly mimics bullous pemphigoid, and **scabies in the very clean patient** may show only a handful of papules on the wrists; both are diagnosed by taking the household history seriously.",
        "**Secondary bacterial infection** with Staphylococcus aureus or Streptococcus pyogenes produces impetigo, ecthyma, folliculitis or cellulitis and must be treated with oral cloxacillin or amoxicillin-clavulanate before or alongside the scabicide.",
      ],
    },
    {
      heading: "Diagnosis, differential diagnosis and bedside tests",
      points: [
        "Scabies is a **clinical diagnosis** made on the triad of nocturnal itch, typical distribution and an affected household contact; the 2020 International Alliance for the Control of Scabies (IACS) criteria grade the diagnosis as confirmed (mite, egg or faecal pellet seen), clinical (burrows, typical genital or infant lesions) or suspected.",
        "**Skin scraping**: place a drop of mineral oil or 10 per cent potassium hydroxide on an unexcoriated burrow or papule, scrape with a number 15 blade held tangentially until pinpoint bleeding, and look under low power for **mites, oval eggs or brown faecal pellets (scybala)**.",
        "**Burrow ink test**: rub fountain-pen ink over a suspected burrow and wipe with alcohol - retained ink outlines a zig-zag track; **dermoscopy** shows the dark triangular head and mouthparts of the mite at the end of the burrow, the **delta-wing jet or hang-glider sign**.",
        "**Differential diagnosis** - papular urticaria from insect bites (grouped on exposed limbs, seropapules, no burrows, no genital lesions), atopic dermatitis (flexural, personal or family atopy, no household clustering), pediculosis corporis (lesions along seam-contact areas of the trunk, lice in clothing seams), contact dermatitis, dermatitis herpetiformis and papular eruption of HIV.",
        "**Post-scabetic itch** persists for two to four weeks after successful treatment because the antigen remains in the stratum corneum; treat it with emollients, a mild to moderate topical steroid and an oral antihistamine, and **do not repeat the scabicide**, because repeated application itself causes an irritant dermatitis that mimics failure.",
        "Suspect **true treatment failure** if new burrows or new papules appear more than two weeks after treatment, and then ask about the three real causes - untreated contacts, incorrect application technique, and failure to decontaminate clothing and bedding.",
      ],
    },
    {
      heading: "Treatment of the patient and of the whole household",
      points: [
        "**Permethrin 5 per cent cream is first line at all ages above two months and in pregnancy and lactation**: apply to the whole body from the neck down (including the face and scalp in infants, the elderly and the immunosuppressed), leave for **8 to 14 hours (overnight)**, wash off, and **repeat once after 7 days** to kill mites hatching from eggs that survive the first application.",
        "Application technique earns the mark: **apply after a bath to cool dry skin, cover every fold - behind the ears, umbilicus, natal cleft, genitalia, under the breasts and under the finger and toe nails after cutting them short - and reapply to the hands after every hand wash**; an adult needs about 30 grams per application.",
        "**Oral ivermectin 200 microgram per kilogram as a single dose repeated after 7 to 14 days** is preferred for institutional outbreaks, crusted scabies, treatment failures and where topical application cannot be supervised; it is **not recommended in children under 15 kilograms or under 5 years, and is avoided in pregnancy and lactation**. Take it with food to improve absorption.",
        "Alternatives - **benzyl benzoate 25 per cent lotion** (dilute to 12.5 per cent for children and 6.25 per cent for infants) applied on three consecutive nights, cheap and effective but stinging and irritant; **sulphur 5 to 10 per cent in petrolatum** for three consecutive nights, malodorous and staining but the safest option in infants under two months and in pregnancy; **crotamiton 10 per cent**, which is antipruritic but least effective; **lindane is no longer recommended** because of neurotoxicity.",
        "**Treat every household member and every intimate or close physical contact of the last six weeks on the same day, whether or not they itch**, because contacts are in the asymptomatic incubation period and will otherwise re-infest the index case - this single sentence is the most examined point in the topic.",
        "**Decontamination**: machine wash clothes, towels and bed linen used in the last three days in hot water above 60 degrees Celsius and dry in the sun or a hot dryer, or iron them; items that cannot be washed should be **sealed in a plastic bag for 72 hours to seven days**, since the mite dies within 2 to 3 days away from human skin. Fumigation of the house is unnecessary.",
        "Also treat the complications: **oral antihistamine (hydroxyzine 25 mg at night or cetirizine 10 mg) for itch, emollients, and oral antibiotics for pyoderma**; screen the child for haematuria three weeks later if streptococcal impetigo was present, and check for other sexually transmitted infections when scabies is acquired sexually.",
      ],
    },
    {
      heading: "Pediculosis: head, body and pubic lice",
      points: [
        "**Pediculosis capitis** is caused by Pediculus humanus capitis, spreads by head-to-head contact and shared combs in schoolgirls, and presents with occipital and retroauricular itch, excoriation, occipital lymphadenopathy and secondary impetigo; the diagnosis is confirmed by **finding a live louse, since nits (egg cases) firmly cemented to the hair shaft may persist long after cure**.",
        "Treat head lice with **permethrin 1 per cent cream rinse applied to damp hair for 10 minutes, or 5 per cent for 8 hours, repeated after 7 days**, or **malathion 0.5 per cent lotion for 8 to 12 hours**; add **wet combing with a fine-toothed nit comb and conditioner every 3 to 4 days for two weeks**, and treat affected household members. Oral ivermectin 200 microgram per kilogram on days 1 and 8 is used for resistant cases.",
        "**Pediculosis corporis** is a disease of poverty and homelessness: the louse **lives and lays eggs in the seams of clothing, not on the body**, and produces itchy excoriated papules and, over years, the pigmented lichenified back of **vagabond's disease**; treatment is **hot washing, ironing or discarding the clothing plus personal hygiene**, with permethrin to the body only if lice are found on skin.",
        "The body louse is a **vector of epidemic typhus (Rickettsia prowazekii), trench fever (Bartonella quintana) and relapsing fever (Borrelia recurrentis)** - the head louse and pubic louse transmit no disease, and this contrast is a standard viva question.",
        "**Pediculosis pubis** is caused by Pthirus pubis, is sexually transmitted, causes itching in the pubic area with **bluish-grey macules (maculae ceruleae)** and rust-coloured specks of louse faeces on the underclothes; treat with permethrin 1 per cent or 5 per cent, treat sexual partners of the last month, and **screen for other sexually transmitted infections including HIV, syphilis and gonorrhoea**.",
        "**Phthiriasis palpebrarum** (pubic lice on the eyelashes in a child) raises the question of sexual abuse and is treated with **thick petrolatum to the lid margins twice daily for 8 to 10 days plus mechanical removal**, never with a neurotoxic pediculicide near the eye.",
      ],
    },
  ],
  tables: [
    {
      heading: "Scabicides: dose, contact time and safety",
      columns: ["Drug", "Strength and route", "Contact time and repeat", "Safe in", "Cautions"],
      rows: [
        ["Permethrin", "5 per cent cream, topical", "8 to 14 hours overnight, repeat day 7", "Above 2 months, pregnancy, lactation", "Costliest topical; mild burning"],
        ["Ivermectin", "200 microgram/kg oral", "Single dose, repeat day 7 to 14", "Adults, children above 15 kg", "Avoid under 5 years, pregnancy, lactation"],
        ["Benzyl benzoate", "25 per cent lotion (dilute for children)", "3 consecutive nights", "Adults, older children", "Stings on excoriated skin, irritant dermatitis"],
        ["Sulphur", "5 to 10 per cent in petrolatum", "3 consecutive nights", "Infants under 2 months, pregnancy", "Malodorous, stains clothes"],
        ["Crotamiton", "10 per cent cream or lotion", "2 to 5 consecutive nights", "Children, antipruritic", "Least effective as a scabicide"],
        ["Lindane", "1 per cent lotion", "8 hours, single application", "Not recommended", "Neurotoxicity, seizures, aplastic anaemia"],
      ],
    },
    {
      heading: "The three pediculoses compared",
      columns: ["Feature", "Pediculosis capitis", "Pediculosis corporis", "Pediculosis pubis"],
      rows: [
        ["Organism", "Pediculus humanus capitis", "Pediculus humanus corporis", "Pthirus pubis (crab louse)"],
        ["Where the louse lives", "Scalp hair, close to the skin", "Seams of clothing", "Pubic, axillary, beard hair, eyelashes"],
        ["Typical patient", "School child, girls more than boys", "Homeless, destitute, unwashed clothing", "Sexually active adult"],
        ["Key sign", "Nits cemented to hair, occipital nodes", "Excoriated back, vagabond pigmentation", "Maculae ceruleae, rusty specks on underwear"],
        ["Vector of disease", "No", "Epidemic typhus, trench fever, relapsing fever", "No"],
        ["Treatment", "Permethrin 1 per cent plus wet combing, repeat day 7", "Wash, iron or discard clothing; hygiene", "Permethrin plus partner treatment and STI screen"],
      ],
    },
  ],
  redFlags: [
    "Thick hyperkeratotic crusts with nail dystrophy and little itch - crusted scabies; isolate, investigate for HIV or other immunosuppression, and start combined ivermectin and topical therapy.",
    "Fever, spreading erythema, tenderness or lymphangitis over excoriated scabies - cellulitis needing systemic antibiotics the same day.",
    "Puffy eyelids, smoky urine or hypertension two to three weeks after impetiginised scabies in a child - acute post-streptococcal glomerulonephritis; check urine and blood pressure.",
    "An institutional or hostel outbreak, or a bedridden patient in a nursing home - mass treatment of all residents and staff on a single day is required, not case-by-case treatment.",
    "Scabies in an infant with failure to thrive, or widespread atypical scabies in an adult - test for HIV and for underlying immunosuppression.",
    "Pubic lice on the eyelashes of a prepubertal child - evaluate for sexual abuse under the POCSO framework.",
  ],
  pearls: [
    "The mark-carrying sentence is: treat all household and close contacts simultaneously on the same day, whether or not they itch, and decontaminate clothes and bedding.",
    "Itch that wakes the patient at night plus another itching person in the house is scabies until proved otherwise, even without a visible burrow.",
    "Itchy papules or nodules on the scrotum or penis in a man, and on the areolae in a woman, are close to diagnostic of scabies.",
    "Adults are spared above the neck, infants are not - always treat the scalp and face in a baby under two years.",
    "Post-scabetic itch lasts two to four weeks and is treated with emollients, a mild steroid and an antihistamine, not with more scabicide.",
    "Permethrin needs a second application on day 7 because it is not fully ovicidal; a single application is the commonest reason for apparent treatment failure.",
    "Nits alone do not mean active head lice - look for a live, moving louse before re-treating.",
    "Crusted scabies is not itchy, and the patient who does not itch is the one who infests the whole ward.",
  ],
  theory: [
    {
      id: "dermatology-scabies-pediculosis-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 24-year-old man presents with intense itching worse at night for three weeks. His wife and two children are also itching. Describe the clinical features, diagnosis and complete management of this condition including the household.",
      openingLines: [
        "This is scabies, an infestation of the stratum corneum by the mite Sarcoptes scabiei var. hominis, transmitted by prolonged skin-to-skin contact, and presenting with nocturnal pruritus, burrows and papules in a characteristic distribution with clustering of cases in a household.",
        "The itch is a delayed type IV hypersensitivity response to mite antigen, appearing four to six weeks after a first infestation and within one to four days on re-infestation, which is why asymptomatic contacts must also be treated.",
      ],
      answer: [
        {
          heading: "1. Clinical features",
          points: [
            "Symptom: generalised itching that is characteristically worse at night and on warming in bed, disturbing sleep, with a history of similar itching in family members or bed partners.",
            "Primary lesions: the burrow - a 3 to 10 mm greyish serpiginous ridge with a vesicle or black dot at one end - along with 1 to 3 mm erythematous papules and papulovesicles.",
            "Distribution: finger webs, sides of fingers, flexor wrists, elbows, anterior axillary folds, periumbilical area and waist, buttocks, areolae in women, penis and scrotum in men; head and neck spared in adults but involved in infants.",
            "Secondary lesions: excoriations, eczematisation, honey-coloured crusts of impetigo, lichenification and post-inflammatory hyperpigmentation.",
            "Variants: nodular scabies on the genitalia, crusted (Norwegian) scabies in the immunosuppressed, scabies incognito after topical steroid use, and bullous scabies in the elderly.",
          ],
        },
        {
          heading: "2. Diagnosis",
          points: [
            "Clinical, using the IACS 2020 criteria: confirmed when a mite, egg or faecal pellet is demonstrated; clinical when burrows or typical genital or infant lesions are present; suspected on typical distribution with a contact history.",
            "Skin scraping in mineral oil or 10 per cent KOH from an unexcoriated burrow, showing mites, eggs or scybala.",
            "Burrow ink test and dermoscopy showing the delta-wing jet sign of the mite head at the end of a burrow.",
            "Differential diagnosis: papular urticaria, atopic dermatitis, pediculosis corporis, contact dermatitis, dermatitis herpetiformis and papular pruritic eruption of HIV.",
          ],
        },
        {
          heading: "3. Treatment of the patient",
          points: [
            "Permethrin 5 per cent cream to the whole body from the neck down after a bath, left for 8 to 14 hours overnight, washed off, and repeated once after 7 days; about 30 g per adult application, reapplied to the hands after washing.",
            "Alternatives: oral ivermectin 200 microgram per kilogram on day 1 and repeated day 7 to 14; benzyl benzoate 25 per cent on three consecutive nights; sulphur 5 to 10 per cent ointment for infants under two months and in pregnancy.",
            "Symptomatic treatment: emollients, oral antihistamine such as hydroxyzine 25 mg at night, and a moderate topical corticosteroid for eczematisation and for post-scabetic itch.",
            "Secondary pyoderma: oral cloxacillin 500 mg six hourly or amoxicillin-clavulanate for five to seven days; screen for haematuria and hypertension three weeks later.",
          ],
        },
        {
          heading: "4. Treatment of the household and environment",
          points: [
            "All household members, bed partners and close physical contacts of the previous six weeks are treated on the same day, whether or not they are symptomatic.",
            "Clothes, towels and bed linen of the last three days are washed at above 60 degrees Celsius and sun dried or ironed; non-washable items are sealed in a plastic bag for 72 hours to one week.",
            "The mite survives only 2 to 3 days off the host, so fumigation and disinfection of the house are unnecessary.",
            "Counsel that itching may persist two to four weeks after cure and does not mean failure; review at two weeks and treat again only if new burrows or new papules have appeared.",
          ],
        },
        {
          heading: "5. Public health note",
          points: [
            "Scabies is a WHO neglected tropical disease; mass drug administration with ivermectin is used in high-prevalence communities and institutional outbreaks.",
            "Control of scabies reduces streptococcal pyoderma and hence acute post-streptococcal glomerulonephritis and acute rheumatic fever in children.",
          ],
        },
      ],
      mustDraw: [
        "A figure of the body showing the sites of predilection of scabies in an adult and in an infant.",
        "A table of scabicides with strength, contact time, repeat schedule and safety in pregnancy and infancy.",
      ],
      markSplit: [
        { part: "Clinical features and variants", marks: 3 },
        { part: "Diagnosis and differential diagnosis", marks: 2 },
        { part: "Treatment of the patient", marks: 3 },
        { part: "Household treatment and decontamination", marks: 2 },
      ],
      keywords: ["scabies", "permethrin", "ivermectin", "burrow", "household contacts", "nocturnal itch"],
    },
    {
      id: "dermatology-scabies-pediculosis-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on crusted (Norwegian) scabies.",
      openingLines: [
        "Crusted or Norwegian scabies is a hyperinfestation with Sarcoptes scabiei carrying thousands to millions of mites, occurring in immunosuppressed, neurologically impaired or malnourished hosts who cannot mount an effective scratch or immune response.",
        "It is extremely contagious and is typically the index case behind an outbreak in a family, hospital ward or old age home.",
      ],
      answer: [
        {
          heading: "Predisposing factors",
          points: [
            "HIV infection, HTLV-1 infection, lymphoma and organ transplantation.",
            "Lepromatous leprosy, Down syndrome, dementia, paralysis, spinal cord injury and severe malnutrition.",
            "Prolonged topical or systemic corticosteroid use, including over-the-counter steroid combination creams.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Thick, warty, fissured hyperkeratotic crusts on hands, feet, elbows, knees, scalp and ears, with generalised scaling that may progress to erythroderma.",
            "Gross nail thickening with subungual hyperkeratotic debris that harbours mites.",
            "Itch is mild or absent, which delays diagnosis; a foul smell and secondary bacterial infection are common.",
            "Complications: sepsis from Staphylococcus aureus or Streptococcus pyogenes bacteraemia, which is the main cause of death.",
          ],
        },
        {
          heading: "Diagnosis and treatment",
          points: [
            "Scraping of crust shows innumerable mites and eggs; skin biopsy shows mites in a thickened hyperkeratotic stratum corneum.",
            "Combined therapy: oral ivermectin 200 microgram per kilogram on days 1, 2, 8, 9 and 15, extended to days 22 and 29 in severe cases.",
            "Topical permethrin 5 per cent daily for seven days then twice weekly until cure, with 5 per cent salicylic acid or urea ointment as a keratolytic to allow penetration.",
            "Barrier nursing with gloves and gowns, isolation, decontamination of linen, and simultaneous treatment of all contacts and health care staff.",
            "Investigate for the underlying immunosuppression, particularly HIV testing.",
          ],
        },
      ],
      markSplit: [
        { part: "Definition and predisposing factors", marks: 1 },
        { part: "Clinical features and complications", marks: 2 },
        { part: "Diagnosis and combined treatment", marks: 2 },
      ],
      keywords: ["crusted scabies", "Norwegian scabies", "ivermectin", "keratolytic", "HIV", "outbreak"],
    },
  ],
  mcqs: [
    {
      id: "dermatology-scabies-pediculosis-q1",
      stem: "A 30-year-old man is treated for scabies with a single overnight application of permethrin 5 per cent cream. Three weeks later he returns with fresh burrows in the finger webs. His wife, who also itches, was never treated. What is the single most important reason for the failure?",
      options: [
        "Permethrin resistance in the local mite population",
        "Untreated household contacts together with omission of the day 7 repeat application",
        "Inadequate contact time of the cream on the skin",
        "Persistence of mite antigen causing post-scabetic itch",
        "Development of crusted scabies",
      ],
      answer: 1,
      explanation:
        "New burrows three weeks later mean live mites, and the two commonest causes are an untreated contact who re-infests the patient and the missed second application on day 7, since permethrin is not reliably ovicidal. Permethrin resistance is documented but rare and should never be the first explanation when a contact is admittedly untreated. Inadequate contact time is possible but he did leave it overnight, which is within the 8 to 14 hour range. Post-scabetic itch is itch without new lesions, so fresh burrows exclude it. Crusted scabies presents with thick hyperkeratotic crusts and little itch, not a few new burrows.",
      difficulty: "easy",
    },
    {
      id: "dermatology-scabies-pediculosis-q2",
      stem: "A 6-week-old exclusively breastfed infant has itchy vesicles and pustules on the palms, soles and scalp; the mother has itchy papules on her wrists and areolae. Which treatment is most appropriate for the infant?",
      options: [
        "Oral ivermectin 200 microgram per kilogram single dose",
        "Lindane 1 per cent lotion for 8 hours",
        "Sulphur 5 per cent in petrolatum on three consecutive nights",
        "Benzyl benzoate 25 per cent lotion on three consecutive nights",
        "Crotamiton 10 per cent cream for two nights only",
      ],
      answer: 2,
      explanation:
        "Below two months of age permethrin is not licensed and sulphur 5 to 10 per cent in petrolatum applied for three consecutive nights is the accepted safe scabicide, covering the scalp and face as well since infants are affected above the neck. Oral ivermectin is contraindicated under 15 kilograms and under five years. Lindane is neurotoxic and is no longer recommended at any age, least of all in a neonate with a high surface-area-to-weight ratio. Benzyl benzoate 25 per cent is far too irritant for a six-week-old and would need dilution to 6.25 per cent at best. Crotamiton is antipruritic but is the least effective scabicide and would not clear the infestation.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q3",
      stem: "A 55-year-old bedridden man from an old age home has thick warty crusts on the hands, feet and elbows with dystrophic nails and generalised scaling, but complains of almost no itching. Four staff members have developed itchy papules. What is the diagnosis and the correct treatment?",
      options: [
        "Psoriasis vulgaris - potent topical steroid under occlusion",
        "Crusted scabies - oral ivermectin on days 1, 2, 8, 9 and 15 plus topical permethrin and a keratolytic",
        "Ordinary scabies - a single application of permethrin 5 per cent",
        "Chronic eczema - emollients and a moderate topical steroid",
        "Palmoplantar keratoderma - urea 20 per cent ointment",
      ],
      answer: 1,
      explanation:
        "Hyperkeratotic crusts with nail dystrophy, minimal itch and an outbreak among carers is crusted scabies, which carries an enormous mite burden and needs multiple doses of oral ivermectin combined with repeated topical permethrin and a keratolytic to let the scabicide penetrate the crust. Psoriasis would show silvery scale, Auspitz sign and typical extensor plaques, and treating this patient with a potent steroid would worsen the infestation. A single permethrin application is grossly inadequate for a mite load of thousands. Eczema and keratoderma do not cause an outbreak of itching among staff, which is the clue that this is an infestation.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q4",
      stem: "A 32-year-old destitute man has intensely itchy excoriated papules and lichenified hyperpigmented skin over the back and shoulders. No lesions are seen in the finger webs or genitalia. Examination of his shirt shows lice and eggs in the seams. Which complication is he specifically at risk of?",
      options: [
        "Acute post-streptococcal glomerulonephritis",
        "Epidemic typhus and trench fever",
        "Acquired immunodeficiency from lymphatic spread",
        "Bartonella henselae cat scratch disease",
        "Chagas disease",
      ],
      answer: 1,
      explanation:
        "Lice living in clothing seams is pediculosis corporis, and Pediculus humanus corporis is the vector of epidemic typhus caused by Rickettsia prowazekii, trench fever caused by Bartonella quintana and louse-borne relapsing fever caused by Borrelia recurrentis. Post-streptococcal glomerulonephritis follows streptococcal pyoderma, which is a complication of scabies and impetigo rather than a vector-borne consequence of body lice. Lice do not cause immunodeficiency. Cat scratch disease is Bartonella henselae transmitted by cats and their fleas, not by lice. Chagas disease is transmitted by the reduviid bug in Latin America.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q5",
      stem: "A 28-year-old woman treated correctly for scabies with permethrin on day 0 and day 7 returns on day 18 with continued itching. Examination shows healing excoriations and post-inflammatory hyperpigmentation but no burrows and no new papules. Her family was treated. What is the correct action?",
      options: [
        "Repeat permethrin for a third application",
        "Give oral ivermectin as she has failed topical therapy",
        "Reassure and treat with emollients, a moderate topical steroid and an oral antihistamine",
        "Take a skin biopsy to look for mites",
        "Start oral prednisolone 30 mg daily for two weeks",
      ],
      answer: 2,
      explanation:
        "Itch without new burrows or new papules two to four weeks after adequate treatment is post-scabetic itch, a hypersensitivity response to retained mite antigen in the stratum corneum, and it is managed with emollients, a moderate topical corticosteroid and an antihistamine. A third application of permethrin adds irritant dermatitis that perpetuates the itch and is the classic wrong answer. Ivermectin is reserved for genuine failure, which requires objective new lesions. A biopsy is unnecessary when the clinical picture is clear and no active lesions exist. Systemic steroids are disproportionate and risk converting a residual infestation into crusted scabies.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "dermatology-scabies-pediculosis-c1",
      front: "Incubation period of scabies and why it matters.",
      back: "Four to six weeks in a first infestation (one to four days on re-infestation) because the itch is a type IV hypersensitivity reaction - so asymptomatic contacts are already infested and must be treated.",
    },
    {
      id: "dermatology-scabies-pediculosis-c2",
      front: "Pathognomonic lesion of scabies and where to look for it.",
      back: "The burrow - a 3 to 10 mm greyish serpiginous ridge with a vesicle or black dot at one end, on the finger webs, sides of fingers, flexor wrists and ulnar border of the hand.",
    },
    {
      id: "dermatology-scabies-pediculosis-c3",
      front: "Permethrin regimen for scabies.",
      back: "5 per cent cream to the whole body neck down (whole body in infants), leave 8 to 14 hours overnight, wash off, repeat on day 7; about 30 g per adult application, reapply to hands after washing.",
    },
    {
      id: "dermatology-scabies-pediculosis-c4",
      front: "Ivermectin dose and contraindications in scabies.",
      back: "200 microgram per kilogram orally with food, repeated day 7 to 14; avoid under 15 kg or 5 years, and in pregnancy and lactation.",
    },
    {
      id: "dermatology-scabies-pediculosis-c5",
      front: "Scabicide of choice under two months of age and in pregnancy.",
      back: "Sulphur 5 to 10 per cent in petrolatum for three consecutive nights (permethrin 5 per cent is also accepted in pregnancy and above two months).",
    },
    {
      id: "dermatology-scabies-pediculosis-c6",
      front: "Environmental decontamination in scabies.",
      back: "Wash linen and clothes of the last 3 days above 60 degrees Celsius, sun dry or iron; seal non-washables in a bag for 72 hours to a week. The mite dies in 2 to 3 days off the host, so fumigation is not needed.",
    },
    {
      id: "dermatology-scabies-pediculosis-c7",
      front: "Post-scabetic itch versus treatment failure.",
      back: "Post-scabetic itch: itching for 2 to 4 weeks with no new burrows or papules - treat with emollients, mild steroid and antihistamine. Failure: new burrows or papules after 2 weeks - re-treat and find the untreated contact.",
    },
    {
      id: "dermatology-scabies-pediculosis-c8",
      front: "Which louse transmits systemic disease, and which diseases?",
      back: "Only the body louse (Pediculus humanus corporis) - epidemic typhus (Rickettsia prowazekii), trench fever (Bartonella quintana) and relapsing fever (Borrelia recurrentis).",
    },
    {
      id: "dermatology-scabies-pediculosis-c9",
      front: "Treatment of pediculosis corporis.",
      back: "Treat the clothing, not the skin - hot wash, iron or discard clothing and improve hygiene; permethrin to the body only if lice are found on the skin.",
    },
    {
      id: "dermatology-scabies-pediculosis-c10",
      front: "Maculae ceruleae - what and where?",
      back: "Bluish-grey macules at the site of pubic louse bites on the lower abdomen, thighs and buttocks in pediculosis pubis.",
    },
  ],
  references: [
    "IADVL Textbook of Dermatology, 5th edition, 2022 - scabies and other infestations",
    "International Alliance for the Control of Scabies (IACS) 2020 Consensus Criteria for the Diagnosis of Scabies",
    "WHO Informal Consultation on a Framework for Scabies Control, 2019, and WHO NTD Road Map 2021-2030",
    "British Association of Dermatologists guideline on the management of scabies, 2024",
    "Centers for Disease Control and Prevention, Parasites - Scabies and Lice, 2024 update",
    "Neena Khanna, Illustrated Synopsis of Dermatology and Sexually Transmitted Diseases, 6th edition, 2020",
  ],
});

topics.push({
  id: "geriatrics-ethics-falls",
  title: "Falls in the older person - assessment, causes and prevention",
  oneLiner:
    "A fall is an event in which a person unintentionally comes to rest on the ground, floor or other lower level, not as a result of a major intrinsic event such as stroke or seizure or an overwhelming external force; in older people it is almost always multifactorial, and the number of risk factors present predicts the risk better than any single cause.",
  frequency: "core",
  keywords: [
    "falls",
    "STEADI",
    "Timed Up and Go",
    "orthostatic hypotension",
    "postural hypotension",
    "FRIDs",
    "fall risk increasing drugs",
    "Otago exercise programme",
    "tai chi",
    "gait speed",
    "Berg balance scale",
    "Tinetti POMA",
    "hip fracture",
    "fear of falling",
    "home hazard modification",
    "vitamin D",
    "syncope",
    "carotid sinus hypersensitivity",
    "NICE CG161",
    "World Guidelines for Falls Prevention 2022",
  ],
  sections: [
    {
      heading: "Definition, burden and why it matters",
      points: [
        "**WHO definition:** a fall is an event which results in a person coming to rest inadvertently on the ground or floor or other lower level. A **recurrent faller** is one with two or more falls in twelve months, and this group carries the highest risk of injury and institutionalisation.",
        "**Epidemiology:** roughly **one in three community-dwelling people over 65 and one in two over 80 fall each year**; about 10% of falls cause serious injury and 1-2% cause a hip fracture. LASI wave 1 (2017-18) found a self-reported fall prevalence of around 13% in Indian adults aged 60 and above in the preceding two years, which is almost certainly an underestimate because falls are dismissed as normal ageing.",
        "**Consequences beyond fracture:** the long lie (more than one hour on the floor) causes dehydration, rhabdomyolysis, pressure injury, hypothermia and pneumonia; **fear of falling** produces self-imposed activity restriction, deconditioning and further falls, and is itself an independent predictor of future falls.",
        "Falls are the **commonest presentation of an acute illness in the frail elderly** - a urinary tract infection, pneumonia, silent myocardial infarction, new anaemia or a newly started drug may all first show themselves as a fall, so every new fall deserves a search for an acute precipitant.",
        "**Never accept 'she is just old' as the explanation.** A fall is a symptom with a cause, and the aim of the assessment is to convert one non-specific event into a list of modifiable risk factors, each with an intervention against it.",
        "The **World Guidelines for Falls Prevention and Management in Older Adults (2022)** stratify older adults into low, intermediate and high risk and route them to advice, exercise or full multifactorial assessment respectively; this three-tier model is now the standard framework to quote.",
      ],
    },
    {
      heading: "Risk factors - intrinsic, extrinsic and situational",
      points: [
        "**Intrinsic:** age over 80, previous fall, muscle weakness (especially hip abductors and quadriceps), gait and balance impairment, arthritis of hip or knee, visual impairment (cataract, macular degeneration, glaucoma, uncorrected refractive error, **new varifocal or bifocal lenses**), peripheral neuropathy, vestibular disease, parkinsonism, stroke, cognitive impairment, depression, incontinence and urgency, foot problems and deformity.",
        "**Cardiovascular:** orthostatic hypotension, postprandial hypotension, arrhythmia (bradyarrhythmia, complete heart block, tachyarrhythmia), aortic stenosis, carotid sinus hypersensitivity and vasovagal syncope - these are the causes that produce a fall with no memory of hitting the ground.",
        "**Drugs (fall-risk-increasing drugs, FRIDs):** benzodiazepines and Z-drugs, antipsychotics, tricyclic and other antidepressants, anticonvulsants, opioids, anticholinergics, antihypertensives (especially alpha-blockers such as prazosin and tamsulosin, and any recently intensified regimen), nitrates, diuretics, sulfonylureas and insulin (hypoglycaemia), and alcohol. **Risk rises steeply with four or more drugs of any kind.**",
        "**Extrinsic and environmental, and these matter greatly in Indian homes:** wet bathroom floors with no drainage slope, **Indian-style squat toilets** and the need to rise from squatting, high thresholds between rooms, steep narrow staircases with no handrail, loose rugs and mats, trailing wires, sleeping on the floor or on a low mat, poor night lighting, no light switch by the bed, cattle sheds and uneven courtyards in rural homes, and open-heeled chappals and rubber slippers rather than fitted footwear.",
        "**Situational:** getting up at night to pass urine (nocturia is one of the strongest situational triggers), rushing to answer the door or the telephone, carrying grandchildren, climbing on a stool to reach a high shelf, and travelling on a crowded bus or train.",
        "**Vitamin D deficiency** is close to universal in housebound Indian elders and contributes to proximal myopathy, osteomalacia and falls; supplementation reduces falls chiefly in those who are actually deficient, and **high-dose intermittent bolus dosing (for example 500,000 IU annually) increases falls** and must not be used.",
      ],
    },
    {
      heading: "Assessment - history, examination and investigation",
      points: [
        "**Screen annually** with the three STEADI questions: have you fallen in the past year, do you feel unsteady when standing or walking, do you worry about falling. A yes to any one, or any single injurious fall, or two or more falls, triggers a **multifactorial falls assessment**.",
        "**History of the fall itself:** exactly what the patient was doing, whether there was warning (dizziness, palpitation, chest pain, aura), whether consciousness was lost, whether a witness saw pallor or jerking, how the patient landed, whether they could get up unaided and how long they lay, and whether the same thing has happened before. **Loss of consciousness turns a fall into syncope and changes the work-up entirely.**",
        "**Wider history:** every drug including over-the-counter, ayurvedic and herbal preparations and alcohol, recent dose changes, continence and nocturia, alcohol, footwear, walking aid and whether it is the right height, vision and when the eyes were last tested, home layout, and the fear of falling and what activities have been given up because of it.",
        "**Examination:** **lying and standing blood pressure at 1 and 3 minutes** (a fall of 20 mmHg systolic or 10 mmHg diastolic within 3 minutes of standing defines orthostatic hypotension), pulse and rhythm, murmurs of aortic stenosis, cardiac and carotid auscultation; neurological examination for focal deficit, parkinsonism, proprioception, cerebellar signs and peripheral neuropathy; musculoskeletal examination of hips, knees and feet with inspection of footwear; visual acuity with a near card; and cognitive and mood screens.",
        "**Performance tests:** observed gait, **Timed Up and Go (12 seconds or more is abnormal)**, 30-second chair stand, 4-stage balance test, usual gait speed (under 0.8 m/s is slow), and where a fuller measure is wanted the Berg Balance Scale (under 45 of 56) or the Tinetti Performance-Oriented Mobility Assessment (under 19 of 28 is high risk).",
        "**Investigation is guided, not routine:** haemoglobin, glucose, urea, creatinine, **sodium and calcium**, thyroid function, vitamin B12 and vitamin D, urine analysis where infection is suspected, and an **ECG in every faller**. Add 24-hour or longer ambulatory ECG if arrhythmia is suspected, echocardiography for a murmur or exertional syncope, tilt table or carotid sinus massage for unexplained syncope, and CT head after a fall with head injury, on anticoagulation, or with new focal signs.",
      ],
    },
    {
      heading: "Multifactorial intervention - what actually works",
      points: [
        "**Exercise is the single most effective intervention.** Programmes must include **progressive strength and challenging balance training** for at least 3 hours a week, sustained long term. The **Otago Exercise Programme** (leg strengthening plus balance retraining plus a walking plan, home-based, five sessions supervised then continued) reduces falls by about 35% in the over-80s, and **tai chi** produces a similar effect in the fitter older adult. Walking alone, and brisk walking in someone with poor balance, does **not** reduce falls and may increase them.",
        "**Medication review and deprescribing:** stop or taper benzodiazepines, Z-drugs and antipsychotics; reduce or withdraw antihypertensives where blood pressure is low or orthostatic drop is present; substitute alpha-blockers; avoid anticholinergics; relax glycaemic targets and stop sulfonylureas where hypoglycaemia is occurring. **This is the intervention most often written about and least often done.**",
        "**Orthostatic hypotension:** review the drug list first, then rise in stages and sit on the edge of the bed before standing, increase salt and fluid where not contraindicated, avoid large carbohydrate meals and hot baths, use compression stockings or an abdominal binder, and elevate the head of the bed. Drug therapy (fludrocortisone or midodrine) is second line and used with care in heart failure and hypertension.",
        "**Vision and feet:** arrange cataract surgery for the first eye promptly (this reduces falls; the evidence for expediting the second eye is weaker), correct refractive error, and **advise single-vision distance glasses for walking outdoors** rather than bifocals or varifocals. Treat corns, calluses, bunions and onychomycosis, and prescribe well-fitting shoes with a low broad heel, a firm sole and a fastening - not loose slippers or chappals.",
        "**Home hazard assessment and modification** works, and works best in those at high risk and when it is done by an occupational therapist in the actual home: grab rails beside the toilet and in the bathroom, a **raised commode seat instead of a squat pan**, non-slip mats and floor drainage, removal of loose rugs and thresholds, handrails on both sides of the stairs, a bedside lamp or night light, a bedside urinal or commode to avoid the night walk, and moving daily items to waist height.",
        "**Bone health and injury reduction:** assess fracture risk (FRAX with the Indian population where available), give **calcium 1000-1200 mg and vitamin D 800-1000 IU daily** where intake is inadequate, treat osteoporosis with bisphosphonates or denosumab where indicated, and review the need for anticoagulation - though in atrial fibrillation the fall risk almost never outweighs the stroke benefit (roughly 295 falls per year would be needed to offset it).",
      ],
    },
    {
      heading: "After the fall - injury, the long lie and the fear of falling",
      points: [
        "**Assess for injury first:** head injury and its delayed complications, fractures of the hip, wrist (Colles), humeral neck, pelvis and ribs, and vertebral compression fracture. **Inability to weight-bear, groin pain on log-roll, or a shortened externally rotated leg is a hip fracture until imaging says otherwise**, and a normal initial radiograph does not exclude it - repeat imaging or MRI if pain persists.",
        "**Head injury on an anticoagulant or antiplatelet requires same-day CT even if the patient is fully alert**, because subdural and intracerebral bleeding may declare itself hours or weeks later; warn the family about the delayed presentation of chronic subdural haematoma with headache, drowsiness, confusion or a new focal deficit over weeks.",
        "**The long lie** (more than one hour on the floor) is an independent marker of poor prognosis: look for dehydration, acute kidney injury, rhabdomyolysis with raised creatine kinase, hypothermia, pressure injury and aspiration pneumonia, and admit if any is present.",
        "**Teach getting up from the floor** and arrange a means of calling for help - a mobile phone carried in a pocket rather than left on a table, a whistle, a neighbour with a key, or the **Elderline 14567** number written large by the telephone.",
        "**Fear of falling** is treated, not ignored: address it with graded activity, supervised exercise that restores confidence, and cognitive behavioural approaches; the Falls Efficacy Scale-International can be used to measure it and track change.",
        "**Post-fall syndrome** describes the cascade of fear, activity restriction, deconditioning, further weakness and further falls; breaking the cascade early with exercise is what preserves independence.",
      ],
    },
    {
      heading: "Special situations and organising falls care in Indian practice",
      points: [
        "**Falls in hospital and in care homes:** multifactorial interventions help, but **bed rails and physical restraints do not reduce falls and cause serious injury and strangulation** - avoid them. Low beds, floor mats, adequate lighting, a call bell within reach, toileting rounds and delirium prevention are the measures that work.",
        "**Dementia:** falls risk is roughly doubled and the evidence for exercise programmes is weaker; concentrate on removing FRIDs (especially antipsychotics), treating pain, correcting vision, environment modification, supervision and hip protectors in selected care-home residents.",
        "**Parkinson disease:** falls are usually backward, related to postural instability, freezing and orthostatic hypotension from the disease and its drugs; refer for physiotherapy with cueing strategies and review the drug regimen and timing rather than simply increasing levodopa.",
        "**Syncope masquerading as a fall:** roughly a third of older people who faint have amnesia for the loss of consciousness and report a mechanical fall; if the fall was unexplained, unwitnessed or associated with injury to the face, think cardiac and do an ECG and rhythm monitoring.",
        "**Practical Indian package:** teach the family to make the bathroom safe (dry floor, grab bar, plastic stool, western commode or a raised seat over the squat pan), light the passage to the toilet, keep a bedside water pot and urinal, remove door thresholds, replace slippers with fitted footwear, and register for a walking stick or walker under **Rashtriya Vayoshri Yojana** if the patient is eligible.",
        "**Document and code the fall in the record**, set a review date, and re-screen after every hospital admission, every drug change and every new illness - falls prevention is a longitudinal process, not a one-off consultation.",
      ],
    },
  ],
  tables: [
    {
      heading: "Falls assessment tools and their cut-offs",
      columns: ["Tool", "What it measures", "How it is done", "Abnormal / cut-off"],
      rows: [
        ["Timed Up and Go", "Functional mobility and dynamic balance", "Rise from a standard chair, walk 3 m, turn, walk back, sit", "12 seconds or more suggests fall risk; over 20 seconds indicates dependence"],
        ["Usual gait speed", "Global function and frailty", "Time a marked 4 m walk at normal pace", "Under 0.8 m/s is slow; under 0.6 m/s marks high risk"],
        ["30-second chair stand", "Lower limb strength", "Number of full sit-to-stand cycles in 30 seconds, arms folded", "Below the age and sex norm (for example under 8 in men aged 80-84)"],
        ["4-stage balance test", "Static balance", "Feet together, semi-tandem, tandem, single leg, 10 seconds each", "Unable to hold the tandem stance for 10 seconds"],
        ["Berg Balance Scale", "Balance across 14 tasks", "Scored 0-4 per task by an observer", "Under 45 of 56 indicates increased fall risk"],
        ["Tinetti POMA", "Balance (16) plus gait (12)", "Observed structured tasks", "Under 19 of 28 high risk; 19-23 moderate risk"],
        ["Orthostatic blood pressure", "Postural hypotension", "Supine 5 minutes, then standing at 1 and 3 minutes", "Fall of 20 mmHg systolic or 10 mmHg diastolic"],
      ],
    },
    {
      heading: "Fall-risk-increasing drugs and what to do about them",
      columns: ["Drug class", "Mechanism of falls", "Action"],
      rows: [
        ["Benzodiazepines and Z-drugs", "Sedation, delayed reaction time, ataxia, next-day hangover", "Taper and withdraw; substitute sleep hygiene and CBT for insomnia"],
        ["Antipsychotics", "Sedation, parkinsonism, orthostatic hypotension", "Avoid for behavioural symptoms of dementia; if used, lowest dose, shortest time, review every 12 weeks"],
        ["Tricyclic antidepressants and SSRIs", "Orthostatic hypotension, hyponatraemia, sedation", "Avoid tricyclics; if an SSRI is needed check sodium at 2-4 weeks"],
        ["Alpha-blockers (prazosin, tamsulosin, doxazosin)", "First-dose and postural hypotension", "Substitute; if needed for prostatism give at night and warn about rising"],
        ["Loop and thiazide diuretics", "Volume depletion, hyponatraemia, urgency and nocturia", "Review indication, take in the morning, check sodium and standing blood pressure"],
        ["Sulfonylureas and insulin", "Hypoglycaemia", "Relax HbA1c target to 7.5-8.5% in frailty; stop glibenclamide"],
        ["Opioids and anticholinergics", "Sedation, confusion, blurred vision, constipation", "Lowest effective dose; compute anticholinergic burden and reduce it"],
      ],
    },
  ],
  redFlags: [
    "Fall with loss of consciousness, or an unexplained and unwitnessed fall with facial injury - treat as syncope, do an ECG and consider arrhythmia, aortic stenosis and complete heart block the same day.",
    "Head injury in a patient taking warfarin, a direct oral anticoagulant or an antiplatelet - CT head the same day even if the patient is alert and neurologically normal.",
    "Inability to bear weight, groin pain on log-rolling, or a shortened and externally rotated leg - hip fracture until proved otherwise; a normal initial radiograph does not exclude it.",
    "A long lie of more than one hour on the floor - look for rhabdomyolysis, acute kidney injury, dehydration, hypothermia, pressure injury and aspiration pneumonia.",
    "New confusion, fever, dysuria or breathlessness with the fall - the fall is the presentation of an acute illness, so treat the illness rather than the fall.",
    "Progressive backward falls with early postural instability, vertical gaze palsy or dysautonomia - suspect progressive supranuclear palsy or multiple system atrophy rather than idiopathic Parkinson disease.",
    "Falls with headache, drowsiness or a new focal deficit developing days to weeks after a head injury - chronic subdural haematoma.",
  ],
  pearls: [
    "Ask everyone over 65 the three STEADI questions once a year; two or more falls, one injurious fall, or unsteadiness earns a full multifactorial assessment.",
    "Lying and standing blood pressure at 1 and 3 minutes is the single most rewarding measurement in a faller and the one most often skipped.",
    "Exercise with progressive strength AND challenging balance, at least 3 hours a week and sustained, is the intervention with the strongest evidence; walking alone does not prevent falls.",
    "The best-value prescription after a fall is often a subtraction: stopping a benzodiazepine, an antipsychotic or an alpha-blocker.",
    "Advise single-vision distance glasses for walking outdoors; bifocals and varifocals blur the ground at the edge of a step.",
    "Bed rails and restraints do not prevent falls and cause injury - use low beds, lighting, a call bell in reach and scheduled toileting instead.",
    "In atrial fibrillation, do not stop anticoagulation because the patient falls; the stroke prevented outweighs the bleed, and the fall risk should instead be treated.",
    "In an Indian home the two highest-yield modifications are a dry, grab-railed bathroom with a raised commode seat and a lit, unobstructed path from bed to toilet.",
  ],
  theory: [
    {
      id: "geriatrics-ethics-falls-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 78-year-old woman with hypertension, type 2 diabetes and osteoarthritis of both knees has had three falls in six months. Enumerate the causes of falls in the elderly and describe your assessment and multifactorial management plan in family practice.",
      openingLines: [
        "A fall is an event in which a person unintentionally comes to rest on the ground, floor or other lower level, not as a result of a major intrinsic event such as stroke or seizure or an overwhelming external force; three falls in six months makes her a recurrent faller at high risk of injury and institutionalisation.",
        "Falls in old age are almost always multifactorial - risk rises with the number of risk factors present rather than with any single cause - so the aim of assessment is to convert this one symptom into a list of modifiable factors, each with an intervention against it.",
      ],
      answer: [
        {
          heading: "1. Causes - intrinsic",
          points: [
            "Neuromuscular: muscle weakness, gait and balance disorder, stroke, parkinsonism, cerebellar disease, peripheral neuropathy, cervical myelopathy.",
            "Cardiovascular: orthostatic and postprandial hypotension, arrhythmia, complete heart block, aortic stenosis, carotid sinus hypersensitivity, vasovagal syncope.",
            "Sensory: visual impairment from cataract, glaucoma or macular degeneration, new bifocal or varifocal lenses, vestibular disease, hearing loss.",
            "Musculoskeletal: osteoarthritis of hip and knee, foot deformity, corns and calluses, kyphosis.",
            "Systemic and metabolic: anaemia, hyponatraemia, hypoglycaemia, hypothyroidism, vitamin D deficiency, infection, dehydration.",
            "Cognitive and psychological: dementia, delirium, depression, fear of falling and consequent deconditioning.",
          ],
        },
        {
          heading: "2. Causes - drugs and environment",
          points: [
            "Fall-risk-increasing drugs: benzodiazepines and Z-drugs, antipsychotics, antidepressants, anticonvulsants, opioids, anticholinergics, antihypertensives especially alpha-blockers, diuretics, nitrates, sulfonylureas and insulin, alcohol; risk rises sharply with four or more drugs.",
            "Environmental: wet bathroom floor, squat toilet, high thresholds, steep stairs without a handrail, loose mats, trailing wires, poor night lighting, sleeping on a floor mat, uneven courtyard.",
            "Footwear: loose chappals, backless slippers, worn soles, walking barefoot on a wet floor.",
            "Situational: nocturia and the night walk to the toilet, hurrying to the door or telephone, climbing on a stool, carrying a grandchild, crowded public transport.",
          ],
        },
        {
          heading: "3. Assessment",
          points: [
            "History of each fall: activity at the time, warning symptoms, loss of consciousness, witness account, how she landed, whether she could get up, how long she lay, and injuries sustained.",
            "Complete drug review including over-the-counter and traditional preparations, recent dose changes, and alcohol; continence and nocturia; vision and last eye test; footwear; walking aid and its height; home layout; fear of falling and activities given up.",
            "Examination: lying and standing blood pressure at 1 and 3 minutes, pulse and rhythm, murmurs, neurological examination for focal deficit, parkinsonism, neuropathy and proprioception, hips knees and feet, visual acuity, cognition and mood.",
            "Performance tests: observed gait, Timed Up and Go (12 seconds or more abnormal), 30-second chair stand, 4-stage balance test, gait speed under 0.8 m/s.",
            "Investigations: haemoglobin, glucose or HbA1c, urea, creatinine, sodium, calcium, thyroid function, vitamin B12 and D, urine analysis, and an ECG in every faller; ambulatory ECG, echocardiography or CT head as indicated.",
          ],
        },
        {
          heading: "4. Multifactorial management",
          points: [
            "Exercise: supervised progressive strength and challenging balance training, at least 3 hours a week, sustained - Otago programme or tai chi; refer to physiotherapy and give a written home programme.",
            "Deprescribe fall-risk-increasing drugs; treat orthostatic hypotension with staged rising, salt and fluid, compression and drug review; relax the HbA1c target to 7.5-8.5% and stop sulfonylurea if hypoglycaemia is occurring.",
            "Vision: refer for cataract surgery, correct refraction, advise single-vision distance glasses for walking outdoors.",
            "Feet and footwear: treat corns and calluses, prescribe fitted shoes with a firm sole, low broad heel and a fastening.",
            "Home hazards: grab rails and non-slip mat in the bathroom, raised commode seat, night light and a lit path to the toilet, removal of loose rugs and thresholds, stair handrails, bedside urinal.",
            "Bone health: calcium 1000-1200 mg and vitamin D 800-1000 IU daily, fracture risk assessment and osteoporosis treatment where indicated.",
            "Knee osteoarthritis: analgesia by the WHO-style ladder avoiding NSAIDs where possible, quadriceps strengthening, weight reduction, and a stick in the opposite hand.",
          ],
        },
        {
          heading: "5. Follow-up, safety net and family education",
          points: [
            "Teach her to get up from the floor and arrange a means of summoning help; write the Elderline 14567 number on the card.",
            "Address fear of falling with graded activity rather than advising her to stay in bed.",
            "Review at 4-6 weeks, after every drug change, and after any hospital admission; keep a falls diary.",
            "Warn the family of the red flags: inability to weight-bear, head injury on an antithrombotic, confusion or fever with a fall, and a long lie.",
          ],
        },
      ],
      mustDraw: [
        "A table of intrinsic, drug-related and extrinsic risk factors set against the specific intervention for each.",
        "A flow chart: annual STEADI screen - risk stratification (low / intermediate / high) - advice, exercise or full multifactorial assessment - individualised intervention - review.",
      ],
      markSplit: [
        { part: "Definition and multifactorial principle", marks: 1 },
        { part: "Causes - intrinsic, drugs, environmental, situational", marks: 3 },
        { part: "History, examination and performance tests", marks: 2 },
        { part: "Investigations and what each changes", marks: 1 },
        { part: "Multifactorial management and follow-up", marks: 3 },
      ],
      keywords: ["falls", "multifactorial assessment", "Timed Up and Go", "orthostatic hypotension", "Otago", "FRIDs", "home hazard"],
    },
    {
      id: "geriatrics-ethics-falls-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the prevention of falls in the elderly at community level.",
      openingLines: [
        "About one in three community-dwelling people over 65 falls each year, and falls are the leading cause of injury-related death and disability in this age group; prevention is effective and is delivered as a package rather than as a single measure.",
        "The 2022 World Guidelines for Falls Prevention stratify older adults into low, intermediate and high risk, and match the intensity of intervention to the stratum.",
      ],
      answer: [
        {
          heading: "1. Case finding and risk stratification",
          points: [
            "Ask every person over 65 annually: have you fallen in the past year, do you feel unsteady, are you worried about falling.",
            "Low risk (no falls, no unsteadiness): general advice, exercise promotion, vitamin D and bone health.",
            "Intermediate risk (one non-injurious fall or unsteadiness with normal gait test): targeted strength and balance exercise plus a drug review.",
            "High risk (two or more falls, injurious fall, frailty, abnormal gait test): full multifactorial assessment and individualised intervention.",
          ],
        },
        {
          heading: "2. Interventions with the best evidence",
          points: [
            "Progressive strength and challenging balance exercise for at least 3 hours a week, sustained long term - Otago programme, tai chi, or group exercise; walking alone is not effective.",
            "Medication review and deprescribing of fall-risk-increasing drugs, particularly benzodiazepines, antipsychotics, antidepressants and alpha-blockers.",
            "Home hazard assessment and modification by an occupational therapist, targeted at high-risk people and done in the actual home.",
            "Vision correction, prompt first-eye cataract surgery, and single-vision distance glasses for outdoor walking.",
            "Vitamin D 800-1000 IU daily where deficient, with calcium; avoid large intermittent bolus doses, which increase falls.",
            "Footwear and foot care; treatment of orthostatic hypotension; cardiac pacing for documented bradyarrhythmia or carotid sinus hypersensitivity with syncope.",
          ],
        },
        {
          heading: "3. Community and public health measures in India",
          points: [
            "Falls screening built into geriatric clinics under the National Programme for Health Care of the Elderly and into health and wellness centre elderly care.",
            "Training of ASHA and ANM workers to identify recurrent fallers and home hazards on domiciliary visits.",
            "Assistive devices - sticks, walkers, wheelchairs, spectacles, hearing aids - through Rashtriya Vayoshri Yojana.",
            "Community exercise and yoga groups, senior citizen associations and day-care centres to sustain exercise and reduce isolation.",
            "Public education that falling is not a normal part of ageing and should be reported.",
          ],
        },
      ],
      mustDraw: ["A three-tier risk stratification flow chart from the annual screening questions to the matched intervention."],
      markSplit: [
        { part: "Burden and screening questions", marks: 1 },
        { part: "Risk stratification", marks: 1 },
        { part: "Evidence-based interventions", marks: 2 },
        { part: "Indian community and programme measures", marks: 1 },
      ],
      keywords: ["falls prevention", "STEADI", "Otago", "vitamin D", "NPHCE", "Rashtriya Vayoshri Yojana"],
    },
  ],
  mcqs: [
    {
      id: "geriatrics-ethics-falls-q1",
      stem: "An 82-year-old man is assessed after two falls. He rises from a standard chair, walks three metres, turns and returns to sitting in 16 seconds. What does this result indicate?",
      options: [
        "A normal Timed Up and Go, so no further falls assessment is needed",
        "An abnormal Timed Up and Go indicating increased falls risk",
        "Severe functional dependence requiring a wheelchair",
        "An abnormal 30-second chair stand test",
        "A positive 4-stage balance test",
      ],
      answer: 1,
      explanation:
        "The Timed Up and Go is exactly this task, and a time of 12 seconds or more indicates increased falls risk, so 16 seconds is abnormal and a full multifactorial assessment is warranted. It is not normal, so the first option is wrong. Severe dependence is suggested only above about 20 seconds, so a wheelchair is not indicated. The 30-second chair stand counts sit-to-stand repetitions in a fixed time and the 4-stage balance test involves static stances of 10 seconds each, so neither describes the manoeuvre performed.",
      difficulty: "easy",
    },
    {
      id: "geriatrics-ethics-falls-q2",
      stem: "A 76-year-old woman on amlodipine, prazosin, glibenclamide, alprazolam and diclofenac has had three falls at night on the way to the toilet. Which single change is most likely to reduce her falls?",
      options: [
        "Add fludrocortisone for postural hypotension",
        "Stop alprazolam and prazosin",
        "Prescribe hip protectors",
        "Advise her to restrict fluids after 6 pm",
        "Add a high-dose annual bolus of vitamin D",
      ],
      answer: 1,
      explanation:
        "Benzodiazepines and alpha-blockers are among the strongest fall-risk-increasing drugs - alprazolam through sedation and delayed reaction time, prazosin through postural hypotension - and withdrawing them addresses both the sedation and the orthostatic drop that occur precisely on rising at night. Fludrocortisone is second-line for orthostatic hypotension and should never precede a drug review, and it would worsen fluid overload and hypertension. Hip protectors may reduce fracture in selected care-home residents but do not prevent falls. Fluid restriction risks dehydration and worsens orthostatic hypotension. High-dose intermittent bolus vitamin D has been shown to increase falls and is contraindicated as a strategy.",
      difficulty: "moderate",
    },
    {
      id: "geriatrics-ethics-falls-q3",
      stem: "Which exercise prescription has the strongest evidence for preventing falls in community-dwelling older adults?",
      options: [
        "Brisk walking for 30 minutes on most days",
        "Progressive strength plus challenging balance training for at least 3 hours a week",
        "Swimming three times a week",
        "Seated upper limb resistance exercises daily",
        "Stretching and flexibility routines twice a week",
      ],
      answer: 1,
      explanation:
        "Meta-analyses and the 2022 World Guidelines consistently show that programmes combining progressive strength with balance training that genuinely challenges balance, delivered for at least 3 hours a week and sustained, reduce falls by around a quarter to a third - the Otago programme and tai chi are the archetypes. Brisk walking alone has not been shown to reduce falls and in people with poor balance may increase them. Swimming and seated upper-limb work do not train standing balance or the lower limb in the weight-bearing position, and stretching alone has no fall-prevention effect.",
      difficulty: "moderate",
    },
    {
      id: "geriatrics-ethics-falls-q4",
      stem: "An 80-year-old man on warfarin for atrial fibrillation falls at home and strikes his head on the door frame. He is fully alert, has no focal neurological signs and a GCS of 15. What is the correct next step?",
      options: [
        "Reassure and observe at home with head injury advice",
        "Stop warfarin permanently because he is a faller",
        "Arrange a non-contrast CT head the same day",
        "Prescribe a cervical collar and repeat examination in 48 hours",
        "Request a skull radiograph"
      ],
      answer: 2,
      explanation:
        "Head injury in a patient on an anticoagulant demands same-day non-contrast CT of the head regardless of GCS, because intracranial bleeding may be present without any clinical sign and may declare itself only after deterioration. Observation at home is unsafe for this reason. Stopping warfarin is wrong: in atrial fibrillation the stroke prevented far outweighs the bleeding risk from falls, and the fall risk should be treated rather than the anticoagulant withdrawn. A collar addresses cervical spine injury, which is not the issue here, and a skull radiograph does not exclude intracranial haemorrhage and has no role.",
      difficulty: "moderate",
    },
    {
      id: "geriatrics-ethics-falls-q5",
      stem: "A 79-year-old woman is found to have a supine blood pressure of 148/84 mmHg, falling to 120/76 mmHg at 1 minute and 118/74 mmHg at 3 minutes of standing, with dizziness. Which statement is correct?",
      options: [
        "This does not meet the criteria for orthostatic hypotension",
        "This meets the criteria for orthostatic hypotension and drug review is the first step",
        "Fludrocortisone should be started immediately",
        "The measurement is invalid because it was not repeated at 10 minutes",
        "This pattern is diagnostic of carotid sinus hypersensitivity",
      ],
      answer: 1,
      explanation:
        "Orthostatic hypotension is defined as a fall of at least 20 mmHg systolic or at least 10 mmHg diastolic within 3 minutes of standing; the systolic drop here is 28 mmHg, so the criteria are met, and reviewing the drug list - antihypertensives, alpha-blockers, diuretics, nitrates, tricyclics - is always the first intervention. The first option therefore misapplies the definition. Fludrocortisone is second line, used only after non-pharmacological measures and drug withdrawal, and carries risks of fluid overload and supine hypertension. A 10-minute reading is used only when delayed orthostatic hypotension is suspected and its absence does not invalidate the test. Carotid sinus hypersensitivity is diagnosed by carotid sinus massage producing asystole of 3 seconds or more or a systolic fall of 50 mmHg, not by a standing test.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "geriatrics-ethics-falls-c1",
      front: "Define a fall (WHO) and define a recurrent faller.",
      back: "A fall is an event in which a person unintentionally comes to rest on the ground, floor or other lower level, not because of a major intrinsic event such as stroke or seizure or an overwhelming external force. A recurrent faller has had two or more falls in twelve months.",
    },
    {
      id: "geriatrics-ethics-falls-c2",
      front: "The three STEADI screening questions.",
      back: "Have you fallen in the past year? Do you feel unsteady when standing or walking? Do you worry about falling? A yes to any one triggers a fuller falls assessment.",
    },
    {
      id: "geriatrics-ethics-falls-c3",
      front: "Timed Up and Go: how is it done and what is abnormal?",
      back: "Rise from a standard armchair, walk 3 metres, turn, walk back and sit down. Twelve seconds or more indicates increased falls risk; more than 20 seconds indicates functional dependence.",
    },
    {
      id: "geriatrics-ethics-falls-c4",
      front: "Definition of orthostatic hypotension.",
      back: "A fall of 20 mmHg or more in systolic, or 10 mmHg or more in diastolic, blood pressure within 3 minutes of standing from a 5-minute supine rest.",
    },
    {
      id: "geriatrics-ethics-falls-c5",
      front: "Name six classes of fall-risk-increasing drugs.",
      back: "Benzodiazepines and Z-drugs, antipsychotics, antidepressants (especially tricyclics), opioids and anticholinergics, antihypertensives including alpha-blockers and diuretics, and sulfonylureas or insulin causing hypoglycaemia.",
    },
    {
      id: "geriatrics-ethics-falls-c6",
      front: "What exercise prescription prevents falls?",
      back: "Progressive strength training plus balance training that genuinely challenges balance, at least 3 hours a week, sustained long term - the Otago programme or tai chi. Walking alone does not prevent falls.",
    },
    {
      id: "geriatrics-ethics-falls-c7",
      front: "Why should bed rails not be used to prevent falls in hospital?",
      back: "They do not reduce falls, and they convert a fall from bed height into a fall from a greater height, with risk of entrapment and strangulation. Use low beds, floor mats, lighting, a call bell in reach and scheduled toileting instead.",
    },
    {
      id: "geriatrics-ethics-falls-c8",
      front: "Should anticoagulation be stopped in an older person with atrial fibrillation who falls?",
      back: "No. The stroke risk prevented outweighs the bleeding risk from falls - a patient would need to fall on the order of 295 times a year for the harm to outweigh the benefit. Treat the fall risk instead and continue anticoagulation.",
    },
  ],
  references: [
    "Montero-Odasso M et al. World Guidelines for Falls Prevention and Management in Older Adults: a global initiative. Age and Ageing, 2022",
    "NICE Clinical Guideline CG161: Falls in older people - assessment after a fall and prevention of further falls, 2013 (updated)",
    "CDC STEADI (Stopping Elderly Accidents, Deaths and Injuries) Algorithm and toolkit, 2019",
    "Sherrington C et al. Exercise for preventing falls in older people living in the community. Cochrane Database of Systematic Reviews, 2019",
    "Hazzard's Geriatric Medicine and Gerontology, 8th edition, 2022 - falls and gait disorders",
    "Longitudinal Ageing Study in India (LASI) Wave 1 report, IIPS / MoHFW, 2020",
    "Operational Guidelines, National Programme for Health Care of the Elderly (NPHCE), MoHFW",
  ],
});


topics.push({
  id: "eye-ent-otitis",
  title: "Acute otitis media, otitis externa and chronic suppurative otitis media",
  oneLiner:
    "A discharging or painful ear is separated by otoscopy into acute otitis media (a bulging, red, immobile tympanic membrane with a middle ear effusion), otitis externa (a tender, oedematous canal with pain on tragal pressure and an intact drum) and chronic suppurative otitis media (a perforation with discharge for more than two weeks), the last of which must be further divided into safe mucosal disease and unsafe squamous disease with cholesteatoma.",
  frequency: "core",
  keywords: [
    "acute otitis media",
    "otitis externa",
    "chronic suppurative otitis media",
    "CSOM",
    "cholesteatoma",
    "otorrhoea",
    "tympanic membrane perforation",
    "attic perforation",
    "amoxicillin",
    "ciprofloxacin ear drops",
    "myringotomy",
    "mastoiditis",
    "otitis media with effusion",
    "glue ear",
    "malignant otitis externa",
    "tympanoplasty",
  ],
  sections: [
    {
      heading: "Definitions and the otoscopic decision at the bedside",
      points: [
        "**Acute otitis media (AOM)** is the rapid onset of signs and symptoms of middle ear inflammation with a middle ear effusion: otalgia, fever and irritability with a **bulging, opaque or red tympanic membrane that is immobile on pneumatic otoscopy**. Redness alone in a crying child is not enough - bulging or reduced mobility is the diagnostic sign.",
        "**Otitis media with effusion (OME, glue ear)** is fluid behind an intact drum **without** acute inflammation: the drum is retracted or amber, an air-fluid level or bubbles may be visible, there is conductive hearing loss but no fever and no significant pain.",
        "**Acute otitis externa** is diffuse inflammation of the external auditory canal: **pain on pulling the pinna or pressing the tragus**, canal oedema and debris, scanty discharge, and an intact but often unseen tympanic membrane. Hearing is normal or mildly reduced by canal occlusion.",
        "**Chronic suppurative otitis media (CSOM)** is a **perforated tympanic membrane with persistent or recurrent discharge for more than two weeks** (WHO uses two weeks; many texts use six). It is divided into tubotympanic (safe, mucosal) disease and atticoantral (unsafe, squamous) disease with cholesteatoma.",
        "The bedside sequence is fixed: inspect the pinna and mastoid, press the tragus, insert the largest speculum that fits, clear wax or debris under vision, then examine the **pars tensa quadrant by quadrant and the pars flaccida (attic) last** - the attic is where the dangerous perforation hides and where inexperienced examiners never look.",
        "**Tuning fork tests and pneumatic otoscopy convert an opinion into a finding**: a conductive loss with a normal-looking drum suggests effusion or ossicular disease, while a mobile drum with a normal Rinne makes middle ear disease unlikely and points to referred otalgia from teeth, temporomandibular joint, tonsil or cervical spine.",
      ],
    },
    {
      heading: "Acute otitis media: who gets it, what causes it and how it behaves",
      points: [
        "AOM is a disease of early childhood: the peak is **6 to 24 months**, because the infant Eustachian tube is shorter, wider and more horizontal, and adenoid hypertrophy and viral upper respiratory infection obstruct it.",
        "Risk factors worth listing in a paper are **bottle feeding in the supine position, absence of breastfeeding, day care attendance, passive smoking, biomass fuel smoke, cleft palate, Down syndrome, allergic rhinitis and winter season**.",
        "The three classical bacteria are **Streptococcus pneumoniae, non-typeable Haemophilus influenzae and Moraxella catarrhalis**; Streptococcus pyogenes matters in older children and is more likely to perforate the drum. Viruses precede or accompany most episodes.",
        "The natural history is favourable: **about 80% of episodes settle within 3 days without an antibiotic**, and roughly 15 children must be treated with antibiotics for one extra child to be pain-free at 2 to 7 days - this number needed to treat is a favourite viva figure.",
        "Stages to recite: tubal occlusion, pre-suppuration (red drum, throbbing pain, fever), suppuration (bulging drum, severe pain), **resolution after spontaneous perforation with sudden relief of pain and mucopurulent discharge**, and either complete healing or progression to complication or chronic disease.",
        "A key clinical rule: **the ear that stops hurting the moment it starts discharging has perforated**, and that child needs review to confirm the perforation heals - persistence beyond 6 weeks means the disease has become chronic.",
      ],
    },
    {
      heading: "Treating acute otitis media: analgesia first, antibiotics by rule",
      points: [
        "**Analgesia is the first prescription, not the antibiotic**: paracetamol 15 mg/kg six-hourly or ibuprofen 10 mg/kg eight-hourly, given regularly for 48 to 72 hours, treats the symptom that actually distresses the child.",
        "**Give an antibiotic immediately** if the child is **under 6 months**, is 6 to 24 months with bilateral AOM, has **otorrhoea from a fresh perforation**, is systemically unwell or toxic, has severe otalgia, temperature above 39 degrees C, immunodeficiency, craniofacial anomaly or a cochlear implant.",
        "Otherwise offer **delayed prescribing**: analgesia with a written prescription to be started if there is no improvement in 48 to 72 hours. This safety-net approach halves antibiotic use without increasing complications and should be named explicitly in the answer.",
        "**First line is amoxicillin 80 to 90 mg/kg/day in two or three divided doses** (adults 500 mg to 1 g three times daily). Duration is **10 days under 2 years and in severe or perforated disease, and 5 to 7 days in children over 2 years** with mild disease.",
        "**Amoxicillin-clavulanate 90/6.4 mg/kg/day** is used when there has been an antibiotic in the last 30 days, when there is concurrent purulent conjunctivitis (the otitis-conjunctivitis syndrome of Haemophilus), or when amoxicillin has failed after 48 to 72 hours. For penicillin allergy use **azithromycin 10 mg/kg on day 1 then 5 mg/kg for 4 days**, or cefuroxime axetil 30 mg/kg/day, remembering that macrolide resistance among pneumococci in India is high.",
        "**Topical drops have no role in AOM with an intact drum**; if the drum has perforated, keep the ear dry, add **ciprofloxacin 0.3% ear drops five drops twice daily** and avoid aminoglycoside drops, which are potentially ototoxic through an open middle ear.",
        "**Myringotomy** is indicated for a severely bulging drum with intractable pain, for AOM not settling on adequate antibiotics, in an immunocompromised or neonatal patient, and when a complication such as incipient mastoiditis or facial palsy is suspected.",
      ],
    },
    {
      heading: "Otitis externa, including the diabetic emergency",
      points: [
        "Otitis externa follows loss of the protective acid cerumen layer: **water in the ear (swimmer's ear), cotton bud or hairpin trauma, hearing aid or ear-plug occlusion, eczema and psoriasis, and diabetes**. Pseudomonas aeruginosa and Staphylococcus aureus dominate; Aspergillus niger and Candida cause otomycosis.",
        "The clinical hallmark is **pain on tragal pressure or on pulling the pinna, which is absent in otitis media**, together with canal oedema, debris and scanty discharge; the tympanic membrane is intact when it can be seen.",
        "**Aural toilet under vision is the single most effective treatment** - dry mopping, suction or gentle syringing only if the drum is known intact - because drops cannot reach an occluded canal. If the canal is closed, insert a **medicated wick (ribbon gauze with 8% aluminium acetate or an antibiotic-steroid preparation)** for 48 hours.",
        "Topical treatment for 7 to 10 days: **ciprofloxacin 0.3% with dexamethasone, or neomycin-polymyxin-hydrocortisone drops three to four times daily**, plus regular oral analgesia. **Systemic antibiotics are not required in uncomplicated otitis externa** and this is a commonly marked point.",
        "**Otomycosis** shows blotting-paper wet debris with black-headed conidiophores (Aspergillus niger) or white curd (Candida): treat with meticulous suction clearance plus **clotrimazole 1% solution twice daily for 2 to 3 weeks**; antibiotic drops alone make it worse.",
        "**Furunculosis** of the outer cartilaginous canal is exquisitely tender staphylococcal folliculitis; treat with oral cloxacillin 500 mg six-hourly or amoxicillin-clavulanate, analgesia and local heat, and incise only when it points.",
        "**Malignant (necrotising) otitis externa** is osteomyelitis of the temporal bone in an elderly diabetic or immunocompromised patient: **severe unremitting nocturnal otalgia out of proportion to the findings, granulation tissue at the bony-cartilaginous junction of the floor of the canal, a raised ESR, and cranial nerve palsies beginning with the facial nerve**. It needs admission, blood sugar control, contrast CT or MRI with a gallium or technetium scan, and **6 to 8 weeks of systemic anti-pseudomonal therapy such as ciprofloxacin 750 mg twice daily**.",
      ],
    },
    {
      heading: "Chronic suppurative otitis media: safe versus unsafe",
      points: [
        "**Tubotympanic (mucosal, safe) CSOM** has a **central perforation of the pars tensa** with a visible rim of annulus, profuse mucoid odourless discharge that is intermittent and worsens with upper respiratory infection or water entry, and a mild to moderate conductive hearing loss of 20 to 40 dB.",
        "**Atticoantral (squamous, unsafe) CSOM** has an **attic or posterosuperior marginal perforation or a retraction pocket**, scanty **foul-smelling** discharge, granulation tissue or an aural polyp, and often cholesteatoma - keratinising squamous epithelium trapped in the middle ear that erodes bone by pressure, enzymes and osteoclast activation.",
        "**Any foul smell, granulation, polyp, attic crust, vertigo, facial weakness or a sensorineural component demands imaging and an ENT referral**, because these features indicate bone erosion, not simply infection.",
        "Medical treatment of active mucosal disease is **regular aural toilet plus ciprofloxacin 0.3% drops five drops twice daily for 7 to 10 days**, strict dry ear precautions (no swimming, cotton plug smeared with petroleum jelly for bathing, no oil instillation), and treatment of the nose - allergic rhinitis, sinusitis and adenoids all feed the middle ear through the Eustachian tube.",
        "**Aminoglycoside-containing drops (neomycin, gentamicin, framycetin) should be avoided in an ear with a perforation** because of the ototoxic risk; fluoroquinolone drops are the safe choice, a point examiners look for.",
        "Definitive management is surgical: **tympanoplasty (with or without cortical mastoidectomy) once the ear has been dry for 6 to 8 weeks** in mucosal disease, and **canal wall down modified radical mastoidectomy** in squamous disease, where the aim is a safe dry ear first and hearing second.",
        "Untreated CSOM in India remains an important cause of **preventable hearing loss and of school failure, and rarely of death from intracranial complications**; the National Programme for Prevention and Control of Deafness targets it directly.",
      ],
    },
    {
      heading: "Complications, prevention and the family physician's follow-up",
      points: [
        "**Extracranial complications:** acute mastoiditis (postauricular swelling with the pinna pushed down, out and forward, tenderness over the mastoid antrum, sagging of the posterosuperior canal wall), subperiosteal abscess, **Bezold abscess** in the neck, facial nerve palsy, labyrinthitis, petrositis with the **Gradenigo triad of otorrhoea, retro-orbital pain and lateral rectus palsy**, and masked mastoiditis after partial antibiotic treatment.",
        "**Intracranial complications:** meningitis (the commonest), extradural and subdural abscess, brain abscess of temporal lobe or cerebellum, lateral sinus thrombophlebitis with picket-fence fever and a positive Griesinger sign, and otitic hydrocephalus. **Fever, headache, vomiting, neck stiffness or altered sensorium in a discharging ear means admission today.**",
        "Prevention: **exclusive breastfeeding for six months, feeding the infant propped up rather than supine, avoiding household tobacco and biomass smoke, and pneumococcal conjugate and influenza vaccination** - PCV is now in the Universal Immunisation Programme in India and reduces AOM episodes.",
        "Follow-up after AOM: review at **6 to 12 weeks to confirm the effusion has cleared and hearing has returned**; persistent bilateral effusion beyond 3 months with a hearing loss above 25 to 30 dB, especially with speech delay or poor school performance, needs audiometry and ENT referral for grommets.",
        "Every child with recurrent AOM (three episodes in 6 months or four in a year) needs the nose examined for **adenoid hypertrophy and allergic rhinitis**, a check on feeding position and smoke exposure, and consideration of grommets with or without adenoidectomy.",
        "Document **hearing** at every visit in a child with ear disease: the family physician's contribution to the deafness programme is early detection, not surgery, and an undetected conductive loss in a school child is a preventable educational disability.",
      ],
    },
  ],
  tables: [
    {
      heading: "Separating the painful or discharging ear",
      columns: ["Feature", "Acute otitis media", "Otitis externa", "CSOM mucosal (safe)", "CSOM squamous (unsafe)"],
      rows: [
        ["Pain", "Severe, throbbing, relieved by perforation", "Severe, worse on chewing and tragal pressure", "Usually painless", "Usually painless; pain suggests complication"],
        ["Tragal tenderness", "Absent", "Present - the key sign", "Absent", "Absent"],
        ["Discharge", "Absent until perforation, then mucopurulent", "Scanty, watery or purulent, no mucus", "Profuse, mucoid, odourless", "Scanty, purulent, foul-smelling"],
        ["Tympanic membrane", "Bulging, red, immobile", "Intact but often obscured by oedema", "Central pars tensa perforation", "Attic or posterosuperior marginal perforation or retraction pocket"],
        ["Hearing", "Mild conductive loss", "Normal or mild loss from occlusion", "Conductive loss 20-40 dB", "Conductive loss, may be mixed if labyrinth eroded"],
        ["Fever", "Common in children", "Uncommon", "Only during exacerbation", "Uncommon"],
        ["Treatment", "Analgesia, oral amoxicillin by rule", "Aural toilet plus topical drops; no oral antibiotic", "Aural toilet, quinolone drops, dry ear, elective tympanoplasty", "ENT referral for imaging and mastoid surgery"],
      ],
    },
    {
      heading: "Antibiotic choices with doses",
      columns: ["Situation", "Drug and dose", "Duration"],
      rows: [
        ["AOM first line, child", "Amoxicillin 80-90 mg/kg/day orally in 2-3 divided doses", "10 days if under 2 years or perforated; 5-7 days if over 2 years and mild"],
        ["AOM first line, adult", "Amoxicillin 500 mg to 1 g orally three times daily", "5-7 days"],
        ["AOM failing at 48-72 hours, or antibiotic in last 30 days, or with purulent conjunctivitis", "Amoxicillin-clavulanate 90/6.4 mg/kg/day in 2 divided doses (adult 625 mg three times daily)", "10 days"],
        ["Penicillin allergy", "Azithromycin 10 mg/kg on day 1 then 5 mg/kg daily, or cefuroxime axetil 30 mg/kg/day in 2 doses", "5 days azithromycin; 7-10 days cefuroxime"],
        ["Acute otitis externa", "Ciprofloxacin 0.3% with dexamethasone ear drops, 3-4 drops three times daily after aural toilet", "7-10 days"],
        ["Otomycosis", "Clotrimazole 1% solution 3 drops twice daily after suction clearance", "2-3 weeks"],
        ["Discharging perforation or active CSOM", "Ciprofloxacin 0.3% ear drops 5 drops twice daily; avoid aminoglycoside drops", "7-10 days with aural toilet"],
        ["Malignant otitis externa", "Ciprofloxacin 750 mg orally twice daily, or intravenous anti-pseudomonal beta-lactam, with glycaemic control", "6-8 weeks, guided by response and imaging"],
      ],
    },
    {
      heading: "When the ear leaves the clinic",
      columns: ["Finding", "Urgency", "Reason"],
      rows: [
        ["Postauricular swelling, tenderness, pinna pushed forward", "Admit today", "Acute mastoiditis or subperiosteal abscess"],
        ["Fever, headache, vomiting, neck stiffness or drowsiness with otorrhoea", "Admit today", "Intracranial complication - meningitis or brain abscess"],
        ["Facial asymmetry with an ear discharge", "Same day ENT referral", "Facial nerve involvement by cholesteatoma or acute infection"],
        ["Vertigo or nystagmus in a discharging ear", "Same day ENT referral", "Labyrinthine fistula from cholesteatoma"],
        ["Attic perforation, crust, granulation tissue or aural polyp", "Refer within days", "Squamous (unsafe) CSOM until proved otherwise"],
        ["Severe nocturnal otalgia in an elderly diabetic with canal granulations", "Admit", "Malignant otitis externa - skull base osteomyelitis"],
        ["Bilateral effusion over 3 months with hearing loss or speech delay", "Routine ENT and audiology referral", "Glue ear needing audiometry and possible grommets"],
      ],
    },
  ],
  redFlags: [
    "Postauricular swelling, redness or tenderness with the pinna pushed down, out and forward - acute mastoiditis; admit for intravenous antibiotics and possible cortical mastoidectomy.",
    "Fever, severe headache, vomiting, neck stiffness, seizures or altered sensorium in a child with a discharging ear - meningitis or brain abscess; admit the same day.",
    "Facial nerve palsy on the side of an ear discharge - cholesteatoma eroding the fallopian canal or acute suppurative facial neuritis; same-day ENT referral.",
    "Vertigo, spontaneous nystagmus or a positive fistula test in a discharging ear - labyrinthine fistula; stop syringing and refer urgently.",
    "Foul-smelling scanty discharge with an attic or marginal perforation, granulation tissue or an aural polyp - unsafe squamous CSOM with cholesteatoma; needs CT temporal bone and surgery.",
    "Severe unremitting night otalgia with granulation at the floor of the canal in an elderly diabetic - malignant otitis externa; admit for imaging and prolonged anti-pseudomonal therapy.",
    "Sudden sensorineural component (Rinne positive with Weber lateralising to the good ear) in an ear with chronic disease - labyrinthitis or ossicular and cochlear erosion; urgent referral.",
  ],
  pearls: [
    "Redness of the drum in a screaming child proves nothing; bulging or an immobile drum on pneumatic otoscopy proves acute otitis media.",
    "Pain on pressing the tragus is otitis externa; pain relieved by a sudden discharge is a perforated otitis media.",
    "In acute otitis media the first prescription is regular analgesia; about 80% resolve in 3 days without an antibiotic, and 15 children must be treated for one extra child to be better at 2-7 days.",
    "Central perforation with profuse odourless mucoid discharge is safe; attic or marginal perforation with scanty foul discharge is unsafe - the smell and the site, not the volume, decide.",
    "Never use aminoglycoside ear drops through a perforation; use a fluoroquinolone drop instead.",
    "Aural toilet is treatment, not preparation for treatment - drops cannot work through debris.",
    "Any ear discharge with fever, headache, vertigo or facial weakness is a complication until proved otherwise and belongs in hospital, not on a repeat prescription.",
  ],
  theory: [
    {
      id: "eye-ent-otitis-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 2-year-old child is brought with fever, irritability and pulling at the right ear for two days. Discuss the diagnosis, differential diagnosis and management of acute otitis media in family practice, including indications for antibiotics and for referral.",
      openingLines: [
        "Acute otitis media is the rapid onset of middle ear inflammation with an effusion, presenting with otalgia, fever and irritability, and confirmed by a bulging, opaque or red tympanic membrane that is immobile on pneumatic otoscopy.",
        "It peaks between 6 and 24 months because the infant Eustachian tube is short, wide and horizontal, and it is the commonest reason for an antibiotic prescription in childhood, which makes accurate diagnosis and selective prescribing a core family practice skill.",
      ],
      answer: [
        {
          heading: "1. Aetiology and risk factors",
          points: [
            "Bacteria: Streptococcus pneumoniae, non-typeable Haemophilus influenzae, Moraxella catarrhalis, and Streptococcus pyogenes in older children; a viral upper respiratory infection usually precedes the episode.",
            "Risk factors: age 6-24 months, day care, absence of breastfeeding, supine bottle feeding, passive tobacco and biomass smoke, adenoid hypertrophy, allergic rhinitis, cleft palate and Down syndrome.",
          ],
        },
        {
          heading: "2. Clinical features and diagnosis",
          points: [
            "Symptoms: otalgia or ear tugging, fever, irritability, disturbed sleep and feeding, and sudden relief of pain with discharge if the drum perforates.",
            "Otoscopy: a bulging, opaque, yellow or red tympanic membrane with loss of the cone of light and reduced or absent mobility on pneumatic otoscopy; the mobility finding carries the diagnosis.",
            "Stages: tubal occlusion, pre-suppuration, suppuration, resolution (often after perforation), and complication or chronicity.",
            "Differential diagnosis: otitis externa (tragal tenderness, intact drum), otitis media with effusion (retracted amber drum, no fever), referred otalgia from dental caries, temporomandibular joint dysfunction, tonsillitis or cervical adenitis, teething, and a foreign body in the canal.",
          ],
        },
        {
          heading: "3. Management - symptomatic",
          points: [
            "Paracetamol 15 mg/kg six-hourly or ibuprofen 10 mg/kg eight-hourly, given regularly for 48-72 hours - analgesia is the first prescription.",
            "Adequate fluids, upright feeding, and avoidance of smoke exposure; no evidence supports decongestants, antihistamines or oral steroids.",
            "Safety-netting: return today if fever persists beyond 72 hours, if there is swelling behind the ear, if the child becomes drowsy or vomits, or if the face becomes asymmetrical.",
          ],
        },
        {
          heading: "4. Indications for immediate antibiotics and choice",
          points: [
            "Immediate antibiotics: age under 6 months; age 6-24 months with bilateral disease; otorrhoea from perforation; severe pain, temperature above 39 degrees C or systemic toxicity; immunodeficiency, craniofacial anomaly or cochlear implant.",
            "Otherwise delayed prescribing with review or a back-up prescription at 48-72 hours.",
            "First line: amoxicillin 80-90 mg/kg/day in 2-3 divided doses for 10 days under 2 years and 5-7 days over 2 years.",
            "Second line: amoxicillin-clavulanate 90/6.4 mg/kg/day if there has been an antibiotic in the last 30 days, if there is purulent conjunctivitis, or if there is no response at 48-72 hours.",
            "Penicillin allergy: azithromycin 10 mg/kg day 1 then 5 mg/kg for 4 days, or cefuroxime axetil 30 mg/kg/day.",
            "If the drum has perforated add ciprofloxacin 0.3% ear drops and keep the ear dry; never use aminoglycoside drops through a perforation.",
          ],
        },
        {
          heading: "5. Indications for referral and for myringotomy",
          points: [
            "Refer or admit for mastoiditis, meningitis or other intracranial complication, facial palsy, labyrinthitis, or failure of two courses of appropriate antibiotics.",
            "Myringotomy: severely bulging drum with intractable pain, no response to adequate antibiotics, neonate or immunocompromised child, and suspected incipient complication.",
            "Grommet insertion with or without adenoidectomy for recurrent AOM (three episodes in 6 months or four in a year) or for persistent bilateral effusion beyond 3 months with hearing loss.",
          ],
        },
        {
          heading: "6. Prevention and follow-up",
          points: [
            "Exclusive breastfeeding for 6 months, upright feeding, avoidance of tobacco and biomass smoke, and pneumococcal conjugate and influenza vaccination.",
            "Review at 6-12 weeks to confirm resolution of the effusion and normal hearing; refer for audiometry if the effusion persists beyond 3 months or there is speech delay.",
          ],
        },
      ],
      mustDraw: [
        "A labelled diagram of the normal tympanic membrane showing pars tensa, pars flaccida, handle of malleus, lateral process, umbo, cone of light and the four quadrants, with the site of a safe posteroinferior myringotomy incision marked.",
        "A flow chart: child with otalgia - otoscopy - bulging or immobile drum yes/no - immediate antibiotic criteria - delayed prescription - review at 48-72 hours - referral criteria.",
      ],
      markSplit: [
        { part: "Definition, aetiology and risk factors", marks: 2 },
        { part: "Clinical features, otoscopy and differential diagnosis", marks: 2 },
        { part: "Symptomatic management and analgesia", marks: 1 },
        { part: "Antibiotic indications, drug and dose", marks: 3 },
        { part: "Referral, myringotomy and prevention", marks: 2 },
      ],
      keywords: ["acute otitis media", "amoxicillin", "pneumatic otoscopy", "delayed prescribing", "myringotomy"],
    },
    {
      id: "eye-ent-otitis-t2",
      paper: "III",
      kind: "differentiate",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Differentiate safe (tubotympanic) from unsafe (atticoantral) chronic suppurative otitis media, and outline the management of each at primary care level.",
      openingLines: [
        "Chronic suppurative otitis media is a perforation of the tympanic membrane with persistent or recurrent otorrhoea for more than two weeks, and it is a leading preventable cause of hearing loss in India.",
        "It is divided into tubotympanic (mucosal, safe) disease, which threatens hearing, and atticoantral (squamous, unsafe) disease with cholesteatoma, which threatens life through bone erosion and intracranial spread.",
      ],
      answer: [
        {
          heading: "1. Tubotympanic (safe, mucosal) disease",
          points: [
            "Perforation is central in the pars tensa with an intact rim of annulus; the middle ear mucosa is the site of disease.",
            "Discharge is profuse, mucoid and odourless, intermittent, and provoked by upper respiratory infection or water entry.",
            "Hearing loss is conductive and usually 20-40 dB; there is no granulation, no polyp and no bone erosion.",
            "Complications are rare and are essentially limited to persistent hearing loss and tympanosclerosis.",
          ],
        },
        {
          heading: "2. Atticoantral (unsafe, squamous) disease",
          points: [
            "Perforation is in the attic (pars flaccida) or posterosuperior marginal, or there is a deep retraction pocket with keratin debris.",
            "Discharge is scanty, purulent and foul-smelling because of osteitis and anaerobic infection; granulation tissue or an aural polyp is often present.",
            "Cholesteatoma - keratinising squamous epithelium in the middle ear cleft - erodes ossicles, the fallopian canal, the lateral semicircular canal and the tegmen.",
            "Complications: ossicular erosion with severe conductive loss, labyrinthine fistula with vertigo, facial palsy, mastoiditis, meningitis, extradural and brain abscess, and lateral sinus thrombosis.",
          ],
        },
        {
          heading: "3. Assessment",
          points: [
            "Otoscopy after aural toilet with attention to the attic, tuning fork tests, pure tone audiometry, and swab for culture if discharge is persistent.",
            "High resolution CT of the temporal bones for any suspicion of squamous disease, complication or planned surgery; MRI with diffusion weighting for residual or recurrent cholesteatoma.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Safe disease: aural toilet, ciprofloxacin 0.3% drops 5 drops twice daily for 7-10 days, strict dry ear precautions, treatment of rhinitis, sinusitis and adenoids, then elective tympanoplasty once the ear is dry for 6-8 weeks.",
            "Unsafe disease: medical treatment is only temporising - definitive treatment is surgical removal of disease by canal wall down modified radical or atticotomy-based mastoidectomy, with hearing reconstruction as a secondary aim.",
            "Never use aminoglycoside drops through a perforation; avoid syringing an ear with suspected fistula.",
            "Counsel on dry ear precautions, hearing aid where surgery is not possible, and school hearing assessment in children.",
          ],
        },
      ],
      mustDraw: [
        "Two tympanic membrane diagrams side by side: a central pars tensa perforation with an intact annular rim (safe), and an attic pars flaccida perforation with crust and a posterosuperior retraction pocket (unsafe).",
      ],
      markSplit: [
        { part: "Definition and classification", marks: 1 },
        { part: "Differentiating table of the two types", marks: 2 },
        { part: "Complications of unsafe disease", marks: 1 },
        { part: "Management including drops, dry ear advice and surgery", marks: 1 },
      ],
      keywords: ["CSOM", "cholesteatoma", "attic perforation", "tympanoplasty", "modified radical mastoidectomy"],
    },
  ],
  mcqs: [
    {
      id: "eye-ent-otitis-q1",
      stem: "A 14-month-old child has fever of 38.8 degrees C and has been pulling at both ears for 24 hours. Otoscopy shows bilateral bulging, opaque tympanic membranes with reduced mobility. There is no discharge. What is the most appropriate management?",
      options: [
        "Regular paracetamol alone with review in 72 hours",
        "Oral amoxicillin 80-90 mg/kg/day for 10 days with regular analgesia",
        "Ciprofloxacin ear drops with oral analgesia",
        "Oral azithromycin for 3 days",
        "Immediate myringotomy under general anaesthesia",
      ],
      answer: 1,
      explanation:
        "A child aged 6-24 months with bilateral acute otitis media meets the criterion for immediate antibiotics, and the first-line drug is high-dose amoxicillin 80-90 mg/kg/day for 10 days in a child under 2 years, with analgesia. Analgesia alone with a delayed prescription is appropriate for unilateral mild disease in an older child, not for bilateral disease under 2 years. Ear drops cannot reach the middle ear through an intact drum and have no role in acute otitis media. Azithromycin is a penicillin-allergy alternative and is compromised by high macrolide resistance among Indian pneumococci. Myringotomy is reserved for intractable pain, treatment failure or a suspected complication, not for first presentation.",
      difficulty: "easy",
    },
    {
      id: "eye-ent-otitis-q2",
      stem: "A 24-year-old swimmer has three days of right ear pain and itching. Pulling the pinna and pressing the tragus reproduce severe pain; the canal is oedematous with scanty debris and the drum cannot be seen. He is afebrile. What is the best initial treatment?",
      options: [
        "Oral amoxicillin-clavulanate for 7 days",
        "Aural toilet and topical ciprofloxacin with dexamethasone drops, with a wick if the canal is closed",
        "Syringing with warm water followed by oral analgesia",
        "Clotrimazole 1% solution twice daily for 3 weeks",
        "Oral prednisolone with antihistamine",
      ],
      answer: 1,
      explanation:
        "This is uncomplicated acute otitis externa; the treatment is clearance of the canal under vision followed by a topical antibiotic-steroid drop, with a medicated wick when oedema prevents the drops from reaching the medial canal. Systemic antibiotics add nothing in uncomplicated otitis externa and are reserved for spreading cellulitis, diabetes with severe disease or immunosuppression. Syringing an ear whose drum has not been seen risks driving debris inward and perforating an already diseased drum. Clotrimazole treats otomycosis, which shows wet blotting-paper debris or black conidiophores rather than simple oedema. Oral steroids have no role.",
      difficulty: "easy",
    },
    {
      id: "eye-ent-otitis-q3",
      stem: "A 30-year-old man has had scanty, foul-smelling discharge from the left ear for two years. Otoscopy after suction shows crusting in the pars flaccida with granulation tissue; hearing loss is conductive at 45 dB. What does this picture indicate?",
      options: [
        "Tubotympanic CSOM, which can be managed with drops and elective tympanoplasty",
        "Atticoantral CSOM with cholesteatoma, needing CT temporal bone and mastoid surgery",
        "Chronic otitis externa with keratosis obturans",
        "Otitis media with effusion",
        "Tympanosclerosis of the pars tensa",
      ],
      answer: 1,
      explanation:
        "Scanty foul-smelling discharge with attic crusting and granulation tissue is squamous (atticoantral, unsafe) CSOM with cholesteatoma, which erodes bone and requires imaging and mastoid surgery rather than drops alone. Tubotympanic disease produces profuse odourless mucoid discharge through a central pars tensa perforation and carries no bone erosion. Keratosis obturans is a canal disease with a keratin plug and an intact drum, and typically causes pain and conductive loss without a perforation. Otitis media with effusion has an intact drum and no discharge. Tympanosclerosis appears as chalky white plaques in the pars tensa and does not discharge.",
      difficulty: "moderate",
    },
    {
      id: "eye-ent-otitis-q4",
      stem: "A 68-year-old man with poorly controlled type 2 diabetes has six weeks of severe right ear pain that keeps him awake, with scanty discharge. Granulation tissue is seen at the floor of the canal at the bony-cartilaginous junction and the ESR is 96 mm in the first hour. What is the diagnosis?",
      options: [
        "Furunculosis of the external auditory canal",
        "Malignant (necrotising) otitis externa",
        "Squamous cell carcinoma of the external canal",
        "Acute mastoiditis",
        "Otomycosis due to Aspergillus niger",
      ],
      answer: 1,
      explanation:
        "Unremitting nocturnal otalgia out of proportion to the findings, granulation tissue at the bony-cartilaginous junction of the canal floor, a very high ESR and poorly controlled diabetes define malignant otitis externa, a Pseudomonas osteomyelitis of the skull base needing 6-8 weeks of anti-pseudomonal therapy and glycaemic control. Furunculosis is an acutely tender staphylococcal swelling of the outer cartilaginous canal that settles within days. Carcinoma can look identical and is excluded by biopsy, but it is far less common in this exact diabetic setting and does not produce this systemic inflammatory picture as typically. Acute mastoiditis produces postauricular swelling with a pushed-forward pinna. Otomycosis is itchy rather than severely painful and shows fungal debris.",
      difficulty: "moderate",
    },
    {
      id: "eye-ent-otitis-q5",
      stem: "A 5-year-old with a discharging left ear for three days now has fever, a tender boggy swelling behind the ear and a pinna that is displaced downward, outward and forward. What is the correct action?",
      options: [
        "Increase the dose of oral amoxicillin and review in 48 hours",
        "Start topical ciprofloxacin drops and continue oral antibiotics at home",
        "Admit for intravenous antibiotics, imaging and possible cortical mastoidectomy",
        "Reassure that this is post-auricular lymphadenopathy from the ear infection",
        "Arrange audiometry and an outpatient ENT appointment in two weeks",
      ],
      answer: 2,
      explanation:
        "A tender postauricular swelling with the pinna pushed down, out and forward in a child with otorrhoea is acute mastoiditis, which requires admission for intravenous antibiotics, imaging and drainage or cortical mastoidectomy if there is a subperiosteal abscess or no response. Escalating oral antibiotics at home risks masked mastoiditis and intracranial spread. Topical drops do not treat bone infection. Post-auricular lymph nodes lie behind and below the mastoid tip and do not displace the pinna forward. A two-week outpatient appointment misses the window in which a brain abscess or meningitis can develop.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "eye-ent-otitis-c1",
      front: "Diagnostic otoscopic sign of acute otitis media.",
      back: "A bulging, opaque tympanic membrane with reduced or absent mobility on pneumatic otoscopy; redness alone in a crying child is not diagnostic.",
    },
    {
      id: "eye-ent-otitis-c2",
      front: "Which children with acute otitis media get an antibiotic immediately?",
      back: "Under 6 months; 6-24 months with bilateral disease; otorrhoea from perforation; severe pain, fever above 39 degrees C or toxicity; immunodeficiency, craniofacial anomaly or cochlear implant.",
    },
    {
      id: "eye-ent-otitis-c3",
      front: "First-line antibiotic and dose for acute otitis media in a child.",
      back: "Amoxicillin 80-90 mg/kg/day in 2-3 divided doses; 10 days if under 2 years or perforated, 5-7 days if over 2 years with mild disease.",
    },
    {
      id: "eye-ent-otitis-c4",
      front: "The one sign that says otitis externa rather than otitis media.",
      back: "Pain on pressing the tragus or pulling the pinna, with an intact drum and no fever.",
    },
    {
      id: "eye-ent-otitis-c5",
      front: "Safe versus unsafe CSOM in one line.",
      back: "Central pars tensa perforation with profuse odourless mucoid discharge is safe; attic or posterosuperior marginal perforation with scanty foul discharge, granulation or polyp is unsafe squamous disease with cholesteatoma.",
    },
    {
      id: "eye-ent-otitis-c6",
      front: "Which ear drops must never be used through a perforation, and what is used instead?",
      back: "Avoid aminoglycosides (neomycin, gentamicin, framycetin) because of ototoxicity; use ciprofloxacin 0.3% drops instead.",
    },
    {
      id: "eye-ent-otitis-c7",
      front: "Signs of acute mastoiditis.",
      back: "Postauricular swelling, redness and tenderness with the pinna pushed down, out and forward, sagging of the posterosuperior canal wall, fever and otorrhoea - admit.",
    },
    {
      id: "eye-ent-otitis-c8",
      front: "Gradenigo triad and what it means.",
      back: "Otorrhoea, retro-orbital or deep facial pain (trigeminal) and lateral rectus palsy (sixth nerve) - petrous apicitis complicating middle ear suppuration.",
    },
    {
      id: "eye-ent-otitis-c9",
      front: "Malignant otitis externa - who, what and how long treated?",
      back: "Elderly diabetic or immunocompromised patient, Pseudomonas skull base osteomyelitis with severe night otalgia and canal floor granulations; ciprofloxacin 750 mg twice daily or intravenous anti-pseudomonal therapy for 6-8 weeks with glycaemic control.",
    },
    {
      id: "eye-ent-otitis-c10",
      front: "When is glue ear referred for grommets?",
      back: "Bilateral effusion persisting beyond 3 months with hearing loss above 25-30 dB, or with speech delay or educational difficulty.",
    },
  ],
  references: [
    "PL Dhingra and Shruti Dhingra, Diseases of Ear, Nose and Throat and Head and Neck Surgery, 8th edition, 2021",
    "Scott-Brown's Otorhinolaryngology, Head and Neck Surgery, 8th edition, 2018",
    "American Academy of Pediatrics clinical practice guideline, The Diagnosis and Management of Acute Otitis Media, 2013 (reaffirmed)",
    "NICE guideline NG91, Otitis media (acute): antimicrobial prescribing, 2018, and NG98, Otitis media with effusion in under 12s, 2016",
    "WHO, Chronic suppurative otitis media: burden of illness and management options, 2004",
    "National Programme for Prevention and Control of Deafness, operational guidelines, MoHFW, Government of India",
    "Indian Academy of Pediatrics, Standard Treatment Guidelines, Acute Otitis Media, 2022",
  ],
});


topics.push({
  id: "eye-ent-otitis",
  title: "Acute otitis media, otitis externa and chronic suppurative otitis media",
  oneLiner:
    "A discharging or painful ear is separated by otoscopy into acute otitis media (a bulging, red, immobile tympanic membrane with a middle ear effusion), otitis externa (a tender, oedematous canal with pain on tragal pressure and an intact drum) and chronic suppurative otitis media (a perforation with discharge for more than two weeks), the last of which must be further divided into safe mucosal disease and unsafe squamous disease with cholesteatoma.",
  frequency: "core",
  keywords: [
    "acute otitis media",
    "otitis externa",
    "chronic suppurative otitis media",
    "CSOM",
    "cholesteatoma",
    "otorrhoea",
    "tympanic membrane perforation",
    "attic perforation",
    "amoxicillin",
    "ciprofloxacin ear drops",
    "myringotomy",
    "mastoiditis",
    "otitis media with effusion",
    "glue ear",
    "malignant otitis externa",
    "tympanoplasty",
  ],
  sections: [
    {
      heading: "Definitions and the otoscopic decision at the bedside",
      points: [
        "**Acute otitis media (AOM)** is the rapid onset of signs and symptoms of middle ear inflammation with a middle ear effusion: otalgia, fever and irritability with a **bulging, opaque or red tympanic membrane that is immobile on pneumatic otoscopy**. Redness alone in a crying child is not enough - bulging or reduced mobility is the diagnostic sign.",
        "**Otitis media with effusion (OME, glue ear)** is fluid behind an intact drum **without** acute inflammation: the drum is retracted or amber, an air-fluid level or bubbles may be visible, there is conductive hearing loss but no fever and no significant pain.",
        "**Acute otitis externa** is diffuse inflammation of the external auditory canal: **pain on pulling the pinna or pressing the tragus**, canal oedema and debris, scanty discharge, and an intact but often unseen tympanic membrane. Hearing is normal or mildly reduced by canal occlusion.",
        "**Chronic suppurative otitis media (CSOM)** is a **perforated tympanic membrane with persistent or recurrent discharge for more than two weeks** (WHO uses two weeks; many texts use six). It is divided into tubotympanic (safe, mucosal) disease and atticoantral (unsafe, squamous) disease with cholesteatoma.",
        "The bedside sequence is fixed: inspect the pinna and mastoid, press the tragus, insert the largest speculum that fits, clear wax or debris under vision, then examine the **pars tensa quadrant by quadrant and the pars flaccida (attic) last** - the attic is where the dangerous perforation hides and where inexperienced examiners never look.",
        "**Tuning fork tests and pneumatic otoscopy convert an opinion into a finding**: a conductive loss with a normal-looking drum suggests effusion or ossicular disease, while a mobile drum with a normal Rinne makes middle ear disease unlikely and points to referred otalgia from teeth, temporomandibular joint, tonsil or cervical spine.",
      ],
    },
    {
      heading: "Acute otitis media: who gets it, what causes it and how it behaves",
      points: [
        "AOM is a disease of early childhood: the peak is **6 to 24 months**, because the infant Eustachian tube is shorter, wider and more horizontal, and adenoid hypertrophy and viral upper respiratory infection obstruct it.",
        "Risk factors worth listing in a paper are **bottle feeding in the supine position, absence of breastfeeding, day care attendance, passive smoking, biomass fuel smoke, cleft palate, Down syndrome, allergic rhinitis and winter season**.",
        "The three classical bacteria are **Streptococcus pneumoniae, non-typeable Haemophilus influenzae and Moraxella catarrhalis**; Streptococcus pyogenes matters in older children and is more likely to perforate the drum. Viruses precede or accompany most episodes.",
        "The natural history is favourable: **about 80% of episodes settle within 3 days without an antibiotic**, and roughly 15 children must be treated with antibiotics for one extra child to be pain-free at 2 to 7 days - this number needed to treat is a favourite viva figure.",
        "Stages to recite: tubal occlusion, pre-suppuration (red drum, throbbing pain, fever), suppuration (bulging drum, severe pain), **resolution after spontaneous perforation with sudden relief of pain and mucopurulent discharge**, and either complete healing or progression to complication or chronic disease.",
        "A key clinical rule: **the ear that stops hurting the moment it starts discharging has perforated**, and that child needs review to confirm the perforation heals - persistence beyond 6 weeks means the disease has become chronic.",
      ],
    },
    {
      heading: "Treating acute otitis media: analgesia first, antibiotics by rule",
      points: [
        "**Analgesia is the first prescription, not the antibiotic**: paracetamol 15 mg/kg six-hourly or ibuprofen 10 mg/kg eight-hourly, given regularly for 48 to 72 hours, treats the symptom that actually distresses the child.",
        "**Give an antibiotic immediately** if the child is **under 6 months**, is 6 to 24 months with bilateral AOM, has **otorrhoea from a fresh perforation**, is systemically unwell or toxic, has severe otalgia, temperature above 39 degrees C, immunodeficiency, craniofacial anomaly or a cochlear implant.",
        "Otherwise offer **delayed prescribing**: analgesia with a written prescription to be started if there is no improvement in 48 to 72 hours. This safety-net approach halves antibiotic use without increasing complications and should be named explicitly in the answer.",
        "**First line is amoxicillin 80 to 90 mg/kg/day in two or three divided doses** (adults 500 mg to 1 g three times daily). Duration is **10 days under 2 years and in severe or perforated disease, and 5 to 7 days in children over 2 years** with mild disease.",
        "**Amoxicillin-clavulanate 90/6.4 mg/kg/day** is used when there has been an antibiotic in the last 30 days, when there is concurrent purulent conjunctivitis (the otitis-conjunctivitis syndrome of Haemophilus), or when amoxicillin has failed after 48 to 72 hours. For penicillin allergy use **azithromycin 10 mg/kg on day 1 then 5 mg/kg for 4 days**, or cefuroxime axetil 30 mg/kg/day, remembering that macrolide resistance among pneumococci in India is high.",
        "**Topical drops have no role in AOM with an intact drum**; if the drum has perforated, keep the ear dry, add **ciprofloxacin 0.3% ear drops five drops twice daily** and avoid aminoglycoside drops, which are potentially ototoxic through an open middle ear.",
        "**Myringotomy** is indicated for a severely bulging drum with intractable pain, for AOM not settling on adequate antibiotics, in an immunocompromised or neonatal patient, and when a complication such as incipient mastoiditis or facial palsy is suspected.",
      ],
    },
    {
      heading: "Otitis externa, including the diabetic emergency",
      points: [
        "Otitis externa follows loss of the protective acid cerumen layer: **water in the ear (swimmer's ear), cotton bud or hairpin trauma, hearing aid or ear-plug occlusion, eczema and psoriasis, and diabetes**. Pseudomonas aeruginosa and Staphylococcus aureus dominate; Aspergillus niger and Candida cause otomycosis.",
        "The clinical hallmark is **pain on tragal pressure or on pulling the pinna, which is absent in otitis media**, together with canal oedema, debris and scanty discharge; the tympanic membrane is intact when it can be seen.",
        "**Aural toilet under vision is the single most effective treatment** - dry mopping, suction or gentle syringing only if the drum is known intact - because drops cannot reach an occluded canal. If the canal is closed, insert a **medicated wick (ribbon gauze with 8% aluminium acetate or an antibiotic-steroid preparation)** for 48 hours.",
        "Topical treatment for 7 to 10 days: **ciprofloxacin 0.3% with dexamethasone, or neomycin-polymyxin-hydrocortisone drops three to four times daily**, plus regular oral analgesia. **Systemic antibiotics are not required in uncomplicated otitis externa** and this is a commonly marked point.",
        "**Otomycosis** shows blotting-paper wet debris with black-headed conidiophores (Aspergillus niger) or white curd (Candida): treat with meticulous suction clearance plus **clotrimazole 1% solution twice daily for 2 to 3 weeks**; antibiotic drops alone make it worse.",
        "**Furunculosis** of the outer cartilaginous canal is exquisitely tender staphylococcal folliculitis; treat with oral cloxacillin 500 mg six-hourly or amoxicillin-clavulanate, analgesia and local heat, and incise only when it points.",
        "**Malignant (necrotising) otitis externa** is osteomyelitis of the temporal bone in an elderly diabetic or immunocompromised patient: **severe unremitting nocturnal otalgia out of proportion to the findings, granulation tissue at the bony-cartilaginous junction of the floor of the canal, a raised ESR, and cranial nerve palsies beginning with the facial nerve**. It needs admission, blood sugar control, contrast CT or MRI with a gallium or technetium scan, and **6 to 8 weeks of systemic anti-pseudomonal therapy such as ciprofloxacin 750 mg twice daily**.",
      ],
    },
    {
      heading: "Chronic suppurative otitis media: safe versus unsafe",
      points: [
        "**Tubotympanic (mucosal, safe) CSOM** has a **central perforation of the pars tensa** with a visible rim of annulus, profuse mucoid odourless discharge that is intermittent and worsens with upper respiratory infection or water entry, and a mild to moderate conductive hearing loss of 20 to 40 dB.",
        "**Atticoantral (squamous, unsafe) CSOM** has an **attic or posterosuperior marginal perforation or a retraction pocket**, scanty **foul-smelling** discharge, granulation tissue or an aural polyp, and often cholesteatoma - keratinising squamous epithelium trapped in the middle ear that erodes bone by pressure, enzymes and osteoclast activation.",
        "**Any foul smell, granulation, polyp, attic crust, vertigo, facial weakness or a sensorineural component demands imaging and an ENT referral**, because these features indicate bone erosion, not simply infection.",
        "Medical treatment of active mucosal disease is **regular aural toilet plus ciprofloxacin 0.3% drops five drops twice daily for 7 to 10 days**, strict dry ear precautions (no swimming, cotton plug smeared with petroleum jelly for bathing, no oil instillation), and treatment of the nose - allergic rhinitis, sinusitis and adenoids all feed the middle ear through the Eustachian tube.",
        "**Aminoglycoside-containing drops (neomycin, gentamicin, framycetin) should be avoided in an ear with a perforation** because of the ototoxic risk; fluoroquinolone drops are the safe choice, a point examiners look for.",
        "Definitive management is surgical: **tympanoplasty (with or without cortical mastoidectomy) once the ear has been dry for 6 to 8 weeks** in mucosal disease, and **canal wall down modified radical mastoidectomy** in squamous disease, where the aim is a safe dry ear first and hearing second.",
        "Untreated CSOM in India remains an important cause of **preventable hearing loss and of school failure, and rarely of death from intracranial complications**; the National Programme for Prevention and Control of Deafness targets it directly.",
      ],
    },
    {
      heading: "Complications, prevention and the family physician's follow-up",
      points: [
        "**Extracranial complications:** acute mastoiditis (postauricular swelling with the pinna pushed down, out and forward, tenderness over the mastoid antrum, sagging of the posterosuperior canal wall), subperiosteal abscess, **Bezold abscess** in the neck, facial nerve palsy, labyrinthitis, petrositis with the **Gradenigo triad of otorrhoea, retro-orbital pain and lateral rectus palsy**, and masked mastoiditis after partial antibiotic treatment.",
        "**Intracranial complications:** meningitis (the commonest), extradural and subdural abscess, brain abscess of temporal lobe or cerebellum, lateral sinus thrombophlebitis with picket-fence fever and a positive Griesinger sign, and otitic hydrocephalus. **Fever, headache, vomiting, neck stiffness or altered sensorium in a discharging ear means admission today.**",
        "Prevention: **exclusive breastfeeding for six months, feeding the infant propped up rather than supine, avoiding household tobacco and biomass smoke, and pneumococcal conjugate and influenza vaccination** - PCV is now in the Universal Immunisation Programme in India and reduces AOM episodes.",
        "Follow-up after AOM: review at **6 to 12 weeks to confirm the effusion has cleared and hearing has returned**; persistent bilateral effusion beyond 3 months with a hearing loss above 25 to 30 dB, especially with speech delay or poor school performance, needs audiometry and ENT referral for grommets.",
        "Every child with recurrent AOM (three episodes in 6 months or four in a year) needs the nose examined for **adenoid hypertrophy and allergic rhinitis**, a check on feeding position and smoke exposure, and consideration of grommets with or without adenoidectomy.",
        "Document **hearing** at every visit in a child with ear disease: the family physician's contribution to the deafness programme is early detection, not surgery, and an undetected conductive loss in a school child is a preventable educational disability.",
      ],
    },
  ],
  tables: [
    {
      heading: "Separating the painful or discharging ear",
      columns: ["Feature", "Acute otitis media", "Otitis externa", "CSOM mucosal (safe)", "CSOM squamous (unsafe)"],
      rows: [
        ["Pain", "Severe, throbbing, relieved by perforation", "Severe, worse on chewing and tragal pressure", "Usually painless", "Usually painless; pain suggests complication"],
        ["Tragal tenderness", "Absent", "Present - the key sign", "Absent", "Absent"],
        ["Discharge", "Absent until perforation, then mucopurulent", "Scanty, watery or purulent, no mucus", "Profuse, mucoid, odourless", "Scanty, purulent, foul-smelling"],
        ["Tympanic membrane", "Bulging, red, immobile", "Intact but often obscured by oedema", "Central pars tensa perforation", "Attic or posterosuperior marginal perforation or retraction pocket"],
        ["Hearing", "Mild conductive loss", "Normal or mild loss from occlusion", "Conductive loss 20-40 dB", "Conductive loss, may be mixed if labyrinth eroded"],
        ["Fever", "Common in children", "Uncommon", "Only during exacerbation", "Uncommon"],
        ["Treatment", "Analgesia, oral amoxicillin by rule", "Aural toilet plus topical drops; no oral antibiotic", "Aural toilet, quinolone drops, dry ear, elective tympanoplasty", "ENT referral for imaging and mastoid surgery"],
      ],
    },
    {
      heading: "Antibiotic choices with doses",
      columns: ["Situation", "Drug and dose", "Duration"],
      rows: [
        ["AOM first line, child", "Amoxicillin 80-90 mg/kg/day orally in 2-3 divided doses", "10 days if under 2 years or perforated; 5-7 days if over 2 years and mild"],
        ["AOM first line, adult", "Amoxicillin 500 mg to 1 g orally three times daily", "5-7 days"],
        ["AOM failing at 48-72 hours, or antibiotic in last 30 days, or with purulent conjunctivitis", "Amoxicillin-clavulanate 90/6.4 mg/kg/day in 2 divided doses (adult 625 mg three times daily)", "10 days"],
        ["Penicillin allergy", "Azithromycin 10 mg/kg on day 1 then 5 mg/kg daily, or cefuroxime axetil 30 mg/kg/day in 2 doses", "5 days azithromycin; 7-10 days cefuroxime"],
        ["Acute otitis externa", "Ciprofloxacin 0.3% with dexamethasone ear drops, 3-4 drops three times daily after aural toilet", "7-10 days"],
        ["Otomycosis", "Clotrimazole 1% solution 3 drops twice daily after suction clearance", "2-3 weeks"],
        ["Discharging perforation or active CSOM", "Ciprofloxacin 0.3% ear drops 5 drops twice daily; avoid aminoglycoside drops", "7-10 days with aural toilet"],
        ["Malignant otitis externa", "Ciprofloxacin 750 mg orally twice daily, or intravenous anti-pseudomonal beta-lactam, with glycaemic control", "6-8 weeks, guided by response and imaging"],
      ],
    },
    {
      heading: "When the ear leaves the clinic",
      columns: ["Finding", "Urgency", "Reason"],
      rows: [
        ["Postauricular swelling, tenderness, pinna pushed forward", "Admit today", "Acute mastoiditis or subperiosteal abscess"],
        ["Fever, headache, vomiting, neck stiffness or drowsiness with otorrhoea", "Admit today", "Intracranial complication - meningitis or brain abscess"],
        ["Facial asymmetry with an ear discharge", "Same day ENT referral", "Facial nerve involvement by cholesteatoma or acute infection"],
        ["Vertigo or nystagmus in a discharging ear", "Same day ENT referral", "Labyrinthine fistula from cholesteatoma"],
        ["Attic perforation, crust, granulation tissue or aural polyp", "Refer within days", "Squamous (unsafe) CSOM until proved otherwise"],
        ["Severe nocturnal otalgia in an elderly diabetic with canal granulations", "Admit", "Malignant otitis externa - skull base osteomyelitis"],
        ["Bilateral effusion over 3 months with hearing loss or speech delay", "Routine ENT and audiology referral", "Glue ear needing audiometry and possible grommets"],
      ],
    },
  ],
  redFlags: [
    "Postauricular swelling, redness or tenderness with the pinna pushed down, out and forward - acute mastoiditis; admit for intravenous antibiotics and possible cortical mastoidectomy.",
    "Fever, severe headache, vomiting, neck stiffness, seizures or altered sensorium in a child with a discharging ear - meningitis or brain abscess; admit the same day.",
    "Facial nerve palsy on the side of an ear discharge - cholesteatoma eroding the fallopian canal or acute suppurative facial neuritis; same-day ENT referral.",
    "Vertigo, spontaneous nystagmus or a positive fistula test in a discharging ear - labyrinthine fistula; stop syringing and refer urgently.",
    "Foul-smelling scanty discharge with an attic or marginal perforation, granulation tissue or an aural polyp - unsafe squamous CSOM with cholesteatoma; needs CT temporal bone and surgery.",
    "Severe unremitting night otalgia with granulation at the floor of the canal in an elderly diabetic - malignant otitis externa; admit for imaging and prolonged anti-pseudomonal therapy.",
    "Sudden sensorineural component (Rinne positive with Weber lateralising to the good ear) in an ear with chronic disease - labyrinthitis or ossicular and cochlear erosion; urgent referral.",
  ],
  pearls: [
    "Redness of the drum in a screaming child proves nothing; bulging or an immobile drum on pneumatic otoscopy proves acute otitis media.",
    "Pain on pressing the tragus is otitis externa; pain relieved by a sudden discharge is a perforated otitis media.",
    "In acute otitis media the first prescription is regular analgesia; about 80% resolve in 3 days without an antibiotic, and 15 children must be treated for one extra child to be better at 2-7 days.",
    "Central perforation with profuse odourless mucoid discharge is safe; attic or marginal perforation with scanty foul discharge is unsafe - the smell and the site, not the volume, decide.",
    "Never use aminoglycoside ear drops through a perforation; use a fluoroquinolone drop instead.",
    "Aural toilet is treatment, not preparation for treatment - drops cannot work through debris.",
    "Any ear discharge with fever, headache, vertigo or facial weakness is a complication until proved otherwise and belongs in hospital, not on a repeat prescription.",
  ],
  theory: [
    {
      id: "eye-ent-otitis-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 2-year-old child is brought with fever, irritability and pulling at the right ear for two days. Discuss the diagnosis, differential diagnosis and management of acute otitis media in family practice, including indications for antibiotics and for referral.",
      openingLines: [
        "Acute otitis media is the rapid onset of middle ear inflammation with an effusion, presenting with otalgia, fever and irritability, and confirmed by a bulging, opaque or red tympanic membrane that is immobile on pneumatic otoscopy.",
        "It peaks between 6 and 24 months because the infant Eustachian tube is short, wide and horizontal, and it is the commonest reason for an antibiotic prescription in childhood, which makes accurate diagnosis and selective prescribing a core family practice skill.",
      ],
      answer: [
        {
          heading: "1. Aetiology and risk factors",
          points: [
            "Bacteria: Streptococcus pneumoniae, non-typeable Haemophilus influenzae, Moraxella catarrhalis, and Streptococcus pyogenes in older children; a viral upper respiratory infection usually precedes the episode.",
            "Risk factors: age 6-24 months, day care, absence of breastfeeding, supine bottle feeding, passive tobacco and biomass smoke, adenoid hypertrophy, allergic rhinitis, cleft palate and Down syndrome.",
          ],
        },
        {
          heading: "2. Clinical features and diagnosis",
          points: [
            "Symptoms: otalgia or ear tugging, fever, irritability, disturbed sleep and feeding, and sudden relief of pain with discharge if the drum perforates.",
            "Otoscopy: a bulging, opaque, yellow or red tympanic membrane with loss of the cone of light and reduced or absent mobility on pneumatic otoscopy; the mobility finding carries the diagnosis.",
            "Stages: tubal occlusion, pre-suppuration, suppuration, resolution (often after perforation), and complication or chronicity.",
            "Differential diagnosis: otitis externa (tragal tenderness, intact drum), otitis media with effusion (retracted amber drum, no fever), referred otalgia from dental caries, temporomandibular joint dysfunction, tonsillitis or cervical adenitis, teething, and a foreign body in the canal.",
          ],
        },
        {
          heading: "3. Management - symptomatic",
          points: [
            "Paracetamol 15 mg/kg six-hourly or ibuprofen 10 mg/kg eight-hourly, given regularly for 48-72 hours - analgesia is the first prescription.",
            "Adequate fluids, upright feeding, and avoidance of smoke exposure; no evidence supports decongestants, antihistamines or oral steroids.",
            "Safety-netting: return today if fever persists beyond 72 hours, if there is swelling behind the ear, if the child becomes drowsy or vomits, or if the face becomes asymmetrical.",
          ],
        },
        {
          heading: "4. Indications for immediate antibiotics and choice",
          points: [
            "Immediate antibiotics: age under 6 months; age 6-24 months with bilateral disease; otorrhoea from perforation; severe pain, temperature above 39 degrees C or systemic toxicity; immunodeficiency, craniofacial anomaly or cochlear implant.",
            "Otherwise delayed prescribing with review or a back-up prescription at 48-72 hours.",
            "First line: amoxicillin 80-90 mg/kg/day in 2-3 divided doses for 10 days under 2 years and 5-7 days over 2 years.",
            "Second line: amoxicillin-clavulanate 90/6.4 mg/kg/day if there has been an antibiotic in the last 30 days, if there is purulent conjunctivitis, or if there is no response at 48-72 hours.",
            "Penicillin allergy: azithromycin 10 mg/kg day 1 then 5 mg/kg for 4 days, or cefuroxime axetil 30 mg/kg/day.",
            "If the drum has perforated add ciprofloxacin 0.3% ear drops and keep the ear dry; never use aminoglycoside drops through a perforation.",
          ],
        },
        {
          heading: "5. Indications for referral and for myringotomy",
          points: [
            "Refer or admit for mastoiditis, meningitis or other intracranial complication, facial palsy, labyrinthitis, or failure of two courses of appropriate antibiotics.",
            "Myringotomy: severely bulging drum with intractable pain, no response to adequate antibiotics, neonate or immunocompromised child, and suspected incipient complication.",
            "Grommet insertion with or without adenoidectomy for recurrent AOM (three episodes in 6 months or four in a year) or for persistent bilateral effusion beyond 3 months with hearing loss.",
          ],
        },
        {
          heading: "6. Prevention and follow-up",
          points: [
            "Exclusive breastfeeding for 6 months, upright feeding, avoidance of tobacco and biomass smoke, and pneumococcal conjugate and influenza vaccination.",
            "Review at 6-12 weeks to confirm resolution of the effusion and normal hearing; refer for audiometry if the effusion persists beyond 3 months or there is speech delay.",
          ],
        },
      ],
      mustDraw: [
        "A labelled diagram of the normal tympanic membrane showing pars tensa, pars flaccida, handle of malleus, lateral process, umbo, cone of light and the four quadrants, with the site of a safe posteroinferior myringotomy incision marked.",
        "A flow chart: child with otalgia - otoscopy - bulging or immobile drum yes/no - immediate antibiotic criteria - delayed prescription - review at 48-72 hours - referral criteria.",
      ],
      markSplit: [
        { part: "Definition, aetiology and risk factors", marks: 2 },
        { part: "Clinical features, otoscopy and differential diagnosis", marks: 2 },
        { part: "Symptomatic management and analgesia", marks: 1 },
        { part: "Antibiotic indications, drug and dose", marks: 3 },
        { part: "Referral, myringotomy and prevention", marks: 2 },
      ],
      keywords: ["acute otitis media", "amoxicillin", "pneumatic otoscopy", "delayed prescribing", "myringotomy"],
    },
    {
      id: "eye-ent-otitis-t2",
      paper: "III",
      kind: "differentiate",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Differentiate safe (tubotympanic) from unsafe (atticoantral) chronic suppurative otitis media, and outline the management of each at primary care level.",
      openingLines: [
        "Chronic suppurative otitis media is a perforation of the tympanic membrane with persistent or recurrent otorrhoea for more than two weeks, and it is a leading preventable cause of hearing loss in India.",
        "It is divided into tubotympanic (mucosal, safe) disease, which threatens hearing, and atticoantral (squamous, unsafe) disease with cholesteatoma, which threatens life through bone erosion and intracranial spread.",
      ],
      answer: [
        {
          heading: "1. Tubotympanic (safe, mucosal) disease",
          points: [
            "Perforation is central in the pars tensa with an intact rim of annulus; the middle ear mucosa is the site of disease.",
            "Discharge is profuse, mucoid and odourless, intermittent, and provoked by upper respiratory infection or water entry.",
            "Hearing loss is conductive and usually 20-40 dB; there is no granulation, no polyp and no bone erosion.",
            "Complications are rare and are essentially limited to persistent hearing loss and tympanosclerosis.",
          ],
        },
        {
          heading: "2. Atticoantral (unsafe, squamous) disease",
          points: [
            "Perforation is in the attic (pars flaccida) or posterosuperior marginal, or there is a deep retraction pocket with keratin debris.",
            "Discharge is scanty, purulent and foul-smelling because of osteitis and anaerobic infection; granulation tissue or an aural polyp is often present.",
            "Cholesteatoma - keratinising squamous epithelium in the middle ear cleft - erodes ossicles, the fallopian canal, the lateral semicircular canal and the tegmen.",
            "Complications: ossicular erosion with severe conductive loss, labyrinthine fistula with vertigo, facial palsy, mastoiditis, meningitis, extradural and brain abscess, and lateral sinus thrombosis.",
          ],
        },
        {
          heading: "3. Assessment",
          points: [
            "Otoscopy after aural toilet with attention to the attic, tuning fork tests, pure tone audiometry, and swab for culture if discharge is persistent.",
            "High resolution CT of the temporal bones for any suspicion of squamous disease, complication or planned surgery; MRI with diffusion weighting for residual or recurrent cholesteatoma.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Safe disease: aural toilet, ciprofloxacin 0.3% drops 5 drops twice daily for 7-10 days, strict dry ear precautions, treatment of rhinitis, sinusitis and adenoids, then elective tympanoplasty once the ear is dry for 6-8 weeks.",
            "Unsafe disease: medical treatment is only temporising - definitive treatment is surgical removal of disease by canal wall down modified radical or atticotomy-based mastoidectomy, with hearing reconstruction as a secondary aim.",
            "Never use aminoglycoside drops through a perforation; avoid syringing an ear with suspected fistula.",
            "Counsel on dry ear precautions, hearing aid where surgery is not possible, and school hearing assessment in children.",
          ],
        },
      ],
      mustDraw: [
        "Two tympanic membrane diagrams side by side: a central pars tensa perforation with an intact annular rim (safe), and an attic pars flaccida perforation with crust and a posterosuperior retraction pocket (unsafe).",
      ],
      markSplit: [
        { part: "Definition and classification", marks: 1 },
        { part: "Differentiating table of the two types", marks: 2 },
        { part: "Complications of unsafe disease", marks: 1 },
        { part: "Management including drops, dry ear advice and surgery", marks: 1 },
      ],
      keywords: ["CSOM", "cholesteatoma", "attic perforation", "tympanoplasty", "modified radical mastoidectomy"],
    },
  ],
  mcqs: [
    {
      id: "eye-ent-otitis-q1",
      stem: "A 14-month-old child has fever of 38.8 degrees C and has been pulling at both ears for 24 hours. Otoscopy shows bilateral bulging, opaque tympanic membranes with reduced mobility. There is no discharge. What is the most appropriate management?",
      options: [
        "Regular paracetamol alone with review in 72 hours",
        "Oral amoxicillin 80-90 mg/kg/day for 10 days with regular analgesia",
        "Ciprofloxacin ear drops with oral analgesia",
        "Oral azithromycin for 3 days",
        "Immediate myringotomy under general anaesthesia",
      ],
      answer: 1,
      explanation:
        "A child aged 6-24 months with bilateral acute otitis media meets the criterion for immediate antibiotics, and the first-line drug is high-dose amoxicillin 80-90 mg/kg/day for 10 days in a child under 2 years, with analgesia. Analgesia alone with a delayed prescription is appropriate for unilateral mild disease in an older child, not for bilateral disease under 2 years. Ear drops cannot reach the middle ear through an intact drum and have no role in acute otitis media. Azithromycin is a penicillin-allergy alternative and is compromised by high macrolide resistance among Indian pneumococci. Myringotomy is reserved for intractable pain, treatment failure or a suspected complication, not for first presentation.",
      difficulty: "easy",
    },
    {
      id: "eye-ent-otitis-q2",
      stem: "A 24-year-old swimmer has three days of right ear pain and itching. Pulling the pinna and pressing the tragus reproduce severe pain; the canal is oedematous with scanty debris and the drum cannot be seen. He is afebrile. What is the best initial treatment?",
      options: [
        "Oral amoxicillin-clavulanate for 7 days",
        "Aural toilet and topical ciprofloxacin with dexamethasone drops, with a wick if the canal is closed",
        "Syringing with warm water followed by oral analgesia",
        "Clotrimazole 1% solution twice daily for 3 weeks",
        "Oral prednisolone with antihistamine",
      ],
      answer: 1,
      explanation:
        "This is uncomplicated acute otitis externa; the treatment is clearance of the canal under vision followed by a topical antibiotic-steroid drop, with a medicated wick when oedema prevents the drops from reaching the medial canal. Systemic antibiotics add nothing in uncomplicated otitis externa and are reserved for spreading cellulitis, diabetes with severe disease or immunosuppression. Syringing an ear whose drum has not been seen risks driving debris inward and perforating an already diseased drum. Clotrimazole treats otomycosis, which shows wet blotting-paper debris or black conidiophores rather than simple oedema. Oral steroids have no role.",
      difficulty: "easy",
    },
    {
      id: "eye-ent-otitis-q3",
      stem: "A 30-year-old man has had scanty, foul-smelling discharge from the left ear for two years. Otoscopy after suction shows crusting in the pars flaccida with granulation tissue; hearing loss is conductive at 45 dB. What does this picture indicate?",
      options: [
        "Tubotympanic CSOM, which can be managed with drops and elective tympanoplasty",
        "Atticoantral CSOM with cholesteatoma, needing CT temporal bone and mastoid surgery",
        "Chronic otitis externa with keratosis obturans",
        "Otitis media with effusion",
        "Tympanosclerosis of the pars tensa",
      ],
      answer: 1,
      explanation:
        "Scanty foul-smelling discharge with attic crusting and granulation tissue is squamous (atticoantral, unsafe) CSOM with cholesteatoma, which erodes bone and requires imaging and mastoid surgery rather than drops alone. Tubotympanic disease produces profuse odourless mucoid discharge through a central pars tensa perforation and carries no bone erosion. Keratosis obturans is a canal disease with a keratin plug and an intact drum, and typically causes pain and conductive loss without a perforation. Otitis media with effusion has an intact drum and no discharge. Tympanosclerosis appears as chalky white plaques in the pars tensa and does not discharge.",
      difficulty: "moderate",
    },
    {
      id: "eye-ent-otitis-q4",
      stem: "A 68-year-old man with poorly controlled type 2 diabetes has six weeks of severe right ear pain that keeps him awake, with scanty discharge. Granulation tissue is seen at the floor of the canal at the bony-cartilaginous junction and the ESR is 96 mm in the first hour. What is the diagnosis?",
      options: [
        "Furunculosis of the external auditory canal",
        "Malignant (necrotising) otitis externa",
        "Squamous cell carcinoma of the external canal",
        "Acute mastoiditis",
        "Otomycosis due to Aspergillus niger",
      ],
      answer: 1,
      explanation:
        "Unremitting nocturnal otalgia out of proportion to the findings, granulation tissue at the bony-cartilaginous junction of the canal floor, a very high ESR and poorly controlled diabetes define malignant otitis externa, a Pseudomonas osteomyelitis of the skull base needing 6-8 weeks of anti-pseudomonal therapy and glycaemic control. Furunculosis is an acutely tender staphylococcal swelling of the outer cartilaginous canal that settles within days. Carcinoma can look identical and is excluded by biopsy, but it is far less common in this exact diabetic setting and does not produce this systemic inflammatory picture as typically. Acute mastoiditis produces postauricular swelling with a pushed-forward pinna. Otomycosis is itchy rather than severely painful and shows fungal debris.",
      difficulty: "moderate",
    },
    {
      id: "eye-ent-otitis-q5",
      stem: "A 5-year-old with a discharging left ear for three days now has fever, a tender boggy swelling behind the ear and a pinna that is displaced downward, outward and forward. What is the correct action?",
      options: [
        "Increase the dose of oral amoxicillin and review in 48 hours",
        "Start topical ciprofloxacin drops and continue oral antibiotics at home",
        "Admit for intravenous antibiotics, imaging and possible cortical mastoidectomy",
        "Reassure that this is post-auricular lymphadenopathy from the ear infection",
        "Arrange audiometry and an outpatient ENT appointment in two weeks",
      ],
      answer: 2,
      explanation:
        "A tender postauricular swelling with the pinna pushed down, out and forward in a child with otorrhoea is acute mastoiditis, which requires admission for intravenous antibiotics, imaging and drainage or cortical mastoidectomy if there is a subperiosteal abscess or no response. Escalating oral antibiotics at home risks masked mastoiditis and intracranial spread. Topical drops do not treat bone infection. Post-auricular lymph nodes lie behind and below the mastoid tip and do not displace the pinna forward. A two-week outpatient appointment misses the window in which a brain abscess or meningitis can develop.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "eye-ent-otitis-c1",
      front: "Diagnostic otoscopic sign of acute otitis media.",
      back: "A bulging, opaque tympanic membrane with reduced or absent mobility on pneumatic otoscopy; redness alone in a crying child is not diagnostic.",
    },
    {
      id: "eye-ent-otitis-c2",
      front: "Which children with acute otitis media get an antibiotic immediately?",
      back: "Under 6 months; 6-24 months with bilateral disease; otorrhoea from perforation; severe pain, fever above 39 degrees C or toxicity; immunodeficiency, craniofacial anomaly or cochlear implant.",
    },
    {
      id: "eye-ent-otitis-c3",
      front: "First-line antibiotic and dose for acute otitis media in a child.",
      back: "Amoxicillin 80-90 mg/kg/day in 2-3 divided doses; 10 days if under 2 years or perforated, 5-7 days if over 2 years with mild disease.",
    },
    {
      id: "eye-ent-otitis-c4",
      front: "The one sign that says otitis externa rather than otitis media.",
      back: "Pain on pressing the tragus or pulling the pinna, with an intact drum and no fever.",
    },
    {
      id: "eye-ent-otitis-c5",
      front: "Safe versus unsafe CSOM in one line.",
      back: "Central pars tensa perforation with profuse odourless mucoid discharge is safe; attic or posterosuperior marginal perforation with scanty foul discharge, granulation or polyp is unsafe squamous disease with cholesteatoma.",
    },
    {
      id: "eye-ent-otitis-c6",
      front: "Which ear drops must never be used through a perforation, and what is used instead?",
      back: "Avoid aminoglycosides (neomycin, gentamicin, framycetin) because of ototoxicity; use ciprofloxacin 0.3% drops instead.",
    },
    {
      id: "eye-ent-otitis-c7",
      front: "Signs of acute mastoiditis.",
      back: "Postauricular swelling, redness and tenderness with the pinna pushed down, out and forward, sagging of the posterosuperior canal wall, fever and otorrhoea - admit.",
    },
    {
      id: "eye-ent-otitis-c8",
      front: "Gradenigo triad and what it means.",
      back: "Otorrhoea, retro-orbital or deep facial pain (trigeminal) and lateral rectus palsy (sixth nerve) - petrous apicitis complicating middle ear suppuration.",
    },
    {
      id: "eye-ent-otitis-c9",
      front: "Malignant otitis externa - who, what and how long treated?",
      back: "Elderly diabetic or immunocompromised patient, Pseudomonas skull base osteomyelitis with severe night otalgia and canal floor granulations; ciprofloxacin 750 mg twice daily or intravenous anti-pseudomonal therapy for 6-8 weeks with glycaemic control.",
    },
    {
      id: "eye-ent-otitis-c10",
      front: "When is glue ear referred for grommets?",
      back: "Bilateral effusion persisting beyond 3 months with hearing loss above 25-30 dB, or with speech delay or educational difficulty.",
    },
  ],
  references: [
    "PL Dhingra and Shruti Dhingra, Diseases of Ear, Nose and Throat and Head and Neck Surgery, 8th edition, 2021",
    "Scott-Brown's Otorhinolaryngology, Head and Neck Surgery, 8th edition, 2018",
    "American Academy of Pediatrics clinical practice guideline, The Diagnosis and Management of Acute Otitis Media, 2013 (reaffirmed)",
    "NICE guideline NG91, Otitis media (acute): antimicrobial prescribing, 2018, and NG98, Otitis media with effusion in under 12s, 2016",
    "WHO, Chronic suppurative otitis media: burden of illness and management options, 2004",
    "National Programme for Prevention and Control of Deafness, operational guidelines, MoHFW, Government of India",
    "Indian Academy of Pediatrics, Standard Treatment Guidelines, Acute Otitis Media, 2022",
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
