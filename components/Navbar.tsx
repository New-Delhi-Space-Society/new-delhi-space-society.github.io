import AppContainer from "./AppContainer";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../ThemeConfig";
import Button from "./Button";
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
    to: "/members",
    text: "Members",
  },
  {
    to: "/contact",
    text: "Contact Us",
  },
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
              <NavLink>{item.text}</NavLink>
            </Link>
          ))}
          <NavLink>
            <a
              href="https://forms.gle/xwbRGFx9fGyASD5B9"
              target="_blank"
              rel="noreferrer"
              style={{ cursor: "pointer" }}
            >
              <Button buttonVariant="secondary" buttonType="normal">
                Join Us
              </Button>
            </a>
          </NavLink>
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
            <MobileNavbarLinkDiv>
              <Link href={item.to} key={index}>
                <KNavbarText>{item.text}</KNavbarText>
              </Link>
            </MobileNavbarLinkDiv>
          ))}
          <MobileNavbarLinkDiv>
            <Button buttonVariant="secondary" buttonType="normal">
              Join Us
            </Button>
          </MobileNavbarLinkDiv>
        </div>
      )}
    </nav>
  );
}
