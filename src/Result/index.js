import { ResultContainer, PlaceholderP } from "./styled.js";

const Result = ({ result, currency }) => {
  const renderResult = () => {
    if (result === null || result === undefined) {
      return (
        <PlaceholderP>
          Wpisz kwotę i naciśnij "Przelicz kwotę", aby zobaczyć wynik.
        </PlaceholderP>
      );
    }

    const fixedResult = result.toFixed(2);
    const formattedNumber = fixedResult.replace(".", ",");
    const formattedResult = `${formattedNumber} ${currency}`;

    return <span>{formattedResult}</span>;
  };

  return <ResultContainer>Wynik: {renderResult()}</ResultContainer>;
};

export default Result;
