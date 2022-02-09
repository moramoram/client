import React from "react";

import CheckBox from "./";
import { Background } from "@/foundations";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
};

export const Default = (args) => (
  <>
    <Background {...args}>
      <CheckBox {...args} />
    </Background>
  </>
);

export const All = () => (
  <>
    <Background theme="light">
      <CheckBox theme="light" />
    </Background>
    <Background theme="dark">
      <CheckBox theme="dark" />
    </Background>
  </>
);
