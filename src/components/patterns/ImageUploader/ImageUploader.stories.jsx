import React from "react";

import ImageUploader from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/ImageUploader",
  component: ImageUploader,
};

export const Default = (args) => <ImageUploader {...args} />;

Default.args = {
  aspect: 2,
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <ImageUploader theme="light" />
    </Background>
    <Background theme="dark">
      <ImageUploader theme="dark" />
    </Background>
  </>
);
