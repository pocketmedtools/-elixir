import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "fm-principles-definition",
  title: "Definition and principles of family medicine",
  oneLiner:
    "Family medicine is the academic and clinical discipline that provides continuing, comprehensive, person-centred first-contact care to individuals and their families irrespective of age, sex, organ system or disease, and it is defined by its relationship with the patient rather than by a body of knowledge, an organ or a technology.",
  frequency: "core",
  keywords: [
    "family physician",
    "general practice",
    "McWhinney",
    "WONCA",
    "Starfield",
    "four Cs",
    "primary care",
    "person-centred care",
    "Leeuwenhorst definition",
    "Alma-Ata",
    "ecology of medical care",
    "iceberg of disease",
    "undifferentiated illness",
    "MD Family Medicine",
    "DNB Family Medicine",
    "inverse care law",
  ],
  sections: [
    {
      heading: "Definitions worth quoting verbatim",
      points: [
        "**WONCA Europe (2002, revised 2011):** general practice / family medicine is an academic and scientific discipline with its own educational content, research, evidence base and clinical activity, and a clinical specialty oriented to primary care - this single sentence earns the definition mark in any Paper I answer.",
        "**Leeuwenhorst (1974):** the general practitioner is a licensed medical graduate who gives personal, primary and continuing care to individuals, families and a practice population, irrespective of age, sex and illness; the three adjectives - personal, primary, continuing - are the marking points.",
        "**AAFP:** family medicine is the medical specialty that provides continuing, comprehensive health care for the individual and family, integrating the biological, clinical and behavioural sciences, and its scope is not limited by age, sex, organ system or disease entity.",
        "**Ian McWhinney:** family medicine is defined in terms of relationships, and is the only discipline to define itself in terms of relationships, especially the doctor-patient relationship - it is therefore not a residual specialty of whatever the others have left behind.",
        "In India the discipline is recognised as **MD Family Medicine (NMC)** and **DNB Family Medicine (NBEMS)**, and the National Health Policy 2017 explicitly calls for family physicians and mid-level providers to deliver comprehensive primary health care.",
        "The **1978 Alma-Ata Declaration** and the **2018 Astana Declaration** frame the discipline politically: primary health care is the vehicle for health for all, and the family physician is the clinical expression of it.",
      ],
    },
    {
      heading: "McWhinney's nine principles",
      points: [
        "1. The family physician is **committed to the person rather than to a particular body of knowledge**, group of diseases or special technique; the commitment is open-ended and has no natural end point.",
        "2. The family physician **seeks to understand the context of the illness** - the family, the work, the money and the neighbourhood - because illness is often unintelligible outside it.",
        "3. The family physician sees **every contact as an opportunity for prevention** and health education, which is why an opportunistic BP or a blood sugar at a fever visit is good family practice, not overservicing.",
        "4. The family physician views the practice as a **population at risk**, thinking in denominators: how many diabetics in my panel, how many are controlled, how many have not attended.",
        "5. The family physician is **part of a community-wide network** of supportive and health care agencies - ASHA, anganwadi, the PHC, the NGO, the palliative care team.",
        "6. The family physician should ideally **share the same habitat** as the patients, and so is exposed to the same water, air, sanitation and social risks.",
        "7. The family physician **sees patients in their homes**, where illness is understood better in an hour than in a year of clinic visits.",
        "8. The family physician **attaches importance to the subjective aspects of medicine** - feelings, meanings and the illness experience, not only the disease.",
        "9. The family physician is a **manager of resources**, controlling access to investigations, drugs, specialists and admission, and is accountable for using them well.",
      ],
    },
    {
      heading: "Starfield's four Cs and the core competencies",
      points: [
        "Barbara Starfield reduced primary care to four attributes - **first contact access, longitudinality (continuity), comprehensiveness and coordination** - with family orientation, community orientation and cultural competence as derivative attributes.",
        "Health systems built on strong primary care have **lower cost, better equity and better health outcomes**; this is the evidence sentence to quote when asked why family medicine matters.",
        "**WONCA six core competencies:** primary care management, person-centred care, specific problem-solving skills, a comprehensive approach, community orientation and holistic modelling.",
        "These rest on three **background features** - contextual, attitudinal and scientific - which is what distinguishes a trained family physician from an untrained general practitioner.",
        "The **holistic (biopsychosocial) model of Engel, 1977** underpins the discipline: disease, illness experience and social context are addressed at every consultation.",
        "**Marshall Marinker's aphorism** is worth memorising: the hospital doctor's task is to reduce uncertainty, explore possibility and marginalise error; the general practitioner's task is to tolerate uncertainty, explore probability and marginalise danger.",
      ],
    },
    {
      heading: "How family practice differs from specialist practice",
      points: [
        "The family physician meets illness **early and undifferentiated**, when it is a symptom and not yet a diagnosis; the specialist meets it late, filtered and already labelled.",
        "**Prior probability is low:** the same chest pain that is coronary in 60% of a cardiology clinic is coronary in under 5% of a general practice, so the same test performs completely differently - a positive result in general practice is far more likely to be false.",
        "The family physician uses **time as a diagnostic and therapeutic tool** (Braun's watchful waiting with deliberate review), whereas the specialist tends to use technology to shorten the same interval.",
        "Care is **continuous and cumulative** - the record, not the referral letter, is the unit of information - and the same doctor sees the beginning, the middle and the end of the story.",
        "The unit of care is the **person and the family**, so a single consultation may legitimately deal with a hypertensive husband, an anxious wife and an unimmunised child.",
        "The family physician must **rule out the avoidable dangerous course** rather than reach a final pathological diagnosis, and must be comfortable ending a consultation with a symptom label and a safety net.",
      ],
    },
    {
      heading: "The ecology of medical care and the iceberg",
      points: [
        "**White, Williams and Greenberg (1961):** in any month, of 1000 adults about 750 have a symptom, 250 consult a physician, 9 are admitted, 5 are referred to another physician and 1 reaches a university teaching hospital.",
        "**Green et al (2001)** repeated the study with almost identical proportions, showing the architecture of care has not changed in 40 years - the teaching hospital sees fewer than 1 in 1000 symptomatic people, yet trains every doctor.",
        "The exam point is that **medical education is delivered in the setting that sees the least representative 0.1%**, which is the argument for training in primary care.",
        "**Last's iceberg of disease (1963):** the diagnosed and treated cases are the tip; below the waterline lie the presymptomatic, the undiagnosed, the untreated and the unreported, and it is the family physician who can see below the surface.",
        "**Tudor Hart's inverse care law (1971):** the availability of good medical care varies inversely with the need of the population served - it operates strongly in rural India and in urban slums.",
        "About 90% of illness episodes are managed **entirely outside the formal health system**, by self-care, the family, the chemist and traditional practitioners - which makes health education a core clinical activity.",
      ],
    },
    {
      heading: "The Indian context",
      points: [
        "Roughly **70-80% of first contacts** in India are with the private sector, much of it single-doctor general practice, and much of it not formally trained in family medicine.",
        "**Ayushman Bharat (2018)** converted subcentres and PHCs into Health and Wellness Centres, now Ayushman Arogya Mandirs, delivering an expanded package of comprehensive primary health care - screening for hypertension, diabetes and three cancers, mental health, elderly and palliative care, and emergency care.",
        "The **National Health Policy 2017** commits two-thirds of the health budget to primary care and names family medicine training as a priority; the **NMC** has since made an MD Family Medicine seat possible in district hospitals.",
        "**Out-of-pocket expenditure** remains close to half of total health expenditure, so rational prescribing, restrained investigation and a considered referral are not academic virtues but a direct financial intervention for the family.",
        "The Indian family physician works across a **pluralistic system** - allopathy, AYUSH, chemists, informal providers and faith healers - and must be able to ask about parallel treatment without shaming the patient.",
        "**Task-sharing** is built into the system: ASHA, ANM, anganwadi worker, community health officer and the mid-level provider are the family physician's team, not competitors.",
      ],
    },
  ],
  tables: [
    {
      heading: "Family practice versus specialist practice",
      columns: ["Dimension", "Family practice", "Specialist practice"],
      rows: [
        ["Patient at presentation", "Undifferentiated, early, often self-limiting", "Filtered, selected, already labelled"],
        ["Prevalence of serious disease", "Low prior probability", "High prior probability"],
        ["Unit of care", "Person and family over time", "Organ or disease episode"],
        ["Main diagnostic tool", "History, relationship and time", "Investigation and procedure"],
        ["End point of consultation", "A safe plan and a review date", "A definitive diagnosis"],
        ["Relationship", "Continuous, cumulative, open-ended", "Episodic, referral-bounded"],
      ],
    },
    {
      heading: "Ecology of medical care per 1000 adults per month",
      columns: ["Level", "White 1961", "Green 2001"],
      rows: [
        ["Report a symptom", "750", "800"],
        ["Consult a physician", "250", "217"],
        ["Seen in primary care", "Most of the 250", "113"],
        ["Admitted to hospital", "9", "8"],
        ["Reach a teaching hospital", "1", "Less than 1"],
      ],
    },
    {
      heading: "WONCA core competencies mapped to daily work",
      columns: ["Competency", "What it looks like in the clinic"],
      rows: [
        ["Primary care management", "Open access, first contact, coordination and a considered referral"],
        ["Person-centred care", "Eliciting ICE, shared decisions, continuity of the relationship"],
        ["Specific problem-solving skills", "Working with low prevalence, undifferentiated symptoms and time"],
        ["Comprehensive approach", "Acute, chronic, preventive and palliative care in one visit"],
        ["Community orientation", "Knowing the denominator, the local epidemiology and the resources"],
        ["Holistic modelling", "Addressing disease, illness experience and social context together"],
      ],
    },
  ],
  redFlags: [
    "A patient who discloses physical or sexual abuse of a child during a routine consultation - POCSO 2012 makes reporting mandatory; this cannot be kept as a private confidence between doctor and family.",
    "Any patient presenting with an injury from assault, poisoning, burns, a road traffic accident or sexual assault - a medico-legal case that must be documented, treated first, and the police informed; refusing initial treatment is itself an offence.",
    "A first contact with a notifiable disease (tuberculosis, measles, cholera, dengue, diphtheria, acute flaccid paralysis) - notify through IHIP/IDSP and Nikshay for tuberculosis rather than treat and forget.",
    "A patient who appears unable to understand, retain, weigh or communicate a decision - capacity must be formally assessed and a nominated representative involved under the Mental Healthcare Act 2017 before any consent is accepted.",
    "Suicidal ideation or intent disclosed in an ordinary consultation - never manage alone or defer to a later appointment; same-day mental health involvement and a documented safety plan.",
    "A woman disclosing intimate partner violence - offer, do not impose, referral under the Protection of Women from Domestic Violence Act 2005, document injuries carefully, and never counsel the couple jointly at that visit.",
  ],
  pearls: [
    "Family medicine is the only specialty defined by a relationship rather than by an organ, a technique or a disease - open the answer with this sentence.",
    "Quote McWhinney's first principle exactly: commitment is to the person, not to a body of knowledge; everything else follows from it.",
    "Starfield's four Cs - first contact, continuity, comprehensiveness, coordination - are the skeleton of half the Paper I questions in this subject.",
    "Low prevalence changes test performance, not just probability: the same investigation ordered indiscriminately in general practice generates mostly false positives.",
    "In primary care the aim is to marginalise danger, not to make a pathological diagnosis for every symptom.",
    "Every consultation is an opportunity for prevention - an opportunistic blood pressure at a fever visit is the third McWhinney principle in action.",
    "The family physician is a manager of resources; in India, where half of health spending is out of pocket, restraint in investigation is direct patient benefit.",
    "Never call family medicine a residual specialty; it is defined by what it does - continuing, comprehensive, coordinated first-contact care - and not by what other specialties decline to do.",
  ],
  theory: [
    {
      id: "fm-principles-definition-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Define family medicine. Enumerate the principles of family medicine as described by McWhinney and discuss how family practice differs from specialist practice with suitable examples.",
      openingLines: [
        "Family medicine is an academic and scientific discipline with its own educational content, research, evidence base and clinical activity, and a clinical specialty oriented to primary care (WONCA Europe, 2011); it provides continuing, comprehensive, person-centred first-contact care to individuals and families irrespective of age, sex, organ system or disease.",
        "Ian McWhinney's central observation is that family medicine is the only discipline that defines itself in terms of relationships, particularly the doctor-patient relationship, rather than in terms of a body of knowledge, an organ or a technology.",
      ],
      answer: [
        {
          heading: "1. Definitions",
          points: [
            "WONCA Europe 2002/2011 definition as above, with the eleven characteristics of the discipline.",
            "Leeuwenhorst 1974: a licensed medical graduate who gives personal, primary and continuing care to individuals, families and a practice population irrespective of age, sex and illness.",
            "AAFP: continuing and comprehensive health care for the individual and family, integrating the biological, clinical and behavioural sciences, unlimited by age, sex, organ system or disease entity.",
          ],
        },
        {
          heading: "2. McWhinney's nine principles",
          points: [
            "Commitment to the person rather than to a body of knowledge or a group of diseases.",
            "Seeks to understand the context of the illness - family, work, finances, community.",
            "Sees every contact as an opportunity for prevention and health education.",
            "Views the practice as a population at risk, and thinks in denominators.",
            "Sees himself or herself as part of a community-wide network of health and social agencies.",
            "Ideally shares the same habitat as the patients.",
            "Sees patients in their homes.",
            "Attaches importance to the subjective aspects of medicine - the illness experience.",
            "Is a manager of resources - investigations, drugs, referrals and admissions.",
          ],
        },
        {
          heading: "3. Starfield's attributes as an organising framework",
          points: [
            "First contact accessibility, longitudinality, comprehensiveness and coordination, with family orientation, community orientation and cultural competence as derived attributes.",
            "Systems with strong primary care demonstrate lower cost, better equity and better population outcomes.",
          ],
        },
        {
          heading: "4. How family practice differs from specialist practice",
          points: [
            "Stage of illness: undifferentiated and early versus filtered and labelled. Example: a woman with three weeks of tiredness in general practice, against the same woman referred with a documented haemoglobin of 6 g/dL to a haematology clinic.",
            "Prior probability: chest pain is cardiac in fewer than 5% of general practice presentations but in the majority of a cardiology clinic, so an exercise test used indiscriminately in general practice produces mainly false positives.",
            "Unit of care: the person and the family over time, versus the organ or the episode. Example: managing a young man's asthma alongside the household kerosene stove and the mother's untreated depression.",
            "Method: history, relationship and the deliberate use of time versus technology and procedure.",
            "Goal: to marginalise danger, provide a safety net and a review date, versus to secure a definitive pathological diagnosis.",
            "Accountability: to a defined practice population as well as to the individual in front of you.",
          ],
        },
        {
          heading: "5. Relevance to Indian practice",
          points: [
            "Most first contacts in India are in the private, largely untrained, general practice sector; formal MD and DNB Family Medicine training exists to correct this.",
            "The National Health Policy 2017 and Ayushman Bharat Health and Wellness Centres institutionalise comprehensive primary care delivered by family physicians and mid-level providers.",
            "High out-of-pocket expenditure makes the resource-manager principle a direct clinical intervention.",
          ],
        },
      ],
      mustDraw: [
        "A two-column table contrasting family practice and specialist practice across stage of illness, prior probability, unit of care, method and end point.",
        "The ecology of medical care pyramid per 1000 adults per month (750 symptomatic, 250 consult, 9 admitted, 1 to a teaching hospital).",
      ],
      markSplit: [
        { part: "Definitions quoted accurately", marks: 2 },
        { part: "McWhinney's nine principles", marks: 3 },
        { part: "Differences from specialist practice with examples", marks: 4 },
        { part: "Indian context and conclusion", marks: 1 },
      ],
      keywords: ["WONCA definition", "McWhinney principles", "Starfield four Cs", "prior probability", "undifferentiated illness"],
    },
    {
      id: "fm-principles-definition-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the ecology of medical care and the iceberg phenomenon of disease, and their implications for family practice.",
      openingLines: [
        "The ecology of medical care describes how a population's illness experience is distributed across levels of care, and was first quantified by White, Williams and Greenberg in 1961 and confirmed by Green and colleagues in 2001.",
        "The iceberg phenomenon, described by Last in 1963, states that recognised and treated disease is only the visible tip of a much larger submerged mass of undiagnosed, untreated and unreported illness.",
      ],
      answer: [
        {
          heading: "The ecology of medical care",
          points: [
            "Per 1000 adults per month: about 750 experience at least one symptom, 250 consult a physician, 9 are admitted to hospital, 5 are referred to another physician and 1 reaches a university teaching hospital.",
            "The 2001 replication found 800 symptomatic, 217 visiting a physician's office, 113 seen in primary care, 8 admitted and fewer than 1 in an academic medical centre.",
            "Implication: undergraduate and postgraduate training happens in the setting that sees the least representative fraction of illness, which distorts clinical judgement and thresholds.",
          ],
        },
        {
          heading: "The iceberg of disease",
          points: [
            "Above the waterline: diagnosed, treated and notified cases. Below: presymptomatic disease, undiagnosed disease, untreated disease, carriers and the unreported.",
            "Classic Indian examples: undiagnosed hypertension and diabetes (fewer than half of hypertensives know their diagnosis), latent tuberculosis infection, subclinical hypothyroidism, silent cervical dysplasia, and unreported domestic violence.",
            "Determinants of the submerged part: symptom tolerance, cost, distance, stigma, gender and the inverse care law.",
          ],
        },
        {
          heading: "Implications for practice",
          points: [
            "Justifies opportunistic screening and case finding at every contact rather than waiting for presentation.",
            "Explains why a positive test in general practice is far more likely to be a false positive than the same test in hospital.",
            "Supports community-based approaches - camps, ASHA-led case finding, HWC population enumeration - to raise the waterline.",
            "Reminds the family physician that the denominator is the practice population, not the waiting room.",
          ],
        },
      ],
      mustDraw: [
        "The iceberg diagram with the waterline labelled and at least four submerged layers.",
        "The 1000-adult ecology pyramid.",
      ],
      markSplit: [
        { part: "Ecology of medical care with numbers", marks: 2 },
        { part: "Iceberg with Indian examples", marks: 2 },
        { part: "Implications for practice", marks: 1 },
      ],
      keywords: ["White 1961", "Green 2001", "iceberg of disease", "case finding", "inverse care law"],
    },
    {
      id: "fm-principles-definition-t3",
      paper: "I",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the core competencies of a family physician as defined by WONCA and briefly state how each is demonstrated in practice.",
      openingLines: [
        "WONCA Europe defines six core competencies of the discipline, resting on three background features - contextual, attitudinal and scientific - and together these describe what a trained family physician can do that an untrained general practitioner cannot reliably do.",
      ],
      answer: [
        {
          heading: "The six core competencies",
          points: [
            "Primary care management: open and unlimited first contact access, dealing with all health problems, coordinating care and acting as an effective gatekeeper.",
            "Person-centred care: a consultation that elicits ideas, concerns and expectations, develops an effective doctor-patient relationship and enables shared decisions.",
            "Specific problem-solving skills: decision making driven by prevalence and incidence in the community, using time selectively and tolerating uncertainty.",
            "Comprehensive approach: managing acute and chronic problems simultaneously, and integrating promotion, prevention, cure, care and palliation.",
            "Community orientation: reconciling the needs of the individual patient with the health needs of the community within available resources.",
            "Holistic modelling: using a biopsychosocial model that takes into account cultural and existential dimensions.",
          ],
        },
        {
          heading: "The three background features",
          points: [
            "Contextual: understanding the patient's environment, family, culture and the health system.",
            "Attitudinal: awareness of one's own capabilities, values, ethics and the emotional impact of work.",
            "Scientific: a critical, research-based approach with continuing professional development and audit.",
          ],
        },
      ],
      markSplit: [
        { part: "Six competencies named", marks: 3 },
        { part: "Practical illustration of each", marks: 1 },
        { part: "Three background features", marks: 1 },
      ],
      keywords: ["WONCA tree", "core competencies", "biopsychosocial", "gatekeeping", "community orientation"],
    },
  ],
  mcqs: [
    {
      id: "fm-principles-definition-q1",
      stem: "Which statement best captures McWhinney's first principle of family medicine?",
      options: [
        "The family physician must be competent in a defined body of knowledge covering all organ systems",
        "The family physician is committed to the person rather than to a particular body of knowledge or group of diseases",
        "The family physician must practise in the community where he or she lives",
        "The family physician should manage 90 per cent of presenting problems without referral",
        "The family physician is primarily responsible for preventive services in the community",
      ],
      answer: 1,
      explanation:
        "McWhinney's first and organising principle is an open-ended commitment to the person, which is why family medicine defines itself by relationship rather than content. Competence across organ systems, sharing the patient's habitat and preventive activity are all genuine principles, but they are the fourth, sixth and third respectively and derive from the first. A 90 per cent management figure is a service statistic, not a principle at all.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-definition-q2",
      stem: "In the ecology of medical care as described by White, Williams and Greenberg, how many of 1000 adults reporting symptoms in a month reach a university teaching hospital?",
      options: ["1", "5", "9", "25", "250"],
      answer: 0,
      explanation:
        "The classic figures are 750 symptomatic, 250 consulting a physician, 9 admitted to hospital, 5 referred to another physician and 1 reaching a university teaching hospital. Five is the number referred to another physician and nine the number admitted anywhere, so both are the commonest wrong answers. The teaching hospital figure of 1 in 1000 is the point of the study: doctors are trained in the least representative setting.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-definition-q3",
      stem: "A 44-year-old man attends a family practice with two weeks of intermittent central chest discomfort. In this setting, compared with a cardiology outpatient clinic, which statement about a treadmill test is most accurate?",
      options: [
        "Its sensitivity is lower because the population is younger",
        "Its specificity is lower because the population is younger",
        "A positive result is more likely to be a false positive because the pre-test probability is low",
        "A negative result is less reliable because the pre-test probability is low",
        "Its likelihood ratios change with the setting",
      ],
      answer: 2,
      explanation:
        "Sensitivity, specificity and likelihood ratios are properties of the test and do not change with setting, but predictive values do: with a low pre-test probability in general practice, most positive results are false positives. A negative result becomes more, not less, reliable when prevalence is low, so that option inverts the relationship. This asymmetry is the single most important statistical difference between primary and specialist practice.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-definition-q4",
      stem: "The four attributes of primary care described by Barbara Starfield are:",
      options: [
        "Accessibility, affordability, acceptability and accountability",
        "First contact, continuity, comprehensiveness and coordination",
        "Prevention, promotion, cure and rehabilitation",
        "Equity, efficiency, effectiveness and quality",
        "Availability, adequacy, appropriateness and assessment",
      ],
      answer: 1,
      explanation:
        "Starfield's four Cs are first contact access, longitudinality or continuity, comprehensiveness and coordination, with family orientation, community orientation and cultural competence as derivative attributes. The four As of accessibility, affordability, acceptability and availability belong to the Alma-Ata description of primary health care principles, and prevention to rehabilitation is the levels-of-prevention list; both are tempting because they are also four-item lists from the same syllabus.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-definition-q5",
      stem: "The observation that the availability of good medical care tends to vary inversely with the need of the population served is known as:",
      options: [
        "The iceberg phenomenon",
        "The inverse care law",
        "The rule of rescue",
        "The prevention paradox",
        "Roemer's law",
      ],
      answer: 1,
      explanation:
        "Julian Tudor Hart described the inverse care law in the Lancet in 1971, and added that it operates most completely where medical care is exposed most to market forces. The iceberg phenomenon concerns undetected disease rather than the distribution of services. The prevention paradox is Rose's observation that a measure bringing large benefit to a population offers little to each individual, and Roemer's law is that a built hospital bed tends to be a filled hospital bed.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-definition-q6",
      stem: "Which of the following is NOT one of the WONCA six core competencies of general practice / family medicine?",
      options: [
        "Primary care management",
        "Person-centred care",
        "Procedural competence in minor surgery",
        "Community orientation",
        "Holistic modelling",
      ],
      answer: 2,
      explanation:
        "The six core competencies are primary care management, person-centred care, specific problem-solving skills, a comprehensive approach, community orientation and holistic modelling. Minor surgical skill is a valued part of the comprehensive approach in many practices, but it is a task and not a defining competency of the discipline, and its absence does not stop a doctor being a family physician.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-definition-q7",
      stem: "A family physician measures the blood pressure of a 38-year-old man who has attended for a sore throat, finds it to be 158/98 mmHg and arranges a repeat visit. Which principle of family medicine does this best illustrate?",
      options: [
        "The practice is a population at risk",
        "Every contact is an opportunity for prevention and health education",
        "The physician is a manager of resources",
        "The physician attaches importance to the subjective aspects of medicine",
        "The physician seeks to understand the context of the illness",
      ],
      answer: 1,
      explanation:
        "Acting on an unrelated problem at an unrelated visit is opportunistic prevention, McWhinney's third principle, and is the mechanism by which family practice reaches the submerged part of the iceberg. Thinking of the practice as a population at risk would mean auditing how many of the whole panel have had a BP recorded, which is a different activity. Resource management concerns the use of tests and referrals, and the subjective and contextual principles concern the illness experience rather than opportunistic case finding.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "fm-principles-definition-c1",
      front: "WONCA Europe definition of general practice / family medicine.",
      back: "An academic and scientific discipline with its own educational content, research, evidence base and clinical activity, and a clinical specialty oriented to primary care (2002, revised 2011).",
    },
    {
      id: "fm-principles-definition-c2",
      front: "Leeuwenhorst definition of the general practitioner (1974).",
      back: "A licensed medical graduate who gives personal, primary and continuing care to individuals, families and a practice population irrespective of age, sex and illness.",
    },
    {
      id: "fm-principles-definition-c3",
      front: "McWhinney's first principle.",
      back: "Commitment to the person rather than to a particular body of knowledge, group of diseases or special technique - an open-ended commitment with no natural end point.",
    },
    {
      id: "fm-principles-definition-c4",
      front: "How many of McWhinney's principles are there, and name the last one.",
      back: "Nine. The ninth is that the family physician is a manager of resources - investigations, drugs, referrals and admissions.",
    },
    {
      id: "fm-principles-definition-c5",
      front: "Starfield's four Cs of primary care.",
      back: "First contact access, continuity (longitudinality), comprehensiveness and coordination.",
    },
    {
      id: "fm-principles-definition-c6",
      front: "The six WONCA core competencies.",
      back: "Primary care management, person-centred care, specific problem-solving skills, comprehensive approach, community orientation, holistic modelling.",
    },
    {
      id: "fm-principles-definition-c7",
      front: "Ecology of medical care figures per 1000 adults per month (White, 1961).",
      back: "750 symptomatic, 250 consult a physician, 9 admitted, 5 referred to another physician, 1 reaches a university teaching hospital.",
    },
    {
      id: "fm-principles-definition-c8",
      front: "Who described the iceberg of disease, and what lies below the waterline?",
      back: "Last, 1963. Presymptomatic, undiagnosed, untreated and unreported disease plus carriers - the majority of illness in the community.",
    },
    {
      id: "fm-principles-definition-c9",
      front: "Tudor Hart's inverse care law.",
      back: "The availability of good medical care varies inversely with the need of the population served, and operates most completely where care is exposed to market forces (1971).",
    },
    {
      id: "fm-principles-definition-c10",
      front: "Marinker's contrast between hospital and general practice.",
      back: "The hospital doctor reduces uncertainty, explores possibility and marginalises error; the general practitioner tolerates uncertainty, explores probability and marginalises danger.",
    },
    {
      id: "fm-principles-definition-c11",
      front: "Which model underpins family medicine, and who described it?",
      back: "The biopsychosocial model, George Engel, 1977 - disease, illness experience and social context addressed together.",
    },
    {
      id: "fm-principles-definition-c12",
      front: "Two Indian policy documents that institutionalise family medicine.",
      back: "National Health Policy 2017 (two-thirds of the budget to primary care, family medicine training) and Ayushman Bharat 2018 Health and Wellness Centres delivering comprehensive primary health care.",
    },
  ],
  references: [
    "McWhinney IR, Freeman T. Textbook of Family Medicine, 4th edition, Oxford University Press, 2016",
    "WONCA Europe. The European Definition of General Practice / Family Medicine, 2011 revision",
    "Starfield B. Primary Care: Balancing Health Needs, Services and Technology, Oxford University Press, 1998",
    "Green LA et al. The ecology of medical care revisited. New England Journal of Medicine, 2001",
    "Park K. Textbook of Preventive and Social Medicine, 27th edition, 2023 - concepts of health and health care delivery",
    "National Health Policy 2017, Ministry of Health and Family Welfare, Government of India",
  ],
});

topics.push({
  id: "fm-principles-consultation",
  title: "The consultation: models and communication skills",
  oneLiner:
    "The consultation is the central act of family medicine, and the recognised models - Pendleton's seven tasks, the Calgary-Cambridge guide, Neighbour's five checkpoints, Balint's ideas and the BATHE technique - are practical structures for eliciting the patient's ideas, concerns and expectations, reaching a shared understanding and closing safely.",
  frequency: "core",
  keywords: [
    "Pendleton",
    "Calgary-Cambridge",
    "Neighbour inner consultation",
    "BATHE",
    "ICE",
    "ideas concerns expectations",
    "Balint",
    "doctor as drug",
    "Byrne and Long",
    "Stott and Davis",
    "Helman folk model",
    "SPIKES",
    "breaking bad news",
    "safety netting",
    "motivational interviewing",
    "hidden agenda",
  ],
  sections: [
    {
      heading: "Why the consultation is studied at all",
      points: [
        "The consultation is the **commonest procedure a family physician performs** - several thousand a year - and it is the only one for which no formal training was traditionally given.",
        "**Beckman and Frankel (1984)** showed doctors interrupt the opening statement after about 18 seconds; a 2019 replication found a median of 11 seconds, and uninterrupted patients typically finish in under 90 seconds.",
        "The **golden minute** - letting the patient speak without interruption at the start - shortens rather than lengthens the consultation and reduces the door-handle problem of a new complaint at the end.",
        "**Consultation length in India** is short: the BMJ Open 2017 international comparison put the average Indian primary care consultation at about 2 minutes, against 22 minutes in Sweden, which makes an explicit structure more necessary, not less.",
        "Good communication measurably improves **adherence, symptom control, satisfaction and diagnostic accuracy**, and reduces complaints and litigation - most complaints arise from communication failure, not clinical error.",
        "**Kurtz's dictum:** communication is a clinical skill, not a personality trait, and like any clinical skill it is learnt by observation, practice and feedback - which is why it is examinable in an OSCE.",
      ],
    },
    {
      heading: "Pendleton's seven tasks (1984)",
      points: [
        "1. To **define the reason for the patient's attendance**, including the nature and history of the problem, its aetiology, and the patient's **ideas, concerns and expectations** and the effects of the problem.",
        "2. To **consider other problems** - continuing problems and at-risk factors, which is where opportunistic prevention enters the consultation.",
        "3. To **choose with the patient an appropriate action** for each problem - the word 'with' carries the mark.",
        "4. To achieve a **shared understanding** of the problem with the patient.",
        "5. To **involve the patient in the management** and encourage acceptance of appropriate responsibility.",
        "6. To **use time and resources appropriately** - in the consultation and in the long term.",
        "7. To **establish or maintain a relationship** with the patient which helps to achieve the other tasks.",
        "The 2003 revision (Pendleton, Schofield, Tate and Havelock) regroups these around the patient's and doctor's agendas but the seven tasks remain the examinable list.",
      ],
    },
    {
      heading: "Calgary-Cambridge guide (Kurtz and Silverman)",
      points: [
        "Five sequential tasks: **initiating the session; gathering information; physical examination; explanation and planning; closing the session**.",
        "Two tasks run **throughout the consultation as continuous threads: providing structure and building the relationship** - drawing this as two vertical bars alongside the five boxes earns the diagram mark.",
        "**Initiating** covers preparation, establishing rapport, identifying the reason for attendance with an open question, screening ('is there anything else?') and agenda setting.",
        "**Gathering information** uses the open-to-closed cone, exploring both the biomedical perspective (the disease) and the patient's perspective (ideas, concerns, expectations, feelings and effect on life), with attentive listening, facilitation, signposting and summarising.",
        "**Explanation and planning** uses chunking and checking, avoiding jargon, giving information in assimilable chunks, checking the patient's understanding, and shared decision making.",
        "**Closing** covers summarising, contracting, safety netting and a final check that the patient is comfortable with the plan.",
        "The guide names about 70 evidence-based skills, and is the standard framework for teaching and assessing communication in an OSCE.",
      ],
    },
    {
      heading: "Other models the examiner expects",
      points: [
        "**Byrne and Long (1976), Doctors Talking to Patients:** six phases - relating to the patient, discovering the reason for attendance, verbal or physical examination, consideration of the condition, detailing treatment or investigation, and terminating; they described doctor-centred versus patient-centred styles from 2500 audio-recorded consultations.",
        "**Stott and Davis (1979)** described four potential areas in every consultation as a 2x2 box: management of the presenting problem, modification of help-seeking behaviour, management of continuing problems, and opportunistic health promotion.",
        "**Neighbour (1987), The Inner Consultation:** five checkpoints - **connecting, summarising, handing over, safety netting and housekeeping** - housekeeping being the doctor's own emotional clearing before the next patient.",
        "**Balint (1957), The Doctor, His Patient and the Illness:** the doctor as a drug with its own dosage and side effects; the **flash** of insight; the **apostolic function**; **collusion of anonymity** when responsibility is diffused among many doctors; the **entry ticket** or hidden agenda where the presenting complaint is not the real one.",
        "**Helman's folk model (1981):** six questions the patient wants answered - what has happened, why has it happened, why to me, why now, what would happen if nothing were done, and what should I do about it or whom should I consult.",
        "**Transactional analysis (Berne):** parent-adult-child ego states; the consultation works best adult-to-adult and a parent-child transaction generates dependency.",
      ],
    },
    {
      heading: "ICE and the psychosocial screen",
      points: [
        "**ICE - ideas, concerns, expectations** - is the minimum patient-perspective enquiry and can be asked in three sentences: 'What do you think might be causing this?', 'Is there anything in particular you were worried about?', 'What were you hoping we could do today?'.",
        "Add **effects on daily life and feelings** to complete the patient's agenda; the full set is sometimes taught as ICE-E or as the illness framework opposite the disease framework.",
        "ICE must be **asked with genuine curiosity, not recited**; a mechanical 'and what are your ideas, concerns and expectations?' loses marks in an OSCE and rapport in the clinic.",
        "**BATHE (Stuart and Lieberman, The Fifteen Minute Hour)** is a one-minute psychosocial screen: **Background** - 'what is going on in your life?'; **Affect** - 'how do you feel about that?'; **Trouble** - 'what about it troubles you most?'; **Handling** - 'how are you handling it?'; **Empathy** - 'that must be very difficult for you'.",
        "BATHE is therapeutic as well as diagnostic, is well suited to a short Indian consultation, and is the standard answer when asked how to address psychosocial issues without a separate counselling session.",
        "**Motivational interviewing (Miller and Rollnick)** for behaviour change: express empathy, develop discrepancy, roll with resistance and support self-efficacy, using OARS - open questions, affirmation, reflective listening, summarising.",
      ],
    },
    {
      heading: "Difficult communication tasks",
      points: [
        "**Breaking bad news - SPIKES:** **S**etting up (privacy, sitting, family present, no interruptions), **P**erception ('what have you been told so far?'), **I**nvitation ('how much would you like to know?'), **K**nowledge (a warning shot, then small chunks, no jargon), **E**motions addressed with empathic responses, **S**trategy and summary with a clear next step.",
        "In India the family often asks the doctor to **withhold a diagnosis from the patient**; the ethical route is to explore why, to establish what the patient wants to know, and to respect a patient who chooses not to know - never to lie to a patient who asks a direct question.",
        "**The angry patient:** allow ventilation, do not interrupt, sit down, acknowledge the emotion by name, separate the grievance from the person, apologise for the experience without admitting negligence, and offer a concrete next step; move to a safe space and do not consult alone if there is any threat.",
        "**The silent or somatising patient:** use silence, reflection and the BATHE frame; explain symptoms with a mechanism rather than a denial ('this is real pain caused by muscle tension' rather than 'there is nothing wrong').",
        "**Cross-cultural and language barriers:** use a trained interpreter rather than a child; speak to the patient, not the interpreter; check understanding by teach-back.",
        "**Safety netting is the medico-legal core of a family practice consultation:** state what you expect to happen, what would be unexpected, exactly what to look for, where to go and by when - and record it.",
      ],
    },
  ],
  tables: [
    {
      heading: "Consultation models at a glance",
      columns: ["Model", "Author and year", "Structure", "Best used for"],
      rows: [
        ["Six phases", "Byrne and Long, 1976", "Relating, reason, examination, consideration, treatment, termination", "Describing what actually happens"],
        ["Seven tasks", "Pendleton, 1984", "Reason with ICE, other problems, shared action, shared understanding, involvement, time, relationship", "Setting consultation goals"],
        ["Four areas", "Stott and Davis, 1979", "Presenting problem, help-seeking behaviour, continuing problems, health promotion", "Opportunistic prevention"],
        ["Five checkpoints", "Neighbour, 1987", "Connecting, summarising, handing over, safety netting, housekeeping", "Flow and doctor self-care"],
        ["Calgary-Cambridge", "Kurtz and Silverman, 1996", "Five stages plus structure and relationship throughout", "Teaching and OSCE assessment"],
        ["BATHE", "Stuart and Lieberman, 1986", "Background, affect, trouble, handling, empathy", "One-minute psychosocial screen"],
        ["SPIKES", "Baile, 2000", "Setting, perception, invitation, knowledge, emotion, strategy", "Breaking bad news"],
      ],
    },
    {
      heading: "Disease framework versus illness framework",
      columns: ["Element", "Disease (doctor's agenda)", "Illness (patient's agenda)"],
      rows: [
        ["Data sought", "Symptoms, signs, investigations", "Ideas, concerns, expectations, feelings, effects"],
        ["Question style", "Closed, systematic, screening", "Open, exploratory, reflective"],
        ["Output", "Differential diagnosis", "Understanding of what this illness means to this person"],
        ["Failure mode", "Missed psychosocial cause, unexplained non-adherence", "Missed serious pathology"],
        ["Integration", "Both are needed; the integration is what is called patient-centred medicine", "Both are needed; the integration is what is called patient-centred medicine"],
      ],
    },
    {
      heading: "Balint concepts",
      columns: ["Term", "Meaning"],
      rows: [
        ["Doctor as drug", "The doctor's own personality has a pharmacology - dosage, indications and side effects"],
        ["The flash", "A sudden mutual insight into what the consultation is really about"],
        ["Apostolic function", "The doctor's tendency to convert patients to his or her own beliefs about illness and behaviour"],
        ["Collusion of anonymity", "Responsibility diffused among several doctors so that no one owns the decision"],
        ["Entry ticket", "The presenting complaint offered to gain access, while the real problem is disclosed later or not at all"],
        ["Balint group", "A regular case-discussion group focused on the doctor-patient relationship rather than on the diagnosis"],
      ],
    },
  ],
  redFlags: [
    "A child brought repeatedly with injuries, an explanation that does not fit the injury, or a delayed presentation - stop the routine consultation, involve the paediatrician and child welfare committee, and report under POCSO or the Juvenile Justice Act; do not confront the caregiver alone.",
    "Disclosure of sexual assault during a consultation - do not take a lone history and send the patient away; medico-legal examination, the standard kit, informed consent and mandatory police intimation under Section 357C CrPC (Section 397 BNSS) apply.",
    "A patient who expresses suicidal intent, a plan or hopelessness - never close the consultation with a follow-up appointment alone; arrange same-day mental health assessment and involve a responsible adult with the patient's knowledge.",
    "A consultation in which the patient cannot understand or retain the information needed to decide - assess capacity formally, involve the nominated representative under the Mental Healthcare Act 2017, and record who consented and why.",
    "A family demanding that the diagnosis be withheld from a competent adult patient who is asking direct questions - this cannot be resolved by quietly agreeing; explore, negotiate, and never lie to the patient.",
    "Threatened or actual violence in the consulting room - leave, summon help, do not consult alone with the patient again, and record the incident; personal safety overrides consultation technique.",
    "Any consultation where a notifiable disease is suspected - the communication task includes explaining notification, which is a legal duty and not a breach of confidentiality.",
  ],
  pearls: [
    "Pendleton's task one is the whole of patient-centredness in one line: define the reason for attendance including the patient's ideas, concerns and expectations and the effects of the problem.",
    "Draw Calgary-Cambridge as five boxes with two vertical bars - providing structure and building the relationship run through the entire consultation.",
    "The golden minute costs nothing and saves time; the average patient interrupted at 11-18 seconds would have finished in under 90.",
    "Neighbour's housekeeping is the only model item that looks after the doctor - name it when asked about burnout as well as about consultation models.",
    "BATHE takes about one minute and is the right answer for psychosocial screening in a two-minute Indian consultation.",
    "Safety netting is what converts diagnostic uncertainty into safe practice: what to expect, what would be abnormal, what to do, where to go, by when.",
    "Balint's collusion of anonymity is the mechanism by which a patient with many specialists ends up with no doctor - and the argument for continuity.",
    "In breaking bad news, fire a warning shot before the news itself and stop after each chunk; silence after bad news is a therapeutic act, not a failure.",
  ],
  theory: [
    {
      id: "fm-principles-consultation-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Describe the models of consultation used in family practice. Discuss the Calgary-Cambridge guide in detail and outline how you would apply it to a 35-year-old woman attending with tiredness for three months.",
      openingLines: [
        "The consultation is the central and commonest clinical act of family medicine, and consultation models are structured descriptions of what happens in it, used to teach, to assess and to improve it.",
        "The Calgary-Cambridge guide of Kurtz and Silverman is the framework most used for teaching and assessment because it names about 70 discrete, evidence-based skills within five sequential tasks and two continuous ones.",
      ],
      answer: [
        {
          heading: "1. Classification of consultation models",
          points: [
            "Descriptive models of what happens: Byrne and Long six phases (1976), with doctor-centred and patient-centred styles.",
            "Task-based or goal-based models: Pendleton's seven tasks (1984), Stott and Davis four areas (1979).",
            "Skill-based teaching models: Calgary-Cambridge (1996), the three-function model.",
            "Psychodynamic and relationship models: Balint (1957), transactional analysis, Neighbour's inner consultation (1987).",
            "Anthropological and patient-perspective models: Helman's folk model (1981), the patient-centred clinical method of Stewart and Levenstein.",
            "Focused techniques: BATHE for psychosocial screening, SPIKES for bad news, motivational interviewing for behaviour change.",
          ],
        },
        {
          heading: "2. The Calgary-Cambridge guide",
          points: [
            "Initiating the session: preparation, establishing initial rapport, identifying the reasons for the consultation with an open question, screening for further problems and setting the agenda.",
            "Gathering information: exploring the problem with the open-to-closed cone, attentive listening, facilitation, picking up cues, clarification, internal summary and signposting; exploring both the disease framework and the illness framework - ideas, concerns, expectations, feelings and effects.",
            "Physical examination: explaining and obtaining permission, chaperone where indicated.",
            "Explanation and planning: giving the right amount and type of information by chunking and checking, aiding accurate recall by categorisation and repetition, achieving a shared understanding by relating explanations to the patient's illness framework, and shared decision making.",
            "Closing the session: summarising, contracting the next steps, safety netting and a final check.",
            "Throughout: providing structure (summarising, signposting, sequencing, timing) and building the relationship (non-verbal behaviour, acceptance, empathy, support, sensitivity, involving the patient by sharing thinking).",
          ],
        },
        {
          heading: "3. Application to three months of tiredness",
          points: [
            "Initiating: greet by name, sit at the same level, open with 'tell me about the tiredness' and let her speak uninterrupted; screen for other agenda items before diving in.",
            "Gathering, disease framework: onset, pattern through the day, sleep, weight, menstrual and dietary history, bleeding per rectum or menorrhagia, symptoms of hypothyroidism, diabetes, tuberculosis and depression; drug and family history.",
            "Gathering, illness framework: 'What do you think is causing it?' (she may fear cancer or blood loss), 'Is there anything you are particularly worried about?', 'What were you hoping we might do?', and the effect on her work and on caring for the family; screen with BATHE if the story is flat.",
            "Examination: pallor, pulse, BP, thyroid, lymph nodes, abdomen, and a mental state screen (PHQ-9).",
            "Explanation and planning: explain in chunks that the commonest causes here are anaemia, thyroid disease, diabetes, sleep deprivation and depression; agree a first-line panel of haemoglobin, peripheral smear, blood sugar, TSH and urine routine; check understanding by teach-back.",
            "Closing: summarise, agree who will bring the reports and when, safety net for bleeding, breathlessness, fever or weight loss, and record the plan in SOAP format.",
          ],
        },
        {
          heading: "4. Why models matter",
          points: [
            "They convert an intuitive act into a teachable, assessable skill and give a structure to fall back on when the consultation drifts.",
            "They improve diagnostic accuracy, adherence, satisfaction and safety, and reduce complaints, most of which arise from communication rather than competence.",
            "No model is used verbatim in a two-minute consultation; the skilled family physician internalises one and uses it as a checklist when the consultation goes wrong.",
          ],
        },
      ],
      mustDraw: [
        "The Calgary-Cambridge diagram: five vertical boxes (initiating, gathering, examination, explanation and planning, closing) with two side bars labelled providing structure and building the relationship.",
        "A table comparing at least four consultation models with author, year and structure.",
      ],
      markSplit: [
        { part: "Classification and naming of models with authors and years", marks: 3 },
        { part: "Calgary-Cambridge described in full with the diagram", marks: 4 },
        { part: "Application to the case", marks: 2 },
        { part: "Value of models and conclusion", marks: 1 },
      ],
      keywords: ["Calgary-Cambridge", "Pendleton seven tasks", "ICE", "open-to-closed cone", "safety netting"],
    },
    {
      id: "fm-principles-consultation-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the BATHE technique and its use in family practice.",
      openingLines: [
        "BATHE is a brief, structured psychosocial screening and counselling technique described by Stuart and Lieberman in The Fifteen Minute Hour, designed to be completed in about one minute within an ordinary consultation.",
        "It allows a family physician to address the psychological and social context of a physical complaint without setting up a separate counselling appointment, which suits the short consultation typical of Indian practice.",
      ],
      answer: [
        {
          heading: "The five steps",
          points: [
            "Background: 'What is going on in your life?' - opens the context and often produces the real reason for attendance.",
            "Affect: 'How do you feel about that?' - names the emotion, which is itself therapeutic.",
            "Trouble: 'What about it troubles you most?' - identifies the specific concern, which is rarely what the doctor assumed.",
            "Handling: 'How are you handling it?' - assesses coping and resources rather than only pathology.",
            "Empathy: 'That must be very difficult for you' - legitimises the distress and completes the intervention.",
          ],
        },
        {
          heading: "Uses and evidence",
          points: [
            "Screening for depression, anxiety, somatisation, domestic stress, alcohol-related problems and caregiver strain.",
            "Managing the frequently attending patient with medically unexplained symptoms, where investigation has been repeatedly negative.",
            "Supportive counselling in chronic disease, palliative care and bereavement.",
            "Reported benefits: better detection of psychosocial problems, improved satisfaction, no significant lengthening of the consultation.",
          ],
        },
        {
          heading: "Limitations and cautions",
          points: [
            "It is a screen, not a treatment; a positive screen needs a fuller assessment with PHQ-9 or GAD-7 and a management plan.",
            "It must not be used to close down a physical complaint that has not been properly evaluated.",
            "Disclosure of abuse, violence or suicidal ideation during BATHE converts the consultation into an urgent safeguarding task that cannot be deferred.",
          ],
        },
      ],
      mustDraw: ["A five-row table with the letter, the question and the purpose of each BATHE step."],
      markSplit: [
        { part: "The five steps with the actual questions", marks: 2.5 },
        { part: "Indications and evidence", marks: 1.5 },
        { part: "Limitations", marks: 1 },
      ],
      keywords: ["BATHE", "Fifteen Minute Hour", "psychosocial screening", "medically unexplained symptoms"],
    },
    {
      id: "fm-principles-consultation-t3",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "How would you break bad news to a 55-year-old man newly diagnosed with metastatic carcinoma, whose family has asked you not to tell him? Discuss the ethical and practical issues.",
      openingLines: [
        "Breaking bad news is a structured clinical skill, best delivered using the SPIKES protocol, and the aim is to transfer information at the pace the patient wants while supporting the emotion it generates.",
        "A family request for non-disclosure is common in India and reflects protective intent, but a competent adult has the right to know his own diagnosis if he wishes to; the resolution lies in negotiation, not in unilateral action either way.",
      ],
      answer: [
        {
          heading: "SPIKES applied",
          points: [
            "Setting: a private room, sitting down, adequate time, mobile phone silenced, the person the patient wants present, and an available nurse or counsellor.",
            "Perception: 'What have you been told about your illness so far, and what do you make of it?'",
            "Invitation: 'Some people want every detail, others prefer the broad picture and want the details discussed with the family - which would you prefer?' This question resolves most family conflicts because it lets the patient set the rule.",
            "Knowledge: a warning shot ('I am afraid the report is more serious than we hoped'), then short chunks in plain language, pausing after each.",
            "Emotions: allow silence, name the emotion, use an empathic statement, offer tissues and touch if culturally appropriate.",
            "Strategy and summary: the treatment plan, who will do what, the symptom control that will be provided, the next appointment, and written information.",
          ],
        },
        {
          heading: "The family's request for non-disclosure",
          points: [
            "Meet the family first, acknowledge their motive, and ask what specifically they fear will happen if he is told.",
            "Explain that you will not force information on him, but that you cannot lie if he asks a direct question, and that most patients already suspect.",
            "Use the invitation step to let the patient choose; document his stated preference, which protects everyone later.",
            "Involve the family in the plan whatever he chooses, since they will deliver most of the care.",
          ],
        },
        {
          heading: "Ethical framework",
          points: [
            "Autonomy: the competent adult owns the information about his own body; the family does not own it.",
            "Beneficence and non-maleficence: information given at the wrong pace can harm, which is why invitation precedes knowledge.",
            "Confidentiality: information may not be shared with relatives without the patient's consent, however customary the practice.",
            "Therapeutic privilege - withholding information because it might harm - is very narrow and cannot be used simply because the news is bad.",
          ],
        },
      ],
      mustDraw: ["The SPIKES acronym expanded as a six-step table with an example sentence for each step."],
      markSplit: [
        { part: "SPIKES steps applied to the case", marks: 2.5 },
        { part: "Handling the family's request", marks: 1.5 },
        { part: "Ethical principles named", marks: 1 },
      ],
      keywords: ["SPIKES", "collusion", "autonomy", "therapeutic privilege", "warning shot"],
    },
  ],
  mcqs: [
    {
      id: "fm-principles-consultation-q1",
      stem: "Which consultation model describes the tasks as connecting, summarising, handing over, safety netting and housekeeping?",
      options: [
        "Pendleton's seven tasks",
        "Neighbour's inner consultation",
        "Byrne and Long's six phases",
        "The Calgary-Cambridge guide",
        "Stott and Davis's four areas",
      ],
      answer: 1,
      explanation:
        "Roger Neighbour described these five checkpoints in The Inner Consultation (1987), and housekeeping - the doctor clearing his or her own emotional state before the next patient - is unique to this model. Pendleton lists seven tasks ending with the relationship, Byrne and Long describe six observed phases, and Calgary-Cambridge names five sequential stages with structure and relationship as continuous threads. Stott and Davis describe four potential areas of every consultation, not a sequence.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-consultation-q2",
      stem: "In the Calgary-Cambridge guide, which two elements run continuously throughout the consultation rather than occupying a fixed stage?",
      options: [
        "Safety netting and summarising",
        "Providing structure and building the relationship",
        "History taking and examination",
        "Shared decision making and prescribing",
        "Screening and agenda setting",
      ],
      answer: 1,
      explanation:
        "Kurtz and Silverman deliberately drew providing structure and building the relationship as vertical bars beside the five sequential stages, because both must be sustained from the greeting to the goodbye. Safety netting and summarising are specific skills within closing and structuring rather than continuous tasks. Screening and agenda setting belong to initiating the session, and shared decision making to explanation and planning.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-consultation-q3",
      stem: "A 29-year-old woman consults for headache. At the end of an eight-minute consultation, with her hand on the door, she says 'By the way, doctor, my husband hits me sometimes.' Which Balint concept best describes the headache in this consultation?",
      options: [
        "Apostolic function",
        "Collusion of anonymity",
        "The entry ticket",
        "The flash",
        "Doctor as drug",
      ],
      answer: 2,
      explanation:
        "The entry ticket is Balint's term for a socially acceptable complaint offered to gain access to the doctor, with the real problem disclosed only when trust has been established - classically at the door. The flash would be the moment of shared insight, not the ticket itself. Collusion of anonymity describes diffusion of responsibility among several doctors, the apostolic function is the doctor's urge to impose his own beliefs, and doctor as drug refers to the therapeutic effect of the doctor's own person.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-consultation-q4",
      stem: "Which sequence correctly expands the BATHE technique?",
      options: [
        "Background, Affect, Trouble, Handling, Empathy",
        "Beliefs, Attitude, Thoughts, Help, Explanation",
        "Background, Anxiety, Treatment, Health, Education",
        "Behaviour, Affect, Thinking, Habits, Environment",
        "Beliefs, Affect, Trouble, Handling, Expectations",
      ],
      answer: 0,
      explanation:
        "BATHE is Background, Affect, Trouble, Handling and Empathy, in that order, and the order matters because empathy closes the sequence and legitimises the distress. The other expansions are constructed from plausible consultation vocabulary but none is the Stuart and Lieberman technique; in particular 'Trouble' asks what troubles the patient most and is not a treatment step.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-consultation-q5",
      stem: "In the SPIKES protocol for breaking bad news, what does the 'I' stand for?",
      options: [
        "Information gathering",
        "Invitation - finding out how much the patient wants to know",
        "Investigation results",
        "Involving the family",
        "Interpretation of the patient's emotion",
      ],
      answer: 1,
      explanation:
        "The 'I' is Invitation: obtaining the patient's permission and preference for how much detail to receive, which is the step that protects autonomy while allowing a patient who does not want details to say so. Perception, the preceding step, is the information-gathering one ('what have you been told so far?'). Emotions is the 'E', and family involvement, while important, is part of Setting and Strategy rather than a separate letter.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-consultation-q6",
      stem: "Research on the opening of the consultation has shown that doctors interrupt the patient's initial statement after a median of approximately:",
      options: ["3 seconds", "11 to 18 seconds", "45 seconds", "90 seconds", "3 minutes"],
      answer: 1,
      explanation:
        "Beckman and Frankel found a mean of about 18 seconds in 1984 and Singh Ospina and colleagues found a median of 11 seconds in 2019, so 11 to 18 seconds is the examinable range. Ninety seconds is roughly how long an uninterrupted patient actually takes to complete the opening statement, which is why the interruption saves no time. Three seconds and three minutes are outside anything reported.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-consultation-q7",
      stem: "Which of the following is one of Pendleton's seven tasks of the consultation?",
      options: [
        "To reach a definitive pathological diagnosis at the first visit",
        "To achieve a shared understanding of the problem with the patient",
        "To limit the consultation to a single presenting complaint",
        "To document the consultation in SOAP format",
        "To obtain informed consent for every examination",
      ],
      answer: 1,
      explanation:
        "Achieving a shared understanding is Pendleton's fourth task, and the model is built around sharing - shared understanding, choosing action with the patient and involving the patient in management. A definitive diagnosis at the first visit contradicts the family medicine method of using time, and Pendleton's second task explicitly requires considering other problems rather than limiting the consultation to one. SOAP documentation and consent are good practice but belong to record keeping and ethics, not to this model.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-consultation-q8",
      stem: "Stott and Davis (1979) described four potential areas to be explored in every primary care consultation. Which of the following is one of them?",
      options: [
        "Modification of help-seeking behaviour",
        "Housekeeping",
        "Safety netting",
        "Establishing the doctor-patient relationship",
        "Handing over",
      ],
      answer: 0,
      explanation:
        "Stott and Davis named management of the presenting problem, modification of help-seeking behaviour, management of continuing problems and opportunistic health promotion. Housekeeping, safety netting and handing over are Neighbour's checkpoints, and establishing the relationship is Pendleton's seventh task, so all four distractors come from other models that examiners commonly mix in.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "fm-principles-consultation-c1",
      front: "Pendleton's task one.",
      back: "Define the reason for the patient's attendance, including the nature and history of the problem, its aetiology, the patient's ideas, concerns and expectations, and the effects of the problem.",
    },
    {
      id: "fm-principles-consultation-c2",
      front: "The five sequential stages of Calgary-Cambridge.",
      back: "Initiating the session, gathering information, physical examination, explanation and planning, closing the session.",
    },
    {
      id: "fm-principles-consultation-c3",
      front: "The two continuous threads of Calgary-Cambridge.",
      back: "Providing structure and building the relationship - drawn as vertical bars beside the five stages.",
    },
    {
      id: "fm-principles-consultation-c4",
      front: "Neighbour's five checkpoints.",
      back: "Connecting, summarising, handing over, safety netting, housekeeping.",
    },
    {
      id: "fm-principles-consultation-c5",
      front: "Byrne and Long's six phases (1976).",
      back: "Relating to the patient, discovering the reason for attendance, verbal or physical examination, consideration of the condition, detailing treatment, terminating.",
    },
    {
      id: "fm-principles-consultation-c6",
      front: "Stott and Davis's four areas (1979).",
      back: "Management of the presenting problem, modification of help-seeking behaviour, management of continuing problems, opportunistic health promotion.",
    },
    {
      id: "fm-principles-consultation-c7",
      front: "Expand BATHE.",
      back: "Background, Affect, Trouble, Handling, Empathy - a one-minute psychosocial screen from The Fifteen Minute Hour.",
    },
    {
      id: "fm-principles-consultation-c8",
      front: "Expand SPIKES.",
      back: "Setting, Perception, Invitation, Knowledge, Emotions with empathic response, Strategy and summary.",
    },
    {
      id: "fm-principles-consultation-c9",
      front: "The three ICE questions in plain words.",
      back: "What do you think is causing it? Is there anything you are particularly worried about? What were you hoping we could do today?",
    },
    {
      id: "fm-principles-consultation-c10",
      front: "Balint: collusion of anonymity.",
      back: "Responsibility for a patient diffused among several doctors so that no single doctor owns the decision - the argument for continuity of care.",
    },
    {
      id: "fm-principles-consultation-c11",
      front: "Helman's six folk-model questions.",
      back: "What has happened? Why has it happened? Why to me? Why now? What would happen if nothing were done? What should I do about it or whom should I consult?",
    },
    {
      id: "fm-principles-consultation-c12",
      front: "The five elements of good safety netting.",
      back: "What you expect to happen, what would be abnormal, exactly what to watch for, where to go, and by when - all recorded in the notes.",
    },
  ],
  references: [
    "Silverman J, Kurtz S, Draper J. Skills for Communicating with Patients, 3rd edition, CRC Press, 2013",
    "Pendleton D, Schofield T, Tate P, Havelock P. The New Consultation, Oxford University Press, 2003",
    "Neighbour R. The Inner Consultation, 2nd edition, Radcliffe, 2004",
    "Balint M. The Doctor, His Patient and the Illness, 2nd edition, Churchill Livingstone, 1964",
    "Stuart MR, Lieberman JA. The Fifteen Minute Hour, 6th edition, CRC Press, 2019",
    "Baile WF et al. SPIKES - a six-step protocol for delivering bad news. The Oncologist, 2000",
  ],
});
