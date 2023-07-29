import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { device } from "../../ThemeConfig";

const HistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;

  @media ${device.lg} {
    flex-direction: row;
    text-align: left;
  }
`;

const PrincipalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${device.lg} {
    display: block;
    text-align: left;
  }
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: 0px;

  @media ${device.lg} {
    max-width: 40%;
    margin-left: 10px;
  }
`;

export default function SpacehackContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="SpaceHack@ESYA">
        <HistoryContainer>
          <div className="content" style={{ marginRight: "4px" }}>
          Progress in technology means pushing the boundaries of what is possible, not only on earth, but also the final frontier — space. Just as biological systems undergo evolution when subjected to strenuous conditions which threaten their survival, computer systems and technology too evolve and become more sophisticated if subjected to extraordinary circumstances. And what is a more strenuous, more demanding environment than space? With this in mind, Exun Clan collaborates with the New Delhi Chapter of the prestigious National Space Society (USA) to give students the opportunity to explore the realms of space and its concurrence with technology. The event typically has multiple challenging rounds, building up to a final presentation round — with a twist!
          
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sodales neque, in vehicula erat. Integer eleifend ut felis sed dapibus. Vestibulum non leo libero. Curabitur sed leo eleifend leo ullamcorper volutpat quis at nisl. Sed quis felis fringilla, malesuada massa eget, viverra sem. Etiam lacinia aliquet lorem eget condimentum. Sed in neque sed urna condimentum blandit. Vestibulum vitae finibus lacus. Sed eleifend diam turpis, non consectetur arcu suscipit sed. In dictum massa at magna vehicula, ac varius velit tempor.
          </div>
          <LogoImage src={"https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/placeholder.png"} alt="Vector Graphic" />
        </HistoryContainer>
      </SubHeadingContents>
      <SubHeadingContents title="What principals do we follow?">
        <PrincipalsContainer>
    
          <div className="content">
          Aenean sollicitudin pharetra dapibus. Aliquam erat volutpat. Praesent non enim augue. Cras porttitor aliquet nulla, nec mollis diam tempus ac. Mauris non pellentesque nibh, et mattis odio. Donec sit amet dui condimentum, sollicitudin quam sed, dignissim nisl. Cras est risus, varius id mauris quis, elementum varius metus. Maecenas sit amet justo ut tortor tristique hendrerit a id urna. Praesent consectetur, elit vitae lacinia condimentum, dui lectus semper turpis, ut luctus augue purus non lorem. Nam et nulla eu dolor lobortis hendrerit ac vel massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean turpis magna, blandit ut ex sit amet, vestibulum tempus orci.


            <br />
            <br />
            Aenean sollicitudin pharetra dapibus. Aliquam erat volutpat. Praesent non enim augue. Cras porttitor aliquet nulla, nec mollis diam tempus ac. Mauris non pellentesque nibh, et mattis odio. Donec sit amet dui condimentum, sollicitudin quam sed, dignissim nisl. Cras est risus, varius id mauris quis, elementum varius metus. Maecenas sit amet justo ut tortor tristique hendrerit a id urna. Praesent consectetur, elit vitae lacinia condimentum, dui lectus semper turpis, ut luctus augue purus non lorem. Nam et nulla eu dolor lobortis hendrerit ac vel massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean turpis magna, blandit ut ex sit amet, vestibulum tempus orci.


          </div>
        </PrincipalsContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
