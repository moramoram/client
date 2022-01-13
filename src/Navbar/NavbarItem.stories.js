import React from "react";
import { NavbarItem } from "./NavbarItem";
import { Background } from "../Background/Background";

export default {
  title: "Design System/NavbarItem",
  component: NavbarItem,
};

export const All = (args) => (
  <>
    <h1>Light Mode</h1>
    <hr />
    <Background>
      <NavbarItem isActive>Active</NavbarItem>
      <NavbarItem>Default</NavbarItem>
    </Background>
    <br />
    <h1>Dark Mode</h1>
    <hr />
    <Background isDarkmode>
      <NavbarItem isActive isDarkmode>
        Active
      </NavbarItem>
      <NavbarItem isDarkmode>Default</NavbarItem>
    </Background>
  </>
);

export const Standard = (args) => (
  <Background {...args}>
    <NavbarItem {...args} />
  </Background>
);

Standard.args = {
  children: "Menu",
  isActive: false,
  isDarkmode: false,
};
