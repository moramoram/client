import React from "react";
import PropTypes from "prop-types";

import { Layout } from "./ScrollTopButton.styled";
import { Icon } from "@/foundations";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const ScrollTopButton = ({ ...props }) => {
  return (
    <Layout {...props}>
      <Icon icon="arrowUp" />
    </Layout>
  );
};

ScrollTopButton.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

ScrollTopButton.defaultProps = {
  theme: THEME.LIGHT,
};

export default ScrollTopButton;
