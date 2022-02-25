import React from "react";
import PropTypes from "prop-types";

import { Layout, ImageBoxWrapper } from "./ImageBoxResponsive.styled";
import { Logo } from "@/foundations";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const ImageBoxResponsive = ({ theme, isLoading, src, name, ...props }) => {
  let imageContent = <Logo theme={theme} />;
  const a11yProps = {};
  const onErrorImg = (e) => {
    e.target.src = "/images/Icon.svg";
  };

  if (isLoading) {
    imageContent = null;
    a11yProps["aria-busy"] = true;
    a11yProps["aria-label"] = "Loading";
  } else if (src) {
    imageContent = <img src={src} alt={name} onError={onErrorImg} />;
  }

  return (
    <Layout>
      <ImageBoxWrapper
        theme={theme}
        isLoading={isLoading}
        {...a11yProps}
        {...props}
      >
        {imageContent}
      </ImageBoxWrapper>
    </Layout>
  );
};

ImageBoxResponsive.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  src: PropTypes.string,
  name: PropTypes.string,
};

ImageBoxResponsive.defaultProps = {
  theme: THEME.LIGHT,
  isLoading: false,
  isDisabled: false,
  src: null,
  name: "thumbnail",
};

export default ImageBoxResponsive;
