import React from "react";
import SubNavbarItem from "./";

export default {
  title: "Components/SubNavbarItem",
  component: SubNavbarItem,
};

export const Default = (args) => (
  <SubNavbarItem {...args}>사이드바 아이템</SubNavbarItem>
);

Default.args = {};

export const All = (args) => (
  <>
    <h1>Light Sub Navbar Item</h1>
    <hr />
    <SubNavbarItem {...args}>사이드바 아이템</SubNavbarItem>
    <SubNavbarItem status="active" {...args}>
      사이드바 아이템
    </SubNavbarItem>

    <h1>Dark Sub Navbar Item</h1>
    <hr />
    <p />
    <SubNavbarItem theme="dark" {...args}>
      사이드바 아이템
    </SubNavbarItem>
    <p />
    <SubNavbarItem theme="dark" status="active" {...args}>
      사이드바 아이템
    </SubNavbarItem>
  </>
);
