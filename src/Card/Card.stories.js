import React from "react";
import { Card } from "./Card";
import { CardSmall } from "./CardSmall";

export default {
  title: "Design System/Card",
  component: Card,
};

export const Default = (args) => (
  <>
    <h1>Card</h1>
    <Card {...args} />
    <h1>Small Card</h1>
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
    <h1>Card</h1>
    <hr />
    <Card {...args} />
    <Card isLiked {...args} />
    <Card isLoading {...args} />
    <Card theme="dark" {...args} />
    <Card theme="dark" isLiked {...args} />
    <Card theme="dark" isLoading {...args} />
    <h1>Small Card</h1>
    <hr />
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
