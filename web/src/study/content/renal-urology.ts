import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "renal-urology-chronic-kidney-disease",
  title: "Chronic kidney disease: staging, slowing progression and what the family physician owns",
  oneLiner:
    "Chronic kidney disease is an abnormality of kidney structure or function present for more than 3 months - most often an eGFR below 60 mL/min/1.73 m2 or a urine albumin-creatinine ratio of 30 mg/g or more - and it is staged by G category (eGFR) and A category (albuminuria) together, because the two predict outcome independently.",
  frequency: "core",
  keywords: [
    "CKD",
    "eGFR",
    "CKD-EPI",
    "MDRD",
    "Cockcroft-Gault",
    "albumin-creatinine ratio",
    "ACR",
    "KDIGO",
    "SGLT2 inhibitor",
    "dapagliflozin",
    "finerenone",
    "diabetic kidney disease",
    "CKD of unknown aetiology",
    "Uddanam nephropathy",
    "renal replacement therapy",
    "PMNDP",
  ],
  sections: [
    {
      heading: "Definition and the two-axis staging that examiners want",
      points: [
        "**KDIGO definition:** abnormalities of kidney structure or function, present for **more than 3 months**, with implications for health. Either an **eGFR below 60 mL/min/1.73 m2**, or one or more markers of kidney damage - albuminuria (ACR 30 mg/g or more), urine sediment abnormalities, renal tubular disorders, histological abnormality, structural abnormality on imaging, or a history of kidney transplantation.",
        "The 3-month rule is what separates CKD from acute kidney injury; a single abnormal creatinine is never CKD, and repeating the test at 3 months is the commonest missed step in Indian practice.",
        "**G categories (eGFR, mL/min/1.73 m2):** G1 90 or more (normal or high), G2 60-89 (mildly decreased), G3a 45-59, G3b 30-44, G4 15-29, G5 below 15 (kidney failure). G1 and G2 are only CKD if a damage marker is also present.",
        "**A categories (urine albumin-creatinine ratio):** A1 under 30 mg/g (under 3 mg/mmol, normal to mildly increased), A2 30-300 mg/g (3-30 mg/mmol, moderately increased, the old microalbuminuria), A3 above 300 mg/g (above 30 mg/mmol, severely increased, the old overt proteinuria).",
        "The **KDIGO heat map** combines them: G1-G2 with A1 is low risk (green), G3a A1 and G1-G2 A2 are moderately increased (yellow), G3b A1 / G3a A2 / G1-G2 A3 are high risk (orange), and everything from G3a A3, G3b A2 and all of G4 and G5 downwards is very high risk (red). **A patient at G3a A3 is at higher risk than one at G3b A1** - which is the whole point of staging on two axes.",
        "Write the stage as **CKD G3b A2, diabetic kidney disease** - a bare label of stage 3 CKD loses marks because it omits the albuminuria that drives both the prognosis and the drug choice.",
      ],
    },
    {
      heading: "The eGFR equations, written exactly",
      points: [
        "**CKD-EPI 2021 creatinine (race-free, the current standard):** eGFR = 142 x min(Scr/k, 1) to the power alpha x max(Scr/k, 1) to the power -1.200 x 0.9938 to the power age x 1.012 if female, where k = 0.7 for females and 0.9 for males, and alpha = -0.241 for females and -0.302 for males; Scr in mg/dL, age in years, result in mL/min/1.73 m2.",
        "**CKD-EPI 2009 creatinine:** eGFR = 141 x min(Scr/k, 1) to the power alpha x max(Scr/k, 1) to the power -1.209 x 0.993 to the power age x 1.018 if female x 1.159 if Black, with k = 0.7 female and 0.9 male, alpha = -0.329 female and -0.411 male. The race coefficient has been removed in the 2021 revision and was never appropriate for Indian patients.",
        "**MDRD 4-variable (IDMS-traceable creatinine):** eGFR = 175 x Scr to the power -1.154 x age to the power -0.203 x 0.742 if female x 1.212 if Black. It underestimates above 60 mL/min/1.73 m2 and is being retired, but many Indian laboratory reports still print it.",
        "**Cockcroft-Gault creatinine clearance** = [(140 - age in years) x weight in kg] / (72 x Scr in mg/dL), multiplied by **0.85 if female**. The answer is in mL/min and is **not** normalised to body surface area - this is the equation almost every drug label was written against, so it is the one used for dosing.",
        "**Schwartz bedside formula for children:** eGFR = 0.413 x height in cm / Scr in mg/dL.",
        "**When to de-index:** for a narrow therapeutic index drug in a very large or very small adult, convert the reported eGFR back to individual clearance - CrCl = eGFR x body surface area / 1.73 - or simply use Cockcroft-Gault. Creatinine is a poor filtration marker in the malnourished, the amputee, the cirrhotic and the bodybuilder; **cystatin C-based CKD-EPI** is the confirmatory test where the creatinine estimate is not believable.",
      ],
    },
    {
      heading: "Who gets CKD in India, and who to screen",
      points: [
        "The **ICMR-INDIAB and SEEK studies put adult CKD prevalence at about 10-17%**, and the Indian Society of Nephrology CKD Registry shows **diabetic kidney disease as the single commonest cause (about 31%)**, followed by CKD of undetermined aetiology, hypertensive and vascular disease, and chronic glomerulonephritis.",
        "**CKD of unknown aetiology (CKDu)** clusters in the Uddanam belt of Srikakulam district in Andhra Pradesh, in parts of Odisha and Tamil Nadu, affecting young male agricultural workers with bland urine, small kidneys and no diabetes or hypertension - heat stress, dehydration, agrochemicals and possibly heavy metals are implicated.",
        "Other Indian contributors an examiner expects: **long-term NSAID and unregulated analgesic use, ayurvedic and siddha preparations containing heavy metals, Aristolochia-containing herbals, untreated urinary obstruction from stones or BPH, recurrent pyelonephritis, and snake-bite or falciparum malaria that left a scarred kidney**.",
        "**Screen annually** (urine ACR plus serum creatinine with eGFR): everyone with diabetes, hypertension, cardiovascular disease, heart failure, obesity, HIV, a family history of kidney disease, recurrent stones or urinary obstruction, autoimmune disease, or past AKI; and adults over 60.",
        "Screen the diabetic **from diagnosis in type 2 diabetes and from 5 years after diagnosis in type 1**, and do not screen with a dipstick alone - a dipstick misses category A2 albuminuria entirely, which is precisely the stage at which treatment changes outcome.",
        "Confirm an abnormal ACR by repeating it: **2 out of 3 first-morning specimens over 3-6 months** must be abnormal, because fever, exercise, heart failure, menstruation, UTI and marked hyperglycaemia all raise it transiently.",
      ],
    },
    {
      heading: "Evaluation when CKD is first found",
      points: [
        "The three questions in order: **is this acute or chronic, is there an obstruction, and is there a treatable glomerular disease?**",
        "Chronicity is suggested by small echogenic kidneys on ultrasound, anaemia, hypocalcaemia with hyperphosphataemia, a raised PTH, and old records showing a raised creatinine - **but small kidneys are not seen in diabetic nephropathy, amyloidosis, polycystic disease or HIV nephropathy**, where the kidneys stay normal or large.",
        "**Ultrasound of the kidneys, ureters and bladder in every new case** - it excludes hydronephrosis, shows size and echotexture, finds polycystic disease and stones, and shows a post-void residual that points to bladder outlet obstruction.",
        "Baseline panel: urine routine and microscopy (dysmorphic red cells and red cell casts change everything), urine ACR, serum creatinine with eGFR, sodium, potassium, bicarbonate, calcium, phosphate, albumin, haemoglobin with iron studies, HbA1c, lipids, PTH from G3b onwards, and hepatitis B, hepatitis C and HIV serology before any dialysis or transplant plan.",
        "Look for the reversible layer on top of every chronic kidney: **volume depletion, NSAIDs, contrast, aminoglycosides, obstruction, uncontrolled hypertension, hypercalcaemia and infection** - correcting these often recovers a third of the lost eGFR.",
        "**Rate of progression** matters more than any single value: a fall of 5 mL/min/1.73 m2 per year or more, or a drop in G category with a 25% or greater fall from baseline, is rapid progression and warrants nephrology referral.",
      ],
    },
    {
      heading: "Slowing progression - the four pillars",
      points: [
        "**Pillar 1 - blood pressure.** KDIGO 2021 recommends a systolic target **below 120 mmHg using standardised office measurement** in adults with CKD not on dialysis; where standardised measurement is not possible, the practical Indian target is below 130/80 mmHg. Restrict sodium to under 2 g/day (under 5 g of salt).",
        "**Pillar 2 - renin-angiotensin system blockade.** An ACE inhibitor or ARB titrated to the **maximum tolerated dose** in anyone with CKD, hypertension and an ACR of 30 mg/g or more (telmisartan 40-80 mg OD, enalapril 5-20 mg BD, ramipril 2.5-10 mg OD). Recheck creatinine and potassium at 2-4 weeks: **a creatinine rise of up to 30% is expected and the drug is continued**; more than 30%, or potassium above 5.5 mmol/L, means stop and look for renal artery stenosis, volume depletion or NSAIDs. Never combine an ACE inhibitor with an ARB.",
        "**Pillar 3 - SGLT2 inhibition.** Dapagliflozin 10 mg PO OD or empagliflozin 10 mg PO OD, started when **eGFR is 20 mL/min/1.73 m2 or more** with an ACR of 200 mg/g or more, or with heart failure at any albuminuria, or in type 2 diabetes with CKD. DAPA-CKD and EMPA-KIDNEY showed benefit in diabetic and non-diabetic CKD alike. **An initial eGFR dip of up to 30% is haemodynamic, reversible and NOT a reason to stop**, and the drug is continued until dialysis or transplantation. Counsel on genital mycotic infection, hold during acute illness or fasting to avoid euglycaemic ketoacidosis, and expect no glucose lowering below an eGFR of 45.",
        "**Pillar 4 - the non-steroidal mineralocorticoid receptor antagonist.** Finerenone 10 mg PO OD if eGFR is 25-59 and 20 mg if eGFR is 60 or more, in type 2 diabetes with CKD, ACR 30 mg/g or more and **serum potassium 5.0 mmol/L or less** (FIDELIO-DKD, FIGARO-DKD). Recheck potassium at 4 weeks and after every dose change.",
        "**Add-ons that also count:** a GLP-1 receptor agonist (semaglutide, FLOW trial 2024) in type 2 diabetes with CKD; a statin for everyone with CKD aged 50 or more (atorvastatin 20 mg, or simvastatin 20 mg with ezetimibe 10 mg as in SHARP) - **statins are not started de novo in dialysis patients**; dietary protein about 0.8 g/kg/day, avoiding both high-protein fad diets and protein-energy wasting; glycaemic target HbA1c 6.5-8.0% individualised; complete tobacco cessation.",
        "**Sodium bicarbonate 500-1000 mg PO TDS** to keep serum bicarbonate at 22 mmol/L or more slows progression and preserves muscle in metabolic acidosis of CKD.",
      ],
    },
    {
      heading: "The complications the family physician manages",
      points: [
        "**Anaemia:** normocytic normochromic from erythropoietin deficiency and functional iron deficiency. Investigate when Hb falls below 12 g/dL in women or 13 in men. Correct iron first - target transferrin saturation above 30% and ferritin above 200-500 ng/mL, usually with intravenous iron sucrose or ferric carboxymaltose because oral iron absorbs poorly in uraemia. Start an erythropoiesis-stimulating agent only when **Hb is below 10 g/dL**, aim for **10-11.5 g/dL and never above 13 g/dL** (higher targets increase stroke and death). Always exclude blood loss, B12 and folate deficiency, and hypothyroidism.",
        "**CKD-mineral and bone disorder:** as eGFR falls below 45, phosphate rises, calcitriol and calcium fall and PTH rises. Restrict dietary phosphate (processed food, cola, dairy, organ meats), use calcium carbonate 500 mg with meals as a binder, add active vitamin D or a calcimimetic under nephrology guidance, and do not chase a normal PTH - a modestly raised PTH is adaptive.",
        "**Hyperkalaemia:** dietary counselling that names the local offenders - coconut water, banana, citrus, tomato, potato, dry fruits and **low-sodium salt substitutes, which are potassium chloride** - plus review of ACE inhibitors, ARBs, MRAs, trimethoprim and NSAIDs. Do not abandon RAS blockade for a potassium of 5.2; treat the potassium.",
        "**Cardiovascular risk** is the commonest cause of death in CKD, and most patients with G3 disease die of cardiovascular disease before they ever reach dialysis - which is why the statin, the blood pressure and the tobacco matter as much as the creatinine.",
        "**Immunisation:** hepatitis B (a **double-dose 40 microgram schedule at 0, 1, 2 and 6 months** in CKD, with an anti-HBs check), annual influenza, pneumococcal vaccine, and COVID-19 vaccination. Vaccinate early, while the eGFR is still above 30, because the response falls as uraemia progresses.",
        "**Nephrotoxin stewardship at every visit:** no NSAIDs, no unlabelled ayurvedic or herbal nephrotonics, careful contrast, aminoglycosides only when unavoidable, and every drug dose checked against creatinine clearance.",
      ],
    },
    {
      heading: "Referral, and preparing for kidney failure",
      points: [
        "**Refer to nephrology:** eGFR below 30 (G4-G5); ACR above 300 mg/g (A3) or protein excretion above 500 mg/day; persistent unexplained haematuria with dysmorphic cells or red cell casts; rapid progression as defined above; hypertension resistant to four drugs; persistent hyperkalaemia or refractory acidosis; recurrent or extensive nephrolithiasis; suspected hereditary kidney disease; and any AKI on CKD.",
        "Refer **early** when eGFR is around 30, not at 10: late referral predicts emergency catheter-based dialysis, worse survival and no chance of a pre-emptive transplant.",
        "**Access planning:** an arteriovenous fistula should be created about 6 months before dialysis is expected. From that moment on, **protect the non-dominant arm - no blood pressure cuff, no venepuncture, no cannula, no PICC line**, and record this on the case sheet.",
        "Modality counselling covers haemodialysis, continuous ambulatory peritoneal dialysis, transplantation and conservative kidney management, with the family present and the cost stated honestly.",
        "**Programme knowledge:** the Pradhan Mantri National Dialysis Programme provides free haemodialysis in district hospitals under the National Health Mission, and Ayushman Bharat PM-JAY covers dialysis packages; transplantation is governed by the **Transplantation of Human Organs and Tissues Act 1994 (amended 2011) with the 2014 Rules**, coordinated by NOTTO, ROTTO and SOTTO.",
        "**Conservative kidney management** is a legitimate, actively chosen pathway for the very old or very frail, with symptom control, anaemia and acidosis treatment and advance care planning - it is not the same as abandoning the patient, and saying so earns marks.",
      ],
    },
  ],
  tables: [
    {
      heading: "KDIGO staging: G category, A category and risk",
      columns: ["G category", "eGFR (mL/min/1.73 m2)", "Description", "Risk at A1", "Risk at A2", "Risk at A3"],
      rows: [
        ["G1", "90 or more", "Normal or high (CKD only if damage marker)", "Low", "Moderately increased", "High"],
        ["G2", "60-89", "Mildly decreased (CKD only if damage marker)", "Low", "Moderately increased", "High"],
        ["G3a", "45-59", "Mildly to moderately decreased", "Moderately increased", "High", "Very high"],
        ["G3b", "30-44", "Moderately to severely decreased", "High", "Very high", "Very high"],
        ["G4", "15-29", "Severely decreased", "Very high", "Very high", "Very high"],
        ["G5", "Under 15", "Kidney failure", "Very high", "Very high", "Very high"],
      ],
    },
    {
      heading: "Albuminuria categories and their equivalents",
      columns: ["A category", "ACR (mg/g)", "ACR (mg/mmol)", "24-h albumin (mg/day)", "Old term"],
      rows: [
        ["A1", "Under 30", "Under 3", "Under 30", "Normoalbuminuria"],
        ["A2", "30-300", "3-30", "30-300", "Microalbuminuria"],
        ["A3", "Above 300", "Above 30", "Above 300", "Macroalbuminuria / overt proteinuria"],
        ["Nephrotic range", "Above 2200 (PCR above 3000)", "Above 220", "Above 2200", "Nephrotic proteinuria"],
      ],
    },
    {
      heading: "The four pillars of kidney protection: thresholds and doses",
      columns: ["Pillar", "Drug and dose", "Start when", "Monitor"],
      rows: [
        ["BP control", "Any effective regimen; sodium under 2 g/day", "All CKD", "Standardised office SBP below 120 mmHg (practical target under 130/80)"],
        ["RAS blockade", "Telmisartan 40-80 mg OD or enalapril 5-20 mg BD, maximum tolerated dose", "CKD with hypertension and ACR 30 mg/g or more", "Creatinine and potassium at 2-4 weeks; tolerate 30% creatinine rise"],
        ["SGLT2 inhibitor", "Dapagliflozin 10 mg OD or empagliflozin 10 mg OD", "eGFR 20 or more with ACR 200 mg/g or more, or heart failure, or type 2 diabetes with CKD", "Expect a reversible eGFR dip up to 30%; genital mycosis; hold in acute illness"],
        ["Non-steroidal MRA", "Finerenone 10 mg OD (eGFR 25-59) or 20 mg OD (eGFR 60 or more)", "Type 2 diabetes, ACR 30 mg/g or more, potassium 5.0 mmol/L or less", "Potassium at 4 weeks and after each dose change"],
      ],
    },
  ],
  redFlags: [
    "Creatinine rising over days to weeks, with oliguria, vomiting or drowsiness - acute kidney injury on CKD, admit today.",
    "Potassium above 6.0 mmol/L, or above 5.5 with any ECG change - emergency treatment and same-day dialysis assessment.",
    "Pericardial rub, asterixis, encephalopathy, seizures or intractable vomiting in advanced CKD - uraemic emergency needing urgent dialysis.",
    "Breathlessness at rest with basal crepitations and a raised JVP in a patient who cannot pass urine - fluid overload; give oxygen, sit up, intravenous furosemide and refer for dialysis.",
    "Hydronephrosis on ultrasound, or a palpable bladder with a rising creatinine - obstructive uropathy; catheterise and refer the same day.",
    "Haemoptysis with haematuria and a rapidly rising creatinine - pulmonary-renal syndrome (anti-GBM or ANCA vasculitis); this is a same-day nephrology emergency.",
    "A creatinine rise of more than 30% or potassium above 5.5 mmol/L within 4 weeks of starting an ACE inhibitor or ARB - stop it and investigate for renal artery stenosis.",
  ],
  pearls: [
    "Always stage on two axes: G category from eGFR and A category from ACR. G3a A3 carries a worse prognosis than G3b A1.",
    "One abnormal creatinine is not CKD. Repeat it at 3 months, and never label a patient before that unless old records prove chronicity.",
    "Cockcroft-Gault is for drug dosing, CKD-EPI is for staging. Mixing them up is the commonest prescribing error in renal impairment.",
    "Small kidneys mean chronicity - except in diabetic nephropathy, amyloidosis, polycystic kidney disease and HIV nephropathy, where they stay normal or large.",
    "The eGFR dip after starting an SGLT2 inhibitor or an ACE inhibitor is the drug working, not the drug harming; a fall up to 30% is expected and reversible.",
    "Most patients with CKD G3 die of cardiovascular disease before they ever reach dialysis, so the statin and the blood pressure matter as much as the creatinine.",
    "Vaccinate against hepatitis B early and at double dose (40 micrograms at 0, 1, 2 and 6 months) while the eGFR is still above 30 - the response collapses in advanced uraemia.",
    "The moment an arteriovenous fistula is planned, write across the case sheet: no BP cuff, no venepuncture, no cannula in that arm.",
  ],
  theory: [
    {
      id: "renal-urology-chronic-kidney-disease-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 56-year-old man with type 2 diabetes of 12 years and hypertension is found to have a serum creatinine of 2.1 mg/dL and a urine albumin-creatinine ratio of 620 mg/g. Discuss the staging, evaluation and management of his chronic kidney disease in family practice.",
      openingLines: [
        "Chronic kidney disease is defined by KDIGO as an abnormality of kidney structure or function present for more than 3 months, with either an eGFR below 60 mL/min/1.73 m2 or a marker of kidney damage such as an albumin-creatinine ratio of 30 mg/g or more.",
        "His creatinine of 2.1 mg/dL corresponds to an eGFR of about 35 mL/min/1.73 m2 by CKD-EPI 2021, and his ACR of 620 mg/g is category A3, so he is CKD G3b A3 - very high risk on the KDIGO heat map - most probably from diabetic kidney disease.",
      ],
      answer: [
        {
          heading: "1. Confirm chronicity and stage on two axes",
          points: [
            "Repeat the creatinine and ACR: the definition requires abnormality for more than 3 months, and 2 of 3 first-morning ACR samples must be abnormal.",
            "Compute eGFR by CKD-EPI 2021 from creatinine, age and sex; assign the G category (G3b = 30-44) and the A category (A3 = above 300 mg/g).",
            "Evidence of chronicity: previous records, anaemia, hypocalcaemia with hyperphosphataemia, raised PTH; note that kidney size is often preserved or increased in diabetic nephropathy, so a normal ultrasound does not argue against it.",
            "State the full label in the answer book: CKD G3b A3, presumed diabetic kidney disease, very high risk category.",
          ],
        },
        {
          heading: "2. Establish the cause and look for an added reversible insult",
          points: [
            "Features supporting diabetic kidney disease: duration of diabetes over 10 years, retinopathy on fundus examination (present in the great majority with diabetic glomerulosclerosis in type 1 and most in type 2), gradual albuminuria progression, and a bland urinary sediment.",
            "Features arguing against it and demanding a nephrology opinion: absent retinopathy, active urinary sediment with dysmorphic red cells or red cell casts, rapid decline, nephrotic syndrome of sudden onset, or short diabetes duration - these suggest a non-diabetic kidney disease, which is common in Indian biopsy series.",
            "Ultrasound of kidneys, ureters and bladder with post-void residual to exclude obstruction and to record size and echotexture.",
            "Look for the treatable layer: NSAIDs and unlabelled herbal remedies, volume depletion, uncontrolled hypertension, recent contrast, urinary infection, and bladder outlet obstruction.",
            "Baseline panel: electrolytes, bicarbonate, calcium, phosphate, PTH, haemoglobin with iron studies, HbA1c, lipids, urine routine and microscopy, and hepatitis B, hepatitis C and HIV serology.",
          ],
        },
        {
          heading: "3. Slowing progression - the four pillars",
          points: [
            "Blood pressure: standardised office systolic below 120 mmHg per KDIGO 2021, practically below 130/80 mmHg, with dietary sodium under 2 g/day.",
            "RAS blockade: telmisartan 40 mg PO OD titrated to 80 mg, or an ACE inhibitor, at the maximum tolerated dose. Recheck creatinine and potassium in 2-4 weeks and accept a rise in creatinine of up to 30%.",
            "SGLT2 inhibitor: dapagliflozin 10 mg PO OD - he qualifies at eGFR 35 with ACR above 200 mg/g; warn about the expected reversible eGFR dip, genital mycotic infection, and holding the drug during acute illness or fasting.",
            "Finerenone 10 mg PO OD if potassium is 5.0 mmol/L or less, with a potassium check at 4 weeks; consider a GLP-1 receptor agonist for the diabetes.",
            "Glycaemia: individualised HbA1c around 7.0-7.5%; metformin is capped at 1000 mg/day at eGFR 30-44 and stopped below 30; insulin requirement falls as eGFR falls.",
            "Statin: atorvastatin 20 mg PO OD; complete tobacco cessation; dietary protein about 0.8 g/kg/day; sodium bicarbonate if serum bicarbonate is below 22 mmol/L.",
          ],
        },
        {
          heading: "4. Treating the complications",
          points: [
            "Anaemia: correct iron to a transferrin saturation above 30%, then an erythropoiesis-stimulating agent only if Hb is below 10 g/dL, targeting 10-11.5 g/dL and never above 13.",
            "CKD-MBD: dietary phosphate restriction, calcium carbonate with meals as a binder, and PTH monitoring from G3b onwards.",
            "Hyperkalaemia: dietary counselling naming coconut water, banana, citrus, tomato, potato and potassium-based salt substitutes; review of every contributing drug.",
            "Immunisation: double-dose hepatitis B at 0, 1, 2 and 6 months, annual influenza, pneumococcal and COVID-19 vaccines.",
            "Nephrotoxin avoidance written into the treatment card, with every drug dose checked against creatinine clearance.",
          ],
        },
        {
          heading: "5. Referral, planning and the family physician role",
          points: [
            "Refer to nephrology now: he is A3 with an eGFR under 45 and a very high risk category; refer sooner if progression is rapid.",
            "Discuss modality early - haemodialysis, CAPD, transplantation or conservative kidney management - and preserve the non-dominant forearm veins from today.",
            "Register him for free dialysis under the Pradhan Mantri National Dialysis Programme and PM-JAY should he need it, and explain the THOTA 1994 framework for a related-donor transplant.",
            "Continuing family practice care: 3-monthly review of BP, weight, creatinine, potassium and HbA1c; annual ACR, lipids, haemoglobin and fundus; a written drug list; and involvement of the spouse or son in the follow-up plan and the diet.",
          ],
        },
      ],
      mustDraw: [
        "The KDIGO heat map as a 6 x 3 grid of G categories against A categories with the risk colour named in words.",
        "A four-pillar flow chart: blood pressure, RAS blockade, SGLT2 inhibitor, non-steroidal MRA, with the eGFR and potassium thresholds for each.",
      ],
      markSplit: [
        { part: "Definition, eGFR calculation and G/A staging", marks: 2 },
        { part: "Establishing cause and excluding reversible factors", marks: 2 },
        { part: "Four pillars of progression control with doses and thresholds", marks: 3 },
        { part: "Complications - anaemia, CKD-MBD, potassium, vaccines", marks: 2 },
        { part: "Referral criteria, access preservation and follow-up plan", marks: 1 },
      ],
      keywords: ["CKD G3b A3", "KDIGO heat map", "dapagliflozin", "finerenone", "diabetic kidney disease", "ACR"],
    },
    {
      id: "renal-urology-chronic-kidney-disease-t2",
      paper: "II",
      kind: "define-classify",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Define chronic kidney disease. Classify it by the KDIGO system and state the criteria for referral to a nephrologist.",
      openingLines: [
        "Chronic kidney disease is an abnormality of kidney structure or function present for more than 3 months with implications for health.",
        "It is diagnosed when either the eGFR is below 60 mL/min/1.73 m2, or a marker of kidney damage is present, for more than 3 months.",
      ],
      answer: [
        {
          heading: "Diagnostic criteria (either one, for more than 3 months)",
          points: [
            "eGFR below 60 mL/min/1.73 m2 (G3a to G5).",
            "One or more markers of kidney damage: albuminuria with ACR 30 mg/g or more; urine sediment abnormalities such as dysmorphic red cells or red cell casts; electrolyte abnormalities from tubular disorders; histological abnormality on biopsy; structural abnormality on imaging such as polycystic kidneys, scarring or hydronephrosis; or a history of kidney transplantation.",
          ],
        },
        {
          heading: "Classification: cause, G category and A category",
          points: [
            "Cause: diabetic, hypertensive or vascular, glomerular, tubulointerstitial, cystic and congenital, obstructive, or of undetermined aetiology.",
            "G categories by eGFR: G1 90 or more, G2 60-89, G3a 45-59, G3b 30-44, G4 15-29, G5 below 15.",
            "A categories by ACR: A1 under 30 mg/g, A2 30-300 mg/g, A3 above 300 mg/g.",
            "Risk rises across both axes, so the full label is written as cause plus G category plus A category, for example diabetic kidney disease G4 A3.",
          ],
        },
        {
          heading: "Criteria for nephrology referral",
          points: [
            "eGFR below 30 mL/min/1.73 m2 (G4-G5), or any acute kidney injury superimposed on CKD.",
            "ACR above 300 mg/g, or protein excretion above 500 mg/day, or nephrotic syndrome.",
            "Persistent unexplained haematuria, particularly with dysmorphic red cells or red cell casts.",
            "Rapid progression: a sustained fall in eGFR of 5 mL/min/1.73 m2 per year or more, or a drop in G category with a 25% or greater fall from baseline.",
            "Hypertension resistant to four antihypertensive agents; persistent hyperkalaemia or refractory metabolic acidosis; recurrent or extensive nephrolithiasis; and known or suspected hereditary kidney disease.",
          ],
        },
      ],
      mustDraw: ["A table of G categories against A categories with the risk level in each cell."],
      markSplit: [
        { part: "Definition and the 3-month rule", marks: 1 },
        { part: "Damage markers", marks: 1 },
        { part: "G and A categories with numbers", marks: 2 },
        { part: "Referral criteria", marks: 1 },
      ],
      keywords: ["KDIGO", "G category", "A category", "referral criteria", "definition of CKD"],
    },
    {
      id: "renal-urology-chronic-kidney-disease-t3",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the anaemia of chronic kidney disease.",
      openingLines: [
        "The anaemia of chronic kidney disease is a normocytic normochromic anaemia caused principally by reduced erythropoietin production by the peritubular fibroblasts, appearing usually from an eGFR below 45-60 mL/min/1.73 m2.",
        "It is investigated when haemoglobin falls below 13 g/dL in men or 12 g/dL in women, and it must never be attributed to CKD until other causes have been excluded.",
      ],
      answer: [
        {
          heading: "Mechanisms",
          points: [
            "Erythropoietin deficiency from loss of functioning renal interstitial cells.",
            "Absolute iron deficiency from blood loss - gastrointestinal, repeated blood sampling and losses in the dialysis circuit.",
            "Functional iron deficiency and iron-restricted erythropoiesis driven by hepcidin excess from chronic inflammation.",
            "Shortened red cell survival in uraemia, uraemic inhibitors of erythropoiesis, and hyperparathyroidism causing marrow fibrosis.",
            "Deficiency of folate and vitamin B12, aluminium toxicity, and blood loss in the extracorporeal circuit in haemodialysis.",
          ],
        },
        {
          heading: "Evaluation",
          points: [
            "Complete blood count with indices and reticulocyte count, ferritin and transferrin saturation, vitamin B12 and folate, and a peripheral smear.",
            "Exclude occult gastrointestinal bleeding, haemolysis, hypothyroidism and, in Indian practice, tuberculosis, hookworm and multiple myeloma before labelling it renal anaemia.",
            "A microcytic picture points to iron deficiency or thalassaemia trait, and a macrocytic one to B12 or folate deficiency - neither is the anaemia of CKD.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Correct iron first: target transferrin saturation above 30% and ferritin above 200-500 ng/mL, using intravenous iron sucrose or ferric carboxymaltose in dialysis patients because oral absorption is poor in uraemia.",
            "Start an erythropoiesis-stimulating agent (epoetin alfa 50-100 units/kg subcutaneously thrice weekly, or darbepoetin weekly to fortnightly) only when haemoglobin is below 10 g/dL, having first replete iron.",
            "Target haemoglobin 10-11.5 g/dL and never exceed 13 g/dL - the CHOIR, CREATE and TREAT trials showed excess stroke, vascular access thrombosis and death at higher targets.",
            "Causes of ESA resistance: iron deficiency, infection or inflammation, severe hyperparathyroidism, aluminium toxicity, inadequate dialysis, malignancy and pure red cell aplasia.",
            "Transfuse only for symptomatic or life-threatening anaemia; in a potential transplant recipient transfusion causes allosensitisation and should be minimised. Oral hypoxia-inducible factor prolyl hydroxylase inhibitors are an emerging alternative.",
          ],
        },
      ],
      mustDraw: ["A flow chart: Hb below 10 g/dL, check iron studies, replete iron, then start ESA, then target Hb 10-11.5 g/dL."],
      markSplit: [
        { part: "Definition and mechanisms", marks: 2 },
        { part: "Evaluation and exclusion of other causes", marks: 1 },
        { part: "Iron, ESA, targets and resistance", marks: 2 },
      ],
      keywords: ["renal anaemia", "erythropoietin", "transferrin saturation", "Hb target", "ESA resistance"],
    },
  ],
  mcqs: [
    {
      id: "renal-urology-chronic-kidney-disease-q1",
      stem: "A 60-year-old woman has an eGFR of 52 mL/min/1.73 m2 on two occasions 4 months apart and a urine albumin-creatinine ratio of 45 mg/g confirmed on two of three first-morning samples. How should her chronic kidney disease be staged?",
      options: ["CKD G2 A1", "CKD G3a A2", "CKD G3a A1", "CKD G3b A2", "Not CKD, as the eGFR is above 45"],
      answer: 1,
      explanation:
        "An eGFR of 45-59 is G3a and an ACR of 30-300 mg/g is A2, so she is CKD G3a A2, moderately increased to high risk. G2 requires an eGFR of 60-89, which she does not have. Calling her G3a A1 ignores the confirmed albuminuria, which is the variable that determines her drug therapy and her prognosis. G3b requires an eGFR of 30-44. She unequivocally has CKD because the abnormality has persisted beyond 3 months and there is both a reduced eGFR and a damage marker.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-chronic-kidney-disease-q2",
      stem: "A 58-year-old man with type 2 diabetes has an eGFR of 34 mL/min/1.73 m2, a urine ACR of 480 mg/g, blood pressure 138/84 mmHg on telmisartan 80 mg daily, and a serum potassium of 4.6 mmol/L. Which addition will do most to slow his kidney disease?",
      options: [
        "Dapagliflozin 10 mg once daily",
        "Increase telmisartan to 80 mg twice daily",
        "Add enalapril 5 mg twice daily to the telmisartan",
        "A low-protein diet of 0.4 g/kg/day",
        "Allopurinol 100 mg once daily for asymptomatic hyperuricaemia",
      ],
      answer: 0,
      explanation:
        "He meets the KDIGO criteria for an SGLT2 inhibitor - eGFR of 20 or more with an ACR above 200 mg/g in type 2 diabetes - and DAPA-CKD and EMPA-KIDNEY showed a large reduction in progression and kidney failure on top of maximal RAS blockade. Doubling telmisartan beyond the licensed 80 mg daily adds toxicity without evidence. Combining an ACE inhibitor with an ARB is contraindicated because ONTARGET and other trials showed more hyperkalaemia and acute kidney injury with no benefit. A protein intake of 0.4 g/kg/day risks protein-energy wasting; 0.8 g/kg/day is the recommended figure. Allopurinol for asymptomatic hyperuricaemia did not slow eGFR decline in the CKD-FIX and PERL trials.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-chronic-kidney-disease-q3",
      stem: "Two weeks after starting dapagliflozin 10 mg daily for CKD G3a A3, a patient returns with an eGFR that has fallen from 51 to 39 mL/min/1.73 m2. He is well, euvolaemic, and his potassium is 4.4 mmol/L. What is the correct action?",
      options: [
        "Stop dapagliflozin permanently and record it as nephrotoxic",
        "Continue dapagliflozin and recheck the eGFR in 4 weeks",
        "Halve the dapagliflozin dose to 5 mg daily",
        "Stop the ACE inhibitor instead and continue dapagliflozin",
        "Admit for intravenous fluids and a renal ultrasound",
      ],
      answer: 1,
      explanation:
        "An initial eGFR dip of up to about 30% after starting an SGLT2 inhibitor is haemodynamic - it reflects restored tubuloglomerular feedback and reduced intraglomerular pressure - and it is reversible, expected and associated with better long-term kidney outcomes, so the drug is continued and the eGFR rechecked. Stopping the drug forfeits the very benefit that produced the dip. There is no renal dose reduction for dapagliflozin in CKD; the dose stays at 10 mg. Stopping the ACE inhibitor removes another proven agent for no reason. Admission and imaging are not warranted in a well, euvolaemic patient with an anticipated pharmacological effect.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-chronic-kidney-disease-q4",
      stem: "A 68-year-old man with CKD G4 has a haemoglobin of 8.6 g/dL, ferritin 80 ng/mL, transferrin saturation 14%, MCV 78 fL, normal B12 and folate. What is the first step in management?",
      options: [
        "Start erythropoietin 4000 units subcutaneously thrice weekly",
        "Transfuse two units of packed red cells",
        "Give intravenous iron and reassess before considering an erythropoiesis-stimulating agent",
        "Start oral folic acid and vitamin B12",
        "Accept the haemoglobin as appropriate for CKD and review in 6 months",
      ],
      answer: 2,
      explanation:
        "The transferrin saturation of 14% and ferritin of 80 ng/mL show absolute iron deficiency, and KDIGO requires iron repletion - target saturation above 30% and ferritin above 200-500 ng/mL - before an erythropoiesis-stimulating agent is started, because iron deficiency is the commonest cause of ESA resistance. Intravenous iron is preferred in advanced CKD as oral absorption is impaired by hepcidin. Starting an ESA into iron deficiency wastes an expensive drug and does not raise the haemoglobin. Transfusion is reserved for symptomatic or life-threatening anaemia and causes allosensitisation in a potential transplant recipient. B12 and folate are already normal, and a microcytic anaemia with a low saturation should also prompt a search for gastrointestinal blood loss rather than watchful waiting.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-chronic-kidney-disease-q5",
      stem: "A 44-year-old agricultural labourer from Srikakulam district has an eGFR of 41 mL/min/1.73 m2, a urine ACR of 22 mg/g, bland urinary sediment, normal blood pressure, no diabetes, and small echogenic kidneys on ultrasound. What is the most likely diagnosis?",
      options: [
        "Diabetic kidney disease",
        "IgA nephropathy",
        "Chronic kidney disease of undetermined aetiology (Uddanam nephropathy)",
        "Autosomal dominant polycystic kidney disease",
        "Hypertensive nephrosclerosis",
      ],
      answer: 2,
      explanation:
        "A young male agricultural worker from the Uddanam belt of coastal Andhra Pradesh with a low eGFR, minimal albuminuria, bland sediment, normal blood pressure and small kidneys is the classic picture of CKD of undetermined aetiology, a tubulointerstitial disease linked to heat stress, recurrent dehydration and agrochemical exposure. Diabetic kidney disease requires diabetes and typically produces heavy albuminuria with preserved kidney size. IgA nephropathy causes haematuria with dysmorphic red cells, not a bland sediment. Polycystic kidney disease produces large kidneys with cysts, the opposite of this ultrasound. Hypertensive nephrosclerosis requires long-standing hypertension, which he does not have.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-chronic-kidney-disease-q6",
      stem: "A 70 kg, 62-year-old man has a serum creatinine of 1.9 mg/dL. Using the Cockcroft-Gault formula, what is his estimated creatinine clearance?",
      options: ["Approximately 20 mL/min", "Approximately 40 mL/min", "Approximately 50 mL/min", "Approximately 75 mL/min", "Approximately 95 mL/min"],
      answer: 1,
      explanation:
        "Cockcroft-Gault gives CrCl = [(140 - 62) x 70] / (72 x 1.9) = 5460 / 136.8 = about 40 mL/min, with no female correction factor. Twenty mL/min would require roughly double the creatinine, and 75 or 95 mL/min would require a creatinine near 1.0 mg/dL or lower. This is the value used for drug dose adjustment, and it is expressed in mL/min rather than being normalised per 1.73 m2 like a CKD-EPI eGFR.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-chronic-kidney-disease-q7",
      stem: "A 52-year-old woman with type 2 diabetes, CKD G3a A2 and a serum potassium of 5.4 mmol/L is on telmisartan 40 mg and dapagliflozin 10 mg. Which is the most appropriate next step regarding finerenone?",
      options: [
        "Start finerenone 20 mg daily as her eGFR is above 25",
        "Start finerenone 10 mg daily and recheck potassium in 4 weeks",
        "Do not start finerenone now; correct the potassium first and reassess",
        "Start finerenone and stop telmisartan to avoid hyperkalaemia",
        "Start spironolactone 25 mg daily instead, as it is cheaper",
      ],
      answer: 2,
      explanation:
        "Finerenone should be initiated only when serum potassium is 5.0 mmol/L or less; at 5.4 mmol/L the correct action is to address the potassium - review diet, salt substitutes, NSAIDs and trimethoprim, consider a binder or a loop diuretic - and reassess. The 20 mg dose applies only when eGFR is 60 or more, so it would be wrong even if her potassium allowed treatment. Stopping telmisartan to make room for finerenone sacrifices a proven agent, as finerenone is studied as an addition to maximally tolerated RAS blockade, not a replacement. Spironolactone is a steroidal MRA with much higher rates of hyperkalaemia and gynaecomastia and lacks the CKD outcome evidence of finerenone in this setting.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "renal-urology-chronic-kidney-disease-c1",
      front: "KDIGO definition of chronic kidney disease.",
      back: "Abnormality of kidney structure or function for more than 3 months: eGFR below 60 mL/min/1.73 m2, or a damage marker (ACR 30 mg/g or more, abnormal sediment, tubular disorder, histology, imaging abnormality, transplant history).",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c2",
      front: "The six G categories with their eGFR ranges.",
      back: "G1 90 or more; G2 60-89; G3a 45-59; G3b 30-44; G4 15-29; G5 below 15 mL/min/1.73 m2.",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c3",
      front: "The three A categories by urine albumin-creatinine ratio.",
      back: "A1 under 30 mg/g; A2 30-300 mg/g; A3 above 300 mg/g (divide by 10 for mg/mmol: under 3, 3-30, above 30).",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c4",
      front: "Write the Cockcroft-Gault formula.",
      back: "CrCl (mL/min) = [(140 - age) x weight in kg] / (72 x serum creatinine in mg/dL), x 0.85 if female. Used for drug dosing, not for staging.",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c5",
      front: "Which equation is used for CKD staging, and which for drug dosing?",
      back: "CKD-EPI 2021 creatinine equation for staging (mL/min/1.73 m2); Cockcroft-Gault creatinine clearance for drug dose adjustment (mL/min).",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c6",
      front: "eGFR and albuminuria thresholds for starting an SGLT2 inhibitor in CKD.",
      back: "eGFR 20 mL/min/1.73 m2 or more with ACR 200 mg/g or more, or heart failure at any albuminuria, or type 2 diabetes with CKD. Continue until dialysis or transplant.",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c7",
      front: "Finerenone: dose, eGFR and potassium thresholds.",
      back: "10 mg OD if eGFR 25-59, 20 mg OD if eGFR 60 or more; only start if potassium is 5.0 mmol/L or less; recheck potassium at 4 weeks.",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c8",
      front: "Haemoglobin target in CKD anaemia, and when to start an ESA.",
      back: "Replete iron first (TSAT above 30%); start an ESA only if Hb is below 10 g/dL; target 10-11.5 g/dL and never above 13 g/dL.",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c9",
      front: "Definition of rapid progression of CKD.",
      back: "A sustained fall in eGFR of 5 mL/min/1.73 m2 per year or more, or a drop in G category accompanied by a 25% or greater fall from baseline eGFR.",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c10",
      front: "Causes of CKD where the kidneys are NOT small.",
      back: "Diabetic nephropathy, amyloidosis, polycystic kidney disease, HIV-associated nephropathy, myeloma kidney and infiltrative disease.",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c11",
      front: "Hepatitis B vaccination schedule in CKD.",
      back: "Double dose, 40 micrograms intramuscularly at 0, 1, 2 and 6 months, given early (eGFR still above 30) with an anti-HBs titre check afterwards.",
    },
    {
      id: "renal-urology-chronic-kidney-disease-c12",
      front: "Commonest cause of CKD in the Indian Society of Nephrology registry, and the geographical cluster of unknown-cause CKD.",
      back: "Diabetic kidney disease (about 31%); CKD of undetermined aetiology clusters in the Uddanam region of Srikakulam district, Andhra Pradesh.",
    },
  ],
  references: [
    "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease",
    "KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease",
    "KDIGO 2012 Clinical Practice Guideline for Anemia in Chronic Kidney Disease",
    "Indian Society of Nephrology CKD Registry of India - annual report and Indian Journal of Nephrology reviews",
    "Pradhan Mantri National Dialysis Programme guidelines, National Health Mission, MoHFW, 2016",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - chronic kidney disease",
  ],
});
