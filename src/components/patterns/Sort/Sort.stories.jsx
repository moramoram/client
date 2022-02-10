import React from "react";
import Sort from ".";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Sort",
  component: Sort,
};

const sampleData = {
  items: [
    {
      name: "new",
      title: "최신순",
    },
    {
      name: "popular",
      title: "인기순",
    },
  ],
};

export const Default = (args) => (
  <Background {...args}>
    <Sort {...args} />
  </Background>
);

Default.args = {
  ...sampleData,
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Sort theme="light" {...sampleData} />
    </Background>
    <Background theme="dark">
      <Sort theme="dark" {...sampleData} />
    </Background>
  </>
);
