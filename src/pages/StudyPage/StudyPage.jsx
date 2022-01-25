import React from "react";
import styled from "styled-components";

import { SubNavbar } from "@/components";
import { CardGrid, StudyIntro } from "@/containers";

const StudyPage = () => {
  return (
    <Layout>
      <StudyIntro />
      <SubNavbar />
      <CardGrid list={data} />
    </Layout>
  );
};

const data = [
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

export default StudyPage;

const Layout = styled.div``;
