import { FunctionComponent } from "react";
import styled from "styled-components";
import { lightTheme } from "../ThemeConfig";
import { KButtonText } from "./Typography";

export enum ButtonType {
  Normal = "normal",
  Outlined = "outlined",
  Text = "text",
  OutlinedBG = "outlinedBG",
}

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

interface iButtonProps {
  buttonType: ButtonType;
  buttonVariant: ButtonVariant;
}

const StyledButton = styled.button<iButtonProps>`
  background-color: ${(props) =>
    props.buttonType === ButtonType.Normal
      ? props.buttonVariant === ButtonVariant.Primary
        ? lightTheme.colors.primaryMain
        : lightTheme.colors.secondaryMain
      : props.buttonType == ButtonType.OutlinedBG && "#ffffff"};
  border: ${(props) =>
    props.buttonType != ButtonType.Normal
      ? "1px solid" +
        (props.buttonVariant === ButtonVariant.Primary
          ? lightTheme.colors.primaryMain
          : lightTheme.colors.secondaryMain)
      : 0};
  color: ${(props) =>
    props.buttonType === ButtonType.OutlinedBG
      ? props.buttonVariant === ButtonVariant.Primary
        ? lightTheme.colors.primaryMain
        : lightTheme.colors.secondaryMain
      : lightTheme.colors.body};
  padding: 8px 16px;
  border-radius: 4px;
`;

const Button: React.FunctionComponent<iButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      <KButtonText>{props.children}</KButtonText>
    </StyledButton>
  );
};

export default Button;
