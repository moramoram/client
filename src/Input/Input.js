import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color, typography, shadow } from "../shared/styles";
import { Icon } from "../Icon/Icon";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  FOCUS: "focus",
};

export const Input = ({ icon, ...props }) => {
  const inner = icon ? <Icon icon={icon} /> : null;
  return (
    <>
    <Layout {...props}>
      {inner}
      <InputBox placeholder="Placeholder" {...props} />
    </Layout>
    </>
  );
}

Input.propTypes = {
  icon: PropTypes.any,
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
};

Input.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
};

const textColor = {
  light: color.gray500,
  dark: color.gray500,
};

const bgColor = {
  light: color.white,
  dark: color.gray900,
};

const borderColor = {
  light: color.gray300,
  dark: color.gray700,
};

const Layout = styled.div`
  height: 42px;
  width: 300px;

  font-size: ${typography.size.paragraph};
  padding: 10px;
  margin: 10px;

  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${shadow.input};

  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 8px;
  padding-left: 10px;

  color: ${(props) => textColor[props.theme]};
  font-weight: 400;

  svg {
    height: 18px;
    width: 18px;
  }

  :focus-within {
    border: 1px solid ${color.blue100};
    transition: 0.3s;
  }
`;

const InputBox = styled.input`
  font-size: ${typography.size.paragraph};
  border: none;
  background: none;
  padding-left: 8px;

  ::placeholder {
    color: ${color.gray500};
    font-size: ${typography.size.paragraph};
  }
`;
