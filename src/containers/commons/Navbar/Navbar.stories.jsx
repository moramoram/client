import React from "react";
import Navbar from "./";

export default {
  title: "Containers/Navbar",
  component: Navbar,
};

export const Default = (args) => <Navbar {...args} />;

export const AllTypes = () => (
  <>
    <Navbar theme="light" />
    <br />
    <Navbar theme="dark" />
    <br />
    <Navbar theme="transparent" />
  </>
);
