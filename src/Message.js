import styled from "styled-components";

export const Message = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin: 50px auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  background-color: ${({ $isError }) => ($isError ? "white" : "transparent")};
  border: 4px solid
    ${({ $isError, theme }) =>
      $isError ? theme.colors.errorRed : theme.colors.successGreen};

  color: ${({ $isError, theme }) =>
    $isError ? theme.colors.errorRed : theme.colors.fontDark};
`;
