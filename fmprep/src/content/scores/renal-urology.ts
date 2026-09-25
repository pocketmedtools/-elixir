import type { NoteTable } from "../../lib/types";

const scores: Record<string, NoteTable[]> = {
  "renal-urology-acute-kidney-injury": [
    {
      heading: "RIFLE classification of acute kidney injury (ADQI; Harrison 22e 2025)",
      columns: ["Class", "Creatinine or GFR criterion", "Urine output criterion"],
      rows: [
        ["Risk", "Creatinine 1.5 times baseline or GFR fall over 25%", "Under 0.5 mL/kg/h for 6 hours"],
        ["Injury", "Creatinine 2 times baseline or GFR fall over 50%", "Under 0.5 mL/kg/h for 12 hours"],
        ["Failure", "Creatinine 3 times baseline, GFR fall over 75%, or 4 mg/dL or more with acute rise 0.5", "Under 0.3 mL/kg/h for 24 hours or anuria 12 hours"],
        ["Loss", "Complete loss of kidney function over 4 weeks", "Persistent AKI"],
        ["ESKD", "End-stage kidney disease over 3 months", "Dialysis dependent"],
      ],
    },
    {
      heading: "AKIN staging of acute kidney injury (AKIN 2007; Harrison 22e 2025)",
      columns: ["Stage", "Creatinine criterion (within 48 hours)", "Urine output criterion"],
      rows: [
        ["Stage 1", "Rise 0.3 mg/dL or more, or 1.5-2 times baseline", "Under 0.5 mL/kg/h for over 6 hours"],
        ["Stage 2", "Over 2-3 times baseline", "Under 0.5 mL/kg/h for over 12 hours"],
        ["Stage 3", "Over 3 times baseline, or 4.0 mg/dL or more with acute rise 0.5, or on RRT", "Under 0.3 mL/kg/h for 24 hours or anuria 12 hours"],
      ],
    },
    {
      heading: "Urine indices classification: prerenal AKI versus ATN (Harrison 22e 2025)",
      columns: ["Index", "Prerenal", "Acute tubular necrosis"],
      rows: [
        ["Urine sodium", "Under 20 mmol/L", "Over 40 mmol/L"],
        ["Fractional excretion of sodium", "Under 1%", "Over 2%"],
        ["Fractional excretion of urea", "Under 35% (useful on diuretics)", "Over 50%"],
        ["Urine osmolality", "Over 500 mOsm/kg", "Under 350 mOsm/kg"],
        ["Urine specific gravity", "Over 1.020", "About 1.010 (isosthenuric)"],
        ["Urine/plasma creatinine", "Over 40", "Under 20"],
        ["BUN/creatinine ratio", "Over 20", "10-15"],
        ["Sediment", "Bland, hyaline casts", "Muddy brown granular casts, tubular cells"],
      ],
    },
    {
      heading: "Criteria for urgent dialysis in AKI (KDIGO; OHCM 11e 2024)",
      columns: ["Indication", "Threshold", "Note"],
      rows: [
        ["Hyperkalaemia", "K 6.5 mmol/L or more, or ECG changes, refractory to medical therapy", "Stabilise with calcium first"],
        ["Metabolic acidosis", "pH under 7.1-7.2 refractory to treatment", "Bicarbonate limited by fluid overload"],
        ["Fluid overload", "Pulmonary oedema not responding to diuretics", "Oliguric patients"],
        ["Uraemic complications", "Pericarditis, encephalopathy, uraemic bleeding", "Urea often over 30-40 mmol/L"],
        ["Dialysable toxins", "Methanol, ethylene glycol, lithium, salicylate, metformin acidosis", "Intermittent haemodialysis preferred"],
      ],
    },
  ],

  "renal-urology-hyponatraemia-hyperkalaemia": [
    {
      heading: "Hyponatraemia classification by biochemistry and time (European guideline 2014)",
      columns: ["Class", "Definition", "Meaning"],
      rows: [
        ["Mild", "Serum sodium 130-135 mmol/L", "Often incidental; falls and gait disturbance in elderly"],
        ["Moderate", "Serum sodium 125-129 mmol/L", "Investigate and treat cause"],
        ["Profound", "Serum sodium under 125 mmol/L", "Higher risk of symptoms and of over-correction"],
        ["Acute", "Documented to develop within 48 hours", "Brain oedema risk; faster correction safe"],
        ["Chronic", "48 hours or more, or duration unknown", "Assume chronic; osmotic demyelination risk"],
      ],
    },
    {
      heading: "Hyponatraemia symptom severity classification and treatment (European 2014)",
      columns: ["Severity", "Symptoms", "Treatment"],
      rows: [
        ["Moderately severe", "Nausea without vomiting, confusion, headache", "150 mL 3% saline IV over 20 min once; aim rise 5 mmol/L in 24 hours"],
        ["Severe", "Vomiting, cardiorespiratory distress, deep somnolence, seizures, coma (GCS 8 or less)", "150 mL 3% saline over 20 min, repeat up to 2 more times until sodium up 5 mmol/L"],
        ["Mild or no symptoms", "None attributable, or subtle gait and attention problems", "Treat cause; fluid restriction for SIAD"],
        ["Correction limit", "Applies to all chronic hyponatraemia", "No more than 10 mmol/L in first 24 hours and 8 mmol/L each later day"],
      ],
    },
    {
      heading: "Types of hypotonic hyponatraemia by volume status (European guideline 2014)",
      columns: ["Type", "Urine findings", "Causes"],
      rows: [
        ["Low urine osmolality", "Urine osmolality 100 mOsm/kg or less", "Primary polydipsia, beer potomania, tea and toast diet"],
        ["Hypovolaemic - extrarenal", "Urine sodium 30 mmol/L or less", "Vomiting, diarrhoea, third spacing, remote diuretics"],
        ["Hypovolaemic - renal", "Urine sodium over 30 mmol/L", "Diuretics, adrenal insufficiency, salt-wasting nephropathy, cerebral salt wasting"],
        ["Euvolaemic", "Urine sodium over 30, urine osmolality over 100", "SIAD, hypothyroidism, secondary adrenal insufficiency"],
        ["Hypervolaemic", "Urine sodium usually 30 mmol/L or less", "Heart failure, cirrhosis, nephrotic syndrome; urine sodium high in CKD"],
      ],
    },
    {
      heading: "Hyperkalaemia severity classification (UK Kidney Association 2023)",
      columns: ["Severity", "Serum potassium", "Treatment"],
      rows: [
        ["Mild", "5.5-5.9 mmol/L", "Treat cause, review drugs (ACEi, MRA, NSAID), diet; recheck"],
        ["Moderate", "6.0-6.4 mmol/L", "Insulin 10 units with 25 g glucose IV; consider sodium zirconium cyclosilicate"],
        ["Severe", "6.5 mmol/L or more", "Cardiac monitor, insulin-glucose, salbutamol 10-20 mg neb, binder; dialysis if refractory"],
        ["Any level with ECG changes", "Peaked T, flat P, wide QRS, sine wave, brady- or tachyarrhythmia", "IV calcium first: 30 mL 10% calcium gluconate or 10 mL 10% calcium chloride"],
      ],
    },
    {
      heading: "Hypokalaemia severity grading (OHCM 11e 2024)",
      columns: ["Severity", "Serum potassium", "Treatment"],
      rows: [
        ["Mild", "3.0-3.4 mmol/L", "Oral potassium chloride; treat cause; check magnesium"],
        ["Moderate", "2.5-2.9 mmol/L", "Oral or IV replacement depending on symptoms and ECG"],
        ["Severe", "Under 2.5 mmol/L or with symptoms or ECG change", "IV KCl, usually 10 mmol/h or less peripherally, cardiac monitoring"],
      ],
    },
  ],

  "renal-urology-proteinuria-nephrotic-nephritic": [
    {
      heading: "Nephrotic versus nephritic syndrome criteria (Harrison 22e 2025)",
      columns: ["Feature", "Nephrotic syndrome", "Nephritic syndrome"],
      rows: [
        ["Proteinuria", "Over 3.5 g/day (UPCR over 300 mg/mmol); child over 40 mg/m2/h", "Usually under 3 g/day"],
        ["Serum albumin", "Under 3.0 g/dL", "Normal or mildly low"],
        ["Oedema", "Marked, generalised (anasarca)", "Mild, periorbital"],
        ["Haematuria", "Absent or minimal", "Present with dysmorphic RBC and RBC casts"],
        ["Blood pressure", "Usually normal", "Raised"],
        ["Renal function", "Usually preserved initially", "Oliguria, rising creatinine"],
        ["Lipids", "Hyperlipidaemia, lipiduria (fatty casts)", "Usually normal"],
        ["Typical causes", "Minimal change, FSGS, membranous, diabetes, amyloid", "Post-streptococcal GN, IgA, lupus, ANCA vasculitis, anti-GBM"],
      ],
    },
    {
      heading: "ISN/RPS 2018 classification of lupus nephritis (KDIGO 2024 LN)",
      columns: ["Class", "Histology", "Treatment"],
      rows: [
        ["Class I", "Minimal mesangial LN: normal light microscopy, mesangial deposits on IF", "Treat extrarenal lupus; hydroxychloroquine"],
        ["Class II", "Mesangial proliferative LN", "Hydroxychloroquine, RAS blockade; immunosuppress if nephrotic"],
        ["Class III", "Focal LN: under 50% of glomeruli with endo- or extracapillary lesions", "Steroid plus MMF or low-dose IV cyclophosphamide; add belimumab or CNI"],
        ["Class IV", "Diffuse LN: 50% or more of glomeruli involved", "As class III"],
        ["Class V", "Membranous LN (may coexist with III or IV)", "Immunosuppress if nephrotic-range proteinuria"],
        ["Class VI", "Advanced sclerosing: 90% or more glomeruli globally sclerosed", "No immunosuppression for kidney; prepare for KRT"],
      ],
    },
    {
      heading: "Modified NIH activity and chronicity index in lupus nephritis (ISN/RPS 2018)",
      columns: ["Lesion", "Index", "Score range"],
      rows: [
        ["Endocapillary hypercellularity", "Activity", "0-3"],
        ["Neutrophils or karyorrhexis", "Activity", "0-3"],
        ["Fibrinoid necrosis", "Activity", "0-3, doubled (0-6)"],
        ["Hyaline deposits (wire loops, thrombi)", "Activity", "0-3"],
        ["Cellular or fibrocellular crescents", "Activity", "0-3, doubled (0-6); activity total 0-24"],
        ["Interstitial inflammation", "Activity", "0-3"],
        ["Total glomerulosclerosis", "Chronicity", "0-3"],
        ["Fibrous crescents", "Chronicity", "0-3"],
        ["Tubular atrophy", "Chronicity", "0-3"],
        ["Interstitial fibrosis", "Chronicity", "0-3; chronicity total 0-12"],
        ["Scoring rule", "Both", "Under 25% of glomeruli or cortex = 1, 25-50% = 2, over 50% = 3"],
      ],
    },
    {
      heading: "Childhood nephrotic syndrome response criteria (KDIGO 2021 GN)",
      columns: ["Term", "Definition", "Action"],
      rows: [
        ["Nephrotic-range proteinuria", "UPCR 200 mg/mmol (2 mg/mg) or more, or dipstick 3+ or more", "With albumin under 3.0 g/dL and oedema defines NS"],
        ["Complete remission", "UPCR 20 mg/mmol or less, or dipstick nil/trace, on 3 consecutive days", "Taper steroid"],
        ["Relapse", "Dipstick 3+ or more (or UPCR 200 mg/mmol or more) for 3 consecutive days after remission", "Prednisolone 60 mg/m2/day until remission"],
        ["Frequently relapsing", "2 or more relapses in 6 months after initial response, or 4 or more in any 12 months", "Steroid-sparing agent (levamisole, MMF, cyclophosphamide)"],
        ["Steroid-dependent", "2 consecutive relapses on steroid or within 14 days of stopping", "Steroid-sparing agent, rituximab"],
        ["Steroid-resistant", "No complete remission after 4 weeks of daily prednisolone 60 mg/m2", "Kidney biopsy, genetic testing, CNI"],
      ],
    },
  ],

  "renal-urology-chronic-kidney-disease": [
    {
      heading: "Bosniak 2019 classification of cystic renal masses (Campbell 13e 2025)",
      columns: ["Class", "CT or MRI features", "Malignancy risk and action"],
      rows: [
        ["Bosniak I", "Thin (2 mm or less) smooth wall, simple fluid (-9 to 20 HU), no septa or calcification", "Benign; no follow-up"],
        ["Bosniak II", "1-3 thin septa or fine calcification; or homogeneous hyperattenuating non-enhancing mass", "Benign; no follow-up"],
        ["Bosniak IIF", "Minimally thick (3 mm) smooth enhancing wall or septa, or 4 or more thin enhancing septa", "About 5-10% malignant; imaging at 6, 12 months, then yearly to 5 years"],
        ["Bosniak III", "Thick (4 mm or more) or irregular enhancing wall or septa", "About 50% malignant; surgery or active surveillance"],
        ["Bosniak IV", "Enhancing nodule (4 mm or more obtuse, or any acute-margined protrusion)", "About 90% malignant; surgical excision"],
      ],
    },
    {
      heading: "KDIGO 2024 CKD drug classes by eGFR threshold (KDIGO 2024 CKD)",
      columns: ["Drug", "Start if eGFR", "Continue until", "Note"],
      rows: [
        ["SGLT2 inhibitor", "20 mL/min/1.73 m2 or more", "Dialysis or transplant", "For CKD with ACR 200 mg/g or more, diabetes or HF"],
        ["ACE inhibitor or ARB", "Any eGFR", "Continue unless symptomatic or K uncontrolled", "Accept creatinine rise up to 30%"],
        ["Non-steroidal MRA (finerenone)", "25 or more with K 4.8 mmol/L or less", "Stop if K over 5.5", "T2DM with albuminuria despite RASi"],
        ["GLP-1 receptor agonist", "No eGFR limit for most agents", "Ongoing", "T2DM with CKD needing more glucose control"],
      ],
    },
  ],

  "renal-urology-drug-dosing-renal-impairment": [
    {
      heading: "Metformin dosing criteria by eGFR (KDIGO 2022 diabetes in CKD)",
      columns: ["eGFR band (mL/min/1.73 m2)", "Metformin", "Monitoring"],
      rows: [
        ["60 or more", "Usual dose (up to 2000 mg/day)", "eGFR yearly"],
        ["45-59", "Continue usual dose; review in risk of AKI", "eGFR every 3-6 months"],
        ["30-44", "Do not start; if on it halve dose, maximum 1000 mg/day", "eGFR every 3-6 months"],
        ["Under 30", "Stop", "Also stop around iodinated contrast, sepsis, dehydration"],
      ],
    },
  ],

  "renal-urology-urinary-tract-infection": [
    {
      heading: "UTI classification (EAU 2025 urological infections)",
      columns: ["Class", "Definition", "Implication"],
      rows: [
        ["Uncomplicated UTI", "Cystitis or pyelonephritis in non-pregnant women without abnormality or comorbidity", "Short course; nitrofurantoin or fosfomycin for cystitis"],
        ["Complicated UTI", "All others: men, pregnancy, abnormal tract, catheter, stones, CKD, immunosuppression", "Culture, longer course, image the tract"],
        ["Recurrent UTI", "2 or more in 6 months or 3 or more in 12 months", "Behavioural advice, vaginal oestrogen, prophylaxis"],
        ["Catheter-associated UTI", "UTI in catheterised patient or within 48 hours of removal", "Change catheter before culture and treatment"],
        ["Urosepsis", "Life-threatening organ dysfunction from urinary tract infection", "Sepsis bundle; relieve obstruction"],
        ["Asymptomatic bacteriuria", "Significant bacteriuria without symptoms", "Treat only in pregnancy and before mucosa-breaching urology"],
      ],
    },
    {
      heading: "Significant bacteriuria criteria by specimen (EAU 2025, IDSA 2019)",
      columns: ["Setting", "Colony count (cfu/mL)", "Note"],
      rows: [
        ["Acute cystitis (MSU)", "10^3 or more", "Symptoms matter more than count"],
        ["Acute pyelonephritis (MSU)", "10^4 or more", "Always culture"],
        ["Complicated UTI", "10^5 or more in women, 10^4 or more in men", "Or catheter specimen in women"],
        ["Asymptomatic bacteriuria - women", "10^5 or more of same organism in 2 consecutive MSUs", "Screen and treat only in pregnancy"],
        ["Asymptomatic bacteriuria - men", "10^5 or more in a single MSU", "Do not treat unless before urological surgery"],
        ["Catheter specimen", "10^2 or more of a single organism", "In-out catheter sample"],
        ["Suprapubic aspirate", "Any growth", "Gold standard in infants"],
      ],
    },
    {
      heading: "International grading of vesicoureteric reflux on MCU (IRSG; Campbell 13e 2025)",
      columns: ["Grade", "MCU appearance", "Management"],
      rows: [
        ["Grade I", "Reflux into non-dilated ureter only", "High spontaneous resolution; observe"],
        ["Grade II", "Into pelvis and calyces without dilatation, normal fornices", "Observe; antibiotic prophylaxis if recurrent UTI"],
        ["Grade III", "Mild-moderate dilatation of ureter and pelvis, slight blunting of fornices", "Prophylaxis; endoscopic or surgical if breakthrough UTI"],
        ["Grade IV", "Moderate tortuosity and dilatation, obliterated fornices, papillary impressions kept", "Prophylaxis; low chance of resolution; consider surgery"],
        ["Grade V", "Gross dilatation and tortuosity, papillary impressions lost", "Surgical correction often needed"],
      ],
    },
  ],

  "renal-urology-luts-bph": [
    {
      heading: "ISUP 2014 grade groups for prostate cancer (WHO 2022, Campbell 13e 2025)",
      columns: ["Grade group", "Gleason score", "Pattern meaning"],
      rows: [
        ["Grade group 1", "6 or less (3+3)", "Only well-formed glands; candidate for active surveillance"],
        ["Grade group 2", "7 (3+4)", "Mostly well-formed glands, minor poorly formed"],
        ["Grade group 3", "7 (4+3)", "Mostly poorly formed or fused glands"],
        ["Grade group 4", "8 (4+4, 3+5, 5+3)", "High grade"],
        ["Grade group 5", "9-10 (4+5, 5+4, 5+5)", "Lacks gland formation or necrosis; worst prognosis"],
      ],
    },
    {
      heading: "PSA interpretation criteria (EAU 2025, Campbell 13e 2025)",
      columns: ["Measure", "Cut-off", "Meaning"],
      rows: [
        ["Total PSA - biopsy trigger", "3 ng/mL or more (EAU); 4 ng/mL traditional", "Repeat after a few weeks, then MRI before biopsy"],
        ["PSA 4-10 ng/mL", "Grey zone", "About 25% cancer on biopsy"],
        ["PSA over 10 ng/mL", "High", "Over 50% cancer on biopsy"],
        ["Age-specific upper limit", "40-49 y 2.5; 50-59 y 3.5; 60-69 y 4.5; 70-79 y 6.5 ng/mL", "Adjusts for gland growth with age"],
        ["Free/total PSA ratio", "Under 10% suggests cancer; over 25% suggests BPH", "Useful in 4-10 grey zone"],
        ["PSA density", "Over 0.15 ng/mL/cc suspicious", "PSA divided by gland volume on TRUS or MRI"],
        ["PSA velocity", "Over 0.75 ng/mL per year", "Weak independent value"],
        ["5-alpha reductase inhibitor", "Halves PSA after 6 months", "Double the value to interpret"],
      ],
    },
    {
      heading: "PI-RADS v2.1 scoring for prostate MRI (ACR/ESUR 2019)",
      columns: ["Category", "Likelihood of clinically significant cancer", "Action"],
      rows: [
        ["PI-RADS 1", "Very low - highly unlikely", "No biopsy unless other risk"],
        ["PI-RADS 2", "Low - unlikely", "No biopsy unless other risk"],
        ["PI-RADS 3", "Intermediate - equivocal", "Biopsy if PSA density 0.15 or more or other risk"],
        ["PI-RADS 4", "High - likely", "Targeted plus systematic biopsy"],
        ["PI-RADS 5", "Very high - highly likely", "Targeted plus systematic biopsy"],
      ],
    },
    {
      heading: "EAU risk group classification of localised prostate cancer (EAU 2025)",
      columns: ["Risk group", "Criteria", "Options"],
      rows: [
        ["Low risk", "PSA under 10 and ISUP 1 and cT1-2a", "Active surveillance preferred"],
        ["Intermediate risk", "PSA 10-20 or ISUP 2-3 or cT2b", "Surgery or radiotherapy with short ADT; AS in selected ISUP 2"],
        ["High risk", "PSA over 20 or ISUP 4-5 or cT2c", "Surgery with node dissection or RT with long-term ADT"],
        ["Locally advanced", "Any PSA, any ISUP, cT3-4 or cN+", "Multimodal therapy"],
      ],
    },
    {
      heading: "NCCN risk group classification of localised prostate cancer (NCCN 2025)",
      columns: ["Risk group", "Criteria"],
      rows: [
        ["Very low", "All low-risk features plus under 3 positive cores, 50% or less cancer per core, PSA density under 0.15"],
        ["Low", "cT1-T2a, grade group 1, PSA under 10, no higher-risk features"],
        ["Favourable intermediate", "1 intermediate factor (cT2b-c, GG 2-3, PSA 10-20), GG 1-2, under 50% cores positive"],
        ["Unfavourable intermediate", "2-3 intermediate factors, or GG 3, or 50% or more cores positive"],
        ["High", "Exactly one of: cT3a, GG 4-5, PSA over 20"],
        ["Very high", "cT3b-T4, primary Gleason 5, 2-3 high-risk features, or over 4 cores GG 4-5"],
      ],
    },
    {
      heading: "AJCC 8th TNM staging of prostate cancer - clinical T, N, M (Campbell 13e 2025)",
      columns: ["Category", "Definition"],
      rows: [
        ["T1a", "Incidental at TURP, 5% or less of resected tissue"],
        ["T1b", "Incidental at TURP, over 5% of resected tissue"],
        ["T1c", "Found on needle biopsy (for raised PSA), not palpable"],
        ["T2a", "Palpable, one-half of one lobe or less"],
        ["T2b", "More than half of one lobe, not both lobes"],
        ["T2c", "Both lobes involved"],
        ["T3a", "Extraprostatic extension, unilateral or bilateral"],
        ["T3b", "Seminal vesicle invasion"],
        ["T4", "Fixed or invading bladder, rectum, external sphincter, levators or pelvic wall"],
        ["N1", "Regional (pelvic) lymph node metastasis"],
        ["M1a / M1b / M1c", "Non-regional nodes / bone / other sites"],
      ],
    },
    {
      heading: "Types of urinary incontinence classification (ICS; EAU 2025)",
      columns: ["Type", "Features", "First-line treatment"],
      rows: [
        ["Stress", "Leak on cough, sneeze, exertion; sphincter or pelvic floor weakness", "Pelvic floor muscle training 3 months, weight loss; surgery"],
        ["Urgency", "Leak with sudden urge; detrusor overactivity", "Bladder training, antimuscarinic or mirabegron"],
        ["Mixed", "Both stress and urgency", "Treat the predominant symptom first"],
        ["Overflow", "Dribbling with chronic retention; BPH, neurogenic bladder, drugs", "Catheterise, treat obstruction"],
        ["Functional", "Continent tract but cannot reach toilet (mobility, cognition)", "Toileting schedule, environmental change"],
        ["Continuous", "Constant leak; fistula or ectopic ureter", "Imaging and surgical repair"],
      ],
    },
    {
      heading: "Uroflowmetry Qmax classification in male LUTS (EAU 2025)",
      columns: ["Qmax (voided volume over 150 mL)", "Meaning", "Note"],
      rows: [
        ["Over 15 mL/s", "Normal flow", "Obstruction unlikely; consider other causes"],
        ["10-15 mL/s", "Equivocal", "Pressure-flow study if surgery considered"],
        ["Under 10 mL/s", "Low flow", "Obstruction likely but cannot separate from weak detrusor"],
      ],
    },
  ],

  "renal-urology-renal-stones": [
    {
      heading: "Ureteric stone size classification and spontaneous passage (EAU 2025)",
      columns: ["Stone size", "Chance of spontaneous passage", "Management"],
      rows: [
        ["5 mm or less", "About 68%", "Analgesia (NSAID), watchful waiting 4-6 weeks"],
        ["Over 5-10 mm", "About 47%", "Medical expulsive therapy (tamsulosin) for distal stone"],
        ["Over 10 mm", "Low", "Active removal: URS or SWL"],
        ["Distal versus proximal", "Distal stones pass more often", "Proximal large stones - early intervention"],
        ["Urgent decompression", "Infection with obstruction, solitary kidney, anuria, uncontrolled pain", "Stent or nephrostomy first, stone later"],
      ],
    },
    {
      heading: "SFU grading of hydronephrosis on ultrasound (Campbell 13e 2025)",
      columns: ["Grade", "Ultrasound appearance", "Meaning"],
      rows: [
        ["Grade 0", "No dilatation, intact central renal complex", "Normal"],
        ["Grade 1", "Dilatation of renal pelvis only", "Usually physiological; follow up"],
        ["Grade 2", "Pelvis plus a few calyces dilated", "Follow up with ultrasound"],
        ["Grade 3", "Virtually all calyces dilated, parenchyma preserved", "Evaluate for obstruction or reflux"],
        ["Grade 4", "Grade 3 plus parenchymal thinning", "Significant obstruction; diuretic renogram, surgery likely"],
      ],
    },
    {
      heading: "Guy's stone score for PCNL complexity (Campbell 13e 2025)",
      columns: ["Grade", "Stone and anatomy", "Meaning"],
      rows: [
        ["Grade I", "Solitary stone in mid or lower pole, or in pelvis, with simple anatomy", "Highest stone-free rate"],
        ["Grade II", "Solitary upper pole stone, multiple stones with simple anatomy, or solitary stone with abnormal anatomy", "Moderate complexity"],
        ["Grade III", "Multiple stones with abnormal anatomy, calyceal diverticulum, or partial staghorn", "Lower stone-free rate"],
        ["Grade IV", "Complete staghorn, or any stone with spina bifida or spinal injury", "Lowest stone-free rate, more complications"],
      ],
    },
  ],
};

export default scores;
