import type { NoteTable } from "../../lib/types";

const scores: Record<string, NoteTable[]> = {
  "infectious-fever-acute-undifferentiated-fever": [
    {
      heading: "SIRS criteria (ACCP/SCCM; SSC 2021 screening)",
      columns: ["Criterion", "Threshold", "Note"],
      rows: [
        ["Temperature", "Above 38 C or below 36 C", "Hypothermia carries a worse prognosis"],
        ["Heart rate", "Above 90 per minute", "Blunted by beta-blockers"],
        ["Respiration", "Rate above 20 per minute or PaCO2 below 32 mmHg", "Also counts in the IWGDF/IDSA severe foot infection"],
        ["White cell count", "Above 12,000 or below 4000/mm3, or more than 10 percent bands", "Leucopenia is a poor sign"],
        ["SIRS present", "2 or more of the 4 criteria", "Sensitive but not specific; sepsis is now defined by SOFA"],
      ],
    },
    {
      heading: "Modified Faine's criteria for leptospirosis (NCDC leptospirosis guideline)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["A - Headache", "Present", "2"],
        ["A - Fever", "Present", "2"],
        ["A - Temperature", "39 C or more", "2"],
        ["A - Conjunctival suffusion", "Bilateral", "4"],
        ["A - Meningism", "Present", "4"],
        ["A - Muscle pain", "Especially calf muscle", "4"],
        ["A - Triad", "Conjunctival suffusion, meningism and myalgia together", "10"],
        ["A - Jaundice", "Present", "1"],
        ["A - Renal", "Albuminuria or nitrogen retention", "2"],
        ["A - Lung", "Haemoptysis or dyspnoea", "2"],
        ["B - Rainfall", "Onset during rainy season or flooding", "5"],
        ["B - Environment", "Contact with contaminated water or soil", "4"],
        ["B - Animals", "Contact with animals (rats, cattle, dogs)", "1"],
        ["C - Rapid serology", "IgM ELISA, SAT, dipstick or lateral flow positive", "15"],
        ["C - MAT single sample", "Positive in high titre", "10"],
        ["C - MAT paired sera", "Rising titre or seroconversion", "20"],
      ],
    },
    {
      heading: "Modified Faine's criteria - interpretation",
      columns: ["Total", "Meaning", "Action"],
      rows: [
        ["A, or A plus B, 26 or more", "Presumptive leptospirosis", "Treat - doxycycline, or IV penicillin or ceftriaxone if severe"],
        ["A plus B plus C, 25 or more", "Presumptive leptospirosis", "Treat and notify"],
        ["20 to 25", "Possible leptospirosis, not confirmed", "Treat empirically in the monsoon; send serology"],
        ["Below 20", "Leptospirosis unlikely", "Look for other causes of acute febrile illness"],
      ],
    },
    {
      heading: "MASCC risk index for febrile neutropenia (ASCO/IDSA 2018)",
      columns: ["Component", "Finding", "Points"],
      rows: [
        ["Burden of illness", "No or mild symptoms", "5"],
        ["Burden of illness", "Moderate symptoms", "3"],
        ["Burden of illness", "Severe symptoms", "0"],
        ["Systolic BP", "Above 90 mmHg", "5"],
        ["Systolic BP", "90 mmHg or below", "0"],
        ["COPD", "Absent", "4"],
        ["COPD", "Present", "0"],
        ["Tumour type", "Solid tumour, or haematological cancer with no previous fungal infection", "4"],
        ["Tumour type", "Haematological cancer with previous fungal infection", "0"],
        ["Dehydration needing IV fluids", "Absent", "3"],
        ["Dehydration needing IV fluids", "Present", "0"],
        ["Status at onset of fever", "Outpatient", "3"],
        ["Status at onset of fever", "Inpatient", "0"],
        ["Age", "Below 60 years", "2"],
        ["Age", "60 years or more", "0"],
      ],
    },
    {
      heading: "MASCC score bands",
      columns: ["MASCC (max 26)", "Risk", "Action"],
      rows: [
        ["21 or more", "Low risk of serious complications", "Oral amoxicillin-clavulanate plus ciprofloxacin; outpatient if supported"],
        ["Below 21", "High risk", "Admit; IV anti-pseudomonal beta-lactam within 1 hour"],
      ],
    },
    {
      heading: "Types of fever pattern and their classic causes (Harrison 22e 2025)",
      columns: ["Pattern", "Description", "Classic causes"],
      rows: [
        ["Continuous (sustained)", "Raised all day, daily variation not more than 1 C", "Lobar pneumonia, typhoid in week 2, UTI"],
        ["Remittent", "Falls each day but never returns to normal", "Infective endocarditis, most viral and bacterial fevers"],
        ["Intermittent", "Present for some hours, returns to normal daily", "Malaria, pyogenic abscess, septicaemia"],
        ["Step-ladder", "Stepwise rise over the first week", "Enteric fever"],
        ["Double quotidian", "Two spikes in 24 hours", "Kala-azar, gonococcal arthritis, adult-onset Still disease"],
        ["Tertian", "Spike every 48 hours", "P. vivax, P. ovale malaria"],
        ["Quartan", "Spike every 72 hours", "P. malariae"],
        ["Relapsing", "Febrile days alternate with afebrile days", "Borrelia (relapsing fever), rat-bite fever"],
        ["Pel-Ebstein", "1 to 2 weeks of fever alternating with 1 to 2 weeks afebrile", "Hodgkin lymphoma"],
      ],
    },
  ],
  "infectious-fever-rabies-animal-bite": [
    {
      heading: "WHO classification of rabies exposure categories (WHO 2018; NRCP 2019)",
      columns: ["Category", "Type of contact", "Post-exposure prophylaxis"],
      rows: [
        ["Category I", "Touching or feeding animals, licks on intact skin", "No exposure - wash area; no PEP"],
        ["Category II", "Nibbling of uncovered skin, minor scratches or abrasions without bleeding", "Wound washing plus immediate vaccination; no RIG"],
        ["Category III", "Transdermal bites or scratches, licks on broken skin or mucosa, any bat contact", "Wound washing, vaccination and rabies immunoglobulin"],
      ],
    },
    {
      heading: "Types of rabies PEP regimen (WHO 2018; NRCP 2019)",
      columns: ["Regimen type", "Schedule", "Note"],
      rows: [
        ["IM Essen (5 dose)", "1 vial IM on days 0, 3, 7, 14 and 28", "Deltoid, or anterolateral thigh in children; never gluteal"],
        ["IM 4-dose (WHO 2018)", "1 vial IM on days 0, 3, 7 and one between days 14 and 28", "For healthy, immunocompetent people"],
        ["IM Zagreb (2-1-1)", "2 doses day 0 (both deltoids), 1 on day 7, 1 on day 21", "Fewer visits"],
        ["ID updated Thai Red Cross", "0.1 mL at 2 sites on days 0, 3, 7 and 28 (2-2-2-0-2)", "Used in Indian public facilities; saves vaccine"],
        ["ID 1-week (WHO 2018)", "0.1 mL at 2 sites on days 0, 3 and 7", "WHO preferred abridged regimen"],
        ["Previously vaccinated", "2 doses on days 0 and 3 (IM or ID), or 4-site ID on day 0", "No RIG needed"],
        ["Rabies immunoglobulin", "HRIG 20 IU/kg or ERIG 40 IU/kg infiltrated into all wounds", "Category III; not after day 7 of the first vaccine dose"],
      ],
    },
  ],
  "infectious-fever-hiv-art": [
    {
      heading: "CDC surveillance staging of HIV infection by CD4 count (CDC 2014)",
      columns: ["Stage", "Age 6 years and above", "Age 1 to 5 years", "Age below 1 year"],
      rows: [
        ["Stage 0", "Early infection - negative test within 180 days of first positive", "Same", "Same"],
        ["Stage 1", "CD4 500/mm3 or more (26 percent or more)", "1000 or more (30 percent or more)", "1500 or more (34 percent or more)"],
        ["Stage 2", "CD4 200 to 499 (14 to 25 percent)", "500 to 999 (22 to 29 percent)", "750 to 1499 (26 to 33 percent)"],
        ["Stage 3", "CD4 below 200 (below 14 percent) or AIDS-defining illness", "Below 500 (below 22 percent)", "Below 750 (below 26 percent)"],
        ["Stage unknown", "No CD4 result and no stage 3 illness", "Same", "Same"],
        ["WHO advanced HIV disease", "CD4 below 200 or WHO stage 3 or 4", "All children below 5 years", "All children below 5 years"],
      ],
    },
  ],
  "infectious-fever-skin-soft-tissue-infection": [
    {
      heading: "Eron classification of skin and soft tissue infection severity (CREST guideline)",
      columns: ["Class", "Features", "Management"],
      rows: [
        ["Class I", "No systemic toxicity, no uncontrolled comorbidity", "Oral antibiotic at home (flucloxacillin or cefalexin)"],
        ["Class II", "Systemically unwell, or well with comorbidity (PVD, venous insufficiency, obesity)", "Oral or short IV course; review in 48 h"],
        ["Class III", "Significant systemic upset (confusion, tachycardia, hypotension) or limb-threatening ischaemia", "Admit for IV antibiotics"],
        ["Class IV", "Sepsis or life-threatening infection such as necrotising fasciitis", "Admit; IV antibiotics and urgent surgical debridement"],
      ],
    },
    {
      heading: "IDSA severity grading of purulent and non-purulent SSTI (IDSA 2014)",
      columns: ["Class", "Features", "Treatment"],
      rows: [
        ["Non-purulent - mild", "Typical cellulitis or erysipelas, no systemic signs", "Oral penicillin, cephalexin or clindamycin"],
        ["Non-purulent - moderate", "Cellulitis with systemic signs of infection", "IV penicillin, ceftriaxone, cefazolin or clindamycin"],
        ["Non-purulent - severe", "Failed oral therapy, SIRS with hypotension, immunocompromise, bullae or sloughing", "Surgical exploration for NF; vancomycin plus piperacillin-tazobactam"],
        ["Purulent - mild", "Abscess, furuncle or carbuncle without systemic signs", "Incision and drainage alone"],
        ["Purulent - moderate", "Purulent infection with systemic signs", "Drainage, culture, oral co-trimoxazole or doxycycline"],
        ["Purulent - severe", "Failed drainage plus oral antibiotic, SIRS, or immunocompromise", "Drainage plus IV vancomycin, linezolid or daptomycin"],
      ],
    },
    {
      heading: "Ablett classification of tetanus severity (Oxford Textbook of Medicine 6e 2020)",
      columns: ["Grade", "Clinical features", "Management"],
      rows: [
        ["Grade I - mild", "Mild to moderate trismus, general spasticity, no spasms, little or no dysphagia", "Metronidazole, TIG, wound care, diazepam; quiet room"],
        ["Grade II - moderate", "Moderate trismus, marked rigidity, short mild spasms, dysphagia, RR above 30", "As above; early tracheostomy if dysphagia"],
        ["Grade III - severe", "Severe trismus, generalised rigidity, prolonged spasms, RR above 40, apnoea, pulse above 120", "ICU, ventilation, magnesium sulphate, neuromuscular block"],
        ["Grade IV - very severe", "Grade III plus severe autonomic instability (labile BP and heart rate)", "ICU; magnesium, labetalol or morphine for autonomic storm"],
      ],
    },
    {
      heading: "Tetanus-prone wound classification and prophylaxis (ACIP 2020)",
      columns: ["Wound class", "Examples", "Fewer than 3 doses or unknown", "3 or more doses"],
      rows: [
        ["Clean, minor wound", "Clean superficial cut or graze", "Td or Tdap; no TIG", "Td only if last dose 10 years or more ago"],
        ["All other wounds", "Soil, faeces or saliva contamination; puncture, avulsion, crush, burn, frostbite", "Td or Tdap plus TIG 250 IU IM", "Td only if last dose 5 years or more ago"],
      ],
    },
  ],
  "infectious-fever-urinary-tract-infection": [
    {
      heading: "Classification of urinary tract infection (EAU 2025 urological infections)",
      columns: ["Class", "Definition", "Implication"],
      rows: [
        ["Uncomplicated UTI", "Cystitis or pyelonephritis in non-pregnant women with no urinary abnormality or comorbidity", "Short oral course; culture only if atypical or failed"],
        ["Complicated UTI", "All men, pregnancy, anatomical or functional abnormality, catheter, renal disease, immunocompromise", "Culture before treatment; longer course; imaging"],
        ["Recurrent UTI", "2 or more infections in 6 months, or 3 or more in 12 months", "Behavioural advice, vaginal oestrogen, prophylaxis"],
        ["Catheter-associated UTI", "UTI with an indwelling catheter or within 48 h of removal", "Replace catheter before culture and treatment"],
        ["Urosepsis", "Life-threatening organ dysfunction from a urinary tract source", "Sepsis bundle; relieve obstruction urgently"],
        ["Asymptomatic bacteriuria", "Significant bacteriuria without urinary symptoms", "Treat only in pregnancy and before urological tissue-breaching surgery"],
      ],
    },
    {
      heading: "Bacteriuria criteria and colony count thresholds (EAU 2025, IDSA 2019)",
      columns: ["Setting", "Significant count (CFU/mL)", "Note"],
      rows: [
        ["Kass criterion (classic)", "10^5 or more in a midstream sample", "About 80 percent true infection on one sample, 95 percent on two"],
        ["Asymptomatic bacteriuria - women", "10^5 or more of the same organism in 2 consecutive voided samples", "Screen and treat in pregnancy"],
        ["Asymptomatic bacteriuria - men", "10^5 or more in a single clean-catch sample", "Do not treat unless before urological surgery"],
        ["In-and-out catheter specimen", "10^2 or more of a single species", "Low count is significant because contamination is minimal"],
        ["Acute uncomplicated cystitis", "10^3 or more in a symptomatic woman", "Culture not routinely needed"],
        ["Acute pyelonephritis", "10^4 or more", "Always culture"],
        ["Complicated UTI", "10^5 or more in women, 10^4 or more in men", "Always culture"],
        ["Catheter-associated UTI", "10^3 or more with symptoms, from a fresh catheter", "Asymptomatic catheter bacteriuria is not treated"],
        ["Suprapubic aspirate", "Any growth", "Gold standard in infants"],
      ],
    },
  ],
};

export default scores;
