import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "../../Basic";
import { color, typography, shadow } from "../../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ERROR: "error",
};

const Input = ({ title, placeholder, message, status, icon, ...props }) => {
  const inner = icon ? <Icon icon={icon} /> : null;
  return (
    <>
      <Label {...props}>{title}</Label>
      <Layout status={status} {...props}>
        {inner}
        <InputBox placeholder={placeholder} {...props} />
      </Layout>
      <Message status={status}>{message}</Message>
    </>
  );
};

Input.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  title: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
};

Input.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  placeholder: "Placeholder",
};

export default Input;

const textColor = {
  light: color.black,
  dark: color.gray500,
};

const bgColor = {
  light: color.white,
  dark: color.gray900,
};

const borderColor = {
  light: color.gray300,
  dark: color.gray500,
};

const labelColor = {
  light: color.gray900,
  dark: color.gray25,
};

const msgColor = {
  default: color.gray400,
  error: color.error,
};

const focusColor = {
  default: color.blue100,
  error: color.error,
};

const Layout = styled.div`
  display: flex;
  width: 300px;
  height: 42px;
  margin: 6px;
  padding: 10px;
  padding-left: 10px;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 8px;

  background-color: ${(props) => bgColor[props.theme]};
  font-size: ${typography.size.paragraph};
  color: ${color.gray500};
  box-shadow: ${shadow.button};
  align-items: center;

  svg {
    height: 18px;
    width: 18px;
  }

  :focus-within {
    border: 1px solid ${(props) => focusColor[props.status]};
    transition: 0.3s;
  }
`;

const InputBox = styled.input`
  padding-left: 8px;
  border: none;
  background: none;

  font-size: ${typography.size.paragraph};
  color: ${(props) => textColor[props.theme]};
  font-weight: 400;

  ::placeholder {
    color: ${color.gray500};
    font-size: ${typography.size.paragraph};
  }
`;

const Label = styled.div`
  padding-left: 10px;
  font-size: ${typography.size.small};
  font-weight: ${typography.weight.bold};
  color: ${(props) => labelColor[props.theme]};
`;

const Message = styled.div`
  padding-left: 10px;
  font-size: ${typography.size.small};
  font-weight: ${typography.weight.regular};
  color: ${(props) => msgColor[props.status]};
`;
