import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { nssUrl } from "../../config";

export default function Contents() {
  return (
    <AppContainer>
    <SubHeadingContents title="Introduction">
        With a goal of making advancement in space science and aerospace
        engineering, we are a group of space enthusiasts who formed the New
        Delhi Space Society, a chapter of{" "}
        <a href={nssUrl} target="_blank">
          National Space Society
        </a>
        . We conduct research and explore the nuances in space, but we are not
        limited to that, we also do outreach programs, hold and take part in
        competitions and various other activities to reach our goal and spread
        awareness about space. We are a growing group of aerospace aficionados
        and are actively looking for your support! Learn more in the `About Us`
        section and volunteer your efforts!
    </SubHeadingContents>
      <SubHeadingContents title="Awards">
        The New Delhi Space Society has been awarded with the following:
        <ul>
          <li>Best New Chapter Award (2019)</li>
          <li>Honourable Mention Award (2022)</li>
        </ul>
      </SubHeadingContents>
      <SubHeadingContents title="Newspaper Features">
        <div>
          New Delhi Space Society has been featured in Newspapers like Hindustan Times.
        </div>
      </SubHeadingContents>
      <SubHeadingContents title="SpaceTech">
        Progress in technology means pushing the boundaries of what is possible,
        not only on earth, but also the final frontier — space. Just as
        biological systems undergo evolution when subjected to strenuous
        conditions which threaten their survival, computer systems and
        technology too evolve and become more sophisticated if subjected to
        extraordinary circumstances. And what is a more strenuous, more
        demanding environment than space? With this in mind, Exun Clan
        collaborates with the New Delhi Chapter of the prestigious National
        Space Society (USA) to give students the opportunity to explore the
        realms of space and its concurrence with technology. The event typically
        has multiple challenging rounds, building up to a final presentation
        round — with a twist!
      </SubHeadingContents>
    </AppContainer>
  );
}
