import React from "react";

import ProgressItem from "./";
import { Background } from "../../Basic";

export default {
  title: "Components/ProgressItem",
  component: ProgressItem,
};

const item = {
  step: 1,
  title: "공고 요약",
  description: "한 눈에 들어오게 요약해주세요",
};

export const Default = (args) => <ProgressItem {...args} />;

Default.args = {
  ...item,
};

export const All = () => (
  <>
    <h1>Light Theme</h1>
    <Background theme="light">
      <h2>Completed</h2>
      <div>
        <ProgressItem status="completed" theme="light" {...item} />
      </div>
      <br />
      <h2>Current</h2>
      <div>
        <ProgressItem status="current" theme="light" {...item} />
      </div>

      <br />
      <h2>Default</h2>
      <div>
        <ProgressItem status="default" theme="light" {...item} />
      </div>
    </Background>
    <h1>Dark Theme</h1>
    <br />
    <Background theme="dark">
      <h2 style={{ color: "white" }}>Completed</h2>
      <div>
        <ProgressItem status="completed" theme="dark" {...item} />
      </div>
      <br />
      <h2 style={{ color: "white" }}>Current</h2>
      <div>
        <ProgressItem status="current" theme="dark" {...item} />
      </div>
      <br />
      <h2 style={{ color: "white" }}>Default</h2>
      <div>
        <ProgressItem status="default" theme="dark" {...item} />
      </div>
    </Background>
  </>
);
