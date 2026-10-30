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
};

export default revision;
