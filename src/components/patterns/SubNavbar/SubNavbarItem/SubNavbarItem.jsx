import React from "react";
import PropTypes from "prop-types";

import { Layout } from "./SubNavbarItem.styled";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const SubNavbarItem = ({ children, onClick, ...props }) => {
  return (
    <Layout onClick={() => onClick()} {...props}>
      {children}
    </Layout>
  );
};

SubNavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  onClick: PropTypes.func,
};

SubNavbarItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
};

export default SubNavbarItem;
