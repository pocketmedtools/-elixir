/**
 * Diagrams for renal-urology, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "renal-urology-chronic-kidney-disease": [
    {
      kind: "flow",
      heading: "Confirming and staging chronic kidney disease",
      caption:
        "CKD is an abnormality of kidney structure or function present for more than 3 months, with implications for health - either an eGFR below 60 mL/min/1.73 m2 or a marker of kidney damage.",
      steps: [
        {
          label: "Prove the abnormality is chronic",
          detail:
            "More than 3 months. One abnormal creatinine is never CKD - repeat it at 3 months, and do not label the patient before that unless old records prove chronicity",
          tone: "warn",
        },
        {
          label: "Compute eGFR by CKD-EPI 2021",
          detail:
            "MDRD underestimates above 60 mL/min/1.73 m2 and is being retired, though many Indian laboratory reports still print it; Cockcroft-Gault in mL/min is the separate number used for drug dosing",
        },
        {
          label: "Assign the G category",
          detail:
            "G1 90 or more, G2 60-89, G3a 45-59, G3b 30-44, G4 15-29, G5 under 15; G1 and G2 are CKD only if a damage marker is present",
        },
        {
          label: "Assign the A category on first-morning ACR",
          detail:
            "A1 under 30 mg/g, A2 30-300 mg/g, A3 above 300 mg/g; confirm on 2 of 3 first-morning specimens over 3-6 months, and never screen with a dipstick alone because it misses A2 entirely",
          tone: "decision",
        },
        {
          label: "Name the cause; find reversible insults",
          detail:
            "Diabetic kidney disease is the commonest cause in India at about 31%, then CKD of undetermined aetiology, hypertensive and vascular disease and chronic glomerulonephritis; exclude obstruction, nephrotoxins and AKI on CKD",
        },
        {
          label: "Judge the rate of progression",
          detail:
            "A sustained fall of 5 mL/min/1.73 m2 per year or more, or a drop in G category with a 25% or greater fall from baseline, is rapid progression",
          tone: "decision",
        },
        {
          label: "Refer to nephrology on the stated triggers",
          detail:
            "eGFR below 30; ACR above 300 mg/g or protein above 500 mg/day; persistent unexplained haematuria with dysmorphic cells or red cell casts; rapid progression; hypertension resistant to four drugs; persistent hyperkalaemia or refractory acidosis; any AKI on CKD",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "The four pillars of kidney protection",
      caption:
        "Built up in order on top of one another, not chosen between. Add a statin for everyone with CKD aged 50 or more, protein about 0.8 g/kg/day, HbA1c 6.5-8.0% individualised, and complete tobacco cessation.",
      steps: [
        {
          label: "Pillar 1 - blood pressure and salt",
          detail:
            "KDIGO 2021 standardised office systolic below 120 mmHg; where standardised measurement is not possible the practical Indian target is below 130/80 mmHg. Sodium under 2 g/day, which is under 5 g of salt",
        },
        {
          label: "Pillar 2 - RAS blockade, max tolerated dose",
          detail:
            "Telmisartan 40-80 mg OD, enalapril 5-20 mg BD or ramipril 2.5-10 mg OD in CKD with hypertension and ACR 30 mg/g or more. Creatinine and potassium at 2-4 weeks: a rise of up to 30% is expected and the drug continues. Never combine an ACE inhibitor with an ARB",
        },
        {
          label: "Pillar 3 - SGLT2 inhibition",
          detail:
            "Dapagliflozin 10 mg PO OD or empagliflozin 10 mg PO OD at eGFR 20 or more with ACR 200 mg/g or more, or with heart failure, or in type 2 diabetes with CKD. An initial eGFR dip of up to 30% is haemodynamic and reversible and is not a reason to stop",
        },
        {
          label: "Pillar 4 - non-steroidal MRA",
          detail:
            "Finerenone 10 mg PO OD at eGFR 25-59, or 20 mg OD at eGFR 60 or more, in type 2 diabetes with ACR 30 mg/g or more and serum potassium 5.0 mmol/L or less. Recheck potassium at 4 weeks and after every dose change",
          tone: "decision",
        },
        {
          label: "Add-ons that also count",
          detail:
            "A GLP-1 receptor agonist in type 2 diabetes with CKD; sodium bicarbonate 500-1000 mg PO TDS to keep serum bicarbonate at 22 mmol/L or more; hepatitis B at double dose 40 micrograms at 0, 1, 2 and 6 months while eGFR is still above 30",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Anaemia of CKD: iron before any stimulating agent",
      caption:
        "Normocytic normochromic anaemia from erythropoietin deficiency and functional iron deficiency. Investigate when Hb is below 12 g/dL in women or 13 g/dL in men.",
      steps: [
        {
          label: "Exclude the other causes first",
          detail: "Blood loss, B12 and folate deficiency, and hypothyroidism",
        },
        {
          label: "Measure ferritin and transferrin saturation",
          detail:
            "Iron deficiency is the commonest cause of resistance to an erythropoiesis-stimulating agent",
        },
        {
          label: "Replete iron before any ESA",
          detail:
            "Target transferrin saturation above 30% and ferritin 200-500 ng/mL, usually with intravenous iron sucrose or ferric carboxymaltose because oral iron absorbs poorly in uraemia",
          tone: "warn",
        },
        {
          label: "Start an ESA only if Hb is below 10 g/dL",
          detail:
            "Epoetin alfa 50-100 units/kg subcutaneously thrice weekly, or darbepoetin weekly to fortnightly",
          tone: "decision",
        },
        {
          label: "Target Hb 10-11.5 g/dL",
          detail:
            "Never above 13 g/dL - CHOIR, CREATE and TREAT showed excess stroke, vascular access thrombosis and death at higher targets",
          tone: "good",
        },
        {
          label: "Reserve transfusion for severe symptoms",
          detail:
            "It causes allosensitisation in a potential transplant recipient",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Diabetic kidney disease against CKD of undetermined aetiology",
      caption:
        "The Uddanam picture from the coastal Andhra Pradesh belt is the commonest non-diabetic label in the Indian registry and is regularly mislabelled as diabetic kidney disease.",
      columns: [
        "Feature",
        "Diabetic kidney disease",
        "CKD of undetermined aetiology",
      ],
      rows: [
        [
          "Typical patient",
          "Diabetes of more than 10 years' duration",
          "Young agricultural labourer from the Uddanam belt",
        ],
        [
          "Albuminuria",
          "Gradual progression to heavy albuminuria",
          "Minimal - ACR may be only about 22 mg/g",
        ],
        ["Urinary sediment", "Bland", "Bland"],
        [
          "Retinopathy",
          "Present in the great majority with diabetic glomerulosclerosis",
          "Absent",
        ],
        ["Blood pressure", "Usually raised", "Often normal"],
        [
          "Kidneys on ultrasound",
          "Size preserved",
          "Small and echogenic",
        ],
        [
          "Mechanism",
          "Glomerular disease of long-standing diabetes",
          "Tubulointerstitial disease linked to heat stress, recurrent dehydration and agrochemical exposure",
        ],
      ],
    },
  ],

  "renal-urology-acute-kidney-injury": [
    {
      kind: "ladder",
      heading: "KDIGO staging of acute kidney injury",
      caption:
        "Stage on whichever criterion - creatinine or urine output - gives the higher stage. A patient making 15 mL/h with a creatinine of only 1.4 mg/dL is still stage 3 once the oliguria has lasted a day.",
      steps: [
        {
          label: "Stage 1",
          detail:
            "Creatinine 1.5-1.9 times baseline, or an absolute rise of 0.3 mg/dL or more within 48 hours; or urine output below 0.5 mL/kg/h for 6-12 hours",
        },
        {
          label: "Stage 2",
          detail:
            "Creatinine 2.0-2.9 times baseline; or urine output below 0.5 mL/kg/h for 12 hours or more",
        },
        {
          label: "Stage 3",
          detail:
            "Creatinine 3.0 times baseline or more, or a rise to 4.0 mg/dL or more, or initiation of renal replacement therapy, or eGFR below 35 mL/min/1.73 m2 if aged under 18; or urine output below 0.3 mL/kg/h for 24 hours or more, or anuria for 12 hours or more",
          tone: "warn",
        },
        {
          label: "Acute kidney disease",
          detail:
            "Damage or a GFR under 60 mL/min/1.73 m2 lasting 7 to 90 days; beyond 90 days it is chronic kidney disease. This is why every survivor needs a creatinine and an ACR at 3 months",
        },
      ],
    },
    {
      kind: "branch",
      heading: "The three causes of acute kidney injury",
      caption:
        "Where no baseline creatinine exists, back-calculate an assumed baseline from an eGFR of 75 mL/min/1.73 m2, or take the lowest creatinine of the admission, and state the assumption in the answer book.",
      root: "Acute kidney injury",
      arms: [
        {
          label: "Prerenal, about 40-55%",
          steps: [
            "Hypoperfusion of a structurally normal kidney",
            "Vomiting and diarrhoea - the commonest cause in Indian primary care",
            "Haemorrhage, burns, sepsis, over-diuresis",
            "Heart failure, and cirrhosis with ascites",
            "The triple whammy: an NSAID constricting the afferent arteriole, an ACE inhibitor or ARB dilating the efferent one, plus a diuretic",
          ],
        },
        {
          label: "Intrinsic renal, about 35-45%",
          steps: [
            "Acute tubular necrosis from prolonged ischaemia or nephrotoxins",
            "Acute interstitial nephritis from drugs",
            "Acute glomerulonephritis",
            "Vascular - thrombotic microangiopathy, atheroembolism, renal artery occlusion",
          ],
        },
        {
          label: "Postrenal, about 5-10%",
          tone: "warn",
          steps: [
            "Bladder outlet obstruction from benign prostatic hyperplasia or a blocked catheter",
            "Bilateral ureteric stones, or a stone in a single functioning kidney",
            "Retroperitoneal fibrosis and pelvic malignancy",
            "Must be excluded by ultrasound in every case - it is the one cause a catheter or a nephrostomy cures",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Prerenal azotaemia against acute tubular necrosis",
      caption:
        "The fractional excretion of sodium is invalid after a diuretic; use the fractional excretion of urea instead.",
      columns: ["Parameter", "Prerenal azotaemia", "Acute tubular necrosis"],
      rows: [
        [
          "Urine sediment",
          "Bland, or hyaline casts",
          "Muddy brown granular casts, tubular epithelial cells",
        ],
        ["Urine sodium", "Below 20 mmol/L", "Above 40 mmol/L"],
        ["Fractional excretion of sodium", "Below 1%", "Above 2%"],
        [
          "Fractional excretion of urea, if on diuretics",
          "Below 35%",
          "Above 50%",
        ],
        ["Urine osmolality", "Above 500 mOsm/kg", "Below 350 mOsm/kg"],
        ["Urine specific gravity", "Above 1.020", "About 1.010, isosthenuric"],
        ["BUN to creatinine ratio", "Above 20 to 1", "About 10 to 15 to 1"],
        [
          "Response to fluid challenge",
          "Creatinine falls within 24-72 hours",
          "No improvement",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Acute kidney injury in the first hours",
      caption:
        "Creatinine lags the true GFR by a day or two in evolving injury, so a reassuring creatinine in an anuric patient is a trap.",
      steps: [
        {
          label: "Exclude obstruction before anything else",
          detail:
            "Examine for a palpable bladder and get an ultrasound in every case; bilateral hydronephrosis or a palpable bladder with anuria means a catheter now and urgent urology review or nephrostomy",
          tone: "warn",
        },
        {
          label: "Resuscitate with balanced crystalloid",
          detail:
            "Ringer's lactate or Plasma-Lyte in 250-500 mL boluses with clinical reassessment after each, never a blind litre an hour; stop when the jugular venous pressure rises or the bases become wet. Hydroxyethyl starch is contraindicated",
        },
        {
          label: "Stop and list every nephrotoxin",
          detail:
            "NSAIDs, aminoglycosides, ACE inhibitors and ARBs, SGLT2 inhibitors, metformin, diuretics and every herbal preparation. Metformin restarts only when eGFR is stable above 30 mL/min/1.73 m2",
        },
        {
          label: "Treat hyperkalaemia the moment it appears",
          detail:
            "Potassium above 6.0 mmol/L or any ECG change: calcium gluconate 10 mL of 10% IV over 2-3 minutes, insulin 10 units with 25 g dextrose, salbutamol 10-20 mg nebulised, bicarbonate only if acidotic, a binder for the gut",
          tone: "warn",
        },
        {
          label: "Feed the patient, do not starve them",
          detail:
            "20-30 kcal/kg/day with 0.8-1.0 g/kg/day of protein, rising to 1.0-1.5 g/kg/day on renal replacement therapy. Do not restrict protein in order to postpone dialysis - it postpones nothing",
        },
        {
          label: "Decide dialysis on AEIOU, not on a number",
          detail:
            "Refractory Acidosis, Electrolyte derangement, Intoxication with a dialysable poison, refractory fluid Overload with pulmonary oedema, Uraemia with pericarditis, encephalopathy, seizures or intractable vomiting",
          tone: "decision",
        },
        {
          label: "Follow up every survivor at 3 months",
          detail:
            "Creatinine and urine ACR at 3 months, the episode recorded prominently in the case file, a permanent no-NSAID instruction, and held drugs restarted deliberately one at a time",
          tone: "good",
        },
      ],
    },
  ],

  "renal-urology-urinary-tract-infection": [
    {
      kind: "flow",
      heading: "Uncomplicated cystitis in a non-pregnant woman",
      caption:
        "Uncomplicated means a structurally and functionally normal urinary tract. Male sex, pregnancy, obstruction or stones, a catheter or recent instrumentation, neurogenic bladder, poorly controlled diabetes, immunosuppression and transplantation are all complicated.",
      steps: [
        {
          label: "Dysuria and frequency, no vaginal discharge",
          detail:
            "The probability of UTI exceeds 90%, so empirical treatment without a culture is legitimate for a first typical episode",
          tone: "decision",
        },
        {
          label: "Check there is no fever and no flank pain",
          detail:
            "Fever or flank pain converts cystitis into pyelonephritis and changes both the drug and the duration",
        },
        {
          label: "Nitrofurantoin 100 mg PO BD for 5 days",
          detail:
            "Sensitive in about 85-95% of Indian E. coli. Alternatives: fosfomycin trometamol 3 g PO as a single dose, or cefuroxime axetil 250 mg PO BD for 5-7 days",
          tone: "good",
        },
        {
          label: "Not a quinolone, not co-trimoxazole",
          detail:
            "Indian E. coli resistance exceeds 70-80% to fluoroquinolones and runs at 50-60% to co-trimoxazole; the FDA also warns of tendinopathy, neuropathy, aortic dissection and dysglycaemia",
          tone: "warn",
        },
        {
          label: "Fluids 2.5-3 litres a day and paracetamol",
          detail: "Review at 48-72 hours if not improving",
        },
        {
          label: "Still febrile at 72 hours is something else",
          detail:
            "An abscess, obstruction or a resistant organism until proved otherwise - culture and image",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Cystitis against pyelonephritis",
      caption:
        "Significant bacteriuria is 10 to the power 5 CFU/mL in a clean-catch midstream sample, but 10 to the power 3 with typical symptoms in a woman, 10 to the power 4 in pyelonephritis and in men, and any growth from a suprapubic aspirate.",
      columns: ["Feature", "Acute cystitis", "Acute pyelonephritis"],
      rows: [
        [
          "Symptoms",
          "Dysuria, frequency, urgency, suprapubic pain, sometimes haematuria",
          "Fever above 38 degrees C with rigors, flank pain, nausea and vomiting",
        ],
        [
          "Signs",
          "No fever, no systemic upset",
          "Costovertebral angle tenderness, systemic upset",
        ],
        [
          "Culture before treating",
          "Not needed for a first typical episode in a non-pregnant woman",
          "Always",
        ],
        [
          "First choice",
          "Nitrofurantoin 100 mg PO BD",
          "Cefixime 200 mg PO BD after one dose of IV ceftriaxone 1 g",
        ],
        [
          "Duration",
          "5 days, or fosfomycin 3 g as a single dose",
          "10-14 days",
        ],
        [
          "Role of nitrofurantoin",
          "Drug of choice",
          "Useless - it reaches no renal parenchymal or blood concentration",
        ],
        [
          "Imaging",
          "Not required",
          "Ultrasound if no improvement at 72 hours, or with obstruction, stones, a solitary kidney, diabetes, sepsis or a mass",
        ],
        [
          "When to admit",
          "Rarely",
          "Vomiting, sepsis, pregnancy, obstruction or failure of oral therapy - ceftriaxone 1-2 g IV OD, or a carbapenem if ESBL is proven or strongly suspected",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Asymptomatic bacteriuria: treat or leave alone",
      caption:
        "Significant bacteriuria without symptoms. Treating it drives resistance and Clostridioides difficile without preventing anything.",
      root: "Positive culture, no urinary symptoms",
      arms: [
        {
          label: "Screen and treat",
          tone: "good",
          steps: [
            "Pregnancy - screen at the first antenatal visit and treat, because 20-30% otherwise progress to pyelonephritis, with preterm labour and low birth weight",
            "Nitrofurantoin 100 mg PO BD for 5-7 days, avoided at term and in G6PD deficiency; test-of-cure culture at 1-2 weeks and monthly screening thereafter",
            "Before a urological procedure that breaches the mucosa - prevents bacteraemia and sepsis",
          ],
        },
        {
          label: "Do not treat",
          tone: "warn",
          steps: [
            "The elderly, including delirium without urinary symptoms - 15-50% of institutionalised elderly are bacteriuric, and the delirium is usually caused by something else",
            "Indwelling catheter without symptoms - all long-term catheters are colonised",
            "Diabetes without symptoms - randomised trials show no reduction in complications",
            "Renal transplant beyond the first month",
            "Spinal cord injury with neurogenic bladder - colonisation is universal",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Catheter-associated urinary tract infection",
      caption:
        "Cloudy or foul-smelling urine alone is not a CAUTI. Do not culture or treat catheter urine without symptoms, and do not give prophylactic antibiotics for catheter insertion or change.",
      steps: [
        {
          label: "Confirm it is infection, not colonisation",
          detail:
            "Symptoms or signs compatible with UTI with no other identified source, plus 10 to the power 3 CFU/mL or more of one or more bacterial species",
          tone: "decision",
        },
        {
          label: "Replace a catheter in place beyond 2 weeks",
          detail:
            "The biofilm on the old catheter is the reservoir, and its culture reflects colonisation rather than the invading organism. Never irrigate with antiseptic - it does not clear infection, traumatises the urothelium and breaks the closed system",
          tone: "warn",
        },
        {
          label: "Take the culture from the new catheter",
          detail:
            "Never from the drainage bag, which is invariably contaminated by stagnant colonised urine",
        },
        {
          label: "Start empirical antibiotics, then de-escalate",
          detail:
            "Guided by the local antibiogram - ceftriaxone 1 g IV OD pending culture, escalating to a carbapenem in proven ESBL infection",
        },
        {
          label: "Treat 7 days, or 10-14 if slow to respond",
          detail:
            "Asymptomatic candiduria in a catheterised patient usually needs only catheter removal",
        },
        {
          label: "Get rid of the catheter if you can",
          detail:
            "Intermittent clean self-catheterisation or condom drainage are safer long-term alternatives",
          tone: "good",
        },
      ],
    },
  ],

  "renal-urology-luts-bph": [
    {
      kind: "flow",
      heading: "Assessing lower urinary tract symptoms",
      caption:
        "Histological BPH is present in about 50% of men in their sixties and 80-90% by the eighties, but symptoms correlate poorly with prostate size - a 30 g gland with a prominent median lobe can obstruct more than a 90 g one.",
      steps: [
        {
          label: "Score the symptoms with the IPSS",
          detail:
            "0-7 mild, 8-19 moderate, 20-35 severe, with the separate quality of life or bother score",
        },
        {
          label: "Three-day frequency-volume chart",
          detail:
            "Separates true polyuria above 3 litres a day, nocturnal polyuria of more than 33% of the 24-hour output at night, and a genuinely small functional capacity - the cheapest and most informative single investigation",
        },
        {
          label: "Digital rectal examination, never skipped",
          detail:
            "A hard, nodular or asymmetrical gland with a lost median sulcus, or bone pain with LUTS, means carcinoma - refer urgently regardless of the PSA value",
          tone: "warn",
        },
        {
          label: "Urinalysis, creatinine and post-void residual",
          detail:
            "A residual under 50 mL is normal and above 100-150 mL is significant, predicting retention, infection, stones and upper tract dilatation; ultrasound also gives prostate volume, bladder wall thickness, diverticula, stones and hydronephrosis",
        },
        {
          label: "Uroflowmetry on 150 mL or more voided",
          detail:
            "Qmax above 15 mL/s is normal, 10-15 mL/s equivocal and below 10 mL/s suggests obstruction; a flat prolonged plateau curve suggests a urethral stricture rather than prostatic obstruction",
        },
        {
          label: "Offer PSA after counselling, not reflexly",
          detail:
            "Not within 48 hours of ejaculation or a rectal examination, 6 weeks of prostatitis, catheterisation, cystoscopy or biopsy, or during infection. Above 4 ng/mL, an age-specific rise, or a rise above 0.75 ng/mL per year means referral; above 1.5 ng/mL predicts a gland above 30 g",
          tone: "decision",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Managing BPH by IPSS band",
      caption:
        "Review at 4-6 weeks after starting an alpha blocker and 6-monthly thereafter, repeating the IPSS, quality of life score, post-void residual and creatinine; review a 5-alpha reductase inhibitor at 3 and 6 months.",
      steps: [
        {
          label: "IPSS 0-7, or moderate but not bothersome",
          detail:
            "Watchful waiting: restrict evening fluids, caffeine and alcohol, treat constipation, double and timed voiding, review the offending drugs and the diuretic timing; repeat the IPSS at 6-12 months",
        },
        {
          label: "IPSS 8-19 and bothersome - alpha blocker",
          detail:
            "Tamsulosin 0.4 mg PO OD after food, silodosin 8 mg PO OD, alfuzosin 10 mg PO OD, or terazosin 2-10 mg or doxazosin 1-8 mg at night if hypertension coexists. Works in days to 2 weeks, improves IPSS by 4-6 points and Qmax by 2-3 mL/s",
        },
        {
          label: "Gland above 30-40 g or PSA above 1.5 ng/mL",
          detail:
            "Add finasteride 5 mg PO OD or dutasteride 0.5 mg PO OD - the only drugs that shrink the gland and reduce retention and surgery",
          tone: "decision",
        },
        {
          label: "IPSS 20-35 - combination therapy",
          detail:
            "An alpha blocker with a 5-alpha reductase inhibitor, as in MTOPS and CombAT; tadalafil 5 mg PO OD where erectile dysfunction coexists but never with nitrates; add solifenacin 5 mg OD or mirabegron 25-50 mg OD for persistent storage symptoms only while the residual stays below 150 mL",
        },
        {
          label: "Any score with a complication - surgery",
          detail:
            "Refractory retention or a failed trial without catheter, recurrent infection from obstruction, recurrent gross haematuria of prostatic origin, bladder stones, complicated diverticula, or renal impairment or hydronephrosis from bladder outlet obstruction",
          tone: "warn",
        },
        {
          label: "Choose the operation by gland size",
          detail:
            "TUIP for a small gland under 30 g without a median lobe, TURP as the reference standard for 30-80 g, HoLEP or open, laparoscopic or robotic simple prostatectomy above 80 g",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Alpha blocker against 5-alpha reductase inhibitor",
      caption:
        "The single most useful discrimination in the topic: one relieves symptoms this week and changes nothing about the gland, the other takes 6 months and changes the natural history.",
      columns: [
        "Feature",
        "Alpha-1 blocker",
        "5-alpha reductase inhibitor",
      ],
      rows: [
        [
          "Drug and dose",
          "Tamsulosin 0.4 mg PO OD; silodosin 8 mg PO OD; alfuzosin 10 mg PO OD",
          "Finasteride 5 mg PO OD (type 2); dutasteride 0.5 mg PO OD (types 1 and 2)",
        ],
        ["Onset of benefit", "Days to 2 weeks", "3-6 months"],
        [
          "Effect on prostate size",
          "None",
          "Shrinks the gland by 20-30% over 6-12 months",
        ],
        [
          "Effect on retention and surgery",
          "None - symptoms only",
          "Reduces both by about half (MTOPS, CombAT)",
        ],
        [
          "Effect on PSA",
          "None",
          "Halves it after 6-12 months, so double the measured value before interpreting it",
        ],
        [
          "Main adverse effects",
          "Retrograde ejaculation, dizziness, first-dose hypotension with the non-selective agents, intraoperative floppy iris syndrome",
          "Reduced libido, erectile dysfunction, ejaculatory disorder, gynaecomastia",
        ],
        [
          "Who it suits",
          "Any bothersome symptoms, whatever the gland size",
          "Gland above 30-40 g or PSA above 1.5 ng/mL",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Acute urinary retention",
      caption:
        "A painful inability to pass urine with a palpable, percussable bladder. Tell the ophthalmologist about tamsulosin before any cataract surgery - intraoperative floppy iris syndrome persists for months to years after exposure.",
      steps: [
        {
          label: "Catheterise immediately",
          detail:
            "14-16 Fr Foley; record the residual volume, send urine for culture, check creatinine and electrolytes, and give analgesia",
        },
        {
          label: "Do not empty a huge bladder over minutes",
          detail: "Rapid decompression risks haematuria ex vacuo",
          tone: "warn",
        },
        {
          label: "Watch for post-obstructive diuresis",
          detail:
            "Output above 200 mL/h after decompressing chronic retention. Replace half to two-thirds of the output with isotonic or hypotonic fluid and check sodium, potassium and creatinine daily. Never give furosemide - the problem is polyuria with volume depletion, not overload",
          tone: "warn",
        },
        {
          label: "Start tamsulosin 0.4 mg PO OD at once",
          detail:
            "Given at the time of catheterisation, not later",
        },
        {
          label: "Trial without catheter after 2-3 days",
          detail:
            "An alpha blocker raises the success rate from about 25% to 45-50%",
          tone: "decision",
        },
        {
          label: "If the trial fails, plan surgery",
          detail:
            "Leave the catheter, add finasteride 5 mg or dutasteride 0.5 mg PO OD for a large gland, and refer",
        },
      ],
    },
  ],

  "renal-urology-renal-stones": [
    {
      kind: "flow",
      heading: "Acute renal colic",
      caption:
        "Sudden colicky loin-to-groin pain in a patient who cannot lie still, in contrast to peritonitis where the patient lies completely still. Haematuria is present in about 85%, so its absence does not exclude a stone.",
      steps: [
        {
          label: "Exclude the mimics before anything else",
          detail:
            "In a woman of reproductive age, a pregnancy test to exclude ectopic pregnancy; in a man over 50 with a first episode, an expansile abdominal mass or unequal femoral pulses means a leaking aortic aneurysm - image, do not sedate and send home",
          tone: "warn",
        },
        {
          label: "An NSAID first - it beats an opioid",
          detail:
            "Diclofenac 75 mg IM or ketorolac 30 mg IV, provided the eGFR is adequate and there is no peptic ulcer, dehydration or single kidney; it also reduces ureteric wall oedema and filtration pressure. Paracetamol 1 g IV where an NSAID is contraindicated; tramadol 50-100 mg or morphine 0.1 mg/kg second line",
          tone: "good",
        },
        {
          label: "Antiemetic, and fluid only for dehydration",
          detail:
            "Ondansetron 4-8 mg. Do not force intravenous fluids to flush the stone out - high-volume loading raises intrapelvic pressure and pain without improving passage. Hyoscine butylbromide adds nothing to an NSAID",
        },
        {
          label: "Non-contrast CT of the urinary tract",
          detail:
            "Gold standard, sensitivity 95-98% and specificity 96-98%; gives size, site, Hounsfield density (above 1000 HU predicts shock wave failure) and skin-to-stone distance. Low-dose protocols give about 2 mSv",
        },
        {
          label: "Predict passage from the size",
          detail:
            "Under 5 mm pass in about 70-80%, 5-10 mm in about 50%, above 10 mm rarely pass; most that pass do so within 4 weeks",
          tone: "decision",
        },
        {
          label: "Medical expulsive therapy where it works",
          detail:
            "Tamsulosin 0.4 mg PO OD for up to 4 weeks for a distal ureteric stone of 5-10 mm; the benefit is small or absent under 5 mm and for proximal stones. Counsel on dizziness and retrograde ejaculation",
        },
        {
          label: "Safety-net and review at 2-4 weeks",
          detail:
            "Strain the urine and bring the stone; return with fever, uncontrolled pain, vomiting preventing fluid intake or reduced urine output. Pain that disappears without a stone being passed may mean complete obstruction - repeat imaging rather than discharge, and do not watch beyond 4-6 weeks",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Stone types, urine pH and specific prevention",
      caption:
        "Lifetime prevalence in the Indian stone belt across Punjab, Haryana, Delhi, Rajasthan, Gujarat and Maharashtra is about 12% in men and 6% in women, with recurrence of about 50% at 5-10 years.",
      root: "Stone by composition",
      arms: [
        {
          label: "Calcium oxalate, 70-80%",
          steps: [
            "Radio-opaque and dense on CT; acidic to neutral urine",
            "Hypercalciuria, hyperoxaluria, hypocitraturia, low urine volume",
            "Fluids, normal dietary calcium, low sodium, potassium citrate, a thiazide for hypercalciuria",
          ],
        },
        {
          label: "Calcium phosphate, 5-10%",
          steps: [
            "Radio-opaque; alkaline urine above 6.5",
            "Distal renal tubular acidosis, primary hyperparathyroidism, topiramate",
            "Treat the cause; cautious alkali; thiazide for hypercalciuria",
          ],
        },
        {
          label: "Uric acid, 5-10%",
          tone: "good",
          steps: [
            "Radiolucent on plain X-ray but clearly visible on CT; urine pH persistently below 5.5",
            "Gout, obesity, metabolic syndrome, chronic diarrhoea, high purine intake",
            "The one common stone that dissolves medically - alkalinise to pH 6.5-7.0 with potassium citrate, add allopurinol 100-300 mg OD and a high fluid intake",
          ],
        },
        {
          label: "Struvite, 5-10%",
          tone: "warn",
          steps: [
            "Radio-opaque and often staghorn; urine pH above 7.2",
            "Urease-producing Proteus mirabilis, Klebsiella, Pseudomonas, Ureaplasma - never Escherichia coli; commoner in women and the catheterised",
            "Complete surgical clearance plus culture-directed antibiotics - any residual fragment reseeds the infection and regrows the stone",
          ],
        },
        {
          label: "Cystine, 1-2%",
          steps: [
            "Faintly opaque, ground-glass; acidic urine; hexagonal crystals on microscopy",
            "Autosomal recessive cystinuria with defective dibasic amino acid transport, presenting in childhood or early adult life",
            "High fluid intake, alkalinisation, and tiopronin in resistant cases",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Choosing the intervention by stone size and site",
      caption:
        "ESWL is contraindicated in pregnancy, uncorrected bleeding disorder, untreated urinary infection and distal obstruction; warn about steinstrasse, the column of fragments that obstructs the ureter.",
      columns: ["Stone", "Preferred option", "Alternative", "Comment"],
      rows: [
        [
          "Ureteric stone under 5 mm, no complication",
          "Conservative with analgesia",
          "Tamsulosin if distal",
          "70-80% pass spontaneously, usually within 4 weeks",
        ],
        [
          "Distal ureteric stone 5-10 mm",
          "Medical expulsive therapy with tamsulosin 0.4 mg OD for up to 4 weeks",
          "Ureteroscopy with laser",
          "Review at 2-4 weeks; do not watch beyond 4-6 weeks",
        ],
        [
          "Ureteric stone above 10 mm",
          "Ureteroscopy with laser lithotripsy",
          "ESWL for proximal stones",
          "Spontaneous passage is unlikely",
        ],
        [
          "Renal stone under 20 mm",
          "ESWL",
          "Retrograde intrarenal surgery",
          "Avoid ESWL above 1000 HU or with a skin-to-stone distance above 10 cm",
        ],
        [
          "Renal stone above 20 mm or staghorn",
          "Percutaneous nephrolithotomy",
          "Staged PCNL or open surgery",
          "Complete clearance is mandatory in struvite stones",
        ],
        [
          "Obstruction with fever or sepsis",
          "Emergency decompression by nephrostomy or JJ stent",
          "Neither - decompression is not optional",
          "Definitive stone treatment is deferred until the infection is controlled",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The infected obstructed kidney",
      caption:
        "The true urological emergency. Antibiotics alone cannot penetrate or sterilise a closed, obstructed, pus-filled collecting system.",
      steps: [
        {
          label: "Recognise it",
          detail:
            "Fever, rigors, loin pain, hypotension and pyuria with hydronephrosis; also urgent in a solitary or transplanted kidney, bilateral obstructing stones, or AKI from obstruction",
          tone: "warn",
        },
        {
          label: "Resuscitate and give intravenous antibiotics",
          detail: "Take cultures first, and start within the first hour",
        },
        {
          label: "Decompress within hours",
          detail:
            "Percutaneous nephrostomy or retrograde JJ stent - this is what saves the kidney and the patient",
          tone: "good",
        },
        {
          label: "Defer definitive stone treatment",
          detail:
            "Instrumenting an infected obstructed system raises intrapelvic pressure and can precipitate florid septic shock; ESWL is absolutely contraindicated in untreated urinary infection",
          tone: "warn",
        },
        {
          label: "Treat the stone once infection is controlled",
          detail:
            "By size and site. If a JJ stent is left, give the removal date in writing - a forgotten, encrusted stent obstructs, forms stone and loses the kidney, and is a serious and litigated complication",
        },
      ],
    },
  ],

  "renal-urology-hyponatraemia-hyperkalaemia": [
    {
      kind: "flow",
      heading: "The three-step algorithm for hyponatraemia",
      caption:
        "Sodium below 135 mmol/L: mild 130-134, moderate 125-129, severe below 125. Separately, acute is under 48 hours and chronic is 48 hours or more, or of unknown duration - and that decides how fast it may be corrected.",
      steps: [
        {
          label: "Step 1 - measure serum osmolality",
          detail:
            "Normal 275-295 mOsm/kg, or calculate 2 x sodium plus glucose in mg/dL divided by 18 plus blood urea nitrogen in mg/dL divided by 2.8. Only an osmolality below 275 is true hypotonic hyponatraemia needing the full workup",
          tone: "decision",
        },
        {
          label: "Rule out the two false alarms",
          detail:
            "Isotonic pseudohyponatraemia at 275-295 from severe hyperlipidaemia or hyperproteinaemia needs no treatment. Hypertonic translocational hyponatraemia above 295 from hyperglycaemia, mannitol or glycine irrigation is treated by correcting the glucose - add 1.6-2.4 mmol/L for every 100 mg/dL of glucose above 100 mg/dL",
          tone: "warn",
        },
        {
          label: "Step 2 - assess volume status clinically",
          detail:
            "Hypovolaemic: postural hypotension, tachycardia, dry mucosae, poor turgor, low JVP. Euvolaemic: neither oedema nor depletion. Hypervolaemic: oedema, raised JVP, ascites, crepitations",
          tone: "decision",
        },
        {
          label: "Step 3 - spot urine sodium and osmolality",
          detail:
            "Taken before any fluid or diuretic is given. Urine osmolality below 100 mOsm/kg means maximally dilute urine - primary polydipsia, beer potomania or a low-solute diet; above 100 means ADH is acting",
        },
        {
          label: "Read the urine sodium",
          detail:
            "Below 30 mmol/L means the kidney is conserving sodium - true volume depletion, or the reduced effective circulating volume of heart failure and cirrhosis. Above 30-40 mmol/L with euvolaemia points to SIADH, hypothyroidism, adrenal insufficiency or a thiazide",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Working out the cause of hypotonic hyponatraemia",
      caption:
        "The four commonest causes in India are thiazide diuretics, SIADH from drugs or pneumonia or tuberculosis or an intracranial event or malignancy, gastrointestinal losses replaced with hypotonic fluid, and heart failure or cirrhosis.",
      root: "Hypotonic hyponatraemia, by volume status and urine sodium",
      arms: [
        {
          label: "Hypovolaemic, urine sodium below 30 mmol/L",
          steps: [
            "Vomiting, diarrhoea, burns, third spacing, pancreatitis",
            "0.9% saline with frequent sodium checks",
            "Expect a brisk water diuresis and a rapid rise once volume is restored and ADH switches off",
          ],
        },
        {
          label: "Hypovolaemic, urine sodium above 30 mmol/L",
          steps: [
            "Thiazide or loop diuretic, adrenal insufficiency, cerebral salt wasting, salt-losing nephropathy",
            "Stop the diuretic and give saline; hydrocortisone if adrenal",
            "Thiazide hyponatraemia is the commonest drug cause in general practice - an elderly, low body weight woman within 2-4 weeks of starting; stop it permanently and never rechallenge",
          ],
        },
        {
          label: "Euvolaemic, urine sodium above 30 mmol/L",
          steps: [
            "SIADH, hypothyroidism, adrenal insufficiency, drugs",
            "Bartter and Schwartz criteria for SIADH: serum osmolality below 275, urine osmolality above 100, clinical euvolaemia, urine sodium above 30-40 on normal intake, and normal thyroid, adrenal and renal function with no diuretic; a low uric acid below 4 mg/dL and low urea support it",
            "Fluid restriction to 500-1000 mL/day first; if it fails, oral urea 15-30 g/day, salt tablets with a low-dose loop diuretic, or tolvaptan 15 mg PO OD in hospital with 6-hourly sodium checks",
          ],
        },
        {
          label: "Hypervolaemic, urine sodium below 30 mmol/L",
          steps: [
            "Heart failure, cirrhosis, nephrotic syndrome",
            "Fluid restriction to 800-1000 mL/day, salt restriction and a loop diuretic, treating the underlying disease",
          ],
        },
        {
          label: "Hypervolaemic, urine sodium above 30 mmol/L",
          steps: [
            "Advanced chronic kidney disease or acute kidney injury",
            "Fluid restriction; dialysis if needed",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Correcting hyponatraemia without demyelination",
      caption:
        "Never correct chronic hyponatraemia quickly because the number looks frightening. The patient who has been at 112 mmol/L for weeks and is walking and talking needs a plan and a ceiling, not a bolus.",
      steps: [
        {
          label: "Severe symptoms - treat immediately",
          detail:
            "Seizures, coma, obtundation, or vomiting with headache, regardless of how chronic the hyponatraemia is",
          tone: "warn",
        },
        {
          label: "3% saline 100-150 mL over 10-20 minutes",
          detail:
            "Repeated up to three times until symptoms improve or the sodium has risen by 4-6 mmol/L, which is enough to stop the cerebral oedema. Check the sodium after each bolus",
        },
        {
          label: "Write the 24-hour ceiling on the fluid chart",
          detail:
            "No more than 8-10 mmol/L in the first 24 hours and no more than 18 mmol/L in 48 hours; only 4-6 mmol/L in 24 hours if the sodium is below 105 or the patient is alcoholic, malnourished, hypokalaemic, elderly or has liver disease",
          tone: "decision",
        },
        {
          label: "If the ceiling is breached, rescue at once",
          detail:
            "Stop the correcting fluid, give 5% dextrose 3 mL/kg/h and desmopressin 2 micrograms intravenously to re-lower the sodium into range - this genuinely prevents demyelination",
          tone: "warn",
        },
        {
          label: "Osmotic demyelination syndrome",
          detail:
            "What follows overcorrection: initial improvement then, 2-6 days later, dysarthria, dysphagia, quadriparesis, pseudobulbar palsy and in severe cases a locked-in state. MRI changes in the central pons appear late and it is largely irreversible",
        },
        {
          label: "Then treat the cause, not the number",
          detail:
            "Hypovolaemic with saline, euvolaemic SIADH with fluid restriction, hypervolaemic with fluid and salt restriction and a loop diuretic",
          tone: "good",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Hyperkalaemia in the right order",
      caption:
        "Potassium above 5.5 mmol/L: mild 5.5-5.9, moderate 6.0-6.4, severe 6.5 or above - but the number is only half the assessment, and any ECG change makes it an emergency at any level.",
      steps: [
        {
          label: "Exclude pseudohyperkalaemia first",
          detail:
            "In a well patient with no cause: haemolysed sample, a tight or prolonged tourniquet with fist clenching, delayed transport, a difficult paediatric sample, thrombocytosis or marked leucocytosis. Repeat the sample properly before treating",
        },
        {
          label: "Step 1 - stabilise the myocardium",
          detail:
            "Calcium gluconate 10 mL of 10% intravenously over 2-3 minutes, repeated after 5 minutes if the ECG has not improved. Acts in 1-3 minutes and lasts 30-60 minutes, and does not lower the potassium at all. Calcium chloride 10 mL of 10% has three times the calcium but needs a central line",
          tone: "warn",
        },
        {
          label: "Step 2 - shift potassium into the cells",
          detail:
            "10 units of regular insulin with 25 g of dextrose (50 mL of 50% or 100 mL of 25%) lowers potassium by 0.6-1.2 mmol/L in 15-30 minutes for 4-6 hours - check the glucose hourly for 6 hours. Add salbutamol 10-20 mg nebulised for a further 0.5-1.0 mmol/L; bicarbonate only if genuinely acidotic",
        },
        {
          label: "Step 3 - remove potassium from the body",
          detail:
            "Furosemide 40-80 mg IV with adequate volume status if urine output is preserved; sodium zirconium cyclosilicate 10 g PO TDS for 48 hours then 5-10 g OD, or patiromer 8.4 g PO OD; haemodialysis is definitive in oliguric or refractory cases",
        },
        {
          label: "Step 4 - remove the cause",
          detail:
            "Ask specifically what salt the household buys - low-sodium salt is potassium chloride and is heavily marketed in India. Review the ACE inhibitor, ARB, MRA, trimethoprim and NSAID, give the dietary list by name, treat acidosis, and recheck potassium within 3-7 days",
          tone: "decision",
        },
        {
          label: "Keep the drug that protects the kidney",
          detail:
            "Do not abandon proven RAAS blockade for a potassium of 5.2-5.5 mmol/L in CKD or heart failure - treat the potassium with diet, a binder, correction of acidosis and a loop diuretic instead",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "The ECG sequence of hyperkalaemia",
      caption:
        "A normal ECG does not exclude dangerous hyperkalaemia, and the changes correlate poorly with the exact potassium value.",
      steps: [
        {
          label: "Tall peaked symmetrical T waves",
          detail: "With a narrow base - the earliest change",
        },
        {
          label: "Flattened or absent P wave",
          detail: "With a prolonged PR interval",
        },
        {
          label: "Widening of the QRS",
          detail:
            "Give calcium gluconate now - the immediate threat is a lethal arrhythmia",
          tone: "warn",
        },
        { label: "Sine wave pattern", tone: "warn" },
        { label: "Ventricular fibrillation or asystole", tone: "warn" },
      ],
    },
  ],

  "renal-urology-drug-dosing-renal-impairment": [
    {
      kind: "compare",
      heading: "Which number to dose on: eGFR or creatinine clearance",
      caption:
        "The reported eGFR is for staging CKD. Almost every drug label and classical dosing table was derived from Cockcroft-Gault creatinine clearance.",
      columns: [
        "Feature",
        "Reported eGFR (CKD-EPI 2021)",
        "Cockcroft-Gault creatinine clearance",
      ],
      rows: [
        [
          "Units",
          "mL/min/1.73 m2, normalised to a standard body surface area",
          "mL/min, not normalised",
        ],
        ["What it is for", "Staging CKD", "Drug dosing"],
        [
          "How it is obtained",
          "From creatinine, age and sex",
          "[(140 - age) x weight in kg] / (72 x creatinine in mg/dL), x 0.85 if female",
        ],
        [
          "Weight",
          "Not used",
          "Ideal or adjusted body weight in obesity, actual body weight in the underweight",
        ],
        [
          "An 80-year-old 45 kg woman, creatinine 1.0 mg/dL",
          "Reported as about 56 mL/min/1.73 m2, which looks near normal",
          "About 25 mL/min - the number her gabapentin, morphine, digoxin and metformin must be dosed on",
        ],
        [
          "Getting from one to the other",
          "De-index: individual clearance = eGFR x body surface area / 1.73",
          "Already individual; use cystatin C-based CKD-EPI where the creatinine estimate is not believable",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The four decisions for every drug",
      caption:
        "The answers give four possible actions: reduce the dose, lengthen the interval, avoid the drug, or monitor the level.",
      steps: [
        {
          label: "Is it cleared by the kidney?",
          detail:
            "More than about 30% renal elimination of active drug or active metabolite needs adjustment. Atorvastatin, amlodipine, warfarin, clopidogrel and most antidepressants are hepatically cleared and usually need none",
          tone: "decision",
        },
        {
          label: "Is it nephrotoxic?",
          detail:
            "NSAIDs, aminoglycosides, iodinated contrast, gadolinium below eGFR 30, oral sodium phosphate bowel preparations, tenofovir disoproxil, calcineurin inhibitors, amphotericin B, and unlabelled ayurvedic or herbal preparations containing heavy metals or Aristolochia",
        },
        {
          label: "Is it removed by dialysis?",
          detail:
            "Small, water-soluble, poorly protein-bound drugs are removed well - aminoglycosides, most beta-lactams, lithium, methanol, metformin. Highly protein-bound or large-volume drugs are not - phenytoin, digoxin, amiodarone. Give the dose after the session",
        },
        {
          label: "Does toxicity follow the peak or the trough?",
          detail:
            "Concentration-dependent killing (aminoglycosides, fluoroquinolones): keep the dose and lengthen the interval to preserve the peak. Time-dependent killing (beta-lactams, vancomycin): keep the interval and reduce the dose to stay above the MIC",
        },
        {
          label: "Give the full loading dose regardless",
          detail:
            "Loading dose depends on the volume of distribution, not on clearance, so it is unchanged even in dialysis-dependent failure - only the maintenance dose or interval changes. Failing to load is the commonest cause of under-treated sepsis in kidney failure",
          tone: "warn",
        },
        {
          label: "Write the clearance on the prescription",
          detail:
            "With the date, so the next prescriber sees the number the dose was based on; reassess at every visit and after every acute illness, because the prescription that was correct at an eGFR of 45 is dangerous at 25",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Common drugs at each level of kidney function",
      caption:
        "Metformin is the one to be able to recite: full dose above 45, maximum 1000 mg/day at 30-44 and never initiated there, stopped below 30, and held during any acute illness or before contrast.",
      columns: [
        "Drug",
        "Above eGFR 45-60",
        "eGFR 30-44",
        "eGFR 15-29",
        "Below 15 or dialysis",
      ],
      rows: [
        [
          "Metformin",
          "Full dose up to 2000 mg/day",
          "Maximum 1000 mg/day; do not initiate",
          "Stop",
          "Contraindicated",
        ],
        [
          "Nitrofurantoin",
          "Standard dose",
          "Avoid - ineffective and accumulates",
          "Contraindicated",
          "Contraindicated",
        ],
        [
          "NSAIDs",
          "Avoid in CKD; short courses only if unavoidable",
          "Avoid",
          "Contraindicated",
          "Contraindicated",
        ],
        [
          "Enoxaparin, treatment dose",
          "1 mg/kg twice daily",
          "1 mg/kg twice daily",
          "1 mg/kg once daily",
          "Avoid; use unfractionated heparin",
        ],
        [
          "Allopurinol",
          "100-300 mg daily",
          "Start 50-100 mg, titrate slowly",
          "50 mg daily or alternate days",
          "50 mg on alternate days, after dialysis",
        ],
        [
          "Gabapentin",
          "300 mg three times daily",
          "200-300 mg twice daily",
          "100-300 mg daily",
          "100-300 mg after each dialysis session",
        ],
        [
          "Morphine",
          "Use with caution",
          "Reduce dose and lengthen interval",
          "Avoid - use fentanyl or buprenorphine",
          "Avoid",
        ],
        [
          "Digoxin",
          "0.125-0.25 mg daily",
          "0.125 mg daily",
          "0.0625-0.125 mg daily with levels",
          "0.0625 mg alternate days; not dialysed out",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Sick-day rules and the medication review",
      caption:
        "The mnemonic taught to patients is DAMN - Diuretics, ACE inhibitors and ARBs, Metformin, NSAIDs - with the SGLT2 inhibitor and the MRA added in modern practice.",
      steps: [
        {
          label: "Give the rules in writing, in advance",
          detail:
            "To every patient with CKD, diabetes or heart failure, and to every AKI survivor",
        },
        {
          label: "Hold the DAMN drugs during any such illness",
          detail:
            "Vomiting, diarrhoea, fever with poor intake, or any illness causing dehydration - stop the ACE inhibitor or ARB, diuretic, MRA, metformin, SGLT2 inhibitor and NSAID temporarily",
          tone: "warn",
        },
        {
          label: "Keep drinking and attend for bloods",
          detail: "A creatinine and potassium check during the illness",
        },
        {
          label: "Restart deliberately, one drug at a time",
          detail: "Once eating and drinking normally",
          tone: "good",
        },
        {
          label: "Review the whole list at least annually",
          detail:
            "Every prescribed drug, over-the-counter drug, herbal or ayurvedic preparation and supplement, each checked against the current creatinine clearance; ask what the patient is actually taking rather than what is written",
        },
        {
          label: "Deprescribe what is no longer needed",
          detail:
            "Long-term proton pump inhibitors, long-term NSAIDs, duplicate antihypertensives, an alpha blocker no longer needed, unindicated calcium and vitamin D, and potassium supplements continued after the diuretic was stopped",
        },
        {
          label: "Educate the family, not just the patient",
          detail:
            "Over-the-counter diclofenac and combination analgesics are bought by relatives, and unlabelled herbal nephrotonics are often given precisely because the patient has kidney disease. Ask specifically, without judgement, at every visit",
        },
      ],
    },
  ],

  "renal-urology-proteinuria-nephrotic-nephritic": [
    {
      kind: "flow",
      heading: "Detecting and quantifying proteinuria properly",
      caption:
        "KDIGO albuminuria categories: A1 under 30 mg/g, A2 30-300 mg/g, A3 above 300 mg/g. Nephrotic range is a PCR above 3000 mg/g, or more than 3.5 g/1.73 m2/day.",
      steps: [
        {
          label: "Do not rely on the dipstick",
          detail:
            "It detects albumin only and only above about 300 mg/L, so it misses category A2 entirely - precisely the stage at which treatment changes outcome - and it misses Bence Jones light chains, so unexplained renal failure with a negative dipstick still needs electrophoresis with free light chains",
          tone: "warn",
        },
        {
          label: "Quantify on a spot first-morning sample",
          detail:
            "Urine albumin-creatinine ratio in mg/g for screening and staging; urine protein-creatinine ratio in mg/g when proteinuria is heavy or non-albumin protein is suspected",
        },
        {
          label: "Convert without a 24-hour collection",
          detail:
            "A PCR of 1000 mg/g approximates 1 g of protein a day, because an adult excretes roughly 1 g of creatinine daily - which makes the 24-hour collection unnecessary in almost every case",
        },
        {
          label: "Confirm before labelling anyone",
          detail:
            "Proteinuria is transient after fever, vigorous exercise, heart failure, seizures and urinary infection, so repeat on 2 of 3 first-morning specimens over 3-6 months, having treated any infection",
          tone: "decision",
        },
        {
          label: "Exclude orthostatic proteinuria in the young",
          detail:
            "Protein present in an upright daytime sample but absent in the first-morning recumbent sample is benign in adolescents and young adults, and needs only reassurance and periodic review - no treatment and no biopsy",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Nephrotic against nephritic syndrome",
      caption:
        "The nephrotic tetrad is proteinuria above 3.5 g/1.73 m2/day, albumin below 3.0 g/dL, oedema and hyperlipidaemia with lipiduria showing oval fat bodies and a Maltese cross under polarised light.",
      columns: ["Feature", "Nephrotic syndrome", "Nephritic syndrome"],
      rows: [
        [
          "Proteinuria",
          "Above 3.5 g/day, PCR above 3000 mg/g",
          "Usually below 3.5 g/day",
        ],
        [
          "Haematuria",
          "Absent or minimal; bland sediment",
          "Present, with dysmorphic red cells and red cell casts",
        ],
        ["Serum albumin", "Below 3.0 g/dL", "Normal or mildly reduced"],
        [
          "Oedema",
          "Marked, generalised, may progress to anasarca",
          "Mild, typically periorbital",
        ],
        ["Blood pressure", "Often normal", "Raised"],
        ["Urine output", "Usually preserved", "Oliguria common"],
        ["Renal function", "Often preserved initially", "Rising creatinine"],
        [
          "Underlying lesion",
          "Podocyte injury without inflammation",
          "Glomerular inflammation with proliferation",
        ],
        [
          "Typical causes",
          "Minimal change, FSGS, membranous, diabetes, amyloidosis",
          "Post-infectious, IgA nephropathy, lupus, ANCA vasculitis, anti-GBM",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Post-streptococcal disease against IgA nephropathy",
      caption:
        "The latency after the infection is the discriminator: weeks for post-streptococcal disease, days for IgA nephropathy.",
      columns: [
        "Feature",
        "Post-streptococcal glomerulonephritis",
        "IgA nephropathy",
      ],
      rows: [
        [
          "Latency after the infection",
          "1-3 weeks after a throat infection, 3-6 weeks after pyoderma",
          "Synpharyngitic - visible haematuria within 1-3 days of an upper respiratory infection",
        ],
        [
          "Commoner antecedent in India",
          "Pyoderma",
          "Upper respiratory infection",
        ],
        ["Complement", "Low C3 with a normal C4", "Normal C3"],
        [
          "Course of the C3",
          "Returns to normal within 6-8 weeks; failure to normalise by 8-12 weeks demands a biopsy",
          "Not applicable",
        ],
        [
          "Between episodes",
          "Resolves - the prognosis in children is excellent",
          "Persistent microscopic haematuria",
        ],
        [
          "Confirmatory test",
          "Raised ASO titre or anti-DNase B",
          "Biopsy with immunofluorescence for mesangial IgA",
        ],
        [
          "Treatment",
          "Supportive: salt and fluid restriction, a loop diuretic, antihypertensives, and penicillin to clear the organism",
          "Supportive: maximal RAS blockade, blood pressure control and an SGLT2 inhibitor for at least 90 days",
        ],
        [
          "Immunosuppression",
          "Not used",
          "Only if proteinuria persists above 0.75-1 g/day at high risk of progression",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Naming the glomerulonephritis from the serology",
      caption:
        "Complement plus one antibody usually names the lesion, or at least tells you how urgently the biopsy is needed.",
      root: "Nephritic or nephrotic presentation with serology back",
      arms: [
        {
          label: "Low C3, normal C4",
          steps: [
            "Post-infectious glomerulonephritis, C3 glomerulopathy, dense deposit disease",
            "ASO or anti-DNase B; repeat C3 at 8 weeks; biopsy if it is still low",
          ],
        },
        {
          label: "Low C3 and low C4",
          steps: [
            "Lupus nephritis, cryoglobulinaemia, shunt nephritis, hepatitis C associated disease",
            "ANA, anti-dsDNA, cryoglobulins, anti-HCV, blood cultures",
          ],
        },
        {
          label: "Normal complement, positive ANCA",
          tone: "warn",
          steps: [
            "Granulomatosis with polyangiitis (c-ANCA, PR3), microscopic polyangiitis (p-ANCA, MPO)",
            "PR3 and MPO ANCA; urgent renal biopsy",
          ],
        },
        {
          label: "Normal complement, positive anti-GBM",
          tone: "warn",
          steps: [
            "Anti-GBM disease, Goodpasture syndrome with pulmonary haemorrhage",
            "Anti-GBM antibody; urgent biopsy; start plasma exchange",
          ],
        },
        {
          label: "Normal complement, no autoantibody",
          steps: [
            "IgA nephropathy, Henoch-Schonlein purpura, thin basement membrane disease",
            "Biopsy with immunofluorescence for mesangial IgA",
          ],
        },
        {
          label: "Nephrotic adult, anti-PLA2R positive",
          steps: [
            "Primary membranous nephropathy - the antibody is positive in about 70-80%",
            "The titre may spare the patient a biopsy, but never spares them a screen for malignancy, hepatitis B and lupus",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Rapidly progressive glomerulonephritis",
      caption:
        "Haemoptysis with haematuria and a creatinine rising over days is a pulmonary-renal syndrome from anti-GBM disease or ANCA vasculitis. Outcome depends entirely on how fast treatment starts.",
      steps: [
        {
          label: "Recognise it",
          detail:
            "A nephritic presentation with a fall in GFR of 50% or more within days to 3 months, with an active sediment showing dysmorphic red cells and red cell casts",
          tone: "warn",
        },
        {
          label: "Admit the same day",
          detail:
            "An outpatient appointment in 4 weeks sees the patient arrive dialysis dependent with fibrous crescents that no longer respond",
        },
        {
          label: "Send the antibodies at once",
          detail:
            "Anti-GBM antibody, ANCA with PR3 and MPO, ANA and anti-dsDNA, and complement",
        },
        {
          label: "Urgent renal biopsy",
          detail:
            "Crescents in more than 50% of glomeruli. Type 1 anti-GBM with linear IgG; type 2 immune complex (lupus, post-infectious, IgA and Henoch-Schonlein, cryoglobulinaemia); type 3 pauci-immune ANCA-associated",
          tone: "decision",
        },
        {
          label: "Pulse methylprednisolone",
          detail:
            "500-1000 mg intravenously daily for 3 days, followed by oral prednisolone, plus cyclophosphamide or rituximab",
        },
        {
          label: "Add plasma exchange where it is indicated",
          detail:
            "In anti-GBM disease and in severe pulmonary haemorrhage",
          tone: "good",
        },
      ],
    },
  ],
};

export default diagrams;
