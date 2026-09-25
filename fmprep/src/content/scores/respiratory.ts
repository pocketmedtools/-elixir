import type { NoteTable } from "../../lib/types";

const scores: Record<string, NoteTable[]> = {
  "respiratory-asthma": [
    {
      heading: "GINA asthma symptom control score (GINA 2025)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["Daytime symptoms", "More than twice a week in past 4 weeks", "1"],
        ["Night waking", "Any night waking due to asthma", "1"],
        ["Reliever need", "SABA reliever more than twice a week (not before exercise)", "1"],
        ["Activity limitation", "Any activity limited by asthma", "1"],
      ],
    },
    {
      heading: "GINA symptom control score - interpretation",
      columns: ["Total", "Level of control", "Action"],
      rows: [
        ["0", "Well controlled", "Continue; consider step down after 3 months of stability"],
        ["1-2", "Partly controlled", "Check inhaler technique, adherence, triggers; consider step up"],
        ["3-4", "Uncontrolled", "Review diagnosis and comorbidity; step up; assess exacerbation risk"],
      ],
    },
    {
      heading: "Asthma Control Test (ACT) score bands (GINA 2025)",
      columns: ["Band", "Meaning", "Action"],
      rows: [
        ["Structure", "5 questions on past 4 weeks, each scored 1-5; total 5-25", "Activity limit, breathlessness, night waking, reliever use, self-rating"],
        ["20-25", "Well controlled", "Maintain; step down if stable 3 months"],
        ["16-19", "Not well controlled", "Review technique and adherence; consider step up"],
        ["5-15", "Very poorly controlled", "Step up; review urgently; written action plan"],
        ["Minimal important change", "3 points", "Change of 3 or more is clinically meaningful"],
      ],
    },
    {
      heading: "GINA 2025 treatment steps and asthma severity (adults and adolescents)",
      columns: ["Step", "Track 1 (preferred, ICS-formoterol reliever)", "Track 2 (SABA or ICS-SABA reliever)", "Severity class"],
      rows: [
        ["Step 1", "As-needed low-dose ICS-formoterol", "ICS taken whenever SABA taken", "Mild if controlled here"],
        ["Step 2", "As-needed low-dose ICS-formoterol", "Low-dose maintenance ICS", "Mild if controlled here"],
        ["Step 3", "Low-dose maintenance ICS-formoterol (MART)", "Low-dose maintenance ICS-LABA", "Moderate if controlled here"],
        ["Step 4", "Medium-dose maintenance ICS-formoterol (MART)", "Medium or high-dose ICS-LABA", "Moderate if controlled here"],
        ["Step 5", "Add LAMA; phenotype; anti-IgE, anti-IL5/5R, anti-IL4R, anti-TSLP", "Add LAMA; phenotype; biologics", "Severe if uncontrolled on step 4-5 or needs step 5"],
      ],
    },
    {
      heading: "GINA ICS daily dose classification, adults and adolescents (GINA 2025)",
      columns: ["Inhaled corticosteroid (mcg/day)", "Low dose", "Medium dose", "High dose"],
      rows: [
        ["Beclometasone (pMDI, standard particle)", "200-500", "Over 500-1000", "Over 1000"],
        ["Beclometasone (DPI or pMDI, extrafine)", "100-200", "Over 200-400", "Over 400"],
        ["Budesonide (DPI or pMDI)", "200-400", "Over 400-800", "Over 800"],
        ["Ciclesonide (pMDI, extrafine)", "80-160", "Over 160-320", "Over 320"],
        ["Fluticasone furoate (DPI)", "100", "Not applicable", "200"],
        ["Fluticasone propionate (DPI or pMDI)", "100-250", "Over 250-500", "Over 500"],
      ],
    },
    {
      heading: "Bronchodilator responsiveness criteria (ATS/ERS 2022, GINA 2025)",
      columns: ["Criterion", "Definition", "Use"],
      rows: [
        ["ATS/ERS 2022", "Rise in FEV1 or FVC over 10% of the predicted value", "Current interpretation standard"],
        ["GINA adults", "FEV1 rise over 12% and over 200 mL from baseline", "Supports asthma diagnosis"],
        ["GINA children", "FEV1 rise over 12% of predicted", "Supports asthma diagnosis"],
        ["Timing", "Repeat 10-15 minutes after 400 mcg salbutamol", "Withhold SABA 4-6 hours and LABA 24 hours before"],
        ["Pitfall", "Absent response does not exclude asthma; positive response occurs in COPD", "Interpret with the whole picture"],
      ],
    },
  ],

  "respiratory-copd": [
    {
      heading: "GOLD ABE assessment classification for initial therapy (GOLD 2026)",
      columns: ["Group", "Exacerbation history (past year)", "Symptoms", "Initial therapy"],
      rows: [
        ["Group A", "0-1 moderate, none needing admission", "mMRC 0-1 and CAT under 10", "A bronchodilator (long-acting preferred)"],
        ["Group B", "0-1 moderate, none needing admission", "mMRC 2 or more or CAT 10 or more", "LABA plus LAMA"],
        ["Group E", "2 or more moderate, or 1 or more needing admission", "Any", "LABA plus LAMA; add ICS if eosinophils 300 cells/mcL or more"],
      ],
    },
    {
      heading: "COPD Assessment Test (CAT) score bands (GOLD 2026)",
      columns: ["Band", "Impact", "Meaning"],
      rows: [
        ["Structure", "8 items each 0-5, total 0-40", "Cough, phlegm, chest tightness, breathlessness, activity, confidence, sleep, energy"],
        ["Under 10", "Low impact", "GOLD low-symptom group"],
        ["10-20", "Medium impact", "Symptomatic; 10 or more places patient in group B"],
        ["21-30", "High impact", "Marked limitation; review therapy and rehabilitation"],
        ["Over 30", "Very high impact", "Severe limitation; consider advanced therapies and palliative support"],
        ["Minimal important change", "2 points", "Change of 2 or more is clinically meaningful"],
      ],
    },
    {
      heading: "BODE index for COPD prognosis (GOLD 2026)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["B - BMI", "Over 21 kg/m2", "0"],
        ["B - BMI", "21 kg/m2 or less", "1"],
        ["O - FEV1 % predicted", "65% or more", "0"],
        ["O - FEV1 % predicted", "50-64%", "1"],
        ["O - FEV1 % predicted", "36-49%", "2"],
        ["O - FEV1 % predicted", "35% or less", "3"],
        ["D - mMRC dyspnoea", "Grade 0-1", "0"],
        ["D - mMRC dyspnoea", "Grade 2", "1"],
        ["D - mMRC dyspnoea", "Grade 3", "2"],
        ["D - mMRC dyspnoea", "Grade 4", "3"],
        ["E - 6-minute walk distance", "350 m or more", "0"],
        ["E - 6-minute walk distance", "250-349 m", "1"],
        ["E - 6-minute walk distance", "150-249 m", "2"],
        ["E - 6-minute walk distance", "149 m or less", "3"],
      ],
    },
    {
      heading: "BODE index quartiles - interpretation",
      columns: ["Total", "Quartile", "Meaning"],
      rows: [
        ["0-2", "Quartile 1", "Lowest mortality"],
        ["3-4", "Quartile 2", "Higher mortality"],
        ["5-6", "Quartile 3", "Consider referral for lung transplant assessment"],
        ["7-10", "Quartile 4", "Highest mortality; transplant listing range if otherwise eligible"],
      ],
    },
    {
      heading: "Spirometry severity grading by z-score (ATS/ERS 2022 interpretation)",
      columns: ["Grade", "FEV1 z-score", "Note"],
      rows: [
        ["Normal", "Above -1.645 (above LLN)", "Obstruction defined by FEV1/FVC z-score under -1.645"],
        ["Mild", "-1.65 to -2.5", "Replaces % predicted cut-offs; race-neutral GLI Global equations"],
        ["Moderate", "-2.51 to -4.0", "Same grading for obstruction or restriction"],
        ["Severe", "Under -4.0", "GOLD still grades COPD by FEV1 % predicted"],
      ],
    },
    {
      heading: "Spirometry pattern classification (ATS/ERS 2022, GOLD 2026)",
      columns: ["Pattern", "FEV1/FVC", "FEV1 and FVC", "Next step"],
      rows: [
        ["Normal", "At or above LLN", "Both at or above LLN", "No ventilatory defect"],
        ["Obstruction", "Below LLN (GOLD uses under 0.70 post-BD)", "FEV1 low, FVC normal or low", "Bronchodilator test; grade severity"],
        ["Possible restriction", "Normal or high", "FVC below LLN", "Confirm by TLC below LLN on lung volumes"],
        ["PRISm", "Normal (0.70 or more)", "FEV1 and/or FVC below LLN (FEV1 under 80%)", "Preserved ratio impaired spirometry; follow up, may progress"],
        ["Mixed defect", "Below LLN", "FVC low with TLC below LLN", "Full lung function tests"],
      ],
    },
    {
      heading: "COPD exacerbation severity classification (GOLD 2026, Rome proposal)",
      columns: ["Severity", "Rome criteria", "Traditional definition"],
      rows: [
        ["Mild", "Dyspnoea VAS under 5, RR under 24, HR under 95, SpO2 92% or more, CRP under 10 mg/L", "Treated with short-acting bronchodilators only"],
        ["Moderate", "3 of 5: VAS 5 or more, RR 24 or more, HR 95 or more, SpO2 under 92% (or fall over 3%), CRP 10 or more", "Needs antibiotics and/or oral steroids"],
        ["Severe", "Hypercapnia (PaCO2 over 45 mmHg) with acidosis (pH under 7.35)", "Needs hospital admission or ED visit"],
      ],
    },
    {
      heading: "Anthonisen types of COPD exacerbation (GOLD 2026)",
      columns: ["Type", "Cardinal symptoms present", "Antibiotic"],
      rows: [
        ["Type 1", "All three: more breathlessness, more sputum volume, sputum purulence", "Benefits most; give antibiotic"],
        ["Type 2", "Any two of the three", "Give if sputum purulence is one of the two"],
        ["Type 3", "One of the three plus URTI, fever, wheeze, cough or 20% rise in RR or HR", "Usually not needed"],
        ["Ventilated", "Any exacerbation needing NIV or invasive ventilation", "Always give antibiotic"],
      ],
    },
    {
      heading: "DECAF score for death in COPD exacerbation (BTS; OHCM 11e 2024)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["D - Dyspnoea (eMRCD)", "5a: too breathless to leave house, independent in washing and dressing", "1"],
        ["D - Dyspnoea (eMRCD)", "5b: too breathless to leave house, needs help washing and dressing", "2"],
        ["E - Eosinopenia", "Eosinophils under 0.05 x 10^9/L", "1"],
        ["C - Consolidation", "On chest X-ray", "1"],
        ["A - Acidaemia", "pH under 7.30", "1"],
        ["F - Atrial fibrillation", "Including history of AF", "1"],
      ],
    },
    {
      heading: "DECAF score - interpretation",
      columns: ["Total", "In-hospital mortality risk", "Action"],
      rows: [
        ["0-1", "Low", "Suitable for hospital-at-home or early supported discharge"],
        ["2", "Intermediate", "Clinical judgement; admit"],
        ["3-6", "High", "Senior review, early escalation or ceiling-of-care discussion"],
      ],
    },
  ],

  "respiratory-pneumonia-cap": [
    {
      heading: "CRB-65 score for CAP in the community (NICE NG138, BTS)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["C - Confusion", "New disorientation in person, place or time (AMTS 8 or less)", "1"],
        ["R - Respiratory rate", "30 per minute or more", "1"],
        ["B - Blood pressure", "Systolic under 90 or diastolic 60 mmHg or less", "1"],
        ["65 - Age", "65 years or more", "1"],
      ],
    },
    {
      heading: "CRB-65 score - interpretation",
      columns: ["Total", "30-day mortality", "Action"],
      rows: [
        ["0", "Low (under 1%)", "Home treatment usually; oral amoxicillin"],
        ["1-2", "Intermediate (1-10%)", "Consider hospital assessment"],
        ["3-4", "High (over 10%)", "Urgent hospital admission"],
      ],
    },
    {
      heading: "Pneumonia Severity Index (PSI/PORT) scoring variables (IDSA/ATS 2019)",
      columns: ["Variable", "Points added", "Detail"],
      rows: [
        ["Age - men", "Age in years", "Demographic"],
        ["Age - women", "Age in years minus 10", "Demographic"],
        ["Nursing home resident", "+10", "Demographic"],
        ["Neoplastic disease", "+30", "Comorbidity"],
        ["Liver disease", "+20", "Comorbidity"],
        ["Congestive heart failure", "+10", "Comorbidity"],
        ["Cerebrovascular disease", "+10", "Comorbidity"],
        ["Renal disease", "+10", "Comorbidity"],
        ["Altered mental status", "+20", "Examination"],
        ["Respiratory rate 30/min or more", "+20", "Examination"],
        ["Systolic BP under 90 mmHg", "+20", "Examination"],
        ["Temperature under 35 or 40 C or more", "+15", "Examination"],
        ["Pulse 125/min or more", "+10", "Examination"],
        ["Arterial pH under 7.35", "+30", "Laboratory"],
        ["BUN 30 mg/dL (urea 11 mmol/L) or more", "+20", "Laboratory"],
        ["Sodium under 130 mmol/L", "+20", "Laboratory"],
        ["Glucose 250 mg/dL or more", "+10", "Laboratory"],
        ["Haematocrit under 30%", "+10", "Laboratory"],
        ["PaO2 under 60 mmHg or SpO2 under 90%", "+10", "Laboratory"],
        ["Pleural effusion", "+10", "Chest X-ray"],
      ],
    },
    {
      heading: "PSI/PORT risk class and site of care (IDSA/ATS 2019)",
      columns: ["Class", "Points", "30-day mortality", "Site of care"],
      rows: [
        ["Class I", "Age under 50, no comorbidity or abnormal signs", "0.1%", "Outpatient"],
        ["Class II", "70 or less", "0.6%", "Outpatient"],
        ["Class III", "71-90", "0.9%", "Outpatient or brief observation"],
        ["Class IV", "91-130", "9.3%", "Inpatient"],
        ["Class V", "Over 130", "27.0%", "Inpatient, consider ICU"],
      ],
    },
    {
      heading: "SMART-COP score for need of intensive support in CAP (Harrison 22e 2025)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["S - Systolic BP", "Under 90 mmHg", "2"],
        ["M - Multilobar", "Chest X-ray involvement of more than one lobe", "1"],
        ["A - Albumin", "Under 3.5 g/dL", "1"],
        ["R - Respiratory rate", "25/min or more (age 50 or less); 30/min or more (over 50)", "1"],
        ["T - Tachycardia", "125/min or more", "1"],
        ["C - Confusion", "New onset", "1"],
        ["O - Oxygen low", "Age 50 or less: SpO2 93% or less, PaO2 under 70, P/F under 333", "2"],
        ["O - Oxygen low (older)", "Age over 50: SpO2 90% or less, PaO2 under 60, P/F under 250", "2"],
        ["P - pH", "Arterial pH under 7.35", "2"],
      ],
    },
    {
      heading: "SMART-COP score - interpretation",
      columns: ["Total", "Risk of needing ventilation or vasopressor", "Meaning"],
      rows: [
        ["0-2", "Low risk", "Ward or home care"],
        ["3-4", "Moderate risk (about 1 in 8)", "Close monitoring"],
        ["5-6", "High risk (about 1 in 3)", "ICU or HDU review"],
        ["7 or more", "Very high risk (about 2 in 3)", "ICU"],
      ],
    },
    {
      heading: "IDSA/ATS criteria for severe community-acquired pneumonia (IDSA/ATS 2019)",
      columns: ["Criterion", "Definition", "Use"],
      rows: [
        ["Major 1", "Septic shock needing vasopressors", "Any 1 major = severe CAP, ICU"],
        ["Major 2", "Respiratory failure needing mechanical ventilation", "Any 1 major = severe CAP, ICU"],
        ["Minor 1", "Respiratory rate 30/min or more", "3 or more minor = severe CAP"],
        ["Minor 2", "PaO2/FiO2 ratio 250 or less", "3 or more minor = severe CAP"],
        ["Minor 3", "Multilobar infiltrates", "3 or more minor = severe CAP"],
        ["Minor 4", "Confusion or disorientation", "3 or more minor = severe CAP"],
        ["Minor 5", "Uraemia (BUN 20 mg/dL or more)", "3 or more minor = severe CAP"],
        ["Minor 6", "Leucopenia under 4000 cells/mcL due to infection", "3 or more minor = severe CAP"],
        ["Minor 7", "Thrombocytopenia under 100,000/mcL", "3 or more minor = severe CAP"],
        ["Minor 8", "Hypothermia under 36 degrees C", "3 or more minor = severe CAP"],
        ["Minor 9", "Hypotension needing aggressive fluid resuscitation", "3 or more minor = severe CAP"],
      ],
    },
  ],

  "respiratory-acute-cough-influenza-covid": [
    {
      heading: "MoHFW classification of influenza-like illness into categories A, B, C (MoHFW)",
      columns: ["Category", "Features", "Testing", "Treatment"],
      rows: [
        ["Category A", "Mild fever plus cough or sore throat, with or without body ache, headache, diarrhoea, vomiting", "Not needed", "Symptomatic; no oseltamivir; stay home, review in 24-48 hours"],
        ["Category B (i)", "Category A plus high-grade fever and severe sore throat", "Not needed", "Home isolation and oseltamivir"],
        ["Category B (ii)", "Category A plus high risk: under 5, 65 or over, pregnant, chronic disease, immunosuppressed", "Not needed", "Home isolation and oseltamivir"],
        ["Category C", "Breathlessness, chest pain, drowsiness, low BP, haemoptysis, cyanosis; in child poor feeding, fits", "Test", "Admit, isolate, oseltamivir immediately"],
      ],
    },
    {
      heading: "WHO surveillance case criteria for ILI and SARI (WHO 2014, still in use)",
      columns: ["Case", "Definition", "Use"],
      rows: [
        ["ILI (influenza-like illness)", "Acute respiratory infection with measured fever 38 C or more and cough, onset within 10 days", "Outpatient sentinel surveillance"],
        ["SARI (severe acute resp. infection)", "ILI definition plus need for hospital admission", "Inpatient surveillance; test for influenza and SARS-CoV-2"],
      ],
    },
  ],

  "respiratory-tuberculosis-ntep": [
    {
      heading: "NTEP TB case definitions classification (NTEP Training Modules 2020)",
      columns: ["Class", "Definition", "Note"],
      rows: [
        ["Presumptive pulmonary TB", "Cough or fever over 2 weeks, weight loss, haemoptysis or any CXR abnormality", "In PLHIV: any of cough, fever, weight loss, night sweats (W4SS)"],
        ["Microbiologically confirmed TB", "Positive smear, culture or WHO-endorsed rapid test (CBNAAT, Truenat, LPA)", "Notify; UDST for all"],
        ["Clinically diagnosed TB", "Not microbiologically confirmed; diagnosed on CXR, histology or clinical grounds and treated", "Reclassify if later confirmed"],
        ["Pulmonary TB", "Lung parenchyma or tracheobronchial tree; miliary TB counts here", "Pulmonary plus extrapulmonary = pulmonary"],
        ["Extrapulmonary TB", "Pleura, lymph nodes, abdomen, genitourinary, skin, bone, joints, meninges", "Pleural TB is extrapulmonary"],
      ],
    },
    {
      heading: "NTEP classification by history of previous treatment (NTEP 2020)",
      columns: ["Type", "Definition", "Action"],
      rows: [
        ["New", "Never treated for TB, or took anti-TB drugs for under 1 month", "Drug-sensitive regimen after UDST"],
        ["Recurrent TB", "Declared cured or completed earlier, now microbiologically confirmed again", "UDST; regimen by resistance pattern"],
        ["Treatment after failure", "Treatment failed at end of most recent course", "UDST; suspect drug resistance"],
        ["Treatment after loss to follow-up", "Previously lost to follow-up, now returns with active TB", "UDST; restart"],
        ["Other previously treated", "Previously treated, outcome unknown or undocumented", "UDST"],
        ["Transferred in", "Registered in another TB unit and moved in to continue treatment", "Continue same regimen"],
      ],
    },
    {
      heading: "Types of drug-resistant TB (WHO 2021 definitions, NTEP PMDT 2021)",
      columns: ["Type", "Resistance", "Regimen direction"],
      rows: [
        ["Mono-resistant TB", "One first-line drug only (other than rifampicin)", "Tailored regimen"],
        ["Hr-TB", "Isoniazid resistant, rifampicin susceptible", "6 months of R, Z, E and levofloxacin"],
        ["Poly-resistant TB", "More than one first-line drug, not both H and R", "Tailored regimen"],
        ["RR-TB", "Rifampicin resistant, with or without other resistance", "Manage as MDR-TB"],
        ["MDR-TB", "Resistant to at least isoniazid and rifampicin", "BPaLM or shorter oral bedaquiline regimen if eligible"],
        ["Pre-XDR-TB", "MDR/RR-TB plus resistance to any fluoroquinolone", "Longer individualised regimen or BPaL"],
        ["XDR-TB", "MDR/RR-TB plus fluoroquinolone plus bedaquiline and/or linezolid resistance", "Individualised longer regimen, expert committee"],
      ],
    },
    {
      heading: "TB treatment outcome classification (WHO 2021, NTEP)",
      columns: ["Outcome", "Definition", "Note"],
      rows: [
        ["Cured", "Bacteriologically confirmed at start, completed treatment with bacteriological response, no failure", "Needs follow-up smear or culture evidence"],
        ["Treatment completed", "Completed treatment without failure, but no record of bacteriological response", "Includes clinically diagnosed patients"],
        ["Treatment failed", "Regimen stopped or permanently changed for no response, resistance or adverse reaction", "Test for drug resistance"],
        ["Died", "Died before starting or during treatment", "Any cause"],
        ["Lost to follow-up", "Did not start, or treatment interrupted 2 consecutive months (WHO); 1 month in NTEP", "Trace through Ni-kshay and TB Champions"],
        ["Not evaluated", "No outcome assigned, including transfer out with unknown outcome", "Minimise by linking records across units"],
        ["Treatment success", "Sum of cured and treatment completed", "Programme indicator"],
      ],
    },
    {
      heading: "Sputum AFB smear grading, Ziehl-Neelsen (IUATLD/WHO; NTEP lab manual)",
      columns: ["Grade", "AFB seen at 1000x", "Fields to examine"],
      rows: [
        ["Negative", "No AFB in 100 fields", "100"],
        ["Scanty", "1-9 AFB in 100 fields (record exact number)", "100"],
        ["1+", "10-99 AFB in 100 fields", "100"],
        ["2+", "1-10 AFB per field", "At least 50"],
        ["3+", "More than 10 AFB per field", "At least 20"],
      ],
    },
    {
      heading: "Chest X-ray extent classification of pulmonary TB (NTA; Crofton)",
      columns: ["Class", "Radiological extent", "Meaning"],
      rows: [
        ["Minimal", "Slight to moderate density, no cavity; total extent within one lung above 2nd chondrosternal junction", "Early disease; often smear negative"],
        ["Moderately advanced", "Scattered lesions up to one lung volume, or dense lesions up to one-third of one lung; cavities under 4 cm total", "Usually smear positive"],
        ["Far advanced", "More extensive than moderately advanced", "High bacillary load, more sequelae"],
      ],
    },
  ],

  "respiratory-tb-infection-contacts-tpt": [
    {
      heading: "Tuberculin skin test induration criteria for TB infection (CDC; NTEP TPT 2021)",
      columns: ["Cut-off", "Positive in these groups", "Note"],
      rows: [
        ["5 mm or more", "PLHIV, recent contacts of TB, fibrotic CXR lesions, transplant or immunosuppressed (steroid)", "Lowest threshold for highest risk"],
        ["10 mm or more", "Others in high-burden countries like India, children under 5, diabetics, CKD, health workers", "Usual Indian cut-off"],
        ["15 mm or more", "Low-risk people in low-burden settings", "Not usually applied in India"],
        ["Reading", "Measure transverse induration (not redness) at 48-72 hours after 5 TU PPD (2 TU RT23)", "BCG gives false positives; IGRA not affected"],
      ],
    },
    {
      heading: "Severe versus non-severe TB classification in children (WHO 2022)",
      columns: ["Class", "Features", "Treatment"],
      rows: [
        ["Non-severe TB", "Peripheral node TB; unobstructed hilar nodes; simple effusion; non-cavity disease in one lobe", "4 months (2HRZ(E)/2HR) in age 3 months to 16 years"],
        ["Severe TB", "Cavities, disease beyond one lobe, miliary, TB meningitis, spinal or osteoarticular TB, airway obstruction", "6 months standard; longer or intensive regimen for TBM and bone TB"],
      ],
    },
  ],

  "respiratory-pleural-effusion": [
    {
      heading: "ACCP risk classification of parapneumonic effusion (ACCP; BTS 2023)",
      columns: ["Category", "Anatomy", "Bacteriology and chemistry", "Drainage"],
      rows: [
        ["Category 1 (very low risk)", "Free-flowing, under 10 mm on decubitus film", "Not sampled", "No"],
        ["Category 2 (low risk)", "Small to moderate, free-flowing, under half hemithorax", "Gram stain and culture negative, pH 7.20 or more", "No"],
        ["Category 3 (moderate risk)", "Half hemithorax or more, loculated, or thick parietal pleura", "Positive Gram or culture, or pH under 7.20 or glucose under 60 mg/dL", "Yes - chest drain"],
        ["Category 4 (high risk)", "Any", "Frank pus (empyema)", "Yes - drain, consider fibrinolytic or surgery"],
      ],
    },
    {
      heading: "Stages of parapneumonic effusion and empyema (BTS 2023)",
      columns: ["Stage", "Pathology", "Fluid and treatment"],
      rows: [
        ["Stage 1 - exudative", "Increased capillary permeability, free-flowing sterile fluid", "pH over 7.2, normal glucose; antibiotics alone"],
        ["Stage 2 - fibrinopurulent", "Bacterial invasion, fibrin deposition, loculation", "pH under 7.2, low glucose, high LDH; chest drain, consider tPA-DNase"],
        ["Stage 3 - organising", "Fibroblast ingrowth, thick inelastic pleural peel", "Trapped lung; VATS or decortication"],
      ],
    },
    {
      heading: "RAPID score for pleural infection mortality (BTS 2023)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["R - Renal (urea)", "Under 5 mmol/L", "0"],
        ["R - Renal (urea)", "5-8 mmol/L", "1"],
        ["R - Renal (urea)", "Over 8 mmol/L", "2"],
        ["A - Age", "Under 50 years", "0"],
        ["A - Age", "50-70 years", "1"],
        ["A - Age", "Over 70 years", "2"],
        ["P - Purulence of fluid", "Purulent", "0"],
        ["P - Purulence of fluid", "Non-purulent", "1"],
        ["I - Infection source", "Community-acquired", "0"],
        ["I - Infection source", "Hospital-acquired", "1"],
        ["D - Dietary factor (albumin)", "27 g/L or more", "0"],
        ["D - Dietary factor (albumin)", "Under 27 g/L", "1"],
      ],
    },
    {
      heading: "RAPID score - interpretation",
      columns: ["Total", "Risk group", "3-month mortality"],
      rows: [
        ["0-2", "Low risk", "About 1-3%"],
        ["3-4", "Medium risk", "About 9-12%"],
        ["5-7", "High risk", "About 30-50%; consider early surgical opinion"],
      ],
    },
  ],

  "respiratory-osa": [
    {
      heading: "STOP-BANG questionnaire score for OSA (AASM; OHCM 11e 2024)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["S - Snoring", "Loud snoring, heard through closed doors", "1"],
        ["T - Tired", "Daytime tiredness or sleepiness", "1"],
        ["O - Observed", "Observed apnoea, choking or gasping in sleep", "1"],
        ["P - Pressure", "High blood pressure, treated or not", "1"],
        ["B - BMI", "Over 35 kg/m2", "1"],
        ["A - Age", "Over 50 years", "1"],
        ["N - Neck", "Neck circumference over 40 cm", "1"],
        ["G - Gender", "Male", "1"],
      ],
    },
    {
      heading: "STOP-BANG score - interpretation",
      columns: ["Total", "Risk of moderate-severe OSA", "Action"],
      rows: [
        ["0-2", "Low", "Look for another cause of symptoms"],
        ["3-4", "Intermediate", "High risk if 2 or more STOP items plus male, BMI over 35 or neck over 40 cm"],
        ["5-8", "High", "Sleep study; perioperative precautions"],
      ],
    },
    {
      heading: "Epworth Sleepiness Scale items (Johns; AASM)",
      columns: ["Item", "Situation (chance of dozing)", "Scoring"],
      rows: [
        ["Item 1", "Sitting and reading", "0 never, 1 slight, 2 moderate, 3 high chance"],
        ["Item 2", "Watching TV", "0-3"],
        ["Item 3", "Sitting inactive in a public place (theatre, meeting)", "0-3"],
        ["Item 4", "Passenger in a car for an hour without a break", "0-3"],
        ["Item 5", "Lying down to rest in the afternoon", "0-3"],
        ["Item 6", "Sitting and talking to someone", "0-3"],
        ["Item 7", "Sitting quietly after lunch without alcohol", "0-3"],
        ["Item 8", "In a car, stopped for a few minutes in traffic", "0-3"],
      ],
    },
    {
      heading: "Epworth Sleepiness Scale score bands",
      columns: ["Total (0-24)", "Meaning", "Action"],
      rows: [
        ["0-5", "Lower normal daytime sleepiness", "None"],
        ["6-10", "Higher normal daytime sleepiness", "None"],
        ["11-12", "Mild excessive daytime sleepiness", "Look for OSA, insufficient sleep, drugs"],
        ["13-15", "Moderate excessive daytime sleepiness", "Sleep evaluation; driving advice"],
        ["16-24", "Severe excessive daytime sleepiness", "Urgent sleep evaluation; advise not to drive"],
      ],
    },
    {
      heading: "Obesity hypoventilation syndrome diagnostic criteria (ATS 2019)",
      columns: ["Criterion", "Definition", "Note"],
      rows: [
        ["Obesity", "BMI 30 kg/m2 or more", "Commonest in class II-III obesity"],
        ["Daytime hypercapnia", "Awake PaCO2 45 mmHg or more at sea level", "Serum bicarbonate under 27 mmol/L makes OHS unlikely"],
        ["Exclusion", "No other cause of hypoventilation (COPD, neuromuscular, chest wall, drugs)", "About 90% also have OSA"],
        ["Treatment", "CPAP if with severe OSA; NIV (bilevel) if hypoventilation predominant", "Weight loss, including bariatric surgery"],
      ],
    },
  ],
};

export default scores;
