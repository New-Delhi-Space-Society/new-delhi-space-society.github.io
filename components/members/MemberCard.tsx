import styled from "styled-components";
import { MemberData } from "../../pages/api/members";
import { device } from "../../ThemeConfig";
import { KH3, KSmall } from "../Typography";

interface iProps {
  member: MemberData;
}

const MemberCardContainer = styled.div`
  text-align: center;
  box-shadow: 0px 8px 24px 16px rgba(112, 144, 176, 0.1);
  border-radius: 0;
  width: 232.064px;
  height: 334.262px;
  flex-shrink: 0;
  background-color: #FFF;
`;

const MemberImage = styled.img`
  width: 232.064px;
  height: 166px;
`;

const MemberCard: React.FunctionComponent<iProps> = ({ member }) => {
  return (
    <MemberCardContainer>
      <MemberImage src={`members/${member.image}`} alt="" />
      <KH3>{member.name}</KH3>
      <KSmall style={{ color: "#333" }}>{member.role}</KSmall>
    </MemberCardContainer>
  );
};

export default MemberCard;

