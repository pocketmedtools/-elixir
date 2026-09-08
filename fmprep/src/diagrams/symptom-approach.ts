/**
 * Diagrams for symptom-approach, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "symptom-approach-fatigue": [
    {
      kind: "compare",
      heading: "Fatigue versus weakness versus sleepiness",
      caption: "Three different complaints hide inside one word; the first question separates them.",
      columns: ["Feature", "Fatigue", "True weakness", "Sleepiness"],
      rows: [
        [
          "Patient words",
          "No energy, thakan, jaan nahi",
          "Cannot lift, cannot climb",
          "Dozes off, aankh lag jaati hai",
        ],
        ["Examination", "Normal power", "Reduced power, localises", "Normal power"],
        [
          "Best first question",
          "What does a typical day look like?",
          "Can you rise from a squat?",
          "Do you doze while sitting quietly?",
        ],
        [
          "Typical causes",
          "Anaemia, mood, sleep debt, drugs, post-viral",
          "Myopathy, neuropathy, hypokalaemia, myasthenia, stroke",
          "Sleep apnoea, short sleep, sedatives, shift work",
        ],
        [
          "First test",
          "CBC, glucose, TSH",
          "Potassium, CPK, TSH, vitamin D",
          "STOP-BANG, Epworth, sleep study",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The first-line panel in tiredness",
      caption: "One panel ordered together covers the treatable common causes.",
      steps: [
        {
          label: "Complete blood count with smear",
          detail: "Anaemia is the commonest organic cause. Microcytic: ferritin and a source of blood loss. Macrocytic: B12, folate, TSH, alcohol history",
        },
        {
          label: "Serum ferritin in menstruating women",
          detail: "Below 30 ng/mL confirms iron deficiency; start oral iron and look for the cause",
        },
        {
          label: "HbA1c or fasting glucose",
          detail: "6.5 percent or more diagnoses diabetes; 5.7-6.4 percent is prediabetes",
        },
        {
          label: "TSH",
          detail: "Raised TSH: repeat with free T4; overt disease means levothyroxine 1.6 microgram/kg/day",
        },
        {
          label: "Creatinine, ALT and urine routine",
          detail: "Silent chronic kidney disease and liver disease; proteinuria triggers urine ACR and a BP review",
        },
        {
          label: "Chest radiograph and sputum Xpert",
          detail: "Where indicated - cough of 2 weeks or more, fever or weight loss. Positive Xpert: notify and start the NTEP regimen",
          tone: "warn",
        },
        {
          label: "Iron deficiency outside menstrual loss",
          detail: "In a man or a postmenopausal woman this is gastrointestinal blood loss until proved otherwise - bidirectional endoscopy, with iron given in parallel not instead",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Fatigue by duration",
      caption: "How long it has lasted decides how far to investigate.",
      root: "Duration of the tiredness",
      arms: [
        {
          label: "Under 1 month - recent fatigue",
          steps: [
            "Acute infection, dengue or viral convalescence",
            "Drugs, acute stress, sleep loss",
            "History, minimal tests, review in 2-4 weeks",
          ],
        },
        {
          label: "1-6 months - prolonged fatigue",
          tone: "decision",
          steps: [
            "Anaemia, thyroid disease, diabetes, tuberculosis",
            "Depression, obstructive sleep apnoea",
            "Full first-line panel plus targeted add-ons",
          ],
        },
        {
          label: "Over 6 months - chronic fatigue",
          steps: [
            "Mood disorder, chronic fatigue syndrome, deconditioning",
            "Chronic disease already known",
            "Do not re-test blindly; treat mood, sleep and activity",
            "Review the diagnosis, not the panel",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "When no disease is found",
      caption: "The consultation that follows a normal panel.",
      steps: [
        {
          label: "Treat sleep first",
          detail: "Fixed wake time, no naps beyond 30 minutes, no screens or caffeine after 6 pm, no alcohol as a sedative",
        },
        {
          label: "Graded activity, not rest",
          detail: "Start at a level possible on a bad day and increase by about 10 percent a week; record it",
        },
        {
          label: "Treat mood actively when PHQ-9 is 10 or more",
          detail: "Behavioural activation, problem-solving counselling, escitalopram 10 mg PO OD or sertraline 50 mg PO OD; warn of the 2-week lag",
        },
        {
          label: "Name chronic fatigue syndrome if it fits",
          detail: "Over 6 months with post-exertional malaise, unrefreshing sleep and cognitive difficulty; pace within an energy envelope. NICE 2021 advises against rigid graded exercise here",
          tone: "warn",
        },
        {
          label: "Safety net in words the patient remembers",
          detail: "Return for weight loss, fever beyond a week, blood in stool or urine, cough beyond 2 weeks, or inability to work",
        },
        {
          label: "Written review date at 4-6 weeks",
          detail: "A definite date on the prescription, not an open invitation",
          tone: "good",
        },
      ],
    },
  ],

  "symptom-approach-body-ache": [
    {
      kind: "compare",
      heading: "Inflammatory versus mechanical versus distress-related pain",
      caption: "The single table that sorts most body-ache clinics.",
      columns: ["Feature", "Inflammatory", "Mechanical or overuse", "Distress-related"],
      rows: [
        ["Morning stiffness", "More than 30-60 minutes", "Under 30 minutes", "Variable, often all day"],
        ["Effect of activity", "Improves", "Worsens", "Worsens then improves, unpredictable"],
        ["Effect of rest", "Worsens", "Improves", "No consistent relief"],
        ["Swelling", "Present, objective", "Absent", "Absent, though the patient feels swollen"],
        ["Night pain", "Second half of the night", "Only with position", "Frequent waking, unrefreshing sleep"],
        ["ESR or CRP", "Often raised", "Normal", "Normal"],
        [
          "Best first action",
          "Rheumatology referral, ESR, RF, anti-CCP",
          "Ergonomics, analgesia, physiotherapy",
          "Explanation, sleep, graded exercise, amitriptyline",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Vitamin D status and what it earns",
      caption: "Deficiency is near-universal in urban India, so the level guides the dose but never closes the case.",
      steps: [
        {
          label: "30 ng/mL or more - sufficient",
          detail: "No treatment; look elsewhere for the cause of the ache",
          tone: "good",
        },
        {
          label: "20-29 ng/mL - insufficiency",
          detail: "Cholecalciferol 60,000 IU orally monthly plus sunlight and dietary advice",
        },
        {
          label: "10-19 ng/mL - deficiency",
          detail: "Cholecalciferol 60,000 IU weekly for 6-8 weeks, then 60,000 IU monthly",
        },
        {
          label: "Below 10 ng/mL - severe deficiency",
          detail: "Consider osteomalacia. 60,000 IU weekly for 8 weeks plus calcium 1000 mg daily; check calcium, phosphate, ALP and PTH",
        },
        {
          label: "Never the injectable megadose culture",
          detail: "Repeated 6,00,000 IU intramuscular shots cause hypercalcaemia, nephrocalcinosis and renal impairment",
          tone: "warn",
        },
        {
          label: "The response is the test of causation",
          detail: "Recheck only after 3 months and only if adequate replacement over 8-12 weeks has not relieved the symptom",
          tone: "decision",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Drugs used in chronic widespread pain",
      caption: "NSAIDs and opioids do not work in fibromyalgia; long-term opioids cause harm.",
      columns: ["Drug", "Dose", "Best for", "Watch for"],
      rows: [
        [
          "Amitriptyline",
          "10-25 mg PO at night",
          "Pain with poor sleep",
          "Dry mouth, morning grogginess, urinary retention; avoid in glaucoma and the elderly",
        ],
        [
          "Duloxetine",
          "30 mg PO OD for 2 weeks then 60 mg OD",
          "Pain with depression or diabetic neuropathy",
          "Nausea, insomnia, raised blood pressure",
        ],
        [
          "Pregabalin",
          "75 mg PO at night, up to 150 mg BD",
          "Pain with sleep disturbance and neuropathic quality",
          "Sedation, weight gain, oedema, dependence",
        ],
        [
          "Paracetamol",
          "500-1000 mg PO up to QID",
          "Short-term flare relief",
          "Hepatotoxicity above 3 g/day in the malnourished or alcohol user",
        ],
        [
          "NSAIDs",
          "Short course only",
          "Inflammatory or clearly nociceptive pain",
          "No benefit in fibromyalgia; gastric, renal and cardiovascular risk",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The somatisation consultation",
      caption: "What reduces distress and healthcare use in the repeat attender.",
      steps: [
        {
          label: "Baseline panel once, after 4-6 weeks of ache",
          detail: "CBC, ESR or CRP, HbA1c, TSH, creatinine, calcium, phosphate, ALP and 25-hydroxy vitamin D",
        },
        {
          label: "Do not screen with ANA, RF or uric acid",
          detail: "ANA is positive at low titre in 5-15 percent of healthy people and a false positive creates a lifelong illness identity",
          tone: "warn",
        },
        {
          label: "Fixed-interval appointments, one named doctor",
          detail: "Time-based rather than symptom-triggered visits",
        },
        {
          label: "Treat comorbid anxiety and depression",
        },
        {
          label: "No new investigation without a new sign",
          detail: "The rule that stops the cycle of scans and incidental findings",
          tone: "decision",
        },
        {
          label: "Set a functional goal, not a pain score",
          detail: "Walk 20 minutes, return to work half-days; the aim is improved function and sleep, not zero pain",
          tone: "good",
        },
      ],
    },
  ],

  "symptom-approach-dizziness": [
    {
      kind: "branch",
      heading: "The four dizzinesses",
      caption: "One word, four mechanisms, four different first tests.",
      root: "Giddiness or chakkar",
      arms: [
        {
          label: "Vertigo",
          steps: [
            "Room spinning, kamra ghoom raha hai",
            "Vestibular, peripheral or central",
            "Dix-Hallpike; HINTS if continuous",
          ],
        },
        {
          label: "Presyncope",
          tone: "warn",
          steps: [
            "About to faint, blackness, sweating",
            "Transient global cerebral hypoperfusion",
            "Lying and standing BP, ECG, haemoglobin, glucose",
          ],
        },
        {
          label: "Disequilibrium",
          steps: [
            "Unsteady on the feet, only on standing or walking",
            "Sensorimotor balance failure",
            "Gait, Romberg, Timed Up and Go, neuropathy screen",
          ],
        },
        {
          label: "Lightheadedness",
          steps: [
            "Floating, heavy head, continuous",
            "Anxiety, hyperventilation, depression, drugs",
            "GAD-7, PHQ-9, drug review",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "HINTS in acute continuous vertigo",
      caption: "Three bedside tests; any one central finding means stroke until MRI says otherwise.",
      columns: ["Component", "Peripheral - reassuring", "Central - dangerous"],
      rows: [
        ["Head Impulse test", "Abnormal - corrective saccade present", "Normal - no corrective saccade"],
        [
          "Nystagmus",
          "Unidirectional, horizontal, beats away from the affected ear",
          "Direction-changing, vertical or purely torsional",
        ],
        ["Test of Skew, cover-uncover", "No vertical realignment", "Skew deviation present"],
        [
          "Interpretation",
          "All three peripheral: vestibular neuritis",
          "Any one central: stroke until MRI says otherwise",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Timing and trigger pattern to diagnosis",
      caption: "The diagnostic backbone: what set it off and how long it lasts.",
      columns: ["Pattern", "Duration", "Likely diagnosis", "Action"],
      rows: [
        [
          "Triggered by head position",
          "Seconds to 1 minute",
          "Benign paroxysmal positional vertigo",
          "Dix-Hallpike then Epley manoeuvre",
        ],
        ["Triggered by standing up", "Seconds", "Orthostatic hypotension", "Lying and standing BP, review drugs"],
        [
          "Spontaneous with hearing loss and tinnitus",
          "20 minutes to 12 hours",
          "Meniere disease",
          "Salt restriction, betahistine, audiometry",
        ],
        [
          "Spontaneous with photophobia or headache",
          "5 minutes to 72 hours",
          "Vestibular migraine",
          "Trigger diary, propranolol or flunarizine",
        ],
        [
          "Continuous after a viral illness",
          "Days",
          "Vestibular neuritis, peripheral HINTS",
          "Short vestibular sedative, early rehabilitation",
        ],
        [
          "Continuous with any central sign",
          "Days",
          "Posterior circulation stroke",
          "Admit; MRI with diffusion weighting, not CT",
        ],
        [
          "Exertional or with palpitations",
          "Seconds",
          "Arrhythmia, aortic stenosis, HCM",
          "ECG, echocardiography, urgent cardiology referral",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Acute continuous vertigo: what to do",
      caption: "The sequence that separates neuritis from a cerebellar infarct.",
      steps: [
        {
          label: "Can the patient sit or walk unaided?",
          detail: "Inability to sit or walk unaided suggests a cerebellar infarct; peripheral vertigo still allows walking, however unsteadily",
          tone: "decision",
        },
        {
          label: "Perform HINTS and look for central signs",
          detail: "Dysarthria, diplopia, dysphagia, facial numbness, limb ataxia, Horner syndrome, new headache or neck pain",
        },
        {
          label: "Central pattern - admit for MRI",
          detail: "MRI with diffusion weighting. A normal CT brain does not exclude posterior circulation infarction in the first 24-48 hours",
          tone: "warn",
        },
        {
          label: "Peripheral - sedative for 24-72 hours only",
          detail: "Prochlorperazine 5 mg PO TDS, or betahistine 8-16 mg PO TDS, or cinnarizine 25 mg PO TDS",
        },
        {
          label: "Stop the sedative and mobilise",
          detail: "Beyond 72 hours the sedative blocks central compensation and prolongs the illness; start vestibular rehabilitation exercises",
          tone: "warn",
        },
        {
          label: "Positional vertigo is treated mechanically",
          detail: "Epley canalith repositioning cures 80-90 percent of posterior canal BPPV in one or two sessions; teach the Brandt-Daroff home exercise",
          tone: "good",
        },
      ],
    },
  ],

  "symptom-approach-chest-pain": [
    {
      kind: "flow",
      heading: "Suspected acute coronary syndrome in the clinic",
      caption: "Time is the outcome; the order of these steps is the answer.",
      steps: [
        {
          label: "12-lead ECG within 10 minutes",
          detail: "Repeat after 15-30 minutes if pain persists and the first is normal; a normal ECG is seen in up to a third of NSTEMI",
          tone: "warn",
        },
        {
          label: "Aspirin 325 mg chewed and clopidogrel 300 mg",
          detail: "Clopidogrel 75 mg if over 75 years",
        },
        {
          label: "Sublingual nitroglycerine 0.5 mg",
          detail: "Withhold if systolic BP is below 90 mmHg or an inferior infarct with right ventricular involvement is suspected - record a right-sided V4R first",
          tone: "warn",
        },
        {
          label: "Oxygen only if saturation is below 90 percent",
        },
        {
          label: "Primary PCI if achievable within 120 minutes",
          detail: "Measured from first medical contact",
          tone: "decision",
        },
        {
          label: "Otherwise thrombolyse within 30 minutes",
          detail: "Tenecteplase 30-50 mg IV by weight, or streptokinase 1.5 million units IV over 60 minutes; check contraindications first",
        },
        {
          label: "Transfer by ambulance",
          detail: "Never by the patient own vehicle or a two-wheeler. Morphine 2-4 mg IV for pain persisting after nitrates; avoid NSAIDs",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "The five that must not be missed",
      caption: "Every chest pain consultation begins by excluding these.",
      root: "Chest pain",
      arms: [
        {
          label: "Acute coronary syndrome",
          tone: "warn",
          steps: [
            "Central heaviness over 20 minutes to arm, jaw or epigastrium",
            "Sweating, nausea, breathlessness",
            "In diabetics, women and the elderly: breathlessness, fatigue, syncope or epigastric burning with no pain",
          ],
        },
        {
          label: "Aortic dissection",
          tone: "warn",
          steps: [
            "Sudden tearing pain, maximal at onset, moving to the back",
            "Inter-arm BP difference over 20 mmHg, unequal pulses, new early diastolic murmur",
            "Never thrombolysis or anticoagulant before considering it",
          ],
        },
        {
          label: "Pulmonary embolism",
          steps: [
            "Pleuritic pain, sudden breathlessness, tachycardia, hypoxia",
            "Risk factor: immobility, travel, surgery, pregnancy, puerperium, contraceptives, malignancy",
            "Wells score, then D-dimer if low and CT pulmonary angiography if high",
          ],
        },
        {
          label: "Pneumothorax, including tension",
          steps: [
            "Sudden pleuritic pain, hyper-resonance, absent breath sounds",
            "Tall thin young smoker, or known COPD",
            "Tension is a clinical diagnosis needing needle decompression, not a radiograph",
          ],
        },
        {
          label: "Oesophageal rupture",
          steps: [
            "Severe pain after forceful vomiting",
            "Subcutaneous emphysema and shock",
            "Rare and lethal - ask what happened just before the pain began",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Pretest probability chooses the test",
      caption: "Estimate the probability before ordering, not after.",
      steps: [
        {
          label: "Under 15 percent",
          detail: "Young woman with non-anginal pain and no risk factors - no cardiac testing; diagnose and treat the likely cause and safety net",
          tone: "good",
        },
        {
          label: "15-65 percent",
          detail: "45-year-old man with atypical pain and one risk factor - treadmill exercise test or CT coronary angiography",
        },
        {
          label: "65-85 percent",
          detail: "60-year-old diabetic man with atypical exertional pain - stress echocardiography or myocardial perfusion imaging",
        },
        {
          label: "Over 85 percent",
          detail: "65-year-old man with typical angina and prior vascular disease - treat as coronary disease and refer; a negative test would not change management",
        },
        {
          label: "Marburg Heart Score 0-2 rules it out",
          detail: "One point each for age 55 or more in men or 65 or more in women, known vascular disease, pain worse with exertion, pain not reproducible by palpation, and the patient assuming it is cardiac. NPV about 97-98 percent",
          tone: "decision",
        },
      ],
    },
    {
      kind: "compare",
      heading: "The same pain, two settings",
      caption: "The setting changes the disease and therefore the value of every test.",
      columns: ["Cause", "General practice", "Emergency department", "Clue"],
      rows: [
        [
          "Musculoskeletal or chest wall",
          "25-35 percent",
          "5-10 percent",
          "Reproduced exactly by palpation, worse on movement",
        ],
        [
          "Gastro-oesophageal",
          "10-20 percent",
          "5-10 percent",
          "Burning, worse lying or after meals, regurgitation",
        ],
        ["Stable coronary disease", "8-12 percent", "10-15 percent", "Exertional, relieved by rest in minutes"],
        [
          "Acute coronary syndrome",
          "1-3 percent",
          "15-25 percent",
          "Rest pain over 20 minutes with sweating or vomiting",
        ],
        [
          "Psychogenic or panic",
          "7-15 percent",
          "5-10 percent",
          "Peaks in 10 minutes, paraesthesiae, doom, recurrent",
        ],
        [
          "Pulmonary",
          "5-10 percent",
          "10-15 percent",
          "Pleuritic, breathless, hypoxic, abnormal chest signs",
        ],
      ],
    },
  ],

  "symptom-approach-breathlessness": [
    {
      kind: "ladder",
      heading: "Modified MRC dyspnoea scale",
      caption: "Grade it at the first visit and again at review - it is the number that shows change.",
      steps: [
        { label: "Grade 0", detail: "Breathless only on strenuous exercise", tone: "good" },
        { label: "Grade 1", detail: "Short of breath hurrying on the level or walking up a slight hill" },
        {
          label: "Grade 2",
          detail: "Walks slower than people of the same age on the level, or stops for breath at own pace",
        },
        { label: "Grade 3", detail: "Stops for breath after about 100 metres or a few minutes on the level" },
        {
          label: "Grade 4",
          detail: "Too breathless to leave the house, or breathless while dressing or undressing",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Cardiac versus respiratory versus other",
      caption: "Six lines that place the breathlessness in an organ system.",
      columns: ["Feature", "Cardiac", "Respiratory", "Anaemia, metabolic or anxiety"],
      rows: [
        ["Orthopnoea and PND", "Characteristic", "Uncommon except in severe COPD", "Absent"],
        ["Wheeze", "Cardiac wheeze possible in acute failure", "Common in asthma and COPD", "Absent"],
        ["Cough", "Frothy pink sputum in acute failure", "Chronic productive or dry", "Absent"],
        [
          "Examination",
          "Raised JVP, S3, basal crackles, pedal oedema",
          "Prolonged expiration, wheeze, barrel chest, reduced breath sounds",
          "Pallor, Kussmaul breathing, normal chest",
        ],
        [
          "Oxygen saturation",
          "Low in acute failure",
          "Low, may fall further on walking",
          "Normal in anaemia and anxiety",
        ],
        [
          "Best rule-out test",
          "NT-proBNP below 125 pg/mL when not acute",
          "Spirometry with reversibility",
          "Haemoglobin, glucose, blood gas, GAD-7",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Speed of onset names the cause",
      caption: "How fast it came on decides the first action.",
      root: "How quickly did the breathlessness start?",
      arms: [
        {
          label: "Seconds to minutes",
          tone: "warn",
          steps: [
            "Pneumothorax, pulmonary embolism, anaphylaxis, aspiration",
            "Acute left ventricular failure, arrhythmia, acute severe asthma",
            "Saturation, ECG, immediate treatment and transfer",
          ],
        },
        {
          label: "Hours to days",
          steps: [
            "Pneumonia, asthma or COPD exacerbation, heart failure",
            "Metabolic acidosis, pleural effusion",
            "Chest radiograph, glucose, haemoglobin, ECG; treat and reassess",
          ],
        },
        {
          label: "Weeks to months",
          steps: [
            "Anaemia, tuberculosis, interstitial lung disease",
            "Chronic heart failure, effusion, deconditioning, thyroid disease, pregnancy",
            "Full clinic panel, spirometry, echocardiography, walking oximetry",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Acute severe asthma: the first hour",
      caption: "Steroids take 4-6 hours to act, so they are given early, not last.",
      steps: [
        {
          label: "Oxygen to a target of 94-98 percent",
          detail: "In known COPD target 88-92 percent with a Venturi mask - uncontrolled high-flow oxygen causes carbon dioxide narcosis",
          tone: "warn",
        },
        {
          label: "Salbutamol 2.5-5 mg by nebuliser",
          detail: "Or 4-10 puffs by metered-dose inhaler with a spacer, repeated every 20 minutes for the first hour",
        },
        {
          label: "Ipratropium bromide 0.5 mg by nebuliser",
          detail: "Added in severe or life-threatening attacks",
        },
        {
          label: "Prednisolone 40-50 mg orally at once",
          detail: "Daily for 5 days; hydrocortisone 100 mg IV if the patient cannot swallow",
        },
        {
          label: "Magnesium sulphate 2 g IV over 20 minutes",
          detail: "Life-threatening attacks not responding to initial treatment, where facilities allow",
        },
        {
          label: "Reassess at 15-30 minutes",
          detail: "Peak flow, saturation and speech after each treatment",
          tone: "decision",
        },
        {
          label: "Transfer if peak flow stays under 50 percent",
          detail: "Or saturation below 92 percent, inability to speak in sentences, or any life-threatening feature",
          tone: "warn",
        },
        {
          label: "Discharge only above 75 percent of best",
          detail: "Symptoms settling and stable for at least an hour; check inhaler technique, issue a spacer and a written action plan, review in 48 hours",
          tone: "good",
        },
      ],
    },
  ],

  "symptom-approach-fever-without-focus": [
    {
      kind: "ladder",
      heading: "Let the day of fever choose the test",
      caption: "Acute undifferentiated febrile illness: fever under 14 days with no evident focus.",
      steps: [
        {
          label: "Day 1-3",
          detail: "Order malaria smear and rapid test, CBC with platelets and haematocrit, dengue NS1, urine routine. Do not order Widal, IgM serologies or blood culture unless toxic - serology is negative this early",
        },
        {
          label: "Day 4-7",
          detail: "Repeat CBC with platelets and haematocrit, dengue IgM, scrub typhus IgM, leptospira IgM, blood culture before antibiotics, LFT, CRP. Not CT, marrow or autoimmune panels",
          tone: "decision",
        },
        {
          label: "Day 8-14",
          detail: "Repeat blood culture, chest radiograph, urine culture, ultrasound abdomen, HIV with consent, ESR. Enteric fever, abscess and an occult focus now dominate",
        },
        {
          label: "Beyond 2-3 weeks - the PUO work-up",
          detail: "Three blood cultures, sputum CBNAAT, Mantoux, rK39 in endemic districts, smear review, protein electrophoresis, echocardiography, CT if indicated",
        },
        {
          label: "No repeated antibiotics or steroids",
          detail: "Tuberculosis, abscess, endocarditis, lymphoma and connective tissue disease need a diagnosis, not a trial",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Acute undifferentiated fever in India",
      caption: "The clue, the test with its timing, and the drug.",
      columns: ["Cause", "Clinical clue", "Test and its timing", "First-line treatment"],
      rows: [
        [
          "Self-limiting viral fever",
          "Under 3 days, coryza or myalgia, normal examination",
          "None on day 1-2 beyond a malaria test; CBC if persisting",
          "Paracetamol, fluids, review on day 3",
        ],
        [
          "Dengue",
          "Post-monsoon, retro-orbital pain, rash, falling platelets, rising haematocrit",
          "NS1 day 1-5; IgM from day 5; daily platelets and haematocrit from day 3",
          "Fluids, paracetamol only, no NSAIDs, admit for warning signs",
        ],
        [
          "Malaria",
          "Rigors, sweating, splenomegaly, rural or forest exposure",
          "Smear plus rapid antigen test at first visit, repeated if negative",
          "Vivax: chloroquine plus primaquine 14 days. Falciparum: ACT plus single-dose primaquine",
        ],
        [
          "Scrub typhus",
          "Rural, post-monsoon, headache, lymphadenopathy, eschar in a skin fold",
          "IgM ELISA from day 5-7; the eschar is diagnostic",
          "Doxycycline 100 mg BD for 7 days; azithromycin in pregnancy and children",
        ],
        [
          "Enteric fever",
          "Fever beyond 5-7 days, coated tongue, abdominal discomfort, relative bradycardia",
          "Blood culture before antibiotics in week 1; Widal only paired and after day 7",
          "Cefixime 20 mg/kg/day for 14 days or azithromycin 20 mg/kg for 7 days",
        ],
        [
          "Leptospirosis",
          "Flood or paddy exposure, conjunctival suffusion, calf tenderness, jaundice",
          "IgM ELISA from day 5; MAT in a reference laboratory",
          "Doxycycline 100 mg BD for 7 days; ceftriaxone or penicillin if severe",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Dengue: the day the fever falls",
      caption: "Defervescence begins the danger; the warning signs are written for that day.",
      steps: [
        {
          label: "Platelets and haematocrit daily from day 3",
          detail: "Fluids guided by haematocrit and urine output; no intramuscular injections",
        },
        {
          label: "Write the warning signs on the prescription",
          detail: "Abdominal pain, persistent vomiting, bleeding, drowsiness or restlessness, cold hands and feet, reduced urine, breathlessness",
        },
        {
          label: "Fever settles - reassess, do not discharge",
          detail: "Plasma leakage begins as the temperature comes down; treating defervescence as recovery is the classical fatal error",
          tone: "warn",
        },
        {
          label: "Check the pulse pressure",
          detail: "A pulse pressure of 20 mmHg or less is dengue shock until proved otherwise; also cold extremities, capillary refill over 2 seconds, systolic BP below 90 mmHg",
          tone: "decision",
        },
        {
          label: "Admit for monitored intravenous crystalloid",
          detail: "Any warning sign, platelets below 20,000 or below 50,000 with bleeding, haematocrit rise of 20 percent or more, jaundice with reduced urine, altered sensorium, saturation below 94 percent",
        },
        {
          label: "Paracetamol only - no NSAIDs, no aspirin",
          detail: "Paracetamol 500-650 mg six-hourly, up to 4 g a day and 3 g in the elderly or in liver disease; platelets are transfused for active bleeding, never for a number",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Pyrexia of unknown origin in India",
      caption: "Fever that has outlived the acute undifferentiated window needs a diagnosis, not a fourth antibiotic.",
      root: "Fever beyond 2-3 weeks",
      arms: [
        {
          label: "Infections - 40-50 percent",
          steps: [
            "Tuberculosis: lymph node, abdominal, miliary, spinal",
            "Liver and intra-abdominal abscess, enteric fever, brucellosis",
            "Infective endocarditis, kala-azar in endemic districts, chronic malaria",
            "HIV and its opportunistic infections, melioidosis in the south and east",
          ],
        },
        {
          label: "Malignancy - 15-20 percent",
          steps: [
            "Lymphoma and leukaemia",
            "Renal cell and hepatocellular carcinoma",
            "Metastatic disease",
          ],
        },
        {
          label: "Non-infectious inflammatory - 15-20 percent",
          steps: [
            "Adult-onset Still disease",
            "Systemic lupus erythematosus",
            "Vasculitis including Takayasu and giant cell arteritis, sarcoidosis",
          ],
        },
        {
          label: "Miscellaneous and undiagnosed",
          tone: "decision",
          steps: [
            "Drug fever: beta-lactams, phenytoin, allopurinol, antituberculous drugs",
            "Factitious fever, thyroiditis, familial periodic fevers",
            "Stop every non-essential drug for 72 hours before further testing",
            "10-20 percent remain undiagnosed and most of these resolve",
          ],
        },
      ],
    },
  ],

  "symptom-approach-headache": [
    {
      kind: "compare",
      heading: "The three primary headaches at a glance",
      caption: "ICHD-3, 2018. Over 90 percent of clinic headaches are primary.",
      columns: ["Feature", "Migraine", "Tension-type", "Cluster"],
      rows: [
        [
          "Site",
          "Unilateral in 60 percent, may alternate",
          "Bilateral, band-like",
          "Strictly unilateral, orbital or temporal, same side",
        ],
        [
          "Character and severity",
          "Pulsating, moderate to severe",
          "Pressing or tightening, mild to moderate",
          "Boring or stabbing, excruciating",
        ],
        ["Duration of attack", "4-72 hours", "30 minutes to 7 days", "15-180 minutes"],
        [
          "Frequency",
          "Episodic; chronic if 15 or more days a month",
          "Episodic or chronic",
          "1 every other day to 8 a day, in bouts, often at night",
        ],
        [
          "Accompaniments",
          "Nausea, photophobia and phonophobia, aura in a third",
          "None, or one of photophobia or phonophobia",
          "Ipsilateral lacrimation, rhinorrhoea, ptosis, miosis, restlessness",
        ],
        ["Behaviour", "Lies still in the dark", "Carries on", "Paces, rocks, may strike the head"],
        [
          "Acute treatment",
          "NSAID or paracetamol with domperidone early; triptan",
          "Simple analgesic on fewer than 15 days a month",
          "100 percent oxygen 12-15 L/min; subcutaneous sumatriptan 6 mg",
        ],
        [
          "Preventive",
          "Propranolol, amitriptyline, flunarizine, topiramate, valproate",
          "Amitriptyline; sleep, stress and posture",
          "Verapamil with ECG; prednisolone bridge",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "SNOOP red flags and the action each demands",
      caption: "A serious secondary cause is found in fewer than 1-2 percent - these are how it announces itself.",
      root: "SNOOP",
      arms: [
        {
          label: "S - Systemic",
          tone: "warn",
          steps: [
            "Fever, neck stiffness, rash, weight loss, cancer, HIV, pregnancy, anticoagulants",
            "Meningitis, metastasis, cerebral venous thrombosis, subdural haematoma",
            "Same-day referral; antibiotics before transfer if meningococcal",
          ],
        },
        {
          label: "N - Neurological",
          tone: "warn",
          steps: [
            "Focal deficit, papilloedema, altered consciousness, seizure, visual field loss",
            "Space-occupying lesion, raised intracranial pressure, stroke",
            "Urgent MRI or CT and referral",
          ],
        },
        {
          label: "O - Onset",
          tone: "warn",
          steps: [
            "Thunderclap - peak within one minute; onset with exertion, cough or sex",
            "Subarachnoid haemorrhage, reversible cerebral vasoconstriction, dissection",
            "Non-contrast CT within 6 hours; lumbar puncture at 12 hours if CT negative",
            "Never discharged from a clinic as exertional migraine",
          ],
        },
        {
          label: "O - Older",
          steps: [
            "New headache after 50, scalp tenderness, jaw claudication, visual symptoms",
            "Giant cell arteritis, tumour, subdural haematoma",
            "ESR and CRP today; prednisolone 40-60 mg at once if arteritis is suspected; biopsy within two weeks",
          ],
        },
        {
          label: "P - Pattern, Positional, Papilloedema",
          steps: [
            "Progressive or changed headache, worse lying or on waking, worse standing",
            "Obesity with visual obscurations; headache in pregnancy with hypertension",
            "MRI with venography; fundoscopy; blood pressure and urine protein in pregnancy",
          ],
        },
        {
          label: "P - Painkillers",
          steps: [
            "Acute drugs on 10-15 or more days a month for 3 months",
            "Medication-overuse headache",
            "Explain, withdraw, bridge, start a preventive, diary, review at 4 weeks",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Thunderclap headache",
      caption: "Time-to-peak is the single most important item in the headache history.",
      steps: [
        {
          label: "Maximal within one minute",
          detail: "The first or the worst headache of the patient life; often with exertion, cough or sex",
          tone: "decision",
        },
        {
          label: "Non-contrast CT of the head within 6 hours",
          detail: "Sensitivity for subarachnoid haemorrhage approaches 100 percent within this window",
        },
        {
          label: "Lumbar puncture at 12 hours if CT negative",
          detail: "Xanthochromia; a CT angiogram follows where indicated",
        },
        {
          label: "A normal examination proves nothing",
          detail: "It does not exclude a sentinel bleed, and a normal CT after six hours does not exclude subarachnoid haemorrhage",
          tone: "warn",
        },
        {
          label: "No triptan while a vascular cause is possible",
          detail: "Triptans constrict cerebral vessels; the raised blood pressure is a response to the bleed, not its cause",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Treating migraine, step by step",
      caption: "Treat early and adequately; the tablet at the height of the attack has half the effect.",
      steps: [
        {
          label: "Simple analgesia at the first sign",
          detail: "Paracetamol 1 g, or naproxen 500-550 mg, or ibuprofen 400-600 mg, or aspirin 900 mg",
        },
        {
          label: "Add an antiemetic for nausea and absorption",
          detail: "Domperidone 10 mg or metoclopramide 10 mg",
        },
        {
          label: "Triptan if simple analgesia fails twice",
          detail: "Sumatriptan 50-100 mg orally, repeatable once after 2 hours, or rizatriptan 10 mg; nasal or subcutaneous if vomiting",
        },
        {
          label: "Contraindications and the monthly limit",
          detail: "No triptan in ischaemic heart disease, uncontrolled hypertension, stroke, hemiplegic migraine or pregnancy. Fewer than 10 days a month for triptans and combinations, fewer than 15 for simple analgesics",
          tone: "warn",
        },
        {
          label: "Preventive at 4 or more migraine days a month",
          detail: "Propranolol 40-160 mg a day, amitriptyline 10-50 mg at night, flunarizine 10 mg at night, topiramate 50-100 mg a day, or valproate 500-1000 mg a day - not in women who could become pregnant",
        },
        {
          label: "Start low, judge at 8-12 weeks on the diary",
          detail: "Build up over 4 weeks; a 50 percent reduction in headache days is success; continue 6-12 months then withdraw slowly",
          tone: "good",
        },
      ],
    },
  ],

  "symptom-approach-chronic-cough": [
    {
      kind: "flow",
      heading: "A cough of two weeks under NTEP",
      caption: "Two weeks, not three - the Indian threshold is set by the programme.",
      steps: [
        {
          label: "Label the patient presumptive tuberculosis",
          detail: "Cough of 2 weeks or more, fever of 2 weeks, significant weight loss, haemoptysis or any radiographic abnormality; any duration in PLHIV, contacts, diabetics and the immunosuppressed",
          tone: "decision",
        },
        {
          label: "Sputum for NAAT the same day, not a smear",
          detail: "CBNAAT with Xpert MTB/RIF or Ultra, or Truenat - sensitivity 85-90 percent against 50-60 percent for smear, with rifampicin resistance in two hours",
        },
        {
          label: "Chest radiograph at the same visit",
          detail: "Plus an HIV test with consent and a blood sugar for every presumptive case",
        },
        {
          label: "Never a fluoroquinolone as a trial",
          detail: "It partially treats tuberculosis, delays the diagnosis and manufactures resistance that compromises later regimens",
          tone: "warn",
        },
        {
          label: "Notify on Nikshay and start treatment",
          detail: "Daily 2HRZE followed by 4HRE by weight band using fixed-dose combinations, with a treatment supporter",
        },
        {
          label: "Screen every household contact",
          detail: "Symptoms and a radiograph where available; offer preventive treatment once active disease is excluded - 3HP weekly for 12 weeks or 6H daily for 6 months, children under 5 and PLHIV first",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "What the sputum NAAT result means",
      caption: "One test, three different pathways.",
      root: "Sputum CBNAAT or Truenat",
      arms: [
        {
          label: "MTB detected, rifampicin sensitive",
          steps: [
            "New case - never treated, or treated under one month",
            "Daily 2HRZE/4HRE by weight band with fixed-dose combinations",
            "Notify on Nikshay, test for HIV and blood sugar, screen contacts",
          ],
        },
        {
          label: "MTB detected, rifampicin resistant",
          tone: "warn",
          steps: [
            "Rifampicin-resistant or MDR tuberculosis",
            "Refer to the district DR-TB centre",
            "Shorter all-oral regimen under PMDT guidelines",
          ],
        },
        {
          label: "MTB not detected",
          tone: "decision",
          steps: [
            "Clinically diagnosed tuberculosis if the medical officer judges so on clinical, radiological or histological grounds",
            "Otherwise move to the sequential empirical approach",
            "A smoker over 40 with a normal film is not cleared - a tenth of lung cancers have a normal radiograph",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "The sequential approach once tuberculosis is excluded",
      caption: "Give each trial its full duration, keep what works and add the next - a quarter have two causes.",
      steps: [
        {
          label: "Stop the ACE inhibitor first",
          detail: "Dry cough in 5-20 percent of users, sometimes months after starting; switch to an angiotensin receptor blocker and review at 4 weeks. Stop smoking and reduce biomass exposure at the same visit",
        },
        {
          label: "Upper airway cough syndrome, 2-4 weeks",
          detail: "Chlorpheniramine 4 mg at night with or without a short decongestant, or an intranasal steroid such as fluticasone or mometasone; response confirms the diagnosis",
        },
        {
          label: "Asthma or cough-variant asthma, 4-8 weeks",
          detail: "Inhaled corticosteroid, ideally ICS-formoterol, with a peak flow diary; normal spirometry does not exclude it and oral prednisolone is not used as a diagnostic trial",
        },
        {
          label: "Reflux with symptoms, 8 weeks",
          detail: "Proton pump inhibitor twice daily before meals, bed-head elevation, a 3-hour gap between dinner and bed, weight loss",
        },
        {
          label: "Still coughing after all three trials",
          detail: "With a normal radiograph, negative sputum and normal spirometry - refer for CT, bronchoscopy and assessment for refractory chronic cough",
          tone: "decision",
        },
        {
          label: "Not this: syrups, steroids and antibiotics",
          detail: "Irrational combination syrups, codeine, oral or injectable steroids for an undiagnosed cough, and antibiotics for a cough rather than a cause",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Causes of cough beyond two weeks",
      caption: "The clue in the history, the confirming test or trial, and the treatment.",
      columns: ["Cause", "Clue in the history", "Confirming test or trial", "Treatment"],
      rows: [
        [
          "Pulmonary tuberculosis",
          "Evening fever, night sweats, weight loss, haemoptysis, contact, diabetes, HIV",
          "Sputum CBNAAT or Truenat, chest radiograph",
          "2HRZE/4HRE daily by weight band, notify, screen contacts",
        ],
        [
          "Post-infectious cough",
          "Began with a cold, 3-8 weeks, worse at night and on talking",
          "Normal radiograph and negative sputum; resolves with time",
          "Explanation, honey, dextromethorphan; ipratropium or ICS if persistent",
        ],
        [
          "Upper airway cough syndrome",
          "Nasal blockage, postnasal drip, throat clearing, cobblestone pharynx",
          "Response to a 2-4 week trial",
          "Antihistamine at night or intranasal steroid; treat the rhinitis",
        ],
        [
          "Cough-variant asthma",
          "Nocturnal, exercise or cold trigger, wheeze, atopy, family history",
          "Spirometry reversibility, PEF diary variability, response to an ICS trial",
          "ICS or ICS-formoterol 4-8 weeks then maintenance; written action plan",
        ],
        [
          "ACE inhibitor cough",
          "Dry tickly cough weeks to months after enalapril, ramipril or lisinopril",
          "Resolution within 1-4 weeks of stopping",
          "Switch to an angiotensin receptor blocker",
        ],
        [
          "Lung cancer",
          "Smoker over 40, changed cough, haemoptysis, weight loss, hoarseness",
          "CT chest and bronchoscopy even when the radiograph is normal",
          "Urgent referral to a thoracic centre",
        ],
      ],
    },
  ],

  "symptom-approach-weight-loss": [
    {
      kind: "branch",
      heading: "Sort the weight loss by appetite",
      caption: "A loss of 5 percent over 6-12 months, or 10 percent at any time, that was not intended. Ask about appetite first - it splits the differential in one question.",
      root: "Unintentional weight loss",
      arms: [
        {
          label: "Increased or preserved appetite",
          steps: [
            "Calories lost in urine or stool, or burned by a raised metabolic rate",
            "Uncontrolled diabetes, thyrotoxicosis, malabsorption, phaeochromocytoma, worms",
            "HbA1c or fasting glucose, TSH and free T4, stool for ova and fat, anti-tTG, faecal elastase",
          ],
        },
        {
          label: "Reduced appetite",
          tone: "warn",
          steps: [
            "Anorexia from cytokines, pain, nausea, dysphagia, mood or a drug",
            "Malignancy, tuberculosis, HIV, depression, dementia, chronic organ disease, poverty",
            "CBC, ESR, creatinine, LFT with albumin, chest radiograph, HIV, ultrasound abdomen, stool occult blood, PHQ-9, medication review",
          ],
        },
        {
          label: "Reduced with deliberate restriction",
          steps: [
            "Restriction driven by fear of weight gain or body image disturbance",
            "Anorexia nervosa, bulimia with restriction, laxative or diuretic misuse",
            "SCOFF questions, medical stability check, electrolytes, ECG, phosphate",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Tiered investigation of unintentional weight loss",
      caption: "A normal examination and a normal first tier are a result, not a failure.",
      steps: [
        {
          label: "Confirm the loss against a recorded weight",
          detail: "Half of reported weight loss disappears when the old weight is found; weigh at every contact and write it in the record",
        },
        {
          label: "Tier one, ordered together at the first visit",
          detail: "CBC with smear, ESR and CRP, HbA1c, TSH, creatinine and electrolytes, LFT with albumin, calcium, urine routine, stool occult blood and ova, HIV with consent, chest radiograph, ultrasound abdomen; sputum CBNAAT if any cough",
        },
        {
          label: "Geriatric tier alongside, in the older adult",
          detail: "Medication review, dental examination, swallowing assessment, PHQ-9 or GDS, Mini-Cog, functional assessment, vitamin B12 and D, MNA-SF",
        },
        {
          label: "Watchful waiting for 3-6 months",
          detail: "Normal examination and normal tier one - monthly weights, repeat history, nutritional prescription, mood treatment; most patients stabilise",
          tone: "good",
        },
        {
          label: "Tier two, by clue",
          detail: "Upper GI endoscopy and colonoscopy, contrast CT chest and abdomen, mammography, PSA, gynaecological ultrasound, protein electrophoresis, anti-tTG, faecal elastase, echocardiography",
          tone: "decision",
        },
        {
          label: "Never as a first step",
          detail: "Tumour markers as a screen, whole-body CT or PET-CT without a clue, tonics and appetite stimulants before a diagnosis - false positives, incidental findings, cost and delay",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "The causes come in thirds",
      caption: "In India tuberculosis, diabetes and HIV sit at the top of the middle third.",
      root: "Confirmed unintentional weight loss",
      arms: [
        {
          label: "Malignancy - 15 to 35 percent",
          steps: [
            "Gastrointestinal: stomach, colon, pancreas, oesophagus",
            "Lung, lymphoma and leukaemia",
            "Prostate, hepatocellular carcinoma",
          ],
        },
        {
          label: "Non-malignant organic - 30 to 40 percent",
          steps: [
            "Tuberculosis, HIV, chronic infection and abscess",
            "Diabetes, thyrotoxicosis, Addison disease",
            "COPD, heart failure, chronic kidney and liver disease",
            "Malabsorption: coeliac disease, chronic pancreatitis, giardiasis",
          ],
        },
        {
          label: "Psychiatric and social - 10 to 25 percent",
          steps: [
            "Depression, dementia, anorexia nervosa",
            "Alcohol and substance use, poverty, isolation, poor dentition",
            "Drugs: metformin, SGLT2 inhibitors, topiramate, levodopa, digoxin, SSRIs in the elderly",
          ],
        },
        {
          label: "Unexplained - 10 to 25 percent",
          tone: "good",
          steps: ["No cause found after two tiers", "This group has a good prognosis"],
        },
      ],
    },
    {
      kind: "flow",
      heading: "The adolescent with restriction",
      caption: "Medical instability decides admission, not the BMI alone.",
      steps: [
        {
          label: "Restriction, low weight, fear of gaining",
          detail: "Often with excessive exercise and amenorrhoea, and denial of illness",
          tone: "decision",
        },
        {
          label: "Check the instability markers at the bedside",
          detail: "Pulse below 50 by day or 45 at night, postural fall of 20 mmHg systolic, temperature below 35.5 degrees C, BMI below 15, electrolyte derangement or syncope",
          tone: "warn",
        },
        {
          label: "Admit for medical stabilisation",
          detail: "Monitor electrolytes, phosphate and ECG; involve a specialist eating disorder or adolescent team",
        },
        {
          label: "Refeeding is dangerous in severe malnutrition",
          detail: "BMI below 16, loss over 15 percent in three months, or little intake for over ten days - check and replace phosphate, potassium and magnesium with thiamine before calories are increased",
          tone: "warn",
        },
        {
          label: "Feed in parallel with the work-up",
          detail: "Energy-dense familiar foods in small frequent meals, protein 1.0-1.2 g/kg a day, oral supplements between meals rather than in place of them",
        },
        {
          label: "Family-based treatment with a specialist team",
          detail: "Not reassurance and a tonic; safety net for dysphagia, bleeding, jaundice, a lump, fever or a further 2 kg loss",
          tone: "good",
        },
      ],
    },
  ],
};

export default diagrams;
