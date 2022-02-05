import React from "react";

import FeedItemSmall from ".";
import { Background } from "@/foundations";

export default {
  title: "Patterns/FeedItemSmall",
  component: FeedItemSmall,
};

const data = {
  boardId: 1,
  colorIdx: 1,
  writerInfo: {
    nickname: "아이유",
    ordinal: "6기",
    campus: "서울",
    authCheck: 0,
    avatar:
      "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
  },
  title: "더 좋은 커뮤니티를 만들기 위한 약속 🤙",
  category: "공지",
};

export const Default = (args) => <FeedItemSmall {...args} />;

Default.args = { ...data };

export const AllTypes = () => (
  <>
    <Background theme="light">
      <FeedItemSmall theme="light" {...data} />
    </Background>
    <Background theme="dark">
      <FeedItemSmall theme="dark" {...data} />
    </Background>
  </>
);
