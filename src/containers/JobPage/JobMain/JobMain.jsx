import React, { Suspense } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, jobSearch, jobFilter } from "@/recoil";

import {
  Layout,
  StickyNavBox,
  StickyNav,
  CardGridBox,
  InputBox,
  SortBox,
} from "./JobMain.styled";
import { Input, Selector, Checkbox, Sort, CardGrid } from "@/components";
import { JobCardGrid } from "@/containers/JobPage";

import { debounce } from "@/utils";

const JobMain = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);
  const [search, setSearch] = useRecoilState(jobSearch);
  const [filter, setFilter] = useRecoilState(jobFilter);

  const handleCategory = (id) => {
    window.scrollTo({ top: 0 });
    setSearch({ ...search, category: id });
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
      techStack: e,
    });
  };
  const handleJob = (e) => {
    const value = e ? e.label : "";
    setSearch({ ...search, job: value });
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
                defaultValue={search.title}
              />
              <Selector
                theme={theme}
                placeholder="기술 스택"
                onChange={handleTechStack}
                value={search.techStack}
                isMulti
              />
              <Selector
                theme={theme}
                placeholder="직무"
                onChange={handleJob}
                options={techStackOptions}
                defaultValue={techStackOptions.find(
                  (v) => v.value === search.job
                )}
                isClearable
              />
            </InputBox>
            <SortBox>
              <Sort
                items={criteriaData}
                theme={theme}
                onClick={handleSort}
                value={search.criteria}
              />
              <Checkbox
                label="마감된 채용공고 보기"
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
    label: "최신순",
    value: "date",
  },
  {
    label: "인기순",
    value: "scrap",
  },
];

const techStackOptions = [
  { value: "프론트엔드", label: "프론트엔드" },
  { value: "백엔드", label: "백엔드" },
  { value: "안드로이드", label: "안드로이드" },
  { value: "iOS", label: "iOS" },
  { value: "임베디드", label: "임베디드" },
];
