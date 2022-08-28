import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`