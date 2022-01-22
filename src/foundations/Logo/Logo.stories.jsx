import React from "react";

import Logo from "./";
import { Background } from "@/foundations";

export default {
  title: "Foundations/Logo",
  component: Logo,
};

export const Default = (args) => (
  <Background {...args}>
    <Logo {...args} />
  </Background>
);

export const AllTypes = () => (
  <div style={{ display: "flex" }}>
    <Background theme="light">
      <Logo theme="light" width="200" />
    </Background>
    <Background theme="blue">
      <Logo theme="blue" width="200" />
    </Background>
    <Background theme="dark">
      <Logo theme="dark" width="200" />
    </Background>
  </div>
);
