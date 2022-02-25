import React from "react";
import PropTypes from "prop-types";

import { Layout } from "./DropdownItem.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const DropdownItem = ({ children, ...props }) => {
  return <Layout {...props}>{children}</Layout>;
};

DropdownItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  children: PropTypes.node.isRequired,
};

DropdownItem.defaultProps = {
  theme: THEME.LIGHT,
  children: "메뉴",
};

export default DropdownItem;
