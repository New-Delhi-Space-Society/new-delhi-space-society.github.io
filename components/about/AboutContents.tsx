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

export default function AboutContents() {
  return (
    <AppContainer>
      <SubHeadingContents title="History">
        <HistoryContainer>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
            ultrices et elit lectus. At facilisi et pulvinar est, duis nunc
            dictum. Orci, elit nunc, vel, pellentesque turpis risus in dolor.
            Volutpat turpis suspendisse accumsan velit. Senectus vel feugiat at
            vitae commodo eu scelerisque enim laoreet. Amet mi urna fermentum
            ullamcorper sollicitudin.
            <br />
            <br />A fringilla nulla libero viverra. Ullamcorper aliquam varius
            magna posuere. Vel blandit sed purus proin eros, netus morbi euismod
            et. Nisi eu sed fames hac tortor. Libero placerat a pellentesque
            nunc arcu, suspendisse nibh nisl. Mattis aliquet nunc vel sed
            sollicitudin gravida sem a. Dolor risus faucibus varius risus
            sollicitudin id senectus. Diam integer id enim cursus cum iaculis.
          </div>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={require("../../public/vector-graphic-history.png")}
            alt="Vector Graphic"
          />
        </HistoryContainer>
      </SubHeadingContents>
      <SubHeadingContents title="What do we do?">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ultrices
          et elit lectus. At facilisi et pulvinar est, duis nunc dictum. Orci,
          elit nunc, vel, pellentesque turpis risus in dolor. Volutpat turpis
          suspendisse accumsan velit. Senectus vel feugiat at vitae commodo eu
          scelerisque enim laoreet. Amet mi urna fermentum ullamcorper
          sollicitudin.
          <br />
          <br />A fringilla nulla libero viverra. Ullamcorper aliquam varius
          magna posuere. Vel blandit sed purus proin eros, netus morbi euismod
          et. Nisi eu sed fames hac tortor. Libero placerat a pellentesque nunc
          arcu, suspendisse nibh nisl. Mattis aliquet nunc vel sed sollicitudin
          gravida sem a. Dolor risus faucibus varius risus sollicitudin id
          senectus. Diam integer id enim cursus cum iaculis.
        </div>
      </SubHeadingContents>
    </AppContainer>
  );
}
