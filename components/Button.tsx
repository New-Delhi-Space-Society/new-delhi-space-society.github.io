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
  background-color: ${(props) =>
    props.buttonType === "normal"
      ? props.buttonVariant === "primary"
        ? lightTheme.colors.primaryMain
        : lightTheme.colors.secondaryMain
      : props.buttonType == "outlinedBG" && "#ffffff"};
  border: ${(props) =>
    props.buttonType != "normal"
      ? "1px solid" +
        (props.buttonVariant === "primary"
          ? lightTheme.colors.primaryMain
          : lightTheme.colors.secondaryMain)
      : 0};
  color: ${(props) =>
    props.buttonType === "outlinedBG"
      ? props.buttonVariant === "primary"
        ? lightTheme.colors.primaryMain
        : lightTheme.colors.secondaryMain
      : lightTheme.colors.body};
  padding: 8px 16px;
  border-radius: 4px;
`;

const Button: React.FunctionComponent<
  iButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <StyledButton {...props}>
      <KButtonText>{props.children}</KButtonText>
    </StyledButton>
  );
};

export default Button;
