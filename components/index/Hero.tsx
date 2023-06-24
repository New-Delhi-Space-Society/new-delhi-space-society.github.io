import styled from "styled-components";
import { device, lightTheme } from "../../ThemeConfig";
import AppContainer from "../AppContainer";
import Button from "../Button";
import { KH1, KSubtitle } from "../Typography";
import { nssUrl } from "../../config";

const HeroContainer = styled.div`
  background-image: url('bannerpic.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const HeroContainerTwo = styled(AppContainer)`
  color: #ffffff;
  padding: 24px;
  margin-bottom: 8px;
  height: 100%;

  flex-direction: column-reverse;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  text-align: center;

  @media ${device.lg} {
    flex-direction: row;
    text-align: left;
  }

  * {
    margin: 8px 0;
  }
`;

const ColoredText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 8px;
  display: inline-block;
`;

const JoinUsLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

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

function Hero() {
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
          <FeaturedCard>
            <FeaturedTitle>Featured Stuff</FeaturedTitle>
            <FeaturedDescription>
              This is a card for showing featured stuff. You can put anything
              you want in here, such as upcoming events, new articles, or
              interesting links.
            </FeaturedDescription>
          </FeaturedCard>
        </div>
      </HeroContainerTwo>
    </HeroContainer>
  );
}

export default Hero;
