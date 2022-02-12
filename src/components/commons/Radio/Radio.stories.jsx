import React from "react";

import Radio from ".";
import { Background } from "@/foundations";

export default {
  title: "Components/Radio",
  component: Radio,
};

export const Default = (args) => (
  <>
    <Background
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      {...args}
    >
      <Radio name="group" {...args} />
      <Radio name="group" {...args} />
      <Radio name="group" {...args} />
    </Background>
  </>
);

export const All = () => (
  <>
    <Background
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      theme="light"
    >
      <Radio name="light" theme="light" />
      <Radio name="light" theme="light" />
      <Radio name="light" theme="light" />
    </Background>
    <Background
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      theme="dark"
    >
      <Radio name="dark" theme="dark" />
      <Radio name="dark" theme="dark" />
      <Radio name="dark" theme="dark" />
    </Background>
  </>
);
