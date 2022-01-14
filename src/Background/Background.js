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
  background-color: ${(props) => bgColors[props.theme]};
`;

export function Background({ theme, ...props }) {
  return <StyledBackground theme={theme} {...props}></StyledBackground>;
}
