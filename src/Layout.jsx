import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";
import { navMenuData, navUserData } from "@/recoil/menu";

import { Navbar } from "@/containers/commons";
import { colors } from "@/_shared";

const Layout = () => {
  const theme = useRecoilValue(themeState);
  const navType = useRecoilValue(navTypeState);
  const navData = useRecoilValue(navMenuData);
  const userMenuData = useRecoilValue(navUserData);

  return (
    <LayoutBox theme={theme}>
      <Nav
        theme={theme}
        type={navType}
        navData={navData}
        userMenuData={userMenuData}
      />
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
  width: 100%;
  background: ${(props) => bgColor[props.theme]};
`;

const Nav = styled(Navbar)`
  z-index: 9999;
`;
