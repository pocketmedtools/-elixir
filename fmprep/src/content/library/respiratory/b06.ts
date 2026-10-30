import type { Topic } from "../../../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "respiratory-ild-ipf",
  title: "Interstitial lung disease approach and idiopathic pulmonary fibrosis",
  frequency: "common",
  oneLiner:
    "**Interstitial lung disease (ILD)** is a group of over 200 disorders that inflame or scar the alveolar walls and interstitium, causing **restrictive physiology with a low DLCO**; **idiopathic pulmonary fibrosis (IPF)** is the commonest fibrosing idiopathic interstitial pneumonia of older adults, defined by a **usual interstitial pneumonia (UIP) pattern** on HRCT or histology after exclusion of known causes, and is slowed (not reversed) by the **antifibrotics nintedanib and pirfenidone**.",
  keywords: [
    "ILD",
    "diffuse parenchymal lung disease",
    "DPLD",
    "IPF",
    "UIP",
    "usual interstitial pneumonia",
    "NSIP",
    "idiopathic interstitial pneumonia",
    "progressive pulmonary fibrosis",
    "PPF",
    "nintedanib",
    "pirfenidone",
    "nerandomilast",
    "velcro crackles",
    "honeycombing",
    "multidisciplinary discussion",
    "acute exacerbation of IPF",
    "GAP index",
    "transbronchial lung cryobiopsy",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**ILD (diffuse parenchymal lung disease)** is an umbrella for more than 200 disorders that injure the alveolar epithelium, capillary endothelium and interstitium, sharing breathlessness, diffuse shadows on imaging, restriction and a reduced DLCO. [Harrison 22e]",
        "**IPF** is a chronic, progressive fibrosing interstitial pneumonia of unknown cause, limited to the lungs, in older adults, with a **UIP pattern** on HRCT and/or histology. [ATS/ERS/JRS/ALAT 2022]",
        "IPF incidence in Europe and North America is roughly **3-9 per 100,000 per year**, rising steeply after 60; it is **commoner in men and in ever-smokers**, and rare under 50. [Harrison 22e]",
        "Untreated IPF has a **median survival of about 3-5 years** from diagnosis, worse than many cancers. [Harrison 22e]",
        "The **ILD-India registry** (27 centres, 1,084 patients, 2012-2015) found **hypersensitivity pneumonitis the commonest ILD (about 47%)**, followed by **CTD-ILD (about 14%) and IPF (about 14%)** - the reverse of Western series where IPF leads. [Singh S, AJRCCM 2017]",
        "In India ILD is under-diagnosed and frequently **misread as tuberculosis**, so many patients receive empirical ATT before HRCT is ever done. [ILD-India registry 2017]",
        "**Interstitial lung abnormalities (ILA)** - incidental non-dependent changes on CT in people not suspected of ILD - are found in about 4-9% of smokers and 2-7% of non-smokers, and a minority progress. [Fleischner Society 2020]",
      ],
    },
    {
      heading: "Aetiology and risk factors",
      points: [
        "Ask the **five-question cause history** for every ILD: **occupation and environment, drugs, connective tissue disease, smoking, and family history** - most non-IPF ILDs are found this way. [Harrison 22e]",
        "**Exposures**: birds, feather pillows, moulds, damp homes and **desert (evaporative) air coolers** (hypersensitivity pneumonitis); silica, coal, asbestos (pneumoconioses - see the Occupational lung disease topic). [ATS/JRS/ALAT 2020]",
        "**Drugs**: amiodarone, methotrexate, nitrofurantoin, bleomycin, checkpoint inhibitors and many more - see the CTD-ILD and drug-induced lung disease topic and pneumotox.com. [Pneumotox 2024]",
        "**Connective tissue disease**: systemic sclerosis, rheumatoid arthritis, inflammatory myositis, Sjogren syndrome and MCTD - ILD may precede the joint or skin disease by years. [ACR/CHEST 2023]",
        "**IPF risk factors**: age over 60, male sex, cigarette smoking (odds about 1.6-2.9), metal and wood dust, gastro-oesophageal reflux and chronic viral infection are associated, though none is proven causal. [Harrison 22e]",
        "**Genetics of IPF**: the **MUC5B promoter variant rs35705950** is the strongest common risk allele, and rare **telomere-related gene mutations (TERT, TERC, RTEL1, PARN)** and surfactant genes (SFTPC, SFTPA2) cause familial pulmonary fibrosis. [Harrison 22e]",
        "**Familial pulmonary fibrosis** (two or more first-degree relatives) accounts for about 5-20% of cases; short telomeres also cause early greying, cryptogenic cirrhosis and marrow failure, and increase toxicity after transplant. [Harrison 22e]",
        "**Smoking-related ILDs** - respiratory bronchiolitis-ILD, desquamative interstitial pneumonia and pulmonary Langerhans cell histiocytosis - improve mainly with **smoking cessation**. [ATS/ERS 2013]",
      ],
    },
    {
      heading: "Pathophysiology",
      points: [
        "Current model of IPF: **repeated micro-injury to an ageing, genetically susceptible alveolar epithelium** with failed repair - not primary inflammation - which is why steroids do not help and antifibrotics do. [Harrison 22e]",
        "Injured, senescent **type II alveolar epithelial cells** (short telomeres, endoplasmic reticulum stress) release **TGF-beta, PDGF, FGF and CTGF**, which recruit fibroblasts and turn them into collagen-secreting **myofibroblasts**. [Harrison 22e]",
        "The histological hallmark is the **fibroblast focus** - a subepithelial cluster of active myofibroblasts at the edge of dense scar - and their number predicts mortality. [Harrison 22e]",
        "Scar stiffens the lung and shrinks it: **compliance falls, TLC, FVC and FRC fall**, and radial traction on airways keeps **FEV1/FVC normal or high** - the restrictive pattern. [Harrison 22e]",
        "Thickened alveolar-capillary membrane and loss of capillary bed lower the **DLCO** - usually the earliest and most sensitive abnormality - and cause **exertional desaturation** because transit time shortens with exercise. [Harrison 22e]",
        "Breathing is **rapid and shallow** because stiff lungs make deep breaths costly and J-receptor stimulation drives the rate; PaCO2 is low until end-stage disease. [Harrison 22e]",
        "Repeated alveolar collapse and fibrosis remodel distal airspaces into thick-walled cysts - **honeycombing** - and pull airways open as **traction bronchiectasis**. [Fleischner Society 2018]",
        "**Nintedanib** is a tyrosine kinase inhibitor blocking PDGF, FGF and VEGF receptors; **pirfenidone** reduces TGF-beta signalling and fibroblast proliferation; **nerandomilast** is an oral preferential **PDE4B inhibitor** with anti-inflammatory and antifibrotic effects. [ATS/ERS/JRS/ALAT 2022]",
        "Hypoxic vasoconstriction and capillary loss cause **pulmonary hypertension (group 3)** in about 30-50% of advanced IPF, the main driver of right heart failure. [ESC/ERS 2022]",
      ],
    },
    {
      heading: "Classification that examiners ask",
      points: [
        "**ILD of known cause**: CTD-ILD, drug and radiation, hypersensitivity pneumonitis, pneumoconiosis. [ATS/ERS 2013]",
        "**Idiopathic interstitial pneumonias (IIPs)** - major: chronic fibrosing (**IPF, idiopathic NSIP**), smoking-related (**RB-ILD, DIP**), acute or subacute (**COP, AIP**); rare: **LIP and pleuroparenchymal fibroelastosis (PPFE)**; plus unclassifiable IIP. [ATS/ERS 2013]",
        "**Granulomatous ILD**: sarcoidosis and hypersensitivity pneumonitis (both have their own topics). [Harrison 22e]",
        "**Other forms**: lymphangioleiomyomatosis (LAM), pulmonary Langerhans cell histiocytosis, pulmonary alveolar proteinosis, eosinophilic pneumonias and diffuse alveolar haemorrhage. [Harrison 22e]",
        "**HRCT patterns for UIP (2022)**: **UIP**, **probable UIP**, **indeterminate for UIP** and **alternative diagnosis** - the 2018 'typical/probable/indeterminate/alternative' scheme carried forward. [ATS/ERS/JRS/ALAT 2022]",
        "**UIP pattern**: subpleural, basal-predominant (often heterogeneous) reticulation with **honeycombing**, with or without peripheral traction bronchiectasis; **probable UIP** has the same distribution and traction bronchiectasis but **no honeycombing**. [ATS/ERS/JRS/ALAT 2022]",
        "**Features suggesting an alternative diagnosis**: cysts, marked mosaic attenuation or **three-density pattern**, predominant ground-glass, profuse micronodules or centrilobular nodules, consolidation, and upper or peribronchovascular predominance with subpleural sparing. [ATS/ERS/JRS/ALAT 2022]",
        "**Progressive pulmonary fibrosis (PPF)** is a behaviour, not a disease: any fibrotic ILD other than IPF that worsens by the 2022 criteria (see the table). [ATS/ERS/JRS/ALAT 2022]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "The typical IPF patient is a **man over 60, ex-smoker, with insidious exertional breathlessness and a dry cough for over 6 months**, often treated first for asthma, COPD, heart failure or TB. [Harrison 22e]",
        "**Dry, distressing cough** occurs in about 70-85% of IPF and is independently linked to progression and poor quality of life. [Harrison 22e]",
        "**Tempo matters**: hours to days points to infection, heart failure, AIP, eosinophilic pneumonia or haemorrhage; weeks to months to COP, HP or drug ILD; months to years to IPF, fibrotic HP and pneumoconiosis. [Harrison 22e]",
        "Ask about **Raynaud phenomenon, skin thickening, joint swelling, morning stiffness, dry eyes and mouth, rash, muscle weakness and mechanic's hands** - features of an occult CTD. [ACR/CHEST 2023]",
        "Ask about **pets and birds (pigeon feeding), feather bedding, air coolers, damp walls**, farming, sugarcane bagasse, and any job with dust or fumes - with dates. [ATS/JRS/ALAT 2020]",
        "List **every drug for the past years**, including cancer therapy, nitrofurantoin prophylaxis and amiodarone. [Pneumotox 2024]",
        "**Haemoptysis, fever, weight loss** are unusual in IPF and point to TB, malignancy, vasculitis or infection. [Harrison 22e]",
        "Ask about **reflux symptoms, snoring and daytime sleepiness** (GORD and OSA are common comorbidities) and about **ankle swelling** (pulmonary hypertension). [ATS/ERS/JRS/ALAT 2022]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Fine, bilateral, basal, end-inspiratory 'velcro' crackles** are heard in over 90% of IPF and appear early - often before the chest X-ray changes. [Harrison 22e]",
        "**Clubbing** is seen in about 25-50% of IPF; it is rare in sarcoidosis and HP, and clubbing with crackles in India also suggests asbestosis or bronchiectasis. [Harrison 22e]",
        "**Mid-inspiratory squeaks** suggest bronchiolitis such as hypersensitivity pneumonitis rather than IPF. [ATS/JRS/ALAT 2020]",
        "Tachypnoea with shallow breaths, reduced chest expansion and **resting or exertional desaturation** on a pulse oximeter (walk the patient). [Harrison 22e]",
        "**Signs of pulmonary hypertension**: loud P2, left parasternal heave, raised JVP, pedal oedema - late findings that change prognosis. [ESC/ERS 2022]",
        "**CTD clues**: sclerodactyly, telangiectasia, digital pits, puffy fingers, synovitis, Gottron papules, heliotrope rash, mechanic's hands, proximal weakness. [ACR/CHEST 2023]",
        "**Cyanosis** appears late in ILD and signals severe hypoxaemia. [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**Fibrotic hypersensitivity pneumonitis** is the commonest IPF mimic in India - look for exposure, mid-upper zone predominance, mosaic attenuation and BAL lymphocytosis. [ATS/JRS/ALAT 2020]",
        "**CTD-ILD**: NSIP pattern, younger, female, autoantibodies; RA-ILD often shows UIP and needs serology to separate it from IPF. [ACR/CHEST 2023]",
        "**Asbestosis**: basal UIP-like fibrosis with **pleural plaques** and a long exposure history (see the Occupational lung disease topic). [Harrison 22e]",
        "**Heart failure**: basal crackles and interstitial shadows that clear with diuretics, with raised NT-proBNP and cardiomegaly. [Harrison 22e]",
        "**Miliary or post-TB fibrosis**: upper-zone fibrosis, volume loss, cavities or calcified nodes - check sputum CBNAAT before immunosuppression. [NTEP 2024]",
        "**Lymphangitis carcinomatosa**: thickened, beaded interlobular septa and hilar nodes in a patient with known or occult cancer. [Fleischner Society 2018]",
        "**COPD with emphysema** (combined pulmonary fibrosis and emphysema, CPFE): upper-zone emphysema plus basal fibrosis gives near-normal spirometry with a **disproportionately low DLCO**. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations - first line and advanced",
      points: [
        "**Chest X-ray**: basal reticular shadows and small lungs; normal in up to 10% of ILD, so a normal film never excludes it. [Harrison 22e]",
        "**Spirometry and DLCO**: restriction (**FVC under 80% predicted, FEV1/FVC 0.7 or more**) and **DLCO under 80%** (often under 60%); lung volumes confirm a low TLC. [ATS/ERS 2022]",
        "**Six-minute walk test**: distance and nadir SpO2; **desaturation below 88%** predicts mortality and is used for ambulatory oxygen and transplant listing. [ISHLT 2021]",
        "**HRCT thorax**: thin sections (1.25 mm or less), non-contrast, with **prone images** (to separate dependent atelectasis) and **expiratory images** (air trapping in HP) - the single most important test. [ATS/ERS/JRS/ALAT 2022]",
        "**Serology for every new ILD**: ANA (indirect immunofluorescence), RF, anti-CCP, ESR, CRP; add anti-Scl-70, anti-centromere, anti-Ro/La, ANCA, CK, aldolase and an **extended myositis panel** if there are any clues. [ATS/ERS/JRS/ALAT 2022]",
        "**Bronchoalveolar lavage**: lymphocytes **over 30%** point away from IPF (HP, sarcoid, NSIP, drug); also excludes infection. [ATS/ERS/JRS/ALAT 2022]",
        "**Transbronchial lung cryobiopsy (TBLC)**: diagnostic yield about 80%, accepted in 2022 as an alternative to surgical biopsy in experienced centres. [ATS/ERS/JRS/ALAT 2022]",
        "**Surgical lung biopsy (VATS)**: for unclassified ILD where the result will change management; avoid when FVC or DLCO is very low or during an exacerbation (high mortality). [ATS/ERS/JRS/ALAT 2022]",
        "**Echocardiography** for suspected pulmonary hypertension and **NT-proBNP**; **sputum CBNAAT** if TB is possible; **arterial blood gas** when SpO2 is low. [ESC/ERS 2022]",
        "**Multidisciplinary discussion (MDD)** of pulmonologist, radiologist and pathologist (plus rheumatologist) is the reference standard for ILD diagnosis. [ATS/ERS/JRS/ALAT 2022]",
      ],
    },
    {
      heading: "Management in OPD - IPF",
      points: [
        "**Antifibrotic therapy is offered to every confirmed IPF**: either **nintedanib or pirfenidone**, which halve the rate of FVC decline (about 100 mL/year saved) - they do not improve FVC or symptoms. [ATS/ERS/JRS/ALAT 2022]",
        "**Nintedanib 150 mg orally twice daily with food** (12 hours apart), reduced to **100 mg twice daily** for diarrhoea or raised transaminases; check LFT monthly for 3 months, then 3-monthly. [Ofev SmPC 2024]",
        "**Pirfenidone** with food, titrated: **267 mg three times daily week 1, 534 mg three times daily week 2, then 801 mg three times daily (2,403 mg/day)**; Japan licenses 1,800 mg/day and many Indian patients tolerate only lower doses. [Esbriet SmPC 2023]",
        "Pirfenidone needs **sun protection** (photosensitive rash), monthly LFT for 6 months, and avoidance of **fluvoxamine** (CYP1A2 inhibitor); smoking lowers its levels. [Esbriet SmPC 2023]",
        "Do **not** give **prednisolone plus azathioprine plus N-acetylcysteine** (PANTHER-IPF: more deaths), warfarin, ambrisentan, imatinib or sildenafil for IPF. [ATS/ERS/JRS/ALAT 2015, 2022]",
        "**Anti-reflux treatment is no longer recommended** to improve IPF outcomes; treat reflux only for its symptoms. [ATS/ERS/JRS/ALAT 2022]",
        "**Pulmonary rehabilitation** improves 6MWD, breathlessness and quality of life and should be offered to all. [ATS/ERS/JRS/ALAT 2015]",
        "**Smoking cessation**, influenza, pneumococcal, COVID-19 and RSV (60 years and over) vaccination - see the Adult respiratory vaccines topic. [ACIP 2024]",
        "**Cough**: low-dose controlled-release **morphine 5 mg twice daily** reduced IPF cough by about 39% in PACIFY (2023); add a laxative. [Wu Z, Lancet Respir Med 2023]",
        "**Oxygen**: **ambulatory oxygen** for exertional desaturation improves quality of life (AmbOx); **long-term oxygen** if resting PaO2 is 55 mmHg or less (SpO2 88% or less). [BTS 2015]",
      ],
    },
    {
      heading: "Management in IPD - acute exacerbation and admission",
      points: [
        "**Acute exacerbation of IPF (AE-IPF)**: acute worsening of breathlessness, usually under 1 month, with **new bilateral ground-glass or consolidation on a UIP background**, not fully explained by heart failure or fluid overload. [Collard, AJRCCM 2016]",
        "AE-IPF occurs in about **5-15% of patients per year**, may be triggered (infection, surgery, aspiration) or idiopathic, and carries **in-hospital mortality around 50%**. [Harrison 22e]",
        "**Admit** for resting SpO2 under 88%, breathlessness at rest, new bilateral infiltrates, suspected pneumonia or PE, or right heart failure. [BTS 2023]",
        "Work-up: CT pulmonary angiography or HRCT, **echocardiography, NT-proBNP, blood and sputum cultures, respiratory viral PCR, procalcitonin**, and **sputum CBNAAT** in India. [Collard, AJRCCM 2016]",
        "Treat with **broad-spectrum antibiotics** until infection is excluded, controlled oxygen (target SpO2 88-92% or higher if no hypercapnia), and **high-flow nasal oxygen** for rising demand. [ATS/ERS/JRS/ALAT 2022]",
        "**Corticosteroids** are conditionally suggested (commonly IV methylprednisolone 500-1,000 mg daily for 3 days, then oral prednisolone tapering) despite weak evidence; **cyclophosphamide is not recommended** (EXAFIP 2020: higher mortality). [ATS/ERS/JRS/ALAT 2022]",
        "**Invasive ventilation** is generally not advised because survival is very poor; consider it only as a bridge to transplant, and start **advance care planning** early. [ATS/ERS/JRS/ALAT 2015]",
        "Continue antifibrotics through the exacerbation unless contraindicated; give **VTE prophylaxis**. [BTS 2023]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Pregnancy**: nintedanib is teratogenic and contraindicated; women of childbearing age need effective contraception during and for 3 months after. [Ofev SmPC 2024]",
        "**Elderly and low body weight**: start pirfenidone slowly and accept the highest tolerated dose; reduce nintedanib to 100 mg twice daily if diarrhoea or weight loss. [ATS/ERS/JRS/ALAT 2022]",
        "**Liver disease**: nintedanib is not recommended in Child-Pugh B or C; pirfenidone is contraindicated in severe hepatic impairment. [Ofev SmPC 2024]",
        "**CKD**: pirfenidone is contraindicated with CrCl under 30 mL/min or dialysis; nintedanib needs no adjustment in mild-moderate renal impairment. [Esbriet SmPC 2023]",
        "**Anticoagulation**: nintedanib has a VEGF-related bleeding risk - use with care on full-dose anticoagulants or recent bleeding, and stop before major surgery. [Ofev SmPC 2024]",
        "**Diabetes**: avoid long courses of steroids, which have no benefit in IPF and worsen glycaemia; PDE4 inhibitors can cause weight loss. [ATS/ERS/JRS/ALAT 2022]",
        "**Resource-limited settings**: generic nintedanib and pirfenidone are available in India at much lower cost; where HRCT or MDD is unavailable, refer to a tertiary chest centre rather than start empirical steroids or ATT. [ILD-India registry 2017]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Pulmonary hypertension** (group 3) and **cor pulmonale**: inhaled **treprostinil** improved 6MWD in PH-ILD (INCREASE 2021). [ESC/ERS 2022]",
        "**Lung cancer** risk is increased about 4-5 times, mostly in fibrotic lower lobes; nodules need a low threshold for investigation. [Harrison 22e]",
        "**Acute exacerbation**, pneumothorax, pulmonary embolism, infections (including TB and NTM) and **respiratory failure** are the usual terminal events. [Harrison 22e]",
        "Comorbid **OSA, GORD, coronary artery disease, depression and anxiety** worsen symptoms and survival. [ATS/ERS/JRS/ALAT 2022]",
        "**GAP index** (Gender, Age, Physiology: FVC and DLCO) stages I-III with **1-year mortality about 6%, 16% and 39%**. [Ley B, Ann Intern Med 2012]",
        "**Poor prognostic markers**: FVC decline of 10% or more (or 5-10% with symptoms) in 6-12 months, DLCO under 40%, 6MWT desaturation below 88%, extensive honeycombing and pulmonary hypertension. [ATS/ERS/JRS/ALAT 2022]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "**Refer every suspected ILD** to a respiratory centre with HRCT and MDD; do not start steroids or ATT empirically. [ATS/ERS/JRS/ALAT 2022]",
        "Review every **3-6 months**: symptoms, weight, **FVC, DLCO, 6MWT and SpO2**, adverse effects and LFT. [NICE CG163]",
        "Repeat **HRCT** for unexplained worsening, suspected cancer or exacerbation - not routinely. [ATS/ERS/JRS/ALAT 2022]",
        "**Transplant referral**: at diagnosis of IPF or any UIP, or when **FVC under 80% or DLCO under 40%**, any significant decline, oxygen need, or 6MWT desaturation; age generally under 65-70. [ISHLT 2021]",
        "**Lung transplant** median survival is about 5-6 years for IPF; in India it is available at a few centres (Chennai, Hyderabad, Delhi NCR) and costs are high. [ISHLT 2021]",
        "**Palliative care** from the time of diagnosis: opioids for breathlessness, fan therapy, oxygen and advance directives - see the End-stage lung disease topic. [ATS/ERS/JRS/ALAT 2022]",
      ],
    },
    {
      heading: "Prevention and counselling",
      points: [
        "**Stop smoking** and avoid second-hand and biomass smoke; smoking accelerates decline and lowers pirfenidone levels. [Harrison 22e]",
        "Remove **identified antigens** (birds, feather bedding, mould, coolers) - even in apparent IPF, because fibrotic HP is often missed. [ATS/JRS/ALAT 2020]",
        "Counsel on **side effects of antifibrotics**: take with food, diarrhoea management with loperamide, sun protection, and not to stop without discussion. [ATS/ERS/JRS/ALAT 2022]",
        "**Family screening** is reasonable in familial pulmonary fibrosis; relatives who smoke should stop. [Harrison 22e]",
        "**NP-NCD** chronic respiratory disease services and Ayushman Arogya Mandirs can follow up oxygen and rehabilitation; **PM-JAY** covers inpatient care for exacerbations. [MoHFW 2024]",
      ],
    },
    {
      heading: "Latest guideline updates (2022-2026)",
      points: [
        "**ATS/ERS/JRS/ALAT 2022**: introduced **progressive pulmonary fibrosis**; suggested **nintedanib for PPF** after failure of standard management; accepted **TBLC** as an alternative to surgical biopsy. [ATS/ERS/JRS/ALAT 2022]",
        "The 2022 update allows a **confident IPF diagnosis without biopsy** when HRCT shows **probable UIP** in the right clinical context after MDD. [ATS/ERS/JRS/ALAT 2022]",
        "2022 recommends **against anti-acid treatment** for improving IPF outcomes and makes no recommendation for genomic classifiers. [ATS/ERS/JRS/ALAT 2022]",
        "**Nerandomilast 2025**: FIBRONEER-IPF and FIBRONEER-ILD (NEJM 2025) showed **18 mg twice daily slowed FVC decline** vs placebo in IPF and PPF; the US FDA approved it for IPF in October 2025 - Indian availability is not yet established. [Richeldi L, NEJM 2025]",
        "**PACIFY 2023**: low-dose morphine is the first drug with trial evidence for IPF cough. [Wu Z, Lancet Respir Med 2023]",
        "**ACR/CHEST 2023**: guidance on screening for ILD with HRCT and PFT in systemic autoimmune rheumatic diseases (see the CTD-ILD topic). [ACR/CHEST 2023]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic question: 'Approach to a patient with diffuse parenchymal lung disease' - answer with tempo, cause history, HRCT pattern, serology, BAL/biopsy and MDD.",
        "Define **UIP on HRCT** precisely: subpleural, basal, honeycombing, traction bronchiectasis - and list the features that argue against it. [ATS/ERS/JRS/ALAT 2022]",
        "**Common mistake**: giving steroids for IPF; they increase harm (PANTHER) - steroids are for NSIP, COP, HP, sarcoid and CTD-ILD. [ATS/ERS/JRS/ALAT 2015]",
        "**Common mistake**: calling restriction from spirometry alone - a low FVC with normal ratio needs TLC to confirm. [ATS/ERS 2022]",
        "Know the **two antifibrotics, their doses and the side effect of each**: nintedanib diarrhoea, pirfenidone photosensitivity and nausea; both raise transaminases.",
        "Know the **PPF criteria** (2 of 3 in a year): symptoms, FVC down 5% or DLCO down 10%, radiological progression. [ATS/ERS/JRS/ALAT 2022]",
      ],
    },
  ],
  tables: [
    {
      heading: "Antifibrotic and supportive drugs in IPF / PPF",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Nintedanib", "150 mg orally twice daily with food", "Lifelong; drop to 100 mg twice daily for intolerance; LFT monthly x 3 months then 3-monthly", "Diarrhoea (about 60%), nausea, raised ALT, weight loss, bleeding; contraindicated in pregnancy; avoid Child-Pugh B/C"],
        ["Pirfenidone", "801 mg orally three times daily with food (2,403 mg/day)", "267 mg TDS week 1, 534 mg TDS week 2, full dose week 3; lifelong", "Nausea, anorexia, photosensitive rash, raised ALT; avoid fluvoxamine; contraindicated CrCl under 30 or severe liver disease"],
        ["Nerandomilast", "18 mg orally twice daily", "Long term (trial data 52 weeks plus)", "Diarrhoea, weight loss; PDE4 class - watch mood; approved in USA 2025, not yet routine in India"],
        ["Morphine (controlled release)", "5 mg orally twice daily", "Review at 2-4 weeks", "Constipation, drowsiness; for refractory cough or breathlessness"],
        ["Oxygen", "Ambulatory or long-term, titrated to SpO2 88-92% or above", "LTOT 15 hours a day or more if resting PaO2 55 mmHg or less", "Fire risk with smoking; check hypercapnia"],
        ["Methylprednisolone (AE-IPF only)", "500-1,000 mg IV daily for 3 days, then prednisolone taper", "Taper over weeks", "Hyperglycaemia, infection; weak evidence; not for stable IPF"],
      ],
    },
    {
      heading: "HRCT categories for UIP (ATS/ERS/JRS/ALAT 2022)",
      columns: ["Category", "Distribution", "Features", "What it means"],
      rows: [
        ["UIP", "Subpleural, basal predominant, often heterogeneous", "Honeycombing with or without peripheral traction bronchiectasis", "IPF if no known cause - no biopsy needed"],
        ["Probable UIP", "Subpleural, basal predominant", "Reticulation with peripheral traction bronchiectasis or bronchiolectasis; no honeycombing", "IPF in the right clinical context after MDD; biopsy optional"],
        ["Indeterminate for UIP", "Subpleural, basal predominant", "Subtle reticulation, mild ground-glass, or fibrosis not suggesting any specific cause", "Consider BAL and TBLC or surgical biopsy"],
        ["Alternative diagnosis", "Upper or mid zone, peribronchovascular, subpleural sparing", "Cysts, mosaic or three-density pattern, predominant GGO, micronodules, consolidation", "Think HP, NSIP, sarcoid, LAM, organising pneumonia"],
      ],
    },
    {
      heading: "Differential diagnosis of fibrotic ILD",
      columns: ["Disease", "Clinical clue", "HRCT clue", "Discriminating test"],
      rows: [
        ["IPF", "Man over 60, ex-smoker, clubbing, velcro crackles", "Basal subpleural UIP with honeycombing", "MDD; serology negative; BAL lymphocytes under 30%"],
        ["Fibrotic HP", "Bird, mould or cooler exposure", "Mid-upper zone, mosaic attenuation, three-density sign, centrilobular nodules", "BAL lymphocytosis; specific IgG; exposure history"],
        ["CTD-ILD (SSc, myositis)", "Younger women, Raynaud, skin or muscle signs", "NSIP with lower-zone ground-glass and subpleural sparing", "ANA, Scl-70, myositis panel"],
        ["RA-ILD", "Joint disease, high-titre RF and anti-CCP", "Often UIP", "RF, anti-CCP"],
        ["Asbestosis", "Shipyard, construction, brake lining exposure", "Basal fibrosis with pleural plaques", "Occupational history; plaques"],
        ["Fibrotic sarcoidosis", "Younger, eye or skin lesions", "Upper-zone perihilar fibrosis, perilymphatic nodules, nodes", "EBUS-TBNA granulomas; ACE limited"],
        ["Chronic heart failure", "Orthopnoea, PND, oedema", "Smooth septal thickening, effusions", "NT-proBNP, echo; clears with diuretics"],
      ],
    },
    {
      heading: "Progressive pulmonary fibrosis - 2 of 3 within the past year (2022)",
      columns: ["Domain", "Criterion", "Note"],
      rows: [
        ["Symptoms", "Worsening respiratory symptoms", "Not explained by another cause"],
        ["Physiology", "Absolute FVC decline of 5% predicted or more, or absolute DLCO (Hb-corrected) decline of 10% predicted or more", "Within 1 year"],
        ["Radiology", "Increased traction bronchiectasis, new GGO with traction bronchiectasis, new fine reticulation, increased reticulation, new or more honeycombing, more lobar volume loss", "Compared with earlier HRCT"],
        ["Applies to", "Fibrotic ILD other than IPF (HP, CTD-ILD, NSIP, unclassifiable, sarcoid)", "Then consider nintedanib"],
      ],
    },
    {
      heading: "Investigations and their cut-offs in ILD",
      columns: ["Test", "Typical ILD result", "Cut-off / meaning"],
      rows: [
        ["Spirometry", "Low FVC, FEV1/FVC normal or high", "FVC under 80% predicted; ratio 0.7 or more"],
        ["DLCO", "Reduced, often first abnormality", "Under 80% abnormal; under 40% = advanced, transplant referral"],
        ["6-minute walk", "Desaturation on exercise", "Nadir SpO2 under 88% = poor prognosis, needs ambulatory oxygen"],
        ["BAL differential", "Lymphocytes in HP, sarcoid, NSIP", "Over 30% argues against IPF; CD4/CD8 over 3.5 favours sarcoid"],
        ["Serial FVC", "Annual decline", "5-10% = possible progression; 10% or more = significant"],
        ["Echocardiography", "Raised estimated PASP, RV dilatation", "Suspect PH; confirm with right heart catheter (mPAP over 20 mmHg)"],
      ],
    },
  ],
  redFlags: [
    "Resting SpO2 under 88% or breathless at rest",
    "Rapid worsening over days to weeks with new bilateral ground-glass shadows (acute exacerbation, AIP, pneumocystis)",
    "Haemoptysis with ILD shadows - diffuse alveolar haemorrhage or vasculitis",
    "Rapidly progressive ILD with dermatomyositis skin signs (anti-MDA5)",
    "Signs of right heart failure: raised JVP, oedema, loud P2",
    "Fever and new infiltrates in a patient on immunosuppression or antifibrotics",
    "Weight loss and a new nodule in fibrotic lung - exclude lung cancer",
  ],
  pearls: [
    "**Velcro crackles + clubbing + man over 60 = IPF until proved otherwise.**",
    "**DLCO is the most sensitive PFT in ILD**; FEV1/FVC is normal or high because of traction.",
    "**IPF is a failed-repair disease, not an inflammatory one** - so steroids harm and antifibrotics help.",
    "**In India, HP outnumbers IPF** (ILD-India registry) - always take the bird, mould and cooler history.",
    "**Probable UIP + compatible clinical picture + MDD = IPF without biopsy** (2022).",
    "**Antifibrotics slow decline by about half; they do not reverse fibrosis** - start early, do not wait for worsening.",
    "**Nintedanib = diarrhoea; pirfenidone = photosensitivity and nausea.**",
    "**PPF: 2 of 3 in one year - Symptoms, Spirometry/DLCO, Scan.**",
    "**Cyclophosphamide in AE-IPF increased mortality** (EXAFIP) - a favourite MCQ trap.",
  ],
  mcqs: [
    {
      id: "respiratory-ild-ipf-q1",
      stem: "A 66-year-old retired clerk, ex-smoker, has 2 years of exertional breathlessness and dry cough. He has clubbing and bibasal fine end-inspiratory crackles. HRCT shows subpleural basal reticulation with honeycombing and traction bronchiectasis. ANA, RF and anti-CCP are negative and he has no relevant exposures. What is the next best step?",
      options: [
        "Surgical lung biopsy to confirm the diagnosis",
        "Oral prednisolone 1 mg/kg with azathioprine",
        "Diagnose IPF after multidisciplinary discussion and start an antifibrotic",
        "Empirical antitubercular treatment for 2 months",
      ],
      answer: 2,
      explanation:
        "A definite UIP pattern on HRCT with no identifiable cause allows a confident IPF diagnosis at MDD without biopsy, and antifibrotic therapy (nintedanib or pirfenidone) should follow. Surgical biopsy adds risk without changing management here. Prednisolone-azathioprine (with NAC) increased deaths in PANTHER-IPF. Empirical ATT without microbiological evidence delays correct care.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-ild-ipf-q2",
      stem: "Which pulmonary function finding is most typical of established idiopathic pulmonary fibrosis?",
      options: [
        "Reduced FVC, preserved or raised FEV1/FVC and reduced DLCO",
        "Reduced FEV1/FVC with raised TLC and normal DLCO",
        "Normal FVC with raised DLCO",
        "Reduced FEV1/FVC with reduced DLCO and raised RV",
      ],
      answer: 0,
      explanation:
        "Fibrosis stiffens the lung (low FVC and TLC) while radial traction keeps airways open, so FEV1/FVC is preserved or high; the thickened membrane lowers DLCO. A low ratio with raised TLC and normal DLCO describes asthma; a low ratio with low DLCO and air trapping describes emphysema; a raised DLCO suggests alveolar haemorrhage or polycythaemia.",
      difficulty: "easy",
    },
    {
      id: "respiratory-ild-ipf-q3",
      stem: "A patient with IPF on pirfenidone develops a red, itchy rash on the face and forearms after working outdoors. What is the most appropriate advice?",
      options: [
        "Switch immediately to prednisolone",
        "Add fluvoxamine to reduce pruritus",
        "Stop all antifibrotic therapy permanently",
        "Use sun protection and temporarily reduce the pirfenidone dose, then re-escalate",
      ],
      answer: 3,
      explanation:
        "Photosensitive rash is a known pirfenidone effect; it is managed with sunscreen, covering clothes and temporary dose reduction before re-titration, keeping the patient on an antifibrotic. Steroids do not treat IPF. Fluvoxamine is a CYP1A2 inhibitor that sharply raises pirfenidone levels and is contraindicated. Permanent withdrawal is unnecessary for a manageable effect.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-ild-ipf-q4",
      stem: "According to the ATS/ERS/JRS/ALAT 2022 guideline, which treatment is NOT recommended for acute exacerbation of IPF?",
      options: [
        "Supplemental oxygen",
        "Intravenous cyclophosphamide added to steroids",
        "Corticosteroids",
        "Antibiotics until infection is excluded",
      ],
      answer: 1,
      explanation:
        "The 2022 guideline recommends against cyclophosphamide in AE-IPF because the EXAFIP trial showed higher 3-month mortality when it was added to steroids. Corticosteroids receive a conditional recommendation for use despite weak evidence, while oxygen and empirical antibiotics are standard supportive care pending exclusion of infection.",
      difficulty: "hard",
    },
    {
      id: "respiratory-ild-ipf-q5",
      stem: "A woman with fibrotic hypersensitivity pneumonitis, despite antigen avoidance and mycophenolate, has worse breathlessness and a 7% predicted fall in FVC over 10 months with more traction bronchiectasis on HRCT. What is the best next drug?",
      options: [
        "Pirfenidone at 801 mg three times daily",
        "N-acetylcysteine",
        "Nintedanib 150 mg twice daily",
        "Ambrisentan",
      ],
      answer: 2,
      explanation:
        "She meets the 2022 definition of progressive pulmonary fibrosis (worse symptoms, FVC fall of 5% or more and radiological progression), for which nintedanib is suggested based on INBUILD. Pirfenidone has insufficient evidence in PPF and the guideline asks for further research. NAC monotherapy has no benefit, and ambrisentan is harmful in IPF.",
      difficulty: "moderate",
    },
  ],
  theory: [
    {
      id: "respiratory-ild-ipf-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "common",
      question:
        "Describe the approach to a patient with suspected interstitial lung disease. Discuss the diagnosis and management of idiopathic pulmonary fibrosis.",
      openingLines: [
        "Interstitial lung disease is a group of over 200 disorders of the alveolar wall and interstitium producing restrictive physiology with low DLCO and diffuse shadows on imaging.",
        "IPF is a chronic progressive fibrosing interstitial pneumonia of unknown cause in older adults with a UIP pattern on HRCT or histology (ATS/ERS/JRS/ALAT 2022).",
      ],
      answer: [
        {
          heading: "Classification",
          points: [
            "ILD of known cause (CTD, drug, HP, pneumoconiosis); idiopathic interstitial pneumonias (IPF, NSIP, RB-ILD, DIP, COP, AIP, LIP, PPFE); granulomatous (sarcoid); others (LAM, PLCH, PAP).",
            "Indian context: ILD-India registry - HP 47%, CTD-ILD 14%, IPF 14%.",
          ],
        },
        {
          heading: "Clinical approach",
          points: [
            "Tempo of illness; occupational, environmental (birds, coolers), drug, CTD, smoking and family history.",
            "Examination: velcro crackles, clubbing, CTD signs, PH signs, exertional SpO2.",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "CXR, spirometry with lung volumes and DLCO, 6MWT, HRCT with prone and expiratory images.",
            "Serology: ANA, RF, anti-CCP, myositis panel; BAL, TBLC or surgical biopsy when HRCT not diagnostic; MDD.",
          ],
        },
        {
          heading: "Diagnosis of IPF",
          points: [
            "Exclusion of known causes plus UIP or probable UIP on HRCT, or a UIP histology, decided at MDD.",
            "Draw the HRCT category table (UIP, probable, indeterminate, alternative).",
          ],
        },
        {
          heading: "Management of IPF",
          points: [
            "Nintedanib 150 mg BD or pirfenidone 801 mg TDS (titrated); nerandomilast 18 mg BD approved in the USA 2025.",
            "Pulmonary rehabilitation, oxygen, vaccination, smoking cessation, cough control (low-dose morphine), comorbidity care.",
            "Avoid steroids-azathioprine-NAC, warfarin, ambrisentan; anti-reflux therapy no longer advised.",
          ],
        },
        {
          heading: "Acute exacerbation, prognosis and transplant",
          points: [
            "AE-IPF: exclude infection, PE, heart failure; oxygen/HFNO, antibiotics, steroids; no cyclophosphamide; mortality about 50%.",
            "GAP index; median survival 3-5 years; early transplant referral (ISHLT 2021) and palliative care.",
          ],
        },
      ],
      mustDraw: [
        "Flow chart: suspected ILD to history, HRCT, serology, BAL/biopsy, MDD",
        "Table of HRCT UIP categories",
      ],
      markSplit: [
        { part: "Definition and classification", marks: 2 },
        { part: "Clinical approach and investigations", marks: 3 },
        { part: "IPF diagnosis", marks: 1 },
        { part: "IPF treatment, AE and prognosis", marks: 4 },
      ],
      keywords: ["ILD", "IPF", "UIP", "MDD", "nintedanib", "pirfenidone", "acute exacerbation"],
    },
    {
      id: "respiratory-ild-ipf-t2",
      paper: "I",
      kind: "short-note",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Write a short note on progressive pulmonary fibrosis and antifibrotic therapy.",
      openingLines: [
        "Progressive pulmonary fibrosis (PPF) is a fibrotic ILD other than IPF that worsens in 2 of 3 domains within a year despite standard treatment (ATS/ERS/JRS/ALAT 2022).",
        "Antifibrotics slow, but do not reverse, the loss of lung function.",
      ],
      answer: [
        {
          heading: "Definition",
          points: [
            "2 of 3 in the past year: worsening symptoms; FVC fall of 5% or more or DLCO fall of 10% or more; radiological progression.",
            "Seen in fibrotic HP, CTD-ILD, idiopathic NSIP, unclassifiable ILD, sarcoidosis.",
          ],
        },
        {
          heading: "Antifibrotic drugs",
          points: [
            "Nintedanib 150 mg BD - INBUILD 2019 halved FVC decline in PPF; suggested in 2022.",
            "Pirfenidone - evidence insufficient for PPF; nerandomilast 18 mg BD effective in FIBRONEER-ILD 2025.",
          ],
        },
        {
          heading: "Monitoring",
          points: [
            "LFT monthly initially; weight, diarrhoea; FVC/DLCO every 3-6 months; contraception.",
          ],
        },
      ],
      mustDraw: ["Table: PPF criteria (symptoms, physiology, radiology)"],
      markSplit: [
        { part: "Definition and criteria", marks: 2 },
        { part: "Drugs and evidence", marks: 2 },
        { part: "Monitoring", marks: 1 },
      ],
      keywords: ["PPF", "INBUILD", "nintedanib", "nerandomilast"],
    },
  ],
  references: [
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Interstitial lung diseases",
    "Raghu G et al. Idiopathic Pulmonary Fibrosis (an Update) and Progressive Pulmonary Fibrosis in Adults: ATS/ERS/JRS/ALAT Clinical Practice Guideline. Am J Respir Crit Care Med 2022",
    "Travis WD et al. ATS/ERS Update of the International Multidisciplinary Classification of the Idiopathic Interstitial Pneumonias, 2013",
    "Singh S et al. Interstitial Lung Disease in India: Results of a Prospective Registry (ILD-India). Am J Respir Crit Care Med 2017",
    "Richeldi L et al. Nerandomilast in Patients with Idiopathic Pulmonary Fibrosis (FIBRONEER-IPF). N Engl J Med 2025",
    "Collard HR et al. Acute Exacerbation of Idiopathic Pulmonary Fibrosis: An International Working Group Report. Am J Respir Crit Care Med 2016",
    "Leard LE et al. ISHLT Consensus Document for the Selection of Lung Transplant Candidates, 2021",
  ],
});

topics.push({
  id: "respiratory-hypersensitivity-pneumonitis",
  title: "Hypersensitivity pneumonitis",
  frequency: "less-common",
  oneLiner:
    "**Hypersensitivity pneumonitis (HP)** is an **immune-mediated ILD** caused by repeated inhalation of an organic antigen (birds, moulds, thermophilic actinomycetes) or chemical in a sensitised person; the ATS/JRS/ALAT 2020 guideline divides it into **non-fibrotic and fibrotic HP**, and the cornerstone of treatment is **antigen avoidance**, with steroids or mycophenolate for persistent disease and **nintedanib for progressive fibrosis**.",
  keywords: [
    "HP",
    "extrinsic allergic alveolitis",
    "EAA",
    "bird fancier's lung",
    "pigeon breeder's lung",
    "farmer's lung",
    "bagassosis",
    "air cooler lung",
    "humidifier lung",
    "hot tub lung",
    "mushroom worker's lung",
    "three-density sign",
    "headcheese sign",
    "mosaic attenuation",
    "BAL lymphocytosis",
    "serum precipitins",
    "specific IgG",
    "fibrotic HP",
    "antigen avoidance",
  ],
  sections: [
    {
      heading: "Definition and epidemiology",
      points: [
        "**Hypersensitivity pneumonitis** is an immune-mediated ILD of the small airways and lung parenchyma that follows **exposure to an inciting antigen in a susceptible person**. [ATS/JRS/ALAT 2020]",
        "The older name **extrinsic allergic alveolitis** and the acute/subacute/chronic division have been replaced by **non-fibrotic and fibrotic HP**, because fibrosis predicts prognosis. [ATS/JRS/ALAT 2020]",
        "HP accounts for roughly 2-15% of ILD in Western series, with annual incidence about 1-2 per 100,000, higher in farming and bird-keeping communities. [Harrison 22e]",
        "In the **ILD-India registry HP was the commonest ILD at about 47%** of 1,084 patients - air coolers and birds were the main exposures. [Singh S, AJRCCM 2017]",
        "Only a small fraction of exposed people develop HP (about 1-15% of pigeon breeders), so **host susceptibility** (HLA class II, genetics, a second hit such as a viral infection) matters. [Harrison 22e]",
        "In up to **30-60% of HP no antigen is identified** even after detailed history - this does not exclude the diagnosis. [ATS/JRS/ALAT 2020]",
        "**Non-smokers are affected more** than smokers, because nicotine suppresses macrophage and lymphocyte activation. [Harrison 22e]",
      ],
    },
    {
      heading: "Aetiology - antigens, with Indian sources",
      points: [
        "**Avian proteins** (droppings, feathers, bloom): pigeon breeders, parrot and budgerigar keepers, **pigeon feeding at balconies and temples**, and **feather pillows and duvets**. [ATS/JRS/ALAT 2020]",
        "**Desert (evaporative) air coolers**: stagnant water in the tank and khus or wood-wool pads grow moulds and actinomycetes - '**air cooler lung**' is a distinctive Indian cause. [Indian J Chest Dis Allied Sci]",
        "**Thermophilic actinomycetes** (Saccharopolyspora rectivirgula, Thermoactinomyces): **farmer's lung** from mouldy hay and grain, and **bagassosis** from mouldy sugarcane bagasse in sugar mills of Maharashtra, UP and Tamil Nadu. [Harrison 22e]",
        "**Moulds in damp homes**: Aspergillus, Penicillium, Alternaria on leaking walls and air conditioners; **humidifier and air-conditioner lung**. [ATS/JRS/ALAT 2020]",
        "**Mushroom worker's lung**, malt worker's lung (Aspergillus clavatus), cheese washer's lung (Penicillium) and wood dust (sequoiosis, maple bark stripper's lung). [Harrison 22e]",
        "**Hot tub lung** from Mycobacterium avium complex aerosols, and machine operator's lung from contaminated metal-working fluids. [Harrison 22e]",
        "**Chemicals**: isocyanates (paints, polyurethane foam), acid anhydrides and some drugs can act as haptens. [Harrison 22e]",
      ],
    },
    {
      heading: "Pathophysiology",
      points: [
        "Particles under 5 micrometres reach the **terminal bronchioles and alveoli**, so HP centres on the small airways - hence centrilobular nodules and air trapping on CT. [Harrison 22e]",
        "**Type III (immune complex) reaction**: specific IgG binds inhaled antigen and fixes complement, giving the early neutrophilic response 4-8 hours after exposure. [Harrison 22e]",
        "**Type IV (Th1 cell-mediated) reaction** dominates later: IFN-gamma-driven CD8 and CD4 lymphocytes and macrophages form **poorly formed non-necrotising granulomas** - explaining BAL lymphocytosis. [Harrison 22e]",
        "**Classic histological triad**: cellular interstitial pneumonia (peribronchiolar), **cellular bronchiolitis**, and poorly formed granulomas or giant cells. [ATS/JRS/ALAT 2020]",
        "Continued exposure shifts the response to **Th2/Th17 with fibrosis** - fibrotic HP can look like UIP or fibrotic NSIP, usually with **bronchiolocentric fibrosis**. [ATS/JRS/ALAT 2020]",
        "Small-airway inflammation causes **air trapping**, so PFT can be restrictive, obstructive or mixed, with a low DLCO. [Harrison 22e]",
        "Specific IgG shows **exposure, not disease** - many exposed, healthy people have precipitins. [ATS/JRS/ALAT 2020]",
      ],
    },
    {
      heading: "Classification (ATS/JRS/ALAT 2020) and diagnostic confidence",
      points: [
        "**Non-fibrotic HP**: purely inflammatory (cellular) disease on HRCT and histology - often reversible with avoidance. [ATS/JRS/ALAT 2020]",
        "**Fibrotic HP**: radiological or histological fibrosis (with or without inflammation) - partly irreversible, may become **progressive pulmonary fibrosis**. [ATS/JRS/ALAT 2020]",
        "HRCT is graded as **typical HP, compatible with HP, or indeterminate for HP**. [ATS/JRS/ALAT 2020]",
        "Diagnosis combines **exposure identification + HRCT category + BAL lymphocytosis + histopathology**, discussed at MDD. [ATS/JRS/ALAT 2020]",
        "Confidence levels: **definite (90% or more), high (80-89%), moderate (70-79%), low (51-69%)** and not excluded. [ATS/JRS/ALAT 2020]",
        "Identified exposure + typical HRCT + BAL lymphocytosis gives a **high-confidence diagnosis without biopsy**. [ATS/JRS/ALAT 2020]",
        "The **CHEST 2021 guideline** uses a similar approach and supports the same exposure, imaging and BAL triad. [CHEST 2021]",
      ],
    },
    {
      heading: "Clinical features - history",
      points: [
        "**Inflammatory (former acute) presentation**: fever, chills, malaise, dry cough and breathlessness **4-8 hours after heavy exposure**, settling in 24-48 hours - mistaken for flu or pneumonia. [Harrison 22e]",
        "**Recurrent 'pneumonias'** that improve in hospital (away from the antigen) and recur at home are a classic clue. [ATS/JRS/ALAT 2020]",
        "**Insidious presentation**: progressive exertional breathlessness, dry cough, fatigue and weight loss over months to years with low-level exposure (feather pillow, cooler). [Harrison 22e]",
        "Take a structured **exposure questionnaire**: birds at home, neighbours or work, feather bedding, **coolers and their cleaning**, damp, ACs, humidifiers, farming, sugarcane, hobbies. [ATS/JRS/ALAT 2020]",
        "Ask about **improvement away from home** (holidays, hospital) and worsening on return, and **seasonality** (coolers in summer). [ATS/JRS/ALAT 2020]",
        "In India HP is often labelled **TB or asthma** and treated empirically; ask about prior ATT courses. [ILD-India registry 2017]",
      ],
    },
    {
      heading: "Examination findings",
      points: [
        "**Bilateral fine inspiratory crackles**, often more mid-zone than in IPF. [Harrison 22e]",
        "**Mid-inspiratory squeaks** suggest bronchiolitis and are a recognised HP sign. [ATS/JRS/ALAT 2020]",
        "Fever, tachypnoea and hypoxaemia in the inflammatory form; weight loss in long-standing disease. [Harrison 22e]",
        "**Clubbing is uncommon** but can occur in fibrotic HP and predicts worse outcome. [Harrison 22e]",
        "Signs of **pulmonary hypertension** in advanced fibrotic disease. [Harrison 22e]",
      ],
    },
    {
      heading: "Differential diagnosis",
      points: [
        "**IPF**: older, male, smoker, basal UIP without mosaic attenuation and BAL lymphocytes under 30%. [ATS/ERS/JRS/ALAT 2022]",
        "**Sarcoidosis**: perilymphatic nodules, hilar nodes, **well-formed** non-necrotising granulomas and BAL CD4/CD8 over 3.5. [ATS 2020]",
        "**Pulmonary TB and miliary TB**: randomly distributed nodules, cavities, AFB/CBNAAT positive - mandatory to exclude in India. [NTEP 2024]",
        "**NSIP (idiopathic or CTD)**: lower-zone GGO with subpleural sparing, autoantibodies. [ACR/CHEST 2023]",
        "**Asthma and ABPA**: wheeze, eosinophilia and raised IgE, unlike HP's lymphocytic picture. [GINA 2025]",
        "**Organising pneumonia, respiratory bronchiolitis-ILD** (smokers) and **atypical pneumonia** (fever, consolidation, response to antibiotics). [Harrison 22e]",
        "**Organic dust toxic syndrome**: flu-like illness after heavy mould dust in many exposed workers at once, without sensitisation or lasting disease. [Harrison 22e]",
      ],
    },
    {
      heading: "Investigations",
      points: [
        "**Chest X-ray**: may be normal or show fine nodular or ground-glass shadows, upper-mid zone fibrosis in chronic disease. [Harrison 22e]",
        "**HRCT typical non-fibrotic HP**: **ill-defined centrilobular nodules**, diffuse ground-glass, and **mosaic attenuation with air trapping** on expiratory images. [ATS/JRS/ALAT 2020]",
        "**HRCT typical fibrotic HP**: reticulation with traction bronchiectasis in a **mid-lung or upper-zone** or random distribution, plus small-airway signs; the **three-density pattern** (formerly headcheese sign) is highly specific. [ATS/JRS/ALAT 2020]",
        "**PFT**: restrictive or mixed pattern, **reduced DLCO**, and exertional desaturation on 6MWT. [Harrison 22e]",
        "**BAL lymphocytosis**: lymphocytes **30% or more** (often over 40-50% in non-fibrotic HP) supports HP; the CD4/CD8 ratio is usually low but too variable to rely on. [ATS/JRS/ALAT 2020]",
        "**Serum antigen-specific IgG (precipitins)** to avian proteins and moulds is suggested to identify the exposure; a positive test shows sensitisation, not disease. [ATS/JRS/ALAT 2020]",
        "**Transbronchial or cryobiopsy, or surgical biopsy** when HRCT is indeterminate; inhalational challenge and lymphocyte proliferation tests are not routine. [ATS/JRS/ALAT 2020]",
        "Exclude TB with **sputum or BAL CBNAAT and culture**, and do **ANA, RF, anti-CCP and myositis panel** to look for CTD. [NTEP 2024]",
        "**Home visit or environmental survey** (cooler water, damp walls, bird nests in AC ducts) can identify the source when history fails. [ATS/JRS/ALAT 2020]",
      ],
    },
    {
      heading: "Management in OPD",
      points: [
        "**Antigen avoidance** is the single most important step and improves survival in fibrotic HP too: remove birds, feather bedding, damp and mould; stop or replace coolers. [ATS/JRS/ALAT 2020]",
        "Practical cooler advice: **drain and dry the tank weekly, change pads each season, or switch to a fan or sealed AC** with serviced filters. [Indian practice]",
        "Removing birds from the home is not enough - **feathers persist in dust for months**, so the house needs thorough cleaning and soft furnishings may need replacing. [Harrison 22e]",
        "**Non-fibrotic HP** with persistent symptoms or significant impairment after avoidance: **prednisolone 0.5 mg/kg/day (about 30-40 mg) for 4-8 weeks**, then taper over 3-6 months to the lowest effective dose. [Harrison 22e]",
        "**Steroid-sparing agents** for relapse or long courses: **mycophenolate mofetil 1-1.5 g twice daily** or **azathioprine 2 mg/kg/day** (check TPMT where available); MMF also helps fibrotic HP with inflammation. [Harrison 22e]",
        "**Fibrotic HP that progresses** despite avoidance and immunosuppression meets PPF criteria: add **nintedanib 150 mg twice daily** (INBUILD). [ATS/ERS/JRS/ALAT 2022]",
        "Give **PJP prophylaxis** (cotrimoxazole 960 mg three times weekly) when prednisolone is 20 mg or more for over 4 weeks with a second immunosuppressant, and **bone protection** (calcium, vitamin D). [ACR 2022]",
        "Before steroids in India, **exclude active TB** (CBNAAT) and consider TB preventive treatment in high-risk patients. [NTEP 2024]",
        "**Pulmonary rehabilitation, oxygen and vaccination** as in other fibrotic ILDs. [ATS/ERS/JRS/ALAT 2022]",
      ],
    },
    {
      heading: "Management in IPD",
      points: [
        "**Admit** for hypoxaemia (SpO2 under 90%), breathlessness at rest, or diagnostic uncertainty with fever and infiltrates. [BTS 2023]",
        "Remove from exposure, give **controlled oxygen**, and start empirical antibiotics if pneumonia cannot be excluded. [Harrison 22e]",
        "Severe inflammatory HP: **prednisolone 0.5-1 mg/kg/day** or IV methylprednisolone in respiratory failure, after excluding infection. [Harrison 22e]",
        "**Acute exacerbation of fibrotic HP** behaves like AE-IPF with high mortality - manage similarly. [ATS/ERS/JRS/ALAT 2022]",
        "Before discharge, ensure the **source is removed** - otherwise readmission is likely. [ATS/JRS/ALAT 2020]",
      ],
    },
    {
      heading: "Special situations",
      points: [
        "**Children**: HP (often bird-related) is the commonest childhood ILD in some series - ask about pets and pillows. [Nelson 22e]",
        "**Pregnancy**: prednisolone and azathioprine are acceptable; **mycophenolate is teratogenic** (stop 6 weeks before conception); nintedanib is contraindicated. [BSR 2022]",
        "**Diabetes and elderly**: prefer early steroid-sparing therapy to limit hyperglycaemia, osteoporosis and infection. [Harrison 22e]",
        "**Occupational cases** (farmers, sugar-mill workers): job modification, respirators (powered air-purifying), and compensation under the **Employees' Compensation Act**. [MoLE India]",
        "**Resource-limited setting**: if BAL and biopsy are unavailable, an **exposure history + typical HRCT** with improvement after avoidance is strong evidence. [ATS/JRS/ALAT 2020]",
      ],
    },
    {
      heading: "Complications and prognosis",
      points: [
        "**Non-fibrotic HP** usually recovers fully if the antigen is removed early. [ATS/JRS/ALAT 2020]",
        "**Fibrotic HP** has a prognosis approaching IPF when a UIP-like pattern or extensive honeycombing is present. [Harrison 22e]",
        "**Poor prognostic factors**: fibrosis, honeycombing, **unidentified antigen**, continued exposure, low BAL lymphocytes, older age and clubbing. [ATS/JRS/ALAT 2020]",
        "Complications: pulmonary hypertension, respiratory failure, emphysema (farmer's lung in non-smokers) and steroid toxicity. [Harrison 22e]",
      ],
    },
    {
      heading: "Referral, follow-up and monitoring",
      points: [
        "**Refer** suspected HP for HRCT, BAL and MDD; do not start steroids before the exposure is sought and TB excluded. [ATS/JRS/ALAT 2020]",
        "Review at **4-12 weeks** after avoidance or starting steroids with symptoms, SpO2, **FVC and DLCO**. [Harrison 22e]",
        "Then **every 3-6 months**: PFT, weight, glucose, BP, blood count and LFT for MMF or azathioprine. [ACR/CHEST 2023]",
        "Repeat **HRCT** if FVC falls or symptoms worsen, to detect progressive fibrosis. [ATS/ERS/JRS/ALAT 2022]",
        "Refer **progressive fibrotic HP** for antifibrotic therapy and transplant assessment. [ISHLT 2021]",
      ],
    },
    {
      heading: "Prevention and counselling",
      points: [
        "Explain that **even small, continued exposure** keeps the disease active - avoidance must be complete. [ATS/JRS/ALAT 2020]",
        "**Public-health message in cities**: discourage feeding pigeons at balconies; use netting to stop roosting; clean droppings wet, wearing a mask. [Indian practice]",
        "**Cooler hygiene** each summer and repair of damp walls and leaking AC units. [Indian practice]",
        "Workplace controls in farms and sugar mills: **dry storage of hay and bagasse**, ventilation and respiratory protection. [Harrison 22e]",
      ],
    },
    {
      heading: "Latest guideline updates",
      points: [
        "**ATS/JRS/ALAT 2020**: non-fibrotic vs fibrotic HP; HRCT typical/compatible/indeterminate; diagnostic confidence levels; BAL lymphocyte analysis and specific IgG suggested. [ATS/JRS/ALAT 2020]",
        "**CHEST 2021**: parallel diagnostic guideline emphasising exposure assessment and BAL. [CHEST 2021]",
        "**ATS/ERS/JRS/ALAT 2022**: progressive fibrotic HP is included under **PPF** with nintedanib suggested. [ATS/ERS/JRS/ALAT 2022]",
        "**FIBRONEER-ILD (NEJM 2025)**: nerandomilast slowed FVC decline in PPF, which included fibrotic HP patients. [Maher TM, NEJM 2025]",
        "Steroid dosing in HP remains **expert opinion**; no RCT has defined the dose or duration. [Harrison 22e]",
      ],
    },
    {
      heading: "Exam and viva angle",
      points: [
        "Classic short note: **'Hypersensitivity pneumonitis'** - give definition, antigen table with Indian examples, HRCT signs, BAL, avoidance and steroids.",
        "Viva: '**What is the three-density sign?**' - normal lung, ground-glass and low-attenuation lobules side by side on one CT slice. [ATS/JRS/ALAT 2020]",
        "**Common mistake**: treating with steroids while the bird or cooler stays in the house.",
        "**Common mistake**: taking positive precipitins as diagnostic - they only show exposure.",
        "Know that **smokers get HP less often**, and that HP is **the commonest ILD in India**.",
      ],
    },
  ],
  tables: [
    {
      heading: "Drugs in hypersensitivity pneumonitis",
      columns: ["Drug", "Dose and route", "Duration/titration", "Key adverse effects / contraindications"],
      rows: [
        ["Prednisolone", "0.5 mg/kg/day orally (about 30-40 mg)", "4-8 weeks, taper over 3-6 months", "Hyperglycaemia, osteoporosis, infection, TB reactivation"],
        ["Mycophenolate mofetil", "500 mg BD rising to 1-1.5 g BD orally", "Long term (1-2 years or more)", "Diarrhoea, cytopenia, infection; teratogenic"],
        ["Azathioprine", "1-2 mg/kg/day orally", "Long term", "Marrow suppression (TPMT deficiency), hepatitis, pancreatitis"],
        ["Nintedanib", "150 mg BD orally with food", "Lifelong for progressive fibrotic HP", "Diarrhoea, raised ALT, bleeding; contraindicated in pregnancy"],
        ["Cotrimoxazole prophylaxis", "960 mg orally three times weekly", "While on high-dose combined immunosuppression", "Rash, hyperkalaemia, cytopenia"],
      ],
    },
    {
      heading: "Antigens causing HP (with Indian examples)",
      columns: ["Disease", "Source", "Antigen"],
      rows: [
        ["Bird fancier's / pigeon breeder's lung", "Pigeons, parrots, budgerigars, feather pillows", "Avian serum proteins, bloom, droppings"],
        ["Air cooler lung", "Desert coolers with stagnant water and pads", "Moulds, thermophilic actinomycetes"],
        ["Farmer's lung", "Mouldy hay, grain", "Saccharopolyspora rectivirgula"],
        ["Bagassosis", "Mouldy sugarcane bagasse", "Thermoactinomyces sacchari"],
        ["Mushroom worker's lung", "Mushroom compost", "Thermophilic actinomycetes"],
        ["Humidifier / AC lung", "Contaminated humidifiers, AC units", "Moulds, bacteria"],
        ["Hot tub lung", "Indoor hot tubs", "Mycobacterium avium complex"],
        ["Chemical worker's lung", "Paints, foams, plastics", "Isocyanates"],
      ],
    },
    {
      heading: "Non-fibrotic vs fibrotic HP",
      columns: ["Feature", "Non-fibrotic HP", "Fibrotic HP"],
      rows: [
        ["HRCT", "Centrilobular nodules, GGO, mosaic attenuation", "Reticulation, traction bronchiectasis, three-density sign, honeycombing"],
        ["Histology", "Cellular bronchiolitis, interstitial pneumonia, poorly formed granulomas", "Bronchiolocentric fibrosis, UIP-like or fibrotic NSIP"],
        ["BAL lymphocytes", "Often over 40-50%", "Lower, may be under 30%"],
        ["Reversibility", "Usually reversible with avoidance", "Partly irreversible"],
        ["Treatment", "Avoidance with or without steroids", "Avoidance, MMF, nintedanib if progressive"],
        ["Prognosis", "Good", "Can approach IPF"],
      ],
    },
    {
      heading: "HP vs IPF vs sarcoidosis",
      columns: ["Feature", "HP", "IPF", "Sarcoidosis"],
      rows: [
        ["Age/sex", "Any, often women in India", "Over 60, men", "20-50"],
        ["Exposure", "Birds, moulds, coolers", "None", "None specific"],
        ["HRCT zone", "Mid-upper, diffuse", "Basal subpleural", "Upper, perilymphatic"],
        ["Hallmark CT sign", "Mosaic, centrilobular nodules", "Honeycombing", "Hilar nodes, perilymphatic nodules"],
        ["BAL", "Lymphocytes over 30%, CD4/CD8 low", "Neutrophils, lymphocytes under 30%", "Lymphocytes, CD4/CD8 over 3.5"],
        ["Granuloma", "Poorly formed", "None", "Well formed"],
      ],
    },
  ],
  redFlags: [
    "Resting hypoxaemia (SpO2 under 90%) or breathlessness at rest",
    "Recurrent febrile episodes with bilateral infiltrates not responding to antibiotics",
    "Rapid decline in FVC or DLCO despite avoidance",
    "Fever, cough and weight loss with cavity or nodes - TB must be excluded",
    "Signs of right heart failure",
    "New infiltrates while on steroids or MMF - opportunistic infection",
  ],
  pearls: [
    "**HP is the commonest ILD in India** (ILD-India registry, about 47%).",
    "**Antigen avoidance is the treatment**; steroids only speed recovery.",
    "**Air cooler lung** is the Indian HP - ask about coolers every summer.",
    "**Three-density sign** (normal, ground-glass, air trapping) is highly specific for fibrotic HP.",
    "**BAL lymphocytes 30% or more** supports HP; precipitins show exposure, not disease.",
    "**Smokers are protected** from HP.",
    "**Mid-inspiratory squeaks** = bronchiolitis = think HP.",
    "Fibrotic HP that progresses = **PPF = nintedanib**.",
  ],
  mcqs: [
    {
      id: "respiratory-hypersensitivity-pneumonitis-q1",
      stem: "A 42-year-old non-smoking woman from Jaipur has 6 months of dry cough and exertional breathlessness that are worse in summer. HRCT shows centrilobular ground-glass nodules and mosaic attenuation with air trapping on expiratory images. The most relevant history to seek is:",
      options: [
        "Use of a desert air cooler at home",
        "Long-term amiodarone",
        "Work as a stone cutter",
        "Childhood measles",
      ],
      answer: 0,
      explanation:
        "Centrilobular nodules with mosaic attenuation and air trapping are typical non-fibrotic HP, and summer worsening points to a contaminated evaporative air cooler, a recognised Indian source of moulds and actinomycetes. Amiodarone causes high-attenuation shadows and NSIP or OP; stone cutting causes silicosis with upper-zone nodules; childhood measles predisposes to bronchiectasis.",
      difficulty: "easy",
    },
    {
      id: "respiratory-hypersensitivity-pneumonitis-q2",
      stem: "Which BAL finding best supports a diagnosis of hypersensitivity pneumonitis?",
      options: [
        "Neutrophils 60% with lymphocytes 5%",
        "Eosinophils 40%",
        "Lymphocytes 55%",
        "Haemosiderin-laden macrophages over 20%",
      ],
      answer: 2,
      explanation:
        "A marked BAL lymphocytosis (30% or more, often over 50%) supports HP in the right clinical and radiological setting. A neutrophil-predominant lavage fits IPF or infection, BAL eosinophilia over 25% suggests eosinophilic pneumonia, and haemosiderin-laden macrophages indicate diffuse alveolar haemorrhage.",
      difficulty: "easy",
    },
    {
      id: "respiratory-hypersensitivity-pneumonitis-q3",
      stem: "A pigeon breeder with non-fibrotic HP asks what will most improve his long-term outcome. The best answer is:",
      options: [
        "Lifelong prednisolone 10 mg daily",
        "Wearing a surgical mask while handling birds",
        "Starting pirfenidone",
        "Complete removal from the antigen, including the birds and contaminated dust",
      ],
      answer: 3,
      explanation:
        "Antigen avoidance is the cornerstone of HP treatment and is linked to better survival; non-fibrotic disease is often fully reversible once exposure stops. Low-dose lifelong steroids do not replace avoidance and add toxicity. A surgical mask does not filter fine avian antigens adequately. Pirfenidone has no role in non-fibrotic HP.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-hypersensitivity-pneumonitis-q4",
      stem: "On HRCT, the 'three-density pattern' in fibrotic hypersensitivity pneumonitis refers to:",
      options: [
        "Honeycombing, emphysema and consolidation",
        "Normal lung, ground-glass opacity and low-attenuation lobules with air trapping",
        "Nodules, cavities and calcified nodes",
        "Septal thickening, effusion and cardiomegaly",
      ],
      answer: 1,
      explanation:
        "The three-density (formerly headcheese) pattern shows lobules of normal lung, ground-glass inflammation and hypo-attenuating air-trapped lobules side by side, reflecting combined alveolitis and small-airway disease; it is highly specific for fibrotic HP. Honeycombing with emphysema suggests CPFE, cavities with nodes suggest TB, and septal thickening with effusion suggests heart failure.",
      difficulty: "moderate",
    },
    {
      id: "respiratory-hypersensitivity-pneumonitis-q5",
      stem: "Under the ATS/JRS/ALAT 2020 guideline, HP is classified primarily by:",
      options: [
        "Duration: acute, subacute and chronic",
        "Type of antigen: avian, microbial and chemical",
        "Presence or absence of fibrosis on imaging or histology",
        "Serum precipitin titre",
      ],
      answer: 2,
      explanation:
        "The 2020 guideline replaced the acute/subacute/chronic scheme with non-fibrotic and fibrotic HP because fibrosis, not duration, predicts outcome and treatment response. Antigen type guides avoidance but is not the classification, and precipitin titres show exposure only and do not stage disease.",
      difficulty: "hard",
    },
  ],
  theory: [
    {
      id: "respiratory-hypersensitivity-pneumonitis-t1",
      paper: "I",
      kind: "long",
      marks: 10,
      minutes: 18,
      frequency: "less-common",
      question:
        "Discuss the aetiology, classification, diagnosis and management of hypersensitivity pneumonitis with reference to India.",
      openingLines: [
        "Hypersensitivity pneumonitis is an immune-mediated ILD caused by inhaled antigens in a sensitised host, classified as non-fibrotic or fibrotic (ATS/JRS/ALAT 2020).",
        "It is the commonest ILD in India (about 47% in the ILD-India registry), commonly from birds and air coolers.",
      ],
      answer: [
        {
          heading: "Aetiology",
          points: [
            "Avian proteins, thermophilic actinomycetes, moulds (air coolers, damp), bagasse, isocyanates; antigen unidentified in up to 30-60%.",
            "Host susceptibility; non-smokers more often.",
          ],
        },
        {
          heading: "Pathogenesis",
          points: [
            "Type III and type IV reactions; triad of cellular bronchiolitis, interstitial pneumonia and poorly formed granulomas; fibrosis with persistence.",
          ],
        },
        {
          heading: "Classification and clinical features",
          points: [
            "Non-fibrotic vs fibrotic; flu-like episodes 4-8 hours after exposure or insidious dyspnoea; crackles and squeaks.",
          ],
        },
        {
          heading: "Diagnosis",
          points: [
            "Exposure history, HRCT (centrilobular nodules, mosaic, three-density sign), BAL lymphocytes 30% or more, specific IgG, biopsy if needed, MDD with confidence levels.",
            "Exclude TB and CTD.",
          ],
        },
        {
          heading: "Management",
          points: [
            "Antigen avoidance (cooler hygiene, remove birds and feathers); prednisolone 0.5 mg/kg tapering; MMF or azathioprine; nintedanib for progressive fibrotic HP.",
            "Rehab, oxygen, vaccines, PJP prophylaxis and bone protection; follow-up PFT every 3-6 months.",
          ],
        },
        {
          heading: "Prognosis",
          points: [
            "Non-fibrotic good with avoidance; fibrotic with honeycombing approaches IPF.",
          ],
        },
      ],
      mustDraw: ["Table of antigens with Indian examples", "Diagnostic flow: exposure, HRCT, BAL, biopsy, MDD"],
      markSplit: [
        { part: "Definition, aetiology and pathogenesis", marks: 3 },
        { part: "Classification and diagnosis", marks: 4 },
        { part: "Management and prognosis", marks: 3 },
      ],
      keywords: ["HP", "air cooler lung", "BAL lymphocytosis", "antigen avoidance", "fibrotic HP"],
    },
    {
      id: "respiratory-hypersensitivity-pneumonitis-t2",
      paper: "I",
      kind: "differentiate",
      marks: 5,
      minutes: 9,
      frequency: "less-common",
      question: "Differentiate fibrotic hypersensitivity pneumonitis from idiopathic pulmonary fibrosis.",
      openingLines: [
        "Fibrotic HP is the commonest mimic of IPF and the distinction matters because HP improves with antigen avoidance and immunosuppression.",
        "The key discriminators are exposure, HRCT distribution, small-airway signs and BAL lymphocytosis.",
      ],
      answer: [
        {
          heading: "Clinical",
          points: [
            "HP: exposure, any age, non-smoker, squeaks; IPF: man over 60, ex-smoker, clubbing.",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "HRCT: HP mid-upper with mosaic and three-density sign vs IPF basal subpleural UIP.",
            "BAL: HP lymphocytes 30% or more vs IPF under 30%; histology bronchiolocentric with granulomas vs UIP.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "HP: avoidance, steroids/MMF, nintedanib if progressive; IPF: antifibrotics, no steroids.",
          ],
        },
      ],
      mustDraw: ["Two-column comparison table"],
      markSplit: [
        { part: "Clinical", marks: 1 },
        { part: "HRCT, BAL, histology", marks: 3 },
        { part: "Treatment and prognosis", marks: 1 },
      ],
      keywords: ["fibrotic HP", "IPF", "three-density sign", "UIP"],
    },
  ],
  references: [
    "Raghu G et al. Diagnosis of Hypersensitivity Pneumonitis in Adults: An Official ATS/JRS/ALAT Clinical Practice Guideline. Am J Respir Crit Care Med 2020",
    "Fernandez Perez ER et al. Diagnosis and Evaluation of Hypersensitivity Pneumonitis: CHEST Guideline and Expert Panel Report, 2021",
    "Harrison's Principles of Internal Medicine, 22nd edition, 2025 - Hypersensitivity pneumonitis and pulmonary infiltrates with eosinophilia",
    "Singh S et al. Interstitial Lung Disease in India: Results of a Prospective Registry (ILD-India). Am J Respir Crit Care Med 2017",
    "Raghu G et al. ATS/ERS/JRS/ALAT Clinical Practice Guideline on IPF and Progressive Pulmonary Fibrosis, 2022",
    "Flaherty KR et al. Nintedanib in Progressive Fibrosing Interstitial Lung Diseases (INBUILD). N Engl J Med 2019",
  ],
});

export default topics;
