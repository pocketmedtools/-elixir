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
