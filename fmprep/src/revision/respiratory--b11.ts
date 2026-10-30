import type { RevisionSet } from "./index";

const revision: RevisionSet = {
  "respiratory-respiratory-procedures": {
    checked: "2026-10",
    updated: [
      "BTS Clinical Statement on Pleural Procedures 2023: ultrasound guidance for all pleural procedures for fluid, safety checklist, puncture immediately after marking",
      "BTS Pleural Disease Guideline 2023: routine pleural manometry not recommended; image-guided biopsy or thoracoscopy preferred to blind biopsy when cancer is suspected",
      "BTS Pleural Disease Guideline 2023: talc pleurodesis and indwelling pleural catheter both first-line for malignant effusion",
      "ATS/ERS/JRS/ALAT 2022: transbronchial lung cryobiopsy acceptable alternative to surgical lung biopsy in experienced centres",
      "ATLS 10th edition: adult needle decompression at 4th-5th intercostal space anterior to the mid-axillary line",
    ],
    master: {
      heading: "Master revision table - Respiratory procedures",
      columns: ["Heading", "What to write"],
      rows: [
        ["Definition", "**Thoracocentesis** = needle aspiration of pleural fluid/air (diagnostic 20-60 mL or therapeutic); **ICD** = tube in pleural space on underwater seal; **pleural biopsy** closed, image-guided or thoracoscopic; **bronchoscopy** flexible or rigid with BAL, biopsy, EBUS-TBNA"],
        ["Indications - pleural", "New unexplained effusion; breathless large effusion; pneumothorax needing intervention; **pleural infection (pH under 7.2, pus, organisms)**; haemothorax; malignant effusion before pleurodesis"],
        ["Indications - bronchoscopy", "Haemoptysis, central tumour, non-resolving pneumonia, **smear-negative TB (BAL CBNAAT)**, ILD, foreign body, mucus plug; **EBUS** for mediastinal staging and lymphadenopathy"],
        ["Applied anatomy", "**VAN bundle under lower border of rib** - go over the upper border of the rib below; **triangle of safety**: latissimus dorsi, pectoralis major, nipple line (5th space), apex below axilla; stay lateral to 6 cm from midline posteriorly"],
        ["Pre-procedure", "Consent, **LocSSIP checklist**, ultrasound confirmation of side and site; elective: warfarin to INR under about 1.5, DOAC held 24-48 h; bronchoscopy NBM 4 h food, 2 h clear fluid"],
        ["Thoracocentesis technique", "Upright leaning forward; **ultrasound mark and puncture immediately**; lidocaine 1% up to 3 mg/kg; pH in heparinised blood-gas syringe; **stop therapeutic tap at 1.5 L** or chest tightness; no routine manometry or CXR"],
        ["Chest drain technique", "**Small-bore 8-14 F Seldinger** for most; dilator only 1 cm beyond pleura; **large-bore by blunt dissection, no trocar** for haemothorax/trauma; underwater seal tube 2-3 cm under water, bottle below chest"],
        ["Pleural biopsy", "**Abrams/Cope** 4-6 bites at 3, 6, 9 o'clock (never 12); TB yield 70-80% (about 90% with culture), cancer 40-60%; **image-guided 80-90%**; **thoracoscopy over 90% cancer, near 100% TB**"],
        ["Bronchoscopy samples", "Topical lidocaine under 8 mg/kg; **BAL** lymphocytes over 15% sarcoid/HP, eosinophils over 25% eosinophilic pneumonia; **EBUS stations 2, 4, 7, 10, 11 - not 5, 6**; EUS-B adds 8, 9; cryobiopsy for ILD"],
        ["Drain care", "Record swing, bubbling, volume; flush small-bore 20-30 mL saline 6-8 hourly; **never clamp a bubbling drain**; suction -10 to -20 cmH2O only if persistent leak; remove in expiration when output under 150-200 mL/24 h"],
        ["Complications", "Pneumothorax 1-4% with ultrasound; **re-expansion oedema** (collapse over 72 h, rapid drainage, young); haemorrhage; organ puncture; vasovagal; infection; **LAST - lipid emulsion 1.5 mL/kg**; TBB pneumothorax 1-4%"],
        ["Referral", "Undiagnosed exudate after 2 taps, suspected mesothelioma, recurrent malignant effusion; **surgery for air leak over 3-5 days**, ongoing haemothorax, organised empyema"],
        ["Latest update", "**BTS 2023**: ultrasound for all fluid procedures, no routine manometry, IPC or talc first-line; **ATLS 10e** decompression at 4th-5th space anterior to mid-axillary line"],
      ],
    },
    flows: [
      {
        kind: "flow",
        heading: "Safe chest drain insertion",
        caption: "BTS Clinical Statement on Pleural Procedures 2023",
        steps: [
          { label: "Confirm indication and side", detail: "Clinical, imaging and bedside ultrasound; checklist", tone: "decision" },
          { label: "Consent, check anticoagulants", detail: "Elective: INR under about 1.5, DOAC held 24-48 h" },
          { label: "Position and mark triangle of safety", detail: "Arm behind head; ultrasound for fluid; mark and proceed at once" },
          { label: "Local anaesthetic and test aspiration", detail: "Lidocaine 1% up to 3 mg/kg; no air or fluid means stop", tone: "warn" },
          { label: "Seldinger small-bore drain", detail: "Guidewire, dilate only 1 cm beyond pleura, no trocar" },
          { label: "Underwater seal and secure", detail: "Tube 2-3 cm under water, bottle below chest, suture" },
          { label: "Confirm swing and chest X-ray", detail: "Never clamp a bubbling drain", tone: "good" },
        ],
      },
      {
        kind: "ladder",
        heading: "Ladder of pleural diagnosis for an undiagnosed exudate",
        caption: "Escalate until a diagnosis is made",
        steps: [
          { label: "Ultrasound-guided diagnostic tap", detail: "Protein, LDH, pH, glucose, ADA, cytology, CBNAAT" },
          { label: "Repeat tap with cytology", detail: "Second sample adds yield; little beyond that" },
          { label: "Closed Abrams biopsy", detail: "Suspected TB; 4-6 bites; yield about 90% with culture", tone: "decision" },
          { label: "Image-guided cutting needle biopsy", detail: "Pleural thickening or nodules; 80-90% for cancer" },
          { label: "Medical thoracoscopy", detail: "Over 90% cancer, near 100% TB; talc poudrage", tone: "good" },
          { label: "VATS biopsy", detail: "Loculated space or failed thoracoscopy", tone: "warn" },
        ],
      },
      {
        kind: "compare",
        heading: "Small-bore versus large-bore chest drain",
        columns: ["Feature", "Small-bore (8-14 F)", "Large-bore (24-32 F)"],
        rows: [
          ["Insertion", "Seldinger over guidewire", "Blunt dissection, finger sweep"],
          ["Main uses", "Pneumothorax, effusion, pleural infection", "Haemothorax, trauma, failed small-bore"],
          ["Pain", "Less", "More"],
          ["Blockage", "Commoner - flush 6-8 hourly", "Less common"],
          ["Skill needed", "Ultrasound and Seldinger competence", "Surgical technique"],
        ],
      },
    ],
    notes: {
      sections: [
        {
          title: "Definition and key facts",
          points: [
            "**Thoracocentesis** is needle aspiration of pleural fluid or air, diagnostic or therapeutic.",
            "A **chest drain** is a tube in the pleural space connected to an underwater seal.",
            "**Pleural biopsy** can be closed, image-guided or taken at thoracoscopy.",
            "**Flexible bronchoscopy** samples airways by wash, BAL, brush and biopsy.",
            "**EBUS-TBNA** samples mediastinal and hilar nodes through the airway wall.",
            "Drain deaths in the UK in 2008 came mostly from **misplacement without imaging**.",
          ],
        },
        {
          title: "Classification that matters",
          points: [
            "**Small-bore drains (8-14 F)** by Seldinger suit most pneumothoraces, effusions and infections.",
            "**Large-bore drains (24-32 F)** by blunt dissection suit haemothorax and trauma.",
            "**Trocar insertion** is abandoned because it injures lung, heart and liver.",
            "**Medical thoracoscopy** is done under local anaesthetic; **VATS** needs general anaesthesia.",
            "**Rigid bronchoscopy** is for large foreign bodies, massive haemoptysis and central obstruction.",
          ],
        },
        {
          title: "Pathophysiology",
          points: [
            "The **neurovascular bundle** runs under the lower border of each rib.",
            "So needles and drains go over the **upper border of the rib below**.",
            "The **triangle of safety** avoids breast, internal thoracic vessels and diaphragm.",
            "**Re-expansion oedema** follows rapid re-expansion of a lung collapsed for over 72 hours.",
            "An **underwater seal** is a one-way valve: air leaves but cannot return.",
          ],
        },
        {
          title: "Investigations",
          points: [
            "Send protein, LDH, glucose, **pH**, ADA, cell count, cytology, culture and CBNAAT.",
            "**pH** goes in a heparinised blood-gas syringe with no air and no lidocaine.",
            "**ADA over 40 IU/L** with lymphocytes strongly suggests TB in India.",
            "Cytology detects about **60%** of malignant effusions.",
            "**Closed biopsy** suits TB; **image-guided biopsy or thoracoscopy** suits suspected cancer.",
            "**EBUS** reaches stations 2, 4, 7, 10 and 11, but not 5 and 6.",
          ],
        },
        {
          title: "Treatment - first line",
          points: [
            "Use **ultrasound** for every pleural procedure for fluid, and puncture right after marking.",
            "Infiltrate **lidocaine 1%, maximum 3 mg/kg**, aspirating as you go.",
            "Stop a therapeutic tap at **1.5 L** or if chest tightness or cough starts.",
            "Routine **pleural manometry** and routine post-tap X-ray are not needed.",
            "Bronchoscopy uses topical lidocaine **under 8 mg/kg** and light midazolam sedation.",
          ],
        },
        {
          title: "Inpatient / emergency care",
          points: [
            "Record drain **swing, bubbling and volume** every shift.",
            "**Never clamp a bubbling drain** and never lift the bottle above the chest.",
            "Flush small-bore drains with **20-30 mL saline every 6-8 hours** in infection.",
            "Remove the drain in **expiration or Valsalva** when its job is done.",
            "Adult needle decompression is at the **4th-5th space, anterior to mid-axillary line**.",
          ],
        },
        {
          title: "Complications and red flags",
          points: [
            "**Pneumothorax** follows 1-4% of ultrasound-guided taps.",
            "Fresh blood in a drain means **intercostal artery or organ injury**.",
            "Frothy sputum after drainage means **re-expansion oedema**; give oxygen and CPAP.",
            "Seizures after anaesthetic mean **local anaesthetic toxicity**; give lipid emulsion.",
            "Transbronchial biopsy causes **pneumothorax in 1-4%**, cryobiopsy in about 10%.",
          ],
        },
        {
          title: "Referral and follow-up",
          points: [
            "Refer an **undiagnosed exudate** after two taps to a pleural service.",
            "Refer to surgery for **air leak over 3-5 days** or ongoing haemothorax.",
            "Recurrent malignant effusion needs **talc or an indwelling pleural catheter**.",
            "No driving for **24 hours** after bronchoscopy sedation.",
          ],
        },
        {
          title: "Latest updates",
          points: [
            "**BTS 2023**: ultrasound for all pleural fluid procedures, with a safety checklist.",
            "**BTS 2023**: no routine manometry; talc or IPC both first-line in malignant effusion.",
            "**IPF 2022**: cryobiopsy acceptable instead of surgical lung biopsy in expert centres.",
          ],
        },
      ],
      tables: [
        {
          heading: "Drugs used around pleural and bronchoscopic procedures",
          columns: ["Drug", "Dose and route", "Duration", "Key side effects / cautions"],
          rows: [
            ["Lidocaine 1% infiltration", "Up to 3 mg/kg, no adrenaline", "Single procedure", "Seizures, arrhythmia if toxic"],
            ["Lidocaine topical", "Total under about 8 mg/kg via scope", "Single procedure", "Use less in elderly, liver or heart failure"],
            ["Midazolam", "1-2 mg IV, titrate 0.5-1 mg", "Procedure; flumazenil to reverse", "Respiratory depression"],
            ["Fentanyl", "25-50 microgram IV", "Procedure; naloxone to reverse", "Respiratory depression"],
            ["Atropine", "0.6 mg IV", "Repeat to 3 mg if needed", "Tachycardia, urinary retention"],
            ["Sterile talc", "4 g slurry or poudrage", "Single dose", "Fever, pain"],
            ["tPA plus DNase", "10 mg plus 5 mg intrapleural", "Twice daily for 3 days", "Pleural bleeding"],
          ],
        },
        {
          heading: "Pleural biopsy methods compared",
          columns: ["Method", "TB yield", "Cancer yield"],
          rows: [
            ["Closed Abrams/Cope", "70-80%, about 90% with culture", "40-60%"],
            ["Image-guided cutting needle", "About 80-90%", "About 80-90%"],
            ["Medical thoracoscopy", "Close to 100%", "Over 90%"],
            ["VATS", "Close to 100%", "Over 95%"],
          ],
        },
        {
          heading: "Chest drain troubleshooting",
          columns: ["Problem", "Cause", "Action"],
          rows: [
            ["Not swinging", "Kinked, blocked, displaced or lung up", "Check, flush, X-ray"],
            ["Continuous bubbling", "Air leak or circuit leak", "Check connections; surgery if over 3-5 days"],
            ["Surgical emphysema", "Side-hole outside pleura", "X-ray, reposition"],
            ["Fresh blood", "Vessel or organ injury", "Resuscitate, CT angiography, surgery"],
          ],
        },
      ],
      remember: [
        "Triangle of safety: Latissimus dorsi, Pectoralis major, Nipple line.",
        "VAN hides under the rib - go over the top of the rib below.",
        "Abrams biopsy at 3, 6 and 9 o'clock, never 12.",
        "Closed biopsy is good for TB, poor for cancer.",
        "EBUS reaches 2, 4, 7, 10, 11 - not 5 and 6.",
        "Never clamp a bubbling drain.",
        "Stop a therapeutic tap at 1.5 L.",
      ],
    },
  },
};

export default revision;
