import React from "react";
import BookMark from "./";

export default {
  title: "Components/BookMark",
  component: BookMark,
};

export const Default = (args) => <BookMark {...args} />;

export const AllTypes = () => (
  <>
    <BookMark mode="primary" theme="light" />
    <BookMark mode="secondary" theme="light" />
    <BookMark mode="secondary" theme="dark" />
  </>
);
