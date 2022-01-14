import React, { useState } from "react";
import { SubNavbarItem } from "./SubNavbarItem";
import { SubNavbar } from "./SubNavbar";

export const Default = (args) => (
  <SubNavbarItem {...args}>{args.children}</SubNavbarItem>
);
Default.args = {
  children: "사이드바 아이템",
};

export const Bar = (args) => <SubNavbar {...args}>{args.children}</SubNavbar>;
Bar.args = {
  items: [
    {
      id: 1,
      title: "마감임박",
    },
    {
      id: 2,
      title: "최신순",
    },
    {
      id: 3,
      title: "인기순",
    },
  ],
  onClick: (id) => console.log("hey", id),
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
