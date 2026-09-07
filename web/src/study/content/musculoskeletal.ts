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
