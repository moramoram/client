import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Checkbox = ({ theme, label, ...props }) => {
  return (
    <Layout>
      <input type="checkbox" />
      <Icon className="icon" theme={theme} />
      <Label theme={theme}>{label}</Label>
    </Layout>
  );
};

Checkbox.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  theme: THEME.LIGHT,
  label: "Label",
};

export default Checkbox;

const borderColor = {
  light: colors.gray300,
  dark: colors.gray600,
};

const Layout = styled.label`
  display: flex;
  align-content: center;
  gap: 0.5rem;

  input {
    display: none;
  }

  input:checked + .icon {
    border-color: ${colors.blue100};
    background-color: ${colors.blue100};
  }

  input:checked + .icon::before {
    height: 7px;
    transition: all 0.1s;
  }

  input:checked + .icon::after {
    height: 11px;
    transition: all 0.1s ease 0.1s;
  }
`;

const Icon = styled.div`
  position: relative;
  flex-shrink: 0;

  width: 18px;
  height: 18px;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 6px;

  background-color: transparent;

  cursor: pointer;
  transition: 0.2s;

  ::before,
  ::after {
    content: "";
    display: inline-block;
    width: 2px;
    height: 0;
    background-color: ${colors.white};
    border-radius: 2px;
    position: absolute;
    transform-origin: left top;
  }

  ::before {
    top: 9px;
    left: 2px;
    transform: rotate(-55deg);
  }

  ::after {
    top: 13px;
    left: 8px;
    transform: rotate(-145deg);
  }
`;

const Label = styled.span`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};
  line-height: 18px;
  user-select: none;
`;
