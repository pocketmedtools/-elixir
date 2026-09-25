/**
 * Likely questions for the coming sittings.
 *
 * Built from the 2011-2025 papers: themes that recur on a cycle and are due,
 * themes asked often and recently, and new national guidelines or programmes
 * that have not yet been examined. Each carries the evidence it rests on, so
 * the reader can judge the prediction rather than take it on trust.
 */
import type { PaperId } from "../lib/types";

export type PredictedQuestion = {
  id: string;
  paper: PaperId;
  question: string;
  marks: number;
  likelihood: "high" | "medium";
  /** The pattern in the past papers the prediction rests on. */
  basis: string;
  /** The library topic that answers it. */
  topicId: string;
};

export const PREDICTED: PredictedQuestion[] = [];
