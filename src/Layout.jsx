import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";
import { isLoginState } from "@/recoil/auth";
import { modalState, loginModalState } from "@/recoil/modal";

import { Modal } from "@/components";
import { Navbar } from "@/containers/commons";
import { colors } from "@/_shared";

import { SignUpModal } from "@/containers";

const Layout = () => {
  const theme = useRecoilValue(themeState);
  const navType = useRecoilValue(navTypeState);
  const isLogined = useRecoilValue(isLoginState);
  const isloginModal = useRecoilValue(loginModalState);
  const isModal = useRecoilValue(modalState);

  return (
    <LayoutBox theme={theme}>
      {isModal && <Modal />}
      {isloginModal && <SignUpModal />}
      <Nav theme={theme} type={navType} isLogin={isLogined} />
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
