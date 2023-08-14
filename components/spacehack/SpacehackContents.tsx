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

export default function SpacehackContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="SpaceHack@ESYA">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
          Progress in technology means pushing the boundaries of what is possible, not only on earth, but also the final frontier — space. Just as biological systems undergo evolution when subjected to strenuous conditions which threaten their survival, computer systems and technology too evolve and become more sophisticated if subjected to extraordinary circumstances. And what is a more strenuous, more demanding environment than space? With this in mind, Exun Clan collaborates with the New Delhi Chapter of the prestigious National Space Society (USA) to give students the opportunity to explore the realms of space and its concurrence with technology. The event typically has multiple challenging rounds, building up to a final presentation round — with a twist!

          SpaceHack@ESYA 2023 is a fast-paced aerospace-focused startup pitch competition, that puts you into the suits of the heads of startups, competing to develop your product, bring it to market, and grow the company as if the sky is not the limit.

Will your crew reach the stars, burn up in the atmosphere, and go out with a boom as all your skills are tested, including innovation, design, marketing, and pitching? Sign up at <a href="https://unstop.com/p/spacehack-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728723"> Unstop </a>, don your suits, check all safety systems, and prepare for lift-off on the 25th of August 2023 at IIIT Delhi!
          
            <br />
            <br />
          </div>
          <LogoImage src={"https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/placeholder.png"} alt="Vector Graphic" />
        </HistoryContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
