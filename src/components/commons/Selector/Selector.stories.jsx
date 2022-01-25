import React from "react";

import Selector from "./";

import { Input } from "@/components";
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
      <Selector theme="light" />
      <br />
      <Selector theme="light" title="라벨" />
      <br />
      <Selector
        theme="light"
        title="라벨"
        message="This is a hint text to help user."
      />
      <br />
      <Selector
        theme="light"
        title="라벨"
        status="error"
        message="This is error message."
      />
    </Background>
    <Background theme="dark">
      <Selector theme="dark" />
      <br />
      <Selector theme="dark" title="라벨" />
      <br />
      <Selector
        theme="dark"
        title="라벨"
        message="This is a hint text to help user."
      />
      <br />
      <Selector
        theme="dark"
        title="라벨"
        status="error"
        message="This is error message."
      />
    </Background>
  </>
);
