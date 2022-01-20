import React from "react";

import ProgressStepItem from ".";
// import { Background } from "../../Background/Background";

export default {
  title: "Components/ProgressStepItem",
  component: ProgressStepItem,
};

export const Default = (args) => <ProgressStepItem {...args} />;

Default.args = {
  step: 1,
  title: "공고 요약",
  description: "공고를 한 눈에 볼 수 있도록 요약해주세요.",
};

export const All = () => (
  <>
    <ProgressStepItem status="completed" />
    <ProgressStepItem status="current" />
    <ProgressStepItem status="default" />
  </>
);
