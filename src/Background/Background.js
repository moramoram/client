import React from "react";
import styled from "styled-components";
import { color } from "../shared/styles";

const StyledBackground = styled.div`
  display: flex;
  padding: 5rem;
  border-radius: 12px;
  background-color: ${(props) => {
    if (props.isDarkmode || props.type === "dark") {
      return color.black;
    } else if (props.isBlue || props.type === "blue") {
      return color.blue100;
    } else {
      return color.white;
    }
  }};
`;

export function Background({ type, ...props }) {
  return <StyledBackground {...props} type={type}></StyledBackground>;
}
