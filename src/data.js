export const staticRates = {
  EUR: 4.1802,
  GBP: 4.9989,
  USD: 3.863,
  AUD: 2.4286,
  PLN: 1.0,
};

export const availableCurrencies = Object.keys(staticRates).filter(
  (currency) => currency !== "PLN"
);
