import React, { useState } from "react";
import PropTypes from "prop-types";

import { Layout, CheckBox, SwitchButton } from "./Switch.styled";

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
