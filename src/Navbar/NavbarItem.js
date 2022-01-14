import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color, typography } from "../shared/styles";

const MODE = {
  DARK: "dark",
  LIGHT: "light",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const textColor = {
  dark: color.gray25,
  light: color.gray900,
};

const textHoverColor = {
  dark: color.gray300,
  light: color.gray500,
};

const textWeight = {
  active: typography.weight.bold,
  default: typography.weight.regular,
};

const borderColor = {
  active: color.blue100,
  default: "#00000000",
};

const Text = styled.span`
  display: inline-block;

  color: ${(props) => textColor[props.mode]};
  font-size: ${typography.size.large};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledNavbarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  width: 120px;
  border-bottom: 3px solid ${(props) => borderColor[props.status]};

  cursor: pointer;
  :hover {
    span {
      color: ${(props) => textHoverColor[props.mode]};
      transition: 0.3s;
    }
  }
`;

export function NavbarItem({ children, ...props }) {
  return (
    <StyledNavbarItem {...props}>
      <Text {...props}>{children}</Text>
    </StyledNavbarItem>
  );
}

NavbarItem.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUS)),
  mode: PropTypes.oneOf(Object.values(MODE)),
  children: PropTypes.node.isRequired,
};

NavbarItem.defaultProps = {
  mode: MODE.LIGHT,
  status: STATUS.DEFAULT,
};
