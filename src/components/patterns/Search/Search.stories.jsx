import React from "react";
import Search from ".";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Search",
  component: Search,
};

export const Default = (args) => (
  <Background {...args}>
    <Search {...args} />
  </Background>
);

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Search theme="light" />
    </Background>
    <Background theme="dark">
      <Search theme="dark" />
    </Background>
  </>
);
