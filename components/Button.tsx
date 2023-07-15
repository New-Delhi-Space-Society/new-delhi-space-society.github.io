import React, { FunctionComponent } from "react";
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
  background-color: ${props =>
    props.buttonType === "normal"
      ? props.buttonVariant === "primary"
        ? lightTheme.colors.primaryMain
        : lightTheme.colors.secondaryMain
      : props.buttonType === "outlinedBG"
      ? "#ffffff"
      : "transparent"};
  border-radius: 20px;
  border: ${props =>
    props.buttonType === "normal"
      ? 0
      : `1px solid ${
          props.buttonVariant === "primary"
            ? lightTheme.colors.primaryMain
            : lightTheme.colors.secondaryMain
        }`};
  color: ${props =>
    props.buttonType === "text"
      ? lightTheme.colors.body
      : props.buttonType === "outlinedBG"
      ? props.buttonVariant === "primary"
        ? lightTheme.colors.primaryMain
        : lightTheme.colors.secondaryMain
      : "#fff"};
  box-shadow: ${props =>
    props.buttonType === "normal"
      ? "none"
      : "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"};
  font-family: "Roboto Flex", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.buttonType === "normal"
        ? props.buttonVariant === "primary"
          ? lightTheme.colors.primaryDark
          : lightTheme.colors.secondaryDark
        : props.buttonType === "outlined" && "rgba(255, 255, 255, 0.2)"};
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
