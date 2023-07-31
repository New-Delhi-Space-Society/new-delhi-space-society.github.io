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

export default function AboutContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="History">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
            The New Delhi Space Society is a non-profit organization and
            functions as a chapter of the National Space Society. It was founded
            in 2018, seeing the level of enthusiasm in New Delhi students about
            space exploration and a lack of resources for this enthusiasm. We
            aim to make Space an accessible resource for everyone.
            <br />
            <br />
            We intend to do so by utilizing our outreach programs and by
            inculcating awareness about various space-related mysteries and
            information. This shall pique the curiosity of many-a-students and
            make the vastness of space more valuable in everyone’s eyes. We
            share the same mission as the NSS, that is, “to promote social,
            economic, technological, and political change in order to expand
            civilization beyond Earth, to settle space and to use the resulting
            resources to build a hopeful and prosperous future for humanity.”
          </div>
          <LogoImage src={"logo-1.png"} alt="Vector Graphic" />
        </HistoryContainer>
      </SubHeadingContents>
      <SubHeadingContents title="What principles do we follow?">
        <PrincipalsContainer>
          <img
            style={{ maxWidth: "50%", height: "auto", float: "right" }} // Adjust the 'maxWidth' value to make it smaller
            src={"https://media.discordapp.net/attachments/1120484062553976943/1135181450380058675/JWST-Carina-Nebula-Crop-FI.png?width=1160&height=662"}
            alt="Vector Graphic"
          />
          <div className="content">
            Our motive is to spread awareness about the possibilities of space
            science and aerospace engineering. We believe that together, we can
            bring about a difference in society as well as the future of our
            species through space science. We also strive to act as a bridge
            between the scientific breakthroughs that take place in the field of
            aerospace and space science, as well as research about scientific
            mysteries ourselves.
            <br />
            <br />
            We believe in the Latin phrase “Ad Astra”, as it is our hope that
            one day humans can successfully work their way through space,
            navigating and inhabiting stars as well as accomplishing
            breakthroughs that were once merely dreams.
          </div>
        </PrincipalsContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
