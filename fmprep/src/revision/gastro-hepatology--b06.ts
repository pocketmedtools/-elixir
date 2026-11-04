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
};

export default revision;
