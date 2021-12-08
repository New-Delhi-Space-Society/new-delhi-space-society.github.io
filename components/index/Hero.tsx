import styled from "styled-components";
import { device, lightTheme } from "../../ThemeConfig";
import AppContainer from "../AppContainer";
import Button from "../Button";
import { KH1, KSubtitle } from "../Typography";
import { nssUrl } from "../../config";

const HeroContainer = styled.div`
  background: linear-gradient(
    to right,
    ${lightTheme.colors.primaryMain},
    ${lightTheme.colors.secondaryMain}
  );
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

function Hero() {
  return (
    <HeroContainer>
      <HeroContainerTwo>
        <div className="text">
          <KH1>New Delhi Space Society</KH1>
          <KSubtitle>
            A Chapter of the{" "}
            <a
              href={nssUrl}
              target="_blank"
              style={{ fontWeight: "bold", color: "#ffffff" }}
            >
              National Space Society
            </a>
          </KSubtitle>
          <Button buttonVariant="primary" buttonType="outlinedBG">
            Join Us
          </Button>
        </div>
        <img
          className="heroImage"
          src={require("../../public/Hero.png")}
          style={{ maxWidth: "100%", height: "auto" }}
          height={391}
          width={484}
        />
      </HeroContainerTwo>
    </HeroContainer>
  );
}

export default Hero;
