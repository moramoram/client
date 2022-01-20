import React from "react";

import CommentInput from "./";
import { Background } from "../../Basic";

export default {
  title: "Components/Comment",
  component: CommentInput,
};

export const Default = (args) => (
  <Background {...args}>
    <CommentInput {...args} />
  </Background>
);

export const All = () => (
  <>
    <Background theme="light">
      <CommentInput theme="light" />
    </Background>
    <Background theme="dark">
      <CommentInput theme="dark" />
    </Background>
  </>
);
