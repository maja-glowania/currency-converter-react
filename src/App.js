import { useState, useEffect } from "react";
import Form from "./Form";
import Result from "./Result";
import { staticRates, availableCurrencies } from "./data";

function App() {
  const Body = ({ children }) => {
    return <main className="body">{children}</main>;
  };

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
    <Body>
      <Form
        amount={inputAmount}
        currency={inputCurrency}
        availableCurrencies={availableCurrencies}
        setAmount={setInputAmount}
        setCurrency={setInputCurrency}
        calculate={handleCalculate}
      />
      <Result result={result} currency={calculatedCurrency} />
    </Body>
  );
}

export default App;
