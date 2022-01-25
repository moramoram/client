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
  <div style={{ display: "flex", width: "100%" }}>
    <Background theme="light">
      <Logo theme="light" width="100%" />
    </Background>
    <Background theme="blue">
      <Logo theme="blue" width="100%" />
    </Background>
    <Background theme="dark">
      <Logo theme="dark" width="100%" />
    </Background>
  </div>
);
