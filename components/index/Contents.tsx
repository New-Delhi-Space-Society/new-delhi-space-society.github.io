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
      <SubHeadingContents title="SpaceTech">
        <KBody>
          Progress in technology means pushing the boundaries of what is possible, not only on Earth but also in the final frontier — space. Just as biological systems undergo evolution when subjected to strenuous conditions that threaten their survival, computer systems and technology also evolve and become more sophisticated when subjected to extraordinary circumstances. And what is a more strenuous and demanding environment than space? With this in mind, Exun Clan collaborates with the New Delhi Chapter of the prestigious National Space Society (USA) to give students the opportunity to explore the realms of space and its concurrence with technology. The event typically has multiple challenging rounds, building up to a final presentation round — with a twist!
        </KBody>
      </SubHeadingContents>
    </AppContainer>
  );
}
