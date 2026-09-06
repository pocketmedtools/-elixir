import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "preventive-prevention-screening",
  title: "Levels of prevention and the principles of screening",
  oneLiner:
    "Prevention is classified by the point in the natural history of disease at which it acts - primordial, primary, secondary and tertiary - and screening is secondary prevention that is justified only when the disease, the test and the available treatment together satisfy the Wilson and Jungner criteria.",
  frequency: "core",
  keywords: [
    "levels of prevention",
    "primordial prevention",
    "primary prevention",
    "secondary prevention",
    "tertiary prevention",
    "health promotion",
    "specific protection",
    "early diagnosis",
    "disability limitation",
    "rehabilitation",
    "screening",
    "Wilson and Jungner",
    "lead time bias",
    "length bias",
    "overdiagnosis",
    "natural history of disease",
    "high-risk approach",
    "population approach",
    "Rose paradox",
    "CBAC",
    "VIA",
    "number needed to screen",
  ],
  sections: [
    {
      heading: "Natural history of disease and where prevention acts",
      points: [
        "Every disease passes through a **pre-pathogenesis phase** (the agent, host and environment interacting before the person is affected) and a **pathogenesis phase** (subclinical or presymptomatic disease, then clinical disease, then outcome - recovery, disability or death).",
        "**Primordial prevention** acts before the risk factor itself appears, in childhood and at the level of policy: preventing the adoption of tobacco, of a high-salt processed diet, of sedentary living. It is the only level that operates on the whole population and the only one that changes the shape of the risk-factor distribution.",
        "**Primary prevention** acts after the risk factor exists but before disease begins, and has two arms in Leavell and Clark's scheme - **health promotion** (nutrition, housing, exercise, health education, marriage counselling) and **specific protection** (immunisation, iodisation of salt, fluoridation, seat belts, chemoprophylaxis, personal protective equipment).",
        "**Secondary prevention** acts in the subclinical or early clinical phase - **early diagnosis and prompt treatment**. Screening, contact tracing in tuberculosis, and case detection under the NP-NCD population-based screening programme all sit here.",
        "**Tertiary prevention** acts once disease is established, and has two arms - **disability limitation** (foot care in diabetes, MDT to prevent leprosy deformity, cardiac rehabilitation) and **rehabilitation** (medical, vocational, social and psychological), which is the level a family physician spends most time on and gets least credit for.",
        "The exam trap is to place a measure at the wrong level: giving iron to a pregnant woman with no anaemia is primary prevention, giving it to one with haemoglobin 9 g/dL detected on antenatal screening is secondary prevention, and giving it after cardiac failure from severe anaemia is tertiary prevention. **The level is decided by the stage of the disease in that patient, not by the drug.**",
      ],
    },
    {
      heading: "Modes of intervention in family practice",
      points: [
        "Leavell and Clark describe **five modes of intervention** - health promotion, specific protection, early diagnosis and treatment, disability limitation, and rehabilitation - mapped onto the three classical levels.",
        "In a rural PHC the highest-yield primordial and primary work is tobacco-free school pledges, salt-reduction counselling at every NCD visit, the Universal Immunisation Programme, safe drinking water, sanitation and the deworming round.",
        "Secondary prevention in the same clinic is the **Community Based Assessment Checklist (CBAC)** for everyone aged 30 and above, blood-pressure and random-blood-sugar measurement, visual inspection with acetic acid for cervical cancer, oral visual examination, and sputum or NAAT testing of every chronic cougher.",
        "Tertiary prevention is diabetic foot inspection at every visit, glaucoma follow-up, post-stroke physiotherapy, self-care training in leprosy, and pulmonary rehabilitation after treated tuberculosis.",
        "**Health education is not a level of prevention** - it is a tool used at every level, and saying so scores the mark when an examiner asks where it belongs.",
        "Write any preventive answer as a table of level against intervention against who delivers it (ASHA, ANM, medical officer, specialist); the structure alone earns marks even when the content is thin.",
      ],
    },
    {
      heading: "Population approach versus high-risk approach",
      points: [
        "Geoffrey Rose's **population (mass) strategy** shifts the whole distribution of a risk factor slightly to the left - a 2 mmHg fall in mean population systolic blood pressure prevents more strokes than treating every severe hypertensive.",
        "The **high-risk strategy** finds and treats individuals in the tail of the distribution; it is medically satisfying, easy to evaluate and well accepted, but it treats only a minority and does nothing about the causes of incidence.",
        "**The prevention paradox:** a preventive measure that brings large benefit to the community offers little to each participating individual - which is exactly why population salt reduction and tobacco taxation are unpopular and why individual statins are not.",
        "Most of the cases of a disease come from the large group at moderate risk, not the small group at high risk; this is why **screening alone can never control a mass non-communicable disease**.",
        "In practice the two are complementary: the NP-NCD programme runs a population strategy (health promotion at the Ayushman Arogya Mandir) alongside a high-risk strategy (CBAC-based screening and treatment of those found positive).",
        "For a written answer, always state that the population approach acts on the **causes of incidence** while the high-risk approach acts on the **causes of cases**.",
      ],
    },
    {
      heading: "Screening: what it is and what it is not",
      points: [
        "**Definition (Commission on Chronic Illness, 1951):** screening is the presumptive identification of unrecognised disease or defect by the application of tests, examinations or other procedures which can be applied rapidly to sort out apparently well persons who probably have a disease from those who probably do not.",
        "A screening test is **not diagnostic**; every positive must go on to a defined confirmatory test, and a screening programme without a guaranteed diagnostic and treatment pathway is unethical.",
        "**Types:** mass screening (whole population), high-risk or selective screening (an at-risk group, e.g. glucose testing in relatives of diabetics), multiphasic screening (several tests at one sitting, as at a health camp), and case finding or opportunistic screening (testing the patient who came for something else - the commonest kind in family practice).",
        "Screening tests should be **highly sensitive** when missing a case is dangerous and treatment is available (HIV screening, newborn hypothyroidism), and **highly specific** when the confirmatory test is risky, costly or frightening (prostate biopsy).",
        "Sequential (two-stage) screening uses a sensitive test first and a specific test second, which raises the positive predictive value of the programme without losing cases - this is exactly how HIV testing and tuberculosis screening are organised in India.",
        "**Prevalence drives predictive value:** the same test used in a low-prevalence general population gives a far worse positive predictive value than in a high-prevalence clinic, which is the single commonest examiner follow-up question after a screening viva.",
      ],
    },
    {
      heading: "Wilson and Jungner criteria (WHO, 1968)",
      points: [
        "**The disease:** it must be an important health problem, must have a recognisable latent or early symptomatic stage, and its natural history including the progression from latent to declared disease must be adequately understood.",
        "**The test:** there must be a suitable test or examination that is simple, safe, valid (sensitive and specific), reliable, cheap and acceptable to the population.",
        "**The treatment:** there must be an accepted treatment for patients with recognised disease, facilities for diagnosis and treatment must be available, and there must be an agreed policy on **whom to treat as patients**.",
        "**The programme:** case finding should be a continuing process and not a once-and-for-all project, and the cost of case finding including diagnosis and treatment must be economically balanced against total expenditure on medical care.",
        "The 2008 Andermann update adds consent, equity, evidence of benefit from good-quality trials, programme governance and quality assurance, and explicit evaluation of harms - marks are given for naming at least two modern additions.",
        "**Apply the criteria to reject a screening test as well as to justify one:** whole-body CT screening fails on cost, harm and the absence of an agreed treatment policy; screening a village for diabetes with a glucometer succeeds on every count provided metformin and follow-up actually exist at that centre.",
      ],
    },
    {
      heading: "The biases that make a poor screening programme look good",
      points: [
        "**Lead time bias:** screening advances the date of diagnosis without postponing the date of death, so measured survival from diagnosis lengthens while the patient gains nothing. The correction is to compare **disease-specific mortality rates in the whole population**, not survival from diagnosis.",
        "**Length time bias:** screening at intervals preferentially picks up slowly progressive, long-preclinical-phase, biologically indolent tumours, while aggressive rapidly fatal ones surface between rounds as interval cancers. Screen-detected cases therefore have a better prognosis for reasons that have nothing to do with screening.",
        "**Overdiagnosis** is the extreme of length bias - detection of disease that would never have caused symptoms or death in that person's lifetime, followed by treatment that can only harm. Neuroblastoma screening in infants and much thyroid and prostate cancer screening are the classic examples.",
        "**Selection or volunteer (healthy screenee) bias:** those who accept screening are healthier, better off and more adherent than those who do not, so their outcomes are better regardless of the test.",
        "**Hawthorne effect** and **compliance bias** further inflate apparent benefit; only a randomised controlled trial with disease-specific mortality as the endpoint escapes all four.",
        "Ask three questions of any screening claim: was the outcome mortality or survival, was the comparison group randomised, and were harms (false positives, biopsies, anxiety, overtreatment) counted.",
      ],
    },
    {
      heading: "Screening as actually delivered in India",
      points: [
        "Under the **NP-NCD Operational Guidelines (2021-22)**, every person aged 30 years and above is screened at the Ayushman Arogya Mandir using the **CBAC form**, a score of 4 or more marking high risk, with blood pressure and blood glucose measured for all and referral for those screening positive.",
        "**Cervical cancer:** visual inspection with 5% acetic acid (VIA) in women aged 30-65 years every 5 years, done by a trained ANM; VIA-positive women go for colposcopy and biopsy. HPV DNA testing is the WHO-preferred primary test and is being introduced in phases.",
        "**Breast cancer:** clinical breast examination every 5 years from age 30, with referral for imaging - population mammography is not recommended in India on cost and yield grounds.",
        "**Oral cancer:** oral visual examination every 5 years from age 30, with priority to tobacco and areca-nut users - the highest-yield cancer screen in India because the mouth is directly visible.",
        "**Tuberculosis:** symptom screening of all attendees plus active case finding in vulnerable populations, with upfront NAAT (CBNAAT or TrueNat) for presumptive cases under NTEP.",
        "Antenatal screening covers haemoglobin, blood group and Rh, HIV, syphilis (VDRL), HBsAg, blood sugar (DIPSI 75 g non-fasting, threshold 140 mg/dL) and blood pressure with urine protein; newborn screening under RBSK covers birth defects, congenital hypothyroidism and congenital deafness where facilities allow.",
      ],
    },
  ],
  tables: [
    {
      heading: "Levels of prevention with a worked example (diabetes)",
      columns: ["Level", "Point in natural history", "Mode of intervention", "Example in diabetes"],
      rows: [
        ["Primordial", "Before the risk factor appears", "Policy, childhood habit formation", "School nutrition policy, sugar-sweetened beverage tax, safe walking spaces"],
        ["Primary", "Risk factor present, disease absent", "Health promotion, specific protection", "Weight reduction and 150 min/week activity in a person with a family history"],
        ["Secondary", "Subclinical or early clinical disease", "Early diagnosis and prompt treatment", "CBAC screening at 30 years, HbA1c confirmation, metformin started"],
        ["Tertiary (disability limitation)", "Established disease", "Prevent progression to disability", "Annual retinal and foot examination, ACE inhibitor for albuminuria"],
        ["Tertiary (rehabilitation)", "Disability established", "Restore function", "Prosthesis and gait training after amputation, vocational retraining"],
      ],
    },
    {
      heading: "Wilson and Jungner criteria (1968) grouped for the answer book",
      columns: ["Group", "Criteria"],
      rows: [
        ["The disease", "Important public health problem; recognisable latent or early symptomatic stage; natural history adequately understood"],
        ["The test", "Suitable, simple, safe, valid, reliable, cheap and acceptable to the population"],
        ["The treatment", "Accepted treatment exists; facilities for diagnosis and treatment available; agreed policy on whom to treat"],
        ["The programme", "Continuing process, not a one-off; cost economically balanced against total medical expenditure"],
        ["Modern additions (Andermann 2008)", "Informed consent, equity of access, evidence of benefit from trials, quality assurance, explicit accounting of harms"],
      ],
    },
    {
      heading: "Screening biases and how each is defeated",
      columns: ["Bias", "What it does", "How it is avoided"],
      rows: [
        ["Lead time", "Lengthens survival from diagnosis without postponing death", "Use disease-specific mortality in the whole population as the endpoint"],
        ["Length time", "Over-samples slow, indolent disease", "Randomised trial with mortality endpoint; count interval cancers"],
        ["Overdiagnosis", "Detects disease that would never have surfaced", "Compare cumulative incidence in screened and unscreened arms after long follow-up"],
        ["Selection / volunteer", "Screened people are healthier to begin with", "Randomise the invitation, analyse by intention to screen"],
      ],
    },
  ],
  redFlags: [
    "A screening programme running without a guaranteed confirmatory test and treatment pathway - stop it; it generates anxiety and harm and satisfies no Wilson and Jungner criterion.",
    "A VIA-positive or clinically suspicious cervix, a non-healing oral ulcer or white patch of more than 2 weeks, or a hard fixed breast lump - these are not screening results to be repeated in five years, they need same-week referral for biopsy.",
    "Any screen-detected patient lost between the positive test and the confirmatory test - programme failure; the district NCD register and the ASHA follow-up list must close this loop.",
    "A CBAC score of 4 or more with random blood sugar above 250 mg/dL, or blood pressure 180/110 mmHg or more found at a screening camp - clinical emergency, not a referral slip.",
    "Screening a person who already has symptoms of the disease being screened for - that is diagnosis, and delaying investigation until the next screening round is negligence.",
    "A confirmed case of a notifiable disease found during screening (tuberculosis, leprosy, HIV, cholera, measles, acute flaccid paralysis) - notify the district surveillance unit on the same day through IHIP.",
  ],
  pearls: [
    "Level of prevention is decided by the stage of disease in that patient, not by the intervention - the same iron tablet can be primary, secondary or tertiary prevention.",
    "Health education is a tool used at all levels of prevention, not a level in itself.",
    "Screening sorts, it does not diagnose; every positive needs a named confirmatory test and a named person responsible for the follow-up.",
    "Sensitivity and specificity are properties of the test; predictive values belong to the population - so the same test performs differently at a camp and in a clinic.",
    "Lead time bias inflates survival; only disease-specific mortality in a randomised comparison proves a screening programme works.",
    "Rose's prevention paradox: the measure that saves most lives in a community offers almost nothing to the individual who adopts it.",
    "In the Indian programme the three population cancer screens are cervix by VIA, breast by clinical examination and oral cavity by visual examination, all from age 30 and all repeated every 5 years.",
    "Andermann's 2008 additions - consent, equity, evidence, quality assurance and harms - are the two extra marks in any Wilson and Jungner question.",
  ],
  theory: [
    {
      id: "preventive-prevention-screening-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Define screening. Enumerate the criteria for a good screening programme and discuss, with examples, the biases that can make an ineffective screening programme appear beneficial.",
      openingLines: [
        "Screening is the presumptive identification of unrecognised disease or defect by the application of tests, examinations or other procedures that can be applied rapidly, to sort out apparently well persons who probably have a disease from those who probably do not (Commission on Chronic Illness, 1951).",
        "It is a form of secondary prevention: it does not make a diagnosis, and it is ethical only when a confirmatory test and an effective treatment are actually available to everyone who screens positive.",
      ],
      answer: [
        {
          heading: "1. Types of screening",
          points: [
            "Mass screening - the whole population, e.g. neonatal screening for congenital hypothyroidism.",
            "High-risk or selective screening - a defined at-risk group, e.g. blood glucose in first-degree relatives of diabetics.",
            "Multiphasic screening - several tests applied at one sitting, as at a health camp.",
            "Case finding or opportunistic screening - testing a patient who has attended for another reason; the commonest form in family practice and the one with the least evidence behind it.",
          ],
        },
        {
          heading: "2. Wilson and Jungner criteria (WHO, 1968)",
          points: [
            "Regarding the disease: it must be an important health problem, must have a recognisable latent or early symptomatic stage, and its natural history must be adequately understood.",
            "Regarding the test: suitable, simple, safe, valid, reliable, inexpensive and acceptable to the population.",
            "Regarding treatment: an accepted treatment must exist, facilities for diagnosis and treatment must be available, and there must be an agreed policy on whom to treat as patients.",
            "Regarding the programme: case finding must be a continuing process, and the cost must be economically balanced against total expenditure on medical care.",
            "Modern additions (Andermann, Bulletin of WHO 2008): informed consent, equity of access, evidence of benefit from good-quality trials, programme governance and quality assurance, and an explicit accounting of harms.",
          ],
        },
        {
          heading: "3. Evaluating a screening test",
          points: [
            "Validity is measured by sensitivity and specificity against a gold standard; reliability by repeatability and inter-observer agreement (kappa).",
            "Yield is the number of previously unrecognised cases diagnosed and brought to treatment, and it depends on prevalence, the frequency of screening and the acceptance rate.",
            "Predictive values depend on prevalence: a test of 95% sensitivity and 95% specificity applied where prevalence is 1% has a positive predictive value of only about 16%.",
            "Harms must be counted: false positives, unnecessary confirmatory procedures, anxiety, labelling, overdiagnosis and overtreatment.",
          ],
        },
        {
          heading: "4. Biases that falsely suggest benefit",
          points: [
            "Lead time bias - the interval by which diagnosis is advanced; survival measured from diagnosis lengthens although the date of death is unchanged. Avoided by using disease-specific mortality in the whole population.",
            "Length time bias - periodic screening preferentially detects slow-growing disease with a long detectable preclinical phase, while aggressive disease appears as interval cases; screen-detected cases therefore appear to do better.",
            "Overdiagnosis bias - the extreme of length bias, in which disease that would never have become clinically apparent is detected and treated; neuroblastoma screening in Japanese infants raised incidence without lowering mortality.",
            "Selection or volunteer bias - those who accept screening are systematically healthier and more adherent than those who do not.",
            "Only a randomised controlled trial reporting disease-specific mortality, with intention-to-screen analysis, defeats all four.",
          ],
        },
        {
          heading: "5. Application to the Indian programme",
          points: [
            "Population-based screening under NP-NCD covers hypertension, diabetes and three cancers - cervix (VIA), breast (clinical breast examination) and oral cavity (visual examination) - in everyone aged 30 years and above, using the CBAC form with a cut-off score of 4.",
            "Screening is repeated every 5 years for the cancers and annually for blood pressure and blood glucose, and the results are entered in the NCD register maintained at the Ayushman Arogya Mandir.",
            "Whole-body imaging, routine tumour markers and unregulated health-camp panels fail the criteria on cost, validity and the absence of an agreed treatment policy, and should be discouraged.",
          ],
        },
      ],
      mustDraw: [
        "A natural history of disease timeline marked with the four levels of prevention and the point at which screening acts.",
        "A diagram showing lead time: date of screen detection, date of usual clinical diagnosis and date of death, with the lead time interval marked.",
        "A table of the Wilson and Jungner criteria grouped as disease, test, treatment and programme.",
      ],
      markSplit: [
        { part: "Definition and types of screening", marks: 2 },
        { part: "Wilson and Jungner criteria with modern additions", marks: 3 },
        { part: "Validity, yield and predictive value", marks: 1 },
        { part: "Lead time, length time, overdiagnosis and selection bias with examples", marks: 3 },
        { part: "Indian programme application", marks: 1 },
      ],
      keywords: ["screening", "Wilson and Jungner", "lead time bias", "length time bias", "overdiagnosis", "CBAC", "VIA"],
    },
    {
      id: "preventive-prevention-screening-t2",
      paper: "I",
      kind: "define-classify",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question:
        "Define prevention. Classify the levels of prevention and give two examples of each level from the practice of a family physician.",
      openingLines: [
        "Prevention comprises actions aimed at eradicating, eliminating or minimising the impact of disease and disability, applied at any point in the natural history of the disease.",
        "Four levels are recognised - primordial, primary, secondary and tertiary - corresponding to action before the risk factor appears, before the disease appears, in the subclinical phase, and after disease is established.",
      ],
      answer: [
        {
          heading: "Primordial prevention",
          points: [
            "Acts in the pre-pathogenesis phase, before the risk factor itself is acquired; chiefly a matter of policy and of childhood habit.",
            "Examples: a tobacco-free school and campus programme under NTCP; counselling a young family on a low-salt, low-sugar Indian diet and daily physical activity before any risk factor exists.",
          ],
        },
        {
          heading: "Primary prevention",
          points: [
            "Acts when the risk factor is present but disease has not begun; comprises health promotion and specific protection (Leavell and Clark).",
            "Health promotion examples: antenatal nutrition counselling, safe water and sanitation advice, exclusive breastfeeding promotion.",
            "Specific protection examples: BCG and pentavalent vaccine under the UIP; iron and folic acid supplementation to a non-anaemic adolescent girl under Anaemia Mukt Bharat; iodised salt.",
          ],
        },
        {
          heading: "Secondary prevention",
          points: [
            "Early diagnosis and prompt treatment in the subclinical or early clinical phase, so as to cure or to arrest progression and reduce transmission.",
            "Examples: CBAC-based screening for diabetes and hypertension at 30 years; VIA for cervical cancer; sputum NAAT for a two-week cougher; contact tracing and post-exposure prophylaxis in leprosy.",
          ],
        },
        {
          heading: "Tertiary prevention",
          points: [
            "Disability limitation: annual retinal and foot examination in diabetes, MDT plus self-care to prevent leprosy deformity, ACE inhibitor for diabetic albuminuria.",
            "Rehabilitation: post-stroke physiotherapy and speech therapy, prosthesis and vocational retraining after amputation, pulmonary rehabilitation after treated tuberculosis, and the social and psychological support the family physician coordinates.",
          ],
        },
      ],
      mustDraw: ["A four-column table of level against stage of natural history against mode of intervention against two examples."],
      markSplit: [
        { part: "Definition and the four levels named correctly", marks: 1 },
        { part: "Primordial and primary with examples", marks: 2 },
        { part: "Secondary with examples", marks: 1 },
        { part: "Tertiary, both disability limitation and rehabilitation", marks: 1 },
      ],
      keywords: ["primordial", "primary prevention", "specific protection", "disability limitation", "rehabilitation", "Leavell and Clark"],
    },
  ],
  mcqs: [
    {
      id: "preventive-prevention-screening-q1",
      stem: "A screening test for a disease has a sensitivity of 90% and a specificity of 90%. It is applied to a population of 10,000 people in which the prevalence of the disease is 1%. What is the positive predictive value?",
      options: ["About 8.3%", "About 16.7%", "About 50%", "About 90%", "About 99%"],
      difficulty: "moderate",
      answer: 0,
      explanation:
        "Of 10,000 people, 100 have the disease and 9,900 do not. Sensitivity 90% gives 90 true positives; specificity 90% means 10% of 9,900 = 990 false positives. PPV = 90 / (90 + 990) = 90/1080 = 8.3%. The 16.7% option is what you get with 95% specificity, 50% is a common guess from ignoring prevalence, and 90% is simply the sensitivity restated - the classic error. The teaching point is that predictive value collapses when prevalence is low, which is why mass screening for rare disease generates far more false alarms than cases.",
    },
    {
      id: "preventive-prevention-screening-q2",
      stem: "A district reports that patients whose lung cancer was detected by a new screening programme survive on average 4 years from diagnosis, whereas those diagnosed after symptoms survive 2 years. Mortality from lung cancer in the district is unchanged. What is the most likely explanation?",
      options: [
        "The screening programme is effective and should be scaled up",
        "Lead time bias",
        "Recall bias",
        "Berkson's bias",
        "Confounding by smoking status",
      ],
      difficulty: "easy",
      answer: 1,
      explanation:
        "Survival measured from the date of diagnosis lengthens automatically when screening advances that date, even if the date of death is entirely unchanged - this is lead time bias, and the unchanged disease-specific mortality is the giveaway. Recall bias affects exposure reporting in case-control studies, and Berkson's bias arises from differential hospital admission, neither of which applies. Confounding by smoking would alter mortality, not just survival from diagnosis. The only acceptable proof of screening benefit is a fall in disease-specific mortality in the whole population.",
    },
    {
      id: "preventive-prevention-screening-q3",
      stem: "Giving a single dose of rifampicin to the household contacts of a newly diagnosed leprosy patient is an example of which level of prevention?",
      options: [
        "Primordial prevention",
        "Primary prevention - specific protection",
        "Secondary prevention",
        "Tertiary prevention - disability limitation",
        "Rehabilitation",
      ],
      difficulty: "easy",
      answer: 1,
      explanation:
        "Single-dose rifampicin post-exposure prophylaxis is given to contacts who do not have disease, in order to prevent it developing - that is specific protection, a mode of primary prevention. Primordial prevention would act before the risk factor (contact with an untreated case) existed at all. Secondary prevention would be examining those contacts to detect early patches, and tertiary prevention would be the self-care and footwear that prevent deformity in the index patient. Note that the same programme delivers all three levels simultaneously.",
    },
    {
      id: "preventive-prevention-screening-q4",
      stem: "Which single feature most strongly argues against introducing a population screening programme for a cancer, even when a cheap and accurate test exists?",
      options: [
        "The disease has a long detectable preclinical phase",
        "The test has a sensitivity of 85%",
        "There is no accepted treatment that alters outcome when the disease is found early",
        "The disease is commoner in men than in women",
        "The programme would need to be repeated every five years",
      ],
      difficulty: "easy",
      answer: 2,
      explanation:
        "An accepted treatment that changes outcome when disease is detected early is the criterion on which the entire justification for screening rests; without it screening only advances the date of the label and adds harm. A long detectable preclinical phase is a requirement for screening, not an argument against it. A sensitivity of 85% is workable in a two-stage programme, sex distribution is irrelevant to the principle, and repetition is expected because case finding must be a continuing process.",
    },
    {
      id: "preventive-prevention-screening-q5",
      stem: "In a mass screening campaign, 2,000 people are screened for a condition with a true prevalence of 5%. The test detects 80 of the true cases and wrongly labels 190 healthy people as positive. What is the sensitivity of the test?",
      options: ["30%", "50%", "63%", "80%", "90%"],
      difficulty: "moderate",
      answer: 3,
      explanation:
        "True cases = 5% of 2,000 = 100. Sensitivity = true positives / all with disease = 80/100 = 80%. The 190 false positives belong in the specificity calculation: specificity = 1710/1900 = 90%. Choosing 30% comes from dividing 80 by 270 (that is the positive predictive value, 29.6%), and 63% has no basis. Keep the 2x2 table headings fixed - disease status across the top, test result down the side - and each index reads off a single row or column.",
    },
    {
      id: "preventive-prevention-screening-q6",
      stem: "Screening for neuroblastoma in Japanese infants doubled the recorded incidence of the tumour without any fall in neuroblastoma mortality. This is the classic illustration of which phenomenon?",
      options: ["Lead time bias", "Overdiagnosis", "Ecological fallacy", "Regression to the mean", "Hawthorne effect"],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "Detection of tumours that would have regressed or never become clinically apparent inflates incidence while leaving mortality untouched - that is overdiagnosis, and it exposes people to the harms of treatment with no possibility of benefit. Lead time bias would inflate survival from diagnosis but not cumulative incidence. Ecological fallacy is inferring individual risk from group-level data, and regression to the mean concerns repeated measurement of extreme values, neither of which explains a sustained doubling of incidence.",
    },
    {
      id: "preventive-prevention-screening-q7",
      stem: "Under the national NP-NCD population-based screening programme, cervical cancer screening in India is currently offered as:",
      options: [
        "Annual Pap smear for all women aged 21-65 years",
        "Visual inspection with acetic acid every 5 years for women aged 30-65 years",
        "HPV DNA testing every 3 years for all women over 25 years",
        "Colposcopy every 5 years for women over 35 years",
        "Pap smear once in a lifetime at age 40 years",
      ],
      difficulty: "easy",
      answer: 1,
      explanation:
        "The Operational Framework for Management of Common Cancers (2016) and the NP-NCD guidelines specify VIA using 5% acetic acid, performed by a trained ANM at the health and wellness centre, every 5 years in women aged 30-65 years, with VIA-positive women referred for colposcopy and biopsy. Cytology-based Pap screening is not feasible at scale in India because of the cytopathology workforce required, HPV DNA testing is the WHO-preferred test and is being phased in but is not yet the national standard, and colposcopy is a diagnostic and not a screening procedure.",
    },
  ],
  cards: [
    {
      id: "preventive-prevention-screening-c1",
      front: "The four levels of prevention, in order.",
      back: "Primordial (before the risk factor), primary (risk factor present, disease absent), secondary (subclinical disease - early diagnosis and prompt treatment), tertiary (established disease - disability limitation and rehabilitation).",
    },
    {
      id: "preventive-prevention-screening-c2",
      front: "Leavell and Clark's five modes of intervention.",
      back: "Health promotion, specific protection, early diagnosis and prompt treatment, disability limitation, rehabilitation.",
    },
    {
      id: "preventive-prevention-screening-c3",
      front: "Definition of screening (Commission on Chronic Illness, 1951).",
      back: "Presumptive identification of unrecognised disease by tests applied rapidly, to sort apparently well persons who probably have a disease from those who probably do not. It is not diagnosis.",
    },
    {
      id: "preventive-prevention-screening-c4",
      front: "The four Wilson and Jungner headings.",
      back: "The disease (important, latent stage, known natural history); the test (simple, safe, valid, cheap, acceptable); the treatment (accepted, available, agreed policy on whom to treat); the programme (continuing, cost-balanced).",
    },
    {
      id: "preventive-prevention-screening-c5",
      front: "Lead time bias in one line.",
      back: "Screening advances the date of diagnosis without postponing death, so survival from diagnosis lengthens while mortality is unchanged.",
    },
    {
      id: "preventive-prevention-screening-c6",
      front: "Length time bias in one line.",
      back: "Periodic screening preferentially picks up slow-growing indolent disease; aggressive disease surfaces between rounds as interval cases, so screen-detected cases look falsely good.",
    },
    {
      id: "preventive-prevention-screening-c7",
      front: "Which endpoint proves a screening programme works?",
      back: "A fall in disease-specific mortality in the whole population in a randomised comparison analysed by intention to screen - never survival from diagnosis.",
    },
    {
      id: "preventive-prevention-screening-c8",
      front: "Rose's prevention paradox.",
      back: "A preventive measure that brings large benefit to the population offers little to each participating individual - hence poor uptake of salt reduction and tobacco control.",
    },
    {
      id: "preventive-prevention-screening-c9",
      front: "Types of screening.",
      back: "Mass, high-risk (selective), multiphasic, and case finding (opportunistic).",
    },
    {
      id: "preventive-prevention-screening-c10",
      front: "The three population cancer screens in India, and from what age.",
      back: "Cervix by VIA, breast by clinical breast examination, oral cavity by visual examination - all from age 30, repeated every 5 years, under NP-NCD.",
    },
    {
      id: "preventive-prevention-screening-c11",
      front: "CBAC form: what is it and what is the cut-off?",
      back: "Community Based Assessment Checklist, filled for everyone aged 30 and above by the ASHA; a score of 4 or more indicates high risk and mandates screening and referral.",
    },
    {
      id: "preventive-prevention-screening-c12",
      front: "Why does the same test have different predictive values in a camp and in a clinic?",
      back: "Sensitivity and specificity are test properties, but predictive values depend on prevalence - low prevalence collapses the positive predictive value.",
    },
  ],
  references: [
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - chapters on concepts of prevention and screening for disease",
    "Wilson JMG, Jungner G. Principles and Practice of Screening for Disease. WHO Public Health Paper No. 34, 1968",
    "Andermann A et al. Revisiting Wilson and Jungner in the genomic age. Bulletin of the World Health Organization, 2008",
    "Operational Framework: Management of Common Cancers, Ministry of Health and Family Welfare, Government of India, 2016",
    "Operational Guidelines for Prevention, Screening and Control of Common NCDs (NP-NCD), MoHFW, 2021-22 - CBAC form and screening intervals",
    "Rose G. Sick individuals and sick populations. International Journal of Epidemiology, 1985",
  ],
});
