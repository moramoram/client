import React from "react";
import NavbarResponsive from ".";

export default {
  title: "Containers/NavbarResponsive",
  component: NavbarResponsive,
};

const navData = [
  {
    name: "community",
    title: "커뮤니티",
    url: "community",
  },
  {
    name: "study",
    title: "스터디",
    url: "study",
  },
  {
    name: "jobs",
    title: "취업정보",
    url: "job",
  },
];

const userMenuData = [
  {
    name: "profile",
    title: "내 프로필",
    url: "profile",
  },
  {
    name: "logout",
    title: "로그아웃",
    url: "logout",
  },
];

export const Default = (args) => <NavbarResponsive {...args} />;

Default.args = {
  navData,
  userMenuData,
};

export const AllTypes = () => (
  <>
    <NavbarResponsive
      theme="light"
      isStatic
      isLogin={false}
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <NavbarResponsive
      theme="light"
      isStatic
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <NavbarResponsive
      theme="light"
      type="transparent"
      isStatic
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <NavbarResponsive
      theme="dark"
      isStatic
      isLogin={false}
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <NavbarResponsive
      theme="dark"
      isStatic
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <NavbarResponsive
      theme="dark"
      type="transparent"
      isStatic
      navData={navData}
      userMenuData={userMenuData}
    />
  </>
);
