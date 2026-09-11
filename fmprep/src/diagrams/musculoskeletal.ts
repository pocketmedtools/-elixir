/**
 * Diagrams for musculoskeletal, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "musculoskeletal-low-back-pain": [
    {
      kind: "branch",
      heading: "The three boxes of low back pain",
      caption: "Every back pain goes into one of three boxes before any treatment is chosen.",
      root: "Low back pain below the costal margin",
      arms: [
        {
          label: "Non-specific mechanical (over 90%)",
          steps: [
            "Worse on movement and loading, better with rest",
            "Morning stiffness under 30 minutes, varies through the day",
            "Half improve in 1 week, 90% within 6 weeks",
            "Recurrence in 40-60% within a year - recovery with recurrence, not cure",
          ],
        },
        {
          label: "Radicular pain (5-10%)",
          steps: [
            "Pain radiating below the knee in a dermatomal pattern",
            "Usually an L4-L5 or L5-S1 disc prolapse",
            "75% settle with conservative treatment in 6-12 weeks",
            "MRI only if surgery is being considered",
          ],
        },
        {
          label: "Serious specific pathology (1-2%)",
          tone: "warn",
          steps: [
            "Infection, malignancy, fracture, inflammatory disease",
            "Fever, night sweats, weight loss, gibbus, known cancer, age over 50",
            "Cauda equina syndrome is the one that cannot wait",
            "Image and refer by the red flag, not by the severity of pain",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Cauda equina syndrome - the emergency sequence",
      caption: "Outcome is decided by the time from onset to decompression.",
      steps: [
        {
          label: "Recognise the cluster",
          detail:
            "Bilateral sciatica, saddle anaesthesia, urinary retention with overflow, faecal incontinence, lax anal tone, progressive lower limb weakness",
          tone: "warn",
        },
        {
          label: "Confirm at the bedside",
          detail:
            "Perianal sensation, anal tone, ankle jerks; a post-void residual over 200 mL supports the diagnosis",
        },
        {
          label: "Emergency MRI lumbosacral spine",
          detail: "MRI is the investigation of choice; a radiograph answers nothing here",
          tone: "decision",
        },
        {
          label: "Same-day surgical referral",
          detail:
            "Decompression as early as possible, ideally within 24-48 hours of onset; outcome depends on the completeness of the deficit and the delay",
          tone: "good",
        },
        {
          label: "Never substitute drugs or an injection",
          detail:
            "Pregabalin, a radiograph or an epidural steroid injection treat radicular pain and waste the operative window",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Mechanical versus inflammatory back pain",
      caption:
        "The average delay to diagnosis in axial spondyloarthritis is still 5-8 years, and almost all of it happens in primary care.",
      columns: ["Feature", "Mechanical", "Inflammatory"],
      rows: [
        ["Age at onset", "Any age", "Starts before 45 years"],
        ["Onset", "After loading, lifting or a strain", "Insidious over months"],
        ["Morning stiffness", "Under 30 minutes", "Over 30 minutes, often an hour or more"],
        ["Night pain", "Unusual", "Wakes the patient in the second half of the night"],
        [
          "Effect of activity",
          "Worse on movement, better with rest",
          "Improves with exercise, worse with rest",
        ],
        [
          "Response to NSAID",
          "Partial, variable",
          "Dramatic and reproducible within 48 hours, itself a criterion",
        ],
        [
          "First investigation",
          "None in the first 6 weeks",
          "Pelvis anteroposterior radiograph with ESR and CRP",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Analgesia for low back pain in general practice",
      caption: "Advice and staying active are the treatment; drugs only make that possible.",
      steps: [
        {
          label: "NSAID at the lowest effective dose",
          detail:
            "Ibuprofen 400 mg PO TDS or naproxen 250-500 mg PO BD after food for 5-7 days; add a PPI if over 60, on aspirin or a steroid, or a past ulcer",
        },
        {
          label: "Paracetamol as add-on or if NSAID unsafe",
          detail:
            "500-1000 mg PO QDS, maximum 3-4 g/day; reduce to 2 g/day in liver disease and in the frail elderly; the safer choice in renal disease",
        },
        {
          label: "Muscle relaxant for acute spasm",
          detail:
            "Tizanidine 2 mg PO at night for 3-5 days only; sedation, dry mouth, hypotension, and no habitual long-term use",
        },
        {
          label: "Neuropathic agent for radicular pain",
          detail:
            "Amitriptyline 10-25 mg PO at night, or pregabalin 75 mg at night titrated to 150 mg BD; counsel on drowsiness, weight gain and falls",
        },
        {
          label: "Tramadol only if severe and refractory",
          detail:
            "50 mg PO BD for under 2 weeks; long-term opioids are explicitly not recommended for chronic back pain",
          tone: "warn",
        },
      ],
    },
  ],

  "musculoskeletal-knee-osteoarthritis": [
    {
      kind: "flow",
      heading: "Diagnosing knee osteoarthritis without a radiograph",
      caption: "A clinical diagnosis in anyone over 45 - the film adds nothing but anxiety.",
      steps: [
        {
          label: "Age 45 or over with activity-related pain",
          detail:
            "NICE criteria: either no morning stiffness or stiffness lasting no more than 30 minutes",
        },
        {
          label: "Examine: look, feel, move, stability",
          detail:
            "Bony hard enlargement, coarse crepitus, patellar tap or bulge test for effusion, arc normally 0 to 135-140 degrees, McMurray and Thessaly for the meniscus",
        },
        {
          label: "No investigation is needed",
          detail:
            "Radiographs correlate poorly with symptoms; rheumatoid serology in a typical picture only generates false positives",
        },
        {
          label: "Radiograph only to answer a question",
          detail:
            "Weight-bearing anteroposterior with lateral and skyline views; a supine film underestimates joint space narrowing",
        },
        {
          label: "Start the core package the same day",
          detail:
            "Education, quadriceps and aerobic exercise, weight loss of 5-10% with a kilogram target, topical NSAID",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Analgesia in knee osteoarthritis, in order of preference",
      caption: "Exercise plus weight loss outperforms every drug on this ladder.",
      steps: [
        {
          label: "Topical NSAID first line",
          detail:
            "Diclofenac 1% gel, 2-4 g to the knee three to four times a day; about one-tenth the systemic exposure, local rash only",
        },
        {
          label: "Paracetamol as a safe adjunct",
          detail: "500-1000 mg PO QDS, maximum 3 g/day in the elderly; small effect, not a solution",
        },
        {
          label: "Oral NSAID for flares only",
          detail:
            "Ibuprofen 400 mg TDS (lowest cardiovascular risk) or naproxen 250-500 mg BD with a PPI, at the lowest dose for the shortest time",
        },
        {
          label: "Intra-articular steroid for an effusive flare",
          detail:
            "Triamcinolone acetonide 40 mg with 1% lignocaine under strict asepsis; 4-8 weeks of relief, maximum 3-4 injections a year in one joint",
        },
        {
          label: "Duloxetine for centralised pain",
          detail: "30 mg PO OD for 1 week then 60 mg OD; nausea and dry mouth",
        },
        {
          label: "Do not prescribe these",
          detail:
            "Glucosamine, chondroitin, intra-articular hyaluronic acid, long-term opioids or tramadol, and systemic oral steroids",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Osteoarthritis versus rheumatoid arthritis at the bedside",
      columns: ["Feature", "Osteoarthritis", "Rheumatoid arthritis"],
      rows: [
        ["Age at onset", "Usually over 45", "30-50 years, any age"],
        ["Morning stiffness", "Under 30 minutes, gelling after rest", "Over 60 minutes, improves with use"],
        [
          "Joints involved",
          "Knees, hips, DIP, first CMC, cervical and lumbar spine",
          "MCP, PIP, wrists, MTP; spares DIP and lumbar spine",
        ],
        ["Symmetry", "Often asymmetrical", "Symmetrical"],
        ["Swelling", "Bony, hard, cool", "Soft, boggy, warm synovitis"],
        ["Systemic features", "Absent", "Fatigue, weight loss, anaemia, nodules"],
        ["Laboratory", "ESR and CRP normal", "ESR and CRP raised, RF and anti-CCP often positive"],
        [
          "Radiograph",
          "Joint space narrowing, osteophytes, subchondral sclerosis and cysts",
          "Periarticular osteopenia, marginal erosions, uniform narrowing",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Prescribing an oral NSAID safely",
      steps: [
        {
          label: "Check before you prescribe",
          detail:
            "Age, past ulcer or gastrointestinal bleed, aspirin, steroid, anticoagulant or SSRI, eGFR, blood pressure, heart failure, asthma, pregnancy",
        },
        {
          label: "Co-prescribe a proton pump inhibitor",
          detail:
            "Pantoprazole 40 mg or omeprazole 20 mg PO OD for anyone over 60 or with any of those risks",
        },
        {
          label: "Pick the drug by cardiovascular risk",
          detail:
            "Ibuprofen carries the lowest cardiovascular risk, naproxen is preferred if risk is high, diclofenac the highest - avoid it in ischaemic heart disease, stroke and heart failure",
        },
        {
          label: "Monitor at 2-4 weeks",
          detail:
            "Blood pressure and weight; creatinine and potassium at 2-4 weeks then every 3-6 months; haemoglobin for any gastrointestinal symptom",
        },
        {
          label: "Give explicit stop rules",
          detail: "Stop and report black stools, dyspepsia, ankle swelling or reduced urine output",
        },
        {
          label: "Never in the triple whammy patient",
          detail:
            "Avoid if eGFR is under 30, in decompensated heart failure, in cirrhosis with ascites, and alongside an ACE inhibitor plus diuretic in a dehydrated patient",
          tone: "warn",
        },
      ],
    },
  ],

  "musculoskeletal-gout": [
    {
      kind: "flow",
      heading: "The acute hot joint - exclude sepsis before you treat",
      caption: "A known history of gout does not protect the joint from infection.",
      steps: [
        {
          label: "Aspirate the joint first",
          detail:
            "Send the same aspirate for Gram stain, cell count and culture as well as crystals; gout fluid is 20,000-70,000 white cells per cubic mm and overlaps with sepsis",
          tone: "warn",
        },
        {
          label: "Fever, rigors or systemic toxicity",
          detail:
            "Treat as septic arthritis until the aspirate proves otherwise: blood cultures, empirical intravenous antibiotics after sampling, orthopaedic referral for washout",
          tone: "decision",
        },
        {
          label: "Crystals confirm the attack",
          detail: "Needle-shaped, negatively birefringent monosodium urate crystals",
        },
        {
          label: "Treat within the first 24 hours",
          detail:
            "The first 24 hours decide the length of the attack; NSAID, colchicine or steroid are equally acceptable and the choice is made on comorbidity",
        },
        {
          label: "Recheck serum urate 2 weeks later",
          detail:
            "Urate is normal or low in up to a third of acute attacks because inflammation is uricosuric; the 2-week level is the true baseline, and treatment is then targeted to under 6 mg/dL",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Choosing the drug for an acute attack",
      caption: "Pick by comorbidity, not by potency - no agent is superior to the others.",
      root: "Acute gout confirmed and sepsis excluded",
      arms: [
        {
          label: "Healthy adult, normal renal function",
          steps: [
            "Naproxen 750 mg PO stat then 250 mg PO TDS",
            "Or indomethacin 50 mg PO TDS, or etoricoxib 120 mg PO daily",
            "Continue 5-7 days or until 48 hours after the attack settles",
            "Add a proton pump inhibitor",
          ],
        },
        {
          label: "Presenting within 24 hours, normal eGFR",
          steps: [
            "Colchicine 1.2 mg PO stat then 0.6 mg after 1 hour",
            "Then 0.6 mg once or twice daily from the next day",
            "In India 1 mg stat then 0.5 mg after an hour is the practical equivalent",
            "Far less effective if started after 36-48 hours",
          ],
        },
        {
          label: "CKD, heart failure, ulcer or anticoagulated",
          steps: [
            "Prednisolone 30-40 mg PO daily for 5 days",
            "Stop abruptly or taper over 7-10 days",
            "The safest broad option in renal impairment and the elderly",
            "Monitor glucose in diabetes",
          ],
        },
        {
          label: "Single large accessible joint",
          tone: "warn",
          steps: [
            "Intra-articular methylprednisolone acetate 40 mg or triamcinolone",
            "Fastest relief of all the options",
            "Only after the aspirate has excluded sepsis",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Differentiating the acute hot joint",
      columns: ["Feature", "Gout", "Septic arthritis", "Pseudogout"],
      rows: [
        [
          "Typical patient",
          "Man over 40, alcohol, diuretic, CKD, metabolic syndrome",
          "Any age; diabetes, immunosuppression, prosthesis, skin breach",
          "Elderly, often over 65, after illness or surgery",
        ],
        [
          "Commonest joint",
          "First metatarsophalangeal, midfoot, ankle, knee",
          "Knee, then hip; any joint",
          "Knee, then wrist and shoulder",
        ],
        [
          "Onset to peak",
          "6-12 hours, often nocturnal",
          "Hours to 1-2 days with systemic toxicity",
          "12-36 hours, less explosive",
        ],
        [
          "Fever and toxicity",
          "Low grade fever common, patient not toxic",
          "High fever, rigors, unwell, may be septic",
          "Low grade fever possible",
        ],
        [
          "Synovial crystals",
          "Needle-shaped, negatively birefringent urate",
          "None; organisms on Gram stain or culture",
          "Rhomboid, weakly positively birefringent CPPD",
        ],
        [
          "Synovial white cells",
          "20,000-70,000 per cubic mm, neutrophils",
          "Usually over 50,000, often over 100,000",
          "10,000-50,000 per cubic mm",
        ],
        [
          "Radiograph clue",
          "Late punched-out erosion with an overhanging edge",
          "Normal early; joint destruction late",
          "Chondrocalcinosis of meniscus and triangular fibrocartilage",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Urate-lowering therapy - start low, treat to target",
      caption: "Titrate against the urate number, never against the symptoms.",
      steps: [
        {
          label: "Start 2 weeks after the attack settles",
          detail:
            "Recurrent attacks are a clear indication for lifelong therapy; starting during an attack in a drug-naive patient prolongs the flare",
        },
        {
          label: "Allopurinol 100 mg PO daily",
          detail:
            "50 mg daily if eGFR is under 30; starting at 300 mg without titration is the commonest error and raises hypersensitivity risk",
        },
        {
          label: "Cover with colchicine 0.5 mg daily",
          detail:
            "Prophylaxis once or twice daily for at least 3-6 months, because falling urate mobilises crystals and provokes flares; low-dose NSAID with a PPI or prednisolone 5 mg if colchicine is contraindicated",
        },
        {
          label: "Titrate by 100 mg every 2-4 weeks",
          detail:
            "Usual effective dose 300-600 mg, licensed maximum 800-900 mg daily; febuxostat 40-80 mg if allopurinol is not tolerated",
        },
        {
          label: "Target serum urate under 6 mg/dL",
          detail:
            "Under 5 mg/dL where there are tophi; recheck every 2-4 weeks during titration then every 6 months once stable",
          tone: "good",
        },
        {
          label: "Stop at once for rash or fever",
          detail:
            "Allopurinol hypersensitivity syndrome in the first 8-12 weeks carries up to 20-25% mortality; HLA-B*5801 carriage raises the risk. Reduce azathioprine or 6-mercaptopurine by 75% if they must be combined",
          tone: "warn",
        },
      ],
    },
  ],

  "musculoskeletal-shoulder-pain": [
    {
      kind: "compare",
      heading: "Distinguishing the common causes of shoulder pain",
      caption: "The passive range is the column that separates them.",
      columns: ["Diagnosis", "Active range", "Passive range", "Key test"],
      rows: [
        [
          "Adhesive capsulitis",
          "Globally reduced",
          "Reduced in a capsular pattern, external rotation worst",
          "Loss of passive external rotation with the elbow at the side",
        ],
        [
          "Cuff tendinopathy or impingement",
          "Painful arc 60-120 degrees",
          "Full",
          "Positive Neer and Hawkins-Kennedy; Jobe empty-can for supraspinatus",
        ],
        [
          "Full-thickness cuff tear",
          "Cannot initiate or hold abduction",
          "Full",
          "Positive drop-arm and external rotation lag sign; ultrasound confirms",
        ],
        [
          "Acromioclavicular joint arthritis",
          "Pain in the terminal 20-30 degrees",
          "Full",
          "Positive scarf (cross-body adduction) test",
        ],
        [
          "Calcific tendinitis",
          "Almost nil because of pain",
          "Restricted by pain only",
          "Radiograph shows a deposit above the greater tuberosity",
        ],
        [
          "Cervical radiculopathy",
          "Full but painful on neck movement",
          "Full",
          "Positive Spurling test with dermatomal sensory loss and reflex change",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "The three phases of adhesive capsulitis",
      caption: "Total course is typically 18-30 months - say so at the first visit.",
      steps: [
        {
          label: "Freezing (painful) - 2 to 9 months",
          detail:
            "Severe progressive night-dominant pain with developing stiffness; analgesia, NSAID, early intra-articular steroid and gentle pain-free range exercises only",
        },
        {
          label: "Frozen (stiff) - 4 to 12 months",
          detail:
            "Pain settling, marked global stiffness and functional loss; intensive stretching and supervised physiotherapy, hydrodilatation if no progress",
        },
        {
          label: "Thawing (recovery) - 5 to 24 months",
          detail:
            "Gradual return of range with residual mild restriction in up to 40%; continue stretching and strengthening",
          tone: "good",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Escalating treatment in adhesive capsulitis",
      caption:
        "A sling is never the treatment - immobilisation accelerates capsular contracture.",
      steps: [
        {
          label: "Explanation and expectation setting",
          detail:
            "Self-limiting but over 18-30 months, with mild restriction persisting in up to 40%; the patient who understands this stops shopping for injections",
          tone: "good",
        },
        {
          label: "Analgesia through the painful phase",
          detail:
            "Paracetamol 1 g PO QDS with naproxen 250-500 mg PO BD or etoricoxib 60-90 mg daily for 2-3 weeks with a PPI; amitriptyline 10-25 mg at night for night pain",
        },
        {
          label: "Early intra-articular steroid injection",
          detail:
            "Triamcinolone 40 mg with 4-5 mL 1% lignocaine into the glenohumeral joint by the posterior approach, ideally ultrasound-guided; 2-3 injections at least 6 weeks apart, and warn diabetics of 5-10 days of hyperglycaemia",
        },
        {
          label: "Hydrodilatation or suprascapular block",
          detail:
            "At 3-6 months if there is no progress; distension arthrography injects 20-40 mL of saline with steroid and local anaesthetic to rupture the contracted capsule",
        },
        {
          label: "Manipulation or capsular release",
          detail:
            "Refer after 6-9 months of proper conservative care; risks humeral fracture, dislocation and cuff tear in the osteoporotic and diabetic, and must be followed by intensive physiotherapy",
          tone: "warn",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Shoulder injections in general practice",
      columns: ["Target", "Drug and volume", "Cautions"],
      rows: [
        [
          "Glenohumeral joint for adhesive capsulitis",
          "Triamcinolone 40 mg or methylprednisolone 40 mg with 4-5 mL 1% lignocaine",
          "Maximum 2-3 injections 6 weeks apart; hyperglycaemia for 5-10 days in diabetics; never through infected skin",
        ],
        [
          "Subacromial space for impingement",
          "Triamcinolone 40 mg with 4-5 mL 1% lignocaine",
          "Repeated injections weaken tendon collagen and raise rupture risk; avoid if a full-thickness tear is suspected",
        ],
        [
          "Acromioclavicular joint",
          "Triamcinolone 10-20 mg with 0.5-1 mL 1% lignocaine",
          "Small joint, small volume; skin atrophy and depigmentation are common at superficial sites",
        ],
      ],
    },
  ],

  "musculoskeletal-neck-pain": [
    {
      kind: "compare",
      heading: "The three clinical syndromes of cervical spondylosis",
      caption:
        "Degenerative change is present in over 90% above 70, so the syndrome, not the film, makes the diagnosis.",
      columns: ["Feature", "Mechanical neck pain", "Radiculopathy", "Myelopathy"],
      rows: [
        [
          "Main complaint",
          "Neck, trapezius and occipital ache with stiffness",
          "Arm pain below the elbow with paraesthesia",
          "Clumsy hands and unsteady gait; neck pain may be absent",
        ],
        [
          "Motor signs",
          "None",
          "Segmental lower motor neurone weakness at one root",
          "Spastic weakness, wasting of the small hand muscles",
        ],
        [
          "Reflexes",
          "Normal",
          "Reduced or absent at the involved root",
          "Brisk with clonus and Hoffmann sign; inverted supinator jerk",
        ],
        ["Plantar response", "Flexor", "Flexor", "Extensor"],
        ["Gait", "Normal", "Normal", "Broad-based, unsteady, abnormal tandem walk"],
        [
          "Imaging",
          "Not indicated without red flags",
          "MRI if persisting beyond 6 weeks or progressive deficit",
          "Urgent MRI - canal under 13 mm, cord compression, T2 signal change",
        ],
        [
          "Management",
          "Reassurance, exercise, analgesia, ergonomics",
          "Conservative for 6-12 weeks, 75-90% recover, then injection or surgery",
          "Surgical decompression referral; mJOA under 15 means operate",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Cervical nerve root localisation",
      columns: ["Root", "Pain and sensory distribution", "Weakness", "Reflex affected"],
      rows: [
        [
          "C5",
          "Lateral shoulder and upper lateral arm",
          "Shoulder abduction and elbow flexion (deltoid, biceps)",
          "Biceps jerk",
        ],
        [
          "C6",
          "Lateral forearm to thumb and index finger",
          "Elbow flexion, wrist extension",
          "Supinator (brachioradialis) jerk",
        ],
        [
          "C7",
          "Posterior arm to middle finger",
          "Elbow extension, wrist flexion, finger extension",
          "Triceps jerk",
        ],
        [
          "C8",
          "Medial forearm to ring and little finger",
          "Finger flexion and grip strength",
          "None reliably",
        ],
        [
          "T1",
          "Medial arm and axilla",
          "Finger abduction and adduction (intrinsic hand muscles)",
          "None; may cause Horner syndrome",
        ],
      ],
    },
    {
      kind: "flow",
      heading: "Cervical myelopathy - recognise and refer",
      caption: "Surgery arrests but does not reverse the deficit, so the delay is the disease.",
      steps: [
        {
          label: "Ask about hand dexterity",
          detail:
            "Deteriorating handwriting, difficulty buttoning a shirt, dropping objects; neck pain may be absent altogether",
        },
        {
          label: "Watch the patient walk",
          detail: "Broad-based, unsteady gait with an abnormal tandem walk",
        },
        {
          label: "Find the upper motor neurone signs",
          detail:
            "Brisk reflexes with clonus, positive Hoffmann sign, inverted supinator jerk, extensor plantars",
        },
        {
          label: "Urgent MRI of the cervical spine",
          detail:
            "Urgent, not routine: canal under 13 mm, cord compression, T2 signal change",
          tone: "decision",
        },
        {
          label: "Spinal surgical opinion",
          detail: "mJOA under 15 means operate",
          tone: "good",
        },
        {
          label: "A collar and a 6-week review is the error",
          detail:
            "Calling upper motor neurone signs age-related degeneration is what produces the two-year average diagnostic delay",
          tone: "warn",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Drugs in neck pain and cervical radiculopathy",
      caption:
        "Explanation, neck-specific exercise and ergonomics come before any of these; 75-90% of radiculopathy recovers in 3 months.",
      steps: [
        {
          label: "Paracetamol as baseline analgesia",
          detail:
            "500-1000 mg PO QDS, maximum 3-4 g/day; 2 g/day in liver disease and the frail elderly",
        },
        {
          label: "NSAID for acute mechanical pain",
          detail:
            "Ibuprofen 400 mg PO TDS or naproxen 250-500 mg PO BD after food for 5-7 days, with a PPI where there is gastric risk",
        },
        {
          label: "Tizanidine for acute spasm",
          detail: "2 mg PO at night for 3-5 days only; sedation, dry mouth, hypotension",
        },
        {
          label: "Amitriptyline for radicular pain",
          detail:
            "10-25 mg PO at night titrated over 4-6 weeks; start at 10 mg in the elderly and avoid in glaucoma and heart block",
        },
        {
          label: "Pregabalin or gabapentin, second line",
          detail:
            "Pregabalin 75 mg at night titrated to 75-150 mg BD, or gabapentin 300 mg at night upward; review at 8 weeks and stop if no benefit",
        },
        {
          label: "Specialist option for severe radicular pain",
          detail:
            "A short prednisolone course or a transforaminal epidural steroid injection, with MRI and a spinal opinion if pain persists beyond 6-12 weeks; never for routine mechanical neck pain",
          tone: "warn",
        },
      ],
    },
  ],

  "musculoskeletal-osteoporosis": [
    {
      kind: "ladder",
      heading: "Reading a DXA report",
      caption:
        "In premenopausal women, men under 50 and children use the Z-score; a Z-score of -2.0 or below means hunt for a secondary cause.",
      steps: [
        {
          label: "Normal: T-score -1.0 or above",
          detail: "Lifestyle advice, calcium and vitamin D; repeat only if risk changes",
          tone: "good",
        },
        {
          label: "Osteopenia: T-score -1.1 to -2.4",
          detail:
            "Calculate FRAX; treat if the 10-year major fracture risk is high or a fragility fracture is present",
        },
        {
          label: "Osteoporosis: T-score -2.5 or below",
          detail: "Treat with calcium, vitamin D and an antiresorptive drug",
        },
        {
          label: "Severe: -2.5 or below plus a fracture",
          detail:
            "Treat; consider an anabolic agent if there are multiple vertebral fractures. A hip or vertebral fragility fracture defines osteoporosis whatever the T-score shows",
          tone: "warn",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Starting treatment for osteoporosis",
      caption:
        "Anyone on prednisolone 5 mg daily or more for 3 months or longer needs bone protection now, whatever the T-score.",
      steps: [
        {
          label: "Correct vitamin D first",
          detail:
            "Cholecalciferol 60,000 IU PO weekly for 8 weeks then 60,000 IU monthly; recheck 25-hydroxyvitamin D at 3 months aiming above 30 ng/mL",
        },
        {
          label: "Total calcium 1000-1200 mg a day",
          detail:
            "Diet first - 250 mL milk about 300 mg, a cup of curd about 275 mg, 100 g ragi about 350 mg; supplement the shortfall with elemental calcium 500 mg once or twice daily with food",
        },
        {
          label: "Alendronate 70 mg PO once weekly",
          detail:
            "On waking, empty stomach, full glass of plain water, upright with nothing else by mouth for 30 minutes; absorption is under 1% at best",
        },
        {
          label: "Review at 3 months for adherence",
          detail:
            "Real-world persistence with oral bisphosphonates falls below 50% at one year, the commonest reason for apparent treatment failure",
          tone: "warn",
        },
        {
          label: "Repeat DXA at 2 years, same machine",
          detail:
            "After 1 year on steroids or in rapid loss; a stable or rising density is success, since the aim is fracture prevention and not a normal T-score",
        },
        {
          label: "Consider a drug holiday at 5 years",
          detail:
            "After 5 years of oral or 3 years of intravenous bisphosphonate in a low-risk patient - no new fracture, T-score above -2.5, no ongoing steroids - and reassess in 2-3 years",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Choosing the drug beyond calcium and vitamin D",
      root: "Which antiresorptive or anabolic agent?",
      arms: [
        {
          label: "Oral bisphosphonate, first line",
          steps: [
            "Alendronate 70 mg weekly or risedronate 35 mg weekly",
            "Fasting on waking, upright for 30 minutes",
            "Avoid if eGFR is below 35, or with achalasia or stricture",
            "Oesophagitis and reflux are the limiting problems",
          ],
        },
        {
          label: "Zoledronic acid 5 mg IV once a year",
          steps: [
            "Over at least 15 minutes",
            "For intolerance, poor adherence, or after a hip fracture where it reduces mortality",
            "Pre-hydrate and correct vitamin D first",
            "Acute-phase reaction with fever and myalgia in about 30% after the first dose",
          ],
        },
        {
          label: "Denosumab 60 mg SC six-monthly",
          tone: "warn",
          steps: [
            "For renal impairment and bisphosphonate failure",
            "Not renally cleared; usable down to an eGFR of 15-30 with calcium monitoring",
            "Never simply stop it - rebound resorption causes multiple vertebral fractures in 6-12 months",
            "A bisphosphonate must follow",
          ],
        },
        {
          label: "Teriparatide 20 micrograms SC daily",
          steps: [
            "For severe disease, multiple vertebral fractures or antiresorptive failure",
            "Maximum 24 months",
            "Must be followed by an antiresorptive to lock in the gain",
            "Avoid in Paget disease, unexplained high alkaline phosphatase, prior skeletal irradiation and hypercalcaemia",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Osteoporosis versus osteomalacia",
      columns: ["Feature", "Osteoporosis", "Osteomalacia"],
      rows: [
        ["Defect", "Reduced bone mass, normal mineralisation", "Defective mineralisation of osteoid"],
        [
          "Symptoms",
          "Silent until fracture",
          "Diffuse bone pain, bony tenderness, proximal myopathy",
        ],
        ["Gait", "Normal until fracture", "Waddling; difficulty rising from a chair or squat"],
        ["Calcium and phosphate", "Normal", "Low or low-normal"],
        ["Alkaline phosphatase", "Normal", "Raised"],
        ["Parathyroid hormone", "Normal", "Raised, secondary hyperparathyroidism"],
        ["25-hydroxyvitamin D", "Often low but may be normal", "Low, usually below 10 ng/mL"],
        [
          "Radiograph",
          "Fractures, generalised lucency",
          "Looser zones (pseudofractures), triradiate pelvis",
        ],
        [
          "Treatment",
          "Calcium and vitamin D plus an antiresorptive",
          "High-dose vitamin D and calcium; pain resolves in weeks",
        ],
      ],
    },
  ],

  "musculoskeletal-spondyloarthropathy-sle": [
    {
      kind: "compare",
      heading: "Rheumatoid arthritis, spondyloarthropathy and SLE",
      caption:
        "The single most useful bedside discriminator is whether there is true synovitis.",
      columns: ["Feature", "Rheumatoid arthritis", "Spondyloarthropathy", "SLE"],
      rows: [
        ["Sex and age", "Women 3:1, 30-50 years", "Men 2-3:1, under 45 years", "Women 9:1, 15-45 years"],
        [
          "Joint pattern",
          "Symmetrical small joint polyarthritis",
          "Asymmetrical large joint lower limb oligoarthritis",
          "Symmetrical small joint, more pain than swelling",
        ],
        ["Axial involvement", "Cervical spine only", "Sacroiliac joints and whole spine", "Rare"],
        [
          "Distinctive lesion",
          "Synovitis with erosions and nodules",
          "Enthesitis, dactylitis, sacroiliitis",
          "Multisystem serositis, rash, nephritis",
        ],
        [
          "Serology",
          "Rheumatoid factor and anti-CCP positive",
          "Seronegative, HLA-B27 associated",
          "ANA, anti-dsDNA, anti-Smith",
        ],
        [
          "Radiograph",
          "Periarticular osteopenia, erosions, joint space loss",
          "Sacroiliitis, syndesmophytes, bamboo spine",
          "Usually normal, non-erosive",
        ],
        ["First-line drug", "Methotrexate", "Continuous NSAID plus exercise", "Hydroxychloroquine"],
        [
          "Extra-articular clue",
          "Nodules, interstitial lung disease, scleritis",
          "Uveitis, psoriasis, colitis, aortic regurgitation",
          "Malar rash, oral ulcers, cytopenias, proteinuria",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "Treating axial spondyloarthritis",
      caption:
        "The pelvis anteroposterior radiograph is the single most useful film; a normal CRP occurs in up to 40% of active disease.",
      steps: [
        {
          label: "Daily exercise and posture programme",
          detail:
            "Bed rest and a spinal brace accelerate ankylosis and deconditioning, which is the opposite of what this disease needs",
          tone: "good",
        },
        {
          label: "Continuous NSAID, not as needed",
          detail:
            "Naproxen 500 mg PO BD, indomethacin 25-50 mg PO TDS or etoricoxib 60-90 mg PO OD, with a PPI for gastric risk and monitoring of blood pressure and renal function; a dramatic response within 48 hours supports the diagnosis",
        },
        {
          label: "A second NSAID at maximum dose",
          detail:
            "Each trial runs at least 4 weeks; failure of two NSAIDs at maximum dose is the definition of NSAID failure",
        },
        {
          label: "Sulfasalazine only if peripheral arthritis",
          detail:
            "Sulfasalazine 1-1.5 g PO BD or methotrexate 15-25 mg weekly work only for peripheral joints and have no effect at all on axial disease",
          tone: "warn",
        },
        {
          label: "TNF or IL-17 inhibitor by referral",
          detail:
            "Etanercept, adalimumab, infliximab or secukinumab, after screening for latent and active tuberculosis with a chest radiograph and tuberculin test or IGRA, and for hepatitis B and C",
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Escalating SLE treatment by organ involvement",
      caption:
        "Lupus nephritis occurs in 40-60% of Indian patients and is silent - check blood pressure, urine dipstick, microscopy for red cell casts, protein-creatinine ratio and creatinine at every visit.",
      steps: [
        {
          label: "Hydroxychloroquine for every patient",
          detail:
            "200-400 mg PO daily, up to 5 mg/kg actual body weight, lifelong; it reduces flares, thrombosis, organ damage and mortality. Baseline and annual retinal screening after 5 years, and continue it through pregnancy",
          tone: "good",
        },
        {
          label: "Mild: NSAID and short low-dose steroid",
          detail:
            "For arthralgia and serositis, with prednisolone 5-10 mg daily for short periods only",
        },
        {
          label: "Moderate: add a steroid-sparing agent",
          detail:
            "Prednisolone 0.5 mg/kg/day tapered, with azathioprine 1-2 mg/kg/day or methotrexate 15-25 mg weekly with folic acid 5 mg",
        },
        {
          label: "Severe: nephritis or neuropsychiatric",
          detail:
            "High-dose steroid with mycophenolate mofetil 2-3 g/day or intravenous cyclophosphamide, and belimumab or rituximab if refractory, always under a rheumatologist or nephrologist",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Lupus flare versus infection in a patient on immunosuppression",
      caption:
        "Infection is a leading cause of death in lupus, and in India that includes tuberculosis alongside bacterial pneumonia.",
      columns: ["Feature", "Lupus flare", "Infection"],
      rows: [
        ["CRP", "Normal or only mildly raised", "High - a CRP of 96 mg/L points here"],
        ["ESR", "Rises with disease activity", "Also raised, so it does not separate the two"],
        ["Complement C3 and C4", "Low", "Normal"],
        ["Anti-dsDNA", "Rising, titres track activity", "Unchanged from baseline"],
        [
          "Action",
          "Escalate immunosuppression",
          "Culture, image and treat the infection before any escalation",
        ],
      ],
    },
  ],

  "musculoskeletal-fractures-sports-injury": [
    {
      kind: "branch",
      heading: "Decision rules that decide who gets a radiograph",
      caption:
        "The Ottawa rules are close to 100% sensitive for clinically significant fractures and cut radiography by about a third.",
      root: "Injured limb or neck - do I need a film?",
      arms: [
        {
          label: "Ottawa ankle rule",
          steps: [
            "Malleolar zone pain plus bone tenderness at the posterior edge or tip of either malleolus",
            "Or inability to bear weight for 4 steps immediately and in the department",
            "If negative, tell the patient with confidence that no film is needed",
          ],
        },
        {
          label: "Ottawa foot rule",
          steps: [
            "Midfoot pain plus tenderness at the navicular or the base of the fifth metatarsal",
            "Or the same failure to bear weight for 4 steps",
          ],
        },
        {
          label: "Ottawa knee rule",
          steps: [
            "Age 55 or over",
            "Isolated patellar tenderness, or tenderness at the fibular head",
            "Inability to flex to 90 degrees",
            "Inability to bear weight for 4 steps; validated in adults, use with caution under 18",
          ],
        },
        {
          label: "Canadian C-spine rule",
          steps: [
            "Any high-risk factor: age 65 or over, dangerous mechanism, limb paraesthesiae",
            "No low-risk factor allowing safe assessment",
            "Inability to rotate the neck 45 degrees each way",
            "Alert and stable patients only; immobilise if there is any doubt",
          ],
        },
        {
          label: "Clinical scaphoid rule",
          tone: "warn",
          steps: [
            "Snuffbox tenderness, scaphoid tubercle tenderness or pain on axial thumb compression",
            "Up to 20% of scaphoid fractures are invisible on the first radiograph",
            "Thumb spica cast and re-image at 10-14 days even if that film is normal",
            "A missed fracture means avascular necrosis of the proximal pole and non-union",
          ],
        },
      ],
    },
    {
      kind: "flow",
      heading: "Compartment syndrome under a plaster",
      caption: "The window is about 6 hours, and the diagnosis is clinical.",
      steps: [
        {
          label: "Pain out of proportion to the injury",
          detail:
            "Not relieved by opioids, with pain on passive stretch of the toes and paraesthesiae in the foot",
          tone: "warn",
        },
        {
          label: "Do not wait for a lost pulse",
          detail:
            "A palpable pulse and a capillary refill of 2 seconds are entirely expected; pulselessness is a very late sign and waiting for it means dead muscle",
          tone: "warn",
        },
        {
          label: "Split the plaster down to skin",
          detail: "Split the cast and every dressing along its full length",
        },
        {
          label: "Keep the limb at heart level",
          detail:
            "Elevating above heart level reduces arterial perfusion pressure and worsens the ischaemia",
        },
        {
          label: "Oxygen, analgesia, correct hypotension",
          detail:
            "In the unconscious or unreliable patient a delta pressure below 30 mmHg indicates fasciotomy",
        },
        {
          label: "Refer immediately for fasciotomy",
          detail: "A Doppler study assesses large vessels that are patent anyway and only delays surgery",
          tone: "good",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Common fractures: immobilisation, duration and referral trigger",
      caption:
        "Use a back slab acutely - swelling peaks at 48-72 hours and a circumferential cast applied on day one becomes a tourniquet.",
      columns: ["Fracture", "Immobilisation", "Duration", "Refer if"],
      rows: [
        [
          "Colles (distal radius)",
          "Below-elbow dorsal back slab, then cast in slight flexion and ulnar deviation",
          "6 weeks",
          "Intra-articular, comminuted, unacceptable angulation after reduction, median nerve signs",
        ],
        [
          "Scaphoid",
          "Thumb spica (scaphoid) cast",
          "6-12 weeks",
          "Displaced, proximal pole, or persistent pain with non-union at follow-up",
        ],
        [
          "Clavicle, middle third",
          "Broad arm sling or figure-of-eight bandage",
          "3-4 weeks",
          "Open, skin tenting, neurovascular deficit, over 2 cm shortening, displaced lateral third",
        ],
        [
          "Fifth metacarpal neck (boxer)",
          "Ulnar gutter slab with the MCP joint flexed 70-90 degrees",
          "3-4 weeks",
          "Rotational deformity, over 40 degrees angulation, fight bite wound",
        ],
        [
          "Undisplaced lateral malleolus",
          "Below-knee back slab then walking cast or boot at 90 degrees",
          "6 weeks",
          "Bimalleolar, talar shift, syndesmotic widening, open injury",
        ],
        [
          "Base of fifth metatarsal (avulsion)",
          "Stiff-soled shoe or walking boot, weight-bear as tolerated",
          "4-6 weeks",
          "Jones fracture at the metaphyseal-diaphyseal junction - poor blood supply",
        ],
        [
          "Phalanx of finger",
          "Neighbour strapping with early movement",
          "2-3 weeks",
          "Rotational deformity, intra-articular, mallet with volar subluxation",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Overuse injuries: key test, first-line treatment and the trap",
      columns: ["Injury", "Key test", "First-line treatment", "The trap"],
      rows: [
        [
          "Lateral epicondylitis",
          "Pain on resisted wrist and middle finger extension (Maudsley)",
          "Eccentric wrist extensor programme, counterforce brace, topical NSAID",
          "Repeated corticosteroid injections - worse outcomes at 6-12 months",
        ],
        [
          "Achilles tendinopathy",
          "Thickened tender midportion with morning stiffness",
          "Eccentric heel-drop programme over 12 weeks",
          "Never inject corticosteroid; beware fluoroquinolones",
        ],
        [
          "Rotator cuff or subacromial pain",
          "Painful arc 60-120 degrees, Hawkins-Kennedy, Neer",
          "Graded cuff and scapular stabiliser exercise for at least 12 weeks",
          "Early MRI and early surgery for uncomplicated subacromial pain",
        ],
        [
          "Plantar fasciitis",
          "Tenderness at the medial calcaneal tubercle, positive windlass test",
          "Plantar fascia and calf stretching, silicone heel cup, weight loss, night splints",
          "Missing bilateral heel pain in a young man - spondyloarthritis with enthesitis",
        ],
        [
          "Tibial stress fracture",
          "Focal tenderness over 2-3 cm, night pain, painful hop test",
          "Non-weight-bearing or boot, MRI to confirm, graded return",
          "Relying on a radiograph, which stays normal for 2-6 weeks",
        ],
      ],
    },
  ],
};

export default diagrams;
