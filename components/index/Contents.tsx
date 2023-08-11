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

  return (
    <AppContainer>
      <SubHeadingContents title="Features & Awards">
        <KBody>{introductionContent}</KBody>
      </SubHeadingContents>
      <SubHeadingContents title="Badges">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://cdn.dribbble.com/users/2570/screenshots/17518521/media/a15126d45bf6c62753d781dbb823e36b.png" alt="Badge 1" width="100" />
          <img src="https://cdn.dribbble.com/users/2570/screenshots/17518521/media/a15126d45bf6c62753d781dbb823e36b.png" alt="Badge 2" width="100" style={{ marginLeft: "20px" }} />
          <a href="https://www.hindustantimes.com/cities/delhi-news/asteroid-day-young-space-enthusiasts-shine-bright-in-delhi-s-skylight-101656603645351.html" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "20px" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Hindustan_Times_logo.svg" alt="Hindustan Times Logo" width="200" />
          </a>
        </div>
      </SubHeadingContents>
    </AppContainer>
  );
}
