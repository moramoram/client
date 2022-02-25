import styled from "styled-components";
import { colors, fontSize, fontWeight } from "@/_shared";

const bgColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const titleColor = {
  light: colors.gray800,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 400px;
  background: ${(props) => bgColor[props.theme]};
`;

export const Title = styled.div`
  padding-top: 68px;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.div`
  font-size: ${fontSize.p};
  color: ${(props) => subtitleColor[props.theme]};
`;
