import { useState, useEffect } from "react";
import Form from "./Form";
import Clock from "./Clock";
import Result from "./Result";
import { staticRates, availableCurrencies } from "./data";

const Body = ({ children }) => {
  return <main className="body">{children}</main>;
};

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
    <Body>
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
    </Body>
  );
}

export default App;
