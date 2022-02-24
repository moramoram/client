import React from "react";

import BlinkCursor from ".";
import { Typography } from "@/foundations";

export default {
  title: "Patterns/BlinkCursor",
  component: BlinkCursor,
};

export const Default = () => (
  <Typography type="h1">
    <BlinkCursor />
  </Typography>
);
