import React from "react";
import PropTypes from "prop-types";

import { useMediaQuery } from "react-responsive";

import { NavDefault } from "./NavDefault";
import { NavMobile } from "./NavMobile";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

const Navbar = ({ ...props }) => {
  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:979px)",
  });

  return (
    <>
      {isPc && <NavDefault {...props} />}
      {isMobile && <NavMobile {...props} />}
    </>
  );
};

Navbar.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  isLogin: PropTypes.bool,
};

Navbar.defaultProps = {
  theme: THEME.LIGHT,
  type: TYPE.DEFAULT,
  isLogin: true,
};

export default Navbar;
