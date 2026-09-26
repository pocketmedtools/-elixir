/**
 * BMI with INDIAN cutoffs (Consensus Statement for Asian Indians, Misra et
 * al 2009 — endorsed in ICMR/API practice): overweight 23.0–24.9 kg/m²,
 * obesity ≥ 25 kg/m² (lower than WHO's 25/30 because cardiometabolic risk
 * in Indians rises at lower BMI). Obesity classes follow the WHO Asia-Pacific
 * classification (2000): class I 25–29.9, class II ≥ 30; class III ≥ 35 per
 * the Asia-Pacific metabolic/bariatric surgery consensus. Abdominal obesity: waist ≥ 90 cm (men),
 * ≥ 80 cm (women).
 */

export function feetInchesToCm(feet: number, inches: number): number {
  return Math.round((feet * 30.48 + inches * 2.54) * 10) / 10;
}

export function bmiValue(weightKg: number, heightCm: number): number | null {
  if (!(weightKg > 0) || !(heightCm > 50) || heightCm > 250) return null;
  const m = heightCm / 100;
  return Math.round((weightKg / (m * m)) * 10) / 10;
}

export type BmiClass = {
  label: string;
  band: "caution" | "normal" | "alert";
  advice: string;
};

export function classifyBmiIndian(bmi: number): BmiClass {
  if (bmi < 16)
    return {
      band: "alert",
      label: "Severe underweight (BMI < 16)",
      advice: "Evaluate for undernutrition, TB, malabsorption, eating disorder; dietary rehabilitation.",
    };
  if (bmi < 18.5)
    return {
      band: "caution",
      label: "Underweight (BMI < 18.5)",
      advice: "Nutritional assessment; rule out chronic disease if unintentional.",
    };
  if (bmi < 23)
    return {
      band: "normal",
      label: "Normal for Asian Indians (18.5–22.9)",
      advice: "Maintain diet and ≥ 150 min/week physical activity.",
    };
  if (bmi < 25)
    return {
      band: "caution",
      label: "Overweight by Indian cutoffs (23.0–24.9)",
      advice: "Lifestyle modification now — Indian cutoffs are lower because diabetes and CV risk rise at this BMI; screen sugar, BP, lipids.",
    };
  if (bmi < 30)
    return {
      band: "alert",
      label: "Obesity class I (25–29.9)",
      advice: "Structured weight management (target 5–10% weight loss); screen for diabetes, hypertension, dyslipidaemia, fatty liver, OSA.",
    };
  if (bmi < 35)
    return {
      band: "alert",
      label: "Obesity class II (30–34.9)",
      advice: "Intensive lifestyle therapy ± anti-obesity medication; full comorbidity screen. Bariatric surgery may be considered if diabetes is uncontrolled.",
    };
  return {
    band: "alert",
    label: "Obesity class III (≥ 35)",
    advice: "Specialist obesity care; bariatric surgery evaluation (Asian Indian threshold ≥ 35, or ≥ 32.5 with comorbidities).",
  };
}

export function waistFlag(
  waistCm: number,
  sex: "male" | "female",
): { abnormal: boolean; text: string } {
  const cutoff = sex === "male" ? 90 : 80;
  const abnormal = waistCm >= cutoff;
  return {
    abnormal,
    text: abnormal
      ? `Waist ${waistCm} cm ≥ ${cutoff} cm — abdominal obesity by Indian cutoffs (independent cardiometabolic risk even with normal BMI).`
      : `Waist ${waistCm} cm is below the Indian action cutoff (${cutoff} cm).`,
  };
}
