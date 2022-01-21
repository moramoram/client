import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, typography } from "../../shared/styles";
import { glowLight, glowDark } from "../../shared/animation";

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
    primary: color.white,
    secondary: color.gray600,
  },
  dark: {
    primary: color.white,
    secondary: color.white,
  },
};

const bgColor = {
  light: {
    primary: color.blue100,
    secondary: color.gray100,
  },
  dark: {
    primary: color.blue100,
    secondary: color.gray700,
  },
};

const loadingAnimation = {
  light: css`
    ${glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    ${glowDark} 1.5s ease-in-out infinite;
  `,
};

const Layout = styled.div`
  display: inline-block;
  min-width: 48px;
  height: 20px;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${(props) => bgColor[props.theme][props.mode]};

  font-size: ${typography.size.b3};
  font-weight: ${(props) =>
    props.isBold ? typography.weight.bold : typography.weight.regular};
  color: ${(props) => textColor[props.theme][props.mode]};
  text-align: center;

  animation: ${(props) => props.isLoading && loadingAnimation[props.theme]};
`;
export default Badge;
