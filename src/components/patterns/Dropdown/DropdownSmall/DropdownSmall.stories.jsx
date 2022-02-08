import React from "react";

import DropdownSmall from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Dropdown/DropdownSmall",
  component: DropdownSmall,
};

export const Default = (args) => (
  <Background style={{ height: "300px" }} {...args}>
    <DropdownSmall {...args} />
  </Background>
);

Default.args = {
  items: [
    {
      name: "edit",
      title: "수정",
      onClick: () => console.log("수정"),
    },
    {
      name: "delete",
      title: "삭제",
      onClick: () => console.log("삭제"),
    },
  ],
};
