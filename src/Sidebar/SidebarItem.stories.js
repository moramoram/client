import React from "react";
import { SidebarItem } from "./SidebarItem";

export default {
  title: "Design System/SidebarItem",
  component: SidebarItem,
};

export const Default = (args) => <SidebarItem {...args} />;

Default.args = {
  contents: {
    title: "직무",
    description: "프론트엔드",
    icon: "briefcase",
  },
};

export const All = (args) => (
  <>
    <h1>Light Sub Navbar Item</h1>
    <hr />
    <p />
    <SidebarItem {...args} />
    <SidebarItem {...args} />
    <SidebarItem {...args} />
    <SidebarItem {...args} />

    <h1>Dark Sub Navbar Item</h1>
    <hr />
    <p />
    <SidebarItem theme="dark" {...args} />
    <SidebarItem theme="dark" {...args} />
    <SidebarItem theme="dark" {...args} />
    <SidebarItem theme="dark" {...args} />
  </>
);

All.args = {
  contents: {
    title: "직무",
    description: "프론트엔드",
    icon: "briefcase",
  },
};
