import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";

export default function Contents() {
  return (
    <AppContainer>
      <SubHeadingContents title="Introduction">
        With a goal of making advancement in space science and aerospace
        engineering, we are a group of space enthusiasts who formed the New
        Delhi Space Society, a chapter of{" "}
        <a href="http://space.nss.org" target="_blank">
          National Space Society
        </a>
        . We conduct research and explore the nuances in space, but we are not
        limited to that, we also do outreach programs, hold and take part in
        competitions and various other activities to reach our goal and spread
        awareness about space. We are a growing group of aerospace aficionados
        and are actively looking for your support! Learn more in the ‘About Us’
        section and volunteer your efforts!
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
