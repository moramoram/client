import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Icon } from "@/foundations";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ERROR: "error",
};

const Input = ({ title, placeholder, message, status, icon, ...props }) => {
  return (
    <Layout>
      <Label {...props}>{title}</Label>
      <InputBox status={status} {...props}>
        {icon && <Icon icon={icon} />}
        <InputText placeholder={placeholder} {...props} />
      </InputBox>
      <Message status={status}>{message}</Message>
    </Layout>
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
  light: colors.black,
  dark: colors.gray500,
};

const bgColor = {
  light: colors.white,
  dark: colors.gray900,
};

const borderColor = {
  light: colors.gray300,
  dark: colors.gray700,
};

const labelColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const msgColor = {
  default: colors.gray400,
  error: colors.error,
};

const insetColor = {
  default: colors.blue100,
  error: "#f04438cf",
};

const focusColor = {
  default: "#4A83EF33",
  error: "#f8736a33",
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;

  height: 42px;
  padding: 10px;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 8px;

  background-color: ${(props) => bgColor[props.theme]};

  font-size: ${fontSize.p};
  color: ${colors.gray500};
  box-shadow: ${shadows.button};

  svg {
    height: 18px;
    width: 18px;
  }

  ${(props) =>
    props.status === STATUS.ERROR &&
    css`
      box-shadow: 0 0 0 3px ${focusColor[props.status]},
        inset 0 0 0 1px ${insetColor[props.status]};
    `}

  :focus-within {
    transition: 0.3s;

    ${(props) => `
      box-shadow: 0 0 0 3px ${focusColor[props.status]}, inset 0 0 0 1px ${
      insetColor[props.status]
    }
    `};
  }
`;

const InputText = styled.input`
  padding-left: 8px;
  border: none;
  background: none;

  font-size: ${fontSize.p};
  font-weight: ${fontWeight.regular};
  color: ${(props) => textColor[props.theme]};

  ::placeholder {
    color: ${colors.gray500};
    font-size: ${fontSize.p};
  }
`;

const Label = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${(props) => labelColor[props.theme]};
`;

const Message = styled.div`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  color: ${(props) => msgColor[props.status]};
`;
