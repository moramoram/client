import React from "react";
import PropTypes from "prop-types";

import { ImageBoxWrapper } from "./ImageBox.styled";
import { Logo } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const SIZE = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

const ImageBox = ({ theme, isLoading, src, name, ...props }) => {
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
};

ImageBox.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  src: PropTypes.string,
  name: PropTypes.string,
};

ImageBox.defaultProps = {
  theme: THEME.LIGHT,
  size: SIZE.LARGE,
  isLoading: false,
  isDisabled: false,
  src: null,
  name: "thumbnail",
};

export default ImageBox;
