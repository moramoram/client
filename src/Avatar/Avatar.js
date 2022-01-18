import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { UserAlt } from "./UserAlt";

import { color } from "../shared/styles";
import { glow } from "../shared/animation";

const SIZE = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

export const Avatar = ({ isLoading, username, src, size, ...props }) => {
  let avatarFigure = <UserAlt />;
  const a11yProps = {};

  if (isLoading) {
    a11yProps["aria-busy"] = true;
    a11yProps["aria-label"] = "Loading avatar ...";
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  } else {
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
  username: "김싸페",
  src: null,
  size: "large",
};

const sizeNum = {
  large: 40,
  medium: 28,
  small: 20,
};

const fontSize = {
  large: "1.25rem",
  medium: "0.875rem",
  small: "0.625rem",
};

const Image = styled.div`
  display: inline-block;
  vertical-align: top;
  overflow: hidden;

  height: ${(props) => sizeNum[props.size]}px;
  width: ${(props) => sizeNum[props.size]}px;
  border-radius: 50%;

  background-color: ${color.gray100};

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

  path {
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;

const Initial = styled.div`
  color: ${color.lightest};
  text-align: center;

  color: ${color.gray800};
  font-size: ${(props) => fontSize[props.size]};
  line-height: ${(props) => sizeNum[props.size]}px;
`;
