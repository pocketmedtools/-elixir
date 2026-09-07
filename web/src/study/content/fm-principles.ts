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

topics.push({
  id: "fm-principles-continuity",
  title: "Continuity, comprehensiveness, coordination and first contact care",
  oneLiner:
    "The four defining functions of primary care are first contact accessibility, continuity of the doctor-patient relationship over time, comprehensiveness of the services offered, and coordination of everything done elsewhere, and together they explain why strong primary care produces better outcomes at lower cost.",
  frequency: "core",
  keywords: [
    "four Cs",
    "longitudinality",
    "informational continuity",
    "relational continuity",
    "management continuity",
    "first contact care",
    "comprehensiveness",
    "coordination",
    "Ayushman Bharat",
    "Health and Wellness Centre",
    "care coordination",
    "gatekeeper",
    "multimorbidity",
    "person-centred care",
    "accessibility",
    "practice population",
  ],
  sections: [
    {
      heading: "First contact care and accessibility",
      points: [
        "**First contact care** means the patient can approach the family physician for any new problem without a prior appointment, referral or filter - it is the entry point of the system and the point at which the undifferentiated symptom is first sorted.",
        "Accessibility has **five recognised dimensions (Penchansky and Thomas): availability, accessibility (geographic), affordability, accommodation (hours and appointment system) and acceptability** (gender, language, caste, stigma).",
        "In India first contact is often with a **chemist, an informal provider or an AYUSH practitioner**; the family physician therefore competes on availability, cost and trust rather than on knowledge alone.",
        "First contact carries a distinct clinical task: **triage and risk stratification of an unsorted problem** with low prior probability, using history and time rather than technology.",
        "Systems that require the family physician as first contact (**gatekeeping**) show fewer specialist visits, fewer investigations and lower cost without worse outcomes, provided access is genuinely open.",
        "Practical measures that improve first contact in Indian practice: **extended evening hours, a telephone or teleconsultation line, a same-day sick slot, a female attendant for female patients, and no-appointment walk-in access for acute illness**.",
      ],
    },
    {
      heading: "Continuity (longitudinality)",
      points: [
        "**Three types: informational continuity** (the record travels with the patient), **management continuity** (a consistent, agreed plan across providers) and **relational continuity** (an ongoing personal relationship with one clinician).",
        "Relational continuity is the type unique to family medicine, and the one with the strongest evidence: **greater continuity is associated with lower mortality, fewer emergency attendances, fewer admissions, better adherence and lower cost** (Pereira Gray et al, BMJ Open 2018 systematic review).",
        "Continuity converts a series of episodes into a **narrative**: the doctor who saw the first presentation is best placed to recognise the change that matters, which is why continuity is itself a diagnostic tool.",
        "It also permits the **legitimate use of time as a test** - reviewing in 48 hours is only safe when someone will actually see the patient again and remember the baseline.",
        "Threats to continuity: rotating junior staff, multiple part-time doctors, migration, corporate walk-in models, and **collusion of anonymity** where many specialists mean no one owns the decision.",
        "Continuity is not the same as **rigidity**: a personal list must be balanced against timely access, and the answer to 'access versus continuity' is a personal list for chronic and complex care with open access for acute problems.",
      ],
    },
    {
      heading: "Comprehensiveness",
      points: [
        "**Comprehensiveness** means the range of services offered is wide enough to meet all common needs of the practice population, referring out only what genuinely cannot be done in primary care.",
        "It spans the **whole life cycle** (antenatal to palliative), the **whole family**, **all organ systems**, and all four levels of care - **promotive, preventive, curative and rehabilitative**, with palliative care as the fifth.",
        "In one Indian family practice session this may mean immunising an infant, titrating insulin, doing a Pap smear, incising an abscess, counselling an adolescent, and reviewing a patient on morphine at home.",
        "The **Ayushman Bharat / Ayushman Arogya Mandir package of 12 services** is the operational definition of comprehensiveness in the public system: care in pregnancy and childbirth, neonatal and infant care, childhood and adolescent care, family planning and reproductive health, communicable diseases, non-communicable diseases including screening for hypertension, diabetes and oral, breast and cervical cancers, ophthalmic and ENT care, oral health, elderly and palliative care, emergency and trauma, mental health, and screening for common cancers.",
        "Comprehensiveness fails when a practice **narrows itself** - antenatal-only, diabetes-only - and it is defended by maintaining skills, equipment and a formulary that match the practice population's needs.",
        "**Multimorbidity** is the clinical expression of comprehensiveness: the average Indian patient over 60 has two or more chronic conditions, and single-disease guidelines applied additively produce polypharmacy and treatment burden.",
      ],
    },
    {
      heading: "Coordination",
      points: [
        "**Coordination** is the function of pulling together everything done elsewhere - the specialist opinion, the hospital discharge, the laboratory result, the physiotherapist and the AYUSH practitioner - into one coherent plan that one doctor owns.",
        "The instruments of coordination are the **problem list, a single consolidated record, a reconciled medication list, the referral letter and the back-referral or reply letter**.",
        "**Transitions of care are the danger points**: hospital discharge, transfer between specialists, and change of doctor. Medication reconciliation at discharge is the single highest-yield coordination activity.",
        "**Care coordination for multimorbidity** means prioritising problems with the patient, agreeing what will not be treated, deprescribing, and setting one review interval instead of five.",
        "Coordination failures show as **duplicate investigation, contradictory advice, drug interactions, and the patient who has five specialists and no doctor**.",
        "In Indian practice the family physician also coordinates with **non-medical systems**: the ASHA, the anganwadi, the school, the employer, the insurance scheme (PM-JAY) and the NGO or palliative care network.",
      ],
    },
    {
      heading: "Evidence and outcomes",
      points: [
        "**Starfield's international comparisons** showed that countries with stronger primary care have lower total costs, better population health indicators and smaller inequities.",
        "A greater supply of primary care physicians (not specialists) is associated with **lower all-cause, cancer, cardiovascular and infant mortality**.",
        "**Continuity with the same doctor** is associated with about a fifth lower mortality in the best studies, and with reduced use of emergency services, and the effect increases with the duration of the relationship.",
        "**Comprehensiveness** in a US cohort was associated with lower Medicare spending and fewer hospitalisations - the wider the scope of the family physician's practice, the lower the cost of care.",
        "The **Triple Aim (IHI)** - better population health, better patient experience, lower per capita cost - is achieved chiefly through primary care; the **Quadruple Aim** adds clinician wellbeing.",
        "These findings are the evidence base for **National Health Policy 2017** and comprehensive primary health care through Health and Wellness Centres in India.",
      ],
    },
    {
      heading: "Making the four Cs work in a real practice",
      points: [
        "**Register the population:** an enumerated panel with a family folder number converts anonymous attenders into a denominator and makes recall possible.",
        "**One record per family, one problem list per person**, with an updated drug list on the first page - the practical basis of informational continuity.",
        "**A named doctor** for every chronic disease patient, with a booked review slot, plus open access for acute illness - the compromise between continuity and access.",
        "**A recall register** (defaulters for antenatal visits, immunisation, diabetes review, tuberculosis treatment) is the operational form of the practice as a population at risk.",
        "**A structured referral letter and an expectation of a reply**, with the reply filed and acted on, closes the coordination loop.",
        "**Audit one C each year** - for example, the proportion of diabetics seen by their named doctor, or the proportion of discharges with medication reconciled within a week.",
      ],
    },
  ],
  tables: [
    {
      heading: "The four Cs: definition, measure and failure mode",
      columns: ["Attribute", "Definition", "How it is measured", "What failure looks like"],
      rows: [
        ["First contact", "Accessible entry point for any new problem", "Proportion of new problems first brought to the practice; waiting time", "Patient goes straight to a specialist or a chemist"],
        ["Continuity", "An ongoing personal relationship over time", "Usual provider of care index; proportion of visits with the named doctor", "A different doctor each visit; no one knows the baseline"],
        ["Comprehensiveness", "Range of services wide enough for all common needs", "Number of service categories offered; referral rate", "Narrow, single-disease practice; everything referred out"],
        ["Coordination", "Integration of care given elsewhere", "Proportion of referrals with a reply filed and acted on", "Duplicated tests, contradictory drugs, no owner of the plan"],
      ],
    },
    {
      heading: "Types of continuity",
      columns: ["Type", "What travels", "Practical tool"],
      rows: [
        ["Informational", "The data - history, drugs, results", "A single cumulative record, problem list, shared EMR"],
        ["Management", "The plan - consistent and agreed", "Shared protocols, care plan, discharge summary, back-referral letter"],
        ["Relational", "The relationship - the person who knows the patient", "A named doctor, a personal list, a family folder"],
      ],
    },
    {
      heading: "Twelve service packages of an Ayushman Arogya Mandir (Health and Wellness Centre)",
      columns: ["Package", "Example activity in the centre"],
      rows: [
        ["Pregnancy and childbirth care", "Antenatal registration, four or more visits, IFA, TT/Td, birth planning"],
        ["Neonatal and infant health", "Home-based newborn care visits, weighing, danger sign recognition"],
        ["Childhood and adolescent health", "Immunisation, growth monitoring, RBSK screening, anaemia (Anemia Mukt Bharat)"],
        ["Family planning and reproductive health", "Contraceptive supply, counselling, RTI/STI care"],
        ["Communicable disease management", "Tuberculosis case finding and Nikshay, malaria, dengue, leprosy"],
        ["Non-communicable disease screening and care", "Population enumeration and CBAC, BP and blood sugar, drug refills"],
        ["Common ophthalmic and ENT problems", "Vision screening, cataract referral, ear discharge"],
        ["Oral health", "Screening for oral cancer and dental caries referral"],
        ["Elderly and palliative care", "Home visits, functional assessment, morphine linkage"],
        ["Emergency medical services and trauma", "First aid, stabilisation and 108 referral"],
        ["Mental health", "Screening, follow-up and drug continuation under the District Mental Health Programme"],
        ["Screening for common cancers", "Oral, breast and cervical cancer screening from 30 years"],
      ],
    },
  ],
  redFlags: [
    "A patient discharged from hospital on drugs that duplicate or dangerously interact with the existing prescription - reconcile the medication list the same day rather than at the next routine visit; this is the commonest avoidable harm at a transition of care.",
    "A child on the practice register who has missed immunisation or antenatal defaulters lost to follow-up - defaulter tracing is a legal and programme obligation under UIP and RMNCH+A, not an optional courtesy.",
    "A tuberculosis patient interrupting treatment - notify and trace through Nikshay; loss to follow-up is a public health emergency, not a personal choice to be respected in silence.",
    "An elderly patient brought by a neighbour with untreated wounds, dehydration or unexplained financial loss - suspect elder abuse or neglect and involve the district social welfare officer under the Maintenance and Welfare of Parents and Senior Citizens Act 2007.",
    "A patient with reduced capacity being asked by relatives to sign property or consent documents in the clinic - refuse to witness, document your capacity assessment, and refer for a formal opinion.",
    "Repeated attendance by a woman with vague symptoms and a controlling accompanying relative who answers for her - see the patient alone before drawing any conclusion, and consider intimate partner violence.",
  ],
  pearls: [
    "Name the four Cs in Starfield's own order - first contact, longitudinality, comprehensiveness, coordination - and add family orientation, community orientation and cultural competence as derived attributes.",
    "Continuity has three types; the examiner wants informational, management and relational, and wants relational named as the one unique to family medicine.",
    "The mortality benefit of continuity of care with the same doctor is a real, quotable finding (Pereira Gray, BMJ Open 2018) - use it whenever asked to justify family medicine.",
    "Comprehensiveness is measured by what you do not refer; a very high referral rate is a comprehensiveness failure, and a very low one is a safety failure.",
    "Medication reconciliation after discharge is the highest-yield coordination task in ordinary practice.",
    "The 12 service packages of an Ayushman Arogya Mandir are the government's operational definition of comprehensive primary health care - learn the list.",
    "Access and continuity compete; the workable answer is a named doctor for chronic care with open access for acute illness.",
    "A patient with five specialists and no family physician is the clinical picture of a coordination failure - Balint called the mechanism collusion of anonymity.",
  ],
  theory: [
    {
      id: "fm-principles-continuity-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Discuss continuity of care in family practice. What are its types, what evidence supports it, what threatens it, and how would you organise a practice to deliver it?",
      openingLines: [
        "Continuity of care, or longitudinality, is one of Barbara Starfield's four defining attributes of primary care, and means an ongoing relationship between a patient and an identified clinician across episodes of illness and over years, independent of the presence of disease.",
        "It is the attribute most specific to family medicine, and the one with the most consistent evidence of benefit, including reduced mortality.",
      ],
      answer: [
        {
          heading: "1. Types of continuity",
          points: [
            "Informational continuity: the data - history, problem list, drug list, results - are available to whoever sees the patient; delivered by a cumulative record or a shared electronic record.",
            "Management continuity: a consistent and coherent plan across providers and over time; delivered by care plans, shared protocols and discharge summaries.",
            "Relational continuity: an ongoing therapeutic relationship with one clinician who knows the patient and the family; unique to family medicine.",
            "Related concepts: chronological continuity (a series of contacts), geographical continuity (across sites of care), and interdisciplinary continuity (across the team).",
          ],
        },
        {
          heading: "2. Benefits and evidence",
          points: [
            "Clinical: better recognition of change from baseline, fewer diagnostic errors, better adherence, better chronic disease control, safer use of time as a diagnostic tool.",
            "Outcome evidence: a systematic review (Pereira Gray et al, BMJ Open 2018) found continuity of care with the same doctor associated with significantly lower mortality across 22 studies in nine countries.",
            "Service use: fewer emergency department attendances, fewer hospital admissions, fewer duplicated investigations, lower cost.",
            "Experience: higher patient and doctor satisfaction, greater trust, more disclosure of sensitive problems, and lower doctor burnout.",
            "Preventive: higher uptake of immunisation, screening and antenatal care because the doctor knows what is due and the patient trusts the advice.",
          ],
        },
        {
          heading: "3. Threats to continuity",
          points: [
            "System: rotating residents, shift work, multiple part-time doctors, corporate walk-in and app-based single-episode consultations.",
            "Patient: urban migration, seasonal work, multiple simultaneous providers, doctor shopping driven by dissatisfaction or by cost.",
            "Professional: fragmentation among specialists producing collusion of anonymity, poor referral letters and absent replies.",
            "Practice: no registration or family folder, so the same patient is a new patient at every visit.",
          ],
        },
        {
          heading: "4. Organising a practice for continuity",
          points: [
            "Register families with a family folder number; keep one record per family and a problem list plus drug list per person.",
            "Operate a personal list: a named doctor for every patient with a chronic disease, and booked review appointments with that doctor.",
            "Protect access at the same time: open or same-day access for acute illness so continuity does not become delay.",
            "Maintain a recall and defaulter register for antenatal care, immunisation, diabetes, hypertension and tuberculosis.",
            "Structure referrals: a standard referral letter, an expectation of a written reply, and a filing and action system for replies.",
            "Handover: a written summary when a doctor leaves, and a covering doctor briefed on complex patients.",
            "Audit continuity annually - for example the proportion of diabetic reviews conducted by the named doctor - and feed the result back.",
          ],
        },
      ],
      mustDraw: [
        "A table of the three types of continuity with the tool that delivers each.",
        "A table of the four Cs with definition, measurement and failure mode.",
      ],
      markSplit: [
        { part: "Definition and types with examples", marks: 3 },
        { part: "Evidence of benefit including mortality data", marks: 3 },
        { part: "Threats", marks: 1 },
        { part: "Practice organisation to deliver continuity", marks: 3 },
      ],
      keywords: ["longitudinality", "relational continuity", "Pereira Gray 2018", "personal list", "collusion of anonymity"],
    },
    {
      id: "fm-principles-continuity-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on comprehensive primary health care as delivered through Health and Wellness Centres (Ayushman Arogya Mandirs) in India.",
      openingLines: [
        "Comprehensive primary health care is the delivery of promotive, preventive, curative, rehabilitative and palliative services for all age groups and all common conditions at the first level of contact, and it replaced the earlier selective, programme-limited approach of Indian primary care.",
        "Ayushman Bharat, launched in 2018, is the vehicle: 1.5 lakh subcentres and primary health centres are being converted into Health and Wellness Centres, now renamed Ayushman Arogya Mandirs, staffed at subcentre level by a mid-level provider - a community health officer with a certificate in community health.",
      ],
      answer: [
        {
          heading: "The expanded service package",
          points: [
            "Twelve packages: pregnancy and childbirth; neonatal and infant health; childhood and adolescent health; family planning and reproductive health; management of communicable diseases; management of common communicable diseases and outpatient care for acute simple illness; non-communicable disease screening, prevention and management; ophthalmic and ENT problems; oral health; elderly and palliative care; emergency and trauma; mental health; and screening for common cancers.",
            "Population enumeration and risk assessment with the Community Based Assessment Checklist (CBAC) for those over 30 years, followed by screening for hypertension, diabetes and oral, breast and cervical cancer.",
            "Free essential drugs and diagnostics, teleconsultation through eSanjeevani, and wellness activities including yoga.",
          ],
        },
        {
          heading: "Team and structure",
          points: [
            "Community health officer (a BSc nursing or ayurveda graduate with a bridge course) leads the subcentre HWC with two ANMs and about five ASHAs.",
            "Primary health centre HWC is led by a medical officer; the district hospital and community health centre provide secondary support.",
            "Continuum of care from the community through the HWC to the referral facility with PM-JAY covering secondary and tertiary hospitalisation costs up to five lakh rupees per family per year.",
          ],
        },
        {
          heading: "Strengths and challenges",
          points: [
            "Strengths: population coverage with a denominator, free drugs, task sharing, and an explicit non-communicable disease screening pathway.",
            "Challenges: human resource gaps, referral linkage and back-referral, drug and diagnostic stock-outs, data burden on the CHO, and quality assurance.",
            "Quality is measured against National Quality Assurance Standards and certified through NQAS, with Kayakalp awards for cleanliness.",
          ],
        },
      ],
      mustDraw: ["A list or table of the 12 service packages of a Health and Wellness Centre."],
      markSplit: [
        { part: "Definition of comprehensive primary health care", marks: 1 },
        { part: "The 12 packages", marks: 2 },
        { part: "Team, structure and continuum of care", marks: 1 },
        { part: "Strengths and challenges", marks: 1 },
      ],
      keywords: ["Ayushman Bharat", "Ayushman Arogya Mandir", "community health officer", "CBAC", "PM-JAY"],
    },
  ],
  mcqs: [
    {
      id: "fm-principles-continuity-q1",
      stem: "A patient's electronic record, including problem list, drug list and previous results, is available to every doctor in a chain of clinics, but she sees a different doctor at every visit. Which type of continuity is preserved and which is lost?",
      options: [
        "Relational preserved, informational lost",
        "Informational preserved, relational lost",
        "Management preserved, informational lost",
        "All three preserved",
        "Informational and relational preserved, management lost",
      ],
      answer: 1,
      explanation:
        "The data travel with the patient, which is informational continuity, but there is no ongoing relationship with an identified clinician, so relational continuity - the type most strongly associated with lower mortality and fewer admissions - is absent. Management continuity may or may not survive depending on whether a shared plan is followed, but it is not the sharpest contrast being tested here, and the claim that all three are preserved ignores the changing doctor.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-continuity-q2",
      stem: "Which attribute of primary care is being measured when an audit counts the proportion of referral letters for which a written reply from the specialist has been received, filed and acted upon?",
      options: ["First contact", "Continuity", "Comprehensiveness", "Coordination", "Community orientation"],
      answer: 3,
      explanation:
        "Closing the referral loop is the defining activity of coordination - integrating care given elsewhere into a single plan owned by the family physician. First contact is about accessible entry for new problems, comprehensiveness about the breadth of services offered, and continuity about the persistence of the relationship or the record over time. Community orientation concerns population needs rather than the individual referral.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-continuity-q3",
      stem: "The 2018 BMJ Open systematic review by Pereira Gray and colleagues on continuity of care found that greater continuity with the same doctor was most consistently associated with:",
      options: [
        "Higher patient satisfaction only",
        "Lower mortality",
        "Shorter consultations",
        "Higher referral rates",
        "Increased prescribing costs",
      ],
      answer: 1,
      explanation:
        "The review of 22 studies from nine countries found that continuity of care with the same doctor was associated with significantly lower mortality in the large majority of studies, which is the single most quotable piece of evidence for family medicine. Satisfaction does improve but is a softer outcome and not the headline finding. Continuity in fact tends to reduce referral rates and costs rather than increase them, and it does not shorten individual consultations.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-continuity-q4",
      stem: "Which of the following is NOT one of the twelve service packages of an Ayushman Arogya Mandir (Health and Wellness Centre)?",
      options: [
        "Elderly and palliative care",
        "Mental health services",
        "Screening for common cancers",
        "Cardiac catheterisation and interventional services",
        "Emergency medical services and trauma care",
      ],
      answer: 3,
      explanation:
        "Interventional cardiology is a tertiary service and forms no part of the comprehensive primary health care package, which is deliberately limited to what can be delivered at the first level of contact. Elderly and palliative care, mental health, cancer screening and emergency and trauma first response are all explicitly named packages in the expanded range of services, and they are the ones candidates most often omit when asked to list them.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-continuity-q5",
      stem: "A 68-year-old woman is discharged after a stroke with eight new medicines. She attends your clinic two days later with her old prescription and the discharge summary. The single most valuable coordination activity at this visit is:",
      options: [
        "Repeating the investigations done in hospital to have your own baseline",
        "Reconciling the two medication lists and producing one agreed list",
        "Referring her to a neurologist for a second opinion",
        "Booking her for a routine review in three months",
        "Registering her for physiotherapy before addressing the drugs",
      ],
      answer: 1,
      explanation:
        "Medication reconciliation at a transition of care prevents duplication, omission and interaction, and is the highest-yield coordination task after any discharge; the commonest post-discharge harm in older people is a drug event. Repeating hospital investigations wastes the family's money and delays the real task, and a second neurology opinion adds a provider rather than integrating the ones she already has. Physiotherapy and a review date matter but come after the drug list is safe, and three months is too long for a first post-stroke review.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-continuity-q6",
      stem: "Penchansky and Thomas described five dimensions of access. A woman does not attend a clinic that is nearby, free and open all day, because the only doctor is male and she is not comfortable being examined by him. Which dimension of access is deficient?",
      options: ["Availability", "Accessibility", "Affordability", "Accommodation", "Acceptability"],
      answer: 4,
      explanation:
        "Acceptability covers the patient's attitude to the characteristics of the provider - gender, language, caste, religion and communication style - and is the dimension failing here. Availability refers to whether the service and the manpower exist at all, geographic accessibility to distance and transport, affordability to cost, and accommodation to hours, appointment systems and waiting times, all of which are satisfactory in this vignette.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-continuity-q7",
      stem: "Which statement about comprehensiveness in family practice is most accurate?",
      options: [
        "It means the family physician should never refer a patient",
        "It is measured by the range of services provided without referral, and both a very high and a very low referral rate signal a problem",
        "It applies only to preventive services",
        "It requires the practice to own advanced diagnostic equipment",
        "It is synonymous with continuity of care",
      ],
      answer: 1,
      explanation:
        "Comprehensiveness is about the breadth of needs met at first contact, so a very high referral rate suggests a narrow practice while a very low one raises safety concerns about problems retained beyond competence. Never referring is unsafe, not comprehensive. It covers curative, preventive, promotive, rehabilitative and palliative care rather than prevention alone, depends on skills and scope rather than equipment, and is a distinct attribute from continuity, which concerns the persistence of the relationship over time.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "fm-principles-continuity-c1",
      front: "The three types of continuity of care.",
      back: "Informational (the data travel), management (a consistent plan) and relational (an ongoing personal relationship) - the last is unique to family medicine.",
    },
    {
      id: "fm-principles-continuity-c2",
      front: "The best-known outcome benefit of relational continuity.",
      back: "Lower mortality - Pereira Gray et al, BMJ Open 2018, 22 studies in nine countries; also fewer emergency attendances and admissions.",
    },
    {
      id: "fm-principles-continuity-c3",
      front: "Penchansky and Thomas's five dimensions of access.",
      back: "Availability, accessibility (geographic), affordability, accommodation (hours and appointments) and acceptability.",
    },
    {
      id: "fm-principles-continuity-c4",
      front: "How is comprehensiveness measured?",
      back: "By the range of service categories provided and by the referral rate - a very high referral rate means a narrow practice, a very low one raises safety concerns.",
    },
    {
      id: "fm-principles-continuity-c5",
      front: "The single highest-yield coordination task after hospital discharge.",
      back: "Medication reconciliation - producing one agreed drug list from the discharge summary and the previous prescription.",
    },
    {
      id: "fm-principles-continuity-c6",
      front: "How many service packages does an Ayushman Arogya Mandir deliver, and name three commonly forgotten ones.",
      back: "Twelve. Commonly forgotten: elderly and palliative care, mental health, and emergency medical services and trauma care.",
    },
    {
      id: "fm-principles-continuity-c7",
      front: "Who staffs a subcentre-level Health and Wellness Centre?",
      back: "A community health officer (BSc nursing or ayurveda graduate with a certificate in community health) with ANMs and about five ASHAs.",
    },
    {
      id: "fm-principles-continuity-c8",
      front: "What is the CBAC used for?",
      back: "Community Based Assessment Checklist - risk scoring of everyone over 30 at an HWC to select those for hypertension, diabetes and cancer screening.",
    },
    {
      id: "fm-principles-continuity-c9",
      front: "The Triple Aim, and what the Quadruple Aim adds.",
      back: "Better population health, better patient experience, lower per capita cost; the fourth aim is clinician wellbeing.",
    },
    {
      id: "fm-principles-continuity-c10",
      front: "The workable compromise between access and continuity.",
      back: "A named doctor with booked reviews for chronic and complex care, plus same-day open access for acute illness.",
    },
    {
      id: "fm-principles-continuity-c11",
      front: "Which Balint concept describes the harm caused by poor coordination?",
      back: "Collusion of anonymity - responsibility spread across many doctors so that no one owns the decision.",
    },
    {
      id: "fm-principles-continuity-c12",
      front: "PM-JAY financial cover per family per year.",
      back: "Five lakh rupees for secondary and tertiary hospitalisation, for the eligible bottom 40 per cent of households (plus all above 70 years under the 2024 extension).",
    },
  ],
  references: [
    "Starfield B. Primary Care: Balancing Health Needs, Services and Technology, Oxford University Press, 1998",
    "Pereira Gray DJ et al. Continuity of care with doctors - a matter of life and death? BMJ Open, 2018",
    "Ayushman Bharat - Comprehensive Primary Health Care through Health and Wellness Centres: Operational Guidelines, NHSRC / MoHFW, 2018",
    "Haggerty JL et al. Continuity of care - a multidisciplinary review. BMJ, 2003",
    "Rakel RE, Rakel DP. Textbook of Family Medicine, 9th edition, Elsevier, 2016",
  ],
});

topics.push({
  id: "fm-principles-family-unit",
  title: "The family as the unit of care: genogram, life cycle, APGAR and SCREEM",
  oneLiner:
    "The family is the unit of care in family medicine because it determines exposure, behaviour, adherence and support, and it is assessed with a set of standard instruments - the three-generation genogram, the family life cycle, the family life line, the family APGAR score and the SCREEM resource inventory.",
  frequency: "core",
  keywords: [
    "genogram",
    "family APGAR",
    "Smilkstein",
    "SCREEM",
    "family life cycle",
    "Duvall",
    "Carter and McGoldrick",
    "family life line",
    "ecomap",
    "family circle",
    "PRACTICE model",
    "ABCX model",
    "family dynamics",
    "nuclear family",
    "joint family",
    "Kuppuswamy scale",
    "family dysfunction",
  ],
  sections: [
    {
      heading: "Why the family is the unit of care",
      points: [
        "The family is the **primary unit in which health behaviour, illness behaviour and care are learned and practised** - diet, tobacco, exercise, help-seeking and adherence are all family behaviours before they are individual ones.",
        "**Genetic, infective and environmental exposures are shared**: a genogram showing three first-degree relatives with diabetes changes the pre-test probability for the patient in front of you, and a smear-positive index case changes the management of the whole household.",
        "Illness in one member **redistributes the burden** across the rest: school dropout of a daughter to care for a grandmother, or a husband's alcohol dependence presenting as the wife's headache.",
        "**Family support is the single strongest predictor of adherence** in chronic disease, of recovery after stroke or myocardial infarction, and of survival in palliative care at home.",
        "The family is also the source of harm: **domestic violence, child abuse, neglect of the elderly, dowry-related stress and enforced dependence** are family diagnoses that are invisible if only the individual is assessed.",
        "Practically, family-oriented care means **one family folder, a genogram on the first page, and a habit of asking who else at home has this problem** - it costs a few minutes once and pays back for years.",
      ],
    },
    {
      heading: "The genogram",
      points: [
        "A **genogram is a pictorial display of family structure, medical history and relationships across at least three generations**, standardised by McGoldrick and Gerson from Bowen's family systems work.",
        "**Symbols: male is a square, female a circle**, the index patient (proband) is marked with a double outline or an arrow, a **deceased person has a cross through the symbol** with the age or year of death, and age is written inside the symbol.",
        "**Marriage is a horizontal line** with the year of marriage; a **separation is one oblique stroke and a divorce two**; a cohabiting or live-in relationship is a broken line; children hang from a vertical line, **eldest on the left**, twins from a single point, a miscarriage as a small filled circle and a stillbirth as a crossed small symbol.",
        "**Household membership** is shown by a dotted line drawn around those who live under one roof - the single most useful line on an Indian genogram, because it distinguishes a joint household from a nuclear one.",
        "**Relationship lines** are drawn between individuals: a double line for a close relationship, three lines for fused or over-involved, a jagged or zigzag line for conflict, a broken line for distant, and a bar across for a cut-off relationship.",
        "Always record the **date the genogram was drawn and the informant**, since the family changes; annotate each symbol with the significant diagnosis (diabetes, tuberculosis, alcohol dependence, depression) and the age at onset.",
        "Uses: **genetic risk assessment, identifying patterns of illness and behaviour across generations, finding the caregiver, planning home care, and teaching** - and in the exam, being able to draw one cleanly is worth more than describing it.",
      ],
    },
    {
      heading: "The family life cycle and the family life line",
      points: [
        "**Duvall's eight stages:** married couple without children; childbearing family (oldest child to 30 months); family with preschool children (2.5-6 years); family with school children (6-13 years); family with teenagers (13-20 years); family launching young adults (first child leaving to the last leaving); middle-aged parents (empty nest to retirement); ageing family members (retirement to the death of both spouses).",
        "**Carter and McGoldrick's six stages** are used for the modern and the Indian extended family: leaving home - the unattached young adult; joining of families through marriage; family with young children; family with adolescents; launching children and moving on; the family in later life.",
        "Each stage carries **developmental tasks**, and predictable illness clusters: colic and immunisation in the childbearing stage, injuries and school problems in the school stage, risk behaviour and eating disorders in adolescence, empty-nest depression and menopause at launching, and dementia, bereavement and dependency in later life.",
        "**Horizontal stressors** (predictable transitions such as birth, marriage, retirement) interact with **vertical stressors** (inherited patterns, secrets, family myths, migration history); a crisis usually occurs where a horizontal and a vertical stressor intersect.",
        "**The family life line** is a chronological chart of significant events (marriage, births, deaths, migration, job loss, illness onsets) plotted against dates, drawn to reveal **temporal association between life events and illness onset** - the family equivalent of a timeline.",
        "The **Holmes and Rahe Social Readjustment Rating Scale** quantifies recent life change in life-change units, with over 300 units in a year predicting a substantially raised risk of illness; death of a spouse scores 100.",
        "**Hill's ABCX model of family crisis:** A (the stressor event) interacting with B (the family's crisis-meeting resources) and C (the family's perception of the event) produces X (the crisis); the double ABCX model of McCubbin adds pile-up and adaptation over time.",
      ],
    },
    {
      heading: "The family APGAR",
      points: [
        "The **family APGAR was described by Gabriel Smilkstein in 1978** as a five-item screening questionnaire measuring a member's **satisfaction with family function** - it measures perception, not objective function.",
        "**A - Adaptation:** 'I am satisfied that I can turn to my family for help when something is troubling me.' **P - Partnership:** 'I am satisfied with the way my family talks over things with me and shares problems with me.'",
        "**G - Growth:** 'I am satisfied that my family accepts and supports my wishes to take on new activities or directions.' **A - Affection:** 'I am satisfied with the way my family expresses affection and responds to my emotions such as anger, sorrow and love.' **R - Resolve:** 'I am satisfied with the way my family and I share time together.'",
        "Each item is scored **2 for almost always, 1 for some of the time and 0 for hardly ever**, giving a total of 0 to 10.",
        "**Interpretation: 7-10 highly functional family; 4-6 moderately dysfunctional; 0-3 severely dysfunctional.**",
        "It is quick (under two minutes), can be given to more than one member and the **discrepancy between members' scores is itself informative**; a low score is a signal to explore, not a diagnosis of a dysfunctional family.",
        "Limitations: subjective, culturally sensitive, poor at detecting violence or abuse, and it does not identify which relationship is the problem - it must be followed by a genogram and an interview.",
      ],
    },
    {
      heading: "SCREEM and other assessment tools",
      points: [
        "**SCREEM (Smilkstein) is an inventory of family resources and pathology** across six domains: **S**ocial interaction, **C**ultural, **R**eligious, **E**conomic, **E**ducational and **M**edical.",
        "For each domain, ask whether it is a **resource (helps the family cope) or a pathology (a source of strain)**: a large extended family may be either; a strong religious community may provide food and transport, or may block contraception or transfusion.",
        "**Economic** covers income, insurance, debt and out-of-pocket cost of the current illness; **educational** covers literacy and the ability to understand instructions, which determines the form your advice must take; **medical** covers access to and trust in health services, including previous experience.",
        "**Ecomap:** the family is drawn as a central circle with lines to external systems (school, workplace, temple, PHC, employer, moneylender), the thickness showing strength and arrows showing the direction of energy flow - the visual companion of SCREEM.",
        "**Family circle (Thrower):** the patient draws a circle and places circles for family members with size showing importance and distance showing closeness - a quick projective tool with children and adolescents.",
        "**PRACTICE model (Christie-Seely)** for family-focused problem assessment: **P**resenting problem, **R**oles and structure, **A**ffect, **C**ommunication, **T**ime in the life cycle, **I**llness in the family and coping with stress, **C**oping with stress and community resources, **E**nvironment.",
        "**Family types in India:** nuclear, joint, three-generation, extended, blended, single-parent and skipped-generation (grandparents raising children after parental migration); more than half of Indian households are now nominally nuclear but function within a joint network.",
        "**Socio-economic classification** is part of family assessment: the **modified Kuppuswamy scale** (education, occupation and monthly family income, income slabs revised annually with the consumer price index) for urban families and the **BG Prasad scale** (per capita monthly income) for rural.",
      ],
    },
    {
      heading: "Recognising and managing family dysfunction",
      points: [
        "Clinical clues to family dysfunction: **frequent attendance with unexplained symptoms, poor adherence in a well-informed patient, repeated missed appointments for a child, a controlling accompanying relative, injuries with an inconsistent history, and adolescent behaviour change**.",
        "**Family conferences** are a specific therapeutic tool: convene the family with the patient's consent, set an explicit agenda, allow each member to speak, name the shared goal, allocate tasks by name, and set a review date.",
        "**Do not attempt joint counselling where violence is suspected** - see the person alone, assess immediate safety, document injuries, and offer referral to a one-stop centre or protection officer under the Protection of Women from Domestic Violence Act 2005.",
        "Family interventions with evidence: **family-based DOTS support in tuberculosis, family involvement in diabetes self-management, family psychoeducation in schizophrenia (which halves relapse), and home-based caregiver training in stroke and dementia**.",
        "The family physician should be alert to the **caregiver** as a patient: caregiver burden, depression and physical illness are common and unasked-about; screen the caregiver at the same visit.",
        "**Confidentiality within the family** is a constant tension: information given by one member cannot be shared with another without permission, and an adolescent's confidentiality must be protected except where there is risk of serious harm.",
      ],
    },
  ],
  tables: [
    {
      heading: "Family APGAR scoring",
      columns: ["Letter", "Domain", "Question theme", "Score"],
      rows: [
        ["A", "Adaptation", "Satisfied that I can turn to my family for help when troubled", "0, 1 or 2"],
        ["P", "Partnership", "Satisfied with the way my family talks things over and shares problems", "0, 1 or 2"],
        ["G", "Growth", "Satisfied that my family accepts and supports my new activities or directions", "0, 1 or 2"],
        ["A", "Affection", "Satisfied with the way my family expresses affection and responds to emotions", "0, 1 or 2"],
        ["R", "Resolve", "Satisfied with the way my family and I share time together", "0, 1 or 2"],
        ["Total", "Interpretation", "7-10 highly functional; 4-6 moderately dysfunctional; 0-3 severely dysfunctional", "0 to 10"],
      ],
    },
    {
      heading: "SCREEM: resource or pathology",
      columns: ["Domain", "Resource looks like", "Pathology looks like"],
      rows: [
        ["Social", "Extended kin and neighbours who visit and help with transport", "Isolation, recent migration, conflict with in-laws"],
        ["Cultural", "Shared identity, food practices that support the diet", "Beliefs that forbid contraception, insulin or blood transfusion"],
        ["Religious", "Congregation providing meals, money and emotional support", "Fatalism, refusal of treatment, guilt attributed to illness"],
        ["Economic", "Stable income, insurance or PM-JAY card, savings", "Debt, daily wage loss with every clinic visit, catastrophic expenditure"],
        ["Educational", "Literate member able to read instructions and labels", "Illiteracy, inability to follow a written drug schedule"],
        ["Medical", "Trusted nearby clinic, good previous experience, ASHA linkage", "Distance, previous bad experience, dependence on informal providers"],
      ],
    },
    {
      heading: "Family life cycle stages and the problems that cluster there",
      columns: ["Stage (Duvall)", "Developmental task", "Health problems seen"],
      rows: [
        ["Married couple", "Establishing a mutually satisfying relationship, family planning", "Contraception, infertility, sexual problems, marital adjustment"],
        ["Childbearing (to 30 months)", "Adjusting to the infant, supporting the mother", "Postpartum depression, lactation problems, immunisation, colic"],
        ["Preschool children (2.5-6 y)", "Coping with energy depletion and privacy loss", "Diarrhoea, respiratory infection, malnutrition, injuries"],
        ["School children (6-13 y)", "Fitting into the community of school-age families", "Anaemia, worm infestation, school refusal, vision and hearing problems"],
        ["Teenagers (13-20 y)", "Balancing freedom with responsibility", "Substance use, risk behaviour, eating disorders, mental health, injuries"],
        ["Launching", "Releasing young adults with appropriate rituals", "Empty nest depression, menopause, early chronic disease"],
        ["Middle-aged parents", "Rebuilding the marital relationship", "Hypertension, diabetes, obesity, cancer screening"],
        ["Ageing family", "Coping with bereavement, retirement and dependence", "Dementia, falls, polypharmacy, elder abuse, palliative needs"],
      ],
    },
    {
      heading: "Core genogram symbols",
      columns: ["Item", "Symbol"],
      rows: [
        ["Male / female", "Square / circle, with age written inside"],
        ["Index patient", "Double outline or an arrow pointing to the symbol"],
        ["Death", "A cross through the symbol with age or year of death"],
        ["Marriage / separation / divorce", "Horizontal line with year / one oblique stroke / two oblique strokes"],
        ["Children", "Vertical lines from the marriage line, eldest on the left"],
        ["Miscarriage / stillbirth", "Small filled circle / small crossed symbol"],
        ["Household", "Dotted line enclosing all who live under one roof"],
        ["Close / conflictual / cut-off relationship", "Double line / jagged line / broken line with a bar"],
      ],
    },
  ],
  redFlags: [
    "A genogram or family interview that reveals a child with unexplained injuries, sexual abuse or neglect - mandatory reporting under POCSO 2012 and the Juvenile Justice Act 2015; inform the Child Welfare Committee and do not negotiate privately with the family.",
    "Disclosure of intimate partner violence during family assessment - never proceed to a joint family conference; assess immediate danger, document injuries with a body chart, and offer referral to a one-stop centre or protection officer under the PWDVA 2005.",
    "Suspicion that a girl's absence from school and sudden marriage plans involve a minor - child marriage is a notifiable offence under the Prohibition of Child Marriage Act 2006; involve the Child Marriage Prohibition Officer.",
    "Any request from a family to determine or disclose the sex of a fetus - illegal under the PCPNDT Act 1994; refuse, document, and display the mandatory notice; complicity is a criminal offence and removal from the register.",
    "An elderly member found neglected, financially exploited or abandoned during a home-based family assessment - report under the Maintenance and Welfare of Parents and Senior Citizens Act 2007 and involve the district social welfare officer.",
    "A family member disclosing suicidal ideation, or a family with a recent suicide - the whole household needs assessment; never leave this to a routine follow-up appointment.",
    "Discovery of an untreated smear-positive tuberculosis case in the household during genogram taking - contact tracing, notification through Nikshay and preventive therapy for eligible contacts are mandatory public health duties.",
  ],
  pearls: [
    "Draw the genogram before you talk about it - three generations, ages inside the symbols, the index patient marked, the household circled with a dotted line, and the date written at the bottom.",
    "The family APGAR measures satisfaction with family function, not function itself; scores from two members that differ widely are more informative than either score alone.",
    "APGAR cut-offs to memorise: 7-10 functional, 4-6 moderately dysfunctional, 0-3 severely dysfunctional.",
    "SCREEM is scored as resource or pathology in each of the six domains, not as a number - say this explicitly in the viva.",
    "Crisis tends to occur where a horizontal stressor (a life-cycle transition) crosses a vertical one (an inherited pattern or secret).",
    "The family life line is the tool that shows the temporal relationship between life events and the onset of symptoms - use it in medically unexplained symptoms.",
    "Every long case with a chronic disease should include a genogram, an APGAR score and a SCREEM analysis; those three earn the family assessment marks reliably.",
    "The caregiver is a patient too - screen for caregiver burden and depression in the same consultation, especially in dementia, stroke and palliative care.",
  ],
  theory: [
    {
      id: "fm-principles-family-unit-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "The family is the unit of care in family medicine. Describe the tools available to a family physician for family assessment, and illustrate their use in a family with a newly diagnosed patient with type 2 diabetes.",
      openingLines: [
        "In family medicine the unit of care is the family and not merely the individual, because the family determines shared genetic and environmental exposure, health and illness behaviour, adherence, and the availability of support during illness.",
        "Family assessment uses a standard set of instruments - the genogram, the family life cycle, the family life line, the family APGAR, SCREEM, the ecomap and the family circle - which together describe family structure, function, resources and stage.",
      ],
      answer: [
        {
          heading: "1. Why the family is the unit of care",
          points: [
            "Shared genes, shared environment and shared exposure - diabetes, tuberculosis, tobacco use and diet cluster in households.",
            "Illness behaviour and help-seeking are learned in the family; adherence in chronic disease is largely a family behaviour.",
            "Illness in one member redistributes work, money and schooling across the rest.",
            "The family can also be the source of pathology - violence, abuse, neglect, enforced dependency.",
          ],
        },
        {
          heading: "2. Structural assessment: the genogram",
          points: [
            "A pictorial record of at least three generations with standard symbols: square for male, circle for female, age inside, double outline for the index patient, cross for the deceased.",
            "Marriage line with year, one stroke for separation and two for divorce; children hang below with the eldest on the left; a dotted line encloses the household.",
            "Relationship lines: double for close, jagged for conflictual, broken for distant, bar for cut-off.",
            "Annotate diagnoses and age at onset; date the genogram and name the informant.",
          ],
        },
        {
          heading: "3. Developmental assessment: life cycle and life line",
          points: [
            "Duvall's eight stages or Carter and McGoldrick's six stages, with the developmental tasks of the current stage.",
            "Horizontal stressors (transitions) against vertical stressors (inherited patterns), with crisis at the intersection.",
            "The family life line plots dates of major events against illness onsets to reveal temporal associations.",
            "Holmes and Rahe scale quantifies recent life change; over 300 life change units in a year raises illness risk.",
          ],
        },
        {
          heading: "4. Functional assessment: APGAR, SCREEM, ecomap",
          points: [
            "Family APGAR: adaptation, partnership, growth, affection, resolve; each 0-2; total 0-10; 7-10 functional, 4-6 moderately dysfunctional, 0-3 severely dysfunctional.",
            "SCREEM: social, cultural, religious, economic, educational and medical domains classified as resource or pathology.",
            "Ecomap for external systems and the family circle for perceived closeness; PRACTICE model for a structured family interview.",
            "Socio-economic status by the modified Kuppuswamy scale (urban) or BG Prasad scale (rural).",
          ],
        },
        {
          heading: "5. Application to newly diagnosed type 2 diabetes",
          points: [
            "Genogram: identify first-degree relatives with diabetes to establish familial risk and to trigger opportunistic screening of the siblings and adult children who are at risk.",
            "Life cycle: a man in the middle-aged parent stage has financial obligations and may prioritise work over clinic visits; an elderly man in the ageing stage may depend on a daughter-in-law for insulin injections.",
            "APGAR: a score of 4 with poor partnership predicts poor adherence and identifies the need to involve the wife who cooks and the son who buys the drugs.",
            "SCREEM: economic domain identifies whether the family can afford metformin plus strips; educational identifies whether written instructions will work; cultural identifies fasting practices such as Ramzan, Navratri or Karva Chauth that alter drug timing.",
            "Intervention: a family conference to agree one kitchen, not two; naming the person who will collect the drugs and who will accompany him to review; screening the spouse and adult children for diabetes and hypertension; addressing the caregiver's own health.",
          ],
        },
      ],
      mustDraw: [
        "A three-generation genogram with the index patient marked, the household enclosed by a dotted line, diagnoses annotated and the date written.",
        "The family APGAR as a five-row scoring table with the interpretation bands.",
        "A SCREEM table with resource and pathology columns.",
      ],
      markSplit: [
        { part: "Rationale for the family as the unit of care", marks: 1.5 },
        { part: "Genogram with symbols and a drawn example", marks: 3 },
        { part: "Life cycle and life line", marks: 2 },
        { part: "APGAR and SCREEM with scoring and interpretation", marks: 2 },
        { part: "Application to the diabetic family", marks: 1.5 },
      ],
      keywords: ["genogram", "family APGAR", "SCREEM", "Duvall life cycle", "family conference"],
    },
    {
      id: "fm-principles-family-unit-t2",
      paper: "I",
      kind: "define-classify",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Define a genogram. Describe the standard symbols used and list its uses in family practice.",
      openingLines: [
        "A genogram is a pictorial display of a family's structure, medical history and relationships, drawn over at least three generations using standardised symbols, and used as a clinical record of the family as the unit of care.",
        "It was developed from Bowen's family systems theory and standardised by McGoldrick and Gerson; unlike a pedigree chart, it records relationships and social information as well as biological descent.",
      ],
      answer: [
        {
          heading: "Standard symbols",
          points: [
            "Male a square, female a circle, sex unknown a diamond, with the current age written inside the symbol.",
            "The index patient or proband is marked with a double outline or an arrow.",
            "A deceased person is crossed through, with the age or year and cause of death written alongside.",
            "Marriage: a horizontal line with the year; separation one oblique stroke, divorce two; cohabitation a broken horizontal line; remarriage drawn to the right.",
            "Children descend on vertical lines from the marriage line, eldest to the left; twins from a common point; adopted children on a broken vertical line; miscarriage a small filled circle; stillbirth a small crossed symbol; termination a small cross.",
            "A dotted line encircles those sharing a household - essential in the Indian joint family.",
            "Relationship lines: double for close, triple for fused, jagged for conflict, single broken for distant, and a broken line with two bars for a cut-off.",
          ],
        },
        {
          heading: "Information recorded",
          points: [
            "Names, ages, occupations and education; significant diagnoses with the age at onset; deaths with cause; migration; and major family events.",
            "Always date the genogram and record who gave the information, since both the structure and the relationships change.",
          ],
        },
        {
          heading: "Uses",
          points: [
            "Genetic and familial risk assessment - diabetes, hypertension, coronary disease, cancers, thalassaemia and consanguinity.",
            "Recognising patterns across generations - alcohol dependence, depression, domestic violence, repeated early deaths.",
            "Identifying the caregiver, the decision maker and the household's dependants for planning care and home visits.",
            "Communicable disease contact tracing, particularly tuberculosis and leprosy.",
            "Understanding non-adherence, medically unexplained symptoms and frequent attendance.",
            "Teaching, research and medico-legal documentation of family structure; and building rapport, since drawing it together is itself a therapeutic act.",
          ],
        },
      ],
      mustDraw: [
        "A key of at least eight genogram symbols.",
        "A three-generation worked example with the household circled and the index patient marked.",
      ],
      markSplit: [
        { part: "Definition and origin", marks: 1 },
        { part: "Symbols with a drawn key", marks: 2 },
        { part: "Uses", marks: 2 },
      ],
      keywords: ["genogram", "McGoldrick", "three generations", "proband", "contact tracing"],
    },
    {
      id: "fm-principles-family-unit-t3",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the family life cycle and its relevance to the family physician.",
      openingLines: [
        "The family life cycle is the predictable sequence of developmental stages through which a family passes, each with its own tasks, stresses and characteristic health problems; Duvall described eight stages and Carter and McGoldrick six.",
        "Its relevance is anticipatory: knowing the stage tells the family physician which problems to expect, which advice to give before it is asked for, and where the family is most vulnerable to crisis.",
      ],
      answer: [
        {
          heading: "Stages and tasks",
          points: [
            "Duvall: married couple; childbearing; preschool children; school-age children; teenagers; launching; middle-aged parents; ageing family members.",
            "Carter and McGoldrick: the unattached young adult; the new couple; families with young children; families with adolescents; launching children and moving on; the family in later life.",
            "Each stage has developmental tasks - for example, establishing a satisfying marital relationship, accommodating a first child, permitting adolescent autonomy, releasing young adults, adjusting to retirement and to bereavement.",
          ],
        },
        {
          heading: "Health problems clustering by stage",
          points: [
            "Childbearing: postpartum depression, lactation problems, immunisation defaults, marital strain.",
            "Preschool and school age: diarrhoea, respiratory infection, malnutrition, anaemia, injuries, school problems.",
            "Adolescence: substance use, risk-taking, mental health, sexual and reproductive health, eating disorders.",
            "Launching and middle age: menopause, empty nest depression, onset of hypertension, diabetes and obesity, cancer screening.",
            "Later life: dementia, falls, polypharmacy, bereavement, dependency, elder abuse and palliative needs.",
          ],
        },
        {
          heading: "Applications and Indian modifications",
          points: [
            "Anticipatory guidance and timing of preventive services to the stage rather than to the calendar.",
            "Recognising a crisis at the intersection of a horizontal stressor (transition) with a vertical stressor (inherited pattern, secret or migration).",
            "The Indian joint family blurs stages, with several stages present in one household simultaneously; migration of the son creates a skipped-generation household; the daughter-in-law's entry is a major unlisted transition.",
            "The life cycle also predicts caregiver burden, which is why the middle-aged woman is the commonest hidden patient in an Indian household.",
          ],
        },
      ],
      mustDraw: ["A table of the eight Duvall stages against developmental tasks and the health problems seen at each."],
      markSplit: [
        { part: "Stages named with the author", marks: 2 },
        { part: "Tasks and clustering of health problems", marks: 2 },
        { part: "Indian modifications and application", marks: 1 },
      ],
      keywords: ["Duvall", "Carter and McGoldrick", "developmental tasks", "horizontal and vertical stressors", "joint family"],
    },
  ],
  mcqs: [
    {
      id: "fm-principles-family-unit-q1",
      stem: "A patient scores 5 on the family APGAR. How is this interpreted?",
      options: [
        "Highly functional family",
        "Moderately dysfunctional family",
        "Severely dysfunctional family",
        "Invalid score, the questionnaire must be repeated",
        "Normal for a joint family",
      ],
      answer: 1,
      explanation:
        "The family APGAR is scored out of 10 with bands of 7-10 highly functional, 4-6 moderately dysfunctional and 0-3 severely dysfunctional, so 5 falls in the moderately dysfunctional band and should prompt a genogram and a family interview rather than a label. Scores of 0-3 indicate severe dysfunction, and there is no separate normal range for joint families - the instrument measures the respondent's satisfaction whatever the family structure.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-family-unit-q2",
      stem: "In the family APGAR, the letter G stands for:",
      options: [
        "Growth - satisfaction with the family's support for new activities and directions",
        "Guidance - satisfaction with the advice given by elders",
        "Genogram - the structural record of the family",
        "Grief - the family's response to loss",
        "Generativity - the family's ability to produce and raise children",
      ],
      answer: 0,
      explanation:
        "APGAR expands to Adaptation, Partnership, Growth, Affection and Resolve, with Growth measuring satisfaction that the family accepts and supports the member's wish to take on new activities or directions. Guidance, grief and generativity are plausible family-medicine words but appear in no version of the instrument, and the genogram is a separate structural tool, not a component of the score.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-family-unit-q3",
      stem: "On a genogram, two oblique strokes drawn across the horizontal line joining a couple indicate:",
      options: ["A close relationship", "Separation", "Divorce", "Cohabitation without marriage", "A cut-off relationship"],
      answer: 2,
      explanation:
        "One oblique stroke across the marriage line means separation and two mean divorce, which is the pair most often confused in vivas. A close relationship is shown by a double line drawn between the two individuals rather than across the marriage line, cohabitation by a broken horizontal line, and a cut-off by a broken relationship line interrupted by bars.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-family-unit-q4",
      stem: "SCREEM, as described by Smilkstein, assesses:",
      options: [
        "Six domains of family resources and pathology - social, cultural, religious, economic, educational and medical",
        "The five stages of family adaptation to chronic illness",
        "Screening of family members for communicable disease",
        "The family's readiness for behaviour change",
        "The severity of family dysfunction on a 0 to 10 scale",
      ],
      answer: 0,
      explanation:
        "SCREEM is an inventory of the family's social, cultural, religious, economic, educational and medical resources, each classified as a resource or a source of pathology; it is descriptive and is not scored numerically. The 0 to 10 numerical scale belongs to the family APGAR, and readiness for behaviour change is assessed with the transtheoretical stages of change, so both are attractive but wrong.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-family-unit-q5",
      stem: "A 46-year-old woman presents with headache and tiredness. A family life line shows that her symptoms began within two months of her only son's migration to another city and her mother-in-law's death. Which family concept best explains her presentation?",
      options: [
        "Apostolic function",
        "A crisis arising at a family life cycle transition, explained by the ABCX model",
        "Collusion of anonymity",
        "The inverse care law",
        "The prevention paradox",
      ],
      answer: 1,
      explanation:
        "She is at the launching stage of the family life cycle, with a pile-up of stressors, and Hill's ABCX model describes exactly this: the stressor event interacting with the family's resources and its perception of the event produces the crisis, which here is expressed as somatic symptoms. The apostolic function and collusion of anonymity are Balint's ideas about the doctor rather than the family, the inverse care law concerns the distribution of services, and the prevention paradox concerns population versus individual benefit.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-family-unit-q6",
      stem: "Which of the following is the correct use of a dotted line drawn around several symbols on a genogram?",
      options: [
        "It indicates members with the same disease",
        "It encloses those who live together in one household",
        "It indicates an adopted child",
        "It marks a conflictual relationship",
        "It indicates deceased members",
      ],
      answer: 1,
      explanation:
        "A dotted enclosure marks household membership, which is the line that distinguishes a joint from a nuclear household and is essential when planning home care and contact tracing in India. A broken vertical line indicates adoption, a jagged relationship line indicates conflict, and death is marked by a cross through the individual symbol, so each distractor corresponds to a different, real genogram convention.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-family-unit-q7",
      stem: "According to Duvall, a family whose oldest child is 15 years old is in which stage?",
      options: [
        "Family with school children",
        "Family with teenagers",
        "Launching centre family",
        "Family with preschool children",
        "Middle-aged parents",
      ],
      answer: 1,
      explanation:
        "Duvall's stages are defined by the age of the oldest child, and the teenage stage runs from 13 to 20 years, so a 15-year-old eldest places this family there. The school-age stage covers 6 to 13 years, and the launching stage begins only when the first child leaves home, which has not yet happened. Middle-aged parents starts at the empty nest, after the last child has gone.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-family-unit-q8",
      stem: "The Holmes and Rahe Social Readjustment Rating Scale assigns the highest score of 100 life change units to which event?",
      options: ["Marriage", "Loss of job", "Death of a spouse", "Personal injury or illness", "Retirement"],
      answer: 2,
      explanation:
        "Death of a spouse is the anchor event of the scale at 100 life change units; divorce follows at 73 and marital separation at 65. Marriage scores 50 and is the reference point around which other items were originally calibrated, dismissal from work about 47 and retirement 45. A total above 300 units in a year is associated with a substantially increased risk of illness in the following two years.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "fm-principles-family-unit-c1",
      front: "Define a genogram.",
      back: "A pictorial display of family structure, medical history and relationships over at least three generations using standard symbols - structure plus relationships, unlike a plain pedigree chart.",
    },
    {
      id: "fm-principles-family-unit-c2",
      front: "Genogram: male, female, index patient, deceased.",
      back: "Square, circle, double outline or arrow, and a cross through the symbol with age or year of death.",
    },
    {
      id: "fm-principles-family-unit-c3",
      front: "Genogram: separation versus divorce.",
      back: "One oblique stroke across the marriage line for separation, two for divorce.",
    },
    {
      id: "fm-principles-family-unit-c4",
      front: "What does a dotted line drawn around symbols on a genogram mean?",
      back: "Everyone living in the same household - the line that distinguishes a joint from a nuclear household.",
    },
    {
      id: "fm-principles-family-unit-c5",
      front: "Expand the family APGAR and give its author and year.",
      back: "Adaptation, Partnership, Growth, Affection, Resolve. Gabriel Smilkstein, 1978.",
    },
    {
      id: "fm-principles-family-unit-c6",
      front: "Family APGAR scoring and interpretation bands.",
      back: "Each item 2 (almost always), 1 (some of the time), 0 (hardly ever); total 0-10. 7-10 highly functional, 4-6 moderately dysfunctional, 0-3 severely dysfunctional.",
    },
    {
      id: "fm-principles-family-unit-c7",
      front: "Expand SCREEM and say how it is scored.",
      back: "Social, Cultural, Religious, Economic, Educational, Medical. Not scored numerically - each domain is classified as a resource or a pathology.",
    },
    {
      id: "fm-principles-family-unit-c8",
      front: "Name Duvall's eight family life cycle stages.",
      back: "Married couple; childbearing; preschool; school-age; teenage; launching; middle-aged parents; ageing family members - defined by the age of the oldest child.",
    },
    {
      id: "fm-principles-family-unit-c9",
      front: "What is a family life line?",
      back: "A chronological chart of significant family events plotted against dates and illness onsets, used to show the temporal relationship between life events and symptoms.",
    },
    {
      id: "fm-principles-family-unit-c10",
      front: "Hill's ABCX model of family crisis.",
      back: "A (stressor event) interacting with B (crisis-meeting resources) and C (the family's perception of the event) produces X (the crisis); the double ABCX adds pile-up and adaptation.",
    },
    {
      id: "fm-principles-family-unit-c11",
      front: "What is an ecomap?",
      back: "A diagram of the family circle with lines to external systems (school, work, temple, PHC, moneylender); line thickness shows strength and arrows show the direction of energy flow.",
    },
    {
      id: "fm-principles-family-unit-c12",
      front: "Expand the PRACTICE model of family assessment.",
      back: "Presenting problem, Roles and structure, Affect, Communication, Time in the life cycle, Illness in the family and coping with stress, Community resources, Environment.",
    },
    {
      id: "fm-principles-family-unit-c13",
      front: "Which scales are used for socio-economic classification in Indian family assessment?",
      back: "Modified Kuppuswamy (education, occupation, family income; income slabs revised annually with the CPI) for urban, and BG Prasad (per capita monthly income) for rural families.",
    },
  ],
  references: [
    "McGoldrick M, Gerson R, Petry S. Genograms: Assessment and Intervention, 4th edition, WW Norton, 2020",
    "Smilkstein G. The family APGAR - a proposal for a family function test. Journal of Family Practice, 1978",
    "Duvall EM. Marriage and Family Development, 5th edition, Lippincott, 1977",
    "Carter B, McGoldrick M. The Expanded Family Life Cycle, 4th edition, Pearson, 2011",
    "Rakel RE, Rakel DP. Textbook of Family Medicine, 9th edition, Elsevier, 2016 - the family in health and disease",
    "Kumar R, Kumar Y (eds). Textbook of Family Medicine, AFPI / Jaypee, 2022",
  ],
});

topics.push({
  id: "fm-principles-records-audit",
  title: "Medical records, practice management and the clinical audit cycle",
  oneLiner:
    "A family practice runs on its records: a structured problem-oriented record with SOAP progress notes, a coded morbidity register and a family folder make continuity possible, satisfy the medico-legal and regulatory requirement, and supply the denominator without which clinical audit - the systematic comparison of care against explicit criteria followed by change and re-measurement - cannot be done at all.",
  frequency: "common",
  keywords: [
    "problem-oriented medical record",
    "POMR",
    "Lawrence Weed",
    "SOAP notes",
    "problem list",
    "family folder",
    "clinical audit",
    "audit cycle",
    "audit spiral",
    "criteria and standards",
    "quality indicators",
    "Donabedian",
    "ICPC-2",
    "ICD-10",
    "ICD-11",
    "reason for encounter",
    "episode of care",
    "electronic health record",
    "ABDM",
    "medical records retention",
    "significant event analysis",
    "practice management",
    "recall register",
    "plan-do-study-act",
  ],
  sections: [
    {
      heading: "Why the record is a clinical instrument",
      points: [
        "The record is the **only vehicle by which continuity survives the absence of the doctor**; in a discipline defined by longitudinal care, an unreadable or absent note converts a fifteen-year relationship into a series of unrelated encounters.",
        "It is the **primary medico-legal document**: under the NMC (formerly MCI) Code of Ethics Regulations 2002, clause 1.3, records of indoor patients must be maintained in the standard proforma and **retained for three years from the date of commencement of treatment**, and a copy must be supplied to the patient or an authorised attendant **within 72 hours of a request**.",
        "Records are the evidence base of any complaint under the **Consumer Protection Act 2019**, where the burden of showing that reasonable care was taken falls on the doctor, and the courts consistently treat **absent documentation as evidence that the act was not performed**.",
        "The record is the **denominator generator**: audit, recall, immunisation coverage, chronic disease registers and any research question about your own practice all begin with a retrievable list, which is why an unindexed pile of prescriptions is not a record system.",
        "A good record is also a **communication device between team members** - the ANM, the community health officer, the pharmacist, the night duty doctor and the consultant to whom you refer all read it, so it must be legible, dated, timed and signed with a legible name and registration number.",
        "In family practice the unit of filing is ideally the **family folder**, with an individual record for each member and a family page carrying the genogram, the household composition, the socio-economic classification and the shared risks such as a smear-positive index case or a shared water source.",
      ],
    },
    {
      heading: "The problem-oriented medical record",
      points: [
        "The **problem-oriented medical record (POMR) was described by Lawrence Weed in 1968** in the New England Journal of Medicine, replacing the source-oriented record (in which everything from the laboratory sits together and everything from the doctor sits elsewhere) with a record organised around the patient's problems.",
        "It has **four components: the defined database, the complete problem list, the initial plans for each problem, and the progress notes**; the examiner expects these four in this order.",
        "The **database** is the agreed minimum dataset - identification, presenting complaints, past and family history, drug and allergy list, immunisation, social and occupational history, examination and baseline investigations - collected once and updated, not repeated at every visit.",
        "The **problem list is the index page of the record** and the single most useful page in family practice: each problem is numbered, dated at onset, and carried at the **highest level of certainty currently justified** - 'chest pain' becomes 'angina' becomes 'ischaemic heart disease' as evidence accrues, and problems are never erased but moved to an inactive column with a date of resolution.",
        "A problem may legitimately be a **diagnosis, a symptom, a sign, an abnormal test result, a disability, or a social or psychological issue** such as unemployment, caregiver strain or domestic violence - which is exactly why the POMR suits family medicine.",
        "**Initial plans are written under three headings for each problem - diagnostic, therapeutic and patient education**, and progress notes are written in SOAP format against the numbered problem, so that a reader can follow one problem through years of notes without reading every visit.",
      ],
    },
    {
      heading: "SOAP notes and coding the encounter",
      points: [
        "**S - Subjective:** the patient's own account, the symptoms, the duration and, in family practice, the **ideas, concerns and expectations** and the reason this visit is happening today rather than last week.",
        "**O - Objective:** the measurable and observed - vital signs, weight, examination findings, point-of-care and laboratory results; a normal finding relevant to the differential should be recorded positively, because 'no neck stiffness' documented is worth more later than silence.",
        "**A - Assessment:** the interpretation - the working diagnosis or the differential with the reasoning, the change since the last visit, the stage or control status of a chronic problem, and explicitly the **degree of diagnostic certainty**.",
        "**P - Plan:** investigations, treatment with dose, route and duration, patient education given, **safety-netting instructions in the words used**, referral, and the review interval; many practices extend this to **SOAPE or SOAPIER** adding education, intervention, evaluation and revision.",
        "**Coding turns notes into data.** ICD-10 (and now ICD-11, adopted by WHO in 2019 and in staged national implementation) codes diagnoses, but a large minority of primary care encounters never reach a diagnosis, so an ICD-only system silently discards them.",
        "**ICPC-2 (International Classification of Primary Care, second edition, WONCA)** is biaxial: **17 chapters by body system coded with a letter, and 7 components common to every chapter coded 1-99** - complaints and symptoms, diagnostic and preventive procedures, medication and treatment, test results, administrative, referrals and follow-up, and diagnoses. It uniquely codes the **reason for encounter, the problem managed and the process of care** in a single episode structure, which is why it is the classification recommended for family practice.",
        "In India the **Ayushman Bharat Digital Mission (ABDM, 2021)** with the ABHA number, the Health Facility and Healthcare Professional Registries and the **EHR Standards for India (2016, MoHFW)** - which specify SNOMED CT for clinical terms, LOINC for laboratory data and HL7 FHIR for exchange - are the framework any new practice software must follow.",
      ],
    },
    {
      heading: "The clinical audit cycle",
      points: [
        "**Clinical audit is a quality improvement process that seeks to improve patient care and outcomes through systematic review of care against explicit criteria and the implementation of change** (NICE, Principles for Best Practice in Clinical Audit, 2002) - this sentence is the definition mark.",
        "The **five stages of the cycle**: 1. select a topic and set criteria and standards; 2. measure current performance against them; 3. compare and analyse the gap; 4. implement change; 5. **re-audit to close the loop** - an audit that stops at stage 3 is a survey, not an audit, and this is the commonest reason marks are lost.",
        "Because each completed loop should reach a higher standard rather than return to the starting point, the process is drawn as an **audit spiral** rather than a closed circle.",
        "A **criterion** is a measurable statement of what should happen ('every diabetic should have an HbA1c in the last 12 months'); a **standard** is the level of performance expected, expressed as a percentage with a timeframe ('90% within 12 months'), and standards may be set as **minimum, ideal or optimum**.",
        "Criteria are classified by **Donabedian (1966) into structure, process and outcome**: structure (a working glucometer, a functioning cold chain), process (proportion of diabetics with a documented foot examination), and outcome (proportion with HbA1c below 7%). **Process criteria are preferred in audit** because they are under the practice's control, need smaller numbers and are less confounded than outcomes.",
        "Topic selection should follow the **problem being high volume, high risk, high cost or known to be problematic**, and the audit must be feasible, with data that already exist or can be collected in a defined period; a **criterion-based audit** measures against explicit criteria while a **significant event analysis** examines a single case (a missed myocardial infarction, a drug error, a maternal death) in structured detail.",
      ],
    },
    {
      heading: "Doing an audit in a small practice, and quality indicators",
      points: [
        "A workable small-practice audit is deliberately narrow: one criterion, a defined population, a defined period and a sample of about **50-100 records**, taken consecutively or by systematic random sampling so the sample is not the memorable patients.",
        "Write the audit up in a fixed structure - **title, reason for the audit, criteria and standards, method including the sample and the period, first-cycle results, discussion of the gap, changes agreed with names and dates, and second-cycle results** - which is also the structure the DNB thesis-style audit question expects.",
        "Change must be **specific and owned**: a note on the wall changes nothing, whereas a template field that will not close without an HbA1c date, a monthly recall list printed by the receptionist, and a named person responsible do change behaviour.",
        "**PDSA (Plan-Do-Study-Act) cycles** are the improvement engine within the audit: small, rapid, repeated tests of change on a few patients at a time, which is more effective in a small practice than one large annual effort.",
        "**Quality indicators** are the routinely measured markers that keep the practice honest between audits - immunisation coverage of the under-fives on the list, proportion of hypertensives with BP under 140/90, antibiotic prescribing rate for upper respiratory infection, proportion of prescriptions by generic name, defaulter rate in the tuberculosis register, appointment waiting time and patient satisfaction.",
        "**Audit is not research**: audit asks whether we are doing what we have already agreed is right and never requires the patient to be randomised or exposed to anything new, so it usually needs **service or institutional approval rather than an ethics committee review**, whereas research asks what the right thing to do is, requires a formal protocol, ethics committee approval and informed consent, and is intended to be generalised.",
      ],
    },
    {
      heading: "Practice management around the record",
      points: [
        "**Registration and the panel:** every practice should be able to state its denominator - the number of individuals and families registered - because coverage, recall and audit are all meaningless without it; in an Indian urban practice this is usually built from the family folder rather than from a formal list.",
        "**Disease registers** (diabetes, hypertension, tuberculosis, pregnancy, the under-fives, the elderly, palliative care) are the practical output of coding and drive recall letters, phone reminders and the monthly defaulter list; the tuberculosis register must also be reconciled with **Nikshay notification**.",
        "**Appointment and flow systems** matter clinically: a mixed system with booked slots plus a daily quota of same-day access preserves both continuity and first-contact care, and measuring the **third next available appointment** is a better access indicator than the mean waiting time.",
        "**Drug and cold chain management** - a limited essential drug list based on the practice's own morbidity data, first-expiry-first-out stock rotation, temperature logs for vaccines and a documented biomedical waste segregation system under the **Bio-Medical Waste Management Rules 2016** - are examinable practice management items.",
        "**Confidentiality and data protection:** records are the property of the practice but the **information belongs to the patient**; access is on a need-to-know basis, digital records need individual logins and audit trails, and the **Digital Personal Data Protection Act 2023** now applies to health data held by the practice.",
        "**Team and training:** written job descriptions, a practice protocol folder, regular clinical meetings that include significant event analysis, and mandatory training in basic life support, injection safety and infection control turn a clinic into a practice.",
      ],
    },
  ],
  tables: [
    {
      heading: "The four components of the problem-oriented medical record",
      columns: ["Component", "What it contains", "Family practice value"],
      rows: [
        ["Database", "Agreed minimum dataset: history, drugs, allergies, immunisation, social and occupational data, baseline examination", "Collected once, updated - avoids re-taking the same history every visit"],
        ["Problem list", "Numbered, dated, active and inactive problems at the highest justified level of certainty", "The index page; makes a fifteen-year record readable in two minutes"],
        ["Initial plans", "For each problem: diagnostic, therapeutic and patient education plans", "Forces explicit reasoning and records what the patient was told"],
        ["Progress notes", "SOAP entries written against the numbered problem, plus flow sheets and a discharge or transfer note", "Allows one problem to be followed across years and across doctors"],
      ],
    },
    {
      heading: "Clinical audit compared with research",
      columns: ["Feature", "Clinical audit", "Research"],
      rows: [
        ["Question asked", "Are we doing what we have agreed is right?", "What is the right thing to do?"],
        ["Standard used", "Existing evidence-based criteria and standards", "Generates new knowledge; no pre-set standard"],
        ["Design", "Measure, change, re-measure (the spiral)", "Protocol-driven; may randomise or allocate"],
        ["Patient exposure", "No new intervention or randomisation", "Patients may receive a new or allocated intervention"],
        ["Approval needed", "Service or institutional approval; ethics review usually not required", "Formal ethics committee approval and written informed consent"],
        ["Generalisability", "Local; applies to the audited service", "Intended to be generalised and published"],
        ["Who owns it", "The clinical team providing the care", "The investigator, often external to the service"],
      ],
    },
    {
      heading: "Donabedian criteria with worked examples from a diabetes audit",
      columns: ["Type of criterion", "Example criterion", "Suggested standard"],
      rows: [
        ["Structure", "A calibrated glucometer with in-date strips is available in the clinic", "100% of clinic days"],
        ["Process", "Every registered diabetic has an HbA1c recorded in the last 12 months", "90% within 12 months"],
        ["Process", "Every registered diabetic has a documented annual foot examination", "80% within 12 months"],
        ["Outcome", "Proportion of registered diabetics with HbA1c below 7%", "50% within 12 months"],
        ["Outcome", "Proportion of diabetics with a new foot ulcer in the audit year", "Below 2% per year"],
      ],
    },
  ],
  redFlags: [
    "A request for the medical record that comes from the police, a court, an insurer or an employer rather than from the patient - never hand over the original or a copy on your own; a summons or a written authorisation from the patient is required, and the original record is released only to a court, with a certified copy retained.",
    "A record that names a person's HIV status, mental illness, termination of pregnancy or sexual assault - disclosure to a spouse, employer or family member without consent is a breach; under the HIV/AIDS (Prevention and Control) Act 2017 partner notification is permitted only after counselling and by a court order or the informed route the Act specifies, and it is never a routine clinic decision.",
    "Any pressure - from a colleague, an employer or a family - to alter, backdate, overwrite or add to a note after the event; a genuine late entry is written as a dated and timed addendum with a reason, and tampering converts a defensible case into an indefensible one and is itself professional misconduct.",
    "A significant event that caused or nearly caused harm - a maternal death, a missed myocardial infarction, an anaphylaxis after an injection, a wrong-drug or wrong-dose error, a missed tuberculosis diagnosis - must be escalated the same day, reported and analysed as a team with the senior clinician, never handled quietly by the individual involved.",
    "A patient asking to see their own record who is a minor, lacks capacity, or is accompanied by a person who may be the source of harm - assess capacity, consider safeguarding under POCSO 2012 or the Protection of Women from Domestic Violence Act 2005, and involve a senior before any disclosure.",
    "An audit or record review that begins to look like research - a new intervention, randomisation, an extra investigation, publication with identifiable data, or export of records to an external investigator - stop and take it to the institutional ethics committee before a single record is collected.",
  ],
  pearls: [
    "The audit cycle has five stages and the mark is in the fifth: measure, compare, change, and re-audit to close the loop - an audit without a second cycle is a survey.",
    "Weed's POMR has exactly four components - database, problem list, initial plans, progress notes - and the problem list is the page that makes the rest usable.",
    "Prefer process criteria to outcome criteria in a small practice audit: they are under your control, need fewer patients and are less confounded.",
    "A criterion is what should happen; a standard is the percentage of the time it should happen, with a timeframe. Examiners routinely ask candidates to differentiate the two.",
    "ICPC-2 codes the reason for encounter, the problem managed and the process of care, so it captures the undifferentiated symptom that ICD-10 cannot; quote its biaxial structure of 17 chapters and 7 components.",
    "NMC Regulation 1.3: indoor records in the standard proforma, retained three years, and released to the patient within 72 hours of a written request.",
    "Audit needs institutional approval, not ethics approval; the moment patients are randomised or exposed to something new, it is research and needs the ethics committee.",
  ],
  theory: [
    {
      id: "fm-principles-records-audit-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Define clinical audit. Describe the stages of the audit cycle and, with a worked example from your practice, explain how you would audit the care of patients with type 2 diabetes. How does audit differ from research?",
      openingLines: [
        "Clinical audit is a quality improvement process that seeks to improve patient care and outcomes through the systematic review of care against explicit criteria and the implementation of change (NICE, 2002).",
        "It is a cyclical activity - and because each completed loop should reach a higher standard than the last, it is better drawn as an audit spiral than as a closed circle.",
      ],
      answer: [
        {
          heading: "1. Definition and purpose",
          points: [
            "Quality improvement process reviewing care against explicit criteria, implementing change, and re-measuring to confirm improvement.",
            "Purpose: to close the gap between the care that is given and the care that the available evidence says should be given.",
            "It is a professional, local and continuous activity, owned by the clinical team that delivers the care.",
          ],
        },
        {
          heading: "2. Stages of the audit cycle",
          points: [
            "Stage 1 - select the topic (high volume, high risk, high cost or known problem) and set criteria and standards.",
            "Stage 2 - measure current performance: define the population, the sample, the period and the data source.",
            "Stage 3 - compare with the standard and analyse the reasons for the gap with the whole team.",
            "Stage 4 - implement specific, owned change with a named person and a date.",
            "Stage 5 - re-audit after an agreed interval to close the loop; without this the exercise is only a survey.",
          ],
        },
        {
          heading: "3. Criteria, standards and their classification",
          points: [
            "Criterion: a measurable statement of what should happen. Standard: the percentage of the time it should happen, with a timeframe.",
            "Donabedian classification into structure, process and outcome criteria.",
            "Process criteria are preferred in a small practice: controllable, less confounded, achievable with small numbers.",
          ],
        },
        {
          heading: "4. Worked example - audit of type 2 diabetes care",
          points: [
            "Population: all 150 patients on the practice diabetes register on 1 January.",
            "Criterion: every registered diabetic should have an HbA1c recorded within the previous 12 months. Standard: 90%.",
            "First cycle: 96 of 150 (64%) had a recorded HbA1c - a shortfall of 26 percentage points against the standard.",
            "Reasons found: no recall system, cost of the test, no template prompt, and no ownership of the register.",
            "Changes: a monthly recall list printed by the receptionist, a mandatory HbA1c date field in the consultation template, a negotiated laboratory rate, and a named nurse owning the register.",
            "Second cycle at 6 months: 132 of 150 (88%), with the residual defaulters identified individually for home follow-up; the third cycle raises the standard to include HbA1c below 7%.",
          ],
        },
        {
          heading: "5. Audit compared with research",
          points: [
            "Audit asks whether we are doing what we have agreed is right; research asks what the right thing to do is.",
            "Audit measures against existing standards; research generates new knowledge and has no pre-set standard.",
            "Audit involves no new intervention and no randomisation; research may allocate patients to interventions.",
            "Audit needs service or institutional approval; research needs ethics committee approval and written informed consent.",
            "Audit is local; research is intended to be generalised.",
          ],
        },
      ],
      mustDraw: [
        "The audit cycle as a five-stage circle, with an arrow showing it opening into a spiral at the re-audit.",
        "A two-column table of audit versus research.",
        "A small results table showing first cycle, standard and second cycle percentages.",
      ],
      markSplit: [
        { part: "Definition of clinical audit", marks: 2 },
        { part: "Stages of the cycle, including re-audit", marks: 3 },
        { part: "Criteria, standards and Donabedian classification", marks: 2 },
        { part: "Worked diabetes example with numbers", marks: 2 },
        { part: "Audit versus research", marks: 1 },
      ],
      keywords: ["clinical audit", "audit cycle", "criteria and standards", "Donabedian", "re-audit"],
    },
    {
      id: "fm-principles-records-audit-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Short note: the problem-oriented medical record and SOAP notes in family practice.",
      openingLines: [
        "The problem-oriented medical record, described by Lawrence Weed in 1968, organises the record around the patient's problems rather than around the source of the information.",
        "It has four components - the defined database, the complete problem list, the initial plans and the progress notes - and progress notes are written in SOAP format against the numbered problem.",
      ],
      answer: [
        {
          heading: "1. The four components",
          points: [
            "Database: agreed minimum dataset - history, drugs, allergies, immunisation, social and occupational data, baseline examination and investigations.",
            "Problem list: numbered, dated, active and inactive, at the highest level of certainty currently justified; problems are never erased, only moved to inactive with a date.",
            "Initial plans: written per problem under diagnostic, therapeutic and patient education headings.",
            "Progress notes: SOAP entries linked to the problem number, with flow sheets for chronic disease parameters.",
          ],
        },
        {
          heading: "2. SOAP",
          points: [
            "Subjective: the patient's account, symptoms, duration, and ideas, concerns and expectations.",
            "Objective: vital signs, examination findings, relevant negatives and results.",
            "Assessment: working diagnosis or differential with reasoning, change since last visit, degree of certainty.",
            "Plan: investigation, treatment with dose and duration, education, safety netting in the words used, referral and review interval.",
            "Extensions: SOAPE and SOAPIER add education, intervention, evaluation and revision.",
          ],
        },
        {
          heading: "3. Value in family practice",
          points: [
            "A problem may be a diagnosis, a symptom, an abnormal result, a disability or a social problem - which suits undifferentiated primary care.",
            "Makes continuity portable between doctors and across years, and generates the registers that drive recall and audit.",
            "Family folder with a family page carrying the genogram, household composition and socio-economic classification.",
            "Medico-legal value: NMC Regulation 1.3 requires records in a standard proforma, retained three years and released within 72 hours of a request.",
          ],
        },
        {
          heading: "4. Limitations",
          points: [
            "Time-consuming to set up; problem lists decay unless someone is responsible for pruning them.",
            "Over-listing trivial problems makes the index page useless.",
            "Needs coding (ICPC-2 or ICD-10) for the record to become analysable data.",
          ],
        },
      ],
      mustDraw: [
        "A four-box diagram of the POMR components.",
        "A sample problem list with numbers, dates of onset and active or inactive status.",
        "A one-visit SOAP note written out in full.",
      ],
      markSplit: [
        { part: "Four components of the POMR", marks: 2 },
        { part: "SOAP expanded with content of each element", marks: 2 },
        { part: "Value and limitations in family practice", marks: 1 },
      ],
      keywords: ["POMR", "Weed", "problem list", "SOAP", "family folder"],
    },
  ],
  mcqs: [
    {
      id: "fm-principles-records-audit-q1",
      stem: "An audit of the practice diabetes register found that 96 of 150 registered diabetics had an HbA1c recorded in the previous 12 months, against an agreed standard of 90%. What is the achieved performance and the correct next step?",
      options: [
        "64% achieved; the standard was unrealistic and should be lowered before proceeding",
        "64% achieved; analyse the reasons for the gap, implement a specific change, and re-audit",
        "72% achieved; the loop is closed and the audit is complete",
        "64% achieved; the results should be submitted to the ethics committee before any change is made",
      ],
      answer: 1,
      explanation:
        "96 divided by 150 is 0.64, that is 64%, a shortfall of 26 percentage points against the 90% standard. The correct next step is stage 3 onwards of the audit cycle - analyse the gap, implement a specific and owned change, and re-audit to close the loop. Lowering the standard because it was not met defeats the purpose of the audit. 72% is arithmetically wrong. An audit of existing care against agreed criteria involves no new intervention and needs service or institutional approval, not ethics committee review.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-records-audit-q2",
      stem: "Which of the following is NOT one of the four components of Weed's problem-oriented medical record?",
      options: [
        "The defined database",
        "The complete problem list",
        "The consent form",
        "The progress notes",
      ],
      answer: 2,
      explanation:
        "Weed's POMR consists of the defined database, the complete problem list, the initial plans for each problem, and the progress notes written in SOAP format. The consent form is an essential medico-legal document but is not a structural component of the POMR. Candidates commonly omit the initial plans; remember that the plan for each problem is written under diagnostic, therapeutic and patient education headings.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-records-audit-q3",
      stem: "A practice audits the proportion of registered diabetics who have had a documented foot examination in the last year. In Donabedian's classification this criterion is:",
      options: [
        "A structure criterion",
        "A process criterion",
        "An outcome criterion",
        "An impact criterion",
      ],
      answer: 1,
      explanation:
        "Donabedian classified quality criteria into structure (the resources available - staff, equipment, buildings), process (what is actually done to and for the patient) and outcome (the resulting change in health status). A documented foot examination is an act of care, hence a process criterion. Availability of a monofilament in the clinic would be structure, and the annual incidence of foot ulcers would be an outcome. Impact is a term from programme evaluation, not part of Donabedian's triad.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-records-audit-q4",
      stem: "Regarding ICPC-2, the classification recommended for primary care, which statement is correct?",
      options: [
        "It is a uniaxial list of diagnoses that replaces ICD-10 in hospitals",
        "It is biaxial, with 17 body-system chapters and 7 components, and codes the reason for encounter, the problem managed and the process of care",
        "It codes only confirmed diagnoses, and undifferentiated symptoms must be coded in ICD-10",
        "It was developed by the World Bank for costing primary care services",
      ],
      answer: 1,
      explanation:
        "ICPC-2 is a WONCA classification with a biaxial structure: 17 chapters based on body systems, each coded with a letter, crossed with 7 components coded 1 to 99 - symptoms and complaints, diagnostic and preventive procedures, medication and treatment, test results, administrative, referrals and follow-up, and diagnoses. Its distinctive strength is coding the reason for encounter and the process of care within an episode, so undifferentiated symptoms are captured rather than discarded, which is precisely what a diagnosis-only system such as ICD-10 cannot do. It supplements rather than replaces ICD in hospital use, and it is a WONCA product, not a World Bank one.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-records-audit-q5",
      stem: "Under the NMC (erstwhile MCI) Code of Ethics Regulations 2002, indoor patient records must be retained for at least how long, and supplied to the patient within what period of a request?",
      options: [
        "One year; within 7 days",
        "Three years; within 72 hours",
        "Five years; within 30 days",
        "Ten years; within 48 hours",
      ],
      answer: 1,
      explanation:
        "Regulation 1.3 requires that records of indoor patients be maintained in the standard proforma for three years from the date of commencement of treatment, and that a copy be supplied to the patient or an authorised attendant within 72 hours of a request. The other options mix in retention periods used by hospitals for other purposes or by other jurisdictions. Note that medico-legal cases and records relevant to a pending claim should in practice be kept much longer, because limitation periods under consumer law may extend beyond three years.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "fm-principles-records-audit-c1",
      front: "Define clinical audit in one sentence.",
      back: "A quality improvement process that seeks to improve patient care and outcomes through the systematic review of care against explicit criteria and the implementation of change (NICE, 2002).",
    },
    {
      id: "fm-principles-records-audit-c2",
      front: "The five stages of the audit cycle.",
      back: "1. Select topic, set criteria and standards. 2. Measure current performance. 3. Compare and analyse the gap. 4. Implement change. 5. Re-audit to close the loop - drawn as a spiral, not a circle.",
    },
    {
      id: "fm-principles-records-audit-c3",
      front: "Criterion versus standard.",
      back: "A criterion is a measurable statement of what should happen; a standard is the level of performance expected, expressed as a percentage with a timeframe.",
    },
    {
      id: "fm-principles-records-audit-c4",
      front: "Donabedian's three types of quality criteria, with a diabetes example of each.",
      back: "Structure - a calibrated glucometer available. Process - annual foot examination documented. Outcome - proportion with HbA1c below 7%. Process criteria are preferred in small-practice audit.",
    },
    {
      id: "fm-principles-records-audit-c5",
      front: "The four components of Weed's problem-oriented medical record.",
      back: "Defined database; complete problem list; initial plans (diagnostic, therapeutic, patient education) for each problem; progress notes in SOAP format against the problem number.",
    },
    {
      id: "fm-principles-records-audit-c6",
      front: "Expand SOAP and SOAPIER.",
      back: "Subjective, Objective, Assessment, Plan. SOAPIER adds Intervention, Evaluation and Revision; SOAPE adds Education.",
    },
    {
      id: "fm-principles-records-audit-c7",
      front: "Structure of ICPC-2.",
      back: "Biaxial: 17 body-system chapters (letters) crossed with 7 components (1-99) - symptoms, diagnostic and preventive procedures, medication and treatment, test results, administrative, referral and follow-up, diagnoses. Codes reason for encounter, problem managed and process of care.",
    },
    {
      id: "fm-principles-records-audit-c8",
      front: "How does audit differ from research in terms of approval needed?",
      back: "Audit measures existing care against agreed standards with no new intervention, so it needs service or institutional approval; research generates new knowledge, may allocate or randomise, and needs ethics committee approval with written informed consent.",
    },
    {
      id: "fm-principles-records-audit-c9",
      front: "NMC record-keeping rule to quote.",
      back: "Regulation 1.3, Code of Ethics 2002: indoor records in the standard proforma, retained three years from commencement of treatment, copy supplied to the patient or authorised attendant within 72 hours of a request.",
    },
    {
      id: "fm-principles-records-audit-c10",
      front: "What is a significant event analysis?",
      back: "A structured team review of a single important case - a missed myocardial infarction, a drug error, a maternal death, a near miss - covering what happened, why, what was learned and what will change; complementary to criterion-based audit.",
    },
  ],
  references: [
    "Weed LL. Medical records that guide and teach. New England Journal of Medicine 1968;278:593-600 and 652-657",
    "NICE. Principles for Best Practice in Clinical Audit. Radcliffe Medical Press, 2002",
    "Donabedian A. Evaluating the quality of medical care. Milbank Memorial Fund Quarterly 1966;44:166-206",
    "WONCA International Classification Committee. ICPC-2: International Classification of Primary Care, 2nd edition, Oxford University Press, 1998 (ICPC-2-R revision 2005)",
    "National Medical Commission (erstwhile MCI). Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002 - clause 1.3 on maintenance of medical records",
    "Ministry of Health and Family Welfare, Government of India. Electronic Health Record Standards for India, 2016",
    "National Health Authority. Ayushman Bharat Digital Mission - ABHA and health data management policy, 2021",
    "Rakel RE, Rakel DP. Textbook of Family Medicine, 9th edition, Elsevier, 2016 - chapter on practice management and information systems",
    "Kumar R, Kumar Y (eds). Textbook of Family Medicine, AFPI / Jaypee, 2022 - records, audit and quality in family practice",
  ],
});

topics.push({
  id: "fm-principles-ebm",
  title: "Evidence-based medicine: PICO, appraisal, diagnostic statistics and the forest plot",
  oneLiner:
    "Evidence-based medicine is the conscientious, explicit and judicious use of current best evidence in making decisions about the care of individual patients, integrating individual clinical expertise with the best available external evidence and the patient's values, and it is practised as five steps - ask a focused PICO question, acquire the best evidence, appraise it critically, apply it to this patient, and audit the result.",
  frequency: "common",
  keywords: [
    "evidence-based medicine",
    "Sackett",
    "PICO",
    "five steps of EBM",
    "levels of evidence",
    "Oxford CEBM",
    "GRADE",
    "critical appraisal",
    "randomised controlled trial",
    "allocation concealment",
    "intention to treat",
    "CONSORT",
    "sensitivity",
    "specificity",
    "positive predictive value",
    "likelihood ratio",
    "pre-test probability",
    "number needed to treat",
    "absolute risk reduction",
    "relative risk reduction",
    "odds ratio",
    "confidence interval",
    "forest plot",
    "heterogeneity",
    "I squared",
    "PRISMA",
    "systematic review",
    "meta-analysis",
  ],
  sections: [
    {
      heading: "Definition and the five steps",
      points: [
        "**Sackett's 1996 BMJ definition:** evidence-based medicine is the conscientious, explicit and judicious use of current best evidence in making decisions about the care of individual patients - quote it verbatim, then add that it means **integrating individual clinical expertise with the best available external clinical evidence from systematic research**.",
        "The **three-legged stool** of modern EBM is **best research evidence, clinical expertise and patient values and circumstances**; an answer that omits patient values misses the point of the discipline and loses the applied mark.",
        "**The five steps (the five As): Ask** a focused answerable question, **Acquire** the best evidence efficiently, **Appraise** it for validity, importance and applicability, **Apply** it to this patient after discussion, and **Assess or Audit** your own performance in doing all four.",
        "EBM is **not cookbook medicine and not cost-cutting**: guidelines describe the average patient, whereas the fourth step exists precisely to decide whether this particular patient - older, multimorbid, poorer or with different priorities than the trial population - is the person the evidence describes.",
        "In Indian family practice the commonest EBM failures are **extrapolation from trials in different populations, prescribing based on a drug representative's abstract, and treating surrogate outcomes** (a lipid level, a bone density) as if they were patient-important outcomes such as fracture, stroke or death.",
        "The corresponding skill is **information management, not information accumulation**: know four or five pre-appraised sources - Cochrane Library, BMJ Best Practice or UpToDate, national guidelines such as the Standard Treatment Guidelines and the NTEP guidelines, and PubMed Clinical Queries - rather than searching everything from scratch.",
      ],
    },
    {
      heading: "Asking the question: PICO and the right study design",
      points: [
        "**Background questions** ask about general knowledge ('what causes gout?') and are answered from a textbook; **foreground questions** ask about a specific decision in a specific patient and are structured as **PICO**.",
        "**P - Patient, population or problem** (a 55-year-old man with type 2 diabetes and microalbuminuria); **I - Intervention, exposure, index test or prognostic factor** (an ACE inhibitor); **C - Comparison** (placebo or usual care - state it explicitly, and 'no treatment' is a legitimate comparator); **O - Outcome** that matters to the patient (progression to end-stage renal disease, not a fall in albumin excretion).",
        "Add **T for the time horizon and the type of study** where relevant - PICOT - because 'over 5 years' changes both the search and the answer.",
        "**Match the design to the question:** therapy and prevention are best answered by a **randomised controlled trial or a systematic review of RCTs**; **diagnosis and screening** by a cross-sectional study of consecutive patients with an independent, blinded comparison against a reference standard; **prognosis** by an inception cohort; **aetiology or harm** by a cohort, or by a case-control study when the outcome is rare or the exposure is long-delayed; **frequency** by a cross-sectional survey; and questions about **patient experience or meaning** by qualitative research.",
        "**Rare harms cannot be studied by RCTs** - a trial of 5000 patients cannot detect a 1 in 10 000 event - so pharmacovigilance, case series and observational studies remain the evidence for adverse effects, which is why absence of harm in trials is not evidence of safety.",
        "Convert the question into a search: use **MeSH terms plus free text, Boolean AND, OR and NOT, truncation, and a methodological filter**; the Cochrane Library first, then PubMed Clinical Queries, and only then a general search.",
      ],
    },
    {
      heading: "Levels of evidence and grades of recommendation",
      points: [
        "The **Oxford Centre for Evidence-Based Medicine hierarchy** runs: **level 1 - systematic review of RCTs or an individual RCT with a narrow confidence interval; level 2 - cohort studies and low-quality RCTs; level 3 - case-control studies; level 4 - case series and poor-quality cohort or case-control studies; level 5 - expert opinion or reasoning from physiology or bench research**.",
        "**Grades of recommendation follow the levels: A from consistent level 1 studies, B from consistent level 2 or 3 studies or extrapolation from level 1, C from level 4 studies or extrapolation from level 2 or 3, and D from level 5 evidence or troublingly inconsistent or inconclusive studies at any level.**",
        "The hierarchy is a **starting presumption, not a rule**: a large, well-conducted cohort study can outrank a small, unblinded RCT with 40% attrition, and for questions where randomisation is impossible or unethical the best available evidence is observational.",
        "**GRADE (Grading of Recommendations, Assessment, Development and Evaluation)** is the system used by WHO, NICE and Cochrane: evidence starts **high for RCTs and low for observational studies**, and is then **downgraded for risk of bias, inconsistency, indirectness, imprecision and publication bias**, or **upgraded for a large effect size, a dose-response gradient, or when plausible confounding would only reduce the observed effect**.",
        "GRADE ends with **four certainty levels - high, moderate, low, very low - and only two recommendation strengths, strong ('we recommend') and conditional or weak ('we suggest')**, because the strength depends on the balance of benefits and harms, values and resources, not on the evidence alone.",
        "Learn to state the difference in one line: **the level of evidence describes the study; the grade of recommendation describes what you should do about it**.",
      ],
    },
    {
      heading: "Critical appraisal of a randomised controlled trial",
      points: [
        "Appraisal asks three questions in order: **is it valid (internal validity), is it important (size and precision of the effect), and is it applicable to my patient (external validity)** - a trial that fails the first question is not rescued by a spectacular result.",
        "**Randomisation** removes selection bias and balances known and unknown confounders; check that it was truly random (computer-generated sequence, random number tables, permuted blocks or stratified randomisation) and not 'quasi-random' by alternate allocation, date of birth or hospital number, which the investigator can predict.",
        "**Allocation concealment is distinct from blinding and is the single item most strongly associated with exaggerated treatment effects**: the person recruiting must not be able to foresee the next assignment, which requires a central telephone or web randomisation service or sequentially numbered, opaque, sealed envelopes.",
        "**Blinding** of participants, clinicians, outcome assessors and analysts protects against performance and detection bias; where blinding is impossible (surgery, physiotherapy), **blinded outcome assessment with objective endpoints** is the minimum acceptable substitute.",
        "**Follow-up and analysis:** were all patients accounted for at the end and analysed in the groups to which they were randomised - **intention-to-treat analysis preserves randomisation and gives the more conservative, more realistic estimate**, whereas per-protocol analysis reintroduces selection bias. **Attrition above 20% seriously threatens validity**, and the worst-case sensitivity analysis should be checked.",
        "Also check **baseline comparability of the groups, equal treatment apart from the intervention (no co-intervention), whether the outcome was patient-important and pre-specified rather than a composite or a surrogate, the size and precision of the effect with its 95% confidence interval, whether the trial was stopped early for benefit (which overestimates effect), funding and conflicts of interest, and trial registration (CTRI in India, ClinicalTrials.gov) with reporting to CONSORT 2010 including the flow diagram**.",
      ],
    },
    {
      heading: "Diagnostic test statistics",
      points: [
        "Build the **2x2 table** with the disease across the top (present, absent) and the test result down the side (positive, negative), giving **true positives (a), false positives (b), false negatives (c) and true negatives (d)** - draw it before calculating anything, because most errors in the exam are errors of orientation.",
        "**Sensitivity = a/(a+c)**, the proportion of those with the disease who test positive; **specificity = d/(b+d)**, the proportion of those without the disease who test negative. Both are **properties of the test and are independent of prevalence**.",
        "**SnNout and SpPin:** a highly **Sen**sitive test, when **N**egative, rules **out** the disease; a highly **Sp**ecific test, when **P**ositive, rules **in** the disease. This is why sensitive tests are used to screen and specific tests to confirm.",
        "**Positive predictive value = a/(a+b)** and **negative predictive value = d/(c+d)** answer the question the patient actually asks - given this result, do I have the disease? - but **both vary steeply with prevalence**, which is why a test that performs beautifully in a tertiary clinic generates mostly false positives in general practice.",
        "**Likelihood ratios are the most useful appraisal statistic because they are prevalence-independent yet convert directly to post-test probability: LR+ = sensitivity / (1 - specificity), LR- = (1 - sensitivity) / specificity.** As a rule of thumb an **LR+ above 10 or an LR- below 0.1 produces a large and usually conclusive change in probability**, 5-10 and 0.1-0.2 a moderate change, 2-5 and 0.2-0.5 a small change, and 1-2 or 0.5-1 a negligible one.",
        "Use **pre-test probability x LR (through Fagan's nomogram or by converting to odds) to get post-test probability**; also know **accuracy = (a+d)/total**, **prevalence = (a+c)/total**, and that **ROC curve area** summarises test performance across all cut-offs, with 0.5 being useless and 1.0 perfect.",
      ],
    },
    {
      heading: "Treatment effects, meta-analysis and the forest plot",
      points: [
        "From a trial's 2x2 table, **control event rate (CER)** and **experimental event rate (EER)** give: **relative risk RR = EER/CER; absolute risk reduction ARR = CER - EER; relative risk reduction RRR = (CER - EER)/CER = 1 - RR; number needed to treat NNT = 1/ARR**, always rounded up and always quoted with the time period and the outcome.",
        "**Number needed to harm NNH = 1/absolute risk increase.** Relative measures look impressive and are prevalence-blind; **absolute measures and NNT are what the patient needs to hear**, and presenting a 25% RRR without the 2% ARR is the commonest way evidence is used to mislead.",
        "**Odds ratio = (a/c)/(b/d)**, used in case-control studies and logistic regression; it **approximates the relative risk only when the outcome is rare (under about 10%)** and otherwise exaggerates it.",
        "A **95% confidence interval is the range within which the true value lies with 95% confidence**; a confidence interval that **crosses 1 for a ratio measure (RR, OR, HR) or crosses 0 for a difference measure (ARR, mean difference) is not statistically significant**. A wide interval means an imprecise, underpowered study even when the point estimate is impressive.",
        "**Systematic review and meta-analysis:** a systematic review uses an explicit, reproducible search and appraisal method to answer a focused question and follows **PRISMA 2020** with a flow diagram and a registered protocol (PROSPERO); a meta-analysis is the optional statistical pooling of those results, weighting each study, usually by the inverse of its variance so larger and more precise studies count more.",
        "**Reading a forest plot:** each horizontal line is one study, the **square is the point estimate with its area proportional to the study's weight** and the line is its 95% confidence interval; the **vertical line is the line of no effect (1 for ratios, 0 for differences)**; the **diamond at the bottom is the pooled estimate, its width being the pooled confidence interval**, and it is significant if the diamond does not touch the line of no effect. **Heterogeneity is judged by visual non-overlap of the intervals, the chi-square test with p below 0.10, and I-squared - roughly 0-40% may not be important, 30-60% moderate, 50-90% substantial and 75-100% considerable** - substantial heterogeneity calls for a random-effects model, subgroup analysis or no pooling at all. **Publication bias is examined by a funnel plot**, whose asymmetry suggests missing small negative trials.",
      ],
    },
  ],
  tables: [
    {
      heading: "The diagnostic 2x2 table with a worked example (1000 patients, prevalence 10%)",
      columns: ["", "Disease present", "Disease absent", "Total"],
      rows: [
        ["Test positive", "a = 90 (true positive)", "b = 180 (false positive)", "270"],
        ["Test negative", "c = 10 (false negative)", "d = 720 (true negative)", "730"],
        ["Total", "100", "900", "1000"],
        ["Derived", "Sensitivity = 90/100 = 90%", "Specificity = 720/900 = 80%", "Accuracy = 810/1000 = 81%"],
        ["Derived", "PPV = 90/270 = 33%", "NPV = 720/730 = 99%", "LR+ = 0.9/0.2 = 4.5; LR- = 0.1/0.8 = 0.125"],
      ],
    },
    {
      heading: "Oxford CEBM levels of evidence and grades of recommendation",
      columns: ["Level", "Type of evidence", "Grade of recommendation"],
      rows: [
        ["1", "Systematic review of RCTs, or an individual RCT with a narrow confidence interval; all-or-none case series", "A"],
        ["2", "Systematic review of cohort studies, an individual cohort study, or a low-quality RCT", "B"],
        ["3", "Systematic review of case-control studies, or an individual case-control study", "B"],
        ["4", "Case series, and poor-quality cohort or case-control studies", "C"],
        ["5", "Expert opinion without explicit critical appraisal, or reasoning from physiology or bench research", "D"],
      ],
    },
    {
      heading: "Question type, best study design, and the appraisal checklist to use",
      columns: ["Type of question", "Best design", "Appraisal focus"],
      rows: [
        ["Therapy or prevention", "Systematic review of RCTs, or an RCT", "Randomisation, allocation concealment, blinding, intention to treat, follow-up"],
        ["Diagnosis", "Cross-sectional study of consecutive patients versus a reference standard", "Independent blinded comparison, appropriate spectrum, reference standard applied to all"],
        ["Prognosis", "Inception cohort followed from a uniform early point", "Representative sample, sufficient and complete follow-up, objective outcome criteria"],
        ["Aetiology or harm", "Cohort study; case-control if the outcome is rare", "Comparable groups, exposure and outcome measured the same way, confounders addressed"],
        ["Frequency or burden", "Cross-sectional survey with random sampling", "Representative sample, adequate response rate, defined denominator"],
        ["Patient experience", "Qualitative study", "Sampling strategy, data saturation, reflexivity, triangulation, audit trail"],
      ],
    },
    {
      heading: "Treatment effect measures from a worked trial (CER 20%, EER 15%)",
      columns: ["Measure", "Formula", "Value"],
      rows: [
        ["Relative risk", "EER / CER", "0.15 / 0.20 = 0.75"],
        ["Relative risk reduction", "(CER - EER) / CER", "0.05 / 0.20 = 25%"],
        ["Absolute risk reduction", "CER - EER", "20% - 15% = 5%"],
        ["Number needed to treat", "1 / ARR", "1 / 0.05 = 20 patients for the trial duration"],
        ["Number needed to harm", "1 / absolute risk increase", "If harm rises from 1% to 3%, NNH = 1 / 0.02 = 50"],
      ],
    },
  ],
  redFlags: [
    "A trial result being applied to a patient who cannot give valid consent - assess capacity formally and involve the nominated representative under the Mental Healthcare Act 2017; never enrol or switch such a patient on your own judgement.",
    "A patient or family asking you to help them join, or to continue, an unregistered trial, an unapproved stem cell or 'immunotherapy' treatment, or an off-label use with no evidence - refer to the institutional ethics committee and the treating specialist rather than counselling alone, and document the advice given.",
    "Evidence used to withdraw or withhold a treatment the patient wants - decisions to stop dialysis, ventilation, feeding or chemotherapy are never a solo primary care decision; they require the treating team, documented capacity assessment and family discussion.",
    "A screening or research activity in the practice that uncovers a notifiable disease - tuberculosis, HIV, measles, dengue, cholera, diphtheria or acute flaccid paralysis - notification through IHIP/IDSP and Nikshay is a legal obligation that overrides any study protocol or promise of anonymity given to the participant.",
    "Any appraisal exercise that becomes a change of a hospital or practice protocol - do not implement it alone; changes to a standard treatment protocol need departmental agreement, documentation and a re-audit plan, because an undocumented deviation is medico-legally indefensible if harm follows.",
    "A drug promotion or sponsored 'guideline' that names a surrogate outcome, quotes only relative risk reduction, or reports a subgroup as the main result - do not change prescribing on it; check the primary publication, the registration record and the conflict of interest statement first.",
  ],
  pearls: [
    "Open every EBM answer with Sackett's 1996 sentence, then the three-legged stool of best evidence, clinical expertise and patient values - the third leg is where most candidates lose the mark.",
    "Sensitivity and specificity are properties of the test; predictive values belong to the population. That single sentence answers a large family of MCQs.",
    "SnNout and SpPin: sensitive test negative rules out, specific test positive rules in.",
    "Likelihood ratios are the appraisal statistic to quote because they are prevalence-independent: LR+ above 10 or LR- below 0.1 is a conclusive change in probability.",
    "Always convert a relative risk reduction into an absolute risk reduction and an NNT before you counsel a patient, and always state the NNT with its outcome and its time period.",
    "Allocation concealment, not blinding, is the item most strongly associated with exaggerated treatment effects - say it explicitly in the appraisal answer.",
    "On a forest plot the diamond is the pooled estimate and the vertical line is no effect; if the diamond touches the line, the pooled result is not significant.",
  ],
  theory: [
    {
      id: "fm-principles-ebm-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Define evidence-based medicine. Describe its steps, frame a clinical question using PICO, and outline how you would critically appraise a randomised controlled trial of a new antihypertensive drug before using it in your practice.",
      openingLines: [
        "Evidence-based medicine is the conscientious, explicit and judicious use of current best evidence in making decisions about the care of individual patients (Sackett, BMJ 1996), integrating individual clinical expertise with the best available external evidence and with the patient's values and circumstances.",
        "It is practised in five steps - ask, acquire, appraise, apply and assess - and the appraisal step asks three questions of any trial: is it valid, is it important, and is it applicable to my patient?",
      ],
      answer: [
        {
          heading: "1. Definition and components",
          points: [
            "Sackett's definition quoted verbatim.",
            "Three components: best research evidence, clinical expertise, patient values and circumstances.",
            "EBM is not cookbook medicine and not a cost-containment tool; the fourth step exists to individualise.",
          ],
        },
        {
          heading: "2. The five steps",
          points: [
            "Ask an answerable question in PICO format.",
            "Acquire the best evidence efficiently, using pre-appraised sources first (Cochrane, BMJ Best Practice, national guidelines) then PubMed Clinical Queries.",
            "Appraise for validity, importance and applicability.",
            "Apply, integrating patient values, comorbidity, cost and availability.",
            "Assess and audit one's own performance in the preceding four steps.",
          ],
        },
        {
          heading: "3. The PICO question",
          points: [
            "P: adults aged 40-70 with uncomplicated stage 2 hypertension attending a general practice.",
            "I: the new antihypertensive drug at its licensed dose.",
            "C: an established low-cost thiazide or amlodipine regimen.",
            "O: patient-important outcomes - stroke, myocardial infarction, cardiovascular death and treatment withdrawal for adverse effects, over at least 3 years - not the fall in millimetres of mercury, which is a surrogate.",
            "Best design to answer it: a systematic review of RCTs, or a large RCT with hard endpoints.",
          ],
        },
        {
          heading: "4. Appraising the trial - is it valid?",
          points: [
            "Was allocation truly randomised, with a described sequence generation?",
            "Was allocation concealed from the recruiter (central randomisation or sequentially numbered opaque sealed envelopes)? This is the item most associated with exaggerated effects.",
            "Were patients, clinicians and outcome assessors blinded, and was the placebo credible?",
            "Were the groups similar at baseline and treated equally apart from the intervention?",
            "Was follow-up complete, was attrition below 20%, and was the analysis by intention to treat?",
            "Was the outcome pre-specified, patient-important and not a composite dominated by a soft component? Was the trial registered (CTRI or ClinicalTrials.gov) and reported to CONSORT 2010?",
          ],
        },
        {
          heading: "5. Is it important, and is it applicable?",
          points: [
            "Calculate CER, EER, RR, RRR, ARR and NNT with the outcome and the time period stated; examine the width of the 95% confidence interval for precision.",
            "Was the trial stopped early for benefit, and was the effect driven by a subgroup or a post-hoc analysis?",
            "Applicability: is my patient like the trial population in age, comorbidity, baseline risk and concomitant drugs? Is the drug available, affordable and monitorable in my setting?",
            "Are the benefits worth the harms, the cost and the burden to this patient, and what does the patient value?",
            "Check funding source and conflicts of interest before changing practice; a single trial rarely justifies replacing a proven, cheap first-line drug.",
          ],
        },
      ],
      mustDraw: [
        "A five-step EBM cycle diagram (ask, acquire, appraise, apply, assess).",
        "A PICO table with the four rows filled in for this question.",
        "A 2x2 outcome table with CER, EER, ARR, RRR and NNT worked out beside it.",
      ],
      markSplit: [
        { part: "Definition and the three components", marks: 2 },
        { part: "Five steps of EBM", marks: 2 },
        { part: "PICO question correctly framed with a patient-important outcome", marks: 2 },
        { part: "Validity appraisal of the RCT", marks: 3 },
        { part: "Importance and applicability, with NNT", marks: 1 },
      ],
      keywords: ["evidence-based medicine", "Sackett", "PICO", "critical appraisal", "intention to treat", "NNT"],
    },
    {
      id: "fm-principles-ebm-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question:
        "Short note: sensitivity, specificity, predictive values and likelihood ratios, with their relevance to a screening test used in general practice.",
      openingLines: [
        "The performance of a diagnostic or screening test is derived from a 2x2 table comparing the test result against a reference standard in a defined population.",
        "Sensitivity and specificity are properties of the test and do not vary with prevalence; predictive values describe the population being tested and vary steeply with it, which is why likelihood ratios are the most transferable statistics.",
      ],
      answer: [
        {
          heading: "1. The 2x2 table and the definitions",
          points: [
            "a true positive, b false positive, c false negative, d true negative.",
            "Sensitivity = a/(a+c): proportion of diseased who test positive.",
            "Specificity = d/(b+d): proportion of non-diseased who test negative.",
            "Positive predictive value = a/(a+b); negative predictive value = d/(c+d).",
            "Accuracy = (a+d)/total; prevalence = (a+c)/total.",
          ],
        },
        {
          heading: "2. Likelihood ratios and post-test probability",
          points: [
            "LR+ = sensitivity / (1 - specificity); LR- = (1 - sensitivity) / specificity.",
            "Prevalence-independent, and convert pre-test to post-test probability using Fagan's nomogram or the odds method.",
            "LR+ above 10 or LR- below 0.1 gives a large, often conclusive change in probability; values near 1 are useless.",
          ],
        },
        {
          heading: "3. SnNout, SpPin and the trade-off",
          points: [
            "A sensitive test, when negative, rules out; a specific test, when positive, rules in.",
            "Moving the cut-off increases one at the expense of the other; the ROC curve plots sensitivity against 1 - specificity across all cut-offs, and the area under it summarises overall discrimination.",
            "Screening uses sensitive tests first and confirms with specific tests, because a missed case is worse than a temporary false alarm.",
          ],
        },
        {
          heading: "4. Relevance in general practice",
          points: [
            "Low prevalence in primary care means low positive predictive value: most positives from indiscriminate testing are false positives.",
            "False positives cause anxiety, further invasive tests, cost and labelling; false negatives cause false reassurance.",
            "Screening must additionally satisfy the Wilson and Jungner criteria, not merely have a good test.",
            "Worked illustration: with 90% sensitivity, 80% specificity and 10% prevalence, PPV is only 33% - two of every three positives are false.",
          ],
        },
      ],
      mustDraw: [
        "The 2x2 table with a, b, c, d labelled and all formulae written beside it.",
        "A worked example with real numbers showing PPV falling as prevalence falls.",
        "A simple ROC curve with the diagonal line of no discrimination.",
      ],
      markSplit: [
        { part: "2x2 table with sensitivity and specificity defined", marks: 2 },
        { part: "Predictive values and their dependence on prevalence", marks: 1 },
        { part: "Likelihood ratios and post-test probability", marks: 1 },
        { part: "Application to screening in general practice", marks: 1 },
      ],
      keywords: ["sensitivity", "specificity", "predictive value", "likelihood ratio", "ROC curve", "screening"],
    },
  ],
  mcqs: [
    {
      id: "fm-principles-ebm-q1",
      stem: "A new test for a disease with a prevalence of 10% is applied to 1000 people. It correctly identifies 90 of the 100 with the disease and correctly excludes 720 of the 900 without it. What are the sensitivity and the positive predictive value?",
      options: [
        "Sensitivity 90%, PPV 90%",
        "Sensitivity 90%, PPV 33%",
        "Sensitivity 80%, PPV 33%",
        "Sensitivity 33%, PPV 90%",
      ],
      answer: 1,
      explanation:
        "The 2x2 table is a = 90, c = 10, d = 720, b = 900 - 720 = 180. Sensitivity = a/(a+c) = 90/100 = 90%. Total positives = a + b = 90 + 180 = 270, so PPV = a/(a+b) = 90/270 = 33%. Specificity is 720/900 = 80%, which is the number offered in the third option as a distractor for sensitivity. The key teaching point is that a test with excellent sensitivity and good specificity still has a low predictive value when prevalence is low, so two of every three positives here are false positives.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-ebm-q2",
      stem: "In a trial, the event rate was 20% in the control group and 15% in the treated group. What is the number needed to treat?",
      options: [
        "4",
        "5",
        "20",
        "25",
      ],
      answer: 2,
      explanation:
        "Absolute risk reduction = CER - EER = 20% - 15% = 5% = 0.05, and NNT = 1/ARR = 1/0.05 = 20 patients treated for the duration of the trial to prevent one event. The relative risk reduction is (0.20 - 0.15)/0.20 = 25%, which is the fourth option and the classic trap - candidates who compute the RRR and then invert something get 4 or 25. Always quote the NNT with the outcome and the time period, since an NNT of 20 over 5 years is a very different proposition from an NNT of 20 over 6 weeks.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-ebm-q3",
      stem: "Which feature of a randomised controlled trial is most strongly associated with exaggerated estimates of treatment effect when it is inadequate?",
      options: [
        "Inadequate sample size calculation",
        "Inadequate allocation concealment",
        "Absence of a placebo run-in period",
        "Failure to report the funding source",
      ],
      answer: 1,
      explanation:
        "Empirical meta-epidemiological studies (Schulz and colleagues) showed that trials with inadequate or unclear allocation concealment yield treatment effects exaggerated by around 30-40%, making it the item most strongly linked to bias; it is distinct from blinding, because concealment protects the moment of allocation while blinding protects what happens afterwards. An inadequate sample size produces imprecision rather than systematic bias, a placebo run-in affects generalisability rather than internal validity, and undeclared funding is a serious reporting failure but is not itself the mechanism of the exaggeration.",
      difficulty: "hard",
    },
    {
      id: "fm-principles-ebm-q4",
      stem: "On a forest plot of a meta-analysis of eight trials, the diamond at the foot of the plot crosses the vertical line of no effect and the reported I-squared is 82%. The correct interpretation is:",
      options: [
        "The pooled effect is statistically significant and the studies are consistent",
        "The pooled effect is not statistically significant and there is considerable heterogeneity between studies",
        "The pooled effect is significant but underpowered, and I-squared of 82% indicates publication bias",
        "The diamond crossing the line indicates a fixed-effect model was used incorrectly",
      ],
      answer: 1,
      explanation:
        "The diamond represents the pooled estimate with its 95% confidence interval; if it crosses the vertical line of no effect (1 for ratio measures, 0 for difference measures), the pooled result is not statistically significant. I-squared estimates the proportion of variability due to between-study heterogeneity rather than chance, and 75-100% is conventionally described as considerable heterogeneity, which calls for a random-effects model, subgroup or sensitivity analysis, or a decision not to pool at all. Publication bias is assessed by a funnel plot, not by I-squared, and the choice of model is not signalled by where the diamond sits.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-ebm-q5",
      stem: "According to the Oxford CEBM hierarchy, a well-conducted individual cohort study provides which level of evidence, and supports which grade of recommendation?",
      options: [
        "Level 1, grade A",
        "Level 2, grade B",
        "Level 3, grade C",
        "Level 4, grade D",
      ],
      answer: 1,
      explanation:
        "In the Oxford hierarchy level 1 is a systematic review of RCTs or an individual RCT with a narrow confidence interval, level 2 covers cohort studies and low-quality RCTs, level 3 case-control studies, level 4 case series and poor-quality observational studies, and level 5 expert opinion or bench reasoning. Grades follow: A from consistent level 1, B from consistent level 2 or 3, C from level 4, D from level 5 or inconsistent evidence. Remember to add that the hierarchy is a presumption rather than a rule, and that GRADE now formalises upgrading and downgrading for effect size, bias, indirectness, imprecision and publication bias.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "fm-principles-ebm-c1",
      front: "Sackett's definition of evidence-based medicine.",
      back: "The conscientious, explicit and judicious use of current best evidence in making decisions about the care of individual patients (BMJ 1996), integrating individual clinical expertise with the best available external evidence and the patient's values.",
    },
    {
      id: "fm-principles-ebm-c2",
      front: "The five steps of EBM.",
      back: "Ask a focused PICO question; Acquire the best evidence; Appraise it for validity, importance and applicability; Apply it with the patient; Assess or audit your own performance.",
    },
    {
      id: "fm-principles-ebm-c3",
      front: "Expand PICO and say what makes a good O.",
      back: "Patient or problem, Intervention, Comparison, Outcome (add T for time or type of study). The outcome must be patient-important - stroke, death, admission - not a surrogate such as a lipid level or a bone density.",
    },
    {
      id: "fm-principles-ebm-c4",
      front: "Formulae for sensitivity, specificity, PPV and NPV.",
      back: "Sensitivity = a/(a+c); specificity = d/(b+d); PPV = a/(a+b); NPV = d/(c+d), where a = true positive, b = false positive, c = false negative, d = true negative. Sensitivity and specificity are prevalence-independent; predictive values are not.",
    },
    {
      id: "fm-principles-ebm-c5",
      front: "Likelihood ratio formulae and their interpretation thresholds.",
      back: "LR+ = sensitivity/(1 - specificity); LR- = (1 - sensitivity)/specificity. LR+ over 10 or LR- under 0.1 gives a large, usually conclusive change in probability; 5-10 and 0.1-0.2 moderate; 2-5 and 0.2-0.5 small; near 1 negligible.",
    },
    {
      id: "fm-principles-ebm-c6",
      front: "RR, RRR, ARR and NNT from CER and EER.",
      back: "RR = EER/CER; RRR = (CER - EER)/CER; ARR = CER - EER; NNT = 1/ARR, rounded up and quoted with the outcome and the time period. NNH = 1/absolute risk increase.",
    },
    {
      id: "fm-principles-ebm-c7",
      front: "Why is intention-to-treat analysis preferred?",
      back: "It analyses patients in the groups to which they were randomised, preserving the balance that randomisation created; it gives the more conservative and more realistic estimate, whereas per-protocol analysis reintroduces selection bias.",
    },
    {
      id: "fm-principles-ebm-c8",
      front: "How do you read a forest plot?",
      back: "Each line is a study: the square is its point estimate with area proportional to weight, the line is its 95% CI. The vertical line is no effect (1 for ratios, 0 for differences). The diamond is the pooled estimate; if it crosses the line the pooled result is not significant.",
    },
    {
      id: "fm-principles-ebm-c9",
      front: "I-squared bands for heterogeneity.",
      back: "0-40% may not be important; 30-60% moderate; 50-90% substantial; 75-100% considerable. Substantial heterogeneity calls for a random-effects model, subgroup analysis, or not pooling at all. Publication bias is assessed with a funnel plot.",
    },
    {
      id: "fm-principles-ebm-c10",
      front: "Level of evidence versus grade of recommendation.",
      back: "The level describes the study design and quality (Oxford levels 1 to 5); the grade describes what to do about it (A to D). GRADE gives four certainty levels - high, moderate, low, very low - and only two recommendation strengths, strong and conditional.",
    },
  ],
  references: [
    "Sackett DL, Rosenberg WMC, Gray JAM, Haynes RB, Richardson WS. Evidence based medicine: what it is and what it isn't. BMJ 1996;312:71-72",
    "Straus SE, Glasziou P, Richardson WS, Haynes RB. Evidence-Based Medicine: How to Practice and Teach It, 5th edition, Elsevier, 2019",
    "Oxford Centre for Evidence-Based Medicine. Levels of Evidence (2011 update) and the 2009 levels with grades of recommendation",
    "Guyatt GH et al. GRADE guidelines series. Journal of Clinical Epidemiology, 2011 onwards",
    "Schulz KF, Altman DG, Moher D. CONSORT 2010 statement: updated guidelines for reporting parallel group randomised trials. BMJ 2010;340:c332",
    "Page MJ et al. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ 2021;372:n71",
    "Higgins JPT, Thomas J et al (eds). Cochrane Handbook for Systematic Reviews of Interventions, version 6.4, Cochrane, 2023",
    "Greenhalgh T. How to Read a Paper: The Basics of Evidence-Based Medicine and Healthcare, 6th edition, Wiley-Blackwell, 2019",
  ],
});

topics.push({
  id: "fm-principles-research-thesis",
  title: "Research methodology, the DNB thesis and telemedicine practice",
  oneLiner:
    "Research methodology is the systematic process of choosing a design that fits the question, sampling a population without bias, controlling confounding, calculating an adequate sample size, obtaining ethics committee approval and valid informed consent, and reporting the work honestly in a protocol and thesis - and in contemporary Indian family practice it now extends to consulting within the Telemedicine Practice Guidelines of 2020.",
  frequency: "less-common",
  keywords: [
    "research methodology",
    "study design",
    "cross-sectional study",
    "cohort study",
    "case-control study",
    "randomised controlled trial",
    "sampling",
    "simple random sampling",
    "stratified sampling",
    "cluster sampling",
    "selection bias",
    "information bias",
    "recall bias",
    "confounding",
    "sample size",
    "power",
    "type I error",
    "type II error",
    "institutional ethics committee",
    "ICMR guidelines",
    "informed consent",
    "Declaration of Helsinki",
    "plagiarism",
    "protocol writing",
    "thesis",
    "IMRAD",
    "CTRI",
    "telemedicine",
    "Telemedicine Practice Guidelines 2020",
  ],
  sections: [
    {
      heading: "Choosing the design",
      points: [
        "Research is first divided into **descriptive studies** (which describe distribution - case report, case series, cross-sectional survey, ecological study) and **analytical studies** (which test an association or a hypothesis), and analytical studies into **observational** (case-control, cohort) and **experimental or interventional** (randomised controlled trial, community trial, field trial).",
        "**Cross-sectional study:** exposure and outcome measured at the same point, so it gives **prevalence** and is quick, cheap and useful for planning services; its weakness is that **temporality cannot be established**, so it generates hypotheses rather than proving causation. Most DNB family medicine theses are cross-sectional for this reason.",
        "**Case-control study:** starts from the outcome and looks backwards at exposure, gives an **odds ratio**, is **efficient for rare diseases and long latent periods**, needs fewer subjects and less time, but is vulnerable to **recall bias and to the choice of controls**, and cannot give incidence.",
        "**Cohort study:** starts from the exposure and follows forward to the outcome, gives **incidence, relative risk and attributable risk**, establishes temporality and can study multiple outcomes of one exposure, but is expensive, slow, needs large numbers and suffers **loss to follow-up**; it is **efficient for rare exposures** and can be prospective, retrospective (historical) or ambidirectional.",
        "**Randomised controlled trial** is the strongest design for a therapeutic question because randomisation balances known and unknown confounders; variants include parallel group, crossover (for stable chronic conditions), factorial, cluster-randomised (randomising villages or clinics, which requires adjustment for the design effect) and non-inferiority designs.",
        "**Qualitative research** - in-depth interviews, focus group discussions of 6 to 12 participants, participant observation - answers questions of meaning, experience and barriers, and is analysed by thematic or content analysis with sampling continued to **data saturation**; mixed-methods designs combine it with a survey and are increasingly used in family medicine theses.",
      ],
    },
    {
      heading: "Sampling, sample size and errors",
      points: [
        "Define the **reference population, the study population, the sampling frame and the sampling unit** before choosing a method; the commonest thesis error is a sampling frame that silently excludes the people the question is about.",
        "**Probability sampling** allows generalisation and includes **simple random** (lottery or random number table), **systematic** (every kth unit after a random start, which fails if the list has a periodicity), **stratified** (divide into homogeneous strata and sample within each - increases precision, best when strata differ), **cluster** (sample intact groups such as villages or wards - cheapest in the field but least precise, requiring a design effect and hence a larger sample), and **multistage** sampling as used in the National Family Health Survey.",
        "**Non-probability sampling** - convenience, purposive, quota and snowball - does not permit statistical generalisation but is legitimate and often preferable in qualitative work; snowball sampling is the practical method for hidden populations such as people who inject drugs.",
        "**Sample size for estimating a proportion with absolute precision: n = Z squared x p x q / d squared**, which at 95% confidence (Z = 1.96, taken as 2) simplifies to **n = 4pq/d squared**, where p is the anticipated prevalence in percent, q is 100 - p and d is the absolute precision in percentage points; for **relative precision** substitute d with the fraction of p. Adjust for a **finite population, the design effect in cluster sampling, and an expected non-response or dropout rate (usually adding 10-20%)**.",
        "For **comparing two groups**, sample size depends on the **level of significance (alpha, conventionally 0.05), the power (1 - beta, conventionally 80% or 90%), the expected difference or effect size, and the variability (standard deviation or the two proportions)**; the smaller the difference you wish to detect, the larger the sample - a doubling of precision costs a quadrupling of sample.",
        "**Type I (alpha) error is rejecting a true null hypothesis - a false positive; type II (beta) error is failing to reject a false null hypothesis - a false negative. Power = 1 - beta**, and an underpowered study is not a neutral result but an unethical one, since patients were exposed to research that could not answer its question.",
      ],
    },
    {
      heading: "Bias and confounding",
      points: [
        "**Bias is any systematic error in design, conduct or analysis that produces an estimate systematically different from the truth**; unlike random error it is not reduced by increasing the sample size, and once present it usually cannot be corrected in analysis.",
        "**Selection bias** arises when those studied differ systematically from those not studied - **Berkson's (admission rate) bias** in hospital-based case-control studies, **Neyman's (prevalence-incidence) bias** when rapidly fatal or rapidly resolving cases are missed, **healthy worker effect**, non-response bias and loss to follow-up bias.",
        "**Information (measurement) bias** arises from how data are collected - **recall bias** (cases remember exposures better than controls), **interviewer bias**, **observer bias**, **social desirability bias** in questions about alcohol, tobacco or sexual behaviour, and **misclassification**, which is **non-differential** (biasing towards the null) or **differential** (biasing in either direction).",
        "Bias is controlled by **design**: a clearly defined and consistently applied case definition, appropriate controls, standardised and validated instruments, calibrated equipment, trained and blinded observers, blinding of participants and assessors, and a high response rate with follow-up of defaulters.",
        "**Confounding is a distortion of the exposure-outcome association by a third variable that is independently associated with the exposure and is an independent risk factor for the outcome, and is not on the causal pathway between them** - the classic example being age or smoking in a study of alcohol and lung cancer.",
        "Confounding is controlled **in the design by randomisation, restriction and matching**, and **in the analysis by stratification (Mantel-Haenszel), standardisation and multivariable regression**; randomisation is unique in that it also balances **unknown and unmeasured** confounders, which is why it sits at the top of the hierarchy.",
      ],
    },
    {
      heading: "Ethics, the ethics committee and informed consent",
      points: [
        "The framework runs from the **Nuremberg Code (1947)**, through the **Declaration of Helsinki (WMA 1964, last revised 2013)** and the **Belmont Report (1979)**, to the **ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017)** and, for drug trials, the **New Drugs and Clinical Trials Rules 2019** with registration of the ethics committee with the CDSCO.",
        "The four principles - **autonomy, beneficence, non-maleficence and justice** - are expanded by the ICMR into **essentiality, voluntariness, non-exploitation, privacy and confidentiality, precaution and risk minimisation, professional competence, accountability and transparency, the maximisation of benefit, institutional arrangements, public domain, totality of responsibility, and environmental protection**.",
        "**Every study on human participants, including a record review or a questionnaire survey, must have prior written approval from a registered Institutional Ethics Committee** before a single participant is recruited. The IEC has **at least seven members** including a chairperson from outside the institution, a member secretary, a basic medical scientist, clinicians, a legal expert, a social scientist or philosopher or representative of a non-governmental organisation, and a **lay person**, with **both sexes represented** and no more than half of the members from the same institution.",
        "**Informed consent has three elements - information, comprehension and voluntariness** - and must cover the purpose, procedures, duration, foreseeable risks and benefits, alternatives, confidentiality and its limits, compensation for research-related injury, the right to refuse or withdraw at any time without loss of usual care, and the contact details of the investigator and the ethics committee. It is documented on a **participant information sheet in the local language plus a signed or thumb-impressed consent form, with an impartial witness for an illiterate participant**.",
        "**Vulnerable groups** - children (assent from age 7 and consent from the parent or guardian, with the participant's own consent at 18), pregnant women, prisoners, persons with mental illness or cognitive impairment, the economically or socially disadvantaged, students and employees of the investigator - require additional safeguards and justification for their inclusion; **capacity must be formally assessed, and a legally acceptable representative used where it is absent**.",
        "**Confidentiality, anonymisation, data storage plans, conflict of interest declarations and a plan for compensation for research-related injury** must all be in the protocol; **trial registration with the Clinical Trials Registry - India (CTRI) is mandatory before enrolment of the first participant**, and most journals will not publish an unregistered trial.",
      ],
    },
    {
      heading: "The protocol, the thesis and academic integrity",
      points: [
        "**NBEMS requires a thesis protocol to be submitted within a defined window of joining (broadly the first six months) and the completed thesis by the prescribed date, and acceptance of the thesis is a precondition for being allowed to sit the final examination** - so the thesis is best treated as a scheduling problem as much as a scientific one.",
        "**Protocol structure:** title; introduction and rationale; review of literature; aims and objectives written as one primary and a few specific measurable objectives; methodology (study design, setting, study period, study population, inclusion and exclusion criteria, sample size with the formula and its assumptions, sampling technique, study tools with their validation, data collection procedure, operational definitions, statistical analysis plan); ethical considerations and consent; budget; timeline as a Gantt chart; references in a consistent style; and annexures with the proforma, the participant information sheet and the consent form.",
        "**Write objectives as verbs that can be measured** - to estimate, to compare, to determine, to assess association - and never as 'to study', which cannot be assessed; the objectives, the tools, the analysis plan and the tables of the thesis must all correspond one to one.",
        "**Thesis structure follows IMRAD:** Introduction (why), Materials and Methods (how), Results (what was found, in tables and figures without interpretation), and Discussion (what it means, compared with the published literature, with limitations stated honestly and a conclusion that answers the objectives), preceded by the title page, certificates, declaration, acknowledgements, contents, abbreviations and abstract, and followed by references, annexures and the master chart.",
        "**Plagiarism is the use of another's work, words, ideas or data without appropriate attribution**, and includes self-plagiarism, mosaic or patchwork paraphrasing, cut-and-paste from a source without quotation, and fabricated references. The **UGC (Promotion of Academic Integrity and Prevention of Plagiarism) Regulations 2018** grade similarity as **level 0 up to 10% (no penalty), level 1 above 10 to 40%, level 2 above 40 to 60% and level 3 above 60%**, with escalating penalties up to withdrawal of the degree; institutions run submissions through similarity software, and the defence is to **read, understand, write in your own words and cite everything**.",
        "**Authorship follows the four ICMJE criteria - substantial contribution to conception or design or to acquisition, analysis or interpretation; drafting or critical revision; final approval; and accountability for all aspects** - and gift, guest and ghost authorship are misconduct. Report the finished work using the appropriate reporting guideline: **CONSORT for trials, STROBE for observational studies, PRISMA for systematic reviews, STARD for diagnostic accuracy, COREQ for qualitative research**.",
      ],
    },
    {
      heading: "Telemedicine Practice Guidelines, India 2020",
      points: [
        "The **Telemedicine Practice Guidelines were notified on 25 March 2020** by the Board of Governors in supersession of the Medical Council of India with NITI Aayog, and were **appended to the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations 2002 as Regulation 3.8 (Appendix 5)**, making them legally binding on every registered medical practitioner in India.",
        "They apply to **a registered medical practitioner registered under the National Medical Commission Act or the erstwhile IMC Act**, and cover consultations by **video, audio or text (chat, images, messaging, email, fax)**, between **patient and RMP, caregiver and RMP, health worker and RMP, or RMP and RMP**. They **exclude** research, the use of digital technology to conduct surgery remotely, hard prescriptive protocols and specifications of hardware.",
        "**Consent:** it is **implied when the patient initiates** the teleconsultation, and **explicit consent must be recorded when the health worker, the caregiver or the RMP initiates** it; the RMP must confirm the patient's identity and their own, must give their **registration number on every prescription**, and must **maintain records including the log of the consultation, the patient records and the prescription** exactly as for an in-person consultation.",
        "**Prescribing is restricted by four lists: List O** - over-the-counter drugs safe to prescribe by any mode (paracetamol, oral rehydration solution, lozenges, antiseptics and similar); **List A** - drugs that may be prescribed at a **first consultation only if it is by video**, or as a refill at follow-up (for example ORS-plus items, oral antihistamines, topical antifungals as listed); **List B** - an add-on list that may be prescribed **only at a follow-up teleconsultation** for a condition already diagnosed in person; and a **Prohibited list** - drugs in **Schedule X of the Drugs and Cosmetics Rules and those under the Narcotic Drugs and Psychotropic Substances Act**, which may never be prescribed by telemedicine.",
        "**The RMP must exercise professional judgement about whether a teleconsultation is appropriate at all, and must not proceed if a physical examination is essential**; in an **emergency the role is limited to first aid, life-saving advice, counselling and facilitating referral**, and the patient must be advised to attend in person at the earliest.",
        "Practitioners were required to **complete the mandatory online course on telemedicine within three years of notification**, must not misuse patient images or data, must not use telemedicine to advertise or solicit, and remain **fully accountable under the same standard of care as an in-person consultation** - the guideline reduces neither the duty of care nor the medico-legal exposure.",
      ],
    },
  ],
  tables: [
    {
      heading: "Observational study designs compared",
      columns: ["Feature", "Cross-sectional", "Case-control", "Cohort"],
      rows: [
        ["Starting point", "Exposure and outcome measured together", "Starts with the outcome (cases and controls)", "Starts with the exposure"],
        ["Measure obtained", "Prevalence, prevalence ratio", "Odds ratio", "Incidence, relative risk, attributable risk"],
        ["Temporality", "Cannot be established", "Backward, inferred", "Established prospectively"],
        ["Best suited to", "Estimating burden, planning services", "Rare diseases, long latency, multiple exposures", "Rare exposures, multiple outcomes, incidence"],
        ["Main weakness", "No causal inference; reverse causality", "Recall bias, control selection, no incidence", "Cost, time, loss to follow-up"],
        ["Typical DNB thesis use", "Commonest design used", "Occasionally used for risk factor studies", "Rarely feasible within the thesis timeline"],
      ],
    },
    {
      heading: "Bias: type, example and how it is controlled",
      columns: ["Type of bias", "Example", "Control"],
      rows: [
        ["Selection - Berkson's", "Hospital controls have different admission probabilities from the community", "Use community controls or multiple control groups"],
        ["Selection - Neyman's", "Rapidly fatal cases never reach a prevalence survey", "Use incident rather than prevalent cases"],
        ["Non-response and attrition", "Defaulters differ systematically from attenders", "Maximise response, follow up defaulters, compare responders with non-responders"],
        ["Recall bias", "Mothers of malformed babies recall drug exposure better", "Use records or objective exposure measures; blind the interviewer"],
        ["Interviewer and observer bias", "Knowing the group influences how a reading is taken", "Blinding, standardised protocol, calibrated instruments, automated readings"],
        ["Confounding", "Age confounds the relation between grey hair and myocardial infarction", "Randomisation, restriction, matching, stratification, multivariable regression"],
      ],
    },
    {
      heading: "Sample size formulae worth reproducing",
      columns: ["Purpose", "Formula", "Worked example"],
      rows: [
        ["Estimating a proportion, absolute precision", "n = Z squared x p x q / d squared, that is 4pq/d squared at 95% confidence", "p = 20%, q = 80%, d = 5%: n = 4 x 20 x 80 / 25 = 256"],
        ["Estimating a proportion, relative precision", "Replace d with the chosen fraction of p", "p = 20%, relative precision 20% means d = 4: n = 4 x 20 x 80 / 16 = 400"],
        ["Estimating a mean", "n = Z squared x SD squared / d squared", "SD = 10, d = 2: n = 4 x 100 / 4 = 100"],
        ["Adjustments", "Add for non-response; multiply by the design effect for cluster sampling; apply a finite population correction", "256 with 10% non-response becomes about 285"],
      ],
    },
    {
      heading: "Telemedicine Practice Guidelines 2020: prescribing lists",
      columns: ["List", "What it contains", "When it may be prescribed"],
      rows: [
        ["List O", "Over-the-counter medicines - paracetamol, ORS, lozenges, antiseptics and similar", "Any mode of teleconsultation, including audio and text"],
        ["List A", "Relatively safe medicines with a low potential for abuse", "First consultation only if by video, or as a refill at follow-up"],
        ["List B", "Add-on medicines for a condition already diagnosed in person", "Follow-up teleconsultation only"],
        ["Prohibited list", "Schedule X drugs and drugs under the NDPS Act", "Never by telemedicine, by any mode"],
      ],
    },
  ],
  redFlags: [
    "Recruiting a participant who cannot give valid consent - a child, a person with cognitive impairment, an unconscious patient, or anyone whose capacity is doubtful - without formal capacity assessment, assent where applicable, and consent from a legally acceptable representative; never take a thumb impression from an illiterate participant without an impartial witness.",
    "A research participant or teleconsultation patient who discloses child sexual abuse, domestic violence or a threat of self-harm - confidentiality is not absolute; POCSO 2012 reporting is mandatory, a same-day safety plan is required, and this is escalated to a senior, never carried alone or deferred to the end of the study.",
    "A notifiable disease detected during a survey or teleconsultation - tuberculosis, HIV, measles, dengue, cholera, diphtheria, acute flaccid paralysis - must be notified through IHIP/IDSP and Nikshay; no protocol, consent form or promise of anonymity overrides a statutory notification duty.",
    "A serious adverse event, or any research-related injury or death - report to the ethics committee and the sponsor within the prescribed timeline (24 hours for a death, with the detailed report to follow), and never manage or conceal it within the study team; compensation obligations follow under the New Drugs and Clinical Trials Rules 2019.",
    "A teleconsultation where a physical examination is essential, where the patient is deteriorating, or which is an emergency - the RMP must limit themselves to first aid, life-saving advice, counselling and facilitating referral, and must insist on an in-person visit; proceeding to prescribe is medico-legally indefensible.",
    "Any request to prescribe a Schedule X drug, a narcotic or a psychotropic by teleconsultation, or to backdate or issue a prescription without a consultation - it is prohibited under the Telemedicine Practice Guidelines and is professional misconduct, whatever the relationship with the patient or the pressure applied.",
    "Data or authorship irregularity - being offered authorship on a paper you did not contribute to, being asked to add a name, or discovering fabricated data or a plagiarised section - stop and take it to the guide and the institution rather than settling it privately.",
  ],
  pearls: [
    "Case-control is efficient for rare diseases; cohort is efficient for rare exposures. Examiners ask this pair almost every year.",
    "Bias is systematic error and is not reduced by a larger sample; random error is, which is why the answer to a wide confidence interval is more subjects but the answer to bias is a better design.",
    "A confounder must be associated with the exposure, be an independent risk factor for the outcome, and not lie on the causal pathway - state all three conditions to earn the mark.",
    "Randomisation is the only method that controls unknown and unmeasured confounders; every other method controls only what you thought to measure.",
    "Memorise n = 4pq/d squared and be able to substitute numbers into it in under a minute; it is the commonest calculation item in this subject.",
    "Power is 1 - beta, conventionally 80%; an underpowered study is an ethical failure, not merely a statistical one.",
    "Write objectives with measurable verbs - to estimate, to compare, to determine - never 'to study'; the objectives, tools, analysis plan and result tables must map one to one.",
    "The Telemedicine Practice Guidelines 2020 sit in Regulation 3.8 of the 2002 Code of Ethics: consent implied when the patient initiates, explicit when anyone else does, and Schedule X and NDPS drugs are never prescribable.",
  ],
  theory: [
    {
      id: "fm-principles-research-thesis-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "less-common",
      question:
        "You wish to study the prevalence of depression among elderly patients attending your urban family practice. Write the protocol you would submit, covering study design, sampling, sample size calculation, tools, bias, ethical considerations and the analysis plan.",
      openingLines: [
        "A question about the burden of a condition at a point in time is best answered by a descriptive cross-sectional study, since prevalence, not incidence or causation, is the measure required.",
        "The protocol must state the design, setting, period, population, inclusion and exclusion criteria, sample size with its formula and assumptions, sampling technique, validated tools, data collection procedure, statistical plan and ethical safeguards before a single participant is approached.",
      ],
      answer: [
        {
          heading: "1. Title, rationale and objectives",
          points: [
            "Title: prevalence of depression and its associated factors among patients aged 60 years and above attending an urban family practice - a cross-sectional study.",
            "Rationale: depression in the elderly is common, under-detected in primary care, presents somatically, and is treatable; local data are needed to plan screening.",
            "Primary objective: to estimate the prevalence of depression among patients aged 60 and above attending the clinic during the study period.",
            "Secondary objectives: to determine its association with living arrangement, comorbidity, functional dependence and socio-economic status; to describe the proportion already diagnosed and treated.",
          ],
        },
        {
          heading: "2. Design, setting, population and period",
          points: [
            "Descriptive cross-sectional study with an analytical component.",
            "Setting: the outpatient department of an urban family practice or health and wellness centre.",
            "Study period: 12 months, with 6 months of data collection.",
            "Inclusion: age 60 and above, attending during the study period, giving informed consent.",
            "Exclusion: acute medical emergency, significant cognitive impairment precluding interview, known psychosis, and those unwilling to consent.",
          ],
        },
        {
          heading: "3. Sample size and sampling",
          points: [
            "Formula for a proportion with absolute precision: n = Z squared x p x q / d squared, that is 4pq/d squared at 95% confidence.",
            "Assuming p = 20% from previous Indian studies, q = 80% and d = 5%: n = 4 x 20 x 80 / 25 = 256.",
            "Adding 10% for non-response and incomplete forms gives approximately 285, rounded to 300.",
            "Sampling: systematic random sampling of every kth eligible attender after a random start, k derived from the expected attendance; state that consecutive convenience sampling would be an inferior alternative and must be declared as a limitation.",
          ],
        },
        {
          heading: "4. Tools and data collection",
          points: [
            "A pre-tested, semi-structured proforma for sociodemographic data, comorbidity, drugs and living arrangement, with socio-economic status by the modified Kuppuswamy scale.",
            "Depression screened with the Geriatric Depression Scale (GDS-15) or PHQ-9 in a locally validated translation, with a stated cut-off; positive screens confirmed against ICD-10 or DSM-5 criteria by clinical interview.",
            "Functional status by the Barthel Index or Katz ADL; cognition screened with the MMSE or MoCA to apply the exclusion criterion.",
            "Pilot on 20 participants who are then excluded from the main analysis; check internal consistency with Cronbach's alpha; interviews in a private room by a single trained interviewer.",
          ],
        },
        {
          heading: "5. Bias, confounding and the analysis plan",
          points: [
            "Selection bias minimised by systematic random sampling from all eligible attenders, and acknowledged: clinic attenders are not the community elderly.",
            "Information bias minimised by a validated translated tool, a single trained interviewer, privacy, and confirmation of positive screens.",
            "Confounding by age, sex, comorbidity and socio-economic status addressed by multivariable logistic regression.",
            "Analysis: data entered in duplicate in Epi Info or MS Excel, analysed in SPSS or R; prevalence reported as a percentage with a 95% confidence interval; categorical comparisons by chi-square or Fisher's exact test, continuous by t test or Mann-Whitney; adjusted odds ratios from logistic regression; p below 0.05 taken as significant.",
          ],
        },
        {
          heading: "6. Ethical considerations",
          points: [
            "Prior written approval from the registered Institutional Ethics Committee before recruitment begins.",
            "Participant information sheet and written informed consent in the local language, with an impartial witness and thumb impression for illiterate participants.",
            "Voluntariness, right to withdraw without any effect on routine care, privacy and confidentiality with coded data and restricted access.",
            "A prospective plan for participants who screen positive or disclose suicidal ideation: same-day clinical assessment, referral to mental health services and a documented safety plan - a screening study creates a duty of care.",
            "No conflict of interest; funding declared; data retained as per institutional policy; results shared with the department.",
          ],
        },
      ],
      mustDraw: [
        "A protocol skeleton as a numbered list of headings, from title to annexures.",
        "The sample size formula written out with the numbers substituted.",
        "A Gantt chart timeline of the 12 months, and a dummy table for the main result.",
      ],
      markSplit: [
        { part: "Design justification and objectives", marks: 2 },
        { part: "Sample size calculation shown with the formula", marks: 2 },
        { part: "Sampling technique and inclusion or exclusion criteria", marks: 1 },
        { part: "Tools, pilot and data collection", marks: 2 },
        { part: "Bias, confounding and analysis plan", marks: 1 },
        { part: "Ethical considerations including the duty of care to positive screens", marks: 2 },
      ],
      keywords: ["cross-sectional study", "sample size", "systematic random sampling", "ethics committee", "informed consent", "protocol"],
    },
    {
      id: "fm-principles-research-thesis-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "less-common",
      question: "Short note: the Telemedicine Practice Guidelines of India, 2020.",
      openingLines: [
        "The Telemedicine Practice Guidelines were notified on 25 March 2020 by the Board of Governors in supersession of the Medical Council of India, in partnership with NITI Aayog, and were appended to the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations 2002 as Regulation 3.8.",
        "They give legal legitimacy to teleconsultation by a registered medical practitioner while holding it to the same standard of care as an in-person consultation.",
      ],
      answer: [
        {
          heading: "1. Scope and who may practise",
          points: [
            "Applies to every registered medical practitioner registered under the NMC Act or the erstwhile IMC Act.",
            "Modes covered: video, audio, and text including chat, images, messaging, email and fax.",
            "Relationships covered: patient to RMP, caregiver to RMP, health worker to RMP, and RMP to RMP.",
            "Excludes research, remote surgery, hardware specifications and hard prescriptive protocols.",
          ],
        },
        {
          heading: "2. Consent, identification and records",
          points: [
            "Consent is implied when the patient initiates; explicit consent must be recorded when the RMP, caregiver or health worker initiates.",
            "Both parties must be identified; the RMP states name and registration number, which must appear on the prescription.",
            "The RMP maintains the consultation log, patient records, prescriptions and any images, exactly as for an in-person visit.",
            "Fees may be charged as for an in-person consultation, with a receipt.",
          ],
        },
        {
          heading: "3. Prescribing lists",
          points: [
            "List O: over-the-counter drugs, prescribable by any mode.",
            "List A: prescribable at a first consultation only if by video, or as a refill at follow-up.",
            "List B: add-on drugs at a follow-up teleconsultation for a condition already diagnosed in person.",
            "Prohibited list: Schedule X drugs and drugs under the NDPS Act - never prescribable by telemedicine.",
          ],
        },
        {
          heading: "4. Professional judgement, limits and accountability",
          points: [
            "The RMP must decide whether teleconsultation is appropriate, and must not proceed where a physical examination is essential.",
            "In an emergency the role is limited to first aid, life-saving advice, counselling and facilitating referral, with an in-person visit advised at the earliest.",
            "The same standard of care, confidentiality and data protection applies; misuse of patient images or data, and advertising or soliciting through telemedicine, are prohibited.",
            "The mandatory online telemedicine course was to be completed within three years of notification; breaches are dealt with as professional misconduct under the 2002 Regulations.",
          ],
        },
      ],
      mustDraw: [
        "A table of the four prescribing lists against the mode and stage of consultation.",
        "A flow chart: patient initiates or RMP initiates - consent implied or explicit - identification - consultation - prescription within the permitted list - records.",
      ],
      markSplit: [
        { part: "Origin, legal status and scope", marks: 1 },
        { part: "Consent, identification and record keeping", marks: 1 },
        { part: "The four prescribing lists", marks: 2 },
        { part: "Limits, emergencies and accountability", marks: 1 },
      ],
      keywords: ["telemedicine", "Regulation 3.8", "List O", "List A", "List B", "prohibited list", "informed consent"],
    },
  ],
  mcqs: [
    {
      id: "fm-principles-research-thesis-q1",
      stem: "You wish to estimate the prevalence of anaemia in a community where the expected prevalence is 20%, with an absolute precision of 5% at 95% confidence. Using n = 4pq/d squared, what is the required sample size before adjusting for non-response?",
      options: [
        "64",
        "256",
        "400",
        "1600",
      ],
      answer: 1,
      explanation:
        "With p = 20, q = 80 and d = 5: n = 4 x 20 x 80 / 5 squared = 6400/25 = 256. The value 400 is what you get if relative precision of 20% is used instead (d = 4, giving 6400/16 = 400), and 1600 arises from using d = 2. The common error is to confuse absolute precision (5 percentage points, so the estimate lies between 15% and 25%) with relative precision (20% of p, so d = 4). Add 10-20% for non-response, and multiply by the design effect if cluster sampling is used.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-research-thesis-q2",
      stem: "A study design that starts with the outcome and looks backwards at exposure, is efficient for rare diseases, and yields an odds ratio, is:",
      options: [
        "A cross-sectional study",
        "A case-control study",
        "A prospective cohort study",
        "A randomised controlled trial",
      ],
      answer: 1,
      explanation:
        "The case-control design selects cases with the outcome and comparable controls without it, then looks backwards at exposure, so it is efficient in time and numbers for rare diseases and long latent periods and yields an odds ratio. It cannot give incidence and is vulnerable to recall bias and to control selection. The cohort design starts from exposure and gives incidence and relative risk, being efficient for rare exposures rather than rare diseases; a cross-sectional study measures both at once and gives prevalence; an RCT allocates the exposure and is the design for therapeutic questions.",
      difficulty: "easy",
    },
    {
      id: "fm-principles-research-thesis-q3",
      stem: "Which statement about confounding is correct?",
      options: [
        "A confounder lies on the causal pathway between exposure and outcome",
        "A confounder is associated with the exposure and is an independent risk factor for the outcome, and is not on the causal pathway",
        "Confounding is eliminated by increasing the sample size",
        "Confounding can only be controlled in the analysis, never in the design",
      ],
      answer: 1,
      explanation:
        "All three conditions must be stated: the confounder is associated with the exposure, is an independent risk factor for the outcome, and does not lie on the causal pathway - a variable on the causal pathway is a mediator, and adjusting for it would remove part of the very effect being measured. Increasing the sample size reduces random error, not systematic error. Confounding is controlled in the design by randomisation, restriction and matching, and in the analysis by stratification, standardisation and multivariable regression, with randomisation uniquely handling unknown confounders.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-research-thesis-q4",
      stem: "Under the Telemedicine Practice Guidelines 2020, a patient with a previously in-person diagnosis of hypertension contacts you by audio call for a refill of amlodipine. Which statement is correct?",
      options: [
        "No prescription may ever be issued on an audio-only teleconsultation",
        "Explicit written consent must be obtained because the patient initiated the call",
        "A follow-up refill of a listed medicine for a condition already diagnosed in person is permitted, and the prescription must carry your registration number",
        "Schedule X drugs may be prescribed by audio if the patient is known to you",
      ],
      answer: 2,
      explanation:
        "The guidelines permit prescribing at follow-up for a condition already diagnosed in person, within the permitted lists, and every prescription must carry the RMP's name and registration number and be recorded. Audio-only consultations are allowed and are not blanket-barred from prescribing; the video requirement applies to first consultations for List A medicines. Consent is implied when the patient initiates the consultation - explicit consent is required only when the RMP, caregiver or health worker initiates it. Schedule X and NDPS drugs are on the prohibited list and may never be prescribed by telemedicine, however well known the patient is.",
      difficulty: "moderate",
    },
    {
      id: "fm-principles-research-thesis-q5",
      stem: "In a case-control study of congenital malformations, mothers of affected babies remember first-trimester drug exposure more completely than mothers of healthy babies. This is an example of:",
      options: [
        "Berkson's bias",
        "Recall bias",
        "Confounding",
        "Neyman's bias",
      ],
      answer: 1,
      explanation:
        "Recall bias is a form of information bias in which cases and controls differ systematically in the completeness or accuracy with which past exposures are remembered, and it is the classic weakness of retrospective case-control designs; it is minimised by using documented records, objective exposure measures, structured memory aids and blinded interviewers. Berkson's bias is a selection bias arising from differential admission probabilities in hospital-based studies, Neyman's is the prevalence-incidence bias that arises when rapidly fatal or rapidly resolving cases are missed, and confounding is a distortion by a third variable rather than an error of measurement.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "fm-principles-research-thesis-c1",
      front: "Case-control versus cohort: which is efficient for what?",
      back: "Case-control is efficient for rare diseases and long latency and gives an odds ratio; cohort is efficient for rare exposures, gives incidence and relative risk, and establishes temporality.",
    },
    {
      id: "fm-principles-research-thesis-c2",
      front: "Sample size formula for estimating a proportion, and a worked example.",
      back: "n = Z squared x p x q / d squared, that is 4pq/d squared at 95% confidence. With p = 20%, q = 80%, d = 5%: n = 4 x 20 x 80 / 25 = 256; add 10-20% for non-response and multiply by the design effect for cluster sampling.",
    },
    {
      id: "fm-principles-research-thesis-c3",
      front: "Type I error, type II error and power.",
      back: "Type I (alpha) is rejecting a true null hypothesis - a false positive, conventionally set at 0.05. Type II (beta) is failing to reject a false null hypothesis - a false negative. Power = 1 - beta, conventionally 80% or 90%.",
    },
    {
      id: "fm-principles-research-thesis-c4",
      front: "The three conditions that define a confounder.",
      back: "Associated with the exposure; an independent risk factor for the outcome; not on the causal pathway between them. Controlled by randomisation, restriction, matching, stratification and multivariable regression.",
    },
    {
      id: "fm-principles-research-thesis-c5",
      front: "Name the probability sampling methods and their trade-offs.",
      back: "Simple random (unbiased, needs a full frame); systematic (easy, fails with periodicity); stratified (most precise when strata differ); cluster (cheapest in the field, least precise, needs a design effect); multistage (used in large surveys such as NFHS).",
    },
    {
      id: "fm-principles-research-thesis-c6",
      front: "Composition of an Institutional Ethics Committee.",
      back: "At least seven members - chairperson from outside the institution, member secretary, basic medical scientist, clinicians, legal expert, social scientist or philosopher or NGO representative, and a lay person; both sexes represented; not more than half from the same institution.",
    },
    {
      id: "fm-principles-research-thesis-c7",
      front: "The three elements of valid informed consent.",
      back: "Information, comprehension and voluntariness - documented on a participant information sheet in the local language plus a signed or thumb-impressed consent form, with an impartial witness for illiterate participants and the right to withdraw without loss of usual care.",
    },
    {
      id: "fm-principles-research-thesis-c8",
      front: "IMRAD, and the reporting guideline for each design.",
      back: "Introduction, Materials and Methods, Results, and Discussion. CONSORT for trials, STROBE for observational studies, PRISMA for systematic reviews, STARD for diagnostic accuracy and COREQ for qualitative research.",
    },
    {
      id: "fm-principles-research-thesis-c9",
      front: "UGC 2018 plagiarism similarity bands.",
      back: "Level 0 up to 10% - no penalty; level 1 above 10 to 40%; level 2 above 40 to 60%; level 3 above 60% - with escalating penalties up to withdrawal of the degree. Self-plagiarism and mosaic paraphrasing are included.",
    },
    {
      id: "fm-principles-research-thesis-c10",
      front: "Telemedicine Practice Guidelines 2020: date, legal position and consent rule.",
      back: "Notified 25 March 2020 by the BoG in supersession of the MCI with NITI Aayog, appended to the IMC Ethics Regulations 2002 as Regulation 3.8. Consent is implied when the patient initiates and must be explicit when the RMP, caregiver or health worker initiates.",
    },
    {
      id: "fm-principles-research-thesis-c11",
      front: "The four telemedicine prescribing lists.",
      back: "List O - over-the-counter, any mode. List A - first consult only by video, or refill at follow-up. List B - add-on at follow-up for a condition already diagnosed in person. Prohibited - Schedule X and NDPS drugs, never by telemedicine.",
    },
    {
      id: "fm-principles-research-thesis-c12",
      front: "The four ICMJE authorship criteria.",
      back: "Substantial contribution to conception or design or to acquisition, analysis or interpretation; drafting or critical revision for intellectual content; final approval of the version to be published; and accountability for all aspects of the work. All four must be met.",
    },
  ],
  references: [
    "Indian Council of Medical Research. National Ethical Guidelines for Biomedical and Health Research Involving Human Participants, ICMR, 2017",
    "Ministry of Health and Family Welfare, Government of India. New Drugs and Clinical Trials Rules, 2019",
    "Board of Governors in supersession of the Medical Council of India, with NITI Aayog. Telemedicine Practice Guidelines, 25 March 2020 - Appendix 5 to the IMC (Professional Conduct, Etiquette and Ethics) Regulations 2002, Regulation 3.8",
    "World Medical Association. Declaration of Helsinki - Ethical Principles for Medical Research Involving Human Subjects, 2013 revision",
    "University Grants Commission. Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions Regulations, 2018",
    "Park K. Park's Textbook of Preventive and Social Medicine, 27th edition, Bhanot, 2023 - epidemiology and health information chapters",
    "Sundar Rao PSS, Richard J. An Introduction to Biostatistics and Research Methods, 5th edition, PHI Learning, 2012",
    "Gordis L. Epidemiology, 6th edition, Elsevier, 2018",
    "National Board of Examinations in Medical Sciences. Guidelines for Thesis Protocol and Thesis Submission for DNB candidates, NBEMS (current edition)",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "fm-principles-case-1",
    title: "OSCE communication station: explaining a new diagnosis of type 2 diabetes",
    kind: "osce",
    subjectId: "fm-principles",
    opening:
      "A 46-year-old bank clerk who came for a routine health check because his father died of a stroke 'from sugar', and who has no symptoms other than tiredness, has a fasting plasma glucose of 162 mg/dL and 168 mg/dL on two mornings a week apart and an HbA1c of 8.1%; his BMI is 27 kg/m2 and his blood pressure 138/86 mmHg. The candidate instruction reads: explain the diagnosis to him, explore his perspective and agree an initial plan in 10 minutes; the examiner marks from a Calgary-Cambridge checklist and a global rating.",
    minutes: 10,
    frequency: "core",
    sections: [
      {
        heading: "Reading the station and the first minute",
        points: [
          "Read the candidate instruction twice and pick out the three tasks it names - explain the diagnosis, explore his perspective, agree a plan - because the checklist is written from the same sentence and marks are lost for a task that was never attempted.",
          "Confirm to yourself that the diagnosis is secure before you walk in: two fasting values above 126 mg/dL on separate days and an HbA1c of 8.1% satisfy the ADA criteria, so this is a diagnosis to be delivered, not a possibility to be hedged.",
          "Greet him by name, introduce yourself with your name and role, confirm who he is, sit at the same level with the notes closed and no desk between you, and ask whether he is comfortable and whether he would like anyone else present.",
          "Set the agenda in one sentence - 'your blood test results are back and I would like to go through them with you and then plan together what we do next' - and then ask what he already understands about why the tests were done and what he thinks they might show.",
          "Let him speak without interruption for that first minute; the words he uses about his father, sugar and injections are the vocabulary the whole explanation must be built from.",
        ],
      },
      {
        heading: "Eliciting ideas, concerns, expectations and effects",
        points: [
          "Ideas: ask 'what do you think might be going on?' and listen for the folk model - he believes sugar disease comes from eating sweets and that his father brought it on himself - because a wrong causal idea left unaddressed will surface later as guilt or as non-adherence.",
          "Concerns: ask 'is there anything in particular that has been worrying you?' and expect the real fear to be his father's stroke and paralysis, followed by the fear of daily insulin injections, and, on gentle probing, whether his employer will find out and whether his daughter's marriage prospects will suffer.",
          "Expectations: ask 'what were you hoping we could do today?' - he is hoping for a course of tablets that will cure the condition, and this expectation must be named now so that the word 'lifelong' later does not land as a betrayal.",
          "Effects: ask how his days run - a desk job with a canteen lunch, a two-wheeler commute, no exercise, tea with sugar six times a day and dinner at 10 pm - because the plan will be negotiated inside this timetable, not around an ideal one.",
          "Ask about feelings directly ('how are you feeling about all this?') and respond to the emotion before the facts; naming it - 'it sounds as if your father's illness is very much on your mind' - is the empathic statement the checklist rewards.",
          "Screen the rest of the agenda with 'is there anything else you wanted to raise today?' before moving on, so that the door-handle question about erectile difficulty or a numb foot is not dropped into the last thirty seconds.",
        ],
      },
      {
        heading: "Giving the diagnosis in chunks and checking each one",
        points: [
          "Fire a warning shot - 'the results do show something important' - pause, and then say the word plainly: 'the tests show that you have diabetes'; a euphemism such as 'your sugar is a little high' is marked as a failure to disclose.",
          "Stop and let the silence sit; watch his face, and respond to what you see before going on, because the next chunk cannot be heard until the first has been absorbed.",
          "Explain the disease in his language and in one picture: the body needs insulin as a key to let sugar out of the blood and into the muscles, in type 2 diabetes the key has become rusty and the body cannot make enough to compensate, so sugar collects in the blood and, over years, damages the blood vessels of the eyes, kidneys, nerves, heart and brain.",
          "Relate the numbers to the picture - a fasting value above 126 on two mornings and an HbA1c of 8.1%, which is the average of the past three months - and explain that this means the condition has been present quietly for some time, which is why he feels well.",
          "Check understanding after each chunk with a genuine question ('what does that mean to you so far?', 'would you tell me in your own words what you will tell your wife tonight?') and adjust the pace to the answer rather than to the clock.",
          "Use no unexplained jargon: HbA1c, insulin resistance, microvascular and glycaemic control are all words that must either be translated or left out.",
        ],
      },
      {
        heading: "Correcting the ideas and answering the concerns he raised",
        points: [
          "Sweets did not cause it: type 2 diabetes comes from a combination of family tendency, weight around the middle, inactivity and age, and Indians develop it about a decade earlier and at a lower body weight than Europeans; he can stop blaming himself and his father.",
          "It is lifelong but controllable, and the damage his father suffered is what treatment prevents: keeping the sugar, blood pressure and cholesterol in range cuts the risk of stroke, heart attack, kidney failure and blindness by well over half.",
          "Insulin is not inevitable and not a punishment: most people are managed for years on tablets and lifestyle, some achieve remission with substantial weight loss, and if insulin is ever needed it is because the pancreas has tired, not because he failed.",
          "Rice is not banned; the portion is - half the plate vegetables, a quarter protein, a quarter rice or millet, no sugar in tea and dinner earlier; the wife who cooks should hear this from you with his permission, since the family is the unit of care.",
          "He may drive, work and keep the diagnosis to himself; nothing is disclosed to an employer or a marriage broker, and only a doctor treating him needs to know.",
          "Answer what he asked and not what you would like to lecture on - the complication talk, the drug list and the vaccination schedule belong to later visits unless he asks.",
        ],
      },
      {
        heading: "Shared decision making on the first plan",
        points: [
          "Use the three-talk structure: team talk ('there is more than one reasonable way to start, and I would like us to choose together'), option talk and decision talk.",
          "Lay out the two reasonable options at an HbA1c of 8.1%: lifestyle change alone for three months and then re-test, or lifestyle change with metformin from today; give the benefit, the side effects, the cost and what each would mean for him, and say honestly that most guidelines and you yourself would favour starting metformin now.",
          "Elicit his preference and the reasons behind it; if he chooses to try lifestyle alone first, agree a firm three-month re-test with a threshold at which metformin starts, and if he chooses metformin, explain the dose, the stomach upset that settles, taking it with food and that it does not cause low sugar on its own.",
          "Convert the lifestyle plan into one or two behaviours he names himself - a thirty-minute walk after dinner five days a week and sugarless tea - because a goal the patient sets is kept, and a list the doctor dictates is not.",
          "Agree what will be checked today and at the next visit - blood pressure, weight, waist, urine albumin, kidney function, lipids, eyes and feet - so that the baseline screening is a shared plan rather than a surprise bill.",
          "Use teach-back to close the decision: ask him to tell you the plan as he will carry it out, and correct gently until it comes back right.",
        ],
      },
      {
        heading: "Closing the station: summary, safety net, follow-up and the family",
        points: [
          "Summarise in three sentences what has been found, what it means and what has been agreed, and ask whether that matches his understanding.",
          "Safety-net specifically: return sooner if he passes much more urine, becomes very thirsty, loses weight, vomits, cannot keep food down, notices any wound on the foot that is not healing or any change in vision, and state where to come and by when.",
          "Give a written plan in the language he reads, with the drug, the dose, the walk, the tea, the review date and the phone number of the clinic; a plan that exists only in the room is forgotten by the bus stop.",
          "Offer the next appointment in two weeks, ideally with his wife, and ask permission to speak with her about cooking; note that his brother and children should have a fasting sugar and blood pressure checked, because the family history now runs on both sides.",
          "Finish with 'is there anything else you would like to ask me today?', thank him, and, in the examiner's sight, record the ICE, the decision and the safety net in two lines - the record is part of the station.",
        ],
      },
      {
        heading: "What the examiner's checklist actually rewards",
        points: [
          "Marks sit under process headings, not knowledge headings: initiating the session, gathering the patient's perspective, explanation in chunks with checking, shared planning, closing with a safety net, and the two continuous threads of structure and rapport.",
          "The global rating rewards flexibility - a candidate who responds to the emotional cue about the father and comes back to the plan afterwards outscores one who covers every fact in the right order and never looks up.",
          "Time is a marked skill: about a minute for opening and agenda, three for perspective, four for explanation and plan, and a full minute for closing - a station that ends without a safety net or a follow-up loses a whole domain.",
          "The role-player has a scripted hidden concern (the insulin fear) and a scripted question ('can it be cured?'); both must be elicited and answered honestly, and the answer to the cure question is 'controllable, and sometimes reversible with weight loss, but not cured by a course of medicine'.",
          "Evidence is quoted lightly and only in service of the patient: the DiRECT remission data and the UKPDS metformin benefit are worth one sentence each if he asks, and no sentence at all if he does not.",
        ],
      },
    ],
    summaryStatement:
      "Mr X, a 46-year-old overweight bank clerk with a first-degree family history of diabetes and stroke, has newly diagnosed, asymptomatic type 2 diabetes established on two fasting plasma glucose values of 162 and 168 mg/dL and an HbA1c of 8.1%; his ideas centred on sweets as the cause, his concerns on his father's stroke and on insulin, and his expectation on a curative course of tablets, and after a jargon-free explanation given in chunks we agreed by shared decision on a walking and diet plan he set himself, metformin 500 mg with dinner, baseline complication screening, a written plan, a safety net and review in two weeks with his wife.",
    differential: [
      {
        diagnosis: "Type 2 diabetes mellitus",
        forIt:
          "Age 46, central adiposity with a BMI of 27 (obese by the Asian-Indian cut-off), a first-degree relative with diabetes, an insidious asymptomatic course, no weight loss or ketosis, and two fasting values above 126 mg/dL with an HbA1c of 8.1% - the criteria are met and the phenotype is typical.",
        againstIt:
          "Nothing substantive; the only work left is to exclude the mimics below by history and a few questions, not to doubt the diagnosis in front of the patient.",
      },
      {
        diagnosis: "Latent autoimmune diabetes in adults or classical type 1 diabetes",
        forIt:
          "Any adult can present with autoimmune diabetes, and it is suspected when the patient is lean, has lost weight, has ketonuria, has a personal or family history of thyroid or other autoimmune disease, or fails oral drugs within a year or two.",
        againstIt:
          "He is overweight, asymptomatic, without weight loss or ketosis and with a type 2 family history; GAD antibodies and C-peptide are reserved for the lean or rapidly failing patient, not ordered routinely.",
      },
      {
        diagnosis: "Secondary diabetes - glucocorticoid-induced, pancreatic or endocrine",
        forIt:
          "Steroids hidden in bone-setter and herbal preparations, chronic pancreatitis from alcohol, haemochromatosis, Cushing's syndrome and acromegaly all present as new hyperglycaemia and are missed unless asked about.",
        againstIt:
          "No steroid exposure on direct questioning, alcohol within limits, no abdominal pain, steatorrhoea or weight loss, and no cushingoid or acromegalic features on inspection.",
      },
      {
        diagnosis: "Laboratory misclassification - a spurious single value or an unreliable HbA1c",
        forIt:
          "HbA1c reads falsely high in iron deficiency and falsely low in haemoglobinopathies, haemolysis and recent transfusion, and a single glucose value can be a non-fasting or a mislabelled sample.",
        againstIt:
          "Two separate fasting samples and an HbA1c all exceed the threshold, the haemoglobin is normal, and the ADA criteria for diagnosis without unequivocal symptoms are satisfied.",
      },
    ],
    investigations: [
      {
        test: "Confirmation that the diagnosis rests on two abnormal tests",
        why: "A diagnosis of diabetes must never be delivered on a single value; the ADA requires a second abnormal result from a separate sample, or two different abnormal tests from the same sample, unless there is unequivocal hyperglycaemia with symptoms.",
        expected: "Fasting plasma glucose 162 and 168 mg/dL a week apart plus HbA1c 8.1% - criteria met, so the station is about disclosure, not doubt.",
      },
      {
        test: "Blood pressure, weight, BMI and waist circumference",
        why: "Cardiovascular disease is what actually kills in type 2 diabetes, and these are the numbers the plan negotiates - the walk, the plate and the 5-7% weight loss target.",
        expected: "BP 138/86 mmHg, BMI 27 kg/m2 (obese by the Asian-Indian cut-off of 25), waist above 90 cm; target BP below 130/80 mmHg over the coming months.",
      },
      {
        test: "Serum creatinine with eGFR and urine albumin-creatinine ratio",
        why: "Type 2 diabetes has usually been present for years at diagnosis, so nephropathy is screened at the first visit, and the eGFR decides whether metformin can be started at full dose.",
        expected: "eGFR above 60 mL/min and UACR below 30 mg/g; an eGFR of 30-45 means metformin is not started or is halved, and below 30 it is contraindicated; a UACR of 30 or more adds an ACE inhibitor or ARB.",
      },
      {
        test: "Fasting lipid profile",
        why: "A moderate-intensity statin is recommended for every person with diabetes aged 40 and above regardless of the baseline LDL, and the profile sets the target and detects the high triglycerides that Indian patients often carry.",
        expected: "LDL cholesterol to be brought below 100 mg/dL, or below 70 if he has established vascular disease; triglycerides below 150 mg/dL.",
      },
      {
        test: "Dilated fundus examination or retinal photography",
        why: "About one in five patients has retinopathy at the moment of diagnosis of type 2 diabetes, and sight-threatening disease is treatable if found.",
        expected: "No retinopathy on this first examination; if any is found, an ophthalmology referral, and in either case a repeat every year.",
      },
      {
        test: "Foot examination with a 10 g monofilament, a 128 Hz tuning fork and the peripheral pulses",
        why: "Neuropathy and peripheral arterial disease are present at diagnosis in a minority and are the beginning of the pathway to amputation; the examination also opens the conversation about footwear and daily inspection.",
        expected: "Intact sensation and palpable pulses, recorded as a baseline; loss of protective sensation moves him into the high-risk foot pathway with 3-6 monthly review.",
      },
    ],
    management: [
      {
        heading: "The lifestyle prescription, written so it can be followed",
        points: [
          "**Plate method:** half vegetables, a quarter dal, egg, fish or chicken, a quarter rice, roti or millet; no second helping of rice, and dinner by 8 pm.",
          "**Sugar:** none in tea or coffee, no sweetened drinks, fruit whole and not as juice; sweets only at festivals and in a set portion.",
          "**Activity:** 150 minutes a week of brisk walking in bouts of at least 10 minutes, plus two sessions of resistance work; break up sitting every 30 minutes at the desk.",
          "**Weight:** a 5-7% loss (about 4-5 kg for him) over six months is the evidence-based target, and 10-15 kg with a structured programme is what produced remission in the DiRECT trial.",
          "**Tobacco and alcohol:** stop tobacco in every form; alcohol within two standard drinks and never on an empty stomach once on a sulfonylurea or insulin.",
          "**Sleep and stress:** seven hours with a fixed bedtime; screen for obstructive sleep apnoea if he snores and is sleepy by day.",
        ],
      },
      {
        heading: "Starting metformin and what to tell him about it",
        points: [
          "Metformin 500 mg with dinner for one week, then 500 mg twice daily with meals, titrated over 4-8 weeks to 1000 mg twice daily or the highest tolerated dose; the extended-release form once daily if the immediate-release form upsets his stomach.",
          "Warn about nausea, loose stools and a metallic taste in the first weeks, which settle; no hypoglycaemia when used alone, no weight gain, and a proven reduction in myocardial infarction and death in overweight patients in the UKPDS.",
          "Contraindicated if eGFR is below 30, in decompensated liver disease, in acute illness with hypoxia or sepsis and for 48 hours around iodinated contrast; check vitamin B12 every 2-3 years or sooner if neuropathy or anaemia appears.",
          "If HbA1c remains above target at three months, add a second agent chosen by comorbidity and cost: an SGLT2 inhibitor if there is heart failure, kidney disease or albuminuria, a GLP-1 receptor agonist if weight is the problem and money allows, and otherwise a DPP-4 inhibitor or a sulfonylurea with hypoglycaemia education.",
          "Start insulin at diagnosis only if he is symptomatic with weight loss, HbA1c above 10%, glucose above 300 mg/dL, ketosis or a serious intercurrent illness - none of which apply, and saying so is what dissolves his fear.",
        ],
      },
      {
        heading: "Targets, monitoring and protection of the vessels",
        points: [
          "**Glycaemia:** HbA1c below 7% for a 46-year-old with no complications, checked every three months until at target and then six-monthly; home glucose monitoring is not essential on metformin alone.",
          "**Blood pressure:** below 130/80 mmHg; if lifestyle does not achieve it in three months, an ACE inhibitor or ARB first, especially once the UACR is 30 mg/g or more.",
          "**Lipids:** atorvastatin 10-20 mg at night from the age of 40 irrespective of baseline LDL; aspirin is not routinely used for primary prevention.",
          "**Annual screening:** UACR and eGFR, dilated fundus, foot examination, dental check, and weight and BMI at every visit.",
          "**Vaccination:** influenza every year, pneumococcal once, and hepatitis B if not already immune; COVID-19 as per current national advice.",
        ],
      },
      {
        heading: "Education, the family and the follow-up plan",
        points: [
          "A written plan in the language he reads, with the drug, dose and timing, the walk, the tea, the review date and the clinic number; teach-back before he leaves.",
          "With his permission, the wife who cooks attends the next visit; family-based diabetes education improves HbA1c more than education of the patient alone.",
          "First-degree relatives - his brother and his adult children - are screened with a fasting glucose and blood pressure, and the children are taught that their risk is modifiable.",
          "Sick-day rules, foot care rules (daily inspection, no barefoot walking, correct footwear) and the symptoms that should bring him back sooner, all stated and written.",
          "Register him under the National Programme for NCDs at the Health and Wellness Centre for free metformin and follow-up by the community health officer; review in two weeks, then monthly until targets are met, then every three months.",
        ],
      },
    ],
    viva: [
      {
        q: "What are the diagnostic criteria for diabetes mellitus and how many abnormal tests are needed?",
        a: "Fasting plasma glucose 126 mg/dL or more, 2-hour plasma glucose 200 mg/dL or more after a 75 g oral glucose load, HbA1c 6.5% or more, or a random plasma glucose of 200 mg/dL or more with classical symptoms or a hyperglycaemic crisis. In the absence of unequivocal hyperglycaemia the diagnosis requires two abnormal results, either from the same sample or from two separate samples; a single abnormal value is not a diagnosis until confirmed.",
      },
      {
        q: "Why elicit the patient's ideas, concerns and expectations before you explain anything?",
        a: "Because the explanation has to be built on the patient's existing framework or it will not be retained or acted upon; ICE is Pendleton's first task and the patient's-perspective element of Calgary-Cambridge, it reveals the hidden agenda, it shortens the consultation by answering the question the patient actually has, and unexplored wrong ideas reappear later as guilt, non-adherence or a return to an alternative practitioner.",
      },
      {
        q: "What is meant by chunking and checking?",
        a: "A Calgary-Cambridge explanation skill: information is given in small assimilable pieces, understanding is checked after each piece with a genuine question or a request for teach-back, and the patient's response determines what the next chunk contains and how fast it comes; it replaces the monologue of which patients remember less than half.",
      },
      {
        q: "Define shared decision making and say when it is appropriate.",
        a: "A process in which clinician and patient share the best available evidence and the patient is supported to consider the options and reach an informed preference, described by Elwyn as team talk, option talk and decision talk. It is appropriate for preference-sensitive decisions where more than one reasonable option exists - starting metformin now or after a lifestyle trial, adding a second drug, statin therapy - and it is not abandonment of the patient to choose alone; the doctor states a recommendation when asked.",
      },
      {
        q: "The patient asks whether diabetes can be cured. What do you say?",
        a: "That it cannot be cured by a course of medicine and is a lifelong tendency, but that it is controllable, and that in the DiRECT trial nearly half of the people with recent-onset type 2 diabetes who followed a structured weight-loss programme were in remission at one year and about a third at two years, so substantial weight loss can put it into remission without drugs; the honest answer avoids both false hope and nihilism.",
      },
      {
        q: "When would you start insulin at diagnosis in type 2 diabetes?",
        a: "Symptomatic hyperglycaemia with weight loss or other catabolic features, HbA1c above 10% or plasma glucose above 300 mg/dL, ketonuria or ketoacidosis, pregnancy, a serious intercurrent illness or surgery, and whenever type 1 diabetes cannot be excluded; in each case insulin may later be withdrawn as oral drugs and lifestyle take effect.",
      },
      {
        q: "Is involving the wife a breach of confidentiality?",
        a: "Not if the patient consents and the reason is explained: the family is the unit of care, she buys and cooks the food, and family involvement improves adherence and HbA1c; the doctor asks the patient first, invites rather than instructs, and shares only what the patient agrees to. Without consent nothing is disclosed to the family, the employer or anyone else.",
      },
      {
        q: "What is safety netting and what would you say in this consultation?",
        a: "Safety netting is the explicit statement of what is expected to happen, what would be unexpected, what specifically to watch for, what to do and by when - the medico-legal core of a family practice consultation. Here: increasing thirst and urine, weight loss, vomiting, a foot wound, a change in vision, or a low-sugar episode if a sulfonylurea is later added, with the clinic number and a review date of two weeks, said aloud and written on the plan.",
      },
    ],
    pitfalls: [
      "Delivering a lecture on diabetes before asking what he knows, what he fears and what he expects - the commonest way to fail a communication station.",
      "Softening the diagnosis into 'a bit of sugar' or 'borderline' when the criteria are met; the patient leaves without knowing he has diabetes and the disclosure mark is lost.",
      "Unexplained jargon - HbA1c, insulin resistance, microvascular complications - and reciting ideas, concerns and expectations as three consecutive questions without listening to the answers.",
      "Ignoring the emotional cue about the father's stroke and pressing on with the plan; the global rating falls even if every checklist item is ticked.",
      "Deciding the treatment for him, or the opposite error of listing options and refusing to recommend when he asks what you would do.",
      "Running out of time with no summary, no safety net, no follow-up date and no written plan - the closing domain is a whole block of marks.",
    ],
    references: [
      "American Diabetes Association. Standards of Care in Diabetes 2025 - Section 2 (diagnosis and classification), Section 5 (facilitating positive health behaviours) and Section 9 (pharmacologic approaches to glycemic treatment)",
      "RSSDI Clinical Practice Recommendations for the Management of Type 2 Diabetes Mellitus 2022, International Journal of Diabetes in Developing Countries",
      "ICMR Guidelines for Management of Type 2 Diabetes, 2018",
      "Silverman J, Kurtz S, Draper J. Skills for Communicating with Patients, 3rd edition, CRC Press, 2013",
      "Elwyn G et al. A three-talk model for shared decision making: multistage consultation process. BMJ 2017;359:j4891",
      "Lean MEJ et al. Primary care-led weight management for remission of type 2 diabetes (DiRECT): an open-label, cluster-randomised trial. Lancet 2018;391:541-551, and the 2-year results, Lancet Diabetes and Endocrinology 2019",
      "Pendleton D, Schofield T, Tate P, Havelock P. The New Consultation, Oxford University Press, 2003",
    ],
  },
  {
    id: "fm-principles-case-2",
    title: "Family assessment long case: uncontrolled diabetes in the wife of a stroke survivor",
    kind: "long",
    subjectId: "fm-principles",
    opening:
      "A 54-year-old home-maker from a small town, a known type 2 diabetic and hypertensive for 9 years who was well controlled until this year, presents with tiredness, poor sleep, headaches and a rise in HbA1c from 7.2% to 9.4% over the 3 months since her 58-year-old husband, who ran the family's provision shop, was left with a right hemiparesis and expressive aphasia by a left middle cerebral artery infarct; she is his sole caregiver in a four-member three-generation household that also holds her 80-year-old mother-in-law and her unmarried 26-year-old daughter, while the only son lives in another city with his wife and child.",
    minutes: 40,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the presenting complaints in her order with their durations, and then the problem statement in one sentence that already contains the family: 'Mrs X, a 54-year-old home-maker with type 2 diabetes and hypertension for 9 years, presents with three months of fatigue, poor sleep and loss of glycaemic and blood pressure control, coinciding with her husband's disabling stroke, for which she is the sole caregiver.'",
          "State the household in the second sentence - four members under one roof, three generations, the earning son away - because the examiner in a family case wants the structure before the sugar values.",
          "Add the relevant negatives early: no osmotic symptoms, no chest pain, no visual loss, no foot ulcer, no intercurrent infection, no new drug such as a steroid, and no thoughts of self-harm on direct questioning.",
          "Name the instruments you used in the next sentence - a three-generation genogram, a family life line, the family APGAR from three members, SCREEM, the PHQ-9 and the Zarit burden interview - so the examiner knows the assessment is complete before the detail begins.",
          "Close the opening with the functional statement: she runs the house, bathes, dresses and feeds her husband, cooks for four and sleeps four hours a night.",
        ],
      },
      {
        heading: "History of the presenting problem and the family life line",
        points: [
          "Her control was good until this year: HbA1c 7.2% in January on metformin 1000 mg twice daily and telmisartan 40 mg, with clinic attendance every three months and the drugs bought from a private pharmacy for about 900 rupees a month.",
          "The stroke three months ago changed everything at once: the shop closed, the hospital bill of 1.8 lakh rupees was met by a moneylender at 3% a month, her own drugs were bought irregularly to save money, meals became whatever could be cooked between his needs, and she stopped her evening walk because he cannot be left alone.",
          "Ask about mood systematically: she has low mood most days, has lost interest in the television serials and the temple group she loved, sleeps four hours because he needs turning, has lost 3 kg, cries alone, feels guilty about her daughter and denies suicidal thoughts; the PHQ-9 is 14.",
          "Draw the family life line as a horizontal time axis and plot: the father-in-law's death from stroke 12 years ago; the son's marriage 4 years ago and migration for work 2 years ago; the grandson's birth 2 years ago; the property dispute with the husband's brother 18 months ago; the husband's stroke 3 months ago; the daughter's marriage proposal deferred 2 months ago - and then plot her HbA1c and blood pressure values along the same axis.",
          "The life line shows the temporal association the case turns on: every measure of her health deteriorates after the stroke, and the pile-up of events in the preceding two years explains why the family had no reserve left when it came.",
        ],
      },
      {
        heading: "Examination findings to demonstrate",
        points: [
          "General: a tired, tearful woman with psychomotor slowing, BMI 29 kg/m2, waist 96 cm, no pallor, no pedal oedema; blood pressure 160/96 mmHg sitting in both arms and 156/94 standing, pulse 88 regular.",
          "Fundus: mild non-proliferative diabetic retinopathy with a few microaneurysms in the right eye and arteriovenous nipping; feet: intact monofilament sensation at all sites, palpable dorsalis pedis and posterior tibial pulses, dry skin, no deformity or ulcer.",
          "Cardiovascular and respiratory systems normal; no thyroid enlargement; neurological examination normal apart from slowed responses.",
          "The husband, examined in the same room with consent: right hemiparesis with power 3/5 in the arm and 4/5 in the leg, spastic tone, expressive aphasia with preserved comprehension, walks with a stick, Barthel index 60 of 100 and modified Rankin scale 3; blood pressure 150/90 mmHg on amlodipine, and on aspirin and atorvastatin.",
          "The mother-in-law: 80 years, blood pressure 148/84 mmHg on amlodipine, bilateral knee osteoarthritis, walks with a stick, cognitively intact, keen to help but unable to lift.",
          "Finish the examination section by stating what was looked for and not found - no signs of injury on the wife or the husband, no evidence of neglect of the elderly woman - because a family case examiner asks.",
        ],
      },
      {
        heading: "Drawing the genogram",
        points: [
          "Draw three generations with the index patient marked by a double circle and an arrow: generation one holds the husband's parents (father dead at 62 of stroke, a cross through the square; mother 80, alive, hypertension and osteoarthritis) and the wife's parents (father dead at 70 of myocardial infarction; mother 76, alive, diabetic, living with the wife's brother in another town).",
          "Generation two is the index couple joined by a horizontal marriage line dated 32 years ago, with the husband's brother (54, diabetic, in the same town) and the wife's brother (50) hanging from their respective parents' lines with their spouses.",
          "Generation three hangs from the couple's marriage line, eldest on the left: the son (30, married 4 years, migrated 2 years ago) with his wife (27) and their son (2) as generation four, and the daughter (26, unmarried, school teacher).",
          "Write the age inside every symbol and the significant diagnosis beside it - stroke at 58, type 2 diabetes and hypertension for 9 years, diabetes, hypertension, osteoarthritis - with the age at onset, so that patterns can be read across the page.",
          "Draw a dotted line around the household of four - husband, wife, daughter and mother-in-law - leaving the son's nuclear family outside it, and then add the relationship lines: a double line between the couple, a triple fused line between mother and daughter, a jagged line between the wife and her mother-in-law, a broken line between the son and his father since the migration, and a broken line with a bar for the cut-off between the husband and his brother.",
          "Date the genogram, name the informant (the wife, confirmed with the daughter) and draw the ecomap beside it: thick lines to the temple group and the neighbours, a thin line to the Health and Wellness Centre 3 km away, and a thick arrow from the family to the moneylender.",
        ],
      },
      {
        heading: "Reading the genogram aloud",
        points: [
          "Structure: a three-generation household with no earning male member present, a woman of 54 sandwiched between a dependent husband and a dependent mother-in-law, and the only son geographically removed - the genogram shows the caregiver load before a word is spoken.",
          "Patterns across generations: premature stroke in the husband's paternal line and diabetes in the wife's maternal line converge on the children, so the son and the daughter carry a double vascular and metabolic inheritance and need screening now; diabetes in the husband's brother makes the shop-keeping generation a cluster of one disease.",
          "Relationships: the cut-off with the husband's brother removes the nearest able-bodied relative from the pool of helpers; the fused line between mother and daughter shows who is silently carrying the household and whose launching has stalled; the jagged line to the mother-in-law is a resource wasted, because she wants to help and is not allowed to.",
          "Roles: the wife is caregiver, cook, nurse, treasurer and now debtor; the daughter is earner and secondary caregiver; the son is the absent earner; the husband has lost the role of provider and head of household, which is his own loss to address.",
          "The genogram also shows who can be recruited: the son with money and the son's wife with time, the mother-in-law with companionship and supervision, the temple group with respite - which is what turns a diagram into a plan.",
        ],
      },
      {
        heading: "The family APGAR and SCREEM",
        points: [
          "Family APGAR from the wife: adaptation 1, partnership 0, growth 0, affection 1, resolve 1 - a total of 3 of 10, in the severely dysfunctional band; from the husband, answering by pointing: 7; from the daughter: 5. The discrepancy is the finding - the husband is satisfied with the care he receives and the woman providing it is not.",
          "State the caveat aloud: the APGAR measures satisfaction with family function as perceived by each member, not function itself, and a score of 3 identifies a member in distress who must be interviewed, not a family to be labelled.",
          "SCREEM - social: the neighbours and the temple group are a resource, the son's migration and the cut-off brother a pathology; cultural: the shared expectation that a wife nurses her husband alone and that a daughter waits is the central pathology; religious: the temple group offers food, transport and company, a resource she has withdrawn from.",
          "Economic: pathology - income has stopped, a moneylender loan at 3% a month, no PM-JAY card, no disability certificate, drugs bought irregularly, and the daughter's 18,000 rupees a month with irregular remittances the only inflow; educational: resource - the daughter is a graduate who can read instructions, manage the drugs and run the physiotherapy programme.",
          "Medical: mixed - the Health and Wellness Centre 3 km away has free metformin, telmisartan and amlodipine that the family has never accessed, no physiotherapist is available locally, and the family's trust in the clinic is high after the hospital experience.",
          "Summarise the family's resources and pathologies in two sentences, because the plan is built from the resources and aimed at the pathologies.",
        ],
      },
      {
        heading: "Family life cycle stage, the stressors and the family diagnosis",
        points: [
          "Stage: in Carter and McGoldrick's scheme the family is at the launching stage - the son launched, the daughter's launching blocked - overlapping with the family in later life, with an 80-year-old dependent and a couple who should be renegotiating their marriage as a dyad; in Duvall's terms a launching-centre family superimposed on an ageing family, which is the usual overlap of the Indian three-generation household.",
          "The developmental tasks of this stage - releasing the daughter with appropriate rituals, rebuilding the marital relationship, caring for the older generation - have all been suspended by the stroke, and suspended tasks are what present as symptoms.",
          "Horizontal stressor: an off-time, unpredictable disabling stroke in the breadwinner at 58; vertical stressors: the family's rule that care is one woman's duty, the paternal legacy of stroke, and the property dispute that severed the nearest source of help; the crisis sits where they cross.",
          "In Hill's ABCX terms: A, the stroke and its debt; B, resources that exist but are unused - the son's income, the daughter's education, the mother-in-law's willingness, the temple group, free drugs and a disability pension; C, the wife's perception that she must manage alone and cannot ask; X, a caregiver crisis presenting as uncontrolled diabetes and depression.",
          "Family diagnosis, stated as one sentence: a caregiver crisis in a launching-stage three-generation family after an off-time stroke, with unused resources, an overburdened wife with a depressive episode, a daughter whose launching has stalled, and a debt that threatens catastrophic expenditure.",
        ],
      },
    ],
    summaryStatement:
      "Mrs X, a 54-year-old home-maker in a four-member three-generation household, with type 2 diabetes and hypertension for 9 years, has lost glycaemic and blood pressure control (HbA1c 9.4%, BP 160/96 mmHg, new microalbuminuria and mild retinopathy) over the 3 months in which she became the sole caregiver of her husband after a disabling left middle cerebral artery stroke; she has a moderate depressive episode (PHQ-9 14) and high caregiver burden, scores the family APGAR at 3 of 10 against her husband's 7, shows economic, social and cultural pathology on SCREEM with unused educational, religious and medical resources, and the family - at the launching and later-life stages - is in a caregiver crisis where the horizontal stressor of an off-time stroke has crossed the vertical stressor of care resting on one woman.",
    differential: [
      {
        diagnosis: "A caregiver crisis - a horizontal stressor crossing a vertical one - presenting through the caregiver's own chronic disease",
        forIt:
          "The family life line ties every deterioration to the stroke; the wife's APGAR of 3 against the husband's 7 locates the distress in the caregiver; she does every act of care alone, sleeps four hours and has stopped the walk, the diet and the drugs that kept her controlled; the resources that would relieve her exist and are unused.",
        againstIt:
          "The conflict with the mother-in-law and the cut-off with the brother predate the stroke, so part of the dysfunction is old, and treating the crisis alone will not repair those lines.",
      },
      {
        diagnosis: "A depressive episode in the wife as the primary problem, with the family findings secondary to it",
        forIt:
          "A PHQ-9 of 14 with low mood, anhedonia, insomnia, weight loss, guilt and psychomotor slowing meets the criteria for a moderate depressive episode, which itself worsens adherence, appetite and glycaemic control, and which will need treatment in its own right whatever the family does.",
        againstIt:
          "No previous episode, no family history of depression, the symptoms began with the caregiving load and track it, and she attributes them to exhaustion; the depression is real but is the consequence of the family situation, not its cause.",
      },
      {
        diagnosis: "An economic crisis from catastrophic health expenditure driving the whole picture",
        forIt:
          "Income stopped when the shop closed, a moneylender loan at 3% a month is compounding, drugs were rationed to save money, and the daughter's salary is the only steady income; the missed doses alone could explain the HbA1c.",
        againstIt:
          "Food and rent are covered by the daughter's salary and the remittances, free drugs and a disability pension were available and never sought, and in her own words the wife's distress is that she is alone, not that she is poor; money is a modifiable pathology, not the formulation.",
      },
      {
        diagnosis: "A blocked launching-stage task - the daughter's deferred marriage and the unspoken expectation that she stays - as the central family problem",
        forIt:
          "The daughter is 26, a proposal has been put on hold, her APGAR is 5, her line to her mother is fused, and the mother's guilt about her is a recurring theme in the interview.",
        againstIt:
          "The daughter frames the deferral as temporary and her own choice, the deferral followed the stroke rather than preceding it, and it is a consequence of the crisis that will resolve when the care is redistributed - it belongs in the plan, not at the head of the formulation.",
      },
    ],
    investigations: [
      {
        test: "HbA1c and fasting plasma glucose",
        why: "To quantify the loss of control, establish the baseline against which the family plan is judged, and separate rationed drugs from a true escalation of the disease.",
        expected: "HbA1c 9.4% and fasting plasma glucose 190 mg/dL, against 7.2% in January; the aim is below 8% at three months and below 7% at six.",
      },
      {
        test: "Serum creatinine with eGFR and urine albumin-creatinine ratio",
        why: "Nine years of diabetes with hypertension and a period of poor control; the results decide whether the ARB is uptitrated and whether an SGLT2 inhibitor is the second drug.",
        expected: "eGFR 78 mL/min and UACR 45 mg/g - new microalbuminuria - so telmisartan goes to 80 mg and dapagliflozin is the preferred addition.",
      },
      {
        test: "Fasting lipid profile",
        why: "A moderate-intensity statin is due for any diabetic over 40 and the family's diet has changed; her husband's stroke makes vascular protection the family's shared goal.",
        expected: "LDL 132 mg/dL and triglycerides 210 mg/dL; atorvastatin 20 mg at night, target LDL below 100 mg/dL.",
      },
      {
        test: "PHQ-9 with item 9 checked separately, and GAD-7",
        why: "To convert distress into a treatable diagnosis with a severity band and a number to follow, and to screen for suicidal ideation before the patient is sent home to the same load.",
        expected: "PHQ-9 of 14 (moderate) with item 9 scored zero, GAD-7 of 9; repeat at every visit and expect a fall of 5 or more points by six weeks.",
      },
      {
        test: "Zarit Burden Interview, 12-item short form",
        why: "Caregiver burden is measured, not assumed; the score names the problem to the family, tracks the effect of redistributing care, and predicts caregiver depression and physical illness.",
        expected: "27 of 48 - high burden (17 or more); a fall below 17 after the care roster is in place is the measure of success.",
      },
      {
        test: "Barthel index and modified Rankin scale for the husband, and a fall-risk assessment for the mother-in-law",
        why: "The care load is proportional to the dependence of those cared for, the scores set rehabilitation targets, and a Barthel of 60 with a modified Rankin scale of 3 supports the disability certificate that opens the pension.",
        expected: "Barthel 60 of 100 and modified Rankin 3, with realistic targets of independent toileting and dressing at three months; the mother-in-law at moderate fall risk, needing a grab rail and a raised toilet seat.",
      },
    ],
    management: [
      {
        heading: "Treat the index patient's own disease properly",
        points: [
          "**Glycaemia:** continue metformin 1000 mg twice daily and add dapagliflozin 10 mg daily for the microalbuminuria and the weight; a sulfonylurea is avoided in a woman who skips meals while nursing; HbA1c at three months.",
          "**Blood pressure:** telmisartan increased to 80 mg and amlodipine 5 mg added, target below 130/80 mmHg; home readings by the daughter twice a week.",
          "**Lipids and eyes:** atorvastatin 20 mg at night; ophthalmology review for the retinopathy within a month and yearly thereafter.",
          "**Supply:** enrol her, her husband and her mother-in-law under the National Programme for NCDs at the Health and Wellness Centre so that metformin, telmisartan, amlodipine and atorvastatin are free and the community health officer follows the household.",
          "**Adherence made possible:** a fixed-dose combination where available, a weekly pill organiser filled by the daughter on Sunday, and drug timings tied to the husband's care routine.",
        ],
      },
      {
        heading: "Treat the depression and the caregiver strain in their own right",
        points: [
          "Explain the diagnosis without blame: exhaustion has become a depressive illness, it is common in caregivers, it is treatable, and treating it is part of caring for her husband.",
          "Offer sertraline 50 mg daily or escitalopram 10 mg daily as a shared decision alongside brief problem-solving counselling; review at two weeks, expect benefit by six, and continue for at least six months after recovery.",
          "Sleep: an attendant or the daughter takes the night turning on alternate nights; no benzodiazepine beyond a week, if at all.",
          "Respite is prescribed like a drug - two afternoons a week back at the temple group, with the mother-in-law and a neighbour sitting with the husband.",
          "Safety: item 9 asked at every visit, the daughter told what to watch for, and the helpline number given.",
        ],
      },
      {
        heading: "The family conference and the redistribution of care",
        points: [
          "Convene, with the wife's consent, a family conference within two weeks: the couple, the daughter, the mother-in-law, and the son and his wife by video call; set the agenda - his recovery, her health, the money, the daughter's future - and let each member speak first.",
          "Name the problem as the family's, not hers: one person cannot provide 24-hour care and stay well; the goal is a roster with names and times.",
          "Allocate tasks by name: the son funds a trained attendant for morning bathing and physiotherapy (about 6,000 rupees a month) and takes leave for a fortnight every quarter; the son's wife handles the calls to the bank and the pension office; the mother-in-law supervises the exercises and keeps the husband company; the daughter does the evenings and the Sunday pill box.",
          "Reframe the mother-in-law from opponent to ally in front of the family, and give the husband a role - deciding the shop's future, supervising the accounts - so that he is a participant in the household rather than only its patient.",
          "Do not attempt to resolve the property dispute; note it as a cut-off resource and, if the family wishes, offer a separate mediated conversation later; set the review date and write the roster into the family folder.",
        ],
      },
      {
        heading: "Rehabilitation, money, the daughter and the wider system",
        points: [
          "Home-based rehabilitation: a physiotherapist assesses once and trains the daughter and the attendant in a daily programme; a commode chair, a grab rail in the bathroom, a raised toilet seat and removal of the doorstep protect both the husband and the mother-in-law from falls.",
          "Money: apply for the disability certificate (40% or more) and the UDID card for the husband, which unlock the disability pension and travel concessions; enrol the family in PM-JAY before the next admission; restructure the moneylender loan through the daughter's self-help group or a bank so that the interest stops compounding.",
          "The daughter: give her and her mother an explicit conversation about the deferred proposal, with the message that a roster that frees her is part of the treatment plan and that her launching is a family task, not a betrayal.",
          "Screening: fasting glucose, HbA1c and blood pressure for the daughter and the son now and every three years, given diabetes and stroke on both parental lines; the son's wife and child are added to the family folder.",
          "Link the household to the ASHA for home visits, to a stroke support group if one exists, and to the district palliative or home-care team where available; record every linkage in the family folder with the genogram on its first page.",
        ],
      },
      {
        heading: "Follow-up and what counts as success",
        points: [
          "Review in two weeks (mood, blood pressure, adherence, the roster), then monthly for three months, then every three months; a home visit within the first month to see the care as it is actually given.",
          "Targets at three months: HbA1c below 8%, blood pressure below 140/90 mmHg, PHQ-9 below 10, Zarit score below 17, the husband's Barthel above 75, and the wife back at the temple group twice a week.",
          "Repeat the family APGAR from all three members at three months; convergence of the scores is the family-level outcome.",
          "Update the genogram and the life line at each major event; a family folder that is not updated is a photograph, not a record.",
          "Define failure in advance: a worsening PHQ-9, any item 9 response, a fall, a pressure sore or a missed review triggers a same-week home visit and a second family conference.",
        ],
      },
    ],
    viva: [
      {
        q: "The husband had the stroke; why is the wife the index patient of this family case?",
        a: "Because the index patient is whoever presents, and the family diagnosis can be made from any member; she is the hidden patient of the stroke - the caregiver whose own chronic disease and mood have deteriorated - and the caregiver is a patient too, with a measurable burden, a treatable depression and a diabetes that will produce its own complications if the family is not reorganised.",
      },
      {
        q: "How is the family APGAR scored and what does her score of 3 mean?",
        a: "Five items - adaptation, partnership, growth, affection and resolve - each scored 2 for almost always, 1 for some of the time and 0 for hardly ever, giving 0 to 10; 7-10 is highly functional, 4-6 moderately dysfunctional and 0-3 severely dysfunctional. Her 3 means severe dissatisfaction with family function as she perceives it; set against her husband's 7 the discrepancy shows that the family works for the person receiving care and not for the person giving it, which is the finding to act on.",
      },
      {
        q: "What is SCREEM and how is it scored?",
        a: "Smilkstein's inventory of family resources and pathology in six domains - social, cultural, religious, economic, educational and medical - and it is not scored numerically; each domain is judged a resource or a pathology for the family's capacity to cope with the present problem. Here the economic, social and cultural domains are pathology and the educational, religious and medical domains are under-used resources, which is exactly the shape of the plan.",
      },
      {
        q: "Which family life cycle stage is this family in, and why does it matter?",
        a: "The launching stage in Carter and McGoldrick's scheme - the son launched, the daughter's launching blocked - overlapping with the family in later life because of the dependent 80-year-old, or Duvall's launching-centre family superimposed on an ageing family; the overlap is typical of the Indian three-generation household. It matters because each stage has developmental tasks, and the stroke has suspended all of them - releasing the daughter, rebuilding the marital dyad, caring for the elder - and suspended tasks are what present as symptoms.",
      },
      {
        q: "Explain horizontal and vertical stressors in this family.",
        a: "Horizontal stressors are events moving through time - predictable transitions such as marriage and retirement, and unpredictable ones such as this off-time stroke and its debt; vertical stressors are patterns transmitted down the generations - here the rule that care is one woman's duty, the paternal legacy of stroke, and the property dispute that cut off the brother. A crisis occurs where a horizontal stressor crosses a vertical one, which is why an event the family might otherwise have absorbed has broken it.",
      },
      {
        q: "What is caregiver burden, who is at risk, and how is it measured?",
        a: "The multidimensional strain - physical, emotional, social and financial - experienced by a person caring for a dependent relative; risk is highest in female spouses who live with the patient, give more hours of care, have their own illness, lack respite and care for a patient with behavioural or communication problems. It is measured with the Zarit Burden Interview, in full or in the 12-item short form where 17 or more indicates high burden, and it predicts caregiver depression, physical illness, institutionalisation of the patient and, at the extreme, abuse.",
      },
      {
        q: "How would you run a family conference here?",
        a: "Obtain the patient's consent, decide who attends, set a private time and place, state the purpose and an explicit agenda, let each member describe the problem from their side, identify shared goals, name the resources, allocate tasks to named people with times, summarise, write it down and fix a review date; the doctor facilitates, keeps the meeting from becoming a trial of anyone, and never convenes a joint meeting where violence or abuse is suspected.",
      },
      {
        q: "When would you insist on seeing a family member alone rather than with the family?",
        a: "Whenever intimate partner violence, elder abuse or child abuse is suspected, when an adolescent's confidentiality is at stake, when a member discloses suicidal ideation or a secret such as an HIV diagnosis, or when one member keeps answering for another; joint counselling in the presence of an abuser increases danger, and under the PWDVA 2005 and the Maintenance and Welfare of Parents and Senior Citizens Act 2007 the doctor's duty is to the safety of the individual first.",
      },
    ],
    pitfalls: [
      "Presenting the genogram as a list of relatives rather than a drawn, dated, three-generation diagram with ages inside the symbols, the household enclosed and the relationship lines marked.",
      "Reporting a single family APGAR as if it belonged to the family, and calling 3 of 10 'a dysfunctional family' rather than severe dissatisfaction in one member; the discrepancy between members is the finding.",
      "Scoring SCREEM as a number, or listing the six domains without saying for each whether it is a resource or a pathology for this problem.",
      "Naming the life cycle stage from the index patient's age instead of from the tasks the family is facing, and missing the overlap of stages that a three-generation household always shows.",
      "Producing an elegant family diagnosis and forgetting to treat her diabetes, her blood pressure, her retinopathy and her depression - or the reverse, treating the numbers and sending her back to the same load.",
      "A plan that says 'counsel the family' without a named task, a named person, a cost and a review date; in a family case the plan is the roster.",
    ],
    references: [
      "McGoldrick M, Gerson R, Petry S. Genograms: Assessment and Intervention, 4th edition, WW Norton, 2020",
      "Smilkstein G. The family APGAR: a proposal for a family function test and its use by physicians. Journal of Family Practice 1978;6:1231-1239",
      "Smilkstein G. The cycle of family function: a conceptual model for family medicine. Journal of Family Practice 1980;11:223-232 (SCREEM)",
      "Carter B, McGoldrick M. The Expanded Family Life Cycle: Individual, Family and Social Perspectives, 4th edition, Pearson, 2011",
      "McCubbin HI, Patterson JM. The family stress process: the double ABCX model of adjustment and adaptation. Marriage and Family Review 1983;6:7-37",
      "Bedard M et al. The Zarit Burden Interview: a new short version and screening version. The Gerontologist 2001;41:652-657",
      "Kroenke K, Spitzer RL, Williams JBW. The PHQ-9: validity of a brief depression severity measure. Journal of General Internal Medicine 2001;16:606-613",
      "Kumar R, Kumar Y (eds). Textbook of Family Medicine, AFPI / Jaypee, 2022 - family assessment tools and the family case",
    ],
  },
];

const subject: Subject = {
  id: "fm-principles",
  title: "Principles of Family Medicine & Research",
  blurb: "The consultation models, the family as the unit of care, audit, evidence-based medicine and research methods.",
  icon: "Users",
  papers: ["I"],
  topics,
  cases,
};

export default subject;
