import { createGlobalStyle, css } from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL || "";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    ${({ theme }) => css`
      font-family: ${theme.fontFamilies.primary};
      background-image: url("${PUBLIC_URL}/assets/money-image.jpg");
      background-size: 300px;
      max-width: 1000px;
      margin: auto;
      padding: 50px;
    `}
  }
`;

export default GlobalStyle;
