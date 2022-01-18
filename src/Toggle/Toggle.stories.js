import React from "react";

import { Toggle } from "./Toggle";
import { Background } from "../Background/Background";
import _ from "lodash";

export default {
  title: "Design System/Toggle",
  component: Toggle,
};

export const Default = (args) => (
  <Background {...args}>
    <Toggle {...args} />
  </Background>
);

export const All = () => (
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
