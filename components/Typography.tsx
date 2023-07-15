import styled from "styled-components";
import { lightTheme } from "../ThemeConfig";

export const KH1 = styled.h1`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -4.5%;
  line-height: 100%;
  font-family: "Poppins", sans-serif;
`;

export const KH2 = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.04px;
  color: #464D65;
`;

export const KH3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -2%;
  font-family: "Poppins", sans-serif;
`;

export const KSubtitle = styled.p`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
`;

export const KBody = styled.p`
  font-size: 16px;
  line-height: 140%;
  font-family: "Roboto Flex", sans-serif;
`;

export const KStrong = styled.strong`
  font-size: 16px;
`;

export const KSmall = styled.small`
  font-size: 14px;
`;

export const KPretitle = styled.p`
  font-size: 10px;
  letter-spacing: 3%;
`;

export const KButtonText = styled.span`
  font-size: 16px;
  letter-spacing: 3%;
  text-transform: uppercase;

  &::after {
    content: none;
  }
`;

export const KNavbarText = styled.p`
  font-size: 18px;
  line-height: 140%;
`;

export const KContentHeadings = styled(KH2)`
  color: ${lightTheme.colors.secondaryMain};
`;
