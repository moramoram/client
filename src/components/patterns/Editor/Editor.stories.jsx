import React from "react";

import Editor from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Editor",
  component: Editor,
};

export const Default = (args) => <Editor {...args} />;

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Editor theme="light" />
    </Background>
    <Background theme="dark">
      <Editor theme="dark" />
    </Background>
  </>
);
