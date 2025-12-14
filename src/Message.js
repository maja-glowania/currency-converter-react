import styled from "styled-components";

export const Message = styled.p`
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin: 50px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 2px solid
    ${({ $isError, theme }) =>
      $isError ? theme.colors.errorRed : theme.colors.successGreen};
  color: ${({ $isError, theme }) =>
    $isError ? theme.colors.errorRed : theme.colors.fontDark};
`;
