import AppContainer from "./AppContainer";
import { KBody } from "./Typography";
import styled from "styled-components";
import { lightTheme } from "../ThemeConfig";

const FooterContainer = styled(AppContainer)`
  display: flex;
`;

const FooterItem = styled.a`
  margin: 0 8px;
  text-decoration: none;
  color: ${lightTheme.colors.text};
`;

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #eee",
        padding: "8px 0",
      }}
    >
      <FooterContainer>
        <KBody>
          <FooterItem
            href="https://www.facebook.com/NewDelhiSpaceSociety/"
            target="_blank"
          >
            Facebook
          </FooterItem>
        </KBody>
        ·
        <KBody>
          <FooterItem
            href="https://medium.com/@nssnewdelhispacesociety"
            target="_blank"
          >
            Medium
          </FooterItem>
        </KBody>
        ·
        <KBody>
          <FooterItem href="https://space.nss.org" target="_blank">
            National Space Society
          </FooterItem>
        </KBody>
      </FooterContainer>
    </footer>
  );
}
