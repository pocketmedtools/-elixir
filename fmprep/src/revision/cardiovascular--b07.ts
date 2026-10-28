import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "cardiovascular-rheumatic-heart-disease": {
    checked: "2026-10",
    updated: [
      "WHO 2024 guideline on RF/RHD: 2015 Jones criteria, echo including handheld, IM BPG preferred over oral antibiotics",
      "WHF 2023 echo criteria (published 2024): stages A-D replace borderline and definite RHD",
      "GOAL 2022: BPG every 4 weeks slows progression of latent RHD in children and adolescents",
      "INVICTUS 2022 reflected in ESC 2024 AF: VKA, not a DOAC, for AF with moderate-severe mitral stenosis",
      "ESC/EACTS 2025: DOACs contraindicated in rheumatic MS with MVA 2 cm² or less",
      "ESC 2023 endocarditis: native RHD is intermediate risk - no routine dental prophylaxis; clindamycin dropped",
    ],
    master: {
      heading: "Master revision table - Rheumatic heart disease in adults",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Chronic valve damage (mitral, then aortic) after **acute rheumatic fever**, the autoimmune sequel of **GAS pharyngitis** about 3 weeks earlier."],
        ["Burden", "Global **40 million**, 300,000 deaths/year; **India about a quarter** of cases; echo finds **20/1000** schoolchildren vs under 1/1000 by auscultation; REMEDY median age 28, two-thirds women."],
        ["Pathogenesis", "**Molecular mimicry** (M protein vs myosin, laminin); T cell valvulitis; acute = **regurgitation**, chronic = commissural fusion and **stenosis**; Aschoff bodies."],
        ["ARF diagnosis", "**Jones 2015**, India high-risk: GAS evidence + 2 major or 1 major + 2 minor; majors include **subclinical carditis, monoarthritis, polyarthralgia**; recurrence 3 minor; chorea and indolent carditis exempt."],
        ["Echo diagnosis", "**WHF 2023**: pathological MR (2 views, 2 cm or more, 3 m/s or more, pansystolic), AR (1 cm or more, pandiastolic); stages **A** early, **B** mild, **C** moderate-severe, **D** with complications."],
        ["Clinical picture", "Young woman with breathlessness, **AF**, stroke, haemoptysis or decompensation in pregnancy; half recall no ARF; ask BPG history."],
        ["Investigations", "**Echo** (key), ECG, CXR, ESR/CRP and ASO/anti-DNase B only if recurrence suspected, **blood cultures** if febrile, INR, TOE before PTMC or cardioversion."],
        ["Secondary prophylaxis", "**BPG 1.2 million units deep IM every 4 weeks** (3-weekly after breakthrough); penicillin V 250 mg BD; erythromycin 250 mg BD if allergic; continue after PTMC/surgery."],
        ["Duration", "AHA: **5 y or 21; 10 y or 21; 10 y or 40** (sometimes lifelong); Indian practice: 18, 25, **lifelong** for moderate-severe disease or after surgery."],
        ["RHD with AF", "**VKA, INR 2.0-3.0** regardless of score (INVICTUS); **no DOAC if rheumatic MVA 2 cm² or less** (ESC/EACTS 2025); rate control with beta-blocker plus digoxin."],
        ["Special situations", "Delabel penicillin allergy (under 5% true); severe valve disease - BPG after food, lying down, or oral penicillin; pregnancy - continue BPG, PTMC before conception if MVA under 1.5 cm²."],
        ["Programme", "Primary (BPG once or amoxicillin 10 days for sore throat), **register-based BPG** via ASHA and Ayushman Arogya Mandir, **RBSK** child screening, PTMC/surgery under **PM-JAY**, BPG in NLEM, WHA71.14."],
        ["Exam traps", "Stopping BPG after PTMC; CHA2DS2-VA in MS; ASO alone diagnoses nothing; amoxicillin dental prophylaxis in someone on penicillin."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected RHD in the OPD: from murmur to plan",
        steps: [
          { label: "Murmur, AF, stroke or breathlessness in a young adult", detail: "Ask about sore throats, joint pain, chorea, past injections" },
          { label: "Fever with arthritis or new murmur?", detail: "Think recurrent ARF or endocarditis: ESR/CRP, ASO, 3 blood cultures", tone: "warn" },
          { label: "Echo: rheumatic morphology and Doppler criteria", detail: "MR 2 cm or more, 3 m/s, pansystolic; AR 1 cm or more; MS gradient 4 mmHg or more", tone: "decision" },
          { label: "Stage by WHF 2023", detail: "A early, B mild, C moderate-severe, D with complications" },
          { label: "Start BPG 1.2 MU IM every 4 weeks and register", detail: "Injection card, ASHA reminder, target 80% of doses" },
          { label: "AF present? VKA to INR 2.0-3.0", detail: "No DOAC if rheumatic MVA 2 cm² or less", tone: "warn" },
          { label: "Refer moderate-severe disease for PTMC or surgery", detail: "Follow up every 3-12 months by severity", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "RHD control: prevention at every level",
        steps: [
          { label: "Primordial: housing, crowding, nutrition", detail: "RHD falls with development even before penicillin" },
          { label: "Primary: treat GAS sore throat", detail: "BPG 1.2 MU IM once or amoxicillin 50 mg/kg (max 1 g) daily for 10 days" },
          { label: "Screening: RBSK and echo screening", detail: "Handheld echo by trained workers, expert confirmation" },
          { label: "Secondary: register-based BPG", detail: "Every 4 weeks; 5/21, 10/21, 10/40 or lifelong" },
          { label: "Tertiary: PTMC, surgery, anticoagulation clinic", detail: "PM-JAY packages; VKA with INR monitoring", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Anticoagulation in RHD with AF",
        columns: ["Situation", "Drug", "Why"],
        rows: [
          ["AF with rheumatic MS, MVA 2 cm² or less", "VKA, INR 2.0-3.0", "INVICTUS: rivaroxaban inferior; DOAC contraindicated (ESC/EACTS 2025)"],
          ["AF with rheumatic MVA over 2 cm²", "Individual decision; VKA usual in India", "Little rheumatic evidence for DOACs"],
          ["AF with pure rheumatic MR or AR", "DOAC acceptable or VKA", "ESC treats as other native valve disease"],
          ["Mechanical valve (any rhythm)", "VKA only", "DOACs contraindicated"],
          ["Sinus rhythm, severe MS with LA over 50 mm or dense smoke", "Consider VKA", "High thrombus risk"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**RHD** is chronic valve damage left by acute rheumatic fever after streptococcal sore throat.",
            "The **mitral valve** is involved in almost all; the aortic in about a quarter.",
            "India carries about **a quarter** of the world's RHD cases.",
            "Echo screening finds about **20 per 1000** schoolchildren, most without a murmur.",
            "Half of adults with RHD **recall no rheumatic fever**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Only **group A streptococcal throat infection** is proven to trigger rheumatic fever.",
            "**Crowding** and poverty are the strongest environmental risks.",
            "Only 3-6% of people are **genetically susceptible**.",
            "**Molecular mimicry**: antibodies to M protein attack valve and myosin.",
            "Each **recurrence** adds valve damage; acute disease causes regurgitation, chronic causes stenosis.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Jones 2015**: India is high-risk, so monoarthritis and polyarthralgia count as major.",
            "**Subclinical carditis** on echo is a major criterion.",
            "Initial attack: GAS evidence plus 2 major, or 1 major and 2 minor.",
            "Recurrence can be diagnosed with **3 minor** criteria.",
            "**WHF 2023** stages: A early, B mild, C moderate-severe, D with complications.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Breathlessness, palpitations from **AF**, stroke, haemoptysis or decompensation in pregnancy.",
            "Ask the date of the **last penicillin injection** and missed doses.",
            "Fever with a murmur is **endocarditis** until proven otherwise.",
            "Look for AF, malar flush, loud P2 and the murmurs of each valve.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Echo** confirms rheumatic morphology and grades every valve.",
            "Pathological MR jet: **2 cm or more**, 3 m/s or more, pansystolic, in 2 views.",
            "ECG for AF and P mitrale; chest X-ray for LA enlargement.",
            "ASO and anti-DNase B only when **recurrent ARF** is suspected.",
            "Three **blood cultures** before antibiotics in any unexplained fever.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Benzathine penicillin G 1.2 million units** deep IM every 4 weeks.",
            "Use **every 3 weeks** after a breakthrough attack despite good adherence.",
            "Use lidocaine diluent and slow injection to reduce pain.",
            "Oral penicillin V 250 mg twice daily if injections are impossible.",
            "**Erythromycin 250 mg** twice daily for true penicillin allergy.",
            "Run prophylaxis through a **register** with ASHA reminders; aim for 80% of doses.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Duration: **5 years or 21, 10 years or 21, 10 years or 40** (AHA).",
            "Indian practice is **lifelong** for moderate-severe disease or after valve surgery.",
            "AF with rheumatic MS needs a **VKA**, INR 2.0-3.0, whatever the score.",
            "**INVICTUS**: rivaroxaban was inferior to VKA in RHD with AF.",
            "Refer moderate-severe disease for **PTMC or surgery**; drugs only relieve symptoms.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Fewer than 5% of **penicillin allergy** labels are true; refer for delabelling.",
            "Severe valve disease: give BPG after food, lying down, or consider oral penicillin.",
            "**Pregnancy**: continue BPG; PTMC before conception if MVA is under 1.5 cm².",
            "Avoid **combined pills** in complicated valve disease; offer IUCD or progestogen-only methods.",
            "On long-term penicillin, use **azithromycin** for dental prophylaxis, not amoxicillin.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Heart failure, AF, **stroke**, pulmonary hypertension, endocarditis and recurrences.",
            "REMEDY: about **17% died** within 2 years despite a median age near 30.",
            "Admit pulmonary oedema, fast AF, embolism, fever with murmur or bleeding on warfarin.",
            "Refer every woman with RHD who is **planning pregnancy**.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**WHO 2024**: first RF/RHD guideline in 20 years; prefers IM BPG.",
            "**WHF 2023** echo criteria add stages A to D.",
            "**GOAL 2022**: BPG cut latent RHD progression from 8.2% to 0.8%.",
            "**ESC/EACTS 2025**: no DOAC in rheumatic MS with valve area 2 cm² or less.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in RHD",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Benzathine penicillin G", "1.2 million units deep IM (600,000 in small children)", "Every 4 weeks; 3-weekly after breakthrough", "Pain; anaphylaxis 0.2%; vasovagal collapse in severe valve disease"],
            ["Penicillin V", "250 mg oral twice daily", "As for BPG", "Less effective; adherence poor"],
            ["Erythromycin", "250 mg oral twice daily", "As for BPG, if allergic", "GI upset, QT; raises INR"],
            ["Amoxicillin (sore throat)", "50 mg/kg oral once daily, max 1 g", "10 days", "Rash, diarrhoea"],
            ["Aspirin (ARF arthritis)", "50-60 mg/kg/day in 4 doses", "1-2 weeks then taper", "Salicylism, gastritis, Reye syndrome"],
            ["Warfarin / acenocoumarol", "2-5 mg / 1-2 mg oral daily, titrated", "INR 2.0-3.0, long term", "Bleeding, teratogenic, interactions"],
          ],
        },
        {
          heading: "Jones 2015 - moderate/high-risk population (India)",
          columns: ["Major criteria", "Minor criteria"],
          rows: [
            ["Carditis, clinical or subclinical", "Monoarthralgia"],
            ["Monoarthritis, polyarthritis or polyarthralgia", "Fever 38.0°C or more"],
            ["Sydenham chorea", "ESR 30 mm/h or more and/or CRP 3.0 mg/dL or more"],
            ["Erythema marginatum", "Prolonged PR interval for age"],
            ["Subcutaneous nodules", "Recurrence: 3 minor criteria are enough"],
          ],
        },
        {
          heading: "Duration of secondary prophylaxis",
          columns: ["Category", "AHA 2009", "Indian practice (WHO 2004 / IAP)"],
          rows: [
            ["No carditis", "5 years or until 21", "5 years or until 18"],
            ["Healed carditis, no residual disease", "10 years or until 21", "10 years or until 25"],
            ["Persistent valve disease", "10 years or until 40, sometimes lifelong", "Lifelong if moderate-severe"],
            ["After PTMC or surgery", "Continue by residual disease", "Lifelong"],
          ],
        },
      ],
      remember: [
        "**5-21, 10-21, 10-40**: AHA durations of BPG prophylaxis.",
        "**J-O-N-E-S**: Joints, carditis, Nodules, Erythema marginatum, Sydenham chorea.",
        "India is **high-risk**: polyarthralgia is a major criterion.",
        "Chorea and indolent carditis need **no streptococcal evidence**.",
        "**INVICTUS**: VKA beats rivaroxaban in RHD with AF.",
        "**Never stop BPG** after PTMC or valve replacement.",
        "Acute carditis = **regurgitation**; stenosis takes years.",
      ],
    },
  },

  "cardiovascular-mitral-stenosis": {
    checked: "2026-10",
    updated: [
      "ESC/EACTS 2025: PTMC remains first choice for suitable rheumatic MS; degenerative (MAC) MS handled separately",
      "ESC/EACTS 2025: DOACs contraindicated in rheumatic MS with MVA 2 cm² or less (INVICTUS 2022)",
      "ESC 2024 AF: VKA for AF with moderate-severe MS; CHA2DS2-VA not applicable",
      "ESC 2025 pregnancy: intervene before conception if MVA under 1.5 cm²",
    ],
    master: {
      heading: "Master revision table - Mitral stenosis",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Narrowed mitral orifice obstructing LV inflow; normal **4-6 cm²**; clinically significant **1.5 cm² or less**, very severe **1.0 or less**."],
        ["Aetiology", "**Rheumatic** commissural fusion (over 90%, mostly women, juvenile MS in India); degenerative MAC (elderly, CKD); congenital (parachute, Shone); Lutembacher (ASD + MS)."],
        ["Pathophysiology", "Gradient rises with flow squared and **short diastole**; LA pressure, pulmonary congestion, passive then reactive PH, RV failure; LA dilatation, **AF, thrombus**; LV protected."],
        ["Symptoms", "Exertional dyspnoea, orthopnoea, **haemoptysis**, palpitations, embolism, Ortner hoarseness; decompensation with AF, pregnancy, fever."],
        ["Signs", "Malar flush, tapping apex, parasternal heave, **loud S1, opening snap, MDM with presystolic accentuation** (left lateral, bell); severity = **short A2-OS + long murmur**."],
        ["Investigations", "ECG P mitrale/AF; CXR straight left border, double density, Kerley B; **echo** doming, fish-mouth, planimetry, **PHT (220/PHT)**, PASP, **Wilkins**; **TOE** before PTMC."],
        ["Grading", "MVA over 1.5 progressive; **1.5 or less / PHT 150 ms** severe; **1.0 or less / PHT 220 ms** very severe; mean gradient over 10 mmHg supportive; PASP over 50 matters."],
        ["Medical", "**Metoprolol/bisoprolol**, ivabradine in sinus rhythm, furosemide; AF: digoxin add-on, **VKA INR 2.0-3.0**, no DOAC; BPG secondary prophylaxis."],
        ["Intervention", "**PTMC** for symptomatic MVA 1.5 or less with Wilkins 8 or less, no more than mild MR, no LA thrombus; asymptomatic if PASP over 50, embolic risk, pregnancy planned; else surgery (CMV, OMC, MVR)."],
        ["Emergency", "Pulmonary oedema: sit up, IV furosemide 40-80 mg, **IV metoprolol** to slow rate; heparin bridge; urgent PTMC if refractory."],
        ["Pregnancy", "Severe MS mWHO IV; PTMC before conception; metoprolol (not atenolol), diuretics; **PTMC after 20 weeks** if refractory; vaginal delivery with epidural."],
        ["Complications", "AF (30-40%), embolism (10-20% untreated), PH, RHF, haemoptysis, IE; symptomatic untreated 10-year survival 0-15%."],
        ["Follow-up", "Echo yearly if severe asymptomatic, 2-3 yearly if progressive; INR 4-weekly; BPG card; refer pregnancy plans."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Mitral stenosis: from murmur to decision",
        steps: [
          { label: "Loud S1, OS, apical mid-diastolic rumble", detail: "Or unexplained AF, PH or embolism in a young adult" },
          { label: "TTE: MVA by planimetry, PHT, PASP, MR, Wilkins", detail: "Severe if MVA 1.5 cm² or less", tone: "decision" },
          { label: "Symptoms or PASP over 50 or pregnancy planned?", detail: "If not: yearly echo, BPG, rate control", tone: "decision" },
          { label: "TOE: LA appendage thrombus?", detail: "If present: VKA 1-3 months, re-image; surgery if it persists", tone: "warn" },
          { label: "Wilkins 8 or less and MR mild or less", detail: "PTMC with Inoue balloon", tone: "good" },
          { label: "Unsuitable or failed PTMC", detail: "Open commissurotomy or mitral valve replacement" },
        ],
      },
      {
        kind: "ladder",
        heading: "Medical ladder in mitral stenosis",
        steps: [
          { label: "Salt restriction, avoid sudden exertion, treat anaemia and fever", detail: "BPG 1.2 MU every 4 weeks" },
          { label: "Beta-blocker", detail: "Metoprolol succinate 25-200 mg or bisoprolol 2.5-10 mg daily" },
          { label: "Add furosemide for congestion", detail: "20-40 mg once or twice daily" },
          { label: "AF: add digoxin and VKA", detail: "Digoxin 0.125-0.25 mg; INR 2.0-3.0; no DOAC", tone: "warn" },
          { label: "Symptoms persist: PTMC or surgery", detail: "Drugs never relieve the obstruction", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Opening snap versus its mimics",
        columns: ["Sound", "Timing after A2", "Site and pitch", "Clue"],
        rows: [
          ["Opening snap", "40-120 ms", "Apex to left sternal edge, high-pitched", "Loud S1, MDM follows"],
          ["Split S2 (P2)", "Under 40-60 ms", "Pulmonary area, high-pitched", "Widens on inspiration"],
          ["S3", "120-160 ms", "Apex, low-pitched (bell)", "MR, heart failure, young"],
          ["Tumour plop", "Variable, 80-150 ms", "Apex, low-pitched", "Positional change, myxoma"],
          ["Pericardial knock", "100-120 ms", "Left sternal edge", "Constriction, Kussmaul sign"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Normal mitral valve area is **4-6 cm²**.",
            "Clinically significant MS is an area of **1.5 cm² or less**.",
            "Over 90% is **rheumatic**; two-thirds are women.",
            "**Juvenile MS** under 20 years is typical of India.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "The gradient rises with flow and with **shorter diastole**.",
            "Raised LA pressure causes **pulmonary congestion**, then pulmonary hypertension.",
            "A dilated LA causes **AF** and appendage thrombus.",
            "The LV is underfilled, so output is low and fixed.",
            "**Slowing the heart** lengthens diastole and lowers LA pressure.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Exertional dyspnoea, orthopnoea, **haemoptysis**, palpitations and embolic stroke.",
            "AF onset, pregnancy, fever and anaemia trigger decompensation.",
            "Signs: malar flush, tapping apex, **loud S1**, opening snap, mid-diastolic rumble.",
            "Hear the rumble with the bell, patient in the **left lateral position**.",
            "Severity: **short A2-OS gap** and a long murmur.",
          ],
        },
        {
          title: "Differential diagnosis",
          points: [
            "**Austin Flint**: severe AR, no opening snap.",
            "**Carey Coombs**: acute rheumatic valvulitis, soft and short.",
            "**LA myxoma**: tumour plop, positional symptoms, fever.",
            "Flow murmurs from severe MR, VSD or PDA.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "ECG: **P mitrale**, AF, right axis and RVH.",
            "CXR: straight left heart border, double density, **Kerley B lines**.",
            "Echo: hockey-stick leaflet, **fish-mouth** orifice, planimetry, PASP.",
            "Valve area equals **220 divided by pressure half-time**.",
            "**TOE** before PTMC to exclude appendage thrombus.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Beta-blocker** to control heart rate; ivabradine if in sinus rhythm and intolerant.",
            "Furosemide 20-40 mg for congestion.",
            "AF: rate control plus **VKA to INR 2.0-3.0**.",
            "No DOAC when rheumatic valve area is **2 cm² or less**.",
            "Continue **benzathine penicillin** every 4 weeks.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**PTMC** for symptomatic area 1.5 cm² or less with favourable anatomy.",
            "Favourable: **Wilkins 8 or less**, mild or no MR, no LA thrombus.",
            "Asymptomatic: PTMC if PASP over 50, high embolic risk or pregnancy planned.",
            "Surgery when valve is calcified, MR is more than mild or thrombus persists.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: decompensation in second trimester and around delivery.",
            "PTMC before conception if area is under 1.5 cm².",
            "In pregnancy use **metoprolol**, not atenolol; PTMC after 20 weeks if refractory.",
            "Elderly **MAC stenosis** has no commissural fusion; PTMC does not help.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "AF, **embolism**, pulmonary hypertension, right heart failure, haemoptysis.",
            "Untreated symptomatic MS: 10-year survival only **0-15%**.",
            "Admit pulmonary oedema, fast AF, embolism and refractory pregnancy symptoms.",
            "In pulmonary oedema **slow the heart** with IV metoprolol plus furosemide.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ESC/EACTS 2025**: DOAC contraindicated if rheumatic valve area is 2 cm² or less.",
            "**INVICTUS 2022**: VKA beat rivaroxaban in rheumatic AF.",
            "PTMC stays first choice for suitable rheumatic valves.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in mitral stenosis",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Metoprolol succinate", "25-200 mg oral daily; IV 2.5-5 mg slowly", "Long term", "Bradycardia, bronchospasm; safe in pregnancy"],
            ["Ivabradine", "5-7.5 mg oral twice daily", "Sinus rhythm only", "Phosphenes, bradycardia; useless in AF"],
            ["Furosemide", "20-40 mg oral; 40-80 mg IV in oedema", "Lowest effective dose", "Hypokalaemia, low output if overdiuresed"],
            ["Digoxin", "0.125-0.25 mg oral daily", "AF add-on", "Toxicity with low K, CKD, amiodarone"],
            ["Warfarin / acenocoumarol", "2-5 mg / 1-2 mg oral daily, titrated", "INR 2.0-3.0, long term", "Bleeding, embryopathy; no DOAC substitute"],
            ["Benzathine penicillin G", "1.2 million units deep IM", "Every 4 weeks, long term", "Pain, rare anaphylaxis"],
          ],
        },
        {
          heading: "Severity grading",
          columns: ["Parameter", "Progressive", "Severe", "Very severe"],
          rows: [
            ["Valve area", "Over 1.5 cm²", "1.5 cm² or less", "1.0 cm² or less"],
            ["Pressure half-time", "Under 150 ms", "150 ms or more", "220 ms or more"],
            ["Mean gradient", "Under 5-10 mmHg", "Over 10 mmHg", "Often over 15 mmHg"],
            ["A2-OS interval", "Over 100 ms", "Under 80 ms", "Very short"],
          ],
        },
        {
          heading: "Wilkins score components",
          columns: ["Component", "Score 1", "Score 4"],
          rows: [
            ["Mobility", "Only tips restricted", "No forward movement in diastole"],
            ["Thickening", "Near normal 4-5 mm", "Over 8-10 mm throughout"],
            ["Subvalvular", "Just below leaflets", "Extensive to papillary muscles"],
            ["Calcification", "Single bright area", "Throughout leaflets"],
          ],
        },
      ],
      remember: [
        "**1.5 cm²** = clinically significant; **1.0 cm²** = very severe.",
        "**MVA = 220 / PHT**.",
        "Severity = **short A2-OS + long murmur**.",
        "Wilkins **MTCS**: Mobility, Thickening, Calcification, Subvalvular; 8 or less for PTMC.",
        "**TOE before PTMC**.",
        "Rheumatic MS with AF: **VKA, never DOAC**.",
        "Eponyms: **Ortner**, **Lutembacher**, **Graham Steell**.",
      ],
    },
  },

  "cardiovascular-mitral-regurgitation": {
    checked: "2026-10",
    updated: [
      "ESC/EACTS 2025: new class I repair for selected low-risk asymptomatic primary MR",
      "ESC/EACTS 2025: atrial vs ventricular secondary MR; atrial - surgery IIa, TEER IIb",
      "ESC/EACTS 2025: TEER class I for symptomatic ventricular secondary MR meeting COAPT criteria (RESHAPE-HF2 2024)",
      "ESC/EACTS 2025: indexed LVESD 20 mm/m² added to the 40 mm threshold",
      "EHRA 2022 consensus on arrhythmic MVP and mitral annular disjunction",
    ],
    master: {
      heading: "Master revision table - Mitral regurgitation and MVP",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Systolic LV-to-LA backflow; **primary** (leaflets/chords) vs **secondary** (ventricular or atrial remodelling); acute vs chronic."],
        ["Causes", "MVP (Barlow, fibroelastic deficiency), **rheumatic** (young Indians), IE, papillary rupture after MI, DCM/ischaemic, AF/HFpEF (atrial), cleft, Marfan, drugs."],
        ["Pathophysiology", "Volume overload, eccentric LVH, compliant LA; **supernormal EF** so 60% or less = dysfunction; acute: stiff LA, giant v wave, pulmonary oedema."],
        ["Carpentier", "**I** normal motion (annulus, perforation), **II** excessive (prolapse, flail), **IIIa** restricted (rheumatic), **IIIb** systolic tethering (ischaemic)."],
        ["Signs", "Displaced hyperdynamic apex, **apical pansystolic murmur to axilla**, soft S1, S3, flow rumble; MVP: **mid-systolic click + late systolic murmur**."],
        ["Echo severity", "Severe: **EROA 0.40 cm², RVol 60 mL, RF 50%, VC 0.7 cm**, pulmonary vein systolic reversal, flail; SMR low flow EROA 0.30 / RVol 45 may be severe."],
        ["Investigations", "ECG (AF, LAE), CXR, **TTE**, TOE (repair/TEER planning), exercise echo, CMR, BNP, coronary angiography pre-op; Holter in MVP."],
        ["Primary MR surgery", "Symptoms; **LVEF 60% or less**; **LVESD 40 mm or more** (20 mm/m²); low-risk asymptomatic with AF, PASP over 50, LA dilatation (class I 2025); **repair preferred**."],
        ["Secondary MR", "**GDMT + CRT first**; TEER if LVEF 20-50%, LVESD 70 mm or less, PASP 70 or less, NYHA II-IV (COAPT; class I 2025); atrial SMR - control AF."],
        ["Acute MR", "IV nitroprusside or nitroglycerin, furosemide, inotropes, **IABP**, emergency surgery; papillary rupture posteromedial."],
        ["MVP", "2-3% prevalence; benign mostly; beta-blocker for symptoms; no IE prophylaxis; arrhythmic MVP - bileaflet, **MAD**, inferior TWI, LGE."],
        ["Follow-up", "Echo: mild 3-5 yearly, moderate 1-2 yearly, **severe 6-12 monthly**; refer at thresholds to a heart valve centre."],
        ["Trials", "**COAPT** (benefit), **MITRA-FR** (neutral - proportionate MR), **RESHAPE-HF2** (benefit), EVEREST II (surgery more effective, TEER safer)."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Severe MR: work-up to decision",
        steps: [
          { label: "Pansystolic murmur or MR on echo", detail: "Acute presentation? Pulmonary oedema, shock, post-MI, fever", tone: "decision" },
          { label: "Acute severe MR", detail: "Nitroprusside, diuretic, IABP, emergency surgery", tone: "warn" },
          { label: "Chronic: define mechanism", detail: "Primary (leaflet) vs secondary (ventricular or atrial)", tone: "decision" },
          { label: "Primary: symptoms, LVEF 60% or less, LVESD 40 mm?", detail: "Yes: repair; high risk: TEER" },
          { label: "Primary, none of these", detail: "Low-risk with likely repair and AF/PASP over 50: early repair; else echo 6-12 monthly" },
          { label: "Secondary: GDMT and CRT 3 months", detail: "Still NYHA II-IV and COAPT criteria: TEER", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Mechanism of MR (Carpentier)",
        root: "Mitral regurgitation",
        arms: [
          { label: "Type I - normal motion", steps: ["Annular dilatation (atrial SMR)", "Perforation (IE)", "Cleft"] },
          { label: "Type II - excessive motion", steps: ["Barlow prolapse", "Fibroelastic deficiency", "Chordal or papillary rupture"] },
          { label: "Type IIIa - restricted both phases", steps: ["Rheumatic", "Radiation, drugs"] },
          { label: "Type IIIb - restricted in systole", tone: "warn", steps: ["Ischaemic tethering", "Dilated cardiomyopathy"] },
        ],
      },
      {
        kind: "compare",
        heading: "Acute versus chronic MR",
        columns: ["Feature", "Acute", "Chronic"],
        rows: [
          ["LA", "Normal size, stiff", "Large, compliant"],
          ["Symptoms", "Pulmonary oedema, shock", "Years silent, then dyspnoea, AF"],
          ["Murmur", "Short, early, may be soft", "Pansystolic to axilla"],
          ["CXR", "Normal heart, oedema", "Cardiomegaly"],
          ["Treatment", "Afterload reduction, IABP, surgery", "Surgery by symptoms or LV thresholds"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "MR is **systolic backflow** from left ventricle to left atrium.",
            "**Primary** MR is disease of leaflets or chords; **secondary** MR comes from a dilated ventricle or atrium.",
            "Moderate or severe MR affects about **10% of those over 75**.",
            "In young Indians the commonest cause is **rheumatic**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Chronic MR is a **volume overload** with a large compliant LA.",
            "EF is supernormal, so an **EF of 60% or less** means dysfunction.",
            "Acute MR hits a stiff LA, causing **pulmonary oedema** with normal heart size.",
            "Secondary MR falls with diuretics, **GDMT** and CRT.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Carpentier **I** normal motion, **II** excessive motion, **IIIa** rheumatic restriction, **IIIb** systolic tethering.",
            "Severe: **EROA 0.40 cm²**, regurgitant volume 60 mL, fraction 50%, vena contracta 0.7 cm.",
            "Pulmonary vein **systolic reversal** and flail leaflet are specific for severe MR.",
            "ESC 2025 separates **atrial** from **ventricular** secondary MR.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Exertional dyspnoea, fatigue and **AF** after years of silence.",
            "Displaced hyperdynamic apex; **pansystolic murmur to the axilla**; soft S1; S3.",
            "**MVP**: mid-systolic click and late systolic murmur.",
            "Standing or Valsalva brings the **click earlier** and lengthens the murmur.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Echo** gives mechanism, severity, LV size, EF and PASP.",
            "Diagnose MVP only in the **parasternal long-axis** view: 2 mm or more.",
            "TOE plans repair or TEER; MRI if echo is unclear.",
            "Coronary angiography before mitral surgery in older patients.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "No drug delays surgery in **chronic primary MR**.",
            "Surgery for symptoms, **EF 60% or less** or **LVESD 40 mm or more**.",
            "**Repair** is preferred over replacement.",
            "Early repair in low-risk asymptomatic patients with AF or PASP over 50.",
            "AF in non-rheumatic MR may use a **DOAC**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Secondary MR: **GDMT and CRT** first for 3 months.",
            "**TEER** if EF 20-50%, LVESD 70 mm or less, PASP 70 or less, still symptomatic.",
            "COAPT showed fewer admissions and deaths; MITRA-FR did not.",
            "TEER in primary MR only at **high surgical risk**.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Acute MR: IV **nitroprusside** or nitroglycerin plus furosemide.",
            "Shock: dobutamine and **intra-aortic balloon pump** as bridge.",
            "Papillary muscle rupture needs **emergency surgery**.",
            "Endocarditis with acute MR and failure needs urgent surgery.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Pregnancy tolerates MR well; repair severe MR with LV dysfunction beforehand.",
            "**Arrhythmic MVP**: bileaflet prolapse, annular disjunction, inferior T inversion, ectopy.",
            "No endocarditis prophylaxis for **MVP**.",
            "Rheumatic MR in the young often needs **replacement**, plus penicillin prophylaxis.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Echo: mild every 3-5 years, moderate 1-2 years, **severe 6-12 months**.",
            "Refer severe MR early to a **heart valve centre**.",
            "ESC 2025: TEER class I in ventricular secondary MR meeting criteria.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in mitral regurgitation",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Furosemide", "20-80 mg oral; 40-80 mg IV", "As needed for congestion", "Low K, hypotension"],
            ["Sacubitril/valsartan", "24/26 mg to 97/103 mg oral twice daily", "Long term in HFrEF", "Hypotension, high K; 36 h after ACE inhibitor"],
            ["Metoprolol succinate", "12.5-200 mg oral daily", "Long term", "Bradycardia; propranolol for MVP symptoms"],
            ["Dapagliflozin", "10 mg oral daily", "Long term in HFrEF", "Genital infection, ketoacidosis"],
            ["Sodium nitroprusside", "0.3-3 mcg/kg/min IV", "Hours in acute MR", "Hypotension, cyanide toxicity"],
            ["Apixaban (AF, non-rheumatic MR)", "5 mg oral twice daily", "Long term", "Bleeding; not with mechanical valve"],
          ],
        },
        {
          heading: "Echo grading of MR",
          columns: ["Parameter", "Mild", "Moderate", "Severe"],
          rows: [
            ["EROA", "Under 0.20 cm²", "0.20-0.39 cm²", "0.40 cm² or more"],
            ["Regurgitant volume", "Under 30 mL", "30-59 mL", "60 mL or more"],
            ["Regurgitant fraction", "Under 30%", "30-49%", "50% or more"],
            ["Vena contracta", "Under 0.3 cm", "0.3-0.69 cm", "0.7 cm or more"],
          ],
        },
        {
          heading: "Primary versus secondary MR",
          columns: ["Feature", "Primary", "Secondary"],
          rows: [
            ["Problem", "Leaflets or chords", "Ventricle or atrium"],
            ["Examples", "MVP, rheumatic, IE", "Ischaemic, DCM, AF"],
            ["First step", "Surgery at thresholds", "GDMT, CRT, AF control"],
            ["Intervention", "Repair; TEER if high risk", "TEER (COAPT criteria); surgery with CABG"],
          ],
        },
      ],
      remember: [
        "Severe MR: **40-60-50-7** (EROA 0.40, RVol 60, RF 50%, VC 0.7 cm).",
        "Surgery triggers: **symptoms, EF 60% or less, LVESD 40 mm**.",
        "**Repair beats replacement**.",
        "Primary: fix the valve; secondary: **fix the ventricle first**.",
        "COAPT yes, MITRA-FR no: **disproportionate** MR responds.",
        "Papillary rupture: **posteromedial**, days 2-7.",
        "MVP: smaller LV, **earlier click**.",
      ],
    },
  },
};

export default revision;
