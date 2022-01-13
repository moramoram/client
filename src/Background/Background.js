import React from "react";
import styled from "styled-components";
import { color } from "../shared/styles";

const StyledBackground = styled.div`
  display: flex;
  padding: 2rem;
  border-radius: 12px;
  background-color: ${(props) =>
    props.isDarkmode ? color.black : color.white};
`;

export function Background({ ...props }) {
  return <StyledBackground {...props}></StyledBackground>;
}
