import { KH2, KBody } from "./Typography";

interface SubHeadingContentsProps {
  title: string;
}

const SubHeadingContents: React.FC<SubHeadingContentsProps> = ({ title, children }) => {
  return (
    <div className="content">
      <KH2 style={{ margin: "32px 0 8px 0" }}>{title}</KH2>
      <KBody>{children}</KBody>
    </div>
  );
};

export default SubHeadingContents;
