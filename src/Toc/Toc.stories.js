import React from "react";

import { Toc } from "./Toc";
import { TocNav } from "./TocNav";

import { Background } from "../Background/Background";

export default {
  title: "Design System/Toc",
  component: Toc,
};

const items = [
  {
    name: "info",
    title: "공고",
    number: null,
  },
  {
    name: "study",
    title: "스터디",
    number: 5,
  },
  {
    name: "comments",
    title: "댓글",
    number: 20,
  },
];

export const All = (args) => (
  <>
    <Background theme="light">
      <Toc theme="light" {...args} />
    </Background>
    <br />
    <Background theme="dark">
      <Toc theme="dark" {...args} />
    </Background>
  </>
);

All.args = {
  items,
};

export const TocNavbar = (args) => (
  <>
    <TocNav theme="light" {...args} />
    <br />
    <TocNav theme="dark" {...args} />
  </>
);

TocNavbar.args = {
  items,
};
