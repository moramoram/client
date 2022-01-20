import React from "react";

import Progress from "./";
import { Background } from "../../Basic";

export default {
  title: "Layouts/Progress",
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
    description: "공고를 한 눈에 볼 수 있도록 요약해주세요.",
    status: "default",
  },
  {
    step: 2,
    title: "상세 내용 입력",
    description: "에디터를 이용해 공고 원본을 그대로 담아주세요.",
    status: "default",
  },
  {
    step: 3,
    title: "미리보기",
    description: "채용 공고가 잘 작성되었는지 확인해보세요.",
    status: "default",
  },
];

export const Default = (props) => <Progress {...props} />;

Default.args = {
  items,
};

export const All = () => (
  <>
    <Background theme="light">
      <Progress theme="light" items={items} />
    </Background>
    <Background theme="dark">
      <Progress theme="dark" items={items} />
    </Background>
  </>
);
