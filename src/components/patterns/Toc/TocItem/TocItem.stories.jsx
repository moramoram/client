import React from "react";
import styled from "styled-components";

import { TocItem } from "./";
import { Background, Typography } from "@/foundations";

export default {
  title: "Patterns/Toc/TocItem",
  component: TocItem,
};

export const Default = (args) => (
  <Background {...args}>
    <TocItem {...args} />
  </Background>
);

Default.args = {
  children: "메뉴",
  number: "n",
  status: "active",
  theme: "light",
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <TypeBox>
        <TocItem theme="light" status="active" />
        <TocItem theme="light" status="default" />
      </TypeBox>
    </Background>
    <Background theme="dark">
      <TypeBox>
        <TocItem theme="dark" status="active" />
        <TocItem theme="dark" status="default" />
      </TypeBox>
    </Background>
  </>
);

AllTypes.args = {
  children: "메뉴",
  number: "n",
  status: "active",
  theme: "light",
};

const TypeBox = styled.div`
  display: flex;
`;
