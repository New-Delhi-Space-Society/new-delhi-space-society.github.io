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
  "https://cdn.discordapp.com/attachments/1215658349840965634/1222689321035890831/WhatsApp_Image_2024-03-13_at_01.51.34.jpeg?ex=6617212a&is=6604ac2a&hm=d34272018a0b4a9b092b0140b95a5bb1cc0a21ee2be91bf454a703e7a7e20cfa&",
  "https://cdn.discordapp.com/attachments/1215658349840965634/1222689321291878440/WhatsApp_Image_2024-03-13_at_01.51.34_1.jpeg?ex=6617212a&is=6604ac2a&hm=1b1e71c437a318e3d53ca693964c0ca6cb592ccf4042040eb61efd9de3fb7651&",
  "https://cdn.discordapp.com/attachments/1215658349840965634/1222689321736343663/WhatsApp_Image_2024-03-13_at_01.51.33.jpeg?ex=6617212a&is=6604ac2a&hm=d9ea5a8293a17b0c4c3091f99aa501443f6d1c47a5f6d97af0758384a156c6c9&",
  "https://cdn.discordapp.com/attachments/1215658349840965634/1222689322029940866/WhatsApp_Image_2024-03-13_at_01.51.33_1.jpeg?ex=6617212a&is=6604ac2a&hm=7e27db34c11034a08a591fc926efdaa1153edf50e1055f910b74572edccb94ef&",
  "https://cdn.discordapp.com/attachments/1215658349840965634/1222689322294317146/WhatsApp_Image_2024-03-13_at_01.47.40.jpeg?ex=6617212a&is=6604ac2a&hm=3972c151b3048910ce4c3f1ebdd96c3ae5f68735fa7b048da808e784a7b8a324&",
];

// const secondRowImages = [
//   "https://media.discordapp.net/attachments/1140692334653214913/1140693385678684270/Screenshot_2023-08-14_at_4.20.14_PM.png?width=581&height=662",
//   "https://media.discordapp.net/attachments/1140692334653214913/1140693386123300874/Screenshot_2023-08-14_at_5.12.33_PM.png?width=466&height=662",
//   "https://cdn.discordapp.com/attachments/1140692334653214913/1140693490372710602/Copy_of_ASTROSAT_2_AISG46_-_Aditya_Shankar.png",
//   "https://cdn.discordapp.com/attachments/1140692334653214913/1140693490766987415/Screenshot_2023-08-14_at_5.11.31_PM.png",
//   "https://media.discordapp.net/attachments/1140692334653214913/1140752611226693662/Copy_of_Neospace_CORE_DPSDW_Team_One_Spacetech_Finals_-_Partha_Khurana_page-0001_1.jpg?width=468&height=662",
// ];

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
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </FirstImageGridContainer>
          <p>‎‎‎‎</p>
          <p>‎‎‎‎</p>
          <SecondImageGridContainer>
            {secondRowImages.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 6}`} />
            ))}
          </SecondImageGridContainer>
        </PrincipalsContainer>
      </SubHeadingContents>
    </AppContainer>
  );
};

export default SpacetechContents;
