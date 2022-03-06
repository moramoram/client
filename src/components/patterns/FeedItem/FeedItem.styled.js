import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight, lineHeight, loadings } from "@/_shared";

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const contentColor = {
  dark: colors.gray300,
  light: colors.gray700,
};

export const Layout = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  flex-grow: 1;
`;

export const Header = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

export const User = styled.h3`
  margin: 0;
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.sm};
  }

  ${(props) =>
    props.isLoading &&
    css`
      width: 120px;
      height: ${lineHeight.p};
      border-radius: 4px;
    `}
  ${(props) => props.isLoading && loadings[props.theme]}
`;

export const UserDetail = styled.span`
  font-size: ${fontSize.sm};
  line-height: ${fontSize.p};
  color: ${colors.gray500};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.xs};
  }
`;

export const CreatedAt = styled.span`
  display: block;
  font-size: ${fontSize.sm};
  line-height: ${fontSize.sm};
  color: ${colors.gray500};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.xs};
  }

  ${(props) =>
    props.isLoading &&
    css`
      width: 60px;
      height: ${fontSize.sm};
      border-radius: 4px;
    `}
  ${(props) => props.isLoading && loadings[props.theme]}
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;

  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${fontSize.lg};
  line-height: ${lineHeight.lg};
  font-weight: ${fontWeight.bold};
  color: ${(props) => titleColor[props.theme]};

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.p};
  }

  ${(props) =>
    props.isLoading &&
    css`
      max-width: 200px;
      height: ${lineHeight.lg};
      border-radius: 4px;
    `}
  ${(props) => props.isLoading && loadings[props.theme]}
`;

export const Content = styled.span`
  display: -webkit-box;
  overflow: hidden;
  height: 3rem;

  color: ${(props) => contentColor[props.theme]};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.p};
  line-height: ${lineHeight.p};
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  @media screen and (max-width: 530px) {
    font-size: ${fontSize.sm};
  }

  ${(props) =>
    props.isLoading &&
    css`
      width: 100%;
      height: 3rem;
      border-radius: 4px;
    `}
  ${(props) => props.isLoading && loadings[props.theme]}
`;

export const Footer = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${colors.gray500};

  ${(props) =>
    props.isLoading &&
    css`
      max-width: 200px;
      height: 24px;
      border-radius: 4px;
      color: ${colors.transparent};
    `}
  ${(props) => props.isLoading && loadings[props.theme]}
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 18px;
  }
`;

export const CountNums = styled.div`
  font-size: ${fontSize.sm};
`;

export const ThumbnailBox = styled.div`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  ${(props) =>
    props.isLoading &&
    css`
      width: 200px;
      height: 200px;
    `}

  ${(props) => props.isLoading && loadings[props.theme]}
`;

export const ThumbnailBoxMobile = styled.div`
  margin-top: 1rem;

  ${(props) =>
    props.isLoading &&
    css`
      width: 100%;
      height: 200px;
      background-color: gray;
    `}
  ${(props) => props.isLoading && loadings[props.theme]}
`;
