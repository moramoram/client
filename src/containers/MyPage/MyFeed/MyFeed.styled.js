import styled from "styled-components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
`;

export const Title = styled.h1`
  line-height: ${lineHeight.h2};
  margin: 0 0 0.5rem 0;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.p`
  margin: 0 0 3rem 0;

  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const FetchBox = styled.div`
  height: 30px;
`;
