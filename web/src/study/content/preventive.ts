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

topics.push({
  id: "preventive-national-health-programmes",
  title: "National health programmes the family physician works inside",
  oneLiner:
    "The national health programmes deliver almost all preventive care in India through a three-tier system now anchored on the Ayushman Arogya Mandir, and the family physician is the person who registers, screens, treats, refers, records and reports within NP-NCD, NTEP, NCVBDC, NLEP, RCH, RBSK, NMHP and Ayushman Bharat PM-JAY.",
  frequency: "core",
  keywords: [
    "NP-NCD",
    "NPCDCS",
    "NTEP",
    "RNTCP",
    "NVBDCP",
    "NCVBDC",
    "NLEP",
    "RCH",
    "RMNCAH+N",
    "RBSK",
    "RKSK",
    "NMHP",
    "DMHP",
    "Ayushman Bharat",
    "PM-JAY",
    "Health and Wellness Centre",
    "Ayushman Arogya Mandir",
    "ASHA",
    "IPHS",
    "Nikshay",
    "Tele-MANAS",
    "National Health Mission",
  ],
  sections: [
    {
      heading: "The delivery system the programmes run on",
      points: [
        "Rural India is served on a three-tier pattern: a **sub-centre for every 5,000 population** (3,000 in hilly, tribal and difficult areas), a **primary health centre for every 30,000** (20,000 in difficult areas) and a **community health centre for every 120,000** (80,000 in difficult areas), with one **ASHA per 1,000 population** as the community link worker.",
        "Under **Ayushman Bharat (2018)** sub-centres and PHCs are upgraded to **Health and Wellness Centres, renamed Ayushman Arogya Mandir in November 2023**, staffed at the sub-centre level by a Community Health Officer (a BSc Nursing or Ayurveda graduate with a six-month certificate in community health) and delivering **12 defined service packages** instead of the older selective package.",
        "The **Indian Public Health Standards (IPHS), revised in 2022**, define the manpower, drugs, equipment and diagnostics each level must have, and are the standard against which a facility is assessed under the National Quality Assurance Standards and Kayakalp.",
        "The **National Health Mission** (NRHM 2005 merged with NUHM 2013) is the financing and management vehicle; programmes are delivered as vertical technical strategies through this single horizontal platform, and the district is the unit of implementation.",
        "The family physician's programmatic duties are the same in every programme: **case detection, protocol-based treatment, referral, recording in the programme register, and reporting to the district** through the Integrated Health Information Platform (IHIP) or the programme's own portal (Nikshay, Nikusth, NCD portal).",
        "**Free drugs and free diagnostics initiatives** and the essential drug list at each level make protocol adherence possible; a question about why a programme fails should always mention drug stock-out, human resource vacancy, and a broken referral loop before it blames the patient.",
      ],
    },
    {
      heading: "NP-NCD - non-communicable diseases",
      points: [
        "The National Programme for Prevention and Control of Non-Communicable Diseases, **renamed NP-NCD in 2023** (previously NPCDCS, launched 2010), covers diabetes, hypertension, cardiovascular disease, stroke and the common cancers, and now also chronic obstructive lung disease and chronic kidney disease.",
        "**Population-based screening** of everyone aged 30 years and above using the CBAC form, with blood pressure, blood glucose, and oral, breast and cervical cancer screening, is the core activity; the ASHA fills the CBAC, the CHO screens, the medical officer confirms and treats.",
        "Service structure: NCD clinics at CHC and district hospital, a district NCD cell, cardiac care units and day-care chemotherapy at tertiary centres, with free drugs for hypertension and diabetes at the Ayushman Arogya Mandir.",
        "Treatment follows a **standard protocol** - the India Hypertension Control Initiative amlodipine-telmisartan-chlorthalidone ladder for hypertension and metformin-based stepwise care for diabetes - so that a nurse or CHO can continue therapy between doctor visits.",
        "The national NCD targets follow the WHO **25 by 25** framework adapted as India's NCD Monitoring Framework (2013-2022): a 25% relative reduction in premature mortality from NCDs, a 30% relative reduction in salt intake, a 30% relative reduction in tobacco use and a 25% relative reduction in the prevalence of raised blood pressure.",
        "Programme indicators to quote: NFHS-5 (2019-21) found hypertension in about **24% of men and 21% of women aged 15-49**, and the treatment cascade is the exam point - most Indian hypertensives are undiagnosed, a minority are treated and about one in ten is controlled.",
      ],
    },
    {
      heading: "NTEP - tuberculosis",
      points: [
        "The Revised National TB Control Programme was **renamed the National Tuberculosis Elimination Programme in 2020**, with a national target of ending TB by 2025, five years ahead of the SDG target of 2030.",
        "Strategy pillars are **Detect - Treat - Prevent - Build**: universal access to upfront molecular testing (CBNAAT or TrueNat) for every presumptive case, universal drug susceptibility testing, daily fixed-dose combination treatment, TB preventive treatment for contacts and people living with HIV, and active case finding in vulnerable populations.",
        "**Daily regimen:** intensive phase 2 months of isoniazid, rifampicin, pyrazinamide and ethambutol, continuation phase 4 months of isoniazid, rifampicin and ethambutol, given as weight-band fixed-dose combinations - the thrice-weekly intermittent regimen has been abandoned.",
        "**Notification of tuberculosis is mandatory for every health-care provider, public or private**, under the Gazette Notification of 2018 which extended the 2012 order and added chemists dispensing anti-TB drugs; notification is done on the **Nikshay** portal.",
        "**Nikshay Poshan Yojana** provides direct benefit transfer for nutritional support to every notified patient for the duration of treatment - Rs 500 per month at launch in 2018, **raised to Rs 1,000 per month from November 2024**; Ni-kshay Mitra allows community adoption of patients for nutritional support.",
        "Burden to quote: the **India TB Report 2024** recorded about **25.5 lakh TB patients notified in 2023**, the highest ever, with an estimated incidence of about **195 per 100,000 population in 2023**, down from 237 per 100,000 in 2015.",
      ],
    },
    {
      heading: "NCVBDC and NLEP - vector-borne disease and leprosy",
      points: [
        "The National Vector Borne Disease Control Programme became the **National Center for Vector Borne Diseases Control (NCVBDC) in 2022**, and covers six diseases - malaria, dengue, chikungunya, Japanese encephalitis, lymphatic filariasis and kala-azar.",
        "**Malaria:** the National Framework for Malaria Elimination (2016-2030) and the National Strategic Plan aim for zero indigenous cases by 2027 and elimination certification by 2030; districts are categorised 0 to 3 by **annual parasite incidence (API)**, and the strategy is test-treat-track with rapid diagnostic tests, artemisinin combination therapy, long-lasting insecticidal nets and indoor residual spraying.",
        "**Kala-azar** elimination is defined as fewer than **1 case per 10,000 population at block level**, a target India achieved across endemic blocks in 2023; treatment is single-dose liposomal amphotericin B 10 mg/kg, with miltefosine for post-kala-azar dermal leishmaniasis.",
        "**Lymphatic filariasis** is tackled by annual mass drug administration - the two-drug DEC plus albendazole regimen, and IDA (ivermectin, DEC, albendazole) in selected districts - with morbidity management and disability prevention for lymphoedema and hydrocele.",
        "**NLEP:** leprosy was eliminated as a public health problem (prevalence below 1 per 10,000) at the national level in **December 2005**; the National Strategic Plan and Roadmap for Leprosy 2023-27 targets **zero transmission by 2027**. Treatment is WHO multidrug therapy - 6 months for paucibacillary and 12 months for multibacillary disease, with a three-drug regimen now used for both.",
        "Contacts of a leprosy case receive **single-dose rifampicin post-exposure prophylaxis**, and every new case is graded for disability at diagnosis, the **Grade 2 disability rate** being the key programme quality indicator because it measures delay in detection.",
      ],
    },
    {
      heading: "RCH, RBSK and adolescent health",
      points: [
        "Reproductive and child health is now delivered as **RMNCAH+N** - reproductive, maternal, newborn, child, adolescent health plus nutrition - with a continuum of care from pre-pregnancy to adolescence.",
        "Key maternal schemes: **Janani Suraksha Yojana** (cash incentive for institutional delivery), **Janani Shishu Suraksha Karyakram** (free delivery, drugs, diagnostics, diet, blood and transport for mother and sick newborn), **Pradhan Mantri Surakshit Matritva Abhiyan** (assured quality antenatal check-up on the 9th of every month), and **Surakshit Matritva Aashwasan (SUMAN)** for assured, dignified, zero-expense maternity care.",
        "Child health: **Home Based Newborn Care** and **Home Based Care for Young Child** by the ASHA, facility-based newborn care (newborn care corner, newborn stabilisation unit, special newborn care unit), **IMNCI**, and the biannual **Vitamin A and deworming rounds**.",
        "**RBSK (Rashtriya Bal Swasthya Karyakram, 2013)** screens children from **birth to 18 years** for the **4 Ds - defects at birth, deficiencies, diseases, and developmental delays including disability - covering 30 identified conditions**, through mobile health teams at anganwadis and government schools, with free treatment at District Early Intervention Centres and tertiary tie-ups.",
        "**RKSK (Rashtriya Kishor Swasthya Karyakram, 2014)** covers **10-19 years** across six strategic areas - nutrition, sexual and reproductive health, mental health, injuries and violence, substance misuse, and non-communicable diseases - delivered through Adolescent Friendly Health Clinics and peer educators (Saathiyas).",
        "Numbers worth quoting: NFHS-5 (2019-21) recorded **institutional delivery 88.6%**, at least four antenatal visits 58.1%, and **full immunisation of children aged 12-23 months 76.4%**; SRS reported a **maternal mortality ratio of 97 per 100,000 live births for 2018-20**, falling to 93 in the 2019-21 bulletin.",
      ],
    },
    {
      heading: "NMHP and Ayushman Bharat",
      points: [
        "The **National Mental Health Programme (1982)** delivers through the **District Mental Health Programme (from 1996)**, which provides outpatient care, drugs, counselling, school and workplace mental health, suicide prevention and life-skills education at district and taluka level.",
        "The **Mental Healthcare Act 2017** guarantees a right to access mental health care, decriminalises attempted suicide, mandates advance directives and a nominated representative, and restricts admission without consent; **Tele-MANAS** (launched October 2022) provides a 24-hour toll-free counselling line on **14416**.",
        "Burden: the **National Mental Health Survey 2015-16** found a current prevalence of mental morbidity of about **10.6% in adults**, a lifetime prevalence of 13.7%, and a treatment gap of **70-92%** depending on the disorder - the treatment gap is the number the examiner wants.",
        "**Ayushman Bharat has two arms.** The first is **comprehensive primary care through Ayushman Arogya Mandirs** delivering 12 packages; the second is **PM-JAY**, a tax-funded hospital insurance scheme giving **Rs 5 lakh per family per year** for secondary and tertiary hospitalisation, with no cap on family size or age, cashless and portable across India.",
        "PM-JAY covers the poorest 40% of the population identified from the SECC 2011 deprivation criteria (about 10.74 crore families, expanded to 12 crore), and from **October 2024 all citizens aged 70 years and above** are eligible irrespective of income through the **Ayushman Vay Vandana card**, which gives an additional Rs 5 lakh top-up cover.",
        "The **12 HWC packages** are: pregnancy and childbirth care; neonatal and infant health; childhood and adolescent health; family planning and reproductive health; management of communicable diseases including national programmes; general outpatient care for acute simple illness; screening and management of non-communicable diseases; ophthalmic and ENT care; basic oral health; elderly and palliative care; emergency and trauma care including burns; and screening and basic management of mental health problems.",
      ],
    },
  ],
  tables: [
    {
      heading: "Population norms and staffing (IPHS 2022)",
      columns: ["Facility", "Population covered (plain)", "Population covered (hilly/tribal)", "Key staff"],
      rows: [
        ["ASHA", "1,000", "Habitation-based in tribal areas", "Accredited Social Health Activist, incentive-based"],
        ["Sub-centre / Ayushman Arogya Mandir", "5,000", "3,000", "Community Health Officer, ANM, male health worker"],
        ["Primary health centre", "30,000", "20,000", "Medical officer, staff nurses, LHV, pharmacist, lab technician"],
        ["Community health centre (FRU)", "120,000", "80,000", "Four specialists - physician, surgeon, obstetrician, paediatrician - plus 30 beds"],
        ["District hospital", "District", "District", "Full specialist complement, blood bank, ICU"],
      ],
    },
    {
      heading: "Programme, target and the number to quote",
      columns: ["Programme", "Stated goal", "Key indicator and value with year"],
      rows: [
        ["NTEP", "End TB in India by 2025", "Incidence about 195 per 100,000 in 2023; 25.5 lakh notified in 2023 (India TB Report 2024)"],
        ["NLEP", "Zero transmission by 2027", "Elimination as a public health problem (prevalence below 1/10,000) achieved December 2005"],
        ["Malaria (NCVBDC)", "Zero indigenous cases by 2027, elimination by 2030", "Districts categorised 0-3 by annual parasite incidence"],
        ["Kala-azar", "Fewer than 1 case per 10,000 per block", "Target achieved in all endemic blocks in 2023"],
        ["NP-NCD", "25% relative fall in premature NCD mortality", "Hypertension in 24% of men, 21% of women aged 15-49 (NFHS-5, 2019-21)"],
        ["RCH / RMNCAH+N", "MMR below 70 and NMR below 12 by 2030 (SDG)", "MMR 97 per 100,000 live births (SRS 2018-20); IMR 27 per 1,000 (SRS 2021)"],
        ["PM-JAY", "Financial protection for the bottom 40%", "Rs 5 lakh per family per year; all aged 70+ covered from October 2024"],
      ],
    },
    {
      heading: "Where each programme is reported",
      columns: ["Programme", "Reporting platform", "What must be entered"],
      rows: [
        ["NTEP", "Nikshay", "Every diagnosed case, public or private, within the mandatory notification rules"],
        ["NLEP", "Nikusth 2.0", "New case, disability grade at diagnosis, MDT started and completed"],
        ["Communicable disease surveillance", "IHIP (IDSP)", "S, P and L forms - syndromic, presumptive and laboratory-confirmed cases; outbreak alerts"],
        ["NP-NCD", "NCD portal / NCD register", "CBAC score, screening result, treatment and follow-up"],
        ["Immunisation", "U-WIN / HMIS", "Every dose given, AEFI, and due list for the next session"],
      ],
    },
  ],
  redFlags: [
    "A tuberculosis case diagnosed anywhere - public or private - that is not notified on Nikshay; notification is a legal obligation under the 2018 Gazette Notification and non-compliance is punishable.",
    "A cluster of fever with rash, acute flaccid paralysis in a child under 15, neonatal tetanus, measles, diphtheria, cholera or any suspected outbreak - immediate reporting to the district surveillance unit through IHIP the same day.",
    "A leprosy case with Grade 2 disability at diagnosis - a marker of programme failure and long delay; it triggers contact survey of the whole household and neighbourhood.",
    "A pregnant woman not registered by 12 weeks, or one with severe anaemia, hypertension or a previous caesarean who is not linked to a first referral unit - high-risk case that must be tracked by name on the RCH portal.",
    "A child screened positive under RBSK for a birth defect or developmental delay who has not reached the District Early Intervention Centre - the referral loop is where RBSK usually fails.",
    "Any patient told to buy anti-TB drugs, insulin, antihypertensives or antenatal drugs privately when they are on the free essential drug list - a stock-out that must be reported and rectified, not passed on to the patient.",
    "A PM-JAY beneficiary asked to pay for a listed package at an empanelled hospital - report to the State Health Agency, since PM-JAY is a cashless entitlement.",
  ],
  pearls: [
    "Learn the norms as a ladder - ASHA 1,000, sub-centre 5,000, PHC 30,000, CHC 120,000 - and halve or reduce them for hilly and tribal areas; this single line opens dozens of answers.",
    "Ayushman Bharat has two arms and examiners want both named: comprehensive primary care through the Ayushman Arogya Mandir with its 12 packages, and PM-JAY hospital cover of Rs 5 lakh per family per year.",
    "TB notification is mandatory for every provider including the private sector and chemists, and the portal is Nikshay - this is the most reliably asked programme fact in the paper.",
    "The Grade 2 disability rate in leprosy measures how late cases are being found; a rising rate means the programme has stopped looking, not that the disease has changed.",
    "RBSK covers birth to 18 years and the 4 Ds - defects, deficiencies, diseases, developmental delays including disability; RKSK covers 10 to 19 years and six strategic areas.",
    "Elimination of leprosy as a public health problem (December 2005) means prevalence below 1 per 10,000; it does not mean the disease has gone, and about 1 lakh new cases are still detected every year.",
    "For every programme question, close the answer with monitoring indicators and the reporting platform - it converts a recall answer into a systems answer.",
    "The commonest reasons a national programme underperforms in a district are human resource vacancy, drug and diagnostic stock-out, and a broken two-way referral loop; say them in that order.",
  ],
  theory: [
    {
      id: "preventive-national-health-programmes-t1",
      paper: "IV",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Describe the National Tuberculosis Elimination Programme. Discuss the role of a family physician in private practice in achieving its objectives.",
      openingLines: [
        "The National Tuberculosis Elimination Programme, renamed from RNTCP in 2020, aims to end tuberculosis in India by 2025, five years ahead of the Sustainable Development Goal target of 2030.",
        "India notified about 25.5 lakh tuberculosis patients in 2023 with an estimated incidence of around 195 per 100,000 population, and more than half of all patients first seek care in the private sector - which makes the family physician central to the programme rather than peripheral to it.",
      ],
      answer: [
        {
          heading: "1. Objectives and strategy",
          points: [
            "The National Strategic Plan is built on four pillars - Detect, Treat, Prevent and Build.",
            "Detect: upfront molecular testing (CBNAAT or TrueNat) for every presumptive case, universal drug susceptibility testing, and active case finding among vulnerable populations such as slum dwellers, prisoners, people living with HIV, miners and contacts.",
            "Treat: daily fixed-dose combination therapy for all, free of cost, with patient-friendly adherence support (99DOTS, treatment supporter, Nikshay reminders) replacing the older thrice-weekly intermittent regimen.",
            "Prevent: TB preventive treatment for household contacts and people living with HIV, airborne infection control, and BCG at birth.",
            "Build: mandatory notification, private sector engagement through patient provider support agencies, and free drugs and diagnostics extended to private patients.",
          ],
        },
        {
          heading: "2. Diagnosis under the programme",
          points: [
            "A presumptive pulmonary TB case is any person with cough of two weeks or more, fever of two weeks or more, unexplained weight loss, or haemoptysis - and in high-risk groups any cough of any duration.",
            "Upfront NAAT on one sputum sample gives both a diagnosis and rifampicin resistance status; smear microscopy is retained for follow-up.",
            "Chest radiography is used as a triage and for smear-negative and paediatric disease; extrapulmonary specimens go for NAAT and cytology or histopathology.",
            "Every diagnosed patient is offered HIV testing and blood sugar testing, and is screened for tobacco and alcohol use and undernutrition.",
          ],
        },
        {
          heading: "3. Treatment regimens",
          points: [
            "Drug-sensitive TB: 2 months of isoniazid, rifampicin, pyrazinamide and ethambutol, then 4 months of isoniazid, rifampicin and ethambutol, given daily as weight-band fixed-dose combinations.",
            "Pyridoxine is added for those at risk of neuropathy; steroids are added for tuberculous meningitis and pericarditis.",
            "Drug-resistant TB is managed at the district DR-TB centre with all-oral regimens containing bedaquiline; the shorter oral BPaLM regimen is now programmatically available.",
            "Follow-up smear or culture at the end of the intensive phase and at the end of treatment defines outcome as cured, treatment completed, failure, lost to follow-up or died.",
            "Nikshay Poshan Yojana provides nutritional support by direct benefit transfer for the whole treatment period - Rs 500 per month at launch in 2018, raised to Rs 1,000 per month from November 2024.",
          ],
        },
        {
          heading: "4. The family physician's specific responsibilities",
          points: [
            "Maintain a low threshold for presumptive TB, and send sputum for upfront NAAT rather than prescribing a trial of antibiotics or a fluoroquinolone, which masks the disease and creates resistance.",
            "Notify every diagnosed case on Nikshay - a legal obligation for all providers, public and private, under the 2018 Gazette Notification which also covers chemists dispensing anti-TB drugs.",
            "Prescribe standard fixed-dose combination regimens only, never an irrational or private ad hoc regimen, and never add a fluoroquinolone to a failing regimen.",
            "Link the patient to free drugs, free diagnostics and Nikshay Poshan Yojana even when the patient continues under private care, and enrol a treatment supporter.",
            "Screen and treat household contacts, offer TB preventive treatment to eligible contacts and to people living with HIV, and address the comorbidities that drive outcome - diabetes, HIV, undernutrition, tobacco and alcohol.",
            "Counsel on cough hygiene, ventilation and stigma, and follow the patient to a documented outcome rather than to the last prescription.",
          ],
        },
        {
          heading: "5. Monitoring and challenges",
          points: [
            "Programme indicators: notification rate, proportion tested with upfront NAAT, treatment success rate, proportion of notified patients tested for HIV and diabetes, proportion receiving DBT, and contact tracing coverage.",
            "Challenges: delayed diagnosis in the private sector, irrational regimens, loss to follow-up, undernutrition, rising drug resistance, and stigma - each of which has a specific programme answer.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart from presumptive TB through upfront NAAT to drug-sensitive and rifampicin-resistant arms, showing where notification and DBT enrolment occur.",
        "A table of the intensive and continuation phase drugs with weight-band fixed-dose combination numbers.",
      ],
      markSplit: [
        { part: "Objectives, four pillars and targets with dates", marks: 2 },
        { part: "Case definition and diagnostic algorithm", marks: 2 },
        { part: "Treatment regimens and DR-TB pathway", marks: 2 },
        { part: "Role of the family physician including mandatory notification", marks: 3 },
        { part: "Monitoring indicators and challenges", marks: 1 },
      ],
      keywords: ["NTEP", "Nikshay", "upfront NAAT", "mandatory notification", "Nikshay Poshan Yojana", "BPaLM"],
    },
    {
      id: "preventive-national-health-programmes-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on Ayushman Bharat, including both of its components and their service delivery.",
      openingLines: [
        "Ayushman Bharat, launched in 2018, is India's attempt at universal health coverage and has two mutually reinforcing components - comprehensive primary care through Health and Wellness Centres, renamed Ayushman Arogya Mandir in November 2023, and financial protection for secondary and tertiary care through PM-JAY.",
        "The first component addresses the continuum of care at the community level; the second addresses catastrophic out-of-pocket expenditure, which still accounts for about 39.4% of total health expenditure (National Health Accounts 2021-22).",
      ],
      answer: [
        {
          heading: "Component 1: Ayushman Arogya Mandir (Health and Wellness Centres)",
          points: [
            "Sub-centres and primary health centres are upgraded to deliver comprehensive rather than selective primary care, staffed at the sub-centre level by a Community Health Officer with an ANM and multipurpose worker, and supported by ASHAs.",
            "Twelve service packages are delivered: pregnancy and childbirth care; neonatal and infant health; childhood and adolescent health; family planning and reproductive health; management of communicable diseases and national programmes; outpatient care for acute simple illness; screening and management of non-communicable diseases; ophthalmic and ENT care; basic oral health; elderly and palliative care; emergency and trauma care including burns; and screening and basic management of mental health problems.",
            "Free essential drugs and diagnostics, teleconsultation through e-Sanjeevani, wellness activities including yoga, and population enumeration with CBAC-based NCD screening of all adults aged 30 and above are the defining activities.",
          ],
        },
        {
          heading: "Component 2: Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
          points: [
            "A fully tax-funded health assurance scheme providing Rs 5 lakh per family per year for secondary and tertiary hospitalisation, cashless and paperless at empanelled public and private hospitals, and portable across states.",
            "No cap on family size, age or gender; pre-existing conditions are covered from day one; the package covers 3 days of pre-hospitalisation and 15 days of post-hospitalisation expenses including drugs and diagnostics.",
            "Beneficiaries are identified from the SECC 2011 deprivation and occupational criteria - about 10.74 crore families, since expanded to 12 crore - and from October 2024 every citizen aged 70 years and above is covered irrespective of income through the Ayushman Vay Vandana card with an additional Rs 5 lakh top-up.",
            "Implementation is by the National Health Authority with State Health Agencies, using defined health benefit packages with fixed rates, and an anti-fraud framework.",
          ],
        },
        {
          heading: "Strengths and limitations",
          points: [
            "Strengths: a defined primary care package for the first time, financial protection against catastrophic hospitalisation, portability, and a single digital record through the Ayushman Bharat Digital Mission.",
            "Limitations: outpatient care and drugs - which make up most out-of-pocket spending - are not covered by PM-JAY, the scheme depends on the availability of empanelled hospitals, and the primary care arm needs sustained human resources and drug supply to work.",
          ],
        },
      ],
      mustDraw: ["A two-branch diagram of Ayushman Bharat showing the primary care arm with its 12 packages and the PM-JAY arm with its coverage and beneficiary criteria."],
      markSplit: [
        { part: "Concept and the two components named", marks: 1 },
        { part: "Ayushman Arogya Mandir and the 12 packages", marks: 2 },
        { part: "PM-JAY coverage, beneficiaries and implementation", marks: 1.5 },
        { part: "Strengths and limitations", marks: 0.5 },
      ],
      keywords: ["Ayushman Bharat", "PM-JAY", "Ayushman Arogya Mandir", "12 packages", "Vay Vandana", "universal health coverage"],
    },
    {
      id: "preventive-national-health-programmes-t3",
      paper: "I",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the national health programmes relevant to child health in India and state the key activity of each.",
      openingLines: [
        "Child health in India is delivered through the RMNCAH+N continuum under the National Health Mission, with several named programmes addressing distinct age bands and problems.",
        "The relevant outcome indicators are an infant mortality rate of 27 per 1,000 live births and a neonatal mortality rate of 19 per 1,000 (SRS 2021), against SDG targets of NMR below 12 and under-five mortality below 25 by 2030.",
      ],
      answer: [
        {
          heading: "Newborn and infant",
          points: [
            "Universal Immunisation Programme - free vaccines against 12 diseases as per the National Immunisation Schedule.",
            "Home Based Newborn Care by the ASHA - six visits for institutional deliveries and seven for home deliveries in the first 42 days, with weighing, temperature, feeding support and danger-sign recognition.",
            "Facility-based newborn care - newborn care corner at every delivery point, newborn stabilisation unit at the CHC, special newborn care unit at the district hospital.",
            "Navjaat Shishu Suraksha Karyakram for basic newborn resuscitation, and Janani Shishu Suraksha Karyakram for free care and transport for sick newborns up to one year.",
          ],
        },
        {
          heading: "Under-five child",
          points: [
            "IMNCI and Facility-based IMNCI - a syndromic approach to the sick child covering pneumonia, diarrhoea, malaria, measles, malnutrition and anaemia.",
            "Intensified Diarrhoea Control Fortnight with ORS and zinc, and the Social Awareness and Action to Neutralise Pneumonia Successfully (SAANS) initiative for childhood pneumonia.",
            "Home Based Care for Young Child - additional ASHA visits between 3 and 15 months for growth, development and feeding.",
            "Vitamin A prophylaxis - 1 lakh IU at 9 months with measles-rubella vaccine, then 2 lakh IU every 6 months up to 5 years, a total of 9 doses; National Deworming Day albendazole twice a year.",
          ],
        },
        {
          heading: "School age and adolescent",
          points: [
            "RBSK - screening from birth to 18 years for the 4 Ds (defects at birth, deficiencies, diseases, developmental delays including disability) covering 30 conditions, with free treatment through District Early Intervention Centres.",
            "RKSK - 10 to 19 years, six strategic areas, Adolescent Friendly Health Clinics and peer educators; Weekly Iron and Folic Acid Supplementation.",
            "PM POSHAN (formerly the Mid Day Meal Scheme) and the Anganwadi Services scheme under POSHAN 2.0 for supplementary nutrition, growth monitoring and preschool education.",
            "School Health and Wellness Programme under Ayushman Bharat, with two trained health and wellness ambassadors in every government school.",
          ],
        },
      ],
      markSplit: [
        { part: "Newborn and infant programmes", marks: 2 },
        { part: "Under-five programmes including nutrition rounds", marks: 1.5 },
        { part: "School age and adolescent programmes", marks: 1.5 },
      ],
      keywords: ["RBSK", "RKSK", "HBNC", "IMNCI", "Vitamin A prophylaxis", "PM POSHAN", "SNCU"],
    },
  ],
  mcqs: [
    {
      id: "preventive-national-health-programmes-q1",
      stem: "A private family physician diagnoses smear-positive pulmonary tuberculosis in a 34-year-old man who wishes to be treated privately and can afford it. What is the physician's legal obligation?",
      options: [
        "None, since the patient is being treated privately at his own cost",
        "Notify the case on the Nikshay portal, irrespective of where treatment is given",
        "Notify only if the patient agrees to take free government drugs",
        "Refer the patient compulsorily to the district TB centre for treatment",
        "Notify only if drug resistance is demonstrated",
      ],
      difficulty: "easy",
      answer: 1,
      explanation:
        "Tuberculosis notification has been mandatory for every health-care provider since 2012, extended by the Gazette Notification of 2018 to cover all private practitioners, laboratories and chemists dispensing anti-TB drugs, and the notification is made on Nikshay regardless of who pays for or supervises treatment. Private treatment does not exempt the provider, consent is not a precondition for notification, and compulsory transfer of care is not required - the patient may continue privately while receiving free drugs, free diagnostics and Nikshay Poshan Yojana benefits. Notification triggers contact tracing and public health action, which is why it cannot wait for a resistance result.",
    },
    {
      id: "preventive-national-health-programmes-q2",
      stem: "A newly appointed medical officer is planning services for a tribal block with a population of 60,000. According to Indian Public Health Standards norms for hilly and tribal areas, how many sub-centres and primary health centres should this block have?",
      options: [
        "12 sub-centres and 2 primary health centres",
        "20 sub-centres and 3 primary health centres",
        "12 sub-centres and 3 primary health centres",
        "20 sub-centres and 2 primary health centres",
        "6 sub-centres and 1 primary health centre",
      ],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "In hilly, tribal and difficult areas one sub-centre serves 3,000 people and one PHC serves 20,000, so 60,000 requires 60,000/3,000 = 20 sub-centres and 60,000/20,000 = 3 PHCs. Using the plain-area norms of 5,000 and 30,000 gives the distractor of 12 and 2 - the commonest error. The reduced norms exist because access, not headcount, is the binding constraint in difficult terrain, and the same logic applies to the CHC norm of 80,000 instead of 120,000.",
    },
    {
      id: "preventive-national-health-programmes-q3",
      stem: "Under Ayushman Bharat PM-JAY, which of the following statements is correct?",
      options: [
        "Cover is Rs 5 lakh per family per year with a cap of five family members",
        "Outpatient consultations and drugs are fully reimbursed",
        "Cover is Rs 5 lakh per family per year with no cap on family size or age, and pre-existing conditions are covered from day one",
        "Only public hospitals may be empanelled",
        "Beneficiaries must pay 10% co-payment on every package",
      ],
      difficulty: "easy",
      answer: 2,
      explanation:
        "PM-JAY provides Rs 5 lakh per family per year for secondary and tertiary hospitalisation with no cap on family size, age or gender, covers pre-existing conditions from the first day, and is cashless and portable across states. There is no co-payment, which is the defining feature of a tax-funded assurance scheme as opposed to contributory insurance. Both public and empanelled private hospitals provide care. Outpatient care and drugs - which actually account for most out-of-pocket expenditure in India - are not covered by PM-JAY and are addressed instead by the free drugs and diagnostics offered at Ayushman Arogya Mandirs.",
    },
    {
      id: "preventive-national-health-programmes-q4",
      stem: "Which of the following is the key programme indicator of delay in case detection under the National Leprosy Eradication Programme?",
      options: [
        "Prevalence rate per 10,000 population",
        "Annual new case detection rate per 100,000 population",
        "Grade 2 disability rate among new cases",
        "Proportion of multibacillary cases",
        "Treatment completion rate",
      ],
      difficulty: "moderate",
      answer: 2,
      explanation:
        "Grade 2 disability - visible deformity or damage such as clawing, ulceration or lagophthalmos - present at the time of diagnosis means the patient had disease long enough for nerve damage to become irreversible, so the Grade 2 disability rate among new cases is the accepted measure of detection delay and of programme vigilance. Prevalence and new case detection rate measure burden and case-finding intensity but are heavily influenced by how hard the programme is looking. The proportion of multibacillary cases reflects classification and transmission rather than delay, and treatment completion measures adherence after diagnosis.",
    },
    {
      id: "preventive-national-health-programmes-q5",
      stem: "Rashtriya Bal Swasthya Karyakram screens children for the '4 Ds'. Which of the following correctly lists them?",
      options: [
        "Diarrhoea, dehydration, dysentery, dengue",
        "Defects at birth, deficiencies, diseases, developmental delays including disability",
        "Diabetes, dyslipidaemia, dental caries, deafness",
        "Deficiencies, dehydration, deformity, disability",
        "Defects at birth, dental problems, deafness, developmental delay",
      ],
      difficulty: "easy",
      answer: 1,
      explanation:
        "RBSK, launched in 2013, screens children from birth to 18 years for defects at birth, deficiencies, diseases and developmental delays including disability - 30 identified conditions in all - through mobile health teams visiting anganwadis and government schools, with free management at District Early Intervention Centres. The other options mix in conditions that are covered under other programmes: diarrhoeal disease under the Intensified Diarrhoea Control Fortnight, and non-communicable disease risk factors under NP-NCD and the School Health and Wellness Programme.",
    },
    {
      id: "preventive-national-health-programmes-q6",
      stem: "A block with a population of 400,000 records 120 malaria cases confirmed by microscopy or rapid diagnostic test in a year. What is the annual parasite incidence, and what does it indicate under the malaria elimination framework?",
      options: [
        "0.3 per 1,000 - Category 1 (elimination phase)",
        "3.0 per 1,000 - Category 3 (intensified control)",
        "0.03 per 1,000 - Category 0",
        "30 per 1,000 - Category 3",
        "0.3 per 100 - Category 2",
      ],
      difficulty: "moderate",
      answer: 0,
      explanation:
        "Annual parasite incidence = confirmed malaria cases divided by population at risk, multiplied by 1,000 = (120/400,000) x 1,000 = 0.3 per 1,000. Under the National Framework for Malaria Elimination districts with an API below 1 per 1,000 are in Category 1, the elimination phase, where the emphasis shifts to case-based surveillance, complete case investigation and focal response rather than blanket vector control. Category 3 requires an API of 1 or more per 1,000, and Category 0 means zero indigenous cases for the preceding three years. Dividing by the wrong denominator or forgetting the factor of 1,000 produces the remaining options.",
    },
    {
      id: "preventive-national-health-programmes-q7",
      stem: "Tele-MANAS, the national tele-mental health service launched in October 2022 under the National Mental Health Programme, is accessed on which toll-free number?",
      options: ["104", "108", "1075", "14416", "1800-11-2356"],
      difficulty: "easy",
      answer: 3,
      explanation:
        "Tele-MANAS provides 24-hour free tele-mental health counselling in multiple languages on 14416 (also reachable on 1-800-891-4416), with escalation to a mental health professional and to the District Mental Health Programme where needed. 104 is the state health helpline, 108 is the emergency ambulance service, 1075 was the national COVID-19 helpline, and 1800-11-2356 is the national tobacco quitline - the last is worth knowing separately because tobacco cessation counselling is examined alongside mental health.",
    },
  ],
  cards: [
    {
      id: "preventive-national-health-programmes-c1",
      front: "Population norms: ASHA, sub-centre, PHC, CHC.",
      back: "ASHA 1,000; sub-centre 5,000 (3,000 tribal/hilly); PHC 30,000 (20,000); CHC 120,000 (80,000). CHC is the first referral unit with four specialists and 30 beds.",
    },
    {
      id: "preventive-national-health-programmes-c2",
      front: "The two components of Ayushman Bharat.",
      back: "Ayushman Arogya Mandir (Health and Wellness Centres) delivering 12 comprehensive primary care packages, and PM-JAY giving Rs 5 lakh per family per year for hospitalisation.",
    },
    {
      id: "preventive-national-health-programmes-c3",
      front: "Who is covered by PM-JAY from October 2024 irrespective of income?",
      back: "All citizens aged 70 years and above, through the Ayushman Vay Vandana card with an additional Rs 5 lakh top-up cover.",
    },
    {
      id: "preventive-national-health-programmes-c4",
      front: "NTEP daily regimen for drug-sensitive TB.",
      back: "2 months HRZE (intensive) then 4 months HRE (continuation), daily, as weight-band fixed-dose combinations. Intermittent thrice-weekly therapy has been abandoned.",
    },
    {
      id: "preventive-national-health-programmes-c5",
      front: "Nikshay Poshan Yojana amount.",
      back: "Direct benefit transfer for nutritional support throughout treatment - Rs 500 per month from 2018, raised to Rs 1,000 per month from November 2024.",
    },
    {
      id: "preventive-national-health-programmes-c6",
      front: "Definition of leprosy elimination and when India achieved it.",
      back: "Prevalence below 1 case per 10,000 population; achieved nationally in December 2005. The current target is zero transmission by 2027.",
    },
    {
      id: "preventive-national-health-programmes-c7",
      front: "MDT duration for paucibacillary and multibacillary leprosy.",
      back: "Paucibacillary 6 months, multibacillary 12 months, both now on a three-drug regimen (rifampicin, clofazimine, dapsone). Contacts get single-dose rifampicin prophylaxis.",
    },
    {
      id: "preventive-national-health-programmes-c8",
      front: "Annual parasite incidence formula and the Category 1 cut-off.",
      back: "API = confirmed malaria cases / population at risk x 1,000. API below 1 per 1,000 places a district in Category 1, the elimination phase.",
    },
    {
      id: "preventive-national-health-programmes-c9",
      front: "Kala-azar elimination target.",
      back: "Fewer than 1 case per 10,000 population at block level - achieved across endemic blocks in 2023. Treatment is single-dose liposomal amphotericin B 10 mg/kg.",
    },
    {
      id: "preventive-national-health-programmes-c10",
      front: "RBSK age range, the 4 Ds, and where positives are treated.",
      back: "Birth to 18 years; defects at birth, deficiencies, diseases, developmental delays including disability; 30 conditions; free care at District Early Intervention Centres.",
    },
    {
      id: "preventive-national-health-programmes-c11",
      front: "National Mental Health Survey 2015-16 headline figures.",
      back: "Current prevalence of mental morbidity about 10.6% in adults, lifetime 13.7%, with a treatment gap of 70-92% depending on the disorder.",
    },
    {
      id: "preventive-national-health-programmes-c12",
      front: "Which portal for TB, for leprosy, and for outbreak surveillance?",
      back: "TB - Nikshay; leprosy - Nikusth 2.0; communicable disease and outbreak surveillance - IHIP (the digital IDSP platform), using S, P and L forms.",
    },
  ],
  references: [
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - national health programmes",
    "National Strategic Plan for Tuberculosis Elimination and India TB Report 2024, Central TB Division, MoHFW",
    "Operational Guidelines for Comprehensive Primary Health Care through Health and Wellness Centres, National Health Systems Resource Centre, 2018 and subsequent updates",
    "PM-JAY scheme guidelines, National Health Authority, with the October 2024 expansion to citizens aged 70 years and above",
    "National Strategic Plan and Roadmap for Leprosy 2023-2027, NLEP, MoHFW",
    "National Framework for Malaria Elimination in India 2016-2030 and NCVBDC guidelines, 2022",
    "Indian Public Health Standards, revised 2022, MoHFW",
    "National Mental Health Survey of India 2015-16, NIMHANS",
  ],
});

topics.push({
  id: "preventive-immunisation",
  title: "Immunisation: the UIP schedule, cold chain, AEFI and adult vaccines",
  oneLiner:
    "The Universal Immunisation Programme provides free vaccines against 12 diseases on a fixed National Immunisation Schedule, and the family physician must know the schedule by heart, keep the cold chain between +2 and +8 degrees Celsius, recognise and report adverse events following immunisation, and add adult, travel and catch-up vaccines that the programme does not supply.",
  frequency: "core",
  keywords: [
    "Universal Immunisation Programme",
    "UIP",
    "National Immunisation Schedule",
    "BCG",
    "pentavalent",
    "fIPV",
    "rotavirus vaccine",
    "PCV",
    "measles-rubella",
    "Td",
    "Mission Indradhanush",
    "cold chain",
    "vaccine vial monitor",
    "open vial policy",
    "shake test",
    "AEFI",
    "anaphylaxis",
    "U-WIN",
    "IAP schedule",
    "travel vaccines",
    "rabies post-exposure prophylaxis",
    "herd immunity",
  ],
  sections: [
    {
      heading: "The programme and what it delivers",
      points: [
        "The Expanded Programme on Immunization began in India in 1978 and became the **Universal Immunisation Programme in 1985**; it is one of the largest public health programmes in the world, targeting about 2.6 crore infants and 2.9 crore pregnant women every year.",
        "The UIP provides free protection against **12 diseases** - tuberculosis, diphtheria, pertussis, tetanus, poliomyelitis, hepatitis B, *Haemophilus influenzae* type b, measles, rubella, severe diarrhoea due to rotavirus, pneumococcal pneumonia, and Japanese encephalitis in endemic districts.",
        "**Mission Indradhanush (2014)** and **Intensified Mission Indradhanush** are catch-up campaigns to reach partially immunised and unimmunised children and pregnant women in low-coverage blocks, with a stated target of more than 90% full immunisation coverage.",
        "Coverage to quote: **full immunisation of children aged 12-23 months was 76.4% in NFHS-5 (2019-21)**, up from 62% in NFHS-4 (2015-16); India was certified **polio-free in March 2014** and eliminated **maternal and neonatal tetanus in 2015**.",
        "Every dose is now recorded on **U-WIN**, the digital immunisation registry that generates the due list, the beneficiary's digital certificate and the drop-out list - a drop-out is a child who received an earlier dose but not a later one, and a left-out is one who never started.",
        "Two coverage arithmetic terms are examined: **drop-out rate = (BCG doses - measles doses) / BCG doses x 100**, and a high drop-out points to service quality, whereas low BCG coverage points to access.",
      ],
    },
    {
      heading: "The National Immunisation Schedule, dose by dose",
      points: [
        "**At birth (within the institution):** BCG 0.05 mL intradermal (0.1 mL after 1 month of age) over the left upper arm at the insertion of deltoid, **OPV zero dose** 2 drops orally, and **hepatitis B birth dose** 0.5 mL intramuscular within 24 hours.",
        "**6 weeks:** pentavalent-1 (DPT + hepatitis B + Hib) 0.5 mL intramuscular in the anterolateral thigh, OPV-1, **rotavirus vaccine-1** 5 drops orally, **fractional IPV-1** 0.1 mL intradermal in the right upper arm, and PCV-1.",
        "**10 weeks:** pentavalent-2, OPV-2, rotavirus vaccine-2. **14 weeks:** pentavalent-3, OPV-3, rotavirus vaccine-3, **fractional IPV-2**, PCV-2.",
        "**9-12 months:** **measles-rubella-1** 0.5 mL subcutaneous in the right upper arm, **JE-1** in endemic districts, **PCV booster**, and vitamin A 1 lakh IU.",
        "**16-24 months:** measles-rubella-2, JE-2, **DPT booster-1**, OPV booster. **5-6 years:** DPT booster-2. **10 years and 16 years:** **Td** (tetanus and reduced-dose diphtheria toxoid, which replaced plain TT in 2019).",
        "**Pregnant woman:** Td-1 as early as possible in pregnancy, Td-2 four weeks later, and a single Td booster if she received two doses within the preceding three years. **Vitamin A** 2 lakh IU every 6 months from 16 months to 5 years, a total of 9 doses including the first at 9 months.",
        "**HPV vaccine is not yet part of the national schedule** across India although it is recommended by the Indian Academy of Pediatrics and has been introduced in some states; questions on it should state exactly that.",
      ],
    },
    {
      heading: "Cold chain: equipment, temperatures and the rules that break it",
      points: [
        "The cold chain is the system of people and equipment that keeps vaccine potent from the manufacturer to the child; **the point of failure in India is almost never the walk-in cooler and almost always the last mile - the vaccine carrier and the ice pack**.",
        "**Storage temperatures:** walk-in coolers and ice-lined refrigerators at **+2 to +8 degrees Celsius**; walk-in freezers and deep freezers at **-15 to -25 degrees Celsius** for OPV and for freezing ice packs. At the PHC an ILR holds vaccines and a deep freezer makes ice packs - never the reverse.",
        "**Never freeze** hepatitis B, pentavalent, PCV, IPV, Td, rotavirus (liquid) - freezing destroys the adjuvant-adsorbed antigens irreversibly. **Most heat-sensitive** vaccines are OPV and reconstituted measles-rubella; BCG and measles are also damaged by sunlight.",
        "**Vaccine Vial Monitor (VVM)** is a heat-sensitive square inside a circle on the label: use the vial at **stage 1 and stage 2** (square lighter than the circle), and **discard at stage 3 and 4** (square as dark as or darker than the circle). The VVM records cumulative heat exposure and says nothing about freezing.",
        "**The shake test** detects freeze damage in adsorbed vaccines: shake the suspect vial and a known frozen control, keep both still, and if the suspect vial sediments as fast as the frozen control with a granular flaky deposit it has been frozen and must be discarded.",
        "**Open vial policy** allows an opened multi-dose vial of OPV, hepatitis B, pentavalent, Td, fIPV and liquid rotavirus vaccine to be used for up to **28 days** provided the expiry date has not passed, the VVM is at stage 1 or 2, the vials are stored at +2 to +8 degrees Celsius and the septum has not been submerged in water. It **does not apply to BCG, measles-rubella or JE**, which are reconstituted and must be discarded **4 hours** after reconstitution or at the end of the session, whichever is earlier.",
        "Ice packs must be **conditioned** - kept out until the ice begins to melt and water can be heard sloshing - before being placed in the vaccine carrier, otherwise freeze-sensitive vaccines are ruined during outreach.",
      ],
    },
    {
      heading: "Adverse events following immunisation (AEFI)",
      points: [
        "**Definition:** an AEFI is any untoward medical occurrence which follows immunisation and which does not necessarily have a causal relationship with the vaccine - the causal link is established by investigation, not assumed.",
        "**Cause-specific classification (WHO 2019, used by India):** vaccine-product-related, vaccine-quality-defect-related, **immunisation-error-related** (formerly programme error - the commonest preventable category), immunisation-anxiety-related (fainting, hyperventilation), and coincidental.",
        "**A serious AEFI** is one that results in death, is life-threatening, requires hospitalisation or prolongs it, causes persistent or significant disability, causes a congenital anomaly, or occurs as a **cluster** - and all serious AEFIs must be reported and investigated.",
        "**Reporting timeline in India:** the case is reported to the Medical Officer and the **District Immunisation Officer within 24 hours**, a preliminary investigation is begun within **48 hours**, the case investigation form is completed within **7 days**, and the district AEFI committee performs causality assessment, with state review; all serious cases go to the National AEFI Secretariat.",
        "**Anaphylaxis** is the emergency to be ready for: **adrenaline 1:1000, 0.01 mL/kg intramuscularly into the anterolateral thigh (maximum 0.5 mL), repeated every 5-15 minutes as needed**, with the patient laid flat and legs raised, airway secured and immediate referral. Every session site must have an anaphylaxis kit and the patient must be observed for 30 minutes after vaccination.",
        "Common minor events to counsel about: fever and injection-site pain after pentavalent (paracetamol 15 mg/kg per dose), a small papule at 2-3 weeks after BCG progressing to a shallow ulcer and then a scar by 6-12 weeks (**this is expected, not an abscess**), and mild fever with rash 5-12 days after measles-rubella vaccine.",
        "A **cluster of AEFIs at one session** - several children with abscesses or high fever from the same vial - is almost always an immunisation error such as contamination, wrong diluent, wrong reconstitution or the use of a vaccine beyond four hours, and it demands immediate suspension of that vial lot and reporting.",
      ],
    },
    {
      heading: "Adult, catch-up and travel vaccines",
      points: [
        "**Adults with chronic disease:** influenza vaccine annually and pneumococcal vaccine (PCV13 followed after a year by PPSV23, or PPSV23 alone by local protocol) for adults over 65 and for those with diabetes, chronic lung, heart, liver or kidney disease, asplenia or immunosuppression.",
        "**Hepatitis B** 0, 1 and 6 months for health-care workers, dialysis patients, people with multiple partners and household contacts of carriers, with anti-HBs testing 1-2 months after the last dose in health-care workers (protective level 10 mIU/mL or more).",
        "**Tetanus prophylaxis in wounds:** a clean minor wound in a person with three or more documented doses needs Td only if the last dose was more than 10 years ago; a tetanus-prone wound needs Td if the last dose was more than 5 years ago, and **human tetanus immunoglobulin 250 IU intramuscularly** in addition if the primary course is incomplete or unknown.",
        "**Rabies post-exposure prophylaxis:** Category I (touching, feeding, licks on intact skin) - wash only; Category II (nibbling of uncovered skin, minor scratches without bleeding) - wash for 15 minutes with soap and running water plus vaccine; Category III (transdermal bites, licks on broken skin or mucosa, bat exposure) - wash, vaccine **and rabies immunoglobulin infiltrated into and around the wound** (human RIG 20 IU/kg, equine RIG 40 IU/kg).",
        "**Intradermal rabies regimen** used in Indian anti-rabies clinics is the updated Thai Red Cross schedule: 0.1 mL at two sites on days 0, 3, 7 and 28; the intramuscular Essen regimen is one dose on days 0, 3, 7, 14 and 28.",
        "**Travel vaccines:** yellow fever is the only vaccine that can be legally required for entry - a **single dose is valid for life** under the International Health Regulations (2005) as amended in 2016, and India requires a certificate from travellers arriving from endemic countries. Typhoid, hepatitis A, meningococcal ACWY (mandatory for Hajj and Umrah pilgrims), Japanese encephalitis, cholera and rabies pre-exposure prophylaxis are given by destination and activity.",
        "**Special situations:** live vaccines are avoided in pregnancy and in significant immunosuppression; a splenectomised patient needs pneumococcal, meningococcal and Hib vaccines ideally 2 weeks before elective surgery; and an HIV-positive child receives all UIP vaccines except BCG if symptomatic and severely immunosuppressed.",
      ],
    },
    {
      heading: "Herd immunity and the false contraindications",
      points: [
        "**Herd immunity** is the resistance of a group to the spread of an infection because a sufficient proportion is immune; it protects the unvaccinated only for infections with human-to-human transmission and no animal reservoir.",
        "The **herd immunity threshold = 1 - 1/R0**, so measles with an R0 of 12-18 needs about 92-95% coverage, whereas polio with an R0 of 5-7 needs about 80-86% - which is why measles is the first disease to return when coverage slips.",
        "**Tetanus has no herd immunity** because the spores are environmental and there is no person-to-person transmission - a favourite one-line viva question.",
        "**False contraindications** that must never be allowed to delay a dose: mild illness with low-grade fever, mild diarrhoea, malnutrition, breastfeeding, current antibiotic therapy, prematurity or low birth weight, a family history of convulsions, and a previous mild local reaction.",
        "**True contraindications:** anaphylaxis to a previous dose or a vaccine constituent; live vaccines in severe immunodeficiency, in symptomatic HIV with severe immunosuppression, and in pregnancy; pentavalent (whole-cell pertussis) if there was encephalopathy within 7 days of a previous dose; and postponement of live vaccines for 3 months after immunoglobulin or blood transfusion.",
        "Missed doses are **never restarted from the beginning** - the schedule is resumed from where it stopped, because immunological memory persists; this is the single most useful counselling point in a walk-in immunisation clinic.",
      ],
    },
  ],
  tables: [
    {
      heading: "National Immunisation Schedule (UIP) - infants and children",
      columns: ["Age", "Vaccines", "Dose and route"],
      rows: [
        ["Birth", "BCG, OPV-0, hepatitis B birth dose", "BCG 0.05 mL ID left upper arm; OPV 2 drops oral; HepB 0.5 mL IM thigh within 24 h"],
        ["6 weeks", "Pentavalent-1, OPV-1, RVV-1, fIPV-1, PCV-1", "Penta 0.5 mL IM thigh; RVV 5 drops oral; fIPV 0.1 mL ID right upper arm; PCV 0.5 mL IM"],
        ["10 weeks", "Pentavalent-2, OPV-2, RVV-2", "As above"],
        ["14 weeks", "Pentavalent-3, OPV-3, RVV-3, fIPV-2, PCV-2", "As above"],
        ["9-12 months", "MR-1, JE-1 (endemic districts), PCV booster, vitamin A", "MR 0.5 mL SC right upper arm; vitamin A 1 lakh IU oral"],
        ["16-24 months", "MR-2, JE-2, DPT booster-1, OPV booster", "DPT 0.5 mL IM; OPV 2 drops oral"],
        ["5-6 years", "DPT booster-2", "0.5 mL IM"],
        ["10 years and 16 years", "Td", "0.5 mL IM (Td replaced plain TT in 2019)"],
        ["Pregnancy", "Td-1, Td-2 (4 weeks later) or one Td booster", "0.5 mL IM; booster if 2 doses within the last 3 years"],
      ],
    },
    {
      heading: "Cold chain rules at a glance",
      columns: ["Item", "Rule", "Common error"],
      rows: [
        ["ILR / walk-in cooler", "+2 to +8 degrees Celsius", "Storing freeze-sensitive vaccine against the freezer wall or on the floor of the ILR"],
        ["Deep freezer", "-15 to -25 degrees Celsius: OPV and ice packs only", "Keeping pentavalent or Td in the deep freezer - destroys them"],
        ["Vaccine vial monitor", "Use at stage 1 and 2; discard at stage 3 and 4", "Reading the VVM as a freeze indicator - it only records heat"],
        ["Shake test", "Detects freeze damage in adsorbed vaccines", "Not doing it when a carrier is suspected of freezing"],
        ["Open vial policy", "28 days for OPV, HepB, penta, Td, fIPV, liquid RVV", "Applying it to BCG, MR or JE - these are discarded in 4 hours"],
        ["Ice pack conditioning", "Condition until water sloshes before loading the carrier", "Loading rock-hard ice packs next to pentavalent"],
      ],
    },
    {
      heading: "AEFI: classification, timeline and first response",
      columns: ["Item", "Detail"],
      rows: [
        ["Cause-specific categories", "Vaccine product related; vaccine quality defect; immunisation error; immunisation anxiety; coincidental"],
        ["Serious AEFI", "Death, life-threatening event, hospitalisation or its prolongation, persistent disability, congenital anomaly, or a cluster"],
        ["Reporting", "To the Medical Officer and District Immunisation Officer within 24 hours; investigation begun within 48 hours; case investigation form within 7 days"],
        ["Causality assessment", "District AEFI committee, then state committee; all serious events to the National AEFI Secretariat"],
        ["Anaphylaxis treatment", "Adrenaline 1:1000, 0.01 mL/kg IM anterolateral thigh, maximum 0.5 mL, repeat every 5-15 min; lie flat, legs raised, oxygen, refer"],
        ["Observation after vaccination", "30 minutes at the session site, with an anaphylaxis kit available"],
      ],
    },
  ],
  redFlags: [
    "Anaphylaxis within minutes of a vaccine - stridor, wheeze, hypotension, urticaria or angioedema; give intramuscular adrenaline immediately and report as a serious AEFI within 24 hours.",
    "A cluster of AEFIs traced to one vial or one session - suspend that lot, seal the remaining vials, and report the same day; this is an immunisation error until proved otherwise.",
    "Any death, hospitalisation, persistent disability or congenital anomaly following immunisation - a serious AEFI requiring the full investigation timeline regardless of how unlikely causation seems.",
    "Encephalopathy within 7 days of a pertussis-containing vaccine - a true contraindication to further whole-cell pertussis doses; complete the schedule with DT or Td.",
    "A vaccine vial with the VVM at stage 3 or 4, a frozen adsorbed vaccine, or a reconstituted BCG, MR or JE vial more than 4 hours old - discard, do not use, and record the wastage.",
    "Acute flaccid paralysis in any child under 15 years, or any measles-like fever with rash cluster - both are notifiable to the district surveillance unit immediately, with stool and serum samples as per protocol.",
    "A category III animal bite treated with vaccine alone - rabies immunoglobulin infiltrated into the wound is mandatory and its omission is a fatal error.",
    "A pregnant woman given a live vaccine such as measles-rubella or yellow fever inadvertently - counsel, document and report; it is not an indication for termination but must be recorded.",
  ],
  pearls: [
    "Learn the schedule by the visit, not by the vaccine: birth, 6, 10, 14 weeks, 9 months, 16-24 months, 5 years, 10 years, 16 years - then hang the vaccines on each peg.",
    "fIPV is 0.1 mL intradermal in the right upper arm at 6 and 14 weeks; BCG is 0.05 mL intradermal in the left upper arm at birth. Left BCG, right fIPV - it prevents a common viva slip.",
    "Open vial policy is 28 days, but never for BCG, measles-rubella or JE, which are discarded 4 hours after reconstitution.",
    "The VVM tells you about heat, the shake test about freezing - two different failures with two different tests.",
    "Never restart an interrupted schedule; resume from where it stopped, because there is no immunological penalty for delay, only for restarting.",
    "Herd immunity threshold is 1 - 1/R0; measles needs 92-95% coverage, and tetanus has no herd immunity at all.",
    "The commonest AEFI category worldwide is immunisation error, and it is the only one that is entirely preventable by the person giving the injection.",
    "A single dose of yellow fever vaccine is valid for life under the International Health Regulations as amended in 2016 - the old 10-year revalidation is gone.",
  ],
  theory: [
    {
      id: "preventive-immunisation-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Describe the National Immunisation Schedule under the Universal Immunisation Programme. Discuss the maintenance of the cold chain and the management of adverse events following immunisation.",
      openingLines: [
        "The Universal Immunisation Programme, launched in 1985 from the Expanded Programme on Immunization of 1978, provides free vaccination against 12 diseases to about 2.6 crore infants and 2.9 crore pregnant women each year and is the largest such programme in the world.",
        "Full immunisation coverage of children aged 12-23 months was 76.4% in NFHS-5 (2019-21), and India was certified polio-free in March 2014 and eliminated maternal and neonatal tetanus in 2015.",
      ],
      answer: [
        {
          heading: "1. The National Immunisation Schedule",
          points: [
            "Birth: BCG 0.05 mL intradermal in the left upper arm, OPV zero dose 2 drops orally, and hepatitis B birth dose 0.5 mL intramuscular within 24 hours.",
            "6 weeks: pentavalent-1, OPV-1, rotavirus vaccine-1, fractional IPV-1 (0.1 mL intradermal, right upper arm), PCV-1.",
            "10 weeks: pentavalent-2, OPV-2, rotavirus vaccine-2. 14 weeks: pentavalent-3, OPV-3, rotavirus vaccine-3, fractional IPV-2, PCV-2.",
            "9-12 months: measles-rubella-1, JE-1 in endemic districts, PCV booster, vitamin A 1 lakh IU.",
            "16-24 months: measles-rubella-2, JE-2, DPT booster-1, OPV booster. 5-6 years: DPT booster-2. 10 and 16 years: Td.",
            "Pregnancy: Td-1 early, Td-2 four weeks later, or a single booster if two doses were given within the preceding three years.",
          ],
        },
        {
          heading: "2. Cold chain equipment and temperatures",
          points: [
            "The cold chain is the system of people and equipment that maintains vaccine potency from manufacture to administration.",
            "Walk-in coolers, ice-lined refrigerators and vaccine carriers hold vaccines at +2 to +8 degrees Celsius; walk-in freezers and deep freezers hold OPV and freeze ice packs at -15 to -25 degrees Celsius.",
            "Freeze-sensitive vaccines - hepatitis B, pentavalent, PCV, IPV, Td and liquid rotavirus - are destroyed by freezing; heat-sensitive vaccines - OPV and reconstituted measles-rubella - lose potency fastest with heat exposure.",
            "At outreach sessions ice packs must be conditioned until water can be heard sloshing before loading, and vaccines must never be placed in direct contact with unconditioned ice packs.",
          ],
        },
        {
          heading: "3. Cold chain monitoring tools",
          points: [
            "Vaccine vial monitor: use at stage 1 and 2, discard at stage 3 and 4; it records cumulative heat exposure only.",
            "Shake test: identifies freeze damage in adsorbed vaccines by comparing sedimentation against a deliberately frozen control vial.",
            "Twice-daily temperature recording on the ILR log with a dial or digital thermometer, and an alarm or continuous temperature recorder at the district store.",
            "Open vial policy: 28 days for OPV, hepatitis B, pentavalent, Td, fIPV and liquid rotavirus vaccine, provided VVM stage 1 or 2, unexpired, stored at +2 to +8 degrees Celsius and the septum not submerged; not applicable to reconstituted BCG, MR and JE, which are discarded after 4 hours.",
          ],
        },
        {
          heading: "4. AEFI: definition, classification and reporting",
          points: [
            "An AEFI is any untoward medical occurrence following immunisation which does not necessarily have a causal relationship with the vaccine.",
            "Cause-specific classification: vaccine product related, vaccine quality defect related, immunisation error related, immunisation anxiety related, and coincidental.",
            "Serious AEFI: death, life-threatening illness, hospitalisation or its prolongation, persistent or significant disability, congenital anomaly, or a cluster of cases.",
            "Reporting: to the Medical Officer and District Immunisation Officer within 24 hours, preliminary investigation within 48 hours, case investigation form within 7 days, and causality assessment by the district and state AEFI committees using the WHO algorithm.",
          ],
        },
        {
          heading: "5. Clinical management and prevention of AEFI",
          points: [
            "Anaphylaxis: adrenaline 1:1000, 0.01 mL/kg intramuscularly into the anterolateral thigh (maximum 0.5 mL), repeated every 5-15 minutes; lie the child flat with legs raised, give oxygen, secure the airway and refer. Every session must have an anaphylaxis kit and 30 minutes of observation.",
            "Fever and local pain: paracetamol 15 mg/kg per dose and reassurance; the BCG papule, ulcer and scar sequence over 6-12 weeks is normal and needs no treatment.",
            "Prevention of immunisation errors: one sterile syringe per child (auto-disable syringes), correct diluent from the same manufacturer, correct reconstitution, correct site and route, no mixing of vaccines in one syringe, and adherence to the four-hour rule.",
            "Communication: never deny an event, record it, inform the family truthfully, and let the AEFI committee determine causality - defensive denial destroys programme trust and is the usual cause of a local vaccine boycott.",
          ],
        },
      ],
      mustDraw: [
        "The full National Immunisation Schedule as a table of age against vaccines against dose and route.",
        "A cold chain flow diagram from the GMSD through the state and district stores to the PHC ILR and the vaccine carrier, with the temperature at each level.",
      ],
      markSplit: [
        { part: "Complete schedule with doses, routes and sites", marks: 4 },
        { part: "Cold chain equipment and temperatures", marks: 2 },
        { part: "VVM, shake test and open vial policy", marks: 1.5 },
        { part: "AEFI definition, classification and reporting timeline", marks: 1.5 },
        { part: "Management of anaphylaxis and prevention of immunisation error", marks: 1 },
      ],
      keywords: ["UIP", "National Immunisation Schedule", "cold chain", "VVM", "open vial policy", "AEFI", "anaphylaxis"],
    },
    {
      id: "preventive-immunisation-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on rabies post-exposure prophylaxis in a family practice setting.",
      openingLines: [
        "Rabies is invariably fatal once symptomatic but is completely preventable by correct post-exposure prophylaxis, which has three inseparable components - wound washing, vaccination and, in category III exposures, rabies immunoglobulin.",
        "India accounts for a substantial share of global rabies deaths and the National Rabies Control Programme targets dog-mediated rabies elimination by 2030; the commonest fatal error in practice is omitting immunoglobulin.",
      ],
      answer: [
        {
          heading: "Categorisation of exposure (WHO)",
          points: [
            "Category I - touching or feeding animals, licks on intact skin: no prophylaxis, wash the area.",
            "Category II - nibbling of uncovered skin, minor scratches or abrasions without bleeding: wound washing and vaccine.",
            "Category III - single or multiple transdermal bites or scratches, licks on broken skin, contamination of mucous membranes with saliva, and any bat exposure: wound washing, vaccine and rabies immunoglobulin.",
          ],
        },
        {
          heading: "Wound management",
          points: [
            "Wash immediately with soap and running water for at least 15 minutes, then apply a virucidal agent such as povidone-iodine or 70% alcohol.",
            "Do not suture if avoidable; if suturing is unavoidable, place minimal loose sutures after infiltrating immunoglobulin and wait several hours.",
            "Give tetanus prophylaxis and consider antibiotic cover for deep or contaminated bites, particularly cat and human bites.",
          ],
        },
        {
          heading: "Vaccine and immunoglobulin",
          points: [
            "Intradermal updated Thai Red Cross regimen: 0.1 mL at two sites on days 0, 3, 7 and 28. Intramuscular Essen regimen: one full dose on days 0, 3, 7, 14 and 28, given in the deltoid (anterolateral thigh in infants), never the gluteal region.",
            "Previously vaccinated patients need only two booster doses on days 0 and 3, and no immunoglobulin.",
            "Rabies immunoglobulin for category III: human RIG 20 IU/kg or equine RIG 40 IU/kg, infiltrated as much as anatomically possible into and around all wounds; any remainder is no longer required to be given intramuscularly at a distant site under current WHO guidance.",
            "Immunoglobulin must be given on day 0 or as soon as possible, and never after day 7 of starting the vaccine course, since antibody response is already established by then.",
          ],
        },
        {
          heading: "Counselling and follow-up",
          points: [
            "There is no contraindication to post-exposure prophylaxis - it is given in pregnancy, in infancy and in immunosuppression, in whom the intramuscular regimen and RIG are preferred.",
            "Observe the biting dog or cat for 10 days where possible; prophylaxis is started immediately and may be discontinued if the animal remains healthy at 10 days.",
            "Advise completion of the full schedule, report the bite for the animal bite register, and counsel on avoiding traditional applications such as chilli, turmeric or lime on the wound.",
          ],
        },
      ],
      mustDraw: ["A table of WHO exposure categories against the required intervention, and a chart of the intradermal and intramuscular vaccine schedules."],
      markSplit: [
        { part: "Categories of exposure", marks: 1.5 },
        { part: "Wound management", marks: 1 },
        { part: "Vaccine regimens and immunoglobulin dose and technique", marks: 2 },
        { part: "Counselling, special groups and follow-up", marks: 0.5 },
      ],
      keywords: ["rabies", "post-exposure prophylaxis", "category III", "rabies immunoglobulin", "Thai Red Cross regimen", "Essen"],
    },
  ],
  mcqs: [
    {
      id: "preventive-immunisation-q1",
      stem: "A 9-month-old child is brought for measles-rubella vaccination. The vial of MR was reconstituted at 10:00 am and it is now 3:00 pm; the vaccine has been kept at +4 degrees Celsius throughout and the VVM is at stage 2. What should be done?",
      options: [
        "Use the vial, since the VVM is at stage 2 and the temperature was maintained",
        "Discard the vial and reconstitute a fresh one",
        "Use the vial up to 28 days under the open vial policy",
        "Use it only if the child has no other option for follow-up",
        "Send the vial for potency testing before use",
      ],
      difficulty: "easy",
      answer: 1,
      explanation:
        "Reconstituted measles-rubella, BCG and JE vaccines must be discarded 4 hours after reconstitution or at the end of the immunisation session, whichever is earlier, because the diluent contains no preservative and bacterial contamination causes toxic shock syndrome and abscess clusters. The open vial policy of 28 days applies only to multi-dose liquid vaccines - OPV, hepatitis B, pentavalent, Td, fIPV and liquid rotavirus. A satisfactory VVM and correct storage temperature do not override the four-hour rule, since the risk is microbiological rather than thermal.",
    },
    {
      id: "preventive-immunisation-q2",
      stem: "A district reports that of 10,000 infants, 9,200 received BCG and 7,360 received the first dose of measles-rubella vaccine during the same year. What is the drop-out rate, and what does it suggest?",
      options: [
        "8% - a problem of access to services",
        "20% - a problem of service quality and follow-up",
        "20% - a problem of vaccine supply only",
        "26% - a problem of access to services",
        "80% - satisfactory coverage",
      ],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "Drop-out rate = (BCG doses - measles doses) / BCG doses x 100 = (9200 - 7360)/9200 x 100 = 1840/9200 x 100 = 20%. A drop-out rate above 10% indicates that children are starting but not completing the schedule, which is a problem of service quality - missed sessions, poor tracking of the due list, unfriendly session timings, or failure to counsel about the next visit. Low BCG coverage, by contrast, would indicate a problem of access or utilisation. The distinction between left-outs (never started, an access problem) and drop-outs (started but not completed, a quality problem) is the point of the calculation.",
    },
    {
      id: "preventive-immunisation-q3",
      stem: "Which of the following vaccines in the Universal Immunisation Programme is destroyed by freezing and must never be stored in a deep freezer?",
      options: ["Oral polio vaccine", "BCG", "Measles-rubella vaccine", "Pentavalent vaccine", "Live attenuated JE vaccine"],
      difficulty: "easy",
      answer: 3,
      explanation:
        "Pentavalent vaccine contains aluminium-adsorbed diphtheria, tetanus, pertussis and hepatitis B antigens; freezing dissociates the antigen from the adjuvant irreversibly and destroys potency while leaving the vial looking normal, which is why the shake test exists. Hepatitis B, Td, IPV, PCV and liquid rotavirus vaccine share this vulnerability. OPV is the most heat-sensitive vaccine and is the one that is legitimately kept in the deep freezer at the district level; BCG, measles-rubella and live JE vaccines are lyophilised and tolerate freezing, though they are damaged by heat and sunlight.",
    },
    {
      id: "preventive-immunisation-q4",
      stem: "Four children vaccinated from the same vial at an outreach session develop high fever and injection-site abscesses within 48 hours. How is this AEFI best classified, and what is the first action?",
      options: [
        "Coincidental event; reassure the families and continue the session",
        "Vaccine product related reaction; report within 30 days",
        "Immunisation error related reaction; suspend the vial and lot, report within 24 hours and investigate",
        "Immunisation anxiety related reaction; provide counselling",
        "Vaccine quality defect; the manufacturer must recall the batch before any report is made",
      ],
      difficulty: "moderate",
      answer: 2,
      explanation:
        "A cluster of abscesses traced to a single vial or session points to contamination or faulty reconstitution - an immunisation error, which is the commonest preventable AEFI category, and it constitutes a serious AEFI because it occurs as a cluster. The correct action is to stop using that vial and lot, retain and seal the remaining vials and diluents for investigation, report to the District Immunisation Officer within 24 hours, and begin investigation within 48 hours. Coincidence is untenable when several children from one vial are affected, anxiety-related events are immediate and do not cause abscesses, and a quality defect can only be established by the investigation and laboratory testing that reporting sets in motion.",
    },
    {
      id: "preventive-immunisation-q5",
      stem: "Measles has a basic reproduction number (R0) of about 16. What is the approximate herd immunity threshold?",
      options: ["60%", "75%", "84%", "94%", "99%"],
      difficulty: "moderate",
      answer: 3,
      explanation:
        "Herd immunity threshold = 1 - 1/R0 = 1 - 1/16 = 0.9375, that is about 94%. This is why measles is the first vaccine-preventable disease to reappear when coverage falls even slightly, and why the national target for measles-rubella coverage is above 95% with two doses. Polio, with an R0 of about 5-7, requires only 80-86%. Note that herd immunity requires human-to-human transmission with no non-human reservoir, so it does not apply to tetanus at all.",
    },
    {
      id: "preventive-immunisation-q6",
      stem: "A 6-year-old boy is bitten on the face by a stray dog, with a deep bleeding wound. He has never received rabies vaccine. Along with wound washing and vaccination, what else is essential?",
      options: [
        "Oral aciclovir for 7 days",
        "Human rabies immunoglobulin 20 IU/kg infiltrated into and around the wound on day 0",
        "Equine rabies immunoglobulin 20 IU/kg given intramuscularly in the gluteal region",
        "No immunoglobulin, since the intradermal vaccine schedule provides adequate cover",
        "Rabies immunoglobulin only if the dog dies within 10 days",
      ],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "A transdermal bleeding bite is a category III exposure, and on the face it is additionally high risk because of the short distance to the central nervous system; human rabies immunoglobulin 20 IU/kg (equine 40 IU/kg) must be infiltrated into and around all wounds on day 0, alongside the vaccine course. The dose for equine RIG is 40 IU/kg, not 20, and immunoglobulin works locally by neutralising virus at the inoculation site, so gluteal injection instead of wound infiltration is a serious error. Waiting to see what happens to the dog wastes the only window in which immunoglobulin is useful, and there is no antiviral treatment for rabies.",
    },
    {
      id: "preventive-immunisation-q7",
      stem: "A child received BCG, OPV-0 and hepatitis B at birth and pentavalent-1 at 6 weeks, but then defaulted and is brought back at 11 months of age. What is the correct approach?",
      options: [
        "Restart the entire primary schedule from the beginning",
        "Give only measles-rubella now and abandon the pentavalent series",
        "Resume the schedule from where it stopped, giving the due doses at minimum intervals along with the age-appropriate vaccines",
        "Give a single dose of each remaining vaccine and consider the child fully immunised",
        "Defer all vaccination until the child is 12 months old and then start afresh",
      ],
      difficulty: "easy",
      answer: 2,
      explanation:
        "An interrupted immunisation schedule is never restarted - immunological memory persists, so the remaining doses are simply given from the point of interruption at the minimum interval of four weeks between doses of the same vaccine, together with the vaccines now due for age such as measles-rubella and vitamin A. Restarting wastes vaccine, wastes visits and needlessly delays protection. Abandoning the pentavalent series would leave the child unprotected against diphtheria, pertussis, tetanus, hepatitis B and Hib, and single arbitrary doses do not confer the protection the primary series is designed to give.",
    },
  ],
  cards: [
    {
      id: "preventive-immunisation-c1",
      front: "The 12 diseases covered by the UIP.",
      back: "Tuberculosis, diphtheria, pertussis, tetanus, polio, hepatitis B, Hib, measles, rubella, rotavirus diarrhoea, pneumococcal disease, and Japanese encephalitis in endemic districts.",
    },
    {
      id: "preventive-immunisation-c2",
      front: "Vaccines given at birth, and their route.",
      back: "BCG 0.05 mL intradermal left upper arm, OPV zero dose 2 drops oral, hepatitis B birth dose 0.5 mL intramuscular thigh within 24 hours.",
    },
    {
      id: "preventive-immunisation-c3",
      front: "When is fractional IPV given, and how?",
      back: "At 6 and 14 weeks; 0.1 mL intradermal in the right upper arm.",
    },
    {
      id: "preventive-immunisation-c4",
      front: "Vitamin A prophylaxis schedule.",
      back: "1 lakh IU at 9 months with MR-1, then 2 lakh IU every 6 months up to 5 years - 9 doses in all.",
    },
    {
      id: "preventive-immunisation-c5",
      front: "Cold chain storage temperatures.",
      back: "ILR and vaccine carrier +2 to +8 degrees Celsius; deep freezer -15 to -25 degrees Celsius for OPV and ice packs.",
    },
    {
      id: "preventive-immunisation-c6",
      front: "Which vaccines must never be frozen?",
      back: "Hepatitis B, pentavalent, PCV, IPV, Td and liquid rotavirus vaccine - all aluminium-adsorbed or freeze-sensitive. Use the shake test if freezing is suspected.",
    },
    {
      id: "preventive-immunisation-c7",
      front: "VVM stages: use or discard?",
      back: "Stage 1 and 2 (inner square lighter than the outer circle) - use. Stage 3 and 4 (square matches or is darker) - discard. VVM records heat only.",
    },
    {
      id: "preventive-immunisation-c8",
      front: "Open vial policy - which vaccines and how long?",
      back: "28 days for OPV, hepatitis B, pentavalent, Td, fIPV and liquid rotavirus. Never for BCG, MR or JE, which are discarded 4 hours after reconstitution.",
    },
    {
      id: "preventive-immunisation-c9",
      front: "The five cause-specific AEFI categories.",
      back: "Vaccine product related, vaccine quality defect related, immunisation error related, immunisation anxiety related, coincidental.",
    },
    {
      id: "preventive-immunisation-c10",
      front: "Adrenaline dose for post-vaccination anaphylaxis.",
      back: "Adrenaline 1:1000, 0.01 mL/kg intramuscularly into the anterolateral thigh, maximum 0.5 mL, repeated every 5-15 minutes; observe every vaccinee for 30 minutes.",
    },
    {
      id: "preventive-immunisation-c11",
      front: "Herd immunity threshold formula and the measles figure.",
      back: "1 - 1/R0. Measles (R0 12-18) needs about 92-95% coverage; tetanus has no herd immunity because there is no person-to-person spread.",
    },
    {
      id: "preventive-immunisation-c12",
      front: "Rabies category III - what three things are required?",
      back: "Wash with soap and running water for 15 minutes, full vaccine course, and rabies immunoglobulin (human 20 IU/kg, equine 40 IU/kg) infiltrated into and around the wound on day 0.",
    },
  ],
  references: [
    "Universal Immunisation Programme, National Immunisation Schedule, MoHFW, India - Immunisation Handbook for Medical Officers, 2023 revision",
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - immunity and immunisation, cold chain",
    "AEFI Surveillance and Response Operational Guidelines, MoHFW, 2015 with WHO causality assessment 2019 update",
    "WHO Expert Consultation on Rabies, Third Report, Technical Report Series 1012, 2018",
    "NFHS-5 (2019-21) - full immunisation coverage of children aged 12-23 months",
    "Indian Academy of Pediatrics Advisory Committee on Vaccines and Immunization Practices recommended schedule, 2023-24",
  ],
});

topics.push({
  id: "preventive-biostatistics",
  title: "Biostatistics for the paper: test performance, risk measures and significance",
  oneLiner:
    "The examinable core of biostatistics is a 2x2 table - from which sensitivity, specificity, predictive values and likelihood ratios are read off - together with the risk measures (relative risk, absolute risk reduction, number needed to treat, odds ratio) and the interpretation of p values, confidence intervals and the choice of statistical test.",
  frequency: "core",
  keywords: [
    "sensitivity",
    "specificity",
    "positive predictive value",
    "negative predictive value",
    "likelihood ratio",
    "pre-test probability",
    "number needed to treat",
    "NNT",
    "relative risk",
    "absolute risk reduction",
    "odds ratio",
    "p value",
    "confidence interval",
    "type I error",
    "type II error",
    "power",
    "sample size",
    "chi-square",
    "t test",
    "ANOVA",
    "standard deviation",
    "standard error",
    "normal distribution",
    "Youden index",
  ],
  sections: [
    {
      heading: "The 2x2 table and the indices that come out of it",
      points: [
        "Lay the table out the same way every time: **disease present and disease absent across the top, test positive and test negative down the side**, giving cells a (true positive), b (false positive), c (false negative) and d (true negative).",
        "**Sensitivity = a/(a+c)** - the proportion of those with disease who test positive; it is a property of the test and is read down the disease-present column. A highly sensitive test, when negative, rules disease out (**SnNout**).",
        "**Specificity = d/(b+d)** - the proportion of those without disease who test negative, read down the disease-absent column. A highly specific test, when positive, rules disease in (**SpPin**).",
        "**Positive predictive value = a/(a+b)** and **negative predictive value = d/(c+d)** are read across the rows; unlike sensitivity and specificity they depend heavily on **prevalence**, which is why a test performs differently at a screening camp and in a specialist clinic.",
        "**Accuracy = (a+d)/(a+b+c+d)**; **false positive rate = 1 - specificity**; **false negative rate = 1 - sensitivity**; **Youden's index = sensitivity + specificity - 1**, used to choose the best cut-off on a ROC curve.",
        "**Likelihood ratios are prevalence-independent** and are the most useful bedside numbers: **LR+ = sensitivity / (1 - specificity)** and **LR- = (1 - sensitivity) / specificity**. An LR+ above 10 or an LR- below 0.1 produces a large and usually conclusive change in probability; between 0.5 and 2 the test is nearly useless.",
        "Because raising the cut-off of a continuous test raises specificity and lowers sensitivity, **there is always a trade-off**; the ROC curve plots sensitivity against 1 - specificity and the area under it summarises overall discrimination (0.5 = useless, above 0.8 = good).",
      ],
    },
    {
      heading: "Risk measures and how to speak about benefit honestly",
      points: [
        "**Incidence in the exposed (Ie) and unexposed (Iu)** are the raw material of a cohort study. **Relative risk = Ie / Iu** answers how many times more likely the outcome is in the exposed - it measures the strength of an association.",
        "**Attributable risk (risk difference) = Ie - Iu** and **attributable risk per cent = (Ie - Iu)/Ie x 100** answer how much of the disease in the exposed is due to the exposure - the measure of public health impact.",
        "**Population attributable risk = incidence in the total population minus incidence in the unexposed**, and it depends on how common the exposure is; a weak risk factor that is very common (such as a mildly raised blood pressure) can carry a larger population attributable risk than a strong but rare one.",
        "In a trial, **absolute risk reduction (ARR) = control event rate - experimental event rate**, **relative risk reduction (RRR) = ARR / control event rate**, and **number needed to treat = 1 / ARR** (always round up to the next whole patient and always state the duration of follow-up).",
        "**Number needed to harm = 1 / absolute risk increase.** Quoting a relative risk reduction without the absolute figures is the standard way that marginal benefit is made to look impressive - the examiner rewards a candidate who insists on both.",
        "**Odds ratio = (a x d) / (b x c)** is the measure of choice in a case-control study, where incidence cannot be calculated; it approximates the relative risk closely when the disease is rare (below about 10%) but exaggerates it when the outcome is common.",
      ],
    },
    {
      heading: "Describing data: central tendency, dispersion and distribution",
      points: [
        "**Types of data:** qualitative (nominal - blood group; ordinal - pain grade) and quantitative (discrete - number of children; continuous - blood pressure). The type of data decides the summary statistic and the statistical test, which is why every data question begins here.",
        "**Mean** uses every value and is best for symmetrical data; the **median** is the middle value and is preferred for skewed data such as income, hospital stay or parasite counts; the **mode** is the commonest value and the only measure usable for nominal data.",
        "**Standard deviation** measures the scatter of individual observations. In a **normal distribution, mean +/- 1 SD contains about 68%, mean +/- 2 SD about 95%, and mean +/- 3 SD about 99.7%** of observations - the single most useful fact in descriptive statistics.",
        "**Coefficient of variation = (SD / mean) x 100** allows comparison of variability between variables measured in different units.",
        "**Standard error of the mean = SD / square root of n** measures the precision of the sample mean as an estimate of the population mean; it shrinks as the sample grows, whereas the standard deviation does not.",
        "**95% confidence interval for a mean = mean +/- 1.96 x standard error.** The correct interpretation is that the interval, from a procedure repeated many times, would contain the true population value on 95% of occasions - and a confidence interval is more informative than a p value because it shows the size and precision of the effect.",
      ],
    },
    {
      heading: "Hypothesis testing, p values and errors",
      points: [
        "The **null hypothesis** states there is no difference; the **p value is the probability of obtaining a result at least as extreme as the observed one if the null hypothesis were true**. It is not the probability that the null hypothesis is true, and it says nothing about the size of the effect.",
        "**p less than 0.05 is conventional, not sacred.** With a very large sample a clinically trivial difference becomes statistically significant, and with a small sample an important difference may not reach significance.",
        "**Type I error (alpha)** is rejecting a true null hypothesis - claiming a difference that does not exist; it is set by the significance level, conventionally 0.05. **Type II error (beta)** is failing to detect a real difference, conventionally set at 0.10-0.20.",
        "**Power = 1 - beta**, the probability of detecting a difference of a specified size if it exists; studies are usually designed for 80% or 90% power. Power rises with sample size, with a larger effect size and with smaller variance.",
        "**A confidence interval that includes the null value** - 1 for a ratio measure such as RR or OR, 0 for a difference such as ARR or a mean difference - corresponds to a non-significant result at that alpha level.",
        "A simple sample size formula worth remembering for a prevalence survey is **n = 4pq / L squared** for 95% confidence, where p is the anticipated prevalence, q = 100 - p and L is the absolute precision, all in percentage terms; add 10-15% for non-response and multiply by the design effect for cluster sampling.",
      ],
    },
    {
      heading: "Choosing the right statistical test",
      points: [
        "**Two independent groups, continuous normally distributed outcome:** unpaired (independent samples) **t test**. The non-parametric alternative when the data are skewed or ordinal is the **Mann-Whitney U test**.",
        "**Two paired measurements** (before and after in the same patients): **paired t test**, with the **Wilcoxon signed-rank test** as the non-parametric alternative.",
        "**Three or more independent groups, continuous outcome:** **one-way ANOVA**, followed by a post-hoc test; the non-parametric equivalent is the **Kruskal-Wallis test**.",
        "**Categorical outcome in two or more groups:** **chi-square test**, with **Fisher's exact test** when any expected cell count is less than 5, and **McNemar's test** for paired categorical data such as before-and-after knowledge.",
        "**Association between two continuous variables:** **Pearson correlation** for normally distributed data (**Spearman rank correlation** if not), and **linear regression** to predict one from the other. Use **logistic regression** for a binary outcome and **Cox proportional hazards regression** for time-to-event data.",
        "Correlation is not causation and **the correlation coefficient r ranges from -1 to +1**; r squared gives the proportion of variance explained. Survival data are described by the **Kaplan-Meier curve** and compared with the **log-rank test**.",
      ],
    },
    {
      heading: "Reading a paper: bias, confounding and the numbers that matter",
      points: [
        "**Bias** is a systematic error that distorts the result and cannot be corrected by increasing the sample size; **selection bias** arises from how participants are chosen, **information (measurement) bias** from how data are collected, and **recall bias** is the classic information bias of case-control studies.",
        "**Confounding** occurs when a third factor is associated with both the exposure and the outcome and is not on the causal pathway - smoking confounds the association between alcohol and lung cancer. It is dealt with at design stage by randomisation, restriction or matching, and at analysis stage by stratification or multivariable adjustment.",
        "**Effect modification (interaction)** is different from confounding: the effect of an exposure genuinely differs across strata of a third variable, and it is reported rather than adjusted away.",
        "**Bradford Hill's viewpoints (1965)** on causation - strength, consistency, specificity, temporality, biological gradient, plausibility, coherence, experiment and analogy - with **temporality the only one that is absolutely required**.",
        "For a critical appraisal answer, work through PICO, the study design, sample size and power, the handling of confounding, whether the analysis was by intention to treat, and whether the effect is reported as both relative and absolute measures with confidence intervals.",
        "**Intention-to-treat analysis** preserves the benefit of randomisation and gives the more conservative and clinically realistic estimate; per-protocol analysis flatters the intervention by dropping non-adherent participants.",
      ],
    },
  ],
  tables: [
    {
      heading: "The standard 2x2 table for a diagnostic test",
      columns: ["", "Disease present", "Disease absent", "Row total"],
      rows: [
        ["Test positive", "a (true positive)", "b (false positive)", "a + b (PPV = a/(a+b))"],
        ["Test negative", "c (false negative)", "d (true negative)", "c + d (NPV = d/(c+d))"],
        ["Column total", "a + c (sensitivity = a/(a+c))", "b + d (specificity = d/(b+d))", "a + b + c + d"],
      ],
    },
    {
      heading: "Risk and effect measures with their formulae",
      columns: ["Measure", "Formula", "Used in", "Interpretation"],
      rows: [
        ["Relative risk", "Ie / Iu", "Cohort study, RCT", "Strength of association; 1 means no effect"],
        ["Attributable risk", "Ie - Iu", "Cohort study", "Excess risk in the exposed attributable to the exposure"],
        ["Population attributable risk", "I(population) - Iu", "Cohort, public health planning", "Burden removable if the exposure were eliminated"],
        ["Odds ratio", "(a x d) / (b x c)", "Case-control study", "Approximates RR when disease is rare"],
        ["Absolute risk reduction", "CER - EER", "RCT", "Actual benefit in the trial population"],
        ["Relative risk reduction", "(CER - EER) / CER", "RCT", "Proportional benefit; always quote with ARR"],
        ["Number needed to treat", "1 / ARR", "RCT", "Patients treated for the stated duration to prevent one event"],
        ["Likelihood ratio positive", "Sensitivity / (1 - specificity)", "Diagnostic test", "Above 10 is a large, usually conclusive change in probability"],
      ],
    },
    {
      heading: "Choosing a statistical test",
      columns: ["Outcome data", "Two independent groups", "Two paired groups", "Three or more groups"],
      rows: [
        ["Continuous, normal", "Unpaired t test", "Paired t test", "One-way ANOVA"],
        ["Continuous, skewed or ordinal", "Mann-Whitney U", "Wilcoxon signed-rank", "Kruskal-Wallis"],
        ["Categorical (proportions)", "Chi-square (Fisher's exact if expected cell under 5)", "McNemar's test", "Chi-square for r x c table"],
        ["Time to event", "Log-rank test on Kaplan-Meier curves", "Not applicable", "Log-rank across strata; Cox regression"],
      ],
    },
  ],
  redFlags: [
    "A screening or diagnostic claim quoted without prevalence - predictive values are meaningless without it, and a good test in a specialist clinic can be useless in the community.",
    "A trial reporting only relative risk reduction - insist on the absolute risk reduction and the number needed to treat before changing practice.",
    "A statistically significant result from a very large study with a trivial effect size, or a non-significant result from an underpowered study reported as proof of no difference - absence of evidence is not evidence of absence.",
    "An odds ratio interpreted as a relative risk when the outcome is common (above about 10%) - it overstates the effect substantially.",
    "Per-protocol analysis presented as the primary result of a randomised trial, or a trial with heavy differential loss to follow-up - randomisation has been undone.",
    "A subgroup finding that was not pre-specified, presented as a main conclusion - with enough subgroups something always reaches p less than 0.05.",
  ],
  pearls: [
    "SnNout and SpPin: a Sensitive test when Negative rules out; a Specific test when Positive rules in.",
    "Sensitivity and specificity belong to the test; predictive values belong to the population. Likelihood ratios belong to the test and are the ones to use at the bedside.",
    "Number needed to treat is 1 divided by the absolute risk reduction, always rounded up, and always quoted with the duration of follow-up.",
    "Use the odds ratio in a case-control study because incidence cannot be measured there; use relative risk in a cohort study or a trial because it can.",
    "Mean +/- 2 SD covers about 95% of individuals in a normal distribution; mean +/- 1.96 standard errors gives the 95% confidence interval for the mean. Confusing SD with SE is the commonest statistical error in a thesis.",
    "A confidence interval that crosses 1 for a ratio, or 0 for a difference, is a non-significant result - and it tells you the size of the effect as well, which the p value never does.",
    "The only Bradford Hill criterion that is essential is temporality: the cause must precede the effect.",
    "For a prevalence survey, n = 4pq / L squared with p and L in percentages - then add for non-response and multiply by the design effect if sampling is by cluster.",
  ],
  theory: [
    {
      id: "preventive-biostatistics-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Define sensitivity, specificity, positive and negative predictive value and likelihood ratio. A new rapid test for dengue was evaluated in 500 patients against the reference standard; 90 of the 100 patients with confirmed dengue tested positive, and 40 of the 400 without dengue also tested positive. Calculate all the indices and discuss their interpretation.",
      openingLines: [
        "The validity of a diagnostic test is measured against a reference (gold) standard and is expressed as sensitivity and specificity, which are properties of the test, and as predictive values, which additionally depend on the prevalence of disease in the population tested.",
        "All of these are derived from a single 2x2 table with disease status across the top and test result down the side.",
      ],
      answer: [
        {
          heading: "1. The 2x2 table for this data",
          points: [
            "Disease present 100, disease absent 400, total 500.",
            "True positives a = 90; false negatives c = 100 - 90 = 10.",
            "False positives b = 40; true negatives d = 400 - 40 = 360.",
            "Test positive total = 130; test negative total = 370.",
          ],
        },
        {
          heading: "2. Calculations",
          points: [
            "Sensitivity = a/(a+c) = 90/100 = 90%.",
            "Specificity = d/(b+d) = 360/400 = 90%.",
            "Positive predictive value = a/(a+b) = 90/130 = 69.2%.",
            "Negative predictive value = d/(c+d) = 360/370 = 97.3%.",
            "Accuracy = (a+d)/500 = 450/500 = 90%. Youden's index = 0.90 + 0.90 - 1 = 0.80.",
            "Likelihood ratio positive = sensitivity/(1 - specificity) = 0.90/0.10 = 9. Likelihood ratio negative = (1 - sensitivity)/specificity = 0.10/0.90 = 0.11.",
          ],
        },
        {
          heading: "3. Interpretation of each index",
          points: [
            "Sensitivity 90% means the test misses 1 in 10 true cases, which matters in an outbreak where a missed case continues transmission and is not treated.",
            "Specificity 90% means 10% of healthy people are falsely labelled, generating unnecessary admissions and anxiety, and consuming platelet transfusions and beds during an epidemic.",
            "The positive predictive value of 69.2% applies only at this prevalence of 20%; in a community survey where prevalence might be 2%, the same test would have a positive predictive value of only about 15.5%, while the negative predictive value would rise above 99%.",
            "The likelihood ratio positive of 9 produces a large increase in the probability of disease and is prevalence-independent, which is why likelihood ratios travel better between settings than predictive values.",
          ],
        },
        {
          heading: "4. Choosing a cut-off and the trade-off",
          points: [
            "Raising the cut-off of a continuous test increases specificity and reduces sensitivity, and vice versa; the ROC curve plots sensitivity against 1 - specificity across all cut-offs and the area under the curve summarises discrimination.",
            "Prefer high sensitivity when missing a case is dangerous and treatment is available and safe - screening for HIV, tuberculosis or congenital hypothyroidism.",
            "Prefer high specificity when the confirmatory test or the treatment is hazardous, costly or stigmatising.",
            "Two-stage (sequential) testing - a sensitive test first, a specific test second - retains sensitivity while improving the predictive value of the programme, which is exactly how HIV and tuberculosis testing are organised in India.",
          ],
        },
        {
          heading: "5. Reliability and its assessment",
          points: [
            "Validity is about being right; reliability is about being repeatable, and a test can be highly reliable yet consistently wrong.",
            "Reliability is assessed by test-retest agreement, inter-observer agreement measured by Cohen's kappa (above 0.8 excellent, 0.6-0.8 substantial, below 0.4 poor), and internal consistency for questionnaires.",
            "Sources of variation are observer variation (inter- and intra-observer), biological variation in the subject, and variation in the instrument or reagent.",
          ],
        },
      ],
      mustDraw: [
        "The labelled 2x2 table with the numbers filled in and the formula written beside each margin.",
        "A ROC curve with sensitivity on the y axis and 1 - specificity on the x axis, marking the diagonal line of no discrimination.",
      ],
      markSplit: [
        { part: "Definitions of the five indices", marks: 2.5 },
        { part: "Correct 2x2 table with the data placed accurately", marks: 1.5 },
        { part: "Calculations shown with working", marks: 3 },
        { part: "Interpretation including the effect of prevalence", marks: 2 },
        { part: "Reliability and observer variation", marks: 1 },
      ],
      keywords: ["sensitivity", "specificity", "predictive value", "likelihood ratio", "ROC curve", "kappa"],
    },
    {
      id: "preventive-biostatistics-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question:
        "Write short notes on the interpretation of p value, confidence interval, and the number needed to treat, with an example from a clinical trial.",
      openingLines: [
        "The p value tests whether an observed difference could plausibly have arisen by chance, the confidence interval expresses the size and precision of that difference, and the number needed to treat translates it into the clinical currency of patients treated per event prevented.",
        "A complete report of a trial result requires all three, because a p value alone conveys neither the magnitude nor the clinical importance of the finding.",
      ],
      answer: [
        {
          heading: "p value",
          points: [
            "The probability of obtaining a result at least as extreme as that observed if the null hypothesis of no difference were true.",
            "It is not the probability that the null hypothesis is true, nor the probability that the finding is due to chance in any everyday sense, and it does not measure effect size.",
            "The conventional threshold of 0.05 corresponds to a type I error rate of 5%; multiple comparisons inflate this, so unplanned subgroup analyses must be interpreted with great caution.",
            "A large sample can make a clinically meaningless difference statistically significant; a small sample can leave an important difference statistically non-significant, which is why power matters.",
          ],
        },
        {
          heading: "Confidence interval",
          points: [
            "A 95% confidence interval is the range that would contain the true population value on 95% of occasions if the study were repeated indefinitely with the same method.",
            "For a mean it is mean +/- 1.96 x standard error; it narrows as sample size grows and as variability falls.",
            "An interval that includes the null value - 1 for a ratio, 0 for a difference - indicates a non-significant result, but the interval also shows whether the data are compatible with a clinically important effect.",
            "Confidence intervals are preferred to p values in modern reporting because they carry information about magnitude and precision together.",
          ],
        },
        {
          heading: "Number needed to treat, with a worked example",
          points: [
            "A trial of a drug for 5 years finds that 10% of the control group and 8% of the treatment group have a stroke.",
            "Absolute risk reduction = 10% - 8% = 2%, that is 0.02. Relative risk = 0.08/0.10 = 0.8, so the relative risk reduction is 20% - impressive-sounding but resting on a 2 percentage point difference.",
            "Number needed to treat = 1/ARR = 1/0.02 = 50 patients treated for 5 years to prevent one stroke.",
            "Number needed to harm is calculated the same way from the absolute increase in an adverse outcome, and the two are set against each other in shared decision-making.",
            "Always report the duration and the baseline risk with an NNT, because the same relative effect gives a very different NNT in high-risk and low-risk patients.",
          ],
        },
      ],
      mustDraw: ["A worked calculation showing CER, EER, ARR, RRR and NNT with the arithmetic visible."],
      markSplit: [
        { part: "p value - correct definition and common misinterpretations", marks: 1.5 },
        { part: "Confidence interval - definition, formula and relation to significance", marks: 1.5 },
        { part: "NNT with a fully worked example", marks: 2 },
      ],
      keywords: ["p value", "confidence interval", "type I error", "number needed to treat", "absolute risk reduction"],
    },
    {
      id: "preventive-biostatistics-t3",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Differentiate between relative risk and odds ratio. When is each used, and what are the pitfalls?",
      openingLines: [
        "Both relative risk and odds ratio are ratio measures of association between an exposure and an outcome, but they are calculated from different quantities and belong to different study designs.",
        "Relative risk compares risks (incidences) and requires that incidence be measurable; the odds ratio compares odds and can be calculated when it cannot.",
      ],
      answer: [
        {
          heading: "Definitions and calculation",
          points: [
            "Relative risk = incidence in the exposed divided by incidence in the unexposed; it requires a denominator of people followed over time, so it is calculated in cohort studies and randomised trials.",
            "Odds ratio = odds of exposure among cases divided by odds of exposure among controls = (a x d)/(b x c) from the standard 2x2 table.",
            "In a case-control study the investigator fixes the number of cases and controls, so incidence and therefore relative risk cannot be calculated - hence the odds ratio.",
          ],
        },
        {
          heading: "Relationship and pitfalls",
          points: [
            "When the outcome is rare (below about 10%), the odds ratio closely approximates the relative risk - the rare disease assumption.",
            "When the outcome is common the odds ratio exaggerates the relative risk substantially: a risk of 50% versus 25% is a relative risk of 2 but an odds ratio of 3.",
            "Reporting an odds ratio from a cross-sectional survey of a common condition as though it were a relative risk is a frequent error in Indian dissertations.",
            "Both are interpreted against a null value of 1; a confidence interval that includes 1 indicates no significant association.",
          ],
        },
        {
          heading: "Choosing between them",
          points: [
            "Cohort study or randomised trial with follow-up - relative risk (or hazard ratio for time-to-event data), together with the absolute risk difference.",
            "Case-control study or logistic regression output - odds ratio, adjusted for confounders.",
            "For public health decisions neither is sufficient alone: attributable risk and population attributable risk say how much disease would actually be prevented.",
          ],
        },
      ],
      mustDraw: ["A 2x2 table showing which cells give RR and which give OR, with both formulae written out."],
      markSplit: [
        { part: "Definitions and formulae", marks: 2 },
        { part: "Study designs in which each is used", marks: 1.5 },
        { part: "Rare disease assumption and pitfalls", marks: 1.5 },
      ],
      keywords: ["relative risk", "odds ratio", "rare disease assumption", "case-control", "cohort"],
    },
  ],
  mcqs: [
    {
      id: "preventive-biostatistics-q1",
      stem: "In a randomised trial, 12% of patients on placebo and 8% of patients on the study drug had a myocardial infarction over 3 years. What is the number needed to treat for 3 years to prevent one infarction?",
      options: ["4", "12", "25", "33", "50"],
      difficulty: "moderate",
      answer: 2,
      explanation:
        "Absolute risk reduction = 12% - 8% = 4% = 0.04, and NNT = 1/ARR = 1/0.04 = 25 patients treated for 3 years to prevent one myocardial infarction. Choosing 4 confuses the percentage point difference with the NNT itself, and 33 comes from 1/0.03. Note that the relative risk reduction here is 4/12 = 33%, which sounds far more impressive than the true absolute benefit - which is precisely why NNT should be quoted, always with its time horizon.",
    },
    {
      id: "preventive-biostatistics-q2",
      stem: "A case-control study of oral cancer finds that 180 of 200 cases and 100 of 200 controls used smokeless tobacco. What is the odds ratio?",
      options: ["1.8", "4.5", "9.0", "18.0", "0.11"],
      difficulty: "moderate",
      answer: 2,
      explanation:
        "Build the 2x2 table: exposed cases a = 180, unexposed cases c = 20, exposed controls b = 100, unexposed controls d = 100. Odds ratio = (a x d)/(b x c) = (180 x 100)/(100 x 20) = 18000/2000 = 9.0. The value 1.8 is the ratio of exposure proportions (90%/50%), not the odds ratio, and 4.5 comes from mis-assigning a cell. An odds ratio of 9 means the odds of smokeless tobacco use are nine times higher among cases, and because oral cancer is rare this approximates a ninefold relative risk.",
    },
    {
      id: "preventive-biostatistics-q3",
      stem: "A test has a sensitivity of 80% and a specificity of 95%. What is the positive likelihood ratio, and how should it be interpreted?",
      options: [
        "0.21 - the test is useless",
        "4.0 - a moderate increase in the probability of disease",
        "16.0 - a large and usually conclusive increase in the probability of disease",
        "0.84 - a small decrease in the probability of disease",
        "1.19 - no useful change in probability",
      ],
      difficulty: "moderate",
      answer: 2,
      explanation:
        "LR+ = sensitivity/(1 - specificity) = 0.80/0.05 = 16. A positive likelihood ratio above 10 produces a large and usually conclusive increase in post-test probability, so a positive result here is highly informative. The value 0.21 is the negative likelihood ratio, (1 - 0.80)/0.95, which corresponds to a moderate decrease in probability when the test is negative. Likelihood ratios are the preferred bedside measure because, unlike predictive values, they do not change with prevalence - only the starting probability does.",
    },
    {
      id: "preventive-biostatistics-q4",
      stem: "A researcher wishes to estimate the prevalence of anaemia in adolescent girls in a district, expecting a prevalence of about 60%, with an absolute precision of 5% and 95% confidence. Using n = 4pq/L squared, what is the required sample size before adjusting for non-response?",
      options: ["96", "245", "384", "400", "600"],
      difficulty: "hard",
      answer: 2,
      explanation:
        "n = 4pq/L squared, with p = 60, q = 100 - 60 = 40 and L = 5, gives n = (4 x 60 x 40)/25 = 9600/25 = 384. This is the familiar figure of 384 that appears whenever p is close to 50% and precision is 5%. The value 400 comes from using p = 50 and rounding, and 96 comes from forgetting to square the precision. In practice add 10-15% for non-response, and multiply by the design effect - usually taken as 2 - if a 30-cluster sampling design is used, which would take this study to roughly 850 girls.",
    },
    {
      id: "preventive-biostatistics-q5",
      stem: "A study compares mean haemoglobin between three groups of pregnant women receiving different iron formulations. The data are normally distributed. Which is the appropriate statistical test?",
      options: ["Paired t test", "Chi-square test", "One-way ANOVA", "Mann-Whitney U test", "McNemar's test"],
      difficulty: "easy",
      answer: 2,
      explanation:
        "Three or more independent groups compared on a continuous, normally distributed outcome require one-way analysis of variance, followed by a post-hoc test such as Tukey's to identify which pairs differ. A paired t test is for two related measurements in the same subjects, and repeated unpaired t tests across three groups inflate the type I error rate. Chi-square and McNemar's tests are for categorical data, and the Mann-Whitney U test is the non-parametric equivalent of the unpaired t test for two groups only - its three-group counterpart is the Kruskal-Wallis test.",
    },
    {
      id: "preventive-biostatistics-q6",
      stem: "A trial reports a relative risk of death of 0.85 with a 95% confidence interval of 0.68 to 1.06. What is the correct interpretation?",
      options: [
        "There is a statistically significant 15% reduction in mortality",
        "The result is not statistically significant at the 5% level, and the data are compatible with anything from a 32% reduction to a 6% increase in mortality",
        "The null hypothesis has been proved true",
        "The study shows the treatment is harmful",
        "The p value must be less than 0.05",
      ],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "The confidence interval includes the null value of 1, so the result is not statistically significant at the 5% level, and the corresponding p value is above 0.05. However, the interval also shows that the data remain compatible with a substantial 32% mortality reduction, so this is an inconclusive result and not proof of no effect - a distinction the confidence interval makes and the p value alone would obscure. Failing to reject a null hypothesis never proves it true, and nothing here supports a claim of harm.",
    },
    {
      id: "preventive-biostatistics-q7",
      stem: "A district has a mean birth weight of 2,900 g with a standard deviation of 400 g, normally distributed. Approximately what proportion of babies weigh between 2,100 g and 3,700 g?",
      options: ["50%", "68%", "95%", "99.7%", "It cannot be determined"],
      difficulty: "easy",
      answer: 2,
      explanation:
        "2,100 g and 3,700 g are exactly two standard deviations below and above the mean (2,900 +/- 800), and in a normal distribution mean +/- 2 SD contains about 95% of observations. Mean +/- 1 SD would be 2,500 to 3,300 g and would contain about 68%, while mean +/- 3 SD contains about 99.7%. Note this describes the spread of individual babies and uses the standard deviation; the standard error, which is SD divided by the square root of n, would instead describe the precision of the estimated mean.",
    },
    {
      id: "preventive-biostatistics-q8",
      stem: "In a cohort study, the incidence of lung cancer is 90 per 100,000 per year in smokers and 10 per 100,000 per year in non-smokers. What is the attributable risk per cent in the exposed?",
      options: ["9%", "11%", "80%", "88.9%", "90%"],
      difficulty: "hard",
      answer: 3,
      explanation:
        "Attributable risk = 90 - 10 = 80 per 100,000 per year, and attributable risk per cent = (Ie - Iu)/Ie x 100 = 80/90 x 100 = 88.9%. This means that about 89% of lung cancer occurring in smokers is attributable to smoking and would be prevented if they had never smoked. The value 9 is the relative risk (90/10), not a percentage, and 80% would be the answer only if the denominator were mistakenly taken as 100. Attributable risk per cent measures the impact of removing an exposure in the exposed group, whereas population attributable risk additionally accounts for how common the exposure is.",
    },
  ],
  cards: [
    {
      id: "preventive-biostatistics-c1",
      front: "Sensitivity and specificity formulae from the 2x2 table.",
      back: "Sensitivity = a/(a+c) - read down the disease-present column. Specificity = d/(b+d) - read down the disease-absent column. Both are test properties, independent of prevalence.",
    },
    {
      id: "preventive-biostatistics-c2",
      front: "SnNout and SpPin.",
      back: "A highly Sensitive test that is Negative rules disease Out; a highly Specific test that is Positive rules disease In.",
    },
    {
      id: "preventive-biostatistics-c3",
      front: "Likelihood ratio formulae and what counts as useful.",
      back: "LR+ = sens/(1 - spec); LR- = (1 - sens)/spec. LR+ above 10 or LR- below 0.1 is a large, usually conclusive shift; 0.5 to 2 is nearly useless.",
    },
    {
      id: "preventive-biostatistics-c4",
      front: "Number needed to treat.",
      back: "NNT = 1 / absolute risk reduction, rounded up, quoted with the duration of follow-up. NNH = 1 / absolute risk increase.",
    },
    {
      id: "preventive-biostatistics-c5",
      front: "Odds ratio formula and when it approximates relative risk.",
      back: "OR = (a x d)/(b x c). It approximates the relative risk when the outcome is rare (below about 10%) and exaggerates it when common.",
    },
    {
      id: "preventive-biostatistics-c6",
      front: "Attributable risk and attributable risk per cent.",
      back: "AR = Ie - Iu (excess risk from the exposure). AR% = (Ie - Iu)/Ie x 100 - the proportion of disease in the exposed due to the exposure.",
    },
    {
      id: "preventive-biostatistics-c7",
      front: "What exactly does a p value mean?",
      back: "The probability of a result at least as extreme as that observed if the null hypothesis were true. It is not the probability the null hypothesis is true, and it says nothing about effect size.",
    },
    {
      id: "preventive-biostatistics-c8",
      front: "Type I error, type II error and power.",
      back: "Type I (alpha) - claiming a difference that does not exist, conventionally 0.05. Type II (beta) - missing a real difference. Power = 1 - beta, usually set at 80-90%.",
    },
    {
      id: "preventive-biostatistics-c9",
      front: "Standard deviation versus standard error.",
      back: "SD describes the scatter of individuals; SE = SD/square root of n describes the precision of the mean. 95% CI for a mean = mean +/- 1.96 SE.",
    },
    {
      id: "preventive-biostatistics-c10",
      front: "Sample size for a prevalence survey.",
      back: "n = 4pq / L squared (p, q and L in percentages, 95% confidence). Add 10-15% for non-response and multiply by the design effect for cluster sampling.",
    },
    {
      id: "preventive-biostatistics-c11",
      front: "Which test: two independent groups, skewed continuous data?",
      back: "Mann-Whitney U test. Paired equivalent is Wilcoxon signed-rank; three or more groups is Kruskal-Wallis.",
    },
    {
      id: "preventive-biostatistics-c12",
      front: "Bradford Hill: which criterion is indispensable?",
      back: "Temporality - the exposure must precede the outcome. The other eight (strength, consistency, specificity, biological gradient, plausibility, coherence, experiment, analogy) support but never replace it.",
    },
  ],
  references: [
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - screening, epidemiological methods and health information",
    "Mahajan's Methods in Biostatistics for Medical Students and Research Workers, 9th edition, 2018",
    "Bradford Hill AB. The environment and disease: association or causation? Proceedings of the Royal Society of Medicine, 1965",
    "Altman DG. Practical Statistics for Medical Research, 2nd edition",
    "CONSORT 2010 Statement and STROBE Statement (2007) for reporting trials and observational studies",
  ],
});

topics.push({
  id: "preventive-study-designs",
  title: "Epidemiological study designs and measures of disease frequency",
  oneLiner:
    "Descriptive studies measure the burden of disease in terms of time, place and person and generate hypotheses; analytical studies (case-control and cohort) test them by measuring association as odds ratio or relative risk; and experimental studies (randomised controlled, field and community trials) prove causation by allocating the exposure under the investigator's control.",
  frequency: "core",
  keywords: [
    "incidence",
    "prevalence",
    "attack rate",
    "secondary attack rate",
    "case fatality rate",
    "person-time",
    "cross-sectional study",
    "ecological study",
    "ecological fallacy",
    "case-control study",
    "cohort study",
    "odds ratio",
    "relative risk",
    "randomised controlled trial",
    "field trial",
    "community trial",
    "blinding",
    "allocation concealment",
    "intention to treat",
    "phases of clinical trials",
    "Berkson bias",
    "recall bias",
    "confounding",
    "hierarchy of evidence",
    "STROBE",
    "CONSORT",
    "CTRI",
  ],
  sections: [
    {
      heading: "Measures of disease frequency: incidence, prevalence and their relation",
      points: [
        "**Incidence** is the number of new cases of a disease occurring in a defined population during a specified period, divided by the population at risk during that period, usually expressed per 1000 per year. It measures the rate at which healthy people become sick and is the measure needed for aetiological research and for judging a preventive programme.",
        "**Prevalence** is the number of all cases, old and new, existing at a given point in time (point prevalence) or over a period (period prevalence), divided by the population at that time. It is a proportion rather than a rate, is what a cross-sectional survey measures, and is the measure needed for planning services - beds, drugs, staff.",
        "For a stable disease **prevalence = incidence x mean duration (P = I x D)**, so prevalence rises when incidence rises or when patients live longer without cure, and falls when the disease is rapidly fatal, rapidly cured, or when cases migrate out. Insulin raised the prevalence of diabetes without changing its incidence; a fatal epidemic of Ebola has a high incidence and a low prevalence.",
        "**Cumulative incidence (risk)** uses the number of persons at risk at the start as denominator and is a proportion; **incidence density (rate)** uses **person-time** of follow-up as denominator and copes with people entering and leaving a cohort at different times - 25 new cases in 2500 person-years is an incidence density of 10 per 1000 person-years.",
        "In an outbreak, incidence expressed as a percentage of those exposed is the **attack rate**, and the **secondary attack rate** is the number of exposed susceptible contacts who fall ill within the incubation period divided by the total number of exposed susceptible contacts, with the primary case excluded from both numerator and denominator - it measures infectiousness of the agent and is highest for measles and varicella.",
        "The **case fatality rate** (deaths from the disease divided by cases of the disease, as a percentage) measures the killing power of the agent and is the measure that changed the world's view of cholera (50% untreated, under 1% with ORS); the **proportional mortality rate** (deaths from one cause divided by all deaths) says how important the disease is as a cause of death but nothing about risk.",
      ],
    },
    {
      heading: "Descriptive epidemiology: time, place and person",
      points: [
        "Descriptive studies answer **who, where and when** and end in a hypothesis; the classical steps are defining the population, defining the disease, describing it by time, place and person, measuring it, comparing with known indices and formulating an aetiological hypothesis.",
        "Time distribution takes three forms: a **secular (long-term) trend** such as the fall of tuberculosis mortality over decades, **cyclic or periodic** variation such as the 2-3 yearly measles peaks before vaccination, and **seasonal** variation such as diarrhoea in summer, dengue after the monsoon and respiratory infection in winter.",
        "Place distribution is described internationally, nationally, rural against urban, and locally with a **spot map** - John Snow's Broad Street pump map of 1854 remains the model - and a migrant study tells whether a place difference is genetic or environmental.",
        "Person distribution covers age, sex, marital status, occupation, social class, religion, habits, and is where the family physician's own registers are most useful: an age-sex pyramid of clinic attendance shows at a glance who is not coming.",
        "A **cross-sectional (prevalence) study** examines exposure and disease at one point in time; it is quick, cheap, gives prevalence and is the basis of NFHS-5 (2019-21) and the ICMR-INDIAB survey (2023: diabetes 11.4%, prediabetes 15.3%, hypertension 35.5%), but it cannot establish that the exposure preceded the disease.",
        "An **ecological study** correlates exposure and disease using populations rather than individuals as the unit - salt sales against stroke mortality across states - and is prone to the **ecological fallacy**, in which an association true of the group is assumed to hold for each individual within it.",
      ],
    },
    {
      heading: "Case-control studies",
      points: [
        "A case-control study starts with the **outcome**: a group with the disease (cases) and a comparable group without it (controls) are compared for the frequency of past exposure, so it is retrospective by direction of inquiry and is the design of choice for a **rare disease** with a long latent period.",
        "The measure of association is the **odds ratio (OR) = ad/bc** from the 2 x 2 table, which approximates the relative risk when the disease is rare (under about 10%) and when cases and controls are representative of their source populations. Incidence, and therefore relative and attributable risk, cannot be calculated because the investigator fixed the number of cases.",
        "Selection of controls is the difficulty: hospital controls introduce **Berkson's bias** (differential admission rates for the exposure and the disease), and cases that are prevalent rather than incident introduce **Neyman's bias** (survivors differ from those who died quickly). Population controls, neighbourhood controls and more than one control group defend against these.",
        "**Recall bias** is the characteristic information bias: mothers of a child with a malformation search their memory for exposures more thoroughly than mothers of a healthy child; blinding the interviewer and using recorded rather than remembered exposures reduce it.",
        "**Matching** on known confounders such as age and sex makes the groups comparable but a matched variable can no longer be studied, and over-matching on a variable in the causal pathway destroys the association altogether; matched pairs need the matched analysis (McNemar's test).",
        "The landmark is Doll and Hill's 1950 case-control study of smoking and lung cancer in London hospitals; the advantages are speed, low cost, small numbers, many exposures examined at once and no risk to participants, which is why nearly every hospital-based postgraduate thesis in India is a case-control study.",
      ],
    },
    {
      heading: "Cohort studies",
      points: [
        "A cohort study starts with the **exposure**: a group of exposed and a group of non-exposed persons, both free of the disease at entry, are followed forward in time and the incidence of the outcome is compared, giving **relative risk, attributable risk and population attributable risk** directly.",
        "It may be **prospective** (Framingham Heart Study, 1948 onwards; Doll and Hill's British Doctors Study, 1951-2001), **retrospective or historical** (exposure and outcome both already recorded, as in occupational cohorts assembled from factory records), or **ambidirectional**.",
        "Advantages: temporality is secure, incidence is measured, several outcomes of one exposure are studied together, and bias in assessing exposure is minimal because exposure is recorded before the disease appears. Disadvantages: large numbers, long duration, cost, loss to follow-up, changes in exposure over time, and unsuitability for rare disease.",
        "**Loss to follow-up (attrition)** is the specific threat; if more than about 20% of a cohort is lost the result is doubtful, and losses that differ by exposure status produce bias rather than mere imprecision.",
        "The **healthy worker effect** is a selection bias peculiar to occupational cohorts - employed people are healthier than the general population, so comparison with general mortality rates understates the hazard; the correct comparison is an internal one with unexposed workers.",
        "Relative risk from a cohort is the effect size for the individual, whereas the **population attributable fraction** - which depends on the prevalence of the exposure as well as its relative risk - tells the health planner how much disease would disappear if the exposure were removed, and is the number that justifies a tobacco or salt programme.",
      ],
    },
    {
      heading: "Experimental studies: randomised controlled, field and community trials",
      points: [
        "In an experimental study the **investigator allocates the exposure**; when allocation is random the groups are alike in every known and unknown confounder, which is why the **randomised controlled trial (RCT)** is the only design that proves causation for a single intervention.",
        "The steps are: a written protocol, a reference population to which results will be generalised, an experimental population that consents, **randomisation** (computer-generated sequence with **allocation concealment** - sealed opaque envelopes or central allocation - so that the recruiting doctor cannot foresee the next assignment), intervention, follow-up and assessment of outcome.",
        "**Blinding** is separate from concealment: single blind (participant), double blind (participant and observer), triple blind (also the analyst). Concealment prevents selection bias at entry; blinding prevents performance and detection bias afterwards; a surgical trial can conceal allocation even when it cannot blind the surgeon.",
        "Analysis by **intention to treat** keeps every participant in the group to which they were randomised whatever they actually received, preserving the benefit of randomisation and mimicking real-world effectiveness; **per-protocol** analysis measures efficacy under ideal adherence and is biased in favour of the treatment.",
        "A **field trial** enrols healthy people in the community (the 1954 Salk inactivated polio vaccine trial with 1.8 million children), while a **community trial** allocates whole communities (the Newburgh-Kingston water fluoridation study, 1945-1955); non-randomised designs include natural experiments (Snow's two water companies, 1854) and before-and-after comparisons.",
        "Drug trials run in **phases**: phase I (20-80 healthy volunteers, safety and dose), phase II (100-300 patients, efficacy and side effects), phase III (1000-3000, randomised against standard treatment before licensing) and phase IV (post-marketing surveillance for rare adverse effects). In India every trial must be registered prospectively with the **Clinical Trials Registry - India (CTRI, mandatory since June 2009)** and run under the New Drugs and Clinical Trials Rules, 2019.",
      ],
    },
    {
      heading: "Bias, confounding and the hierarchy of evidence",
      points: [
        "**Bias** is any systematic error that produces a result different from the truth; it is not reduced by increasing sample size. **Selection bias** arises in who enters the study (Berkson, Neyman, healthy worker, volunteer), **information bias** in how data are gathered (recall, interviewer, misclassification, detection).",
        "A **confounder** is associated with the exposure, is an independent risk factor for the outcome, and is not on the causal pathway between them: age confounds the association between grey hair and myocardial infarction. It is controlled at the design stage by randomisation, restriction or matching, and at the analysis stage by stratification (Mantel-Haenszel adjusted estimate) or multivariable regression.",
        "**Effect modification** is different - the strength of the association truly differs between strata, as the risk of asbestos differs between smokers and non-smokers - and is reported as separate stratum-specific estimates, not adjusted away.",
        "The **hierarchy of evidence** runs from systematic reviews and meta-analyses of RCTs, through individual RCTs, cohort studies, case-control studies, cross-sectional studies and case series, down to expert opinion; a well-conducted cohort study can outrank a badly conducted RCT, so grade the study, not just the design.",
        "Reporting standards are examinable: **CONSORT** (2010, updated 2025) for RCTs, **STROBE** (2007) for observational studies, **PRISMA** (2020) for systematic reviews and **STARD** (2015) for diagnostic accuracy studies; a CONSORT flow diagram of enrolment, allocation, follow-up and analysis is expected in any RCT answer.",
        "For a thesis viva the safest phrasing is: the design chosen was the one that answered the question with the least bias at an affordable cost; state the measure of association it yields, the main bias it is prone to and how the protocol dealt with that bias.",
      ],
    },
  ],
  tables: [
    {
      heading: "Case-control against cohort against RCT",
      columns: ["Feature", "Case-control", "Cohort", "Randomised controlled trial"],
      rows: [
        ["Starting point", "Disease (outcome)", "Exposure", "Investigator allocates the intervention"],
        ["Direction", "Backward from outcome to exposure", "Forward from exposure to outcome", "Forward"],
        ["Measure of association", "Odds ratio", "Relative risk, attributable risk, PAR", "Relative risk, absolute risk reduction, NNT"],
        ["Incidence measured", "No", "Yes", "Yes"],
        ["Best suited for", "Rare disease, long latency, many exposures", "Rare exposure, many outcomes", "Proving efficacy of a single intervention"],
        ["Main biases", "Recall, Berkson, Neyman", "Loss to follow-up, healthy worker effect", "Performance and detection bias if unblinded"],
        ["Cost and time", "Low, quick", "High, long", "Highest, moderate duration"],
        ["Classical example", "Doll and Hill 1950, smoking and lung cancer", "Framingham 1948; British Doctors Study 1951", "Salk vaccine field trial 1954"],
      ],
    },
    {
      heading: "Measures of frequency in one place",
      columns: ["Measure", "Numerator", "Denominator", "Use"],
      rows: [
        ["Incidence rate", "New cases in a period", "Population at risk in that period, x 1000", "Aetiology, evaluation of prevention"],
        ["Point prevalence", "All cases at one moment", "Population at that moment, x 1000", "Planning services, cross-sectional surveys"],
        ["Incidence density", "New cases", "Person-time at risk", "Cohorts with variable follow-up"],
        ["Attack rate", "Cases during an outbreak", "Population exposed, x 100", "Outbreak investigation"],
        ["Secondary attack rate", "Secondary cases within one incubation period", "Exposed susceptible contacts excluding primary case, x 100", "Infectiousness of agent, vaccine efficacy in households"],
        ["Case fatality rate", "Deaths from the disease", "Cases of the disease, x 100", "Virulence, quality of care"],
        ["Proportional mortality", "Deaths from one cause", "All deaths, x 100", "Ranking causes of death"],
      ],
    },
  ],
  redFlags: [
    "A single case of a disease that is eliminated or eradicated in India - wild poliovirus, guinea worm, yaws, neonatal tetanus in a district certified free - is an outbreak by definition and must be reported the same day.",
    "A rise in weekly incidence above the endemic threshold on the IDSP chart (more than two standard deviations above the mean of the previous years) is an epidemic until proved otherwise.",
    "A secondary attack rate in a household far above that expected for the disease suggests a new or more transmissible strain and warrants laboratory characterisation.",
    "A case fatality rate that is rising during an outbreak signals either a change in the agent or a collapse in case management and needs a rapid response team, not further data collection.",
    "A trial without prospective CTRI registration, ethics committee approval and written informed consent cannot be defended in any forum and must not be joined as an investigator.",
    "Serious adverse events in a trial must be reported to the ethics committee, the sponsor and the Central Drugs Standard Control Organisation within 24 hours under the New Drugs and Clinical Trials Rules, 2019.",
  ],
  pearls: [
    "Incidence is for aetiology, prevalence is for planning, and prevalence = incidence x duration - three sentences that open any measures-of-frequency answer.",
    "Case-control begins with disease and gives an odds ratio; cohort begins with exposure and gives a relative risk; only a trial allocates the exposure.",
    "The odds ratio approximates relative risk only when the disease is rare and the cases and controls are representative - say both conditions.",
    "Randomisation controls known and unknown confounders; matching and stratification control only the known ones.",
    "Allocation concealment prevents selection bias at entry; blinding prevents bias after entry - they are different and both must be described.",
    "Bias is not cured by a larger sample; confounding can be adjusted for only if it was measured.",
  ],
  theory: [
    {
      id: "preventive-study-designs-t1",
      paper: "I",
      kind: "differentiate",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Compare case-control and cohort studies with regard to design, measures of association, biases, advantages and disadvantages. Give one classical example of each.",
      openingLines: [
        "Analytical epidemiological studies test the hypothesis generated by descriptive studies by comparing groups; the two observational analytical designs are the case-control study, which begins with the outcome and looks back at exposure, and the cohort study, which begins with the exposure and looks forward to the outcome.",
        "Both are observational - the investigator does not allocate the exposure - and both are therefore open to confounding, which only randomisation removes.",
      ],
      answer: [
        {
          heading: "1. Design",
          points: [
            "Case-control: cases with the disease and controls without it are selected, and the frequency of past exposure is compared; direction of inquiry is retrospective; the number of cases is fixed by the investigator.",
            "Cohort: exposed and non-exposed groups free of disease are assembled and followed for the occurrence of the outcome; may be prospective, retrospective (historical) or ambidirectional; the number of cases is determined by nature.",
            "Draw the 2 x 2 table (a, b, c, d) and mark that a case-control study fixes the column totals (cases, controls) while a cohort study fixes the row totals (exposed, non-exposed).",
          ],
        },
        {
          heading: "2. Measures of association",
          points: [
            "Case-control: odds ratio = ad/bc; approximates relative risk when the disease is rare and cases and controls are representative; incidence cannot be calculated.",
            "Cohort: incidence in exposed (Ie) and non-exposed (Iu); relative risk = Ie/Iu; attributable risk = Ie - Iu; attributable risk per cent = (Ie - Iu)/Ie x 100; population attributable risk depends on the prevalence of exposure.",
          ],
        },
        {
          heading: "3. Biases",
          points: [
            "Case-control: recall bias, interviewer bias, Berkson's bias from hospital controls, Neyman's bias from prevalent cases; controlled by incident cases, population controls, blinded interviewers and documented exposures.",
            "Cohort: loss to follow-up, healthy worker effect, changes in exposure status and in diagnostic criteria over time; controlled by intensive tracing, internal comparison groups and fixed outcome definitions.",
          ],
        },
        {
          heading: "4. Advantages and disadvantages",
          points: [
            "Case-control: quick, cheap, small numbers, suited to rare diseases and long latent periods, many exposures examined, no risk to subjects; but cannot give incidence or relative risk directly, prone to recall and selection bias, and studies one disease at a time.",
            "Cohort: temporality secure, incidence and relative risk measured, several outcomes studied, less bias in exposure assessment; but expensive, prolonged, large samples, attrition, unsuited to rare disease, and ethically limited to exposures that cannot be randomised.",
          ],
        },
        {
          heading: "5. Examples",
          points: [
            "Case-control: Doll and Hill, 1950 - lung cancer patients in London hospitals compared with controls for smoking history.",
            "Cohort: Doll and Hill's British Doctors Study, 1951-2001, following 40,000 doctors by smoking status; the Framingham Heart Study from 1948 for cardiovascular risk factors.",
          ],
        },
      ],
      mustDraw: [
        "A 2 x 2 table labelled exposed/non-exposed against disease/no disease with the formulae for odds ratio and relative risk written beside it.",
        "A schematic arrow diagram: case-control looking backward from outcome to exposure, cohort looking forward from exposure to outcome, with the time axis marked.",
      ],
      markSplit: [
        { part: "Definitions and design with 2 x 2 table", marks: 3 },
        { part: "Measures of association with formulae", marks: 2 },
        { part: "Biases specific to each", marks: 2 },
        { part: "Advantages and disadvantages", marks: 2 },
        { part: "Examples", marks: 1 },
      ],
      keywords: ["case-control", "cohort", "odds ratio", "relative risk", "Berkson", "recall bias", "Doll and Hill", "Framingham"],
    },
    {
      id: "preventive-study-designs-t2",
      paper: "I",
      kind: "chart-flow",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question:
        "Draw a flow chart of the steps of a randomised controlled trial. Explain allocation concealment, blinding and intention-to-treat analysis.",
      openingLines: [
        "A randomised controlled trial is an experimental study in which participants drawn from a defined population are allocated by a chance process to receive the intervention or the comparison, and are followed identically for a pre-specified outcome.",
        "Random allocation makes the groups comparable in known and unknown confounders, so that any difference in outcome can be attributed to the intervention within the limits of chance.",
      ],
      answer: [
        {
          heading: "Flow of a trial (draw as boxes with arrows)",
          points: [
            "Protocol with hypothesis, sample size and outcome fixed in advance; ethics committee approval; prospective registration with CTRI.",
            "Reference population - to which results will apply - narrowed to the experimental population by inclusion and exclusion criteria; informed consent.",
            "Randomisation using a computer-generated sequence into intervention and control groups.",
            "Intervention delivered; both groups followed identically for the same duration with the same schedule of assessment.",
            "Outcome assessed; participants lost or withdrawn accounted for; analysis by intention to treat; reporting by CONSORT with the flow diagram of numbers enrolled, allocated, followed up and analysed.",
          ],
        },
        {
          heading: "Allocation concealment",
          points: [
            "The person recruiting cannot know which group the next participant will enter - achieved by central telephone or web randomisation or sequentially numbered opaque sealed envelopes.",
            "Prevents selection bias at entry; possible in every trial, including surgical trials that cannot be blinded.",
          ],
        },
        {
          heading: "Blinding",
          points: [
            "Single blind - participant unaware; double blind - participant and observer unaware; triple blind - the analyst also unaware; achieved by identical placebo or sham procedure.",
            "Prevents performance bias (differential care), detection bias (differential outcome assessment) and the placebo effect from distorting the comparison.",
          ],
        },
        {
          heading: "Intention-to-treat analysis",
          points: [
            "Every participant is analysed in the group to which they were randomised, whether or not they received or completed the intervention.",
            "Preserves the balance created by randomisation, guards against bias from differential drop-out and estimates real-world effectiveness; per-protocol analysis estimates efficacy under ideal adherence and is reported alongside, never instead.",
          ],
        },
      ],
      mustDraw: [
        "A vertical flow chart: reference population, experimental population, consent, randomisation splitting into two arms, intervention and control, follow-up, outcome assessment, analysis.",
      ],
      markSplit: [
        { part: "Flow chart with all steps in order", marks: 2 },
        { part: "Allocation concealment", marks: 1 },
        { part: "Blinding with levels", marks: 1 },
        { part: "Intention to treat", marks: 1 },
      ],
      keywords: ["randomised controlled trial", "allocation concealment", "blinding", "intention to treat", "CONSORT", "CTRI"],
    },
  ],
  mcqs: [
    {
      id: "preventive-study-designs-q1",
      stem: "In a case-control study of oral cancer, 40 of 100 cases and 20 of 100 controls reported chewing areca nut with tobacco. What is the odds ratio for the association between the habit and oral cancer?",
      options: ["1.5", "2.0", "2.67", "4.0", "6.0"],
      difficulty: "moderate",
      answer: 2,
      explanation:
        "Lay out the 2 x 2 table: a = 40 (cases exposed), b = 20 (controls exposed), c = 60 (cases unexposed), d = 80 (controls unexposed). OR = ad/bc = (40 x 80)/(20 x 60) = 3200/1200 = 2.67. The value 2.0 is the ratio of exposure proportions (40%/20%), which is a relative risk-like calculation that is not valid because the investigator fixed the number of cases and controls; 4.0 comes from mistakenly dividing 40 by 20 only in the exposed cells. An odds ratio is the only legitimate measure from this design, and it approximates the relative risk here because oral cancer is rare in the population.",
    },
    {
      id: "preventive-study-designs-q2",
      stem: "In a cohort study, 2000 tobacco users and 4000 non-users were followed for 10 years; 100 users and 50 non-users developed the disease. What is the attributable risk per cent among the exposed?",
      options: ["25%", "50%", "75%", "80%", "400%"],
      difficulty: "moderate",
      answer: 2,
      explanation:
        "Incidence in the exposed Ie = 100/2000 = 5%; incidence in the non-exposed Iu = 50/4000 = 1.25%. Relative risk = 5/1.25 = 4. Attributable risk = 5 - 1.25 = 3.75%. Attributable risk per cent = (Ie - Iu)/Ie x 100 = 3.75/5 x 100 = 75%, which can also be obtained as (RR - 1)/RR x 100 = 3/4 x 100. The figure means that three-quarters of the disease among tobacco users is attributable to tobacco and would be prevented if they stopped. The option 400% is the relative risk misread as a percentage, and 80% is a rounding error from using 4/5 with the wrong numerator.",
    },
    {
      id: "preventive-study-designs-q3",
      stem: "The incidence of a chronic disease in a district is 5 per 1000 per year and the average duration of the disease from diagnosis to death or cure is 4 years. Assuming a steady state, what is the expected point prevalence?",
      options: ["1.25 per 1000", "5 per 1000", "9 per 1000", "20 per 1000", "45 per 1000"],
      difficulty: "easy",
      answer: 3,
      explanation:
        "Under steady-state conditions prevalence = incidence x mean duration = 5 per 1000 per year x 4 years = 20 per 1000, or 2%. The relation explains why treatments that prolong life without cure - insulin, antiretroviral therapy - raise prevalence while incidence is unchanged, and why an effective cure (or a rapidly fatal illness) lowers prevalence. Dividing rather than multiplying gives 1.25 per 1000, and adding the two numbers gives 9 - both are errors of formula. Prevalence is the figure the district needs to plan drug stock; incidence is the figure that tells whether prevention is working.",
    },
    {
      id: "preventive-study-designs-q4",
      stem: "A child with measles lives in a household of 7. Two other members are known to be immune from previous measles. Within the next 3 weeks 2 of the remaining household members develop measles. What is the secondary attack rate?",
      options: ["28.6%", "33.3%", "40%", "50%", "66.7%"],
      difficulty: "moderate",
      answer: 3,
      explanation:
        "The secondary attack rate is calculated among exposed susceptible contacts only. Household of 7 minus the index case leaves 6 contacts; minus the 2 immune members leaves 4 susceptible contacts. Two of the 4 developed measles within one incubation period, so the secondary attack rate = 2/4 x 100 = 50%. Using all 7 as denominator gives 28.6% and using all 6 contacts gives 33.3% - both wrong because the index case and the immune persons were never at risk. The secondary attack rate measures the infectiousness of the agent and, when compared between vaccinated and unvaccinated contacts, gives a field estimate of vaccine efficacy.",
    },
    {
      id: "preventive-study-designs-q5",
      stem: "A hospital-based case-control study finds that patients admitted with pancreatic cancer drink less coffee than control patients admitted with peptic ulcer disease, suggesting coffee protects against pancreatic cancer. The most likely explanation for this spurious result is:",
      options: [
        "Recall bias among the cases",
        "Berkson's bias from the choice of hospital controls",
        "Ecological fallacy",
        "Lead time bias",
        "Random error from a small sample",
      ],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "Patients with peptic ulcer disease have been told to avoid coffee, so a control group drawn from them has an artificially low coffee intake and any exposure appears protective. This is a selection bias arising from differential admission and the characteristics of hospital controls - Berkson's bias - and it was the explanation for the famous 1981 coffee-pancreatic cancer finding. Recall bias would usually make cases over-report exposure, not under-report it. Ecological fallacy applies to studies using populations as units, and lead time bias to screening. Random error would not produce a consistent direction of association. The remedy is population or neighbourhood controls, or a second control group with a disease unrelated to the exposure.",
    },
    {
      id: "preventive-study-designs-q6",
      stem: "A cohort of 1000 adults is followed for hypertension; because people joined and left at different times the total follow-up is 2500 person-years, during which 25 new cases occur. The incidence density is:",
      options: ["1 per 1000 person-years", "2.5 per 1000 person-years", "25 per 1000 persons", "10 per 1000 person-years", "40 per 1000 person-years"],
      difficulty: "easy",
      answer: 3,
      explanation:
        "Incidence density uses person-time as denominator: 25 cases / 2500 person-years = 0.01 per person-year = 10 per 1000 person-years. The option 1 per 1000 person-years is a decimal-place slip, and 2.5 per 1000 comes from dividing 25 by 10 instead of by 2.5. The option 25 per 1000 persons is the cumulative incidence using persons as denominator, which ignores that not everyone was followed for the same period and is not a rate at all. Person-time methods are used precisely because they accommodate variable entry and exit in a dynamic cohort.",
    },
  ],
  cards: [
    {
      id: "preventive-study-designs-c1",
      front: "Relation between incidence, prevalence and duration.",
      back: "Prevalence = incidence x mean duration (steady state). Treatments that prolong life without cure raise prevalence; rapid cure or rapid death lower it.",
    },
    {
      id: "preventive-study-designs-c2",
      front: "Secondary attack rate - formula and exclusions.",
      back: "Secondary cases within one incubation period / exposed susceptible contacts x 100. Exclude the primary case and immune persons from the denominator.",
    },
    {
      id: "preventive-study-designs-c3",
      front: "Odds ratio: formula and when it approximates RR.",
      back: "OR = ad/bc. Approximates relative risk when the disease is rare (under about 10%) and cases and controls are representative of their populations.",
    },
    {
      id: "preventive-study-designs-c4",
      front: "Berkson's bias versus Neyman's bias.",
      back: "Berkson - selection bias from hospital controls with differential admission rates. Neyman - prevalence-incidence bias from using surviving prevalent cases rather than incident cases.",
    },
    {
      id: "preventive-study-designs-c5",
      front: "Three conditions for a confounder.",
      back: "Associated with the exposure; an independent risk factor for the outcome; not on the causal pathway between them. Controlled by randomisation, restriction, matching, stratification or regression.",
    },
    {
      id: "preventive-study-designs-c6",
      front: "Allocation concealment versus blinding.",
      back: "Concealment - recruiter cannot foresee the next allocation (central randomisation, opaque sealed envelopes); prevents selection bias at entry. Blinding - participant/observer/analyst unaware after entry; prevents performance and detection bias.",
    },
    {
      id: "preventive-study-designs-c7",
      front: "Phases of a clinical trial with numbers.",
      back: "Phase I: 20-80 healthy volunteers, safety and dose. Phase II: 100-300 patients, efficacy. Phase III: 1000-3000, RCT against standard, pre-licensure. Phase IV: post-marketing surveillance.",
    },
    {
      id: "preventive-study-designs-c8",
      front: "Field trial versus community trial - one example each.",
      back: "Field trial: healthy individuals as the unit - Salk polio vaccine trial, 1954. Community trial: whole communities as the unit - Newburgh-Kingston water fluoridation study, 1945-55.",
    },
  ],
  references: [
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - principles of epidemiology and epidemiological methods",
    "Gordis Epidemiology, 6th edition, 2019 - study designs, bias and confounding",
    "Rothman KJ, Lash TL. Modern Epidemiology, 4th edition, 2021",
    "STROBE Statement (2007), CONSORT Statement (2010, updated 2025) and PRISMA 2020 reporting guidelines",
    "ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants, 2017; New Drugs and Clinical Trials Rules, 2019",
    "ICMR-INDIAB study, Lancet Diabetes and Endocrinology, 2023; National Family Health Survey-5 (2019-21) national report",
  ],
});

topics.push({
  id: "preventive-outbreak-investigation",
  title: "Outbreak investigation step by step and the IDSP",
  oneLiner:
    "An epidemic is the occurrence of disease clearly in excess of what is expected for that place and time, and its investigation follows a fixed sequence - verify the diagnosis, confirm the epidemic, define and count cases, describe them by time, place and person, form and test a hypothesis, look at the environment and write the report - while control measures run in parallel from the first day and every step is reported through the Integrated Disease Surveillance Programme.",
  frequency: "common",
  keywords: [
    "epidemic",
    "outbreak",
    "endemic",
    "pandemic",
    "point source epidemic",
    "propagated epidemic",
    "epidemic curve",
    "case definition",
    "line list",
    "attack rate table",
    "food-specific attack rate",
    "incubation period",
    "food poisoning",
    "cholera outbreak",
    "IDSP",
    "S P L forms",
    "IHIP",
    "rapid response team",
    "trigger events",
    "IHR 2005",
    "Epidemic Diseases Act 1897",
    "notifiable disease",
    "ring vaccination",
    "measles outbreak definition",
  ],
  sections: [
    {
      heading: "Definitions and the types of epidemics",
      points: [
        "**Epidemic:** the unusual occurrence in a community or region of disease, specific health-related behaviour or other health-related events clearly in excess of expected occurrence; **outbreak** is the same idea applied to a localised area, and **pandemic** is an epidemic that crosses international boundaries and affects a large number of people.",
        "**Endemic** means the constant presence of a disease within a given area (hyperendemic when intense, holoendemic when every child is infected early, as with malaria in parts of Africa), **sporadic** means scattered cases without an obvious link, and **exotic** means imported into an area where it does not normally occur.",
        "A **common source epidemic** arises from a single vehicle: a **point source** exposure (one meal, one contaminated batch, the Bhopal gas leak of 1984) produces an explosive rise, all cases within one incubation period range and a rapid fall, whereas a **continuous or repeated exposure** (a contaminated well, the Delhi hepatitis E epidemic of 1955-56 with 29,300 cases) produces a prolonged plateau.",
        "A **propagated epidemic** spreads from person to person (or by arthropod or animal reservoir) - hepatitis A, polio, measles, COVID-19 - and its curve rises slowly with successive peaks roughly one incubation period apart until the supply of susceptibles is exhausted; a **mixed epidemic** starts as common source and then propagates, as when a water-borne shigella outbreak is followed by household spread.",
        "The **epidemic curve** is a histogram of cases by date (or hour) of onset; its shape identifies the type of epidemic, its start and duration, and in a point source outbreak it gives the incubation period: the time from the exposure to the median case is the median incubation period, and the earliest and latest cases give its range.",
        "**Modern (slow) epidemics** of non-communicable disease - diabetes, coronary disease, road traffic injury - follow the same logic over decades, and the tobacco-lung cancer story is the textbook example that the methods of outbreak investigation apply to them as well.",
      ],
    },
    {
      heading: "Steps 1-4: verify, confirm, define the population, count the cases",
      points: [
        "**Verify the diagnosis** first, by examining a sample of cases and sending specimens - stool for hang-drop and culture in suspected cholera, throat swabs and serum in fever with rash, water and food samples where relevant - because a rumour of cholera and a cluster of rotavirus need different responses; this is the first step, before the existence of the epidemic is confirmed.",
        "**Confirm the existence of an epidemic** by comparing the number of cases with the expected number for that place, population and season - the previous 3-5 years' figures for the same weeks, an **endemic threshold** of the mean plus two standard deviations on the IDSP chart, or a national definition such as five or more suspected measles cases in a block within four weeks.",
        "**Define the population at risk** with a map of the area, the census or ASHA household register and the location of water sources, schools, hostels and eating places, so that denominators exist for every rate that follows.",
        "**Write a case definition** with clinical criteria plus restrictions of person, place and time, in tiers - **suspected** (clinical), **probable** (clinical with epidemiological link) and **confirmed** (laboratory) - keeping it sensitive at the start to find every case and tightening it later for analysis.",
        "**Search actively for cases** house to house with the ASHA and ANM, in schools and in private clinics, and record every case on a **line list**: name, age, sex, address, date of onset, symptoms, exposures, specimens sent, outcome; the line list is the single document from which the whole analysis is built.",
        "Search for cases in adjacent villages and among people who left the area, because the cases that reached the PHC are only those who were sick enough and near enough to come, and because the geographical limit of the outbreak is itself evidence about the source.",
      ],
    },
    {
      heading: "Steps 5-7: describe, hypothesise, test",
      points: [
        "**Analyse by time** with the epidemic curve, **by place** with a spot map (cases clustered around one hand pump, one street, one school) and **by person** with attack rates by age, sex, occupation, religion, attendance at a function or use of a water source - the group with the highest attack rate points to the exposure.",
        "**Formulate a hypothesis** stating the agent, the source, the mode of transmission and the population at risk - for instance, Vibrio cholerae from the western hand pump contaminated by a leaking sewer, spread by drinking water, affecting the households that draw from it.",
        "**Test the hypothesis** with a **retrospective cohort study** when the exposed population is well defined (a wedding feast, a hostel, a school), calculating **food-specific attack rates** among those who ate and those who did not eat each item; the vehicle is the item with a high attack rate among eaters, a low rate among non-eaters, and the largest difference or ratio between them.",
        "When the population at risk is not enumerable - cases scattered across a town - use a **case-control study**, comparing exposures of cases with those of neighbourhood or age-matched controls and calculating odds ratios.",
        "A food that everyone ate cannot be incriminated by attack rates alone; a food eaten by nobody who fell ill is excluded; and when two foods both look guilty, cross-tabulate them (attack rate for A among those who did and did not eat B) to separate the true vehicle from the one merely served alongside it.",
        "Laboratory confirmation closes the loop - the same organism from patients, from the food or water, and ideally from the food handler or the source - and molecular typing where available distinguishes one outbreak from coincidental sporadic cases.",
      ],
    },
    {
      heading: "Steps 8-10 and the control measures that run alongside",
      points: [
        "**Evaluate the ecological factors:** inspect the water supply, its chlorination and residual chlorine, the sewerage, the kitchen, refrigeration and food handlers, the vector breeding sites, and recent events - a fair, a flood, a pipeline repair, a migrant camp - that may explain why the outbreak happened now.",
        "**Investigate the population at risk further** where indicated - a serological survey, a search for carriers, an immunisation coverage survey after a measles outbreak - and **write a report** to the district surveillance unit and Chief Medical Officer with the findings, the action taken and the recommendations, within 24 hours preliminarily and in full at the end.",
        "Control does not wait for the analysis: from day one, treat cases (ORS corners for diarrhoea, referral of severe dehydration), **isolate** where transmission is person to person, give **chemoprophylaxis** to defined close contacts only (doxycycline for household contacts of cholera, rifampicin for meningococcal contacts), and provide **post-exposure vaccination** - measles within 72 hours of exposure for contacts, ring vaccination of the surrounding area.",
        "**Interrupt transmission:** superchlorinate or close the implicated water source and distribute chlorine tablets, stop the sale of implicated food, supervise safe disposal of excreta and vomitus, intensify vector control with fogging and source reduction, and enforce hand hygiene with soap in every household.",
        "**Communicate:** a single trained spokesperson, daily situation reports, simple messages through ASHAs, panchayats, schools and local media, and correction of rumours - risk communication is graded in the modern outbreak and in the modern exam.",
        "**Continue surveillance** for at least two incubation periods after the last case before declaring the outbreak over (10 days for cholera, 42 days for Ebola, 2 incubation periods of 21 days for measles) and conduct an after-action review that feeds into the district preparedness plan.",
      ],
    },
    {
      heading: "Integrated Disease Surveillance Programme (IDSP) and the legal framework",
      points: [
        "**IDSP** was launched in November 2004 with World Bank assistance and now runs under the National Centre for Disease Control as part of the National Health Mission; it has surveillance units at central (CSU), state (SSU) and district (DSU) level, each district with an epidemiologist, a microbiologist and an entomologist where sanctioned.",
        "Data flow on three forms: the **S (syndromic) form** filled weekly by health workers and ASHAs, the **P (presumptive) form** by medical officers using clinical diagnoses, and the **L (laboratory) form** by laboratories; since April 2021 reporting is case-based and near real-time on the **Integrated Health Information Platform (IHIP)**.",
        "The reporting week runs Monday to Sunday and a nil report is compulsory; **trigger events** that demand immediate telephonic reporting include a cluster of similar illness, a single case of cholera, plague, wild polio or a disease not previously seen in the area, two or more unexplained deaths, and unusual deaths among animals or birds (rat fall before plague, poultry deaths before avian influenza).",
        "The district **Rapid Response Team** - epidemiologist, microbiologist, clinician or paediatrician, entomologist and public health nurse - reaches the site within 24 hours; a **Media Scanning and Verification Cell** at NCDC picks up event-based signals from the press and social media that the indicator-based system would miss.",
        "The **Epidemic Diseases Act, 1897** (amended in 2020 to protect healthcare workers) lets governments make regulations to control epidemics, and the **Disaster Management Act, 2005** was the basis of the COVID-19 lockdown; notification of specified diseases is a state matter, and the medical officer is legally obliged to report notifiable diseases to the district health authority.",
        "Under the **International Health Regulations (2005)** a state must notify WHO within 24 hours of assessing a potential public health emergency of international concern; smallpox, wild poliovirus, SARS and human influenza of a new subtype are always notifiable, while cholera, pneumonic plague, yellow fever, viral haemorrhagic fevers and West Nile fever are assessed against the four-question decision instrument.",
      ],
    },
    {
      heading: "Outbreak definitions and thresholds the family physician must know",
      points: [
        "**Cholera:** a single culture-confirmed case is an outbreak; report the same day, set up an ORS corner and treatment centre, give doxycycline 300 mg single dose to adult household contacts (azithromycin in children and pregnancy), chlorinate all water sources to a **residual chlorine of 0.5 mg/L** and search for cases for 10 days after the last one.",
        "**Measles:** five or more suspected cases (fever with maculopapular rash) in a block within four weeks is a suspected outbreak, confirmed when at least two are IgM positive; response is vaccination of all children 6 months to 5 years within 72 hours, vitamin A to every case, and a coverage survey.",
        "**Acute flaccid paralysis:** every AFP in a child under 15 is reported within 24 hours and two stool samples collected 24-48 hours apart within 14 days of onset; an adequate surveillance system finds at least 2 non-polio AFP cases per 100,000 children under 15 per year, and a single wild poliovirus isolate is a public health emergency.",
        "**Dengue:** a cluster of fever cases with a positive NS1 or IgM, or a **Breteau index above 5** (containers positive for Aedes larvae per 100 houses) or house index above 10, is the signal for source reduction, temephos larviciding and fogging within 24 hours.",
        "**Acute encephalitis syndrome / JE:** two or more cases in a village within a fortnight trigger investigation; **malaria:** monthly cases exceeding twice the mean of the same month in the previous three years, or any death, declares an epidemic; **plague:** rat fall or a single case of pneumonic plague is a national emergency with quarantine and doxycycline prophylaxis for contacts.",
        "**Food poisoning:** two or more linked cases of gastroenteritis after a common meal is an outbreak; the incubation period sorts the cause - one to six hours with vomiting is staphylococcal or Bacillus cereus preformed toxin, eight to sixteen hours with diarrhoea is Clostridium perfringens or B. cereus diarrhoeal toxin, twelve to seventy-two hours with fever is Salmonella, and minutes to an hour with neurological or cholinergic features is chemical.",
      ],
    },
  ],
  tables: [
    {
      heading: "Incubation periods that identify the cause of a food or water-borne outbreak",
      columns: ["Agent", "Usual incubation", "Dominant symptom", "Typical vehicle"],
      rows: [
        ["Chemical (organophosphate, metals, argemone)", "Minutes to 1 hour", "Cholinergic or neurological, vomiting", "Contaminated grain, oil, stored food"],
        ["Staphylococcus aureus enterotoxin", "1-6 hours", "Vomiting, no fever", "Milk sweets, cream, cooked rice handled by carrier"],
        ["Bacillus cereus emetic toxin", "1-6 hours", "Vomiting", "Fried or reheated rice"],
        ["Clostridium perfringens", "8-16 hours", "Watery diarrhoea, cramps", "Meat cooked in bulk, held warm"],
        ["Salmonella (non-typhoidal)", "12-72 hours", "Fever, diarrhoea, cramps", "Eggs, poultry, meat"],
        ["Vibrio cholerae", "Few hours to 5 days, usually 1-2 days", "Profuse painless watery diarrhoea", "Water, food washed in water"],
        ["Norovirus", "24-48 hours", "Vomiting and diarrhoea, short course", "Water, salads, shellfish, food handlers"],
        ["Shigella", "1-3 days", "Dysentery with fever", "Water, hands, flies"],
        ["Hepatitis A and E", "15-50 days (mean 28) / 15-60 days (mean 40)", "Jaundice", "Water, uncooked food"],
        ["Typhoid", "10-14 days (3-60)", "Sustained fever", "Water, milk, food from carrier"],
      ],
    },
    {
      heading: "IDSP reporting: who fills what",
      columns: ["Form", "Filled by", "Content", "Frequency"],
      rows: [
        ["S - syndromic", "ASHA, ANM, health worker", "Syndromes: fever, fever with rash, diarrhoea, jaundice, AFP, unusual events", "Weekly (Monday-Sunday), nil report compulsory"],
        ["P - presumptive", "Medical officer at PHC/CHC/hospital", "Clinically diagnosed epidemic-prone diseases", "Weekly, plus immediate telephonic report of trigger events"],
        ["L - laboratory", "Laboratory technician or microbiologist", "Laboratory-confirmed cases", "Weekly and on confirmation"],
        ["Event-based", "Anyone, Media Scanning and Verification Cell", "Rumours, media reports, unusual deaths in animals", "Immediate"],
      ],
    },
  ],
  redFlags: [
    "A single case of cholera, plague, wild poliovirus, diphtheria in a previously free district, or any disease new to the area must be reported by telephone to the district surveillance unit the same day and never held for the weekly form.",
    "Two or more unexplained deaths from a similar illness in one locality within a week is a trigger event demanding a Rapid Response Team, whatever the presumed diagnosis.",
    "Acute encephalitis with a cluster in a village, or encephalitis with a history of contact with bats, sick pigs or date-palm sap, is Nipah or JE until proved otherwise and needs isolation and immediate notification.",
    "Rat fall, unusual deaths of poultry or crows, or illness in animal handlers precedes plague and avian influenza; report to the district health and veterinary authorities before human cases appear.",
    "A food poisoning outbreak with neurological features - descending paralysis, blurred vision, dysphagia - is botulism or chemical poisoning and needs urgent referral and antitoxin, not observation.",
    "Any acute flaccid paralysis in a child under 15 is reportable within 24 hours with two stool samples; missing this is a surveillance failure that is audited nationally.",
  ],
  pearls: [
    "The first step is to verify the diagnosis, the second to confirm that an epidemic exists - the order is examined every year.",
    "A case definition has clinical criteria plus person, place and time, in suspected, probable and confirmed tiers; write it before counting anything.",
    "Explosive rise, all cases within one incubation period range and a rapid fall means point source; successive peaks one incubation period apart means propagated.",
    "The vehicle in a feast outbreak has the highest attack rate among those who ate it, the lowest among those who did not, and the largest difference between the two.",
    "Control measures start on day one in parallel with the investigation; nobody waits for the culture report to chlorinate a well.",
    "IDSP: S form by the health worker, P form by the medical officer, L form by the laboratory, all on IHIP, week Monday to Sunday, nil reports compulsory.",
  ],
  theory: [
    {
      id: "preventive-outbreak-investigation-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Twenty cases of acute watery diarrhoea are reported from one village in three days. As the medical officer of the PHC, describe how you would investigate this outbreak and the control measures you would institute.",
      openingLines: [
        "An outbreak is the occurrence of cases of a disease clearly in excess of expectancy in a defined area and time; twenty cases of acute watery diarrhoea in three days in one village exceeds the endemic level and, until proved otherwise, is cholera.",
        "Investigation and control run in parallel from the first day: the investigation follows the standard steps, and the control measures - case management, safe water, sanitation and reporting - begin before the laboratory results are back.",
      ],
      answer: [
        {
          heading: "1. Immediate actions on day one",
          points: [
            "Telephone the district surveillance unit and Chief Medical Officer; a cluster of acute watery diarrhoea is a trigger event under IDSP and a single confirmed cholera case is an outbreak.",
            "Set up an ORS corner and a treatment centre in the village with the ASHA and ANM; assess dehydration by the IMNCI/WHO plan A, B, C, start intravenous Ringer's lactate for severe dehydration and refer those who cannot be managed.",
            "Collect stool samples (or rectal swabs in Cary-Blair medium) from 5-10 fresh cases before antibiotics for hang-drop, culture and sensitivity, and water samples from every source in use for residual chlorine and bacteriology.",
          ],
        },
        {
          heading: "2. Verify the diagnosis and confirm the outbreak",
          points: [
            "Examine a sample of cases: painless rice-water stools with rapid dehydration and no fever suggest cholera; blood and fever suggest shigella; predominant vomiting within hours of a meal suggests toxin.",
            "Compare with the PHC's own records for the same weeks in the previous three years and with the IDSP endemic threshold; twenty cases in three days from one village is clearly in excess.",
          ],
        },
        {
          heading: "3. Define the population and count the cases",
          points: [
            "Obtain the village map and household register; note water sources, the school, the anganwadi, recent functions and any influx of visitors.",
            "Case definition: any resident of the village with three or more loose watery stools in 24 hours with onset on or after the index date (suspected); with an epidemiological link (probable); with Vibrio cholerae isolated (confirmed).",
            "House-to-house search by ASHA and ANM with a line list: name, age, sex, house, water source, date and time of onset, treatment, outcome; include cases treated by private practitioners and those who have left the village.",
          ],
        },
        {
          heading: "4. Descriptive analysis and hypothesis",
          points: [
            "Time: draw the epidemic curve by date of onset - an explosive rise within one incubation period suggests a point source such as one contaminated well or one feast; a plateau suggests continued exposure to contaminated supply.",
            "Place: a spot map of cases against water sources; clustering around one hand pump or one pipeline branch is the usual finding.",
            "Person: attack rates by age, sex, household, water source and attendance at any function; a higher rate among users of one source is the hypothesis.",
          ],
        },
        {
          heading: "5. Test the hypothesis and examine the environment",
          points: [
            "Retrospective cohort study across households: attack rate among users and non-users of each water source (or each food at a function), calculating the relative risk; a case-control study if the exposed population is not enumerable.",
            "Sanitary survey of the implicated source: proximity to latrines or drains, cracked platform, pipeline leaks, intermittent supply with negative pressure, residual chlorine below 0.5 mg/L, presence of E. coli.",
            "Laboratory: Vibrio cholerae O1 or O139 from stools and from the water source confirms the chain.",
          ],
        },
        {
          heading: "6. Control measures",
          points: [
            "Water: close or superchlorinate the implicated source (bleaching powder to a residual of 0.5 mg/L after 30 minutes' contact), supply tankers, distribute chlorine tablets and teach boiling and safe storage in narrow-mouthed covered containers.",
            "Cases and contacts: continued treatment, doxycycline 300 mg single dose to adults with severe dehydration and to household contacts, azithromycin for children and pregnant women, disinfection of stools and vomitus with bleaching powder, hand washing with soap.",
            "Sanitation and food: safe disposal of excreta, fly control, ban on cut fruit and street food, supervision of food handlers, hygiene messaging through ASHAs, school and panchayat.",
            "Surveillance: daily reporting on IHIP, continued active search for 10 days after the last case, and a written report with recommendations for the water supply to the district authorities.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart of the ten steps of outbreak investigation with control measures shown as a parallel column.",
        "A sketch epidemic curve with point source and propagated shapes labelled.",
        "A 2 x 2 attack rate table of users against non-users of the implicated water source with the relative risk.",
      ],
      markSplit: [
        { part: "Immediate reporting and case management", marks: 2 },
        { part: "Verification, confirmation, case definition and line listing", marks: 2 },
        { part: "Descriptive analysis with epidemic curve and spot map", marks: 2 },
        { part: "Hypothesis testing and environmental investigation", marks: 2 },
        { part: "Control measures and continued surveillance", marks: 2 },
      ],
      keywords: ["outbreak investigation", "cholera", "epidemic curve", "case definition", "line list", "attack rate", "residual chlorine", "IDSP"],
    },
    {
      id: "preventive-outbreak-investigation-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Write a short note on the Integrated Disease Surveillance Programme (IDSP).",
      openingLines: [
        "IDSP is a decentralised, state-based surveillance programme launched in November 2004 with World Bank assistance, now run by the National Centre for Disease Control under the National Health Mission, to detect and respond to outbreaks of epidemic-prone diseases early.",
        "Its objective is to strengthen data collection, analysis and response at district level so that an outbreak is detected within a week of its start and controlled before it spreads.",
      ],
      answer: [
        {
          heading: "Structure",
          points: [
            "Central Surveillance Unit at NCDC, State Surveillance Units and District Surveillance Units, each with an epidemiologist, microbiologist and entomologist where sanctioned, and a Rapid Response Team at every district.",
            "Reporting units: sub-centres, PHCs, CHCs, district and medical college hospitals, private practitioners and laboratories; a network of district priority labs and reference labs.",
          ],
        },
        {
          heading: "Data flow",
          points: [
            "S form (syndromic) by health workers and ASHAs; P form (presumptive) by medical officers; L form (laboratory) by laboratories - weekly, Monday to Sunday, with compulsory nil reporting.",
            "Since April 2021 case-based, geo-tagged, near real-time reporting on the Integrated Health Information Platform (IHIP), with automated alerts when cases cross the threshold.",
            "Event-based surveillance through the Media Scanning and Verification Cell and telephonic reporting of trigger events.",
          ],
        },
        {
          heading: "Response",
          points: [
            "Trigger events - a cluster of similar illness, a single case of cholera or plague, unexplained deaths, unusual animal deaths - bring the Rapid Response Team to the site within 24 hours to investigate and institute control.",
            "Outputs: weekly outbreak reports, seasonal trend analysis, training of medical officers in outbreak investigation and links to programmes such as NCVBDC and the measles-rubella surveillance network.",
          ],
        },
        {
          heading: "Role of the family physician",
          points: [
            "Report notifiable and epidemic-prone diseases on the P form, telephone trigger events at once, keep an outbreak-ready stock of ORS, chlorine tablets and rectal swab kits, and join the district RRT when called.",
          ],
        },
      ],
      mustDraw: ["A three-tier diagram of CSU, SSU and DSU with S, P and L forms feeding the district unit and the RRT responding downward."],
      markSplit: [
        { part: "Origin, objective and structure", marks: 2 },
        { part: "S, P, L forms and IHIP", marks: 2 },
        { part: "Trigger events, RRT and the physician's role", marks: 1 },
      ],
      keywords: ["IDSP", "S P L forms", "IHIP", "rapid response team", "trigger events", "NCDC"],
    },
  ],
  mcqs: [
    {
      id: "preventive-outbreak-investigation-q1",
      stem: "After a wedding feast, 100 guests ate the kheer and 60 of them fell ill; 50 guests did not eat the kheer and 5 of them fell ill. What is the relative risk of illness associated with eating the kheer?",
      options: ["1.2", "2.0", "5.0", "6.0", "12.0"],
      difficulty: "moderate",
      answer: 3,
      explanation:
        "Attack rate among those who ate the kheer = 60/100 = 60%; among those who did not = 5/50 = 10%. Relative risk = 60/10 = 6.0, and the attack rate difference is 50 percentage points. This is a retrospective cohort analysis, appropriate because the population exposed (the guests) is enumerable, and the kheer is incriminated because it has a high rate among eaters, a low rate among non-eaters and a large ratio between them. The option 12 divides 60 by 5 without using the denominators, and 2.0 is a guess from the ratio of group sizes. The five people ill without eating kheer are explained by cross-contamination, a second vehicle or errors in recall.",
    },
    {
      id: "preventive-outbreak-investigation-q2",
      stem: "Guests at a function ate at 8 pm. Between 10 pm and 1 am, 40 of them developed severe vomiting with abdominal cramps but no fever; all recovered within 24 hours. The most likely agent is:",
      options: ["Salmonella typhimurium", "Vibrio cholerae", "Staphylococcus aureus enterotoxin", "Clostridium perfringens", "Norovirus"],
      difficulty: "easy",
      answer: 2,
      explanation:
        "An incubation of two to five hours with vomiting as the dominant symptom, no fever and rapid recovery is the picture of a preformed toxin - staphylococcal enterotoxin from milk-based sweets or handled food kept at room temperature (Bacillus cereus emetic toxin from fried rice behaves identically). Salmonella needs 12-72 hours and causes fever and diarrhoea; Clostridium perfringens needs 8-16 hours and causes diarrhoea rather than vomiting; cholera is painless watery diarrhoea after one to two days; norovirus takes 24-48 hours. The incubation period is the single most discriminating piece of information in a food poisoning outbreak and should be calculated from the epidemic curve before any laboratory result.",
    },
    {
      id: "preventive-outbreak-investigation-q3",
      stem: "An epidemic curve of hepatitis A in a hostel shows a first peak in week 1, a larger second peak in week 5 and a third in week 9, with cases between the peaks. This pattern indicates:",
      options: ["A point source epidemic", "A continuous common source epidemic", "A propagated epidemic", "A mixed epidemic that began as point source", "Seasonal variation"],
      difficulty: "moderate",
      answer: 2,
      explanation:
        "Successive peaks separated by roughly one incubation period (about four weeks for hepatitis A) are the signature of person-to-person spread - a propagated epidemic - as each generation of cases infects the next. A point source would produce a single explosive peak with all cases within one incubation range (15-50 days), and a continuous common source produces a plateau without discrete generations. A mixed epidemic would show an explosive first peak much larger than the later ones; here the second peak is larger, which is the propagated pattern. The control implication is hygiene and hand-washing plus vaccination of contacts, not merely closing a water source.",
    },
    {
      id: "preventive-outbreak-investigation-q4",
      stem: "Under the International Health Regulations (2005), which of the following must always be notified to WHO regardless of the circumstances?",
      options: ["Cholera", "Pneumonic plague", "Yellow fever", "Wild poliovirus", "Dengue haemorrhagic fever"],
      difficulty: "moderate",
      answer: 3,
      explanation:
        "Annex 2 of the IHR (2005) lists four diseases that are always notifiable because a single case is unusual and serious: smallpox, poliomyelitis due to wild-type poliovirus, SARS and human influenza caused by a new subtype. Cholera, pneumonic plague, yellow fever, viral haemorrhagic fevers and West Nile fever are in the second group, to be assessed with the decision instrument (is the impact serious, is it unusual, is there risk of international spread, is there risk of travel or trade restriction) and notified if two of the four criteria are met. Dengue is in the third group of diseases of national or regional concern. Notification must reach WHO within 24 hours of the assessment.",
    },
    {
      id: "preventive-outbreak-investigation-q5",
      stem: "The mean number of acute diarrhoeal disease cases reported from a block in the 20th week of the year over the previous five years is 10, with a standard deviation of 3. This year 18 cases are reported in the 20th week. The correct interpretation is:",
      options: [
        "Within normal variation; no action needed",
        "Exceeds the endemic threshold (mean plus 2 SD); investigate as an outbreak",
        "An outbreak only if 20 or more cases are reported",
        "Cannot be interpreted without laboratory confirmation",
        "An epidemic only if deaths have occurred",
      ],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "The endemic (alert) threshold on an IDSP control chart is usually set at the mean plus two standard deviations of the same week in previous years: 10 + 2 x 3 = 16. Eighteen cases exceed it, so the existence of an outbreak is confirmed statistically and the medical officer verifies the diagnosis and investigates. Laboratory confirmation of the cause is a separate step and is not needed to declare that cases are in excess; deaths are not part of the definition of an epidemic. The specific number 20 has no basis - thresholds are computed from the local baseline, which is why every PHC must keep its own weekly records.",
    },
    {
      id: "preventive-outbreak-investigation-q6",
      stem: "The first step in the investigation of a suspected epidemic is:",
      options: [
        "Confirmation of the existence of an epidemic",
        "Verification of the diagnosis",
        "Defining the population at risk",
        "Formulation of a hypothesis",
        "Institution of control measures",
      ],
      difficulty: "easy",
      answer: 1,
      explanation:
        "Verification of the diagnosis comes first: a cluster of reported cholera may be rotavirus, food poisoning or a rumour, and the entire response depends on knowing what the disease actually is. Confirmation of the existence of the epidemic - showing the cases are in excess of expectation - is the second step. Defining the population at risk, searching for cases, descriptive analysis, hypothesis, testing, environmental evaluation and the report follow. Control measures are not a numbered step because they run in parallel from day one, but they still need at least a working diagnosis to be rational.",
    },
  ],
  cards: [
    {
      id: "preventive-outbreak-investigation-c1",
      front: "Define epidemic, endemic and pandemic.",
      back: "Epidemic - occurrence clearly in excess of expected for the place and time. Endemic - constant presence in an area. Pandemic - epidemic crossing international boundaries affecting large numbers.",
    },
    {
      id: "preventive-outbreak-investigation-c2",
      front: "Ten steps of epidemic investigation, in order.",
      back: "Verify diagnosis; confirm epidemic exists; define population at risk; search for cases (case definition, line list); analyse by time, place, person; hypothesis; test hypothesis; evaluate ecological factors; further investigation of the population; report.",
    },
    {
      id: "preventive-outbreak-investigation-c3",
      front: "Point source versus propagated epidemic curve.",
      back: "Point source - explosive rise, all cases within one incubation period range, rapid fall. Propagated - slow rise with successive peaks one incubation period apart.",
    },
    {
      id: "preventive-outbreak-investigation-c4",
      front: "How to read a food-specific attack rate table.",
      back: "The vehicle has the highest attack rate among eaters, the lowest among non-eaters and the largest difference (or ratio) between them; a food eaten by nobody who fell ill is excluded.",
    },
    {
      id: "preventive-outbreak-investigation-c5",
      front: "IDSP forms and who fills them.",
      back: "S (syndromic) - health worker/ASHA; P (presumptive) - medical officer; L (laboratory) - lab. Weekly, Monday to Sunday, nil reports compulsory, on IHIP since April 2021.",
    },
    {
      id: "preventive-outbreak-investigation-c6",
      front: "Always-notifiable diseases under IHR 2005.",
      back: "Smallpox, wild poliovirus, SARS, human influenza of a new subtype - notify WHO within 24 hours. Cholera, plague, yellow fever, VHF, West Nile are assessed by the decision instrument.",
    },
    {
      id: "preventive-outbreak-investigation-c7",
      front: "Measles outbreak definition and response.",
      back: "Five or more suspected cases in a block within four weeks (confirmed if two or more IgM positive). Vaccinate 6 months to 5 years within 72 hours, vitamin A to cases, coverage survey.",
    },
    {
      id: "preventive-outbreak-investigation-c8",
      front: "Cholera outbreak: chemoprophylaxis and water target.",
      back: "Doxycycline 300 mg single dose for adult household contacts (azithromycin for children and pregnancy); residual chlorine 0.5 mg/L after 30 minutes' contact; search for cases 10 days after the last one.",
    },
  ],
  references: [
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - investigation of an epidemic, IDSP",
    "IDSP Training Manual for Medical Officers for Hospital Based Disease Surveillance, NCDC; IDSP operational guidelines and IHIP user manual, 2021",
    "CDC Field Epidemiology Manual (The CDC Field Epidemiology Manual, 2019) - steps of an outbreak investigation",
    "WHO International Health Regulations (2005), 3rd edition, 2016 - Annex 2 decision instrument",
    "NCDC Operational Guidelines for Measles and Rubella Surveillance and Outbreak Investigation in India, 2023",
    "Epidemic Diseases Act, 1897 with the 2020 amendment; Disaster Management Act, 2005",
  ],
});

topics.push({
  id: "preventive-nutrition-programmes",
  title: "Nutritional assessment, deficiency diseases and the national nutrition programmes",
  oneLiner:
    "India carries a double burden of undernutrition - stunting in a third of children under five and anaemia in more than half of women - alongside rising overweight, and the family physician's tools are anthropometry against the WHO 2006 standards, the ICMR-NIN 2020 requirements, and the programmes that deliver food, iron, vitamin A, deworming and iodised salt: Poshan 2.0 through the anganwadi, PM POSHAN in schools, Anaemia Mukt Bharat and NIDDCP.",
  frequency: "common",
  keywords: [
    "malnutrition",
    "stunting",
    "wasting",
    "underweight",
    "severe acute malnutrition",
    "SAM",
    "MAM",
    "MUAC",
    "Z score",
    "WHO growth standards",
    "kwashiorkor",
    "marasmus",
    "F-75",
    "F-100",
    "RUTF",
    "nutrition rehabilitation centre",
    "ICDS",
    "anganwadi",
    "Poshan Abhiyaan",
    "Poshan 2.0",
    "PM POSHAN",
    "mid-day meal",
    "Anaemia Mukt Bharat",
    "IFA",
    "National Deworming Day",
    "vitamin A prophylaxis",
    "NIDDCP",
    "iodised salt",
    "RDA",
    "BMI",
    "lathyrism",
    "epidemic dropsy",
    "fluorosis",
    "food fortification",
    "NFHS-5",
  ],
  sections: [
    {
      heading: "The burden: what NFHS-5 (2019-21) says",
      points: [
        "Among children under five, **35.5% are stunted** (height-for-age below -2 SD), **19.3% wasted** (weight-for-height below -2 SD), 7.7% severely wasted and **32.1% underweight**; the improvement since NFHS-4 (2015-16) was small for stunting and nil for wasting, which is why wasting is treated as the emergency indicator.",
        "**Anaemia** (haemoglobin below the WHO cut-off) affects **67.1% of children aged 6-59 months, 57.0% of women aged 15-49, 52.2% of pregnant women** and 25% of men - all worse than in NFHS-4 - and low birth weight (under 2500 g) is recorded in about 18% of births.",
        "The other half of the double burden: **24% of women and 22.9% of men are overweight or obese** by the WHO cut-off of BMI 25, and the ICMR-INDIAB survey (2023) found generalised obesity in 28.6% and abdominal obesity in 39.5% of adults using Asian-Indian cut-offs.",
        "Infant feeding remains the root: only 41.8% of newborns are put to the breast within an hour, **63.7% are exclusively breastfed to six months**, and just **11.3% of children aged 6-23 months receive a minimum acceptable diet** - the figure that explains why stunting begins at six months.",
        "Micronutrient coverage is uneven: 94.3% of households use adequately iodised salt, but only about a quarter of pregnant women take IFA for the full 180 days, and vitamin A and deworming coverage lag behind immunisation in the same children.",
        "For the paper, date every figure (NFHS-5, 2019-21), name the survey, and state whether it is a prevalence (cross-sectional) or programme (HMIS) figure - examiners reward the source more than the decimal.",
      ],
    },
    {
      heading: "Anthropometric assessment and the classifications",
      points: [
        "Children are measured against the **WHO Growth Standards (2006)** and expressed as **Z-scores** (observed minus median, divided by the standard deviation of the reference): **weight-for-age** below -2 SD is underweight (a composite index), **height-for-age** below -2 SD is stunting (chronic), and **weight-for-height** below -2 SD is wasting (acute); below -3 SD is severe.",
        "**Severe acute malnutrition (SAM)** in a child aged 6-59 months is any one of: weight-for-height below **-3 SD**, **mid-upper arm circumference below 11.5 cm**, or **bilateral pitting oedema**; **moderate acute malnutrition (MAM)** is weight-for-height between -3 and -2 SD or MUAC 11.5 to 12.4 cm without oedema.",
        "MUAC is age-independent between 6 and 59 months, needs a coloured tape (red below 11.5, yellow 11.5-12.4, green 12.5 and above) and is the screening tool of the ASHA and anganwadi worker; weight-for-height on the MCP card growth chart is the confirmatory measure at the facility.",
        "The older Indian classifications still appear: **Gomez** (weight-for-age as a percentage of reference - 75-89% grade I, 60-74% grade II, under 60% grade III), **IAP** (over 80% normal, 71-80 grade I, 61-70 II, 51-60 III, 50 or less IV, with a K suffix for kwashiorkor), **Waterlow** (wasting by weight-for-height, stunting by height-for-age) and **Wellcome** (weight-for-age 60-80% with oedema is kwashiorkor, without is undernutrition; under 60% with oedema is marasmic kwashiorkor, without is marasmus).",
        "In adults **BMI** is weight in kilograms divided by height in metres squared: WHO calls under 18.5 underweight (chronic energy deficiency grades I 17-18.49, II 16-16.99, III under 16), 25-29.9 overweight and 30 or more obese; the **Asian-Indian cut-offs (consensus 2009) are 23 for overweight and 25 for obesity**, with a waist circumference of 90 cm in men and 80 cm in women defining abdominal obesity.",
        "Growth monitoring is the programme's core act: every child is weighed monthly at the anganwadi, plotted on the MCP card, and entered in the **Poshan Tracker** (2021); a flattening or falling curve is acted upon before the child crosses a Z-score line.",
      ],
    },
    {
      heading: "Requirements, the balanced diet and the ICMR-NIN 2020 numbers",
      points: [
        "The **ICMR-NIN Nutrient Requirements for Indians (2020)** define the reference man as 65 kg and the reference woman as 55 kg (aged 19-39), and give both an Estimated Average Requirement and a Recommended Dietary Allowance; energy for a sedentary man is **2110 kcal** and a sedentary woman **1660 kcal**, rising to 2710 and 2130 kcal for moderate work.",
        "**Pregnancy adds 350 kcal** per day in the second and third trimesters and lactation adds **600 kcal** for the first six months and 520 kcal thereafter; protein RDA is 0.83 g/kg (54 g for the reference man, 46 g for the reference woman) with an extra 9.5-22 g in pregnancy by trimester.",
        "Iron RDA is **19 mg for men, 29 mg for women, 27 mg in pregnancy** and 23 mg in lactation; calcium 1000 mg for adults and 1200 mg in lactation; folate 300 mcg in men, 220 mcg in women and 570 mcg in pregnancy; iodine 140 mcg in adults and 220 mcg in pregnancy; vitamin A about 1000 mcg RAE for men and 840 mcg for women.",
        "The **ICMR-NIN Dietary Guidelines for Indians (2024)** give 17 guidelines and the My Plate model for 2000 kcal: cereals and millets no more than 45% of energy, pulses and eggs 14-15%, at least 400 g of vegetables and fruit, visible fat 27 g, **salt under 5 g** and free sugars under 5% of energy, with a warning against ultra-processed food and protein supplements.",
        "A **balanced diet** provides all nutrients in adequate amounts and proportion, with a small safety margin, and the Indian answer describes it in terms of cereal-pulse combinations (the amino acid complementation of dal and rice), green leafy vegetables, milk or curd, and fruit, adjusted for region and income.",
        "Nutritional anaemia cut-offs (WHO 2011, used by AMB): haemoglobin below 11 g/dL in children 6-59 months and in pregnancy, below 11.5 in children 5-11, below 12 in adolescents 12-14 and non-pregnant women, below 13 in men; **severe anaemia is below 7 g/dL** in pregnancy and children and below 8 in other adults.",
      ],
    },
    {
      heading: "Managing the malnourished child: facility and community",
      points: [
        "Every child with SAM is examined for **complications** - bilateral oedema, failed appetite test, danger signs (lethargy, convulsions, inability to feed), pneumonia, severe dehydration, hypothermia, hypoglycaemia, severe anaemia - and any one of these means admission to a **Nutrition Rehabilitation Centre (NRC)** under the MoHFW facility-based care guidelines (2011).",
        "The WHO **ten steps** in the stabilisation phase: treat or prevent hypoglycaemia, hypothermia and dehydration (ReSoMal, not standard ORS), correct electrolyte imbalance, treat infection with antibiotics for all (amoxicillin if uncomplicated; ampicillin and gentamicin if admitted), give micronutrients (vitamin A, zinc, folic acid, but **iron only after the child is gaining weight**), start cautious feeding with **F-75** (75 kcal/100 mL), then in the rehabilitation phase catch-up growth with **F-100** (100 kcal/100 mL, 150-220 kcal/kg/day), sensory stimulation and preparation for follow-up.",
        "The **Protocol for Management of Malnutrition in Children (MoWCD, October 2023)** brings community management into the programme: a child with SAM who passes the appetite test and has no complications is managed at the anganwadi with **energy-dense nutritious food** or RUTF-equivalent, weekly follow-up by the ASHA and AWW, amoxicillin, deworming and counselling, and referred if weight is static for two consecutive visits.",
        "Discharge from the NRC requires 15% weight gain or a weight-for-height above -2 SD, absence of oedema for two weeks, a good appetite and a mother trained in feeding, followed by four fortnightly visits; **refeeding syndrome** - hypophosphataemia, cardiac failure and death in the first week of over-enthusiastic feeding - is why F-75 starts at 100 kcal/kg/day and rises gradually.",
        "Kwashiorkor presents with oedema, a flaky-paint dermatosis, sparse depigmented hair, hepatomegaly and apathy at a weight that may look normal; marasmus with severe wasting, an old-man face and no oedema; both are the same disease of inadequate food and repeated infection, and the presence of oedema, not the weight, decides the diagnosis of SAM.",
        "Prevention is infant and young child feeding: initiation within one hour, **exclusive breastfeeding for six months**, complementary feeding from six months with continued breastfeeding to two years (the MAA programme, 2016), full immunisation, and the growth-monitoring visit where the anganwadi worker actually looks at the curve.",
      ],
    },
    {
      heading: "The nutrition programmes and their doses",
      points: [
        "**ICDS**, launched on 2 October 1975 and now delivered as **Saksham Anganwadi and Poshan 2.0** (2021-22 onwards, merging Anganwadi Services, the Scheme for Adolescent Girls and POSHAN Abhiyaan), provides six services through one anganwadi per 400-800 population: **supplementary nutrition, immunisation, health check-up, referral, pre-school non-formal education and nutrition and health education**, for children under six, pregnant and lactating women, and adolescent girls in aspirational districts.",
        "Supplementary nutrition norms (revised 2017) are **500 kcal and 12-15 g protein for children 6-72 months, 800 kcal and 20-25 g protein for severely malnourished children, and 600 kcal and 18-20 g protein for pregnant and lactating women**, for 300 days a year; POSHAN Abhiyaan (8 March 2018) set targets of a 2 percentage point fall per year in stunting, underweight and low birth weight and 3 points in anaemia, with Poshan Maah every September.",
        "**PM POSHAN** (September 2021, formerly the Mid-Day Meal Scheme of 1995) provides a hot cooked meal to children in Bal Vatika and classes I to VIII in government and aided schools: **450 kcal and 12 g protein at primary level, 700 kcal and 20 g protein at upper primary**, with fortified rice, school nutrition gardens and Tithi Bhojan.",
        "**Anaemia Mukt Bharat (2018)** uses the **6 x 6 x 6 strategy**: six beneficiaries (children 6-59 months, 5-9 years, adolescents 10-19, women 20-49, pregnant and lactating women), six interventions (prophylactic IFA, deworming, year-round communication including delayed cord clamping, digital testing and treatment, mandatory fortification of salt with iron and rice with iron, and addressing malaria, haemoglobinopathies and fluorosis in endemic areas) and six institutional mechanisms including the AMB dashboard.",
        "AMB doses: **6-59 months, 1 mL IFA syrup (20 mg elemental iron and 100 mcg folic acid) twice a week; 5-9 years, one pink tablet (45 mg and 400 mcg) weekly; 10-19 years, one blue tablet (60 mg and 500 mcg) weekly; women 20-49, one red tablet (60 mg and 500 mcg) weekly; pregnant women, one red tablet daily from the fourth month for 180 days and 180 days after delivery**; treatment of mild and moderate anaemia in pregnancy is two tablets daily, and severe anaemia gets intravenous iron or transfusion.",
        "**National Deworming Day** (10 February and 10 August) gives albendazole to everyone aged 1-19 - **200 mg (half a tablet, crushed) at 1-2 years and 400 mg from 2 to 19 years** - and pregnant women receive 400 mg once in the second trimester; **vitamin A prophylaxis** is 1 lakh IU at 9 months with MR-1, then **2 lakh IU every six months from 16 months to 5 years - nine doses in all**; **NIDDCP** (1992, from the National Goitre Control Programme of 1962) mandates universal salt iodisation at **30 ppm at production and 15 ppm at the consumer**, with goitre in more than 5% of 6-12 year olds or a median urinary iodine below 100 mcg/L defining a deficient district.",
      ],
    },
    {
      heading: "Deficiency diseases and food toxins that appear in the paper",
      points: [
        "**Xerophthalmia** is a public health problem when night blindness exceeds 1% or Bitot's spots 0.5% in children aged 24-71 months; treat any case, and every child with measles or SAM, with **2 lakh IU vitamin A on day 1, day 2 and after 2-4 weeks** (1 lakh IU at 6-12 months, 50,000 IU under 6 months) - corneal xerosis or ulceration is an emergency because the cornea can melt in days.",
        "Rickets (calcium and vitamin D; craniotabes, rachitic rosary, wrist widening), scurvy (vitamin C; bleeding gums, perifollicular haemorrhage), beriberi (thiamine; polished rice, neuropathy and cardiac failure), pellagra (niacin; maize and jowar diets, dermatitis-diarrhoea-dementia) and megaloblastic anaemia (folate and B12; vegetarian diets, pregnancy) are answered as cause, three signs, and the programme or food that prevents them.",
        "**Lathyrism** - spastic paraplegia from **beta-oxalyl-amino-alanine (BOAA)** in Lathyrus sativus (khesari dal) eaten as more than a third of the diet for months - is prevented by the ban on khesari under the Food Safety and Standards Act, detoxification by parboiling or steeping in hot water, and vitamin C.",
        "**Epidemic dropsy** - bilateral pitting oedema, diarrhoea, glaucoma and cardiac failure from **sanguinarine in Argemone mexicana oil** adulterating mustard oil - is detected by the nitric acid test and is an outbreak to be reported; **endemic ascites** follows pyrrolizidine alkaloids from Crotalaria seeds in millet; **aflatoxin** from Aspergillus flavus on stored groundnuts causes hepatitis and hepatocellular carcinoma; ergot on bajra causes ergotism.",
        "**Fluorosis** occurs where drinking water contains more than 1.5 mg/L fluoride (dental mottling, then skeletal fluorosis with a stiff spine and genu valgum) and is addressed by the National Programme for Prevention and Control of Fluorosis (2008), alternative water sources and defluoridation by the Nalgonda technique.",
        "**Food fortification** under the FSSAI standards (2018, the +F logo) covers wheat flour and rice with iron, folic acid and B12, edible oil and milk with vitamins A and D, and double fortified salt with iodine and iron; fortified rice is now supplied through PDS, ICDS and PM POSHAN as the AMB mandatory fortification arm.",
      ],
    },
  ],
  tables: [
    {
      heading: "Anthropometric definitions in the child under five (WHO 2006 standards)",
      columns: ["Index", "Cut-off", "Term", "What it reflects"],
      rows: [
        ["Weight-for-height", "Below -2 SD / below -3 SD", "Wasting / severe wasting", "Acute undernutrition, current"],
        ["Height-for-age", "Below -2 SD / below -3 SD", "Stunting / severe stunting", "Chronic undernutrition, first 1000 days"],
        ["Weight-for-age", "Below -2 SD / below -3 SD", "Underweight / severe underweight", "Composite of acute and chronic"],
        ["MUAC (6-59 months)", "Below 11.5 cm / 11.5-12.4 cm", "SAM / MAM", "Screening tool, age independent"],
        ["Bilateral pitting oedema", "Present", "SAM (oedematous)", "Kwashiorkor regardless of weight"],
        ["BMI-for-age (5-19 years)", "Above +1 SD / above +2 SD", "Overweight / obesity", "Adolescent overnutrition"],
      ],
    },
    {
      heading: "Anaemia Mukt Bharat prophylactic doses",
      columns: ["Beneficiary", "Preparation", "Dose and frequency"],
      rows: [
        ["6-59 months", "IFA syrup, 20 mg iron + 100 mcg folic acid per mL", "1 mL twice a week"],
        ["5-9 years", "Pink tablet, 45 mg iron + 400 mcg folic acid", "One tablet weekly"],
        ["10-19 years", "Blue tablet, 60 mg iron + 500 mcg folic acid", "One tablet weekly"],
        ["Women 20-49 years", "Red tablet, 60 mg iron + 500 mcg folic acid", "One tablet weekly"],
        ["Pregnant women", "Red tablet, 60 mg iron + 500 mcg folic acid", "One tablet daily from 4th month for 180 days"],
        ["Lactating women", "Red tablet, 60 mg iron + 500 mcg folic acid", "One tablet daily for 180 days after delivery"],
        ["Deworming, 1-19 years", "Albendazole", "200 mg at 1-2 years, 400 mg from 2 years, twice a year"],
      ],
    },
  ],
  redFlags: [
    "A child with SAM who has oedema, fails the appetite test, or has any danger sign, pneumonia, severe dehydration, hypothermia or hypoglycaemia needs admission to the NRC the same day, not community management.",
    "Night blindness, Bitot's spots or any corneal haziness in a child is a vitamin A emergency: give 2 lakh IU immediately and refer, because corneal ulceration can perforate within days.",
    "Haemoglobin below 7 g/dL in a pregnant woman, or any anaemia with breathlessness at rest or after 34 weeks, needs referral for intravenous iron or transfusion, not another month of oral tablets.",
    "Bilateral pitting oedema with diarrhoea in several members of a family using a new batch of cooking oil is epidemic dropsy until proved otherwise - stop the oil and notify.",
    "Weight loss or a falling growth curve in a child on supplementary feeding demands a search for tuberculosis, HIV and coeliac disease, not a larger ration.",
    "Rapid refeeding of a severely malnourished child with breathlessness, oedema and a falling phosphate in the first week is refeeding syndrome - slow the feeds and refer.",
  ],
  pearls: [
    "SAM is any one of weight-for-height below -3 SD, MUAC below 11.5 cm or bilateral pitting oedema; oedema alone makes the diagnosis whatever the weight.",
    "Stunting is chronic, wasting is acute, underweight is both - and the first 1000 days decide the first.",
    "Iron is withheld in the stabilisation phase of SAM and started only once the child is gaining weight on F-100.",
    "AMB syrup twice a week for under-fives, pink weekly for 5-9, blue weekly for adolescents, red weekly for women and red daily in pregnancy.",
    "Nine doses of vitamin A: 1 lakh IU at 9 months, then 2 lakh IU every six months to 5 years.",
    "Salt must carry 30 ppm iodine at production and 15 ppm at the consumer; goitre in more than 5% of schoolchildren defines an endemic district.",
  ],
  theory: [
    {
      id: "preventive-nutrition-programmes-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Describe the major nutritional problems of India with their current magnitude, and discuss the national programmes that address them, including the role of the family physician.",
      openingLines: [
        "India's nutritional problems are a double burden: protein-energy malnutrition and micronutrient deficiencies - iron, vitamin A and iodine - in children and women, alongside rising overweight and diet-related non-communicable disease in adults.",
        "NFHS-5 (2019-21) puts stunting at 35.5%, wasting at 19.3% and underweight at 32.1% in children under five, anaemia at 67.1% in children and 57% in women, and overweight or obesity at about 23-24% of adults.",
      ],
      answer: [
        {
          heading: "1. Protein-energy malnutrition",
          points: [
            "Magnitude: stunting 35.5%, wasting 19.3%, severe wasting 7.7%, underweight 32.1%, low birth weight about 18% (NFHS-5); only 11.3% of children 6-23 months get a minimum acceptable diet.",
            "Causes: inadequate complementary feeding, repeated infection, maternal undernutrition and anaemia, poor sanitation, poverty and low maternal education.",
            "Programmes: Saksham Anganwadi and Poshan 2.0 (ICDS six services, supplementary nutrition 500 kcal/12-15 g protein, 800 kcal/20-25 g for the severely malnourished), PM POSHAN in schools (450/700 kcal), MAA for breastfeeding, NRCs for complicated SAM and the 2023 community management protocol.",
          ],
        },
        {
          heading: "2. Nutritional anaemia",
          points: [
            "Magnitude: 67.1% of children 6-59 months, 57% of women 15-49, 52.2% of pregnant women (NFHS-5, 2019-21).",
            "Programme: Anaemia Mukt Bharat (2018) with the 6 x 6 x 6 strategy - prophylactic IFA by age group, biannual deworming, fortification, digital haemoglobin testing and treatment, and control of malaria and haemoglobinopathies.",
          ],
        },
        {
          heading: "3. Vitamin A deficiency",
          points: [
            "Xerophthalmia is now uncommon clinically but subclinical deficiency persists; a public health problem if night blindness exceeds 1% in 24-71 month olds.",
            "Programme: nine prophylactic doses under the UIP (1 lakh IU at 9 months, 2 lakh IU six-monthly to 5 years), treatment doses for measles, SAM and xerophthalmia, and fortification of oil and milk.",
          ],
        },
        {
          heading: "4. Iodine deficiency disorders",
          points: [
            "Goitre, cretinism, and loss of IQ; over 200 districts were endemic historically.",
            "Programme: NIDDCP (1992) - universal salt iodisation (30 ppm production, 15 ppm consumer), ban on non-iodised salt for edible use, monitoring with salt testing kits and urinary iodine surveys; 94.3% of households now use iodised salt.",
          ],
        },
        {
          heading: "5. Overnutrition and other problems",
          points: [
            "Overweight in 24% of women and 22.9% of men; addressed through NP-NCD screening at 30 years, the Eat Right India movement, the 2024 NIN Dietary Guidelines, and taxation and labelling of ultra-processed food.",
            "Fluorosis (NPPCF, 2008), lathyrism and epidemic dropsy (food safety enforcement under FSSAI), and food adulteration.",
          ],
        },
        {
          heading: "6. Role of the family physician",
          points: [
            "Growth monitoring and MUAC at every child contact, MCP card review, correction of feeding practices, IFA and deworming, vitamin A with vaccination, screening of pregnant women for anaemia and gestational diabetes, and referral of complicated SAM to the NRC.",
            "Community: supporting the anganwadi worker, school health under RBSK, Poshan Maah activities, salt testing, and reporting of clusters of oedema or blindness as outbreaks.",
          ],
        },
      ],
      mustDraw: [
        "A table of problem against magnitude (dated) against programme against key intervention.",
        "The UNICEF conceptual framework of malnutrition: immediate (diet, disease), underlying (food, care, health environment) and basic causes.",
      ],
      markSplit: [
        { part: "Magnitude of each problem with dated sources", marks: 3 },
        { part: "Protein-energy malnutrition and its programmes", marks: 2 },
        { part: "Anaemia, vitamin A and iodine programmes with doses", marks: 3 },
        { part: "Overnutrition and other problems", marks: 1 },
        { part: "Role of the family physician", marks: 1 },
      ],
      keywords: ["NFHS-5", "stunting", "wasting", "Anaemia Mukt Bharat", "Poshan 2.0", "PM POSHAN", "NIDDCP", "vitamin A"],
    },
    {
      id: "preventive-nutrition-programmes-t2",
      paper: "IV",
      kind: "short-note",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Write a short note on Anaemia Mukt Bharat.",
      openingLines: [
        "Anaemia Mukt Bharat, launched in 2018 under the POSHAN Abhiyaan, is the national strategy to reduce anaemia by three percentage points a year among children, adolescents and women of reproductive age through a life-cycle approach.",
        "It rests on the 6 x 6 x 6 strategy - six beneficiary groups, six interventions and six institutional mechanisms - and is monitored on a dedicated dashboard.",
      ],
      answer: [
        {
          heading: "Six beneficiaries",
          points: ["Children 6-59 months; children 5-9 years; adolescents 10-19 years; women of reproductive age 20-49 years; pregnant women; lactating women."],
        },
        {
          heading: "Six interventions",
          points: [
            "Prophylactic iron-folic acid: syrup 1 mL twice weekly at 6-59 months; pink tablet weekly at 5-9 years; blue tablet weekly at 10-19 years; red tablet weekly for women 20-49 and daily for 180 days in pregnancy and 180 days after delivery.",
            "Deworming: albendazole twice a year on National Deworming Day for 1-19 years and once in the second trimester of pregnancy.",
            "Intensified year-round communication including delayed cord clamping, dietary diversity and compliance.",
            "Testing with digital haemoglobinometers and treatment - two IFA tablets daily for mild and moderate anaemia in pregnancy, intravenous iron or transfusion for severe anaemia.",
            "Mandatory fortification: double fortified salt, fortified rice and wheat flour through PDS, ICDS and PM POSHAN.",
            "Addressing non-nutritional causes in endemic pockets: malaria, haemoglobinopathies, fluorosis.",
          ],
        },
        {
          heading: "Six institutional mechanisms",
          points: [
            "Intra-ministerial coordination, a National Anaemia Mukt Bharat Unit, a National Centre of Excellence and Advanced Research on Anaemia Control, convergence with other ministries, strengthened supply chain, and the AMB dashboard and digital portal.",
          ],
        },
        {
          heading: "Cut-offs and monitoring",
          points: [
            "Anaemia: haemoglobin below 11 g/dL in under-fives and pregnancy, below 12 in non-pregnant women, below 13 in men; severe below 7 in pregnancy.",
            "Coverage indicators reported on HMIS; NFHS-5 (2019-21) showed anaemia in 57% of women and 67.1% of children, the baseline against which the programme is judged.",
          ],
        },
      ],
      mustDraw: ["A 6 x 6 x 6 grid: beneficiaries, interventions and institutional mechanisms, with the IFA dose beside each beneficiary."],
      markSplit: [
        { part: "Launch, aim and the 6 x 6 x 6 frame", marks: 1 },
        { part: "Beneficiaries with correct IFA doses", marks: 2 },
        { part: "Other interventions and mechanisms", marks: 1 },
        { part: "Cut-offs and current magnitude", marks: 1 },
      ],
      keywords: ["Anaemia Mukt Bharat", "IFA", "6x6x6", "deworming", "fortification", "haemoglobin cut-off"],
    },
  ],
  mcqs: [
    {
      id: "preventive-nutrition-programmes-q1",
      stem: "A 30-month-old girl weighs 8.0 kg and is 82 cm tall. The WHO median weight for a girl of 82 cm is 10.2 kg with a standard deviation of 1.0 kg. Her MUAC is 12.0 cm and she has no oedema. How is she classified?",
      options: ["Normal nutrition", "Moderate acute malnutrition", "Severe acute malnutrition", "Severe stunting", "Underweight only"],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "Weight-for-height Z-score = (observed - median)/SD = (8.0 - 10.2)/1.0 = -2.2, which lies between -3 and -2 SD, and her MUAC of 12.0 cm lies in the 11.5-12.4 cm band; with no oedema, both criteria place her in moderate acute malnutrition. SAM would require a Z-score below -3, MUAC below 11.5 cm or oedema, none of which she has. Stunting cannot be judged because height-for-age has not been given, and weight-for-age alone is not asked. She is managed at the anganwadi with supplementary nutrition, deworming, IFA, feeding counselling and fortnightly weight checks, with referral if she fails to gain.",
    },
    {
      id: "preventive-nutrition-programmes-q2",
      stem: "A 34-year-old man weighs 62 kg and is 160 cm tall. According to the Asian-Indian consensus cut-offs his BMI category is:",
      options: ["Underweight", "Normal", "Overweight", "Obese", "Cannot be classified without waist circumference"],
      difficulty: "easy",
      answer: 2,
      explanation:
        "BMI = 62 / (1.6 x 1.6) = 62 / 2.56 = 24.2 kg/m2. By the WHO international classification this is normal (18.5-24.9), but the Asian-Indian consensus (2009), which the NP-NCD guidelines follow, sets overweight at 23-24.9 and obesity at 25 or more because Indians develop diabetes and coronary disease at lower BMI and higher body fat. He is therefore overweight and qualifies for lifestyle counselling and glucose testing. Waist circumference (abdominal obesity at 90 cm or more in men) adds risk information but is not needed to classify BMI.",
    },
    {
      id: "preventive-nutrition-programmes-q3",
      stem: "Under the Universal Immunisation Programme and the vitamin A prophylaxis schedule, the total number of vitamin A doses a child should receive by the age of 5 years is:",
      options: ["5", "7", "9", "10", "12"],
      difficulty: "easy",
      answer: 2,
      explanation:
        "The first dose of 1 lakh IU is given at 9 months with the first measles-rubella vaccine; the second dose of 2 lakh IU is given at 16-18 months with MR-2 and the DPT booster, and thereafter 2 lakh IU every six months up to 5 years - doses 3 to 9 at 24, 30, 36, 42, 48, 54 and 60 months. That makes nine doses in all, of which the first eight fall before the fifth birthday and the ninth at it. The total prophylactic amount is 17 lakh IU. Therapeutic dosing for xerophthalmia, measles and SAM is separate: 2 lakh IU on day 1, day 2 and 2-4 weeks later, halved between 6 and 12 months.",
    },
    {
      id: "preventive-nutrition-programmes-q4",
      stem: "An 18-month-old child is brought to the anganwadi on National Deworming Day. The correct dose of albendazole is:",
      options: ["100 mg suspension", "200 mg (half tablet, crushed)", "400 mg (one tablet, crushed)", "400 mg twice daily for 3 days", "Deworming is not given below 2 years"],
      difficulty: "easy",
      answer: 1,
      explanation:
        "National Deworming Day (10 February and 10 August) covers all children and adolescents aged 1-19 years. Children aged 1-2 years receive 200 mg of albendazole - half of the 400 mg chewable tablet, crushed and mixed with water - and those aged 2-19 years receive the full 400 mg tablet, chewed. Deworming below one year is not part of the programme. The three-day regimen is for neurocysticercosis or hydatid disease, not intestinal helminths. Pregnant women receive a single 400 mg dose in the second trimester under Anaemia Mukt Bharat.",
    },
    {
      id: "preventive-nutrition-programmes-q5",
      stem: "A pregnant woman at 22 weeks has a haemoglobin of 9.2 g/dL on a digital haemoglobinometer at the sub-centre. Under Anaemia Mukt Bharat the correct management is:",
      options: [
        "One IFA tablet (60 mg iron) daily for 180 days",
        "Two IFA tablets (120 mg iron) daily, recheck haemoglobin after a month, then continue prophylaxis",
        "Intravenous iron sucrose",
        "Blood transfusion",
        "Weekly IFA as for non-pregnant women",
      ],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "A haemoglobin of 9.2 g/dL in pregnancy is moderate anaemia (7-9.9 g/dL; mild is 10-10.9). AMB directs two IFA tablets a day, each 60 mg elemental iron and 500 mcg folic acid, with deworming, dietary advice and a repeat haemoglobin after four weeks; once the haemoglobin normalises she continues one tablet daily to complete the 180-day prophylaxis and another 180 days after delivery. One tablet daily is the prophylactic dose for a non-anaemic woman. Intravenous iron is used for severe anaemia (below 7 g/dL), for intolerance or non-response to oral iron, or when there is too little time before delivery; transfusion is reserved for haemoglobin below 5 g/dL, or below 7 near term or with cardiac failure.",
    },
    {
      id: "preventive-nutrition-programmes-q6",
      stem: "Several members of a household develop bilateral pitting oedema of the legs, diarrhoea and breathlessness two weeks after buying mustard oil from a new vendor; one has raised intraocular pressure. The toxin responsible is:",
      options: ["Beta-oxalyl-amino-alanine", "Sanguinarine", "Aflatoxin", "Pyrrolizidine alkaloids", "Ergotamine"],
      difficulty: "easy",
      answer: 1,
      explanation:
        "This is epidemic dropsy, caused by sanguinarine in the seed oil of Argemone mexicana used to adulterate mustard oil; it produces capillary dilatation and leak with oedema, diarrhoea, glaucoma and high-output cardiac failure, and clusters in households sharing the oil. Beta-oxalyl-amino-alanine in khesari dal causes lathyrism (spastic paraplegia), aflatoxin from mouldy groundnuts causes hepatitis and hepatocellular carcinoma, pyrrolizidine alkaloids from Crotalaria cause endemic ascites through hepatic veno-occlusive disease, and ergot on bajra causes ergotism with gangrene and convulsions. The oil is tested with the nitric acid test, withdrawn and the outbreak notified to the food safety officer.",
    },
  ],
  cards: [
    {
      id: "preventive-nutrition-programmes-c1",
      front: "Criteria for severe acute malnutrition, 6-59 months.",
      back: "Any one of: weight-for-height below -3 SD; MUAC below 11.5 cm; bilateral pitting oedema. MAM: -3 to -2 SD or MUAC 11.5-12.4 cm without oedema.",
    },
    {
      id: "preventive-nutrition-programmes-c2",
      front: "NFHS-5 (2019-21) child undernutrition figures.",
      back: "Stunting 35.5%, wasting 19.3%, severe wasting 7.7%, underweight 32.1%; anaemia 67.1% in 6-59 months, 57% in women 15-49, 52.2% in pregnancy.",
    },
    {
      id: "preventive-nutrition-programmes-c3",
      front: "Six services of ICDS and the supplementary nutrition norms.",
      back: "Supplementary nutrition, immunisation, health check-up, referral, pre-school education, nutrition and health education. 500 kcal/12-15 g protein for 6-72 months; 800 kcal/20-25 g for severely malnourished; 600 kcal/18-20 g for pregnant and lactating women.",
    },
    {
      id: "preventive-nutrition-programmes-c4",
      front: "PM POSHAN energy and protein norms.",
      back: "Primary (Bal Vatika to class V): 450 kcal, 12 g protein. Upper primary (VI-VIII): 700 kcal, 20 g protein. Replaced the Mid-Day Meal Scheme in September 2021.",
    },
    {
      id: "preventive-nutrition-programmes-c5",
      front: "Ten steps of SAM management - the two feeding formulas.",
      back: "Stabilisation: F-75 (75 kcal/100 mL) at 100 kcal/kg/day; rehabilitation: F-100 (100 kcal/100 mL) at 150-220 kcal/kg/day. Iron only after weight gain begins; ReSoMal not standard ORS for dehydration.",
    },
    {
      id: "preventive-nutrition-programmes-c6",
      front: "ICMR-NIN 2020: reference adult and energy for sedentary work.",
      back: "Reference man 65 kg, woman 55 kg. Sedentary man 2110 kcal, woman 1660 kcal. Pregnancy +350 kcal (2nd and 3rd trimester); lactation +600 kcal (0-6 months), +520 (6-12 months). Protein 0.83 g/kg.",
    },
    {
      id: "preventive-nutrition-programmes-c7",
      front: "Vitamin A: prophylactic schedule and treatment dose.",
      back: "1 lakh IU at 9 months, then 2 lakh IU six-monthly from 16 months to 5 years (nine doses). Treatment: 2 lakh IU day 1, day 2 and 2-4 weeks later; half at 6-12 months; quarter under 6 months.",
    },
    {
      id: "preventive-nutrition-programmes-c8",
      front: "Iodised salt standards and the definition of an endemic district.",
      back: "30 ppm iodine at production, 15 ppm at the consumer level. Endemic: goitre in more than 5% of children aged 6-12 years or median urinary iodine below 100 mcg/L.",
    },
  ],
  references: [
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - nutrition and health",
    "ICMR-NIN Nutrient Requirements for Indians: Recommended Dietary Allowances and Estimated Average Requirements, 2020; ICMR-NIN Dietary Guidelines for Indians, 2024",
    "National Family Health Survey-5 (2019-21), India report, IIPS and MoHFW, 2022",
    "Anaemia Mukt Bharat Operational Guidelines, MoHFW, 2018",
    "Protocol for Management of Malnutrition in Children, Ministry of Women and Child Development, October 2023; Operational Guidelines on Facility Based Management of Children with Severe Acute Malnutrition, MoHFW, 2011",
    "Mission Saksham Anganwadi and Poshan 2.0 Guidelines, Ministry of Women and Child Development, 2022; PM POSHAN Scheme Guidelines, Ministry of Education, 2021",
    "WHO Guideline on the prevention and management of wasting and nutritional oedema in infants and children, 2023",
  ],
});

topics.push({
  id: "preventive-water-sanitation-vector",
  title: "Water, sanitation, waste and vector control",
  oneLiner:
    "Safe water is water free of pathogens and harmful chemicals - achieved on a large scale by storage, filtration and chlorination to a free residual of 0.5 mg/L after one hour, and in the home by boiling, chlorine tablets or filters - and the same environmental logic runs through sanitary latrines, biomedical waste segregation and the integrated control of the mosquitoes, flies and sandflies that carry malaria, dengue, JE, filaria and kala-azar.",
  frequency: "common",
  keywords: [
    "safe water",
    "wholesome water",
    "chlorination",
    "residual chlorine",
    "break point chlorination",
    "Horrock's apparatus",
    "bleaching powder",
    "slow sand filter",
    "rapid sand filter",
    "orthotolidine test",
    "IS 10500",
    "fluoride",
    "arsenic",
    "Jal Jeevan Mission",
    "Swachh Bharat Mission",
    "sanitary latrine",
    "twin pit latrine",
    "septic tank",
    "biomedical waste",
    "colour coding",
    "Aedes aegypti",
    "Anopheles culicifacies",
    "Breteau index",
    "house index",
    "temephos",
    "indoor residual spray",
    "LLIN",
    "API",
    "ABER",
    "NCVBDC",
    "integrated vector management",
    "kala-azar elimination",
    "lymphatic filariasis MDA",
  ],
  sections: [
    {
      heading: "Safe water: standards and the burden",
      points: [
        "**Safe and wholesome water** is free from pathogenic organisms and harmful chemicals, pleasant to taste, free from colour and odour, and usable for domestic purposes; the microbiological standard is **zero E. coli or thermotolerant coliforms in any 100 mL sample** (WHO Guidelines for Drinking-water Quality, 4th edition, 2011, updated 2022; BIS IS 10500:2012).",
        "Key Indian chemical limits (IS 10500:2012, acceptable and permissible): **fluoride 1.0 and 1.5 mg/L**, **nitrate 45 mg/L with no relaxation**, **arsenic 0.01 mg/L**, iron 0.3 mg/L, total dissolved solids 500 and 2000 mg/L, hardness 200 and 600 mg/L as calcium carbonate, pH 6.5-8.5, turbidity 1 and 5 NTU, and **residual chlorine at least 0.2 mg/L at the consumer's tap**.",
        "Water-borne infections are viral (hepatitis A and E, rotavirus, polio), bacterial (typhoid, cholera, shigella, E. coli), protozoal (giardia, amoebiasis, cryptosporidium) and helminthic (guinea worm - India certified free in February 2000); chemical hazards are **fluorosis** across Rajasthan, Telangana and Andhra Pradesh, **arsenicosis** in the Gangetic belt (raindrop pigmentation, keratosis, skin and bladder cancer) and infant methaemoglobinaemia from nitrate.",
        "The **Jal Jeevan Mission** (August 2019) aims at a functional household tap connection delivering **55 litres per capita per day** to every rural home; coverage rose from 17% of rural households in 2019 to about 80% by early 2025, and the family physician's contribution is to ask about the source and storage of water in every diarrhoea and jaundice consultation.",
        "**Hardness** - temporary from bicarbonates (removed by boiling) and permanent from sulphates and chlorides of calcium and magnesium (removed by ion exchange) - matters for soap consumption and scale, not health; the epidemiological interest is the inverse association between water hardness and cardiovascular mortality.",
        "A **sanitary well** is at least 15 m from any latrine or drain, lined to 3 m, with a parapet 70-75 cm high, a concrete platform 1 m wide sloping to a drain, a cover and a hand pump; the sanitary survey of the source is the first step in any water-borne outbreak.",
      ],
    },
    {
      heading: "Purification on a large scale",
      points: [
        "**Storage** in reservoirs allows sedimentation and natural purification - about 90% of bacteria die within 5-7 days - but storage beyond 10-14 days encourages algal growth, so the optimum is short.",
        "The **slow sand filter** is a bed of fine sand (effective size 0.2-0.3 mm) about 1 m deep under 1-1.5 m of supernatant water, filtering at **0.1-0.4 m3/m2/hour**; its purifying power is the **vital layer (Schmutzdecke)**, a slimy zoogleal film of algae, bacteria and diatoms that forms over 2-3 weeks and removes 99.9-99.99% of bacteria, and it is cleaned by scraping the top 1-2 cm when the loss of head rises.",
        "The **rapid sand filter** first coagulates the water with alum (5-40 mg/L) by rapid mixing, then flocculates it for about 30 minutes and settles it for 2-6 hours before filtering through coarser sand (effective size 0.4-0.7 mm) at **5-15 m3/m2/hour**; it is cleaned by back-washing, occupies a fraction of the land and is the filter of every Indian city, but it removes fewer bacteria and depends on chlorination that follows.",
        "**Chlorination** kills bacteria and most viruses but not spores, cysts or helminth ova; chlorine dissolves to hypochlorous acid (the active form, best below pH 7), the **chlorine demand** is the difference between the amount applied and the free residual after the contact period, and the standard is a **free residual chlorine of 0.5 mg/L after one hour of contact** (1 mg/L when viral disease such as hepatitis is feared).",
        "**Break point chlorination** is the dose at which all combined chlorine (chloramines) has been oxidised and free chlorine begins to appear; **superchlorination followed by dechlorination** (with sodium thiosulphate) is used in epidemics and for badly polluted water; residual chlorine is measured with the **orthotolidine (OT) test**, and the orthotolidine-arsenite (OTA) test separates free from combined chlorine.",
        "Other large-scale methods are ozonation, ultraviolet irradiation and, for high-TDS, fluoride and arsenic problems, reverse osmosis, activated alumina and the Nalgonda technique (alum and lime) for defluoridation; none leaves a residual, which is why chlorine remains the disinfectant of the distribution system.",
      ],
    },
    {
      heading: "Purification in the home and disinfection of a well",
      points: [
        "**Boiling** at a rolling boil kills all bacteria, spores, cysts and ova and removes temporary hardness, and is the safest household method; the water must be stored in the vessel it was boiled in, covered, and drawn with a ladle or tap, because recontamination in storage is the commonest failure.",
        "**Chemical disinfection:** bleaching powder (calcium hypochlorite, **about 33% available chlorine when fresh**, deteriorating in light and moisture), a 5% stock chlorine solution, **sodium dichloroisocyanurate (NaDCC) tablets - one 0.5 g tablet for 20 litres**, or 2% tincture of iodine at two drops per litre for 20-30 minutes; potassium permanganate is no longer recommended because it is a poor disinfectant that changes colour and taste.",
        "**Filtration** in the home uses ceramic candle filters (Pasteur-Chamberland, Berkefeld, Katadyn silver-impregnated), which remove bacteria but not viruses and need scrubbing and boiling of the candle weekly; **SODIS** (six hours of full sunlight in a clear PET bottle) and ultraviolet units are effective for small volumes; reverse osmosis units remove chemicals but waste water and strip minerals.",
        "**Disinfection of a well** uses **Horrock's apparatus** - six white cups, one black cup, two pipettes, starch-iodide indicator and a 2 g bleaching powder measure: a stock solution is made from 2 g of bleaching powder in the black cup, and the first white cup showing a distinct blue colour after 30 minutes gives the chlorine demand; **each cup number means 2.5 g of bleaching powder per 455 litres** of well water.",
        "The volume of a circular well is **pi x radius squared x depth of water** (in metres, giving cubic metres; multiply by 1000 for litres); the calculated bleaching powder is made into a paste, dissolved in a bucket, the lime allowed to settle, the supernatant poured into the well, the water agitated, and the well left for **one hour of contact** before use, preferably at night, aiming at a free residual of 0.5 mg/L.",
        "In an epidemic, chlorinate every source in the area, repeat well disinfection daily, distribute chlorine tablets and the message that water must be drawn with a long-handled ladle and stored in a narrow-mouthed covered vessel; a chlorinated well and a dirty storage pot still gives cholera.",
      ],
    },
    {
      heading: "Sanitation: latrines, sewage and solid waste",
      points: [
        "The **sanitation barrier** interrupts the faeco-oral routes - water, fingers, flies, food, soil - and a **sanitary latrine** is one in which excreta does not contaminate surface or ground water, is not accessible to flies or animals, is not handled fresh, and causes no nuisance from odour or unsightliness.",
        "The **twin-pit pour-flush latrine** (the Sulabh design) is the rural standard: a squatting pan with a 20 mm water seal and 25-30 degree slope, a Y-junction to two leach pits used alternately, each filling in about three years and resting for two, after which the contents are safe compost; the pit is at least 15 m from a well and the design needs 1-2 litres of water per flush.",
        "The **septic tank** serves the individual urban house: 20-30 litres capacity per person, retention time 24 hours, anaerobic digestion in the tank and aerobic purification of the effluent in a soak pit or drain field; disinfectants must never be poured in, and desludging is needed every one to three years.",
        "Municipal **sewage treatment** runs through primary (screening, grit chamber, primary sedimentation), secondary (trickling filter or activated sludge, then secondary sedimentation) and sludge digestion stages; treated effluent should have a **biochemical oxygen demand below 20 mg/L and suspended solids below 30 mg/L** (the Royal Commission standard) before discharge to a river; oxidation ponds are the low-cost alternative for small towns.",
        "**Swachh Bharat Mission** (2 October 2014) declared all villages open-defecation free on 2 October 2019, and **SBM-Grameen Phase II (2020-21 to 2024-25)** targets ODF Plus - solid and liquid waste management, greywater, faecal sludge and plastic; NFHS-5 (2019-21) still found about 19% of households with no toilet facility, so the physician asks.",
        "**Solid waste** under the Solid Waste Management Rules, 2016 is segregated at source into wet (biodegradable), dry (recyclable) and domestic hazardous streams, with composting, sanitary landfill (controlled tipping) and incineration as the disposal options; composting of refuse with night soil by the Bangalore (anaerobic) or Indore (aerobic) method is the classical rural answer.",
      ],
    },
    {
      heading: "Biomedical waste in the clinic",
      points: [
        "The **Bio-Medical Waste Management Rules, 2016** (amended 2018 and 2019) apply to every generator including single-doctor clinics and vaccination camps, require segregation at the point of generation into **four colour-coded streams**, storage for no more than **48 hours**, bar-coded bags, authorisation from the State Pollution Control Board, an annual report by 30 June, and transport to a Common Bio-medical Waste Treatment Facility within 75 km.",
        "**Yellow:** human and animal anatomical waste, soiled dressings and cotton, expired and discarded medicines, chemical waste and liquid, discarded linen and pre-treated microbiology waste - for incineration, plasma pyrolysis or deep burial; **red:** contaminated recyclable plastics - IV sets, tubing, catheters, syringes without needles, gloves - for autoclaving or microwaving and recycling.",
        "**White (translucent, puncture-proof):** all sharps including needles, needles with fixed syringes, scalpels and blades - autoclave or dry heat sterilisation, then shredding and recycling of the metal; **blue (cardboard box):** glassware, vials, ampoules and metallic implants - disinfection and recycling; general non-infectious waste goes to the municipal green or black bin under the solid waste rules.",
        "Needles are cut with a hub cutter or needle destroyer at the point of use and never recapped; every health worker is immunised against **hepatitis B and tetanus**, and a **needle-stick injury** is washed, reported and managed with hepatitis B immunoglobulin or vaccine and HIV post-exposure prophylaxis within 72 hours according to the source.",
        "The 2018 amendment set a phase-out of chlorinated plastic bags and gloves, mandatory pre-treatment of laboratory and blood waste on site, and bar-coding; the 2019 amendment extended the rules explicitly to all healthcare activity whatever the bed strength.",
        "For the paper, the four colours with two examples and the treatment for each is a reliable five-mark answer; the examiner's follow-up is always where the placenta goes (yellow), where the vaccine vial goes (blue if glass, red if plastic, and the vaccine itself after inactivation is yellow) and how long waste may be stored (48 hours).",
      ],
    },
    {
      heading: "Vectors and their control under NCVBDC",
      points: [
        "The **National Center for Vector Borne Diseases Control (NCVBDC, renamed from NVBDCP in 2023)** covers malaria, dengue, chikungunya, Japanese encephalitis, kala-azar and lymphatic filariasis; the vectors are **Anopheles culicifacies** (rural malaria, breeding in clean still water, resting on cattle-shed walls) and **Anopheles stephensi** (urban malaria, wells and tanks), **Aedes aegypti** (dengue, chikungunya, Zika - a day-biting container breeder whose eggs resist desiccation for a year and which flies no more than 100-400 m), **Culex tritaeniorhynchus** (JE, rice fields, pig amplifier) and **Culex quinquefasciatus** (filaria, polluted water), and **Phlebotomus argentipes** (kala-azar, damp cracks in mud walls).",
        "**Integrated vector management** (WHO, 2004) combines **environmental** control (source reduction, drainage, filling, weekly dry day, covering containers), **biological** control (larvivorous fish Gambusia affinis and Poecilia reticulata, Bacillus thuringiensis israelensis), **chemical** control (larvicides and adulticides), **personal protection** (nets, repellents, screening) and **legislation** (building by-laws that penalise Aedes breeding).",
        "Anti-larval chemicals: **temephos (Abate) at 1 mg/L (1 ppm)** is the only larvicide safe for drinking-water containers, with mineral oil and Paris green for non-potable collections; anti-adult measures are **indoor residual spraying - DDT 50% wettable powder at 1 g/m2 for two rounds a year, malathion 25% at 2 g/m2 for three rounds, alphacypermethrin 5% at 25 mg/m2 for two rounds** - each round protecting for 10-12 weeks, **long-lasting insecticidal nets** at one net per two persons, and **space spraying** (pyrethrum 0.1% indoors, malathion fogging outdoors) reserved for outbreaks.",
        "Malaria surveillance uses the **annual blood examination rate (target at least 10% of the population)**, the **annual parasite incidence (API, cases per 1000 per year)** and the slide positivity rate; **API below 1** defines a district in the elimination phase, India's National Framework for Malaria Elimination (2016) and Strategic Plan 2023-27 aim at zero indigenous cases by 2027 and certification by 2030, and reported cases fell to about 2.3 lakh in 2023.",
        "**Dengue entomological indices**: the **house index** (percentage of houses with Aedes larvae), the **container index** (percentage of water-holding containers positive) and the **Breteau index** (positive containers per 100 houses); a house index above 10 or a **Breteau index above 5** signals transmission risk and triggers source reduction, temephos and fogging within 24 hours, and 2.9 lakh dengue cases were reported in 2023.",
        "**Kala-azar** elimination (below 1 case per 10,000 population at block level) was reached across all blocks in 2023 with single-dose liposomal amphotericin B and pyrethroid IRS; **lymphatic filariasis** uses annual mass drug administration with DEC 6 mg/kg plus albendazole 400 mg, or triple-drug IDA (ivermectin, DEC, albendazole) in selected districts since 2018, with night blood surveys between 8.30 pm and midnight, a microfilaria rate below 1% as the target and elimination by 2027; **JE** is prevented by two doses of vaccine at 9 and 16-24 months in endemic districts and adult campaigns in the highest-burden districts.",
      ],
    },
  ],
  tables: [
    {
      heading: "Slow against rapid sand filtration",
      columns: ["Feature", "Slow sand filter", "Rapid sand filter"],
      rows: [
        ["Pre-treatment", "None (plain sedimentation)", "Coagulation with alum, flocculation, sedimentation"],
        ["Sand effective size", "0.2-0.3 mm", "0.4-0.7 mm"],
        ["Rate of filtration", "0.1-0.4 m3/m2/hour", "5-15 m3/m2/hour"],
        ["Purifying mechanism", "Vital layer (Schmutzdecke) - biological", "Mechanical straining and adsorption on floc"],
        ["Bacterial removal", "99.9-99.99%", "98-99%; relies on post-chlorination"],
        ["Cleaning", "Scraping top 1-2 cm of sand every 1-2 months", "Back-washing daily"],
        ["Land, cost, skill", "Large area, low cost, low skill", "Small area, high cost, skilled operation"],
      ],
    },
    {
      heading: "Biomedical Waste Management Rules, 2016: colour coding",
      columns: ["Colour and container", "Contents", "Treatment and disposal"],
      rows: [
        ["Yellow bag", "Anatomical waste, soiled dressings, expired medicines, chemical waste, discarded linen, pre-treated lab waste", "Incineration, plasma pyrolysis or deep burial"],
        ["Red bag", "Contaminated recyclable plastics - IV sets, tubing, catheters, gloves, syringes without needles", "Autoclave or microwave, then shredding and recycling"],
        ["White translucent puncture-proof container", "Sharps - needles, fixed-needle syringes, scalpels, blades", "Autoclave or dry heat, then shredding and metal recycling"],
        ["Blue cardboard box", "Glassware, vials, ampoules, metallic implants", "Disinfection (autoclave or hypochlorite) and recycling"],
      ],
    },
    {
      heading: "Malaria and dengue indicators the paper asks for",
      columns: ["Indicator", "Formula", "Target or threshold"],
      rows: [
        ["Annual blood examination rate (ABER)", "Blood slides examined / population x 100", "At least 10%"],
        ["Annual parasite incidence (API)", "Confirmed malaria cases / population x 1000", "Below 1 = elimination phase"],
        ["Slide positivity rate (SPR)", "Positive slides / slides examined x 100", "Falling trend"],
        ["House index", "Houses with Aedes larvae / houses inspected x 100", "Below 1 low risk, above 10 high risk"],
        ["Container index", "Positive containers / containers inspected x 100", "Falling trend"],
        ["Breteau index", "Positive containers / houses inspected x 100", "Above 5 = transmission risk"],
      ],
    },
  ],
  redFlags: [
    "E. coli detected in a public water source, or free residual chlorine below 0.2 mg/L at the tap during a diarrhoea cluster, means the supply is unsafe now - issue a boil-water advisory and superchlorinate the same day.",
    "A cluster of jaundice cases in one locality is hepatitis A or E from sewage-contaminated water until proved otherwise; test the source and report under IDSP before the second week of cases.",
    "Infant methaemoglobinaemia (a blue baby on well water) is nitrate poisoning from a contaminated shallow well - stop the water and refer for methylene blue.",
    "A Breteau index above 5 or a dengue case with warning signs in the area is the trigger for house-to-house source reduction within 24 hours, not the end of the season.",
    "Fever with encephalopathy in a child in a rice-growing district with pigs nearby is JE until proved otherwise and is reportable as acute encephalitis syndrome within 24 hours.",
    "A needle-stick injury in the clinic must be washed, reported and assessed for HIV post-exposure prophylaxis within 2 hours and never later than 72 hours, and for hepatitis B immunoglobulin within 24 hours.",
  ],
  pearls: [
    "Free residual chlorine of 0.5 mg/L after one hour of contact is the standard; 1 mg/L when viral disease is feared; at least 0.2 mg/L at the consumer's tap.",
    "Each Horrock's cup equals 2.5 g of bleaching powder per 455 litres; well volume is pi x r squared x depth in cubic metres, times 1000 for litres.",
    "The vital layer belongs to the slow sand filter; coagulation and back-washing belong to the rapid sand filter.",
    "Temephos at 1 ppm is the only larvicide for drinking-water containers; DDT is 1 g/m2 for two rounds, malathion 2 g/m2 for three.",
    "API below 1 per 1000 means elimination phase; Breteau above 5 means dengue risk; microfilaria rate below 1% is the filaria target.",
    "Yellow burns, red is recycled plastic, white is sharps, blue is glass - and nothing is stored beyond 48 hours.",
  ],
  theory: [
    {
      id: "preventive-water-sanitation-vector-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Describe the methods of purification of water on a small scale. How would you disinfect a village well with bleaching powder, and how would you confirm that the water is safe?",
      openingLines: [
        "Safe and wholesome water is free from pathogenic organisms and harmful chemicals, pleasant to taste and usable for domestic purposes, with zero E. coli in any 100 mL sample and a free residual chlorine of 0.5 mg/L after one hour of contact.",
        "Small-scale purification means the methods available to a household, a school, a camp or a village well: boiling, chemical disinfection, filtration and, for a well, chlorination with bleaching powder after measuring the chlorine demand.",
      ],
      answer: [
        {
          heading: "1. Household methods",
          points: [
            "Boiling: a rolling boil kills bacteria, spores, cysts and ova and removes temporary hardness; store in the same covered vessel and draw with a ladle or tap.",
            "Chemical disinfection: bleaching powder (33% available chlorine) as a stock solution; sodium dichloroisocyanurate tablets, 0.5 g per 20 litres; 2% tincture of iodine, two drops per litre with 20-30 minutes' contact; potassium permanganate is not recommended.",
            "Filtration: ceramic candle filters (Pasteur-Chamberland, Berkefeld, Katadyn) remove bacteria but not viruses and need weekly cleaning and boiling of the candle; SODIS in a clear PET bottle for six hours of full sun; ultraviolet units; reverse osmosis where fluoride, arsenic or salinity is the problem.",
            "Safe storage is part of purification: narrow-mouthed covered containers, a long-handled ladle, no dipping of hands or cups.",
          ],
        },
        {
          heading: "2. Disinfection of a well - step by step",
          points: [
            "Calculate the volume: pi x radius squared x depth of water (metres), giving cubic metres; multiply by 1000 for litres.",
            "Measure the chlorine demand with Horrock's apparatus: dissolve 2 g bleaching powder in the black cup, add one, two, three and so on drops of the stock solution to the six white cups filled with well water, wait 30 minutes, add starch-iodide; the first cup with a distinct blue colour gives the number.",
            "Calculate the dose: 2.5 g bleaching powder per 455 litres for each cup number - so if the third cup is the first to turn blue, 7.5 g per 455 litres.",
            "Prepare the dose as a paste, dilute in a bucket, allow the lime to settle for 5-10 minutes, pour the supernatant into the well, mix by drawing and returning water, and allow one hour of contact, ideally at night.",
            "Confirm a free residual chlorine of 0.5 mg/L by the orthotolidine test after one hour; repeat the disinfection daily during an epidemic.",
          ],
        },
        {
          heading: "3. Confirming that the water is safe",
          points: [
            "Sanitary survey of the well: distance from latrine and drains (at least 15 m), lining, parapet, platform, cover and hand pump.",
            "Residual chlorine by orthotolidine at one hour and at the point of use; the H2S strip test as a field screen for faecal contamination; presumptive coliform count by multiple-tube (MPN) or membrane filtration - zero E. coli per 100 mL.",
            "Chemical testing where relevant: fluoride (1.0-1.5 mg/L), nitrate (45 mg/L), arsenic (0.01 mg/L), iron and TDS against IS 10500:2012.",
          ],
        },
      ],
      mustDraw: [
        "A labelled diagram of a sanitary well showing distance from latrine, lining depth, parapet, platform and hand pump.",
        "Horrock's apparatus with the six white cups and one black cup, and the worked dose calculation for a 4 m diameter well with 5 m of water.",
      ],
      markSplit: [
        { part: "Definition of safe water and the standards", marks: 1 },
        { part: "Boiling, chemical disinfection, filtration and storage", marks: 4 },
        { part: "Well disinfection with volume, Horrock's test and dose", marks: 3 },
        { part: "Confirmation of safety", marks: 2 },
      ],
      keywords: ["water purification", "chlorination", "Horrock's apparatus", "bleaching powder", "residual chlorine", "sanitary well", "orthotolidine"],
    },
    {
      id: "preventive-water-sanitation-vector-t2",
      paper: "I",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the methods of mosquito control under integrated vector management, with the insecticide, dose and example for each.",
      openingLines: [
        "Integrated vector management (WHO, 2004) is the rational use of a combination of environmental, biological, chemical, personal-protective and legislative measures, selected on local entomological evidence, to reduce vector density below the level that sustains transmission.",
        "Measures are grouped as anti-larval (attacking the aquatic stage) and anti-adult (attacking the flying mosquito), with personal protection and legislation supporting both.",
      ],
      answer: [
        {
          heading: "Anti-larval measures",
          points: [
            "Environmental: source reduction - filling, draining and levelling; weekly emptying and scrubbing of coolers, tanks and flower pots (dry day); intermittent irrigation of rice fields; covering water containers; management of tyres and scrap.",
            "Chemical larvicides: temephos 1 ppm in drinking-water containers; mineral oil or Paris green on non-potable collections; insect growth regulators.",
            "Biological: larvivorous fish (Gambusia affinis, Poecilia reticulata) in wells, tanks and ponds; Bacillus thuringiensis israelensis.",
          ],
        },
        {
          heading: "Anti-adult measures",
          points: [
            "Indoor residual spraying: DDT 50% WP at 1 g/m2, two rounds a year; malathion 25% WP at 2 g/m2, three rounds; alphacypermethrin 5% WP at 25 mg/m2, two rounds; each round protects 10-12 weeks and coverage must exceed 80% of rooms.",
            "Space spraying for outbreaks: pyrethrum 0.1% indoors; malathion thermal fogging or ultra-low-volume spraying outdoors in the early morning or evening.",
            "Long-lasting insecticidal nets (deltamethrin or alphacypermethrin) at one net per two persons; screening of houses; genetic and Wolbachia methods under trial.",
          ],
        },
        {
          heading: "Personal protection and legislation",
          points: [
            "Repellents (DEET, picaridin), full-sleeved clothing, mosquito coils and vaporisers, and avoiding exposure at biting time - dusk for Anopheles and Culex, daytime for Aedes.",
            "Building by-laws and municipal acts that make Aedes breeding on premises punishable; entomological surveillance with house, container and Breteau indices to direct the response.",
          ],
        },
      ],
      mustDraw: ["A two-column table of anti-larval against anti-adult measures with the agent and dose for each."],
      markSplit: [
        { part: "Definition of IVM", marks: 1 },
        { part: "Anti-larval measures with temephos dose and fish species", marks: 2 },
        { part: "Anti-adult measures with IRS doses and LLIN", marks: 2 },
      ],
      keywords: ["integrated vector management", "temephos", "Gambusia", "indoor residual spray", "DDT", "LLIN", "Breteau index"],
    },
  ],
  mcqs: [
    {
      id: "preventive-water-sanitation-vector-q1",
      stem: "A circular village well has a diameter of 4 m and the depth of water is 5 m. With Horrock's apparatus the second cup is the first to show a distinct blue colour. Approximately how much bleaching powder is needed to disinfect the well?",
      options: ["345 g", "690 g", "1380 g", "3450 g", "6900 g"],
      difficulty: "hard",
      answer: 1,
      explanation:
        "Volume = pi x r squared x depth = 3.14 x 2 x 2 x 5 = 62.8 m3 = 62,800 litres. Each Horrock's cup number requires 2.5 g of bleaching powder per 455 litres, so the second cup means 5 g per 455 litres. Number of 455-litre units = 62,800 / 455 = about 138; 138 x 5 g = 690 g, roughly 0.7 kg. Taking only one cup gives 345 g (too little to leave a residual), and using the diameter instead of the radius in the formula quadruples the volume and gives the 2.7 kg-scale answers. The powder is made into a paste, diluted in a bucket, the lime allowed to settle, the supernatant poured in, and the well left for one hour before the residual chlorine is checked with orthotolidine.",
    },
    {
      id: "preventive-water-sanitation-vector-q2",
      stem: "During an entomological survey of a colony, 200 houses were inspected; Aedes larvae were found in 30 houses and in 45 water-holding containers in all. What is the Breteau index?",
      options: ["15", "22.5", "30", "45", "66.7"],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "The Breteau index is the number of positive containers per 100 houses inspected = 45 / 200 x 100 = 22.5. The house index is the percentage of houses positive = 30 / 200 x 100 = 15%, and 66.7 is the number of positive containers per 100 positive houses, which is not a standard index. A Breteau index above 5, or a house index above 10, indicates a risk of dengue transmission and calls for source reduction, temephos larviciding and fogging within 24 hours. The Breteau index is preferred because it combines houses and containers and correlates best with the risk of an outbreak.",
    },
    {
      id: "preventive-water-sanitation-vector-q3",
      stem: "The vital layer, or Schmutzdecke, which is responsible for most of the purification, is a feature of:",
      options: ["Rapid sand filter", "Slow sand filter", "Ceramic candle filter", "Reverse osmosis unit", "Sedimentation tank"],
      difficulty: "easy",
      answer: 1,
      explanation:
        "The slow sand filter purifies biologically through the vital layer - a slimy zoogleal film of algae, plankton, diatoms and bacteria that forms on the sand surface over two to three weeks and removes organic matter, holds back bacteria and oxidises ammonia. It is why the slow sand filter removes 99.9-99.99% of bacteria without chemicals, and why it is cleaned by scraping only the top 1-2 cm. The rapid sand filter has no vital layer; it depends on alum coagulation, mechanical straining and post-chlorination, and is cleaned by back-washing. Candle filters strain mechanically and RO uses a semi-permeable membrane.",
    },
    {
      id: "preventive-water-sanitation-vector-q4",
      stem: "A PHC serving a population of 50,000 examined 6000 blood slides in a year, of which 25 were positive for malaria parasites. Which statement is correct?",
      options: [
        "ABER is 8.3% and the area is not in the elimination phase",
        "API is 0.5 per 1000 and the area is in the elimination phase",
        "API is 4.2 per 1000 and intensified control is needed",
        "Slide positivity rate is 5%",
        "API cannot be calculated without the number of deaths",
      ],
      difficulty: "moderate",
      answer: 1,
      explanation:
        "Annual parasite incidence = confirmed cases / population x 1000 = 25 / 50,000 x 1000 = 0.5 per 1000, which is below 1 and places the area in the elimination phase under the National Framework for Malaria Elimination. Annual blood examination rate = 6000 / 50,000 x 100 = 12%, which meets the 10% target, so surveillance is adequate and the low API is credible. Slide positivity rate = 25 / 6000 x 100 = 0.42%, not 5%. The 4.2 per 1000 figure comes from dividing cases by slides instead of by population. Deaths are not part of the API formula.",
    },
    {
      id: "preventive-water-sanitation-vector-q5",
      stem: "In a family physician's clinic, used intravenous sets, contaminated gloves and syringes from which the needles have been removed should be discarded in the:",
      options: ["Yellow bag", "Red bag", "White translucent container", "Blue cardboard box", "Black bag"],
      difficulty: "easy",
      answer: 1,
      explanation:
        "Under the Bio-Medical Waste Management Rules, 2016, contaminated recyclable plastic - IV sets, tubing, catheters, gloves, syringes without needles, blood bags - goes into the red bag for autoclaving or microwaving followed by shredding and recycling. The yellow bag is for anatomical and soiled waste, expired medicines and chemical waste destined for incineration; the white translucent puncture-proof container is for sharps including needles and fixed-needle syringes; the blue box is for glass vials and ampoules; and the black or green bin is general municipal waste, which must never receive infectious material. Storage must not exceed 48 hours.",
    },
    {
      id: "preventive-water-sanitation-vector-q6",
      stem: "The larvicide recommended for use in drinking-water storage containers to control Aedes breeding is:",
      options: ["Paris green", "Mineral oil", "Temephos 1 ppm", "Malathion 5%", "DDT 1 g/m2"],
      difficulty: "easy",
      answer: 2,
      explanation:
        "Temephos (Abate), an organophosphate of very low mammalian toxicity, is the only larvicide approved for potable water at 1 mg/L (1 ppm), and it is the standard anti-larval measure for Aedes in overhead tanks, drums and coolers under NCVBDC. Paris green (copper aceto-arsenite) and mineral oil are for non-potable collections and are toxic or spoil the water. Malathion 5% is used as an adult fog or a residual spray at 2 g/m2, and DDT at 1 g/m2 is an indoor residual spray against resting adult Anopheles - neither is a larvicide for drinking water. Biological alternatives for containers are Bacillus thuringiensis israelensis and larvivorous fish in large tanks.",
    },
  ],
  cards: [
    {
      id: "preventive-water-sanitation-vector-c1",
      front: "Residual chlorine standards.",
      back: "Free residual 0.5 mg/L after one hour of contact (1 mg/L when viral disease is feared); at least 0.2 mg/L at the consumer's tap (IS 10500:2012). Measured by orthotolidine; OTA separates free from combined.",
    },
    {
      id: "preventive-water-sanitation-vector-c2",
      front: "Horrock's apparatus: components and the dose rule.",
      back: "Six white cups, one black cup, two pipettes, starch-iodide indicator, 2 g measure. First cup showing blue at 30 minutes gives the cup number; each cup = 2.5 g bleaching powder per 455 litres.",
    },
    {
      id: "preventive-water-sanitation-vector-c3",
      front: "Slow sand filter numbers.",
      back: "Sand 0.2-0.3 mm effective size, bed about 1 m, supernatant 1-1.5 m, rate 0.1-0.4 m3/m2/h, vital layer forms in 2-3 weeks, removes 99.9-99.99% bacteria, cleaned by scraping 1-2 cm.",
    },
    {
      id: "preventive-water-sanitation-vector-c4",
      front: "Key chemical limits in drinking water (IS 10500:2012).",
      back: "Fluoride 1.0 (permissible 1.5) mg/L; nitrate 45 mg/L no relaxation; arsenic 0.01 mg/L; TDS 500 (2000); hardness 200 (600); pH 6.5-8.5; E. coli 0 per 100 mL.",
    },
    {
      id: "preventive-water-sanitation-vector-c5",
      front: "Sanitary latrine - the four criteria.",
      back: "Excreta must not contaminate surface or ground water; must not be accessible to flies or animals; must not be handled fresh; must cause no nuisance from odour or unsightliness. Twin-pit pour-flush: 20 mm water seal, pits used alternately for about 3 years each.",
    },
    {
      id: "preventive-water-sanitation-vector-c6",
      front: "Biomedical waste colours in one line.",
      back: "Yellow - anatomical, soiled, expired drugs, chemical (incinerate). Red - contaminated plastics (autoclave, recycle). White - sharps (autoclave, shred). Blue - glass and implants (disinfect, recycle). Store no longer than 48 hours.",
    },
    {
      id: "preventive-water-sanitation-vector-c7",
      front: "Indoor residual spray doses and rounds.",
      back: "DDT 50% WP 1 g/m2, two rounds; malathion 25% WP 2 g/m2, three rounds; alphacypermethrin 5% WP 25 mg/m2, two rounds. Each round protects 10-12 weeks; needs over 80% room coverage.",
    },
    {
      id: "preventive-water-sanitation-vector-c8",
      front: "Elimination targets: malaria, kala-azar, filaria.",
      back: "Malaria: API below 1 per 1000, zero indigenous cases by 2027, certification by 2030. Kala-azar: below 1 per 10,000 at block level (reached 2023). Filaria: microfilaria rate below 1% after MDA, elimination by 2027.",
    },
  ],
  references: [
    "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - environment and health, arthropod-borne diseases",
    "WHO Guidelines for Drinking-water Quality, 4th edition incorporating the first and second addenda, 2022; Bureau of Indian Standards IS 10500:2012 Drinking Water Specification",
    "Bio-Medical Waste Management Rules, 2016, with amendments of 2018 and 2019, Ministry of Environment, Forest and Climate Change",
    "NCVBDC Operational Manual for Malaria Elimination in India, 2016; National Strategic Plan for Malaria Elimination 2023-2027",
    "NCVBDC National Guidelines for Prevention and Control of Dengue, 2023; Accelerated Plan for Elimination of Lymphatic Filariasis, 2018",
    "Jal Jeevan Mission Operational Guidelines, Ministry of Jal Shakti, 2019; Swachh Bharat Mission (Grameen) Phase II Guidelines, 2020",
  ],
});
