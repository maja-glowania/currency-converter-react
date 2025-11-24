import "./style.css";
import CurrencySelect from "../CurrencySelect";

const Form = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  availableCurrencies,
  calculate,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    calculate();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <legend class="form__legend">Kalkulator walut</legend>
        <p>
          Pola obowiązkowe oznaczone są <span class="form__important">*</span>.
        </p>
        <p>
          <label className="form__label">
            <span class="form__important">* </span>Kwota w PLN:
            <input
              className="form__field"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              placeholder="Wpisz kwotę"
              required
            />
          </label>
        </p>
        <p>
          <CurrencySelect
            label="Wybierz walutę"
            value={currency}
            onChange={setCurrency}
            availableCurrencies={availableCurrencies}
          />
        </p>
      </fieldset>
      <p>
        <button className="form__button" type="submit">
          Przelicz kwotę
        </button>
      </p>
    </form>
  );
};

export default Form;
