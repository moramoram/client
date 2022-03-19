import React from "react";
import PropTypes from "prop-types";

import { useRecoilValue } from "recoil";
import { auth } from "@/recoil";

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
  const userData = useRecoilValue(auth);
  const isPc = useMediaQuery({ query: "(min-width:980px)" });
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });

  return (
    <>
      {isPc && <NavDefault userData={userData} {...props} />}
      {isMobile && <NavMobile userData={userData} {...props} />}
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
