import React from "react";
import { SubNavbarItem } from "./SubNavbarItem";

export const Standard = (args) => (
  <SubNavbarItem {...args}>{args.children}</SubNavbarItem>
);
Standard.args = {
  children: "사이드바 아이템",
};

export default {
  title: "Design System/SubNavbarItem",
  component: SubNavbarItem,
};

export const Primary = (args) => <SubNavbarItem>Primary</SubNavbarItem>;

Standard.args = {
  children: "사이드바 아이템",
  isActive: false,
  isDarkmode: false,
};

Primary.storyName = "Primary";
