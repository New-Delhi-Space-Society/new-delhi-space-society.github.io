import { KBody } from "./Typography";

const SubHeadingContents: React.FunctionComponent<iSubHeadingContentsProps> = ({
  title,
  children,
}) => {
  return (
    <div className="content">
      <KBody style={{ margin: "32px 0 8px 0" }}>{title}</KBody>
      {children}
    </div>
  );
};
