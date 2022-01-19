import React from "react";
import Sidebar from "./SideBar";

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
};

export const Default = (args) => <Sidebar {...args} />;

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

export const All = (args) => (
  <>
    <Sidebar {...args} />
    <Sidebar theme="dark" {...args} />
  </>
);

All.args = {
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
