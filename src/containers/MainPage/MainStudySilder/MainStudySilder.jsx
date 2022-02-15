import React from "react";
import styled from "styled-components";

import { GetStudyList, StudyCardSelector } from "@/api";

import { CardSlider } from "@/layouts";

const MainStudySilder = ({ ...props }) => {
  const search = {
    category: 1,
    title: "",
    studyType: "",
    criteria: "",
  };

  const { data } = GetStudyList(search);
  const { cardData } = StudyCardSelector(data);
  console.log(cardData);
  return (
    <Layout>
      <CardSlider data={cardData} {...props} />
    </Layout>
  );
};

export default MainStudySilder;

// const mock = new Array(20).fill({
//   contents: {
//     title: "알고리즘 스터디 모집",
//     subtitle: "김싸피(6기 / 서울)",
//     highlight: "모집중",
//     src: "",
//   },
//   badges: ["JavaScript", "React", "Vue.js"],
//   id: "/study/1",
// });

const Layout = styled.div``;
