import React from "react";

import NavItem from "./NavItem";
import { Background } from "../../Background/Background";

export default {
  title: "Components/NavItem",
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

export const All = () => (
  <>
    <h1>Light theme</h1>
    <hr />
    <Background>
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
    <Background theme="dark">
      <NavItem theme="dark" status="active">
        Active
      </NavItem>
      <NavItem theme="dark" status="default">
        Default
      </NavItem>
    </Background>
  </>
);
