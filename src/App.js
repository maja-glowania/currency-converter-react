import { useState, useEffect } from "react";
import Layout from "./Layout";
import Form from "./Form";
import Result from "./Result";
import { STATIC_RATES, AVAILABLE_CURRENCIES } from "./Data";

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

    if (numericAmount > 0 && STATIC_RATES[calculatedCurrency]) {
      const rate = STATIC_RATES[calculatedCurrency];
      const calculatedResult = numericAmount / rate;
      setResult(calculatedResult);
    } else {
      setResult(null);
    }
  }, [calculatedAmount, calculatedCurrency]);

  return (
    <Layout>
      <Form
        amount={inputAmount}
        currency={inputCurrency}
        availableCurrencies={AVAILABLE_CURRENCIES}
        setAmount={setInputAmount}
        setCurrency={setInputCurrency}
        calculate={handleCalculate}
      />
      <Result result={result} currency={calculatedCurrency} />
    </Layout>
  );
}

export default App;
