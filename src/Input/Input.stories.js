import React from "react";
import { Input } from "./Input";
import { Icon } from "../Icon/Icon";

export const Default = (args) => <Input {...args} />;

export default {
  title: "Design System/Input",
  component: Input,
};

export const All = () => (
  <div>
    <Input theme="light" icon="bookmark" />
    <Input theme="light" />
    <Input theme="dark" />
  </div>
);

export const Dark = (args) => (
  <div>
    <Input theme="dark" />
  </div>
);
