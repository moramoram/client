import { css } from "styled-components";

// Global style variables
export const background = {
  app: "#F6F9FC",
  appInverse: "#7A8997",
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
};

export const color = {
  // Palette
  blue50: "#A5C1F7",
  blue100: "#4A83EF",
  blue200: "#3669CD",

  // Monochrome
  white: "#FFFFFF",
  black: "#212529",

  gray25: "#F8F9FA",
  gray50: "#F1F3F5",
  gray100: "#E9ECEF",
  gray200: "#DEE2E6",
  gray300: "#CED4DA",
  gray400: "#ADB5BD",
  gray500: "#868E96",
  gray600: "#4A5056",
  gray700: "#3D4248",
  gray800: "#31363B",
  gray900: "#292D32",
  border: "rgba(0,0,0,.1)",

  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
};

export const shadow = {
  base: "0px 1px 3px rgba(0,0,0,0.1)",
  button: "0px 1px 1px rgba(0,0,0,0.05)",
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Pretendard Variable"',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  size: {
    b1: "0.875rem",
    b2: "0.75rem",
    b3: "0.625rem",

    h1: "3rem",
    h2: "2.25rem",
    h3: "1.5rem",
    h4: "1.25rem",
    large: "1.125rem",
    paragraph: "1rem",
    small: "0.875rem",
    code: "90",
  },
};

export const breakpoint = 600;
export const pageMargin = "5.55555";

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
