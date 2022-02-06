import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { SubNavbar, Input, Selector } from "@/components";
import { CardGrid, JobCardGrid } from "@/containers";

const JobMain = () => {
  const theme = useRecoilValue(themeState);

  const handleCategory = (e) => {
    console.log(e);
  };

  return (
    <Layout>
      <StickyNavBox>
        <StickyNav data={categoryData} theme={theme} onClick={handleCategory} />
      </StickyNavBox>
      <CardGridBox>
        <InputBox>
          <Input theme={theme} icon="search" placeholder="공고 검색하기" />
          <Selector theme={theme} placeholder="기술 스택" isMulti />
          <Selector
            theme={theme}
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
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <JobCardGrid theme={theme} />
        </Suspense>
      </CardGridBox>
    </Layout>
  );
};

export default JobMain;

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

const Layout = styled.div`
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

const CardGridBox = styled.div`
  width: calc(100% - 320px);
  padding-top: 80px;
`;

const InputBox = styled.div`
  display: flex;
  gap: 0.5rem;

  max-width: 940px;
  padding-bottom: 2rem;

  > div {
    flex-grow: 1;
  }
`;
