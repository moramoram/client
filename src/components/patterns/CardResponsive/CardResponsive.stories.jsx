import React from "react";
import CardResponsive from ".";

export default {
  title: "Patterns/CardResponsive",
  component: CardResponsive,
};

export const Default = (args) => (
  <>
    <CardResponsive {...args} />
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

export const AllTypes = (args) => (
  <>
    <CardResponsive {...args} />
    <CardResponsive isLiked {...args} />
    <CardResponsive isLoading {...args} />
    <CardResponsive theme="dark" {...args} />
    <CardResponsive theme="dark" isLiked {...args} />
    <CardResponsive theme="dark" isLoading {...args} />
  </>
);

AllTypes.args = {
  contents: {
    title: "주니어 웹 개발자 채용",
    subtitle: "싸피 디자인 시스템",
    highlight: "모집중",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
};
