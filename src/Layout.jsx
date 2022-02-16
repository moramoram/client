import React, { Suspense, useEffect } from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";

import { isLoginState } from "@/recoil/auth";
import {
  modalState,
  loginModalState,
  createModalState,
  updateModalState,
  smallModalState,
  submitModalState,
} from "@/recoil/modal";
import { navMenuData, navUserData } from "@/recoil/menu";

import {
  Navbar,
  ScrollToTop,
  Footer,
  SignUpModal,
  CommunityCreate,
  CommunityUpdate,
  AuthModal,
  SmallModal,
  SubmitModal,
} from "@/containers";
import { colors } from "@/_shared";

const Layout = () => {
  const theme = useRecoilValue(themeState);
  const navType = useRecoilValue(navTypeState);
  const navData = useRecoilValue(navMenuData);
  const userMenuData = useRecoilValue(navUserData);

  const isLogined = useRecoilValue(isLoginState);
  const isloginModal = useRecoilValue(loginModalState);
  const isCreateModal = useRecoilValue(createModalState);
  const isUpdateModal = useRecoilValue(updateModalState);
  const isAuthModal = useRecoilValue(modalState);
  const isSmallModal = useRecoilValue(smallModalState);
  const isSubmitModal = useRecoilValue(submitModalState);

  useEffect(() => {
    (isAuthModal ||
      isloginModal ||
      isCreateModal ||
      isUpdateModal ||
      isSmallModal ||
      isSubmitModal) &&
      (document.body.style.overflow = "hidden");
    return () => (document.body.style.overflow = "unset");
  }, [
    isAuthModal,
    isloginModal,
    isCreateModal,
    isUpdateModal,
    isSmallModal,
    isSubmitModal,
  ]);

  return (
    <LayoutBox theme={theme}>
      {isAuthModal && <AuthModal theme={theme} />}
      {isSmallModal && <SmallModal theme={theme} />}
      {isSubmitModal && <SubmitModal theme={theme} />}
      {isloginModal && <SignUpModal theme={theme} />}
      {isCreateModal && <CommunityCreate theme={theme} />}
      {isUpdateModal && <CommunityUpdate theme={theme} />}
      <Suspense fallback={<div />}>
        <Nav
          theme={theme}
          type={navType}
          navData={navData}
          userMenuData={userMenuData}
          isLogin={isLogined}
        />
      </Suspense>

      <ContentBox>
        <Outlet />
        <Footer theme={theme} />
      </ContentBox>
      <ScrollToTop />
    </LayoutBox>
  );
};

export default Layout;

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

const LayoutBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => bgColor[props.theme]};
`;

const ContentBox = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 500px;

  @media screen and (max-width: 540px) {
    padding-bottom: 800px;
  }
`;

const Nav = styled(Navbar)`
  z-index: 999;
`;
