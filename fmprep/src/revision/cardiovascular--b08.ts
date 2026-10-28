import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "cardiovascular-aortic-regurgitation": {
    checked: "2026-10",
    updated: [
      "ESC/EACTS 2025 valvular heart disease guideline: Class I surgical triggers kept (symptoms, LVESD over 50 mm or 25 mm/m², LVEF 50% or less); Heart Valve Centre emphasis",
      "ESC/EACTS 2025: indexed LV volumes and CMR quantification for timing surgery in asymptomatic severe AR",
      "ESC/EACTS 2025: transcatheter implantation with dedicated devices for pure AR in selected inoperable patients (after ALIGN-AR 2024)",
      "ACC/AHA 2020 retained as the US comparator: LVEF 55% or less is a Class 1 trigger (conflict with ESC 50%)",
      "ESC 2024 peripheral arterial and aortic disease guideline: root and ascending aorta thresholds",
      "ESC 2023 endocarditis guideline: urgent surgery redefined as within 3-5 days",
      "WHO 2024 rheumatic fever and RHD guideline: penicillin primary and secondary prophylaxis",
    ],
    master: {
      heading: "Aortic regurgitation on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Diastolic backflow from aorta to LV through an incompetent valve; leaflet or root disease; chronic volume plus pressure overload"],
        ["Causes", "Leaflet: rheumatic (India), bicuspid, IE, degenerative. Root: hypertension/age, Marfan, bicuspid aortopathy, syphilis, ankylosing spondylitis, Takayasu, dissection"],
        ["Acute AR causes", "Endocarditis, type A dissection, trauma, prosthetic failure"],
        ["Pathophysiology", "Raised LVEDV and stroke volume; wide pulse pressure; compliant LV keeps LVEDP normal for years; LVESD rises before symptoms"],
        ["Symptoms", "Long silent phase; pounding heartbeat, exertional dyspnoea, orthopnoea, nocturnal angina; syncope rare"],
        ["Signs", "Collapsing pulse, wide pulse pressure, Corrigan, de Musset, Quincke, Duroziez, Traube, Hill (over 60 mmHg severe); displaced hyperdynamic apex"],
        ["Murmur", "Early diastolic decrescendo at left 3rd space, sitting forward, expiration; right-sided = root; Austin Flint apical rumble without opening snap"],
        ["Investigations", "ECG volume-overload LVH; CXR LV enlargement, dilated aorta; TTE cause, severity, LVESD, LVEF, aorta; TOE, CMR, CT as needed"],
        ["Severe on echo", "Vena contracta over 6 mm, PHT under 200 ms, holodiastolic aortic reversal, RVol 60 mL or more, RF 50% or more, EROA 0.30 cm² or more"],
        ["OPD treatment", "Echo surveillance; treat hypertension with CCB or ACE inhibitor/ARB; avoid beta-blockers (except Marfan); rheumatic prophylaxis; dental care"],
        ["Surgery", "Symptomatic severe; or LVESD over 50 mm or 25 mm/m², LVEF 50% or less (ACC/AHA 55%); concomitant surgery; root 55 mm (Marfan 50 mm)"],
        ["Acute AR", "Emergency surgery; nitroprusside and dobutamine bridge; IABP contraindicated; avoid beta-blockers except dissection"],
        ["Follow-up", "Echo mild 3-5 years, moderate 1-2 years, severe 6-12 months; refer root 45 mm or more"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Working up suspected AR in the OPD",
        steps: [
          { label: "Wide pulse pressure or early diastolic murmur", detail: "Collapsing pulse, displaced apex, murmur at Erb point" },
          { label: "Acute presentation?", detail: "Pulmonary oedema, shock, fever or tearing pain", tone: "decision" },
          { label: "Yes: emergency referral", detail: "Echo, blood cultures, CT aorta; surgery same day", tone: "warn" },
          { label: "No: ECG and chest X-ray", detail: "Volume-overload LVH, LV enlargement, dilated aorta" },
          { label: "Transthoracic echo", detail: "Cause, severity, LVESD and index, LVEF, aortic diameters" },
          { label: "Grade and stage", detail: "Mild, moderate or severe; symptoms; LV thresholds", tone: "decision" },
          { label: "Surveillance or surgical referral", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Management ladder in chronic AR",
        steps: [
          { label: "Mild AR", detail: "Echo every 3-5 years; BP control; dental care" },
          { label: "Moderate AR", detail: "Echo every 1-2 years; treat hypertension with CCB or ACE inhibitor/ARB" },
          { label: "Severe AR, no symptoms, normal LV", detail: "Echo every 6-12 months; 3-6 months near thresholds", tone: "decision" },
          { label: "Severe AR with LV thresholds crossed", detail: "LVESD over 50 mm or 25 mm/m², LVEF 50% or less: surgery", tone: "warn" },
          { label: "Symptomatic severe AR", detail: "Surgery regardless of LV function", tone: "warn" },
          { label: "Inoperable", detail: "Diuretic, ACE inhibitor/ARB or sacubitril-valsartan; consider transcatheter device" },
        ],
      },
      {
        kind: "compare",
        heading: "Acute versus chronic AR",
        columns: ["Feature", "Acute AR", "Chronic AR"],
        rows: [
          ["LV", "Normal size, stiff", "Dilated, compliant"],
          ["Pulse pressure", "Near normal", "Wide"],
          ["Peripheral signs", "Absent", "Present"],
          ["Murmur", "Short, soft", "Long, blowing"],
          ["S1", "Soft (premature mitral closure)", "Normal"],
          ["Presentation", "Pulmonary oedema, shock", "Silent for years"],
          ["Treatment", "Emergency surgery", "Surveillance, timed surgery"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Aortic regurgitation** is diastolic backflow from the aorta into the left ventricle.",
            "It comes from disease of the **leaflets**, the **aortic root**, or both.",
            "Chronic AR is a **volume plus pressure overload** with a long silent phase.",
            "**Acute AR** is a surgical emergency with few classic signs.",
            "In India **rheumatic disease** is a leading cause, usually with mitral disease.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Leaflet causes: **rheumatic**, bicuspid valve, endocarditis, degenerative disease, SLE.",
            "Root causes: hypertension, **Marfan syndrome**, bicuspid aortopathy, syphilis, ankylosing spondylitis, Takayasu arteritis.",
            "Acute causes: **endocarditis**, type A dissection, trauma, failed prosthesis.",
            "**Bicuspid valve** affects 1-2% of people, mostly men; screen first-degree relatives.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "1. Regurgitant volume raises **LV end-diastolic volume**.",
            "2. Stroke volume rises, so systolic pressure rises and diastolic pressure falls: **wide pulse pressure**.",
            "3. The compliant LV keeps filling pressure normal for years.",
            "4. Fibrosis and afterload mismatch later lower ejection fraction.",
            "5. Low diastolic pressure cuts coronary flow, causing **nocturnal angina**.",
            "6. Slow heart rate lengthens diastole and worsens the leak, so avoid beta-blockers.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Early complaint: **pounding heartbeat** in the head or neck, worse lying on the left.",
            "Later: exertional dyspnoea, orthopnoea and paroxysmal nocturnal dyspnoea.",
            "**Nocturnal angina** with sweating is typical; syncope is rare.",
            "Ask about rheumatic fever, fever with dental work, back stiffness and sexually transmitted infection.",
            "Acute AR: sudden **pulmonary oedema** and shock, with tearing pain if dissection.",
          ],
        },
        {
          title: "Examination",
          points: [
            "**Collapsing pulse** and wide pulse pressure; diastolic often under 60 mmHg.",
            "Run-off signs: Corrigan, de Musset, Quincke, Traube, Duroziez, Muller and **Hill sign**.",
            "Hill gradient **over 60 mmHg** means severe AR; reversed in coarctation.",
            "**Early diastolic murmur** at left 3rd space, patient sitting forward in held expiration.",
            "Right sternal border murmur suggests **root disease**: Marfan, syphilis or dissection.",
            "**Austin Flint**: apical rumble with no opening snap and no loud S1.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**ECG**: LVH with volume-overload pattern and deep narrow lateral Q waves.",
            "**Chest X-ray**: LV enlargement and a dilated ascending aorta.",
            "**Echo** gives cause, severity, LVESD and its index, LVEF and aortic size.",
            "Severe AR: vena contracta **over 6 mm**, regurgitant fraction 50% or more, holodiastolic aortic reversal.",
            "Use TOE for endocarditis or dissection; CMR when echo is unclear.",
            "Blood cultures if febrile; VDRL and TPHA, ESR and HLA-B27 as indicated.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Echo every **3-5 years** for mild, 1-2 years for moderate, 6-12 months for severe.",
            "Treat hypertension with **amlodipine** or an ACE inhibitor or ARB.",
            "Vasodilators do **not** delay surgery in normotensive patients.",
            "Avoid beta-blockers in pure AR, except **Marfan syndrome** with losartan or beta-blocker.",
            "Continue **benzathine penicillin** prophylaxis in rheumatic AR.",
            "No routine antibiotic prophylaxis for dental work in native AR.",
            "Refer any symptom, moderate or severe AR, or root **45 mm or more**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Operate on **symptomatic severe AR** regardless of LV function.",
            "Operate without symptoms if **LVESD over 50 mm**, over 25 mm/m², or LVEF 50% or less.",
            "ACC/AHA uses **LVEF 55% or less** as the Class 1 trigger.",
            "Replace the root at **55 mm**, or 50 mm in Marfan syndrome.",
            "Options: valve replacement, **Bentall**, valve-sparing root replacement, Ross procedure.",
            "**Pregnancy**: AR is usually tolerated; stop ACE inhibitors and ARBs before conception.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Acute severe AR needs **emergency surgery** the same day.",
            "**Premature mitral closure** on echo means operate immediately.",
            "Bridge with **nitroprusside**, dobutamine and IV furosemide.",
            "**IABP is contraindicated**: diastolic inflation worsens the leak.",
            "Endocarditis with shock: surgery **within 24 hours**; with heart failure, within 3-5 days.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ESC/EACTS 2025** keeps Class I triggers and stresses Heart Valve Centres.",
            "ESC/EACTS 2025 adds **indexed LV volumes** and CMR to time surgery.",
            "Dedicated **transcatheter valves** for pure AR are an option in inoperable patients.",
            "**WHO 2024** guideline reinforces penicillin prophylaxis for rheumatic fever.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in aortic regurgitation",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Amlodipine", "5-10 mg oral once daily", "Long term if hypertensive", "Ankle oedema, flushing"],
            ["Enalapril", "2.5-20 mg oral twice daily", "Long term; titrate every 2 weeks", "Cough, hyperkalaemia; not in pregnancy"],
            ["Losartan", "25-100 mg oral daily", "Long term; Marfan root", "Hyperkalaemia; not in pregnancy"],
            ["Furosemide", "20-80 mg oral daily; 40-80 mg IV", "While congested", "Low potassium, dehydration"],
            ["Sodium nitroprusside", "IV 0.3-10 microgram/kg/min", "Hours, bridge to surgery", "Hypotension, cyanide toxicity"],
            ["Dobutamine", "IV 2.5-10 microgram/kg/min", "Short term in acute AR", "Arrhythmia, ischaemia"],
            ["Benzathine penicillin G", "1.2 million units deep IM every 3-4 weeks", "Years, per RHD plan", "Anaphylaxis (rare), injection pain"],
          ],
        },
        {
          heading: "Echo grading of AR",
          columns: ["Parameter", "Mild", "Severe"],
          rows: [
            ["Vena contracta", "Under 3 mm", "Over 6 mm"],
            ["Jet width / LVOT", "Under 25%", "65% or more"],
            ["Pressure half-time", "Over 500 ms", "Under 200 ms"],
            ["Aortic flow reversal", "Brief, early diastolic", "Holodiastolic"],
            ["Regurgitant volume", "Under 30 mL", "60 mL or more"],
            ["Regurgitant fraction", "Under 30%", "50% or more"],
            ["EROA", "Under 0.10 cm²", "0.30 cm² or more"],
          ],
        },
        {
          heading: "Differential diagnosis",
          columns: ["Condition", "Tell-tale feature"],
          rows: [
            ["Pulmonary regurgitation (Graham Steell)", "Left 2nd space, louder on inspiration, loud P2, normal pulse pressure"],
            ["Mitral stenosis (vs Austin Flint)", "Loud S1, opening snap, presystolic accentuation"],
            ["Hyperdynamic circulation", "Collapsing pulse but no diastolic murmur"],
            ["Patent ductus arteriosus", "Continuous machinery murmur"],
            ["Ruptured sinus of Valsalva", "Sudden onset, continuous murmur, heart failure"],
          ],
        },
      ],
      remember: [
        "Causes **CRAB-SM**: Congenital bicuspid, Rheumatic, Aortic root, Bacterial endocarditis, Syphilis, Marfan.",
        "**IABP is contraindicated in AR**; beta-blockers worsen pure AR.",
        "**Acute AR has no classic signs**: normal pulse pressure, short murmur, soft S1.",
        "Operate if **LVESD over 50** or LVEF 50% or less, even without symptoms.",
        "**Right-sided murmur means root disease** (Harvey sign).",
        "**Hill sign over 60 mmHg** means severe AR.",
        "**Austin Flint**: functional MS with no opening snap.",
      ],
    },
  },
};

export default revision;
