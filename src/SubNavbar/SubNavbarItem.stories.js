import React from "react";
import { SubNavbarItem } from "./SubNavbarItem";

export const Default = (args) => (
  <SubNavbarItem {...args}>{args.children}</SubNavbarItem>
);
Default.args = {
  children: "사이드바 아이템",
};

export const All = (args) => (
  <>
    <h1>Light Sub Navbar Item</h1>
    <hr />
    <p />
    <SubNavbarItem {...args}>{args.children}</SubNavbarItem>
    <p />

    <SubNavbarItem status="active" {...args}>
      {args.children}
    </SubNavbarItem>

    <h1>Dark Sub Navbar Item</h1>
    <hr />
    <p />
    <SubNavbarItem theme="dark" {...args}>
      {args.children}
    </SubNavbarItem>
    <p />

    <SubNavbarItem theme="dark" status="active" {...args}>
      {args.children}
    </SubNavbarItem>
  </>
);

All.args = {
  children: "사이드바 아이템",
};

export default {
  title: "Design System/SubNavbarItem",
  component: SubNavbarItem,
};
