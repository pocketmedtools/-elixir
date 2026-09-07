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
