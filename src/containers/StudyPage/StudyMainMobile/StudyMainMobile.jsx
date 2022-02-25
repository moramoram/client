import React, { Suspense } from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import { themeState, studySearch, studyfilter } from "@/recoil";

import {
  SubNavMobile,
  MobileCardBox,
  SearchBox,
  SortBox,
} from "./StudyMainMobile.styled";
import { StudyCardGrid } from "@/containers";
import { Input, Checkbox, CardGrid, Sort } from "@/components";

import { debounce } from "@/utils";

const StudyMainMobile = ({ categoryData }) => {
  const theme = useRecoilValue(themeState);
  const [search, setSearch] = useRecoilState(studySearch);
  const [filter, setFilter] = useRecoilState(studyfilter);

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
              icon="search"
              placeholder="스터디 검색하기"
              theme={theme}
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
              label="마감된 스터디 숨기기"
              theme={theme}
              onChange={handleFilter}
              defaultChecked={filter}
            />
          </SortBox>
        </>
      )}
      <MobileCardBox>
        <Suspense fallback={<CardGrid theme={theme} isLoading />}>
          <StudyCardGrid theme={theme} />
        </Suspense>
      </MobileCardBox>
    </>
  );
};

export default StudyMainMobile;

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
