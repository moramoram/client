import React from "react";
import { NavDefault } from ".";

export default {
  title: "layouts/Navbar/NavDefault",
  component: NavDefault,
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

export const Default = (args) => <NavDefault {...args} />;

Default.args = {
  navData,
};

export const AllTypes = () => (
  <>
    <NavDefault theme="light" isStatic isLogin={false} navData={navData} />
    <br />
    <NavDefault theme="light" isStatic navData={navData} />
    <br />
    <NavDefault theme="light" type="transparent" isStatic navData={navData} />
    <br />
    <NavDefault theme="dark" isStatic isLogin={false} navData={navData} />
    <br />
    <NavDefault theme="dark" isStatic navData={navData} />
    <br />
    <NavDefault theme="dark" type="transparent" isStatic navData={navData} />
  </>
);
