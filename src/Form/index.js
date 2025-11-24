import "./style.css";
import CurrencySelect from "./CurrencySelect";

const Form = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  availableCurrencies,
  calculate,
}) => {
  // Funkcja obsługująca wysłanie formularza (kliknięcie "Przelicz")
  const handleSubmit = (event) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony
    calculate(); // Wywołuje funkcję handleCalculate z App.js
  };

  return (
    <form className="converter-form" onSubmit={handleSubmit}>
      {/* Input Kwoty (PLN) */}
      <label className="amount-label">
        Kwota (PLN):
        <input
          className="amount-input"
          type="number"
          value={amount}
          // Używa nowej nazwy: setAmount
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          required
        />
      </label>

      {/* Select Waluta Docelowa (wydzielony komponent) */}
      <CurrencySelect
        label="Przelicz na:"
        value={currency}
        // Używa nowej nazwy: setCurrency
        onChange={setCurrency}
        availableCurrencies={availableCurrencies}
      />

      {/* Przycisk "Przelicz" */}
      <button className="calculate-button" type="submit">
        Przelicz
      </button>
    </form>
  );
};

export default Form;
