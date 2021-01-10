import { CalculatorState } from "../types";

type OutputContainerProps = CalculatorState;

const OutputContainer: React.FC<OutputContainerProps> = ({ displayValue }) => {
  return (
    <div className="[ output-container ]" id="output">
      <div className="[ icon-container ]">
        {[1, 2, 3].map((c) => {
          return <span className="[ icon ]" key={c}></span>;
        })}
      </div>
      {/* <small className="[ previous ]">
        {previousQuery[previousQuery.length - 1]}
      </small> */}
      <p className="[ result ]">
        {displayValue}
        {/* {query.map((q, i) => {
          console.log(q);
          return <span key={i}>{q}</span>;
        })} */}
      </p>
    </div>
  );
};
export default OutputContainer;
