import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { Layout, Label, InputBox, InputText, Message } from "./Input.styled";
import { Icon } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ERROR: "error",
  SUCCESS: "success",
};

const Input = forwardRef(
  ({ title, placeholder, message, status, icon, ...props }, inputRef) => {
    return (
      <Layout>
        <Label status={status} {...props}>
          {title}
        </Label>
        <InputBox status={status} {...props}>
          {icon && <Icon icon={icon} />}
          <InputText
            placeholder={placeholder}
            type={props.number ? "number" : "text"}
            ref={inputRef}
            autocomplete="off"
            {...props}
          />
        </InputBox>
        <Message status={status}>{message}</Message>
      </Layout>
    );
  }
);

Input.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  title: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  icon: PropTypes.string,
};

Input.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  placeholder: "Placeholder",
};

export default Input;
