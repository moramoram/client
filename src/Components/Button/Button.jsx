import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, typography, shadow } from "../../shared/styles";
import { glowLight, glowDark } from "../../shared/animation";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MODE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const borderColor = {
  light: {
    primary: color.blue100,
    secondary: color.gray300,
  },
  dark: {
    primary: color.blue100,
    secondary: color.gray500,
  },
};

const textColor = {
  light: {
    primary: color.white,
    secondary: color.gray600,
  },
  dark: {
    primary: color.white,
    secondary: color.white,
  },
};

const bgColor = {
  light: {
    primary: color.blue100,
    secondary: color.white,
  },
  dark: {
    primary: color.blue100,
    secondary: color.gray700,
  },
};

const hoverBgColor = {
  light: {
    primary: color.blue200,
    secondary: color.gray300,
  },
  dark: {
    primary: color.blue200,
    secondary: color.gray500,
  },
};

const loadingAnimation = {
  light: css`
    ${glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    ${glowDark} 1.5s ease-in-out infinite;
  `,
};

const ButtonWrapper = styled.button`
  display: inline-block;
  overflow: hidden;

  min-width: ${(props) => props.minWidth};
  height: 42px;
  margin: 0;
  padding: 11px 27px;
  border-radius: 8px;
  border: ${(props) => `1px solid ${borderColor[props.theme][props.mode]}`};

  background: ${(props) => bgColor[props.theme][props.mode]};
  box-shadow: ${shadow.button};

  color: ${(props) => textColor[props.theme][props.mode]};
  font-weight: 700;
  font-size: ${typography.size.paragraph};
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  user-select: none;
  cursor: pointer;
  animation: ${(props) => props.isLoading && loadingAnimation[props.theme]};

  svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    vertical-align: top;
  }

  ${(props) =>
    props.isDisabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
    `}

  ${(props) =>
    props.isUnclickable &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
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
        box-shadow: ${shadow.base};
      }
    `}
`;

const Button = ({ isLoading, loadingText, isLink, children, ...props }) => {
  const buttonInner = isLoading ? "" : children;

  return (
    <ButtonWrapper isLoading={isLoading} {...props}>
      {buttonInner}
    </ButtonWrapper>
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
