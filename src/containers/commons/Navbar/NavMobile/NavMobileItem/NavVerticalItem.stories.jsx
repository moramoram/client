import React from "react";

import { NavMobileItem } from ".";
import { Background } from "@/foundations";

export default {
  title: "Containers/Navbar/NavMobile/NavMobileItem",
  component: NavMobileItem,
};

export const Default = (args) => (
  <Background {...args}>
    <NavMobileItem {...args} />
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
      <NavMobileItem theme="light" status="active">
        Active
      </NavMobileItem>
      <NavMobileItem theme="light" status="default">
        Default
      </NavMobileItem>
    </Background>
    <br />
    <h1>Dark theme</h1>
    <hr />
    <Background theme="dark">
      <NavMobileItem theme="dark" status="active">
        Active
      </NavMobileItem>
      <NavMobileItem theme="dark" status="default">
        Default
      </NavMobileItem>
    </Background>
  </>
);
