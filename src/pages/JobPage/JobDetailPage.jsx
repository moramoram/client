import React from "react";
import styled from "styled-components";


import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { JobDetail, JobSideBar } from "@/containers";
import { daysFromToday } from "@/utils";

const JobsDetailPage = () => {
  const theme = useRecoilValue(themeState);
  const itemId = useParams().jobId;

  return (
    <Layout>
      <JobDetail
        theme={theme}
        titleData={titleData}
        cardData={cardData}
        commentData={commentData}
        theme={theme}
      />
      {/* <FixedSidebar {...sidbarargs} theme={theme} /> */}
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

const commentData = [
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-24"),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-24"),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-24"),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-24"),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-24"),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    username: null,
    src: null,
    created: daysFromToday("2022-01-24"),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

// const sidbarargs = {
//   data: {
//     task: "프론트엔드",
//     type: "정규직",
//     career: "신입",
//     location: "서울 강남구",
//   },

//   badges: ["JavaScript", "TypeScript", "Vue.js", "React", "Redux", "Svelte"],
// };

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 1280px;

  margin: auto;
`;

// const FixedSidebar = styled(JobSideBar)`
//   position: sticky;
//   top: 222px;
// `;
