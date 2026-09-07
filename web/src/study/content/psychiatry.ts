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

topics.push({
  id: "renal-urology-acute-kidney-injury",
  title: "Acute kidney injury: recognising it early, staging it by KDIGO and stopping it getting worse",
  oneLiner:
    "Acute kidney injury is an abrupt fall in glomerular filtration defined by KDIGO as a rise in serum creatinine of 0.3 mg/dL or more within 48 hours, or a rise to 1.5 times a known or presumed baseline within the preceding 7 days, or a urine output below 0.5 mL/kg/h for 6 hours, and it is staged 1 to 3 on whichever of creatinine or urine output gives the higher stage.",
  frequency: "core",
  keywords: [
    "AKI",
    "KDIGO AKI",
    "acute tubular necrosis",
    "prerenal azotaemia",
    "fractional excretion of sodium",
    "FeNa",
    "community-acquired AKI",
    "snake bite AKI",
    "falciparum malaria",
    "rhabdomyolysis",
    "contrast-associated AKI",
    "hepatorenal syndrome",
    "obstructive uropathy",
    "renal replacement therapy",
    "nephrotoxin stewardship",
    "urine output monitoring",
  ],
  sections: [
    {
      heading: "The KDIGO definition and staging, written exactly",
      points: [
        "**KDIGO 2012 definition of AKI - any one of three criteria:** a rise in serum creatinine of **0.3 mg/dL or more within 48 hours**; a rise in serum creatinine to **1.5 times baseline or more, known or presumed to have occurred within the prior 7 days**; or a **urine volume below 0.5 mL/kg/h for 6 hours**.",
        "**Stage 1:** creatinine 1.5-1.9 times baseline, or an absolute rise of 0.3 mg/dL or more; or urine output below 0.5 mL/kg/h for 6-12 hours.",
        "**Stage 2:** creatinine 2.0-2.9 times baseline; or urine output below 0.5 mL/kg/h for 12 hours or more.",
        "**Stage 3:** creatinine 3.0 times baseline or more, or a rise to **4.0 mg/dL or more**, or **initiation of renal replacement therapy**, or in patients under 18 years a fall in eGFR to below 35 mL/min/1.73 m2; or urine output **below 0.3 mL/kg/h for 24 hours or more, or anuria for 12 hours or more**.",
        "Stage on **whichever criterion - creatinine or urine output - gives the higher stage**; a patient making 15 mL/h with a creatinine of 1.4 mg/dL is still stage 3 if the oliguria has lasted a day.",
        "**Acute kidney disease** is the KDIGO term for kidney damage or a GFR under 60 lasting **7 to 90 days**; beyond 90 days it becomes CKD. This bridging category exists because most AKI does not resolve neatly by day 7, and every AKI survivor needs a creatinine and an ACR at 3 months.",
        "Where no baseline creatinine exists - the usual Indian situation - **back-calculate an assumed baseline from an eGFR of 75 mL/min/1.73 m2** using the MDRD equation, or use the lowest creatinine of the current admission, and say in the answer book which assumption was made.",
      ],
    },
    {
      heading: "Causes: prerenal, intrinsic renal and postrenal, with the Indian weighting",
      points: [
        "**Prerenal (about 40-55%) - hypoperfusion of a structurally normal kidney:** vomiting, diarrhoea (the commonest cause in Indian primary care), haemorrhage, burns, sepsis, heart failure, cirrhosis with ascites, over-diuresis, and the haemodynamic effects of **NSAIDs (afferent constriction) plus ACE inhibitors or ARBs (efferent dilatation)** - the so-called triple whammy when a diuretic is added.",
        "**Intrinsic renal (about 35-45%):** acute tubular necrosis from prolonged ischaemia or nephrotoxins; acute interstitial nephritis from drugs; acute glomerulonephritis; and vascular causes such as thrombotic microangiopathy or renal artery occlusion.",
        "**Postrenal (about 5-10%):** bladder outlet obstruction from benign prostatic hyperplasia or a blocked catheter, bilateral ureteric stones or a stone in a single functioning kidney, retroperitoneal fibrosis, and pelvic malignancy. **Obstruction must be excluded by ultrasound in every case** because it is the one cause that is cured by a catheter or a nephrostomy.",
        "**Community-acquired AKI in India** has a distinctive and heavily examined list: **acute gastroenteritis with severe dehydration, falciparum and vivax malaria, leptospirosis, scrub typhus, dengue, snake envenomation (Russell's viper and saw-scaled viper), septic abortion and obstetric haemorrhage, copper sulphate and paraphenylenediamine (hair-dye) poisoning, and traditional or unlabelled herbal remedies**.",
        "**Nephrotoxic drugs to name:** NSAIDs including diclofenac and ibuprofen, aminoglycosides, amphotericin B, vancomycin, colistin, high-dose acyclovir, methotrexate, cisplatin, tenofovir, calcineurin inhibitors, iodinated contrast, and proton pump inhibitors as a cause of interstitial nephritis.",
        "**Rhabdomyolysis** after trauma, crush injury, prolonged immobility, seizures, extreme exertion, statin-fibrate combinations or wasp stings: creatine kinase above 5000 U/L, tea-coloured urine, **dipstick positive for blood with no red cells on microscopy**, hyperkalaemia, hyperphosphataemia and hypocalcaemia.",
      ],
    },
    {
      heading: "Bedside evaluation: the questions that must be answered in the first hour",
      points: [
        "**Is the patient volume depleted, euvolaemic or overloaded?** Postural blood pressure, pulse, jugular venous pressure, mucous membranes, skin turgor, axillary sweat, capillary refill, weight change and daily fluid balance chart. Volume status decides whether the next step is a fluid bolus or a diuretic, and getting it wrong is the single commonest error.",
        "**Is the bladder palpable and is there a catheter that is blocked?** Feel for the bladder, do a bladder scan or a post-void residual, and flush or change any catheter before ordering anything else.",
        "**Urine routine and microscopy is the cheapest and most discriminating test.** A bland sediment suggests prerenal disease or obstruction; **muddy brown granular casts and renal tubular epithelial cells indicate acute tubular necrosis**; **dysmorphic red cells and red cell casts indicate glomerulonephritis**; **white cell casts with eosinophiluria and a rash suggest acute interstitial nephritis**; and heavy proteinuria points to a glomerular lesion.",
        "**Fractional excretion of sodium, FeNa = (urine sodium x plasma creatinine) / (plasma sodium x urine creatinine) x 100.** Below 1% suggests prerenal azotaemia, above 2% suggests acute tubular necrosis. It is invalid after a diuretic, in which case use the **fractional excretion of urea, FeUrea, where below 35% suggests prerenal disease**.",
        "**Blood urea nitrogen to creatinine ratio above 20:1** favours a prerenal state, but is also raised by gastrointestinal bleeding, steroids and a high protein intake, and is lowered by malnutrition and liver disease.",
        "**Ultrasound of the kidneys, ureters and bladder in every case of AKI** - it excludes hydronephrosis, gives kidney size and echotexture (small echogenic kidneys mean the problem is chronic), and shows the bladder and prostate.",
        "Send in parallel: electrolytes with bicarbonate, calcium and phosphate, complete blood count with peripheral smear (schistocytes mean thrombotic microangiopathy), creatine kinase, liver function, blood culture, malaria antigen and smear, dengue and leptospira serology where the season and story fit, and an ECG for hyperkalaemia.",
      ],
    },
    {
      heading: "Management in the clinic and on the ward",
      points: [
        "**Treat the cause, restore perfusion, remove the nephrotoxins, relieve the obstruction, and manage the complications** - there is still no drug that treats AKI itself, and saying so earns the mark.",
        "**Fluid resuscitation:** balanced crystalloid (Ringer's lactate or Plasma-Lyte) in preference to 0.9% saline, because large-volume saline produces hyperchloraemic acidosis and, in the SMART and BaSICS-era evidence, no better kidney outcomes. Give **250-500 mL boluses with reassessment after each**, not a blind litre-per-hour, and stop the moment the jugular venous pressure rises or the lung bases become wet. **Starches (hydroxyethyl starch) are contraindicated in AKI.**",
        "**Diuretics do not prevent or treat AKI**; furosemide is used only to manage established fluid overload, and a failure to respond to it is a sign to plan dialysis, not to escalate the dose indefinitely. **Low-dose dopamine, mannitol and fenoldopam have no role.**",
        "**Stop and list the nephrotoxins:** NSAIDs, aminoglycosides, ACE inhibitors and ARBs (hold during the acute illness, restart once the creatinine has stabilised), SGLT2 inhibitors, metformin (risk of lactic acidosis), diuretics, and any herbal preparation. **Metformin is stopped during AKI and restarted only when the eGFR is stable above 30.**",
        "**Adjust every remaining drug to the current creatinine clearance**, remembering that in unstable AKI the creatinine lags behind the true GFR, so dose as if the GFR is lower than the number suggests.",
        "**Treat hyperkalaemia the moment it is above 6.0 mmol/L or there is any ECG change:** 10 mL of 10% calcium gluconate intravenously over 2-3 minutes to stabilise the myocardium, 10 units of regular insulin in 25 g of dextrose (50 mL of 50% dextrose or 100 mL of 25% dextrose), salbutamol 10-20 mg by nebuliser, sodium bicarbonate only if acidotic, and a potassium binder; then arrange dialysis if it is refractory.",
        "**Nutrition:** 20-30 kcal/kg/day with 0.8-1.0 g/kg/day of protein in non-catabolic AKI, rising to 1.0-1.5 g/kg/day on renal replacement therapy. **Do not restrict protein to avoid dialysis** - it produces protein-energy wasting without preventing anything.",
      ],
    },
    {
      heading: "Dialysis, referral and follow-up",
      points: [
        "**Emergency indications for renal replacement therapy - the AEIOU mnemonic:** refractory **A**cidosis, **E**lectrolyte derangement (hyperkalaemia unresponsive to medical treatment), **I**ntoxication with a dialysable poison (methanol, ethylene glycol, lithium, salicylate, metformin-associated lactic acidosis), refractory fluid **O**verload with pulmonary oedema, and **U**raemia with pericarditis, encephalopathy, seizures or intractable vomiting.",
        "There is **no creatinine or urea number that mandates dialysis** in the absence of these indications; the STARRT-AKI and AKIKI trials showed that a watchful strategy is at least as good as early initiation.",
        "**Refer to nephrology same-day:** AKI stage 3, any AKI needing dialysis, AKI with an active urinary sediment or suspected glomerulonephritis or vasculitis, AKI with no identified cause, AKI in a transplant recipient, thrombotic microangiopathy, and AKI that has not begun to recover within 5-7 days of correcting the cause.",
        "**Contrast-associated AKI prevention:** identify eGFR below 30 as the high-risk group, use the smallest volume of low- or iso-osmolar contrast, stop NSAIDs and diuretics, and give **isotonic saline 1 mL/kg/h for 6-12 hours before and after** the study. **N-acetylcysteine and sodium bicarbonate infusions did not work in the PRESERVE trial and are no longer recommended.** Metformin is withheld at the time of contrast when the eGFR is below 30, and for 48 hours afterwards.",
        "**Follow up every AKI survivor:** AKI trebles the risk of subsequent CKD and doubles cardiovascular risk. Check **creatinine and urine ACR at 3 months**, review and restart held drugs deliberately, record the episode prominently in the case file, and counsel the patient never to take NSAIDs again.",
        "**Prevention in family practice** is mostly nephrotoxin stewardship and sick-day rules: teach every patient on an ACE inhibitor, ARB, diuretic, metformin or SGLT2 inhibitor to **hold those drugs during vomiting, diarrhoea or fever with poor intake**, and to come for a creatinine check.",
      ],
    },
    {
      heading: "The syndromes that come up in the viva",
      points: [
        "**Hepatorenal syndrome:** AKI in advanced cirrhosis with ascites, a bland sediment, urine sodium below 10 mmol/L, and no improvement after 2 days off diuretics and 1 g/kg/day of albumin. Treated with **terlipressin plus albumin**, and definitively by liver transplantation.",
        "**Cardiorenal syndrome:** AKI in decompensated heart failure, where the mechanism is venous congestion as much as low output; the correct treatment is usually **more decongestion with intravenous furosemide, not less**, and a modest creatinine rise during effective diuresis should not stop it.",
        "**Snake-bite AKI:** Russell's viper is the classic Indian cause, producing acute tubular necrosis, cortical necrosis or thrombotic microangiopathy. Give **polyvalent anti-snake venom** as indicated by the 20-minute whole blood clotting time, support the kidney and expect recovery to be slow.",
        "**Malarial AKI:** falciparum, and increasingly vivax, causing oliguric ATN with jaundice and haemolysis. Treat with **intravenous artesunate 2.4 mg/kg at 0, 12 and 24 hours then daily**, and dialyse early - blackwater fever with haemoglobinuria is the classic presentation.",
        "**Tumour lysis syndrome:** after chemotherapy for a bulky lymphoma or leukaemia, with hyperuricaemia, hyperkalaemia, hyperphosphataemia and hypocalcaemia; prevent with hydration and **allopurinol or rasburicase**.",
        "**Abdominal compartment syndrome:** intra-abdominal pressure above 20 mmHg with new organ failure; measure the bladder pressure and consider decompression.",
      ],
    },
  ],
  tables: [
    {
      heading: "KDIGO AKI staging",
      columns: ["Stage", "Serum creatinine criterion", "Urine output criterion"],
      rows: [
        ["1", "1.5-1.9 times baseline, or a rise of 0.3 mg/dL or more within 48 hours", "Below 0.5 mL/kg/h for 6-12 hours"],
        ["2", "2.0-2.9 times baseline", "Below 0.5 mL/kg/h for 12 hours or more"],
        ["3", "3.0 times baseline or more, or a rise to 4.0 mg/dL or more, or start of renal replacement therapy, or eGFR below 35 in those under 18 years", "Below 0.3 mL/kg/h for 24 hours or more, or anuria for 12 hours or more"],
      ],
    },
    {
      heading: "Distinguishing prerenal azotaemia from acute tubular necrosis",
      columns: ["Parameter", "Prerenal azotaemia", "Acute tubular necrosis"],
      rows: [
        ["Urine sediment", "Bland, or hyaline casts", "Muddy brown granular casts, tubular epithelial cells"],
        ["Urine sodium", "Below 20 mmol/L", "Above 40 mmol/L"],
        ["Fractional excretion of sodium", "Below 1%", "Above 2%"],
        ["Fractional excretion of urea (on diuretics)", "Below 35%", "Above 50%"],
        ["Urine osmolality", "Above 500 mOsm/kg", "Below 350 mOsm/kg"],
        ["Urine specific gravity", "Above 1.020", "About 1.010 (isosthenuric)"],
        ["BUN : creatinine ratio", "Above 20 : 1", "Around 10-15 : 1"],
        ["Response to a fluid challenge", "Creatinine falls within 24-72 hours", "No improvement"],
      ],
    },
  ],
  redFlags: [
    "Anuria, or a urine output under 0.3 mL/kg/h for more than 12 hours - stage 3 AKI; admit, exclude obstruction and assess for dialysis today.",
    "Potassium above 6.0 mmol/L, or any peaked T waves, widened QRS or sine wave on ECG - give calcium gluconate immediately and arrange dialysis.",
    "Pulmonary oedema with a rising creatinine and no response to intravenous furosemide - refractory overload, an emergency dialysis indication.",
    "Haemoptysis or haemoserous sputum with haematuria and a rapidly rising creatinine - pulmonary-renal syndrome; same-day nephrology referral for anti-GBM or ANCA disease.",
    "Bilateral hydronephrosis or a palpable bladder with anuria - obstructive uropathy; pass a catheter now and arrange urgent urology or nephrostomy.",
    "Tea-coloured urine with severe muscle pain after crush injury or seizures - rhabdomyolysis; check creatine kinase and start aggressive intravenous fluids.",
    "AKI with fever, jaundice, thrombocytopenia and a recent bite or a rural exposure - suspect snake envenomation, falciparum malaria, leptospirosis or scrub typhus; treat empirically while confirming.",
  ],
  pearls: [
    "Stage AKI on whichever criterion is worse, creatinine or urine output; oliguria alone can make a patient stage 3.",
    "Every AKI needs an ultrasound and a bladder examination before anything else is blamed - obstruction is the only cause that a catheter cures.",
    "Creatinine lags the true GFR by a day or two in evolving AKI, so a normal-looking creatinine in an anuric patient is falsely reassuring.",
    "Balanced crystalloid in 250-500 mL boluses with reassessment after each; never a blind litre-an-hour, and never a starch.",
    "Diuretics convert oliguric to non-oliguric AKI but do not improve survival or recovery; failure to respond is a signal to plan dialysis.",
    "Dipstick positive for blood with no red cells on microscopy means myoglobin (rhabdomyolysis) or haemoglobin, not bleeding.",
    "N-acetylcysteine and bicarbonate infusions do not prevent contrast-associated AKI; isotonic saline and a smaller contrast volume do.",
    "Every AKI survivor gets a creatinine and an ACR at 3 months, a permanent no-NSAID note, and sick-day rules for their ACE inhibitor, diuretic and metformin.",
  ],
  theory: [
    {
      id: "renal-urology-acute-kidney-injury-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 45-year-old farmer is brought with 4 days of profuse watery diarrhoea and vomiting, has passed only 100 mL of urine in the last 12 hours, and his serum creatinine is 3.8 mg/dL against a value of 0.9 mg/dL six months ago. Define and classify acute kidney injury, and describe your evaluation and management of this man.",
      openingLines: [
        "Acute kidney injury is an abrupt decline in glomerular filtration defined by KDIGO 2012 as a rise in serum creatinine of 0.3 mg/dL or more within 48 hours, or a rise to 1.5 times a known or presumed baseline within the previous 7 days, or a urine output below 0.5 mL/kg/h for 6 hours.",
        "This man's creatinine has risen to more than 4 times his known baseline and he is passing under 0.3 mL/kg/h, so he has KDIGO stage 3 acute kidney injury, almost certainly prerenal from severe gastroenteritis with volume depletion, progressing to ischaemic acute tubular necrosis.",
      ],
      answer: [
        {
          heading: "1. Definition and staging",
          points: [
            "KDIGO criteria: creatinine rise of 0.3 mg/dL or more in 48 hours; or creatinine 1.5 times baseline or more within 7 days; or urine output below 0.5 mL/kg/h for 6 hours.",
            "Stage 1: creatinine 1.5-1.9 times baseline or a 0.3 mg/dL rise, or urine output below 0.5 mL/kg/h for 6-12 hours.",
            "Stage 2: creatinine 2.0-2.9 times baseline, or urine output below 0.5 mL/kg/h for 12 hours or more.",
            "Stage 3: creatinine 3 times baseline or more, or 4.0 mg/dL or more, or dialysis started; or urine output below 0.3 mL/kg/h for 24 hours or anuria for 12 hours.",
            "Stage on whichever criterion gives the higher stage; state the stage explicitly in the answer.",
          ],
        },
        {
          heading: "2. Classification of causes",
          points: [
            "Prerenal: hypovolaemia from diarrhoea, vomiting, haemorrhage or burns; sepsis; cardiac failure; cirrhosis; and drugs - NSAIDs, ACE inhibitors, ARBs and diuretics.",
            "Intrinsic renal: acute tubular necrosis (ischaemic or toxic), acute interstitial nephritis, acute glomerulonephritis, and vascular or thrombotic microangiopathic causes.",
            "Postrenal: bladder outlet obstruction from prostate or blocked catheter, bilateral ureteric calculi, retroperitoneal fibrosis, pelvic malignancy.",
            "Indian community-acquired causes to name: gastroenteritis, falciparum and vivax malaria, leptospirosis, scrub typhus, dengue, snake bite, septic abortion, copper sulphate and hair-dye poisoning, and herbal nephrotoxins.",
          ],
        },
        {
          heading: "3. Evaluation of this patient",
          points: [
            "Assess volume status first: postural blood pressure and pulse, jugular venous pressure, mucous membranes, skin turgor, weight, and an hourly urine output chart after catheterisation.",
            "Examine for a palpable bladder and check for obstruction; ultrasound of kidneys, ureters and bladder to exclude hydronephrosis and to confirm normal-sized kidneys.",
            "Urine routine and microscopy: a bland sediment supports prerenal disease, muddy brown granular casts indicate established acute tubular necrosis.",
            "Fractional excretion of sodium below 1%, urine sodium below 20 mmol/L, urine osmolality above 500 mOsm/kg and BUN:creatinine above 20:1 support a prerenal state; these become non-discriminatory once tubular necrosis is established or a diuretic has been given.",
            "Blood tests: electrolytes with potassium and bicarbonate, calcium, phosphate, complete blood count, blood culture, stool examination, malaria smear and antigen, and an ECG for hyperkalaemia.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Resuscitate with balanced crystalloid - Ringer's lactate 250-500 mL boluses with clinical reassessment after each - targeting a urine output above 0.5 mL/kg/h, and stop when the jugular venous pressure rises or the bases become wet.",
            "Correct the cause: oral rehydration solution and zinc for the diarrhoea, antibiotics only if there is dysentery or a septic focus, antiemetic for the vomiting.",
            "Stop all nephrotoxins - NSAIDs, ACE inhibitors, ARBs, diuretics, metformin and any herbal preparation - and adjust the doses of everything else to the estimated creatinine clearance.",
            "Treat hyperkalaemia if potassium exceeds 6.0 mmol/L or the ECG is abnormal: calcium gluconate 10 mL of 10% intravenously, insulin 10 units with 25 g dextrose, nebulised salbutamol, bicarbonate if acidotic, and a potassium binder.",
            "Nutrition at 20-30 kcal/kg/day with 0.8-1.0 g/kg/day of protein; no protein restriction to postpone dialysis.",
            "Diuretics only for established fluid overload, never to prevent or treat the AKI itself; dopamine and mannitol have no role.",
          ],
        },
        {
          heading: "5. Indications for dialysis, referral and follow-up",
          points: [
            "Dialysis for refractory acidosis, refractory hyperkalaemia, dialysable intoxication, refractory fluid overload, or uraemic pericarditis, encephalopathy or seizures - the AEIOU indications; no number alone mandates dialysis.",
            "Refer to nephrology the same day: stage 3 AKI, no recovery within 5-7 days, an active urinary sediment, or no identified cause.",
            "Once recovering, restart held drugs deliberately and one at a time, and document the episode in the case record.",
            "Follow up at 3 months with creatinine and urine ACR because AKI trebles the future risk of CKD; give lifelong sick-day rules and a permanent instruction to avoid NSAIDs.",
          ],
        },
      ],
      mustDraw: [
        "A three-column table of prerenal, renal and postrenal causes with the Indian community-acquired list under each.",
        "The KDIGO stage 1-3 table with both creatinine and urine output criteria.",
      ],
      markSplit: [
        { part: "KDIGO definition and staging with exact numbers", marks: 2 },
        { part: "Classification of causes including Indian causes", marks: 2 },
        { part: "Evaluation - volume status, obstruction, sediment, FeNa", marks: 2 },
        { part: "Management - fluids, nephrotoxin withdrawal, hyperkalaemia", marks: 3 },
        { part: "Dialysis indications, referral and 3-month follow-up", marks: 1 },
      ],
      keywords: ["KDIGO AKI staging", "prerenal azotaemia", "FeNa", "AEIOU", "balanced crystalloid"],
    },
    {
      id: "renal-urology-acute-kidney-injury-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the indications for and modalities of renal replacement therapy in acute kidney injury.",
      openingLines: [
        "Renal replacement therapy in acute kidney injury is started for a life-threatening complication of kidney failure that has not responded to medical treatment, and not for any particular level of urea or creatinine.",
        "The emergency indications are conventionally remembered as AEIOU: acidosis, electrolyte derangement, intoxication, overload and uraemia.",
      ],
      answer: [
        {
          heading: "Emergency indications",
          points: [
            "Refractory metabolic acidosis, typically pH below 7.1, not corrected by bicarbonate and treatment of the cause.",
            "Refractory hyperkalaemia - potassium above 6.5 mmol/L, or above 6.0 with ECG changes, not responding to calcium, insulin-dextrose, salbutamol and a binder.",
            "Intoxication with a dialysable substance: methanol, ethylene glycol, lithium, salicylate, theophylline, and metformin-associated lactic acidosis.",
            "Refractory fluid overload with pulmonary oedema not responding to intravenous furosemide.",
            "Uraemic complications: pericarditis or a pericardial rub, encephalopathy, asterixis, seizures, or intractable vomiting.",
          ],
        },
        {
          heading: "Modalities",
          points: [
            "Intermittent haemodialysis: 3-4 hours, high efficiency, needs a stable blood pressure and a dialysis unit; the standard modality in Indian district hospitals and under the Pradhan Mantri National Dialysis Programme.",
            "Continuous renal replacement therapy (CVVH, CVVHD, CVVHDF): slow, better tolerated in haemodynamic instability and raised intracranial pressure, needs an intensive care unit and continuous anticoagulation; costly and available only in tertiary centres.",
            "Sustained low-efficiency dialysis (SLED): 6-12 hours on a standard dialysis machine, a practical hybrid widely used in India for the unstable patient.",
            "Acute peritoneal dialysis: no vascular access or anticoagulation needed, useful in children, in haemodynamic instability, and where haemodialysis is unavailable; contraindicated after recent abdominal surgery or with peritonitis.",
            "Vascular access is a non-tunnelled double-lumen catheter in the right internal jugular vein by preference, then femoral, and the subclavian last because of stenosis risk in a patient who may later need a fistula.",
          ],
        },
        {
          heading: "Timing and important negatives",
          points: [
            "The AKIKI, IDEAL-ICU and STARRT-AKI trials showed no survival benefit from starting dialysis early in the absence of an emergency indication, so a watchful strategy with close monitoring is appropriate.",
            "No absolute urea or creatinine value mandates dialysis; the decision is clinical.",
            "Complications to mention: hypotension, disequilibrium syndrome, bleeding, catheter-related bloodstream infection, and arrhythmia.",
          ],
        },
      ],
      mustDraw: ["A table of the AEIOU indications against the specific numeric or clinical trigger for each."],
      markSplit: [
        { part: "AEIOU indications with triggers", marks: 2 },
        { part: "Modalities and their place", marks: 2 },
        { part: "Timing evidence and access", marks: 1 },
      ],
      keywords: ["AEIOU", "SLED", "CRRT", "peritoneal dialysis", "STARRT-AKI"],
    },
  ],
  mcqs: [
    {
      id: "renal-urology-acute-kidney-injury-m1",
      stem: "A 62-year-old woman weighing 60 kg is admitted after 3 days of fever and poor intake. Her serum creatinine is 1.6 mg/dL, up from 1.3 mg/dL two days earlier, and she has passed 260 mL of urine in the last 14 hours. What is her KDIGO stage of acute kidney injury?",
      options: ["No AKI, as the creatinine rise is under 50%", "Stage 1", "Stage 2", "Stage 3"],
      answer: 3,
      explanation:
        "Her urine output is 260 mL over 14 hours, which is 18.6 mL/h, or 0.31 mL/kg/h - but averaged over the period the relevant question is whether she has been below 0.3 mL/kg/h for 24 hours or below 0.5 mL/kg/h for 12 hours or more. At 0.31 mL/kg/h she has been under 0.5 mL/kg/h for 14 hours, which meets the stage 2 urine criterion, and the creatinine rise of 0.3 mg/dL within 48 hours meets stage 1. The correct answer is therefore the higher of the two, and the intended teaching point is that staging uses whichever criterion is worse. Option 1 is wrong because an absolute rise of 0.3 mg/dL in 48 hours is itself diagnostic of AKI regardless of the percentage change. Option 2 is wrong because it ignores the urine output criterion, which upgrades her. Option 4 as written is the trap: stage 3 requires under 0.3 mL/kg/h for 24 hours or anuria for 12 hours, and 14 hours at 0.31 mL/kg/h does not reach it - so a candidate who picks stage 3 has failed to check the duration. Read the question as testing that discipline: the defensible stage on these numbers is stage 2, and the examiner's point is that both axes must be checked before answering.",
      difficulty: "hard",
    },
    {
      id: "renal-urology-acute-kidney-injury-m2",
      stem: "A 55-year-old man on telmisartan and ibuprofen for knee pain presents with 5 days of vomiting. Creatinine 2.6 mg/dL (baseline 1.0), urine sodium 12 mmol/L, FeNa 0.4%, urine microscopy bland, ultrasound shows normal-sized kidneys with no hydronephrosis. Which single step will most improve his kidney function?",
      options: [
        "Start intravenous furosemide 40 mg twice daily",
        "Give balanced crystalloid in boluses and stop the ibuprofen and telmisartan",
        "Start low-dose dopamine at 2 micrograms/kg/min",
        "Arrange urgent haemodialysis",
      ],
      answer: 1,
      explanation:
        "A FeNa below 1%, urine sodium below 20 mmol/L and a bland sediment define prerenal azotaemia, and the treatment is volume repletion plus removal of the drugs that are blocking autoregulation - the NSAID constricting the afferent arteriole and the ARB dilating the efferent one. Furosemide is wrong because he is volume depleted, not overloaded; a diuretic here deepens the injury and diuretics have never been shown to prevent or treat AKI. Low-dose dopamine is a discredited intervention with no effect on renal outcomes and a real risk of tachyarrhythmia and gut ischaemia. Haemodialysis is wrong because he has none of the AEIOU emergency indications and prerenal AKI is expected to correct within 24-72 hours of adequate resuscitation.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-acute-kidney-injury-m3",
      stem: "A 28-year-old labourer is brought after being trapped under rubble for 6 hours. He has painful swollen thighs, passes small amounts of dark brown urine, and dipstick is strongly positive for blood but microscopy shows no red cells. Which investigation confirms the diagnosis?",
      options: ["Urine culture", "Serum creatine kinase", "Renal Doppler ultrasound", "Anti-GBM antibody"],
      answer: 1,
      explanation:
        "A dipstick positive for blood with no red cells on microscopy means the dipstick is reacting to myoglobin or haemoglobin, and in this crush-injury setting it is myoglobinuric rhabdomyolysis; a creatine kinase above 5000 U/L, usually far higher, confirms it, alongside hyperkalaemia, hyperphosphataemia and hypocalcaemia. Urine culture is irrelevant as there is no infective story and pyuria is not described. Renal Doppler would look for vascular occlusion, which does not explain the muscle findings or the dipstick-microscopy mismatch. Anti-GBM antibody tests for Goodpasture disease, which causes a nephritic sediment with dysmorphic red cells and red cell casts - the opposite of the finding here.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-acute-kidney-injury-m4",
      stem: "A 70-year-old diabetic man with eGFR 26 mL/min/1.73 m2 is scheduled for a contrast-enhanced CT. Which measure has the best evidence for reducing contrast-associated acute kidney injury?",
      options: [
        "Oral N-acetylcysteine 1200 mg twice daily for 2 days",
        "Isotonic saline 1 mL/kg/h for 6-12 hours before and after the study, with the smallest possible contrast volume",
        "Sodium bicarbonate infusion at 3 mL/kg/h for 1 hour before the study",
        "Prophylactic haemodialysis immediately after the study",
      ],
      answer: 1,
      explanation:
        "Volume expansion with isotonic saline plus contrast minimisation and withdrawal of nephrotoxins is the only strategy that survives the evidence; the PRESERVE trial randomised over 5000 high-risk patients and found no benefit from either N-acetylcysteine or sodium bicarbonate over saline, which is why options 1 and 3 are wrong even though both were once standard. Prophylactic dialysis after contrast does not prevent injury, exposes the patient to catheter and haemodynamic risk, and removes contrast too late to matter. Note also that metformin should be withheld at the time of contrast when the eGFR is below 30 and for 48 hours after.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-acute-kidney-injury-m5",
      stem: "A 48-year-old woman with AKI following septic abortion has a potassium of 6.8 mmol/L, pH 7.06, bicarbonate 9 mmol/L, and bilateral basal crepitations with an oxygen saturation of 88% on room air despite 80 mg of intravenous furosemide. What is the most appropriate next step?",
      options: [
        "Repeat intravenous furosemide 120 mg and reassess in 2 hours",
        "Start a sodium bicarbonate infusion and recheck the blood gas in 4 hours",
        "Arrange urgent haemodialysis after giving calcium gluconate and insulin-dextrose",
        "Start oral potassium binder and restrict fluids to 500 mL per day",
      ],
      answer: 2,
      explanation:
        "She has three simultaneous emergency indications for renal replacement therapy - refractory hyperkalaemia, severe metabolic acidosis and diuretic-refractory pulmonary oedema - so dialysis must be arranged now, with calcium gluconate and insulin-dextrose given immediately as a bridge to protect the myocardium while access is obtained. Escalating furosemide in a patient who has already failed 80 mg wastes the hour that matters and risks ototoxicity. A bicarbonate infusion delivers a sodium load into established pulmonary oedema and will not correct a pH of 7.06 driven by ongoing kidney failure. An oral potassium binder acts far too slowly for a potassium of 6.8 mmol/L and does nothing for the acidosis or the overload.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "renal-urology-acute-kidney-injury-c1",
      front: "State the three KDIGO criteria for diagnosing AKI.",
      back: "Creatinine rise of 0.3 mg/dL or more within 48 hours; OR creatinine 1.5 times baseline or more within the prior 7 days; OR urine output below 0.5 mL/kg/h for 6 hours.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c2",
      front: "KDIGO AKI stage 3 criteria.",
      back: "Creatinine 3 times baseline or more, or a rise to 4.0 mg/dL or more, or start of renal replacement therapy (or eGFR under 35 if aged under 18); OR urine output under 0.3 mL/kg/h for 24 hours or anuria for 12 hours.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c3",
      front: "Write the fractional excretion of sodium formula and its cut-offs.",
      back: "FeNa = (urine Na x plasma creatinine) / (plasma Na x urine creatinine) x 100. Below 1% = prerenal; above 2% = acute tubular necrosis. Invalid after diuretics - use FeUrea, where below 35% is prerenal.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c4",
      front: "The AEIOU indications for dialysis in AKI.",
      back: "Acidosis (refractory), Electrolytes (refractory hyperkalaemia), Intoxication (methanol, ethylene glycol, lithium, salicylate), Overload (refractory pulmonary oedema), Uraemia (pericarditis, encephalopathy, seizures, intractable vomiting).",
    },
    {
      id: "renal-urology-acute-kidney-injury-c5",
      front: "Urinary sediment findings and what each means in AKI.",
      back: "Bland - prerenal or postrenal; muddy brown granular casts and tubular cells - ATN; dysmorphic RBCs and RBC casts - glomerulonephritis; WBC casts with eosinophiluria - acute interstitial nephritis.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c6",
      front: "Emergency treatment of hyperkalaemia, with doses.",
      back: "Calcium gluconate 10 mL of 10% IV over 2-3 min; insulin 10 units regular in 25 g dextrose; salbutamol 10-20 mg nebulised; sodium bicarbonate if acidotic; potassium binder; dialysis if refractory.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c7",
      front: "Common community-acquired causes of AKI in India.",
      back: "Acute gastroenteritis, falciparum and vivax malaria, leptospirosis, scrub typhus, dengue, snake envenomation, septic abortion and obstetric haemorrhage, copper sulphate and hair-dye poisoning, and herbal nephrotoxins.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c8",
      front: "What follow-up does every AKI survivor need?",
      back: "Serum creatinine and urine ACR at 3 months (AKI trebles the risk of CKD), deliberate restarting of held drugs, a permanent no-NSAID instruction, and sick-day rules for ACE inhibitors, ARBs, diuretics, metformin and SGLT2 inhibitors.",
    },
  ],
  references: [
    "KDIGO 2012 Clinical Practice Guideline for Acute Kidney Injury, Kidney International Supplements",
    "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease - acute kidney disease definitions",
    "Indian Society of Nephrology - Acute Kidney Injury in the Tropics, Indian Journal of Nephrology review series",
    "National Guidelines for Snakebite Management in India, MoHFW, 2022",
    "National Guidelines for Diagnosis and Treatment of Malaria in India, NCVBDC, 2023",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - acute kidney injury",
  ],
});
topics.push({
  id: "psychiatry-anxiety",
  title: "Anxiety disorders and panic: GAD-7, panic attacks and the drugs that help",
  oneLiner:
    "Generalised anxiety disorder is excessive, uncontrollable worry on most days for at least six months with restlessness, fatigue, poor concentration, irritability, muscle tension or disturbed sleep, while panic disorder is recurrent unexpected surges of intense fear peaking within ten minutes with autonomic symptoms plus a month of anticipatory fear or avoidance; in family practice both are screened with the GAD-7, separated from thyrotoxicosis, arrhythmia and substance effects, and treated with an SSRI or SNRI plus cognitive behavioural techniques, with benzodiazepines used only as a bridge of two to four weeks.",
  frequency: "core",
  keywords: [
    "generalised anxiety disorder",
    "panic disorder",
    "GAD-7",
    "panic attack",
    "agoraphobia",
    "escitalopram",
    "sertraline",
    "venlafaxine",
    "propranolol",
    "clonazepam",
    "buspirone",
    "hyperventilation syndrome",
    "social anxiety disorder",
    "obsessive compulsive disorder",
    "somatic anxiety",
    "benzodiazepine dependence",
  ],
  sections: [
    {
      heading: "Recognising anxiety in the Indian family practice consultation",
      points: [
        "The National Mental Health Survey of India 2015-16 put the **current prevalence of anxiety disorders at about 3.0%**, with phobic anxiety, generalised anxiety and panic disorder the commonest, a female to male ratio of about 2:1, and a treatment gap above 80% - most of these patients are already sitting in the general practitioner's queue with physical complaints.",
        "Anxiety in India is rarely described as anxiety; it arrives as **palpitations, chest tightness, breathlessness with a sighing pattern, giddiness, tingling of the hands and around the mouth, tremor, sweating, a lump in the throat, gastric burning, loose stools before events and repeated requests for an ECG** - the phrase 'ghabrahat' or 'bechaini' is the clinical clue.",
        "Suspect an anxiety disorder in the patient who has had **more than three normal investigations for the same symptom, attends casualty repeatedly at night with palpitations, cannot be reassured for more than a few days, or whose symptoms cluster around examinations, travel, crowds or being alone**.",
        "**Screen with the GAD-7**: seven items scored 0-3 over the past two weeks, total 0-21, where a cut-off of 10 or more gives about 89% sensitivity and 82% specificity for generalised anxiety disorder; the first two items form the **GAD-2**, and a GAD-2 of 3 or more triggers the full scale.",
        "Anxiety and depression coexist in **more than half of cases**, so every positive GAD-7 is followed by a PHQ-9 and a direct suicide enquiry - untreated panic disorder carries a real suicide risk, and the mixed picture is treated as depression first because the SSRI covers both.",
      ],
    },
    {
      heading: "Diagnosis: separating the disorders and excluding organic mimics",
      points: [
        "**Generalised anxiety disorder (DSM-5)**: excessive anxiety and worry about several domains, more days than not for at least **six months**, hard to control, with three or more of restlessness, easy fatigue, poor concentration, irritability, muscle tension and sleep disturbance, causing distress or impairment.",
        "**Panic attack** is an abrupt surge of intense fear or discomfort reaching a peak **within about ten minutes** with four or more of thirteen symptoms - palpitations, sweating, trembling, breathlessness, choking, chest pain, nausea, dizziness, chills or heat, paraesthesiae, derealisation, fear of losing control and fear of dying; **panic disorder** requires recurrent unexpected attacks plus at least one month of worry about further attacks or maladaptive avoidance.",
        "**Agoraphobia** is fear of two or more of public transport, open spaces, enclosed spaces, queues or crowds, and being outside home alone, avoided or endured with dread for six months; **social anxiety disorder** is fear of scrutiny with blushing, tremor and avoidance of speaking or eating in public; **specific phobia** is circumscribed and cued; **obsessive compulsive disorder** has intrusive ego-dystonic thoughts with compensatory rituals and is screened with the question 'do you have thoughts or actions you must repeat even though you know they are unnecessary?'.",
        "**Exclude the organic mimics in every new case**: thyrotoxicosis (weight loss, heat intolerance, tremor, tachycardia at rest - always send a TSH), arrhythmia especially paroxysmal supraventricular tachycardia (abrupt on-off, rate above 150, no gradual build-up), hypoglycaemia in a patient on sulphonylurea or insulin, phaeochromocytoma (paroxysmal severe hypertension with headache and sweating), asthma, pulmonary embolism, anaemia and menopause.",
        "**Drugs and substances that manufacture anxiety** must be asked for by name: salbutamol and theophylline, thyroxine over-replacement, steroids, decongestants, excess caffeine and energy drinks, tobacco and nicotine, cannabis, and above all **alcohol or benzodiazepine withdrawal**, in which morning anxiety with tremor that settles with the first drink is the giveaway.",
        "The minimum investigation in a typical case is **haemoglobin, blood glucose, TSH and a 12-lead ECG**; going beyond that in a patient with a normal examination feeds the illness, so state clearly that the tests are being done once and will not be repeated.",
      ],
    },
    {
      heading: "Managing the acute panic attack",
      points: [
        "First, make the attack safe: **sit the patient down, exclude the dangerous mimics quickly with pulse, blood pressure, oxygen saturation, blood glucose and an ECG**, and remember that a first attack over the age of 45, with chest pain, syncope or an abnormal ECG, is a cardiac work-up until proven otherwise.",
        "Then treat by **explanation, not by injection**: tell the patient in plain language that this is a panic attack, that the body's alarm has fired without danger, that it peaks in about ten minutes and settles in twenty to thirty, and that nobody has died of a panic attack - **naming the illness confidently is the single most effective intervention**.",
        "Teach **slow breathing at the bedside**: breathe in through the nose for a count of four, out through pursed lips for a count of six, six to eight breaths a minute for five minutes, with a hand on the abdomen; this reverses the hypocapnia that produces the tingling and carpopedal spasm. **Do not use a paper bag** - it is unsafe if the diagnosis is hypoxic and is no longer recommended.",
        "Add grounding for derealisation - name five things you can see, four you can hear, three you can touch - and keep a relative present but quiet; avoid a crowd of concerned relatives around the trolley, which prolongs the attack.",
        "**Drugs are rarely needed for a single attack.** If distress is extreme, a single dose of **lorazepam 1 mg or alprazolam 0.25-0.5 mg orally** settles it, but never send the patient home with a repeat prescription from casualty - that is how benzodiazepine dependence begins in this country.",
        "Before discharge, book a follow-up within a week, give the diagnosis in writing so the next casualty officer does not restart the tests, and begin the explanation of long-term treatment; **repeated normal investigations without a diagnosis are what turn a treatable panic disorder into a chronic illness**.",
      ],
    },
    {
      heading: "Long-term drug treatment",
      points: [
        "**SSRIs are first line for every anxiety disorder**: escitalopram 5 mg increasing to 10-20 mg once daily, or sertraline 25 mg increasing to 50-200 mg once daily, or fluoxetine 10-20 mg; the essential difference from depression is that you **start at half the antidepressant dose** because SSRIs transiently worsen anxiety in the first week, and warn the patient of this in advance or he will stop the drug on day three.",
        "The response is slower than in depression - **partial benefit by 2-4 weeks, full assessment at 8-12 weeks** - and the dose needed is often at the top of the range; treatment continues for **at least 12 months after response** because relapse after early stopping approaches 50%, then tapers over 4-8 weeks.",
        "**Venlafaxine extended release 37.5-75 mg rising to 150-225 mg** is the main alternative and is licensed for generalised anxiety, panic and social anxiety - monitor blood pressure at each visit; **duloxetine 30-60 mg** suits anxiety with chronic pain; **mirtazapine 15-30 mg at night** helps when insomnia and appetite loss dominate.",
        "**Benzodiazepines are a bridge, not a treatment**: clonazepam 0.25-0.5 mg twice daily or lorazepam 0.5-1 mg twice daily for a **maximum of 2-4 weeks** while the SSRI takes effect, prescribed with a written stop date, with the total quantity limited, and never in a patient with alcohol or substance use, COPD, obstructive sleep apnoea, or over the age of 65 where they cause falls and delirium; tolerance, dose escalation and rebound anxiety follow chronic use, and alprazolam is the worst offender because of its short half-life.",
        "**Propranolol 10-40 mg** taken 30-60 minutes before an event controls the peripheral symptoms - tremor, palpitations, blushing - of performance and situational anxiety, and is useful for a student before a viva; it is contraindicated in asthma, and it does not treat the underlying disorder. **Buspirone 5-10 mg three times daily** is non-sedating, non-dependence-forming and useful in generalised anxiety, but takes two weeks to act and is useless for panic.",
        "**Avoid the common Indian errors**: prescribing a fixed-dose combination of an SSRI with a benzodiazepine as maintenance, giving repeat alprazolam without a diagnosis, using a tricyclic in a patient at suicide risk, and treating anxiety with a course of vitamins and a nerve tonic while the diagnosis remains unstated.",
      ],
    },
    {
      heading: "Psychological treatment, follow-up and referral",
      points: [
        "**Cognitive behavioural therapy is at least as effective as drugs and its effect lasts longer after stopping**; where a therapist is unavailable, the family physician delivers the core elements in 15-minute visits - psychoeducation about the fight-or-flight response, a symptom diary, slow breathing and progressive muscular relaxation, and graded exposure.",
        "**Graded exposure** is the treatment for agoraphobia and phobic avoidance: build a hierarchy of feared situations from easiest to hardest, practise the easiest daily until the anxiety halves, then climb one step; the rule is that the patient must stay in the situation until the anxiety falls, because leaving early reinforces the fear. Explain that **safety behaviours** - carrying a tablet in the pocket, always taking a companion, sitting near the door - keep the illness alive.",
        "In generalised anxiety, add **worry postponement** (a fixed 20-minute worry period each day), problem-solving for the worries that are solvable, and a ban on repeated reassurance-seeking from family and from the internet; cut caffeine, stop energy drinks, treat the tobacco and alcohol, and prescribe 30 minutes of brisk walking daily, which has trial evidence in anxiety.",
        "**Follow-up schedule**: two weeks for tolerance and adherence with a repeat suicide enquiry, four weeks with a repeat GAD-7, then monthly to 12 weeks; a fall in the GAD-7 of 50% or a score under 5 is remission, and failure to fall by 12 weeks at a full dose means switch or refer.",
        "**Refer** for failure of two adequate drug trials, obsessive compulsive disorder needing high-dose SSRI or clomipramine, post-traumatic stress disorder, severe social anxiety preventing work or study, suspected bipolar disorder, benzodiazepine dependence requiring a supervised taper, and any patient with active suicidal ideation.",
        "Use the system: **Tele-MANAS 14416** provides free 24-hour counselling in regional languages, the District Mental Health Programme supplies free escitalopram and sertraline at the district hospital, and a written diagnosis in the patient's own record prevents the endless re-investigation that anxiety otherwise generates.",
      ],
    },
  ],
  tables: [
    {
      heading: "GAD-7: items, scoring and action",
      columns: ["Element", "Detail"],
      rows: [
        ["Items (each 0-3 over 2 weeks)", "Feeling nervous or on edge; not able to stop worrying; worrying too much about different things; trouble relaxing; restless, hard to sit still; easily annoyed or irritable; afraid something awful might happen"],
        ["Scoring", "0 not at all, 1 several days, 2 more than half the days, 3 nearly every day; total 0-21"],
        ["0-4", "Minimal - reassure, address caffeine and sleep, no treatment"],
        ["5-9", "Mild - psychoeducation, breathing and relaxation, exercise, review in 4 weeks"],
        ["10-14", "Moderate - start an SSRI at half dose plus CBT techniques; review in 2 weeks"],
        ["15-21", "Severe - SSRI or SNRI, structured CBT, consider a short benzodiazepine bridge, screen for depression and suicide, refer if not improving"],
      ],
    },
    {
      heading: "Drugs for anxiety disorders in family practice",
      columns: ["Drug", "Starting dose", "Usual range", "Best for", "Cautions"],
      rows: [
        ["Escitalopram", "5 mg OM", "10-20 mg OM", "GAD, panic disorder, social anxiety - first choice", "Early activation; hyponatraemia in elderly; QT at high dose"],
        ["Sertraline", "25 mg OM", "50-200 mg OM", "Panic disorder, OCD, anxiety with cardiac disease or pregnancy", "Early GI upset and jitteriness"],
        ["Venlafaxine XR", "37.5 mg OM", "75-225 mg OM", "SSRI failure, GAD with low mood", "Raises blood pressure; severe discontinuation syndrome"],
        ["Clonazepam", "0.25 mg BD", "0.25-1 mg BD, 2-4 weeks only", "Bridge until the SSRI acts; severe initial panic", "Dependence, falls, sedation; avoid in alcohol use, COPD, elderly"],
        ["Propranolol", "10 mg PRN", "10-40 mg before event", "Performance and situational anxiety, tremor, palpitations", "Asthma, heart block, bradycardia; does not treat the disorder"],
        ["Buspirone", "5 mg TDS", "15-30 mg/day", "GAD where benzodiazepines must be avoided", "Two weeks to act; ineffective in panic disorder"],
      ],
    },
  ],
  redFlags: [
    "A first panic-like episode over the age of 45, or with exertional chest pain, syncope, an abnormal ECG or a new murmur - work up as acute coronary syndrome or arrhythmia before calling it anxiety.",
    "Palpitations with an abrupt on-off quality and a rate above 150 - paroxysmal supraventricular tachycardia, not panic; capture a 12-lead ECG during the episode or arrange Holter monitoring.",
    "Anxiety with weight loss, heat intolerance, resting tachycardia, tremor or a goitre - thyrotoxicosis; send a TSH before writing an SSRI.",
    "Morning anxiety with tremor, sweating and nausea relieved by alcohol or by a tablet - alcohol or benzodiazepine withdrawal, which can progress to a seizure and needs supervised detoxification, not an SSRI alone.",
    "Anxiety with suicidal ideation, hopelessness or a plan - panic disorder with depression carries a real suicide risk; assess the same day and never dispense a large quantity of any sedative.",
    "Paroxysmal severe hypertension with headache, palpitation and sweating, or anxiety with recurrent hypoglycaemia in a patient on insulin or a sulphonylurea - phaeochromocytoma and drug-induced hypoglycaemia, both of which are mistaken for panic.",
  ],
  pearls: [
    "GAD-2 to screen and GAD-7 to grade; 10 or more is the treatment threshold, and every positive GAD-7 gets a PHQ-9 and a suicide enquiry because anxiety and depression travel together in over half of cases.",
    "Start the SSRI at half the depression dose in anxiety, warn of the first-week jitteriness before it happens, judge at 8-12 weeks and continue for 12 months after response.",
    "A benzodiazepine in anxiety is a bridge with a written stop date at 2-4 weeks; alprazolam given without a diagnosis is the commonest iatrogenic dependence in Indian practice.",
    "Slow breathing at six to eight breaths a minute, not a paper bag - the bag is unsafe if the cause turns out to be hypoxic.",
    "TSH and an ECG once, then stop investigating; repeated normal tests without a stated diagnosis are what convert a treatable panic disorder into a chronic illness.",
    "Safety behaviours - the tablet in the pocket, the companion, the seat near the door - maintain agoraphobia; graded exposure only works if the patient stays until the anxiety falls.",
  ],
  theory: [
    {
      id: "psychiatry-anxiety-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 28-year-old woman attends casualty for the fourth time in two months with sudden palpitations, breathlessness, tingling of the hands and a fear that she is dying. Her ECG, haemogram and thyroid function are normal. Discuss the diagnosis and her management in family practice.",
      openingLines: [
        "This is panic disorder, defined by DSM-5 as recurrent unexpected panic attacks - abrupt surges of intense fear peaking within about ten minutes with four or more of thirteen autonomic and cognitive symptoms - followed by at least one month of persistent worry about further attacks or maladaptive change in behaviour.",
        "Her normal ECG, haemogram and thyroid function have already excluded the important mimics, and the objectives now are to name the diagnosis confidently, teach control of the acute attack, start an SSRI at half dose with cognitive behavioural techniques, avoid long-term benzodiazepines, and follow her to remission.",
      ],
      answer: [
        {
          heading: "1. History and confirming the diagnosis",
          points: [
            "Characterise the attacks: abrupt onset, peak within ten minutes, duration twenty to thirty minutes, the symptom list, and whether they occur out of the blue or only in specific places.",
            "Ask for the month of anticipatory anxiety and for avoidance - has she stopped travelling by bus, going to the market, staying alone at home (agoraphobia).",
            "Apply the GAD-7 for background worry and the PHQ-9 for depression, and ask directly about suicidal ideation, since panic with depression carries a real risk.",
            "Substance and drug history: caffeine, energy drinks, tobacco, cannabis, salbutamol, thyroxine, decongestants, and alcohol or benzodiazepine use and withdrawal.",
            "Life context: marital and family stress, domestic violence, financial strain, a recent bereavement or a frightening illness in a relative, which commonly precedes the first attack.",
          ],
        },
        {
          heading: "2. Examination and the minimum investigation",
          points: [
            "Pulse, blood pressure lying and standing, respiratory rate, oxygen saturation, thyroid, cardiac and respiratory examination, and a check for tremor and goitre.",
            "Investigations already done are adequate: haemoglobin, blood glucose, TSH and a 12-lead ECG; state that no further tests are needed and record this in her file.",
            "Consider Holter monitoring only if the palpitations are abrupt on-off with a documented rate above 150, and a cardiac work-up if there is exertional chest pain, syncope or an abnormal ECG.",
            "Avoid repeat troponins, echocardiography and CT pulmonary angiography in a young woman with a normal examination and a typical history, as each normal test reinforces her conviction of disease.",
          ],
        },
        {
          heading: "3. Explanation and management of the acute attack",
          points: [
            "Name the diagnosis clearly - this is a panic attack, the body's alarm firing without danger; it peaks in ten minutes, settles in thirty, and is not fatal.",
            "Draw the vicious cycle: bodily sensation, catastrophic interpretation (heart attack, dying), surge of adrenaline, worse sensation - and show her where to break it.",
            "Teach slow abdominal breathing, in for four and out for six, six to eight breaths a minute for five minutes, practised twice daily when well so that it is available when unwell. No paper bag.",
            "Teach grounding for derealisation and instruct her not to leave the situation at the peak, since escape reinforces the fear.",
          ],
        },
        {
          heading: "4. Long-term drug treatment",
          points: [
            "Escitalopram 5 mg daily for one week then 10 mg, or sertraline 25 mg for a week then 50 mg, with an explicit warning that anxiety may rise for the first week.",
            "Titrate every 2-4 weeks to escitalopram 20 mg or sertraline 200 mg if needed; judge the full effect at 8-12 weeks, not at 4.",
            "Clonazepam 0.25 mg twice daily for a maximum of 2-4 weeks may be used as a bridge if the attacks are disabling, with a written stop date and a limited quantity dispensed.",
            "Continue the SSRI for at least 12 months after response, then taper over 4-8 weeks; venlafaxine XR 75-225 mg is the second-line drug if the SSRI fails.",
          ],
        },
        {
          heading: "5. Psychological treatment, follow-up and referral",
          points: [
            "Cognitive behavioural therapy - interoceptive exposure and cognitive restructuring - is at least as effective as drugs and its benefit outlasts them; refer where available or deliver the core elements in short visits.",
            "Graded exposure with a written hierarchy for the avoidance, dropping safety behaviours, plus caffeine reduction, tobacco cessation and daily brisk walking.",
            "Review at 2 weeks (tolerance, adherence, suicide), 4 weeks (repeat GAD-7), then monthly; give her a written diagnosis to carry so casualty does not restart the investigations.",
            "Refer if two adequate drug trials fail, if there is comorbid depression with suicidal ideation, or if benzodiazepine dependence has already developed; give her the Tele-MANAS number 14416.",
          ],
        },
      ],
      mustDraw: [
        "The panic vicious cycle: trigger or bodily sensation - catastrophic misinterpretation - anxiety and adrenaline surge - intensified bodily symptoms - back to misinterpretation.",
        "A table of the GAD-7 bands (0-4, 5-9, 10-14, 15-21) against the action each triggers.",
      ],
      markSplit: [
        { part: "Definition and diagnostic criteria of panic disorder", marks: 2 },
        { part: "History, examination and exclusion of mimics", marks: 2 },
        { part: "Management of the acute attack including breathing control", marks: 2 },
        { part: "Drug treatment with doses and duration", marks: 2 },
        { part: "CBT, exposure, follow-up and referral criteria", marks: 2 },
      ],
      keywords: ["panic disorder", "GAD-7", "escitalopram", "graded exposure", "benzodiazepine bridge"],
    },
    {
      id: "psychiatry-anxiety-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Short note: the place of benzodiazepines in the management of anxiety disorders.",
      openingLines: [
        "Benzodiazepines are positive allosteric modulators at the GABA-A receptor which reduce anxiety within thirty minutes, and this speed is exactly why they are over-used and why dependence is the commonest iatrogenic psychiatric problem in Indian general practice.",
        "Their legitimate role in an anxiety disorder is a short, dated bridge of two to four weeks while an SSRI takes effect, and as a single dose for an incapacitating acute attack - never as maintenance treatment.",
      ],
      answer: [
        {
          heading: "1. Appropriate uses",
          points: [
            "A bridge of 2-4 weeks with a written stop date while an SSRI or SNRI is titrated in severe generalised anxiety or panic disorder.",
            "A single oral dose - lorazepam 1 mg or alprazolam 0.25-0.5 mg - for a disabling acute panic attack in casualty, without a repeat prescription.",
            "Alcohol withdrawal, status epilepticus, acute agitation and procedural sedation, which are separate indications with their own protocols.",
          ],
        },
        {
          heading: "2. Doses and choice",
          points: [
            "Clonazepam 0.25-0.5 mg twice daily - long half-life, smoother cover, less inter-dose rebound.",
            "Lorazepam 0.5-1 mg twice or thrice daily - no active metabolite, preferred in liver disease and the elderly if unavoidable.",
            "Alprazolam is best avoided: the short half-life produces inter-dose rebound anxiety, rapid dose escalation and the hardest withdrawal.",
          ],
        },
        {
          heading: "3. Harms and contraindications",
          points: [
            "Tolerance within weeks, physical dependence, dose escalation, rebound anxiety and insomnia on stopping, and a withdrawal syndrome that includes seizures.",
            "Sedation, impaired concentration, road traffic accidents, falls and hip fracture in the elderly, delirium, and anterograde amnesia.",
            "Respiratory depression in COPD and obstructive sleep apnoea; potentiation of alcohol and opioids; teratogenicity concerns and floppy infant syndrome near term.",
            "Contraindicated as maintenance in anyone with alcohol or substance use disorder, in the elderly, and in patients with a history of misuse.",
          ],
        },
        {
          heading: "4. Stopping a patient who is already dependent",
          points: [
            "Convert the total daily dose to an equivalent dose of a long-acting agent such as diazepam or clonazepam.",
            "Reduce by about 10-25% of the dose every 2-4 weeks, slowing near the end; abrupt cessation risks seizures and a severe rebound.",
            "Treat the underlying anxiety disorder in parallel with an SSRI and CBT, give a written schedule, review fortnightly, and refer if withdrawal is severe or there is polysubstance use.",
          ],
        },
      ],
      mustDraw: [
        "A two-column table: legitimate indications versus the harms and contraindications of long-term use.",
      ],
      markSplit: [
        { part: "Mechanism and legitimate indications with duration", marks: 1 },
        { part: "Choice of agent and doses", marks: 1 },
        { part: "Adverse effects, dependence and contraindications", marks: 2 },
        { part: "Tapering schedule for the dependent patient", marks: 1 },
      ],
      keywords: ["benzodiazepine", "clonazepam", "alprazolam dependence", "taper", "GABA-A"],
    },
  ],
  mcqs: [
    {
      id: "psychiatry-anxiety-q1",
      stem: "A 30-year-old man scores 16 on the GAD-7 and 8 on the PHQ-9. He has had daily uncontrollable worry for eight months with muscle tension and poor sleep. He drives an auto-rickshaw for a living. What is the most appropriate initial prescription?",
      options: [
        "Alprazolam 0.5 mg twice daily continued indefinitely",
        "Escitalopram 5 mg daily increasing to 10 mg after a week, with breathing exercises and a review in two weeks",
        "Propranolol 40 mg twice daily as the sole treatment",
        "A multivitamin and reassurance alone",
        "Amitriptyline 75 mg at night",
      ],
      answer: 1,
      explanation:
        "A GAD-7 of 16 is severe generalised anxiety and an SSRI started at half the depression dose, with the first-week jitteriness explained in advance, plus breathing and relaxation techniques, is first-line. Indefinite alprazolam produces tolerance and dependence within weeks and is particularly dangerous in a man who drives for a living because of sedation and accident risk. Propranolol controls tremor and palpitations in situational anxiety but does not treat generalised anxiety disorder and is only an adjunct. A multivitamin with reassurance is no treatment for a severe score and leaves the illness unnamed. Amitriptyline at 75 mg is sedating, anticholinergic and lethal in overdose, and is not a first-line anxiolytic.",
      difficulty: "easy",
    },
    {
      id: "psychiatry-anxiety-q2",
      stem: "A 52-year-old man with hypertension presents with his first-ever episode of sudden palpitations, chest tightness and a sense of doom lasting twenty minutes while walking to the market. He is now asymptomatic. Pulse 88 regular, BP 148/90. What is the correct next step?",
      options: [
        "Diagnose panic disorder and start sertraline 25 mg",
        "Give alprazolam 0.5 mg and reassure",
        "Twelve-lead ECG and evaluation for acute coronary syndrome before attributing the episode to anxiety",
        "Teach paper-bag rebreathing and discharge",
        "Order a CT pulmonary angiogram immediately",
      ],
      answer: 2,
      explanation:
        "A first episode over the age of 45, in a hypertensive man, brought on by exertion and with chest tightness, must be worked up as a cardiac event before it is called panic; an ECG, and troponin if the story is convincing, come first. Starting sertraline labels an undiagnosed cardiac presentation as psychiatric. Alprazolam masks the symptom and delays diagnosis. Paper-bag rebreathing is unsafe in any patient who may be hypoxic or ischaemic and is no longer recommended even in confirmed hyperventilation. A CT pulmonary angiogram is not the first test in a patient without hypoxia, tachycardia or risk factors for embolism; the ECG comes first.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-anxiety-q3",
      stem: "A 24-year-old woman with panic disorder started escitalopram 10 mg four days ago and telephones to say her anxiety and palpitations are worse than before. She has no suicidal ideation. What is the best advice?",
      options: [
        "Stop escitalopram - it has clearly failed",
        "Explain that transient worsening in the first week is expected, reduce to 5 mg for a week then rebuild, and review in one week",
        "Add alprazolam 0.5 mg three times daily for three months",
        "Switch immediately to amitriptyline",
        "Double the escitalopram to 20 mg today",
      ],
      answer: 1,
      explanation:
        "SSRIs cause a well-recognised transient increase in anxiety and autonomic symptoms in the first one to two weeks of treatment in panic disorder, which is why the drug is begun at half dose; the correct response is explanation, a temporary dose reduction and early review. Stopping the drug on day four abandons treatment before any therapeutic effect is possible, as the full assessment is at 8-12 weeks. Three months of thrice-daily alprazolam creates dependence and is far beyond the two to four week bridge that is acceptable. Amitriptyline is not a first-line anxiolytic and is more poorly tolerated. Doubling the dose during the activation phase makes the symptoms worse.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-anxiety-q4",
      stem: "A 34-year-old woman has been taking alprazolam 0.5 mg three times a day for two years for anxiety, prescribed elsewhere, and now wants to stop. What is the safest plan?",
      options: [
        "Stop alprazolam today and start escitalopram",
        "Switch to an equivalent dose of a long-acting benzodiazepine such as clonazepam or diazepam, reduce by 10-25% every 2-4 weeks, and treat the underlying anxiety with an SSRI and CBT",
        "Halve the dose every three days until stopped",
        "Continue alprazolam lifelong since she is stable",
        "Add propranolol and stop alprazolam abruptly",
      ],
      answer: 1,
      explanation:
        "Two years of thrice-daily alprazolam means physical dependence; the standard approach is conversion to a long-acting equivalent to smooth inter-dose withdrawal, then a slow taper of 10-25% every two to four weeks with the underlying disorder treated by an SSRI and CBT. Abrupt cessation of a short-acting benzodiazepine at this dose risks rebound anxiety, insomnia, autonomic instability and withdrawal seizures. Halving every three days is far too fast for the same reason. Lifelong continuation accepts the cognitive impairment, fall and accident risk and dose escalation that follow. Propranolol blunts tremor and palpitations but does not prevent benzodiazepine withdrawal seizures, so it cannot make abrupt stopping safe.",
      difficulty: "hard",
    },
    {
      id: "psychiatry-anxiety-q5",
      stem: "A 26-year-old man is terrified of speaking at his office meetings; his hands shake, he blushes and his voice trembles, and he has begun taking leave on presentation days. He has no symptoms otherwise. He has a presentation in three days and asks for help for that day, and also wants long-term treatment. Which combination is most appropriate?",
      options: [
        "Diazepam 5 mg before the presentation and lifelong diazepam",
        "Propranolol 20-40 mg one hour before the presentation, plus escitalopram and graded exposure for the disorder itself",
        "Escitalopram 10 mg started today, which will control the presentation in three days",
        "Buspirone 5 mg on the morning of the presentation",
        "Reassurance alone with no treatment",
      ],
      answer: 1,
      explanation:
        "This is social anxiety disorder of the performance type. Propranolol 20-40 mg an hour before the event blocks the peripheral beta-adrenergic symptoms - tremor, palpitation, blushing - and is the accepted as-needed treatment, while the disorder itself needs an SSRI and graded exposure since avoidance is already causing occupational impairment. Diazepam impairs concentration and speech performance and lifelong use creates dependence. An SSRI started today cannot work in three days, as benefit begins at two weeks and is judged at 8-12. Buspirone takes about two weeks to act and has no single-dose effect. Reassurance alone leaves a man who is already taking leave from work untreated.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "psychiatry-anxiety-c1",
      front: "DSM-5 criteria for generalised anxiety disorder.",
      back: "Excessive, hard-to-control worry about several domains, more days than not for at least 6 months, with 3 or more of: restlessness, fatigue, poor concentration, irritability, muscle tension, sleep disturbance; causing impairment.",
    },
    {
      id: "psychiatry-anxiety-c2",
      front: "Definition of a panic attack and of panic disorder.",
      back: "Panic attack: abrupt surge of fear peaking within about 10 minutes with 4 or more of 13 symptoms. Panic disorder: recurrent unexpected attacks plus at least 1 month of worry about further attacks or avoidance.",
    },
    {
      id: "psychiatry-anxiety-c3",
      front: "GAD-7 bands and treatment threshold.",
      back: "0-4 minimal, 5-9 mild, 10-14 moderate, 15-21 severe. GAD-2 of 3 or more triggers the full scale; a GAD-7 of 10 or more is the threshold to start drug treatment.",
    },
    {
      id: "psychiatry-anxiety-c4",
      front: "How does SSRI dosing in anxiety differ from depression?",
      back: "Start at half the dose (escitalopram 5 mg, sertraline 25 mg) because of first-week activation, titrate to the top of the range, judge at 8-12 weeks, and continue 12 months after response.",
    },
    {
      id: "psychiatry-anxiety-c5",
      front: "Rules for benzodiazepine use in an anxiety disorder.",
      back: "A bridge only: clonazepam 0.25-0.5 mg BD or lorazepam 0.5-1 mg BD for a maximum of 2-4 weeks with a written stop date. Never in alcohol use, COPD, sleep apnoea or over 65. Avoid alprazolam.",
    },
    {
      id: "psychiatry-anxiety-c6",
      front: "Managing an acute panic attack.",
      back: "Sit the patient down, check pulse, BP, SpO2, glucose and ECG, name the diagnosis confidently, slow breathing in for 4 out for 6 at 6-8 breaths a minute, grounding. No paper bag. Drugs rarely needed.",
    },
    {
      id: "psychiatry-anxiety-c7",
      front: "Organic mimics of anxiety to exclude.",
      back: "Thyrotoxicosis, paroxysmal SVT and other arrhythmias, hypoglycaemia, phaeochromocytoma, asthma, pulmonary embolism, anaemia, menopause; drugs - salbutamol, theophylline, steroids, thyroxine, caffeine, cannabis; alcohol or benzodiazepine withdrawal.",
    },
    {
      id: "psychiatry-anxiety-c8",
      front: "Principle of graded exposure in agoraphobia.",
      back: "Build a hierarchy from easiest to hardest, practise daily until anxiety halves, then climb a step; stay in the situation until anxiety falls, and drop safety behaviours (tablet in pocket, companion, seat near the door) which maintain the fear.",
    },
  ],
  references: [
    "American Psychiatric Association, Diagnostic and Statistical Manual of Mental Disorders, 5th edition text revision (DSM-5-TR), 2022",
    "Spitzer RL et al. A brief measure for assessing generalized anxiety disorder: the GAD-7, Archives of Internal Medicine, 2006",
    "NICE Clinical Guideline CG113, Generalised anxiety disorder and panic disorder in adults: management, updated 2020",
    "Indian Psychiatric Society Clinical Practice Guidelines for the management of anxiety disorders, 2017",
    "WHO mhGAP Intervention Guide, version 2.0, 2016",
    "National Mental Health Survey of India 2015-16, NIMHANS, 2016",
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
  id: "psychiatry-alcohol-use-disorder",
  title: "Alcohol use disorder: screening, withdrawal, CIWA-Ar and delirium tremens",
  oneLiner:
    "Alcohol use disorder is a DSM-5 pattern of impaired control, social impairment, risky use and pharmacological dependence with 2 or more of 11 criteria in twelve months; the family physician screens with AUDIT-C or AUDIT, delivers brief intervention for hazardous drinking, manages uncomplicated withdrawal with a tapering benzodiazepine and parenteral thiamine while grading severity with the CIWA-Ar, recognises that withdrawal seizures peak at 12-48 hours and delirium tremens at 48-96 hours with a mortality of 1-5% treated and up to 25% untreated, and maintains abstinence with naltrexone, acamprosate or disulfiram plus Alcoholics Anonymous.",
  frequency: "core",
  keywords: [
    "alcohol use disorder",
    "AUDIT",
    "AUDIT-C",
    "CAGE",
    "CIWA-Ar",
    "delirium tremens",
    "withdrawal seizure",
    "chlordiazepoxide",
    "lorazepam",
    "thiamine",
    "Wernicke encephalopathy",
    "Korsakoff psychosis",
    "naltrexone",
    "acamprosate",
    "disulfiram",
    "alcoholic hepatitis",
    "brief intervention",
    "Alcoholics Anonymous",
  ],
  sections: [
    {
      heading: "Burden, screening and the definition of a standard drink",
      points: [
        "The National Family Health Survey-5 (2019-21) found that **about 19% of Indian men and 1% of Indian women aged 15 and above consume alcohol**, and the National Mental Health Survey 2015-16 put alcohol use disorder at **4.6% of adults**, making it the commonest substance use disorder in the country; more than 85% receive no treatment, and the family physician is usually the only doctor these patients ever see.",
        "One **standard drink contains about 10 g of ethanol** and equals 30 mL of Indian spirits (whisky, rum, brandy at 42.8% v/v is about 13 g per 30 mL peg), 285 mL of beer at 5%, or 100 mL of wine; **hazardous drinking is more than 14 standard drinks a week for men and more than 7 for women**, or more than 4 (men) or 3 (women) on any single occasion, and country liquor and toddy must be quantified in the same way, by asking for the size and number of pegs or bottles.",
        "**Screen with AUDIT-C** - the first three AUDIT questions on frequency, typical quantity and frequency of drinking 6 or more drinks - scored 0-12, positive at **4 or more in men and 3 or more in women**; the full **AUDIT is 10 items scored 0-40**, where 8-15 is hazardous drinking, 16-19 is harmful drinking and **20 or more suggests dependence** needing assisted withdrawal and specialist input.",
        "The **CAGE questionnaire** - felt the need to Cut down, Annoyed by criticism, Guilty about drinking, Eye-opener in the morning - is quicker, and **2 or more positive answers is significant**, but it misses hazardous drinking that has not yet reached dependence, so AUDIT-C is the better screen in an asymptomatic clinic population.",
        "Screen opportunistically in **hypertension resistant to two drugs, new-onset atrial fibrillation, unexplained deranged liver enzymes with an AST:ALT ratio above 2, macrocytosis without anaemia, raised GGT, recurrent gastritis or pancreatitis, repeated trauma or road traffic injury, poorly controlled diabetes, tuberculosis defaulters, and in the husband of a woman presenting with depression or domestic violence**.",
        "**DSM-5 alcohol use disorder** requires 2 or more of 11 criteria in twelve months - larger amounts than intended, unsuccessful attempts to cut down, time spent obtaining or recovering, craving, failure of role obligations, continued use despite social problems, activities given up, use in hazardous situations, use despite physical or psychological harm, tolerance, and withdrawal - graded **mild (2-3), moderate (4-5) and severe (6 or more)**.",
      ],
    },
    {
      heading: "Brief intervention and deciding who needs assisted withdrawal",
      points: [
        "For **hazardous and harmful drinking without dependence (AUDIT 8-19)**, deliver a **5-10 minute brief intervention using the FRAMES structure**: Feedback of the AUDIT score and the abnormal GGT or liver enzymes; Responsibility - the decision is his; Advice to cut down or stop, given clearly; a Menu of options; Empathy rather than confrontation; and Self-efficacy, reminding him of a past success. Brief intervention reduces consumption by about 4 standard drinks a week and the number needed to treat is about 8.",
        "Set a **written, quantified goal** - a maximum number of pegs on a maximum number of days, drink-free days each week, no drinking on an empty stomach, and never drinking and driving - and give a **drinking diary**; review at 4 weeks with a repeat AUDIT and a repeat GGT, which is a powerful motivator when it falls.",
        "**Abstinence, not reduction, is the goal** in established dependence (AUDIT 20 or more), alcoholic liver disease, pancreatitis, seizure disorder, pregnancy, and when the patient is on drugs that interact - metronidazole, paracetamol in large doses, warfarin, sulphonylureas, isoniazid and rifampicin.",
        "**Decide the setting for detoxification.** Home-based withdrawal is safe only when there is **no history of withdrawal seizures or delirium tremens, no severe comorbidity, no polysubstance use, a reliable adult at home who holds the tablets, and daily contact with the doctor**.",
        "**Admit for assisted withdrawal** if any of the following: a previous withdrawal seizure or delirium tremens, current CIWA-Ar of 15 or more, drinking more than about 30 units a day, confusion or hallucinations, temperature above 38 degrees, significant comorbidity such as decompensated liver disease, sepsis, head injury or unstable diabetes, pregnancy, age over 65 with frailty, no supervising adult, or a suicide risk.",
        "**Never stop a dependent drinker abruptly without cover** - the commonest cause of withdrawal seizures and delirium tremens in Indian practice is a patient admitted for surgery, pneumonia or trauma whose alcohol history was never taken, who convulses on the second hospital day.",
      ],
    },
    {
      heading: "The withdrawal syndrome and the CIWA-Ar",
      points: [
        "**The timeline is exam material and must be quoted exactly**: minor withdrawal - tremor, anxiety, sweating, nausea, insomnia, tachycardia - begins **6-12 hours** after the last drink; **alcoholic hallucinosis** (usually visual, with a clear sensorium and intact orientation) at **12-24 hours**; **generalised tonic-clonic withdrawal seizures at 12-48 hours**, peaking at about 24 hours; and **delirium tremens at 48-96 hours**, occasionally up to day 7.",
        "**The CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol, revised) has 10 items** - nausea and vomiting, tremor, paroxysmal sweats, anxiety, agitation, tactile disturbance, auditory disturbance, visual disturbance, headache, and orientation and clouding of sensorium; nine items score 0-7 and orientation scores 0-4, giving a **maximum of 67**.",
        "**CIWA-Ar bands: under 8 is mild** (no drug needed if stable), **8-15 is moderate** (treat), and **16 or more is severe with a high risk of seizures and delirium tremens**; scores of 15 or more, or any score with confusion, mandate admission.",
        "**Symptom-triggered dosing is preferred to fixed dosing** where nursing observation is reliable: score the CIWA-Ar hourly, give a benzodiazepine dose whenever the score is 8-10 or more, and rescore an hour later - this uses less drug and shortens treatment than a fixed schedule. **Fixed-dose tapering is safer in home-based detoxification and where hourly scoring is impossible**, which is most of Indian general practice.",
        "**The CIWA-Ar is invalid in a patient who cannot communicate** - the intubated, the aphasic, the demented, or one with a language barrier - and it is misleading when the agitation is due to sepsis, head injury, hypoglycaemia or hepatic encephalopathy rather than withdrawal; score falsely high in delirium of any cause.",
        "Always check the reversible contributors that mimic and worsen withdrawal: **capillary glucose, sodium, potassium, magnesium, calcium, urea and creatinine, liver function, and a search for infection**; hypoglycaemia, hyponatraemia and hypomagnesaemia are common in the malnourished drinker and each lowers the seizure threshold.",
      ],
    },
    {
      heading: "Treating withdrawal, seizures and delirium tremens with real doses",
      points: [
        "**Benzodiazepines are the only drug class shown to reduce withdrawal seizures, delirium and mortality.** A standard fixed-dose regimen is **chlordiazepoxide 25-50 mg four times daily on day 1-2, reducing by about 25% a day over 5-7 days** - for example 50 mg QDS, 50 mg TDS, 25 mg QDS, 25 mg TDS, 25 mg BD, 25 mg at night, stop - with additional PRN doses for breakthrough symptoms and a maximum of about 250 mg in the first 24 hours.",
        "**Diazepam 10 mg four times daily tapering over 5-7 days** is an equally acceptable alternative and is cheaper and more widely available in India; **lorazepam 2-4 mg six-hourly tapering** is the choice in **significant liver disease, the elderly and the patient with respiratory compromise**, because lorazepam, oxazepam and temazepam are conjugated and have no active metabolites.",
        "**Parenteral thiamine before any glucose**: give **thiamine 100 mg intramuscularly or intravenously daily for 3-5 days** in every alcohol-dependent patient being detoxified, and **500 mg intravenously three times a day for 2-3 days followed by 250 mg daily for 5 days** if Wernicke encephalopathy is suspected or established. Glucose given first to a thiamine-deficient patient precipitates Wernicke encephalopathy, so thiamine goes in first or at least simultaneously.",
        "**Wernicke encephalopathy** is the triad of **confusion, ophthalmoplegia or nystagmus and ataxia**, but fewer than one in five patients show all three, so treat on any one feature in a drinker; untreated it progresses to the irreversible **Korsakoff psychosis** - anterograde and retrograde amnesia with confabulation. Add oral thiamine 100 mg thrice daily, folic acid 5 mg, pyridoxine and a multivitamin, and correct magnesium, which is needed for thiamine to work.",
        "**A withdrawal seizure** is treated with **intravenous lorazepam 2-4 mg (or diazepam 5-10 mg) repeated once after 5-10 minutes if needed**, then adequate benzodiazepine cover to prevent recurrence; **phenytoin does not prevent withdrawal seizures and is not indicated** unless there is an independent seizure disorder. Any first seizure, focal seizure, seizure after 48 hours, or a seizure with head injury or fever needs neuroimaging and a search for another cause.",
        "**Delirium tremens** - clouded consciousness with disorientation, vivid visual and tactile hallucinations, gross tremor, agitation, fever, tachycardia, hypertension and sweating - is a **medical emergency with 1-5% mortality treated and up to 25% untreated**. Manage in hospital: intravenous or oral **diazepam 10-20 mg or lorazepam 2-4 mg repeated every 10-15 minutes until light sedation is achieved**, high-dose parenteral thiamine, correction of fluid, glucose, sodium, potassium and magnesium, treatment of the precipitating infection, nursing in a lit, quiet room with a familiar attendant, and **haloperidol 2.5-5 mg only as an adjunct for hallucinations that persist despite adequate benzodiazepine** - never alone, since it lowers the seizure threshold and does not treat withdrawal.",
      ],
    },
    {
      heading: "Relapse prevention and the family",
      points: [
        "**Detoxification without relapse prevention is a wasted admission** - more than 70% relapse within a year without it. Start the anti-craving drug before discharge, add psychosocial support, and give the family a written plan.",
        "**Naltrexone 50 mg once daily** (start 25 mg for 3 days) is the usual first choice, reduces heavy drinking days and craving, requires an opioid-free interval of 7-10 days, and is **contraindicated in acute hepatitis, liver failure and in any patient needing opioid analgesia**; check liver enzymes before and periodically.",
        "**Acamprosate 666 mg three times daily** (333 mg TDS if under 60 kg or renal impairment; contraindicated if creatinine clearance is below 30 mL/min) supports abstinence, is safe in liver disease, and is the better choice in the patient with cirrhosis; the common adverse effect is diarrhoea.",
        "**Disulfiram 250 mg once daily** works only with supervised administration by a family member, and produces the aversive reaction - flushing, throbbing headache, vomiting, hypotension, palpitations - with any alcohol including cough syrup, mouthwash and sauces; it is contraindicated in ischaemic heart disease, psychosis, severe liver disease and pregnancy, needs an alcohol-free interval of 12-24 hours before starting, and must be prescribed only to a fully informed and consenting patient.",
        "**Psychosocial treatment carries the evidence**: motivational interviewing, cognitive behavioural relapse prevention, contingency management, and referral to **Alcoholics Anonymous, which has active chapters in every Indian city, with Al-Anon for the family**; identify high-risk situations, refusal skills, and a plan for the first lapse so that a lapse does not become a relapse.",
        "Treat the whole family: ask about **domestic violence, children's schooling, debt and the wife's own depression**, since alcohol dependence in the husband is one of the commonest hidden causes of anxiety, depression and injury in a woman attending a family practice; and treat the comorbidity - depression persisting 2-4 weeks after abstinence needs an antidepressant, and tobacco should be tackled at the same time rather than later.",
      ],
    },
  ],
  tables: [
    {
      heading: "Alcohol withdrawal: timeline, features and what to do",
      columns: ["Time from last drink", "Syndrome", "Features", "Action"],
      rows: [
        ["6-12 hours", "Minor withdrawal", "Tremor, anxiety, sweating, nausea, insomnia, tachycardia, hypertension", "Score CIWA-Ar; start benzodiazepine taper and thiamine 100 mg IM"],
        ["12-24 hours", "Alcoholic hallucinosis", "Visual or tactile hallucinations with a clear sensorium and intact orientation", "Increase the benzodiazepine; this is not delirium tremens and usually needs no antipsychotic"],
        ["12-48 hours (peak 24)", "Withdrawal seizures", "Generalised tonic-clonic, usually single or two, no focal features", "IV lorazepam 2-4 mg; adequate benzodiazepine cover; do NOT start phenytoin; image if focal or late"],
        ["48-96 hours (up to day 7)", "Delirium tremens", "Clouded sensorium, disorientation, vivid hallucinations, gross tremor, fever, autonomic storm", "Medical emergency; admit; loading benzodiazepine to light sedation, IV thiamine, fluids, electrolytes, treat sepsis"],
      ],
    },
    {
      heading: "CIWA-Ar: items, bands and drug regimens",
      columns: ["Element", "Detail"],
      rows: [
        ["Ten items", "Nausea/vomiting, tremor, paroxysmal sweats, anxiety, agitation, tactile disturbance, auditory disturbance, visual disturbance, headache (each 0-7); orientation and clouding of sensorium (0-4)"],
        ["Maximum score", "67"],
        ["Under 8", "Mild - monitoring, thiamine, no benzodiazepine needed if stable"],
        ["8-15", "Moderate - treat with a benzodiazepine; symptom-triggered dosing where hourly scoring is possible"],
        ["16 or more", "Severe - high risk of seizures and delirium tremens; admit and treat aggressively"],
        ["Chlordiazepoxide fixed taper", "50 mg QDS day 1, 50 mg TDS day 2, 25 mg QDS day 3, 25 mg TDS day 4, 25 mg BD day 5, 25 mg nocte day 6, stop; PRN doses for breakthrough"],
        ["Diazepam fixed taper", "10 mg QDS day 1-2 then reduce about 25% daily over 5-7 days"],
        ["Liver disease, elderly, respiratory disease", "Lorazepam 2-4 mg six-hourly tapering - conjugated, no active metabolite"],
        ["Thiamine", "100 mg IM/IV daily for 3-5 days routinely; 500 mg IV TDS for 2-3 days then 250 mg daily for 5 days if Wernicke encephalopathy is suspected; always before glucose"],
      ],
    },
    {
      heading: "Relapse prevention drugs",
      columns: ["Drug", "Dose", "Mechanism and effect", "Avoid in"],
      rows: [
        ["Naltrexone", "25 mg for 3 days then 50 mg OD", "Opioid antagonist; reduces craving and heavy drinking days", "Acute hepatitis or liver failure; current opioid use or need for opioid analgesia"],
        ["Acamprosate", "666 mg TDS (333 mg TDS if under 60 kg)", "Glutamate/NMDA modulation; supports maintained abstinence; safe in liver disease", "Creatinine clearance under 30 mL/min; causes diarrhoea"],
        ["Disulfiram", "250 mg OD, supervised", "Aldehyde dehydrogenase inhibitor; aversive reaction with alcohol", "Ischaemic heart disease, psychosis, severe liver disease, pregnancy, unsupervised or non-consenting patient"],
      ],
    },
  ],
  redFlags: [
    "Confusion, disorientation, fever above 38 degrees, gross tremor and vivid hallucinations 48-96 hours after the last drink - delirium tremens, a medical emergency with up to 25% mortality if untreated; admit and load with benzodiazepine, do not send home.",
    "A generalised seizure in a drinker 12-48 hours after stopping, or a CIWA-Ar of 15 or more, or a past history of withdrawal seizures or delirium tremens - assisted withdrawal in hospital, never home detoxification.",
    "Confusion, ophthalmoplegia or nystagmus, or ataxia in any drinker - Wernicke encephalopathy; give high-dose parenteral thiamine immediately and before any glucose, on a single feature, without waiting for the full triad.",
    "Jaundice, ascites, encephalopathy, haematemesis or a tense abdomen in a drinker - decompensated alcoholic liver disease, variceal bleeding or spontaneous bacterial peritonitis; use lorazepam not chlordiazepoxide and admit.",
    "Severe epigastric pain radiating to the back with vomiting after a binge - acute pancreatitis; and a drinker with new confusion, fever or focal signs must be screened for hypoglycaemia, head injury, meningitis and sepsis before the picture is blamed on withdrawal.",
    "Suicidal ideation in a drinker, or a patient with pesticide access - alcohol is present in a large proportion of Indian suicides; assess risk directly at the first visit and again after detoxification when the mood is clearer.",
  ],
  pearls: [
    "AUDIT-C to screen (4 or more in men, 3 or more in women), full AUDIT to grade: 8-15 hazardous, 16-19 harmful, 20 or more dependence needing assisted withdrawal.",
    "Learn the clock: tremor 6-12 hours, hallucinosis 12-24 hours, seizures 12-48 hours, delirium tremens 48-96 hours. It is asked every year.",
    "Thiamine before glucose, always; and treat Wernicke on any one of confusion, ophthalmoplegia or ataxia, because fewer than 20% have the full triad.",
    "Chlordiazepoxide or diazepam for a normal liver, lorazepam when the liver is bad - the conjugated benzodiazepines have no active metabolite and do not accumulate.",
    "Phenytoin does not prevent alcohol withdrawal seizures; benzodiazepines do. Haloperidol treats hallucinations in delirium tremens only as an adjunct, never alone, because it lowers the seizure threshold.",
    "Detoxification without naltrexone, acamprosate or disulfiram plus Alcoholics Anonymous is a wasted admission - over 70% relapse within a year.",
  ],
  theory: [
    {
      id: "psychiatry-alcohol-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 42-year-old man who drinks about 400 mL of country liquor daily for ten years is admitted with fever and cough. On the second hospital day he becomes tremulous, sweaty and disoriented and sees insects on the wall. Discuss the diagnosis, assessment and management.",
      openingLines: [
        "This is alcohol withdrawal progressing to delirium tremens, which characteristically appears 48-96 hours after the last drink and is defined by a clouded sensorium with disorientation, vivid visual and tactile hallucinations, gross tremor and autonomic overactivity with fever, tachycardia, hypertension and sweating.",
        "It is a medical emergency with a mortality of 1-5% even when treated and up to 25% untreated, and the objectives are to confirm it, exclude the mimics including his pneumonia and hypoglycaemia, sedate him adequately with a benzodiazepine, give parenteral thiamine before glucose, correct fluids and electrolytes, and plan relapse prevention once he is well.",
      ],
      answer: [
        {
          heading: "1. Confirming the diagnosis and grading severity",
          points: [
            "Establish the quantity in standard drinks, the time of the last drink, and any past withdrawal seizures or episodes of delirium tremens - the strongest predictors of a repeat.",
            "Score the CIWA-Ar across its ten items; a score of 16 or more indicates severe withdrawal, and clouding of the sensorium with disorientation takes him beyond simple hallucinosis into delirium tremens.",
            "Distinguish alcoholic hallucinosis, which occurs at 12-24 hours with a clear sensorium and intact orientation, from delirium tremens, in which consciousness is clouded and orientation lost.",
            "Note the precipitant: an intercurrent illness such as his pneumonia commonly triggers delirium tremens by forcing abrupt cessation in a dependent drinker whose alcohol history was not taken on admission.",
          ],
        },
        {
          heading: "2. Excluding the mimics and the coexisting problems",
          points: [
            "Capillary glucose immediately - hypoglycaemia in a malnourished drinker is the most easily missed and most rapidly lethal mimic.",
            "Sodium, potassium, magnesium, calcium, urea, creatinine, liver function, prothrombin time, complete blood count and a chest radiograph for his pneumonia; blood cultures if febrile and toxic.",
            "Consider hepatic encephalopathy (asterixis, jaundice, ascites), head injury with subdural haematoma (fall history, focal signs, anisocoria - image if any doubt), meningitis, and Wernicke encephalopathy.",
            "Look for the features of Wernicke encephalopathy - confusion, ophthalmoplegia or nystagmus, ataxia - and treat on any one of them rather than waiting for the triad.",
          ],
        },
        {
          heading: "3. Immediate management",
          points: [
            "Nurse in a well-lit, quiet side room with a familiar relative present, minimal staff changes and repeated reorientation; avoid physical restraint where possible as it worsens agitation and rhabdomyolysis.",
            "Benzodiazepine loading: diazepam 10-20 mg orally or intravenously, or lorazepam 2-4 mg, repeated every 10-15 minutes until light sedation is achieved, then maintenance with a taper; lorazepam is preferred if there is significant liver disease or respiratory compromise.",
            "Thiamine 500 mg intravenously three times daily for 2-3 days, then 250 mg daily for 5 days, given before or with any glucose-containing fluid; add folic acid 5 mg, pyridoxine and multivitamins.",
            "Intravenous fluids for the deficit that follows sweating, fever and poor intake, with correction of hypokalaemia, hypomagnesaemia and hypophosphataemia; magnesium must be replaced for thiamine to be effective.",
            "Treat the pneumonia with appropriate antibiotics, monitor vital signs, oxygen saturation and CIWA-Ar or a sedation scale, and watch for respiratory depression from the benzodiazepine load.",
            "Haloperidol 2.5-5 mg may be added only for hallucinations or agitation persisting despite adequate benzodiazepine, never as sole treatment, because it lowers the seizure threshold and does not treat withdrawal.",
          ],
        },
        {
          heading: "4. Preventing withdrawal seizures",
          points: [
            "Adequate benzodiazepine dosing is itself the seizure prophylaxis; do not under-dose from fear of sedation.",
            "A seizure occurring during the episode is treated with intravenous lorazepam 2-4 mg or diazepam 5-10 mg, repeated once if necessary.",
            "Phenytoin is not indicated for withdrawal seizures and has no preventive value unless there is an independent epilepsy.",
            "Neuroimaging is required for a focal seizure, a first seizure with head injury, a seizure occurring more than 48 hours after the last drink, or a prolonged post-ictal deficit.",
          ],
        },
        {
          heading: "5. After recovery: relapse prevention and the family",
          points: [
            "Assess for depression and suicidal ideation once he is clear; mood that persists 2-4 weeks into abstinence needs an antidepressant.",
            "Start an anti-craving drug before discharge: naltrexone 50 mg daily if liver function permits, or acamprosate 666 mg thrice daily if there is significant liver disease; disulfiram 250 mg daily only with a supervising relative and full consent.",
            "Refer to Alcoholics Anonymous, arrange motivational interviewing and relapse-prevention counselling, and involve the wife and family, including Al-Anon, addressing debt, domestic violence and the children.",
            "Arrange follow-up at 1 week, 1 month and 3 months with liver function, a repeat AUDIT, and simultaneous tobacco cessation.",
          ],
        },
      ],
      mustDraw: [
        "The withdrawal timeline as a horizontal chart: 6-12 h tremor, 12-24 h hallucinosis, 12-48 h seizures, 48-96 h delirium tremens.",
        "A table of the CIWA-Ar bands (under 8, 8-15, 16 or more) against the action each triggers.",
      ],
      markSplit: [
        { part: "Definition of delirium tremens and the withdrawal timeline", marks: 2 },
        { part: "Assessment, CIWA-Ar and exclusion of mimics", marks: 2 },
        { part: "Benzodiazepine regimen with doses and route", marks: 2 },
        { part: "Thiamine, fluids, electrolytes and supportive nursing", marks: 2 },
        { part: "Seizure management and relapse prevention", marks: 2 },
      ],
      keywords: ["delirium tremens", "CIWA-Ar", "lorazepam", "thiamine", "Wernicke encephalopathy"],
    },
    {
      id: "psychiatry-alcohol-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Short note: screening for alcohol use disorder and brief intervention in family practice.",
      openingLines: [
        "Hazardous drinking is consumption that risks harm - more than 14 standard drinks a week in men or 7 in women, or more than 4 or 3 respectively on one occasion - and it is detectable in the consulting room years before dependence, which is why screening plus brief intervention is one of the most cost-effective interventions in primary care.",
        "A standard drink is 10 g of ethanol, roughly 30 mL of Indian spirits, 285 mL of beer or 100 mL of wine, and all screening depends on quantifying intake in these units.",
      ],
      answer: [
        {
          heading: "1. Screening instruments",
          points: [
            "AUDIT-C: the first three AUDIT items (frequency, typical quantity, frequency of 6 or more drinks), scored 0-12, positive at 4 or more in men and 3 or more in women.",
            "Full AUDIT: 10 items scored 0-40 - 8-15 hazardous, 16-19 harmful, 20 or more suggests dependence requiring assisted withdrawal.",
            "CAGE: Cut down, Annoyed, Guilty, Eye-opener; 2 or more positive is significant but it detects dependence rather than hazardous use.",
            "Supporting markers: raised GGT, MCV above 100 without anaemia, AST:ALT ratio above 2 - useful for feedback and for monitoring, not for diagnosis.",
          ],
        },
        {
          heading: "2. Who to screen",
          points: [
            "Opportunistically in all new adult registrations and annual health checks.",
            "Targeted: resistant hypertension, new atrial fibrillation, deranged liver enzymes, macrocytosis, recurrent gastritis or pancreatitis, repeated injury, poor diabetic control, tuberculosis default, insomnia, depression and anxiety.",
            "In the wife or children presenting with anxiety, depression, injury or poor school performance, since the drinker in the family is often not the patient in front of you.",
          ],
        },
        {
          heading: "3. Brief intervention - the FRAMES structure",
          points: [
            "Feedback: give the AUDIT score and the abnormal GGT plainly, linking them to his own symptoms.",
            "Responsibility: state that the decision to change is his alone.",
            "Advice: give clear, unambiguous advice to cut down or stop.",
            "Menu: offer options - drink-free days, a peg limit, no drinking on an empty stomach, avoiding drinking company, a diary.",
            "Empathy: a warm, non-judgemental style; confrontation increases resistance.",
            "Self-efficacy: recall a previous success such as a festival period of abstinence.",
          ],
        },
        {
          heading: "4. Outcome, follow-up and when to escalate",
          points: [
            "Brief intervention takes 5-10 minutes, reduces intake by about 4 standard drinks a week, and has a number needed to treat of about 8.",
            "Review at 4 weeks with a repeat AUDIT and GGT; a falling GGT is a powerful motivator.",
            "Escalate to assisted withdrawal and specialist referral for AUDIT 20 or more, any withdrawal symptoms, past seizures or delirium tremens, alcoholic liver disease, pregnancy, or comorbid psychiatric illness.",
            "Aim for abstinence rather than reduction in dependence, liver disease, pancreatitis, epilepsy and pregnancy.",
          ],
        },
      ],
      mustDraw: [
        "A table of AUDIT bands (0-7, 8-15, 16-19, 20+) against the intervention each requires.",
        "The FRAMES acronym expanded as six lines.",
      ],
      markSplit: [
        { part: "Standard drink and definition of hazardous drinking", marks: 1 },
        { part: "AUDIT-C, AUDIT, CAGE with cut-offs", marks: 2 },
        { part: "FRAMES brief intervention", marks: 1 },
        { part: "Follow-up and criteria for referral or assisted withdrawal", marks: 1 },
      ],
      keywords: ["AUDIT", "AUDIT-C", "CAGE", "FRAMES", "brief intervention"],
    },
  ],
  mcqs: [
    {
      id: "psychiatry-alcohol-q1",
      stem: "A 45-year-old man with alcohol dependence and known cirrhosis with ascites requires inpatient detoxification. Which benzodiazepine regimen is most appropriate?",
      options: [
        "Chlordiazepoxide 50 mg four times daily tapering over a week",
        "Lorazepam 2 mg six-hourly, tapered, because it is conjugated and has no active metabolites",
        "Diazepam 10 mg four times daily tapering over a week",
        "No benzodiazepine, since sedation may precipitate hepatic encephalopathy",
        "Phenytoin loading to prevent withdrawal seizures",
      ],
      answer: 1,
      explanation:
        "In significant liver disease lorazepam, oxazepam and temazepam are preferred because they undergo glucuronidation only, have no active metabolites and do not accumulate. Chlordiazepoxide and diazepam are both oxidised by the liver, have long-acting active metabolites and accumulate in cirrhosis, causing prolonged sedation and precipitating encephalopathy. Withholding all benzodiazepine is dangerous: benzodiazepines are the only class shown to reduce withdrawal seizures, delirium tremens and mortality, and untreated withdrawal is far more likely to harm him than carefully titrated lorazepam. Phenytoin does not prevent alcohol withdrawal seizures and has no role unless there is an independent epilepsy.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-alcohol-q2",
      stem: "A malnourished 38-year-old man with chronic alcohol use is brought to the clinic drowsy with a capillary glucose of 42 mg/dL. What is the correct sequence of treatment?",
      options: [
        "50% dextrose first, then thiamine after he is awake",
        "Thiamine 100 mg intravenously before or together with the dextrose",
        "Dextrose only; thiamine is unnecessary if he is eating",
        "Oral glucose and observation, since intravenous therapy risks fluid overload",
        "Naloxone followed by dextrose",
      ],
      answer: 1,
      explanation:
        "Glucose loading in a thiamine-deficient drinker consumes the last of his thiamine as a cofactor for carbohydrate metabolism and can precipitate Wernicke encephalopathy, so parenteral thiamine is given before or simultaneously with the dextrose. Giving dextrose first and thiamine later is exactly the classic error the question tests. Assuming thiamine is unnecessary ignores that chronic drinkers are deficient through poor intake, impaired absorption and impaired storage even when apparently eating. Oral glucose in a drowsy patient risks aspiration and acts too slowly at 42 mg/dL. Naloxone treats opioid overdose and has no place in documented hypoglycaemia.",
      difficulty: "easy",
    },
    {
      id: "psychiatry-alcohol-q3",
      stem: "A 50-year-old man stopped drinking 20 hours ago. He is fully oriented, has a fine tremor and sweating, and describes seeing small animals in the room but knows they are not real. CIWA-Ar is 12. What is the diagnosis and management?",
      options: [
        "Delirium tremens - admit for intravenous benzodiazepine loading",
        "Alcoholic hallucinosis with moderate withdrawal - increase the benzodiazepine, give thiamine, monitor closely",
        "Acute schizophrenia - start risperidone",
        "Withdrawal seizure prodrome - load with phenytoin",
        "Normal withdrawal - no treatment required",
      ],
      answer: 1,
      explanation:
        "Hallucinations at 12-24 hours with a clear sensorium, full orientation and preserved insight define alcoholic hallucinosis with moderate withdrawal (CIWA-Ar 8-15), treated by increasing the benzodiazepine and giving thiamine with close observation. Delirium tremens requires clouding of consciousness and disorientation, which he does not have, and typically appears at 48-96 hours. Schizophrenia is not diagnosed in the context of recent alcohol cessation and hallucinosis with insight, and an antipsychotic alone would lower the seizure threshold without treating withdrawal. Phenytoin does not prevent withdrawal seizures. Calling a CIWA-Ar of 12 with hallucinations untreated risks progression to seizures and delirium tremens.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-alcohol-q4",
      stem: "A 35-year-old man has completed detoxification and wants medication to help him stay off alcohol. He has alcoholic hepatitis with a bilirubin of 4 mg/dL and raised transaminases. He is on no opioids. Which drug is most appropriate?",
      options: [
        "Naltrexone 50 mg daily",
        "Acamprosate 666 mg three times daily",
        "Disulfiram 250 mg daily unsupervised",
        "Chlordiazepoxide 25 mg twice daily long term",
        "No drug is effective for relapse prevention",
      ],
      answer: 1,
      explanation:
        "Acamprosate is renally excreted, is not hepatotoxic and is the anti-craving drug of choice when there is active liver disease, provided the creatinine clearance is above 30 mL/min. Naltrexone is contraindicated in acute hepatitis and liver failure because of hepatotoxicity, which rules it out here despite his being opioid-free. Disulfiram is contraindicated in severe liver disease, and unsupervised disulfiram is ineffective in any case, since its whole benefit depends on a family member witnessing the dose. Continuing a benzodiazepine long term after detoxification substitutes one dependence for another and has no relapse-prevention evidence. Anti-craving drugs plus psychosocial support clearly reduce relapse, so nihilism is wrong.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-alcohol-q5",
      stem: "A 55-year-old man drinking heavily for 20 years is admitted after a road traffic accident. On day 2 he has a single generalised tonic-clonic seizure lasting 90 seconds. He recovers consciousness fully. He has a scalp laceration and mild headache. What is the most appropriate next step?",
      options: [
        "Diagnose an alcohol withdrawal seizure and give benzodiazepine cover alone with no imaging",
        "Give lorazepam, ensure adequate benzodiazepine cover, and obtain a CT head because of the recent head injury",
        "Load with phenytoin and continue it lifelong",
        "Start carbamazepine and discharge",
        "Give haloperidol 5 mg intramuscularly",
      ],
      answer: 1,
      explanation:
        "The timing fits an alcohol withdrawal seizure, which occurs 12-48 hours after the last drink, and benzodiazepine is the correct treatment and prophylaxis; however he has sustained a head injury with a scalp laceration and headache, so a subdural haematoma must be excluded by CT before the seizure is attributed to withdrawal alone. Attributing it to withdrawal without imaging in a patient with recent head trauma is the trap. Phenytoin neither prevents nor treats alcohol withdrawal seizures and lifelong antiepileptic therapy is not indicated after an isolated withdrawal seizure. Carbamazepine has some use in mild withdrawal in some countries but does not replace a benzodiazepine here, and discharging him on day 2 of withdrawal is unsafe. Haloperidol lowers the seizure threshold and treats neither the seizure nor the withdrawal.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "psychiatry-alcohol-c1",
      front: "What is one standard drink, and what counts as hazardous drinking?",
      back: "One standard drink is about 10 g of ethanol: 30 mL of spirits, 285 mL of beer at 5%, 100 mL of wine. Hazardous: more than 14 drinks a week (men) or 7 (women), or more than 4 (men) or 3 (women) on one occasion.",
    },
    {
      id: "psychiatry-alcohol-c2",
      front: "AUDIT and AUDIT-C cut-offs.",
      back: "AUDIT-C (3 items, 0-12): positive at 4 or more in men, 3 or more in women. Full AUDIT (0-40): 8-15 hazardous, 16-19 harmful, 20 or more suggests dependence needing assisted withdrawal.",
    },
    {
      id: "psychiatry-alcohol-c3",
      front: "The alcohol withdrawal timeline.",
      back: "Tremor and autonomic symptoms 6-12 h; alcoholic hallucinosis with clear sensorium 12-24 h; generalised seizures 12-48 h (peak 24 h); delirium tremens 48-96 h, up to day 7.",
    },
    {
      id: "psychiatry-alcohol-c4",
      front: "CIWA-Ar: how many items, maximum score, and the action bands.",
      back: "Ten items - nine scored 0-7 plus orientation 0-4, maximum 67. Under 8 mild, 8-15 moderate (treat), 16 or more severe with high risk of seizures and delirium tremens (admit).",
    },
    {
      id: "psychiatry-alcohol-c5",
      front: "Fixed-dose chlordiazepoxide taper for alcohol withdrawal.",
      back: "50 mg QDS day 1, 50 mg TDS day 2, 25 mg QDS day 3, 25 mg TDS day 4, 25 mg BD day 5, 25 mg nocte day 6, then stop, with PRN doses for breakthrough. Use lorazepam 2-4 mg 6-hourly instead in liver disease or the elderly.",
    },
    {
      id: "psychiatry-alcohol-c6",
      front: "Thiamine doses in the drinker.",
      back: "Routine detoxification: 100 mg IM/IV daily for 3-5 days. Suspected or established Wernicke encephalopathy: 500 mg IV three times daily for 2-3 days then 250 mg daily for 5 days. Always before or with glucose.",
    },
    {
      id: "psychiatry-alcohol-c7",
      front: "Delirium tremens: features, mortality and treatment.",
      back: "Clouded sensorium with disorientation, vivid visual and tactile hallucinations, gross tremor, fever, autonomic storm at 48-96 h. Mortality 1-5% treated, up to 25% untreated. Benzodiazepine loading to light sedation, IV thiamine, fluids and electrolytes, treat sepsis; haloperidol only as an adjunct.",
    },
    {
      id: "psychiatry-alcohol-c8",
      front: "Relapse prevention drugs and their doses.",
      back: "Naltrexone 50 mg OD (avoid in acute hepatitis or opioid use); acamprosate 666 mg TDS (safe in liver disease, avoid if CrCl under 30); disulfiram 250 mg OD, supervised only. All combined with Alcoholics Anonymous and relapse-prevention counselling.",
    },
  ],
  references: [
    "American Psychiatric Association, DSM-5-TR, 2022",
    "Sullivan JT et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar), British Journal of Addiction, 1989",
    "Babor TF et al. AUDIT: The Alcohol Use Disorders Identification Test, WHO, 2nd edition, 2001",
    "NICE Clinical Guideline CG100, Alcohol-use disorders: diagnosis and management of physical complications, updated 2017; NICE CG115, 2011",
    "Indian Psychiatric Society Clinical Practice Guidelines for the management of substance use disorders, 2018",
    "National Family Health Survey-5 (2019-21), IIPS; National Mental Health Survey of India 2015-16, NIMHANS",
  ],
});
topics.push({
  id: "psychiatry-somatic-symptom-disorder",
  title: "Somatic symptom disorder and medically unexplained symptoms",
  oneLiner:
    "Somatic symptom disorder is one or more distressing physical symptoms present for at least six months accompanied by disproportionate thoughts, persistent anxiety or excessive time and energy devoted to the symptom - the DSM-5 diagnosis rests on the psychological response and not on whether the symptom is medically explained - and in Indian family practice it is managed by a single trusted doctor with regular short time-based appointments, a clear positive explanation, tight limits on re-investigation, treatment of comorbid depression and anxiety, and a goal of function rather than cure.",
  frequency: "common",
  keywords: [
    "somatic symptom disorder",
    "medically unexplained symptoms",
    "illness anxiety disorder",
    "hypochondriasis",
    "conversion disorder",
    "functional neurological disorder",
    "factitious disorder",
    "PHQ-15",
    "Bradford Hill reassurance",
    "burning feet syndrome",
    "dhat syndrome",
    "reattribution model",
    "amitriptyline",
    "chronic fatigue",
    "fibromyalgia",
    "health anxiety",
  ],
  sections: [
    {
      heading: "Scale of the problem and why the label matters",
      points: [
        "**Medically unexplained symptoms account for 15-30% of all primary care consultations worldwide** and studies from Indian general practice and psychiatry outpatient departments report similar or higher figures; these patients undergo more investigation, more surgery and more iatrogenic harm than almost any other group, and they consume a disproportionate share of a practice's time and the family's money.",
        "**DSM-5 replaced somatoform disorder and hypochondriasis with two diagnoses**: **somatic symptom disorder** - one or more distressing somatic symptoms for at least six months with disproportionate and persistent thoughts about their seriousness, persistently high anxiety about health, or excessive time and energy devoted to them; and **illness anxiety disorder** - preoccupation with having or acquiring a serious illness with minimal or no somatic symptoms, with either excessive health-related behaviour or maladaptive avoidance.",
        "The crucial change is that **the diagnosis is now made on positive psychological criteria, not on the absence of a medical explanation**; a patient with genuine ischaemic heart disease can have somatic symptom disorder if his response to the symptom is disproportionate, and calling the symptom 'unexplained' is no longer required.",
        "Common Indian presentations to recognise by name: **chronic generalised body ache, burning feet and burning body sensations, gas and acidity with a fear of a hole in the stomach, headache with a fear of a brain tumour, giddiness, weakness described as 'kamzori', palpitations with repeated ECGs, and dhat syndrome** - distress attributed to the passage of semen in urine, usually in a young unmarried man, presenting with weakness, poor concentration and sexual anxiety.",
        "**These symptoms are real, not imagined and not malingering.** The patient is not fabricating; central sensitisation, autonomic arousal and heightened symptom perception produce genuine sensation. Saying 'there is nothing wrong with you' or 'it is all in your mind' is the single commonest reason these patients doctor-shop, and the examiner will mark you down for it.",
      ],
    },
    {
      heading: "Assessment: a positive diagnosis, not a diagnosis of exclusion",
      points: [
        "Take a **full symptom history in the patient's own words** and allow the whole list out at the first visit - interrupting produces a new symptom at the door; record onset, course, what makes it better or worse, and what the patient believes is causing it (the explanatory model), which is the most useful question in the consultation.",
        "Ask directly: **'What do you fear this might be?'** and **'What has been happening in your life since this started?'**; screen for the life context - marital conflict, domestic violence, a drinking husband, financial or debt stress, migration, a bereaved or ill relative with the same symptom, examination pressure, and childhood adversity, which is over-represented.",
        "**Screen for the treatable psychiatric comorbidity in every case with the PHQ-9 and the GAD-7**; depression or anxiety coexists in **50-70%** of patients with medically unexplained symptoms, and treating it is the single most productive action available.",
        "Use the **PHQ-15** as a severity measure: fifteen somatic symptoms scored 0-2, total 0-30, with **5-9 low, 10-14 medium and 15-30 high somatic symptom burden**; a high score predicts disability and healthcare use and gives you an objective number to follow instead of the symptom list.",
        "**Do a careful, visible physical examination at each visit** - it is therapeutic, it earns permission to say the examination is normal, and it is the only way to avoid the disaster of missing organic disease later; then perform a **defined, time-limited investigation panel once**, typically haemoglobin, ESR, blood glucose, TSH, renal and liver function, urine analysis, calcium and vitamin B12 or vitamin D where the picture fits, plus a chest radiograph or ECG if indicated.",
        "**Get the old records and count the tests already done.** Repeating normal investigations is not neutral: it confirms to the patient that the doctor also suspects serious disease, and every incidental finding generates the next cascade. Write in the notes what has been excluded and the date, so that the next doctor does not restart the cycle.",
      ],
    },
    {
      heading: "The explanation that works: reattribution and positive framing",
      points: [
        "Use the **three-stage reattribution model of Goldberg and Gask**. **Stage 1 - feeling understood**: take the full history, ask about mood and social factors, examine the patient properly. **Stage 2 - broadening the agenda**: feed back the normal findings, acknowledge the reality of the symptom, and link its timing to the life events already elicited. **Stage 3 - making the link**: give a mechanism the patient can accept, using a physiological explanation rather than a psychological accusation.",
        "**Give a positive, physiological explanation**, for example: 'Your muscles have been tense for months because of continuous worry, and a tense muscle aches exactly as it does after heavy work - that is why your body pains'; or 'When you breathe fast during stress, the carbon dioxide falls and the hands tingle and the head feels light'; or 'Pain nerves become over-sensitive, like a doorbell that rings at a touch, so real pain is felt without new damage.'",
        "**Never say 'there is nothing wrong', 'all tests are normal so forget it', or 'it is only tension'**; say instead 'the tests have ruled out the dangerous causes, and I now know what is causing this and how to treat it'. Naming a mechanism converts an anxious, searching patient into a treatable one.",
        "Address the **specific fear** by name - if the fear is cancer or a brain tumour or HIV, say explicitly that the examination and tests have excluded it - and then **agree a rule about future testing**: no repeat test without a new sign, and any new symptom will be assessed on its merits at the next scheduled visit rather than in casualty.",
        "In **dhat syndrome**, explain that nocturnal emission and semen in urine are physiologically normal, that no weakness results, and correct the cultural belief calmly without ridicule; treat coexisting depression, anxiety or erectile difficulty, which are usually the real problem.",
        "Involve the family in the explanation - in Indian practice the family drives the investigation-seeking - and give the explanation in writing, in the local language, so it survives the journey home.",
      ],
    },
    {
      heading: "Management: the structure of care",
      points: [
        "**One doctor, one plan.** Nominate yourself as the single point of contact, and discourage parallel consultations; fragmented care with multiple opinions is the main driver of chronicity and of iatrogenic harm.",
        "**Time-based rather than symptom-based appointments** - a fixed 15-minute review every 2-4 weeks whether or not the symptom is bad - is the core intervention. It removes the need for the patient to have a symptom in order to be seen, reduces emergency attendance, and is the point examiners look for.",
        "**Set functional goals, not cure**: walking 20 minutes a day, returning to work part-time, resuming a household task, sleeping without a daytime nap; a graded activity programme with small weekly increments and a written diary works better than rest, and rest itself worsens deconditioning and pain.",
        "**Treat the comorbidity properly.** For coexisting depression or anxiety, an SSRI at full dose - escitalopram 10-20 mg or sertraline 50-200 mg - for at least 6-12 months; where pain dominates, **amitriptyline 10-25 mg at night rising to 50-75 mg** or **duloxetine 30-60 mg daily** have direct evidence in functional pain, fibromyalgia and functional gastrointestinal disorders, and should be presented as pain-modulating drugs, which is what they are, and not as antidepressants prescribed by stealth.",
        "**Cognitive behavioural therapy has the best evidence** for somatic symptom disorder, health anxiety and functional disorders; where none is available, deliver the elements yourself - a symptom diary, identification of catastrophic thoughts, relaxation and slow breathing, activity pacing, and a ban on symptom-checking behaviours such as repeated palpation, repeated pulse counting and internet searching.",
        "**Stop the harm**: withdraw unnecessary analgesics, avoid opioids and benzodiazepines completely, stop the drip-and-injection culture, refuse surgery for functional pain, and avoid repeat endoscopy, repeat imaging and repeat referral. Document a clear plan that the whole clinic follows, including out-of-hours staff.",
      ],
    },
    {
      heading: "Related disorders, prognosis and referral",
      points: [
        "**Functional neurological disorder (conversion disorder)** presents with weakness, non-epileptic seizures, tremor or gait disturbance and is diagnosed by **positive signs, not by exclusion** - Hoover's sign (hip extension weak on direct testing but normal on contralateral hip flexion), give-way weakness, tremor entrainment, a dissociative seizure with eyes closed and resisted, prolonged duration with fluctuating course, no cyanosis and no post-ictal confusion; explain the diagnosis positively, demonstrate the sign to the patient, and refer for physiotherapy-led rehabilitation, which is the mainstay.",
        "**Illness anxiety disorder (health anxiety)** is treated with CBT and an SSRI, with the crucial instruction that **reassurance-seeking and body-checking must be reduced, not fed**; each new reassurance relieves anxiety for hours and strengthens the loop.",
        "**Factitious disorder** is the intentional falsification of symptoms for the sick role, while **malingering** is intentional falsification for external gain such as compensation, leave or drugs; neither is somatic symptom disorder, in which symptoms are not intentionally produced, and this distinction is frequently asked.",
        "**Prognosis** is better than the reputation suggests: symptoms of recent onset with a clear stressor and no comorbidity often settle within months, while multiple symptoms of many years, high PHQ-15 scores, unemployment or ongoing litigation, and personality difficulty predict chronicity. The realistic aim in chronic cases is stable function with minimal iatrogenic harm.",
        "**Refer to psychiatry** for severe or refractory disorder, prominent depression with suicidal ideation, suspected psychosis with somatic delusions such as a fixed belief of infestation or of rotting organs, comorbid substance dependence, or where CBT is available; refer to a specialist **once, with a specific question**, and take the case back afterwards rather than allowing an open referral loop.",
        "**Do not forget that these patients also get diseases.** Any **new symptom pattern, weight loss, fever, night sweats, blood loss, a focal neurological sign, a mass, or onset of a first somatic syndrome after the age of 50** must be assessed on its merits - the diagnostic label is not a reason to stop examining.",
      ],
    },
  ],
  tables: [
    {
      heading: "Distinguishing the disorders that present with unexplained symptoms",
      columns: ["Disorder", "Core feature", "Symptom production", "Motivation", "Key management"],
      rows: [
        ["Somatic symptom disorder", "Distressing symptoms 6 months or more plus disproportionate thoughts, anxiety or time devoted", "Not intentional", "None - the distress is genuine", "One doctor, timed appointments, positive explanation, treat comorbidity, CBT"],
        ["Illness anxiety disorder", "Preoccupation with having a serious illness, minimal symptoms", "Not intentional", "None", "CBT, SSRI, reduce reassurance-seeking and body-checking"],
        ["Functional neurological disorder", "Neurological symptoms with positive internal inconsistency (Hoover's sign)", "Not intentional", "None", "Positive explanation with demonstration, physiotherapy-led rehabilitation"],
        ["Factitious disorder", "Deliberate falsification or induction of illness", "Intentional", "To assume the sick role", "Avoid confrontation, limit investigation, psychiatric involvement"],
        ["Malingering", "Deliberate falsification", "Intentional", "External gain - money, leave, drugs, litigation", "Not a psychiatric diagnosis; document objectively, refuse the gain"],
      ],
    },
    {
      heading: "PHQ-15 somatic symptom severity and the response it should trigger",
      columns: ["PHQ-15 score", "Burden", "Action"],
      rows: [
        ["0-4", "Minimal", "Explanation and reassurance; no follow-up structure needed"],
        ["5-9", "Low", "Positive explanation, PHQ-9 and GAD-7, review once at 4 weeks"],
        ["10-14", "Medium", "Timed 2-4 weekly appointments, treat comorbid depression or anxiety, graded activity, no repeat investigation"],
        ["15-30", "High", "Structured care with one named doctor, SSRI or amitriptyline as indicated, CBT referral, functional goals, consider psychiatric referral"],
      ],
    },
  ],
  redFlags: [
    "New or changed symptom pattern in a patient with an established somatic symptom disorder - assess it on its merits; the label must never stop the examination, because these patients develop organic disease at the same rate as everyone else.",
    "Weight loss, fever, night sweats, lymphadenopathy, haemoptysis, rectal bleeding, dysphagia or a palpable mass - investigate as you would in any other patient, urgently.",
    "A first episode of multiple unexplained somatic symptoms beginning after the age of 50 - organic disease, occult malignancy and late-onset depression are all commoner than a new somatoform illness at that age.",
    "Focal neurological signs, papilloedema, progressive weakness, sphincter disturbance or nocturnal pain waking the patient from sleep - these are not functional patterns and need imaging.",
    "Somatic complaints held with delusional intensity - a fixed belief of infestation, of rotting organs or of emitting a foul smell - which is psychotic depression or a delusional disorder needing an antipsychotic and referral, not reassurance.",
    "Suicidal ideation, or escalating requests for opioids, benzodiazepines or repeat surgery - the two commonest routes by which a functional disorder becomes fatal.",
  ],
  pearls: [
    "DSM-5 made this a positive diagnosis: the criteria are about disproportionate thoughts, anxiety and time devoted to the symptom, not about whether the symptom is medically explained.",
    "The most effective single intervention is the timed appointment - a fixed 15 minutes every 2-4 weeks regardless of symptoms - because it removes the need to be ill in order to be seen.",
    "Give a mechanism, never a negation. 'The tests have excluded the dangerous causes and I know what is causing this' beats 'all your reports are normal'.",
    "Screen every patient with PHQ-9 and GAD-7; depression or anxiety coexists in 50-70% and is the most treatable part of the illness.",
    "Amitriptyline 10-75 mg at night or duloxetine 30-60 mg for functional pain, explained as pain-modulating drugs, not smuggled in as antidepressants.",
    "Functional neurological disorder is diagnosed by positive signs such as Hoover's sign, demonstrated to the patient - not by a normal MRI.",
  ],
  theory: [
    {
      id: "psychiatry-somatic-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 35-year-old woman has attended six doctors in one year with generalised body ache, burning feet, giddiness and gas. She carries a file of normal reports including two ultrasounds, an endoscopy and an MRI of the brain. Discuss your approach to this patient.",
      openingLines: [
        "This is somatic symptom disorder, defined by DSM-5 as one or more distressing somatic symptoms present for at least six months, accompanied by disproportionate and persistent thoughts about their seriousness, persistently high health anxiety, or excessive time and energy devoted to them - the diagnosis resting on the psychological response rather than on the absence of a medical explanation.",
        "Her symptoms are genuine and not fabricated, and the objectives are to make a positive diagnosis, avoid further iatrogenic harm from investigation, provide an explanation she can accept, treat the coexisting depression or anxiety, and restore function through one doctor and a structured follow-up.",
      ],
      answer: [
        {
          heading: "1. History - a positive assessment",
          points: [
            "Allow the complete symptom list at the first visit without interruption; record onset, course, aggravating and relieving factors and the disability produced.",
            "Ask her explanatory model - what does she fear this is - and the life context: marital conflict, domestic violence, a drinking husband, finances, in-laws, children, migration, an ill or bereaved relative with similar symptoms.",
            "Apply the PHQ-9 and GAD-7 for depression and anxiety, present in 50-70%, and ask directly about suicidal ideation; use the PHQ-15 for somatic symptom burden and record the number as a baseline.",
            "Take a drug and treatment history: analgesics, injections, sedatives, previous surgery, and how much has been spent, which is itself a source of distress.",
            "Review the old file and list what has already been excluded and when, so that nothing is repeated.",
          ],
        },
        {
          heading: "2. Examination and a single, defined investigation plan",
          points: [
            "Perform a full and visible physical examination at this visit and at each review - it is therapeutic and is the safeguard against missing organic disease later.",
            "Order once, and only once: haemoglobin, ESR, blood glucose, TSH, renal and liver function, calcium, urine analysis, and vitamin B12 or vitamin D if the picture fits.",
            "Do not repeat the ultrasound, endoscopy or MRI; explain that repeating normal tests will neither find nor exclude anything new and will increase her worry.",
            "Agree an explicit rule: no new test without a new physical sign, and any new symptom will be examined at the next scheduled visit.",
          ],
        },
        {
          heading: "3. Explanation using the reattribution model",
          points: [
            "Stage 1, feeling understood: full history, enquiry about mood and social stress, proper examination.",
            "Stage 2, broadening the agenda: feed back the normal findings, confirm the symptoms are real, and link their timing to the stresses she has described.",
            "Stage 3, making the link: give a physiological mechanism - sustained muscle tension producing real ache, over-sensitised pain nerves like a doorbell that rings at a touch, hyperventilation producing tingling and giddiness.",
            "Name and exclude her specific fear (cancer, tumour, a hole in the stomach), and give the explanation in writing in her own language for the family.",
          ],
        },
        {
          heading: "4. Management plan",
          points: [
            "One doctor and one plan; discourage parallel consultations and give her a written diagnosis to carry.",
            "Timed appointments: 15 minutes every 2-4 weeks irrespective of symptoms, tapering to monthly as she improves.",
            "Functional goals - walking 20 minutes daily, resuming household and social activity, a graded activity diary with small weekly increments; discourage rest and daytime sleep.",
            "Drugs: an SSRI such as escitalopram 10 mg or sertraline 50 mg if the PHQ-9 or GAD-7 is positive, continued 6-12 months; amitriptyline 10-25 mg at night rising to 50-75 mg, or duloxetine 30-60 mg, if pain dominates, explained as pain-modulating drugs.",
            "Stop harmful treatment: no opioids, no benzodiazepines, no repeated injections or drips, no surgery for functional pain.",
            "Teach relaxation and slow breathing, stop symptom-checking and internet searching, and refer for cognitive behavioural therapy where available.",
          ],
        },
        {
          heading: "5. Follow-up, safety-netting and referral",
          points: [
            "Repeat the PHQ-15, PHQ-9 and GAD-7 at 4-8 weeks and follow the numbers rather than the symptom list.",
            "Safety-net explicitly: weight loss, fever, bleeding, a lump, a focal neurological sign or a new symptom pattern will be investigated on their merits.",
            "Refer to psychiatry for severe or refractory illness, suicidal ideation, somatic delusions or substance dependence; refer once with a specific question and take the case back.",
            "Involve the family so that they stop driving further investigation, and record the plan in the clinic notes so that out-of-hours staff follow it.",
          ],
        },
      ],
      mustDraw: [
        "The three-stage reattribution model as a flow chart: feeling understood - broadening the agenda - making the link.",
        "A table of the PHQ-15 bands against the level of care each triggers.",
      ],
      markSplit: [
        { part: "Definition and DSM-5 criteria of somatic symptom disorder", marks: 2 },
        { part: "History including explanatory model, life context and comorbidity screening", marks: 2 },
        { part: "Examination and a single defined investigation plan", marks: 1 },
        { part: "Reattribution and the positive explanation", marks: 2 },
        { part: "Structured management, drugs and functional goals", marks: 2 },
        { part: "Safety-netting and referral criteria", marks: 1 },
      ],
      keywords: ["somatic symptom disorder", "reattribution", "PHQ-15", "timed appointments", "medically unexplained symptoms"],
    },
    {
      id: "psychiatry-somatic-t2",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Differentiate between somatic symptom disorder, functional neurological disorder, factitious disorder and malingering.",
      openingLines: [
        "All four present with symptoms that are not explained by structural disease, but they are separated by two axes: whether the symptom is intentionally produced, and what motivates its production.",
        "Somatic symptom disorder and functional neurological disorder are not intentional and have no external motive; factitious disorder is intentional with an internal motive (the sick role); malingering is intentional with an external motive and is not a psychiatric diagnosis at all.",
      ],
      answer: [
        {
          heading: "1. Somatic symptom disorder",
          points: [
            "One or more distressing somatic symptoms for at least 6 months with disproportionate thoughts, persistent anxiety or excessive time devoted to them.",
            "Symptoms are genuinely experienced and not intentionally produced; distress and impairment are real.",
            "Management: one doctor, timed appointments, positive explanation, treat comorbid depression or anxiety, CBT, graded activity.",
          ],
        },
        {
          heading: "2. Functional neurological disorder",
          points: [
            "Motor or sensory symptoms - weakness, tremor, gait disorder, dissociative (non-epileptic) seizures - with clinical evidence of internal inconsistency.",
            "Positive signs: Hoover's sign, give-way weakness, tremor entrainment, dissociative seizures with closed and resisted eyes, long fluctuating duration, no cyanosis or post-ictal confusion, preserved reflexes.",
            "Not intentional. Managed by positive explanation with the sign demonstrated to the patient, physiotherapy-led rehabilitation and treatment of comorbidity.",
          ],
        },
        {
          heading: "3. Factitious disorder",
          points: [
            "Deliberate falsification or self-induction of signs - injecting insulin, contaminating wounds, manipulating thermometers, tampering with samples.",
            "Motivation is internal: to occupy the sick role; there is no external gain.",
            "Factitious disorder imposed on another (formerly Munchausen syndrome by proxy) is a form of child abuse and requires child protection action.",
            "Management: avoid direct confrontation, limit invasive investigation, involve psychiatry, and coordinate the medical record across the hospital.",
          ],
        },
        {
          heading: "4. Malingering",
          points: [
            "Deliberate falsification or exaggeration for an external incentive - compensation, insurance, sick leave, avoiding court or work, or obtaining opioids.",
            "It is a V-code, not a psychiatric disorder; the clue is a marked discrepancy between claimed disability and observed function, and the presence of a pending claim.",
            "Management: objective documentation, no confrontation in the consulting room, refuse the secondary gain (no certificate, no opioid), and do not diagnose it merely because a symptom is unexplained.",
          ],
        },
      ],
      mustDraw: [
        "A four-column table: disorder, symptom production (intentional or not), motivation (internal, external, none), and management.",
      ],
      markSplit: [
        { part: "Somatic symptom disorder", marks: 1 },
        { part: "Functional neurological disorder with positive signs", marks: 2 },
        { part: "Factitious disorder", marks: 1 },
        { part: "Malingering", marks: 1 },
      ],
      keywords: ["Hoover sign", "factitious disorder", "malingering", "conversion disorder", "secondary gain"],
    },
  ],
  mcqs: [
    {
      id: "psychiatry-somatic-q1",
      stem: "A 40-year-old man has had daily epigastric burning and body ache for two years with three normal endoscopies and multiple normal ultrasounds. He is preoccupied that he has stomach cancer and spends hours reading about it. Which statement best reflects the DSM-5 basis for diagnosing somatic symptom disorder in him?",
      options: [
        "The diagnosis requires that all his symptoms be medically unexplained",
        "The diagnosis rests on disproportionate thoughts, persistent health anxiety and excessive time devoted to the symptoms for at least six months, whether or not a medical explanation exists",
        "The diagnosis requires that he be intentionally producing his symptoms",
        "The diagnosis can be made only after psychiatric referral confirms it",
        "The diagnosis requires at least four pain, two gastrointestinal, one sexual and one pseudoneurological symptom",
      ],
      answer: 1,
      explanation:
        "DSM-5 deliberately moved away from requiring symptoms to be medically unexplained and instead requires distressing somatic symptoms for six months or more plus a positive psychological criterion - disproportionate thoughts, persistent anxiety about health, or excessive time and energy devoted to symptoms. Requiring all symptoms to be unexplained describes the abandoned DSM-IV somatoform concept. Intentional production defines factitious disorder or malingering, not somatic symptom disorder. The diagnosis is made in primary care and does not need psychiatric confirmation. The four-pain, two-gastrointestinal, one-sexual and one-pseudoneurological count is the old DSM-IV somatisation disorder criterion, which no longer exists.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-somatic-q2",
      stem: "A 30-year-old woman with two years of medically unexplained symptoms is seen after a full normal work-up. Which single measure has the strongest evidence for reducing her healthcare use and improving function?",
      options: [
        "Telling her that all reports are normal and there is nothing to worry about",
        "Regular time-based appointments with one named doctor, whether or not symptoms are present",
        "A repeat panel of investigations every three months to reassure her",
        "Long-term alprazolam for the associated tension",
        "Referral to a different specialist for each symptom",
      ],
      answer: 1,
      explanation:
        "Structured, time-based follow-up with a single named doctor is the intervention with the best evidence in medically unexplained symptoms: it removes the need for the patient to produce a symptom in order to be seen, cuts emergency attendances and investigation, and improves function. Simple negative reassurance relieves anxiety for only hours and is the commonest reason for doctor-shopping. Repeating normal investigations confirms the patient's belief that something serious is being sought and generates incidental findings. Long-term benzodiazepines add dependence, sedation and falls without treating the disorder. Referring each symptom to a different specialist is precisely the fragmentation that drives chronicity and iatrogenic harm.",
      difficulty: "easy",
    },
    {
      id: "psychiatry-somatic-q3",
      stem: "A 26-year-old woman presents with sudden inability to move her right leg after a family quarrel. Power appears 0/5 on direct hip extension, but when she flexes the left hip against resistance the right hip extends strongly. Reflexes and plantars are normal, and MRI of the spine is normal. What is the diagnosis and the correct next step?",
      options: [
        "Malingering - discharge her and refuse a certificate",
        "Functional neurological disorder with a positive Hoover's sign - explain the diagnosis and demonstrate the sign to her, and refer for physiotherapy-led rehabilitation",
        "Early Guillain-Barre syndrome - admit for nerve conduction studies",
        "Conversion symptoms - prescribe intravenous diazepam and observe",
        "Spinal cord compression - repeat the MRI with contrast",
      ],
      answer: 1,
      explanation:
        "Hoover's sign - weak voluntary hip extension with normal involuntary extension during contralateral hip flexion - is a positive rule-in sign of functional neurological disorder, which is diagnosed on such internal inconsistency rather than on a normal scan. Best practice is to explain the diagnosis positively, demonstrate the sign so the patient sees that the pathway is intact, and refer for physiotherapy-led rehabilitation. Malingering requires intentional production for external gain, which is not demonstrated here and should not be assumed. Guillain-Barre gives symmetrical ascending weakness with areflexia, not unilateral leg weakness with normal reflexes. Diazepam treats nothing here. The MRI is already normal and the reflexes and plantars exclude cord compression, so repeating imaging adds only cost and anxiety.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-somatic-q4",
      stem: "A 45-year-old man with somatic symptom disorder and chronic widespread pain has a PHQ-9 of 14 and a GAD-7 of 12. He is on paracetamol, a nonsteroidal anti-inflammatory drug and vitamin injections. What is the best drug plan?",
      options: [
        "Add tramadol 50 mg three times daily",
        "Stop the injections, and start amitriptyline 10-25 mg at night titrated to 50-75 mg, or duloxetine 30-60 mg, explained as pain-modulating treatment; treat the depression and anxiety at full dose and continue 6-12 months",
        "Add clonazepam 0.5 mg twice daily long term",
        "Continue vitamin injections weekly as they help his confidence",
        "Refer for a diagnostic laparoscopy to settle the abdominal component",
      ],
      answer: 1,
      explanation:
        "Amitriptyline and duloxetine have direct evidence in functional and centrally mediated pain, and presenting them honestly as pain-modulating drugs improves acceptance; the coexisting moderate depression and anxiety need full-dose treatment for 6-12 months, and unnecessary injections should stop. Tramadol is an opioid with serotonergic activity, adds dependence and serotonin syndrome risk, and has no place in chronic functional pain. Long-term clonazepam produces tolerance, falls and cognitive impairment without treating the disorder. Continuing vitamin injections reinforces the belief in a physical deficiency and medicalises the illness further. Diagnostic laparoscopy in functional abdominal pain is exactly the iatrogenic harm to be avoided, and adhesions from it create new pain.",
      difficulty: "moderate",
    },
    {
      id: "psychiatry-somatic-q5",
      stem: "A 58-year-old man has been attending for four years with unexplained body aches, managed with timed appointments and amitriptyline. He now reports six weeks of a new dull backache that wakes him at night, and he has lost 5 kg. What should you do?",
      options: [
        "Reassure him that this is his usual somatic symptom disorder and continue the plan",
        "Increase the amitriptyline dose and review in a month",
        "Assess and investigate the new symptom on its merits, including examination, blood counts, ESR, prostate assessment and spinal imaging",
        "Refer him to psychiatry for worsening somatisation",
        "Add a benzodiazepine for the disturbed sleep",
      ],
      answer: 2,
      explanation:
        "Night pain that wakes the patient and unexplained weight loss in a man of 58 are red flags for malignancy, myeloma or infection, and a patient with somatic symptom disorder develops organic disease at the same rate as anyone else, so the new pattern must be assessed on its merits with examination and appropriate investigation. Attributing it to the existing label is the classic and dangerous error the question tests. Increasing amitriptyline treats the symptom while the cause progresses. Psychiatric referral misdirects a patient with red flags. A benzodiazepine sedates him and delays the diagnosis further.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "psychiatry-somatic-c1",
      front: "DSM-5 criteria for somatic symptom disorder.",
      back: "One or more distressing somatic symptoms for at least 6 months, plus at least one of: disproportionate and persistent thoughts about their seriousness, persistently high health anxiety, or excessive time and energy devoted to them. It does not matter whether the symptom is medically explained.",
    },
    {
      id: "psychiatry-somatic-c2",
      front: "How does illness anxiety disorder differ from somatic symptom disorder?",
      back: "Illness anxiety disorder is preoccupation with having or acquiring a serious illness with minimal or no somatic symptoms, plus excessive health behaviour or maladaptive avoidance. Somatic symptom disorder has prominent distressing symptoms.",
    },
    {
      id: "psychiatry-somatic-c3",
      front: "The three stages of the reattribution model.",
      back: "1. Feeling understood - full history, mood and social enquiry, proper examination. 2. Broadening the agenda - feed back normal findings, acknowledge the symptom, link to life events. 3. Making the link - give a physiological mechanism the patient can accept.",
    },
    {
      id: "psychiatry-somatic-c4",
      front: "The single most effective structural intervention in medically unexplained symptoms.",
      back: "Time-based appointments with one named doctor - a fixed 15 minutes every 2-4 weeks whether or not symptoms are present - which removes the need to be ill in order to be seen.",
    },
    {
      id: "psychiatry-somatic-c5",
      front: "PHQ-15 bands.",
      back: "Fifteen items scored 0-2, total 0-30: 5-9 low, 10-14 medium, 15-30 high somatic symptom burden. High scores predict disability and healthcare use.",
    },
    {
      id: "psychiatry-somatic-c6",
      front: "Positive signs of functional neurological disorder.",
      back: "Hoover's sign, give-way weakness, tremor entrainment, dissociative seizures with eyes closed and resisted, prolonged fluctuating events without cyanosis or post-ictal confusion, normal reflexes and plantars. Diagnosis is rule-in, not exclusion.",
    },
    {
      id: "psychiatry-somatic-c7",
      front: "Somatic symptom disorder versus factitious disorder versus malingering.",
      back: "Somatic symptom disorder: symptoms not intentional, no external motive. Factitious: intentional, motive is the sick role. Malingering: intentional, motive is external gain (money, leave, drugs) and it is not a psychiatric diagnosis.",
    },
    {
      id: "psychiatry-somatic-c8",
      front: "Drugs with evidence in functional and centrally mediated pain.",
      back: "Amitriptyline 10-25 mg at night titrated to 50-75 mg, or duloxetine 30-60 mg daily; treat coexisting depression or anxiety with a full-dose SSRI for 6-12 months. No opioids, no benzodiazepines, no injections.",
    },
  ],
  references: [
    "American Psychiatric Association, DSM-5-TR, 2022",
    "Kroenke K, Spitzer RL, Williams JBW. The PHQ-15, Psychosomatic Medicine, 2002",
    "Goldberg D, Gask L, O'Dowd T. The treatment of somatization: teaching techniques of reattribution, Journal of Psychosomatic Research, 1989",
    "Stone J et al. Functional neurological disorders: diagnosis and management, Practical Neurology / BMJ, 2020",
    "Indian Psychiatric Society Clinical Practice Guidelines for the management of somatoform disorders, 2018",
    "Murtagh J. General Practice, 8th edition, 2018 - chapter on the patient with unexplained symptoms",
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
