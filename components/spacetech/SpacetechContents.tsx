import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { device } from "../../ThemeConfig";
import Slideshow from "../slideshow.ts"; // Import the Slideshow component

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

export default function SpacetechContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="What is Spacetech?">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
            {/* Your content for "What is Spacetech?" */}
          </div>
          <Slideshow /> {/* Place the Slideshow component here */}
        </HistoryContainer>
      </SubHeadingContents>
      <SubHeadingContents title="What principals do we follow?">
        <PrincipalsContainer>
          <div className="content">
            {/* Your content for "What principals do we follow?" */}
          </div>
        </PrincipalsContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
