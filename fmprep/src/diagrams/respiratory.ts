/**
 * Diagrams for respiratory, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "respiratory-asthma": [
    {
      kind: "flow",
      heading: "Acute asthma: the first hour",
      caption:
        "Oxygen, repeated bronchodilator and systemic steroid, then reassess with the peak flow.",
      steps: [
        {
          label: "Grade the attack in one look",
          detail: "Speech, posture, pulse, PEF and SpO2 - see the grading table",
          tone: "decision",
        },
        {
          label: "Oxygen titrated to SpO2 93-95%",
          detail: "94-98% in children; do not withhold oxygen while awaiting a blood gas",
        },
        {
          label: "Salbutamol every 20 min for one hour",
          detail:
            "4-10 puffs by pMDI with a spacer, or 2.5-5 mg nebulised; continuous in the severest cases",
        },
        {
          label: "Add ipratropium in a severe attack",
          detail: "500 microgram nebulised or 4-8 puffs every 20 min for the first hour - it reduces admissions",
        },
        {
          label: "Prednisolone 40-50 mg orally within 1 h",
          detail:
            "Hydrocortisone 100 mg IV if unable to swallow; benefit starts at about 4 hours, so do not delay it",
        },
        {
          label: "Reassess clinically and by PEF at 1 hour",
          detail: "Arterial gas if SpO2 stays under 92% or there are life-threatening features",
          tone: "decision",
        },
        {
          label: "No response: magnesium and critical care",
          detail:
            "Magnesium sulphate 2 g IV over 20 min once; a normal or rising PaCO2 with drowsiness and a silent chest is near-fatal asthma",
          tone: "warn",
        },
        {
          label: "Discharge package, never the same regimen",
          detail:
            "Prednisolone 40-50 mg for 5-7 days with no taper, ICS controller started or stepped up, technique corrected, written action plan, review in 2-7 days",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "GINA Track 1 - the preferred stepwise ladder",
      caption:
        "ICS-formoterol is the reliever at every step. Step down only after 3 months of control, by 25-50% of the ICS dose, never stopping ICS in an adult.",
      steps: [
        {
          label: "Step 1 - as-needed low-dose ICS-formoterol",
          detail: "Track 2 alternative: an ICS is taken whenever the SABA is taken",
        },
        {
          label: "Step 2 - as-needed low-dose ICS-formoterol",
          detail: "Track 2 alternative: daily low-dose ICS plus as-needed SABA",
        },
        {
          label: "Step 3 - low-dose ICS-formoterol MART",
          detail:
            "Budesonide-formoterol 200/6 one inhalation twice daily plus one as needed, maximum 12 inhalations a day; stop the salbutamol inhaler",
        },
        {
          label: "Step 4 - medium-dose maintenance MART",
          detail: "Same reliever device; review 4-8 weeks after every step up",
        },
        {
          label: "Step 5 - add LAMA, phenotype, refer",
          detail:
            "Tiotropium 5 microgram once daily by soft mist; omalizumab for allergic, mepolizumab or dupilumab for eosinophilic disease before ever settling for maintenance oral steroid",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Grading an acute asthma attack at the front desk",
      columns: ["Feature", "Mild-moderate", "Severe", "Life-threatening"],
      rows: [
        ["Speech", "Sentences", "Words or phrases", "Unable to speak"],
        ["Posture and effort", "Can lie down", "Sits forward, accessory muscles", "Exhausted, feeble effort"],
        ["Pulse", "Under 100/min", "Over 120/min", "Bradycardia or hypotension"],
        ["PEF (% best or predicted)", "Over 50%", "33-50%", "Under 33%"],
        ["SpO2 on air", "Over 95%", "90-95%", "Under 90% or cyanosis"],
        ["Chest", "Wheeze", "Loud wheeze", "Silent chest"],
      ],
    },
    {
      kind: "compare",
      heading: "Asthma or COPD",
      caption: "Spirometry after a bronchodilator is the discriminator.",
      columns: ["Feature", "Asthma", "COPD"],
      rows: [
        [
          "Age at onset",
          "Childhood or early adult life",
          "After 40 years, with cumulative tobacco or biomass smoke",
        ],
        [
          "Spirometry",
          "Obstruction with a rise in FEV1 over 12% and over 200 mL; may normalise completely",
          "Post-bronchodilator FEV1/FVC under 0.70 that persists",
        ],
        ["Peak flow", "Diurnal variability over 10% a day", "A fixed low PEF"],
      ],
    },
  ],

  "respiratory-copd": [
    {
      kind: "branch",
      heading: "GOLD ABE grouping and what to start",
      caption: "Symptoms on one axis, exacerbations on the other - the grade of FEV1 does not choose the inhaler.",
      root: "Confirmed COPD: post-bronchodilator FEV1/FVC under 0.70",
      arms: [
        {
          label: "Group A",
          steps: [
            "mMRC 0-1 or CAT under 10",
            "0 or 1 moderate exacerbation, no admission",
            "One long-acting bronchodilator - LAMA such as tiotropium 18 microgram daily, or a LABA",
          ],
        },
        {
          label: "Group B",
          steps: [
            "mMRC 2 or more, or CAT 10 or more",
            "0 or 1 moderate exacerbation, no admission",
            "LABA plus LAMA, for example indacaterol-glycopyrronium 110/50 once daily",
          ],
        },
        {
          label: "Group E",
          tone: "warn",
          steps: [
            "Any symptom level",
            "2 or more moderate exacerbations, or 1 or more with admission",
            "LABA plus LAMA to start",
            "Add an inhaled corticosteroid if blood eosinophils are 300/microlitre or more",
            "Avoid ICS if eosinophils are under 100 or there is a history of tuberculosis",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "GOLD grades of airflow limitation",
      caption: "Post-bronchodilator FEV1 as a percentage of predicted, once the ratio is under 0.70.",
      steps: [
        { label: "GOLD 1 - mild", detail: "FEV1 80% or more of predicted" },
        { label: "GOLD 2 - moderate", detail: "FEV1 50-79%" },
        { label: "GOLD 3 - severe", detail: "FEV1 30-49%" },
        { label: "GOLD 4 - very severe", detail: "FEV1 under 30%", tone: "warn" },
      ],
    },
    {
      kind: "flow",
      heading: "Acute exacerbation of COPD",
      caption: "The two marks that are always there: controlled oxygen, and non-invasive ventilation for acidosis.",
      steps: [
        {
          label: "Confirm the exacerbation",
          detail: "Worsening dyspnoea, cough or sputum over less than 14 days; radiograph to exclude other causes",
        },
        {
          label: "Controlled oxygen to SpO2 88-92%",
          detail:
            "Venturi mask at 24-28% or low-flow prongs; uncontrolled oxygen causes hypercapnia and narcosis",
          tone: "warn",
        },
        {
          label: "Intensify the short-acting bronchodilator",
          detail:
            "Salbutamol 2.5 mg with ipratropium 500 microgram nebulised every 4-6 hours; drive the nebuliser with air if hypercapnic",
        },
        {
          label: "Prednisolone 40 mg daily for 5 days",
          detail: "REDUCE trial - longer or tapering courses add toxicity, not benefit",
        },
        {
          label: "Antibiotic only if the sputum is purulent",
          detail:
            "Or if ventilatory support is needed: amoxicillin-clavulanate 625 mg TDS, doxycycline 100 mg BD or azithromycin 500 mg OD for 5 days",
        },
        {
          label: "Gas: pH under 7.35 with PaCO2 over 45",
          detail:
            "Start non-invasive ventilation now - it reduces intubation, mortality and length of stay; do not wait for a repeat gas",
          tone: "warn",
        },
        {
          label: "Discharge bundle",
          detail:
            "Inhaler technique, maintenance optimised, vaccination, pulmonary rehabilitation, action plan, follow-up in 1-4 weeks",
          tone: "good",
        },
        {
          label: "Reassess oxygenation at 8-12 weeks",
          detail: "Never commit a patient to long-term oxygen on gases taken during an exacerbation",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Qualifying a patient for long-term oxygen",
      caption: "The only inhaled or delivered treatment besides smoking cessation that prolongs life in COPD.",
      steps: [
        {
          label: "Measure in the stable state",
          detail: "Not during an exacerbation; confirmed on two occasions three weeks apart",
        },
        {
          label: "PaO2 55 mmHg or less, or SpO2 88% or less",
          detail: "On room air - this qualifies",
        },
        {
          label: "Or PaO2 56-59 mmHg with organ damage",
          detail:
            "Cor pulmonale, right heart failure, peripheral oedema, pulmonary hypertension, or haematocrit above 55%",
        },
        {
          label: "Titrate the flow rate",
          detail: "Usually 1-3 L/min by nasal cannula to a PaO2 above 60 mmHg or SpO2 of 90% or more at rest",
        },
        {
          label: "At least 15 hours a day, including night",
          detail: "Benefit rises with hours used; there is no survival benefit below this threshold",
          tone: "good",
        },
        {
          label: "Reassess at 60-90 days, then annually",
          detail: "Confirm the continuing need and the adequacy of the flow rate",
        },
      ],
    },
  ],

  "respiratory-tuberculosis-ntep": [
    {
      kind: "flow",
      heading: "The NTEP diagnostic and treatment algorithm",
      caption: "Molecular test first, rifampicin susceptibility on everyone, daily fixed dose combinations.",
      steps: [
        {
          label: "Presumptive tuberculosis",
          detail: "Cough of 2 weeks or more, fever, weight loss, night sweats or haemoptysis",
          tone: "decision",
        },
        {
          label: "Upfront NAAT on sputum",
          detail:
            "CBNAAT (Xpert MTB/RIF or Ultra) or Truenat is the first-choice test; smear needs 5,000-10,000 bacilli per mL against about 130 for Xpert",
        },
        {
          label: "Universal drug susceptibility testing",
          detail: "Rifampicin susceptibility established on every patient at diagnosis, in the same run",
        },
        {
          label: "Rifampicin resistance detected",
          detail:
            "Refer to the District or Nodal DR-TB Centre for second-line LPA and culture DST; never continue a first-line regimen",
          tone: "warn",
        },
        {
          label: "Sensitive: start 2HRZE then 4HRE",
          detail:
            "Daily FDC by weight band - 25-39 kg two tablets, 40-54 kg three, 55-69 kg four, 70 kg and above five; India keeps ethambutol in the continuation phase",
        },
        {
          label: "Add pyridoxine 10 mg daily",
          detail:
            "For every patient on isoniazid; higher in pregnancy, undernutrition, alcohol use, diabetes, kidney disease and HIV",
        },
        {
          label: "Complete the comorbidity package",
          detail: "HIV test, diabetes screen, tobacco and alcohol screening, nutritional assessment with weight, height and BMI",
        },
        {
          label: "Notify on Ni-kshay",
          detail:
            "Nutritional support of Rs 1,000 a month by direct benefit transfer for the whole duration of treatment",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Drug-resistant tuberculosis: definition and regimen",
      caption:
        "BPaLM is bedaquiline, pretomanid, linezolid and moxifloxacin for 6 months, from 15 years of age, with under one month of prior exposure to those drugs - not in pregnancy or lactation, nor in central nervous system, bone or disseminated disease.",
      root: "Resistance found on NAAT, line probe assay or culture DST",
      arms: [
        {
          label: "Mono or poly resistance",
          steps: [
            "Resistance to one or more first-line drugs but not to both isoniazid and rifampicin",
            "Individualised regimen based on drug susceptibility testing",
          ],
        },
        {
          label: "MDR or RR-TB",
          tone: "warn",
          steps: [
            "Resistance to at least isoniazid and rifampicin, or to rifampicin alone",
            "BPaLM for 6 months if eligible",
            "Otherwise the shorter oral bedaquiline-containing regimen of 9-11 months, or the longer oral regimen of 18-20 months",
          ],
        },
        {
          label: "Pre-XDR-TB",
          tone: "warn",
          steps: [
            "MDR or RR-TB plus fluoroquinolone resistance",
            "Moxifloxacin is dropped: BPaL for 6 months, or the longer oral regimen",
          ],
        },
        {
          label: "XDR-TB",
          tone: "warn",
          steps: [
            "MDR or RR-TB plus fluoroquinolone resistance plus resistance to bedaquiline or linezolid",
            "Individualised longer regimen at a Nodal DR-TB Centre",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "First-line drugs: dose, harm and monitoring",
      columns: ["Drug", "Daily dose", "Key adverse effect", "What to monitor"],
      rows: [
        [
          "Isoniazid (H)",
          "5 mg/kg (4-6), maximum 300 mg",
          "Hepatitis, peripheral neuropathy, psychosis",
          "Pyridoxine 10 mg daily; liver function if symptomatic",
        ],
        [
          "Rifampicin (R)",
          "10 mg/kg (8-12), maximum 600 mg",
          "Hepatitis, orange secretions, flu-like syndrome, enzyme induction",
          "Warn about contraceptive failure and drug interactions",
        ],
        [
          "Pyrazinamide (Z)",
          "25 mg/kg (20-30)",
          "Hepatitis, arthralgia, hyperuricaemia",
          "Symptomatic; stop for gout-like arthritis",
        ],
        [
          "Ethambutol (E)",
          "15 mg/kg (15-20)",
          "Retrobulbar optic neuritis, red-green colour blindness",
          "Baseline and periodic visual acuity and colour vision",
        ],
        [
          "Streptomycin (rarely used)",
          "15 mg/kg intramuscular",
          "Ototoxicity, nephrotoxicity, fetal ototoxicity",
          "Contraindicated in pregnancy; audiometry",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Anti-tuberculosis drug-induced hepatitis",
      caption: "Stop all three hepatotoxic drugs, then reintroduce in order: rifampicin, isoniazid, pyrazinamide.",
      steps: [
        {
          label: "Recognise it",
          detail: "Jaundice, vomiting or right upper quadrant tenderness on treatment - check liver function the same day",
          tone: "warn",
        },
        {
          label: "Stop isoniazid, rifampicin, pyrazinamide",
          detail: "ALT more than three times normal with symptoms, or more than five times without",
          tone: "warn",
        },
        {
          label: "Wait for the liver to recover",
          detail: "ALT below twice the upper limit of normal and bilirubin normalised",
        },
        { label: "Reintroduce rifampicin first", detail: "With liver function monitoring after each drug" },
        { label: "Then isoniazid after 3-7 days", detail: "Recheck the ALT before going further" },
        {
          label: "Then pyrazinamide last",
          detail:
            "If cover is needed while the liver recovers, use a non-hepatotoxic multi-drug holding regimen - never a single drug",
          tone: "good",
        },
      ],
    },
  ],

  "respiratory-pneumonia-cap": [
    {
      kind: "ladder",
      heading: "CURB-65: score, mortality and site of care",
      caption:
        "One point each for Confusion, Urea over 7 mmol/L, Respiratory rate 30 or more, Blood pressure under 90 systolic or 60 or less diastolic, and age 65 or over. Override the score and admit for SpO2 under 92%, multilobar disease, an effusion, decompensated comorbidity, vomiting or an unsafe home.",
      steps: [
        { label: "Score 0", detail: "Under 1% mortality - home treatment with oral antibiotics", tone: "good" },
        { label: "Score 1", detail: "About 2-3% - home if oxygenation and social circumstances allow" },
        { label: "Score 2", detail: "About 9% - hospital-supervised care or a short admission" },
        { label: "Score 3", detail: "About 15-22% - admit as severe pneumonia", tone: "warn" },
        { label: "Score 4-5", detail: "About 30-40% - admit and assess for intensive care", tone: "warn" },
      ],
    },
    {
      kind: "branch",
      heading: "Empirical antibiotic choice by setting",
      caption:
        "A respiratory fluoroquinolone is avoided first line in India because it partially treats tuberculosis, delays its diagnosis and selects for fluoroquinolone resistance.",
      root: "Community-acquired pneumonia, once severity and site of care are settled",
      arms: [
        {
          label: "Outpatient, no comorbidity",
          steps: [
            "Amoxicillin 500 mg to 1 g orally three times daily",
            "Doxycycline 100 mg twice daily or azithromycin 500 mg once daily as the alternative",
            "5 days",
          ],
        },
        {
          label: "Outpatient with comorbidity",
          steps: [
            "Amoxicillin-clavulanate 625 mg three times daily plus azithromycin 500 mg once daily",
            "Levofloxacin 750 mg once daily is second line in India",
            "5-7 days",
          ],
        },
        {
          label: "Inpatient, non-severe",
          steps: [
            "Ceftriaxone 1-2 g intravenously once daily plus azithromycin 500 mg",
            "Or intravenous amoxicillin-clavulanate plus a macrolide",
            "5-7 days",
          ],
        },
        {
          label: "Severe or intensive care",
          tone: "warn",
          steps: [
            "Ceftriaxone or piperacillin-tazobactam intravenously plus a macrolide",
            "Add anti-MRSA or antipseudomonal cover only where there are specific risk factors",
            "7 days or more",
          ],
        },
        {
          label: "Suspected aspiration",
          steps: [
            "Amoxicillin-clavulanate 1.2 g intravenously three times daily",
            "Clindamycin if penicillin-allergic",
            "5-7 days, longer if necrotising",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Clinical clues to the organism",
      columns: ["Clue", "Suspected organism"],
      rows: [
        ["Rusty sputum, rigors, lobar consolidation, herpes labialis", "Streptococcus pneumoniae"],
        [
          "Upper lobe consolidation with bulging fissure, red-currant jelly sputum, diabetic or alcoholic",
          "Klebsiella pneumoniae",
        ],
        ["Cavitating pneumonia after influenza, rapid deterioration", "Staphylococcus aureus"],
        ["Dry cough, headache, myalgia, extrapulmonary features, cold agglutinins", "Mycoplasma pneumoniae"],
        [
          "Confusion, diarrhoea, hyponatraemia, deranged liver function, air-conditioning or water exposure",
          "Legionella pneumophila",
        ],
        ["Diabetic from a coastal or paddy-farming area with abscesses and septicaemia", "Burkholderia pseudomallei"],
        ["Subacute cough over weeks, weight loss, upper lobe or cavitary shadow", "Mycobacterium tuberculosis"],
      ],
    },
    {
      kind: "flow",
      heading: "Follow-up and the pneumonia that does not resolve",
      steps: [
        {
          label: "Review the ambulatory patient at 48-72 h",
          detail: "Most have improved; failure demands reassessment, not a change of antibiotic by telephone",
          tone: "decision",
        },
        {
          label: "No improvement: widen the differential",
          detail: "Empyema, tuberculosis, bronchial obstruction, resistance or an alternative diagnosis",
        },
        {
          label: "Tap any effusion under ultrasound",
          detail:
            "pH under 7.20, glucose under 40-60 mg/dL, LDH above 1000 IU/L, a positive Gram stain or frank pus means an intercostal drain",
          tone: "warn",
        },
        {
          label: "Stop at 5 days if stable",
          detail:
            "Afebrile for 48-72 hours with no more than one instability criterion - temperature over 37.8 C, pulse over 100, respiratory rate over 24, systolic BP under 90, SpO2 under 90%, unable to eat, altered mental state",
        },
        {
          label: "Repeat the chest radiograph at 6 weeks",
          detail: "Smokers, age over 50, or persistent symptoms - radiographic clearance lags behind clinical recovery",
        },
        {
          label: "Shadowing persists: CT and bronchoscopy",
          detail: "An underlying bronchogenic carcinoma or endobronchial lesion causing post-obstructive pneumonia",
          tone: "warn",
        },
      ],
    },
  ],

  "respiratory-acute-cough-influenza-covid": [
    {
      kind: "flow",
      heading: "Acute cough: deciding who needs an antibiotic",
      caption:
        "60-80% of acute bronchitis consultations in India end with an antibiotic. Viruses cause more than 90% of them.",
      steps: [
        {
          label: "Time the cough",
          detail: "Acute under 3 weeks, subacute 3-8 weeks, chronic over 8 weeks",
          tone: "decision",
        },
        {
          label: "A cough of 2 weeks is presumptive TB",
          detail: "Send a sputum NAAT whatever else you think is going on, and always with fever, night sweats, weight loss or haemoptysis",
          tone: "warn",
        },
        {
          label: "Look for pneumonia discriminators",
          detail:
            "Pulse over 100/min, respiratory rate over 24/min, temperature over 38 degrees C, focal crackles or bronchial breathing, SpO2 under 94% - these force a radiograph",
        },
        {
          label: "Point-of-care CRP where available",
          detail: "Under 20 mg/L no antibiotic; 20-100 mg/L a delayed prescription; over 100 mg/L treat as pneumonia",
        },
        {
          label: "Paroxysmal cough with vomiting: pertussis",
          detail:
            "Azithromycin 10 mg/kg on day 1 then 5 mg/kg on days 2-5; the same course for household contacts; off school or work for 5 days; notify",
        },
        {
          label: "Otherwise no antibiotic",
          detail: "Purulent sputum is neutrophils and shed epithelium, not a bacterial marker",
          tone: "good",
        },
        {
          label: "Explain the 18-day median cough",
          detail:
            "Paracetamol, warm fluids, honey after 1 year of age; no codeine under 12; no cough-cold syrup under 2 years and generally not under 5; a written safety net",
        },
      ],
    },
    {
      kind: "branch",
      heading: "MoHFW categories of influenza-like illness",
      caption:
        "Influenza-like illness is measured fever of 38 degrees C or more with cough, starting within the last 10 days. Oseltamivir works best within 48 hours, which is a reason for urgency, not for waiting.",
      root: "Patient with influenza-like illness in the season",
      arms: [
        {
          label: "Category A",
          steps: [
            "Mild fever, cough, sore throat, body ache, no high-risk feature",
            "No test and no oseltamivir",
            "Home with rest, hygiene and a review date",
          ],
        },
        {
          label: "Category B (i)",
          steps: [
            "Category A plus high-grade fever and severe sore throat",
            "Oseltamivir without a test",
            "Home isolation",
          ],
        },
        {
          label: "Category B (ii)",
          tone: "warn",
          steps: [
            "Category A in a high-risk group: pregnancy, under 5, over 65, chronic lung, heart, liver, kidney or neurological disease, diabetes, immunosuppression",
            "Oseltamivir at once, without waiting for a test or for the 48-hour window to pass",
            "Home isolation with close follow-up",
          ],
        },
        {
          label: "Category C",
          tone: "warn",
          steps: [
            "Breathlessness, chest pain, drowsiness, hypotension, haemoptysis, cyanosis, worsening chronic disease; child irritable, not feeding, fast breathing",
            "Test by RT-PCR and treat immediately - the result must never delay treatment",
            "Admit",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Oseltamivir dosing",
      caption: "Treatment twice daily for 5 days; post-exposure prophylaxis once daily for 10 days. Take it with food.",
      columns: ["Age or weight", "Treatment dose", "Prophylaxis dose"],
      rows: [
        ["Under 1 year", "3 mg/kg twice daily", "3 mg/kg once daily (from 3 months)"],
        ["Under 15 kg", "30 mg twice daily", "30 mg once daily"],
        ["15-23 kg", "45 mg twice daily", "45 mg once daily"],
        ["24-40 kg", "60 mg twice daily", "60 mg once daily"],
        ["Over 40 kg and adults", "75 mg twice daily", "75 mg once daily"],
      ],
    },
    {
      kind: "compare",
      heading: "COVID-19 severity and what it changes",
      caption:
        "The danger is silent hypoxaemia: a fall of 3% or more, or an SpO2 under 93% after a 6-minute walk, means hospital.",
      columns: ["Grade", "Mild", "Moderate", "Severe"],
      rows: [
        [
          "Criteria",
          "No breathlessness, SpO2 94% or more on room air",
          "Respiratory rate 24-30/min or SpO2 90-93%",
          "Respiratory rate over 30/min, SpO2 under 90%, ARDS or shock",
        ],
        [
          "Where managed",
          "Home isolation with a pulse oximeter twice daily",
          "Ward with oxygen",
          "High-dependency or intensive care",
        ],
        [
          "Treatment",
          "Symptomatic; oral antiviral within 5 days if high risk; no steroid, no antibiotic",
          "Oxygen to SpO2 92-96%, awake proning, dexamethasone 6 mg, enoxaparin 40 mg, remdesivir within 10 days",
          "High-flow oxygen or ventilation, steroid, anticoagulation, tocilizumab or baricitinib if worsening",
        ],
      ],
    },
  ],

  "respiratory-tb-infection-contacts-tpt": [
    {
      kind: "flow",
      heading: "The contact investigation cascade",
      caption:
        "Two jobs: find the 5-10% of household contacts who already have disease, and give the rest preventive treatment.",
      steps: [
        {
          label: "List the household contacts",
          detail:
            "Anyone who shared the enclosed living space for one or more nights, or frequent daytime periods, in the 3 months before treatment started",
        },
        {
          label: "Four-symptom screen and chest radiograph",
          detail: "For every contact, whatever the age",
        },
        {
          label: "Any symptom or abnormal film: send a NAAT",
          detail: "Giving isoniazid to someone with unrecognised active disease is monotherapy and breeds resistance",
          tone: "warn",
        },
        {
          label: "Active disease found: notify and treat",
          detail: "Full regimen; preventive treatment is deferred until active tuberculosis has been excluded",
        },
        {
          label: "Disease excluded: test of infection",
          detail:
            "Not required for children under 5 or for people living with HIV - they are treated regardless; contacts of 5 and above may still be treated where no test exists",
        },
        {
          label: "Start TB preventive treatment",
          detail: "3HP is the programme preferred adult regimen; 6H where rifapentine is unsuitable",
          tone: "good",
        },
        {
          label: "Record the outcome on Ni-kshay",
          detail:
            "Completion is at least 80% of doses within 133% of the duration - 180 doses of 6H in 9 months, or 12 doses of 3HP in 16 weeks; missed doses are added at the end",
        },
        {
          label: "Watch the household for 2 years",
          detail:
            "Repeat the four-symptom screen at every consultation; half of all progression happens in the first 2 years after infection",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Who gets TB preventive treatment",
      caption:
        "Active tuberculosis must be excluded first: a negative four-symptom screen and a normal chest radiograph. Defer for active hepatitis or ALT more than three times normal.",
      root: "Person at risk, active tuberculosis excluded",
      arms: [
        {
          label: "No test of infection needed",
          tone: "good",
          steps: [
            "All people living with HIV, from 12 months of age (infants under 12 months only if contacts)",
            "Household contacts under 5 years of a pulmonary TB patient",
            "Treat as soon as active disease is excluded - waiting for a test wastes the highest-risk window",
          ],
        },
        {
          label: "Test where a test is available",
          steps: [
            "Household contacts aged 5 years and above",
            "Tuberculin skin test, IGRA or Cy-Tb; treat if positive",
            "Where no test is available, TPT may still be offered after excluding disease",
          ],
        },
        {
          label: "Only after a positive test",
          steps: [
            "Patients starting anti-TNF or other biologic therapy",
            "Patients on dialysis, or preparing for organ or haematological transplant",
            "Patients with silicosis",
          ],
        },
        {
          label: "Contact of MDR or RR-TB",
          tone: "warn",
          steps: [
            "6H and 3HP are useless - the index strain is isoniazid-resistant",
            "Levofloxacin daily for 6 months: 750-1000 mg in adults, 15-20 mg/kg in children",
            "Clinical follow-up every 6 months for 2 years",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "TB preventive treatment regimens under NTEP",
      columns: ["Regimen", "Schedule and dose", "Who it is for", "Completion"],
      rows: [
        [
          "6H",
          "Isoniazid daily for 6 months: adults 5 mg/kg to a maximum of 300 mg, children 10 mg/kg, with pyridoxine in those at risk",
          "Any age; children under 2, pregnancy, PLHIV on protease inhibitor or nevirapine",
          "180 doses within 9 months",
        ],
        [
          "3HP",
          "Isoniazid 15 mg/kg (maximum 900 mg) plus rifapentine 900 mg at 50 kg or more, once weekly for 12 doses",
          "Age 2 and above, including PLHIV on efavirenz or dolutegravir; not in pregnancy",
          "12 doses within 16 weeks",
        ],
        [
          "3HR",
          "Isoniazid plus rifampicin daily for 3 months, paediatric dispersible FDC by weight band",
          "Children under 2 years",
          "About 90 doses within 4 months",
        ],
        [
          "1HP",
          "Isoniazid 300 mg plus rifapentine 600 mg daily for 1 month",
          "Age 13 and above; not in pregnancy",
          "28 doses within 6 weeks",
        ],
        [
          "4R",
          "Rifampicin 10 mg/kg, maximum 600 mg, daily for 4 months",
          "Isoniazid intolerance, or an isoniazid-monoresistant index case",
          "120 doses within 6 months",
        ],
        [
          "6Lfx",
          "Levofloxacin daily for 6 months: 750 mg under 50 kg, 1000 mg at 50 kg or more; children 15-20 mg/kg",
          "Household contacts of MDR or RR-TB",
          "180 doses within 9 months",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Reading the tuberculin skin test under NTEP",
      caption:
        "0.1 mL of PPD - 5 TU of PPD-S or 2 TU of PPD RT23 - intradermally; read at 48-72 hours by measuring the transverse diameter of induration in millimetres. Erythema is ignored.",
      columns: ["Induration at 48-72 hours", "Population", "Interpretation"],
      rows: [
        ["5 mm or more", "PLHIV, severely malnourished children, immunosuppressed patients", "Positive"],
        ["10 mm or more", "Everyone else, including household contacts and health workers", "Positive"],
        [
          "Under the cut-off",
          "Recently exposed contact, immunosuppressed, infant under 6 months",
          "Does not exclude infection; treat children under 5 and PLHIV regardless",
        ],
        [
          "Any size",
          "Person with symptoms or an abnormal chest radiograph",
          "Irrelevant to the decision - exclude active disease with a NAAT first",
        ],
      ],
    },
  ],

  "respiratory-pleural-effusion": [
    {
      kind: "flow",
      heading: "Working up a new pleural effusion",
      caption: "Ultrasound guides every tap - it cuts the pneumothorax rate from 10-20% to under 5%.",
      steps: [
        {
          label: "Confirm and site it with ultrasound",
          detail:
            "Detects 5-20 mL against 200 mL to blunt the costophrenic angle on a PA film; shows septations and loculation",
        },
        {
          label: "Tap every new effusion over 1 cm",
          detail:
            "Except a bilateral effusion in obvious heart failure - and tap even that if it is unilateral, unequal, febrile, painful or fails to clear after 3 days of diuretics",
        },
        {
          label: "Needle over the upper border of the rib",
          detail:
            "Patient sitting and leaning forward, one to two spaces below the top of dullness; 50-60 mL withdrawn for analysis",
        },
        {
          label: "Send protein, LDH and glucose with serum",
          detail:
            "Plus pH in a heparinised syringe, cell count and differential, Gram stain and culture, AFB smear, Xpert Ultra and culture, ADA, and cytology on at least 50 mL",
        },
        {
          label: "Apply Light's criteria",
          detail: "Exudate if any one is met; about 98% sensitive for an exudate",
          tone: "decision",
        },
        {
          label: "Lymphocytic exudate with ADA over 40 U/L",
          detail:
            "Mesothelial cells under 5% in a young adult means tubercular effusion: notify on Ni-kshay and treat as clinically diagnosed extrapulmonary TB with daily 2HRZE/4HRE; steroids are not routine",
          tone: "good",
        },
        {
          label: "Never remove more than 1-1.5 L at once",
          detail:
            "Stop immediately for chest tightness, persistent cough or lightheadedness - re-expansion pulmonary oedema",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Light's criteria and the trap that follows them",
      root: "Paired pleural fluid and serum protein and LDH",
      arms: [
        {
          label: "Exudate - any one criterion met",
          steps: [
            "Pleural fluid to serum protein ratio over 0.5",
            "Pleural fluid to serum LDH ratio over 0.6",
            "Pleural fluid LDH more than two-thirds of the upper limit of normal serum LDH",
          ],
        },
        {
          label: "Transudate - no criterion met",
          steps: [
            "Heart failure - bilateral, right larger than left",
            "Cirrhosis with hepatic hydrothorax, right-sided in 85%",
            "Nephrotic syndrome, hypoalbuminaemia, hypothyroidism, constrictive pericarditis, peritoneal dialysis",
          ],
        },
        {
          label: "The diuretic trap",
          tone: "warn",
          steps: [
            "About a quarter of transudates in patients on diuretics are misclassified as exudates",
            "Serum minus pleural protein over 3.1 g/dL means transudate",
            "Serum minus pleural albumin over 1.2 g/dL means transudate",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Pleural fluid patterns by cause",
      columns: ["Cause", "Appearance and cells", "Glucose", "The clinching test"],
      rows: [
        [
          "Tuberculosis",
          "Straw-coloured; lymphocytes over 80%, mesothelial cells under 5%",
          "Mildly low",
          "ADA over 40 U/L; granulomas on pleural biopsy in about 80%; Xpert Ultra positive in about half",
        ],
        [
          "Complicated parapneumonic or empyema",
          "Turbid or frank pus; neutrophils",
          "Under 40-60 mg/dL",
          "pH under 7.20, LDH over 1000 IU/L, positive Gram stain or culture, loculation on ultrasound",
        ],
        [
          "Malignancy",
          "Bloody in half; lymphocytes with malignant cells",
          "Normal or low",
          "Cytology positive in about 60% of first samples; thoracoscopic biopsy",
        ],
        [
          "Heart failure",
          "Clear, bilateral; few mononuclear cells",
          "Normal",
          "Transudate; protein gradient over 3.1 g/dL; NT-proBNP",
        ],
        [
          "Rheumatoid arthritis",
          "Turbid, yellow-green; lymphocytes",
          "Under 30 mg/dL",
          "Rheumatoid factor in the fluid, very low pH, high LDH",
        ],
        ["Chylothorax", "Milky; lymphocytes", "Normal", "Triglycerides over 110 mg/dL or chylomicrons"],
        ["Haemothorax", "Frank blood; red cells", "Normal", "Pleural haematocrit over 50% of the blood haematocrit"],
      ],
    },
    {
      kind: "ladder",
      heading: "The parapneumonic effusion: how far it has gone",
      caption:
        "Antibiotics cannot sterilise a loculated, acidic collection, and delay is what converts a treatable empyema into a trapped lung.",
      steps: [
        {
          label: "Uncomplicated effusion",
          detail: "Small, free-flowing, pH over 7.20, glucose over 60 mg/dL, Gram stain and culture negative - antibiotic alone",
          tone: "good",
        },
        {
          label: "Complicated effusion",
          detail:
            "Any of pH under 7.20, glucose under 40-60 mg/dL, LDH over 1000 IU/L, positive Gram stain or culture, or loculation - insert a drain",
          tone: "warn",
        },
        {
          label: "Empyema - frank pus",
          detail:
            "Ultrasound-guided intercostal drain today, plus amoxicillin-clavulanate or ceftriaxone with metronidazole for 2-6 weeks",
          tone: "warn",
        },
        {
          label: "Drainage failing at 5-7 days",
          detail:
            "Intrapleural tissue plasminogen activator with DNase by the MIST2 protocol, or surgical decortication by video-assisted thoracoscopy",
          tone: "warn",
        },
      ],
    },
  ],

  "respiratory-osa": [
    {
      kind: "flow",
      heading: "From snoring to a graded diagnosis",
      caption:
        "The patient rarely complains of snoring - the bed partner does. Roughly 9-13% of Indian adults have symptomatic OSA and most are never diagnosed.",
      steps: [
        {
          label: "Suspect it from the presenting complaint",
          detail:
            "Fatigue, poor concentration, morning headache, nocturia, resistant hypertension or a road traffic accident - ask the bed partner about snoring and apnoeas",
          tone: "decision",
        },
        {
          label: "Score STOP-BANG",
          detail: "0-2 low risk, 3-4 intermediate, 5-8 high risk - a screening tool, never a diagnosis",
        },
        {
          label: "Arrange a sleep study",
          detail: "Level 1 attended in-laboratory polysomnography is the gold standard and gives the AHI",
        },
        {
          label: "Home testing only if uncomplicated",
          detail:
            "Acceptable with a high pre-test probability of moderate-severe disease; it under-estimates the AHI, so a negative study in a symptomatic patient needs full polysomnography",
          tone: "warn",
        },
        {
          label: "Grade by the AHI",
          detail: "Mild 5 to under 15, moderate 15 to under 30, severe 30 or more events per hour",
        },
        {
          label: "Baseline tests that change management",
          detail:
            "TSH, fasting glucose or HbA1c, lipids, haemoglobin, ECG, echocardiography if pulmonary hypertension is suspected, and a venous bicarbonate or gas in the very obese",
        },
        {
          label: "Exclude the mimics of sleepiness",
          detail:
            "Insufficient sleep syndrome - the commonest cause in India - shift work, narcolepsy, depression, uncontrolled diabetes, hypothyroidism, anaemia, sedatives",
        },
      ],
    },
    {
      kind: "compare",
      heading: "STOP-BANG - one point for each yes",
      caption: "5 to 8 is high risk: arrange a sleep study and take perioperative precautions with sedatives and opioids.",
      columns: ["Letter", "Item", "Threshold"],
      rows: [
        ["S", "Snoring loudly", "Louder than talking, or heard through a closed door"],
        ["T", "Tiredness", "Tired, fatigued or sleepy during the daytime"],
        ["O", "Observed apnoea", "Someone has seen you stop breathing, choke or gasp in sleep"],
        ["P", "Pressure", "Being treated for high blood pressure"],
        ["B", "BMI", "More than 35 kg/m2"],
        ["A", "Age", "More than 50 years"],
        ["N", "Neck circumference", "More than 40 cm"],
        ["G", "Gender", "Male"],
      ],
    },
    {
      kind: "compare",
      heading: "Scoring the events on the sleep study",
      caption: "The AHI is the number of apnoeas plus hypopnoeas per hour of sleep - the whole diagnosis rests on it.",
      columns: ["Event", "Airflow change", "Duration and what else is required"],
      rows: [
        [
          "Obstructive apnoea",
          "Fall of 90% or more from baseline",
          "10 seconds or more, with respiratory effort continuing against a closed airway",
        ],
        ["Central apnoea", "Cessation of airflow", "10 seconds or more, with respiratory effort absent"],
        ["Hypopnoea", "Fall of 30% or more", "10 seconds or more, with a 3% desaturation or an arousal"],
      ],
    },
    {
      kind: "ladder",
      heading: "Escalating treatment in obstructive sleep apnoea",
      caption:
        "Adequate CPAP use is 4 hours or more a night on at least 70% of nights, verified from the machine download at 1 week, 1 month and then 3-6 monthly.",
      steps: [
        {
          label: "Weight loss, prescribed with a number",
          detail:
            "A 10% loss of body weight cuts the AHI by roughly 25-30%; set a target weight, a diet and 150 minutes a week of activity, and review it at every visit",
          tone: "good",
        },
        {
          label: "General and positional measures",
          detail:
            "No evening alcohol or sedatives, treat nasal obstruction, stop smoking, regularise sleep timing, avoid supine sleep if events are supine-predominant",
        },
        {
          label: "Mandibular advancement device",
          detail: "For mild-to-moderate disease, primary snoring, or the patient who refuses or cannot tolerate CPAP",
        },
        {
          label: "CPAP",
          detail:
            "First line for AHI 15 or more, and for mild OSA with symptoms, sleepiness or cardiovascular comorbidity; a pneumatic splint that also cuts accident risk to baseline",
          tone: "good",
        },
        {
          label: "BiPAP",
          detail:
            "Obesity hypoventilation (BMI 30 or more with awake PaCO2 above 45 mmHg), overlap syndrome, or CPAP intolerance at high pressures",
        },
        {
          label: "Surgery for a defined obstruction",
          detail:
            "Septoplasty, uvulopalatopharyngoplasty, maxillomandibular advancement; adenotonsillectomy is first line in children",
        },
      ],
    },
  ],
};

export default diagrams;
