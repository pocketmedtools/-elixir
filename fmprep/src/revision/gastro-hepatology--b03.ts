import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "gastro-hepatology-chronic-diarrhoea-approach": {
    checked: "2026-10",
    updated: [
      "AGA microscopic colitis guideline 2022: budesonide first line for induction and maintenance; mesalamine and probiotics not advised.",
      "BSG/ACPGBI FIT guideline 2022: FIT 10 micrograms Hb/g or more prioritises colonoscopy in symptomatic patients.",
      "ACG coeliac guideline 2023: tTG-IgA with total IgA remains the first serological test in chronic diarrhoea.",
      "AGA 2019 functional diarrhoea guideline: calprotectin, Giardia testing and coeliac serology before labelling IBS-D.",
    ],
    master: {
      heading: "Chronic diarrhoea - the whole answer in one table",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Loose stools (Bristol 5-7), usually more frequent, for more than 4 weeks"],
        ["Mechanisms", "Osmotic, secretory, inflammatory, fatty (steatorrhoea)"],
        ["Indian causes to remember", "Giardia, amoebiasis, HIV-related parasites, intestinal TB, tropical sprue, coeliac (north India), IBD"],
        ["Common hidden causes", "Drugs (metformin, PPI, NSAID, SSRI, olmesartan, Mg), bile acid diarrhoea, microscopic colitis"],
        ["History", "Nocturnal stools, blood, weight loss, fever, drugs, surgery, diet, HIV risk"],
        ["Examination", "Weight, pallor, nutritional signs, thyroid, skin, abdominal mass, rectal examination"],
        ["First-line tests", "FBC, CRP, LFT, ferritin, B12, folate, TSH, tTG-IgA + total IgA, HIV, stool microscopy x 3"],
        ["Stool markers", "Calprotectin below 50 / 50-200 / above 200; elastase below 200; FIT 10 or more"],
        ["Endoscopy", "Ileocolonoscopy with 2 right + 2 left colonic biopsies; OGD with 4 duodenal biopsies"],
        ["Special tests", "SeHCAT or C4, breath tests, osmotic gap, laxative screen, gut hormones only if high-volume secretory"],
        ["Treatment", "Treat cause; cholestyramine for BAD; budesonide 9 mg for microscopic colitis; tinidazole for giardia"],
        ["Supportive", "ORS, micronutrients, loperamide only when colitis and infection excluded"],
        ["Refer urgently", "Age over 50 with change in habit, bleeding, anaemia, mass, weight loss, FIT positive"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Work-up of chronic diarrhoea",
        caption: "Confirm, screen for red flags, test, then target the endoscopy.",
        steps: [
          { label: "Confirm true diarrhoea over 4 weeks", detail: "Bristol 5-7; exclude incontinence and overflow" },
          { label: "Red flags?", detail: "Age over 50, bleeding, anaemia, weight loss, mass, FIT 10 or more", tone: "decision" },
          { label: "Yes: urgent colonoscopy", tone: "warn" },
          { label: "No: first-line bloods and stool tests", detail: "FBC, CRP, tTG-IgA, TSH, HIV, stool x 3, calprotectin, elastase" },
          { label: "Calprotectin above 200 or blood", detail: "Ileocolonoscopy with ileal and segmental biopsies", tone: "decision" },
          { label: "Normal tests but persistent watery stools", detail: "Colonic biopsies; SeHCAT or cholestyramine trial" },
          { label: "Specific diagnosis and treatment", tone: "good" },
        ],
      },
      {
        kind: "branch",
        heading: "Four mechanisms of chronic diarrhoea",
        root: "Chronic diarrhoea",
        arms: [
          { label: "Osmotic", steps: ["Stops on fasting", "Gap above 125", "Lactose, Mg, sorbitol"] },
          { label: "Secretory", steps: ["Continues on fasting", "Gap below 50", "BAD, microscopic colitis, VIPoma, laxatives"] },
          { label: "Inflammatory", tone: "warn", steps: ["Blood and mucus", "High calprotectin", "IBD, TB, amoeba, cancer"] },
          { label: "Fatty", steps: ["Pale greasy stools", "Low elastase or villous atrophy", "Pancreatic, coeliac, sprue, SIBO"] },
        ],
      },
      {
        kind: "compare",
        heading: "Small-bowel versus large-bowel diarrhoea",
        columns: ["Feature", "Small bowel", "Large bowel"],
        rows: [
          ["Volume", "Large", "Small, frequent"],
          ["Urgency, tenesmus", "Absent", "Present"],
          ["Blood and mucus", "Rare", "Common"],
          ["Weight loss, deficiencies", "Prominent", "Less prominent"],
          ["Examples", "Coeliac, giardia, sprue", "UC, amoebic colitis, cancer"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Chronic diarrhoea** means loose stools, Bristol 5-7, for **more than 4 weeks**.",
            "Persistent diarrhoea is 14-29 days; acute is under 14 days.",
            "Always confirm true diarrhoea and exclude **faecal incontinence** and overflow.",
            "**Bile acid diarrhoea** explains about a quarter to a third of IBS-D labels.",
            "**Microscopic colitis** causes about 10% of chronic watery diarrhoea, more in the elderly.",
          ],
        },
        {
          title: "Causes and risk factors",
          points: [
            "**Osmotic**: lactose, magnesium, lactulose, sorbitol; stops on fasting.",
            "**Secretory**: bile acids, microscopic colitis, drugs, laxatives, neuroendocrine tumours.",
            "**Inflammatory**: UC, Crohn disease, intestinal TB, amoebic colitis, CMV, cancer.",
            "**Fatty**: pancreatic insufficiency, coeliac, tropical sprue, giardia, SIBO, Whipple.",
            "In India always think of **giardia, TB, HIV and tropical sprue**.",
            "**Drugs**: metformin, PPIs, NSAIDs, SSRIs, olmesartan, colchicine, magnesium.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "**Osmotic gap** = 290 minus 2 x (stool Na + K).",
            "Gap **above 125 is osmotic**; gap **below 50 is secretory**.",
            "Measured stool osmolality below 290 means the sample was diluted.",
            "Ileal resection under 100 cm gives **bile acid diarrhoea**; over 100 cm gives **steatorrhoea**.",
            "Steatorrhoea appears only after **90% loss of pancreatic lipase**.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "**Nocturnal stools** suggest organic disease.",
            "Blood, mucus and tenesmus point to **colitis**.",
            "Pale, bulky, floating stools point to **steatorrhoea**.",
            "Weight loss and fever in India suggest **TB, HIV, lymphoma or IBD**.",
            "Always do a **rectal examination** and look for nutritional deficiency signs.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Bloods: FBC, CRP, LFT, ferritin, B12, folate, TSH, **tTG-IgA with total IgA**, HIV.",
            "Stool: microscopy three times, modified acid-fast stain, Giardia antigen.",
            "**Calprotectin**: below 50 normal, 50-200 repeat, above 200 colonoscopy.",
            "**Faecal elastase** below 200 suggests pancreatic insufficiency.",
            "Colonoscopy with **2 right and 2 left biopsies** even if mucosa looks normal.",
            "**SeHCAT** below 15% or high serum C4 confirms bile acid diarrhoea.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "**Treat the cause**: stop the drug, gluten-free diet, antiparasitic, ATT.",
            "**Giardia**: tinidazole 2 g single dose.",
            "**Bile acid diarrhoea**: cholestyramine 4 g daily, titrate to four times daily.",
            "**Microscopic colitis**: budesonide 9 mg daily for 6-8 weeks.",
            "**Loperamide** only after infection and colitis are excluded.",
            "Replace iron, B12, folate, vitamin D and electrolytes.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Admit for dehydration with AKI, **potassium below 3**, or severe colitis.",
            "IV fluids with potassium and magnesium; watch normal anion gap acidosis.",
            "Start feeding slowly in cachexia to avoid **refeeding syndrome**.",
            "A supervised **48-72 hour fast** separates osmotic from secretory diarrhoea.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "**Elderly**: microscopic colitis, overflow, drugs, ischaemia, cancer.",
            "**Diabetes**: metformin, autonomic neuropathy, SIBO, coeliac disease.",
            "**HIV**: cryptosporidium, cystoisospora, microsporidia, CMV; start ART.",
            "**Post-cholecystectomy**: usually bile acid diarrhoea; try cholestyramine.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Urgent colonoscopy for **age over 50 with change in habit**, anaemia, bleeding or FIT positive.",
            "Refer for calprotectin above 200, positive coeliac serology, or unexplained diarrhoea.",
            "Review **4-6 weeks** after any therapeutic trial.",
            "On cholestyramine, monitor fat-soluble vitamins and drug interactions.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**AGA 2022**: budesonide first line for microscopic colitis; not mesalamine.",
            "**BSG/ACPGBI 2022**: FIT 10 or more prioritises colonoscopy.",
            "**ACG 2023**: tTG-IgA with total IgA is the first coeliac test.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs in chronic diarrhoea",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Loperamide", "4 mg then 2 mg per loose stool; max 16 mg/day orally", "As needed", "Avoid in colitis, bloody diarrhoea"],
            ["Cholestyramine", "4 g orally once to four times daily", "Long term if effective", "Bloating; separate other drugs by 4 hours"],
            ["Budesonide", "9 mg orally once daily", "6-8 weeks then taper", "Bone loss and glucose on long-term use"],
            ["Tinidazole", "2 g orally single dose", "Once", "Metallic taste, alcohol reaction"],
            ["Pancreatin", "40,000-50,000 lipase units with meals", "Lifelong", "Take with food"],
          ],
        },
        {
          heading: "Four mechanisms",
          columns: ["Type", "Clue", "Test", "Example"],
          rows: [
            ["Osmotic", "Stops on fasting", "Gap above 125", "Lactase deficiency"],
            ["Secretory", "Persists on fasting", "Gap below 50", "Bile acid diarrhoea"],
            ["Inflammatory", "Blood, mucus", "High calprotectin", "UC, TB"],
            ["Fatty", "Greasy, floating", "Low elastase, faecal fat", "Pancreatic insufficiency"],
          ],
        },
        {
          heading: "Stool test cut-offs",
          columns: ["Test", "Normal", "Abnormal"],
          rows: [
            ["Calprotectin", "Below 50 micrograms/g", "Above 200 micrograms/g"],
            ["Elastase", "Above 200 micrograms/g", "Below 100 severe"],
            ["SeHCAT", "15% or more", "Below 15% (below 5% severe)"],
            ["FIT", "Below 10 micrograms Hb/g", "10 or more"],
          ],
        },
      ],
      remember: [
        "**Fasting test**: stops means osmotic, persists means secretory.",
        "**290 minus twice Na plus K**: above 125 osmotic, below 50 secretory.",
        "Normal colon still needs **biopsies** for microscopic colitis.",
        "**Under 100 cm** ileum lost: cholestyramine; over 100 cm: low-fat diet.",
        "Microscopic colitis: **older woman, PPI, normal colonoscopy, budesonide**.",
        "In India: **HIV test and three stool samples** for every chronic diarrhoea with weight loss.",
        "Never give **loperamide** in bloody diarrhoea.",
      ],
    },
  },
};

export default revision;
