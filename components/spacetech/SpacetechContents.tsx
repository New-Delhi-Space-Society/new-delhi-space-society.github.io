import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { device } from "../../ThemeConfig";
import Slideshow from "../slideshow"; 

const HistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: flex-start; /* Change "center" to "flex-start" */
  text-align: left; /* Change "center" to "left" */

  @media ${device.lg} {
    flex-direction: row;
  }
`;

const PrincipalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start; /* Change "center" to "flex-start" */
  text-align: left; /* Change "center" to "left" */

  @media ${device.lg} {
    display: block;
  }
`;

export default function SpacetechContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="SpaceTech@Exun">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
            <p>
            Progress in technology means pushing the boundaries of what is possible, not only on earth, but also the final frontier — space. Just as biological systems undergo evolution when subjected to strenuous conditions which threaten their survival, computer systems and technology too evolve and become more sophisticated if subjected to extraordinary circumstances. And what is a more strenuous, more demanding environment than space? With this in mind, Exun Clan collaborates with the New Delhi Chapter of the prestigious National Space Society (USA) to give students the opportunity to explore the realms of space and its concurrence with technology. The event typically has multiple challenging rounds, building up to a final presentation round — with a twist!

            </p>
            
          </div>
          <Slideshow /> 
        </HistoryContainer>
      </SubHeadingContents>
      <SubHeadingContents title="What principles do we follow?">
        <PrincipalsContainer>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed eleifend elit, at sollicitudin tortor. Mauris a mauris felis. Sed congue ultrices nisi, eu dignissim turpis pellentesque quis. Ut id consectetur nulla, non rhoncus dui. Vivamus quis enim eget arcu scelerisque sodales.
            </p>
            <p>
              Fusce eu nisi nec nisl feugiat faucibus eget sit amet sapien. Vestibulum ullamcorper sem non neque consequat bibendum. Nulla bibendum, ex vel pharetra sagittis, neque odio varius tellus, vel accumsan nulla mauris et purus. Cras tincidunt felis nec mauris hendrerit, eu venenatis mi faucibus.
            </p>
          </div>
        </PrincipalsContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
