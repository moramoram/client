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
    <Background mode="light">
      <Logo mode="light" />
    </Background>
    <Background mode="blue">
      <Logo mode="blue" />
    </Background>
    <Background mode="dark">
      <Logo mode="dark" />
    </Background>
  </>
);

export const Standard = (args) => (
  <Background {...args}>
    <Logo {...args} />
  </Background>
);
