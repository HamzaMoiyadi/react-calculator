export interface ButtonData {
  value: string;
  handler: Function;
  className?: string;
}

export type CalculatorState = {
  displayValue: string;
  operator: any;
  value: any;
  waitingForOperand: boolean;
};

export type OperationalParams = {
  setQ: React.Dispatch<React.SetStateAction<string[]>>;
  setPQ: React.Dispatch<React.SetStateAction<string[]>>;
  Q: string[];
};
export type OperationalParamsV2 = {
  calculatorUpdator: React.Dispatch<React.SetStateAction<CalculatorState>>;
};
