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
    <h1>Light Mode</h1>
    <hr />
    <Background>
      <NavbarItem status="active">Active</NavbarItem>
      <NavbarItem>Default</NavbarItem>
    </Background>
    <br />
    <h1>Dark Mode</h1>
    <hr />
    <Background mode="dark">
      <NavbarItem status="active" mode="dark">
        Active
      </NavbarItem>
      <NavbarItem mode="dark">Default</NavbarItem>
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
  mode: "light",
};

Standard.storyName = "Item (Standard)";

export const Layout = (args) => <Navbar {...args} />;
