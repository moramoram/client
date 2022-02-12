import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, studySearch } from "@/recoil";

import { StudyCardGrid } from "@/containers";
import { CardGrid } from "@/layouts";
import { SubNavbar, Input, Selector, Checkbox, Sort } from "@/components";

import { debounce } from "@/utils";

const StudyMain = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);
  const [search, setSearch] = useRecoilState(studySearch);

  const handleCategory = (id) => {
    window.scrollTo({ top: 0 });
    setSearch({ ...search, category: id });
  };

  const handleSort = (criteria) => {
    setSearch({ ...search, criteria: criteria });
  };

  const handleKeyword = debounce((keyword) => {
    setSearch({ ...search, title: keyword });
  });

  const handleType = (value) => {
    setSearch({ ...search, studyType: value.label });
  };

  return (
    <Layout>
      <StickyNavBox>
        <StickyNav data={categoryData} theme={theme} onClick={handleCategory} />
      </StickyNavBox>
      <CardGridBox>
        <InputBox>
          <Input
            theme={theme}
            onChange={handleKeyword}
            icon="search"
            placeholder="스터디 검색하기"
          />
          <Selector
            theme={theme}
            onChange={handleType}
            placeholder="종류"
            options={studyOptions}
          />
          {/* <Selector placeholder="기술 스택" isMulti /> */}
        </InputBox>
        <SortBox>
          <Sort theme={theme} onClick={handleSort} items={criteriaData} />
          <Checkbox label="마감된 스터디 숨기기" theme={theme} />
        </SortBox>
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <StudyCardGrid theme={theme} />
        </Suspense>
      </CardGridBox>
    </Layout>
  );
};

export default StudyMain;

const criteriaData = [
  {
    name: "date",
    title: "최신순",
  },
  {
    name: "scrap",
    title: "인기순",
  },
];

const studyOptions = [
  { value: "recruit", label: "채용" },
  { value: "Algorithm", label: "알고리즘" },
  { value: "CS", label: "CS" },
  { value: "Project", label: "프로젝트" },
];

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  max-width: 1280px;
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

  > div {
    flex-grow: 1;
  }
`;

const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 940px;

  padding: 20px 0px 20px 0;
  margin-bottom: 20px;
`;
