import styled from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 400px;
  background: ${colors.blueOpacity50};
`;

export const Title = styled.h1`
  padding-top: 68px;
  margin: 0;

  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
  user-select: none;
`;

export const SubTitle = styled.span`
  display: block;
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
  padding: 1rem 0 2rem 0;
  user-select: none;
`;
