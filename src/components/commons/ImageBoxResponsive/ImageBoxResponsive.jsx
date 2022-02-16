import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Logo } from "@/foundations";
import { colors, loadings } from "@/_shared";

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

const imageBgColor = {
  light: colors.gray25,
  dark: colors.gray900,
};

const Layout = styled.div`
  position: relative;

  :before {
    content: "";
    display: block;
    padding-top: 50%;
  }
`;

const ImageBoxWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  border-radius: 8px;
  overflow: hidden;

  background: ${(props) => imageBgColor[props.theme]};
  animation: ${(props) => props.isLoading && loadings[props.theme]};

  svg {
    position: absolute;
    top: 33%;
    left: 33%;

    width: 33%;
    height: 33%;
    filter: ${(props) =>
      props.isDisabled && `blur(4px) grayscale(70%) brightness(50%)`};
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) =>
      props.isDisabled && `blur(3px) grayscale(70%) brightness(50%)`};
  }
`;
