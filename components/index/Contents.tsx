import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";

export default function Contents() {
  return (
    <AppContainer>
      <SubHeadingContents title="Introduction">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ultricies
        purus ullamcorper amet habitant et mauris facilisi. Habitant egestas
        amet malesuada iaculis duis eleifend maecenas. Et, in arcu semper
        pulvinar urna cursus sapien. Nullam facilisi venenatis blandit accumsan
        consectetur. Lectus blandit tortor molestie tortor. Et ultrices
        fringilla aliquam eget iaculis suscipit. Ut ipsum interdum leo turpis
        imperdiet fames feugiat eu. Adipiscing libero dapibus.
      </SubHeadingContents>
      <SubHeadingContents title="SpaceTech">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ultricies
        purus ullamcorper amet habitant et mauris facilisi.
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src="https://via.placeholder.com/940x500"
          alt="Placeholder Slideshow"
        />
      </SubHeadingContents>
    </AppContainer>
  );
}
