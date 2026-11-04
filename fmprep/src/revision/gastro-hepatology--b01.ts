import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-dysphagia-approach": {
    checked: "2026-10",
    updated: [
      "Chicago classification v4.0 (2021): upright plus supine swallows, provocative tests, EGJOO needs supportive TBE or FLIP",
      "ACG eosinophilic oesophagitis guideline (2025): biopsy normal-looking oesophagus in dysphagia, 6 biopsies from 2 levels",
      "Lyon consensus 2.0 (2024): AET above 6% and LA B-D conclusive GERD for peptic stricture work-up",
      "ESSD/ESPEN dysphagia guidance (2022-2023): early VFSS or FEES and IDDSI texture modification",
    ],
    master: {
      heading: "Dysphagia - what to write",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Difficulty moving a bolus mouth to stomach; odynophagia = painful swallow (mucosal injury); globus = lump between meals"],
        ["Step 1: where", "Oropharyngeal (immediate, cough, nasal regurgitation) vs oesophageal (retrosternal, seconds later)"],
        ["Step 2: bolus", "Solids only = mechanical; solids and liquids from onset = motility"],
        ["Step 3: course", "Intermittent = ring, web, EoE, spasm; progressive = stricture, cancer, achalasia, scleroderma"],
        ["Indian context", "Squamous cancer belts (North-East, Kashmir), corrosive strictures, achalasia commonest motility disorder"],
        ["Examination", "Weight, pallor, koilonychia, Virchow node, thrush, bulbar signs, sclerodactyly, water swallow test"],
        ["First test", "Endoscopy with biopsy (6 from 2 levels even if normal); barium first for Zenker"],
        ["Oropharyngeal test", "VFSS or FEES with speech therapist; MRI brain, CK, AChR antibody as needed"],
        ["Motility test", "HRM Chicago 4.0: IRP above 15 mmHg, DCI above 8000, DL under 4.5 s; TBE, FLIP"],
        ["OPD treatment", "Dilatation plus PPI for stricture; fluconazole for Candida; iron for Plummer-Vinson; speech therapy"],
        ["Emergency", "Bolus with drooling: endoscopy within 6 h; stroke nil by mouth until screened; PEG if feeding over 4 weeks"],
        ["Referral", "Any dysphagia: endoscopy within 2 weeks (NICE NG12); same day for obstruction, perforation, aspiration"],
        ["Prevention", "Tobacco and alcohol cessation, avoid very hot drinks, pill hygiene, safe storage of acids"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnostic flow for dysphagia",
        steps: [
          { label: "Dysphagia: take the three-question history", detail: "Where, what bolus, what course; weight loss?", tone: "neutral" },
          { label: "Oropharyngeal or oesophageal?", detail: "Immediate cough and nasal regurgitation vs retrosternal sticking", tone: "decision" },
          { label: "Oropharyngeal: VFSS or FEES, neuro work-up", detail: "Speech therapy, IDDSI texture, treat cause", tone: "neutral" },
          { label: "Oesophageal: upper GI endoscopy with biopsies", detail: "Within 2 weeks; 6 biopsies from 2 levels if normal", tone: "warn" },
          { label: "Lesion found: treat", detail: "Dilate stricture plus PPI; stage cancer; treat EoE or infection", tone: "good" },
          { label: "Normal endoscopy: barium and HRM", detail: "Chicago 4.0; TBE or FLIP if inconclusive", tone: "decision" },
          { label: "Motility diagnosis or functional dysphagia", detail: "Achalasia, spasm, IEM; Rome IV if all normal", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Oesophageal dysphagia: bolus and course",
        root: "Oesophageal dysphagia",
        arms: [
          { label: "Solids only - intermittent", tone: "neutral", steps: ["Schatzki ring", "Oesophageal web", "Eosinophilic oesophagitis"] },
          { label: "Solids only - progressive", tone: "warn", steps: ["Peptic stricture (heartburn)", "Carcinoma (weight loss, short history)"] },
          { label: "Solids and liquids - intermittent", tone: "neutral", steps: ["Distal oesophageal spasm", "Hypercontractile oesophagus"] },
          { label: "Solids and liquids - progressive", tone: "decision", steps: ["Achalasia (regurgitation)", "Scleroderma (heartburn, Raynaud)"] },
        ],
      },
      {
        kind: "ladder",
        heading: "Feeding ladder in dysphagia",
        steps: [
          { label: "Normal diet with swallow strategies", detail: "Upright, small bolus, chin tuck, slow rate", tone: "good" },
          { label: "IDDSI texture-modified diet", detail: "Thickened fluids level 1-4, minced or puree foods", tone: "neutral" },
          { label: "Oral nutritional supplements", detail: "Energy-dense, weigh every visit", tone: "neutral" },
          { label: "Nasogastric tube feeding", detail: "Short term, under 4 weeks", tone: "decision" },
          { label: "PEG gastrostomy", detail: "If over 4 weeks expected; not in advanced dementia", tone: "warn" },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Dysphagia** is difficulty moving a bolus from mouth to stomach.",
            "**Odynophagia** is pain on swallowing and means mucosal injury.",
            "**Globus** is a painless lump in the throat between meals with normal swallowing.",
            "In India, new progressive dysphagia in a smoker is **squamous cancer** until proved otherwise.",
            "**Corrosive strictures** and **achalasia** are relatively common in Indian practice.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Oropharyngeal**: stroke, Parkinson, MND, myasthenia, myositis, Zenker, head and neck cancer.",
            "**Mechanical oesophageal**: cancer, peptic stricture, Schatzki ring, web, EoE, corrosive stricture.",
            "**Extrinsic**: mediastinal nodes, left atrium in mitral stenosis, aortic aneurysm, aberrant subclavian.",
            "**Motility**: achalasia, distal spasm, jackhammer oesophagus, scleroderma, opioids.",
            "**Odynophagia**: Candida, CMV, HSV, pill injury, caustics, radiation.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Pharyngeal phase is a brainstem reflex via cranial nerves **V, VII, IX, X, XII**.",
            "**Mechanical** narrowing blocks solids first; under **13 mm** almost always symptomatic.",
            "**Motility** failure blocks solids and liquids from the start.",
            "Achalasia loses inhibitory neurons; scleroderma loses smooth muscle and causes severe reflux.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Ask **where, what bolus, what course** - three questions.",
            "Regurgitation of undigested food, halitosis, neck gurgling suggests **Zenker diverticulum**.",
            "Long heartburn that improves as dysphagia starts suggests **peptic stricture**.",
            "Food impaction in a young atopic man suggests **eosinophilic oesophagitis**.",
            "**EAT-10 score of 3 or more** flags swallowing risk in elderly and stroke.",
          ],
        },
        {
          title: "Examination",
          points: [
            "Weigh the patient; over 5% weight loss is an alarm feature.",
            "**Koilonychia and pallor** with dysphagia suggest **Plummer-Vinson** web.",
            "**Virchow node**, hepatomegaly, hoarseness mean advanced cancer.",
            "Check bulbar signs, fatigable ptosis, tongue fasciculations, sclerodactyly.",
            "**Water swallow test**: cough or wet voice means nil by mouth and formal assessment.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**Endoscopy first** for oesophageal dysphagia, with biopsy and option to dilate.",
            "Take **6 biopsies from 2 levels** even if the oesophagus looks normal.",
            "**Barium first** if Zenker is suspected; endoscopy may perforate the pouch.",
            "**VFSS or FEES** for oropharyngeal dysphagia; detects silent aspiration.",
            "**HRM (Chicago 4.0)** after normal endoscopy: IRP above 15 mmHg, DCI above 8000, DL under 4.5 s.",
            "**TBE**: barium above 5 cm at 1 minute supports achalasia.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Peptic stricture: **dilatation plus long-term PPI**.",
            "Candida: **fluconazole 200-400 mg daily for 14-21 days**.",
            "Pill injury: stop drug, water and upright 30 minutes, PPI and sucralfate.",
            "Oropharyngeal: **speech therapy**, chin tuck, small boluses, IDDSI textures.",
            "Never give a long empirical PPI trial instead of endoscopy.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "**Bolus with drooling**: endoscopy within 6 hours; biopsy afterwards for EoE.",
            "**Stroke**: nil by mouth until a swallow screen is passed.",
            "**PEG** if feeding needed beyond 4 weeks; not in advanced dementia.",
            "Malignant dysphagia unfit for cure: **metal stent** or brachytherapy.",
            "Chest pain and surgical emphysema after dilatation: suspect **perforation**, CT with water-soluble contrast.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "**Any dysphagia**: endoscopy within 2 weeks (NICE NG12).",
            "Same day: complete obstruction, perforation, aspiration, unable to drink.",
            "Refer neurology for bulbar signs; ENT for hoarseness or neck mass.",
            "Review 2-4 weeks after dilatation; record weight and diet texture.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**Chicago 4.0 (2021)**: EGJ outflow obstruction needs symptoms plus TBE or FLIP support.",
            "**ACG EoE 2025**: biopsy normal mucosa in dysphagia; no mandatory PPI trial.",
            "**Lyon 2.0 (2024)**: AET above 6% is conclusive reflux.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in dysphagia and odynophagia",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Pantoprazole", "40 mg oral once or twice daily", "Long term after stricture dilatation", "C. difficile, low magnesium, B12 deficiency"],
            ["Fluconazole", "200-400 mg oral daily", "14-21 days", "QT prolongation, liver injury, interactions"],
            ["Sucralfate", "1 g oral four times daily", "1-2 weeks", "Constipation, aluminium in CKD"],
            ["Ganciclovir", "5 mg/kg IV twice daily", "3-6 weeks", "Cytopenias, renal dosing"],
            ["Aciclovir", "400 mg oral three times daily", "7-14 days", "Renal impairment"],
            ["Pyridostigmine", "30-60 mg oral before meals", "Titrate", "Diarrhoea, salivation, bronchospasm"],
          ],
        },
        {
          heading: "Oropharyngeal vs oesophageal",
          columns: ["Feature", "Oropharyngeal", "Oesophageal"],
          rows: [
            ["Timing", "Immediate", "Seconds after swallow"],
            ["Symptoms", "Cough, nasal regurgitation, wet voice", "Retrosternal sticking, regurgitation"],
            ["Causes", "Stroke, Parkinson, myasthenia, Zenker", "Cancer, stricture, EoE, achalasia"],
            ["First test", "VFSS or FEES", "Endoscopy with biopsy"],
          ],
        },
        {
          heading: "Chicago 4.0 key cut-offs",
          columns: ["Metric", "Abnormal value", "Meaning"],
          rows: [
            ["Supine IRP", "Above 15 mmHg", "Impaired EGJ relaxation"],
            ["DCI", "Under 100", "Failed swallow"],
            ["DCI", "100-450", "Weak swallow"],
            ["DCI", "Above 8000", "Hypercontractile swallow"],
            ["Distal latency", "Under 4.5 s", "Premature (spastic) swallow"],
          ],
        },
      ],
      remember: [
        "**Where, what, how**: site, bolus, course.",
        "**Solids then liquids** = mechanical; **both from day one** = motility.",
        "**Endoscopy before manometry**; **barium before scope for Zenker**.",
        "**Biopsy the normal oesophagus**: 6 from 2 levels.",
        "**Odynophagia** = Candida, CMV, HSV, pills.",
        "**Drooling bolus** = endoscopy within 6 hours.",
        "**No PEG in advanced dementia**.",
      ],
    },
  },
};

export default revision;
