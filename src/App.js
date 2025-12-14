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

function App() {
  const { ratesData, loading, error } = useRates();
  const [inputAmount, setInputAmount] = useState("");
  const [inputCurrency, setInputCurrency] = useState("USD");
  const [calculatedAmount, setCalculatedAmount] = useState("");
  const [calculatedCurrency, setCalculatedCurrency] = useState("USD");

  const [result, setResult] = useState(null);

  const getAvailableCurrencies = (data) => {
    if (!data) return [];
    return Object.keys(data).filter((key) => key !== "EUR");
  };

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

  if (loading || error) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledBody>
          {loading && <Message>Ładowanie kursów walut z API...</Message>}
          {error && (
            <Message $isError>
              Błąd: Nie udało się załadować kursów walut. Sprawdź połączenie lub
              klucz API.
            </Message>
          )}
        </StyledBody>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledBody>
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
      </StyledBody>
    </ThemeProvider>
  );
}

export default App;
