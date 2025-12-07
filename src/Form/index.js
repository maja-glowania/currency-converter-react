import "./style.css";
import CurrencySelect from "../CurrencySelect";

const Form = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  availableCurrencies,
  calculate,
  children,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    calculate();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        {children}
        <p>
          Pola obowiązkowe oznaczone są{"*"}
          <span className="form__important">*</span>.
        </p>
        <div>
          <label className="form__label">
            <span className="form__important">* </span>Kwota w PLN:
            <input
              className="form__field"
              type="number"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              min="0"
              placeholder="Wpisz kwotę"
              required
            />
          </label>
        </div>
        <div>
          <CurrencySelect
            label="Wybierz walutę"
            value={currency}
            onChange={setCurrency}
            availableCurrencies={availableCurrencies}
          />
        </div>
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
