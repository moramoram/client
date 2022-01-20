import React from "react";
import ImageBox from "./";

export default {
  title: "Components/ImageBox",
  component: ImageBox,
};

export const Default = (args) => <ImageBox {...args} />;

Default.args = {
  size: "large",
};

export const All = () => (
  <>
    <h1>Size</h1>
    <hr />
    <p />
    <ImageBox />
    <p />
    <ImageBox size="medium" />
    <p />
    <ImageBox size="small" />
    <h1>Light ImageBox</h1>
    <hr />
    <p />
    <ImageBox />
    <p />
    <ImageBox isLoading />
    <h1>Dark ImageBox</h1>
    <hr />
    <p />
    <ImageBox theme="dark" />
    <p />
    <ImageBox theme="dark" isLoading />
  </>
);
