import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const Svg = styled.svg`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);

  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
