import React from "react";
import SideBarItem from "./";

export default {
  title: "Components/SideBarItem",
  component: SideBarItem,
};

export const Default = (args) => <SideBarItem {...args} />;

Default.args = {
  title: "직무",
  description: "프론트엔드",
  icon: "briefcase",
};

export const AllTypes = (args) => (
  <>
    <SideBarItem {...args} />
    <SideBarItem {...args} />
    <SideBarItem {...args} />
    <SideBarItem {...args} />
    <h1> Loading Light Sub Navbar Item</h1>
    <hr />
    <p />
    <SideBarItem {...args} isLoading />
    <SideBarItem {...args} isLoading />
    <SideBarItem {...args} isLoading />
    <SideBarItem {...args} isLoading />
    <h1>Dark Sub Navbar Item</h1>
    <hr />
    <p />
    <SideBarItem theme="dark" {...args} />
    <SideBarItem theme="dark" {...args} />
    <SideBarItem theme="dark" {...args} />
    <SideBarItem theme="dark" {...args} />
    <h1> Loading Dark Sub Navbar Item</h1>
    <hr />
    <p />
    <SideBarItem {...args} theme="dark" isLoading />
    <SideBarItem {...args} theme="dark" isLoading />
    <SideBarItem {...args} theme="dark" isLoading />
    <SideBarItem {...args} theme="dark" isLoading />
  </>
);

AllTypes.args = {
  title: "직무",
  description: "프론트엔드",
  icon: "briefcase",
};
