import React from "react";

import { CommentInput } from "./CommentInput";
import { Background } from "../Background/Background";

export default {
  title: "Design System/Comment",
  component: CommentInput,
};

export const Default = (args) => (
  <Background {...args}>
    <CommentInput {...args} />
  </Background>
);

export const All = (args) => (
  <>
    <Background theme="light">
      <CommentInput theme="light" {...args} />
    </Background>
    <Background theme="dark">
      <CommentInput theme="dark" {...args} />
    </Background>
  </>
);
