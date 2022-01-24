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
  items: ["내 프로필", "정보 수정"],
  user: "김싸피",
};
