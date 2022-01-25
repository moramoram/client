import React from "react";
import SubNavbar from "./";

export default {
  title: "Patterns/SubNavbar",
  component: SubNavbar,
};

export const Default = (args) => <SubNavbar {...args}></SubNavbar>;

Default.args = {
  data: [
    {
      id: 0,
      title: "마감임박",
    },
    {
      id: 1,
      title: "최신순",
    },
    {
      id: 2,
      title: "인기순",
    },
  ],
};
