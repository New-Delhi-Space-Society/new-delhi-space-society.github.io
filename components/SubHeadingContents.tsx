import { KContentHeadings } from "./Typography";

interface iSubHeadingContentsProps {
  title: string;
}

const SubHeadingContents: React.FunctionComponent<iSubHeadingContentsProps> = ({
  title,
  children,
}) => {
  return (
    <div className="content">
      <KContentHeadings style={{ margin: "32px 0 8px 0" }}>
        {title}
      </KContentHeadings>
      {children}
    </div>
  );
};

export default SubHeadingContents;
