import "./style.css";

const Result = ({ result, currency }) => {
  if (!result) {
    return <p className="result">Wprowadź kwotę.</p>;
  }

  return (
    <p className="result">
      Wynik:{" "}
      <strong>
        {result} {currency}
      </strong>
    </p>
  );
};

export default Result;
