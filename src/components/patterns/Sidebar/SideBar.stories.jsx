import React from "react";
import Sidebar from ".";

export default {
  title: "Patterns/Sidebar",
  component: Sidebar,
};

const sampleData = {
  contents: [
    {
      title: "직무",
      description: "프론트엔드",
      icon: "briefcase",
    },
    {
      title: "고용형태",
      description: "정규직",
      icon: "building",
    },
    {
      title: "경력",
      description: "신입",
      icon: "monitor",
    },
    {
      title: "근무위치",
      description: "서울 강남구",
      icon: "mapPin",
    },
  ],
  badges: ["JavaScript", "TypeScript", "Vue.js", "React", "Redux", "Svelte"],
};

export const Default = (args) => <Sidebar {...args} />;

Default.args = {
  ...sampleData,
};

export const AllTypes = () => (
  <>
    <Sidebar {...sampleData} />
    <Sidebar theme="dark" {...sampleData} />
  </>
);
