import React from "react";
import PropTypes from "prop-types";

import { Layout } from "./Button.styled";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MODE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TRANSPARENT: "transparent",
  ACTIVE: "active",
};

const Button = ({ isLoading, children, ...props }) => {
  const buttonInner = isLoading || children;

  return (
    <Layout isLoading={isLoading} {...props}>
      {buttonInner}
    </Layout>
  );
};

Button.propTypes = {
  children: PropTypes.node,
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
