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
    <Background>
      <Logo />
    </Background>
    <Background isBlue>
      <Logo type="blue" />
    </Background>
    <Background isDarkmode>
      <Logo type="dark" />
    </Background>
  </>
);

export const Standard = (args) => (
  <Background {...args}>
    <Logo {...args} />
  </Background>
);
