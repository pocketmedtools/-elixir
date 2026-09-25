/**
 * Newborn weight loss: % loss = (birth weight − today's weight) / birth weight × 100.
 *
 * Interpretation follows AAP / ABM (Academy of Breastfeeding Medicine) and
 * NICE practice for healthy term and late-preterm babies:
 *  - Physiological loss is usually ≤ 7 %, with the nadir on day 3–4.
 *  - ≥ 7 % → assess feeding; ≥ 10 % → significant loss (evaluate for
 *    dehydration, hypernatraemia, jaundice); ≥ 12 % → severe.
 *  - Weight should stop falling by day 5 and be back to birth weight by
 *    day 10–14.
 */

export type WeightBand = "gain" | "normal" | "borderline" | "significant" | "severe";

export interface WeightLossResult {
  /** Percent loss, rounded to 1 decimal (negative = above birth weight). */
  percent: number;
  /** Grams lost (negative = grams gained). */
  gramsLost: number;
  band: WeightBand;
  label: string;
  /** Weight at which loss reaches 7 % and 10 % of birth weight, in grams. */
  mark7: number;
  mark10: number;
  recommendations: string[];
}

export function weightLossPercent(birthG: number, todayG: number): number {
  return ((birthG - todayG) / birthG) * 100;
}

/** Plausible single-baby weight in grams (extreme preterm to macrosomic). */
export function plausibleNewbornGrams(g: number): boolean {
  return g >= 300 && g <= 7000;
}

export function assessNewbornWeight(
  birthG: number,
  todayG: number,
  /** Age in hours of life, or null when not entered. */
  ageHours: number | null,
): WeightLossResult {
  // Classify on the displayed (1-decimal) value so the colour always matches
  // the number the user sees — 9.96 % is shown and treated as 10.0 %.
  const percent = Math.round(weightLossPercent(birthG, todayG) * 10) / 10;
  const gramsLost = Math.round(birthG - todayG);

  let band: WeightBand;
  let label: string;
  if (percent <= 0) {
    band = "gain";
    label = percent === 0 ? "At birth weight" : "Above birth weight";
  } else if (percent < 7) {
    band = "normal";
    label = "Within expected physiological loss";
  } else if (percent < 10) {
    band = "borderline";
    label = "Borderline — needs feeding assessment";
  } else if (percent < 12) {
    band = "significant";
    label = "SIGNIFICANT WEIGHT LOSS";
  } else {
    band = "severe";
    label = "SIGNIFICANT WEIGHT LOSS — severe";
  }

  const recs: string[] = [];
  const days = ageHours == null ? null : ageHours / 24;

  switch (band) {
    case "gain":
      if (ageHours != null && ageHours < 72)
        recs.push("Gain above birth weight in the first 3 days is unusual — re-check the scale, weigh naked on the same scale, and look for oedema.");
      else
        recs.push("Reassuring — back at or above birth weight. Expected gain from here is about 20–30 g/day.");
      break;
    case "normal":
      recs.push("Physiological loss (usually ≤ 7 %, lowest on day 3–4). Continue exclusive breastfeeding on demand, 8–12 feeds/day.");
      recs.push("Monitor wet nappies (≥ 6/day by day 5), stool colour change to yellow by day 4–5, and jaundice.");
      break;
    case "borderline":
      recs.push("Loss ≥ 7 %: do a full breastfeeding assessment — latch, positioning, feed frequency (8–12/day), audible swallowing, maternal milk supply.");
      recs.push("Check urine and stool output, jaundice, and alertness. Consider expressed breast milk top-ups; re-weigh in 24 h.");
      break;
    case "significant":
      recs.push("Loss ≥ 10 %: evaluate for dehydration and hypernatraemia — check serum sodium; also bilirubin and blood glucose as indicated.");
      recs.push("Feeding plan: observed feeds, supplement with expressed breast milk / donor milk / formula as per unit protocol, and support lactation.");
      recs.push("Re-weigh within 24 h. Admit if clinically unwell, lethargic, poor feeding, Na ≥ 150 mmol/L, or loss keeps rising.");
      break;
    case "severe":
      recs.push("Loss ≥ 12 %: high risk of hypernatraemic dehydration — urgent paediatric review, serum sodium, urea/creatinine, bilirubin and glucose.");
      recs.push("Admit for supervised feeding and supplementation; IV fluids if dehydrated or unable to feed. Correct hypernatraemia slowly (fall ≤ 0.5 mmol/L/h, ≤ 10–12 mmol/L per day).");
      recs.push("Also assess for underlying illness (sepsis, cardiac, metabolic) if the baby looks unwell.");
      break;
  }

  if (days != null && percent > 0) {
    if (ageHours! <= 24 && percent > 5)
      recs.push("More than 5 % lost within the first 24 h is faster than typical — observe a feed and re-weigh in 24 h.");
    else if (ageHours! <= 72 && percent >= 7 && band === "borderline")
      recs.push("Reaching ≥ 7 % before 72 h of life is faster than typical — closer follow-up is warranted.");
    if (days > 5 && days <= 10)
      recs.push("Beyond day 5 weight should no longer be falling — if the trend is still downward, evaluate feeding and intake now.");
    if (days > 10 && days < 14)
      recs.push("Most babies regain birth weight by day 10–14 — not yet regained, so review feeding and plan a follow-up weight.");
    if (days >= 14)
      recs.push("Not back to birth weight by 2 weeks — evaluate for inadequate intake and other causes of poor weight gain; paediatric review.");
  }

  return {
    percent,
    gramsLost,
    band,
    label,
    mark7: Math.round(birthG * 0.93),
    mark10: Math.round(birthG * 0.9),
    recommendations: recs,
  };
}
