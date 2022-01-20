import React from "react";
import SubNavbar from "./";

export default {
  title: "Layouts/SubNavbar",
  component: SubNavbar,
};

export const Default = (args) => (
  <SubNavbar {...args}>{args.children}</SubNavbar>
);

Default.args = {
  items: [
    {
      id: 1,
      title: "마감임박",
    },
    {
      id: 2,
      title: "최신순",
    },
    {
      id: 3,
      title: "인기순",
    },
  ],
};
