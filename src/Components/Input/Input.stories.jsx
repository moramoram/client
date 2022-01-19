import React from "react";
import Input from "./Input";

export const Default = (args) => <Input {...args} />;

export default {
  title: "Design System/Input",
  component: Input,
};

export const All = () => (
  <div>
    <Input theme="light" />
    <Input theme="light" icon="mail" />
    <Input theme="dark" />
    <Input theme="dark" icon="mail" />
  </div>
);

export const Dark = (args) => (
  <div>
    <Input theme="dark" />
    <Input theme="dark" icon="mail" />
  </div>
);
