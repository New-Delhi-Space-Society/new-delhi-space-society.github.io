import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import { nssUrl } from "../../config";

export default function Contents() {
  return (
    <AppContainer>
      <SubHeadingContents title="Introduction" style={{ fontFamily: "Roboto Flex" }}>
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
      <SubHeadingContents title="Awards" style={{ fontFamily: "Roboto Flex" }}>
        The New Delhi Space Society has been awarded with the following:
        <ul>
          <li>Best New Chapter Award (2019)</li>
          <li>Honourable Mention Award (2022)</li>
        </ul>
      </SubHeadingContents>
      <SubHeadingContents title="Newspaper Features" style={{ fontFamily: "Roboto Flex" }}>
        <div>
          New Delhi Space Society has been featured in Newspapers like Hindustan Times.
        </div>
      </SubHeadingContents>
      <SubHeadingContents title="SpaceTech" style={{ fontFamily: "Roboto Flex" }}>
        Progress in technology means pushing the boundaries of what ispossible, and space technology is no exception. At New Delhi Space Society, we actively research and develop space technology projects to contribute to the advancement of space science and aerospace engineering. We believe that technology can play a crucial role in making space exploration more accessible and sustainable. Our projects include:
        <ul>
          <li>Design and development of CubeSats</li>
          <li>Development of a hybrid rocket engine</li>
          <li>Design and development of a high-altitude balloon</li>
        </ul>
        These projects are carried out by our team of dedicated and passionate members who work together to achieve our goals. If you're interested in joining us and contributing to our projects, please check out the 'Join Us' section and fill out the form.
      </SubHeadingContents>
      <SubHeadingContents title="Outreach Programs" style={{ fontFamily: "Roboto Flex" }}>
        At New Delhi Space Society, we believe in the importance of spreading awareness about space and space technology. To achieve this, we conduct various outreach programs aimed at engaging and educating people about space. Our outreach programs include:
        <ul>
          <li>Space Science Workshops for School Students</li>
          <li>Public Talks and Presentations on Space Science and Space Technology</li>
          <li>Participation in Science Festivals and Exhibitions</li>
        </ul>
        We believe that through our outreach programs, we can inspire the next generation of space enthusiasts and contribute to the growth of the space industry. If you're interested in partnering with us for an outreach program, please fill out the form in the 'Contact Us' section.
      </SubHeadingContents>
      <SubHeadingContents title="Join Us" style={{ fontFamily: "Roboto Flex" }}>
        If you're interested in space science and aerospace engineering, and want to be a part of a community of like-minded individuals, we would love to have you on board! We are always looking for new members to join our team and contribute to our projects and outreach programs. To join us, please fill out the form in the 'Join Us' section and we'll get back to you as soon as possible.
      </SubHeadingContents>
      <SubHeadingContents title="Contact Us" style={{ fontFamily: "Roboto Flex" }}>
        If you have any queries or would like to get in touch with us for an outreach program or partnership, please fill out the form below and we'll get back to you as soon as possible.
      </SubHeadingContents>
    </AppContainer>
  );
}
