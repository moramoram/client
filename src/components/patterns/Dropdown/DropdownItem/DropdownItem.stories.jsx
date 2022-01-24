import React from "react";

import { DropdownItem } from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Dropdown/DropdownItem",
  component: DropdownItem,
};

export const Default = (args) => (
  <Background {...args}>
    <DropdownItem {...args} />
  </Background>
);

Default.args = {
  children: "메뉴",
};
