import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "surgery-office-wound-suturing",
  title: "Wound care, local anaesthesia and suturing",
  oneLiner:
    "A traumatic wound is assessed for depth, contamination, tissue loss and neurovascular injury, cleaned and debrided, closed primarily only if it is clean and less than about 6 hours old (12-24 hours on the face), and every patient additionally needs tetanus prophylaxis, rabies risk assessment and a documented local anaesthetic dose that stays below 3 mg/kg of plain lignocaine or 7 mg/kg with adrenaline.",
  frequency: "core",
  keywords: [
    "laceration",
    "suturing",
    "lignocaine",
    "lidocaine",
    "xylocaine",
    "local anaesthetic toxicity",
    "LAST",
    "Intralipid",
    "lipid emulsion",
    "adrenaline",
    "tetanus toxoid",
    "tetanus immunoglobulin",
    "anti-rabies vaccine",
    "delayed primary closure",
    "debridement",
    "Langer lines",
    "nylon",
    "polyglactin",
    "vicryl",
    "wound classification",
  ],
  sections: [
    {
      heading: "Assessing the wound before you touch a needle",
      points: [
        "**Take the mechanism, the time and the environment first:** a clean kitchen knife cut at 30 minutes and a threshing-machine injury in a paddy field at 8 hours are managed completely differently even if they look the same.",
        "Record the **time of injury** in the notes, because the decision to close primarily hinges on it: the classical golden period for primary closure is **6 hours for the limbs and trunk and up to 12-24 hours for the well-vascularised face and scalp**.",
        "Examine **distal to the wound before anaesthetising it**: motor power, sensation (two-point discrimination in the finger pulp), capillary refill and the distal pulse. A tendon or nerve injury missed at the first dressing becomes a medicolegal problem later.",
        "Explore the wound in a bloodless field after anaesthesia, through its full depth and through the full range of movement of the part - **a tendon divided in flexion retracts and is invisible when the finger is examined extended**.",
        "**Look for a retained foreign body** in every wound caused by glass, wood, thorn or a road-traffic fall; radio-opaque glass and metal are seen on a plain radiograph, while wood and thorn are not and need ultrasound or exploration.",
        "Assess the **skin cover**: a flap based distally, a degloved area, or a wound with true tissue loss cannot simply be pulled together and belongs to a surgeon.",
        "Classify the wound as clean, clean-contaminated, contaminated or dirty (CDC classes I to IV) - this single label predicts the infection rate and drives the antibiotic and closure decision.",
      ],
    },
    {
      heading: "Local anaesthesia: doses, adjuncts and the ones you must not mix up",
      points: [
        "**Lignocaine (lidocaine) plain: maximum 3 mg/kg**, and **with adrenaline 7 mg/kg**. Absolute adult ceilings commonly quoted are 200 mg plain and 500 mg with adrenaline. (Some American texts allow 4.5 mg/kg plain; quote 3 mg/kg in an Indian examination and you will never be marked wrong.)",
        "**Do the arithmetic out loud in the viva:** 1% lignocaine contains 10 mg/mL, 2% contains 20 mg/mL. A 60 kg adult may therefore have 180 mg = **18 mL of 1% plain**, or 420 mg = **42 mL of 1% with adrenaline**, and exactly half those volumes if the 2% solution is used.",
        "**Bupivacaine: 2 mg/kg plain (adult maximum 150 mg) and 2 mg/kg with adrenaline (up to about 175-200 mg).** It is slower in onset (5-10 minutes) but lasts 4-8 hours, and it is the **most cardiotoxic** agent in routine use, so the margin for error is smaller.",
        "**Adrenaline 1:200,000 = 5 microgram/mL**; it prolongs the block, more than doubles the safe dose, and gives a bloodless field. Classical teaching forbids it in the **end-artery territories - digits, penis, ear lobe, tip of the nose and skin flaps** - and that remains the safe examination answer, even though modern series show commercial lignocaine with adrenaline to be safe in normal digits.",
        "**Reduce the maximum dose** in the elderly, in infants (calculate on weight, never on volume), in hepatic disease, cardiac failure and hypoproteinaemia, and remember that the dose is per procedure and not per limb.",
        "**Make the injection less painful:** use the smallest needle (26-30 G), warm the solution to body temperature, buffer 9 mL of lignocaine with 1 mL of 8.4% sodium bicarbonate, inject slowly through the wound edge rather than through intact skin, and inject subdermally rather than intradermally.",
        "**Always aspirate before injecting** and never inject into an inflamed or infected field: acidic tissue inactivates the base form of the drug and injection spreads the infection. Use a **field block or a ring block** around such an area instead.",
      ],
    },
    {
      heading: "Local anaesthetic systemic toxicity - recognition and treatment",
      points: [
        "**Toxicity is nearly always from accidental intravascular injection or from exceeding the calculated dose**, so the two preventive steps are aspiration and arithmetic.",
        "**Early (CNS excitation):** circumoral and tongue numbness, a metallic taste, tinnitus, light-headedness, blurred vision, slurred speech, agitation and muscle twitching. **These are the warning signs - stop injecting at this point.**",
        "**Late:** generalised convulsions, then CNS depression with coma and respiratory arrest; cardiovascular toxicity follows with hypotension, bradycardia, QRS widening, ventricular tachycardia, ventricular fibrillation and asystole. **Bupivacaine causes cardiac arrest with little warning and the arrest is notoriously refractory.**",
        "**Immediate management:** stop the injection, call for help, give **100% oxygen** and support the airway, secure IV access, and treat seizures with a benzodiazepine (midazolam 1-2 mg IV or diazepam 5-10 mg IV). Avoid large doses of propofol in a haemodynamically unstable patient.",
        "**Lipid emulsion (Intralipid 20%) is the specific antidote:** bolus **1.5 mL/kg over 1 minute** (about 100 mL in a 70 kg adult), then an infusion of **15 mL/kg/hour**. The bolus may be repeated up to twice at 5-minute intervals and the infusion doubled to 30 mL/kg/hour if the circulation is not restored; **do not exceed a cumulative 12 mL/kg**.",
        "In cardiac arrest, continue CPR - **resuscitation may need to be prolonged beyond an hour** - use adrenaline in small doses (under 1 microgram/kg), and **avoid lignocaine, vasopressin, calcium channel blockers and beta-blockers**.",
        "Every clinic that injects local anaesthetic must keep oxygen, a self-inflating bag, adrenaline, a benzodiazepine and, ideally, 20% lipid emulsion, with the LAST protocol displayed on the wall.",
      ],
    },
    {
      heading: "Cleaning, debridement and the decision not to close",
      points: [
        "**Irrigation is the single most effective step in preventing wound infection:** 50-100 mL of normal saline per centimetre of wound length, delivered under pressure through a 20 mL syringe and an 18 G cannula. Potable tap water is an acceptable alternative and is not inferior in trials.",
        "**Do not pour hydrogen peroxide, spirit or undiluted povidone-iodine into an open wound** - all are cytotoxic to fibroblasts and delay healing. Antiseptic belongs on the intact skin around the wound.",
        "**Debride** all devitalised, contused and contaminated tissue until healthy bleeding edges are reached; excise ragged edges minimally on the face, more freely on the trunk. Retained dead tissue is what turns a wound septic.",
        "**Do not close primarily:** wounds more than 6 hours old on the limbs or trunk, mammalian bites (particularly cat, human and any bite of the hand), puncture and stab wounds, grossly contaminated or crush wounds, wounds with a retained foreign body, wounds already showing signs of infection, and any wound in a poorly perfused or immunosuppressed limb.",
        "**Facial wounds are the exception** and may be closed up to 24 hours after meticulous cleaning because of the rich blood supply; a facial dog bite is also commonly closed loosely after irrigation for cosmetic reasons, with antibiotic cover.",
        "**Delayed primary closure** is the correct compromise for a contaminated wound: clean, debride, pack open with saline gauze, and close on **day 3 to 5** if there is no infection. Say this phrase in the viva - it earns the mark that simple wound toilet does not.",
        "**Prophylactic antibiotics are not needed for a clean, well-irrigated wound.** They are indicated for bites, wounds of the hand and foot, open fractures, wounds involving cartilage, tendon or joint, contaminated wounds, and in diabetes or immunosuppression: **amoxicillin-clavulanate 625 mg PO TDS for 5 days** is the standard cover for bites.",
      ],
    },
    {
      heading: "Suturing technique a candidate should be able to recite",
      points: [
        "**Consent and preparation:** explain the procedure, the scar, the alternative of tissue adhesive or steri-strips and the need for suture removal; take written consent; confirm the tetanus status; position the patient supine (a faint on a stool is a real risk); wash hands, wear gloves, paint with povidone-iodine and drape.",
        "**Anaesthetise, wait 3-5 minutes, and test the block with a needle prick before starting** - starting too early is the commonest reason a patient decides suturing is barbaric.",
        "**Hold the needle holder** at the junction of the middle and posterior thirds of the needle, enter the skin at 90 degrees, take equal bites of equal depth on the two sides, and **take a bite that is wider at the base than at the surface** so the edges evert.",
        "**Bite size and spacing follow the rule of thumb:** 2-3 mm from the edge and 3-5 mm apart on the face, 5 mm from the edge and 5-10 mm apart on the trunk and limbs. **Approximate, do not strangulate** - the commonest technical error is tying too tight, which produces the cross-hatched railway-track scar.",
        "**Choose the technique to the wound:** simple interrupted for most wounds; vertical mattress for a gaping wound or where eversion is difficult; horizontal mattress for a fragile scalp or a bleeding edge; subcuticular absorbable for a clean linear surgical wound where cosmesis matters; a deep absorbable layer to close dead space in a deep wound.",
        "**Orientate the incision or the excision along Langer lines and the relaxed skin tension lines** to reduce scar spread; on the face this follows the natural creases.",
        "**Afterwards, document:** date and time of injury and of the procedure, the wound described in centimetres and its site, the neurovascular examination, the anaesthetic agent, concentration and total dose in mg, the number and type of sutures, tetanus and rabies prophylaxis given, the antibiotic, the dressing, the date for suture removal and the instructions given. In a medicolegal or assault wound this record is the evidence.",
        "**Aftercare advice to the patient:** keep dry for 48 hours, then gentle washing and drying is permitted; return earlier if there is increasing pain, redness spreading beyond the margin, discharge, fever or the wound gapes; and expect the scar to remain red for 3-6 months.",
      ],
    },
    {
      heading: "Tetanus and rabies prophylaxis at the same sitting",
      points: [
        "**Clean minor wound:** if fewer than 3 doses of tetanus toxoid or the history is unknown, give the vaccine (Td/TT) and complete the primary course; if 3 or more doses, give a booster only if the last dose was more than 10 years ago. **Tetanus immunoglobulin is not required for a clean minor wound.**",
        "**All other wounds (dirty, deep, puncture, burns, crush, devitalised tissue, contamination with soil or faeces, more than 6 hours old):** if fewer than 3 doses or unknown, give the vaccine **plus human tetanus immunoglobulin 250 IU IM** (500 IU if the wound is more than 24 hours old, heavily contaminated or the patient weighs more than 90 kg), at a different site with a different syringe; if 3 or more doses, give a booster if the last dose was more than 5 years ago.",
        "Equine antitetanus serum 1500 IU is still used where human immunoglobulin is unavailable, but it needs a test dose and carries a real risk of anaphylaxis and serum sickness.",
        "**Animal bite - category matters:** category I (touching, feeding, licks on intact skin) needs no vaccine; category II (nibbling of uncovered skin, minor scratch without bleeding) needs wound care plus anti-rabies vaccine; category III (single or multiple transdermal bites, licks on broken skin or mucosa, any bat exposure) needs wound care, vaccine **and rabies immunoglobulin**.",
        "**Wash a bite wound for a full 15 minutes with soap and running water**, then apply a virucidal agent such as povidone-iodine. This mechanical step alone reduces the risk substantially and is the first thing to say in the viva.",
        "Vaccine schedules: intramuscular Essen 1-1-1-1-1 on days 0, 3, 7, 14 and 28, or the updated Thai Red Cross intradermal 2-2-2-0-2 (0.1 mL per site) on days 0, 3, 7 and 28 - the intradermal route is used in Indian anti-rabies clinics because it is dose-sparing.",
        "**Rabies immunoglobulin is infiltrated into and around the wound** - human RIG 20 IU/kg or equine RIG 40 IU/kg, as much as anatomically possible into the wound. **A category III bite should not be sutured**; if closure is unavoidable for cosmesis, wait a few hours after infiltrating the immunoglobulin and place loose apposition sutures only.",
      ],
    },
  ],
  tables: [
    {
      heading: "Suture material and size by site, with removal time",
      columns: ["Site", "Suture material and size", "Remove on day"],
      rows: [
        ["Face and eyelid", "5-0 or 6-0 monofilament nylon or polypropylene", "4-5"],
        ["Ear and nose", "5-0 nylon", "4-5"],
        ["Scalp", "3-0 nylon or staples", "7-10"],
        ["Neck", "4-0 or 5-0 nylon", "5-7"],
        ["Trunk and abdomen", "3-0 nylon", "7-10"],
        ["Upper limb and dorsum of hand", "4-0 nylon", "10"],
        ["Palm, sole and over a joint", "3-0 nylon", "12-14"],
        ["Lower limb", "3-0 or 4-0 nylon", "10-14"],
        ["Oral mucosa and tongue", "3-0 or 4-0 polyglactin 910 or chromic catgut", "Absorbs, no removal"],
        ["Child, face, low-tension wound", "Tissue adhesive or 5-0 fast-absorbing gut", "No removal"],
      ],
    },
    {
      heading: "Local anaesthetic maximum safe doses",
      columns: ["Agent", "Maximum dose", "Adult ceiling", "Onset and duration"],
      rows: [
        ["Lignocaine plain", "3 mg/kg", "200 mg (20 mL of 1%)", "2-5 min; 30-60 min"],
        ["Lignocaine with adrenaline 1:200,000", "7 mg/kg", "500 mg (50 mL of 1%)", "2-5 min; 2-6 hours"],
        ["Bupivacaine plain", "2 mg/kg", "150 mg (30 mL of 0.5%)", "5-10 min; 4-8 hours"],
        ["Bupivacaine with adrenaline", "2 mg/kg (up to about 3 mg/kg)", "175-200 mg", "5-10 min; 6-8 hours"],
        ["Ropivacaine", "3 mg/kg", "200-250 mg", "10-15 min; 4-6 hours"],
        ["Concentration conversion", "1% = 10 mg/mL; 2% = 20 mg/mL; 0.5% = 5 mg/mL", "Adrenaline 1:200,000 = 5 microgram/mL", "-"],
      ],
    },
    {
      heading: "Surgical wound classification (CDC) and expected infection rate",
      columns: ["Class", "Definition", "Examples", "Infection rate"],
      rows: [
        ["I Clean", "Uninfected, no inflammation, respiratory, alimentary and genitourinary tracts not entered, closed primarily", "Thyroidectomy, hernia repair, clean incised wound sutured within 6 hours", "Under 2%"],
        ["II Clean-contaminated", "Respiratory, alimentary or genitourinary tract entered under controlled conditions without unusual contamination", "Elective cholecystectomy, appendicectomy without perforation", "3-11%"],
        ["III Contaminated", "Open fresh accidental wound, major break in sterile technique, gross spillage from the gut, acute non-purulent inflammation", "Road traffic laceration presenting at 8 hours, gross faecal spill", "10-17%"],
        ["IV Dirty or infected", "Old traumatic wound with devitalised tissue, existing clinical infection or perforated viscus", "Neglected wound, abscess, faecal peritonitis", "Over 27%"],
      ],
    },
  ],
  redFlags: [
    "Loss of sensation, weakness or an inability to move a joint distal to the wound - tendon or nerve division, refer before closing.",
    "A wound over a joint that discharges clear or blood-stained fluid on movement, or air in the joint on radiograph - open joint injury, admit.",
    "Pain far out of proportion to the wound, tense woody swelling, crepitus, dishwater discharge or skin bullae - necrotising soft tissue infection, resuscitate and refer for emergency debridement.",
    "Human bite over a metacarpophalangeal joint (a clenched-fist injury) - assume joint penetration and refer; never close it.",
    "Circumoral tingling, metallic taste, tinnitus or twitching during local anaesthetic injection - stop injecting; systemic toxicity is beginning.",
    "A wound with an arterial bleed that recurs when pressure is released, or an expanding haematoma - do not probe blindly, apply pressure and refer.",
    "Any high-pressure injection injury (paint gun, grease gun) however small the entry point - a surgical emergency needing wide debridement.",
    "Trismus, neck stiffness or risus sardonicus in a patient with a neglected wound - established tetanus, admit to a dark quiet room and refer to intensive care.",
  ],
  pearls: [
    "The three questions that decide everything: how long ago, how dirty, and is anything under the skin divided.",
    "Say the dose in milligrams, not millilitres: 1% lignocaine is 10 mg/mL, and the plain maximum is 3 mg/kg while the adrenaline maximum is 7 mg/kg.",
    "Never inject local anaesthetic into infected or inflamed tissue - it will not work and it spreads the infection; block around it.",
    "Irrigation volume, not antibiotic choice, is what prevents wound infection - 50 to 100 mL of saline per centimetre of wound.",
    "Delayed primary closure at day 3 to 5 is the answer for a contaminated wound; primary closure of such a wound is the classic examination trap.",
    "A dog bite is washed for 15 minutes, immunoglobulin is infiltrated into the wound, and the wound is left open - suturing a category III bite is wrong.",
    "Tetanus immunoglobulin is needed only for a tetanus-prone wound in someone with fewer than three documented doses; a booster alone is enough after three doses if the last was under 5 years ago.",
    "Take equal bites of equal depth from the two edges, wider at the base than at the surface, and tie only until the edges kiss - the tissue swells later.",
    "Remove facial sutures at 4-5 days to avoid stitch marks, and support the wound afterwards with adhesive strips.",
  ],
  theory: [
    {
      id: "surgery-office-wound-suturing-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 28-year-old farmer presents to your clinic 7 hours after sustaining a 6 cm lacerated wound over the anterior aspect of the left leg while working in a field. Describe your assessment and management, including anaesthesia, wound care and prophylaxis.",
      openingLines: [
        "This is a contaminated (CDC class III) traumatic wound presenting beyond the 6-hour golden period, sustained in a soil-contaminated agricultural environment, and it is therefore a tetanus-prone wound that should not be closed primarily.",
        "The objectives are to exclude deeper injury, to convert a contaminated wound into a clean one by irrigation and debridement, to plan delayed primary closure, and to give tetanus prophylaxis with documentation.",
      ],
      answer: [
        {
          heading: "1. Assessment",
          points: [
            "History: exact time of injury, mechanism, the object involved, environment, first aid already applied (including any local application of mud, cow dung or turmeric), immunisation history, diabetes, and current medication.",
            "General examination for shock and other injuries; examine the wound for site, size in centimetres, depth, edges, contamination, tissue loss and foreign bodies.",
            "**Neurovascular assessment distal to the wound before anaesthesia** - dorsalis pedis and posterior tibial pulses, sensation over the foot, and active movement of the ankle and toes.",
            "Look specifically for tendon injury (tibialis anterior, extensor hallucis longus), an underlying fracture, and periosteal exposure; obtain a radiograph if a fracture or a radio-opaque foreign body is suspected.",
          ],
        },
        {
          heading: "2. Anaesthesia",
          points: [
            "Infiltration with 1% lignocaine through the wound edges, calculated by weight: **maximum 3 mg/kg plain, or 7 mg/kg with adrenaline**; for a 60 kg man this is 18 mL of 1% plain or 42 mL of 1% with adrenaline.",
            "Aspirate before each injection, inject slowly, and wait 3-5 minutes; test the block before starting.",
            "Keep oxygen, a benzodiazepine and 20% lipid emulsion available, and recognise early toxicity (circumoral numbness, metallic taste, tinnitus, twitching).",
          ],
        },
        {
          heading: "3. Wound toilet and debridement",
          points: [
            "Irrigate with 50-100 mL of normal saline per centimetre of wound under pressure - at least 500 mL for this wound.",
            "Excise devitalised skin edges, remove all soil, grass and grit, and explore the depth in a bloodless field.",
            "Avoid hydrogen peroxide and spirit within the wound; use povidone-iodine on the surrounding intact skin only.",
          ],
        },
        {
          heading: "4. Closure decision",
          points: [
            "**This wound is not closed primarily** because it is more than 6 hours old and contaminated with soil.",
            "Pack loosely with saline-moistened gauze, apply a bulky dressing, elevate and immobilise the limb.",
            "Inspect at 48 hours; if there is no infection, perform **delayed primary closure on day 3 to 5** under aseptic conditions, or allow healing by secondary intention if the wound is small.",
          ],
        },
        {
          heading: "5. Prophylaxis, drugs and follow-up",
          points: [
            "**Tetanus:** if fewer than three previous doses or the history is uncertain, give tetanus toxoid or Td **plus human tetanus immunoglobulin 250 IU IM** at a separate site; if he has had three or more doses, a booster suffices if the last was more than 5 years ago.",
            "Antibiotics are justified in a contaminated wound: amoxicillin-clavulanate 625 mg PO TDS for 5 days, or cloxacillin with metronidazole if there is deep soil contamination.",
            "Analgesia with paracetamol 1 g QID with or without an NSAID; elevate the limb, avoid weight-bearing initially.",
            "Advise on the warning signs of infection and of tetanus, and give a written review date.",
            "Document the time of injury, the wound description, the neurovascular findings, the anaesthetic dose in milligrams, the prophylaxis given and the advice - this record is medicolegally important in an injury case.",
          ],
        },
      ],
      mustDraw: [
        "A table of the four CDC wound classes with an example and the expected infection rate for each.",
        "A flow chart of the closure decision: clean and under 6 hours means primary closure; contaminated or over 6 hours means wound toilet, pack open and delayed primary closure at day 3 to 5; infected means secondary intention.",
      ],
      markSplit: [
        { part: "History, examination including neurovascular assessment", marks: 2 },
        { part: "Local anaesthesia with correct doses and toxicity awareness", marks: 2 },
        { part: "Irrigation and debridement", marks: 2 },
        { part: "Closure decision and delayed primary closure", marks: 2 },
        { part: "Tetanus prophylaxis, antibiotics, follow-up and documentation", marks: 2 },
      ],
      keywords: ["contaminated wound", "delayed primary closure", "tetanus immunoglobulin", "lignocaine 3 mg/kg", "irrigation"],
    },
    {
      id: "surgery-office-wound-suturing-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on local anaesthetic systemic toxicity: causes, clinical features and management.",
      openingLines: [
        "Local anaesthetic systemic toxicity is a life-threatening reaction caused by a high plasma concentration of local anaesthetic, most often from inadvertent intravascular injection or from exceeding the calculated maximum dose.",
        "It is entirely preventable by weight-based dose calculation, aspiration before injection and incremental slow injection.",
      ],
      answer: [
        {
          heading: "Causes and risk factors",
          points: [
            "Accidental intravascular (intravenous or intra-arterial) injection - the commonest mechanism.",
            "Exceeding the maximum dose: lignocaine 3 mg/kg plain and 7 mg/kg with adrenaline; bupivacaine 2 mg/kg.",
            "Injection into a highly vascular area (intercostal, scalp, mucosa) where absorption is rapid.",
            "Patient factors: extremes of age, low body weight, hepatic and cardiac failure, hypoproteinaemia, acidosis and hypoxia.",
            "Agent: bupivacaine is far more cardiotoxic than lignocaine because it binds sodium channels avidly and dissociates slowly.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "**Early CNS excitation:** perioral and tongue numbness, metallic taste, tinnitus, dizziness, visual disturbance, slurred speech, agitation and muscle twitching.",
            "**Progression:** generalised tonic-clonic convulsions, then CNS depression, coma and apnoea.",
            "**Cardiovascular:** hypotension, bradycardia, conduction delay with a widened QRS, ventricular tachycardia, ventricular fibrillation and asystole.",
            "With bupivacaine, cardiovascular collapse may be the first sign, without the CNS prodrome.",
          ],
        },
        {
          heading: "Management",
          points: [
            "**Stop the injection immediately** and call for help.",
            "Airway, 100% oxygen, ventilate if needed - hypoxia and acidosis worsen toxicity.",
            "Control seizures with midazolam 1-2 mg IV or diazepam 5-10 mg IV; avoid large doses of propofol if the patient is unstable.",
            "**20% lipid emulsion: bolus 1.5 mL/kg over 1 minute, then infusion 15 mL/kg/hour**; repeat the bolus up to twice at 5-minute intervals and double the infusion rate if the circulation is not restored, to a cumulative maximum of 12 mL/kg.",
            "If in arrest, continue CPR - it may need to be prolonged for over an hour; use adrenaline in small doses (under 1 microgram/kg) and **avoid lignocaine, vasopressin, calcium channel blockers and beta-blockers**.",
            "Transfer to a facility with cardiopulmonary bypass capability if available, and observe for at least 12 hours after an event with cardiovascular involvement.",
          ],
        },
      ],
      mustDraw: [
        "A table of maximum safe doses of lignocaine and bupivacaine, with and without adrenaline, in mg/kg and as a volume of 1% solution.",
      ],
      markSplit: [
        { part: "Definition, causes and maximum doses", marks: 1.5 },
        { part: "Clinical features in sequence", marks: 1.5 },
        { part: "Management including lipid emulsion dose", marks: 2 },
      ],
      keywords: ["LAST", "lipid emulsion", "Intralipid", "bupivacaine cardiotoxicity", "3 mg/kg"],
    },
    {
      id: "surgery-office-wound-suturing-t3",
      paper: "III",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Differentiate between healing by primary, secondary and delayed primary intention, and state the situations in which each is chosen.",
      openingLines: [
        "Wound healing follows the same biological phases - haemostasis, inflammation, proliferation and remodelling - but the mode of closure determines the amount of granulation tissue formed and the final scar.",
        "The choice is decided by contamination, tissue loss and the time since injury, not by the appearance of the wound alone.",
      ],
      answer: [
        {
          heading: "Primary intention (first intention)",
          points: [
            "Clean wound with minimal tissue loss, edges apposed by sutures, staples, adhesive strips or glue within the golden period.",
            "Minimal granulation tissue, rapid epithelialisation within 48 hours, fine linear scar, minimal contraction.",
            "Chosen for clean incised wounds, elective surgical incisions and clean lacerations under 6 hours old (up to 24 hours on the face).",
          ],
        },
        {
          heading: "Secondary intention",
          points: [
            "Wound left open to granulate, contract and epithelialise from the edges.",
            "Abundant granulation tissue, marked wound contraction, slow healing and a broad ugly scar with a risk of contracture.",
            "Chosen for infected wounds, abscess cavities after drainage, wounds with significant tissue loss, pressure ulcers and pilonidal sinus wounds.",
          ],
        },
        {
          heading: "Delayed primary intention (tertiary or third intention)",
          points: [
            "Wound is cleaned, debrided and left open with a moist dressing, then sutured at **day 3 to 5** once it is demonstrably free of infection.",
            "Healing is then like primary intention with a better scar than secondary healing and a much lower infection rate than inappropriate primary closure.",
            "Chosen for contaminated wounds, wounds older than 6 hours, bites (other than selected facial wounds) and after debridement of a war or crush injury.",
          ],
        },
      ],
      mustDraw: [
        "A three-column table comparing tissue loss, granulation tissue, contraction, time to heal, final scar and typical indication.",
      ],
      markSplit: [
        { part: "Primary intention", marks: 1.5 },
        { part: "Secondary intention", marks: 1.5 },
        { part: "Delayed primary closure and indications", marks: 2 },
      ],
      keywords: ["primary intention", "secondary intention", "delayed primary closure", "granulation", "contraction"],
    },
  ],
  mcqs: [
    {
      id: "surgery-office-wound-suturing-q1",
      stem: "A 60 kg adult needs infiltration anaesthesia for a scalp laceration. Only plain 2% lignocaine is available. What is the maximum volume you may inject?",
      options: ["4.5 mL", "9 mL", "18 mL", "36 mL", "42 mL"],
      answer: 1,
      explanation:
        "The maximum dose of plain lignocaine is 3 mg/kg, which is 180 mg for a 60 kg adult; 2% lignocaine contains 20 mg/mL, so 180 divided by 20 gives 9 mL. Eighteen millilitres would be the correct volume if the 1% solution were used, and answering 18 is the classic error of forgetting the concentration. Forty-two millilitres corresponds to the 7 mg/kg adrenaline-containing limit calculated on 1% solution and would deliver 840 mg here, a lethal dose. Four and a half millilitres under-doses by applying the limit to a 30 kg weight.",
      difficulty: "moderate",
    },
    {
      id: "surgery-office-wound-suturing-q2",
      stem: "While infiltrating a forearm wound a patient complains of tingling around the mouth, a metallic taste and ringing in the ears. What is the immediate action?",
      options: [
        "Continue the injection more slowly as these are expected sensations",
        "Stop the injection, give oxygen, and prepare a benzodiazepine and lipid emulsion",
        "Give intravenous hydrocortisone 200 mg for a suspected allergic reaction",
        "Give intramuscular adrenaline 0.5 mg for anaphylaxis",
        "Give intravenous atropine 0.6 mg",
      ],
      answer: 1,
      explanation:
        "Perioral tingling, a metallic taste and tinnitus are the classic early central nervous system features of local anaesthetic systemic toxicity, and the injection must be stopped at once while oxygen, a benzodiazepine for seizures and 20% lipid emulsion are made ready. Continuing to inject allows progression to convulsions and cardiac arrest. These features are not those of an allergic reaction, which would show urticaria, angioedema, bronchospasm and hypotension, so hydrocortisone and adrenaline treat the wrong diagnosis. Atropine addresses bradycardia, which is a late cardiovascular feature and is not present.",
      difficulty: "easy",
    },
    {
      id: "surgery-office-wound-suturing-q3",
      stem: "A 34-year-old man is bitten on the right hand by a stray dog 2 hours ago; there are two deep puncture wounds with bleeding. He has never received rabies vaccine. What is the correct wound management?",
      options: [
        "Suture the wounds after cleaning, give anti-rabies vaccine and antibiotics",
        "Wash for 15 minutes with soap and running water, infiltrate rabies immunoglobulin into the wounds, leave the wounds open, and start the vaccine course",
        "Give anti-rabies vaccine alone since the wounds are only punctures",
        "Debride, close primarily and observe the dog for 10 days before starting vaccine",
        "Apply povidone-iodine only and review in 48 hours",
      ],
      answer: 1,
      explanation:
        "These are category III exposures, requiring thorough washing for 15 minutes with soap and running water, infiltration of rabies immunoglobulin into and around the wound, and a full vaccine course; hand bites are also highly prone to infection and must be left open with antibiotic cover. Suturing a category III bite traps virus and bacteria and is specifically contraindicated. Vaccine alone omits the passive immunity needed before antibodies develop in a previously unvaccinated person. Waiting to observe the animal before starting prophylaxis is unsafe, since rabies is uniformly fatal once symptoms appear.",
      difficulty: "moderate",
    },
    {
      id: "surgery-office-wound-suturing-q4",
      stem: "A 45-year-old labourer presents 9 hours after a crush laceration of the forearm contaminated with mud. He has had a complete primary course of tetanus toxoid, the last dose 7 years ago. Regarding tetanus prophylaxis, what should be given?",
      options: [
        "Nothing, since he has completed a primary course",
        "Tetanus toxoid booster only",
        "Human tetanus immunoglobulin 250 IU only",
        "Tetanus toxoid booster plus human tetanus immunoglobulin 250 IU",
        "A fresh three-dose primary course with immunoglobulin",
      ],
      answer: 1,
      explanation:
        "For a tetanus-prone wound in a patient who has had three or more documented doses, a booster is indicated when the last dose was more than 5 years ago, and immunoglobulin is not required because immunological memory is intact. Giving nothing ignores the 5-year rule that applies to dirty wounds. Immunoglobulin, alone or with the booster, is reserved for those with fewer than three documented doses or an unknown history and simply adds cost and risk here. A fresh primary course is unnecessary in someone already primed.",
      difficulty: "moderate",
    },
    {
      id: "surgery-office-wound-suturing-q5",
      stem: "A 22-year-old woman has a clean 3 cm laceration over the cheek sustained 4 hours ago in a fall. Which suture and removal time is most appropriate?",
      options: [
        "3-0 silk, remove at day 10",
        "6-0 monofilament nylon, remove at day 4-5",
        "2-0 polypropylene, remove at day 7",
        "3-0 polyglactin 910, no removal",
        "Staples, remove at day 7",
      ],
      answer: 1,
      explanation:
        "Facial wounds are closed with fine 5-0 or 6-0 monofilament and the sutures removed at 4-5 days, before epithelium tracks along the suture and produces permanent cross-hatch marks, with adhesive strip support afterwards. Silk is braided, causes more tissue reaction and infection, and 3-0 is far too thick for the face. A 2-0 suture left for 7 days would leave conspicuous marks. Absorbable polyglactin in facial skin causes a prolonged inflammatory reaction, and staples are used on the scalp and trunk, not the face.",
      difficulty: "easy",
    },
    {
      id: "surgery-office-wound-suturing-q6",
      stem: "A 30-year-old man has a 5 cm laceration on the calf from a fall on a village road, presenting at 10 hours with mud in the wound but no cellulitis. After irrigation and debridement, what is the correct approach to closure?",
      options: [
        "Primary closure with interrupted nylon and oral antibiotics",
        "Pack open, review at 48 hours, and close on day 3 to 5 if clean",
        "Apply tissue adhesive to the edges",
        "Close with a subcuticular absorbable suture to avoid removal",
        "Leave open permanently to heal by secondary intention regardless of appearance",
      ],
      answer: 1,
      explanation:
        "A contaminated wound presenting beyond the golden period is managed by wound toilet and delayed primary closure at day 3 to 5, which gives a near-primary scar with a fraction of the infection risk. Primary closure of a mud-contaminated 10-hour wound converts it into a closed-space infection and risks tetanus and clostridial myonecrosis. Tissue adhesive and subcuticular closure are simply forms of primary closure and share that risk. Committing the wound to secondary intention when it may be safely closed on day 4 gives an unnecessarily broad and contracted scar.",
      difficulty: "moderate",
    },
    {
      id: "surgery-office-wound-suturing-q7",
      stem: "Which of the following is the strongest reason to avoid adding adrenaline to lignocaine for a wound on the pulp of the index finger, as taught in the standard examination answer?",
      options: [
        "Adrenaline reduces the duration of the block",
        "Adrenaline in an end-artery territory may cause digital ischaemia",
        "Adrenaline lowers the maximum safe dose of lignocaine",
        "Adrenaline causes methaemoglobinaemia",
        "Adrenaline makes the injection painless and masks nerve injury",
      ],
      answer: 1,
      explanation:
        "The classical teaching is that vasoconstriction in an end-artery territory - digits, penis, ear lobe, nose tip and skin flaps - risks ischaemic necrosis, and that is the answer expected in an Indian examination even though modern series show commercial lignocaine with adrenaline to be safe in normal digits. Adrenaline prolongs rather than shortens the block, and it raises rather than lowers the maximum safe dose from 3 to 7 mg/kg. Methaemoglobinaemia is a complication of prilocaine and of benzocaine, not of adrenaline. Adrenaline does not mask nerve injury; the distal neurological examination is performed before any injection.",
      difficulty: "easy",
    },
    {
      id: "surgery-office-wound-suturing-q8",
      stem: "Six hours after a hand laceration was sutured, a 40-year-old diabetic returns with severe pain out of proportion to the wound, tense swelling of the forearm, crepitus and a thin foul grey discharge. What is the immediate priority?",
      options: [
        "Remove one or two sutures and continue oral antibiotics",
        "Resuscitate, start broad-spectrum intravenous antibiotics and refer urgently for emergency surgical debridement",
        "Send a wound swab and review in 24 hours",
        "Apply a magnesium sulphate dressing and elevate the limb",
        "Start insulin and reassess the wound the next morning",
      ],
      answer: 1,
      explanation:
        "Pain out of proportion, tense swelling, crepitus and dishwater discharge in a diabetic indicate a necrotising soft tissue infection, which is a surgical emergency in which survival depends on early radical debridement alongside fluids and broad-spectrum antibiotics. Removing a suture and continuing oral antibiotics treats a simple wound infection and will not touch necrotising fasciitis. Waiting a day for a swab result allows a fatal progression measured in hours. A dressing and elevation, or attention to glycaemia alone, delay the only intervention that saves the limb and the life.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "surgery-office-wound-suturing-c1",
      front: "Maximum dose of plain lignocaine and of lignocaine with adrenaline.",
      back: "3 mg/kg plain (adult ceiling about 200 mg) and 7 mg/kg with adrenaline (about 500 mg).",
    },
    {
      id: "surgery-office-wound-suturing-c2",
      front: "How many mg in 1 mL of 1% and 2% lignocaine?",
      back: "1% = 10 mg/mL, 2% = 20 mg/mL, 0.5% = 5 mg/mL. Adrenaline 1:200,000 = 5 microgram/mL.",
    },
    {
      id: "surgery-office-wound-suturing-c3",
      front: "Maximum dose of bupivacaine.",
      back: "2 mg/kg (adult ceiling 150 mg plain, up to about 175-200 mg with adrenaline); the most cardiotoxic agent in routine use.",
    },
    {
      id: "surgery-office-wound-suturing-c4",
      front: "Earliest features of local anaesthetic systemic toxicity.",
      back: "Perioral and tongue numbness, metallic taste, tinnitus, dizziness, slurred speech and twitching - stop injecting immediately.",
    },
    {
      id: "surgery-office-wound-suturing-c5",
      front: "Lipid emulsion regimen for local anaesthetic toxicity.",
      back: "20% lipid emulsion 1.5 mL/kg bolus over 1 minute, then 15 mL/kg/hour; up to two repeat boluses, double the infusion if unstable, cumulative maximum 12 mL/kg.",
    },
    {
      id: "surgery-office-wound-suturing-c6",
      front: "The golden period for primary closure.",
      back: "About 6 hours for limbs and trunk; up to 12-24 hours on the face and scalp because of the rich blood supply.",
    },
    {
      id: "surgery-office-wound-suturing-c7",
      front: "When is delayed primary closure done, and on which day?",
      back: "Contaminated wounds, wounds over 6 hours old and bites: clean, debride, pack open and close on day 3 to 5 if there is no infection.",
    },
    {
      id: "surgery-office-wound-suturing-c8",
      front: "How much irrigation fluid does a wound need?",
      back: "50-100 mL of normal saline (or potable tap water) per centimetre of wound length, delivered under pressure.",
    },
    {
      id: "surgery-office-wound-suturing-c9",
      front: "Suture removal times: face, scalp, trunk, limb, sole.",
      back: "Face 4-5 days, scalp 7-10, trunk 7-10, upper limb 10, lower limb 10-14, palm and sole 12-14 days.",
    },
    {
      id: "surgery-office-wound-suturing-c10",
      front: "Tetanus prophylaxis for a dirty wound in someone with under 3 doses.",
      back: "Tetanus toxoid or Td plus human tetanus immunoglobulin 250 IU IM at a different site (500 IU if over 24 hours old, heavily contaminated or over 90 kg).",
    },
    {
      id: "surgery-office-wound-suturing-c11",
      front: "The four CDC wound classes with infection rates.",
      back: "I Clean under 2%; II Clean-contaminated 3-11%; III Contaminated 10-17%; IV Dirty over 27%.",
    },
    {
      id: "surgery-office-wound-suturing-c12",
      front: "Rabies category III exposure - the three steps.",
      back: "Wash 15 minutes with soap and running water, infiltrate rabies immunoglobulin (human 20 IU/kg, equine 40 IU/kg) into the wound, and give the full vaccine course; do not suture.",
    },
  ],
  references: [
    "Bailey and Love Short Practice of Surgery, 28th edition, 2023 - wounds, tissue repair and scars",
    "SRB Manual of Surgery, 6th edition, 2019 - wounds, sutures and suture materials",
    "National Rabies Control Programme, National Guidelines on Rabies Prophylaxis, NCDC, MoHFW, 2019",
    "WHO Expert Consultation on Rabies, Third Report, 2018",
    "Association of Anaesthetists Guideline: Management of Severe Local Anaesthetic Toxicity, 2010 (and AAGBI Safety Guideline updates)",
    "CDC Guideline for the Prevention of Surgical Site Infection, 2017",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "surgery-office-case-1",
    title: "A 46-year-old woman with a 4 cm lump in the right breast",
    kind: "short",
    subjectId: "surgery-office",
    opening:
      "A 46-year-old premenopausal homemaker presents with a painless lump in the right breast that she noticed 2 months ago while bathing and which she feels has grown; there is no nipple discharge, she has noticed no skin change, and her mother was treated for breast cancer at the age of 58.",
    minutes: 15,
    frequency: "core",
    sections: [
      {
        heading: "History: the questions that have to be asked before the breast is touched",
        points: [
          "Establish the **duration, how the lump was noticed, whether it has grown, whether it is painful and whether it changes with the menstrual cycle**; a lump that is painless, progressive and unchanged by the cycle is the pattern of a carcinoma, while cyclical pain and fluctuation suggest fibrocystic change.",
          "Ask specifically about **nipple discharge** (spontaneous or expressed, single duct or multiple ducts, blood-stained, serous or milky), nipple retraction or eczema, skin dimpling, and any lump in the axilla or the opposite breast.",
          "Take the **risk-factor history in one sweep**: age at menarche, parity and age at first full-term pregnancy, breastfeeding, menopausal status and the date of the last menstrual period, use of oral contraceptives or hormone replacement, previous breast lumps or biopsies, previous chest irradiation, alcohol, obesity, and the family history of breast and ovarian cancer in first-degree relatives with the age at diagnosis.",
          "Screen for **symptoms of spread**: bone pain or backache, breathlessness or cough, right hypochondrial pain or jaundice, abdominal distension, headache or vomiting, and loss of weight or appetite.",
          "Record the comorbidities and drugs that will matter to the surgeon and the anaesthetist - diabetes, hypertension, cardiac disease, anticoagulants - and note her occupation, the support at home and what she herself believes the lump to be, because the second half of this consultation is going to be about breaking news.",
        ],
      },
      {
        heading: "Inspection and palpation: the sequence the examiner is watching for",
        points: [
          "Explain, obtain consent, provide a **chaperone**, expose the patient to the waist and examine her first **sitting upright**, inspecting both breasts with the arms by the side, the arms raised above the head, the hands pressed on the hips to contract pectoralis major, and finally leaning forward.",
          "On inspection describe **asymmetry, a visible lump, skin dimpling or tethering, peau d'orange, dilated veins, ulceration, and the nipples** - level, retraction, deviation, destruction or eczema - and remember that dimpling that appears only on raising the arms is the earliest sign of skin tethering.",
          "Palpate the **normal breast first**, then the affected side, with the patient supine and the arm behind the head so the breast flattens over the chest wall, using the flat of the fingers in all four quadrants, beneath the nipple and areola, and in the axillary tail.",
          "Describe the lump in the fixed order: **site** (right breast, upper outer quadrant, 3 cm from the nipple at the 10 o'clock position), **size** (4 x 3 cm), **shape and surface** (irregular, nodular), **margins** (ill defined), **consistency** (hard), **tenderness** (none), and **temperature** (normal).",
          "Press the areola gently towards the nipple to look for discharge and note its colour and the duct of origin; then compare the two nipples for recent retraction.",
        ],
      },
      {
        heading: "Fixity, the axilla and completing the examination",
        points: [
          "Test **fixity to the skin** by pinching the skin over the lump - free movement of the skin means no attachment, puckering means tethering by the ligaments of Cooper, and inability to pinch the skin at all means the lump is fixed to skin.",
          "Test **fixity to pectoralis major** by moving the lump in two planes with the muscle relaxed and again with the patient pressing her hands on her hips: mobility that is lost on contraction means the lump is fixed to the muscle, and a lump immobile even with the muscle relaxed is fixed to the chest wall.",
          "Examine the **axilla with the arm supported** by your other hand so the muscles relax, and feel all five groups - anterior (pectoral), posterior (subscapular), lateral (brachial), central and apical - then the supraclavicular fossa; describe nodes by number, size, consistency, and whether they are mobile, fixed or matted.",
          "Complete the examination with the **opposite breast and axilla**, the liver for hepatomegaly, the spine for percussion tenderness, the chest for a pleural effusion, and the arm for lymphoedema.",
          "Finish by covering the patient, thanking her and summarising the findings aloud in the same order, ending with a diagram showing the site and size of the lump relative to the nipple.",
        ],
      },
      {
        heading: "Triple assessment: the phrase that earns the mark",
        points: [
          "**Every discrete breast lump in a woman over 35 is evaluated by triple assessment - clinical examination, imaging and pathology** - irrespective of how benign it feels, because clinical examination alone misses about a tenth of cancers.",
          "Imaging is **bilateral mammography** (craniocaudal and mediolateral oblique views) over the age of 35-40, with **ultrasound** of both breasts and axillae to separate solid from cystic, to characterise the lump and the nodes, and to guide the biopsy; under 35 the dense breast makes ultrasound the first-line study.",
          "Pathology is **ultrasound-guided core needle biopsy with a 14 G needle**, which gives histology, distinguishes in-situ from invasive disease, and provides the grade and the oestrogen receptor, progesterone receptor, HER2 and Ki-67 status; fine needle aspiration cytology is quicker and cheaper but cannot make that distinction, and is now reserved for cystic lesions and for the axillary node.",
          "Mammographic features of malignancy are an **irregular spiculated dense mass, clustered pleomorphic microcalcification and architectural distortion**, reported on the BI-RADS scale: BI-RADS 1 and 2 are normal or benign, 3 is probably benign with short-interval follow-up, and **4 and 5 need biopsy**.",
          "When all three components agree the accuracy is over 99%; **discordance between any two mandates a further biopsy**, usually an excision biopsy, never reassurance.",
        ],
      },
      {
        heading: "What the family physician arranges and how the referral is made",
        points: [
          "In the clinic today the family physician does **not** aspirate the lump blind, does not excise it, and does not prescribe antibiotics and review in a month; a hard irregular lump at 46 is cancer until proved otherwise.",
          "Arrange and, where possible, obtain **bilateral mammography with ultrasound of both breasts and axillae** before the surgical appointment so that the first specialist visit is not wasted, together with a complete blood count, liver function tests with alkaline phosphatase, serum calcium, creatinine, random blood sugar and a chest radiograph.",
          "Make an **urgent referral to a breast surgeon or surgical oncologist to be seen within 2 weeks**, by telephone as well as by letter, choosing a centre that can complete the core biopsy and offer surgery, chemotherapy and radiotherapy under one roof.",
          "The **referral letter** is structured: identifiers and date, the presenting complaint with duration, the examination findings in the standard description with a diagram and the clinical stage, the risk factors and family history, comorbidities and drugs, the investigations done with the reports attached, exactly what the patient and family have been told, and the specific question - urgent triple assessment and definitive management of a suspected right breast carcinoma.",
          "Check her eligibility for a **state or national health-insurance scheme** for cancer care, give her a written plan with the date of the appointment, and fix a date for her to come back to you with the reports so that the loop closes even if the hospital does not write back.",
        ],
      },
      {
        heading: "Breaking the news in the same consultation",
        points: [
          "Tell her in plain words that **the lump needs urgent tests to find out whether it is cancer**; neither say that it is cancer before a biopsy nor say there is nothing to worry about, because both destroy trust when the report arrives.",
          "Use the **SPIKES** frame: a private setting, find out what she already suspects, ask how much she wants to know, give the information in small pieces without jargon, respond to the emotion, and end with a written summary and plan.",
          "Anticipate the questions she will ask: whether the breast will be removed (breast conservation is possible for many 4 cm tumours, especially after neoadjuvant chemotherapy), what it will cost, whether her daughters are at risk, and how long treatment takes.",
          "Offer to involve a relative if she wishes, arrange for a nurse or counsellor if one exists, and give her a telephone number for questions before the appointment.",
        ],
      },
      {
        heading: "Staging at the bedside: what the description translates into",
        points: [
          "By **TNM**, T1 is 2 cm or less, **T2 is more than 2 cm up to 5 cm**, T3 is more than 5 cm, and T4 is any size fixed to the chest wall (T4a), involving the skin with ulceration, satellite nodules or peau d'orange (T4b), both (T4c), or inflammatory carcinoma (T4d).",
          "N1 is mobile ipsilateral level I or II axillary nodes, N2 is fixed or matted axillary nodes or clinically apparent internal mammary nodes, and N3 is infraclavicular, supraclavicular or combined internal mammary and axillary nodes.",
          "A 4 cm lump with a single mobile axillary node is therefore **T2 N1 M0, stage IIB**, which is early, operable breast cancer; by the older Manchester classification it is stage II.",
          "Early breast cancer means stage I and II; locally advanced disease means stage III (T3-T4 or N2-N3), which is treated with neoadjuvant chemotherapy first; stage IV is metastatic and is palliated.",
          "A bone scan, CT of the chest and abdomen or a PET-CT is **not** routine for stage II disease and is reserved for stage III, for symptoms of spread, or for a raised alkaline phosphatase or calcium.",
        ],
      },
    ],
    summaryStatement:
      "A 46-year-old premenopausal woman with a first-degree family history of breast cancer presents with a 2-month history of a painless, progressively enlarging 4 x 3 cm hard, irregular, ill-defined, non-tender lump in the upper outer quadrant of the right breast that is neither tethered to the skin nor fixed to pectoralis major, with a single 1.5 cm mobile node in the right anterior axillary group, no nipple discharge, a normal left breast and no clinical evidence of distant spread; the working diagnosis is carcinoma of the right breast, clinically T2 N1 M0 (stage IIB), and she needs urgent triple assessment and referral to a breast surgeon within 2 weeks.",
    differential: [
      {
        diagnosis: "Carcinoma of the breast",
        forIt: "Age 46, a painless hard irregular ill-defined lump that has grown over 2 months, a palpable axillary node and a first-degree family history.",
        againstIt: "Nothing on clinical grounds reliably excludes it; the absence of skin or nipple change only means it is early, which is exactly why triple assessment is mandatory.",
      },
      {
        diagnosis: "Fibroadenoma",
        forIt: "A discrete, painless lump that moves within the breast.",
        againstIt: "Fibroadenoma is a tumour of the 15-30 age group, is firm and rubbery with a smooth lobulated surface and slips away from the fingers, rarely reaches 4 cm, and is not accompanied by an axillary node; a new one at 46 is unusual.",
      },
      {
        diagnosis: "Fibrocystic change or a breast cyst",
        forIt: "The commonest cause of a breast lump between 40 and 50, and a large tense cyst can feel firm.",
        againstIt: "Cysts are smooth, tense, often tender, may vary with the cycle and are usually multiple or bilateral, and they do not produce an axillary node; ultrasound settles the question in a minute and aspiration collapses the cyst.",
      },
      {
        diagnosis: "Phyllodes tumour",
        forIt: "A rapidly enlarging large lump in a woman in her forties.",
        againstIt: "Phyllodes tumours are typically smooth, bosselated and mobile with stretched shiny skin over them rather than hard and ill defined, and they seldom involve the axillary nodes; only the core biopsy separates the two.",
      },
    ],
    investigations: [
      {
        test: "Bilateral mammography (craniocaudal and mediolateral oblique views)",
        why: "First-line imaging over the age of 40 for the lump, for occult disease in the same breast and for the contralateral breast, and the baseline for future follow-up.",
        expected: "An irregular, spiculated, dense mass with clustered pleomorphic microcalcification in the upper outer quadrant, reported as BI-RADS 4 or 5.",
      },
      {
        test: "Ultrasound of both breasts and both axillae",
        why: "Separates solid from cystic, characterises the lump, examines the axillary nodes and guides the core biopsy.",
        expected: "A hypoechoic, irregular, taller-than-wide solid mass with posterior acoustic shadowing; a node with cortical thickening over 3 mm or loss of the fatty hilum is suspicious.",
      },
      {
        test: "Ultrasound-guided core needle biopsy (14 G, three to five cores)",
        why: "Gives the histological diagnosis, distinguishes in-situ from invasive carcinoma, and provides the grade and the ER, PR, HER2 and Ki-67 status on which the whole treatment plan is built.",
        expected: "Invasive carcinoma of no special type (ductal), grade 2, with the receptor status reported.",
      },
      {
        test: "Fine needle aspiration cytology of the suspicious axillary node",
        why: "Cytological proof of nodal metastasis changes the axillary surgery from a sentinel node biopsy to an axillary dissection and may prompt neoadjuvant therapy.",
        expected: "Malignant epithelial cells if the node is involved.",
      },
      {
        test: "Complete blood count, liver function tests with alkaline phosphatase, serum calcium and creatinine",
        why: "Baseline before surgery and chemotherapy; a raised alkaline phosphatase or calcium points to bone or liver metastases and triggers further staging.",
        expected: "Normal in operable stage II disease.",
      },
      {
        test: "Chest radiograph",
        why: "Screens for pulmonary metastases and a pleural effusion, and serves as the pre-anaesthetic film.",
        expected: "Normal.",
      },
      {
        test: "Bone scan, contrast CT of chest, abdomen and pelvis, or PET-CT",
        why: "Only if the disease is stage III, if there are symptoms of spread, or if the alkaline phosphatase or calcium is raised.",
        expected: "Not required in an asymptomatic stage IIB patient with normal biochemistry.",
      },
      {
        test: "Random blood sugar, HbA1c and ECG",
        why: "Pre-anaesthetic assessment and to identify diabetes, which affects wound healing and the timing of chemotherapy.",
        expected: "Normal; a raised value is managed before surgery, not after.",
      },
    ],
    management: [
      {
        heading: "In the clinic today",
        points: [
          "Explain that the lump needs urgent investigation, obtain her agreement to referral and document what she was told.",
          "Order bilateral mammography with ultrasound of both breasts and axillae, and the baseline blood tests and chest radiograph.",
          "Make an urgent referral to a breast surgeon to be seen within 2 weeks, with a structured letter, a telephone call and a written plan for the patient.",
          "Do not aspirate, do not excise, do not give antibiotics, and do not wait to see whether it changes with the next period.",
        ],
      },
      {
        heading: "What the surgical team will do, so that you can counsel and follow up",
        points: [
          "Stage II disease is treated with **surgery first**: either breast-conserving surgery (wide local excision with whole-breast radiotherapy) or a modified radical mastectomy, according to the tumour-to-breast ratio, multicentricity and the patient's choice.",
          "The axilla is staged by **sentinel lymph node biopsy** if the nodes are clinically and cytologically negative, and by **axillary dissection** (levels I and II) if a node is proven positive.",
          "**Neoadjuvant chemotherapy** is offered for a large tumour to downstage it and allow breast conservation, and for triple-negative and HER2-positive disease.",
          "Adjuvant therapy follows the receptor status: chemotherapy (anthracycline and taxane based) for node-positive, high-grade, triple-negative or HER2-positive tumours; **trastuzumab** for a year if HER2-positive; **tamoxifen 20 mg daily for 5-10 years** for hormone-receptor-positive premenopausal disease, with ovarian suppression in the high-risk; radiotherapy to the breast after conservation and to the chest wall after mastectomy for T3 or N2 disease.",
        ],
      },
      {
        heading: "The family physician's continuing role",
        points: [
          "Follow-up is a clinical review every 3-6 months for 3 years, then every 6-12 months to 5 years and yearly thereafter, with **annual mammography** of the conserved and the contralateral breast; routine tumour markers and scans in the asymptomatic patient are not recommended.",
          "Watch for the effects of **tamoxifen** - hot flushes, vaginal discharge, venous thromboembolism, and endometrial carcinoma, so that any postmenopausal or irregular bleeding is investigated - and for the cardiotoxicity of trastuzumab.",
          "Teach **lymphoedema prevention** after axillary surgery: no blood pressure cuff, venepuncture or cannula in that arm, skin care, prompt treatment of cellulitis, and early referral for compression if the arm swells.",
          "Provide psychological support, screen for depression, and advise on breast awareness and screening for her sisters and daughters; refer for **genetic counselling** if there is breast cancer under 40, bilateral disease, male breast cancer, ovarian cancer or two or more affected relatives.",
        ],
      },
      {
        heading: "Prevention and screening for the community",
        points: [
          "Under the national programme, clinical breast examination is offered to women aged 30 and above at 5-yearly intervals and the family physician is the person expected to do it.",
          "Teach breast awareness rather than a rigid monthly self-examination, and advise women with a first-degree relative to start mammography at 40, or 10 years before the age at which the relative was diagnosed.",
          "Modifiable risks are worth stating: breastfeeding, avoiding alcohol, maintaining a normal weight, regular physical activity and using hormone replacement only for the shortest necessary time.",
        ],
      },
    ],
    viva: [
      {
        q: "What is triple assessment and why is it compulsory?",
        a: "Clinical examination, imaging (mammography over 35-40, ultrasound below 35 and as an adjunct at any age) and pathology (core needle biopsy, or FNAC where a core is not possible). Each alone misses cancers; together they are more than 99% accurate, and any discordance mandates excision biopsy.",
      },
      {
        q: "Why is core needle biopsy preferred to FNAC?",
        a: "Core biopsy gives tissue architecture, so it distinguishes in-situ from invasive carcinoma, gives the grade and the ER, PR, HER2 and Ki-67 status needed to plan neoadjuvant or adjuvant therapy, and has a lower inadequate-sample rate. FNAC is retained for cysts and for the axillary node.",
      },
      {
        q: "How do you test fixity to pectoralis major?",
        a: "Assess the mobility of the lump in two planes at right angles with the muscle relaxed, then ask the patient to press her hands on her hips to contract pectoralis major and test again; reduced mobility on contraction means the lump is fixed to the muscle, and immobility even when relaxed means fixity to the chest wall.",
      },
      {
        q: "Name the groups and levels of axillary lymph nodes.",
        a: "Five groups: anterior or pectoral along the lateral thoracic vessels, posterior or subscapular along the subscapular vessels, lateral or brachial along the axillary vein, central in the axillary fat, and apical behind the clavicle. Surgical levels are defined by pectoralis minor: level I lateral to it, level II behind it, level III medial to it.",
      },
      {
        q: "What is peau d'orange and what stage does it make the tumour?",
        a: "Cutaneous lymphoedema caused by lymphatic obstruction by tumour, in which the skin swells but the openings of the sweat ducts and hair follicles remain tethered and appear as pits, like orange peel. It is a T4b sign and places the tumour in stage III, locally advanced disease, unless there is metastatic spread.",
      },
      {
        q: "What is the TNM stage of a 4 cm tumour with a mobile axillary node, and what does it imply for treatment?",
        a: "T2 (more than 2 up to 5 cm), N1 (mobile ipsilateral axillary nodes), M0 - stage IIB, early breast cancer. It is operable, treated with surgery followed by adjuvant therapy according to receptor status, or with neoadjuvant chemotherapy first when breast conservation is wanted.",
      },
      {
        q: "What must a good referral letter for this patient contain?",
        a: "Identifiers and date, the complaint and its duration, the examination in the standard description with a diagram and clinical stage, risk factors and family history, comorbidities and drugs, the investigations done with reports, what the patient has been told, the urgency requested and the specific question, and the referring doctor's name and contact number.",
      },
      {
        q: "List the major risk factors for breast cancer.",
        a: "Female sex and increasing age; early menarche and late menopause; nulliparity or first childbirth after 30; not breastfeeding; hormone replacement therapy and prolonged oral contraceptive use; obesity and alcohol; previous breast cancer or atypical hyperplasia; chest irradiation in youth; and a family history, especially BRCA1 and BRCA2 mutations.",
      },
    ],
    pitfalls: [
      "Palpating the lump straight away and skipping inspection in the four positions and the examination of the normal breast first.",
      "Describing the lump without its site by quadrant and clock position relative to the nipple, and without two dimensions in centimetres.",
      "Forgetting the axilla and the supraclavicular fossa, or examining the axilla without supporting the arm so the muscles stay tense.",
      "Reassuring and reviewing in a month, or attempting a blind aspiration or excision in the clinic, in a woman over 35 with a discrete lump.",
      "Saying 'cancer' as a diagnosis before biopsy, or saying 'nothing to worry about' - both destroy trust when the report arrives.",
      "Leaving out the last menstrual period, hormone use, previous breast disease and the ages of affected relatives in the history.",
    ],
    references: [
      "Bailey and Love Short Practice of Surgery, 28th edition, 2023 - the breast",
      "SRB Manual of Surgery, 6th edition, 2019 - breast",
      "S Das, A Manual on Clinical Surgery, 13th edition, 2018 - examination of a breast lump",
      "NICE Guideline NG12, Suspected cancer: recognition and referral, 2015 (updated 2023) - breast cancer",
      "ICMR Consensus Document for Management of Breast Cancer, Indian Council of Medical Research, 2016",
      "American College of Radiology BI-RADS Atlas, 5th edition, 2013",
      "Operational Framework for Management of Common Cancers, MoHFW, Government of India, 2016",
    ],
  },
  {
    id: "surgery-office-case-2",
    title: "Viva at the table: suturing a 5 cm clean laceration of the forearm",
    kind: "viva",
    subjectId: "surgery-office",
    opening:
      "A 25-year-old right-handed student weighing 60 kg presents 2 hours after cutting the volar aspect of his left forearm on a broken glass tumbler; there is a 5 cm clean, linear, incised wound, the bleeding has stopped with pressure, and the examiner hands you a suture tray and asks you to talk through exactly what you will do, in order, with the doses.",
    minutes: 10,
    frequency: "core",
    sections: [
      {
        heading: "Before the tray is opened: assessment and the decision to close",
        points: [
          "State the three questions first - **how long ago, how dirty, and is anything under the skin divided** - and answer them: 2 hours, a clean glass edge in a domestic setting, and a volar forearm wound that overlies the flexor tendons and the median and ulnar nerves.",
          "Ask about hand dominance and occupation, tetanus immunisation, allergy to local anaesthetic, iodine or latex, bleeding disorders or anticoagulants, and diabetes.",
          "**Examine the hand before any anaesthetic is given** and document it: radial and ulnar pulses and capillary refill; median nerve by sensation over the index pulp and abduction of the thumb against resistance; ulnar nerve by sensation over the little finger and abduction of the fingers; radial nerve by sensation over the first web space and wrist extension.",
          "Test the **flexor tendons individually** - flexor digitorum profundus by flexing the distal interphalangeal joint with the finger held straight, flexor digitorum superficialis by flexing the proximal interphalangeal joint with the other fingers held extended, and flexor pollicis longus - and note that pain on resisted movement with a full range may still mean a partial tendon cut.",
          "Explore the wound to its full depth in good light after anaesthesia, moving the wrist and fingers through their range, and look for retained glass; **glass is radio-opaque**, so a radiograph is ordered if a fragment is suspected.",
          "Conclude: a clean incised wound under 6 hours old with no deep injury is suitable for **primary closure**; a divided tendon, nerve or artery, or tissue loss, means dress and refer to a hand or plastic surgeon the same day rather than close.",
        ],
      },
      {
        heading: "Consent, positioning and asepsis",
        points: [
          "Explain in plain words what will be done, that the anaesthetic stings for a few seconds, that there will be a scar, the risks of infection, wound breakdown and stitch marks, the need to return for suture removal, and the alternatives (adhesive strips and tissue glue are unsuitable for a 5 cm forearm wound under tension); take and document consent.",
          "Lie the patient **supine on a couch with the arm on an arm board** and a good light - never seated on a stool, because a vasovagal faint onto the floor during suturing is a real injury - and have an assistant.",
          "Perform hand hygiene, wear a mask and sterile gloves, and lay out the tray: needle holder, toothed dissecting forceps, artery forceps, suture scissors, sterile gauze, a 20 mL syringe with an 18 G cannula for irrigation, a bowl of normal saline, a 10 mL syringe with a 25-27 G needle for the anaesthetic, and **4-0 monofilament nylon on a reverse cutting needle**.",
          "Paint the **intact skin around the wound** with povidone-iodine or 2% chlorhexidine in 70% alcohol, working outwards from the wound edge, keep the antiseptic out of the wound itself, allow it to dry, and drape with a fenestrated sheet.",
        ],
      },
      {
        heading: "Local anaesthetic: choice, calculation and injection",
        points: [
          "Choose **1% lignocaine**, plain or with adrenaline 1:200,000; the forearm is not an end-artery territory, so adrenaline is permissible here and gives a drier field, although the classical rule still forbids it in the digits, penis, ear lobe, nose tip and flaps.",
          "Calculate the ceiling aloud: **plain lignocaine 3 mg/kg = 180 mg for 60 kg = 18 mL of 1% (9 mL of 2%)**; **with adrenaline 7 mg/kg = 420 mg = 42 mL of 1% (21 mL of 2%)**; a 5 cm wound needs only 5-10 mL, and the dose actually used is recorded in milligrams.",
          "Inject **through the cut wound edges into the subcutaneous plane** along both sides rather than through intact skin, with the smallest needle and warmed and, if possible, buffered solution, aspirating before each injection and injecting slowly; then **wait 3-5 minutes and test the block** with a forceps pinch before starting.",
          "Talk to the patient throughout and ask about perioral tingling, a metallic taste, tinnitus or light-headedness - the early signs of systemic toxicity - and keep oxygen, a benzodiazepine and 20% lipid emulsion in the room.",
          "If the block is inadequate, top up within the calculated maximum or convert to a field block around the wound; do not simply keep injecting until it works.",
        ],
      },
      {
        heading: "Irrigation, debridement and the closure itself",
        points: [
          "Irrigate with **50-100 mL of normal saline per centimetre - 250-500 mL for this wound** - delivered under pressure through the 18 G cannula, remove clot, re-inspect the depths for glass, and excise only truly ragged or devitalised edges, which an incised glass wound rarely has.",
          "Secure haemostasis with pressure; ligate a visible small bleeder with fine absorbable suture but never clamp blindly in the depths of a forearm wound, where the nerves run with the vessels.",
          "If the wound gapes into fat, close the **subcutaneous layer with interrupted 3-0 polyglactin buried knots** to eliminate dead space; a 5 cm skin laceration usually needs a single layer.",
          "Close the skin with **simple interrupted 4-0 nylon**: hold the needle at the junction of its middle and posterior thirds, enter at 90 degrees, take bites 5 mm from the edge and 5-10 mm apart, of equal depth on both sides and **wider at the base than at the surface** so that the edges evert; place the first suture at the midpoint to halve the wound and then bisect each half.",
          "Tie an **instrument tie with a surgeon's knot** - a double first throw, then two or three square throws, four throws in all for nylon - lay the knots to one side of the wound, and **approximate without strangulating**, because the tissues swell over the next 24 hours; cut the tails to 5 mm.",
        ],
      },
      {
        heading: "Dressing, prophylaxis and the instructions given",
        points: [
          "Clean the blood off the skin, apply a **non-adherent paraffin gauze**, dry gauze and a light crepe bandage, and put the arm in a sling for 24-48 hours with advice to elevate; no splint is needed unless the wound crosses a joint.",
          "**Tetanus:** this is a clean minor wound, so a patient with a complete primary course whose last dose was within 10 years needs nothing; otherwise give a Td booster 0.5 mL intramuscularly, and immunoglobulin is not indicated.",
          "**No antibiotic is prescribed for a clean, irrigated, primarily closed wound**; give paracetamol 500-1000 mg up to four times a day for pain and avoid aspirin in the first days.",
          "Advise the patient to keep the dressing dry for 48 hours and then wash gently and pat dry, not to soak it, and to return at once for increasing pain, redness spreading beyond the edge, discharge, fever or gaping; warn that the scar will be red for 3-6 months and advise sun protection.",
          "Fix the **wound check at 48 hours** and **suture removal at 10 days** for the forearm (7-10 days for the upper limb in general, 10-14 if the wound crosses the elbow or wrist), with adhesive strip support for a few days after the sutures come out.",
        ],
      },
      {
        heading: "Documentation: what goes in the notes",
        points: [
          "Record the date and time of injury and of the procedure, the mechanism, and the wound as site, length in centimetres, shape, depth, contamination and the absence of a foreign body, with a diagram.",
          "Record the **pre-anaesthetic neurovascular and tendon examination as normal**, the consent, the skin preparation, and the anaesthetic as agent, concentration, whether adrenaline was used, the volume in millilitres and the **total dose in milligrams** (for example 8 mL of 1% plain lignocaine = 80 mg).",
          "Record the irrigation volume, the number, size and material of the sutures (for example six interrupted 4-0 nylon), the dressing, the tetanus vaccine with its batch number, the analgesic prescribed and the advice given.",
          "Write the review date and the date of suture removal, sign with name and registration number, and if the injury was an assault or a road traffic accident register it as a medicolegal case, photograph the wound with consent and issue the wound certificate.",
        ],
      },
    ],
    summaryStatement:
      "A 60 kg, 25-year-old right-handed man presents 2 hours after an accidental glass injury with a 5 cm clean, linear, incised laceration on the volar aspect of the non-dominant left forearm, with intact radial and ulnar pulses, intact median, ulnar and radial nerve function, intact flexor tendon function and no retained foreign body; this is a CDC class I clean wound within the golden period, suitable for primary closure with simple interrupted 4-0 nylon under infiltration anaesthesia with 1% lignocaine calculated at a maximum of 3 mg/kg plain or 7 mg/kg with adrenaline, followed by tetanus prophylaxis according to his immunisation status, no antibiotic, a wound check at 48 hours and suture removal at 10 days.",
    differential: [
      {
        diagnosis: "Simple incised laceration of skin and subcutaneous tissue only",
        forIt: "A clean sharp mechanism, full active flexion of every finger against resistance, normal sensation, and a wound whose floor is seen to be intact on exploration.",
        againstIt: "Nothing clinically, but a wound that has not been explored through its full depth in a bloodless field cannot be called superficial.",
      },
      {
        diagnosis: "Laceration with flexor tendon injury (zone V of the flexor system)",
        forIt: "The volar forearm is where the tendons of flexor digitorum superficialis and profundus, flexor carpi radialis and palmaris longus lie just under the skin, and glass cuts deep.",
        againstIt: "Each tendon tested individually has a full range against resistance; a partial cut can still preserve movement, which is why pain on resisted movement or a visible tendon in the wound mandates referral.",
      },
      {
        diagnosis: "Laceration with median or ulnar nerve injury",
        forIt: "A mid-forearm volar wound overlies the median nerve, and the ulnar neurovascular bundle lies on the ulnar side.",
        againstIt: "Two-point discrimination is normal over the index and little finger pulps, thumb abduction and finger abduction are strong, and sweating on the pulps is preserved.",
      },
      {
        diagnosis: "Retained glass fragment",
        forIt: "Glass is the commonest retained foreign body in a laceration and a fragment is easy to miss in a bleeding wound.",
        againstIt: "The wound has been explored to its depth after irrigation and nothing is seen or felt; glass is radio-opaque, so a radiograph settles any doubt.",
      },
    ],
    investigations: [
      {
        test: "Plain radiograph of the forearm, anteroposterior and lateral views",
        why: "Glass, metal and stone are radio-opaque; a film is ordered whenever a fragment is suspected or the wound was caused by shattering glass.",
        expected: "No radio-opaque foreign body and no fracture.",
      },
      {
        test: "Ultrasound of the wound",
        why: "Detects radiolucent foreign bodies such as wood or thorn that a radiograph misses; not needed for glass unless the radiograph is negative and suspicion persists.",
        expected: "No foreign body.",
      },
      {
        test: "Capillary blood glucose",
        why: "Undiagnosed diabetes impairs healing and raises the infection rate; checked if there is any risk factor or the history suggests it.",
        expected: "Normal.",
      },
      {
        test: "Platelet count and coagulation profile",
        why: "Only if there is a history of a bleeding disorder, anticoagulant use or bleeding that will not stop with pressure.",
        expected: "Not required routinely; normal if sent.",
      },
      {
        test: "Wound swab for culture",
        why: "Not indicated in a fresh clean wound; it is sent only if the wound later shows signs of infection, before antibiotics are started.",
        expected: "Not sent at presentation.",
      },
      {
        test: "Tetanus immunisation record",
        why: "Decides whether a Td booster is needed; it is the one piece of paper that changes management in a clean wound.",
        expected: "A completed primary course with a booster within 10 years means nothing further is required.",
      },
    ],
    management: [
      {
        heading: "The procedure in the order the examiner wants to hear it",
        points: [
          "History and pre-anaesthetic examination of pulses, nerves and tendons; consent; supine position with the arm on a board.",
          "Hand hygiene, sterile gloves, skin preparation outward from the wound, drape.",
          "1% lignocaine calculated at 3 mg/kg plain (18 mL for 60 kg) or 7 mg/kg with adrenaline (42 mL), infiltrated through the wound edges, aspirating first; wait 3-5 minutes and test.",
          "Irrigate with 250-500 mL of saline under pressure, explore to the depth, remove any glass, minimal debridement, haemostasis by pressure.",
          "Simple interrupted 4-0 nylon, bites 5 mm from the edge and 5-10 mm apart, everted edges, surgeon's knot with four throws, approximated not strangulated.",
          "Non-adherent dressing, sling and elevation; tetanus prophylaxis by status; no antibiotic; analgesia; written advice; review at 48 hours; sutures out at 10 days; document everything including the anaesthetic dose in milligrams.",
        ],
      },
      {
        heading: "The doses to state without hesitation",
        points: [
          "**Lignocaine plain 3 mg/kg** (adult ceiling 200 mg): 60 kg = 180 mg = 18 mL of 1% or 9 mL of 2%.",
          "**Lignocaine with adrenaline 1:200,000, 7 mg/kg** (adult ceiling 500 mg): 60 kg = 420 mg = 42 mL of 1% or 21 mL of 2%.",
          "Bupivacaine 2 mg/kg (ceiling 150 mg) if a long-acting block is wanted; 1% = 10 mg/mL and 2% = 20 mg/mL.",
          "Td 0.5 mL intramuscularly if the last dose was more than 10 years ago or the course is incomplete; human tetanus immunoglobulin 250 IU is reserved for tetanus-prone wounds with fewer than three doses and is not needed here.",
          "Paracetamol 500-1000 mg up to four times a day; amoxicillin-clavulanate 625 mg three times a day for 5 days only if the wound becomes infected, not prophylactically.",
        ],
      },
      {
        heading: "Aftercare and follow-up",
        points: [
          "Wound check at 48 hours: look for redness beyond 1 cm of the edge, discharge, tenderness and fever; a suspected collection is treated by removing one or two sutures to let it drain, a swab, daily dressings and an antibiotic.",
          "Suture removal at 10 days for the forearm, with adhesive strips for support for a further 5-7 days; the wound has only about 10% of its final strength at that stage, so heavy lifting is avoided for 3 weeks.",
          "Scar care: sun protection for 6 months, gentle massage from the third week, and silicone gel sheeting if the scar thickens; warn that hypertrophy is commoner over the flexor surface and in darker skin.",
          "Return to college or work the next day for a non-dominant forearm wound, with the arm kept clean and dry.",
        ],
      },
      {
        heading: "When to refer instead of suturing",
        points: [
          "A divided or partially divided tendon, a nerve deficit, an arterial bleed or an expanding haematoma - dress, elevate and send to a hand or plastic surgeon the same day.",
          "A wound with tissue loss, a distally based flap, a crush component, gross contamination or presentation beyond 6 hours - wound toilet and delayed primary closure rather than immediate suture.",
          "A wound that crosses a joint with suspected joint penetration, an open fracture, or a retained fragment that cannot be removed.",
          "A child or an anxious adult who cannot tolerate the procedure under local anaesthetic, or a wound too large for the safe local anaesthetic dose.",
        ],
      },
    ],
    viva: [
      {
        q: "What is the maximum dose of lignocaine you may give this 60 kg patient?",
        a: "Plain lignocaine 3 mg/kg, so 180 mg, which is 18 mL of 1% or 9 mL of 2%; with adrenaline 7 mg/kg, so 420 mg, which is 42 mL of 1% or 21 mL of 2%. Adult ceilings are 200 mg plain and 500 mg with adrenaline, and the dose is reduced in the elderly, in hepatic or cardiac failure and in the very young.",
      },
      {
        q: "Why may adrenaline be used on the forearm but classically not on a finger?",
        a: "The forearm has a rich collateral supply, so vasoconstriction only reduces bleeding and slows absorption, which prolongs the block and raises the safe dose. The digits, penis, ear lobe, nose tip and skin flaps are end-artery territories where vasoconstriction can cause ischaemic necrosis; that remains the safe examination answer even though modern series show commercial lignocaine with adrenaline to be safe in normal digits.",
      },
      {
        q: "Which wounds would you not close primarily?",
        a: "Wounds more than 6 hours old on the limbs or trunk, mammalian bites, puncture and stab wounds, grossly contaminated or crush wounds, wounds with a retained foreign body or already infected, wounds with tissue loss, and wounds with an untreated tendon, nerve or vessel injury; these are cleaned, packed open and closed by delayed primary closure at day 3 to 5, or referred.",
      },
      {
        q: "Why nylon rather than silk for the skin, and which needle?",
        a: "Nylon is a monofilament: it slides without sawing, has no capillarity to wick bacteria, causes minimal tissue reaction and leaves fewer marks, whereas braided silk harbours bacteria and provokes inflammation. Skin is closed with a reverse cutting needle, whose cutting edge is on the outer convex surface so the suture does not cut out through the skin; round-bodied needles are for bowel, vessels and fascia.",
      },
      {
        q: "How do you decide the bite size and spacing, and why must the edges evert?",
        a: "On the limbs, 5 mm from the edge and 5-10 mm apart, with equal bites of equal depth; on the face 2-3 mm from the edge and 3-5 mm apart. Taking a bite wider at the base than at the surface everts the edges so that dermis meets dermis; inverted edges heal with a depressed scar, whereas an everted closure flattens to a level scar as it contracts.",
      },
      {
        q: "When do you remove the sutures, and what if the wound looks infected at the 48-hour check?",
        a: "Face 4-5 days, scalp and trunk 7-10, upper limb 10, lower limb 10-14, palm and sole 12-14 days; for this forearm wound, 10 days. If it is infected, remove one or two sutures over the most inflamed part to let pus drain, send a swab, start an antibiotic such as amoxicillin-clavulanate, dress daily and let it heal by secondary intention or close it later.",
      },
      {
        q: "What is the tetanus prophylaxis for this patient?",
        a: "This is a clean minor wound. If he has had three or more doses of tetanus toxoid and the last within 10 years, nothing is needed; if the last was more than 10 years ago, or the course is incomplete or unknown, give Td 0.5 mL intramuscularly and complete the course. Immunoglobulin is not indicated for a clean minor wound.",
      },
      {
        q: "Name the phases of wound healing and the factors that delay it.",
        a: "Haemostasis, inflammation (days 0-4), proliferation with fibroplasia, angiogenesis and epithelialisation (days 4-21), and remodelling of collagen (3 weeks to a year). Local factors that delay healing are infection, foreign body, haematoma, ischaemia, tension, oedema and repeated trauma; systemic factors are diabetes, malnutrition with protein, vitamin C and zinc deficiency, steroids and immunosuppression, smoking, anaemia, uraemia, jaundice, old age and irradiation.",
      },
    ],
    pitfalls: [
      "Injecting the anaesthetic before the distal pulses, nerves and tendons have been examined and written down.",
      "Quoting the dose in millilitres without the concentration, or forgetting that 2% lignocaine carries twice the drug of 1%.",
      "Pouring povidone-iodine or hydrogen peroxide into the wound and calling it cleaning, instead of irrigating with saline under pressure.",
      "Tying too tight and taking unequal bites, which invert the edges and leave a railway-track scar.",
      "Prescribing an antibiotic reflexively for a clean wound while forgetting to ask about the tetanus status.",
      "Sending the patient away without a written review date, the date for suture removal and the warning signs of infection.",
    ],
    references: [
      "Bailey and Love Short Practice of Surgery, 28th edition, 2023 - wounds, tissue repair and scars; basic surgical skills",
      "SRB Manual of Surgery, 6th edition, 2019 - wounds, sutures and suture materials",
      "Association of Anaesthetists (AAGBI) Safety Guideline: Management of Severe Local Anaesthetic Toxicity, 2010",
      "CDC Guideline for the Prevention of Surgical Site Infection, 2017",
      "ACIP Updated Recommendations on Td and Tdap Vaccines, including tetanus prophylaxis in wound management, MMWR 2020",
    ],
  },
];

const subject: Subject = {
  id: "surgery-office",
  title: "Surgery & Office Procedures",
  blurb: "Wounds and suturing, abscesses, lumps, hernia, diabetic foot and the procedures done in the clinic.",
  icon: "Scissors",
  papers: ["III"],
  topics,
  cases,
};

export default subject;
