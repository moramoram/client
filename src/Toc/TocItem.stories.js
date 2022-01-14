import React from "react";

import { TocItem } from "./TocItem";
import { Toc } from "./Toc";
import { TocNav } from "./TocNav";

import { Background } from "../Background/Background";

export default {
  title: "Design System/Toc",
  component: TocItem,
};

export const Default = (args) => (
  <Background {...args}>
    <TocItem {...args} />
  </Background>
);

Default.args = {
  children: "Menu",
  number: "n",
  status: "active",
  theme: "light",
};

export const All = (args) => (
  <>
    <h1>Light theme</h1>
    <hr />
    <Background theme="light">
      <TocItem theme="light" status="active" number={"n"}>
        메뉴
      </TocItem>
      <TocItem theme="light" status="default" number={"n"}>
        메뉴
      </TocItem>
    </Background>
    <br />
    <h1>Dark theme</h1>
    <hr />
    <Background theme="dark">
      <TocItem theme="dark" status="active" number={"n"}>
        메뉴
      </TocItem>
      <TocItem theme="dark" status="default" number={"n"}>
        메뉴
      </TocItem>
    </Background>
  </>
);

All.storyName = "All Items";

export const Layout = (args) => (
  <>
    <Background theme="light">
      <Toc theme="light" />
    </Background>
    <br />
    <Background theme="dark">
      <Toc theme="dark" />
    </Background>
  </>
);

export const TocNavBar = (args) => (
  <>
    <TocNav theme="light" />
    <br />
    <TocNav theme="dark" />
  </>
);
