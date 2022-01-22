import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontWeight, fontSize, loadings } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MODE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const Badge = ({ children, isLoading, ...props }) => {
  const badgeinner = isLoading ? null : children;
  return (
    <Layout isLoading={isLoading} {...props}>
      {badgeinner}
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

const textColor = {
  light: {
    primary: colors.white,
    secondary: colors.gray600,
  },
  dark: {
    primary: colors.white,
    secondary: colors.white,
  },
};

const bgColor = {
  light: {
    primary: colors.blue100,
    secondary: colors.gray100,
  },
  dark: {
    primary: colors.blue100,
    secondary: colors.gray700,
  },
};

const Layout = styled.div`
  display: inline-block;
  min-width: 48px;
  height: 20px;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${(props) => bgColor[props.theme][props.mode]};

  font-size: ${fontSize.xxs};
  font-weight: ${(props) =>
    props.isBold ? fontWeight.bold : fontWeight.regular};
  color: ${(props) => textColor[props.theme][props.mode]};
  text-align: center;

  animation: ${(props) => props.isLoading && loadings[props.theme]};
`;
export default Badge;
