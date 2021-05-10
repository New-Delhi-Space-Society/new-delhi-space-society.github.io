import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      body: string;
      text: string;
      primaryMain: string;
      primaryHover: string;
      secondaryMain: string;
      secondaryHover: string;
    };
    font: string;
  }
}
