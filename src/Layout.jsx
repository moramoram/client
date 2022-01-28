import React, { useEffect } from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";

import { Navbar } from "@/containers/commons";
import { colors } from "@/_shared";

const Layout = () => {
  const theme = useRecoilValue(themeState);
  const navType = useRecoilValue(navTypeState);

  return (
    <LayoutBox theme={theme}>
      <Nav theme={theme} type={navType} />
      <Outlet />
    </LayoutBox>
  );
};

export default Layout;

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

const LayoutBox = styled.div`
  width: 100vw;
  background: ${(props) => bgColor[props.theme]};
`;

const Nav = styled(Navbar)`
  z-index: 9999;
`;
