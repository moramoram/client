import React from "react";

import AutoTyping from ".";
import { Typography } from "@/foundations";

export default {
  title: "Patterns/AutoTyping",
  component: AutoTyping,
};

export const Default = (args) => (
  <Typography type="h1">
    <AutoTyping {...args} />
  </Typography>
);

Default.args = {
  arrayRef: ["Type", "Any", "Text"],
};
