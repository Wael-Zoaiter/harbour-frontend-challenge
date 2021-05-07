import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`
  body {
    font-family: 'Apercu Pro';
    background-color: ${({ theme }) => theme.colors['white']};
    color: ${({ theme }) => theme.colors['text']};
  }
`;

export default GlobalStyle;
