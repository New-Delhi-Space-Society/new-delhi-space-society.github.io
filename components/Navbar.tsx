import AppContainer from "./AppContainer";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../ThemeConfig";
import Button, { ButtonType, ButtonVariant } from "./Button";
import { KNavbarText } from "./Typography";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
`;

const NavLink = styled(KNavbarText)`
  margin: 18px;
  cursor: pointer;
  display: none;

  :hover {
    color: #333;
  }

  @media ${device.md} {
    display: inline-block;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Image src="/Logo.png" width={166} height={83} />
      <div className="navbar-links">
        {navLinks.map((item, index) => (
          <Link href={item.to} key={index}>
            <NavLink>{item.text}</NavLink>
          </Link>
        ))}
        <NavLink>
          <Button
            buttonVariant={ButtonVariant.Secondary}
            buttonType={ButtonType.Normal}
          >
            Join Us
          </Button>
        </NavLink>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </NavbarContainer>
  );
}
