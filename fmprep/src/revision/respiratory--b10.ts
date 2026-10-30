import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-adult-respiratory-vaccines": {
    checked: "2026-10",
    updated: [
      "ACIP October 2024: pneumococcal conjugate vaccine for all adults 50 and over; PCV21 added",
      "ACIP June 2024 and April 2025: single-dose RSV vaccine for 75+, and 50-74 at increased risk",
      "FDA January 2025: GBS warning for Arexvy and Abrysvo",
      "WHO 2023: trivalent influenza vaccine from 2024-25 (B/Yamagata removed)",
      "ACIP 2023: no extra precautions for egg allergy",
      "WHO SAGE 2024: COVID-19 revaccination every 6-12 months for high-priority groups",
      "GOLD 2025: RSV vaccine added for COPD 60 and over",
    ],
    master: {
      heading: "Adult respiratory vaccines on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Influenza yearly, PCV once (PCV20/21 or PCV13/15 then PPSV23), RSV once, Tdap, COVID for high-risk"],
        ["Who", "All 50-65 and over; any age with COPD, asthma, heart failure, diabetes, CKD, liver disease, immunosuppression, asplenia"],
        ["Influenza", "0.5 mL IM yearly; April-June (Southern Hemisphere) for most of India; high-dose preferred 65+"],
        ["Pneumococcal", "PCV20/21 single dose; or PCV13/15 then PPSV23 after 1 year (8 weeks if high-risk)"],
        ["Immunology", "Conjugate = T-cell-dependent, memory, cuts carriage; PPSV23 = T-independent, no memory"],
        ["RSV", "Arexvy, Abrysvo, mRESVIA single 0.5 mL IM; 75+ all, 50-74 at risk; Abrysvo 32-36 weeks pregnancy"],
        ["Tdap", "Once in adulthood, Td/Tdap every 10 years; every pregnancy 27-36 weeks"],
        ["COVID-19", "High-priority adults every 6-12 months (WHO SAGE)"],
        ["Contraindication", "Anaphylaxis to prior dose; egg allergy is NOT one; LAIV not in pregnancy or immunosuppression"],
        ["Adverse effects", "Local pain, fever; GBS (rare); myocarditis after mRNA in young males"],
        ["Special groups", "Pregnancy, HIV (PCV at any CD4), CKD (add hepatitis B), vaccinate 2 weeks before immunosuppression"],
        ["Latest", "PCV age 50 (2024), RSV single dose, trivalent influenza, egg allergy precautions removed"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Pneumococcal decision for an adult",
        steps: [
          { label: "Age 50+ or risk condition?", detail: "COPD, diabetes, CKD, HIV, asplenia, smoker", tone: "decision" },
          { label: "Check previous pneumococcal vaccines", tone: "decision" },
          { label: "None: PCV20 or PCV21 once", detail: "Series complete", tone: "good" },
          { label: "Or PCV13/15 then PPSV23", detail: "PPSV23 after 1 year; 8 weeks if high-risk", tone: "neutral" },
          { label: "PPSV23 only before: PCV20/21", detail: "At least 1 year after PPSV23", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "Schedule for a 68-year-old with COPD",
        steps: [
          { label: "Influenza yearly", detail: "0.5 mL IM, April-June in most of India", tone: "good" },
          { label: "Pneumococcal conjugate once", detail: "PCV20/21, or PCV13 then PPSV23", tone: "good" },
          { label: "RSV once", detail: "0.5 mL IM, not annual", tone: "good" },
          { label: "Tdap once, then Td every 10 years", tone: "neutral" },
          { label: "COVID-19 every 6-12 months", detail: "High-priority group", tone: "neutral" },
        ],
      },
      {
        kind: "compare",
        heading: "PPSV23 versus conjugate vaccine",
        columns: ["Feature", "PPSV23", "PCV"],
        rows: [
          ["Response", "T-cell-independent", "T-cell-dependent"],
          ["Memory", "None", "Yes"],
          ["Carriage", "No effect", "Reduced"],
          ["Repeat dose", "Hyporesponsiveness", "Boostable"],
          ["Adult role", "Only after PCV13/15", "First choice"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Five adult respiratory vaccines: **influenza, pneumococcal, RSV, Tdap and COVID-19**.",
            "India has **no adult UIP schedule** except Td in pregnancy.",
            "Most of India has a **monsoon influenza peak**; southern states peak in winter.",
            "**Pneumococcus** is the commonest bacterial cause of adult pneumonia.",
            "Every chronic-disease visit is a **vaccination opportunity**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Age** over 50-65 is the main indication.",
            "Chronic **lung, heart, kidney and liver disease** and diabetes.",
            "**Immunosuppression**, HIV, asplenia and sickle cell disease.",
            "**Smoking**, alcohol use disorder, CSF leak and cochlear implant.",
            "**Pregnancy**: influenza, Tdap and RSVpreF.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**PPSV23** gives a T-cell-independent response with no memory.",
            "**Conjugate vaccines** recruit T-helper cells through carrier protein CRM197.",
            "Conjugates give memory and **reduce carriage**, creating herd protection.",
            "Influenza **antigenic drift** means a new vaccine every year.",
            "RSV vaccines target the **prefusion F protein**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Influenza** 0.5 mL IM every year, April-June in most of India.",
            "**PCV20 or PCV21** single dose completes the pneumococcal series.",
            "Or **PCV13/15 then PPSV23** after at least 1 year.",
            "**RSV vaccine** single dose for 75 and over, and 50-74 at risk.",
            "**Tdap** once, then Td every 10 years; every pregnancy at 27-36 weeks.",
            "All vaccines can be **co-administered** at different sites.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: influenza any trimester, Tdap 27-36 weeks, Abrysvo 32-36 weeks.",
            "**HIV**: give PCV at any CD4 count; avoid live vaccines.",
            "**CKD**: add hepatitis B vaccine; responses are weaker.",
            "Vaccinate **2 weeks before** splenectomy, chemotherapy or rituximab.",
            "**Elderly**: high-dose or adjuvanted influenza vaccine where available.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Anaphylaxis**: adrenaline 0.5 mg IM; observe 15 minutes after every vaccine.",
            "**Guillain-Barre syndrome** is rare after influenza and RSV vaccines.",
            "**Myocarditis** after mRNA vaccine, mostly young males.",
            "**Egg allergy is not a contraindication** to influenza vaccine.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Record **batch, date and next due date** on an adult vaccine card.",
            "Review the vaccine record at every **NCD clinic** visit.",
            "Vaccinate at **discharge** after pneumonia, COPD or heart failure admission.",
            "Report serious **AEFI** to the district committee.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ACIP 2024**: pneumococcal conjugate vaccine for all adults 50 and over.",
            "**PCV21 (Capvaxive)** approved in 2024.",
            "**RSV vaccine** is one dose, extended to 50-59 at risk in 2025.",
            "Influenza vaccine became **trivalent** from 2024-25.",
            "**GOLD 2025** recommends RSV vaccine for COPD 60 and over.",
          ],
        },
      ],
      tables: [
        {
          heading: "Adult respiratory vaccines",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Inactivated influenza vaccine", "0.5 mL IM deltoid", "Every year", "Sore arm; egg allergy not a contraindication"],
            ["PCV20 or PCV21", "0.5 mL IM", "Single dose", "Local pain, fatigue"],
            ["PCV13/15 then PPSV23", "0.5 mL IM, then 0.5 mL IM/SC", "PPSV23 after 1 year (8 weeks high-risk)", "PPSV23 has no memory; avoid early repeats"],
            ["RSV vaccine (Arexvy, Abrysvo, mRESVIA)", "0.5 mL IM", "Single dose", "Fatigue, myalgia; rare GBS"],
            ["Tdap", "0.5 mL IM", "Once, then Td every 10 years; every pregnancy", "Local reaction"],
            ["COVID-19 vaccine", "IM per product", "Every 6-12 months in high-risk", "Rare myocarditis with mRNA"],
          ],
        },
        {
          heading: "Pneumococcal pathways",
          columns: ["Previous vaccine", "Give now", "Interval"],
          rows: [
            ["None", "PCV20/21, or PCV13/15 then PPSV23", "PPSV23 after 1 year"],
            ["PPSV23 only", "PCV20/21 or PCV15", "At least 1 year after PPSV23"],
            ["PCV13 only", "PCV20/21 or PPSV23", "At least 1 year"],
            ["PCV13 and PPSV23", "PCV20/21", "At least 5 years after last dose"],
          ],
        },
        {
          heading: "Who gets what",
          columns: ["Group", "Influenza", "PCV", "RSV"],
          rows: [
            ["Healthy 19-49", "Yearly", "No", "No"],
            ["50-74", "Yearly", "Yes", "If at risk"],
            ["75 and over", "Yearly", "Yes", "Yes"],
            ["Chronic disease any age", "Yearly", "Yes", "If 50 and over"],
            ["Pregnancy", "Any trimester", "If indicated", "Abrysvo 32-36 weeks"],
          ],
        },
      ],
      remember: [
        "**PCV before PPSV23** - never the reverse.",
        "**PCV20/21 alone completes** the pneumococcal series.",
        "**RSV vaccine: one dose**, not yearly.",
        "**Tdap every pregnancy**, 27-36 weeks.",
        "**Egg allergy is no bar** to influenza vaccine.",
        "**Monsoon = flu season** in most of India; vaccinate April-June.",
        "**Discharge is a vaccine visit.**",
      ],
    },
  },
  "respiratory-pleural-other": {
    checked: "2026-10",
    updated: [
      "BTS Guideline for Pleural Disease 2023: IPC or talc first-line by patient choice; IPC for non-expandable lung",
      "BTS 2023: talc slurry and poudrage equivalent; talc via IPC and daily IPC drainage supported",
      "MARS2 2024: extended pleurectomy-decortication not recommended for mesothelioma",
      "FDA 2024: pembrolizumab plus chemotherapy approved for mesothelioma",
      "IASLC 9th edition TNM 2024 for pleural mesothelioma",
    ],
    master: {
      heading: "Malignant effusion, mesothelioma, chylothorax and pleural thickening",
      columns: ["Heading", "What to write"],
      rows: [
        ["MPE definition", "Malignant cells in fluid or pleura; lung, breast, lymphoma, ovary, mesothelioma; survival 3-12 months"],
        ["MPE diagnosis", "Ultrasound, cytology (about 60%), contrast CT, image-guided biopsy or thoracoscopy"],
        ["MPE treatment", "Aspirate up to 1.5 L; recurrent: IPC or talc 4 g by choice; IPC if non-expandable lung"],
        ["Prognosis", "LENT score: LDH, ECOG, neutrophil-lymphocyte ratio, tumour type"],
        ["Non-expandable lung", "Pain on drainage, pneumothorax ex vacuo, elastance over 14.5 cmH2O/L; no drain, use IPC"],
        ["Mesothelioma", "Asbestos (amphiboles), latency 30-40 years; calretinin, WT1, D2-40 positive; BAP1 loss"],
        ["Mesothelioma treatment", "Nivolumab-ipilimumab or pemetrexed-cisplatin +/- bevacizumab; no surgery (MARS2)"],
        ["Asbestos pleura", "Plaques (benign), benign effusion, diffuse thickening, rounded atelectasis, mesothelioma"],
        ["Chylothorax", "TG over 110 mg/dL; surgery, lymphoma, filariasis, LAM; T5 decides side"],
        ["Chylothorax treatment", "Drain, MCT diet or NPO/TPN, octreotide; embolise or ligate if over 1-1.5 L/day for 5 days"],
        ["Pseudochylothorax", "Cholesterol over 200 with crystals; old TB, rheumatoid; aspirate or decorticate"],
        ["Fibrothorax", "Peel after empyema, haemothorax, TB; retracted hemithorax; decortication after 6 months"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Symptomatic malignant pleural effusion (BTS 2023)",
        steps: [
          { label: "Ultrasound and therapeutic aspiration", detail: "Up to 1.5 L; stop for pain or cough", tone: "neutral" },
          { label: "Breathlessness relieved and lung expands?", tone: "decision" },
          { label: "Expandable lung: IPC or talc by choice", detail: "Talc 4 g slurry or poudrage", tone: "good" },
          { label: "Non-expandable lung: IPC", detail: "Talc via IPC improves pleurodesis", tone: "warn" },
          { label: "Palliative care and oncology", tone: "neutral" },
        ],
      },
      {
        kind: "ladder",
        heading: "Chylothorax escalation",
        steps: [
          { label: "Drain and confirm TG over 110 mg/dL", tone: "neutral" },
          { label: "Low-fat MCT diet", detail: "MCT bypasses lymphatics", tone: "neutral" },
          { label: "Nil by mouth with TPN, plus octreotide", detail: "100-200 micrograms SC 8-hourly", tone: "decision" },
          { label: "Duct embolisation or ligation", detail: "Over 1-1.5 L/day for 5 days, or over 2 weeks", tone: "warn" },
          { label: "Treat cause", detail: "Lymphoma therapy, sirolimus for LAM", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Milky pleural fluid",
        columns: ["Feature", "Chylothorax", "Pseudochylothorax", "Empyema"],
        rows: [
          ["Centrifuge", "Stays milky", "Stays milky", "Clears"],
          ["Triglycerides", "Over 110", "Under 110", "Variable"],
          ["Cholesterol", "Under 200", "Over 200, crystals", "Variable"],
          ["Course", "Acute", "Years", "Days"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Malignant pleural effusion** means malignant cells in fluid or pleura.",
            "Commonest sources: **lung, breast**, lymphoma, ovary and mesothelioma.",
            "Median survival after MPE is only **3-12 months**.",
            "**Chylothorax** is chyle in the pleura; triglycerides over 110 mg/dL.",
            "**Pseudochylothorax** is a cholesterol effusion in long-standing thick pleura.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Asbestos** causes plaques, benign effusion, thickening and mesothelioma.",
            "Mesothelioma latency is **30-40 years**; amphiboles are most potent.",
            "Chylothorax: **surgery, lymphoma**, LAM, TB and filariasis.",
            "Duct injury **below T5 gives right**, above gives left chylothorax.",
            "Fibrothorax follows **empyema, haemothorax or TB**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Breathlessness** dominates MPE; dull chest pain dominates mesothelioma.",
            "Large effusion with **no mediastinal shift** suggests mesothelioma or bronchial block.",
            "Fibrothorax gives a **retracted hemithorax** with trachea pulled towards it.",
            "Pain or cough during drainage suggests **non-expandable lung**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Cytology** is positive in about 60%; biopsy if negative.",
            "**Contrast CT** before drainage: nodular or circumferential thickening suggests cancer.",
            "**Thoracoscopy** yields over 90% and allows talc at the same time.",
            "Mesothelioma IHC: **calretinin, WT1, D2-40** positive; BAP1 loss.",
            "Chylothorax: **TG over 110**; 50-110 needs chylomicron test.",
            "Pseudochylothorax: **cholesterol over 200** with crystals.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Asymptomatic MPE: **no drainage**, treat the cancer.",
            "Symptomatic: **aspirate up to 1.5 L** at a time.",
            "Recurrent with expandable lung: **IPC or talc**, patient's choice.",
            "Non-expandable lung: **IPC**, never pleurodesis.",
            "Chylothorax: drain, **MCT diet** or nil by mouth, octreotide.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Chylothorax over 1-1.5 L/day for 5 days: **duct embolisation or ligation**.",
            "Mesothelioma: **nivolumab plus ipilimumab** or pemetrexed-cisplatin.",
            "**No radical surgery** for mesothelioma after MARS2.",
            "Fibrothorax: **decortication** if still restrictive after 6 months.",
            "Pseudochylothorax: aspirate if breathless; decorticate if trapped.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**IPC infection** in about 5%; tract metastasis in mesothelioma.",
            "**Re-expansion oedema** if over 1.5 L removed quickly.",
            "Chylothorax causes **malnutrition, lymphopenia** and infection.",
            "Never drain a **pneumothorax ex vacuo** after tapping a trapped lung.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer unexplained exudate for **biopsy** once TB is excluded.",
            "Early **palliative care** for every new MPE.",
            "Asbestos disease is **notifiable** and compensable in India.",
            "Counsel **smoking cessation** in asbestos-exposed workers.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**BTS 2023**: IPC and talc both first line by choice.",
            "**MARS2 2024**: pleurectomy-decortication harms in mesothelioma.",
            "**Pembrolizumab with chemotherapy** approved for mesothelioma in 2024.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs and agents",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Graded talc", "4 g in 50 mL saline via drain or IPC", "Single dose", "Pain, fever; fails in trapped lung"],
            ["Octreotide", "100-200 micrograms SC 8-hourly", "1-2 weeks", "Gallstones, hyperglycaemia; off-label"],
            ["Nivolumab plus ipilimumab", "3 mg/kg IV 2-weekly + 1 mg/kg IV 6-weekly", "Up to 2 years", "Immune colitis, hepatitis, pneumonitis"],
            ["Pemetrexed plus cisplatin", "500 mg/m2 + 75 mg/m2 IV 3-weekly", "4-6 cycles", "Marrow suppression; give folate and B12"],
            ["Sirolimus (LAM)", "2 mg oral daily, trough 5-15 ng/mL", "Long-term", "Mouth ulcers, infections"],
          ],
        },
        {
          heading: "IPC versus talc",
          columns: ["Feature", "IPC", "Talc pleurodesis"],
          rows: [
            ["Needs lung re-expansion", "No", "Yes"],
            ["Hospital stay", "Day case", "2-5 days"],
            ["Breathlessness relief", "Equal", "Equal"],
            ["Main problem", "Infection, home drainage", "Pain, failure 20-30%"],
          ],
        },
        {
          heading: "Asbestos-related pleural disease",
          columns: ["Entity", "Latency", "Meaning"],
          rows: [
            ["Pleural plaques", "20-30 years", "Benign marker of exposure"],
            ["Benign asbestos effusion", "Under 20 years", "Diagnosis of exclusion"],
            ["Diffuse pleural thickening", "Variable", "Restriction"],
            ["Rounded atelectasis", "Variable", "Mimics cancer"],
            ["Mesothelioma", "30-40 years", "Malignant"],
          ],
        },
      ],
      remember: [
        "**TG over 110 = chyle**; cholesterol over 200 with crystals = pseudochyle.",
        "**Empyema clears on spinning**; chyle does not.",
        "**T5 rule** for the side of chylothorax.",
        "**Trapped lung: IPC**, not talc and not a drain.",
        "**Plaques are benign** - reassure.",
        "**MCT bypasses lymphatics.**",
        "**Calretinin, WT1, D2-40** = mesothelioma.",
      ],
    },
  },
  "respiratory-neuromuscular-chest-wall": {
    checked: "2026-10",
    updated: [
      "CHEST 2023 neuromuscular weakness guideline: NIV may start at FVC under 80% with symptoms; cough assist recommended",
      "EAN/PNS 2023 GBS guideline: IVIg or PLEX, no steroids, no second IVIg dose; EGRIS",
      "FDA 2023-2024: FcRn blockers and C5 inhibitors for generalised myasthenia",
      "FDA 2023: tofersen for SOD1-ALS; 2024 withdrawal of sodium phenylbutyrate-taurursodiol",
      "FDA 2023-2024: vamorolone and givinostat for DMD",
    ],
    master: {
      heading: "Neuromuscular and chest wall respiratory failure",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Hypercapnic pump failure with normal lungs and normal A-a gradient"],
        ["Causes", "Cord, anterior horn (ALS), nerve (GBS), junction (MG, snake, OP), muscle (DMD), chest wall (kyphoscoliosis)"],
        ["Mechanism", "Rapid shallow breathing, REM hypoventilation first, weak cough, chronic CO2 with high bicarbonate"],
        ["Symptoms", "Orthopnoea, morning headache, somnolence, bulbar symptoms"],
        ["Signs", "Paradoxical abdomen, single breath count under 20, neck flexor weakness"],
        ["20-30-40 rule", "VC under 20 mL/kg, MIP weaker than -30, MEP under 40 cmH2O = intubate"],
        ["Diaphragm", "Supine VC fall over 25%; sniff test; ultrasound thickening fraction under 20%"],
        ["Chronic thresholds", "FVC under 50% (or 80% with symptoms), PaCO2 45+, SNIP under 40 = home NIV"],
        ["Cough", "PCF under 270 L/min = cough assist; under 160 ineffective"],
        ["GBS treatment", "IVIg 0.4 g/kg/day x 5 or PLEX; no steroids; avoid NIV"],
        ["Myasthenic crisis", "IVIg 2 g/kg or PLEX, hold pyridostigmine, NIV possible if no bulbar failure"],
        ["Indian causes", "Krait and cobra bite, organophosphate intermediate syndrome, hypokalaemia, thoracoplasty"],
        ["Oxygen", "Target 88-92%; high-flow oxygen without CO2 check causes narcosis"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Acute weakness with breathing risk",
        steps: [
          { label: "Bedside VC, MIP, MEP every 4-6 hours", detail: "Plus bulbar check and neck flexion", tone: "neutral" },
          { label: "Meets 20-30-40 or bulbar failure?", tone: "decision" },
          { label: "Yes: ICU and elective intubation", detail: "Avoid suxamethonium", tone: "warn" },
          { label: "No: monitor in HDU, treat cause", detail: "GBS IVIg or PLEX; MG IVIg or PLEX", tone: "neutral" },
          { label: "Recovery: wean with VC and MIP trends", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Chronic neuromuscular disease: escalation",
        steps: [
          { label: "3-6 monthly FVC, SNIP, PCF, bicarbonate", tone: "neutral" },
          { label: "Vaccines, physiotherapy, action plan", tone: "neutral" },
          { label: "Cough assist", detail: "PCF under 270 L/min", tone: "decision" },
          { label: "Nocturnal bilevel NIV", detail: "FVC under 50%, PaCO2 45+, SNIP under 40", tone: "good" },
          { label: "Tracheostomy ventilation", detail: "NIV over 16-20 h/day or bulbar failure", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "GBS versus myasthenic crisis",
        columns: ["Feature", "GBS", "Myasthenic crisis"],
        rows: [
          ["Pattern", "Ascending", "Fatigable ocular-bulbar"],
          ["Reflexes", "Absent", "Normal"],
          ["Sensory", "Involved", "Spared"],
          ["Steroids", "No", "Yes, after IVIg/PLEX"],
          ["NIV", "Avoid", "May try"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Pump failure**: weak muscles or stiff chest wall with normal lungs.",
            "Cardinal finding is **hypercapnia with normal A-a gradient**.",
            "**GBS** needs ventilation in 20-30% of patients.",
            "Respiratory failure is the usual cause of death in **ALS**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Nerve**: GBS, phrenic injury; **junction**: myasthenia, botulism.",
            "Indian causes: **krait and cobra bites**, organophosphate intermediate syndrome.",
            "**Muscle**: DMD, Pompe, hypokalaemia, hypophosphataemia.",
            "**Chest wall**: kyphoscoliosis, post-TB thoracoplasty, fibrothorax.",
            "Crisis triggers: infection, surgery, **aminoglycosides and fluoroquinolones** in myasthenia.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Rapid **shallow breathing** raises dead space and CO2.",
            "**REM sleep hypoventilation** comes before daytime hypercapnia.",
            "Weak diaphragm causes **orthopnoea** and paradoxical abdominal movement.",
            "Weak cough leads to **aspiration** and mucus plugging.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Orthopnoea, **morning headache**, daytime sleepiness, choking on fluids.",
            "**Single breath count** under 20 suggests low VC.",
            "**Neck flexor weakness** mirrors diaphragm weakness.",
            "Look for flap, drowsiness and **cor pulmonale**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**20-30-40 rule**: VC under 20 mL/kg, MIP weaker than -30, MEP under 40.",
            "**Supine VC fall over 25%** means diaphragm weakness.",
            "**SNIP under 40** cmH2O predicts hypoventilation in ALS.",
            "**Sniff test** and ultrasound confirm diaphragm paralysis.",
            "**SpO2 and ABG are late** markers in acute weakness.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "ICU and **elective intubation** when thresholds are met.",
            "GBS: **IVIg 0.4 g/kg/day for 5 days** or plasma exchange; no steroids.",
            "Myasthenic crisis: **IVIg or plasma exchange**, hold pyridostigmine.",
            "Snake bite: **ASV** plus ventilation; neostigmine helps cobra.",
            "Oxygen target **88-92%** in chronic hypercapnia.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Home **bilevel NIV** for FVC under 50% or daytime PaCO2 45+.",
            "**Cough assist** when peak cough flow is under 270 L/min.",
            "ALS: **riluzole 50 mg twice daily**, early gastrostomy.",
            "DMD: daily **deflazacort** and cardiac care.",
            "**Tracheostomy** if NIV needed over 16-20 hours a day.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review FVC, SNIP and PCF **every 3-6 months**.",
            "Early **advance care planning** in ALS and DMD.",
            "Rare disease funding under **National Policy for Rare Diseases 2021**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**CHEST 2023**: NIV can start at FVC under 80% with symptoms.",
            "**EAN/PNS 2023**: no second IVIg dose in GBS.",
            "New MG drugs: **FcRn blockers and C5 inhibitors**.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["IVIg (GBS)", "0.4 g/kg/day IV", "5 days", "Headache, thrombosis, renal injury"],
            ["Plasma exchange", "5 exchanges", "1-2 weeks", "Hypotension, line sepsis"],
            ["Pyridostigmine", "30-60 mg oral 4-6 hourly", "Long-term; hold in crisis", "Cholinergic effects"],
            ["Riluzole", "50 mg oral twice daily", "Long-term", "Raised liver enzymes"],
            ["Deflazacort", "0.9 mg/kg oral daily", "Long-term", "Weight gain, cataract, bone loss"],
            ["Anti-snake venom", "10 vials IV over 1 hour", "Repeat per protocol", "Anaphylactoid reaction"],
          ],
        },
        {
          heading: "Thresholds",
          columns: ["Measure", "Threshold", "Action"],
          rows: [
            ["VC", "Under 20 mL/kg", "ICU, intubate"],
            ["MIP", "Weaker than -30 cmH2O", "ICU, intubate"],
            ["Supine VC fall", "Over 25%", "Diaphragm weakness"],
            ["FVC chronic", "Under 50%", "Home NIV"],
            ["SNIP", "Under 40 cmH2O", "Home NIV"],
            ["Peak cough flow", "Under 270 L/min", "Cough assist"],
          ],
        },
        {
          heading: "Causes by level",
          columns: ["Level", "Examples"],
          rows: [
            ["Cord", "C3-C5 injury, transverse myelitis"],
            ["Anterior horn", "ALS, SMA, post-polio"],
            ["Nerve", "GBS, phrenic palsy"],
            ["Junction", "Myasthenia, botulism, snake bite, organophosphate"],
            ["Muscle", "DMD, Pompe, hypokalaemia"],
            ["Chest wall", "Kyphoscoliosis, thoracoplasty"],
          ],
        },
      ],
      remember: [
        "**20-30-40** rule for intubation.",
        "**C3, 4, 5 keeps the diaphragm alive.**",
        "**REM fails first.**",
        "**SpO2 lies** in neuromuscular weakness - measure VC.",
        "**No NIV, no steroids in GBS.**",
        "**Krait: night, floor, painless, ptosis.**",
        "**PCF under 270** - cough assist.",
      ],
    },
  },
  "respiratory-inhaler-devices": {
    checked: "2026-10",
    updated: [
      "GINA 2025: device must allow ICS-formoterol AIR/MART; environmental impact a consideration",
      "GOLD 2025: individualise device by PIF, dexterity, cognition and preference",
      "NICE/BTS/SIGN NG245 2024: check technique and adherence before escalation; inhaler carbon footprint",
      "Low global-warming-potential pMDI propellants entering use from 2025",
      "NLEM 2022: budesonide-formoterol and tiotropium inhalers added",
    ],
    master: {
      heading: "Inhaler devices, spacers and nebulisers",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Deliver 1-5 micrometre particles to airways: pMDI, BA-MDI, DPI, SMI, nebuliser"],
        ["Deposition", "Impaction (throat), sedimentation (breath-hold), diffusion"],
        ["pMDI technique", "Shake, exhale, press at start of slow 3-5 s breath, hold 10 s"],
        ["DPI technique", "Load, exhale away, fast forceful breath (PIF 30-60+ L/min), hold 10 s"],
        ["Spacer", "No coordination needed, less throat deposition; one puff at a time; wash monthly, air-dry"],
        ["Device by age", "Under 4 spacer + mask; 4-5 spacer + mouthpiece; 6+ DPI possible"],
        ["Low PIF / elderly", "PIF under 30: no DPI - pMDI + spacer, SMI or nebuliser"],
        ["Errors", "Poor coordination, fast pMDI breath, weak DPI effort, exhaling into DPI, swallowing rotacaps"],
        ["Teaching", "Explain, demonstrate, teach-back, correct, recheck every visit"],
        ["Nebuliser vs spacer", "Equal in mild-moderate acute asthma; spacer cheaper, faster, less tachycardia"],
        ["Nebuliser driving gas", "Oxygen 6-8 L/min in asthma; air in hypercapnic COPD"],
        ["India", "Capsule DPIs and generic pMDIs cheapest; Jan Aushadhi; bottle spacer; inhaler phobia"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Choosing an inhaler device",
        steps: [
          { label: "Age under 6?", detail: "Under 4 spacer + mask; 4-5 spacer + mouthpiece", tone: "decision" },
          { label: "Measure PIF against device resistance", detail: "In-Check DIAL", tone: "neutral" },
          { label: "PIF under 30 L/min: pMDI + spacer or SMI", tone: "warn" },
          { label: "PIF adequate: DPI or pMDI + spacer by preference", tone: "good" },
          { label: "Check dexterity, cognition, cost; one device type", tone: "neutral" },
        ],
      },
      {
        kind: "cycle",
        heading: "Teach-back cycle at every visit",
        steps: [
          { label: "Explain the steps", tone: "neutral" },
          { label: "Demonstrate with a placebo device", tone: "neutral" },
          { label: "Patient demonstrates", tone: "decision" },
          { label: "Correct errors and repeat", detail: "2-3 rounds often needed", tone: "warn" },
          { label: "Recheck at next visit", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "pMDI versus DPI",
        columns: ["Feature", "pMDI", "DPI"],
        rows: [
          ["Inhalation", "Slow, deep", "Fast, forceful"],
          ["Coordination", "Needed (unless spacer)", "Not needed"],
          ["Minimum flow", "Low", "30, ideally 60 L/min"],
          ["Propellant", "Yes (HFA)", "No"],
          ["Shake", "Yes", "Never"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Inhalers deliver **1-5 micrometre** particles directly to the airways.",
            "**50-90% of patients** make at least one technique error.",
            "Poor technique is the commonest cause of **'uncontrolled' disease**.",
            "**Inhaler phobia** and oral bronchodilator use drive poor control in India.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Large particles **impact in the throat**; small ones settle in airways.",
            "A **10-second breath-hold** allows sedimentation.",
            "A DPI needs **fast inspiratory flow** to break up the powder.",
            "A **spacer** slows the aerosol and removes the need for coordination.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**pMDI**, breath-actuated MDI, capsule DPI, multi-dose DPI, soft mist inhaler.",
            "Nebulisers: **jet, ultrasonic, mesh**.",
            "Indian capsule DPIs: **Rotahaler and Revolizer**.",
            "**SMI** gives a slow mist needing little effort.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "pMDI errors: **poor coordination**, fast breath, no breath-hold.",
            "DPI errors: **weak effort**, exhaling into the device.",
            "Spacer errors: **several puffs at once**, poor mask seal.",
            "Capsule errors: **swallowing rotacaps**, not checking capsule empty.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Ask the patient to **show** the technique with their own device.",
            "Measure **PIF** with In-Check DIAL; under 30 L/min rules out DPI.",
            "Check **dose counter** and refill history for adherence.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Under 4: **pMDI, spacer and face mask**.",
            "4-5 years: **spacer with mouthpiece**.",
            "6 and over: **DPI or pMDI with spacer** by preference.",
            "Elderly or low PIF: **pMDI with spacer or SMI**.",
            "Teach by **demonstration and teach-back**; recheck every visit.",
            "Rinse mouth after **inhaled steroid**.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Mild-moderate attack: **4-10 puffs via spacer** every 20 minutes.",
            "Spacer is **as effective as a nebuliser** with less tachycardia.",
            "Nebulise for **life-threatening** attacks; oxygen-driven in asthma.",
            "Hypercapnic COPD: **air-driven nebuliser**, oxygen to 88-92%.",
            "Check technique **before discharge**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "After an exacerbation **PIF falls** - reassess the DPI.",
            "**Ipratropium by mask** can trigger angle-closure glaucoma.",
            "Keep DPIs **dry** in humid climates.",
            "A **500 mL bottle spacer** works in resource-poor settings.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Wash spacer **monthly**, do not rinse, air-dry.",
            "**Never wash a DPI**; wipe dry.",
            "Clean nebuliser kit **after every use**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**GINA 2025**: device must deliver ICS-formoterol for AIR/MART.",
            "**GOLD 2025**: choose device by PIF, dexterity and cognition.",
            "**Low-carbon propellants** entering pMDIs from 2025.",
          ],
        },
      ],
      tables: [
        {
          heading: "Inhaled drugs by device",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Salbutamol pMDI", "100 micrograms/puff; 4-10 puffs via spacer in attack", "As needed", "Tremor, tachycardia, low potassium"],
            ["Salbutamol nebulised", "2.5-5 mg", "Every 20 min for 1 hour", "Air-driven in hypercapnic COPD"],
            ["Ipratropium", "20 micrograms x 2 pMDI or 500 micrograms nebulised", "6-hourly or acute", "Dry mouth, glaucoma by mask"],
            ["Budesonide-formoterol", "200/6 micrograms 1 inhalation as needed, max 12/day", "Long-term", "Thrush; rinse mouth"],
            ["Budesonide respules", "0.5-1 mg nebulised twice daily", "Course or long-term", "Thrush, facial deposition"],
            ["Tiotropium", "18 micrograms DPI or 5 micrograms SMI daily", "Long-term", "Dry mouth, urinary retention"],
          ],
        },
        {
          heading: "Device comparison",
          columns: ["Device", "Inhalation", "Best for", "Main problem"],
          rows: [
            ["pMDI + spacer", "Slow or tidal", "Any age, acute attack", "Bulky"],
            ["Capsule DPI", "Fast, forceful", "6+ with good PIF", "Low PIF, humidity"],
            ["SMI", "Slow", "Elderly, low PIF", "Cost, loading"],
            ["Nebuliser", "Tidal", "Severe attack, unable to use others", "Time, cost, aerosol"],
          ],
        },
        {
          heading: "Device by age",
          columns: ["Age", "Device"],
          rows: [
            ["Under 4", "pMDI + valved spacer + face mask"],
            ["4-5", "pMDI + spacer + mouthpiece"],
            ["6 and over", "DPI or pMDI + spacer, BA-MDI, SMI"],
            ["Elderly or frail", "pMDI + spacer or SMI; nebuliser if needed"],
          ],
        },
      ],
      remember: [
        "**pMDI slow, DPI fast.**",
        "**Spacer equals nebuliser** in mild-moderate attacks.",
        "**One puff, then breathe** - never stack puffs.",
        "**Check technique before step-up.**",
        "**PIF under 30 - no DPI.**",
        "**Wash, don't rinse, air-dry** the spacer.",
        "**Air-drive nebulisers** in hypercapnic COPD.",
      ],
    },
  },
};

export default revision;
