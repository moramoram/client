import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeState, navTypeState } from "@/recoil/theme";

import { SubNavbar, Input, Selector } from "@/components";
import { CardGrid, StudyIntro } from "@/containers";

const StudyPage = () => {
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
      <StudyIntro />
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
              <Input
                theme={theme}
                icon="search"
                placeholder="스터디 검색하기"
              />
              <Selector
                theme={theme}
                placeholder="종류"
                options={[
                  { value: "recruit", label: "채용" },
                  { value: "Algorithm", label: "알고리즘" },
                  { value: "CS", label: "CS" },
                  { value: "Project", label: "프로젝트" },
                ]}
              />
              {/* <Selector placeholder="기술 스택" isMulti /> */}
            </InputBox>
            <CardGrid data={cardData} theme={theme} />
          </CardGridBox>
        </ContentBox>
      )}
      {isMobile && (
        <>
          <SubNavMobile
            data={categoryData}
            theme={theme}
            onClick={handleCategory}
            view="mobile"
          />
          <SearchBox>
            <Input icon="search" placeholder="직무 검색하기" theme={theme} />
          </SearchBox>
          <ContentBox>
            <CardGrid data={cardData} theme={theme} />
          </ContentBox>
        </>
      )}
    </>
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

const cardData = new Array(20).fill({
  contents: {
    title: "알고리즘 스터디 모집",
    subtitle: "김싸피(6기 / 서울)",
    highlight: "모집중",
    src: "",
  },
  badges: ["JavaScript", "React", "Vue.js"],
  id: "/study/1",
});

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
