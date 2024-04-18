import React from "react";
import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { device } from "../../ThemeConfig";
import YoutubeVideo from "../youtubevideo"

const HistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: flex-start;
  text-align: left;

  @media ${device.lg} {
    flex-direction: row;
  }
`;

const PrincipalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 32px;

  @media ${device.lg} {
    display: block;
  }

  .content {
    margin-bottom: 50px;
  }
`;

const FirstImageGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 16px;

  img {
    height: 200px;
  }
`;

const SecondImageGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 16px;

  img {
    height: 350px;
  }
`;

const firstRowImages = [
  "Image 1.jpeg",
  "Image 2.jpeg",
  "Image 3.jpeg",
  "Image 4.jpeg",
  "Image 5.jpeg",
  // Add more images as needed
];

const secondRowImages = [
  
];

const SpacetechContents: React.FC = () => {
  return (
    <AppContainer>
      <SubHeadingContents title="SpaceTech@Exun">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
            <p>
              Progress in technology means pushing the boundaries of what is
              possible, not only on earth, but also the final frontier — space.
              Just as biological systems undergo evolution when subjected to
              strenuous conditions which threaten their survival, computer
              systems and technology too evolve and become more sophisticated if
              subjected to extraordinary circumstances. And what is a more
              strenuous, more demanding environment than space? With this in
              mind, Exun Clan collaborates with theNew Delhi Chapter of the
              prestigious National Space Society (USA) to give students the
              opportunity to explore the realms of space and its concurrence
              with technology. The event typically has multiple challenging
              rounds, building up to a final presentation round — with a twist!
            </p>
          </div>
        </HistoryContainer>
      </SubHeadingContents>
      <SubHeadingContents title="Past Competitions (2018-2022)">
      <YoutubeVideo videoId="zIuD__0Hu9k" />
        <PrincipalsContainer>
          <div className="content"></div>
          <FirstImageGridContainer>
            {firstRowImages.map((image, index) => (
              <img key={index} src={require(`../../public/${image}`} alt={`Image ${index + 1}`} />
            ))}
          </FirstImageGridContainer>
          <p>‎‎‎‎</p>
          <p>‎‎‎‎</p>
          <SecondImageGridContainer>
            {secondRowImages.map((image, index) => (
              <img key={index} src={require(`../../public/${image}`} alt={`Image ${index + 6}`} />
            ))}
          </SecondImageGridContainer>
        </PrincipalsContainer>
      </SubHeadingContents>
    </AppContainer>
  );
};

export default SpacetechContents;
