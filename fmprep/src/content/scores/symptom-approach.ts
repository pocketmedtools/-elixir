import type { NoteTable } from "../../lib/types";

const scores: Record<string, NoteTable[]> = {
  "symptom-approach-dizziness": [
    {
      heading: "Types of dizziness - Drachman-Hart classification (Harrison 22e 2025)",
      columns: ["Type", "What the patient describes", "Usual causes"],
      rows: [
        ["Vertigo", "Illusion of movement, spinning of self or room", "BPPV, vestibular neuritis, Meniere disease, vestibular migraine, brainstem or cerebellar stroke"],
        ["Presyncope", "Feeling about to faint, greying of vision", "Orthostatic hypotension, vasovagal, arrhythmia, drugs, anaemia"],
        ["Disequilibrium", "Unsteady on feet, worse walking, not in the head", "Neuropathy, cerebellar disease, parkinsonism, visual loss, multisensory deficit"],
        ["Non-specific light-headedness", "Vague, woozy or floating feeling", "Anxiety, hyperventilation, depression, drugs, hypoglycaemia"],
      ],
    },
    {
      heading: "TiTrATE timing and trigger classification of dizziness (Tintinalli 9e 2020)",
      columns: ["Syndrome", "Timing and trigger", "Benign causes", "Dangerous causes"],
      rows: [
        ["Acute vestibular syndrome", "Continuous for days, with nystagmus, nausea, gait unsteadiness", "Vestibular neuritis, labyrinthitis", "Posterior circulation stroke - use HINTS"],
        ["Triggered episodic", "Seconds to minutes, provoked by head position or standing", "BPPV, orthostatic hypotension", "Central positional vertigo, cardiac arrhythmia"],
        ["Spontaneous episodic", "Minutes to hours, no trigger", "Vestibular migraine, Meniere disease, panic", "TIA, arrhythmia, hypoglycaemia"],
        ["Chronic vestibular syndrome", "Weeks to months, persistent", "PPPD, medication side effect, bilateral vestibulopathy", "Posterior fossa tumour, cerebellar degeneration"],
      ],
    },
    {
      heading: "ESC 2018 classification of syncope (ESC 2018 syncope)",
      columns: ["Class", "Subtypes", "Clues"],
      rows: [
        ["Reflex (neurally mediated)", "Vasovagal (orthostatic, emotional), situational (micturition, cough), carotid sinus", "Prodrome, triggers, young, recurrent, normal ECG"],
        ["Orthostatic hypotension", "Drug-induced, volume depletion, primary or secondary autonomic failure", "On standing, after meals, diuretics, diabetes, parkinsonism"],
        ["Cardiac - arrhythmic", "Brady (sinus node, AV block), tachy (VT, SVT), channelopathy", "Exertional or supine, palpitations, abnormal ECG, family history of sudden death"],
        ["Cardiac - structural", "Aortic stenosis, HCM, ischaemia, PE, tamponade, atrial myxoma", "Syncope during exertion, murmur, known heart disease"],
      ],
    },
    {
      heading: "Orthostatic hypotension and POTS criteria (ESC 2018 syncope)",
      columns: ["Condition", "Criterion on active standing or tilt", "Note"],
      rows: [
        ["Classical OH", "Sustained fall in SBP 20 mmHg or more, DBP 10 or more, or SBP under 90 within 3 minutes", "Measure after 5 minutes supine"],
        ["Initial OH", "SBP fall over 40 mmHg and/or DBP over 20 within 15 seconds, recovering quickly", "Young people; needs beat-to-beat measurement"],
        ["Delayed OH", "Fall occurring after 3 minutes of standing", "Early autonomic failure, elderly"],
        ["Neurogenic OH", "OH with heart rate rise under 15 per minute", "Autonomic failure: diabetes, Parkinson disease"],
        ["POTS", "Heart rate rise 30 per minute or more (40 or more age 12-19) within 10 minutes, no OH", "Young women; symptoms for 3 months or more"],
      ],
    },
    {
      heading: "San Francisco Syncope Rule criteria (Rosen 10e 2022)",
      columns: ["Criterion (CHESS)", "Finding", "Use"],
      rows: [
        ["C - Congestive heart failure", "History of heart failure", "Any 1 present = high risk of serious outcome at 7 days"],
        ["H - Haematocrit", "Under 30%", "Admit or urgent work-up"],
        ["E - ECG", "Abnormal: non-sinus rhythm or new change", "Includes any new ECG change"],
        ["S - Shortness of breath", "History of breathlessness", "Suggests cardiopulmonary cause"],
        ["S - Systolic BP", "Under 90 mmHg at triage", "Validation sensitivity lower than derivation - aid, not rule"],
      ],
    },
    {
      heading: "Canadian Syncope Risk Score (ESC 2018 syncope, Rosen 10e 2022)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["Vasovagal predisposition", "Warm crowded place, prolonged standing, fear, emotion or pain", "-1"],
        ["History of heart disease", "CAD, AF or flutter, heart failure, valve disease", "1"],
        ["Systolic BP", "Any reading under 90 or over 180 mmHg", "2"],
        ["Troponin", "Raised (over 99th centile)", "2"],
        ["QRS axis", "Abnormal (under -30 or over 100 degrees)", "1"],
        ["QRS duration", "Over 130 ms", "1"],
        ["Corrected QT", "Over 480 ms", "2"],
        ["ED diagnosis", "Vasovagal syncope", "-2"],
        ["ED diagnosis", "Neither vasovagal nor cardiac", "0"],
        ["ED diagnosis", "Cardiac syncope", "2"],
      ],
    },
    {
      heading: "Canadian Syncope Risk Score - interpretation (30-day serious outcome)",
      columns: ["Total", "Risk category", "Serious outcome risk"],
      rows: [
        ["-3 to -2", "Very low", "Under 1%; discharge"],
        ["-1 to 0", "Low", "About 1-2%; discharge"],
        ["1 to 3", "Medium", "About 3-8%; consider observation or early outpatient work-up"],
        ["4 to 5", "High", "About 13-20%; admit or monitor"],
        ["6 to 11", "Very high", "About 29-84%; admit"],
      ],
    },
  ],

  "symptom-approach-headache": [
    {
      heading: "SNNOOP10 red flag criteria for secondary headache (Do et al 2019; ICHD-3)",
      columns: ["Flag", "Feature", "Think of"],
      rows: [
        ["S - Systemic", "Fever, weight loss, systemic illness", "Meningitis, encephalitis, giant cell arteritis, malignancy"],
        ["N - Neoplasm", "History of cancer", "Brain metastasis"],
        ["N - Neurological deficit", "Focal signs, reduced consciousness, confusion", "Stroke, tumour, abscess, haemorrhage"],
        ["O - Onset sudden", "Thunderclap, peak within 1 minute", "SAH, RCVS, dissection, pituitary apoplexy"],
        ["O - Older age", "New headache after 50 years", "Giant cell arteritis, tumour"],
        ["P1 - Pattern change", "Change in pattern or recent-onset headache", "Secondary cause"],
        ["P2 - Positional", "Worse lying or standing", "Raised or low CSF pressure"],
        ["P3 - Precipitated", "By sneezing, coughing or exertion", "Posterior fossa lesion, Chiari malformation"],
        ["P4 - Papilloedema", "Disc swelling on fundoscopy", "Raised intracranial pressure, IIH, venous thrombosis"],
        ["P5 - Progressive", "Progressive or atypical presentation", "Space-occupying lesion"],
        ["P6 - Pregnancy", "Pregnancy or puerperium", "Pre-eclampsia, CVT, PRES, apoplexy"],
        ["P7 - Painful eye", "Painful eye with autonomic features", "Acute glaucoma, carotid or cavernous sinus lesion"],
        ["P8 - Post-traumatic", "Onset after head injury", "Subdural or epidural haematoma"],
        ["P9 - Pathology of immunity", "HIV, immunosuppression", "Opportunistic infection, lymphoma"],
        ["P10 - Painkiller overuse", "Analgesic overuse or new drug at onset", "Medication overuse headache, drug side effect"],
      ],
    },
    {
      heading: "Ottawa subarachnoid haemorrhage rule criteria (Rosen 10e 2022)",
      columns: ["Criterion", "Finding", "Use"],
      rows: [
        ["Applies to", "Alert patient 15 years or older, new severe atraumatic headache peaking within 1 hour", "Not for recurrent similar headaches, known aneurysm or deficits"],
        ["Age", "40 years or more", "Any 1 criterion - investigate for SAH"],
        ["Neck", "Neck pain or stiffness", "Rule is 100% sensitive, specificity about 15%"],
        ["Consciousness", "Witnessed loss of consciousness", "CT within 6 hours of onset is highly sensitive"],
        ["Exertion", "Onset during exertion", "CT after 6 hours: add LP for xanthochromia or CTA"],
        ["Thunderclap", "Instantly peaking pain", "No criterion - SAH ruled out"],
        ["Examination", "Limited neck flexion", "Cannot touch chin to chest or raise head 3 cm off bed when supine"],
      ],
    },
  ],

  "symptom-approach-weight-loss": [
    {
      heading: "GLIM criteria for diagnosing malnutrition (GLIM 2019, ESPEN)",
      columns: ["Criterion", "Definition", "Note"],
      rows: [
        ["Phenotypic - weight loss", "Over 5% within 6 months, or over 10% beyond 6 months", "Unintentional"],
        ["Phenotypic - low BMI", "Under 20 (under 70 y) or under 22 kg/m2 (70 y or over)", "Asia: under 18.5 (under 70 y) or under 20 (70 y or over)"],
        ["Phenotypic - low muscle mass", "Reduced by validated body composition or calf or arm circumference", "Use Asian sarcopenia cut-offs"],
        ["Aetiologic - reduced intake", "50% or less of needs over 1 week, any reduction over 2 weeks, or malabsorption", "Dysphagia, GI disease, anorexia"],
        ["Aetiologic - inflammation", "Acute disease or injury, or chronic disease-related inflammation", "Infection, cancer, CKD, heart failure, COPD"],
        ["Diagnosis", "At least 1 phenotypic plus 1 aetiologic criterion", "Screen first with MUST, NRS-2002 or MNA-SF"],
      ],
    },
    {
      heading: "GLIM severity grading of malnutrition (GLIM 2019)",
      columns: ["Stage", "Weight loss", "Low BMI (kg/m2)", "Muscle mass"],
      rows: [
        ["Stage 1 (moderate)", "5-10% within 6 months or 10-20% beyond 6 months", "Under 20 (under 70 y), under 22 (70 y or over)", "Mild to moderate deficit"],
        ["Stage 2 (severe)", "Over 10% within 6 months or over 20% beyond 6 months", "Under 18.5 (under 70 y), under 20 (70 y or over)", "Severe deficit"],
      ],
    },
    {
      heading: "Cancer cachexia staging (International consensus; ESMO 2021)",
      columns: ["Stage", "Criteria", "Management"],
      rows: [
        ["Precachexia", "Weight loss 5% or less with anorexia and metabolic change", "Early nutritional counselling and exercise"],
        ["Cachexia", "Weight loss over 5% in 6 months, or BMI under 20 with loss over 2%, or sarcopenia with loss over 2%", "Multimodal: nutrition, exercise, treat symptoms, consider progestin or steroid"],
        ["Refractory cachexia", "Procatabolic cancer unresponsive to therapy, poor performance status, survival under 3 months", "Comfort-focused care; avoid burdensome feeding"],
      ],
    },
  ],

  "symptom-approach-fever-without-focus": [
    {
      heading: "Classification of fever of unknown origin (Durack-Street; Harrison 22e 2025)",
      columns: ["Type", "Definition", "Leading causes"],
      rows: [
        ["Classic FUO", "Over 38.3 C on several occasions for over 3 weeks, undiagnosed after 3 days inpatient or 3 visits", "Infection (TB, abscess, endocarditis), malignancy, connective tissue disease"],
        ["Nosocomial FUO", "Fever 38.3 C or more in inpatient, absent on admission, undiagnosed after 3 days", "Line infection, C difficile, drug fever, DVT, sinusitis"],
        ["Neutropenic FUO", "Fever 38.3 C or more with neutrophils under 500/mcL, undiagnosed after 3 days", "Bacterial and fungal infection"],
        ["HIV-associated FUO", "Fever over 3 weeks outpatient or 3 days inpatient in HIV", "TB, MAC, cryptococcus, lymphoma, histoplasmosis"],
      ],
    },
    {
      heading: "Yale Observation Scale for febrile children under 3 years (Nelson 22e 2024)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["Quality of cry", "Strong with normal tone, or content and not crying", "1"],
        ["Quality of cry", "Whimpering or sobbing", "3"],
        ["Quality of cry", "Weak, moaning or high-pitched", "5"],
        ["Reaction to parent stimulation", "Cries briefly then stops, or content", "1"],
        ["Reaction to parent stimulation", "Cries off and on", "3"],
        ["Reaction to parent stimulation", "Continual cry or hardly responds", "5"],
        ["State variation", "Stays awake, or wakes quickly when stimulated", "1"],
        ["State variation", "Eyes close briefly, or wakes with prolonged stimulation", "3"],
        ["State variation", "Falls asleep or will not rouse", "5"],
        ["Colour", "Pink", "1"],
        ["Colour", "Pale extremities or acrocyanosis", "3"],
        ["Colour", "Pale, cyanotic, mottled or ashen", "5"],
        ["Hydration", "Skin and eyes normal, mucosa moist", "1"],
        ["Hydration", "Skin and eyes normal, mouth slightly dry", "3"],
        ["Hydration", "Skin doughy or tented, dry mucosa and/or sunken eyes", "5"],
        ["Response to social overtures", "Smiles or alerts", "1"],
        ["Response to social overtures", "Brief smile or alerts briefly", "3"],
        ["Response to social overtures", "No smile, anxious or dull face, or no alerting", "5"],
      ],
    },
    {
      heading: "Yale Observation Scale score bands",
      columns: ["Total", "Risk of serious illness", "Action"],
      rows: [
        ["10 or less", "Low (about 3%)", "Home care with safety-net advice if examination normal"],
        ["11-15", "Intermediate (about 26%)", "Careful assessment, investigations, observe"],
        ["16 or more", "High (about 92%)", "Refer or admit; full sepsis work-up"],
      ],
    },
  ],

  "symptom-approach-fatigue": [
    {
      heading: "ME/CFS diagnostic criteria (NICE NG206 2021; IOM 2015)",
      columns: ["Criterion", "NICE 2021", "IOM 2015"],
      rows: [
        ["Duration", "Symptoms persisting 3 months or more (suspect earlier)", "6 months or more"],
        ["Fatigue", "Debilitating fatigue worse with activity, not caused by exertion, not relieved by rest", "Substantial fall in activity with profound new fatigue not relieved by rest"],
        ["Post-exertional malaise", "Required - delayed worsening after activity, slow recovery", "Required"],
        ["Sleep", "Unrefreshing sleep or sleep disturbance - required", "Unrefreshing sleep - required"],
        ["Cognition or orthostasis", "Cognitive difficulties (brain fog) - required", "Cognitive impairment or orthostatic intolerance - at least one"],
        ["Exclusion", "Other causes investigated (anaemia, thyroid, diabetes, depression, coeliac)", "Not explained by another condition"],
      ],
    },
  ],

  "symptom-approach-body-ache": [
    {
      heading: "ACR 2016 revised fibromyalgia diagnostic criteria (ACR 2016)",
      columns: ["Criterion", "Requirement", "Note"],
      rows: [
        ["Widespread Pain Index (WPI)", "Number of 19 body areas painful in past week (0-19)", "Shoulders, hips, arms, legs, jaw, chest, abdomen, back, neck"],
        ["Symptom Severity Scale (SSS)", "Fatigue, unrefreshing sleep, cognition (0-3 each) plus headache, abdominal pain, depression (0-1 each)", "Total 0-12"],
        ["Threshold", "WPI 7 or more and SSS 5 or more, or WPI 4-6 and SSS 9 or more", "Both parts needed"],
        ["Generalised pain", "Pain in at least 4 of 5 regions", "Jaw, chest and abdomen do not count to region total"],
        ["Duration", "Symptoms at similar level for at least 3 months", "Check thyroid, CK, ESR/CRP, vitamin D"],
        ["Other diagnoses", "Diagnosis valid regardless of other conditions", "Fibromyalgia is not a diagnosis of exclusion"],
      ],
    },
    {
      heading: "EULAR/ACR 2012 polymyalgia rheumatica classification score (without ultrasound)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["Morning stiffness", "Over 45 minutes", "2"],
        ["Hip involvement", "Hip pain or limited range of movement", "1"],
        ["Serology", "RF and ACPA both negative", "2"],
        ["Other joints", "No pain in other joints", "1"],
      ],
    },
    {
      heading: "EULAR/ACR 2012 polymyalgia rheumatica score - interpretation",
      columns: ["Total", "Classification", "Note"],
      rows: [
        ["Entry requirement", "Age 50 or more, bilateral shoulder aching, raised CRP and/or ESR", "Must be met before scoring"],
        ["4 or more (clinical)", "Classified as PMR", "Ultrasound adds 1 point for shoulder plus hip, 1 for both shoulders"],
        ["5 or more (with ultrasound)", "Classified as PMR", "Ultrasound: subdeltoid bursitis, biceps tenosynovitis, hip synovitis"],
        ["Below threshold", "Not classified as PMR", "Consider RA, hypothyroidism, myositis, malignancy, GCA overlap"],
      ],
    },
  ],

  "symptom-approach-chronic-cough": [
    {
      heading: "Classification of cough by duration (ERS 2020 chronic cough, BTS)",
      columns: ["Class", "Duration", "Usual causes"],
      rows: [
        ["Acute cough (adult)", "Under 3 weeks", "Viral URTI, acute bronchitis, pneumonia, PE, heart failure"],
        ["Subacute cough (adult)", "3-8 weeks", "Post-infectious cough, pertussis, post-nasal drip"],
        ["Chronic cough (adult)", "Over 8 weeks", "Asthma, GERD, upper airway cough, ACE inhibitor, TB, smoking, lung cancer"],
        ["Chronic cough (child)", "Over 4 weeks", "Protracted bacterial bronchitis, asthma, foreign body, TB, bronchiectasis"],
      ],
    },
  ],

  "symptom-approach-breathlessness": [
    {
      heading: "Modified Borg dyspnoea scale (CR10; ATS)",
      columns: ["Rating", "Descriptor", "Use"],
      rows: [
        ["0", "Nothing at all", "Rate breathlessness at rest or at end of exercise"],
        ["0.5", "Very, very slight (just noticeable)", "Used in 6-minute walk test"],
        ["1", "Very slight", "Normal at end of light exertion"],
        ["2", "Slight", "Light breathlessness"],
        ["3", "Moderate", "Target for exercise training in rehabilitation (3-4)"],
        ["4", "Somewhat severe", "Upper end of training target"],
        ["5-6", "Severe", "6 has no descriptor; above training target"],
        ["7-8", "Very severe", "8 has no descriptor; consider stopping"],
        ["9", "Very, very severe (almost maximal)", "Near exhaustion"],
        ["10", "Maximal", "Stop exercise"],
      ],
    },
    {
      heading: "Types of respiratory failure classification (Harrison 22e 2025)",
      columns: ["Type", "Blood gas", "Mechanism and causes"],
      rows: [
        ["Type 1 (hypoxaemic)", "PaO2 under 60 mmHg (8 kPa), PaCO2 normal or low", "V/Q mismatch or shunt: pneumonia, ARDS, pulmonary oedema, PE"],
        ["Type 2 (hypercapnic)", "PaCO2 over 45 mmHg (6 kPa), pH under 7.35 if acute", "Hypoventilation: COPD, neuromuscular, opioids, chest wall, obesity"],
        ["Type 3 (perioperative)", "Hypoxaemia from atelectasis", "Low FRC after anaesthesia, pain, obesity"],
        ["Type 4 (shock)", "Hypoperfusion of respiratory muscles", "Cardiogenic, septic or hypovolaemic shock"],
      ],
    },
  ],
};

export default scores;
