import { CalculatorState, OperationalParamsV2 } from "../types";
import { BASE_CALC_STATE } from "./calc";

export const add = () => {};
export const result = ({ calculatorUpdator }: OperationalParamsV2): void => {
  try {
    calculatorUpdator((state) => {
      const { value, displayValue, operator } = state;
      const inputValue = parseFloat(displayValue);
      const currentValue = value || 0;
      const newValue = CALCULATOR_OPERATIONS[operator](
        currentValue,
        inputValue
      );
      return {
        ...state,
        value: newValue,
        displayValue: String(newValue),
      };
    });
  } catch (error) {
    console.log(error);
  }
};

export const allClear = ({ calculatorUpdator }: OperationalParamsV2) => {
  calculatorUpdator((state) => {
    return {
      ...BASE_CALC_STATE,
    };
  });
};

export const toggleSign = ({ calculatorUpdator }: OperationalParamsV2) => {
  calculatorUpdator((state) => {
    const { displayValue } = state;
    return { ...state, displayValue: String(parseFloat(displayValue) * -1) };
  });
};

export const addDot = ({ calculatorUpdator }: OperationalParamsV2) => {
  calculatorUpdator((state) => {
    const { displayValue } = state;

    return {
      ...state,
      ...(!/\./.test(displayValue)
        ? {
            displayValue: displayValue + ".",
            waitingForOperand: false,
          }
        : {}),
    };
  });
};

export const convertToPercent = ({
  calculatorUpdator,
}: OperationalParamsV2) => {
  calculatorUpdator((state) => {
    const { displayValue } = state;
    const floatedValue = parseFloat(displayValue) / 100;
    if (floatedValue === 0) {
      return state;
    }
    const fixedDigits = displayValue.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(displayValue) / 100;

    return {
      ...state,
      displayValue: String(newValue.toFixed(fixedDigits.length + 2)),
    };
  });
};

// Get this to work as an arrow function
export function performOperation({ calculatorUpdator }: OperationalParamsV2) {
  calculatorUpdator((state) => {
    const { value, displayValue, operator } = state;
    const inputValue = parseFloat(displayValue);

    let newState: Partial<CalculatorState> = {};

    if (value == null) {
      newState = {
        ...newState,
        value: inputValue,
      };
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CALCULATOR_OPERATIONS[operator](
        currentValue,
        inputValue
      );

      newState = {
        ...newState,
        value: newValue,
        displayValue: String(newValue),
      };
    }

    return {
      ...state,
      ...newState,
      waitingForOperand: true,
      operator: this.operator,
    };
  });
}

const CALCULATOR_OPERATIONS = {
  "÷": (prevValue, nextValue) => prevValue / nextValue,
  x: (prevValue, nextValue) => prevValue * nextValue,
  "+": (prevValue, nextValue) => prevValue + nextValue,
  "-": (prevValue, nextValue) => prevValue - nextValue,
  "=": (prevValue, nextValue) => nextValue,
};
