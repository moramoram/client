import React from "react";
import { TocNav } from "./";

export default {
  title: "Patterns/Toc/Navbar",
  component: TocNav,
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

export const Default = (args) => <TocNav {...args} />;

Default.args = {
  items,
};

export const AllTypes = () => (
  <>
    <TocNav theme="light" items={items} />
    <br />
    <TocNav theme="dark" items={items} />
  </>
);
