import { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";

interface IColors {
  body: string;
  text: string;
  primaryMain: string;
  primaryHover: string;
  bannercolor: string;
  bannercolor2: string;
  secondaryMain: string;
  secondaryHover: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColors;
    font: string;
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    body: "#ffffff",
    text: "#000000",
    primaryMain: "#1C1436",
    primaryHover: "#2C2055",
    bannercolor: "#081a26",
    bannercolor2: "#5b4257",
    secondaryMain: "#6E55C0",
    secondaryHover: "#6951B8",
  },
  font: "'Poppins', Helvetica, Trebuchet MS, Verdana",
};

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    font-size: 16px;
    min-height: 100vh;
    position: relative;
  }
`;

const size = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  doublexl: "1536px",
};

export const device = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  doublexl: `(min-width: ${size.doublexl})`,
};