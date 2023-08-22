import React from "react";
import styled from "styled-components";
import { lightTheme } from "../ThemeConfig";
import { KButtonText } from "./Typography";

export type ButtonType = "normal" | "outlined" | "text" | "outlinedBG";
export type ButtonVariant = "primary" | "secondary";

interface iButtonProps {
  buttonType: ButtonType;
  buttonVariant: ButtonVariant;
}

const StyledButton = styled.button<iButtonProps>`
  display: flex;
  width: 125px;
  height: 35px;
  padding: 4px 8px;
  background-color: #548bb2;
  border-radius: 20px;
  border: 0px solid var(--primary-main, #fff);
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: "Roboto Flex", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #3c6e8f;
  }
`;

const Button: React.FunctionComponent<
  iButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  return (
    <StyledButton {...props}>
      <KButtonText>{props.children}</KButtonText>
    </StyledButton>
  );
};

export default Button;
