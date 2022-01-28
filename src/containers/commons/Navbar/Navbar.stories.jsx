import React from "react";
import Navbar from ".";

export default {
  title: "Containers/Navbar",
  component: Navbar,
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

export const Default = (args) => <Navbar {...args} />;

Default.args = {
  navData,
  userMenuData,
};

export const AllTypes = () => (
  <>
    <Navbar
      theme="light"
      isStatic
      isLogin={false}
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <Navbar
      theme="light"
      isStatic
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <Navbar
      theme="light"
      type="transparent"
      isStatic
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <Navbar
      theme="dark"
      isStatic
      isLogin={false}
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <Navbar
      theme="dark"
      isStatic
      navData={navData}
      userMenuData={userMenuData}
    />
    <br />
    <Navbar
      theme="dark"
      type="transparent"
      isStatic
      navData={navData}
      userMenuData={userMenuData}
    />
  </>
);
