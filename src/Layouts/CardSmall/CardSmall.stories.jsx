import React from "react";
import CardSmall from ".";

export default {
  title: "Layouts/Card",
  component: CardSmall,
};

export const Default = (args) => (
  <>
    <CardSmall {...args} />
  </>
);

Default.args = {
  contents: {
    title: "주니어 웹 개발자 채용",
    subtitle: "싸피 디자인 시스템",
    highlight: "모집중",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
};

export const All = (args) => (
  <>
    <CardSmall {...args} />
    <CardSmall isLoading {...args} />
    <CardSmall theme="dark" {...args} />
    <CardSmall theme="dark" isLoading {...args} />
  </>
);

All.args = {
  contents: {
    title: "주니어 웹 개발자 채용",
    subtitle: "싸피 디자인 시스템",
    highlight: "모집중",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
};
