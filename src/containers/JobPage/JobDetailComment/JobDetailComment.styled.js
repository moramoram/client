import styled from "styled-components";
import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const borderColor = {
  dark: colors.gray700,
  light: colors.gray200,
};

export const Layout = styled.section``;

export const BoxTitle = styled.h2`
  min-height: ${lineHeight.h3};
  padding: 4rem 0 0.2rem 0;
  margin: 0;

  border-top: 1px solid ${(props) => borderColor[props.theme]};
  color: ${(props) => titleColor[props.theme]};

  font-size: ${fontSize.h3};
  line-height: ${lineHeight.h3};
  font-weight: ${fontWeight.bold};
`;

export const BoxDescription = styled.p`
  padding-bottom: 2rem;
  margin: 0;

  color: ${(props) => subtitleColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
`;
