import styled from "styled-components";

export const FormContainer = styled.form`
  text-align: center;
  max-width: 600px;
  margin: auto;
  position: relative;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  border: 3px solid green;
  padding: 10px;
  background-color: hsl(120, 100%, 95%);
  position: relative;
  padding-top: 40px;
`;

export const Legend = styled.legend`
  border-radius: 30px;
  border: 3px solid white;
  color: white;
  background-color: green;
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
`;

export const Label = styled.label`
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
  border-radius: 30px;
  border: 3px solid white;
  color: white;
  background-color: hsl(120, 100%, 25%);
  padding: 15px;
  margin: 10px;
  font-weight: 700;
  font-size: 20px;
  transition: background-color 0.8s, transform 0.5s;

  &:hover {
    background-color: hsl(120, 100%, 15%);
  }
  &:active {
    transform: scale(0.95);
    background-color: hsl(120, 100%, 35%);
  }
`;

export const ImportantSpan = styled.span`
  font-weight: 700;
  color: red;
`;

export const Paragraph = styled.p``;
export const Div = styled.div``;
