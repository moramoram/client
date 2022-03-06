import styled from "styled-components";
import { colors } from "@/_shared";

const symbolColors = {
  dark: {
    default: colors.blue100,
    transparent: colors.blue100,
  },
  blue: {
    default: colors.white,
    transparent: colors.blue100,
  },
  light: {
    default: colors.blue100,
    transparent: colors.blue100,
  },
};

const wordColors = {
  dark: {
    default: colors.gray25,
    transparent: colors.gray25,
  },
  blue: {
    default: colors.white,
    transparent: colors.gray25,
  },
  light: {
    default: colors.gray900,
    transparent: colors.gray25,
  },
};

export const Svg = styled.svg`
  display: block;
`;

export const Symbol = styled.path`
  fill: ${(props) => symbolColors[props.theme][props.type]};
`;

export const Wordmark = styled.path`
  fill: ${(props) => wordColors[props.theme][props.type]};
`;
