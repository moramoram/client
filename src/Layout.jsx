import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";
import { isLogined } from "@/recoil/auth";

import { Navbar } from "@/containers/commons";
import { colors } from "@/_shared";

import { SignUpModal } from "./components";

const Layout = () => {
  const theme = useRecoilValue(themeState);
  const navType = useRecoilValue(navTypeState);
  const LoginState = useRecoilValue(isLogined);

  return (
    <LayoutBox theme={theme}>
      <SignUpModal />
      <Nav theme={theme} type={navType} isLogin={LoginState} />
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
  z-index: 999;
`;
