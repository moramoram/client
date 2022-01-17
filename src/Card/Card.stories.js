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
    <Card />
    <Card isLoading />
    <Card theme="dark" />
    <Card theme="dark" isLoading />
    <h1>Small Card</h1>
    <hr />
    <CardSmall />
    <CardSmall isLoading />
    <CardSmall theme="dark" />
    <CardSmall theme="dark" isLoading />
  </>
);

All.args = {};
