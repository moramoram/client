import { css } from "styled-components";
import { animations } from "./";

const loadings = {
  light: css`
    animation: ${animations.glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    animation: ${animations.glowDark} 1.5s ease-in-out infinite;
  `,
};

export default loadings;
