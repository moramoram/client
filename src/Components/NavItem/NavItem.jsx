import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color, typography } from "../../shared/styles";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
  TRANSPARENT: "transparent",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const NavItem = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Text {...props}>{children}</Text>
    </Layout>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
};

NavItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  children: "Menu",
};

export default NavItem;

const textColor = {
  dark: color.gray25,
  light: color.gray900,
  transparent: color.gray25,
};

const textHoverColor = {
  dark: color.gray300,
  light: color.gray500,
  transparent: color.gray300,
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

  color: ${(props) => textColor[props.theme]};
  font-size: ${typography.size.large};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  width: 120px;
  border-bottom: 3px solid ${(props) => borderColor[props.status]};

  cursor: pointer;

  ${(props) =>
    props.status === STATUS.DEFAULT &&
    `
      :hover {
        span {
          color: ${textHoverColor[props.theme]};
          transition: 0.3s;
        }
    }
  `}
`;
