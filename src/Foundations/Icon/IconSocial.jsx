import React from "react";
import styled from "styled-components";

import { iconsSocial } from "../../shared/iconsSocial";

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

export default IconSocial;

const Svg = styled.svg`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  vertical-align: middle;
`;
