import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, jobSearch, jobFilter } from "@/recoil";

import { SubNavbar, Input, Selector, Checkbox, Sort } from "@/components";
import { JobCardGrid } from "@/containers";
import { CardGrid } from "@/layouts";

import { debounce } from "@/utils";

const JobMain = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);
  const [search, setSearch] = useRecoilState(jobSearch);
  const [filter, setFilter] = useRecoilState(jobFilter);

  const handleCategory = (id) => {
    window.scrollTo({ top: 0 });
    id === 3 ? alert("싸피") : setSearch({ ...search, category: id });
  };

  const handleKeyword = debounce((e) => {
    setSearch({ ...search, title: e.target.value });
  });

  const handleSort = (criteria) => {
    setSearch({ ...search, criteria: criteria });
  };

  const handleTechStack = (e) => {
    setSearch({
      ...search,
      techStack: e.map((tech) => {
        return tech.value;
      }),
    });
  };

  const handleJob = (e) => {
    setSearch({ ...search, job: e.label });
  };

  const handleFilter = (e) => {
    setFilter(e.target.checked);
  };

  return (
    <Layout>
      <StickyNavBox>
        <StickyNav
          data={categoryData}
          theme={theme}
          selected={search.category}
          onClick={handleCategory}
        />
      </StickyNavBox>
      <CardGridBox>
        {search.category === 1 && (
          <>
            <InputBox>
              <Input
                theme={theme}
                icon="search"
                placeholder="공고 검색하기"
                onChange={handleKeyword}
              />
              <Selector
                theme={theme}
                placeholder="기술 스택"
                onChange={handleTechStack}
                isMulti
              />
              <Selector
                theme={theme}
                placeholder="직무"
                onChange={handleJob}
                options={techStackOptions}
              />
            </InputBox>
            <SortBox>
              <Sort items={criteriaData} theme={theme} onClick={handleSort} />
              <Checkbox
                label="마감된 스터디 숨기기"
                theme={theme}
                onChange={handleFilter}
                defaultChecked={filter}
              />
            </SortBox>
          </>
        )}
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <JobCardGrid theme={theme} />
        </Suspense>
      </CardGridBox>
    </Layout>
  );
};

export default JobMain;

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

const techStackOptions = [
  { value: "Frontend", label: "프론트엔드" },
  { value: "Backend", label: "백엔드" },
  { value: "Android", label: "안드로이드" },
  { value: "iOS", label: "iOS" },
  { value: "임베디드", label: "임베디드" },
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
