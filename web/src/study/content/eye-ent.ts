import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "eye-ent-red-eye",
  title: "The red eye: telling the five causes apart at the bedside",
  oneLiner:
    "A red eye is separated at the bedside into the five classical causes - conjunctivitis, keratitis, anterior uveitis, acute angle-closure glaucoma and scleritis - by four findings alone: visual acuity, the pattern of redness, the cornea after fluorescein, and the pupil, with digital tension added when the eye is painful.",
  frequency: "core",
  keywords: [
    "red eye",
    "ciliary injection",
    "circumcorneal congestion",
    "conjunctivitis",
    "corneal ulcer",
    "keratitis",
    "anterior uveitis",
    "iritis",
    "acute angle closure glaucoma",
    "scleritis",
    "episcleritis",
    "fluorescein staining",
    "hypopyon",
    "subconjunctival haemorrhage",
    "topical steroid",
    "dendritic ulcer",
  ],
  sections: [
    {
      heading: "What a red eye is, and the five diagnoses to separate",
      points: [
        "**Definition:** a red eye is visible dilatation of conjunctival, episcleral or ciliary vessels; the task in family practice is not to name the organism but to decide whether the eye is sight-threatening and needs referral today.",
        "The five classical causes to separate are **conjunctivitis, keratitis (corneal ulcer), acute anterior uveitis, acute angle-closure glaucoma and scleritis**; episcleritis and subconjunctival haemorrhage are the two benign impostors that must not be over-treated.",
        "Roughly **80% of red eyes seen in general practice are conjunctivitis**, but the remaining fifth contains everything that blinds, so the examination sequence is designed to exclude the dangerous four before accepting the common one.",
        "The single most useful discriminator is **visual acuity**: conjunctivitis, episcleritis and subconjunctival haemorrhage do not reduce vision, while keratitis, uveitis and angle closure do.",
        "The second most useful is the **pattern of redness**: conjunctival injection is superficial, brightest in the fornices, blanches with a topical vasoconstrictor and moves with the conjunctiva; **ciliary (circumcorneal) injection** is deep, violaceous, maximal at the limbus and does not move - it means the cornea, iris or ciliary body is inflamed.",
        "A red eye with **pain, photophobia and reduced vision is a referral until proved otherwise**; a red eye with grittiness, discharge and normal vision can be treated in the clinic.",
      ],
    },
    {
      heading: "The history that does most of the work",
      points: [
        "Ask five questions: Is the vision blurred? Is there true pain or only grittiness? Is there discharge, and is it watery, mucoid or purulent? Is there photophobia? Is one eye or both involved, and was it sequential?",
        "**Discharge type:** purulent and sticky lids in the morning suggests bacterial conjunctivitis; watery with a preauricular node suggests adenoviral conjunctivitis; stringy mucoid with itching suggests allergic disease.",
        "**Contact lens wear, a corneal injury with vegetable matter, or recent use of a steroid drop** turns a red eye into a suspected microbial or fungal keratitis, which is the commonest cause of unilateral corneal blindness in rural India.",
        "**Haloes around lights with headache, nausea and vomiting** in a middle-aged or elderly hypermetrope, often after a dark cinema hall or after an anticholinergic, is acute angle-closure glaucoma until proved otherwise; the patient may be admitted to a medical ward as a case of vomiting and the eye missed.",
        "Ask for **backache, joint pain, urethral discharge, psoriasis, tuberculosis contact, oral or genital ulcers**: recurrent anterior uveitis in India is commonly HLA-B27 associated, tubercular or idiopathic, and this history changes the workup.",
        "A boring pain that **wakes the patient at night and is worse on eye movement** with a deep violaceous redness is scleritis, and half of these have an underlying systemic disease, usually rheumatoid arthritis or a vasculitis.",
        "Sudden painless bright red patch with normal vision in a patient who coughed, strained or is on an anticoagulant is a **subconjunctival haemorrhage**: check the blood pressure, reassure, and expect clearance in 10-14 days.",
      ],
    },
    {
      heading: "The bedside examination sequence",
      points: [
        "**Record visual acuity in both eyes before touching the eye** - Snellen at 6 metres, with pinhole if reduced. This is the one step that examiners look for and the one step that busy clinics skip.",
        "Inspect with a torch from the side and then straight on: lids and lashes, the pattern of conjunctival redness, corneal clarity and light reflex, anterior chamber depth and contents, pupil size, shape and reaction.",
        "**Evert the upper lid** in every red eye with a foreign body sensation - a subtarsal foreign body and vernal cobblestone papillae are both missed otherwise.",
        "**Stain with fluorescein and look with a blue light:** any staining means an epithelial defect. A branching dendrite is herpes simplex keratitis, a round white infiltrate with an overlying defect is a bacterial or fungal ulcer, and a linear vertical stain means a retained subtarsal foreign body.",
        "**Digital tonometry** with both index fingers through the closed upper lid, comparing the two eyes: a stony hard globe with a hazy cornea and a mid-dilated non-reacting pupil is acute angle closure.",
        "Look for a **relative afferent pupillary defect** with the swinging torch test, and palpate for a tender preauricular node, which is almost pathognomonic of adenoviral conjunctivitis.",
        "A drop of **2.5% phenylephrine blanches episcleral vessels but not scleral vessels**, which is the bedside test that separates episcleritis from scleritis when a slit lamp is not available.",
      ],
    },
    {
      heading: "The dangerous four in detail",
      points: [
        "**Microbial keratitis:** severe pain, watering, photophobia, reduced vision, ciliary injection, a white corneal infiltrate that stains with fluorescein, with or without hypopyon. Bacterial ulcers progress in hours; fungal ulcers follow vegetable trauma, have feathery margins and satellite lesions, and are common in agricultural India. Refer the same day for scraping and smear before any drop is started.",
        "**Acute anterior uveitis:** aching pain, marked photophobia, mildly reduced vision, ciliary injection, a small and often irregular pupil from posterior synechiae, keratic precipitates and cells in the anterior chamber, and a hypopyon in severe cases. Treatment is a topical steroid plus a cycloplegic, **but only after the cornea has been stained and keratitis excluded**.",
        "**Acute angle-closure glaucoma:** severe unilateral pain with headache, nausea and vomiting, haloes, vision often down to counting fingers, a hazy oedematous cornea, a shallow anterior chamber, a **vertically oval mid-dilated pupil fixed to light**, and an intraocular pressure typically above 40 mmHg. This is the true ophthalmic emergency of general practice.",
        "**Scleritis:** severe boring pain radiating to the brow and jaw, tenderness on palpation through the lid, a deep violaceous non-blanching redness, and possible scleral thinning. Necrotising scleritis threatens perforation and always needs systemic immunosuppression, never a topical drop alone.",
        "The fifth cause, **conjunctivitis**, is a diagnosis of exclusion in a painful eye: it should not cause true pain, reduced acuity, photophobia, corneal staining or a ciliary flush, and if any of those are present the diagnosis is wrong.",
        "**Endophthalmitis** must be added to this list in any red painful eye within six weeks of intraocular surgery or a penetrating injury - pain, falling vision, lid oedema, hypopyon and loss of the red reflex demand referral within hours.",
      ],
    },
    {
      heading: "What is treated in the clinic and what leaves the clinic",
      points: [
        "Treated in the clinic: bacterial and viral conjunctivitis, allergic conjunctivitis, subconjunctival haemorrhage, simple episcleritis, a superficial corneal abrasion, and a removable superficial foreign body.",
        "**Referred the same day:** any red eye with reduced vision, true pain, photophobia, corneal opacity or fluorescein staining beyond a simple abrasion, an abnormal pupil, a hard globe, a hypopyon, a contact lens related ulcer, or a red eye after intraocular surgery.",
        "For a corneal abrasion: **chloramphenicol 1% eye ointment four times daily for 5 days**, oral analgesia, a cycloplegic such as homatropine 2% twice daily if there is spasm, and review at 48 hours. Do not pad an eye that has any discharge, and do not pad a contact lens wearer at all.",
        "**Never give a topical anaesthetic for the patient to take home** - proparacaine abolishes pain but is epithelium-toxic, delays healing and has caused corneal melts; use it only to allow examination.",
        "**Never start a topical steroid in an undiagnosed red eye.** A steroid on a herpetic dendrite produces a geographic ulcer and can perforate the cornea; a steroid on a fungal ulcer accelerates it; a steroid used long term causes steroid-induced glaucoma and posterior subcapsular cataract.",
        "Do not dilate the pupil of a patient with a shallow anterior chamber or an eye you suspect of angle closure, and warn every patient with a red eye that **worsening pain or falling vision means returning the same day**, not at the next appointment.",
      ],
    },
    {
      heading: "First aid for acute angle closure while referral is arranged",
      points: [
        "Lay the patient supine - this lets the lens fall back and may deepen the angle - and give analgesia and an antiemetic, because vomiting raises intraocular pressure further.",
        "**Acetazolamide 500 mg orally or intravenously stat**, provided there is no sulpha allergy, sickle disease or significant renal impairment, then 250 mg six-hourly.",
        "**Timolol 0.5% one drop**, avoided in asthma, chronic obstructive pulmonary disease, bradycardia and heart block, plus **brimonidine 0.2%** and a topical steroid such as prednisolone acetate 1% to settle inflammation.",
        "**Pilocarpine 2% one drop every 15 minutes for two doses, but only once the pressure has begun to fall** - the iris sphincter is ischaemic and unresponsive above about 40 to 50 mmHg, and early pilocarpine can worsen the block.",
        "**Mannitol 20% intravenously 1 to 2 g/kg over 30 to 45 minutes** if the pressure remains very high, with caution in cardiac failure and renal disease.",
        "The definitive treatment is **laser peripheral iridotomy, and it must be done prophylactically in the fellow eye**, which carries a 40 to 80% risk of a similar attack; say this sentence in the viva.",
      ],
    },
  ],
  tables: [
    {
      heading: "Differentiating the red eye at the bedside",
      columns: ["Feature", "Conjunctivitis", "Keratitis / corneal ulcer", "Acute anterior uveitis", "Acute angle-closure glaucoma"],
      rows: [
        ["Pain", "Grittiness, burning; no true pain", "Severe, sharp, with watering", "Deep ache, worse on accommodation", "Very severe, with headache and vomiting"],
        ["Vision", "Normal (blurs only with discharge)", "Reduced", "Mildly to moderately reduced", "Markedly reduced, haloes around lights"],
        ["Discharge", "Purulent, mucoid or watery", "Watery, reflex", "Watery, none", "None"],
        ["Redness", "Superficial, diffuse, maximal in fornices", "Ciliary (circumcorneal)", "Ciliary (circumcorneal)", "Mixed, with congested episcleral veins"],
        ["Cornea", "Clear", "Opacity or infiltrate, stains with fluorescein", "Clear, with keratic precipitates on endothelium", "Hazy and oedematous"],
        ["Anterior chamber", "Normal depth, quiet", "May show hypopyon", "Cells, flare, sometimes hypopyon", "Very shallow"],
        ["Pupil", "Normal size and reaction", "Normal or small", "Small, irregular, sluggish (synechiae)", "Mid-dilated, vertically oval, fixed"],
        ["Digital tension", "Normal", "Normal", "Normal or low (may be raised)", "Stony hard"],
        ["Photophobia", "Mild", "Marked", "Marked", "Moderate"],
        ["Immediate action", "Treat in the clinic", "Refer same day", "Refer same day", "Treat and refer within hours"],
      ],
    },
    {
      heading: "Episcleritis versus scleritis",
      columns: ["Feature", "Episcleritis", "Scleritis"],
      rows: [
        ["Pain", "Mild discomfort or none", "Severe boring pain, wakes the patient, radiates to brow and jaw"],
        ["Colour", "Bright salmon pink, often sectoral", "Deep violaceous or bluish, diffuse or nodular"],
        ["2.5% phenylephrine", "Vessels blanch", "Vessels do not blanch"],
        ["Tenderness on palpation", "Absent or slight", "Marked"],
        ["Systemic association", "Usually none", "Rheumatoid arthritis, granulomatosis with polyangiitis, relapsing polychondritis, tuberculosis"],
        ["Treatment", "Lubricants, oral NSAID; self-limiting in 1-2 weeks", "Systemic NSAID or steroid, immunosuppression; ophthalmology and rheumatology referral"],
        ["Threat to sight", "Negligible", "Scleral thinning, perforation, keratitis, glaucoma"],
      ],
    },
    {
      heading: "The impostors that do not need antibiotics",
      columns: ["Presentation", "What it is", "What to do"],
      rows: [
        ["Painless bright red sheet, vision normal, no discharge", "Subconjunctival haemorrhage", "Check BP and anticoagulant use; reassure; resolves in 10-14 days"],
        ["Sectoral pink patch, mild irritation, vision normal", "Episcleritis", "Lubricants, oral NSAID, review in a week"],
        ["Red irritable eyes, itching, stringy discharge, both eyes, seasonal", "Allergic conjunctivitis", "Cold compress, olopatadine 0.1% twice daily; no steroid without a slit lamp"],
        ["Red eye with a fleshy triangular growth from the nasal limbus", "Pterygium with inflammation", "Sunglasses, lubricants; refer for excision if it threatens the visual axis"],
        ["Localised tender lid lump with lash involvement", "Hordeolum externum (stye)", "Hot compresses, lid hygiene, topical antibiotic ointment; incise only if pointing"],
      ],
    },
  ],
  redFlags: [
    "Red eye with reduced visual acuity - keratitis, uveitis, angle closure or endophthalmitis; refer the same day.",
    "Severe eye pain with headache, nausea, vomiting, haloes and a stony hard globe - acute angle-closure glaucoma; start treatment and refer within hours.",
    "Corneal opacity, white infiltrate or fluorescein staining beyond a linear abrasion - microbial keratitis; refer before starting any drop so a scraping can be taken.",
    "Red painful eye in a contact lens wearer - Pseudomonas or Acanthamoeba keratitis until proved otherwise; remove the lens, keep it for culture, refer today.",
    "Hypopyon (a fluid level of pus in the anterior chamber) in any red eye - refer immediately.",
    "Red painful eye with falling vision within six weeks of cataract or other intraocular surgery - endophthalmitis; refer within hours, not days.",
    "Red eye with a small irregular pupil and photophobia - anterior uveitis; needs slit lamp confirmation before any steroid is given.",
    "Any red eye after a high-velocity injury, hammering or chiselling - suspect an intraocular foreign body; shield the eye, order an orbital radiograph or CT, and refer.",
  ],
  pearls: [
    "Record visual acuity in every red eye before you touch it - a normal acuity almost excludes the sight-threatening causes, and a reduced acuity almost guarantees one.",
    "Conjunctival injection is brightest in the fornices and blanches; ciliary injection is brightest at the limbus and does not - that one sentence separates the safe from the dangerous red eye.",
    "Photophobia in a red eye means the cornea or the iris is involved; simple conjunctivitis does not cause it.",
    "A steroid drop in an undiagnosed red eye is the commonest avoidable cause of corneal blindness in Indian practice, because it turns a dendritic ulcer into a geographic one.",
    "Never send a patient home with a topical anaesthetic; it abolishes the warning symptom and dissolves the epithelium.",
    "Vomiting with a unilateral headache in an elderly patient - always look at the pupil before diagnosing gastritis or migraine.",
    "Do not pad an eye that is discharging, and never pad a contact lens wearer; both convert an abrasion into an ulcer.",
    "In acute angle closure, treat the fellow eye too - prophylactic laser iridotomy converts a 40 to 80% risk of a second attack into almost none.",
  ],
  theory: [
    {
      id: "eye-ent-red-eye-t1",
      paper: "III",
      kind: "differentiate",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 55-year-old man presents to your clinic with a painful red right eye of one day. Discuss the differential diagnosis of an acute red eye and outline how you would distinguish the causes clinically and manage them at a primary care level.",
      openingLines: [
        "An acute red eye is dilatation of conjunctival, episcleral or ciliary vessels of less than two weeks duration; the primary care task is to identify the minority that threatens sight and refer them the same day.",
        "The five conditions that must be separated are conjunctivitis, microbial keratitis, acute anterior uveitis, acute angle-closure glaucoma and scleritis, with episcleritis and subconjunctival haemorrhage as benign mimics.",
      ],
      answer: [
        {
          heading: "1. Focused history",
          points: [
            "Vision: blurring points to keratitis, uveitis or angle closure; normal vision points to conjunctivitis, episcleritis or subconjunctival haemorrhage.",
            "Pain: grittiness suits conjunctivitis, sharp pain with watering suits keratitis, deep ache with photophobia suits uveitis, and very severe pain with headache and vomiting suits angle closure.",
            "Discharge: purulent suggests bacterial conjunctivitis, watery with a preauricular node suggests adenoviral disease, stringy and itchy suggests allergy.",
            "Context: contact lens wear, vegetable matter injury, prior steroid drops, recent intraocular surgery, and a systemic history of ankylosing spondylitis, rheumatoid arthritis, tuberculosis or diabetes.",
          ],
        },
        {
          heading: "2. Examination in sequence",
          points: [
            "Visual acuity in both eyes with a Snellen chart, with pinhole if reduced - recorded before any drop is instilled.",
            "Torch examination for the pattern of redness (superficial and fornix-based versus ciliary and limbus-based), corneal clarity, anterior chamber depth and contents, and pupil size, shape and reaction.",
            "Eversion of the upper lid for a subtarsal foreign body or giant papillae.",
            "Fluorescein staining with a blue light for epithelial defects - a dendrite indicates herpes simplex, a white infiltrate with a defect indicates microbial keratitis.",
            "Digital tonometry comparing the two globes, and a swinging torch test for a relative afferent pupillary defect.",
          ],
        },
        {
          heading: "3. Differentiating features (present as a table)",
          points: [
            "Conjunctivitis: normal vision, superficial diffuse redness, discharge, normal cornea, normal pupil, normal tension.",
            "Keratitis: reduced vision, ciliary injection, corneal infiltrate staining with fluorescein, possible hypopyon, normal tension.",
            "Anterior uveitis: reduced vision, ciliary injection, keratic precipitates, small irregular pupil, cells in the anterior chamber.",
            "Acute angle-closure glaucoma: markedly reduced vision with haloes, hazy cornea, shallow chamber, mid-dilated fixed vertically oval pupil, stony hard globe, systemic upset.",
            "Scleritis: severe boring nocturnal pain, deep violaceous non-blanching redness, marked tenderness, systemic disease association.",
          ],
        },
        {
          heading: "4. Management at primary care level",
          points: [
            "Bacterial conjunctivitis: lid hygiene and chloramphenicol 1% ointment or moxifloxacin 0.5% drops four times daily for 5 to 7 days; viral conjunctivitis needs only hygiene, cold compresses and lubricants.",
            "Corneal abrasion: chloramphenicol ointment, oral analgesia, cycloplegic for spasm, review at 48 hours; no home anaesthetic and no pad if there is discharge.",
            "Suspected keratitis, uveitis, scleritis or endophthalmitis: refer the same day without starting a steroid, so that corneal scraping and slit lamp examination remain interpretable.",
            "Acute angle closure: supine position, analgesia and antiemetic, acetazolamide 500 mg stat, timolol 0.5% and brimonidine 0.2% drops, pilocarpine 2% once pressure begins to fall, mannitol 20% intravenously if needed, then urgent referral for laser peripheral iridotomy in both eyes.",
            "Counsel every patient that increasing pain or falling vision means returning the same day.",
          ],
        },
        {
          heading: "5. Pitfalls to state explicitly",
          points: [
            "Topical steroids in an undiagnosed red eye cause geographic herpetic ulcers, accelerate fungal keratitis and cause steroid glaucoma and cataract.",
            "Topical anaesthetics must never be dispensed for home use.",
            "Missing the pupil in an elderly vomiting patient is the classic way acute angle closure is admitted to a medical ward and blinds.",
          ],
        },
      ],
      mustDraw: [
        "The bedside differentiation table with rows for pain, vision, discharge, pattern of redness, cornea, pupil and digital tension against the four main causes.",
        "A simple line diagram contrasting superficial conjunctival injection (maximal in the fornix) with ciliary injection (maximal at the limbus).",
      ],
      markSplit: [
        { part: "List of causes and definition", marks: 2 },
        { part: "History and examination sequence", marks: 2 },
        { part: "Differentiating table", marks: 3 },
        { part: "Primary care management and referral criteria", marks: 2 },
        { part: "Pitfalls including steroid and anaesthetic misuse", marks: 1 },
      ],
      keywords: ["red eye", "ciliary injection", "fluorescein", "angle closure", "referral criteria"],
    },
    {
      id: "eye-ent-red-eye-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on acute angle-closure glaucoma: clinical features, immediate management and definitive treatment.",
      openingLines: [
        "Acute angle-closure glaucoma is a sudden rise in intraocular pressure caused by apposition of the peripheral iris to the trabecular meshwork, usually by pupillary block in a hypermetropic eye with a shallow anterior chamber.",
        "It is an ophthalmic emergency: irreversible optic nerve damage begins within hours, so treatment starts in the clinic and referral is measured in hours.",
      ],
      answer: [
        {
          heading: "Predisposing factors and triggers",
          points: [
            "Hypermetropia with a short axial length, a shallow anterior chamber, an enlarging lens with age, female sex, East and South Asian ethnicity, and a positive family history.",
            "Triggers: dim illumination such as a cinema hall, prolonged near work, emotional stress, and drugs that dilate the pupil - anticholinergics, tricyclic antidepressants, nebulised ipratropium, antihistamines, and mydriatic drops.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Symptoms: severe unilateral eye pain and headache, coloured haloes around lights, rapidly failing vision, nausea and vomiting, and prostration.",
            "Signs: lid oedema, mixed congestion, a hazy oedematous cornea, a very shallow anterior chamber, a vertically oval mid-dilated fixed pupil, a stony hard globe on digital tonometry, and an intraocular pressure usually above 40 mmHg.",
            "The fellow eye characteristically shows a shallow anterior chamber and a narrow angle, which confirms the diagnosis.",
          ],
        },
        {
          heading: "Immediate management",
          points: [
            "Position supine, treat pain and vomiting, and do not delay drugs for imaging or referral.",
            "Acetazolamide 500 mg orally or intravenously stat then 250 mg six-hourly, with caution in sulpha allergy and renal disease.",
            "Timolol 0.5% one drop (avoid in asthma and heart block), brimonidine 0.2% one drop, and prednisolone acetate 1% for the inflammation.",
            "Pilocarpine 2% every 15 minutes for two doses only once the pressure begins to fall, because the ischaemic sphincter does not respond at very high pressures.",
            "Mannitol 20% intravenously 1 to 2 g/kg over 30 to 45 minutes if the pressure remains uncontrolled, avoiding it in cardiac failure and renal impairment.",
          ],
        },
        {
          heading: "Definitive treatment and follow-up",
          points: [
            "Laser peripheral iridotomy once the cornea clears - this bypasses the pupillary block and is the definitive cure.",
            "Prophylactic laser peripheral iridotomy to the fellow eye, which otherwise carries a 40 to 80% risk of an attack.",
            "Lens extraction is increasingly used where cataract coexists; trabeculectomy is needed if extensive peripheral anterior synechiae have already formed.",
            "Long-term follow-up for chronic angle closure glaucoma with disc, pressure and field assessment, and a card warning against mydriatic drugs.",
          ],
        },
      ],
      mustDraw: ["A labelled diagram of pupillary block showing iris-lens apposition, forward bowing of the peripheral iris and closure of the angle, with the site of a peripheral iridotomy marked."],
      markSplit: [
        { part: "Definition and predisposing factors", marks: 1 },
        { part: "Clinical features", marks: 1.5 },
        { part: "Immediate medical management with doses", marks: 1.5 },
        { part: "Definitive treatment including fellow eye", marks: 1 },
      ],
      keywords: ["angle closure", "pupillary block", "acetazolamide", "laser peripheral iridotomy", "mannitol"],
    },
    {
      id: "eye-ent-red-eye-t3",
      paper: "III",
      kind: "enumerate",
      marks: 5,
      minutes: 8,
      frequency: "common",
      question: "Enumerate the causes of a red eye and list the danger signs that mandate same-day referral to an ophthalmologist.",
      openingLines: [
        "A red eye may arise from the lids and adnexa, the conjunctiva, the cornea, the uveal tract, the sclera or from a raised intraocular pressure.",
        "The referral decision rests on a short list of danger signs rather than on the exact diagnosis.",
      ],
      answer: [
        {
          heading: "Causes by anatomical layer",
          points: [
            "Lids and adnexa: blepharitis, hordeolum, chalazion with inflammation, dacryocystitis, preseptal and orbital cellulitis, trichiasis and entropion.",
            "Conjunctiva: bacterial, viral, allergic and chlamydial conjunctivitis, ophthalmia neonatorum, trachoma, subconjunctival haemorrhage, pterygium and pinguecula, chemical irritation.",
            "Cornea: bacterial, fungal, viral and Acanthamoeba keratitis, corneal abrasion and foreign body, exposure keratopathy, contact lens related keratitis.",
            "Uvea and sclera: acute anterior uveitis, episcleritis, scleritis, endophthalmitis.",
            "Pressure related: acute angle-closure glaucoma; also trauma-related causes such as hyphaema, open globe injury and chemical burn.",
          ],
        },
        {
          heading: "Danger signs requiring same-day referral",
          points: [
            "Reduced visual acuity of any degree.",
            "True pain rather than grittiness, or marked photophobia.",
            "Ciliary or circumcorneal injection.",
            "Corneal opacity, infiltrate or fluorescein staining other than a simple abrasion.",
            "An abnormal pupil - small and irregular, or mid-dilated and fixed.",
            "Hypopyon or hyphaema, a shallow anterior chamber, or a stony hard globe.",
            "Contact lens wear, recent intraocular surgery, penetrating or chemical injury, or a red eye in a neonate.",
          ],
        },
      ],
      markSplit: [
        { part: "Causes grouped by anatomical layer", marks: 3 },
        { part: "Danger signs", marks: 2 },
      ],
      keywords: ["red eye causes", "danger signs", "referral", "hypopyon", "ciliary injection"],
    },
  ],
  mcqs: [
    {
      id: "eye-ent-red-eye-q1",
      stem: "A 62-year-old woman is brought at 10 pm with severe pain in the right eye, vomiting and a right-sided headache that began after an evening at a cinema. Vision in that eye is counting fingers at 1 metre. The cornea looks steamy, the pupil is mid-dilated and oval and does not react, and the globe feels much harder than the left. What is the most appropriate immediate action?",
      options: [
        "Instil pilocarpine 2% every 15 minutes and review in the morning",
        "Give acetazolamide 500 mg, timolol 0.5% and brimonidine drops, treat the vomiting, and refer for laser iridotomy the same night",
        "Start prednisolone acetate 1% drops hourly and refer routinely",
        "Prescribe an oral analgesic and an antiemetic and refer to a physician for the headache",
        "Instil atropine 1% to relieve ciliary spasm and refer in 24 hours",
      ],
      answer: 1,
      explanation:
        "This is acute angle-closure glaucoma, and pressure must be lowered immediately with a systemic carbonic anhydrase inhibitor plus aqueous-suppressant drops while urgent referral for laser peripheral iridotomy is arranged. Pilocarpine alone is not enough and is ineffective above about 40 to 50 mmHg because the iris sphincter is ischaemic, so giving it first and waiting until morning loses the nerve. A steroid alone treats the inflammation but not the pressure. Treating this as a systemic headache is the classic error that leads to a blind eye. Atropine dilates the pupil further and would worsen the block, and is absolutely contraindicated.",
      difficulty: "easy",
    },
    {
      id: "eye-ent-red-eye-q2",
      stem: "A 24-year-old software engineer who wears soft contact lenses has a painful watering red left eye for two days. Vision is 6/24, there is circumcorneal injection, and a 2 mm white infiltrate stains with fluorescein. What should you do first?",
      options: [
        "Start prednisolone acetate 1% drops to reduce inflammation",
        "Pad the eye firmly and give oral analgesia",
        "Remove and retain the lens, start no steroid, and refer the same day for corneal scraping",
        "Prescribe a topical anaesthetic to use four times daily until the pain settles",
        "Reassure and review in one week",
      ],
      answer: 2,
      explanation:
        "A contact lens wearer with a painful red eye, reduced vision and a staining corneal infiltrate has microbial keratitis, most often Pseudomonas, and needs same-day referral for scraping, smear and culture before any drop clouds the picture. A steroid accelerates infection and is contraindicated until the organism is known and the epithelium is healing. Padding a contact lens related ulcer creates a warm closed culture chamber and is specifically forbidden. Home topical anaesthetic is toxic to the epithelium and abolishes the warning symptom, and delay of a week can perforate the cornea.",
      difficulty: "easy",
    },
    {
      id: "eye-ent-red-eye-q3",
      stem: "A 30-year-old man with low backache for two years has a red, aching, photophobic right eye. Vision is 6/12, the redness is deepest at the limbus, the pupil is small and irregular, and fluorescein shows no staining. Which single feature most strongly supports anterior uveitis rather than conjunctivitis?",
      options: [
        "The presence of watering",
        "The small irregular pupil with circumcorneal injection",
        "The history of backache",
        "Involvement of one eye only",
        "Absence of purulent discharge",
      ],
      answer: 1,
      explanation:
        "Posterior synechiae make the pupil small and irregular, and ciliary injection localises the inflammation to the iris and ciliary body, so together they are the decisive physical signs of anterior uveitis. Watering occurs in many red eyes and is non-specific. The backache raises the pre-test probability of HLA-B27 associated disease but is history, not a discriminating sign, and by itself would not confirm the diagnosis. Unilateral involvement and an absence of purulent discharge merely make bacterial conjunctivitis less likely without positively identifying uveitis.",
      difficulty: "moderate",
    },
    {
      id: "eye-ent-red-eye-q4",
      stem: "A 45-year-old farmer scratched his right eye with a paddy leaf ten days ago and was given a steroid-antibiotic combination drop by a pharmacist. He now has severe pain and vision of hand movements, with a dry-looking greyish corneal infiltrate that has feathery edges and satellite lesions. What is the most likely diagnosis?",
      options: [
        "Herpes simplex geographic ulcer",
        "Fungal keratitis",
        "Acanthamoeba keratitis",
        "Marginal keratitis of staphylococcal hypersensitivity",
        "Neurotrophic ulcer",
      ],
      answer: 1,
      explanation:
        "Vegetable matter injury, a dry greyish infiltrate with feathery margins and satellite lesions, and worsening after topical steroids are the textbook picture of fungal keratitis, which Fusarium and Aspergillus cause commonly in agricultural India. A geographic herpetic ulcer follows steroid use too but has a scalloped, dendrite-derived shape rather than satellites and feathery edges. Acanthamoeba is a contact lens and contaminated water disease with pain out of proportion and a ring infiltrate. Marginal keratitis is peripheral, small and self-limiting, and a neurotrophic ulcer is painless because the cornea is anaesthetic.",
      difficulty: "moderate",
    },
    {
      id: "eye-ent-red-eye-q5",
      stem: "A 40-year-old woman with rheumatoid arthritis has a red left eye with a deep boring pain that wakes her at night. The redness is violaceous, the area is exquisitely tender through the lid, and instillation of 2.5% phenylephrine does not blanch the vessels. What is the diagnosis?",
      options: [
        "Episcleritis",
        "Scleritis",
        "Conjunctivitis",
        "Subconjunctival haemorrhage",
        "Phlyctenular conjunctivitis",
      ],
      answer: 1,
      explanation:
        "Failure of phenylephrine to blanch the vessels localises the inflammation to the deep scleral plexus, and nocturnal boring pain with marked tenderness in a patient with rheumatoid arthritis completes the picture of scleritis, which requires systemic anti-inflammatory or immunosuppressive treatment. Episcleritis blanches with phenylephrine, is minimally tender and is usually painless. Conjunctivitis produces discharge with superficial injection that also blanches. Subconjunctival haemorrhage is a painless flat sheet of blood, and a phlycten is a small raised nodule at the limbus, usually in a malnourished child.",
      difficulty: "moderate",
    },
    {
      id: "eye-ent-red-eye-q6",
      stem: "A 35-year-old man had uneventful cataract surgery in the left eye four days ago. He now returns with increasing pain, lid swelling and vision that has fallen from 6/9 to hand movements. There is marked conjunctival congestion and a 2 mm hypopyon. What is the correct action?",
      options: [
        "Increase the frequency of the postoperative steroid drop and review in two days",
        "Start oral ciprofloxacin and review in the outpatient clinic next week",
        "Refer immediately to the operating ophthalmologist for suspected endophthalmitis",
        "Pad the eye and give an oral analgesic",
        "Instil atropine and reassure that this is expected postoperative inflammation",
      ],
      answer: 2,
      explanation:
        "Increasing pain with falling vision and a hypopyon within six weeks of intraocular surgery is acute postoperative endophthalmitis, which requires vitreous tap and intravitreal antibiotics within hours if the eye is to be saved. Intensifying the steroid without antimicrobial cover allows the infection to progress. Oral ciprofloxacin achieves poor intraocular levels and a week of delay is sight-destroying. Padding and reassurance treat a diagnosis of normal postoperative inflammation, which never causes vision to fall with worsening pain.",
      difficulty: "easy",
    },
    {
      id: "eye-ent-red-eye-q7",
      stem: "Which single bedside finding best separates the sight-threatening causes of a red eye from the benign causes in a primary care clinic without a slit lamp?",
      options: [
        "The colour of the discharge",
        "The presence of a preauricular lymph node",
        "The visual acuity",
        "Whether one or both eyes are involved",
        "The duration of symptoms",
      ],
      answer: 2,
      explanation:
        "Visual acuity is the single most discriminating bedside measurement: it is normal in conjunctivitis, episcleritis and subconjunctival haemorrhage and reduced in keratitis, uveitis, angle closure and endophthalmitis, which is why it must be recorded before any drop is instilled. Discharge colour is a poor guide even to bacterial versus viral conjunctivitis. A preauricular node suggests adenoviral conjunctivitis but is present in only a proportion of cases. Laterality and duration influence probability but do not identify the eye at risk.",
      difficulty: "easy",
    },
    {
      id: "eye-ent-red-eye-q8",
      stem: "A 28-year-old man has a red painful right eye with watering and photophobia for three days. Fluorescein staining under a blue light shows a branching linear lesion with terminal bulbs. Which treatment is absolutely contraindicated?",
      options: [
        "Acyclovir 3% eye ointment five times daily",
        "Topical prednisolone acetate 1%",
        "Oral acyclovir 400 mg five times daily",
        "Cycloplegic drops for ciliary spasm",
        "Preservative-free lubricants",
      ],
      answer: 1,
      explanation:
        "A dendritic ulcer with terminal bulbs is herpes simplex epithelial keratitis, and an unopposed topical steroid enhances viral replication, converting the dendrite into a geographic ulcer that can scar or perforate the cornea. Topical acyclovir ointment is the standard treatment and oral acyclovir is an acceptable alternative, particularly in children and in those who cannot use ointment. A cycloplegic relieves the associated ciliary spasm safely, and lubricants are supportive and harmless.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "eye-ent-red-eye-c1",
      front: "The five classical causes of a red eye that must be separated.",
      back: "Conjunctivitis, microbial keratitis, acute anterior uveitis, acute angle-closure glaucoma and scleritis. Episcleritis and subconjunctival haemorrhage are the benign mimics.",
    },
    {
      id: "eye-ent-red-eye-c2",
      front: "Conjunctival versus ciliary injection.",
      back: "Conjunctival: superficial, maximal in the fornices, moves with the conjunctiva, blanches with a vasoconstrictor. Ciliary: deep violaceous, maximal at the limbus, does not move or blanch - means cornea, iris or ciliary body disease.",
    },
    {
      id: "eye-ent-red-eye-c3",
      front: "Pupil signs in the four main causes of a red eye.",
      back: "Conjunctivitis normal; keratitis normal or small; uveitis small and irregular from synechiae; acute angle closure mid-dilated, vertically oval and fixed.",
    },
    {
      id: "eye-ent-red-eye-c4",
      front: "First-line drugs in acute angle-closure glaucoma.",
      back: "Acetazolamide 500 mg stat, timolol 0.5%, brimonidine 0.2%, topical steroid; pilocarpine 2% only once pressure starts falling; mannitol 20% 1-2 g/kg IV if uncontrolled.",
    },
    {
      id: "eye-ent-red-eye-c5",
      front: "Definitive treatment of acute angle closure, and what must be done to the other eye.",
      back: "Laser peripheral iridotomy to the affected eye once the cornea clears, plus prophylactic iridotomy to the fellow eye, which otherwise has a 40-80% risk of an attack.",
    },
    {
      id: "eye-ent-red-eye-c6",
      front: "Why is a topical steroid dangerous in an undiagnosed red eye?",
      back: "It converts a herpetic dendrite into a geographic ulcer, accelerates fungal keratitis, and with long use causes steroid-induced glaucoma and posterior subcapsular cataract.",
    },
    {
      id: "eye-ent-red-eye-c7",
      front: "Bedside test separating episcleritis from scleritis.",
      back: "2.5% phenylephrine blanches episcleral vessels but not scleral vessels; scleritis is also exquisitely tender and wakes the patient with boring pain.",
    },
    {
      id: "eye-ent-red-eye-c8",
      front: "Fluorescein pattern of herpes simplex epithelial keratitis.",
      back: "A branching dendritic ulcer with terminal bulbs; treat with acyclovir 3% eye ointment five times daily, never with an unopposed steroid.",
    },
    {
      id: "eye-ent-red-eye-c9",
      front: "Red painful eye with falling vision after cataract surgery - diagnosis and timeline?",
      back: "Acute postoperative endophthalmitis, usually within 1-6 weeks; refer within hours for vitreous tap and intravitreal antibiotics.",
    },
    {
      id: "eye-ent-red-eye-c10",
      front: "Two things you must never give a red eye patient to take home.",
      back: "A topical anaesthetic (epithelial toxicity, corneal melt, masks worsening) and an unsupervised steroid-antibiotic combination drop.",
    },
    {
      id: "eye-ent-red-eye-c11",
      front: "When is padding an eye wrong?",
      back: "When there is any discharge, in a contact lens wearer, and in suspected infective keratitis - padding converts an abrasion into an ulcer.",
    },
    {
      id: "eye-ent-red-eye-c12",
      front: "Features of fungal keratitis.",
      back: "Vegetable matter or agricultural trauma, dry greyish infiltrate with feathery margins, satellite lesions, hypopyon, worsening after topical steroids.",
    },
  ],
  references: [
    "AK Khurana, Comprehensive Ophthalmology, 8th edition, 2022 - diseases of the conjunctiva, cornea and uvea",
    "Kanski's Clinical Ophthalmology, 9th edition, 2020",
    "American Academy of Ophthalmology Preferred Practice Pattern, Conjunctivitis, 2023",
    "WHO Primary Eye Care Training Manual for the South-East Asia Region",
    "National Programme for Control of Blindness and Visual Impairment (NPCBVI) operational guidelines, MoHFW",
    "Standard Treatment Guidelines, Ophthalmology, Ministry of Health and Family Welfare, Government of India",
  ],
});
