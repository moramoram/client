import React from "react";
import styled from "styled-components";

import IconSocial from "./";
import { iconsSocial } from "@/_shared";

export default {
  title: "Foundations/IconSocial",
  component: IconSocial,
};

export const Default = (args) => (
  <>
    This is a {args.block ? "block" : "inline"} <IconSocial {...args} /> icon
  </>
);

Default.args = {
  icon: "google",
  "aria-label": "google",
  block: false,
};

export const AllTypes = () => (
  <>
    There are {Object.keys(iconsSocial).length} social icons
    <List>
      {Object.keys(iconsSocial).map((key) => (
        <Item key={key}>
          <IconSocial icon={key} aria-hidden />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
);

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
  }
`;

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;
