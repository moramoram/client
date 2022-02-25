import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const textColor = {
  dark: {
    active: colors.gray25,
    default: colors.gray500,
  },
  light: {
    active: colors.gray900,
    default: colors.gray500,
  },
};

const textHoverColor = {
  dark: colors.gray400,
  light: colors.gray800,
};

const textWeight = {
  active: fontWeight.bold,
  default: fontWeight.regular,
};

const borderColor = {
  dark: {
    active: colors.gray25,
    default: "#00000000",
  },
  light: {
    active: colors.black,
    default: "#00000000",
  },
};

export const Text = styled.span`
  display: block;

  color: ${(props) => textColor[props.theme][props.status]};
  font-size: ${fontSize.p};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;
`;

export const Number = styled.span`
  display: block;

  color: ${colors.blue100};
  font-size: 0.8rem;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.25rem;

  height: 32px;
  width: 100px;
  border-bottom: 3px solid ${(props) => borderColor[props.theme][props.status]};

  cursor: pointer;
  transition: 0.1s;

  ${(props) =>
    props.status === "default" &&
    css`
      :hover {
        .menu {
          color: ${textHoverColor[props.theme]};
          transition: 0.3s;
        }
      }
    `}
`;
