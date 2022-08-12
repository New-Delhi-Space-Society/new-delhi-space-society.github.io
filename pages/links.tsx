import { useEffect, useState } from "react";
import styled from "styled-components";
import { KH3 } from "../components/Typography";
import { lightTheme } from "../ThemeConfig";

interface ILinks {
  Name: string;
  URL: string;
}

export default function Links() {
  const [links, setLinks] = useState<ILinks[]>([]);
  useEffect(() => {
    console.log(
      `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Linktree%20Links?maxRecords=10&view=Grid%20view`
    );
    const fetchAllLinks = async () => {
      const res = await (
        await fetch(
          `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Linktree%20Links?maxRecords=10&view=Grid%20view`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            },
          }
        )
      ).json();
      console.log(res);
      setLinks(
        res.records.map(
          (link: {
            id: string;
            createdTime: string;
            fields: { Name: string; URL: string };
          }) => link.fields
        )
      );
    };

    try {
      fetchAllLinks();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const MainWrapper = styled.main`
    min-height: calc(100vh - 150px);
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  `;

  const Link = styled.a`
    display: block;
    margin: 20px 10px;
    padding: 20px;
    text-align: center;
    width: 100%;
    border: 2px solid ${lightTheme.colors.secondaryMain};
    transition: background 0.3s ease, color 0.3s ease;
    color: #444;
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &:active {
      background: ${lightTheme.colors.secondaryMain};
      color: white;
    }
  `;

  const Logo = styled.img`
    display: block;
    margin: 12px auto;
    width: 70%;
    height: auto;
  `;

  return (
    <MainWrapper>
      <a href="//newdelhi.nss.org">
        <Logo src="/badge.png" alt="Logo" />
      </a>
      <div style={{ flex: 1 }}>
        {links.length > 0 &&
          links.map((link) => (
            <Link href={link.URL} target="_blank" rel="noreferrer">
              <KH3>{link.Name}</KH3>
            </Link>
          ))}
      </div>
    </MainWrapper>
  );
}
