import React from "react";
import PropTypes from "prop-types";

import { Svg } from "./IconSocial.styled";
import { iconsSocial } from "@/_shared";

const IconSocial = ({ icon, block, ...props }) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      block={block}
      {...props}
    >
      {iconsSocial[icon]}
    </Svg>
  );
};

IconSocial.propTypes = {
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

IconSocial.defaultProps = {
  block: false,
};

export default IconSocial;
