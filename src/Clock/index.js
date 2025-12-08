import useCurrentDate from "../useCurrentDate";
import { ClockContainer } from "./styled.js";

const Clock = () => {
  const formattedTime = useCurrentDate();

  return <ClockContainer>Dzisiaj jest {formattedTime}</ClockContainer>;
};

export default Clock;
