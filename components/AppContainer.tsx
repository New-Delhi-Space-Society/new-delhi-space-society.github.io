import styled from "styled-components";
import { device } from "../ThemeConfig";

const AppContainer = styled.main`
  margin: 0 auto;
  padding: 8px;
  @media ${device.sm} {
    max-width: 100%;
  }
  @media ${device.md} {
    max-width: 900px;
  }
  @media ${device.lg} {
    max-width: 1400px;
  }
`;

export default AppContainer;
