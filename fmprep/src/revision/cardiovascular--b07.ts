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
};

export default revision;
