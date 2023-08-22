import React from "react";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { nssUrl } from "../../config";
import { KBody } from "../Typography";
import styled from "styled-components";

const FeaturedDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export default function Contents() {
  const introductionContent = (
    <>
      With the aim of advancing space science and engineering and taking
      humanity to the stars, we are a passionate group of space enthusiasts at
      the New Delhi Space Society, a distinguished award-winning chapter of the{" "}
      <a href={nssUrl} target="_blank" rel="noopener noreferrer">
        National Space Society
      </a>
      . Our mission is to make space, its resources, and its opportunities
      accessible to all. We conduct outreach programs through various mediums,
      participate in space events at a global stage and lend our voices to the
      conversation, and host activities to fulfill our objectives and promote
      space awareness. As our organization continues to grow, we warmly welcome
      your support! Discover more about us in the About Us section and join us
      in our journey of exploration and discovery. We hope to see you with us
      among the stars 🚀 .
    </>
  );

  return (
    <AppContainer>
      <SubHeadingContents title="Introduction">
        <KBody>{introductionContent}</KBody>
      </SubHeadingContents>
      <SubHeadingContents title="Features & Awards">
        <FeaturedDiv>
          <img
            src="https://media.discordapp.net/attachments/1120484062553976943/1143495199461490780/hm2.png?width=530&height=662"
            alt="Badge 1"
            width="150"
          />
          <img
            src="https://media.discordapp.net/attachments/1120484062553976943/1143495199696359507/newchapter2.png?width=530&height=662"
            alt="Badge 2"
            width="150"
          />
          <a
            href="https://www.hindustantimes.com/cities/delhi-news/asteroid-day-young-space-enthusiasts-shine-bright-in-delhi-s-skylight-101656603645351.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Hindustan_Times_logo.svg"
              alt="Hindustan Times Logo"
              style={{
                maxWidth: "300px",
                width: "100%",
              }}
            />
          </a>
        </FeaturedDiv>
      </SubHeadingContents>
    </AppContainer>
  );
}
