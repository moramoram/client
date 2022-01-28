import React from "react";
import PropTypes from "prop-types";

import { useMediaQuery } from "react-responsive";

import Navbar from "../Navbar";
import { NavVertical } from "../NavVertical";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const TYPE = {
  DEFAULT: "default",
  TRANSPARENT: "transparent",
};

const NavbarResponsive = ({ ...props }) => {
  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:979px)",
  });

  return (
    <>
      {isPc && <Navbar {...props} />}
      {isMobile && <NavVertical {...props} />}
    </>
  );
};

NavbarResponsive.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  isLogin: PropTypes.bool,
  isStatic: PropTypes.bool,
};

NavbarResponsive.defaultProps = {
  theme: THEME.LIGHT,
  type: TYPE.DEFAULT,
  isLogin: true,
  isStatic: false,
};

export default NavbarResponsive;
