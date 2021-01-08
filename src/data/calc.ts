import { ButtonData } from "../types";
import { deleteQuery, result } from "./calculator-functions";

type Buttons = ButtonData[];

export const CALCULATOR_BUTTONS: Buttons = [
  {
    value: "C",
    handler: deleteQuery,
    className: "gradient-lilac-lilacer",
  },
  {
    value: "±",
    handler: null,
    className: "gradient-lilac-lilacer",
  },
  {
    value: "%",
    handler: null,
    className: "gradient-lilac-lilacer",
  },
  {
    value: "÷",
    handler: null,
    className: "gradient-gold-golder",
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
    handler: null,
    className: "gradient-gold-golder",
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
    value: ",",
    handler: null,
  },
  {
    value: "=",
    handler: result,
  },
];
