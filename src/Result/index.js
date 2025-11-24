import "./style.css";

const Result = ({ result, currency }) => {
  const renderResult = () => {
    if (result === null || result === undefined) {
      return (
        <p className="result-placeholder">
          Wpisz kwotę i naciśnij "Przelicz", aby zobaczyć wynik.
        </p>
      );
    }

    const formattedResult = new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(result);

    return (
      <p className="result-output">
        Wynik: <strong>{formattedResult}</strong>
      </p>
    );
  };

  return (
    <div className="result-container">
      <h2>Wynik:</h2>
      {renderResult()}
    </div>
  );
};

export default Result;
