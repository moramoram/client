import styled from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const bgColor = {
  default: "#00000000",
  active: "rgba(74, 131, 239, 0.1);",
};

const textColor = {
  dark: {
    default: {
      default: colors.gray25,
      active: colors.blue100,
    },
    transparent: {
      default: colors.gray25,
      active: colors.blue100,
    },
  },
  light: {
    default: {
      default: colors.gray900,
      active: colors.blue100,
    },
    transparent: {
      default: colors.gray25,
      active: colors.blue100,
    },
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
  align-items: center;

  height: 48px;
  padding-left: 8%;
  border-left: 4px solid ${(props) => borderColor[props.status]};

  background-color: ${(props) => bgColor[props.status]};

  transition: 0.1s;
  cursor: pointer;
`;

export const Text = styled.span`
  display: inline-block;

  color: ${(props) => textColor[props.theme][props.type][props.status]};
  font-size: ${fontSize.p};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;

  user-select: none;
  transition: 0.5s;
`;
