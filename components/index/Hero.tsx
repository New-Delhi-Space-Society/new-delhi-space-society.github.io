import styled from "styled-components";
import { device, lightTheme } from "../../ThemeConfig";
import AppContainer from "../AppContainer";
import Button from "../Button";
import { KH1, KSubtitle } from "../Typography";
import { nssUrl } from "../../config";

const HeroContainer = styled.div`
  background-image: url('https://media.discordapp.net/attachments/1122211991549911181/1128570659048538112/ndss_banner_1.png?width=1440&height=373');
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
  justify-content: center;
  align-items: flex-start;

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }

  * {
    margin: 8px 0;
  }

  .text {
    font-family: Poppins;
    text-align: left;
    align-self: start;
  }
`;

const ColoredText = styled.div`
  display: inline-block;
`;

const Title = styled(KH1)`
`;

const Tagline = styled(KSubtitle)`
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroContainerTwo>
        <div className="text">
          <ColoredText>
            <Title style={{ fontFamily: "Poppins" }}>New Delhi Space Society</Title>
          </ColoredText>
          <Tagline>
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
          </Tagline>
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
