import React from "react";
import styled from "styled-components";

import Icon from "./";
import { icons } from "@/_shared";

export default {
  title: "Foundations/Icon",
  component: Icon,
};

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

export const AllTypes = () => (
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
