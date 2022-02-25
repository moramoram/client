import React from "react";
import PropTypes from "prop-types";

import { Svg } from "./Icon.styled";
import { icons } from "@/_shared";

const Icon = ({ icon, block, ...props }) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      block={block}
      stroke="currentColor"
      {...props}
    >
      {icons[icon]}
    </Svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

Icon.defaultProps = {
  block: false,
};

export default Icon;
