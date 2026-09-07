import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "psychiatry-depression",
  title: "Depression: PHQ-9, drug choice and suicide risk assessment",
  oneLiner:
    "Major depressive disorder is a persistent lowering of mood or loss of interest for at least two weeks with at least five of nine DSM-5 symptoms causing functional impairment; in family practice it is detected with the PHQ-2 and graded with the PHQ-9, treated with an SSRI such as escitalopram or sertraline plus structured follow-up, and every case is asked directly about suicidal thoughts because the question does not plant the idea and the answer changes the plan.",
  frequency: "core",
  keywords: [
    "major depressive disorder",
    "PHQ-9",
    "PHQ-2",
    "escitalopram",
    "sertraline",
    "fluoxetine",
    "amitriptyline",
    "mirtazapine",
    "suicide risk assessment",
    "hyponatraemia SSRI",
    "serotonin syndrome",
    "postpartum depression",
    "dysthymia",
    "bipolar screening",
    "National Mental Health Programme",
    "Tele-MANAS",
  ],
  sections: [
    {
      heading: "Burden and where it hides in family practice",
      points: [
        "The National Mental Health Survey of India (2015-16) found a **current prevalence of depressive disorders of about 2.7% and a lifetime prevalence of 5.3%**, with a treatment gap above 85%; more than half of patients with depression present to a general practitioner rather than a psychiatrist.",
        "In the Indian family practice waiting room depression presents as **bodily complaints** - fatigue, headache, generalised body pain, burning sensations, gas, poor sleep and poor appetite - and the mood symptom emerges only when asked for; this is not denial but the culturally normal idiom of distress.",
        "Depression is two to three times commoner in patients with **diabetes, ischaemic heart disease, stroke, chronic pain, cancer and post-partum women**, and it doubles non-adherence and mortality in those conditions, so screening belongs in chronic disease visits.",
        "**Screen with the PHQ-2**: over the last two weeks, how often have you been bothered by little interest or pleasure in doing things, and by feeling down, depressed or hopeless; a score of 3 or more out of 6 has a sensitivity of about 80% and should be followed by the full PHQ-9.",
        "Ask every patient with unexplained multiple somatic symptoms, more than three visits in three months, chronic disease with poor control, or a recent loss, the two screening questions - it costs thirty seconds and finds most cases.",
      ],
    },
    {
      heading: "Diagnosis: DSM-5 criteria and grading with the PHQ-9",
      points: [
        "**DSM-5 major depressive episode**: five or more of nine symptoms for at least **two weeks**, at least one being depressed mood or anhedonia - the others are change in appetite or weight, insomnia or hypersomnia, psychomotor agitation or retardation, fatigue, worthlessness or excessive guilt, poor concentration, and recurrent thoughts of death or suicide - with impairment of function and not attributable to a substance or medical condition.",
        "The **PHQ-9 scores each of these nine symptoms from 0 (not at all) to 3 (nearly every day) over the past two weeks**, total 0-27: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe; a score of 10 or more has 88% sensitivity and 88% specificity for major depression, and it is validated in Hindi, Tamil, Kannada, Malayalam and other Indian languages.",
        "**Item 9 of the PHQ-9** - thoughts that you would be better off dead or of hurting yourself - is not a suicide risk assessment; any positive answer means a direct suicide enquiry the same visit, and the tenth question on functional difficulty is what decides treatment intensity.",
        "Before calling it unipolar depression ask about **mania and hypomania** - any period of a week of unusually elevated or irritable mood with reduced need for sleep, pressured talk, overspending or grandiosity - because an antidepressant alone in bipolar disorder precipitates mania; the family is a better historian than the patient here.",
        "Exclude the medical mimics that a family physician is best placed to find: **hypothyroidism, anaemia, vitamin B12 deficiency, diabetes, obstructive sleep apnoea, Cushing's, Parkinson's disease, chronic alcohol use and drugs** such as beta-blockers, steroids, isotretinoin, levetiracetam and reserpine-containing antihypertensives.",
        "**Persistent depressive disorder (dysthymia)** is depressed mood on more days than not for two years with two or more of appetite, sleep, energy, self-esteem, concentration or hopelessness symptoms; **grief** is distinguished by waves of longing centred on the loss with preserved self-esteem, whereas depression is pervasive with guilt and worthlessness, and grief lasting beyond 12 months with impairment is prolonged grief disorder.",
      ],
    },
    {
      heading: "Suicide risk assessment: how to ask and what to do",
      points: [
        "India records more than 1.7 lakh suicides a year (NCRB 2022), the commonest age group is 18-45, and pesticide ingestion and hanging are the commonest methods; **asking about suicide does not increase risk** - it is the single most protective act in the consultation and every examiner expects to hear you say it.",
        "Ask in graded steps, in the patient's language: **'Sometimes when people feel this low they feel life is not worth living - has that happened to you?'**, then 'Have you had thoughts of ending your life?', then 'Have you thought about how you would do it?', then 'Have you made any preparation - kept anything aside, written anything?', then 'Have you tried anything?'.",
        "Record the five dimensions that decide the level of risk: **ideation** (passive or active), **plan** (specific and lethal or vague), **means** (pesticide at home, sleeping tablets, rope), **intent and preparation** (giving away belongings, farewell notes), and **past attempts** - a previous attempt is the strongest single predictor.",
        "Risk multipliers that push the level up: male sex, age over 60 or under 25, living alone, recent loss or humiliation, unemployment or debt, chronic painful illness, alcohol or substance use, psychosis or severe hopelessness, a family history of suicide, and access to pesticides in farming households.",
        "Protective factors to elicit and use: dependent children, religious beliefs against suicide, a spouse or parent who can stay with the patient, willingness to engage with treatment, and a reason for living the patient can name when asked.",
        "**High risk (active ideation with plan, means and intent, or a recent attempt, or psychosis) means same-day psychiatric assessment and admission**, never a prescription and an appointment next week; **moderate risk** (ideation without plan or intent, no attempt) is managed with the family informed, means removed, a written safety plan, treatment started, and review within 48-72 hours; **low risk** (fleeting passive thoughts, no plan, good supports) is treated with weekly review and the safety plan.",
        "The **safety plan** written with the patient contains warning signs, coping steps, people to call, the family physician's number, the **Tele-MANAS helpline 14416 (or 1-800-891-4416)**, and a commitment by a named relative to keep pesticides, ropes and tablets out of the house; dispense antidepressants in small quantities and avoid tricyclics in anyone at risk because a week's supply of amitriptyline is lethal in overdose.",
      ],
    },
    {
      heading: "Treatment: choosing and starting an antidepressant",
      points: [
        "**Mild depression (PHQ-9 5-9)**: no drug at first - psychoeducation, behavioural activation (a daily schedule of small pleasurable and mastery activities), sleep hygiene, 30 minutes of walking daily, problem-solving counselling, and review in two weeks; drugs are added if it persists beyond 4-6 weeks or there is a past history of moderate depression.",
        "**Moderate to severe depression (PHQ-9 10 or more)**: an **SSRI plus psychological support** - **escitalopram 10 mg once daily in the morning** (5 mg in the elderly, maximum 20 mg), or **sertraline 50 mg once daily** (start 25 mg, maximum 200 mg), or **fluoxetine 20 mg** which is the cheapest and on the Essential Medicines List; explain that benefit begins at 2 weeks and is judged at 4-6 weeks, that early nausea, headache and restlessness settle in a week, and that the drug is not habit-forming.",
        "**Match the drug to the patient**: sertraline in cardiac disease and post-MI (SADHART trial) and in pregnancy and lactation; fluoxetine where cost matters and adherence is poor because of its long half-life; **mirtazapine 7.5-30 mg at night** where insomnia and weight loss dominate or SSRIs cause sexual dysfunction; **amitriptyline 25-75 mg at night** only when there is coexisting neuropathic pain or migraine, and never in cardiac disease, the elderly or a patient at suicide risk; avoid paroxetine in pregnancy and in the elderly (anticholinergic, withdrawal).",
        "**Warn about the SSRI problems that reach the exam**: hyponatraemia in the elderly (check sodium at 2 weeks if over 65 or on a diuretic), GI bleeding with NSAIDs or aspirin (add a proton pump inhibitor), sexual dysfunction, a transient rise in anxiety and suicidal thinking in those under 25 in the first weeks, QT prolongation with citalopram above 40 mg, and serotonin syndrome with tramadol, linezolid, triptans or St John's wort.",
        "An adequate trial is **4-6 weeks at a therapeutic dose**; if there is no response, check adherence and alcohol, then increase the dose, then switch to another SSRI or mirtazapine or venlafaxine 75-150 mg (watch blood pressure), and refer if two adequate trials fail, if there are psychotic features, or if bipolarity is suspected.",
        "**Continue for at least 6-9 months after remission for a first episode and 2 years or longer after a second or third episode**, then taper over 4 weeks to avoid discontinuation symptoms (dizziness, electric-shock sensations, irritability - worst with paroxetine and venlafaxine, least with fluoxetine).",
      ],
    },
    {
      heading: "Follow-up, special groups and the system around the patient",
      points: [
        "Review at **2 weeks (side effects, adherence, suicide enquiry), 4 weeks (PHQ-9 repeated), 6-8 weeks (decide on dose increase or switch)** and then monthly; response is a 50% fall in the PHQ-9 and remission is a score under 5, which is the target, because residual symptoms predict relapse.",
        "**Postpartum depression** affects 15-20% of Indian mothers, is screened with the Edinburgh Postnatal Depression Scale (score 13 or more) at the 6-week visit and at immunisation contacts, and is treated with sertraline 50 mg which has the lowest breast-milk transfer; ask about thoughts of harming the baby, and treat delusions, confusion or severe insomnia after delivery as **postpartum psychosis**, a same-day emergency.",
        "In the **elderly**, depression masquerades as memory complaints (pseudodementia), somatic preoccupation and agitation; start escitalopram 5 mg or sertraline 25 mg, check sodium, and watch falls; in **adolescents**, fluoxetine is the only SSRI with clear evidence, started at 10 mg with weekly review for the first month because of the early rise in suicidal ideation.",
        "In **diabetes and heart disease**, an SSRI improves glycaemic control and adherence; sertraline is safest after myocardial infarction, escitalopram has few interactions with metformin, statins or antiplatelets, and depression should be entered on the problem list with a PHQ-9 score at every chronic disease review.",
        "The family physician works inside a system: the **District Mental Health Programme** under the National Mental Health Programme provides free psychiatric drugs at the district hospital and community health centres, **Tele-MANAS (14416)** offers 24-hour counselling in regional languages, and the **Mental Healthcare Act 2017 (section 115) decriminalised attempted suicide**, presuming severe stress and placing a duty on the government to provide care, so a patient after an attempt is treated and not reported as an accused.",
        "Refer to a psychiatrist for high suicide risk, psychotic symptoms, bipolar features, failure of two adequate antidepressant trials, severe depression with refusal of food and fluids (needs admission and possibly ECT), pregnancy with severe depression, and depression in a child under 12.",
      ],
    },
  ],
  tables: [
    {
      heading: "PHQ-9 scoring and the action it triggers",
      columns: ["PHQ-9 total", "Severity", "Action in family practice"],
      rows: [
        ["0-4", "None or minimal", "No treatment; re-screen at next chronic disease review"],
        ["5-9", "Mild", "Psychoeducation, behavioural activation, exercise, sleep; review in 2 weeks; drug only if persistent or past history"],
        ["10-14", "Moderate", "SSRI plus supportive counselling; review at 2 and 4 weeks; PHQ-9 repeated at 4 weeks"],
        ["15-19", "Moderately severe", "SSRI without delay plus structured psychotherapy where available; ask about suicide at every visit; review in 1-2 weeks"],
        ["20-27", "Severe", "SSRI, same-day suicide risk assessment, involve family, psychiatric referral; admit if psychotic, not eating or at high risk"],
      ],
    },
    {
      heading: "Antidepressants for family practice: doses and when to choose each",
      columns: ["Drug", "Starting dose", "Usual range", "Choose when", "Avoid or caution"],
      rows: [
        ["Escitalopram", "5-10 mg OM", "10-20 mg", "First choice generally; few interactions; elderly at 5 mg", "QT prolongation at high dose; hyponatraemia in elderly"],
        ["Sertraline", "25-50 mg OM", "50-200 mg", "Cardiac disease, post-MI, pregnancy, lactation, anxiety comorbidity", "GI upset, diarrhoea early"],
        ["Fluoxetine", "20 mg OM", "20-60 mg", "Low cost, poor adherence, adolescents, atypical features", "Long half-life; interactions via CYP2D6; activation, insomnia"],
        ["Mirtazapine", "7.5-15 mg HS", "15-45 mg", "Insomnia, poor appetite, weight loss, SSRI sexual dysfunction", "Weight gain, sedation; not for the obese diabetic"],
        ["Amitriptyline", "10-25 mg HS", "50-150 mg", "Coexisting neuropathic pain, migraine, insomnia in the young", "Lethal in overdose; cardiac disease, elderly, glaucoma, prostatism"],
        ["Venlafaxine", "37.5-75 mg OM", "75-225 mg", "SSRI failure, melancholic features, pain", "Raises blood pressure; bad discontinuation syndrome"],
      ],
    },
  ],
  redFlags: [
    "Active suicidal ideation with a plan, access to means (pesticide, tablets, rope) and intent, or any attempt in the past month - same-day psychiatric assessment and admission, never a prescription with a routine appointment.",
    "Psychotic symptoms - delusions of guilt, poverty or disease, hallucinations, or nihilistic beliefs - which need antipsychotic co-treatment and often admission.",
    "Refusal of food and fluids, marked psychomotor retardation or stupor - the depressive emergency for which ECT is life-saving.",
    "A history or family history of mania, or an antidepressant that has produced elation, reduced sleep or pressured speech - stop the antidepressant and refer for bipolar management.",
    "Postpartum onset with confusion, delusions about the baby or thoughts of harming the infant - postpartum psychosis, a psychiatric emergency for mother and child.",
    "Depression with unexplained weight loss, fever, focal neurological signs or onset over 60 with cognitive change - look for an organic cause before treating the mood.",
  ],
  pearls: [
    "PHQ-2 to screen, PHQ-9 to grade and to follow; a score of 10 or more is the threshold for an antidepressant, and remission is a score under 5.",
    "Asking about suicide does not cause suicide; not asking does. Ideation, plan, means, intent and past attempts are the five words to write in the notes.",
    "Escitalopram 10 mg or sertraline 50 mg in the morning, benefit at 2-4 weeks, judge at 6, continue 6-9 months after remission for a first episode and 2 years after a recurrence.",
    "Never prescribe a tricyclic to a patient at suicide risk; a fortnight's amitriptyline is a lethal dose, and dispense any antidepressant in small quantities to a high-risk patient.",
    "Screen for mania before every antidepressant prescription, and check sodium in anyone over 65 two weeks after starting an SSRI.",
  ],
  theory: [
    {
      id: "psychiatry-depression-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 45-year-old woman attends with three months of tiredness, body pain, poor sleep and loss of interest in her household work. Describe how you would diagnose depression, assess her risk of suicide, and manage her in family practice.",
      openingLines: [
        "Major depressive disorder is defined by DSM-5 as depressed mood or loss of interest for at least two weeks together with a total of five or more of nine symptoms - sleep, appetite, energy, concentration, psychomotor change, guilt or worthlessness and thoughts of death - causing functional impairment and not due to a substance or medical illness.",
        "In Indian family practice it presents through somatic complaints as in this woman, and the objectives are to confirm the diagnosis with the PHQ-9, exclude medical mimics and bipolarity, assess suicide risk directly, start an SSRI with psychoeducation, and follow her to remission.",
      ],
      answer: [
        {
          heading: "1. History and confirming the diagnosis",
          points: [
            "Ask the PHQ-2 screening questions and then all nine PHQ-9 items over the past two weeks; record the total and the functional item.",
            "Enquire about each DSM-5 symptom in her own idiom - sleep, appetite and weight, energy, concentration, guilt, hopelessness, thoughts of death.",
            "Screen for mania or hypomania in the past (elevated mood, reduced need for sleep, overspending) and for psychotic symptoms.",
            "Take a stressor and social history: marital and domestic violence, financial strain, bereavement, children, in-laws, work; ask about alcohol in the husband and herself.",
            "Medical mimics: hypothyroidism, anaemia, diabetes, menopause, chronic pain, and drugs such as beta-blockers or steroids; past depression and family history of depression or suicide.",
          ],
        },
        {
          heading: "2. Suicide risk assessment",
          points: [
            "Ask directly and in graded steps: life not worth living, thoughts of ending life, a method, preparation, previous attempts.",
            "Record ideation, plan, means (pesticides, tablets), intent and past attempts, plus risk multipliers (alcohol, isolation, hopelessness, chronic illness) and protective factors (children, faith, family support).",
            "Classify the risk as low, moderate or high; high risk (plan plus means plus intent or a recent attempt) means same-day psychiatric assessment and admission with a family member.",
            "For moderate or low risk write a safety plan, involve a named relative, remove means from the house, give the Tele-MANAS number 14416, and fix a review within 48-72 hours to one week.",
          ],
        },
        {
          heading: "3. Examination and investigations",
          points: [
            "General and mental state examination: appearance, psychomotor retardation, affect, speech, thought content including guilt and suicidal ideas, cognition; look for pallor, goitre, and signs of injury.",
            "Haemoglobin, fasting glucose, TSH, and where indicated vitamin B12, calcium and liver function; investigations are to exclude mimics, not to diagnose depression.",
          ],
        },
        {
          heading: "4. Treatment",
          points: [
            "Psychoeducation: depression is a treatable illness, not weakness; explain the PHQ-9 result and the plan to the patient and one relative.",
            "Mild (PHQ-9 5-9): behavioural activation, daily walking, sleep hygiene, problem-solving counselling and review in two weeks.",
            "Moderate to severe (PHQ-9 10 or more): escitalopram 10 mg in the morning or sertraline 50 mg, explaining delayed onset over 2-4 weeks and transient nausea; mirtazapine 15 mg at night if insomnia and poor appetite dominate.",
            "Avoid amitriptyline if there is any suicide risk; use sertraline if she has cardiac disease or is breastfeeding.",
            "Address the social driver: counselling with the spouse, referral to a protection officer if domestic violence, and linkage to the District Mental Health Programme for free drugs and a counsellor.",
          ],
        },
        {
          heading: "5. Follow-up and referral",
          points: [
            "Review at 2 weeks (side effects, adherence, suicide enquiry), 4 weeks (repeat PHQ-9), and 6-8 weeks to increase the dose or switch if the score has not fallen by half.",
            "Target remission (PHQ-9 under 5); continue for 6-9 months after remission for a first episode, 2 years after a recurrence, then taper over 4 weeks.",
            "Refer for high suicide risk, psychosis, bipolar features, failure of two adequate trials, or refusal of food and fluids.",
          ],
        },
      ],
      mustDraw: [
        "A table of PHQ-9 severity bands with the corresponding action.",
        "A flow chart: screen (PHQ-2), grade (PHQ-9), exclude bipolar and organic causes, assess suicide risk, treat by severity, review at 2, 4 and 6 weeks.",
      ],
      markSplit: [
        { part: "Definition and DSM-5 criteria with PHQ-9", marks: 2 },
        { part: "History including mania screen and mimics", marks: 2 },
        { part: "Suicide risk assessment and safety plan", marks: 2 },
        { part: "Drug and non-drug treatment with doses", marks: 2.5 },
        { part: "Follow-up, duration and referral", marks: 1.5 },
      ],
      keywords: ["depression", "PHQ-9", "suicide risk", "escitalopram", "sertraline", "safety plan"],
    },
    {
      id: "psychiatry-depression-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on suicide risk assessment in primary care.",
      openingLines: [
        "Suicide risk assessment is the structured enquiry into a patient's suicidal ideation, plan, access to means, intent, past attempts and the risk and protective factors around them, in order to classify the risk and act on it the same day.",
        "India records over 1.7 lakh suicides a year, most in the 18-45 age group, and the family physician sees a majority of those who die within the month before death - usually for a somatic complaint.",
      ],
      answer: [
        {
          heading: "Who to ask",
          points: [
            "Every patient with depression, anxiety, alcohol or substance use, psychosis, chronic painful illness, a recent loss or humiliation, unexplained self-harm or a positive PHQ-9 item 9.",
            "Asking does not provoke suicide; it relieves the patient and opens the way to treatment.",
          ],
        },
        {
          heading: "How to ask - graded questions",
          points: [
            "Has life felt not worth living? Have you had thoughts of ending your life? Have you thought how? Have you made any preparation? Have you ever tried?",
            "Elicit ideation (passive or active), plan (specific, lethal), means (pesticide, tablets, rope at home), intent and preparation (farewell notes, giving away belongings), and past attempts (the strongest predictor).",
          ],
        },
        {
          heading: "Risk and protective factors",
          points: [
            "Risk: male, elderly or young adult, living alone, unemployment or debt, alcohol, psychosis, hopelessness, chronic illness, family history, access to pesticides.",
            "Protective: children, religious belief, supportive spouse, engagement with treatment, a named reason to live.",
          ],
        },
        {
          heading: "Classify and act the same day",
          points: [
            "High risk (plan plus means plus intent, recent attempt, psychosis): do not leave the patient alone, inform the family, same-day psychiatric assessment and admission.",
            "Moderate risk: safety plan, means removed by a relative, small quantities of medication, no tricyclics, treatment started, review in 48-72 hours.",
            "Low risk: safety plan, Tele-MANAS 14416, weekly review, re-ask at every visit.",
            "Document the assessment; attempted suicide is decriminalised under section 115 of the Mental Healthcare Act 2017 and the patient is owed care, not a police case.",
          ],
        },
      ],
      mustDraw: ["A three-tier table: low, moderate and high risk with the features and the same-day action for each."],
      markSplit: [
        { part: "Definition, whom to ask and the myth of provoking suicide", marks: 1 },
        { part: "Graded questions and the five dimensions", marks: 1.5 },
        { part: "Risk and protective factors", marks: 1 },
        { part: "Stratified action and safety plan", marks: 1.5 },
      ],
      keywords: ["suicide risk assessment", "safety plan", "Tele-MANAS", "Mental Healthcare Act 2017"],
    },
  ],
  mcqs: [
    {
      id: "psychiatry-depression-q1",
      stem: "A 52-year-old man with type 2 diabetes reports low mood, poor sleep, loss of interest and fatigue for six weeks. His PHQ-9 score is 17. He has fleeting thoughts that he would be better off dead but no plan, no previous attempts and lives with his wife and two sons. Which is the most appropriate initial management?",
      options: [
        "Reassurance and review in three months at the next diabetes visit",
        "Amitriptyline 75 mg at night for sleep and mood",
        "Escitalopram 10 mg each morning, a written safety plan with his wife informed, and review in one week",
        "Immediate involuntary admission to a psychiatric hospital",
        "Alprazolam 0.5 mg three times a day until the mood improves",
      ],
      answer: 2,
      explanation:
        "A PHQ-9 of 17 is moderately severe depression and needs an antidepressant now; with passive ideation, no plan, no attempts and good family support the risk is low to moderate, so treatment starts as an outpatient with a safety plan, the family involved and early review. Reassurance alone under-treats a score of 17 in a diabetic whose glycaemic control will suffer. Amitriptyline is the wrong first drug in a middle-aged diabetic with any suicidal thinking because it is cardiotoxic and lethal in overdose. Involuntary admission is not justified without a plan, intent or attempt, and the Mental Healthcare Act 2017 requires that supported admission be the least restrictive option. Benzodiazepines do not treat depression and add dependence.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-depression-q2",
      stem: "A 72-year-old woman on hydrochlorothiazide for hypertension is started on escitalopram 10 mg for depression. Two weeks later she is confused, unsteady and has had a fall. Which investigation is most urgently required?",
      options: [
        "CT scan of the brain",
        "Serum sodium",
        "Thyroid function tests",
        "Electrocardiogram for QT interval",
        "Serum vitamin B12",
      ],
      answer: 1,
      explanation:
        "SSRIs cause syndrome of inappropriate antidiuresis and hyponatraemia, most often in the elderly, in women and in those on thiazides, typically within the first two to four weeks, presenting with confusion, unsteadiness and falls; serum sodium is the first test and the SSRI is stopped if it is low. A CT may be needed after a fall but does not explain the confusion in this classic setting. Thyroid function and vitamin B12 are baseline tests for depression, not for an acute confusional state two weeks after an SSRI. QT prolongation with escitalopram matters at higher doses and presents with syncope or arrhythmia rather than confusion.",
      difficulty: "easy",
    },
    {
      id: "psychiatry-depression-q3",
      stem: "A 26-year-old woman with a PHQ-9 of 14 tells you that two years ago she had a fortnight in which she slept two hours a night, felt wonderful, spent her savings and talked incessantly, and her family had to restrain her spending. What is the most appropriate step?",
      options: [
        "Start fluoxetine 20 mg daily",
        "Start escitalopram 10 mg with a benzodiazepine for sleep",
        "Refer to a psychiatrist for a mood stabiliser rather than starting an antidepressant alone",
        "Start amitriptyline 50 mg at night",
        "Behavioural activation alone and review in a month",
      ],
      answer: 2,
      explanation:
        "The past episode meets criteria for mania, so this is bipolar depression; an antidepressant given alone can switch her into mania or rapid cycling, and treatment requires a mood stabiliser such as lithium, valproate (avoided in a woman of childbearing age), lamotrigine or quetiapine under psychiatric supervision. Fluoxetine, escitalopram or amitriptyline monotherapy is the classic error. Behavioural activation alone is inadequate for a PHQ-9 of 14 and ignores the diagnosis that changes everything.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-depression-q4",
      stem: "A 38-year-old farmer with depression treated with sertraline 100 mg for eight months has had a PHQ-9 of 3 for the last four months. He asks whether he can stop the tablets. This is his first episode. What is the correct advice?",
      options: [
        "Stop immediately since he is in remission",
        "Continue for at least 6-9 months after remission, then taper over about four weeks",
        "Continue lifelong because relapse is inevitable",
        "Halve the dose now and stop in one week",
        "Switch to fluoxetine and stop after one month",
      ],
      answer: 1,
      explanation:
        "For a first episode the antidepressant is continued for at least 6-9 months after remission - about 10-12 months of treatment in total - and then tapered over four weeks, so he needs a few more months. Abrupt stopping risks discontinuation symptoms and early relapse. Lifelong treatment is reserved for recurrent or severe episodes, not a single episode in remission. Halving and stopping within a week is too fast for sertraline. A switch to fluoxetine to ease tapering is sometimes used for venlafaxine or paroxetine withdrawal but is unnecessary here.",
      difficulty: "easy",
    },
    {
      id: "psychiatry-depression-q5",
      stem: "A 60-year-old man is brought by his son because he has stopped eating and drinking for three days, lies silent in bed, and when he speaks says his intestines have rotted and he deserves to die for ruining the family. Blood glucose and electrolytes are normal. What is the most appropriate management?",
      options: [
        "Escitalopram 10 mg and review in two weeks",
        "Same-day psychiatric admission for depression with psychotic features; electroconvulsive therapy is likely to be needed",
        "Intravenous fluids at home and mirtazapine 15 mg at night",
        "Haloperidol 5 mg alone for the delusion",
        "Counselling the family that this is grief and will settle",
      ],
      answer: 1,
      explanation:
        "Nihilistic and guilt delusions with refusal of food and fluids and near-stupor define severe depression with psychotic features, a psychiatric emergency; he needs admission the same day, an antidepressant with an antipsychotic, and ECT is the fastest and most effective treatment for depressive stupor with food refusal. An SSRI alone with a fortnight's wait risks death from dehydration or suicide. Home fluids with mirtazapine do not address the psychosis or the risk. An antipsychotic alone treats half the illness. This is not grief: delusions and food refusal are never explained by bereavement.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "psychiatry-depression-c1",
      front: "DSM-5 criteria for a major depressive episode.",
      back: "Five or more of nine symptoms for at least 2 weeks, one being depressed mood or anhedonia: sleep, appetite/weight, energy, concentration, psychomotor change, guilt/worthlessness, thoughts of death; with functional impairment.",
    },
    {
      id: "psychiatry-depression-c2",
      front: "PHQ-9 severity bands.",
      back: "0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe. Score of 10 or more: start an antidepressant. Remission: under 5.",
    },
    {
      id: "psychiatry-depression-c3",
      front: "The five dimensions of a suicide risk assessment.",
      back: "Ideation (passive/active), plan (specific/lethal), means (access), intent and preparation, past attempts - the strongest single predictor.",
    },
    {
      id: "psychiatry-depression-c4",
      front: "Which patient defines high suicide risk and what happens the same day?",
      back: "Active ideation with a plan, means and intent, or an attempt in the past month, or psychosis: never left alone, family informed, same-day psychiatric assessment and admission.",
    },
    {
      id: "psychiatry-depression-c5",
      front: "First-line antidepressant doses in family practice.",
      back: "Escitalopram 10 mg OM (5 mg elderly, max 20); sertraline 50 mg OM (start 25, max 200); fluoxetine 20 mg OM. Benefit from 2 weeks, judge at 4-6 weeks.",
    },
    {
      id: "psychiatry-depression-c6",
      front: "Antidepressant of choice after myocardial infarction and in lactation.",
      back: "Sertraline - SADHART evidence in cardiac disease, and the lowest transfer into breast milk. Avoid tricyclics in cardiac disease and in anyone at suicide risk.",
    },
    {
      id: "psychiatry-depression-c7",
      front: "How long to continue an antidepressant after remission?",
      back: "6-9 months after remission for a first episode; 2 years or more after a second or third episode; then taper over 4 weeks.",
    },
    {
      id: "psychiatry-depression-c8",
      front: "SSRI adverse effects that reach the exam.",
      back: "Hyponatraemia in the elderly (check sodium at 2 weeks), GI bleeding with NSAIDs, sexual dysfunction, early activation and suicidal ideation under 25, QT prolongation (citalopram), serotonin syndrome with tramadol, linezolid, triptans.",
    },
  ],
  references: [
    "National Mental Health Survey of India 2015-16, NIMHANS, 2016",
    "American Psychiatric Association, Diagnostic and Statistical Manual of Mental Disorders, 5th edition text revision (DSM-5-TR), 2022",
    "NICE Guideline NG222, Depression in adults: treatment and management, 2022",
    "WHO mhGAP Intervention Guide, version 2.0, 2016, and mhGAP guideline 2023 update",
    "Indian Psychiatric Society Clinical Practice Guidelines for the management of depression, 2017",
    "Mental Healthcare Act 2017, Government of India; National Suicide Prevention Strategy, MoHFW 2022",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "psychiatry-case-1",
    title: "Low mood, poor sleep and rising sugars in a 50-year-old man with diabetes - major depressive disorder complicating type 2 diabetes",
    kind: "long",
    subjectId: "psychiatry",
    opening:
      "A 50-year-old shopkeeper from a district town, a known type 2 diabetic for 8 years on metformin and glimepiride, presents with four months of tiredness, generalised body pain, poor sleep with early morning waking, loss of interest in his shop and his family, and an HbA1c that has risen from 7.4% to 9.8% over the same period without any change in his prescription.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the chronic disease and its control, and the presenting complaint in a single breath, because the examiner is listening for whether you have connected the deterioration in the diabetes with the mood.",
          "Say: 'Mr R, a 50-year-old shopkeeper, a type 2 diabetic for 8 years who was well controlled until early this year, presents with four months of tiredness, body pain, early morning waking and loss of interest in his shop and family, during which his HbA1c has risen from 7.4% to 9.8% with no change in his tablets.'",
          "State the relevant negatives at once: no fever, no weight gain, no cold intolerance, no chest pain or breathlessness, no polyuria beyond his usual, no alcohol beyond an occasional drink, no headache, no memory lapses and no previous psychiatric illness.",
          "Mention what has happened since the symptoms began - two visits to a physician for body pain with normal X-rays and a course of a vitamin injection, a private ultrasound of the abdomen reported normal, and Rs 6,000 spent on investigations - because the cost of missed depression is part of the case.",
          "Close the opening with his current function: he opens the shop late or not at all, his son now runs it, he has stopped his evening walk and his temple visits, and his wife says he sits silently for hours.",
        ],
      },
      {
        heading: "History of the presenting illness - the nine symptoms, one by one",
        points: [
          "Go through the nine DSM-5 symptoms explicitly and say so: depressed mood most of the day nearly every day for four months; anhedonia - no pleasure in the shop, in cricket on television or in his grandchildren; insomnia with waking at 3 am unable to return to sleep; appetite reduced with 4 kg weight loss; fatigue; poor concentration so that he makes errors in the accounts; feelings of being a burden and guilt over the shop's losses; psychomotor slowing noticed by the wife; and thoughts of death which he admits when asked.",
          "Give the PHQ-9 score you obtained - 18, moderately severe - with item 9 scored 1 (several days), and say that the functional item was 'very difficult'.",
          "Present the suicide risk assessment as a separate paragraph: passive thoughts that the family would be better off without him on several days, no active plan, no preparation, no previous attempts, no access to pesticides (a shopkeeper, not a farmer) but glimepiride and metformin in the house in quantity, no alcohol dependence, and protective factors of a supportive wife, a son who has taken over the shop, and religious belief against suicide - so a moderate risk that is manageable as an outpatient with a safety plan.",
          "Screen for and exclude mania: never a period of reduced need for sleep with elevated mood or overspending; no family history of bipolar disorder; no psychotic symptoms - no delusions of guilt, poverty or bodily disease, no hallucinations.",
          "Identify the precipitants: a loss of Rs 3 lakh in the shop during the previous festive season, a loan from a relative, and his daughter's marriage expenses looming - together with the chronic diabetes and the burning feet of early neuropathy.",
          "Ask about the diabetes behaviour that explains the HbA1c: he has stopped his walk, eats irregularly, sometimes forgets his evening glimepiride, has not checked his sugar in three months, and has stopped coming for review because 'nothing helps'.",
        ],
      },
      {
        heading: "Past, drug, personal and family history",
        points: [
          "Diabetes for 8 years, on metformin 1 g twice daily and glimepiride 2 mg before breakfast; last HbA1c 9.8% a month ago; retinal examination two years ago normal; urine albumin never done; burning feet for six months.",
          "Hypertension detected at this visit at 150/92 mmHg, no previous antihypertensive; no history of ischaemic heart disease, stroke or kidney disease; no thyroid disease; no tuberculosis or jaundice.",
          "Drug history including over-the-counter and indigenous medicines: a vitamin injection course, a herbal tonic for weakness, and diclofenac from the chemist for body pain on most days for two months - which matters for both renal function and the choice of antidepressant.",
          "Personal history: tobacco chewing 5 sachets a day for 25 years, alcohol 60 mL of whisky on festival days only, no other substance; sleep and appetite as described; libido reduced for months, which he had not mentioned to anyone.",
          "Family history: father died of a myocardial infarction at 62; mother has diabetes; a paternal uncle 'was mentally ill and died by hanging' - a family history of suicide that raises the risk grade a notch.",
          "Social history: joint family of seven, the shop is the only income, a housing loan and the daughter's wedding, a 20-minute walk to the family physician's clinic, and a wife who is willing to attend every visit with him.",
        ],
      },
      {
        heading: "Examination - general, systemic and mental state",
        points: [
          "General: a thin man with a BMI of 22.5 kg/m2 (previously 25), pulse 88 regular, blood pressure 150/92 mmHg in both arms, afebrile, no pallor, no goitre, no lymphadenopathy, oral mucosa with a leukoplakic patch on the right buccal mucosa from tobacco chewing, and no signs of thyroid disease or Cushing's.",
          "Systemic: normal cardiovascular and respiratory examination, no hepatomegaly; feet with dry skin, absent vibration sense at both great toes, monofilament sensation lost at two of ten sites bilaterally, and palpable dorsalis pedis pulses - early diabetic peripheral neuropathy; fundus with no retinopathy.",
          "Mental state examination presented in the standard order: appearance and behaviour - unshaven, slow to sit, poor eye contact, psychomotor retardation; speech - slow, low in volume, long pauses; mood - 'nothing feels good', affect flat and non-reactive; thought form normal; thought content - guilt over losses, worthlessness, passive death wishes, no delusions; perception - no hallucinations; cognition - oriented, attention slightly reduced on serial sevens, memory intact; insight - accepts that something is wrong but attributes it to the diabetes.",
          "Say explicitly that the mental state examination shows no psychotic features and no cognitive impairment beyond that expected from poor concentration, which keeps the case in the family physician's hands.",
        ],
      },
      {
        heading: "Putting it together before the summary",
        points: [
          "Argue the diagnosis aloud: a four-month episode with all nine symptoms, a PHQ-9 of 18 and functional collapse, without mania or psychosis, in a man with two clear precipitants - financial loss and a chronic illness - is a first major depressive episode of moderately severe grade.",
          "Explain the two-way relationship with the diabetes: depression has caused the non-adherence, inactivity and irregular eating that pushed the HbA1c to 9.8%, and the neuropathic pain and the burden of the illness have fed the depression; treating one without the other will fail.",
          "Name the risk grade and its consequence: moderate suicide risk with a family history of suicide, manageable as an outpatient with a safety plan, means restriction of his sulfonylurea and metformin stock, and review within one week.",
        ],
      },
    ],
    summaryStatement:
      "This is a 50-year-old shopkeeper with type 2 diabetes for 8 years, now with early peripheral neuropathy and newly detected hypertension, who presents with a four-month first episode of major depressive disorder of moderately severe grade (PHQ-9 18) with somatic presentation, precipitated by financial loss, with passive suicidal ideation and a family history of suicide but no plan, intent or attempt, without manic or psychotic features, and whose depression has driven a deterioration in glycaemic control from an HbA1c of 7.4% to 9.8% through non-adherence and inactivity - requiring an SSRI with psychoeducation and a written safety plan, simultaneous re-establishment of diabetes care, and structured review at one, two, four and six weeks.",
    differential: [
      {
        diagnosis: "Major depressive disorder, first episode, moderately severe, with somatic presentation",
        forIt: "All nine DSM-5 symptoms over four months, PHQ-9 of 18, early morning waking, weight loss, guilt and passive death wishes, functional collapse, and clear psychosocial precipitants.",
        againstIt: "Nothing substantive; the diagnosis is clinical, and the only caveats are the mimics that must be excluded by examination and a small set of tests.",
      },
      {
        diagnosis: "Hypothyroidism",
        forIt: "Fatigue, slowing, body pain, poor concentration and low mood in a middle-aged man; common enough to check in every case.",
        againstIt: "Weight loss rather than gain, no cold intolerance, no goitre, normal reflexes and pulse of 88; a TSH is still sent because the cost of missing it is high.",
      },
      {
        diagnosis: "Adjustment disorder with depressed mood after financial loss",
        forIt: "A clear stressor within three months of onset, with symptoms understandable as a reaction to it.",
        againstIt: "The severity, duration and completeness of the syndrome - all nine symptoms, marked weight loss, guilt and death wishes, a PHQ-9 of 18 - exceed what adjustment disorder allows, and once full criteria for a major episode are met that diagnosis takes precedence.",
      },
      {
        diagnosis: "Depression secondary to an occult medical illness - malignancy, tuberculosis, chronic kidney disease",
        forIt: "4 kg weight loss, fatigue and body pain in a 50-year-old tobacco user with a leukoplakic patch and daily NSAID use.",
        againstIt: "No fever, cough, night sweats, bleeding, dysphagia or lymphadenopathy, normal systemic examination and a recent normal abdominal ultrasound; a haemogram, creatinine, ESR and chest radiograph complete the exclusion and the oral patch is referred separately.",
      },
      {
        diagnosis: "Bipolar depression",
        forIt: "A family history of psychiatric illness and suicide in a paternal uncle.",
        againstIt: "No lifetime episode of elevated mood, reduced sleep need, overspending or pressured speech on direct questioning of both patient and wife; the family history is noted and the antidepressant is started with the wife warned to report any switch.",
      },
    ],
    investigations: [
      {
        test: "PHQ-9 at baseline and at each review, with item 9 followed by a direct suicide enquiry",
        why: "Grades severity, sets the treatment threshold and is the outcome measure; item 9 flags the need for risk assessment every visit.",
        expected: "Baseline 18; target a 50% fall by 6 weeks and remission below 5 by 3 months.",
      },
      {
        test: "HbA1c, fasting and post-prandial glucose, serum creatinine with eGFR, urine albumin-creatinine ratio, lipid profile",
        why: "Documents the deterioration, screens for nephropathy in a man with neuropathy and daily NSAID use, and completes the cardiovascular risk profile that the depression has interrupted.",
        expected: "HbA1c 9.8%, fasting 190 mg/dL; creatinine 1.0 mg/dL; urine ACR mildly raised at 45 mg/g; LDL 130 mg/dL.",
      },
      {
        test: "Haemoglobin, TSH, serum sodium, vitamin B12",
        why: "Excludes anaemia, hypothyroidism and B12 deficiency (common on long-term metformin) as contributors to fatigue and cognitive slowing; baseline sodium before an SSRI in a man who may need a thiazide for his hypertension.",
        expected: "Haemoglobin 13.2 g/dL, TSH 2.1 mIU/L, sodium 138 mmol/L, B12 low-normal at 220 pg/mL.",
      },
      {
        test: "ECG",
        why: "Baseline in a diabetic hypertensive with a family history of early myocardial infarction, and a record of the QTc before an SSRI.",
        expected: "Sinus rhythm, no ischaemic change, QTc 410 ms.",
      },
      {
        test: "Referral for biopsy of the buccal leukoplakia and a chest radiograph",
        why: "A tobacco chewer with weight loss and a white oral patch must have malignancy excluded, and it must not be lost behind the psychiatric diagnosis.",
        expected: "Chest radiograph normal; leukoplakia without dysplasia on biopsy, with tobacco cessation advised.",
      },
    ],
    management: [
      {
        heading: "Explanation and the first visit",
        points: [
          "Explain to the patient and his wife that he has depression, a common and treatable medical illness that is also the reason his sugars have risen, that it is not weakness, and that tablets and a plan will bring him back to work within two to three months.",
          "Make the safety plan on paper: warning signs he recognises, what he will do (call his wife, walk to the clinic), who he will call (wife, son, the family physician's number, Tele-MANAS 14416), and the wife's undertaking to keep the diabetes tablets and any other medicines locked and dispensed daily.",
          "Fix the first review in one week, and tell them to come the same day if thoughts of ending his life become active or a plan forms.",
        ],
      },
      {
        heading: "Antidepressant choice and dose",
        points: [
          "Start escitalopram 10 mg every morning - few interactions with metformin, glimepiride or a future statin and antihypertensive, weight-neutral in a diabetic, and safe in overdose relative to a tricyclic; sertraline 50 mg is the equal alternative and preferred if ischaemic heart disease is found.",
          "Avoid amitriptyline despite the neuropathic pain: cardiac risk, weight gain, and lethality in overdose in a man with suicidal thoughts and a family history of suicide; use duloxetine 30-60 mg later if the neuropathic pain becomes the dominant residual problem, as it treats both.",
          "Dispense two weeks at a time in the early phase, warn about transient nausea, headache and restlessness in the first week, explain the 2-4 week delay in benefit, and prescribe a short course of a hypnotic only if the insomnia is intolerable, never a long-term benzodiazepine.",
        ],
      },
      {
        heading: "Non-drug treatment and the diabetes",
        points: [
          "Behavioural activation: a written daily timetable that restores the morning walk (30 minutes, also the diabetes prescription), opening the shop for two hours a day with his son, and one social contact daily; problem-solving counselling on the debt with the son and a bank counsellor.",
          "Re-establish diabetes care: continue metformin, review glimepiride timing with meals to avoid hypoglycaemia as appetite recovers, home glucose monitoring twice weekly, start atorvastatin 20 mg and an ACE inhibitor (ramipril 2.5-5 mg) for hypertension with albuminuria, stop the daily diclofenac and substitute paracetamol, and foot care education for the neuropathy.",
          "Tobacco cessation counselling using the 5 As, with nicotine gum 2 mg offered, and the oral patch referred; a follow-up HbA1c at 3 months.",
        ],
      },
      {
        heading: "Follow-up schedule and referral criteria",
        points: [
          "Week 1: adherence, side effects, suicide enquiry, sugars; week 2: repeat the enquiry, check sodium if a thiazide has been added; week 4: PHQ-9 - expect at least a 20-30% fall; week 6-8: if less than a 50% fall, increase escitalopram to 15-20 mg; at 12 weeks, if not in remission, switch to sertraline or add mirtazapine 15 mg at night and refer.",
          "Continue the antidepressant for 6-9 months after remission, then taper over four weeks, and screen with the PHQ-2 at every subsequent diabetes review for life.",
          "Refer the same day if active ideation, a plan or an attempt emerges, if psychotic symptoms or manic switch occur, or if he stops eating; link to the District Mental Health Programme for free medication if cost becomes a barrier.",
        ],
      },
      {
        heading: "Family",
        points: [
          "Involve the wife and son as co-therapists: they supervise medication, keep the means locked away, ensure the walk happens, and report warning signs; counsel them that irritability and silence are symptoms, not rejection.",
          "Screen the wife for depression and caregiver strain at the second visit, and the son for tobacco use.",
          "Use the visit to enter the family's cardiovascular risk - a diabetic mother and a father who died of myocardial infarction at 62 - into the family folder and offer the son screening.",
        ],
      },
    ],
    viva: [
      {
        q: "Why did you choose escitalopram over sertraline or fluoxetine in this man?",
        a: "All three are reasonable; escitalopram has the fewest cytochrome interactions with the drugs he takes or will need, is weight-neutral and well tolerated, and is once daily. Sertraline would be my choice if coronary disease were found, and fluoxetine if cost or adherence dominated, accepting its activating effect and long half-life.",
      },
      {
        q: "How would you grade his suicide risk and what would change your grade?",
        a: "Moderate: passive ideation on several days, no plan, no intent, no attempt, with a family history of suicide raising it from low, and strong protective factors. An active plan, a method with access, preparation, hopelessness that he cannot name a reason to live, psychosis or alcohol intoxication would make it high and I would admit him the same day.",
      },
      {
        q: "What is the relationship between depression and diabetes?",
        a: "Bidirectional: depression roughly doubles the risk of incident type 2 diabetes through inactivity, diet, cortisol and inflammation, and diabetes doubles the risk of depression; comorbid depression worsens adherence, glycaemic control, complications and mortality, and treating depression improves HbA1c modestly and adherence substantially.",
      },
      {
        q: "When would you consider a tricyclic in a diabetic patient?",
        a: "Only for coexisting painful neuropathy or migraine in a young patient with no cardiac disease, no suicide risk and no glaucoma or prostatism, at 25-75 mg at night; here duloxetine would serve both purposes with less risk.",
      },
      {
        q: "What does the Mental Healthcare Act 2017 say about a patient who attempts suicide?",
        a: "Section 115 presumes that a person who attempts suicide has severe stress and shall not be tried or punished under section 309 of the Indian Penal Code, and obliges the government to provide care, treatment and rehabilitation to reduce the risk of recurrence; so I treat, document and involve the family, and do not report the patient as an accused.",
      },
      {
        q: "How would you know the antidepressant is working, and what would you do at 6 weeks if it were not?",
        a: "A fall in the PHQ-9 of 20-30% by 4 weeks and 50% by 6 weeks, better sleep and energy first, mood last. If less than 25% improvement at 6 weeks after checking adherence and alcohol, I would increase to 20 mg; if still inadequate at 10-12 weeks, switch to sertraline or add mirtazapine and refer.",
      },
      {
        q: "What would make you refer this patient to a psychiatrist today?",
        a: "Active suicidal ideation with a plan, psychotic symptoms, a history of mania, refusal of food and fluids, severe agitation or stupor, or a second failed adequate antidepressant trial later on.",
      },
    ],
    pitfalls: [
      "Treating the body pain and the HbA1c for months without ever asking the two PHQ-2 questions - the commonest error and the reason this man spent Rs 6,000 before his diagnosis.",
      "Prescribing an antidepressant without asking about mania or about suicide, and then dispensing a month's supply of a tricyclic to a patient who is thinking of death.",
      "Forgetting that depression is a medical diagnosis of exclusion at the margins: a TSH, haemogram, sodium, B12 and a look at the oral cavity belong in every case.",
      "Stopping the antidepressant at the first good PHQ-9 instead of continuing 6-9 months after remission, and not tapering.",
      "Managing the depression and the diabetes in two separate consultations by two separate doctors, so that neither improves.",
    ],
    references: [
      "NICE Guideline NG222, Depression in adults: treatment and management, 2022",
      "American Diabetes Association Standards of Care in Diabetes 2025, section 5 (psychosocial care)",
      "WHO mhGAP Intervention Guide, version 2.0, 2016",
      "Indian Psychiatric Society Clinical Practice Guidelines for depression, 2017",
      "Mental Healthcare Act 2017, section 115",
    ],
  },
  {
    id: "psychiatry-case-2",
    title: "OSCE: suicide risk assessment in a 32-year-old woman who says she is tired of living",
    kind: "osce",
    subjectId: "psychiatry",
    opening:
      "A 32-year-old woman who came for a headache prescription says, as she is leaving, 'Doctor, sometimes I feel I should just end it all.' The examiner asks you to assess her risk of suicide in eight minutes and state what you will do today.",
    minutes: 10,
    frequency: "core",
    sections: [
      {
        heading: "Setting up the conversation (first minute)",
        points: [
          "Stop what you are doing, sit down, close the door and say: 'I am glad you told me. That was important. I would like to understand what has been happening - can we talk for a few minutes?' - the examiner marks that the disclosure was received without alarm or dismissal.",
          "Ask who came with her and whether she would like them in the room later; assure confidentiality with its limit: 'What you tell me stays between us, unless I think your life is in danger, in which case I will need to involve someone who can keep you safe, and I will tell you first.'",
          "Open with an invitation, not a checklist: 'Tell me about how things have been for you these last few weeks.'",
        ],
      },
      {
        heading: "Graded questions on suicidal thinking (verbatim)",
        points: [
          "'You said you feel you should end it all. How often do you have that thought?' - frequency and persistence.",
          "'When you have that thought, is it that you wish you were not here, or have you actually thought about ending your life yourself?' - passive versus active ideation.",
          "'Have you thought about how you would do it?' and, if yes, 'What method have you thought of?' - plan and lethality; in India ask specifically about pesticides, tablets, hanging and kerosene.",
          "'Do you have that at home? Have you got anything ready?' - access to means and preparation.",
          "'Have you done anything towards it - written a note, given things away, set a date?' - intent.",
          "'Have you ever tried to harm yourself or end your life before? What happened then?' - past attempts, the strongest predictor.",
          "'What has stopped you so far?' - protective factors, said in her own words.",
          "'On a scale of zero to ten, how likely do you think it is that you will act on these thoughts in the next few days?' - her own estimate, which the examiner is glad to hear.",
        ],
      },
      {
        heading: "Context: the illness and the risk factors (two minutes)",
        points: [
          "Screen for depression with the PHQ-2 and ask about sleep, appetite, energy, guilt and hopelessness; ask about anxiety and panic; ask 'Have you been hearing voices or feeling that people are against you?' for psychosis.",
          "Alcohol and substance use in her and in the husband; recent loss, humiliation, violence at home, debt, infertility, a recent delivery (postpartum depression or psychosis), and chronic physical illness.",
          "Ask directly about domestic violence: 'Many women in this situation are being hurt at home. Is anyone hurting you?' - and about the safety of any children.",
          "Family history of suicide or mental illness; previous psychiatric treatment; current medicines, including the quantity of tablets in the house.",
        ],
      },
      {
        heading: "Deciding the level of risk (say it aloud)",
        points: [
          "Summarise to the patient and the examiner: 'You have had thoughts of ending your life most days for a month, you have thought of taking the sleeping tablets your mother-in-law keeps, you have not made preparations, you have never attempted before, and your two children are what stops you.' - this is moderate risk with an identified means.",
          "High risk: a specific plan with available means and intent, a recent attempt, psychosis, intoxication, or hopelessness with no reason to live - same-day psychiatric assessment and admission, and she does not leave the clinic alone.",
          "Low risk: fleeting passive thoughts, no plan, no attempts, good supports - safety plan and review within a week.",
        ],
      },
      {
        heading: "What is done today - the safety plan and the same-day actions",
        points: [
          "Write the safety plan with her on a card she takes home: her warning signs; three things she will do first (call her sister, go to the neighbour, walk to the clinic); people she will call; the clinic number and Tele-MANAS 14416 (or 1-800-891-4416, 24 hours, in her language); and 'the place I am going if I feel unsafe is the emergency department at the district hospital'.",
          "Means restriction with a named relative: ask her permission to call her sister or husband into the room, explain what is needed - the sleeping tablets and any pesticides removed from the house today, medicines locked and given daily - and confirm it has been done at the next contact.",
          "Treat the illness: if PHQ-9 is 10 or more, start escitalopram 10 mg or sertraline 50 mg, dispensed for one week only; no tricyclics, no large benzodiazepine supply.",
          "Fix the next contact: a phone call tomorrow, a visit in 48-72 hours, and a written note of who is responsible for bringing her; document the assessment, the risk level and the plan in the record.",
          "Refer the same day if the risk is high, if she is pregnant or postpartum with psychotic symptoms, or if there is domestic violence with immediate danger - and connect her to the protection officer under the Domestic Violence Act if she consents.",
        ],
      },
    ],
    summaryStatement:
      "A 32-year-old woman with a one-month depressive illness who discloses active suicidal ideation with a considered method (her mother-in-law's sleeping tablets) but no preparation, intent or past attempt, with protective factors of two young children and a supportive sister - a moderate risk requiring a written safety plan, means restriction through a named relative today, an SSRI dispensed in small quantity, the Tele-MANAS number, and a review within 48-72 hours, with same-day referral if a plan, intent or psychosis emerges.",
    differential: [
      {
        diagnosis: "Major depressive disorder with suicidal ideation",
        forIt: "A month of low mood, sleep and appetite change, hopelessness and daily thoughts of death; PHQ-9 in the moderate to severe range.",
        againstIt: "None; the task is to grade the risk and act, not to debate the diagnosis.",
      },
      {
        diagnosis: "Adjustment reaction to domestic violence or acute stressor",
        forIt: "Suicidal statements in young Indian women are frequently a response to marital conflict, violence or humiliation, and the thought may recede when the stressor is addressed.",
        againstIt: "A full depressive syndrome of a month's duration is present; the stressor is managed in addition to, not instead of, the illness and the risk.",
      },
      {
        diagnosis: "Postpartum depression or psychosis, or a psychotic illness",
        forIt: "Must be asked about in any woman of reproductive age; psychosis raises the risk to high whatever else is present.",
        againstIt: "No recent delivery, no hallucinations or delusions on direct questioning, and no confusion.",
      },
    ],
    investigations: [
      {
        test: "PHQ-9 with item 9 and a direct enquiry",
        why: "Grades the depression and records the presence of thoughts of death for follow-up.",
        expected: "PHQ-9 of 16 with item 9 scored 2.",
      },
      {
        test: "Alcohol and substance screen (AUDIT-C), pregnancy test if indicated",
        why: "Intoxication raises acute risk; pregnancy changes the drug choice and the urgency.",
        expected: "AUDIT-C 0; urine pregnancy test negative.",
      },
      {
        test: "Haemoglobin and TSH at the next visit",
        why: "Baseline exclusion of anaemia and thyroid disease as contributors; not today's priority.",
        expected: "Haemoglobin 10.8 g/dL (iron deficiency to be treated), TSH normal.",
      },
    ],
    management: [
      {
        heading: "Today",
        points: [
          "Graded enquiry, risk grading stated aloud, written safety plan, means removed by a named relative, SSRI in a one-week supply, Tele-MANAS 14416, documentation, and a contact within 48-72 hours.",
          "She does not leave alone; the relative is told the warning signs and what to do at night.",
        ],
      },
      {
        heading: "This week",
        points: [
          "Phone call tomorrow; visit at 48-72 hours to re-ask the graded questions, check the means have gone, and check side effects; screen for and address domestic violence with the protection officer if she consents.",
          "Escalate to same-day referral if ideation becomes a plan with intent, if she is intoxicated, or if psychotic symptoms appear.",
        ],
      },
      {
        heading: "Ongoing",
        points: [
          "Weekly reviews for a month, PHQ-9 at 4 weeks, dose titration at 6 weeks, continuation of the antidepressant for 6-9 months after remission, and the suicide enquiry repeated at every visit until the thoughts have gone for at least two months.",
        ],
      },
    ],
    viva: [
      {
        q: "Does asking a patient about suicide increase the risk that she will attempt it?",
        a: "No; every study that has examined this shows that asking reduces distress and increases help-seeking. Not asking is the risk.",
      },
      {
        q: "What are the elements of a safety plan?",
        a: "Personal warning signs, internal coping steps, people and places for distraction, people to ask for help, professional contacts including the clinic and Tele-MANAS 14416, and making the environment safe by removing means.",
      },
      {
        q: "What would make you break confidentiality?",
        a: "Imminent risk to her life or to another person, including a child; I tell her that I am doing so and why, involve the least number of people needed to keep her safe, and document it.",
      },
      {
        q: "Which antidepressants must you avoid in this patient and why?",
        a: "Tricyclics such as amitriptyline and dothiepin, because a two-week supply is a lethal overdose; venlafaxine is also more toxic in overdose than SSRIs. I dispense an SSRI in a one-week quantity.",
      },
      {
        q: "What is the legal position if she does make an attempt and comes to you?",
        a: "Under section 115 of the Mental Healthcare Act 2017 she is presumed to have been under severe stress and is not prosecuted under IPC 309; she is owed care and rehabilitation. Poisoning cases still require a medico-legal record and treatment, but not a police complaint against her.",
      },
    ],
    pitfalls: [
      "Saying 'Don't think like that, you have children' - which closes the conversation and is the opposite of an assessment.",
      "Asking 'You're not thinking of doing anything silly, are you?' - a leading question that invites 'no'.",
      "Stopping at ideation without asking about plan, means, intent and past attempts, and therefore being unable to grade the risk.",
      "Prescribing an antidepressant and a month's supply of a benzodiazepine and booking a routine review in four weeks.",
      "Letting her leave alone without a named relative, a safety plan and a contact within 72 hours.",
    ],
    references: [
      "WHO mhGAP Intervention Guide, version 2.0, 2016 - self-harm and suicide module",
      "National Suicide Prevention Strategy, Ministry of Health and Family Welfare, Government of India, 2022",
      "Stanley B, Brown GK. Safety planning intervention, Cognitive and Behavioral Practice, 2012",
      "Mental Healthcare Act 2017, section 115",
      "NICE Guideline NG225, Self-harm: assessment, management and preventing recurrence, 2022",
    ],
  },
];

const subject: Subject = {
  id: "psychiatry",
  title: "Psychiatry & Behavioural Medicine",
  blurb: "Depression, anxiety, somatic symptoms, alcohol and tobacco, psychosis, sleep and delirium.",
  icon: "Brain",
  papers: ["II"],
  topics,
  cases,
};

export default subject;
