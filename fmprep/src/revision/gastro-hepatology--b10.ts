import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-gi-drugs-ppi-safety": {
    checked: "2026-10",
    updated: [
      "AGA Clinical Practice Update on Deprescribing PPIs (2022): review every user, step down twice daily, taper or stop; keep Barrett, LA C/D, stricture, high-risk bleeders.",
      "AGA-ACG Chronic Idiopathic Constipation guideline (2023): strong for PEG, bisacodyl, sodium picosulfate, prucalopride, linaclotide, plecanatide.",
      "AGA Clinical Practice Update on P-CABs (2024) and US FDA vonoprazan approval for erosive oesophagitis (2023).",
      "ACG H. pylori guideline (2024): vonoprazan-amoxicillin dual therapy acceptable empirical option.",
      "REVISE trial (2024): pantoprazole stress-ulcer prophylaxis reduces bleeding in ventilated patients only.",
      "AGS Beers Criteria (2023): avoid PPI over 8 weeks, metoclopramide, mineral oil, anticholinergic antispasmodics in elderly.",
      "NLEM 2022: ranitidine removed.",
    ],
    master: {
      heading: "Master revision table - Prescribing in gastroenterology",
      columns: ["Heading", "What to write"],
      rows: [
        ["PPI pharmacology", "**Prodrug**, acid-activated, binds active H+/K+ ATPase irreversibly; take **30-60 min before breakfast**; steady state 3-5 days; CYP2C19."],
        ["Long-term PPI indications", "**Barrett, LA C/D, stricture**, PPI-responsive EoE, Zollinger-Ellison, high-risk NSAID/antiplatelet gastroprotection."],
        ["PPI adverse effects", "Interstitial nephritis, **hypomagnesaemia**, B12 deficiency, C. difficile, fundic polyps, microscopic colitis; others low-quality; **COMPASS** reassuring."],
        ["Deprescribing (AGA 2022)", "Review indication; **twice daily to once daily**; taper or stop; on-demand PPI or antacid-alginate; review 4-12 weeks."],
        ["Rebound", "Hypergastrinaemia and ECL hyperplasia cause **rebound acid hypersecretion for 2-4 weeks**; warn and cover."],
        ["Vonoprazan", "**P-CAB**: reversible, acid-stable, first-dose effect, CYP2C19-independent; 20 mg x 8 weeks, 10 mg maintenance; not first-line NERD."],
        ["Laxative ladder", "Fibre/ispaghula, **PEG 17 g daily**, add bisacodyl/senna, then prucalopride 2 mg or linaclotide; rectal measures for impaction."],
        ["OIC", "Laxative with every opioid; refractory: **naldemedine 0.2 mg or naloxegol 25 mg**; contraindicated in obstruction."],
        ["Antiemetics", "Ondansetron (5-HT3, QT); **domperidone max 30 mg/day x 7 days**; **metoclopramide max 30 mg/day x 5 days**; haloperidol for CTZ; doxylamine-pyridoxine in pregnancy."],
        ["Antispasmodics", "Drotaverine 40-80 mg TDS (no anticholinergic effect); dicyclomine, hyoscine (anticholinergic); mebeverine; peppermint oil."],
        ["Special groups", "Elderly: Beers list; CKD: no Mg/phosphate laxatives; children: PEG 0.4-0.8 g/kg/day; pregnancy: omeprazole, PEG, doxylamine-pyridoxine."],
        ["Inpatient", "Stress ulcer prophylaxis **only ICU ventilated or coagulopathic** (REVISE 2024); stop at discharge; treat dystonia with promethazine."],
        ["Indian angle", "OTC PPIs, irrational **PPI-domperidone FDCs**, CDSCO FDC bans; generics at Jan Aushadhi; ranitidine out of NLEM 2022."],
        ["Latest updates", "AGA 2022 deprescribing; AGA-ACG 2023 constipation; AGA 2024 P-CAB; ACG 2024 H. pylori; Beers 2023; REVISE 2024."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "PPI deprescribing in primary care",
        caption: "AGA 2022 and Canadian deprescribing guideline 2017",
        steps: [
          { label: "Patient on PPI over 8 weeks", detail: "Document original indication and dose" },
          { label: "Definite long-term indication?", detail: "Barrett, LA C/D, stricture, high-risk bleed, ZES", tone: "decision" },
          { label: "Yes: continue lowest effective dose", detail: "Annual review; Mg and B12 as needed", tone: "good" },
          { label: "No: step down twice daily to once daily", detail: "Hold 2-4 weeks" },
          { label: "Taper or stop", detail: "Halve dose or alternate days 2-4 weeks, or abrupt stop" },
          { label: "Warn about rebound 2-4 weeks", detail: "Antacid-alginate or on-demand PPI", tone: "warn" },
          { label: "Review at 4-12 weeks", detail: "Well: stay off; relapse: lowest dose; persistent: investigate", tone: "decision" },
        ],
      },
      {
        kind: "ladder",
        heading: "Chronic constipation drug ladder",
        caption: "AGA-ACG 2023; AGA OIC 2019",
        steps: [
          { label: "Fluids, fibre 25-30 g/day, ispaghula", detail: "3.5 g one to three times daily; review drugs" },
          { label: "Osmotic: PEG 3350", detail: "17 g daily; lactulose 15-30 mL if PEG unavailable" },
          { label: "Add stimulant", detail: "Bisacodyl 5-10 mg or senna 7.5-15 mg at night" },
          { label: "Prucalopride or secretagogue", detail: "Prucalopride 2 mg; linaclotide 72-145 mcg", tone: "decision" },
          { label: "Opioid user refractory: PAMORA", detail: "Naldemedine 0.2 mg or naloxegol 25 mg daily", tone: "warn" },
          { label: "Refer: manometry, balloon expulsion, biofeedback", detail: "Suspected dyssynergia or failure of 2 classes", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "PPI versus P-CAB (vonoprazan)",
        columns: ["Feature", "PPI", "Vonoprazan"],
        rows: [
          ["Binding", "Irreversible, covalent", "Reversible, potassium-competitive"],
          ["Activation", "Needs acid (prodrug)", "None needed"],
          ["Timing", "30-60 min before breakfast", "Any time, with or without food"],
          ["Onset", "Full effect in 3-5 days", "First dose"],
          ["CYP2C19", "Effect varies", "Not dependent"],
          ["Best use", "GERD, ulcer, gastroprotection", "LA C/D, PPI failure, H. pylori"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Deprescribing** is a planned step-down, on-demand use or stop, not just abrupt cessation.",
            "Up to **two-thirds** of long-term PPI use has no valid indication.",
            "PPIs are sold **over the counter** in India and often as irrational FDCs.",
            "**Opioid-induced constipation** affects 40-80% of long-term opioid users; no tolerance develops.",
            "Antiemetics and antispasmodics are often given **without a diagnosis**, masking surgical disease.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "PPIs are **prodrugs** that block only active pumps, so take them before breakfast.",
            "Chronic suppression raises **gastrin**, causing ECL hyperplasia and **rebound acid** on stopping.",
            "**Vonoprazan** blocks the pump reversibly, works from the first dose and ignores CYP2C19.",
            "**Domperidone** blocks hERG channels (QT); **metoclopramide** crosses into the brain (dystonia).",
            "**Drotaverine** is a PDE4 inhibitor, so it lacks anticholinergic side effects.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "Laxatives: **bulk, osmotic, stimulant, softener, secretagogue, 5-HT4 agonist, PAMORA, rectal**.",
            "Antiemetics by pathway: **5-HT3** gut, **D2** CTZ, **H1/muscarinic** vestibular, cortical.",
            "Standard PPI dose: omeprazole 20, pantoprazole 40, rabeprazole 20, lansoprazole 30 mg.",
            "**Bristol stool scale** types 1-2 mean slow transit; aim for type 4.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "For each PPI ask: **indication, start date, dose, past stop attempts, bleed history**.",
            "Always ask **alarm features**: dysphagia, bleeding, anaemia, weight loss, vomiting, age over 45-50.",
            "Constipation: Bristol type, straining, **digital manoeuvres** suggest dyssynergia.",
            "Before ondansetron or domperidone ask about **cardiac disease and QT drugs**.",
            "Before dicyclomine or hyoscine check for **glaucoma and prostatism**.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Definite PPI harms: **interstitial nephritis, hypomagnesaemia**, B12 deficiency, C. difficile, microscopic colitis.",
            "**COMPASS** trial found no excess harm over 3 years except possible enteric infection.",
            "PPIs can **mask gastric cancer** in older patients with alarm features.",
            "Domperidone above 30 mg/day or age over 60 raises **sudden cardiac death** risk.",
            "Metoclopramide over 12 weeks risks **tardive dyskinesia**.",
            "Phosphate enemas cause **AKI and hyperphosphataemia** in CKD and the elderly.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Step **twice-daily PPI to once daily**, then taper or stop, with antacid cover.",
            "Do **not** deprescribe Barrett, LA C/D, stricture or high-risk bleeders.",
            "Constipation: fibre, then **PEG 17 g daily**, then add bisacodyl or senna.",
            "Prescribe a **stimulant laxative with every opioid** from day one.",
            "Match the antiemetic to the pathway and write a **stop date**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Refractory constipation: **prucalopride 2 mg** or **linaclotide**; refer for manometry.",
            "Refractory OIC: **naldemedine 0.2 mg** or **naloxegol 25 mg** daily; never in obstruction.",
            "**Vonoprazan 20 mg** for LA C/D or PPI-refractory oesophagitis.",
            "Use **pantoprazole** if a PPI is needed with clopidogrel.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Elderly**: avoid liquid paraffin, anticholinergic antispasmodics, metoclopramide, PPI over 8 weeks.",
            "**CKD**: avoid magnesium and phosphate laxatives; prucalopride 1 mg.",
            "**Pregnancy**: doxylamine-pyridoxine for nausea, PEG or lactulose, omeprazole if needed.",
            "**Children**: PEG 1-1.5 g/kg/day to disimpact, 0.4-0.8 g/kg/day to maintain.",
            "**ICU only** for stress-ulcer prophylaxis: ventilated over 48 h or coagulopathic.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AGA 2022** deprescribing update remains the reference.",
            "**AGA-ACG 2023** made bisacodyl and sodium picosulfate strong recommendations.",
            "**AGA 2024** positioned P-CABs for severe oesophagitis, PPI failure and H. pylori.",
            "**REVISE 2024** supports ICU-only stress-ulcer prophylaxis.",
            "**Beers 2023** keeps PPI over 8 weeks on the avoid list.",
          ],
        },
      ],
      tables: [
        {
          heading: "Key GI drugs",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Pantoprazole", "40 mg orally before breakfast", "4-8 weeks, then review", "Hypomagnesaemia, C. difficile, AIN"],
            ["Vonoprazan", "20 mg orally daily; 10 mg maintenance", "8 weeks healing", "Hypergastrinaemia; limited long-term data"],
            ["PEG 3350", "17 g in 240 mL water daily", "Long term, titrate", "Bloating; avoid in obstruction"],
            ["Bisacodyl", "5-10 mg orally at night; 10 mg PR", "As needed or daily", "Cramps; hypokalaemia if misused"],
            ["Prucalopride", "2 mg orally daily (1 mg elderly/CKD)", "Stop if no response at 4 weeks", "Headache, nausea"],
            ["Naldemedine", "0.2 mg orally daily", "While on opioid", "Abdominal pain; never in obstruction"],
            ["Ondansetron", "4-8 mg orally/IV 8-12 hourly", "Short course", "QT, constipation, serotonin syndrome"],
            ["Domperidone", "10 mg orally up to TDS (max 30 mg)", "Max 7 days", "QT, sudden death; avoid cardiac disease"],
            ["Metoclopramide", "10 mg orally/IV up to TDS", "Max 5 days", "Dystonia, tardive dyskinesia"],
            ["Drotaverine", "40-80 mg orally TDS", "Short course", "Hypotension, dizziness"],
          ],
        },
        {
          heading: "Who to deprescribe",
          columns: ["Group", "Action"],
          rows: [
            ["NERD or LA A/B, symptom-free", "Taper or stop; on-demand"],
            ["Twice-daily without clear reason", "Step down to once daily"],
            ["Barrett, LA C/D, stricture", "Continue long term"],
            ["High-risk GI bleed history or DAPT with risk", "Continue"],
            ["Ward 'cover' or antibiotic 'cover'", "Stop"],
          ],
        },
        {
          heading: "Antiemetic by cause",
          columns: ["Cause", "Pathway", "Choice"],
          rows: [
            ["Gastroenteritis, chemotherapy", "5-HT3 gut", "Ondansetron"],
            ["Drugs, uraemia, opioids", "D2 CTZ", "Haloperidol, prochlorperazine"],
            ["Gastric stasis", "D2, 5-HT4", "Metoclopramide (5 days max)"],
            ["Vertigo, motion", "H1, muscarinic", "Promethazine, cinnarizine"],
            ["Pregnancy", "Multiple", "Doxylamine-pyridoxine"],
          ],
        },
      ],
      remember: [
        "**Three Ps of PPI**: Prodrug, Pump-active, Pre-breakfast.",
        "**Every PPI needs an indication and an end date.**",
        "**Pantoprazole with clopidogrel.**",
        "**PEG beats lactulose** for chronic constipation.",
        "**Every opioid gets a laxative**; refractory OIC gets a PAMORA.",
        "**Domperidone 30 mg x 7 days; metoclopramide 30 mg x 5 days.**",
        "**Drotaverine** is the antispasmodic without anticholinergic effects.",
      ],
    },
  },

};

export default revision;
