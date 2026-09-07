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

const cases: ClinicalCase[] = [
  {
    id: "eye-ent-case-1",
    title: "Painful red eye in a 60-year-old woman with a hazy cornea and a mid-dilated pupil",
    kind: "short",
    subjectId: "eye-ent",
    opening:
      "This 60-year-old woman, whom I was asked to examine for a painful red right eye of one night's duration, has a visual acuity of counting fingers at 1 metre in the right eye and 6/9 in the left, a mixed congestion that is deepest at the limbus, a hazy steamy cornea through which iris detail is lost, a very shallow anterior chamber on oblique torch light, a vertically oval mid-dilated pupil that does not react to light, and a globe that is stony hard on digital tonometry compared with the left - findings which, with her headache, coloured haloes and vomiting, are those of acute angle-closure glaucoma of the right eye.",
    minutes: 15,
    frequency: "core",
    sections: [
      {
        heading: "How to open the presentation",
        points: [
          "Give the identifying data, the single complaint with its duration, and the visual acuity of both eyes in the first sentence, because a short case on the red eye is marked on whether the candidate measured vision before touching the eye.",
          "Say: 'This 60-year-old woman, a housewife who uses plus 3 dioptre reading glasses, developed severe pain in the right eye with headache on the same side, blurred vision with coloured rings around the lamp, and two episodes of vomiting, beginning at about 9 pm last night while she was watching television in a dark room.'",
          "Add the relevant negatives in the same breath: no discharge, no grittiness, no injury, no contact lens, no previous eye surgery, no steroid or other eye drop used, and no similar but milder episodes that settled with sleep.",
          "Then describe the eye finding by finding in the order you examined it, and name the diagnosis only after the last finding, so the examiner hears the differentiation being done rather than a label being announced.",
          "Close the opening with the state of the fellow eye - vision 6/9, a white eye, a clear cornea, a normal round reacting pupil, but a shallow anterior chamber on oblique illumination - because the fellow eye is the evidence that the angle closure is primary.",
        ],
      },
      {
        heading: "The history to elicit in two minutes",
        points: [
          "Ask about the onset and the setting: a dark room, an evening cinema, prolonged reading or sewing under poor light, emotional upset, or a drug taken that day such as an antihistamine, a tricyclic antidepressant, an antispasmodic, nebulised ipratropium, or a dilating drop used at an eye camp.",
          "Ask for the three symptoms that separate raised pressure from the other painful red eyes: coloured haloes around lights from corneal oedema, a headache that is felt in the brow and temple rather than in the eye alone, and nausea or vomiting from trigeminal-vagal stimulation.",
          "Ask about earlier warning attacks - intermittent evening blurring with haloes and aching that cleared after sleeping, because sleep produces miosis and breaks a subacute attack - which the family often recalls only when asked.",
          "Establish that she is hypermetropic: early or strong reading glasses, thick plus lenses, and small eyes on inspection; the short axial length and the enlarging lens of the seventh decade are the anatomy behind the attack.",
          "Record the systemic history that will decide the first-aid drugs: asthma or chronic obstructive pulmonary disease and heart block for timolol, sulpha allergy and renal disease for acetazolamide, and cardiac failure for mannitol, and ask whether she is diabetic before glycerol is considered.",
          "Ask whether any relative has had 'eye pressure' or a laser to the iris, because primary angle closure runs in families and the daughters will need a check.",
        ],
      },
      {
        heading: "The examination sequence to demonstrate",
        points: [
          "Measure and state the visual acuity in each eye with a Snellen chart or a near card, with pinhole, before any drop is instilled; counting fingers that does not improve with pinhole tells the examiner that the cornea or the nerve, not refraction, is at fault.",
          "Inspect with a torch from the side and from the front: lid oedema and a watering eye, a mixed conjunctival and ciliary congestion with dilated episcleral veins, and a cornea that has lost its bright surface reflex and looks steamy or ground-glass, with the iris pattern blurred behind it.",
          "Judge the depth of the anterior chamber with the oblique torch test - a light shone from the temporal side parallel to the iris throws the nasal half of the iris into shadow when the chamber is shallow - and then compare it with the fellow eye, which is the finding that makes the diagnosis primary.",
          "Describe the pupil in three words - mid-dilated, vertically oval, fixed - and explain that the sphincter is ischaemic at pressures above 60 mmHg, so it neither constricts to light nor to the consensual reflex.",
          "Perform digital tonometry with both index fingers through the closed upper lid while the patient looks down, comparing the two eyes, and say 'stony hard' only if the globe does not indent; then say that Schiotz or applanation tonometry would be done to record the actual pressure.",
          "Stain with fluorescein to show that there is no ulcer or dendrite under the haze, look for a hypopyon and keratic precipitates with a magnifying loupe, and finish by testing the fellow eye in the same sequence and by checking the red reflex, which is dull on the affected side.",
        ],
      },
      {
        heading: "Describing the findings before naming the diagnosis",
        points: [
          "The examiner wants to hear four findings in order - reduced vision, ciliary congestion, a hazy cornea with a shallow chamber, and a mid-dilated fixed pupil with a hard globe - and then the sentence 'these findings together are those of acute angle-closure glaucoma'.",
          "Reduced vision removes conjunctivitis, episcleritis and subconjunctival haemorrhage from consideration; ciliary congestion places the disease in the cornea, iris or ciliary body; the hazy cornea without a focal infiltrate or staining defect is epithelial oedema from pressure rather than an ulcer.",
          "The shallow anterior chamber is the anatomical clue that the angle is closed, and it is the finding that separates this eye from an anterior uveitis, where the chamber is of normal depth and full of cells.",
          "The mid-dilated pupil that does not react is the opposite of the small irregular synechial pupil of uveitis, and the stony hard globe is the opposite of the normal or soft eye of uveitis and keratitis.",
          "Headache, vomiting and haloes are the systemic and symptomatic corroboration; say them last, because they are what mislead the emergency room into admitting the patient for gastritis or migraine.",
          "State the diagnosis in full - acute primary angle-closure glaucoma of the right eye, pupillary-block type, with an occludable angle in the left eye - and immediately add that treatment must begin before referral, which is the point at which the case is won.",
        ],
      },
      {
        heading: "The bedside differentiation of the red eye",
        points: [
          "Against conjunctivitis: there is true pain rather than grittiness, no discharge, the vision is reduced, the congestion is deepest at the limbus rather than in the fornices, and the cornea and pupil are abnormal; conjunctivitis never produces any of these.",
          "Against microbial keratitis: keratitis produces a focal white infiltrate with an overlying fluorescein-staining defect, a normal or small pupil and a normal tension, whereas here the haze is diffuse, nothing stains, the pupil is mid-dilated and the eye is hard.",
          "Against acute anterior uveitis: uveitis gives marked photophobia with a small irregular pupil that is stuck to the lens, keratic precipitates and cells in a deep chamber, and a normal or low pressure; the vision is usually only mildly reduced and vomiting is absent.",
          "Against scleritis: scleritis gives a deep violaceous tenderness that does not blanch with phenylephrine and wakes the patient, but the cornea, chamber, pupil and tension are normal unless it is complicated.",
          "Against secondary angle closure: a swollen intumescent cataract with a deep fellow-eye chamber points to phacomorphic glaucoma; new vessels on the iris in a diabetic or after a retinal vein occlusion point to neovascular glaucoma; and recent topiramate use points to a drug-induced ciliochoroidal effusion, which is treated with cycloplegics and not with pilocarpine.",
        ],
      },
      {
        heading: "Immediate first aid before referral",
        points: [
          "Lay the patient supine, so that the lens falls back and the angle may open a little, and give an analgesic and an antiemetic at once, because straining and vomiting push the pressure higher and delay everything else.",
          "Give acetazolamide 500 mg orally, or intravenously if she is vomiting, provided there is no sulpha allergy, sickle cell disease or significant renal impairment, and continue 250 mg six-hourly until the pressure is controlled.",
          "Instil timolol 0.5% one drop, omitted in asthma, chronic obstructive pulmonary disease, bradycardia and heart block, brimonidine 0.2% one drop, and prednisolone acetate 1% every 15 to 30 minutes for four doses and then hourly to settle the iris inflammation.",
          "Give pilocarpine 2% one drop every 15 minutes for two doses only when the pressure has begun to fall, because the ischaemic sphincter does not respond above about 40 to 50 mmHg and early pilocarpine can thicken the iris and worsen the block.",
          "If the pressure is still very high after an hour, give mannitol 20% intravenously 1 to 2 g/kg over 30 to 45 minutes, or oral glycerol 50% 1 to 1.5 g/kg in a non-diabetic, with care in cardiac failure and renal disease.",
          "Telephone the ophthalmologist and send her within hours, with a note of the drugs and times, for pressure confirmation, corneal indentation or paracentesis if needed, and laser peripheral iridotomy to the affected eye once the cornea clears and to the fellow eye prophylactically.",
        ],
      },
      {
        heading: "What to say about the fellow eye, prognosis and follow-up",
        points: [
          "The fellow eye has the same anatomy and carries a 40 to 80% risk of an attack within five to ten years, so prophylactic laser peripheral iridotomy is part of the treatment of this attack and not an optional extra.",
          "Visual prognosis depends on the duration of the attack: sustained pressure above 50 mmHg for more than a day or two damages the optic nerve irreversibly, so the family is told plainly that the eye is being saved, not restored, if the presentation has been delayed.",
          "After the attack, look for the signs the examiner may ask you to demonstrate later - glaukomflecken, which are grey-white anterior subcapsular lens opacities, sector iris atrophy with a spiral appearance, and a permanently semi-dilated pupil from sphincter damage.",
          "Long-term follow-up is for chronic angle closure and peripheral anterior synechiae: pressure, disc and field checks at each visit, and lens extraction where cataract coexists, which deepens the chamber and is increasingly the definitive treatment.",
          "Give the patient a written card stating that she has narrow angles, that mydriatic drops and anticholinergic, antihistamine and antidepressant drugs must be prescribed with care, and that first-degree relatives over 40 should have their anterior chambers examined.",
        ],
      },
    ],
    summaryStatement:
      "This 60-year-old hypermetropic woman has an acute painful red right eye of one night's duration with vision reduced to counting fingers, a mixed congestion deepest at the limbus, a hazy oedematous cornea, a very shallow anterior chamber, a vertically oval mid-dilated pupil fixed to light and a stony hard globe, accompanied by ipsilateral headache, coloured haloes and vomiting, with a shallow chamber in the quiet fellow eye - the clinical picture of acute primary angle-closure glaucoma of the right eye with an occludable angle on the left, requiring pressure lowering in the clinic now and referral within hours for laser peripheral iridotomy to both eyes.",
    differential: [
      {
        diagnosis: "Acute anterior uveitis",
        forIt: "Unilateral painful red eye with ciliary congestion, photophobia and reduced vision in a patient of this age.",
        againstIt: "The pupil in uveitis is small, irregular and sluggish from posterior synechiae, the cornea is clear apart from keratic precipitates, the chamber is deep and full of cells, and the tension is normal or low; haloes, vomiting and a stony hard globe do not occur.",
      },
      {
        diagnosis: "Microbial keratitis",
        forIt: "Severe pain, watering, ciliary congestion, corneal haze and reduced vision.",
        againstIt: "There is no focal white infiltrate, nothing stains with fluorescein, there is no history of vegetable trauma, contact lens wear or steroid drops, the pupil is mid-dilated rather than normal, and the intraocular pressure is high rather than normal.",
      },
      {
        diagnosis: "Phacomorphic or neovascular secondary angle closure",
        forIt: "Raised pressure with a hazy cornea, a shallow chamber and a fixed pupil in an elderly patient.",
        againstIt: "There is no intumescent white cataract, no new vessels on the iris, no diabetic retinopathy or previous retinal vein occlusion, and the fellow eye also has a shallow anterior chamber, which points to primary pupillary-block angle closure.",
      },
      {
        diagnosis: "Migraine or cluster headache with a red watering eye",
        forIt: "Unilateral headache with nausea, vomiting and a red watering eye of sudden onset in the evening.",
        againstIt: "In migraine and cluster headache the vision is normal, the cornea is clear, the pupil is normal or small with a partial ptosis, and the globe is of normal tension; this patient has counting fingers vision, a hazy cornea, a mid-dilated fixed pupil and a hard eye.",
      },
    ],
    investigations: [
      {
        test: "Visual acuity with pinhole in both eyes, recorded before any drop",
        why: "It is the baseline against which recovery is judged and the single finding that separates the sight-threatening red eye from the benign one.",
        expected: "Counting fingers at 1 metre in the right eye without pinhole improvement; 6/9 in the left improving to 6/6 with pinhole.",
      },
      {
        test: "Tonometry - Schiotz in the clinic, Goldmann applanation at the referral centre",
        why: "To confirm and quantify the pressure that digital tonometry has estimated, and to document the response to each drug.",
        expected: "Intraocular pressure of 50 to 80 mmHg in the right eye and 12 to 20 mmHg in the left, falling below 30 mmHg within one to two hours of treatment.",
      },
      {
        test: "Fluorescein staining under a blue light",
        why: "To prove that the corneal haze is epithelial oedema and not an ulcer or a dendrite, which would change the whole treatment.",
        expected: "No focal defect; at most a fine diffuse punctate uptake from oedematous epithelium.",
      },
      {
        test: "Slit lamp examination with gonioscopy of both eyes once the cornea clears, with topical glycerine if needed",
        why: "Gonioscopy is the definitive test for a closed angle and for peripheral anterior synechiae, and the fellow eye's angle decides whether its iridotomy is prophylactic or already overdue.",
        expected: "A closed angle in the right eye with early peripheral anterior synechiae, corneal oedema, flare, a mid-dilated pupil and glaukomflecken; a narrow occludable angle (Shaffer grade 0 to 1, Van Herick grade 1) in the left.",
      },
      {
        test: "Fundus and optic disc examination through a dilated pupil only after the attack has been broken",
        why: "To document optic nerve damage and to exclude a retinal vein occlusion or diabetic retinopathy that would make the angle closure neovascular.",
        expected: "A hyperaemic or oedematous disc in the acute phase; later pallor and cupping proportional to the duration of the attack; no venous occlusion or new vessels.",
      },
      {
        test: "Blood glucose, serum electrolytes, urea and creatinine",
        why: "Acetazolamide causes hypokalaemia and acidosis and accumulates in renal failure, mannitol is dangerous in renal and cardiac disease, and glycerol is unsafe in diabetes.",
        expected: "Normal; potassium is rechecked if acetazolamide is continued beyond a day.",
      },
      {
        test: "Anterior segment optical coherence tomography or ultrasound biomicroscopy where available",
        why: "To measure the anterior chamber depth and to detect plateau iris or a forward-shifted lens, which change the choice between iridotomy and lens extraction.",
        expected: "Central anterior chamber depth below 2 mm with iridotrabecular contact; a thick, anteriorly positioned lens.",
      },
    ],
    management: [
      {
        heading: "Lowering the pressure in the clinic - the first hour",
        points: [
          "Supine position, oral or intramuscular analgesia and an antiemetic such as ondansetron; do not wait for any investigation before starting drugs.",
          "**Acetazolamide 500 mg stat** orally or intravenously, then 250 mg six-hourly, unless sulpha allergy, sickle cell disease or renal failure forbids it.",
          "**Timolol 0.5% one drop** (avoid in asthma, chronic obstructive pulmonary disease, bradycardia and heart block) and **brimonidine 0.2% one drop** to reduce aqueous production.",
          "**Prednisolone acetate 1%** every 15 to 30 minutes for four doses then hourly to reduce iris inflammation and synechiae.",
          "**Pilocarpine 2% one drop every 15 minutes for two doses, only once the pressure has begun to fall**; never as the first or the only drug.",
          "**Mannitol 20% 1 to 2 g/kg intravenously over 30 to 45 minutes** if the pressure remains very high after an hour; oral glycerol 50% 1 to 1.5 g/kg is an alternative in a non-diabetic.",
        ],
      },
      {
        heading: "What not to do",
        points: [
          "No mydriatic or cycloplegic drop in either eye - atropine or tropicamide will deepen the block.",
          "No topical anaesthetic for the journey home and no eye pad; the eye must be visible to the receiving doctor.",
          "No delay for a CT of the head to explain the headache and vomiting once the pupil and the tension have been examined.",
          "No pilocarpine in a suspected phacomorphic, malignant (aqueous misdirection) or topiramate-induced angle closure, where a miotic worsens the forward shift of the lens-iris diaphragm.",
        ],
      },
      {
        heading: "Referral and definitive treatment",
        points: [
          "Telephone referral to an ophthalmologist within hours, with a written note of every drug, dose and time, and the acuity and digital tension recorded.",
          "At the centre: applanation tonometry, corneal indentation with a four-mirror gonioscopy lens or a cotton bud to force aqueous through the angle, and anterior chamber paracentesis if drugs fail.",
          "**Nd:YAG laser peripheral iridotomy** to the affected eye once the cornea clears, usually within 24 to 48 hours, which bypasses the pupillary block and is the cure; surgical iridectomy if laser is impossible.",
          "**Prophylactic laser peripheral iridotomy to the fellow eye** at the same sitting or within days.",
          "Lens extraction where cataract coexists or the attack has been prolonged; trabeculectomy if extensive peripheral anterior synechiae leave the pressure uncontrolled.",
        ],
      },
      {
        heading: "Follow-up, counselling and the family",
        points: [
          "Pressure, disc and visual field at every visit for life, because chronic angle-closure glaucoma follows in a substantial minority even after iridotomy.",
          "A written card: 'narrow angles - avoid mydriatics, anticholinergics, antihistamines, tricyclics and topiramate unless the iridotomy is patent', shown to every prescriber.",
          "Warn that pain, haloes or blurring in either eye means returning the same day, and that the fellow-eye iridotomy must not be postponed.",
          "Examine first-degree relatives over 40 for a shallow anterior chamber, and register the patient under the National Programme for Control of Blindness and Visual Impairment for free follow-up and surgery.",
        ],
      },
    ],
    viva: [
      {
        q: "Why is the pupil mid-dilated rather than fully dilated?",
        a: "Pupillary block is greatest when the pupil is 4 to 5 mm - the iris is in maximal contact with the lens and its periphery is lax enough to bow forward and close the angle - and once the pressure exceeds about 60 mmHg the sphincter becomes ischaemic and freezes in that position, so the pupil is fixed in mid-dilatation and often vertically oval from sector ischaemia.",
      },
      {
        q: "Why does she see coloured haloes and why does she vomit?",
        a: "Raised pressure drives fluid into the corneal epithelium, and the oedematous cornea acts as a diffraction grating that splits light into rainbow rings - blue inside and red outside. The pain is carried by the ophthalmic division of the trigeminal nerve and its brainstem connections stimulate the vagus, producing nausea and vomiting, which is why the patient is often sent to a physician.",
      },
      {
        q: "How do you assess the anterior chamber depth without a slit lamp?",
        a: "By the oblique torch or eclipse test: a torch held at the temporal limbus and shone across the iris illuminates the whole iris when the chamber is deep, but throws the nasal iris into shadow when the iris is bowed forward. On a slit lamp the Van Herick method compares the peripheral chamber depth with corneal thickness, and grade 1 (less than a quarter of the corneal thickness) means an occludable angle.",
      },
      {
        q: "Why is pilocarpine not the first drug, and when is it contraindicated altogether?",
        a: "At very high pressures the iris sphincter is ischaemic and does not respond, and pilocarpine also shifts the lens-iris diaphragm forward and thickens the iris, so it is given only once acetazolamide and the aqueous suppressants have brought the pressure down to about 40 mmHg. It is contraindicated in phacomorphic glaucoma, malignant glaucoma and topiramate-induced angle closure, where cycloplegics are used instead.",
      },
      {
        q: "What are the contraindications and adverse effects of acetazolamide and mannitol?",
        a: "Acetazolamide is avoided in sulpha allergy, sickle cell disease, significant renal failure and hepatic cirrhosis, and causes paraesthesiae, hypokalaemia, metabolic acidosis, renal stones and rarely aplastic anaemia or Stevens-Johnson syndrome. Mannitol is avoided in cardiac failure, pulmonary oedema and renal failure, because the osmotic load expands the plasma volume before it diureses.",
      },
      {
        q: "What is the definitive treatment and why must the other eye be treated?",
        a: "Laser peripheral iridotomy, which creates a bypass for aqueous between the posterior and anterior chambers and abolishes the pupillary block. The fellow eye has the same short, crowded anatomy and a 40 to 80% chance of an attack in the next five to ten years, so a prophylactic iridotomy to it is part of the treatment of the first attack.",
      },
      {
        q: "What signs would tell you months later that this eye has had an attack?",
        a: "Glaukomflecken - grey-white anterior subcapsular lens opacities from lens epithelial necrosis, sector or spiral atrophy of the iris, a permanently semi-dilated pupil that reacts poorly, peripheral anterior synechiae on gonioscopy, and a pale cupped disc with a field defect if the attack was prolonged.",
      },
      {
        q: "Which drugs used in family practice can precipitate an attack in a susceptible eye?",
        a: "Anything that dilates the pupil or thickens the ciliary body: anticholinergics such as atropine, hyoscine and tricyclic antidepressants, antihistamines and decongestants, nebulised ipratropium and salbutamol in a leaking mask, sympathomimetics, mydriatic drops used at eye camps, and topiramate, which causes a ciliochoroidal effusion and a non-pupillary-block angle closure in both eyes.",
      },
    ],
    pitfalls: [
      "Naming the diagnosis before describing the vision, the congestion, the cornea, the chamber, the pupil and the tension in that order - the examiner marks the differentiation, not the label.",
      "Examining the eye before recording the visual acuity, or instilling a drop before the acuity is written down.",
      "Treating the headache and vomiting as gastritis or migraine and admitting the patient to a medical ward, which is how this diagnosis is missed and how the eye is lost.",
      "Giving pilocarpine as the first or only drug and reviewing in the morning, or giving a mydriatic to examine the fundus of a hard hazy eye.",
      "Forgetting the fellow eye - both its examination in the case and its prophylactic iridotomy in the management.",
      "Not asking the drug contraindication questions before prescribing timolol, acetazolamide, mannitol or glycerol, which is what converts an eye emergency into a medical one.",
    ],
    references: [
      "AK Khurana, Comprehensive Ophthalmology, 8th edition, 2022 - glaucoma and the red eye",
      "Kanski's Clinical Ophthalmology, 9th edition, 2020 - primary angle-closure glaucoma",
      "American Academy of Ophthalmology Preferred Practice Pattern, Primary Angle-Closure Disease, 2020",
      "European Glaucoma Society Terminology and Guidelines for Glaucoma, 5th edition, 2020",
      "Standard Treatment Guidelines, Ophthalmology, Ministry of Health and Family Welfare, Government of India",
      "National Programme for Control of Blindness and Visual Impairment (NPCBVI) operational guidelines, MoHFW",
    ],
  },
  {
    id: "eye-ent-case-2",
    title: "Viva on the ear: the discharging ear, the tuning forks and the deafness programme",
    kind: "viva",
    subjectId: "eye-ent",
    opening:
      "A 7-year-old boy is brought with a painless, profuse, odourless discharge from the left ear that has come and gone for three months since an episode of fever and earache a year ago that was treated with two days of syrup; his mother says he turns the television up and his teacher has moved him to the front bench. The examiner hands over an otoscope and a 512 Hz tuning fork and asks for the ear to be examined and then for a discussion of acute and chronic otitis media, the tuning fork tests, the discharging ear that is dangerous, and what the national programme offers this child.",
    minutes: 10,
    frequency: "core",
    sections: [
      {
        heading: "The history to take before the otoscope is picked up",
        points: [
          "Characterise the discharge, because it classifies the disease before the drum is seen: profuse, mucoid or mucopurulent, odourless and worse with every cold or after a bath means tubotympanic disease, whereas scanty, foul-smelling and sometimes blood-stained means bone-eroding atticoantral disease.",
          "Ask whether the ear hurts now - chronic suppurative otitis media is painless, so pain in a chronically discharging ear is a complication until proved otherwise - and ask for headache, fever, vomiting, giddiness, facial weakness and swelling behind the ear in the same breath.",
          "Ask about the hearing in daily life: turning up the television, not responding when called from behind, the teacher's complaint, and speech that is loud or unclear, and ask which ear the mother thinks is worse.",
          "Reconstruct the first episode: the fever and earache of acute otitis media, whether the ear discharged and for how long, what antibiotic was given and for how many days, and how many similar episodes have followed, because recurrent acute otitis media and an incompletely treated perforation are the road to chronic disease.",
          "Ask the predisposing questions that also form the counselling: bottle feeding lying flat, a smoker in the house, recurrent colds and mouth breathing from adenoids, swimming in a pond, oil or home remedies poured into the ear, and whether immunisation including pneumococcal and Haemophilus influenzae type b vaccine is complete.",
        ],
      },
      {
        heading: "Otoscopy technique and the drum in acute otitis media",
        points: [
          "Sit the child on the mother's lap with one of her arms around his arms and the other holding his head against her chest, pull the pinna upwards and backwards in a child over three and downwards and backwards in an infant, and use the largest speculum that enters the canal comfortably, holding the otoscope like a pen with the little finger braced on the cheek.",
          "Describe the normal drum first so that abnormality has a reference: a pearly grey translucent pars tensa, the handle and lateral process of the malleus, a cone of light running anteroinferiorly from the umbo, and the pars flaccida above the lateral process.",
          "Acute otitis media runs through recognisable stages on the drum: tubal occlusion gives a retracted drum with a lost light reflex and a prominent foreshortened malleus; presuppuration gives a cartwheel of radial vessels along the malleus handle and then diffuse congestion; suppuration gives a bulging red or yellow drum with the landmarks lost and a tender mastoid.",
          "If it perforates, the acute perforation is small and central, usually in the anteroinferior quadrant, with a pulsating 'lighthouse' discharge, and pain and fever settle at once; if it does not perforate and does not resolve, the stage of complication has begun.",
          "Otitis media with effusion, the commonest cause of hearing loss in a school child, is a dull retracted amber or yellow drum with an air-fluid level or bubbles that does not move with pneumatic otoscopy, and it produces a 20 to 40 dB conductive loss without pain or discharge.",
        ],
      },
      {
        heading: "The drum in chronic suppurative otitis media - safe versus unsafe",
        points: [
          "In this child the drum shows a medium-sized central perforation of the pars tensa with a rim of drum all round it, a pale pink slightly oedematous middle ear mucosa seen through it, mucopurulent discharge that can be mopped away, and an intact malleus handle - the tubotympanic or safe type.",
          "Describe a perforation by its site (central, attic or marginal), its size (small, medium, large or subtotal), its margins (smooth or with granulation), and what lies behind it (healthy mucosa, polyp, granulation or cholesteatoma), and always state whether the pars flaccida and the posterosuperior margin are intact.",
          "Atticoantral or unsafe disease shows an attic perforation or a posterosuperior marginal perforation that reaches the annulus, with pearly white flakes of cholesteatoma, granulation tissue or a polyp, and a scanty foul discharge from bone destruction by anaerobes; it cannot be cured with drops and needs mastoid surgery.",
          "The safe ear gives a conductive loss of 30 to 50 dB that is worse with larger and posterior perforations and with ossicular necrosis; the unsafe ear may hear paradoxically well while cholesteatoma bridges an eroded incus, so good hearing does not mean a safe ear.",
          "Say what else is examined: the fellow ear, the nose and postnasal space for adenoids and a deviated septum, the throat and tonsils, the mastoid for tenderness and swelling, the facial nerve, the fistula test if there is giddiness, and the fundi if there is headache.",
        ],
      },
      {
        heading: "Rinne and Weber at the bedside, with the interpretation table",
        points: [
          "Use a 512 Hz fork struck against the elbow or a rubber pad, not a table: a 256 Hz fork is felt as vibration and overestimates bone conduction, and a 1024 Hz fork decays too fast to compare.",
          "Rinne: hold the stem on the mastoid until the sound fades, then bring the prongs 2 cm from the canal; air conduction louder or longer than bone conduction is Rinne positive (normal or sensorineural loss), and bone louder than air is Rinne negative, which means a conductive loss of at least 15 to 20 dB - roughly 15 dB for a 256 Hz fork, 30 dB for 512 Hz and 45 dB for 1024 Hz.",
          "Weber: place the stem on the vertex, forehead or upper incisors and ask where it is heard; it lateralises to the ear with a conductive loss, because that ear is spared ambient masking and has an occlusion effect, and away from an ear with a sensorineural loss towards the better cochlea.",
          "The interpretation table to draw: normal - Rinne positive both, Weber central; left conductive loss - Rinne negative left, positive right, Weber to the left; left sensorineural loss - Rinne positive both, Weber to the right; left severe or dead ear - Rinne falsely negative on the left (the bone-conducted sound is heard by the right cochlea), Weber to the right, so the right ear must be masked with a Barany noise box; bilateral conductive loss - Rinne negative both, Weber central or to the worse ear.",
          "Complete the set with the absolute bone conduction test, comparing the patient's bone conduction with the examiner's after occluding the tragus (reduced in sensorineural loss, normal in conductive), and Schwabach's test, which is lengthened in conductive and shortened in sensorineural loss.",
          "In this child Rinne is negative on the left and positive on the right and Weber lateralises to the left, which is a left conductive hearing loss consistent with the perforation, and a pure tone audiogram is then requested to quantify it and to check the cochlear reserve before any surgery.",
        ],
      },
      {
        heading: "When a discharging ear is dangerous",
        points: [
          "A chronically discharging ear becomes dangerous when the discharge is scanty and foul-smelling with an attic or marginal perforation, cholesteatoma or a polyp, because the disease is eroding bone towards the facial nerve, the labyrinth and the dura.",
          "The symptoms that demand same-day referral are pain in an ear that was painless, headache that persists or wakes the patient, fever with rigors, vomiting, vertigo or unsteadiness, facial weakness, diplopia, drowsiness or irritability, neck stiffness and fits.",
          "The signs are tenderness and swelling behind the ear with the pinna pushed down and forwards, sagging of the posterosuperior canal wall, a positive fistula test, nystagmus, a lower motor neurone facial palsy, a sixth nerve palsy with deep retro-orbital pain and persistent discharge (Gradenigo's triad of petrositis), papilloedema, and sudden cessation of a long-standing discharge with rising fever, which means the drainage is blocked.",
          "The intratemporal complications are acute mastoiditis with subperiosteal abscess, facial paralysis, labyrinthitis and petrositis; the intracranial ones are extradural abscess, subdural empyema, meningitis (the commonest in children), temporal lobe or cerebellar brain abscess, lateral sinus thrombophlebitis with its picket-fence fever, and otitic hydrocephalus.",
          "In an elderly diabetic, granulation tissue at the floor of the canal with severe pain out of proportion to the otoscopic finding is malignant (necrotising) otitis externa from Pseudomonas, which is a skull base osteomyelitis and needs admission for intravenous antipseudomonal antibiotics for six weeks.",
          "A dangerous ear gets no drops and no waiting: a high-resolution CT of the temporal bone, intravenous antibiotics that cross into the brain, and an ENT surgeon the same day for mastoid exploration, with a neurosurgeon if an abscess is present.",
        ],
      },
      {
        heading: "The National Programme for Prevention and Control of Deafness",
        points: [
          "NPPCD was launched as a pilot in 2006-07 in 25 districts of 10 states and one union territory, in response to an estimated 6.3% of the Indian population with significant hearing impairment (about 63 million people) and the NSSO finding of 291 persons per lakh with severe to profound loss; it was expanded in the 11th Five Year Plan and is now implemented under the National Health Mission in most districts of the country.",
          "Its objectives are to prevent avoidable hearing loss from disease or injury, to identify, diagnose and treat ear disease early, to rehabilitate people of all ages with deafness medically, to strengthen inter-sectoral linkages for continued rehabilitation, and to build institutional capacity for ear care through equipment, materials and training.",
          "Its components are manpower training (ENT surgeons, audiologists, audiometric assistants, medical officers, ASHAs, anganwadi workers and ANMs), capacity building of the district hospital, community health centre and primary health centre, service provision through screening camps, treatment and free hearing aids at the district hospital, awareness generation through IEC, and monitoring and evaluation.",
          "For this child the programme means a referral pathway: the ASHA and the school health team of Rashtriya Bal Swasthya Karyakram screen and refer, the primary health centre medical officer does otoscopy and aural toilet and gives drops, the community health centre holds an ENT camp, and the district hospital has an audiometry room, an ENT surgeon for tympanoplasty and a hearing aid dispensed free of cost.",
          "The newborn and childhood side of the programme follows the 1-3-6 rule: otoacoustic emission screening at birth or by one month, brainstem evoked response audiometry to confirm by three months, and a hearing aid or intervention by six months, with cochlear implantation for eligible children under five under the ADIP scheme of the Ministry of Social Justice and Empowerment.",
          "Prevention messages the family physician delivers are exclusive breastfeeding and no bottle in the supine position, complete immunisation including pneumococcal, Haemophilus influenzae type b and measles-rubella vaccines, no smoking in the house, full treatment of every acute otitis media, no oil or home remedies in a discharging ear, avoidance of ototoxic drugs and loud noise, and screening of every child before school entry; World Hearing Day is 3 March.",
        ],
      },
    ],
    summaryStatement:
      "A 7-year-old boy with a three-month history of painless, profuse, odourless mucopurulent discharge from the left ear following an incompletely treated acute otitis media a year ago, a medium central perforation of the pars tensa with healthy middle ear mucosa on otoscopy, a Rinne negative on the left with Weber lateralising to the left, and no pain, fever, headache, vertigo, facial weakness or postaural swelling - tubotympanic (safe) chronic suppurative otitis media with a left conductive hearing loss, needing aural toilet, topical ciprofloxacin, dry ear precautions, audiometry and referral for tympanoplasty, and enrolment through the school health team for hearing assessment and follow-up under the National Programme for Prevention and Control of Deafness.",
    differential: [
      {
        diagnosis: "Atticoantral (unsafe) chronic suppurative otitis media with cholesteatoma",
        forIt: "Chronic ear discharge with hearing loss in a child after an untreated acute otitis media.",
        againstIt: "The discharge is profuse and odourless rather than scanty and foul, the perforation is central with an intact annulus and pars flaccida, and there are no pearly white flakes, granulations, polyp, pain, vertigo or facial weakness.",
      },
      {
        diagnosis: "Otitis externa",
        forIt: "A discharging ear in a child who bathes in a pond.",
        againstIt: "There is no itching, the canal is not oedematous and tragal pressure and pinna traction are painless, the discharge pulsates through a visible drum perforation, and hearing is reduced by a conductive loss rather than by canal debris.",
      },
      {
        diagnosis: "Otitis media with effusion",
        forIt: "A school child with hearing loss and a teacher's complaint, with a history of recurrent colds.",
        againstIt: "Glue ear has an intact dull retracted drum with an air-fluid level and no discharge, whereas this ear has a perforation with active mucopurulent discharge.",
      },
      {
        diagnosis: "Tuberculous otitis media",
        forIt: "A painless chronic discharge in a child in a tuberculosis-endemic area.",
        againstIt: "Tuberculous disease gives multiple perforations that coalesce, pale granulations, a hearing loss and facial palsy out of proportion to the drum, and a contact history or pulmonary disease; none is present, but it is reconsidered if the ear fails to dry on standard treatment.",
      },
    ],
    investigations: [
      {
        test: "Ear swab for Gram stain, aerobic and fungal culture and sensitivity",
        why: "To identify the organism if the discharge does not settle with first-line drops and to detect fungal superinfection after prolonged antibiotic drops.",
        expected: "Pseudomonas aeruginosa, Proteus or Staphylococcus aureus in chronic disease; a mixed anaerobic growth suggests bone disease.",
      },
      {
        test: "Pure tone audiometry with air and bone conduction",
        why: "To quantify and type the hearing loss, to document the cochlear reserve before surgery, and to provide the baseline for a hearing aid or for school placement.",
        expected: "A left conductive loss of 30 to 45 dB with an air-bone gap and normal bone conduction; normal thresholds on the right.",
      },
      {
        test: "Tympanometry",
        why: "To confirm a perforation objectively and to assess the fellow ear for effusion.",
        expected: "A flat type B trace with a large ear canal volume on the left, indicating a perforation; a normal type A trace, or type B with normal volume if there is glue, on the right.",
      },
      {
        test: "Examination under the microscope with suction clearance",
        why: "To clear the discharge and see the margins of the perforation, the attic and the posterosuperior quadrant, which the otoscope cannot show reliably in a child.",
        expected: "A central perforation with healthy mucosa and an intact ossicular chain; no cholesteatoma, granulation or polyp.",
      },
      {
        test: "X-ray mastoids, Schuller's view, where CT is not available",
        why: "To show the pneumatisation of the mastoid and to detect a cavity from cholesteatoma or clouding from mastoiditis.",
        expected: "A sclerotic, poorly pneumatised mastoid typical of long-standing tubotympanic disease; no cavity.",
      },
      {
        test: "High-resolution CT of the temporal bone",
        why: "Requested only for unsafe disease, suspected complications or before mastoid surgery, to map bone erosion of the scutum, ossicles, tegmen, facial canal and lateral semicircular canal.",
        expected: "Not required in this safe ear; in an unsafe ear a soft-tissue mass in the attic and antrum with erosion of the scutum and ossicles.",
      },
      {
        test: "Otoacoustic emissions or brainstem evoked response audiometry",
        why: "For infants and children too young or too unwell to do pure tone audiometry, and as the screening tools of the newborn hearing programme.",
        expected: "Absent otoacoustic emissions on the left because of the middle ear disease, with normal brainstem thresholds by bone conduction, confirming a conductive loss.",
      },
    ],
    management: [
      {
        heading: "Acute otitis media in the clinic",
        points: [
          "Analgesia first - paracetamol 15 mg/kg or ibuprofen 10 mg/kg - because pain, not the antibiotic, is what brings the child; no decongestants or antihistamines, which do not help and sedate.",
          "**Antibiotic at once** if under 6 months, if severe (otalgia over 48 hours, temperature 39 degrees C or more, toxic), if bilateral under 2 years, or if there is otorrhoea; otherwise a 48 to 72 hour period of observation with analgesia and a safety net is acceptable for a mild unilateral case.",
          "**Amoxicillin 80 to 90 mg/kg/day in two divided doses** for 10 days under 2 years or in severe disease, 7 days at 2 to 5 years, and 5 to 7 days above 5 years; amoxicillin-clavulanate if amoxicillin was given in the last 30 days, if there is purulent conjunctivitis, or if there is no improvement at 48 to 72 hours.",
          "Review at 48 to 72 hours; a perforated acute ear is kept dry and treated for the full course, and a drum that has not healed at 6 weeks or hearing that has not recovered at 3 months is referred.",
          "Recurrent acute otitis media - 3 episodes in 6 months or 4 in a year - is referred for consideration of grommets and adenoidectomy after the predisposing factors have been corrected.",
        ],
      },
      {
        heading: "The safe ear: aural toilet, drops and dry-ear precautions",
        points: [
          "**Aural toilet** by dry mopping with a cotton-tipped wick or suction under vision before every instillation, because drops cannot reach an infected mucosa through a pool of pus; the mother is taught to dry-mop at home.",
          "**Topical ciprofloxacin 0.3% or ofloxacin 0.3%, 3 drops three times a day for 2 weeks**, instilled with the ear uppermost and the tragus pumped so the drop enters the middle ear; systemic antibiotics are added only for an acute exacerbation or a febrile child.",
          "**No aminoglycoside, neomycin-polymyxin or chloramphenicol drops through a perforation** - they are ototoxic - and no steroid-antifungal combinations from the chemist; suspect fungal otitis if the ear itches and wet-newspaper debris appears after weeks of drops.",
          "Keep the ear dry: no swimming, a cotton wool plug coated with petroleum jelly during bathing, and no oil or home remedies; treat the nose, sinuses, tonsils and adenoids that reinfect the ear.",
          "Once the ear has been dry for at least 6 weeks to 3 months, refer for **tympanoplasty (myringoplasty with or without ossiculoplasty)** after audiometry; explain that the surgery closes the hole, protects the ear and usually improves hearing, and that a hearing aid is offered in the meantime if the loss affects school.",
        ],
      },
      {
        heading: "The unsafe ear and complications: what leaves the clinic",
        points: [
          "Attic or marginal perforation, cholesteatoma, granulation or polyp - referral to an ENT surgeon within days for **mastoid exploration** (modified radical or canal-wall-up mastoidectomy); drops are only a bridge and a polyp is never avulsed in the clinic.",
          "Any danger symptom or sign - admission the same day, blood cultures, a high-resolution CT of the temporal bone and a contrast CT or MRI of the brain, and intravenous ceftriaxone plus metronidazole (with vancomycin if meningitis is suspected) while the surgeon is called.",
          "A facial palsy in a discharging ear is an emergency for urgent mastoid exploration, not for steroids alone; a positive fistula test or vertigo means labyrinthine involvement and bed rest with urgent surgery.",
          "The diabetic with a painful granulating canal is admitted for six weeks of intravenous or oral antipseudomonal therapy with strict glycaemic control and a bone scan or CT to monitor the skull base.",
        ],
      },
      {
        heading: "Hearing rehabilitation and the programme link",
        points: [
          "Pure tone audiometry and a hearing aid from the district hospital under NPPCD if the loss is disabling while the ear is being treated, with the class teacher told to seat the child in front and to face him when speaking.",
          "School health screening under Rashtriya Bal Swasthya Karyakram, the newborn 1-3-6 pathway for his younger siblings, and referral for cochlear implantation under ADIP for any child under five with profound sensorineural loss.",
          "Disability certification under the Rights of Persons with Disabilities Act 2016, which defines 'hard of hearing' as 60 to 70 dB and 'deaf' as 70 dB or more in the speech frequencies in both ears, opens educational and financial support.",
          "Follow-up until the drum has healed or been repaired, with re-testing of the hearing after surgery and at every school year.",
        ],
      },
      {
        heading: "Prevention and family counselling",
        points: [
          "Exclusive breastfeeding for 6 months and no bottle feeding in the lying position; feed infants propped up.",
          "Complete immunisation - pneumococcal conjugate, Haemophilus influenzae type b, measles-rubella and influenza where available - and no tobacco smoke in the house.",
          "Every acute otitis media treated for the full course and reviewed; nose blown one nostril at a time; no oil, no matchsticks and no cotton buds in the ear.",
          "Tell the family the four words that bring the child back the same day: pain, fever, giddiness, face weakness, and add swelling behind the ear and a discharge that suddenly stops.",
        ],
      },
    ],
    viva: [
      {
        q: "What is a false negative Rinne test and how do you avoid being caught by it?",
        a: "In a severe unilateral sensorineural loss or a dead ear, the bone-conducted sound from the mastoid crosses the skull and is heard by the opposite cochlea while air conduction on the deaf side is not heard at all, so Rinne appears negative and a dead ear is mislabelled as conductive. Weber lateralising away from that ear is the clue, and the test is repeated with the good ear masked by a Barany noise box.",
      },
      {
        q: "Why does Weber lateralise towards the ear with a conductive loss?",
        a: "The conductive block shuts out ambient noise so the cochlea on that side is not masked, and the occlusion effect reflects bone-conducted sound back into the middle ear instead of letting it escape through the canal, so the same vibration is heard louder in the blocked ear. In sensorineural loss the sound simply goes to the better cochlea.",
      },
      {
        q: "Why is a central perforation called safe and an attic or marginal one unsafe?",
        a: "A central perforation is surrounded by a rim of drum, so the migrating squamous epithelium of the canal cannot climb into the middle ear, and the disease is mucosal, causing discharge and a conductive loss without bone destruction. An attic or marginal perforation has no rim, so skin grows in to form a cholesteatoma that erodes bone by pressure and enzymes towards the facial nerve, the labyrinth and the dura, which is why it is unsafe and needs surgery.",
      },
      {
        q: "Which drops are given in a perforated ear and which are forbidden, and why?",
        a: "Topical fluoroquinolones - ciprofloxacin or ofloxacin - are effective against Pseudomonas and are not ototoxic. Aminoglycosides such as gentamicin, neomycin and framycetin, and chloramphenicol, cross the round window membrane and destroy the hair cells, so they are avoided through a perforation and are never given to a child.",
      },
      {
        q: "What organisms cause acute and chronic otitis media, and which antibiotic is first line in each?",
        a: "Acute otitis media is caused by Streptococcus pneumoniae, non-typeable Haemophilus influenzae and Moraxella catarrhalis, often after a viral upper respiratory infection, and high-dose amoxicillin is the first-line drug. Chronic suppurative otitis media grows Pseudomonas aeruginosa, Proteus, Staphylococcus aureus and anaerobes, and topical quinolone drops after aural toilet are the first-line treatment.",
      },
      {
        q: "A child with a long-standing discharging ear stops discharging and two days later develops fever, headache and vomiting - what has happened and what do you do?",
        a: "The perforation or the aditus has been blocked by oedema or a polyp, pus is trapped under pressure, and a complication - acute mastoiditis, meningitis or a brain abscess - is developing; the cessation of discharge is a danger sign, not a cure. The child is admitted the same day for a CT of the temporal bone and brain, intravenous ceftriaxone and metronidazole, and urgent mastoid exploration.",
      },
      {
        q: "What are the objectives and components of NPPCD, and how does a poor family get a hearing aid?",
        a: "The objectives are to prevent avoidable hearing loss, to identify and treat ear disease early, to rehabilitate people of all ages with deafness, to strengthen inter-sectoral linkages, and to build institutional capacity; the components are manpower training, capacity building of the district hospital, community health centre and primary health centre, service provision including camps and hearing aids, IEC, and monitoring. A hearing aid is fitted free at the district hospital after audiometry, and children under five with profound loss may get a cochlear implant under the ADIP scheme.",
      },
      {
        q: "What is the 1-3-6 rule and which tests are used at each step?",
        a: "Screen every newborn with otoacoustic emissions at birth or by one month, confirm any failed screen with brainstem evoked response audiometry by three months, and start intervention - a hearing aid and auditory-verbal therapy, with referral for cochlear implantation where indicated - by six months, because language outcome depends on amplification in the first year of life.",
      },
    ],
    pitfalls: [
      "Calling a painful chronically discharging ear 'just CSOM' - chronic suppurative otitis media is painless, and pain, headache, fever, vertigo or facial weakness means a complication that needs admission the same day.",
      "Using a 256 Hz or 1024 Hz fork, striking it on a table, or reporting a Rinne negative as conductive without doing Weber and masking - the dead ear is then labelled conductive.",
      "Prescribing gentamicin, neomycin or chloramphenicol drops, or a steroid-antibiotic-antifungal combination from the chemist, through a perforation.",
      "Instilling drops into a canal full of pus without aural toilet, or syringing a discharging or perforated ear.",
      "Giving decongestants, antihistamines or a two-day antibiotic syrup for acute otitis media and never reviewing the drum or the hearing.",
      "Treating the ear and forgetting the child: no audiogram, no hearing aid, no word to the teacher, and no link to the school health team or the district hospital under NPPCD.",
    ],
    references: [
      "PL Dhingra and Shruti Dhingra, Diseases of Ear, Nose and Throat and Head and Neck Surgery, 8th edition, 2022",
      "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8th edition, 2018",
      "American Academy of Pediatrics Clinical Practice Guideline, The Diagnosis and Management of Acute Otitis Media, 2013",
      "WHO, Chronic suppurative otitis media: burden of illness and management options, 2004",
      "WHO World Report on Hearing, 2021",
      "National Programme for Prevention and Control of Deafness, operational guidelines, Ministry of Health and Family Welfare, Government of India",
      "Rashtriya Bal Swasthya Karyakram operational guidelines, MoHFW, 2013",
      "Park's Textbook of Preventive and Social Medicine, 27th edition, 2023 - NPPCD",
    ],
  },
];

const subject: Subject = {
  id: "eye-ent",
  title: "Eye & ENT",
  blurb: "The red eye, vision screening, otitis, hearing loss, epistaxis, sore throat and oral cancer screening.",
  icon: "Eye",
  papers: ["III"],
  topics,
  cases,
};

export default subject;
