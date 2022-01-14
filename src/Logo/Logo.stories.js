import React from "react";
// import styled from "styled-components";

import { Background } from "../Background/Background";
import { Logo } from "./Logo";

export default {
  title: "Design System/Logo",
  component: Logo,
};

export const All = (args) => (
  <>
    <Background theme="light">
      <Logo theme="light" />
    </Background>
    <Background theme="blue">
      <Logo theme="blue" />
    </Background>
    <Background theme="dark">
      <Logo theme="dark" />
    </Background>
  </>
);

export const Standard = (args) => (
  <Background {...args}>
    <Logo {...args} />
  </Background>
);
