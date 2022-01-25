import React from "react";

import Switch from "./";
import { Background } from "@/foundations";

export default {
  title: "Components/Switch",
  component: Switch,
};

export const Default = (args) => (
  <Background {...args}>
    <Switch {...args} />
  </Background>
);

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Switch theme="light" />
    </Background>
    <br />
    <Background theme="dark">
      <Switch theme="dark" />
    </Background>
  </>
);
