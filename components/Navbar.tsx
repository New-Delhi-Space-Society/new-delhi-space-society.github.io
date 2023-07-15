import AppContainer from "./AppContainer";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../ThemeConfig";
import { KNavbarText } from "./Typography";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface NavbarLink {
  to: string;
  text: string;
}

const navLinks: NavbarLink[] = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/spacetech",
    text: "SpaceTech",
  },
  {
    to: "/members",
    text: "Members",
  },
  {
    to: "/contact",
    text: "Contact Us",
  },
  {
    to: "https://forms.gle/xwbRGFx9fGyASD5B9",
    text: "Join Us",
  }
];

const NavbarContainer = styled(AppContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  .hamburger {
    display: block;
    width: 14px;
    cursor: pointer;
  }

  @media ${device.md} {
    .hamburger {
      display: none;
    }
  }
`;

const NavLink = styled(KNavbarText)`
  margin: 18px;
  cursor: pointer;
  display: none;
  color: var(--primary-main, #1C1436);
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 550;
  line-height: 140%;

  &:hover {
    color: #333;
  }

  @media ${device.md} {
    display: block;
  }
`;

const MobileNavbarLinkDiv = styled.div`
  border-top: 1px solid #eee;
  padding: 8px;

  :hover {
    background-color: #eee;
  }
`;

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <NavbarContainer>
        <Link href="/">
          <img
            style={{ cursor: "pointer" }}
            src="badge.png"
            width={117}
            height={83}
          />
        </Link>
        <div
          className="navbar-links"
          style={{ display: "flex", alignItems: "center" }}
        >
          {navLinks.map((item, index) => (
            <Link href={item.to} key={index}>
              {item.to.startsWith("http") ? (
                <a target="_blank" rel="noreferrer">
                  <NavLink>{item.text}</NavLink>
                </a>
              ) : (
                <NavLink>{item.text}</NavLink>
              )}
            </Link>
          ))}
          <div onClick={() => setMenuOpen(!isMenuOpen)} className="hamburger">
            <FontAwesomeIcon icon={faBars} size="xs" />
          </div>
        </div>
      </NavbarContainer>
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: 99,
            backgroundColor: "#fff",
            width: "100%",
          }}
        >
          {navLinks.map((item, index) => (
            <MobileNavbarLinkDiv key={index}>
              <Link href={item.to}>
                {item.to.startsWith("http") ? (
                  <a target="_blank" rel="noreferrer">
                    <KNavbarText>{item.text}</KNavbarText>
                  </a>
                ) : (
                  <KNavbarText>{item.text}</KNavbarText>
                )}
              </Link>
            </MobileNavbarLinkDiv>
          ))}
        </div>
      )}
    </nav>
  );
}
