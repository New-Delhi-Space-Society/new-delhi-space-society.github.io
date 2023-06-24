// components/index/Hero.tsx

import FeaturedStuffCard from "./FeaturedStuffCard";

const Hero = () {
  return (
    <HeroContainer>
      <HeroContainerTwo>
        <div className="text">
          <ColoredText>
            <KH1>New Delhi Space Society</KH1>
          </ColoredText>
          <KSubtitle>
            <ColoredText>
              An Award Winning Chapter of the{" "}
              <a
                href={nssUrl}
                target="_blank"
                style={{ fontWeight: "bold", color: "#ffffff" }}
              >
                National Space Society
              </a>
            </ColoredText>
          </KSubtitle>
          <JoinUsLink
            href="https://forms.gle/xwbRGFx9fGyASD5B9"
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer" }}
          >
            <Button buttonVariant="primary" buttonType="outlinedBG">
              Join Us
            </Button>
          </JoinUsLink>
        </div>
        <AwardsSection>
          <h2>Awards</h2>
          <FeaturedStuffCard />
        </AwardsSection>
      </HeroContainerTwo>
    </HeroContainer>
  );
}

export default Hero;

// components/FeaturedStuffCard.tsx

import styled from "styled-components";
import { KH1, KSubtitle } from "../Typography";

const FeaturedCard = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  margin-top: 16px;

  @media ${device.lg} {
    margin-top: 0;
    width: 40%;
  }
`;

const FeaturedTitle = styled(KH1)`
  margin-bottom: 8px;
`;

const FeaturedDescription = styled(KSubtitle)`
  margin-bottom: 16px;
`;

const FeaturedStuffCard = ({ children }) => {
  return (
    <FeaturedCard>
      <FeaturedTitle>Featured Stuff</FeaturedTitle>
      <FeaturedDescription>
        This card shows featured stuff, such as where the society is located and
        newspapers the website has been featured in.
      </FeaturedDescription>
      {children}
    </FeaturedCard>
  );
};

export default FeaturedStuffCard;