import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, shadow } from "../shared/styles";

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const APPEARANCES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
};

const StyledButton = styled.button`
  display: inline-block;
  overflow: hidden;

  margin: 0;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  padding: ${(props) =>
    props.size === SIZES.SMALL ? "8px 16px" : "13px 20px"};
  min-width: ${(props) => (props.size === SIZES.SMALL ? "80px" : "130px")};

  background: transparent;
  box-shadow: ${shadow.button};

  text-align: center;
  text-decoration: none;
  vertical-align: top;
  line-height: 1;
  font-weight: 700;
  white-space: nowrap;

  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  user-select: none;

  svg {
    height: ${(props) => (props.size === SIZES.SMALL ? "14" : "16")}px;
    width: ${(props) => (props.size === SIZES.SMALL ? "14" : "16")}px;
    margin-right: ${(props) => (props.size === SIZES.SMALL ? "4" : "6")}px;
    margin-top: ${(props) => (props.size === SIZES.SMALL ? "-1" : "-2")}px;
    margin-bottom: ${(props) => (props.size === SIZES.SMALL ? "-1" : "-2")}px;
    vertical-align: top;
  }

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
    `}

  ${(props) =>
    props.minWidth &&
    `
      min-width: ${props.minWidth}px;
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
      cursor: progress !important;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${props.size === SIZES.SMALL ? "7" : "12"}px;
    `}
  
  ${(props) =>
    !props.isLoading &&
    !props.disabled &&
    `
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }
      &:active {
        box-shadow: ${shadow.base};
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
      background: ${color.blue100};
      color: ${color.white};
      ${
        !props.isLoading &&
        !props.disabled &&
        `
          &:hover {
            background: ${color.blue200};      
          }
      `
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.SECONDARY &&
    `
      border: 1px solid ${props.isDarkmode ? color.gray500 : color.gray300};
      background:${props.isDarkmode ? color.gray700 : color.white}; 
      color: ${props.isDarkmode ? color.gray25 : color.gray600};
      
      ${
        !props.isLoading &&
        !props.disabled &&
        `

          &:hover {
            background: ${props.isDarkmode ? color.gray500 : color.gray300}; 
          }
        `
      }
      ${
        props.isLoading &&
        `background: ${props.isDarkmode ? color.gray500 : color.gray300}`
      }
    `}
`;

const applyStyle = (ButtonWrapper) =>
  ButtonWrapper &&
  StyledButton.withComponent(
    ({ containsIcon, isLoading, isUnclickable, ...rest }) => (
      <ButtonWrapper {...rest} />
    )
  );

export function Button({
  isDisabled,
  isLoading,
  loadingText,
  isLink,
  children,
  ButtonWrapper,
  ...props
}) {
  const buttonInner = (
    <>{isLoading ? <Text>Loading</Text> : <Text>{children}</Text>}</>
  );

  const StyledButtonWrapper = React.useMemo(
    () => applyStyle(ButtonWrapper),
    [ButtonWrapper]
  );

  let SelectedButton = StyledButton;
  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  }
  return (
    <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
      {buttonInner}
    </SelectedButton>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  isDisabled: PropTypes.bool,
  isDarkmode: PropTypes.bool,
  isUnclickable: PropTypes.bool,
  containsIcon: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
  ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  minWidth: PropTypes.number,
};

Button.defaultProps = {
  isLoading: false,
  appearance: APPEARANCES.TERTIARY,
  isDarkmode: false,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined,
  minWidth: undefined,
};
