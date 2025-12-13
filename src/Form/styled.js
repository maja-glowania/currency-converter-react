import styled, { css } from "styled-components";

const mobileBreakpoint = ({ theme }) => theme.breakpoints.mobile;

const mobileFieldsetStyles = css`
  flex-direction: column;
  padding: 10px;
`;

export const FormContainer = styled.form`
  text-align: center;
  max-width: 600px;
  margin: auto;
  position: relative;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-around;

  border-radius: ${({ theme }) => theme.borderRadius};
  border: 3px solid ${({ theme }) => theme.colors.primaryGreen};
  background-color: ${({ theme }) => theme.colors.backgroundLightGreen};

  padding: 20px;
  position: relative;
  padding-top: 40px;

  @media (max-width: ${mobileBreakpoint}) {
    ${mobileFieldsetStyles}
  }
`;

export const Legend = styled.legend`
  border-radius: 30px;
  border: 3px solid ${({ theme }) => theme.colors.fontLight};
  color: ${({ theme }) => theme.colors.fontLight};
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  width: 100%;
  font-weight: 700;
  max-width: 200px;
  display: inline-block;
  padding: 10px;
`;

export const InputField = styled.input`
  width: 100%;
  max-width: 200px;
  margin-top: 10px;
  padding: 10px;
`;

export const SubmitButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  border-radius: 30px;
  border: 3px solid ${({ theme }) => theme.colors.fontLight};
  color: ${({ theme }) => theme.colors.fontLight};
  background-color: ${({ theme }) => theme.colors.buttonBase};
  padding: 15px;
  margin: 10px;
  font-weight: 700;
  font-size: 20px;
  transition: background-color 0.8s, transform 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
  &:active {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.colors.buttonActive};
  }
`;

export const ImportantSpan = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.errorRed};
`;

export const Paragraph = styled.p``;
export const Div = styled.div``;
