import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { nssUrl } from "../../config";
import { KBody } from "../Typography";

export default function Contents() {
  return (
    <AppContainer>
      <SubHeadingContents title="Introduction">
        <KBody>
          With a goal of making advancements in space science and aerospace engineering, we are a group of space enthusiasts who formed the New Delhi Space Society, a chapter of the{" "}
          <a href={nssUrl} target="_blank" rel="noopener noreferrer">
            National Space Society
          </a>
          . We conduct research and explore the nuances of space, but we are not limited to that. We also engage in outreach programs, participate in competitions, and various other activities to achieve our goals and spread awareness about space. We are a growing group of aerospace aficionados and actively seek your support! Learn more in the About Us section and volunteer your efforts!
        </KBody>
      </SubHeadingContents>
      <SubHeadingContents title="Awards">
        <KBody>
          The New Delhi Space Society has been awarded the following:
          <ul>
            <li>Best New Chapter Award (2019)</li>
            <li>Honorable Mention Award (2022)</li>
          </ul>
        </KBody>
      </SubHeadingContents>
      <SubHeadingContents title="Newspaper Features">
        <KBody>New Delhi Space Society has been featured in newspapers like Hindustan Times.</KBody>
      </SubHeadingContents>
    </AppContainer>
  );
}
