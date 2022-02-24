import React from "react";
import CardSmallSlider from ".";

export default {
  title: "layouts/CardSmallSlider",
  component: CardSmallSlider,
};

export const Default = (args) => <CardSmallSlider {...args} />;

Default.args = {
  theme: "light",
  data: [
    {
      contents: {
        title: "싸피이이티시스템 면접 스터디",
        highlight: "모집중",
        src: "",
      },
      id: 1,
      isDisabled: false,
      isLiked: false,
    },
    {
      contents: {
        title: "싸피이이티 2차 면접",
        highlight: "모집완료",
        src: "",
      },
      id: 2,
      isDisabled: true,
      isLiked: false,
    },
    {
      contents: {
        title: "싸피이이티 2차 면접",
        highlight: "모집완료",
        src: "",
      },
      id: 3,
      isDisabled: true,
      isLiked: false,
    },
    {
      contents: {
        title: "싸피이이티 2차 면접",
        highlight: "모집완료",
        src: "",
      },
      id: 4,
      isDisabled: true,
      isLiked: false,
    },
    {
      contents: {
        title: "싸피이이티 2차 면접",
        highlight: "모집완료",
        src: "",
      },
      id: 5,
      isDisabled: true,
      isLiked: false,
    },
  ],
};
