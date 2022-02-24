import React from "react";
import styled from "styled-components";

import Selector from "./";
import { Background } from "@/foundations";

export default {
  title: "Components/Selector",
  component: Selector,
};

export const Default = (args) => <Selector {...args} />;

Default.args = {
  options: [
    { value: "Android", label: "Android" },
    { value: "C++", label: "C++" },
    { value: "Django", label: "Django" },
    { value: "Docker", label: "Docker" },
    { value: "Flutter", label: "Flutter" },
    { value: "Go", label: "Go" },
    { value: "JPA", label: "JPA" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Linux", label: "Linux" },
    { value: "Mybatis", label: "Mybatis" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Redis", label: "Redis" },
    { value: "SQL", label: "SQL" },
    { value: "Spring", label: "Spring" },
    { value: "Swift", label: "Swift" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Vue.js", label: "Vue.js" },
  ],
  placeholder: "Placeholder",
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <TypeBox>
        <Selector theme="light" isMulti />
        <Selector theme="light" title="라벨" isMulti />
        <Selector
          theme="light"
          title="라벨"
          message="This is a hint text to help user."
          isMulti
        />
        <Selector
          theme="light"
          title="라벨"
          status="error"
          message="This is error message."
          isMulti
        />
      </TypeBox>
    </Background>
    <Background theme="dark">
      <TypeBox>
        <Selector theme="dark" isMulti />
        <Selector theme="dark" title="라벨" isMulti />
        <Selector
          theme="dark"
          title="라벨"
          message="This is a hint text to help user."
          isMulti
        />
        <Selector
          theme="dark"
          title="라벨"
          status="error"
          message="This is error message."
          isMulti
        />
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
