import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Form from "./Form";
import Clock from "./Clock";
import Result from "./Result";
import { staticRates, availableCurrencies } from "./data";
import GlobalStyle from "./GlobalStyle";

const StyledBody = styled.main``;

function App() {
  const [inputAmount, setInputAmount] = useState("");
  const [inputCurrency, setInputCurrency] = useState("EUR");

  const [calculatedAmount, setCalculatedAmount] = useState("");
  const [calculatedCurrency, setCalculatedCurrency] = useState("EUR");

  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setCalculatedAmount(inputAmount);
    setCalculatedCurrency(inputCurrency);
  };

  useEffect(() => {
    const numericAmount = parseFloat(calculatedAmount);

    if (numericAmount > 0 && staticRates[calculatedCurrency]) {
      const rate = staticRates[calculatedCurrency];
      const calculatedResult = numericAmount / rate;
      setResult(calculatedResult);
    } else {
      setResult(null);
    }
  }, [calculatedAmount, calculatedCurrency]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledBody>
        <Form
          amount={inputAmount}
          currency={inputCurrency}
          availableCurrencies={availableCurrencies}
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
