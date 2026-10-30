import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-lung-pregnancy": {
    checked: "2026-10",
    updated: [
      "GINA 2025: continue ICS-formoterol (AIR or MART) in pregnancy, no step-down during pregnancy, neonatal glucose check after high-dose SABA",
      "BTS/NICE/SIGN 2024 joint asthma guideline replaces BTS/SIGN 2019; pregnancy advice unchanged",
      "WHO TB Module 4 2025: 6-month BDLLfxC allowed in pregnancy; BPaLM and 4-month HPMZ not used",
      "MoHFW November 2024: Ni-kshay Poshan Yojana raised to Rs 1000 per month",
      "ACIP 2023: RSV prefusion F vaccine at 32-36 weeks for infant protection",
      "CDC 2024-25: oseltamivir for all pregnant women with suspected influenza; baloxavir not recommended",
      "ESC 2025 cardiovascular disease in pregnancy guideline: peripartum cardiomyopathy and PAH advice",
    ],
    master: {
      heading: "Respiratory disease in pregnancy - one-page answer",
      columns: ["Heading", "What to write"],
      rows: [
        ["Physiology", "Tidal volume and minute ventilation up 30-50%, RR same; PaCO2 28-32, HCO3 18-22; FRC down 20%; FEV1 and PEF unchanged"],
        ["Key danger sign", "PaCO2 40 mmHg in an attack means respiratory failure; keep SpO2 95% or above for the fetus"],
        ["Asthma course", "Rule of thirds; worst at 24-36 weeks; stopping ICS is the main trigger"],
        ["Asthma drugs", "ICS (budesonide), ICS-formoterol, SABA, LABA, montelukast safe; prednisolone not withheld; no step-down"],
        ["Labour", "Hydrocortisone 100 mg IV 6-8 hourly if prednisolone over 7.5 mg for over 2 weeks; regional anaesthesia; avoid carboprost and labetalol"],
        ["TB diagnosis", "Four-symptom screen at ANC; NAAT upfront; CXR with shield; test HIV and diabetes"],
        ["TB treatment", "2HRZE/4HRE plus pyridoxine; streptomycin contraindicated; HPMZ and BPaLM not used"],
        ["TB neonate", "Exclude congenital TB, then 6 months isoniazid TPT; breastfeed; copper IUD or DMPA for contraception"],
        ["Pneumonia", "Beta-lactam plus azithromycin; avoid doxycycline, quinolones, co-trimoxazole, clarithromycin; MEOWS not CURB-65"],
        ["Varicella", "IV aciclovir 10 mg/kg 8-hourly for pneumonia; oral 800 mg 5 times daily within 24 h of rash"],
        ["Influenza", "Oseltamivir 75 mg BD x 5 days on suspicion, any time; up to 2 weeks postpartum; inactivated vaccine any trimester"],
        ["COVID-19", "Prednisolone 40 mg or hydrocortisone 80 mg BD x 10 days if on oxygen; LMWH; vaccine safe; avoid molnupiravir"],
        ["Imaging", "CXR 0.0005-0.01 mGy, CTPA under 0.66 mGy, harm threshold 50 mGy; pregnancy-adapted YEARS for PE"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Breathless pregnant woman - triage and work-up",
        caption: "Tachypnoea and hypoxaemia are never physiological.",
        steps: [
          { label: "Check RR, pulse, BP, SpO2, temperature, fetal movements", detail: "Use MEOWS chart, not CURB-65" },
          { label: "Normal vitals and exam, gradual onset?", detail: "Physiological dyspnoea - reassure, review", tone: "decision" },
          { label: "SpO2 under 95%, RR over 24, pulse over 110-120?", detail: "Admit; oxygen to SpO2 95% or above; left lateral tilt", tone: "warn" },
          { label: "Image without hesitation", detail: "CXR fetal dose 0.0005-0.01 mGy; CTPA under 0.66 mGy" },
          { label: "Send cause-specific tests", detail: "NAAT sputum, influenza/COVID PCR, ABG, BNP, echo, leg ultrasound" },
          { label: "Treat cause with pregnancy-safe drugs", detail: "Oseltamivir, beta-lactam plus azithromycin, HRZE, LMWH", tone: "good" },
        ],
      },
      {
        kind: "flow",
        heading: "Acute asthma in pregnancy",
        steps: [
          { label: "Grade severity: speech, RR, pulse, SpO2, PEF", detail: "PEF norms unchanged in pregnancy", tone: "decision" },
          { label: "Oxygen to SpO2 95% or above", detail: "Fetal monitoring after viability" },
          { label: "Salbutamol by spacer or nebuliser", detail: "4-10 puffs q20 min or 2.5-5 mg neb; ipratropium 500 mcg if severe" },
          { label: "Prednisolone 40-50 mg within 1 hour", detail: "Never withhold for fear of the fetus" },
          { label: "Severe: IV magnesium sulphate 2 g over 20 min", detail: "PaCO2 35-40 or more, drowsy, silent chest - ICU", tone: "warn" },
          { label: "Discharge on ICS-containing controller", detail: "Action plan; review in 2-7 days; no step-down until after delivery", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Safe or avoid - respiratory drugs in pregnancy",
        columns: ["Problem", "Safe", "Avoid"],
        rows: [
          ["Asthma", "ICS, ICS-formoterol, SABA, montelukast, prednisolone", "Stopping ICS; carboprost; labetalol"],
          ["TB", "HRZE plus pyridoxine", "Streptomycin, 4-month HPMZ, BPaLM"],
          ["Pneumonia", "Amoxicillin, ceftriaxone, azithromycin", "Doxycycline, quinolones, co-trimoxazole, clarithromycin"],
          ["Influenza", "Oseltamivir", "Baloxavir; live attenuated vaccine"],
          ["COVID-19", "Prednisolone, hydrocortisone, remdesivir, LMWH", "Molnupiravir"],
          ["PE", "LMWH", "Warfarin, DOACs"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Asthma** is the commonest chronic lung disease in pregnancy, in about 3-8% of pregnancies.",
            "About **2.2 lakh pregnant women** get active TB each year worldwide.",
            "Maternal TB raises **perinatal death about 6-fold** in an Indian study.",
            "Pregnant women were 1% of the population but **5% of H1N1 deaths** in 2009.",
            "**COVID-19** in pregnancy doubles ICU admission compared with non-pregnant women.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**Progesterone** raises tidal volume and minute ventilation by 30-50%; rate stays the same.",
            "Normal ABG: **PaCO2 28-32 mmHg**, HCO3 18-22, pH 7.40-7.45.",
            "**FRC falls 20%** and oxygen use rises 20-30%, so desaturation is rapid.",
            "**FEV1 and PEF do not change**; abnormal spirometry means disease.",
            "Physiological dyspnoea affects **60-70%** but never causes tachypnoea or low SpO2.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Asthma follows the **rule of thirds**; worsening peaks at 24-36 weeks.",
            "**Stopping ICS** and viral infections cause most attacks.",
            "TB symptoms hide behind pregnancy tiredness; weight loss is masked by weight gain.",
            "**Varicella pneumonia** develops in up to 10% of pregnant women with chickenpox.",
            "Sudden breathlessness with pleuritic pain suggests **pulmonary embolism**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Chest X-ray** fetal dose is 0.0005-0.01 mGy; harm starts at 50 mGy.",
            "**CTPA** gives the fetus under 0.66 mGy; never withhold a needed scan.",
            "Send **NAAT** on sputum upfront for TB and rifampicin resistance.",
            "Use **pregnancy-adapted YEARS** with D-dimer for suspected PE.",
            "Read the ABG against **pregnancy norms**; PaCO2 40 is high.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Continue **ICS or ICS-formoterol**; do not step down during pregnancy.",
            "Give **prednisolone 40-50 mg** in an attack; never withhold it.",
            "TB: **2HRZE/4HRE** plus pyridoxine 10-25 mg daily; avoid **streptomycin**.",
            "Influenza: **oseltamivir 75 mg BD for 5 days** on suspicion, without waiting for a test.",
            "Pneumonia: **amoxicillin or ceftriaxone plus azithromycin**.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Keep **SpO2 95% or above** and nurse in left lateral tilt.",
            "Severe asthma: nebulised salbutamol, ipratropium, steroid, **IV magnesium 2 g**.",
            "**Varicella pneumonia**: IV aciclovir 10 mg/kg 8-hourly.",
            "COVID-19 on oxygen: **prednisolone 40 mg or hydrocortisone 80 mg BD** for 10 days, plus LMWH.",
            "Labour on long-term steroids: **hydrocortisone 100 mg IV 6-8 hourly**.",
            "Prefer **regional anaesthesia**; avoid carboprost and labetalol in asthma.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Newborn of a TB mother: exclude congenital TB, then **6 months isoniazid**.",
            "**Breastfeed** on ATT and asthma drugs; mother masks while infectious.",
            "Rifampicin weakens the pill; use **copper IUD or DMPA**.",
            "**PAH** in pregnancy is mWHO class IV; advise against pregnancy.",
            "DR-TB: **BDLLfxC** allowed in pregnancy; BPaLM is not used.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "SpO2 under 95%, **RR over 24** or pulse over 110-120 needs admission.",
            "**Silent chest, drowsiness** or PaCO2 near 40 in asthma needs ICU.",
            "Fever with breathlessness in pregnancy suggests **influenza, COVID-19 or varicella**.",
            "Uncontrolled disease causes **preeclampsia, preterm birth and low birth weight**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**GINA 2025**: ICS-formoterol acceptable; no step-down in pregnancy.",
            "**WHO 2025**: BDLLfxC usable in pregnant women with MDR/RR-TB.",
            "**Ni-kshay Poshan Yojana** raised to Rs 1000 per month in November 2024.",
            "**RSV vaccine** at 32-36 weeks protects the newborn (ACIP 2023).",
            "**CDC 2025**: baloxavir not recommended in pregnancy.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for respiratory disease in pregnancy",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Budesonide-formoterol", "200/6 mcg inhaled as needed or 1-2 BD plus as needed", "Throughout pregnancy", "Thrush, hoarseness; safe"],
            ["Prednisolone", "40-50 mg orally OD", "5-7 days", "Hyperglycaemia; small oral cleft signal in first trimester"],
            ["HRZE FDC", "H 5, R 10, Z 25, E 15 mg/kg orally daily", "2 months HRZE, 4 months HRE", "Hepatitis; rifampicin cuts hormonal contraception"],
            ["Pyridoxine", "10-25 mg orally daily", "With isoniazid", "Prevents neuropathy"],
            ["Oseltamivir", "75 mg orally BD", "5 days (prophylaxis 75 mg OD x 10 days)", "Nausea; reduce dose in CKD"],
            ["Azithromycin", "500 mg orally or IV OD", "3-5 days", "QT prolongation"],
            ["Aciclovir", "10 mg/kg IV 8-hourly", "7-10 days", "Nephrotoxicity; hydrate"],
            ["Enoxaparin", "1 mg/kg SC BD (treatment)", "Rest of pregnancy plus 6 weeks postpartum", "Bleeding; warfarin and DOACs contraindicated"],
          ],
        },
        {
          heading: "Pregnancy physiology - the numbers",
          columns: ["Parameter", "Change", "Meaning"],
          rows: [
            ["Tidal volume", "Up 30-50%", "Hyperventilation of pregnancy"],
            ["Respiratory rate", "Unchanged", "Tachypnoea is disease"],
            ["PaCO2", "28-32 mmHg", "PaCO2 40 is a warning"],
            ["FRC", "Down 20%", "Rapid desaturation"],
            ["FEV1 and PEF", "Unchanged", "Spirometry and PEF stay valid"],
          ],
        },
        {
          heading: "Breathlessness in pregnancy - differentials",
          columns: ["Condition", "Clue", "Test"],
          rows: [
            ["Physiological dyspnoea", "Gradual, normal vitals", "None"],
            ["Asthma", "Wheeze, stopped ICS", "PEF"],
            ["Pneumonia or influenza", "Fever, crackles", "CXR, PCR"],
            ["Pulmonary embolism", "Sudden, pleuritic pain, leg swelling", "Leg ultrasound, CTPA"],
            ["Peripartum cardiomyopathy", "Late pregnancy or postpartum, orthopnoea", "Echo, BNP"],
            ["Mitral stenosis", "Diastolic murmur, AF", "Echo"],
          ],
        },
      ],
      remember: [
        "Rate stays, depth rises: **tachypnoea is never physiological** in pregnancy.",
        "**PaCO2 40 in a pregnant asthmatic** means she is tiring.",
        "**Rule of thirds** for asthma; worst at 24-36 weeks.",
        "Only **streptomycin** is out among the classic ATT drugs.",
        "**Oseltamivir on suspicion**, any gestation, up to 2 weeks postpartum.",
        "Asthmatic mother: **no carboprost, no labetalol**.",
        "A chest X-ray is thousands of times below the **50 mGy** threshold.",
      ],
    },
  },
};

export default revision;
