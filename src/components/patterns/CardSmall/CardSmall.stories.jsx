import React from "react";
import styled from "styled-components";

import CardSmall from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/CardSmall",
  component: CardSmall,
};

export const Default = (args) => <CardSmall {...args} />;

Default.args = {
  contents: {
    title: "주니어 웹 개발자 채용",
    highlight: "모집중",
    src: "",
  },
};

export const AllTypes = (args) => (
  <>
    <Background theme="light">
      <TypeBox>
        <CardSmall {...args} />
        <CardSmall isLoading {...args} />
      </TypeBox>
    </Background>
    <Background theme="dark">
      <TypeBox>
        <CardSmall theme="dark" {...args} />
        <CardSmall theme="dark" isLoading {...args} />
      </TypeBox>
    </Background>
  </>
);

AllTypes.args = {
  contents: {
    title: "주니어 웹 개발자 채용",
    highlight: "모집중",
    src: "",
  },
};

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;
