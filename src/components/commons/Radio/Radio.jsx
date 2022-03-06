import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { Layout, Icon, Label } from "./Radio.styled";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Radio = forwardRef(({ theme, label, ...props }, inputRef) => {
  return (
    <Layout>
      <input type="radio" ref={inputRef} {...props} />
      <Icon className="icon" theme={theme} />
      <Label theme={theme}>{label}</Label>
    </Layout>
  );
});

Radio.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  label: PropTypes.string,
};

Radio.defaultProps = {
  theme: THEME.LIGHT,
  label: "Label",
};

export default Radio;
