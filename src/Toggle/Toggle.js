import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color } from "../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export const Toggle = ({ theme, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <Layout checked={isChecked}>
      <CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        theme={theme}
      />
      <Switch className="switch" />
    </Layout>
  );
};

Toggle.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

Toggle.defaultProps = {
  theme: THEME.LIGHT,
};

const bgColor = {
  light: color.gray200,
  dark: color.gray700,
};

const Layout = styled.label`
  display: inline-block;
  height: 24px;
  position: relative;
`;

const CheckBox = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  top: 0;

  ::before {
    display: block;
    position: absolute;
    content: "";
    width: 44px;
    height: 24px;

    border-radius: 44px;
    background-color: ${(props) => bgColor[props.theme]};
    transition: 0.3s;
    cursor: pointer;
  }

  :checked::before {
    background-color: ${color.blue100};
  }

  :checked + div {
    transform: translateX(20px);
  }
`;

const Switch = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  left: 6px;
  border-radius: 50%;
  background-color: ${color.white};

  transition: transform 0.2s linear;
`;
