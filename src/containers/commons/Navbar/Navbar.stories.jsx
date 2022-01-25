import React from "react";
import Navbar from "./";

export default {
  title: "Containers/Navbar",
  component: Navbar,
};

export const Default = (args) => <Navbar {...args} />;

export const AllTypes = () => (
  <>
    <Navbar theme="light" isStatic isLogout />
    <br />
    <Navbar theme="light" isStatic />
    <br />
    <Navbar theme="light" type="transparent" isStatic />
    <br />
    <Navbar theme="dark" isStatic isLogout />
    <br />
    <Navbar theme="dark" isStatic />
    <br />
    <Navbar theme="dark" type="transparent" isStatic />
  </>
);
