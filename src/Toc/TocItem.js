import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color, typography } from "../shared/styles";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const STATUS = {
  DEFAULT: "default",
  ACTIVE: "active",
};

const textColor = {
  dark: {
    active: color.gray25,
    default: color.gray500,
  },
  light: {
    active: color.gray900,
    default: color.gray500,
  },
};

const textHoverColor = {
  dark: color.gray400,
  light: color.gray800,
};

const textWeight = {
  active: typography.weight.bold,
  default: typography.weight.regular,
};

const borderColor = {
  dark: {
    active: color.gray25,
    default: "#00000000",
  },
  light: {
    active: color.black,
    default: "#00000000",
  },
};

const Text = styled.span`
  display: block;

  color: ${(props) => textColor[props.theme][props.status]};
  font-size: ${typography.size.paragraph};
  font-weight: ${(props) => textWeight[props.status]};
  text-decoration: none;
`;

const Number = styled.span`
  display: block;

  color: ${color.blue100};
  font-size: 0.8rem;
`;

const StyledTocItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.25rem;

  height: 40px;
  width: 100px;
  border-bottom: 3px solid ${(props) => borderColor[props.theme][props.status]};

  cursor: pointer;

  ${(props) =>
    props.status === STATUS.DEFAULT &&
    `
      :hover {
        .menu {
          color: ${textHoverColor[props.theme]};
          transition: 0.3s;
        }
    }
  `}
`;

export function TocItem({ children, number, ...props }) {
  return (
    <StyledTocItem {...props}>
      <Text className="menu" {...props}>
        {children}
      </Text>
      <Number>{number}</Number>
    </StyledTocItem>
  );
}

TocItem.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUS)),
  theme: PropTypes.oneOf(Object.values(THEME)),
  children: PropTypes.node.isRequired,
};

TocItem.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
};
