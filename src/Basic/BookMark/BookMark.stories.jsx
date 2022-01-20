import React from "react";
import BookMark from "./";

export default {
  title: "Basic/BookMark",
  component: BookMark,
};

export const Default = () => (
  <>
    <BookMark mode="primary" theme="light" />
    <BookMark mode="secondary" theme="light" />
    <BookMark mode="secondary" theme="dark" />
  </>
);
