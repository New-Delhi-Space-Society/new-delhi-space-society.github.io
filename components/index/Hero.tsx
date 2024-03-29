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
  align-items: flex-start; /* Align items to the left */
  text-align: left; /* Align text to the left */

  @media ${device.lg} {
    flex-direction: row;
  }

  * {
    margin: 8px 0;
  }
`;

const ColoredText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 8px;
  display: inline-block;
  text-align: left; /* Ensure the text inside this component is left-aligned */
`;

const JoinUsLink = styled.a`
  display: flex;
  justify-content: flex-start; /* Align the button to the left */
  text-decoration: none;
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
        </div>
      </HeroContainerTwo>
    </HeroContainer>
  );
}

export default Hero;
