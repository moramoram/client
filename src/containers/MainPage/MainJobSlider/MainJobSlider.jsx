import React from "react";
import styled from "styled-components";

import { GetJobList, JobCardSelector } from "@/api";
import { CardSlider } from "@/layouts";

const MainJobSlider = ({ ...props }) => {
  const search = {
    category: 1,
    title: "",
    techStack: [],
    job: "",
    criteria: "",
  };

  const { data } = GetJobList(search);
  const { cardData } = JobCardSelector(data);
  console.log(cardData);
  return (
    <Layout>
      <CardSlider data={cardData} {...props} />
    </Layout>
  );
};

export default MainJobSlider;

// const mock = new Array(20).fill({
//   contents: {
//     title: "주니어 프론트엔드 채용",
//     subtitle: "싸페 디자인 시스템",
//     highlight: "D-day",
//     src: "",
//   },
//   badges: ["JavaScript", "React", "Vue.js"],
//   id: "/job/1",
// });

const Layout = styled.div``;
