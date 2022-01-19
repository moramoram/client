import React from "react";
import { Input } from "./";

export const Default = (args) => <Input {...args} />;

export default {
  title: "Components/Input",
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
