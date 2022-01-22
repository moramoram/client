import React from "react";
import Card from "./";

export default {
  title: "Patterns/Card",
  component: Card,
};

export const Default = (args) => (
  <>
    <Card {...args} />
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
    <Card {...args} />
    <Card isLiked {...args} />
    <Card isLoading {...args} />
    <Card theme="dark" {...args} />
    <Card theme="dark" isLiked {...args} />
    <Card theme="dark" isLoading {...args} />
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
