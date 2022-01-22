import React from "react";

import Toc from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Toc",
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

export const Default = (args) => (
  <Background {...args}>
    <Toc {...args} />
  </Background>
);

Default.args = {
  items,
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Toc theme="light" items={items} />
    </Background>
    <br />
    <Background theme="dark">
      <Toc theme="dark" items={items} />
    </Background>
  </>
);
