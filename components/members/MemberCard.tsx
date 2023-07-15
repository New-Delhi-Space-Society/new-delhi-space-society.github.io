import styled from "styled-components";
import { MemberData } from "../../pages/api/members";

interface iProps {
  member: MemberData;
}

const MemberCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 232.064px;
  height: 334.262px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #FFF;
  box-shadow: 0px 8px 24px 16px rgba(112, 144, 176, 0.1);

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
`;

const MemberCard: React.FunctionComponent<iProps> = ({ member }) => {
  return (
    <MemberCardContainer>
      <MemberImage src={`members/${member.image}`} alt={`${member.name} Image`} />
      <KH3>{member.name}</KH3>
      <KSmall style={{ color: "#333" }}>{member.role}</KSmall>
    </MemberCardContainer>
  );
};

export default MemberCard;
