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

topics.push({
  id: "renal-urology-acute-kidney-injury",
  title: "Acute kidney injury: recognising it early, staging it by KDIGO and stopping it getting worse",
  oneLiner:
    "Acute kidney injury is an abrupt fall in glomerular filtration defined by KDIGO as a rise in serum creatinine of 0.3 mg/dL or more within 48 hours, or a rise to 1.5 times a known or presumed baseline within the preceding 7 days, or a urine output below 0.5 mL/kg/h for 6 hours, and it is staged 1 to 3 on whichever of creatinine or urine output gives the higher stage.",
  frequency: "core",
  keywords: [
    "AKI",
    "KDIGO AKI",
    "acute tubular necrosis",
    "prerenal azotaemia",
    "fractional excretion of sodium",
    "FeNa",
    "community-acquired AKI",
    "snake bite AKI",
    "falciparum malaria",
    "rhabdomyolysis",
    "contrast-associated AKI",
    "hepatorenal syndrome",
    "obstructive uropathy",
    "renal replacement therapy",
    "nephrotoxin stewardship",
    "AEIOU",
  ],
  sections: [
    {
      heading: "The KDIGO definition and staging, written exactly",
      points: [
        "**KDIGO 2012 definition of AKI - any one of three criteria:** a rise in serum creatinine of **0.3 mg/dL or more within 48 hours**; a rise in serum creatinine to **1.5 times baseline or more, known or presumed to have occurred within the prior 7 days**; or a **urine volume below 0.5 mL/kg/h for 6 hours**.",
        "**Stage 1:** creatinine 1.5-1.9 times baseline, or an absolute rise of 0.3 mg/dL or more; or urine output below 0.5 mL/kg/h for 6-12 hours.",
        "**Stage 2:** creatinine 2.0-2.9 times baseline; or urine output below 0.5 mL/kg/h for 12 hours or more.",
        "**Stage 3:** creatinine 3.0 times baseline or more, or a rise to **4.0 mg/dL or more**, or **initiation of renal replacement therapy**, or in patients under 18 years a fall in eGFR to below 35 mL/min/1.73 m2; or urine output **below 0.3 mL/kg/h for 24 hours or more, or anuria for 12 hours or more**.",
        "Stage on **whichever criterion - creatinine or urine output - gives the higher stage**; a patient making 15 mL/h with a creatinine of only 1.4 mg/dL is still stage 3 once the oliguria has lasted a day.",
        "**Acute kidney disease** is the KDIGO term for kidney damage or a GFR under 60 mL/min/1.73 m2 lasting **7 to 90 days**; beyond 90 days it becomes chronic kidney disease. This bridging category exists because most AKI does not resolve neatly by day 7, and it is the reason every AKI survivor needs a creatinine and an ACR at 3 months.",
        "Where no baseline creatinine exists - the usual Indian situation - **back-calculate an assumed baseline from an eGFR of 75 mL/min/1.73 m2** using the MDRD equation, or take the lowest creatinine of the current admission, and state in the answer book which assumption was made.",
      ],
    },
    {
      heading: "Causes: prerenal, intrinsic renal and postrenal, with the Indian weighting",
      points: [
        "**Prerenal (about 40-55%) - hypoperfusion of a structurally normal kidney:** vomiting, diarrhoea (the commonest cause seen in Indian primary care), haemorrhage, burns, sepsis, heart failure, cirrhosis with ascites, over-diuresis, and the haemodynamic effect of **NSAIDs constricting the afferent arteriole while an ACE inhibitor or ARB dilates the efferent one** - the triple whammy once a diuretic is added.",
        "**Intrinsic renal (about 35-45%):** acute tubular necrosis from prolonged ischaemia or nephrotoxins; acute interstitial nephritis from drugs; acute glomerulonephritis; and vascular disease such as thrombotic microangiopathy, atheroembolism or renal artery occlusion.",
        "**Postrenal (about 5-10%):** bladder outlet obstruction from benign prostatic hyperplasia or a blocked catheter, bilateral ureteric stones or a stone in a single functioning kidney, retroperitoneal fibrosis, and pelvic malignancy. **Obstruction must be excluded by ultrasound in every case**, because it is the one cause cured by a catheter or a nephrostomy.",
        "**Community-acquired AKI in India** has a distinctive and heavily examined list: **acute gastroenteritis with severe dehydration, falciparum and vivax malaria, leptospirosis, scrub typhus, dengue, snake envenomation (Russell's viper and saw-scaled viper), septic abortion and obstetric haemorrhage, copper sulphate and paraphenylenediamine hair-dye poisoning, and unlabelled traditional or herbal remedies**.",
        "**Nephrotoxic drugs to name:** NSAIDs including diclofenac and ibuprofen, aminoglycosides, amphotericin B, vancomycin, colistin, high-dose acyclovir, methotrexate, cisplatin, tenofovir, calcineurin inhibitors, iodinated contrast, and proton pump inhibitors as a cause of acute interstitial nephritis.",
        "**Rhabdomyolysis** after crush injury, prolonged immobility, seizures, extreme exertion, statin-fibrate combination or wasp stings: creatine kinase above 5000 U/L, tea-coloured urine, **dipstick positive for blood with no red cells on microscopy**, hyperkalaemia, hyperphosphataemia and hypocalcaemia.",
      ],
    },
    {
      heading: "Bedside evaluation: the questions answered in the first hour",
      points: [
        "**Is the patient volume depleted, euvolaemic or overloaded?** Postural blood pressure and pulse, jugular venous pressure, mucous membranes, skin turgor, axillary sweat, capillary refill, weight change and a fluid balance chart. Volume status decides whether the next step is a fluid bolus or a diuretic, and getting it wrong is the commonest single error in AKI.",
        "**Is the bladder palpable, and is the catheter blocked?** Palpate the bladder, do a bladder scan or post-void residual, and flush or change any catheter before ordering anything else - a blocked Foley is a curable cause of anuria.",
        "**Urine routine and microscopy is the cheapest and most discriminating test.** A bland sediment suggests prerenal disease or obstruction; **muddy brown granular casts with renal tubular epithelial cells indicate acute tubular necrosis**; **dysmorphic red cells and red cell casts indicate glomerulonephritis**; **white cell casts with eosinophiluria, rash and fever suggest acute interstitial nephritis**; and heavy proteinuria points to a glomerular lesion.",
        "**Fractional excretion of sodium: FeNa = (urine sodium x plasma creatinine) / (plasma sodium x urine creatinine) x 100.** Below 1% suggests prerenal azotaemia and above 2% suggests acute tubular necrosis. It is invalid after a diuretic, when the **fractional excretion of urea is used instead, with a value below 35% suggesting a prerenal state**.",
        "**A blood urea nitrogen to creatinine ratio above 20:1** favours prerenal disease, but is also raised by gastrointestinal bleeding, steroids and a high protein intake, and lowered by malnutrition and liver disease - so it supports rather than settles the diagnosis.",
        "**Ultrasound of the kidneys, ureters and bladder in every case of AKI** - it excludes hydronephrosis, gives kidney size and echotexture (small echogenic kidneys mean the process is chronic), and shows the bladder, the prostate and the post-void residual.",
        "Send in parallel: electrolytes with bicarbonate, calcium and phosphate; complete blood count with peripheral smear (schistocytes mean thrombotic microangiopathy); creatine kinase; liver function; blood culture; malaria antigen and smear; dengue, leptospira and scrub typhus serology where season and story fit; and an ECG for hyperkalaemia.",
      ],
    },
    {
      heading: "Management in the clinic and on the ward",
      points: [
        "**Treat the cause, restore perfusion, remove the nephrotoxins, relieve the obstruction and manage the complications** - there is still no drug that treats acute tubular necrosis itself, and saying so earns the mark.",
        "**Fluid resuscitation:** balanced crystalloid such as Ringer's lactate or Plasma-Lyte in preference to 0.9% saline, because large volumes of saline produce hyperchloraemic acidosis. Give **250-500 mL boluses with clinical reassessment after each**, not a blind litre an hour, and stop the moment the jugular venous pressure rises or the lung bases become wet. **Hydroxyethyl starch is contraindicated in AKI.**",
        "**Diuretics neither prevent nor treat AKI**; furosemide is used only for established fluid overload, and failure to respond to it is a signal to plan dialysis rather than to escalate the dose indefinitely. **Low-dose dopamine, mannitol and fenoldopam have no role.**",
        "**Stop and list the nephrotoxins:** NSAIDs, aminoglycosides, ACE inhibitors and ARBs (held during the acute illness and restarted once the creatinine has stabilised), SGLT2 inhibitors, metformin, diuretics, and every herbal preparation. **Metformin is stopped during AKI and restarted only when the eGFR is stable above 30 mL/min/1.73 m2.**",
        "**Adjust every remaining drug to the current creatinine clearance**, remembering that in evolving AKI the creatinine lags behind the true GFR, so dose as though the GFR were lower than the number suggests.",
        "**Treat hyperkalaemia the moment potassium exceeds 6.0 mmol/L or the ECG changes:** 10 mL of 10% calcium gluconate intravenously over 2-3 minutes to stabilise the myocardium, 10 units of regular insulin with 25 g of dextrose (50 mL of 50% or 100 mL of 25% dextrose), salbutamol 10-20 mg by nebuliser, sodium bicarbonate only if acidotic, a potassium binder for the gut, and dialysis if it is refractory.",
        "**Nutrition:** 20-30 kcal/kg/day with 0.8-1.0 g/kg/day of protein in non-catabolic AKI, rising to 1.0-1.5 g/kg/day once on renal replacement therapy. **Do not restrict protein in order to postpone dialysis** - it produces protein-energy wasting and postpones nothing.",
      ],
    },
    {
      heading: "Dialysis, referral and follow-up",
      points: [
        "**Emergency indications for renal replacement therapy - the AEIOU list:** refractory **A**cidosis, **E**lectrolyte derangement (hyperkalaemia unresponsive to medical treatment), **I**ntoxication with a dialysable poison (methanol, ethylene glycol, lithium, salicylate, metformin-associated lactic acidosis), refractory fluid **O**verload with pulmonary oedema, and **U**raemia with pericarditis, encephalopathy, seizures or intractable vomiting.",
        "There is **no creatinine or urea value that by itself mandates dialysis**; the AKIKI, IDEAL-ICU and STARRT-AKI trials showed a watchful strategy is at least as good as routine early initiation.",
        "**Refer to nephrology the same day:** AKI stage 3, any AKI needing dialysis, AKI with an active urinary sediment or suspected glomerulonephritis or vasculitis, AKI with no identified cause, AKI in a transplant recipient, thrombotic microangiopathy, and AKI that has not begun to recover within 5-7 days of correcting the cause.",
        "**Contrast-associated AKI prevention:** identify eGFR below 30 mL/min/1.73 m2 as the high-risk group, use the smallest volume of low- or iso-osmolar contrast, stop NSAIDs and diuretics, and give **isotonic saline 1 mL/kg/h for 6-12 hours before and after** the study. **N-acetylcysteine and sodium bicarbonate infusions failed in the PRESERVE trial and are no longer recommended.** Metformin is withheld at the time of contrast when the eGFR is below 30, and for 48 hours afterwards.",
        "**Follow up every AKI survivor:** AKI trebles the risk of subsequent CKD and doubles cardiovascular risk. Check **creatinine and urine ACR at 3 months**, restart held drugs deliberately and one at a time, record the episode prominently in the case file, and counsel the patient never to take an NSAID again.",
        "**Prevention in family practice is mostly nephrotoxin stewardship and sick-day rules:** teach every patient on an ACE inhibitor, ARB, diuretic, metformin or SGLT2 inhibitor to **hold those drugs during vomiting, diarrhoea or fever with poor intake**, and to attend for a creatinine check.",
      ],
    },
    {
      heading: "The AKI syndromes that come up in the viva",
      points: [
        "**Hepatorenal syndrome:** AKI in advanced cirrhosis with ascites, a bland sediment, urine sodium below 10 mmol/L, and no improvement after 2 days off diuretics with albumin 1 g/kg/day. Treated with **terlipressin plus albumin**, and definitively by liver transplantation.",
        "**Cardiorenal syndrome:** AKI in decompensated heart failure, where venous congestion matters as much as low output; the correct treatment is usually **more decongestion with intravenous furosemide, not less**, and a modest creatinine rise during effective diuresis should not stop it.",
        "**Snake-bite AKI:** Russell's viper is the classic Indian cause, producing acute tubular necrosis, renal cortical necrosis or thrombotic microangiopathy. Give **polyvalent anti-snake venom** guided by the 20-minute whole blood clotting time, support the kidney, and warn that recovery is slow and sometimes incomplete.",
        "**Malarial AKI:** falciparum, and increasingly vivax, causing oliguric acute tubular necrosis with jaundice and haemolysis. Treat with **intravenous artesunate 2.4 mg/kg at 0, 12 and 24 hours and then daily**, and dialyse early; blackwater fever with haemoglobinuria is the classic presentation.",
        "**Tumour lysis syndrome:** after chemotherapy for bulky lymphoma or leukaemia, with hyperuricaemia, hyperkalaemia, hyperphosphataemia and hypocalcaemia; prevented with hydration and **allopurinol, or rasburicase in high-risk disease**.",
        "**Abdominal compartment syndrome:** intra-abdominal pressure above 20 mmHg with new organ failure, measured through the bladder; treated by decompression, and easily missed after laparotomy or in severe pancreatitis.",
      ],
    },
  ],
  tables: [
    {
      heading: "KDIGO staging of acute kidney injury",
      columns: ["Stage", "Serum creatinine criterion", "Urine output criterion"],
      rows: [
        ["1", "1.5-1.9 times baseline, or a rise of 0.3 mg/dL or more within 48 hours", "Below 0.5 mL/kg/h for 6-12 hours"],
        ["2", "2.0-2.9 times baseline", "Below 0.5 mL/kg/h for 12 hours or more"],
        ["3", "3.0 times baseline or more, or a rise to 4.0 mg/dL or more, or start of renal replacement therapy, or eGFR below 35 mL/min/1.73 m2 if aged under 18", "Below 0.3 mL/kg/h for 24 hours or more, or anuria for 12 hours or more"],
      ],
    },
    {
      heading: "Prerenal azotaemia versus acute tubular necrosis",
      columns: ["Parameter", "Prerenal azotaemia", "Acute tubular necrosis"],
      rows: [
        ["Urine sediment", "Bland, or hyaline casts", "Muddy brown granular casts, tubular epithelial cells"],
        ["Urine sodium", "Below 20 mmol/L", "Above 40 mmol/L"],
        ["Fractional excretion of sodium", "Below 1%", "Above 2%"],
        ["Fractional excretion of urea (if on diuretics)", "Below 35%", "Above 50%"],
        ["Urine osmolality", "Above 500 mOsm/kg", "Below 350 mOsm/kg"],
        ["Urine specific gravity", "Above 1.020", "About 1.010, isosthenuric"],
        ["BUN to creatinine ratio", "Above 20 to 1", "About 10 to 15 to 1"],
        ["Response to fluid challenge", "Creatinine falls within 24-72 hours", "No improvement"],
      ],
    },
  ],
  redFlags: [
    "Anuria, or urine output under 0.3 mL/kg/h for more than 12 hours - stage 3 AKI; admit, exclude obstruction and assess for dialysis today.",
    "Potassium above 6.0 mmol/L, or peaked T waves, a widened QRS or a sine wave on the ECG - give calcium gluconate immediately and arrange dialysis.",
    "Pulmonary oedema with a rising creatinine and no response to intravenous furosemide - refractory overload, an emergency dialysis indication.",
    "Haemoptysis or haemoserous sputum with haematuria and a rapidly rising creatinine - pulmonary-renal syndrome; same-day nephrology referral for anti-GBM or ANCA disease.",
    "Bilateral hydronephrosis or a palpable bladder with anuria - obstructive uropathy; pass a catheter now and arrange urgent urology review or nephrostomy.",
    "Tea-coloured urine with severe muscle pain after crush injury, seizures or prolonged immobility - rhabdomyolysis; check creatine kinase and start aggressive intravenous fluids.",
    "AKI with fever, jaundice, thrombocytopenia and a rural exposure or bite - suspect snake envenomation, falciparum malaria, leptospirosis or scrub typhus and treat empirically while confirming.",
  ],
  pearls: [
    "Stage AKI on whichever criterion is worse, creatinine or urine output; oliguria alone can put a patient at stage 3 with a near-normal creatinine.",
    "Every AKI needs an ultrasound and a bladder examination before any other cause is blamed - obstruction is the only cause a catheter cures.",
    "Creatinine lags the true GFR by a day or two in evolving AKI, so a reassuring creatinine in an anuric patient is a trap.",
    "Balanced crystalloid in 250-500 mL boluses with reassessment after each; never a blind litre an hour, and never a starch.",
    "Diuretics convert oliguric to non-oliguric AKI without improving survival or recovery; failure to respond is a signal to plan dialysis.",
    "A dipstick positive for blood with no red cells on microscopy means myoglobin or haemoglobin, not bleeding.",
    "N-acetylcysteine and bicarbonate infusions do not prevent contrast-associated AKI; isotonic saline and a smaller contrast volume do.",
    "Every AKI survivor gets a creatinine and an ACR at 3 months, a permanent no-NSAID note, and sick-day rules for their ACE inhibitor, diuretic and metformin.",
  ],
  theory: [
    {
      id: "renal-urology-acute-kidney-injury-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 45-year-old farmer is brought with 4 days of profuse watery diarrhoea and vomiting, has passed only 100 mL of urine in the last 12 hours, and his serum creatinine is 3.8 mg/dL against a value of 0.9 mg/dL six months ago. Define and classify acute kidney injury, and describe your evaluation and management of this man.",
      openingLines: [
        "Acute kidney injury is an abrupt decline in glomerular filtration, defined by KDIGO 2012 as a rise in serum creatinine of 0.3 mg/dL or more within 48 hours, or a rise to 1.5 times a known or presumed baseline within the previous 7 days, or a urine output below 0.5 mL/kg/h for 6 hours.",
        "This man's creatinine has risen to more than four times his known baseline and he is passing well under 0.3 mL/kg/h, so he has KDIGO stage 3 acute kidney injury, almost certainly prerenal from severe gastroenteritis with volume depletion, progressing to ischaemic acute tubular necrosis.",
      ],
      answer: [
        {
          heading: "1. Definition and staging",
          points: [
            "KDIGO criteria: a creatinine rise of 0.3 mg/dL or more in 48 hours; or creatinine 1.5 times baseline or more within 7 days; or urine output below 0.5 mL/kg/h for 6 hours.",
            "Stage 1: creatinine 1.5-1.9 times baseline or a 0.3 mg/dL rise, or urine output below 0.5 mL/kg/h for 6-12 hours.",
            "Stage 2: creatinine 2.0-2.9 times baseline, or urine output below 0.5 mL/kg/h for 12 hours or more.",
            "Stage 3: creatinine 3 times baseline or more, or 4.0 mg/dL or more, or dialysis started; or urine output below 0.3 mL/kg/h for 24 hours, or anuria for 12 hours.",
            "Stage on whichever criterion gives the higher stage, and state the stage explicitly rather than writing only that the patient has AKI.",
          ],
        },
        {
          heading: "2. Classification of causes",
          points: [
            "Prerenal: hypovolaemia from diarrhoea, vomiting, haemorrhage or burns; sepsis; cardiac failure; cirrhosis; and drugs - NSAIDs, ACE inhibitors, ARBs and diuretics.",
            "Intrinsic renal: acute tubular necrosis, ischaemic or toxic; acute interstitial nephritis; acute glomerulonephritis; and vascular or thrombotic microangiopathic disease.",
            "Postrenal: bladder outlet obstruction from prostate or a blocked catheter, bilateral ureteric calculi, retroperitoneal fibrosis and pelvic malignancy.",
            "Indian community-acquired causes to name explicitly: gastroenteritis, falciparum and vivax malaria, leptospirosis, scrub typhus, dengue, snake bite, septic abortion, copper sulphate and hair-dye poisoning, and herbal nephrotoxins.",
          ],
        },
        {
          heading: "3. Evaluation of this patient",
          points: [
            "Assess volume status first: postural blood pressure and pulse, jugular venous pressure, mucous membranes, skin turgor, weight, and an hourly urine output chart after catheterisation.",
            "Examine for a palpable bladder and exclude obstruction with an ultrasound of the kidneys, ureters and bladder, which also confirms normal kidney size and echotexture.",
            "Urine routine and microscopy: a bland sediment supports a prerenal state, while muddy brown granular casts indicate established acute tubular necrosis.",
            "Fractional excretion of sodium below 1%, urine sodium below 20 mmol/L, urine osmolality above 500 mOsm/kg and a BUN to creatinine ratio above 20 to 1 support prerenal disease; these lose value once tubular necrosis is established or a diuretic has been given.",
            "Blood tests: electrolytes with potassium and bicarbonate, calcium, phosphate, complete blood count, blood and stool cultures, malaria smear and antigen, and an urgent ECG for hyperkalaemia.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Resuscitate with balanced crystalloid, Ringer's lactate 250-500 mL boluses with clinical reassessment after each, targeting a urine output above 0.5 mL/kg/h, stopping when the jugular venous pressure rises or the bases become wet.",
            "Treat the cause: oral rehydration solution and zinc for the diarrhoea, antibiotics only for dysentery or a septic focus, and an antiemetic for the vomiting.",
            "Stop all nephrotoxins - NSAIDs, ACE inhibitors, ARBs, diuretics, metformin and herbal preparations - and adjust every remaining drug to the estimated creatinine clearance.",
            "Treat hyperkalaemia above 6.0 mmol/L or with ECG change: calcium gluconate 10 mL of 10% intravenously, insulin 10 units with 25 g dextrose, nebulised salbutamol, bicarbonate if acidotic, and a potassium binder.",
            "Nutrition at 20-30 kcal/kg/day with 0.8-1.0 g/kg/day of protein; do not restrict protein in order to postpone dialysis.",
            "Diuretics only for established fluid overload, never to prevent or treat the injury; dopamine and mannitol have no role.",
          ],
        },
        {
          heading: "5. Dialysis, referral and follow-up",
          points: [
            "Dialysis for refractory acidosis, refractory hyperkalaemia, dialysable intoxication, refractory fluid overload, or uraemic pericarditis, encephalopathy or seizures - the AEIOU indications; no single number mandates it.",
            "Refer to nephrology the same day for stage 3 AKI, no recovery within 5-7 days, an active urinary sediment, or an unidentified cause.",
            "As he recovers, restart held drugs deliberately, one at a time, with a creatinine check after each.",
            "Follow up at 3 months with creatinine and urine ACR, because AKI trebles the future risk of CKD; give lifelong sick-day rules and a written instruction to avoid NSAIDs.",
          ],
        },
      ],
      mustDraw: [
        "A three-column table of prerenal, renal and postrenal causes with the Indian community-acquired list entered under each heading.",
        "The KDIGO stage 1 to 3 table with both the creatinine and the urine output criteria.",
      ],
      markSplit: [
        { part: "KDIGO definition and staging with exact numbers", marks: 2 },
        { part: "Classification of causes including Indian causes", marks: 2 },
        { part: "Evaluation - volume status, obstruction, sediment, FeNa", marks: 2 },
        { part: "Management - fluids, nephrotoxin withdrawal, hyperkalaemia", marks: 3 },
        { part: "Dialysis indications, referral and 3-month follow-up", marks: 1 },
      ],
      keywords: ["KDIGO AKI staging", "prerenal azotaemia", "FeNa", "AEIOU", "balanced crystalloid"],
    },
    {
      id: "renal-urology-acute-kidney-injury-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the indications for, and modalities of, renal replacement therapy in acute kidney injury.",
      openingLines: [
        "Renal replacement therapy in acute kidney injury is started for a life-threatening complication of kidney failure that has not responded to medical treatment, and not for any particular level of urea or creatinine.",
        "The emergency indications are conventionally remembered as AEIOU: acidosis, electrolyte derangement, intoxication, overload and uraemia.",
      ],
      answer: [
        {
          heading: "Emergency indications",
          points: [
            "Refractory metabolic acidosis, typically a pH below 7.1, not corrected by bicarbonate and treatment of the underlying cause.",
            "Refractory hyperkalaemia: potassium above 6.5 mmol/L, or above 6.0 mmol/L with ECG changes, not responding to calcium, insulin-dextrose, salbutamol and a binder.",
            "Intoxication with a dialysable substance: methanol, ethylene glycol, lithium, salicylate, theophylline, and metformin-associated lactic acidosis.",
            "Refractory fluid overload with pulmonary oedema not responding to intravenous furosemide.",
            "Uraemic complications: pericarditis or a pericardial rub, encephalopathy, asterixis, seizures, or intractable vomiting.",
          ],
        },
        {
          heading: "Modalities",
          points: [
            "Intermittent haemodialysis: 3-4 hours per session, highly efficient, needs a reasonably stable blood pressure and a dialysis unit; the standard modality in Indian district hospitals and under the Pradhan Mantri National Dialysis Programme.",
            "Continuous renal replacement therapy such as CVVH, CVVHD or CVVHDF: slow, better tolerated in haemodynamic instability and raised intracranial pressure, but needs an intensive care unit, continuous anticoagulation and considerable cost.",
            "Sustained low-efficiency dialysis: 6-12 hours on a standard dialysis machine, a practical hybrid widely used in India for the unstable patient.",
            "Acute peritoneal dialysis: needs no vascular access or anticoagulation, useful in children, in haemodynamic instability and where haemodialysis is unavailable; contraindicated after recent abdominal surgery or with peritonitis.",
            "Vascular access is a non-tunnelled double-lumen catheter, right internal jugular by preference, then femoral, with the subclavian last because of the stenosis risk in a patient who may later need an arteriovenous fistula.",
          ],
        },
        {
          heading: "Timing, complications and important negatives",
          points: [
            "AKIKI, IDEAL-ICU and STARRT-AKI showed no survival benefit from starting dialysis early in the absence of an emergency indication, so a watchful strategy with close monitoring is appropriate.",
            "No absolute urea or creatinine value mandates dialysis; the decision is clinical.",
            "Complications: hypotension, dialysis disequilibrium syndrome, bleeding, catheter-related bloodstream infection, arrhythmia and, with peritoneal dialysis, peritonitis.",
          ],
        },
      ],
      mustDraw: ["A table of the AEIOU indications against the specific numeric or clinical trigger for each."],
      markSplit: [
        { part: "AEIOU indications with triggers", marks: 2 },
        { part: "Modalities and their place in Indian practice", marks: 2 },
        { part: "Timing evidence, access and complications", marks: 1 },
      ],
      keywords: ["AEIOU", "SLED", "CRRT", "peritoneal dialysis", "STARRT-AKI"],
    },
  ],
  mcqs: [
    {
      id: "renal-urology-acute-kidney-injury-m1",
      stem: "A 60 kg woman is admitted with 3 days of fever and poor oral intake. Her serum creatinine is 1.6 mg/dL, up from 1.3 mg/dL two days earlier, and she has passed 260 mL of urine in the last 14 hours. What is her KDIGO stage of acute kidney injury?",
      options: ["No AKI, because the creatinine has risen by less than 50%", "Stage 1", "Stage 2", "Stage 3"],
      answer: 2,
      explanation:
        "Her urine output is 260 mL in 14 hours, or 18.6 mL/h, which for 60 kg is 0.31 mL/kg/h - below 0.5 mL/kg/h for 12 hours or more, which is the stage 2 urine output criterion. Her creatinine rise of exactly 0.3 mg/dL within 48 hours qualifies her only for stage 1, and because staging uses whichever criterion is worse, she is stage 2. Option 1 is wrong because an absolute rise of 0.3 mg/dL in 48 hours is itself diagnostic of AKI, whatever the percentage change. Option 2 as a final answer would be right only if the urine output were ignored, which is the error being tested. Option 4 is wrong because stage 3 needs urine output below 0.3 mL/kg/h for 24 hours or anuria for 12 hours, and 14 hours at 0.31 mL/kg/h does not reach either threshold.",
      difficulty: "hard",
    },
    {
      id: "renal-urology-acute-kidney-injury-m2",
      stem: "A 55-year-old man on telmisartan and ibuprofen for knee pain presents with 5 days of vomiting. Creatinine is 2.6 mg/dL against a baseline of 1.0, urine sodium 12 mmol/L, FeNa 0.4%, urine microscopy bland, and ultrasound shows normal-sized kidneys with no hydronephrosis. Which single step will most improve his kidney function?",
      options: [
        "Start intravenous furosemide 40 mg twice daily",
        "Give balanced crystalloid in boluses and stop the ibuprofen and telmisartan",
        "Start low-dose dopamine at 2 micrograms/kg/min",
        "Arrange urgent haemodialysis",
      ],
      answer: 1,
      explanation:
        "A FeNa below 1%, a urine sodium below 20 mmol/L and a bland sediment define prerenal azotaemia, and the treatment is volume repletion together with removal of the drugs blocking autoregulation - the NSAID constricting the afferent arteriole and the ARB dilating the efferent one. Furosemide is wrong because he is volume depleted rather than overloaded, and a diuretic here deepens the injury; diuretics have never been shown to prevent or treat AKI. Low-dose dopamine is a discredited intervention with no renal benefit and a real risk of tachyarrhythmia and gut ischaemia. Haemodialysis is wrong because he has none of the AEIOU emergency indications, and prerenal AKI is expected to correct within 24-72 hours of adequate resuscitation.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-acute-kidney-injury-m3",
      stem: "A 28-year-old labourer is brought after being trapped under rubble for 6 hours. He has painful swollen thighs, passes small amounts of dark brown urine, and the dipstick is strongly positive for blood but microscopy shows no red cells. Which investigation confirms the diagnosis?",
      options: ["Urine culture", "Serum creatine kinase", "Renal artery Doppler", "Anti-GBM antibody"],
      answer: 1,
      explanation:
        "A dipstick positive for blood with no red cells on microscopy means the pad is reacting to myoglobin or haemoglobin, and in this crush-injury setting that is myoglobinuric rhabdomyolysis; a creatine kinase above 5000 U/L, usually far higher, confirms it, alongside hyperkalaemia, hyperphosphataemia and hypocalcaemia. Urine culture is irrelevant since there is no infective story and no pyuria. A renal artery Doppler looks for vascular occlusion, which explains neither the swollen muscles nor the dipstick-microscopy mismatch. Anti-GBM antibody tests for Goodpasture disease, which produces a nephritic sediment with dysmorphic red cells and red cell casts - the exact opposite of the finding here.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-acute-kidney-injury-m4",
      stem: "A 70-year-old diabetic man with an eGFR of 26 mL/min/1.73 m2 is scheduled for a contrast-enhanced CT scan. Which measure has the best evidence for reducing contrast-associated acute kidney injury?",
      options: [
        "Oral N-acetylcysteine 1200 mg twice daily for 2 days around the study",
        "Isotonic saline 1 mL/kg/h for 6-12 hours before and after the study, with the smallest possible contrast volume",
        "Sodium bicarbonate infusion at 3 mL/kg/h for 1 hour before the study",
        "Prophylactic haemodialysis immediately after the study",
      ],
      answer: 1,
      explanation:
        "Volume expansion with isotonic saline, contrast minimisation and withdrawal of nephrotoxins is the only strategy that survives the evidence. The PRESERVE trial randomised more than 5000 high-risk patients and found no benefit from either N-acetylcysteine or sodium bicarbonate over saline, which is why options 1 and 3 are wrong even though both were once routine. Prophylactic dialysis after contrast does not prevent injury, exposes the patient to catheter and haemodynamic risk, and removes the contrast far too late to matter. Note also that metformin is withheld at the time of contrast when the eGFR is below 30 and for 48 hours afterwards.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-acute-kidney-injury-m5",
      stem: "A 48-year-old woman with acute kidney injury following a septic abortion has a potassium of 6.8 mmol/L, pH 7.06, bicarbonate 9 mmol/L, and bilateral basal crepitations with an oxygen saturation of 88% on room air despite 80 mg of intravenous furosemide. What is the most appropriate next step?",
      options: [
        "Repeat intravenous furosemide at 120 mg and reassess in 2 hours",
        "Start a sodium bicarbonate infusion and recheck the blood gas in 4 hours",
        "Give calcium gluconate and insulin-dextrose and arrange urgent haemodialysis",
        "Start an oral potassium binder and restrict fluids to 500 mL per day",
      ],
      answer: 2,
      explanation:
        "She has three simultaneous emergency indications for renal replacement therapy - refractory hyperkalaemia, severe metabolic acidosis, and diuretic-refractory pulmonary oedema - so dialysis must be arranged now, with calcium gluconate and insulin-dextrose given immediately as a bridge to protect the myocardium while access is obtained. Escalating furosemide in a patient who has already failed 80 mg wastes the hour that matters and risks ototoxicity. A bicarbonate infusion delivers a large sodium load into established pulmonary oedema and will not correct a pH of 7.06 driven by ongoing kidney failure. An oral potassium binder acts far too slowly for a potassium of 6.8 mmol/L and does nothing for the acidosis or the fluid overload.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "renal-urology-acute-kidney-injury-c1",
      front: "State the three KDIGO criteria for diagnosing acute kidney injury.",
      back: "A creatinine rise of 0.3 mg/dL or more within 48 hours; OR creatinine 1.5 times baseline or more within the prior 7 days; OR urine output below 0.5 mL/kg/h for 6 hours.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c2",
      front: "KDIGO AKI stage 3 criteria.",
      back: "Creatinine 3 times baseline or more, or a rise to 4.0 mg/dL or more, or start of renal replacement therapy (or eGFR under 35 if aged under 18); OR urine output under 0.3 mL/kg/h for 24 hours, or anuria for 12 hours.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c3",
      front: "Write the fractional excretion of sodium formula and its cut-offs.",
      back: "FeNa = (urine Na x plasma creatinine) / (plasma Na x urine creatinine) x 100. Below 1% is prerenal; above 2% is acute tubular necrosis. Invalid after diuretics - use FeUrea, where below 35% is prerenal.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c4",
      front: "The AEIOU indications for dialysis in AKI.",
      back: "Acidosis (refractory), Electrolytes (refractory hyperkalaemia), Intoxication (methanol, ethylene glycol, lithium, salicylate), Overload (refractory pulmonary oedema), Uraemia (pericarditis, encephalopathy, seizures, intractable vomiting).",
    },
    {
      id: "renal-urology-acute-kidney-injury-c5",
      front: "Urinary sediment findings and what each means in AKI.",
      back: "Bland - prerenal or postrenal; muddy brown granular casts with tubular cells - acute tubular necrosis; dysmorphic red cells and red cell casts - glomerulonephritis; white cell casts with eosinophiluria - acute interstitial nephritis.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c6",
      front: "Emergency treatment of hyperkalaemia, with doses.",
      back: "Calcium gluconate 10 mL of 10% IV over 2-3 minutes; regular insulin 10 units with 25 g dextrose; salbutamol 10-20 mg nebulised; sodium bicarbonate if acidotic; an oral potassium binder; dialysis if refractory.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c7",
      front: "Common community-acquired causes of AKI in India.",
      back: "Acute gastroenteritis, falciparum and vivax malaria, leptospirosis, scrub typhus, dengue, snake envenomation, septic abortion and obstetric haemorrhage, copper sulphate and hair-dye poisoning, and herbal nephrotoxins.",
    },
    {
      id: "renal-urology-acute-kidney-injury-c8",
      front: "What follow-up does every AKI survivor need?",
      back: "Serum creatinine and urine ACR at 3 months (AKI trebles the risk of CKD), deliberate one-at-a-time restarting of held drugs, a permanent no-NSAID instruction, and sick-day rules for ACE inhibitors, ARBs, diuretics, metformin and SGLT2 inhibitors.",
    },
  ],
  references: [
    "KDIGO 2012 Clinical Practice Guideline for Acute Kidney Injury, Kidney International Supplements 2012",
    "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease - acute kidney disease definitions",
    "Indian Society of Nephrology - acute kidney injury in the tropics, Indian Journal of Nephrology review series",
    "National Snakebite Management Protocol, MoHFW Government of India, 2022",
    "National Guidelines for Diagnosis and Treatment of Malaria in India, NCVBDC, 2023",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - acute kidney injury",
  ],
});

topics.push({
  id: "renal-urology-urinary-tract-infection",
  title: "Urinary tract infection in adults: uncomplicated, complicated, recurrent and catheter-associated",
  oneLiner:
    "Urinary tract infection is the invasion of a normally sterile urinary tract by uropathogens, most often Escherichia coli, and it is classified as uncomplicated cystitis, uncomplicated pyelonephritis, or complicated infection (male sex, pregnancy, obstruction, stones, catheter, diabetes, immunosuppression or a transplanted kidney), because that classification alone decides whether the patient needs 3 days of nitrofurantoin at home or 10-14 days of intravenous therapy with imaging.",
  frequency: "core",
  keywords: [
    "UTI",
    "cystitis",
    "acute pyelonephritis",
    "asymptomatic bacteriuria",
    "recurrent UTI",
    "CAUTI",
    "nitrofurantoin",
    "fosfomycin",
    "ESBL",
    "Escherichia coli",
    "emphysematous pyelonephritis",
    "urine culture colony count",
    "sterile pyuria",
    "genitourinary tuberculosis",
    "post-coital prophylaxis",
    "antimicrobial stewardship",
  ],
  sections: [
    {
      heading: "Definitions and classification that decide the treatment",
      points: [
        "**Uncomplicated UTI** is cystitis or pyelonephritis in a **non-pregnant, premenopausal or postmenopausal woman with a structurally and functionally normal urinary tract**. Everything else is complicated: **male sex, pregnancy, urinary obstruction or stones, an indwelling catheter or recent instrumentation, neurogenic bladder, poorly controlled diabetes, immunosuppression, renal transplantation, and any anatomical anomaly**.",
        "**Significant bacteriuria** on culture: **10 to the power 5 CFU/mL in a clean-catch midstream sample**; but **10 to the power 3 CFU/mL of a single uropathogen with typical symptoms in a woman**, or **10 to the power 4 CFU/mL in pyelonephritis and in men**, is significant, and **any growth from a suprapubic aspirate** is significant. Reciting only the 10 to the power 5 figure loses the mark.",
        "**Pyuria is 10 or more white cells per high power field on centrifuged urine, or a positive leucocyte esterase**; nitrite is highly specific for Enterobacterales but negative with Enterococcus, Staphylococcus saprophyticus and Pseudomonas, and needs 4 hours of bladder incubation to turn positive.",
        "**Asymptomatic bacteriuria** is significant bacteriuria without symptoms. It is **treated only in pregnancy and before an invasive urological procedure that will breach the mucosa**; it is **not** treated in the elderly, the catheterised, the diabetic, the transplant recipient beyond the first month, or in patients with spinal cord injury. Treating it drives resistance and Clostridioides difficile without preventing anything.",
        "**Recurrent UTI** is **2 or more infections in 6 months, or 3 or more in 12 months**. Distinguish **relapse** (same organism within 2 weeks of finishing treatment, suggesting a stone, an abscess, prostatitis or an unresolved focus) from **reinfection** (a different organism or a later interval, suggesting behavioural and host factors).",
        "**Catheter-associated UTI (CAUTI)** requires **symptoms or signs compatible with UTI with no other identified source, plus 10 to the power 3 CFU/mL or more of one or more bacterial species** in a catheter specimen or a midstream specimen from a patient whose catheter was removed within the last 48 hours. **Cloudy or foul-smelling urine alone is not CAUTI.**",
      ],
    },
    {
      heading: "Microbiology and the Indian resistance picture",
      points: [
        "**Escherichia coli causes 75-90% of uncomplicated UTIs**, followed by Klebsiella pneumoniae, Proteus mirabilis (urease-producing, associated with struvite stones and alkaline urine), Enterococcus faecalis, and **Staphylococcus saprophyticus in young sexually active women**.",
        "In complicated and hospital-acquired infection the spectrum widens to **Pseudomonas aeruginosa, Enterobacter, Serratia, Acinetobacter, Candida species and multidrug-resistant Enterobacterales**.",
        "**Indian resistance data from ICMR AMR surveillance is severe and examinable:** more than half of urinary E. coli isolates are **ESBL producers**, fluoroquinolone resistance exceeds 70-80%, and co-trimoxazole resistance is around 50-60%. **Fluoroquinolones and co-trimoxazole must therefore not be used empirically for uncomplicated cystitis in India.**",
        "**Nitrofurantoin retains sensitivity in about 85-95% of Indian E. coli isolates** and is the empirical drug of choice for cystitis. It **does not treat pyelonephritis** because it achieves no renal parenchymal or blood concentration, and it is **avoided when the eGFR is below 30-45 mL/min/1.73 m2** because it is renally concentrated and will not reach the urine.",
        "**Fosfomycin trometamol 3 g as a single oral dose** covers most ESBL producers and is useful where there is no other oral option; it is a bladder drug only.",
        "**Sterile pyuria** - pyuria with a negative routine culture - demands a specific list: **genitourinary tuberculosis (three early-morning urine samples for AFB and CBNAAT/Xpert MTB/RIF)**, partially treated UTI, urethritis from Chlamydia or Neisseria gonorrhoeae, stones, interstitial cystitis, analgesic nephropathy, papillary necrosis, and a bladder tumour. In India, TB is the answer the examiner is waiting for.",
      ],
    },
    {
      heading: "Clinical assessment: cystitis, pyelonephritis and what must not be missed",
      points: [
        "**Acute cystitis:** dysuria, frequency, urgency, suprapubic pain and sometimes haematuria, **without fever, flank pain or systemic upset**. In a woman with dysuria and frequency and **no vaginal discharge or irritation, the probability of UTI exceeds 90%** and empirical treatment without culture is legitimate.",
        "**Acute pyelonephritis:** fever above 38 degrees C with rigors, flank pain, costovertebral angle tenderness, nausea and vomiting, with or without lower tract symptoms. **Fever or flank pain converts cystitis into pyelonephritis and changes both the drug and the duration.**",
        "**Always ask about and examine for the complicating factors:** male sex (every UTI in a man is complicated and needs evaluation of the prostate and outflow), pregnancy, previous stones, a catheter, recent instrumentation, diabetes, immunosuppression, and a poor stream or incomplete emptying.",
        "**Differential diagnosis in women:** vaginitis (discharge, pruritus, dyspareunia, external dysuria), pelvic inflammatory disease, urethritis from a sexually transmitted infection (gradual onset, new partner, sterile pyuria), and interstitial cystitis or bladder pain syndrome with sterile urine.",
        "**In men,** consider **acute bacterial prostatitis** (fever, perineal pain, an exquisitely tender prostate - do not massage it, that risks bacteraemia), chronic prostatitis, epididymo-orchitis, and bladder outlet obstruction with residual urine.",
        "**In the elderly,** delirium, falls and functional decline may be the only presentation, but **it is a grave error to attribute delirium to a positive urine culture without urinary symptoms** - asymptomatic bacteriuria is present in 15-50% of institutionalised elderly and the true cause of the delirium is often elsewhere.",
      ],
    },
    {
      heading: "Investigation: when a culture and when imaging",
      points: [
        "**Urine culture is not needed for a first, typical, uncomplicated cystitis in a non-pregnant woman**; it is needed for pyelonephritis, all UTI in men, pregnancy, recurrence within 4 weeks, treatment failure, catheter-associated infection, diabetes, immunosuppression, and any complicated infection.",
        "**Collect properly:** a clean-catch midstream specimen after cleaning, sent to the laboratory within 2 hours or refrigerated at 4 degrees C. **In a catheterised patient, replace the catheter and take the sample from the new catheter port, never from the drainage bag.**",
        "**Imaging is not needed in uncomplicated pyelonephritis that responds within 72 hours.** Order **ultrasound of the kidneys, ureters and bladder** for failure to improve after 72 hours, suspected obstruction, a solitary kidney, known stones, diabetes, sepsis, or a palpable mass.",
        "**Contrast-enhanced CT (CT urography)** is the investigation of choice when ultrasound is unhelpful and complication is suspected - it identifies **renal or perinephric abscess, emphysematous pyelonephritis, pyonephrosis, papillary necrosis and obstructing calculi**.",
        "**Evaluate every man with a UTI** and every woman with relapse: ultrasound with post-void residual, and consider cystoscopy or CT urography for haematuria that persists after treatment, recurrent infection with the same organism, or suspicion of a stone or tumour.",
        "Check blood sugar in every case - **undiagnosed diabetes commonly presents as recurrent or severe UTI in Indian practice** - and a serum creatinine before choosing the drug and its dose.",
      ],
    },
    {
      heading: "Treatment: drugs, doses and durations",
      points: [
        "**Uncomplicated cystitis in a woman:** **nitrofurantoin (macrocrystals) 100 mg PO BD for 5 days**, or **fosfomycin trometamol 3 g PO as a single dose**, or **cefuroxime axetil 250 mg PO BD for 5-7 days**. **Avoid fluoroquinolones for cystitis** - Indian resistance is above 70% and the FDA warns of tendinopathy, neuropathy, aortic dissection and dysglycaemia. A single dose of fosfomycin is attractive where adherence is doubtful.",
        "**Uncomplicated pyelonephritis, outpatient:** **cefixime 200 mg PO BD, or cefpodoxime 200 mg PO BD, or co-amoxiclav 625 mg PO TDS, for 10-14 days**, ideally after an initial intravenous dose of ceftriaxone 1 g. Fluoroquinolones are used only when the culture proves sensitivity.",
        "**Pyelonephritis needing admission** (vomiting, sepsis, pregnancy, obstruction, failure of oral therapy): **ceftriaxone 1-2 g IV OD, or cefoperazone-sulbactam 1.5-3 g IV BD, or amikacin 15 mg/kg IV OD with renal-function monitoring**; escalate to a carbapenem such as **meropenem 1 g IV TDS or ertapenem 1 g IV OD if ESBL is proven or strongly suspected**, then de-escalate on culture and step down to oral therapy after 48-72 afebrile hours to complete 10-14 days.",
        "**UTI in a man:** treat for **7 days for simple cystitis and 14 days if the prostate is involved**; use a drug with prostatic penetration - **co-trimoxazole or a fluoroquinolone if sensitive** - as nitrofurantoin does not enter the prostate. Chronic bacterial prostatitis needs **4-6 weeks**.",
        "**UTI in pregnancy:** treat asymptomatic bacteriuria as well as symptomatic infection, for **5-7 days**, with **nitrofurantoin (avoided at term and near delivery because of neonatal haemolysis, and in G6PD deficiency), cefuroxime or cefixime, or amoxicillin if sensitive**. **Fluoroquinolones, co-trimoxazole in the first trimester and near term, and tetracyclines are contraindicated.** Send a test-of-cure culture 1-2 weeks after treatment and screen monthly thereafter.",
        "**Advise 2.5-3 litres of fluid a day, paracetamol for pain, and a review at 48-72 hours** if not improving; failure to defervesce by 72 hours means an abscess, obstruction or a resistant organism until proved otherwise.",
      ],
    },
    {
      heading: "Recurrent UTI and catheter-associated infection",
      points: [
        "**Behavioural and non-antibiotic measures first in recurrent UTI:** fluid intake increased by about **1.5 litres a day (the randomised evidence shows this alone nearly halves recurrences)**, complete and unhurried voiding, post-coital voiding, avoiding spermicide and diaphragm contraception, and treating constipation.",
        "**Vaginal oestrogen** (estriol cream 0.5 mg nightly for 2 weeks then twice weekly) is the single most effective intervention in postmenopausal women with recurrent UTI, restoring lactobacilli and vaginal pH; systemic oestrogen does not work for this. Cranberry products and D-mannose have weak, inconsistent evidence and are optional.",
        "**Continuous antibiotic prophylaxis** for 6 months when non-antibiotic measures fail: **nitrofurantoin 50-100 mg PO at night**, or **co-trimoxazole 40/200 mg at night**, or **cefalexin 125-250 mg at night**. **Post-coital prophylaxis** with a single dose of the same agents suits women whose infections follow intercourse and uses far less antibiotic.",
        "**Self-start therapy** - giving a reliable, well-taught patient a standby course to begin when typical symptoms start - is a legitimate strategy that reduces consultations, provided a culture is sent at the start of at least the first episode.",
        "**Preventing CAUTI is a question in its own right:** insert a catheter only for a clear indication (retention, accurate output measurement in the critically ill, selected surgery, sacral or perineal wounds in the incontinent, and comfort in terminal care - **never for incontinence or nursing convenience**), insert aseptically, maintain a **closed drainage system with the bag below the bladder and off the floor**, do not irrigate or use antiseptic-impregnated systems routinely, and **remove the catheter at the earliest possible moment**, reviewed daily.",
        "**Do not culture or treat catheter urine without symptoms**, do not use prophylactic antibiotics for catheter insertion or change, and when treating a genuine CAUTI in a patient catheterised for more than 2 weeks, **replace the catheter before starting antibiotics** and treat for 7 days if the response is prompt, 10-14 days if it is delayed. Consider **intermittent clean self-catheterisation or a condom drainage** as safer long-term alternatives.",
      ],
    },
  ],
  tables: [
    {
      heading: "Empirical treatment by syndrome, with Indian first choices",
      columns: ["Syndrome", "First choice", "Alternative", "Duration"],
      rows: [
        ["Uncomplicated cystitis, woman", "Nitrofurantoin 100 mg PO BD", "Fosfomycin trometamol 3 g PO single dose, or cefuroxime axetil 250 mg PO BD", "5 days (fosfomycin single dose)"],
        ["Uncomplicated pyelonephritis, outpatient", "Cefixime 200 mg PO BD after one dose of IV ceftriaxone", "Co-amoxiclav 625 mg PO TDS", "10-14 days"],
        ["Pyelonephritis needing admission", "Ceftriaxone 1-2 g IV OD", "Cefoperazone-sulbactam 1.5-3 g IV BD, or amikacin 15 mg/kg IV OD", "10-14 days total, step down when afebrile 48-72 h"],
        ["Suspected or proven ESBL with sepsis", "Meropenem 1 g IV TDS", "Ertapenem 1 g IV OD", "10-14 days, de-escalate on culture"],
        ["Cystitis in a man", "Co-trimoxazole 160/800 mg PO BD if sensitive", "Fluoroquinolone if sensitive (prostatic penetration)", "7 days; 14 days if prostatitis"],
        ["UTI in pregnancy", "Nitrofurantoin 100 mg PO BD (not at term)", "Cefuroxime axetil 250 mg PO BD, or amoxicillin if sensitive", "5-7 days, then test of cure"],
        ["Catheter-associated UTI", "Replace catheter, then culture-directed therapy", "Ceftriaxone 1 g IV OD pending culture", "7 days if prompt response, 10-14 if delayed"],
      ],
    },
    {
      heading: "When to treat bacteriuria and when to leave it alone",
      columns: ["Situation", "Screen and treat?", "Reason"],
      rows: [
        ["Pregnancy", "Yes - screen at first antenatal visit and treat", "Prevents pyelonephritis, preterm labour and low birth weight"],
        ["Before urological procedure breaching mucosa", "Yes - treat before the procedure", "Prevents bacteraemia and sepsis"],
        ["Elderly, including delirium without urinary symptoms", "No", "Bacteriuria is present in 15-50%; treating it does not help and drives resistance"],
        ["Indwelling catheter without symptoms", "No", "All long-term catheters are colonised; treatment selects resistant organisms"],
        ["Diabetes mellitus without symptoms", "No", "No reduction in complications shown in randomised trials"],
        ["Renal transplant beyond the first month", "No", "No benefit shown; treat only symptomatic episodes"],
        ["Spinal cord injury with neurogenic bladder", "No", "Colonisation is universal; treat only symptomatic infection"],
      ],
    },
  ],
  redFlags: [
    "Fever with rigors, flank pain, hypotension and tachycardia - urosepsis; take cultures, start intravenous antibiotics within the first hour and admit.",
    "A diabetic with pyelonephritis who is not improving at 48-72 hours, especially with gas on imaging - emphysematous pyelonephritis; urgent CT, urology referral and consideration of drainage or nephrectomy.",
    "Pyelonephritis with a known stone, hydronephrosis or a single kidney - pyonephrosis behind an obstruction; needs emergency decompression by stent or percutaneous nephrostomy, not antibiotics alone.",
    "Any urinary tract infection in a man, or a second infection in a man, without evaluation of the prostate, stream and post-void residual - always complicated, always investigated.",
    "Sterile pyuria with weight loss, evening fever, haematuria or a chronically ill patient - genitourinary tuberculosis; send three early-morning urines for AFB and CBNAAT.",
    "Painless visible haematuria persisting after the infection has been treated in a patient over 40 - urothelial malignancy until cystoscopy and imaging prove otherwise.",
    "UTI in pregnancy with fever, vomiting or uterine contractions - admit for intravenous antibiotics, as pyelonephritis in pregnancy causes preterm labour and maternal sepsis.",
  ],
  pearls: [
    "Male sex, pregnancy, obstruction, stones, catheter, diabetes or immunosuppression makes every UTI complicated - the classification, not the symptom, chooses the drug and the duration.",
    "Nitrofurantoin is a bladder drug: it does not treat pyelonephritis or prostatitis, and it fails once the eGFR falls below about 30-45 mL/min/1.73 m2.",
    "Fluoroquinolones and co-trimoxazole are no longer empirical drugs for cystitis in India; resistance in E. coli exceeds 70% and 50% respectively.",
    "Treat asymptomatic bacteriuria only in pregnancy and before a mucosa-breaching urological procedure. Nowhere else.",
    "Delirium in an elderly patient with a positive urine culture and no urinary symptoms is usually not a UTI; look elsewhere before blaming the urine.",
    "Sterile pyuria in India means tuberculosis until three early-morning urine samples say otherwise.",
    "In recurrent UTI, an extra 1.5 litres of water a day and vaginal oestrogen in postmenopausal women do more than any antibiotic prophylaxis.",
    "For a genuine catheter-associated infection in a long-term catheter, change the catheter before the first dose of antibiotic - the biofilm is the reservoir.",
  ],
  theory: [
    {
      id: "renal-urology-urinary-tract-infection-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 32-year-old woman presents with her fourth episode of dysuria and frequency in the last 12 months. Define recurrent urinary tract infection. Discuss its evaluation, treatment and prevention in family practice, and outline the antimicrobial resistance considerations relevant to India.",
      openingLines: [
        "Recurrent urinary tract infection is defined as two or more culture-proven infections within 6 months, or three or more within 12 months, and it is subdivided into relapse with the same organism within 2 weeks of treatment and reinfection with a different organism or after a longer interval.",
        "This woman has had four episodes in 12 months and therefore meets the definition; the priority is to confirm the infections by culture, exclude a structural or host cause, and then use non-antibiotic prevention before considering prophylaxis.",
      ],
      answer: [
        {
          heading: "1. Definition and terminology",
          points: [
            "Recurrent UTI: 2 or more infections in 6 months, or 3 or more in 12 months, each culture-confirmed.",
            "Relapse: the same organism recurring within 2 weeks of completing treatment, suggesting an unresolved focus - a stone, an abscess, prostatitis or a foreign body.",
            "Reinfection: a different organism, or the same organism after a longer interval, suggesting host and behavioural factors rather than a structural focus.",
            "Significant bacteriuria: 10 to the power 5 CFU/mL in a midstream sample, but 10 to the power 3 CFU/mL of a single uropathogen with typical symptoms in a woman is enough, and any growth from a suprapubic aspirate counts.",
          ],
        },
        {
          heading: "2. Evaluation",
          points: [
            "History: relation to intercourse, contraception (spermicide and diaphragm increase risk), voiding habits and deferral, fluid intake, constipation, previous stones or instrumentation, menopausal status, family history, and the exact drugs and durations previously used.",
            "Examination: abdominal and suprapubic examination, costovertebral angle tenderness, pelvic examination for atrophic vaginitis, prolapse or a fistula, and a check for a palpable bladder.",
            "Investigations: urine routine and microscopy plus culture and sensitivity with each episode before antibiotics; fasting and postprandial blood glucose or HbA1c; serum creatinine; ultrasound of the kidneys, ureters and bladder with post-void residual.",
            "Consider cystoscopy and CT urography for relapse with the same organism, persistent haematuria after treatment, suspected stone or tumour, or suspected fistula.",
            "Send three early-morning urine samples for AFB and CBNAAT if there is sterile pyuria, since genitourinary tuberculosis is common in India.",
          ],
        },
        {
          heading: "3. Treatment of the acute episodes",
          points: [
            "Uncomplicated cystitis: nitrofurantoin 100 mg PO BD for 5 days, or fosfomycin trometamol 3 g PO as a single dose, or cefuroxime axetil 250 mg PO BD for 5-7 days.",
            "Avoid fluoroquinolones and co-trimoxazole empirically because Indian E. coli resistance exceeds 70% and 50% respectively; reserve them for culture-proven sensitivity.",
            "If fever or flank pain appears, reclassify as pyelonephritis and treat for 10-14 days with a cephalosporin, beginning with intravenous ceftriaxone 1 g if there is vomiting or systemic upset.",
            "Analgesia with paracetamol, fluids of 2.5-3 litres a day, and review at 48-72 hours if not improving.",
          ],
        },
        {
          heading: "4. Prevention - non-antibiotic first",
          points: [
            "Increase fluid intake by about 1.5 litres a day; randomised evidence shows this alone nearly halves recurrences.",
            "Complete, unhurried and regular voiding, voiding after intercourse, and treatment of constipation.",
            "Stop spermicide and diaphragm contraception and offer an alternative method.",
            "Vaginal oestrogen (estriol cream 0.5 mg nightly for 2 weeks then twice weekly) in postmenopausal women - the single most effective preventive measure in that group.",
            "Cranberry products and D-mannose have weak evidence and may be offered but not promised.",
          ],
        },
        {
          heading: "5. Antibiotic prophylaxis and follow-up",
          points: [
            "Continuous prophylaxis for 6 months when non-antibiotic measures fail: nitrofurantoin 50-100 mg at night, co-trimoxazole 40/200 mg at night, or cefalexin 125-250 mg at night; review at 6 months as benefit stops when the drug stops.",
            "Post-coital prophylaxis with a single dose of the same drugs when the infections follow intercourse; it uses much less antibiotic for the same protection.",
            "Self-start therapy with a standby course for a reliable, well-instructed patient, sending a culture at the onset of the episode.",
            "Counsel on the resistance consequences of prophylaxis, and record the plan and the review date in the family folder.",
            "Screen for diabetes and treat it; involve the partner where contraception is being changed.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart from recurrent UTI through evaluation to non-antibiotic prevention, then continuous versus post-coital prophylaxis.",
        "A table of first-line drugs with dose and duration against Indian resistance rates.",
      ],
      markSplit: [
        { part: "Definition, relapse versus reinfection, colony counts", marks: 2 },
        { part: "Evaluation including imaging and TB", marks: 2 },
        { part: "Treatment of acute episodes with drugs and doses", marks: 2 },
        { part: "Non-antibiotic prevention", marks: 2 },
        { part: "Prophylaxis regimens and follow-up", marks: 2 },
      ],
      keywords: ["recurrent UTI", "nitrofurantoin", "vaginal oestrogen", "post-coital prophylaxis", "ESBL"],
    },
    {
      id: "renal-urology-urinary-tract-infection-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on catheter-associated urinary tract infection, including its prevention.",
      openingLines: [
        "Catheter-associated urinary tract infection is defined as symptoms or signs compatible with urinary infection, with no other identified source, in a patient with an indwelling catheter or one removed within the previous 48 hours, together with a urine culture growing 10 to the power 3 CFU/mL or more of one or more organisms.",
        "It is the commonest healthcare-associated infection, and its risk rises by about 3-8% for every day the catheter remains in place, so the single most effective intervention is early removal.",
      ],
      answer: [
        {
          heading: "Definition and microbiology",
          points: [
            "Symptoms include fever, rigors, new suprapubic or flank pain or tenderness, new-onset delirium in the elderly, and in the spinal-injured patient increased spasticity or autonomic dysreflexia.",
            "Cloudy, foul-smelling or blood-tinged urine alone does not constitute infection; almost all long-term catheters are colonised.",
            "Organisms: Escherichia coli, Klebsiella, Proteus, Pseudomonas aeruginosa, Enterococcus, and Candida species; biofilm on the catheter surface is the reservoir and protects the organisms from antibiotics.",
          ],
        },
        {
          heading: "Prevention",
          points: [
            "Insert only for a valid indication: retention, accurate output measurement in the critically ill, selected surgery, healing of sacral or perineal wounds in incontinent patients, and comfort at the end of life; never for incontinence or staff convenience.",
            "Aseptic insertion by trained staff with sterile equipment and lubricant, and the smallest catheter that drains.",
            "Maintain a closed sterile drainage system, keep the bag below the level of the bladder and off the floor, keep the tubing unkinked, and empty the bag with a separate clean container for each patient.",
            "Do not irrigate the bladder, do not use routine antimicrobial or antiseptic instillation, and do not give prophylactic systemic antibiotics for insertion or routine change.",
            "Review the need for the catheter every day and remove it at the earliest moment; use reminders or nurse-led removal protocols. Prefer intermittent clean self-catheterisation or condom drainage for long-term management.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Do not culture or treat asymptomatic bacteriuria in a catheterised patient.",
            "For a genuine infection, replace a catheter that has been in place for more than 2 weeks before starting antibiotics, and send the culture from the new catheter, never from the drainage bag.",
            "Empirical therapy is guided by the local antibiogram - ceftriaxone 1 g IV OD pending culture, escalating to a carbapenem in proven ESBL infection - and is de-escalated on sensitivity.",
            "Duration is 7 days when the response is prompt and 10-14 days when it is delayed; candiduria in an asymptomatic catheterised patient usually needs only catheter removal.",
          ],
        },
      ],
      mustDraw: ["A list of valid and invalid indications for urinary catheterisation in two columns."],
      markSplit: [
        { part: "Definition and what does not count as infection", marks: 1 },
        { part: "Microbiology and biofilm", marks: 1 },
        { part: "Prevention bundle", marks: 2 },
        { part: "Treatment principles including catheter change", marks: 1 },
      ],
      keywords: ["CAUTI", "biofilm", "closed drainage", "catheter bundle", "asymptomatic bacteriuria"],
    },
  ],
  mcqs: [
    {
      id: "renal-urology-urinary-tract-infection-m1",
      stem: "A 26-year-old non-pregnant woman has 2 days of dysuria, frequency and suprapubic discomfort, no fever, no flank pain and no vaginal discharge. Urine dipstick shows leucocyte esterase and nitrite positive. Which is the most appropriate management in an Indian clinic?",
      options: [
        "Send urine culture and wait for the report before treating",
        "Nitrofurantoin 100 mg orally twice daily for 5 days, without a culture",
        "Ciprofloxacin 500 mg orally twice daily for 3 days",
        "Single dose of co-trimoxazole 160/800 mg orally",
      ],
      answer: 1,
      explanation:
        "This is typical uncomplicated cystitis in a non-pregnant woman: dysuria and frequency without vaginal discharge carries a probability of UTI above 90%, so empirical treatment without culture is correct, and nitrofurantoin remains sensitive in 85-95% of Indian E. coli isolates. Waiting for a culture leaves a symptomatic patient untreated for 48 hours and is not required for a first typical episode. Ciprofloxacin is wrong because fluoroquinolone resistance in Indian urinary E. coli exceeds 70%, and the class carries warnings for tendinopathy, neuropathy and aortic dissection. A single dose of co-trimoxazole is both an inadequate regimen and an inappropriate drug where resistance runs at 50-60%; the only accepted single-dose agent is fosfomycin trometamol 3 g.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-urinary-tract-infection-m2",
      stem: "An 82-year-old woman in a care home is brought with 2 days of confusion. She is afebrile, has no dysuria, frequency or suprapubic tenderness, and is not catheterised. Urine culture grows 10 to the power 5 CFU/mL of Escherichia coli. What is the correct action?",
      options: [
        "Start nitrofurantoin 100 mg twice daily for 7 days",
        "Start ceftriaxone 1 g intravenously and admit for urosepsis",
        "Look for another cause of the delirium and do not treat the bacteriuria",
        "Start co-trimoxazole prophylaxis to prevent further episodes",
      ],
      answer: 2,
      explanation:
        "Asymptomatic bacteriuria occurs in 15-50% of institutionalised elderly women, and a positive culture without urinary symptoms does not explain delirium; the correct step is a systematic search for the real cause - drugs, dehydration, constipation, pain, hypoxia, electrolyte disturbance, stroke or sepsis elsewhere - while withholding antibiotics. Treating with nitrofurantoin exposes her to adverse effects, Clostridioides difficile and resistance with no proven benefit, and it is the classic error this question tests. Ceftriaxone and admission for urosepsis are unjustified in an afebrile, haemodynamically stable patient with no localising urinary features. Prophylaxis is wrong because she has not had recurrent symptomatic infection, only colonisation.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-urinary-tract-infection-m3",
      stem: "A 58-year-old man with type 2 diabetes has had fever, rigors and right flank pain for 4 days. He was started on oral cefixime 48 hours ago and remains febrile at 39.4 degrees C with a tender right loin and a blood pressure of 96/60 mmHg. What is the most important next investigation?",
      options: [
        "Repeat urine culture in 1 week",
        "Contrast-enhanced CT of the abdomen",
        "Voiding cystourethrogram",
        "Serum prostate-specific antigen",
      ],
      answer: 1,
      explanation:
        "A diabetic with pyelonephritis who has not defervesced within 48-72 hours and is now hypotensive must be imaged urgently to find emphysematous pyelonephritis, a renal or perinephric abscess, pyonephrosis behind an obstructing stone, or papillary necrosis - contrast-enhanced CT is the investigation of choice and may change management to drainage or nephrectomy the same day. Repeating a culture in a week ignores an evolving surgical emergency. A voiding cystourethrogram assesses reflux, which is a paediatric question and irrelevant to an acutely septic adult. PSA is uninterpretable during acute infection, rises with prostatitis and instrumentation, and answers none of the urgent questions.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-urinary-tract-infection-m4",
      stem: "A 24-year-old woman at 14 weeks of gestation is asymptomatic. Routine antenatal urine culture grows 10 to the power 5 CFU/mL of Escherichia coli sensitive to nitrofurantoin, cefuroxime and amoxicillin. What should be done?",
      options: [
        "No treatment, as she is asymptomatic",
        "Treat with nitrofurantoin 100 mg twice daily for 5-7 days and repeat the culture 1-2 weeks later",
        "Treat with ciprofloxacin 500 mg twice daily for 3 days",
        "Treat only if a repeat culture is again positive",
      ],
      answer: 1,
      explanation:
        "Pregnancy is one of only two situations in which asymptomatic bacteriuria is treated, because untreated bacteriuria progresses to pyelonephritis in 20-30% of pregnancies and is associated with preterm labour and low birth weight; nitrofurantoin is appropriate at 14 weeks (it is avoided at term and in G6PD deficiency), and a test-of-cure culture is required. Withholding treatment because she is asymptomatic applies the non-pregnant rule and is the trap. Ciprofloxacin is contraindicated in pregnancy because of fetal cartilage toxicity. Waiting for a second positive culture delays treatment without adding useful information, since a single properly collected antenatal culture at this colony count is the accepted trigger.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-urinary-tract-infection-m5",
      stem: "A 68-year-old man with a long-term indwelling catheter for neurogenic bladder develops fever of 38.8 degrees C and new suprapubic tenderness. The catheter has been in place for 6 weeks. Which step should come first?",
      options: [
        "Send a urine sample from the drainage bag and start antibiotics",
        "Irrigate the catheter with an antiseptic solution",
        "Replace the catheter, take the culture from the new catheter, then start empirical antibiotics",
        "Start antifungal therapy as Candida is the likeliest organism",
      ],
      answer: 2,
      explanation:
        "In a catheter that has been in place more than 2 weeks, the biofilm on the old catheter is the reservoir and its culture reflects colonisation rather than the invading organism, so the catheter is replaced first, the specimen taken from the fresh catheter, and empirical antibiotics then started and de-escalated on sensitivity. A sample from the drainage bag is never acceptable because it is invariably contaminated by stagnant, colonised urine. Catheter irrigation with antiseptic is explicitly discouraged; it does not clear infection and traumatises the urothelium while breaking the closed system. Empirical antifungal therapy is wrong because bacterial uropathogens are far more likely, and asymptomatic candiduria in a catheterised patient usually needs only catheter removal.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "renal-urology-urinary-tract-infection-c1",
      front: "What makes a urinary tract infection complicated?",
      back: "Male sex, pregnancy, obstruction or stones, indwelling catheter or recent instrumentation, neurogenic bladder, poorly controlled diabetes, immunosuppression, renal transplant, or any anatomical anomaly.",
    },
    {
      id: "renal-urology-urinary-tract-infection-c2",
      front: "Colony counts that count as significant bacteriuria.",
      back: "10 to the power 5 CFU/mL in a clean-catch midstream sample; 10 to the power 3 CFU/mL of a single uropathogen with typical symptoms in a woman; 10 to the power 4 CFU/mL in pyelonephritis and in men; any growth from a suprapubic aspirate.",
    },
    {
      id: "renal-urology-urinary-tract-infection-c3",
      front: "When is asymptomatic bacteriuria treated?",
      back: "Only in pregnancy, and before a urological procedure that will breach the mucosa. Not in the elderly, the catheterised, the diabetic, transplant recipients beyond the first month, or spinal cord injury.",
    },
    {
      id: "renal-urology-urinary-tract-infection-c4",
      front: "Definition of recurrent UTI, and relapse versus reinfection.",
      back: "2 or more infections in 6 months or 3 or more in 12 months. Relapse: same organism within 2 weeks of treatment, suggests a focus (stone, abscess, prostatitis). Reinfection: different organism or later interval, suggests host and behavioural factors.",
    },
    {
      id: "renal-urology-urinary-tract-infection-c5",
      front: "Why is nitrofurantoin useless in pyelonephritis, and when is it contraindicated?",
      back: "It achieves therapeutic concentration only in urine, not in renal parenchyma, blood or prostate. Avoid when eGFR is below about 30-45 mL/min/1.73 m2, at term in pregnancy, and in G6PD deficiency.",
    },
    {
      id: "renal-urology-urinary-tract-infection-c6",
      front: "Causes of sterile pyuria.",
      back: "Genitourinary tuberculosis (three early-morning urines for AFB and CBNAAT), partially treated UTI, chlamydial or gonococcal urethritis, stones, interstitial cystitis, analgesic nephropathy, papillary necrosis, bladder tumour.",
    },
    {
      id: "renal-urology-urinary-tract-infection-c7",
      front: "Non-antibiotic prevention of recurrent UTI.",
      back: "An extra 1.5 litres of fluid a day, complete and post-coital voiding, stopping spermicide and diaphragm, treating constipation, and vaginal oestriol cream in postmenopausal women.",
    },
    {
      id: "renal-urology-urinary-tract-infection-c8",
      front: "The CAUTI prevention bundle.",
      back: "Catheterise only for a valid indication, insert aseptically, keep a closed drainage system with the bag below the bladder and off the floor, never irrigate or give prophylactic antibiotics, and review the need for the catheter daily so it comes out as early as possible.",
    },
  ],
  references: [
    "Indian Council of Medical Research, Treatment Guidelines for Antimicrobial Use in Common Syndromes, 3rd edition, 2022 - urinary tract infections",
    "ICMR Annual Report of the Antimicrobial Resistance Surveillance Network, 2023",
    "Infectious Diseases Society of America guideline for asymptomatic bacteriuria, Clinical Infectious Diseases, 2019",
    "European Association of Urology Guidelines on Urological Infections, 2024",
    "Centers for Disease Control and Prevention Guideline for Prevention of Catheter-Associated Urinary Tract Infections, updated 2019",
    "Campbell-Walsh-Wein Urology, 12th edition, 2021 - infections of the urinary tract",
  ],
});

topics.push({
  id: "renal-urology-luts-bph",
  title: "Lower urinary tract symptoms and benign prostatic hyperplasia",
  oneLiner:
    "Benign prostatic hyperplasia is a histological proliferation of stromal and epithelial cells in the transition zone of the prostate that may cause benign prostatic enlargement and bladder outlet obstruction, presenting as storage and voiding lower urinary tract symptoms that are quantified by the International Prostate Symptom Score and managed by watchful waiting, an alpha blocker, a 5-alpha reductase inhibitor or surgery according to symptom severity, prostate size and complications.",
  frequency: "common",
  keywords: [
    "BPH",
    "LUTS",
    "IPSS",
    "tamsulosin",
    "finasteride",
    "dutasteride",
    "silodosin",
    "tadalafil",
    "TURP",
    "acute urinary retention",
    "post-void residual",
    "uroflowmetry",
    "prostate specific antigen",
    "overactive bladder",
    "intraoperative floppy iris syndrome",
    "TURP syndrome",
  ],
  sections: [
    {
      heading: "Terminology, pathology and the symptom groups",
      points: [
        "**Three terms that are not synonyms and must be separated in the answer book:** **benign prostatic hyperplasia** is the histological diagnosis of nodular hyperplasia in the **transition zone**; **benign prostatic enlargement** is the clinical finding of a large gland; and **benign prostatic obstruction** is the urodynamic finding of obstructed flow. A man may have any one without the others.",
        "Hyperplasia begins in the **periurethral transition zone**, is androgen dependent through **dihydrotestosterone produced by 5-alpha reductase type 2**, and needs both functioning testes and age - it is not seen in men castrated before puberty or with congenital 5-alpha reductase deficiency.",
        "Obstruction has a **static component** (the bulk of the adenoma) and a **dynamic component** (alpha-1A adrenergic smooth muscle tone in the prostate, capsule and bladder neck), which is exactly why alpha blockers relieve symptoms within days while 5-alpha reductase inhibitors take months.",
        "**Storage (irritative) symptoms:** frequency, urgency, nocturia, urge incontinence - these come from detrusor overactivity secondary to obstruction and are the symptoms that trouble the patient most.",
        "**Voiding (obstructive) symptoms:** hesitancy, poor and intermittent stream, straining, terminal dribbling, and a sensation of incomplete emptying; **post-micturition dribble** is a third group.",
        "Prevalence rises with age - histological BPH is present in about **50% of men in their sixties and 80-90% by the eighties** - but **symptoms correlate poorly with prostate size**; a 30 g gland with a prominent median lobe can obstruct more than a 90 g one.",
      ],
    },
    {
      heading: "Assessment: history, IPSS and the examination that must not be skipped",
      points: [
        "**Quantify with the International Prostate Symptom Score (IPSS):** seven questions (incomplete emptying, frequency, intermittency, urgency, weak stream, straining, nocturia), each scored 0-5, giving a total of 0-35 - **mild 0-7, moderate 8-19, severe 20-35** - plus a separate **quality of life question scored 0-6**. Repeat it at every review; it is the measure of response.",
        "**A frequency-volume chart (bladder diary) over 3 days** separates true polyuria (over 3 litres a day, from diabetes, diabetes insipidus or excess fluid), **nocturnal polyuria (more than 33% of the 24-hour output at night, common in heart failure, sleep apnoea and peripheral oedema)** and genuine reduced functional capacity. It is the cheapest and most informative single investigation.",
        "**Digital rectal examination is mandatory:** record size, consistency, symmetry, the median sulcus, nodularity and tenderness. **BPH feels smooth, rubbery, symmetrical and non-tender with a preserved median sulcus; a hard, nodular, asymmetrical gland with a lost sulcus suggests carcinoma** and demands referral irrespective of the PSA.",
        "**Abdominal examination for a palpable bladder**, a focused neurological examination (perianal sensation, anal tone, bulbocavernosus reflex, lower limb power) for a neurogenic bladder, and examination of the external meatus and foreskin for stenosis or phimosis.",
        "**Ask specifically about the drugs that cause or worsen LUTS:** anticholinergics, tricyclic antidepressants, first-generation antihistamines such as chlorpheniramine, decongestants containing pseudoephedrine, opioids, calcium channel blockers, and diuretics taken in the evening. Stopping the drug sometimes cures the problem.",
        "**Screen for the mimics:** diabetes mellitus, urinary infection, bladder stone, urethral stricture (young man, previous instrumentation or gonococcal urethritis, a flat plateau-shaped flow curve), carcinoma of the prostate, carcinoma in situ of the bladder (severe irritative symptoms with haematuria), and neurogenic bladder from diabetes, stroke, Parkinson disease or spinal disease.",
      ],
    },
    {
      heading: "Investigations, including how to use PSA honestly",
      points: [
        "**In every patient:** urine routine and microscopy (excludes infection, haematuria and glycosuria), serum creatinine with eGFR, and blood glucose or HbA1c.",
        "**Post-void residual urine by ultrasound:** under 50 mL is normal; **above 100-150 mL is significant**, and a persistently large residual predicts retention, infection, stones and upper tract dilatation. Ultrasound of the kidneys, ureters, bladder and prostate also gives prostate volume, intravesical prostatic protrusion, bladder wall thickness, diverticula, stones and hydronephrosis.",
        "**Uroflowmetry** with a voided volume of at least 150 mL: **a maximum flow rate (Qmax) above 15 mL/s is normal, 10-15 mL/s equivocal, and below 10 mL/s suggests obstruction**; a flat, prolonged plateau curve suggests a urethral stricture rather than prostatic obstruction.",
        "**PSA is offered after counselling, not ordered reflexly.** It is prostate-specific but not cancer-specific. **A PSA above 4 ng/mL, or an age-specific elevation, or a rise of more than 0.75 ng/mL per year, prompts urology referral.** PSA also serves as a surrogate for prostate volume: **a PSA above 1.5 ng/mL predicts a gland above 30 g** and identifies the men who will benefit from a 5-alpha reductase inhibitor.",
        "**Do not measure PSA within 48 hours of ejaculation or a digital rectal examination, within 6 weeks of prostatitis, catheterisation, cystoscopy or a biopsy, or during a urinary infection.** Remember that **finasteride and dutasteride halve the PSA after 6-12 months, so the measured value must be doubled** to interpret it.",
        "**Urodynamic pressure-flow studies** are reserved for diagnostic doubt before surgery - the young man, the neurological patient, the man with predominantly storage symptoms, or a previously failed operation. **Cystoscopy is not a routine investigation** but is indicated for haematuria, suspected stricture or bladder stone, and before surgery in selected cases.",
      ],
    },
    {
      heading: "Medical management, with drugs and doses",
      points: [
        "**Watchful waiting with lifestyle advice for IPSS 0-7 and for moderate scores that do not bother the patient:** restrict evening fluids and caffeine and alcohol, treat constipation, double voiding, timed voiding, avoiding the offending drugs, and reviewing the diuretic timing. Review with a repeated IPSS at 6-12 months.",
        "**Alpha-1 blockers - first line for bothersome symptoms, and they work within days to 2 weeks:** **tamsulosin 0.4 mg PO OD after food (uroselective, alpha-1A)**, **silodosin 8 mg PO OD (the most uroselective, highest rate of retrograde ejaculation)**, **alfuzosin 10 mg PO OD (extended release)**, **terazosin 2-10 mg PO at night** and **doxazosin 1-8 mg PO at night** (non-selective, useful when hypertension coexists, but need dose titration for first-dose hypotension). They improve IPSS by about 4-6 points and Qmax by 2-3 mL/s but **do not change prostate size or prevent retention**.",
        "**Warn every man before cataract surgery that he is taking an alpha blocker - intraoperative floppy iris syndrome** - and tell the ophthalmologist; stopping the drug beforehand does not reliably prevent it. Other side effects are postural dizziness, asthenia, nasal stuffiness and **retrograde or absent ejaculation, which is the commonest reason men stop the drug**.",
        "**5-alpha reductase inhibitors - for a prostate above 30-40 g or a PSA above 1.5 ng/mL:** **finasteride 5 mg PO OD (type 2 inhibitor)** or **dutasteride 0.5 mg PO OD (type 1 and 2)**. They **shrink the gland by 20-30% over 6-12 months**, and uniquely **reduce the risk of acute urinary retention and the need for surgery by about half** (MTOPS and CombAT). Counsel on the **6-month delay to full benefit, loss of libido, erectile dysfunction, ejaculatory disorder, gynaecomastia, and the halving of PSA**.",
        "**Combination of an alpha blocker with a 5-alpha reductase inhibitor** is better than either alone for men with large glands, high PSA and severe symptoms (MTOPS, CombAT); the alpha blocker may be withdrawn after 6-12 months in some men. **Tadalafil 5 mg PO OD** treats LUTS and erectile dysfunction together and is a good choice where both coexist - but **never combine it with an alpha blocker without care, and never with nitrates**.",
        "**Antimuscarinics (solifenacin 5 mg OD, tolterodine 2 mg BD) or the beta-3 agonist mirabegron 25-50 mg OD** are added when storage symptoms persist after the obstruction is treated; they are safe **provided the post-void residual is below 150 mL and monitored**, and they are avoided in narrow-angle glaucoma. Saw palmetto and other phytotherapy have no benefit over placebo in randomised trials.",
      ],
    },
    {
      heading: "Acute urinary retention and the complications that force surgery",
      points: [
        "**Acute urinary retention** is a painful inability to pass urine with a palpable, percussable bladder. **Catheterise immediately** with a 14-16 Fr Foley, record the residual volume, send urine for culture, check creatinine and electrolytes, and give analgesia. **Do not decompress over minutes in the very large bladder** - rapid emptying risks haematuria ex vacuo and, more importantly, be alert to **post-obstructive diuresis** (over 200 mL/h) with hypovolaemia and electrolyte loss, which needs replacement of roughly half to two-thirds of the output and daily electrolytes.",
        "**Start tamsulosin 0.4 mg OD immediately and attempt a trial without catheter (TWOC) after 2-3 days** - an alpha blocker raises the success rate of TWOC from about 25% to 45-50%. If the TWOC fails, leave the catheter, add a 5-alpha reductase inhibitor and refer for surgery.",
        "**Chronic retention** is painless, with a large residual, often overflow incontinence and nocturnal enuresis; **high-pressure chronic retention causes bilateral hydronephrosis and obstructive nephropathy** and needs careful decompression with monitoring for post-obstructive diuresis.",
        "**Absolute indications for surgery:** refractory retention or a failed TWOC, recurrent urinary infection secondary to obstruction, recurrent gross haematuria from the prostate, bladder stones, bladder diverticula with complications, and **renal impairment or hydronephrosis due to bladder outlet obstruction**. Relative indication: symptoms not controlled by, or not tolerating, medical therapy.",
        "**Transurethral resection of the prostate (TURP) remains the reference standard** for glands of about 30-80 g; **open (or laparoscopic or robotic) simple prostatectomy or holmium laser enucleation (HoLEP) for glands above 80 g**; **transurethral incision of the prostate (TUIP) for a small gland under 30 g without a median lobe**; and bipolar TURP, photoselective vaporisation, HoLEP, Rezum water vapour therapy and prostatic urethral lift as alternatives with less bleeding and ejaculatory preservation.",
        "**Complications of TURP to be able to list:** bleeding and clot retention, **TURP syndrome (dilutional hyponatraemia from absorption of hypotonic glycine irrigation, causing confusion, nausea, bradycardia, visual disturbance and seizures - avoided by bipolar resection with normal saline irrigation and by keeping resection time under 60 minutes)**, urinary infection, urethral stricture and bladder neck contracture, **retrograde ejaculation in 65-75%**, erectile dysfunction in about 5-10%, incontinence in about 1-2%, and the need for re-operation in 1-2% per year.",
      ],
    },
    {
      heading: "Follow-up, referral and the family physician's role",
      points: [
        "**Review at 4-6 weeks after starting an alpha blocker and then 6-monthly**, repeating the IPSS, the quality of life score, the post-void residual and the creatinine; review a 5-alpha reductase inhibitor at 3 and 6 months, when the benefit appears.",
        "**Refer to urology:** any absolute surgical indication, a suspicious digital rectal examination or a raised PSA, visible haematuria, suspected stricture or neurogenic bladder, a man under 45 with significant LUTS, a raised creatinine attributed to obstruction, and failure of maximal medical therapy.",
        "**Explain the natural history honestly** - most men with mild symptoms remain stable or improve, and only a minority progress to retention - because this is what makes watchful waiting acceptable to the patient and to the family.",
        "**Do not offer PSA screening without a shared decision-making conversation** about the risk of overdiagnosis and the cascade of biopsy, and record the discussion; opportunistic testing in a symptomatic man is a different matter from screening a well one.",
        "**Search for the treatable co-morbidity that masquerades as BPH:** poorly controlled diabetes with polyuria, heart failure and peripheral oedema causing nocturnal polyuria, obstructive sleep apnoea, and evening diuretic timing. Correcting these often halves the nocturia without any prostate drug.",
        "**Counsel about sexual function before starting treatment, not after** - retrograde ejaculation with alpha blockers and silodosin, and reduced libido with 5-alpha reductase inhibitors - because unexplained ejaculatory change is the commonest reason for silent discontinuation in Indian practice.",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs for BPH: mechanism, dose, onset and main adverse effects",
      columns: ["Class", "Drug and dose", "Onset", "Effect on prostate size", "Key adverse effects"],
      rows: [
        ["Alpha-1 blocker, uroselective", "Tamsulosin 0.4 mg PO OD; silodosin 8 mg PO OD", "Days to 2 weeks", "None", "Retrograde ejaculation, dizziness, intraoperative floppy iris syndrome"],
        ["Alpha-1 blocker, non-selective", "Terazosin 2-10 mg PO nocte; doxazosin 1-8 mg PO nocte; alfuzosin 10 mg PO OD", "Days to 2 weeks", "None", "First-dose hypotension, dizziness, asthenia; useful if hypertensive"],
        ["5-alpha reductase inhibitor", "Finasteride 5 mg PO OD; dutasteride 0.5 mg PO OD", "3-6 months", "Shrinks by 20-30%", "Reduced libido, erectile and ejaculatory dysfunction, gynaecomastia, PSA halved"],
        ["Combination", "Tamsulosin 0.4 mg with dutasteride 0.5 mg PO OD", "Days for symptoms, months for size", "Shrinks by 20-30%", "Sum of both; best for large gland with severe symptoms"],
        ["PDE-5 inhibitor", "Tadalafil 5 mg PO OD", "2-4 weeks", "None", "Headache, dyspepsia, back pain; contraindicated with nitrates"],
        ["Antimuscarinic or beta-3 agonist", "Solifenacin 5 mg PO OD; mirabegron 25-50 mg PO OD", "2-4 weeks", "None", "Dry mouth, constipation, retention risk; keep post-void residual under 150 mL"],
      ],
    },
    {
      heading: "IPSS severity and the corresponding management",
      columns: ["IPSS total", "Severity", "Usual management"],
      rows: [
        ["0-7", "Mild", "Watchful waiting with lifestyle measures and a bladder diary; review in 6-12 months"],
        ["8-19", "Moderate", "Alpha blocker; add a 5-alpha reductase inhibitor if prostate is above 30-40 g or PSA above 1.5 ng/mL"],
        ["20-35", "Severe", "Combination therapy, and consider surgery early, especially with a large residual or complications"],
        ["Any score with complications", "Complicated", "Refractory retention, recurrent infection or haematuria, stones, hydronephrosis or renal impairment - surgery"],
      ],
    },
  ],
  redFlags: [
    "Painful acute retention with a palpable bladder - catheterise now, measure the residual, check creatinine and watch for post-obstructive diuresis.",
    "A hard, nodular or asymmetrical prostate with a lost median sulcus, or bone pain with LUTS - carcinoma of the prostate; refer urgently regardless of the PSA value.",
    "Visible painless haematuria in a man over 40 - urothelial or prostatic malignancy; refer for cystoscopy and upper tract imaging, do not attribute it to BPH.",
    "Bilateral hydronephrosis with a raised creatinine and a large residual - high-pressure chronic retention; decompress and monitor for post-obstructive diuresis and electrolyte loss.",
    "LUTS with saddle anaesthesia, leg weakness, altered anal tone or new back pain - cauda equina or cord compression, not BPH; image the spine the same day.",
    "Fever with rigors and an exquisitely tender prostate - acute bacterial prostatitis; do not massage the prostate, give antibiotics with prostatic penetration and admit if septic.",
  ],
  pearls: [
    "Hyperplasia, enlargement and obstruction are three different things; symptoms correlate poorly with prostate size, so a small gland with a median lobe can obstruct badly.",
    "A 3-day frequency-volume chart is the cheapest and most useful investigation in nocturia and separates nocturnal polyuria from a prostate problem.",
    "Alpha blockers act in days and change nothing about the gland; 5-alpha reductase inhibitors take 6 months and are the only drugs that reduce retention and surgery.",
    "Finasteride and dutasteride halve the PSA, so double the measured value after 6-12 months of treatment before interpreting it.",
    "A PSA above 1.5 ng/mL predicts a prostate above 30 g and marks the man who will benefit from a 5-alpha reductase inhibitor.",
    "Warn about intraoperative floppy iris syndrome before cataract surgery in every man on tamsulosin or silodosin.",
    "After relieving chronic retention, watch for post-obstructive diuresis above 200 mL/h and replace half to two-thirds of the losses with electrolyte monitoring.",
    "TURP syndrome is dilutional hyponatraemia from glycine irrigation; bipolar resection with saline and a resection time under 60 minutes largely prevents it.",
  ],
  theory: [
    {
      id: "renal-urology-luts-bph-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 65-year-old man complains of nocturia four times a night, a poor stream and a feeling of incomplete emptying for 2 years. Discuss the evaluation and management of lower urinary tract symptoms due to benign prostatic hyperplasia in family practice, including the indications for surgery.",
      openingLines: [
        "Benign prostatic hyperplasia is nodular hyperplasia of the stromal and epithelial elements of the transition zone of the prostate, androgen dependent through dihydrotestosterone, which may produce benign prostatic enlargement and bladder outlet obstruction.",
        "This man has both storage symptoms (nocturia) and voiding symptoms (poor stream, incomplete emptying), so the first task is to quantify them with the International Prostate Symptom Score, exclude the mimics, and only then choose between watchful waiting, drugs and surgery.",
      ],
      answer: [
        {
          heading: "1. History and symptom quantification",
          points: [
            "Separate storage symptoms - frequency, urgency, nocturia, urge incontinence - from voiding symptoms - hesitancy, poor stream, intermittency, straining, terminal dribbling, incomplete emptying.",
            "Score with the IPSS: seven items each 0-5, total 0-35, mild 0-7, moderate 8-19, severe 20-35, plus the quality of life question scored 0-6, and repeat it at every review.",
            "A 3-day frequency-volume chart to identify polyuria, nocturnal polyuria (more than 33% of 24-hour output at night) or a small functional capacity.",
            "Ask about haematuria, previous retention, urinary infection, stones, urethral instrumentation or sexually transmitted infection, diabetes, neurological disease, and sexual function.",
            "Review drugs that worsen LUTS: anticholinergics, tricyclics, first-generation antihistamines, decongestants, opioids and evening diuretics.",
          ],
        },
        {
          heading: "2. Examination and investigation",
          points: [
            "Abdominal examination for a palpable bladder; digital rectal examination recording size, consistency, symmetry, median sulcus and nodularity; examination of the meatus and foreskin; focused neurological examination including perianal sensation and anal tone.",
            "Urine routine and microscopy, blood glucose or HbA1c, serum creatinine with eGFR.",
            "Ultrasound of kidneys, ureters, bladder and prostate with post-void residual; a residual above 100-150 mL is significant, and hydronephrosis indicates high-pressure retention.",
            "Uroflowmetry on a voided volume of at least 150 mL: Qmax above 15 mL/s normal, 10-15 equivocal, below 10 mL/s obstructed; a plateau curve suggests urethral stricture.",
            "PSA after counselling; interpret with the caveats that it rises with infection, retention, instrumentation and recent ejaculation, and is halved by 5-alpha reductase inhibitors. Refer if PSA is above 4 ng/mL or the gland feels suspicious.",
          ],
        },
        {
          heading: "3. Conservative and medical management",
          points: [
            "IPSS 0-7 or symptoms that do not bother the patient: watchful waiting with fluid restriction in the evening, less caffeine and alcohol, double and timed voiding, treatment of constipation, and drug review; reassess in 6-12 months.",
            "Alpha-1 blocker for bothersome symptoms: tamsulosin 0.4 mg PO OD, silodosin 8 mg PO OD, alfuzosin 10 mg PO OD, or terazosin or doxazosin titrated at night if hypertensive; effect within days, improves IPSS by 4-6 points.",
            "5-alpha reductase inhibitor when the prostate is above 30-40 g or PSA above 1.5 ng/mL: finasteride 5 mg or dutasteride 0.5 mg PO OD; shrinks the gland by 20-30% over 6-12 months and halves the risk of retention and surgery.",
            "Combination therapy for a large gland with severe symptoms, as shown in MTOPS and CombAT; tadalafil 5 mg PO OD where erectile dysfunction coexists.",
            "Add an antimuscarinic or mirabegron for persistent storage symptoms, provided the post-void residual stays below 150 mL.",
            "Counsel before starting: retrograde ejaculation with alpha blockers, sexual adverse effects and delayed onset with 5-alpha reductase inhibitors, and floppy iris syndrome before cataract surgery.",
          ],
        },
        {
          heading: "4. Acute urinary retention",
          points: [
            "Catheterise with a 14-16 Fr Foley, record the drained volume, send urine for culture, check creatinine and electrolytes.",
            "Start tamsulosin 0.4 mg OD and attempt a trial without catheter after 2-3 days, which succeeds in about half of men on an alpha blocker.",
            "Watch for post-obstructive diuresis above 200 mL/h after relieving chronic retention, replacing half to two-thirds of the loss with daily electrolytes.",
            "A failed trial without catheter is an indication for surgery.",
          ],
        },
        {
          heading: "5. Indications for surgery and the operations",
          points: [
            "Absolute indications: refractory retention or failed trial without catheter, recurrent urinary infection from obstruction, recurrent gross haematuria of prostatic origin, bladder stones, complicated diverticula, and renal impairment or hydronephrosis from bladder outlet obstruction.",
            "Relative indication: symptoms not controlled by, or intolerance of, maximal medical therapy.",
            "TURP is the reference standard for 30-80 g; TUIP for a small gland under 30 g; HoLEP or open or laparoscopic simple prostatectomy above 80 g; bipolar TURP, photoselective vaporisation, Rezum and prostatic urethral lift as alternatives.",
            "Complications to counsel: bleeding and clot retention, TURP syndrome with dilutional hyponatraemia, infection, stricture and bladder neck contracture, retrograde ejaculation in 65-75%, erectile dysfunction in 5-10%, incontinence in 1-2%, and re-operation in 1-2% per year.",
          ],
        },
      ],
      mustDraw: [
        "The IPSS scoring table with the seven items and the mild, moderate and severe bands.",
        "A management flow chart from IPSS through watchful waiting, alpha blocker, combination therapy and surgery, with the absolute surgical indications in a box.",
      ],
      markSplit: [
        { part: "Definitions, symptom groups and IPSS", marks: 2 },
        { part: "Examination including DRE, and investigations with PSA caveats", marks: 2 },
        { part: "Medical management with drugs and doses", marks: 3 },
        { part: "Acute retention and its management", marks: 1 },
        { part: "Absolute surgical indications, operations and complications", marks: 2 },
      ],
      keywords: ["IPSS", "tamsulosin", "dutasteride", "TURP", "post-void residual"],
    },
    {
      id: "renal-urology-luts-bph-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on acute urinary retention: causes, immediate management and prevention of recurrence.",
      openingLines: [
        "Acute urinary retention is the sudden, painful inability to pass urine with a palpable and percussable bladder, and it is a urological emergency because of pain, the risk of infection and the risk of obstructive nephropathy.",
        "In men over 50 the commonest cause is benign prostatic hyperplasia, often precipitated by a drug, constipation, alcohol or an intercurrent illness.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Obstructive: benign prostatic hyperplasia, carcinoma of the prostate, urethral stricture, meatal stenosis or phimosis, bladder neck stenosis, blood clot, bladder or urethral stone, and in women a large fibroid, ovarian mass, gravid retroverted uterus or pelvic organ prolapse.",
            "Neurogenic: cauda equina syndrome, spinal cord compression, diabetic cystopathy, multiple sclerosis, stroke, Parkinson disease, and post-operative or post-partum bladder dysfunction.",
            "Drug induced: anticholinergics, tricyclic antidepressants, first-generation antihistamines, alpha agonists in decongestants, opioids, and sympathomimetics.",
            "Precipitants in a man with pre-existing BPH: constipation, alcohol excess, immobility, cold weather, a urinary infection, an unaccustomed large fluid load, and surgery under anaesthesia.",
          ],
        },
        {
          heading: "Immediate management",
          points: [
            "Confirm by palpation and percussion of the bladder; bladder ultrasound if available.",
            "Catheterise aseptically with a 14-16 Fr Foley; if it will not pass, do not force - consider a coude-tip catheter, a smaller size, or a suprapubic catheter with urology assistance, and never attempt suprapubic puncture in a scarred lower abdomen or with a non-palpable bladder.",
            "Record the drained volume, give analgesia, send urine for culture, check creatinine and electrolytes, and treat infection if present.",
            "Look for and correct precipitants: relieve constipation, stop the offending drug, treat the infection.",
            "Watch for post-obstructive diuresis (more than 200 mL/h) after decompressing a chronic large-volume retention, replacing half to two-thirds of the output and monitoring sodium, potassium and creatinine daily.",
          ],
        },
        {
          heading: "Preventing recurrence",
          points: [
            "Start tamsulosin 0.4 mg PO OD at the time of catheterisation and attempt a trial without catheter after 2-3 days; this raises the success rate from about 25% to 45-50%.",
            "Add finasteride 5 mg or dutasteride 0.5 mg PO OD for a large gland, since these halve the future risk of retention and surgery.",
            "Refer for surgery after a failed trial without catheter, a second episode, renal impairment, or a residual that remains large.",
            "Advise avoidance of the precipitating drugs and alcohol, treatment of constipation, and prompt attention to urinary infection.",
          ],
        },
      ],
      mustDraw: ["A three-column table of obstructive, neurogenic and drug-induced causes of acute urinary retention."],
      markSplit: [
        { part: "Classified causes", marks: 2 },
        { part: "Immediate management including catheterisation and post-obstructive diuresis", marks: 2 },
        { part: "Prevention of recurrence and referral", marks: 1 },
      ],
      keywords: ["acute urinary retention", "trial without catheter", "post-obstructive diuresis", "tamsulosin", "cauda equina"],
    },
  ],
  mcqs: [
    {
      id: "renal-urology-luts-bph-m1",
      stem: "A 68-year-old man has an IPSS of 21, a prostate volume of 62 g on ultrasound, a PSA of 2.8 ng/mL, a post-void residual of 90 mL and a normal creatinine. Digital rectal examination shows a smooth symmetrical gland. What is the most appropriate initial treatment?",
      options: [
        "Watchful waiting with lifestyle advice alone",
        "Tamsulosin 0.4 mg daily plus dutasteride 0.5 mg daily",
        "Finasteride 5 mg daily alone",
        "Immediate referral for transurethral resection of the prostate",
      ],
      answer: 1,
      explanation:
        "He has severe symptoms (IPSS 20-35), a gland well above 40 g and a PSA above 1.5 ng/mL, which is exactly the profile in which MTOPS and CombAT showed combination therapy to be superior to either drug alone for symptom relief and for preventing progression to retention and surgery. Watchful waiting is appropriate only for mild or non-bothersome symptoms and would leave a severely symptomatic man untreated. Finasteride alone would work eventually but takes 3-6 months, leaving him symptomatic in the interim, which is why an alpha blocker is combined with it for the rapid effect. TURP is not indicated because he has none of the absolute indications - no refractory retention, no recurrent infection or haematuria, no stones, and no renal impairment or hydronephrosis - and medical therapy has not yet been tried.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-luts-bph-m2",
      stem: "A 70-year-old man has taken dutasteride 0.5 mg daily for 18 months. His PSA today is 2.6 ng/mL. How should this value be interpreted?",
      options: [
        "It is normal and needs no further action",
        "It should be doubled to about 5.2 ng/mL, which warrants urological referral",
        "It should be halved to about 1.3 ng/mL, which is reassuring",
        "PSA cannot be interpreted at all in men on dutasteride",
      ],
      answer: 1,
      explanation:
        "5-alpha reductase inhibitors reduce serum PSA by about 50% after 6-12 months of treatment, so the measured value must be doubled to give the equivalent untreated figure - here about 5.2 ng/mL, which is above the 4 ng/mL threshold and requires urological assessment. Accepting 2.6 ng/mL as normal is the trap and delays the diagnosis of prostate cancer. Halving the value is the correction applied in the wrong direction. Saying PSA is uninterpretable is wrong: it remains useful, and indeed a rising PSA on a 5-alpha reductase inhibitor is a strong warning sign, because the drug should be pushing it down.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-luts-bph-m3",
      stem: "A 74-year-old man is catheterised for painless chronic retention and drains 1800 mL. Over the next 6 hours he passes 1600 mL of urine, his blood pressure falls to 92/58 mmHg and he feels giddy. What is the correct management?",
      options: [
        "Clamp the catheter intermittently to slow the output",
        "Replace half to two-thirds of the urine output with intravenous fluid and monitor electrolytes and creatinine daily",
        "Give intravenous furosemide to prevent fluid overload",
        "Remove the catheter and recatheterise with a smaller size",
      ],
      answer: 1,
      explanation:
        "He has post-obstructive diuresis, defined by an output above 200 mL/h after decompression of chronic retention, caused by accumulated solute, tubular concentrating failure and downregulated sodium transport; the correct treatment is measured replacement of about half to two-thirds of the output with an isotonic or hypotonic fluid, with daily sodium, potassium and creatinine. Clamping the catheter does not stop the diuresis, causes pain and risks re-obstruction and bladder injury. Furosemide is exactly wrong, as the problem is polyuria with volume depletion, not overload. Changing the catheter size addresses nothing, since the catheter is working.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-luts-bph-m4",
      stem: "A 66-year-old man on tamsulosin for 2 years is being listed for cataract surgery. What must be communicated to the ophthalmologist?",
      options: [
        "Nothing specific; tamsulosin has no ocular effects",
        "The risk of intraoperative floppy iris syndrome, so the surgeon can plan accordingly",
        "That tamsulosin must be stopped 1 week before surgery to eliminate the risk",
        "That tamsulosin causes acute angle closure glaucoma during surgery",
      ],
      answer: 1,
      explanation:
        "Alpha-1A blockade relaxes the iris dilator muscle and produces intraoperative floppy iris syndrome - a billowing iris, progressive miosis and iris prolapse - which markedly increases the risk of capsule rupture unless the surgeon knows in advance and uses iris hooks, a pupil expansion ring or intracameral phenylephrine. Saying nothing is the error that this question exists to prevent. Stopping the drug beforehand does not reliably prevent the syndrome, because the effect on the iris dilator persists for months to years after exposure. Tamsulosin does not cause acute angle closure glaucoma; that is an anticholinergic and sympathomimetic effect, not an alpha blocker one.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-luts-bph-m5",
      stem: "A 62-year-old man is 90 minutes into a monopolar transurethral resection of the prostate under spinal anaesthesia when he becomes confused, nauseated and bradycardic, with a serum sodium of 116 mmol/L. What is the underlying mechanism?",
      options: [
        "Absorption of hypotonic glycine irrigating fluid through open prostatic venous sinuses",
        "Syndrome of inappropriate antidiuretic hormone secretion from surgical stress",
        "Bacteraemia from the resected prostatic bed",
        "Air embolism through the resectoscope sheath",
      ],
      answer: 0,
      explanation:
        "TURP syndrome is dilutional hyponatraemia caused by systemic absorption of the hypotonic, non-electrolyte glycine irrigation through the venous sinuses opened during monopolar resection, and the risk rises steeply beyond 60 minutes of resection; it is prevented by bipolar resection using normal saline irrigation, limiting the resection time, and keeping the irrigation bag no more than 60 cm above the patient. SIADH does occur after surgery but develops over days and does not produce a sodium of 116 mmol/L within 90 minutes. Bacteraemia causes fever, rigors and hypotension with tachycardia rather than bradycardia with acute hyponatraemia. Air embolism causes sudden hypoxia and cardiovascular collapse without any change in serum sodium.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "renal-urology-luts-bph-c1",
      front: "IPSS: components and severity bands.",
      back: "Seven questions (incomplete emptying, frequency, intermittency, urgency, weak stream, straining, nocturia), each 0-5, total 0-35: mild 0-7, moderate 8-19, severe 20-35, plus a separate quality of life score 0-6.",
    },
    {
      id: "renal-urology-luts-bph-c2",
      front: "Distinguish benign prostatic hyperplasia, enlargement and obstruction.",
      back: "Hyperplasia is the histological transition-zone diagnosis; enlargement is the clinically large gland; obstruction is the urodynamic finding of obstructed flow. They frequently occur without one another.",
    },
    {
      id: "renal-urology-luts-bph-c3",
      front: "Uroflowmetry cut-offs, and the minimum voided volume for a valid study.",
      back: "Voided volume must be at least 150 mL. Qmax above 15 mL/s is normal, 10-15 mL/s equivocal, below 10 mL/s suggests obstruction; a flat plateau curve suggests urethral stricture.",
    },
    {
      id: "renal-urology-luts-bph-c4",
      front: "How do 5-alpha reductase inhibitors change PSA and prostate size?",
      back: "They shrink the prostate by 20-30% over 6-12 months and halve serum PSA, so double the measured PSA after 6-12 months of treatment before interpreting it.",
    },
    {
      id: "renal-urology-luts-bph-c5",
      front: "Absolute indications for surgery in BPH.",
      back: "Refractory retention or failed trial without catheter, recurrent UTI from obstruction, recurrent gross haematuria of prostatic origin, bladder stones, complicated diverticula, and renal impairment or hydronephrosis from bladder outlet obstruction.",
    },
    {
      id: "renal-urology-luts-bph-c6",
      front: "What is TURP syndrome and how is it prevented?",
      back: "Dilutional hyponatraemia from absorption of hypotonic glycine irrigation through prostatic venous sinuses, causing confusion, nausea, bradycardia, visual disturbance and seizures. Prevented by bipolar resection with saline, resection time under 60 minutes, and a low irrigation height.",
    },
    {
      id: "renal-urology-luts-bph-c7",
      front: "Post-obstructive diuresis: definition and management.",
      back: "Urine output above 200 mL/h after relieving chronic retention. Replace half to two-thirds of the output with intravenous fluid and monitor sodium, potassium and creatinine daily; do not clamp the catheter and do not give a diuretic.",
    },
    {
      id: "renal-urology-luts-bph-c8",
      front: "Which surgical option for which prostate size?",
      back: "TUIP for under 30 g without a median lobe; TURP for about 30-80 g; HoLEP or open, laparoscopic or robotic simple prostatectomy above 80 g. Bipolar TURP, photoselective vaporisation, Rezum and urethral lift are alternatives.",
    },
  ],
  references: [
    "European Association of Urology Guidelines on the Management of Non-Neurogenic Male Lower Urinary Tract Symptoms, 2024",
    "American Urological Association Guideline on Management of Benign Prostatic Hyperplasia, 2023 amendment",
    "Campbell-Walsh-Wein Urology, 12th edition, 2021 - benign prostatic hyperplasia and lower urinary tract symptoms",
    "Bailey and Love's Short Practice of Surgery, 28th edition, 2023 - the prostate and seminal vesicles",
    "MTOPS (NEJM 2003) and CombAT (European Urology 2010) trials of combination therapy in BPH",
    "Urological Society of India consensus statements on BPH management",
  ],
});

topics.push({
  id: "renal-urology-renal-stones",
  title: "Renal and ureteric stones: the colic, the emergency, and preventing the next one",
  oneLiner:
    "Urolithiasis is the formation of crystalline concretions in the urinary tract - about 80% calcium oxalate, the rest uric acid, struvite, calcium phosphate and cystine - which presents as loin-to-groin colic with haematuria, is confirmed by non-contrast CT of the kidneys, ureters and bladder, and is treated by analgesia, medical expulsive therapy for stones under 10 mm, and urgent decompression whenever obstruction is accompanied by infection or renal impairment.",
  frequency: "common",
  keywords: [
    "urolithiasis",
    "renal colic",
    "ureteric calculus",
    "non-contrast CT KUB",
    "medical expulsive therapy",
    "tamsulosin",
    "ESWL",
    "ureteroscopy",
    "PCNL",
    "struvite stone",
    "uric acid stone",
    "potassium citrate",
    "stone belt",
    "24-hour urine metabolic evaluation",
    "hydronephrosis",
    "pyonephrosis",
  ],
  sections: [
    {
      heading: "Epidemiology, stone types and why they form",
      points: [
        "India has a well-described **stone belt across Punjab, Haryana, Delhi, Rajasthan, Gujarat and Maharashtra**, with a lifetime prevalence of roughly **12% in men and 6% in women** and a **recurrence rate of about 50% at 5-10 years**, driven by heat, chronic dehydration, occupational sun exposure and a low urine volume.",
        "**Calcium oxalate (about 70-80%)** - radio-opaque, forms in acidic to neutral urine; promoted by hypercalciuria, hyperoxaluria, hypocitraturia and low urine volume. **Calcium phosphate (about 5-10%)** forms in alkaline urine and points to **distal renal tubular acidosis or primary hyperparathyroidism**.",
        "**Uric acid (about 5-10%)** - **radiolucent on plain film but visible on CT** - forms when the **urine pH is persistently below 5.5**, and is associated with gout, obesity, the metabolic syndrome, chronic diarrhoea and a high purine intake. It is the one stone that can be **dissolved medically by alkalinising the urine**.",
        "**Struvite / magnesium ammonium phosphate (about 5-10%)** - the **infection stone**, formed by **urease-producing organisms (Proteus mirabilis, Klebsiella, Pseudomonas, Ureaplasma - never Escherichia coli)** which split urea and alkalinise the urine above pH 7.2. These grow into **staghorn calculi**, are commoner in women and in the catheterised, and **must be completely cleared surgically because any residual fragment reseeds the infection**.",
        "**Cystine (1-2%)** - from autosomal recessive cystinuria with defective dibasic amino acid transport; presents in childhood or early adult life with recurrent stones, **hexagonal crystals on microscopy**, and a faintly opaque ground-glass stone.",
        "**Drug-related stones:** indinavir, atazanavir, triamterene, sulfadiazine, ceftriaxone (biliary and urinary sludge), and **topiramate and acetazolamide which cause calcium phosphate stones through a drug-induced distal renal tubular acidosis**.",
      ],
    },
    {
      heading: "Presentation and differential diagnosis",
      points: [
        "**Classical ureteric colic:** sudden, severe, **colicky loin-to-groin pain that makes the patient restless and unable to lie still** (in contrast to peritonitis, where the patient lies completely still), with nausea, vomiting and **microscopic or visible haematuria in about 85%**.",
        "**The site of the pain follows the stone:** a stone in the renal pelvis or upper ureter gives flank pain; the mid ureter gives pain radiating to the iliac fossa (and mimics appendicitis on the right); and the **vesicoureteric junction gives suprapubic pain with frequency, urgency and dysuria, and pain referred to the tip of the penis or the labia majora**.",
        "**Absence of haematuria does not exclude a stone** - about 15% have none, particularly with complete obstruction.",
        "**The differential diagnosis that kills:** a **ruptured or leaking abdominal aortic aneurysm in a man over 50 having his first ever episode of loin pain** is the classic missed diagnosis; also consider ectopic pregnancy (do a urine pregnancy test in every woman of reproductive age), ovarian torsion, testicular torsion, appendicitis, diverticulitis, biliary colic, pyelonephritis, herpes zoster before the rash, and musculoskeletal pain.",
        "**Ask about** previous stones and their composition if known, family history, fluid intake and occupation, gout, inflammatory bowel disease or bowel resection (enteric hyperoxaluria), recurrent urinary infection, immobilisation, sarcoidosis, and drugs including calcium and vitamin D supplements, topiramate and protease inhibitors.",
        "**Examine for** fever and haemodynamic instability, renal angle tenderness, a palpable bladder or mass, an expansile abdominal mass and femoral pulses (aneurysm), and the testes and hernial orifices.",
      ],
    },
    {
      heading: "Investigation: what to order and in what order",
      points: [
        "**Non-contrast CT of the kidneys, ureters and bladder is the gold standard**, with a sensitivity of about **95-98% and specificity of about 96-98%**. It detects every stone type including uric acid, gives the **size, site, Hounsfield density (above 1000 HU predicts failure of shock wave lithotripsy) and skin-to-stone distance**, and diagnoses the alternative causes of the pain. **Low-dose protocols cut the radiation dose to around 2 mSv.**",
        "**Ultrasound is first line in pregnancy and in children**, and a reasonable first test in a young patient with typical recurrent colic; it detects hydronephrosis and renal stones well but **misses most mid-ureteric stones**. Look for the **absent or asymmetric ureteric jet on colour Doppler** as an indirect sign, and note that a **twinkling artefact** helps identify a stone.",
        "**Plain X-ray of the kidneys, ureters and bladder** shows about 60-70% of stones (calcium stones are opaque, uric acid stones are radiolucent, cystine stones are faintly opaque); it is useful mainly for **following up a known radio-opaque stone** rather than for diagnosis.",
        "**Bloods in every case:** complete blood count, serum creatinine with eGFR, sodium, potassium, calcium, uric acid, and a C-reactive protein where infection is suspected. **Urine routine and microscopy with pH, and a culture** - a pH above 7 suggests a urease-producing organism and struvite, and a pH persistently below 5.5 suggests uric acid.",
        "**Send the stone for composition analysis whenever one is passed or removed** - this single result changes prevention more than any other test, and patients must be given a sieve or told to strain their urine.",
        "**Full metabolic evaluation with two 24-hour urine collections** (volume, calcium, oxalate, citrate, uric acid, sodium, magnesium, creatinine and pH) plus serum calcium, phosphate, parathyroid hormone and uric acid is reserved for **recurrent stone formers, all children, a solitary kidney, bilateral or staghorn stones, non-calcium stones, chronic kidney disease, nephrocalcinosis, and a strong family history**. Collect at least 4-6 weeks after the acute episode, on the patient's normal diet.",
      ],
    },
    {
      heading: "Acute management of renal colic",
      points: [
        "**An NSAID is the first-line analgesic and is superior to opioids** because it also reduces ureteric wall oedema and glomerular filtration pressure: **diclofenac 75 mg intramuscularly, or ketorolac 30 mg intravenously**, provided the eGFR is adequate, there is no peptic ulcer, no dehydration and no single kidney.",
        "**Paracetamol 1 g intravenously** is an effective alternative and is the drug of choice where an NSAID is contraindicated; **opioids such as tramadol 50-100 mg or morphine 0.1 mg/kg** are second line and cause more vomiting. **Antispasmodics such as hyoscine butylbromide add nothing to an NSAID.**",
        "**Do not force intravenous fluids to flush the stone out** - high-volume fluid loading raises intrapelvic pressure and pain without improving stone passage; give fluid to correct dehydration and vomiting only. Add an antiemetic such as **ondansetron 4-8 mg**.",
        "**Medical expulsive therapy:** **tamsulosin 0.4 mg PO OD for up to 4 weeks** for **distal ureteric stones of 5-10 mm**, where it improves the spontaneous passage rate and shortens time to passage; **the benefit is small or absent for stones under 5 mm, which pass anyway, and for proximal stones**. Nifedipine is an inferior alternative. Counsel on dizziness and retrograde ejaculation.",
        "**Spontaneous passage rates by size:** stones **under 5 mm pass in about 70-80%**, **5-10 mm in about 50%** (lower at the proximal ureter), and **stones above 10 mm rarely pass and usually need intervention**. Most stones that will pass do so within **4 weeks**; watchful waiting beyond 4-6 weeks risks silent renal damage.",
        "**Give clear safety-netting:** strain the urine and bring the stone, return immediately with fever, uncontrolled pain, vomiting that prevents fluid intake, or reduced urine output, and attend for a repeat imaging or urology review at 2-4 weeks even if the pain settles - **the pain stops when the ureter is completely obstructed as well as when the stone passes**.",
      ],
    },
    {
      heading: "The stone emergencies and the definitive procedures",
      points: [
        "**Obstruction with infection - infected obstructed kidney or pyonephrosis - is the true urological emergency:** fever, rigors, loin pain, hypotension and pyuria with hydronephrosis. **Urgent decompression by percutaneous nephrostomy or retrograde JJ stent, plus intravenous antibiotics and resuscitation, must happen within hours; definitive stone treatment is deferred.** Antibiotics alone into an obstructed, infected system will not save the kidney or the patient.",
        "**Other indications for urgent intervention:** obstruction in a **solitary or transplanted kidney**, bilateral obstructing stones, acute kidney injury from obstruction, and pain or vomiting that cannot be controlled.",
        "**Extracorporeal shock wave lithotripsy (ESWL)** is best for **renal stones under 20 mm and ureteric stones under 10 mm**; it is non-invasive and done as a day case. It works poorly for **stones above 1000 HU (cystine, brushite, calcium oxalate monohydrate), obesity with a skin-to-stone distance above 10 cm, lower pole stones with an unfavourable infundibulopelvic angle**, and it is **contraindicated in pregnancy, uncorrected bleeding disorder, untreated urinary infection and distal obstruction**. Warn about **steinstrasse**, the column of fragments that obstructs the ureter.",
        "**Ureteroscopy with laser lithotripsy (semirigid for the lower ureter, flexible retrograde intrarenal surgery for the kidney)** gives the highest stone-free rate in a single session, works irrespective of stone density, and is the preferred option in obesity, pregnancy in expert hands, bleeding disorders and after failed ESWL. A JJ stent is often left, and the patient must be **warned that the stent causes frequency, urgency, haematuria and flank pain, and must be told the removal date - a forgotten, encrusted stent is a serious and litigated complication**.",
        "**Percutaneous nephrolithotomy (PCNL)** is the treatment of choice for **renal stones above 20 mm and for staghorn calculi**, with the best stone-free rate; complications include bleeding needing transfusion or embolisation, sepsis, pleural injury with a supracostal puncture, and injury to adjacent organs. **Complete clearance is mandatory in struvite staghorn stones** because residual fragments harbour the urease-producing organism.",
        "**Open or laparoscopic stone surgery is now rare** in India, reserved for very large complex staghorn stones, an anatomical abnormality needing simultaneous correction, or where endourological equipment is unavailable.",
      ],
    },
    {
      heading: "Prevention: the part the family physician owns",
      points: [
        "**Fluid is the single most effective intervention:** enough intake to produce a **urine output above 2.5 litres a day**, which in the Indian summer often means drinking 3-3.5 litres, spread through the day and including a glass at bedtime. **Teach the patient to judge success by pale, straw-coloured urine, not by counting glasses.**",
        "**Dietary advice with the counter-intuitive rule spelled out: do NOT restrict dietary calcium.** A normal calcium intake of **1000-1200 mg a day binds oxalate in the gut**, and a low-calcium diet increases oxalate absorption and stone recurrence. **Calcium supplements taken between meals, however, do increase risk** and should be taken with food if needed at all.",
        "**Restrict sodium to under 2-3 g a day (under 5-6 g of salt)** because sodium drives calcium into the urine; restrict animal protein to about **0.8-1.0 g/kg/day**; limit **oxalate-rich foods - spinach, beetroot, nuts, chocolate, tea in excess, soy, rhubarb** - in documented hyperoxaluria; and increase fruit and vegetables for their citrate content.",
        "**Potassium citrate 10-20 mEq PO two or three times daily** is the workhorse of prevention: it raises urinary citrate (a natural inhibitor of calcium crystallisation) and urine pH, and is used for **hypocitraturia, calcium oxalate stones, uric acid stones and distal renal tubular acidosis**. Monitor potassium, particularly with an ACE inhibitor or in CKD.",
        "**Targeted drugs:** a **thiazide (hydrochlorothiazide 25 mg OD or chlorthalidone 25 mg OD) for hypercalciuria**, always with potassium citrate to prevent hypokalaemia; **allopurinol 100-300 mg OD for hyperuricosuric calcium oxalate stones and for uric acid stones**; **urinary alkalinisation with potassium citrate or sodium bicarbonate to a pH of 6.5-7.0 to dissolve uric acid stones**; and for cystinuria, high fluid intake, alkalinisation and **tiopronin** in resistant cases.",
        "**Treat the underlying cause:** parathyroidectomy for primary hyperparathyroidism, correction of distal renal tubular acidosis, complete clearance and culture-directed antibiotics for struvite disease, and treatment of the metabolic syndrome and gout. **Follow up with an annual ultrasound or plain film, a urine pH and a repeat 24-hour urine at 6 months to check that the intervention worked.**",
      ],
    },
  ],
  tables: [
    {
      heading: "Stone types: appearance, urine pH, associations and specific prevention",
      columns: ["Stone type", "Approximate share", "Radiology", "Urine pH", "Key association", "Specific prevention"],
      rows: [
        ["Calcium oxalate", "70-80%", "Radio-opaque, dense on CT", "Acidic to neutral", "Hypercalciuria, hyperoxaluria, hypocitraturia, low urine volume", "Fluids, normal dietary calcium, low sodium, potassium citrate, thiazide"],
        ["Calcium phosphate", "5-10%", "Radio-opaque", "Alkaline, above 6.5", "Distal renal tubular acidosis, primary hyperparathyroidism, topiramate", "Treat the cause; cautious alkali; thiazide for hypercalciuria"],
        ["Uric acid", "5-10%", "Radiolucent on X-ray, visible on CT", "Persistently below 5.5", "Gout, obesity, metabolic syndrome, chronic diarrhoea", "Alkalinise to pH 6.5-7.0 with potassium citrate; allopurinol; can be dissolved"],
        ["Struvite (magnesium ammonium phosphate)", "5-10%", "Radio-opaque, often staghorn", "Above 7.2", "Urease-producing Proteus, Klebsiella, Pseudomonas; women, catheters", "Complete surgical clearance plus culture-directed antibiotics"],
        ["Cystine", "1-2%", "Faintly opaque, ground glass", "Acidic", "Autosomal recessive cystinuria; hexagonal crystals", "High fluid intake, alkalinisation, tiopronin"],
      ],
    },
    {
      heading: "Choosing the intervention by stone size and site",
      columns: ["Stone", "Preferred option", "Alternative", "Comment"],
      rows: [
        ["Ureteric stone under 5 mm, no complication", "Conservative with analgesia", "Tamsulosin if distal", "70-80% pass spontaneously, usually within 4 weeks"],
        ["Distal ureteric stone 5-10 mm", "Medical expulsive therapy with tamsulosin 0.4 mg OD for up to 4 weeks", "Ureteroscopy with laser", "Review at 2-4 weeks; do not watch beyond 4-6 weeks"],
        ["Ureteric stone above 10 mm", "Ureteroscopy with laser lithotripsy", "ESWL for proximal stones", "Spontaneous passage is unlikely"],
        ["Renal stone under 20 mm", "ESWL", "Retrograde intrarenal surgery", "Avoid ESWL above 1000 HU or with skin-to-stone distance above 10 cm"],
        ["Renal stone above 20 mm or staghorn", "Percutaneous nephrolithotomy", "Staged PCNL or open surgery", "Complete clearance is mandatory in struvite stones"],
        ["Obstruction with fever or sepsis", "Emergency decompression by nephrostomy or JJ stent", "Neither - decompression is not optional", "Definitive stone treatment is deferred until the infection is controlled"],
      ],
    },
  ],
  redFlags: [
    "Fever with rigors, loin pain and hydronephrosis - infected obstructed kidney; resuscitate, start intravenous antibiotics and decompress by nephrostomy or stent within hours.",
    "Obstructing stone in a solitary or transplanted kidney, or bilateral obstructing stones - anuria and acute kidney injury; emergency decompression.",
    "First episode of loin pain in a man over 50 with an expansile abdominal mass or unequal femoral pulses - leaking abdominal aortic aneurysm masquerading as colic; image immediately, do not sedate and send home.",
    "Renal colic in a woman of reproductive age without a pregnancy test - exclude ectopic pregnancy before anything else.",
    "Pain that suddenly disappears without a stone being passed - the ureter may be completely obstructed; repeat imaging rather than discharge.",
    "A JJ stent that has been in place beyond its removal date - encrustation, stone formation, obstruction and loss of the kidney; arrange removal urgently.",
  ],
  pearls: [
    "The patient with renal colic writhes and cannot get comfortable; the patient with peritonitis lies still. That single observation separates them at the door.",
    "Non-contrast CT KUB is the gold standard and shows uric acid stones that are invisible on plain film; ultrasound is first line only in pregnancy and children.",
    "NSAIDs beat opioids for renal colic, and forcing intravenous fluid to flush a stone out increases pain without increasing passage.",
    "Medical expulsive therapy with tamsulosin helps distal ureteric stones of 5-10 mm; below 5 mm they pass anyway and the drug adds nothing.",
    "Never restrict dietary calcium in a calcium stone former - normal calcium intake binds gut oxalate; it is calcium supplements taken between meals that raise risk.",
    "A urine pH above 7.2 with a staghorn stone means a urease-producing organism, and Escherichia coli is not one of them.",
    "Uric acid stones are the only common stone that can be dissolved medically, by alkalinising the urine to pH 6.5-7.0.",
    "Obstruction plus infection is a surgical emergency: antibiotics alone into a closed, infected system do not work.",
  ],
  theory: [
    {
      id: "renal-urology-renal-stones-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 38-year-old man from Rajasthan presents with sudden severe right loin pain radiating to the groin with vomiting and haematuria. Discuss the evaluation and management of urolithiasis, including the prevention of recurrence.",
      openingLines: [
        "Urolithiasis is the formation of crystalline concretions within the urinary tract, of which about 80% are calcium oxalate, and it presents typically as acute ureteric colic with loin-to-groin pain, restlessness, vomiting and haematuria.",
        "This man is from the Indian stone belt, where dehydration and heat give a lifetime prevalence of about 12% in men and a recurrence rate near 50% at 5-10 years, so both the acute episode and the prevention of the next one must be addressed.",
      ],
      answer: [
        {
          heading: "1. Clinical assessment and differential diagnosis",
          points: [
            "Confirm the colic: sudden severe colicky loin-to-groin pain with a restless patient, nausea, vomiting and haematuria in about 85%; the site of referral localises the stone, with vesicoureteric junction stones producing frequency, urgency and pain referred to the tip of the penis.",
            "Exclude the dangerous mimics: leaking abdominal aortic aneurysm in the older man, ectopic pregnancy in a woman, testicular torsion, appendicitis, biliary colic, and pyelonephritis.",
            "Ask about previous stones and their analysis, family history, fluid intake and occupation, gout, bowel disease or resection, recurrent infection, immobilisation, and drugs such as calcium and vitamin D supplements, topiramate and protease inhibitors.",
            "Examine for fever, haemodynamic instability, renal angle tenderness, a palpable bladder, an expansile abdominal mass, and the testes and hernial orifices.",
          ],
        },
        {
          heading: "2. Investigations",
          points: [
            "Non-contrast CT of the kidneys, ureters and bladder is the gold standard, sensitivity about 95-98%, giving stone size, site, Hounsfield density and skin-to-stone distance, and diagnosing alternative causes.",
            "Ultrasound is first line in pregnancy and children and detects hydronephrosis, but misses most mid-ureteric stones; plain X-ray KUB is used mainly for follow-up of a known opaque stone.",
            "Urine routine and microscopy with pH and culture; complete blood count, creatinine, electrolytes, calcium and uric acid.",
            "Strain the urine and send any passed stone for composition analysis, which changes prevention more than any other single test.",
            "Metabolic evaluation with two 24-hour urine collections, 4-6 weeks after the acute episode, for recurrent stone formers, children, solitary kidney, bilateral or staghorn stones, non-calcium stones, chronic kidney disease and nephrocalcinosis.",
          ],
        },
        {
          heading: "3. Acute management",
          points: [
            "Analgesia with an NSAID first - diclofenac 75 mg intramuscularly or ketorolac 30 mg intravenously - which is superior to opioids; intravenous paracetamol 1 g where NSAIDs are contraindicated, and tramadol or morphine as second line.",
            "Antiemetic such as ondansetron 4-8 mg; intravenous fluid to correct dehydration only, not to flush the stone out.",
            "Medical expulsive therapy with tamsulosin 0.4 mg PO OD for up to 4 weeks for distal ureteric stones of 5-10 mm; stones under 5 mm pass in 70-80% without it.",
            "Safety-net: strain the urine, return with fever, uncontrollable pain, persistent vomiting or reduced output, and attend for review imaging at 2-4 weeks even if the pain settles.",
          ],
        },
        {
          heading: "4. Indications for urgent intervention and the definitive procedures",
          points: [
            "Emergency decompression by percutaneous nephrostomy or retrograde JJ stent within hours for obstruction with infection or sepsis, obstruction of a solitary or transplanted kidney, bilateral obstruction, acute kidney injury, or uncontrollable pain and vomiting.",
            "ESWL for renal stones under 20 mm and ureteric stones under 10 mm; poor results above 1000 HU, in obesity and in lower pole stones; contraindicated in pregnancy, bleeding disorder, untreated infection and distal obstruction; complicated by steinstrasse.",
            "Ureteroscopy with laser lithotripsy for ureteric stones above 10 mm, after failed ESWL, and where stone density is high; a JJ stent is often left and the removal date must be given in writing.",
            "Percutaneous nephrolithotomy for renal stones above 20 mm and for staghorn calculi, with complete clearance mandatory in struvite disease.",
          ],
        },
        {
          heading: "5. Prevention of recurrence",
          points: [
            "Fluid intake sufficient for a urine output above 2.5 litres a day, judged by pale straw-coloured urine, including a drink at bedtime.",
            "Normal dietary calcium of 1000-1200 mg a day - never a low-calcium diet, which increases oxalate absorption; sodium under 2-3 g a day; animal protein 0.8-1.0 g/kg/day; restrict oxalate-rich foods only in documented hyperoxaluria.",
            "Potassium citrate 10-20 mEq two or three times daily for hypocitraturia, calcium oxalate stones, uric acid stones and distal renal tubular acidosis, with potassium monitoring.",
            "Thiazide for hypercalciuria; allopurinol 100-300 mg OD for hyperuricosuria and uric acid stones; alkalinisation to a pH of 6.5-7.0 to dissolve uric acid stones; tiopronin for resistant cystinuria.",
            "Treat the underlying cause - hyperparathyroidism, renal tubular acidosis, infection - and follow up with annual imaging and a repeat 24-hour urine at 6 months to confirm the intervention worked.",
          ],
        },
      ],
      mustDraw: [
        "A table of stone types with radiological appearance, urine pH, association and specific prevention.",
        "A flow chart of acute colic through analgesia, imaging, size-based decision (under 5 mm, 5-10 mm, above 10 mm) and the emergency decompression branch.",
      ],
      markSplit: [
        { part: "Clinical features and differential diagnosis", marks: 2 },
        { part: "Investigations including CT KUB and metabolic evaluation", marks: 2 },
        { part: "Acute management with drugs and doses", marks: 2 },
        { part: "Emergency decompression and definitive procedures", marks: 2 },
        { part: "Prevention including fluids, diet and drugs", marks: 2 },
      ],
      keywords: ["renal colic", "CT KUB", "medical expulsive therapy", "ESWL", "potassium citrate"],
    },
    {
      id: "renal-urology-renal-stones-t2",
      paper: "III",
      kind: "differentiate",
      marks: 5,
      minutes: 10,
      frequency: "less-common",
      question: "Differentiate between calcium oxalate, uric acid and struvite stones, and outline the specific prevention of each.",
      openingLines: [
        "Urinary calculi differ in composition, radiological appearance, the urine pH at which they form, their metabolic or infective associations, and therefore in their prevention.",
        "The three commonest to differentiate are calcium oxalate (70-80%), uric acid (5-10%) and struvite or magnesium ammonium phosphate (5-10%).",
      ],
      answer: [
        {
          heading: "Calcium oxalate",
          points: [
            "Commonest stone, 70-80%; radio-opaque on plain film and dense on CT.",
            "Forms in acidic to neutral urine; risk factors are low urine volume, hypercalciuria, hyperoxaluria, hypocitraturia and high sodium and animal protein intake; enteric hyperoxaluria follows bowel resection or inflammatory bowel disease.",
            "Prevention: urine output above 2.5 L/day, normal dietary calcium of 1000-1200 mg/day (never restricted), sodium under 2-3 g/day, potassium citrate for hypocitraturia, and a thiazide for hypercalciuria.",
          ],
        },
        {
          heading: "Uric acid",
          points: [
            "5-10% of stones; radiolucent on plain X-ray but clearly seen on non-contrast CT.",
            "Requires a persistently acidic urine with pH below 5.5; associated with gout, obesity, metabolic syndrome, chronic diarrhoea, and high purine intake.",
            "Prevention and treatment: alkalinise the urine to pH 6.5-7.0 with potassium citrate or sodium bicarbonate - this is the only common stone that can be dissolved medically - plus allopurinol 100-300 mg daily and a high fluid intake.",
          ],
        },
        {
          heading: "Struvite (magnesium ammonium phosphate)",
          points: [
            "5-10% of stones; radio-opaque and typically staghorn, filling the pelvicalyceal system.",
            "Forms only in urine alkalinised above pH 7.2 by urease-producing organisms - Proteus mirabilis, Klebsiella, Pseudomonas, Ureaplasma - and notably not Escherichia coli; commoner in women, in the catheterised and in neurogenic bladder.",
            "Prevention: complete surgical clearance by percutaneous nephrolithotomy, because any residual fragment reseeds the infection, together with culture-directed antibiotics and long-term surveillance; acetohydroxamic acid is a urease inhibitor of last resort and is poorly tolerated.",
          ],
        },
      ],
      mustDraw: ["A comparison table with rows for share, radiology, urine pH, associations and prevention."],
      markSplit: [
        { part: "Calcium oxalate features and prevention", marks: 2 },
        { part: "Uric acid features and dissolution therapy", marks: 1 },
        { part: "Struvite features, organisms and need for complete clearance", marks: 2 },
      ],
      keywords: ["calcium oxalate", "uric acid stone", "struvite", "urease", "potassium citrate"],
    },
  ],
  mcqs: [
    {
      id: "renal-urology-renal-stones-m1",
      stem: "A 42-year-old man has a 7 mm stone at the vesicoureteric junction on CT, no fever, a creatinine of 0.9 mg/dL and pain controlled by oral diclofenac. What is the most appropriate management?",
      options: [
        "Immediate ureteroscopy with laser lithotripsy",
        "Tamsulosin 0.4 mg daily for up to 4 weeks with analgesia and review at 2-4 weeks",
        "Extracorporeal shock wave lithotripsy today",
        "High-volume intravenous fluids to flush the stone out",
      ],
      answer: 1,
      explanation:
        "A 5-10 mm distal ureteric stone in an afebrile patient with normal renal function and controlled pain is the exact group in which medical expulsive therapy with an alpha blocker improves the spontaneous passage rate and shortens the time to passage, so tamsulosin with analgesia and planned review at 2-4 weeks is correct. Immediate ureteroscopy is over-treatment when about half of such stones pass without any procedure, and it carries stent morbidity and anaesthetic risk. ESWL is an option later if conservative treatment fails, but it is not the first step for an uncomplicated distal stone that may pass. Forcing intravenous fluids raises intrapelvic pressure and worsens pain without improving passage, and it is a persistent myth this question exists to correct.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-renal-stones-m2",
      stem: "A 55-year-old woman with a 9 mm obstructing left ureteric stone has a temperature of 39.2 degrees C, a pulse of 122/min, a blood pressure of 88/54 mmHg and pyuria. What is the immediate priority after resuscitation and intravenous antibiotics?",
      options: [
        "Emergency ureteroscopy to remove the stone",
        "Percutaneous nephrostomy or retrograde JJ stent to decompress the collecting system",
        "ESWL to fragment the stone so it passes",
        "Continue antibiotics alone and reassess in 24 hours",
      ],
      answer: 1,
      explanation:
        "This is an infected obstructed kidney, the classic urological emergency, and the kidney and the patient are saved by drainage within hours - either a percutaneous nephrostomy or a retrograde JJ stent - alongside resuscitation and intravenous antibiotics. Definitive stone removal by ureteroscopy is deliberately deferred, because instrumenting an infected obstructed system raises intrapelvic pressure and can precipitate florid septic shock. ESWL is absolutely contraindicated in untreated urinary infection and would fragment nothing useful in this situation. Antibiotics alone cannot penetrate or sterilise a closed, obstructed, pus-filled collecting system, and waiting 24 hours risks death and loss of the kidney.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-renal-stones-m3",
      stem: "A 46-year-old obese man with gout has recurrent stones. Plain X-ray KUB is normal but CT shows a 12 mm stone in the renal pelvis with a density of 380 HU, and his urine pH is consistently 5.1. Which treatment may dissolve the stone without any procedure?",
      options: [
        "Potassium citrate to raise urine pH to 6.5-7.0, with allopurinol and a high fluid intake",
        "Hydrochlorothiazide 25 mg daily with dietary calcium restriction",
        "Long-term ciprofloxacin to sterilise the urine",
        "Acetohydroxamic acid as a urease inhibitor",
      ],
      answer: 0,
      explanation:
        "A radiolucent stone on plain film that is visible on CT with a low Hounsfield density, in an obese gouty man with a urine pH persistently below 5.5, is a uric acid stone - the only common stone that dissolves with medical therapy, achieved by alkalinising the urine to pH 6.5-7.0 with potassium citrate, adding allopurinol and increasing fluid intake. A thiazide addresses hypercalciuria in calcium stone disease and would not touch a uric acid stone, and dietary calcium restriction is harmful advice in any stone former. Long-term ciprofloxacin treats nothing here, since uric acid stones are not infection stones. Acetohydroxamic acid inhibits bacterial urease and belongs to struvite disease, which forms in alkaline urine above pH 7.2 - the opposite of this man's urine.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-renal-stones-m4",
      stem: "A 33-year-old woman who forms recurrent calcium oxalate stones asks about diet. Which advice is correct?",
      options: [
        "Restrict dietary calcium to below 500 mg per day",
        "Maintain a normal calcium intake of 1000-1200 mg per day with meals, restrict sodium and animal protein, and drink enough to pass more than 2.5 litres of urine daily",
        "Avoid all dairy products and take calcium supplements between meals instead",
        "Restrict fluid in the evening to avoid nocturia",
      ],
      answer: 1,
      explanation:
        "Dietary calcium taken with meals binds oxalate in the gut and reduces its absorption, so a normal intake of 1000-1200 mg a day lowers recurrence, while sodium restriction reduces urinary calcium excretion and a urine output above 2.5 litres a day is the single most effective measure. Restricting calcium to below 500 mg a day increases oxalate absorption and demonstrably increases recurrence - it was standard advice for decades and is now known to be harmful. Replacing dairy with supplements taken between meals is the worst of both worlds, since supplements away from food raise stone risk without providing the gut oxalate binding. Restricting evening fluid concentrates the urine overnight, exactly when stones form, and a bedtime drink is in fact advised.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-renal-stones-m5",
      stem: "A 50-year-old woman with a neurogenic bladder and recurrent Proteus mirabilis infection has a left staghorn calculus. Her urine pH is 7.8. What is the most appropriate definitive management?",
      options: [
        "Long-term suppressive antibiotics and observation",
        "ESWL in several sessions",
        "Percutaneous nephrolithotomy aiming at complete stone clearance, with culture-directed antibiotics",
        "Urinary acidification with ascorbic acid",
      ],
      answer: 2,
      explanation:
        "A staghorn stone in alkaline urine with Proteus mirabilis is a struvite infection stone, and because any residual fragment continues to harbour the urease-producing organism and regrows, the aim must be complete clearance, which percutaneous nephrolithotomy achieves better than any other modality, combined with culture-directed antibiotics and surveillance. Suppressive antibiotics alone leave the stone as an untreatable reservoir and lead to progressive loss of renal function and eventual xanthogranulomatous pyelonephritis. ESWL cannot reliably clear a staghorn stone and leaves the fragments that reseed the infection. Urinary acidification with ascorbic acid is ineffective and unsafe as a strategy, and does nothing about the stone burden already present.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "renal-urology-renal-stones-c1",
      front: "Investigation of choice for suspected renal colic, and the exceptions.",
      back: "Non-contrast CT of the kidneys, ureters and bladder (sensitivity 95-98%). Ultrasound is first line in pregnancy and in children; plain X-ray KUB is for following a known radio-opaque stone.",
    },
    {
      id: "renal-urology-renal-stones-c2",
      front: "Spontaneous passage rates of ureteric stones by size.",
      back: "Under 5 mm about 70-80%, 5-10 mm about 50%, above 10 mm rarely. Most stones that will pass do so within 4 weeks.",
    },
    {
      id: "renal-urology-renal-stones-c3",
      front: "First-line analgesia in renal colic, and what not to do.",
      back: "An NSAID - diclofenac 75 mg IM or ketorolac 30 mg IV - is superior to opioids; IV paracetamol 1 g if NSAIDs are contraindicated. Do not force intravenous fluids to flush the stone out.",
    },
    {
      id: "renal-urology-renal-stones-c4",
      front: "Which stone is radiolucent on X-ray, and how can it be dissolved?",
      back: "Uric acid stone, radiolucent on plain film but visible on CT, forming when urine pH stays below 5.5. Dissolve it by alkalinising urine to pH 6.5-7.0 with potassium citrate, plus allopurinol and high fluid intake.",
    },
    {
      id: "renal-urology-renal-stones-c5",
      front: "Which organisms cause struvite stones, and which does not?",
      back: "Urease producers - Proteus mirabilis, Klebsiella, Pseudomonas, Ureaplasma - which split urea and raise urine pH above 7.2. Escherichia coli does not produce urease and does not cause struvite stones.",
    },
    {
      id: "renal-urology-renal-stones-c6",
      front: "Dietary calcium advice for a calcium oxalate stone former.",
      back: "Normal intake of 1000-1200 mg a day taken with meals, because dietary calcium binds gut oxalate. Never a low-calcium diet. Calcium supplements taken between meals increase risk.",
    },
    {
      id: "renal-urology-renal-stones-c7",
      front: "Indications for urgent decompression of an obstructing stone.",
      back: "Obstruction with infection or sepsis, obstruction in a solitary or transplanted kidney, bilateral obstruction, acute kidney injury, and pain or vomiting that cannot be controlled - by percutaneous nephrostomy or retrograde JJ stent.",
    },
    {
      id: "renal-urology-renal-stones-c8",
      front: "Which procedure for which stone burden?",
      back: "ESWL for renal stones under 20 mm and ureteric stones under 10 mm; ureteroscopy with laser for ureteric stones above 10 mm or high density; percutaneous nephrolithotomy for renal stones above 20 mm and all staghorn calculi.",
    },
  ],
  references: [
    "European Association of Urology Guidelines on Urolithiasis, 2024",
    "American Urological Association / Endourological Society Guideline on Surgical Management of Stones, 2016, amended 2023",
    "American Urological Association Guideline on Medical Management of Kidney Stones, 2019 amendment",
    "Campbell-Walsh-Wein Urology, 12th edition, 2021 - urinary lithiasis",
    "Indian Journal of Urology - epidemiology of urolithiasis in the Indian stone belt",
    "Bailey and Love's Short Practice of Surgery, 28th edition, 2023 - the kidneys and ureters",
  ],
});

topics.push({
  id: "renal-urology-hyponatraemia-hyperkalaemia",
  title: "Hyponatraemia and hyperkalaemia in the clinic",
  oneLiner:
    "Hyponatraemia is a serum sodium below 135 mmol/L, almost always a disorder of water rather than of salt, and is worked up by measuring serum osmolality, then volume status, then urine sodium and urine osmolality; hyperkalaemia is a serum potassium above 5.5 mmol/L, which becomes an immediate emergency at 6.0 mmol/L or with any ECG change, and is treated in the fixed order of stabilise the myocardium, shift potassium into cells, then remove it from the body.",
  frequency: "common",
  keywords: [
    "hyponatraemia",
    "SIADH",
    "serum osmolality",
    "urine sodium",
    "osmotic demyelination syndrome",
    "hypertonic saline",
    "tolvaptan",
    "hyperkalaemia",
    "calcium gluconate",
    "insulin dextrose",
    "sodium zirconium cyclosilicate",
    "salt substitute",
    "pseudohyperkalaemia",
    "cerebral salt wasting",
    "thiazide hyponatraemia",
    "RAAS blockade",
  ],
  sections: [
    {
      heading: "Hyponatraemia: definitions, severity and the three-step algorithm",
      points: [
        "**Hyponatraemia is a serum sodium below 135 mmol/L**, graded **mild 130-134, moderate 125-129 and severe below 125 mmol/L**; separately it is classified by speed as **acute (developing in under 48 hours) or chronic (48 hours or longer, or of unknown duration)**, and this distinction dictates how fast it may be corrected.",
        "**Step 1 - measure serum osmolality** (normal 275-295 mOsm/kg), or calculate it as **2 x sodium + glucose (mg/dL)/18 + blood urea nitrogen (mg/dL)/2.8**. **Hypotonic (true) hyponatraemia has an osmolality below 275** and is the only kind that needs the full workup.",
        "**Isotonic pseudohyponatraemia (osmolality 275-295)** occurs with **severe hyperlipidaemia or hyperproteinaemia (myeloma, intravenous immunoglobulin)** measured by indirect ion-selective electrode; the true sodium is normal and no treatment is needed. **Hypertonic (translocational) hyponatraemia (osmolality above 295)** is caused by **hyperglycaemia, mannitol or glycine irrigation**: correct the sodium upward by **1.6-2.4 mmol/L for every 100 mg/dL that glucose exceeds 100 mg/dL**, and treat the glucose, not the sodium.",
        "**Step 2 - assess volume status clinically:** hypovolaemic (postural hypotension, tachycardia, dry mucosae, poor turgor, low jugular venous pressure), euvolaemic (no oedema, no signs of depletion) or hypervolaemic (oedema, raised JVP, ascites, crepitations).",
        "**Step 3 - measure urine sodium and urine osmolality on a spot sample, before any fluid or diuretic is given.** A **urine osmolality below 100 mOsm/kg means maximally dilute urine and points to primary polydipsia, beer potomania or a low-solute diet**; above 100 mOsm/kg means ADH is acting. A **urine sodium below 30 mmol/L means the kidney is conserving sodium (true volume depletion, or the reduced effective circulating volume of heart failure and cirrhosis); above 30-40 mmol/L with euvolaemia points to SIADH, hypothyroidism, adrenal insufficiency or a thiazide**.",
        "**In practice in India, the four commonest causes** are **thiazide diuretics, SIADH from drugs or pneumonia or tuberculosis or an intracranial event or malignancy, gastrointestinal losses with hypotonic fluid replacement, and heart failure or cirrhosis**. In a young adult with severe hyponatraemia, always ask about **excessive water intake in the summer, ecstasy or endurance exercise**.",
      ],
    },
    {
      heading: "SIADH and the mimics that must be excluded first",
      points: [
        "**Diagnostic criteria for SIADH (Bartter and Schwartz):** hypotonic hyponatraemia with **serum osmolality below 275 mOsm/kg**; **urine osmolality above 100 mOsm/kg** (inappropriately concentrated); **clinical euvolaemia**; **urine sodium above 30-40 mmol/L on a normal salt and water intake**; and **normal thyroid, adrenal and renal function with no diuretic use**. Low serum uric acid (below 4 mg/dL) and low blood urea support it.",
        "**Causes of SIADH to list:** central nervous system disease (stroke, meningitis, tuberculous meningitis, head injury, subarachnoid haemorrhage, tumour); pulmonary disease (**pneumonia, tuberculosis, empyema, mechanical ventilation**); malignancy (**small cell carcinoma of the lung classically**, head and neck cancers); drugs (**carbamazepine and oxcarbazepine, SSRIs especially in the elderly, tricyclic antidepressants, antipsychotics, cyclophosphamide, vincristine, NSAIDs, opioids, desmopressin, ecstasy**); pain, nausea and the postoperative state; and HIV.",
        "**Exclude hypothyroidism and adrenal insufficiency before diagnosing SIADH** - a short synacthen test or an 8 am cortisol, and TSH with free T4. Missing adrenal insufficiency and giving fluid restriction instead of hydrocortisone is a lethal error.",
        "**Cerebral salt wasting** is the important mimic after subarachnoid haemorrhage, head injury or neurosurgery: the biochemistry looks identical to SIADH but the patient is **volume depleted**, so the treatment is **salt and fluid replacement, not fluid restriction**. The distinction is made on careful volume assessment, weight trend and central venous pressure.",
        "**Thiazide-induced hyponatraemia** is the commonest drug cause in general practice, typically in an **elderly, low body weight woman within 2-4 weeks of starting the drug**; it can be profound. **Stop the thiazide permanently and do not rechallenge**, and check sodium 2-4 weeks after starting any thiazide in an older patient.",
        "**Beer potomania and the tea-and-toast diet** produce hyponatraemia through **low solute intake limiting free water excretion**, with a urine osmolality below 100 mOsm/kg; these patients **autocorrect very fast once solute is given, and are at high risk of overcorrection** and osmotic demyelination.",
      ],
    },
    {
      heading: "Treating hyponatraemia without causing osmotic demyelination",
      points: [
        "**The correction limits are the most examined numbers in this topic: no more than 8-10 mmol/L in the first 24 hours and no more than 18 mmol/L in 48 hours; in the high-risk patient (sodium below 105 mmol/L, alcoholism, malnutrition, liver disease, hypokalaemia, advanced age) limit the rise to 4-6 mmol/L in 24 hours.**",
        "**Severe symptomatic hyponatraemia - seizures, coma, obtundation, vomiting with headache - is treated immediately regardless of chronicity:** **3% hypertonic saline 100-150 mL intravenously over 10-20 minutes, repeated up to three times** until symptoms improve or the sodium has risen by **4-6 mmol/L**, which is enough to stop the cerebral oedema. Check the sodium after each bolus.",
        "**Osmotic demyelination syndrome** follows overcorrection of chronic hyponatraemia: a biphasic course with initial improvement then, **2-6 days later, dysarthria, dysphagia, quadriparesis, a pseudobulbar palsy, and in severe cases a locked-in state**, with MRI changes in the central pons appearing late. It is largely irreversible, which is why the ceiling matters more than the target.",
        "**If overcorrection occurs**, it can be reversed: **stop the saline, give 5% dextrose 3 mL/kg/h and desmopressin 2 micrograms intravenously** to re-lower the sodium back within the limit, and this genuinely prevents demyelination.",
        "**Cause-directed treatment for the non-emergency case:** **hypovolaemic** - **0.9% saline with frequent sodium checks**, expecting a brisk water diuresis and a rapid rise once volume is restored and ADH switches off; **hypervolaemic (heart failure, cirrhosis, nephrotic syndrome)** - **fluid restriction to 800-1000 mL/day, salt restriction and a loop diuretic**, treating the underlying disease; **SIADH** - **fluid restriction to 500-1000 mL/day** as first line.",
        "**When fluid restriction fails in SIADH:** add **oral urea 15-30 g/day** or **sodium chloride tablets with a low-dose loop diuretic**, or use **tolvaptan 15 mg PO OD** (a vasopressin V2 antagonist, started in hospital with 6-hourly sodium monitoring, contraindicated in liver disease, and expensive). **Demeclocycline is now rarely used.** A urine osmolality above 500 mOsm/kg or a urine to serum electrolyte ratio above 1 predicts that fluid restriction alone will fail.",
      ],
    },
    {
      heading: "Hyperkalaemia: causes and the ECG",
      points: [
        "**Hyperkalaemia is a serum potassium above 5.5 mmol/L: mild 5.5-5.9, moderate 6.0-6.4 and severe 6.5 mmol/L or above**, but **the number is only half the assessment - any ECG change makes it an emergency at any level**.",
        "**Always exclude pseudohyperkalaemia first** if the patient looks well and has no cause: **haemolysis of the sample, a tight or prolonged tourniquet with fist clenching, delayed transport, a difficult paediatric sample, and thrombocytosis or marked leucocytosis** (potassium released during clotting). Repeat the sample properly before treating a well patient.",
        "**Reduced excretion is the dominant mechanism:** **chronic kidney disease and acute kidney injury**, **type 4 renal tubular acidosis / hyporeninaemic hypoaldosteronism (very common in diabetic nephropathy)**, adrenal insufficiency, and **drugs - ACE inhibitors, ARBs, spironolactone and eplerenone, amiloride, trimethoprim (which acts like amiloride on the collecting duct), NSAIDs, heparin, calcineurin inhibitors, and beta blockers**.",
        "**Transcellular shift:** metabolic acidosis (especially mineral acidosis), **insulin deficiency and hyperglycaemia in diabetic ketoacidosis**, beta blockade, digoxin toxicity, and suxamethonium in burns or neuromuscular disease.",
        "**Increased load:** the crucial dietary counselling point in Indian practice is **potassium-based salt substitutes (low sodium salt is potassium chloride), coconut water, banana, citrus fruits, tomato, potato, dry fruits, dates and jaggery**, plus stored blood transfusion, rhabdomyolysis, tumour lysis and haemolysis.",
        "**The ECG sequence, in order:** **tall peaked symmetrical T waves with a narrow base**, then a **flattened or absent P wave with a prolonged PR interval**, then **widening of the QRS**, then the **sine wave pattern** and finally ventricular fibrillation or asystole. **A normal ECG does not exclude dangerous hyperkalaemia**, and the ECG changes correlate poorly with the exact potassium value.",
      ],
    },
    {
      heading: "Treating hyperkalaemia in the right order",
      points: [
        "**Step 1 - stabilise the myocardium: 10 mL of 10% calcium gluconate intravenously over 2-3 minutes**, repeated after 5 minutes if the ECG has not improved. It acts in 1-3 minutes and lasts 30-60 minutes, **does not lower the potassium at all**, and is given whenever there is any ECG change or the potassium is 6.5 mmol/L or above. **Calcium chloride 10 mL of 10% has three times the calcium but must go through a central line.** In digoxin toxicity, give calcium slowly and diluted, with digoxin-specific antibody where available.",
        "**Step 2 - shift potassium into the cells: 10 units of regular insulin in 25 g of dextrose (50 mL of 50% or 100 mL of 25% dextrose) intravenously**, which lowers potassium by about **0.6-1.2 mmol/L within 15-30 minutes and lasts 4-6 hours**; **check the blood glucose hourly for 6 hours**, as hypoglycaemia is the commonest iatrogenic complication and is more frequent in CKD and in the small, elderly patient.",
        "**Salbutamol 10-20 mg by nebuliser (or 0.5 mg intravenously)** lowers potassium by a further **0.5-1.0 mmol/L in 30 minutes** and is additive with insulin; it fails in about a fifth of patients, particularly those on a beta blocker, and causes tachycardia and tremor. **Sodium bicarbonate is useful only when there is genuine metabolic acidosis** and is not an effective potassium-lowering agent on its own.",
        "**Step 3 - remove potassium from the body: furosemide 40-80 mg intravenously with adequate volume status** in a patient who still makes urine; a **potassium binder - sodium zirconium cyclosilicate 10 g PO TDS for 48 hours then 5-10 g daily, or patiromer 8.4 g PO OD** (both act over hours and are now preferred), or **calcium or sodium polystyrene sulphonate 15-30 g** (slow, poorly evidenced and associated with intestinal necrosis, particularly with sorbitol); and **haemodialysis, which is the definitive treatment** in oliguric renal failure or refractory hyperkalaemia.",
        "**Step 4 - remove the cause and prevent the next episode:** stop or reduce the ACE inhibitor, ARB, MRA, trimethoprim or NSAID; **give the dietary list by name, and specifically ask what salt the household buys**, because low-sodium salt is potassium chloride and is heavily marketed in India; treat acidosis with sodium bicarbonate; and recheck potassium within 3-7 days of any change.",
        "**Do not abandon proven RAAS blockade for a potassium of 5.2-5.5 mmol/L in a patient with CKD or heart failure** - treat the potassium with diet, a binder, correction of acidosis and a loop diuretic, and keep the drug that protects the kidney and the heart. This is the modern, examinable position and the reason potassium binders exist.",
      ],
    },
    {
      heading: "Practical rules for the family physician",
      points: [
        "**Take the sample properly:** no prolonged tourniquet, no fist clenching, prompt transport, and repeat any unexpected result in a well patient before acting on it.",
        "**Check electrolytes 1-2 weeks after starting or increasing** an ACE inhibitor, ARB, MRA, thiazide or loop diuretic, and during any intercurrent illness with vomiting, diarrhoea or reduced intake.",
        "**Give written sick-day rules:** hold the ACE inhibitor, ARB, diuretic, MRA, metformin and SGLT2 inhibitor during vomiting, diarrhoea or fever with poor intake, and attend for a creatinine and potassium check.",
        "**Weigh the patient at every visit in heart failure, cirrhosis and CKD** - a change in weight is a better measure of fluid balance than any single sodium value, and it is free.",
        "**Never correct chronic hyponatraemia quickly because the number looks frightening.** The patient who has been at 112 mmol/L for weeks and is walking and talking needs a plan and a ceiling, not a bolus.",
        "**Document the correction ceiling in the case notes and on the fluid chart**, with the target sodium at 24 hours written as a number, so that the next doctor on duty does not exceed it.",
      ],
    },
  ],
  tables: [
    {
      heading: "Working out the cause of hypotonic hyponatraemia",
      columns: ["Volume status", "Urine sodium", "Urine osmolality", "Likely causes", "Treatment"],
      rows: [
        ["Hypovolaemic", "Below 30 mmol/L", "Above 100 mOsm/kg", "Vomiting, diarrhoea, burns, third spacing, pancreatitis", "0.9% saline with frequent sodium checks"],
        ["Hypovolaemic", "Above 30 mmol/L", "Above 100 mOsm/kg", "Thiazide or loop diuretic, adrenal insufficiency, cerebral salt wasting, salt-losing nephropathy", "Stop the diuretic; saline; hydrocortisone if adrenal"],
        ["Euvolaemic", "Above 30 mmol/L", "Above 100 mOsm/kg", "SIADH, hypothyroidism, adrenal insufficiency, drugs", "Treat the cause; fluid restriction 500-1000 mL/day"],
        ["Euvolaemic", "Variable", "Below 100 mOsm/kg", "Primary polydipsia, beer potomania, low solute (tea and toast) diet", "Restrict water, restore solute, watch closely for overcorrection"],
        ["Hypervolaemic", "Below 30 mmol/L", "Above 100 mOsm/kg", "Heart failure, cirrhosis, nephrotic syndrome", "Fluid and salt restriction, loop diuretic, treat the underlying disease"],
        ["Hypervolaemic", "Above 30 mmol/L", "Above 100 mOsm/kg", "Advanced chronic kidney disease or acute kidney injury", "Fluid restriction; dialysis if needed"],
      ],
    },
    {
      heading: "Emergency treatment of hyperkalaemia: agent, dose, onset and duration",
      columns: ["Agent", "Dose", "Onset", "Duration", "Effect on serum potassium"],
      rows: [
        ["Calcium gluconate 10%", "10 mL IV over 2-3 minutes, repeat once if ECG unchanged", "1-3 minutes", "30-60 minutes", "None - it protects the myocardium only"],
        ["Insulin with dextrose", "10 units regular insulin with 25 g dextrose IV", "15-30 minutes", "4-6 hours", "Falls by 0.6-1.2 mmol/L; monitor glucose hourly for 6 hours"],
        ["Salbutamol nebulised", "10-20 mg nebulised", "30 minutes", "2-4 hours", "Falls by 0.5-1.0 mmol/L; additive with insulin; fails on beta blockers"],
        ["Sodium bicarbonate", "50-100 mmol IV, only if acidotic", "Hours", "Variable", "Small and unreliable unless true metabolic acidosis"],
        ["Furosemide", "40-80 mg IV if urine output is preserved", "30-60 minutes", "Hours", "Removes potassium; needs adequate volume status"],
        ["Sodium zirconium cyclosilicate or patiromer", "10 g PO TDS for 48 h then 5-10 g OD; patiromer 8.4 g PO OD", "1-6 hours", "Ongoing", "Removes potassium via the gut; suitable for chronic control"],
        ["Haemodialysis", "As arranged", "Immediate once started", "Definitive", "The definitive treatment in oliguric or refractory cases"],
      ],
    },
  ],
  redFlags: [
    "Hyponatraemia with seizures, coma or obtundation - give 3% hypertonic saline 100-150 mL over 10-20 minutes immediately, regardless of how chronic the hyponatraemia is.",
    "A rise in serum sodium of more than 8-10 mmol/L in 24 hours - stop correcting, give 5% dextrose and desmopressin to bring it back down and prevent osmotic demyelination.",
    "Potassium of 6.5 mmol/L or more, or any peaked T waves, absent P waves, wide QRS or sine wave pattern - give calcium gluconate now and arrange dialysis assessment.",
    "Hyponatraemia with hypotension, hyperkalaemia, hyperpigmentation and weight loss - primary adrenal insufficiency; give hydrocortisone 100 mg intravenously before any other treatment.",
    "Hyponatraemia after subarachnoid haemorrhage or neurosurgery with signs of volume depletion - cerebral salt wasting, where fluid restriction is dangerous and salt replacement is needed.",
    "Severe hyponatraemia in an alcoholic or malnourished patient - the highest risk group for osmotic demyelination; cap the correction at 4-6 mmol/L in 24 hours.",
  ],
  pearls: [
    "Hyponatraemia is a water problem, not a salt problem; measure serum osmolality first, then assess volume, then send urine sodium and urine osmolality before giving any fluid or diuretic.",
    "Correct hyperglycaemic hyponatraemia by treating the glucose - add 1.6-2.4 mmol/L to the sodium for every 100 mg/dL of glucose above 100 mg/dL.",
    "Never exceed 8-10 mmol/L of sodium correction in 24 hours, or 4-6 mmol/L in the alcoholic, malnourished or hypokalaemic patient.",
    "Overcorrection is reversible: 5% dextrose plus desmopressin will bring the sodium back down and prevent osmotic demyelination.",
    "Exclude hypothyroidism and adrenal insufficiency before diagnosing SIADH, and exclude a thiazide before anything else in an elderly woman.",
    "In hyperkalaemia, calcium gluconate buys time but lowers nothing; insulin-dextrose and salbutamol shift it; only diuresis, a binder or dialysis removes it.",
    "Check the household salt packet - low-sodium salt is potassium chloride and is a common hidden cause of hyperkalaemia in Indian CKD patients.",
    "Do not stop an ACE inhibitor or ARB for a potassium of 5.2 mmol/L in CKD or heart failure; treat the potassium and keep the drug.",
  ],
  theory: [
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 72-year-old woman on hydrochlorothiazide for hypertension is brought with 2 days of increasing confusion and one generalised seizure. Serum sodium is 112 mmol/L. Classify hyponatraemia, describe your approach to establishing the cause, and outline the management with particular attention to the rate of correction.",
      openingLines: [
        "Hyponatraemia is a serum sodium below 135 mmol/L and is graded as mild at 130-134, moderate at 125-129 and severe below 125 mmol/L; it is a disorder of water balance rather than of total body sodium.",
        "This woman has severe symptomatic hyponatraemia with a seizure, most probably thiazide-induced, and she needs immediate hypertonic saline while the cause is established, with a strict ceiling on the rate of correction.",
      ],
      answer: [
        {
          heading: "1. Classification",
          points: [
            "By severity: mild 130-134, moderate 125-129, severe below 125 mmol/L.",
            "By duration: acute if developing within 48 hours, chronic if 48 hours or longer or of unknown duration - the latter being the group at risk of osmotic demyelination with rapid correction.",
            "By tonicity: hypotonic (serum osmolality below 275 mOsm/kg, the only true hyponatraemia); isotonic pseudohyponatraemia from severe hyperlipidaemia or hyperproteinaemia; and hypertonic translocational hyponatraemia from hyperglycaemia, mannitol or glycine.",
            "By volume status: hypovolaemic, euvolaemic or hypervolaemic - the axis that determines treatment.",
          ],
        },
        {
          heading: "2. Establishing the cause",
          points: [
            "Measure serum osmolality, or calculate it as 2 x sodium plus glucose in mg/dL divided by 18 plus blood urea nitrogen in mg/dL divided by 2.8, to confirm hypotonicity.",
            "Assess volume status clinically: postural blood pressure, pulse, mucous membranes, skin turgor, jugular venous pressure, oedema and weight trend.",
            "Send spot urine sodium and urine osmolality before any fluid or diuretic: urine osmolality below 100 mOsm/kg indicates primary polydipsia or low solute intake; urine sodium below 30 mmol/L indicates renal sodium conservation, above 30-40 mmol/L with euvolaemia indicates SIADH, a diuretic, hypothyroidism or adrenal insufficiency.",
            "Exclude hypothyroidism with TSH and free T4 and adrenal insufficiency with an 8 am cortisol or short synacthen test before diagnosing SIADH; a low serum uric acid and low urea support SIADH.",
            "In this patient the thiazide is the prime suspect - it typically affects elderly, low body weight women within 2-4 weeks of starting - but review every other drug (SSRIs, carbamazepine, NSAIDs, opioids) and examine for pneumonia, tuberculosis, malignancy and intracranial disease.",
          ],
        },
        {
          heading: "3. Immediate management of the symptomatic patient",
          points: [
            "She has a seizure, so treat immediately regardless of chronicity: 3% hypertonic saline 100-150 mL intravenously over 10-20 minutes, repeated up to three times, until symptoms improve or the sodium has risen by 4-6 mmol/L.",
            "Check serum sodium after each bolus and then 2-hourly; secure the airway, control the seizure with a benzodiazepine, and manage her in a monitored bed.",
            "Stop the hydrochlorothiazide permanently and do not rechallenge; correct coexisting hypokalaemia, remembering that potassium replacement itself raises the serum sodium.",
            "Look for and treat any contributory cause found on the workup.",
          ],
        },
        {
          heading: "4. Rate of correction and osmotic demyelination",
          points: [
            "The ceiling is a rise of no more than 8-10 mmol/L in the first 24 hours and no more than 18 mmol/L in 48 hours.",
            "In high-risk patients - sodium below 105 mmol/L, alcoholism, malnutrition, liver disease, hypokalaemia, advanced age - limit the rise to 4-6 mmol/L in 24 hours. This woman is elderly and at 112 mmol/L, so a conservative ceiling is appropriate.",
            "Osmotic demyelination syndrome appears 2-6 days after overcorrection, with dysarthria, dysphagia, quadriparesis, pseudobulbar palsy and in severe cases a locked-in state; MRI changes appear late and it is largely irreversible.",
            "If the sodium rises too fast, stop the saline, give 5% dextrose 3 mL/kg/h and desmopressin 2 micrograms intravenously to re-lower the sodium into the target range.",
            "Write the 24-hour sodium target as a number on the fluid chart so that the next doctor on duty does not exceed it.",
          ],
        },
        {
          heading: "5. Cause-directed treatment and follow-up",
          points: [
            "Hypovolaemic hyponatraemia: 0.9% saline with frequent monitoring, expecting a brisk rise once volume is restored and ADH switches off.",
            "Euvolaemic hyponatraemia from SIADH: fluid restriction to 500-1000 mL a day; if it fails, oral urea 15-30 g/day, salt tablets with a low-dose loop diuretic, or tolvaptan 15 mg PO OD in hospital with 6-hourly sodium checks.",
            "Hypervolaemic hyponatraemia: fluid restriction to 800-1000 mL a day, salt restriction, a loop diuretic and treatment of the heart failure, cirrhosis or nephrotic syndrome.",
            "For this patient: substitute an alternative antihypertensive such as amlodipine or telmisartan, record the thiazide as a documented adverse reaction, and recheck sodium at 1 and 4 weeks.",
            "Counsel her and her family about fluid intake, the warning symptoms of recurrence, and the need for electrolyte checks with any new diuretic.",
          ],
        },
      ],
      mustDraw: [
        "The three-step algorithm: serum osmolality, then volume status, then urine sodium and urine osmolality, ending in the named causes.",
        "A time-line box showing the correction ceilings of 8-10 mmol/L in 24 hours and 4-6 mmol/L in high-risk patients.",
      ],
      markSplit: [
        { part: "Classification by severity, duration, tonicity and volume", marks: 2 },
        { part: "Diagnostic algorithm with urine sodium and osmolality", marks: 2 },
        { part: "Emergency hypertonic saline with dose and end point", marks: 2 },
        { part: "Correction limits and osmotic demyelination including rescue", marks: 2 },
        { part: "Cause-directed treatment and follow-up", marks: 2 },
      ],
      keywords: ["hyponatraemia", "hypertonic saline", "osmotic demyelination", "SIADH", "thiazide"],
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the causes, ECG changes and emergency management of hyperkalaemia.",
      openingLines: [
        "Hyperkalaemia is a serum potassium above 5.5 mmol/L, graded as mild at 5.5-5.9, moderate at 6.0-6.4 and severe at 6.5 mmol/L or above, and it is the electrolyte disturbance most likely to cause sudden death.",
        "Any ECG change makes it an emergency at any potassium level, and pseudohyperkalaemia from a haemolysed or badly taken sample must be excluded in a well patient before treatment.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Pseudohyperkalaemia: haemolysed sample, prolonged tourniquet with fist clenching, delayed transport, marked thrombocytosis or leucocytosis.",
            "Reduced excretion: acute kidney injury and chronic kidney disease; type 4 renal tubular acidosis or hyporeninaemic hypoaldosteronism, especially in diabetic nephropathy; adrenal insufficiency.",
            "Drugs: ACE inhibitors, ARBs, spironolactone, eplerenone, amiloride, trimethoprim, NSAIDs, heparin, calcineurin inhibitors and beta blockers.",
            "Transcellular shift: metabolic acidosis, insulin deficiency and hyperglycaemia in diabetic ketoacidosis, digoxin toxicity, suxamethonium in burns or neuromuscular disease.",
            "Increased load: potassium-based salt substitutes, coconut water, banana, citrus, tomato, potato, dry fruits and dates; stored blood transfusion; rhabdomyolysis, tumour lysis and haemolysis.",
          ],
        },
        {
          heading: "ECG changes in sequence",
          points: [
            "Tall, peaked, symmetrical T waves with a narrow base.",
            "Flattened or absent P waves with a prolonged PR interval.",
            "Progressive widening of the QRS complex.",
            "Sine wave pattern, then ventricular fibrillation or asystole.",
            "A normal ECG does not exclude dangerous hyperkalaemia, and the changes correlate poorly with the exact value.",
          ],
        },
        {
          heading: "Emergency management in order",
          points: [
            "Stabilise the myocardium: calcium gluconate 10 mL of 10% intravenously over 2-3 minutes, repeated once if the ECG has not improved; it works within 1-3 minutes for 30-60 minutes and does not lower the potassium.",
            "Shift potassium into cells: 10 units of regular insulin with 25 g of dextrose intravenously, lowering potassium by 0.6-1.2 mmol/L within 15-30 minutes, with hourly glucose monitoring for 6 hours; add nebulised salbutamol 10-20 mg for a further 0.5-1.0 mmol/L; sodium bicarbonate only if genuinely acidotic.",
            "Remove potassium: furosemide 40-80 mg intravenously if urine output is preserved; a binder such as sodium zirconium cyclosilicate 10 g three times daily for 48 hours or patiromer 8.4 g daily; and haemodialysis, which is definitive.",
            "Remove the cause: stop or reduce the ACE inhibitor, ARB, MRA, trimethoprim or NSAID; treat acidosis; give the dietary list by name and ask what salt the household uses.",
            "Recheck potassium within 3-7 days of any change, and do not abandon proven RAAS blockade for a potassium of 5.2-5.5 mmol/L in CKD or heart failure - treat the potassium instead.",
          ],
        },
      ],
      mustDraw: ["The ECG sequence drawn as four strips: peaked T waves, absent P with long PR, wide QRS, sine wave."],
      markSplit: [
        { part: "Causes, classified", marks: 2 },
        { part: "ECG changes in sequence", marks: 1 },
        { part: "Emergency treatment with doses in the correct order", marks: 2 },
      ],
      keywords: ["hyperkalaemia", "calcium gluconate", "insulin dextrose", "salt substitute", "sine wave"],
    },
  ],
  mcqs: [
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-m1",
      stem: "A 68-year-old man with community-acquired pneumonia has a serum sodium of 121 mmol/L, serum osmolality 258 mOsm/kg, urine osmolality 480 mOsm/kg, urine sodium 62 mmol/L, no oedema, normal blood pressure with no postural drop, normal TSH and a normal 8 am cortisol. What is the most appropriate initial treatment?",
      options: [
        "0.9% saline at 100 mL/h",
        "Fluid restriction to 500-1000 mL per day",
        "3% hypertonic saline 150 mL over 20 minutes",
        "Furosemide 40 mg intravenously",
      ],
      answer: 1,
      explanation:
        "He fulfils the Bartter and Schwartz criteria for SIADH - hypotonic hyponatraemia, inappropriately concentrated urine above 100 mOsm/kg, clinical euvolaemia, urine sodium above 30-40 mmol/L, and normal thyroid, adrenal and renal function - secondary to pneumonia, and first-line treatment for an asymptomatic patient is fluid restriction to 500-1000 mL a day while the pneumonia is treated. Isotonic saline is wrong and can lower the sodium further in SIADH, because the kidney excretes the sodium in concentrated urine and retains the free water. Hypertonic saline is reserved for severe symptoms such as seizures, coma or obtundation, none of which he has, and would risk overcorrection. Furosemide alone would worsen sodium loss without addressing the water retention, and is used only as an adjunct with salt tablets when restriction fails.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-m2",
      stem: "A malnourished 44-year-old man with alcohol dependence has a serum sodium of 104 mmol/L, present for at least a week, and is drowsy but not fitting. Over the first 12 hours of treatment his sodium rises to 118 mmol/L. What should be done now?",
      options: [
        "Continue the current fluids as the sodium is improving",
        "Give 5% dextrose 3 mL/kg/h with desmopressin 2 micrograms intravenously to re-lower the sodium",
        "Give a further bolus of 3% hypertonic saline to reach 125 mmol/L quickly",
        "Start tolvaptan 15 mg orally",
      ],
      answer: 1,
      explanation:
        "He has risen 14 mmol/L in 12 hours, far above the 8-10 mmol/L per 24 hours ceiling and enormously above the 4-6 mmol/L limit that applies to a high-risk patient who is alcoholic, malnourished and started below 105 mmol/L; the recognised rescue is to stop the correcting fluid, give 5% dextrose and desmopressin to bring the sodium back down into range, which prevents osmotic demyelination. Continuing the same fluid guarantees further overcorrection and a locked-in syndrome 2-6 days later. More hypertonic saline compounds the error and is exactly what causes demyelination. Tolvaptan raises sodium further and is contraindicated here, quite apart from being inappropriate in liver disease.",
      difficulty: "hard",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-m3",
      stem: "A 58-year-old man with diabetic CKD (eGFR 24 mL/min/1.73 m2) on telmisartan attends routine follow-up. He is well, with no ECG changes, and his potassium is 6.2 mmol/L. He mentions the family recently switched to a low-sodium salt. What is the best management?",
      options: [
        "Ignore it, as he is asymptomatic with a normal ECG",
        "Stop telmisartan permanently and never restart it",
        "Stop the potassium-containing salt substitute and high-potassium foods, start a potassium binder, correct any acidosis, reduce rather than stop telmisartan, and recheck in 3-7 days",
        "Give intravenous calcium gluconate and admit for dialysis",
      ],
      answer: 2,
      explanation:
        "Low-sodium salt is potassium chloride and is a common, easily missed cause of hyperkalaemia in Indian CKD patients, so the correct approach is to remove the potassium load, add a binder such as sodium zirconium cyclosilicate or patiromer, correct metabolic acidosis with sodium bicarbonate, keep RAAS blockade at a reduced dose because it protects the kidney and heart, and recheck within a week. Ignoring a potassium of 6.2 mmol/L is unsafe even with a normal ECG, since the ECG correlates poorly with the value. Stopping telmisartan permanently sacrifices proven renal and cardiovascular protection when the modifiable cause is dietary. Calcium gluconate and dialysis are for an ECG-positive or refractory emergency, not for a well outpatient with a correctable cause.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-m4",
      stem: "A 62-year-old man with type 2 diabetes presents with a random blood glucose of 720 mg/dL and a serum sodium of 126 mmol/L. What is the correct interpretation?",
      options: [
        "True hypotonic hyponatraemia requiring fluid restriction",
        "Translocational hyponatraemia; the corrected sodium is about 136-141 mmol/L and the treatment is to correct the hyperglycaemia",
        "Pseudohyponatraemia from hyperlipidaemia; no action is needed",
        "SIADH secondary to diabetes",
      ],
      answer: 1,
      explanation:
        "Hyperglycaemia draws water out of cells and dilutes the serum sodium, producing hypertonic or translocational hyponatraemia; adding 1.6-2.4 mmol/L for each 100 mg/dL of glucose above 100 mg/dL gives a corrected sodium of roughly 136-141 mmol/L, so there is no true sodium disorder and the treatment is insulin and fluid for the hyperglycaemia. Calling it hypotonic hyponatraemia and restricting fluid would be actively harmful in a patient who is osmotically diuresing and volume depleted. Pseudohyponatraemia is a laboratory artefact of severe hyperlipidaemia or hyperproteinaemia with a normal measured osmolality, which does not apply here. SIADH requires euvolaemia, a low serum osmolality and inappropriately concentrated urine, none of which fits a hyperosmolar hyperglycaemic state.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-m5",
      stem: "A 40-year-old man in acute kidney injury has a potassium of 7.1 mmol/L with a widened QRS on the ECG. Which drug should be given first, and what will it do to the serum potassium?",
      options: [
        "Insulin with dextrose; it will lower potassium by 0.6-1.2 mmol/L in 15-30 minutes",
        "Calcium gluconate; it will not change the serum potassium at all but protects the myocardium within 1-3 minutes",
        "Nebulised salbutamol; it will lower potassium by 0.5-1.0 mmol/L in 30 minutes",
        "Sodium polystyrene sulphonate; it will remove potassium through the gut",
      ],
      answer: 1,
      explanation:
        "With a widened QRS the immediate threat is a lethal arrhythmia, so the first drug is calcium gluconate, which antagonises the effect of potassium at the myocardial membrane within 1-3 minutes and lasts 30-60 minutes while doing nothing to the serum potassium - and knowing that it does not lower potassium is the point of the question, because it must always be followed by shifting and removal. Insulin-dextrose and salbutamol both shift potassium into cells and are given next, but they take 15-30 minutes, which is too slow to be first when the QRS is already wide. Sodium polystyrene sulphonate acts over many hours, is poorly supported by evidence, and carries a risk of intestinal necrosis, so it is never the first step in an emergency.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-c1",
      front: "The three-step approach to hyponatraemia.",
      back: "Step 1: serum osmolality (hypotonic below 275 mOsm/kg is the only true hyponatraemia). Step 2: volume status. Step 3: spot urine sodium and urine osmolality, taken before any fluid or diuretic.",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-c2",
      front: "Diagnostic criteria for SIADH.",
      back: "Serum osmolality below 275 mOsm/kg; urine osmolality above 100 mOsm/kg; clinical euvolaemia; urine sodium above 30-40 mmol/L on normal intake; normal thyroid, adrenal and renal function with no diuretic. Low uric acid and low urea support it.",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-c3",
      front: "Maximum safe rate of sodium correction.",
      back: "No more than 8-10 mmol/L in 24 hours and 18 mmol/L in 48 hours; only 4-6 mmol/L in 24 hours if sodium is below 105 mmol/L or the patient is alcoholic, malnourished, hypokalaemic, has liver disease or is elderly.",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-c4",
      front: "Treatment of severe symptomatic hyponatraemia, and the rescue for overcorrection.",
      back: "3% hypertonic saline 100-150 mL IV over 10-20 minutes, repeated up to three times, until symptoms improve or sodium rises by 4-6 mmol/L. If overcorrected: stop saline, give 5% dextrose 3 mL/kg/h plus desmopressin 2 micrograms IV.",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-c5",
      front: "Correcting sodium for hyperglycaemia.",
      back: "Add 1.6-2.4 mmol/L to the measured sodium for every 100 mg/dL that glucose exceeds 100 mg/dL. Treat the glucose, not the sodium.",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-c6",
      front: "ECG sequence in hyperkalaemia.",
      back: "Tall peaked narrow-based T waves, then flat or absent P waves with a long PR, then a widening QRS, then a sine wave, then ventricular fibrillation or asystole. A normal ECG does not exclude danger.",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-c7",
      front: "The three-stage order of hyperkalaemia treatment.",
      back: "1. Stabilise: calcium gluconate 10 mL of 10% IV. 2. Shift: insulin 10 units with 25 g dextrose, plus salbutamol 10-20 mg nebulised. 3. Remove: furosemide, a potassium binder, or dialysis.",
    },
    {
      id: "renal-urology-hyponatraemia-hyperkalaemia-c8",
      front: "Hidden dietary and drug causes of hyperkalaemia in Indian practice.",
      back: "Low-sodium salt substitutes (potassium chloride), coconut water, banana, citrus, tomato, potato, dry fruits and dates; and trimethoprim, NSAIDs, heparin, ACE inhibitors, ARBs, spironolactone and beta blockers.",
    },
  ],
  references: [
    "European Society of Endocrinology, ESICM and ERA-EDTA Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia, 2014",
    "Expert panel recommendations on the diagnosis and treatment of hyponatraemia, American Journal of Medicine, 2013",
    "KDIGO Controversies Conference on Potassium Management in Kidney Disease, Kidney International, 2020",
    "European Resuscitation Council Guidelines 2021 - cardiac arrest in special circumstances, electrolyte abnormalities",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - fluid and electrolyte disturbances",
    "Brenner and Rector's The Kidney, 11th edition, 2019 - disorders of sodium and potassium balance",
  ],
});

topics.push({
  id: "renal-urology-drug-dosing-renal-impairment",
  title: "Drug dosing in renal impairment: the prescription that protects the kidney",
  oneLiner:
    "Safe prescribing in renal impairment means estimating clearance with the equation the drug label was written against - Cockcroft-Gault creatinine clearance in mL/min, not the reported eGFR in mL/min/1.73 m2 - then deciding for each drug whether to reduce the dose, lengthen the interval, avoid it altogether or monitor its level, while stopping the nephrotoxins and issuing sick-day rules.",
  frequency: "common",
  keywords: [
    "Cockcroft-Gault",
    "creatinine clearance",
    "eGFR de-indexing",
    "loading dose",
    "maintenance dose",
    "metformin eGFR",
    "nitrofurantoin eGFR",
    "aminoglycoside monitoring",
    "vancomycin trough",
    "sick day rules",
    "NSAID avoidance",
    "renally cleared drugs",
    "dialysis dosing",
    "contrast media",
    "drug-induced AKI",
    "deprescribing",
  ],
  sections: [
    {
      heading: "Which number to use: eGFR, creatinine clearance and de-indexing",
      points: [
        "**The reported eGFR from CKD-EPI 2021 is in mL/min/1.73 m2 and is normalised to a standard body surface area; it is for staging CKD.** Almost every drug label and every classical dosing table was derived from **Cockcroft-Gault creatinine clearance, which is in mL/min and is not normalised** - so for dosing, that is the number to use.",
        "**Cockcroft-Gault: CrCl (mL/min) = [(140 - age in years) x weight in kg] / (72 x serum creatinine in mg/dL), multiplied by 0.85 if female.** Use **ideal or adjusted body weight in obesity** (actual weight overestimates clearance badly) and **actual body weight in the underweight**.",
        "**De-indexing when only an eGFR is available: individual clearance = eGFR x body surface area / 1.73.** For a 45 kg woman with a body surface area of about 1.40 m2 and an eGFR of 40, the individualised clearance is only about 32 mL/min - which can change the dose band. **This matters most at the extremes of body size and for narrow therapeutic index drugs.**",
        "**Creatinine is a poor filtration marker in specific patients** - the malnourished, the elderly with low muscle mass, the amputee, the paraplegic, the cirrhotic and the bodybuilder - where it **overestimates function in the wasted and underestimates it in the muscular**. Use **cystatin C-based CKD-EPI** where the creatinine estimate is not believable.",
        "**Creatinine lags in unstable kidney function.** In evolving AKI the true GFR may be near zero while the creatinine is still 1.5 mg/dL, so **any calculated clearance in a patient whose creatinine is still rising is an overestimate** - dose conservatively and reassess daily.",
        "**Drugs that raise creatinine without reducing GFR** by blocking tubular secretion - **trimethoprim, cimetidine, dolutegravir, ritonavir, cobicistat** - and drugs that interfere with the assay, must not be mistaken for kidney injury; the urea and the urine output stay normal.",
      ],
    },
    {
      heading: "The four decisions for every drug, and the loading-dose rule",
      points: [
        "For each drug ask: **is it cleared by the kidney, is it nephrotoxic, is it removed by dialysis, and does its toxicity depend on peak or on trough concentration?** The answers give the four possible actions - **reduce the dose, lengthen the interval, avoid the drug, or monitor the level**.",
        "**A drug with more than about 30% renal elimination of active drug or active metabolite needs adjustment** in significant renal impairment. Drugs cleared mainly by the liver - **atorvastatin, amlodipine, warfarin, clopidogrel, most antidepressants** - usually need no renal adjustment at all.",
        "**The loading dose is unchanged.** Loading dose depends on the **volume of distribution, not on clearance**, so a full loading dose of an antibiotic or an antiarrhythmic must be given even in dialysis-dependent renal failure; only the **maintenance dose or interval** is reduced. Failing to load is the commonest cause of under-treated sepsis in the CKD patient.",
        "**Dose reduction versus interval extension:** for **concentration-dependent killing (aminoglycosides, fluoroquinolones)** keep the dose and **lengthen the interval**, to preserve the peak that does the killing; for **time-dependent killing (beta-lactams, vancomycin)** keep the interval and **reduce the dose**, to keep the concentration above the MIC.",
        "**In haemodialysis, give the dose after the session** for drugs that are dialysable, or give a supplementary dose afterwards; the fraction removed depends on **molecular weight, protein binding and volume of distribution** - drugs that are small, water soluble and poorly protein bound (aminoglycosides, most beta-lactams, lithium, methanol, metformin) are removed well, while highly protein-bound or large-volume drugs (phenytoin, digoxin, amiodarone) are not.",
        "**Reassess at every visit and after every acute illness.** The prescription that was correct at an eGFR of 45 is dangerous at 25, and the commonest real-world harm is a drug that was appropriate two years ago and was never reviewed.",
      ],
    },
    {
      heading: "The drugs to avoid, and the ones to stop today",
      points: [
        "**NSAIDs including diclofenac, ibuprofen and the coxibs: avoid in any CKD, and never in eGFR below 30.** They cause afferent arteriolar constriction with acute kidney injury, sodium and water retention with worsening hypertension and heart failure, hyperkalaemia, acute interstitial nephritis and papillary necrosis. **The most useful prescription a family physician writes in CKD is often the one that stops the painkiller.**",
        "**Metformin:** continue at full dose above an eGFR of 45; **maximum 1000 mg/day at eGFR 30-44 and do not start it in that band**; **stop below 30 mL/min/1.73 m2**; hold during any acute illness, dehydration or before iodinated contrast when the eGFR is below 30. The risk is **metformin-associated lactic acidosis**, which is rare but has a high mortality.",
        "**Nitrofurantoin:** it works only when concentrated in the urine, so it **fails and accumulates below an eGFR of about 30-45 mL/min/1.73 m2**; it also causes pulmonary fibrosis and peripheral neuropathy on long-term use, and haemolysis in G6PD deficiency.",
        "**Aminoglycosides (gentamicin, amikacin):** avoid where possible; if unavoidable, use **once-daily extended-interval dosing with a full weight-based dose (gentamicin 5-7 mg/kg, amikacin 15 mg/kg) and a lengthened interval**, keep the course to 5-7 days, monitor the **trough (gentamicin below 1 microgram/mL, amikacin below 5 micrograms/mL)** and the creatinine on alternate days, and never combine with another nephrotoxin.",
        "**Other agents needing care or avoidance:** **iodinated contrast** below eGFR 30 without preparation; **gadolinium-based agents below eGFR 30 (nephrogenic systemic fibrosis - use group II agents at lowest dose if unavoidable)**; **oral sodium phosphate bowel preparations (acute phosphate nephropathy)**; **colchicine, methotrexate, lithium, digoxin, allopurinol and gabapentinoids, all of which accumulate**; **tenofovir disoproxil, calcineurin inhibitors and amphotericin B**; **potassium-sparing diuretics and trimethoprim for hyperkalaemia**; and **unlabelled ayurvedic, siddha and herbal preparations containing heavy metals or Aristolochia**.",
        "**Common drugs needing a specific renal adjustment to remember:** **enoxaparin 1 mg/kg once daily instead of twice daily at CrCl below 30**; **direct oral anticoagulants - dabigatran avoided below CrCl 30, apixaban and rivaroxaban dose-reduced and avoided below 15**; **allopurinol started at 50-100 mg with slow titration**; **gabapentin and pregabalin reduced substantially**; **morphine avoided in favour of fentanyl or buprenorphine because morphine-6-glucuronide accumulates**; **co-trimoxazole halved below CrCl 30**; and **acyclovir dose-reduced with generous hydration to avoid crystal nephropathy**.",
      ],
    },
    {
      heading: "Antimicrobials in renal impairment: the practical table in the head",
      points: [
        "**Need no change:** azithromycin, doxycycline, clindamycin, linezolid, moxifloxacin, ceftriaxone, rifampicin, isoniazid (with pyridoxine), metronidazole and anidulafungin - useful to remember because these are the safe reaches when the creatinine is unknown.",
        "**Need dose reduction or interval extension:** most **beta-lactams (amoxicillin, co-amoxiclav, cefazolin, cefuroxime, ceftazidime, piperacillin-tazobactam)**, **carbapenems (meropenem, imipenem - watch for seizures with accumulation)**, **fluoroquinolones except moxifloxacin**, **vancomycin, aminoglycosides, co-trimoxazole, fluconazole, acyclovir and ethambutol**.",
        "**Vancomycin** requires **a full loading dose of 25-30 mg/kg followed by weight-based maintenance guided by levels**, aiming for an **AUC/MIC of 400-600, or a trough of 15-20 micrograms/mL where AUC monitoring is unavailable**; in dialysis it is usually given after each session with pre-dialysis levels.",
        "**Antitubercular drugs:** **isoniazid and rifampicin need no change**; **pyrazinamide and ethambutol are given three times a week (thrice weekly) when the CrCl is below 30 or on dialysis, after the dialysis session**; **streptomycin is best avoided**. Pyridoxine 10-25 mg daily is mandatory to prevent peripheral neuropathy.",
        "**In sepsis, give the full first dose immediately** and adjust only from the second dose onwards; delaying or shrinking the first dose because of a raised creatinine is a serious and frequently examined error.",
        "**Check for the drug-drug interaction that causes the injury:** an ACE inhibitor or ARB with an NSAID and a diuretic (the triple whammy), trimethoprim with an ACE inhibitor or spironolactone (hyperkalaemia), a statin with a fibrate or with clarithromycin (rhabdomyolysis), and lithium with a thiazide or NSAID (lithium toxicity).",
      ],
    },
    {
      heading: "Sick-day rules, deprescribing and the medication review",
      points: [
        "**Sick-day rules are given in writing to every patient with CKD, diabetes or heart failure:** during vomiting, diarrhoea, fever with poor intake, or any illness causing dehydration, **temporarily stop the ACE inhibitor or ARB, diuretic, mineralocorticoid receptor antagonist, metformin, SGLT2 inhibitor and NSAID**, drink fluids, and attend for a creatinine and potassium check. Restart deliberately, one drug at a time, when eating and drinking normally.",
        "**The mnemonic taught to patients is DAMN - Diuretics, ACE inhibitors and ARBs, Metformin, NSAIDs - the drugs held during a sick day.** Add the SGLT2 inhibitor and the MRA to that list in modern practice.",
        "**A structured medication review at least annually in CKD:** list every prescribed drug, every over-the-counter drug, every herbal or ayurvedic preparation and every supplement; check each against the current creatinine clearance; ask what the patient is actually taking rather than what is written; and stop what is no longer needed.",
        "**Deprescribing opportunities that come up constantly:** long-term proton pump inhibitors (associated with interstitial nephritis and CKD progression), long-term NSAIDs, duplicate antihypertensives, an alpha blocker that is no longer needed, calcium and vitamin D supplements taken without indication, and potassium supplements continued after the diuretic was stopped.",
        "**Write the creatinine clearance on the prescription and in the case sheet**, along with the date, so that the next prescriber sees the number the dose was based on; this single habit prevents more harm than any table.",
        "**Educate the family, not just the patient:** in Indian practice, over-the-counter diclofenac and combination analgesics are bought by relatives for aches and fever, and unlabelled herbal nephrotonics are often given precisely because the patient has kidney disease. Ask specifically, without judgement, at every visit.",
      ],
    },
    {
      heading: "Special situations: dialysis, transplant and the elderly",
      points: [
        "**On maintenance haemodialysis**, assume that residual clearance is minimal and dose as for a CrCl below 10 mL/min, then add a supplementary dose after dialysis for drugs that are removed. **Give the drug after the session, not before**, whenever the timing is flexible.",
        "**On continuous ambulatory peritoneal dialysis**, clearance is lower and more constant than intermittent haemodialysis; there is no post-session supplement, and some antibiotics can be given intraperitoneally for peritonitis.",
        "**On continuous renal replacement therapy in the ICU**, clearance may approach 25-50 mL/min, so **doses often need to be higher than for intermittent dialysis** - under-dosing antibiotics on CRRT is a recognised cause of treatment failure.",
        "**In the transplant recipient**, remember the calcineurin inhibitor interactions: **rifampicin, phenytoin and carbamazepine reduce tacrolimus levels and precipitate rejection; clarithromycin, erythromycin, azole antifungals, diltiazem, verapamil and grapefruit raise levels and cause nephrotoxicity**. Never add or stop a drug in a transplant patient without checking the interaction and informing the transplant unit.",
        "**In the elderly**, the serum creatinine is a poor guide because muscle mass is low - **a creatinine of 1.0 mg/dL in an 80-year-old 45 kg woman is a creatinine clearance of about 25 mL/min**. Calculate rather than eyeball, and use the lower end of every dose range.",
        "**In pregnancy**, the GFR rises by 40-50% so the serum creatinine falls; a creatinine of 1.0 mg/dL in pregnancy is abnormal. Renally cleared drugs may need higher, not lower, doses, and the choice of drug is governed by fetal safety.",
      ],
    },
  ],
  tables: [
    {
      heading: "Common drugs: what to do at each level of kidney function",
      columns: ["Drug", "Above eGFR 45-60", "eGFR 30-44", "eGFR 15-29", "Below 15 or dialysis"],
      rows: [
        ["Metformin", "Full dose up to 2000 mg/day", "Maximum 1000 mg/day; do not initiate", "Stop", "Contraindicated"],
        ["Nitrofurantoin", "Standard dose", "Avoid (ineffective and accumulates)", "Contraindicated", "Contraindicated"],
        ["NSAIDs", "Avoid in CKD; short courses only if unavoidable", "Avoid", "Contraindicated", "Contraindicated"],
        ["Enoxaparin (treatment dose)", "1 mg/kg twice daily", "1 mg/kg twice daily", "1 mg/kg once daily", "Avoid; use unfractionated heparin"],
        ["Allopurinol", "100-300 mg daily", "Start 50-100 mg, titrate slowly", "50 mg daily or alternate days", "50 mg on alternate days, after dialysis"],
        ["Gabapentin", "300 mg three times daily", "200-300 mg twice daily", "100-300 mg daily", "100-300 mg after each dialysis session"],
        ["Morphine", "Use with caution", "Reduce dose and lengthen interval", "Avoid - use fentanyl or buprenorphine", "Avoid"],
        ["Digoxin", "0.125-0.25 mg daily", "0.125 mg daily", "0.0625-0.125 mg daily with levels", "0.0625 mg alternate days; not dialysed out"],
      ],
    },
    {
      heading: "Antimicrobials by renal handling",
      columns: ["No dose change needed", "Reduce dose or lengthen interval", "Avoid if possible"],
      rows: [
        ["Azithromycin", "Amoxicillin and co-amoxiclav", "Aminoglycosides (gentamicin, amikacin)"],
        ["Doxycycline", "Cefuroxime, ceftazidime, cefazolin", "Nitrofurantoin below eGFR 30-45"],
        ["Clindamycin", "Piperacillin-tazobactam", "Colistin (dose carefully with levels if unavoidable)"],
        ["Linezolid", "Meropenem and imipenem (seizure risk)", "Amphotericin B deoxycholate"],
        ["Moxifloxacin", "Ciprofloxacin and levofloxacin", "Tenofovir disoproxil fumarate"],
        ["Ceftriaxone", "Vancomycin (full loading dose, then levels)", "Streptomycin"],
        ["Rifampicin and isoniazid", "Ethambutol and pyrazinamide (thrice weekly below CrCl 30)", "Sulfadiazine (crystal nephropathy)"],
        ["Metronidazole", "Co-trimoxazole, fluconazole, acyclovir", "Long-course NSAID plus antibiotic combinations"],
      ],
    },
  ],
  redFlags: [
    "A patient with CKD buying over-the-counter diclofenac or a combination analgesic for aches - stop it today and give a written no-NSAID card.",
    "Metformin continued during vomiting, diarrhoea or sepsis in a patient with an eGFR below 30 - risk of metformin-associated lactic acidosis; stop it and check lactate and pH.",
    "A rising creatinine with hearing loss, tinnitus or vertigo on aminoglycoside therapy - stop the drug now and check the trough level.",
    "Confusion, myoclonus or seizures in a patient with CKD on a carbapenem, gabapentin, pregabalin, acyclovir or morphine - drug accumulation; stop or reduce and reassess.",
    "A transplant recipient started on rifampicin, clarithromycin or an azole without checking the tacrolimus interaction - risk of rejection or of acute nephrotoxicity; contact the transplant unit the same day.",
    "Lithium toxicity signs (coarse tremor, ataxia, vomiting, drowsiness) after starting a thiazide, an ACE inhibitor or an NSAID - check the level urgently; haemodialysis is the treatment for severe toxicity.",
  ],
  pearls: [
    "Stage with CKD-EPI in mL/min/1.73 m2; dose with Cockcroft-Gault in mL/min. Mixing them up is the commonest prescribing error in renal impairment.",
    "The loading dose never changes, because it depends on volume of distribution; only the maintenance dose or interval is reduced.",
    "Concentration-dependent killers (aminoglycosides) keep the dose and lengthen the interval; time-dependent killers (beta-lactams, vancomycin) keep the interval and reduce the dose.",
    "In evolving AKI the creatinine lags the true GFR, so every calculated clearance is an overestimate - dose conservatively and recalculate daily.",
    "Trimethoprim, cimetidine, dolutegravir and cobicistat raise creatinine by blocking tubular secretion without harming the kidney; the urea and urine output stay normal.",
    "Metformin: full dose above 45, maximum 1000 mg/day at 30-44 and never initiated there, stopped below 30.",
    "Give the sick-day list in writing - DAMN: Diuretics, ACE inhibitors and ARBs, Metformin, NSAIDs - plus the SGLT2 inhibitor and the MRA.",
    "Write the creatinine clearance and the date on the prescription so the next prescriber sees the number the dose was based on.",
  ],
  theory: [
    {
      id: "renal-urology-drug-dosing-renal-impairment-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "A 74-year-old woman weighing 46 kg has type 2 diabetes, hypertension, osteoarthritis and a serum creatinine of 1.4 mg/dL. Her current prescription is metformin 1000 mg twice daily, telmisartan 40 mg daily, hydrochlorothiazide 12.5 mg daily, diclofenac 50 mg twice daily as needed, and glimepiride 2 mg daily. Discuss the principles of drug dosing in renal impairment and revise her prescription.",
      openingLines: [
        "Safe prescribing in renal impairment requires an estimate of the individual's clearance using the equation the drug label was written against - Cockcroft-Gault creatinine clearance in mL/min - followed by a drug-by-drug decision to reduce the dose, lengthen the interval, avoid the drug or monitor its level.",
        "For this woman, Cockcroft-Gault gives a creatinine clearance of about [(140 - 74) x 46] / (72 x 1.4) x 0.85, which is approximately 26 mL/min, so several of her drugs are now unsafe at their current doses.",
      ],
      answer: [
        {
          heading: "1. Estimating kidney function correctly",
          points: [
            "Cockcroft-Gault: CrCl (mL/min) = [(140 - age) x weight in kg] / (72 x serum creatinine in mg/dL), multiplied by 0.85 in women; use ideal or adjusted body weight in obesity.",
            "The reported eGFR from CKD-EPI 2021 is normalised to 1.73 m2 and is for staging; de-index it when needed as individual clearance = eGFR x body surface area / 1.73.",
            "Creatinine overestimates function in the elderly, malnourished, amputee and cirrhotic patient because of low muscle mass; consider cystatin C-based estimation where the value is not believable.",
            "In unstable kidney function the creatinine lags the true GFR, so any calculated clearance is an overestimate and doses must be conservative with daily reassessment.",
            "Note the drugs that raise creatinine without reducing GFR - trimethoprim, cimetidine, dolutegravir, cobicistat - which must not be mistaken for injury.",
          ],
        },
        {
          heading: "2. General principles of adjustment",
          points: [
            "Adjust drugs with more than about 30% renal elimination of active drug or active metabolite; hepatically cleared drugs such as atorvastatin, amlodipine and warfarin usually need no change.",
            "The loading dose is unchanged because it depends on volume of distribution; only the maintenance dose or interval is altered.",
            "For concentration-dependent antibiotics such as aminoglycosides, keep the dose and lengthen the interval; for time-dependent agents such as beta-lactams and vancomycin, keep the interval and reduce the dose.",
            "For dialysis patients, give dialysable drugs after the session or add a post-dialysis supplement; drugs that are small, water-soluble and poorly protein bound are removed well.",
            "Monitor levels where available - vancomycin, aminoglycosides, digoxin, lithium, phenytoin - and monitor the clinical effect where levels are not available.",
          ],
        },
        {
          heading: "3. Revising this prescription",
          points: [
            "Diclofenac: stop permanently. NSAIDs cause afferent arteriolar constriction, acute kidney injury, sodium retention, hyperkalaemia and interstitial nephritis, and are contraindicated at a clearance of 26 mL/min. Substitute paracetamol 500 mg to 1 g three times daily, topical agents, and physiotherapy and weight management for the osteoarthritis.",
            "Metformin: at an eGFR in the 25-30 band, stop it. Between 30 and 44 the maximum is 1000 mg a day and it is not initiated; below 30 it is contraindicated because of lactic acidosis risk.",
            "Glimepiride: sulfonylureas and their active metabolites accumulate and cause prolonged hypoglycaemia; reduce the dose or switch to a safer agent such as linagliptin 5 mg daily, which needs no renal adjustment, or a carefully titrated basal insulin.",
            "Telmisartan: continue, as it protects the kidney, but check potassium and creatinine 1-2 weeks after any change and accept a creatinine rise of up to 30%.",
            "Hydrochlorothiazide: thiazides lose efficacy below a clearance of about 30 mL/min; switch to a loop diuretic such as furosemide 20-40 mg daily if a diuretic is needed for volume, and monitor sodium given her age and sex.",
            "Consider adding an SGLT2 inhibitor such as dapagliflozin 10 mg daily, which is indicated down to an eGFR of 20 for kidney protection, and a statin.",
          ],
        },
        {
          heading: "4. Nephrotoxin stewardship and sick-day rules",
          points: [
            "Ask specifically about over-the-counter analgesics, ayurvedic, siddha and herbal preparations, and supplements, and about what family members buy for her.",
            "Give written sick-day rules: during vomiting, diarrhoea or fever with poor intake, hold the diuretic, telmisartan, metformin, SGLT2 inhibitor and any NSAID, drink fluids and attend for creatinine and potassium.",
            "Avoid iodinated contrast where possible and prepare with isotonic saline when unavoidable; avoid gadolinium below an eGFR of 30; avoid oral sodium phosphate bowel preparations.",
            "Write the creatinine clearance and the date on the prescription and in the case sheet.",
          ],
        },
        {
          heading: "5. Follow-up and the family physician role",
          points: [
            "Repeat creatinine, potassium and eGFR at 2 weeks after the changes, then 3-monthly, with an annual urine ACR.",
            "Perform a structured medication review at least annually, including everything bought without prescription.",
            "Educate the patient and the family together, since analgesics and herbal remedies are commonly purchased by relatives.",
            "Refer to nephrology at an eGFR below 30, with rapid progression, or with an ACR above 300 mg/g.",
          ],
        },
      ],
      mustDraw: [
        "The Cockcroft-Gault equation written out with this patient's numbers substituted.",
        "A table of her five drugs with the action for each - stop, reduce, continue or substitute - and the reason.",
      ],
      markSplit: [
        { part: "Cockcroft-Gault, de-indexing and the limits of creatinine", marks: 2 },
        { part: "Principles: loading dose, dose versus interval, dialysis", marks: 2 },
        { part: "Drug-by-drug revision of the prescription with doses", marks: 4 },
        { part: "Nephrotoxin stewardship and sick-day rules", marks: 1 },
        { part: "Follow-up, medication review and referral", marks: 1 },
      ],
      keywords: ["Cockcroft-Gault", "metformin", "NSAID", "sick day rules", "sulfonylurea hypoglycaemia"],
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-t2",
      paper: "III",
      kind: "enumerate",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Enumerate the drugs that should be avoided or used with caution in chronic kidney disease, and state the reason for each.",
      openingLines: [
        "Drugs are avoided in chronic kidney disease either because they are directly nephrotoxic, because they accumulate to toxic concentrations, or because they cause a metabolic complication such as hyperkalaemia or lactic acidosis.",
        "The list below is grouped by the reason for avoidance, which is how the marks are awarded.",
      ],
      answer: [
        {
          heading: "Directly nephrotoxic",
          points: [
            "NSAIDs including diclofenac, ibuprofen and coxibs: afferent arteriolar constriction, acute kidney injury, sodium retention, hyperkalaemia, interstitial nephritis and papillary necrosis.",
            "Aminoglycosides: proximal tubular toxicity and ototoxicity; if unavoidable use extended-interval dosing with trough monitoring for no more than 5-7 days.",
            "Iodinated contrast media and, below an eGFR of 30, gadolinium (nephrogenic systemic fibrosis).",
            "Amphotericin B deoxycholate, calcineurin inhibitors, tenofovir disoproxil, cisplatin and high-dose methotrexate.",
            "Unlabelled ayurvedic, siddha and herbal preparations, particularly those containing heavy metals or Aristolochia.",
          ],
        },
        {
          heading: "Accumulate to toxic levels",
          points: [
            "Metformin below an eGFR of 30 - metformin-associated lactic acidosis.",
            "Morphine and codeine - accumulation of morphine-6-glucuronide causing sedation and respiratory depression; use fentanyl or buprenorphine instead.",
            "Gabapentin and pregabalin - sedation, myoclonus and confusion.",
            "Digoxin, lithium, colchicine, allopurinol, acyclovir and carbapenems (seizures).",
            "Sulfonylureas such as glibenclamide and glimepiride - prolonged hypoglycaemia from accumulated active metabolites.",
          ],
        },
        {
          heading: "Cause metabolic complications, or become ineffective",
          points: [
            "Hyperkalaemia: ACE inhibitors, ARBs, spironolactone, eplerenone, amiloride, trimethoprim, heparin and beta blockers - continue where they are indicated, but monitor.",
            "Nitrofurantoin below an eGFR of 30-45: it fails to reach therapeutic urinary concentration and accumulates systemically.",
            "Thiazides below a clearance of about 30 mL/min: they lose diuretic efficacy and a loop diuretic is required.",
            "Oral sodium phosphate bowel preparations: acute phosphate nephropathy.",
            "Magnesium- and aluminium-containing antacids, and potassium supplements continued after the diuretic was stopped.",
          ],
        },
      ],
      mustDraw: ["A three-column list: directly nephrotoxic, accumulates, and causes a metabolic complication."],
      markSplit: [
        { part: "Directly nephrotoxic drugs with mechanism", marks: 2 },
        { part: "Drugs that accumulate", marks: 2 },
        { part: "Metabolic complications and loss of efficacy", marks: 1 },
      ],
      keywords: ["nephrotoxic drugs", "metformin", "morphine", "nitrofurantoin", "hyperkalaemia"],
    },
  ],
  mcqs: [
    {
      id: "renal-urology-drug-dosing-renal-impairment-m1",
      stem: "An 80-year-old woman weighing 45 kg has a serum creatinine of 1.0 mg/dL, which the laboratory reports as an eGFR of 56 mL/min/1.73 m2. Which statement about dosing her drugs is correct?",
      options: [
        "Her kidney function is near normal and no dose adjustment is needed for any drug",
        "Her Cockcroft-Gault creatinine clearance is about 25 mL/min, and renally cleared drugs must be dosed on that figure",
        "The reported eGFR is the correct number for drug dosing because it is more accurate than Cockcroft-Gault",
        "Her low body weight means the eGFR underestimates her true clearance",
      ],
      answer: 1,
      explanation:
        "Cockcroft-Gault gives [(140 - 80) x 45] / (72 x 1.0) x 0.85, which is about 32 mL/min before rounding for her small frame and, using ideal body weight considerations in a very small elderly woman, in the region of 25-32 mL/min - far below the reported eGFR of 56, because the reported figure is normalised to a body surface area she does not have. Treating her as near normal is the classic error that leads to accumulation of gabapentin, morphine, digoxin and metformin in exactly this patient group. The reported eGFR is designed for CKD staging, not dosing, since the drug labels were written against Cockcroft-Gault clearance in mL/min. Her low body weight makes the indexed eGFR an overestimate rather than an underestimate of her actual clearance.",
      difficulty: "moderate",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-m2",
      stem: "A 60-year-old man on maintenance haemodialysis is admitted with severe pneumonia and hypotension. How should his first dose of antibiotic be given?",
      options: [
        "Give a reduced first dose because he has no kidney function",
        "Give the full standard loading dose, then reduce the maintenance dose or lengthen the interval",
        "Withhold antibiotics until after his next dialysis session",
        "Halve every dose including the first and give it after dialysis",
      ],
      answer: 1,
      explanation:
        "The loading dose depends on the volume of distribution, not on clearance, so it is unchanged even in dialysis-dependent renal failure; only the maintenance dose or dosing interval is adjusted, with a post-dialysis supplement for dialysable drugs. Reducing the first dose is the commonest cause of under-treated sepsis in patients with kidney failure and is the specific error this question targets. Withholding antibiotics until after dialysis in a hypotensive man with severe pneumonia delays the single intervention that determines survival. Halving every dose including the first combines both errors and leaves subtherapeutic concentrations during the critical first hours.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-m3",
      stem: "A 54-year-old man with type 2 diabetes and an eGFR of 38 mL/min/1.73 m2 is on metformin 1000 mg twice daily. What should be done?",
      options: [
        "Continue the current dose, as metformin is safe down to an eGFR of 30",
        "Reduce to a maximum of 1000 mg per day and monitor eGFR at least 3-monthly",
        "Stop metformin immediately and start a sulfonylurea",
        "Stop metformin and start pioglitazone 30 mg daily",
      ],
      answer: 1,
      explanation:
        "In the eGFR band of 30-44 mL/min/1.73 m2 metformin may be continued but at a maximum of 1000 mg a day, it should not be newly initiated in that band, and renal function needs at least 3-monthly monitoring; it is stopped only below 30. Continuing 2000 mg a day exceeds the recommended maximum for this band and increases the risk of metformin-associated lactic acidosis. Stopping it altogether at an eGFR of 38 removes the most effective and cheapest agent unnecessarily, and switching to a sulfonylurea substitutes a drug whose active metabolites accumulate in renal impairment and cause prolonged hypoglycaemia. Pioglitazone needs no renal adjustment but causes fluid retention, heart failure and fracture, so it is a poor reflex choice here.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-m4",
      stem: "A 66-year-old woman with an eGFR of 22 mL/min/1.73 m2 has a urinary tract infection with dysuria and frequency, no fever and no flank pain. Which antibiotic is inappropriate?",
      options: ["Fosfomycin trometamol 3 g single dose", "Cefuroxime axetil with dose adjustment", "Nitrofurantoin 100 mg twice daily", "Co-amoxiclav with dose adjustment"],
      answer: 2,
      explanation:
        "Nitrofurantoin acts only when concentrated in the urine, and at an eGFR of 22 mL/min/1.73 m2 it fails to reach a therapeutic urinary concentration while accumulating systemically, raising the risk of peripheral neuropathy and pulmonary toxicity - it is contraindicated below about 30 mL/min/1.73 m2. Fosfomycin as a single dose remains usable in reduced renal function for uncomplicated cystitis. Cefuroxime axetil is appropriate provided the dose or interval is adjusted for the clearance. Co-amoxiclav is likewise acceptable with adjustment, though it needs dose reduction at this level of function.",
      difficulty: "easy",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-m5",
      stem: "A 45-year-old renal transplant recipient stable on tacrolimus is diagnosed with sputum-positive pulmonary tuberculosis and started on standard four-drug therapy. What is the most important consequence to anticipate?",
      options: [
        "Rifampicin will induce CYP3A4 and markedly lower tacrolimus levels, risking acute rejection",
        "Isoniazid will raise tacrolimus levels and cause nephrotoxicity",
        "Ethambutol will need no adjustment and there is no interaction of concern",
        "Pyrazinamide will precipitate calcineurin inhibitor withdrawal",
      ],
      answer: 0,
      explanation:
        "Rifampicin is a powerful inducer of CYP3A4 and P-glycoprotein and can reduce tacrolimus concentrations several-fold within days, so the tacrolimus dose must be increased substantially with frequent level monitoring in liaison with the transplant unit, or a rifabutin-based regimen considered - failure to do this causes acute rejection. Isoniazid is not a significant inducer of tacrolimus metabolism, and the drugs that raise levels are the macrolides, azoles, diltiazem, verapamil and grapefruit. Ethambutol does need renal dose adjustment in a transplant recipient with reduced graft function, so saying no adjustment is needed is wrong. Pyrazinamide does not cause calcineurin inhibitor withdrawal; its main issues are hepatotoxicity and hyperuricaemia.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "renal-urology-drug-dosing-renal-impairment-c1",
      front: "Which equation for staging and which for drug dosing?",
      back: "CKD-EPI 2021 in mL/min/1.73 m2 for staging; Cockcroft-Gault creatinine clearance in mL/min for drug dosing, because that is what drug labels were written against.",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-c2",
      front: "How do you de-index a reported eGFR to an individual clearance?",
      back: "Individual clearance = eGFR x body surface area / 1.73. It matters most at extremes of body size and for narrow therapeutic index drugs.",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-c3",
      front: "Does the loading dose change in renal failure?",
      back: "No. Loading dose depends on volume of distribution, not clearance, so give the full loading dose even in dialysis-dependent failure; adjust only the maintenance dose or interval.",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-c4",
      front: "Dose reduction or interval extension - which for which antibiotic?",
      back: "Concentration-dependent killing (aminoglycosides, fluoroquinolones): keep the dose, lengthen the interval. Time-dependent killing (beta-lactams, vancomycin): keep the interval, reduce the dose.",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-c5",
      front: "Metformin thresholds by eGFR.",
      back: "Full dose above 45; maximum 1000 mg/day at 30-44 and do not initiate in that band; stop below 30; hold during acute illness, dehydration and before contrast when eGFR is under 30.",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-c6",
      front: "Drugs that raise serum creatinine without reducing GFR.",
      back: "Trimethoprim, cimetidine, dolutegravir, ritonavir and cobicistat - they block tubular creatinine secretion. Urea and urine output remain normal.",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-c7",
      front: "Antimicrobials that need no renal dose adjustment.",
      back: "Azithromycin, doxycycline, clindamycin, linezolid, moxifloxacin, ceftriaxone, rifampicin, isoniazid and metronidazole.",
    },
    {
      id: "renal-urology-drug-dosing-renal-impairment-c8",
      front: "Sick-day rules for CKD - which drugs are held?",
      back: "DAMN plus two: Diuretics, ACE inhibitors and ARBs, Metformin, NSAIDs, and also the SGLT2 inhibitor and the mineralocorticoid receptor antagonist. Restart one at a time when eating and drinking normally.",
    },
  ],
  references: [
    "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease - drug management and dosing",
    "The Renal Drug Handbook, 5th edition, 2019",
    "National Formulary of India, 6th edition, 2021, and the Indian Pharmacopoeia Commission adverse drug reaction advisories",
    "NICE Clinical Knowledge Summaries - chronic kidney disease, prescribing and sick day rules, 2023 update",
    "Aronoff's Drug Prescribing in Renal Failure, American College of Physicians, 6th edition",
    "Goodman and Gilman's The Pharmacological Basis of Therapeutics, 14th edition, 2023 - drug disposition in renal disease",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "renal-urology-case-1",
    title: "Long case: diabetic hypertensive man with pedal oedema and a creatinine of 2.4 mg/dL",
    kind: "long",
    subjectId: "renal-urology",
    opening:
      "A 56-year-old man with type 2 diabetes for 14 years and hypertension for 9 years presents with bilateral pedal oedema for six weeks; serum creatinine is 2.4 mg/dL and urine albumin-creatinine ratio is 900 mg/g.",
    minutes: 45,
    frequency: "core",
    sections: [
      {
        heading: "History of presenting illness",
        points: [
          "Pedal oedema began insidiously six weeks ago, is pitting, worse by evening and now reaches the mid-shin; there is no orthopnoea, paroxysmal nocturnal dyspnoea or abdominal distension.",
          "He reports frothy urine for about a year and nocturia twice a night, but no dysuria, haematuria, flank pain or reduction in urine volume.",
          "There is no history of fever, rash, joint pain, recent NSAID use for a painful knee is admitted (diclofenac on and off for three months), and no herbal or ayurvedic preparations.",
          "Ask specifically about symptoms of uraemia - anorexia, nausea, metallic taste, pruritus, sleep reversal and cramps - because their presence changes the urgency of nephrology referral.",
        ],
      },
      {
        heading: "Diabetes and hypertension history",
        points: [
          "Type 2 diabetes was diagnosed 14 years ago; he takes metformin 1000 mg twice daily and glimepiride 2 mg once daily, with a last HbA1c of 8.9 percent three months ago.",
          "Hypertension was diagnosed 9 years ago and is treated with amlodipine 10 mg daily; home readings, when checked, run around 150/90 mmHg.",
          "He has background diabetic retinopathy on a fundus examination done two years ago, and numbness of both feet consistent with peripheral neuropathy, which supports a diabetic aetiology for the kidney disease.",
          "There has been no prior creatinine on record, so the rate of decline is unknown; a value from any old prescription or admission is worth chasing because the trajectory matters as much as the number.",
        ],
      },
      {
        heading: "Past, family, personal and drug history",
        points: [
          "No prior admissions, no known ischaemic heart disease, no stroke; a lipid profile has never been done.",
          "His father had diabetes and died of a heart attack at 62; a brother is on dialysis, which raises the pre-test probability of both diabetic and inherited kidney disease.",
          "He smokes 10 bidis a day for 30 years, does not drink alcohol and eats a diet high in salt with pickles at most meals.",
          "The full drug list is metformin, glimepiride, amlodipine and intermittent diclofenac; there is no ACE inhibitor or ARB, no statin, and no SGLT2 inhibitor, which is the central gap in his current management.",
        ],
      },
      {
        heading: "Examination",
        points: [
          "Blood pressure is 158/94 mmHg sitting with no postural drop; pulse 84 regular; BMI 27.8 kg/m2; waist 98 cm.",
          "Mild pallor is present, there is bilateral pitting pedal oedema to the mid-shin, no raised JVP, no sacral oedema and no ascites.",
          "Cardiovascular and respiratory examinations are normal; the abdomen is soft with no ballotable kidneys and no renal bruit.",
          "Fundoscopy shows dot and blot haemorrhages with hard exudates; monofilament testing is absent at three of ten sites bilaterally and ankle jerks are absent; peripheral pulses are palpable.",
        ],
      },
      {
        heading: "Staging the CKD",
        points: [
          "With a creatinine of 2.4 mg/dL in a 56-year-old man, the CKD-EPI 2021 equation gives an eGFR of approximately 30 mL/min/1.73 m2, which sits at the border of G3b and G4; a repeat value after three months is needed to confirm chronicity and stage.",
          "A urine ACR of 900 mg/g places him in category A3 (severely increased albuminuria, above 300 mg/g), so the full label is CKD G3b/G4 A3, the highest-risk red zone of the KDIGO heat map.",
          "Chronicity is supported by the long duration of diabetes, retinopathy, neuropathy, and the year-long frothy urine; small kidneys on ultrasound would clinch it, whereas normal-sized kidneys are expected in diabetic nephropathy and do not exclude chronicity.",
          "Diabetic kidney disease is the working diagnosis because retinopathy is present, albuminuria is heavy and there is no haematuria; the NSAID use is a reversible contributor to be removed immediately.",
        ],
      },
      {
        heading: "Diagnosis and problem list",
        points: [
          "Primary diagnosis: chronic kidney disease, stage G3b/G4 A3, most likely diabetic kidney disease, with a superimposed NSAID insult.",
          "Comorbid problems: poorly controlled type 2 diabetes with retinopathy and neuropathy, uncontrolled hypertension, anaemia to be characterised, tobacco use and probable dyslipidaemia.",
          "Risks to state up front: very high cardiovascular risk, progression to kidney failure within a few years if untreated, and drug toxicity from metformin and glimepiride at this eGFR.",
        ],
      },
    ],
    summaryStatement:
      "A 56-year-old male bidi smoker with 14 years of type 2 diabetes complicated by retinopathy and neuropathy, and 9 years of poorly controlled hypertension, presents with six weeks of pitting pedal oedema and a year of frothy urine; he has a creatinine of 2.4 mg/dL (CKD-EPI eGFR about 30 mL/min/1.73 m2) and a urine ACR of 900 mg/g, consistent with chronic kidney disease G3b/G4 A3, most probably diabetic kidney disease, with recent NSAID exposure as a reversible contributor.",
    differential: [
      {
        diagnosis: "Diabetic kidney disease",
        forIt: "Long duration of diabetes, coexisting retinopathy and neuropathy, heavy albuminuria without haematuria, and a gradual course.",
        againstIt: "Absence of a documented creatinine trend; retinopathy is supportive but does not exclude a second renal disease.",
      },
      {
        diagnosis: "Hypertensive nephrosclerosis",
        forIt: "Nine years of uncontrolled hypertension and a family history of vascular disease.",
        againstIt: "Albuminuria of 900 mg/g is heavier than nephrosclerosis usually produces, and retinopathy points to diabetes.",
      },
      {
        diagnosis: "Non-diabetic glomerular disease (for example membranous nephropathy or IgA nephropathy)",
        forIt: "Nephrotic-range proteinuria with oedema can occur in any glomerular disease, and the brother on dialysis hints at familial disease.",
        againstIt: "No haematuria, no active sediment, no rapid decline and no systemic features; a biopsy is considered only if the sediment is active, the decline is rapid, or retinopathy were absent.",
      },
    ],
    investigations: [
      {
        test: "Repeat serum creatinine with CKD-EPI eGFR, plus urea and electrolytes",
        why: "Confirms chronicity (a value more than three months apart), fixes the G stage and screens for hyperkalaemia before starting a RAS blocker.",
        expected: "Creatinine around 2.4 mg/dL, eGFR about 30 mL/min/1.73 m2, potassium below 5.0 mmol/L, bicarbonate possibly low.",
      },
      {
        test: "Urine albumin-creatinine ratio on a first-morning sample, repeated once, with urine microscopy",
        why: "Confirms the A category on two of three samples and looks for red cell casts or dysmorphic red cells that would suggest a non-diabetic glomerulonephritis.",
        expected: "ACR persistently above 300 mg/g (A3); bland sediment with no haematuria in diabetic kidney disease.",
      },
      {
        test: "Ultrasound of the kidneys, ureters and bladder",
        why: "Excludes obstruction, measures kidney size and cortical echogenicity, and looks for cysts or asymmetry.",
        expected: "Normal or slightly enlarged kidneys with increased echogenicity in diabetic disease; small shrunken kidneys confirm chronicity; no hydronephrosis.",
      },
      {
        test: "HbA1c, fasting lipid profile and complete blood count",
        why: "Sets glycaemic and lipid targets and characterises the anaemia of CKD before considering iron or erythropoietin.",
        expected: "HbA1c about 9 percent, LDL raised, haemoglobin 10 to 11 g/dL with normocytic indices.",
      },
      {
        test: "Serum calcium, phosphate, intact PTH and 25-hydroxy vitamin D",
        why: "Mineral bone disease begins at G3 and is silent; baseline values guide phosphate restriction and vitamin D replacement.",
        expected: "Phosphate high-normal, calcium normal, PTH mildly raised, vitamin D low.",
      },
      {
        test: "ECG and, if available, echocardiography",
        why: "Cardiovascular disease is the commonest cause of death in CKD and left ventricular hypertrophy is a marker of long-standing hypertension.",
        expected: "Voltage criteria for LVH; echocardiography showing concentric LVH with preserved ejection fraction.",
      },
    ],
    management: [
      {
        heading: "Stop the damage and correct the reversible",
        points: [
          "Stop diclofenac permanently; use paracetamol or topical agents for the knee.",
          "Sick-day rules: hold metformin, SGLT2 inhibitor, ACE inhibitor or ARB and diuretic during vomiting, diarrhoea or fever, and restart when eating and drinking normally.",
          "Avoid iodinated contrast and aminoglycosides unless unavoidable, and warn every prescriber that he has CKD.",
          "Advise stopping bidis and give brief advice plus nicotine replacement; restrict salt to under 5 g a day.",
        ],
      },
      {
        heading: "Slow progression - the four pillars",
        points: [
          "Start an ARB (telmisartan 40 mg daily, titrated to 80 mg) or ACE inhibitor (ramipril 5 mg, titrated to 10 mg); recheck creatinine and potassium within one to two weeks and accept a creatinine rise of up to 30 percent.",
          "Add an SGLT2 inhibitor (dapagliflozin 10 mg or empagliflozin 10 mg daily), which is licensed down to an eGFR of 20 mL/min/1.73 m2 and slows decline independent of glucose lowering.",
          "Target blood pressure below 130/80 mmHg (KDIGO 2021 suggests systolic below 120 mmHg where tolerated); add chlorthalidone 12.5 mg or a loop diuretic for the oedema, keeping amlodipine.",
          "Consider finerenone 10 mg daily once potassium is below 4.8 mmol/L and eGFR is above 25 mL/min/1.73 m2, and add a statin (atorvastatin 20 mg) for cardiovascular protection regardless of LDL.",
        ],
      },
      {
        heading: "Diabetes control and renal dose adjustment",
        points: [
          "Metformin: reduce to a maximum of 1000 mg per day at eGFR 30 to 45 and stop below 30 mL/min/1.73 m2, so at an eGFR of 30 it should be stopped or held pending the repeat value.",
          "Stop glimepiride because sulfonylureas cause prolonged hypoglycaemia in CKD; replace with a DPP-4 inhibitor (linagliptin 5 mg needs no adjustment) or basal insulin, with an HbA1c target of about 7 to 7.5 percent.",
          "Other adjustments to remember: reduce doses of gabapentin, pregabalin, most cephalosporins, fluoroquinolones and enoxaparin; avoid nitrofurantoin, pethidine and magnesium- or aluminium-containing antacids.",
          "Check the eGFR band before every new prescription and document it on the prescription itself.",
        ],
      },
      {
        heading: "Complications, follow-up and referral",
        points: [
          "Treat anaemia with iron first (oral or IV) and refer for erythropoietin when haemoglobin is below 10 g/dL after iron repletion; give oral bicarbonate if serum bicarbonate is below 22 mmol/L.",
          "Vaccinate against hepatitis B (double dose schedule), influenza yearly and pneumococcus; check for hepatitis B and C serology early since dialysis planning may follow.",
          "Review three-monthly with creatinine, potassium, ACR, blood pressure, weight and drug list; plot the eGFR to detect a fall of more than 5 mL/min/1.73 m2 per year.",
          "Refer to nephrology now because eGFR is below 30 and ACR above 300 mg/g; other triggers are an eGFR fall of more than 25 percent or more than 5 per year, persistent haematuria, refractory hypertension on four drugs, potassium above 5.5 mmol/L or an unclear cause.",
        ],
      },
    ],
    viva: [
      {
        q: "How do you calculate and interpret eGFR in this patient?",
        a: "Use the CKD-EPI 2021 creatinine equation, which no longer includes a race coefficient; for a creatinine of 2.4 mg/dL in a 56-year-old man it gives about 30 mL/min/1.73 m2. This is G3b/G4, and staging is confirmed only when two values three months apart are below 60.",
      },
      {
        q: "What are the KDIGO G and A categories?",
        a: "G1 is 90 or above, G2 60 to 89, G3a 45 to 59, G3b 30 to 44, G4 15 to 29 and G5 below 15 mL/min/1.73 m2; A1 is ACR below 30 mg/g, A2 30 to 300 and A3 above 300 mg/g. Risk of progression and cardiovascular death rises across both axes, so a G3b A3 patient is in the red zone.",
      },
      {
        q: "Why start an ARB when the creatinine is already raised?",
        a: "RAS blockade lowers intraglomerular pressure and albuminuria and slows progression in diabetic kidney disease with A3 albuminuria; the initial creatinine rise of up to 30 percent is haemodynamic and expected. Stop only if the rise exceeds 30 percent, potassium is above 5.5 mmol/L or there is symptomatic hypotension, and consider renal artery stenosis in that case.",
      },
      {
        q: "What is the role of SGLT2 inhibitors in CKD?",
        a: "DAPA-CKD and EMPA-KIDNEY showed that dapagliflozin and empagliflozin reduce the composite of sustained eGFR decline, kidney failure and cardiovascular or renal death by about 30 to 40 percent, in diabetic and non-diabetic CKD, and are recommended by KDIGO 2024 for eGFR 20 or above with albuminuria. Counsel about genital mycotic infection, volume depletion and the sick-day rule.",
      },
      {
        q: "When would you consider a renal biopsy in a diabetic?",
        a: "When the picture does not fit diabetic nephropathy: absent retinopathy with heavy proteinuria, active urinary sediment with dysmorphic red cells or casts, rapid decline in eGFR, sudden-onset nephrotic syndrome, or features of a systemic disease. In this patient retinopathy and a bland sediment make biopsy unnecessary.",
      },
      {
        q: "What would you tell him about dialysis and transplant?",
        a: "At an eGFR around 30 he needs education, not dialysis; planning for renal replacement begins at G4 with vein preservation in the non-dominant arm, hepatitis B vaccination and discussion of pre-emptive living-donor transplant. The Pradhan Mantri National Dialysis Programme provides free haemodialysis at district hospitals, which he should know about early.",
      },
    ],
    pitfalls: [
      "Staging CKD from a single creatinine value: chronicity needs two readings more than three months apart, or supporting evidence such as small kidneys.",
      "Continuing metformin, sulfonylureas and NSAIDs unchanged at an eGFR of 30; renal dose review is the most commonly missed management point.",
      "Withholding an ACE inhibitor or ARB because the creatinine is raised, or stopping it for a haemodynamic rise under 30 percent.",
      "Forgetting that cardiovascular disease, not dialysis, is the most likely cause of death - a statin, smoking cessation and blood pressure control carry as many marks as the renal drugs.",
    ],
    references: [
      "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease, Kidney International Supplements 2024",
      "KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease",
      "KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease",
      "Indian Society of Nephrology and RSSDI consensus on diabetic kidney disease, Indian Journal of Nephrology, 2020",
      "ICMR Guidelines for Management of Type 2 Diabetes, 2018, chapter on diabetic nephropathy",
      "Pradhan Mantri National Dialysis Programme guidelines, National Health Mission, MoHFW, 2016",
    ],
  },
  {
    id: "renal-urology-case-2",
    title: "Viva: 68-year-old man with nocturia and a poor stream",
    kind: "viva",
    subjectId: "renal-urology",
    opening:
      "A 68-year-old man attends with nocturia three times a night, a weak stream, hesitancy and a sense of incomplete emptying for eight months, with no haematuria or dysuria.",
    minutes: 15,
    frequency: "core",
    sections: [
      {
        heading: "Assessing lower urinary tract symptoms",
        points: [
          "Separate storage symptoms (frequency, urgency, nocturia, urge incontinence) from voiding symptoms (hesitancy, weak stream, straining, intermittency, terminal dribbling) and post-micturition symptoms (incomplete emptying, post-void dribble).",
          "Ask about red flags: visible haematuria, dysuria with fever, bone pain, weight loss, new back pain or neurological symptoms, and any episode of retention.",
          "Review drugs that worsen LUTS - anticholinergics, decongestants, tricyclics, diuretics taken at night - and fluid, caffeine and alcohol intake in the evening.",
          "Screen for diabetes, heart failure and sleep apnoea as causes of nocturia, and ask the patient to keep a three-day frequency-volume chart, which distinguishes nocturnal polyuria from a small bladder capacity.",
        ],
      },
      {
        heading: "The International Prostate Symptom Score",
        points: [
          "The IPSS has seven symptom questions (incomplete emptying, frequency, intermittency, urgency, weak stream, straining, nocturia), each scored 0 to 5, giving a total of 0 to 35.",
          "A score of 0 to 7 is mild, 8 to 19 moderate and 20 to 35 severe; an eighth quality-of-life question scored 0 to 6 decides whether the patient wants treatment at all.",
          "The score does not diagnose the cause; it grades bother and tracks the response to treatment, and a fall of 3 points or more is clinically meaningful.",
          "Repeat the IPSS at each review and record it in the notes - examiners look for it as evidence of structured follow-up.",
        ],
      },
      {
        heading: "Examination including digital rectal examination",
        points: [
          "General examination for anaemia, a palpable bladder above the pubis and lower-limb neurology; examine the external genitalia for meatal stenosis and phimosis.",
          "Explain the DRE, obtain consent and offer a chaperone; the patient lies in the left lateral position with knees drawn up.",
          "A benign prostate is smooth, symmetrical, firm-elastic like the tip of the nose, with a palpable median sulcus and a rectal mucosa that moves freely over it; estimate size in fingerbreadths or grams.",
          "Hard, nodular, asymmetrical or fixed glands with loss of the median sulcus suggest carcinoma; also assess anal tone and note tenderness, which suggests prostatitis.",
        ],
      },
      {
        heading: "The PSA debate",
        points: [
          "PSA is organ-specific but not cancer-specific: it rises with benign enlargement, prostatitis, retention, catheterisation, ejaculation and cycling, so test only after these have been excluded or allowed to settle for a few weeks.",
          "Screening asymptomatic men reduces prostate cancer mortality only modestly and leads to over-diagnosis and over-treatment; guidelines therefore recommend shared decision-making for men aged 55 to 69 rather than routine screening, and no screening above 70 or with a life expectancy under 10 years.",
          "In a symptomatic man, PSA is reasonable if the result would change management, for example an abnormal DRE, a family history, or when 5-alpha-reductase inhibitor treatment is planned (which halves the PSA after six months, so the measured value must be doubled).",
          "Age-adjusted upper limits are roughly 2.5 ng/mL at 40 to 49, 3.5 at 50 to 59, 4.5 at 60 to 69 and 6.5 at 70 to 79; a value above 4 ng/mL or a rise of more than 0.75 ng/mL per year warrants urology referral for MRI and biopsy.",
        ],
      },
      {
        heading: "Basic investigations",
        points: [
          "Urinalysis and urine culture to exclude infection and haematuria; serum creatinine to detect obstructive nephropathy; blood glucose for diabetes.",
          "Ultrasound of the kidneys, ureters, bladder and prostate with post-void residual volume: a residual above 100 to 200 mL indicates poor emptying, and hydronephrosis indicates high-pressure retention.",
          "Uroflowmetry, where available, with a maximum flow rate below 10 mL/s suggesting obstruction; a voided volume of at least 150 mL is needed for the reading to be valid.",
          "Cystoscopy and urodynamics are urology tools reserved for haematuria, suspected stricture or when the picture is unclear.",
        ],
      },
    ],
    summaryStatement:
      "A 68-year-old man with eight months of moderate-to-severe voiding and storage lower urinary tract symptoms, a smooth symmetrically enlarged prostate on digital rectal examination and no red flags, consistent with benign prostatic hyperplasia causing bladder outlet obstruction.",
    differential: [
      {
        diagnosis: "Benign prostatic hyperplasia",
        forIt: "Age, gradual onset of mixed voiding and storage symptoms, smooth symmetrically enlarged gland with preserved median sulcus.",
        againstIt: "A hard nodular gland, rapid progression or raised age-adjusted PSA would point elsewhere.",
      },
      {
        diagnosis: "Carcinoma of the prostate",
        forIt: "Age over 65; can present with identical LUTS and is often silent until locally advanced.",
        againstIt: "Smooth gland with median sulcus, no bone pain, no weight loss, no haematospermia; PSA within the age-adjusted range would make it unlikely but not impossible.",
      },
      {
        diagnosis: "Overactive bladder or nocturnal polyuria",
        forIt: "Nocturia and frequency dominate in many older men and coexist with BPH.",
        againstIt: "The weak stream, hesitancy and incomplete emptying are voiding symptoms that point to outlet obstruction; a frequency-volume chart showing more than 33 percent of urine output at night would suggest nocturnal polyuria instead.",
      },
    ],
    investigations: [
      {
        test: "Urine routine and microscopy with culture",
        why: "Excludes infection and microscopic haematuria, either of which changes the pathway.",
        expected: "Normal; any haematuria triggers urology referral for cystoscopy.",
      },
      {
        test: "Serum creatinine and blood glucose",
        why: "Detects obstructive nephropathy and diabetes as a cause of polyuria and nocturia.",
        expected: "Creatinine normal; a raised value with a large residual means high-pressure chronic retention.",
      },
      {
        test: "PSA, after shared decision-making and a DRE-free, infection-free interval",
        why: "Estimates cancer risk and prostate volume; a PSA above 1.5 ng/mL predicts a gland over 30 mL and a higher risk of progression.",
        expected: "Below the age-adjusted limit of about 4.5 ng/mL for his age.",
      },
      {
        test: "Ultrasound KUB and prostate with post-void residual",
        why: "Measures prostate volume, bladder wall thickness, residual urine and upper tract dilatation.",
        expected: "Prostate 40 to 60 mL, residual below 100 mL, no hydronephrosis.",
      },
      {
        test: "Uroflowmetry",
        why: "Objective measure of obstruction and a baseline to judge treatment response.",
        expected: "Maximum flow rate below 10 mL/s on a voided volume above 150 mL.",
      },
    ],
    management: [
      {
        heading: "Conservative measures for mild symptoms or low bother",
        points: [
          "Reduce evening fluids, caffeine and alcohol; empty the bladder before bed; double voiding for incomplete emptying.",
          "Stop or shift to the morning any diuretic, and review anticholinergic and decongestant use.",
          "Bladder training for storage symptoms and a frequency-volume chart to guide advice; review in three to six months with a repeat IPSS.",
        ],
      },
      {
        heading: "Alpha-blocker for moderate to severe bother",
        points: [
          "Tamsulosin 0.4 mg once daily after dinner is the first-line drug; alternatives are silodosin 8 mg daily or alfuzosin 10 mg daily; symptom relief appears within days and the IPSS falls by 4 to 6 points.",
          "Warn about postural dizziness, retrograde ejaculation and nasal congestion; tell the patient to inform the ophthalmologist before cataract surgery because of intraoperative floppy iris syndrome.",
          "Alpha-blockers relieve symptoms but do not shrink the gland or reduce the long-term risk of retention or surgery.",
        ],
      },
      {
        heading: "5-alpha-reductase inhibitor for larger glands",
        points: [
          "Finasteride 5 mg daily or dutasteride 0.5 mg daily when the prostate is above 30 to 40 mL or PSA is above 1.5 ng/mL; they shrink the gland by 20 to 25 percent over six months and reduce the risk of retention and surgery by about half.",
          "Combination therapy with an alpha-blocker is superior to either alone for men with large glands (MTOPS and CombAT trials); the alpha-blocker may be withdrawn after six to nine months in some patients.",
          "Counsel about reduced libido, erectile dysfunction, gynaecomastia and the halving of PSA; women who are or may become pregnant must not handle crushed tablets.",
          "Add an antimuscarinic (solifenacin 5 mg) or mirabegron 25 to 50 mg for persistent storage symptoms once the residual volume is confirmed to be low; tadalafil 5 mg daily is an option when erectile dysfunction coexists.",
        ],
      },
      {
        heading: "Referral to urology and acute retention first aid",
        points: [
          "Refer for: acute or chronic retention, recurrent infection, haematuria, bladder stones, renal impairment or hydronephrosis from obstruction, abnormal DRE or PSA, residual above 200 mL, and failure of or intolerance to medical therapy; surgical options are TURP, HoLEP and minimally invasive procedures.",
          "Acute urinary retention: confirm a painful palpable bladder, pass a 14 to 16 Fr Foley catheter under aseptic technique with adequate lubricant, and record the drained volume; if the catheter will not pass, do not force it - refer for suprapubic catheterisation.",
          "Start tamsulosin 0.4 mg immediately, treat infection and constipation, stop precipitating drugs, monitor for post-obstructive diuresis if more than 1 L drains or creatinine is raised, and arrange a trial without catheter after two to three days on the alpha-blocker; failure of the trial is a surgical referral.",
        ],
      },
    ],
    viva: [
      {
        q: "What is the IPSS and how do you use it?",
        a: "A validated seven-question symptom score, each item 0 to 5, total 0 to 35, graded mild (0 to 7), moderate (8 to 19) and severe (20 to 35), with a separate quality-of-life question. It quantifies bother, guides whether to treat and tracks response; it does not diagnose the cause.",
      },
      {
        q: "Describe the findings of a benign versus malignant prostate on DRE.",
        a: "Benign: smooth, symmetrical, firm-elastic, with a preserved median sulcus and mobile rectal mucosa. Malignant: hard, nodular, asymmetrical, with obliteration of the sulcus and possible fixation or extension to the seminal vesicles. DRE detects only posterior and lateral lesions and has a sensitivity of about 50 percent.",
      },
      {
        q: "Should this man have a PSA test?",
        a: "He is symptomatic, so PSA is part of evaluation rather than screening, provided he understands that a raised value leads to MRI and possibly biopsy, and that a normal value does not exclude cancer. It is drawn before DRE-related manipulation settles and before a 5-alpha-reductase inhibitor is started; screening of asymptomatic men is a shared decision only between 55 and 69 years.",
      },
      {
        q: "How do alpha-blockers and 5-alpha-reductase inhibitors differ?",
        a: "Alpha-blockers relax smooth muscle at the bladder neck and prostate, work within days, and improve symptoms and flow but not gland size or long-term progression. 5-alpha-reductase inhibitors block conversion of testosterone to dihydrotestosterone, shrink the gland over six months, halve the PSA, and reduce the risk of retention and surgery; they are useful only in glands above 30 to 40 mL.",
      },
      {
        q: "A man with BPH presents at your clinic unable to pass urine for 12 hours with a painful suprapubic mass. What do you do?",
        a: "Confirm retention clinically, catheterise with a 14 to 16 Fr Foley under aseptic technique, record the volume, send urine for culture, check creatinine and electrolytes, start tamsulosin, treat constipation or infection, stop precipitating drugs and watch urine output for post-obstructive diuresis. Arrange a trial without catheter in two to three days and refer if it fails, if the volume is over 1 L or if creatinine is raised.",
      },
      {
        q: "What are the indications for urology referral in BPH?",
        a: "Retention, recurrent urinary infection, haematuria, bladder stones, renal impairment or hydronephrosis, suspicious DRE or raised PSA, residual over 200 mL, and failure of or intolerance to medical therapy. These are the situations where surgery or further evaluation such as cystoscopy is needed.",
      },
    ],
    pitfalls: [
      "Ordering a PSA immediately after DRE, during a urinary infection or after catheterisation, and then acting on a falsely raised value.",
      "Prescribing an anticholinergic for frequency without measuring post-void residual, precipitating retention in an obstructed bladder.",
      "Forgetting to double the measured PSA in a man on finasteride or dutasteride, and missing a rising value.",
      "Forcing a catheter that will not pass, or sending a man with chronic high-pressure retention home without checking creatinine and watching for post-obstructive diuresis.",
    ],
    references: [
      "American Urological Association Guideline on Management of Lower Urinary Tract Symptoms attributed to Benign Prostatic Hyperplasia, 2021, amended 2023",
      "European Association of Urology Guidelines on Management of Non-neurogenic Male LUTS, 2024",
      "Urological Society of India guidelines on BPH management, Indian Journal of Urology, 2019",
      "US Preventive Services Task Force recommendation statement on screening for prostate cancer, JAMA 2018",
      "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease, for obstructive nephropathy assessment",
      "Bailey and Love's Short Practice of Surgery, 28th edition, 2023 - the prostate and seminal vesicles",
    ],
  },
];

const subject: Subject = {
  id: "renal-urology",
  title: "Renal & Urology",
  blurb: "Chronic kidney disease, acute kidney injury, stones, prostate disease and electrolyte trouble.",
  icon: "Droplets",
  papers: ["II", "III"],
  topics,
  cases,
};

export default subject;
