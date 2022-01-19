import React from "react";
import InputLabel from "./InputLabel";

export const Default = (args) => <InputLabel {...args} />;

export default {
  title: "Design System/InputLabel",
  component: InputLabel,
};

export const All = () => (
  <div>
    <InputLabel theme="light" />
    <p />
    <InputLabel theme="light" status="hint" />
    <p />
    <InputLabel theme="light" status="error" />
    <p />
    <InputLabel theme="dark" />
    <p />
    <InputLabel theme="dark" status="hint" />
    <p />
    <InputLabel theme="dark" status="error" />
  </div>
);

export const Dark = (args) => (
  <div>
    <InputLabel theme="dark" />
    <p />
    <InputLabel theme="dark" status="hint" />
    <p />
    <InputLabel theme="dark" status="error" />
  </div>
);
