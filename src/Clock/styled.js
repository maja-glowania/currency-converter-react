import styled from "styled-components";

export const ClockContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-family: monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fontDark};
  padding: 5px;
`;
