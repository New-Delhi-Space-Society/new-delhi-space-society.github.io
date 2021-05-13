import styled from "styled-components";
import { MembersData } from "../../pages/api/members";
import { device } from "../../ThemeConfig";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import MemberCard from "./MemberCard";

interface iProps {
  members: MembersData;
}

const MembersDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  justify-content: space-evenly;

  display: grid;
  grid-template-columns: auto;

  @media ${device.lg} {
    grid-template-columns: auto auto auto;
  }
`;

const MembersContent: React.FunctionComponent<iProps> = ({ members }) => {
  return (
    <AppContainer>
      {members &&
        members.map((type, index) => (
          <SubHeadingContents title={type.type} key={index}>
            <MembersDiv>
              {type.members.map((member, index) => (
                <MemberCard member={member} key={index} />
              ))}
            </MembersDiv>
          </SubHeadingContents>
        ))}
    </AppContainer>
  );
};

export default MembersContent;
