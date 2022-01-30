import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";

import { useMediaQuery } from "react-responsive";

import { SubNavbar, Input, Selector } from "@/components";
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

  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:979px)",
  });

  const handleCategory = (e) => {
    console.log(e);
  };

  return (
    <>
      <JobIntro />
      {isPc && (
        <ContentBox>
          <StickyNavBox>
            <StickyNav
              data={categoryData}
              theme={theme}
              onClick={handleCategory}
            />
          </StickyNavBox>
          <CardGridBox>
            <InputBox>
              <Input icon="search" placeholder="직무 검색하기" />
              <Selector placeholder="기술 스택" isMulti />
              <Selector
                placeholder="직무"
                options={[
                  { value: "Frontend", label: "프론트엔드" },
                  { value: "Backend", label: "백엔드" },
                  { value: "Android", label: "안드로이드" },
                  { value: "iOS", label: "iOS" },
                  { value: "임베디드", label: "임베디드" },
                ]}
              />
            </InputBox>
            <CardResponsiveGrid data={cardData} theme={theme} />
          </CardGridBox>
        </ContentBox>
      )}
      {isMobile && (
        <>
          <SubNavMobile
            data={categoryData}
            theme={theme}
            onClick={handleCategory}
            type="mobile"
          />
          <SearchBox>
            <Input icon="search" placeholder="직무 검색하기" />
          </SearchBox>
          <ContentBox>
            <CardResponsiveGrid data={cardData} theme={theme} />
          </ContentBox>
        </>
      )}
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

  padding: 20px;
  margin: auto;
`;

const StickyNavBox = styled.div`
  padding-top: 86px;
`;

const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;

const SubNavMobile = styled(SubNavbar)`
  padding: 20px 20px 0 20px;
`;

const CardGridBox = styled.div`
  width: calc(100% - 320px);
  padding-top: 80px;
`;

const InputBox = styled.div`
  display: flex;
  gap: 0.5rem;

  padding-bottom: 1rem;

  > div {
    flex-grow: 1;
  }
`;

const SearchBox = styled.div`
  padding: 20px;
`;
