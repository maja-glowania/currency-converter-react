import { useState, useEffect } from "react";
import Form from "./Form";
import Result from "./Result";

const staticRates = {
  EUR: 4.1802,
  GBP: 4.9989,
  USD: 3.863,
  AUD: 2.4286,
  PLN: 1.0,
};

const availableCurrencies = Object.keys(staticRates).filter(
  (currency) => currency !== "PLN"
);

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

      setResult(calculatedResult.toFixed(2));
    } else {
      setResult(null);
    }
  }, [calculatedAmount, calculatedCurrency]);

  return (
    <>
      <Form
        amount={inputAmount}
        changeAmount={setInputAmount}
        currency={inputCurrency}
        changeCurrency={setInputCurrency}
        availableCurrencies={availableCurrencies}
        calculate={handleCalculate}
      />

      <Result result={result} currency={calculatedCurrency} />
    </>
  );
}

export default App;
