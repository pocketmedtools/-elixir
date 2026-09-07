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

topics.push({
  id: "dermatology-acne-vulgaris",
  title: "Acne vulgaris: grading, treatment ladder and isotretinoin",
  oneLiner:
    "Acne vulgaris is a chronic inflammatory disease of the pilosebaceous unit driven by follicular hyperkeratinisation, androgen-driven sebum excess, colonisation by Cutibacterium acnes and perifollicular inflammation, whose defining lesion is the comedone, and which is graded by lesion type and severity into mild, moderate, severe and nodulocystic disease to select topical retinoid and benzoyl peroxide, oral doxycycline, hormonal therapy or oral isotretinoin.",
  frequency: "common",
  keywords: [
    "acne vulgaris",
    "comedone",
    "Cutibacterium acnes",
    "Propionibacterium acnes",
    "benzoyl peroxide",
    "adapalene",
    "tretinoin",
    "doxycycline",
    "isotretinoin",
    "combined oral contraceptive",
    "spironolactone",
    "post-inflammatory hyperpigmentation",
    "acne scar",
    "polycystic ovary syndrome",
    "acne fulminans",
    "steroid acne",
    "Global Acne Grading System",
    "pilosebaceous unit",
  ],
  sections: [
    {
      heading: "Pathogenesis: four steps that name the four drugs",
      points: [
        "**Follicular hyperkeratinisation** blocks the pilosebaceous duct and forms the microcomedone, the precursor of every acne lesion - this step is targeted by **topical retinoids (adapalene, tretinoin, tazarotene)**, which are therefore the backbone of both treatment and maintenance.",
        "**Androgen-driven sebum excess** at adrenarche enlarges the sebaceous gland; circulating androgens are usually normal and it is end-organ sensitivity that differs, which is why **hormonal therapy (combined oral contraceptives, spironolactone) and isotretinoin**, which shrinks the gland, work at this step.",
        "**Colonisation by Cutibacterium acnes** (formerly Propionibacterium acnes), an anaerobic diphtheroid that hydrolyses sebum triglycerides into free fatty acids and activates innate immunity, is addressed by **benzoyl peroxide and by oral or topical antibiotics** - benzoyl peroxide is bactericidal and, importantly, **generates no resistance**.",
        "**Perifollicular inflammation** with neutrophils, Toll-like receptor 2 activation and interleukin 1 beta produces the papule, pustule, nodule and cyst; **inflammation is present even in clinically normal-looking skin**, which is the rationale for treating the whole affected area and not individual spots.",
        "Aggravating factors worth eliciting - **a high glycaemic-index diet and skimmed milk (modest evidence), occlusive cosmetics and hair oils (pomade acne), friction from helmet straps and masks (acne mechanica), humidity, and drugs**: corticosteroids, anabolic steroids, androgens, lithium, phenytoin, isoniazid, iodides, ciclosporin and epidermal growth factor receptor inhibitors.",
        "Acne is a disease of adolescence in **over 80 per cent of teenagers**, but persists into the twenties and thirties, especially in women, where it presents as **lower-face and jawline inflammatory acne with premenstrual flare** and should prompt a search for hyperandrogenism.",
      ],
    },
    {
      heading: "Clinical features and lesion vocabulary",
      points: [
        "Describe acne in the standard order - **site and distribution, number and type of lesions, size, colour and secondary change** - and always separate **non-inflammatory from inflammatory lesions**, since this decides the drug.",
        "**Non-inflammatory primary lesions - the comedones**: the **open comedone or blackhead** is a dilated follicle with a dark oxidised keratin plug, and the **closed comedone or whitehead** is a 1 to 2 mm skin-coloured papule with a barely visible opening; **the presence of comedones is what makes the diagnosis acne rather than folliculitis or rosacea**.",
        "**Inflammatory lesions** - erythematous **papules** under 5 mm, **pustules**, **nodules** over 5 mm that are deep and tender, and **pseudocysts**; sinus tracts and interconnecting draining nodules define **acne conglobata**.",
        "**Distribution follows sebaceous density** - forehead, nose, cheeks and chin, with the upper chest, shoulders and upper back involved in more severe disease; a **strictly unilateral or unusually distributed eruption suggests an external cause such as oil, cosmetic or friction**.",
        "**Secondary lesions dominate the Indian consultation**: **post-inflammatory hyperpigmentation**, which distresses patients more than the acne itself and takes months to fade, plus **post-inflammatory erythema** in lighter skin and **scars**.",
        "**Scars** are described precisely: **atrophic - ice-pick (narrow, deep, under 2 mm), rolling (broad, shallow, tethered), boxcar (sharply defined vertical walls)** - and **hypertrophic or keloidal**, which are commoner on the chest, shoulders and back and in darker skin.",
        "Differential diagnosis - **rosacea** (no comedones, flushing, telangiectasia, central face, over 30 years), **perioral dermatitis** (micropapules sparing the vermilion border, often steroid-induced), **Malassezia (pityrosporum) folliculitis** (monomorphic itchy follicular papulopustules on the trunk), **steroid acne** (monomorphic papulopustules at one stage of evolution, no comedones), and **acneiform drug eruptions**.",
      ],
    },
    {
      heading: "Grading and assessment",
      points: [
        "A practical clinical grading used widely in India is: **Grade 1 comedonal only; Grade 2 papular with comedones; Grade 3 pustular and papular; Grade 4 nodulocystic with scarring**, recorded with the site and an estimate of lesion counts.",
        "The **Global Acne Grading System (GAGS)** multiplies a 0 to 4 lesion score by a factor for each of six regions (forehead 2, right cheek 2, left cheek 2, nose 1, chin 1, chest and upper back 3), giving **mild 1 to 18, moderate 19 to 30, severe 31 to 38 and very severe above 39**.",
        "Assessment must record **the presence of scarring, the degree of post-inflammatory pigmentation, the psychological impact, previous treatments with doses and duration, and adherence** - unrecognised poor adherence is a commoner cause of failure than true drug resistance.",
        "In a woman, ask specifically about **menstrual irregularity, hirsutism, androgenic alopecia, acanthosis nigricans, weight gain and infertility**; where these are present investigate for **polycystic ovary syndrome with a pelvic ultrasound, total and free testosterone, dehydroepiandrosterone sulphate, luteinising hormone to follicle stimulating hormone ratio, and 17-hydroxyprogesterone** to exclude late-onset congenital adrenal hyperplasia.",
        "**Sudden severe nodular acne with fever, arthralgia, leukocytosis, raised inflammatory markers and osteolytic bone lesions is acne fulminans**, an emergency requiring oral corticosteroids first, with isotretinoin introduced only at a low dose after four weeks.",
        "**No routine investigation is needed for ordinary acne**; culture is reserved for suspected gram-negative folliculitis after prolonged antibiotic therapy, which presents as a sudden crop of pustules or nodules around the nose.",
      ],
    },
    {
      heading: "Treatment ladder from comedonal to nodulocystic disease",
      points: [
        "**General measures** - wash twice daily with a mild syndet cleanser and no scrubbing, use non-comedogenic oil-free moisturiser and a sunscreen (essential with retinoids and doxycycline), **stop picking and squeezing**, avoid hair oils on the forehead, and set the expectation that **any regimen needs 8 to 12 weeks before it is judged**.",
        "**Mild comedonal acne** - a **topical retinoid at night: adapalene 0.1 per cent gel is first choice** for tolerability, or tretinoin 0.025 to 0.05 per cent; warn about the **retinoid reaction of dryness, scaling and stinging in the first fortnight** and advise alternate-night application with a moisturiser rather than abandoning the drug.",
        "**Mild to moderate papulopustular acne** - a **fixed combination of adapalene 0.1 per cent with benzoyl peroxide 2.5 per cent once at night**, or benzoyl peroxide 2.5 to 5 per cent in the morning with a retinoid at night; **topical clindamycin 1 per cent should always be paired with benzoyl peroxide and never used alone**, to prevent resistance.",
        "**Moderate to severe papulopustular acne** - add an oral antibiotic: **doxycycline 100 mg daily (or 50 mg twice daily) or minocycline 100 mg daily for 8 to 12 weeks**, always **with a topical retinoid and benzoyl peroxide, and never as monotherapy**; **azithromycin 500 mg three times a week** is the alternative in pregnancy after the first trimester and in children under eight years, in whom tetracyclines are contraindicated because of dental staining.",
        "**Hormonal therapy in women** - a **combined oral contraceptive containing ethinylestradiol with cyproterone acetate, drospirenone or desogestrel**, or **spironolactone 50 to 100 mg daily** (contraindicated in pregnancy, needs contraception and periodic potassium checks); both take **three to six months** to show benefit and suit persistent lower-face acne with premenstrual flare.",
        "**Severe nodulocystic acne, acne conglobata, scarring acne, acne with severe psychological impact, or acne that has failed adequate conventional therapy** - **oral isotretinoin 0.5 to 1 mg per kilogram per day, taken with a fatty meal, continued to a cumulative dose of 120 to 150 mg per kilogram**, typically over 6 to 8 months.",
        "**Maintenance after clearance is mandatory**: continue a **topical retinoid, with or without benzoyl peroxide, for at least 6 to 12 months**, because stopping all treatment on clearance is the commonest reason acne relapses.",
        "Adjunctive procedures - **comedone extraction, intralesional triamcinolone 2.5 to 5 mg per millilitre for a painful nodule or an early keloid, chemical peels with 20 to 35 per cent glycolic acid or 20 per cent salicylic acid for comedones and pigmentation**, and, once the acne is quiet, microneedling, subcision, TCA CROSS and fractional laser for scars.",
      ],
    },
    {
      heading: "Isotretinoin: the counselling that earns the marks",
      points: [
        "Isotretinoin is **13-cis retinoic acid**, the only drug acting on all four pathogenic steps, and uniquely **reduces sebaceous gland size and sebum output by up to 90 per cent**, giving prolonged remission after a full cumulative dose.",
        "**Pregnancy category X - it is a potent teratogen** causing craniofacial, cardiac, thymic and central nervous system malformations; **two reliable contraceptive methods are required from one month before, throughout, and for one month after treatment, with a documented negative pregnancy test before starting and monthly thereafter**, and a written consent in the record.",
        "**Mucocutaneous side effects are universal and dose-related** - cheilitis (present in essentially every patient and a marker of adherence), xerosis, dry eyes and intolerance of contact lenses, epistaxis from nasal dryness, photosensitivity and secondary staphylococcal infection; manage with heavy lip balm, emollients, artificial tears and sun protection rather than by stopping the drug.",
        "**Monitoring** - baseline and repeat at 4 to 8 weeks: **fasting lipid profile and liver transaminases**; a pregnancy test monthly in women. Stop or reduce for **triglycerides above 500 mg/dL (risk of pancreatitis) or transaminases more than three times the upper limit of normal**. Routine haemogram and creatinine are not required for standard doses.",
        "**Do not combine isotretinoin with a tetracycline** because of the risk of benign intracranial hypertension; warn about **myalgia and avoid vigorous exercise and creatine kinase-raising activity**, and counsel on **night vision impairment before driving at night**.",
        "**Mood change and depression** should be asked about at every visit, with the family informed; the evidence for causation is not established, but a personal or family psychiatric history is a reason for closer follow-up rather than an absolute contraindication.",
        "**Defer elective dermabrasion, ablative laser and waxing for six months** after finishing isotretinoin because of abnormal wound healing; the older advice against all cosmetic procedures has been relaxed but this remains the safe examination answer.",
        "An **initial flare in the first month** is common in severe nodular disease and is managed with a lower starting dose of 0.25 to 0.5 mg per kilogram per day or a short course of oral prednisolone, not by abandoning the drug.",
      ],
    },
    {
      heading: "Scarring, pigmentation and the counselling visit",
      points: [
        "**Prevention of scarring is the reason to treat acne early and adequately**; state explicitly that any nodular or scarring acne is an indication to move directly to isotretinoin rather than to cycle through further antibiotic courses.",
        "**Post-inflammatory hyperpigmentation** is the dominant complaint in Indian skin: treat the acne first, then use **daily broad-spectrum sunscreen, a topical retinoid, azelaic acid 15 to 20 per cent, niacinamide, or hydroquinone 2 to 4 per cent for a limited period under supervision**, and give a realistic timeline of **three to six months**.",
        "Explain the natural history - **acne is chronic and relapsing, it is not caused by dirt or by masturbation or by ordinary food, and squeezing lesions causes scars** - and correct these beliefs specifically, since they drive non-adherence and the use of unregulated fairness and steroid creams.",
        "**Topical steroids must never be prescribed for acne**: they induce steroid acne, perioral dermatitis, atrophy and rebound, and their over-the-counter availability in India makes this a routine harm to look for at the first visit.",
        "Document the **psychological burden** - acne carries measurable rates of anxiety, depression, social withdrawal and, in severe disease, suicidal ideation - and treat severity of impact as an independent indication for stronger therapy even when the lesion count is modest.",
        "Follow up at **8 to 12 weeks** with the same lighting and, ideally, photographs; success is judged by **new lesion counts, not by the residual pigmentation**, and a step up is warranted when there is no meaningful reduction despite documented adherence.",
      ],
    },
  ],
  tables: [
    {
      heading: "Treatment ladder by acne grade",
      columns: ["Grade and lesions", "First line", "Second line", "Notes"],
      rows: [
        ["Grade 1 - comedones only", "Topical adapalene 0.1 per cent at night", "Add benzoyl peroxide 2.5 per cent or salicylic acid", "Judge at 8 to 12 weeks; expect a retinoid reaction early"],
        ["Grade 2 - papules with comedones", "Fixed adapalene with benzoyl peroxide nightly", "Add topical clindamycin 1 per cent with benzoyl peroxide", "Never use topical antibiotic alone"],
        ["Grade 3 - papulopustular, widespread", "Oral doxycycline 100 mg daily with topical retinoid and benzoyl peroxide", "Azithromycin 500 mg thrice weekly; hormonal therapy in women", "Limit oral antibiotic to 8 to 12 weeks"],
        ["Grade 4 - nodulocystic or scarring", "Oral isotretinoin 0.5 to 1 mg/kg/day to 120 to 150 mg/kg total", "Prednisolone first in acne fulminans, then low-dose isotretinoin", "Contraception and monthly pregnancy tests in women"],
        ["Any grade after clearance", "Maintenance topical retinoid for 6 to 12 months", "Add benzoyl peroxide if inflammatory lesions recur", "Stopping everything on clearance causes relapse"],
      ],
    },
    {
      heading: "Isotretinoin: dose, monitoring and cautions",
      columns: ["Item", "Detail"],
      rows: [
        ["Dose", "0.5 to 1 mg per kilogram per day with a fatty meal, cumulative 120 to 150 mg per kilogram"],
        ["Duration", "Usually 6 to 8 months; relapse is likelier if the cumulative dose is not reached"],
        ["Absolute contraindication", "Pregnancy and planned pregnancy; hypervitaminosis A; concurrent tetracycline"],
        ["Baseline tests", "Fasting lipid profile, liver transaminases, pregnancy test in women of child-bearing potential"],
        ["Repeat tests", "Lipids and transaminases at 4 to 8 weeks; monthly pregnancy test during therapy"],
        ["Stop or reduce if", "Triglycerides above 500 mg/dL, transaminases above three times normal, severe mood change, visual disturbance"],
        ["Contraception", "Two methods from one month before until one month after therapy, with written consent"],
      ],
    },
  ],
  redFlags: [
    "Explosive nodular acne with fever, arthralgia, leukocytosis and bone pain - acne fulminans; start oral corticosteroids and refer, introducing isotretinoin only later and at low dose.",
    "Any nodules, sinus tracts or early scarring - do not continue cycling antibiotics; this is an indication for isotretinoin.",
    "A woman on isotretinoin with a missed period or unreliable contraception - stop the drug and perform a pregnancy test the same day.",
    "Severe abdominal pain on isotretinoin with triglycerides above 500 mg/dL - stop the drug and exclude acute pancreatitis.",
    "Headache with visual blurring or papilloedema in a patient on isotretinoin plus doxycycline - benign intracranial hypertension; stop both and refer urgently.",
    "Acne with hirsutism, menstrual irregularity, acanthosis nigricans or rapid virilisation - investigate for polycystic ovary syndrome or an androgen-secreting tumour.",
    "Expressed suicidal ideation or new severe depression in a patient with acne, on or off isotretinoin - urgent mental health assessment.",
  ],
  pearls: [
    "No comedones, no acne - if there is not a single comedone, reconsider rosacea, steroid acne, Malassezia folliculitis or perioral dermatitis.",
    "Benzoyl peroxide produces no bacterial resistance and should accompany every topical or oral antibiotic used for acne.",
    "Topical antibiotics are never used alone, and oral antibiotics are never used without a topical retinoid.",
    "Judge any acne regimen at 8 to 12 weeks; changing drugs every three weeks guarantees failure.",
    "Tetracyclines are contraindicated in pregnancy and under eight years - use azithromycin or topical therapy instead.",
    "Isotretinoin works only if the cumulative dose of 120 to 150 mg per kilogram is reached; stopping early is the main cause of relapse.",
    "Cheilitis is expected on isotretinoin and is the simplest bedside marker that the patient is actually taking the drug.",
    "Treat the acne to treat the pigmentation - post-inflammatory hyperpigmentation cannot be cleared while new inflammatory lesions keep appearing.",
  ],
  theory: [
    {
      id: "dermatology-acne-vulgaris-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Describe the pathogenesis and clinical grading of acne vulgaris. Outline the management of a 19-year-old man with nodulocystic acne of the face, chest and back, including the precautions of the drug you would use.",
      openingLines: [
        "Acne vulgaris is a chronic inflammatory disorder of the pilosebaceous unit occurring in areas of high sebaceous density, characterised by comedones, papules, pustules, nodules, cysts and scars, and affecting more than 80 per cent of adolescents.",
        "Its four pathogenic steps - follicular hyperkeratinisation, androgen-driven sebum excess, colonisation with Cutibacterium acnes and perifollicular inflammation - correspond directly to the four classes of drug used to treat it.",
      ],
      answer: [
        {
          heading: "1. Pathogenesis",
          points: [
            "Follicular hyperkeratinisation forms the microcomedone, the precursor of all acne lesions - target of topical retinoids.",
            "Androgen-dependent sebaceous hyperplasia with increased sebum at adrenarche - target of hormonal therapy and isotretinoin.",
            "Colonisation with Cutibacterium acnes, which hydrolyses triglycerides to free fatty acids and activates Toll-like receptor 2 - target of benzoyl peroxide and antibiotics.",
            "Perifollicular inflammation with neutrophils and interleukin 1 beta, present even in clinically normal skin, producing papules, pustules and nodules.",
            "Aggravating factors - drugs (corticosteroids, androgens, lithium, phenytoin, isoniazid, ciclosporin), cosmetics and hair oils, friction, humidity and high glycaemic-index diet.",
          ],
        },
        {
          heading: "2. Clinical features and grading",
          points: [
            "Non-inflammatory lesions - open comedones (blackheads) and closed comedones (whiteheads); inflammatory lesions - papules, pustules, nodules and pseudocysts.",
            "Distribution over face, upper chest, shoulders and upper back; sequelae are post-inflammatory hyperpigmentation and scarring, which may be ice-pick, rolling, boxcar, hypertrophic or keloidal.",
            "Grading - Grade 1 comedonal, Grade 2 papular, Grade 3 pustular, Grade 4 nodulocystic with scarring; the Global Acne Grading System scores six regions to give mild, moderate, severe and very severe categories.",
            "Assess scarring, pigmentation, psychological impact, previous treatment and adherence at every visit.",
          ],
        },
        {
          heading: "3. Management of nodulocystic acne in this patient",
          points: [
            "General - gentle syndet cleansing twice daily, non-comedogenic moisturiser and sunscreen, no picking or squeezing, avoid hair oils and occlusive cosmetics.",
            "Nodulocystic and scarring acne is a direct indication for oral isotretinoin 0.5 to 1 mg per kilogram per day with a fatty meal, continued to a cumulative dose of 120 to 150 mg per kilogram over 6 to 8 months.",
            "In severe nodular disease start at 0.25 to 0.5 mg per kilogram per day, or add oral prednisolone briefly, to avoid the initial flare.",
            "Intralesional triamcinolone 2.5 to 5 mg per millilitre for individual painful nodules and early keloids on the chest and back.",
            "After clearance, maintenance with a topical retinoid for 6 to 12 months, and scar revision by microneedling, subcision, TCA CROSS or fractional laser deferred for six months after isotretinoin.",
          ],
        },
        {
          heading: "4. Precautions with isotretinoin",
          points: [
            "Teratogenicity - pregnancy category X; two contraceptive methods from one month before to one month after, monthly pregnancy tests, and documented written consent in women of child-bearing potential.",
            "Baseline fasting lipids and liver transaminases, repeated at 4 to 8 weeks; stop for triglycerides above 500 mg/dL or transaminases above three times normal.",
            "Universal mucocutaneous dryness - cheilitis, xerosis, dry eyes, epistaxis and photosensitivity - managed with emollients, lip balm, artificial tears and sunscreen.",
            "Do not co-prescribe tetracyclines because of benign intracranial hypertension; warn about myalgia, impaired night vision and mood change, and enquire about mood at every visit.",
            "Avoid elective dermabrasion, ablative laser and waxing for six months after stopping.",
          ],
        },
      ],
      mustDraw: [
        "A labelled diagram of the pilosebaceous unit showing the microcomedone, open and closed comedone and inflammatory nodule.",
        "A table of the acne treatment ladder from grade 1 to grade 4 with first-line and second-line agents.",
      ],
      markSplit: [
        { part: "Pathogenesis with the four steps", marks: 3 },
        { part: "Clinical features and grading", marks: 2 },
        { part: "Management including isotretinoin dosing", marks: 3 },
        { part: "Precautions and monitoring of isotretinoin", marks: 2 },
      ],
      keywords: ["acne vulgaris", "comedone", "isotretinoin", "cumulative dose", "teratogenicity", "grading"],
    },
    {
      id: "dermatology-acne-vulgaris-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on the approach to acne in an adult woman, including hormonal therapy.",
      openingLines: [
        "Adult female acne is acne persisting beyond 25 years or arising for the first time in adult life, typically inflammatory papules and nodules on the lower face, jawline and neck with premenstrual exacerbation.",
        "It requires a deliberate search for hyperandrogenism and responds particularly well to hormonal therapy, which conventional acne regimens do not provide.",
      ],
      answer: [
        {
          heading: "Assessment",
          points: [
            "History of menstrual irregularity, hirsutism, androgenic alopecia, weight gain, infertility, galactorrhoea and rapid virilisation.",
            "Examination for acanthosis nigricans, hirsutism scored by the Ferriman-Gallwey scale, central obesity and clitoromegaly.",
            "Investigations where hyperandrogenism is suspected - pelvic ultrasound, total and free testosterone, DHEAS, LH to FSH ratio, prolactin, and 17-hydroxyprogesterone to exclude late-onset congenital adrenal hyperplasia; blood tests are taken in the early follicular phase and off oral contraceptives.",
            "Exclude cosmetic acne from hair oils and comedogenic make-up, and drug causes including corticosteroids and progestogen-only contraception.",
          ],
        },
        {
          heading: "Treatment",
          points: [
            "Standard topical therapy - adapalene 0.1 per cent with benzoyl peroxide 2.5 per cent, plus azelaic acid 15 to 20 per cent, which also helps post-inflammatory hyperpigmentation and is safe in pregnancy.",
            "Combined oral contraceptive containing ethinylestradiol with cyproterone acetate, drospirenone or desogestrel, after excluding contraindications such as smoking above 35 years, migraine with aura, thromboembolism and uncontrolled hypertension.",
            "Spironolactone 50 to 100 mg daily as an androgen receptor blocker, with contraception, avoiding pregnancy, and periodic serum potassium in those with renal impairment or on other potassium-retaining drugs.",
            "Both hormonal options need three to six months for full effect and are usually combined with topical therapy.",
            "Oral isotretinoin for nodular or scarring disease, with the standard contraceptive and monitoring requirements.",
            "Metformin, weight reduction and management of dyslipidaemia and glucose intolerance where polycystic ovary syndrome is confirmed.",
          ],
        },
      ],
      markSplit: [
        { part: "Assessment and investigation for hyperandrogenism", marks: 2 },
        { part: "Topical and hormonal treatment with cautions", marks: 3 },
      ],
      keywords: ["adult female acne", "polycystic ovary syndrome", "spironolactone", "combined oral contraceptive", "azelaic acid"],
    },
  ],
  mcqs: [
    {
      id: "dermatology-acne-vulgaris-q1",
      stem: "A 17-year-old boy has multiple open and closed comedones on the forehead and nose with a few papules, but no nodules and no scars. What is the most appropriate first-line treatment?",
      options: [
        "Oral doxycycline 100 mg daily for three months",
        "Topical adapalene 0.1 per cent gel at night, with benzoyl peroxide if papules persist",
        "Oral isotretinoin 0.5 mg per kilogram per day",
        "Topical clindamycin 1 per cent alone twice daily",
        "Topical hydrocortisone 1 per cent twice daily",
      ],
      answer: 1,
      explanation:
        "Comedonal acne with a few papules is mild disease, and a topical retinoid such as adapalene acts on the microcomedone, the primary lesion, making it the correct first-line drug, with benzoyl peroxide added for inflammatory lesions. An oral antibiotic is disproportionate for mild comedonal disease and encourages resistance. Isotretinoin is reserved for nodulocystic, scarring or refractory acne. Topical clindamycin as monotherapy is specifically discouraged because Cutibacterium acnes develops resistance rapidly unless benzoyl peroxide is co-prescribed, and it has no effect on comedones. A topical steroid causes steroid acne and would make the condition worse.",
      difficulty: "easy",
    },
    {
      id: "dermatology-acne-vulgaris-q2",
      stem: "A 22-year-old woman on isotretinoin 40 mg daily for nodulocystic acne develops severe epigastric pain and vomiting after two months. Fasting triglycerides are 720 mg/dL. What is the correct action?",
      options: [
        "Continue isotretinoin and add a proton pump inhibitor",
        "Stop isotretinoin, exclude acute pancreatitis and manage the hypertriglyceridaemia",
        "Halve the isotretinoin dose and repeat the lipids in three months",
        "Add doxycycline for the acne while continuing isotretinoin",
        "Reassure, as hypertriglyceridaemia on isotretinoin is always benign",
      ],
      answer: 1,
      explanation:
        "Triglycerides above 500 mg/dL on isotretinoin carry a risk of acute pancreatitis, and epigastric pain with vomiting in this setting requires the drug to be stopped, serum amylase and lipase checked, and the lipid abnormality treated with diet, alcohol avoidance and a fibrate if needed. Continuing the drug with an acid suppressant misattributes the symptom to dyspepsia and leaves the patient exposed to pancreatitis. Halving the dose and rechecking in three months is far too slow for a triglyceride level this high with symptoms. Adding doxycycline is contraindicated alongside isotretinoin because of benign intracranial hypertension. Hypertriglyceridaemia is usually mild on isotretinoin but at this level with symptoms it is emphatically not benign.",
      difficulty: "hard",
    },
    {
      id: "dermatology-acne-vulgaris-q3",
      stem: "A 30-year-old woman has monomorphic erythematous papules and pustules on the cheeks and chin with flushing and telangiectasia, but no comedones. She reports burning after applying cosmetics. What is the diagnosis?",
      options: [
        "Acne vulgaris grade 2",
        "Papulopustular rosacea",
        "Malassezia folliculitis",
        "Perioral dermatitis",
        "Acne conglobata",
      ],
      answer: 1,
      explanation:
        "Central facial papules and pustules in an adult with flushing, telangiectasia, stinging with cosmetics and, decisively, the complete absence of comedones is papulopustular rosacea, treated with topical metronidazole or ivermectin, azelaic acid and oral doxycycline. Acne vulgaris requires comedones, which are absent here. Malassezia folliculitis produces itchy monomorphic follicular papulopustules chiefly on the upper trunk and shoulders and responds to antifungals. Perioral dermatitis gives grouped micropapules around the mouth with a characteristic clear zone at the vermilion border and usually follows topical steroid use. Acne conglobata is severe nodular acne with sinus tracts and scarring, which is not described.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-acne-vulgaris-q4",
      stem: "A 26-year-old woman with acne on the jawline, irregular cycles and hirsutism has failed topical therapy. She does not wish to conceive. Which additional treatment is most appropriate?",
      options: [
        "Oral prednisolone 10 mg daily",
        "Spironolactone 50 to 100 mg daily or a combined oral contraceptive, with contraception advice",
        "Topical hydroquinone 4 per cent",
        "Long-term oral doxycycline for one year",
        "Oral ketoconazole 200 mg daily",
      ],
      answer: 1,
      explanation:
        "Lower-face acne with menstrual irregularity and hirsutism suggests hyperandrogenism, and hormonal therapy - spironolactone as an androgen receptor blocker, or a combined oral contraceptive containing an anti-androgenic progestogen - directly targets that mechanism, taking three to six months to work. Systemic prednisolone has no role in ordinary acne and causes steroid acne. Hydroquinone treats post-inflammatory hyperpigmentation but does nothing for active lesions. Continuous oral antibiotics for a year breach the recommended 8 to 12 week limit and drive resistance without addressing the hormonal driver. Oral ketoconazole is hepatotoxic and is not used for acne, though its anti-androgen effect is sometimes wrongly cited.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-acne-vulgaris-q5",
      stem: "A 16-year-old boy on doxycycline and topical clindamycin for four months develops a sudden crop of pustules and a few nodules clustered around the nose and central face. Which diagnosis should be considered?",
      options: [
        "Acne fulminans",
        "Gram-negative folliculitis",
        "Steroid acne",
        "Acne mechanica",
        "Pomade acne",
      ],
      answer: 1,
      explanation:
        "A sudden crop of pustules or nodules around the nose and central face after prolonged antibiotic therapy for acne is gram-negative folliculitis caused by Klebsiella, Escherichia coli or Proteus species, confirmed by culture and treated by stopping the antibiotic and giving oral isotretinoin. Acne fulminans is explosive ulcerating nodular acne with fever, arthralgia, leukocytosis and bone lesions, none of which is described. Steroid acne is a monomorphic papulopustular eruption at one stage of evolution following corticosteroid use, and no steroid is mentioned. Acne mechanica follows friction from straps, helmets or masks in the shape of the pressure. Pomade acne is comedonal acne along the forehead hairline from hair oils.",
      difficulty: "hard",
    },
  ],
  cards: [
    {
      id: "dermatology-acne-vulgaris-c1",
      front: "The four pathogenic steps of acne and the drug for each.",
      back: "Follicular hyperkeratinisation - retinoid; androgen-driven sebum excess - hormonal therapy and isotretinoin; Cutibacterium acnes - benzoyl peroxide and antibiotics; perifollicular inflammation - antibiotics, retinoids and isotretinoin.",
    },
    {
      id: "dermatology-acne-vulgaris-c2",
      front: "Open versus closed comedone.",
      back: "Open comedone (blackhead) - dilated follicular orifice with oxidised keratin plug. Closed comedone (whitehead) - 1 to 2 mm skin-coloured papule with a barely visible opening; both are the primary non-inflammatory lesions.",
    },
    {
      id: "dermatology-acne-vulgaris-c3",
      front: "Clinical grading of acne, grades 1 to 4.",
      back: "1 - comedones only; 2 - papules with comedones; 3 - pustules and papules, more widespread; 4 - nodules, cysts and scarring.",
    },
    {
      id: "dermatology-acne-vulgaris-c4",
      front: "Why is benzoyl peroxide added to every antibiotic regimen in acne?",
      back: "It is bactericidal against Cutibacterium acnes and generates no resistance, so it protects the antibiotic; topical antibiotics must never be used as monotherapy.",
    },
    {
      id: "dermatology-acne-vulgaris-c5",
      front: "Isotretinoin dose and cumulative target.",
      back: "0.5 to 1 mg per kilogram per day with a fatty meal, to a cumulative dose of 120 to 150 mg per kilogram over about 6 to 8 months; a lower cumulative dose predicts relapse.",
    },
    {
      id: "dermatology-acne-vulgaris-c6",
      front: "Monitoring on isotretinoin.",
      back: "Fasting lipids and liver transaminases at baseline and 4 to 8 weeks, monthly pregnancy tests in women; stop for triglycerides above 500 mg/dL or transaminases above three times normal.",
    },
    {
      id: "dermatology-acne-vulgaris-c7",
      front: "Why must tetracyclines not be combined with isotretinoin?",
      back: "Both raise intracranial pressure, so the combination risks benign intracranial hypertension with headache, visual blurring and papilloedema.",
    },
    {
      id: "dermatology-acne-vulgaris-c8",
      front: "Types of atrophic acne scar.",
      back: "Ice-pick - narrow and deep, under 2 mm; rolling - broad, shallow, tethered by dermal bands; boxcar - round or oval with sharply defined vertical walls.",
    },
    {
      id: "dermatology-acne-vulgaris-c9",
      front: "Acne treatment in pregnancy.",
      back: "Safe - azelaic acid, benzoyl peroxide, topical clindamycin and erythromycin, and oral erythromycin or azithromycin after the first trimester. Contraindicated - all retinoids, tetracyclines and hormonal anti-androgens.",
    },
    {
      id: "dermatology-acne-vulgaris-c10",
      front: "How long before an acne regimen is judged, and what is maintenance?",
      back: "Judge at 8 to 12 weeks with lesion counts; after clearance continue a topical retinoid with or without benzoyl peroxide for 6 to 12 months as maintenance.",
    },
  ],
  references: [
    "IADVL Textbook of Dermatology, 5th edition, 2022 - acne and related disorders",
    "Indian Acne Alliance and IADVL consensus recommendations for the management of acne vulgaris, 2021",
    "American Academy of Dermatology guidelines of care for the management of acne vulgaris, 2024",
    "European S3 guideline for the treatment of acne, updated 2016 (EDF and EADV)",
    "Rook's Textbook of Dermatology, 10th edition, 2024 - acne vulgaris",
    "Neena Khanna, Illustrated Synopsis of Dermatology and Sexually Transmitted Diseases, 6th edition, 2020",
  ],
});

topics.push({
  id: "dermatology-urticaria-angioedema",
  title: "Urticaria and angioedema, acute and chronic",
  oneLiner:
    "Urticaria is a mast-cell-driven eruption of transient itchy wheals, each lasting less than 24 hours and resolving without residual marks, with or without angioedema, classified as acute (under six weeks) or chronic spontaneous and inducible (six weeks or longer), and managed by a stepwise increase of second-generation H1 antihistamines up to four times the standard dose before adding omalizumab or ciclosporin, with adrenaline reserved for airway angioedema and anaphylaxis.",
  frequency: "common",
  keywords: [
    "urticaria",
    "wheal",
    "angioedema",
    "mast cell",
    "histamine",
    "chronic spontaneous urticaria",
    "inducible urticaria",
    "dermographism",
    "cholinergic urticaria",
    "autologous serum skin test",
    "UAS7",
    "levocetirizine",
    "fexofenadine",
    "omalizumab",
    "ciclosporin",
    "hereditary angioedema",
    "C1 esterase inhibitor",
    "urticarial vasculitis",
    "adrenaline",
    "anaphylaxis",
  ],
  sections: [
    {
      heading: "Definition, pathophysiology and classification",
      points: [
        "Urticaria is defined by the **wheal - a transient, itchy, oedematous, pale or erythematous elevation with a surrounding flare, of variable size and shape, that resolves within 24 hours leaving completely normal skin**; **angioedema** is the same oedema in the deep dermis and subcutis, causing painful or tingling rather than itchy swelling that takes up to 72 hours to resolve.",
        "The final common pathway is **mast cell degranulation releasing histamine, leukotrienes, prostaglandin D2, platelet activating factor and tryptase**, producing vasodilatation, increased vascular permeability and sensory nerve stimulation - histamine acting on **H1 receptors** explains why H1 antihistamines are the mainstay.",
        "Mast cells are triggered **immunologically** (type I IgE-mediated to foods, drugs or venom; type II autoimmune with IgG against the IgE receptor FcepsilonRI or against IgE itself) or **non-immunologically** (opioids, radiocontrast media, vancomycin, NSAIDs through cyclo-oxygenase inhibition, and physical stimuli).",
        "**Classification by duration** - **acute urticaria under six weeks** and **chronic urticaria six weeks or longer**, the latter divided into **chronic spontaneous urticaria** (no external trigger, about two-thirds of which are autoimmune) and **chronic inducible urticaria** (a reproducible physical or other trigger).",
        "**Chronic inducible urticarias** - symptomatic dermographism (the commonest), cold, delayed pressure, solar, heat, vibratory, cholinergic, aquagenic and contact urticaria; each is confirmed by a specific provocation test such as the **FricTest for dermographism, the ice cube test for cold urticaria and exercise or a hot bath for cholinergic urticaria**.",
        "**Angioedema without wheals** is a separate problem: consider **ACE inhibitor-induced angioedema (bradykinin-mediated, may begin years after starting the drug), hereditary angioedema from C1 esterase inhibitor deficiency, and acquired C1 inhibitor deficiency with lymphoproliferative disease** - none of these responds to antihistamines, steroids or adrenaline.",
      ],
    },
    {
      heading: "Clinical features and how to describe the lesion",
      points: [
        "Describe as **multiple, evanescent, well-demarcated erythematous or skin-coloured raised wheals of variable size, from a few millimetres to large annular or polycyclic plaques with central clearing, distributed anywhere on the body, with normal intervening skin and no scaling, crusting or scarring**.",
        "**The single most important history question is how long an individual wheal lasts** - not how long the illness has lasted; circle a wheal with a pen and review it. **Wheals lasting under 24 hours are urticaria; wheals lasting more than 24 hours suggest urticarial vasculitis and require a biopsy**.",
        "The wheal is **intensely itchy and the patient rubs rather than scratches**, so **excoriations are typically absent** - a useful negative sign that separates urticaria from eczema, scabies and prurigo.",
        "**Angioedema** affects **eyelids, lips, tongue, ears, genitalia, hands and feet, and the larynx**; it is asymmetrical, non-pitting and non-dependent, and occurs in about 40 per cent of chronic spontaneous urticaria.",
        "In children, ask about a preceding **viral upper respiratory infection, which is the commonest cause of acute urticaria**, and about drugs - in Indian practice **NSAIDs, beta lactam antibiotics and sulphonamides** are the usual culprits.",
        "The **serum sickness-like reaction** in a child - urticarial and annular purpuric plaques with fever and joint swelling one to two weeks after an antibiotic - and **acute annular urticaria** with dusky centres, are commonly mistaken for erythema multiforme; **the key is that individual lesions still resolve within 24 hours and leave no residue**.",
      ],
    },
    {
      heading: "Causes, investigation and what not to test",
      points: [
        "**Acute urticaria** - viral infections (the commonest in children), drugs (penicillins, cephalosporins, sulphonamides, NSAIDs, opioids, radiocontrast), foods (nuts, shellfish, egg, milk, wheat) and true IgE-mediated food allergy, insect stings, and parasitic infestations.",
        "**Chronic spontaneous urticaria** - about half is autoimmune with functional IgG autoantibodies against FcepsilonRI; associations include **autoimmune thyroid disease, Helicobacter pylori infection, chronic parasitic infestation (Strongyloides, Giardia, Ascaris in India), and chronic focal infection** such as dental sepsis or sinusitis.",
        "**Investigation in acute urticaria is unnecessary** unless the history points to a specific trigger - the diagnosis is clinical and testing without a lead generates false positives and anxiety.",
        "In **chronic urticaria**, a limited screen is justified: **complete blood count with differential, erythrocyte sedimentation rate and C-reactive protein, thyroid stimulating hormone and anti-thyroid peroxidase antibody, stool examination for ova and cysts, and urinalysis**; add specific tests only when the history or examination directs you.",
        "The **autologous serum skin test** is a bedside test of autoreactivity - intradermal injection of the patient's own serum producing a wheal 1.5 mm larger than the saline control at 30 minutes - and supports an autoimmune mechanism but does not change first-line treatment.",
        "**Take a skin biopsy** when wheals last over 24 hours, burn or hurt rather than itch, leave bruising or hyperpigmentation, or are accompanied by fever, arthralgia and a raised ESR - this is **urticarial vasculitis**, which needs complement levels (C3, C4, C1q), antinuclear antibody, urinalysis for glomerulonephritis and treatment of the underlying disease.",
        "Score severity with the **Urticaria Activity Score over 7 days (UAS7)** - daily wheal number (0 to 3) plus itch (0 to 3), summed over a week to a maximum of 42 - and use it to justify each escalation of therapy.",
      ],
    },
    {
      heading: "Treatment: the four-step ladder",
      points: [
        "**Step 1 - a second-generation non-sedating H1 antihistamine at standard dose, daily and regularly rather than as needed**: cetirizine 10 mg, levocetirizine 5 mg, fexofenadine 180 mg, loratadine 10 mg, desloratadine 5 mg or bilastine 20 mg once daily.",
        "**Step 2 - increase the same antihistamine up to four times the standard licensed dose** (for example levocetirizine 5 mg up to four times daily, or fexofenadine 180 mg twice or thrice daily) before adding any other drug; this is the single most examined point and is supported by the EAACI/GA2LEN/EuroGuiDerm guideline.",
        "**Step 3 - add omalizumab 300 mg subcutaneously every four weeks** in antihistamine-refractory chronic spontaneous urticaria; response is often seen within one to two doses and treatment is continued for at least six months before withdrawal is attempted.",
        "**Step 4 - ciclosporin 3 to 5 mg per kilogram per day** for a limited period with blood pressure and renal monitoring, for patients who fail or cannot access omalizumab.",
        "**A short course of oral prednisolone 0.5 mg per kilogram per day for three to seven days** may be used for a severe acute exacerbation or severe angioedema, but **long-term systemic steroids have no place in chronic urticaria** and are a common and harmful error.",
        "**First-generation sedating antihistamines such as hydroxyzine and chlorpheniramine are not first line** because of impaired cognition, driving risk and disturbed REM sleep, though a single night-time dose is sometimes used for sleep.",
        "**Avoid identified aggravants** - NSAIDs including aspirin, opioids, alcohol, heat, tight clothing, and stress; treat any identified infection or infestation; and in inducible urticaria, the trigger avoidance plus regular antihistamine is the whole of treatment.",
        "**In pregnancy**, loratadine and cetirizine have the best safety record and are preferred; **in children**, use weight-appropriate second-generation antihistamines, and note that up-dosing in children is done cautiously with specialist advice.",
      ],
    },
    {
      heading: "Angioedema, anaphylaxis and the emergency response",
      points: [
        "**Anaphylaxis is a clinical diagnosis**: acute onset with **skin or mucosal involvement plus either respiratory compromise (stridor, wheeze, hypoxia) or hypotension or persistent gastrointestinal symptoms**, or hypotension after exposure to a known allergen.",
        "**Adrenaline 0.5 mg (0.5 mL of 1 in 1000) intramuscularly into the anterolateral thigh, repeated every 5 to 15 minutes as needed, is the first and only life-saving drug**; the paediatric dose is 0.01 mg per kilogram to a maximum of 0.5 mg. **There is no absolute contraindication to adrenaline in anaphylaxis.**",
        "Then lay the patient flat with the legs raised (or left lateral in pregnancy, sitting up if breathless), give **high-flow oxygen, intravenous crystalloid 20 mL per kilogram bolus**, and secure the airway early; **antihistamines and hydrocortisone are second-line adjuncts and never a substitute for adrenaline**.",
        "Observe for **6 to 12 hours because of biphasic reactions**, prescribe an adrenaline auto-injector where available with training, provide a written emergency plan, and refer for allergy assessment and serum tryptase measurement one to two hours after the reaction.",
        "**ACE inhibitor angioedema** typically involves the lips, tongue and larynx without wheals or itching, may start months to years after starting the drug, and requires **permanent withdrawal of all ACE inhibitors** - an angiotensin receptor blocker may be substituted cautiously.",
        "**Hereditary angioedema** presents with recurrent non-itchy angioedema without wheals, abdominal pain attacks from bowel wall oedema, laryngeal oedema, a family history, and often onset in childhood; **complement C4 is low between and during attacks and is the best screening test**, with C1 esterase inhibitor level and function to confirm.",
        "Hereditary angioedema attacks **do not respond to adrenaline, antihistamines or corticosteroids**; treat with **C1 esterase inhibitor concentrate, icatibant (a bradykinin B2 receptor antagonist) or fresh frozen plasma where those are unavailable**, and use danazol or tranexamic acid for long-term prophylaxis.",
      ],
    },
    {
      heading: "Counselling, prognosis and pitfalls",
      points: [
        "Explain that **chronic spontaneous urticaria is a self-limiting disease of the mast cell rather than an allergy**: an external cause is found in only a small minority, **elaborate allergy testing and elimination diets do more harm than good**, and the aim is complete symptom control while the disease runs its course.",
        "Give the prognosis honestly - **about half of chronic spontaneous urticaria resolves within one year and the majority within five**, with a longer course when angioedema, autoimmunity or an inducible component is present.",
        "Emphasise **regular daily dosing rather than on-demand use**; taking an antihistamine only when wheals appear is the commonest reason for apparent treatment failure.",
        "Warn about **the pseudoallergen and NSAID trap**: aspirin and other NSAIDs aggravate up to 30 per cent of chronic urticaria, so use paracetamol for pain and fever.",
        "Document any episode of **angioedema of the tongue or throat, difficulty swallowing or a change in voice** as an indication for immediate emergency care, and give the patient a written action plan.",
        "**Do not diagnose urticaria when individual lesions persist beyond a day, leave bruises or pigmentation, or scale** - that is urticarial vasculitis, a fixed drug eruption or an early bullous pemphigoid (urticarial phase), each of which needs a different pathway.",
      ],
    },
  ],
  tables: [
    {
      heading: "Stepwise treatment of chronic urticaria",
      columns: ["Step", "Treatment", "Typical dose", "Review after"],
      rows: [
        ["1", "Second-generation H1 antihistamine, standard dose, daily", "Levocetirizine 5 mg or fexofenadine 180 mg once daily", "2 to 4 weeks"],
        ["2", "Same antihistamine up-dosed to a maximum of four times standard", "Levocetirizine 5 mg up to four times daily", "2 to 4 weeks"],
        ["3", "Add omalizumab", "300 mg subcutaneously every 4 weeks", "3 months, continue at least 6 months"],
        ["4", "Add ciclosporin", "3 to 5 mg per kilogram per day for a limited period", "Monthly, with blood pressure and creatinine"],
        ["Rescue only", "Short course oral prednisolone", "0.5 mg per kilogram per day for 3 to 7 days", "Never long term"],
      ],
    },
    {
      heading: "Urticaria versus urticarial vasculitis versus hereditary angioedema",
      columns: ["Feature", "Chronic spontaneous urticaria", "Urticarial vasculitis", "Hereditary angioedema"],
      rows: [
        ["Duration of a single lesion", "Less than 24 hours", "More than 24 hours", "Swelling for 24 to 72 hours"],
        ["Symptom", "Itch", "Burning and pain", "Tightness, no itch"],
        ["Residual mark", "None", "Purpura or hyperpigmentation", "None"],
        ["Wheals present", "Yes", "Yes, fixed", "No, angioedema only"],
        ["Key test", "Clinical, UAS7, autologous serum skin test", "Skin biopsy, C3, C4, C1q, ANA, urinalysis", "Low C4, then C1 inhibitor level and function"],
        ["Treatment", "Antihistamine ladder, omalizumab, ciclosporin", "Treat cause; dapsone, colchicine, steroids", "C1 inhibitor concentrate, icatibant, or fresh frozen plasma"],
      ],
    },
  ],
  redFlags: [
    "Swelling of the tongue, throat or a change in voice, stridor or difficulty swallowing - impending airway obstruction; give intramuscular adrenaline and secure the airway.",
    "Urticaria with wheeze, hypotension, faintness or persistent vomiting after a drug, food or sting - anaphylaxis; adrenaline 0.5 mg intramuscularly into the thigh immediately.",
    "Individual wheals lasting more than 24 hours, burning rather than itching, or leaving bruising - urticarial vasculitis; biopsy and check complement and urinalysis.",
    "Urticaria with fever, weight loss, arthralgia or a raised ESR - underlying systemic disease, vasculitis or connective tissue disease.",
    "Recurrent angioedema without wheals, with abdominal pain attacks or a family history - hereditary angioedema; check C4 and do not rely on adrenaline or steroids.",
    "Angioedema of the lips or tongue in a patient taking an ACE inhibitor - stop the drug permanently and observe the airway.",
    "Urticaria in a pregnant woman in the third trimester with intense itch, especially with abdominal striae involvement - consider polymorphic eruption of pregnancy or pemphigoid gestationis and refer.",
  ],
  pearls: [
    "Ask how long one wheal lasts, not how long the rash has lasted - under 24 hours is urticaria, over 24 hours is vasculitis until biopsied.",
    "Urticaria itches but is rubbed rather than scratched, so excoriations are typically absent - a useful distinguishing sign.",
    "Up-dose one second-generation antihistamine to four times the standard dose before adding any second drug.",
    "Antihistamines must be taken regularly every day, not only when wheals appear.",
    "Long-term oral steroids have no place in chronic urticaria; they only guarantee steroid side effects and rebound.",
    "Angioedema without wheals is not ordinary urticaria - think ACE inhibitors, hereditary or acquired C1 inhibitor deficiency.",
    "In anaphylaxis, adrenaline goes intramuscularly into the anterolateral thigh first; antihistamines and steroids are adjuncts only.",
    "Extensive food allergy testing in chronic spontaneous urticaria is low yield and often harmful - the disease is usually autoimmune and self-limiting.",
  ],
  theory: [
    {
      id: "dermatology-urticaria-angioedema-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Define urticaria and angioedema. Classify urticaria, describe its pathogenesis and outline the stepwise management of a patient with chronic spontaneous urticaria of one year's duration.",
      openingLines: [
        "Urticaria is characterised by wheals - transient, itchy, oedematous, well-circumscribed elevations of the superficial dermis that resolve within 24 hours leaving normal skin - with or without angioedema, which is a deeper, painful or tingling swelling of the dermis and subcutis resolving over up to 72 hours.",
        "Chronic urticaria is defined as wheals, angioedema, or both, occurring for six weeks or longer, and is chronic spontaneous when no external trigger is identifiable and chronic inducible when a reproducible physical or other stimulus provokes it.",
      ],
      answer: [
        {
          heading: "1. Classification",
          points: [
            "By duration - acute, less than six weeks, and chronic, six weeks or longer.",
            "Chronic spontaneous urticaria - no identifiable external trigger; about half is autoimmune with IgG autoantibodies against FcepsilonRI or IgE.",
            "Chronic inducible urticaria - symptomatic dermographism, cold, delayed pressure, solar, heat, vibratory, cholinergic, aquagenic and contact urticaria.",
            "Angioedema without wheals - ACE inhibitor induced, hereditary and acquired C1 esterase inhibitor deficiency; these are bradykinin mediated and require separate management.",
          ],
        },
        {
          heading: "2. Pathogenesis",
          points: [
            "Mast cell degranulation is the final common pathway, releasing histamine, leukotrienes, prostaglandin D2, platelet activating factor and tryptase.",
            "Effects are vasodilatation, increased vascular permeability with dermal oedema forming the wheal, and stimulation of sensory nerves producing itch and the axon-reflex flare.",
            "Immunological triggers - type I IgE-mediated to food, drug or venom; type II autoimmune with IgG against FcepsilonRI.",
            "Non-immunological triggers - opioids, radiocontrast media, vancomycin, NSAIDs through cyclo-oxygenase inhibition, and physical stimuli.",
            "Associations in chronic disease - autoimmune thyroid disease, Helicobacter pylori, parasitic infestation and chronic focal infection.",
          ],
        },
        {
          heading: "3. Assessment and investigation",
          points: [
            "History - duration of individual wheals, angioedema, triggers, drugs including NSAIDs and ACE inhibitors, occupation, physical stimuli, systemic symptoms and effect on sleep and work.",
            "Examination - wheals, dermographism, angioedema, and signs of systemic disease; document with UAS7.",
            "Limited screen - complete blood count with differential, ESR and CRP, thyroid stimulating hormone and anti-TPO antibody, stool for ova and cysts, urinalysis.",
            "Autologous serum skin test for autoreactivity; provocation tests for suspected inducible urticaria.",
            "Skin biopsy if lesions last over 24 hours, burn, or leave purpura - to exclude urticarial vasculitis.",
          ],
        },
        {
          heading: "4. Management",
          points: [
            "Explain the natural history, avoid NSAIDs, opioids, alcohol, heat and tight clothing, and treat identified infection or infestation.",
            "Step 1 - a second-generation H1 antihistamine daily and regularly, such as levocetirizine 5 mg or fexofenadine 180 mg once daily.",
            "Step 2 - up-dose the same antihistamine to a maximum of four times the standard dose before adding another drug.",
            "Step 3 - add omalizumab 300 mg subcutaneously every four weeks for at least six months.",
            "Step 4 - ciclosporin 3 to 5 mg per kilogram per day with blood pressure and renal monitoring.",
            "Short courses of oral prednisolone 0.5 mg per kilogram for three to seven days only for severe exacerbations; never long-term steroids.",
            "Provide a written plan for angioedema and anaphylaxis, and review with UAS7 every two to four weeks to justify escalation or step-down.",
          ],
        },
      ],
      mustDraw: [
        "A four-step ladder chart of chronic urticaria treatment with drug and dose at each step.",
        "A table distinguishing urticaria, urticarial vasculitis and hereditary angioedema by lesion duration, symptom, residual mark and key test.",
      ],
      markSplit: [
        { part: "Definitions of wheal and angioedema", marks: 2 },
        { part: "Classification", marks: 2 },
        { part: "Pathogenesis", marks: 2 },
        { part: "Assessment and investigation", marks: 1 },
        { part: "Stepwise management", marks: 3 },
      ],
      keywords: ["urticaria", "wheal", "angioedema", "antihistamine up-dosing", "omalizumab", "UAS7"],
    },
    {
      id: "dermatology-urticaria-angioedema-t2",
      paper: "III",
      kind: "chart-flow",
      marks: 5,
      minutes: 10,
      frequency: "core",
      question: "Draw a flow chart of the emergency management of anaphylaxis with angioedema in an adult in a primary care clinic.",
      openingLines: [
        "Anaphylaxis is a severe, life-threatening, generalised hypersensitivity reaction with rapid onset of airway, breathing or circulatory compromise, usually with skin and mucosal changes such as urticaria and angioedema.",
        "It is a clinical diagnosis and treatment must not be delayed for any investigation; intramuscular adrenaline is the first and only life-saving drug.",
      ],
      answer: [
        {
          heading: "Immediate steps",
          points: [
            "Recognise - acute onset with skin or mucosal involvement plus respiratory compromise or hypotension or persistent gastrointestinal symptoms, after a likely trigger.",
            "Call for help, remove the trigger such as a drug infusion or a sting, and do not let the patient stand or walk.",
            "Adrenaline 0.5 mg (0.5 mL of 1 in 1000) intramuscularly into the anterolateral thigh; repeat every 5 to 15 minutes if there is no improvement. Paediatric dose 0.01 mg per kilogram to a maximum of 0.5 mg.",
            "Position - lie flat with legs elevated, sit up if breathless, left lateral in pregnancy.",
            "High-flow oxygen by mask and intravenous access with a crystalloid bolus of 20 mL per kilogram, repeated as needed for hypotension.",
          ],
        },
        {
          heading: "Second-line and monitoring",
          points: [
            "Nebulised adrenaline for stridor and nebulised salbutamol for bronchospasm; prepare for early intubation or surgical airway if the airway is threatened.",
            "Chlorpheniramine 10 mg intravenously and hydrocortisone 200 mg intravenously as adjuncts only, after adrenaline and fluids.",
            "Monitor pulse oximetry, blood pressure, electrocardiogram and airway continuously; consider an adrenaline infusion for refractory cases with expert help.",
            "Observe for 6 to 12 hours because of biphasic reactions before discharge.",
          ],
        },
        {
          heading: "Before discharge",
          points: [
            "Serum tryptase one to two hours after the reaction and again at baseline, where available.",
            "Written emergency action plan, adrenaline auto-injector with training, and a medical alert card naming the trigger.",
            "Referral for allergy assessment, and documentation of the culprit drug in the record as an allergy.",
          ],
        },
      ],
      mustDraw: [
        "A flow chart from recognition to adrenaline, positioning, oxygen and fluids, then second-line drugs, observation and discharge planning.",
      ],
      markSplit: [
        { part: "Recognition criteria", marks: 1 },
        { part: "Adrenaline dose, route and repetition", marks: 2 },
        { part: "Adjuncts, observation and discharge planning", marks: 2 },
      ],
      keywords: ["anaphylaxis", "adrenaline", "intramuscular", "biphasic reaction", "auto-injector"],
    },
  ],
  mcqs: [
    {
      id: "dermatology-urticaria-angioedema-q1",
      stem: "A 34-year-old woman has itchy wheals for eight months. She takes cetirizine 10 mg only on days when the rash appears, with partial relief. Individual wheals fade within a few hours leaving normal skin. What is the next best step?",
      options: [
        "Extensive food allergy panel and an elimination diet",
        "Regular daily levocetirizine, up-dosed to a maximum of four times the standard dose",
        "Oral prednisolone 20 mg daily for three months",
        "Start omalizumab 300 mg every four weeks now",
        "Skin biopsy of a wheal",
      ],
      answer: 1,
      explanation:
        "This is chronic spontaneous urticaria and the patient has never had an adequate trial of the first two steps, so regular daily dosing of a second-generation antihistamine, up-dosed to four times standard if needed, is the correct next move. Extensive food panels in chronic spontaneous urticaria are low yield, generate false positives and lead to harmful elimination diets. Long-term systemic steroids are explicitly not recommended and cause predictable harm. Omalizumab is step 3 and is reserved for patients refractory to up-dosed antihistamines. A biopsy is indicated only if wheals last over 24 hours, burn or leave bruising, none of which applies since her lesions fade in hours leaving normal skin.",
      difficulty: "easy",
    },
    {
      id: "dermatology-urticaria-angioedema-q2",
      stem: "A 40-year-old man on enalapril for three years develops recurrent swelling of the lips and tongue without any itching or wheals. Complement C4 is normal. What is the correct management?",
      options: [
        "Long-term levocetirizine 5 mg twice daily",
        "Stop the enalapril permanently and monitor the airway",
        "C1 esterase inhibitor concentrate for every attack",
        "Oral prednisolone 40 mg daily for one week",
        "Start omalizumab",
      ],
      answer: 1,
      explanation:
        "Angioedema without wheals or itch in a patient on an ACE inhibitor is bradykinin-mediated angioedema, which may begin years after starting the drug and requires permanent withdrawal of all ACE inhibitors, with airway observation during an attack. Antihistamines are ineffective because histamine is not the mediator. C1 esterase inhibitor concentrate is the treatment for hereditary angioedema, which is unlikely here since C4 is normal and C4 is characteristically low in that condition. Corticosteroids do not shorten bradykinin-mediated attacks. Omalizumab is used in chronic spontaneous urticaria, which requires wheals and is not the process here.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-urticaria-angioedema-q3",
      stem: "A 28-year-old woman has painful, burning wheals that persist for two to three days and fade leaving brownish discoloration, with arthralgia and an ESR of 68 mm in the first hour. What is the most appropriate investigation?",
      options: [
        "Autologous serum skin test",
        "Skin biopsy with complement levels C3, C4 and C1q and urinalysis",
        "Serum total IgE",
        "Ice cube provocation test",
        "Patch testing with the standard series",
      ],
      answer: 1,
      explanation:
        "Wheals lasting more than 24 hours that burn rather than itch and leave post-inflammatory pigmentation, with arthralgia and a raised ESR, describe urticarial vasculitis, and the diagnosis is made by skin biopsy showing leukocytoclastic vasculitis, supported by complement levels and urinalysis for associated glomerulonephritis. The autologous serum skin test assesses autoreactivity in ordinary chronic spontaneous urticaria and would not explain persistent bruising lesions. Serum IgE is non-specific and changes nothing. The ice cube test diagnoses cold urticaria, in which lesions still resolve within an hour of rewarming. Patch testing detects delayed contact allergy, an entirely different mechanism.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-urticaria-angioedema-q4",
      stem: "A 25-year-old man develops generalised urticaria, wheeze and a systolic blood pressure of 78 mmHg five minutes after an intramuscular injection of diclofenac. What is the immediate treatment?",
      options: [
        "Intravenous hydrocortisone 200 mg",
        "Adrenaline 0.5 mg of 1 in 1000 intramuscularly into the anterolateral thigh",
        "Intravenous chlorpheniramine 10 mg",
        "Adrenaline 0.5 mg of 1 in 1000 intravenously",
        "Nebulised salbutamol alone",
      ],
      answer: 1,
      explanation:
        "This is anaphylaxis and intramuscular adrenaline 0.5 mg of the 1 in 1000 solution into the anterolateral thigh is the first and only life-saving intervention, repeated every 5 to 15 minutes as required, along with positioning, oxygen and fluids. Hydrocortisone acts over hours and is an adjunct at best. Chlorpheniramine relieves the cutaneous features but has no effect on airway compromise or hypotension. Undiluted 1 in 1000 adrenaline must never be given intravenously outside a monitored setting because it causes arrhythmias and hypertensive crisis; the intravenous route uses a dilute infusion under expert supervision. Nebulised salbutamol treats bronchospasm only and leaves the hypotension untreated.",
      difficulty: "easy",
    },
    {
      id: "dermatology-urticaria-angioedema-q5",
      stem: "A 19-year-old student develops crops of 2 to 3 mm intensely itchy wheals with large surrounding flares on the trunk whenever he plays football or takes a hot shower, each episode settling within an hour. What is the diagnosis?",
      options: [
        "Cholinergic urticaria",
        "Symptomatic dermographism",
        "Cold urticaria",
        "Delayed pressure urticaria",
        "Aquagenic urticaria",
      ],
      answer: 0,
      explanation:
        "Small punctate wheals with disproportionately large flares provoked by exercise, hot showers, emotion or spicy food, and settling within an hour, is cholinergic urticaria, caused by a rise in core body temperature and confirmed by exercise or hot bath provocation; it is treated with a regular second-generation antihistamine. Symptomatic dermographism produces linear wheals along a stroke line and is provoked by scratching rather than by heat. Cold urticaria appears on rewarming after cold exposure and is confirmed by the ice cube test. Delayed pressure urticaria causes deep painful swelling appearing four to eight hours after sustained pressure such as tight straps. Aquagenic urticaria follows water contact at any temperature, which does not fit the exercise trigger.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "dermatology-urticaria-angioedema-c1",
      front: "Definition of a wheal and the time limit that defines urticaria.",
      back: "A transient itchy oedematous elevation with a surrounding flare; each individual wheal resolves within 24 hours leaving completely normal skin.",
    },
    {
      id: "dermatology-urticaria-angioedema-c2",
      front: "Acute versus chronic urticaria.",
      back: "Acute - less than six weeks; chronic - six weeks or longer, subdivided into chronic spontaneous (no trigger, often autoimmune) and chronic inducible (reproducible physical or other trigger).",
    },
    {
      id: "dermatology-urticaria-angioedema-c3",
      front: "Step 2 of the urticaria ladder.",
      back: "Up-dose the same second-generation antihistamine to a maximum of four times the standard dose before adding any other drug.",
    },
    {
      id: "dermatology-urticaria-angioedema-c4",
      front: "What is UAS7?",
      back: "Urticaria Activity Score over 7 days - daily wheal number (0 to 3) plus itch severity (0 to 3), summed across a week to a maximum of 42, used to track control and justify escalation.",
    },
    {
      id: "dermatology-urticaria-angioedema-c5",
      front: "When should a wheal be biopsied?",
      back: "When individual lesions last over 24 hours, burn or hurt rather than itch, leave purpura or pigmentation, or come with fever, arthralgia and a raised ESR - urticarial vasculitis.",
    },
    {
      id: "dermatology-urticaria-angioedema-c6",
      front: "Adrenaline in anaphylaxis - dose and route.",
      back: "0.5 mg (0.5 mL of 1 in 1000) intramuscularly into the anterolateral thigh in an adult, repeated every 5 to 15 minutes; child 0.01 mg per kilogram to a maximum of 0.5 mg. Never plain 1 in 1000 intravenously.",
    },
    {
      id: "dermatology-urticaria-angioedema-c7",
      front: "Screening test for hereditary angioedema.",
      back: "Serum C4, which is low both during and between attacks; confirm with C1 esterase inhibitor antigenic level and function.",
    },
    {
      id: "dermatology-urticaria-angioedema-c8",
      front: "Why do antihistamines and steroids fail in hereditary and ACE-inhibitor angioedema?",
      back: "Both are bradykinin-mediated rather than histamine-mediated; treat with C1 inhibitor concentrate, icatibant or fresh frozen plasma, and stop the ACE inhibitor permanently.",
    },
    {
      id: "dermatology-urticaria-angioedema-c9",
      front: "Antihistamines of choice in pregnancy for urticaria.",
      back: "Loratadine and cetirizine have the best safety data; chlorpheniramine is the older alternative, and up-dosing should be discussed with a specialist.",
    },
    {
      id: "dermatology-urticaria-angioedema-c10",
      front: "The commonest cause of acute urticaria in children.",
      back: "Viral upper respiratory tract infection, followed by drugs such as beta lactams, NSAIDs and sulphonamides; investigation is usually unnecessary.",
    },
  ],
  references: [
    "EAACI, GA2LEN, EuroGuiDerm and APAAACI international guideline for the definition, classification, diagnosis and management of urticaria, 2022 revision",
    "IADVL Textbook of Dermatology, 5th edition, 2022 - urticaria and angioedema",
    "Indian Association of Dermatologists, Venereologists and Leprologists consensus statement on chronic urticaria, 2018",
    "Resuscitation Council UK, Emergency treatment of anaphylactic reactions, 2021 update",
    "World Allergy Organization Anaphylaxis Guidance, 2020",
    "Rook's Textbook of Dermatology, 10th edition, 2024 - urticaria",
  ],
});

topics.push({
  id: "dermatology-psoriasis",
  title: "Psoriasis: plaque disease, nails, arthritis and the treatment ladder",
  oneLiner:
    "Psoriasis is a chronic, immune-mediated, genetically determined inflammatory disease of skin and joints driven by the interleukin 23 and T helper 17 axis, whose classical lesion is a well-defined erythematous plaque with silvery-white scale over the extensors, scalp and sacrum with nail pitting and onycholysis, and which is managed by topical vitamin D analogue with corticosteroid for limited disease and by phototherapy, methotrexate, ciclosporin, acitretin or biologics for extensive, erythrodermic, pustular or arthritic disease.",
  frequency: "common",
  keywords: [
    "psoriasis",
    "plaque psoriasis",
    "Auspitz sign",
    "Koebner phenomenon",
    "grattage test",
    "Munro microabscess",
    "nail pitting",
    "psoriatic arthritis",
    "PASI",
    "calcipotriol",
    "methotrexate",
    "acitretin",
    "ciclosporin",
    "narrowband UVB",
    "biologics",
    "erythrodermic psoriasis",
    "generalised pustular psoriasis",
    "coal tar",
    "dithranol",
    "metabolic syndrome",
  ],
  sections: [
    {
      heading: "Epidemiology, genetics and pathogenesis",
      points: [
        "Psoriasis affects about **0.5 to 1.5 per cent of the Indian population** with a male preponderance in hospital series, and shows a **bimodal age of onset - type I before 40 years, with a strong family history and HLA-Cw6 association, and type II after 40 years, with weaker heritability**.",
        "The pathogenesis is an **interleukin 23 and T helper 17 axis**: dendritic cells activated by antimicrobial peptides such as LL-37 release IL-23, which drives Th17 cells to produce **IL-17A, IL-22 and tumour necrosis factor alpha**, causing keratinocyte hyperproliferation, neutrophil recruitment and angiogenesis - and every modern biologic is named for a step on this pathway.",
        "The epidermal turnover time falls from a normal 28 days to **3 to 4 days**, producing parakeratosis, loss of the granular layer and the thick silvery scale; capillary dilatation in the elongated dermal papillae explains the erythema and the Auspitz sign.",
        "**Trigger factors that must be asked about**: streptococcal pharyngitis (guttate psoriasis in children and young adults), trauma (Koebner phenomenon), drugs - **beta blockers, lithium, antimalarials, NSAIDs, interferon and, above all, withdrawal of systemic corticosteroids** - infection including HIV, smoking, alcohol, obesity, hypocalcaemia and psychological stress.",
        "**Systemic corticosteroids should not be used to treat psoriasis**: they clear it briefly and their withdrawal precipitates **generalised pustular or erythrodermic psoriasis**, a fact that is examined repeatedly and is a real hazard in Indian practice where they are freely prescribed.",
        "Psoriasis is a **systemic inflammatory disease**, associated with **metabolic syndrome, obesity, type 2 diabetes, dyslipidaemia, non-alcoholic fatty liver disease, cardiovascular disease, depression and inflammatory bowel disease**, so every consultation should include weight, waist circumference, blood pressure, glucose and lipids.",
      ],
    },
    {
      heading: "Clinical features and morphological description",
      points: [
        "Describe the classical plaque in the fixed order: **multiple, symmetrically distributed, well-defined erythematous plaques 1 to 10 cm across, round to oval or polycyclic, with a dry surface covered by loosely adherent silvery-white micaceous scale, sharply demarcated margins, over the extensor elbows and knees, scalp, lower back and sacrum, with normal intervening skin**.",
        "**The three diagnostic bedside signs**: **grattage or candle-grease sign** - scraping the plaque with a glass slide produces more silvery scale; **Berkeley membrane** - a glistening translucent membrane below the scale; and **Auspitz sign** - pinpoint bleeding on removing that membrane, caused by suprapapillary thinning over dilated capillaries.",
        "**Koebner or isomorphic phenomenon** - new psoriatic lesions appearing at sites of trauma such as a scratch, surgical scar or vaccination site after 7 to 14 days - indicates active unstable disease and is shared with lichen planus and vitiligo.",
        "**Clinical variants** - chronic plaque psoriasis (about 90 per cent), **guttate psoriasis** (crops of 2 to 10 mm drop-like papules on the trunk two weeks after streptococcal sore throat, usually in a young person, with the best prognosis), **inverse or flexural psoriasis** (shiny well-defined erythema without scale in the axillae, groins and submammary folds), **scalp, palmoplantar, napkin and nail psoriasis**.",
        "**Nail changes occur in up to 50 per cent and predict arthritis**: **pitting** (irregular, deep, random - from nail matrix disease), **onycholysis with an oil-drop or salmon patch**, **subungual hyperkeratosis, splinter haemorrhages, Beau's lines and crumbling of the nail plate**; in contrast, lichen planus produces longitudinal ridging, thinning and pterygium.",
        "**Severe variants requiring admission** - **erythrodermic psoriasis** (over 90 per cent of the body red and scaly, with impaired thermoregulation, high-output cardiac failure, hypoalbuminaemia and dehydration) and **generalised pustular psoriasis of von Zumbusch** (fever, waves of sterile pustules on tender erythema, neutrophilia and hypocalcaemia).",
        "Differential diagnosis of a scaly plaque - **chronic eczema** (ill-defined, lichenified, itch dominant), **tinea corporis** (raised active edge with central clearing, KOH positive), **lichen planus** (violaceous flat-topped polygonal papules with Wickham striae), **pityriasis rosea** (herald patch, collarette scale, Christmas tree pattern, self-limiting), **secondary syphilis** (palms and soles, non-itchy, positive serology) and **mycosis fungoides**.",
      ],
    },
    {
      heading: "Psoriatic arthritis and assessment of severity",
      points: [
        "**Psoriatic arthritis affects 10 to 30 per cent** of patients with psoriasis, usually developing after the skin disease but preceding it in about 15 per cent; it is **seronegative**, and the CASPAR criteria are used for classification.",
        "Its five patterns are **distal interphalangeal predominant, asymmetrical oligoarthritis (the commonest), symmetrical polyarthritis resembling rheumatoid arthritis, spondyloarthritis with sacroiliitis, and arthritis mutilans** with the telescoping pencil-in-cup deformity.",
        "Ask every patient about **inflammatory back pain, early morning stiffness lasting more than 30 minutes, dactylitis (the sausage digit), enthesitis (Achilles tendon and plantar fascia pain), and nail disease**, and use a screening tool such as PEST at each visit - **the presence of arthritis changes the choice of systemic drug** towards methotrexate or a biologic and away from phototherapy and acitretin alone.",
        "Assess skin severity with the **Psoriasis Area and Severity Index (PASI)**, which scores erythema, induration and desquamation each 0 to 4 across four body regions weighted by area, giving 0 to 72; **body surface area** using the palm as 1 per cent; and the **Dermatology Life Quality Index (DLQI)**.",
        "The conventional threshold for systemic therapy is the **rule of tens - PASI above 10, or body surface area above 10 per cent, or DLQI above 10** - and severe involvement of the face, palms, soles or genitalia counts as severe disease regardless of area.",
        "**Investigations** - psoriasis is a clinical diagnosis, and biopsy is needed only in doubt, showing **parakeratosis, loss of the granular layer, acanthosis with regular elongation of rete ridges, suprapapillary thinning, dilated tortuous capillaries, and neutrophils forming Munro microabscesses in the stratum corneum and spongiform pustules of Kogoj in the stratum spinosum**.",
      ],
    },
    {
      heading: "Topical treatment for limited disease",
      points: [
        "**Emollients in generous quantity** reduce scaling, fissuring and itch and improve the penetration of every active agent; use white soft paraffin, liquid paraffin or urea-containing preparations at least twice daily.",
        "**Topical vitamin D analogues - calcipotriol 0.005 per cent ointment twice daily, maximum 100 g per week** - normalise keratinocyte differentiation, do not cause atrophy and are ideal for long-term use; local irritation is the main problem and hypercalcaemia occurs only with gross overuse.",
        "**Fixed-dose calcipotriol with betamethasone dipropionate once daily is the most effective topical regimen** for plaque psoriasis, giving faster clearance than either alone and permitting steroid-sparing maintenance with calcipotriol alone.",
        "**Topical corticosteroids** by potency and site - potent (betamethasone valerate 0.1 per cent) for trunk and limb plaques, very potent (clobetasol propionate 0.05 per cent) for palms, soles and thick plaques for a maximum of two weeks, and **mild agents only for the face and flexures**; warn about **tachyphylaxis, atrophy and rebound pustular flare on abrupt withdrawal**.",
        "**Coal tar 5 to 10 per cent** is cheap, effective and safe for long-term use, especially in the scalp as a 1 to 2 per cent shampoo, but stains and smells; **dithranol (anthralin) in short-contact therapy for 10 to 30 minutes daily**, increasing from 0.1 to 3 per cent, is highly effective for stable thick plaques but irritates and stains normal skin.",
        "**Salicylic acid 3 to 6 per cent** is the keratolytic used to remove thick scale before other agents, but it **inactivates calcipotriol and should not be applied at the same time**; avoid extensive use in children because of salicylism.",
        "**Scalp psoriasis** - overnight 2 per cent salicylic acid in coconut oil to lift scale, then a tar or ketoconazole shampoo, with a steroid or calcipotriol lotion or gel; **flexures and face** - mild steroid, calcipotriol used cautiously, or a topical calcineurin inhibitor such as tacrolimus 0.1 per cent.",
      ],
    },
    {
      heading: "Phototherapy, systemic drugs and biologics",
      points: [
        "**Narrowband UVB at 311 nanometres, two to three times a week**, is the first-line treatment for extensive plaque and guttate psoriasis, is safe in pregnancy and children, and requires eye protection and a cumulative dose record; **PUVA** with oral 8-methoxypsoralen is more effective for thick plaques and palmoplantar disease but carries a long-term squamous cell carcinoma risk.",
        "**Methotrexate 7.5 to 25 mg once weekly, with folic acid 5 mg on a different day**, is the standard Indian systemic agent, particularly where there is arthritis; monitor **complete blood count, liver and renal function at baseline, then at 2 to 4 weeks and thereafter 3-monthly, with hepatic fibrosis assessment by FibroScan or procollagen III peptide** in long-term use. It is **contraindicated in pregnancy (both partners must avoid conception for at least three months), significant liver or renal disease, and active infection**, and must never be given daily by mistake.",
        "**Ciclosporin 2.5 to 5 mg per kilogram per day** works fastest and is the drug of choice for a **severe unstable flare, erythroderma or pustular psoriasis**, but is limited to **one year of continuous use** because of nephrotoxicity and hypertension; monitor blood pressure and creatinine every two weeks initially.",
        "**Acitretin 0.3 to 0.5 mg per kilogram per day** is best for **pustular and palmoplantar psoriasis** and is the only non-immunosuppressive systemic agent, so it suits patients with HIV; it is a **potent teratogen requiring contraception for three years after stopping** in women of child-bearing potential, and causes cheilitis, xerosis, hyperlipidaemia and transaminase rise.",
        "**Apremilast**, an oral phosphodiesterase 4 inhibitor at 30 mg twice daily after titration, is useful where immunosuppression must be avoided, with nausea, diarrhoea, weight loss and depression as its issues.",
        "**Biologics** where available and affordable, after screening for **tuberculosis (chest radiograph and interferon gamma release assay or tuberculin test), hepatitis B and C, and HIV** - anti-TNF agents (etanercept, adalimumab, infliximab), the anti-IL-12/23 ustekinumab, the anti-IL-17 secukinumab and ixekizumab, and the anti-IL-23 agents guselkumab and risankizumab; **latent tuberculosis is common in India and must be treated before an anti-TNF agent is started**.",
        "**Do not use systemic corticosteroids**; treat the associated metabolic syndrome, alcohol and smoking; and explain that psoriasis is **controllable but not curable, non-contagious and not caused by diet or hygiene**, with attention to depression and to the social and marital consequences that dominate the Indian patient's experience.",
      ],
    },
    {
      heading: "Severe forms and their emergency management",
      points: [
        "**Erythrodermic psoriasis** - generalised erythema and scaling of more than 90 per cent of the body surface, with shivering, tachycardia, oedema, hypoalbuminaemia, dehydration, electrolyte disturbance and secondary sepsis; **admit, keep warm, correct fluid and electrolyte balance, provide high-protein nutrition, use bland emollients and wet dressings, avoid all irritants, and treat with ciclosporin or infliximab for rapid control**.",
        "**Generalised pustular psoriasis (von Zumbusch)** - abrupt fever with waves of sterile pustules on tender erythema coalescing into lakes of pus, with leukocytosis, raised inflammatory markers, **hypocalcaemia and hypoalbuminaemia**; usually precipitated by **withdrawal of systemic steroids, infection, hypocalcaemia or pregnancy (impetigo herpetiformis)**.",
        "Treatment of generalised pustular psoriasis is **admission with fluid and electrolyte correction, and acitretin, ciclosporin, methotrexate or infliximab**; newer IL-36 receptor antagonists such as spesolimab are now specific therapy where available.",
        "**Palmoplantar pustulosis** - sterile pustules on an erythematous scaly base on the palms and soles, strongly associated with smoking, is disabling and responds poorly to topicals, often needing acitretin, PUVA or a biologic.",
        "**Psoriasis in pregnancy** - about half improve; safest options are **emollients, topical steroids in limited amounts and narrowband UVB**, with ciclosporin and certolizumab as systemic choices; **methotrexate and acitretin are absolutely contraindicated**.",
        "**Psoriasis in HIV** is often severe, abrupt in onset and associated with a low CD4 count; **acitretin and phototherapy are preferred, antiretroviral therapy itself improves the psoriasis, and immunosuppressives are used only with great caution**.",
      ],
    },
  ],
  tables: [
    {
      heading: "Systemic drugs in psoriasis: dose, best use and monitoring",
      columns: ["Drug", "Dose", "Best suited to", "Key monitoring and cautions"],
      rows: [
        ["Methotrexate", "7.5 to 25 mg once weekly with folic acid 5 mg", "Extensive plaque disease with arthritis", "CBC, LFT, renal function 3-monthly; teratogenic; never daily dosing"],
        ["Ciclosporin", "2.5 to 5 mg/kg/day, maximum one year", "Severe unstable flare, erythroderma, pustular disease", "Blood pressure and creatinine fortnightly then monthly; nephrotoxic"],
        ["Acitretin", "0.3 to 0.5 mg/kg/day", "Pustular and palmoplantar psoriasis, HIV-positive patients", "Lipids and LFT; teratogenic - contraception for 3 years after stopping"],
        ["Narrowband UVB", "311 nm, 2 to 3 sessions weekly", "Extensive plaque and guttate psoriasis, pregnancy, children", "Cumulative dose record, eye protection, burning"],
        ["Apremilast", "30 mg twice daily after titration", "Moderate disease where immunosuppression is undesirable", "Weight loss, diarrhoea, depression"],
        ["Biologics", "Agent-specific, subcutaneous or intravenous", "Severe refractory disease and psoriatic arthritis", "Screen for tuberculosis, hepatitis B and C, HIV before starting"],
      ],
    },
    {
      heading: "Psoriasis versus its common mimics",
      columns: ["Feature", "Psoriasis", "Chronic eczema", "Tinea corporis", "Lichen planus"],
      rows: [
        ["Margin", "Sharply defined", "Ill defined", "Raised active edge with central clearing", "Well defined polygonal papules"],
        ["Scale", "Silvery-white, micaceous, loose", "Fine, adherent, with crusting", "Fine scale at the advancing edge", "Minimal, with Wickham striae"],
        ["Symptom", "Mild itch, scaling dominant", "Itch dominant with excoriations", "Itch, worse with sweating", "Intense itch, violaceous colour"],
        ["Bedside sign", "Auspitz sign, grattage, Koebner", "Lichenification", "KOH mount positive for hyphae", "Wickham striae, Koebner"],
        ["Nails", "Pitting, oil drop, subungual hyperkeratosis", "Pitting rare, ridging from paronychia", "Onychomycosis with distal discoloration", "Ridging, thinning, pterygium"],
        ["Site", "Extensors, scalp, sacrum, nails", "Flexures in atopics", "Groins, trunk, any moist site", "Flexor wrists, shins, oral mucosa"],
      ],
    },
  ],
  redFlags: [
    "More than 90 per cent of the skin red and scaly with shivering, tachycardia, oedema or hypotension - erythrodermic psoriasis; admit for warming, fluids, electrolytes and rapid-acting systemic therapy.",
    "Fever with sheets of sterile pustules on tender erythema - generalised pustular psoriasis; check calcium and albumin, admit and treat urgently.",
    "A recent course of oral or injectable corticosteroid in a psoriatic patient now flaring - steroid-withdrawal pustular or erythrodermic psoriasis; never treat psoriasis with systemic steroids.",
    "Inflammatory back pain, dactylitis or a swollen joint with morning stiffness over 30 minutes - psoriatic arthritis needing early rheumatology referral before erosive damage occurs.",
    "A patient on methotrexate with mouth ulcers, sore throat, fever or unexplained bruising - marrow suppression; stop the drug, check the blood count and give folinic acid rescue.",
    "New cough, fever or weight loss in a patient on a biologic - reactivated tuberculosis until excluded.",
    "Psoriatic plaques with a rapidly enlarging ulcerated nodule or persistent single scaly plaque unresponsive to treatment - biopsy to exclude squamous cell carcinoma or mycosis fungoides.",
  ],
  pearls: [
    "Never give systemic corticosteroids for psoriasis - the withdrawal flare is pustular or erythrodermic and can be fatal.",
    "Auspitz sign, the grattage test and the Koebner phenomenon are the three signs to demonstrate at the bedside in a psoriasis short case.",
    "Look at the nails, scalp, umbilicus, natal cleft and genitalia before saying a patient has no psoriasis - the diagnostic lesion often hides there.",
    "Nail pitting is irregular and deep in psoriasis; in alopecia areata pitting is fine and geometric.",
    "Salicylic acid inactivates calcipotriol - use them at different times of day.",
    "The rule of tens - PASI above 10, body surface area above 10 per cent or DLQI above 10 - justifies moving to systemic therapy.",
    "Guttate psoriasis after a streptococcal sore throat in a young person has the best prognosis and often clears with narrowband UVB alone.",
    "Every psoriasis consultation should include weight, waist, blood pressure, glucose and lipids - it is a systemic inflammatory disease, not just a skin disease.",
  ],
  theory: [
    {
      id: "dermatology-psoriasis-t1",
      paper: "III",
      kind: "long",
      marks: 10,
      minutes: 20,
      frequency: "common",
      question:
        "Describe the aetiopathogenesis, clinical types and bedside signs of psoriasis. Outline the management of a 35-year-old man with plaque psoriasis involving 25 per cent of his body surface area.",
      openingLines: [
        "Psoriasis is a chronic, immune-mediated, genetically determined papulosquamous disease of the skin, nails and joints, characterised by well-defined erythematous plaques with silvery-white scale over the extensor surfaces, scalp and sacrum, and by a relapsing and remitting course.",
        "It affects about 0.5 to 1.5 per cent of Indians, results from activation of the interleukin 23 and T helper 17 axis, and is now recognised as a systemic inflammatory disorder with important metabolic and cardiovascular comorbidity.",
      ],
      answer: [
        {
          heading: "1. Aetiopathogenesis",
          points: [
            "Genetic - PSORS1 locus with HLA-Cw6 association; type I disease before 40 years with strong family history, type II after 40 years.",
            "Immunological - dendritic cell activation releases interleukin 23, driving Th17 cells to secrete IL-17A, IL-22 and TNF alpha, producing keratinocyte hyperproliferation, neutrophil influx and angiogenesis.",
            "Epidermal turnover falls from 28 days to 3 to 4 days, giving parakeratosis, loss of the granular layer and thick scale.",
            "Triggers - streptococcal throat infection, trauma (Koebner), drugs such as beta blockers, lithium, antimalarials, NSAIDs and withdrawal of systemic corticosteroids, infection including HIV, smoking, alcohol, obesity, hypocalcaemia and stress.",
            "Comorbidity - metabolic syndrome, diabetes, dyslipidaemia, non-alcoholic fatty liver disease, cardiovascular disease, depression and inflammatory bowel disease.",
          ],
        },
        {
          heading: "2. Clinical types",
          points: [
            "Chronic plaque psoriasis - about 90 per cent; symmetrical well-defined plaques with silvery scale on extensors, scalp and sacrum.",
            "Guttate psoriasis - crops of drop-like papules two weeks after streptococcal pharyngitis, best prognosis.",
            "Inverse or flexural psoriasis - shiny erythema without scale in the axillae, groins and submammary areas.",
            "Pustular psoriasis - localised palmoplantar pustulosis, or generalised von Zumbusch type with fever and sterile pustules.",
            "Erythrodermic psoriasis - over 90 per cent of the body surface involved, a dermatological emergency.",
            "Nail psoriasis in up to 50 per cent, and psoriatic arthritis in 10 to 30 per cent, in five recognised patterns.",
          ],
        },
        {
          heading: "3. Bedside signs and investigations",
          points: [
            "Grattage or candle-grease sign - scraping increases the silvery scale.",
            "Berkeley membrane - a glistening translucent membrane beneath the scale.",
            "Auspitz sign - pinpoint bleeding on removing that membrane, from suprapapillary thinning over dilated capillaries.",
            "Koebner phenomenon - new lesions at sites of trauma after 7 to 14 days, indicating active disease.",
            "Histology if needed - parakeratosis, absent granular layer, regular acanthosis, Munro microabscesses and spongiform pustules of Kogoj.",
            "Assess with PASI, body surface area and DLQI, and screen for arthritis and metabolic syndrome.",
          ],
        },
        {
          heading: "4. Management of 25 per cent body surface involvement",
          points: [
            "This exceeds the rule of tens, so systemic therapy is indicated alongside topical treatment.",
            "Topical - liberal emollients, fixed-dose calcipotriol with betamethasone dipropionate once daily to plaques, coal tar or salicylic acid for thick scale (applied at a different time from calcipotriol), tar or ketoconazole shampoo with a steroid lotion for the scalp.",
            "Phototherapy - narrowband UVB 311 nm two to three times weekly with cumulative dose recording and eye protection.",
            "Systemic - methotrexate 7.5 to 25 mg weekly with folic acid, especially if arthritis is present, after baseline blood count, liver and renal function and hepatitis and HIV screening; ciclosporin for rapid control of an unstable flare; acitretin where pustular or palmoplantar disease predominates.",
            "Biologics for refractory disease after screening for tuberculosis, hepatitis B and C and HIV.",
            "Never use systemic corticosteroids; treat comorbidity - weight, smoking, alcohol, blood pressure, glucose and lipids - and address the psychological and social burden.",
            "Counsel that the disease is chronic, controllable but not curable, non-contagious, and not caused by diet or poor hygiene; arrange regular follow-up with PASI and DLQI.",
          ],
        },
      ],
      mustDraw: [
        "A body diagram showing the typical distribution of chronic plaque psoriasis including scalp, extensors, sacrum and nails.",
        "A table of systemic drugs with dose, best indication and monitoring requirements.",
      ],
      markSplit: [
        { part: "Aetiopathogenesis including triggers", marks: 2 },
        { part: "Clinical types", marks: 2 },
        { part: "Bedside signs and assessment", marks: 2 },
        { part: "Topical, phototherapy and systemic management", marks: 4 },
      ],
      keywords: ["psoriasis", "Auspitz sign", "PASI", "methotrexate", "narrowband UVB", "calcipotriol"],
    },
    {
      id: "dermatology-psoriasis-t2",
      paper: "III",
      kind: "short-note",
      marks: 5,
      minutes: 10,
      frequency: "common",
      question: "Write short notes on methotrexate in the treatment of psoriasis.",
      openingLines: [
        "Methotrexate is a folate antagonist that inhibits dihydrofolate reductase and, at the low doses used in psoriasis, acts mainly through adenosine-mediated anti-inflammatory effects on activated lymphocytes.",
        "It remains the most widely used systemic drug for moderate to severe psoriasis in India because it is effective, inexpensive and equally useful for psoriatic arthritis.",
      ],
      answer: [
        {
          heading: "Indications",
          points: [
            "Extensive plaque psoriasis failing topical therapy and phototherapy, with PASI or body surface area above 10 or DLQI above 10.",
            "Psoriatic arthritis, erythrodermic psoriasis and pustular psoriasis.",
            "Severe involvement of face, palms, soles or genitalia regardless of area.",
          ],
        },
        {
          heading: "Dose and administration",
          points: [
            "A test dose of 2.5 to 5 mg followed by a blood count after one week, then 7.5 to 25 mg once weekly, orally or intramuscularly.",
            "Folic acid 5 mg on a day other than the methotrexate day reduces mucosal and haematological toxicity.",
            "Emphasise weekly, not daily, dosing - inadvertent daily administration causes fatal pancytopenia and mucositis.",
            "Onset of benefit at four to eight weeks; taper to the lowest effective maintenance dose.",
          ],
        },
        {
          heading: "Monitoring, adverse effects and contraindications",
          points: [
            "Baseline - complete blood count, liver and renal function, hepatitis B and C and HIV serology, chest radiograph and pregnancy test; repeat blood count and liver function at 2 to 4 weeks, then every 3 months.",
            "Long-term hepatic fibrosis monitored by transient elastography or serum procollagen III aminopeptide rather than routine liver biopsy.",
            "Adverse effects - nausea, stomatitis, marrow suppression, hepatotoxicity, pulmonary fibrosis and pneumonitis, and increased infection risk.",
            "Contraindications - pregnancy and lactation, planned conception within three months for either partner, significant liver or renal disease, active infection including tuberculosis, alcohol excess and unreliable follow-up.",
            "Interactions - avoid co-trimoxazole, trimethoprim, NSAIDs in renal impairment, probenecid and sulphonamides; give folinic acid rescue in overdose or severe toxicity.",
          ],
        },
      ],
      markSplit: [
        { part: "Mechanism and indications", marks: 1 },
        { part: "Dose and administration", marks: 2 },
        { part: "Monitoring, toxicity and contraindications", marks: 2 },
      ],
      keywords: ["methotrexate", "folic acid", "weekly dose", "hepatotoxicity", "pancytopenia", "psoriatic arthritis"],
    },
  ],
  mcqs: [
    {
      id: "dermatology-psoriasis-q1",
      stem: "A 40-year-old man with chronic plaque psoriasis is given a course of intramuscular dexamethasone by a local practitioner. Two weeks after it is stopped he develops fever with sheets of sterile pustules on tender erythematous skin. Serum calcium is 7.2 mg/dL. What is the diagnosis?",
      options: [
        "Acute generalised exanthematous pustulosis",
        "Generalised pustular psoriasis of von Zumbusch",
        "Staphylococcal scalded skin syndrome",
        "Pustular drug eruption from dexamethasone",
        "Subcorneal pustular dermatosis",
      ],
      answer: 1,
      explanation:
        "Withdrawal of systemic corticosteroids in a psoriatic patient is the classic precipitant of generalised pustular psoriasis of von Zumbusch, presenting with fever, waves of sterile pustules on tender erythema, leukocytosis, hypocalcaemia and hypoalbuminaemia, and requiring admission with fluid correction and acitretin, ciclosporin or infliximab. Acute generalised exanthematous pustulosis is also drug related but begins within days of starting a drug, most often an antibiotic, and settles on stopping it rather than after withdrawal. Staphylococcal scalded skin syndrome causes superficial desquamation with a positive Nikolsky sign in young children, not pustules on psoriatic skin. Corticosteroids suppress rather than cause pustulation. Subcorneal pustular dermatosis is a chronic relapsing flexural eruption with hypopyon pustules and no fever or preceding psoriasis history.",
      difficulty: "moderate",
    },
    {
      id: "dermatology-psoriasis-q2",
      stem: "A 28-year-old woman has well-defined plaques on both elbows. On scraping with a glass slide the scale becomes more silvery, then a glistening membrane appears, and further scraping produces pinpoint bleeding. What does the pinpoint bleeding indicate histologically?",
      options: [
        "Subepidermal blister formation",
        "Suprapapillary thinning of the epidermis over dilated dermal capillaries",
        "Acantholysis of the suprabasal layer",
        "Hyperkeratosis with follicular plugging",
        "Basement membrane immunoglobulin deposition",
      ],
      answer: 1,
      explanation:
        "Pinpoint bleeding after removal of the Berkeley membrane is the Auspitz sign, and it occurs because the epidermis above the elongated dermal papillae is thinned while the papillary capillaries are dilated and tortuous, so removing the scale shears open those vessels. Subepidermal blistering is the mechanism of bullous pemphigoid and gives tense bullae, not pinpoint bleeding. Suprabasal acantholysis produces the flaccid blisters and positive Nikolsky sign of pemphigus vulgaris. Hyperkeratosis with follicular plugging is a feature of discoid lupus erythematosus and gives the carpet-tack sign, not Auspitz. Immunoglobulin deposition at the basement membrane is an immunofluorescence finding in lupus and pemphigoid and is unrelated to this bedside sign.",
      difficulty: "easy",
    },
    {
      id: "dermatology-psoriasis-q3",
      stem: "A 15-year-old boy develops crops of 3 to 8 mm scaly erythematous papules over the trunk and proximal limbs two weeks after a sore throat. Which statement is correct?",
      options: [
        "This is guttate psoriasis with a relatively good prognosis, often responding to narrowband UVB",
        "This is pityriasis rosea and will need oral aciclovir",
        "This is secondary syphilis and requires benzathine penicillin",
        "This is nummular eczema and needs a potent topical steroid alone",
        "This is chronic plaque psoriasis and requires immediate methotrexate",
      ],
      answer: 0,
      explanation:
        "Drop-like scaly papules erupting on the trunk two weeks after a streptococcal pharyngitis in a young person is guttate psoriasis, which carries the best prognosis of all psoriasis variants and typically responds to narrowband UVB with treatment of the streptococcal infection. Pityriasis rosea begins with a herald patch and has collarette scale in a Christmas-tree pattern, and aciclovir is not standard therapy. Secondary syphilis characteristically involves the palms and soles with non-itchy copper-coloured papules and is confirmed serologically, which does not fit this presentation. Nummular eczema produces coin-shaped oozing itchy plaques on the limbs of adults rather than a sudden truncal shower. Methotrexate is not first line for guttate disease, which is often self-limiting.",
      difficulty: "easy",
    },
    {
      id: "dermatology-psoriasis-q4",
      stem: "A 45-year-old man with psoriasis is prescribed methotrexate 15 mg weekly. He mistakenly takes 15 mg daily for five days and presents with oral ulceration, fever and a total leukocyte count of 1200 per cubic millimetre. What is the specific antidote?",
      options: [
        "Folic acid 5 mg daily",
        "Folinic acid (leucovorin) rescue",
        "Granulocyte colony stimulating factor alone",
        "Intravenous immunoglobulin",
        "N-acetylcysteine",
      ],
      answer: 1,
      explanation:
        "Folinic acid, or leucovorin, bypasses the block on dihydrofolate reductase and is the specific rescue agent in methotrexate overdose with mucositis and marrow suppression, given parenterally and repeated according to methotrexate levels and counts. Folic acid is used prophylactically alongside weekly methotrexate but is not an effective antidote in established toxicity because it still requires reduction by the inhibited enzyme. Granulocyte colony stimulating factor may be used as supportive care for severe neutropenia but does not reverse the drug effect and is not the antidote. Intravenous immunoglobulin has no role in methotrexate toxicity. N-acetylcysteine is the antidote for paracetamol poisoning.",
      difficulty: "hard",
    },
    {
      id: "dermatology-psoriasis-q5",
      stem: "A 38-year-old woman with severe plaque psoriasis and psoriatic arthritis is being considered for adalimumab. Which screening step is essential before starting?",
      options: [
        "Serum calcium and parathyroid hormone",
        "Chest radiograph with an interferon gamma release assay or tuberculin test, plus hepatitis B, C and HIV serology",
        "Skin biopsy to confirm the diagnosis",
        "Antinuclear antibody and rheumatoid factor",
        "Bone mineral density scan",
      ],
      answer: 1,
      explanation:
        "Anti-tumour necrosis factor agents reactivate latent tuberculosis, which is highly prevalent in India, and can reactivate hepatitis B, so screening with a chest radiograph plus interferon gamma release assay or tuberculin test, along with hepatitis B, C and HIV serology, is mandatory and latent infection must be treated before the biologic begins. Calcium and parathyroid hormone are relevant to hypocalcaemia in pustular psoriasis, not to biologic screening. A confirmatory biopsy is unnecessary when the clinical diagnosis is secure. Antinuclear antibody and rheumatoid factor may be checked in the arthritis workup but do not gate biologic therapy. Bone density is a concern with long-term corticosteroids, which have no place in psoriasis management.",
      difficulty: "moderate",
    },
  ],
  cards: [
    {
      id: "dermatology-psoriasis-c1",
      front: "The three bedside signs of psoriasis.",
      back: "Grattage or candle-grease sign (scraping increases silvery scale), Berkeley membrane (glistening membrane below the scale) and Auspitz sign (pinpoint bleeding from suprapapillary thinning over dilated capillaries).",
    },
    {
      id: "dermatology-psoriasis-c2",
      front: "Histological hallmarks of psoriasis.",
      back: "Parakeratosis with loss of the granular layer, regular acanthosis with elongated rete ridges, suprapapillary thinning, dilated tortuous papillary capillaries, Munro microabscesses and spongiform pustules of Kogoj.",
    },
    {
      id: "dermatology-psoriasis-c3",
      front: "Nail changes in psoriasis versus lichen planus.",
      back: "Psoriasis - irregular deep pitting, oil-drop or salmon patch, onycholysis, subungual hyperkeratosis, splinter haemorrhages. Lichen planus - longitudinal ridging, thinning, and pterygium formation.",
    },
    {
      id: "dermatology-psoriasis-c4",
      front: "Drugs that precipitate or worsen psoriasis.",
      back: "Beta blockers, lithium, antimalarials, NSAIDs, interferon, ACE inhibitors and, most importantly, withdrawal of systemic corticosteroids.",
    },
    {
      id: "dermatology-psoriasis-c5",
      front: "The rule of tens.",
      back: "PASI above 10, or body surface area above 10 per cent, or DLQI above 10 - the conventional threshold for moving to phototherapy or systemic therapy.",
    },
    {
      id: "dermatology-psoriasis-c6",
      front: "Five patterns of psoriatic arthritis.",
      back: "Distal interphalangeal predominant, asymmetrical oligoarthritis (commonest), symmetrical polyarthritis, spondyloarthritis with sacroiliitis, and arthritis mutilans with pencil-in-cup deformity.",
    },
    {
      id: "dermatology-psoriasis-c7",
      front: "Systemic drug of choice for an unstable erythrodermic flare.",
      back: "Ciclosporin 2.5 to 5 mg/kg/day for rapid control (or infliximab), limited to a maximum of one year because of nephrotoxicity and hypertension.",
    },
    {
      id: "dermatology-psoriasis-c8",
      front: "Acitretin - who is it best for, and the key warning?",
      back: "Best for pustular and palmoplantar psoriasis and for HIV-positive patients since it is not immunosuppressive; it is a potent teratogen requiring contraception for three years after stopping.",
    },
    {
      id: "dermatology-psoriasis-c9",
      front: "Why should salicylic acid and calcipotriol not be applied together?",
      back: "Salicylic acid inactivates calcipotriol - use the keratolytic at a different time of day, or before the vitamin D analogue in a staged regimen.",
    },
    {
      id: "dermatology-psoriasis-c10",
      front: "Comorbidities to screen for in every psoriasis consultation.",
      back: "Metabolic syndrome - obesity, hypertension, diabetes, dyslipidaemia and fatty liver - plus psoriatic arthritis, cardiovascular disease, depression, alcohol and smoking.",
    },
  ],
  references: [
    "IADVL Textbook of Dermatology, 5th edition, 2022 - psoriasis",
    "IADVL SIG Psoriasis consensus statement on the management of psoriasis in India, 2021 update",
    "British Association of Dermatologists guidelines for biologic therapy for psoriasis, 2020",
    "NICE Clinical Guideline CG153, Psoriasis - assessment and management, updated 2017",
    "Joint AAD and National Psoriasis Foundation guidelines of care for the management of psoriasis, 2019 to 2021 series",
    "Rook's Textbook of Dermatology, 10th edition, 2024 - psoriasis and psoriatic arthritis",
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
