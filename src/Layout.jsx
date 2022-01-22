import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    // 네비게이션바, 모달, 알림 컴포넌트 추가예정
    <>
      <h1>기본레이아웃</h1>
      <Outlet />
    </>
  );
};

export default Layout;
