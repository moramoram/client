import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, typography } from "../shared/styles";

const SubNavbarItemWrapper = styled.button`
  display: inline-block;
  overflow: hidden;

  width: 200px;
  height: 42px;
  margin: 0;
  border: 0;
  border-radius: 8px;

  background: transparent;

  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-size: ${typography.size.paragraph};
  font-weight: ${(props) =>
    props.isActive ? typography.weight.bold : typography.weight.regular};

  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `
    background: ${props.isDarkmode ? color.gray700 : color.gray50};
    color: ${props.isDarkmode ? color.gray25 : color.gray900};
    `}

  ${(props) =>
    !props.isActive &&
    `
    color: ${color.gray500};
    `}

  :hover {
    span {
      color: ${(props) => (props.isDarkmode ? color.gray300 : color.gray700)};
      transition: 0.3s;
    }

  svg {
    height: "16";
    width: "16";
    margin-right: "6";
    margin-top: "-2";
    margin-bottom: "-2";
    vertical-align: top;
  }




`;

export function SubNavbarItem({ children, ...props }) {
  return <SubNavbarItemWrapper {...props}>{children}</SubNavbarItemWrapper>;
}

SubNavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkmode: PropTypes.bool,
  isActive: PropTypes.bool,
  containsIcon: PropTypes.bool,
  ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

SubNavbarItem.defaultProps = {
  theme: false,
  isActive: false,
  containsIcon: false,
  ButtonWrapper: undefined,
};
