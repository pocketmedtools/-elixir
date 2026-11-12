import type { RevisionSet } from "./index";

const revision: RevisionSet = {};

revision["infectious-fever-infective-endocarditis"] = {
  checked: "2026-10",
  updated: [
    "Duke-ISCVID 2023: cardiac CT, FDG PET/CT and surgical inspection added as major criteria; typical organisms widened; PCR and Bartonella serology added.",
    "ESC 2023 IE: Endocarditis Team Class I; urgent surgery redefined as within 3-5 days.",
    "ESC 2023 IE: partial oral step-down after at least 10 days IV in stable left-sided IE (POET).",
    "ESC 2023 IE: cefazolin equal to cloxacillin for MSSA; no gentamicin in staphylococcal native-valve IE; TOE even after positive TTE.",
    "ESC 2023 IE and AHA 2021: clindamycin removed from dental prophylaxis; transcatheter valves and VADs added to high-risk group.",
  ],
  master: {
    heading: "Infective endocarditis on one page",
    columns: ["Heading", "What to write"],
    rows: [
      ["Definition", "Infection of endocardium (valve, prosthesis, device) with a vegetation; acute (S. aureus) or subacute (viridans streptococci)"],
      ["Burden", "3-10 per 100 000/year; India: young, RHD substrate, culture-negative 30-50% from prior antibiotics; in-hospital mortality 15-30%"],
      ["Organisms", "Viridans streptococci, S. aureus, E. faecalis, S. gallolyticus (colon cancer), CoNS (early PVE), HACEK; culture-negative: Coxiella, Bartonella, Brucella"],
      ["Pathogenesis", "Jet injury, sterile platelet-fibrin NBTE, bacteraemia with adhesins, vegetation on low-pressure side; emboli and immune complexes"],
      ["Clinical", "Fever 90%, murmur 85%, splinters, Osler (tender), Janeway (painless), Roth spots, splenomegaly, clubbing, emboli, heart failure"],
      ["Diagnosis", "Duke-ISCVID 2023: definite = 2 major, 1 major + 3 minor, or 5 minor; possible = 1 major + 1 minor, or 3 minor"],
      ["Blood cultures", "3 sets, separate venepunctures, 30 minutes apart, 10 mL per bottle, before antibiotics"],
      ["Imaging", "TTE first, TOE for prosthesis, negative TTE with suspicion, or to define complications; repeat in 5-7 days; CT and PET/CT"],
      ["Empirical", "Ampicillin + (flu)cloxacillin + gentamicin; early PVE: vancomycin + gentamicin + rifampicin"],
      ["Targeted", "Strep: penicillin or ceftriaxone 4 weeks; MSSA: cloxacillin or cefazolin 4-6 weeks; MRSA: vancomycin/daptomycin; E. faecalis: ampicillin + ceftriaxone 6 weeks; HACEK: ceftriaxone"],
      ["Surgery", "Emergency for shock/pulmonary oedema; urgent (3-5 days) for abscess, block, fistula, fungal/MDR, persistent bacteraemia, vegetation 10 mm with emboli"],
      ["Complications", "Heart failure, root abscess, emboli (stroke), mycotic aneurysm, GN, splenic abscess, drug nephrotoxicity"],
      ["Prevention", "Dental hygiene; amoxicillin 2 g 30-60 min before dental procedures in high-risk only; azithromycin 500 mg if allergic; no clindamycin"],
      ["Viva traps", "Cultures before antibiotics; Osler Ouch; duration from first negative culture; S. gallolyticus means colonoscopy; benzathine penicillin does not prevent IE"],
    ],
  },
  flows: [
    {
      kind: "flow",
      heading: "Suspected infective endocarditis: work-up",
      steps: [
        { label: "Fever with murmur, prosthesis, device or SAB", detail: "Suspect IE; examine for stigmata and emboli", tone: "neutral" },
        { label: "Three blood culture sets before antibiotics", detail: "Separate sites, 30 minutes apart, 10 mL per bottle", tone: "warn" },
        { label: "Transthoracic echo", detail: "Sensitivity about 70% native, 50% prosthetic", tone: "neutral" },
        { label: "TOE: prosthesis, negative TTE, or complications", detail: "Repeat in 5-7 days if negative and suspicion persists", tone: "decision" },
        { label: "Still unclear: cardiac CT, FDG PET/CT, serology", detail: "Coxiella, Bartonella, Brucella; valve PCR", tone: "decision" },
        { label: "Apply Duke-ISCVID 2023", detail: "Definite, possible or rejected", tone: "good" },
      ],
    },
    {
      kind: "ladder",
      heading: "Management ladder in IE",
      steps: [
        { label: "Endocarditis Team at a reference centre", detail: "Cardiology, surgery, ID, microbiology, imaging", tone: "neutral" },
        { label: "Empirical IV antibiotics after cultures", detail: "Ampicillin + cloxacillin + gentamicin; early PVE vancomycin + gentamicin + rifampicin", tone: "neutral" },
        { label: "Targeted therapy by organism and MIC", detail: "4 weeks NVE, 6 weeks PVE, from first negative culture", tone: "good" },
        { label: "Oral step-down if stable after 10 days IV", detail: "POET; no abscess on TOE", tone: "decision" },
        { label: "Urgent surgery within 3-5 days", detail: "Abscess, block, fungal, persistent bacteraemia, vegetation 10 mm with emboli", tone: "warn" },
        { label: "Emergency surgery within 24 hours", detail: "Cardiogenic shock or refractory pulmonary oedema", tone: "warn" },
      ],
    },
    {
      kind: "compare",
      heading: "Acute versus subacute IE",
      columns: ["Feature", "Acute IE", "Subacute IE"],
      rows: [
        ["Organism", "S. aureus", "Viridans streptococci, enterococci"],
        ["Valve", "Can infect normal valve", "Damaged valve (RHD, congenital)"],
        ["Course", "Days, toxic, destructive", "Weeks to months, low-grade fever"],
        ["Signs", "Abscess, heart failure, metastatic infection", "Immune signs: Osler, Roth, GN, clubbing, splenomegaly"],
        ["Mortality", "High without surgery", "Lower; curable with antibiotics"],
      ],
    },
  ],
  notes: {
    sections: [
      {
        title: "Definition and key facts",
        points: [
          "**Infective endocarditis** is infection of a valve, prosthesis or device with a **vegetation**.",
          "Incidence is **3-10 per 100 000** a year and rising with prostheses and devices.",
          "In India, patients are young and **rheumatic heart disease** is the commonest substrate.",
          "**Culture-negative IE** is 30-50% in India, mostly from antibiotics before cultures.",
          "In-hospital mortality is **15-30%**; worst with S. aureus, PVE and heart failure.",
        ],
      },
      {
        title: "Causes and risk factors",
        points: [
          "**Viridans streptococci** cause most community native-valve IE in India.",
          "**S. aureus** causes acute IE and can infect a normal valve.",
          "**S. gallolyticus** IE means a search for colorectal cancer.",
          "Culture-negative organisms: **Coxiella, Bartonella, Brucella**, fungi.",
          "High risk: previous IE, **prosthetic valve**, cyanotic congenital heart disease.",
        ],
      },
      {
        title: "Pathophysiology",
        points: [
          "Jet injury leads to a sterile platelet-fibrin clot (**NBTE**).",
          "Bacteraemic organisms stick using **adhesins** and form a vegetation.",
          "Vegetations sit on the **low-pressure side**: atrial mitral, ventricular aortic.",
          "Dense, slow-growing bacteria need **high-dose bactericidal drugs for weeks**.",
          "Emboli cause Janeway lesions and strokes; **immune complexes** cause Osler nodes, Roth spots and GN.",
        ],
      },
      {
        title: "Clinical features",
        points: [
          "**Fever** in 90% and a **new or changing murmur** in 85%.",
          "**Osler nodes** are tender finger pulp nodules; **Janeway lesions** are painless palm macules.",
          "Look for **Roth spots**, splinters, splenomegaly and clubbing.",
          "Embolic stroke, limb ischaemia or renal infarct may be the first sign.",
          "Right-sided IE in drug users presents as **septic pulmonary emboli**.",
        ],
      },
      {
        title: "Investigations",
        points: [
          "**Three blood culture sets**, 30 minutes apart, **before any antibiotic**.",
          "**TTE first**; TOE for prosthesis, negative TTE with suspicion, or complications.",
          "Repeat echo in **5-7 days** if negative and suspicion persists.",
          "**PET/CT** is a major criterion for prosthetic valves implanted over 3 months ago.",
          "Culture-negative: **Coxiella, Bartonella, Brucella serology** and valve PCR.",
          "New **PR prolongation** on ECG suggests an aortic root abscess.",
        ],
      },
      {
        title: "Treatment - first line",
        points: [
          "Empirical: **ampicillin plus cloxacillin plus gentamicin** after cultures.",
          "Penicillin allergy or early PVE: **vancomycin plus gentamicin** (plus rifampicin for PVE).",
          "Streptococci: **penicillin or ceftriaxone for 4 weeks**; 2 weeks with gentamicin if uncomplicated.",
          "MSSA: **cloxacillin or cefazolin 4-6 weeks**; no gentamicin in native-valve staphylococcal IE.",
          "E. faecalis: **ampicillin plus ceftriaxone for 6 weeks**.",
          "Count duration from the **first negative blood culture**.",
        ],
      },
      {
        title: "Treatment - next steps",
        points: [
          "**Emergency surgery** within 24 hours for cardiogenic shock or refractory pulmonary oedema.",
          "**Urgent surgery** in 3-5 days for abscess, heart block, fungal IE or persistent bacteraemia.",
          "Vegetation **10 mm or more with an embolus** needs urgent surgery.",
          "Ischaemic stroke does not delay surgery; **haemorrhage defers it about 4 weeks**.",
          "**Remove the whole device** in CIED infection.",
          "Stable patients may step down to **oral therapy after 10 days IV**.",
        ],
      },
      {
        title: "Special groups",
        points: [
          "Elderly: atypical presentation; **colonoscopy** for S. gallolyticus.",
          "CKD: dose **vancomycin and gentamicin by levels**; prefer ampicillin-ceftriaxone.",
          "Drug users: right-sided MSSA IE may need only **2 weeks of cloxacillin**.",
          "Pregnancy: beta-lactams and vancomycin are usable; avoid aminoglycosides where possible.",
        ],
      },
      {
        title: "Complications and red flags",
        points: [
          "**Heart failure** is the commonest complication and the main reason for surgery.",
          "Emboli occur in **20-50%**; the brain is the commonest site.",
          "**Mycotic aneurysm**, splenic abscess and glomerulonephritis are classic.",
          "Persistent fever after a week suggests abscess, metastatic focus or drug fever.",
        ],
      },
      {
        title: "Latest updates",
        points: [
          "**Duke-ISCVID 2023** added CT, PET/CT and surgical inspection as major criteria.",
          "**ESC 2023**: Endocarditis Team, urgent surgery within 3-5 days, oral step-down.",
          "Dental prophylaxis: **amoxicillin 2 g** for high risk only; clindamycin removed.",
          "RHD alone is not high risk in ESC/AHA, though prophylaxis is often given in India.",
        ],
      },
    ],
    tables: [
      {
        heading: "Drugs in infective endocarditis",
        columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
        rows: [
          ["Benzylpenicillin", "12-18 million U/day IV in 4-6 doses", "4 weeks NVE, 6 weeks PVE", "Allergy; seizures at high dose in renal failure"],
          ["Ceftriaxone", "2 g IV once daily (2 g 12-hourly with ampicillin for E. faecalis)", "4-6 weeks", "Biliary sludge, C. difficile"],
          ["(Flu)cloxacillin", "12 g/day IV in 4-6 doses", "4-6 weeks", "Phlebitis, cholestasis, neutropenia"],
          ["Cefazolin", "6 g/day IV in 3 doses", "4-6 weeks", "Rash; usable in non-severe penicillin allergy"],
          ["Vancomycin", "15-20 mg/kg IV 8-12-hourly after loading", "4-6 weeks; AUC 400-600", "Nephrotoxicity, infusion reaction"],
          ["Daptomycin", "10 mg/kg IV once daily", "4-6 weeks", "Myopathy; check CPK weekly"],
          ["Gentamicin", "3 mg/kg IV once daily", "2 weeks only", "Nephro- and ototoxicity; trough under 1 mg/L"],
          ["Rifampicin", "900 mg/day in 2-3 doses", "6 weeks or more in PVE", "Hepatotoxicity, drug interactions; never alone"],
        ],
      },
      {
        heading: "Duke-ISCVID 2023 in brief",
        columns: ["Type", "Criteria"],
        rows: [
          ["Major - micro", "Typical organism in 2 sets; non-typical in 3 sets; Coxiella phase I IgG 1:800 or more; PCR for Coxiella, Bartonella, Tropheryma"],
          ["Major - imaging", "Vegetation, abscess, perforation, fistula, new regurgitation or dehiscence on echo/CT; PET/CT uptake over 3 months post-implant"],
          ["Major - surgical", "IE seen at operation"],
          ["Minor", "Predisposition, fever above 38 C, vascular phenomena, immunological phenomena, sub-major micro or imaging"],
          ["Definite", "2 major, or 1 major + 3 minor, or 5 minor, or pathology"],
          ["Possible", "1 major + 1 minor, or 3 minor"],
        ],
      },
      {
        heading: "Surgery in IE: indication and timing",
        columns: ["Indication", "Timing"],
        rows: [
          ["Cardiogenic shock or refractory pulmonary oedema", "Emergency, within 24 hours"],
          ["Abscess, fistula, new heart block, enlarging vegetation", "Urgent, 3-5 days"],
          ["Fungal or MDR organism; cultures positive after 1 week", "Urgent"],
          ["Vegetation 10 mm or more with embolus", "Urgent"],
          ["Intracranial haemorrhage", "Defer about 4 weeks"],
        ],
      },
    ],
    remember: [
      "**Cultures before antibiotics** - three sets, 30 minutes apart.",
      "**Osler Ouch**: tender pulps; Janeway painless: palms and soles.",
      "**FROM JANE**: Fever, Roth, Osler, Murmur, Janeway, Anaemia, Nail splinters, Emboli.",
      "Vegetation on the **low-pressure side** of the jet.",
      "**S. gallolyticus means colonoscopy.**",
      "Duration from the **first negative culture**.",
      "New **PR prolongation** in aortic IE means root abscess.",
    ],
  },
};

export default revision;
