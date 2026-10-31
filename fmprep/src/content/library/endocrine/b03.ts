import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "endocrine-diabetic-kidney-disease",
  title: "Diabetic kidney disease",
  frequency: "core",
  oneLiner:
    "**Diabetic kidney disease (DKD)** is CKD attributed to diabetes - a **persistently raised urine albumin-creatinine ratio (UACR 30 mg/g or more)** and/or **eGFR below 60 mL/min/1.73 m2** for more than 3 months - managed on four pillars: **maximum-tolerated ACE inhibitor or ARB, SGLT2 inhibitor (eGFR 20 or more), finerenone for residual albuminuria and a GLP-1 receptor agonist**, on a base of BP, glucose, lipid and lifestyle control.",
  keywords: [
    "DKD",
    "diabetic nephropathy",
    "CKD in diabetes",
    "UACR",
    "microalbuminuria",
    "moderately increased albuminuria",
    "Kimmelstiel-Wilson nodules",
    "KDIGO 2022",
    "KDIGO 2024",
    "finerenone",
    "FIDELIO-DKD",
    "FLOW trial",
    "semaglutide",
    "dapagliflozin",
    "empagliflozin",
    "CREDENCE",
    "KFRE",
    "eGFR dip",
    "renal dosing",
    "hyperkalaemia",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**DKD** is a clinical diagnosis: CKD (UACR **30 mg/g or more** and/or eGFR **under 60 mL/min/1.73 m2** for **more than 3 months**) in a person with diabetes, with no feature pointing to another cause - biopsy-proven lesions are called **diabetic nephropathy**. [KDIGO 2022]",
        "About **30-40%** of people with diabetes develop CKD; diabetes is the **leading cause of kidney failure** worldwide, accounting for roughly 30-50% of new dialysis starts. [Harrison 22e]",
        "In the **Indian CKD Registry**, diabetic nephropathy was the **commonest single cause of CKD (about 31%)**. [Indian CKD Registry 2012]",
        "In urban Chennai (**CURES**), microalbuminuria was found in about **27%** and overt nephropathy in about **2%** of people with type 2 diabetes. [CURES 2007]",
        "In **type 1 diabetes** albuminuria rarely appears before **5 years** of disease; in **type 2 diabetes** up to 10-20% already have albuminuria or low eGFR at diagnosis because onset is silent. [ADA 2026]",
        "Most people with DKD **die of cardiovascular disease before reaching dialysis** - albuminuria and low eGFR each independently multiply cardiovascular risk. [KDIGO 2022]",
        "Up to **half of type 2 patients with low eGFR have no albuminuria** (non-albuminuric DKD), so screening must use **both UACR and eGFR**. [ADA 2026]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "**Duration and glycaemia**: risk rises with years of diabetes and HbA1c; DCCT/EDIC and UKPDS showed intensive control lowers incident albuminuria by about **30-40%**. [Harrison 22e]",
        "**Hypertension** both causes and results from DKD; uncontrolled BP accelerates eGFR loss more than any other modifiable factor. [KDIGO 2022]",
        "**Genetic susceptibility**: familial clustering, and higher risk in South Asians, African and Indigenous populations than in white Europeans at the same HbA1c. [Harrison 22e]",
        "**Obesity, smoking, dyslipidaemia** and **high dietary sodium and protein** add to progression. [KDIGO 2022]",
        "**Low nephron number** from fetal undernutrition (low birth weight) is proposed as a reason Indians develop CKD earlier. [Harrison 22e]",
        "**Recurrent AKI** - dehydration, sepsis, NSAIDs, contrast and herbal or indigenous medicines - steps CKD down; ask specifically about painkiller and Ayurvedic powder use in India. [ICMR STW 2023]",
        "**Diabetic retinopathy** is a marker of microvascular susceptibility - its presence makes DKD the likely cause of kidney disease, especially in type 1. [KDIGO 2022]",
      ],
    },
    {
      heading: "Pathophysiology",
      points: [
        "**Hyperfiltration first**: high filtered glucose up-regulates proximal tubular **SGLT2**, so more sodium is reabsorbed with glucose; less NaCl reaches the **macula densa**, tubuloglomerular feedback dilates the afferent arteriole and glomerular pressure rises. [Harrison 22e]",
        "**Angiotensin II** constricts the **efferent arteriole**, further raising intraglomerular pressure - the reason **ACE inhibitors and ARBs** (efferent dilation) and **SGLT2 inhibitors** (restore TGF, afferent constriction) both protect the kidney and both cause an early, acceptable **eGFR dip**. [KDIGO 2022]",
        "**Metabolic injury**: advanced glycation end-products, PKC activation, the polyol pathway and oxidative stress thicken the **glomerular basement membrane** and expand the **mesangium**. [Harrison 22e]",
        "**Podocyte loss and slit-diaphragm damage** let albumin through; filtered albumin is itself toxic to tubules, driving **tubulointerstitial inflammation and fibrosis** - which correlates best with eGFR loss. [Brenner and Rector 11e]",
        "**Mineralocorticoid receptor overactivation** in kidney and heart promotes inflammation and fibrosis independent of BP - the target of the **non-steroidal MRA finerenone**. [KDIGO 2022]",
        "**Nodular glomerulosclerosis (Kimmelstiel-Wilson nodules)** - PAS-positive mesangial nodules - is the classic lesion; **arteriolar hyalinosis of both afferent and efferent arterioles** is characteristic of diabetes. [Robbins 10e]",
        "Kidneys stay **normal-sized or enlarged** in DKD until late, unlike most CKD - so normal-sized kidneys on ultrasound do not exclude advanced disease. [Harrison 22e]",
        "**Insulin is partly cleared by the kidney**: as eGFR falls, insulin and sulfonylureas accumulate and renal gluconeogenesis falls, so **hypoglycaemia becomes more common and HbA1c may fall without treatment change**. [ADA 2026]",
      ],
    },
    {
      heading: "Classification and staging",
      points: [
        "**KDIGO CGA staging** is the one to write: Cause, GFR category (**G1 90 or more, G2 60-89, G3a 45-59, G3b 30-44, G4 15-29, G5 under 15**) and Albuminuria category (**A1 under 30, A2 30-300, A3 over 300 mg/g**). [KDIGO 2024]",
        "The **heat map** combines G and A: green (low risk), yellow, orange and red (very high risk) - it sets monitoring frequency (**1, 1, 2, 3 and 4 or more times a year**) and referral. [KDIGO 2024]",
        "**Mogensen stages** (type 1, historical): 1 hyperfiltration/hypertrophy, 2 silent lesions, 3 incipient nephropathy (microalbuminuria), 4 overt nephropathy (macroalbuminuria, falling GFR), 5 ESKD. [Mogensen 1983]",
        "Old terms: **microalbuminuria** = 30-300 mg/g (now **moderately increased, A2**); **macroalbuminuria** = over 300 mg/g (now **severely increased, A3**); KDIGO recommends the new terms. [KDIGO 2024]",
        "**Renal Pathology Society classification** (Tervaert 2010): class I GBM thickening, IIa mild and IIb severe mesangial expansion, **III nodular sclerosis (Kimmelstiel-Wilson)**, IV advanced sclerosis (over 50% glomeruli). [RPS 2010]",
        "Phenotypes: **albuminuric with falling eGFR** (classic), **non-albuminuric DKD** (older, vascular, type 2), and **rapid decliners** (eGFR loss over 5 mL/min/year). [ADA 2026]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "Usually **asymptomatic** until G4 - picked up only on UACR and eGFR screening; this is the core message for OPD practice. [ADA 2026]",
        "**Frothy urine** suggests heavy proteinuria; **swelling of feet and face** suggests nephrotic-range proteinuria or fluid retention. [Harrison 22e]",
        "**Uraemic symptoms** in G4-G5: anorexia, nausea, morning vomiting, pruritus, fatigue, hiccups, restless legs, reduced urine output. [Harrison 22e]",
        "**Falling insulin needs or new hypoglycaemia** in a long-standing diabetic is a clue to declining eGFR. [ADA 2026]",
        "Ask for **co-existing microvascular disease** - visual loss (retinopathy), tingling feet (neuropathy) - and for **ischaemic heart disease, stroke, claudication**. [KDIGO 2022]",
        "**Drug history**: NSAIDs, aminoglycosides, lithium, PPIs, herbal powders, contrast exposure, and current doses of metformin, sulfonylureas and gliptins. [ICMR STW 2023]",
        "**Atypical clues to another disease**: haematuria, rash, joint pains, haemoptysis, sudden-onset nephrotic syndrome or rapidly rising creatinine. [KDIGO 2022]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Blood pressure** seated after 5 minutes, both arms at first visit, and **standing BP** (autonomic neuropathy causes orthostatic hypotension that limits BP drugs). [KDIGO 2021 BP]",
        "**Pedal and periorbital oedema**, ascites or pleural effusion with heavy albuminuria (nephrotic picture). [Harrison 22e]",
        "**Pallor** - anaemia of CKD appears earlier in diabetes than in other CKD at the same eGFR. [KDIGO 2012 anaemia]",
        "**Dilated fundoscopy**: retinopathy supports DKD; its absence in a type 1 patient with proteinuria prompts a search for another cause. [KDIGO 2022]",
        "**Feet**: neuropathy, pulses and ulcers - DKD patients have a higher amputation risk. [IWGDF 2023]",
        "**Uraemic signs** late: sallow skin, scratch marks, asterixis, pericardial rub, Kussmaul breathing of metabolic acidosis. [Harrison 22e]",
        "**Renal bruit** with resistant hypertension or a big eGFR fall on ACE inhibitor suggests **renal artery stenosis**. [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Non-diabetic kidney disease** coexists in up to a third of biopsied type 2 diabetics with atypical features. [Harrison 22e]",
        "Suspect another cause if: **no retinopathy** (especially type 1), **diabetes under 5 years** (type 1), **active sediment** (dysmorphic RBC, RBC casts), **sudden nephrotic syndrome**, **rapid eGFR fall**, or systemic disease features. [KDIGO 2022]",
        "**Hypertensive nephrosclerosis**: long-standing hypertension, modest proteinuria, small kidneys, often no retinopathy beyond hypertensive changes. [Harrison 22e]",
        "**Renovascular disease**: eGFR fall over 30% after starting ACE inhibitor/ARB, flash pulmonary oedema, asymmetric kidneys. [KDIGO 2022]",
        "**Membranous nephropathy, IgA nephropathy, MCD and FSGS** are the commonest non-diabetic lesions on biopsy in Indian series; anti-PLA2R antibody helps with membranous. [KDIGO 2021 GN]",
        "**Obstructive uropathy** (prostate, neurogenic bladder from autonomic neuropathy) and **chronic pyelonephritis/papillary necrosis** from recurrent UTI. [Harrison 22e]",
        "**Transient albuminuria** - fever, exercise in last 24 h, UTI, heart failure, marked hyperglycaemia, menstruation - repeat UACR before labelling. [ADA 2026]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**Spot morning UACR** is the screening test (not dipstick); confirm with **2 of 3 samples abnormal over 3-6 months**. [ADA 2026]",
        "**Serum creatinine with eGFR by the race-free CKD-EPI 2021 equation**; add **cystatin C (eGFRcr-cys)** when creatinine is unreliable - extremes of muscle mass, amputees, vegetarians, cirrhosis. [KDIGO 2024]",
        "**Urine microscopy** for RBCs and casts; a positive dipstick with no albumin suggests non-albumin protein (myeloma, tubular). [KDIGO 2024]",
        "**Serum potassium, bicarbonate, haemoglobin, calcium, phosphate, PTH and 25-OH vitamin D** from G3a onwards. [KDIGO 2024]",
        "**Ultrasound kidneys**: size, echogenicity, obstruction, post-void residual; asymmetry over 1.5 cm suggests renovascular disease. [Harrison 22e]",
        "**HbA1c is unreliable in G4-G5** (anaemia, iron, ESA, uraemia) - use CGM-derived **glucose management indicator** or SMBG. [KDIGO 2022]",
        "**Kidney Failure Risk Equation (KFRE)** - age, sex, eGFR, UACR - gives the 2- and 5-year risk of kidney failure and guides referral. [KDIGO 2024]",
        "**Kidney biopsy** only when non-diabetic disease is suspected (see differential) - not for routine DKD. [KDIGO 2022]",
      ],
    },
    {
      heading: "Management in OPD and primary care",
      points: [
        "**Lifestyle**: salt under **2 g sodium (5 g salt) a day**, protein **0.8 g/kg/day** (avoid over 1.3 g/kg), **150 minutes/week** moderate exercise, stop smoking, weight loss if obese. [KDIGO 2022]",
        "**ACE inhibitor or ARB** (e.g. **ramipril 2.5 mg OD up to 10 mg**, telmisartan 40-80 mg, losartan 50-100 mg) for diabetes with hypertension **and** albuminuria, titrated to the **maximum tolerated dose**; never combine ACEi with ARB. [KDIGO 2022]",
        "Check **creatinine and potassium 2-4 weeks** after starting or raising RAS blockade; **accept creatinine rise up to 30%**; hold or reduce if K over 5.5 mmol/L. [KDIGO 2022]",
        "**SGLT2 inhibitor** - **dapagliflozin 10 mg OD or empagliflozin 10 mg OD** - for all type 2 diabetes with CKD and **eGFR 20 or more**, irrespective of HbA1c; continue until dialysis or transplant. [KDIGO 2022]",
        "**Finerenone** for type 2 diabetes with **eGFR 25 or more, UACR 30 mg/g or more and normal potassium** despite maximum RAS blockade: **10 mg OD if eGFR 25-59, 20 mg OD if 60 or more**; increase to 20 mg at 4 weeks if K 4.8 or less. [KDIGO 2022]",
        "**GLP-1 receptor agonist** with proven kidney benefit - **semaglutide 0.25 mg weekly SC, titrated to 1 mg** (FLOW) - when glycaemic targets are not met or for extra cardiorenal protection; usable down to eGFR 15 without dose change. [ADA 2026]",
        "**Metformin** while eGFR 30 or more - full dose if 45 or more, **maximum 1000 mg/day at 30-44**, **stop below 30**. [KDIGO 2022]",
        "**Statin** for all with diabetes and CKD (e.g. **atorvastatin 20-40 mg**, no renal adjustment); aspirin only for established ASCVD. [KDIGO 2024]",
        "**HbA1c target individualised from under 6.5% to under 8.0%** - looser with advanced CKD, hypoglycaemia risk, short life expectancy. [KDIGO 2022]",
        "**BP target**: SBP **under 120 mmHg** if tolerated with standardised measurement (KDIGO 2021) or **under 130/80** (ADA 2026) - give both and use clinical judgement in the frail. [KDIGO 2021 BP]",
      ],
    },
    {
      heading: "Management in IPD and emergency",
      points: [
        "**Admit** for AKI on CKD, K over 6.0 mmol/L or ECG changes, fluid overload/pulmonary oedema, uraemic encephalopathy or pericarditis, severe metabolic acidosis, or recurrent hypoglycaemia. [ICMR STW 2023]",
        "**Hyperkalaemia**: ECG; **calcium gluconate 10% 10 mL IV over 5-10 min** if ECG changes; **regular insulin 10 units IV with 25 g glucose** (50 mL of 50% dextrose); salbutamol 10-20 mg nebulised; then a binder and stop culprits. [UK Kidney Association 2023]",
        "Potassium binders: **sodium zirconium cyclosilicate** or **patiromer** enable continuation of RAS blockade/finerenone where available; **calcium polystyrene sulfonate 15 g 3-4 times daily** is the widely available Indian option. [KDIGO 2024]",
        "**AKI**: stop metformin, SGLT2i, ACEi/ARB, finerenone, diuretics and NSAIDs while acutely ill (sick-day rules); restart once eating and creatinine is stable. [KDIGO 2022]",
        "**Insulin in hospital**: reduce doses by about **25%** when eGFR falls sharply; prefer basal-bolus over sliding scale; watch for prolonged hypoglycaemia with sulfonylureas (needs dextrose infusion and observation). [ADA 2026]",
        "**Emergency dialysis indications (AEIOU)**: refractory **A**cidosis, **E**lectrolytes (K), **I**ntoxication, refractory **O**verload, **U**raemic complications (pericarditis, encephalopathy, bleeding). [Harrison 22e]",
        "**Contrast**: avoid unnecessary contrast; give isotonic saline pre-hydration if eGFR under 30 and hold metformin 48 h around iodinated contrast when eGFR is under 30 or AKI is present. [ACR Contrast Manual 2024]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: stop ACEi/ARB, SGLT2i, finerenone and GLP-1RA before conception; use **labetalol, nifedipine or methyldopa** and insulin; DKD raises **pre-eclampsia** risk - start **aspirin 150 mg at night from 12 weeks**. [FOGSI 2023]",
        "**Type 1 diabetes**: ACEi/ARB for albuminuria; SGLT2i and finerenone are **not licensed** in type 1 (DKA risk; trials ongoing). [ADA 2026]",
        "**Children and adolescents with type 1**: start UACR screening at **puberty or age 10, after 5 years of diabetes**, then yearly. [ISPAD 2022]",
        "**Elderly and frail**: relax HbA1c (under 8.0%) and SBP targets, watch orthostatic hypotension and hyperkalaemia, and stop drugs that only treat numbers. [ADA 2026]",
        "**Dialysis**: stop SGLT2i, metformin, finerenone; insulin (reduced doses), linagliptin, GLP-1RA (with caution) and short-acting glipizide are options. [KDIGO 2022]",
        "**Kidney transplant**: post-transplant diabetes is common with tacrolimus and steroids; SGLT2i use after transplant is expanding but guidelines do not yet mandate it. [KDIGO 2022]",
        "**Resource-limited setting**: telmisartan/losartan, generic dapagliflozin and atorvastatin are low-cost; **UACR by point-of-care strip** or, failing that, the **urine protein-creatinine ratio** is acceptable. [ICMR STW 2023]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Cardiovascular events and heart failure** are the leading cause of death; each step up in albuminuria and down in eGFR increases risk. [KDIGO 2022]",
        "**Anaemia** (erythropoietin deficiency, iron deficiency), **CKD-mineral bone disorder** (hyperphosphataemia, secondary hyperparathyroidism) and **metabolic acidosis** from G3b. [KDIGO 2024]",
        "**Hyperkalaemia** - type 4 RTA (hyporeninaemic hypoaldosteronism) is common in DKD even at modest eGFR, and worsens with RAS blockade. [Harrison 22e]",
        "**Hypoglycaemia** from reduced insulin clearance and sulfonylurea accumulation. [ADA 2026]",
        "Untreated macroalbuminuria loses eGFR at about **10-12 mL/min/year**; modern four-pillar therapy can slow this to near-physiological decline. [Harrison 22e]",
        "**Survival on dialysis** is worse in diabetics than non-diabetics, largely from cardiovascular disease and infection. [Harrison 22e]",
        "A **fall in albuminuria by 30% or more** on treatment predicts slower progression and is a useful treatment response marker. [KDIGO 2022]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "**Screen** UACR and eGFR **at diagnosis of type 2** and **5 years after diagnosis of type 1**, then **at least yearly**; more often with established CKD per the heat map. [ADA 2026]",
        "**Refer to nephrology** if eGFR **under 30**, persistent **UACR 300 mg/g or more**, sustained eGFR fall over **25%** or over **5 mL/min/year**, uncertain cause, refractory hyperkalaemia or resistant hypertension. [KDIGO 2024]",
        "KDIGO 2024 also advises referral when the **5-year KFRE risk is 3-5% or more**, and planning for kidney replacement therapy when the **2-year risk exceeds 40%**. [KDIGO 2024]",
        "**Monitor** UACR and eGFR (frequency by heat map), potassium after every RAS/finerenone change, HbA1c 3-6 monthly, lipids yearly, Hb and bone profile from G3. [KDIGO 2024]",
        "**Vaccinate**: hepatitis B (before dialysis), influenza yearly, pneumococcal. [ADA 2026]",
        "**Protect veins** in the non-dominant arm in G4 for future fistula - avoid cannulation and blood draws there. [KDIGO 2024]",
      ],
    },
    {
      heading: "Prevention, counselling and programme links",
      points: [
        "**Good glycaemic and BP control from diagnosis** prevents albuminuria - the legacy effect of early control persists for decades (UKPDS, DCCT/EDIC). [Harrison 22e]",
        "**NP-NCD** screening at **Ayushman Arogya Mandir** (over 30 years) identifies diabetes and hypertension; UACR and creatinine should follow at the CHC or district NCD clinic. [MoHFW NP-NCD 2023]",
        "**Pradhan Mantri National Dialysis Programme** provides free haemodialysis (and peritoneal dialysis) at district hospitals for BPL families under PPP mode. [MoHFW PMNDP 2016]",
        "Counsel on **NSAID avoidance**, herbal/indigenous medicine risks, hydration in heat and illness, and **sick-day rules** (see Diabetes in special situations topic). [KDIGO 2022]",
        "**Jan Aushadhi** stocks telmisartan, losartan, atorvastatin, metformin and SGLT2 inhibitors at low cost - cost is the major barrier to four-pillar therapy in India. [PMBJP 2024]",
        "Teach the patient to know their **eGFR and UACR numbers** and to show their drug list to every prescriber. [KDIGO 2024]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**KDIGO 2022 Diabetes in CKD**: SGLT2i for eGFR **20 or more** (was 30), continue until dialysis; finerenone for residual albuminuria; GLP-1RA as preferred add-on; **HbA1c target under 6.5% to under 8.0%**. [KDIGO 2022]",
        "**KDIGO 2024 CKD guideline**: race-free CKD-EPI 2021, wider cystatin C use, KFRE-based referral, and **SGLT2i for CKD with eGFR 20 or more** in diabetes and many non-diabetic patients. [KDIGO 2024]",
        "**FLOW trial (2024)**: **semaglutide 1 mg weekly** cut major kidney disease events by **24%** in type 2 diabetes with CKD - first GLP-1RA with a dedicated kidney-outcome indication. [NEJM 2024]",
        "**ADA Standards 2025-2026**: recommend a GLP-1RA with demonstrated benefit (semaglutide) to reduce kidney and CV outcomes in T2D with CKD, alongside SGLT2i and finerenone. [ADA 2026]",
        "**CONFIDENCE (2025)**: starting **finerenone plus empagliflozin together** lowered UACR more (about 52%) than either alone (about 30%) - supports simultaneous rather than sequential pillars. [NEJM 2025]",
        "**FINEARTS-HF (2024)**: finerenone reduced heart failure events in HFmrEF/HFpEF - another reason it fits the cardiorenal patient. [NEJM 2024]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic long question: **'Discuss screening, staging and management of diabetic nephropathy'** - draw the KDIGO heat map and the four-pillar ladder. [Exam pattern]",
        "Viva: **why does eGFR dip after SGLT2i or ACEi?** - lowered intraglomerular pressure; up to 30% is acceptable and predicts long-term benefit. [KDIGO 2022]",
        "Common mistake: using **dipstick protein** for screening, or labelling albuminuria from a **single UACR**. [ADA 2026]",
        "Common mistake: **stopping SGLT2i because eGFR is under 45** - glycaemic effect falls, but kidney and heart protection continues down to 20. [KDIGO 2022]",
        "Common mistake: **combining ACEi and ARB** (ONTARGET, VA NEPHRON-D - more hyperkalaemia and AKI, no benefit). [KDIGO 2022]",
        "Kimmelstiel-Wilson nodules = **nodular glomerulosclerosis, RPS class III**; also seen in light-chain deposition and amyloid (differential on biopsy). [Robbins 10e]",
        "Know trial names: **RENAAL, IDNT** (ARBs), **CREDENCE, DAPA-CKD, EMPA-KIDNEY** (SGLT2i), **FIDELIO/FIGARO-DKD** (finerenone), **FLOW** (semaglutide). [Harrison 22e]",
      ],
    },
  ],
  tables: [
    {
      heading: "KDIGO CGA staging and monitoring frequency (times per year)",
      columns: ["GFR category (mL/min/1.73 m2)", "A1: UACR under 30 mg/g", "A2: UACR 30-300 mg/g", "A3: UACR over 300 mg/g"],
      rows: [
        ["G1: 90 or more", "Low risk - 1 (if CKD)", "Moderate - 1", "High - 2"],
        ["G2: 60-89", "Low risk - 1 (if CKD)", "Moderate - 1", "High - 2"],
        ["G3a: 45-59", "Moderate - 1", "High - 2", "Very high - 3"],
        ["G3b: 30-44", "High - 2", "Very high - 3", "Very high - 3"],
        ["G4: 15-29", "Very high - 3", "Very high - 3", "Very high - 4 or more"],
        ["G5: under 15", "Very high - 4 or more", "Very high - 4 or more", "Very high - 4 or more"],
      ],
    },
    {
      heading: "Kidney-protective drugs in diabetic kidney disease",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Ramipril (ACEi)", "2.5 mg OD oral, up to 10 mg OD", "Double every 2-4 weeks to maximum tolerated; lifelong", "Cough, angioedema, hyperkalaemia, AKI; contraindicated in pregnancy and bilateral RAS"],
        ["Telmisartan / losartan (ARB)", "Telmisartan 40-80 mg OD; losartan 50-100 mg OD oral", "Titrate to maximum tolerated; lifelong", "Hyperkalaemia, AKI, hypotension; teratogenic; never with ACEi"],
        ["Dapagliflozin / empagliflozin (SGLT2i)", "10 mg OD oral, no titration", "Start if eGFR 20 or more; continue until dialysis", "Genital mycosis, volume depletion, euglycaemic DKA; hold 3 days before surgery and when acutely ill"],
        ["Finerenone (ns-MRA)", "10 mg OD if eGFR 25-59; 20 mg OD if 60 or more", "Up to 20 mg at 4 weeks if K 4.8 or less; hold if K over 5.5", "Hyperkalaemia; avoid with strong CYP3A4 inhibitors (ketoconazole, clarithromycin); not in type 1"],
        ["Semaglutide (GLP-1RA)", "0.25 mg SC weekly x 4 weeks, then 0.5 mg, then 1 mg", "Step up every 4 weeks; long-term", "Nausea, vomiting, gallstones, rapid retinopathy worsening; avoid with MTC/MEN2 history"],
        ["Atorvastatin", "10-40 mg OD oral", "Lifelong; no renal adjustment", "Myalgia, raised transaminases; do not start de novo on dialysis"],
      ],
    },
    {
      heading: "Glucose-lowering drug dosing by eGFR (mL/min/1.73 m2)",
      columns: ["Drug", "eGFR 45 or more", "eGFR 30-44", "eGFR under 30 / dialysis"],
      rows: [
        ["Metformin", "Full dose (up to 2 g/day)", "Maximum 1000 mg/day; do not start new", "Stop"],
        ["Gliclazide / glipizide", "Usual dose", "Start low, monitor glucose", "Use with caution; glipizide preferred"],
        ["Glimepiride / glibenclamide", "Glimepiride 1 mg start; avoid glibenclamide", "Glimepiride with caution", "Avoid both"],
        ["Sitagliptin", "100 mg OD", "50 mg OD", "25 mg OD"],
        ["Linagliptin / teneligliptin", "5 mg / 20 mg OD", "No change", "No change (linagliptin preferred)"],
        ["Vildagliptin", "50 mg BD", "50 mg OD", "50 mg OD"],
        ["Dapagliflozin / empagliflozin", "10 mg OD (glucose and organ benefit)", "10 mg OD (organ benefit, less glucose effect)", "Start/continue down to 20; stop on dialysis"],
        ["GLP-1RA (semaglutide, dulaglutide, liraglutide)", "No change", "No change", "No change to eGFR 15; caution on dialysis"],
        ["Pioglitazone", "No change", "No change", "No change but fluid retention and fracture risk"],
        ["Insulin", "Usual", "Reduce and titrate carefully", "Often 25-50% lower dose; hypoglycaemia risk"],
      ],
    },
    {
      heading: "DKD versus non-diabetic kidney disease",
      columns: ["Feature", "Favours DKD", "Favours non-diabetic disease (consider biopsy)"],
      rows: [
        ["Diabetes duration", "Over 5-10 years (type 1)", "Under 5 years in type 1"],
        ["Retinopathy", "Present", "Absent, especially in type 1"],
        ["Urine sediment", "Bland", "Dysmorphic RBCs, RBC casts"],
        ["Onset of proteinuria", "Gradual rise over years", "Sudden nephrotic syndrome"],
        ["eGFR trajectory", "Slow decline", "Rapid fall or over 30% fall after ACEi/ARB"],
        ["Systemic features", "None", "Rash, arthritis, haemoptysis, low complement, positive ANA/ANCA/PLA2R"],
        ["Kidney size", "Normal or large", "Small (hypertensive) or asymmetric (renovascular)"],
      ],
    },
    {
      heading: "Albuminuria measurement and cut-offs",
      columns: ["Test", "Normal (A1)", "Moderately increased (A2)", "Severely increased (A3)"],
      rows: [
        ["UACR (mg/g)", "Under 30", "30-300", "Over 300"],
        ["UACR (mg/mmol)", "Under 3", "3-30", "Over 30"],
        ["24-hour albumin excretion (mg/day)", "Under 30", "30-300", "Over 300"],
        ["Urine PCR (mg/g)", "Under 150", "150-500", "Over 500"],
        ["Dipstick protein", "Negative to trace", "Trace to +", "+ or more"],
      ],
    },
  ],
  redFlags: [
    "**Serum potassium 6.0 mmol/L or more** or hyperkalaemic ECG changes (peaked T, wide QRS)",
    "**eGFR fall over 30% within 2-3 months** of starting ACEi/ARB - think renal artery stenosis or volume depletion",
    "**Active urine sediment** (RBC casts) or sudden nephrotic syndrome - suspect glomerulonephritis",
    "**Uraemic features**: pericardial rub, encephalopathy, asterixis, bleeding",
    "**Pulmonary oedema or anuria**",
    "**Recurrent or prolonged hypoglycaemia** on sulfonylurea or insulin with falling eGFR",
    "**eGFR under 30** or 2-year KFRE risk over 40% without a nephrology plan",
  ],
  pearls: [
    "**Screen with UACR plus eGFR, never dipstick alone; confirm with 2 of 3 samples over 3-6 months.**",
    "Four pillars: **RAS blocker + SGLT2i + finerenone + GLP-1RA** - start early, ideally together.",
    "**eGFR dip up to 30%** after ACEi/ARB or SGLT2i = haemodynamic and protective; do not stop.",
    "**SGLT2i: start if eGFR 20 or more, continue till dialysis** - glucose effect fades below 45, kidney benefit does not.",
    "**Finerenone needs K 4.8 or less to start** and eGFR 25 or more; recheck K at 4 weeks.",
    "**No retinopathy + proteinuria in type 1 = look for another disease.**",
    "Kidneys stay **normal or large** in DKD - size does not rule it out.",
    "**Metformin: full above 45, halve at 30-44, stop below 30.**",
    "Falling insulin needs and new hypoglycaemia in old diabetic = **check eGFR**.",
  ],
  mcqs: [
    {
      id: "endocrine-diabetic-kidney-disease-q1",
      stem: "A 56-year-old man with type 2 diabetes for 9 years has eGFR 48 mL/min/1.73 m2 and UACR 420 mg/g on telmisartan 80 mg daily and metformin. Serum potassium is 4.6 mmol/L. Which addition has the strongest evidence to slow kidney failure?",
      options: [
        "Dapagliflozin 10 mg once daily",
        "Adding ramipril 10 mg to telmisartan",
        "Spironolactone 50 mg once daily",
        "Glimepiride 2 mg once daily",
      ],
      answer: 0,
      explanation:
        "An SGLT2 inhibitor such as dapagliflozin is recommended for type 2 diabetes with CKD and eGFR 20 or more regardless of HbA1c (DAPA-CKD, CREDENCE, EMPA-KIDNEY). Dual ACEi plus ARB increases hyperkalaemia and AKI without benefit (ONTARGET, VA NEPHRON-D). Spironolactone is a steroidal MRA without kidney-outcome evidence and with high hyperkalaemia risk; finerenone is the evidence-based MRA. Glimepiride lowers glucose but has no kidney-protective effect.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetic-kidney-disease-q2",
      stem: "Two weeks after starting empagliflozin, a patient's eGFR falls from 52 to 44 mL/min/1.73 m2. He is well, euvolaemic and potassium is normal. What is the best action?",
      options: [
        "Stop empagliflozin and refer to nephrology",
        "Switch empagliflozin to a DPP-4 inhibitor",
        "Order renal Doppler for renal artery stenosis",
        "Continue empagliflozin and recheck renal function",
      ],
      answer: 3,
      explanation:
        "An early eGFR dip (here about 15%) after an SGLT2 inhibitor reflects restored tubuloglomerular feedback and lower intraglomerular pressure; dips up to 30% are expected, and the drug should be continued. Stopping or switching to a gliptin throws away kidney and heart protection. A renovascular work-up is considered only when the fall exceeds 30% or there are other clues, such as with ACEi/ARB in bilateral stenosis.",
      difficulty: "easy",
    },
    {
      id: "endocrine-diabetic-kidney-disease-q3",
      stem: "Which finding in a patient with type 1 diabetes and nephrotic-range proteinuria most strongly suggests a non-diabetic cause and prompts kidney biopsy?",
      options: [
        "Diabetes duration of 14 years",
        "Absence of diabetic retinopathy on dilated fundoscopy",
        "Enlarged kidneys on ultrasound",
        "Hypertension of 150/90 mmHg",
      ],
      answer: 1,
      explanation:
        "In type 1 diabetes, DKD almost always accompanies retinopathy; proteinuria without retinopathy suggests another glomerular disease and warrants biopsy. A duration over 10 years is typical of DKD. Kidneys in DKD are normal-sized or enlarged, so enlargement fits DKD. Hypertension is a common accompaniment of DKD and does not point elsewhere.",
      difficulty: "moderate",
    },
    {
      id: "endocrine-diabetic-kidney-disease-q4",
      stem: "A woman with type 2 diabetes has eGFR 40 mL/min/1.73 m2, UACR 180 mg/g despite losartan 100 mg and dapagliflozin, and potassium 4.5 mmol/L. Finerenone is planned. What is the correct starting dose?",
      options: [
        "20 mg once daily",
        "5 mg once daily",
        "10 mg once daily",
        "25 mg twice daily",
      ],
      answer: 2,
      explanation:
        "Finerenone starts at 10 mg once daily when eGFR is 25-59 and 20 mg when eGFR is 60 or more, provided potassium is 4.8 mmol/L or less; it is increased to 20 mg after 4 weeks if potassium allows. Starting at 20 mg is for eGFR 60 or more. Five mg is not a finerenone dose, and 25 mg twice daily is an eplerenone-like regimen, not finerenone.",
      difficulty: "hard",
    },
    {
      id: "endocrine-diabetic-kidney-disease-q5",
      stem: "According to KDIGO, a person with eGFR 35 mL/min/1.73 m2 and UACR 50 mg/g falls into which category, and how often should kidney function be monitored?",
      options: [
        "G3a A2; once a year",
        "G4 A1; twice a year",
        "G3b A3; four times a year",
        "G3b A2; three times a year",
      ],
      answer: 3,
      explanation:
        "eGFR 30-44 is G3b and UACR 30-300 mg/g is A2; on the KDIGO heat map G3b A2 is very high risk, monitored about three times a year. G3a is 45-59, so the first choice misplaces the eGFR. G4 begins below 30 and A1 is under 30 mg/g. A3 is over 300 mg/g, so the albuminuria is overstated in the remaining choice.",
      difficulty: "easy",
    },
  ],
  theory: [
    {
      id: "endocrine-diabetic-kidney-disease-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "core",
      question:
        "Discuss the pathogenesis, screening, staging and current management of diabetic kidney disease in a family medicine setting.",
      openingLines: [
        "Diabetic kidney disease is CKD attributed to diabetes - persistent UACR 30 mg/g or more and/or eGFR under 60 mL/min/1.73 m2 for over 3 months - and is the commonest cause of CKD in India (about 31% in the Indian CKD Registry).",
        "It is silent until late, so detection depends on yearly UACR and eGFR, and management now rests on four pillars: RAS blockade, SGLT2 inhibitor, finerenone and GLP-1 receptor agonist (KDIGO 2022, ADA 2026).",
      ],
      answer: [
        {
          heading: "Pathogenesis",
          points: [
            "SGLT2 up-regulation - less NaCl at macula densa - afferent dilation - **hyperfiltration**.",
            "Angiotensin II efferent constriction raises glomerular pressure.",
            "AGEs, PKC, polyol pathway - GBM thickening, mesangial expansion, **Kimmelstiel-Wilson nodules**.",
            "Podocyte loss - albuminuria - tubulointerstitial fibrosis; MR overactivation adds inflammation.",
          ],
        },
        {
          heading: "Screening",
          points: [
            "UACR + eGFR at diagnosis of T2D and 5 years after T1D, then yearly.",
            "Confirm with **2 of 3 UACR** over 3-6 months; exclude fever, UTI, exercise, menstruation.",
            "eGFR by race-free CKD-EPI 2021; cystatin C if muscle mass abnormal.",
          ],
        },
        {
          heading: "Staging",
          points: [
            "KDIGO CGA: G1-G5 and A1-A3; heat map decides monitoring (1-4 times a year).",
            "Mogensen stages 1-5 for type 1 (historical).",
            "RPS pathology classes I-IV.",
          ],
        },
        {
          heading: "Management - lifestyle and risk factors",
          points: [
            "Salt under 5 g/day, protein 0.8 g/kg/day, exercise 150 min/week, stop smoking.",
            "BP under 130/80 (ADA) or SBP under 120 if tolerated (KDIGO 2021).",
            "HbA1c 6.5% to under 8% individualised; statin for all.",
          ],
        },
        {
          heading: "Management - four pillars",
          points: [
            "**ACEi/ARB** to maximum tolerated dose if albuminuria with hypertension; check K and creatinine at 2-4 weeks.",
            "**SGLT2i** (dapagliflozin/empagliflozin 10 mg) if eGFR 20 or more, until dialysis.",
            "**Finerenone** 10-20 mg if UACR 30 or more, eGFR 25 or more, K 4.8 or less.",
            "**GLP-1RA** (semaglutide 1 mg weekly - FLOW) for glucose and cardiorenal benefit.",
          ],
        },
        {
          heading: "Drug dosing and safety",
          points: [
            "Metformin full above 45, max 1 g at 30-44, stop below 30; avoid glibenclamide; dose-adjust sitagliptin.",
            "Sick-day rules: hold metformin, SGLT2i, ACEi/ARB, diuretics, NSAIDs when dehydrated.",
          ],
        },
        {
          heading: "Referral and programme",
          points: [
            "Refer eGFR under 30, UACR 300 or more, rapid decline, unclear cause, K problems, KFRE 5-year risk 3-5%.",
            "NP-NCD screening; PM National Dialysis Programme for kidney failure.",
          ],
        },
      ],
      mustDraw: [
        "KDIGO GFR x albuminuria heat map with monitoring frequency",
        "Four-pillar treatment ladder (RASi - SGLT2i - finerenone - GLP-1RA)",
        "Diagram of afferent/efferent arteriole showing where ACEi and SGLT2i act",
      ],
      markSplit: [
        { part: "Definition and pathogenesis", marks: 2 },
        { part: "Screening and staging", marks: 3 },
        { part: "Management (lifestyle, four pillars, dosing)", marks: 4 },
        { part: "Referral and programme", marks: 1 },
      ],
      keywords: ["UACR", "KDIGO", "SGLT2 inhibitor", "finerenone", "FLOW", "eGFR dip", "heat map"],
    },
    {
      id: "endocrine-diabetic-kidney-disease-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "common",
      question: "Write a short note on the dosing of glucose-lowering drugs in chronic kidney disease.",
      openingLines: [
        "As eGFR falls, renal clearance of metformin, sulfonylureas, some gliptins and insulin falls, raising the risk of lactic acidosis and hypoglycaemia.",
        "KDIGO 2022 recommends metformin while eGFR is 30 or more and an SGLT2 inhibitor from eGFR 20 regardless of glucose.",
      ],
      answer: [
        {
          heading: "Metformin and SGLT2 inhibitors",
          points: [
            "Metformin full dose at eGFR 45 or more, maximum 1 g/day at 30-44, stop under 30 and around contrast/AKI.",
            "SGLT2i start if eGFR 20 or more for organ protection; glucose effect small under 45; stop on dialysis.",
          ],
        },
        {
          heading: "Sulfonylureas and gliptins",
          points: [
            "Avoid glibenclamide; glipizide/gliclazide preferred; glimepiride start 1 mg.",
            "Sitagliptin 50 mg at eGFR 30-44, 25 mg under 30; linagliptin and teneligliptin need no change.",
          ],
        },
        {
          heading: "Injectables and others",
          points: [
            "GLP-1RA no dose change to eGFR 15; nausea may cause volume depletion.",
            "Insulin needs fall (often 25-50% in G4-5); pioglitazone no change but fluid retention.",
          ],
        },
        {
          heading: "Monitoring",
          points: [
            "HbA1c unreliable in G4-G5; use CGM/GMI; target HbA1c 6.5-8% individualised.",
          ],
        },
      ],
      mustDraw: ["Table: drug versus eGFR bands (45 or more, 30-44, under 30)"],
      markSplit: [
        { part: "Principles", marks: 1 },
        { part: "Drug-by-drug table", marks: 3 },
        { part: "Monitoring and targets", marks: 1 },
      ],
      keywords: ["metformin", "eGFR", "sitagliptin", "linagliptin", "hypoglycaemia", "renal dosing"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025",
    "KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease",
    "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease",
    "KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in CKD",
    "American Diabetes Association. Standards of Care in Diabetes - 2026 (Section 11: CKD and risk management)",
    "Perkovic V et al. Effects of semaglutide on chronic kidney disease in type 2 diabetes (FLOW). NEJM 2024",
    "Rajapurkar MM et al. What do we know about CKD in India: first report of the Indian CKD Registry. BMC Nephrology 2012",
    "ICMR Standard Treatment Workflows - Diabetes and CKD, 2023",
  ],
});

export default topics;
