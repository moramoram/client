import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, fontWeight } from "@/_shared";

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

const NavVerticalItem = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Text {...props}>{children}</Text>
    </Layout>
  );
};

NavVerticalItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  children: PropTypes.node.isRequired,
};

NavVerticalItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  type: TYPE.DEFAULT,
  children: "Menu",
};

export default NavVerticalItem;

const bgColor = {
  default: "#00000000",
  active: "#EDF3FE",
};

const textColor = {
  dark: {
    default: {
      default: colors.gray25,
      active: colors.blue100,
    },
    transparent: {
      default: colors.gray25,
      active: colors.blue100,
    },
  },
  light: {
    default: {
      default: colors.gray900,
      active: colors.blue100,
    },
    transparent: {
      default: colors.gray25,
      active: colors.blue100,
    },
  },
};

const textWeight = {
  active: fontWeight.bold,
  default: fontWeight.regular,
};

const borderColor = {
  active: colors.blue100,
  default: "#00000000",
};

const Layout = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  padding-left: 2rem;
  border-left: 4px solid ${(props) => borderColor[props.status]};

  background-color: ${(props) => bgColor[props.status]};

  transition: 0.1s;
  cursor: pointer;
`;

const Text = styled.span`
  display: inline-block;
  padding-top: 0.2rem;

  color: ${(props) => textColor[props.theme][props.type][props.status]};
  font-size: ${fontSize.sm};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;

  transition: 0.5s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
