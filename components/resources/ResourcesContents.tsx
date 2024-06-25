import React, { useEffect } from "react";
import styled from "styled-components";
import AppContainer from "../AppContainer";
import SubHeadingContents from "../SubHeadingContents";
import Papa from "papaparse";
import { KH3 } from "../Typography";
import Markdown from "markdown-to-jsx";

const ResourcesContainer = styled.div`
  .content {
    ul {
      li {
        display: list-item;
        list-style-type: disc;
      }
    }
  }
`;

export default function ResourcesContents() {
  const [data, setData] = React.useState<
    {
      Heading: string;
      Text: string;
    }[]
  >([]);
  useEffect(() => {
    localStorage.getItem("CACHED_RESOURCES") &&
      setData(JSON.parse(localStorage.getItem("CACHED_RESOURCES")!));
    Papa.parse(process.env.NEXT_PUBLIC_RESOURCES_SHEET, {
      download: true,
      header: true,
      complete: (results) => {
        setData(
          results.data as {
            Heading: string;
            Text: string;
          }[],
        );
        localStorage.setItem(
          "CACHED_RESOURCES",
          JSON.stringify(
            results.data as {
              Heading: string;
              Text: string;
            }[],
          ),
        );
      },
    });
  }, []);

  return (
    <AppContainer>
      <SubHeadingContents title="Resources">
        <ResourcesContainer>
          {data.map((item, index) => (
            <div className="content" key={index}>
              <KH3 style={{ margin: "32px 0 8px 0", color: "#464D65" }}>
                {item.Heading}
              </KH3>
              <Markdown options={{ wrapper: "article" }}>{item.Text}</Markdown>
            </div>
          ))}
        </ResourcesContainer>
      </SubHeadingContents>
    </AppContainer>
  );
}
