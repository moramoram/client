// Handy CSS animations for micro-interactions
import { css } from "styled-components";
import { animations } from "./";

const loadings = {
  light: css`
    ${animations.glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    ${animations.glowDark} 1.5s ease-in-out infinite;
  `,
};

export default loadings;
