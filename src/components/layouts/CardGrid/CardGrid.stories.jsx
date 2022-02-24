import React from "react";
import CardGrid from ".";

export default {
  title: "layouts/CardGrid",
  component: CardGrid,
};

export const Default = (args) => <CardGrid {...args} />;

Default.args = {
  theme: "light",
  data: new Array(20).fill({
    contents: {
      title: "주니어 프론트엔드 채용",
      subtitle: "싸페 디자인 시스템",
      highlight: "D-day",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    id: "1",
  }),
};
