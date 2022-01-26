import React from "react";

import InputImage from "./";
import { Background } from "@/foundations";

export default {
  title: "Components/InputImage",
  component: InputImage,
};

export const Default = (args) => <InputImage {...args} />;

export const AllTypes = () => (
  <>
    <Background theme="light">
      <InputImage theme="light" />
    </Background>
    <Background theme="dark">
      <InputImage theme="dark" />
    </Background>
  </>
);
