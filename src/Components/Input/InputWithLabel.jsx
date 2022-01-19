import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color, typography, shadow } from "../../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  FOCUS: "focus",
  HINT: "hint",
  ERROR: "error",
};

const InputWithLabel = ({ ...props }) => {
  return (
    <div>
      <Label {...props}>라벨</Label>
      <Layout {...props}>
        <InputBox placeholder="Placeholder" {...props} />
      </Layout>
    </div>
  );
};

InputWithLabel.propTypes = {
  text: PropTypes.any,
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
};

InputWithLabel.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
};

export default InputWithLabel;

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

const msgText = {
  hint: color.gray400,
  error: color.warning,
};

const Layout = styled.div`
  height: 42px;
  width: 300px;

  font-size: ${typography.size.paragraph};
  padding: 10px;
  margin: 6px;

  background-color: ${(props) => bgColor[props.theme]};
  box-shadow: ${shadow.input};

  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 8px;
  padding-left: 10px;

  color: ${(props) => textColor[props.theme]};
  font-weight: 400;

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

const Label = styled.div`
  font-size: ${typography.size.small};
  padding-left: 11px;
  font-weight: ${typography.weight.bold};
  color: ${color.gray900};
`;

const Msg = styled.div`
  font-size: ${typography.size.small};
  padding-left: 10px;
  font-weight: ${typography.weight.regular};
  color: ${(props) => msgText[props.status]};
`;
