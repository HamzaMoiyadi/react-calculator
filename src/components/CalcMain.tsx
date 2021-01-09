import { useState } from "react";
import { BASE_CALC_STATE, CALCULATOR_BUTTONS } from "../data/calc";
import { CalculatorState } from "../types";
import CalcButton from "./CalcButton";
import OutputContainer from "./OutputContainer";

const CalcMain: React.FC = () => {
  // const [queryString, setQueryString] = useState([]);
  // const [previousQuery, setPreviousQuery] = useState([]);

  const [calcState, updateCalcState] = useState<CalculatorState>(
    BASE_CALC_STATE
  );

  return (
    <>
      <div className="[ calculator-container ]">
        {/* Calcular Output */}
        <OutputContainer {...calcState} />
        {/* Calcular Elements */}
        <div className="[ calculator-buttons-container ]">
          {CALCULATOR_BUTTONS.map((c, i) => {
            // const value = operatorMapper(c.value);
            const { value, handler, className, operator } = c;
            return (
              <CalcButton
                key={i}
                customClassName={className}
                value={value}
                onClickHandler={{
                  handler: handler,
                  params: {
                    calculatorUpdator: updateCalcState,
                  },
                  operator: operator,
                }}
              />
              // () => setQueryString((q) => q + c)
            );
          })}
        </div>
      </div>
      <span>{JSON.stringify(calcState)}</span>
    </>
  );
};

export default CalcMain;
