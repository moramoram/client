import { createGlobalStyle, css } from "styled-components";
import { colors, fontFamily, fontSize, fontWeight } from "./";

export const bodyStyles = css`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.p}px;
  color: ${colors.gray700};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
    letter-spacing: -0.02rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${fontWeight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${fontFamily.sans};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${fontWeight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${colors.gray500};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${fontFamily.mono};
    font-size: ${fontSize.sm}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;

    color: ${colors.gray500};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${colors.gray900};
    border-radius: 3px;
    margin: 1rem 0;
  }

  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
