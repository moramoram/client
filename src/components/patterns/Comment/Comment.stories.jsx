import React from "react";

import Comment from "./";
import { Background } from "@/foundations";

import { daysFromToday } from "@/utils";

export default {
  title: "Patterns/Comment",
  component: Comment,
};

export const Default = (args) => <Comment {...args} />;

Default.args = {
  username: "",
  src: "",
  created: daysFromToday("2022-01-24"),
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Comment theme="light" />
    </Background>
    <Background theme="dark">
      <Comment theme="dark" />
    </Background>
  </>
);
