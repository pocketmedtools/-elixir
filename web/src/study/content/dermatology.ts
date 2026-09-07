import type { ClinicalCase, Subject, Topic } from "../lib/types";

const topics: Topic[] = [];

topics.push({
  id: "dermatology-lesion-description",
  title: "Describing a skin lesion: primary and secondary morphology",
  oneLiner:
    "A skin lesion is described in a fixed order - number, site and distribution, size, shape, surface, margin, colour, consistency and arrangement, followed by the secondary changes - and the diagnosis is then offered as a morphological pattern, because in the short case the marks are given for the description and not for the guess.",
  frequency: "core",
  keywords: [
    "primary lesion",
    "secondary lesion",
    "macule",
    "papule",
    "plaque",
    "vesicle",
    "bulla",
    "pustule",
    "wheal",
    "nodule",
    "lichenification",
    "excoriation",
    "morphology",
    "configuration",
    "annular",
    "Nikolsky sign",
    "Auspitz sign",
    "Wood lamp",
    "KOH mount",
    "short case",
  ],
  sections: [
    {
      heading: "Why morphology is the whole examination",
      points: [
        "Dermatology is the one specialty where **the diagnosis is made by looking, in a defined vocabulary**; the examiner is testing whether you can convert what you see into words that another doctor could redraw the lesion from.",
        "The candidate who begins with a diagnosis and then hunts for supporting features loses the description marks; the candidate who describes cleanly earns them even when the final diagnosis is wrong.",
        "**Always examine the whole skin surface** with the patient adequately exposed in good daylight, and never omit the scalp, ears, nails, palms and soles, oral mucosa, genitalia and the interdigital webs - the diagnostic lesion is very often outside the patch the patient is complaining of.",
        "Touch the lesion after asking permission: **inspection alone cannot tell induration, tenderness, warmth, scaling or loss of sensation**, and in India a hypopigmented patch is not described until its sensation has been tested.",
        "Record number (single, few, multiple, countable), and whether the eruption is localised, regional, generalised, universal or erythrodermic - a diagnosis such as pemphigus or erythroderma is a distribution diagnosis before it is anything else.",
        "The examination ends with a general and systemic examination: lymph nodes, peripheral nerves, joints, liver and spleen, and a targeted systemic review - psoriasis has arthritis, leprosy has neuritis, and a drug rash has a fever chart.",
      ],
    },
    {
      heading: "Primary lesions: the words that must be used exactly",
      points: [
        "**Macule** - a flat, circumscribed change in colour less than 1 cm, not palpable; a **patch** is the same thing 1 cm or larger. Vitiligo, freckles and a hypopigmented leprosy patch are macules and patches.",
        "**Papule** - a solid, elevated lesion less than 1 cm; a **plaque** is an elevated flat-topped lesion 1 cm or larger, usually formed by confluence of papules, as in psoriasis; a **nodule** is a solid lesion larger than 1 cm with depth in the dermis or subcutis.",
        "**Vesicle** - a fluid-filled elevation less than 1 cm; a **bulla** is 1 cm or larger; a **pustule** contains pus and may be follicular (acne, folliculitis) or non-follicular (pustular psoriasis, acute generalised exanthematous pustulosis).",
        "**Wheal** - a transient, oedematous, pale or erythematous elevation with a flat top and a surrounding flare that resolves in under 24 hours without leaving a mark, the defining lesion of urticaria.",
        "**Purpura** - extravasated blood that does not blanch on diascopy; petechiae are under 3 mm, ecchymoses larger; palpable purpura means vasculitis until proved otherwise.",
        "Specialised primary lesions worth naming: **comedone** (open or closed, acne), **burrow** (scabies), **cyst** (epithelial-lined sac), **telangiectasia**, and the **target or iris lesion** of erythema multiforme with its three concentric zones.",
      ],
    },
    {
      heading: "Secondary lesions: what time, scratching and treatment have done",
      points: [
        "**Scale** - visible flakes of stratum corneum; describe as fine and branny (pityriasis versicolor), silvery-white and micaceous (psoriasis), greasy and yellow (seborrhoeic dermatitis) or collarette (pityriasis rosea).",
        "**Crust** - dried exudate; honey-coloured crust is impetigo, haemorrhagic crust follows excoriation or a bulla.",
        "**Erosion** is loss of epidermis only and heals without a scar; an **ulcer** extends into the dermis or deeper and always heals with a scar - this distinction alone separates pemphigus from pemphigoid answers and decides prognosis.",
        "**Excoriation** is a linear or punctate erosion caused by scratching and is objective evidence of itch; its presence in a scabies or eczema case is worth stating out loud.",
        "**Lichenification** - thickened skin with exaggerated skin markings and hyperpigmentation from chronic rubbing, the hallmark of chronic eczema and lichen simplex chronicus.",
        "**Atrophy** - thinning with wrinkling, shininess and visible vessels; with **striae** and telangiectasia over a treated patch it is the signature of topical steroid abuse.",
        "Also describe **fissure** (a linear split, painful, palms, soles and finger tips), **scar** (atrophic, hypertrophic or keloidal), **sclerosis** (bound-down hardening), **sinus**, **eschar** and **maceration**.",
      ],
    },
    {
      heading: "The order of words in the short case",
      points: [
        "Say it in this sequence and nothing is missed: **number, site and distribution, size in centimetres, shape, surface, margin, colour, consistency and temperature, arrangement, and secondary change**.",
        "**Site and distribution:** name the anatomical site precisely, then the pattern - symmetrical or asymmetrical, extensor or flexural, photo-exposed, seborrhoeic, acral, intertriginous, dermatomal or following a nerve, and whether it koebnerises into scratch lines.",
        "**Size:** measure with a scale in two dimensions in centimetres; never say 'coin-sized' or 'about the size of a rupee' in the examination, and give the range if there are many lesions.",
        "**Shape and margin:** round, oval, annular, arciform, polycyclic, serpiginous or irregular; the margin is well or ill defined, and may be raised, active and scaly (tinea), rolled and pearly (basal cell carcinoma), everted (squamous cell carcinoma), undermined (tuberculous ulcer), sloping (venous ulcer) or punched out (arterial or trophic ulcer).",
        "**Surface:** smooth, scaly, verrucous, crusted, eroded, ulcerated, umbilicated, or studded with pustules; state whether scraping produces scale (grattage test) and whether pinpoint bleeding follows (Auspitz sign).",
        "**Colour:** erythematous, violaceous, dusky, hyperpigmented, hypopigmented or completely depigmented - and in Indian skin always separate **hypopigmented (some pigment left) from depigmented (chalk or milk white)**, because that single word separates leprosy from vitiligo.",
        "**Arrangement or configuration:** discrete, confluent, grouped or herpetiform, linear, annular, reticulate, zosteriform, or in a blaschkoid pattern.",
      ],
    },
    {
      heading: "The bedside tests that finish the description",
      points: [
        "**Sensation over the lesion:** test light touch with cotton wool, then pain and temperature, comparing with adjacent normal skin, with the patient's eyes closed - mandatory over every hypopigmented patch in India.",
        "**Palpate the peripheral nerves** in the same breath: ulnar above the elbow, median at the wrist, radial cutaneous, common peroneal at the neck of the fibula, posterior tibial behind the medial malleolus, great auricular and supraorbital, comparing the two sides for thickening and tenderness.",
        "**Diascopy** with a glass slide: purpura does not blanch, and the apple-jelly nodules of lupus vulgaris appear on blanching.",
        "**Nikolsky sign** - shearing pressure on normal-looking skin produces an erosion (pemphigus, toxic epidermal necrolysis, staphylococcal scalded skin syndrome); the **bulla spread sign** extends an existing blister with pressure.",
        "**Darier sign** - rubbing a lesion produces a wheal and erythema, positive in urticaria pigmentosa and mastocytosis.",
        "**Wood's lamp** in a dark room: coral-red in erythrasma, greenish-yellow in Microsporum tinea capitis, golden-yellow in pityriasis versicolor, and bright blue-white with sharp margins in vitiligo, which also unmasks subclinical lesions.",
        "**KOH mount** with 10 per cent potassium hydroxide from the active scaly edge, and a **slit-skin smear** for acid-fast bacilli where leprosy is suspected, are bedside investigations you should offer before naming an expensive test.",
      ],
    },
    {
      heading: "From description to differential",
      points: [
        "Convert the description into a pattern before naming a disease: **papulosquamous** (psoriasis, lichen planus, pityriasis rosea, secondary syphilis, tinea), **eczematous**, **vesiculobullous**, **urticarial**, **pustular**, **granulomatous**, **hypopigmented** or **ulcerative**.",
        "An annular, scaly plaque with a raised active edge and central clearing is **dermatophytosis** until a KOH is negative; an annular plaque with a dry anaesthetic surface and no scale is **borderline tuberculoid leprosy**; an annular plaque with induration and apple-jelly nodules is **lupus vulgaris**.",
        "A well-defined erythematous plaque with silvery scale over the extensors with nail pitting is **psoriasis**; violaceous flat-topped polygonal pruritic papules with Wickham striae on the flexor wrists is **lichen planus**.",
        "Grouped vesicles on an erythematous base in a dermatome is **herpes zoster**; flaccid bullae with erosions and oral ulcers is **pemphigus vulgaris**; tense bullae in an elderly patient with intact mucosa is **bullous pemphigoid**.",
        "Then justify the first diagnosis in one sentence with the two positive features and one negative feature, and offer the single test that would settle it - that sentence is what the examiner writes the mark against.",
      ],
    },
  ],
  tables: [
    {
      heading: "Primary lesions by size and content",
      columns: ["Lesion", "Under 1 cm", "1 cm or more", "Typical example"],
      rows: [
        ["Flat colour change", "Macule", "Patch", "Vitiligo, leprosy patch, freckle"],
        ["Solid elevation", "Papule", "Plaque (flat-topped) or nodule (deep)", "Lichen planus papule, psoriatic plaque"],
        ["Clear fluid", "Vesicle", "Bulla", "Herpes zoster, pemphigus"],
        ["Pus", "Pustule", "Abscess (deep, fluctuant)", "Acne, furuncle"],
        ["Transient oedema", "Wheal", "Giant wheal or angioedema", "Urticaria"],
        ["Extravasated blood", "Petechia (under 3 mm)", "Ecchymosis", "Vasculitis, thrombocytopenia"],
      ],
    },
    {
      heading: "Margin and edge: the word that names the disease",
      columns: ["Edge described", "Diagnosis it points to"],
      rows: [
        ["Raised, active, scaly with central clearing", "Tinea corporis"],
        ["Rolled, pearly, with telangiectasia", "Basal cell carcinoma"],
        ["Everted with a keratotic base", "Squamous cell carcinoma"],
        ["Undermined and bluish", "Tuberculous or atypical mycobacterial ulcer"],
        ["Punched out with a pale base", "Trophic or arterial ulcer"],
        ["Sloping with granulation tissue", "Venous ulcer"],
        ["Violaceous, overhanging and boggy", "Pyoderma gangrenosum"],
      ],
    },
  ],
  redFlags: [
    "Skin pain out of proportion to the visible rash, dusky skin or crepitus - necrotising soft tissue infection, surgical emergency.",
    "A positive Nikolsky sign with mucosal erosions and a new drug in the last three weeks - Stevens-Johnson syndrome or toxic epidermal necrolysis, admit today.",
    "Palpable purpura with fever, joint pain, abdominal pain or haematuria - systemic vasculitis, needs urine analysis and same-day referral.",
    "Erythroderma (more than 90 per cent of the skin red and scaly) with shivering, tachycardia or hypotension - admit for fluid, temperature and electrolyte management.",
    "A chronic non-healing ulcer in an old burn scar or a long-standing sinus with everted edges - Marjolin ulcer, biopsy urgently.",
    "A pigmented lesion that has changed in size, shape or colour, or bleeds, especially on the sole or under a nail - excision biopsy for melanoma, never a shave biopsy.",
    "Any hypopigmented patch with definite sensory loss or a thickened peripheral nerve - leprosy, register and start multidrug therapy.",
  ],
  pearls: [
    "Describe first, diagnose second; the short case mark sheet gives more to a full description than to a correct label without one.",
    "Hypopigmented is not depigmented: leprosy patches are hypopigmented, dry and anaesthetic, vitiligo is chalk-white with normal sensation and normal texture.",
    "An erosion heals without a scar, an ulcer never does - say which one you are looking at.",
    "Excoriations are the objective sign of itch; their absence in a patient who claims severe itch is worth commenting on.",
    "Never call a lesion 'itchy' in the description - itch is a symptom from the history, not a morphological finding.",
    "Always test sensation and palpate nerves over any hypopigmented patch before you leave the bedside; forgetting this in an Indian examination is a near-automatic fail.",
    "Look at the nails, scalp, palms, soles and mucosae in every dermatology case - psoriasis, lichen planus, secondary syphilis and pemphigus are diagnosed there.",
    "The words 'well-defined' and 'symmetrically distributed' earn marks; 'a rash all over' earns none.",
  ],
  theory: [
    {
      id: "dermatology-lesion-description-t1",
      paper: "III",
      kind: "define-classify",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Define primary and secondary skin lesions. Classify them with examples, and describe how you would present a solitary skin lesion in a clinical examination.",
      openingLines: [
        "A primary skin lesion is the basic, unaltered lesion that arises directly from the disease process, while a secondary lesion results from evolution of a primary lesion or from external factors such as scratching, infection, treatment or healing.",
        "Accurate morphological description is the foundation of dermatological diagnosis, because most dermatoses are diagnosed clinically by pattern recognition before any investigation is done.",
      ],
      answer: [
        {
          heading: "1. Primary lesions with examples",
          points: [
            "Macule - flat circumscribed colour change under 1 cm (freckle, leprosy patch); patch - the same 1 cm or larger (vitiligo).",
            "Papule - solid elevation under 1 cm (lichen planus); plaque - flat-topped elevation 1 cm or larger (psoriasis); nodule - solid lesion over 1 cm with dermal or subcutaneous depth (erythema nodosum).",
            "Vesicle - fluid-filled under 1 cm (herpes simplex); bulla - 1 cm or larger (pemphigus, bullous pemphigoid); pustule - pus-filled (acne, pustular psoriasis).",
            "Wheal - transient oedematous elevation resolving within 24 hours (urticaria); cyst - epithelium-lined sac containing fluid or keratin.",
            "Purpura, petechiae and ecchymoses - non-blanching extravasated blood; telangiectasia, comedone, burrow and the target lesion are further specialised primary lesions.",
          ],
        },
        {
          heading: "2. Secondary lesions with examples",
          points: [
            "Scale (psoriasis, ichthyosis), crust (impetigo), erosion (pemphigus, healing without scar) and ulcer (trophic ulcer, healing with scar).",
            "Excoriation (scabies, eczema), fissure (hand eczema, cracked heel), lichenification (chronic eczema, lichen simplex chronicus).",
            "Atrophy and striae (topical corticosteroid abuse), scar (atrophic, hypertrophic, keloid), sclerosis (morphoea, systemic sclerosis).",
            "Eschar, sinus, maceration and post-inflammatory hyper- or hypopigmentation complete the list.",
          ],
        },
        {
          heading: "3. Presenting a solitary lesion",
          points: [
            "State the number and the exact anatomical site with reference to a bony landmark, and whether the pattern is photo-exposed, dermatomal, acral or flexural.",
            "Give the size in centimetres in two dimensions, the shape (round, oval, annular, polycyclic, irregular), and the surface (smooth, scaly, verrucous, crusted, eroded, ulcerated).",
            "Describe the margin (well or ill defined, raised, active, rolled, everted, undermined, sloping) and the colour, distinguishing hypopigmented from depigmented and erythematous from violaceous.",
            "Palpate for consistency, induration, tenderness, warmth and fixity to underlying structures; test sensation over the lesion and examine the hair over it.",
            "State the arrangement in relation to other lesions, then the secondary changes, then examine the whole skin, hair, nails, mucosae, peripheral nerves and regional lymph nodes.",
          ],
        },
        {
          heading: "4. Bedside signs and first-line tests to offer",
          points: [
            "Auspitz sign and grattage test for psoriasis, Nikolsky and bulla spread sign for pemphigus, Darier sign for mastocytosis, diascopy for purpura and lupus vulgaris.",
            "Wood's lamp examination, KOH mount from the active edge, slit-skin smear for acid-fast bacilli, Tzanck smear for acantholytic cells, and skin biopsy where the diagnosis remains in doubt.",
          ],
        },
      ],
      mustDraw: [
        "A two-column table of primary versus secondary lesions with one example each.",
        "A labelled line diagram of a macule, papule, plaque, nodule, vesicle and bulla in cross-section through the epidermis and dermis.",
      ],
      markSplit: [
        { part: "Definitions of primary and secondary lesions", marks: 2 },
        { part: "Classification of primary lesions with examples", marks: 3 },
        { part: "Secondary lesions with examples", marks: 2 },
        { part: "Sequence of describing a lesion and bedside signs", marks: 3 },
      ],
      keywords: ["primary lesion", "secondary lesion", "macule", "plaque", "Nikolsky", "morphology"],
    },
    {
      id: "dermatology-lesion-description-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the clinical approach to a hypopigmented macule in an Indian adult.",
      openingLines: [
        "A hypopigmented macule is a flat lesion with partial loss of pigment, as distinct from a depigmented macule in which pigment loss is complete and the lesion is chalk-white.",
        "In India the first duty in any hypopigmented patch is to exclude leprosy by testing sensation and palpating the peripheral nerves.",
      ],
      answer: [
        {
          heading: "Differential diagnosis",
          points: [
            "Indeterminate or tuberculoid leprosy - dry, hypopigmented, anaesthetic, hairless, with a thickened nerve.",
            "Pityriasis versicolor - fine branny scale on the upper trunk, positive scratch sign, golden-yellow fluorescence on Wood's lamp, budding yeasts with hyphae on KOH.",
            "Pityriasis alba - ill-defined scaly patches on the cheeks of atopic children.",
            "Post-inflammatory hypopigmentation following eczema, psoriasis or a burn; nevus depigmentosus and naevus anaemicus present since birth.",
            "Vitiligo is depigmented and not hypopigmented, but is the commonest source of confusion for the patient and the family.",
          ],
        },
        {
          heading: "Clinical examination",
          points: [
            "Number, site, size, margin, surface scaling and colour; a sharply defined dry patch with a raised erythematous edge suggests borderline tuberculoid leprosy.",
            "Test touch, pain and temperature with the eyes closed; check for loss of hair and loss of sweating over the patch.",
            "Palpate all accessible peripheral nerves for thickening and tenderness, and perform a voluntary muscle test and sensory testing of hands and feet.",
          ],
        },
        {
          heading: "Investigations and management principles",
          points: [
            "Bedside: KOH mount, Wood's lamp, slit-skin smear from both ear lobes and the lesion edge for the bacteriological index.",
            "Skin biopsy where doubt persists; no investigation is needed for classical pityriasis alba.",
            "Treat the cause: multidrug therapy for leprosy after classification, topical ketoconazole or oral fluconazole for pityriasis versicolor, emollients and mild topical steroid for pityriasis alba.",
            "Counsel that repigmentation lags behind cure by months, and record the finding in the patient-held card.",
          ],
        },
      ],
      markSplit: [
        { part: "Differential diagnosis", marks: 2 },
        { part: "Examination including sensation and nerves", marks: 2 },
        { part: "Investigations and treatment", marks: 1 },
      ],
      keywords: ["hypopigmented macule", "leprosy", "pityriasis versicolor", "pityriasis alba", "slit-skin smear"],
    },
  ],
  mcqs: [
    {
      id: "dermatology-lesion-description-q1",
      stem: "A 30-year-old man has multiple raised, flat-topped, well-defined lesions on the extensor aspect of both elbows, each measuring 3 by 4 cm and covered by silvery-white scale. What is the correct morphological term for these lesions?",
      options: ["Papules", "Plaques", "Nodules", "Patches", "Wheals"],
      answer: 1,
      explanation:
        "An elevated, flat-topped lesion 1 cm or larger is a plaque, and psoriasis is the classical plaque disease. Papules are elevated but under 1 cm, so the 3 by 4 cm size excludes them. Nodules are over 1 cm but derive their bulk from the dermis or subcutis and are palpated in depth rather than seen as flat-topped. A patch is a flat lesion with no elevation, and a wheal is a transient oedematous swelling that disappears within 24 hours, neither of which fits a scaly elevated lesion.",
      difficulty: "easy",
    },
    {
      id: "dermatology-lesion-description-q2",
      stem: "A 45-year-old woman has flaccid blisters and painful oral erosions. On applying firm lateral shearing pressure to clinically normal skin adjacent to a lesion, the epidermis peels away. Which sign has been elicited, and what does it indicate?",
      options: [
        "Bulla spread sign, indicating a subepidermal split",
        "Nikolsky sign, indicating an intraepidermal split from acantholysis",
        "Darier sign, indicating mast cell degranulation",
        "Auspitz sign, indicating suprapapillary thinning",
        "Koebner phenomenon, indicating an isomorphic response",
      ],
      answer: 1,
      explanation:
        "Shearing pressure on normal-looking skin causing epidermal separation is the Nikolsky sign, positive when the split is intraepidermal from acantholysis, as in pemphigus vulgaris, and also in toxic epidermal necrolysis and staphylococcal scalded skin syndrome. The bulla spread sign is different: pressure on an existing blister extends it laterally. Darier sign is a wheal on rubbing a mastocytoma, Auspitz is pinpoint bleeding after removing psoriatic scale, and Koebner is the appearance of new lesions at sites of trauma - none involves shearing normal skin.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-lesion-description-q3",
      stem: "A 25-year-old farmer has a single 5 cm annular lesion on the left cheek with a dry, hairless, hypopigmented surface, a slightly raised erythematous margin, and no scaling. Cotton wool touch is not felt over the lesion. What is the single most useful next bedside step?",
      options: [
        "KOH mount from the edge of the lesion",
        "Palpation of the peripheral nerves and a slit-skin smear",
        "Wood's lamp examination in a dark room",
        "Patch testing for contact allergens",
        "Tzanck smear from the lesion",
      ],
      answer: 1,
      explanation:
        "An anaesthetic, dry, hairless annular patch is leprosy until proved otherwise, so the next steps are palpation of peripheral nerves for thickening and a slit-skin smear to classify the disease and start the correct multidrug therapy regimen. A KOH mount is the right test for a scaly annular plaque, but this lesion has no scale and, decisively, tinea is never anaesthetic. Wood's lamp helps in pityriasis versicolor and vitiligo, patch testing addresses allergic contact dermatitis, and a Tzanck smear is used for vesiculobullous lesions - none of these addresses sensory loss.",
      difficulty: "easy",
    },
    {
      id: "dermatology-lesion-description-q4",
      stem: "In a patient with a chronic leg lesion, which described edge would most strongly suggest a squamous cell carcinoma?",
      options: [
        "Sloping edge with healthy granulation tissue",
        "Undermined bluish edge",
        "Everted edge with a keratotic, indurated base",
        "Punched-out edge with a pale, dry base",
        "Rolled, pearly edge with surface telangiectasia",
      ],
      answer: 2,
      explanation:
        "An everted edge with induration and a keratotic base is the classical description of squamous cell carcinoma, which grows outwards and heaps over the ulcer margin. A sloping edge is typical of a venous ulcer, an undermined bluish edge of a tuberculous ulcer, and a punched-out edge of a trophic or arterial ulcer. A rolled pearly edge with telangiectasia describes basal cell carcinoma, which is a distinct tumour that almost never metastasises and occurs on the face rather than the leg.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-lesion-description-q5",
      stem: "A 6-year-old boy has multiple sharply marginated hypopigmented macules on the upper back with fine branny scale that becomes obvious on scratching the surface. Wood's lamp shows golden-yellow fluorescence. Which term best describes the surface finding elicited by scratching?",
      options: [
        "Auspitz sign",
        "Grattage or scratch sign (coup d'ongle)",
        "Nikolsky sign",
        "Darier sign",
        "Pathergy",
      ],
      answer: 1,
      explanation:
        "Scratching the surface to reveal fine scale that was not visible before is the scratch or grattage sign, characteristic of pityriasis versicolor and confirmed here by golden-yellow Wood's lamp fluorescence. Auspitz sign is pinpoint bleeding after removing the scale of psoriasis, one step further than simply revealing scale. Nikolsky sign involves epidermal shearing in blistering disease, Darier sign is urtication of a mastocytoma on rubbing, and pathergy is pustule formation at a needle prick in Behcet disease.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-lesion-description-q6",
      stem: "Which single feature best distinguishes an erosion from an ulcer at the bedside?",
      options: [
        "An erosion is painful whereas an ulcer is painless",
        "An erosion involves only the epidermis and heals without scarring, an ulcer extends into the dermis and always scars",
        "An erosion is always secondary to a vesicle, an ulcer is always primary",
        "An erosion is smaller than 1 cm and an ulcer is larger",
        "An erosion has an undermined edge and an ulcer a sloping edge",
      ],
      answer: 1,
      explanation:
        "Depth is the defining difference: an erosion is confined to the epidermis and heals without a scar, while an ulcer breaches the dermis and always heals with a scar. Pain is unreliable, as trophic ulcers are painless and erosions of pemphigus are exquisitely painful. Size is irrelevant to the definition, both may be of any size, and edge characters describe the type of ulcer rather than separating the two terms.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "dermatology-lesion-description-c1",
      front: "Papule versus plaque versus nodule.",
      back: "Papule: solid elevation under 1 cm. Plaque: flat-topped elevation 1 cm or more. Nodule: solid lesion over 1 cm with dermal or subcutaneous depth.",
    },
    {
      id: "dermatology-lesion-description-c2",
      front: "Vesicle versus bulla - the cut-off.",
      back: "1 cm. Fluid-filled under 1 cm is a vesicle, 1 cm or larger is a bulla.",
    },
    {
      id: "dermatology-lesion-description-c3",
      front: "The fixed order for describing a lesion in the short case.",
      back: "Number, site and distribution, size in cm, shape, surface, margin, colour, consistency, arrangement, secondary changes - then sensation, nerves, hair, nails, mucosae and nodes.",
    },
    {
      id: "dermatology-lesion-description-c4",
      front: "Erosion versus ulcer.",
      back: "Erosion: epidermis only, heals without scar. Ulcer: into dermis or deeper, always heals with a scar.",
    },
    {
      id: "dermatology-lesion-description-c5",
      front: "Hypopigmented versus depigmented - why it matters.",
      back: "Hypopigmented means partial pigment loss (leprosy, pityriasis versicolor, pityriasis alba); depigmented means chalk-white total loss (vitiligo). The word chosen changes the differential.",
    },
    {
      id: "dermatology-lesion-description-c6",
      front: "Wood's lamp colours worth remembering.",
      back: "Coral-red: erythrasma. Golden-yellow: pityriasis versicolor. Greenish-yellow: Microsporum tinea capitis. Bright blue-white with sharp margins: vitiligo.",
    },
    {
      id: "dermatology-lesion-description-c7",
      front: "Nikolsky sign versus bulla spread sign.",
      back: "Nikolsky: shearing normal-looking skin peels the epidermis (pemphigus, TEN, SSSS). Bulla spread: pressure on an existing blister extends it laterally.",
    },
    {
      id: "dermatology-lesion-description-c8",
      front: "Which peripheral nerves must be palpated in every skin case in India?",
      back: "Ulnar above the elbow, median at the wrist, radial cutaneous, common peroneal at the neck of fibula, posterior tibial behind the medial malleolus, great auricular and supraorbital.",
    },
    {
      id: "dermatology-lesion-description-c9",
      front: "Edge of the lesion: rolled and pearly, everted, undermined, punched out.",
      back: "Rolled and pearly - basal cell carcinoma; everted - squamous cell carcinoma; undermined - tuberculous ulcer; punched out - trophic or arterial ulcer.",
    },
    {
      id: "dermatology-lesion-description-c10",
      front: "Define a wheal.",
      back: "A transient, itchy, oedematous elevation with a surrounding flare that resolves within 24 hours leaving no residual mark - the defining lesion of urticaria.",
    },
    {
      id: "dermatology-lesion-description-c11",
      front: "What is lichenification and what does it tell you?",
      back: "Thickened skin with exaggerated skin markings and hyperpigmentation from chronic rubbing - it proves the itch is long-standing (chronic eczema, lichen simplex chronicus).",
    },
    {
      id: "dermatology-lesion-description-c12",
      front: "Papulosquamous differential in one line.",
      back: "Psoriasis, lichen planus, pityriasis rosea, tinea corporis, secondary syphilis, chronic eczema and pityriasis rubra pilaris.",
    },
  ],
  references: [
    "IADVL Textbook of Dermatology, 5th edition, 2022 - approach to the patient and morphology of skin lesions",
    "Rook's Textbook of Dermatology, 10th edition, 2024 - clinical examination of the skin",
    "Fitzpatrick's Dermatology in General Medicine, 9th edition, 2019 - structure of skin lesions",
    "Neena Khanna, Illustrated Synopsis of Dermatology and Sexually Transmitted Diseases, 6th edition, 2020",
  ],
});

topics.push({
  id: "dermatology-scabies-pediculosis",
  title: "Scabies and pediculosis, including treatment of the whole household",
  oneLiner:
    "Scabies is an intensely pruritic infestation by the mite Sarcoptes scabiei var. hominis in which nocturnal itch, burrows and papules in the finger webs, wrists, axillae, waist and genitalia, together with a history of itching in other members of the household, make the diagnosis clinically, and the cure depends entirely on treating every contact simultaneously with topical permethrin 5 per cent or oral ivermectin plus decontamination of clothes and bedding.",
  frequency: "core",
  keywords: [
    "scabies",
    "Sarcoptes scabiei",
    "burrow",
    "nocturnal pruritus",
    "permethrin",
    "ivermectin",
    "benzyl benzoate",
    "crusted scabies",
    "Norwegian scabies",
    "pediculosis capitis",
    "pediculosis corporis",
    "Pthirus pubis",
    "nits",
    "malathion",
    "post-scabetic itch",
    "dermoscopy delta sign",
    "impetigo",
    "household contacts",
  ],
  sections: [
    {
      heading: "The organism, the transmission and why the whole family matters",
      points: [
        "Scabies is caused by **Sarcoptes scabiei var. hominis**, an obligate human mite; the fertilised female burrows into the stratum corneum at about 2 mm a day and lays two to three eggs daily for a life of four to six weeks, and an ordinary patient carries only **10 to 15 adult mites** on the whole body.",
        "Transmission needs **prolonged skin-to-skin contact of 15 to 20 minutes**, which is why it runs through households, hostels, orphanages, prisons and shared beds rather than through a handshake; fomite transmission through shared clothes and bedding is real but secondary, except in crusted scabies where it becomes the dominant route.",
        "The itch is a **type IV delayed hypersensitivity reaction to mite antigen, faeces and eggs**, so a first infestation stays silent for **four to six weeks** before itching begins, while a re-infestation itches within one to four days - this incubation period is the reason asymptomatic contacts must still be treated.",
        "In Indian general practice scabies clusters in the rainy and winter months, in overcrowded housing and where water for washing is short; the classical examination history is **itching worse at night that disturbs sleep, with at least one other person in the house itching**.",
        "Scabies has been a **WHO-recognised neglected tropical disease since 2017**, with an estimated 200 million people affected at any time, and in India it is one of the commonest reasons for a skin consultation in primary care.",
        "Untreated scabies in children is a major driver of **streptococcal pyoderma and therefore of acute post-streptococcal glomerulonephritis and acute rheumatic fever**, which is why treating scabies is a public health act and not merely a comfort measure.",
      ],
    },
    {
      heading: "Clinical features and the lesion vocabulary to use",
      points: [
        "Describe the eruption in the fixed order - **number, site and distribution, size, shape, surface, margin, colour, arrangement and secondary change**; in scabies the answer is multiple, symmetrical, 1 to 3 mm erythematous **papules and papulovesicles with excoriations and crusting**, discrete but grouped, in a characteristic distribution below the neck.",
        "The **pathognomonic primary lesion is the burrow**: a 3 to 10 mm greyish, serpiginous or S-shaped thread-like ridge with a minute vesicle or black dot (the mite) at one end, best seen on the finger webs, the sides of the fingers, the flexor wrists and the ulnar border of the hand.",
        "**Sites of predilection** - finger webs, flexor wrists, elbows, anterior axillary folds, periumbilical skin and waist, buttocks, areolae in women, and the penis and scrotum in men; **itchy papules or nodules on the glans, shaft and scrotum of an adult male are close to diagnostic of scabies**.",
        "**The head and neck are spared in adults but involved in infants and in the elderly**; in infants under two years the palms, soles, scalp and face carry vesicles, pustules and nodules, and secondary eczematisation is the rule rather than the exception.",
        "Secondary lesions dominate what you actually see: **excoriations proving the itch, honey-coloured crusts of secondary impetigo, eczematisation and post-inflammatory hyperpigmentation**; lichenification appears where the patient has scratched for months.",
        "**Nodular scabies** presents as firm, reddish-brown, intensely itchy 5 to 10 mm nodules on the scrotum, penis, groins and axillae that represent a persistent hypersensitivity granuloma and may **persist for weeks to months after the mite is dead**, needing intralesional or potent topical steroid rather than more scabicide.",
      ],
    },
    {
      heading: "Variants that change the management",
      points: [
        "**Crusted (Norwegian) scabies** occurs in HIV infection, human T-lymphotropic virus 1 infection, lepromatous leprosy, malnutrition, Down syndrome, dementia, paralysis and long-term topical or systemic steroid use, and carries **thousands to millions of mites** rather than a dozen.",
        "It presents as **thick, warty, fissured hyperkeratotic crusts on the hands, feet, elbows, scalp and under the nails, with gross nail dystrophy and subungual debris, and characteristically little or no itch**; it is highly contagious and is the usual index case behind an institutional outbreak.",
        "Crusted scabies needs **combined therapy - a keratolytic such as 5 per cent salicylic acid or 10 per cent urea ointment, topical permethrin daily then twice weekly, plus oral ivermectin 200 microgram per kilogram on days 1, 2, 8, 9 and 15, extended to days 22 and 29 in severe disease** - together with barrier nursing using gowns and gloves.",
        "**Scabies incognito** results from topical or systemic steroids that suppress the inflammatory response: the eruption becomes atypical and widespread, burrows are hard to find, and the itch is disproportionate to a bland-looking rash - a common trap in India where potent steroid combination creams are sold over the counter.",
        "**Bullous scabies** in the elderly mimics bullous pemphigoid, and scabies in the scrupulously clean patient may show only a handful of papules on the wrists; both are diagnosed by taking the household history seriously rather than by any test.",
        "**Secondary bacterial infection** with Staphylococcus aureus or Streptococcus pyogenes produces impetigo, ecthyma, folliculitis or cellulitis, and must be treated with oral cloxacillin or amoxicillin-clavulanate alongside the scabicide.",
      ],
    },
    {
      heading: "Diagnosis, differential diagnosis and bedside tests",
      points: [
        "Scabies is a **clinical diagnosis** made on the triad of nocturnal itch, typical distribution and an affected household contact; the 2020 International Alliance for the Control of Scabies (IACS) criteria grade it as confirmed (mite, egg or faecal pellet seen), clinical (burrows, or typical genital or infantile lesions) or suspected.",
        "**Skin scraping**: place a drop of mineral oil or 10 per cent potassium hydroxide on an unexcoriated burrow or papule, scrape with a number 15 blade held tangentially until pinpoint bleeding appears, and look under low power for **mites, oval eggs or brown faecal pellets (scybala)**.",
        "**Burrow ink test** - rub fountain-pen ink over a suspected burrow and wipe with alcohol, and retained ink outlines a zig-zag track; **dermoscopy** shows the dark triangular head and mouthparts of the mite at the end of the burrow, the **delta-wing jet or hang-glider sign**.",
        "**Differential diagnosis** - papular urticaria from insect bites (grouped seropapules on exposed limbs, no burrows, no genital lesions), atopic dermatitis (flexural, personal or family atopy, no household clustering), pediculosis corporis (lesions where clothing seams touch the trunk), contact dermatitis, dermatitis herpetiformis and the papular pruritic eruption of HIV.",
        "**Post-scabetic itch** persists for two to four weeks after successful treatment because antigen remains in the stratum corneum; treat it with emollients, a mild to moderate topical steroid and an oral antihistamine, and **do not repeat the scabicide**, because repeated application itself causes an irritant dermatitis that mimics failure.",
        "Suspect **true treatment failure** only if new burrows or new papules appear more than two weeks after treatment, and then ask about the three real causes - untreated contacts, incorrect application technique, and failure to decontaminate clothing and bedding.",
      ],
    },
    {
      heading: "Treatment of the patient and of the whole household",
      points: [
        "**Permethrin 5 per cent cream is first line at all ages above two months and in pregnancy and lactation**: apply to the whole body from the neck down (including face and scalp in infants, the elderly and the immunosuppressed), leave for **8 to 14 hours overnight**, wash off, and **repeat once after 7 days** to kill mites hatching from eggs that survived the first application.",
        "Application technique earns the mark: **apply after a bath to cool dry skin, cover every fold - behind the ears, umbilicus, natal cleft, genitalia, under the breasts, and under the finger and toe nails after cutting them short - and reapply to the hands after every hand wash**; an adult needs about 30 grams per application.",
        "**Oral ivermectin 200 microgram per kilogram as a single dose repeated after 7 to 14 days** is preferred for institutional outbreaks, crusted scabies, treatment failure and wherever topical application cannot be supervised; it is **not recommended under 15 kilograms or under 5 years, and is avoided in pregnancy and lactation**, and is taken with food to improve absorption.",
        "Alternatives - **benzyl benzoate 25 per cent lotion** (diluted to 12.5 per cent for children and 6.25 per cent for infants) on three consecutive nights, cheap and effective but stinging; **sulphur 5 to 10 per cent in petrolatum** for three consecutive nights, malodorous and staining but the safest option under two months and in pregnancy; **crotamiton 10 per cent**, antipruritic but the least effective; **lindane is no longer recommended** because of neurotoxicity.",
        "**Treat every household member and every close physical or sexual contact of the last six weeks on the same day, whether or not they itch**, because contacts are in the asymptomatic incubation period and will otherwise re-infest the index case - this single sentence is the most examined point in the topic.",
        "**Decontamination**: machine wash clothes, towels and bed linen used in the last three days at above 60 degrees Celsius and dry in the sun or a hot dryer, or iron them; items that cannot be washed are **sealed in a plastic bag for 72 hours to seven days**, since the mite dies within 2 to 3 days away from human skin, and **fumigation of the house is unnecessary**.",
        "Treat the consequences too: **an oral antihistamine such as hydroxyzine 25 mg at night or cetirizine 10 mg, emollients, and oral antibiotics for pyoderma**; check the urine and blood pressure of a child three weeks after streptococcal impetigo, and screen for other sexually transmitted infections when scabies has been acquired sexually.",
      ],
    },
    {
      heading: "Pediculosis: head, body and pubic lice",
      points: [
        "**Pediculosis capitis** is caused by Pediculus humanus capitis, spreads by head-to-head contact and shared combs in school children, and presents with occipital and retroauricular itch, excoriation, occipital lymphadenopathy and secondary impetigo; diagnosis requires **finding a live louse, since nits (empty egg cases) cemented to the hair shaft persist long after cure**.",
        "Treat head lice with **permethrin 1 per cent cream rinse on damp hair for 10 minutes, or 5 per cent cream for 8 hours, repeated after 7 days**, or **malathion 0.5 per cent lotion for 8 to 12 hours**, adding **wet combing with a fine-toothed nit comb and conditioner every 3 to 4 days for two weeks**; oral ivermectin 200 microgram per kilogram on days 1 and 8 is kept for resistant cases.",
        "**Pediculosis corporis** is a disease of poverty and homelessness: the louse **lives and lays its eggs in the seams of clothing and not on the body**, producing itchy excoriated papules and, over years, the pigmented lichenified back of **vagabond's disease**; treatment is **hot washing, ironing or discarding the clothing plus personal hygiene**, with permethrin to the skin only if lice are found there.",
        "The body louse is a **vector of epidemic typhus (Rickettsia prowazekii), trench fever (Bartonella quintana) and louse-borne relapsing fever (Borrelia recurrentis)**, whereas the head louse and the pubic louse transmit no systemic disease - a standard viva contrast.",
        "**Pediculosis pubis** is caused by Pthirus pubis, is sexually transmitted, and causes pubic itch with **bluish-grey macules (maculae ceruleae)** and rust-coloured specks of louse faeces on the underclothes; treat with permethrin, treat sexual partners of the previous month, and **screen for HIV, syphilis and other sexually transmitted infections**.",
        "**Phthiriasis palpebrarum** - pubic lice on the eyelashes of a child - raises the question of sexual abuse and is treated with **thick petrolatum to the lid margins twice daily for 8 to 10 days with mechanical removal**, never with a neurotoxic pediculicide near the eye.",
      ],
    },
  ],
  tables: [
    {
      heading: "Scabicides: dose, contact time and safety",
      columns: ["Drug", "Strength and route", "Contact time and repeat", "Safe in", "Cautions"],
      rows: [
        ["Permethrin", "5 per cent cream, topical", "8 to 14 hours overnight, repeat day 7", "Above 2 months, pregnancy, lactation", "Costliest topical, mild burning"],
        ["Ivermectin", "200 microgram/kg orally", "Single dose, repeat day 7 to 14", "Adults and children above 15 kg", "Avoid under 5 years, pregnancy, lactation"],
        ["Benzyl benzoate", "25 per cent lotion, diluted for children", "Three consecutive nights", "Adults and older children", "Stings excoriated skin, irritant dermatitis"],
        ["Sulphur", "5 to 10 per cent in petrolatum", "Three consecutive nights", "Infants under 2 months, pregnancy", "Malodorous, stains clothing"],
        ["Crotamiton", "10 per cent cream or lotion", "Two to five consecutive nights", "Children, useful as antipruritic", "Least effective scabicide"],
        ["Lindane", "1 per cent lotion", "8 hours, single application", "Not recommended at any age", "Neurotoxicity, seizures, aplastic anaemia"],
      ],
    },
    {
      heading: "The three pediculoses compared",
      columns: ["Feature", "Pediculosis capitis", "Pediculosis corporis", "Pediculosis pubis"],
      rows: [
        ["Organism", "Pediculus humanus capitis", "Pediculus humanus corporis", "Pthirus pubis, the crab louse"],
        ["Where the louse lives", "Scalp hair close to the skin", "Seams of clothing", "Pubic, axillary and beard hair, eyelashes"],
        ["Typical patient", "School child, girls more than boys", "Homeless or destitute, unwashed clothing", "Sexually active adult"],
        ["Key sign", "Nits cemented to hair, occipital nodes", "Excoriated back, vagabond pigmentation", "Maculae ceruleae, rusty specks on underwear"],
        ["Vector of systemic disease", "No", "Typhus, trench fever, relapsing fever", "No"],
        ["Treatment", "Permethrin plus wet combing, repeat day 7", "Wash, iron or discard clothing, hygiene", "Permethrin, partner treatment, STI screen"],
      ],
    },
  ],
  redFlags: [
    "Thick hyperkeratotic crusts with nail dystrophy and little itch - crusted scabies; isolate, look for HIV or other immunosuppression and start combined ivermectin with topical therapy.",
    "Fever, spreading erythema, tenderness or lymphangitis over excoriated scabies - cellulitis needing systemic antibiotics the same day.",
    "Puffy eyelids, smoky urine or hypertension two to three weeks after impetiginised scabies in a child - acute post-streptococcal glomerulonephritis; check urine and blood pressure.",
    "An outbreak in a hostel, orphanage or old age home, or a bedridden index patient - mass treatment of all residents and staff on a single day is required, not case-by-case treatment.",
    "Widespread atypical scabies in an adult, or scabies with failure to thrive in an infant - test for HIV and look for underlying immunosuppression.",
    "Pubic lice on the eyelashes of a prepubertal child - evaluate for sexual abuse under the POCSO framework and involve the child protection pathway.",
  ],
  pearls: [
    "The mark-carrying sentence is: treat all household and close contacts simultaneously on the same day whether or not they itch, and decontaminate clothes and bedding.",
    "Itch that wakes the patient at night plus another itching person in the house is scabies until proved otherwise, even when no burrow can be found.",
    "Itchy papules or nodules on the scrotum or penis in a man, and on the areolae in a woman, are close to diagnostic of scabies.",
    "Adults are spared above the neck, infants are not - always treat the scalp and face in a baby under two years and in the immunosuppressed.",
    "Post-scabetic itch lasts two to four weeks and is treated with emollients, a mild steroid and an antihistamine, never with more scabicide.",
    "Permethrin needs a second application on day 7 because it is not reliably ovicidal; omitting it is the commonest reason for apparent treatment failure.",
    "Nits alone do not mean active head lice - look for a live moving louse before re-treating a school child.",
    "Crusted scabies does not itch, and the patient who does not itch is the one who infests the whole ward.",
  ],
  theory: [
    {
      id: "dermatology-scabies-pediculosis-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "A 24-year-old man presents with intense itching, worse at night, for three weeks. His wife and two children are also itching. Describe the clinical features, diagnosis and complete management of this condition, including management of the household.",
      openingLines: [
        "This is scabies, an infestation of the stratum corneum by the mite Sarcoptes scabiei var. hominis, transmitted by prolonged skin-to-skin contact, presenting with nocturnal pruritus, burrows and papules in a characteristic distribution, with clustering of cases within a household.",
        "The itch is a delayed type IV hypersensitivity response to mite antigen appearing four to six weeks after a first infestation and within one to four days on re-infestation, which is why asymptomatic contacts must also be treated.",
      ],
      answer: [
        {
          heading: "1. Clinical features",
          points: [
            "Symptom - generalised itching characteristically worse at night and on warming in bed, disturbing sleep, with similar itching in family members or bed partners.",
            "Primary lesions - the burrow, a 3 to 10 mm greyish serpiginous ridge with a vesicle or black dot at one end, with 1 to 3 mm erythematous papules and papulovesicles.",
            "Distribution - finger webs, sides of fingers, flexor wrists, elbows, anterior axillary folds, periumbilical area and waist, buttocks, areolae in women, penis and scrotum in men; head and neck spared in adults but involved in infants.",
            "Secondary lesions - excoriations, eczematisation, honey-coloured crusts of impetigo, lichenification and post-inflammatory hyperpigmentation.",
            "Variants - nodular scabies on the genitalia, crusted (Norwegian) scabies in the immunosuppressed, scabies incognito after steroid use, and bullous scabies in the elderly.",
          ],
        },
        {
          heading: "2. Diagnosis",
          points: [
            "Clinical, using the IACS 2020 criteria - confirmed when a mite, egg or faecal pellet is demonstrated, clinical when burrows or typical genital or infantile lesions are present, suspected on typical distribution with a contact history.",
            "Skin scraping in mineral oil or 10 per cent KOH from an unexcoriated burrow, showing mites, eggs or scybala.",
            "Burrow ink test and dermoscopy showing the delta-wing jet sign of the mite at the end of a burrow.",
            "Differential diagnosis - papular urticaria, atopic dermatitis, pediculosis corporis, contact dermatitis, dermatitis herpetiformis and the papular pruritic eruption of HIV.",
          ],
        },
        {
          heading: "3. Treatment of the patient",
          points: [
            "Permethrin 5 per cent cream to the whole body from the neck down after a bath, left on for 8 to 14 hours overnight, washed off and repeated once on day 7; about 30 g per adult application, reapplied to the hands after washing.",
            "Alternatives - oral ivermectin 200 microgram per kilogram on day 1 repeated on day 7 to 14, benzyl benzoate 25 per cent on three consecutive nights, and sulphur 5 to 10 per cent ointment for infants under two months and in pregnancy.",
            "Symptomatic treatment - emollients, an oral antihistamine such as hydroxyzine 25 mg at night, and a moderate topical corticosteroid for eczematisation and post-scabetic itch.",
            "Secondary pyoderma - oral cloxacillin 500 mg six hourly or amoxicillin-clavulanate for five to seven days, with review of urine and blood pressure at three weeks in a child.",
          ],
        },
        {
          heading: "4. Treatment of the household and the environment",
          points: [
            "All household members, bed partners and close physical contacts of the previous six weeks are treated on the same day whether or not they are symptomatic.",
            "Clothes, towels and bed linen of the last three days are washed above 60 degrees Celsius and sun dried or ironed; non-washable items are sealed in a plastic bag for 72 hours to one week.",
            "The mite survives only 2 to 3 days off the host, so fumigation and chemical disinfection of the house are unnecessary and should not be advised.",
            "Counsel that itching may persist for two to four weeks after cure and does not signify failure; review at two weeks and re-treat only if new burrows or new papules have appeared.",
          ],
        },
        {
          heading: "5. Public health note",
          points: [
            "Scabies is a WHO neglected tropical disease; mass drug administration with ivermectin is used for high-prevalence communities and institutional outbreaks.",
            "Control of scabies reduces streptococcal pyoderma and therefore acute post-streptococcal glomerulonephritis and acute rheumatic fever in children.",
          ],
        },
      ],
      mustDraw: [
        "A body outline marked with the sites of predilection of scabies in an adult and in an infant.",
        "A table of scabicides with strength, contact time, repeat schedule and safety in pregnancy and infancy.",
      ],
      markSplit: [
        { part: "Clinical features and variants", marks: 3 },
        { part: "Diagnosis and differential diagnosis", marks: 2 },
        { part: "Treatment of the patient", marks: 3 },
        { part: "Household treatment and decontamination", marks: 2 },
      ],
      keywords: ["scabies", "permethrin", "ivermectin", "burrow", "household contacts", "nocturnal itch"],
    },
    {
      id: "dermatology-scabies-pediculosis-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on crusted (Norwegian) scabies.",
      openingLines: [
        "Crusted or Norwegian scabies is a hyperinfestation with Sarcoptes scabiei carrying thousands to millions of mites, occurring in immunosuppressed, neurologically impaired or malnourished hosts who cannot mount an effective scratch response or immune response.",
        "It is extremely contagious and is typically the index case behind an outbreak in a family, a hospital ward or an old age home.",
      ],
      answer: [
        {
          heading: "Predisposing factors",
          points: [
            "HIV infection, HTLV-1 infection, lymphoma, leukaemia and organ transplantation.",
            "Lepromatous leprosy, Down syndrome, dementia, paralysis, spinal cord injury and severe malnutrition.",
            "Prolonged topical or systemic corticosteroid use, including over-the-counter steroid combination creams.",
          ],
        },
        {
          heading: "Clinical features",
          points: [
            "Thick, warty, fissured hyperkeratotic crusts on hands, feet, elbows, knees, scalp and ears, with generalised scaling that may progress to erythroderma.",
            "Gross nail thickening with subungual hyperkeratotic debris that harbours mites and is a reservoir for relapse.",
            "Itch is mild or absent, which delays diagnosis; a foul odour and secondary bacterial infection are usual.",
            "Complications - Staphylococcus aureus or Streptococcus pyogenes bacteraemia and sepsis, the main cause of death.",
          ],
        },
        {
          heading: "Diagnosis and treatment",
          points: [
            "Scraping of crust shows innumerable mites and eggs; biopsy shows mites within a grossly thickened stratum corneum.",
            "Oral ivermectin 200 microgram per kilogram on days 1, 2, 8, 9 and 15, extended to days 22 and 29 in severe disease.",
            "Topical permethrin 5 per cent daily for seven days then twice weekly until cure, with 5 per cent salicylic acid or 10 per cent urea ointment as a keratolytic to allow penetration.",
            "Barrier nursing with gloves and gowns, isolation, decontamination of linen, and simultaneous treatment of all contacts including health care staff.",
            "Investigate the underlying immunosuppression, particularly with HIV testing.",
          ],
        },
      ],
      markSplit: [
        { part: "Definition and predisposing factors", marks: 1 },
        { part: "Clinical features and complications", marks: 2 },
        { part: "Diagnosis and combined treatment", marks: 2 },
      ],
      keywords: ["crusted scabies", "Norwegian scabies", "ivermectin", "keratolytic", "HIV", "outbreak"],
    },
  ],
  mcqs: [
    {
      id: "dermatology-scabies-pediculosis-q1",
      stem: "A 30-year-old man is treated for scabies with a single overnight application of permethrin 5 per cent cream. Three weeks later he returns with fresh burrows in the finger webs. His wife, who also itches, was never treated. What is the single most important reason for the failure?",
      options: [
        "Permethrin resistance in the local mite population",
        "Untreated household contacts together with omission of the day 7 repeat application",
        "Inadequate contact time of the cream on the skin",
        "Persistence of mite antigen causing post-scabetic itch",
        "Evolution into crusted scabies",
      ],
      answer: 1,
      explanation:
        "New burrows three weeks later mean live mites, and the two commonest reasons are an untreated contact who re-infests the patient and the missed second application on day 7, since permethrin is not reliably ovicidal. Permethrin resistance is documented but rare and should never be the first explanation when a contact is admittedly untreated. Inadequate contact time is a real cause of failure but he did leave it overnight, which is within the recommended 8 to 14 hours. Post-scabetic itch is itch without new lesions, so fresh burrows exclude it. Crusted scabies presents with thick hyperkeratotic crusts and minimal itch, not with a few new burrows.",
      difficulty: "easy",
    },
    {
      id: "dermatology-scabies-pediculosis-q2",
      stem: "A 6-week-old exclusively breastfed infant has itchy vesicles and pustules on the palms, soles and scalp. The mother has itchy papules on her wrists and areolae. Which treatment is most appropriate for the infant?",
      options: [
        "Oral ivermectin 200 microgram per kilogram as a single dose",
        "Lindane 1 per cent lotion for 8 hours",
        "Sulphur 5 per cent in petrolatum on three consecutive nights",
        "Benzyl benzoate 25 per cent lotion on three consecutive nights",
        "Crotamiton 10 per cent cream for two nights",
      ],
      answer: 2,
      explanation:
        "Below two months of age permethrin is not licensed and sulphur 5 to 10 per cent in petrolatum applied on three consecutive nights is the accepted safe scabicide, covering the scalp and face as well because infants are affected above the neck. Oral ivermectin is contraindicated under 15 kilograms and under five years. Lindane is neurotoxic and is no longer recommended at any age, least of all in a neonate with a high surface area to weight ratio. Benzyl benzoate at 25 per cent is far too irritant for a six-week-old and would need dilution to 6.25 per cent at best. Crotamiton is a useful antipruritic but the least effective scabicide and would not clear the infestation.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q3",
      stem: "A 55-year-old bedridden man from an old age home has thick warty crusts on the hands, feet and elbows with dystrophic nails and generalised scaling, but almost no itching. Four staff members have developed itchy papules. What is the diagnosis and correct treatment?",
      options: [
        "Psoriasis vulgaris - potent topical steroid under occlusion",
        "Crusted scabies - oral ivermectin on days 1, 2, 8, 9 and 15 with topical permethrin and a keratolytic",
        "Ordinary scabies - a single application of permethrin 5 per cent",
        "Chronic eczema - emollients and a moderate topical steroid",
        "Palmoplantar keratoderma - urea 20 per cent ointment",
      ],
      answer: 1,
      explanation:
        "Hyperkeratotic crusts with nail dystrophy and minimal itch in a debilitated patient, with an outbreak of itching among carers, is crusted scabies, which carries an enormous mite burden and needs repeated doses of oral ivermectin combined with repeated topical permethrin and a keratolytic to let the scabicide reach the mites. Psoriasis would show silvery scale, Auspitz sign and typical extensor plaques, and a potent steroid here would worsen the infestation. A single permethrin application is grossly inadequate for a mite load of thousands. Eczema and inherited keratoderma do not cause an outbreak of itching among staff, which is the clue that the condition is transmissible.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q4",
      stem: "A 32-year-old destitute man has intensely itchy excoriated papules and lichenified hyperpigmented skin over the back and shoulders. There are no lesions in the finger webs or on the genitalia. Lice and eggs are seen in the seams of his shirt. Which complication is he specifically at risk of?",
      options: [
        "Acute post-streptococcal glomerulonephritis",
        "Epidemic typhus and trench fever",
        "Acquired immunodeficiency from lymphatic spread of the organism",
        "Bartonella henselae cat scratch disease",
        "Chagas disease",
      ],
      answer: 1,
      explanation:
        "Lice living in the clothing seams is pediculosis corporis, and Pediculus humanus corporis is the vector of epidemic typhus from Rickettsia prowazekii, trench fever from Bartonella quintana and louse-borne relapsing fever from Borrelia recurrentis. Post-streptococcal glomerulonephritis follows streptococcal pyoderma and is a complication of impetiginised scabies rather than of body lice as vectors. Lice do not cause immunodeficiency. Cat scratch disease is caused by Bartonella henselae and is transmitted by cats and their fleas, not by lice. Chagas disease is transmitted by the reduviid bug in Latin America and is not seen in this setting.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-scabies-pediculosis-q5",
      stem: "A 28-year-old woman treated correctly for scabies with permethrin on day 0 and day 7 returns on day 18 still itching. Examination shows healing excoriations and post-inflammatory hyperpigmentation but no burrows and no new papules. Her whole family was treated. What is the correct action?",
      options: [
        "Apply permethrin for a third time",
        "Give oral ivermectin because topical therapy has failed",
        "Reassure, and treat with emollients, a moderate topical steroid and an oral antihistamine",
        "Take a skin biopsy to look for mites",
        "Start oral prednisolone 30 mg daily for two weeks",
      ],
      answer: 2,
      explanation:
        "Itch without new burrows or new papules two to four weeks after adequate treatment is post-scabetic itch, a hypersensitivity response to retained mite antigen in the stratum corneum, and it is managed with emollients, a moderate topical corticosteroid and an antihistamine. A third application of permethrin adds an irritant dermatitis that perpetuates the itch and is the classic wrong answer. Ivermectin is reserved for genuine failure, which requires objective new lesions. A biopsy adds nothing when the clinical picture is clear and no active lesions exist. Systemic steroids are disproportionate here and risk converting any residual infestation into crusted scabies.",
      difficulty: "easy",
    },
  ],
  cards: [
    {
      id: "dermatology-scabies-pediculosis-c1",
      front: "Incubation period of scabies and why it matters.",
      back: "Four to six weeks in a first infestation and one to four days on re-infestation, because the itch is a type IV hypersensitivity reaction - so asymptomatic contacts are already infested and must be treated.",
    },
    {
      id: "dermatology-scabies-pediculosis-c2",
      front: "Pathognomonic lesion of scabies and where to look for it.",
      back: "The burrow - a 3 to 10 mm greyish serpiginous ridge with a vesicle or black dot at one end, on the finger webs, sides of the fingers, flexor wrists and ulnar border of the hand.",
    },
    {
      id: "dermatology-scabies-pediculosis-c3",
      front: "Permethrin regimen for scabies.",
      back: "5 per cent cream to the whole body neck down (whole body in infants), left 8 to 14 hours overnight, washed off and repeated on day 7; about 30 g per adult application, reapplied to the hands after washing.",
    },
    {
      id: "dermatology-scabies-pediculosis-c4",
      front: "Ivermectin dose and contraindications in scabies.",
      back: "200 microgram per kilogram orally with food, repeated on day 7 to 14; avoid under 15 kg or 5 years and in pregnancy and lactation.",
    },
    {
      id: "dermatology-scabies-pediculosis-c5",
      front: "Scabicide of choice under two months of age and in pregnancy.",
      back: "Sulphur 5 to 10 per cent in petrolatum on three consecutive nights; permethrin 5 per cent is also acceptable in pregnancy and above two months.",
    },
    {
      id: "dermatology-scabies-pediculosis-c6",
      front: "Environmental decontamination in scabies.",
      back: "Wash linen and clothes of the last 3 days above 60 degrees Celsius and sun dry or iron them; seal non-washables in a bag for 72 hours to a week. The mite dies in 2 to 3 days off the host, so fumigation is not needed.",
    },
    {
      id: "dermatology-scabies-pediculosis-c7",
      front: "Post-scabetic itch versus treatment failure.",
      back: "Post-scabetic itch - itching for 2 to 4 weeks with no new burrows or papules, treated with emollients, a mild steroid and an antihistamine. Failure - new burrows or papules after 2 weeks, so re-treat and find the untreated contact.",
    },
    {
      id: "dermatology-scabies-pediculosis-c8",
      front: "Which louse transmits systemic disease, and which diseases?",
      back: "Only the body louse, Pediculus humanus corporis - epidemic typhus (Rickettsia prowazekii), trench fever (Bartonella quintana) and relapsing fever (Borrelia recurrentis).",
    },
    {
      id: "dermatology-scabies-pediculosis-c9",
      front: "Treatment of pediculosis corporis.",
      back: "Treat the clothing rather than the skin - hot wash, iron or discard clothing and improve hygiene; permethrin to the body only if lice are found on the skin itself.",
    },
    {
      id: "dermatology-scabies-pediculosis-c10",
      front: "Maculae ceruleae - what and where?",
      back: "Bluish-grey macules at the sites of pubic louse bites on the lower abdomen, thighs and buttocks in pediculosis pubis.",
    },
  ],
  references: [
    "IADVL Textbook of Dermatology, 5th edition, 2022 - scabies and other infestations",
    "International Alliance for the Control of Scabies (IACS) 2020 Consensus Criteria for the Diagnosis of Scabies",
    "WHO Neglected Tropical Diseases Road Map 2021-2030 and WHO Informal Consultation on Scabies Control, 2019",
    "British Association of Dermatologists guideline on the management of scabies, 2024",
    "Centers for Disease Control and Prevention, Parasites - Scabies and Lice, 2024 update",
    "Neena Khanna, Illustrated Synopsis of Dermatology and Sexually Transmitted Diseases, 6th edition, 2020",
  ],
});

topics.push({
  id: "dermatology-eczema-atopic-dermatitis",
  title: "Eczema and atopic dermatitis, with the topical steroid ladder",
  oneLiner:
    "Eczema is a pattern of inflammation of the epidermis and dermis characterised clinically by itch with ill-defined erythema, papulovesicles, oozing and crusting when acute and by lichenification, scaling and fissuring when chronic, of which atopic dermatitis is the commonest form, diagnosed by the Hanifin and Rajka or UK Working Party criteria, and treated with liberal emollients, a topical corticosteroid matched in potency to the site and severity, identification of triggers and treatment of infection.",
  frequency: "core",
  keywords: [
    "eczema",
    "atopic dermatitis",
    "emollient",
    "topical corticosteroid",
    "potency ladder",
    "fingertip unit",
    "lichenification",
    "Hanifin and Rajka",
    "UK Working Party criteria",
    "tacrolimus",
    "filaggrin",
    "contact dermatitis",
    "patch test",
    "eczema herpeticum",
    "SCORAD",
    "hand eczema",
    "seborrhoeic dermatitis",
    "nummular eczema",
    "wet wrap",
    "dupilumab",
  ],
  sections: [
    {
      heading: "Definition, classification and pathogenesis",
      points: [
        "Eczema and dermatitis are **synonyms** for a spongiotic inflammatory reaction pattern; the defining histology is **spongiosis (intercellular oedema of the epidermis)** with a perivascular lymphocytic infiltrate, and the defining symptom is itch - **an eczema that does not itch should make you doubt the diagnosis**.",
        "Classify eczema as **endogenous** (atopic, seborrhoeic, nummular or discoid, asteatotic, stasis or gravitational, pompholyx, lichen simplex chronicus, juvenile plantar dermatosis) and **exogenous** (irritant contact, allergic contact, photocontact, infective and post-traumatic eczema).",
        "Atopic dermatitis arises from **a defective skin barrier plus a type 2 immune response**: loss-of-function mutations in the **filaggrin gene** and reduced ceramides raise transepidermal water loss, allergens and Staphylococcus aureus penetrate, and interleukin 4, 13 and 31 drive inflammation and itch - **interleukin 31 is the itch cytokine**.",
        "The **atopic march** describes the sequence of atopic dermatitis in infancy, followed by food allergy, then asthma and finally allergic rhinitis; a family history of atopy is present in about 70 per cent, and concordance in monozygotic twins is high.",
        "The **itch-scratch cycle** is the engine of chronicity: scratching damages the barrier, releases cytokines and provokes more itch, and produces the lichenification you see; breaking it with emollients, antihistamines at night and short courses of adequate-strength steroid is the core of treatment.",
        "About **60 per cent present in the first year and 85 per cent by five years**, and roughly two-thirds clear by adolescence; persistence into adult life is commoner with severe early disease, filaggrin mutations and coexisting asthma.",
      ],
    },
    {
      heading: "Clinical features and how to describe the lesions",
      points: [
        "Describe an eczematous patch in the standard sequence - **site and distribution, size, shape, surface, margin, colour, arrangement and secondary change** - and note that the single most useful discriminator is the **ill-defined margin**, in contrast to the sharply demarcated plaque of psoriasis or the raised active edge of tinea.",
        "**Acute eczema** - ill-defined erythema, oedema, closely set papules and papulovesicles, oozing and weeping, and crusting; **subacute eczema** - less oozing with scaling and crusting; **chronic eczema** - lichenification with exaggerated skin markings, hyperpigmentation, dryness, scaling and painful fissures.",
        "**Infantile phase (3 months to 2 years)** - weeping erythematous lesions on the cheeks, forehead, scalp and the extensor surfaces of the limbs, with the **napkin area characteristically spared** because moisture and occlusion protect it.",
        "**Childhood phase (2 to 12 years)** - drier, lichenified plaques in the **antecubital and popliteal fossae, wrists, ankles and neck**, with infraorbital folds (Dennie-Morgan lines), periorbital darkening, cheilitis and often follicular accentuation in Indian skin.",
        "**Adult phase** - flexural lichenification, hand eczema, head and neck dermatitis, nipple eczema and chronic lichen simplex; **prurigo nodularis-like nodules** may dominate in long-standing disease.",
        "Minor features that earn marks: **xerosis, keratosis pilaris, palmar hyperlinearity, pityriasis alba, ichthyosis vulgaris, white dermographism, infraorbital folds, anterior neck folds, recurrent conjunctivitis and a tendency to cutaneous infection**.",
      ],
    },
    {
      heading: "Diagnostic criteria, severity scoring and differential diagnosis",
      points: [
        "**Hanifin and Rajka criteria** require three of four major features - **pruritus, typical morphology and distribution, chronic or chronically relapsing course, and personal or family history of atopy** - plus three of twenty-three minor features.",
        "The **UK Working Party criteria** are simpler and better suited to the clinic: **an itchy skin condition plus three or more of - onset before two years, history of flexural involvement, history of generally dry skin, personal history of other atopic disease (or atopy in a first-degree relative if under four years), and visible flexural dermatitis**.",
        "Severity is scored with **SCORAD or EASI**, or in practice by the **three-item severity score and the effect on sleep and school or work**; document the body surface area involved and the number of flares per month, because that is what decides a step up in therapy.",
        "**Differential diagnosis** - scabies (burrows, genital nodules, itching contacts), seborrhoeic dermatitis (greasy yellow scale on scalp, eyebrows, nasolabial folds, involving the napkin area in infants), psoriasis (well-defined silvery plaques, nail pits, Auspitz sign), tinea corporis (raised active scaly edge, KOH positive), and contact dermatitis (pattern matching the exposure site).",
        "In an adult with new-onset generalised eczema always consider **allergic contact dermatitis, drug-induced eczema, photosensitive dermatitis, cutaneous T-cell lymphoma and HIV-associated eczema**, and in a child with failure to thrive and infections consider **Netherton syndrome, hyper-IgE syndrome and Wiskott-Aldrich syndrome**.",
        "Investigations are seldom needed - serum IgE and eosinophilia support but do not confirm atopy, **patch testing** identifies delayed contact allergy in chronic hand or eyelid eczema, and **bacterial swab or KOH** are done only when infection or tinea is suspected; **prick tests and food IgE are over-used and should be limited to a clear temporal history**.",
      ],
    },
    {
      heading: "Treatment: emollients, steroids and the sequence of escalation",
      points: [
        "**Emollients are the foundation and the first thing to prescribe**: white soft paraffin with liquid paraffin, or a ceramide-containing or urea 5 to 10 per cent cream, applied **at least twice daily and within three minutes of a bath**, in a quantity of **250 to 500 grams a week for an adult**; soap is replaced by a syndet bar or an emollient wash.",
        "Bathe **once daily in lukewarm water for five minutes** and pat dry; hot water, soap, bubble baths, woollen and synthetic clothing next to the skin, dust, sweat and long nails are the routine avoidable triggers to counsel on.",
        "**Topical corticosteroid, chosen by site and severity, is applied once or twice daily to inflamed skin only, for the shortest effective period**: mild potency such as hydrocortisone 1 per cent for the face, eyelids, flexures and infants, moderate potency such as mometasone furoate 0.1 per cent or clobetasone butyrate 0.05 per cent for the trunk and limbs, and potent such as betamethasone valerate 0.1 per cent for lichenified plaques, palms and soles.",
        "Measure the amount in **fingertip units (FTU)** - one FTU is the ointment from the distal crease to the tip of an adult index finger, about **0.5 gram, and covers two adult palms**; a whole adult body needs about 20 to 30 FTU per application, and writing the quantity on the prescription prevents both undertreatment and steroid abuse.",
        "**Topical calcineurin inhibitors - tacrolimus 0.03 per cent for children over two years and 0.1 per cent for adults, or pimecrolimus 1 per cent - are steroid-sparing agents for the face, eyelids and flexures** and for proactive twice-weekly maintenance to the sites that flare; warn about transient burning in the first week.",
        "**Proactive or weekend therapy** - applying a moderate steroid or tacrolimus twice weekly to previously affected sites after clearing - reduces relapse and total steroid use, and is a better answer than continuous daily steroid.",
        "Escalate stepwise: **wet wrap dressings** for severe flares in children, **narrowband UVB phototherapy** for extensive resistant disease, then systemic therapy with **ciclosporin 3 to 5 mg per kilogram per day for short-term control, methotrexate 7.5 to 15 mg weekly with folic acid, azathioprine after thiopurine methyltransferase testing, or mycophenolate**, and **dupilumab, an interleukin 4 receptor alpha antibody, 600 mg loading then 300 mg fortnightly**, where it is available and affordable.",
        "**Do not use long-term systemic corticosteroids**: they clear the skin briefly and produce a severe rebound flare on withdrawal, and are one of the commonest management errors in Indian practice.",
      ],
    },
    {
      heading: "Infection, complications and the steroid-safety conversation",
      points: [
        "**Staphylococcus aureus colonises over 90 per cent of atopic skin**; overt infection shows as weeping, golden crusting, pustules and rapid worsening, and is treated with **oral cloxacillin 500 mg six hourly or cefalexin for five to seven days**, with topical mupirocin for localised lesions and **dilute bleach baths (about 0.005 per cent sodium hypochlorite) twice weekly** where recurrence is frequent.",
        "**Eczema herpeticum (Kaposi varicelliform eruption)** is a dermatological emergency - the rapid appearance of **monomorphic punched-out erosions and haemorrhagic crusted vesicles with fever and malaise** - and needs **oral or intravenous aciclovir (5 mg per kilogram eight hourly intravenously, or 400 mg five times daily orally) started immediately**, with an ophthalmology referral if the eye is involved.",
        "**Molluscum contagiosum, tinea and warts spread widely on atopic skin**, and repeated topical steroid over undiagnosed tinea produces tinea incognito - always confirm with KOH before treating an annular scaly plaque as eczema.",
        "**Erythroderma** may follow abrupt withdrawal of systemic steroids or severe uncontrolled disease and requires admission for warming, fluid and electrolyte balance, nutrition and infection surveillance.",
        "Address **steroid phobia directly**: explain that a correctly chosen, correctly measured topical steroid used for a defined period is safe, that undertreatment prolongs the disease, and that the real harms - atrophy, striae, telangiectasia, hypertrichosis, perioral dermatitis, tinea incognito and hypothalamic-pituitary-adrenal suppression - come from **unsupervised potent steroids on the face and flexures and from over-the-counter steroid-antifungal-antibiotic combination creams**.",
        "Chronic disease demands attention to **sleep, school performance, growth, and the family's quality of life**; an eczema action plan in writing, with named products and quantities, improves adherence more than any change of drug.",
      ],
    },
    {
      heading: "Other common eczemas seen in family practice",
      points: [
        "**Seborrhoeic dermatitis** - greasy yellow scale with erythema on the scalp, eyebrows, nasolabial folds, retroauricular areas and presternal region, driven by Malassezia; treated with **ketoconazole 2 per cent shampoo or cream twice weekly, zinc pyrithione or selenium sulphide shampoo, and a short course of mild topical steroid**; severe or sudden extensive disease should prompt HIV testing.",
        "**Nummular or discoid eczema** - coin-shaped, well-defined, intensely itchy oozing plaques 1 to 5 cm on the limbs of adults, often confused with tinea; the absence of central clearing and a negative KOH separate them, and it needs a potent steroid plus emollients.",
        "**Asteatotic eczema (eczema craquele)** - dry crazy-paving fissuring on the shins of elderly patients in winter, worsened by frequent hot bathing and diuretics; emollients and a mild steroid are enough.",
        "**Stasis eczema** - itchy pigmented eczema over the medial lower leg with varicose veins, oedema and haemosiderin staining; treatment is **compression plus emollients and a moderate topical steroid**, and it is a common site for allergic contact dermatitis to topical antibiotics.",
        "**Pompholyx (dyshidrotic eczema)** - deep-seated tapioca-like intensely itchy vesicles on the palms, soles and sides of the fingers, often in hot weather or with stress; treat with potent steroid, potassium permanganate soaks in the acute weeping stage and management of any associated tinea pedis.",
        "**Irritant versus allergic contact dermatitis** - irritant dermatitis occurs in anyone with enough exposure, is confined to the contact site and is dose-dependent (housewives' hand eczema from detergents, cement burns); allergic contact dermatitis is a **type IV delayed hypersensitivity that needs prior sensitisation, may spread beyond the contact site, and is confirmed by patch testing at 48 and 96 hours** - common Indian allergens include nickel, para-phenylenediamine in hair dye, potassium dichromate in cement, fragrance mix, parthenium and topical neomycin.",
      ],
    },
  ],
  tables: [
    {
      heading: "Topical corticosteroid potency ladder with sites of use",
      columns: ["Potency class", "Representative agents", "Where to use", "Maximum sensible duration"],
      rows: [
        ["Mild", "Hydrocortisone 1 per cent, hydrocortisone acetate 2.5 per cent", "Face, eyelids, flexures, genitalia, infants", "Two to four weeks, may be repeated"],
        ["Moderate", "Clobetasone butyrate 0.05 per cent, mometasone furoate 0.1 per cent, fluticasone propionate 0.05 per cent", "Trunk and limbs in adults and older children", "Two to four weeks continuous"],
        ["Potent", "Betamethasone valerate 0.1 per cent, betamethasone dipropionate 0.05 per cent, mometasone ointment", "Lichenified plaques, hands, feet, scalp", "Two weeks, then step down"],
        ["Very potent", "Clobetasol propionate 0.05 per cent, halobetasol 0.05 per cent", "Palms, soles, thick plaques, under specialist advice", "Two weeks maximum, never on the face"],
        ["Steroid-sparing", "Tacrolimus 0.03 or 0.1 per cent, pimecrolimus 1 per cent", "Face, eyelids, flexures, proactive maintenance", "Long-term twice weekly is acceptable"],
      ],
    },
    {
      heading: "Fingertip units needed per application by site and age",
      columns: ["Body region", "Adult", "Child 3 to 5 years", "Infant 3 to 6 months"],
      rows: [
        ["Face and neck", "2.5 FTU", "1.5 FTU", "1 FTU"],
        ["One arm and hand", "4 FTU", "2 FTU", "1 FTU"],
        ["One leg and foot", "8 FTU", "3 FTU", "1.5 FTU"],
        ["Trunk, front", "7 FTU", "3 FTU", "1 FTU"],
        ["Trunk, back and buttocks", "7 FTU", "3.5 FTU", "1.5 FTU"],
        ["Whole body", "About 20 to 30 FTU", "About 13 FTU", "About 6 FTU"],
      ],
    },
  ],
  redFlags: [
    "Sudden clusters of monomorphic punched-out erosions with fever in a child with eczema - eczema herpeticum; start aciclovir today and refer.",
    "Spreading erythema, pain, fever or lymphangitis over eczematous skin - bacterial cellulitis needing systemic antibiotics and review in 48 hours.",
    "More than 90 per cent of the skin red and scaly, with shivering, tachycardia or hypotension - erythroderma; admit for fluids, warming and electrolyte monitoring.",
    "An eczema that is unilateral, has a raised scaly advancing edge or fails to respond to adequate steroid - do a KOH mount for tinea incognito before escalating therapy.",
    "Refractory adult eczema with poikiloderma, atrophic patches or lymphadenopathy - biopsy to exclude mycosis fungoides.",
    "Severe eczema with recurrent deep infections, failure to thrive, or bleeding and petechiae in an infant boy - consider primary immunodeficiency such as hyper-IgE or Wiskott-Aldrich syndrome.",
    "Atrophy, striae, telangiectasia or perioral dermatitis on a face treated for months with an over-the-counter combination cream - stop the steroid and manage the withdrawal.",
  ],
  pearls: [
    "The margin decides the diagnosis: eczema is ill defined, psoriasis is sharply defined, tinea has a raised active edge with central clearing.",
    "Prescribe the emollient in grams per week, not as 'apply as needed' - 250 to 500 g a week for an adult, more than the steroid by an order of magnitude.",
    "Match the steroid to the site: mild on the face and flexures, moderate on the trunk and limbs, potent on lichenified skin, palms and soles.",
    "One fingertip unit is about 0.5 g and covers two adult palms; teaching this converts steroid phobia into correct use.",
    "Proactive twice-weekly steroid or tacrolimus to previously affected sites prevents relapse and uses less steroid than treating repeated flares.",
    "Systemic steroids in atopic dermatitis buy a week and cost a rebound - use ciclosporin, methotrexate or phototherapy instead.",
    "Any eczema that suddenly worsens with weeping and golden crust is infected; any eczema with punched-out erosions and fever is herpetic.",
    "In an Indian adult with new eyelid, hand or foot eczema, ask about hair dye, cement, footwear, bindi, cosmetics and parthenium exposure, then patch test.",
  ],
  theory: [
    {
      id: "dermatology-eczema-atopic-dermatitis-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "core",
      question:
        "Define eczema. Describe the aetiopathogenesis, clinical features, diagnostic criteria and management of atopic dermatitis in a 4-year-old child.",
      openingLines: [
        "Eczema, synonymous with dermatitis, is an inflammatory reaction pattern of the skin characterised histologically by epidermal spongiosis and clinically by itching with ill-defined erythema, papulovesicles and oozing in the acute stage and lichenification, scaling and fissuring in the chronic stage.",
        "Atopic dermatitis is the commonest endogenous eczema, a chronically relapsing pruritic disorder of childhood arising from a defective epidermal barrier and a type 2 immune response in a genetically predisposed individual.",
      ],
      answer: [
        {
          heading: "1. Aetiopathogenesis",
          points: [
            "Barrier defect - filaggrin loss-of-function mutations, reduced ceramides and increased transepidermal water loss allow penetration of allergens, irritants and Staphylococcus aureus.",
            "Immune dysregulation - a type 2 response with interleukin 4, 13 and 31, raised IgE and eosinophilia; interleukin 31 mediates itch.",
            "Genetic - positive family history in about 70 per cent, high monozygotic twin concordance, part of the atopic march to food allergy, asthma and allergic rhinitis.",
            "Triggers - soap and hot water, wool and synthetic clothing, sweat and heat, dust mite, pollen, tobacco smoke, infection, teething and psychological stress.",
            "The itch-scratch cycle perpetuates barrier damage and produces lichenification.",
          ],
        },
        {
          heading: "2. Clinical features by age",
          points: [
            "Infantile phase, 3 months to 2 years - weeping eczema of the cheeks, forehead, scalp and extensor limbs, with sparing of the napkin area.",
            "Childhood phase, 2 to 12 years - dry lichenified plaques in the antecubital and popliteal fossae, wrists, ankles and neck, with follicular accentuation in pigmented skin.",
            "Adult phase - flexural lichenification, hand eczema and head and neck dermatitis.",
            "Associated signs - xerosis, palmar hyperlinearity, keratosis pilaris, pityriasis alba, Dennie-Morgan infraorbital folds, periorbital darkening, cheilitis and white dermographism.",
          ],
        },
        {
          heading: "3. Diagnosis",
          points: [
            "Hanifin and Rajka criteria - three of four major features (pruritus, typical morphology and distribution, chronic relapsing course, personal or family history of atopy) with three minor features.",
            "UK Working Party criteria - an itchy skin condition plus three of five (onset under two years, flexural involvement, dry skin, personal or first-degree family atopy, visible flexural dermatitis).",
            "Severity by SCORAD or EASI, plus effect on sleep and schooling.",
            "Differential diagnosis - scabies, seborrhoeic dermatitis, psoriasis, tinea corporis, contact dermatitis and, in resistant cases, immunodeficiency or cutaneous lymphoma.",
            "Investigations are usually unnecessary; patch testing for suspected contact allergy, bacterial swab or KOH where infection is suspected.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Explain the chronic relapsing nature, give a written eczema action plan, and avoid identified triggers including soap, hot water and woollen clothing; keep nails short.",
            "Emollients 250 to 500 g weekly, applied at least twice daily and within three minutes of a five-minute lukewarm bath, with a soap substitute.",
            "Topical corticosteroid matched to site - hydrocortisone 1 per cent for the face and flexures, mometasone furoate 0.1 per cent or clobetasone butyrate for the trunk and limbs - once or twice daily until clear, prescribed in fingertip units and quantities.",
            "Tacrolimus 0.03 per cent ointment as a steroid-sparing agent for the face and for proactive twice-weekly maintenance to sites that flare.",
            "Sedating antihistamine such as hydroxyzine at night for sleep, treatment of secondary infection with oral cloxacillin, and wet wrap dressings for a severe flare.",
            "Escalation for resistant disease - narrowband UVB, ciclosporin 3 to 5 mg per kilogram per day, methotrexate, azathioprine, or dupilumab; avoid long-term systemic corticosteroids because of rebound.",
            "Follow up for growth, sleep, school attendance, adherence and signs of steroid overuse.",
          ],
        },
      ],
      mustDraw: [
        "A body diagram showing the infantile, childhood and adult distribution of atopic dermatitis.",
        "A table of the topical corticosteroid potency ladder with representative agents and the sites at which each may be used.",
      ],
      markSplit: [
        { part: "Definition of eczema", marks: 1 },
        { part: "Aetiopathogenesis", marks: 2 },
        { part: "Clinical features by age", marks: 2 },
        { part: "Diagnostic criteria and differential diagnosis", marks: 2 },
        { part: "Management including escalation", marks: 3 },
      ],
      keywords: ["atopic dermatitis", "filaggrin", "UK Working Party criteria", "emollient", "topical steroid", "tacrolimus"],
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-t2",
      paper: "III",
      kind: "differentiate",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Differentiate between irritant and allergic contact dermatitis, and describe the principles of patch testing.",
      openingLines: [
        "Contact dermatitis is an exogenous eczema produced by an external agent, and is either irritant, from direct cytotoxic damage without prior sensitisation, or allergic, a type IV delayed hypersensitivity reaction requiring previous sensitisation.",
        "The distinction matters because irritant dermatitis is prevented by barrier protection and reduced exposure, while allergic dermatitis requires complete avoidance of a specific allergen identified by patch testing.",
      ],
      answer: [
        {
          heading: "Points of difference",
          points: [
            "Mechanism - irritant is non-immunological direct damage; allergic is a type IV cell-mediated hypersensitivity with a sensitisation phase of 10 to 14 days.",
            "Who is affected - irritant affects anyone given sufficient concentration and duration; allergic affects only previously sensitised individuals, sometimes after years of uneventful exposure.",
            "Onset - irritant within minutes to hours of exposure; allergic 24 to 72 hours after re-exposure.",
            "Morphology and site - irritant is burning and stinging, sharply limited to the contact site, with dryness, glazing and fissuring; allergic itches, is vesicular and oedematous, spreads beyond the contact site and may generalise.",
            "Examples - irritant: soaps, detergents, cement, saliva in lip-lick dermatitis; allergic: nickel, para-phenylenediamine hair dye, potassium dichromate, fragrance, parthenium, neomycin, rubber accelerators.",
            "Test - patch testing is negative in irritant dermatitis and positive in allergic contact dermatitis.",
          ],
        },
        {
          heading: "Principles of patch testing",
          points: [
            "Indicated in chronic or recurrent eczema of the hands, feet, face or eyelids, occupational dermatitis, and eczema not responding to adequate treatment.",
            "Standardised allergens in petrolatum are applied in Finn chambers to the upper back on clinically normal skin and kept dry for 48 hours.",
            "Readings at 48 hours (after removal, 30 minutes later) and again at 96 hours, since irritant reactions fade and allergic reactions crescendo.",
            "Grading - plus for erythema and infiltration, two plus for vesicles, three plus for bullae or spreading reaction, and a negative or irritant reaction recorded separately.",
            "Patient must be off systemic steroids above 10 mg prednisolone, off topical steroids at the test site for a week, and must avoid sun exposure and sweating during the test.",
            "The result is interpreted only with the clinical history - relevance to the current eruption must be established before advising lifelong avoidance.",
          ],
        },
      ],
      markSplit: [
        { part: "Table of differences", marks: 3 },
        { part: "Principles and interpretation of patch testing", marks: 2 },
      ],
      keywords: ["irritant contact dermatitis", "allergic contact dermatitis", "patch test", "parthenium", "para-phenylenediamine"],
    },
  ],
  mcqs: [
    {
      id: "dermatology-eczema-atopic-dermatitis-q1",
      stem: "A 5-year-old girl has itchy, dry, lichenified plaques in both antecubital and popliteal fossae since infancy, with a father who has asthma. Which topical corticosteroid is most appropriate for the flexural lesions on her face and eyelids?",
      options: [
        "Clobetasol propionate 0.05 per cent ointment twice daily for two weeks",
        "Hydrocortisone 1 per cent cream once or twice daily for a short course",
        "Betamethasone dipropionate 0.05 per cent ointment daily for one month",
        "A combination cream containing clobetasol, an antifungal and an antibiotic",
        "No steroid at all - emollients alone are always sufficient",
      ],
      answer: 1,
      explanation:
        "Facial and eyelid skin is thin and highly absorptive, so only a mild potency steroid such as hydrocortisone 1 per cent is appropriate, with tacrolimus 0.03 per cent as the steroid-sparing alternative for longer use. Clobetasol and betamethasone dipropionate are very potent and potent agents that produce atrophy, telangiectasia, perioral dermatitis and even glaucoma when used near the eye. The irrational triple combination creams sold over the counter in India are a common cause of steroid-modified disease and should never be prescribed. Emollients alone will not control established inflamed lichenified eczema, and withholding an appropriate steroid prolongs the disease.",
      difficulty: "easy",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-q2",
      stem: "A 3-year-old boy with known atopic dermatitis develops fever and, over 24 hours, multiple monomorphic punched-out erosions with haemorrhagic crusts over the face and neck. What is the immediate treatment?",
      options: [
        "Oral cloxacillin and continue topical steroids",
        "Systemic aciclovir started at once",
        "Increase the potency of the topical steroid and add a wet wrap",
        "Oral prednisolone 1 mg per kilogram",
        "Topical mupirocin alone with review in one week",
      ],
      answer: 1,
      explanation:
        "Monomorphic punched-out erosions appearing rapidly with fever in an atopic child is eczema herpeticum, a herpes simplex superinfection that can disseminate, and systemic aciclovir must be started immediately without waiting for confirmation. Cloxacillin covers bacterial superinfection, which often coexists and may be added, but it does not treat the herpes virus that is the emergency. Increasing steroid potency or adding occlusive wet wraps will worsen viral spread. Systemic prednisolone is actively harmful in an uncontrolled herpetic infection. Topical mupirocin with a week's delay risks disseminated herpes and ocular involvement.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-q3",
      stem: "A 35-year-old woman has itchy, ill-defined, scaly eczematous patches on both eyelids and the forehead margin for six months. She has no childhood history of eczema. She uses a black hair dye every month. What single investigation will most likely establish the cause?",
      options: [
        "Serum total IgE and absolute eosinophil count",
        "Patch testing with the Indian standard series including para-phenylenediamine",
        "Skin prick testing to house dust mite",
        "KOH mount from the scaly patch",
        "Skin biopsy for direct immunofluorescence",
      ],
      answer: 1,
      explanation:
        "Eyelid and forehead-margin eczema in an adult who uses hair dye is classic allergic contact dermatitis to para-phenylenediamine, and patch testing with the standard series read at 48 and 96 hours identifies the allergen and justifies lifelong avoidance. Serum IgE and eosinophil counts support atopy in general but cannot identify a contact allergen and are normal in many contact cases. Prick testing detects immediate IgE-mediated type I reactions and is the wrong test for a type IV delayed hypersensitivity. A KOH mount would be relevant only for a raised scaly annular edge suggesting tinea. Direct immunofluorescence is used for immunobullous disease, not eczema.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-q4",
      stem: "You prescribe mometasone furoate 0.1 per cent ointment for eczema on both arms and hands of an adult. He asks how much to apply at each application. What is the correct instruction?",
      options: [
        "One fingertip unit for both arms together",
        "Four fingertip units for each arm and hand, where one fingertip unit is about 0.5 g and covers two adult palms",
        "Twenty fingertip units for each arm",
        "Apply a thin film until the ointment is no longer visible anywhere",
        "Apply only to the worst lesions using a cotton bud",
      ],
      answer: 1,
      explanation:
        "The fingertip unit is the standard measure - the ointment squeezed from the distal skin crease to the tip of the adult index finger, about 0.5 g, sufficient for an area of two adult palms - and one arm with its hand requires about four fingertip units per application. One unit for both arms is a fraction of the required dose and leads to the undertreatment that patients then blame on the drug. Twenty units per arm is the requirement of a whole adult body and would waste the preparation and increase systemic absorption. Rubbing in until invisible under-doses unpredictably, and treating only the worst lesions leaves the surrounding inflamed skin to drive the flare.",
      difficulty: "easy",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-q5",
      stem: "A 40-year-old man has a well-demarcated annular scaly plaque with a raised active edge and central clearing on the thigh, treated for six weeks as eczema with betamethasone-clotrimazole-gentamicin cream, and now has a bizarre widespread eruption with atrophy. What is the diagnosis and next step?",
      options: [
        "Nummular eczema - switch to a potent steroid ointment",
        "Tinea incognito - stop the combination cream, take a KOH mount and treat with oral terbinafine 250 mg daily",
        "Psoriasis - start calcipotriol",
        "Erythema annulare centrifugum - reassure and observe",
        "Cutaneous lupus - request antinuclear antibody",
      ],
      answer: 1,
      explanation:
        "A raised active scaly edge with central clearing modified by weeks of a potent steroid combination cream, now atypical and widespread with atrophy, is tinea incognito, and the correct step is to stop the steroid, confirm with a KOH mount and treat with an adequate course of oral terbinafine along with a topical azole. Nummular eczema is a coin-shaped oozing plaque without an advancing edge, and more steroid would worsen a dermatophyte infection. Psoriasis gives well-defined silvery plaques with Auspitz sign and nail pits, not a spreading annular edge. Erythema annulare centrifugum has a trailing scale inside the edge and would not respond in this way to steroid abuse. Cutaneous lupus is photodistributed with scarring and follicular plugging.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "dermatology-eczema-atopic-dermatitis-c1",
      front: "Histological hallmark of eczema.",
      back: "Spongiosis - intercellular oedema of the epidermis - with a perivascular lymphocytic infiltrate; acanthosis and hyperkeratosis in the chronic stage.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c2",
      front: "UK Working Party diagnostic criteria for atopic dermatitis.",
      back: "An itchy skin condition plus three or more of: onset before two years, history of flexural involvement, generally dry skin, personal or first-degree family history of atopy, and visible flexural dermatitis.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c3",
      front: "Distribution of atopic dermatitis by age.",
      back: "Infant - cheeks, forehead, scalp and extensor limbs with napkin sparing; child - antecubital and popliteal fossae, wrists, ankles, neck; adult - flexures, hands and head and neck.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c4",
      front: "One fingertip unit - definition and coverage.",
      back: "The ointment from the distal crease to the tip of an adult index finger, about 0.5 g, enough to cover an area equal to two adult palms.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c5",
      front: "Topical steroid potency by site.",
      back: "Mild (hydrocortisone 1 per cent) on face, eyelids, flexures and infants; moderate (mometasone, clobetasone) on trunk and limbs; potent (betamethasone valerate) on lichenified skin; very potent (clobetasol) on palms and soles only.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c6",
      front: "What is proactive therapy in atopic dermatitis?",
      back: "After clearing a flare, applying a moderate steroid or tacrolimus twice weekly to previously affected sites to prevent relapse - less total steroid than repeatedly treating flares.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c7",
      front: "Eczema herpeticum - recognition and treatment.",
      back: "Rapid monomorphic punched-out erosions with haemorrhagic crusts, fever and malaise in atopic skin; start systemic aciclovir immediately and refer, adding antibacterial cover and ophthalmology review if the eye is involved.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c8",
      front: "Irritant versus allergic contact dermatitis in one line each.",
      back: "Irritant - non-immunological, affects anyone, burns within hours, confined to contact site, patch test negative. Allergic - type IV hypersensitivity, needs sensitisation, itches at 24 to 72 hours, spreads beyond the site, patch test positive.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c9",
      front: "Systemic options for severe refractory atopic dermatitis.",
      back: "Narrowband UVB, ciclosporin 3 to 5 mg/kg/day, methotrexate 7.5 to 15 mg weekly with folic acid, azathioprine after TPMT testing, mycophenolate, and dupilumab 600 mg loading then 300 mg every two weeks - not long-term oral steroids.",
    },
    {
      id: "dermatology-eczema-atopic-dermatitis-c10",
      front: "Common contact allergens in Indian practice.",
      back: "Nickel in jewellery, para-phenylenediamine in hair dye, potassium dichromate in cement, parthenium (Congress grass), fragrance mix, rubber accelerators in footwear, and topical neomycin.",
    },
  ],
  references: [
    "IADVL Textbook of Dermatology, 5th edition, 2022 - eczema and dermatitis",
    "IADVL SIG Atopic Dermatitis consensus recommendations for the management of atopic dermatitis in India, 2019",
    "NICE Clinical Guideline CG57, Atopic eczema in under 12s, updated 2023",
    "American Academy of Dermatology guidelines of care for atopic dermatitis, 2023-2024",
    "Rook's Textbook of Dermatology, 10th edition, 2024 - atopic and contact dermatitis",
    "National Formulary of India, 5th edition, 2021 - topical corticosteroid potency classification",
  ],
});

const cases: ClinicalCase[] = [
  {
    id: "dermatology-case-1",
    title: "Annular scaly plaque in the groin of a young man after months of a combination steroid cream",
    kind: "short",
    subjectId: "dermatology",
    opening:
      "A 24-year-old male hostel resident with an itchy, spreading rash in both groins for five months, treated with an over-the-counter clobetasol-clotrimazole-neomycin cream with repeated partial relief and relapse.",
    minutes: 15,
    frequency: "core",
    sections: [
      {
        heading: "History",
        points: [
          "Itching in both groins for five months, worse with sweating and at night, spreading slowly outwards despite applying a cream bought from the chemist.",
          "The cream is a triple-combination containing clobetasol propionate, clotrimazole and neomycin; it was applied twice daily for about four months, gave quick relief of itch within days, and each time it was stopped the rash returned larger than before.",
          "He shares a hostel room and bathroom with three others, one of whom has a similar rash; he wears tight synthetic innerwear and has no diabetes, no immunosuppressant use and no similar lesions on the scalp, nails or feet.",
          "There is no history of a preceding sharply marginated rash under a wristwatch or belt, no discharge, and no oral or genital ulcers; there is no family history of psoriasis or atopy.",
        ],
      },
      {
        heading: "Examination of the lesion",
        points: [
          "Site: bilateral inguinal folds extending onto the medial thighs and lower abdomen, sparing the scrotum; a smaller similar lesion is present in the left gluteal cleft.",
          "Size and shape: the right groin plaque measures about 12 by 8 cm and the left about 9 by 6 cm; each is annular to polycyclic with an irregular, ill-defined outline where several rings have coalesced.",
          "Surface and margin: the margin is only faintly raised with scanty fine scale and a few scattered papules and pustules; the centre is neither cleared nor scaly, and in places the border is indistinct rather than the crisp, elevated, scaly edge expected of untreated tinea.",
          "Colour and secondary change: the plaques are dusky brown to violaceous with patchy hypopigmentation; there is atrophy with fine wrinkling, prominent superficial vessels and violaceous striae along the inguinal folds, and follicular papules spread beyond the ring indicating deep follicular involvement.",
          "Arrangement and distribution: symmetrical, flexural, with satellite papules; the scalp, nails, palms, soles and interdigital spaces are normal, and there are no signs of systemic steroid absorption such as facial puffiness or purpura.",
        ],
      },
      {
        heading: "Diagnosis and why",
        points: [
          "This is steroid-modified tinea cruris (tinea incognito) with Majocchi-type follicular involvement and local steroid-induced atrophy and striae.",
          "The features that make it steroid-modified rather than simple tinea are the loss of the raised scaly edge, the absence of central clearing, the follicular papules and pustules, the atrophy and striae, and the history of relief and rebound with a potent steroid combination cream.",
          "The recalcitrant, widespread pattern with a contact in the same room fits the current Indian epidemic of Trichophyton indotineae (formerly T. mentagrophytes ITS genotype VIII), which is frequently terbinafine-resistant.",
        ],
      },
      {
        heading: "Confirmation at the bedside",
        points: [
          "A 10 percent to 20 percent KOH mount is prepared by scraping the active edge with a blunt scalpel after cleaning with spirit; scale is placed on a slide, a drop of KOH added, coverslipped and gently warmed, then examined under low light with the condenser lowered.",
          "Positive mounts show long, branching, septate hyaline hyphae crossing the keratinocyte borders, with arthroconidia in chains; steroid-modified lesions are usually heavily positive because the fungal load rises when the inflammation is suppressed.",
          "Fungal culture on Sabouraud dextrose agar with cycloheximide and chloramphenicol takes two to four weeks and is reserved for treatment failure, atypical morphology, or when antifungal susceptibility is needed.",
          "Wood's lamp is negative in dermatophyte tinea cruris and helps exclude erythrasma, which fluoresces coral red.",
        ],
      },
      {
        heading: "Treatment plan",
        points: [
          "Stop the combination steroid cream immediately and warn the patient that the itch may flare for one to two weeks as the suppressed inflammation returns; treat this with an oral antihistamine and bland emollient rather than another steroid.",
          "Because the lesions are extensive, follicular and steroid-modified, systemic therapy is needed: oral itraconazole 200 mg once daily with a fatty meal or an acidic drink for four to six weeks is the IADVL first-line choice in the current resistant era, continued for two weeks beyond clinical and KOH clearance.",
          "Terbinafine 250 mg once daily for four weeks remains an option where itraconazole is contraindicated, but high rates of squalene epoxidase mutations in T. indotineae mean failure is common; fluconazole 150 to 300 mg weekly for four to six weeks is a further alternative.",
          "Add a topical azole such as luliconazole 1 percent cream or sertaconazole 2 percent cream applied once or twice daily to the plaque and two centimetres beyond the edge for the whole duration of systemic treatment; review at two weeks and at the end of therapy with a repeat KOH.",
        ],
      },
      {
        heading: "Counselling and prevention",
        points: [
          "Explain that the steroid cream was suppressing the itch while feeding the fungus, and that all such fixed-dose combination creams must be avoided in future; teach the patient to read the label for clobetasol, betamethasone or mometasone.",
          "Advise loose cotton clothing, drying the folds thoroughly after bathing, washing and sun-drying innerwear and towels daily and not sharing them, and ironing or hot-washing clothes; treat the roommate and any family contact with lesions at the same time.",
          "Stress adherence to the full course even after the rash looks clear, because relapse and resistance follow premature stoppage, and arrange follow-up until KOH is negative.",
        ],
      },
    ],
    summaryStatement:
      "A 24-year-old man with five months of bilateral, symmetrical, annular to polycyclic, ill-defined, dusky brown plaques in the groins with follicular papules and pustules, scanty scale, atrophy and striae, following prolonged use of a clobetasol-containing combination cream, with a positive KOH mount showing septate hyphae: steroid-modified tinea cruris (tinea incognito) with follicular involvement, requiring cessation of the steroid and a full course of systemic plus topical antifungals.",
    differential: [
      {
        diagnosis: "Flexural (inverse) psoriasis",
        forIt: "Symmetrical, well-demarcated erythematous plaques in the groins with little scale, and it can be aggravated by stopping topical steroids.",
        againstIt: "No nail pitting, scalp or extensor plaques, no family history, and psoriasis does not produce follicular pustules with a positive KOH mount; the lesions are annular with an active edge rather than uniform shiny plaques.",
      },
      {
        diagnosis: "Candidal intertrigo",
        forIt: "Moist flexural site, satellite lesions, itching worsened by sweating, and it may coexist after long steroid use.",
        againstIt: "Candida gives a beefy red, macerated plaque with a fringed peeling edge and pustular satellites confined to the fold, and KOH shows budding yeasts with pseudohyphae rather than long septate hyphae.",
      },
      {
        diagnosis: "Erythrasma",
        forIt: "Brownish, finely wrinkled patches in the groin in a young adult who sweats a great deal.",
        againstIt: "Erythrasma is asymptomatic or mildly itchy, has no active edge, papules or pustules, fluoresces coral red under Wood's lamp and is KOH negative for hyphae.",
      },
    ],
    investigations: [
      {
        test: "10 to 20 percent KOH mount from the active edge",
        why: "Confirms dermatophyte infection at the bedside before starting systemic antifungals.",
        expected: "Long, branching, septate hyaline hyphae with arthroconidia; heavily positive in steroid-modified lesions.",
      },
      {
        test: "Wood's lamp examination",
        why: "Excludes erythrasma and mixed infection in the flexure.",
        expected: "No fluorescence in dermatophyte tinea cruris; coral red if erythrasma is present.",
      },
      {
        test: "Fungal culture on Sabouraud dextrose agar with antifungal susceptibility where available",
        why: "Identifies Trichophyton indotineae and terbinafine resistance in recalcitrant or relapsing cases.",
        expected: "Growth in two to four weeks; T. indotineae isolates often carry squalene epoxidase mutations conferring terbinafine resistance.",
      },
      {
        test: "Fasting blood glucose or HbA1c",
        why: "Extensive or recalcitrant dermatophytosis warrants screening for diabetes, an occult predisposing condition.",
        expected: "Normal in this young man; an elevated value would change the counselling and follow-up.",
      },
      {
        test: "Baseline liver function tests",
        why: "Itraconazole and terbinafine are hepatically metabolised and prescribed for four to six weeks.",
        expected: "Normal; repeat only if the course exceeds six weeks or symptoms of hepatotoxicity develop.",
      },
      {
        test: "Early morning serum cortisol if signs of systemic absorption",
        why: "Prolonged potent steroid use over a large flexural area can suppress the adrenal axis.",
        expected: "Normal here in the absence of cushingoid features; low values would need physician referral before abrupt withdrawal.",
      },
    ],
    management: [
      {
        heading: "Immediate steps",
        points: [
          "Stop the clobetasol-containing combination cream at once; do not taper, but warn of a rebound flare of itch and redness for one to two weeks.",
          "Oral cetirizine 10 mg at night or hydroxyzine 25 mg at night for pruritus, with a bland emollient or calamine for the flare.",
          "Photograph or diagram the lesions and record the exact extent so response can be judged at review.",
        ],
      },
      {
        heading: "Antifungal regimen",
        points: [
          "Itraconazole 200 mg once daily after a fatty meal for four to six weeks, continued two weeks beyond clinical and mycological cure (first-line per IADVL 2020 expert consensus for extensive or steroid-modified tinea).",
          "Alternatives: terbinafine 250 mg once daily for four weeks if itraconazole cannot be used, accepting a higher failure rate; fluconazole 150 to 300 mg once weekly for four to six weeks.",
          "Topical luliconazole 1 percent cream or sertaconazole 2 percent cream twice daily to the lesion and 2 cm beyond, for the entire duration of oral therapy; no topical steroid or combination cream.",
          "Avoid co-prescribing itraconazole with drugs metabolised by CYP3A4 such as domperidone, some statins and certain antihistamines; check for QT-prolonging combinations.",
        ],
      },
      {
        heading: "Hygiene, contacts and counselling",
        points: [
          "Loose cotton underwear, daily bathing with thorough drying of the folds, and separate towels washed in hot water and sun-dried.",
          "Examine and treat the roommate and any household contact with lesions simultaneously to prevent ping-pong reinfection.",
          "Explain the harm of over-the-counter steroid combination creams and adherence to the full course; give written instructions.",
        ],
      },
      {
        heading: "Follow-up and referral",
        points: [
          "Review at two weeks for tolerance and early response, then at the end of the course with a repeat KOH mount; treat until both clinical and KOH clearance.",
          "Refer to a dermatologist if there is no response at four weeks, if the KOH stays positive at six weeks, or if striae, atrophy or adrenal suppression need specialist care.",
        ],
      },
    ],
    viva: [
      {
        q: "What is tinea incognito?",
        a: "Dermatophyte infection whose clinical morphology has been altered by topical or systemic corticosteroids or calcineurin inhibitors, so that the classic raised scaly edge and central clearing are lost and the lesion becomes ill-defined, less scaly, more extensive, follicular or pustular, often with atrophy and striae.",
      },
      {
        q: "Why is central clearing lost in steroid-modified tinea?",
        a: "Central clearing depends on the host inflammatory response eliminating fungus from the older centre; the steroid suppresses this immunity, so fungus persists throughout the plaque and the lesion spreads uniformly with an indistinct border.",
      },
      {
        q: "How do you take a KOH mount from a flexural lesion?",
        a: "Clean with spirit, scrape the active edge with a blunt scalpel held at right angles, collect scale on a slide, add a drop of 10 to 20 percent KOH, coverslip, warm gently without boiling, wait five to ten minutes and examine with the condenser lowered for septate branching hyphae.",
      },
      {
        q: "Why is itraconazole preferred to terbinafine for this patient in India today?",
        a: "The predominant organism, Trichophyton indotineae, frequently carries squalene epoxidase mutations such as Phe397Leu that confer terbinafine resistance; itraconazole retains activity, so IADVL consensus recommends it first-line for extensive, recurrent or steroid-modified tinea.",
      },
      {
        q: "What are the local adverse effects of long-term potent topical steroid in the groin?",
        a: "Atrophy, striae, telangiectasia, hypopigmentation, steroid folliculitis and acneiform eruption, secondary infection and tinea incognito; over a large area systemic absorption can suppress the hypothalamic-pituitary-adrenal axis.",
      },
      {
        q: "What is Majocchi granuloma?",
        a: "A deep dermatophyte folliculitis and perifolliculitis, usually after topical steroids or shaving, presenting as follicular papules, pustules and nodules; it always needs systemic antifungal therapy because topical agents do not reach the follicle.",
      },
    ],
    pitfalls: [
      "Naming tinea without first describing the lesion; the examiner expects site, size, shape, surface, margin, colour and arrangement before the diagnosis.",
      "Restarting a milder steroid or another combination cream to control the withdrawal flare, which resets the whole cycle.",
      "Giving a two-week course of a single topical azole for an extensive, follicular, steroid-modified infection, guaranteeing relapse.",
      "Forgetting to treat the contact and the fomites, so the patient is reinfected as soon as therapy stops.",
    ],
    references: [
      "IADVL Taskforce against Recalcitrant Tinea (ITART) expert consensus on the management of dermatophytosis in India, Indian Dermatology Online Journal, 2020",
      "IADVL Textbook of Dermatology, 5th edition, 2022 - superficial fungal infections",
      "Rook's Textbook of Dermatology, 10th edition, 2024 - dermatophytosis and tinea incognito",
      "Neena Khanna, Illustrated Synopsis of Dermatology and Sexually Transmitted Diseases, 6th edition, 2020",
    ],
  },
  {
    id: "dermatology-case-2",
    title: "Viva: leprosy - cardinal signs, NLEP classification, MDT, lepra reactions and disability grading",
    kind: "viva",
    subjectId: "dermatology",
    opening:
      "Leprosy is a chronic granulomatous infection by Mycobacterium leprae affecting skin and peripheral nerves; the examiner will move quickly from the cardinal signs to classification, the blister-pack regimens, reactions and disability grading.",
    minutes: 10,
    frequency: "core",
    sections: [
      {
        heading: "Cardinal signs and diagnosis",
        points: [
          "Leprosy is diagnosed clinically when at least one of three cardinal signs is present: a hypopigmented or erythematous skin patch with definite loss of sensation, a thickened or enlarged peripheral nerve with loss of sensation or weakness in the muscles it supplies, or acid-fast bacilli in a slit-skin smear.",
          "Sensory testing on the patch uses a wisp of cotton for touch, a pin for pain and warm and cold test tubes for temperature, comparing with normal skin with the patient's eyes closed; loss of temperature sense is the earliest.",
          "Nerves palpated routinely are the ulnar at the elbow, the radial cutaneous at the wrist, the median at the wrist, the common peroneal at the fibular neck, the posterior tibial behind the medial malleolus, the great auricular in the neck and the supraorbital and facial branches.",
          "Slit-skin smear is taken from the ear lobes and two active lesions, stained by Ziehl-Neelsen and reported as the bacterial index on a scale of 0 to 6 plus and the morphological index as the percentage of solid-staining, viable bacilli.",
        ],
      },
      {
        heading: "NLEP classification: paucibacillary versus multibacillary",
        points: [
          "NLEP and WHO classify for treatment on skin lesion count and nerve involvement: paucibacillary (PB) disease has one to five skin lesions, involvement of not more than one nerve trunk and a negative slit-skin smear where done.",
          "Multibacillary (MB) disease has six or more skin lesions, or more than one nerve trunk involved, or a positive slit-skin smear at any site irrespective of lesion count.",
          "Any doubt about the count, a positive smear, or pure neuritic disease with more than one nerve puts the patient into the MB group, because undertreating MB disease as PB risks relapse and drug resistance.",
          "The Ridley-Jopling spectrum (TT, BT, BB, BL, LL) describes immunity and histology and is used in teaching and research, but the programme decision is only PB or MB.",
        ],
      },
      {
        heading: "MDT blister-pack regimens",
        points: [
          "Adult MB blister pack, 12 monthly packs given over a maximum of 18 months: rifampicin 600 mg once a month supervised, clofazimine 300 mg once a month supervised plus 50 mg daily self-administered, and dapsone 100 mg daily self-administered.",
          "Adult PB blister pack, 6 monthly packs given over a maximum of 9 months: rifampicin 600 mg once a month supervised and dapsone 100 mg daily; NLEP now supplies the three-drug MB pack for PB patients too, for 6 months, following the WHO 2018 guideline.",
          "Child packs for 10 to 14 years contain rifampicin 450 mg monthly, clofazimine 150 mg monthly plus 50 mg on alternate days, and dapsone 50 mg daily; children under 10 receive weight-adjusted doses of roughly rifampicin 10 mg/kg monthly, clofazimine 6 mg/kg monthly and 1 mg/kg daily, and dapsone 2 mg/kg daily.",
          "MDT is free at every government health facility, the first dose of each pack is taken in front of the health worker, and treatment is complete when the required number of packs is consumed within the allowed window; a patient is then released from treatment, not declared cured, and is followed for reactions and relapse.",
          "Single-dose rifampicin 600 mg is offered to eligible household and neighbourhood contacts as post-exposure prophylaxis under NLEP after screening excludes active leprosy and tuberculosis.",
        ],
      },
      {
        heading: "Lepra reactions",
        points: [
          "Type 1 (reversal) reaction is a delayed hypersensitivity upgrading in borderline disease, before, during or after MDT: existing patches become red, swollen and tender, new lesions appear, and nerves become painful and swollen with rapid loss of function; it is the main cause of new deformity.",
          "Type 2 reaction, erythema nodosum leprosum (ENL), is an immune-complex reaction in BL and LL disease: crops of tender red nodules on the face, arms and thighs with fever, malaise, neuritis, iritis, orchitis, arthritis and lymphadenitis, often recurring for years.",
          "Mild reactions without nerve involvement are treated with rest, analgesics and continuation of MDT; a reaction is severe when there is nerve pain or tenderness, new sensory or motor loss, lesions over a nerve trunk, eye involvement, ulceration, or fever with systemic symptoms.",
          "Severe type 1 reaction and neuritis: prednisolone 40 to 60 mg daily (about 1 mg/kg) tapered by 5 to 10 mg every two weeks over 12 weeks for PB and 20 to 24 weeks for MB per NLEP, with splinting of the affected limb and continued MDT.",
          "Severe ENL: prednisolone in the same dose, adding clofazimine 100 mg three times daily for up to 12 weeks then tapering as a steroid-sparing agent in recurrent or chronic ENL; thalidomide 100 mg three to four times daily is highly effective in men and post-menopausal women but is never given to women of child-bearing potential.",
        ],
      },
      {
        heading: "Disability grading and prevention",
        points: [
          "WHO disability grading is done for each hand, each foot and each eye at diagnosis and at release from treatment; the patient's grade is the highest grade of any part.",
          "Grade 0 is no anaesthesia and no visible deformity or damage; grade 1 is anaesthesia present but no visible deformity or damage; grade 2 is visible deformity or damage, such as claw hand, wrist drop, foot drop, ulcer, absorption, lagophthalmos, iridocyclitis, corneal opacity or visual acuity worse than 6/60.",
          "Grade 2 disability at diagnosis is an NLEP indicator of late detection; the programme goal is a grade 2 disability rate below one per million population.",
          "Prevention of disability includes daily self-inspection of hands, feet and eyes, soaking and oiling dry skin, protective footwear with microcellular rubber insoles, splints, eye care with blinking exercises and protective glasses for lagophthalmos, and referral for reconstructive surgery under NLEP.",
        ],
      },
      {
        heading: "Programme points the examiner likes",
        points: [
          "NLEP, launched in 1983 with MDT, aims at leprosy elimination as a public health problem (prevalence below 1 per 10,000); India achieved this nationally in December 2005 and now runs case detection campaigns, ASHA-based referral, Sparsh Leprosy Awareness Campaign and the National Strategic Plan and Roadmap for Leprosy 2023 to 2027 aiming at zero transmission by 2027.",
          "Leprosy is notifiable, treatment is free, the disease is curable and the patient is non-infectious within days of the first rifampicin dose; isolation is neither required nor lawful, and the Rights of Persons with Disabilities Act 2016 covers leprosy-cured persons.",
          "A family physician's role is early detection of a patch with sensory loss, correct PB/MB classification, starting and supervising MDT, recognising and treating reactions early, monitoring for dapsone hypersensitivity and clofazimine pigmentation, and counselling against stigma.",
        ],
      },
    ],
    summaryStatement:
      "Leprosy is diagnosed on any one of three cardinal signs, classified for treatment as PB (one to five lesions, one nerve, smear negative) or MB (six or more lesions, more than one nerve, or smear positive), treated with free rifampicin-dapsone-clofazimine blister packs for 6 or 12 months, watched for type 1 and type 2 reactions that are treated promptly with prednisolone, and graded for disability at diagnosis and release from treatment.",
    differential: [
      {
        diagnosis: "Pityriasis versicolor for a hypopigmented patch",
        forIt: "Hypopigmented macules on the trunk of a young adult, common in a humid climate.",
        againstIt: "Fine branny scale with a positive scratch sign, sensation intact, KOH shows spaghetti-and-meatballs, and there is no nerve thickening.",
      },
      {
        diagnosis: "Pityriasis alba or post-inflammatory hypopigmentation",
        forIt: "Ill-defined hypopigmented patches on the face or limbs of a child.",
        againstIt: "Sensation is normal, patches are not anaesthetic or anhidrotic, there is no nerve enlargement, and there is often a history of preceding eczema.",
      },
      {
        diagnosis: "Vitiligo",
        forIt: "Well-defined pale patches that may be mistaken for leprosy by the family.",
        againstIt: "Vitiligo is depigmented, chalk white, with normal sensation and sweating, often periorificial or acral, and shows no nerve involvement.",
      },
    ],
    investigations: [
      {
        test: "Slit-skin smear stained by Ziehl-Neelsen (modified, 5 percent sulphuric acid)",
        why: "Confirms MB disease when positive, provides the bacterial and morphological index for baseline and relapse assessment.",
        expected: "Negative in PB and tuberculoid disease; bacterial index up to 6 plus in lepromatous disease with a falling morphological index on treatment.",
      },
      {
        test: "Sensory testing with cotton wool, pin and temperature and monofilament testing of palms and soles",
        why: "Establishes the cardinal sign of anaesthesia and gives the baseline for nerve function assessment and disability grading.",
        expected: "Loss of temperature then touch and pain over the patch; loss at monofilament sites indicates grade 1 disability.",
      },
      {
        test: "Voluntary muscle testing of hand, foot and eye closure",
        why: "Detects motor nerve damage from neuritis or reaction and grades disability.",
        expected: "Normal power in early disease; weakness of the small muscles of the hand, foot drop or lagophthalmos denotes nerve damage needing steroids.",
      },
      {
        test: "Skin biopsy with Fite-Faraco stain",
        why: "Reserved for doubtful cases and for placing the patient on the Ridley-Jopling spectrum or diagnosing pure neuritic disease.",
        expected: "Epithelioid granulomas around nerves in tuberculoid disease; foamy macrophages with abundant bacilli in lepromatous disease.",
      },
      {
        test: "Baseline haemogram, liver and renal function and G6PD screen",
        why: "Dapsone causes haemolysis and dapsone hypersensitivity syndrome; rifampicin is hepatotoxic; steroids for reactions need blood glucose and screening.",
        expected: "Normal values; anaemia or G6PD deficiency prompts monitoring or a dapsone-free regimen.",
      },
      {
        test: "Nerve conduction studies or ultrasound of nerves",
        why: "Useful in pure neuritic leprosy and in assessing silent neuritis when the clinical picture is unclear.",
        expected: "Slowed conduction and focal nerve enlargement at predilection sites.",
      },
    ],
    management: [
      {
        heading: "Starting MDT",
        points: [
          "Register the patient under NLEP, classify PB or MB, record baseline nerve function and disability grade, and give the first dose of the appropriate blister pack under supervision.",
          "MB adult: rifampicin 600 mg and clofazimine 300 mg monthly supervised, clofazimine 50 mg and dapsone 100 mg daily, 12 packs within 18 months.",
          "PB adult: rifampicin 600 mg monthly supervised and dapsone 100 mg daily, 6 packs within 9 months (three-drug pack used for 6 months where supplied).",
          "Explain the red urine after rifampicin, the brown-black skin pigmentation and dryness with clofazimine, and the warning signs of dapsone hypersensitivity (fever, rash, jaundice in the first six weeks).",
        ],
      },
      {
        heading: "Managing reactions",
        points: [
          "Continue MDT throughout a reaction; never stop it because of a reaction.",
          "Severe type 1 reaction or neuritis: prednisolone 40 to 60 mg daily tapered over 12 weeks (PB) to 20 to 24 weeks (MB), with rest and splinting of the limb, analgesics, and review of nerve function every two weeks.",
          "Severe ENL: prednisolone in the same manner, adding clofazimine 100 mg three times daily then tapering, or thalidomide 100 mg three to four times daily in eligible men and post-menopausal women; treat iritis with topical steroid and atropine urgently.",
          "Refer to a district hospital or dermatologist for recurrent or steroid-dependent reactions, eye involvement, or nerve function loss not improving after four weeks of steroids.",
        ],
      },
      {
        heading: "Prevention of disability and follow-up",
        points: [
          "Grade disability at diagnosis and at release from treatment; teach self-care of anaesthetic hands, feet and eyes and supply microcellular rubber footwear.",
          "Monthly review during treatment for adherence, adverse effects and new nerve function loss; after release, review for relapse and late reactions for at least two years.",
          "Screen household contacts, offer single-dose rifampicin post-exposure prophylaxis to eligible contacts, and counsel the family that the patient is non-infectious after the first dose.",
        ],
      },
    ],
    viva: [
      {
        q: "What are the cardinal signs of leprosy?",
        a: "A hypopigmented or reddish patch with definite loss of sensation, a thickened peripheral nerve with sensory loss or weakness in its territory, and acid-fast bacilli in a slit-skin smear; any one is diagnostic.",
      },
      {
        q: "How does NLEP classify leprosy for treatment?",
        a: "PB: one to five lesions, not more than one nerve trunk, smear negative. MB: six or more lesions, or more than one nerve trunk, or a positive smear regardless of lesion count; when in doubt treat as MB.",
      },
      {
        q: "What is in the adult MB blister pack and for how long?",
        a: "Rifampicin 600 mg and clofazimine 300 mg once a month under supervision, clofazimine 50 mg and dapsone 100 mg daily self-administered; 12 packs to be completed within 18 months.",
      },
      {
        q: "How do you differentiate type 1 from type 2 lepra reaction?",
        a: "Type 1 is a delayed hypersensitivity reaction in borderline disease with inflammation of existing lesions and nerves, no systemic features; type 2 (ENL) is an immune-complex reaction in BL and LL disease with crops of new tender nodules, fever, neuritis, iritis, orchitis and arthritis.",
      },
      {
        q: "What is a severe reaction and how is it treated?",
        a: "Nerve pain or new nerve function loss, lesions over a nerve trunk, ulceration, eye involvement or systemic symptoms; treated with prednisolone about 1 mg/kg tapered over 12 weeks in PB and 20 to 24 weeks in MB, with MDT continued, adding clofazimine or thalidomide for recurrent ENL.",
      },
      {
        q: "Define WHO grade 2 disability.",
        a: "Visible deformity or damage to the hand or foot such as claw hand, wrist or foot drop, ulcer or absorption, or eye damage such as lagophthalmos, iridocyclitis, corneal opacity or vision worse than 6/60; grade 1 is anaesthesia without visible deformity and grade 0 is neither.",
      },
    ],
    pitfalls: [
      "Diagnosing leprosy from a hypopigmented patch without testing sensation or palpating nerves; the sensory loss is the cardinal sign.",
      "Classifying by lesion count alone and missing a positive smear or a second thickened nerve that makes the patient MB.",
      "Stopping MDT during a reaction, or giving steroids in a dose too small and for too short a time, allowing permanent nerve damage.",
      "Prescribing thalidomide to a woman of child-bearing potential, or missing dapsone hypersensitivity syndrome in the first six weeks of treatment.",
    ],
    references: [
      "National Leprosy Eradication Programme (NLEP), Training Manual for Medical Officers, Directorate General of Health Services, Government of India, 2019",
      "NLEP National Strategic Plan and Roadmap for Leprosy 2023-2027, Ministry of Health and Family Welfare, 2023",
      "WHO Guidelines for the Diagnosis, Treatment and Prevention of Leprosy, 2018",
      "IADVL Textbook of Dermatology, 5th edition, 2022 - leprosy",
    ],
  },
];

const subject: Subject = {
  id: "dermatology",
  title: "Dermatology",
  blurb: "Steroid-modified tinea, scabies, eczema, psoriasis, acne, drug rashes and leprosy.",
  icon: "Layers",
  papers: ["III"],
  topics,
  cases,
};

export default subject;
