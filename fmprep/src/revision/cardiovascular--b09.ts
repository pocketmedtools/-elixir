import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "cardiovascular-adult-chd": {
    checked: "2026-10",
    updated: [
      "ESC/ERS 2022 PH: shunt closure only if PVR under 3 WU; 3-5 WU individual; 5 WU or more only if it falls with PAH therapy.",
      "ESC 2023 IE: CHD repaired with prosthetic material (surgical or transcatheter) is high risk for 6 months; clindamycin dropped.",
      "ESC 2025 pregnancy: mWHO classes retained; Eisenmenger and severe native coarctation remain class IV.",
      "ESC 2024 hypertension: coarctation listed among secondary causes to exclude in young hypertensives.",
    ],
    master: {
      heading: "Master revision table - Adult congenital heart disease",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Structural defect from birth seen after 18 - **unrepaired shunts/obstruction** or **repaired lesions with residua**; Eisenmenger = shunt reversal from pulmonary vascular disease."],
        ["Burden", "8-10 per 1000 births; **over 2 lakh Indian births/year**; 90% now reach adulthood; HF commonest death, arrhythmia commonest admission."],
        ["ASD", "Secundum 75%, primum 15-20%, sinus venosus 5-10%; **wide fixed split S2**, pulmonary ESM, RV heave; ECG **iRBBB + right axis** (primum: RBBB + left axis + long PR)."],
        ["VSD", "Perimembranous 80%; harsh PSM with thrill left 3rd-4th space; **smaller = louder**; outlet VSD in Asians gives aortic cusp prolapse and AR."],
        ["PDA", "**Machinery murmur** left infraclavicular, bounding pulse, wide pulse pressure; Eisenmenger PDA = **differential cyanosis** (toes, not fingers)."],
        ["Coarctation", "**Radio-femoral delay**, arm-leg gradient over 20 mmHg, interscapular murmur, **rib notching 3rd-8th ribs**, figure-of-3; BAV in half, Turner, berry aneurysm 10%."],
        ["Repaired TOF", "Transannular patch causes **free PR and RV dilatation**; RBBB, **QRS 180 ms or more** = VT risk; PVR if RVEDVi 160 or RVESVi 80 mL/m2."],
        ["Eisenmenger", "Cyanosis, clubbing, loud P2, Graham Steell, shunt murmur gone; S2: **ASD fixed, VSD single, PDA normal**; erythrocytosis, haemoptysis, gout."],
        ["Investigations", "Four-limb SpO2, ECG, CXR, **TTE + bubble**, TEE for rims, **CMR for RV volume**, CT for coarctation, **catheter PVR** before closure."],
        ["Closure rule", "Close if volume overload and **PVR under 3 WU**; 3-5 individual; 5 or more only if falls on therapy; **never close Eisenmenger**."],
        ["Eisenmenger treatment", "**Bosentan 62.5 then 125 mg BD**, add sildenafil 20 mg TDS; no dehydration, altitude, pregnancy, oestrogen; phlebotomy only symptomatic Hct over 65%; air filters."],
        ["Pregnancy and IE", "mWHO I repaired simple, II unoperated ASD/VSD and repaired TOF, IV Eisenmenger/severe coarctation; IE prophylaxis for cyanotic CHD and 6 months after prosthetic repair."],
        ["Follow-up", "Severe 6-12 monthly, moderate 1-2 yearly, mild 3-5 yearly; coarctation CMR/CT every 3-5 years; repaired TOF CMR every 2-3 years."],
        ["Programme", "**RBSK** screening, DEIC referral, free surgery via RBSK/PM-JAY; rubella (MR) vaccine; folic acid; avoid lithium, valproate, warfarin in pregnancy."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Adult with a shunt lesion: can it still be closed?",
        steps: [
          { label: "Murmur, RV heave or cyanosis in an adult", detail: "Four-limb SpO2, ECG, chest X-ray" },
          { label: "Transthoracic echo with bubble study", detail: "Site, size, shunt direction, RV/LV volume load, PASP" },
          { label: "Volume overload present?", detail: "RV for ASD; LA/LV for VSD and PDA", tone: "decision" },
          { label: "No overload - follow up, IE and dental care", detail: "Small VSD, silent PDA" },
          { label: "Overload with raised PA pressure - catheter PVR", tone: "decision" },
          { label: "PVR under 3 WU - close", detail: "Device for secundum ASD and PDA; surgery for VSD, primum, sinus venosus", tone: "good" },
          { label: "PVR 3-5 WU - individual decision", detail: "Qp:Qs over 1.5 favours closure" },
          { label: "PVR 5 WU or more / Eisenmenger - do not close", detail: "PAH therapy; fenestrated closure only if PVR falls under 5", tone: "warn" },
        ],
      },
      {
        kind: "ladder",
        heading: "Eisenmenger syndrome - management ladder",
        steps: [
          { label: "General measures", detail: "Hydration, no altitude or heavy exertion, no smoking, vaccines, dental care" },
          { label: "Correct iron deficiency", detail: "Oral or IV iron cautiously; recheck Hct in 2-4 weeks" },
          { label: "Avoid harm", detail: "No oestrogen pill, no pregnancy, no routine phlebotomy, air filters on IV lines", tone: "warn" },
          { label: "Bosentan in WHO-FC III", detail: "62.5 mg BD for 4 weeks, then 125 mg BD; monthly LFT" },
          { label: "Add PDE5 inhibitor", detail: "Sildenafil 20 mg TDS or tadalafil 40 mg OD if not improving" },
          { label: "Refractory - transplant assessment", detail: "Heart-lung or lung transplant with defect repair", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "ASD vs VSD vs PDA at the bedside",
        columns: ["Feature", "ASD", "VSD", "PDA"],
        rows: [
          ["Chamber overloaded", "RA, RV", "LA, LV", "LA, LV"],
          ["Murmur", "Pulmonary ESM (flow)", "Harsh PSM, left 3rd-4th space", "Continuous machinery, infraclavicular"],
          ["S2", "Wide fixed split", "Normal; loud P2 if PH", "Normal or paradoxical"],
          ["Pulse", "Normal", "Normal", "Bounding, wide pulse pressure"],
          ["ECG", "iRBBB, right axis", "LVH, LA enlargement", "LVH, LA enlargement"],
          ["S2 once Eisenmenger", "Still fixed split", "Single loud", "Normally split; differential cyanosis"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**ACHD** means a congenital defect seen after 18, repaired or not.",
            "CHD affects **8-10 per 1000** births; India has over 2 lakh new cases a year.",
            "**Secundum ASD** is the commonest CHD first found in adults.",
            "**Eisenmenger syndrome** is a reversed shunt caused by fixed pulmonary vascular disease.",
            "**Heart failure** is the commonest cause of death; arrhythmia the commonest admission.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Down syndrome** causes AVSD; **Turner syndrome** causes coarctation and bicuspid valve.",
            "**22q11 deletion** is found in about 15% of Tetralogy of Fallot.",
            "**Holt-Oram** links ASD with thumb defects; **Lutembacher** is ASD with mitral stenosis.",
            "Maternal **rubella** causes PDA; **lithium** causes Ebstein anomaly.",
            "Offspring risk is **3-5%** when a parent has CHD.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**ASD** overloads the right atrium, right ventricle and lungs with volume.",
            "**VSD and PDA** overload the left atrium and ventricle and transmit pressure to the lungs.",
            "S2 is **fixed** in ASD because the shunt falls as venous return rises.",
            "High flow injures pulmonary arterioles; **plexiform lesions** are irreversible.",
            "When PVR nears systemic, the shunt reverses and **cyanosis** appears.",
          ],
        },
        {
          title: "Clinical features and examination",
          points: [
            "**ASD**: RV heave, pulmonary flow murmur, wide fixed split S2.",
            "**VSD**: harsh pansystolic murmur with thrill; the smaller the hole, the louder.",
            "**PDA**: machinery murmur, bounding pulse, wide pulse pressure.",
            "**Coarctation**: radio-femoral delay and arm-leg gradient over **20 mmHg**.",
            "**Eisenmenger**: cyanosis, clubbing, loud P2, original murmur gone.",
            "**Differential cyanosis** of toes only means PDA with reversal.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Secundum ASD** ECG: incomplete RBBB with right axis deviation.",
            "**Primum ASD** ECG: RBBB, left axis deviation and long PR.",
            "Coarctation X-ray: **rib notching** of 3rd-8th ribs and figure-of-3 sign.",
            "**Echo with bubble study** is first line; TEE measures ASD rims.",
            "**CMR** measures RV volumes in repaired Tetralogy.",
            "**Catheter PVR** is mandatory before closing a shunt with raised PA pressure.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Close a shunt with volume overload if **PVR is under 3 Wood units**.",
            "**Device closure** suits secundum ASD and PDA; VSD usually needs surgery.",
            "Coarctation: intervene if gradient over **20 mmHg** with hypertension; stent in adults.",
            "Repaired Tetralogy: replace the pulmonary valve when **RVEDVi reaches 160 mL/m2**.",
            "Never close the defect in **Eisenmenger syndrome**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Eisenmenger: **bosentan 62.5 mg twice daily**, then 125 mg twice daily.",
            "Add **sildenafil 20 mg three times daily** if not improving.",
            "Correct **iron deficiency**; phlebotomy only for symptomatic haematocrit over 65%.",
            "Avoid dehydration, altitude, pregnancy and **oestrogen-containing pills**.",
            "Use **air filters** on all IV lines in right-to-left shunts.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**mWHO IV**: Eisenmenger and severe native coarctation; advise against pregnancy.",
            "Repaired simple shunts are **mWHO I**; repaired Tetralogy is mWHO II.",
            "Offer **fetal echo at 18-22 weeks** to mothers with CHD.",
            "Elderly ASD with stiff LV needs **balloon test occlusion** before closure.",
            "Children are screened under **RBSK** and referred to the DEIC.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Haemoptysis** or new cyanosis in Eisenmenger needs admission.",
            "Fever with focal signs in cyanotic CHD suggests **brain abscess**.",
            "Repaired Tetralogy with **QRS 180 ms or more** risks VT and sudden death.",
            "Coarctation leaves **hypertension**, recoarctation, aneurysm and berry aneurysm risk.",
            "**Endocarditis** risk is highest with small VSD and PDA jets.",
          ],
        },
        {
          title: "Referral, follow-up and latest updates",
          points: [
            "Follow severe lesions **6-12 monthly**, moderate 1-2 yearly, mild every 3-5 years.",
            "Repaired coarctation needs **CMR or CT every 3-5 years**.",
            "**ESC 2023**: prophylaxis for 6 months after any prosthetic repair, including devices.",
            "**ESC 2023** removed clindamycin; use azithromycin or doxycycline if penicillin-allergic.",
            "**ESC/ERS 2022** sets PVR thresholds of 3 and 5 Wood units for closure.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in adult congenital heart disease",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Bosentan", "62.5 mg oral BD, then 125 mg BD", "Long-term (Eisenmenger FC III)", "Liver toxicity, teratogenic, cuts pill efficacy"],
            ["Sildenafil", "20 mg oral TDS", "Long-term add-on", "Headache, flushing; never with nitrates"],
            ["Amoxicillin", "2 g oral 30-60 min before dental work", "Single dose, high-risk only", "Allergy: azithromycin 500 mg or doxycycline 100 mg"],
            ["Oral iron", "About 60 mg elemental iron daily or alternate days", "Until iron stores normal", "GI upset; watch haematocrit overshoot"],
            ["Aspirin", "75-100 mg oral daily", "6 months after device closure", "Bleeding; not routine in Eisenmenger"],
          ],
        },
        {
          heading: "Shunt closure by PVR (ESC/ERS 2022)",
          columns: ["PVR", "Decision"],
          rows: [
            ["Under 3 Wood units", "Close if volume overload"],
            ["3-5 Wood units", "Individual decision; Qp:Qs over 1.5 favours closure"],
            ["5 Wood units or more", "Do not close; PAH therapy; fenestrated closure only if PVR falls"],
            ["Eisenmenger physiology", "Never close (class III)"],
          ],
        },
        {
          heading: "ECG by lesion",
          columns: ["Lesion", "ECG"],
          rows: [
            ["Secundum ASD", "Incomplete RBBB, right axis, crochetage"],
            ["Primum ASD", "RBBB, left axis, first-degree AV block"],
            ["Sinus venosus ASD", "Ectopic atrial rhythm, inverted inferior P"],
            ["VSD / PDA", "LA enlargement, LVH"],
            ["Repaired TOF", "RBBB; QRS 180 ms or more is high risk"],
            ["Eisenmenger", "RVH, right axis, P pulmonale"],
          ],
        },
      ],
      remember: [
        "Fixed split S2 = ASD; the murmur is pulmonary flow.",
        "Smaller VSD, louder murmur.",
        "S2 in Eisenmenger: ASD fixed, VSD single, PDA normal.",
        "Toes blue, fingers pink = PDA with reversal.",
        "Secundum right axis, primum left axis.",
        "Close only if PVR under 3; never close Eisenmenger.",
        "Feel the femorals in every young hypertensive.",
      ],
    },
  },
};

export default revision;
