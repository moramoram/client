import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { colors, fontSize, fontWeight, shadows, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MODE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ACTIVE: "active",
};

const Button = ({ isLoading, loadingText, isLink, children, ...props }) => {
  const buttonInner = isLoading ? "" : children;

  return (
    <Layout isLoading={isLoading} {...props}>
      {buttonInner}
    </Layout>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
  mode: PropTypes.oneOf(Object.values(MODE)),
  isLoading: PropTypes.bool,
  isUnclickable: PropTypes.bool,
};

Button.defaultProps = {
  theme: THEME.LIGHT,
  mode: MODE.PRIMARY,
  isLoading: false,
  isUnclickable: false,
};

export default Button;

const borderColor = {
  light: {
    primary: colors.blue100,
    secondary: colors.gray200,
  },
  dark: {
    primary: colors.blue100,
    secondary: colors.gray600,
  },
};

const textColor = {
  light: {
    primary: colors.white,
    secondary: colors.gray600,
    active: colors.blue200,
  },
  dark: {
    primary: colors.white,
    secondary: colors.white,
    active: colors.white,
  },
};

const bgColor = {
  light: {
    primary: colors.blue100,
    secondary: colors.gray50,
    active: colors.blueOpacity50,
  },
  dark: {
    primary: colors.blue100,
    secondary: colors.gray700,
    active: colors.blueOpacity100,
  },
};

const hoverBgColor = {
  light: {
    primary: colors.blue200,
    secondary: colors.gray200,
    active: colors.blueOpacity50,
  },
  dark: {
    primary: colors.blue200,
    secondary: colors.gray600,
    active: colors.blueOpacity100,
  },
};

const Layout = styled.button`
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
  animation: ${(props) => props.isLoading && loadings[props.theme]};

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: top;
  }

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

  ${(props) =>
    props.isLoading &&
    css`
      cursor: progress;
    `}
`;
