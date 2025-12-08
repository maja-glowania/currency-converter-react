import { useState, useEffect } from "react";

const formatCurrentDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  return date.toLocaleString("pl-PL", options);
};

const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const refreshClock = () => {
      setDate(new Date());
    };

    const timerId = setInterval(refreshClock, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  return formatCurrentDate(date);
};

export default useCurrentDate;
