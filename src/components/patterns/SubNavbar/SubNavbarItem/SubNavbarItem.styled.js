import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const textColor = {
  light: {
    default: colors.gray500,
    active: colors.gray900,
  },
  dark: {
    default: colors.gray500,
    active: colors.gray25,
  },
};

const textHoverColor = {
  light: colors.gray700,
  dark: colors.gray300,
};

const textWeight = {
  default: fontWeight.regular,
  active: fontWeight.bold,
};

const background = {
  light: {
    default: "#00000000",
    active: colors.gray50,
  },
  dark: {
    default: "#00000000",
    active: colors.gray700,
  },
};

export const Layout = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;

  height: 42px;
  padding: 0 20px;
  border-radius: 8px;
  list-style: none;
  background: ${(props) => background[props.theme][props.status]};

  color: ${(props) => textColor[props.theme][props.status]};
  font-size: ${fontSize.p};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;
  white-space: nowrap;

  user-select: none;
  transition: 0.3s;

  svg {
    height: 16px;
    width: 16px;
    margin-right: 6px;
    margin-bottom: -2px;
    vertical-align: top;
  }

  ${(props) =>
    props.status === "default" &&
    css`
      cursor: pointer;
      :hover {
        color: ${textHoverColor[props.theme]};
        transition: 0.3s;
      }
    `}
`;
