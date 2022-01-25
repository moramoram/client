// Handy CSS animations for micro-interactions
import { keyframes } from "styled-components";
import { colors } from "../colors";

const animations = {
  rotate360: keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `,
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
  float: keyframes`
    0% { transform: translateY(1px); }
    25% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
    100% { transform: translateY(1px); }
  `,
  jiggle: keyframes`
    0%, 100% { transform:translate3d(0,0,0); }
    12.5%, 62.5% { transform:translate3d(-4px,0,0); }
    37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
  `,
  shake: keyframes`
    0% { transform:rotate(-3deg) }
    1.68421% { transform:rotate(3deg) }
    2.10526% { transform:rotate(6deg) }
    3.78947% { transform:rotate(-6deg) }
    4.21053% { transform:rotate(-6deg) }
    5.89474% { transform:rotate(6deg) }
    6.31579% { transform:rotate(6deg) }
    8% { transform:rotate(-6deg) }
    8.42105% { transform:rotate(-6deg) }
    10.10526% { transform:rotate(6deg) }
    10.52632% { transform:rotate(6deg) }
    12.21053% { transform:rotate(-6deg) }
    12.63158% { transform:rotate(-6deg) }
    14.31579% { transform:rotate(6deg) }
    15.78947% { transform:rotate(0deg) }
    100% { transform:rotate(0deg) }
  `,
  dropdown: keyframes`
    0% { opacity: 0; transform: translateY(-2px); }
  `,
  border: keyframes`
  	0% {
		width: 0%;
    }
    100% {
      width: 100%;
    }
  `,
};

// const inlineGlow = css`
//   @keyframes glow {
//     0%,
//     100% {
//       opacity: 1;
//     }
//     50% {
//       opacity: 0;
//     }
//   }
//   animation: glow 1.5s ease-in-out infinite;
//   background: ${color.light};
//   color: transparent;
//   cursor: progress;
// `;

export default animations;
