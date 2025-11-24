import "./style.css";

const Form = ({
  amount,
  changeAmount,
  currency,
  changeCurrency,
  availableCurrencies,
  calculate,
}) => {
  const submit = (event) => {
    event.preventDefault();
    calculate();
  };

  return (
    <form className="form" onSubmit={submit}>
      <fieldset class="form__fieldset">
        <legend class="form__legend">Kalkulator walut</legend>
        <p>
          Pola obowiązkowe oznaczone są <span class="form__important">*</span>.
        </p>
        <p>
          <label className="form__label">
            <span className="form__important">* </span>Kwota w PLN:
            <input
              className="form__field"
              type="number"
              min="0"
              step="1"
              placeholder="Wpisz kwotę"
              required
              value={amount}
              onChange={(event) => changeAmount(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label className="form__label">
            Wybierz walutę
            <select
              className="form__field"
              value={currency}
              onChange={(event) => changeCurrency(event.target.value)}
            >
              {availableCurrencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button class="form__button" type="submit">
          Przelicz kwotę
        </button>
      </p>
    </form>
  );
};

export default Form;
