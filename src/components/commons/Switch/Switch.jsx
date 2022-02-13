import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { colors, shadows } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const SIZE = {
  DEFAULT: "default",
  SMALL: "small",
};

const Switch = ({ theme, isSelected, onToggle, ...props }) => {
  const [isChecked, setIsChecked] = useState(isSelected);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  return (
    <Layout checked={isChecked} {...props}>
      <CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        theme={theme}
        {...props}
      />
      <SwitchButton className="switch" {...props} />
    </Layout>
  );
};

Switch.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isSelected: PropTypes.bool,
  onToggle: PropTypes.func,
  size: PropTypes.oneOf(Object.values(SIZE)),
};

Switch.defaultProps = {
  theme: THEME.LIGHT,
  isSelected: false,
  size: SIZE.DEFAULT,
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

  ${(props) =>
    props.size === SIZE.SMALL &&
    css`
      height: 20px;
    `}
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

  ${(props) =>
    props.size === SIZE.SMALL &&
    css`
      ::before {
        width: 36px;
        height: 20px;
      }

      :checked + div {
        transform: translateX(16px);
      }

      :active + div {
        width: 20px;
        border-radius: 20px;
      }
    `}
`;

const SwitchButton = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 2px;
  border-radius: 20px;
  background-color: ${colors.white};
  box-shadow: ${shadows.button};

  cursor: pointer;
  transition: transform 0.4s, width 0.3s, left 0.3s;

  :active {
    width: 24px;
    border-radius: 24px;
  }

  ${(props) =>
    props.size === SIZE.SMALL &&
    css`
      width: 16px;
      height: 16px;
      border-radius: 16px;

      :active {
        width: 20px;
        border-radius: 20px;
      }
    `}
`;
