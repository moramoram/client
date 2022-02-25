import styled from "styled-components";
import { colors, shadows } from "@/_shared";

const bgColor = {
  light: colors.white,
  dark: colors.gray800,
};

const bgHoverColor = {
  light: colors.gray50,
  dark: colors.gray700,
};

const borderColor = {
  light: colors.gray200,
  dark: colors.gray800,
};

const iconColor = {
  light: colors.gray600,
  dark: colors.gray200,
};

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 50%;

  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${shadows.base};
  cursor: pointer;

  :hover {
    background-color: ${(props) => bgHoverColor[props.theme]};
  }

  svg {
    stroke: ${(props) => iconColor[props.theme]};
  }
`;
