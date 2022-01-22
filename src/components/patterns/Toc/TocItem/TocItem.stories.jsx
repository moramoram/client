import React from "react";

import { TocItem } from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Toc/TocItem",
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

export const AllTypes = () => (
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

AllTypes.args = {
  children: "메뉴",
  number: "n",
  status: "active",
  theme: "light",
};
