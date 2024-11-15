import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { device } from "../../ThemeConfig";

const HistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;

  @media ${device.lg} {
    flex-direction: row;
    text-align: left;
  }
`;

const PrincipalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${device.lg} {
    display: block;
    text-align: left;
  }
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: 0px;

  @media ${device.lg} {
    max-width: 40%;
    margin-left: 10px;
  }
`;

const ContentText = styled.div`
  font-size: 18px; 
  line-height: 1.5; 
`;

export default function ScopeFestContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="Scope Film Festival">
        <HistoryContainer>
          <ContentText style={{ marginRight: "4px" }}>
           <p> The Scope Film Festival @ Ashoka University is a pioneering film festival being inaugurated in 2025.
            </p>
            <p>Sign up
                 <a href="https://unstop.com/p/spacehack-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728723">here</a>,
                put on your writer's cap, sit in your director's chair and memorize your lines, because Scope Film Festival is almost here!
          </p>
          </ContentText>
          <LogoImage alt="Vector Graphic" />
        </HistoryContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
