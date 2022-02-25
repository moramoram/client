import React from "react";
import PropTypes from "prop-types";

import AvatarBase from "./AvatarBase";
import { Image, Initial } from "./Avatar.styled";

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
