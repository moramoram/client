import React from "react";

import { ProgressItem } from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Progress/ProgressItem",
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

export const AllTypes = () => (
  <>
    <Background theme="light">
      <div style={{ display: "flex" }}>
        <ProgressItem status="completed" theme="light" {...item} />
      </div>
      <br />
      <div>
        <ProgressItem status="current" theme="light" {...item} />
      </div>
      <br />
      <div>
        <ProgressItem status="default" theme="light" {...item} />
      </div>
    </Background>

    <br />
    <Background theme="dark">
      <div>
        <ProgressItem status="completed" theme="dark" {...item} />
      </div>
      <br />
      <div>
        <ProgressItem status="current" theme="dark" {...item} />
      </div>
      <br />
      <div>
        <ProgressItem status="default" theme="dark" {...item} />
      </div>
    </Background>
  </>
);
