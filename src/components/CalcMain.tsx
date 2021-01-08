import { CALCULATOR_BUTTONS } from "../data/calc";
import { useState } from "react";
import CalcButton from "./CalcButton";
import OutputContainer from "./OutputContainer";

const CalcMain: React.FC = () => {
  const [queryString, setQueryString] = useState("");
  const [previousQuery, setPreviousQuery] = useState("");

  return (
    <div className="[ calculator-container ]">
      {/* Calcular Output */}
      <OutputContainer previousQuery={previousQuery} query={queryString} />
      {/* Calcular Elements */}
      <div className="[ calculator-buttons-container ]">
        {CALCULATOR_BUTTONS.map((c, i) => {
          return (
            <CalcButton
              key={i}
              customClassName={c.className}
              value={c["value"]}
              onClickHandler={{
                handler: c["handler"],
                params: {
                  setq: setQueryString,
                  setpq: setPreviousQuery,
                },
              }}
            />
            // () => setQueryString((q) => q + c)
          );
        })}
      </div>
    </div>
  );
};

export default CalcMain;
