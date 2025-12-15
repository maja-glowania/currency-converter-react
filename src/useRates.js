import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;
const API_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=EUR`;

const LOADING_DELAY_MS = 1500;

export const useRates = () => {
  const [ratesState, setRatesState] = useState({
    status: "loading",
    data: null,
  });

  useEffect(() => {
    if (!API_KEY) {
      console.error(
        "Błąd: Brak klucza API. Upewnij się, że .env.local jest poprawny i serwer został zrestartowany."
      );
      setRatesState({
        status: "error",
        data: null,
      });
      return;
    }

    setRatesState({
      status: "loading",
      data: null,
    });

    const fetchRates = async () => {
      try {
        const startTime = Date.now();
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Błąd HTTP: ${response.status}`);
        }

        const data = await response.json();
        const timeElapsed = Date.now() - startTime;
        const remainingDelay = LOADING_DELAY_MS - timeElapsed;

        if (remainingDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingDelay));
        }

        setRatesState({
          status: "success",
          data: data.data,
        });
      } catch (event) {
        console.error("Błąd podczas pobierania kursów:", event);

        setRatesState({
          status: "error",
          data: null,
        });
      }
    };

    fetchRates();
  }, []);

  return ratesState;
};
