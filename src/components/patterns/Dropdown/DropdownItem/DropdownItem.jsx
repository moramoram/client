import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, fontWeight } from "@/_shared";

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

const textColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const hoverColor = {
  dark: colors.gray700,
  light: colors.gray100,
};

const Layout = styled.div`
  display: flex;
  align-items: center;

  height: 36px;
  padding: 0 16px;

  color: ${(props) => textColor[props.theme]};
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  :hover {
    background-color: ${(props) => hoverColor[props.theme]};
  }
`;
