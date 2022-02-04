import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "@/foundations";
import { colors, shadows } from "@/_shared";

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

const bgColor = {
  light: colors.white,
  dark: colors.gray800,
};

const bgHoverColor = {
  light: colors.gray50,
  dark: colors.gray700,
};

const borderColor = {
  light: colors.gray200,
  dark: colors.gray800,
};

const iconColor = {
  light: colors.gray600,
  dark: colors.gray200,
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 50%;

  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${shadows.base};
  cursor: pointer;

  :hover {
    background-color: ${(props) => bgHoverColor[props.theme]};
  }

  svg {
    stroke: ${(props) => iconColor[props.theme]};
  }
`;
