import React from "react";
import styled from "styled-components";

import { SubNavbar } from "@/components";
import { CardGrid, StudyIntro } from "@/containers";

const StudyPage = () => {
  return (
    <Layout>
      <StudyIntro />
      <ContentBox>
        <StickyNav data={categoryData} />
        <CardGrid data={cardData} />
      </ContentBox>
    </Layout>
  );
};

export default StudyPage;

const categoryData = [
  {
    id: 0,
    title: "전체",
  },
  {
    id: 1,
    title: "인기순",
  },
  {
    id: 2,
    title: "나의 스터디",
  },
];
const cardData = [
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "알고리즘 스터디 모집",
      subtitle: "김싸피(6기 / 서울)",
      highlight: "모집중",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
];

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  margin: 90px;
`;
const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
  align-self: flex-start;
`;
