import {
  FormContainer,
  Fieldset,
  Legend,
  Label,
  InputField,
  SubmitButton,
  ImportantSpan,
  Paragraph,
  Div,
} from "./styled.js";

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
    <FormContainer onSubmit={handleSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        {children}
        <Paragraph>
          Pola obowiązkowe oznaczone są <ImportantSpan>*</ImportantSpan>.
        </Paragraph>
        <Div>
          <Label>
            <ImportantSpan>*</ImportantSpan> Kwota w PLN:
            <InputField
              type="number"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              min="0"
              placeholder="Wpisz kwotę"
              required
            />
          </Label>
        </Div>
        <Div>
          <CurrencySelect
            label="Wybierz walutę"
            value={currency}
            onChange={setCurrency}
            availableCurrencies={availableCurrencies}
          />
        </Div>
      </Fieldset>
      <Paragraph>
        <SubmitButton type="submit">Przelicz kwotę</SubmitButton>
      </Paragraph>
    </FormContainer>
  );
};

export default Form;
