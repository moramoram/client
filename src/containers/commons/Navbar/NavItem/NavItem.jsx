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

const NavItem = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Text {...props}>{children}</Text>
    </Layout>
  );
};

NavItem.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  children: PropTypes.node.isRequired,
};

NavItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  type: TYPE.DEFAULT,
  children: "Menu",
};

export default NavItem;

const textColor = {
  dark: {
    default: colors.gray25,
    transparent: colors.gray25,
  },
  light: {
    default: colors.gray900,
    transparent: colors.gray25,
  },
};

const textHoverColor = {
  dark: {
    default: colors.gray300,
    transparent: colors.gray300,
  },
  light: {
    default: colors.gray500,
    transparent: colors.gray300,
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
  justify-content: center;
  align-items: center;

  height: 64px;
  width: 105px;
  border-bottom: 3px solid ${(props) => borderColor[props.status]};

  transition: 0.1s;
  cursor: pointer;

  ${(props) =>
    props.status === STATUS.DEFAULT &&
    `
      :hover {
        span {
          color: ${textHoverColor[props.theme][props.type]};
          transition: 0.3s;
        }
    }
  `}
`;

const Text = styled.span`
  display: inline-block;
  padding-top: 0.2rem;

  color: ${(props) => textColor[props.theme][props.type]};
  font-size: ${fontSize.md};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
