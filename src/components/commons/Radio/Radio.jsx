import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, fontSize } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Radio = ({ theme, label, ...props }) => {
  return (
    <Layout>
      <input type="radio" {...props} />
      <Icon className="icon" theme={theme} />
      <Label theme={theme}>{label}</Label>
    </Layout>
  );
};

Radio.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  label: PropTypes.string,
};

Radio.defaultProps = {
  theme: THEME.LIGHT,
  label: "Label",
};

export default Radio;

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
    border: 5px solid ${colors.blue100};
  }
`;

const Icon = styled.div`
  position: relative;
  flex-shrink: 0;

  width: 18px;
  height: 18px;
  border: 1px solid ${(props) => borderColor[props.theme]};
  border-radius: 50%;

  background-color: transparent;

  cursor: pointer;
  transition: 0.2s;
`;

const Label = styled.span`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};
  line-height: 18px;
  user-select: none;
`;
