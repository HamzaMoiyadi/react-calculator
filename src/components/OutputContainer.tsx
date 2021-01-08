type OutputContainerProps = { query: string; previousQuery: string };

const OutputContainer: React.FC<OutputContainerProps> = ({
  query,
  previousQuery,
}) => {
  return (
    <div className="[ output-container ]" id="output">
      <div className="[ icon-container ]">
        {[1, 2, 3].map((c) => {
          return <span className="[ icon ]" key={c}></span>;
        })}
      </div>
      <small className="[ previous ]">{previousQuery || "64 x 56"}</small>
      <p className="[ result ]">{query || 786098}</p>
    </div>
  );
};
export default OutputContainer;
