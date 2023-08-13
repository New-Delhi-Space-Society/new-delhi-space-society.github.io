import React from "react";
import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { device } from "../../ThemeConfig";
import ImageGrid from "../imagegrid"; 

const HistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;,
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
`;

const imageUrls = [
  "https://media.discordapp.net/attachments/1120484062553976943/1134490158884991118/AIL4fc84zNlhYmx4YDDxV-LFjvi1BpAR616kTToJSuHq2GEkEoWG4yctuK4D-9nUikU5WtX_EuzA_Q-3GeDDq6u-WUz0YEX5kQ1j5JLs1hoB16wYyaFMBn6V8sZNCKr5l5H5b4S0muwD5KbamWIJ14EKGc1Lgww1024-h683-s-no.png?width=993&height=662",
  "https://media.discordapp.net/attachments/1120484062553976943/1134490159296024618/AIL4fc9BdDiogKZGKqHzdaZukPoTfveZq773f3zWkfDV6ELC8juCp4Zr-hHeK2OuG1wlLtG_O1wU9z0pEiBbo_4Hs5_5_wJOC48ohuzAXFKNfd6TqOzcbcA9rdVYJ0oFwnjo3I6Z7A4NhM6YrA07k5-PlJ9OJgw1024-h683-s-no.png?width=993&height=662",
  "https://media.discordapp.net/attachments/1120484062553976943/1134490159702884432/73135809_10158350680794381_2081255991030054912_o.jpg?width=993&height=662",
  "https://media.discordapp.net/attachments/1120484062553976943/1134490159962919005/74350725_10158350679144381_6989133073132552192_o.jpg?width=993&height=662"
];

const SpacetechContents: React.FC = () => {
  return (
    <AppContainer>
      <SubHeadingContents title="SpaceTech@Exun">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
            <p>
              Progress in technology means pushing the boundaries of what is possible, not only on earth, but also the final frontier — space. Just as biological systems undergo evolution when subjected to strenuous conditions which threaten their survival, computer systems and technology too evolve and become more sophisticated if subjected to extraordinary circumstances. And what is a more strenuous, more demanding environment than space? With this in mind, Exun Clan collaborates with the New Delhi Chapter of the prestigious National Space Society (USA) to give students the opportunity to explore the realms of space and its concurrence with technology. The event typically has multiple challenging rounds, building up to a final presentation round — with a twist!
            </p>
            <p>
              Fusce eu nisi nec nisl feugiat faucibus eget sit amet sapien. Vestibulum ullamcorper sem non neque consequat bibendum. Nulla bibendum, ex vel pharetra sagittis, neque odio varius tellus, vel accumsan nulla mauris et purus. Cras tincidunt felis nec mauris hendrerit, eu venenatis mi faucibus.
            </p>
          </div>
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
          <ImageGrid images={imageUrls} />
        </PrincipalsContainer>
      </SubHeadingContents>
    </AppContainer>
  );
};

export default SpacetechContents;
