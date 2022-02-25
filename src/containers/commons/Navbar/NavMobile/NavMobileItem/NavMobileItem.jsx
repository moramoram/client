import React from "react";
import PropTypes from "prop-types";

import { Layout, Text } from "./NavMobileItem.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

const NavMobileItem = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Text {...props}>{children}</Text>
    </Layout>
  );
};

NavMobileItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  children: PropTypes.node.isRequired,
};

NavMobileItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  type: TYPE.DEFAULT,
  children: "Menu",
};

export default NavMobileItem;
