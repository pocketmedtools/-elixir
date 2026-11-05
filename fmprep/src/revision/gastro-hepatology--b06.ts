import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-hepatitis-c-chronic": {
    checked: "2026-10",
    updated: [
      "AASLD-IDSA HCV Guidance 2023: universal adult screening, simplified treatment, treat acute HCV at once.",
      "CDC 2023: perinatally exposed infants tested by HCV RNA at 2-6 months.",
      "WHO HCV guidelines 2022: treat children 3 years and over, point-of-care RNA, same-visit test and treat.",
      "WHO Global Hepatitis Report 2024: updated global and Indian burden figures.",
      "NVHCP 2018 regimens (SOF + DCV, SOF/VEL, SOF/VEL + ribavirin) retained as the Indian standard.",
    ],
    master: {
      heading: "Master revision table - chronic hepatitis C",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "HCV RNA detectable **beyond 6 months**; anti-HCV alone = exposure only; cure = **SVR12**."],
        ["Burden", "WHO 2024 about **50 million** worldwide; India **6-12 million**, genotype 3 about 60%; Punjab, north-east, PWID, dialysis."],
        ["Virology", "Flaviviridae RNA virus, no latent reservoir; targets **NS3/4A (-previr), NS5A (-asvir), NS5B (-buvir)**."],
        ["Natural history", "55-85% chronic; **15-30% cirrhosis in 20-30 years**; HCC 1-4%/year in cirrhosis."],
        ["Clinical", "Silent; fatigue; extrahepatic - **cryoglobulinaemia, MPGN, PCT, lichen planus, NHL, diabetes**."],
        ["Diagnosis", "Anti-HCV then **HCV RNA** (or core antigen); reflex/point-of-care RNA (WHO 2022)."],
        ["Staging", "**APRI over 2 = cirrhosis**; **FIB-4 over 3.25** advanced; elastography over 12.5 kPa; Child-Pugh."],
        ["Pre-treatment", "**HBsAg, anti-HBc**, HIV, eGFR, pregnancy test, drug interactions (rifampicin, amiodarone, PPIs)."],
        ["No cirrhosis", "**SOF 400 + DCV 60 mg OD 12 weeks** or SOF/VEL 12 weeks; AASLD G/P 8 weeks."],
        ["Cirrhosis", "Compensated: SOF/VEL 12 weeks or SOF + DCV 24 weeks; decompensated: **SOF/VEL + ribavirin 12 weeks**, no protease inhibitor."],
        ["DAA failure", "**SOF/VEL/VOX 12 weeks** at specialist centre."],
        ["Special groups", "Pregnancy - treat after delivery, ribavirin teratogenic; infants RNA at 2-6 months; CKD no dose change; children 3+ treat."],
        ["Follow-up", "**SVR12**; cirrhosis - **6-monthly ultrasound for life**; reinfection by RNA."],
        ["Prevention", "Injection safety, NAT blood screening, harm reduction; no vaccine; vaccinate HAV/HBV."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "HCV testing and treatment pathway (NVHCP)",
        caption: "Antibody screens, RNA confirms, fibrosis decides the regimen.",
        steps: [
          { label: "Screen with anti-HCV (ELISA or RDT)", detail: "High-risk groups, pregnancy, raised ALT, all adults once (AASLD)" },
          { label: "Positive - HCV RNA or core antigen", detail: "Negative RNA = cleared or false positive", tone: "decision" },
          { label: "RNA detectable - assess liver", detail: "APRI, FIB-4, ultrasound, Child-Pugh, HBsAg/anti-HBc, HIV, eGFR" },
          { label: "Check drug interactions", detail: "Rifampicin, antiepileptics, amiodarone, PPIs", tone: "warn" },
          { label: "Start pan-genotypic DAA", detail: "SOF + DCV or SOF/VEL 12 weeks (non-cirrhotic)" },
          { label: "HCV RNA 12 weeks after end", detail: "Undetectable = SVR12 = cure", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Regimen by liver stage",
        root: "Viraemic chronic HCV",
        arms: [
          { label: "No cirrhosis", tone: "good", steps: ["SOF 400 + DCV 60 mg 12 weeks", "or SOF/VEL 12 weeks", "or G/P 8 weeks (AASLD)"] },
          { label: "Compensated cirrhosis", tone: "decision", steps: ["SOF/VEL 12 weeks", "or SOF + DCV 24 weeks", "6-monthly ultrasound for life"] },
          { label: "Decompensated cirrhosis", tone: "warn", steps: ["SOF/VEL + ribavirin 12 weeks", "No protease inhibitors", "Transplant assessment"] },
          { label: "DAA failure", tone: "warn", steps: ["SOF/VEL/VOX 12 weeks", "Specialist centre"] },
        ],
      },
      {
        kind: "compare",
        heading: "Interpreting HCV serology",
        columns: ["Anti-HCV", "HCV RNA", "Meaning", "Action"],
        rows: [
          ["Positive", "Detectable", "Current infection", "Stage and treat"],
          ["Positive", "Not detected", "Cleared infection or false positive", "Reassure; repeat RNA if recent exposure"],
          ["Negative", "Detectable", "Window period or immunosuppressed", "Treat as acute HCV"],
          ["Positive (after cure)", "Detectable again", "Reinfection or relapse", "Refer for retreatment"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Chronic HCV** is HCV RNA persisting beyond **6 months**.",
            "About **50 million** people worldwide and **6-12 million** Indians are infected.",
            "**Genotype 3** is commonest in India, followed by genotype 1.",
            "**NVHCP** (2018) gives free testing and DAA treatment, aiming at elimination by 2030.",
            "Cure is **SVR12**: undetectable RNA 12 weeks after treatment ends.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "Main Indian route is **unsafe injections** and reused needles.",
            "Others: transfusion before screening, **haemodialysis**, injecting drugs, tattoos, shared razors.",
            "Vertical transmission is about **5%**, higher with HIV.",
            "Alcohol, obesity, diabetes and HBV or HIV co-infection speed fibrosis.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "HCV is an RNA virus with **no latent reservoir**, so it can be cured.",
            "Liver damage is **T-cell mediated**, leading to fibrosis over decades.",
            "**15-30%** develop cirrhosis in 20-30 years; HCC then 1-4% a year.",
            "Drug targets: **NS3/4A protease, NS5A and NS5B polymerase**.",
            "B-cell stimulation causes **cryoglobulinaemia**, MPGN and lymphoma.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Most patients are **asymptomatic** for decades.",
            "Fatigue is the commonest symptom.",
            "Extrahepatic clues: **purpura, nephrotic syndrome, PCT blisters, lichen planus**.",
            "Look for stigmata of cirrhosis and splenomegaly.",
            "Always take an injection, transfusion and dialysis history.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Screen with **anti-HCV**, then confirm with **HCV RNA**.",
            "**APRI over 2** suggests cirrhosis; **FIB-4 over 3.25** suggests advanced fibrosis.",
            "Elastography over **12.5 kPa** means cirrhosis.",
            "Test **HBsAg and anti-HBc** and HIV before treatment.",
            "Genotyping is **not needed** with pan-genotypic drugs.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Treat **everyone viraemic** aged 3 years and over.",
            "No cirrhosis: **sofosbuvir 400 mg + daclatasvir 60 mg** daily for 12 weeks.",
            "Or **sofosbuvir/velpatasvir** daily for 12 weeks; AASLD also allows G/P for 8 weeks.",
            "Compensated cirrhosis: SOF/VEL 12 weeks or SOF + DCV **24 weeks**.",
            "Check interactions: **rifampicin, antiepileptics, amiodarone, PPIs**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Decompensated: **SOF/VEL + ribavirin** for 12 weeks; never protease inhibitors.",
            "DAA failure: **SOF/VEL/VOX** for 12 weeks at a specialist centre.",
            "HBsAg positive: give **tenofovir prophylaxis** during and 12 weeks after DAAs.",
            "Cryoglobulin vasculitis may need rituximab with DAAs.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Pregnancy**: screen each pregnancy; usually treat after delivery.",
            "**Ribavirin** is teratogenic: contraception for 6 months in both partners.",
            "Breastfeeding is allowed; caesarean does not prevent transmission.",
            "Exposed infants: **HCV RNA at 2-6 months** (CDC 2023).",
            "CKD and dialysis: sofosbuvir and G/P need **no dose change**.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Check **HCV RNA 12 weeks** after the end of treatment.",
            "Cirrhosis after cure: **ultrasound every 6 months for life**.",
            "Antibody stays positive; check reinfection by **RNA**.",
            "Refer decompensation, DAA failure, HCC, pregnancy, children, co-infection.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AASLD-IDSA 2023**: universal screening, simplified treatment, treat acute HCV immediately.",
            "**WHO 2022**: point-of-care RNA, same-visit treatment, children 3 years and over.",
            "**CDC 2023**: infant testing by RNA at 2-6 months.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for chronic hepatitis C",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Sofosbuvir + daclatasvir", "400 mg + 60 mg orally once daily", "12 weeks; 24 weeks in cirrhosis", "Amiodarone bradycardia; daclatasvir 90 mg with efavirenz"],
            ["Sofosbuvir/velpatasvir", "400/100 mg orally once daily", "12 weeks", "PPIs reduce absorption; rifampicin contraindicated"],
            ["Glecaprevir/pibrentasvir", "300/120 mg (3 tablets) once daily with food", "8 weeks", "Contraindicated Child-Pugh B/C; avoid ethinylestradiol"],
            ["Sofosbuvir/velpatasvir/voxilaprevir", "400/100/100 mg once daily with food", "12 weeks (DAA failure)", "Contraindicated Child-Pugh B/C"],
            ["Ribavirin", "1000 mg (under 75 kg) or 1200 mg/day in 2 doses", "12 weeks with SOF/VEL", "Haemolytic anaemia, teratogenic"],
          ],
        },
        {
          heading: "Regimen by patient group",
          columns: ["Group", "Regimen", "Duration"],
          rows: [
            ["No cirrhosis", "SOF + DCV or SOF/VEL (G/P per AASLD)", "12 weeks (G/P 8 weeks)"],
            ["Compensated cirrhosis", "SOF/VEL or SOF + DCV", "12 weeks / 24 weeks"],
            ["Decompensated cirrhosis", "SOF/VEL + ribavirin", "12 weeks (24 weeks without ribavirin)"],
            ["DAA failure", "SOF/VEL/VOX", "12 weeks"],
          ],
        },
        {
          heading: "Fibrosis and cure cut-offs",
          columns: ["Test", "Cut-off", "Meaning"],
          rows: [
            ["APRI", "Over 2 / under 0.5", "Cirrhosis likely / significant fibrosis unlikely"],
            ["FIB-4", "Over 3.25 / under 1.45", "Advanced fibrosis likely / excluded"],
            ["Transient elastography", "Over 12.5 kPa", "Cirrhosis"],
            ["HCV RNA 12 weeks post-treatment", "Undetectable", "SVR12 - cure"],
          ],
        },
      ],
      remember: [
        "**Previr, asvir, buvir**: protease, NS5A, polymerase.",
        "Antibody means exposure; **RNA means infection**.",
        "**No protease inhibitor in Child B or C**.",
        "Test **HBsAg and anti-HBc** before every DAA course.",
        "**Rifampicin and amiodarone**: the two interactions examiners ask.",
        "**Cirrhosis plus SVR** still needs 6-monthly ultrasound for life.",
        "**APRI over 2** equals cirrhosis under NVHCP.",
      ],
    },
  },
  "gastro-hepatology-autoimmune-liver": {
    checked: "2026-10",
    updated: [
      "EASL AIH Clinical Practice Guidelines 2025: complete biochemical response (normal ALT and IgG) by 6 months.",
      "FDA 2024: elafibranor and seladelpar approved as second-line PBC therapy.",
      "EASL PBC Clinical Practice Guidelines 2025: earlier second-line therapy, aim for normal ALP.",
      "Obeticholic acid: EMA revoked 2024, withdrawn from US market 2025.",
      "AASLD and EASL PSC guidance 2022: imaging surveillance, yearly colonoscopy with IBD, no high-dose UDCA.",
    ],
    master: {
      heading: "Master revision table - AIH, PBC and PSC",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definitions", "**AIH** - interface hepatitis + IgG + autoantibodies; **PBC** - small duct destruction, AMA; **PSC** - large duct strictures, MRCP beading."],
        ["Who", "AIH women any age (F:M 4:1); PBC women 40-60 (90% female); PSC men 30-40, **60-80% have UC**."],
        ["Pathogenesis", "AIH - HLA-DR3/DR4, T cells, plasma cells; PBC - **PDC-E2** target, florid duct lesion; PSC - gut-liver axis, onion-skin fibrosis."],
        ["AIH types and score", "Type 1 ANA/ASMA; type 2 **anti-LKM1/LC1** (children); simplified IAIHG **6 probable, 7 definite**."],
        ["Clinical", "AIH - asymptomatic to fulminant, one-third cirrhotic; PBC - **fatigue, itch, xanthelasma**, sicca; PSC - raised ALP in UC, cholangitis."],
        ["Investigations", "AIH - IgG, autoantibodies, **biopsy**; PBC - **ALP + AMA**; PSC - **MRCP**, IgG4, colonoscopy."],
        ["AIH treatment", "**Prednisolone 0.5-1 mg/kg + azathioprine 1-2 mg/kg** (TPMT); budesonide 9 mg if no cirrhosis; MMF second line."],
        ["PBC treatment", "**UDCA 13-15 mg/kg** lifelong; 12-month response; add **elafibranor 80 mg / seladelpar 10 mg** / bezafibrate."],
        ["PSC treatment", "No proven drug; **no high-dose UDCA**; ERCP for dominant stricture with brushings; transplant."],
        ["Itch ladder", "Cholestyramine, **rifampicin**, naltrexone, sertraline; bezafibrate."],
        ["Complications", "AIH relapse 50-90% off drugs; PBC cirrhosis in non-responders; PSC **cholangiocarcinoma 10-20% lifetime**, colorectal cancer."],
        ["Monitoring", "Azathioprine CBC weekly x 4 then 3-monthly; PSC MRCP 6-12 monthly; **colonoscopy yearly** in PSC-IBD; DEXA."],
        ["Special groups", "Pregnancy - continue prednisolone/azathioprine, stop MMF; post-partum flare; TB and HBV screen before immunosuppression."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Approach to a suspected autoimmune liver disease",
        caption: "LFT pattern decides the path.",
        steps: [
          { label: "Raised LFTs - viral, alcohol, drugs, ultrasound", detail: "Exclude HBV, HCV, Wilson, DILI, obstruction" },
          { label: "Hepatitic or cholestatic pattern?", tone: "decision", detail: "ALT-dominant vs ALP/GGT-dominant" },
          { label: "Hepatitic: IgG, ANA, ASMA, anti-LKM1, SLA", detail: "Biopsy; simplified IAIHG score 7 or more = definite AIH" },
          { label: "Cholestatic: AMA", detail: "AMA positive + ALP 1.5 x ULN or more = PBC" },
          { label: "AMA negative: MRCP and IgG4", detail: "Beaded ducts = PSC; high IgG4 = IgG4-SC" },
          { label: "PSC: colonoscopy at diagnosis", detail: "IBD in 60-80%", tone: "warn" },
          { label: "Treat and monitor", detail: "Steroid + azathioprine / UDCA / surveillance", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "PBC treatment ladder",
        caption: "Assess response at 12 months.",
        steps: [
          { label: "UDCA 13-15 mg/kg/day lifelong", detail: "First line for all" },
          { label: "Response check at 12 months", detail: "ALP over 1.67 x ULN or raised bilirubin = inadequate", tone: "decision" },
          { label: "Add PPAR agonist", detail: "Elafibranor 80 mg OD, seladelpar 10 mg OD, or bezafibrate 400 mg" },
          { label: "Itch ladder", detail: "Cholestyramine, rifampicin, naltrexone, sertraline" },
          { label: "Liver transplant", detail: "Decompensation, bilirubin rising, intractable itch", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "AIH vs PBC vs PSC",
        columns: ["Feature", "AIH", "PBC", "PSC"],
        rows: [
          ["Patient", "Woman, any age", "Woman 40-60", "Man 30-40 with UC"],
          ["Pattern", "Hepatitic", "Cholestatic", "Cholestatic"],
          ["Marker", "IgG, ANA/ASMA, LKM1", "AMA, IgM", "MRCP beading"],
          ["Treatment", "Prednisolone + azathioprine", "UDCA, PPAR agonist", "None proven; ERCP"],
          ["Cancer", "HCC in cirrhosis", "HCC in cirrhosis", "Cholangiocarcinoma, colon"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**AIH**: hepatitis with raised IgG, autoantibodies and interface hepatitis.",
            "**PBC**: autoimmune destruction of small bile ducts, mainly in women aged 40-60.",
            "**PSC**: strictures of large bile ducts, mostly men, often with **ulcerative colitis**.",
            "AIH is female-predominant (**4:1**); PBC is 90% female.",
            "PBC was renamed from primary biliary cirrhosis in 2015.",
          ],
        },
        {
          title: "Causes and pathophysiology",
          points: [
            "AIH links to **HLA-DR3 and DR4**; drugs like nitrofurantoin and minocycline can mimic it.",
            "AIH histology: **interface hepatitis, plasma cells, rosettes, emperipolesis**.",
            "PBC targets **PDC-E2** on bile duct cells.",
            "PSC reflects the **gut-liver axis**, explaining the link with colitis.",
            "Cholestasis causes **itch, fatigue and fat-soluble vitamin deficiency**.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Type 1 AIH**: ANA and ASMA, adults.",
            "**Type 2 AIH**: anti-LKM1 and anti-LC1, children.",
            "Simplified IAIHG score: **6 probable, 7 or more definite**.",
            "PSC: large-duct, **small-duct**, and overlap with AIH.",
            "AIH-PBC overlap uses the **Paris criteria**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "AIH ranges from **raised ALT** to acute liver failure; one-third are cirrhotic at diagnosis.",
            "PBC: **fatigue and itch**, xanthelasma, dry eyes and mouth.",
            "PSC: raised ALP in a UC patient, or **fever, rigors and jaundice** of cholangitis.",
            "Ask about drugs, alcohol and other autoimmune diseases.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "AIH: **IgG**, ANA, ASMA, anti-LKM1, anti-SLA, and **liver biopsy**.",
            "PBC: **ALP and AMA**; AMA positive in about 95%.",
            "PSC: **MRCP** shows beaded ducts; check **IgG4** and do a colonoscopy.",
            "Check **TPMT** before azathioprine.",
            "Screen HBV, HCV and latent TB before immunosuppression.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "AIH: **prednisolone 0.5-1 mg/kg**, add azathioprine from week 2.",
            "Azathioprine target **1-2 mg/kg/day**, maintenance at least 3 years.",
            "**Budesonide 9 mg/day** only in non-cirrhotic AIH.",
            "PBC: **UDCA 13-15 mg/kg/day** for life.",
            "PSC: no proven drug; **avoid high-dose UDCA**.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "AIH second line: **mycophenolate**, tacrolimus.",
            "PBC poor response: add **elafibranor or seladelpar** (2024) or bezafibrate.",
            "Itch: cholestyramine, then **rifampicin**, naltrexone, sertraline.",
            "PSC dominant stricture: **ERCP with brushings** and dilatation.",
            "Liver transplant for end-stage disease or acute severe AIH failing steroids.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Pregnancy: continue **prednisolone and azathioprine**; stop mycophenolate.",
            "Watch for **post-partum AIH flare**.",
            "UDCA is considered safe in pregnancy.",
            "Steroids worsen diabetes; prefer budesonide if no cirrhosis.",
          ],
        },
        {
          title: "Complications and follow-up",
          points: [
            "AIH relapses in **50-90%** after stopping drugs.",
            "PSC: **cholangiocarcinoma 10-20%** lifetime; imaging every 6-12 months.",
            "PSC with IBD: **colonoscopy every year**.",
            "Gallbladder polyp **8 mm or more** in PSC needs cholecystectomy.",
            "Azathioprine: CBC weekly for 4 weeks, then every 3 months.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**EASL AIH 2025**: aim for normal ALT and IgG by 6 months.",
            "**Elafibranor and seladelpar** approved for PBC in 2024.",
            "**Obeticholic acid** withdrawn in Europe 2024 and USA 2025.",
            "**EASL PBC 2025**: aim for normal ALP, earlier second-line drugs.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in AIH, PBC and PSC",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Prednisolone", "0.5-1 mg/kg/day orally, taper to 5-10 mg", "Induction, then taper", "Diabetes, bone loss, infection"],
            ["Azathioprine", "50 mg, up to 1-2 mg/kg/day orally", "At least 3 years", "Myelosuppression (TPMT), pancreatitis"],
            ["Budesonide", "3 mg orally three times daily", "Induction", "Not in cirrhosis"],
            ["Ursodeoxycholic acid", "13-15 mg/kg/day orally", "Lifelong (PBC)", "Harmful at 28-30 mg/kg in PSC"],
            ["Elafibranor / seladelpar", "80 mg / 10 mg orally once daily", "Long-term with UDCA", "Myalgia; avoid in pregnancy"],
            ["Rifampicin (itch)", "150-300 mg/day orally", "As needed", "Hepatotoxicity, orange urine"],
          ],
        },
        {
          heading: "AIH vs PBC vs PSC",
          columns: ["Feature", "AIH", "PBC", "PSC"],
          rows: [
            ["LFT pattern", "Hepatitic", "Cholestatic", "Cholestatic"],
            ["Antibody", "ANA, ASMA, LKM1", "AMA", "p-ANCA (non-specific)"],
            ["Immunoglobulin", "IgG", "IgM", "Normal IgG4"],
            ["Key test", "Biopsy", "AMA", "MRCP"],
          ],
        },
        {
          heading: "Simplified IAIHG score",
          columns: ["Variable", "1 point", "2 points"],
          rows: [
            ["ANA/ASMA", "1:40", "1:80 or more (or LKM1, SLA)"],
            ["IgG", "Above ULN", "Above 1.1 x ULN"],
            ["Histology", "Compatible", "Typical"],
            ["No viral hepatitis", "-", "Yes"],
          ],
        },
      ],
      remember: [
        "**AIH = IgG; PBC = IgM and AMA; PSC = MRCP and UC.**",
        "**6 probable, 7 definite** on the simplified score.",
        "**Budesonide never in cirrhosis.**",
        "**TPMT before azathioprine.**",
        "**Never high-dose UDCA in PSC.**",
        "Every PSC gets a colonoscopy; every UC with raised ALP gets an MRCP.",
        "IgG4 cholangitis responds to steroids; PSC does not.",
      ],
    },
  },
  "gastro-hepatology-wilson-haemochromatosis": {
    checked: "2026-10",
    updated: [
      "AASLD Wilson Practice Guidance 2022: urine copper over 40 ug/day suspicious; New Wilson Index for transplant.",
      "EASL-ERN Wilson Clinical Practice Guidelines 2025: relative exchangeable copper; trientine as alternative first line.",
      "EASL Haemochromatosis Clinical Practice Guidelines 2022: C282Y homozygosity plus raised TSAT and ferritin; ferritin target 50-100 ug/L.",
      "GOLD 2025: test every COPD patient once for alpha-1 antitrypsin deficiency.",
    ],
    master: {
      heading: "Master revision table - Wilson, haemochromatosis, AATD",
      columns: ["Heading", "What to write"],
      rows: [
        ["Wilson - definition", "Autosomal recessive **ATP7B (chr 13)** defect; copper not excreted in bile; 1 in 30,000."],
        ["Wilson - clinical", "Hepatic (5-35 y) incl. **ALF with Coombs-negative haemolysis**; neuro - tremor, dystonia, dysarthria; **KF ring**."],
        ["Wilson - tests", "**Ceruloplasmin under 20 mg/dL**, 24-h urine copper over 100 ug (40 suspicious), liver copper over 250 ug/g, ATP7B; **Leipzig 4 or more**."],
        ["Wilson ALF", "**ALP:bilirubin under 4, AST:ALT over 2.2**; New Wilson Index 11 or more = transplant."],
        ["Wilson - treatment", "**Penicillamine 750-1500 mg + pyridoxine**, trientine, **zinc 50 mg TDS**; lifelong; continue in pregnancy."],
        ["Wilson - monitoring", "Urine copper **200-500 ug on chelator, under 75 on zinc**; LFT, CBC, urine protein."],
        ["HH - definition", "**HFE C282Y**, low hepcidin, iron overload; rare in Indians - secondary overload (thalassaemia) commoner."],
        ["HH - clinical", "Fatigue, **2nd/3rd MCP arthropathy**, bronze diabetes, cardiomyopathy, hypogonadism, cirrhosis, HCC."],
        ["HH - tests", "Fasting **TSAT over 45%**, ferritin over 200 (F)/300 (M), HFE genotype; ferritin over 1000 = fibrosis staging."],
        ["HH - treatment", "**Venesection 500 mL weekly** to ferritin 50-100, then maintenance; no iron/vitamin C; chelators for transfusional overload."],
        ["AATD", "**SERPINA1 PiZZ**, codominant; neonatal cholestasis, cirrhosis, **basal panacinar emphysema**; PAS-positive globules."],
        ["AATD - treatment", "**Stop smoking**, vaccinate, augmentation 60 mg/kg IV weekly for lung; transplant for liver."],
        ["Family screening", "Wilson siblings (25% risk), HH first-degree relatives, AATD relatives and every COPD patient."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Suspected Wilson disease - work-up",
        caption: "Think Wilson in anyone under 40 with unexplained liver disease.",
        steps: [
          { label: "Unexplained liver disease, haemolysis or movement disorder", detail: "Age usually 5-35 years" },
          { label: "Ceruloplasmin, 24-h urine copper, slit lamp, Coombs", detail: "Ceruloplasmin under 20 mg/dL; urine copper over 40-100 ug" },
          { label: "Calculate Leipzig score", detail: "4 or more = established; 3 = probable", tone: "decision" },
          { label: "Doubtful: liver copper or ATP7B genetics", detail: "Liver copper over 250 ug/g; two mutations score 4" },
          { label: "ALF pattern? Transfer for transplant", detail: "ALP:bilirubin under 4, AST:ALT over 2.2", tone: "warn" },
          { label: "Lifelong chelator or zinc; screen siblings", detail: "Penicillamine with pyridoxine, trientine, zinc", tone: "good" },
        ],
      },
      {
        kind: "flow",
        heading: "Raised ferritin - is it haemochromatosis?",
        caption: "TSAT is the gatekeeper.",
        steps: [
          { label: "Raised ferritin", detail: "Exclude inflammation, MASLD, alcohol, CKD, malignancy" },
          { label: "Fasting transferrin saturation", detail: "Over 45% = possible iron overload", tone: "decision" },
          { label: "HFE genotype", detail: "C282Y homozygous = HH; else MRI liver iron, non-HFE genes" },
          { label: "Ferritin over 1000 or raised ALT", detail: "Stage fibrosis: elastography or biopsy", tone: "warn" },
          { label: "Venesection to ferritin 50-100 ug/L", detail: "Then maintenance; HCC surveillance if cirrhotic", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "Wilson vs HH vs AATD",
        columns: ["Feature", "Wilson", "Haemochromatosis", "AATD"],
        rows: [
          ["Gene", "ATP7B (chr 13)", "HFE (chr 6)", "SERPINA1 (chr 14)"],
          ["Problem", "Copper excess", "Iron excess", "Misfolded Z protein"],
          ["Age", "5-35 years", "40-60 years", "Neonate or adult"],
          ["Extra organs", "Brain, eye, RBC, kidney", "Pancreas, heart, joints, gonads", "Lung, skin"],
          ["Treatment", "Chelation, zinc", "Venesection", "Stop smoking, augmentation"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Wilson disease**: autosomal recessive **ATP7B** defect causing copper overload; about 1 in 30,000.",
            "**Haemochromatosis**: iron overload from low **hepcidin**, usually HFE C282Y homozygous.",
            "HH is rare in Indians; **secondary iron overload** from thalassaemia is commoner.",
            "**AATD**: SERPINA1 PiZZ, codominant; causes liver disease and emphysema.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Copper cannot reach bile or ceruloplasmin, so **ceruloplasmin is low**.",
            "Copper spills to **basal ganglia, cornea (KF ring), kidney and red cells**.",
            "Low hepcidin lets **ferroportin** export iron freely into blood.",
            "Z-AAT polymers stay in the liver; low blood AAT leaves lungs unprotected.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Wilson liver disease peaks at **5-35 years**; may be acute liver failure with haemolysis.",
            "Wilson neuro signs: **tremor, dystonia, dysarthria, drooling**, psychiatric change.",
            "**KF ring** in 95% of neuro and about half of hepatic Wilson.",
            "HH: fatigue, **2nd and 3rd MCP arthritis**, bronze diabetes, cardiomyopathy.",
            "AATD: neonatal jaundice, **basal emphysema** in young non-smokers, cirrhosis.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Wilson: **ceruloplasmin under 20 mg/dL**, 24-h urine copper over 100 ug, slit lamp.",
            "Liver copper **over 250 ug/g** and ATP7B mutations confirm.",
            "**Leipzig score 4 or more** establishes Wilson.",
            "HH: fasting **TSAT over 45%**, raised ferritin, then HFE genotype.",
            "AATD: low serum AAT, then **Pi phenotype or genotype**.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Penicillamine** 750-1500 mg/day in divided doses with **pyridoxine**.",
            "**Trientine** if penicillamine not tolerated or for neuro disease.",
            "**Zinc 50 mg TDS** for maintenance and presymptomatic siblings.",
            "HH: **venesection 500 mL weekly** until ferritin 50-100 ug/L.",
            "AATD: **stop smoking**, vaccinate, treat COPD.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Wilson ALF: **liver transplant**; plasma exchange as a bridge.",
            "Neuro worsening on penicillamine: reduce dose or switch to trientine or zinc.",
            "Transfusional overload: **deferasirox, deferiprone or desferrioxamine**.",
            "AATD emphysema: **IV augmentation 60 mg/kg weekly** where available.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Wilson pregnancy: **never stop**; cut chelator 25-50% in the last trimester.",
            "Presymptomatic Wilson children: usually **zinc**.",
            "Women with HH present later because of menstrual iron loss.",
            "HbA1c is falsely low during venesection.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "Stopping Wilson drugs can cause **fulminant liver failure**.",
            "Penicillamine: rash, **proteinuria**, lupus-like illness, marrow suppression.",
            "HH cirrhosis carries about **20-fold HCC risk**.",
            "Venesection does not reverse arthropathy or hypogonadism.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Wilson: urine copper **200-500 ug on chelator, under 75 on zinc**.",
            "HH: Hb before each venesection; ferritin every 4-12 sessions.",
            "Cirrhosis from any cause: **ultrasound every 6 months**.",
            "Screen **siblings** (Wilson) and first-degree relatives (HH, AATD).",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AASLD 2022**: urine copper over 40 ug/day is suspicious.",
            "**EASL-ERN 2025**: relative exchangeable copper; trientine as alternative first line.",
            "**EASL 2022 HH**: ferritin target 50-100 ug/L.",
            "**GOLD 2025**: test every COPD patient once for AATD.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs for Wilson disease and iron overload",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Penicillamine", "750-1500 mg/day orally in 2-4 doses, with pyridoxine", "Lifelong", "Rash, proteinuria, lupus-like, neuro worsening"],
            ["Trientine", "900-1500 mg/day orally in 2-3 doses", "Lifelong", "Better tolerated; sideroblastic anaemia"],
            ["Zinc acetate", "50 mg elemental TDS orally, away from food", "Lifelong", "Gastric upset, raised lipase"],
            ["Venesection", "500 mL weekly; Hb 12 g/dL or more", "To ferritin 50-100, then maintenance", "Hypotension, fatigue"],
            ["Deferasirox", "14-28 mg/kg/day orally", "Long-term", "Renal and liver toxicity"],
            ["Deferiprone", "75-100 mg/kg/day in 3 doses", "Long-term", "Agranulocytosis - weekly ANC"],
          ],
        },
        {
          heading: "Leipzig score (key items)",
          columns: ["Item", "Finding", "Points"],
          rows: [
            ["KF ring", "Present", "2"],
            ["Ceruloplasmin", "0.1-0.2 / under 0.1 g/L", "1 / 2"],
            ["Urine copper", "1-2 x / over 2 x ULN", "1 / 2"],
            ["Liver copper", "Over 250 ug/g", "2"],
            ["ATP7B mutations", "One / two", "1 / 4"],
            ["Total", "4 or more", "Diagnosis established"],
          ],
        },
        {
          heading: "Wilson vs haemochromatosis",
          columns: ["Feature", "Wilson", "Haemochromatosis"],
          rows: [
            ["Metal", "Copper", "Iron"],
            ["Age", "5-35 years", "40-60 years"],
            ["Screening test", "Ceruloplasmin, urine copper", "Fasting TSAT"],
            ["Treatment", "Chelator or zinc", "Venesection"],
          ],
        },
      ],
      remember: [
        "**Under 40 with liver disease plus movement disorder = Wilson.**",
        "**Leipzig 4 or more** establishes Wilson.",
        "Wilson ALF: **low ALP, AST over ALT, Coombs-negative haemolysis**.",
        "**Penicillamine with pyridoxine**; never stop, even in pregnancy.",
        "**TSAT over 45%** is the HH gatekeeper, not ferritin.",
        "**Iron fist**: 2nd and 3rd MCP arthropathy in HH.",
        "AATD: **augmentation helps lungs, not liver**.",
      ],
    },
  },
  "gastro-hepatology-acute-liver-failure": {
    checked: "2026-10",
    updated: [
      "EASL ACLF Clinical Practice Guidelines 2023: CLIF-C grades, transplant in ACLF-3, futility at day 3-7.",
      "ACG ACLF Clinical Guideline 2022: APASL, EASL-CLIF and NACSELD definitions compared.",
      "APASL-AARC 2019 remains the Asian ACLF standard; G-CSF not supported by later trials.",
      "INASL ALF consensus 2019: Indian aetiology and the ALFED model.",
      "UK 2-bag (SNAP) NAC regimen 2024 with fewer anaphylactoid reactions.",
    ],
    master: {
      heading: "Master revision table - ALF and ACLF",
      columns: ["Heading", "What to write"],
      rows: [
        ["ALF definition", "**INR 1.5 or more + any encephalopathy**, no prior liver disease, **under 26 weeks**."],
        ["O'Grady", "**Hyperacute under 7 days** (most oedema, best survival), acute 8-28 days, subacute 5-26 weeks (worst)."],
        ["Causes - India", "**HEV** (pregnancy), HBV, HAV (children), **ATT DILI**, yellow phosphorus, herbals; West - paracetamol."],
        ["Pathophysiology", "Ammonia to **glutamine in astrocytes** - cerebral oedema; SIRS, AKI, sepsis, hypoglycaemia."],
        ["Work-up", "INR, glucose 2-hourly, ABG/lactate, **ammonia**, creatinine; viral markers, paracetamol level, copper, autoantibodies, Doppler."],
        ["King's - paracetamol", "**pH under 7.3** (or lactate over 3) after fluids, or INR over 6.5 + creatinine over 3.4 + HE III-IV."],
        ["King's - non-paracetamol", "**INR over 6.5**, or 3 of: age under 10/over 40, drug/indeterminate, jaundice-HE over 7 days, INR over 3.5, bilirubin over 17.5."],
        ["ICU care", "Intubate HE III-IV, head-up 30, **NAC**, **Na 145-155**, mannitol for surges, CRRT, MAP 65, no routine FFP."],
        ["Specific", "Tenofovir (HBV), acyclovir (HSV), steroids (AIH), delivery (AFLP/HELLP), plasma exchange, transplant."],
        ["ACLF - APASL", "**Bilirubin 5 + INR 1.5 + ascites/HE within 4 weeks** on chronic liver disease; AARC grades; 7-day golden window."],
        ["ACLF - EASL-CLIF", "Cirrhosis + organ failures; **ACLF-1/2/3: about 22/32/77%** 28-day mortality."],
        ["ACLF treatment", "Treat precipitant (infection, alcoholic hepatitis, HBV flare), organ support, **early transplant evaluation**."],
        ["Prevention", "Safe water, HAV/HBV vaccines, ATT LFT monitoring, paracetamol limits, rat-poison safety, alcohol cessation."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Acute liver failure - first contact to transplant decision",
        caption: "Recognise early, transfer before grade III.",
        steps: [
          { label: "Acute jaundice with INR 1.5+ or any confusion", detail: "Admit same day; stop hepatotoxic drugs", tone: "warn" },
          { label: "Glucose, ABG/lactate, ammonia, creatinine", detail: "Glucose 2-hourly; IV dextrose if under 70 mg/dL" },
          { label: "Aetiology screen and start NAC", detail: "HEV, HAV, HBV, HSV, paracetamol, copper, autoimmune; Doppler" },
          { label: "Contact transplant centre", detail: "Before grade III encephalopathy", tone: "decision" },
          { label: "ICU bundle", detail: "Intubate HE III-IV, head-up 30, Na 145-155, MAP 65, CRRT" },
          { label: "King's or ALFED criteria met?", detail: "INR over 6.5 or pH under 7.3 (paracetamol)", tone: "decision" },
          { label: "Liver transplant or recovery", detail: "Plasma exchange as bridge", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Cerebral oedema ladder in ALF",
        caption: "Ammonia over 150 or HE grade III-IV.",
        steps: [
          { label: "General measures", detail: "Head-up 30 degrees, neck neutral, avoid fever, hypercapnia, hypotonic fluids" },
          { label: "Intubate and sedate lightly", detail: "Propofol; avoid benzodiazepines" },
          { label: "Hypertonic saline", detail: "Target serum sodium 145-155 mmol/L" },
          { label: "Early CRRT", detail: "Lowers ammonia and controls temperature" },
          { label: "ICP surge: mannitol 0.5-1 g/kg", detail: "If osmolality under 320; brief hyperventilation", tone: "warn" },
          { label: "Urgent transplant", detail: "Definitive treatment", tone: "good" },
        ],
      },
      {
        kind: "compare",
        heading: "ALF vs ACLF",
        columns: ["Feature", "ALF", "ACLF (APASL)", "ACLF (EASL-CLIF)"],
        rows: [
          ["Background liver", "Normal", "Chronic liver disease or cirrhosis", "Cirrhosis"],
          ["Defining criteria", "INR 1.5 + HE, under 26 weeks", "Bilirubin 5 + INR 1.5 + ascites/HE in 4 weeks", "Organ failures"],
          ["Common causes", "HEV, HBV, ATT, paracetamol", "Alcohol, HBV flare, HEV, DILI", "Infection, alcohol, bleed"],
          ["Main killer", "Cerebral oedema, sepsis", "Liver failure, sepsis", "Multi-organ failure"],
          ["Score", "King's, ALFED", "AARC", "CLIF-C ACLF"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**ALF**: INR 1.5 or more with encephalopathy, no prior liver disease, under **26 weeks**.",
            "**Hyperacute** (under 7 days) has most cerebral oedema but best survival.",
            "**ACLF (APASL)**: bilirubin 5, INR 1.5, then ascites or HE within **4 weeks**.",
            "**ACLF (EASL-CLIF)**: cirrhosis with acute decompensation and **organ failure**.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "India: **hepatitis E** commonest, then HBV, HAV in children, anti-TB drugs.",
            "**Yellow phosphorus** rat poison is important in south India.",
            "West: **paracetamol** causes about half of ALF.",
            "ACLF triggers: **alcohol, HBV flare, HEV, herbals, infection, bleeding**.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Astrocytes turn ammonia into **glutamine**, swell, and raise intracranial pressure.",
            "**Ammonia over 150-200 umol/L** predicts herniation.",
            "Systemic inflammation causes vasodilatation, **AKI and infection**.",
            "High INR does not mean high bleeding risk: haemostasis is **rebalanced**.",
          ],
        },
        {
          title: "Clinical features and examination",
          points: [
            "Jaundice, then **confusion**; a shrinking liver is a bad sign.",
            "Grade encephalopathy by **West Haven I-IV**.",
            "Raised ICP: **hypertension with bradycardia**, sluggish pupils, posturing.",
            "Stigmata of cirrhosis point to **ACLF**, not ALF.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "INR, **glucose 2-hourly**, ABG, lactate, ammonia, creatinine.",
            "Viral markers, paracetamol level, **copper studies**, autoantibodies, pregnancy test.",
            "Doppler ultrasound for Budd-Chiari and cirrhosis.",
            "Cultures and ascitic tap for infection in ACLF.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**King's paracetamol**: pH under 7.3, or INR over 6.5 + creatinine over 3.4 + HE III-IV.",
            "**King's non-paracetamol**: INR over 6.5, or 3 of 5 criteria.",
            "**ALFED** (India): ammonia, bilirubin, INR, HE grade.",
            "**EASL-CLIF**: ACLF-1, 2, 3 with about 22%, 32%, 77% mortality.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Admit to ICU; **intubate at grade III-IV**; head-up 30 degrees.",
            "Give **IV NAC** in paracetamol and early non-paracetamol ALF.",
            "Keep **sodium 145-155** with hypertonic saline; mannitol for surges.",
            "Noradrenaline for MAP 65; **FFP only for bleeding**.",
            "No sedatives, **no lactulose** in ALF.",
          ],
        },
        {
          title: "Treatment - next steps",
          points: [
            "Specific: **tenofovir** for HBV, acyclovir for HSV, steroids for AIH.",
            "Deliver the baby in **AFLP or HELLP**.",
            "**Plasma exchange** as a bridge; transplant if King's criteria met.",
            "ACLF: treat infection, alcoholic hepatitis, HBV flare; **early transplant evaluation**.",
          ],
        },
        {
          title: "Special groups and prevention",
          points: [
            "**HEV in pregnancy**: high maternal mortality in the third trimester.",
            "ATT liver failure: switch to **streptomycin, ethambutol, levofloxacin**.",
            "Prevention: safe water, **HAV and HBV vaccines**, paracetamol limits.",
            "Never stop **HBV antivirals** without advice.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**EASL ACLF 2023**: consider transplant in ACLF-3; reassess at day 3-7.",
            "**ACG ACLF 2022** compares APASL, EASL-CLIF and NACSELD definitions.",
            "**SNAP 2-bag NAC** reduces anaphylactoid reactions.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in ALF and ACLF",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["N-acetylcysteine", "150 mg/kg over 1 h, 50 mg/kg over 4 h, 100 mg/kg over 16 h IV", "Until INR improves", "Anaphylactoid reaction"],
            ["Hypertonic saline", "Infusion to sodium 145-155 mmol/L", "While ICP risk persists", "Hypernatraemia over 160"],
            ["Mannitol 20%", "0.5-1 g/kg IV bolus", "Repeat if osmolality under 320", "Volume overload in AKI"],
            ["Noradrenaline", "0.05-1 ug/kg/min IV", "Titrate to MAP 65", "Arrhythmia, ischaemia"],
            ["Tenofovir", "300 mg orally daily", "Indefinite", "Renal dose adjustment"],
            ["Acyclovir", "10 mg/kg IV 8-hourly", "14-21 days", "Nephrotoxicity"],
          ],
        },
        {
          heading: "King's College criteria",
          columns: ["Paracetamol ALF", "Non-paracetamol ALF"],
          rows: [
            ["pH under 7.3 (or lactate over 3) after fluids", "INR over 6.5 alone"],
            ["Or INR over 6.5 + creatinine over 3.4 + HE III-IV", "Or 3 of: age under 10/over 40, drug or indeterminate cause"],
            ["-", "Jaundice to HE over 7 days, INR over 3.5, bilirubin over 17.5"],
          ],
        },
        {
          heading: "ACLF definitions",
          columns: ["Feature", "APASL-AARC", "EASL-CLIF"],
          rows: [
            ["Background", "Chronic liver disease or cirrhosis", "Cirrhosis"],
            ["Insult", "Hepatic only", "Hepatic or extrahepatic"],
            ["Criteria", "Bilirubin 5, INR 1.5, ascites/HE in 4 weeks", "Organ failures (CLIF-C OF)"],
            ["Grades", "AARC I-III", "ACLF-1 to 3"],
          ],
        },
      ],
      remember: [
        "**ALF = INR 1.5 + HE + no prior liver disease + under 26 weeks.**",
        "**India HEV, West paracetamol.**",
        "King's: **pH under 7.3** (paracetamol); **INR over 6.5** (non-paracetamol).",
        "**NAC for all adult ALF** with early encephalopathy.",
        "**Sodium 145-155**; no sedatives, no lactulose, no routine FFP.",
        "**APASL 5-1.5-4**: bilirubin 5, INR 1.5, within 4 weeks.",
        "**ACLF-3 mortality about 77%**: think transplant.",
      ],
    },
  },
};

export default revision;
