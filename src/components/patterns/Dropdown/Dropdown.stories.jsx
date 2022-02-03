import React from "react";

import Dropdown from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Dropdown",
  component: Dropdown,
};

export const Default = (args) => (
  <Background {...args} style={{ height: "300px" }}>
    <Dropdown {...args} />
  </Background>
);

Default.args = {
  items: [
    {
      name: "mypage",
      title: "내 프로필",
      url: "mypage",
    },
    {
      name: "logout",
      title: "로그아웃",
      url: "logout",
    },
  ],
  user: "김싸피",
};
