import React from "react";
import PropTypes from "prop-types";

import { Svg } from "./BookMark.styled";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const MODE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const IconBookMark = ({ ...props }) => {
  return (
    <>
      <Svg
        height="20"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8.85714 15.4444L16.7143 21V3.22222C16.7143 2.63285 16.4778 2.06762 16.0568 1.65087C15.6358 1.23413 15.0648 1 14.4694 1H3.2449C2.64951 1 2.07852 1.23413 1.65752 1.65087C1.23652 2.06762 1 2.63285 1 3.22222V21L8.85714 15.4444Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        />
      </Svg>
    </>
  );
};

IconBookMark.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  mode: PropTypes.oneOf(Object.values(MODE)),
  block: PropTypes.bool,
};

IconBookMark.defaultProps = {
  theme: THEME.LIGHT,
  mode: MODE.PRIMARY,
  block: false,
};

export default IconBookMark;
