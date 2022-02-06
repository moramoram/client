import React from "react";
import FeedSmallGrid from ".";

export default {
  title: "containers/FeedSmallGrid",
  component: FeedSmallGrid,
};

export const Default = (args) => <FeedSmallGrid {...args} />;

Default.args = {
  data: [
    {
      boardId: 1,
      writerInfo: {
        nickname: "관리자",
        ordinal: "",
        campus: "",
        authCheck: 0,
        avatar: "",
      },
      title: "더 좋은 커뮤니티를 만들기 위한 약속 🤙",
      category: "공지",
    },
    {
      boardId: 5,
      writerInfo: {
        nickname: "아이유",
        ordinal: "6기",
        campus: "서울",
        authCheck: 0,
        avatar:
          "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
      },
      title: "겨울잠",
      category: "자유게시판",
    },
    {
      boardId: 10,
      writerInfo: {
        nickname: "익명",
        ordinal: null,
        campus: null,
        authCheck: 0,
        avatar: "",
      },
      title: "더 좋은 커뮤니티를 만들기 위한 약속 🤙",
      category: "익명게시판",
    },
  ],
};
