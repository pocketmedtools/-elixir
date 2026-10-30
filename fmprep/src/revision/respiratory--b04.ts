import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-bronchiectasis": {
    checked: "2026-10",
    updated: [
      "ERS clinical practice guideline update 2025: macrolides and inhaled antibiotics for frequent exacerbators; ICS only for eosinophilic or asthma overlap",
      "ASPEN trial (NEJM 2025) and US FDA approval of brensocatib, August 2025",
      "International consensus CT criteria for bronchiectasis (Lancet Respir Med 2022)",
      "GOLD 2025: look for bronchiectasis in COPD with frequent exacerbations",
      "EMBARC-India registry (2019) and EMBARC 2023: post-TB and Pseudomonas dominate in India",
    ],
    master: {
      heading: "Bronchiectasis on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Permanent bronchial dilatation on CT plus chronic productive cough and recurrent infections"],
        ["Indian burden", "EMBARC-India 2019: post-TB commonest (about one-third), ABPA frequent, Pseudomonas common, younger and sicker"],
        ["Causes", "Post-infective (TB, measles, pertussis, NTM), ABPA, CVID, PCD, CF, RA, IBD, alpha-1 AT, obstruction; idiopathic"],
        ["Pathogenesis", "Vicious vortex: infection, neutrophilic inflammation (elastase via DPP-1), impaired clearance, structural damage"],
        ["Classification", "Reid: cylindrical, varicose, cystic; severity by BSI (9 or more severe) or FACED (5-7 severe)"],
        ["Clinical", "Daily purulent sputum, recurrent infections, haemoptysis, coarse crackles, clubbing in severe disease"],
        ["HRCT signs", "BAR over 1 (signet ring), no tapering, airway within 1 cm of pleura, wall thickening, mucus plugs"],
        ["Work-up bundle", "CBC, IgG/IgA/IgM, total and Aspergillus IgE, sputum culture and AFB, spirometry; selected sweat test, nasal NO"],
        ["Daily treatment", "Airway clearance (ACBT, oscillating PEP), hypertonic saline or carbocisteine, pulmonary rehab, vaccines"],
        ["Exacerbation", "Sputum culture first; 14 days amoxicillin, clarithromycin or ciprofloxacin (if Pseudomonas)"],
        ["Frequent exacerbator", "3 or more per year: azithromycin after excluding NTM and checking QTc; inhaled colistin if chronic Pseudomonas"],
        ["New drug", "Brensocatib 10-25 mg daily, DPP-1 inhibitor, about 20% fewer exacerbations (ASPEN 2025)"],
        ["Complications", "Haemoptysis, respiratory failure, cor pulmonale, NTM, amyloidosis, brain abscess"],
        ["Pitfalls", "Repeat empirical ATT; dornase alfa (harmful); macrolide without NTM screen"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Diagnosing bronchiectasis",
        steps: [
          { label: "Chronic productive cough or recurrent chest infections", detail: "Over 8 weeks, or frequent COPD/asthma exacerbations" },
          { label: "Exclude active TB", detail: "Sputum CBNAAT and culture before any ATT", tone: "warn" },
          { label: "HRCT chest", detail: "BAR over 1, no tapering, airways within 1 cm of pleura", tone: "decision" },
          { label: "Aetiology bundle", detail: "CBC, immunoglobulins, total and Aspergillus IgE, sputum culture and AFB" },
          { label: "Selected tests by clue", detail: "Sweat chloride, nasal NO, alpha-1 AT, RF, HIV, bronchoscopy if localised" },
          { label: "Score severity", detail: "BSI or FACED; record exacerbations and Pseudomonas", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Treatment ladder (BTS 2019, ERS 2017/2025)",
        steps: [
          { label: "Treat cause, airway clearance, vaccines, rehab", detail: "ACBT or oscillating PEP 10-30 min once or twice daily" },
          { label: "Add mucoactive if sputum hard to clear", detail: "Hypertonic saline 6-7% or carbocisteine 750 mg tds" },
          { label: "3 or more exacerbations a year: long-term antibiotic", detail: "Azithromycin 250 mg daily or 500 mg thrice weekly", tone: "decision" },
          { label: "Chronic Pseudomonas: inhaled antibiotic", detail: "Colistimethate 1-2 MU bd or gentamicin 80 mg bd" },
          { label: "Consider brensocatib where available", detail: "DPP-1 inhibitor, 10-25 mg once daily" },
          { label: "Surgery or transplant referral", detail: "Localised disease, or FEV1 under 30% with decline", tone: "warn" },
        ],
      },
      {
        kind: "branch",
        heading: "Sputum culture decides antibiotics",
        root: "Bronchiectasis with an organism isolated",
        arms: [
          { label: "First Pseudomonas isolate", tone: "warn", steps: ["Ciprofloxacin 500-750 mg bd 2 weeks", "Then nebulised colistin 3 months", "Re-culture to confirm clearance"] },
          { label: "Chronic Pseudomonas", tone: "decision", steps: ["Exacerbation: ciprofloxacin 14 days", "Frequent exacerbator: inhaled colistin or gentamicin", "Macrolide if inhaled not tolerated"] },
          { label: "H influenzae or no Pseudomonas", tone: "good", steps: ["Exacerbation: amoxicillin 14 days", "Frequent exacerbator: azithromycin", "Doxycycline if macrolide not tolerated"] },
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Bronchiectasis** is permanent bronchial dilatation on CT plus chronic cough, sputum and recurrent infections.",
            "Traction bronchiectasis in fibrosis on CT alone is **not** the clinical disease.",
            "In India **post-TB** damage is the commonest cause (EMBARC-India 2019).",
            "Indian patients are **younger, sicker** and grow Pseudomonas more often than Europeans.",
            "Often misdiagnosed as **smear-negative TB** and given repeated ATT.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Post-infective**: TB, measles, pertussis, severe pneumonia, NTM.",
            "**ABPA** gives central upper-lobe bronchiectasis; always check total IgE.",
            "**Immunodeficiency**: CVID, X-linked agammaglobulinaemia, HIV.",
            "**PCD**: Kartagener triad of situs inversus, sinusitis and bronchiectasis.",
            "Also **CF, RA, ulcerative colitis, alpha-1 antitrypsin deficiency** and obstruction.",
            "About 40% remain **idiopathic** in European series.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**Vicious vortex**: infection, inflammation, poor clearance and structural damage feed each other.",
            "**Neutrophil elastase** destroys elastin and cartilage, so bronchi dilate.",
            "Elastase is activated by **DPP-1**, the target of brensocatib.",
            "Enlarged **bronchial arteries** bleed, causing haemoptysis.",
            "**Pseudomonas biofilm** makes infection chronic and triples mortality.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Daily **purulent sputum**, worse in the morning.",
            "Recurrent chest infections, **haemoptysis**, breathlessness and fatigue.",
            "**Coarse crackles** over affected lobes; clubbing only in severe disease.",
            "Dextrocardia suggests **Kartagener**; asthma with brown plugs suggests ABPA.",
            "Late signs: cyanosis, raised JVP and oedema of **cor pulmonale**.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "**HRCT** is diagnostic: bronchoarterial ratio over 1, the **signet ring sign**.",
            "Other CT signs: **no tapering**, airways within 1 cm of pleura, mucus plugs.",
            "Bundle: **CBC, IgG/IgA/IgM, total and Aspergillus IgE**, sputum culture and AFB.",
            "Selected: **sweat chloride**, nasal NO, alpha-1 antitrypsin, RF, HIV.",
            "**Spirometry** usually obstructive; repeat FEV1 yearly.",
            "Severity by **BSI** (9 or more severe) or **FACED** (5-7 severe).",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Airway clearance** daily for all with sputum: ACBT or oscillating PEP device.",
            "**Hypertonic saline** 6-7% or **carbocisteine** if sputum is hard to clear.",
            "**Never dornase alfa** outside CF: it increased exacerbations.",
            "Exacerbation: sputum culture, then **14 days** of antibiotics.",
            "Amoxicillin or clarithromycin; **ciprofloxacin** if Pseudomonas.",
            "Influenza and pneumococcal **vaccines**, smoking cessation, pulmonary rehab.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "**3 or more exacerbations a year**: azithromycin 250 mg daily or 500 mg thrice weekly.",
            "Before azithromycin **exclude NTM**, check QTc and liver tests.",
            "**First Pseudomonas**: ciprofloxacin 2 weeks, then nebulised colistin 3 months.",
            "**Chronic Pseudomonas**: inhaled colistimethate or gentamicin long term.",
            "**ICS** only if blood eosinophils 300 or more, asthma or ABPA.",
            "**Brensocatib** (DPP-1 inhibitor) cut exacerbations by about 20% in ASPEN.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Massive haemoptysis**: admit, tranexamic acid, bronchial artery embolisation.",
            "**Respiratory failure** and cor pulmonale in extensive disease.",
            "**NTM**, ABPA, empyema, abscess and AA **amyloidosis**.",
            "Severe BSI carries about **30% four-year mortality**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer for **frequent exacerbations**, Pseudomonas, NTM, haemoptysis or falling FEV1.",
            "Review **yearly** if mild, **3-6 monthly** if moderate or severe.",
            "Each visit: exacerbation count, **sputum culture**, BMI, SpO2, MRC grade.",
            "**Surgery** for localised disease; transplant referral if FEV1 under 30%.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**ERS 2025** update keeps macrolides and inhaled antibiotics for frequent exacerbators.",
            "**FDA approved brensocatib** in August 2025, the first drug licensed for bronchiectasis.",
            "**International consensus 2022** standardised CT diagnostic criteria.",
            "**GOLD 2025** asks for CT search for bronchiectasis in frequently exacerbating COPD.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in bronchiectasis",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Amoxicillin", "500 mg-1 g oral tds", "14 days", "Rash, diarrhoea; penicillin allergy"],
            ["Ciprofloxacin", "500-750 mg oral bd", "14 days", "Tendinopathy, QT; masks TB"],
            ["Azithromycin", "250 mg daily or 500 mg thrice weekly", "Long term, review 6-12 months", "QTc, hearing loss; exclude NTM"],
            ["Colistimethate nebulised", "1-2 MU bd", "Long term or 3 months after eradication", "Bronchospasm; test dose"],
            ["Hypertonic saline 6-7%", "4-5 mL nebulised od-bd", "Long term", "Bronchospasm; pre-treat salbutamol"],
            ["Brensocatib", "10 or 25 mg oral od", "Long term", "Hyperkeratosis, periodontitis"],
          ],
        },
        {
          heading: "Cause by CT distribution",
          columns: ["Distribution", "Likely causes", "Key test"],
          rows: [
            ["Upper lobe", "TB, CF, ABPA (central), sarcoidosis", "CBNAAT, sweat chloride, IgE"],
            ["Middle lobe and lingula", "NTM, PCD", "Mycobacterial culture, nasal NO"],
            ["Lower lobe", "Post-infective, aspiration, CVID, alpha-1 AT", "Immunoglobulins, alpha-1 AT level"],
            ["Single lobe", "Foreign body, tumour, node compression", "Bronchoscopy"],
          ],
        },
        {
          heading: "Severity scores",
          columns: ["Score", "Components", "Severe if"],
          rows: [
            ["BSI", "Age, BMI, FEV1, admissions, exacerbations, MRC, colonisation, extent", "9 or more"],
            ["FACED", "FEV1, Age, Chronic Pseudomonas, Extension, Dyspnoea", "5-7"],
            ["Reid", "CT morphology", "Cystic (saccular)"],
          ],
        },
      ],
      remember: [
        "**CAPTIVATE** for causes: CF, ABPA, PCD, TB, Immunodeficiency, Vasculitis/CTD, Aspiration, Tumour, Everything else.",
        "**Signet ring**: bronchus bigger than its artery.",
        "Exacerbation antibiotics run **14 days**, not 5.",
        "**No macrolide without an NTM screen.**",
        "**Dornase alfa only in CF.**",
        "Kartagener: **situs inversus, sinusitis, bronchiectasis**.",
        "Brensocatib blocks **DPP-1**, so elastase never switches on.",
      ],
    },
  },
  "respiratory-lung-abscess-aspiration": {
    checked: "2026-10",
    updated: [
      "BTS Guideline for Pleural Disease 2023: drain at pH under 7.2; consider at pH 7.2-7.4 with LDH over 900 IU/L",
      "ERS/EACTS statement on pleural infection 2023: MIST2 regimen, early surgical opinion, RAPID score",
      "ATS/IDSA CAP 2019 (current): no routine anaerobic cover for aspiration pneumonia without abscess or empyema",
      "MIST3 feasibility trial (2024): early VATS vs intrapleural therapy - no change to routine practice yet",
    ],
    master: {
      heading: "Aspiration, lung abscess and empyema on one page",
      columns: ["Heading", "What to write"],
      rows: [
        ["Pneumonitis", "Sterile chemical injury from acidic gastric contents (Mendelson); supportive care, no routine antibiotics or steroids"],
        ["Aspiration pneumonia", "Infection from oropharyngeal flora in dysphagia or low consciousness; treat as CAP"],
        ["Lung abscess", "Necrotic cavity over 2 cm with pus; acute under 4-6 weeks; primary (aspiration) or secondary"],
        ["Organisms", "Anaerobes (Peptostreptococcus, Prevotella, Fusobacterium), S anginosus; S aureus, Klebsiella, melioidosis"],
        ["Sites", "Supine: posterior RUL, superior lower lobe; upright: basal segments; right more than left"],
        ["Clinical", "Subacute fever, weight loss, putrid sputum, poor dentition, clubbing if chronic"],
        ["Imaging", "Thick-walled cavity with air-fluid level; CT split pleura sign in empyema"],
        ["Abscess treatment", "Co-amoxiclav or clindamycin IV then oral, 3-6 weeks; drainage or surgery rarely"],
        ["Empyema stages", "Exudative, fibrinopurulent, organising; Light 7 classes"],
        ["Drain if", "Pus, organisms, pH under 7.2, loculation; consider if pH 7.2-7.4 and LDH over 900"],
        ["Intrapleural", "MIST2: tPA 10 mg + DNase 5 mg twice daily for 3 days; neither alone"],
        ["Surgery", "VATS decortication if sepsis persists at 5-7 days; Eloesser flap in frail"],
        ["Prognosis", "RAPID score: Renal, Age, Purulence, Infection source, Dietary albumin"],
        ["Pitfalls", "Metronidazole alone; aminoglycosides for empyema; missing tumour in edentulous smoker"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Pneumonia with pleural effusion (BTS 2023)",
        steps: [
          { label: "Febrile pneumonia with effusion", detail: "Do not leave an effusion untapped" },
          { label: "Thoracic ultrasound and diagnostic tap", detail: "pH on blood-gas analyser, glucose, LDH, Gram stain, culture, ADA" },
          { label: "Pus, organisms or pH under 7.2?", detail: "Consider if pH 7.2-7.4 with LDH over 900 IU/L", tone: "decision" },
          { label: "Small-bore chest drain plus antibiotics", detail: "12-14 F, saline flush 6-hourly" },
          { label: "Poor drainage: intrapleural tPA + DNase", detail: "10 mg + 5 mg twice daily for 3 days", tone: "warn" },
          { label: "Sepsis persists at 5-7 days: VATS", detail: "Decortication; open window in the frail", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Lung abscess treatment ladder",
        steps: [
          { label: "IV beta-lactam/beta-lactamase inhibitor or clindamycin", detail: "Co-amoxiclav 1.2 g 8-hourly or clindamycin 600 mg 8-hourly" },
          { label: "Broaden if severe or hospital-acquired", detail: "Pip-taz 4.5 g or meropenem 1 g; add MRSA cover if needed" },
          { label: "Oral step-down when afebrile", detail: "Total 3-6 weeks, until cavity closes" },
          { label: "Bronchoscopy if no response or cancer risk", detail: "Edentulous, smoker over 45, atypical site", tone: "decision" },
          { label: "CT-guided percutaneous drainage", detail: "Large abscess over 6-8 cm failing antibiotics" },
          { label: "Lobectomy", detail: "Failure, massive haemoptysis, suspected cancer", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Lung abscess vs empyema on imaging",
        columns: ["Feature", "Lung abscess", "Empyema"],
        rows: [
          ["Shape", "Spherical", "Lenticular"],
          ["Angle with chest wall", "Acute", "Obtuse"],
          ["Air-fluid level on two views", "Equal", "Unequal"],
          ["Wall", "Thick, irregular", "Thin, smooth"],
          ["CT", "Cavity in lung", "Split pleura sign, compressed lung"],
          ["Needs drain", "Rarely", "Yes"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Aspiration pneumonitis** is a sterile chemical injury from acidic gastric contents.",
            "**Aspiration pneumonia** is infection from inhaled oropharyngeal bacteria.",
            "**Lung abscess** is a necrotic cavity over 2 cm containing pus.",
            "**Empyema** is pus or organisms in the pleural space.",
            "About 5-10% of pneumonia effusions become **complicated or empyema**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Low consciousness: **alcohol, seizures, stroke**, sedatives, anaesthesia.",
            "**Dysphagia**, oesophageal disease and tube feeding.",
            "**Poor dentition** raises the anaerobic load of saliva.",
            "Organisms: **anaerobes and S anginosus**; also S aureus, Klebsiella, melioidosis.",
            "Secondary abscess: **tumour, foreign body, septic emboli**, Lemierre syndrome.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Supine aspiration reaches the **posterior right upper and superior lower segments**.",
            "Upright aspiration reaches the **basal segments**.",
            "Necrosis over **1-2 weeks** forms a cavity that drains via a bronchus.",
            "Pleural infection moves from **exudative to fibrinopurulent to organising**.",
            "Bacteria consume glucose and make acid, so **pH and glucose fall**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Pneumonitis: breathless and hypoxic **2-5 hours** after witnessed aspiration.",
            "Abscess: weeks of fever, weight loss and **putrid sputum**.",
            "Empyema: **fever persisting** despite antibiotics for pneumonia.",
            "Signs: foul breath, stony dullness, clubbing if chronic.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "CXR: **thick-walled cavity with air-fluid level** in abscess.",
            "CT: **split pleura sign** and compressed lung in empyema.",
            "**Ultrasound-guided tap**; measure pH on a blood-gas analyser.",
            "Drain if **pus, organisms, or pH under 7.2**.",
            "Consider drain if **pH 7.2-7.4 with LDH over 900** (BTS 2023).",
            "**Bronchoscopy** if edentulous, smoker over 45 or not improving.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Pneumonitis: oxygen and suction; **no routine antibiotics or steroids**.",
            "Aspiration pneumonia: treat as CAP; **no routine extra anaerobic cover**.",
            "Abscess: **co-amoxiclav or clindamycin**, IV then oral for 3-6 weeks.",
            "**Metronidazole alone fails**; always pair it with a beta-lactam.",
            "Empyema: drain plus co-amoxiclav or **ceftriaxone with metronidazole**.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Use a **small-bore 12-14 F drain** with regular saline flushes.",
            "Poor drainage: **tPA 10 mg plus DNase 5 mg** twice daily for 3 days.",
            "Persisting sepsis at **5-7 days**: VATS decortication.",
            "Avoid **aminoglycosides** in empyema: poor penetration and inactivated by acid.",
            "Large failing abscess: **CT-guided drainage**; lobectomy rarely.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Bronchopleural fistula**, haemoptysis and brain abscess from lung abscess.",
            "**Trapped lung** and pleural thickening after empyema.",
            "Abscess mortality is about **5-10%**, higher in secondary abscess.",
            "**RAPID score** predicts empyema mortality.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer any febrile pneumonia with **effusion or cavity**.",
            "Surgeon if drainage fails at **5-7 days**.",
            "**Chest X-ray at 6-8 weeks**; persisting shadow in a smoker needs CT and bronchoscopy.",
            "Prevent recurrence: **dental care, swallow assessment**, alcohol de-addiction.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for abscess and empyema",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Co-amoxiclav", "1.2 g IV 8-hourly; 625 mg oral 8-hourly", "3-6 weeks (abscess)", "Cholestasis, rash; penicillin allergy"],
            ["Clindamycin", "600 mg IV 8-hourly; 300-450 mg oral 6-hourly", "3-6 weeks", "C difficile colitis"],
            ["Ceftriaxone + metronidazole", "2 g IV daily + 500 mg 8-hourly", "3-6 weeks (empyema)", "Neuropathy, disulfiram reaction"],
            ["Meropenem", "1 g IV 8-hourly", "Severe or ESBL", "Seizures, C difficile"],
            ["tPA intrapleural", "10 mg twice daily", "3 days with DNase", "Pleural bleeding"],
            ["DNase intrapleural", "5 mg twice daily", "3 days with tPA", "Useless alone"],
          ],
        },
        {
          heading: "Pneumonitis vs pneumonia",
          columns: ["Feature", "Pneumonitis", "Pneumonia"],
          rows: [
            ["Aspirate", "Sterile gastric acid", "Oropharyngeal bacteria"],
            ["Onset", "2-5 hours", "Days"],
            ["Typical patient", "Young, overdose, anaesthesia", "Elderly, dysphagia"],
            ["Antibiotics", "Only if over 48 hours", "Yes"],
          ],
        },
        {
          heading: "Light's classes in brief",
          columns: ["Class", "Key finding", "Action"],
          rows: [
            ["1-2", "Small or pH over 7.2", "Antibiotics only"],
            ["3", "pH 7.0-7.2 or LDH over 1000", "Repeat tap"],
            ["4-5", "pH under 7.0, glucose under 40, or organisms", "Drain; tPA-DNase if loculated"],
            ["6-7", "Frank pus", "Drain; often VATS"],
          ],
        },
      ],
      remember: [
        "**Pneumonitis sterile, pneumonia infected.**",
        "**Putrid sputum means anaerobes.**",
        "**pH under 7.2: drain.**",
        "**MIST2: tPA plus DNase, never alone.**",
        "**Abscess round, empyema lens-shaped.**",
        "**RAPID**: Renal, Age, Purulence, Infection source, Dietary albumin.",
        "No teeth with an abscess: **think cancer**.",
      ],
    },
  },
};

export default revision;
