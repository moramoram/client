import React from "react";

import Logo from "./Logo";
import { Background } from "../../Background/Background";

export default {
  title: "Basic/Logo",
  component: Logo,
};

export const Default = (args) => (
  <Background {...args}>
    <Logo {...args} />
  </Background>
);

export const All = () => (
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
