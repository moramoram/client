import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";

import { SubNavbar } from "@/components";
import { CardResponsiveGrid, JobIntro } from "@/containers";

const JobsPage = () => {
  const theme = useRecoilValue(themeState);
  const setNavType = useSetRecoilState(navTypeState);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    !!offset ? setNavType("default") : setNavType("transparent");
    return () => {
      setNavType("default");
    };
  }, [offset, setNavType]);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  const handleCategory = (e) => {
    console.log(e);
  };

  return (
    <>
      <JobIntro />
      <ContentBox>
        <StickyNavBox>
          <StickyNav
            data={categoryData}
            theme={theme}
            onClick={handleCategory}
          />
        </StickyNavBox>
        <CardGrid data={cardData} theme={theme} />
      </ContentBox>
    </>
  );
};

export default JobsPage;

const categoryData = [
  {
    id: 0,
    title: "마감 임박",
  },
  {
    id: 1,
    title: "최신순",
  },
  {
    id: 2,
    title: "인기순",
  },
  {
    id: 3,
    title: "싸피 채용관",
  },
  {
    id: 4,
    title: "내 관심 공고",
  },
];

const cardData = [
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

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  max-width: 1280px;

  padding: 80px 20px 20px 20px;
  margin: auto;
`;

const StickyNavBox = styled.div``;

const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;

const CardGrid = styled(CardResponsiveGrid)`
  width: calc(100% - 320px);
`;
