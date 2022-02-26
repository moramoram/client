import styled from "styled-components";
import { colors, fontSize, fontWeight, lineHeight } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const bgColor = {
  light: {
    default: colors.transparent,
    background: colors.gray25,
  },
  dark: {
    default: colors.transparent,
    background: "#202429",
  },
};

export const Layout = styled.div`
  padding: 12rem 0;
  background-color: ${(props) => bgColor[props.theme][props.mode]};

  @media screen and (max-width: 530px) {
    padding: 6rem 0;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  max-width: 960px;
  margin: auto;
  padding: 20px;

  @media screen and (max-width: 530px) {
    gap: 1.5rem;
  }
`;

export const Highlight = styled.div`
  color: ${colors.blue100};
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.bold};
  transition: 0.3s;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.h4};
    line-height: ${lineHeight.h4};
  }
`;

export const Title = styled.div`
  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.h1};
  line-height: ${lineHeight.h1};
  font-weight: ${fontWeight.bold};
  white-space: pre-line;
  transition: 0.3s;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.h2};
    line-height: ${lineHeight.h2};
  }
`;

export const ImgBox = styled.div`
  margin-top: 2rem;

  > img {
    width: 100%;
  }
`;

export const Description = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.h4};
  line-height: ${lineHeight.h4};
  transition: 0.3s;
  white-space: pre-line;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.p};
    line-height: ${lineHeight.p};
  }
`;
