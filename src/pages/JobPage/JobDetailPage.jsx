import React from "react";
import styled from "styled-components";

import { JobDetail, JobSideBar } from "@/containers";

const JobsDetailPage = () => {
  return (
    <Layout>
      <JobDetail titleData={titleData} cardData={cardData}></JobDetail>
      <FixedSidebar {...sidbarargs} />
    </Layout>
  );
};

export default JobsDetailPage;

const titleData = {
  title: "프론트엔드 엔지니어 채용",
  subtitle: "싸피아이티시스템",
  highlight: "모집중",
};

const cardData = [
  {
    contents: {
      title: "싸피이이티시스템 면접 스터디",
      highlight: "모집중",
      src: "",
    },
    url: "",
    isDisabled: false,
    isLiked: false,
  },
  {
    contents: {
      title: "싸피이이티 2차 면접",
      highlight: "모집완료",
      src: "",
    },
    url: "",
    isDisabled: true,
    isLiked: false,
  },
  {
    contents: {
      title: "싸피이이티 2차 면접",
      highlight: "모집완료",
      src: "",
    },
    url: "",
    isDisabled: true,
    isLiked: false,
  },
];

const sidbarargs = {
  data: {
    task: "프론트엔드",
    type: "정규직",
    career: "신입",
    location: "서울 강남구",
  },
  badges: ["JavaScript", "TypeScript", "Vue.js", "React", "Redux", "Svelte"],
};

const Layout = styled.div`
  display: flex;
  gap: 50px;
`;

const FixedSidebar = styled(JobSideBar)`
  position: sticky;
  top: 122px;
`;
