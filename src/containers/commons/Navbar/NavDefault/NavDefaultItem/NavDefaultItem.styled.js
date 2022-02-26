import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const textColor = {
  dark: {
    default: colors.gray25,
    transparent: colors.gray25,
  },
  light: {
    default: colors.gray900,
    transparent: colors.gray25,
  },
};

const textHoverColor = {
  dark: {
    default: colors.gray300,
    transparent: colors.gray300,
  },
  light: {
    default: colors.gray500,
    transparent: colors.gray300,
  },
};

const textWeight = {
  active: fontWeight.bold,
  default: fontWeight.regular,
};

const borderColor = {
  active: colors.blue100,
  default: "#00000000",
};

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64px;
  width: 105px;
  border-bottom: 3px solid ${(props) => borderColor[props.status]};

  transition: 0.1s;
  cursor: pointer;

  ${(props) =>
    props.status === "default" &&
    css`
      :hover {
        span {
          color: ${textHoverColor[props.theme][props.type]};
          transition: 0.3s;
        }
      }
    `}
`;

export const Text = styled.span`
  display: inline-block;
  padding-top: 0.2rem;

  color: ${(props) => textColor[props.theme][props.type]};
  font-size: ${fontSize.md};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;

  transition: 0.5s;
  user-select: none;
`;
