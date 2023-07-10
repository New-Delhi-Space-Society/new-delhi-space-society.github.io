import styled from "styled-components";
import { device, lightTheme } from "../../ThemeConfig";
import AppContainer from "../AppContainer";
import Button from "../Button";
import { KH1, KSubtitle } from "../Typography";
import { nssUrl } from "../../config";

const HeroContainer = styled.div`
  background-image: url('https://media.discordapp.net/attachments/1122211991549911181/1128019513384910908/WhatsApp_Image_2023-07-09_at_00.35.20.jpeg?width=1440&height=375');
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

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  text-align: left;

  @media ${device.lg} {
    flex-direction: row;
    text-align: left;
  }

  * {
    margin: 8px 0;
  }

  .text {
    font-family: Poppins;
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

function Hero() {
  return (
    <HeroContainer>
      <HeroContainerTwo>
        <div className="text">
          <ColoredText>
            <KH1 style={{fontFamily: "Poppins"}}>New Delhi Space Society</KH1>
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
