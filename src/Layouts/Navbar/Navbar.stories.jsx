import React from "react";
import Navbar from "./";

export default {
  title: "Layouts/Navbar",
  component: Navbar,
};

export const Default = (args) => <Navbar {...args} />;

export const All = () => (
  <>
    <Navbar theme="light" />
    <br />
    <Navbar theme="dark" />
    <br />
    <Navbar theme="transparent" />
  </>
);
