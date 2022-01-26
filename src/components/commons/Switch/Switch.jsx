import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Switch = ({ theme, isSelected, onToggle, ...props }) => {
  const [isChecked, setIsChecked] = useState(isSelected);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  return (
    <Layout checked={isChecked}>
      <CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        theme={theme}
      />
      <SwitchButton className="switch" />
    </Layout>
  );
};

Switch.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isSelected: PropTypes.bool,
  onToggle: PropTypes.func,
};

Switch.defaultProps = {
  theme: THEME.LIGHT,
  isSelected: false,
};

export default Switch;

const bgColor = {
  light: colors.gray200,
  dark: colors.gray700,
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
    background-color: ${colors.blue100};
  }

  :checked + div {
    transform: translateX(20px);
  }

  :active + div {
    width: 24px;
    border-radius: 24px;
  }

  :checked + div:active {
    left: -2px;
  }

  :checked:active + div {
    left: -2px;
  }
`;

const SwitchButton = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 2px;
  border-radius: 20px;
  background-color: ${colors.white};

  cursor: pointer;
  transition: transform 0.4s, width 0.3s, left 0.3s;

  :active {
    width: 24px;
    border-radius: 24px;
  }
`;
