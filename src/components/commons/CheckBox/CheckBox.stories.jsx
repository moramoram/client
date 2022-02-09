import React from "react";

import Checkbox from ".";
import { Background } from "@/foundations";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

export const Default = (args) => (
  <>
    <Background {...args}>
      <Checkbox {...args} />
    </Background>
  </>
);

export const All = () => (
  <>
    <Background theme="light">
      <Checkbox theme="light" />
    </Background>
    <Background theme="dark">
      <Checkbox theme="dark" />
    </Background>
  </>
);
