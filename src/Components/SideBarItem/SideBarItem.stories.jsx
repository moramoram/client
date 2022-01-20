import React from "react";
import SideBarItem from "./";

export default {
  title: "Components/SideBarItem",
  component: SideBarItem,
};

export const Default = (args) => <SideBarItem {...args} />;

Default.args = {
  contents: [
    {
      title: "직무",
      description: "프론트엔드",
      icon: "briefcase",
    },
    {
      title: "고용형태",
      description: "정규직",
      icon: "briefcase",
    },
    {
      title: "경력",
      description: "신입",
      icon: "briefcase",
    },
    {
      title: "근무위치",
      description: "서울 강남구",
      icon: "briefcase",
    },
  ],
  badges: ["JavaScript", "TypeScript", "Vue.js", "React", "Redux", "Svelte"],
};

Default.args = {
  contents: {
    title: "직무",
    description: "프론트엔드",
    icon: "briefcase",
  },
};

export const All = (args) => (
  <>
    <SideBarItem {...args} />
    <SideBarItem {...args} />
    <SideBarItem {...args} />
    <SideBarItem {...args} />
    <h1> Loading Light Sub Navbar Item</h1>
    <hr />
    <p />
    <SideBarItem {...args} isLoading />
    <SideBarItem {...args} isLoading />
    <SideBarItem {...args} isLoading />
    <SideBarItem {...args} isLoading />
    <h1>Dark Sub Navbar Item</h1>
    <hr />
    <p />
    <SideBarItem theme="dark" {...args} />
    <SideBarItem theme="dark" {...args} />
    <SideBarItem theme="dark" {...args} />
    <SideBarItem theme="dark" {...args} />
    <h1> Loading Dark Sub Navbar Item</h1>
    <hr />
    <p />
    <SideBarItem {...args} theme="dark" isLoading />
    <SideBarItem {...args} theme="dark" isLoading />
    <SideBarItem {...args} theme="dark" isLoading />
    <SideBarItem {...args} theme="dark" isLoading />
  </>
);

All.args = {
  contents: {
    title: "직무",
    description: "프론트엔드",
    icon: "briefcase",
  },
};
