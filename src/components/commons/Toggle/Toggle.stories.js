import React from "react";

import Toggle from "./";
import { Background } from "@/foundations";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const Default = (args) => (
  <Background {...args}>
    <Toggle {...args} />
  </Background>
);

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Toggle theme="light" />
    </Background>
    <br />
    <Background theme="dark">
      <Toggle theme="dark" />
    </Background>
  </>
);
