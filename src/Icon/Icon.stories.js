import React from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { IconSocial } from "./IconSocial";
import { IconBookMark } from "./IconBookMark";

import { icons } from "../shared/icons";
import { iconsSocial } from "../shared/iconsSocial";

export default {
  title: "Design System/Icon",
  component: Icon,
};

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const MODE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
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

export const Basic = (args) => (
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

export const Standard = (args) => (
  <>
    This is a <Icon {...args} /> icon
  </>
);

Standard.args = {
  icon: "smile",
  "aria-label": "smile",
  block: false,
};

export const Social = (args) => (
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

export const BookMark = (args) => (
  <>
    <IconBookMark />
    <IconBookMark mode="secondary" />
    <IconBookMark mode="secondary" theme="dark" />
  </>
);
