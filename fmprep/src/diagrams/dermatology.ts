/**
 * Diagrams for dermatology, keyed by topic id.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "dermatology-lesion-description": [
    {
      kind: "flow",
      heading: "The order of words in the short case",
      caption: "Say it in this sequence and nothing is missed. Describe first, diagnose second.",
      steps: [
        {
          label: "Number and distribution",
          detail:
            "Single, few or multiple; localised, regional, generalised, universal or erythrodermic",
        },
        {
          label: "Site, named precisely",
          detail:
            "Then the pattern - symmetrical, extensor, flexural, photo-exposed, seborrhoeic, acral, intertriginous or dermatomal",
        },
        {
          label: "Size in centimetres",
          detail:
            "Measure in two dimensions with a scale; never say coin-sized in the examination",
        },
        {
          label: "Shape and margin",
          detail:
            "Round, oval, annular, arciform, polycyclic, serpiginous; margin well or ill defined, raised, rolled, everted, undermined, sloping or punched out",
        },
        {
          label: "Surface",
          detail:
            "Smooth, scaly, verrucous, crusted, eroded, umbilicated; state whether scraping yields scale (grattage) and whether pinpoint bleeding follows (Auspitz)",
        },
        {
          label: "Colour",
          tone: "warn",
          detail:
            "In Indian skin always separate hypopigmented (some pigment left) from depigmented (chalk white) - that one word separates leprosy from vitiligo",
        },
        {
          label: "Consistency, temperature, arrangement",
          detail:
            "Discrete, confluent, grouped or herpetiform, linear, annular, reticulate, zosteriform or blaschkoid",
        },
        {
          label: "Secondary change",
          detail:
            "Scale, crust, erosion, ulcer, excoriation, lichenification, atrophy, fissure, scar, sclerosis",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Primary lesions by size and content",
      caption:
        "One centimetre divides macule from patch, papule from plaque and vesicle from bulla - but a petechia is under 3 mm.",
      columns: ["Content", "Under 1 cm", "1 cm or more", "Typical example"],
      rows: [
        ["Flat colour change", "Macule", "Patch", "Vitiligo, leprosy patch, freckle"],
        [
          "Solid elevation",
          "Papule",
          "Plaque (flat-topped) or nodule (deep)",
          "Lichen planus papule, psoriatic plaque",
        ],
        ["Clear fluid", "Vesicle", "Bulla", "Herpes zoster, pemphigus"],
        ["Pus", "Pustule", "Abscess (deep, fluctuant)", "Acne, furuncle"],
        ["Transient oedema", "Wheal", "Giant wheal or angioedema", "Urticaria"],
        [
          "Extravasated blood",
          "Petechia (under 3 mm)",
          "Ecchymosis",
          "Vasculitis, thrombocytopenia",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "The edge is the word that names the disease",
      columns: ["Edge described", "Diagnosis it points to"],
      rows: [
        ["Raised, active, scaly with central clearing", "Tinea corporis"],
        ["Rolled, pearly, with telangiectasia", "Basal cell carcinoma"],
        ["Everted with a keratotic, indurated base", "Squamous cell carcinoma"],
        ["Undermined and bluish", "Tuberculous or atypical mycobacterial ulcer"],
        ["Punched out with a pale, dry base", "Trophic or arterial ulcer"],
        ["Sloping with granulation tissue", "Venous ulcer"],
        ["Violaceous, overhanging and boggy", "Pyoderma gangrenosum"],
      ],
    },
    {
      kind: "branch",
      heading: "The annular plaque: three diagnoses, three bedside tests",
      root: "Annular plaque",
      arms: [
        {
          label: "Scaly, with a raised active edge",
          steps: [
            "Central clearing, itchy, worse with sweating",
            "Dermatophytosis until a KOH mount is negative",
            "KOH mount with 10 per cent potassium hydroxide from the active scaly edge",
          ],
        },
        {
          label: "Dry, hairless, no scale",
          tone: "warn",
          steps: [
            "Anaesthetic - cotton wool touch is not felt over the lesion",
            "Borderline tuberculoid leprosy; tinea is never anaesthetic",
            "Palpate the peripheral nerves and take a slit-skin smear",
          ],
        },
        {
          label: "Indurated with apple-jelly nodules",
          steps: [
            "Nodules appear on blanching with a glass slide",
            "Lupus vulgaris - diascopy is the bedside test",
          ],
        },
      ],
    },
  ],

  "dermatology-scabies-pediculosis": [
    {
      kind: "flow",
      heading: "Treating scabies: the patient and the household",
      caption:
        "The mark-carrying sentence is that all household and close contacts are treated on the same day, whether or not they itch.",
      steps: [
        {
          label: "Confirm at the bedside",
          detail:
            "Skin scraping in mineral oil or 10 per cent KOH from an unexcoriated burrow shows mites, oval eggs or scybala",
        },
        {
          label: "Permethrin 5 per cent to the whole body",
          detail:
            "First line above 2 months and in pregnancy and lactation; neck down in adults, including face and scalp in infants, the elderly and the immunosuppressed; about 30 g per adult",
        },
        {
          label: "Leave on 8 to 14 hours overnight",
          detail:
            "Apply to cool dry skin after a bath, cover every fold and under short-cut nails, reapply to the hands after every hand wash",
        },
        {
          label: "Repeat once on day 7",
          tone: "warn",
          detail:
            "Permethrin is not reliably ovicidal; the missed second application is a leading cause of failure",
        },
        {
          label: "Treat every contact on the same day",
          tone: "decision",
          detail:
            "An untreated contact re-infests the patient - suspect this long before permethrin resistance",
        },
        {
          label: "Decontaminate clothes and bedding",
          detail:
            "Machine wash the last three days of clothes, towels and linen above 60 degrees C and sun dry or iron; seal non-washables for 72 hours to 7 days. Fumigation is unnecessary - the mite dies in 2 to 3 days off the host",
        },
        {
          label: "Treat the itch and any pyoderma",
          detail:
            "Emollients, hydroxyzine 25 mg at night or cetirizine 10 mg, and cloxacillin 500 mg six hourly for pyoderma; check a child's urine and blood pressure at three weeks",
        },
        {
          label: "Warn that itch may last 2 to 4 weeks",
          tone: "good",
          detail:
            "Post-scabetic itch is hypersensitivity to retained mite antigen, not failure",
        },
      ],
    },
    {
      kind: "branch",
      heading: "Choosing a scabicide",
      root: "Which scabicide, for whom",
      arms: [
        {
          label: "Above 2 months, pregnancy, lactation",
          tone: "good",
          steps: [
            "Permethrin 5 per cent cream - first line at all ages above two months",
            "8 to 14 hours overnight, repeated on day 7",
            "Costliest topical, mild burning",
          ],
        },
        {
          label: "Infant under 2 months",
          steps: [
            "Sulphur 5 to 10 per cent in petrolatum",
            "Three consecutive nights, covering scalp and face",
            "Malodorous and stains clothing, but the safest option under two months and in pregnancy",
          ],
        },
        {
          label: "Outbreak, crusted scabies, failure",
          steps: [
            "Oral ivermectin 200 microgram per kilogram with food",
            "Single dose repeated after 7 to 14 days",
            "Not under 15 kg or under 5 years; avoided in pregnancy and lactation",
            "Crusted scabies needs days 1, 2, 8, 9 and 15, extended to 22 and 29 in severe disease, with daily permethrin and a keratolytic",
          ],
        },
        {
          label: "Cheap alternatives",
          steps: [
            "Benzyl benzoate 25 per cent on three consecutive nights, diluted to 12.5 per cent for children and 6.25 per cent for infants; stings excoriated skin",
            "Crotamiton 10 per cent for two to five nights - a useful antipruritic but the least effective scabicide",
          ],
        },
        {
          label: "Lindane 1 per cent",
          tone: "warn",
          steps: [
            "No longer recommended at any age",
            "Neurotoxicity, seizures, aplastic anaemia",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "The three pediculoses compared",
      columns: [
        "Feature",
        "Pediculosis capitis",
        "Pediculosis corporis",
        "Pediculosis pubis",
      ],
      rows: [
        [
          "Organism",
          "Pediculus humanus capitis",
          "Pediculus humanus corporis",
          "Pthirus pubis, the crab louse",
        ],
        [
          "Where the louse lives",
          "Scalp hair close to the skin",
          "Seams of clothing",
          "Pubic, axillary and beard hair, eyelashes",
        ],
        [
          "Typical patient",
          "School child, girls more than boys",
          "Homeless or destitute, unwashed clothing",
          "Sexually active adult",
        ],
        [
          "Key sign",
          "Nits cemented to hair, occipital nodes",
          "Excoriated back, vagabond pigmentation",
          "Maculae ceruleae, rusty specks on underwear",
        ],
        [
          "Vector of systemic disease",
          "No",
          "Typhus, trench fever, relapsing fever",
          "No",
        ],
        [
          "Treatment",
          "Permethrin plus wet combing, repeat day 7",
          "Wash, iron or discard clothing, hygiene",
          "Permethrin, partner treatment, STI screen",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Still itching after treatment: which is it?",
      caption:
        "The question that settles it is whether there are new burrows or new papules.",
      columns: ["Feature", "Post-scabetic itch", "True treatment failure"],
      rows: [
        ["New burrows or papules", "Absent", "Present"],
        [
          "Timing",
          "Itch persists 2 to 4 weeks after adequate treatment",
          "Fresh lesions two to three weeks later",
        ],
        [
          "Contacts",
          "All treated on the same day",
          "A contact was never treated",
        ],
        ["Day 7 repeat application", "Given", "Often omitted"],
        [
          "Mechanism",
          "Hypersensitivity to retained mite antigen in the stratum corneum",
          "Live mites still present",
        ],
        [
          "Action",
          "Emollients, a moderate topical steroid and an oral antihistamine",
          "Repeat the scabicide, or oral ivermectin, and treat every contact",
        ],
        [
          "The classic error",
          "A third application of permethrin, which adds irritant dermatitis",
          "Blaming resistance before checking whether contacts were treated",
        ],
      ],
    },
  ],

  "dermatology-eczema-atopic-dermatitis": [
    {
      kind: "ladder",
      heading: "Escalating treatment in atopic dermatitis",
      caption:
        "Emollients continue at every step; avoid long-term systemic corticosteroids because of rebound.",
      steps: [
        {
          label: "Emollients and a soap substitute",
          tone: "good",
          detail:
            "250 to 500 g a week for an adult, at least twice daily and within three minutes of a bath; a syndet bar or emollient wash replaces soap",
        },
        {
          label: "Topical corticosteroid matched to site",
          detail:
            "Hydrocortisone 1 per cent for face, eyelids, flexures and infants; mometasone furoate 0.1 per cent for trunk and limbs; betamethasone valerate 0.1 per cent for lichenified plaques. Prescribe in fingertip units - one FTU is about 0.5 g and covers two adult palms",
        },
        {
          label: "Topical calcineurin inhibitor",
          detail:
            "Tacrolimus 0.03 per cent over 2 years or 0.1 per cent in adults, or pimecrolimus 1 per cent - steroid sparing for face and flexures and for proactive twice-weekly maintenance; warn about burning in the first week",
        },
        {
          label: "Wet wrap dressings for a severe flare",
          detail: "Chiefly in children",
        },
        {
          label: "Narrowband UVB phototherapy",
          detail: "For extensive resistant disease",
        },
        {
          label: "Systemic immunosuppression",
          detail:
            "Ciclosporin 3 to 5 mg per kilogram per day for short-term control, methotrexate 7.5 to 15 mg weekly with folic acid, azathioprine after thiopurine methyltransferase testing, or mycophenolate",
        },
        {
          label: "Dupilumab",
          detail:
            "Interleukin 4 receptor alpha antibody, 600 mg loading then 300 mg fortnightly, where available and affordable",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Topical corticosteroid potency and the site it suits",
      columns: ["Potency", "Example", "Site", "Duration"],
      rows: [
        [
          "Mild",
          "Hydrocortisone 1 per cent, hydrocortisone acetate 2.5 per cent",
          "Face, eyelids, flexures, genitalia, infants",
          "Two to four weeks, may be repeated",
        ],
        [
          "Moderate",
          "Clobetasone butyrate 0.05 per cent, mometasone furoate 0.1 per cent, fluticasone 0.05 per cent",
          "Trunk and limbs in adults and older children",
          "Two to four weeks continuous",
        ],
        [
          "Potent",
          "Betamethasone valerate 0.1 per cent, betamethasone dipropionate 0.05 per cent",
          "Lichenified plaques, hands, feet, scalp",
          "Two weeks, then step down",
        ],
        [
          "Very potent",
          "Clobetasol propionate 0.05 per cent, halobetasol 0.05 per cent",
          "Palms, soles, thick plaques, under specialist advice",
          "Two weeks maximum, never on the face",
        ],
        [
          "Steroid-sparing",
          "Tacrolimus 0.03 or 0.1 per cent, pimecrolimus 1 per cent",
          "Face, eyelids, flexures, proactive maintenance",
          "Long-term twice weekly is acceptable",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Irritant versus allergic contact dermatitis",
      columns: ["Feature", "Irritant", "Allergic"],
      rows: [
        [
          "Mechanism",
          "Non-immunological direct damage",
          "Type IV cell-mediated delayed hypersensitivity",
        ],
        [
          "Prior sensitisation",
          "Not needed - occurs in anyone with enough exposure",
          "Needed, over 10 to 14 days",
        ],
        [
          "Onset",
          "Minutes to hours of exposure",
          "24 to 72 hours after re-exposure",
        ],
        [
          "Extent",
          "Confined to the contact site, dose dependent",
          "May spread beyond the contact site",
        ],
        [
          "Diagnosis",
          "Exposure history; dose dependence",
          "Patch testing on the upper back, read at 48 and 96 hours",
        ],
        [
          "Patch test behaviour",
          "Reaction fades between 48 and 96 hours",
          "Reaction crescendos between 48 and 96 hours",
        ],
        [
          "Indian examples",
          "Hand eczema from detergents, cement burns",
          "Para-phenylenediamine in hair dye, nickel, potassium dichromate, parthenium, neomycin",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "The atopic patient who suddenly worsens",
      root: "Sudden deterioration of eczema",
      arms: [
        {
          label: "Weeping with golden crusting",
          steps: [
            "Staphylococcus aureus, which colonises over 90 per cent of atopic skin",
            "Oral cloxacillin 500 mg six hourly or cefalexin for five to seven days; mupirocin for localised lesions",
            "Dilute bleach baths, about 0.005 per cent sodium hypochlorite, twice weekly where recurrence is frequent",
          ],
        },
        {
          label: "Monomorphic punched-out erosions",
          tone: "warn",
          steps: [
            "Eczema herpeticum with fever - a dermatological emergency",
            "Start aciclovir at once: 400 mg five times daily orally, or 5 mg per kilogram eight hourly intravenously",
            "Ophthalmology referral if the eye is involved",
            "Do not raise the steroid potency and do not apply wet wraps",
          ],
        },
        {
          label: "Spreading erythema, pain, fever",
          tone: "warn",
          steps: [
            "Bacterial cellulitis, with lymphangitis",
            "Systemic antibiotics and review in 48 hours",
          ],
        },
        {
          label: "Annular plaque with an active edge",
          steps: [
            "Tinea incognito, modified by weeks of a steroid combination cream",
            "Stop the combination cream and take a KOH mount",
            "Oral terbinafine 250 mg daily with a topical azole",
          ],
        },
      ],
    },
  ],

  "dermatology-acne-vulgaris": [
    {
      kind: "branch",
      heading: "Four pathogenic steps name the four drugs",
      root: "Pathogenesis of acne",
      arms: [
        {
          label: "Follicular hyperkeratinisation",
          steps: [
            "Blocks the pilosebaceous duct and forms the microcomedone, precursor of every acne lesion",
            "Topical retinoid - adapalene, tretinoin or tazarotene",
            "The backbone of both treatment and maintenance",
          ],
        },
        {
          label: "Androgen-driven sebum excess",
          steps: [
            "Circulating androgens are usually normal - it is end-organ sensitivity that differs",
            "Combined oral contraceptive or spironolactone 50 to 100 mg daily",
            "Isotretinoin shrinks the gland and cuts sebum output by up to 90 per cent",
          ],
        },
        {
          label: "Colonisation by Cutibacterium acnes",
          steps: [
            "Hydrolyses sebum triglycerides into free fatty acids and activates innate immunity",
            "Benzoyl peroxide - bactericidal and generates no resistance",
            "Oral or topical antibiotics, never as monotherapy",
          ],
        },
        {
          label: "Perifollicular inflammation",
          steps: [
            "Neutrophils, Toll-like receptor 2 activation and interleukin 1 beta",
            "Produces the papule, pustule, nodule and cyst",
            "Inflammation is present in clinically normal-looking skin - treat the whole area, not individual spots",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "Treatment ladder by acne grade",
      caption:
        "Judge any regimen at 8 to 12 weeks; changing drugs every three weeks guarantees failure.",
      steps: [
        {
          label: "Grade 1 - comedones only",
          detail:
            "Adapalene 0.1 per cent gel at night, first choice for tolerability; add benzoyl peroxide 2.5 per cent or salicylic acid. Expect a retinoid reaction of dryness and stinging in the first fortnight",
        },
        {
          label: "Grade 2 - papules with comedones",
          detail:
            "Fixed adapalene 0.1 per cent with benzoyl peroxide 2.5 per cent nightly; topical clindamycin 1 per cent only alongside benzoyl peroxide, never alone",
        },
        {
          label: "Grade 3 - widespread papulopustular",
          detail:
            "Add doxycycline 100 mg daily or minocycline 100 mg daily for 8 to 12 weeks, always with a topical retinoid and benzoyl peroxide; azithromycin 500 mg thrice weekly in pregnancy after the first trimester and under eight years",
        },
        {
          label: "Grade 4 - nodulocystic or scarring",
          detail:
            "Oral isotretinoin 0.5 to 1 mg per kilogram per day to a cumulative 120 to 150 mg per kilogram; prednisolone first in acne fulminans, then low-dose isotretinoin",
        },
        {
          label: "Maintenance after clearance",
          tone: "good",
          detail:
            "Topical retinoid, with or without benzoyl peroxide, for at least 6 to 12 months - stopping everything on clearance is the commonest reason acne relapses",
        },
      ],
    },
    {
      kind: "flow",
      heading: "An isotretinoin course, start to finish",
      steps: [
        {
          label: "Confirm the indication",
          tone: "decision",
          detail:
            "Severe nodulocystic acne, acne conglobata, scarring acne, severe psychological impact, or failure of adequate conventional therapy",
        },
        {
          label: "Baseline tests and contraception",
          tone: "warn",
          detail:
            "Fasting lipid profile and liver transaminases; contraception and a pregnancy test in women before the first capsule",
        },
        {
          label: "Start 0.5 to 1 mg per kilogram per day",
          detail:
            "Taken with a fatty meal; start at 0.25 to 0.5 mg per kilogram per day in severe nodular disease, or add brief oral prednisolone, to avoid the initial flare",
        },
        {
          label: "Do not co-prescribe doxycycline",
          tone: "warn",
          detail:
            "A tetracycline with isotretinoin risks benign intracranial hypertension",
        },
        {
          label: "Recheck at 4 to 8 weeks",
          detail:
            "Fasting lipids and transaminases; a monthly pregnancy test in women. Routine haemogram and creatinine are not required at standard doses",
        },
        {
          label: "Stop or reduce if",
          tone: "warn",
          detail:
            "Triglycerides above 500 mg/dL (risk of pancreatitis), transaminases above three times the upper limit of normal, severe mood change or visual disturbance",
        },
        {
          label: "Reach 120 to 150 mg per kilogram total",
          tone: "good",
          detail:
            "Usually over 6 to 8 months; relapse is likelier if the cumulative dose is not reached",
        },
        {
          label: "Maintenance and deferred scar work",
          detail:
            "Topical retinoid for 6 to 12 months; microneedling, subcision, TCA CROSS and fractional laser deferred six months after isotretinoin",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Acne and the eruptions mistaken for it",
      caption:
        "Two more steroid-related mimics: steroid acne (monomorphic papulopustules at one stage of evolution, no comedones) and perioral dermatitis (micropapules sparing the vermilion border).",
      columns: ["Feature", "Acne vulgaris", "Rosacea", "Malassezia folliculitis"],
      rows: [
        [
          "Comedones",
          "Present, and required for the diagnosis",
          "Absent - the decisive point",
          "Absent",
        ],
        [
          "Site",
          "Face, chest and upper back; jawline in adult women",
          "Central face, cheeks and chin",
          "Upper trunk and shoulders",
        ],
        [
          "Typical age",
          "Adolescence in over 80 per cent of teenagers",
          "Usually over 30 years",
          "Any age",
        ],
        [
          "Other features",
          "Papules, pustules, nodules, scarring, post-inflammatory pigmentation",
          "Flushing, telangiectasia, stinging with cosmetics",
          "Monomorphic itchy follicular papulopustules",
        ],
        [
          "Treatment",
          "Retinoid, benzoyl peroxide, oral antibiotic, isotretinoin by grade",
          "Topical metronidazole or ivermectin, azelaic acid, oral doxycycline",
          "Antifungals",
        ],
      ],
    },
  ],

  "dermatology-urticaria-angioedema": [
    {
      kind: "ladder",
      heading: "Stepwise treatment of chronic urticaria",
      caption:
        "Score with UAS7 - daily wheal number 0 to 3 plus itch 0 to 3, summed over a week to a maximum of 42 - and use it to justify each escalation.",
      steps: [
        {
          label: "Step 1 - standard-dose antihistamine",
          detail:
            "A second-generation non-sedating H1 blocker daily and regularly, not as needed: levocetirizine 5 mg, cetirizine 10 mg, fexofenadine 180 mg, loratadine 10 mg or bilastine 20 mg. Review at 2 to 4 weeks",
        },
        {
          label: "Step 2 - up-dose to four times standard",
          detail:
            "The same antihistamine, for example levocetirizine 5 mg up to four times daily, before adding any other drug - the single most examined point. Review at 2 to 4 weeks",
        },
        {
          label: "Step 3 - add omalizumab",
          detail:
            "300 mg subcutaneously every 4 weeks; response often within one to two doses, continued for at least six months before withdrawal is attempted",
        },
        {
          label: "Step 4 - add ciclosporin",
          detail:
            "3 to 5 mg per kilogram per day for a limited period, with monthly blood pressure and creatinine",
        },
        {
          label: "Rescue only - oral prednisolone",
          tone: "warn",
          detail:
            "0.5 mg per kilogram per day for three to seven days in a severe exacerbation or severe angioedema; long-term systemic steroids have no place in chronic urticaria",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Anaphylaxis: the sequence that saves the life",
      caption:
        "There is no absolute contraindication to adrenaline in anaphylaxis, and undiluted 1 in 1000 is never given intravenously outside a monitored setting.",
      steps: [
        {
          label: "Adrenaline 0.5 mg intramuscularly",
          tone: "warn",
          detail:
            "0.5 mL of 1 in 1000 into the anterolateral thigh, repeated every 5 to 15 minutes as needed; paediatric dose 0.01 mg per kilogram to a maximum of 0.5 mg",
        },
        {
          label: "Position the patient",
          detail:
            "Flat with the legs raised, left lateral in pregnancy, sitting up if breathless",
        },
        {
          label: "High-flow oxygen, secure the airway early",
          detail:
            "Stridor, a change in voice or tongue swelling means impending obstruction",
        },
        {
          label: "Crystalloid 20 mL per kilogram",
          detail: "Intravenous bolus, repeated as needed for hypotension",
        },
        {
          label: "Adjuncts only after adrenaline",
          detail:
            "Chlorpheniramine 10 mg intravenously and hydrocortisone 200 mg intravenously - never a substitute for adrenaline",
        },
        {
          label: "Observe 6 to 12 hours",
          detail: "Because of biphasic reactions",
        },
        {
          label: "Auto-injector, plan, allergy referral",
          tone: "good",
          detail:
            "Prescribe an adrenaline auto-injector with training and a written emergency plan; serum tryptase one to two hours after the reaction",
        },
      ],
    },
    {
      kind: "compare",
      heading: "Urticaria, urticarial vasculitis and hereditary angioedema",
      caption:
        "Ask how long ONE wheal lasts, not how long the rash has lasted.",
      columns: [
        "Feature",
        "Chronic spontaneous urticaria",
        "Urticarial vasculitis",
        "Hereditary angioedema",
      ],
      rows: [
        [
          "Duration of a single lesion",
          "Less than 24 hours",
          "More than 24 hours",
          "Swelling for 24 to 72 hours",
        ],
        ["Symptom", "Itch", "Burning and pain", "Tightness, no itch"],
        [
          "Residual mark",
          "None",
          "Purpura or hyperpigmentation",
          "None",
        ],
        ["Wheals present", "Yes", "Yes, fixed", "No, angioedema only"],
        [
          "Key test",
          "Clinical, UAS7, autologous serum skin test",
          "Skin biopsy, C3, C4, C1q, ANA, urinalysis",
          "Low C4, then C1 inhibitor level and function",
        ],
        [
          "Treatment",
          "Antihistamine ladder, omalizumab, ciclosporin",
          "Treat cause; dapsone, colchicine, steroids",
          "C1 inhibitor concentrate, icatibant, or fresh frozen plasma",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "The inducible (physical) urticarias",
      root: "Wheals with a reproducible trigger",
      arms: [
        {
          label: "Cholinergic urticaria",
          steps: [
            "Trigger - exercise, a hot shower, emotion or spicy food raising core temperature",
            "Crops of 2 to 3 mm wheals with disproportionately large flares",
            "Settles within an hour; confirmed by exercise or hot bath provocation",
            "Regular second-generation antihistamine",
          ],
        },
        {
          label: "Symptomatic dermographism",
          steps: [
            "Trigger - stroking or scratching the skin",
            "Linear wheals along the stroke line",
          ],
        },
        {
          label: "Cold urticaria",
          steps: [
            "Appears on rewarming after cold exposure",
            "Confirmed by the ice cube test; lesions resolve within an hour of rewarming",
          ],
        },
        {
          label: "Delayed pressure urticaria",
          steps: [
            "Sustained pressure such as tight straps",
            "Deep painful swelling four to eight hours later",
          ],
        },
        {
          label: "Aquagenic urticaria",
          steps: ["Follows water contact at any temperature"],
        },
      ],
    },
  ],

  "dermatology-psoriasis": [
    {
      kind: "compare",
      heading: "Psoriasis versus its common mimics",
      columns: [
        "Feature",
        "Psoriasis",
        "Chronic eczema",
        "Tinea corporis",
        "Lichen planus",
      ],
      rows: [
        [
          "Margin",
          "Sharply defined",
          "Ill defined",
          "Raised active edge with central clearing",
          "Well defined polygonal papules",
        ],
        [
          "Scale",
          "Silvery-white, micaceous, loose",
          "Fine, adherent, with crusting",
          "Fine scale at the advancing edge",
          "Minimal, with Wickham striae",
        ],
        [
          "Symptom",
          "Mild itch, scaling dominant",
          "Itch dominant with excoriations",
          "Itch, worse with sweating",
          "Intense itch, violaceous colour",
        ],
        [
          "Bedside sign",
          "Auspitz sign, grattage, Koebner",
          "Lichenification",
          "KOH mount positive for hyphae",
          "Wickham striae, Koebner",
        ],
        [
          "Nails",
          "Pitting, oil drop, subungual hyperkeratosis",
          "Pitting rare, ridging from paronychia",
          "Onychomycosis with distal discoloration",
          "Ridging, thinning, pterygium",
        ],
        [
          "Site",
          "Extensors, scalp, sacrum, nails",
          "Flexures in atopics",
          "Groins, trunk, any moist site",
          "Flexor wrists, shins, oral mucosa",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "Clinical variants of psoriasis",
      root: "Psoriasis",
      arms: [
        {
          label: "Chronic plaque - about 90 per cent",
          steps: [
            "Symmetrical well-defined plaques with silvery scale",
            "Extensors, scalp, sacrum and nails; look at the umbilicus, natal cleft and genitalia",
            "Auspitz sign, grattage and Koebner (new lesions at trauma sites after 7 to 14 days) at the bedside",
          ],
        },
        {
          label: "Guttate",
          tone: "good",
          steps: [
            "Crops of 2 to 10 mm drop-like scaly papules on the trunk",
            "Two weeks after a streptococcal sore throat, usually in a young person",
            "Best prognosis of all variants; responds to narrowband UVB with treatment of the streptococcal infection",
          ],
        },
        {
          label: "Inverse, scalp, palmoplantar, nail",
          steps: [
            "Inverse - shiny well-defined erythema without scale in axillae, groins and submammary folds",
            "Nail change in up to 50 per cent and it predicts arthritis",
            "Irregular deep pitting, onycholysis with an oil-drop patch, subungual hyperkeratosis, splinter haemorrhages",
          ],
        },
        {
          label: "Erythrodermic",
          tone: "warn",
          steps: [
            "More than 90 per cent of the body red and scaly",
            "Impaired thermoregulation, high-output cardiac failure, hypoalbuminaemia, dehydration, sepsis",
            "Admit, keep warm, correct fluid and electrolytes, high-protein nutrition, bland emollients",
            "Ciclosporin or infliximab for rapid control",
          ],
        },
        {
          label: "Generalised pustular (von Zumbusch)",
          tone: "warn",
          steps: [
            "Abrupt fever with waves of sterile pustules on tender erythema",
            "Leukocytosis, hypocalcaemia and hypoalbuminaemia",
            "Classically precipitated by withdrawal of a systemic corticosteroid, infection or pregnancy",
            "Admit for fluid and electrolyte correction, then acitretin, ciclosporin, methotrexate or infliximab",
          ],
        },
      ],
    },
    {
      kind: "ladder",
      heading: "From topicals to biologics in psoriasis",
      caption:
        "The rule of tens - PASI above 10, body surface area above 10 per cent, or DLQI above 10 - justifies systemic therapy. Systemic corticosteroids have no place at any step.",
      steps: [
        {
          label: "Descaling and emollients",
          detail:
            "Salicylic acid 3 to 6 per cent to lift thick scale, and 2 per cent in coconut oil overnight for the scalp; it inactivates calcipotriol, so do not apply the two together",
        },
        {
          label: "Topical vitamin D analogue",
          detail:
            "Calcipotriol 0.005 per cent ointment twice daily, maximum 100 g per week; no atrophy, ideal for long-term use, irritation the main problem",
        },
        {
          label: "Topical corticosteroid by site",
          detail:
            "Potent betamethasone valerate 0.1 per cent for trunk and limb plaques; very potent clobetasol propionate 0.05 per cent for palms, soles and thick plaques for a maximum of two weeks; mild agents only on face and flexures",
        },
        {
          label: "Coal tar or short-contact dithranol",
          detail:
            "Coal tar 5 to 10 per cent, or 1 to 2 per cent shampoo for the scalp; dithranol 0.1 to 3 per cent for 10 to 30 minutes daily on stable thick plaques",
        },
        {
          label: "Phototherapy",
          detail: "Narrowband UVB for extensive disease",
        },
        {
          label: "Conventional systemic drugs",
          detail:
            "Methotrexate 7.5 to 25 mg weekly with folic acid where there is arthritis; ciclosporin 2.5 to 5 mg per kilogram per day for a severe unstable flare, limited to one year; acitretin 0.3 to 0.5 mg per kilogram per day for pustular and palmoplantar disease and in HIV",
        },
        {
          label: "Apremilast or a biologic",
          detail:
            "Apremilast 30 mg twice daily after titration; anti-TNF, ustekinumab, secukinumab, ixekizumab, guselkumab or risankizumab after screening for tuberculosis, hepatitis B and C and HIV - latent tuberculosis must be treated first",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Starting methotrexate safely",
      steps: [
        {
          label: "Screen before the first dose",
          detail:
            "Complete blood count, liver and renal function, hepatitis B and C and HIV serology, chest radiograph and a pregnancy test",
        },
        {
          label: "Test dose 2.5 to 5 mg",
          tone: "decision",
          detail: "Blood count one week later before going on",
        },
        {
          label: "Then 7.5 to 25 mg ONCE WEEKLY",
          tone: "warn",
          detail:
            "Orally or intramuscularly; it must never be given daily by mistake",
        },
        {
          label: "Folic acid 5 mg on a different day",
          detail: "Reduces mucosal and haematological toxicity",
        },
        {
          label: "Monitor at 2 to 4 weeks, then 3-monthly",
          detail:
            "Blood count, liver and renal function; hepatic fibrosis assessment by FibroScan or procollagen III peptide in long-term use",
        },
        {
          label: "Mouth ulcers, fever or bruising",
          tone: "warn",
          detail:
            "Marrow suppression - stop the drug, check the blood count and give folinic acid (leucovorin) rescue",
        },
        {
          label: "Contraception in both partners",
          detail:
            "Teratogenic - avoid conception for at least three months; contraindicated in significant liver or renal disease and in active infection",
        },
      ],
    },
  ],

  "dermatology-leprosy-nlep": [
    {
      kind: "flow",
      heading: "The leprosy examination, in order",
      caption:
        "Any ONE of the three cardinal signs makes the diagnosis: a definite hypopigmented or erythematous patch with definite sensory loss, a thickened or tender nerve with sensory or motor deficit, or acid-fast bacilli in a slit-skin smear.",
      steps: [
        {
          label: "Describe the patch",
          detail:
            "Number, site, size in centimetres, shape, surface (dry, hairless, anhidrotic), margin, and colour - hypopigmented, never depigmented",
        },
        {
          label: "Test sensation with the eyes closed",
          detail:
            "Compare with adjacent normal skin: cotton wool (or a 10 g Semmes-Weinstein monofilament on palms and soles), pin, and warm and cold test tubes. Temperature is lost first, then light touch, then pain",
        },
        {
          label: "Palpate the peripheral nerves",
          detail:
            "Great auricular, supraorbital, ulnar above the elbow, median at the wrist, radial cutaneous, lateral popliteal at the neck of the fibula, posterior tibial and sural - both sides, for thickening, tenderness and beading",
        },
        {
          label: "Assess nerve function - VMT and ST",
          detail:
            "Ulnar - little finger abduction and card test; median - abductor pollicis brevis; radial - wrist extension; lateral popliteal - foot dorsiflexion; facial - eye closure",
        },
        {
          label: "Slit-skin smear",
          detail:
            "Both ear lobes plus the active edge of one or two lesions; slit 5 mm long and 2 to 3 mm deep, stained by modified Ziehl-Neelsen with 5 per cent sulphuric acid. Report the bacteriological index (0 to 6+) and the morphological index",
        },
        {
          label: "Classify for treatment",
          tone: "decision",
          detail:
            "A positive smear makes the patient multibacillary regardless of lesion count. The lepromin test is not diagnostic - it is for classification and prognosis only",
        },
        {
          label: "Record the WHO disability grade",
          detail:
            "Separately for each eye, each hand and each foot: Grade 0 no anaesthesia or deformity; Grade 1 loss of protective sensation only; Grade 2 visible deformity or damage",
        },
        {
          label: "Register and start multidrug therapy",
          tone: "good",
          detail:
            "NLEP register with classification and date of starting, a patient-held card, and examination of all household contacts",
        },
      ],
    },
    {
      kind: "compare",
      heading: "WHO operational classification and the NLEP regimens",
      caption:
        "Blister calendar packs are colour coded and supplied free; one pack is one month of treatment.",
      columns: ["Feature", "Paucibacillary", "Multibacillary"],
      rows: [
        ["Skin lesions", "1 to 5", "More than 5"],
        ["Nerve trunks involved", "Not more than one", "More than one"],
        [
          "Slit-skin smear",
          "Negative",
          "Positive - this alone makes it multibacillary",
        ],
        [
          "Monthly supervised dose (adult)",
          "Rifampicin 600 mg with dapsone 100 mg, plus clofazimine 300 mg where the uniform three-drug regimen is used",
          "Rifampicin 600 mg, clofazimine 300 mg and dapsone 100 mg",
        ],
        [
          "Daily self-administered",
          "Dapsone 100 mg, with clofazimine 50 mg in the uniform regimen",
          "Clofazimine 50 mg and dapsone 100 mg",
        ],
        ["Duration", "6 months", "12 months"],
        [
          "Completion window",
          "6 blister packs within 9 months",
          "12 blister packs within 18 months",
        ],
        ["Follow-up after release", "Two years", "Five years"],
        [
          "Child 10 to 14 years, monthly",
          "Rifampicin 450 mg, clofazimine 150 mg, dapsone 50 mg",
          "Rifampicin 450 mg, clofazimine 150 mg, dapsone 50 mg",
        ],
      ],
    },
    {
      kind: "compare",
      heading: "Type 1 versus type 2 lepra reaction",
      caption: "Multidrug therapy is continued unchanged through either reaction.",
      columns: [
        "Feature",
        "Type 1 (reversal)",
        "Type 2 (erythema nodosum leprosum)",
      ],
      rows: [
        [
          "Immunology",
          "Type IV delayed hypersensitivity, cell mediated",
          "Type III immune complex deposition",
        ],
        [
          "Spectrum affected",
          "Borderline - BT, BB, BL",
          "BL and LL with high bacterial load",
        ],
        [
          "Timing",
          "Often in the first 6 months of treatment",
          "Usually after 6 months, and recurrent",
        ],
        [
          "Skin",
          "Existing patches become red, swollen, warm, tender, may ulcerate",
          "Crops of new tender evanescent subcutaneous nodules",
        ],
        [
          "Systemic features",
          "Usually absent; oedema of hands, feet and face",
          "Fever, malaise, arthralgia, iritis, orchitis, dactylitis, nephritis",
        ],
        [
          "Nerve involvement",
          "Acute neuritis with sudden new palsies - common",
          "Neuritis less common but does occur",
        ],
        [
          "Treatment",
          "Prednisolone 40 to 60 mg tapered over about 12 weeks, splint the limb, continue MDT",
          "Prednisolone with clofazimine 100 mg thrice daily; thalidomide for severe recurrent disease, continue MDT",
        ],
      ],
    },
    {
      kind: "branch",
      heading: "The Ridley-Jopling spectrum",
      root: "Ridley-Jopling classification",
      arms: [
        {
          label: "Tuberculoid pole (TT)",
          steps: [
            "One or few large, well-defined, dry, hairless, anaesthetic plaques with a raised edge",
            "A single thickened nerve, negative smear, positive lepromin",
            "Epithelioid granulomas with Langhans giant cells on biopsy",
          ],
        },
        {
          label: "Borderline - BT, BB, BL",
          tone: "warn",
          steps: [
            "Immunologically unstable - these are the patients who present with type 1 reactions and sudden nerve damage",
            "BB shows the classical annular punched-out or Swiss-cheese lesion with an inner and an outer margin",
          ],
        },
        {
          label: "Lepromatous pole (LL)",
          steps: [
            "Numerous small, symmetrical, ill-defined, shiny succulent macules, papules and nodules with sensation nearly normal",
            "Leonine facies, madarosis, nasal stuffiness and septal perforation, glove-and-stocking anaesthesia, gynaecomastia, testicular atrophy",
            "Highly positive smear, negative lepromin, foamy Virchow cells with a clear subepidermal grenz zone",
          ],
        },
        {
          label: "Indeterminate and pure neuritic",
          steps: [
            "Indeterminate - the earliest unclassified form, an ill-defined hypopigmented macule",
            "Pure neuritic - nerve thickening with sensory or motor deficit and no skin lesion, common in India",
            "Pure neuritic is treated as multibacillary if more than one nerve trunk is involved",
          ],
        },
      ],
    },
  ],

  "dermatology-drug-eruptions-sjs-ten": [
    {
      kind: "branch",
      heading: "Time to onset names the reaction",
      caption: "Time to onset is the strongest clue to causality.",
      root: "Rash after a new drug",
      arms: [
        {
          label: "Minutes to hours",
          tone: "warn",
          steps: [
            "Urticaria, angioedema and anaphylaxis - the emergency of this group",
            "IgE-mediated; each individual wheal lasts under 24 hours",
          ],
        },
        {
          label: "Hours, on re-exposure",
          steps: [
            "Fixed drug eruption",
            "A sharply defined dusky plaque at exactly the same site each time, classically from cotrimoxazole",
            "Leaves dense post-inflammatory hyperpigmentation",
          ],
        },
        {
          label: "1 to 4 days",
          steps: [
            "Acute generalised exanthematous pustulosis",
            "Fever with dozens of small non-follicular sterile pustules on oedematous erythema, starting in the flexures",
            "Aminopenicillin, macrolide, diltiazem, terbinafine or hydroxychloroquine; neutrophilia; the least lethal severe reaction",
          ],
        },
        {
          label: "4 to 14 days",
          steps: [
            "Morbilliform exanthem - the commonest drug eruption",
            "Symmetrical macules and papules from the trunk outwards, sparing face and mucosae, mild itch, no skin pain",
            "Resolves with desquamation over one to two weeks after stopping the drug",
          ],
        },
        {
          label: "4 to 28 days",
          tone: "warn",
          steps: [
            "Stevens-Johnson syndrome and toxic epidermal necrolysis",
            "Prodrome of fever, sore throat, burning eyes and skin pain, then dusky atypical targets and flaccid bullae with a positive Nikolsky sign",
            "Erosive mucositis of two or more surfaces in over 90 per cent",
          ],
        },
        {
          label: "2 to 8 weeks",
          tone: "warn",
          steps: [
            "DRESS - drug reaction with eosinophilia and systemic symptoms",
            "Infiltrated exanthem with marked facial oedema, fever and lymphadenopathy",
            "Eosinophilia above 700 per cubic millimetre, with hepatitis, nephritis, myocarditis or pneumonitis; anticonvulsants, allopurinol, dapsone, vancomycin",
          ],
        },
      ],
    },
    {
      kind: "compare",
      heading: "Distinguishing the severe cutaneous adverse reactions",
      caption:
        "SJS is under 10 per cent detachment, SJS-TEN overlap 10 to 30 per cent and TEN above 30 per cent - only detached or detachable skin is counted.",
      columns: ["Feature", "SJS and TEN", "DRESS", "AGEP"],
      rows: [
        ["Onset after drug", "4 to 28 days", "2 to 8 weeks", "1 to 4 days"],
        [
          "Primary lesion",
          "Dusky atypical targets, flaccid bullae, sheet detachment",
          "Infiltrated exanthem with facial oedema",
          "Dozens of small sterile non-follicular pustules",
        ],
        [
          "Mucosae",
          "Severely eroded, two or more sites",
          "Mild cheilitis, usually spared",
          "Usually spared",
        ],
        ["Nikolsky sign", "Positive", "Negative", "Negative"],
        [
          "Blood picture",
          "Lymphopenia, neutropenia in severe cases",
          "Eosinophilia, atypical lymphocytes",
          "Neutrophilia",
        ],
        [
          "Organ involvement",
          "Renal, pulmonary, ocular",
          "Hepatitis, nephritis, myocarditis, thyroiditis late",
          "Usually none",
        ],
        [
          "Mortality",
          "SJS about 5 to 10 per cent, TEN 30 per cent or more",
          "About 10 per cent",
          "Under 5 per cent",
        ],
      ],
    },
    {
      kind: "ladder",
      heading: "SCORTEN: score, mortality and level of care",
      caption:
        "One point each for age 40 or more, associated malignancy, heart rate 120 or more, detachment above 10 per cent on day 1, urea above 10 mmol/L, bicarbonate below 20 mmol/L and glucose above 14 mmol/L. Score within 24 hours of admission and again on day 3.",
      steps: [
        {
          label: "SCORTEN 0 to 1",
          tone: "good",
          detail:
            "About 3 per cent mortality - ward care with dermatology input may suffice",
        },
        {
          label: "SCORTEN 2",
          detail:
            "About 12 per cent - transfer to a high-dependency or burns unit",
        },
        {
          label: "SCORTEN 3",
          detail: "About 35 per cent - intensive care, aggressive fluid and eye care",
        },
        {
          label: "SCORTEN 4",
          detail: "About 58 per cent - intensive care with a multidisciplinary team",
        },
        {
          label: "SCORTEN 5 or more",
          tone: "warn",
          detail:
            "About 90 per cent - intensive care and early discussion with the family",
        },
      ],
    },
    {
      kind: "flow",
      heading: "Managing toxic epidermal necrolysis",
      caption:
        "Supportive care and drug withdrawal, not the immunomodulator, determine the outcome.",
      steps: [
        {
          label: "Withdraw the culprit drug at once",
          tone: "warn",
          detail:
            "The intervention with the clearest effect on mortality - state it before any other measure; a day of delay with a short half-life drug worsens outcome",
        },
        {
          label: "Transfer to a burns unit or intensive care",
          detail:
            "When detachment exceeds about 10 per cent or SCORTEN is 2 or more",
        },
        {
          label: "Warmed room at 28 to 32 degrees C",
          detail:
            "Non-adherent surface, strict asepsis and reverse barrier nursing",
        },
        {
          label: "Fluid replacement and electrolytes",
          detail:
            "About two-thirds to three-quarters of the burn requirement - a practical start is 2 mL per kilogram per percentage area detached in the first 24 hours, titrated to a urine output of 0.5 to 1 mL per kilogram per hour; correct hypophosphataemia later",
        },
        {
          label: "Early nasogastric nutrition",
          detail:
            "20 to 25 kcal per kilogram per day rising to 25 to 30, with 1.5 to 2 g of protein per kilogram; add stress ulcer prophylaxis and thromboprophylaxis",
        },
        {
          label: "Urgent and continuing eye care",
          tone: "warn",
          detail:
            "Ophthalmology review on day 1 and daily thereafter, whatever the eyes look like; preservative-free lubricants and lysis of adhesions - ocular sequelae are the commonest permanent disability",
        },
        {
          label: "Two things not to do",
          tone: "warn",
          detail:
            "Do not debride - the detached epidermis is a biological dressing; do not give prophylactic antibiotics - culture and treat proven infection instead",
        },
        {
          label: "Adjunctive immunomodulation, if used",
          detail:
            "Ciclosporin 3 to 5 mg per kilogram per day for 7 to 10 days has the most consistent mortality benefit; etanercept 50 mg subcutaneously as a single dose; short-course dexamethasone or prednisolone within the first 72 hours in many Indian units; intravenous immunoglobulin alone has not shown consistent benefit",
        },
      ],
    },
  ],
};

export default diagrams;
