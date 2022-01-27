import React from "react";

import { NavVerticalItem } from ".";
import { Background } from "@/foundations";

export default {
  title: "Containers/Navbar/NavVerticalItem",
  component: NavVerticalItem,
};

export const Default = (args) => (
  <Background {...args}>
    <NavVerticalItem {...args} />
  </Background>
);

Default.args = {
  children: "Menu",
};

export const AllTypes = () => (
  <>
    <h1>Light theme</h1>
    <hr />
    <Background theme="light">
      <NavVerticalItem theme="light" status="active">
        Active
      </NavVerticalItem>
      <NavVerticalItem theme="light" status="default">
        Default
      </NavVerticalItem>
    </Background>
    <br />
    <h1>Dark theme</h1>
    <hr />
    <Background theme="dark">
      <NavVerticalItem theme="dark" status="active">
        Active
      </NavVerticalItem>
      <NavVerticalItem theme="dark" status="default">
        Default
      </NavVerticalItem>
    </Background>
  </>
);
