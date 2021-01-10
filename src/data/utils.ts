import { CalculatorState } from "../types";

/**
 * Function to determine the display value to be entered in the calculator output
 * @param o is there an operator present?
 * @param prev the previous value already in the state
 * @param v the current value that is being input in the calculator
 */
export const finalDisplayValue = (
  o: boolean,
  prev: string,
  v: string
): Partial<CalculatorState> => {
  if (o) {
    return { displayValue: String(v), waitingForOperand: false };
  } else {
    return prev === "0"
      ? { displayValue: String(v) }
      : { displayValue: prev + v };
  }
};
