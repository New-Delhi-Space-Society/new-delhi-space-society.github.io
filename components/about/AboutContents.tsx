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
  align-items: center;
  text-align: center;

  @media ${device.lg} {
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

const SmallImage = styled.img`
  max-width: 30%;
  height: auto;
  float: left;
`;

export default function AboutContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="History">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
            {/* Your history content goes here */}
          </div>
          <LogoImage src={"logo-1.png"} alt="Vector Graphic" />
        </HistoryContainer>
      </SubHeadingContents>
      <SubHeadingContents title="What principles do we follow?">
        <PrincipalsContainer>
          <div className="content">
            {/* Your principles content goes here */}
          </div>
          <SmallImage
            src={"https://media.discordapp.net/attachments/1120484062553976943/1135181450380058675/JWST-Carina-Nebula-Crop-FI.png?width=1160&height=662"}
            alt="Vector Graphic"
          />
        </PrincipalsContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
