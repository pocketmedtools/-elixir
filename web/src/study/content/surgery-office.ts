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
