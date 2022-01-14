import React from "react";
import styled from "styled-components";
import { color } from "../shared/styles";

const bgColors = {
  dark: color.black,
  blue: color.blue100,
  light: color.white,
};

const StyledBackground = styled.div`
  display: flex;
  padding: 5rem;
  border-radius: 12px;
  background-color: ${(props) => bgColors[props.mode]};
`;

export function Background({ mode, ...props }) {
  return <StyledBackground mode={mode} {...props}></StyledBackground>;
}
