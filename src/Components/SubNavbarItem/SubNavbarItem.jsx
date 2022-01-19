import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, typography } from "../../shared/styles";

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
    default: color.gray500,
    active: color.gray900,
  },
  dark: {
    default: color.gray500,
    active: color.gray25,
  },
};

const textHoverColor = {
  light: color.gray700,
  dark: color.gray300,
};

const textWeight = {
  default: typography.weight.regular,

  active: typography.weight.bold,
};

const background = {
  light: {
    default: "#00000000",
    active: color.gray25,
  },
  dark: {
    default: "#00000000",
    active: color.gray700,
  },
};

const cursor = {
  default: "pointer",
  active: "default !important",
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
  font-size: ${typography.size.paragraph};
  font-weight: ${(props) => textWeight[props.status]};
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  cursor: ${(props) => cursor[props.status]};
  user-select: none;

  :hover {
     {
      color: ${(props) => textHoverColor[props.theme]};
      transition: 0.3s;
    }
  }

  svg {
    height: 16px;
    width: 16px;
    margin-right: 6px;
    margin-bottom: -2px;
    vertical-align: top;
  }
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
