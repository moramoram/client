import React from "react";
import styled from "styled-components";

import { SubNavbar } from "@/components";
import { CardGrid, JobIntro } from "@/containers";
const JobsPage = () => {
  return (
    <Layout>
      <JobIntro />
      <SubNavbar />
      <CardGrid list={data} />
    </Layout>
  );
};

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
