import styled from "styled-components";
import { MemberData } from "../../pages/api/members";
import { device } from "../../ThemeConfig";
import { KH3, KSmall } from "../Typography";

interface iProps {
  member: MemberData;
}

const MemberCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 232.064px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;
  /* box-shadow: 0px 8px 24px 16px rgba(112, 144, 176, 0.1); */

  &:last-child {
    margin-bottom: 0;
  }
`;

const MemberImage = styled.img`
  width: 176.674px;
  height: 158.529px;
  flex-shrink: 0;
  border-radius: 16px;
  object-fit: cover;
  margin-bottom: 16px; /* add margin-bottom */
`;

const MemberName = styled(KH3)`
  text-align: center;
`;

const MemberCard: React.FunctionComponent<iProps> = ({ member }) => {
  return (
    <MemberCardContainer>
      <MemberImage
        src={`members/${member.image}`}
        alt={`${member.name} Image`}
      />
      <MemberName>{member.name}</MemberName>
      <KSmall style={{ color: "#333" }}>{member.role}</KSmall>
    </MemberCardContainer>
  );
};

export default MemberCard;
