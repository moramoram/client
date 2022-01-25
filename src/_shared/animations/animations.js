// Handy CSS animations for micro-interactions
import { keyframes } from "styled-components";
import { colors } from "../colors";

const animations = {
  glow: keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  `,
  glowLight: keyframes`
    0%, 100% { background: ${colors.gray100} }
    50% { background: ${colors.gray25}  }
  `,
  glowDark: keyframes`
    0%, 100% { background: ${colors.gray700}}
    50% { background: ${colors.gray900}}
  `,
  dropdown: keyframes`
    0% { opacity: 0; transform: translateY(-2px); }
  `,
};

export default animations;
