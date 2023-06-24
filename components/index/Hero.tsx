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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;

  > div {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const NewspaperCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 200px;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
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
          <CardContainer>
            <NewspaperCard>The New York Times</NewspaperCard>
            <NewspaperCard>The Guardian</NewspaperCard>
            <NewspaperCard>The Times of India</NewspaperCard>
            {/* Add more NewspaperCard components with the names of other newspapers */}
          </CardContainer>
        </div>
      </HeroContainerTwo>
    </HeroContainer>
  );
}

export default Hero;
