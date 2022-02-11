import React from "react";

import { NavDefaultItem } from ".";
import { Background } from "@/foundations";

export default {
  title: "layouts/Navbar/NavDefault/NavDefaultItem",
  component: NavDefaultItem,
};

export const Default = (args) => (
  <Background {...args}>
    <NavDefaultItem {...args} />
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
      <NavDefaultItem theme="light" status="active">
        Active
      </NavDefaultItem>
      <NavDefaultItem theme="light" status="default">
        Default
      </NavDefaultItem>
    </Background>
    <br />
    <h1>Dark theme</h1>
    <hr />
    <Background theme="dark" style={{ display: "flex" }}>
      <NavDefaultItem theme="dark" status="active">
        Active
      </NavDefaultItem>
      <NavDefaultItem theme="dark" status="default">
        Default
      </NavDefaultItem>
    </Background>
  </>
);
