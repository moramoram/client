import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState } from "./recoil/theme";

import { Navbar } from "@/containers/commons";

const Layout = (props) => {
  const theme = useRecoilValue(themeState);

  return (
    // 네비게이션바, 모달, 알림 컴포넌트 추가예정
    <LayoutBox>
      <Nav theme={theme} />
      <Outlet />
    </LayoutBox>
  );
};

export default Layout;

const LayoutBox = styled.div`
  width: 100%;
`;

const Nav = styled(Navbar)`
  position: sticky;
  top: 0;
  right: 0;
`;
