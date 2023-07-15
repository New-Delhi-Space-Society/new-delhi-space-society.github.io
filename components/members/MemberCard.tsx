import styled from "styled-components";
import { MemberData } from "../../pages/api/members";
import { device } from "../../ThemeConfig";
import { KH3, KSmall } from "../Typography";
import Layout from "../Layout";

interface iProps {
  members: MemberData[];
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
  background: #fff;
  box-shadow: 0px 8px 24px 16px rgba(112, 144, 176, 0.1);
  margin-bottom: 32px; /* add vertical spacing */
`;

const MemberImage = styled.img`
  width: 176.674px;
  height: 158.529px;
  flex-shrink: 0;
  border-radius: 16px;
  object-fit: cover;
`;

const MemberName = styled(KH3)`
  margin-bottom: 8px; /* add bottom spacing */
`;

const MemberRole = styled(KSmall)`
  color: #333;
`;

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 16px; /* add vertical and horizontal gap */
`;

const MemberCard: React.FunctionComponent<iProps> = ({ member }) => {
  return (
    <MemberCardContainer>
      <MemberImage src={`members/${member.image}`} alt={`${member.name} Image`} />
      <MemberName>{member.name}</MemberName>
      <MemberRole>{member.role}</MemberRole>
    </MemberCardContainer>
  );
};

const MembersPage: React.FunctionComponent<iProps> = ({ members }) => {
  return (
    <Layout>
      <MembersContainer>
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </MembersContainer>
    </Layout>
  );
};

export default MembersPage;
