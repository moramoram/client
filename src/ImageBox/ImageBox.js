import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo";
import styled, { css } from "styled-components";
import { glowLight, glowDark } from "../shared/animation";
import { color } from "../shared/styles";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const SIZE = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

const imageBackground = {
  light: color.gray25,
  dark: color.gray900,
};
const imageWidth = {
  large: "400px",
  medium: "300px",
  small: "220px",
};

const imageHeight = {
  large: "200px",
  medium: "150px",
  small: "110px",
};

const loadingAnimation = {
  light: css`
    ${glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    ${glowDark} 1.5s ease-in-out infinite;
  `,
};

const ImageBoxWrapper = styled.div`
  display: flex;
  border-radius: 16px;
  width: ${(props) => imageWidth[props.size]};
  height: ${(props) => imageHeight[props.size]};
  background: ${(props) => imageBackground[props.theme]};

  justify-content: center;
  align-items: center;
  animation: ${(props) => props.isLoading && loadingAnimation[props.theme]};

  svg {
    width: 33%;
    height: 33%;
  }
`;

export function ImageBox({ theme, isLoading, name, src, ...props }) {
  let imageContent = theme === THEME.LIGHT ? <Logo /> : <Logo theme="dark" />;
  const a11yProps = {};

  if (isLoading) {
    imageContent = null;
    a11yProps["aria-busy"] = true;
    a11yProps["aria-label"] = "Loading";
  } else if (src) {
    imageContent = <img src={src} alt={name} />;
  }

  return (
    <ImageBoxWrapper
      theme={theme}
      isLoading={isLoading}
      {...a11yProps}
      {...props}
    >
      {imageContent}
    </ImageBoxWrapper>
  );
}

ImageBox.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  src: PropTypes.string,
  contents: PropTypes.objectOf(String).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
};

ImageBox.defaultProps = {
  theme: THEME.LIGHT,
  size: SIZE.LARGE,
  isLoading: false,
  src: null,
  name: "logo",
};
