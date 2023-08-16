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

export default function SpacehackContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="SpaceHack@ESYA">
        <HistoryContainer>
          <ContentText style={{ marginRight: "4px" }}>
            SpaceHack@ESYA 2023 is a fast-paced aerospace-focused startup pitch competition, that puts you into the suits of the heads of startups, competing to develop your product, bring it to market, and grow the company as if the sky is not the limit.

            Will your crew reach the stars, burn up in the atmosphere, and go out with a boom as all your skills are tested, including innovation, design, marketing, and pitching? 
            
            <p>Sign up at <a href="https://unstop.com/p/spacehack-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728723">Unstop</a>, don your suits, check all safety systems, and prepare for lift-off on the 25th of August 2023 at IIIT Delhi!
          </p>
          </ContentText>
          <LogoImage src={"https://media.discordapp.net/attachments/1120484062553976943/1141337384252866640/SpaceHack1.png?width=662&height=662"} alt="Vector Graphic" />
        </HistoryContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
