import React, { Suspense, useEffect } from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState, navTypeState, isLoginState } from "@/recoil";

import {
  modalState,
  loginModalState,
  createModalState,
  updateModalState,
  smallModalState,
  submitModalState,
  deleteModalState,
} from "@/recoil/modal";
import { navMenuData, navUserData } from "@/recoil/menu";

import ErrorPage from "@/pages/CommonPage/ErrorPage";

import {
  Navbar,
  ScrollToTop,
  Footer,
  SignUpModal,
  AuthModal,
  SmallModal,
  SubmitModal,
  ErrorBoundary,
  DeleteModal,
} from "@/containers/Common";

// import { CommunityCreate, CommunityUpdate } from "@/containers/CommunityPage";
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
  const isDeleteModal = useRecoilValue(deleteModalState);

  useEffect(() => {
    (isAuthModal ||
      isloginModal ||
      isCreateModal ||
      isUpdateModal ||
      isSmallModal ||
      isSubmitModal ||
      isDeleteModal) &&
      (document.body.style.overflow = "hidden");
    return () => (document.body.style.overflow = "unset");
  }, [
    isAuthModal,
    isloginModal,
    isCreateModal,
    isUpdateModal,
    isSmallModal,
    isSubmitModal,
    isDeleteModal,
  ]);

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      {isAuthModal && <AuthModal theme={theme} />}
      {isSmallModal && <SmallModal theme={theme} />}
      {isDeleteModal && <DeleteModal theme={theme} />}
      {isSubmitModal && <SubmitModal theme={theme} />}
      {isloginModal && <SignUpModal theme={theme} />}
      {/* {isCreateModal && <CommunityCreate theme={theme} />}
      {isUpdateModal && <CommunityUpdate theme={theme} />} */}
      <Suspense fallback={<div />}>
        <Nav
          theme={theme}
          type={navType}
          navData={navData}
          userMenuData={userMenuData}
          isLogin={isLogined}
        />
      </Suspense>
      <LayoutBox theme={theme}>
        <ContentBox>
          <Outlet />
        </ContentBox>
        <ScrollToTop />
        <Footer theme={theme} />
      </LayoutBox>
    </ErrorBoundary>
  );
};

export default Layout;

const bgColor = {
  light: colors.white,
  dark: colors.black,
};

const LayoutBox = styled.div`
  position: relative;
  background: ${(props) => bgColor[props.theme]};
`;

const ContentBox = styled.main`
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
