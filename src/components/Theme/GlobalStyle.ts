import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { ThemeType } from "./AppTheme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    width: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    margin: 0; 
    height: 100%;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.bg.light};
    color: ${props => props.theme.text.dark};
    line-height: 1.3;
    font-family: ${props => props.theme.font.body};
    font-size: ${props => props.theme.fontSize.base};
    ${({ theme }) =>
      theme.phablet`font-size: ${(props: any) => props.theme.fontSize.lg};`}

    &.dark-mode {
      background: ${props => props.theme.bg.dark};
      color: ${props => props.theme.text.light};
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 0;
  }

  @font-face {
    font-family: 'Caveat';
    font-style: normal;
    font-weight: 400;
    src: local('Caveat Regular'), local('Caveat-Regular'),
        url('../fonts/caveat-v7-latin-regular.woff2') format('woff2'),
        url('../fonts/caveat-v7-latin-regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Caveat';
    font-style: normal;
    font-weight: 700;
    src: local('Caveat Bold'), local('Caveat-Bold'),
        url('../fonts/caveat-v7-latin-700.woff2') format('woff2'),
        url('../fonts/caveat-v7-latin-700.woff') format('woff');
  }

  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('../fonts/fira-code-v9-latin-500.woff2') format('woff2'),
        url('../fonts/fira-code-v9-latin-500.woff') format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'),
        url('../fonts/lato-v16-latin-regular.woff2') format('woff2'),
        url('../fonts/lato-v16-latin-regular.woff') format('woff');
  }
`;

export default GlobalStyle;
