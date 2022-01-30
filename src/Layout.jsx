import React, { useEffect } from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";

import { isLoginState } from "@/recoil/auth";
import { modalState, loginModalState } from "@/recoil/modal";
import { navMenuData, navUserData } from "@/recoil/menu";

import { Modal } from "@/components";
import { Navbar, SignUpModal } from "@/containers";
import { colors } from "@/_shared";

const Layout = () => {
  const theme = useRecoilValue(themeState);
  const navType = useRecoilValue(navTypeState);
  const navData = useRecoilValue(navMenuData);
  const userMenuData = useRecoilValue(navUserData);

  const isLogined = useRecoilValue(isLoginState);
  const isloginModal = useRecoilValue(loginModalState);
  const isModal = useRecoilValue(modalState);

  useEffect(() => {
    (isModal || isloginModal) && (document.body.style.overflow = "hidden");
    return () => (document.body.style.overflow = "unset");
  }, [isModal, isloginModal]);

  return (
    <LayoutBox theme={theme}>
      {isModal && <Modal theme={theme} />}
      {isloginModal && <SignUpModal theme={theme} />}
      <Nav
        theme={theme}
        type={navType}
        navData={navData}
        userMenuData={userMenuData}
        isLogin={isLogined}
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
  width: 100vw;
  background: ${(props) => bgColor[props.theme]};
`;

const Nav = styled(Navbar)`
  z-index: 999;
`;
