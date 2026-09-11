/**
 * Diagrams for preventive, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "preventive-prevention-screening": [
    {
      kind: "flow",
      heading: "Levels of prevention along the natural history",
      caption:
        "The level is decided by the stage of disease in that patient, not by the drug - worked through diabetes.",
      steps: [
        {
          label: "Primordial",
          detail:
            "Before the risk factor appears. School nutrition policy, sugar-sweetened beverage tax, safe walking spaces",
        },
        {
          label: "Primary",
          detail:
            "Risk factor present, disease absent. Weight reduction and 150 min a week of activity in a person with a family history",
        },
        {
          label: "Secondary",
          detail:
            "Subclinical or early clinical disease. CBAC screening at 30 years, HbA1c confirmation, metformin started",
          tone: "decision",
        },
        {
          label: "Tertiary - disability limitation",
          detail:
            "Established disease. Annual retinal and foot examination, ACE inhibitor for albuminuria",
        },
        {
          label: "Tertiary - rehabilitation",
          detail:
            "Disability established. Prosthesis and gait training after amputation, vocational retraining",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Wilson and Jungner criteria, grouped for the answer book",
      caption: "WHO 1968, with the Andermann 2008 additions that earn the last two marks.",
      root: "Is this disease worth screening for?",
      arms: [
        {
          label: "The disease",
          steps: [
            "Important public health problem",
            "Recognisable latent or early symptomatic stage",
            "Natural history adequately understood",
          ],
        },
        {
          label: "The test",
          steps: [
            "Suitable, simple and safe",
            "Valid and reliable",
            "Cheap and acceptable to the population",
          ],
        },
        {
          label: "The treatment",
          tone: "warn",
          steps: [
            "An accepted treatment that alters outcome must exist",
            "Facilities for diagnosis and treatment available",
            "Agreed policy on whom to treat",
            "Without this the whole justification for screening collapses",
          ],
        },
        {
          label: "The programme",
          steps: [
            "A continuing process, not a one-off campaign",
            "Cost economically balanced against total medical expenditure",
          ],
        },
        {
          label: "Modern additions - Andermann 2008",
          steps: [
            "Informed consent",
            "Equity of access",
            "Evidence of benefit from trials",
            "Quality assurance and explicit accounting of harms",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Screening biases and how each is defeated",
      caption: "The reason a useless programme can look like a triumph.",
      columns: ["Bias", "What it does", "How it is avoided"],
      rows: [
        [
          "Lead time",
          "Lengthens survival from diagnosis without postponing death",
          "Use disease-specific mortality in the whole population as the endpoint",
        ],
        [
          "Length time",
          "Over-samples slow, indolent disease",
          "Randomised trial with a mortality endpoint; count interval cancers",
        ],
        [
          "Overdiagnosis",
          "Detects disease that would never have surfaced - Japanese infant neuroblastoma",
          "Compare cumulative incidence in screened and unscreened arms after long follow-up",
        ],
        [
          "Selection or volunteer",
          "Screened people are healthier to begin with",
          "Randomise the invitation and analyse by intention to screen",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "The NP-NCD population screens in India",
      caption:
        "The three cancers from age 30, every 5 years, on top of the CBAC form with a cut-off score of 4; blood pressure and glucose are annual.",
      columns: ["Condition", "Test as delivered", "Who, how often, and what next"],
      rows: [
        [
          "Cervix",
          "Visual inspection with 5 per cent acetic acid, by a trained ANM",
          "Women 30-65 years, every 5 years; VIA positive goes for colposcopy and biopsy",
        ],
        [
          "Breast",
          "Clinical breast examination",
          "From age 30, every 5 years; referral for imaging - population mammography is not recommended in India",
        ],
        [
          "Oral cavity",
          "Oral visual examination",
          "From age 30, every 5 years, priority to tobacco and areca-nut users - highest yield because the mouth is visible",
        ],
        [
          "Diabetes and hypertension",
          "Blood glucose and blood pressure for everyone screened",
          "From age 30, annually; CBAC score of 4 or more marks high risk",
        ],
      ],
    },
  ],

  "preventive-national-health-programmes": [
    {
      kind: "branch",
      heading: "The national programmes a family physician works inside",
      caption: "Group them by what they attack - it is how the enumerate question is marked.",
      root: "National Health Mission programme portfolio",
      arms: [
        {
          label: "Communicable disease",
          steps: [
            "NTEP - daily fixed-dose regimen, 2 months HRZE then 4 months HRE",
            "NCVBDC - malaria, dengue, kala-azar, filariasis, JE",
            "NLEP - multidrug therapy, 6 months paucibacillary and 12 months multibacillary",
          ],
        },
        {
          label: "Non-communicable disease",
          steps: [
            "NP-NCD - CBAC screening of everyone aged 30 and above",
            "NMHP with Tele-MANAS on 14416",
            "Target: 25 per cent relative fall in premature NCD mortality",
          ],
        },
        {
          label: "Reproductive, child and adolescent",
          steps: [
            "RCH - institutional delivery 88.6 per cent, MMR 97 per 100,000 (SRS 2018-20)",
            "RBSK - birth to 18 years, the 4 Ds, 30 conditions",
            "RKSK - 10 to 19 years, six strategic areas",
          ],
        },
        {
          label: "Financial protection",
          tone: "good",
          steps: [
            "Ayushman Arogya Mandir - free drugs and diagnostics",
            "PM-JAY - Rs 5 lakh per family per year, no cap on family size or age",
            "All citizens aged 70 and above covered from October 2024",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "IPHS 2022 population norms",
      caption:
        "The reduced norms in difficult terrain exist because access, not headcount, is the binding constraint.",
      columns: ["Facility", "Plain area", "Hilly or tribal area"],
      rows: [
        ["ASHA", "1,000", "Habitation-based in tribal areas"],
        ["Sub-centre or Ayushman Arogya Mandir", "5,000", "3,000"],
        ["Primary health centre", "30,000", "20,000"],
        ["Community health centre (first referral unit)", "120,000", "80,000"],
      ],
    },
    {
      kind: "compare",
      heading: "RBSK against RKSK",
      caption: "The two child and adolescent programmes that are confused with each other.",
      columns: ["Feature", "RBSK (2013)", "RKSK (2014)"],
      rows: [
        ["Age covered", "Birth to 18 years", "10 to 19 years"],
        [
          "What it screens or covers",
          "The 4 Ds - defects at birth, deficiencies, diseases, developmental delays including disability; 30 conditions",
          "Six strategic areas - nutrition, sexual and reproductive health, mental health, injuries and violence, substance misuse, NCDs",
        ],
        [
          "How it is delivered",
          "Mobile health teams at anganwadis and government schools",
          "Adolescent Friendly Health Clinics and peer educators (Saathiyas)",
        ],
        [
          "Where the child goes next",
          "Free management at District Early Intervention Centres with tertiary tie-ups",
          "Weekly Iron and Folic Acid Supplementation and counselling",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Programme, target and the number to quote",
      caption: "One defensible figure per programme is worth more than a list of names.",
      columns: ["Programme", "Stated goal", "Number to quote"],
      rows: [
        [
          "NTEP",
          "End TB in India by 2025",
          "Notification is mandatory on Nikshay for every provider, public or private",
        ],
        [
          "NLEP",
          "Zero transmission by 2027",
          "Elimination as a public health problem (below 1 per 10,000) reached December 2005",
        ],
        [
          "Malaria under NCVBDC",
          "Zero indigenous cases by 2027",
          "Annual parasite incidence below 1 per 1,000 defines Category 1, the elimination phase",
        ],
        [
          "Kala-azar",
          "Fewer than 1 case per 10,000 per block",
          "Target reached in all endemic blocks in 2023; single-dose liposomal amphotericin B 10 mg/kg",
        ],
        [
          "NP-NCD",
          "25 per cent relative fall in premature NCD mortality",
          "Hypertension in 24 per cent of men and 21 per cent of women aged 15-49 (NFHS-5)",
        ],
        [
          "NMHP",
          "Close the treatment gap",
          "Mental morbidity about 10.6 per cent of adults, treatment gap 70-92 per cent (NMHS 2015-16)",
        ],
        [
          "PM-JAY",
          "Financial protection for the bottom 40 per cent",
          "Rs 5 lakh per family per year; all aged 70 and above covered from October 2024",
        ],
      ],
    },
  ],

  "preventive-immunisation": [
    {
      kind: "flow",
      heading: "National Immunisation Schedule, learnt by the visit",
      caption: "Learn the pegs - birth, 6, 10, 14 weeks, 9 months, 16-24 months, 5, 10, 16 years.",
      steps: [
        {
          label: "Birth",
          detail:
            "BCG 0.05 mL intradermal left upper arm, OPV zero dose 2 drops, hepatitis B 0.5 mL IM within 24 hours",
        },
        {
          label: "6 weeks",
          detail:
            "Pentavalent-1 0.5 mL IM thigh, OPV-1, rotavirus-1 5 drops, fIPV-1 0.1 mL intradermal right upper arm, PCV-1",
        },
        { label: "10 weeks", detail: "Pentavalent-2, OPV-2, rotavirus-2" },
        { label: "14 weeks", detail: "Pentavalent-3, OPV-3, rotavirus-3, fIPV-2, PCV-2" },
        {
          label: "9-12 months",
          detail:
            "MR-1 0.5 mL subcutaneous right upper arm, JE-1 in endemic districts, PCV booster, vitamin A 1 lakh IU",
        },
        {
          label: "16-24 months",
          detail: "MR-2, JE-2, DPT booster-1, OPV booster; vitamin A 2 lakh IU six-monthly to 5 years",
        },
        { label: "5-6 years", detail: "DPT booster-2, 0.5 mL IM" },
        {
          label: "10 years and 16 years",
          detail: "Td 0.5 mL IM - Td replaced plain TT in 2019. In pregnancy Td-1 and Td-2 four weeks apart",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Open vial policy against the four-hour rule",
      caption:
        "The commonest cold chain error in the exam and in the field - the two rules apply to different vaccines.",
      columns: ["Feature", "Multi-dose liquid vaccine", "Reconstituted vaccine"],
      rows: [
        [
          "Which vaccines",
          "OPV, hepatitis B, pentavalent, Td, fIPV, liquid rotavirus",
          "BCG, measles-rubella, JE",
        ],
        [
          "How long an opened vial may be used",
          "Up to 28 days",
          "4 hours after reconstitution or the end of the session, whichever is earlier",
        ],
        [
          "Conditions attached",
          "Expiry not passed, VVM stage 1 or 2, stored at +2 to +8 degrees C, septum not submerged in water",
          "None - a good VVM and correct temperature do not override the rule",
        ],
        [
          "Why the rule exists",
          "The liquid formulation carries a preservative",
          "The diluent has no preservative; contamination causes toxic shock and abscess clusters",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "AEFI classification and the first response",
      caption:
        "Report to the Medical Officer and District Immunisation Officer within 24 hours, investigate within 48 hours, case investigation form within 7 days.",
      root: "Adverse event following immunisation",
      arms: [
        {
          label: "Vaccine product related",
          steps: [
            "Caused by the inherent properties of the vaccine",
            "Fever and local pain after pentavalent - paracetamol 15 mg/kg per dose",
            "Mild fever with rash 5-12 days after measles-rubella",
          ],
        },
        {
          label: "Vaccine quality defect",
          steps: [
            "A defect in the product or its administering device",
            "Can only be established by investigation and laboratory testing",
            "Reporting is what sets that investigation in motion",
          ],
        },
        {
          label: "Immunisation error related",
          tone: "warn",
          steps: [
            "The commonest preventable category - contamination or faulty reconstitution",
            "A cluster of abscesses from one vial or session is the classic picture",
            "Stop the vial and lot, seal remaining vials and diluents, report within 24 hours",
          ],
        },
        {
          label: "Immunisation anxiety related",
          steps: [
            "Anxiety about the injection itself",
            "Immediate, and does not cause abscesses",
            "Counselling and reassurance",
          ],
        },
        {
          label: "Coincidental",
          steps: [
            "Something that would have happened anyway",
            "Untenable when several children from one vial are affected",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Anaphylaxis at the session site",
      caption:
        "Every session must have an anaphylaxis kit and 30 minutes of observation after vaccination.",
      steps: [
        {
          label: "Recognise",
          detail: "Stridor, wheeze, hypotension, urticaria or angioedema within minutes of the vaccine",
          tone: "warn",
        },
        { label: "Lay the child flat, legs raised", detail: "Secure the airway and give oxygen" },
        {
          label: "Adrenaline 1:1000 intramuscularly",
          detail: "0.01 mL/kg into the anterolateral thigh, maximum 0.5 mL",
          tone: "good",
        },
        { label: "Repeat every 5 to 15 minutes as needed", detail: "Titrated to response" },
        { label: "Refer", detail: "Immediate transfer with continued monitoring" },
        {
          label: "Report as a serious AEFI",
          detail: "To the Medical Officer and District Immunisation Officer within 24 hours",
        },
      ],
    },
  ],

  "preventive-biostatistics": [
    {
      kind: "compare",
      heading: "Every index off one 2x2 table",
      caption:
        "Worked on the dengue example - 500 patients, 100 with disease, a = 90, b = 40, c = 10, d = 360.",
      columns: ["Index", "Formula", "Value in this example"],
      rows: [
        ["Sensitivity", "a / (a + c)", "90 / 100 = 90 per cent"],
        ["Specificity", "d / (b + d)", "360 / 400 = 90 per cent"],
        ["Positive predictive value", "a / (a + b)", "90 / 130 = 69.2 per cent, at this prevalence of 20 per cent"],
        ["Negative predictive value", "d / (c + d)", "360 / 370 = 97.3 per cent"],
        ["Accuracy", "(a + d) / total", "450 / 500 = 90 per cent"],
        ["Youden's index", "sensitivity + specificity - 1", "0.90 + 0.90 - 1 = 0.80"],
        ["Likelihood ratio positive", "sensitivity / (1 - specificity)", "0.90 / 0.10 = 9"],
        ["Likelihood ratio negative", "(1 - sensitivity) / specificity", "0.10 / 0.90 = 0.11"],
      ],
    },
    {
      kind: "compare",
      heading: "Choosing a statistical test",
      caption: "Read down by the type of outcome data, across by the number of groups.",
      columns: ["Outcome data", "Two independent groups", "Two paired groups", "Three or more groups"],
      rows: [
        ["Continuous, normal", "Unpaired t test", "Paired t test", "One-way ANOVA"],
        ["Continuous, skewed or ordinal", "Mann-Whitney U", "Wilcoxon signed-rank", "Kruskal-Wallis"],
        [
          "Categorical (proportions)",
          "Chi-square, or Fisher's exact if an expected cell is under 5",
          "McNemar's test",
          "Chi-square for an r x c table",
        ],
        [
          "Time to event",
          "Log-rank test on Kaplan-Meier curves",
          "Not applicable",
          "Log-rank across strata; Cox regression",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "From a trial result to the number needed to treat",
      caption:
        "Worked example - a 5 year trial in which 10 per cent of controls and 8 per cent of treated patients had a stroke.",
      steps: [
        { label: "Read off the two event rates", detail: "Control 10 per cent, treatment 8 per cent" },
        { label: "Absolute risk reduction", detail: "10 - 8 = 2 percentage points, that is 0.02" },
        {
          label: "Relative risk and relative risk reduction",
          detail: "RR = 0.08 / 0.10 = 0.8, so RRR = 20 per cent - impressive-sounding on a 2 point difference",
          tone: "warn",
        },
        {
          label: "Number needed to treat = 1 / ARR",
          detail: "1 / 0.02 = 50 patients treated for 5 years to prevent one stroke",
          tone: "good",
        },
        {
          label: "Always quote the time horizon",
          detail: "An NNT without its duration of follow-up means nothing",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Odds ratio against relative risk",
      caption: "Which one the design permits, and where the odds ratio misleads.",
      columns: ["Feature", "Odds ratio", "Relative risk"],
      rows: [
        ["Design it belongs to", "Case-control study", "Cohort study or randomised trial"],
        [
          "Formula",
          "(a x d) / (b x c) from the 2x2 table",
          "Incidence in the exposed divided by incidence in the unexposed",
        ],
        [
          "Incidence measurable",
          "No - the investigator fixed the number of cases",
          "Yes, which is why relative and attributable risk can be calculated",
        ],
        [
          "When they agree",
          "Closely approximates relative risk when the outcome is rare, below about 10 per cent",
          "The measure the odds ratio is approximating",
        ],
        [
          "The trap",
          "A risk of 50 per cent against 25 per cent gives an odds ratio of 3",
          "The same data give a relative risk of only 2",
        ],
      ],
    },
  ],

  "preventive-study-designs": [
    {
      kind: "compare",
      heading: "Case-control against cohort against randomised trial",
      caption: "The single most repeated differentiate question in Paper I.",
      columns: ["Feature", "Case-control", "Cohort", "Randomised controlled trial"],
      rows: [
        ["Starting point", "Disease (outcome)", "Exposure", "Investigator allocates the intervention"],
        ["Direction", "Backward from outcome to exposure", "Forward from exposure to outcome", "Forward"],
        [
          "Measure of association",
          "Odds ratio",
          "Relative risk, attributable risk, population attributable risk",
          "Relative risk, absolute risk reduction, number needed to treat",
        ],
        ["Incidence measured", "No", "Yes", "Yes"],
        [
          "Best suited for",
          "Rare disease, long latency, many exposures",
          "Rare exposure, many outcomes",
          "Proving the efficacy of a single intervention",
        ],
        [
          "Main biases",
          "Recall, Berkson, Neyman",
          "Loss to follow-up, healthy worker effect",
          "Performance and detection bias if unblinded",
        ],
        ["Cost and time", "Low, quick", "High, long", "Highest, moderate duration"],
        [
          "Classical example",
          "Doll and Hill 1950, smoking and lung cancer",
          "Framingham 1948; British Doctors Study 1951",
          "Salk vaccine field trial 1954",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Measures of disease frequency in one place",
      caption:
        "Get the denominator right and the arithmetic follows; prevalence = incidence x mean duration in a steady state.",
      columns: ["Measure", "Numerator", "Denominator", "What it is used for"],
      rows: [
        [
          "Incidence rate",
          "New cases in a period",
          "Population at risk in that period, x 1000",
          "Aetiology, evaluation of prevention",
        ],
        [
          "Point prevalence",
          "All cases at one moment",
          "Population at that moment, x 1000",
          "Planning services, cross-sectional surveys",
        ],
        [
          "Incidence density",
          "New cases",
          "Person-time at risk",
          "Cohorts with variable entry and exit - 25 cases in 2500 person-years is 10 per 1000 person-years",
        ],
        [
          "Attack rate",
          "Cases during an outbreak",
          "Population exposed, x 100",
          "Outbreak investigation",
        ],
        [
          "Secondary attack rate",
          "Secondary cases within one incubation period",
          "Exposed susceptible contacts, excluding the index case, x 100",
          "Infectiousness of the agent; vaccine efficacy in households",
        ],
        [
          "Case fatality rate",
          "Deaths from the disease",
          "Cases of the disease, x 100",
          "Virulence and quality of care - cholera 50 per cent untreated, under 1 per cent with ORS",
        ],
        [
          "Proportional mortality",
          "Deaths from one cause",
          "All deaths, x 100",
          "Ranking causes of death - says nothing about risk",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "The named biases and where each one strikes",
      caption: "Name the design as well as the bias - that is what separates a full answer.",
      root: "Bias by study design",
      arms: [
        {
          label: "Case-control study",
          tone: "warn",
          steps: [
            "Recall bias - cases over-report past exposure",
            "Berkson's bias - hospital controls chosen for a disease linked to the exposure, as in the 1981 coffee and pancreatic cancer finding",
            "Neyman or prevalence-incidence bias - only survivors are studied",
            "Remedy: population or neighbourhood controls, or a second control group",
          ],
        },
        {
          label: "Cohort study",
          steps: [
            "Loss to follow-up - doubtful above about 20 per cent",
            "Losses that differ by exposure status produce bias, not just imprecision",
            "Healthy worker effect",
          ],
        },
        {
          label: "Randomised controlled trial",
          steps: [
            "Performance and detection bias if the trial is unblinded",
            "Randomisation undone by per-protocol analysis or heavy differential attrition",
          ],
        },
        {
          label: "Screening evaluation",
          steps: [
            "Lead time bias - survival from diagnosis lengthens with no change in the date of death",
            "The only acceptable endpoint is disease-specific mortality in the whole population",
          ],
        },
      ],
    },
  ],

  "preventive-outbreak-investigation": [
    {
      kind: "flow",
      heading: "Investigating an outbreak, in order",
      caption:
        "Control does not wait for the analysis - treatment, isolation, chemoprophylaxis and post-exposure vaccination run in parallel from day one.",
      steps: [
        {
          label: "Verify the diagnosis",
          detail:
            "Examine a sample of cases and send specimens - a rumour of cholera and a cluster of rotavirus need different responses",
          tone: "decision",
        },
        {
          label: "Confirm the epidemic exists",
          detail:
            "Compare with the previous 3-5 years for the same weeks; endemic threshold is the mean plus 2 standard deviations on the IDSP chart",
        },
        {
          label: "Define the population at risk",
          detail: "Map the area with the census or ASHA household register, so denominators exist",
        },
        {
          label: "Case definition and line list",
          detail:
            "Suspected (clinical), probable (with an epidemiological link), confirmed (laboratory); search house to house with the ASHA and ANM",
        },
        {
          label: "Describe by time, place and person",
          detail:
            "Epidemic curve, spot map, attack rates by age, sex, occupation and water source - the group with the highest attack rate points to the exposure",
        },
        {
          label: "Formulate a hypothesis",
          detail: "Name the agent, the source, the mode of transmission and the population at risk",
        },
        {
          label: "Test the hypothesis",
          detail:
            "Retrospective cohort with food-specific attack rates where the population is enumerable; case-control where it is not",
        },
        {
          label: "Evaluate the ecology and report",
          detail:
            "Inspect the water supply, sewerage, kitchen and vector sites; preliminary report within 24 hours, full report at the end",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Reading the epidemic curve",
      caption: "The shape names the type of epidemic and dictates the control measure.",
      root: "Histogram of cases by date of onset",
      arms: [
        {
          label: "Point source common vehicle",
          steps: [
            "Explosive rise and rapid fall",
            "All cases within one incubation period range",
            "One meal, one contaminated batch, the Bhopal gas leak of 1984",
            "Time from exposure to the median case gives the median incubation period",
          ],
        },
        {
          label: "Continuous common source",
          steps: [
            "A prolonged plateau without discrete generations",
            "A contaminated well; the Delhi hepatitis E epidemic of 1955-56",
            "Control is to close or superchlorinate the source",
          ],
        },
        {
          label: "Propagated",
          steps: [
            "Successive peaks roughly one incubation period apart",
            "Rises until the supply of susceptibles is exhausted",
            "Hepatitis A, polio, measles, COVID-19",
            "Control is hygiene, hand washing and vaccination of contacts",
          ],
        },
        {
          label: "Mixed",
          steps: [
            "Starts as common source and then propagates",
            "Explosive first peak much larger than the later ones",
            "A water-borne shigella outbreak followed by household spread",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Incubation period identifies the agent",
      caption:
        "The single most discriminating piece of information in a food-borne outbreak - calculate it from the epidemic curve before any laboratory result.",
      columns: ["Agent", "Incubation period", "Clinical clue", "Usual vehicle"],
      rows: [
        [
          "Chemical - organophosphate, metals, argemone",
          "Minutes to 1 hour",
          "Cholinergic or neurological features, vomiting",
          "Contaminated grain, oil, stored food",
        ],
        [
          "Staphylococcus aureus enterotoxin",
          "1-6 hours",
          "Vomiting, no fever, recovery within 24 hours",
          "Milk sweets, cream, food handled by a carrier",
        ],
        ["Bacillus cereus emetic toxin", "1-6 hours", "Vomiting", "Fried or reheated rice"],
        [
          "Clostridium perfringens",
          "8-16 hours",
          "Watery diarrhoea and cramps",
          "Meat cooked in bulk and held warm",
        ],
        ["Salmonella, non-typhoidal", "12-72 hours", "Fever, diarrhoea, cramps", "Eggs, poultry, meat"],
        [
          "Vibrio cholerae",
          "Few hours to 5 days, usually 1-2 days",
          "Profuse painless watery diarrhoea",
          "Water, or food washed in water",
        ],
        [
          "Norovirus",
          "24-48 hours",
          "Vomiting and diarrhoea, short course",
          "Water, salads, shellfish, food handlers",
        ],
        ["Shigella", "1-3 days", "Dysentery with fever", "Water, hands, flies"],
        ["Typhoid", "10-14 days, range 3-60", "Sustained fever", "Water, milk, food from a carrier"],
        [
          "Hepatitis A and E",
          "15-50 days (mean 28) and 15-60 days (mean 40)",
          "Jaundice",
          "Water, uncooked food",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Thresholds that trigger an outbreak response",
      caption: "Every PHC must keep its own weekly records, because the threshold is local.",
      columns: ["Condition", "The threshold", "First action"],
      rows: [
        [
          "Any syndrome under IDSP",
          "Mean plus 2 standard deviations of the same week in previous years",
          "Verify the diagnosis and investigate as an outbreak; laboratory confirmation is a separate step",
        ],
        [
          "Cholera",
          "A single culture-confirmed case",
          "Report the same day, ORS corner and treatment centre, doxycycline 300 mg single dose to adult household contacts (azithromycin in children and pregnancy), chlorinate to a residual of 0.5 mg/L",
        ],
        [
          "Measles",
          "Five or more suspected cases in a block within four weeks; confirmed when at least two are IgM positive",
          "Vaccinate all children 6 months to 5 years within 72 hours, vitamin A to every case, coverage survey",
        ],
        [
          "Acute flaccid paralysis",
          "Any case in a child under 15 years",
          "Report within 24 hours, two stool samples 24-48 hours apart within 14 days of onset",
        ],
        [
          "Dengue",
          "Breteau index above 5 or house index above 10, or a fever cluster with a positive NS1 or IgM",
          "Source reduction, temephos larviciding and fogging within 24 hours",
        ],
        [
          "Any potential emergency of international concern",
          "IHR 2005 - smallpox, wild poliovirus, SARS and human influenza of a new subtype are always notifiable",
          "Notify WHO within 24 hours of the assessment; other diseases go through the four-question decision instrument",
        ],
      ],
    },
  ],

  "preventive-nutrition-programmes": [
    {
      kind: "compare",
      heading: "Severe against moderate acute malnutrition",
      caption: "Child aged 6-59 months, WHO 2006 standards. Any one criterion is enough for SAM.",
      columns: ["Criterion", "Severe acute malnutrition", "Moderate acute malnutrition"],
      rows: [
        ["Weight-for-height", "Below -3 SD", "Between -3 and -2 SD"],
        ["Mid-upper arm circumference", "Below 11.5 cm (red on the tape)", "11.5 to 12.4 cm (yellow on the tape)"],
        ["Oedema", "Bilateral pitting oedema, by itself sufficient", "Absent"],
        [
          "Where the child is managed",
          "Nutrition Rehabilitation Centre if complicated; community protocol if appetite is good and there are no complications",
          "Anganwadi - supplementary nutrition, deworming, IFA, feeding counselling, fortnightly weighing",
        ],
        [
          "Discharge or review",
          "15 per cent weight gain or weight-for-height above -2 SD, no oedema for two weeks, good appetite, mother trained; then four fortnightly visits",
          "Refer if the child fails to gain weight",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "WHO ten steps for the child with severe acute malnutrition",
      caption: "Steps 1-7 are stabilisation, 8-10 rehabilitation and follow-up.",
      steps: [
        { label: "Treat or prevent hypoglycaemia and hypothermia", detail: "Warm, feed frequently, keep with the mother" },
        {
          label: "Treat dehydration and correct electrolytes",
          detail: "ReSoMal, not standard ORS; potassium and magnesium",
          tone: "warn",
        },
        {
          label: "Treat infection in every child",
          detail: "Amoxicillin if uncomplicated; ampicillin with gentamicin if admitted",
        },
        {
          label: "Give micronutrients",
          detail: "Vitamin A, zinc, folic acid - but iron only after the child is gaining weight",
          tone: "warn",
        },
        {
          label: "Start cautious feeding with F-75",
          detail:
            "75 kcal per 100 mL, starting at 100 kcal/kg/day and rising gradually - refeeding syndrome (hypophosphataemia, cardiac failure, death in the first week) is why it starts low and slow",
          tone: "warn",
        },
        {
          label: "Catch-up growth with F-100",
          detail: "100 kcal per 100 mL, 150-220 kcal/kg/day",
          tone: "good",
        },
        {
          label: "Sensory stimulation and emotional support",
          detail: "Play, and the mother kept with the child throughout",
        },
        {
          label: "Prepare for follow-up after discharge",
          detail:
            "Discharge at 15 per cent weight gain or weight-for-height above -2 SD, no oedema for two weeks, mother trained; then four fortnightly visits",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Anaemia Mukt Bharat prophylactic doses",
      caption:
        "The 6 x 6 x 6 strategy - six beneficiaries, six interventions, six institutional mechanisms.",
      columns: ["Beneficiary", "Preparation", "Dose"],
      rows: [
        [
          "Children 6-59 months",
          "IFA syrup, 20 mg elemental iron and 100 mcg folic acid per mL",
          "1 mL twice a week",
        ],
        ["Children 5-9 years", "Pink tablet, 45 mg iron and 400 mcg folic acid", "One tablet weekly"],
        ["Adolescents 10-19 years", "Blue tablet, 60 mg iron and 500 mcg folic acid", "One tablet weekly"],
        ["Women 20-49 years", "Red tablet, 60 mg iron and 500 mcg folic acid", "One tablet weekly"],
        [
          "Pregnant women",
          "Red tablet, 60 mg iron and 500 mcg folic acid",
          "One tablet daily from the fourth month for 180 days",
        ],
        [
          "Lactating women",
          "Red tablet, 60 mg iron and 500 mcg folic acid",
          "One tablet daily for 180 days after delivery",
        ],
        [
          "Deworming, 1-19 years",
          "Albendazole on National Deworming Day, 10 February and 10 August",
          "200 mg (half a tablet, crushed) at 1-2 years, 400 mg from 2 years; pregnant women 400 mg once in the second trimester",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Anaemia in pregnancy - severity and what changes",
      caption: "Haemoglobin cut-offs from WHO 2011 as used by Anaemia Mukt Bharat.",
      steps: [
        {
          label: "No anaemia - 11 g/dL or above",
          detail: "One IFA tablet daily from the fourth month for 180 days, and 180 days after delivery",
          tone: "good",
        },
        {
          label: "Mild - 10 to 10.9 g/dL",
          detail: "Two IFA tablets a day, deworming and dietary advice",
        },
        {
          label: "Moderate - 7 to 9.9 g/dL",
          detail:
            "Two IFA tablets a day, recheck haemoglobin after four weeks, then continue one tablet daily to complete prophylaxis",
        },
        {
          label: "Severe - below 7 g/dL",
          detail:
            "Intravenous iron sucrose; also used for intolerance, non-response, or too little time before delivery",
          tone: "warn",
        },
        {
          label: "Transfusion territory - below 5 g/dL",
          detail:
            "Or below 7 g/dL near term or with cardiac failure; breathlessness at rest or after 34 weeks means refer, not another month of tablets",
          tone: "warn",
        },
      ],
    },
  ],

  "preventive-water-sanitation-vector": [
    {
      kind: "compare",
      heading: "Slow against rapid sand filtration",
      caption: "The vital layer is the whole difference.",
      columns: ["Feature", "Slow sand filter", "Rapid sand filter"],
      rows: [
        [
          "How it purifies",
          "Biologically, through the vital layer or Schmutzdecke - a zoogleal film of algae, bacteria and diatoms formed over 2-3 weeks",
          "Alum coagulation (5-40 mg/L), flocculation for about 30 minutes, sedimentation, then mechanical straining",
        ],
        ["Effective size of sand", "0.2 to 0.3 mm, bed about 1 m deep", "0.4 to 0.7 mm, coarser"],
        ["Filtration rate", "0.1 to 0.4 m3 per m2 per hour", "5 to 15 m3 per m2 per hour"],
        [
          "Bacterial removal",
          "99.9 to 99.99 per cent, without chemicals",
          "98 to 99 per cent; relies on the chlorination that follows",
        ],
        ["Cleaning", "Scrape the top 1-2 cm of sand every 1-2 months", "Back-washing, daily"],
        [
          "Where it is used",
          "Large land area; small towns and rural schemes",
          "A fraction of the land; the filter of every Indian city",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Disinfecting a village well with Horrock's apparatus",
      caption:
        "Six white cups, one black cup, two pipettes, starch-iodide indicator and a 2 g bleaching powder measure.",
      steps: [
        {
          label: "Measure the volume of water",
          detail:
            "pi x radius squared x depth in metres, then x 1000 for litres - a 4 m well with 5 m of water is 62,800 litres",
        },
        {
          label: "Find the chlorine demand",
          detail:
            "2 g bleaching powder in the black cup as stock; add 1, 2, 3 drops to the white cups; after 30 minutes add starch-iodide; the first cup with a distinct blue colour is the number",
          tone: "decision",
        },
        {
          label: "Calculate the dose",
          detail:
            "2.5 g of bleaching powder per 455 litres for each cup number - second cup means 5 g per 455 litres, so about 690 g for 62,800 litres",
        },
        {
          label: "Make a paste and let the lime settle",
          detail: "Dilute in a bucket, allow 5-10 minutes for the lime to settle, pour in the supernatant",
        },
        {
          label: "Mix and leave one hour",
          detail: "Agitate by drawing and returning water; ideally done at night",
        },
        {
          label: "Confirm a free residual of 0.5 mg/L",
          detail:
            "By the orthotolidine test at one hour; repeat daily during an epidemic. At least 0.2 mg/L must remain at the consumer's tap",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Biomedical waste colour coding, BMW Rules 2016",
      caption:
        "Applies to every generator including a single-doctor clinic and a vaccination camp; nothing is stored beyond 48 hours.",
      columns: ["Container", "What goes in", "Treatment"],
      rows: [
        [
          "Yellow bag",
          "Anatomical and soiled waste including the placenta, expired medicines, chemical waste",
          "Incineration",
        ],
        [
          "Red bag",
          "Contaminated recyclable plastic - IV sets, tubing, catheters, gloves, syringes without needles, blood bags",
          "Autoclave or microwave, then shred and recycle",
        ],
        [
          "White translucent puncture-proof container",
          "Sharps - needles and fixed-needle syringes; needles are cut at the point of use and never recapped",
          "Sterilised, then shredded or encapsulated",
        ],
        ["Blue box", "Glass vials and ampoules, metallic implants", "Disinfect, then recycle"],
        [
          "Black or green bin",
          "General municipal waste only - must never receive infectious material",
          "Municipal disposal",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Vector indices and the number that triggers action",
      caption: "Every one of these is a calculation question waiting to be asked.",
      columns: ["Index", "How it is calculated", "The threshold"],
      rows: [
        [
          "Annual parasite incidence (API)",
          "Confirmed malaria cases divided by population, x 1000",
          "Below 1 per 1000 is Category 1, the elimination phase; 1 or more is Category 3, intensified control",
        ],
        [
          "Annual blood examination rate (ABER)",
          "Blood slides examined divided by population, x 100",
          "At least 10 per cent, or the low API cannot be believed",
        ],
        [
          "Slide positivity rate",
          "Slides positive divided by slides examined, x 100",
          "Monitors the yield of surveillance",
        ],
        [
          "House index",
          "Percentage of houses with Aedes larvae",
          "Above 10 signals dengue transmission risk",
        ],
        [
          "Breteau index",
          "Positive containers per 100 houses inspected",
          "Above 5 triggers source reduction, temephos 1 ppm and fogging within 24 hours",
        ],
        [
          "Microfilaria rate",
          "Night blood surveys between 8.30 pm and midnight",
          "Below 1 per cent is the filariasis elimination target",
        ],
      ],
    },
  ],

  "preventive-disaster-management": [
    {
      kind: "cycle",
      heading: "The disaster cycle - four stages",
      caption: "It closes: what is learnt in recovery becomes the next round of mitigation.",
      steps: [
        {
          label: "Mitigation and prevention",
          detail:
            "Hazard and vulnerability mapping, land-use zoning, building codes and retrofitting, embankments, safe hospitals and schools, legislation",
        },
        {
          label: "Preparedness",
          detail:
            "Written and rehearsed plans, early warning with last-mile dissemination, shelters, stockpiling, training, mock drills, communication redundancy",
        },
        {
          label: "Response or relief",
          detail:
            "Impact to about 4-6 weeks: search and rescue, triage, definitive care, relief camps, surveillance and outbreak control, care of the dead, psychological first aid",
          tone: "warn",
        },
        {
          label: "Recovery",
          detail:
            "Weeks to years: restoring services and livelihoods, housing, replacing documents, restarting ANC, immunisation, TB and ART registers - build back better",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Levels of disaster in India",
      caption:
        "The grading is administrative and resource-based, not casualty-based. The DM Act 2005 has no provision for declaring a national disaster.",
      steps: [
        {
          label: "L0 - normal time",
          detail:
            "No disaster; the period used for preparedness and mitigation. DDMA and line departments, NDMA and SDMA for policy, NIDM for training",
        },
        {
          label: "L1 - district manages alone",
          detail:
            "District Disaster Management Authority under the District Magistrate or Collector. Localised flooding; a bus accident with 15 casualties",
        },
        {
          label: "L2 - state resources required",
          detail:
            "SDMA and State Executive Committee under the Chief Minister and Chief Secretary; SDRF deployed, central agencies on standby",
        },
        {
          label: "L3 - national assistance required",
          detail:
            "NDMA and the National Executive Committee under the Union Home Secretary; NDRF and armed forces deployed. Tsunami 2004, Gujarat 2001, Uttarakhand 2013",
          tone: "warn",
        },
        {
          label: "L4 - in some documents only",
          detail:
            "Catastrophe handled directly by the Government of India through the National Crisis Management Committee under the Cabinet Secretary; name your source if you use it",
        },
      ],
    },
    {
      kind: "flow",
      heading: "START triage - 30-2-Can do",
      caption:
        "Under 60 seconds per casualty, with only two permitted interventions: open the airway and control gross haemorrhage. Triage is dynamic and repeated at every echelon.",
      steps: [
        {
          label: "Can the casualty walk?",
          detail: "If yes, GREEN - minimal, the walking wounded, moved to a collection area",
          tone: "decision",
        },
        {
          label: "Respiration - open the airway first",
          detail: "No respiration after the airway is opened, BLACK. Rate above 30 per minute, RED - stop here",
          tone: "warn",
        },
        {
          label: "Perfusion",
          detail: "Capillary refill over 2 seconds, or no radial pulse, RED",
        },
        {
          label: "Mental status",
          detail: "Does not obey simple commands, RED",
        },
        {
          label: "Everything normal on all three",
          detail: "YELLOW - delayed, can safely wait 2-4 hours; splint, analgesia, re-triage frequently",
        },
        {
          label: "Distribute across hospitals",
          detail:
            "Not all to the nearest; keep a numbered casualty register. Over-triage above about 50 per cent degrades outcome by swamping the receiving hospital",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Sphere minimum standards for a relief camp",
      caption:
        "Sphere Handbook 4th edition, 2018. A breach predicts measles, acute respiratory infection, meningococcal disease and diarrhoea before the cases appear.",
      columns: ["Standard", "The minimum figure"],
      rows: [
        ["Water", "15 litres per person per day for drinking, cooking and hygiene"],
        ["Distance to the water point", "Within 500 metres, queuing under 30 minutes, no more than 250 persons per tap"],
        [
          "Latrines",
          "No more than 20 persons per latrine, sited over 30 metres from and downhill of any water source, with a 3:1 female to male ratio in public latrines",
        ],
        ["Shelter", "3.5 square metres of covered living space per person, about 45 square metres of total site area"],
        ["Food", "About 2,100 kcal per person per day, 10-12 per cent of energy from protein and 17 per cent from fat"],
        [
          "Health services",
          "One basic health unit per 10,000, one health centre per 50,000, one district hospital per 250,000",
        ],
        [
          "Crude mortality rate",
          "Above 1 per 10,000 per day, or under-5 mortality above 2 per 10,000 per day, or a doubling of baseline, means the emergency is out of control",
        ],
        [
          "Immunisation priority",
          "Measles vaccine with vitamin A for children 6 months to 15 years, regardless of previous status; mass typhoid or cholera vaccination is not the first answer",
        ],
      ],
    },
  ],

  "preventive-health-planning-management": [
    {
      kind: "cycle",
      heading: "The planning cycle, eight steps",
      caption:
        "It closes - the evaluation report becomes the next situation analysis. Planning is a cycle, not a line.",
      steps: [
        {
          label: "1. Analysis of the health situation",
          detail:
            "Where are we now? Census, SRS, NFHS, HMIS and IHIP, IDSP, facility survey against IPHS, SWOT. Produces a written problem statement with baselines",
        },
        {
          label: "2. Establish objectives and goals",
          detail: "Where do we want to be, and by when? SMART objectives with baselines and end-line targets",
        },
        {
          label: "3. Assess resources",
          detail:
            "Staff in position against sanction, budget heads and flexipool, untied funds, drugs, equipment, transport, time - and an explicit gap list",
        },
        {
          label: "4. Fix priorities",
          detail:
            "Magnitude, seriousness, feasibility, community concern, cost. Hanlon BPRS = [(A + 2B) x C] / 3 with the PEARL filter",
          tone: "decision",
        },
        {
          label: "5. Write up the formulated plan",
          detail: "Strategy, Gantt chart or network, line-item budget, named responsibility, indicators",
        },
        {
          label: "6. Programming and implementation",
          detail:
            "Organising, staffing, training, procurement, intersectoral coordination, community mobilisation",
        },
        {
          label: "7. Monitoring",
          detail:
            "Routine returns, supervisory checklists, stock registers, monthly review - variance against schedule and corrective action now",
        },
        {
          label: "8. Evaluation",
          detail:
            "Relevance, adequacy, progress, efficiency, effectiveness, impact; Donabedian structure-process-outcome; coverage surveys",
        },
      ],
    },
    {
      kind: "compare",
      heading: "PERT compared with CPM",
      caption: "Both are network techniques; only one of them handles uncertainty, and only one crashes.",
      columns: ["Feature", "PERT", "CPM"],
      rows: [
        [
          "Origin",
          "Programme Evaluation and Review Technique; US Navy Polaris programme, 1958",
          "Critical Path Method; DuPont with Remington Rand, 1957",
        ],
        [
          "Time estimates",
          "Probabilistic - optimistic, most likely and pessimistic",
          "Deterministic - a single estimate from past experience",
        ],
        [
          "Key formula",
          "te = (to + 4tm + tp) / 6; standard deviation = (tp - to) / 6",
          "Cost slope = (crash cost - normal cost) / (normal time - crash time)",
        ],
        ["Orientation", "Event-oriented - the milestones or nodes", "Activity-oriented - the tasks or arrows"],
        ["What it controls", "Time only in the classical form", "Time and cost together, with a trade-off"],
        [
          "Crashing",
          "Not a feature",
          "Central - shorten the critical activity with the lowest cost slope, then re-identify the critical path",
        ],
        [
          "Best suited to",
          "Novel one-off projects with uncertain durations - a first mass MR campaign",
          "Repetitive projects of known duration - constructing a new PHC building",
        ],
        [
          "Probability statement",
          "Yes - Z = (scheduled time - expected time) / project standard deviation",
          "No - completion time is treated as fixed",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Working a network - the block measles-rubella campaign",
      caption:
        "Activities: A approval 3 d, B microplanning 10 d, C vaccine and cold chain 7 d, D training 4 d, E social mobilisation 6 d, F sessions 12 d, G mop-up 4 d, H monitoring 3 d.",
      steps: [
        {
          label: "Estimate each activity time",
          detail:
            "te = (to + 4tm + tp) / 6. For social mobilisation with 4, 5 and 12 days, te = 6 days and SD = 1.33 days",
        },
        {
          label: "Total every path through the network",
          detail: "A-B-D-F-G-H = 36 days; A-B-E-F-G-H = 38 days; A-C-F-G-H = 29 days",
        },
        {
          label: "The longest path is the critical path",
          detail: "A-B-E-F-G-H, 38 days - and therefore the shortest possible project duration",
          tone: "decision",
        },
        {
          label: "Float = critical path minus that path",
          detail:
            "Training (D) has 38 - 36 = 2 days; the vaccine and cold chain activity (C) has 38 - 29 = 9 days. Critical activities have zero float",
        },
        {
          label: "Put supervision where the float is zero",
          detail: "Mobilisation, session conduct and mop-up - not the vaccine indent, which has nine days of slack",
          tone: "good",
        },
        {
          label: "Crash only critical activities",
          detail:
            "If the campaign must finish in 34 days. Probability of finishing in 40 days: Z = (40 - 38) / 2 = 1.0, about 84 per cent",
        },
      ],
    },
    {
      kind: "branch",
      heading: "SWOT - internal against external",
      caption:
        "Rampur PHC, objective: NQAS certification within 12 months. The commonest lost mark is putting an external item in an internal box.",
      root: "SWOT analysis of a PHC",
      arms: [
        {
          label: "Strengths - internal, favourable",
          tone: "good",
          steps: [
            "90 per cent of sanctioned posts filled, 2 medical officers and 3 staff nurses",
            "2019 building to IPHS layout with a 24x7 labour room",
            "ILR and deep freezer functional with complete temperature logging",
            "Institutional deliveries up from 40 to 78 a month; Kayakalp score 68 per cent",
          ],
        },
        {
          label: "Weaknesses - internal, unfavourable",
          steps: [
            "No written standard operating procedures and no internal assessment ever done",
            "Biomedical waste segregation erratic, only 3 of 6 staff trained",
            "Six-week stock-out of iron-folic acid and haemoglobin reagent",
            "No citizen's charter, grievance box or privacy screen; HMIS entry 2-3 weeks late",
          ],
        },
        {
          label: "Opportunities - external, favourable",
          steps: [
            "NHM quality budget and the District Quality Assurance Unit consultant",
            "Free diagnostics initiative and district external quality assurance linkage",
            "The Collector's monthly review as a route to the quality incentive money",
          ],
        },
        {
          label: "Threats - external, unfavourable",
          tone: "warn",
          steps: [
            "One medical officer post likely to be pulled for district duty; mid-cycle transfers",
            "Two private nursing homes drawing away deliveries",
            "Erratic power and monsoon flooding of the approach road for 3-4 weeks a year",
            "Irregular supply of consumables from the central medical store",
          ],
        },
      ],
    },
  ],

  "preventive-iec-social-marketing": [
    {
      kind: "flow",
      heading: "Planning a communication activity, seven steps",
      caption:
        "The feedback from step 7 re-enters step 1 - communication planning is a cycle, not a line.",
      steps: [
        {
          label: "1. Situation analysis and formative research",
          detail:
            "Service statistics, NFHS and IDSP data, plus a KAP survey, focus groups and interviews to learn why people behave as they do",
        },
        {
          label: "2. Name the behaviour and set objectives",
          detail:
            "Not high infant mortality but mothers in these 20 villages will initiate breastfeeding within one hour. SMART, achievable by communication alone",
        },
        {
          label: "3. Segment and define the audience",
          detail:
            "Primary (whose behaviour must change), secondary (husband, mother-in-law, ASHA, chemist), tertiary (panchayat, leaders, media, policy makers)",
        },
        {
          label: "4. Design the message and choose the appeal",
          detail:
            "One central idea, one feasible call to action. Rational, emotional, fear with an offered solution, humour, positive deviance or testimonial",
        },
        {
          label: "5. Select the channel mix and media plan",
          detail:
            "Mass media create awareness, folk media hold a low-literacy audience, interpersonal contact persuades. Fix budget and timeline here",
        },
        {
          label: "6. Pre-test, then produce, distribute and train",
          detail:
            "Pre-test on the intended audience, not on colleagues, for attraction, comprehension, acceptability, involvement and persuasion. Then train the communicators",
          tone: "warn",
        },
        {
          label: "7. Implement, monitor and evaluate",
          detail:
            "Process during, outcome against baseline, impact where the campaign is large enough. Reporting process indicators and calling it evaluated is the trap",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Five approaches that get confused with one another",
      caption: "In practice a programme uses all five; the question asks which one is described.",
      columns: ["Approach", "Defining feature", "Unit of action", "Indian example"],
      rows: [
        [
          "Health education",
          "Planned transfer of knowledge and skill; assumes knowledge leads to action",
          "The individual learner or a small group",
          "ORS preparation demonstration at the VHSND; diabetes foot-care teaching",
        ],
        [
          "IEC / BCC / SBCC",
          "Planned, segmented, multi-channel communication aimed at a behaviour and the norms holding it; two-way with feedback",
          "A defined and segmented audience, plus influencers and the environment",
          "Do boond zindagi ki for polio; Beti Bachao Beti Padhao; pictorial tobacco pack warnings",
        ],
        [
          "Social marketing",
          "Commercial marketing and the four Ps applied to a voluntary behaviour change; consumer research, exchange and competition",
          "The consumer, segmented and researched",
          "Nirodh condoms from 1968; ORS sachets; iodised salt; LLIN bed nets",
        ],
        [
          "Social mobilisation",
          "Bringing together all feasible intersectoral partners to raise demand, assist delivery and build ownership",
          "The whole social system - departments, panchayat, NGOs, faith leaders, SHGs, schools",
          "SMNet and ulema engagement in Pulse Polio; Swachh Bharat ODF campaign",
        ],
        [
          "Advocacy",
          "Organised use of evidence, media and pressure to win political commitment, policy and resources",
          "Policy makers, legislators, administrators and resource holders",
          "COTPA 2003 and the tobacco tax campaign; the salt iodisation notification",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "The marketing mix in health",
      caption:
        "Kotler and Zaltman, 1971. Place and price usually decide success more than promotion does.",
      root: "Social marketing mix",
      arms: [
        {
          label: "Product",
          steps: [
            "The tangible object - condom, ORS sachet, LLIN, iodised salt, sanitary napkin",
            "Or the service - institutional delivery, DOTS",
            "Or the intangible behaviour - exclusive breastfeeding, using a toilet, quitting tobacco",
            "Branded, attractive, well packaged, with a clear benefit",
          ],
        },
        {
          label: "Price",
          steps: [
            "Subsidised but rarely free - a nominal price signals value and supports the retailer",
            "The non-monetary price matters more: time, travel, waiting, pain, embarrassment, loss of pleasure",
            "JSY attacked the price directly with a cash transfer plus free delivery, drugs, diet, blood and transport",
          ],
        },
        {
          label: "Place",
          steps: [
            "Kirana shop, paan shop, chemist, barber, bus stand and cinema for condoms",
            "The ASHA as a depot holder for ORS; the anganwadi centre",
            "A toilet inside the house rather than in the field",
            "Get this wrong and the best message produces only frustrated demand",
          ],
        },
        {
          label: "Promotion",
          steps: [
            "Advertising, branding, jingles, hoardings, folk media, celebrity endorsement",
            "Point-of-sale display, interpersonal persuasion, public relations",
          ],
        },
        {
          label: "The added Ps",
          steps: [
            "People - staff, retailers, ASHAs and volunteers who deliver the offer",
            "Partnership - other departments, NGOs, the private sector, the media",
            "Policy - the tobacco act, the salt iodisation notification, helmet law",
            "Purse strings - where the money comes from and for how long",
          ],
        },
      ],
    },
    {
      kind: "branch",
      heading: "Barriers to communication, and how each is beaten",
      caption: "Cultural distance is the most important barrier in Indian practice.",
      root: "Why the message did not get through",
      arms: [
        {
          label: "Physiological",
          steps: [
            "Deafness, poor vision, defective speech, pain, fatigue, hunger, the very young and the very old",
            "Beaten by speaking clearly and slowly, hearing aids, large print, choosing a comfortable time",
          ],
        },
        {
          label: "Psychological",
          steps: [
            "Anxiety, fear, poor comprehension, fixed prejudice, low motivation, mistrust of the health system",
            "Beaten by empathy and rapport, starting from the audience's own concerns, repeating in small steps",
          ],
        },
        {
          label: "Environmental",
          steps: [
            "Noise, crowding, poor lighting, distance, an unsuitable time or place, an intimidating clinic",
            "Beaten by a quiet, well-lit, culturally acceptable venue and amplification",
          ],
        },
        {
          label: "Cultural",
          tone: "warn",
          steps: [
            "Illiteracy, customs, beliefs, taboos, religion, caste, gender norms, social class distance",
            "A message pitched far above the audience's educational level",
            "Beaten by local opinion leaders, matching the communicator to the audience, and pre-testing",
          ],
        },
        {
          label: "Linguistic",
          steps: [
            "An unfamiliar language, dialect or register; technical jargon",
            "Beaten by translation into the local dialect, plain words and pictures",
          ],
        },
      ],
    },
  ],

  "preventive-occupational-health": [
    {
      kind: "ladder",
      heading: "Hierarchy of control, ranked",
      caption:
        "Worked against respirable silica in a stone-crushing unit. Attempt the highest rung that is feasible - never start at the bottom.",
      steps: [
        {
          label: "1. Elimination",
          detail:
            "Abandon dry sandblasting; buy pre-cut stone so no crushing is done on site. The only control that cannot fail",
          tone: "good",
        },
        {
          label: "2. Substitution",
          detail:
            "Replace silica sand abrasive with steel shot, alumina or garnet; synthetic fibre for asbestos. Permanent, but the substitute must itself be assessed",
        },
        {
          label: "3. Engineering controls",
          detail:
            "Local exhaust ventilation over the crusher, enclosure, wet methods. Very effective but needs capital, commissioning and maintenance",
        },
        {
          label: "4. Administrative controls",
          detail:
            "Job rotation, limiting exposure time, training, work practice. Merely spreads the same total dose over more workers",
        },
        {
          label: "5. Personal protective equipment",
          detail:
            "Fit-tested respirators. Ranks last - it leaves the hazard untouched, protects only the wearer, fails silently and depends on continuous correct use",
          tone: "warn",
        },
        {
          label: "Not control at all - medical surveillance",
          detail:
            "Six-monthly chest radiographs detect disease that has already occurred and prevent nothing, although they are a legal requirement",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "The chemical carcinogen, the tumour and the industry",
      caption:
        "The classic viva question. IARC grades the strength of evidence that an agent can cause cancer - hazard, not risk at a given exposure.",
      columns: ["Carcinogen", "Predominant tumour", "Typical industry"],
      rows: [
        [
          "Benzene",
          "Acute myeloid leukaemia; also aplastic anaemia and myelodysplasia",
          "Rubber and shoe adhesive, printing, petrochemical, paint and solvent",
        ],
        [
          "Asbestos, crocidolite most potent",
          "Malignant mesothelioma of pleura and peritoneum; bronchogenic carcinoma",
          "Asbestos mining and cement sheet, insulation, shipbuilding, brake lining, demolition",
        ],
        [
          "Vinyl chloride monomer",
          "Angiosarcoma of the liver",
          "Polyvinyl chloride polymerisation, autoclave cleaning in plastics",
        ],
        [
          "Beta-naphthylamine, benzidine, 4-aminobiphenyl",
          "Transitional cell carcinoma of the urinary bladder",
          "Aniline dye, rubber antioxidant, leather, printing and pigment",
        ],
        [
          "Arsenic, inorganic",
          "Carcinoma of the skin; also lung, bladder and hepatic angiosarcoma",
          "Smelting, pesticide and glass manufacture, wood preservative, tanning",
        ],
        [
          "Polycyclic aromatic hydrocarbons - soot, coal tar, pitch",
          "Squamous carcinoma of skin and scrotum, Pott's chimney sweep's cancer; lung",
          "Chimney sweeping, coke ovens, coal gasification, roofing, mule spinning",
        ],
        [
          "Chromium, hexavalent",
          "Carcinoma of the lung and of the nasal cavity and paranasal sinuses",
          "Chrome plating, chromate pigment, stainless steel welding, tanning",
        ],
        [
          "Nickel compounds",
          "Carcinoma of the lung and of the nasal cavity",
          "Nickel refining, electroplating, alloy and battery manufacture",
        ],
        [
          "Hardwood dust",
          "Adenocarcinoma of the nasal cavity and paranasal sinuses",
          "Furniture and cabinet making, sawmills, shoe manufacture",
        ],
        [
          "Radon-222 and its daughters",
          "Carcinoma of the lung, multiplicative with smoking",
          "Underground and uranium mining, poorly ventilated basements",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "The pneumoconioses and organic dust diseases",
      caption:
        "Byssinosis is the one that is obstructive with a normal chest radiograph; the fibrotic and allergic entries are restrictive, and the benign pneumoconioses have normal lung function.",
      columns: ["Disease", "Dust or agent and trade", "Latency", "The discriminating feature"],
      rows: [
        [
          "Silicosis",
          "Free crystalline silica - stone cutting, sandblasting, foundry, pottery, agate grinding, slate pencil",
          "10-15 years chronic; 5-10 accelerated; months to 5 years acute",
          "Upper-zone rounded opacities, egg-shell hilar calcification, progressive massive fibrosis; restrictive; silicotuberculosis",
        ],
        [
          "Coal workers' pneumoconiosis",
          "Coal dust with variable silica - underground mining and coal handling",
          "12-20 years",
          "Coal macules with focal emphysema; complicated form has melanoptysis and cor pulmonale; Caplan's syndrome",
        ],
        [
          "Asbestosis",
          "Chrysotile, crocidolite, amosite - cement sheet, insulation, shipbuilding, brake lining",
          "10-20 years for asbestosis; 20-40 years for mesothelioma",
          "Lower-zone irregular opacities, calcified pleural plaques, bibasal crackles and clubbing; lung cancer multiplicative with smoking",
        ],
        [
          "Byssinosis",
          "Cotton, flax and hemp dust - blowing and card rooms of textile mills",
          "10-15 years, but Monday symptoms may start early",
          "Chest tightness on the first day back after a break, easing through the week; obstructive, chest X-ray usually normal; Schilling grades 0-3",
        ],
        [
          "Bagassosis",
          "Thermoactinomyces sacchari in stored dry bagasse - paper, board and rayon from bagasse",
          "Weeks to months; symptoms hours after a heavy exposure",
          "Hypersensitivity pneumonitis with fever; diffuse mottling; restrictive; prevented by 2 per cent propionic acid spray",
        ],
        [
          "Farmer's lung",
          "Saccharopolyspora rectivirgula in mouldy hay - farmers handling damp hay, grain and silage",
          "Acute attack 4-8 hours after exposure",
          "Fever, cough, dyspnoea and inspiratory squeaks; mid and upper zone changes; restrictive with low diffusing capacity",
        ],
        [
          "Benign pneumoconioses - siderosis, stannosis, baritosis",
          "Iron oxide, tin oxide, barium sulphate - arc welding, tin smelting, barytes",
          "Years",
          "Dense opacities out of all proportion to symptoms; no fibrosis, normal lung function; regress after exposure stops",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "The six benefits of the ESI Act, 1948",
      caption:
        "Contributions since 1 July 2019 are 0.75 per cent from the employee and 3.25 per cent from the employer, up to a wage ceiling of Rs 21,000 a month.",
      columns: ["Benefit", "What is paid"],
      rows: [
        [
          "Medical benefit",
          "Full medical care with no ceiling on expenditure, to the insured person and family, from the first day of insurable employment",
        ],
        [
          "Sickness benefit",
          "About 70 per cent of average daily wages for up to 91 days in two consecutive benefit periods, needing 78 days' contribution; extended benefit at 80 per cent for up to two years for 34 specified diseases; enhanced benefit at 100 per cent for 7 days after vasectomy and 14 after tubectomy",
        ],
        [
          "Maternity benefit",
          "100 per cent of wages for 26 weeks; 6 weeks for miscarriage; 12 weeks for a commissioning or adopting mother",
        ],
        [
          "Disablement benefit",
          "Temporary at 90 per cent of wages for as long as the disability lasts, with no contributory condition; permanent at 90 per cent as a life pension proportionate to loss of earning capacity",
        ],
        [
          "Dependants' benefit",
          "90 per cent of wages as a monthly pension to the widow, children up to 25 years and dependent parents after death from employment injury",
        ],
        ["Funeral expenses", "Paid to the person who performs the last rites"],
      ],
    },
  ],

  "preventive-climate-change-health": [
    {
      kind: "branch",
      heading: "The three pathways from climate change to health",
      caption: "This is the framework the long question wants; classify every effect into one of the three.",
      root: "Climate change acting on health",
      arms: [
        {
          label: "Direct effects",
          steps: [
            "The physical exposure acting on the body itself",
            "Heat illness across the spectrum from cramps to heat stroke",
            "Injury and death from cyclone, flood, lightning and wildfire",
            "IMD heat wave: 40 degrees C in the plains, 37 on the coast, 30 in the hills, with a departure of 4.5-6.4 degrees C",
          ],
        },
        {
          label: "Ecosystem-mediated effects",
          steps: [
            "Acting through natural systems",
            "Vector ecology - dengue spreading to higher altitudes and into new months as the extrinsic incubation period shortens",
            "Water and food-borne infection, aeroallergens, crop yield, zoonoses",
            "More ozone and particulate episodes, longer pollen seasons, wildfire and stubble smoke",
          ],
        },
        {
          label: "Socially mediated effects",
          steps: [
            "Displacement, livelihood loss, food insecurity, conflict, mental illness",
            "Outdoor and manual workers carry the largest exposure - farm labour, construction, brick kilns, salt pans, street vending, waste picking, delivery riding",
            "Labour productivity falls sharply above a wet bulb globe temperature of about 26-28 degrees C",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Heat exhaustion against heat stroke",
      caption: "The whole distinction turns on one thing: the sensorium.",
      columns: ["Feature", "Heat exhaustion", "Heat stroke"],
      rows: [
        ["Core temperature", "37 to 40 degrees C", "Above 40 degrees C"],
        [
          "Sensorium",
          "Intact",
          "Altered - seizure or coma is the defining feature",
        ],
        [
          "Skin and other findings",
          "Sweating preserved; headache, weakness, nausea, vomiting, dizziness, tachycardia, hypotension",
          "Hot dry skin in the classic form, sweating may persist in exertional; rhabdomyolysis, acute kidney injury, DIC, hepatic failure",
        ],
        [
          "First action",
          "Shade, remove clothing, active cooling, ORS or intravenous crystalloid, check electrolytes and observe",
          "Immediate rapid cooling - cold water immersion preferred in exertional, otherwise ice packs to neck, axillae and groins with tepid spray and fanning, targeting below 39 degrees C within about 30 minutes",
        ],
        [
          "Drugs",
          "Nothing specific beyond rehydration",
          "No antipyretic and no dantrolene - the set point is normal, the problem is failure of heat dissipation",
        ],
        [
          "Disposal",
          "Observe - untreated it progresses",
          "Medical emergency; airway protection, benzodiazepine for shivering or seizure, monitor CK, creatinine, potassium and coagulation, urgent referral",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Heat stroke at the roadside",
      caption: "Cool first, refer second, and never delay cooling for transport.",
      steps: [
        {
          label: "Recognise it",
          detail: "Core temperature above 40 degrees C with altered sensorium - keep a rectal thermometer",
          tone: "warn",
        },
        { label: "Move to shade and strip", detail: "Remove clothing and expose the skin" },
        {
          label: "Start cooling immediately",
          detail:
            "Cold water immersion where feasible; otherwise ice packs to neck, axillae and groins with continuous tepid-water spray and fanning",
          tone: "good",
        },
        {
          label: "Target below 39 degrees C in 30 minutes",
          detail: "Outcome depends almost entirely on how fast the core temperature comes down",
        },
        {
          label: "Run fluids and airway care alongside",
          detail:
            "Intravenous crystalloid guided by volume status, not instead of cooling; secure the airway; benzodiazepine for shivering or seizure",
        },
        {
          label: "Check glucose, potassium, creatinine and CK",
          detail: "Then refer. No paracetamol, no dantrolene",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Policy instruments for climate and health",
      caption:
        "Name the instrument, the year and the one commitment it carries - that is the whole mark scheme.",
      columns: ["Instrument", "Year", "What it commits to"],
      rows: [
        ["UNFCCC", "1992 (Rio)", "Defines climate change as change attributed to human activity over and above natural variability"],
        [
          "Montreal Protocol with the Kigali Amendment",
          "1987 and 2016",
          "Phase-out of ozone-depleting substances; Kigali adds a phase-down of hydrofluorocarbons",
        ],
        [
          "Paris Agreement (COP21)",
          "2015, in force 2016",
          "Hold warming well below 2 degrees C and pursue 1.5 degrees C; NDCs ratcheted every 5 years; global stocktake",
        ],
        [
          "IPCC Sixth Assessment Report",
          "2021-2023",
          "The evidence base - about 1.1 degrees C observed warming, human influence unequivocal, 1.5 degrees C likely in the early 2030s",
        ],
        [
          "National Action Plan on Climate Change",
          "2008",
          "Eight national missions - Solar, Energy Efficiency, Sustainable Habitat, Water, Himalayan Ecosystem, Green India, Sustainable Agriculture, Strategic Knowledge. Health is absent",
        ],
        [
          "National Programme on Climate Change and Human Health",
          "2019",
          "The health sector response, under MoHFW and the National Health Mission, implemented through NCDC",
        ],
        [
          "India's updated Nationally Determined Contribution",
          "2022",
          "Emissions intensity of GDP down 45 per cent by 2030 from 2005; about 50 per cent non-fossil installed capacity; sink of 2.5-3 billion tonnes CO2 equivalent; net zero by 2070",
        ],
        [
          "National Clean Air Programme and PM Ujjwala Yojana",
          "2019 and 2016",
          "40 per cent reduction in particulate levels by 2025-26 in over 130 non-attainment cities; LPG connections to poor households",
        ],
        [
          "National Ambient Air Quality Standards",
          "2009",
          "PM2.5 at 40 microgram/m3 annual and 60 microgram/m3 over 24 hours, against the WHO 2021 guideline of 5 and 15",
        ],
      ],
    },
  ],

  "preventive-health-information-gis": [
    {
      kind: "compare",
      heading: "GIS against GPS against remote sensing",
      caption: "They are complementary technologies, not synonyms - and only one of them analyses.",
      columns: ["Feature", "GIS", "GPS (GNSS)", "Remote sensing"],
      rows: [
        [
          "What it is",
          "System to store, integrate, analyse and display spatially referenced data",
          "Satellite constellation giving position on the earth's surface - NAVSTAR, and India's NavIC or IRNSS",
          "Acquiring information about the earth's surface from a distance, without contact",
        ],
        [
          "Question it answers",
          "What is where, and what does it mean?",
          "Where am I, or where is this object?",
          "What does the surface look like and what is it made of?",
        ],
        [
          "Typical output",
          "Layered thematic maps, analyses, dashboards",
          "Latitude, longitude, altitude, track",
          "Imagery, land use, vegetation, water bodies, built-up area",
        ],
        [
          "Public health use",
          "Hotspot analysis, catchment and access analysis, microplanning, overlay of disease on determinants",
          "Geo-tagging households, breeding sites, facilities and vaccination teams",
          "Mapping water bodies and land use to predict vector breeding; flood damage assessment",
        ],
        [
          "Indian example",
          "QGIS maps of dengue by ward; IHIP dashboards",
          "Geo-tagged toilets and facilities; polio team tracking",
          "IRS series - Resourcesat and Cartosat - via ISRO and NRSC, viewed on Bhuvan",
        ],
        [
          "Relation to the others",
          "The integrator - consumes GPS points and imagery alongside health data",
          "A data-collection technology feeding GIS",
          "A data-collection technology feeding GIS",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "What a GIS actually does",
      caption:
        "John Snow's spot map of the Broad Street pump, 1854, is the founding example - the source found three decades before the organism.",
      root: "GIS functions in public health",
      arms: [
        {
          label: "Mapping and query",
          steps: [
            "Where are the events and how are they distributed?",
            "Spot map of cholera cases around a hand pump; choropleth of district infant mortality",
            "List sub-centres with no ANM in post in this block",
            "A choropleth must shade a rate, never a raw count - counts map where people live",
          ],
        },
        {
          label: "Buffering and overlay",
          steps: [
            "What lies within a given distance, and where do two conditions coincide?",
            "Population within 5 km of a CHC; households within 400 m of an Aedes breeding site",
            "Deprivation layer over malaria incidence; arsenic aquifer over hand pumps in use",
            "A straight-line buffer overstates access in hilly or riverine terrain",
          ],
        },
        {
          label: "Proximity and network analysis",
          steps: [
            "Which facility is nearest, and how long does it take to reach?",
            "Travel time to the nearest first referral unit",
            "Ambulance placement for the golden hour",
          ],
        },
        {
          label: "Interpolation, density and cluster detection",
          steps: [
            "What is the value at unmeasured places, and is the clustering more than chance?",
            "Fluoride surface across a block from sampled wells; PM2.5 surface from monitoring stations",
            "Kernel density hotspot of dengue; SaTScan scan statistic for a TB cluster",
          ],
        },
        {
          label: "Change detection over time",
          steps: [
            "Is the pattern shifting?",
            "Serial containment-zone maps",
            "Pre- and post-intervention larval index maps",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Sources of health information in India",
      caption: "Every source answers one question well and another badly - name the limitation.",
      columns: ["Source", "What it provides", "Main limitation"],
      rows: [
        [
          "Census, last completed 2011",
          "Denominators: population by age, sex, residence, literacy, housing, amenities",
          "Ten-yearly; intercensal figures are projections that drift where migration is heavy",
        ],
        [
          "Civil Registration System",
          "Legal registration of births and deaths; cause of death via MCCD in reporting hospitals",
          "Death registration and medical certification still incomplete and urban-biased",
        ],
        [
          "Sample Registration System",
          "Official birth rate, death rate, IMR, NMR, TFR; MMR in special bulletins",
          "Sample-based, so no reliable district estimates; delayed publication",
        ],
        [
          "National Family Health Survey (NFHS-5, 2019-21)",
          "Coverage, nutrition, anaemia, NCD and fertility indicators down to district level",
          "Every 4-6 years, self-reported; cannot detect an outbreak or a short-term change",
        ],
        [
          "HMIS portal",
          "Monthly facility-based aggregate service data - ANC, deliveries, immunisation, OPD",
          "Aggregate; denominator problems, entry errors, private sector largely missing",
        ],
        [
          "IDSP, case-based on IHIP from April 2021",
          "Near real-time case-based reporting of about 33 epidemic-prone conditions, geo-referenced",
          "Under-reporting from the private sector; depends on the peripheral worker's discipline",
        ],
        [
          "Programme systems - Nikshay, RCH portal, U-WIN, NCD app",
          "Individual, name-based, longitudinal tracking within one programme",
          "Vertical silos with duplicate entry; ABDM and the ABHA number are the attempt to link them",
        ],
        [
          "Hospital records and disease registers",
          "Detailed clinical and pathological data; incidence in registry areas",
          "Only those who reached the hospital - not representative of the community",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "The traps of spatial analysis",
      caption: "Say the limitation out loud - it is where the marks are in a GIS question.",
      root: "Before you believe the map",
      arms: [
        {
          label: "Ecological fallacy",
          tone: "warn",
          steps: [
            "Inferring about individuals from areas",
            "Districts with more solid-fuel use have more stroke admissions says nothing about the individuals who cook with it",
            "The unit of observation is the district, not the person",
          ],
        },
        {
          label: "Modifiable areal unit problem",
          steps: [
            "Scale effect - the result changes with the level of aggregation, blocks against districts",
            "Zoning effect - the result changes when boundaries of the same size are redrawn",
            "The same logic that makes electoral gerrymandering possible",
          ],
        },
        {
          label: "Spatial autocorrelation",
          steps: [
            "Neighbouring areas resemble one another - Tobler's first law",
            "Observations are therefore not independent and ordinary tests are over-confident",
            "Tested with Moran's I or Getis-Ord Gi*",
          ],
        },
        {
          label: "A cluster is not an outbreak",
          steps: [
            "Among hundreds of wards extremes appear by chance and the eye finds clusters in random points",
            "Apply a scan statistic, check ascertainment, look for the same cluster in an independent period",
            "Edge effect - clusters near the boundary are incompletely observed",
          ],
        },
        {
          label: "Denominators and reporting",
          tone: "warn",
          steps: [
            "Rates over projected populations are most wrong where migration is greatest",
            "Incomplete reporting looks exactly like low incidence - check the number of reporting units first",
            "Never map identifiable patients; aggregate, suppress small numbers, geomask published points",
          ],
        },
      ],
    },
  ],

  "preventive-sex-ratio-pcpndt": [
    {
      kind: "compare",
      heading: "Three sex ratios, and which one to act on",
      caption:
        "India expresses the sex ratio as females per 1000 males, so a rising figure means more women - getting the direction wrong inverts the whole answer.",
      columns: ["Indicator", "Definition", "Source and the figure to quote"],
      rows: [
        [
          "Sex ratio",
          "Females per 1000 males in the whole population",
          "Census; 943 in 2011, its best since 1961. Dominated by adult migration and mortality",
        ],
        [
          "Child sex ratio",
          "Females per 1000 males aged 0-6 years",
          "Census; 918 in 2011 - the lowest since independence, from 927 in 2001 and 945 in 1991. Available once a decade and confounds sex selection, excess female mortality and under-enumeration",
        ],
        [
          "Sex ratio at birth",
          "Female live births per 1000 male live births",
          "SRS, Civil Registration System, HMIS and NFHS; monthly at district and block level. The timeliest indicator - BBBP targets a 2 point annual gain",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "PCPNDT Act 1994, amended 2003 - what is barred and what is allowed",
      caption:
        "The Act targets sex selection, not abortion; lawful termination is governed by the MTP Act. Conflating the two denies women a legal abortion.",
      root: "Pre-conception and Pre-natal Diagnostic Techniques Act",
      arms: [
        {
          label: "Prohibited",
          tone: "warn",
          steps: [
            "Section 3A - no sex selection on a woman, a man, or any tissue, embryo, conceptus, fluid or gamete",
            "Sections 5(2) and 6 - no communication of the sex of the foetus, by words, signs or in any other manner",
            "Section 3B - no sale of an ultrasound machine to anyone not registered under the Act",
            "Section 22 - no advertisement in any medium, including internet and electronic media",
          ],
        },
        {
          label: "Permitted - the five grounds of Section 4(3)",
          steps: [
            "Pregnant woman above 35 years of age",
            "Two or more spontaneous abortions or foetal loss",
            "Exposure to a potentially teratogenic agent - drugs, radiation, infection, chemicals",
            "Family history of mental retardation, physical deformity such as spasticity, or other genetic disease",
            "Any other condition specified by the Central Supervisory Board",
          ],
        },
        {
          label: "What must exist on paper",
          steps: [
            "Form A application and Form B certificate of registration, valid 5 years",
            "The statutory board displayed, stating that sex determination is not done and is punishable",
            "Form G - written informed consent in a language she understands, with a copy given to her",
            "Form F for every pre-natal diagnostic procedure, including every obstetric ultrasound",
          ],
        },
        {
          label: "Who enforces it",
          steps: [
            "Appropriate Authority at district level, with decoy and sting operations",
            "Central Supervisory Board chaired by the Union Health Minister, meeting at least every 6 months",
            "Advisory Committee - three medical experts, one legal expert, one publicity officer, three social workers, meeting at least once in 60 days",
            "National Inspection and Monitoring Committee of MoHFW",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "PCPNDT offences and penalties",
      caption:
        "Offences are cognizable, non-bailable and non-compoundable, and tried by no court below a Judicial Magistrate of the first class.",
      columns: ["Offender or offence", "First conviction", "Subsequent conviction"],
      rows: [
        [
          "Doctor, owner or employee of a genetic clinic, laboratory or imaging centre - Section 23(1)",
          "Imprisonment up to 3 years and fine up to Rs 10,000",
          "Imprisonment up to 5 years and fine up to Rs 50,000",
        ],
        [
          "State Medical Council action on the same doctor - Section 23(2)",
          "Registration suspended once charges are framed; name removed from the register for 5 years on conviction",
          "Name removed from the medical register permanently",
        ],
        [
          "Person seeking or encouraging sex selection - husband or relative, Section 23(3)",
          "Imprisonment up to 3 years and fine up to Rs 50,000",
          "Imprisonment up to 5 years and fine up to Rs 1,00,000",
        ],
        [
          "Advertising sex determination in any medium - Section 22",
          "Imprisonment up to 3 years and fine up to Rs 10,000",
          "The same, with cancellation of registration",
        ],
        [
          "Contravention with no specific penalty, such as an incomplete Form F - Section 25",
          "Imprisonment up to 3 months or fine up to Rs 1000 or both",
          "A further fine of Rs 500 for every day the contravention continues",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Running a compliant ultrasound room",
      caption:
        "Incomplete or missing Form F is the commonest reason a registration is suspended.",
      steps: [
        {
          label: "Register the facility",
          detail: "Form A application, Form B certificate, valid 5 years and renewable",
        },
        {
          label: "Display the statutory board",
          detail: "Alongside the certificate, stating that sex determination is not done here and is punishable",
        },
        {
          label: "Record the written indication",
          detail: "The referring doctor states which of the five Section 4(3) grounds applies; parental anxiety is not one",
          tone: "decision",
        },
        {
          label: "Take consent on Form G",
          detail: "In a language she understands, with a copy given to her",
        },
        {
          label: "Complete Form F before the procedure",
          detail:
            "Every pre-natal diagnostic procedure including every obstetric ultrasound; signed by the person conducting it and by the woman",
        },
        {
          label: "Never disclose the sex of the foetus",
          detail: "By words, signs or in any other manner - to the woman, her relatives or anyone else",
          tone: "warn",
        },
        {
          label: "Send returns and keep records",
          detail:
            "Consolidated returns to the Appropriate Authority by the fifth of the following month; records preserved 2 years from the last entry, longer if a case is pending",
        },
      ],
    },
  ],

  "preventive-child-women-legislation": [
    {
      kind: "compare",
      heading: "Juvenile Justice Board against Child Welfare Committee",
      caption:
        "Two streams, two bodies, and a child is never moved from one to the other by an administrative act.",
      columns: ["Feature", "Juvenile Justice Board", "Child Welfare Committee"],
      rows: [
        [
          "Whom it deals with",
          "Child in conflict with law - alleged or found to have committed an offence, under 18 on the date of the offence",
          "Child in need of care and protection",
        ],
        [
          "Composition",
          "Principal Magistrate - a Metropolitan Magistrate or Judicial Magistrate First Class with training in child psychology or child welfare - plus two social workers, at least one a woman",
          "Chairperson plus four members, at least one a woman and one an expert on matters concerning children",
        ],
        [
          "Standing and term",
          "A Chief Metropolitan or Chief Judicial Magistrate is expressly barred from being the Principal Magistrate",
          "Powers of a metropolitan magistrate; term 3 years; quorum 3",
        ],
        [
          "What it does",
          "Inquiry within 4 months, dispositional orders, preliminary assessment of a 16-18 year old accused of a heinous offence",
          "Care, protection, restoration, and declaring a child legally free for adoption",
        ],
        [
          "Institutions it uses",
          "Observation home pending inquiry; special home for rehabilitation, maximum stay 3 years; place of safety",
          "Children's home, open shelter, specialised adoption agency, fit person and fit facility, after-care to 21 years",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "JJ Act 2015 - offence grading and what follows",
      caption:
        "The age bar comes first. A 15 year old, however grave the offence, is dealt with entirely by the Board.",
      steps: [
        { label: "Petty offence", detail: "Maximum punishment up to 3 years" },
        {
          label: "Serious offence",
          detail:
            "3 to 7 years. The 2021 amendment made offences of 3 to 7 years serious, non-cognizable and non-bailable",
        },
        {
          label: "Heinous offence",
          detail: "Minimum punishment of 7 years or more - the grading on which the adult-trial provision turns",
        },
        {
          label: "Aged 16 to 18 and accused of a heinous offence",
          detail:
            "Preliminary assessment by the Board within three months into mental and physical capacity, understanding of consequences and the circumstances",
          tone: "decision",
        },
        {
          label: "Transfer to the Children's Court",
          detail:
            "Which may itself decide the child should be tried as a child. A case is never sent to the Sessions Court",
        },
        {
          label: "If tried as an adult",
          detail:
            "Place of safety until 21 years, then re-evaluated and either released on probation or transferred to jail. Death and life imprisonment without release remain barred",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Mandatory duties on the doctor, and the penalty for failing",
      caption:
        "Note the deliberate contrast - domestic violence reporting is the adult woman's choice, POCSO reporting is not.",
      columns: ["Law", "What triggers it", "What you must do", "Penalty for failing"],
      rows: [
        [
          "POCSO Act 2012, Sections 19 and 21",
          "Knowledge or apprehension of any sexual offence against a person below 18 - a disclosure, an examination finding, a pregnancy in a girl below 18",
          "Report to the local police or the Special Juvenile Police Unit; they inform the Child Welfare Committee and the Special Court within 24 hours",
          "Up to 6 months imprisonment or fine or both; up to 1 year for the person in charge of a company or institution",
        ],
        [
          "JJ Act 2015, Sections 32 and 34",
          "A separated, lost, run-away or abandoned child, including an abandoned newborn",
          "Inform Childline 1098, the police, the District Child Protection Unit or the Child Welfare Committee within 24 hours",
          "Up to 6 months or fine or both, for the person in charge of a hospital, nursing home or maternity home",
        ],
        [
          "Criminal Law (Amendment) Act 2013",
          "A victim of rape, any sexual offence or an acid attack presents to any hospital, public or private",
          "Provide free first aid and medical treatment at once and inform the police",
          "Up to 1 year or fine or both, for the person in charge of the hospital",
        ],
        [
          "PCPNDT Act 1994, amended 2003",
          "Any pre-natal diagnostic procedure, or a request to disclose the sex of the foetus",
          "Register the facility, maintain Form F, display the statutory notice, never disclose foetal sex by words or signs",
          "First offence up to 3 years and Rs 10,000; suspension and then removal of registration by the State Medical Council",
        ],
        [
          "MTP Act 1971, amended 2021, Section 5A",
          "Any medical termination of pregnancy",
          "Keep the name and particulars of the woman confidential; disclose only to a person authorised by law",
          "Up to 1 year or fine or both",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "The numbers in women's legislation",
      caption:
        "These thresholds belong to different Acts and are deliberately used as distractors for one another.",
      columns: ["Provision", "The figure"],
      rows: [
        [
          "Maternity leave, first two children (Maternity Benefit Act as amended 2017)",
          "26 weeks, of which not more than 8 may be taken before delivery",
        ],
        ["Maternity leave, third and subsequent child", "12 weeks"],
        [
          "Commissioning mother, or adopting a child below three months",
          "12 weeks",
        ],
        ["Establishments to which the Maternity Benefit Act applies", "10 or more employees"],
        [
          "Creche under the amended Maternity Benefit Act",
          "Mandatory at 50 or more employees, with four visits a day permitted",
        ],
        ["Creche under the Factories Act 1948", "Where more than 30 women are employed"],
        [
          "Internal Complaints Committee (Sexual Harassment at Workplace Act 2013)",
          "Mandatory at 10 or more employees, chaired by a senior woman, with at least half the members women",
        ],
        [
          "Sexual harassment complaint and inquiry",
          "Complaint within 3 months, extendable by 3; inquiry completed in 90 days; report to the employer in 10 days; action within 60 days",
        ],
        [
          "Medical termination of pregnancy (MTP Act as amended 2021)",
          "Up to 20 weeks on one doctor's opinion; 20 to 24 weeks on two for defined categories; beyond 24 weeks only by a State Medical Board",
        ],
      ],
    },
  ],
};

export default diagrams;
