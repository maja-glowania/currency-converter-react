import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Form from "./Form";
import Clock from "./Clock";
import Result from "./Result";
import GlobalStyle from "./GlobalStyle";
import { useRates } from "./useRates";
import { Message } from "./Message";

const StyledBody = styled.main``;

const getAvailableCurrencies = (data) => {
  if (!data) return [];
  return Object.keys(data);
};

function App() {
  const { ratesData, loading, error } = useRates();
  const [inputAmount, setInputAmount] = useState("");
  const [inputCurrency, setInputCurrency] = useState("USD");
  const [calculatedAmount, setCalculatedAmount] = useState("");
  const [calculatedCurrency, setCalculatedCurrency] = useState("USD");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setCalculatedAmount(inputAmount);
    setCalculatedCurrency(inputCurrency);
  };

  useEffect(() => {
    const numericAmount = parseFloat(calculatedAmount);

    if (ratesData && numericAmount > 0) {
      const targetRateValue = ratesData[calculatedCurrency]?.value;
      const PLNRateValue = ratesData["PLN"]?.value;

      if (targetRateValue && PLNRateValue) {
        const ratePLNtoTarget = targetRateValue / PLNRateValue;
        const calculatedResult = numericAmount * ratePLNtoTarget;
        setResult(calculatedResult);
      } else {
        setResult(null);
      }
    } else {
      setResult(null);
    }
  }, [calculatedAmount, calculatedCurrency, ratesData]);

  const renderContent = () => {
    if (loading || error) {
      return (
        <>
          <Clock />
          {loading && <Message>Ładowanie kursów walut z API...</Message>}
          {error && (
            <Message $isError>
              Błąd: Nie udało się załadować kursów walut. Sprawdź połączenie lub
              klucz API.
            </Message>
          )}
        </>
      );
    }

    return (
      <>
        <Form
          amount={inputAmount}
          currency={inputCurrency}
          availableCurrencies={getAvailableCurrencies(ratesData)}
          setAmount={setInputAmount}
          setCurrency={setInputCurrency}
          calculate={handleCalculate}
        >
          <Clock />
        </Form>
        <Result result={result} currency={calculatedCurrency} />
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledBody>{renderContent()}</StyledBody>
    </ThemeProvider>
  );
}

export default App;
