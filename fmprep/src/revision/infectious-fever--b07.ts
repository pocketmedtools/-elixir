import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "infectious-fever-herpes-viruses": {
    checked: "2026-10",
    updated: [
      "ACIP 2022 (current): recombinant zoster vaccine for all adults 50 and over and immunocompromised adults 18 and over; licensed in India 2023.",
      "ECCI 2023 consensus (published 2024): valacyclovir 8 g/day for first-trimester primary maternal CMV; valganciclovir 6 months for moderate-severe congenital CMV.",
      "FDA 2023: letermovir approved for CMV prophylaxis in kidney transplant D+/R- (up to 200 days).",
      "WHO 2024: 846 million people aged 15-49 live with genital herpes.",
      "ZEDS 2024: suppressive valacyclovir in HZO eye disease reduced flares at 18 months; ophthalmologist decision.",
      "UKHSA 2023: varicella post-exposure prophylaxis with oral antivirals on days 7-14 rather than VZIG for most groups.",
    ],
    master: {
      heading: "Master revision table - Herpes viruses (HSV, VZV, EBV, CMV)",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "Eight **dsDNA herpesviruses** with **lifelong latency**: HSV/VZV in sensory ganglia, EBV in B cells, CMV in myeloid cells; disease = primary infection or **reactivation when T-cell immunity falls**."],
        ["Classification", "**Alpha** (HSV-1, HSV-2, VZV), **beta** (CMV, HHV-6, HHV-7), **gamma** (EBV, HHV-8); transplant CMV - infection versus CMV syndrome versus tissue-invasive disease."],
        ["Epidemiology", "HSV-1 64% under 50; genital herpes 846 million (WHO 2024); HSV-2 commonest genital ulcer in India; zoster lifetime risk 1 in 3; EBV and CMV over 90% of Indian adults."],
        ["Pathophysiology", "Retrograde axonal latency (LAT), reactivation down the nerve - dermatomal rash; IM = CD8 T-cell response (atypical lymphocytes) plus heterophile antibodies; acyclovir needs **viral thymidine kinase**."],
        ["HSV clinical", "Gingivostomatitis, labialis, **genital herpes** (painful grouped ulcers, nodes, retention), keratitis (dendritic ulcer), eczema herpeticum, **temporal-lobe encephalitis**, neonatal SEM/CNS/disseminated."],
        ["VZV clinical", "Varicella: pleomorphic centripetal crops; adult pneumonia. Zoster: prodromal pain, unilateral dermatomal vesicles; **Hutchinson sign** in HZO; Ramsay Hunt; zoster in young adult - test HIV."],
        ["EBV and CMV clinical", "IM: fever, exudative pharyngitis, posterior nodes, splenomegaly, amoxicillin rash; CMV mononucleosis heterophile-negative; transplant CMV 1-6 months; HIV retinitis CD4 under 50; congenital CMV."],
        ["Investigations", "Vesicle **PCR** over Tzanck; CSF HSV PCR (repeat if negative before 72 h); Monospot (false negative week 1); **VCA IgM+ EBNA-** = acute EBV; plasma CMV PCR (IU/mL); CMV IgG avidity in pregnancy; neonatal saliva/urine PCR **within 21 days**."],
        ["OPD treatment", "Genital first episode valacyclovir 1 g BD 7-10 days; recurrence 500 mg BD 3 days; suppression 500 mg OD; **zoster valacyclovir 1 g TDS or acyclovir 800 mg 5x/day x 7 days within 72 h**; IM supportive, no amoxicillin, no sport 3-4 weeks."],
        ["IPD treatment", "HSV encephalitis **acyclovir 10 mg/kg IV 8-hourly 14-21 days** started before imaging; disseminated VZV same; CMV disease ganciclovir 5 mg/kg IV 12-hourly or valganciclovir 900 mg BD; resistant - foscarnet or maribavir."],
        ["Special groups", "Pregnancy: varicella - acyclovir within 24 h; primary genital HSV near term - caesarean; congenital CMV valganciclovir 16 mg/kg BD x 6 months; transplant D+/R- prophylaxis 6 months; renal dosing in CKD."],
        ["Complications", "**PHN** (pain 90 days after rash, 10-18%), HZO eye disease, VZV vasculopathy and stroke, splenic rupture in IM, EBV-HLH and lymphoma, post-HSV anti-NMDAR encephalitis, congenital CMV hearing loss."],
        ["Prevention", "**RZV 2 doses 2-6 months apart** from 50 years (18 if immunocompromised); varicella vaccine 2 doses (IAP); VZIG or antiviral PEP; HSV suppression and condoms; CMV hygiene in pregnancy."],
        ["Exam one-liners", "Zoster dose is double the HSV dose; Hutchinson sign = eye at risk; amoxicillin rash in IM is not allergy; congenital CMV needs PCR before day 21; letermovir has no HSV cover."],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Herpes zoster in the OPD",
        steps: [
          { label: "Unilateral dermatomal pain then grouped vesicles", detail: "Prodrome 2-5 days; does not cross midline" },
          { label: "Check V1, nasal tip, eye, ear and immune status", detail: "Hutchinson sign, red eye, facial palsy, HIV, steroids", tone: "decision" },
          { label: "HZO, disseminated or immunocompromised", detail: "Same-day ophthalmology; IV acyclovir 10 mg/kg 8-hourly if disseminated", tone: "warn" },
          { label: "Uncomplicated within 72 h (or new vesicles)", detail: "Valacyclovir 1 g TDS or acyclovir 800 mg 5x/day x 7 days" },
          { label: "Analgesia and early neuropathic agent", detail: "Paracetamol, NSAID, gabapentin or amitriptyline; renal dosing" },
          { label: "Review at 1 week and 4-6 weeks", detail: "Pain at 90 days = PHN" },
          { label: "Prevent recurrence with RZV", detail: "2 doses after the rash heals, age 50 and over", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Postherpetic neuralgia treatment ladder",
        steps: [
          { label: "Lidocaine 5% plaster for focal allodynia", detail: "Up to 3 plasters, 12 h on and 12 h off" },
          { label: "Pregabalin or gabapentin", detail: "Pregabalin 75 mg BD to 300 mg BD; gabapentin to 1800-3600 mg/day" },
          { label: "Amitriptyline or nortriptyline", detail: "10 mg at night to 25-75 mg; ECG if cardiac disease" },
          { label: "Capsaicin 8% patch or tramadol add-on", detail: "Watch serotonin syndrome with TCA", tone: "decision" },
          { label: "Pain clinic", detail: "Nerve blocks, combination therapy, treat depression", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "EBV mononucleosis versus CMV mononucleosis versus acute HIV",
        columns: ["Feature", "EBV IM", "CMV", "Acute HIV"],
        rows: [
          ["Pharyngitis and nodes", "Prominent, exudative, posterior nodes", "Minimal", "Mild, with mucosal ulcers"],
          ["Spleen", "Enlarged in about 50%", "Sometimes", "Uncommon"],
          ["Heterophile test", "Positive (85%)", "Negative", "Negative"],
          ["Confirm with", "VCA IgM+, EBNA-", "CMV IgM with low IgG avidity", "4th generation antigen/antibody or viral load"],
          ["Rash", "After amoxicillin", "Uncommon", "Maculopapular, common"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "Human herpesviruses are **dsDNA viruses** that stay **latent for life** after the first infection.",
            "**HSV and VZV** hide in sensory ganglia; **EBV** in B cells; **CMV** in myeloid cells.",
            "Disease is a primary illness or a **reactivation** when T-cell immunity falls.",
            "**HSV-2** is the commonest cause of genital ulcers in Indian STI clinics.",
            "Zoster lifetime risk is **1 in 3**, rising after 50 and in HIV.",
            "**Congenital CMV** is the leading non-genetic cause of childhood deafness.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "Virus travels up the sensory nerve, sleeps in the ganglion, and returns down it - hence **dermatomal** rash.",
            "**Acyclovir** is activated by viral thymidine kinase, so it only acts in infected cells.",
            "**Ganciclovir** needs the CMV UL97 kinase; **foscarnet** needs no activation.",
            "**Letermovir** blocks CMV terminase and does not cover HSV or VZV.",
            "IM signs come from a huge **CD8 T-cell response** - the atypical lymphocytes.",
          ],
        },
        {
          title: "Clinical features",
          points: [
            "Genital herpes: painful **grouped vesicles that ulcerate**, tender nodes, sometimes urinary retention.",
            "Varicella: itchy crops, **all stages together**, trunk heavier than limbs.",
            "Zoster: burning prodrome, then a **unilateral band** of vesicles not crossing the midline.",
            "**Hutchinson sign** (nasal tip vesicles) warns of eye involvement in HZO.",
            "IM: fever, exudative tonsils, **posterior nodes**, splenomegaly, palatal petechiae.",
            "HSV encephalitis: fever with **behaviour change, aphasia and focal seizures**.",
            "CMV hits transplant patients at **1-6 months** and HIV patients with CD4 under 50.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Swab an unroofed vesicle for **HSV/VZV PCR**; Tzanck cannot tell them apart.",
            "Monospot is falsely negative in **week 1** and in children under 4.",
            "**VCA IgM positive with EBNA negative** means acute EBV.",
            "CSF **HSV PCR** may be negative in the first 72 hours; repeat it.",
            "Track transplant CMV with **plasma CMV PCR** in IU/mL, not IgM.",
            "Congenital CMV needs **saliva or urine PCR within 21 days** of birth.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Zoster: **valacyclovir 1 g three times daily** for 7 days, within 72 hours.",
            "First genital herpes: **valacyclovir 1 g twice daily** or acyclovir 400 mg three times daily, 7-10 days.",
            "Suppression for 6 or more recurrences a year: **valacyclovir 500 mg daily**.",
            "Adult varicella within 24 hours: acyclovir 800 mg five times daily for 7 days.",
            "IM: rest and paracetamol, **no amoxicillin**, no contact sport for 3-4 weeks.",
            "Never give **aspirin** in varicella; avoid NSAIDs too.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "HSV encephalitis: **acyclovir 10 mg/kg IV 8-hourly** for 14-21 days, before the scan.",
            "Hydrate and **reduce the dose in CKD**; acyclovir toxicity mimics encephalitis.",
            "Disseminated zoster or varicella pneumonia: IV acyclovir 10 mg/kg 8-hourly.",
            "IM with stridor: **prednisolone** and ENT; LUQ pain with shock suggests splenic rupture.",
            "CMV disease: **ganciclovir 5 mg/kg IV 12-hourly** or valganciclovir 900 mg twice daily.",
            "Resistant CMV: genotype, then **foscarnet or maribavir**.",
          ],
        },
        {
          title: "Special groups",
          points: [
            "Varicella in pregnancy: **oral acyclovir within 24 hours** of rash; admit if chest symptoms.",
            "Maternal rash 5 days before to 2 days after birth: give the baby **VZIG**.",
            "Primary genital herpes near term: suppressive acyclovir from 36 weeks and **caesarean** if lesions.",
            "Symptomatic congenital CMV: **valganciclovir 16 mg/kg twice daily for 6 months**.",
            "Kidney D+/R-: **valganciclovir 900 mg daily for 6 months** or letermovir.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**PHN** is pain 90 days after the rash; age and severe acute pain raise risk.",
            "HZO can cause keratitis, uveitis, glaucoma and **acute retinal necrosis**.",
            "Zoster raises **stroke risk** for about 3 months (VZV vasculopathy).",
            "About **25%** of HSV encephalitis survivors develop anti-NMDAR encephalitis.",
            "IM can cause **splenic rupture**, airway obstruction, haemolysis and HLH.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer same day: encephalitis, **HZO with eye signs**, neonatal vesicles, pregnancy, immunosuppression.",
            "Review zoster at **4-6 weeks** to catch early PHN.",
            "Clear IM patients for sport only when the **spleen is impalpable**.",
            "Congenital CMV needs **hearing checks to 5-6 years**.",
            "Offer an **HIV test** for zoster in a young adult.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**RZV** for 50 and over, and 18 and over if immunocompromised; in India since 2023.",
            "**ECCI 2023**: valacyclovir 8 g/day for first-trimester primary CMV.",
            "**FDA 2023**: letermovir for kidney D+/R- CMV prophylaxis.",
            "**UKHSA 2023**: antiviral PEP days 7-14 after varicella exposure instead of VZIG.",
          ],
        },
      ],
      tables: [
        {
          heading: "Herpes antivirals at a glance",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Acyclovir (HSV)", "400 mg oral TDS (first episode); 400 mg BD suppression", "7-10 days; continuous", "Renal dosing; poor bioavailability"],
            ["Acyclovir (VZV)", "800 mg oral five times daily", "7 days", "Double the HSV dose"],
            ["Acyclovir IV", "10 mg/kg IV 8-hourly over 1 h", "14-21 days encephalitis", "Crystal nephropathy, neurotoxicity in CKD"],
            ["Valacyclovir", "1 g TDS zoster; 1 g BD first genital; 500 mg OD suppression", "7 days; 7-10 days; continuous", "Renal dosing"],
            ["Ganciclovir", "5 mg/kg IV 12-hourly", "At least 2 weeks, until PCR negative", "Neutropenia, teratogenic"],
            ["Valganciclovir", "900 mg BD treatment; 900 mg OD prophylaxis; 16 mg/kg BD neonate", "2-3 weeks; 3-6 months; 6 months", "Leucopenia; renal dosing"],
            ["Letermovir", "480 mg oral OD (240 mg with ciclosporin)", "To day 100-200", "No HSV/VZV cover; raises tacrolimus"],
            ["Foscarnet", "90 mg/kg IV 12-hourly", "Until resolution", "Nephrotoxic, low Ca/Mg/K"],
          ],
        },
        {
          heading: "Herpesvirus classification",
          columns: ["Virus", "Latency", "Primary disease", "Reactivation / association"],
          rows: [
            ["HSV-1", "Trigeminal ganglion", "Gingivostomatitis", "Cold sores, keratitis, encephalitis"],
            ["HSV-2", "Sacral ganglia", "Genital herpes", "Recurrent genital herpes, neonatal herpes"],
            ["VZV", "Dorsal root ganglia", "Varicella", "Zoster, HZO, Ramsay Hunt"],
            ["EBV", "B cells", "Infectious mononucleosis", "Burkitt, nasopharyngeal cancer, PTLD"],
            ["CMV", "Myeloid cells", "CMV mononucleosis, congenital CMV", "Transplant disease, HIV retinitis"],
          ],
        },
        {
          heading: "EBV serology interpretation",
          columns: ["Pattern", "Meaning"],
          rows: [
            ["VCA IgM positive, VCA IgG positive, EBNA negative", "Acute primary EBV"],
            ["VCA IgG positive, EBNA positive, VCA IgM negative", "Past infection"],
            ["All negative", "Susceptible; consider CMV, HIV, toxoplasma"],
            ["Heterophile negative in week 1", "Repeat or send VCA/EBNA"],
          ],
        },
      ],
      remember: [
        "**Zoster dose = double HSV dose**: acyclovir 800 mg five times daily.",
        "**Hutchinson sign** = nasociliary nerve = eye at risk.",
        "Varicella is **centripetal and pleomorphic**; mpox and smallpox are centrifugal and monomorphic.",
        "**Amoxicillin rash in IM** is not penicillin allergy.",
        "**D+/R-** is the worst CMV transplant pairing.",
        "Congenital CMV: **PCR before day 21** or it cannot be called congenital.",
        "Encephalitis: **acyclovir first, scan later**.",
      ],
    },
  },
};

export default revision;
