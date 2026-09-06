import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "symptom-approach-fatigue",
  title: "Fatigue and tiredness",
  oneLiner:
    "Fatigue is a subjective sense of exhaustion disproportionate to effort and not relieved by rest, and in Indian family practice it is a symptom whose commonest causes are anaemia, undiagnosed diabetes or thyroid disease, sleep debt, depression and drugs, so it is worked up with a short focused history, one rational blood panel and a named review date rather than with an open-ended battery of tests.",
  frequency: "core",
  keywords: [
    "tiredness",
    "kamzori",
    "weakness",
    "lethargy",
    "TATT",
    "tired all the time",
    "anaemia",
    "hypothyroidism",
    "vitamin B12 deficiency",
    "vitamin D deficiency",
    "obstructive sleep apnoea",
    "depression",
    "somatisation",
    "chronic fatigue syndrome",
    "myalgic encephalomyelitis",
    "safety netting",
    "watchful waiting",
    "NFHS-5 anaemia",
  ],
  sections: [
    {
      heading: "What the complaint means and how often it walks in",
      points: [
        "**Fatigue is a subjective symptom:** a sustained sense of exhaustion, reduced capacity for physical or mental work, and a need to rest that rest does not relieve. It is not the same as sleepiness (an urge to fall asleep), not the same as breathlessness, and not the same as true muscle weakness.",
        "Tiredness is the presenting complaint in roughly **5-10% of all primary care consultations** worldwide, and the Indian equivalent complaints of kamzori, thakan and sharir mein jaan nahi are among the top five reasons an adult attends a general clinic.",
        "**Sort the complaint before working it up.** Ask the patient to describe a typical day: fatigue on effort suggests a cardiorespiratory or haematological cause, fatigue worst on waking and improving through the day suggests depression or poor sleep, and fatigue that appears only after a specific activity and forces rest suggests deconditioning or post-exertional malaise.",
        "**Duration drives probability.** Fatigue under one month is usually post-infective, drug-related or situational; one to six months is where organic disease is found; beyond six months an organic cause is found in fewer than one in ten and the yield of repeat testing is close to zero.",
        "A physical cause is identified in about **a third** of patients presenting with fatigue, a psychological cause in another third, and no definable cause in the remaining third; a family physician who accepts this openly with the patient investigates less and helps more.",
        "**The consultation is the test.** More diagnoses of fatigue are made by a 10-minute history covering sleep, mood, menstrual loss, diet, alcohol and drugs than by any panel of blood tests.",
      ],
    },
    {
      heading: "Fatigue, weakness and sleepiness: separating the three",
      points: [
        "**True weakness is a loss of power, demonstrable on examination**, and it localises: proximal weakness (difficulty rising from a squat, combing hair) points to myopathy, hypokalaemia, hypothyroidism, vitamin D deficiency, steroid or statin myopathy and inflammatory myositis; distal weakness points to neuropathy.",
        "Weakness that **fluctuates through the day and worsens with sustained effort** is myasthenia gravis; weakness that is **episodic with normal power between attacks** in a young Indian adult is hypokalaemic periodic paralysis, often thyrotoxic or from renal tubular acidosis, and it is a same-day potassium check.",
        "**Sudden focal weakness is never fatigue** - it is stroke until proved otherwise and goes on the emergency pathway.",
        "**Excessive daytime sleepiness** (dozing off while sitting, at a meeting, at traffic signals) is a different symptom, quantified by the Epworth Sleepiness Scale, and points to obstructive sleep apnoea, insufficient sleep, shift work, sedatives or, rarely, narcolepsy.",
        "The patient who says kamzori usually means fatigue, but ask directly: **can you climb the stairs, can you lift a bucket of water, can you get up from the floor without using your hands?** These three questions convert a vague word into a testable statement.",
        "Record objective function - flights of stairs, distance walked, hours of work done - at the first visit, because it is the only reliable way to measure whether treatment is working at review.",
      ],
    },
    {
      heading: "The history that actually sorts it out",
      points: [
        "**Screen for the treatable big five in every case:** anaemia (heavy periods, piles, diet, pica, black stools), thyroid disease (cold intolerance, weight gain, constipation, hoarseness), diabetes (polyuria, polydipsia, weight loss), sleep disorder (snoring, witnessed apnoea, unrefreshing sleep), and mood (low mood, loss of interest, hopelessness).",
        "**Use the two-item PHQ-2:** over the last two weeks, have you been bothered by little interest or pleasure in doing things, and by feeling down, depressed or hopeless? A positive answer takes you to PHQ-9 and GAD-7; depression and anxiety are the single largest identifiable group in the fatigue clinic.",
        "**Drug history is high yield and cheap:** beta-blockers, older antihistamines, antipsychotics, phenytoin and other antiepileptics, opioids, statins (myalgia), metformin and proton pump inhibitors (B12 depletion), antiretrovirals, antitubercular drugs, alcohol, cannabis, and over-the-counter sedating cold remedies.",
        "**Ask about the household and the work,** not just the body: shift work, a new night duty, a family member who is ill, a bereavement, debt, migration, domestic violence, an examination, an alcohol-using spouse. Fatigue is often the ticket of entry for a problem the patient cannot yet name.",
        "Elicit **ideas, concerns and expectations** explicitly - most patients with fatigue have a specific fear (cancer, HIV, kidney failure, tuberculosis) and a specific want (usually a blood test or a tonic). Naming both shortens the consultation and reduces unnecessary testing.",
        "**Ask what the patient has already taken** - multivitamin syrups, B-complex injections, ayurvedic and unani tonics, protein powders, and steroid-containing weight-gain preparations are all common and some cause the very symptoms being investigated.",
      ],
    },
    {
      heading: "Examination and the rational first-line panel",
      points: [
        "Examination is short but never skipped: weight and BMI with a comparison to any earlier record, pulse, blood pressure with a standing reading, pallor of conjunctiva and tongue, jaundice, oedema, thyroid, lymph nodes, abdominal masses and hepatosplenomegaly, and a quick power and reflex screen.",
        "**A normal examination with a normal weight makes serious organic disease unlikely** and is a legitimate part of the reassurance you offer.",
        "**First-line panel (order all at once, not one at a time):** complete blood count with peripheral smear, random or fasting glucose or HbA1c, TSH, serum creatinine, ALT, and urine routine. In India add **serum ferritin in menstruating women** and consider vitamin B12 in strict vegetarians and metformin users.",
        "**Add on clinical grounds only:** ESR or CRP if there is weight loss, fever or joint pain; chest radiograph and sputum for Xpert MTB/RIF if cough for two weeks or more, fever or weight loss; HIV test with consent if there are risk factors, weight loss or recurrent infections; serum calcium and vitamin D if there is bone pain or proximal weakness.",
        "**Do not order routinely:** ANA, rheumatoid factor, tumour markers, whole-body scans, serum electrolyte panels in the well, or a repeat of the same panel at four weeks. A test ordered without a pretest question generates false positives and new anxiety.",
        "**Vitamin D and B12 in India need judgement, not reflex.** Deficiency is prevalent in 70-90% of urban Indians for vitamin D and up to half of strict vegetarians for B12, so a low value is common and does not by itself explain fatigue; treat it, but keep looking if the symptom does not follow the number.",
      ],
    },
    {
      heading: "The commonest causes in Indian practice",
      points: [
        "**Iron deficiency anaemia** is the leading organic cause: NFHS-5 (2019-21) found anaemia in **57% of women aged 15-49 and 25% of men**, and in 67% of children aged 6-59 months. In a menstruating woman ask about pad counts and clots; in a man or a postmenopausal woman iron deficiency is a gastrointestinal blood loss until proved otherwise.",
        "**Hypothyroidism** affects roughly one in ten Indian adults (ICMR multi-city data, higher in women and in the inland iodine-sufficient belt); check TSH once, and repeat with free T4 if raised. Subclinical hypothyroidism with TSH under 10 mIU/L rarely explains fatigue by itself.",
        "**Undiagnosed type 2 diabetes** - ICMR-INDIAB 2023 estimated 101 million Indians with diabetes and 136 million with prediabetes, and fatigue with nocturia is a common first presentation.",
        "**Tuberculosis** deserves a low threshold: any fatigue with cough for two weeks or more, evening fever, night sweats, loss of appetite or weight loss gets a chest radiograph and two sputum samples for Xpert MTB/RIF under NTEP, free of cost.",
        "**Sleep-disordered breathing** is heavily under-diagnosed: the obese, snoring, hypertensive middle-aged man with unrefreshing sleep and morning headache needs a STOP-BANG score and a sleep study, not a tonic.",
        "**Depression, anxiety and somatisation** together outnumber every organic cause. The National Mental Health Survey 2015-16 found a current prevalence of depressive disorders of 2.7% and lifetime 5.25%, with a treatment gap above 80%; in the clinic the presentation is almost always bodily - tiredness, body ache, burning feet, palpitations - not sadness.",
        "Others worth a thought: chronic kidney disease, chronic liver disease, heart failure, HIV, coeliac disease in an underweight patient with diarrhoea, malignancy in the older patient with weight loss, and the postviral fatigue that follows dengue, chikungunya, typhoid and COVID-19, which can last 6-12 weeks and needs graded activity rather than tests.",
      ],
    },
    {
      heading: "Managing the patient in whom no disease is found",
      points: [
        "**Explain rather than dismiss.** Say what the tests have excluded, name the mechanism you believe is operating (sleep debt, low mood, deconditioning, post-viral recovery), and state clearly that the symptom is real: the sentence to avoid is there is nothing wrong with you.",
        "**Treat sleep first:** fixed wake time, no daytime naps beyond 30 minutes, no screens or caffeine after 6 pm, no alcohol as a sedative, and a limited course of a hypnotic only if there is a clear short-term precipitant.",
        "**Graded activity, not rest:** start at a level the patient can do on a bad day, increase by about 10% a week, and record it. Prolonged rest deconditions and prolongs the symptom in every fatigue syndrome except acute infection.",
        "**Treat mood actively** when PHQ-9 is 10 or more: brief behavioural activation, problem-solving counselling, and an SSRI such as escitalopram 10 mg PO once daily or sertraline 50 mg PO once daily, warning about the 2-week lag and early jitteriness.",
        "**Chronic fatigue syndrome / myalgic encephalomyelitis** is diagnosed when disabling fatigue persists beyond 6 months with post-exertional malaise, unrefreshing sleep and cognitive difficulty, after alternatives are excluded. Manage with activity pacing within an energy envelope, sleep hygiene and treatment of comorbid mood disorder; NICE 2021 advises against rigid graded exercise programmes in this specific group.",
        "**Safety net in words the patient will remember:** come back sooner if you lose weight without trying, develop fever lasting more than a week, notice blood in stool or urine, cough for more than two weeks, or if the tiredness stops you working. Write it on the prescription and book a definite review at 4-6 weeks.",
        "**Watchful waiting is an active plan, not a refusal.** It requires a named interval, a named person to come back to, and an explicit list of what would change the plan - state this in the notes, because unstructured waiting is what leads to late diagnosis.",
      ],
    },
  ],
  tables: [
    {
      heading: "Fatigue versus weakness versus sleepiness",
      columns: ["Feature", "Fatigue", "True weakness", "Sleepiness"],
      rows: [
        ["Patient words", "No energy, thakan, jaan nahi", "Cannot lift, cannot climb", "Dozes off, aankh lag jaati hai"],
        ["Examination", "Normal power", "Reduced power, localises", "Normal power"],
        ["Best first question", "What does a typical day look like?", "Can you rise from a squat?", "Do you doze while sitting quietly?"],
        ["Typical causes", "Anaemia, mood, sleep debt, drugs, post-viral", "Myopathy, neuropathy, hypokalaemia, myasthenia, stroke", "Sleep apnoea, short sleep, sedatives, shift work"],
        ["First test", "CBC, glucose, TSH", "Potassium, CPK, TSH, vitamin D", "STOP-BANG, Epworth, sleep study"],
      ],
    },
    {
      heading: "First-line panel in fatigue and what each result changes",
      columns: ["Test", "Why it is ordered", "What an abnormal result changes"],
      rows: [
        ["Complete blood count with smear", "Anaemia is the commonest organic cause", "Microcytic: ferritin and a source of blood loss. Macrocytic: B12, folate, TSH, alcohol history"],
        ["Serum ferritin (menstruating women)", "Iron deficiency precedes anaemia", "Below 30 ng/mL confirms iron deficiency; start oral iron and look for the cause"],
        ["HbA1c or fasting glucose", "Undiagnosed diabetes presents as fatigue", "6.5% or more diagnoses diabetes; 5.7-6.4% is prediabetes and triggers lifestyle work"],
        ["TSH", "Hypothyroidism affects about 1 in 10 Indian adults", "Raised TSH: repeat with free T4; overt disease means levothyroxine 1.6 microgram/kg/day"],
        ["Serum creatinine and ALT", "Silent CKD and liver disease", "Abnormal: stage the disease, review drugs, look for alcohol and hepatitis B and C"],
        ["Urine routine", "Cheap, finds glycosuria, proteinuria, infection", "Proteinuria: urine ACR and blood pressure review"],
        ["Chest radiograph plus sputum Xpert (if indicated)", "Tuberculosis in anyone with cough 2 weeks or more, fever or weight loss", "Positive Xpert: notify and start NTEP regimen"],
      ],
    },
    {
      heading: "Fatigue by duration: what it usually means",
      columns: ["Duration", "Label", "Most likely causes", "Approach"],
      rows: [
        ["Under 1 month", "Recent fatigue", "Acute infection, dengue or viral convalescence, drugs, acute stress, sleep loss", "History, minimal tests, review in 2-4 weeks"],
        ["1-6 months", "Prolonged fatigue", "Anaemia, thyroid disease, diabetes, TB, depression, sleep apnoea", "Full first-line panel plus targeted add-ons"],
        ["Over 6 months", "Chronic fatigue", "Mood disorder, chronic fatigue syndrome, deconditioning, chronic disease already known", "Do not re-test blindly; treat mood, sleep and activity; review the diagnosis, not the panel"],
      ],
    },
  ],
  redFlags: [
    "Fatigue with unintentional weight loss of more than 5% of body weight in 6 months - investigate for malignancy, tuberculosis, HIV, diabetes and thyrotoxicosis the same week.",
    "Fatigue with fever for more than one week, drenching night sweats or palpable lymphadenopathy - tuberculosis, lymphoma or HIV; do not treat with a tonic and review.",
    "Fatigue with new breathlessness on minimal exertion, orthopnoea or ankle oedema - heart failure or severe anaemia; examine, do an ECG and refer.",
    "Fatigue with bleeding, bruising or recurrent infection, or a haemoglobin below 7 g/dL - bone marrow disease or profound anaemia; refer the same day.",
    "Demonstrable focal or progressive weakness, bulbar symptoms, or weakness that worsens through the day - neurological disease, not fatigue; urgent referral.",
    "Fatigue with confusion, drowsiness or a fall in an older adult - think hyponatraemia, hypercalcaemia, sepsis, hypoglycaemia or drug toxicity; check bloods today.",
    "Fatigue with expressed hopelessness, worthlessness or any thought of self-harm - assess suicide risk immediately and arrange same-day mental health input.",
    "Fatigue in an older man or a postmenopausal woman with iron deficiency anaemia - assume gastrointestinal blood loss and refer for endoscopy.",
  ],
  pearls: [
    "A third physical, a third psychological, a third unexplained - say this to yourself before ordering the panel, and it will stop you ordering the second panel.",
    "Fatigue that is worst in the morning and improves with company and activity is depression; fatigue that is worst after activity and forces rest is organic or post-viral.",
    "In a menstruating Indian woman, iron deficiency is the default hypothesis and ferritin is worth more than a haemoglobin alone.",
    "Iron deficiency anaemia in a man or a postmenopausal woman is a gastrointestinal lesion until an endoscopy says otherwise.",
    "A low vitamin D or B12 result is so common in India that it explains a symptom only when correcting it makes the symptom go away - replace it, then reassess.",
    "Never diagnose chronic fatigue syndrome before six months, and never diagnose it without excluding anaemia, thyroid disease, diabetes, tuberculosis and depression.",
    "The single most useful question in the fatigue consultation is: what do you think is causing this, and what were you hoping we would do about it?",
    "Book the review before the patient asks for it - a named return date is the safety net that converts uncertainty into a safe plan.",
  ],
  theory: [
    {
      id: "symptom-approach-fatigue-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 34-year-old woman attends your clinic complaining of tiredness for four months. Describe your approach to the evaluation and management of this undifferentiated complaint in family practice.",
      openingLines: [
        "Fatigue is a subjective sense of exhaustion disproportionate to exertion and not relieved by rest; it accounts for 5-10% of primary care consultations and has a physical cause in about a third, a psychological cause in a third, and no definable cause in the remaining third.",
        "In family practice the aim is not to exclude every disease but to identify the treatable common causes, detect red flags, address the patient's own concern, and set a defined review - investigation is targeted, not exhaustive.",
      ],
      answer: [
        {
          heading: "1. Clarify the symptom",
          points: [
            "Distinguish fatigue from true muscle weakness (loss of power that localises) and from excessive daytime sleepiness (dozing off, quantified by the Epworth scale) - the three have different differentials.",
            "Define onset, duration, diurnal pattern, relation to exertion, and objective functional loss such as flights of stairs, household work completed and days of work missed.",
            "Duration matters: under one month is usually post-infective or situational, one to six months is the window in which organic disease is found, and beyond six months the yield of further testing is very low.",
          ],
        },
        {
          heading: "2. Focused history",
          points: [
            "Anaemia: menstrual loss with pad count and clots, diet, pica, piles, black stools, hookworm exposure.",
            "Endocrine: cold intolerance, weight change, constipation, hoarseness, polyuria, polydipsia.",
            "Infection: fever, night sweats, cough for two weeks or more, contact with tuberculosis, HIV risk factors.",
            "Sleep: total sleep hours, snoring, witnessed apnoea, unrefreshing sleep, shift work.",
            "Mood: PHQ-2 followed by PHQ-9 and GAD-7 if positive; ask about sleep, appetite, interest, hopelessness and self-harm.",
            "Drugs and substances: beta-blockers, antihistamines, antiepileptics, opioids, metformin, proton pump inhibitors, alcohol, cannabis, and over-the-counter tonics.",
            "Psychosocial: work, finances, caregiving load, bereavement, migration, domestic violence; elicit ideas, concerns and expectations.",
          ],
        },
        {
          heading: "3. Examination",
          points: [
            "Weight and BMI compared with any earlier recorded weight, pulse, blood pressure sitting and standing, temperature.",
            "Pallor, jaundice, oedema, lymphadenopathy, thyroid, oral candidiasis and skin changes.",
            "Cardiorespiratory examination, abdominal palpation for organomegaly and masses, and a screening neurological examination of power and reflexes.",
            "A completely normal examination in a patient of stable weight makes serious organic disease unlikely and forms part of the reassurance offered.",
          ],
        },
        {
          heading: "4. Investigations",
          points: [
            "First line, ordered together: complete blood count with peripheral smear, HbA1c or fasting glucose, TSH, serum creatinine, ALT, urine routine, and serum ferritin in a menstruating woman.",
            "On clinical grounds only: ESR or CRP, chest radiograph with sputum Xpert MTB/RIF, HIV test with consent, serum calcium and vitamin D, vitamin B12 in strict vegetarians and metformin users, and pregnancy test where relevant.",
            "Avoid routine autoantibody panels, tumour markers and imaging without a clinical question - they produce false positives and iatrogenic anxiety.",
          ],
        },
        {
          heading: "5. Management",
          points: [
            "Treat what is found: oral iron 60 mg elemental daily with vitamin C for iron deficiency, levothyroxine 1.6 microgram/kg/day for overt hypothyroidism, NTEP regimen for tuberculosis, CPAP referral for sleep apnoea.",
            "Where no disease is found, explain the mechanism, validate the symptom, correct sleep, prescribe graded activity increasing by about 10% a week, and treat mood with behavioural activation and an SSRI such as escitalopram 10 mg once daily if PHQ-9 is 10 or more.",
            "Safety net explicitly: return earlier for weight loss, fever beyond a week, cough beyond two weeks, bleeding, or inability to work; give a written review date at 4-6 weeks.",
            "Document the working diagnosis and the plan so that the next clinician does not restart the whole work-up.",
          ],
        },
      ],
      mustDraw: [
        "A three-column table separating fatigue, true weakness and sleepiness by patient words, examination finding and first test.",
        "A flow chart: symptom clarification - red flag screen - focused history - first-line panel - treat or explain - review at 4-6 weeks.",
      ],
      markSplit: [
        { part: "Definition, epidemiology and the one-third rule", marks: 2 },
        { part: "Focused history including mood, sleep, drugs and psychosocial", marks: 2 },
        { part: "Examination and red flags", marks: 2 },
        { part: "Rational first-line and targeted investigations", marks: 2 },
        { part: "Management, safety netting and review", marks: 2 },
      ],
      keywords: ["fatigue", "TATT", "PHQ-9", "ferritin", "safety netting", "graded activity"],
    },
    {
      id: "symptom-approach-fatigue-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on safety netting in the consultation for an undifferentiated symptom.",
      openingLines: [
        "Safety netting is the explicit communication of what to expect, what would be abnormal, when and where to seek help, and by when the problem should have settled - given to a patient in whom the diagnosis remains uncertain.",
        "It is the technique that makes diagnostic uncertainty safe, and it is what allows a family physician to use time as a diagnostic tool instead of over-investigating.",
      ],
      answer: [
        {
          heading: "Components (the four questions a safety net answers)",
          points: [
            "What I think is happening, in one sentence the patient can repeat.",
            "What you should expect, and by when it should improve - a specific timeframe, not soon.",
            "What would worry me - a short, concrete list of symptoms, no more than three or four.",
            "Exactly what to do and where to go if those occur, including after clinic hours and on a holiday.",
          ],
        },
        {
          heading: "How to deliver it",
          points: [
            "Use specific, concrete language: cough that brings blood, weight loss without trying, fever beyond three days, a swelling that grows - not if you feel worse.",
            "Write it down on the prescription slip or a card; verbal-only advice is recalled by fewer than half of patients.",
            "Check understanding by asking the patient to repeat the plan back (teach-back), and involve an accompanying family member who can act on it.",
            "Record the safety net verbatim in the case notes - it is both a clinical and a medicolegal act.",
            "Give a definite review appointment rather than come back if needed, and record the interval.",
          ],
        },
        {
          heading: "Types and their use",
          points: [
            "Specific safety netting - when a defined diagnosis is suspected and one complication must be caught, for example a child with fever warned about a non-blanching rash.",
            "General safety netting - when the diagnosis is uncertain and the patient is told which broad changes matter.",
            "Watchful waiting or the deferred prescription - a planned interval of observation with a named review date, used in acute cough, viral fever, and self-limiting musculoskeletal pain, which reduces antibiotic use without increasing harm.",
          ],
        },
        {
          heading: "Why it matters",
          points: [
            "Most serious illness in general practice presents early and undifferentiated; safety netting is the mechanism by which a late presentation is caught early.",
            "It converts a normal test result into a plan rather than a full stop, and it protects both patient and doctor when the picture evolves.",
          ],
        },
      ],
      mustDraw: [
        "A four-box diagram: what I think - what to expect and when - what would worry me - what to do and where to go.",
      ],
      markSplit: [
        { part: "Definition and purpose", marks: 1 },
        { part: "The four components", marks: 2 },
        { part: "Delivery, documentation and teach-back", marks: 1 },
        { part: "Types including watchful waiting and deferred prescription", marks: 1 },
      ],
      keywords: ["safety netting", "watchful waiting", "deferred prescription", "teach-back", "diagnostic uncertainty"],
    },
    {
      id: "symptom-approach-fatigue-t3",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Differentiate between fatigue and true muscle weakness, and outline the evaluation of a patient presenting with proximal muscle weakness.",
      openingLines: [
        "Fatigue is a subjective sense of exhaustion with normal power on examination; true weakness is an objective loss of power that localises anatomically and is demonstrable at the bedside.",
        "The distinction is made at the bedside in two minutes and it completely changes the differential diagnosis and the investigations ordered.",
      ],
      answer: [
        {
          heading: "Points of difference",
          points: [
            "Complaint: fatigue is described as no energy or thakan; weakness is described as an inability to perform a specific act such as climbing stairs or lifting an arm.",
            "Examination: power is normal in fatigue and reduced in weakness; reflexes, tone, wasting and fasciculation are normal in fatigue.",
            "Distribution: fatigue is generalised and non-anatomical; weakness follows a pattern - proximal, distal, hemiparetic, paraparetic or bulbar.",
            "Course: fatigue fluctuates with mood, sleep and stress; weakness progresses or fluctuates in a disease-specific way, such as fatigability in myasthenia gravis.",
            "Investigations: fatigue needs CBC, glucose, TSH and a mood screen; weakness needs potassium, creatine phosphokinase, calcium, vitamin D, TSH and often nerve conduction studies or electromyography.",
          ],
        },
        {
          heading: "Evaluation of proximal muscle weakness",
          points: [
            "Confirm objectively: ask the patient to rise from a squat or a chair without using the hands, and to comb the hair or lift a vessel onto a shelf; test hip flexion and shoulder abduction against resistance and look for Gower sign in a child.",
            "Ask for pain (myositis), rash (dermatomyositis - heliotrope rash, Gottron papules), drugs (statins, steroids, colchicine, zidovudine), alcohol, and the diurnal pattern (myasthenia).",
            "Look for hypothyroidism and thyrotoxicosis, Cushing syndrome, osteomalacia with bone tenderness and a waddling gait, and vitamin D deficiency, which is a common and reversible cause in India.",
            "Investigations: serum potassium, creatine phosphokinase, calcium, phosphate, alkaline phosphatase, 25-hydroxy vitamin D, TSH, creatinine, ESR, and blood sugar; add EMG, nerve conduction and muscle biopsy in referral practice when the cause is not evident.",
            "Refer urgently if there is bulbar or respiratory involvement, rapidly progressive weakness, or a suspicion of inflammatory myositis.",
          ],
        },
      ],
      mustDraw: ["A two-column table contrasting fatigue and true weakness across complaint, examination, distribution, course and first tests."],
      markSplit: [
        { part: "Definitions", marks: 1 },
        { part: "Tabulated differences", marks: 2 },
        { part: "Bedside confirmation and causes of proximal weakness", marks: 1 },
        { part: "Investigations and referral criteria", marks: 1 },
      ],
      keywords: ["proximal weakness", "Gower sign", "creatine phosphokinase", "osteomalacia", "myasthenia gravis"],
    },
  ],
  mcqs: [
    {
      id: "symptom-approach-fatigue-q1",
      stem: "A 32-year-old teacher reports three months of tiredness. She has heavy periods, no weight loss and no fever. Examination shows conjunctival pallor and a normal cardiorespiratory and abdominal examination. Which single set of first-line investigations is most appropriate?",
      options: [
        "Complete blood count, serum ferritin, HbA1c, TSH, creatinine, ALT and urine routine",
        "Complete blood count and an empirical course of haematinics with review in three months",
        "Complete blood count, ANA, rheumatoid factor, ESR, vitamin D and vitamin B12",
        "Ultrasound abdomen and pelvis with tumour markers CA-125 and CEA",
        "Repeat haemoglobin after one month before ordering anything else",
      ],
      answer: 0,
      explanation:
        "A focused, simultaneously ordered first-line panel covers the treatable common causes of fatigue - anaemia and iron deficiency, diabetes, thyroid disease, renal and liver disease - and her menorrhagia with pallor makes ferritin essential. Treating empirically without a baseline loses the chance to identify iron deficiency and its cause. An autoimmune and vitamin panel has a very low pretest probability here and generates false positives that prolong the consultation. Tumour markers have no role in screening an undifferentiated symptom and CA-125 is raised in many benign conditions. Deferring all testing for a month is unjustified when she already has a sign (pallor) and a plausible mechanism (menstrual blood loss).",
      difficulty: "easy",
    },
    {
      id: "symptom-approach-fatigue-q2",
      stem: "A 45-year-old man complains of tiredness for six weeks. He sleeps 8 hours but wakes unrefreshed with a morning headache, his wife reports loud snoring and pauses in breathing, BMI is 32 kg/m2 and neck circumference 43 cm. His blood pressure is 148/92 mmHg. What is the most appropriate next step?",
      options: [
        "Start levothyroxine empirically pending TSH",
        "Calculate a STOP-BANG score and refer for a sleep study",
        "Prescribe zolpidem 5 mg at night for one month",
        "Order a chest radiograph and sputum for Xpert MTB/RIF",
        "Start escitalopram 10 mg once daily for probable depression",
      ],
      answer: 1,
      explanation:
        "Snoring, witnessed apnoea, unrefreshing sleep, morning headache, obesity, a large neck and hypertension form the classical obstructive sleep apnoea picture, and the correct step is to score him formally and confirm with polysomnography, because untreated OSA drives the hypertension and the fatigue. Empirical levothyroxine without a TSH is never appropriate and would not address the mechanism here. A hypnotic worsens upper airway collapse and is contraindicated in suspected OSA. There is no cough, fever or weight loss to justify a tuberculosis work-up. Antidepressants are premature when a specific, treatable and highly probable physical cause is staring out of the history.",
      difficulty: "moderate",
    },
    {
      id: "symptom-approach-fatigue-q3",
      stem: "A 28-year-old man has felt tired for five months. He has lost interest in cricket and in meeting friends, wakes at 4 am unable to sleep again, feels worst in the mornings, and has lost 2 kg. Complete blood count, HbA1c, TSH, creatinine and urine routine are all normal. What is the most appropriate next action?",
      options: [
        "Order ANA, ESR and viral serology to look for an occult inflammatory illness",
        "Administer the PHQ-9 and GAD-7 and manage depression if the score supports it",
        "Reassure him that all tests are normal and review in six months",
        "Start a multivitamin with B-complex and reassess in eight weeks",
        "Refer for a CT of the chest and abdomen to exclude occult malignancy",
      ],
      answer: 1,
      explanation:
        "Anhedonia, early morning waking, diurnal variation with morning worsening, and a normal basic panel together point strongly to a depressive disorder, and the next step is to quantify it with a validated instrument and treat. Autoimmune and viral serology has a very low pretest probability with a normal examination and normal first-line panel. Bare reassurance with a distant review misses a treatable and potentially dangerous diagnosis and ignores the need for suicide risk assessment. A vitamin preparation is a placebo that delays effective treatment. Cross-sectional imaging for 2 kg of weight loss in a young man with a clear psychiatric syndrome is unjustified radiation and cost.",
      difficulty: "easy",
    },
    {
      id: "symptom-approach-fatigue-q4",
      stem: "A 62-year-old postmenopausal woman is found to have haemoglobin 9.2 g/dL with MCV 68 fL and serum ferritin 8 ng/mL while being investigated for fatigue. She has no menstrual bleeding, no overt blood loss and takes no NSAIDs. What is the most important next step?",
      options: [
        "Start oral iron and recheck haemoglobin in three months",
        "Order a bone marrow examination",
        "Refer for upper gastrointestinal endoscopy and colonoscopy",
        "Start parenteral iron sucrose to correct the deficit faster",
        "Test for haemoglobinopathy with high-performance liquid chromatography",
      ],
      answer: 2,
      explanation:
        "Iron deficiency anaemia in a postmenopausal woman or in any adult man must be assumed to be gastrointestinal blood loss - most importantly colorectal or gastric carcinoma - and bidirectional endoscopy is mandatory, with iron replacement given in parallel rather than instead. Simply starting iron and rechecking in three months is the classic error that delays a cancer diagnosis by a whole quarter. Bone marrow examination is not needed when ferritin has already established iron deficiency. Parenteral iron changes the route but not the obligation to find the source. Haemoglobinopathy screening is reasonable for microcytosis with normal or high ferritin, but the ferritin of 8 ng/mL has already given the answer.",
      difficulty: "moderate",
    },
    {
      id: "symptom-approach-fatigue-q5",
      stem: "A 24-year-old woman has had disabling fatigue for eight months. It worsens markedly for 48 hours after any exertion, her sleep is unrefreshing, and she has difficulty concentrating. Examination is normal and a full first-line panel, ESR, HIV test and chest radiograph are all normal. Which management plan is most appropriate?",
      options: [
        "A structured, fixed graded exercise programme with weekly increments regardless of symptoms",
        "Activity pacing within an energy envelope, sleep management and treatment of any comorbid mood disorder",
        "A three-month course of prednisolone 10 mg daily",
        "Repeat the full biochemical panel every four weeks until an abnormality appears",
        "Long-term modafinil 100 mg daily to maintain wakefulness",
      ],
      answer: 1,
      explanation:
        "Disabling fatigue beyond six months with post-exertional malaise, unrefreshing sleep and cognitive difficulty, after exclusion of alternatives, is chronic fatigue syndrome or myalgic encephalomyelitis, and current NICE 2021 guidance recommends energy management with pacing, sleep work and treatment of comorbid mood rather than a rigid incremental exercise prescription. A fixed graded exercise programme that ignores post-exertional malaise can worsen this specific condition. Corticosteroids have no evidence base and cause real harm. Serial repetition of normal tests has near-zero yield and reinforces illness behaviour. Modafinil is unlicensed for this indication and treats sleepiness, which is not the same symptom.",
      difficulty: "hard",
    },
    {
      id: "symptom-approach-fatigue-q6",
      stem: "A 38-year-old man on metformin 1 g twice daily for six years, and a strict lacto-vegetarian, complains of tiredness with tingling in both feet. Haemoglobin is 11.8 g/dL with MCV 106 fL, TSH and creatinine are normal. Which single investigation is most likely to explain his symptoms?",
      options: [
        "Serum vitamin B12",
        "Serum 25-hydroxy vitamin D",
        "Nerve conduction study of both lower limbs",
        "Anti-tissue transglutaminase antibody",
        "Serum creatine phosphokinase",
      ],
      answer: 0,
      explanation:
        "Long-term metformin causes malabsorption of vitamin B12, a strict vegetarian diet supplies almost none, and macrocytosis with a peripheral sensory disturbance is the textbook combination, so serum B12 is the single test that ties the whole picture together. Vitamin D deficiency causes proximal weakness and bone pain, not macrocytosis or tingling. A nerve conduction study would document the neuropathy but not give its cause, and it is an expensive second step. Coeliac serology is worth considering in malabsorption with diarrhoea and weight loss, which he does not have. Creatine phosphokinase is a test for myopathy, and he has a sensory rather than a motor complaint.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "symptom-approach-fatigue-c1",
      front: "The one-third rule in fatigue.",
      back: "About a third of patients have a physical cause, a third a psychological cause, and a third no definable cause; expect it and it will stop you over-investigating.",
    },
    {
      id: "symptom-approach-fatigue-c2",
      front: "First-line panel for fatigue in Indian family practice.",
      back: "CBC with smear, HbA1c or fasting glucose, TSH, creatinine, ALT, urine routine; add ferritin in menstruating women and B12 in strict vegetarians or metformin users.",
    },
    {
      id: "symptom-approach-fatigue-c3",
      front: "How do you tell fatigue from true weakness at the bedside?",
      back: "Power. Fatigue has normal power and no anatomical pattern; weakness has demonstrable loss of power that localises - ask the patient to rise from a squat.",
    },
    {
      id: "symptom-approach-fatigue-c4",
      front: "NFHS-5 anaemia prevalence figures worth quoting.",
      back: "57% of women aged 15-49, 25% of men aged 15-49, and 67% of children aged 6-59 months (NFHS-5, 2019-21).",
    },
    {
      id: "symptom-approach-fatigue-c5",
      front: "Iron deficiency anaemia in a man or a postmenopausal woman: what must you do?",
      back: "Assume gastrointestinal blood loss and refer for bidirectional endoscopy; give iron in parallel, never instead.",
    },
    {
      id: "symptom-approach-fatigue-c6",
      front: "PHQ-2 questions.",
      back: "Over the last two weeks, how often have you been bothered by (1) little interest or pleasure in doing things and (2) feeling down, depressed or hopeless? A positive screen leads to PHQ-9.",
    },
    {
      id: "symptom-approach-fatigue-c7",
      front: "Four components of a safety net.",
      back: "What I think is happening; what to expect and by when; what would worry me; exactly what to do and where to go - written down and read back.",
    },
    {
      id: "symptom-approach-fatigue-c8",
      front: "Diagnostic criteria for chronic fatigue syndrome / ME.",
      back: "Disabling fatigue for 6 months or more with post-exertional malaise, unrefreshing sleep and cognitive difficulty, after exclusion of alternative causes.",
    },
    {
      id: "symptom-approach-fatigue-c9",
      front: "Drugs that commonly cause fatigue.",
      back: "Beta-blockers, sedating antihistamines, antiepileptics, antipsychotics, opioids, statins (myalgia), metformin and PPIs (B12 depletion), alcohol and cannabis.",
    },
    {
      id: "symptom-approach-fatigue-c10",
      front: "Which fatigue patients get a chest radiograph and sputum Xpert MTB/RIF?",
      back: "Anyone with cough for two weeks or more, evening fever, night sweats, haemoptysis, weight loss or a tuberculosis contact - free under NTEP.",
    },
    {
      id: "symptom-approach-fatigue-c11",
      front: "What is watchful waiting, properly done?",
      back: "A planned interval of observation with a named review date, a named person to return to, and an explicit list of what would change the plan - documented in the notes.",
    },
    {
      id: "symptom-approach-fatigue-c12",
      front: "Fatigue worse in the morning versus fatigue worse after exertion.",
      back: "Morning-worst, improving with activity and company, suggests depression; exertion-worst, forcing rest, suggests an organic or post-viral cause.",
    },
  ],
  references: [
    "Murtagh's General Practice, 8th edition, 2018 - the tired patient",
    "NICE Guideline NG206: Myalgic encephalomyelitis (chronic fatigue syndrome) diagnosis and management, 2021",
    "National Family Health Survey (NFHS-5) India Report, 2019-21 - anaemia and nutrition indicators",
    "ICMR-INDIAB Phase 2 national diabetes and prediabetes estimates, Lancet Diabetes and Endocrinology, 2023",
    "National Mental Health Survey of India 2015-16, NIMHANS Publication No. 129",
    "National Tuberculosis Elimination Programme, Training Modules for Medical Officers, Central TB Division, 2022",
  ],
});

topics.push({
  id: "symptom-approach-body-ache",
  title: "Generalised body ache and the somatisation consultation",
  oneLiner:
    "Generalised body ache (badan dard, sharir dard) is one of the commonest presenting complaints in Indian general practice and is usually a benign combination of overuse, vitamin D deficiency, poor sleep and psychological distress, but the family physician must separate it from inflammatory disease, myopathy, hypothyroidism, malignancy and acute infection before settling into explanation, analgesia and a structured follow-up.",
  frequency: "core",
  keywords: [
    "badan dard",
    "sharir dard",
    "myalgia",
    "generalised pain",
    "fibromyalgia",
    "widespread pain index",
    "vitamin D deficiency",
    "osteomalacia",
    "polymyalgia rheumatica",
    "somatisation",
    "medically unexplained symptoms",
    "bodily distress disorder",
    "inflammatory back pain",
    "hypothyroidism",
    "statin myalgia",
    "chikungunya",
    "dengue",
    "PHQ-15",
  ],
  sections: [
    {
      heading: "The complaint and what lies behind it",
      points: [
        "**Generalised body ache is a symptom, not a diagnosis**, and in Indian clinics it is often the opening line for a consultation whose real content is exhaustion, sleeplessness, worry or distress that the patient has no other vocabulary for.",
        "The single most useful first move is to **map the pain**: ask the patient to point to where it hurts on their own body, and record whether it is truly generalised, regional (neck and shoulders, low back), or migratory and joint-centred.",
        "**Acute generalised myalgia lasting days** is almost always infective in India - dengue, chikungunya, influenza, COVID-19, scrub typhus, leptospirosis and enteric fever all begin this way, and severe myalgia with fever in the monsoon months is dengue until proved otherwise.",
        "**Subacute or chronic ache over weeks to months** shifts the differential to vitamin D deficiency and osteomalacia, hypothyroidism, drugs (statins, fluoroquinolones, aromatase inhibitors), anaemia, diabetes, chronic kidney disease, depression and fibromyalgia.",
        "**Inflammatory disease announces itself with a pattern:** early morning stiffness lasting more than 30-60 minutes, symmetrical small-joint swelling, improvement with activity and worsening with rest. Mechanical and distress-related pain does the opposite - worse with activity, better with rest, stiffness under 30 minutes.",
        "**Occupational and postural load is a real cause and is easily missed:** the tailor, the mason, the cook squatting for hours, the tea-estate worker, the software engineer at a badly set desk, and the woman carrying water and grandchildren all have anatomically explicable pain that responds to changing the task.",
      ],
    },
    {
      heading: "History: the questions that separate the groups",
      points: [
        "**Site, pattern and timing:** is it muscle (aching, tender belly of the muscle), joint (swelling, stiffness, pain on movement of the joint), or bone (deep, localised, night pain, tenderness on pressing the bone)? Bone pain that wakes the patient at night is the one that must not be dismissed.",
        "**Screen for inflammatory features:** morning stiffness longer than an hour, joint swelling that others have noticed, rash, oral ulcers, photosensitivity, dry eyes and mouth, Raynaud phenomenon, alopecia, and a family history of rheumatic disease.",
        "**Screen for infection and malignancy:** fever, night sweats, weight loss, lump, cough, and in an older patient any new pain that is unremitting, progressive and unrelated to posture.",
        "**Screen for drugs:** statins, fibrates, fluoroquinolones, isoniazid and other antitubercular drugs, antiretrovirals, aromatase inhibitors, steroids and their withdrawal, and long-term proton pump inhibitors.",
        "**Screen for distress with the same seriousness as for disease:** sleep quality, mood (PHQ-9), anxiety (GAD-7), somatic symptom load (PHQ-15), work and family stress, alcohol, and the number of different doctors already consulted for the same complaint.",
        "**Ask what the patient believes is happening.** Common beliefs in Indian practice - gas, weakness of nerves, calcium ki kami, garmi, uric acid - are worth eliciting because the explanation you give must engage with the belief the patient already holds, or it will not be accepted.",
      ],
    },
    {
      heading: "Examination and how far to investigate",
      points: [
        "Examine for **anaemia, thyroid, lymph nodes, muscle bulk and proximal power** (rising from a squat), joint swelling and tenderness, spinal movement, and specific tender points if fibromyalgia is being considered.",
        "**Tenderness on pressing the sternum, ribs, tibia or pelvis suggests bone rather than muscle disease** - osteomalacia, myeloma or metastasis - and changes the investigation completely.",
        "**Baseline panel when the ache has lasted more than 4-6 weeks:** complete blood count, ESR or CRP, random glucose or HbA1c, TSH, creatinine, calcium, phosphate, alkaline phosphatase, and 25-hydroxy vitamin D.",
        "**Second line, only when clinically indicated:** creatine phosphokinase (myopathy or statin use), serum uric acid (only for episodic monoarthritis, not for generalised ache), rheumatoid factor and anti-CCP (persistent symmetrical small-joint synovitis), ANA (multisystem features), serum protein electrophoresis in an older patient with bone pain and a high ESR.",
        "**Do not order ANA, rheumatoid factor or uric acid as a screening reflex.** ANA is positive at low titre in 5-15% of healthy people and a false positive converts a treatable distress syndrome into a lifelong illness identity; hyperuricaemia is present in a fifth of adults and rarely causes generalised ache.",
        "**A normal ESR or CRP with a normal examination is powerful reassurance** in generalised aching and should be used explicitly in the explanation you give the patient.",
      ],
    },
    {
      heading: "Vitamin D deficiency, osteomalacia and the calcium question",
      points: [
        "**Vitamin D deficiency is genuinely common in India** - 70-90% of urban adults by 25-hydroxy vitamin D below 20 ng/mL - because of skin pigmentation, limited sun exposure, covering clothing, air pollution and low dietary intake, and it is the commonest correctable biochemical finding in the body-ache clinic.",
        "**Deficiency below 20 ng/mL, insufficiency 20-29 ng/mL, sufficiency 30 ng/mL or more.** Symptomatic osteomalacia usually needs levels well below 10 ng/mL with a raised alkaline phosphatase, low or low-normal calcium and phosphate, and a raised parathyroid hormone.",
        "**Treatment (ICMR / Endocrine Society practice in India):** cholecalciferol 60,000 IU orally once weekly for 8 weeks, then 60,000 IU once monthly, with calcium 500-1000 mg elemental daily; recheck the level only after 3 months and only if the symptoms have not settled.",
        "**The clinical picture of osteomalacia** is proximal muscle weakness with a waddling gait, bone tenderness over the sternum and tibia, difficulty rising from a squat, and sometimes pseudofractures (Looser zones) on radiographs of the pelvis and femoral neck.",
        "**Do not attribute every ache to vitamin D.** Because the deficiency is near-universal, its presence proves nothing on its own; the test of causation is whether adequate replacement over 8-12 weeks relieves the symptom.",
        "Warn against **the injectable megadose culture** - repeated 6,00,000 IU intramuscular shots given by informal providers cause hypercalcaemia, nephrocalcinosis and renal impairment, and are not needed when oral therapy works.",
      ],
    },
    {
      heading: "Fibromyalgia and chronic widespread pain",
      points: [
        "**Fibromyalgia is chronic widespread pain of at least three months** with fatigue, unrefreshing sleep and cognitive symptoms, in the absence of another disease that fully explains it; the 2016 ACR criteria use a Widespread Pain Index and a Symptom Severity Scale rather than tender-point counting.",
        "It is a disorder of **central pain processing (central sensitisation)** - the pain is real, the nociception is amplified, and telling the patient the pain is in the mind is both wrong and destructive.",
        "It commonly coexists with irritable bowel syndrome, tension headache, temporomandibular pain, restless legs, depression and anxiety - ask about them, because treating the cluster works better than treating one part.",
        "**Management is multimodal and mainly non-pharmacological:** graded aerobic exercise (the single best-evidenced intervention), sleep restoration, patient education, and cognitive behavioural therapy where available.",
        "**Drugs with evidence:** amitriptyline 10-25 mg PO at night (start 10 mg, titrate slowly), duloxetine 30-60 mg PO once daily, or pregabalin 75-150 mg PO at night. **NSAIDs and opioids do not work in fibromyalgia** and long-term opioids cause harm.",
        "Set the expectation early: the goal is **improved function and sleep, not zero pain**, and a written functional goal (walk 20 minutes, return to work half-days) is more useful than a pain score.",
      ],
    },
    {
      heading: "The somatisation consultation: how to handle it well",
      points: [
        "**Somatic symptom disorder (DSM-5) / bodily distress disorder (ICD-11)** is diagnosed on the presence of distressing bodily symptoms with disproportionate thoughts, feelings and behaviours about them - it is a positive diagnosis, not a diagnosis of exclusion, and it does not require the symptoms to be medically unexplained.",
        "**Do not order a test to reassure.** Reassurance from a normal test lasts days at best and the next abnormal-looking incidental finding restarts the cycle; explain first, test only when there is a clinical question.",
        "**The reattribution model in three steps:** (1) feeling understood - take a full symptom history and examine the patient properly; (2) broadening the agenda - ask about sleep, mood, family and work and link the timeline; (3) making the link - offer a mechanism the patient can accept, such as muscle tension from continuous stress producing real pain, or poor sleep lowering the pain threshold.",
        "**Use a physiological explanation, not a psychological accusation:** stress raises muscle tone and lowers the pain threshold, so the pain you feel is real and is produced by a body that has been on alert for too long.",
        "**Practical structure of care:** one named doctor, regular time-based appointments rather than symptom-triggered ones, a fixed appointment length, a ban on new investigations without a new sign, treatment of comorbid depression and anxiety, and a functional goal reviewed at every visit.",
        "**Avoid the two failures:** the endless work-up that medicalises the patient, and the abrupt dismissal that sends them to the next practitioner and to informal providers who will give steroids and injectable analgesics.",
      ],
    },
  ],
  tables: [
    {
      heading: "Inflammatory versus mechanical versus distress-related pain",
      columns: ["Feature", "Inflammatory", "Mechanical / overuse", "Distress-related / fibromyalgia"],
      rows: [
        ["Morning stiffness", "More than 30-60 minutes", "Under 30 minutes", "Variable, often all day"],
        ["Effect of activity", "Improves", "Worsens", "Worsens then improves, unpredictable"],
        ["Effect of rest", "Worsens", "Improves", "No consistent relief"],
        ["Swelling", "Present, objective", "Absent", "Absent (patient may feel swollen)"],
        ["Night pain", "Second half of the night", "Only with position", "Frequent waking, unrefreshing sleep"],
        ["ESR / CRP", "Often raised", "Normal", "Normal"],
        ["Best first action", "Rheumatology referral, ESR, RF, anti-CCP", "Ergonomics, analgesia, physiotherapy", "Explanation, sleep, graded exercise, amitriptyline"],
      ],
    },
    {
      heading: "Vitamin D status and treatment",
      columns: ["25-hydroxy vitamin D", "Status", "Action"],
      rows: [
        ["Below 10 ng/mL", "Severe deficiency, consider osteomalacia", "Cholecalciferol 60,000 IU weekly for 8 weeks plus calcium 1000 mg daily; check calcium, phosphate, ALP, PTH"],
        ["10-19 ng/mL", "Deficiency", "Cholecalciferol 60,000 IU weekly for 6-8 weeks, then 60,000 IU monthly"],
        ["20-29 ng/mL", "Insufficiency", "Cholecalciferol 60,000 IU monthly plus sunlight and dietary advice"],
        ["30 ng/mL or more", "Sufficient", "No treatment; look elsewhere for the cause of the ache"],
      ],
    },
    {
      heading: "Drugs used in chronic widespread pain",
      columns: ["Drug", "Dose", "Best for", "Watch for"],
      rows: [
        ["Amitriptyline", "10-25 mg PO at night", "Pain with poor sleep", "Dry mouth, morning grogginess, urinary retention, avoid in glaucoma and in the elderly"],
        ["Duloxetine", "30 mg PO OD for 2 weeks then 60 mg OD", "Pain with depression or diabetic neuropathy", "Nausea, insomnia, raised BP"],
        ["Pregabalin", "75 mg PO at night, up to 150 mg BD", "Pain with sleep disturbance and neuropathic quality", "Sedation, weight gain, oedema, dependence"],
        ["Paracetamol", "500-1000 mg PO up to QID", "Short-term flare relief", "Hepatotoxicity above 3 g/day in the malnourished or alcohol user"],
        ["NSAIDs", "Short course only", "Inflammatory or clearly nociceptive pain", "No benefit in fibromyalgia; gastric, renal and cardiovascular risk"],
      ],
    },
  ],
  redFlags: [
    "Body ache with fever and a haemorrhagic rash, bleeding gums, persistent vomiting, abdominal pain or postural giddiness in the dengue season - dengue warning signs, admit for fluid management.",
    "New generalised pain with bone tenderness, weight loss and a high ESR in a patient over 50 - myeloma or metastatic disease; do serum protein electrophoresis and imaging.",
    "Pain with progressive proximal weakness, difficulty swallowing or a heliotrope rash - inflammatory myositis; refer urgently and check creatine phosphokinase.",
    "Girdle pain with morning stiffness over an hour in a patient over 50 with a very high ESR, with or without headache and jaw claudication - polymyalgia rheumatica with possible giant cell arteritis; start steroids and refer the same day if there is visual loss.",
    "Back pain that is worse at night, unrelieved by rest, with fever, weight loss or a neurological deficit - spinal tuberculosis, abscess or malignancy; image urgently.",
    "Muscle pain with dark urine, especially after unaccustomed exertion, a fall with a long lie, or a new statin - rhabdomyolysis; check creatine phosphokinase and renal function today.",
    "Symmetrical small-joint swelling of hands and feet with over an hour of morning stiffness lasting more than 6 weeks - early rheumatoid arthritis; refer within the window in which DMARDs prevent erosion.",
    "Any new, persistent, progressive pain in a patient with known malignancy, HIV, immunosuppression or recent tuberculosis contact.",
  ],
  pearls: [
    "Ask the patient to point to the pain on their own body before you say a word - it converts a whole-body complaint into a map you can work with.",
    "Morning stiffness over an hour that improves with activity is inflammatory; stiffness under 30 minutes that worsens with activity is mechanical. This one line sorts most body-ache clinics.",
    "A near-universal vitamin D deficiency proves nothing by itself; causation is proved only when replacement relieves the symptom.",
    "Never order ANA, rheumatoid factor or uric acid to screen an undifferentiated body ache - the false positives do more harm than the missed diagnoses.",
    "Fibromyalgia is a positive diagnosis of amplified central pain processing, not a label for a negative work-up, and NSAIDs and opioids do not work in it.",
    "In somatisation, book appointments by the calendar, not by the symptom - time-based follow-up reduces consultation frequency and investigation.",
    "Explain in physiology the patient can accept: continuous stress raises muscle tone and lowers the pain threshold, so the pain is real even when the tests are normal.",
    "Severe myalgia with high fever in the monsoon in India is dengue until proved otherwise, and NSAIDs are contraindicated in it - use paracetamol only.",
  ],
  theory: [
    {
      id: "symptom-approach-body-ache-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 42-year-old woman presents with generalised body ache of six months' duration. Discuss the differential diagnosis and your approach to evaluation and management in a family practice setting.",
      openingLines: [
        "Generalised body ache is one of the commonest presenting complaints in Indian general practice and is a symptom rather than a diagnosis; the family physician's task is to separate inflammatory, metabolic, infective and malignant causes from the far commoner combination of overuse, vitamin D deficiency, disturbed sleep and psychological distress.",
        "The evaluation is driven by pattern recognition - the site of pain, the duration of morning stiffness, the relation to activity and rest, and the presence of red flags - rather than by a broad panel of tests.",
      ],
      answer: [
        {
          heading: "1. Differential diagnosis by group",
          points: [
            "Infective: dengue, chikungunya, influenza, COVID-19, scrub typhus, leptospirosis, enteric fever, and post-viral myalgia lasting weeks after chikungunya.",
            "Metabolic and endocrine: vitamin D deficiency and osteomalacia, hypothyroidism, hyperparathyroidism, diabetes, chronic kidney disease, hypokalaemia.",
            "Inflammatory and rheumatological: rheumatoid arthritis, spondyloarthritis, systemic lupus erythematosus, polymyalgia rheumatica, inflammatory myositis.",
            "Haematological and neoplastic: severe anaemia, multiple myeloma, bone metastases, leukaemia.",
            "Drug induced: statins, fibrates, fluoroquinolones, antitubercular drugs, aromatase inhibitors, steroid withdrawal.",
            "Functional and psychological: fibromyalgia, somatic symptom disorder, depression and anxiety, sleep deprivation.",
            "Mechanical and occupational: postural overuse in tailors, masons, cooks, drivers and desk workers.",
          ],
        },
        {
          heading: "2. History",
          points: [
            "Ask the patient to localise the pain on her own body; classify as muscle, joint or bone pain.",
            "Duration and pattern of morning stiffness, the effect of activity and rest, and night pain.",
            "Inflammatory features: joint swelling, rash, oral ulcers, photosensitivity, Raynaud phenomenon, dry eyes and mouth.",
            "Red flag screen: fever, weight loss, night sweats, lumps, bone tenderness, neurological symptoms.",
            "Drug and supplement history including informal-sector injections and steroid-containing preparations.",
            "Sleep, mood (PHQ-9), anxiety (GAD-7), somatic symptom burden (PHQ-15), work and family circumstances, and the number of previous consultations for the same complaint.",
            "Ideas, concerns and expectations - engage with the patient's own explanatory model such as gas, calcium ki kami or nerve weakness.",
          ],
        },
        {
          heading: "3. Examination",
          points: [
            "General: pallor, thyroid, lymph nodes, weight, and a comparison with earlier recorded weight.",
            "Musculoskeletal: joint swelling and tenderness, spinal movements, proximal power tested by rising from a squat, bone tenderness over the sternum, ribs, tibia and pelvis.",
            "Neurological screen and a systemic examination for organomegaly and masses.",
          ],
        },
        {
          heading: "4. Investigations",
          points: [
            "First line: complete blood count, ESR or CRP, HbA1c or random glucose, TSH, creatinine, calcium, phosphate, alkaline phosphatase, 25-hydroxy vitamin D.",
            "Targeted second line: creatine phosphokinase if there is proximal weakness or statin use; rheumatoid factor and anti-CCP only for persistent symmetrical small-joint synovitis; ANA only for multisystem features; serum protein electrophoresis and radiographs for bone pain with a high ESR in a patient over 50.",
            "Explain that a normal ESR or CRP with a normal examination is strong evidence against inflammatory disease and use it in the reassurance.",
          ],
        },
        {
          heading: "5. Management",
          points: [
            "Treat what is found: cholecalciferol 60,000 IU weekly for 8 weeks then monthly with calcium 500-1000 mg daily; levothyroxine for hypothyroidism; stop or switch the offending drug.",
            "Non-drug measures for everyone: graded aerobic activity, sleep restoration, ergonomic and task modification, weight reduction, and treatment of comorbid mood disorder.",
            "Drugs for chronic widespread pain: amitriptyline 10-25 mg at night, or duloxetine 30-60 mg daily; paracetamol for flares; avoid long-term NSAIDs and never use opioids.",
            "Use the reattribution model - feeling understood, broadening the agenda, making the link - and offer a physiological explanation rather than a psychological accusation.",
            "Structure the follow-up: one named doctor, time-based appointments, no new investigations without a new sign, and a functional goal reviewed at each visit.",
            "Safety net: return earlier for fever, weight loss, joint swelling, night bone pain, weakness or dark urine.",
          ],
        },
      ],
      mustDraw: [
        "A table contrasting inflammatory, mechanical and distress-related pain by morning stiffness, effect of activity and rest, swelling and inflammatory markers.",
        "The three steps of the reattribution model as a flow chart.",
      ],
      markSplit: [
        { part: "Differential diagnosis grouped by system", marks: 3 },
        { part: "History including the psychosocial and drug history", marks: 2 },
        { part: "Examination and red flags", marks: 1 },
        { part: "Rational investigation and what not to order", marks: 2 },
        { part: "Management including explanation and follow-up structure", marks: 2 },
      ],
      keywords: ["generalised body ache", "vitamin D deficiency", "fibromyalgia", "reattribution", "morning stiffness"],
    },
    {
      id: "symptom-approach-body-ache-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the approach to a patient with medically unexplained physical symptoms in family practice.",
      openingLines: [
        "Medically unexplained physical symptoms are bodily complaints that persist despite appropriate assessment and for which no adequate organic explanation is found; in ICD-11 the positive diagnosis is bodily distress disorder and in DSM-5 somatic symptom disorder, which requires distressing symptoms plus disproportionate thoughts, feelings and behaviours about them.",
        "They account for 15-30% of primary care consultations, cause genuine disability, and are managed by relationship and structure rather than by further investigation.",
      ],
      answer: [
        {
          heading: "Recognition",
          points: [
            "Multiple symptoms across several systems, a long duration, and frequent consultations with several doctors.",
            "Symptoms disproportionate to findings, repeated normal investigations, and reassurance that does not last.",
            "High health anxiety, a specific feared diagnosis, and often a coexisting depressive or anxiety disorder.",
            "Use PHQ-15 for somatic symptom burden alongside PHQ-9 and GAD-7.",
          ],
        },
        {
          heading: "Principles of management",
          points: [
            "Make a positive diagnosis rather than a diagnosis of exclusion, and say so to the patient.",
            "Do not investigate to reassure; investigate only when there is a new sign or a specific clinical question.",
            "Use the reattribution model: feeling understood, broadening the agenda, making the link.",
            "Offer a physiological explanation the patient can accept - autonomic arousal, muscle tension, lowered pain threshold, disturbed sleep.",
            "Set the goal as improved function rather than the abolition of symptoms.",
          ],
        },
        {
          heading: "Structuring the care",
          points: [
            "One named doctor and one set of notes; avoid parallel consultations with multiple specialists.",
            "Regular time-based appointments of fixed length rather than symptom-triggered attendance.",
            "Treat comorbid depression and anxiety with an SSRI and brief psychological therapy; amitriptyline or duloxetine where pain dominates.",
            "Involve the family, address the illness behaviour they may be reinforcing, and rehabilitate towards work.",
            "Review medication regularly and withdraw ineffective analgesics, sedatives and benzodiazepines.",
          ],
        },
        {
          heading: "Pitfalls",
          points: [
            "Never say there is nothing wrong with you - it breaks the relationship and drives the patient to the next practitioner.",
            "Remember that patients with somatic symptom disorder also develop organic disease; re-examine when the pattern changes, and never let the label stop you from looking.",
          ],
        },
      ],
      mustDraw: ["A three-step flow chart of the reattribution model with an example sentence for each step."],
      markSplit: [
        { part: "Definition and terminology", marks: 1 },
        { part: "Recognition and screening instruments", marks: 1 },
        { part: "Principles of management including reattribution", marks: 2 },
        { part: "Structuring care and pitfalls", marks: 1 },
      ],
      keywords: ["somatic symptom disorder", "bodily distress disorder", "reattribution", "PHQ-15", "health anxiety"],
    },
    {
      id: "symptom-approach-body-ache-t3",
      paper: "II",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "less-common",
      question: "Enumerate the causes of proximal muscle weakness with generalised body ache, and state the screening test for each.",
      openingLines: [
        "Proximal weakness with aching is a pattern that narrows a generalised complaint into a short, testable list, and most of its causes in India are metabolic, endocrine or drug related and therefore reversible.",
        "It is confirmed at the bedside by asking the patient to rise from a squat or a chair without using the hands, and by testing hip flexion and shoulder abduction against resistance.",
      ],
      answer: [
        {
          heading: "Metabolic and nutritional",
          points: [
            "Vitamin D deficiency and osteomalacia - serum 25-hydroxy vitamin D, calcium, phosphate, alkaline phosphatase and parathyroid hormone.",
            "Hypokalaemia including hypokalaemic periodic paralysis and renal tubular acidosis - serum potassium, arterial or venous blood gas, urine pH.",
            "Hypocalcaemia and hypomagnesaemia - serum calcium, magnesium.",
          ],
        },
        {
          heading: "Endocrine",
          points: [
            "Hypothyroidism - TSH and free T4, with a raised creatine phosphokinase.",
            "Thyrotoxic myopathy and thyrotoxic periodic paralysis - TSH, free T4, potassium.",
            "Cushing syndrome and exogenous steroid myopathy - drug history, overnight dexamethasone suppression test.",
            "Primary hyperparathyroidism - serum calcium and parathyroid hormone.",
          ],
        },
        {
          heading: "Inflammatory and infective",
          points: [
            "Polymyositis and dermatomyositis - creatine phosphokinase, ANA and myositis-specific antibodies, electromyography, muscle biopsy.",
            "Polymyalgia rheumatica in a patient over 50 - ESR and CRP, and the response to prednisolone 15 mg daily.",
            "Systemic lupus erythematosus and other connective tissue disease - ANA with specific antibodies.",
            "Viral myositis including dengue, chikungunya and influenza - clinical, with creatine phosphokinase.",
          ],
        },
        {
          heading: "Drug induced and other",
          points: [
            "Statins and fibrates - creatine phosphokinase, and a trial of withdrawal.",
            "Steroids, colchicine, zidovudine, chloroquine and hydroxychloroquine - drug history.",
            "Alcohol related myopathy - history, creatine phosphokinase, liver enzymes.",
            "Muscular dystrophies in the young - creatine phosphokinase and genetic testing.",
            "Myasthenia gravis with fatigable weakness - acetylcholine receptor antibody, repetitive nerve stimulation.",
          ],
        },
      ],
      markSplit: [
        { part: "Metabolic and nutritional", marks: 1.5 },
        { part: "Endocrine", marks: 1.5 },
        { part: "Inflammatory and infective", marks: 1 },
        { part: "Drug induced and other", marks: 1 },
      ],
      keywords: ["proximal myopathy", "osteomalacia", "hypokalaemic periodic paralysis", "polymyalgia rheumatica", "statin myopathy"],
    },
  ],
  mcqs: [
    {
      id: "symptom-approach-body-ache-q1",
      stem: "A 52-year-old woman has aching in the shoulders and hips for eight weeks with morning stiffness lasting two hours, difficulty combing her hair, and an ESR of 92 mm in the first hour. She has no headache or visual symptoms. Power is normal when she is helped past the initial stiffness. What is the most likely diagnosis?",
      options: [
        "Fibromyalgia",
        "Polymyalgia rheumatica",
        "Osteomalacia from vitamin D deficiency",
        "Polymyositis",
        "Hypothyroid myopathy",
      ],
      answer: 1,
      explanation:
        "Shoulder and hip girdle aching with prolonged morning stiffness in a patient over 50 and a markedly raised ESR, with pain rather than true weakness limiting movement, is polymyalgia rheumatica, which responds dramatically to prednisolone 15 mg daily. Fibromyalgia has a normal ESR by definition and does not produce two hours of morning stiffness confined to the girdles. Osteomalacia gives true proximal weakness with bone tenderness and a raised alkaline phosphatase, not an ESR of 92. Polymyositis produces objective, painless or mildly painful weakness with a markedly raised creatine phosphokinase, whereas here power is normal once stiffness is overcome. Hypothyroid myopathy is slower, associated with other hypothyroid features, and does not raise the ESR.",
      difficulty: "moderate",
    },
    {
      id: "symptom-approach-body-ache-q2",
      stem: "A 30-year-old man reports generalised body ache for three months. Examination is normal. Complete blood count, ESR, TSH, HbA1c, creatinine and liver enzymes are all normal. His 25-hydroxy vitamin D is 14 ng/mL. Which is the most appropriate management?",
      options: [
        "Cholecalciferol 60,000 IU orally weekly for 8 weeks, graded activity and sleep advice, review at 8-12 weeks",
        "Intramuscular cholecalciferol 6,00,000 IU as a single dose and no follow-up",
        "Order ANA, rheumatoid factor and serum uric acid to complete the work-up",
        "Prescribe diclofenac 50 mg twice daily for three months",
        "Reassure him that all reports are normal and no treatment is required",
      ],
      answer: 0,
      explanation:
        "Vitamin D deficiency at 14 ng/mL is worth correcting with the standard oral loading regimen, but because deficiency affects 70-90% of urban Indians it cannot be assumed to be the whole explanation, so the plan must also include activity, sleep work and a review that tests whether correcting the level relieves the symptom. A single 6,00,000 IU injection with no follow-up risks hypercalcaemia and abandons the patient. Autoantibody and uric acid screening in a patient with a normal examination and normal ESR generates false positives that create a lifelong illness label. Three months of diclofenac carries gastric, renal and cardiovascular risk without addressing any mechanism. Bare reassurance ignores a correctable abnormality and leaves the symptom untreated.",
      difficulty: "easy",
    },
    {
      id: "symptom-approach-body-ache-q3",
      stem: "A 38-year-old woman has had widespread pain for two years with unrefreshing sleep, fatigue and poor concentration. Examination, ESR, CRP, TSH and vitamin D are normal. She has already had two normal MRI scans of the spine. What is the best pharmacological choice alongside graded aerobic exercise?",
      options: [
        "Tramadol 50 mg three times daily",
        "Amitriptyline 10 mg at night, titrated slowly",
        "Naproxen 250 mg twice daily",
        "Prednisolone 10 mg daily",
        "Alprazolam 0.25 mg at night",
      ],
      answer: 1,
      explanation:
        "This is fibromyalgia, a disorder of central pain amplification, and low-dose amitriptyline at night is the best-evidenced first drug because it improves both pain and the unrefreshing sleep that drives it; graded aerobic exercise is the best-evidenced intervention overall. Opioids including tramadol have no benefit in fibromyalgia and cause dependence and opioid-induced hyperalgesia. NSAIDs are ineffective because the mechanism is not inflammatory. Corticosteroids have no role and cause weight gain, osteoporosis and glucose intolerance. Benzodiazepines fragment sleep architecture, cause tolerance and dependence, and do not treat pain.",
      difficulty: "moderate",
    },
    {
      id: "symptom-approach-body-ache-q4",
      stem: "A 26-year-old man returns on day 5 of a febrile illness with severe body ache. He now has repeated vomiting, abdominal pain and postural giddiness. Platelet count is 68,000/microlitre and haematocrit has risen from 42% to 51%. What is the most appropriate immediate action?",
      options: [
        "Prescribe ibuprofen 400 mg three times daily for the myalgia",
        "Admit for intravenous fluid management as dengue with warning signs",
        "Transfuse platelets to keep the count above 50,000/microlitre",
        "Start empirical ceftriaxone 2 g intravenously for enteric fever",
        "Discharge with oral fluids and review in 48 hours",
      ],
      answer: 1,
      explanation:
        "Persistent vomiting, abdominal pain, postural giddiness and a rising haematocrit with falling platelets are WHO dengue warning signs marking the critical phase of plasma leakage, and the patient needs admission with monitored isotonic crystalloid, not outpatient care. NSAIDs including ibuprofen are contraindicated in dengue because of bleeding and renal risk - paracetamol only. Platelet transfusion is not indicated by a number alone; it is reserved for significant bleeding, because plasma leakage rather than thrombocytopenia is what kills. Ceftriaxone treats a different diagnosis that this haematocrit and platelet pattern does not support. Discharge at the moment of entry into the critical phase is the classic fatal error.",
      difficulty: "moderate",
    },
    {
      id: "symptom-approach-body-ache-q5",
      stem: "A 55-year-old man on atorvastatin 40 mg daily for four months develops aching in both thighs and shoulders. He is otherwise well. Creatine phosphokinase is 380 IU/L (upper limit 190 IU/L), creatinine and TSH are normal, and he has no dark urine or weakness. What is the most appropriate management?",
      options: [
        "Stop the statin permanently and never rechallenge",
        "Continue the same statin unchanged and reassure him",
        "Stop the statin, allow symptoms to settle, then rechallenge with a lower dose or rosuvastatin on alternate days",
        "Add coenzyme Q10 100 mg daily and continue atorvastatin 40 mg",
        "Admit for intravenous hydration and urinary alkalinisation",
      ],
      answer: 2,
      explanation:
        "Statin-associated muscle symptoms with a creatine phosphokinase under about five times the upper limit and no weakness or myoglobinuria are managed by temporary withdrawal, allowing symptoms to resolve, and then rechallenge with a lower dose or a different statin, because most patients tolerate a modified regimen and the cardiovascular benefit is too valuable to abandon. Permanent abandonment of statins after mild myalgia denies proven mortality benefit without a trial. Continuing unchanged ignores a symptom that will drive silent non-adherence. Coenzyme Q10 has not shown consistent benefit in trials. Intravenous hydration and alkalinisation are for rhabdomyolysis, which requires a creatine phosphokinase above ten times normal with myoglobinuria and renal impairment.",
      difficulty: "moderate",
    },
    {
      id: "symptom-approach-body-ache-q6",
      stem: "A 44-year-old woman attends for the eleventh time in a year with shifting body ache, burning feet, gas and palpitations. Every investigation over the year has been normal. She is convinced something serious is being missed. What is the most appropriate management strategy?",
      options: [
        "Order a whole-body PET-CT to settle the question definitively",
        "Tell her firmly that there is nothing wrong and that she should stop attending",
        "Schedule fixed-interval appointments with one named doctor, treat comorbid anxiety and depression, and investigate only if a new sign appears",
        "Refer her simultaneously to gastroenterology, neurology, cardiology and rheumatology",
        "Prescribe a long-term benzodiazepine to reduce her health anxiety",
      ],
      answer: 2,
      explanation:
        "Time-based rather than symptom-triggered appointments with a single named doctor, active treatment of comorbid mood disorder, and a rule of no new investigation without a new sign are the interventions shown to reduce both distress and healthcare use in somatic symptom disorder. A PET-CT provides reassurance lasting days at most and will generate incidental findings that restart the cycle. Blunt dismissal ruptures the therapeutic relationship and drives the patient towards informal providers. Parallel specialist referrals fragment care and multiply investigations. Long-term benzodiazepines cause tolerance and dependence without treating the underlying disorder.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "symptom-approach-body-ache-c1",
      front: "The one line that sorts a body-ache clinic.",
      back: "Morning stiffness over an hour improving with activity is inflammatory; stiffness under 30 minutes worsening with activity is mechanical.",
    },
    {
      id: "symptom-approach-body-ache-c2",
      front: "Vitamin D thresholds and the Indian loading regimen.",
      back: "Deficiency under 20 ng/mL, insufficiency 20-29, sufficiency 30 or more. Cholecalciferol 60,000 IU weekly for 8 weeks then monthly, with calcium 500-1000 mg daily.",
    },
    {
      id: "symptom-approach-body-ache-c3",
      front: "Definition of fibromyalgia (2016 ACR).",
      back: "Chronic widespread pain for 3 months or more with fatigue, unrefreshing sleep and cognitive symptoms, scored by Widespread Pain Index and Symptom Severity Scale; tender-point counting is no longer required.",
    },
    {
      id: "symptom-approach-body-ache-c4",
      front: "Which drugs work in fibromyalgia and which do not?",
      back: "Work: amitriptyline 10-25 mg at night, duloxetine 30-60 mg daily, pregabalin. Do not work: NSAIDs and opioids.",
    },
    {
      id: "symptom-approach-body-ache-c5",
      front: "The three steps of the reattribution model.",
      back: "Feeling understood (full history and examination), broadening the agenda (sleep, mood, life events), making the link (a physiological mechanism the patient can accept).",
    },
    {
      id: "symptom-approach-body-ache-c6",
      front: "Why must you not order ANA to screen a generalised body ache?",
      back: "ANA is positive at low titre in 5-15% of healthy people; a false positive creates a permanent illness identity and endless referrals.",
    },
    {
      id: "symptom-approach-body-ache-c7",
      front: "Bone pain that wakes the patient at night in someone over 50 with a high ESR - what must be excluded?",
      back: "Multiple myeloma and bone metastasis - serum protein electrophoresis, calcium, alkaline phosphatase and imaging.",
    },
    {
      id: "symptom-approach-body-ache-c8",
      front: "Polymyalgia rheumatica: the diagnostic triad and the treatment.",
      back: "Age over 50, girdle pain with morning stiffness over 45-60 minutes, and a high ESR or CRP. Prednisolone 15 mg daily with a dramatic response within 72 hours; watch for giant cell arteritis.",
    },
    {
      id: "symptom-approach-body-ache-c9",
      front: "Statin myalgia: when do you stop and when do you rechallenge?",
      back: "CPK under about 5 times normal with no weakness - stop temporarily, let symptoms settle, rechallenge with a lower dose or alternate-day rosuvastatin. CPK over 10 times normal or myoglobinuria - stop and treat as rhabdomyolysis.",
    },
    {
      id: "symptom-approach-body-ache-c10",
      front: "Dengue warning signs that mandate admission.",
      back: "Abdominal pain or tenderness, persistent vomiting, clinical fluid accumulation, mucosal bleeding, lethargy or restlessness, liver enlargement over 2 cm, and a rising haematocrit with a falling platelet count.",
    },
    {
      id: "symptom-approach-body-ache-c11",
      front: "How should follow-up be structured in somatic symptom disorder?",
      back: "One named doctor, fixed-interval time-based appointments of fixed length, no new investigation without a new sign, treatment of comorbid depression and anxiety, and a functional goal at every visit.",
    },
    {
      id: "symptom-approach-body-ache-c12",
      front: "Bedside test for proximal muscle weakness.",
      back: "Ask the patient to rise from a squat or from a chair without using the hands, and to comb the hair or lift a vessel overhead.",
    },
  ],
  references: [
    "Murtagh's General Practice, 8th edition, 2018 - generalised body pain and the difficult patient",
    "ACR 2016 revisions to the fibromyalgia diagnostic criteria, Seminars in Arthritis and Rheumatism, 2016",
    "Indian Council of Medical Research / Endocrine Society of India consensus on vitamin D deficiency in India, 2018-2022",
    "National Guidelines for Clinical Management of Dengue Fever, NVBDCP, MoHFW, 2023",
    "ICD-11 bodily distress disorder and DSM-5 somatic symptom disorder criteria",
    "EULAR revised recommendations for the management of fibromyalgia, 2017",
  ],
});

topics.push({
  id: "symptom-approach-dizziness",
  title: "Giddiness and dizziness",
  oneLiner:
    "Giddiness is a single Indian word covering four separate symptoms - vertigo, presyncope, disequilibrium and non-specific lightheadedness - and the family physician's first job is to establish which of the four it is by asking about timing and triggers rather than about the quality of the sensation, because that alone separates benign positional vertigo and orthostatic hypotension from posterior circulation stroke.",
  frequency: "core",
  keywords: [
    "chakkar",
    "sar ghumna",
    "vertigo",
    "dizziness",
    "presyncope",
    "disequilibrium",
    "BPPV",
    "Dix-Hallpike",
    "Epley manoeuvre",
    "vestibular neuritis",
    "Meniere disease",
    "HINTS examination",
    "orthostatic hypotension",
    "posterior circulation stroke",
    "betahistine",
    "prochlorperazine",
    "TiTrATE",
    "vestibular rehabilitation",
  ],
  sections: [
    {
      heading: "Four symptoms hiding in one word",
      points: [
        "**Vertigo** is an illusion of movement - the room spinning, or the patient spinning - and it means a disturbance of the vestibular system, peripheral or central.",
        "**Presyncope** is the feeling of about to faint, with greying of vision, sweating and a need to sit down, and it means a transient fall in cerebral perfusion - postural hypotension, arrhythmia, anaemia, hypoglycaemia, dehydration, drugs.",
        "**Disequilibrium** is unsteadiness felt in the legs and only on standing or walking, with no illusion of movement, and it means a problem with the sensory or motor apparatus of balance - peripheral neuropathy, cerebellar disease, parkinsonism, poor vision, multiple deficits in the elderly.",
        "**Non-specific lightheadedness** - a floating, swimming, heavy-headed feeling, often continuous and unrelated to position - is most often anxiety, hyperventilation, depression, sleep deprivation or drugs.",
        "**Do not ask what does it feel like** - patients answer inconsistently and change their answer within minutes. **Ask instead: when did it start, how long does each episode last, what brings it on, and what else happens with it** (the TiTrATE approach: Timing, Triggers, And Targeted Examination).",
        "In India the word **chakkar** covers all four, and so does giddiness, so the classification has to be built by the doctor from the history and never taken from the patient's own label.",
      ],
    },
    {
      heading: "Timing and triggers: the diagnostic backbone",
      points: [
        "**Episodic and triggered by head position, lasting seconds to a minute:** benign paroxysmal positional vertigo. Typically on turning in bed, looking up, or bending forward, with a latency of a few seconds and fatigability on repetition.",
        "**Episodic and spontaneous, lasting minutes to hours, with hearing loss, tinnitus and aural fullness:** Meniere disease. Lasting 4-72 hours with photophobia or headache: vestibular migraine, which is far commoner than Meniere and is the most under-diagnosed cause of recurrent vertigo.",
        "**Episodic, seconds long, on standing up:** orthostatic hypotension - a fall of 20 mmHg systolic or 10 mmHg diastolic within 3 minutes of standing.",
        "**Continuous, lasting days, with nausea, vomiting and nystagmus, after a viral illness:** acute vestibular syndrome - vestibular neuritis or labyrinthitis if peripheral, posterior circulation stroke if central. This is the group in which the diagnosis must not be got wrong.",
        "**Episodic, seconds long, with palpitations or occurring on exertion, or with a family history of sudden death:** think arrhythmia and get an ECG; exertional presyncope also means aortic stenosis or hypertrophic cardiomyopathy until an echocardiogram says otherwise.",
        "**Continuous, months long, worse in crowded places or on visual motion, with anxiety:** persistent postural-perceptual dizziness, which follows an acute vestibular event and is treated with vestibular rehabilitation and an SSRI, not with more vestibular sedatives.",
      ],
    },
    {
      heading: "Examination, including HINTS",
      points: [
        "**In everyone:** pulse and rhythm, lying and standing blood pressure at 1 and 3 minutes, pallor, cardiac auscultation for murmurs, and a screening neurological examination including gait.",
        "**Dix-Hallpike manoeuvre** for posterior canal BPPV: from sitting, turn the head 45 degrees to one side and lie the patient rapidly supine with the head 20-30 degrees below the horizontal; a positive test shows upbeating torsional nystagmus after a latency of 2-20 seconds, lasting under a minute, with vertigo, and fatiguing on repetition.",
        "**Supine roll test** for horizontal canal BPPV, which is the second commonest variant and is missed if only Dix-Hallpike is performed.",
        "**HINTS examination is used only in acute continuous vertigo with nystagmus (acute vestibular syndrome), never in episodic or positional vertigo.** It has three parts: Head Impulse, Nystagmus type, Test of Skew.",
        "**HINTS that is reassuring (peripheral):** an abnormal head impulse test with a corrective saccade, unidirectional horizontal nystagmus that beats away from the affected side, and no skew deviation on cover-uncover. **Any one of - normal head impulse, direction-changing nystagmus, or skew deviation - means central and needs imaging.**",
        "**Additional central signs:** inability to walk or sit unsupported, new headache or neck pain, dysarthria, diplopia, dysphagia, facial numbness, limb ataxia, Horner syndrome, and any other cranial nerve or long tract sign. **Remember that a CT brain is normal in the first 24-48 hours of most posterior circulation infarcts** - MRI with diffusion weighting is the test, and a normal CT never excludes the diagnosis.",
      ],
    },
    {
      heading: "The peripheral causes and their treatment",
      points: [
        "**BPPV** is caused by otoconia displaced into a semicircular canal and is treated mechanically, not pharmacologically: the **Epley (canalith repositioning) manoeuvre** cures 80-90% of posterior canal BPPV in one or two sessions, and can be taught to the patient as the Brandt-Daroff exercise for home use.",
        "**Vestibular sedatives are for the first 24-72 hours only.** Prochlorperazine 5 mg PO TDS, or betahistine 8-16 mg PO TDS, or cinnarizine 25 mg PO TDS suppress symptoms but **delay central compensation if continued beyond 3 days**, and are actively harmful in BPPV, in which they simply mask a condition curable by a manoeuvre.",
        "**Vestibular neuritis:** acute continuous vertigo with nausea and vomiting for days, no hearing loss, following a viral illness, with a peripheral HINTS pattern. Treat with a short course of a vestibular sedative, early mobilisation and **vestibular rehabilitation exercises**; a tapering course of prednisolone within 3 days shortens recovery in selected patients but is not universally recommended.",
        "**Labyrinthitis** is vestibular neuritis plus hearing loss; sudden sensorineural hearing loss with vertigo is an **ENT emergency** needing high-dose steroids within 72 hours.",
        "**Meniere disease:** episodic vertigo of 20 minutes to 12 hours with fluctuating low-frequency sensorineural hearing loss, tinnitus and aural fullness. Manage with salt restriction under 2 g sodium a day, avoidance of caffeine and tobacco, betahistine 16-24 mg PO TDS, and a thiazide; refer for audiometry.",
        "**Vestibular migraine:** recurrent vertigo of 5 minutes to 72 hours in a patient with a history of migraine, often with photophobia and phonophobia and frequently without headache during the attack. Manage with trigger identification, and prophylaxis with propranolol 20-40 mg PO BD, flunarizine 10 mg PO at night or amitriptyline 10-25 mg at night.",
      ],
    },
    {
      heading: "Presyncope, disequilibrium and the older patient",
      points: [
        "**Orthostatic hypotension** is a fall of 20 mmHg systolic or 10 mmHg diastolic within 3 minutes of standing. Causes: volume depletion, drugs (alpha-blockers, diuretics, nitrates, antipsychotics, tricyclics, antiparkinsonian drugs), autonomic neuropathy in long-standing diabetes, adrenal insufficiency, anaemia, and prolonged bed rest.",
        "**Management of orthostatic hypotension:** review and reduce the culprit drug first, increase fluid and salt where not contraindicated, rise slowly in stages, use physical counter-manoeuvres and compression stockings, raise the head of the bed, and add fludrocortisone 0.1 mg PO daily or midodrine 2.5-5 mg PO TDS only if the above fail.",
        "**Dizziness in the older adult is usually multifactorial**, not one disease: reduced vision, cataract, peripheral neuropathy, cervical spondylosis, deconditioning, polypharmacy, hypotension and fear of falling combine. The correct output is a **falls assessment**, not a single diagnosis.",
        "**Do a medication review in every older patient with dizziness.** Antihypertensives, alpha-blockers for prostatism, diuretics, benzodiazepines, tricyclics, anticholinergics and antipsychotics are the usual culprits, and stopping or halving one drug is the commonest effective treatment.",
        "**Assess and act on fall risk:** Timed Up and Go test over 12 seconds, home hazard assessment (loose mats, poor lighting, wet bathroom floors, high thresholds, unlit stairs), footwear, vitamin D status, vision correction, and a strength and balance programme.",
        "**Screen for anaemia, hypoglycaemia and arrhythmia** before deciding it is benign: haemoglobin, blood glucose, and a 12-lead ECG are cheap and change the management in a meaningful minority.",
      ],
    },
    {
      heading: "Deciding who needs imaging, referral or admission",
      points: [
        "**Refer or admit the same day** any patient with acute continuous vertigo who has a central HINTS pattern, other neurological signs, inability to walk unaided, new headache or neck pain, or vascular risk factors with a first ever episode.",
        "**Neuroimaging is not indicated** in classical positional vertigo with a positive Dix-Hallpike and a normal neurological examination, nor in recurrent vertigo with a clear Meniere or vestibular migraine pattern.",
        "**A young patient with acute vertigo after neck manipulation, trauma, or with neck pain, needs vertebral artery dissection excluded** - the commonest cause of posterior circulation stroke under 45.",
        "**Investigations to consider in the clinic:** haemoglobin, blood glucose, electrolytes, ECG in everyone with presyncope; audiometry for hearing loss; and echocardiography for exertional presyncope or a murmur.",
        "**Do not label it cervical vertigo and prescribe a collar.** Cervical spondylosis is almost universal on radiographs after 50 and is rarely the cause of true vertigo; the diagnosis distracts from BPPV, hypotension and stroke.",
        "**Safety net every dizzy patient:** do not drive, do not climb ladders or work at height, do not use machinery, get up in stages, keep the room lit at night, and return immediately for weakness, slurred speech, double vision, difficulty swallowing, severe headache or inability to walk.",
      ],
    },
  ],
  tables: [
    {
      heading: "The four dizzinesses",
      columns: ["Type", "Patient description", "Mechanism", "Key first test"],
      rows: [
        ["Vertigo", "Room spinning, kamra ghoom raha hai", "Vestibular, peripheral or central", "Dix-Hallpike, HINTS if continuous"],
        ["Presyncope", "About to faint, blackness, sweating", "Transient global cerebral hypoperfusion", "Lying and standing BP, ECG, haemoglobin, glucose"],
        ["Disequilibrium", "Unsteady on the feet, only when standing or walking", "Sensorimotor balance failure", "Gait, Romberg, Timed Up and Go, neuropathy screen"],
        ["Lightheadedness", "Floating, heavy head, continuous", "Anxiety, hyperventilation, depression, drugs", "GAD-7, PHQ-9, drug review"],
      ],
    },
    {
      heading: "Timing and trigger pattern to diagnosis",
      columns: ["Pattern", "Duration", "Likely diagnosis", "Action"],
      rows: [
        ["Triggered by head position", "Seconds to 1 minute", "Benign paroxysmal positional vertigo", "Dix-Hallpike then Epley manoeuvre"],
        ["Triggered by standing up", "Seconds", "Orthostatic hypotension", "Lying and standing BP, review drugs"],
        ["Spontaneous episodes with hearing loss and tinnitus", "20 minutes to 12 hours", "Meniere disease", "Salt restriction, betahistine, audiometry"],
        ["Spontaneous episodes with photophobia or headache", "5 minutes to 72 hours", "Vestibular migraine", "Trigger diary, propranolol or flunarizine prophylaxis"],
        ["Continuous after a viral illness", "Days", "Vestibular neuritis (peripheral HINTS)", "Short vestibular sedative, early vestibular rehabilitation"],
        ["Continuous with any central sign", "Days", "Posterior circulation stroke", "Admit; MRI with diffusion weighting, not CT"],
        ["Exertional or with palpitations", "Seconds", "Arrhythmia, aortic stenosis, hypertrophic cardiomyopathy", "ECG, echocardiography, urgent cardiology referral"],
      ],
    },
    {
      heading: "HINTS examination in acute continuous vertigo",
      columns: ["Component", "Peripheral (reassuring)", "Central (dangerous)"],
      rows: [
        ["Head Impulse test", "Abnormal - corrective saccade present", "Normal - no corrective saccade"],
        ["Nystagmus", "Unidirectional, horizontal, beats away from affected ear", "Direction-changing, vertical or purely torsional"],
        ["Test of Skew (cover-uncover)", "No vertical realignment", "Skew deviation present"],
        ["Interpretation", "All three peripheral: vestibular neuritis", "Any one central: stroke until MRI says otherwise"],
      ],
    },
  ],
  redFlags: [
    "Acute vertigo with a normal head impulse test, direction-changing nystagmus or skew deviation - central cause, admit for MRI with diffusion weighting.",
    "Vertigo with dysarthria, diplopia, dysphagia, facial numbness, limb ataxia or Horner syndrome - brainstem or cerebellar stroke; refer immediately.",
    "Inability to sit or walk unaided during an acute vertigo attack - a cerebellar infarct or haemorrhage; peripheral vertigo allows walking, however unsteadily.",
    "New severe headache or neck pain with vertigo, especially after neck manipulation or trauma - vertebral artery dissection.",
    "Sudden unilateral sensorineural hearing loss with vertigo - an ENT emergency requiring high-dose steroids within 72 hours.",
    "Syncope or presyncope on exertion, or with palpitations, or with a family history of sudden cardiac death - arrhythmia, aortic stenosis or hypertrophic cardiomyopathy; ECG and echocardiography urgently.",
    "Dizziness with melaena, haematemesis, heavy vaginal bleeding or a haemoglobin below 7 g/dL - resuscitate and find the bleeding source.",
    "Recurrent falls with dizziness in an older person on four or more drugs - a full falls and medication review, because the next fall may be a hip fracture.",
  ],
  pearls: [
    "Never ask what the dizziness feels like; ask when it started, how long each attack lasts, what triggers it and what comes with it - timing and triggers, not quality.",
    "HINTS is only valid in continuous vertigo with nystagmus; using it in positional vertigo is meaningless and dangerous.",
    "In acute vestibular syndrome, a normal head impulse test is the frightening result - it points to stroke, not to a normal patient.",
    "A normal CT brain does not exclude a posterior circulation stroke in the first 48 hours; if the clinical picture is central, admit regardless of the CT.",
    "BPPV is cured with a manoeuvre, not a tablet; giving betahistine for BPPV is a wasted consultation.",
    "Stop vestibular sedatives after 72 hours - beyond that they prevent central compensation and prolong the illness.",
    "Vestibular migraine is far commoner than Meniere disease and often occurs without any headache at all.",
    "Dizziness in an older patient is usually a drug list plus three small deficits, not one disease; the medication review is the treatment.",
  ],
  theory: [
    {
      id: "symptom-approach-dizziness-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 58-year-old man presents with giddiness of two days' duration. Discuss the classification of dizziness, your clinical approach, and how you would distinguish a peripheral from a central cause.",
      openingLines: [
        "Giddiness is a lay term covering four distinct symptoms - vertigo, presyncope, disequilibrium and non-specific lightheadedness - each with a different mechanism and a different differential diagnosis.",
        "Because patients describe the quality of dizziness inconsistently, the modern approach (TiTrATE) classifies by timing and triggers and then applies a targeted examination, rather than by asking what it feels like.",
      ],
      answer: [
        {
          heading: "1. Classification",
          points: [
            "Vertigo - an illusion of movement, indicating vestibular dysfunction, peripheral or central.",
            "Presyncope - impending faint from transient global cerebral hypoperfusion: orthostatic hypotension, arrhythmia, aortic stenosis, anaemia, hypoglycaemia, drugs.",
            "Disequilibrium - unsteadiness present only on standing or walking: peripheral neuropathy, cerebellar disease, parkinsonism, visual impairment, multiple deficits in the elderly.",
            "Non-specific lightheadedness - continuous floating sensation: anxiety, hyperventilation, depression, sleep deprivation, drugs.",
          ],
        },
        {
          heading: "2. History by timing and triggers",
          points: [
            "Episodic triggered by head position, seconds to a minute: benign paroxysmal positional vertigo.",
            "Episodic triggered by standing: orthostatic hypotension.",
            "Episodic spontaneous with hearing loss, tinnitus and aural fullness, 20 minutes to 12 hours: Meniere disease.",
            "Episodic spontaneous with photophobia or headache, 5 minutes to 72 hours: vestibular migraine.",
            "Continuous over days with nausea and nystagmus: acute vestibular syndrome - vestibular neuritis or posterior circulation stroke.",
            "Associated features: hearing loss, tinnitus, headache, neck pain, palpitations, chest pain, focal weakness, diplopia, dysarthria, dysphagia.",
            "Drug history, vascular risk factors, diabetes, recent viral illness, recent neck manipulation or trauma.",
          ],
        },
        {
          heading: "3. Examination",
          points: [
            "Pulse and rhythm, lying and standing blood pressure at 1 and 3 minutes, pallor, cardiac auscultation for a murmur.",
            "Ear examination, gross hearing assessment, Rinne and Weber tests.",
            "Neurological examination: cranial nerves, cerebellar signs, gait, Romberg, and the ability to walk unaided.",
            "Dix-Hallpike manoeuvre for posterior canal BPPV and the supine roll test for horizontal canal BPPV.",
            "HINTS examination if the vertigo is continuous with nystagmus.",
          ],
        },
        {
          heading: "4. Peripheral versus central",
          points: [
            "Peripheral: severe vertigo, prominent nausea and vomiting, unidirectional horizontal nystagmus suppressed by fixation, abnormal head impulse test with a corrective saccade, no skew, hearing symptoms possible, the patient can walk although unsteadily, and no other neurological sign.",
            "Central: often less severe vertigo but greater imbalance, direction-changing or vertical nystagmus not suppressed by fixation, a normal head impulse test, skew deviation, inability to sit or walk unaided, and accompanying dysarthria, diplopia, dysphagia, ataxia or facial numbness.",
            "Any one central HINTS component outweighs two reassuring ones; HINTS in expert hands is more sensitive for stroke than early MRI.",
            "A normal CT brain does not exclude posterior circulation infarction in the first 24-48 hours; MRI with diffusion weighting is required.",
          ],
        },
        {
          heading: "5. Management and safety netting",
          points: [
            "BPPV: Epley canalith repositioning manoeuvre, Brandt-Daroff exercises at home, no vestibular sedatives.",
            "Vestibular neuritis: prochlorperazine 5 mg PO TDS or betahistine 8-16 mg PO TDS for no more than 72 hours, then early mobilisation and vestibular rehabilitation exercises.",
            "Meniere disease: salt restriction, betahistine 16-24 mg TDS, a thiazide, and ENT referral for audiometry.",
            "Vestibular migraine: trigger avoidance and prophylaxis with propranolol, flunarizine or amitriptyline.",
            "Orthostatic hypotension: withdraw the culprit drug, fluid and salt, staged rising, compression stockings, fludrocortisone or midodrine if refractory.",
            "Admit or refer the same day for central features, inability to walk, sudden hearing loss, or suspected arrhythmia.",
            "Safety net: no driving, no work at height, get up in stages, and return immediately for weakness, slurred speech, double vision or inability to walk.",
          ],
        },
      ],
      mustDraw: [
        "A table of the four types of dizziness with mechanism and first test.",
        "A HINTS table showing the peripheral and central pattern for head impulse, nystagmus and test of skew.",
      ],
      markSplit: [
        { part: "Classification of dizziness into four types", marks: 2 },
        { part: "History by timing and triggers", marks: 2 },
        { part: "Examination including Dix-Hallpike and HINTS", marks: 2 },
        { part: "Peripheral versus central differentiation", marks: 2 },
        { part: "Management and safety netting", marks: 2 },
      ],
      keywords: ["vertigo", "TiTrATE", "HINTS", "Dix-Hallpike", "Epley", "posterior circulation stroke"],
    },
    {
      id: "symptom-approach-dizziness-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on benign paroxysmal positional vertigo: pathophysiology, diagnosis and treatment.",
      openingLines: [
        "Benign paroxysmal positional vertigo is brief vertigo provoked by a change in head position relative to gravity, caused by otoconia displaced from the utricular macula into a semicircular canal, most often the posterior canal.",
        "It is the commonest cause of vertigo in general practice, is diagnosed by a bedside manoeuvre and is cured by another bedside manoeuvre, which is why recognising it is such a high-value skill.",
      ],
      answer: [
        {
          heading: "Pathophysiology",
          points: [
            "Calcium carbonate otoconia detach from the utricle and enter a semicircular canal - posterior canal in 85-90%, horizontal in 5-15%, anterior rarely.",
            "Canalolithiasis: free-floating particles move with gravity and deflect the cupula, producing brief vertigo with latency and fatigability.",
            "Cupulolithiasis: particles adherent to the cupula produce longer, less fatigable nystagmus.",
            "Precipitants: head trauma, prolonged bed rest or supine positioning, vestibular neuritis, and increasing age; often idiopathic.",
          ],
        },
        {
          heading: "Clinical features and diagnosis",
          points: [
            "Vertigo lasting seconds to under a minute, triggered by turning in bed, looking up, bending forward or lying down; nausea is common, vomiting less so.",
            "No hearing loss, no tinnitus, no neurological signs; the patient is entirely well between episodes.",
            "Dix-Hallpike manoeuvre is diagnostic for posterior canal BPPV: upbeating torsional nystagmus with a 2-20 second latency, lasting under a minute, fatiguing on repetition, and accompanied by vertigo.",
            "Supine roll test diagnoses horizontal canal BPPV with geotropic or apogeotropic horizontal nystagmus.",
            "No imaging is required when the manoeuvre is positive and the neurological examination is normal.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Epley canalith repositioning manoeuvre for posterior canal BPPV - four positions held 30-60 seconds each, curing 80-90% in one or two sessions.",
            "Semont liberatory manoeuvre as an alternative; barbecue roll (Lempert) manoeuvre for horizontal canal BPPV.",
            "Brandt-Daroff exercises taught for home use for residual or recurrent symptoms.",
            "Vestibular sedatives such as prochlorperazine, betahistine and cinnarizine have no role except for severe nausea for a day or two - they do not treat BPPV and delay recovery.",
            "Recurrence occurs in about 15-30% within a year; teach the patient the home exercise and reassure.",
            "Advise against driving and working at height until the manoeuvre has succeeded and symptoms have settled.",
          ],
        },
      ],
      mustDraw: [
        "A labelled sketch of the Dix-Hallpike position and the four steps of the Epley manoeuvre with the holding time for each.",
      ],
      markSplit: [
        { part: "Pathophysiology and canal involvement", marks: 1 },
        { part: "Clinical features and Dix-Hallpike findings", marks: 2 },
        { part: "Epley and other manoeuvres", marks: 1.5 },
        { part: "Role of drugs and advice on recurrence", marks: 0.5 },
      ],
      keywords: ["BPPV", "canalolithiasis", "Dix-Hallpike", "Epley manoeuvre", "Brandt-Daroff"],
    },
    {
      id: "symptom-approach-dizziness-t3",
      paper: "II",
      kind: "chart-flow",
      marks: 5,
      minutes: 8,
      frequency: "less-common",
      question: "Draw and explain an algorithm for the assessment of an elderly patient presenting with recurrent dizziness and falls.",
      openingLines: [
        "Dizziness in an older adult is usually multifactorial rather than a single disease, arising from the accumulation of small deficits in vision, vestibular function, proprioception, muscle strength and blood pressure regulation, compounded by polypharmacy.",
        "The correct clinical output is therefore a multifactorial falls risk assessment and a set of interventions, not a single diagnostic label.",
      ],
      answer: [
        {
          heading: "Step 1: Exclude the dangerous and the treatable",
          points: [
            "Any focal neurological sign, new headache, inability to walk, or a central HINTS pattern - refer for stroke assessment.",
            "Syncope with injury, exertional symptoms, palpitations or a murmur - ECG, echocardiography and cardiology referral.",
            "Haemoglobin, blood glucose, electrolytes including sodium, renal function, and a 12-lead ECG in every case.",
          ],
        },
        {
          heading: "Step 2: Blood pressure and drugs",
          points: [
            "Lying and standing blood pressure at 1 and 3 minutes; a fall of 20 mmHg systolic or 10 mmHg diastolic confirms orthostatic hypotension.",
            "Systematic medication review: antihypertensives, alpha-blockers, diuretics, nitrates, benzodiazepines, tricyclics, anticholinergics, antipsychotics and antidiabetic agents; deprescribe or halve one drug at a time.",
          ],
        },
        {
          heading: "Step 3: Vestibular and sensory assessment",
          points: [
            "Dix-Hallpike for BPPV, which is common and curable in this group.",
            "Vision - cataract, uncorrected refractive error, and the hazards of new multifocal lenses.",
            "Peripheral neuropathy - diabetes, vitamin B12 deficiency, alcohol; test vibration and joint position sense.",
            "Hearing assessment and cognitive screen.",
          ],
        },
        {
          heading: "Step 4: Function, environment and intervention",
          points: [
            "Timed Up and Go test - over 12 seconds indicates increased falls risk; assess gait, balance and footwear.",
            "Home hazard assessment - lighting, loose mats, wet bathroom floors, high thresholds, stairs without a rail, the position of the toilet at night.",
            "Interventions: strength and balance exercise programme, vitamin D correction, treat BPPV, correct vision, review drugs, provide a walking aid if needed, and treat fear of falling.",
            "Review at 6-8 weeks with a repeat Timed Up and Go and a falls diary.",
          ],
        },
      ],
      mustDraw: [
        "A four-step algorithm: red flags and cardiac screen - lying and standing BP with medication review - vestibular and sensory assessment - function, environment and intervention, with review at 6-8 weeks.",
      ],
      markSplit: [
        { part: "Red flags and cardiac causes", marks: 1 },
        { part: "Orthostatic hypotension and medication review", marks: 1.5 },
        { part: "Vestibular and sensory assessment", marks: 1 },
        { part: "Functional, environmental and intervention plan", marks: 1.5 },
      ],
      keywords: ["falls", "Timed Up and Go", "orthostatic hypotension", "polypharmacy", "multifactorial dizziness"],
    },
  ],
  mcqs: [
    {
      id: "symptom-approach-dizziness-q1",
      stem: "A 61-year-old diabetic hypertensive man has had continuous vertigo with vomiting for 18 hours. He has horizontal nystagmus that beats to the left in all directions of gaze, a normal head impulse test, and cannot stand without support. A CT brain done two hours ago is reported normal. What is the most appropriate action?",
      options: [
        "Discharge with prochlorperazine 5 mg three times daily and review in one week",
        "Perform the Epley manoeuvre for presumed benign positional vertigo",
        "Admit for MRI brain with diffusion-weighted imaging and stroke care",
        "Start betahistine 16 mg three times daily and arrange audiometry",
        "Refer to ENT for suspected vestibular neuritis",
      ],
      answer: 2,
      explanation:
        "A normal head impulse test, direction-changing nystagmus and an inability to stand unaided are three central features of the HINTS and gait assessment in acute vestibular syndrome, and a normal early CT does not exclude posterior circulation infarction because CT misses most of them in the first 24-48 hours, so admission for diffusion-weighted MRI is mandatory. Discharge on a vestibular sedative would send home a patient with a cerebellar stroke at risk of oedema and herniation. The Epley manoeuvre treats positional vertigo, which lasts seconds and is triggered by head movement, not continuous vertigo. Betahistine and audiometry address Meniere disease, which is episodic and associated with hearing loss. Vestibular neuritis requires a peripheral HINTS pattern, which he does not have.",
      difficulty: "hard",
    },
    {
      id: "symptom-approach-dizziness-q2",
      stem: "A 46-year-old woman describes brief spinning lasting about 20 seconds each time she turns over in bed or looks up to a shelf. There is no hearing loss, tinnitus or headache, and neurological examination is normal. Dix-Hallpike to the right produces upbeating torsional nystagmus after a 5-second latency, lasting 30 seconds. What is the best treatment?",
      options: [
        "Epley canalith repositioning manoeuvre to the right",
        "Betahistine 16 mg three times daily for six weeks",
        "MRI brain with contrast to exclude an acoustic neuroma",
        "Cinnarizine 25 mg three times daily and a cervical collar",
        "Prophylactic flunarizine 10 mg at night",
      ],
      answer: 0,
      explanation:
        "Positional vertigo lasting under a minute with a positive Dix-Hallpike showing latent, fatigable upbeating torsional nystagmus is right posterior canal benign paroxysmal positional vertigo, and the Epley repositioning manoeuvre cures 80-90% of cases in one or two sessions. Betahistine is a vestibular sedative that does not move otoconia and, given for weeks, delays central compensation. MRI is not indicated with a positive positional test and a normal neurological examination. Cinnarizine plus a collar treats a diagnosis (cervical vertigo) that is rarely real and would leave a curable condition untreated. Flunarizine is a migraine prophylactic and is irrelevant to positional vertigo.",
      difficulty: "easy",
    },
    {
      id: "symptom-approach-dizziness-q3",
      stem: "A 72-year-old man on amlodipine, prazosin for prostatism, and furosemide reports giddiness on getting out of bed each morning, relieved by sitting down. Supine BP is 138/80 mmHg and BP at 2 minutes of standing is 108/66 mmHg. What is the single most useful first intervention?",
      options: [
        "Start fludrocortisone 0.1 mg once daily",
        "Review and reduce the drugs, particularly prazosin and furosemide",
        "Prescribe betahistine 8 mg three times daily",
        "Perform the Dix-Hallpike manoeuvre and treat with Epley",
        "Refer for tilt table testing",
      ],
      answer: 1,
      explanation:
        "A 30 mmHg systolic drop on standing is orthostatic hypotension, and in a man on an alpha-blocker plus a loop diuretic plus a calcium channel blocker the cause is the prescription, so drug review is both the diagnosis and the treatment and should always precede adding a new agent. Fludrocortisone is a later step reserved for refractory cases after culprit drugs are removed, and it causes fluid retention and hypokalaemia. Betahistine treats vestibular symptoms and has no effect on postural blood pressure. Dix-Hallpike is for positional vertigo lasting seconds with an illusion of spinning, which he does not describe. Tilt table testing adds nothing when the bedside standing test has already made the diagnosis.",
      difficulty: "easy",
    },
    {
      id: "symptom-approach-dizziness-q4",
      stem: "A 34-year-old woman has had six episodes over two years of spinning lasting three to eight hours, with nausea, sensitivity to light and sound, and no hearing loss or tinnitus. She had migraine with aura in her twenties. Audiometry is normal. What is the most likely diagnosis?",
      options: [
        "Meniere disease",
        "Vestibular migraine",
        "Recurrent vestibular neuritis",
        "Transient ischaemic attacks in the posterior circulation",
        "Persistent postural-perceptual dizziness",
      ],
      answer: 1,
      explanation:
        "Recurrent spontaneous vertigo lasting 5 minutes to 72 hours with photophobia and phonophobia in a patient with a migraine history, and with normal hearing, meets the criteria for vestibular migraine, which is the commonest cause of recurrent spontaneous vertigo and often occurs without headache. Meniere disease requires documented fluctuating low-frequency sensorineural hearing loss with tinnitus and aural fullness, and her audiogram is normal. Vestibular neuritis is a single continuous episode lasting days, not a recurrent one. Posterior circulation transient ischaemic attacks last minutes, occur in patients with vascular risk factors, and almost always carry other brainstem symptoms. Persistent postural-perceptual dizziness is continuous for months and provoked by visual motion, not episodic over hours.",
      difficulty: "moderate",
    },
    {
      id: "symptom-approach-dizziness-q5",
      stem: "A 20-year-old man reports giddiness while playing football, with brief loss of consciousness on one occasion. His father died suddenly at 40. Examination shows an ejection systolic murmur at the left sternal border that increases on standing. What is the most important next investigation?",
      options: [
        "MRI brain",
        "Electrocardiogram and echocardiography",
        "Dix-Hallpike manoeuvre",
        "Electroencephalogram",
        "Carotid Doppler study",
      ],
      answer: 1,
      explanation:
        "Exertional presyncope and syncope with a murmur that increases on standing and a family history of sudden death is hypertrophic cardiomyopathy until proved otherwise, and an ECG plus echocardiography is the pathway that both identifies it and guides urgent restriction from competitive sport. MRI brain investigates the wrong organ for exertional syncope. Dix-Hallpike is a test for positional vertigo, a different symptom entirely. An electroencephalogram is for suspected seizure, and exertional loss of consciousness with a murmur is cardiac until excluded. Carotid Doppler is irrelevant in a 20-year-old with no atherosclerotic risk and does not explain exertional syncope.",
      difficulty: "moderate",
    },
    {
      id: "symptom-approach-dizziness-q6",
      stem: "A 40-year-old man with vestibular neuritis five days ago is still taking prochlorperazine 5 mg three times daily and remains at home resting completely. He feels unsteady whenever he moves. What is the most appropriate advice?",
      options: [
        "Continue prochlorperazine for four weeks and continue bed rest",
        "Stop the prochlorperazine and begin graded mobilisation with vestibular rehabilitation exercises",
        "Add cinnarizine 25 mg three times daily to the prochlorperazine",
        "Order an MRI brain because symptoms have lasted more than three days",
        "Start prednisolone 40 mg daily for two weeks",
      ],
      answer: 1,
      explanation:
        "Vestibular sedatives suppress symptoms but block the central compensation on which recovery depends, so they should be stopped after 24-72 hours and replaced with graded movement and vestibular rehabilitation exercises, which shorten recovery. Continuing them for weeks with bed rest is the commonest reason a patient with neuritis remains unsteady for months. Adding a second sedative compounds the same error. MRI is unnecessary when the initial HINTS pattern was peripheral and the patient is improving with no new neurological signs. Steroids may shorten recovery only if given within the first three days, and starting them on day five in an improving patient offers no benefit against real adverse effects.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "symptom-approach-dizziness-c1",
      front: "The four symptoms hidden inside the word giddiness.",
      back: "Vertigo (illusion of movement), presyncope (about to faint), disequilibrium (unsteady only when standing or walking), and non-specific lightheadedness (anxiety, drugs).",
    },
    {
      id: "symptom-approach-dizziness-c2",
      front: "What replaces the question what does the dizziness feel like?",
      back: "TiTrATE - Timing, Triggers, And Targeted Examination: when did it start, how long does each attack last, what triggers it, what comes with it.",
    },
    {
      id: "symptom-approach-dizziness-c3",
      front: "The three components of HINTS and what makes it central.",
      back: "Head Impulse, Nystagmus, Test of Skew. Central if head impulse is normal, or nystagmus is direction-changing or vertical, or skew deviation is present - any one is enough.",
    },
    {
      id: "symptom-approach-dizziness-c4",
      front: "When may HINTS be used?",
      back: "Only in acute continuous vertigo with nystagmus (acute vestibular syndrome). Never in episodic or positional vertigo.",
    },
    {
      id: "symptom-approach-dizziness-c5",
      front: "Positive Dix-Hallpike findings.",
      back: "Upbeating torsional nystagmus after a 2-20 second latency, lasting under a minute, with vertigo, and fatiguing on repetition - posterior canal BPPV.",
    },
    {
      id: "symptom-approach-dizziness-c6",
      front: "How long may a vestibular sedative be given, and why?",
      back: "24-72 hours only. Beyond that prochlorperazine, betahistine and cinnarizine block central compensation and prolong the illness.",
    },
    {
      id: "symptom-approach-dizziness-c7",
      front: "Definition of orthostatic hypotension.",
      back: "A fall of 20 mmHg systolic or 10 mmHg diastolic within 3 minutes of standing from supine.",
    },
    {
      id: "symptom-approach-dizziness-c8",
      front: "Meniere disease triad and attack duration.",
      back: "Episodic vertigo of 20 minutes to 12 hours with fluctuating low-frequency sensorineural hearing loss, tinnitus and aural fullness.",
    },
    {
      id: "symptom-approach-dizziness-c9",
      front: "Vestibular migraine: duration and the giveaway.",
      back: "5 minutes to 72 hours of vertigo in a patient with a migraine history, with photophobia or phonophobia; often no headache at all during the attack.",
    },
    {
      id: "symptom-approach-dizziness-c10",
      front: "Why is a normal CT brain unhelpful in acute vertigo?",
      back: "CT misses most posterior circulation infarcts in the first 24-48 hours; MRI with diffusion weighting is the test, and clinical central features override a normal CT.",
    },
    {
      id: "symptom-approach-dizziness-c11",
      front: "Which dizzy patient can walk, and which cannot?",
      back: "Peripheral vertigo allows walking, however unsteadily; inability to sit or walk unaided points to a cerebellar lesion.",
    },
    {
      id: "symptom-approach-dizziness-c12",
      front: "Safety net for any dizzy patient sent home.",
      back: "No driving, no work at height, no machinery, rise in stages, keep a light on at night, and return at once for weakness, slurred speech, double vision, difficulty swallowing or inability to walk.",
    },
  ],
  references: [
    "Newman-Toker DE et al, TiTrATE: a novel approach to diagnosing acute dizziness and vertigo, Neurologic Clinics, 2015",
    "Kattah JC et al, HINTS to diagnose stroke in the acute vestibular syndrome, Stroke, 2009",
    "AAO-HNS Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update), 2017",
    "Barany Society diagnostic criteria for vestibular migraine and for Meniere disease, 2012-2015",
    "Murtagh's General Practice, 8th edition, 2018 - dizziness",
    "NICE Clinical Knowledge Summaries: Vertigo, 2023",
  ],
});
