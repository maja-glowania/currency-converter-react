import "./style.css";

const Result = ({ result, currency }) => {
  const renderResult = () => {
    if (result === null || result === undefined) {
      return (
        <p className="result--placeholder">
          Wpisz kwotę i naciśnij "Przelicz kwotę", aby zobaczyć wynik.
        </p>
      );
    }

    const fixedResult = result.toFixed(2);
    const formattedNumber = fixedResult.replace(".", ",");
    const formattedResult = `${formattedNumber} ${currency}`;

    return <span>{formattedResult}</span>;
  };

  return <div className="result">Wynik: {renderResult()}</div>;
};

export default Result;
