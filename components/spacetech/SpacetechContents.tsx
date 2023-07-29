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
      <SubHeadingContents title="What is Spacetech?">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed eleifend elit, at sollicitudin tortor. Mauris a mauris felis. Sed congue ultrices nisi, eu dignissim turpis pellentesque quis. Ut id consectetur nulla, non rhoncus dui. Vivamus quis enim eget arcu scelerisque sodales.
            </p>
            <p>
              Fusce eu nisi nec nisl feugiat faucibus eget sit amet sapien. Vestibulum ullamcorper sem non neque consequat bibendum. Nulla bibendum, ex vel pharetra sagittis, neque odio varius tellus, vel accumsan nulla mauris et purus. Cras tincidunt felis nec mauris hendrerit, eu venenatis mi faucibus.
            </p>
          </div>
          <Slideshow /> 
        </HistoryContainer>
      </SubHeadingContents>
      <SubHeadingContents title="What principals do we follow?">
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
