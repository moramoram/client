import React from "react";

import { NavItem } from "./";
import { Background } from "@/foundations";

export default {
  title: "Containers/Navbar/NavItem",
  component: NavItem,
};

export const Default = (args) => (
  <Background {...args}>
    <NavItem {...args} />
  </Background>
);

Default.args = {
  children: "Menu",
};

export const AllTypes = () => (
  <>
    <h1>Light theme</h1>
    <hr />
    <Background theme="light" style={{ display: "flex" }}>
      <NavItem theme="light" status="active">
        Active
      </NavItem>
      <NavItem theme="light" status="default">
        Default
      </NavItem>
    </Background>
    <br />
    <h1>Dark theme</h1>
    <hr />
    <Background theme="dark" style={{ display: "flex" }}>
      <NavItem theme="dark" status="active">
        Active
      </NavItem>
      <NavItem theme="dark" status="default">
        Default
      </NavItem>
    </Background>
  </>
);
