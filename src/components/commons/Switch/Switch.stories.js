import React from "react";

import Switch from "./";
import { Background } from "@/foundations";

export default {
  title: "Components/Switch",
  component: Switch,
};

const onToggle = () => {
  // console.log("toggle");
};

export const Default = (args) => (
  <Background {...args}>
    <Switch {...args} />
  </Background>
);

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Switch theme="light" onToggle={onToggle} />
      <br />
      <Switch theme="light" size="small" onToggle={onToggle} />
    </Background>
    <br />
    <Background theme="dark">
      <Switch theme="dark" onToggle={onToggle} />
      <br />
      <Switch theme="dark" size="small" onToggle={onToggle} />
    </Background>
  </>
);
