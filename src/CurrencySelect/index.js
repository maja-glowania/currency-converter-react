const CurrencySelect = ({ label, value, onChange, availableCurrencies }) => {
  return (
    <label className="currency-label">
      {label}
      <select
        className="currency-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {/* Renderowanie opcji na podstawie przekazanej tablicy */}
        {availableCurrencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CurrencySelect;
