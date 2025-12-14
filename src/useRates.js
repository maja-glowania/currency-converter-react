import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;
const API_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=EUR`;

export const useRates = () => {
  const [ratesData, setRatesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!API_KEY) {
      console.error(
        "Błąd: Brak klucza API. Upewnij się, że .env.local jest poprawny i serwer został zrestartowany."
      );
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(false);

    const fetchRates = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Błąd HTTP: ${response.status}`);
        }

        const data = await response.json();
        setRatesData(data.data);
        setLoading(false);
      } catch (e) {
        console.error("Błąd podczas pobierania kursów:", e);
        setError(true);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return { ratesData, loading, error };
};
