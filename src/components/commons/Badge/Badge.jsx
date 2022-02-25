import React from "react";
import PropTypes from "prop-types";

import { Layout, Text } from "./Badge.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const MODE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const Badge = ({ children, isLoading, ...props }) => {
  const badgeinner = isLoading ? null : children;
  return (
    <Layout isLoading={isLoading} {...props}>
      <Text isLoading={isLoading} {...props}>
        {badgeinner}
      </Text>
    </Layout>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.values(THEME)),
  mode: PropTypes.oneOf(Object.values(MODE)),
  isBold: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Badge.defaultProps = {
  theme: THEME.LIGHT,
  mode: MODE.PRIMARY,
  isBold: false,
  isLoading: false,
};

export default Badge;
