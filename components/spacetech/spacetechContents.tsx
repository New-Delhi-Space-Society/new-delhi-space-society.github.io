import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { device } from "../../ThemeConfig";

const spacetechContainer = styled.div`
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


const SpaceTechPage = ({ children }) => (
  <AppContainer>
    <spacetechContainer>
      {children}
    </spacetechContainer>
  </AppContainer>
);

export default SpaceTechPage;

export default function spacetechContents() {
  return (
    <SubHeadingContents title="SpaceTech">
      <div className="content" style={{ marginRight: "4px" }}>
        The Exunclan SpaceTech event is a student-led initiative that
            aims to promote space science and technology among high school
            students. The event is organized by Exunclan, a student
            organization at Delhi Public School R.K. Puram.
            <br />
            <br />
            The first SpaceTech event was held in 2019, and it has been
            held every year since then. The event is open to students from all
            over India, and it has attracted participants from a variety of
            schools and backgrounds.
            <br />
            <br />
            The SpaceTech event consists of a variety of challenges,
            including coding challenges, problem-solving challenges, and
            design challenges. The challenges are designed to test the
            participants' knowledge of space science and technology, as well as
            their problem-solving and design skills.
            <br />
            <br />
            The SpaceTech event is a great opportunity for students to learn
            about space science and technology, and to compete against other
            students from around the country. The event is also a great
            opportunity for students to network with other students who are
            interested in space science and technology.
        </div>
      </SubHeadingContents>
  );
}
