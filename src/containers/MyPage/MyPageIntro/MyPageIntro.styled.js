import styled from "styled-components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const titleColor = {
  light: colors.gray800,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

const borderColor = {
  light: colors.gray100,
  dark: colors.gray900,
};

export const Layout = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 150px 0 0 0px;
  margin: auto;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.div`
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h3};
  color: ${(props) => titleColor[props.theme]};
`;

export const SubTitle = styled.div`
  height: ${lineHeight.h4};

  font-size: ${fontSize.sm};
  color: ${(props) => subtitleColor[props.theme]};
`;
