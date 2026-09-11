/**
 * Diagrams for geriatrics-ethics, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "geriatrics-ethics-cga": [
    {
      kind: "branch",
      heading: "The domains a CGA must cover",
      caption: "Goals and values are the domain most often skipped and the one that decides the plan.",
      root: "Comprehensive geriatric assessment",
      arms: [
        {
          label: "Medical",
          steps: [
            "Full problem list and multimorbidity",
            "Complete drug history including ayurvedic and herbal preparations",
            "Pain, vision, hearing, dentition",
            "Continence, sleep, bowels, immunisation",
          ],
        },
        {
          label: "Functional",
          steps: [
            "Basic activities of daily living - Katz ADL",
            "Instrumental activities - Lawton IADL",
            "Loss of IADLs precedes loss of ADLs and is the earliest marker of dementia",
          ],
        },
        {
          label: "Mobility and balance",
          steps: [
            "Gait speed, Timed Up and Go, chair stand",
            "Footwear and walking aid",
            "Watch the patient rise and walk to the door",
          ],
        },
        {
          label: "Cognition and mood",
          steps: [
            "A validated cognitive screen for that patient's literacy",
            "A depression screen",
            "Untreated depression is the commonest reversible cause of apparent decline",
          ],
        },
        {
          label: "Nutrition",
          steps: [
            "Unintentional weight loss and MNA short form",
            "Dentition and swallowing",
            "Can the patient actually buy, cook and eat food?",
          ],
        },
        {
          label: "Social, financial, environment",
          steps: [
            "Who lives in the house and who cooks",
            "Income and who controls it",
            "Steps, loose mats, wet bathroom floor, squat toilet, poor lighting",
            "The caregiver's own health and strain",
          ],
        },
        {
          label: "Goals and values",
          tone: "good",
          steps: [
            "What matters most to the patient",
            "The 5 Ms - Mind, Mobility, Medications, Multicomplexity, Matters Most",
            "An early conversation about future care preferences",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Fitting a CGA into a busy family practice",
      caption: "A single 45-minute sitting is unrealistic; split it over three visits.",
      steps: [
        {
          label: "Select who needs it",
          detail:
            "Age 60 or more with a fall, incontinence, weight loss, confusion, immobility, five or more drugs, recent discharge, or a caregiver who says the patient is not managing",
          tone: "decision",
        },
        {
          label: "Visit 1 - drugs, function, mobility",
          detail: "Brown bag review of every strip, bottle, inhaler, drop, tonic and churna in the house",
        },
        {
          label: "Visit 2 - cognition, mood, nutrition",
          detail: "Use a tool validated for the patient's literacy, not the MMSE by reflex",
        },
        {
          label: "Visit 3 - social, environment, goals",
          detail: "Interview the patient alone for part of it - abuse, exploitation, alcohol and low mood are not disclosed with a son in the room",
        },
        {
          label: "The four things never done",
          detail: "Feet and footwear, lying and standing blood pressure, near-card visual acuity and whisper test, and look inside the mouth",
          tone: "warn",
        },
        {
          label: "Write one problem list with functional goals",
          detail:
            "Ranked by what matters to the patient; a goal like walking to the temple without stopping, not an HbA1c number",
          tone: "good",
        },
        {
          label: "Reconcile every drug against the plan",
          detail: "Relax targets in advanced frailty - HbA1c 7.5-8.5% and blood pressure below 150/90 mmHg",
        },
        {
          label: "Name one responsible clinician and review",
          detail:
            "Review at 4-12 weeks by frailty and after every admission - discharge from hospital is the highest-risk transition",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Functional scales - which one measures what",
      caption: "The commonest exam trap is answering with a basic ADL scale when the deficit described is instrumental.",
      columns: ["Scale", "What it measures", "Score and interpretation"],
      rows: [
        [
          "Katz ADL",
          "Basic self-care - bathing, dressing, toileting, transferring, continence, feeding",
          "0-6; 6 independent, 4 moderate impairment, 2 or less severe dependence",
        ],
        [
          "Lawton IADL",
          "Telephone, shopping, cooking, housekeeping, laundry, transport, medication, finances",
          "0-8; the earliest functional marker of cognitive decline",
        ],
        [
          "Barthel Index",
          "Ten items of basic self-care",
          "0-100; the better instrument for tracking stroke and hip fracture rehabilitation",
        ],
        [
          "Braden scale",
          "Pressure ulcer risk",
          "Not a functional measure at all",
        ],
        [
          "Clinical Frailty Scale",
          "Global clinical judgement of frailty",
          "Nine points, very fit to terminally ill; not domain specific",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Screening cut-offs to be able to quote",
      columns: ["Domain", "Tool", "Abnormal at"],
      rows: [
        ["Cognition", "MMSE out of 30", "23 or less suggests impairment"],
        ["Cognition", "MoCA out of 30", "Under 26; add 1 point if schooling is 12 years or fewer"],
        ["Cognition", "Mini-Cog", "2 or less of 5; three-word recall plus clock drawing, 3 minutes"],
        ["Cognition", "AMT-10", "6 or less"],
        [
          "Cognition, low literacy",
          "Hindi Mental State Examination or vernacular MoCA",
          "Use instead of the MMSE, which penalises illiteracy heavily",
        ],
        ["Mood", "Geriatric Depression Scale 15", "5 or more suggests depression, 10 or more makes it almost certain"],
        ["Nutrition", "MNA short form 0-14", "8-11 at risk, 0-7 malnourished"],
        ["Mobility", "Usual gait speed over 4 metres", "Under 0.8 m/s"],
        ["Mobility", "Timed Up and Go", "12 seconds or more; over 20 seconds indicates functional dependence"],
        ["Mobility", "Short Physical Performance Battery", "0-12; 8 or less is poor performance"],
        ["Strength", "Grip strength, best of three squeezes", "Under 28 kg in men, under 18 kg in women - AWGS 2019"],
      ],
    },
  ],

  "geriatrics-ethics-falls": [
    {
      kind: "branch",
      heading: "Why older people fall",
      caption: "One in three over 65 and one in two over 80 fall each year; falls are almost never single-cause.",
      root: "Fall in an older person",
      arms: [
        {
          label: "Intrinsic",
          steps: [
            "Age over 80 and a previous fall",
            "Weak hip abductors and quadriceps, gait and balance impairment",
            "Cataract, macular degeneration, glaucoma, new bifocals or varifocals",
            "Neuropathy, vestibular disease, parkinsonism, stroke",
            "Cognitive impairment, depression, incontinence, foot deformity",
          ],
        },
        {
          label: "Cardiovascular",
          steps: [
            "Orthostatic and postprandial hypotension",
            "Bradyarrhythmia, complete heart block, tachyarrhythmia",
            "Aortic stenosis, carotid sinus hypersensitivity, vasovagal syncope",
            "These cause the fall with no memory of hitting the ground",
          ],
        },
        {
          label: "Drugs (FRIDs)",
          tone: "warn",
          steps: [
            "Benzodiazepines, Z-drugs, antipsychotics",
            "Tricyclics and other antidepressants, anticonvulsants, opioids, anticholinergics",
            "Antihypertensives, especially alpha-blockers and any recently intensified regimen",
            "Nitrates, diuretics, sulfonylureas and insulin, alcohol",
            "Risk rises steeply with four or more drugs of any kind",
          ],
        },
        {
          label: "Extrinsic - the Indian home",
          steps: [
            "Wet bathroom floor with no drainage slope",
            "Squat toilet and rising from squatting",
            "High thresholds, steep stairs without a handrail, loose mats, trailing wires",
            "Sleeping on the floor, no light switch by the bed",
            "Open-heeled chappals instead of fitted footwear",
          ],
        },
        {
          label: "Situational",
          steps: [
            "Getting up at night to pass urine - one of the strongest triggers",
            "Rushing to the door or telephone",
            "Carrying grandchildren, climbing on a stool",
            "Travelling on a crowded bus or train",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Assessing the faller",
      caption: "Ask the three STEADI questions of every older patient every year.",
      steps: [
        {
          label: "Three STEADI questions, yearly",
          detail: "Have you fallen in the past year, do you feel unsteady, are you worried about falling - a yes to any triggers the full assessment",
          tone: "decision",
        },
        {
          label: "Lying and standing blood pressure at 1 and 3 minutes",
          detail:
            "A fall of 20 mmHg systolic or 10 mmHg diastolic within 3 minutes defines orthostatic hypotension - the single most rewarding measurement and the one most often skipped",
          tone: "good",
        },
        {
          label: "Cardiac examination",
          detail: "Pulse and rhythm, murmur of aortic stenosis, carotid auscultation",
        },
        {
          label: "Neurological and musculoskeletal examination",
          detail: "Focal deficit, parkinsonism, proprioception, cerebellar signs, neuropathy; hips, knees, feet and the footwear worn",
        },
        {
          label: "Vision, cognition and mood",
          detail: "Visual acuity with a near card, a cognitive screen and a mood screen",
        },
        {
          label: "Unexplained, unwitnessed or facial injury?",
          detail: "About a third of older people who faint have amnesia for it and report a mechanical fall - do an ECG and rhythm monitoring",
          tone: "decision",
        },
        {
          label: "Head strike on an anticoagulant",
          detail: "Same-day non-contrast CT head even if fully alert with GCS 15; warn about chronic subdural presenting weeks later",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Multifactorial intervention, strongest evidence first",
      caption: "Exercise is the single most effective intervention; walking alone is not.",
      steps: [
        {
          label: "Progressive strength plus challenging balance",
          detail:
            "At least 3 hours a week, sustained long term; the Otago programme cuts falls by about 35% in the over-80s and tai chi does the same in fitter elders",
          tone: "good",
        },
        {
          label: "Walking alone does not prevent falls",
          detail: "In someone with poor balance, brisk walking may increase them",
          tone: "warn",
        },
        {
          label: "Medication review and deprescribing",
          detail: "Stop or taper benzodiazepines, Z-drugs and antipsychotics; substitute alpha-blockers; relax glycaemic targets - written about most, done least",
        },
        {
          label: "Treat orthostatic hypotension",
          detail:
            "Drug list first, then staged rising, sit on the bed edge, salt and fluid, compression, head-up bed; fludrocortisone or midodrine are second line",
        },
        {
          label: "Vision and feet",
          detail:
            "Prompt first-eye cataract surgery, single-vision distance glasses for walking outdoors, treat corns and calluses, fitted shoes with a firm sole and a fastening",
        },
        {
          label: "Home hazard modification",
          detail:
            "Grab rails, a raised commode seat over the squat pan, non-slip mats and floor drainage, handrails both sides of the stairs, a night light and a bedside urinal",
        },
        {
          label: "Bone health",
          detail: "Calcium 1000-1200 mg and vitamin D 800-1000 IU daily where intake is inadequate; treat osteoporosis where indicated",
        },
        {
          label: "Never a high-dose intermittent bolus of vitamin D",
          detail: "For example 500,000 IU annually - it increases falls",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Fall-risk-increasing drugs and what to do about them",
      columns: ["Drug class", "How it causes falls", "What to do"],
      rows: [
        [
          "Benzodiazepines and Z-drugs",
          "Sedation and delayed reaction time",
          "Among the strongest FRIDs - taper and stop",
        ],
        [
          "Antipsychotics",
          "Sedation, parkinsonism, orthostatic hypotension",
          "Avoid for behavioural symptoms of dementia; if used, lowest dose, shortest time, review every 12 weeks",
        ],
        [
          "Tricyclics and SSRIs",
          "Orthostatic hypotension, hyponatraemia, sedation",
          "Avoid tricyclics; if an SSRI is needed check sodium at 2-4 weeks",
        ],
        [
          "Alpha-blockers - prazosin, tamsulosin",
          "Orthostatic hypotension, worst on rising at night",
          "Substitute another agent",
        ],
        [
          "Antihypertensives, nitrates, diuretics",
          "Orthostatic and postprandial hypotension",
          "Reduce or withdraw where blood pressure is low or a postural drop is present",
        ],
        [
          "Sulfonylureas and insulin",
          "Hypoglycaemia",
          "Relax HbA1c to 7.5-8.5% in frailty and stop glibenclamide",
        ],
        [
          "Anticoagulant in atrial fibrillation",
          "Bleeding after a fall, not falling itself",
          "Do not stop it - about 295 falls a year would be needed to offset the stroke benefit",
        ],
      ],
    },
  ],

  "geriatrics-ethics-polypharmacy": [
    {
      kind: "flow",
      heading: "Deprescribing in six defensible steps",
      caption: "Deprescribing is a trial, not a punishment - saying so is what makes families agree.",
      steps: [
        {
          label: "1. List everything",
          detail:
            "Brown bag review - every strip, bottle, inhaler, eye drop, ointment, insulin pen, tonic, churna and vitamin in the house, plus over-the-counter analgesics and drugs borrowed from relatives",
        },
        {
          label: "2. Is the indication still valid?",
          detail:
            "Ask the two geriatric questions - what is the time to benefit of this drug, and what is this patient's remaining life expectancy? A statin for primary prevention takes 2-5 years to help",
          tone: "decision",
        },
        {
          label: "3. Identify harm",
          detail:
            "Screen with Beers and STOPP, compute the anticholinergic burden, look for a prescribing cascade, check renal dosing against creatinine clearance, look for duplication across prescribers",
        },
        {
          label: "4. Prioritise, one drug at a time",
          detail:
            "Stop first the drug with the highest harm and lowest benefit - benzodiazepines and Z-drugs, antipsychotics for behaviour, long-term PPIs and NSAIDs, anticholinergics, glibenclamide",
        },
        {
          label: "5. Taper what needs tapering",
          detail:
            "Benzodiazepines, beta-blockers, clonidine, corticosteroids, SSRIs and SNRIs, proton pump inhibitors, opioids, levodopa and antiepileptics all need a taper; antihistamines, statins and vitamins can be stopped outright",
          tone: "warn",
        },
        {
          label: "6. Agree, document, follow up",
          detail:
            "Explain in plain language, record what was stopped and why, warn what to expect, and set a review date of 1-4 weeks per drug stopped; the drug can be restarted",
          tone: "good",
        },
      ],
    },
    {
      kind: "cycle",
      heading: "The prescribing cascade",
      caption: "Break it by asking of every new symptom whether a drug could be causing it.",
      steps: [
        { label: "A drug is started", detail: "Amlodipine for hypertension" },
        { label: "A predictable adverse effect appears", detail: "Bilateral ankle oedema" },
        { label: "It is misread as a new disease", detail: "Called fluid overload", tone: "warn" },
        { label: "A second drug is added", detail: "Furosemide" },
        { label: "New harm follows", detail: "Nocturia, urgency and a fall - and the cycle begins again" },
      ],
    },
    {
      kind: "branch",
      heading: "The explicit prescribing tools",
      caption: "START is about omissions, STOPP about excesses - that one line separates them reliably.",
      root: "Screening an older person's drug list",
      arms: [
        {
          label: "STOPP - stop these",
          tone: "warn",
          steps: [
            "Benzodiazepine prescribed for more than four weeks",
            "Long-term NSAID in a patient with heart failure",
            "Antimuscarinic drug in a patient with dementia",
            "Duplicate drugs from the same pharmacological class",
          ],
        },
        {
          label: "START - begin these",
          tone: "good",
          steps: [
            "Evidence-based treatments that are being wrongly omitted",
            "Bone protection in a patient on long-term systemic corticosteroids",
          ],
        },
        {
          label: "Beers - avoid in older adults",
          steps: [
            "First-generation antihistamines - diphenhydramine, chlorpheniramine, hydroxyzine, promethazine",
            "All benzodiazepines and Z-drugs; antipsychotics for behavioural symptoms of dementia",
            "Tricyclic antidepressants; muscle relaxants; oral bladder antimuscarinics such as oxybutynin",
            "Glibenclamide - prolonged hypoglycaemia; sliding-scale insulin alone",
            "Long-term NSAIDs; proton pump inhibitor beyond 8 weeks without an indication",
            "Digoxin above 0.125 mg daily or first line in atrial fibrillation; peripheral alpha-1 blockers for hypertension",
            "Metoclopramide beyond 12 weeks",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Which drugs need tapering, and how",
      caption: "The exam question is almost always which drug can simply be stopped.",
      columns: ["Drug", "Risk if stopped abruptly", "How to stop it"],
      rows: [
        [
          "Benzodiazepines and Z-drugs",
          "Rebound insomnia and anxiety, tremor, seizures",
          "Reduce by 10-25% of the dose every 2-4 weeks, slower at the end",
        ],
        ["Beta-blockers", "Rebound tachycardia, angina, myocardial infarction", "Halve the dose weekly over 2-3 weeks"],
        ["Clonidine", "Rebound hypertensive crisis", "Reduce gradually over 1-2 weeks, substituting another agent"],
        [
          "Systemic corticosteroids beyond 3 weeks",
          "Adrenal insufficiency",
          "Taper by physiological steps with sick-day rules explained",
        ],
        [
          "SSRI or SNRI - paroxetine, venlafaxine",
          "Discontinuation syndrome - dizziness, paraesthesia, agitation",
          "Reduce over 4 weeks or longer; consider switching to fluoxetine first",
        ],
        [
          "Proton pump inhibitor",
          "Rebound acid hypersecretion",
          "Halve the dose for 2-4 weeks, then alternate days, then on demand",
        ],
        [
          "Antihistamines, statins, vitamins",
          "No withdrawal or rebound syndrome",
          "Stop outright",
        ],
      ],
    },
  ],

  "geriatrics-ethics-palliative-symptom-control": [
    {
      kind: "ladder",
      heading: "The WHO analgesic ladder (1986)",
      caption: "If pain is severe at presentation it is correct to start at step 3 rather than climb.",
      steps: [
        {
          label: "Step 1 - non-opioid",
          detail: "Paracetamol up to 3 g daily in the frail, or an NSAID where the kidneys and stomach allow - useful in bone pain",
        },
        {
          label: "Step 2 - weak opioid plus non-opioid",
          detail: "Codeine or tramadol added to the non-opioid",
        },
        {
          label: "Step 3 - strong opioid plus non-opioid",
          detail: "Oral morphine, titrated against the pain",
        },
        {
          label: "An adjuvant may be added at any step",
          detail: "Review at every visit: is the pain controlled at rest, on movement and at night?",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Starting and titrating oral morphine",
      caption: "Every first morphine prescription carries a laxative with it.",
      steps: [
        {
          label: "Start immediate-release oral morphine",
          detail:
            "5-10 mg every 4 hours in an opioid-naive adult; 2.5-5 mg in the frail elderly, in renal impairment or the very cachectic, with the interval lengthened to 6 hours if needed",
        },
        {
          label: "Prescribe a stimulant laxative with the first dose",
          detail:
            "Bisacodyl 5-10 mg or senna 2 tablets at night, titrated up; add lactulose 15-30 mL or macrogol if the stool is hard. Never a bulk-forming agent such as isphagula",
          tone: "warn",
        },
        {
          label: "Give an antiemetic for the first few days",
          detail: "Haloperidol 0.5-1.5 mg at night; nausea affects about a third and settles in 3-5 days",
        },
        {
          label: "Breakthrough dose: one-sixth of the daily total",
          detail:
            "10 mg four-hourly is 60 mg a day, so the rescue dose is 10 mg, as often as hourly if needed",
        },
        {
          label: "Review at 24 hours and titrate",
          detail:
            "Add the total breakthrough used to the regular total and redistribute; increase by 30-50% a step and recalculate the rescue dose",
        },
        {
          label: "A double dose at bedtime",
          detail: "Avoids waking the patient at 2 am",
        },
        {
          label: "Opioid toxicity: reverse in small increments",
          detail:
            "Respiratory rate under 8 with unrousable sedation and pinpoint pupils: dilute naloxone 400 micrograms in 10 mL saline and give 0.5 mL (20 micrograms) intravenously every 2 minutes. A full ampoule reverses all analgesia and precipitates a pain and withdrawal crisis",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Opioid conversions - learn these exactly",
      caption: "Reduce by 25-50% whenever you switch opioid, because cross-tolerance is incomplete.",
      columns: ["From", "To", "Do this"],
      rows: [
        ["Oral morphine", "Subcutaneous morphine", "Divide by 2 - use when swallowing fails or in the last days"],
        ["Oral morphine", "Intravenous morphine", "Divide by 2 to 3; use 3 when uncertain"],
        ["Oral codeine", "Oral morphine", "Divide by 10 - codeine 60 mg is about 6 mg of morphine"],
        ["Oral tramadol", "Oral morphine", "Divide by about 5 - tramadol 50 mg is about 10 mg of morphine"],
        ["Oral morphine", "Oral oxycodone", "Divide by about 1.5 to 2"],
        ["Oral morphine", "Oral hydromorphone", "Divide by about 4 to 5"],
        [
          "Oral morphine 60-90 mg per 24 hours",
          "Transdermal fentanyl",
          "About 25 micrograms per hour; onset 12-24 h, offset 17-24 h - never for unstable pain and never to titrate",
        ],
        ["Any opioid", "A different opioid", "Reduce the calculated dose by 25-50%, then titrate upward"],
      ],
    },
    {
      kind: "compare",
      heading: "Choosing the antiemetic by mechanism",
      caption: "Match the receptor to the cause rather than reaching for the same drug every time.",
      columns: ["Cause of vomiting", "Target", "Drug and dose"],
      rows: [
        [
          "Opioids, uraemia, hypercalcaemia, hepatic failure",
          "D2 at the chemoreceptor trigger zone",
          "Haloperidol 0.5-1.5 mg orally or subcutaneously at night",
        ],
        [
          "Gastric stasis, functional obstruction, squashed stomach",
          "D2 and 5-HT4, prokinetic",
          "Metoclopramide or domperidone 10 mg three times daily before meals",
        ],
        [
          "Vestibular, motion, raised intracranial pressure",
          "H1 and muscarinic",
          "Cyclizine 50 mg up to three times daily, or promethazine",
        ],
        ["Chemotherapy and radiotherapy", "5-HT3", "Ondansetron 4-8 mg twice daily"],
        [
          "Raised intracranial pressure, bowel obstruction",
          "Anti-oedema adjuvant",
          "Dexamethasone 8-16 mg daily as a morning dose",
        ],
        [
          "Inoperable malignant bowel obstruction",
          "Reduces secretions and colic",
          "Octreotide 300-600 micrograms per 24 h subcutaneously with hyoscine butylbromide",
        ],
      ],
    },
  ],

  "geriatrics-ethics-consent-capacity-records": [
    {
      kind: "flow",
      heading: "Consent and capacity at the bedside",
      caption: "Blanket consent on an admission form is not valid consent for a specific procedure.",
      steps: [
        {
          label: "Is the patient 18 or over?",
          detail: "Indian Majority Act 1875 - the age of independent consent to treatment, anaesthesia and surgery",
          tone: "decision",
        },
        {
          label: "Does the patient have capacity for this decision?",
          detail:
            "Mental Healthcare Act 2017 section 4 - understand the information, appreciate the reasonably foreseeable consequences, communicate the decision; add retain and weigh. Capacity is presumed, decision-specific and time-specific",
          tone: "decision",
        },
        {
          label: "A cognitive score is not a capacity assessment",
          detail: "A patient with an MMSE of 18 may retain capacity for a simple decision, and an unwise decision is not evidence of incapacity",
          tone: "warn",
        },
        {
          label: "Capacity present - disclose fully",
          detail:
            "Diagnosis, nature and purpose, material risks both common-and-minor and rare-and-grave, reasonable alternatives, the consequences of doing nothing, and who will perform it",
        },
        {
          label: "In a language the patient understands",
          detail:
            "Free to ask questions and free to refuse; taken by a doctor who understands the procedure, never delegated to a nurse or a clerk",
        },
        {
          label: "Record the counselling in the notes",
          detail: "The note in the record, not the signature on the form, is what persuades a court that consent was informed",
          tone: "good",
        },
        {
          label: "Capacity absent - act in best interests",
          detail:
            "Correct reversible causes first; then previously expressed wishes and values, the family, and the nominated representative under section 14; choose the least restrictive option and record the reasoning",
        },
        {
          label: "Emergency and no one authorised available",
          detail: "Treat under the doctrine of necessity - formerly IPC section 92, now BNS section 30 - giving no more than is necessary",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Who consents, and to what",
      root: "Whose signature makes the treatment lawful",
      arms: [
        {
          label: "18 years and above, with capacity",
          tone: "good",
          steps: [
            "Consents independently to treatment, procedure, anaesthesia and surgery",
            "A relative cannot consent on behalf of a competent adult",
            "Consent for a diagnostic procedure does not extend to therapeutic surgery",
          ],
        },
        {
          label: "12 to 18 years",
          steps: ["May consent to a physical examination", "Guardian consents for surgery and anaesthesia"],
        },
        {
          label: "Below 12 years",
          steps: ["Parent or lawful guardian consents"],
        },
        {
          label: "Adult lacking capacity",
          steps: [
            "Lawful guardian, or the nominated representative under Mental Healthcare Act 2017 section 14",
            "India has no general statute for substitute decisions in physical illness - state this gap",
          ],
        },
        {
          label: "Emergency, consent not obtainable",
          tone: "warn",
          steps: [
            "Doctrine of necessity - BNS section 30, formerly IPC section 92",
            "Only where treatment is immediately necessary to save life or prevent serious harm",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Landmark Indian medico-legal authorities",
      columns: ["Case", "Year", "What it settled"],
      rows: [
        [
          "Samira Kohli v Prabha Manchanda",
          "2008",
          "Consent for a diagnostic procedure does not extend to therapeutic surgery; a relative cannot consent for a competent adult; disclosure judged by the Bolam real consent standard",
        ],
        [
          "Jacob Mathew v State of Punjab",
          "2005",
          "Criminal negligence must be gross or reckless, not an error of judgement; a credible opinion from another doctor before prosecution",
        ],
        [
          "IMA v V.P. Shantha",
          "1995",
          "Medical services are service under consumer law except where free to everybody; still binding, but referred for reconsideration by a larger bench in 2024",
        ],
        [
          "Mr X v Hospital Z",
          "1998",
          "Disclosing HIV status to a prospective spouse was not a breach of confidentiality; cite it for the disclosure principle only",
        ],
        [
          "K.S. Puttaswamy v Union of India",
          "2017",
          "Privacy, including informational privacy over medical records, is a fundamental right under Article 21",
        ],
        [
          "Parmanand Katara v Union of India",
          "1989",
          "Emergency treatment must be given first; medico-legal formalities never justify delay",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Medical records - keeping and releasing them",
      caption: "Three years is the regulatory minimum, not safe practice.",
      columns: ["Requirement", "The rule", "Source"],
      rows: [
        [
          "Indoor patient records",
          "Maintain for at least 3 years from the date of commencement of treatment, in the Appendix 3 format",
          "Regulation 1.3.1, MCI Ethics Regulations 2002",
        ],
        ["Supply on request", "Within 72 hours to the patient or an authorised attendant", "Regulation 1.3.2"],
        ["Medico-legal cases", "Maintain a register of medico-legal cases", "Regulation 1.3.3"],
        [
          "Practical retention",
          "Adults 5-8 years; a child until majority plus 3 years; medico-legal, maternity, oncology and implant records 10 years or permanently",
          "Limitation Act 3 years, Consumer Protection Act 2 years, no limitation for serious crime",
        ],
        [
          "Who may access it",
          "The patient, a person authorised in writing, the legal heir after death, a court or police under due process, an insurer with authorisation - a relative has no automatic right",
          "Keep the original, take a written acknowledgement, record what was given and to whom",
        ],
        [
          "How to write an entry",
          "Legible, in ink, dated and timed, signed with the name in capitals and the registration number, written contemporaneously and never in anticipation",
          "Record findings including relevant negatives, the counselling given, and the patient's own words where they matter",
        ],
      ],
    },
  ],

  "geriatrics-ethics-dementia-caregiver": [
    {
      kind: "compare",
      heading: "Delirium, dementia and depression",
      caption: "The single highest-yield table in geriatrics; inattention is the cardinal feature of delirium.",
      columns: ["Feature", "Delirium", "Dementia", "Depression (pseudodementia)"],
      rows: [
        ["Onset", "Hours to days, acute", "Months to years, insidious", "Weeks, often datable to a life event"],
        [
          "Course over the day",
          "Fluctuating, worse at night",
          "Stable through the day, slowly progressive",
          "Worse in the morning, mood diurnal",
        ],
        [
          "Consciousness and attention",
          "Clouded and inattentive - the cardinal feature",
          "Clear until very late",
          "Clear, but poor concentration and effort",
        ],
        [
          "Memory complaint",
          "Not voiced by the patient",
          "Minimised by the patient, reported by the family",
          "Emphasised by the patient more than the family",
        ],
        ["Typical answers", "Muddled, incoherent", "Near misses and confabulation", "Repeated I do not know"],
        ["Psychomotor state", "Hyperactive, hypoactive or mixed", "Normal until late", "Retarded or agitated"],
        ["Screening tool", "4AT or CAM", "Mini-Cog, MoCA, HMSE, ACE-III", "GDS-15 or PHQ-9"],
        [
          "Action",
          "Medical emergency - find and treat the cause",
          "Stage, treat contributors, support the caregiver",
          "Treat the depression, then reassess cognition",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Distinguishing the common dementias",
      columns: ["Type", "Onset and course", "Characteristic features", "Key management point"],
      rows: [
        [
          "Alzheimer disease (50-60%)",
          "Insidious, gradually progressive over years",
          "Early episodic memory loss, word-finding difficulty, visuospatial disorientation, normal neurology early",
          "Cholinesterase inhibitor in mild to moderate disease, memantine in moderate to severe",
        ],
        [
          "Vascular dementia (20-30%)",
          "Stepwise, with abrupt declines",
          "Focal signs, early gait disturbance and urinary symptoms, executive slowing, emotional lability",
          "Aggressive control of blood pressure, diabetes, lipids and smoking",
        ],
        [
          "Dementia with Lewy bodies (5-10%)",
          "Progressive with marked day-to-day fluctuation",
          "Fluctuating attention, recurrent well-formed visual hallucinations, REM sleep behaviour disorder, parkinsonism within a year of cognitive onset",
          "Cholinesterase inhibitors help; antipsychotics are dangerous - severe neuroleptic sensitivity",
        ],
        [
          "Frontotemporal dementia",
          "Onset usually before 65, progressive",
          "Disinhibition, apathy, loss of empathy, stereotypies, hyperorality; or progressive aphasia; memory relatively spared early",
          "Cholinesterase inhibitors do not help and may worsen behaviour; consider an SSRI",
        ],
        [
          "Normal pressure hydrocephalus",
          "Subacute over months",
          "Magnetic gait apraxia first, then urinary incontinence, then cognitive slowing; ventriculomegaly on imaging",
          "Potentially reversible - refer for a tap test and shunt assessment",
        ],
        [
          "Mixed dementia",
          "Combined features",
          "Alzheimer pathology with cerebrovascular disease; probably the commonest in the very old",
          "Treat both the Alzheimer component and the vascular risk factors",
        ],
      ],
    },
    {
      kind: "cycle",
      heading: "DICE - managing behavioural symptoms of dementia",
      caption: "BPSD affects up to 90% at some stage; run the loop again when the plan stops working.",
      steps: [
        {
          label: "Describe the behaviour precisely",
          detail: "Who, what, when and where - not just agitated",
        },
        {
          label: "Investigate the cause",
          detail:
            "Pain, constipation, urinary retention, infection, hunger, thirst, boredom, too much or too little stimulation, a new drug, a change of environment or caregiver",
          tone: "warn",
        },
        {
          label: "Create a plan",
          detail: "Treat the cause first; keep the routine identical, do not argue with a delusion, do not test memory, one instruction at a time",
        },
        {
          label: "Evaluate whether it worked",
          detail: "An abrupt change over days in a settled patient is superimposed delirium until proved otherwise",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Drug treatment in dementia, in order of resort",
      caption: "Benefits are modest and should be described honestly to the family.",
      steps: [
        {
          label: "Non-drug measures first",
          detail: "Structured education, skills training for specific behaviours, respite care, peer support groups; brief unstructured counselling alone does not help",
          tone: "good",
        },
        {
          label: "Cholinesterase inhibitor",
          detail:
            "Mild to moderate Alzheimer disease, DLB and Parkinson disease dementia: donepezil 5 mg at night to 10 mg after 4-6 weeks; rivastigmine 1.5 mg twice daily to 6 mg twice daily or patch 4.6 to 9.5 mg per 24 h; galantamine 8 mg to 16-24 mg daily. Check the pulse - bradycardia and heart block",
        },
        {
          label: "Memantine",
          detail:
            "Moderate to severe Alzheimer disease, alone or added to a cholinesterase inhibitor: 5 mg daily increased by 5 mg weekly to 10 mg twice daily; reduce in renal impairment",
        },
        {
          label: "SSRI for depression or FTD behaviour",
          detail: "Sertraline or citalopram started low; check sodium at 2-4 weeks; not a tricyclic",
        },
        {
          label: "Risperidone - last resort only",
          detail:
            "Only after non-drug measures fail and there is real risk of harm: 0.25-0.5 mg daily, licensed up to 6 weeks, review at least every 12 weeks and attempt withdrawal by tapering 25-50% every two weeks. Boxed warning of increased stroke and mortality",
          tone: "warn",
        },
        {
          label: "Never an antipsychotic in Lewy body dementia",
          detail: "Severe neuroleptic sensitivity - a single dose can cause irreversible rigidity, autonomic instability and death",
          tone: "warn",
        },
      ],
    },
  ],

  "geriatrics-ethics-frailty-sarcopenia-nutrition": [
    {
      kind: "branch",
      heading: "The ways frailty is measured",
      caption: "Frailty should change what you do, not just what you call the patient.",
      root: "Measuring frailty",
      arms: [
        {
          label: "Fried phenotype (2001)",
          steps: [
            "Unintentional weight loss of 4.5 kg or 5% in a year",
            "Self-reported exhaustion",
            "Weak grip strength, lowest quintile",
            "Slow walking speed, lowest quintile",
            "Low physical activity",
            "3 or more of 5 is frail, 1-2 pre-frail, 0 robust",
          ],
        },
        {
          label: "Cumulative deficit index (Rockwood)",
          steps: ["Deficits present divided by the number counted", "0.25 or more indicates frailty"],
        },
        {
          label: "Clinical Frailty Scale",
          steps: ["A nine-point clinical judgement", "Very fit through to terminally ill"],
        },
        {
          label: "FRAIL scale",
          steps: [
            "Fatigue, Resistance (stairs), Ambulation (a block), Illnesses over five, Loss of weight over 5%",
            "Scored 0-5; 3 or more frail, 1-2 pre-frail",
          ],
        },
        {
          label: "Rapid clinic screens",
          tone: "good",
          steps: ["Gait speed under 0.8 m/s over 4 metres", "Timed Up and Go 12 seconds or more", "PRISMA-7"],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Diagnosing sarcopenia - the EWGSOP2 sequence",
      caption: "Strength is primary because it predicts adverse outcomes better than mass.",
      steps: [
        {
          label: "Case find without equipment",
          detail:
            "SARC-F scored 0-10, 4 or more suggests sarcopenia; calf circumference under 34 cm in men and under 33 cm in women. SARC-CalF beats either alone",
        },
        {
          label: "Measure muscle strength - the primary criterion",
          detail:
            "Grip under 27 kg men and under 16 kg women by EWGSOP2; under 28 kg and under 18 kg by AWGS 2019, which is what to use in India. Five-times chair stand over 15 s (EWGSOP2) or 12 s or more (AWGS)",
          tone: "decision",
        },
        {
          label: "Low strength means sarcopenia is probable",
          detail: "This much can be done in any consulting room",
        },
        {
          label: "Confirm with low muscle quantity",
          detail:
            "Appendicular skeletal muscle index on DXA under 7.0 kg/m2 in men and under 5.5 kg/m2 in women (EWGSOP2), or under 5.4 kg/m2 in women by AWGS",
        },
        {
          label: "Grade severity by physical performance",
          detail: "Gait speed 0.8 m/s or less defines severe sarcopenia (EWGSOP2); AWGS uses under 1.0 m/s",
        },
        {
          label: "Treat with resistance training plus protein",
          detail:
            "Progressive resistance training two to three times a week with adequate dietary protein - the only intervention that reliably raises strength and mass, shown even in nursing home residents in their nineties",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Nutrition targets in the older adult",
      caption: "Older people need more protein, not less - routine restriction accelerates sarcopenia.",
      columns: ["What", "The figure", "Note"],
      rows: [
        [
          "Significant weight loss",
          "More than 5% in 6 months, or more than 10% at any time",
          "Weigh at every visit and plot the trend; a single weight is almost useless",
        ],
        ["BMI concern threshold", "Below 22 kg/m2", "The usual 18.5 cut-off is too low in the old"],
        ["MNA short form", "0-14: 12-14 normal, 8-11 at risk, 0-7 malnourished", "The full MNA scores 0-30"],
        ["Protein, healthy older adult", "1.0-1.2 g/kg/day", "Higher than in the young because of anabolic resistance"],
        [
          "Protein, acute or chronic illness",
          "1.2-1.5 g/kg/day, up to 2.0 in severe illness or injury",
          "Caution in advanced chronic kidney disease",
        ],
        [
          "Protein distribution",
          "About 25-30 g at each of three meals",
          "More muscle synthesis than the same total at one meal; leucine-rich sources, and within an hour after exercise",
        ],
        [
          "Vitamin D and calcium",
          "800-1000 IU and 1000-1200 mg daily",
          "Never a high-dose intermittent bolus - it increases falls",
        ],
        [
          "Oral nutritional supplement",
          "About 400 kcal with 20-30 g protein daily",
          "Between meals, so it adds to rather than replaces food",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Preventing refeeding syndrome",
      caption: "Carbohydrate without thiamine is the classical trigger for Wernicke encephalopathy.",
      steps: [
        {
          label: "Identify high risk before any feeding",
          detail:
            "BMI under 16 kg/m2, unintentional weight loss over 15% in 3-6 months, little or no intake for more than 10 days, or low potassium, phosphate or magnesium; also chronic alcohol use and long-term diuretic, insulin or chemotherapy use",
          tone: "warn",
        },
        {
          label: "Check and correct electrolytes first",
          detail: "Potassium, phosphate and magnesium before feeding starts",
        },
        {
          label: "Thiamine 200-300 mg daily before feeding",
          detail: "With a vitamin B complex, before and during the first ten days",
        },
        {
          label: "Start at 10 kcal/kg/day",
          detail: "5 kcal/kg/day in extreme risk",
        },
        {
          label: "Increase slowly to full requirement",
          detail: "Over 4 to 7 days",
        },
        {
          label: "Monitor and replace daily",
          detail:
            "Phosphate, potassium and magnesium; the insulin surge drives them intracellularly and causes arrhythmia, cardiac and respiratory failure and seizures",
          tone: "good",
        },
      ],
    },
  ],

  "geriatrics-ethics-end-of-life-death-certification": [
    {
      kind: "flow",
      heading: "Advance care planning, and what a DNAR does not mean",
      caption: "A conversation with a record, not a form - and it is revisited as the illness changes.",
      steps: [
        {
          label: "Apply the surprise question",
          detail: "Would I be surprised if this patient died in the next twelve months? If no, begin the conversation",
          tone: "decision",
        },
        {
          label: "The other triggers",
          detail:
            "A new incurable diagnosis, Clinical Frailty Scale 7 or above, a second unplanned admission within a year, new dementia while capacity remains, entry to long-term care, or the family asking how long",
        },
        {
          label: "Ask permission, then find out what they understand",
          detail: "Ask what matters most and what they would find unacceptable",
        },
        {
          label: "Explain honestly what medicine can achieve",
          detail:
            "Cardiopulmonary resuscitation in advanced frailty or metastatic cancer almost never results in survival to discharge",
        },
        {
          label: "Record specific decisions, not sentiments",
          detail:
            "Hospital admission, intravenous antibiotics, intensive care, mechanical ventilation, dialysis, a feeding tube and CPR - do everything and do nothing are both unusable at three in the morning",
          tone: "good",
        },
        {
          label: "Name who should speak for the patient",
          detail:
            "For mental healthcare, the statutory nominated representative under Mental Healthcare Act 2017 section 14. Write it down and give the family a copy",
        },
        {
          label: "A DNAR decision concerns CPR alone",
          detail:
            "Analgesia, antibiotics, fluids, oxygen and nursing continue as indicated; the commonest harm in practice is the order being read as do not treat. Record the reasons, who was involved and the review date, and communicate it at every transfer",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Withdrawing life support - the process after 24 January 2023",
      caption: "Common Cause 2018 as modified by the same Constitution Bench; there is still no statute.",
      steps: [
        {
          label: "The executor signs the advance directive",
          detail:
            "Before two attesting witnesses and attested by a notary or gazetted officer - magistrate countersignature was the 2018 rule and was dropped",
        },
        {
          label: "Copies are given out",
          detail: "To the nominated representatives, the family physician and the local authority",
        },
        {
          label: "Primary Medical Board",
          detail: "Constituted by the treating hospital - the treating physician plus at least two subject experts of at least five years standing",
        },
        {
          label: "Secondary Medical Board",
          detail:
            "If the primary board recommends withdrawal - a practitioner nominated by the District Health Officer plus two experts of at least five years standing",
        },
        {
          label: "Decision within 48 hours",
          detail: "Withholding and withdrawing are ethically and legally equivalent",
          tone: "decision",
        },
        {
          label: "Judicial Magistrate First Class informed",
          detail: "The magistrate records the decision; an aggrieved party may approach the High Court",
        },
        {
          label: "Active euthanasia and assisted suicide remain crimes",
          detail:
            "Punishable under what are now sections 103 and 108 of the Bharatiya Nyaya Sanhita 2023. The 2024 draft national guidelines were put on hold, so the framework is judicial and awaiting legislation",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "End-of-life terms and their legal status in India",
      caption: "Examiners test the terms; an honest answer states that the position is evolving.",
      columns: ["Term", "What it means", "Position in India"],
      rows: [
        [
          "Withholding",
          "Not starting a treatment",
          "Lawful in the terminally ill or permanently vegetative through the prescribed board process",
        ],
        [
          "Withdrawing",
          "Stopping a treatment already started",
          "Lawful, and ethically equivalent to withholding",
        ],
        [
          "Palliative sedation",
          "Proportionate sedation for refractory symptoms, titrated to comfort",
          "Lawful; not sedation to unconsciousness for its own sake",
        ],
        [
          "Doctrine of double effect",
          "Relief of suffering accepting a foreseen but unintended shortening of life",
          "Accepted; correctly titrated opioids have not in fact been shown to shorten life",
        ],
        [
          "Advance medical directive",
          "A written refusal of specified treatments in specified circumstances",
          "Held legally valid in Common Cause 2018, procedure simplified 24 January 2023",
        ],
        ["Active euthanasia", "An act intended to cause death", "A criminal offence - BNS section 103"],
        [
          "Physician-assisted suicide",
          "Providing the means for the patient to end life",
          "A criminal offence - BNS section 108",
        ],
        [
          "Brain-stem death",
          "Certified under THOTA 1994 by a four-member Board of Medical Experts",
          "A legal declaration of death; two sets of tests six hours apart",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Writing the cause of death - Form 4",
      caption: "Worked example: the underlying cause is the cerebral infarction, not the pneumonia.",
      steps: [
        {
          label: "Part I (a) - immediate cause",
          detail: "The condition directly leading to death, with the interval - aspiration pneumonia, 3 days",
        },
        {
          label: "Part I (b) - antecedent cause",
          detail: "The condition giving rise to (a) - dysphagia, 4 months",
        },
        {
          label: "Part I (c) - underlying cause",
          detail:
            "The disease that initiated the whole train of events, written on the lowest completed line - cerebral infarction, 6 months. This is the entry coded and tabulated in national statistics",
          tone: "good",
        },
        {
          label: "Part II - other contributing conditions",
          detail: "Significant but not part of the Part I sequence - type 2 diabetes mellitus, hypertension",
        },
        {
          label: "Never write a mode of dying",
          detail:
            "Cardiac arrest, cardiorespiratory arrest, asystole, syncope, respiratory failure, heart failure, shock, coma and asphyxia are mechanisms, not causes. Avoid old age or senility, abbreviations, more than one condition per line, and a blank interval",
          tone: "warn",
        },
        {
          label: "Unnatural or unknown cause - do not certify",
          detail:
            "Accidents including road traffic and industrial, burns, drowning, poisoning, electrocution, homicide or suicide, custodial death, death under or shortly after anaesthesia, suspected criminal abortion, a woman dying within seven years of marriage in unnatural circumstances, and unexplained death within 24 hours of admission - inform the police, register an MLC and refer for autopsy",
          tone: "warn",
        },
        {
          label: "Report the death to the Registrar",
          detail:
            "Normally within 21 days free of charge; later attracts a fee and after one year needs an order of a first class magistrate. The doctor issues the MCCD, the Registrar issues the death certificate",
        },
      ],
    },
  ],
};

export default diagrams;
