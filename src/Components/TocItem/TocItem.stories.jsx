import React from "react";

import TocItem from "./TocItem";
import { Background } from "../../Background/Background";

export default {
  title: "Components/TocItem",
  component: TocItem,
};

export const Default = (args) => (
  <Background {...args}>
    <TocItem {...args} />
  </Background>
);

Default.args = {
  children: "메뉴",
  number: "n",
  status: "active",
  theme: "light",
};

export const All = () => (
  <>
    <h1>Light theme</h1>
    <hr />
    <Background theme="light">
      <TocItem theme="light" status="active" />
      <TocItem theme="light" status="default" />
    </Background>
    <br />
    <h1>Dark theme</h1>
    <hr />
    <Background theme="dark">
      <TocItem theme="dark" status="active" />
      <TocItem theme="dark" status="default" />
    </Background>
  </>
);

All.args = {
  children: "메뉴",
  number: "n",
  status: "active",
  theme: "light",
};
