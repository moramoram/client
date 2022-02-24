import React from "react";
import styled from "styled-components";

import Radio from ".";
import { Background } from "@/foundations";

export default {
  title: "Components/Radio",
  component: Radio,
};

export const Default = (args) => (
  <>
    <Background {...args}>
      <TypeBox>
        <Radio name="group" {...args} />
        <Radio name="group" {...args} />
        <Radio name="group" {...args} />
      </TypeBox>
    </Background>
  </>
);

export const All = () => (
  <>
    <Background theme="light">
      <TypeBox>
        <Radio name="light" theme="light" />
        <Radio name="light" theme="light" />
        <Radio name="light" theme="light" />
      </TypeBox>
    </Background>
    <Background theme="dark">
      <TypeBox>
        <Radio name="dark" theme="dark" />
        <Radio name="dark" theme="dark" />
        <Radio name="dark" theme="dark" />
      </TypeBox>
    </Background>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
