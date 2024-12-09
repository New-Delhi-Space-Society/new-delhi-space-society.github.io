import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { device } from "../../ThemeConfig";
import { KH3 } from "../Typography";

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

const ContentText = styled.div`
  font-size: 18px; 
  line-height: 1.5; 
`;

export default function ScopeFestContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="India's First-Ever Space Film Festival!">
        <br />
        <HistoryContainer>
          <div className='content' style={{ marginRight: "4px" }}>
           New Delhi Space Society in collaboration with Navrang, the film society of 
             Ashoka University presents Scope a chance 
             for passionate filmmakers or creatives to step beyond the school/university level 
             and unleash their creativity through new channels. We aim to be a medium of 
             exploration and curiosity for students across India. What better way to do that than 
             to marry the science and philosophy of space, the extraterrestrial, the beyond with 
             the art of filmmaking. We invite you to embark on a cinematic journey to explore and 
             articulate an emotion that defies definition—an inexplicable feeling sparked by the 
             vastness of the universe and its infinite stories.
            </div>
            </HistoryContainer>
            </SubHeadingContents>
            <br />
            <SubHeadingContents title= {"Prompt - Look up at the stars."}>
            <HistoryContainer>
            <div className='content'>
            <a href="https://docs.google.com/document/d/1uHwhs8vaXc0KbkAFmJO8j6_FZ0f_eBMzUmYAzyO_bTs/edit?usp=sharing">
            Read the full prompt</a>, don your suits, check all safety systems, and prepare for 
            lift-off on the 10th of December 2024!
            This film festival offers a unique experience 
            with its theme. From fables like our ancestors watching over us as stars up above to 
            scientific discoveries like Galileo’s telescope, we believe that since the dawn of 
            time, humans have been looking up at the stars to find the answers for life down here. 
            We look up at the stars and it gives us a tingly feeling in our stomach and a sinking 
            feeling in our hearts. It’s this inexplicable feeling that we’re trying to reach with 
            Scope Film Festival this year. 
            <br />
            <br />
            Imagine a freedom fighter during India’s Independence movement, gazing at the stars 
              and envisioning a liberated future. Picture someone far from home, seeking solace in 
              the thought that their loved ones share the same night sky. Or consider an 
              individual lost in wonder, seeing not just stars but hope, connection, and the 
              echoes of humanity. This is the essence we challenge you to convey. Tell a story. 
              Evoke a feeling. Illuminate the cosmos within us all.
              </div>
              <LogoImage src="ScopeFilmFestival.png" />
        </HistoryContainer>
        </SubHeadingContents>
    </AppContainer>
  );
}
