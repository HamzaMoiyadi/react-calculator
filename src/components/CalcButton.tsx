import { ButtonData } from "../types";

type CalcButtonProps = {
  value: string;
  onClickHandler: { handler: Function; params: any };
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
          const { setq, setpq } = onClickHandler.params;
          if (onClickHandler.handler) {
            onClickHandler.handler(setq, setpq, value);
          } else {
            setq((q) => q + value);
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
