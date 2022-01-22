import React from "react";

import Progress from "./";
import { Background } from "@/foundations";

export default {
  title: "Patterns/Progress",
  component: Progress,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
};

const items = [
  {
    step: 1,
    title: "공고 요약",
    description: "한 눈에 들어오게 요약해주세요",
    status: "default",
  },
  {
    step: 2,
    title: "상세 내용 입력",
    description: "공고 내용을 그대로 옮겨주세요",
    status: "default",
  },
  {
    step: 3,
    title: "미리보기",
    description: "잘 작성되었는지 확인해보세요.",
    status: "default",
  },
];

export const Default = (props) => <Progress {...props} />;

Default.args = {
  items,
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <Progress theme="light" items={items} />
    </Background>
    <Background theme="dark">
      <Progress theme="dark" items={items} />
    </Background>
  </>
);
