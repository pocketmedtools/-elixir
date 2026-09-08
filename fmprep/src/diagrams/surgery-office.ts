/**
 * Diagrams for surgery-office, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "surgery-office-wound-suturing": [
    {
      kind: "flow",
      heading: "Managing an acute laceration in the clinic",
      caption: "The order the examiner expects, from the history to the removal date.",
      steps: [
        {
          label: "Time, mechanism and environment",
          detail:
            "Golden period for primary closure is 6 hours on limb and trunk, 12-24 hours on face and scalp",
        },
        {
          label: "Examine distal function before injecting",
          detail: "Nerve, tendon, vessel, bone and perfusion, documented before any anaesthetic",
        },
        {
          label: "Anaesthetise by weight, then test the block",
          detail:
            "Lignocaine 3 mg/kg plain or 7 mg/kg with adrenaline; 1 percent is 10 mg/mL; wait 3-5 minutes",
        },
        {
          label: "Irrigate under pressure",
          detail:
            "50-100 mL of saline per cm of wound through a 20 mL syringe and an 18 G cannula; tap water is not inferior",
          tone: "good",
        },
        {
          label: "Debride and remove foreign material",
          detail: "Excise devitalised tissue, explore to the base in good light",
        },
        {
          label: "Decide primary, delayed primary or secondary",
          detail: "Do not close a bite, a puncture or a limb wound more than 6 hours old",
          tone: "decision",
        },
        {
          label: "Tetanus, rabies and antibiotic cover",
          detail: "Amoxicillin-clavulanate 625 mg PO TDS for 5 days is the standard cover for bites",
        },
        {
          label: "Aftercare and a suture removal date",
          detail: "Keep dry 48 hours; remove face 4-5 days, scalp and trunk 7-10, limbs 10-14",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Choosing how to close the wound",
      caption: "The closure decision is made after irrigation and debridement, not before.",
      root: "Wound after wound toilet",
      arms: [
        {
          label: "Primary closure now",
          tone: "good",
          steps: [
            "Clean incised wound under 6 hours old on limb or trunk",
            "Face and scalp acceptable up to 12-24 hours because of the rich blood supply",
            "Fine linear scar, epithelialisation within 48 hours, minimal contraction",
          ],
        },
        {
          label: "Delayed primary closure on day 3 to 5",
          tone: "decision",
          steps: [
            "Contaminated, crush or war wound, or more than 6 hours old",
            "Pack open, inspect at 48 hours, close on day 3 to 5 if clean",
            "Near-primary scar with a fraction of the infection risk",
          ],
        },
        {
          label: "Leave to heal by secondary intention",
          steps: [
            "Established infection, tissue loss, or a small wound after debridement",
            "Granulation, contraction and epithelialisation from the base up",
            "Broad contracted scar - accept it rather than close a dirty wound",
          ],
        },
        {
          label: "Never close primarily",
          tone: "warn",
          steps: [
            "Mammalian bites, especially cat, human and any bite of the hand",
            "Puncture and stab wounds, or a retained foreign body",
            "A category III dog bite is washed, infiltrated with immunoglobulin and left open",
            "Any wound in a poorly perfused or immunosuppressed limb",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Local anaesthetic systemic toxicity",
      caption: "Toxicity is from intravascular injection or bad arithmetic - aspirate and calculate.",
      steps: [
        {
          label: "Stop injecting at the first warning sign",
          detail: "Circumoral numbness, metallic taste, tinnitus, blurred vision, twitching",
          tone: "warn",
        },
        {
          label: "Call for help and give 100 percent oxygen",
          detail: "Support the airway and ventilate - hypoxia and acidosis worsen toxicity",
        },
        {
          label: "Control seizures with a benzodiazepine",
          detail: "Midazolam 1-2 mg IV or diazepam 5-10 mg IV; avoid large doses of propofol",
        },
        {
          label: "Lipid emulsion 20 percent bolus",
          detail: "1.5 mL/kg over 1 minute, about 100 mL in a 70 kg adult",
          tone: "good",
        },
        {
          label: "Then infuse 15 mL/kg/hour",
          detail:
            "Repeat the bolus up to twice at 5 minutes and double the rate if the circulation is not restored; cumulative maximum 12 mL/kg",
        },
        {
          label: "If in arrest, prolonged CPR",
          detail:
            "May need over an hour; adrenaline under 1 microgram/kg; avoid lignocaine, vasopressin, calcium channel blockers and beta blockers",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Tetanus prophylaxis after a wound",
      caption: "Two questions only: is the wound tetanus-prone, and how many documented doses.",
      columns: ["Situation", "Fewer than 3 doses or unknown", "3 or more documented doses"],
      rows: [
        [
          "Clean minor wound",
          "Give Td or TT and complete the primary course; no immunoglobulin",
          "Booster only if the last dose was more than 10 years ago",
        ],
        [
          "Tetanus-prone wound (dirty, deep, puncture, crush, burn, soil or faeces, over 6 hours old)",
          "Vaccine PLUS human tetanus immunoglobulin 250 IU IM, separate site and syringe",
          "Booster if the last dose was more than 5 years ago; immunoglobulin not required",
        ],
        [
          "Larger immunoglobulin dose",
          "500 IU if the wound is over 24 hours old, heavily contaminated, or the patient is over 90 kg",
          "Not applicable - immunological memory is intact",
        ],
        [
          "Where human immunoglobulin is unavailable",
          "Equine antitetanus serum 1500 IU after a test dose; real risk of anaphylaxis and serum sickness",
          "Not applicable",
        ],
      ],
    },
  ],

  "surgery-office-abscess-ssti": [
    {
      kind: "compare",
      heading: "Abscess, cellulitis and necrotising fasciitis",
      caption: "The whole management decision turns on which of these three is in front of you.",
      columns: ["Feature", "Abscess", "Cellulitis or erysipelas", "Necrotising fasciitis"],
      rows: [
        [
          "Layer involved",
          "Any layer, with a pus cavity",
          "Deep dermis and fat; erysipelas is upper dermis and lymphatics",
          "Deep fascia and fat",
        ],
        [
          "Usual organism",
          "Staph aureus, including community-acquired MRSA",
          "Strep pyogenes; Staph aureus if purulent",
          "Type I polymicrobial, type II group A Strep",
        ],
        [
          "Clinical clue",
          "Tense, exquisitely tender fluctuant swelling with central pointing",
          "Indistinct edge; erysipelas has a sharply demarcated raised edge",
          "Pain out of proportion, woody oedema, skin anaesthesia, haemorrhagic bullae, crepitus",
        ],
        [
          "Bedside test",
          "Ultrasound shows a collection with posterior acoustic enhancement",
          "Cobblestoning with no collection; mark the margin with the date and time",
          "LRINEC 6 or more raises suspicion, 8 or more makes it likely - a low score never excludes it",
        ],
        [
          "Treatment",
          "Incision, deroofing and breakdown of loculi",
          "Antibiotics and elevation; reassess the marked margin at 48 hours",
          "Resuscitate and refer for radical debridement within hours - never incise in the clinic",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Incision and drainage - the steps to recite",
      caption: "Antibiotics cannot sterilise a cavity: the pyogenic membrane is avascular.",
      steps: [
        {
          label: "Consent, allergies, tetanus and diabetes",
          detail:
            "Explain the scar, packing, recurrence, sinus formation and bleeding; take written consent",
        },
        {
          label: "Asepsis, patient lying down, paint widely",
          detail: "Never on a stool; No 11 or 15 blade, sinus forceps, curette, swab and pack laid out first",
        },
        {
          label: "Field or ring block in healthy tissue",
          detail: "Never infiltrate into pus - acid pus inactivates the base form of the anaesthetic",
          tone: "warn",
        },
        {
          label: "Incise at the point of maximum fluctuation",
          detail:
            "Most dependent part, along Langer lines, long enough; cruciate incision with deroofing of the corners",
        },
        {
          label: "Swab from the depth before irrigating",
          detail: "Send the wall for histopathology if the abscess is chronic or atypical",
        },
        {
          label: "Break down loculi by the Hilton method",
          detail:
            "Closed sinus forceps introduced and opened within the cavity; a blade goes no deeper than superficial fascia",
          tone: "good",
        },
        {
          label: "Irrigate and pack loosely",
          detail: "Saline or povidone-iodine wick; a tight pack is painful and delays healing",
        },
        {
          label: "Review at 24-48 hours",
          detail:
            "Re-pack shorter, feel the cavity for a missed loculus, heal by secondary intention from the base",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Empirical antibiotics for outpatient skin and soft tissue infection",
      caption: "Staph aureus for purulent infection, streptococci for non-purulent.",
      root: "Skin and soft tissue infection in the clinic",
      arms: [
        {
          label: "Simple abscess, drained, well patient",
          tone: "good",
          steps: [
            "No antibiotic at all - drainage is the treatment",
            "Screen for diabetes with glucose and HbA1c at the same visit",
          ],
        },
        {
          label: "Abscess with cellulitis or fever",
          steps: [
            "Cloxacillin 500 mg PO QID, or amoxicillin-clavulanate 625 mg PO TDS",
            "5-7 days; covers MSSA and streptococci",
            "Also add cover for a face or hand site, diabetes, immunosuppression or a prosthesis",
          ],
        },
        {
          label: "Non-purulent cellulitis or erysipelas",
          steps: [
            "Amoxicillin 500 mg TDS or penicillin V for 5-7 days",
            "Add cloxacillin if purulent",
            "Elevate the limb, mark the margin, treat the portal of entry such as tinea pedis",
          ],
        },
        {
          label: "Suspected community-acquired MRSA",
          tone: "decision",
          steps: [
            "Suspect it in a recurrent or spontaneous abscess, a family cluster, a healthcare worker or beta-lactam failure",
            "Clindamycin 300-450 mg TDS, cotrimoxazole DS BD, doxycycline 100 mg BD or linezolid 600 mg BD",
            "Cotrimoxazole and doxycycline cover streptococci poorly",
            "Decolonise: nasal mupirocin twice daily for 5 days plus chlorhexidine washes",
          ],
        },
        {
          label: "Penicillin allergy",
          steps: [
            "Clindamycin 300 mg TDS or azithromycin 500 mg OD for 5 days",
            "Watch for Clostridioides difficile with clindamycin",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Suspected necrotising fasciitis - do not incise in the clinic",
      caption: "Survival depends on the time to the first debridement; mortality is 20-40 percent.",
      steps: [
        {
          label: "Recognise it: pain out of proportion",
          detail:
            "Woody oedema beyond the erythema, skin anaesthesia, haemorrhagic bullae, crepitus, dishwater discharge",
          tone: "warn",
        },
        {
          label: "Two wide-bore cannulae, fluid resuscitation",
        },
        {
          label: "Cultures, count, renal function, lactate",
          detail: "Blood cultures, glucose and coagulation as well - but nothing may delay the referral",
        },
        {
          label: "Broad-spectrum antibiotics at once",
          detail:
            "Carbapenem or piperacillin-tazobactam, PLUS clindamycin for toxin suppression, PLUS vancomycin or linezolid",
        },
        {
          label: "Refer now and document the time of the call",
          tone: "good",
        },
        {
          label: "Radical debridement within hours",
          detail: "Usually repeated at 24-48 hours; imaging and the LRINEC score must never delay surgery",
        },
      ],
    },
  ],

  "surgery-office-diabetic-foot": [
    {
      kind: "branch",
      heading: "Why the diabetic foot ulcerates",
      caption: "The triad is neuropathy, ischaemia and infection - infection is a complication, not a cause.",
      root: "Neuropathy plus unperceived repetitive trauma",
      arms: [
        {
          label: "Sensory neuropathy",
          steps: [
            "Protective pain is lost",
            "A stone in the shoe, a tight chappal or a hot floor goes unnoticed",
            "The classical history is a patient who walked in on a deep plantar ulcer denying any pain",
          ],
        },
        {
          label: "Motor neuropathy",
          steps: [
            "Intrinsic muscle wasting with clawing of the toes",
            "Prominent metatarsal heads, high arch, forward migration of the plantar fat pad",
            "Pressure concentrates exactly where the neuropathic ulcer forms",
          ],
        },
        {
          label: "Autonomic neuropathy",
          steps: [
            "Sweating stops - skin becomes dry, inelastic and fissured",
            "Arteriovenous shunting makes the foot warm and bounding",
            "The paradox of a warm, pink, pulsatile foot that still ulcerates",
          ],
        },
        {
          label: "Ischaemia and infection",
          tone: "warn",
          steps: [
            "Distal, diffuse tibial and peroneal disease with relative sparing of the foot vessels",
            "Monckeberg medial calcification falsely raises the ankle-brachial index",
            "Callus acts as a foreign body - the ulcer beneath is always larger than it looks",
            "Up to half of severe foot infections are afebrile with a normal white cell count",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Meggitt-Wagner grading of the diabetic foot",
      caption: "The classification the Indian examiner expects first; it grades depth and gangrene.",
      steps: [
        {
          label: "Grade 0 - at-risk foot, skin intact",
          detail: "Neuropathy, deformity or callus; education, callus paring, footwear, 3-6 monthly review",
        },
        {
          label: "Grade 1 - superficial full-thickness ulcer",
          detail: "Debridement, offloading and dressings; antibiotics only if infected",
        },
        {
          label: "Grade 2 - ulcer to tendon, capsule or bone",
          detail: "No abscess or osteomyelitis; deep culture, radiograph, offloading, oral antibiotics",
        },
        {
          label: "Grade 3 - deep ulcer with abscess",
          detail:
            "Osteomyelitis or joint sepsis; admit, drain or debride, bone biopsy, about 6 weeks of therapy if bone is retained",
        },
        {
          label: "Grade 4 - localised gangrene",
          detail: "Forefoot or heel; vascular assessment and revascularisation, local or ray amputation",
        },
        {
          label: "Grade 5 - gangrene of the whole foot",
          detail: "Major amputation below or above the knee after optimisation",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "IWGDF/IDSA infection grade and the empirical antibiotic",
      caption: "Infection is graded separately from depth, and grading is clinical - never wait for a swab.",
      columns: ["Grade", "Clinical picture", "Setting and route", "Empirical antibiotic and duration"],
      rows: [
        [
          "1 Uninfected",
          "No local or systemic signs of infection",
          "Outpatient",
          "No antibiotic - every ulcer is colonised and treating colonisation breeds resistance",
        ],
        [
          "2 Mild",
          "Skin and subcutaneous tissue only, erythema 0.5-2 cm around the ulcer",
          "Outpatient, oral",
          "Amoxicillin-clavulanate 625 mg TDS, cephalexin 500 mg QID, or clindamycin; 1-2 weeks",
        ],
        [
          "3 Moderate",
          "Erythema over 2 cm, or deeper structures involved (abscess, fasciitis, tendon, joint, bone); systemically well",
          "Often admitted, initially intravenous",
          "Ampicillin-sulbactam, or ceftriaxone plus metronidazole, or piperacillin-tazobactam; 1-3 weeks",
        ],
        [
          "4 Severe",
          "Any foot infection with a systemic inflammatory response or metabolic instability",
          "Admit, intravenous, urgent surgery",
          "Piperacillin-tazobactam or a carbapenem plus vancomycin or linezolid; 2-4 weeks with drainage",
        ],
        [
          "3-O Osteomyelitis",
          "Positive probe-to-bone, exposed bone, ESR over 70 mm/hour, MRI or bone biopsy positive",
          "Admit; bone biopsy for culture",
          "Culture-directed: about 6 weeks if bone is retained, 2-3 weeks if all infected bone is resected",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Managing a neuropathic plantar ulcer",
      caption: "Offloading, not the dressing, is what makes a plantar ulcer heal.",
      steps: [
        {
          label: "Pare the callus and debride sharply",
          detail: "The true ulcer is always larger than the visible opening; debride at every visit",
        },
        {
          label: "Offload - the step most often omitted",
          detail:
            "Total contact cast or another non-removable knee-high device; contraindicated in ischaemia or deep infection",
          tone: "good",
        },
        {
          label: "Take a deep tissue specimen, not a swab",
          detail: "A superficial swab grows only colonisers",
        },
        {
          label: "Treat infection only if present",
          detail:
            "Mild grade 2: amoxicillin-clavulanate 625 mg TDS or cephalexin 500 mg QID for 1-2 weeks, reviewed in 48-72 hours",
        },
        {
          label: "Assess perfusion properly",
          detail:
            "ABI below 0.9 is disease, below 0.5 severe, above 1.3 unreliable - use a toe pressure, below 30 mmHg predicts non-healing",
        },
        {
          label: "Dress by exudate and measure the area",
          detail: "No dressing heals faster; cost, availability and change frequency decide",
        },
        {
          label: "Refer if not half the size at 4 weeks",
          detail:
            "Refer the same day for probe-to-bone, abscess, gas, wet gangrene, spreading cellulitis or rest pain",
          tone: "warn",
        },
      ],
    },
  ],

  "surgery-office-minor-procedures": [
    {
      kind: "compare",
      heading: "Lipoma versus sebaceous cyst",
      caption: "The two commonest office excisions, and the trap that sits behind each.",
      columns: ["Feature", "Lipoma", "Sebaceous (epidermoid) cyst"],
      rows: [
        ["Contents", "Mature adipose tissue in a thin fibrous capsule", "Keratin, cheesy and foul smelling"],
        ["Surface and edge", "Lobulated with a slipping edge (positive slip sign)", "Smooth and hemispherical"],
        ["Relation to skin", "Skin freely pinchable over it", "Tethered to skin at the punctum"],
        ["Punctum", "Absent", "Present in about half of cases"],
        [
          "Fluctuation and transillumination",
          "Pseudofluctuant, not transilluminant",
          "Fluctuant, not transilluminant",
        ],
        [
          "Typical sites",
          "Back, shoulder, neck, arm - anywhere fat exists",
          "Scalp, face, neck, back, scrotum; never palms or soles",
        ],
        ["Cause of recurrence", "Capsule left behind after enucleation", "Cyst wall left behind after rupture"],
        [
          "Key trap",
          "Over 5 cm, deep to fascia or fast-growing may be a liposarcoma - image and refer",
          "An infected cyst is drained now and excised 6 to 8 weeks later; an ulcerated one may be Cock peculiar tumour",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Ingrown toenail - Heifetz stages",
      caption: "The stage decides whether conservative treatment can possibly work.",
      steps: [
        {
          label: "Stage 1 - erythema, oedema and pain",
          detail:
            "No discharge; cut straight across and no shorter than the toe tip, cotton wisp under the corner, saline soaks, roomy footwear",
        },
        {
          label: "Stage 2 - seropurulent discharge",
          detail:
            "Infection with ulceration; antibiotics alone do not cure it and repeated courses are the classical error",
          tone: "warn",
        },
        {
          label: "Stage 3 - chronic granulation tissue",
          detail:
            "Hypertrophy of the lateral nail fold; partial nail avulsion with lateral matricectomy is the definitive treatment",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Partial nail avulsion with phenol matricectomy",
      caption: "Simple avulsion without matricectomy recurs in over 60 percent.",
      steps: [
        {
          label: "Consent; check pulses and diabetic status",
          detail: "In diabetes or peripheral arterial disease check the ABI and consider referral instead",
        },
        {
          label: "Digital ring block, then wait 5-10 minutes",
          detail: "2-3 mL of plain lignocaine each side of the base of the toe, classically without adrenaline",
        },
        {
          label: "Apply and record a toe tourniquet",
          detail: "Soft rubber or glove finger; record it clearly so that it is removed",
          tone: "warn",
        },
        {
          label: "Avulse the lateral 3-4 mm strip of nail",
          detail:
            "Separate with a MacDonald dissector, cut longitudinally to the base, avulse with a rolling movement",
        },
        {
          label: "Curette granulation tissue and spicules",
        },
        {
          label: "Phenol 80-88 percent to the lateral matrix",
          detail:
            "On a cotton applicator for 30 seconds, three times, then wash with alcohol or saline; recurrence under 5 percent",
          tone: "good",
        },
        {
          label: "Release tourniquet, confirm capillary refill",
          detail: "Paraffin gauze and bulky dressing, elevate 24 hours, review at 48 hours then weekly",
        },
        {
          label: "Cut the nail straight across for life",
          detail: "Plus footwear advice; the Zadik operation removes the whole nail permanently and is a last resort",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Choosing the skin biopsy technique",
      caption: "Site selection matters more than technique, and the container matters as much as both.",
      columns: ["Technique", "Best used for", "Do not use for", "Practical note"],
      rows: [
        [
          "Punch 3-4 mm",
          "Inflammatory dermatoses, rash of unknown cause, small lesions",
          "Suspected melanoma; panniculitis, which is too deep for it",
          "Stretch the skin at right angles to the tension lines so the defect closes as an ellipse",
        ],
        [
          "Shave",
          "Skin tag, seborrhoeic keratosis, raised benign intradermal naevus",
          "Any pigmented lesion suspicious of melanoma",
          "Destroys depth information; never use where Breslow thickness may be needed",
        ],
        [
          "Incisional",
          "Large lesion, or where complete excision would be mutilating; panniculitis",
          "Small lesion that can be excised completely",
          "Include the active edge with adjacent normal skin",
        ],
        [
          "Excisional",
          "Small clinically suspicious lesion; any suspected melanoma",
          "Large lesion needing planned reconstruction",
          "1-3 mm margin, long axis along the limb so later wide excision is not compromised",
        ],
        [
          "Direct immunofluorescence sample",
          "Bullous and vasculitic disease",
          "Routine histology",
          "Perilesional normal skin in Michel medium or saline, NOT formalin",
        ],
      ],
    },
  ],

  "surgery-office-hernia": [
    {
      kind: "compare",
      heading: "Indirect, direct and femoral hernia",
      caption: "The neck of the sac, not the fundus, is what is related to the pubic tubercle.",
      columns: ["Feature", "Indirect inguinal", "Direct inguinal", "Femoral"],
      rows: [
        [
          "Typical patient",
          "Commonest hernia at every age and in both sexes; young men and children",
          "Older men with chronic straining and a weak posterior wall",
          "Middle-aged and elderly multiparous women",
        ],
        [
          "Cause",
          "Congenital patent processus vaginalis",
          "Acquired weakness of the posterior wall of the canal",
          "Wide femoral canal with raised intra-abdominal pressure",
        ],
        [
          "Relation to inferior epigastric vessels",
          "Lateral, through the deep ring",
          "Medial, through Hesselbach triangle",
          "Not applicable - below the inguinal ligament",
        ],
        [
          "Neck relative to the pubic tubercle",
          "Above and medial",
          "Above and medial",
          "Below and lateral",
        ],
        [
          "Shape and descent",
          "Oval, descends into the scrotum",
          "Round or globular, rarely reaches the scrotum",
          "Small globular swelling in the upper thigh, may turn upwards",
        ],
        [
          "Deep ring occlusion test",
          "Controlled by occluding the deep ring",
          "Not controlled - bulges medially",
          "Not applicable",
        ],
        [
          "Risk of strangulation",
          "Moderate",
          "Low - the neck is wide",
          "Highest of all; about 40 percent present as an emergency",
        ],
        [
          "Usual operation",
          "Herniotomy in children; Lichtenstein mesh or laparoscopic repair in adults",
          "Lichtenstein mesh or laparoscopic repair",
          "Always operate: low (Lockwood), high (McEvedy) or inguinal (Lotheissen) approach",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "States of a hernia and their urgency",
      caption: "This is the classification that decides how fast the patient must be moved.",
      steps: [
        {
          label: "Reducible",
          detail:
            "Soft lump with an expansile cough impulse that disappears on lying down; elective referral, treat the cause of raised pressure",
        },
        {
          label: "Irreducible (incarcerated)",
          detail:
            "Contents cannot be returned but there is no obstruction or ischaemia; urgent, not emergency, referral - the step before obstruction",
        },
        {
          label: "Obstructed",
          detail:
            "Colicky pain, vomiting, distension, absolute constipation with a tense tender lump; blood supply still intact",
        },
        {
          label: "Strangulated",
          detail:
            "Constant severe pain, tense tender lump with NO cough impulse, skin erythema and toxicity; emergency operation",
          tone: "warn",
        },
        {
          label: "Richter - strangulates without obstructing",
          detail:
            "Only part of the bowel circumference is caught, commonest in a femoral hernia; the absence of vomiting is not reassurance",
        },
      ],
    },
    {
      kind: "flow",
      heading: "The strangulated hernia in the consulting room",
      caption: "Mortality rises steeply with the delay between strangulation and operation.",
      steps: [
        {
          label: "Diagnose clinically",
          detail:
            "Tense, tender, irreducible lump with no cough impulse and overlying erythema in a toxic, vomiting patient",
        },
        {
          label: "Never attempt taxis",
          detail:
            "Risks reducing gangrenous bowel, reduction en masse with the ring still constricting, perforation and peritonitis",
          tone: "warn",
        },
        {
          label: "Nil by mouth, wide-bore cannula, crystalloid",
        },
        {
          label: "Nasogastric tube and urinary catheter",
          detail: "Tube if vomiting or distended; catheter to monitor output",
        },
        {
          label: "Bloods and broad-spectrum antibiotics",
          detail: "Complete blood count, electrolytes, renal function, glucose and grouping",
        },
        {
          label: "Phone the surgeon and record the time",
          tone: "good",
        },
        {
          label: "Suspect Richter if toxic with no obstruction",
          detail:
            "Waiting for vomiting and distension in a tender irreducible femoral lump costs a resection or a life",
          tone: "warn",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Named hernias the examiner asks for",
      caption: "Eponyms are asked because each one changes what is done at operation.",
      root: "Eponymous varieties",
      arms: [
        {
          label: "Richter",
          steps: [
            "Only part of the circumference of the bowel wall, the antimesenteric border, is caught",
            "Strangulates and perforates without ever obstructing",
            "Commonest in a femoral hernia and at laparoscopic port sites",
          ],
        },
        {
          label: "Littre and Amyand",
          steps: [
            "Littre - a Meckel diverticulum lies in the sac",
            "Amyand - the appendix, sometimes inflamed, lies in an inguinal sac",
          ],
        },
        {
          label: "Maydl",
          steps: [
            "W-shaped loop; the strangulated segment lies inside the abdomen",
            "The loops in the sac look viable at operation - retrograde strangulation",
            "Inspect the whole loop at laparotomy",
          ],
        },
        {
          label: "Sliding (en glissade)",
          steps: [
            "A retroperitoneal viscus forms part of the wall of the sac itself",
            "Sigmoid colon on the left, caecum on the right, bladder medially",
            "Suspect it in a large, long-standing, irreducible inguinoscrotal hernia in an elderly man",
            "Do not open the posterior wall blindly - refer for a planned operation",
          ],
        },
        {
          label: "Obturator",
          tone: "warn",
          steps: [
            "The little old lady hernia - thin, elderly, multiparous woman",
            "Intestinal obstruction with no visible or palpable lump",
            "Howship-Romberg sign: medial thigh and knee pain worse on extension, adduction and internal rotation",
            "CT is diagnostic, but referral must not wait for it",
          ],
        },
      ],
    },
  ],

  "surgery-office-breast-lump": [
    {
      kind: "flow",
      heading: "Triple assessment of a breast lump",
      caption: "Three arms, each scored, and then compared with one another.",
      steps: [
        {
          label: "Clinical assessment, scored P1 to P5",
          detail:
            "History, inspection in three positions, palpation of breast, axilla and supraclavicular fossa",
        },
        {
          label: "Imaging, chosen by age",
          detail:
            "Ultrasound first under 40 years; mammography in CC and MLO views plus targeted ultrasound at 40 and over; ultrasound in pregnancy and lactation",
        },
        {
          label: "Core needle biopsy, scored B1 to B5",
          detail:
            "Only core biopsy separates invasive from in situ and gives ER, PR and HER2 status; FNAC where core is unavailable",
        },
        {
          label: "Concordance decides the action",
          detail:
            "A lump is benign only if all three arms are benign; any discordance, and any B3 lesion, means excision biopsy",
          tone: "decision",
        },
        {
          label: "A normal mammogram overrules nothing",
          detail:
            "Up to 10-15 percent of palpable cancers are mammographically occult - complete the assessment and refer",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Common breast lumps by age",
      caption: "Age plus the feel of the lump narrows the differential before any test.",
      columns: ["Lump", "Typical age", "Feel and behaviour", "Management"],
      rows: [
        [
          "Fibroadenoma",
          "15-30 years",
          "Firm, smooth or lobulated, highly mobile breast mouse, painless",
          "Observe if under 3 cm, under 30 and concordantly benign; otherwise excise",
        ],
        [
          "Fibrocystic change (ANDI)",
          "25-45 years",
          "Bilateral lumpy nodularity with cyclical pain, worse premenstrually",
          "Reassure after triple assessment; support brassiere, analgesia, evening primrose oil",
        ],
        [
          "Breast cyst",
          "35-55 years",
          "Smooth, tense, sometimes tender, may appear suddenly",
          "Ultrasound and aspiration; refer if it does not disappear, is bloody or refills",
        ],
        [
          "Carcinoma",
          "Over 40, rising with age",
          "Hard, irregular, ill-defined, painless, tethered, skin dimpling or peau d orange",
          "Urgent referral, full triple assessment, multidisciplinary treatment",
        ],
        [
          "Phyllodes tumour",
          "40-50 years",
          "Large, rapidly growing, bosselated fibroepithelial mass",
          "Wide local excision with a 1 cm margin; recurs if simply enucleated",
        ],
        [
          "Fat necrosis",
          "Any age, after trauma or surgery",
          "Hard, irregular, may tether the skin - mimics carcinoma exactly",
          "Triple assessment with biopsy; never assume the diagnosis from a history of trauma",
        ],
        [
          "Duct ectasia",
          "Perimenopausal, smokers",
          "Green or brown multiduct discharge, slit-like nipple retraction",
          "Reassure after triple assessment; treat periductal mastitis; stop smoking",
        ],
        [
          "Tuberculosis of the breast",
          "Young to middle-aged women in India",
          "Chronic lump with a discharging sinus and matted axillary nodes",
          "Biopsy with CBNAAT and culture; antituberculous therapy",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Gynaecomastia versus male breast carcinoma",
      caption: "A male breast lump is not automatically a drug side effect.",
      columns: ["Feature", "Gynaecomastia", "Male breast carcinoma"],
      rows: [
        ["Position", "Concentric disc directly beneath the areola", "Eccentric to the nipple"],
        ["Consistency", "Rubbery and symmetrical, often tender", "Hard and irregular, painless"],
        ["Laterality", "Often bilateral", "Unilateral"],
        ["Nipple", "Normal", "Retraction, ulceration or discharge"],
        [
          "Setting",
          "Puberty, old age, drugs such as spironolactone",
          "About 1 percent of all breast cancers, commonly in the sixties",
        ],
        [
          "Action",
          "Find and treat the cause, review the drug list, endocrine tests if indicated",
          "Full triple assessment and referral - carcinoma until proved otherwise",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "After aspirating a breast cyst",
      caption: "Three reassuring features, and four reasons to refer.",
      root: "Simple cyst confirmed on ultrasound and aspirated",
      arms: [
        {
          label: "Reassuring - discard the fluid",
          tone: "good",
          steps: [
            "Fluid clear or yellow",
            "The lump disappears completely",
            "No residual mass is felt",
            "Routine cytology of clear fluid is unnecessary; review clinically",
          ],
        },
        {
          label: "Refer - exclude intracystic carcinoma",
          tone: "warn",
          steps: [
            "Fluid blood-stained",
            "Lump does not disappear, or a residual mass remains",
            "Cyst refills rapidly",
            "Send cytology and refer",
          ],
        },
      ],
    },
  ],

  "surgery-office-catheter-ngt-injection": [
    {
      kind: "flow",
      heading: "Male urethral catheterisation",
      caption: "French gauge is circumference in mm, so the diameter is the Fr size divided by three.",
      steps: [
        {
          label: "Consent, chaperone, choose the catheter",
          detail:
            "14-16 Fr for a routine adult, 8-10 Fr in a child, 20-24 Fr three-way for clot retention, Coude tip for a large prostate",
        },
        {
          label: "Aseptic non-touch technique",
          detail: "Retract the foreskin, clean the glans and meatus from the meatus outwards, drape",
        },
        {
          label: "Instil 10-20 mL of lignocaine 2 percent gel",
          detail: "Occlude the meatus and wait 3-5 minutes - the step most often skipped",
        },
        {
          label: "Hold the penis vertical and advance steadily",
          detail:
            "Ask the patient to breathe out or strain gently at the membranous urethra; never force the catheter",
        },
        {
          label: "Advance to the bifurcation and see urine",
          detail: "Confirm urine is draining BEFORE the balloon is touched",
          tone: "good",
        },
        {
          label: "Inflate slowly with 10 mL of sterile water",
          detail:
            "Stop instantly if there is pain - the balloon is still in the urethra; never saline, which crystallises, and never air",
          tone: "warn",
        },
        {
          label: "Withdraw to the bladder neck, closed system",
          detail: "Drainage bag below the level of the bladder but off the floor",
        },
        {
          label: "Replace the foreskin",
          detail: "Failure to do so causes paraphimosis, the single most frequently examined complication",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Confirming a nasogastric tube before it is used",
      caption: "Position is confirmed objectively before every feed, drug and after any vomiting.",
      steps: [
        {
          label: "Measure by NEX and mark the tube",
          detail: "Nose to ear lobe to xiphisternum; pass along the floor of the nose, backwards not upwards",
        },
        {
          label: "Withdraw at once if the patient coughs",
          detail: "Persistent cough, distress, cyanosis, hoarseness or resistance means tracheal placement",
          tone: "warn",
        },
        {
          label: "Aspirate and test on pH paper",
          detail: "A pH of 5.5 or less confirms gastric placement",
          tone: "good",
        },
        {
          label: "No aspirate - reposition and try again",
          detail:
            "Turn onto the left side, advance or withdraw 10-20 cm, give a mouth-care sponge to stimulate secretions",
        },
        {
          label: "Still in doubt - radiograph is definitive",
          detail:
            "Tube bisects the carina, passes below the diaphragm in the midline, tip below the left hemidiaphragm",
        },
        {
          label: "Never use the whoosh test or bubbling",
          detail: "Auscultating injected air has repeatedly been followed by fatal feeding into a lung",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Injection routes - site, needle, angle and volume",
      caption: "Site selection, not the drug, prevents the classic sciatic nerve injury.",
      columns: ["Route", "Site", "Needle and angle", "Maximum volume", "Typical use"],
      rows: [
        [
          "Intramuscular",
          "Ventrogluteal - the safest gluteal site",
          "23 G, 1-1.5 inch, at 90 degrees",
          "Up to 3-4 mL",
          "Large-volume or irritant drugs; far from the sciatic nerve",
        ],
        [
          "Intramuscular",
          "Deltoid, 2-3 finger-breadths below the acromion",
          "23 G, 1 inch, at 90 degrees",
          "1-2 mL",
          "Adult vaccines; avoid low or posterior placement",
        ],
        [
          "Intramuscular",
          "Vastus lateralis, anterolateral thigh",
          "23 G, 1 inch (25 G, 5/8 inch in infants), at 90 degrees",
          "2-3 mL, 1 mL in infants",
          "Infant immunisation and adrenaline in anaphylaxis at any age",
        ],
        [
          "Intramuscular - avoid",
          "Dorsogluteal upper outer quadrant",
          "23 G, 1.5 inch, at 90 degrees",
          "Up to 3 mL",
          "Traditional Indian site but risks sciatic nerve injury - prefer ventrogluteal",
        ],
        [
          "Subcutaneous",
          "Abdomen, outer thigh, upper outer arm",
          "25 G, 5/8 inch, at 45 degrees",
          "1-2 mL",
          "Insulin and low-molecular-weight heparin; rotate sites to avoid lipohypertrophy",
        ],
        [
          "Intradermal",
          "Volar forearm; left deltoid insertion for BCG",
          "26-27 G, at 10-15 degrees, bevel up",
          "0.1 mL",
          "Mantoux, BCG, intradermal rabies vaccine - must raise a blanched wheal",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Anaphylaxis after an injection",
      caption: "Every clinic that injects must be able to do this without looking anything up.",
      steps: [
        {
          label: "Recognise it within minutes",
          detail: "Urticaria, wheeze, stridor, angioedema, hypotension or collapse after the injection",
        },
        {
          label: "Adrenaline 1:1000, 0.5 mg IM into the thigh",
          detail:
            "Anterolateral thigh; child 0.01 mg/kg - 0.3 mL at 6-12 years, 0.15 mL under 6 years",
          tone: "good",
        },
        {
          label: "Repeat every 5 minutes as needed",
          detail: "Undiluted 1:1000 adrenaline is never given intravenously",
          tone: "warn",
        },
        {
          label: "Lie flat with the legs raised",
          detail: "Sit up if breathless, left lateral if pregnant",
        },
        {
          label: "Oxygen, IV access, rapid crystalloid bolus",
        },
        {
          label: "Adjuncts come after adrenaline, never instead",
          detail: "Antihistamine and hydrocortisone do not act quickly enough to save a life",
        },
        {
          label: "Transfer and observe 6 to 12 hours",
          detail: "Biphasic reactions",
        },
      ],
    },
  ],

  "surgery-office-preop-postop": [
    {
      kind: "ladder",
      heading: "ASA physical status classification",
      caption: "Graded on the patient, not the operation; the E suffix is added for an emergency.",
      steps: [
        {
          label: "ASA I - a normal healthy patient",
          detail: "Healthy, non-smoking, minimal or no alcohol; no routine tests for minor surgery",
        },
        {
          label: "ASA II - mild systemic disease",
          detail:
            "Current smoker, pregnancy, BMI 30-40, well-controlled diabetes or hypertension; optimise, targeted tests only",
        },
        {
          label: "ASA III - severe systemic disease",
          detail:
            "Substantive functional limitation: poorly controlled diabetes, COPD, BMI over 40, dialysis, MI or stroke over 3 months ago",
        },
        {
          label: "ASA IV - a constant threat to life",
          detail:
            "MI, stroke or coronary stent within 3 months, ongoing ischaemia, sepsis; defer elective surgery",
          tone: "warn",
        },
        {
          label: "ASA V - moribund patient",
          detail:
            "Not expected to survive without the operation - ruptured aneurysm, massive trauma; discuss ceilings of care",
        },
        {
          label: "E suffix - emergency",
          detail: "Delay would increase the threat to life or limb; roughly doubles or trebles the risk",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Pre-operative assessment in general practice",
      caption: "Investigations are directed by the patient, not ordered by ritual.",
      steps: [
        {
          label: "Assess functional capacity first",
          detail:
            "4 METs or more - two to three flights of stairs without stopping - needs no further cardiac testing before low or intermediate risk surgery",
          tone: "good",
        },
        {
          label: "Apply the Revised Cardiac Risk Index",
          detail:
            "High-risk surgery, ischaemic heart disease, heart failure, cerebrovascular disease, insulin-treated diabetes, creatinine over 2 mg/dL; 2 or more needs cardiology",
        },
        {
          label: "Check the timing since a cardiac event",
          detail:
            "Defer 60 days after MI, 1 month after a bare-metal and ideally 6 months after a drug-eluting stent, 3-6 months after a stroke",
          tone: "warn",
        },
        {
          label: "Order directed, not routine, investigations",
          detail:
            "No routine tests for ASA 1 minor surgery; ECG over 65 or in ASA 3-4; a chest radiograph is not a screening test",
        },
        {
          label: "Optimise, and give the surgery time",
          detail:
            "Iron rather than transfusion for anaemia, HbA1c below about 8-8.5 percent, smoking stopped 4-8 weeks before",
        },
        {
          label: "Write the perioperative drug plan",
          detail:
            "Omit metformin on the day, stop SGLT2 inhibitors 3 days before, continue aspirin and always with a stent",
        },
        {
          label: "Fasting and prophylaxis",
          detail:
            "6 hours solids, 4 hours breast milk, 2 hours clear fluids; single antibiotic dose within 60 minutes of incision, stopped by 24 hours",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Perioperative management of common drugs",
      caption: "The list an examiner works down; each line has a reason attached.",
      columns: ["Drug", "Before surgery", "Why", "Restart"],
      rows: [
        [
          "Aspirin",
          "Usually continued, and always with a coronary stent",
          "Stent thrombosis outweighs the bleeding risk",
          "Not stopped",
        ],
        [
          "Metformin",
          "Omit on the day of surgery; 48 hours if contrast or renal impairment",
          "Lactic acidosis with hypoperfusion or renal injury",
          "When eating and renal function is stable",
        ],
        [
          "SGLT2 inhibitor (empagliflozin, dapagliflozin)",
          "Stop at least 3 days before",
          "Euglycaemic diabetic ketoacidosis, easily missed perioperatively",
          "When eating normally and euvolaemic",
        ],
        [
          "Clopidogrel, prasugrel, ticagrelor",
          "Stop 5-7 days before major surgery, only after cardiology discussion",
          "Bleeding risk versus stent thrombosis",
          "24-48 hours after surgery as advised",
        ],
        [
          "Warfarin",
          "Stop 5 days before; INR the day before, target under 1.5",
          "Bridge with LMWH only for mechanical mitral valve, recent VTE or very high CHA2DS2-VASc",
          "Evening of surgery or when haemostasis is secure",
        ],
        [
          "Direct oral anticoagulant",
          "Stop 24-48 hours before; 72 hours for high bleeding risk or renal impairment",
          "Predictable short half-life, so no bridging needed",
          "24-72 hours after surgery by bleeding risk",
        ],
        [
          "Combined oral contraceptive or oestrogen HRT",
          "Stop 4 weeks before major surgery; arrange alternative contraception",
          "Venous thromboembolism risk",
          "2 weeks after full mobilisation",
        ],
        [
          "Long-term corticosteroid",
          "Continue and add stress cover: hydrocortisone 25-50 mg minor, 100 mg 8-hourly major",
          "Adrenal suppression and addisonian crisis",
          "Taper to the usual dose over 24-72 hours",
        ],
        [
          "Herbal preparations (garlic, ginkgo, ginseng)",
          "Stop about 7 days before",
          "Platelet inhibition and unpredictable bleeding",
          "After wound healing",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Postoperative fever by the day it starts",
      caption: "Wind, water, walking, wound and wonder drugs - the day narrows it more than any test.",
      steps: [
        {
          label: "Day 0 to 2 - wind",
          detail:
            "Atelectasis and the inflammatory response to surgery; very early severe fever suggests a necrotising wound infection or a transfusion or drug reaction",
        },
        {
          label: "Day 3 to 5 - water",
          detail: "Chest infection and urinary tract infection, particularly after catheterisation",
        },
        {
          label: "Day 4 to 6 - walking",
          detail: "Deep vein thrombosis and pulmonary embolism; do not wait for classical signs",
        },
        {
          label: "Day 5 to 7 - wound",
          detail:
            "Surgical site infection: open the wound, release pus, deep swab, pack to heal by secondary intention",
        },
        {
          label: "Day 5 to 10 - leak or deep collection",
          detail:
            "A persistent unexplained tachycardia after abdominal surgery is an anastomotic leak until proved otherwise",
          tone: "warn",
        },
        {
          label: "Beyond day 7 - wonder drugs",
          detail: "Drug fever, line sepsis, deep collection and Clostridioides difficile colitis",
        },
      ],
    },
  ],

  "surgery-office-procedural-sedation-ketamine": [
    {
      kind: "ladder",
      heading: "The ASA continuum of sedation depth",
      caption: "Sedation is a continuum, so plan to rescue the patient from one level deeper.",
      steps: [
        {
          label: "Minimal sedation (anxiolysis)",
          detail: "Normal response to verbal command; airway, ventilation and circulation unaffected",
        },
        {
          label: "Moderate sedation (conscious sedation)",
          detail: "Purposeful response to verbal or light tactile stimulation; no airway intervention required",
        },
        {
          label: "Deep sedation",
          detail:
            "Purposeful response only after repeated or painful stimulation - reflex withdrawal does not count; ventilation may be inadequate",
          tone: "warn",
        },
        {
          label: "General anaesthesia",
          detail: "Unarousable even to painful stimulation; airway intervention often required",
        },
        {
          label: "Dissociative sedation with ketamine",
          detail:
            "Sits OUTSIDE the continuum and is not dose-progressive: trance with an open vacant stare, catalepsy, reflexes preserved but not protective",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Ketamine dose by route and indication",
      caption: "IV onset 30 seconds, IM onset 3-5 minutes; there is no reversal agent.",
      columns: ["Route and indication", "Dose", "Onset", "Duration", "Note"],
      rows: [
        [
          "IV dissociative sedation - adult",
          "1-1.5 mg/kg over 30-60 seconds; top-up 0.5 mg/kg every 5-10 minutes",
          "30 seconds",
          "5-10 minutes; recovery 30-60 minutes",
          "A rapid push is the commonest cause of apnoea",
        ],
        [
          "IV dissociative sedation - child",
          "1.5-2 mg/kg over 30-60 seconds; top-up 0.5-1 mg/kg",
          "30 seconds",
          "5-10 minutes; recovery 30-60 minutes",
          "Children need more per kg and have far fewer emergence reactions",
        ],
        [
          "IM sedation, no venous access",
          "4-5 mg/kg; top-up 2-2.5 mg/kg",
          "3-5 minutes",
          "15-30 minutes; recovery 60-120 minutes",
          "Higher vomiting rate than IV; the field and disaster route",
        ],
        [
          "IM induction of anaesthesia",
          "5-10 mg/kg",
          "3-5 minutes",
          "20-30 minutes",
          "Anaesthesia without an anaesthetist; needs airway backup",
        ],
        [
          "IV induction or rapid sequence intubation",
          "1-2 mg/kg; reduce to 0.5-1 mg/kg in profound shock",
          "30 seconds",
          "5-10 minutes",
          "Agent of choice in shock, trauma and severe asthma",
        ],
        [
          "Sub-dissociative IV analgesia",
          "0.1-0.3 mg/kg over 10-15 minutes in 50-100 mL saline",
          "2-5 minutes",
          "20-60 minutes",
          "Never bolus at this dose - a rapid push causes dysphoria without analgesic gain",
        ],
        [
          "Intranasal",
          "Analgesia 0.5-1 mg/kg; sedation 3-6 mg/kg with an atomiser",
          "5-10 minutes",
          "30-60 minutes",
          "Bioavailability only 25-50 percent; useful for the needle-phobic child",
        ],
        [
          "Oral",
          "6-10 mg/kg as premedication, mixed in juice",
          "20-45 minutes",
          "60-120 minutes",
          "Bioavailability 16-20 percent from first-pass metabolism; slow and unpredictable",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Laryngospasm during ketamine sedation",
      caption: "About 1 in 300 sedations - this is why nobody sedates without suction and a bag.",
      steps: [
        {
          label: "Recognise: stridor or complete silence",
          detail: "Paradoxical chest movement and falling saturation",
          tone: "warn",
        },
        {
          label: "Stop the procedure and all stimulation",
        },
        {
          label: "Suction, then 100 percent oxygen",
        },
        {
          label: "Jaw thrust with the Larson manoeuvre",
          detail: "Firm bilateral pressure in the laryngospasm notch behind the ear lobule",
          tone: "good",
        },
        {
          label: "Bag-valve-mask with PEEP, gently",
        },
        {
          label: "Succinylcholine if it does not break",
          detail: "0.5-1 mg/kg IV, or 3-4 mg/kg IM if no access, with atropine, then intubate",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Ketamine complications - preventing and treating each",
      caption: "Nothing is given routinely; each adjunct answers a specific problem.",
      root: "Adverse effects of ketamine sedation",
      arms: [
        {
          label: "Emergence phenomena",
          steps: [
            "10-30 percent of adults, about 1.6 percent clinically important in children",
            "Forewarn and suggest a pleasant image; recover in a quiet, dimly lit, undisturbed area",
            "Midazolam 0.03-0.05 mg/kg IV in adults; routine prophylactic midazolam is not recommended in children",
          ],
        },
        {
          label: "Hypersalivation and bronchorrhoea",
          steps: [
            "Suction must be within reach; recover the patient laterally",
            "Routine prophylactic anticholinergics are no longer recommended",
            "Glycopyrrolate 4-5 microgram/kg IV, preferred over atropine 0.01-0.02 mg/kg, only if secretions are troublesome",
          ],
        },
        {
          label: "Laryngospasm",
          tone: "warn",
          steps: [
            "About 0.3 percent, or 1 in 300",
            "Avoid posterior pharyngeal stimulation and defer in active respiratory infection",
            "Larson manoeuvre, then bag-valve-mask with PEEP, then succinylcholine",
          ],
        },
        {
          label: "Vomiting",
          steps: [
            "8-12 percent overall, higher after IM and in older children and adolescents",
            "Usually late, in recovery, when protective reflexes have returned",
            "Ondansetron 0.1 mg/kg IV, maximum 4 mg; recover laterally with suction ready",
          ],
        },
        {
          label: "No reversal agent exists",
          steps: [
            "Naloxone reverses opioids, flumazenil reverses benzodiazepines",
            "Neither ketamine nor propofol has an antidote",
            "Absolute contraindications: age under 3 months, and known or suspected schizophrenia",
          ],
        },
      ],
    },
  ],

  "surgery-office-spinal-anaesthesia": [
    {
      kind: "flow",
      heading: "From skin to CSF - the midline approach",
      caption: "Total skin-to-CSF depth is usually 4-6 cm in an adult.",
      steps: [
        { label: "Skin and subcutaneous fat" },
        { label: "Supraspinous ligament" },
        { label: "Interspinous ligament" },
        {
          label: "Ligamentum flavum",
          detail: "Gives the characteristic increase in resistance",
        },
        {
          label: "Epidural space",
          detail: "Fat, lymphatics and the Batson venous plexus, engorged in pregnancy",
        },
        { label: "Dura mater", detail: "The final give or click" },
        { label: "Arachnoid mater" },
        {
          label: "Subarachnoid space - free flow of clear CSF",
          detail:
            "Inject at L3-L4 or L4-L5, never above L2: the cord ends at the lower border of L1 and only the cauda equina lies below",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Spinal versus epidural anaesthesia",
      caption: "Same region, different space, different needle and a hundredfold difference in dose.",
      columns: ["Feature", "Spinal (subarachnoid block)", "Epidural"],
      rows: [
        [
          "Site of injection",
          "Subarachnoid space, into CSF, below L2 in the adult",
          "Epidural space, at any level from cervical to caudal",
        ],
        [
          "End point",
          "Free flow of clear CSF from the needle hub",
          "Loss of resistance to saline or air at the ligamentum flavum",
        ],
        ["Needle", "25-27G pencil-point or Quincke", "16-18G Tuohy, usually with a catheter"],
        [
          "Dose of drug",
          "Small - 2-3 mL of 0.5 percent bupivacaine (10-15 mg)",
          "Large - 15-20 mL of 0.5 percent bupivacaine (75-100 mg)",
        ],
        ["Onset", "2-5 minutes, fixed by 15-20 minutes", "15-20 minutes"],
        [
          "Quality of block",
          "Dense, reliable, profound motor block",
          "Segmental, may be patchy or unilateral, motor block titratable",
        ],
        [
          "Duration",
          "Fixed by the drug, 1.5-3 hours",
          "Indefinite - topped up or infused through the catheter",
        ],
        ["Hypotension", "Rapid in onset and more severe", "Gradual, easier to manage"],
        [
          "Post-dural puncture headache",
          "0.5-5 percent depending on the needle",
          "Rare, but up to 50 percent after accidental puncture by the Tuohy needle",
        ],
        [
          "Typical use",
          "Caesarean section, lower limb, perineal and urological surgery",
          "Labour analgesia, postoperative analgesia, thoracic and abdominal surgery, chronic pain",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "High or total spinal",
      caption: "An airway and circulation emergency; full recovery is the rule if perfusion is kept up.",
      steps: [
        {
          label: "Recognise the ascending block",
          detail:
            "Numbness and weakness of the hands (C8-T1), dyspnoea, weak voice, then apnoea, dilated pupils and unconsciousness",
          tone: "warn",
        },
        { label: "100 percent oxygen and call for help" },
        {
          label: "Intubate and ventilate with cricoid pressure",
        },
        {
          label: "Fluids, vasopressors, atropine, adrenaline",
          detail: "Atropine 0.6 mg, ephedrine 6 mg, adrenaline 10-100 microgram - escalate early, not late",
        },
        {
          label: "Never sit the patient up",
          detail: "It removes what venous return remains and can cause cardiac arrest",
          tone: "warn",
        },
        {
          label: "Deliver the baby if pregnant",
          detail: "Sedate once the blood pressure has been restored",
        },
        {
          label: "Ventilate until the block regresses",
          detail: "Usually 1 to 3 hours of supportive ventilation",
          tone: "good",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Complications of spinal anaesthesia",
      caption: "Grouped by when they appear, with the number that goes with each.",
      root: "After the intrathecal injection",
      arms: [
        {
          label: "During the block",
          steps: [
            "Hypotension in 15-33 percent, up to 80 percent at caesarean section without prophylaxis",
            "Bradycardia in 10-15 percent from block of the T1-T4 cardioaccelerator fibres",
            "Nausea and vomiting after a spinal is hypotension until proved otherwise",
            "Phenylephrine 50-100 microgram first line; ephedrine 6 mg when there is bradycardia too",
          ],
        },
        {
          label: "Post-dural puncture headache",
          steps: [
            "0.5-2 percent with a 25-27G pencil point, up to 30-40 percent with a large cutting needle",
            "Fronto-occipital, postural, begins within 24-48 hours, with neck stiffness, photophobia or diplopia",
            "Analgesia, caffeine 300-500 mg, oral fluids, abdominal binder - bed rest prevents nothing",
            "Epidural blood patch with 15-20 mL of autologous blood cures 60-90 percent",
          ],
        },
        {
          label: "Vertebral canal haematoma",
          tone: "warn",
          steps: [
            "About 1 in 150,000-220,000, far commoner with unsafe anticoagulant timing",
            "Severe back pain, unexpectedly prolonged or recurring motor block, sphincter disturbance",
            "Emergency MRI and surgical decompression within 8-12 hours",
            "ASRA 2018: wait 12 hours after prophylactic and 24 hours after therapeutic low-molecular-weight heparin",
          ],
        },
        {
          label: "Later and lesser",
          steps: [
            "Failed or patchy block, shivering, urinary retention, backache in 10-25 percent",
            "Pruritus, and delayed respiratory depression peaking at 6-12 hours after intrathecal morphine",
            "Transient neurological symptoms in up to 30 percent - why 5 percent lignocaine was abandoned",
          ],
        },
      ],
    },
  ],

  "surgery-office-blood-transfusion": [
    {
      kind: "branch",
      heading: "When to transfuse red cells",
      caption: "Restrictive transfusion is equal or better; the two-unit reflex is the commonest error.",
      root: "Decision to give packed red cells",
      arms: [
        {
          label: "No cardiac disease - threshold 7 g/dL",
          tone: "good",
          steps: [
            "Most stable hospitalised adults, critical care, septic shock and acute upper gastrointestinal bleeding",
            "TRICC, TRISS and the Villanueva trial all favour restriction",
            "Post-transfusion target 7-9 g/dL",
          ],
        },
        {
          label: "Coronary circulation at risk - 8 g/dL",
          steps: [
            "Known cardiovascular disease, acute coronary syndrome, and the perioperative setting (FOCUS)",
            "The MINT trial 2023 found no benefit from restriction in myocardial infarction",
            "State the 8 g/dL rule and note that many cardiologists accept nearer 10 g/dL in acute MI",
          ],
        },
        {
          label: "Acute major blood loss - judge clinically",
          tone: "warn",
          steps: [
            "The early haemoglobin lags by hours because whole blood is lost isovolaemically",
            "Loss over 30-40 percent of volume, or persistent shock after 1-2 L of crystalloid",
            "Massive transfusion protocol: red cells, plasma and platelets in a 1:1:1 ratio",
            "Tranexamic acid 1 g over 10 minutes then 1 g over 8 hours, within 3 hours of injury",
          ],
        },
        {
          label: "One unit at a time, then reassess",
          steps: [
            "A single unit raises the haemoglobin by about 1 g/dL in a 70 kg adult",
            "Recheck the haemoglobin and the symptoms before prescribing another",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Blood components at a glance",
      caption: "One donation treats three or four patients, which is why components replaced whole blood.",
      columns: ["Component", "Storage", "Shelf life", "Dose and effect", "Main indication"],
      rows: [
        [
          "Whole blood",
          "2-6 degrees C",
          "35 days in CPDA-1",
          "1 unit raises haemoglobin about 1 g/dL",
          "Exchange transfusion; massive haemorrhage where components are unavailable",
        ],
        [
          "Packed red cells",
          "2-6 degrees C",
          "35 days in CPDA-1, 42 days in an additive solution",
          "1 unit raises haemoglobin about 1 g/dL; children 10-15 mL/kg",
          "Symptomatic anaemia and acute blood loss",
        ],
        [
          "Fresh frozen plasma",
          "Minus 30 degrees C or colder; thaw at 37 degrees C",
          "1 year frozen; use within 4 hours of thawing",
          "10-15 mL/kg, about 4 units in an adult, lifting factor levels by roughly 20 percent",
          "Multiple factor deficiency with bleeding, massive transfusion, warfarin reversal when PCC is unavailable",
        ],
        [
          "Random donor platelets",
          "20-24 degrees C with continuous gentle agitation - never refrigerated",
          "5 days",
          "1 unit raises the count 5,000-10,000 per microlitre; adult dose 4-6 units",
          "Bleeding, or prophylaxis below 10,000, below 20,000 with fever, below 50,000 for surgery",
        ],
        [
          "Single donor apheresis platelets",
          "20-24 degrees C with agitation",
          "5 days",
          "1 unit raises the count 30,000-50,000 per microlitre, equal to 6 random donor units",
          "As for random donor platelets, where donor exposure or HLA matching matters",
        ],
        [
          "Cryoprecipitate",
          "Minus 30 degrees C or colder",
          "1 year; use within 4 hours of thawing",
          "1 unit per 5-10 kg, about 10 units in an adult, raising fibrinogen 50-100 mg/dL",
          "Fibrinogen below 1.5 g/L with bleeding (below 2 g/L in obstetric haemorrhage), DIC",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Safe administration - the checks that prevent the fatal error",
      caption: "ABO incompatibility is almost always a clerical error, and 10-15 mL can kill.",
      steps: [
        {
          label: "Positive identification at the bedside",
          detail: "Check the patient against the pack and the compatibility label, with a second person",
          tone: "good",
        },
        {
          label: "Dedicated set with a 170-200 micron filter",
          detail: "Change every 12 hours or after 4 units; 16-18 G cannula in an adult, 22-23 G in a child",
        },
        {
          label: "Normal saline only in the line",
          detail:
            "Ringer lactate contains calcium and clots the unit, 5 percent dextrose is hypotonic and haemolyses it; no drug of any kind",
          tone: "warn",
        },
        {
          label: "Run the first 15 minutes slowly, in view",
          detail:
            "About 2 mL per minute - haemolysis, anaphylaxis and bacterial sepsis nearly always declare themselves in that window",
        },
        {
          label: "Complete every unit within 4 hours",
          detail:
            "Red cells over 90-120 minutes, platelets and plasma over about 30 minutes; return a unit not started within 30 minutes of issue",
        },
        {
          label: "Observations at the set times",
          detail: "Before starting, at 15 minutes, hourly, at completion and 4 hours afterwards",
        },
        {
          label: "Irradiate cellular components at 25 Gy",
          detail:
            "Required for any directed donation from a blood relative and for the profoundly immunosuppressed - the only prevention of transfusion-associated GVHD",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Transfusion reactions compared",
      caption: "Timing plus one discriminating feature separates them; the action follows.",
      columns: ["Reaction", "Timing", "Discriminating feature", "Immediate action"],
      rows: [
        [
          "Acute haemolytic reaction",
          "Minutes to 1 hour; may follow 10-15 mL",
          "Loin and chest pain, pain at the drip site, haemoglobinuria, hypotension, DIC",
          "Stop; new giving set with saline; recheck identity; send DAT and repeat crossmatch; urine output above 1-1.5 mL/kg/hour",
        ],
        [
          "Febrile non-haemolytic reaction",
          "During or up to 4 hours after",
          "Temperature rise of 1 degree C or more with rigors, no hypotension or haemolysis",
          "Slow or stop; paracetamol; exclude haemolysis and sepsis; prevent by leucodepletion",
        ],
        [
          "Allergic or urticarial reaction",
          "Minutes to hours",
          "Itching, urticaria and flushing without systemic upset",
          "Stop and give an antihistamine; if urticaria alone settles, the same unit may be restarted slowly",
        ],
        [
          "Anaphylaxis",
          "Within minutes",
          "Bronchospasm, stridor, angioedema and profound hypotension in an IgA-deficient recipient",
          "Stop; adrenaline 0.5 mg of 1:1000 IM, oxygen, fluids; washed or IgA-deficient components in future",
        ],
        [
          "TRALI",
          "Within 6 hours, usually 1-2",
          "Hypoxaemia with bilateral infiltrates but a NORMAL jugular venous pressure and BNP",
          "Stop; oxygen and ventilatory support; do NOT give diuretics; report the donor for deferral",
        ],
        [
          "TACO",
          "During or within 6 hours",
          "Dyspnoea with hypertension, raised JVP, positive fluid balance and a raised BNP",
          "Stop or slow; sit up, oxygen, intravenous furosemide; prevent with single units and a slow rate",
        ],
        [
          "Bacterial contamination",
          "Minutes to hours",
          "High fever, rigors, vomiting and profound shock; staphylococci in warm-stored platelets",
          "Stop; culture patient and pack; broad-spectrum antibiotics and resuscitation at once",
        ],
        [
          "Citrate toxicity and hyperkalaemia",
          "During rapid or massive transfusion",
          "Perioral tingling, tremor, prolonged QT, arrhythmia",
          "Calcium gluconate 10 percent, 10 mL slowly intravenously; fresh or washed cells in neonates and renal failure",
        ],
        [
          "Delayed haemolytic reaction",
          "3-14 days",
          "Unexplained fall in haemoglobin, jaundice, spherocytes, positive DAT (Kidd, Rh, Kell, Duffy)",
          "Supportive; record the antibody, issue an antibody card, antigen-negative blood for life",
        ],
        [
          "Transfusion-associated GVHD",
          "4-30 days",
          "Fever, maculopapular rash, diarrhoea, deranged liver enzymes, pancytopenia",
          "Over 90 percent fatal and untreatable - 25 Gy irradiation of cellular components is the whole answer",
        ],
      ],
    },
  ],

  "surgery-office-tracheostomy": [
    {
      kind: "branch",
      heading: "Indications for tracheostomy, in four groups",
      caption: "Write the four headings first, then fill each with examples.",
      root: "Why a tracheostomy is done",
      arms: [
        {
          label: "1. Upper airway obstruction",
          steps: [
            "Infective: diphtheritic membranous laryngitis, Ludwig angina, retropharyngeal abscess, epiglottitis",
            "Traumatic: laryngeal fracture, cut-throat injury, maxillofacial fractures, inhalational burns",
            "Neoplastic: carcinoma of the larynx, hypopharynx, tongue base or thyroid",
            "Neurological: bilateral abductor cord palsy, classically after total thyroidectomy",
          ],
        },
        {
          label: "2. Prolonged ventilation",
          steps: [
            "The commonest modern indication; shortens weaning, spares the larynx, reduces sedation",
            "Classical teaching is after 7-10 days of translaryngeal intubation",
            "TracMan 2013 found no 30-day mortality benefit for tracheostomy within 4 days",
            "Do it when extubation clearly will not happen within the next week",
          ],
        },
        {
          label: "3. Pulmonary toilet",
          steps: [
            "Retained secretions the patient cannot clear: coma, head injury, high cervical cord injury",
            "Tetanus, organophosphate poisoning, snake envenomation, Guillain-Barre syndrome, bulbar palsy",
            "A cuffed tube here also protects the lungs from aspiration",
          ],
        },
        {
          label: "4. Part of head and neck surgery",
          steps: [
            "Permanent end stoma after total laryngectomy",
            "Temporary cover for swelling after major oral or mandibular resection with flap reconstruction",
            "Before radiotherapy to a bulky laryngeal tumour where oedema is expected",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Emergency airway options compared",
      caption: "A tracheostomy is not the answer to an acutely obstructed, hypoxic patient.",
      columns: ["Feature", "Endotracheal intubation", "Cricothyroidotomy", "Tracheostomy"],
      rows: [
        [
          "Site",
          "Through the glottis from mouth or nose",
          "Cricothyroid membrane, between thyroid and cricoid cartilages",
          "Anterior tracheal wall, 2nd-3rd rings, below the thyroid isthmus",
        ],
        [
          "Time to secure",
          "Seconds to a minute in trained hands",
          "Under a minute - the fastest surgical airway",
          "15-30 minutes as a proper operation",
        ],
        [
          "Setting",
          "First choice everywhere; needs a laryngoscope and a passable glottis",
          "Cannot intubate, cannot oxygenate; supraglottic obstruction or trauma",
          "Elective or semi-elective, ideally in theatre over an existing airway",
        ],
        [
          "Main contraindication",
          "Obstruction at or above the glottis that cannot be passed",
          "Children under about 12 years - use a needle cricothyroidotomy with a 14-16 G cannula",
          "It is not the answer to an acutely obstructed, hypoxic, thrashing patient",
        ],
        [
          "Duration tolerated",
          "Days; laryngeal injury and stenosis rise after 1-2 weeks",
          "Days only - convert or close by about 3-7 days",
          "Weeks to permanently",
        ],
        [
          "Key complication",
          "Laryngeal oedema, cord ulceration, subglottic stenosis",
          "Subglottic stenosis, voice change, bleeding from the cricothyroid vessels",
          "Blockage or displacement early; tracheal stenosis and vascular fistula late",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Blocked or displaced tracheostomy - the NTSP algorithm",
      caption: "Tube blockage by inspissated secretions is the commonest and most lethal ward emergency.",
      steps: [
        { label: "Call for help" },
        {
          label: "Look, listen and feel at mouth AND stoma",
          detail: "Use waveform capnography",
        },
        {
          label: "High-flow oxygen to the face and the stoma",
          tone: "good",
        },
        {
          label: "Remove the cap or valve and the inner tube",
          detail: "This alone relieves most blockages, which are usually inspissated secretions",
        },
        {
          label: "Pass a suction catheter",
          detail: "If it passes, the tube is patent - suction and ventilate through it",
          tone: "decision",
        },
        {
          label: "If it will not pass, deflate the cuff",
          detail: "Reassess before doing anything more invasive",
        },
        {
          label: "Still not breathing - remove the tube",
        },
        {
          label: "Rescue by the upper airway if it is patent",
          detail:
            "Occlude the stoma and bag-mask, or intubate orally with the cuff advanced past the stoma; a laryngectomee mouth is a dead end, so ventilate at the stoma",
        },
        {
          label: "Never force a tube blindly into a stoma",
          detail:
            "Before day 5-7 the tract is not epithelialised; railroad over a suction catheter or bougie, with a dilator and the stay sutures",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Bleeding from a tracheostomy after 48 hours",
      caption: "A self-limiting sentinel bleed precedes catastrophic haemorrhage in about half of cases.",
      steps: [
        {
          label: "Any bleed after 48 hours is a sentinel bleed",
          detail:
            "Tracheo-innominate artery fistula, 0.3-0.7 percent of tracheostomies, 3 days to 6 weeks, mortality over 50 percent",
          tone: "warn",
        },
        {
          label: "Hyperinflate the cuff to tamponade",
        },
        {
          label: "Cross-match blood and call theatre",
          detail: "Keep the patient where the airway can be secured; prepare for bronchoscopy and exploration",
        },
        {
          label: "If torrential, remove the tube and compress",
          detail:
            "A finger through the stoma pressing the artery against the back of the manubrium - the Utley manoeuvre",
        },
        {
          label: "Intubate orally past the bleeding point",
          detail: "Cuff advanced beyond the fistula",
        },
        {
          label: "Sternotomy and ligate the innominate artery",
          tone: "good",
        },
        {
          label: "Do not blame stomal granulation",
          detail:
            "Granulation oozes rather than bleeding briskly; cauterising with silver nitrate instead is the classic fatal error",
          tone: "warn",
        },
      ],
    },
  ],
};

export default diagrams;
