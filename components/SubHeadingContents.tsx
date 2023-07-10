import { KH2, KBody, lightTheme } from "./Typography";

interface SubHeadingContentsProps {
  title: string;
}

const SubHeadingContents: React.FC<SubHeadingContentsProps> = ({ title, children }) => {
  return (
    <div className="content">
      <KH2 style={{ margin: "32px 0 8px 0", color: lightTheme.colors.secondaryMain }}>
        {title}
      </KH2>
      <KBody>{children}</KBody>
    </div>
  );
};

export default SubHeadingContents;
