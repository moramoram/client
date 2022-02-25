import React from "react";
import styled from "styled-components";

import CardSmall from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/CardSmall",
  component: CardSmall,
};

export const Default = (args) => <CardSmall {...args} />;

const defaultContents = {
  title: "주니어 웹 개발자 채용",
  highlight: "모집중",
  src: "",
};

Default.args = {
  contents: defaultContents,
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <TypeBox>
        <CardSmall contents={defaultContents} />
        <CardSmall isLoading />
      </TypeBox>
    </Background>
    <Background theme="dark">
      <TypeBox>
        <CardSmall contents={defaultContents} theme="dark" />
        <CardSmall theme="dark" isLoading />
      </TypeBox>
    </Background>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;
