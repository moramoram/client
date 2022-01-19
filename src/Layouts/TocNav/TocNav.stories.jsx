import React from "react";

import TocNav from "./TocNav";

export default {
  title: "Layouts/TocNavbar",
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

export const All = () => (
  <>
    <TocNav theme="light" items={items} />
    <br />
    <TocNav theme="dark" items={items} />
  </>
);
