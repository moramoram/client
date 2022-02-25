import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const textColor = {
  light: {
    primary: colors.white,
    secondary: colors.gray600,
    transparent: colors.white,
    active: colors.blue200,
  },
  dark: {
    primary: colors.white,
    secondary: colors.white,
    transparent: colors.white,
    active: colors.blue50,
  },
};

const bgColor = {
  light: {
    primary: colors.blue100,
    secondary: colors.gray50,
    transparent: "rgba(134, 142, 150, 0.3)",
    active: colors.blueOpacity50,
  },
  dark: {
    primary: colors.blue100,
    secondary: colors.gray700,
    transparent: "rgba(134, 142, 150, 0.3)",
    active: colors.blueOpacity100,
  },
};

const hoverBgColor = {
  light: {
    primary: colors.blue200,
    secondary: colors.gray200,
    transparent: "rgba(134, 142, 150, 0.4)",
    active: colors.blueOpacity50,
  },
  dark: {
    primary: colors.blue200,
    secondary: colors.gray600,
    transparent: "rgba(134, 142, 150, 0.4)",
    active: colors.blueOpacity100,
  },
};

export const Layout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width};
  height: 42px;
  padding: 0px 42px;

  border-radius: 8px;
  border: none;
  background: ${(props) => bgColor[props.theme][props.mode]};

  color: ${(props) => textColor[props.theme][props.mode]};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  text-align: center;
  text-decoration: none;

  transition: 0.2s;
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.mode === "transparent" &&
    css`
      backdrop-filter: blur(4px);
    `}

  ${(props) => props.isLoading && loadings[props.theme]}
  
  ${(props) =>
    props.isLoading &&
    css`
      cursor: progress;
    `}
  
  ${(props) =>
    css`
      :disabled,
      :disabled:hover {
        opacity: 0.5;
        cursor: not-allowed;
        background: ${bgColor[props.theme][props.mode]};
      }

      :hover {
        background: ${hoverBgColor[props.theme][props.mode]};
      }

      :active {
        background: ${bgColor[props.theme][props.mode]};
      }
    `}

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: top;
  }
`;
