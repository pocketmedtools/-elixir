import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "musculoskeletal-low-back-pain",
  title: "Low back pain and its red flags",
  oneLiner:
    "Low back pain is pain between the costal margins and the gluteal folds, over 90% of which is non-specific mechanical pain that needs a red-flag screen, reassurance, early mobilisation and short-course analgesia rather than imaging.",
  frequency: "core",
  keywords: [
    "backache",
    "lumbago",
    "kamar dard",
    "sciatica",
    "lumbar radiculopathy",
    "cauda equina syndrome",
    "prolapsed intervertebral disc",
    "PIVD",
    "straight leg raise",
    "SLR",
    "spinal stenosis",
    "yellow flags",
    "STarT Back",
    "NSAID",
    "spondylolisthesis",
    "Pott spine",
  ],
  sections: [
    {
      heading: "Definition, burden and natural history",
      points: [
        "**Definition:** pain, muscle tension or stiffness localised below the costal margin and above the inferior gluteal folds, with or without leg pain, lasting acute (under 6 weeks), sub-acute (6-12 weeks) or chronic (over 12 weeks).",
        "**Over 90% is non-specific mechanical low back pain** with no identifiable nociceptive lesion; about 5-10% is radicular and only 1-2% is serious specific pathology such as infection, malignancy, fracture or inflammatory disease.",
        "Low back pain is the **single leading cause of years lived with disability** worldwide and in India in the Global Burden of Disease estimates; lifetime prevalence in Indian community studies is 50-70%, and point prevalence in working adults is around 20%.",
        "Natural history is favourable: about half improve within 1 week and 90% within 6 weeks, but recurrence within a year is 40-60%, so the counselling line is recovery with recurrence, not cure.",
        "Occupational risk factors that dominate Indian practice are manual lifting, farm and construction work, two-wheeler commuting on poor roads, prolonged squatting and long unsupported sitting at a desk.",
        "The strongest predictors of chronicity are **psychosocial, not structural** - fear-avoidance beliefs, catastrophising, low mood, job dissatisfaction and a pending compensation claim - which is why imaging findings correlate poorly with pain.",
      ],
    },
    {
      heading: "Triage: the three questions that structure the consultation",
      points: [
        "Every patient is sorted into one of three boxes at the first visit: **non-specific mechanical pain, radicular pain (sciatica or stenosis), or serious spinal pathology**. Everything else follows from that sorting.",
        "Ask about onset and mechanism, site and radiation below the knee, aggravating and relieving postures, morning stiffness and its duration, night pain, and whether pain is worse on walking and relieved by sitting or leaning forward (neurogenic claudication).",
        "**Mechanical pain** is worse on movement and loading, better with rest, has morning stiffness under 30 minutes, and varies through the day. **Inflammatory pain** starts before 45 years, is insidious, has morning stiffness over 30 minutes, wakes the patient in the second half of the night, and improves with exercise not rest.",
        "Screen every patient for the red flags in one sweep: age under 20 or new pain after 50, fever, weight loss, night pain, known cancer, trauma, steroid or immunosuppressant use, intravenous drug use, HIV, and bladder or bowel disturbance.",
        "Ask the **yellow flag questions** at the first visit if pain has lasted more than 2 weeks: what do you think is wrong, what are you afraid of, how is work, how is sleep and mood. The STarT Back tool formalises this into low, medium and high risk groups.",
        "Record a functional baseline - how far he can walk, whether he can sit through a bus journey, whether he can squat for the toilet, whether he has missed work - because that is what treatment is titrated against, not a pain score alone.",
      ],
    },
    {
      heading: "Examination sequence for the lumbar spine",
      points: [
        "**Expose from the mid-thorax to below the knees, patient standing.** Inspect from behind for loss of lumbar lordosis, scoliosis, a step (spondylolisthesis), muscle spasm, wasting, sinuses, cafe-au-lait spots and midline hair tufts; inspect from the side for a gibbus.",
        "**Gait:** watch normal walking, then heel walking (L4-L5, tibialis anterior) and toe walking (S1, gastrocnemius). Ask him to squat and rise - a global screen of power, hip and knee.",
        "**Movements, always in the same order:** forward flexion (record finger-floor distance and the modified Schober test - a rise of less than 5 cm over a 10 cm mark above the dimples of Venus is restricted), extension, lateral flexion each side, and rotation with the pelvis fixed and the patient seated.",
        "**Palpation:** midline spinous process tenderness (fracture, infection), paraspinal muscle spasm, interspinous gap, sacroiliac tenderness, and percussion of the spine with the ulnar border of the fist.",
        "**Neurological examination of both lower limbs:** power at hip flexion (L1-L2), knee extension (L3-L4), ankle dorsiflexion (L4-L5), great toe extension (L5) and ankle plantarflexion (S1); knee (L3-L4) and ankle (S1) reflexes; plantar response; sensation over the medial malleolus (L4), the dorsum of the first web space (L5) and the lateral border of the foot (S1).",
        "**Special tests:** straight leg raise (positive if radicular pain below the knee is reproduced between 30 and 70 degrees, sensitive but not specific), the crossed straight leg raise (less sensitive, highly specific for disc herniation), Lasegue sign with ankle dorsiflexion, the femoral stretch test for L2-L4, and Faber and sacroiliac compression for the sacroiliac joint.",
        "**Finish the examination properly:** abdominal examination including palpation for an aortic aneurysm, examination of both hips (hip pathology refers to the back and thigh), peripheral pulses, and where indicated a per-rectal examination for tone and a saddle sensation check.",
      ],
    },
    {
      heading: "Red flags, imaging and what not to order",
      points: [
        "**Do not image acute non-specific low back pain in the first 6 weeks in the absence of red flags** - it does not improve outcomes, it labels incidental degenerative findings as disease, and it increases surgery rates and patient anxiety.",
        "Radiographs are appropriate for suspected fracture, suspected inflammatory disease (pelvis anteroposterior for sacroiliitis), and pain persisting beyond 6 weeks. **MRI is the investigation of choice** for suspected cauda equina, infection, malignancy, and radiculopathy being considered for surgery.",
        "Order ESR, C-reactive protein, complete blood count and urine routine when infection or malignancy is suspected; add serum calcium, phosphate, alkaline phosphatase and serum protein electrophoresis in an older patient with unexplained pain and anaemia (myeloma).",
        "In India, **tuberculous spondylitis (Pott disease) is the commonest cause of destructive spinal infection** - suspect it with constant night pain, a gibbus, weight loss, evening fever and a paraspinal cold abscess, and confirm with MRI plus a CT-guided biopsy for Xpert MTB/RIF and culture before starting antitubercular therapy.",
        "The degenerative changes reported on almost every adult radiograph - disc space narrowing, osteophytes, facet arthropathy, mild bulges - are present in a large majority of asymptomatic people over 40 and must be explained as normal ageing, not as damage.",
        "**Cauda equina syndrome is the emergency you cannot miss:** bilateral sciatica, saddle anaesthesia, urinary retention with overflow incontinence, faecal incontinence or loss of anal tone, and progressive lower limb weakness. It needs same-day MRI and surgical decompression, ideally within 48 hours of onset.",
      ],
    },
    {
      heading: "Managing non-specific low back pain",
      points: [
        "**Advice is the treatment:** explain that this is a mechanical strain with an excellent prognosis, that hurt does not mean harm, that the spine is strong, and that staying active speeds recovery. **Bed rest is harmful** and should not exceed 1-2 days even in severe pain.",
        "Keep working with modified duties where possible; a graded return to normal activity within days and a return to work plan reduce chronicity more than any drug.",
        "**First-line drug: an NSAID at the lowest effective dose for the shortest time** - for example ibuprofen 400 mg PO TDS or naproxen 250-500 mg PO BD with food, for 5-7 days, with a proton pump inhibitor if the patient is over 60, on aspirin or steroids, or has a past ulcer. Paracetamol 500-1000 mg PO QDS is weakly effective alone but useful as an add-on and is the safer choice in renal disease.",
        "A short course of a muscle relaxant (tizanidine 2 mg PO at night or cyclobenzaprine) for 3-5 days may help acute spasm but causes sedation; **avoid habitual long-term use** of the combination NSAID-plus-relaxant tablets that dominate Indian retail practice.",
        "Opioids are not first-line: tramadol 50 mg PO BD-TDS may be used briefly for severe pain uncontrolled by an NSAID, and long-term opioids for chronic back pain are explicitly discouraged.",
        "**For sub-acute and chronic pain the evidence favours exercise above everything else** - a structured programme of core stabilisation, stretching, walking, and yoga adapted to the patient, continued for at least 8-12 weeks; add cognitive behavioural elements or a pain-education session in high-risk STarT Back patients.",
        "Heat is helpful in the acute phase; traction, corsets, prolonged physiotherapy passivity, and repeated intramuscular analgesic injections have no evidence and foster dependence. Epidural steroid injection gives short-term relief in radicular pain only.",
      ],
    },
    {
      heading: "Sciatica, spinal stenosis and referral",
      points: [
        "**Sciatica** is radicular pain radiating below the knee in a dermatomal pattern, usually from an L4-L5 or L5-S1 disc prolapse; 75% settle with conservative treatment in 6-12 weeks, so the initial plan is analgesia, activity and review, not imaging.",
        "Neuropathic adjuncts are second-line for persistent radicular pain: amitriptyline 10-25 mg PO at night, or pregabalin 75 mg PO at night titrated to 150 mg BD - counsel about drowsiness, weight gain and, in the elderly, falls and anticholinergic effects.",
        "**Lumbar canal stenosis** presents after 60 with neurogenic claudication: bilateral buttock and leg pain on walking, relieved by sitting or bending forward, with a preserved bicycle tolerance and normal peripheral pulses (the discriminator from vascular claudication).",
        "**Refer urgently (same day):** cauda equina syndrome, progressive or severe motor deficit (foot drop, power 3/5 or less), suspected spinal infection or tuberculosis, suspected malignancy, and any fracture.",
        "**Refer routinely:** radicular pain persisting beyond 6-12 weeks despite adequate conservative care, disabling stenosis, and mechanical pain that fails a structured 12-week programme with significant functional loss.",
        "Surgery for disc prolapse speeds relief of leg pain in the first year but gives the same result as conservative care at two years, and it does not treat back pain itself - a sentence the patient should hear before he is sent for an opinion.",
      ],
    },
  ],
  tables: [
    {
      heading: "Red flags in low back pain and what each suggests",
      columns: ["Red flag", "Suspected pathology", "Action"],
      rows: [
        ["Saddle anaesthesia, retention, incontinence, bilateral sciatica", "Cauda equina syndrome", "Same-day MRI and surgical referral"],
        ["Fever, night sweats, weight loss, gibbus, IV drug use, HIV", "Spinal tuberculosis, pyogenic discitis, epidural abscess", "ESR, CRP, MRI spine, biopsy before antitubercular therapy"],
        ["Age over 50, known cancer, unrelenting night pain, weight loss", "Metastasis, myeloma", "ESR, CBC, calcium, alkaline phosphatase, electrophoresis, MRI"],
        ["Significant trauma, or minor trauma over 65, or chronic steroids", "Vertebral compression fracture", "Radiograph; MRI if neurology or persistent pain"],
        ["Age under 45, insidious onset, night pain, morning stiffness over 30 min, improves with exercise", "Axial spondyloarthritis", "Pelvis radiograph, ESR/CRP, HLA-B27, rheumatology referral"],
        ["Progressive weakness, foot drop, loss of reflexes", "Significant radiculopathy or cord compression", "Urgent MRI and surgical opinion"],
      ],
    },
    {
      heading: "Nerve root localisation in lumbar radiculopathy",
      columns: ["Root", "Pain and sensory loss", "Weakness", "Reflex"],
      rows: [
        ["L3-L4", "Anterior thigh to medial knee and medial malleolus", "Knee extension, hip flexion", "Knee jerk reduced"],
        ["L5", "Lateral leg to dorsum of foot and great toe", "Great toe and ankle dorsiflexion, foot drop", "Both preserved"],
        ["S1", "Posterior thigh and calf to lateral border and sole", "Ankle plantarflexion, unable to toe-walk", "Ankle jerk reduced"],
      ],
    },
    {
      heading: "Analgesia for low back pain in general practice",
      columns: ["Step", "Drug and dose", "Duration", "Cautions"],
      rows: [
        ["First line", "Ibuprofen 400 mg PO TDS or naproxen 250-500 mg PO BD after food", "5-7 days, then as needed", "Add PPI if over 60, ulcer history, on aspirin or steroid; avoid in CKD and heart failure"],
        ["Add-on or NSAID-unsafe", "Paracetamol 500-1000 mg PO QDS (maximum 3-4 g/day)", "As needed", "Reduce to 2 g/day in liver disease and in the frail elderly"],
        ["Acute spasm", "Tizanidine 2 mg PO at night", "3-5 days", "Sedation, dry mouth, hypotension; do not continue long term"],
        ["Severe or refractory", "Tramadol 50 mg PO BD, short course", "Under 2 weeks", "Nausea, dizziness, seizure risk, dependence; avoid with SSRIs"],
        ["Radicular or neuropathic", "Amitriptyline 10-25 mg PO at night or pregabalin 75 mg PO at night", "Titrate over 4-6 weeks", "Drowsiness, weight gain, falls in the elderly, dry mouth"],
      ],
    },
  ],
  redFlags: [
    "Saddle anaesthesia, urinary retention or overflow, faecal incontinence, lax anal tone or bilateral sciatica - cauda equina syndrome, same-day MRI and neurosurgical referral.",
    "Fever, night pain, weight loss, a gibbus or a paraspinal swelling - spinal tuberculosis or pyogenic infection, admit and image; do not start empirical antitubercular therapy without a tissue diagnosis where biopsy is possible.",
    "New back pain after 50 with a known malignancy, unrelenting night pain or unexplained weight loss - metastatic disease or myeloma until proved otherwise.",
    "Progressive lower limb weakness, a new foot drop, or a lost ankle jerk - significant root compression needing urgent imaging and a surgical opinion.",
    "Back pain with a pulsatile expansile abdominal mass, hypotension or syncope - ruptured abdominal aortic aneurysm, resuscitate and refer immediately.",
    "Thoracic back pain of sudden onset in an older or steroid-treated patient after trivial trauma - osteoporotic vertebral fracture; look for kyphosis and height loss.",
    "Back pain with fever and a recent urinary, skin or dental infection, or in an injecting drug user - epidural abscess; check ESR, CRP and blood cultures and arrange urgent MRI.",
  ],
  pearls: [
    "Ninety per cent of low back pain is non-specific and needs no imaging at all in the first six weeks; the examiner is looking for the red-flag screen, not for a radiograph.",
    "Bed rest beyond a day or two harms; the single most effective prescription for acute low back pain is reassurance plus a return to normal activity.",
    "Inflammatory back pain is the one pattern you must not call mechanical: onset before 45, insidious, morning stiffness over 30 minutes, night pain in the second half of the night, better with exercise, worse with rest.",
    "Straight leg raise is sensitive but not specific; the crossed straight leg raise is insensitive but highly specific for a disc prolapse.",
    "Degenerative changes on a lumbar radiograph are present in most asymptomatic adults over 40 - report them to the patient as normal ageing, or you create a disease that did not exist.",
    "Cauda equina syndrome is a surgical emergency measured in hours; ask about bladder function in every patient with bilateral leg symptoms and document the answer.",
    "In an Indian patient with constitutional symptoms and destructive spinal disease, think Pott spine first, and confirm before treating - drug-resistant tuberculosis makes empirical therapy without tissue an expensive gamble.",
    "For chronic back pain, exercise and pain education beat every drug in the long run; NSAIDs are for flares, not for maintenance.",
  ],
  theory: [
    {
      id: "musculoskeletal-low-back-pain-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 42-year-old bus driver presents with low back pain of three weeks duration radiating to the right leg. Discuss your clinical approach, the red flags you would look for, and outline your management in a family practice setting.",
      openingLines: [
        "Low back pain is pain localised between the costal margins and the inferior gluteal folds, with or without radiation to the leg; over 90% of cases are non-specific mechanical pain with a favourable natural history and only 1-2% represent serious spinal pathology.",
        "The tasks in general practice are to triage the patient into non-specific pain, radicular pain, or serious pathology; to screen for red flags; to relieve pain; and to prevent chronicity by keeping him working.",
      ],
      answer: [
        {
          heading: "1. History",
          points: [
            "Onset, duration, mechanism (lifting, prolonged driving), site, radiation below or above the knee, and the postures that aggravate or relieve.",
            "Pattern: mechanical pain is movement-related with morning stiffness under 30 minutes; inflammatory pain begins before 45, has stiffness over 30 minutes, wakes the patient at night and improves with exercise.",
            "Red-flag screen: fever, weight loss, night pain, known malignancy, trauma, steroid use, intravenous drug use, HIV, bladder or bowel disturbance, saddle numbness.",
            "Occupational and psychosocial history: hours of driving, vibration exposure, lifting, job satisfaction, sick leave, mood, sleep, fear-avoidance beliefs and any compensation claim.",
            "Drug history: previous NSAID use, gastric symptoms, and the very common self-medication with retail analgesic combinations.",
          ],
        },
        {
          heading: "2. Examination",
          points: [
            "Standing: posture, loss of lordosis, scoliosis, a palpable step, spasm, gait including heel and toe walking.",
            "Movements: flexion with finger-floor distance and modified Schober, extension, lateral flexion and rotation.",
            "Palpation for midline tenderness, paraspinal spasm and sacroiliac tenderness; percussion of spinous processes.",
            "Neurological examination of both lower limbs - power at L4, L5 and S1 myotomes, knee and ankle reflexes, plantar response, and dermatomal sensation.",
            "Special tests: straight leg raise, crossed straight leg raise, femoral stretch, Faber test; examine both hips and the abdomen, and check peripheral pulses.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "No imaging is indicated in the first six weeks of non-specific pain without red flags.",
            "If red flags are present: ESR, CRP, complete blood count, urine routine, radiograph of the lumbosacral spine and pelvis, and MRI where infection, malignancy, fracture or cauda equina is suspected.",
            "In a patient over 50 with unexplained pain: serum calcium, alkaline phosphatase and serum protein electrophoresis for myeloma.",
            "Fasting glucose and vitamin D where diffuse pain and proximal weakness accompany the back pain.",
          ],
        },
        {
          heading: "4. Management of non-specific and radicular pain",
          points: [
            "Explain the diagnosis and the good prognosis; state explicitly that hurt is not harm and that the spine is not damaged.",
            "Advise staying active and continuing work with modified duties; no bed rest beyond one or two days; local heat for spasm.",
            "Ibuprofen 400 mg PO TDS or naproxen 250-500 mg PO BD after food for 5-7 days, with a proton pump inhibitor if he is at gastric risk; paracetamol 1 g QDS as an add-on.",
            "A short course of tizanidine 2 mg at night for 3-5 days if spasm dominates; tramadol 50 mg PO BD only for severe pain and for under two weeks.",
            "For radicular pain persisting beyond 4-6 weeks add amitriptyline 10-25 mg at night or pregabalin 75 mg at night with counselling about drowsiness.",
            "Start a structured exercise programme by week two: core stabilisation, hamstring and hip flexor stretches, walking; for a driver, add seat position, lumbar support, and a break to stand every two hours.",
          ],
        },
        {
          heading: "5. Follow-up, referral and prevention",
          points: [
            "Review at 2 weeks and again at 6 weeks with a functional measure - walking distance, driving tolerance, days of work lost.",
            "Urgent referral for cauda equina syndrome, progressive motor deficit, suspected infection, malignancy or fracture.",
            "Routine referral if radicular pain persists beyond 6-12 weeks or if a structured 12-week programme fails with continuing disability.",
            "Prevention: workplace ergonomics, weight reduction, tobacco cessation, correct lifting technique, and a maintenance exercise habit; warn about recurrence and give a self-management plan for the next episode.",
          ],
        },
      ],
      mustDraw: [
        "A table of red flags against the pathology each suggests and the action taken.",
        "A dermatome and myotome table for L4, L5 and S1 with the corresponding reflex.",
        "A triage flow chart: low back pain leading to red flags present or absent, then radicular or non-specific.",
      ],
      markSplit: [
        { part: "Definition, triage and epidemiology", marks: 1 },
        { part: "History including red and yellow flags", marks: 2 },
        { part: "Examination sequence with special tests", marks: 2 },
        { part: "Rational use of investigations", marks: 1.5 },
        { part: "Drug and non-drug management with doses", marks: 2.5 },
        { part: "Referral criteria and prevention", marks: 1 },
      ],
      keywords: ["non-specific low back pain", "red flags", "straight leg raise", "cauda equina", "STarT Back", "return to work"],
    },
    {
      id: "musculoskeletal-low-back-pain-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on cauda equina syndrome.",
      openingLines: [
        "Cauda equina syndrome is compression of the lumbosacral nerve roots below the conus medullaris, most often by a large central disc prolapse at L4-L5 or L5-S1, and it is a surgical emergency.",
        "It accounts for well under 1% of low back pain but carries permanent bladder, bowel and sexual dysfunction if decompression is delayed beyond 24-48 hours.",
      ],
      answer: [
        {
          heading: "Causes",
          points: [
            "Large central disc prolapse - the commonest cause.",
            "Spinal trauma with burst fracture; epidural haematoma after anticoagulation or spinal procedure.",
            "Infection: spinal tuberculosis with an epidural abscess, pyogenic epidural abscess.",
            "Tumour: metastasis, myeloma, ependymoma; and severe degenerative canal stenosis.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Bilateral sciatica or unilateral sciatica that becomes bilateral, with severe back pain.",
            "**Saddle anaesthesia** over the perineum, buttocks and posterior thighs.",
            "**Bladder dysfunction** - loss of the desire to void, hesitancy, then painless retention with overflow incontinence; a post-void residual over 200 mL supports the diagnosis.",
            "Faecal incontinence, loss of anal tone and an absent anal wink; loss of sexual sensation.",
            "Motor weakness of the lower limbs, absent ankle jerks, and a variable pattern of sensory loss.",
          ],
        },
        {
          heading: "Assessment and management",
          points: [
            "Document perineal sensation, anal tone, post-void residual by catheter or bedside ultrasound, and lower limb power and reflexes; record the time of onset.",
            "**Emergency MRI of the whole lumbosacral spine** - do not delay for radiographs.",
            "Catheterise, give analgesia, and refer to neurosurgery or spine surgery immediately.",
            "**Surgical decompression as early as possible, ideally within 24-48 hours of onset**; outcome depends on the completeness of the deficit and the delay to surgery.",
            "Steroids have a role only when the cause is malignant compression; antitubercular therapy or antibiotics are added when infection is proved.",
          ],
        },
      ],
      mustDraw: ["A flow chart: suspected cauda equina, leading to bladder and saddle assessment, emergency MRI, catheterise, and same-day surgical referral."],
      markSplit: [
        { part: "Definition and causes", marks: 1.5 },
        { part: "Clinical features including saddle anaesthesia and bladder signs", marks: 2 },
        { part: "Investigation and emergency management", marks: 1.5 },
      ],
      keywords: ["cauda equina", "saddle anaesthesia", "urinary retention", "emergency MRI", "decompression"],
    },
    {
      id: "musculoskeletal-low-back-pain-t3",
      paper: "II",
      kind: "differentiate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Differentiate between mechanical and inflammatory low back pain, and state why the distinction matters.",
      openingLines: [
        "Mechanical low back pain arises from the discs, facet joints, muscles and ligaments and is provoked by loading; inflammatory back pain arises from sacroiliac and spinal joint inflammation in axial spondyloarthritis.",
        "The distinction is made entirely on history and is the single highest-yield discriminator in a back pain clinic, because it changes the investigation, the drug and the specialist.",
      ],
      answer: [
        {
          heading: "Points of difference",
          points: [
            "**Age at onset:** mechanical at any age, often 30-55; inflammatory almost always before 45.",
            "**Onset:** mechanical is often acute and related to an event; inflammatory is insidious over weeks to months.",
            "**Morning stiffness:** mechanical under 30 minutes; inflammatory over 30 minutes, often an hour or more.",
            "**Effect of rest and exercise:** mechanical improves with rest and worsens with activity; inflammatory improves with exercise and worsens with rest.",
            "**Night pain:** mechanical rarely wakes the patient; inflammatory wakes him in the second half of the night and he gets up and walks about.",
            "**Associated features:** inflammatory pain carries alternating buttock pain, enthesitis (heel pain), dactylitis, uveitis, psoriasis, inflammatory bowel disease and a family history.",
            "**Response to NSAIDs:** inflammatory pain shows a dramatic and reproducible response within 48 hours, which is itself a diagnostic criterion.",
          ],
        },
        {
          heading: "Why it matters",
          points: [
            "Inflammatory pain needs pelvic imaging for sacroiliitis, ESR and CRP, HLA-B27 where available, and MRI of the sacroiliac joints if radiographs are normal.",
            "It is treated with continuous NSAIDs, structured exercise and physiotherapy, and escalated to biologic therapy through rheumatology; DMARDs such as methotrexate do not work for axial disease.",
            "The average delay to diagnosis in axial spondyloarthritis is still 5-8 years, and almost all of that delay happens in primary care.",
          ],
        },
      ],
      mustDraw: ["A two-column table contrasting mechanical and inflammatory back pain on age, onset, stiffness, effect of rest and exercise, night pain and NSAID response."],
      markSplit: [
        { part: "Table of clinical differences", marks: 3 },
        { part: "Investigations that follow", marks: 1 },
        { part: "Why the distinction changes management", marks: 1 },
      ],
      keywords: ["inflammatory back pain", "mechanical back pain", "axial spondyloarthritis", "morning stiffness", "ASAS criteria"],
    },
  ],
  mcqs: [
    {
      id: "musculoskeletal-low-back-pain-q1",
      stem: "A 38-year-old labourer has had low back pain for 5 days after lifting a sack. There is no leg pain, no fever, no weight loss, and neurological examination is normal. He asks for an MRI because a neighbour had one. What is the most appropriate management?",
      options: [
        "MRI lumbosacral spine to exclude disc prolapse",
        "Radiograph of the lumbosacral spine, and treat according to the findings",
        "Reassurance, advice to stay active, and a short course of an NSAID with review in 2 weeks",
        "Bed rest for one week with a lumbar corset",
        "Refer to orthopaedics for an opinion",
      ],
      answer: 2,
      explanation:
        "This is acute non-specific mechanical low back pain with no red flags, and the evidence-based package is explanation, activity, and short-course analgesia with planned review; over 90% recover within six weeks. Imaging in the first six weeks without red flags does not change outcomes and reliably finds incidental degenerative changes that are present in most asymptomatic adults, which raises anxiety and surgery rates. Bed rest and corsets delay recovery and promote deconditioning, and referral at day five simply moves an untreated patient into a queue.",
      difficulty: "easy",
    },
    {
      id: "musculoskeletal-low-back-pain-q2",
      stem: "A 45-year-old man with 10 days of severe back pain and bilateral leg pain now reports difficulty starting his urine stream and numbness while sitting on a chair. Ankle jerks are absent bilaterally and perianal sensation is reduced. What is the single most important immediate step?",
      options: [
        "Start pregabalin 75 mg at night and review in one week",
        "Arrange emergency MRI of the lumbosacral spine and refer for surgical decompression the same day",
        "Radiograph of the lumbosacral spine and an epidural steroid injection",
        "Catheterise and review in 48 hours if symptoms persist",
        "Start intravenous dexamethasone and observe",
      ],
      answer: 1,
      explanation:
        "Bilateral sciatica with saddle sensory loss, bladder dysfunction and lost ankle jerks is cauda equina syndrome, where outcome is determined by the time to decompression, so emergency MRI and same-day surgical referral is the only acceptable answer. Neuropathic drugs, radiographs and epidural injections treat radicular pain and waste the operative window. Catheterisation is a necessary supportive step but is not the definitive action, and steroids have no established role outside malignant compression.",
      difficulty: "easy",
    },
    {
      id: "musculoskeletal-low-back-pain-q3",
      stem: "A 26-year-old man has had low back and alternating buttock pain for 14 months. He has 1 hour of morning stiffness, wakes at 4 am with pain, and feels better after moving about. Modified Schober test shows a 3 cm increase. What is the most useful initial investigation?",
      options: [
        "MRI lumbosacral spine",
        "Anteroposterior radiograph of the pelvis for sacroiliac joints, with ESR and CRP",
        "Serum uric acid",
        "Rheumatoid factor and anti-CCP antibody",
        "Nerve conduction study of both lower limbs",
      ],
      answer: 1,
      explanation:
        "This is textbook inflammatory back pain with restricted lumbar flexion, so the first step is a pelvic radiograph looking for sacroiliitis together with acute phase reactants; if radiographs are normal and suspicion is high, MRI of the sacroiliac joints follows. MRI of the lumbar spine is aimed at discs and misses the sacroiliac joints, which are the diagnostic site. Uric acid is irrelevant to axial pain, rheumatoid factor and anti-CCP test for a peripheral small joint disease that spares the axial skeleton, and nerve conduction studies address radiculopathy, which he does not have.",
      difficulty: "moderate",
    },
    {
      id: "musculoskeletal-low-back-pain-q4",
      stem: "A 60-year-old woman on long-term oral prednisolone for asthma develops sudden mid-thoracic back pain after bending to lift a bucket. She is tender over T10 and has lost 4 cm of height over two years. Neurological examination is normal. What is the most likely diagnosis?",
      options: [
        "Osteoporotic vertebral compression fracture",
        "Lumbar disc prolapse",
        "Ankylosing spondylitis",
        "Fibromyalgia",
        "Mechanical muscular strain",
      ],
      answer: 0,
      explanation:
        "Sudden focal thoracic pain after trivial loading in a steroid-treated postmenopausal woman with documented height loss is an osteoporotic compression fracture, and midline bony tenderness supports it; a lateral thoracolumbar radiograph confirms it and she then needs bone density testing and antiresorptive therapy. Disc prolapse is rare in the thoracic spine and would cause radicular or cord signs, not isolated bony tenderness. Ankylosing spondylitis begins before 45 with inflammatory features, and fibromyalgia and muscular strain do not produce sudden focal midline bone tenderness with height loss.",
      difficulty: "easy",
    },
    {
      id: "musculoskeletal-low-back-pain-q5",
      stem: "A 68-year-old man complains of bilateral buttock and calf aching after walking 200 metres, relieved within minutes by sitting or leaning over his cycle handlebar. He can cycle several kilometres without symptoms. Peripheral pulses are normal. What is the most likely diagnosis?",
      options: [
        "Peripheral arterial disease with intermittent claudication",
        "Lumbar canal stenosis with neurogenic claudication",
        "Bilateral hip osteoarthritis",
        "Fibromyalgia",
        "Diabetic peripheral neuropathy",
      ],
      answer: 1,
      explanation:
        "Relief on flexion, preserved cycling tolerance and normal peripheral pulses define neurogenic claudication from lumbar canal stenosis, in which flexion enlarges the canal. Vascular claudication is relieved by simply standing still, is not posture-dependent, and would be accompanied by absent or reduced pulses. Hip osteoarthritis causes groin pain with restricted internal rotation rather than exertional buttock and calf pain, and neither fibromyalgia nor diabetic neuropathy has this reproducible walking-distance and posture relationship.",
      difficulty: "moderate",
    },
    {
      id: "musculoskeletal-low-back-pain-q6",
      stem: "A 35-year-old man with back pain for 4 months has evening fever, 6 kg weight loss, and a localised angular kyphosis at the thoracolumbar junction. ESR is 78 mm/h. What is the most appropriate next step?",
      options: [
        "Start empirical four-drug antitubercular therapy immediately",
        "MRI of the spine and an image-guided biopsy for Xpert MTB/RIF and culture before treatment",
        "Prescribe an NSAID and physiotherapy and review in 6 weeks",
        "Bone scan of the whole skeleton",
        "Lumbar epidural steroid injection",
      ],
      answer: 1,
      explanation:
        "Constitutional symptoms, a gibbus and a very high ESR indicate spinal tuberculosis, and current practice is to obtain tissue by image-guided biopsy for Xpert MTB/RIF, histopathology and culture before committing a patient to a year of therapy, because drug resistance and alternative diagnoses such as pyogenic infection and malignancy are all realistic. Empirical treatment without tissue is accepted only when biopsy is impossible or the patient is deteriorating. NSAIDs and physiotherapy would treat a red-flag presentation as mechanical pain, a bone scan lacks specificity, and an epidural injection into a possibly infected space is dangerous.",
      difficulty: "moderate",
    },
    {
      id: "musculoskeletal-low-back-pain-q7",
      stem: "A 40-year-old clerk has had non-specific low back pain for 10 weeks. He believes his spine is crumbling, has stopped walking, has taken 6 weeks of sick leave and scores high on the STarT Back tool. Which intervention has the best evidence for preventing long-term disability?",
      options: [
        "A further 4 weeks of rest and analgesia",
        "Lumbar traction and a corset",
        "A structured exercise programme combined with pain education and cognitive behavioural elements",
        "Repeat MRI to reassure him",
        "Long-term tramadol",
      ],
      answer: 2,
      explanation:
        "High STarT Back risk marks a patient whose disability is being driven by fear-avoidance and catastrophising, and combined exercise with psychologically informed pain education is the intervention with the strongest evidence for preventing chronic disability. More rest reinforces the belief that movement is dangerous, and traction and corsets have no supporting evidence while encouraging passivity. Repeat imaging finds incidental degenerative changes that entrench the very beliefs you are trying to change, and long-term opioids are explicitly not recommended for chronic back pain.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "musculoskeletal-low-back-pain-c1",
      front: "What proportion of low back pain is non-specific, radicular and serious pathology?",
      back: "About 90% non-specific mechanical, 5-10% radicular, and 1-2% serious specific pathology (infection, tumour, fracture, inflammatory).",
    },
    {
      id: "musculoskeletal-low-back-pain-c2",
      front: "Name the five cardinal features of cauda equina syndrome.",
      back: "Bilateral sciatica, saddle anaesthesia, bladder dysfunction with retention and overflow, faecal incontinence with lax anal tone, and progressive lower limb weakness.",
    },
    {
      id: "musculoskeletal-low-back-pain-c3",
      front: "When is imaging indicated in acute low back pain?",
      back: "Only when a red flag is present, or when pain persists beyond 6 weeks. MRI is the modality for suspected cauda equina, infection, tumour or surgical radiculopathy.",
    },
    {
      id: "musculoskeletal-low-back-pain-c4",
      front: "Five features of inflammatory back pain.",
      back: "Onset before 45, insidious, morning stiffness over 30 minutes, night pain in the second half of the night, improvement with exercise and not with rest (plus a dramatic NSAID response).",
    },
    {
      id: "musculoskeletal-low-back-pain-c5",
      front: "How is the modified Schober test performed and what is normal?",
      back: "Mark 10 cm above and 5 cm below the lumbosacral junction (dimples of Venus) with the patient erect; on full flexion the 15 cm distance should increase by more than 5 cm. Less than 5 cm indicates restricted lumbar flexion.",
    },
    {
      id: "musculoskeletal-low-back-pain-c6",
      front: "Interpret the straight leg raise and the crossed straight leg raise.",
      back: "SLR reproducing radicular pain below the knee at 30-70 degrees is sensitive but not specific for disc herniation; the crossed SLR (pain in the affected leg when the opposite leg is raised) is insensitive but highly specific.",
    },
    {
      id: "musculoskeletal-low-back-pain-c7",
      front: "Root, weakness and reflex for L5 versus S1 radiculopathy.",
      back: "L5 - great toe and ankle dorsiflexion weakness, foot drop, reflexes preserved, sensory loss over the dorsum of foot. S1 - plantarflexion weakness, cannot toe-walk, absent ankle jerk, sensory loss over the lateral border and sole.",
    },
    {
      id: "musculoskeletal-low-back-pain-c8",
      front: "First-line drug therapy for acute non-specific low back pain.",
      back: "An NSAID at the lowest effective dose for the shortest time - ibuprofen 400 mg TDS or naproxen 250-500 mg BD after food, 5-7 days, with a PPI if there is gastric risk; paracetamol as an add-on.",
    },
    {
      id: "musculoskeletal-low-back-pain-c9",
      front: "How much bed rest is advised for acute low back pain?",
      back: "None beyond one or two days. Staying active and continuing work with modified duties speeds recovery and reduces chronicity.",
    },
    {
      id: "musculoskeletal-low-back-pain-c10",
      front: "What are yellow flags, and why do they matter more than radiographs?",
      back: "Psychosocial predictors of chronicity - fear-avoidance, catastrophising, low mood, job dissatisfaction, compensation claims. They predict long-term disability far better than any imaging finding.",
    },
    {
      id: "musculoskeletal-low-back-pain-c11",
      front: "Distinguish neurogenic from vascular claudication.",
      back: "Neurogenic - relieved by sitting or forward flexion, cycling tolerated, normal pulses, variable walking distance. Vascular - relieved by standing still, fixed claudication distance, absent or reduced pulses.",
    },
    {
      id: "musculoskeletal-low-back-pain-c12",
      front: "How should tuberculous spondylitis be confirmed before treatment?",
      back: "MRI of the spine plus image-guided biopsy for Xpert MTB/RIF, histopathology and culture, wherever biopsy is feasible - do not start empirical antitubercular therapy on imaging alone.",
    },
  ],
  references: [
    "NICE NG59: Low back pain and sciatica in over 16s - assessment and management, 2016 (updated 2020)",
    "American College of Physicians Clinical Practice Guideline on Noninvasive Treatments for Acute, Subacute and Chronic Low Back Pain, 2017",
    "Lancet Low Back Pain Series, 2018",
    "ASAS handbook and criteria for inflammatory back pain and axial spondyloarthritis, 2009-2019",
    "Index TB Guidelines, Central TB Division, MoHFW India, 2016 - skeletal tuberculosis",
    "API Textbook of Medicine, 11th edition, 2019 - approach to backache",
  ],
});

topics.push({
  id: "musculoskeletal-knee-osteoarthritis",
  title: "Osteoarthritis of the knee",
  oneLiner:
    "Knee osteoarthritis is a clinically diagnosed whole-joint disease of activity-related pain, brief morning stiffness under 30 minutes, crepitus and bony enlargement in a person over 45, treated first with weight loss and quadriceps exercise and only then with the most conservative effective analgesia.",
  frequency: "core",
  keywords: [
    "OA knee",
    "degenerative joint disease",
    "gonarthrosis",
    "Kellgren-Lawrence",
    "quadriceps strengthening",
    "topical diclofenac",
    "intra-articular steroid",
    "genu varum",
    "patellofemoral pain",
    "total knee replacement",
    "WOMAC",
    "NSAID gastroprotection",
    "chondroitin",
    "obesity",
  ],
  sections: [
    {
      heading: "Definition, burden and risk factors",
      points: [
        "**Osteoarthritis is a disease of the whole joint** - articular cartilage loss, subchondral bone remodelling with sclerosis and cysts, osteophyte formation, synovitis and capsular thickening - and not simply wear and tear of cartilage.",
        "**Community prevalence in India is high:** the ICMR-COPCORD and WHO-ILAR studies report symptomatic knee osteoarthritis in about 20-30% of adults over 45 and up to 45% of women over 65, higher than most Western estimates, largely because of squatting, floor sitting, obesity and vitamin D deficiency.",
        "**Risk factors:** age over 45, female sex, obesity (the strongest modifiable factor - each kilogram of body weight adds three to four kilograms of load across the knee in stance), previous meniscal or ligament injury, occupational squatting and kneeling, varus malalignment, and quadriceps weakness.",
        "The medial compartment is affected first in the Indian population because varus alignment is common, producing the classic bow-legged gait and later a fixed varus deformity.",
        "Pain and disability correlate poorly with radiographic severity: **radiographic osteoarthritis without pain is common and painful osteoarthritis with a near-normal radiograph is common**, so treatment is directed at symptoms and function.",
        "The functional consequences that matter in Indian homes are the inability to squat for an Indian toilet, to sit cross-legged on the floor, and to climb stairs - ask about these three specifically.",
      ],
    },
    {
      heading: "Making the diagnosis clinically",
      points: [
        "**Osteoarthritis can be diagnosed without any investigation** in a person aged 45 or over who has activity-related joint pain and either no morning stiffness or morning stiffness lasting no more than 30 minutes (NICE criteria).",
        "Typical history: pain worse at the end of the day and after activity, worse on stairs and getting up from the floor, gelling stiffness after sitting, occasional giving way, and swelling after unaccustomed use.",
        "Typical signs: bony enlargement of the joint line, coarse crepitus on movement, restricted and painful range with a fixed flexion deformity in later disease, a small cool effusion, quadriceps wasting and varus alignment.",
        "Radiographs are not needed for diagnosis but are used before referral for surgery, when the presentation is atypical, or when another diagnosis is suspected. Ask for a **weight-bearing anteroposterior and lateral view with a skyline patellar view**; a non-weight-bearing film underestimates joint space loss.",
        "**Kellgren-Lawrence grading:** grade 1 doubtful narrowing with possible osteophyte, grade 2 definite osteophyte with possible narrowing, grade 3 multiple osteophytes with definite narrowing and some sclerosis, grade 4 marked narrowing with severe sclerosis and deformity.",
        "Blood tests are only for exclusion: a normal ESR and CRP support osteoarthritis, while a raised ESR, prolonged morning stiffness, small joint involvement or systemic features should push you towards inflammatory arthritis. **Do not order rheumatoid factor in a typical osteoarthritis presentation** - a false positive creates a disease.",
      ],
    },
    {
      heading: "Examination sequence for the knee",
      points: [
        "**Expose both limbs from mid-thigh to toes and examine with the patient standing first:** look for varus or valgus alignment, popliteal swelling, quadriceps wasting (measure thigh girth 15 cm above the joint line and compare), scars and sinuses. Watch the gait for antalgia and for a varus thrust.",
        "**Lie the patient supine and look again:** effusion, wasting, fixed flexion deformity (a hand should not pass under the knee if it is fully extended), and any valgus or varus deformity assessed with the leg straight.",
        "**Feel:** temperature with the back of the hand comparing both knees and the thigh, joint line tenderness with the knee flexed to 90 degrees, the patellofemoral joint, the tibial tubercle, and the popliteal fossa for a Baker cyst. Test for effusion by the **patellar tap** (large effusion) and the **bulge or wipe test** (small effusion).",
        "**Move:** active then passive flexion and extension, recording the arc (normal 0 to 135-140 degrees) and any fixed flexion deformity, with a hand on the patella to feel crepitus. Compare with the other side.",
        "**Stability:** anterior and posterior drawer at 90 degrees, Lachman test at 20-30 degrees for the anterior cruciate ligament, and varus and valgus stress at 0 and 30 degrees for the collateral ligaments. **Meniscal tests:** McMurray and Thessaly, and joint line tenderness.",
        "**Finish:** examine the joint above (hip - pain from the hip refers to the knee, so always test hip rotation) and the joint below (ankle), assess distal pulses and neurology, and observe a functional task - standing from a chair without using the arms, walking, and squatting if safe.",
        "Say the sequence out loud in the exam - look, feel, move, special tests, joint above and below, function - and offer to measure the range with a goniometer and to examine the other knee for comparison.",
      ],
    },
    {
      heading: "Non-drug management - the core treatment",
      points: [
        "**Every patient gets three things regardless of severity: education, exercise and weight management.** Say this first in any answer, because most candidates start with drugs and lose the marks.",
        "**Exercise is the single most effective intervention.** Prescribe quadriceps strengthening (static quadriceps holds, straight leg raises, short-arc extension progressing to resistance), hip abductor strengthening, and range-of-motion work, done daily; effect size on pain is comparable with NSAIDs and it is safe indefinitely. Add low-impact aerobic activity - walking on level ground, cycling, swimming.",
        "**Weight loss of 5-10% produces clinically meaningful pain relief**, and combining diet with exercise is superior to either alone. Set a concrete target in kilograms and review it.",
        "Activity modification in the Indian context: **avoid deep squatting, sitting cross-legged on the floor, kneeling and stair climbing where possible**; advise a Western commode or a commode chair, a raised bed and chair, and a firm high seat.",
        "Adjuncts with reasonable evidence: a walking stick held in the hand opposite the affected knee, appropriate footwear with cushioned soles, local heat or cold, and supervised physiotherapy. Knee braces help selected patients with instability; **lateral wedge insoles are not recommended**.",
        "What to warn against: prolonged bed rest, unsupervised traction, repeated intramuscular analgesic injections, and the belief that the knee must be rested until it stops hurting - disuse accelerates quadriceps wasting and worsens the disease.",
      ],
    },
    {
      heading: "Drug therapy and NSAID prescribing with monitoring",
      points: [
        "**Topical NSAID first for knee osteoarthritis** - diclofenac 1% gel applied 2-4 g to the knee three to four times a day - because it achieves useful local concentrations with about one-tenth of the systemic exposure and is the recommended first-line drug in NICE and OARSI guidance.",
        "Paracetamol 500-1000 mg PO up to QDS (maximum 3 g/day in the elderly) has small benefit but is safe; it is an adjunct, not a solution.",
        "**Oral NSAIDs are for flares, at the lowest dose for the shortest period, with gastroprotection.** Practical choices: ibuprofen 400 mg PO TDS (lowest cardiovascular risk), naproxen 250-500 mg PO BD (preferred if cardiovascular risk is high), diclofenac 50 mg PO BD (highest cardiovascular risk - avoid in ischaemic heart disease, stroke and heart failure), or etoricoxib 60 mg PO OD (better gastric tolerance, higher blood pressure and cardiovascular risk).",
        "**Before prescribing any oral NSAID check:** age, prior peptic ulcer or gastrointestinal bleed, concurrent aspirin, steroid, anticoagulant or SSRI, renal function and eGFR, blood pressure, heart failure, asthma, and pregnancy. **Co-prescribe a proton pump inhibitor** (pantoprazole 40 mg or omeprazole 20 mg PO OD) for anyone over 60, or with any of those risks.",
        "**Monitoring on regular NSAIDs:** blood pressure and weight at 2-4 weeks, serum creatinine and potassium at 2-4 weeks and then every 3-6 months, haemoglobin if there is any gastrointestinal symptom, and an explicit instruction to stop and report black stools, dyspepsia, ankle swelling or reduced urine output. **Avoid NSAIDs when eGFR is below 30 mL/min/1.73 m2**, in decompensated heart failure, in cirrhosis with ascites, and alongside ACE inhibitor plus diuretic in a dehydrated patient (the triple whammy of acute kidney injury).",
        "**Intra-articular corticosteroid** (triamcinolone acetonide 40 mg or methylprednisolone acetate 40 mg with 1% lignocaine, under strict asepsis) gives 4-8 weeks of relief for an inflammatory flare with effusion; limit to three or four injections in a year in one joint and never inject if infection is possible.",
        "**Drugs that should not be routinely prescribed:** glucosamine and chondroitin (no consistent benefit), intra-articular hyaluronic acid (marginal at best, expensive), long-term opioids and tramadol (poor benefit, real harm in the elderly), and systemic oral steroids, which have no role in osteoarthritis. Duloxetine 30-60 mg PO OD is a reasonable option for chronic pain with a central sensitisation component.",
      ],
    },
    {
      heading: "Referral, surgery and what to tell the patient",
      points: [
        "**Refer for arthroplasty when pain and functional loss are refractory to a properly delivered non-surgical package** and are affecting sleep, work or daily life - not on the basis of radiographic grade alone.",
        "Total knee replacement is highly effective: about 80-90% of prostheses survive 15-20 years and satisfaction rates approach 80%. Discuss the 1-2% risk of infection, thromboembolism, and the fact that deep squatting and floor sitting will not be regained.",
        "Younger patients with isolated medial compartment disease and varus alignment may be candidates for high tibial osteotomy or unicompartmental replacement.",
        "**Arthroscopic lavage and debridement is not indicated for osteoarthritis** - multiple trials show no benefit over sham, and a degenerate meniscal tear on MRI in an arthritic knee is not an indication for meniscectomy.",
        "Refer sooner if the diagnosis is uncertain, if there is a locked knee, a large tense effusion, suspicion of septic arthritis or a rapidly deteriorating joint.",
        "Prognosis message for the patient: osteoarthritis is common, it is not a crippling inevitability, most people stabilise with exercise and weight control, and the aim is a knee that does the day's work rather than a knee that never hurts.",
      ],
    },
  ],
  tables: [
    {
      heading: "Osteoarthritis versus rheumatoid arthritis at the bedside",
      columns: ["Feature", "Osteoarthritis", "Rheumatoid arthritis"],
      rows: [
        ["Age at onset", "Usually over 45", "30-50, any age"],
        ["Morning stiffness", "Under 30 minutes, gelling after rest", "Over 60 minutes, improves with use"],
        ["Joints involved", "Knees, hips, DIP, first CMC, cervical and lumbar spine", "MCP, PIP, wrists, MTP; spares DIP and lumbar spine"],
        ["Symmetry", "Often asymmetrical", "Symmetrical"],
        ["Swelling", "Bony, hard, cool", "Soft, boggy, warm synovitis"],
        ["Systemic features", "Absent", "Fatigue, weight loss, anaemia, nodules"],
        ["Laboratory", "ESR and CRP normal", "ESR and CRP raised, RF and anti-CCP often positive"],
        ["Radiograph", "Joint space narrowing, osteophytes, subchondral sclerosis and cysts", "Periarticular osteopenia, marginal erosions, uniform narrowing"],
      ],
    },
    {
      heading: "Analgesia in knee osteoarthritis, in order of preference",
      columns: ["Option", "Dose", "Evidence and caution"],
      rows: [
        ["Topical NSAID", "Diclofenac 1% gel, 2-4 g to the knee TDS-QDS", "First-line; minimal systemic exposure; local rash only"],
        ["Paracetamol", "500-1000 mg PO QDS, maximum 3 g/day in the elderly", "Small effect; safe adjunct; reduce in liver disease"],
        ["Oral NSAID for flares", "Ibuprofen 400 mg TDS, or naproxen 250-500 mg BD, with a PPI", "Effective but time-limited; check BP, creatinine and gastric risk"],
        ["Intra-articular steroid", "Triamcinolone 40 mg with lignocaine, aseptic technique", "4-8 weeks of relief in an effusive flare; maximum 3-4 per year"],
        ["Duloxetine", "30 mg PO OD for 1 week, then 60 mg OD", "For chronic pain with central sensitisation; nausea, dry mouth"],
        ["Not recommended", "Glucosamine, chondroitin, hyaluronic acid, long-term opioids, oral steroids", "No consistent benefit; opioids cause falls and dependence"],
      ],
    },
    {
      heading: "Safety checks before and during oral NSAID therapy",
      columns: ["Domain", "Check before starting", "Monitor on treatment"],
      rows: [
        ["Gastrointestinal", "Past ulcer or bleed, dyspepsia, age over 60, aspirin, steroid, anticoagulant, SSRI", "Co-prescribe a PPI; ask about dyspepsia and melaena at each visit"],
        ["Renal", "eGFR, diuretic or ACEi/ARB use, dehydration, heart failure", "Creatinine and potassium at 2-4 weeks then 3-6 monthly; stop if eGFR under 30"],
        ["Cardiovascular", "Ischaemic heart disease, stroke, heart failure, uncontrolled hypertension", "Blood pressure and weight at 2-4 weeks; prefer naproxen, avoid diclofenac and high-dose coxibs"],
        ["Other", "Asthma with NSAID sensitivity, pregnancy, warfarin, lithium, methotrexate", "Watch for wheeze, bruising, INR change and methotrexate toxicity"],
      ],
    },
  ],
  redFlags: [
    "A hot, swollen, exquisitely painful knee with fever or rigors - septic arthritis; aspirate and refer the same day, do not inject steroid.",
    "A true locked knee that cannot be fully extended, after a twisting injury - displaced bucket-handle meniscal tear needing orthopaedic assessment.",
    "Night pain, rest pain, weight loss or a bony mass around the knee in a young adult - primary bone tumour or metastasis, image urgently.",
    "Rapid destruction of the joint over weeks with severe pain out of proportion - consider infection, avascular necrosis or a neuropathic (Charcot) joint in a diabetic.",
    "A large tense effusion after minor trauma with an inability to weight-bear - haemarthrosis from cruciate rupture or fracture; radiograph and refer.",
    "Fever, multiple joint involvement, rash or prolonged morning stiffness in a patient labelled osteoarthritis - the diagnosis is wrong, reassess for inflammatory arthritis.",
  ],
  pearls: [
    "Knee osteoarthritis is a clinical diagnosis in anyone over 45 with activity-related pain and morning stiffness under 30 minutes - a radiograph adds nothing to the diagnosis and much to the anxiety.",
    "Exercise and weight loss are not adjuncts to drugs; they are the treatment, and every answer should start with them.",
    "One kilogram of body weight is three to four kilograms across the knee in stance - which is why 5-10% weight loss produces real pain relief.",
    "Order weight-bearing radiographs; a supine film makes a bone-on-bone knee look preserved.",
    "Always examine the hip in a patient with knee pain, especially in a child or adolescent, because hip pathology refers to the knee.",
    "Use topical diclofenac before oral NSAIDs in the knee; it works, and it does not damage the stomach or the kidney.",
    "The triple whammy of an NSAID with an ACE inhibitor or ARB and a diuretic in a dehydrated elderly patient is a common and preventable cause of acute kidney injury in Indian practice.",
    "Arthroscopic washout for osteoarthritis is no better than a sham operation - refuse it politely and refer for replacement when function, not the radiograph, demands it.",
  ],
  theory: [
    {
      id: "musculoskeletal-knee-osteoarthritis-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 58-year-old obese housewife complains of pain in both knees for two years, worse on climbing stairs and getting up from the floor. Discuss the clinical assessment, investigations and stepwise management of her condition.",
      openingLines: [
        "Osteoarthritis is a disease of the whole synovial joint characterised by focal cartilage loss, subchondral bone sclerosis and cysts, osteophyte formation and synovitis, presenting as activity-related pain with morning stiffness of less than 30 minutes.",
        "Symptomatic knee osteoarthritis affects 20-30% of Indian adults over 45 and is the commonest cause of ambulatory disability in this age group; it can be diagnosed clinically without imaging.",
      ],
      answer: [
        {
          heading: "1. History",
          points: [
            "Site, duration, activity-related pattern, stiffness after rest of less than 30 minutes, night pain, giving way, locking, and swelling.",
            "Function in Indian terms: squatting for the toilet, sitting cross-legged, stair climbing, walking distance, and the ability to do household work.",
            "Risk factors: obesity, previous knee injury or meniscectomy, occupational squatting and kneeling, family history.",
            "Screen for inflammatory features - prolonged morning stiffness, small joint pain, systemic symptoms - and for comorbidity that limits drug choice: hypertension, diabetes, chronic kidney disease, peptic ulcer, ischaemic heart disease.",
            "Current treatment including self-prescribed analgesics, ayurvedic and over-the-counter preparations, and previous injections.",
          ],
        },
        {
          heading: "2. Examination",
          points: [
            "Standing: alignment (genu varum is usual in India), gait, varus thrust, quadriceps wasting with measured thigh girth.",
            "Supine look: effusion, fixed flexion deformity, wasting, scars.",
            "Feel: temperature, joint line tenderness, patellofemoral crepitus, patellar tap and bulge test, popliteal fossa for a Baker cyst.",
            "Move: active and passive range with crepitus, and the degree of fixed flexion.",
            "Special tests: collateral and cruciate stability, McMurray for meniscal pathology; then examine the hip and ankle, distal pulses and neurology, and observe a sit-to-stand.",
            "General: body mass index by Asian-Indian cut-offs and waist circumference, blood pressure.",
          ],
        },
        {
          heading: "3. Investigations",
          points: [
            "The diagnosis is clinical; investigations are for exclusion and for surgical planning.",
            "Weight-bearing anteroposterior, lateral and skyline radiographs if the presentation is atypical or referral is contemplated - look for joint space narrowing, osteophytes, subchondral sclerosis and cysts, and grade by Kellgren-Lawrence.",
            "ESR, CRP, complete blood count if inflammatory arthritis is suspected; do not order rheumatoid factor in a typical case.",
            "Fasting glucose or HbA1c, lipids, serum creatinine and eGFR before starting an NSAID; serum 25-hydroxyvitamin D and calcium where diffuse pain and proximal weakness coexist.",
            "Aspirate and send for cell count, Gram stain, culture and crystals if the joint is hot and acutely swollen.",
          ],
        },
        {
          heading: "4. Non-pharmacological management",
          points: [
            "Education about the diagnosis and its prognosis, with written advice.",
            "Structured quadriceps and hip abductor strengthening and range of motion exercises daily, plus low-impact aerobic activity - the intervention with the largest and most durable effect.",
            "Weight reduction target of 5-10% with a defined kilogram goal and a dietary plan; refer to a dietitian where available.",
            "Activity modification: avoid squatting, kneeling and floor sitting; Western commode, raised chair and bed, use of a stick in the opposite hand, cushioned footwear.",
            "Local heat, supervised physiotherapy, and a knee brace only for demonstrable instability.",
          ],
        },
        {
          heading: "5. Drug therapy with safety monitoring",
          points: [
            "Topical diclofenac 1% gel 2-4 g to each knee three to four times a day as the first-line drug.",
            "Paracetamol 500-1000 mg QDS as an adjunct; oral NSAID (ibuprofen 400 mg TDS or naproxen 250-500 mg BD) only for flares, at the lowest dose for the shortest time, with a proton pump inhibitor.",
            "Before an oral NSAID: check blood pressure, creatinine, gastric risk and cardiovascular status. On treatment: blood pressure at 2-4 weeks, creatinine and potassium at 2-4 weeks and 3-6 monthly, and stop instructions for melaena, dyspepsia or oedema.",
            "Intra-articular triamcinolone 40 mg for an effusive flare, maximum three to four injections a year per joint, under strict asepsis.",
            "Duloxetine 30-60 mg daily for chronic centralised pain; avoid glucosamine, hyaluronic acid, long-term opioids and systemic steroids.",
          ],
        },
        {
          heading: "6. Referral and follow-up",
          points: [
            "Refer for total knee replacement when pain and function are refractory to a properly delivered conservative package, not on radiographic grade.",
            "Urgent referral for a hot joint, a locked knee, a rapidly destructive picture or suspicion of malignancy.",
            "Review at 6-8 weeks to check exercise adherence, weight change and analgesic safety; then 3-6 monthly.",
            "Address comorbidity: osteoarthritis clusters with obesity, diabetes and cardiovascular disease, and the knee consultation is an opportunity to manage all three.",
          ],
        },
      ],
      mustDraw: [
        "A table contrasting osteoarthritis with rheumatoid arthritis on age, stiffness, joints, swelling, laboratory and radiographic features.",
        "A stepped pyramid of management with education, exercise and weight loss at the base and joint replacement at the apex.",
        "A labelled sketch of radiographic features of knee osteoarthritis: asymmetrical joint space narrowing, osteophytes, subchondral sclerosis and cysts.",
      ],
      markSplit: [
        { part: "Definition, burden and risk factors", marks: 1 },
        { part: "History and functional assessment", marks: 1.5 },
        { part: "Examination of the knee", marks: 2 },
        { part: "Investigations and their limits", marks: 1.5 },
        { part: "Non-drug management", marks: 2 },
        { part: "Drugs with monitoring, and referral criteria", marks: 2 },
      ],
      keywords: ["knee osteoarthritis", "Kellgren-Lawrence", "quadriceps exercise", "topical NSAID", "total knee replacement"],
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-t2",
      paper: "II",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Write short notes on the rational and safe use of NSAIDs in general practice.",
      openingLines: [
        "Non-steroidal anti-inflammatory drugs inhibit cyclo-oxygenase, reducing prostaglandin synthesis; COX-1 inhibition explains the gastric and renal toxicity and COX-2 inhibition the anti-inflammatory effect and the cardiovascular risk.",
        "They are among the most prescribed and most misused drugs in Indian practice, and the exam expects a structured account of indications, selection, risk stratification and monitoring.",
      ],
      answer: [
        {
          heading: "Principles of use",
          points: [
            "Use the **lowest effective dose for the shortest necessary duration**, and reassess the need at every visit.",
            "Prefer a topical NSAID for a superficial single joint such as the knee or hand before any oral drug.",
            "Do not combine two NSAIDs, and remember that low-dose aspirin plus an NSAID multiplies gastric risk.",
            "Avoid fixed-dose combinations of two analgesics and a muscle relaxant, which are widely sold and add toxicity without added benefit.",
          ],
        },
        {
          heading: "Choosing the drug by risk profile",
          points: [
            "High gastrointestinal risk: a COX-2 selective agent (etoricoxib 60 mg OD or celecoxib 200 mg OD) plus a proton pump inhibitor, or a non-selective NSAID with a PPI.",
            "High cardiovascular risk: **naproxen** has the most favourable cardiovascular profile; avoid diclofenac and high-dose etoricoxib.",
            "Renal impairment: avoid all NSAIDs when eGFR is under 30 mL/min/1.73 m2, and use with great caution between 30 and 60.",
            "Elderly, cirrhosis with ascites, heart failure, and any patient on an ACE inhibitor plus diuretic - prefer paracetamol or topical therapy.",
          ],
        },
        {
          heading: "Adverse effects",
          points: [
            "Gastrointestinal: dyspepsia, peptic ulcer, bleeding and perforation; risk rises with age, past ulcer, steroids, anticoagulants and SSRIs.",
            "Renal: sodium and water retention, hypertension, hyperkalaemia, acute kidney injury, interstitial nephritis and analgesic nephropathy.",
            "Cardiovascular: raised blood pressure, worsening heart failure, and increased myocardial infarction and stroke risk.",
            "Others: asthma exacerbation and aspirin-exacerbated respiratory disease, hepatotoxicity, rash and Stevens-Johnson syndrome, and interaction with warfarin, lithium and methotrexate.",
          ],
        },
        {
          heading: "Monitoring and counselling",
          points: [
            "Baseline: blood pressure, creatinine and eGFR, haemoglobin, gastric history, and a full drug list.",
            "On therapy: blood pressure and weight at 2-4 weeks; creatinine and potassium at 2-4 weeks and 3-6 monthly if continued; haemoglobin if symptomatic.",
            "Counsel to take with food, to stop and report black stools, vomiting of blood, dyspepsia, ankle swelling, reduced urine output or breathlessness, and to avoid additional over-the-counter painkillers.",
          ],
        },
      ],
      mustDraw: ["A table of NSAID choice against gastrointestinal, cardiovascular and renal risk, with the gastroprotection decision."],
      markSplit: [
        { part: "Mechanism and principles of rational use", marks: 1 },
        { part: "Drug selection by risk profile", marks: 1.5 },
        { part: "Adverse effects by system", marks: 1.5 },
        { part: "Monitoring and patient counselling", marks: 1 },
      ],
      keywords: ["NSAID", "COX-2", "gastroprotection", "proton pump inhibitor", "triple whammy", "naproxen"],
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-t3",
      paper: "III",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the indications, technique, complications and contraindications of intra-articular corticosteroid injection of the knee.",
      openingLines: [
        "Intra-articular corticosteroid injection delivers a depot of anti-inflammatory drug into the synovial cavity, giving 4-8 weeks of symptomatic relief in an inflammatory or effusive flare.",
        "It is a procedure a family physician can perform safely provided asepsis and case selection are strict.",
      ],
      answer: [
        {
          heading: "Indications",
          points: [
            "Osteoarthritis of the knee with a painful effusive flare not controlled by topical or oral analgesia.",
            "Inflammatory monoarthritis once sepsis has been excluded - rheumatoid arthritis, spondyloarthritis, crystal arthritis.",
            "As a bridge while a disease-modifying drug takes effect, or before a period when function is essential.",
          ],
        },
        {
          heading: "Technique",
          points: [
            "Consent, aseptic preparation with chlorhexidine or povidone-iodine, sterile gloves, no-touch technique.",
            "Lateral or medial mid-patellar approach with the knee extended and the quadriceps relaxed, or the anterolateral approach with the knee flexed at 90 degrees.",
            "Aspirate any effusion first and inspect the fluid; send it for cell count, Gram stain, culture and crystals if there is any doubt.",
            "Inject triamcinolone acetonide 40 mg or methylprednisolone acetate 40 mg with 1-2 mL of 1% lignocaine; dress, and advise relative rest of the joint for 24-48 hours.",
          ],
        },
        {
          heading: "Complications",
          points: [
            "Septic arthritis - rare (about 1 in 10,000-50,000) but catastrophic.",
            "Post-injection steroid flare in the first 24-48 hours, subcutaneous fat atrophy and skin depigmentation.",
            "Transient hyperglycaemia for 2-5 days, important in diabetics, and facial flushing.",
            "Repeated injection may accelerate cartilage loss; limit to three or four per joint per year.",
          ],
        },
        {
          heading: "Contraindications",
          points: [
            "Suspected or proven septic arthritis, overlying cellulitis or skin infection, and bacteraemia.",
            "Prosthetic joint - refer to the surgeon.",
            "Uncontrolled bleeding disorder or supratherapeutic anticoagulation.",
            "Uncontrolled diabetes (relative), and known hypersensitivity to the preparation.",
          ],
        },
      ],
      mustDraw: ["A labelled diagram of the knee showing the lateral mid-patellar injection site relative to the patella and the joint line."],
      markSplit: [
        { part: "Indications", marks: 1 },
        { part: "Technique with drug and dose", marks: 2 },
        { part: "Complications", marks: 1 },
        { part: "Contraindications", marks: 1 },
      ],
      keywords: ["intra-articular injection", "triamcinolone", "aseptic technique", "septic arthritis", "steroid flare"],
    },
  ],
  mcqs: [
    {
      id: "musculoskeletal-knee-osteoarthritis-q1",
      stem: "A 55-year-old woman with a body mass index of 31 kg/m2 has bilateral knee pain worse on stairs, morning stiffness of 10 minutes, coarse crepitus and bony joint line enlargement. There is no warmth or systemic symptom. What is the most appropriate first step?",
      options: [
        "Weight-bearing radiographs of both knees before making a diagnosis",
        "Rheumatoid factor and anti-CCP antibody",
        "Diagnose osteoarthritis clinically and start education, quadriceps exercise, weight reduction and topical diclofenac",
        "Start oral diclofenac 50 mg twice daily for three months",
        "Refer to orthopaedics for arthroscopic washout",
      ],
      answer: 2,
      explanation:
        "Activity-related knee pain with morning stiffness under 30 minutes in a person over 45 meets the clinical criteria for osteoarthritis and needs no investigation at all, so the core package of education, exercise, weight loss and a topical NSAID starts immediately. Radiographs neither confirm nor exclude the diagnosis and correlate poorly with symptoms, and rheumatoid serology in a typical osteoarthritis picture generates false positives. Three months of oral diclofenac is the highest-cardiovascular-risk NSAID given for the longest acceptable time, and arthroscopic washout has been shown to be no better than sham surgery.",
      difficulty: "easy",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-q2",
      stem: "A 70-year-old man with knee osteoarthritis, hypertension on enalapril and furosemide, and an eGFR of 42 mL/min/1.73 m2 requests something stronger for his pain. Which is the safest effective option?",
      options: [
        "Naproxen 500 mg twice daily with a proton pump inhibitor",
        "Etoricoxib 90 mg once daily",
        "Topical diclofenac gel with paracetamol, plus a supervised exercise programme",
        "Indomethacin 25 mg three times daily",
        "Long-acting tramadol 100 mg twice daily",
      ],
      answer: 2,
      explanation:
        "An elderly man on an ACE inhibitor plus a diuretic with an eGFR of 42 is exactly the patient in whom an oral NSAID completes the triple whammy and precipitates acute kidney injury and hyperkalaemia, so topical NSAID with paracetamol and exercise is the correct choice. Naproxen, etoricoxib and indomethacin all carry that renal risk, and indomethacin additionally causes confusion in the elderly. Tramadol in a 70-year-old produces dizziness, falls, hyponatraemia and dependence with only modest analgesic gain, and is not recommended for chronic osteoarthritis pain.",
      difficulty: "moderate",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-q3",
      stem: "Which single intervention has the largest and most durable effect on pain and function in knee osteoarthritis?",
      options: [
        "Glucosamine sulphate 1500 mg daily",
        "Intra-articular hyaluronic acid",
        "A structured quadriceps strengthening and aerobic exercise programme with weight reduction",
        "Lateral wedge insoles",
        "Arthroscopic debridement",
      ],
      answer: 2,
      explanation:
        "Exercise combined with weight loss is the intervention with the strongest evidence across all guidelines, with an effect on pain comparable to NSAIDs and, unlike drugs, sustainable indefinitely with additional metabolic benefit. Glucosamine and hyaluronic acid have failed to show consistent benefit over placebo in high-quality trials, lateral wedge insoles are explicitly not recommended, and arthroscopic debridement performs no better than sham surgery in osteoarthritic knees.",
      difficulty: "easy",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-q4",
      stem: "A 62-year-old diabetic woman with knee osteoarthritis received an intra-articular steroid injection 4 days ago. She now has a hot, swollen, exquisitely tender knee, fever of 38.8 C and cannot bear weight. What is the immediate management?",
      options: [
        "Repeat the intra-articular steroid injection",
        "Urgent joint aspiration for cell count, Gram stain and culture, then admit and start intravenous antibiotics",
        "Start oral etoricoxib and review in 48 hours",
        "Radiograph of the knee and reassure if normal",
        "Start empirical antitubercular therapy",
      ],
      answer: 1,
      explanation:
        "A hot joint with fever after an injection is septic arthritis until proved otherwise, and joint aspiration before antibiotics followed by admission and intravenous therapy is the only safe pathway; delay destroys cartilage within days. Repeating steroid into an infected joint is disastrous, and an NSAID would mask the fever and pain while the infection progresses. A radiograph is normal in early septic arthritis and cannot exclude it, and tuberculosis presents as a chronic indolent monoarthritis rather than an acute post-procedural fever.",
      difficulty: "easy",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-q5",
      stem: "A 46-year-old man reports his knee suddenly locking in 30 degrees of flexion after twisting while playing cricket, with a small effusion and medial joint line tenderness. He cannot fully extend the knee. What is the most likely diagnosis?",
      options: [
        "Osteoarthritis flare",
        "Bucket-handle tear of the medial meniscus",
        "Anterior cruciate ligament rupture",
        "Patellar dislocation",
        "Gout of the knee",
      ],
      answer: 1,
      explanation:
        "A true mechanical block to full extension after a twisting injury with medial joint line tenderness is the classic displaced bucket-handle meniscal tear, which needs orthopaedic referral for arthroscopic repair. An osteoarthritis flare produces pain and stiffness but no true locking. Anterior cruciate rupture causes an immediate tense haemarthrosis and giving way with a positive Lachman test rather than a locked knee, and patellar dislocation is visibly deformed and usually reduces with extension. Gout gives a hot, red, inflamed joint without a mechanical block.",
      difficulty: "moderate",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-q6",
      stem: "Which radiographic view is essential when assessing joint space narrowing in knee osteoarthritis?",
      options: [
        "Supine anteroposterior view",
        "Weight-bearing anteroposterior view",
        "Oblique view",
        "Cross-table lateral view",
        "MRI is required in all cases",
      ],
      answer: 1,
      explanation:
        "Joint space narrowing reflects cartilage and meniscal loss only when the joint is loaded, so a weight-bearing anteroposterior view (with lateral and skyline views to complete the series) is essential; a supine film systematically underestimates narrowing and can make a bone-on-bone knee look preserved. Oblique and cross-table lateral views answer trauma questions rather than degenerative ones, and MRI is not required for the diagnosis of osteoarthritis and typically reveals incidental degenerate meniscal tears that tempt inappropriate surgery.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "musculoskeletal-knee-osteoarthritis-c1",
      front: "NICE criteria for diagnosing osteoarthritis clinically, without investigation.",
      back: "Age 45 or over, activity-related joint pain, and either no morning stiffness or morning stiffness lasting no longer than 30 minutes.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c2",
      front: "The four radiographic features of osteoarthritis.",
      back: "Asymmetrical joint space narrowing, osteophytes, subchondral sclerosis and subchondral cysts.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c3",
      front: "Kellgren-Lawrence grade 3 and grade 4.",
      back: "Grade 3 - multiple osteophytes, definite joint space narrowing, some sclerosis and possible deformity. Grade 4 - large osteophytes, marked narrowing, severe sclerosis and definite deformity.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c4",
      front: "The three core treatments every osteoarthritis patient must receive.",
      back: "Education, exercise (quadriceps and aerobic) and weight management. Drugs are adjuncts to these, never a substitute.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c5",
      front: "First-line drug for knee osteoarthritis and why.",
      back: "Topical diclofenac 1% gel 2-4 g TDS-QDS - effective locally with roughly one-tenth the systemic exposure of an oral NSAID.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c6",
      front: "What is the NSAID triple whammy?",
      back: "NSAID plus ACE inhibitor or ARB plus diuretic in a volume-depleted patient - a common preventable cause of acute kidney injury.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c7",
      front: "Monitoring schedule for a patient on regular oral NSAIDs.",
      back: "Blood pressure and weight at 2-4 weeks; serum creatinine and potassium at 2-4 weeks and then 3-6 monthly; haemoglobin if gastrointestinal symptoms; stop rules for melaena, dyspepsia, oedema or reduced urine output.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c8",
      front: "Which NSAID for the patient with high cardiovascular risk, and which to avoid?",
      back: "Naproxen has the most favourable cardiovascular profile; avoid diclofenac and high-dose etoricoxib. Add a PPI for gastroprotection.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c9",
      front: "How is an effusion detected on knee examination?",
      back: "Patellar tap for a large effusion; the bulge or wipe test (milk fluid from the medial compartment and watch it refill) for a small effusion.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c10",
      front: "Maximum frequency of intra-articular steroid injection in one joint.",
      back: "Three to four injections per year, with at least three months between injections; never inject if infection is suspected or into a prosthetic joint.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c11",
      front: "In which hand should a walking stick be held for a painful right knee?",
      back: "In the left hand - the hand opposite the affected knee - so that it unloads the painful joint.",
    },
    {
      id: "musculoskeletal-knee-osteoarthritis-c12",
      front: "Name four treatments for knee osteoarthritis that are not recommended.",
      back: "Glucosamine and chondroitin, intra-articular hyaluronic acid, arthroscopic lavage and debridement, and long-term opioids (add lateral wedge insoles and systemic steroids).",
    },
  ],
  references: [
    "NICE NG226: Osteoarthritis in over 16s - diagnosis and management, 2022",
    "OARSI Guidelines for the Non-surgical Management of Knee, Hip and Polyarticular Osteoarthritis, 2019",
    "ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip and Knee, 2019",
    "Indian Rheumatology Association / COPCORD India epidemiological studies on rheumatic disease",
    "Apley's System of Orthopaedics and Fractures, 10th edition, 2018",
  ],
});

topics.push({
  id: "musculoskeletal-gout",
  title: "Gout and hyperuricaemia",
  oneLiner:
    "Gout is an inflammatory arthritis caused by deposition of monosodium urate crystals in and around joints once serum urate exceeds its saturation point, presenting as recurrent acute attacks that are treated with anti-inflammatories and then prevented for life by urate-lowering therapy titrated to a serum urate below 6 mg/dL.",
  frequency: "core",
  keywords: [
    "gouty arthritis",
    "monosodium urate",
    "MSU crystals",
    "podagra",
    "hyperuricaemia",
    "tophus",
    "tophi",
    "allopurinol",
    "febuxostat",
    "colchicine",
    "uric acid",
    "negatively birefringent",
    "pseudogout",
    "calcium pyrophosphate",
    "CPPD",
    "urate-lowering therapy",
    "HLA-B*5801",
    "treat to target",
  ],
  sections: [
    {
      heading: "Definition, biochemistry and epidemiology",
      points: [
        "**Gout is a crystal deposition disease, not simply a high uric acid level:** monosodium urate crystals precipitate in joints, bursae and soft tissue once serum urate exceeds the physiological saturation point of about **6.8 mg/dL (405 micromol/L)**, and the resulting crystals are engulfed by macrophages, activate the NLRP3 inflammasome and release interleukin-1 beta, which produces the intense neutrophilic synovitis of an acute attack.",
        "Uric acid is the end product of purine metabolism in humans because we lack uricase; **about two-thirds of the urate load is endogenous from cell turnover and one-third is dietary**, and roughly 70% is excreted renally and 30% through the gut.",
        "**Over 90% of primary gout is due to under-excretion of urate by the kidney**, not overproduction, which is why a purely dietary approach almost never achieves target and why urate-lowering drugs are needed.",
        "Prevalence is rising sharply in urban India with obesity, alcohol, fructose-sweetened beverages, diuretic use and chronic kidney disease; hospital series report gout in 1-2% of adult men, with a male to female ratio of about 4:1 before the menopause because oestrogen is uricosuric.",
        "Hyperuricaemia is defined biochemically as serum urate above 7.0 mg/dL in men and 6.0 mg/dL in women, but **most hyperuricaemic people never develop gout** - the annual incidence at a urate of 7-8 mg/dL is under 1%, rising to about 5% above 9 mg/dL.",
        "Gout is now understood as a marker of metabolic and vascular risk: hypertension, type 2 diabetes, dyslipidaemia, obesity, chronic kidney disease and coronary disease cluster with it, and the consultation must screen for all of them.",
      ],
    },
    {
      heading: "Clinical stages and the presentation of an acute attack",
      points: [
        "The disease passes through four stages: **asymptomatic hyperuricaemia, acute intermittent gout, the intercritical period, and chronic tophaceous gout**; naming these stages earns the structure marks in a written answer.",
        "**The classic acute attack is monoarticular, nocturnal and explosive:** pain climbs from nothing to maximum within 6-12 hours, waking the patient in the early hours, and the joint becomes red, hot, swollen and so exquisitely tender that the weight of a bedsheet is intolerable.",
        "**Podagra - the first metatarsophalangeal joint - is the first joint involved in 50-70% and is affected at some point in 90%.** The next commonest sites are the midfoot, ankle, heel, knee, wrist, fingers and olecranon bursa; the axial skeleton and hip are essentially spared.",
        "Overlying skin desquamation as the attack settles is characteristic and helps in retrospective diagnosis; low-grade fever, leucocytosis and a raised CRP are common and do not exclude gout, which is exactly why the attack is so often mistaken for septic arthritis or cellulitis.",
        "Attacks are provoked by **any abrupt shift in serum urate in either direction** - a heavy alcohol binge (especially beer, which is rich in guanosine), a purine-rich meal, dehydration, starting a diuretic, surgery, trauma, acute illness, and, importantly, starting or stopping allopurinol.",
        "Untreated attacks resolve spontaneously over 7-14 days, leaving the patient completely well in the intercritical period; **crystals persist in the joint fluid even between attacks**, which is the pathological argument for lifelong urate lowering rather than episodic treatment.",
        "**Chronic tophaceous gout** develops after years of uncontrolled disease: firm, chalky, non-tender nodules over the helix of the ear, olecranon, Achilles tendon, finger pulps and extensor surfaces, sometimes ulcerating to discharge white toothpaste-like material, with a destructive polyarticular arthritis that mimics rheumatoid disease.",
      ],
    },
    {
      heading: "Examination sequence for the acutely painful joint",
      points: [
        "**Begin with the general survey and vital signs:** temperature, pulse, blood pressure, and a look for the systemic sepsis that would change everything - rigors, tachycardia, hypotension, a portal of entry.",
        "**Expose both limbs and compare sides.** Look for erythema, its extent and margin, swelling, deformity, previous surgical scars, tophi over the helix of the ear, the olecranon and the Achilles tendon, and any discharging chalky material.",
        "**Palpate for temperature with the back of the hand, then define tenderness and effusion.** In the knee use the patellar tap for a large effusion and the bulge or cross-fluctuation test for a small one; in the first metatarsophalangeal joint note that the tenderness in gout extends beyond the joint line into the periarticular soft tissue.",
        "**Test active then passive movement.** In gout and in septic arthritis all movement is resisted, whereas in cellulitis and bursitis a careful passive range is usually preserved through part of the arc - a useful bedside discriminator to state aloud.",
        "**Examine the other joints and the spine** for a polyarticular pattern, tophi and chronic deformity, and examine the skin for psoriasis, which changes the differential entirely.",
        "**Complete the examination with the systems that drive the disease:** body mass index and waist circumference, blood pressure, cardiovascular examination, examination for chronic kidney disease and for hepatomegaly or stigmata of alcohol use, and a fundus and peripheral vascular check in a diabetic.",
        "**Say the sentence that earns the mark:** in any hot, swollen, single joint, joint aspiration is both the diagnostic test and the safety net, because septic arthritis and gout can look identical and can coexist.",
      ],
    },
    {
      heading: "Investigation and the certainty of diagnosis",
      points: [
        "**Synovial fluid aspiration with polarised light microscopy is the gold standard:** monosodium urate crystals are needle-shaped, **negatively birefringent** (yellow when parallel to the axis of the red compensator), and typically intracellular within neutrophils during an acute attack. Calcium pyrophosphate crystals of pseudogout are rhomboid and weakly positively birefringent.",
        "**Always send the same aspirate for Gram stain, cell count and culture.** Inflammatory fluid in gout usually has 20,000-70,000 white cells per cubic millimetre with over 90% neutrophils, which overlaps with sepsis, so culture is not optional.",
        "**Serum urate during an acute attack is unreliable and is normal or low in up to a third of attacks**, because acute inflammation is uricosuric; measure it at least 2 weeks after the attack settles to establish the true baseline and the treatment target.",
        "Where aspiration is not feasible, the **2015 ACR/EULAR classification criteria** allow a confident clinical diagnosis using a scoring system built on the pattern of joint involvement (especially the first metatarsophalangeal joint), the typical episode characteristics, tophi, serum urate above 6 mg/dL, and imaging evidence.",
        "Baseline workup at diagnosis: complete blood count, serum creatinine with eGFR, fasting glucose or HbA1c, lipid profile, liver function tests, urine routine for proteinuria, and blood pressure - and a 24-hour urinary uric acid only in young-onset gout or where a uricosuric is being considered.",
        "Radiographs are normal early; late films show the classic **punched-out juxta-articular erosions with sclerotic overhanging edges and preserved joint space**. Ultrasound shows the double contour sign of urate on hyaline cartilage and dual-energy CT colour-codes urate deposits, both useful when aspiration fails.",
        "**Do not anchor on a raised uric acid report.** Asymptomatic hyperuricaemia is not gout, and a normal urate in a hot joint does not exclude it - the crystal, not the number, makes the diagnosis.",
      ],
    },
    {
      heading: "Treating the acute attack",
      points: [
        "**Treat early and hard: the first 24 hours decide the length of the attack.** Any one of an NSAID, colchicine or a corticosteroid is acceptable first line, and the choice is made on the patient's comorbidities, not on any superiority of one drug.",
        "**NSAIDs:** naproxen 750 mg PO stat then 250 mg PO TDS, or indomethacin 50 mg PO TDS, or etoricoxib 120 mg PO once daily, each continued for 5-7 days or until 48 hours after the attack settles, with a proton pump inhibitor. **Avoid NSAIDs in chronic kidney disease, heart failure, active peptic ulcer, anticoagulated patients and the frail elderly.**",
        "**Colchicine, in the modern low-dose regimen:** 1.2 mg PO stat followed by 0.6 mg one hour later, then 0.6 mg once or twice daily from the next day - equally effective as, and far better tolerated than, the abandoned hourly-until-diarrhoea schedule. In India the 0.5 mg tablet is standard, so 1 mg stat then 0.5 mg after an hour is the practical equivalent.",
        "**Colchicine cautions that are examined:** reduce the dose in renal impairment (avoid if eGFR is under 30 mL/min or use 0.5 mg on alternate days with specialist advice) and in liver disease, and remember the dangerous interactions with **clarithromycin, erythromycin, ketoconazole, cyclosporine, verapamil, diltiazem and statins** through CYP3A4 and P-glycoprotein, which can precipitate fatal marrow suppression and myopathy.",
        "**Corticosteroids are the safest option in renal impairment and in the elderly:** prednisolone 30-40 mg PO daily for 5 days, either stopped abruptly or tapered over 7-10 days. In a single accessible joint, intra-articular methylprednisolone acetate 40 mg or triamcinolone gives excellent relief - **but only after the aspirate has excluded sepsis.**",
        "**Never start, stop or change urate-lowering therapy during an acute attack** if the patient is not already on it; if he is already established on allopurinol, **continue it unchanged** and treat the attack around it.",
        "Supportive care matters: rest and elevate the joint, apply ice packs for 20 minutes several times a day, keep the bedsheet off with a cradle, ensure good hydration, and stop any non-essential precipitant such as a thiazide where an alternative antihypertensive exists.",
      ],
    },
    {
      heading: "Urate-lowering therapy, prophylaxis and lifestyle",
      points: [
        "**Indications for lifelong urate-lowering therapy:** two or more attacks in a year, any tophus, radiographic joint damage from gout, gout with chronic kidney disease stage 3 or worse, gout with recurrent urate stones, and increasingly any patient after a first attack who wants to prevent recurrence.",
        "**Treat to target, not to symptoms: the goal is a serum urate below 6 mg/dL (360 micromol/L), and below 5 mg/dL where there are tophi**, because dissolution of crystal deposits is a saturation phenomenon. Check urate every 2-4 weeks during titration and every 6 months once stable.",
        "**Allopurinol is first line:** start low at 100 mg PO daily (50 mg daily if eGFR is under 30 mL/min) and increase by 100 mg every 2-4 weeks against the urate, to a usual effective dose of 300-600 mg and a licensed maximum of 800-900 mg daily. **Starting at 300 mg without titration is the commonest error** - it triggers attacks and raises hypersensitivity risk.",
        "**Allopurinol hypersensitivity syndrome** is rare but carries up to 20-25% mortality: fever, rash progressing to Stevens-Johnson syndrome or toxic epidermal necrolysis, eosinophilia, hepatitis and acute kidney injury. Risk is highest in the first 8-12 weeks, with high starting doses, in renal impairment and in carriers of **HLA-B*5801**, which is common in Han Chinese, Thai and Korean populations; screening is advised in those groups. Warn every patient to stop the drug and return at once if a rash appears.",
        "**Febuxostat 40 mg PO daily, increased to 80 mg**, is the alternative for allopurinol intolerance or failure and needs no dose reduction down to eGFR 30 mL/min, but the CARES trial signal of increased cardiovascular mortality means it should be used cautiously in established cardiovascular disease. Probenecid is a uricosuric option when eGFR is above 50 mL/min and there is no history of urolithiasis.",
        "**Prophylaxis is mandatory when urate-lowering therapy is started**, because falling urate mobilises crystals and provokes attacks: colchicine 0.5 mg PO once or twice daily (dose-reduced in renal impairment) for at least 3-6 months, or low-dose NSAID with a PPI, or low-dose prednisolone 5 mg if both are contraindicated.",
        "**Lifestyle advice supports but never replaces drugs** - it lowers urate by only about 1 mg/dL. Advise weight loss, restriction of alcohol especially beer and spirits, avoidance of sugar-sweetened and fructose-rich drinks, reduction of organ meats, red meat and shellfish, generous water intake, and reassure the patient that low-fat dairy, coffee, vitamin C and most vegetables including dal, spinach and tomato are safe or protective.",
        "Review the drug list at every visit: **thiazides, loop diuretics, low-dose aspirin, ciclosporin, tacrolimus, pyrazinamide and ethambutol all raise urate**, while losartan, fenofibrate, atorvastatin and SGLT2 inhibitors lower it - which makes losartan the antihypertensive of choice in a hypertensive gout patient.",
      ],
    },
  ],
  tables: [
    {
      heading: "Differentiating the acute hot joint",
      columns: ["Feature", "Gout", "Septic arthritis", "Pseudogout"],
      rows: [
        ["Typical patient", "Man over 40, alcohol, diuretic, CKD, metabolic syndrome", "Any age; diabetes, immunosuppression, prosthesis, skin breach, IV drug use", "Elderly, often over 65, after illness or surgery"],
        ["Commonest joint", "First metatarsophalangeal joint, midfoot, ankle, knee", "Knee, then hip; any joint", "Knee, then wrist and shoulder"],
        ["Onset to peak", "6-12 hours, often nocturnal", "Hours to 1-2 days, with systemic toxicity", "12-36 hours, less explosive"],
        ["Fever and toxicity", "Low grade fever common, patient not toxic", "High fever, rigors, unwell, may be septic", "Low grade fever possible"],
        ["Synovial fluid crystals", "Needle-shaped, negatively birefringent urate", "None; organisms on Gram stain or culture", "Rhomboid, weakly positively birefringent CPPD"],
        ["Synovial white cell count", "20,000-70,000 per cubic mm, neutrophil predominant", "Usually over 50,000, often over 100,000", "10,000-50,000 per cubic mm"],
        ["Radiograph clue", "Punched-out erosion with overhanging edge, late", "Normal early; joint destruction late", "Chondrocalcinosis of meniscus and triangular fibrocartilage"],
      ],
    },
    {
      heading: "Drugs for acute gout - choosing by comorbidity",
      columns: ["Situation", "Preferred drug and dose", "Avoid", "Notes"],
      rows: [
        ["Healthy adult, normal renal function", "Naproxen 750 mg PO stat then 250 mg TDS for 5-7 days", "-", "Add a PPI; stop 48 hours after symptoms settle"],
        ["Chronic kidney disease or heart failure", "Prednisolone 30-40 mg PO daily for 5 days", "NSAIDs; full-dose colchicine", "Monitor glucose in diabetes; steroids are the safest broad option"],
        ["Peptic ulcer disease or on anticoagulation", "Prednisolone 30-40 mg PO daily, or intra-articular steroid", "NSAIDs", "Aspirate first to exclude sepsis before injecting"],
        ["Presenting within 24 hours, no renal impairment", "Colchicine 1.2 mg PO stat then 0.6 mg after 1 hour", "High cumulative hourly dosing", "Far less effective if started after 36-48 hours"],
        ["Diabetes with poor control", "Colchicine low dose, or NSAID if renal function allows", "Systemic steroids where avoidable", "Steroid course will need temporary insulin or dose adjustment"],
        ["Single large accessible joint", "Intra-articular methylprednisolone 40 mg or triamcinolone", "Injecting before sepsis is excluded", "Fastest relief; always aspirate and send for Gram stain and culture"],
      ],
    },
    {
      heading: "Urate-lowering therapy at a glance",
      columns: ["Drug", "Class and start dose", "Titration and target", "Key cautions"],
      rows: [
        ["Allopurinol", "Xanthine oxidase inhibitor; 100 mg PO daily (50 mg if eGFR under 30)", "Increase 100 mg every 2-4 weeks to urate under 6 mg/dL; usual 300-600 mg, max 800-900 mg", "Hypersensitivity syndrome, rash, hepatitis; HLA-B*5801 risk; interacts with azathioprine and 6-mercaptopurine (reduce those by 75%)"],
        ["Febuxostat", "Xanthine oxidase inhibitor; 40 mg PO daily", "Increase to 80 mg daily if urate not at target in 2-4 weeks", "Cardiovascular mortality signal (CARES); monitor liver enzymes; costlier"],
        ["Probenecid", "Uricosuric; 250 mg PO BD", "Increase to 500 mg BD-TDS", "Needs eGFR above 50; contraindicated with urolithiasis; ensure high fluid intake and urine alkalinisation"],
        ["Colchicine (prophylaxis)", "Anti-inflammatory; 0.5 mg PO once or twice daily", "Continue 3-6 months from starting urate-lowering therapy", "Diarrhoea, myopathy, marrow suppression; halve dose in renal impairment; macrolide and statin interactions"],
      ],
    },
  ],
  redFlags: [
    "A hot, swollen, exquisitely tender joint with fever, rigors or systemic toxicity - treat as septic arthritis until the aspirate proves otherwise; aspirate, culture and start empirical antibiotics the same day.",
    "A hot joint in a patient with a prosthesis, recent joint injection, diabetes, immunosuppression or injecting drug use - urgent orthopaedic referral, never a trial of NSAIDs at home.",
    "Rash, fever, mucosal ulceration or eosinophilia within 8-12 weeks of starting allopurinol - stop the drug immediately and admit; allopurinol hypersensitivity syndrome has a mortality of up to 25%.",
    "Gout with acute kidney injury, oliguria or flank pain and haematuria - urate nephropathy or obstructing urate stones; check renal function, ultrasound the kidneys and hydrate.",
    "A discharging or ulcerated tophus with surrounding cellulitis, or a rapidly enlarging olecranon swelling with fever - secondary infection needing swab, culture and antibiotics.",
    "Polyarticular gout with fever in an elderly or immunosuppressed patient - overlapping sepsis is common and the presentation is easily mistaken for a flare.",
    "Severe diarrhoea, myalgia, weakness or unexplained cytopenia in a patient on colchicine, especially with a macrolide, statin or ciclosporin - stop the colchicine and check creatine kinase and a blood count.",
  ],
  pearls: [
    "The crystal makes the diagnosis, not the number: serum urate is normal or low in up to a third of acute attacks, and most people with a high urate never get gout.",
    "Every hot single joint is septic arthritis until aspiration proves otherwise, and gout and sepsis can coexist in the same joint - always send the aspirate for Gram stain and culture.",
    "Monosodium urate crystals are needle-shaped and negatively birefringent; calcium pyrophosphate crystals are rhomboid and weakly positively birefringent. Learn this pair verbatim.",
    "Never start urate-lowering therapy during an attack in a drug-naive patient, but never stop it in a patient already established on it.",
    "Start allopurinol low and titrate against the urate, not against the symptoms; treat to a target of under 6 mg/dL, or under 5 mg/dL when tophi are present.",
    "Always cover the first 3-6 months of urate-lowering therapy with prophylactic colchicine 0.5 mg daily, otherwise falling urate mobilises crystals and the patient blames the drug and stops it.",
    "Diet lowers urate by only about 1 mg/dL - it is an adjunct, and a patient told to fix gout by diet alone will keep having attacks.",
    "Losartan is the antihypertensive of choice in gout because it is mildly uricosuric; a thiazide is the antihypertensive most likely to have caused the attack.",
    "Allopurinol plus azathioprine is a classic lethal combination - xanthine oxidase inhibition blocks azathioprine catabolism and causes profound marrow suppression; reduce azathioprine to a quarter or avoid the pair.",
    "Podagra plus tophi over the helix of the ear is a viva-level spot diagnosis; look at the ears in every chronic arthritis case.",
  ],
  theory: [
    {
      id: "musculoskeletal-gout-t1",
      paper: "II",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 52-year-old obese man on hydrochlorothiazide presents with an acutely painful, red, swollen right first metatarsophalangeal joint of 12 hours duration. Discuss the differential diagnosis, investigations and management, including long-term prevention.",
      openingLines: [
        "This is an acute monoarthritis of the first metatarsophalangeal joint - podagra - in a middle-aged obese man on a thiazide diuretic, and the working diagnosis is acute gout, with septic arthritis as the diagnosis that must be excluded first.",
        "Gout is an inflammatory arthritis caused by monosodium urate crystal deposition once serum urate exceeds its saturation point of 6.8 mg/dL, and management has two entirely separate arms - abolishing the attack, and lowering urate for life to a target below 6 mg/dL.",
      ],
      answer: [
        {
          heading: "Differential diagnosis of the acute hot joint",
          points: [
            "**Acute gout** - explosive nocturnal onset, podagra, a thiazide and obesity as precipitants, and desquamation as it settles.",
            "**Septic arthritis** - the emergency; suggested by fever, rigors, systemic toxicity, a portal of entry, diabetes or immunosuppression, and it may coexist with gout.",
            "**Pseudogout (calcium pyrophosphate deposition)** - older patient, knee or wrist more often than toe, chondrocalcinosis on radiograph.",
            "**Cellulitis or an infected bunion** - erythema spreading beyond the joint with a preserved passive range of movement.",
            "**Trauma, stress fracture or an acute exacerbation of osteoarthritis of the first metatarsophalangeal joint (hallux rigidus)**.",
            "**Reactive arthritis or psoriatic arthritis** - look for urethritis, diarrhoea, dactylitis, nail pitting and skin plaques.",
          ],
        },
        {
          heading: "Investigations",
          points: [
            "**Joint aspiration is the definitive investigation:** polarised light microscopy for needle-shaped, negatively birefringent intracellular monosodium urate crystals, plus Gram stain, cell count and culture in every case.",
            "Complete blood count, ESR and CRP - raised in both gout and sepsis, so they discriminate poorly and must not be used to exclude infection.",
            "**Serum uric acid, but repeated 2 weeks after the attack settles** because it is normal or low in up to a third of acute attacks.",
            "Serum creatinine and eGFR, fasting glucose or HbA1c, lipid profile, liver function tests and urine routine, to define comorbidity and to choose the drug safely.",
            "Radiograph of the foot for chondrocalcinosis, punched-out erosions with overhanging edges, and for a stress fracture; ultrasound for the double contour sign where aspiration is not possible.",
          ],
        },
        {
          heading: "Management of the acute attack",
          points: [
            "Rest and elevate the limb, apply ice, use a bed cradle, and ensure hydration.",
            "**Start an anti-inflammatory within the first 24 hours:** naproxen 750 mg PO stat then 250 mg TDS with a PPI, or low-dose colchicine 1.2 mg stat then 0.6 mg after 1 hour then 0.6 mg once or twice daily, or prednisolone 30-40 mg PO daily for 5 days if there is renal impairment, ulcer disease or heart failure.",
            "Intra-articular corticosteroid is an excellent single-joint option once the aspirate has excluded sepsis.",
            "**Do not start allopurinol during the attack** in a drug-naive patient; if he were already on it, it would be continued unchanged.",
            "Replace hydrochlorothiazide with **losartan**, which is mildly uricosuric, and address obesity, alcohol and sugar-sweetened drinks.",
          ],
        },
        {
          heading: "Long-term prevention - urate-lowering therapy",
          points: [
            "Indications: two or more attacks a year, tophi, erosive damage, CKD stage 3 or worse, or urate urolithiasis.",
            "**Allopurinol 100 mg PO daily**, increased by 100 mg every 2-4 weeks against serum urate, to a **target below 6 mg/dL** (below 5 mg/dL with tophi); usual maintenance 300-600 mg daily.",
            "**Cover the first 3-6 months with colchicine 0.5 mg PO daily** to prevent mobilisation flares, and warn the patient that early flares mean the drug is working, not failing.",
            "Counsel on the rash warning: stop allopurinol and return immediately if a rash appears, because of the risk of allopurinol hypersensitivity syndrome.",
            "Febuxostat 40-80 mg daily if allopurinol is not tolerated, used cautiously in established cardiovascular disease.",
            "Manage the metabolic cluster - weight, blood pressure, glucose, lipids and alcohol - and review adherence and serum urate every 6 months once at target.",
          ],
        },
      ],
      mustDraw: [
        "A table differentiating gout, septic arthritis and pseudogout on onset, joint, fever, synovial fluid crystals, cell count and radiograph.",
        "A flow chart: acute hot joint -> aspirate -> Gram stain/culture and polarised microscopy -> crystals positive and culture negative = gout -> treat attack -> after 2 weeks measure urate -> start allopurinol with colchicine cover -> titrate to urate under 6 mg/dL.",
      ],
      markSplit: [
        { part: "Differential diagnosis with septic arthritis named first", marks: 2 },
        { part: "Investigations, with joint aspiration as the gold standard", marks: 2 },
        { part: "Management of the acute attack with drugs and doses", marks: 3 },
        { part: "Urate-lowering therapy, target and prophylaxis", marks: 2 },
        { part: "Lifestyle, drug review and comorbidity management", marks: 1 },
      ],
      keywords: ["podagra", "monosodium urate", "joint aspiration", "allopurinol", "treat to target", "colchicine prophylaxis"],
    },
    {
      id: "musculoskeletal-gout-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on urate-lowering therapy in gout - indications, drugs, targets and pitfalls.",
      openingLines: [
        "Urate-lowering therapy is the only treatment that alters the natural history of gout, because it dissolves the monosodium urate crystal burden by keeping serum urate below its saturation point.",
        "It is a treat-to-target therapy, titrated against a serum urate below 6 mg/dL rather than against symptoms, and it is intended to be lifelong.",
      ],
      answer: [
        {
          heading: "Indications",
          points: [
            "Two or more acute attacks in a year.",
            "Any tophus, clinical or radiological.",
            "Radiographic joint damage attributable to gout.",
            "Gout with chronic kidney disease stage 3 or worse.",
            "Gout with recurrent uric acid urolithiasis.",
            "Increasingly, after a first attack in a young patient or with a very high urate, on shared decision making. **Asymptomatic hyperuricaemia alone is not an indication.**",
          ],
        },
        {
          heading: "Drugs and doses",
          points: [
            "**Allopurinol, first line:** 100 mg PO daily (50 mg if eGFR under 30 mL/min), increased by 100 mg every 2-4 weeks; usual 300-600 mg, maximum 800-900 mg daily.",
            "**Febuxostat:** 40 mg PO daily increased to 80 mg; for allopurinol intolerance or failure; no renal dose adjustment above eGFR 30; caution in established cardiovascular disease.",
            "**Probenecid (uricosuric):** 250 mg BD up to 500 mg TDS; needs eGFR above 50 and no stone history; maintain high fluid intake.",
            "Pegloticase and lesinurad exist for refractory tophaceous disease in specialist centres.",
          ],
        },
        {
          heading: "Target and monitoring",
          points: [
            "**Serum urate below 6 mg/dL (360 micromol/L); below 5 mg/dL where tophi are present**, until they dissolve.",
            "Recheck urate every 2-4 weeks during titration, then every 6 months.",
            "Monitor renal function and liver enzymes, and review adherence at each visit.",
          ],
        },
        {
          heading: "Pitfalls",
          points: [
            "**Starting during an acute attack** in a drug-naive patient, or stopping it during an attack in an established patient - both are wrong.",
            "**Starting at 300 mg without titration** - provokes flares and increases hypersensitivity risk.",
            "**Omitting colchicine 0.5 mg daily prophylaxis for 3-6 months** - the patient flares, blames the drug and stops it.",
            "Failing to warn about rash and allopurinol hypersensitivity syndrome.",
            "Co-prescribing allopurinol with **azathioprine or 6-mercaptopurine** without a 75% dose reduction - profound marrow suppression.",
            "Treating to symptom relief rather than to a urate number, and relying on diet alone, which lowers urate by only about 1 mg/dL.",
          ],
        },
      ],
      mustDraw: ["A table of allopurinol, febuxostat and probenecid with start dose, titration, target and main caution."],
      markSplit: [
        { part: "Indications", marks: 1 },
        { part: "Drugs with doses and titration", marks: 2 },
        { part: "Target and monitoring", marks: 1 },
        { part: "Pitfalls including prophylaxis and hypersensitivity", marks: 1 },
      ],
      keywords: ["allopurinol", "febuxostat", "treat to target", "colchicine prophylaxis", "HLA-B*5801", "azathioprine interaction"],
    },
  ],
  mcqs: [
    {
      id: "musculoskeletal-gout-q1",
      stem: "A 55-year-old man wakes at 3 am with an exquisitely painful, red, swollen right great toe. He is afebrile, has taken hydrochlorothiazide for two years, and serum uric acid measured today is 5.4 mg/dL. What is the most appropriate interpretation?",
      options: [
        "Gout is excluded because the serum urate is normal",
        "Gout remains the most likely diagnosis; urate is often normal or low during an acute attack and should be rechecked after 2 weeks",
        "The normal urate indicates pseudogout",
        "A normal urate makes septic arthritis the most likely diagnosis",
        "Urate should be repeated on the same day to confirm the result",
      ],
      answer: 1,
      explanation:
        "Acute inflammation is uricosuric and interleukin-6 driven renal urate excretion rises during an attack, so serum urate is normal or low in up to a third of acute gout episodes; the diagnosis rests on the clinical picture and on crystals in the aspirate, and the true baseline urate is measured at least 2 weeks after the attack settles. A normal level therefore does not exclude gout, which makes the first option wrong. Pseudogout is not diagnosed by a normal urate but by rhomboid, weakly positively birefringent calcium pyrophosphate crystals and chondrocalcinosis, and it favours the knee and wrist rather than the great toe. Septic arthritis is diagnosed by systemic toxicity and a positive Gram stain or culture, not by a urate value, and simply repeating the test the same day adds nothing because the level will still be suppressed by the ongoing attack.",
      difficulty: "moderate",
    },
    {
      id: "musculoskeletal-gout-q2",
      stem: "A 68-year-old diabetic man with eGFR 26 mL/min and a past duodenal ulcer presents with an acutely inflamed left knee of 18 hours. Aspiration shows negatively birefringent needle-shaped crystals, 40,000 white cells per cubic mm, and a negative Gram stain. Which is the most appropriate treatment for the attack?",
      options: [
        "Indomethacin 50 mg PO three times daily for 7 days",
        "Colchicine 0.5 mg PO every hour until pain settles or diarrhoea occurs",
        "Prednisolone 35 mg PO daily for 5 days",
        "Start allopurinol 300 mg PO daily immediately",
        "Aspirin 650 mg PO four times daily",
      ],
      answer: 2,
      explanation:
        "He has advanced chronic kidney disease and a peptic ulcer history, so NSAIDs are contraindicated and full-dose colchicine is hazardous at this eGFR; a short course of oral prednisolone is the recommended and safest anti-inflammatory here, with temporary attention to his glucose. Indomethacin risks acute-on-chronic kidney injury and ulcer bleeding. The hourly colchicine-to-diarrhoea regimen has been abandoned worldwide as toxic and is especially dangerous in renal impairment, where colchicine accumulates and can cause myopathy and marrow suppression. Allopurinol must not be started during an acute attack in a drug-naive patient because falling urate mobilises crystals and prolongs the flare, and aspirin at analgesic doses actually raises serum urate and is not an appropriate anti-inflammatory for gout.",
      difficulty: "moderate",
    },
    {
      id: "musculoskeletal-gout-q3",
      stem: "A 47-year-old man with three attacks of gout in the past year, a serum urate of 9.2 mg/dL and normal renal function is to be started on urate-lowering therapy two weeks after his last attack. Which regimen is most appropriate?",
      options: [
        "Allopurinol 300 mg PO daily started at once, with no other drug",
        "Allopurinol 100 mg PO daily, titrated by 100 mg every 2-4 weeks to a urate below 6 mg/dL, with colchicine 0.5 mg daily for 6 months",
        "Colchicine 0.5 mg daily alone, indefinitely",
        "Dietary purine restriction alone for 6 months before considering drugs",
        "Febuxostat 80 mg PO daily started during the next acute attack",
      ],
      answer: 1,
      explanation:
        "Recurrent attacks are a clear indication for lifelong urate-lowering therapy, and the correct method is a low starting dose of allopurinol titrated upward against serial serum urate levels to a target below 6 mg/dL, with anti-inflammatory prophylaxis for the first 3-6 months because falling urate mobilises crystals and provokes flares. Starting at 300 mg without titration and without prophylaxis is the classic error: it triggers early attacks, increases the risk of allopurinol hypersensitivity syndrome, and often leaves the patient still above target. Colchicine alone suppresses inflammation but does not lower urate, so the crystal burden and joint damage continue to accumulate. Diet lowers urate by only about 1 mg/dL and cannot bring a level of 9.2 mg/dL to target, and starting any urate-lowering drug during an acute attack in a drug-naive patient is precisely what should be avoided.",
      difficulty: "easy",
    },
    {
      id: "musculoskeletal-gout-q4",
      stem: "A 60-year-old woman on azathioprine for autoimmune hepatitis is found to have gout. Her physician plans allopurinol. What is the single most important consideration?",
      options: [
        "Allopurinol will reduce the efficacy of azathioprine and its dose must be doubled",
        "Allopurinol blocks xanthine oxidase and can cause profound bone marrow suppression, so azathioprine must be reduced to about a quarter of its dose or the combination avoided",
        "The combination is safe and requires no change",
        "Azathioprine must be replaced with methotrexate before allopurinol is started",
        "Allopurinol should be given on alternate days to avoid interaction",
      ],
      answer: 1,
      explanation:
        "Azathioprine is metabolised to 6-mercaptopurine, which is inactivated largely by xanthine oxidase; allopurinol inhibits that enzyme, so active thiopurine metabolites accumulate and can produce life-threatening pancytopenia, making a dose reduction to roughly 25% with close blood count monitoring, or avoidance of the pair altogether (using febuxostat with the same caution, or a uricosuric), the essential step. The interaction increases rather than reduces thiopurine effect, so doubling the dose would be lethal, and calling the combination safe ignores one of the best-known drug interactions in medicine. Switching to methotrexate is not required and carries its own hepatotoxicity problem in autoimmune hepatitis, and alternate-day allopurinol does not abolish xanthine oxidase inhibition, which persists through the dosing interval.",
      difficulty: "hard",
    },
    {
      id: "musculoskeletal-gout-q5",
      stem: "A 70-year-old diabetic man on insulin has a hot, swollen, tender right knee with a temperature of 38.9 C and rigors. He has a long history of tophaceous gout. What is the most appropriate immediate management?",
      options: [
        "Increase his colchicine and review in 48 hours",
        "Start oral prednisolone 40 mg daily assuming a gout flare",
        "Urgent joint aspiration for Gram stain, cell count and culture, with blood cultures and empirical intravenous antibiotics, and orthopaedic referral",
        "Start naproxen and arrange an outpatient MRI of the knee",
        "Intra-articular triamcinolone 40 mg for rapid relief",
      ],
      answer: 2,
      explanation:
        "Fever with rigors and a hot joint in a diabetic is septic arthritis until proved otherwise, and a known history of gout does not protect him - the two conditions frequently coexist in the same joint, so the mandatory steps are aspiration for Gram stain, cell count and culture, blood cultures, empirical intravenous antibiotics after sampling, and urgent orthopaedic referral for washout. Escalating colchicine or starting systemic steroids treats a presumed flare while an untreated infection destroys cartilage within days, and steroids additionally worsen his glycaemic control and blunt the fever that is the warning sign. An NSAID with a routine outpatient MRI delays the only test that answers the question, and injecting triamcinolone into a possibly infected joint converts a treatable arthritis into a catastrophic septic joint.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "musculoskeletal-gout-c1",
      front: "At what serum urate concentration does monosodium urate saturate physiological fluid?",
      back: "About 6.8 mg/dL (405 micromol/L). Above this, crystals form - which is why the treatment target is set below 6 mg/dL, and below 5 mg/dL with tophi.",
    },
    {
      id: "musculoskeletal-gout-c2",
      front: "Describe gout and pseudogout crystals under polarised light.",
      back: "Gout - monosodium urate, needle-shaped, strongly negatively birefringent, often intracellular in neutrophils. Pseudogout - calcium pyrophosphate, rhomboid or rod-shaped, weakly positively birefringent.",
    },
    {
      id: "musculoskeletal-gout-c3",
      front: "Why can serum urate be normal during an acute gout attack?",
      back: "Acute inflammation increases renal urate excretion, so urate is normal or low in up to a third of attacks. Measure the true baseline at least 2 weeks after the attack settles.",
    },
    {
      id: "musculoskeletal-gout-c4",
      front: "Give the modern low-dose colchicine regimen for an acute attack.",
      back: "1.2 mg PO stat then 0.6 mg one hour later, then 0.6 mg once or twice daily (in India, 1 mg then 0.5 mg after an hour). Equally effective as, and far safer than, hourly dosing to diarrhoea.",
    },
    {
      id: "musculoskeletal-gout-c5",
      front: "List the indications for starting urate-lowering therapy.",
      back: "Two or more attacks per year, any tophus, radiographic gouty joint damage, CKD stage 3 or worse, and recurrent uric acid stones. Asymptomatic hyperuricaemia alone is not an indication.",
    },
    {
      id: "musculoskeletal-gout-c6",
      front: "How is allopurinol started and titrated?",
      back: "Start 100 mg PO daily (50 mg if eGFR under 30), increase by 100 mg every 2-4 weeks against serum urate to a target under 6 mg/dL; usual 300-600 mg, maximum 800-900 mg daily.",
    },
    {
      id: "musculoskeletal-gout-c7",
      front: "What prophylaxis is given when urate-lowering therapy is started, and for how long?",
      back: "Colchicine 0.5 mg PO once or twice daily for at least 3-6 months (or a low-dose NSAID with PPI, or prednisolone 5 mg), because falling urate mobilises crystals and provokes flares.",
    },
    {
      id: "musculoskeletal-gout-c8",
      front: "Name the drugs that raise serum urate and those that lower it.",
      back: "Raise - thiazide and loop diuretics, low-dose aspirin, ciclosporin, tacrolimus, pyrazinamide, ethambutol, levodopa. Lower - losartan, fenofibrate, atorvastatin, SGLT2 inhibitors, high-dose aspirin.",
    },
    {
      id: "musculoskeletal-gout-c9",
      front: "What is allopurinol hypersensitivity syndrome and who is at risk?",
      back: "Fever, rash progressing to SJS/TEN, eosinophilia, hepatitis and acute kidney injury, mortality up to 25%. Risk: first 8-12 weeks, high starting dose, renal impairment, and HLA-B*5801 carriage (Han Chinese, Thai, Korean).",
    },
    {
      id: "musculoskeletal-gout-c10",
      front: "Which drug combination with allopurinol causes profound marrow suppression?",
      back: "Azathioprine or 6-mercaptopurine - allopurinol blocks xanthine oxidase, their main inactivating enzyme. Reduce the thiopurine to about 25% of dose or avoid the combination.",
    },
    {
      id: "musculoskeletal-gout-c11",
      front: "What are the classic radiographic features of chronic gout?",
      back: "Punched-out juxta-articular erosions with sclerotic overhanging edges, preserved joint space until late, and soft tissue tophi. Ultrasound shows the double contour sign; dual-energy CT colour-codes urate.",
    },
    {
      id: "musculoskeletal-gout-c12",
      front: "How much does dietary modification lower serum urate?",
      back: "About 1 mg/dL at best. Diet supports but never replaces urate-lowering drugs; low-fat dairy, coffee and vitamin C are protective, and pulses and most vegetables need not be restricted.",
    },
  ],
  references: [
    "American College of Rheumatology Guideline for the Management of Gout, 2020",
    "EULAR evidence-based recommendations for the management of gout, updated 2016, and for diagnosis, 2018",
    "2015 ACR/EULAR Gout Classification Criteria",
    "British Society for Rheumatology Guideline for the Management of Gout, 2017",
    "Indian Rheumatology Association consensus statements on gout and hyperuricaemia",
    "Harrison's Principles of Internal Medicine, 21st edition, 2022 - disorders of purine metabolism",
    "API Textbook of Medicine, 11th edition, 2019 - crystal arthropathies",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "musculoskeletal-case-1",
    title: "Symmetrical small-joint polyarthritis of 4 months in a 38-year-old woman - early rheumatoid arthritis",
    kind: "long",
    subjectId: "musculoskeletal",
    opening:
      "A 38-year-old woman, a tailor by occupation and mother of two, presents with pain and swelling of the small joints of both hands and both wrists for 4 months, with stiffness of the hands lasting more than an hour every morning, easy fatigue and a weight loss of 3 kg, without fever, rash, photosensitivity, oral ulcers, back pain, red eyes or urinary symptoms.",
    minutes: 30,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the occupation and the presenting complaint with its duration in one sentence, because in inflammatory arthritis the pattern of joint involvement, the symmetry and the duration of morning stiffness are the three facts that separate rheumatoid arthritis from everything else.",
          "Say: 'Mrs X, a 38-year-old tailor from a taluk town, presents with pain and swelling of the metacarpophalangeal and proximal interphalangeal joints of both hands and both wrists for 4 months, with morning stiffness lasting more than an hour, and she has had to stop stitching for the last 6 weeks.'",
          "State the relevant negatives immediately after the complaint: no fever, no rash or photosensitivity, no oral ulcers, no hair loss, no Raynaud phenomenon, no dry eyes or dry mouth, no low back pain or heel pain, no diarrhoea, no dysuria and no recent sore throat or diarrhoeal illness.",
          "Mention what has already been done: she took diclofenac from a pharmacy with partial relief, was given a course of oral prednisolone by a local practitioner for 2 weeks with dramatic improvement that relapsed on stopping, and no blood tests have been done so far.",
          "Close the opening with the functional state now: she cannot open a bottle, turn a tap or hold a needle, needs help with buttons in the morning, and has lost her income for the last 6 weeks, which is the reason the family finally brought her.",
        ],
      },
      {
        heading: "History of the presenting illness - pattern, tempo and the negatives that matter",
        points: [
          "Establish the joints involved in order of appearance: the right second and third metacarpophalangeal joints first, then the left hand within 3 weeks, then both wrists, and now the forefeet, giving an additive, symmetrical, small-joint polyarthritis over 4 months, which is the classical pattern of rheumatoid arthritis.",
          "Quantify the inflammatory nature of the pain: it is worst on waking and after rest, improves with use, and the morning stiffness lasts 90 minutes; mechanical pain of osteoarthritis worsens with use and the stiffness lasts minutes, and this distinction earns the first marks of the case.",
          "Ask for the systemic features of rheumatoid disease: fatigue, low-grade fever, weight loss, anorexia and a feeling of being generally unwell, and for extra-articular features such as nodules over the elbows, dry gritty eyes, pleuritic chest pain, breathlessness and numbness or tingling of the fingers from carpal tunnel compression.",
          "Search deliberately for features of the mimics: a butterfly rash, photosensitivity, oral ulcers and alopecia for lupus; psoriatic plaques, nail pitting and dactylitis for psoriatic arthritis; preceding diarrhoea or urethritis for reactive arthritis; fever with rash for viral arthritis; and a recent chikungunya-like illness in the village, which in India is the commonest cause of a symmetrical polyarthritis that resolves.",
          "Record what the steroid course did, because a dramatic response to prednisolone with relapse on withdrawal is typical of rheumatoid arthritis and is also the reason many Indian patients present with steroid side effects before a diagnosis is ever made.",
        ],
      },
      {
        heading: "Past, drug, menstrual, personal and socio-economic history",
        points: [
          "Ask about previous episodes of joint pain, previous tuberculosis or contact with tuberculosis, hepatitis B or jaundice, peptic ulcer disease and renal disease, because each of these changes the choice and monitoring of methotrexate, NSAIDs and biologics.",
          "Take the menstrual and contraceptive history explicitly: she has regular cycles, uses no contraception and does not plan another child, but methotrexate is teratogenic and reliable contraception must be arranged before it is started; ask about the date of the last menstrual period.",
          "List every drug taken with dose and duration, including the diclofenac from the pharmacy, the prednisolone course, any indigenous preparations that often contain undeclared steroids, and any alcohol, which must stop before methotrexate.",
          "Record the family history of rheumatoid arthritis, psoriasis, lupus or thyroid disease, and the personal history of smoking or tobacco chewing, since smoking is the strongest environmental risk factor and worsens both severity and response to treatment.",
          "Socio-economic details decide what is possible: a tailor earning on piece rate, a husband who drives an autorickshaw, two school-going children, a rented house, 30 km to the nearest rheumatologist, and no health insurance; the drugs chosen must be affordable for years, not weeks.",
        ],
      },
      {
        heading: "General and musculoskeletal examination to demonstrate",
        points: [
          "General survey: a thin woman with a BMI of 19 kg/m2, mild pallor, no icterus, no lymphadenopathy, no cushingoid features from the short steroid course, pulse 88 per minute regular, blood pressure 118/76 mmHg, afebrile, no rash, no oral ulcers, no alopecia and no nail pitting.",
          "Hands: symmetrical spindle-shaped swelling of the second and third proximal interphalangeal joints, boggy synovial thickening and tenderness of the second to fourth metacarpophalangeal joints on both sides with a positive metacarpophalangeal squeeze test, bilateral wrist synovitis with reduced dorsiflexion, no ulnar deviation, swan-neck or boutonniere deformity yet, and wasting of the first dorsal interosseous.",
          "Count and record the joints formally: 12 tender and 10 swollen joints out of the 28-joint count, which with the ESR and the patient global assessment gives a DAS28 score that the examiner will ask for; say that the distal interphalangeal joints are spared, which argues against psoriatic arthritis and osteoarthritis.",
          "Elbows, shoulders, knees, ankles and forefeet: no nodules over the olecranon, full elbow extension, no knee effusion on patellar tap or bulge test, tender metatarsophalangeal squeeze bilaterally, and no Achilles enthesitis or plantar fasciitis; the spine moves freely and the sacroiliac joints are not tender.",
          "Extra-articular screen: no scleral pallor beyond mild anaemia, no scleritis, no dry eyes on questioning, normal chest with no crackles or pleural rub, no splenomegaly, and a negative Tinel and Phalen test at both wrists; demonstrate grip strength and the ability to make a fist, because function is what the treatment is judged on.",
        ],
      },
      {
        heading: "Applying the 2010 ACR/EULAR classification criteria",
        points: [
          "State the criteria explicitly: they apply to a patient with at least one joint with definite clinical synovitis not better explained by another disease, and score four domains - joint involvement, serology, acute-phase reactants and duration of symptoms - with a total of 6 or more out of 10 classifying definite rheumatoid arthritis.",
          "Joint involvement: more than 10 joints with at least one small joint scores 5; 4 to 10 small joints scores 3; 1 to 3 small joints scores 2; 2 to 10 large joints scores 1; one large joint scores 0. This patient with 22 involved small joints of hands and feet scores 5.",
          "Serology: negative rheumatoid factor and negative anti-CCP score 0; low-positive either scores 2; high-positive either, at more than three times the upper limit of normal, scores 3. Acute-phase reactants: normal CRP and ESR score 0, abnormal either scores 1. Duration: less than 6 weeks scores 0, 6 weeks or more scores 1.",
          "This patient scores 5 for joints, 1 for duration and 1 for a raised ESR before any serology is back, so she already classifies as rheumatoid arthritis with 7 out of 10; a positive anti-CCP would raise it to 10 and, more importantly, marks her as a patient likely to erode and to need early aggressive treatment.",
          "Say clearly that these are classification criteria for research and not diagnostic criteria; the diagnosis is clinical, and a patient with a compatible picture and a score of 5 is still treated as rheumatoid arthritis after the mimics have been excluded.",
        ],
      },
    ],
    summaryStatement:
      "A 38-year-old woman with a 4-month additive, symmetrical, inflammatory small-joint polyarthritis of the hands, wrists and forefeet with morning stiffness of more than an hour, constitutional symptoms and a steroid-responsive course, without features of lupus, psoriasis, spondyloarthritis or a preceding viral illness, with 12 tender and 10 swollen joints on examination - a clinical diagnosis of early seropositive-pattern rheumatoid arthritis, active by DAS28, with functional loss threatening her livelihood, requiring urgent disease-modifying treatment.",
    differential: [
      {
        diagnosis: "Systemic lupus erythematosus",
        forIt: "Young woman, symmetrical small-joint polyarthritis, fatigue, weight loss and anaemia are all shared with lupus, and lupus arthritis is typically non-erosive but clinically indistinguishable in the first months.",
        againstIt: "No malar rash, photosensitivity, oral ulcers, alopecia, serositis, cytopenias beyond mild anaemia, or urinary abnormality; the boggy proliferative synovitis with wrist involvement is more rheumatoid than lupus, and ANA should be sent to settle it.",
      },
      {
        diagnosis: "Post-chikungunya or post-viral arthritis",
        forIt: "In India a symmetrical small-joint polyarthritis after a febrile illness with rash is commonly chikungunya, and 10 to 20 percent of patients have joint symptoms persisting beyond 3 months that mimic rheumatoid arthritis.",
        againstIt: "No preceding fever or rash, no outbreak in her village, symptoms are worsening rather than slowly settling at 4 months, and a persistently positive anti-CCP would not be expected in post-viral arthritis.",
      },
      {
        diagnosis: "Psoriatic arthritis",
        forIt: "Can present as a symmetrical rheumatoid-like polyarthritis in a third of cases, and the skin lesions may be hidden in the scalp, natal cleft or umbilicus and never volunteered.",
        againstIt: "No psoriatic plaques on a full skin examination including the scalp and nails, no nail pitting or onycholysis, no dactylitis, no distal interphalangeal involvement, no enthesitis and no family history of psoriasis.",
      },
    ],
    investigations: [
      {
        test: "Complete blood count with ESR and CRP",
        why: "To document the acute-phase response that feeds the classification criteria and the DAS28, to detect the anaemia of chronic disease and to obtain the baseline platelet and white cell counts before methotrexate.",
        expected: "Haemoglobin 10.4 g/dL with a normocytic picture, ESR 62 mm in the first hour, CRP 28 mg/L, platelets mildly raised at 4.5 lakh, normal white cell count.",
      },
      {
        test: "Rheumatoid factor and anti-cyclic citrullinated peptide antibody",
        why: "Serology completes the ACR/EULAR score, and anti-CCP in particular is 95 percent specific and predicts erosive, aggressive disease that needs early and sustained DMARD therapy.",
        expected: "Rheumatoid factor positive at 96 IU/mL and anti-CCP strongly positive at more than 200 U/mL, both high-positive at more than three times the upper limit.",
      },
      {
        test: "Antinuclear antibody by immunofluorescence",
        why: "To exclude lupus, which is the mimic with the most different long-term management; a negative ANA at 1:80 effectively rules it out.",
        expected: "Negative, or a low-titre homogeneous pattern that is seen in a quarter of rheumatoid patients and does not change the diagnosis without clinical features of lupus.",
      },
      {
        test: "Liver function tests, serum creatinine, hepatitis B surface antigen, hepatitis C antibody and HIV",
        why: "Methotrexate is hepatotoxic and renally cleared, and reactivation of hepatitis B under immunosuppression is fatal; these are the mandatory pre-methotrexate baseline tests.",
        expected: "Normal transaminases and creatinine, all viral markers negative, allowing methotrexate to be started without hepatitis B prophylaxis.",
      },
      {
        test: "Chest radiograph and tuberculosis screen",
        why: "To document baseline lung fields before methotrexate pneumonitis or a biologic is ever a question, and because latent tuberculosis must be identified before any biologic in an Indian patient; the film also shows rheumatoid nodules or effusion.",
        expected: "Clear lung fields, no old tuberculous scar, normal cardiac silhouette.",
      },
      {
        test: "Radiographs of both hands and wrists and both forefeet, and ultrasound of the hands if available",
        why: "To document baseline erosions and juxta-articular osteopenia, against which future films show progression; ultrasound with power Doppler confirms synovitis in doubtful joints and is more sensitive than radiographs for early erosions.",
        expected: "Periarticular osteopenia and soft-tissue swelling around the involved joints, joint space preserved, no erosions yet at 4 months; power Doppler signal in the metacarpophalangeal joints on ultrasound.",
      },
    ],
    management: [
      {
        heading: "Principles and the treat-to-target approach",
        points: [
          "Explain the diagnosis, that it is a lifelong disease that can be controlled but not cured, that the window of opportunity for preventing damage is the first 3 to 6 months, and that treatment is judged against a target of remission or low disease activity measured by the DAS28 every 1 to 3 months until it is reached.",
          "Start a conventional synthetic DMARD at the time of diagnosis, not after a trial of NSAIDs; methotrexate is the anchor drug and the first choice in every guideline, and delay of even 3 months worsens the long-term outcome.",
          "Refer to a rheumatologist at diagnosis for confirmation and a shared plan, but do not wait for the appointment to start methotrexate if the diagnosis is clear and the baseline tests are normal; the family physician continues the monitoring and is the doctor she will actually see.",
          "Address the cause of the delay: the steroid course from the local practitioner was symptomatic treatment that masked the disease, and the family must understand that prednisolone alone is not the treatment.",
        ],
      },
      {
        heading: "Methotrexate, folic acid and monitoring",
        points: [
          "Methotrexate 10 to 15 mg orally once a week on a fixed day, increased by 5 mg every 4 weeks to 20 to 25 mg weekly according to response and tolerance; write the word 'weekly' on the prescription and say it aloud, because daily dosing by error is the commonest fatal mistake with this drug.",
          "Folic acid 5 mg once a week on a different day from methotrexate, or 1 mg daily except the methotrexate day, to reduce mouth ulcers, nausea, transaminitis and cytopenia without reducing efficacy.",
          "Monitor complete blood count, transaminases and creatinine every 2 to 4 weeks for the first 3 months, every 8 to 12 weeks for the next 3 months and then every 12 weeks; hold the drug and seek advice if the transaminases exceed three times the upper limit, the white count falls below 3500 or platelets below 1 lakh, or the creatinine rises.",
          "Counsel on the warning symptoms - mouth ulcers, breathlessness or dry cough, fever, unusual bruising or bleeding, jaundice - and on stopping alcohol, avoiding co-trimoxazole and high-dose NSAIDs, and using reliable contraception; methotrexate must be stopped 3 months before a planned pregnancy in either partner and is contraindicated in breastfeeding.",
        ],
      },
      {
        heading: "Bridging with NSAIDs and low-dose glucocorticoids",
        points: [
          "Methotrexate takes 6 to 12 weeks to act, so bridge with prednisolone 7.5 to 10 mg once daily in the morning, tapering to stop over 3 months as the DMARD takes effect; do not leave the patient on indefinite low-dose steroids, which is the commonest error in Indian practice.",
          "Use an NSAID for symptom control in the lowest dose for the shortest time - naproxen 250 to 500 mg twice daily or diclofenac 50 mg twice daily with food - with a proton pump inhibitor if she has dyspepsia, is on steroids, or is over 60; stop it once the DMARD controls the disease.",
          "An intra-articular injection of triamcinolone or methylprednisolone into one or two dominant joints such as the wrist gives rapid local control and reduces the systemic steroid needed.",
          "Add calcium 1000 mg and vitamin D 800 to 1000 IU daily while on prednisolone, and use the steroid taper as the measure of whether the DMARD dose is adequate.",
        ],
      },
      {
        heading: "Escalation, non-pharmacological care, comorbidity and follow-up",
        points: [
          "If the DAS28 target is not reached by 3 to 6 months on optimised methotrexate, combine with hydroxychloroquine 200 to 400 mg daily and sulfasalazine 1 g twice daily as triple therapy, or refer for a biologic or a JAK inhibitor; hydroxychloroquine needs a baseline and then annual retinal examination after 5 years.",
          "Physiotherapy for joint-protection techniques, range-of-motion and grip-strengthening exercises, resting wrist splints at night, and an occupational therapy assessment of her sewing so she can return to work with adapted tools.",
          "Vaccinate before or early in immunosuppression - influenza yearly, pneumococcal and hepatitis B - and screen and treat the cardiovascular risk that rheumatoid arthritis doubles: lipids, blood pressure, blood sugar, smoking, and a tuberculosis screen before any biologic.",
          "Review every 4 weeks until the target is reached with a joint count, ESR or CRP and the monitoring bloods, then every 3 months; record function with a simple HAQ, ask about mood, and involve the husband in the counselling so that the weekly drug and the follow-up are supported.",
        ],
      },
    ],
    viva: [
      {
        q: "Why is anti-CCP more useful than rheumatoid factor in this patient?",
        a: "Anti-CCP is about 95 percent specific for rheumatoid arthritis, whereas rheumatoid factor is positive in hepatitis C, tuberculosis, endocarditis, lupus and 5 to 10 percent of healthy elderly; anti-CCP also appears years before symptoms and predicts erosive disease, so a high-positive result identifies the patient who must be treated aggressively from the start.",
      },
      {
        q: "What is the DAS28 and what values define remission and high disease activity?",
        a: "The DAS28 is a composite of the 28-joint tender count, 28-joint swollen count, ESR or CRP and the patient global assessment on a 100 mm scale; a score below 2.6 is remission, 2.6 to 3.2 is low activity, 3.2 to 5.1 moderate and above 5.1 high disease activity, and the treatment target is remission or at least low activity.",
      },
      {
        q: "A patient on methotrexate presents with a dry cough, fever and breathlessness of 5 days. What do you do?",
        a: "Suspect methotrexate pneumonitis, which is idiosyncratic, can occur at any dose or time and is fatal in a fifth of cases: stop methotrexate immediately, obtain a chest radiograph and oxygen saturation, exclude infection including Pneumocystis and tuberculosis, and admit for high-dose steroids; the drug is never restarted after confirmed pneumonitis.",
      },
      {
        q: "Which extra-articular manifestations of rheumatoid arthritis will you screen for at follow-up?",
        a: "Rheumatoid nodules, secondary Sjogren syndrome with dry eyes and mouth, episcleritis and scleritis, interstitial lung disease and pleural effusion, pericarditis, anaemia of chronic disease, Felty syndrome with splenomegaly and neutropenia, carpal tunnel syndrome, vasculitic leg ulcers, and accelerated atherosclerosis, which is the commonest cause of death.",
      },
      {
        q: "She becomes pregnant 8 months later while on methotrexate 20 mg weekly. What is your advice?",
        a: "Stop methotrexate immediately and continue high-dose folic acid; refer urgently to the obstetrician and rheumatologist for counselling about the risk of methotrexate embryopathy in the first trimester and for a detailed anomaly scan; control the arthritis with low-dose prednisolone, sulfasalazine or hydroxychloroquine, both of which are safe in pregnancy, and expect the disease to improve during pregnancy and flare after delivery.",
      },
      {
        q: "What is the role of the family physician once the rheumatologist has started treatment?",
        a: "Carrying out the monitoring blood tests on schedule and acting on them, checking the weekly dosing at each visit, tapering the bridging steroid, managing the comorbidity and vaccination, referring back for a flare or a failure to reach target, supporting adherence and the family, and coordinating physiotherapy and return to work - the rheumatologist sees her four times a year, the family physician sees her every month.",
      },
    ],
    pitfalls: [
      "Labelling an inflammatory polyarthritis as 'arthritis' and treating with repeated steroid courses and NSAIDs without a diagnosis or a DMARD, so that the patient arrives at the specialist with deformities and cushingoid features.",
      "Waiting for a positive rheumatoid factor before making the diagnosis; a fifth of patients are seronegative, and the diagnosis is clinical.",
      "Prescribing methotrexate without the word 'weekly', without folic acid, without the baseline hepatitis B screen and liver tests, or without contraception advice in a woman of reproductive age.",
      "Forgetting that the leading cause of death in rheumatoid arthritis is cardiovascular, and not screening and treating lipids, blood pressure, sugar and smoking as aggressively as the joints.",
    ],
    references: [
      "Aletaha D et al., 2010 Rheumatoid arthritis classification criteria: an ACR/EULAR collaborative initiative, Arthritis and Rheumatism 2010",
      "EULAR recommendations for the management of rheumatoid arthritis with synthetic and biological DMARDs, 2022 update",
      "ACR Guideline for the Treatment of Rheumatoid Arthritis, 2021",
      "Indian Rheumatology Association guidelines on the management of rheumatoid arthritis, 2018",
      "Harrison's Principles of Internal Medicine, 21st edition, 2022 - rheumatoid arthritis",
      "Hutchison's Clinical Methods, 24th edition, 2018 - the locomotor system",
    ],
  },
  {
    id: "musculoskeletal-case-2",
    title: "Examine this knee - a 61-year-old woman with pain on climbing stairs",
    kind: "short",
    subjectId: "musculoskeletal",
    opening:
      "A 61-year-old overweight woman, a homemaker, presents with pain in the right knee for 2 years, worse on climbing stairs, squatting and rising from a chair, with stiffness for a few minutes on waking, occasional swelling after a long day and no history of injury, fever, rest pain or locking.",
    minutes: 15,
    frequency: "core",
    sections: [
      {
        heading: "How to start - introduce, expose, position and look",
        points: [
          "Introduce yourself, explain what you are going to do, ask permission and ask which knee hurts before touching either; expose both lower limbs from mid-thigh down with the patient standing first, because a knee is always examined against the other knee and the examination begins with the patient walking in.",
          "Gait: watch her walk away and back and comment on an antalgic gait with a shortened stance phase on the right, a varus thrust of the right knee in stance, and the need for a hand on the wall to turn; ask her to squat if she can, and say that she cannot go below 90 degrees.",
          "Standing inspection from the front, side and back: a varus alignment of the right knee greater than the left, no fixed flexion deformity when viewed from the side, no popliteal swelling from behind, and a wasted right quadriceps compared with the left.",
          "Supine inspection: loss of the medial and lateral parapatellar hollows suggesting an effusion, bony enlargement at the joint margins, no scars, sinuses, erythema or pigmentation, and no obvious patellar maltracking; note the position of the patella and whether the knee rests in full extension on the couch.",
          "Measure the quadriceps girth 10 cm above the superior pole of the patella on both sides with a tape and report the difference - 2 cm of wasting on the right - because it is the only objective evidence of chronicity you can give the examiner.",
        ],
      },
      {
        heading: "Feel - temperature, effusion, tenderness and crepitus",
        points: [
          "Compare skin temperature with the back of the hand over both knees and the shins; the osteoarthritic knee is not warm, and a warm knee shifts the diagnosis to an inflammatory or septic arthritis or a crystal flare.",
          "Test for an effusion in two ways: the bulge test for a small effusion, stroking fluid from the medial gutter upwards and then sweeping the lateral side to watch the medial hollow refill, and the patellar tap for a moderate effusion, milking the suprapatellar pouch down with one hand and tapping the patella against the femur with the other.",
          "Palpate the joint line with the knee flexed to 90 degrees, tracing the medial and lateral joint lines from the patellar tendon backwards; record tenderness along the medial joint line, marginal osteophytes felt as bony ridges, and tenderness over the medial tibial plateau at the pes anserine bursa, which is a common and treatable cause of pain in these knees.",
          "Palpate the patella and its facets, the quadriceps and patellar tendons, the tibial tubercle, the fibular head, the collateral ligaments along their length and the popliteal fossa for a Baker cyst, and feel for crepitus with the palm over the patella as the knee is moved through flexion and extension.",
          "Feel the distal pulses, test sensation and capillary refill, and check the hip on the same side, because hip pathology refers pain to the knee and a knee examination that omits the hip is incomplete.",
        ],
      },
      {
        heading: "Move - active and passive range with the other knee as control",
        points: [
          "Ask for active flexion and extension first and watch the face for pain; then measure the passive range with a goniometer or by estimation, reporting the right knee as 5 to 110 degrees against 0 to 135 on the left, so there is a fixed flexion deformity of 5 degrees and loss of terminal flexion.",
          "Test for a fixed flexion deformity by lifting both heels off the couch and seeing whether the back of the knee can be pushed down, and for hyperextension or recurvatum by lifting the foot with the knee held straight.",
          "Feel for crepitus during passive movement with a hand over the patella, and describe it as coarse and palpable throughout the range, which in a 61-year-old with bony enlargement is the crepitus of cartilage loss rather than the fine crepitus of synovitis.",
          "Assess the extensor mechanism by asking her to do a straight-leg raise on the couch and to extend the knee against resistance, grading quadriceps power and noting an extensor lag if the knee cannot be fully straightened actively although it can passively.",
          "Test patellofemoral movement by moving the patella medially and laterally and pressing it against the femur with the quadriceps contracting - the patellar grind test - which reproduces her pain on stairs and squatting.",
        ],
      },
      {
        heading: "Special tests - ligaments and menisci",
        points: [
          "Collateral ligaments: apply a valgus and then a varus stress at 0 degrees and at 30 degrees of flexion; laxity at 30 degrees alone means an isolated collateral injury, laxity at 0 degrees means an injury involving the posterior capsule or cruciate; in this knee there is medial pseudo-laxity from loss of medial joint space rather than true ligament injury, and the end point is firm.",
          "Anterior cruciate ligament: the Lachman test at 20 to 30 degrees of flexion, holding the femur with one hand and drawing the tibia forward with the other, is the most sensitive; the anterior drawer at 90 degrees is less reliable and the pivot shift is painful and unnecessary here. Report a firm end point and no anterior translation.",
          "Posterior cruciate ligament: look for a posterior sag with both knees flexed to 90 degrees and the feet flat, then perform the posterior drawer; a posterior sag mistaken for anterior laxity is a classic error.",
          "Menisci: the McMurray test by flexing the knee fully, rotating the tibia externally and then extending with a valgus stress for the medial meniscus, and internally with varus for the lateral; report a painful click if present. The Thessaly test with the patient standing on one leg and twisting at 20 degrees of flexion is an alternative; in this knee there is medial joint line pain without a click or locking.",
          "Say at the end that you would like to complete the examination by examining the hip and the lumbar spine, the other knee in the same detail, the peripheral pulses and the feet, and by watching her get up from a chair without using her hands.",
        ],
      },
      {
        heading: "Presenting the findings before naming the diagnosis",
        points: [
          "Present in the order examined: 'On examination Mrs X walks with an antalgic gait and a varus thrust on the right; the right knee is in varus alignment with 2 cm of quadriceps wasting, bony enlargement at the joint margins, a small effusion on the bulge test, no warmth, and tenderness along the medial joint line and over the pes anserine area.'",
          "Continue: 'The range of movement is 5 to 110 degrees on the right against 0 to 135 on the left with coarse crepitus throughout, a fixed flexion deformity of 5 degrees, a positive patellar grind, no extensor lag, stable collateral and cruciate ligaments with firm end points, and a negative McMurray test; distal pulses and sensation are intact and the hip moves freely.'",
          "Only then give the interpretation: 'These findings, in a 61-year-old overweight woman with 2 years of mechanical pain, minutes of morning stiffness and no warmth, are those of a chronic degenerative arthritis of the medial tibiofemoral and patellofemoral compartments of the right knee - clinically, osteoarthritis of the knee - with a small effusion and secondary pes anserine bursitis.'",
          "Be ready to be asked how you would confirm it and what you would not do: a weight-bearing anteroposterior radiograph in the standing position and a lateral and skyline view, and no MRI, because MRI in a 61-year-old knee always shows a degenerate meniscus that does not need surgery.",
        ],
      },
    ],
    summaryStatement:
      "A 61-year-old overweight woman with 2 years of mechanical right knee pain, examined to show an antalgic gait with varus thrust, varus alignment, quadriceps wasting, bony enlargement, a small cool effusion, medial joint line and pes anserine tenderness, a 5-degree fixed flexion deformity with coarse crepitus, a positive patellar grind and stable ligaments with a negative McMurray test - the clinical picture of osteoarthritis of the medial and patellofemoral compartments of the right knee.",
    differential: [
      {
        diagnosis: "Degenerative medial meniscal tear",
        forIt: "Medial joint line tenderness, pain on squatting and an effusion after activity are shared, and degenerate tears coexist with osteoarthritis in most knees of this age.",
        againstIt: "No locking, giving way or a painful click on McMurray, no history of a twisting injury, and the bony enlargement with crepitus and varus explain the picture fully; an MRI would show a tear that does not change management.",
      },
      {
        diagnosis: "Inflammatory arthritis of the knee - rheumatoid or crystal",
        forIt: "An effusion and stiffness are present, and calcium pyrophosphate deposition disease is common in osteoarthritic knees of this age and gives acute flares.",
        againstIt: "The knee is cool with only minutes of morning stiffness, the pattern is monoarticular and mechanical, and there is bony rather than synovial thickening; a warm, tense effusion with prolonged stiffness would demand aspiration for cells and crystals.",
      },
      {
        diagnosis: "Referred pain from the hip",
        forIt: "Hip osteoarthritis classically presents as knee pain, particularly in an older patient with a limp, and both are common enough to coexist.",
        againstIt: "The hip has a full painless range with no groin pain, and the knee findings are local and sufficient; the hip was nonetheless examined because omitting it fails the case.",
      },
    ],
    investigations: [
      {
        test: "Weight-bearing anteroposterior radiograph of both knees, with lateral and skyline patellar views",
        why: "Standing films show the true joint-space narrowing that supine films hide; the four Kellgren-Lawrence features are joint-space narrowing, osteophytes, subchondral sclerosis and subchondral cysts, and the skyline view grades the patellofemoral compartment.",
        expected: "Medial tibiofemoral joint-space narrowing with marginal osteophytes and subchondral sclerosis on the right, Kellgren-Lawrence grade 3, with patellofemoral osteophytes on the skyline view; the left shows early grade 1 to 2 change.",
      },
      {
        test: "ESR and CRP",
        why: "A normal acute-phase response supports a degenerative process and reassures against an inflammatory or septic arthritis when there is an effusion; they are not needed in a classical presentation without an effusion.",
        expected: "ESR under 20 mm in the first hour and CRP under 6 mg/L.",
      },
      {
        test: "Aspiration of the effusion for cell count, Gram stain, culture and polarised-light microscopy for crystals",
        why: "Only if the effusion is warm, tense or acutely painful, to exclude septic arthritis and to diagnose calcium pyrophosphate or urate crystals; not done routinely in a cool osteoarthritic effusion.",
        expected: "A clear, viscous, non-inflammatory fluid with fewer than 2000 cells per microlitre, no organisms and no crystals if it were aspirated.",
      },
      {
        test: "Fasting blood sugar, lipid profile and blood pressure",
        why: "Osteoarthritis in an overweight 61-year-old is a marker of the metabolic syndrome, and any NSAID she is given will need a renal and cardiovascular risk assessment.",
        expected: "Often shows an unrecognised impaired fasting glucose or dyslipidaemia; blood pressure may be raised and must be documented before an NSAID.",
      },
      {
        test: "Serum creatinine and haemoglobin",
        why: "Baseline renal function before any NSAID in a woman over 60, and haemoglobin because chronic NSAID use from a pharmacy is a common cause of occult blood loss in this group.",
        expected: "Normal creatinine; haemoglobin may be low if she has already been taking diclofenac for months.",
      },
    ],
    management: [
      {
        heading: "Core treatment - education, exercise and weight",
        points: [
          "Explain that osteoarthritis is wear and repair of the joint rather than an inevitable slide to a wheelchair, that the pain comes from muscle weakness, load and inflammation more than from the cartilage seen on the film, and that the treatment she does herself is the one that works.",
          "Quadriceps-strengthening and range-of-motion exercises taught by a physiotherapist and then done daily at home - static quadriceps contractions, straight-leg raises, wall slides and step-ups - with walking or cycling for aerobic fitness; land-based exercise has the best evidence of any treatment.",
          "Weight reduction of at least 5 to 10 percent of body weight through diet and activity, because each kilogram lost removes about 4 kilograms of load from the knee at each step.",
          "Avoid deep squatting, sitting cross-legged on the floor and repeated stair climbing; provide a raised toilet seat or a commode chair, a walking stick held in the opposite hand, and appropriate cushioned footwear.",
        ],
      },
      {
        heading: "Pharmacological treatment",
        points: [
          "Topical diclofenac or ketoprofen gel applied to the knee three to four times a day is first-line and as effective as oral NSAIDs for the knee with far less harm; paracetamol 1 g up to three times a day may be added but has little effect on its own.",
          "Oral NSAIDs - naproxen 250 to 500 mg twice daily or ibuprofen 400 mg three times daily - for flares only, at the lowest dose and shortest duration, with a proton pump inhibitor, after checking creatinine, blood pressure and cardiovascular risk; avoid them altogether in renal impairment, heart failure or a previous ulcer.",
          "An intra-articular corticosteroid injection of triamcinolone 40 mg or methylprednisolone 40 mg for a painful effusion or a flare that prevents exercise, giving 4 to 8 weeks of relief and repeated no more than three or four times a year; the pes anserine bursa can be injected separately.",
          "Duloxetine 30 to 60 mg daily for persistent pain with central sensitisation or coexisting depression; tramadol only briefly and as a last resort; glucosamine, chondroitin, hyaluronic acid injections and platelet-rich plasma are not recommended by current guidelines and their cost should not be passed to the family.",
        ],
      },
      {
        heading: "Referral, surgery and follow-up",
        points: [
          "Refer to the orthopaedic surgeon when pain limits sleep and walking despite 3 to 6 months of adequate non-surgical treatment with weight loss and exercise, when there is a progressive deformity, or when the radiograph shows grade 4 change with bone-on-bone contact.",
          "Total knee replacement is the definitive treatment for end-stage disease and gives excellent pain relief in 90 percent of patients; high tibial osteotomy is an option in a younger patient with isolated medial compartment disease, and arthroscopic debridement or meniscectomy has no role in the degenerative knee.",
          "Review in 6 to 8 weeks to check the exercise programme, the weight, the analgesic use and the blood pressure if an NSAID has been prescribed, then every 3 to 6 months; screen for falls and treat the metabolic syndrome that came to light with the knee.",
        ],
      },
    ],
    viva: [
      {
        q: "What are the Kellgren-Lawrence grades?",
        a: "Grade 0 is a normal film; grade 1 doubtful narrowing with possible osteophytic lipping; grade 2 definite osteophytes with possible narrowing; grade 3 moderate multiple osteophytes, definite narrowing, some sclerosis and possible deformity of bone ends; grade 4 large osteophytes, marked narrowing, severe sclerosis and definite deformity of the bone ends.",
      },
      {
        q: "Which compartment of the knee is most commonly affected by osteoarthritis and why does that produce varus?",
        a: "The medial tibiofemoral compartment, because it carries about 60 to 70 percent of the load in normal gait; as its cartilage and bone are lost the medial side collapses, the limb drifts into varus, the mechanical axis shifts further medially and the load on the medial compartment rises, creating a self-perpetuating cycle.",
      },
      {
        q: "How do you distinguish a bulge sign from a patellar tap and when is each useful?",
        a: "The bulge sign detects a small effusion of 5 to 10 mL by stroking fluid out of the medial gutter and watching it refill when the lateral side is swept; the patellar tap needs a moderate effusion of 20 to 30 mL that floats the patella, and is negative when the effusion is small or so tense that the patella cannot be depressed.",
      },
      {
        q: "What is a Baker cyst and how can it present?",
        a: "A distended gastrocnemius-semimembranosus bursa communicating with the joint through a valve-like opening, filled by the effusion of an osteoarthritic or inflammatory knee; it presents as a popliteal swelling that is tense in extension and soft in flexion, and if it ruptures it mimics a deep vein thrombosis with calf pain and swelling, which is the main reason to know about it.",
      },
      {
        q: "What is the evidence for arthroscopy in the degenerative knee?",
        a: "Randomised trials of arthroscopic debridement, lavage and partial meniscectomy against sham surgery or physiotherapy in patients over 45 with degenerative changes have shown no benefit; guidelines advise against arthroscopy for osteoarthritis and against MRI, which finds a degenerate meniscal tear in most such knees and leads to surgery that does not help.",
      },
      {
        q: "A patient on diclofenac from the pharmacy for a year for this knee presents with ankle swelling. What are you worried about?",
        a: "NSAID-induced renal impairment or sodium retention with heart failure, and in a diabetic hypertensive the combination of NSAID, ACE inhibitor and diuretic that precipitates acute kidney injury; stop the NSAID, check creatinine, potassium and haemoglobin, examine for heart failure and look for occult gastrointestinal blood loss.",
      },
    ],
    pitfalls: [
      "Examining only the painful knee and forgetting to compare with the other side, to examine the hip and spine, and to watch the patient walk - each of these is a specific mark on the short-case sheet.",
      "Naming osteoarthritis before presenting the findings, so that the examiner cannot tell whether the diagnosis came from the examination or from the patient's age.",
      "Calling medial pseudo-laxity from joint-space loss a collateral ligament injury, or a posterior sag an anterior drawer.",
      "Ordering an MRI for a 61-year-old knee, finding a degenerate meniscal tear and referring for arthroscopy, when weight loss, quadriceps exercise and topical NSAID were the treatment.",
    ],
    references: [
      "NICE Guideline NG226: Osteoarthritis in over 16s - diagnosis and management, 2022",
      "ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip and Knee, 2019",
      "OARSI guidelines for the non-surgical management of knee, hip and polyarticular osteoarthritis, 2019",
      "Hutchison's Clinical Methods, 24th edition, 2018 - examination of the locomotor system",
      "Apley's System of Orthopaedics and Fractures, 10th edition, 2018 - the knee",
      "Macleod's Clinical Examination, 15th edition, 2023 - the musculoskeletal system",
    ],
  },
];

const subject: Subject = {
  id: "musculoskeletal",
  title: "Musculoskeletal & Rheumatology",
  blurb: "Back pain, osteoarthritis, rheumatoid arthritis, gout, soft tissue rheumatism and osteoporosis.",
  icon: "Bone",
  papers: ["II", "III"],
  topics,
  cases,
};

export default subject;
