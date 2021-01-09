import { ButtonData, CalculatorState } from "../types";
import {
  addDot,
  allClear,
  convertToPercent,
  performOperation,
  result,
  toggleSign,
} from "./calculator-functions";

type Buttons = ButtonData[];

export const CALCULATOR_BUTTONS: Buttons = [
  {
    value: "C",
    handler: allClear,
    className: "gradient-lilac-lilacer",
  },
  {
    value: "±",
    handler: toggleSign,
    className: "gradient-lilac-lilacer",
  },
  {
    value: "%",
    handler: convertToPercent,
    className: "gradient-lilac-lilacer",
  },
  {
    value: "÷",
    handler: performOperation,
    className: "gradient-gold-golder",
    operator: "/",
  },
  {
    value: "7",
    handler: null,
  },
  {
    value: "8",
    handler: null,
  },
  {
    value: "9",
    handler: null,
  },
  {
    value: "x",
    handler: performOperation,
    className: "gradient-gold-golder",
    operator: "*",
  },

  {
    value: "4",
    handler: null,
  },
  {
    value: "5",
    handler: null,
  },
  {
    value: "6",
    handler: null,
  },
  {
    value: "-",
    handler: null,
    className: "gradient-gold-golder",
  },

  {
    value: "1",
    handler: null,
  },
  {
    value: "2",
    handler: null,
  },
  {
    value: "3",
    handler: null,
  },
  {
    value: "+",
    handler: null,
    className: "gradient-gold-golder",
  },
  {
    value: "0",
    handler: null,
    className: "colspan-2",
  },
  {
    value: ".",
    handler: addDot,
  },
  {
    value: "=",
    handler: result,
  },
];

export const BASE_CALC_STATE: CalculatorState = {
  value: null,
  displayValue: "0",
  operator: null,
  waitingForOperand: false,
};
