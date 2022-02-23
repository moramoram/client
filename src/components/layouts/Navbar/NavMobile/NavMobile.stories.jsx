import React from "react";
import { NavMobile } from ".";

export default {
  title: "layouts/Navbar/NavMobile",
  component: NavMobile,
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

export const Default = (args) => <NavMobile {...args} />;

Default.args = {
  navData,
  userMenuData,
};

export const AllTypes = () => (
  <>
    <NavMobile
      navData={navData}
      userMenuData={userMenuData}
      theme="light"
      isStatic
    />
    <br />
    <NavMobile
      navData={navData}
      userMenuData={userMenuData}
      theme="dark"
      isStatic
    />
  </>
);
