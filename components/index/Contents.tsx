import React from "react";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { nssUrl } from "../../config";
import { KBody } from "../Typography";

export default function Contents() {
  const introductionContent = (
    <>
      With the aim of advancing space science and aerospace engineering, we are a passionate group of space enthusiasts who founded the New Delhi Space Society, a distinguished chapter of the{" "}
      <a href={nssUrl} target="_blank" rel="noopener noreferrer">
        National Space Society
      </a>
      . Our mission is to conduct cutting-edge research and explore the wonders of space. However, our pursuits go beyond research; we actively engage in outreach programs, participate in competitions, and host various activities to fulfill our objectives and promote space awareness. As our group of aerospace aficionados continues to grow, we warmly welcome your support! Discover more about us in the About Us section and join us in our journey of exploration and discovery!
    </>
  );

  const awardsContent = (
    <>
      The New Delhi Space Society has been recognized with prestigious awards:
      <ul>
        <li>Best New Chapter Award (2019)</li>
        <li>Honorable Mention Award (2022)</li>
      </ul>
      Additionally, our society has garnered media attention and was featured in reputable newspapers such as Hindustan Times.
    </>
  );

  return (
    <AppContainer>
      <SubHeadingContents title="Introduction">
        <KBody>{introductionContent}</KBody>
      </SubHeadingContents>
      <SubHeadingContents title="Features & Awards">
        <KBody>{awardsContent}</KBody>
      </SubHeadingContents>
    </AppContainer>
  );
}
