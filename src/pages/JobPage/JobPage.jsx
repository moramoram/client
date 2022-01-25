import React from "react";
import styled from "styled-components";

import { SubNavbar } from "@/components";
import { CardGrid, JobIntro } from "@/containers";
const JobsPage = () => {
  const handleCategory = (e) => {
    console.log(e);
  };

  return (
    <Layout>
      <JobIntro />
      <SubNavbar data={categoryData} onClick={handleCategory} />
      <CardGrid list={data} />
    </Layout>
  );
};

const categoryData = [
  {
    id: 0,
    title: "커뮤니티",
  },
  {
    id: 1,
    title: "스터디",
  },
  {
    id: 2,
    title: "취업정보",
  },
];

const data = [
  {
    contents: {
      title: "주니어 프론트엔드 채용",
      subtitle: "싸페 디자인 시스템",
      highlight: "D-day",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "주니어 프론트엔드 채용",
      subtitle: "싸페 디자인 시스템",
      highlight: "D-day",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "주니어 프론트엔드 채용",
      subtitle: "싸페 디자인 시스템",
      highlight: "D-day",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "주니어 프론트엔드 채용",
      subtitle: "싸페 디자인 시스템",
      highlight: "D-day",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "주니어 프론트엔드 채용",
      subtitle: "싸페 디자인 시스템",
      highlight: "D-day",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
  {
    contents: {
      title: "주니어 프론트엔드 채용",
      subtitle: "싸페 디자인 시스템",
      highlight: "D-day",
      src: "",
    },
    badges: ["JavaScript", "React", "Vue.js"],
    url: "",
  },
];

export default JobsPage;

const Layout = styled.div``;
