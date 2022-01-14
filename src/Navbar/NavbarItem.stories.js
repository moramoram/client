import React from "react";
import { NavbarItem } from "./NavbarItem";
import { Navbar } from "./Navbar";
import { Background } from "../Background/Background";

export default {
  title: "Design System/Navbar",
  component: NavbarItem,
};

export const All = (args) => (
  <>
    <h1>Light theme</h1>
    <hr />
    <Background>
      <NavbarItem theme="light" status="active">
        Active
      </NavbarItem>
      <NavbarItem theme="light" status="default">
        Default
      </NavbarItem>
    </Background>
    <br />
    <h1>Dark theme</h1>
    <hr />
    <Background theme="dark">
      <NavbarItem theme="dark" status="active">
        Active
      </NavbarItem>
      <NavbarItem theme="dark" status="default">
        Default
      </NavbarItem>
    </Background>
  </>
);

All.storyName = "Item (All)";

export const Standard = (args) => (
  <Background {...args}>
    <NavbarItem {...args} />
  </Background>
);

Standard.args = {
  children: "Menu",
  status: "active",
  theme: "light",
};

Standard.storyName = "Item (Standard)";

export const Layout = (args) => (
  <>
    <Navbar theme="light" />
    <br />
    <Navbar theme="dark" />
    <br />
    <Navbar theme="transparent" />
  </>
);
