import React from "react";
import InputWithLabel from "./";

export const Default = (args) => <InputWithLabel {...args} />;

export default {
  title: "Components/InputWithLabel",
  component: InputWithLabel,
};

export const All = () => (
  <div>
    <InputWithLabel theme="light" />
    <p />
    <InputWithLabel theme="light" status="hint" />
    <p />
    <InputWithLabel theme="light" status="error" />
    <p />
    <InputWithLabel theme="dark" />
    <p />
    <InputWithLabel theme="dark" status="hint" />
    <p />
    <InputWithLabel theme="dark" status="error" />
  </div>
);

export const Dark = (args) => (
  <div>
    <InputWithLabel theme="dark" />
    <p />
    <InputWithLabel theme="dark" status="hint" />
    <p />
    <InputWithLabel theme="dark" status="error" />
  </div>
);
