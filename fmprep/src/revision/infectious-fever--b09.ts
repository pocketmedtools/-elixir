import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-fever-immunocompromised": {
    checked: "2026-10",
    updated: [
      "SSC 2026: NEWS2/MEWS/SIRS screening, antibiotics within 1 hour, balanced crystalloids and prolonged beta-lactam infusion applied to neutropenic sepsis.",
      "IDSA AMR guidance 2024: ceftazidime-avibactam plus aztreonam (or cefiderocol) for NDM-producing CRE in FN units.",
      "AGA 2025: universal HBsAg and anti-HBc before immunosuppression; antiviral prophylaxis with anti-CD20 therapy.",
      "CDC 2023: one-time hepatitis B triple-panel screening for all adults.",
      "ACIP 2024: PCV20/PCV21 and recombinant zoster vaccine for immunocompromised adults from 19 years.",
      "WHO TPT 2024 and NTEP 2021: 3HP, 1HP, 4R or 6H for latent TB before anti-TNF therapy.",
    ],
    master: {
      heading: "Master revision table - Fever in the immunocompromised",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Febrile neutropenia**: oral 38.3 C once or 38.0 C for 1 h, with **ANC under 500** (or expected under 500 in 48 h); profound under 100, prolonged over 7 days."],
        ["Burden", "FN in 10-50% of solid tumour and over 80% of haematological cancer patients; mortality 5-10%; **India: Gram-negatives 60-70%**, high ESBL and CRE."],
        ["Defect and organism", "Neutropenia - GNB, Pseudomonas, then moulds; T-cell - TB, PJP, Listeria, CMV; B-cell/asplenia - encapsulated bacteria, HBV; anti-TNF - TB."],
        ["Pathophysiology", "No neutrophils - **no pus, few signs**; gut translocation of Gram-negatives; mould risk after 10-14 days; TNF holds granulomas; anti-CD20 releases HBV."],
        ["Risk scores", "**MASCC 21 or more of 26 = low risk**; CISNE 0 for stable solid tumour; IDSA high risk - ANC 100 or less over 7 days, AML/HSCT, instability."],
        ["Transplant timeline", "0-1 month nosocomial; **1-6 months opportunists (CMV, PJP, Listeria, Nocardia, TB)**; over 6 months community, late CMV, PTLD."],
        ["Investigations", "**2 blood culture sets (line + peripheral)**, CBC, lactate, urine, CXR; malaria/dengue tests; **CT chest + galactomannan** for fever at 4-7 days; CMV PCR in transplant."],
        ["Low-risk treatment", "**Cipro 750 mg BD + amox-clav 625 mg TDS** after 4 h observation; not if on FQ prophylaxis; review 24-48 h."],
        ["High-risk treatment", "**Pip-taz 4.5 g IV 6-hourly or cefepime 2 g 8-hourly within 60 min**; meropenem if ESBL/shock; vancomycin only for specific indications."],
        ["Escalation", "Fever at 4-7 days - **caspofungin 70 then 50 mg** or L-AmB 3 mg/kg; aspergillosis - voriconazole; NDM CRE - ceftazidime-avibactam + aztreonam."],
        ["Duration", "**Stop after 72 h apyrexia** if stable and no source (ECIL-4), regardless of ANC; remove line for S. aureus, Pseudomonas, Candida."],
        ["Before biologics", "**IGRA/TST + CXR, HBsAg + anti-HBc**, HCV, HIV, VZV; TPT 1 month before anti-TNF; entecavir/tenofovir with rituximab for 12-18 months after."],
        ["Prophylaxis", "Levofloxacin if ANC 100 or less over 7 days; posaconazole in AML; cotrimoxazole with prednisolone 20 mg 4 weeks or more; valganciclovir after SOT."],
        ["Exam traps", "No routine vancomycin; no ceftriaxone; no rectal examination; do not wait for the ANC before the first dose."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Fever after chemotherapy: the first hours",
        steps: [
          { label: "Fever 38.0 C or more within 6 weeks of chemotherapy", detail: "Treat as FN on suspicion; do not wait for ANC", tone: "warn" },
          { label: "Cultures, lactate, CBC; first dose within 60 min", detail: "2 blood culture sets (line + peripheral), urine, CXR" },
          { label: "Shock or sepsis?", detail: "SBP under 90, lactate 2 or more, NEWS2 5 or more", tone: "decision" },
          { label: "MASCC score", detail: "21 or more low risk; under 21 or IDSA high-risk features - admit", tone: "decision" },
          { label: "Low risk - oral cipro + amox-clav", detail: "Observe 4 h, review 24-48 h; not if on FQ prophylaxis", tone: "good" },
          { label: "High risk - IV pip-taz or cefepime", detail: "Meropenem if ESBL likely; vancomycin only with indications" },
          { label: "Reassess at 48-72 h", detail: "Narrow to culture; stop 72 h after apyrexia if stable" },
          { label: "Still febrile at 4-7 days", detail: "CT chest, galactomannan; caspofungin or liposomal AmB", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "Empirical antimicrobial ladder in neutropenic fever",
        steps: [
          { label: "Low risk: oral ciprofloxacin + amoxicillin-clavulanate", detail: "750 mg BD + 625 mg TDS" },
          { label: "High risk: piperacillin-tazobactam or cefepime IV", detail: "4.5 g 6-hourly or 2 g 8-hourly" },
          { label: "ESBL risk or septic shock: meropenem", detail: "1 g IV 8-hourly, extended infusion", tone: "warn" },
          { label: "Add vancomycin for line, skin, pneumonia, shock, MRSA", detail: "15-20 mg/kg 8-12-hourly, AUC 400-600" },
          { label: "NDM CRE: ceftazidime-avibactam + aztreonam", detail: "Per antibiogram and ID advice", tone: "warn" },
          { label: "Persistent fever 4-7 days: antifungal", detail: "Caspofungin 70 then 50 mg daily or L-AmB 3 mg/kg" },
        ],
      },
      {
        kind: "branch",
        heading: "Which drug, which infection",
        root: "Immunosuppressive therapy",
        arms: [
          { label: "Anti-TNF", tone: "warn", steps: ["TB reactivation, often extrapulmonary", "Screen IGRA + CXR", "TPT 1 month before"] },
          { label: "Rituximab (anti-CD20)", tone: "warn", steps: ["HBV reactivation", "HBsAg + anti-HBc", "Entecavir/tenofovir to 12-18 months after"] },
          { label: "JAK inhibitor", steps: ["Herpes zoster", "Recombinant zoster vaccine first"] },
          { label: "Steroids 20 mg 4 weeks or more", steps: ["PJP, masked fever", "Cotrimoxazole prophylaxis", "Ivermectin for Strongyloides risk"] },
          { label: "Transplant drugs", steps: ["CMV at 1-6 months", "Valganciclovir and cotrimoxazole"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Febrile neutropenia** is 38.3 C once, or 38.0 C for 1 hour, with ANC under 500.",
            "**Profound neutropenia** is ANC under 100; prolonged is over 7 days.",
            "A source is found in only **20-30%**; bacteraemia in 10-25%.",
            "In India **Gram-negative bacilli** cause most bacteraemias, with high carbapenem resistance.",
            "Steroids and age **blunt fever**; treat any unexplained deterioration as sepsis.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Neutropenia** brings Gram-negatives and Pseudomonas, then Candida and Aspergillus.",
            "**T-cell defects** bring TB, PJP, Listeria, Nocardia, Cryptococcus and CMV.",
            "**Asplenia and B-cell loss** bring pneumococcus, Haemophilus and meningococcus.",
            "**Anti-TNF** reactivates TB; **rituximab** reactivates hepatitis B; **JAK inhibitors** cause zoster.",
            "Central lines and mucositis add staphylococci, streptococci and Candida.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**MASCC score** out of 26; **21 or more is low risk**.",
            "MASCC items: illness burden, no hypotension, no COPD, tumour type, hydration, outpatient, age under 60.",
            "**CISNE 0** marks low risk in stable solid tumour patients.",
            "Transplant timeline: first month nosocomial, **1-6 months opportunists**, later community infections.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Fever may be the **only sign**; neutrophils are needed for pus and infiltrates.",
            "Check mouth, lungs, skin, line sites and perianal area daily.",
            "**Never do a rectal examination** in neutropenia.",
            "**Ecthyma gangrenosum** means Pseudomonas; black palatal eschar means mucormycosis.",
            "Hypoxia with a near-normal X-ray on steroids suggests **PJP**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Take **two blood culture sets**, one from each line lumen and one peripheral.",
            "Line culture positive **2 hours earlier** than peripheral means catheter infection.",
            "Add CBC, lactate, renal and liver tests, urine culture and chest X-ray.",
            "Fever at 4-7 days: **CT chest and serum galactomannan** for mould.",
            "Transplant: **CMV PCR**, BK PCR and drug levels.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Give the **first antibiotic within 60 minutes**; do not wait for the count.",
            "Low risk: **ciprofloxacin plus amoxicillin-clavulanate** orally, with review in 24-48 hours.",
            "High risk: **piperacillin-tazobactam 4.5 g 6-hourly** or cefepime 2 g 8-hourly IV.",
            "Use **meropenem** where ESBL is likely or in septic shock.",
            "**Ceftriaxone** is wrong because it does not reliably cover Pseudomonas.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Add **vancomycin** only for line, skin, pneumonia, shock, MRSA or Gram-positive cocci.",
            "Persistent fever at 4-7 days: add **caspofungin or liposomal amphotericin**.",
            "Aspergillosis: **voriconazole**; mucormycosis: high-dose liposomal amphotericin plus surgery.",
            "Stop antibiotics after **72 hours afebrile** if stable with no source (ECIL-4).",
            "Remove the line for S. aureus, Pseudomonas or Candida bacteraemia.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Before biologics: **IGRA or TST, chest X-ray, HBsAg, anti-HBc**, HCV, HIV.",
            "Give **TB preventive treatment** at least 1 month before anti-TNF.",
            "Anti-CD20 with anti-HBc positive: **entecavir or tenofovir** until 12-18 months after.",
            "Azoles raise and rifampicin lowers **tacrolimus**; check levels.",
            "In pregnancy avoid voriconazole; use liposomal amphotericin for fungal cover.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer **same day** any fever within 6 weeks of chemotherapy or after transplant.",
            "Give a **neutropenic alert card** and teach to report 38.0 C at once.",
            "Inactivated vaccines 2 weeks before and **live vaccines 4 weeks before** immunosuppression.",
            "Monitor **HBV DNA and ALT** every 1-3 months if not on prophylaxis.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**SSC 2026**: screen with NEWS2, not qSOFA alone; prolonged beta-lactam infusion.",
            "**IDSA 2024**: ceftazidime-avibactam plus aztreonam for NDM-producing CRE.",
            "**AGA 2025**: test HBsAg and anti-HBc before all immunosuppression.",
            "**ACIP 2024**: recombinant zoster vaccine and PCV20 for immunocompromised adults.",
          ],
        },
      ],
      tables: [
        {
          heading: "Febrile neutropenia drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Piperacillin-tazobactam", "4.5 g IV 6-hourly", "Until 72 h afebrile and stable", "Hypokalaemia; AKI with vancomycin"],
            ["Cefepime", "2 g IV 8-hourly", "As above", "Neurotoxicity in CKD"],
            ["Meropenem", "1 g IV 8-hourly", "As above", "Seizures, C. difficile, lowers valproate"],
            ["Cipro + amox-clav (oral, low risk)", "750 mg BD + 625 mg TDS", "About 7 days", "Not if on FQ prophylaxis; QT"],
            ["Vancomycin", "15-20 mg/kg IV 8-12-hourly", "Stop at 48-72 h if no Gram-positive", "Nephrotoxicity; level monitoring"],
            ["Caspofungin", "70 mg IV day 1, then 50 mg daily", "Until count recovers", "Liver enzyme rise"],
            ["Liposomal amphotericin B", "3 mg/kg/day IV", "Per response", "Kidney injury, low potassium"],
            ["Cotrimoxazole (PJP prophylaxis)", "1 DS tablet daily or thrice weekly", "While on high-dose steroid; 6-12 months post-SOT", "Rash, high potassium, cytopenias"],
          ],
        },
        {
          heading: "MASCC score",
          columns: ["Item", "Points"],
          rows: [
            ["No or mild symptoms (moderate 3)", "5"],
            ["No hypotension", "5"],
            ["No COPD", "4"],
            ["Solid tumour or no prior fungal infection", "4"],
            ["No dehydration needing IV fluids", "3"],
            ["Outpatient at onset", "3"],
            ["Age under 60", "2"],
          ],
        },
        {
          heading: "Screening before a biologic",
          columns: ["Test", "If positive", "Do this"],
          rows: [
            ["IGRA or TST + chest X-ray", "Latent TB", "TPT 1 month before anti-TNF"],
            ["HBsAg", "Chronic HBV", "Entecavir or tenofovir"],
            ["Anti-HBc alone", "Past HBV", "Prophylaxis with anti-CD20, else HBV DNA monitoring"],
            ["VZV IgG", "Negative", "Varicella vaccine 4 weeks before"],
          ],
        },
      ],
      remember: [
        "**38.3 once, 38.0 for an hour, ANC under 500** - antibiotic in 60 minutes.",
        "**MASCC 21** is the magic number for low risk.",
        "Vancomycin is not routine; ceftriaxone is not antipseudomonal.",
        "Fever at day 4-7 in high-risk FN: **think mould**.",
        "Anti-TNF = **TB**; rituximab = **HBV**; JAK = **zoster**; steroids = **PJP**.",
        "No rectal examination in neutropenia.",
        "Transplant months 1-6 = **opportunist window**.",
      ],
    },
  },
};

export default revision;
