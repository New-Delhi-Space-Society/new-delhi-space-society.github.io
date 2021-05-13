import styled from "styled-components";
import { MemberData } from "../../pages/api/members";
import { device } from "../../ThemeConfig";
import { KH3, KSmall } from "../Typography";

interface iProps {
  member: MemberData;
}

const MemberCardContainer = styled.div`
  text-align: center;
  box-shadow: 0px 8px 24px 16px rgba(112, 144, 176, 0.2);
  border-radius: 44px;
  width: 300px;
  position: relative;
  height: 200px;
  padding: 95px;
  margin-bottom: 100px;
  margin-top: 100px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.lg} {
    margin-bottom: 0;
  }
`;

const MemberImage = styled.img`
  width: 166px;
  height: 166px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
`;

const MemberCard: React.FunctionComponent<iProps> = ({ member }) => {
  return (
    <MemberCardContainer>
      <MemberImage
        src={require(`../../public/members/${member.image}`)}
        alt=""
      />
      <KH3>{member.name}</KH3>
      <KSmall style={{ color: "#333" }}>{member.role}</KSmall>
    </MemberCardContainer>
  );
};

export default MemberCard;
