import styled from "styled-components";
import { colors } from "@/_shared";

const iconColor = {
  light: {
    primary: colors.blue100,
    secondary: colors.gray300,
  },
  dark: {
    primary: colors.blue100,
    secondary: colors.gray500,
  },
};

export const Svg = styled.svg`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  vertical-align: middle;

  path {
    stroke-width: ${(props) => iconColor[props.theme][props.mode]};
    fill: ${(props) => iconColor[props.theme][props.mode]};
  }
`;
