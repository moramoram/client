import React from "react";
import { NavbarItem } from "./NavbarItem";
import { Background } from "../Background/Background";

export default {
  title: "Design System/NavbarItem",
  component: NavbarItem,
};

export const Default = (args) => (
  <Background {...args}>
    <NavbarItem {...args} />
  </Background>
);

Default.args = {
  children: "Menu",
};

export const All = () => (
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
