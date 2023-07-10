import { KBody } from "./Typography";

interface SubHeadingContentsProps {
  title: string;
}

const SubHeadingContents: React.FC<SubHeadingContentsProps> = ({ title, children }) => {
  return (
    <div className="content">
      <KBody style={{ margin: "32px 0 8px 0" }}>{title}</KBody>
      {children}
    </div>
  );
};

export default SubHeadingContents;
