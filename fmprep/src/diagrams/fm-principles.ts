/**
 * Diagrams for fm-principles, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "fm-principles-definition": [
    {
      kind: "branch",
      heading: "McWhinney's nine principles, grouped",
      caption:
        "The first principle - an open-ended commitment to the person - is the organising one; the rest follow from it.",
      root: "The family physician",
      arms: [
        {
          label: "Committed to the person",
          tone: "good",
          steps: [
            "1. Committed to the person, not to a body of knowledge",
            "8. Attaches importance to the subjective aspects of medicine",
            "The commitment is open-ended and has no natural end point",
          ],
        },
        {
          label: "Works inside the context",
          steps: [
            "2. Seeks to understand the context of the illness",
            "6. Ideally shares the same habitat as the patients",
            "7. Sees patients in their homes",
          ],
        },
        {
          label: "Thinks in denominators",
          steps: [
            "3. Every contact is an opportunity for prevention",
            "4. Views the practice as a population at risk",
            "5. Part of a community-wide network - ASHA, anganwadi, PHC",
          ],
        },
        {
          label: "Manages resources",
          steps: [
            "9. Manager of tests, drugs, specialists and admission",
            "Accountable for using them well",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Ecology of medical care per 1000 adults",
      caption:
        "White, Williams and Greenberg 1961, repeated by Green et al 2001 with almost identical proportions.",
      steps: [
        { label: "1000 adults in one month", detail: "The denominator" },
        { label: "750 report a symptom", detail: "Green 2001: 800" },
        {
          label: "250 consult a physician",
          detail: "Green 2001: 217, of whom 113 are seen in primary care",
        },
        { label: "9 are admitted to hospital", detail: "Green 2001: 8" },
        { label: "5 are referred to another physician" },
        {
          label: "1 reaches a teaching hospital",
          tone: "warn",
          detail:
            "Green 2001: fewer than 1 - education is delivered in the setting that sees the least representative 0.1%",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Family practice versus specialist practice",
      caption:
        "The prior probability line is the examinable one: chest pain is coronary in under 5% of general practice and in about 60% of a cardiology clinic.",
      columns: ["Dimension", "Family practice", "Specialist practice"],
      rows: [
        [
          "Patient at presentation",
          "Undifferentiated, early, often self-limiting",
          "Filtered, selected, already labelled",
        ],
        ["Prevalence of serious disease", "Low prior probability", "High prior probability"],
        ["Unit of care", "Person and family over time", "Organ or disease episode"],
        ["Main diagnostic tool", "History, relationship and time", "Investigation and procedure"],
        ["End point of consultation", "A safe plan and a review date", "A definitive diagnosis"],
        ["Relationship", "Continuous, cumulative, open-ended", "Episodic, referral-bounded"],
      ],
    },
    {
      kind: "compare",
      heading: "WONCA six core competencies",
      caption:
        "These rest on three background features - contextual, attitudinal and scientific. Minor surgery is a task, not a competency of the discipline.",
      columns: ["Competency", "What it looks like in the clinic"],
      rows: [
        [
          "Primary care management",
          "Open access, first contact, coordination and a considered referral",
        ],
        ["Person-centred care", "Eliciting ICE, shared decisions, continuity of the relationship"],
        [
          "Specific problem-solving skills",
          "Working with low prevalence, undifferentiated symptoms and time",
        ],
        ["Comprehensive approach", "Acute, chronic, preventive and palliative care in one visit"],
        [
          "Community orientation",
          "Knowing the denominator, the local epidemiology and the resources",
        ],
        [
          "Holistic modelling",
          "Addressing disease, illness experience and social context together",
        ],
      ],
    },
  ],

  "fm-principles-consultation": [
    {
      kind: "compare",
      heading: "Consultation models at a glance",
      caption:
        "Examiners mix the lists deliberately: housekeeping, safety netting and handing over are Neighbour's, not Pendleton's.",
      columns: ["Model", "Author and year", "Structure", "Best used for"],
      rows: [
        [
          "Six phases",
          "Byrne and Long, 1976",
          "Relating, reason, examination, consideration, treatment, termination",
          "Describing what actually happens",
        ],
        [
          "Seven tasks",
          "Pendleton, 1984",
          "Reason with ICE, other problems, shared action, shared understanding, involvement, time, relationship",
          "Setting consultation goals",
        ],
        [
          "Four areas",
          "Stott and Davis, 1979",
          "Presenting problem, help-seeking behaviour, continuing problems, health promotion",
          "Opportunistic prevention",
        ],
        [
          "Five checkpoints",
          "Neighbour, 1987",
          "Connecting, summarising, handing over, safety netting, housekeeping",
          "Flow and doctor self-care",
        ],
        [
          "Calgary-Cambridge",
          "Kurtz and Silverman, 1996",
          "Five stages plus structure and relationship throughout",
          "Teaching and OSCE assessment",
        ],
        [
          "BATHE",
          "Stuart and Lieberman, 1986",
          "Background, affect, trouble, handling, empathy",
          "One-minute psychosocial screen",
        ],
        [
          "SPIKES",
          "Baile, 2000",
          "Setting, perception, invitation, knowledge, emotion, strategy",
          "Breaking bad news",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Calgary-Cambridge: the five stages",
      caption:
        "Providing structure and building the relationship run throughout - drawing them as two vertical bars beside the five boxes earns the diagram mark.",
      steps: [
        {
          label: "Initiating the session",
          detail:
            "Rapport, an open question, screening for anything else, and agenda setting; the golden minute shortens the consultation",
        },
        {
          label: "Gathering information",
          detail:
            "Open-to-closed cone; the disease framework and the patient's ideas, concerns, expectations, feelings and effects",
        },
        { label: "Physical examination" },
        {
          label: "Explanation and planning",
          detail: "Chunking and checking, no jargon, shared decision making",
        },
        {
          label: "Closing the session",
          tone: "good",
          detail: "Summarise, contract, safety net, and check the patient is content with the plan",
        },
      ],
    },
    {
      kind: "flow",
      heading: "SPIKES for breaking bad news",
      caption:
        "Never lie to a patient who asks a direct question; when the family asks you to withhold a diagnosis, explore why and establish what the patient wants to know.",
      steps: [
        {
          label: "S - Setting up",
          detail: "Privacy, sitting down, family present, no interruptions",
        },
        { label: "P - Perception", detail: "What have you been told so far?" },
        {
          label: "I - Invitation",
          tone: "decision",
          detail: "How much would you like to know? - the step that protects autonomy",
        },
        { label: "K - Knowledge", detail: "A warning shot, then small chunks, no jargon" },
        { label: "E - Emotions", detail: "Name the emotion and respond empathically" },
        {
          label: "S - Strategy and summary",
          tone: "good",
          detail: "A clear next step and a review date",
        },
      ],
    },
    {
      kind: "flow",
      heading: "BATHE - the one-minute psychosocial screen",
      caption:
        "Stuart and Lieberman, The Fifteen Minute Hour. The order matters: empathy closes the sequence and legitimises the distress.",
      steps: [
        { label: "B - Background", detail: "What is going on in your life?" },
        { label: "A - Affect", detail: "How do you feel about that?" },
        { label: "T - Trouble", detail: "What about it troubles you most?" },
        { label: "H - Handling", detail: "How are you handling it?" },
        {
          label: "E - Empathy",
          tone: "good",
          detail: "That must be very difficult for you",
        },
      ],
    },
  ],

  "fm-principles-continuity": [
    {
      kind: "compare",
      heading: "Starfield's four Cs",
      caption:
        "Family orientation, community orientation and cultural competence are derivative attributes.",
      columns: ["Attribute", "Definition", "How it is measured", "What failure looks like"],
      rows: [
        [
          "First contact",
          "Accessible entry point for any new problem",
          "Proportion of new problems first brought to the practice; waiting time",
          "Patient goes straight to a specialist or a chemist",
        ],
        [
          "Continuity",
          "An ongoing personal relationship over time",
          "Usual provider of care index; proportion of visits with the named doctor",
          "A different doctor each visit; no one knows the baseline",
        ],
        [
          "Comprehensiveness",
          "Range of services wide enough for all common needs",
          "Number of service categories offered; referral rate",
          "Narrow, single-disease practice; everything referred out",
        ],
        [
          "Coordination",
          "Integration of care given elsewhere",
          "Proportion of referrals with a reply filed and acted on",
          "Duplicated tests, contradictory drugs, no owner of the plan",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "The three types of continuity",
      caption:
        "A shared record with a different doctor every visit preserves informational continuity and loses relational continuity - the type associated with lower mortality (Pereira Gray, BMJ Open 2018).",
      columns: ["Type", "What travels", "Practical tool"],
      rows: [
        [
          "Informational",
          "The data - history, drugs, results",
          "A single cumulative record, problem list, shared EMR",
        ],
        [
          "Management",
          "The plan - consistent and agreed",
          "Shared protocols, care plan, discharge summary, back-referral letter",
        ],
        [
          "Relational",
          "The relationship - the person who knows the patient",
          "A named doctor, a personal list, a family folder",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Five dimensions of access",
      caption: "Penchansky and Thomas. Acceptability is the one candidates miss.",
      root: "Access to first contact care",
      arms: [
        {
          label: "Availability",
          steps: ["Does the service and the manpower exist at all?"],
        },
        {
          label: "Accessibility (geographic)",
          steps: ["Distance and transport to the clinic"],
        },
        {
          label: "Affordability",
          steps: ["Cost of care and of the day of wages lost to attend"],
        },
        {
          label: "Accommodation",
          steps: [
            "Hours, appointment system and waiting time",
            "Extended evening hours, a same-day sick slot, walk-in acute access",
          ],
        },
        {
          label: "Acceptability",
          tone: "warn",
          steps: [
            "The patient's attitude to the provider: gender, language, caste, religion, stigma",
            "A woman who will not be examined by the only doctor, who is male",
          ],
        },
      ],
    },
    {
      kind: "branch",
      heading: "Twelve packages of an Ayushman Arogya Mandir",
      caption:
        "The operational definition of comprehensiveness in the public system. Tertiary interventional services such as cardiac catheterisation form no part of it.",
      root: "Comprehensive primary health care package",
      arms: [
        {
          label: "Maternal, child and reproductive",
          steps: [
            "Care in pregnancy and childbirth",
            "Neonatal and infant health care",
            "Childhood and adolescent health care",
            "Family planning and reproductive health",
          ],
        },
        {
          label: "Disease control and screening",
          steps: [
            "Communicable disease management - TB and Nikshay, malaria, dengue, leprosy",
            "Non-communicable disease screening and care, with CBAC over 30 years",
            "Mental health under the District Mental Health Programme",
            "Screening for oral, breast and cervical cancer from 30 years",
          ],
        },
        {
          label: "Other clinical packages",
          steps: [
            "Common ophthalmic and ENT problems",
            "Oral health",
            "Elderly and palliative care",
            "Emergency medical services and trauma care",
          ],
        },
      ],
    },
  ],

  "fm-principles-family-unit": [
    {
      kind: "compare",
      heading: "Core genogram symbols",
      caption:
        "Three generations, ages inside the symbols, the index patient marked, the household circled, and the date written at the bottom.",
      columns: ["Item", "Symbol"],
      rows: [
        ["Male / female", "Square / circle, with age written inside"],
        ["Index patient", "Double outline or an arrow pointing to the symbol"],
        ["Death", "A cross through the symbol with age or year of death"],
        [
          "Marriage / separation / divorce",
          "Horizontal line with year / one oblique stroke / two oblique strokes",
        ],
        ["Children", "Vertical lines from the marriage line, eldest on the left"],
        ["Miscarriage / stillbirth", "Small filled circle / small crossed symbol"],
        ["Household", "Dotted line enclosing all who live under one roof"],
        [
          "Close / conflictual / cut-off relationship",
          "Double line / jagged line / broken line with a bar",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "The family APGAR",
      caption:
        "Smilkstein 1978. Each item scores 2 for almost always, 1 for some of the time and 0 for hardly ever. It measures satisfaction with family function, not function itself.",
      columns: ["Letter", "Domain", "Question theme", "Score"],
      rows: [
        [
          "A",
          "Adaptation",
          "Satisfied that I can turn to my family for help when troubled",
          "0, 1 or 2",
        ],
        [
          "P",
          "Partnership",
          "Satisfied with the way my family talks things over and shares problems",
          "0, 1 or 2",
        ],
        [
          "G",
          "Growth",
          "Satisfied that my family accepts and supports my new activities or directions",
          "0, 1 or 2",
        ],
        [
          "A",
          "Affection",
          "Satisfied with the way my family expresses affection and responds to emotions",
          "0, 1 or 2",
        ],
        [
          "R",
          "Resolve",
          "Satisfied with the way my family and I share time together",
          "0, 1 or 2",
        ],
        [
          "Total",
          "Interpretation",
          "7-10 highly functional; 4-6 moderately dysfunctional; 0-3 severely dysfunctional",
          "0 to 10",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "SCREEM: resource or pathology",
      caption:
        "Six domains, each classified as a resource or a source of strain - SCREEM is described, never scored as a number.",
      columns: ["Domain", "Resource looks like", "Pathology looks like"],
      rows: [
        [
          "Social",
          "Extended kin and neighbours who visit and help with transport",
          "Isolation, recent migration, conflict with in-laws",
        ],
        [
          "Cultural",
          "Shared identity, food practices that support the diet",
          "Beliefs that forbid contraception, insulin or blood transfusion",
        ],
        [
          "Religious",
          "Congregation providing meals, money and emotional support",
          "Fatalism, refusal of treatment, guilt attributed to illness",
        ],
        [
          "Economic",
          "Stable income, insurance or PM-JAY card, savings",
          "Debt, daily wage loss with every clinic visit, catastrophic expenditure",
        ],
        [
          "Educational",
          "Literate member able to read instructions and labels",
          "Illiteracy, inability to follow a written drug schedule",
        ],
        [
          "Medical",
          "Trusted nearby clinic, good previous experience, ASHA linkage",
          "Distance, previous bad experience, dependence on informal providers",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Duvall's eight family life cycle stages",
      caption:
        "Stages are defined by the age of the oldest child. A crisis usually occurs where a horizontal stressor (a transition) meets a vertical one (an inherited pattern).",
      steps: [
        {
          label: "Married couple without children",
          detail: "Contraception, infertility, sexual problems, marital adjustment",
        },
        {
          label: "Childbearing - to 30 months",
          detail: "Postpartum depression, lactation problems, immunisation, colic",
        },
        {
          label: "Preschool children - 2.5 to 6 years",
          detail: "Diarrhoea, respiratory infection, malnutrition, injuries",
        },
        {
          label: "School children - 6 to 13 years",
          detail: "Anaemia, worm infestation, school refusal, vision and hearing problems",
        },
        {
          label: "Teenagers - 13 to 20 years",
          detail: "Substance use, risk behaviour, eating disorders, mental health, injuries",
        },
        {
          label: "Launching young adults",
          tone: "decision",
          detail:
            "First child leaving to the last leaving; empty nest depression, menopause, early chronic disease",
        },
        {
          label: "Middle-aged parents",
          detail: "Empty nest to retirement; hypertension, diabetes, obesity, cancer screening",
        },
        {
          label: "Ageing family members",
          detail: "Dementia, falls, polypharmacy, elder abuse, palliative needs",
        },
      ],
    },
  ],

  "fm-principles-records-audit": [
    {
      kind: "cycle",
      heading: "The clinical audit cycle",
      caption:
        "Drawn as a spiral rather than a closed circle, because each completed loop should reach a higher standard. An audit that stops at stage 3 is a survey.",
      steps: [
        {
          label: "Select a topic, set criteria and standards",
          detail:
            "High volume, high risk, high cost or known to be problematic; the standard is a percentage with a timeframe, such as 90% within 12 months",
        },
        {
          label: "Measure current performance",
          detail: "50-100 records, taken consecutively or by systematic random sampling",
        },
        {
          label: "Compare and analyse the gap",
          tone: "decision",
          detail: "96 of 150 diabetics = 64%, a shortfall of 26 points against a standard of 90%",
        },
        {
          label: "Implement a specific, owned change",
          detail:
            "A named person, a template field that will not close without a date, a monthly recall list - a note on the wall changes nothing",
        },
        {
          label: "Re-audit to close the loop",
          tone: "good",
          detail: "Second cycle at 6 months: 132 of 150 = 88%, with defaulters named for follow-up",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Donabedian criteria in a diabetes audit",
      caption:
        "Donabedian 1966. Impact is a programme evaluation term and is not part of the triad.",
      root: "Audit criteria",
      arms: [
        {
          label: "Structure - the resources available",
          steps: [
            "Staff, equipment, buildings, a functioning cold chain",
            "A calibrated glucometer with in-date strips in the clinic",
            "Standard: 100% of clinic days",
          ],
        },
        {
          label: "Process - what is done for the patient",
          tone: "good",
          steps: [
            "Every registered diabetic has an HbA1c in the last 12 months - standard 90%",
            "Every registered diabetic has a documented annual foot examination - standard 80%",
            "Preferred in audit: under the practice's control, smaller numbers, less confounded",
          ],
        },
        {
          label: "Outcome - the change in health status",
          steps: [
            "Proportion with HbA1c below 7% - standard 50% within 12 months",
            "Proportion with a new foot ulcer in the audit year - below 2% per year",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Clinical audit compared with research",
      caption:
        "The approval line is the examined one: an audit of existing care against agreed criteria needs service or institutional approval, not ethics committee review.",
      columns: ["Feature", "Clinical audit", "Research"],
      rows: [
        [
          "Question asked",
          "Are we doing what we have agreed is right?",
          "What is the right thing to do?",
        ],
        [
          "Standard used",
          "Existing evidence-based criteria and standards",
          "Generates new knowledge; no pre-set standard",
        ],
        [
          "Design",
          "Measure, change, re-measure (the spiral)",
          "Protocol-driven; may randomise or allocate",
        ],
        [
          "Patient exposure",
          "No new intervention or randomisation",
          "Patients may receive a new or allocated intervention",
        ],
        [
          "Approval needed",
          "Service or institutional approval; ethics review usually not required",
          "Formal ethics committee approval and written informed consent",
        ],
        [
          "Generalisability",
          "Local; applies to the audited service",
          "Intended to be generalised and published",
        ],
        [
          "Who owns it",
          "The clinical team providing the care",
          "The investigator, often external to the service",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The problem-oriented medical record",
      caption:
        "Weed, 1968. Progress notes are written in SOAP against the numbered problem, so one problem can be followed across years and across doctors.",
      steps: [
        {
          label: "The defined database",
          detail:
            "Agreed minimum dataset - history, drugs, allergies, immunisation, social and occupational data, baseline examination - collected once and updated",
        },
        {
          label: "The complete problem list",
          detail:
            "Numbered and dated, at the highest level of certainty currently justified; problems are never erased, only moved to inactive with a date",
        },
        {
          label: "Initial plans for each problem",
          tone: "warn",
          detail:
            "Diagnostic, therapeutic and patient education - the component candidates most often omit",
        },
        {
          label: "Progress notes in SOAP format",
          detail:
            "Subjective with ICE, objective, assessment with the degree of certainty, plan with safety netting in the words used",
        },
      ],
    },
  ],

  "fm-principles-ebm": [
    {
      kind: "flow",
      heading: "The five steps of EBM - the five As",
      caption:
        "Sackett 1996: the conscientious, explicit and judicious use of current best evidence in making decisions about the care of individual patients.",
      steps: [
        {
          label: "Ask a focused answerable question",
          detail: "PICO or PICOT; foreground rather than background questions",
        },
        {
          label: "Acquire the best evidence efficiently",
          detail:
            "Cochrane Library first, then PubMed Clinical Queries; know four or five pre-appraised sources",
        },
        {
          label: "Appraise it",
          detail: "Validity first, then importance, then applicability",
        },
        {
          label: "Apply it to this patient",
          tone: "decision",
          detail:
            "Integrate research evidence with clinical expertise and the patient's values and circumstances - omitting values loses the applied mark",
        },
        {
          label: "Assess or audit your own performance",
          tone: "good",
          detail: "Did you actually do the first four?",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Oxford CEBM levels and grades",
      caption:
        "Read upwards. The level describes the study, the grade describes what you should do about it; the hierarchy is a starting presumption, not a rule.",
      steps: [
        {
          label: "Level 5 - expert opinion",
          detail: "Or reasoning from physiology or bench research; supports grade D",
        },
        {
          label: "Level 4 - case series",
          detail: "And poor-quality cohort or case-control studies; supports grade C",
        },
        {
          label: "Level 3 - case-control studies",
          detail: "Individual or systematically reviewed; supports grade B",
        },
        {
          label: "Level 2 - cohort studies",
          detail: "Individual cohort study or a low-quality RCT; supports grade B",
        },
        {
          label: "Level 1 - RCT or systematic review",
          tone: "good",
          detail:
            "Systematic review of RCTs, or an individual RCT with a narrow confidence interval; supports grade A",
        },
      ],
    },
    {
      kind: "compare",
      heading: "The diagnostic 2x2 table worked through",
      caption:
        "1000 patients, prevalence 10%. Sensitivity and specificity do not change with setting; predictive values do, which is why two of every three positives here are false.",
      columns: ["Test result", "Disease present", "Disease absent", "Total"],
      rows: [
        ["Test positive", "a = 90 (true positive)", "b = 180 (false positive)", "270"],
        ["Test negative", "c = 10 (false negative)", "d = 720 (true negative)", "730"],
        ["Total", "100", "900", "1000"],
        [
          "Derived",
          "Sensitivity = 90/100 = 90%",
          "Specificity = 720/900 = 80%",
          "Accuracy = 810/1000 = 81%",
        ],
        [
          "Derived",
          "PPV = 90/270 = 33%",
          "NPV = 720/730 = 99%",
          "LR+ = 0.9/0.2 = 4.5; LR- = 0.1/0.8 = 0.125",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Treatment effects from CER 20% and EER 15%",
      caption:
        "Always quote the NNT with the outcome and the time period - an NNT of 20 over 5 years is a different proposition from an NNT of 20 over 6 weeks.",
      steps: [
        { label: "Control event rate CER = 20%", detail: "Events in the control group" },
        { label: "Experimental event rate EER = 15%", detail: "Events in the treated group" },
        { label: "Relative risk = EER / CER = 0.75" },
        {
          label: "Relative risk reduction = 25%",
          tone: "warn",
          detail:
            "(CER - EER) / CER = 0.05 / 0.20; quoting a 25% RRR without the 5% ARR is the commonest way evidence misleads",
        },
        { label: "Absolute risk reduction = 5%", detail: "CER - EER = 20% - 15%" },
        {
          label: "NNT = 1 / ARR = 20",
          tone: "good",
          detail: "20 patients treated for the trial duration to prevent one event",
        },
        {
          label: "NNH = 1 / absolute risk increase",
          detail: "If harm rises from 1% to 3%, NNH = 1 / 0.02 = 50",
        },
      ],
    },
  ],

  "fm-principles-research-thesis": [
    {
      kind: "compare",
      heading: "Observational study designs compared",
      caption:
        "Case-control is efficient for rare diseases; cohort for rare exposures. Most DNB family medicine theses are cross-sectional.",
      columns: ["Feature", "Cross-sectional", "Case-control", "Cohort"],
      rows: [
        [
          "Starting point",
          "Exposure and outcome measured together",
          "Starts with the outcome (cases and controls)",
          "Starts with the exposure",
        ],
        [
          "Measure obtained",
          "Prevalence, prevalence ratio",
          "Odds ratio",
          "Incidence, relative risk, attributable risk",
        ],
        [
          "Temporality",
          "Cannot be established",
          "Backward, inferred",
          "Established prospectively",
        ],
        [
          "Best suited to",
          "Estimating burden, planning services",
          "Rare diseases, long latency, multiple exposures",
          "Rare exposures, multiple outcomes, incidence",
        ],
        [
          "Main weakness",
          "No causal inference; reverse causality",
          "Recall bias, control selection, no incidence",
          "Cost, time, loss to follow-up",
        ],
        [
          "Typical DNB thesis use",
          "Commonest design used",
          "Occasionally used for risk factor studies",
          "Rarely feasible within the thesis timeline",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Bias and confounding",
      caption:
        "Bias is systematic error and is not reduced by a larger sample; only random error is. Randomisation alone balances unknown confounders.",
      root: "Systematic error",
      arms: [
        {
          label: "Selection bias - who got studied",
          steps: [
            "Berkson: hospital controls have different admission probabilities",
            "Neyman: rapidly fatal or rapidly resolving cases are missed",
            "Healthy worker effect, non-response, loss to follow-up",
            "Control: community controls, incident cases, follow up defaulters",
          ],
        },
        {
          label: "Information bias - how data were got",
          steps: [
            "Recall bias: mothers of malformed babies remember exposure better",
            "Interviewer, observer and social desirability bias",
            "Misclassification: non-differential biases towards the null",
            "Control: records, objective measures, blinded and trained observers",
          ],
        },
        {
          label: "Confounding - a third variable",
          tone: "decision",
          steps: [
            "Associated with the exposure",
            "An independent risk factor for the outcome",
            "Not on the causal pathway - a variable on it is a mediator",
            "Design: randomisation, restriction, matching",
            "Analysis: stratification, standardisation, multivariable regression",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Sample size for a prevalence study",
      caption:
        "n = Z squared x p x q / d squared, which at 95% confidence with Z taken as 2 becomes 4pq / d squared.",
      steps: [
        {
          label: "State the anticipated prevalence p",
          detail: "p = 20% from previous Indian studies, so q = 100 - p = 80",
        },
        {
          label: "State the absolute precision d",
          tone: "warn",
          detail:
            "d = 5 percentage points, so the estimate lies between 15% and 25%; relative precision of 20% would mean d = 4 and n = 400",
        },
        { label: "Apply n = 4pq / d squared", detail: "n = 4 x 20 x 80 / 25" },
        { label: "n = 256 before adjustment" },
        {
          label: "Add 10-20% for non-response",
          tone: "good",
          detail: "256 with 10% non-response is about 285, rounded to 300",
        },
        {
          label: "Adjust for clustering and population",
          detail:
            "Multiply by the design effect in cluster sampling; apply a finite population correction",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Telemedicine 2020: the prescribing lists",
      caption:
        "Consent is implied when the patient initiates and must be explicit when the RMP, caregiver or health worker does. Every prescription carries the RMP's registration number.",
      columns: ["List", "What it contains", "When it may be prescribed"],
      rows: [
        [
          "List O",
          "Over-the-counter medicines - paracetamol, ORS, lozenges, antiseptics and similar",
          "Any mode of teleconsultation, including audio and text",
        ],
        [
          "List A",
          "Relatively safe medicines with a low potential for abuse",
          "First consultation only if by video, or as a refill at follow-up",
        ],
        [
          "List B",
          "Add-on medicines for a condition already diagnosed in person",
          "Follow-up teleconsultation only",
        ],
        [
          "Prohibited list",
          "Schedule X drugs and drugs under the NDPS Act",
          "Never by telemedicine, by any mode",
        ],
      ],
    },
  ],

  "fm-principles-biostatistics": [
    {
      kind: "branch",
      heading: "Type of variable decides the summary and the test",
      caption:
        "Scales of measurement: nominal, ordinal, interval (equal intervals, arbitrary zero - degrees C) and ratio (true zero - weight, pulse, creatinine).",
      root: "Variable",
      arms: [
        {
          label: "Nominal - named, unordered",
          steps: [
            "Sex, blood group, religion, cause of death",
            "Two categories only is dichotomous or binary",
            "Summary: mode, reported as proportions",
            "Test: chi-square, or Fisher's exact if cells are small",
          ],
        },
        {
          label: "Ordinal - ranked, unequal intervals",
          steps: [
            "Pain mild-moderate-severe, NYHA class, Likert responses",
            "Summary: median with the interquartile range",
            "Test: Mann-Whitney or Kruskal-Wallis",
          ],
        },
        {
          label: "Discrete numerical - counted",
          steps: [
            "Parity, number of episodes of diarrhoea in a year",
            "Whole values only",
            "Summary: median or mean",
          ],
        },
        {
          label: "Continuous - measured",
          steps: [
            "Height, weight, haemoglobin, blood pressure",
            "Summary: mean with SD if normal; median with IQR if skewed",
            "Test: t test or ANOVA when normally distributed",
            "Downgrading it to anaemic or not loses information and power",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Choosing a test of significance",
      caption:
        "Answer four questions aloud: what type of outcome data, how many groups, paired or independent, and are the data normally distributed?",
      columns: [
        "Comparison",
        "Parametric test",
        "Non-parametric equivalent",
        "If the outcome is categorical",
      ],
      rows: [
        [
          "Two independent groups",
          "Unpaired Student t test",
          "Mann-Whitney U test",
          "Chi-square or Fisher's exact test",
        ],
        [
          "Two paired measurements",
          "Paired t test",
          "Wilcoxon signed-rank test",
          "McNemar's test",
        ],
        [
          "Three or more independent groups",
          "One-way ANOVA with post-hoc test",
          "Kruskal-Wallis test",
          "Chi-square test on an r x c table",
        ],
        [
          "Three or more paired measurements",
          "Repeated-measures ANOVA",
          "Friedman test",
          "Cochran's Q test",
        ],
        [
          "Association of two continuous variables",
          "Pearson correlation, linear regression",
          "Spearman rank correlation",
          "Logistic regression for a binary outcome",
        ],
        [
          "Time to an event",
          "Cox proportional hazards regression",
          "Kaplan-Meier curve with log-rank test",
          "Not applicable",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Normal distribution: area under the curve",
      caption:
        "Mean plus or minus 1.96 SD covers 95% of individuals; mean plus or minus 1.96 SEM is the 95% confidence interval of the mean. Confusing the two is the commonest calculation error in the paper.",
      steps: [
        { label: "Mean plus or minus 1 SD", detail: "68.3% of observations" },
        {
          label: "Mean plus or minus 1.96 SD",
          tone: "warn",
          detail:
            "95% of individuals - the basis of a biological reference range, which by definition labels 5% of healthy people abnormal",
        },
        { label: "Mean plus or minus 2 SD", detail: "95.4% of observations" },
        { label: "Mean plus or minus 2.58 SD", detail: "99% of observations" },
        { label: "Mean plus or minus 3 SD", detail: "99.7% of observations" },
      ],
    },
    {
      kind: "compare",
      heading: "Incidence versus prevalence",
      caption:
        "Village of 5000 with 250 existing cases on 1 January and 100 new cases during the year.",
      columns: ["Feature", "Incidence", "Prevalence"],
      rows: [
        ["Numerator", "New cases only", "Existing cases - old plus new"],
        [
          "Denominator",
          "Population at risk, excluding existing cases",
          "The whole population",
        ],
        ["What it measures", "Risk of developing the disease", "Burden of disease"],
        [
          "Worked example",
          "100 / (5000 - 250) = 100/4750 = 2.1% per year",
          "250 / 5000 = 5% point prevalence",
        ],
        [
          "Relationship",
          "Unchanged by a new cure",
          "Prevalence = incidence x average duration, so a cure lowers it",
        ],
      ],
    },
  ],
};

export default diagrams;
