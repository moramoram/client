import React from "react";

import CommentInput from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Comment",
  component: CommentInput,
};

export const Default = (args) => (
  <Background {...args}>
    <CommentInput {...args} />
  </Background>
);

export const AllTypes = () => (
  <>
    <Background theme="light">
      <CommentInput theme="light" />
    </Background>
    <Background theme="dark">
      <CommentInput theme="dark" />
    </Background>
  </>
);
