import styled from "styled-components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const subtitleColor = {
  light: colors.gray400,
  dark: colors.gray500,
};

export const Layout = styled.div`
  width: 300px;
  position: relative;

  .thumbnail {
    margin-bottom: 16px;
  }
`;
export const BookMarkBox = styled.div`
  position: absolute;
  left: 20px;
  top: -5px;
`;

export const TextBox = styled.div`
  margin-bottom: 8px;

  div {
    display: inline-block;
    border-radius: 4px;
    ${(props) => props.isLoading && loadings[props.theme]};
  }
`;

export const Highlight = styled.div`
  min-width: 70px;
  min-height: ${fontSize.sm};
  margin-bottom: 8px;
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue100};
`;

export const Title = styled.div`
  min-width: 240px;
  min-height: ${fontSize.h3};
  margin-bottom: 4px;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h4};
  color: ${(props) => titleColor[props.theme]};
`;

export const Subtitle = styled.div`
  min-width: 140px;
  min-height: ${fontSize.sm};
  font-size: ${fontSize.sm};
  color: ${(props) => subtitleColor[props.theme]};
`;

export const BadgeBox = styled.div`
  margin: 12px 0px;

  .badge-item {
    margin-right: 5px;
  }
`;
