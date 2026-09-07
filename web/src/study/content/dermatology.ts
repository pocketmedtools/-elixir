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
