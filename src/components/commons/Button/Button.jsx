import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, fontWeight, shadows, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MODE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
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
  isDisabled: PropTypes.bool,
  isUnclickable: PropTypes.bool,
  minWidth: PropTypes.any,
};

Button.defaultProps = {
  theme: THEME.LIGHT,
  mode: MODE.PRIMARY,
  isLoading: false,
  isDisabled: false,
  isUnclickable: false,
  minWidth: "136px",
};

export default Button;

const borderColor = {
  light: {
    primary: colors.blue100,
    secondary: colors.gray300,
  },
  dark: {
    primary: colors.blue100,
    secondary: colors.gray500,
  },
};

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
    secondary: colors.white,
  },
  dark: {
    primary: colors.blue100,
    secondary: colors.gray700,
  },
};

const hoverBgColor = {
  light: {
    primary: colors.blue200,
    secondary: colors.gray100,
  },
  dark: {
    primary: colors.blue200,
    secondary: colors.gray500,
  },
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  min-width: ${(props) => props.minWidth};

  margin: 10px;
  border-radius: 8px;
  border: 1px solid ${(props) => borderColor[props.theme][props.mode]};

  background: ${(props) => bgColor[props.theme][props.mode]};
  box-shadow: ${shadows.button};

  color: ${(props) => textColor[props.theme][props.mode]};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.p};
  text-align: center;
  text-decoration: none;

  transition: all 150ms ease-out;
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
    props.isDisabled &&
    `
      opacity: 0.5;
      cursor: not-allowed !important;
    `}

  ${(props) =>
    props.isLoading &&
    `
      border: none;
      cursor: progress !important;

      &:hover {
        transform: none;
      }
    `}

    ${(props) =>
    !props.isLoading &&
    !props.isDisabled &&
    `
        &:hover {
          box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
          background: ${hoverBgColor[props.theme][props.mode]};      
        }
        &:active {
          box-shadow: ${shadows.base};
        }
      `}
`;
