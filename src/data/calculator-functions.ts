import { evaluate } from "mathjs";

type ResultParams = {
  setQ: React.Dispatch<React.SetStateAction<string>>;
  setPQ: React.Dispatch<React.SetStateAction<string>>;
  Q: string;
};

export const deleteQuery = (setq, setpq, value) => {
  setq((q) => "");
};
export const add = () => {};
export const result = ({ setQ, setPQ, Q }: ResultParams): void => {
  console.log(evaluate(Q));

  const finalResult = "";
};
