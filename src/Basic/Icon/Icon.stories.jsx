import React from "react";
import styled from "styled-components";

import { Icon, IconSocial, IconBookMark } from "./";
import { icons } from "../../shared/icons";
import { iconsSocial } from "../../shared/iconsSocial";

export default {
  title: "Basic/Icon",
  component: Icon,
};

const Meta = styled.div`
  color: #666;
  font-size: 12px;
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

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export const Default = (args) => (
  <>
    This is a {args.block ? "block" : "inline"} <Icon {...args} /> icon
  </>
);

Default.args = {
  icon: "smile",
  "aria-label": "smile",
  block: false,
};

export const All = () => (
  <>
    There are {Object.keys(icons).length} icons
    <List>
      {Object.keys(icons).map((key) => (
        <Item key={key}>
          <Icon icon={key} aria-hidden />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
);

export const Social = () => (
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

export const BookMark = () => (
  <>
    <IconBookMark mode="primary" theme="light" />
    <IconBookMark mode="secondary" theme="light" />
    <IconBookMark mode="secondary" theme="dark" />
  </>
);
