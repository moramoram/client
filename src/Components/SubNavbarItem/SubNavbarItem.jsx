import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize, fontWeight } from "../../_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const textColor = {
  light: {
    default: colors.gray500,
    active: colors.gray900,
  },
  dark: {
    default: colors.gray500,
    active: colors.gray25,
  },
};

const textHoverColor = {
  light: colors.gray700,
  dark: colors.gray300,
};

const textWeight = {
  default: fontWeight.regular,
  active: fontWeight.bold,
};

const background = {
  light: {
    default: "#00000000",
    active: colors.gray25,
  },
  dark: {
    default: "#00000000",
    active: colors.gray700,
  },
};

const SubNavbarItemWrapper = styled.button`
  display: block;
  overflow: hidden;

  border: 0;
  border-radius: 8px;
  width: 200px;
  height: 42px;
  margin: 0;

  background: ${(props) => background[props.theme][props.status]};

  color: ${(props) => textColor[props.theme][props.status]};
  font-size: ${fontSize.p};
  font-weight: ${(props) => textWeight[props.status]};
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  user-select: none;

  svg {
    height: 16px;
    width: 16px;
    margin-right: 6px;
    margin-bottom: -2px;
    vertical-align: top;
  }

  ${(props) =>
    props.status === STATUS.DEFAULT &&
    `
    cursor: pointer;
    :hover {
      color: ${textHoverColor[props.theme]};
      transition: 0.3s;
    }
  `}
`;

const SubNavbarItem = ({ children, onClick, ...props }) => {
  return (
    <SubNavbarItemWrapper onClick={() => onClick()} {...props}>
      {children}
    </SubNavbarItemWrapper>
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
  containsIcon: false,
};

export default SubNavbarItem;
