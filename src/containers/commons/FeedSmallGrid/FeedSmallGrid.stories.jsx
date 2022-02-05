import React from "react";
import FeedSmallGrid from ".";

export default {
  title: "containers/FeedSmallGrid",
  component: FeedSmallGrid,
};

export const Default = (args) => <FeedSmallGrid {...args} />;

Default.args = {
  theme: "light",
  data: [
    {
      username: "관리자",
      avatar:
        "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
      title: "더 좋은 커뮤니티를 위한 약속 🤙",
      category: "공지",
      id: "1",
    },
    {
      username: "관리자",
      avatar:
        "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
      title: "ssafé는 삼성청년SW아카데미의 보안서약을 준수합니다",
      category: "공지",
      id: "1",
    },
    {
      username: "관리자",
      avatar:
        "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
      title: "ssafé 버전 업데이트 안내 (2022.02.28)",
      category: "공지",
      id: "1",
    },
  ],
};
