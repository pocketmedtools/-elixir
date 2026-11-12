import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-lab-microbiology": {
    checked: "2026-10",
    updated: [
      "IDSA/ASM Guide to Utilization of the Microbiology Laboratory 2024: 20 mL per adult blood culture set, 2-3 sets",
      "CLSI M100 34th edition 2024 (35th 2025): yearly breakpoint revisions; pip-tazo (2022) and aminoglycoside (2023) breakpoints lowered",
      "CLSI M47 2022 and CDC 2024: blood culture contamination target 1% or less",
      "WHO TB diagnostics module 2024: NAAT classes, targeted NGS for drug resistance; NTEP upfront NAAT",
      "ADAPT-Sepsis 2025: PCT-guided stopping shortens antibiotic courses; CRP-guided does not",
    ],
    master: {
      heading: "Master revision table - Microbiology for the clinician",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Diagnostic stewardship**: right test, right patient, right specimen, right time, before the first antibiotic."],
        ["Classification of tests", "Direct (microscopy, culture, antigen, NAAT) versus indirect (antibody serology); plus host biomarkers (CRP, PCT)."],
        ["Why tests mislead", "Pre-analytical errors (up to 70%), prior antibiotics, low blood volume, contamination, colonisation, early IgM, cross-reactivity."],
        ["Blood culture technique", "**2 sets, 20 mL per set**, separate venepunctures, chlorhexidine-alcohol dried 30 s, room temperature within 2 h; 3 sets 30 min apart in IE."],
        ["Pathogen or contaminant", "Always pathogens: S. aureus, Enterobacterales, Pseudomonas, streptococci, Candida; contaminants: CoNS, diphtheroids, Bacillus in one set, TTP over 48 h."],
        ["MIC and breakpoints", "MIC = lowest concentration inhibiting visible growth; breakpoint gives S, SDD, I, R (CLSI M100 2024); **never compare MICs across drugs**."],
        ["Special AST rules", "Vancomycin (S. aureus) and colistin by MIC only; cefoxitin for MRSA; D-test; mCIM/eCIM for carbapenemase; Salmonella by ciprofloxacin MIC."],
        ["Molecular tests", "**CBNAAT/Truenat** TB plus rifampicin resistance in 2 h; multiplex panels in 1 h; dengue RT-PCR days 1-5; eschar PCR for scrub."],
        ["Serology timing", "**IgM from day 5-7**, IgG from day 10-14; fourfold rise in paired sera 10-14 days apart; low avidity means recent infection."],
        ["Rapid tests", "Malaria RDT (HRP2 persists 2-4 weeks), NS1 days 1-5, rK39, CrAg, LF-LAM; typhoid RDTs and Widal not recommended."],
        ["Biomarkers", "CRP peaks 36-50 h; PCT rises 2-4 h, half-life 24 h; stop antibiotics at **80% fall or under 0.5 ng/mL**; never withhold in sepsis."],
        ["Special groups", "On antibiotics: culture before next dose; neonates PCT high first 48 h; immunosuppressed use antigen or NAAT; elderly ASB not treated."],
        ["Follow-up", "Review cultures at 48-72 h and de-escalate; repeat cultures for S. aureus and Candida; notify outbreak organisms on IHIP."],
        ["Latest updates", "IDSA/ASM 2024, CLSI M100 2024-25, CLSI M47 contamination 1%, WHO TB diagnostics 2024, ADAPT-Sepsis 2025."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "From blood culture to the right antibiotic",
        steps: [
          { label: "Suspected bacteraemia or sepsis", detail: "Rigors, sepsis, IE, enteric fever, neutropenia", tone: "decision" },
          { label: "Two sets before the first antibiotic", detail: "20 mL per set, separate sites, chlorhexidine-alcohol" },
          { label: "Start empirical antibiotic", detail: "Within 1 hour in sepsis; never wait for the culture", tone: "warn" },
          { label: "Positive bottle: Gram stain phoned", detail: "Clusters: cover MRSA; GNB: review local antibiogram" },
          { label: "Identification and AST", detail: "MALDI-TOF; MIC read against each drug's own breakpoint" },
          { label: "Antibiotic time-out at 48-72 h", detail: "De-escalate to the narrowest active drug", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Choosing a test by day of illness",
        steps: [
          { label: "Day 1-5: antigen and PCR", detail: "NS1, malaria RDT and smear, dengue RT-PCR, blood culture" },
          { label: "Day 5 onwards: IgM ELISA", detail: "Dengue MAC-ELISA, scrub typhus, leptospira IgM" },
          { label: "Day 10-14: paired IgG", detail: "Fourfold rise confirms acute infection" },
          { label: "Culture-negative or treated", detail: "Bone marrow culture, 16S PCR on tissue, MAT at reference lab", tone: "decision" },
        ],
      },
      {
        kind: "compare",
        heading: "Culture versus NAAT versus serology",
        columns: ["Feature", "Culture", "NAAT/PCR", "Serology"],
        rows: [
          ["Detects", "Live organism", "Nucleic acid", "Host antibody"],
          ["Turnaround", "1-3 days (TB weeks)", "1-3 hours", "Hours, but only after day 5"],
          ["Susceptibility", "Full MIC", "Selected genes only", "None"],
          ["Test of cure", "Yes", "No - DNA persists", "No"],
          ["Main pitfall", "Killed by prior antibiotics", "Colonisers, dead organisms", "Early false negative, cross-reaction"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Diagnostic stewardship** means the right test, on the right specimen, at the right time.",
            "Tests are **direct** (organism found) or **indirect** (antibody found).",
            "Up to **70% of lab errors** happen before the sample reaches the lab.",
            "Indian labs mostly use **CLSI M100**, which changes every year.",
            "**E. coli and Klebsiella** are the commonest isolates in ICMR AMRSN reports.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Microscopy**: Gram, ZN, smear, India ink, KOH.",
            "**Culture**: bacterial, blood, mycobacterial (LJ 4-8 weeks, MGIT 1-2 weeks).",
            "**Antigen**: NS1, HRP2, CrAg, HBsAg, LAM.",
            "**Antibody**: ELISA, agglutination, IFA, MAT.",
            "**Molecular**: PCR, CBNAAT, Truenat, multiplex panels, sequencing.",
          ],
        },
        {
          title: "Blood culture",
          points: [
            "Take **two sets of 20 mL** from separate venepunctures.",
            "One set finds 73% of bacteraemias; two find 90%; three find 98%.",
            "Use **chlorhexidine-alcohol** and let it dry for 30 seconds.",
            "Send at room temperature within 2 hours; never refrigerate.",
            "Suspected endocarditis: **three sets 30 minutes apart** before antibiotics.",
            "**S. aureus and Candida** in blood are never contaminants.",
            "**CoNS in one bottle** after 48 hours is usually a contaminant.",
          ],
        },
        {
          title: "Susceptibility and MIC",
          points: [
            "**MIC** is the lowest drug concentration that stops visible growth.",
            "A **breakpoint** separates susceptible from resistant for that drug.",
            "**Never compare MICs** between different drugs.",
            "Vancomycin for S. aureus and **colistin** need MIC testing, not discs.",
            "**mCIM and eCIM** detect carbapenemases and separate NDM from KPC or OXA-48.",
            "**Selective reporting** hides broad drugs when narrow ones work.",
          ],
        },
        {
          title: "Molecular tests",
          points: [
            "**CBNAAT and Truenat** detect TB and rifampicin resistance in about 2 hours.",
            "NTEP uses **upfront NAAT** for every presumptive TB patient.",
            "**Multiplex panels** test many organisms and resistance genes in 1 hour.",
            "PCR finds DNA, not life, so it is **not a test of cure**.",
            "Scrub typhus PCR works best on an **eschar** sample.",
          ],
        },
        {
          title: "Serology and rapid tests",
          points: [
            "**IgM** appears from about day 5; IgG from about day 10-14.",
            "A **fourfold rise** in paired sera proves acute infection.",
            "**Low avidity** IgG means recent infection, useful in pregnancy.",
            "Malaria **HRP2 stays positive** 2-4 weeks after cure.",
            "**Widal and typhoid RDTs** are not recommended in India.",
            "**MAT** at 1:400 or more is the reference test for leptospirosis.",
          ],
        },
        {
          title: "Biomarkers",
          points: [
            "**CRP** is made by the liver under IL-6 and peaks at 36-50 hours.",
            "**PCT** rises in 2-4 hours and is suppressed in viral infection.",
            "Stop antibiotics when **PCT falls 80%** or drops under 0.5 ng/mL.",
            "PCT is high after surgery, trauma, burns, **malaria** and medullary thyroid cancer.",
            "Never use a low PCT to **withhold antibiotics** in sepsis.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Already on antibiotics: draw cultures **just before the next dose**.",
            "Neonates: PCT rises normally in the **first 48 hours**.",
            "Immunosuppressed: antibody may never form; use **antigen or PCR**.",
            "Older adults: **asymptomatic bacteriuria** is common and needs no treatment.",
            "Pregnancy: screen urine culture for **asymptomatic bacteriuria** at booking.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Review every culture at **48-72 hours** and de-escalate.",
            "Repeat blood cultures for **S. aureus and Candida** until negative.",
            "Act the same day on **phoned critical results**.",
            "Notify outbreak organisms on **IHIP** and send isolates to reference labs.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**IDSA/ASM 2024** lab utilisation guide sets specimen standards.",
            "**CLSI M100 2024-25** lowered pip-tazo and aminoglycoside breakpoints in recent cycles.",
            "**Contamination target** is now 1% or less (CLSI M47, CDC 2024).",
            "**ADAPT-Sepsis 2025**: PCT-guided stopping shortens antibiotic courses safely.",
          ],
        },
      ],
      tables: [
        {
          heading: "Report-guided de-escalation drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Cefazolin (MSSA)", "2 g IV 8-hourly", "14 days uncomplicated bacteraemia", "Rash; better than vancomycin for MSSA"],
            ["Vancomycin (MRSA)", "Load 20-35 mg/kg IV, then 15-20 mg/kg 8-12-hourly", "AUC 400-600 guided", "Nephrotoxicity, red man syndrome"],
            ["Ceftriaxone (susceptible GNB)", "1-2 g IV once daily", "7 days with source control", "Biliary sludge; useless if ESBL"],
            ["Ertapenem (ESBL)", "1 g IV once daily", "7-14 days", "No Pseudomonas cover; seizures rare"],
            ["Nitrofurantoin (ESBL cystitis)", "100 mg oral 12-hourly", "5 days", "Avoid eGFR under 30 and pyelonephritis"],
            ["Azithromycin (S. Typhi)", "1 g oral once daily", "7 days", "QT prolongation, diarrhoea"],
            ["Fluconazole (Candida)", "800 mg load, then 400 mg daily", "14 days after first negative culture", "Hepatotoxicity, interactions; not C. krusei"],
          ],
        },
        {
          heading: "Contaminant versus true bacteraemia",
          columns: ["Feature", "Contaminant", "True bacteraemia"],
          rows: [
            ["Organism", "CoNS, diphtheroids, Bacillus", "S. aureus, GNB, streptococci, Candida"],
            ["Sets positive", "One of two", "Two or more"],
            ["Time to positivity", "Over 48 h", "Under 24 h"],
            ["Patient", "Well, no device", "Septic, line or prosthetic valve"],
          ],
        },
        {
          heading: "Test timing and cut-offs",
          columns: ["Test", "When", "Interpretation"],
          rows: [
            ["NS1 / dengue RT-PCR", "Days 1-5", "Positive confirms current dengue"],
            ["IgM ELISA", "From day 5", "Recent infection; may persist months"],
            ["Paired IgG", "10-14 days apart", "Fourfold rise confirms acute infection"],
            ["PCT", "Serial", "Stop at 80% fall or under 0.5 ng/mL"],
            ["CRP (primary care LRTI)", "At presentation", "Under 20 no antibiotic; over 100 treat"],
          ],
        },
      ],
      remember: [
        "**Two sets, 20 mL each, before the first antibiotic.**",
        "**S. aureus and Candida are never contaminants.**",
        "**IgM from day 5; NS1 and PCR before it.**",
        "**MIC is drug-specific** - compare with its own breakpoint only.",
        "**PCT stops antibiotics, it does not start them.**",
        "**NAAT finds DNA, not life** - not a test of cure.",
        "**Treat the patient, not the swab.**",
      ],
    },
  },
};

export default revision;
