/**
 * The shape every subject's diagram module takes. Copy, rename to the subject
 * id, and fill in. Keys are topic ids exactly as they appear in the library.
 */
import type { DiagramSet } from "../lib/types";

const diagrams: DiagramSet = {
  "example-topic-id": [
    {
      kind: "flow",
      heading: "Managing an acute attack",
      caption: "Every step is done in this order; do not skip to the drug.",
      steps: [
        { label: "Recognise", detail: "Silent chest, exhaustion, SpO2 under 92%", tone: "warn" },
        { label: "Oxygen", detail: "Target SpO2 94-98%" },
        { label: "Responding?", tone: "decision" },
        { label: "Refer", detail: "Same day, with a written note", tone: "good" },
      ],
    },
    {
      kind: "branch",
      heading: "Classification",
      root: "Raised bilirubin",
      arms: [
        { label: "Unconjugated", steps: ["Haemolysis", "Gilbert syndrome"] },
        { label: "Conjugated", steps: ["Hepatocellular", "Cholestatic"], tone: "warn" },
      ],
    },
    {
      kind: "compare",
      heading: "Telling the two apart",
      columns: ["Feature", "Condition A", "Condition B"],
      rows: [["Onset", "Sudden", "Gradual"]],
    },
  ],
};

export default diagrams;
