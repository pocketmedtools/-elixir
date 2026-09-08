/**
 * Diagrams for psychiatry, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "psychiatry-depression": [
    {
      kind: "ladder",
      heading: "PHQ-9 band and the action it triggers",
      caption: "Nine DSM-5 symptoms scored 0-3 over two weeks, total 0-27; 10 or more is 88 percent sensitive and specific.",
      steps: [
        {
          label: "0-4 none or minimal",
          detail: "No treatment; re-screen at the next chronic disease review",
        },
        {
          label: "5-9 mild",
          detail: "Psychoeducation, behavioural activation, exercise, sleep; review in 2 weeks; drug only if it persists past 4-6 weeks or there is a past history",
        },
        {
          label: "10-14 moderate",
          detail: "SSRI plus supportive counselling; review at 2 and 4 weeks; PHQ-9 repeated at 4 weeks",
          tone: "decision",
        },
        {
          label: "15-19 moderately severe",
          detail: "SSRI without delay plus structured psychotherapy; ask about suicide at every visit; review in 1-2 weeks",
        },
        {
          label: "20-27 severe",
          detail: "SSRI, same-day suicide risk assessment, family involved, psychiatric referral; admit if psychotic, not eating or at high risk",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Suicide risk: three levels and what each demands",
      caption: "Asking about suicide does not increase risk; a previous attempt is the strongest single predictor.",
      root: "Ideation, plan, means, intent, past attempts",
      arms: [
        {
          label: "High risk",
          tone: "warn",
          steps: [
            "Active ideation with plan, means and intent",
            "Or a recent attempt, or psychosis",
            "Same-day psychiatric assessment and admission",
            "Never a prescription and an appointment next week",
          ],
        },
        {
          label: "Moderate risk",
          tone: "decision",
          steps: [
            "Ideation without plan or intent, no attempt",
            "Family informed, means removed from the house",
            "Written safety plan, treatment started",
            "Small quantities dispensed, no tricyclics",
            "Review within 48-72 hours",
          ],
        },
        {
          label: "Low risk",
          steps: [
            "Fleeting passive thoughts, no plan, good supports",
            "Written safety plan, Tele-MANAS 14416",
            "Weekly review and re-ask at every visit",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Choosing the antidepressant",
      caption: "Match the drug to the patient; an adequate trial is 4-6 weeks at a therapeutic dose.",
      columns: ["Drug", "Start and range", "Choose it when", "Watch for"],
      rows: [
        [
          "Escitalopram",
          "5-10 mg OM, up to 20 mg",
          "First choice generally; few interactions; 5 mg in the elderly",
          "QT prolongation at high dose; hyponatraemia in the elderly",
        ],
        [
          "Sertraline",
          "25-50 mg OM, up to 200 mg",
          "Cardiac disease and post-MI, pregnancy, lactation, anxiety",
          "Early GI upset and diarrhoea",
        ],
        [
          "Fluoxetine",
          "20 mg OM, up to 60 mg",
          "Low cost, poor adherence, adolescents",
          "Long half-life, CYP2D6 interactions, activation and insomnia",
        ],
        [
          "Mirtazapine",
          "7.5-15 mg HS, up to 45 mg",
          "Insomnia, poor appetite, weight loss, SSRI sexual dysfunction",
          "Weight gain and sedation; not for the obese diabetic",
        ],
        [
          "Amitriptyline",
          "10-25 mg HS, up to 150 mg",
          "Only when there is neuropathic pain or migraine",
          "Lethal in overdose; avoid in cardiac disease, the elderly, suicide risk",
        ],
        [
          "Venlafaxine",
          "37.5-75 mg OM, up to 225 mg",
          "SSRI failure, melancholic features, pain",
          "Raises blood pressure; severe discontinuation syndrome",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Follow-up after starting an antidepressant",
      steps: [
        {
          label: "Week 2 review",
          detail: "Side effects, adherence, suicide enquiry; check sodium if over 65 or on a diuretic",
        },
        {
          label: "Week 4 review",
          detail: "Repeat the PHQ-9; response is a 50 percent fall in the score",
        },
        {
          label: "Week 6-8 decision point",
          detail: "No response: check adherence and alcohol, raise the dose, then switch to another SSRI, mirtazapine or venlafaxine",
          tone: "decision",
        },
        {
          label: "Remission - PHQ-9 under 5",
          detail: "The target, because residual symptoms predict relapse",
          tone: "good",
        },
        {
          label: "Continue after remission",
          detail: "6-9 months for a first episode; 2 years or longer after a second or third episode",
        },
        {
          label: "Taper over 4 weeks",
          detail: "Avoids dizziness, electric-shock sensations and irritability - worst with paroxetine and venlafaxine",
        },
        {
          label: "Refer if two adequate trials fail",
          detail: "Also for psychotic features or suspected bipolarity - an antidepressant alone can switch a bipolar patient into mania",
          tone: "warn",
        },
      ],
    },
  ],

  "psychiatry-anxiety": [
    {
      kind: "flow",
      heading: "The acute panic attack in casualty",
      caption: "Treat by explanation, not by injection.",
      steps: [
        {
          label: "Sit the patient down",
          detail: "Pulse, blood pressure, oxygen saturation, blood glucose and a 12-lead ECG",
        },
        {
          label: "Exclude the dangerous mimics",
          detail: "A first attack over 45, chest pain, syncope or an abnormal ECG is a cardiac work-up until proven otherwise",
          tone: "warn",
        },
        {
          label: "Name the illness confidently",
          detail: "Peaks in about ten minutes, settles in twenty to thirty, and nobody has died of a panic attack",
          tone: "good",
        },
        {
          label: "Slow breathing at the bedside",
          detail: "In through the nose for four, out through pursed lips for six, 6-8 breaths a minute for five minutes",
        },
        {
          label: "Grounding, one quiet relative",
          detail: "Five things seen, four heard, three touched; do not use a paper bag - it is unsafe if the patient is hypoxic",
          tone: "warn",
        },
        {
          label: "Drug only if distress is extreme",
          detail: "A single dose of lorazepam 1 mg or alprazolam 0.25-0.5 mg orally, with no repeat prescription from casualty",
        },
        {
          label: "Discharge with the diagnosis in writing",
          detail: "Follow-up within a week, so the next casualty officer does not restart the investigations",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "GAD-7 band and the action it triggers",
      caption: "Seven items scored 0-3 over two weeks, total 0-21; a GAD-2 of 3 or more triggers the full scale.",
      steps: [
        { label: "0-4 minimal", detail: "Reassure, address caffeine and sleep, no treatment" },
        {
          label: "5-9 mild",
          detail: "Psychoeducation, breathing and relaxation, exercise; review in 4 weeks",
        },
        {
          label: "10-14 moderate",
          detail: "Start an SSRI at half the depression dose plus CBT techniques; review in 2 weeks",
          tone: "decision",
        },
        {
          label: "15-21 severe",
          detail: "SSRI or SNRI, structured CBT, consider a short benzodiazepine bridge, screen for depression and suicide, refer if not improving",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Drugs for anxiety in family practice",
      caption: "Start at half the depression dose, warn of first-week jitteriness, judge at 8-12 weeks, continue 12 months after response.",
      columns: ["Drug", "Start and target", "Use it for", "Caution"],
      rows: [
        [
          "Escitalopram",
          "5 mg OM, then 10-20 mg",
          "GAD, panic disorder, social anxiety - first choice",
          "Early activation; hyponatraemia in the elderly; QT at high dose",
        ],
        [
          "Sertraline",
          "25 mg OM, then 50-200 mg",
          "Panic disorder, OCD, anxiety with cardiac disease or pregnancy",
          "Early GI upset and jitteriness",
        ],
        [
          "Venlafaxine XR",
          "37.5 mg OM, then 75-225 mg",
          "SSRI failure, GAD with low mood",
          "Raises blood pressure; severe discontinuation syndrome",
        ],
        [
          "Clonazepam",
          "0.25 mg BD, 2-4 weeks only",
          "A bridge until the SSRI acts; severe initial panic",
          "Dependence, sedation, falls; avoid in alcohol use, COPD, over 65",
        ],
        [
          "Propranolol",
          "10-40 mg 30-60 min before the event",
          "Performance and situational anxiety, tremor, palpitations",
          "Asthma, heart block, bradycardia; does not treat the disorder",
        ],
        [
          "Buspirone",
          "5 mg TDS, then 15-30 mg a day",
          "GAD where benzodiazepines must be avoided",
          "Takes two weeks to act; ineffective in panic disorder",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Getting a dependent patient off a benzodiazepine",
      caption: "Alprazolam prescribed without a diagnosis is the commonest iatrogenic dependence in Indian practice.",
      steps: [
        {
          label: "Convert to a long-acting equivalent",
          detail: "Clonazepam or diazepam, which smooths the inter-dose withdrawal of alprazolam",
        },
        {
          label: "Reduce by 10-25 percent every 2-4 weeks",
          detail: "Slow further near the end; give a written schedule and frequent review",
        },
        {
          label: "Treat the disorder underneath",
          detail: "An SSRI started at half dose, plus CBT",
        },
        {
          label: "Never stop abruptly",
          detail: "Rebound anxiety, insomnia, autonomic instability and withdrawal seizures",
          tone: "warn",
        },
      ],
    },
  ],

  "psychiatry-alcohol-use-disorder": [
    {
      kind: "flow",
      heading: "The alcohol withdrawal clock",
      caption: "Time from the last drink - quote it exactly; it is asked every year.",
      steps: [
        {
          label: "6-12 hours - minor withdrawal",
          detail: "Tremor, anxiety, sweating, nausea, insomnia, tachycardia; score CIWA-Ar, start the benzodiazepine taper and thiamine 100 mg IM",
        },
        {
          label: "12-24 hours - alcoholic hallucinosis",
          detail: "Visual or tactile hallucinations with a clear sensorium and intact orientation; increase the benzodiazepine, usually no antipsychotic",
        },
        {
          label: "12-48 hours - withdrawal seizures",
          detail: "Generalised tonic-clonic, peak at 24 hours; IV lorazepam 2-4 mg or diazepam 5-10 mg, repeat once; do NOT start phenytoin",
          tone: "warn",
        },
        {
          label: "48-96 hours - delirium tremens",
          detail: "Clouded sensorium with disorientation, vivid hallucinations, gross tremor, fever and autonomic storm; occasionally up to day 7",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "CIWA-Ar band and what it triggers",
      caption: "Ten items, maximum score 67; nine scored 0-7 plus orientation and clouding of sensorium 0-4.",
      steps: [
        {
          label: "Under 8 - mild",
          detail: "Monitoring and thiamine; no benzodiazepine needed if he is stable",
        },
        {
          label: "8-15 - moderate",
          detail: "Treat with a benzodiazepine; symptom-triggered dosing where hourly scoring is possible",
          tone: "decision",
        },
        {
          label: "16 or more - severe",
          detail: "High risk of seizures and delirium tremens; admit and treat aggressively - never home detoxification",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Delirium tremens: the emergency sequence",
      caption: "Mortality 1-5 percent treated, up to 25 percent untreated.",
      steps: [
        {
          label: "Admit - never send home",
          detail: "Confusion, fever above 38 degrees C, gross tremor and vivid hallucinations 48-96 hours after the last drink",
          tone: "warn",
        },
        {
          label: "Load to light sedation",
          detail: "Diazepam 10-20 mg or lorazepam 2-4 mg orally or IV, repeated every 10-15 minutes until lightly sedated, then a taper",
        },
        {
          label: "Thiamine before any glucose",
          detail: "500 mg IV three times a day for 2-3 days, then 250 mg daily for 5 days; glucose first precipitates Wernicke encephalopathy",
          tone: "warn",
        },
        {
          label: "Correct fluid, glucose, electrolytes",
          detail: "Sodium, potassium and magnesium - magnesium is needed for thiamine to work; add folic acid 5 mg and pyridoxine",
        },
        {
          label: "Treat the precipitant",
          detail: "Look for sepsis; nurse in a lit, quiet room with a familiar attendant",
        },
        {
          label: "Haloperidol only as an adjunct",
          detail: "2.5-5 mg for hallucinations persisting despite adequate benzodiazepine; never alone, since it lowers the seizure threshold",
          tone: "warn",
        },
        {
          label: "Choose lorazepam in liver disease",
          detail: "Lorazepam 2-4 mg six-hourly - conjugated, no active metabolite; also in the elderly and in respiratory compromise",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Relapse prevention drugs after detoxification",
      caption: "Detoxification without one of these plus psychosocial support is a wasted admission - over 70 percent relapse within a year.",
      columns: ["Drug", "Dose", "How it works", "Do not use when"],
      rows: [
        [
          "Naltrexone",
          "25 mg for 3 days then 50 mg OD",
          "Opioid antagonist; cuts craving and heavy drinking days",
          "Acute hepatitis or liver failure; current opioid use or need for opioid analgesia",
        ],
        [
          "Acamprosate",
          "666 mg TDS (333 mg TDS if under 60 kg)",
          "Glutamate and NMDA modulation; supports abstinence, safe in liver disease",
          "Creatinine clearance under 30 mL/min; causes diarrhoea",
        ],
        [
          "Disulfiram",
          "250 mg OD, supervised by a relative",
          "Aldehyde dehydrogenase inhibitor; aversive reaction with any alcohol",
          "Ischaemic heart disease, psychosis, severe liver disease, pregnancy, unsupervised or non-consenting",
        ],
      ],
    },
  ],

  "psychiatry-tobacco-cessation": [
    {
      kind: "flow",
      heading: "The 5 A's at every consultation",
      caption: "Three minutes of clear advice raises quit rates by 2-3 percent absolute; advice plus counselling plus drugs reaches 25-30 percent at a year.",
      steps: [
        {
          label: "Ask",
          detail: "Cigarettes, bidis and hookah AND khaini, gutkha, zarda, paan and mishri; record tobacco use as a vital sign",
        },
        {
          label: "Advise",
          detail: "Clear, strong, personalised advice - stopping tobacco completely is the most important thing he can do",
        },
        {
          label: "Assess",
          detail: "Willingness to quit within 30 days; dependence by time to first use (under 30 minutes is high) and number per day",
          tone: "decision",
        },
        {
          label: "Assist",
          detail: "Quit date within 2 weeks, total abstinence, clear the house, enlist a supporter, plan triggers, prescribe pharmacotherapy",
        },
        {
          label: "Arrange",
          detail: "Week 1, week 2, 1 month, then monthly for 3 months; treat a lapse as information, not failure",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Ready to quit in the next 30 days?",
      root: "Tobacco use identified at the visit",
      arms: [
        {
          label: "Ready to quit",
          tone: "good",
          steps: [
            "Set a quit date within 2 weeks",
            "Total abstinence, not cutting down",
            "Clear tobacco from the house, enlist a supporter",
            "Pharmacotherapy if 10 or more a day, first use within 30 minutes, or a failed unaided attempt",
            "Follow up at week 1, week 2 and 1 month",
          ],
        },
        {
          label: "Not ready - the 5 R's",
          tone: "decision",
          steps: [
            "Relevance - why quitting matters to him personally",
            "Risks - the ones that apply to him",
            "Rewards - the benefits he names himself",
            "Roadblocks - what has stopped him before",
            "Repetition - raise it again at every consultation",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Cessation pharmacotherapy",
      caption: "Under-dosing and stopping too early are the commonest causes of failure - use an adequate dose for 8-12 weeks.",
      columns: ["Agent", "Dose and schedule", "Duration", "Cautions"],
      rows: [
        [
          "Nicotine patch",
          "21 mg/24 h if more than 10 a day, then 14 mg, then 7 mg (start 14 mg if 10 or fewer)",
          "6 + 2 + 2 = 10 weeks",
          "Skin irritation; remove at bedtime for vivid dreams; caution in the first 2 weeks after MI and in unstable angina",
        ],
        [
          "Nicotine gum",
          "2 mg if first use over 30 min after waking, 4 mg if within 30 min; 8-12 pieces a day, maximum 24",
          "6-12 weeks then taper",
          "Chew and park; no tea, coffee, cola or juice for 15 minutes before or during",
        ],
        [
          "Nicotine lozenge",
          "2 mg or 4 mg dissolved over 20-30 minutes",
          "6-12 weeks",
          "Suits denture wearers and smokeless tobacco users; do not chew or swallow",
        ],
        [
          "Bupropion SR",
          "150 mg OD for 3 days then 150 mg BD, started 1-2 weeks before the quit date",
          "7-12 weeks, up to 6 months",
          "Contraindicated in seizure disorder, eating disorders, abrupt alcohol or benzodiazepine withdrawal, MAOI use",
        ],
        [
          "Varenicline",
          "0.5 mg OD days 1-3, 0.5 mg BD days 4-7, then 1 mg BD from day 8",
          "12 weeks, plus 12 more if abstinent",
          "Most effective single agent; nausea in about 30 percent - take with food; reduce dose in severe renal impairment",
        ],
        [
          "Combination NRT",
          "Patch for background craving plus gum or lozenge as required",
          "10-12 weeks",
          "More effective than a single form in the highly dependent",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "What the quitter should expect",
      caption: "Telling the patient this in advance is itself a treatment.",
      steps: [
        {
          label: "Withdrawal begins within hours",
          detail: "Irritability, anxiety, restlessness, poor concentration, low mood, appetite, insomnia and craving",
        },
        {
          label: "Peaks at 2-3 days",
          detail: "A craving lasts only a few minutes at a time",
        },
        {
          label: "Largely settles by 2-4 weeks",
          detail: "Most relapses happen in the first two weeks - which is why review is at week 1 and week 2",
          tone: "warn",
        },
        {
          label: "Weight gain averages 4-5 kg",
          detail: "Plan diet and 30 minutes of daily walking from the quit date, not after the weight appears",
        },
        {
          label: "The reward arrives quickly",
          detail: "Carbon monoxide normal in 12-24 hours, myocardial infarction risk halved at 1 year, lung cancer risk halved at 10 years",
          tone: "good",
        },
      ],
    },
  ],

  "psychiatry-insomnia-sleep": [
    {
      kind: "branch",
      heading: "Sorting out the cause of insomnia",
      caption: "Chronic insomnia disorder: 3 nights a week for 3 months, despite adequate opportunity to sleep, with daytime impairment.",
      root: "Insomnia presenting in family practice",
      arms: [
        {
          label: "Psychiatric",
          steps: [
            "Depression - early morning waking with diurnal mood variation",
            "Anxiety - difficulty initiating sleep with a racing mind",
            "Mania - reduced need for sleep without tiredness, a red flag",
            "Screen every patient with the PHQ-9 and GAD-7",
          ],
        },
        {
          label: "Substances and drugs",
          steps: [
            "Alcohol - shortens latency but fragments the second half of the night",
            "Caffeine - half-life 5-6 hours, so an evening cup matters",
            "Steroids, theophylline, salbutamol, thyroxine, SSRIs, beta-blockers",
            "Hypnotic withdrawal - rebound insomnia worse than the original",
          ],
        },
        {
          label: "Medical",
          steps: [
            "Nocturnal pain, reflux, nocturnal asthma or COPD",
            "Heart failure with orthopnoea and nocturnal dyspnoea",
            "Nocturia from prostatism, diabetes or diuretics",
            "Hyperthyroidism, menopausal flushes, pruritus, kidney disease",
          ],
        },
        {
          label: "Primary sleep disorders",
          tone: "decision",
          steps: [
            "Obstructive sleep apnoea - STOP-BANG, Epworth over 10",
            "Restless legs syndrome - five criteria, ferritin under 75 ng/mL",
            "REM sleep behaviour disorder - dream enactment over the age of 50",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Stepwise management of chronic insomnia",
      steps: [
        {
          label: "Two-week sleep diary",
          detail: "Total sleep time and sleep efficiency, not hours spent in bed",
        },
        {
          label: "Treat the cause that is found",
          detail: "Pain, nocturia, reflux, depression, alcohol, caffeine and the drug list",
        },
        {
          label: "CBT-I - first line in every guideline",
          detail: "Five components; stimulus control and sleep restriction carry most of the effect and outlast drugs at 6-12 months",
          tone: "good",
        },
        {
          label: "Sleep hygiene alongside, never alone",
          detail: "Prescribing it on its own is the commonest examination error",
          tone: "warn",
        },
        {
          label: "Hypnotic only if severe, and short",
          detail: "Zolpidem 5-10 mg or zopiclone 3.75-7.5 mg for 2-4 weeks, intermittently, with a written stop date and never an open repeat",
        },
        {
          label: "Sedating antidepressant if depressed",
          detail: "Mirtazapine 7.5-15 mg or trazodone 25-100 mg at night; melatonin 2 mg PR over 55 or for circadian problems",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Sleep restriction, step by step",
      caption: "For the patient in bed 9 hours and asleep 5.5 - a sleep efficiency of about 61 percent.",
      steps: [
        {
          label: "Take average total sleep time from the diary",
          detail: "This figure, not the time in bed, is the starting allowance",
        },
        {
          label: "Set time in bed to that figure",
          detail: "Never below 5 hours",
          tone: "warn",
        },
        {
          label: "Fix the rising time every day",
          detail: "The same time regardless of how the night went; no daytime naps",
        },
        {
          label: "Recalculate sleep efficiency weekly",
          detail: "Total sleep time divided by time in bed",
          tone: "decision",
        },
        {
          label: "Efficiency over 85-90 percent for a week",
          detail: "Add 15-20 minutes to the time in bed and repeat weekly until he is sleeping enough",
          tone: "good",
        },
        {
          label: "Do not use it in these patients",
          detail: "Bipolar disorder, epilepsy, untreated obstructive sleep apnoea, drivers of heavy vehicles; warn all others of sleepiness in the first fortnight",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Three sleep disorders not to miss",
      columns: ["Feature", "Obstructive sleep apnoea", "Restless legs syndrome", "REM sleep behaviour disorder"],
      rows: [
        [
          "The story",
          "Loud snoring, witnessed apnoeas, choking arousals, unrefreshing sleep, morning headache",
          "Urge to move the legs with an unpleasant sensation, worse at rest and in the evening, relieved by movement",
          "Shouting, punching and kicking while acting out vivid dreams",
        ],
        [
          "Who gets it",
          "Obese, large neck, resistant hypertension, nocturia, atrial fibrillation, diabetes",
          "Iron deficiency, pregnancy, chronic kidney disease",
          "Men over 50",
        ],
        [
          "The test",
          "STOP-BANG and Epworth, then polysomnography or a home study",
          "Serum ferritin - supplement if under 75 ng/mL even with a normal haemoglobin",
          "Clinical picture; refer neurologically",
        ],
        [
          "Treatment",
          "Weight loss (10 percent cuts the AHI by about 25 percent), no alcohol or sedatives, CPAP if AHI 15 or more",
          "Oral iron first; then gabapentin 300 mg or pregabalin 75 mg at night",
          "Make the bedroom safe; melatonin 3-12 mg or clonazepam 0.25-0.5 mg at night",
        ],
        [
          "The trap",
          "Never prescribe a hypnotic while it is untreated - it worsens the apnoeas",
          "Dopamine agonists cause augmentation with long-term use",
          "It is a prodrome of Parkinson's disease, Lewy body dementia and multiple system atrophy",
        ],
      ],
    },
  ],

  "psychiatry-psychosis-schizophrenia": [
    {
      kind: "branch",
      heading: "Causes of a first psychotic episode",
      caption: "Always exclude an organic cause before accepting a psychiatric one.",
      root: "Delusions, hallucinations, disorganised speech",
      arms: [
        {
          label: "Organic - exclude first",
          tone: "warn",
          steps: [
            "Delirium is the single most important mimic",
            "Hypoglycaemia, hyponatraemia, hypercalcaemia, uraemia, hepatic encephalopathy",
            "Meningitis, encephalitis, cerebral malaria, HIV, neurosyphilis",
            "Temporal lobe epilepsy, head injury, stroke, tumour, lupus, anti-NMDA encephalitis",
            "Wilson's disease under 40 with tremor, dystonia or deranged liver function",
          ],
        },
        {
          label: "Substance-induced",
          steps: [
            "Cannabis is the commonest in Indian practice",
            "Alcohol - hallucinosis and delirium tremens; stimulants, cocaine, inhalants",
            "Steroids, levodopa, isoniazid, efavirenz, mefloquine, high-dose tramadol",
            "Close temporal link to use or withdrawal; clears over days to weeks",
          ],
        },
        {
          label: "Primary psychiatric",
          steps: [
            "Schizophrenia - 6 months of continuous disturbance",
            "Schizophreniform disorder - 1 to 6 months",
            "Brief psychotic disorder - under a month with return to premorbid function",
            "Schizoaffective, psychotic depression or mania if mood is prominent",
          ],
        },
        {
          label: "Postpartum psychosis",
          tone: "warn",
          steps: [
            "Onset within days to two weeks of delivery",
            "Confusion, rapidly shifting mood, delusions about the baby, insomnia",
            "Same-day admission - risk of suicide and infanticide",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Antipsychotic movement disorders and NMS",
      caption: "Know the timing and the antidote for each - it is a standing viva question.",
      columns: ["Problem", "When", "How it looks", "What to do"],
      rows: [
        [
          "Acute dystonia",
          "Hours to days",
          "Oculogyric crisis, torticollis, trismus, opisthotonus, laryngospasm",
          "Promethazine 25-50 mg IM or IV, or trihexyphenidyl 2 mg orally - relief in minutes; then reduce or change the drug",
        ],
        [
          "Akathisia",
          "Days to weeks",
          "Unbearable inner restlessness and pacing, mistaken for worsening psychosis; a recognised cause of suicide",
          "Reduce the dose or switch; propranolol 10-40 mg BD to TDS; a short course of clonazepam",
        ],
        [
          "Parkinsonism",
          "Weeks",
          "Bradykinesia, rigidity, tremor, mask facies, shuffling gait",
          "Reduce the dose, switch to quetiapine or aripiprazole, or trihexyphenidyl 2 mg BD",
        ],
        [
          "Tardive dyskinesia",
          "Months to years",
          "Involuntary movements, often irreversible",
          "Switch to clozapine and stop anticholinergics, which make it worse",
        ],
        [
          "Neuroleptic malignant syndrome",
          "24-72 hours",
          "Hyperthermia, lead-pipe rigidity, altered sensorium, autonomic instability, raised CK; about 10 percent mortality",
          "Stop the antipsychotic at once, admit, cool, hydrate aggressively, benzodiazepine; bromocriptine or dantrolene if severe",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The acutely agitated psychotic patient",
      caption: "De-escalation comes before any injection.",
      steps: [
        {
          label: "De-escalate first",
          detail: "Quiet space, calm single voice, remove the audience, offer food or a drink",
        },
        {
          label: "Offer oral treatment",
          detail: "Risperidone 1-2 mg, olanzapine 5-10 mg including the orodispersible form, or lorazepam 1-2 mg",
          tone: "decision",
        },
        {
          label: "If IM is unavoidable",
          detail: "Haloperidol 5-10 mg plus promethazine 25-50 mg IM - the TREC combination validated in Indian emergency practice",
        },
        {
          label: "Alternative injection",
          detail: "Lorazepam 2-4 mg IM",
        },
        {
          label: "Never IM olanzapine after a benzodiazepine",
          detail: "IM olanzapine 10 mg must not be given within an hour of parenteral benzodiazepine - cardiorespiratory depression",
          tone: "warn",
        },
        {
          label: "Monitor and document",
          detail: "Pulse, blood pressure, temperature, oxygen saturation and consciousness; record the reason for and duration of any restraint",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Escalating drug treatment in schizophrenia",
      caption: "Relapse at one year is 60-80 percent without medication and 15-25 percent with it.",
      steps: [
        {
          label: "One second-generation antipsychotic",
          detail: "Risperidone 1-2 mg at night rising to 2-6 mg daily - cheap, effective and available in the District Mental Health Programme",
        },
        {
          label: "Give it an adequate trial",
          detail: "4-6 weeks at a therapeutic dose, one drug at a time; two antipsychotics together is polypharmacy without benefit",
          tone: "decision",
        },
        {
          label: "Switch to a second antipsychotic",
          detail: "Olanzapine 10-20 mg, aripiprazole 10-30 mg or quetiapine 150-600 mg, again for 4-6 weeks",
        },
        {
          label: "Two failed trials means resistance",
          detail: "Refer for clozapine from 12.5 mg to 200-450 mg - the only drug proven superior, needing neutrophil monitoring for agranulocytosis in about 0.8 percent",
          tone: "warn",
        },
        {
          label: "Long-acting injectable for non-adherence",
          detail: "Risperidone, paliperidone, flupentixol or haloperidol decanoate; non-adherence is the commonest reason for readmission",
        },
        {
          label: "Continue to prevent relapse",
          detail: "At least 1-2 years after a first episode, indefinitely after two or more episodes or a suicide attempt",
          tone: "good",
        },
      ],
    },
  ],

  "psychiatry-delirium-dementia": [
    {
      kind: "compare",
      heading: "Delirium versus dementia versus depression",
      caption: "The distinction decides the management; pseudodementia is fully treatable.",
      columns: ["Feature", "Delirium", "Dementia", "Depression"],
      rows: [
        ["Onset", "Hours to days, acute", "Months to years, insidious", "Weeks, often after a loss"],
        [
          "Course in the day",
          "Fluctuates, lucid intervals, worse at night",
          "Stable through the day, slowly progressive",
          "Stable, may be worse in the morning",
        ],
        ["Attention", "Impaired - the cardinal feature", "Normal until late", "Distractible but testable"],
        [
          "Level of consciousness",
          "Altered - drowsy or hypervigilant",
          "Clear until very late",
          "Clear",
        ],
        [
          "Hallucinations",
          "Common, typically visual",
          "Uncommon except in Lewy body dementia",
          "Rare except in psychotic depression",
        ],
        [
          "Cognitive testing",
          "Inconsistent, rambling",
          "Near-miss answers, confabulation, tries hard",
          "Answers of I do not know, poor effort",
        ],
        [
          "Reversibility",
          "Usually reversible if the cause is treated",
          "Progressive and largely irreversible",
          "Reversible with antidepressant treatment",
        ],
        [
          "Immediate action",
          "Medical emergency - find and treat the cause",
          "Assess function, exclude reversible causes, plan care",
          "Treat with an SSRI and reassess cognition",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "PINCH ME - the causes of delirium",
      caption: "Use the mnemonic so that nothing is missed; infection is the commonest precipitant in Indian practice.",
      root: "Acute confusion in an older patient",
      arms: [
        {
          label: "Pain and Infection",
          tone: "warn",
          steps: [
            "Untreated pain is itself a cause - give regular paracetamol",
            "Urinary tract infection, pneumonia, cellulitis",
            "Malaria, typhoid, dengue, tuberculosis",
            "Sepsis without fever, or an unnoticed foot infection in a diabetic",
          ],
        },
        {
          label: "Nutrition and Constipation",
          steps: [
            "Hypoglycaemia and thiamine deficiency",
            "Constipation and faecal impaction - do a rectal examination",
            "Urinary retention - palpate or scan the bladder",
          ],
        },
        {
          label: "Hydration and electrolytes",
          steps: [
            "Dehydration, hyponatraemia and hypernatraemia",
            "Hypercalcaemia, uraemia, hepatic encephalopathy",
            "Hypoxia and hypercapnia, thyroid disease, B12 deficiency, anaemia",
          ],
        },
        {
          label: "Medication and withdrawal",
          tone: "warn",
          steps: [
            "Anticholinergics - oxybutynin, promethazine, hyoscine, tricyclics",
            "Benzodiazepines and Z-drugs, opioids especially tramadol and pethidine",
            "Steroids, levodopa, digoxin, lithium, fluoroquinolones, metoclopramide",
            "Withdrawal from alcohol, benzodiazepines or nicotine",
          ],
        },
        {
          label: "Environment",
          steps: [
            "Sensory deprivation - missing spectacles and hearing aids",
            "A change of place and night-time disorientation",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Delirium: from suspicion to follow-up",
      steps: [
        {
          label: "Capillary glucose at the bedside",
          detail: "Immediately, before anything else",
        },
        {
          label: "Confirm with the CAM",
          detail: "Acute onset with a fluctuating course AND inattention, PLUS either disorganised thinking OR an altered level of consciousness",
          tone: "decision",
        },
        {
          label: "Search for the cause - PINCH ME",
          detail: "Blood count, urea, creatinine, sodium, calcium, liver function, TSH, B12, CRP, urine, chest film, ECG and medication reconciliation",
        },
        {
          label: "Image when indicated",
          detail: "CT head for focal signs, head injury or a fall, anticoagulation, a first seizure, or when no cause is found; lumbar puncture if meningism",
          tone: "warn",
        },
        {
          label: "Treat the cause, stop the culprit drug",
          detail: "Rehydrate, correct sodium and glucose, treat the infection, relieve retention and constipation, control pain, correct hypoxia",
          tone: "good",
        },
        {
          label: "Non-drug package first",
          detail: "Antipsychotics do not treat delirium and do not shorten it; the multicomponent package prevents about a third of cases",
          tone: "warn",
        },
        {
          label: "Drug only for danger or severe distress",
          detail: "Haloperidol 0.25-0.5 mg orally or IM, usual maximum 2-3 mg in 24 hours in an older person, reviewed daily and stopped as soon as possible",
        },
        {
          label: "Reassess cognition at 4-8 weeks",
          detail: "A first delirium frequently unmasks an undiagnosed dementia; record the episode prominently",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Drugs in delirium and dementia",
      columns: ["Situation", "Drug and dose", "Caution"],
      rows: [
        [
          "Delirium with danger or severe distress",
          "Haloperidol 0.25-0.5 mg orally or IM, usually maximum 2-3 mg in 24 hours in the elderly",
          "Does not treat or shorten the delirium; lowest dose, shortest time, review daily",
        ],
        [
          "Delirium in Parkinson's or Lewy body dementia",
          "Quetiapine 12.5-25 mg, or clozapine under specialist care",
          "Haloperidol and risperidone can cause severe, sometimes irreversible extrapyramidal deterioration",
        ],
        [
          "Alzheimer's disease, mild to moderate",
          "Donepezil 5 mg at night for 4 weeks then 10 mg; or rivastigmine or galantamine",
          "Bradycardia, syncope, nausea, diarrhoea, vivid dreams; avoid in bradyarrhythmia and active peptic ulcer",
        ],
        [
          "Alzheimer's disease, moderate to severe",
          "Memantine 5 mg with weekly increments to 10 mg twice daily, alone or with donepezil",
          "Reduce in renal impairment; dizziness and confusion",
        ],
        [
          "Agitation and aggression in dementia",
          "Non-drug measures first; if essential, risperidone 0.25-0.5 mg or quetiapine 12.5-25 mg",
          "Antipsychotics increase stroke and death in dementia; review every 6-12 weeks and stop when possible",
        ],
        [
          "Vascular dementia",
          "No drug for the cognitive decline",
          "Risk factor control only",
        ],
      ],
    },
  ],

  "psychiatry-somatic-symptom-disorder": [
    {
      kind: "compare",
      heading: "Telling apart the unexplained-symptom disorders",
      caption: "DSM-5 no longer requires the symptoms to be medically unexplained - the psychological criterion makes the diagnosis.",
      columns: ["Disorder", "Core feature", "Intentional?", "What to do"],
      rows: [
        [
          "Somatic symptom disorder",
          "Distressing symptoms for 6 months or more plus disproportionate thoughts, anxiety or time devoted",
          "No - the distress is genuine",
          "One doctor, timed appointments, positive explanation, treat comorbidity, CBT",
        ],
        [
          "Illness anxiety disorder",
          "Preoccupation with having a serious illness, with minimal symptoms",
          "No",
          "CBT and an SSRI; reduce reassurance-seeking and body-checking",
        ],
        [
          "Functional neurological disorder",
          "Neurological symptoms with positive internal inconsistency such as Hoover's sign",
          "No",
          "Positive explanation with the sign demonstrated, physiotherapy-led rehabilitation",
        ],
        [
          "Factitious disorder",
          "Deliberate falsification or induction of illness",
          "Yes - to assume the sick role",
          "Avoid confrontation, limit investigation, involve psychiatry",
        ],
        [
          "Malingering",
          "Deliberate falsification",
          "Yes - for external gain such as money, leave or drugs",
          "Not a psychiatric diagnosis; document objectively and refuse the gain",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The three-stage reattribution consultation",
      caption: "Goldberg and Gask - naming a mechanism converts an anxious, searching patient into a treatable one.",
      steps: [
        {
          label: "Stage 1 - feeling understood",
          detail: "Take the full history, ask about mood and social factors, and examine the patient properly",
        },
        {
          label: "Stage 2 - broadening the agenda",
          detail: "Feed back the normal findings, acknowledge that the symptom is real, and link its timing to the life events already elicited",
        },
        {
          label: "Stage 3 - making the link",
          detail: "Give a physiological mechanism, not a psychological accusation - a tense muscle aches exactly as it does after heavy work",
          tone: "good",
        },
        {
          label: "Name the specific fear and exclude it",
          detail: "Say explicitly that examination and tests have ruled out the cancer, brain tumour or HIV he fears",
        },
        {
          label: "Agree the rule about future tests",
          detail: "No repeat test without a new sign; any new symptom assessed at the next scheduled visit rather than in casualty",
        },
        {
          label: "Never say there is nothing wrong",
          detail: "All the tests are normal, so forget it - is what starts the doctor-shopping; say instead that the dangerous causes are excluded and the cause is now known",
          tone: "warn",
        },
        {
          label: "Write it down, involve the family",
          detail: "In the local language, so the explanation survives the journey home; the family drives the investigation-seeking",
        },
      ],
    },
    {
      kind: "flow",
      heading: "The structure of care that works",
      steps: [
        {
          label: "One doctor, one plan",
          detail: "Nominate yourself as the single point of contact; fragmented care is the main driver of chronicity and iatrogenic harm",
        },
        {
          label: "Timed 15-minute review every 2-4 weeks",
          detail: "Whether or not the symptom is bad - it removes the need to be ill in order to be seen, and is the point examiners look for",
          tone: "good",
        },
        {
          label: "Screen and treat the comorbidity",
          detail: "Depression or anxiety in 50-70 percent; escitalopram 10-20 mg or sertraline 50-200 mg at full dose for 6-12 months",
        },
        {
          label: "Pain-modulating drugs where pain dominates",
          detail: "Amitriptyline 10-25 mg at night rising to 50-75 mg, or duloxetine 30-60 mg, presented honestly as pain-modulating drugs",
        },
        {
          label: "Functional goals, not cure",
          detail: "Walking 20 minutes a day, part-time work, a household task, a graded activity diary; rest worsens deconditioning and pain",
        },
        {
          label: "Stop the harm",
          detail: "No opioids or benzodiazepines, no repeat endoscopy or imaging, no surgery for functional pain, no vitamin injections",
          tone: "warn",
        },
        {
          label: "Safety-net every new symptom",
          detail: "A new or changed pattern is assessed on its merits - these patients develop organic disease at the same rate as everyone else",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "PHQ-15 burden and the care it earns",
      steps: [
        {
          label: "0-4 minimal",
          detail: "Explanation and reassurance; no follow-up structure needed",
        },
        {
          label: "5-9 low",
          detail: "Positive explanation, do the PHQ-9 and GAD-7, review once at 4 weeks",
        },
        {
          label: "10-14 medium",
          detail: "Timed 2-4 weekly appointments, treat comorbid depression or anxiety, graded activity, no repeat investigation",
          tone: "decision",
        },
        {
          label: "15-30 high",
          detail: "Structured care with one named doctor, SSRI or amitriptyline as indicated, CBT referral, functional goals, consider psychiatric referral",
          tone: "warn",
        },
      ],
    },
  ],
};

export default diagrams;
