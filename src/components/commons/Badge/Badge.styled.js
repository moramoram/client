import styled from "styled-components";
import { colors, fontWeight, fontSize, loadings } from "@/_shared";

const textColor = {
  light: {
    primary: colors.white,
    secondary: colors.gray600,
  },
  dark: {
    primary: colors.white,
    secondary: colors.white,
  },
};

const bgColor = {
  light: {
    primary: colors.blue100,
    secondary: colors.gray100,
  },
  dark: {
    primary: colors.blue100,
    secondary: colors.gray700,
  },
};

export const Layout = styled.div`
  display: inline-flex;
  align-items: center;

  border-radius: 8px;
  background: ${(props) => bgColor[props.theme][props.mode]};

  ${(props) => props.isLoading && loadings[props.theme]};

  ${(props) =>
    props.isLoading &&
    `
    min-width: 48px;
    height: 20px;
    `}
`;

export const Text = styled.span`
  padding: 4px 8px;

  color: ${(props) => textColor[props.theme][props.mode]};
  font-size: ${fontSize.xxs};
  font-weight: ${(props) =>
    props.isBold ? fontWeight.bold : fontWeight.regular};
  line-height: 12px;
`;
