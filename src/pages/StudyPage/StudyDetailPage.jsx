import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { StudyDetail, StudySideBar } from "@/containers";
import { daysFromToday } from "@/utils";

const StudyDetailPage = () => {
  const theme = useRecoilValue(themeState);

  const itemId = useParams().studyId;
  console.log(itemId);

  return (
    <Layout>
      <StudyDetail
        theme={theme}
        titleData={titleData}
        commentData={commentData}
      ></StudyDetail>
      <FixedSidebar theme={theme} {...sidbarargs} />
    </Layout>
  );
};

export default StudyDetailPage;

const titleData = {
  title: "알고리즘 스터디 모집",
  subtitle: "김싸피 (6기/서울)",
  src: null,
  highlight: "모집중",
};

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

const sidbarargs = {
  data: {
    type: "알고리즘",
    target: "-",
    people: "4",
    location: "온라인",
  },

  badges: ["JavaScript", "TypeScript", "Vue.js", "React", "Redux", "Svelte"],
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const FixedSidebar = styled(StudySideBar)`
  position: sticky;
  top: 222px;
`;
