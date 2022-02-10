import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import AvatarBase from "./AvatarBase";
import { animations, colors } from "@/_shared";

const SIZE = {
  EXTRALARGE: "extraLarge",
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

const Avatar = ({ isLoading, username, src, size, ...props }) => {
  let avatarFigure = <AvatarBase avatar="user" />;
  const a11yProps = {};

  if (isLoading) {
    a11yProps["aria-busy"] = true;
    a11yProps["aria-label"] = "Loading avatar ...";
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  } else if (username && username !== "익명") {
    a11yProps["aria-label"] = username;
    avatarFigure = (
      <Initial size={size} aria-hidden="true">
        {username.substring(0, 1)}
      </Initial>
    );
  }

  return (
    <Image
      size={size}
      isLoading={isLoading}
      src={src}
      {...a11yProps}
      {...props}
    >
      {avatarFigure}
    </Image>
  );
};

Avatar.propTypes = {
  isLoading: PropTypes.bool,
  username: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
};

Avatar.defaultProps = {
  isLoading: false,
  username: null,
  src: null,
  size: "large",
};

export default Avatar;

const sizeNum = {
  extraLarge: 100,
  large: 40,
  medium: 28,
  small: 20,
};

const fontSize = {
  xxLarge: "4.5rem",
  xLarge: "3rem",
  large: "1.25rem",
  medium: "0.875rem",
  small: "0.625rem",
};

const Image = styled.div`
  display: inline-block;
  overflow: hidden;
  object-fit: cover;

  height: ${(props) => sizeNum[props.size]}px;
  width: ${(props) => sizeNum[props.size]}px;
  min-width: ${(props) => sizeNum[props.size]}px;
  border-radius: 50%;

  background-color: ${colors.gray100};

  line-height: ${(props) => sizeNum[props.size]}px;
  text-transform: uppercase;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  svg {
    position: relative;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  ${(props) =>
    props.src &&
    css`
      background: none;
    `}

  ${(props) =>
    props.isLoading &&
    css`
      path {
        animation: ${animations.glow} 1.5s ease-in-out infinite;
      }
    `}
`;

const Initial = styled.div`
  color: ${colors.lightest};
  text-align: center;

  color: ${colors.gray800};
  font-size: ${(props) => fontSize[props.size]};
  line-height: ${(props) => sizeNum[props.size]}px;

  user-select: none;
`;
