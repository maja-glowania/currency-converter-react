import { SelectLabel, SelectField } from "./styled.js";

const CurrencySelect = ({ label, value, onChange, availableCurrencies }) => {
  return (
    <SelectLabel>
      {label}
      <SelectField
        value={value}
        onChange={({ target }) => onChange(target.value)}
      >
        {availableCurrencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </SelectField>
    </SelectLabel>
  );
};

export default CurrencySelect;
