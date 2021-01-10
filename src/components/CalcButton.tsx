import { finalDisplayValue } from "../data/utils";
import {
  OperationalParamsV2
} from "../types";

type CalcButtonProps = {
  value: string;
  onClickHandler: {
    handler: Function;
    params: OperationalParamsV2;
    operator?: string;
  };
  customClassName: string;
};
const CalcButton: React.FC<CalcButtonProps> = ({
  value,
  onClickHandler,
  customClassName,
}) => {
  return (
    <button
      className={`[ calc-button ] [ ${customClassName ?? ""} ]`}
      onClick={() => {
        try {
          const { calculatorUpdator } = onClickHandler.params;
          if (onClickHandler.handler) {
            onClickHandler.handler({ calculatorUpdator });
          } else {
            calculatorUpdator((state) => {
              const { waitingForOperand, displayValue } = state;
              // Figure out the final value that has to be displayed on the output

              return {
                ...state,
                ...finalDisplayValue(waitingForOperand, displayValue, value),
              };
            });
          }
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {value}
    </button>
  );
};

export default CalcButton;
