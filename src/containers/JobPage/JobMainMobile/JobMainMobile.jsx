import React, { Suspense } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, jobSearch, jobFilter } from "@/recoil";

import {
  SubNavMobile,
  MobileCardBox,
  SearchBox,
  SortBox,
} from "./JobMainMobile.styled";
import { CardGrid, Input, Checkbox, Sort } from "@/components";
import { JobCardGrid } from "@/containers/JobPage";

import { debounce } from "@/utils";

const JobMainMobile = ({ categoryData }) => {
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

  const handleFilter = (e) => {
    setFilter(e.target.checked);
  };

  return (
    <>
      <SubNavMobile
        data={categoryData}
        theme={theme}
        onClick={handleCategory}
        selected={search.category}
        view="mobile"
      />
      {search.category === 1 && (
        <>
          <SearchBox>
            <Input
              theme={theme}
              icon="search"
              placeholder="공고 검색하기"
              onChange={handleKeyword}
              defaultValue={search.title}
            />
          </SearchBox>
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
              value={search.criteria}
              onChange={handleFilter}
              defaultChecked={filter}
            />
          </SortBox>
        </>
      )}
      <MobileCardBox>
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <JobCardGrid theme={theme} />
        </Suspense>
      </MobileCardBox>
    </>
  );
};

export default JobMainMobile;

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
