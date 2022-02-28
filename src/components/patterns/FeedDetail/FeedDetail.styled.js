import styled from "styled-components";
import {
  colors,
  fontSize,
  fontWeight,
  animations,
  lineHeight,
  loadings,
} from "@/_shared";

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const contentColor = {
  dark: colors.gray300,
  light: colors.gray700,
};

const borderColor = {
  light: colors.gray300,
  dark: colors.gray800,
};

export const Layout = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const TitleBox = styled.hgroup`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.8rem;

  @media screen and (max-width: 530px) {
    gap: 0.5rem;
  }
`;

export const Category = styled.h2`
  height: ${lineHeight.p};
  min-width: 100px;
  margin: 0;

  color: ${colors.blue100};
  line-height: ${lineHeight.p};
  font-size: ${fontSize.p};
  font-weight: ${fontWeight.bold};

  ${(props) => props.isLoading && loadings[props.theme]};
`;

export const Title = styled.h1`
  height: ${lineHeight.h2};
  min-width: 375px;
  margin: 0;

  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.h2};
  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};

  ${(props) => props.isLoading && loadings[props.theme]};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.h3};
  }
`;

export const DropdownBox = styled.div`
  position: relative;

  svg {
    stroke: ${colors.gray500};
    cursor: pointer;
  }

  > div {
    z-index: 9999;
    right: 0px;
    animation: ${animations.dropdown} 0.3s cubic-bezier(0.3, 0, 0, 1);
  }
`;

export const AvatarBox = styled.section`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => borderColor[props.theme]};
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  height: ${lineHeight.p};
  min-width: 150px;
  ${(props) => props.isLoading && loadings[props.theme]};
`;

export const User = styled.h2`
  margin: 0;
  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.p};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.p};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.sm};
  }
`;

export const UserDetail = styled.span`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.xs};
  }
`;

export const CreatedAt = styled.span`
  height: ${lineHeight.sm};
  min-width: 80px;
  color: ${colors.gray500};
  font-size: ${fontSize.sm};

  ${(props) => props.isLoading && loadings[props.theme]};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.xs};
  }
`;

export const Content = styled.section`
  padding: 1rem 0 1rem 0;

  color: ${(props) => contentColor[props.theme]};
  font-size: ${fontSize.p};
  line-height: 1.5rem;
  font-weight: ${fontWeight.regular};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.sm};
  }

  img {
    max-width: 100%;
  }

  h1 {
    padding: 3px 0;
    font-size: 1.5rem;
    font-weight: 700;
  }

  h2 {
    padding: 3px 0;
    font-size: 1.25rem;
    font-weight: 700;
  }

  h3 {
    padding: 3px 0;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    padding: 3px 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  ul,
  ol {
    padding-left: 32px;
  }

  pre {
    overflow-x: auto;
  }

  blockquote {
    margin-left: 0;
    padding-left: 1rem;
    border-left: 4px solid ${(props) => borderColor[props.theme]};
  }
`;
