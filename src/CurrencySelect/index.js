const CurrencySelect = ({ label, value, onChange, availableCurrencies }) => {
  return (
    <label className="form__label">
      {label}
      <select
        className="form__field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
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
