import React from "react";

import FeedItemSmall from ".";
import { Background } from "@/foundations";

import { daysFromToday, numToMillion } from "@/utils";

export default {
  title: "Patterns/FeedItemSmall",
  component: FeedItemSmall,
};

export const Default = (args) => <FeedItemSmall {...args} />;

Default.args = {
  username: "아이유",
  avatar:
    "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
  title: "더 좋은 커뮤니티를 만들기 위한 약속 🤙",
  category: "공지",
};

export const AllTypes = () => (
  <>
    <Background theme="light">
      <FeedItemSmall theme="light" />
    </Background>
    <Background theme="dark">
      <FeedItemSmall theme="dark" />
    </Background>
  </>
);
