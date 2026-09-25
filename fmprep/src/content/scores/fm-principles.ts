import type { NoteTable } from "../../lib/types";

const scores: Record<string, NoteTable[]> = {
  "fm-principles-definition": [
    {
      heading: "Levels of prevention classification with family practice examples (Park 28e 2025)",
      columns: ["Level", "Aim and stage of disease", "Modes of intervention", "Family practice example"],
      rows: [
        ["Primordial", "Prevent emergence of risk factors in a population", "Lifestyle, social and environmental change", "School healthy-eating and activity, anti-tobacco messaging to children"],
        ["Primary", "Prevent disease onset in people with risk factors (prepathogenesis)", "Health promotion; specific protection", "Immunisation, BP and weight control, folic acid before pregnancy"],
        ["Secondary", "Early diagnosis and prompt treatment (early pathogenesis)", "Screening, case finding", "Opportunistic BP check, VIA cervical screening, NCD screening at 30+"],
        ["Tertiary", "Limit disability and restore function in established disease", "Disability limitation; rehabilitation", "Post-stroke physiotherapy, cardiac rehab, diabetic foot care"],
        ["Quaternary", "Protect patients from overmedicalisation and unnecessary harm", "Avoid overdiagnosis, overtreatment, excess tests", "Deprescribing, avoiding imaging in simple back pain (Jamoulle)"],
      ],
    },
  ],
  "fm-principles-consultation": [
    {
      heading: "Stages of change - transtheoretical model (Prochaska and DiClemente; OHCM 11e 2024)",
      columns: ["Stage", "Patient's position", "Clinician task"],
      rows: [
        ["Precontemplation", "No intention to change in the next 6 months", "Raise awareness, give information, build rapport - 5 Rs for tobacco"],
        ["Contemplation", "Intends to change within 6 months; ambivalent", "Motivational interviewing - explore pros and cons"],
        ["Preparation", "Intends to act within 30 days; has taken small steps", "Agree a quit date or plan, remove barriers"],
        ["Action", "Changed behaviour for under 6 months", "Support, pharmacotherapy, coping skills"],
        ["Maintenance", "Sustained change for over 6 months", "Relapse prevention, reinforce gains"],
        ["Relapse (recycling)", "Return to old behaviour", "Normalise; re-enter the cycle without blame"],
      ],
    },
    {
      heading: "SPIKES protocol stages for breaking bad news (Baile 2000; OHCM 11e 2024)",
      columns: ["Stage", "What to do", "Example phrase"],
      rows: [
        ["S - Setting", "Private room, sit down, family if wished, no interruptions, tissues", "Would you like anyone to be with you?"],
        ["P - Perception", "Find out what the patient already knows or suspects", "What have you been told so far?"],
        ["I - Invitation", "Ask how much the patient wants to know", "Would you like me to go through the results in detail?"],
        ["K - Knowledge", "Warning shot, then small chunks in plain language; check understanding", "I am afraid I have some bad news..."],
        ["E - Emotions", "Acknowledge emotion with empathic response; allow silence", "I can see this is a shock for you."],
        ["S - Strategy and summary", "Summarise, agree a plan, safety-net, arrange follow-up", "Let us talk about what happens next."],
      ],
    },
  ],
  "fm-principles-family-unit": [
    {
      heading: "Family life cycle stages (Duvall; Park 28e 2025)",
      columns: ["Stage", "Family position", "Primary care issues"],
      rows: [
        ["Stage 1", "Married couple without children", "Preconception care, contraception, relationship adjustment"],
        ["Stage 2", "Childbearing family (oldest child 0-30 months)", "Antenatal care, immunisation, postpartum depression"],
        ["Stage 3", "Family with preschool children (2.5-6 years)", "Growth, development, childhood infections"],
        ["Stage 4", "Family with schoolchildren (6-13 years)", "School health, learning difficulties, injuries"],
        ["Stage 5", "Family with teenagers (13-20 years)", "Adolescent health, substance use, sexual health, autonomy"],
        ["Stage 6", "Launching centre (first to last child leaving)", "Empty-nest adjustment, parental midlife illness"],
        ["Stage 7", "Middle-aged parents (empty nest to retirement)", "NCD screening, menopause, caring for ageing parents"],
        ["Stage 8", "Ageing family (retirement to death of both spouses)", "Chronic disease, bereavement, dependency, end-of-life care"],
      ],
    },
    {
      heading: "Types of families (Park 28e 2025)",
      columns: ["Type", "Composition", "Relevance"],
      rows: [
        ["Nuclear", "Married couple and their unmarried children", "Commonest in urban India; less support for care of elders"],
        ["Joint", "Several married brothers, wives and children under one head, shared kitchen and property", "Traditional; strong support, but decisions may rest with elders"],
        ["Three-generation", "Grandparents, parents and children living together", "Grandparents often key in child care and health decisions"],
        ["Extended", "Nuclear family plus other relatives (aunt, cousin)", "Wider support network"],
        ["Single-parent", "One parent with children (death, divorce, migration)", "Higher economic and psychosocial stress"],
        ["Blended (reconstituted)", "Couple with children from previous relationships", "Role and boundary conflicts"],
      ],
    },
  ],
  "fm-principles-records-audit": [
    {
      heading: "Stages of the clinical audit cycle (NICE Principles for Best Practice; HQIP 2020)",
      columns: ["Stage", "Task", "Example (diabetes clinic)"],
      rows: [
        ["1 - Choose topic", "Pick a common, costly or high-risk area where care can improve", "HbA1c control in type 2 diabetes"],
        ["2 - Set criteria and standards", "Evidence-based criterion and target percentage", "HbA1c recorded every 6 months in 90% of patients"],
        ["3 - Collect data", "Measure current practice against the standard", "Review 50 consecutive records"],
        ["4 - Compare and analyse", "Identify gaps and their causes", "Only 62% had HbA1c recorded"],
        ["5 - Implement change", "Agree and introduce changes", "Recall register, reminder on the card"],
        ["6 - Re-audit", "Measure again to close the loop", "Repeat after 6 months - audit is a cycle, not a line"],
      ],
    },
  ],
  "fm-principles-ebm": [
    {
      heading: "GRADE certainty of evidence levels (GRADE Working Group 2024)",
      columns: ["Certainty", "Meaning", "Usual starting evidence"],
      rows: [
        ["High", "Very confident the true effect lies close to the estimate", "Randomised trials start here"],
        ["Moderate", "Moderately confident; true effect likely close but may differ substantially", "RCTs downgraded one level"],
        ["Low", "Limited confidence; true effect may be substantially different", "Observational studies start here"],
        ["Very low", "Very little confidence; true effect likely substantially different", "Downgraded observational data, case series"],
      ],
    },
    {
      heading: "GRADE factors that change the certainty grading (GRADE Working Group 2024)",
      columns: ["Factor", "Direction", "Example"],
      rows: [
        ["Risk of bias", "Down 1-2", "Lack of blinding, allocation concealment"],
        ["Inconsistency", "Down 1-2", "Unexplained heterogeneity between trials"],
        ["Indirectness", "Down 1-2", "Different population, surrogate outcome"],
        ["Imprecision", "Down 1-2", "Wide confidence interval, few events"],
        ["Publication bias", "Down 1-2", "Asymmetric funnel plot"],
        ["Large effect", "Up 1-2 (observational only)", "RR over 2 or under 0.5 without plausible confounding"],
        ["Dose-response gradient", "Up 1", "More exposure, more effect"],
        ["Plausible confounding", "Up 1", "Confounders would reduce the observed effect"],
        ["Strength of recommendation", "Strong or conditional (weak)", "Depends on certainty, balance of benefit and harm, values, cost"],
      ],
    },
    {
      heading: "USPSTF grades of recommendation (USPSTF 2024 procedure manual)",
      columns: ["Grade", "Definition", "Practice suggestion"],
      rows: [
        ["Grade A", "High certainty that net benefit is substantial", "Offer or provide the service"],
        ["Grade B", "High certainty net benefit moderate, or moderate certainty moderate to substantial", "Offer or provide the service"],
        ["Grade C", "At least moderate certainty that net benefit is small", "Offer selectively by professional judgement and preference"],
        ["Grade D", "Moderate or high certainty of no net benefit or harms outweigh benefits", "Discourage the service"],
        ["Grade I", "Insufficient evidence; balance cannot be determined", "Read the clinical considerations; inform patients of uncertainty"],
      ],
    },
    {
      heading: "Likelihood ratio interpretation scale (JAMA Users' Guides 3e 2015)",
      columns: ["Likelihood ratio", "Change from pre-test to post-test probability", "Approximate shift"],
      rows: [
        ["Over 10", "Large, often conclusive increase", "Rules in"],
        ["5-10", "Moderate increase", "About +30%"],
        ["2-5", "Small increase", "About +15% (LR 2)"],
        ["1-2", "Minimal increase", "Rarely important"],
        ["LR 1", "No change", "Test useless"],
        ["0.5-1", "Minimal decrease", "Rarely important"],
        ["0.2-0.5", "Small decrease", "About -15% (LR 0.5)"],
        ["0.1-0.2", "Moderate decrease", "About -30%"],
        ["Under 0.1", "Large, often conclusive decrease", "Rules out"],
      ],
    },
  ],
  "fm-principles-research-thesis": [
    {
      heading: "Phases of clinical trials classification (ICMR 2017; NDCT Rules 2019)",
      columns: ["Phase", "Participants", "Main purpose"],
      rows: [
        ["Phase 0", "Very few (10-15), microdoses", "Exploratory pharmacokinetics"],
        ["Phase I", "20-80 healthy volunteers (patients for cytotoxics)", "Safety, tolerability, dose-finding, pharmacokinetics"],
        ["Phase II", "100-300 patients", "Efficacy signal, dose-response, short-term safety"],
        ["Phase III", "Hundreds to thousands, randomised controlled", "Confirm efficacy vs standard; basis for approval"],
        ["Phase IV", "General population after marketing", "Post-marketing surveillance - rare and long-term adverse effects"],
      ],
    },
  ],
  "fm-principles-biostatistics": [
    {
      heading: "Types of statistical error in hypothesis testing (Park 28e 2025)",
      columns: ["Type", "Definition", "Controlled by"],
      rows: [
        ["Type I error (alpha)", "Rejecting a true null hypothesis - false positive", "Significance level, usually 0.05"],
        ["Type II error (beta)", "Failing to reject a false null hypothesis - false negative", "Adequate sample size; beta usually 0.2"],
        ["Power (1 - beta)", "Probability of detecting a real difference", "Usually set at 80% or 90%"],
      ],
    },
    {
      heading: "Cohen's kappa agreement scale (Landis and Koch; Park 28e 2025)",
      columns: ["Kappa value", "Strength of agreement", "Note"],
      rows: [
        ["Below 0", "Poor (less than chance)", "-"],
        ["0.00-0.20", "Slight", "-"],
        ["0.21-0.40", "Fair", "-"],
        ["0.41-0.60", "Moderate", "-"],
        ["0.61-0.80", "Substantial", "-"],
        ["0.81-1.00", "Almost perfect", "Kappa corrects observed agreement for chance agreement"],
      ],
    },
    {
      heading: "Cohen's d effect size scale (Park 28e 2025)",
      columns: ["Cohen's d", "Effect size", "Note"],
      rows: [
        ["About 0.2", "Small", "Standardised mean difference"],
        ["About 0.5", "Medium", "Used in sample size calculation"],
        ["About 0.8 or more", "Large", "Visible to the naked eye"],
      ],
    },
  ],
};

export default scores;
