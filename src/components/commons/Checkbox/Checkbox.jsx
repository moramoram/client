import React from "react";
import PropTypes from "prop-types";

import { Layout, Icon, Label } from "./Checkbox.styled";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const Checkbox = ({ theme, label, ...props }) => {
  return (
    <Layout>
      <input type="checkbox" {...props} />
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
