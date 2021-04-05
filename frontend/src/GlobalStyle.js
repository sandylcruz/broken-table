import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  section,
  article,
  h1,
  h2,
  p,
  strong,
  em,
  a {
    margin: 0;
    border: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
    font: inherit;
    text-decoration: inherit;
    text-align: inherit;
    color: inherit;
    background: transparent;
  }

  h1 {
    font-family: raleway;
    font-size: 40px;
    font-weight: bold;
    margin: 10px;
  }
`;

export default GlobalStyle;
