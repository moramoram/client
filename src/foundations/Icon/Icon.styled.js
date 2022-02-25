import styled from "styled-components";

export const Svg = styled.svg`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);

  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
