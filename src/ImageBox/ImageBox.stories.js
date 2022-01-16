import React from "react";
import { ImageBox } from "./ImageBox";

export default {
  title: "Design System/ImageBox",
  component: ImageBox,
};

export const Default = (args) => <ImageBox {...args} />;

Default.args = {
  size: "large",
};

export const All = (args) => (
  <>
    <h1>Size</h1>
    <hr />
    <p />
    <ImageBox {...args} />
    <p />
    <ImageBox {...args} size="medium" />
    <p />
    <ImageBox {...args} size="small" />
    <h1>Light ImageBox</h1>
    <hr />
    <p />
    <ImageBox {...args} />
    <p />
    <ImageBox {...args} isLoading />
    <h1>Dark ImageBox</h1>
    <hr />
    <p />
    <ImageBox theme="dark" {...args} />
    <p />
    <ImageBox {...args} theme="dark" isLoading />
  </>
);
